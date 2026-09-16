"use strict";
const assert = require("node:assert/strict");
const test = require("node:test");
const { createCommand } = require("../../nexus/contracts/command.js");
const { createTask } = require("../../nexus/tasks/state-machine.js");
const { AuthoritativeTaskEngine, NexusRuntimeError } = require("../../nexus/runtime/authoritative-task-engine.js");

test("createTask defaults autonomous to false and honors an explicit true", () => {
  const base = { tenantId: "t", ownerId: "u", conversationId: "cnv_1", commandId: "cmd", correlationId: "corr", goal: "g" };
  assert.equal(createTask(base).autonomous, false);
  assert.equal(createTask({ ...base, autonomous: true }).autonomous, true);
  assert.equal(createTask({ ...base, autonomous: "yes" }).autonomous, true);
});

function fixture() {
  const store = { task: null, steps: [], execution: null, audits: [], jobsEnqueued: [] };
  const tools = new Map([
    ["documents.save", { tool_id: "documents.save", availability: "available", required_permission: "tasks:execute",
      confirmation_required: false, consent_scope: null, timeout_ms: 1000, max_attempts: 3 }]
  ]);
  const engine = new AuthoritativeTaskEngine({
    conversations: { ensure: async () => ({}) }, tools: { get: async id => tools.get(id) || null },
    tasks: {
      create: async (task, steps) => { store.task = task; store.steps = steps.map(step => ({ ...step, step_id: step.stepId,
        tool_id: step.toolId, confirmation_state: step.confirmationRequired ? "required" : "not_required",
        idempotency_key: step.idempotencyKey, fallback_tool_ids: step.fallbackToolIds, depends_on: step.dependsOn, state: "pending" })); return task; },
      save: async task => { store.task = task; return task; },
      get: async ({ tenantId, includeSteps }) => tenantId === store.task?.tenantId ? { ...store.task, ...(includeSteps ? { steps: store.steps } : {}) } : null,
      getStep: async ({ tenantId, stepId }) => tenantId === store.task?.tenantId ? store.steps.find(step => step.step_id === stepId) : null
    },
    executions: {
      get: async () => null,
      start: async input => { store.execution = { execution_id: "tlc_1", idempotency_key: input.idempotencyKey, state: "running" }; return { execution: store.execution, duplicate: false }; },
      finish: async input => { Object.assign(store.execution, { state: input.successful ? "completed" : "failed", receipt: input.receipt });
        const step = store.steps.find(item => item.step_id === input.stepId); if (step) { step.state = input.successful ? "completed" : "failed"; step.output = input.response; }
        return store.execution; }
    },
    consents: { active: async () => ({ consent_id: "cns_1" }) },
    audit: { record: async event => { store.audits.push(event); return event; } },
    executors: { "documents.save": async () => ({ persisted: true }) },
    verifier: async ({ result }) => ({ verified: result.persisted === true, method: "persistence_ack" }),
    jobs: { enqueue: async job => { store.jobsEnqueued.push(job); return { job_id: "job_1" }; } }
  });
  return { engine, store };
}

test("create() with autonomous:true enqueues an agent.advance-task job immediately", async () => {
  const { engine, store } = fixture();
  const command = createCommand({ correlationId: "trace", tenantId: "00000000-0000-0000-0000-000000000001",
    actorId: "00000000-0000-0000-0000-000000000002", channel: "typed", text: "Save report" });
  const task = await engine.create({ command, goal: "Persist report", steps: [{ title: "Save", toolId: "documents.save" }], autonomous: true });
  assert.equal(task.autonomous, true);
  assert.equal(store.jobsEnqueued.length, 1);
  assert.equal(store.jobsEnqueued[0].jobType, "agent.advance-task");
  assert.equal(store.jobsEnqueued[0].taskId, task.taskId);
  assert.equal(store.jobsEnqueued[0].payload.taskId, task.taskId);
  assert.match(store.jobsEnqueued[0].idempotencyKey, new RegExp(`^agent-advance:${task.taskId}:v\\d+$`));
});

