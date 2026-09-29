const { createId } = require("../contracts/identifiers.js");
const { createTask, transitionTask } = require("../tasks/state-machine.js");

class NexusRuntimeError extends Error {
  constructor(code, message, status = 400, details = {}) {
    super(message); this.name = "NexusRuntimeError"; this.code = code; this.status = status; this.details = details;
  }
}

class AuthoritativeTaskEngine {
  constructor({ conversations, tasks, tools, executions, consents, audit, executors = {}, verifier, authority = null, observability = null, jobs = null, autonomyControl = null }) {
    Object.assign(this, { conversations, tasks, tools, executions, consents, audit, executors, authority, observability, jobs, autonomyControl });
    this.verifier = verifier || (async ({ result }) => ({ verified: result !== undefined, method: "result_present" }));
  }

  async create({ command, goal, application = "general", riskTier = "low", priority = 3, dueAt = null, steps, autonomous = false }) {
    if (!Array.isArray(steps) || !steps.length) throw new NexusRuntimeError("steps_required", "At least one task step is required.");
    riskTier = storedRiskTier(riskTier);
    // The global kill switch only ever gates new autonomous task creation --
    // it never touches a live-conversation task the user asked for directly
    // (autonomous is always false there), and it never touches advancing a
    // task that already exists (agent.advance-task, acknowledgement, sweeps).
    if (autonomous && this.autonomyControl && await this.autonomyControl.isPaused({ tenantId: command.tenantId })) {
      throw new NexusRuntimeError("autonomy_paused", "Autonomous task creation is paused for this tenant.", 409);
    }
    // ensure() now returns null when conversationId already belongs to a
    // different owner (see its own comment) -- surfacing that loudly here
    // protects every current and future caller of create(), not just the
    // ones that remember to pre-check ownership themselves.
    const conversation = await this.conversations.ensure({ conversationId: command.conversationId, tenantId: command.tenantId, ownerId: command.actorId, title: goal });
    if (!conversation) throw new NexusRuntimeError("conversation_owner_mismatch", "This conversation belongs to a different user.", 403);
    const normalized = [];
    const stepIds = new Map(steps.map((raw, index) => [String(raw.clientStepId || raw.stepId || `step_${index + 1}`), raw.stepId || createId("step")]));
    for (const raw of steps) {
      const tool = raw.toolId ? await this.tools.get(raw.toolId) : null;
      if (raw.toolId && !tool) throw new NexusRuntimeError("unknown_tool", `Tool ${raw.toolId} is not registered.`);
      const clientId = String(raw.clientStepId || raw.stepId || `step_${normalized.length + 1}`);
      normalized.push({ stepId: stepIds.get(clientId), title: required(raw.title, "Step title"),
        toolId: raw.toolId || null, fallbackToolIds: raw.fallbackToolIds || [], input: raw.input || {}, dependsOn: (raw.dependsOn || []).map(id => stepIds.get(String(id)) || String(id)), state: "pending",
        confirmationRequired: Boolean(tool?.confirmation_required),
        idempotencyKey: raw.idempotencyKey || `${command.tenantId}:${createId("step")}` });
    }
    validateDependencies(normalized);
    let task = createTask({ tenantId: command.tenantId, ownerId: command.actorId,
      conversationId: command.conversationId, commandId: command.commandId,
      correlationId: command.correlationId, goal,
      application, riskTier, priority, dueAt, autonomous });
    await this.tasks.create(task, normalized);
    task = transitionTask(task, "planned", { actorId: "nexus-brain", reason: "Durable plan created" });
    await this.tasks.save(task, 1);
    await this.audit.record({ tenantId: task.tenantId, actorId: command.actorId, correlationId: task.correlationId,
      taskId: task.taskId, eventType: "task.created", outcome: "planned", metadata: { stepCount: normalized.length, autonomous } });
    if (autonomous && this.jobs) {
      // The one moment nothing else will ever re-trigger this task on its own:
      // right after creation. Every later re-drive (confirmation approved,
      // a crashed job, a stalled step) goes through the self-healing sweep
      // instead, so this key only needs to dedupe repeated create() retries
      // at the same task version, not future re-execution.
      await this.jobs.enqueue({ tenantId: task.tenantId, taskId: task.taskId, jobType: "agent.advance-task",
        idempotencyKey: `agent-advance:${task.taskId}:v${task.version}`, payload: { taskId: task.taskId } });
    }
    return { ...task, steps: normalized };
  }

