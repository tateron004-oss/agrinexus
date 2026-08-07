const assert = require("node:assert/strict");
const test = require("node:test");
const { createCommand } = require("../../nexus/contracts/command.js");
const { AuthoritativeTaskEngine, NexusRuntimeError } = require("../../nexus/runtime/authoritative-task-engine.js");

function fixture() {
  const store = { task: null, steps: [], execution: null, audits: [], calls: 0 };
  const tools = new Map([
    ["documents.save", { tool_id: "documents.save", availability: "available", required_permission: "tasks:execute",
      confirmation_required: true, consent_scope: null, timeout_ms: 1000 }],
    ["provider.missing", { tool_id: "provider.missing", availability: "unavailable", required_permission: "tasks:execute",
      confirmation_required: false, consent_scope: null, timeout_ms: 1000 }]
  ]);
  const engine = new AuthoritativeTaskEngine({
    conversations: { ensure: async () => ({}) }, tools: { get: async id => tools.get(id) || null },
    tasks: {
      create: async (task, steps) => { store.task = task; store.steps = steps.map(step => ({ ...step, step_id: step.stepId,
        tool_id: step.toolId, confirmation_state: step.confirmationRequired ? "required" : "not_required",
        idempotency_key: step.idempotencyKey, state: "pending" })); return task; },
      save: async task => { store.task = task; return task; },
      get: async ({ tenantId, includeSteps }) => tenantId === store.task?.tenantId ? { ...store.task, ...(includeSteps ? { steps: store.steps } : {}) } : null,
      getStep: async ({ tenantId, stepId }) => tenantId === store.task?.tenantId ? store.steps.find(step => step.step_id === stepId) : null,
      approveStep: async ({ stepId, approved }) => { const step = store.steps.find(item => item.step_id === stepId); step.confirmation_state = approved ? "approved" : "rejected"; return step; }
    },
    executions: {
      get: async ({ idempotencyKey }) => store.execution?.idempotency_key === idempotencyKey ? store.execution : null,
      start: async input => { store.execution = { execution_id: "tlc_1", idempotency_key: input.idempotencyKey, state: "running" }; return { execution: store.execution, duplicate: false }; },
      finish: async input => { Object.assign(store.execution, { state: input.successful ? "completed" : "failed", receipt: input.receipt }); return store.execution; }
    },
    consents: { active: async () => ({ consent_id: "cns_1" }) },
    audit: { record: async event => { store.audits.push(event); return event; } },
    executors: { "documents.save": async () => { store.calls += 1; return { persisted: true, documentId: "doc_1" }; } },
    verifier: async ({ result }) => ({ verified: result.persisted === true, method: "persistence_ack" })
  });
  return { engine, store };
}

async function expectCode(work, code) {
  await assert.rejects(work, error => error instanceof NexusRuntimeError && error.code === code);
}

test("canonical engine gates confirmation, verifies outcomes, and suppresses duplicate execution", async () => {
  const { engine, store } = fixture();
  const command = createCommand({ correlationId: "trace", tenantId: "00000000-0000-0000-0000-000000000001",
    actorId: "00000000-0000-0000-0000-000000000002", channel: "typed", text: "Save report" });
  const task = await engine.create({ command, goal: "Persist report", steps: [{ title: "Save", toolId: "documents.save" }] });
  const context = { tenantId: command.tenantId, userId: command.actorId, can: permission => permission === "tasks:execute", hasRole: () => false };
  await expectCode(() => engine.execute({ context, taskId: task.taskId, stepId: task.steps[0].stepId }), "confirmation_required");
  await engine.approve({ tenantId: command.tenantId, taskId: task.taskId, stepId: task.steps[0].stepId, actorId: command.actorId, approved: true });
  const result = await engine.execute({ context, taskId: task.taskId, stepId: task.steps[0].stepId });
  assert.equal(result.receipt.verification.verified, true); assert.equal(store.calls, 1);
  const duplicate = await engine.execute({ context, taskId: task.taskId, stepId: task.steps[0].stepId });
  assert.equal(duplicate.duplicate, true); assert.equal(store.calls, 1);
});

test("canonical engine isolates tenants and never simulates disconnected tools", async () => {
  const { engine } = fixture();
  const command = createCommand({ correlationId: "trace", tenantId: "00000000-0000-0000-0000-000000000001",
    actorId: "00000000-0000-0000-0000-000000000002", channel: "api", text: "Call provider" });
  const task = await engine.create({ command, goal: "Try provider", steps: [{ title: "Call", toolId: "provider.missing" }] });
  const context = { tenantId: command.tenantId, userId: command.actorId, can: () => true, hasRole: () => false };
  await expectCode(() => engine.execute({ context, taskId: task.taskId, stepId: task.steps[0].stepId }), "tool_unavailable");
  await expectCode(() => engine.requiredStep({ tenantId: "00000000-0000-0000-0000-000000000099", taskId: task.taskId, stepId: task.steps[0].stepId }), "step_not_found");
});

test("idempotent execution never reports false success without a verified receipt", async () => {
  const { engine, store } = fixture();
  const command = createCommand({ correlationId: "trace", tenantId: "00000000-0000-0000-0000-000000000001",
    actorId: "00000000-0000-0000-0000-000000000002", channel: "worker", text: "Save report" });
  const task = await engine.create({ command, goal: "Persist report", steps: [{ title: "Save", toolId: "documents.save" }] });
  await engine.approve({ tenantId: command.tenantId, taskId: task.taskId, stepId: task.steps[0].stepId, actorId: command.actorId, approved: true });
  const context = { tenantId: command.tenantId, userId: command.actorId, can: () => true, hasRole: () => false };
  store.execution = { execution_id: "tlc_running", idempotency_key: store.steps[0].idempotency_key, state: "running", receipt: null };
  await expectCode(() => engine.execute({ context, taskId: task.taskId, stepId: task.steps[0].stepId }), "execution_in_progress");
  store.execution.state = "failed";
  await expectCode(() => engine.execute({ context, taskId: task.taskId, stepId: task.steps[0].stepId }), "previous_execution_failed");
  assert.equal(store.calls, 0);
});