test("create() without autonomous never touches the job queue", async () => {
  const { engine, store } = fixture();
  const command = createCommand({ correlationId: "trace", tenantId: "00000000-0000-0000-0000-000000000001",
    actorId: "00000000-0000-0000-0000-000000000002", channel: "typed", text: "Save report" });
  const task = await engine.create({ command, goal: "Persist report", steps: [{ title: "Save", toolId: "documents.save" }] });
  assert.equal(task.autonomous, false);
  assert.equal(store.jobsEnqueued.length, 0);
});

test("create() with autonomous:true but no jobs dependency does not throw", async () => {
  const { engine, store } = fixture();
  engine.jobs = null;
  const command = createCommand({ correlationId: "trace", tenantId: "00000000-0000-0000-0000-000000000001",
    actorId: "00000000-0000-0000-0000-000000000002", channel: "typed", text: "Save report" });
  const task = await engine.create({ command, goal: "Persist report", steps: [{ title: "Save", toolId: "documents.save" }], autonomous: true });
  assert.equal(task.autonomous, true);
});

test("create() refuses a new autonomous task when the tenant's autonomy is paused", async () => {
  const { engine, store } = fixture();
  engine.autonomyControl = { isPaused: async () => true };
  const command = createCommand({ correlationId: "trace", tenantId: "00000000-0000-0000-0000-000000000001",
    actorId: "00000000-0000-0000-0000-000000000002", channel: "typed", text: "Save report" });
  await expectCode(() => engine.create({ command, goal: "Persist report", steps: [{ title: "Save", toolId: "documents.save" }], autonomous: true }), "autonomy_paused");
  assert.equal(store.task, null);
  assert.equal(store.jobsEnqueued.length, 0);
});

test("the autonomy pause switch never blocks an ordinary (non-autonomous) task", async () => {
  const { engine, store } = fixture();
  engine.autonomyControl = { isPaused: async () => true };
  const command = createCommand({ correlationId: "trace", tenantId: "00000000-0000-0000-0000-000000000001",
    actorId: "00000000-0000-0000-0000-000000000002", channel: "typed", text: "Save report" });
  const task = await engine.create({ command, goal: "Persist report", steps: [{ title: "Save", toolId: "documents.save" }] });
  assert.equal(task.autonomous, false);
  assert.notEqual(store.task, null);
});

test("create() with autonomous:true still succeeds once the tenant is unpaused", async () => {
  const { engine, store } = fixture();
  engine.autonomyControl = { isPaused: async () => false };
  const command = createCommand({ correlationId: "trace", tenantId: "00000000-0000-0000-0000-000000000001",
    actorId: "00000000-0000-0000-0000-000000000002", channel: "typed", text: "Save report" });
  const task = await engine.create({ command, goal: "Persist report", steps: [{ title: "Save", toolId: "documents.save" }], autonomous: true });
  assert.equal(task.autonomous, true);
  assert.equal(store.jobsEnqueued.length, 1);
});

async function expectCode(work, code) {
  await assert.rejects(work, error => error instanceof NexusRuntimeError && error.code === code);
}

test("acknowledgeAutonomousDelivery completes an autonomous task on a verified delivery receipt", async () => {
  const { engine, store } = fixture();
  const command = createCommand({ correlationId: "trace", tenantId: "00000000-0000-0000-0000-000000000001",
    actorId: "00000000-0000-0000-0000-000000000002", channel: "typed", text: "Save report" });
  const task = await engine.create({ command, goal: "Persist report", steps: [{ title: "Save", toolId: "documents.save" }], autonomous: true });
  const context = { tenantId: command.tenantId, userId: command.actorId, can: () => true, hasRole: () => false };
  const executed = await engine.executeTask({ context, taskId: task.taskId });
  assert.equal(executed.state, "awaiting_render");
  assert.equal(store.task.state, "verifying");

  const acknowledged = await engine.acknowledgeAutonomousDelivery({ context, taskId: task.taskId,
    commandId: command.commandId, correlationId: command.correlationId, deliveryReceipt: { verified: true, provider: "webpush" } });
  assert.equal(acknowledged.completed, true);
  assert.equal(acknowledged.task.state, "completed");
  assert.equal(acknowledged.outcome.deliveredViaPush, true);
  assert.deepEqual(acknowledged.outcome.deliveryReceipt, { verified: true, provider: "webpush" });
});