  async transition({ tenantId, taskId, actorId, nextState, reason, outcome = null }) {
    const current = await this.tasks.get({ tenantId, taskId, includeSteps: false });
    if (!current) throw new NexusRuntimeError("task_not_found", "Task not found.", 404);
    const updated = transitionTask(current, nextState, { actorId, reason, outcome });
    await this.tasks.save(updated, current.version);
    await this.audit.record({ tenantId, actorId, correlationId: current.correlationId, taskId,
      eventType: "task.transition", outcome: nextState, metadata: { from: current.state, reason } });
    return updated;
  }

  async approve({ tenantId, taskId, stepId, actorId, approved }) {
    const step = await this.requiredStep({ tenantId, taskId, stepId });
    const updated = await this.tasks.approveStep({ tenantId, taskId, stepId, approved });
    const task = await this.tasks.get({ tenantId, taskId, includeSteps: false });
    await this.audit.record({ tenantId, actorId, correlationId: task.correlationId, taskId,
      eventType: approved ? "step.approved" : "step.rejected", outcome: approved ? "approved" : "rejected",
      metadata: { stepId, previous: step.confirmation_state } });
    return updated;
  }

  async execute({ context, taskId, stepId }) {
    const step = await this.requiredStep({ tenantId: context.tenantId, taskId, stepId });
    if (!step.tool_id) throw new NexusRuntimeError("step_has_no_tool", "Step has no executable tool.", 409);
    if (step.state === "completed") {
      for (const [attempt, toolId] of [step.tool_id, ...(step.fallback_tool_ids || [])].entries()) {
        for (const key of executionKeys(step, toolId, attempt)) {
          const previous = await this.executions.get({ tenantId: context.tenantId, idempotencyKey: key });
          if (previous?.state === "completed") return verifiedDuplicate(previous);
        }
      }
      throw new NexusRuntimeError("completed_receipt_missing", "The step is complete but its verified execution receipt is unavailable.", 409);
    }
    if (["cancelled", "skipped"].includes(step.state)) throw new NexusRuntimeError("step_not_executable", `A ${step.state} step cannot execute.`, 409);
    const taskWithSteps = await this.tasks.get({ tenantId: context.tenantId, taskId, includeSteps: true });
    const dependencies = new Set(step.depends_on || []);
    const incomplete = (taskWithSteps?.steps || []).filter(candidate => dependencies.has(candidate.step_id) && candidate.state !== "completed");
    if (incomplete.length || dependencies.size > (taskWithSteps?.steps || []).filter(candidate => dependencies.has(candidate.step_id)).length) {
      throw new NexusRuntimeError("dependencies_incomplete", "Every prerequisite step must complete before this step can execute.", 409,
        { stepId, dependencies: [...dependencies], incomplete: incomplete.map(candidate => candidate.step_id) });
    }
    const candidates = [step.tool_id, ...(step.fallback_tool_ids || [])]; let lastError = null;
    // Tracks whether ANY candidate this call actually reached executions.start() (a real, billable attempt) --
    // as opposed to every candidate being turned away by a pre-flight guard (unavailable, unconfirmed, or
    // already retry-exhausted) before ever trying. executeTask() uses this to tell "a real attempt just failed
    // and a legitimate future retry may still succeed" (leave the task running) apart from "nothing can ever
    // progress with the current configuration" (see the throw below, and executeTask()'s own comment).
    let attemptedExecution = false;
    const retryOrdinal = step.state === "failed" ? Number(step.attempt_count || 1) + 1 : 1;
    for (const [attempt, toolId] of candidates.entries()) {
      const tool = await this.tools.get(toolId); const executor = tool && this.executors[tool.tool_id];
      const authorityOwnsTool = Boolean(tool && this.authority?.has?.(tool.tool_id));
      if (!tool || tool.availability !== "available" || (!authorityOwnsTool && typeof executor !== "function")) {
        lastError = new NexusRuntimeError("tool_unavailable", `Tool ${toolId} has no available authoritative execution owner.`, 503); continue;
      }
      // Found live (record-repository/consent follow-up audit): a permission/role/confirmation/consent DENIAL
      // threw straight out of execute() with no audit.record() anywhere in the call chain -- only a successful
      // completion (below) or a genuine provider failure (the catch block below) were ever audited. A
      // revoked-consent refusal, or a pattern of repeated unauthorized attempts, was invisible on the audit
      // review surface that's explicitly documented as "everything Kyro did, for a human to actually look at."
      const auditDenial = denied => this.audit.record({ tenantId: context.tenantId, actorId: context.userId,
        correlationId: taskWithSteps?.correlationId, taskId, eventType: "tool.denied", outcome: "denied",
        metadata: { toolId: tool.tool_id, code: denied.code, message: denied.message } });
      try {
        authorize(context, tool);
      } catch (denied) { await auditDenial(denied); throw denied; }
      // Found live: step.confirmation_state is computed ONCE, from only the PRIMARY tool, when the task is
      // created (create()'s `confirmationRequired: Boolean(tool?.confirmation_required)` never looks at
      // fallbackToolIds). A fallback tool that itself requires confirmation but was never separately approved
      // used to hit authorize()'s hard throw here -- OUTSIDE the per-candidate try/catch below -- crashing
      // execute() and executeTask() entirely with an unhandled error instead of degrading to the next candidate
      // (or a clear final failure) the same way an unavailable/retry-exhausted candidate already does. This
      // still fails CLOSED (the unconfirmed fallback never runs), it just no longer takes the whole task down --
      // still audited as a denial either way.
      if (tool.confirmation_required && step.confirmation_state !== "approved") {
        const denied = new NexusRuntimeError("confirmation_required", `Tool ${toolId} requires confirmation that was never given for this step.`, 409);
        await auditDenial(denied); lastError = denied; continue;
      }
      if (tool.consent_scope) {
        const consent = await this.consents.active({ tenantId: context.tenantId, subjectId: context.userId, scope: tool.consent_scope, taskId });
        if (!consent) { const denied = new NexusRuntimeError("consent_required", `Active consent is required for ${tool.consent_scope}.`, 403); await auditDenial(denied); throw denied; }
      }
      if (retryOrdinal > Number(tool.max_attempts || 1)) { lastError = new NexusRuntimeError("retry_exhausted", `Tool ${toolId} exhausted its governed retry limit.`, 409,
        { toolId, attempts: Number(step.attempt_count || 0), maxAttempts: Number(tool.max_attempts || 1) }); continue; }
      const baseKey = attempt ? `${step.idempotency_key}:fallback:${toolId}` : step.idempotency_key;
      const key = retryOrdinal > 1 ? `${baseKey}:retry:${retryOrdinal}` : baseKey;
      const previous = await this.executions.get({ tenantId: context.tenantId, idempotencyKey: key });
      if (previous?.state === "completed") return verifiedDuplicate(previous);
      const estimatedCostCents = Number(tool.metadata?.estimatedCostCents || 0);
      // Budget refusal occurs before claiming an execution or contacting its provider.
      if (this.observability) await this.observability.assertCostAllowed({ tenantId: context.tenantId,
        estimatedCostCents, operationLimitCents: tool.cost_limit_cents });
      const started = await this.executions.start({ tenantId: context.tenantId, taskId, stepId,
        toolId: tool.tool_id, actorId: context.userId, idempotencyKey: key, request: step.input });
      if (started.duplicate) return verifiedDuplicate(started.execution);
      attemptedExecution = true;
      const observedAt = Date.now();
      const span = this.observability ? await observeSafely(() => this.observability.startSpan({
        traceId: context.requestId, tenantId: context.tenantId, taskId, operation: "tool.execute",
        attributes: { stepId, toolId: tool.tool_id } })) : null;
      const providerId = tool.metadata?.provider || tool.domain || tool.tool_id;
      try {
      const dependencyOutputs = Object.fromEntries((taskWithSteps?.steps || [])
        .filter(candidate => dependencies.has(candidate.step_id))
        .map(candidate => [candidate.step_id, candidate.output]));
      const input = dependencies.size ? { ...step.input, dependencyOutputs } : step.input;
      let result; let verification;
      if (authorityOwnsTool) {
        const governed = await withTimeout(this.authority.execute({ tool, input, context, taskId, stepId,
          idempotencyKey: key }), tool.timeout_ms);
        result = governed.result; verification = governed.verification;
      } else {
        result = await withTimeout(Promise.resolve(executor({ input, context, taskId, stepId,
          idempotencyKey: key })), tool.timeout_ms);
        verification = await this.verifier({ tool, result, context, taskId, stepId });
      }
      if (!verification?.verified) throw new NexusRuntimeError("outcome_unverified", "Tool result could not be verified.", 502, { verification });
      const receipt = makeReceipt(started.execution.execution_id, taskId, stepId, tool.tool_id,
        key, "completed", { ...verification, selectedTool: toolId, fallbackAttempt: attempt });
      const execution = await this.executions.finish({ tenantId: context.tenantId,
        executionId: started.execution.execution_id, stepId, successful: true, response: result, receipt, verified: true });
      // Found live (notifications/push-delivery audit): the real tool call and its
      // verification (above) already genuinely completed by this point, and finish()
      // just durably recorded it. The audit-log write and observability calls below
      // are bookkeeping, not the operation itself -- if either threw (a transient DB
      // blip), this used to fall straight into the catch below, which calls
      // finish(successful:false) on the SAME executionId, silently overwriting an
      // already-completed, already-verified execution back to 'failed'. The next
      // retry then computes a brand-new idempotency key (`${baseKey}:retry:N`),
      // which the duplicate check never matches against the original completed key,
      // so the real tool call runs AGAIN for real -- e.g. a second, genuinely
      // duplicate reminders.schedule notification. A bookkeeping failure after a
      // confirmed completion must never re-trigger the tool, so it gets its own
      // non-requeuing catch, matching the identical pattern already established for
      // notifications.deliver() in nexus/workers/handlers.js.
      try {
        const task = await this.tasks.get({ tenantId: context.tenantId, taskId, includeSteps: false });
        await this.audit.record({ tenantId: context.tenantId, actorId: context.userId,
          correlationId: task.correlationId, taskId, eventType: "tool.completed", outcome: "verified", metadata: receipt });
        if (this.observability) {
          await observeSafely(() => this.observability.recordCost({ tenantId: context.tenantId, taskId,
            toolId: tool.tool_id, provider: providerId, estimatedCostCents: result?.costCents ?? estimatedCostCents,
            metadata: { executionId: started.execution.execution_id } }));
          await observeSafely(() => this.observability.recordProviderHealth({ tenantId: context.tenantId,
            providerId, successful: true, latencyMs: Date.now() - observedAt }));
          if (span) await observeSafely(() => this.observability.finishSpan(span, { attributes: { verified: true } }));
        }
      } catch {
        // The real execution is already durably completed; a failure recording the
        // audit trail or observability metrics must not be treated as the tool
        // itself having failed.
      }
      return { execution, duplicate: false, receipt };
      } catch (cause) {
      const error = sanitizeProviderFailure(cause, context);
      const receipt = makeReceipt(started.execution.execution_id, taskId, stepId, tool.tool_id,
        key, "failed", { verified: false, error, selectedTool: toolId, fallbackAttempt: attempt });
      await this.executions.finish({ tenantId: context.tenantId, executionId: started.execution.execution_id,
        stepId, successful: false, error, receipt, verified: false });
      await this.audit.record({ tenantId: context.tenantId, actorId: context.userId,
        correlationId: taskWithSteps.correlationId, taskId, eventType: "provider.failed", outcome: "failed",
        metadata: error });
        if (this.observability) {
          // Found live: recordCost() was only ever called on the SUCCESS path. The real, billable provider call
          // already happened above (result = await withTimeout(...executor...)) before outcome verification --
          // an outcome_unverified failure, a late timeout, or any other post-call exception meant a real charge
          // could have been incurred but was never written to the cost ledger, understating actual spend against
          // both the per-tool ceiling and the tenant's daily budget. Falls back to the pre-execution estimate,
          // the same way the success path falls back to it when an executor doesn't report its own actual cost.
          await observeSafely(() => this.observability.recordCost({ tenantId: context.tenantId, taskId,
            toolId: tool.tool_id, provider: providerId, estimatedCostCents: cause?.costCents ?? estimatedCostCents,
            metadata: { executionId: started.execution.execution_id, outcome: "failed" } }));
          await observeSafely(() => this.observability.recordProviderHealth({ tenantId: context.tenantId,
            providerId, successful: false, latencyMs: Date.now() - observedAt, errorCode: error.code }));
          if (span) await observeSafely(() => this.observability.finishSpan(span, { state: "error", error }));
          await observeSafely(() => this.observability.alert({ tenantId: context.tenantId,
            alertKey: `provider:${providerId}`, summary: "A governed provider attempt failed.", evidence: error }));
        }
        lastError = cause;
      }
    }
    const finalError = lastError || new NexusRuntimeError("tool_unavailable", "No governed tool was available; nothing was executed.", 503);
    finalError.attemptedExecution = attemptedExecution;
    throw finalError;
  }

