"use strict";
const assert = require("node:assert/strict");
const test = require("node:test");
const { createTaskApi } = require("../../nexus/compat/task-api.js");

// Confirmed: get/transition/approve/execute resolved a caller-supplied taskId
// with only a tenant-id match (via engine.tasks.get), never checking that the
// calling user actually owns the task -- unlike create()/executeTask(), which
// already enforce ownership. Any authenticated tenant member could read,
// force-transition, approve, or execute steps on another user's task, which
// also defeats the confirmation-approval gate meant to require the affected
// user's own consent before a risky tool action runs.

function engineWithTask(task, overrides = {}) {
  const calls = [];
  return {
    calls,
    tasks: { get: async ({ tenantId, taskId }) => (task && task.tenantId === tenantId && task.taskId === taskId ? task : null) },
    transition: async input => { calls.push(["transition", input]); return { ...task, state: input.nextState }; },
    approve: async input => { calls.push(["approve", input]); return { step_id: input.stepId, confirmation_state: input.approved ? "approved" : "rejected" }; },
    execute: async input => { calls.push(["execute", input]); return { receipt: { receiptId: "r1" } }; },
    ...overrides
  };
}

const task = { tenantId: "tenant", taskId: "tsk_1", ownerId: "owner", goal: "Do the thing" };

test("get/transition/approve/execute reject a non-owner, non-admin caller", async () => {
  const engine = engineWithTask(task);
  const api = createTaskApi(engine);
  const stranger = { context: { tenantId: "tenant", userId: "stranger", hasRole: () => false }, params: { taskId: "tsk_1", stepId: "stp_1" }, body: {} };

  const get = await api.get(stranger);
  assert.equal(get.status, 403); assert.equal(get.body.code, "task_owner_required");

  const transition = await api.transition({ ...stranger, body: { state: "cancelled" } });
  assert.equal(transition.status, 403); assert.equal(transition.body.code, "task_owner_required");

  const approve = await api.approve({ ...stranger, body: { approved: true } });
  assert.equal(approve.status, 403); assert.equal(approve.body.code, "task_owner_required");

  const execute = await api.execute(stranger);
  assert.equal(execute.status, 403); assert.equal(execute.body.code, "task_owner_required");

  assert.equal(engine.calls.length, 0, "no engine mutation must occur for a non-owner caller");
});

test("get/transition/approve/execute succeed for the task's actual owner", async () => {
  const engine = engineWithTask(task);
  const api = createTaskApi(engine);
  const owner = { context: { tenantId: "tenant", userId: "owner", hasRole: () => false }, params: { taskId: "tsk_1", stepId: "stp_1" }, body: {} };

  assert.equal((await api.get(owner)).status, 200);
  assert.equal((await api.transition({ ...owner, body: { state: "cancelled" } })).status, 200);
  assert.equal((await api.approve({ ...owner, body: { approved: true } })).status, 200);
  assert.equal((await api.execute(owner)).status, 200);
  assert.equal(engine.calls.length, 3);
});

test("an admin caller may act on another user's task", async () => {
  const engine = engineWithTask(task);
  const api = createTaskApi(engine);
  const admin = { context: { tenantId: "tenant", userId: "someone-else", hasRole: role => role === "admin" }, params: { taskId: "tsk_1", stepId: "stp_1" }, body: {} };

  assert.equal((await api.get(admin)).status, 200);
  assert.equal((await api.transition({ ...admin, body: { state: "cancelled" } })).status, 200);
});

test("a nonexistent task returns 404 for get/transition/approve/execute, not a 403", async () => {
  const engine = engineWithTask(task);
  const api = createTaskApi(engine);
  const missing = { context: { tenantId: "tenant", userId: "owner", hasRole: () => false }, params: { taskId: "tsk_missing", stepId: "stp_1" }, body: {} };

  assert.equal((await api.get(missing)).status, 404);
  assert.equal((await api.transition(missing)).status, 404);
  assert.equal((await api.approve(missing)).status, 404);
  assert.equal((await api.execute(missing)).status, 404);
});

// Found live: create() passed a caller-supplied conversationId straight into
// engine.create() with no ownership pre-check at all -- unlike
// agent-service.js's chat path, which already discards a foreign
// conversationId before ever touching conversations.ensure()/append(). Any
// tenant member who learned another member's real conversationId (returned
// in plaintext elsewhere) could durably link their own task's messages into
// that other person's private conversation history.
test("create() discards a caller-supplied conversationId that belongs to a different user, instead of reusing it", async () => {
  let createInput;
  const engine = {
    conversations: { owner: async ({ conversationId }) => (conversationId === "cnv_victim" ? "victim" : null) },
    create: async input => { createInput = input; return { taskId: "tsk_new", ...input }; }
  };
  const api = createTaskApi(engine);
  const attacker = { context: { tenantId: "tenant", userId: "attacker", requestId: "req_1" },
    body: { goal: "Do something", application: "general", riskTier: "low", steps: [{ title: "Step", toolId: "knowledge.search" }], conversationId: "cnv_victim" } };

  const result = await api.create(attacker);
  assert.equal(result.status, 201);
  assert.notEqual(createInput.command.conversationId, "cnv_victim", "a foreign conversationId must never be reused for another user's task");
});

test("create() still reuses a caller-supplied conversationId the caller genuinely owns", async () => {
  let createInput;
  const engine = {
    conversations: { owner: async ({ conversationId }) => (conversationId === "cnv_mine" ? "owner" : null) },
    create: async input => { createInput = input; return { taskId: "tsk_new", ...input }; }
  };
  const api = createTaskApi(engine);
  const request = { context: { tenantId: "tenant", userId: "owner", requestId: "req_1" },
    body: { goal: "Do something", application: "general", riskTier: "low", steps: [{ title: "Step", toolId: "knowledge.search" }], conversationId: "cnv_mine" } };

  await api.create(request);
  assert.equal(createInput.command.conversationId, "cnv_mine", "the caller's own conversationId must still be reused, not always replaced");
});