test("acknowledgeAutonomousDelivery rejects a task that was never marked autonomous", async () => {
  const { engine, store } = fixture();
  const command = createCommand({ correlationId: "trace", tenantId: "00000000-0000-0000-0000-000000000001",
    actorId: "00000000-0000-0000-0000-000000000002", channel: "typed", text: "Save report" });
  const task = await engine.create({ command, goal: "Persist report", steps: [{ title: "Save", toolId: "documents.save" }] });
  const context = { tenantId: command.tenantId, userId: command.actorId, can: () => true, hasRole: () => false };
  await engine.executeTask({ context, taskId: task.taskId });
  await expectCode(() => engine.acknowledgeAutonomousDelivery({ context, taskId: task.taskId,
    commandId: command.commandId, correlationId: command.correlationId, deliveryReceipt: { verified: true } }), "task_not_autonomous");
});

test("acknowledgeAutonomousDelivery rejects a task not currently awaiting acknowledgement", async () => {
  const { engine } = fixture();
  const command = createCommand({ correlationId: "trace", tenantId: "00000000-0000-0000-0000-000000000001",
    actorId: "00000000-0000-0000-0000-000000000002", channel: "typed", text: "Save report" });
  const task = await engine.create({ command, goal: "Persist report", steps: [{ title: "Save", toolId: "documents.save" }], autonomous: true });
  const context = { tenantId: command.tenantId, userId: command.actorId, can: () => true, hasRole: () => false };
  await expectCode(() => engine.acknowledgeAutonomousDelivery({ context, taskId: task.taskId,
    commandId: command.commandId, correlationId: command.correlationId, deliveryReceipt: { verified: true } }), "render_acknowledgement_not_expected");
});

test("acknowledgeAutonomousDelivery rejects a command/correlation mismatch and an unverified receipt", async () => {
  const { engine } = fixture();
  const command = createCommand({ correlationId: "trace", tenantId: "00000000-0000-0000-0000-000000000001",
    actorId: "00000000-0000-0000-0000-000000000002", channel: "typed", text: "Save report" });
  const task = await engine.create({ command, goal: "Persist report", steps: [{ title: "Save", toolId: "documents.save" }], autonomous: true });
  const context = { tenantId: command.tenantId, userId: command.actorId, can: () => true, hasRole: () => false };
  await engine.executeTask({ context, taskId: task.taskId });
  await expectCode(() => engine.acknowledgeAutonomousDelivery({ context, taskId: task.taskId,
    commandId: "wrong", correlationId: command.correlationId, deliveryReceipt: { verified: true } }), "command_acknowledgement_mismatch");
  await expectCode(() => engine.acknowledgeAutonomousDelivery({ context, taskId: task.taskId,
    commandId: command.commandId, correlationId: command.correlationId, deliveryReceipt: { verified: false } }), "delivery_outcome_unverified");
});

test("acknowledgeAutonomousDelivery requires the task owner (or an admin) as caller", async () => {
  const { engine } = fixture();
  const command = createCommand({ correlationId: "trace", tenantId: "00000000-0000-0000-0000-000000000001",
    actorId: "00000000-0000-0000-0000-000000000002", channel: "typed", text: "Save report" });
  const task = await engine.create({ command, goal: "Persist report", steps: [{ title: "Save", toolId: "documents.save" }], autonomous: true });
  const context = { tenantId: command.tenantId, userId: command.actorId, can: () => true, hasRole: () => false };
  await engine.executeTask({ context, taskId: task.taskId });
  const strangerContext = { tenantId: command.tenantId, userId: "someone-else", can: () => true, hasRole: () => false };
  await expectCode(() => engine.acknowledgeAutonomousDelivery({ context: strangerContext, taskId: task.taskId,
    commandId: command.commandId, correlationId: command.correlationId, deliveryReceipt: { verified: true } }), "task_owner_required");
  const adminContext = { tenantId: command.tenantId, userId: "admin-user", can: () => true, hasRole: role => role === "admin" };
  const acknowledged = await engine.acknowledgeAutonomousDelivery({ context: adminContext, taskId: task.taskId,
    commandId: command.commandId, correlationId: command.correlationId, deliveryReceipt: { verified: true } });
  assert.equal(acknowledged.completed, true);
});