  async executeTask({ context, taskId }) {
    let task = await this.tasks.get({ tenantId: context.tenantId, taskId, includeSteps: true });
    if (!task) throw new NexusRuntimeError("task_not_found", "Task not found.", 404);
    if (task.ownerId !== context.userId && !context.hasRole?.("admin")) throw new NexusRuntimeError("task_owner_required", "Only the task owner may execute this task.", 403);
    if (["completed", "cancelled", "blocked", "expired"].includes(task.state)) throw new NexusRuntimeError("task_not_executable", `A ${task.state} task cannot execute.`, 409);
    // Found live (task state-machine/confirmation-flow audit): "paused" is a legal
    // transition target (nexus/tasks/state-machine.js) reachable via the generic
    // transition endpoint, but nothing below specially handles it the way
    // "planned"/"awaiting_confirmation"/"queued" are -- a paused task fell
    // straight into the step loop and kept executing real tools while the DB
    // state stayed "paused". Worse, the loop's own completion check only fires
    // when task.state === "running", so even a paused task whose steps all
    // finished could never reach "verifying"/"completed". paused's only legal
    // forward transition is back to "queued" (an explicit resume action) --
    // refuse to execute here instead of silently ignoring the pause.
    if (task.state === "paused") throw new NexusRuntimeError("task_paused", "This task is paused. Resume it before it can execute.", 409);
    if (task.state === "planned") await this.transition({ tenantId: context.tenantId, taskId, actorId: context.userId,
      nextState: "queued", reason: "Governed task execution requested" });
    // Found live: a task returning here to resume after the user answered a
    // pending confirmation (see the awaiting_confirmation persistence below)
    // was never routed back through queued -- resume it the same two-hop way
    // a freshly planned task starts, so the same "queued" transition audit
    // trail exists for both paths.
    task = await this.tasks.get({ tenantId: context.tenantId, taskId, includeSteps: true });
    if (task.state === "awaiting_confirmation") await this.transition({ tenantId: context.tenantId, taskId, actorId: context.userId,
      nextState: "queued", reason: "Confirmation resolved; resuming task execution" });
    task = await this.tasks.get({ tenantId: context.tenantId, taskId, includeSteps: true });
    if (task.state === "queued") await this.transition({ tenantId: context.tenantId, taskId, actorId: context.userId,
      nextState: "running", reason: "Governed task execution started" });

    // Found live: neither throw below (an unrecoverable step, or execute() exhausting every candidate tool) ever
    // transitioned the task itself out of "running" -- both propagated straight out of executeTask() uncaught,
    // leaving the task frozen at "running" forever. Since agent.sweep-advanceable-tasks re-enqueues any autonomous
    // task still in "running" past its staleness window with a freshly-randomized (never deduped) idempotency
    // key, this created an unbounded, forever-repeating job storm: every sweep cycle re-tries the exact same
    // already-exhausted step, hits the exact same failure, and never self-corrects. A live-conversation task hit
    // the milder half of the same bug -- it just permanently misreports itself as "running" to any later query.
    // Mirrors blockStalledAutonomousTaskIfApplicable() in nexus/workers/handlers.js, the established convention
    // for this codebase's other "permanently stuck, stop treating it as in-flight" case (a stalled "verifying"
    // task) -- blocked() is used there for the same reason: terminal, so nothing ever revives it by accident.
    const blockOnUnrecoverableFailure = async cause => {
      await this.transition({ tenantId: context.tenantId, taskId, actorId: context.userId,
        nextState: "blocked", reason: `Task execution permanently stalled: ${cause.code || cause.message || "unknown error"}` }).catch(() => {});
    };
    const receipts = [];
    while (true) {
      task = await this.tasks.get({ tenantId: context.tenantId, taskId, includeSteps: true });
      const remaining = (task.steps || []).filter(step => !["completed", "cancelled", "skipped"].includes(step.state));
      if (!remaining.length) break;
      const completed = new Set((task.steps || []).filter(step => step.state === "completed").map(step => step.step_id));
      const ready = remaining.find(step => (step.depends_on || []).every(id => completed.has(id)));
      if (!ready) {
        const blocked = new NexusRuntimeError("task_execution_blocked", "No task step can proceed; prerequisites or prior failures require attention.", 409,
          { remaining: remaining.map(step => ({ stepId: step.step_id, state: step.state, dependsOn: step.depends_on || [] })) });
        await blockOnUnrecoverableFailure(blocked);
        throw blocked;
      }
      if (ready.confirmation_state === "required") {
        // Found live: this returned state: "awaiting_confirmation" to the
        // caller but never persisted it -- the task's real DB state stayed
        // "running" for as long as the person took to respond (could be
        // hours for an autonomous task's push confirmation). Since
        // agent.sweep-advanceable-tasks re-drives any autonomous task still
        // sitting in "running" past its staleness window, this created an
        // unbounded, indefinitely-repeating agent.advance-task job every
        // sweep cycle for the entire wait -- pure waste, since nothing about
        // a pending human confirmation is fixed by retrying; only the
        // person's own reply (which calls approve() then executeTask()
        // directly) can ever resolve it. It also made task.state externally
        // report "running" instead of the real "awaiting your approval"
        // status to any dashboard or service reading it directly.
        const persisted = await this.transition({ tenantId: context.tenantId, taskId, actorId: context.userId,
          nextState: "awaiting_confirmation", reason: "Step requires user confirmation before proceeding" });
        return { task: persisted, state: "awaiting_confirmation", pendingStepId: ready.step_id, receipts, completed: false };
      }
      let result;
      try {
        result = await this.execute({ context, taskId, stepId: ready.step_id });
      } catch (cause) {
        // A genuine attempt (cause.attemptedExecution) means the step's own attempt_count just advanced and a
        // legitimate future executeTask() call may still retry it successfully -- leave the task "running" for
        // that, matching the existing, deliberate retry-then-resume behavior. Only block when NO candidate ever
        // even reached executions.start() this call (every one was turned away by availability/confirmation/
        // retry-exhaustion first) -- nothing about that will ever change on its own, so retrying is pointless.
        if (!cause.attemptedExecution) await blockOnUnrecoverableFailure(cause);
        throw cause;
      }
      if (result.receipt) receipts.push(result.receipt);
    }

    task = await this.tasks.get({ tenantId: context.tenantId, taskId, includeSteps: false });
    if (task.state === "running") task = await this.transition({ tenantId: context.tenantId, taskId, actorId: context.userId,
      nextState: "verifying", reason: "All workflow steps completed; verifying user outcome" });
    return { task, state: "awaiting_render", receipts, completed: false, renderRequired: true };
  }

