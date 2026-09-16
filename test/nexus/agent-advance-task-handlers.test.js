"use strict";
const assert = require("node:assert/strict");
const test = require("node:test");
const { createHandlers, AUTONOMOUS_OUTCOME_NOTIFICATION_KIND } = require("../../nexus/workers/handlers.js");

function fixture({ task, executeTaskResult, transitionCalls = [] } = {}) {
  const notificationsEnqueued = [];
  const runtime = {
    tasks: {
      get: async ({ taskId }) => (taskId === task.taskId ? task : null),
      listStale: async () => []
    },
    engine: {
      executeTask: async () => executeTaskResult,
      transition: async input => { transitionCalls.push(input); return { ...task, state: input.nextState }; },
      acknowledgeAutonomousDelivery: async () => ({ completed: true })
    },
    notifications: {
      enqueue: async item => { notificationsEnqueued.push(item); return { notification_id: "ntf_1" }; }
    },
    jobs: { enqueue: async () => ({ job_id: "job_1" }) }
  };
  return { runtime, notificationsEnqueued, transitionCalls };
}

test("agent.advance-task returns early for an already-terminal task without executing", async () => {
  const task = { taskId: "tsk_1", tenantId: "t1", ownerId: "u1", state: "completed", autonomous: true, goal: "g" };
  const { runtime } = fixture({ task, executeTaskResult: null });
  let executed = false;
  runtime.engine.executeTask = async () => { executed = true; return {}; };
  const handlers = createHandlers({ runtime });
  const result = await handlers["agent.advance-task"]({ job: { tenant_id: "t1", payload: { taskId: "tsk_1" } } });
  assert.equal(result.alreadyTerminal, true);
  assert.equal(executed, false);
});

test("agent.advance-task throws a clear error for a missing task", async () => {
  const { runtime } = fixture({ task: { taskId: "tsk_x", tenantId: "t1", ownerId: "u1", state: "queued", autonomous: true, goal: "g" }, executeTaskResult: {} });
  const handlers = createHandlers({ runtime });
  await assert.rejects(() => handlers["agent.advance-task"]({ job: { tenant_id: "t1", payload: { taskId: "does-not-exist" } } }),
    error => error.code === "task_not_found");
});

test("agent.advance-task notifies for approval when a step needs confirmation, without acknowledging anything", async () => {
  const task = { taskId: "tsk_1", tenantId: "t1", ownerId: "u1", state: "running", autonomous: true, goal: "Buy seed" };
  const { runtime, notificationsEnqueued } = fixture({ task, executeTaskResult: { state: "awaiting_confirmation", pendingStepId: "stp_1" } });
  const handlers = createHandlers({ runtime });
  const result = await handlers["agent.advance-task"]({ job: { tenant_id: "t1", payload: { taskId: "tsk_1" } } });
  assert.equal(result.state, "awaiting_confirmation");
  assert.equal(notificationsEnqueued.length, 1);
  assert.equal(notificationsEnqueued[0].content.kind, "autonomous_task_confirmation");
  assert.equal(notificationsEnqueued[0].userId, "u1");
  assert.equal(notificationsEnqueued[0].channel, "push");
});

test("agent.advance-task enqueues an outcome notification only for an autonomous task reaching awaiting_render", async () => {
  const autonomousTask = { taskId: "tsk_1", tenantId: "t1", ownerId: "u1", state: "running", autonomous: true, goal: "Water the field" };
  const { runtime, notificationsEnqueued } = fixture({ task: autonomousTask, executeTaskResult: { state: "awaiting_render" } });
  const handlers = createHandlers({ runtime });
  const result = await handlers["agent.advance-task"]({ job: { tenant_id: "t1", payload: { taskId: "tsk_1" } } });
  assert.equal(result.state, "awaiting_render");
  assert.equal(result.outcomeNotificationQueued, true);
  assert.equal(notificationsEnqueued.length, 1);
  assert.equal(notificationsEnqueued[0].content.kind, AUTONOMOUS_OUTCOME_NOTIFICATION_KIND);
  assert.equal(notificationsEnqueued[0].idempotencyKey, "agent-outcome:tsk_1");
});

