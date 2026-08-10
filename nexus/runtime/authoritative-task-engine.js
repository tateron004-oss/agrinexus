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
    if (["completed", "cancelled", "skipped"].includes(step.state)) throw new NexusRuntimeError("step_not_executable", `A ${step.state} step cannot execute.`, 409);
    const taskWithSteps = await this.tasks.get({ tenantId: context.tenantId, taskId, includeSteps: true });
    const dependencies = new Set(step.depends_on || []);
    const incomplete = (taskWithSteps?.steps || []).filter(candidate => dependencies.has(candidate.step_id) && candidate.state !== "completed");
    if (incomplete.length || dependencies.size > (taskWithSteps?.steps || []).filter(candidate => dependencies.has(candidate.step_id)).length) {
      throw new NexusRuntimeError("dependencies_incomplete", "Every prerequisite step must complete before this step can execute.", 409,
        { stepId, dependencies: [...dependencies], incomplete: incomplete.map(candidate => candidate.step_id) });
    }
    const candidates = [step.tool_id, ...(step.fallback_tool_ids || [])]; let lastError = null;
    for (const [attempt, toolId] of candidates.entries()) {
      const tool = await this.tools.get(toolId); const executor = tool && this.executors[tool.tool_id];
      if (!tool || tool.availability !== "available" || typeof executor !== "function") { lastError = new NexusRuntimeError("tool_unavailable", `Tool ${toolId} is unavailable.`, 503); continue; }
      authorize(context, tool, step);
      if (tool.consent_scope) { const consent = await this.consents.active({ tenantId: context.tenantId, subjectId: context.userId, scope: tool.consent_scope, taskId });
        if (!consent) throw new NexusRuntimeError("consent_required", `Active consent is required for ${tool.consent_scope}.`, 403); }
      const key = attempt ? `${step.idempotency_key}:fallback:${toolId}` : step.idempotency_key;
      const previous = await this.executions.get({ tenantId: context.tenantId, idempotencyKey: key });
      if (previous?.state === "completed") return { execution: previous, duplicate: true, receipt: previous.receipt || null };
      const started = await this.executions.start({ tenantId: context.tenantId, taskId, stepId,
        toolId: tool.tool_id, actorId: context.userId, idempotencyKey: key, request: step.input });
      if (started.duplicate) { lastError = new NexusRuntimeError("prior_attempt_failed", `Prior ${toolId} attempt did not complete.`, 409); continue; }
      try {
      const result = await withTimeout(Promise.resolve(executor({ input: step.input, context, taskId, stepId,
        idempotencyKey: key })), tool.timeout_ms);
      const verification = await this.verifier({ tool, result, context, taskId, stepId });
      if (!verification?.verified) throw new NexusRuntimeError("outcome_unverified", "Tool result could not be verified.", 502, { verification });
      const receipt = makeReceipt(started.execution.execution_id, taskId, stepId, tool.tool_id,
        key, "completed", { ...verification, selectedTool: toolId, fallbackAttempt: attempt });
      const execution = await this.executions.finish({ tenantId: context.tenantId,
        executionId: started.execution.execution_id, stepId, successful: true, response: result, receipt, verified: true });
      const task = await this.tasks.get({ tenantId: context.tenantId, taskId, includeSteps: false });
      await this.audit.record({ tenantId: context.tenantId, actorId: context.userId,
        correlationId: task.correlationId, taskId, eventType: "tool.completed", outcome: "verified", metadata: receipt });
      return { execution, duplicate: false, receipt };
      } catch (cause) {
      const error = { code: cause.code || "execution_failed", message: cause.message || "Execution failed" };
      const receipt = makeReceipt(started.execution.execution_id, taskId, stepId, tool.tool_id,
        key, "failed", { verified: false, error, selectedTool: toolId, fallbackAttempt: attempt });
      await this.executions.finish({ tenantId: context.tenantId, executionId: started.execution.execution_id,
        stepId, successful: false, error, receipt, verified: false });
        lastError = cause;
      }
    }
    throw lastError || new NexusRuntimeError("tool_unavailable", "No governed tool was available; nothing was executed.", 503);
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
function withTimeout(promise, ms = 30000) {
  let timer; const timeout = new Promise((_, reject) => { timer = setTimeout(() => reject(new NexusRuntimeError("tool_timeout", `Tool exceeded ${ms}ms.`, 504)), ms); });
  return Promise.race([promise, timeout]).finally(() => clearTimeout(timer));
}

module.exports = Object.freeze({ AuthoritativeTaskEngine, NexusRuntimeError });