  async acknowledgeRender({ context, taskId, commandId, correlationId, workspace, rendered, visible, audible = false, evidence = {} }) {
    const task = await this.tasks.get({ tenantId: context.tenantId, taskId, includeSteps: false });
    if (!task) throw new NexusRuntimeError("task_not_found", "Task not found.", 404);
    if (task.ownerId !== context.userId && !context.hasRole?.("admin")) {
      throw new NexusRuntimeError("task_owner_required", "Only the task owner may acknowledge its outcome.", 403);
    }
    if (task.state !== "verifying") {
      throw new NexusRuntimeError("render_acknowledgement_not_expected", "This task is not awaiting a renderer acknowledgement.", 409);
    }
    if (task.commandId !== commandId || task.correlationId !== correlationId) {
      throw new NexusRuntimeError("command_acknowledgement_mismatch", "Renderer acknowledgement does not match the active command.", 409);
    }
    if (!rendered || (!visible && !audible)) {
      throw new NexusRuntimeError("user_outcome_unverified", "The requested visible or audible outcome was not verified.", 422);
    }
    const outcome = { verified: true, visibleOrAudible: true, rendered: true, visible: Boolean(visible),
      audible: Boolean(audible), workspace: required(workspace, "Workspace"), commandId, correlationId, evidence };
    const completed = await this.transition({ tenantId: context.tenantId, taskId, actorId: context.userId,
      nextState: "completed", reason: "Authoritative renderer acknowledged the user outcome", outcome });
    return { task: completed, state: "completed", completed: true, outcome };
  }