test("agent.advance-task does not enqueue an outcome notification for a non-autonomous task", async () => {
  const liveTask = { taskId: "tsk_2", tenantId: "t1", ownerId: "u1", state: "running", autonomous: false, goal: "Live turn task" };
  const { runtime, notificationsEnqueued } = fixture({ task: liveTask, executeTaskResult: { state: "awaiting_render" } });
  const handlers = createHandlers({ runtime });
  const result = await handlers["agent.advance-task"]({ job: { tenant_id: "t1", payload: { taskId: "tsk_2" } } });
  assert.equal(result.state, "awaiting_render");
  assert.equal(result.outcomeNotificationQueued, undefined);
  assert.equal(notificationsEnqueued.length, 0);
});

test("agent.sweep-advanceable-tasks only requeues autonomous stale tasks with fresh idempotency keys", async () => {
  const stale = [
    { taskId: "tsk_a", tenantId: "t1", state: "running", autonomous: true },
    { taskId: "tsk_b", tenantId: "t1", state: "verifying", autonomous: false },
    { taskId: "tsk_c", tenantId: "t2", state: "queued", autonomous: true }
  ];
  const enqueued = [];
  const runtime = {
    tasks: { listStale: async () => stale },
    jobs: { enqueue: async job => { enqueued.push(job); return { job_id: "job_x" }; } }
  };
  const handlers = createHandlers({ runtime });
  const result = await handlers["agent.sweep-advanceable-tasks"]({ job: { payload: {} } });
  assert.equal(result.scanned, 3);
  assert.equal(result.requeued, 2);
  assert.deepEqual(enqueued.map(job => job.taskId), ["tsk_a", "tsk_c"]);
  for (const job of enqueued) {
    assert.equal(job.jobType, "agent.advance-task");
    assert.match(job.idempotencyKey, /^agent-advance-sweep:tsk_[ac]:job_/);
  }
  assert.notEqual(enqueued[0].idempotencyKey, enqueued[1].idempotencyKey);
});

function deliveryFixture({ notification, deliverySucceeds = true, task = null }) {
  const calls = { delivered: [], failed: [], acknowledge: [], transition: [] };
  const runtime = {
    notifications: {
      claim: async () => [notification],
      delivered: async id => { calls.delivered.push(id); },
      failed: async (id, error) => { calls.failed.push({ id, error }); return { state: "queued" }; }
    },
    tasks: { get: async () => task },
    engine: {
      acknowledgeAutonomousDelivery: async input => { calls.acknowledge.push(input); return { completed: true }; },
      transition: async input => { calls.transition.push(input); return { ...task, state: input.nextState }; }
    }
  };
  const deliveryProviders = { push: async () => (deliverySucceeds ? { verified: true, provider: "webpush" } : (() => { throw new Error("push failed"); })()) };
  return { runtime, deliveryProviders, calls };
}

test("notifications.deliver acknowledges the autonomous task on a successful outcome delivery", async () => {
  const task = { taskId: "tsk_1", tenantId: "t1", ownerId: "u1", state: "verifying", autonomous: true, commandId: "cmd_1", correlationId: "corr_1" };
  const notification = { notification_id: "ntf_1", tenant_id: "t1", task_id: "tsk_1", channel: "push", content: { kind: AUTONOMOUS_OUTCOME_NOTIFICATION_KIND } };
  const { runtime, deliveryProviders, calls } = deliveryFixture({ notification, task });
  const handlers = createHandlers({ runtime, deliveryProviders });
  await handlers["notifications.deliver"]({ job: { payload: {} }, heartbeat: async () => {} });
  assert.equal(calls.delivered.length, 1);
  assert.equal(calls.acknowledge.length, 1);
  assert.equal(calls.acknowledge[0].taskId, "tsk_1");
  assert.equal(calls.acknowledge[0].deliveryReceipt.verified, true);
});

test("notifications.deliver does not acknowledge anything for an ordinary (non-outcome) notification", async () => {
  const notification = { notification_id: "ntf_2", tenant_id: "t1", task_id: "tsk_1", channel: "push", content: { title: "Reminder" } };
  const { runtime, deliveryProviders, calls } = deliveryFixture({ notification, task: null });
  const handlers = createHandlers({ runtime, deliveryProviders });
  await handlers["notifications.deliver"]({ job: { payload: {} }, heartbeat: async () => {} });
  assert.equal(calls.delivered.length, 1);
  assert.equal(calls.acknowledge.length, 0);
});

