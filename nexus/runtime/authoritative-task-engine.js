const { createId } = require("../contracts/identifiers.js");
const { createTask, transitionTask } = require("../tasks/state-machine.js");

class NexusRuntimeError extends Error {
  constructor(code, message, status = 400, details = {}) {
    super(message); this.name = "NexusRuntimeError"; this.code = code; this.status = status; this.details = details;
  }
}

class AuthoritativeTaskEngine {
  constructor({ conversations, tasks, tools, executions, consents, audit, executors = {}, verifier }) {
    Object.assign(this, { conversations, tasks, tools, executions, consents, audit, executors });
    this.verifier = verifier || (async ({ result }) => ({ verified: result !== undefined, method: "result_present" }));
  }

  async create({ command, goal, application = "general", riskTier = "low", priority = 3, dueAt = null, steps }) {
    if (!Array.isArray(steps) || !steps.length) throw new NexusRuntimeError("steps_required", "At least one task step is required.");
    await this.conversations.ensure({ conversationId: command.conversationId, tenantId: command.tenantId, ownerId: command.actorId, title: goal });
    const normalized = [];
    for (const raw of steps) {
      const tool = raw.toolId ? await this.tools.get(raw.toolId) : null;
      if (raw.toolId && !tool) throw new NexusRuntimeError("unknown_tool", `Tool ${raw.toolId} is not registered.`);
      normalized.push({ stepId: raw.stepId || createId("step"), title: required(raw.title, "Step title"),
        toolId: raw.toolId || null, input: raw.input || {}, dependsOn: raw.dependsOn || [], state: "pending",
        confirmationRequired: Boolean(tool?.confirmation_required),
        idempotencyKey: raw.idempotencyKey || `${command.tenantId}:${createId("step")}` });
    }
    let task = createTask({ tenantId: command.tenantId, ownerId: command.actorId,
      conversationId: command.conversationId, correlationId: command.correlationId, goal,
      application, riskTier, priority, dueAt });
    await this.tasks.create(task, normalized);
    task = transitionTask(task, "planned", { actorId: "nexus-brain", reason: "Durable plan created" });
    await this.tasks.save(task, 1);
    await this.audit.record({ tenantId: task.tenantId, actorId: command.actorId, correlationId: task.correlationId,
      taskId: task.taskId, eventType: "task.created", outcome: "planned", metadata: { stepCount: normalized.length } });
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
    const tool = await this.tools.get(step.tool_id);
    if (!tool) throw new NexusRuntimeError("unknown_tool", `Tool ${step.tool_id} is not registered.`, 409);
    authorize(context, tool, step);
    const previous = await this.executions.get({ tenantId: context.tenantId, idempotencyKey: step.idempotency_key });
    if (previous) return verifiedDuplicate(previous);
    if (["completed", "cancelled", "skipped"].includes(step.state)) throw new NexusRuntimeError("step_not_executable", `A ${step.state} step cannot execute.`, 409);
    const executor = this.executors[tool.tool_id];
    if (tool.availability !== "available" || typeof executor !== "function") {
      throw new NexusRuntimeError("tool_unavailable", `Tool ${tool.tool_id} is unavailable; nothing was executed.`, 503,
        { availability: tool.availability, executorConfigured: typeof executor === "function" });
    }
    if (tool.consent_scope) {
      const consent = await this.consents.active({ tenantId: context.tenantId, subjectId: context.userId,
        scope: tool.consent_scope, taskId });
      if (!consent) throw new NexusRuntimeError("consent_required", `Active consent is required for ${tool.consent_scope}.`, 403);
    }
    const started = await this.executions.start({ tenantId: context.tenantId, taskId, stepId,
      toolId: tool.tool_id, actorId: context.userId, idempotencyKey: step.idempotency_key, request: step.input });
    if (started.duplicate) return verifiedDuplicate(started.execution);
    try {
      const result = await withTimeout(Promise.resolve(executor({ input: step.input, context, taskId, stepId,
        idempotencyKey: step.idempotency_key })), tool.timeout_ms);
      const verification = await this.verifier({ tool, result, context, taskId, stepId });
      if (!verification?.verified) throw new NexusRuntimeError("outcome_unverified", "Tool result could not be verified.", 502, { verification });
      const receipt = makeReceipt(started.execution.execution_id, taskId, stepId, tool.tool_id,
        step.idempotency_key, "completed", verification);
      const execution = await this.executions.finish({ tenantId: context.tenantId,
        executionId: started.execution.execution_id, stepId, successful: true, response: result, receipt, verified: true });
      const task = await this.tasks.get({ tenantId: context.tenantId, taskId, includeSteps: false });
      await this.audit.record({ tenantId: context.tenantId, actorId: context.userId,
        correlationId: task.correlationId, taskId, eventType: "tool.completed", outcome: "verified", metadata: receipt });
      return { execution, duplicate: false, receipt };
    } catch (cause) {
      const error = { code: cause.code || "execution_failed", message: cause.message || "Execution failed" };
      const receipt = makeReceipt(started.execution.execution_id, taskId, stepId, tool.tool_id,
        step.idempotency_key, "failed", { verified: false, error });
      await this.executions.finish({ tenantId: context.tenantId, executionId: started.execution.execution_id,
        stepId, successful: false, error, receipt, verified: false });
      throw cause;
    }
  }

  async requiredStep(input) {
    const step = await this.tasks.getStep(input);
    if (!step) throw new NexusRuntimeError("step_not_found", "Task step not found.", 404);
    return step;
  }
}

function authorize(context, tool, step) {
  if (tool.required_permission && !context.can(tool.required_permission)) throw new NexusRuntimeError("permission_denied", `Missing permission: ${tool.required_permission}`, 403);
  if (tool.required_role && !context.hasRole(tool.required_role)) throw new NexusRuntimeError("role_required", `Required role: ${tool.required_role}`, 403);
  if (tool.confirmation_required && step.confirmation_state !== "approved") throw new NexusRuntimeError("confirmation_required", "Explicit confirmation is required.", 409);
}
function required(value, name) { if (!String(value || "").trim()) throw new NexusRuntimeError("invalid_input", `${name} is required.`); return value.trim(); }
function makeReceipt(executionId, taskId, stepId, toolId, key, state, verification) {
  return { schema: "nexus.receipt.v1", receiptId: createId("receipt"), executionId, taskId, stepId,
    toolId, idempotencyKey: key, state, verification, occurredAt: new Date().toISOString() };
}
function verifiedDuplicate(execution) {
  if (execution?.state === "completed" && execution?.receipt?.verification?.verified === true) {
    return { execution, duplicate: true, receipt: execution.receipt };
  }
  if (execution?.state === "failed") {
    throw new NexusRuntimeError("previous_execution_failed", "The prior idempotent execution failed and must be retried through the task recovery path.", 409,
      { executionId: execution.execution_id });
  }
  throw new NexusRuntimeError("execution_in_progress", "The idempotent execution exists but has no verified completion receipt.", 409,
    { executionId: execution?.execution_id || null, state: execution?.state || "unknown" });
}
function withTimeout(promise, ms = 30000) {
  let timer; const timeout = new Promise((_, reject) => { timer = setTimeout(() => reject(new NexusRuntimeError("tool_timeout", `Tool exceeded ${ms}ms.`, 504)), ms); });
  return Promise.race([promise, timeout]).finally(() => clearTimeout(timer));
}

module.exports = Object.freeze({ AuthoritativeTaskEngine, NexusRuntimeError });