  // The autonomous counterpart to acknowledgeRender(): a background-executed
  // task has no live UI to have shown or spoken the outcome, so it can never
  // satisfy acknowledgeRender()'s rendered/visible/audible requirement. This
  // reaches the same verifying -> completed transition on a distinct kind of
  // real evidence instead -- a verified push-delivery receipt for the task's
  // outcome summary -- and only ever applies to a task created autonomous:true.
  async acknowledgeAutonomousDelivery({ context, taskId, commandId, correlationId, deliveryReceipt = {} }) {
    const task = await this.tasks.get({ tenantId: context.tenantId, taskId, includeSteps: false });
    if (!task) throw new NexusRuntimeError("task_not_found", "Task not found.", 404);
    if (task.ownerId !== context.userId && !context.hasRole?.("admin")) {
      throw new NexusRuntimeError("task_owner_required", "Only the task owner may acknowledge its outcome.", 403);
    }
    if (!task.autonomous) {
      throw new NexusRuntimeError("task_not_autonomous", "Only an autonomous task can be acknowledged by delivery receipt.", 409);
    }
    if (task.state !== "verifying") {
      throw new NexusRuntimeError("render_acknowledgement_not_expected", "This task is not awaiting a delivery acknowledgement.", 409);
    }
    if (task.commandId !== commandId || task.correlationId !== correlationId) {
      throw new NexusRuntimeError("command_acknowledgement_mismatch", "Delivery acknowledgement does not match the active command.", 409);
    }
    if (!deliveryReceipt?.verified) {
      throw new NexusRuntimeError("delivery_outcome_unverified", "The autonomous outcome delivery was not verified.", 422);
    }
    const outcome = { verified: true, deliveredViaPush: true, deliveryReceipt, commandId, correlationId };
    const completed = await this.transition({ tenantId: context.tenantId, taskId, actorId: context.userId,
      nextState: "completed", reason: "Verified push delivery acknowledged the autonomous outcome", outcome });
    return { task: completed, state: "completed", completed: true, outcome };
  }