test("notifications.deliver does not acknowledge a task that already completed by other means", async () => {
  const task = { taskId: "tsk_1", tenantId: "t1", ownerId: "u1", state: "completed", autonomous: true };
  const notification = { notification_id: "ntf_1", tenant_id: "t1", task_id: "tsk_1", channel: "push", content: { kind: AUTONOMOUS_OUTCOME_NOTIFICATION_KIND } };
  const { runtime, deliveryProviders, calls } = deliveryFixture({ notification, task });
  const handlers = createHandlers({ runtime, deliveryProviders });
  await handlers["notifications.deliver"]({ job: { payload: {} }, heartbeat: async () => {} });
  assert.equal(calls.acknowledge.length, 0);
});

test("notifications.deliver blocks the task once outcome delivery fails permanently", async () => {
  const task = { taskId: "tsk_1", tenantId: "t1", ownerId: "u1", state: "verifying", autonomous: true };
  const notification = { notification_id: "ntf_1", tenant_id: "t1", task_id: "tsk_1", channel: "push", content: { kind: AUTONOMOUS_OUTCOME_NOTIFICATION_KIND } };
  const { runtime, deliveryProviders, calls } = deliveryFixture({ notification, task, deliverySucceeds: false });
  runtime.notifications.failed = async (id, error) => { calls.failed.push({ id, error }); return { state: "failed" }; };
  const handlers = createHandlers({ runtime, deliveryProviders });
  await handlers["notifications.deliver"]({ job: { payload: {} }, heartbeat: async () => {} });
  assert.equal(calls.transition.length, 1);
  assert.equal(calls.transition[0].nextState, "blocked");
  assert.equal(calls.transition[0].taskId, "tsk_1");
});

test("notifications.deliver does not block the task on a transient (still-retrying) delivery failure", async () => {
  const task = { taskId: "tsk_1", tenantId: "t1", ownerId: "u1", state: "verifying", autonomous: true };
  const notification = { notification_id: "ntf_1", tenant_id: "t1", task_id: "tsk_1", channel: "push", content: { kind: AUTONOMOUS_OUTCOME_NOTIFICATION_KIND } };
  const { runtime, deliveryProviders, calls } = deliveryFixture({ notification, task, deliverySucceeds: false });
  runtime.notifications.failed = async (id, error) => { calls.failed.push({ id, error }); return { state: "queued" }; };
  const handlers = createHandlers({ runtime, deliveryProviders });
  await handlers["notifications.deliver"]({ job: { payload: {} }, heartbeat: async () => {} });
  assert.equal(calls.transition.length, 0);
});

test("notifications.deliver survives an unavailable delivery provider for an outcome notification without crashing the job", async () => {
  const task = { taskId: "tsk_1", tenantId: "t1", ownerId: "u1", state: "verifying", autonomous: true };
  const notification = { notification_id: "ntf_1", tenant_id: "t1", task_id: "tsk_1", channel: "sms", content: { kind: AUTONOMOUS_OUTCOME_NOTIFICATION_KIND } };
  const calls = { failed: [], transition: [] };
  const runtime = {
    notifications: { claim: async () => [notification], failed: async (id, error) => { calls.failed.push({ id, error }); return { state: "failed" }; } },
    tasks: { get: async () => task },
    engine: { transition: async input => { calls.transition.push(input); return { ...task, state: input.nextState }; } }
  };
  const handlers = createHandlers({ runtime, deliveryProviders: {} });
  const result = await handlers["notifications.deliver"]({ job: { payload: {} }, heartbeat: async () => {} });
  assert.equal(result.outcomes[0].delivered, false);
  assert.equal(result.outcomes[0].code, "delivery_provider_unavailable");
  assert.equal(calls.transition.length, 1);
  assert.equal(calls.transition[0].nextState, "blocked");
});

test("notifications.deliver swallows a race where acknowledgeAutonomousDelivery rejects, without failing the job", async () => {
  const task = { taskId: "tsk_1", tenantId: "t1", ownerId: "u1", state: "verifying", autonomous: true };
  const notification = { notification_id: "ntf_1", tenant_id: "t1", task_id: "tsk_1", channel: "push", content: { kind: AUTONOMOUS_OUTCOME_NOTIFICATION_KIND } };
  const { runtime, deliveryProviders } = deliveryFixture({ notification, task });
  runtime.engine.acknowledgeAutonomousDelivery = async () => { throw new Error("already completed by another path"); };
  const handlers = createHandlers({ runtime, deliveryProviders });
  const result = await handlers["notifications.deliver"]({ job: { payload: {} }, heartbeat: async () => {} });
  assert.equal(result.outcomes[0].delivered, true);
});