  async requiredStep(input) {
    const step = await this.tasks.getStep(input);
    if (!step) throw new NexusRuntimeError("step_not_found", "Task step not found.", 404);
    return step;
  }
}

function sanitizeProviderFailure(cause, context = {}) {
  const safe = value => String(value || "").replace(/[^a-z0-9_.-]/gi, "-").slice(0, 80);
  return Object.freeze({ status: Number(cause?.status || 503), code: safe(cause?.code || "provider_request_failed"),
    message: "The authoritative source provider could not complete this request.",
    stage: safe(cause?.stage || "provider-execution"), requestId: safe(context.requestId || context.correlationId || "unavailable") });
}

function authorize(context, tool) {
  if (tool.required_permission && !context.can(tool.required_permission)) throw new NexusRuntimeError("permission_denied", `Missing permission: ${tool.required_permission}`, 403);
  if (tool.required_role && !context.hasRole(tool.required_role)) throw new NexusRuntimeError("role_required", `Required role: ${tool.required_role}`, 403);
}
function required(value, name) { if (!String(value || "").trim()) throw new NexusRuntimeError("invalid_input", `${name} is required.`); return value.trim(); }
function validateDependencies(steps) {
  const ids = new Set(steps.map(step => step.stepId));
  const edges = new Map(steps.map(step => [step.stepId, step.dependsOn || []]));
  for (const [stepId, dependencies] of edges) {
    for (const dependency of dependencies) {
      if (!ids.has(dependency)) throw new NexusRuntimeError("unknown_dependency", `Step ${stepId} depends on an unknown step.`);
      if (dependency === stepId) throw new NexusRuntimeError("cyclic_dependencies", "A task step cannot depend on itself.");
    }
  }
  const visiting = new Set(); const visited = new Set();
  const visit = stepId => {
    if (visiting.has(stepId)) throw new NexusRuntimeError("cyclic_dependencies", "Task step dependencies must be acyclic.");
    if (visited.has(stepId)) return;
    visiting.add(stepId); for (const dependency of edges.get(stepId) || []) visit(dependency);
    visiting.delete(stepId); visited.add(stepId);
  };
  for (const stepId of ids) visit(stepId);
}
function makeReceipt(executionId, taskId, stepId, toolId, key, state, verification) {
  return { schema: "nexus.receipt.v1", receiptId: createId("receipt"), executionId, taskId, stepId,
    toolId, idempotencyKey: key, state, verification, occurredAt: new Date().toISOString() };
}
function verifiedDuplicate(execution) {
  if (execution?.state === "completed" && execution.receipt?.verification?.verified === true) {
    return { execution, duplicate: true, receipt: execution.receipt };
  }
  if (execution?.state === "completed") throw new NexusRuntimeError("completed_receipt_missing", "The prior execution has no verified completion receipt.", 409);
  if (execution?.state === "failed") throw new NexusRuntimeError("previous_execution_failed", "The prior failed execution requires the governed recovery path.", 409);
  // A concurrent claim must never cause another provider to execute the same action.
  throw new NexusRuntimeError("execution_in_progress", "The idempotent execution is still in progress.", 409);
}
function executionKeys(step, toolId, fallbackAttempt) {
  const base = fallbackAttempt ? `${step.idempotency_key}:fallback:${toolId}` : step.idempotency_key;
  const keys = [base];
  for (let ordinal = 2; ordinal <= Number(step.attempt_count || 1); ordinal += 1) keys.push(`${base}:retry:${ordinal}`);
  return keys.reverse();
}
function withTimeout(promise, ms = 30000) {
  let timer; const timeout = new Promise((_, reject) => { timer = setTimeout(() => reject(new NexusRuntimeError("tool_timeout", `Tool exceeded ${ms}ms.`, 504)), ms); });
  return Promise.race([promise, timeout]).finally(() => clearTimeout(timer));
}

// nexus_tasks.risk_tier only accepts these four values (foundation/migrations/003_nexus_unified_runtime.sql).
// The planner's emergency plan (health.emergency-guidance) says "critical", which the database rejected with
// check violation 23514, so EVERY emergency request ("I have chest pain") returned a 503 instead of guidance.
// Anything above the stored range is kept at the highest stored tier, and an unknown value fails safe to the
// same tier rather than crashing; the planner's own label is unchanged.
const STORED_RISK_TIERS = new Set(["low", "medium", "high", "regulated"]);
function storedRiskTier(value) {
  const tier = String(value || "low");
  return STORED_RISK_TIERS.has(tier) ? tier : "regulated";
}

module.exports = Object.freeze({ AuthoritativeTaskEngine, NexusRuntimeError, sanitizeProviderFailure });

async function observeSafely(work) { try { return await work(); } catch { return null; } }
