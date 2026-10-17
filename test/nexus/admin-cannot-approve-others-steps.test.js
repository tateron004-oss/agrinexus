"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { BehaviorSpine } = require("../../nexus/runtime/behavior-spine.js");
const { AuthoritativeTaskEngine } = require("../../nexus/runtime/authoritative-task-engine.js");

// Found by audit: an administrator could say "yes" to another person's waiting step (POST /api/nexus/runtime/behavior/confirm, or
// POST /api/nexus/runtime/tasks/:id/steps/:id/approve then .../execute). Tools with a consent scope (health, message sends) already
// refused, because no consent is recorded for an admin. But business.manage, reminders.cancel and offline.sync have none, and their
// executors act on the SIGNED-IN person's own records (context.userId). So the owner's "add Amina as a customer" was written into the
// ADMIN's business workspace, "cancel my 9am reminder" cancelled the admin's reminder, and the owner's task was reported complete and
// verified. Only the task's owner can say yes. An administrator can still say no, which clears a stuck task without acting on anyone's records.

const ownerTask = { taskId: "tsk_1", tenantId: "tenant", ownerId: "owner", conversationId: "cnv_1", commandId: "cmd_1", correlationId: "trace_1",
  application: "business", goal: "Add Amina as a customer", riskTier: "medium", state: "awaiting_confirmation",
  steps: [{ step_id: "stp_1", tool_id: "business.manage", input: { command: "add Amina as a customer" }, confirmation_state: "required" }] };
const admin = { tenantId: "tenant", userId: "admin_user", hasRole: role => role === "admin" };

function spineWith(calls) {
  return new BehaviorSpine({
    workspaceStates: { stage: async () => {}, acknowledge: async () => {} },
    agent: { command: async () => assert.fail("confirm must not re-plan") },
    engine: {
      approve: async input => { calls.push(["approve", input]); },
      executeTask: async input => { calls.push(["executeTask", input]); return { state: "awaiting_render", completed: false, receipts: [] }; },
      transition: async input => { calls.push(["transition", input]); return { ...ownerTask, state: input.nextState }; }
    },
    tasks: { get: async () => ownerTask }
  });
}

test("an administrator's yes on another person's waiting step is refused, and nothing runs", async () => {
  const calls = [];
  await assert.rejects(spineWith(calls).confirm({ input: { taskId: "tsk_1", stepId: "stp_1", approved: true, text: "Yes" }, context: admin }),
    error => error.code === "confirmation_owner_required" && error.status === 403);
  assert.deepEqual(calls, [], "the step is neither approved nor executed");
});

test("an administrator can still decline another person's waiting step", async () => {
  const calls = [];
  const result = await spineWith(calls).confirm({ input: { taskId: "tsk_1", stepId: "stp_1", approved: false }, context: admin });
  assert.equal(result.state, "cancelled");
  assert.deepEqual(calls.map(([name]) => name), ["approve", "transition"]);
  assert.equal(calls[0][1].approved, false);
  assert.ok(!calls.some(([name]) => name === "executeTask"), "declining never executes");
});

test("the owner's own yes still approves and runs the step", async () => {
  const calls = [];
  const result = await spineWith(calls).confirm({ input: { taskId: "tsk_1", stepId: "stp_1", approved: true, text: "Yes" },
    context: { tenantId: "tenant", userId: "owner", hasRole: () => false } });
  assert.equal(result.state, "render_required");
  assert.deepEqual(calls.map(([name]) => name), ["approve", "executeTask"]);
});

// The engine holds the same rule itself, so the task API's own approve endpoint (and any future caller) cannot approve for someone else.
function engineWith(state) {
  const audits = [];
  const engine = new AuthoritativeTaskEngine({
    tasks: {
      get: async () => ({ ...ownerTask }),
      getStep: async () => ({ step_id: "stp_1", confirmation_state: state.confirmation }),
      approveStep: async ({ approved }) => { state.confirmation = approved ? "approved" : "rejected"; return { step_id: "stp_1", confirmation_state: state.confirmation }; }
    },
    audit: { record: async event => { audits.push(event); } },
    tools: { get: async () => null }, executions: {}, consents: {}, conversations: {}
  });
  return { engine, audits };
}

test("the engine refuses to approve a step for anyone but the task's owner, and records the refusal", async () => {
  const state = { confirmation: "required" };
  const { engine, audits } = engineWith(state);
  await assert.rejects(engine.approve({ tenantId: "tenant", taskId: "tsk_1", stepId: "stp_1", actorId: "admin_user", approved: true }),
    error => error.code === "confirmation_owner_required" && error.status === 403);
  assert.equal(state.confirmation, "required", "the step stays waiting for its owner");
  assert.equal(audits.at(-1)?.eventType, "step.approval_denied");
  assert.equal(audits.at(-1)?.actorId, "admin_user");
});

test("the engine still lets someone else reject a step, and lets the owner approve", async () => {
  const rejected = { confirmation: "required" };
  await engineWith(rejected).engine.approve({ tenantId: "tenant", taskId: "tsk_1", stepId: "stp_1", actorId: "admin_user", approved: false });
  assert.equal(rejected.confirmation, "rejected");
  const approved = { confirmation: "required" };
  await engineWith(approved).engine.approve({ tenantId: "tenant", taskId: "tsk_1", stepId: "stp_1", actorId: "owner", approved: true });
  assert.equal(approved.confirmation, "approved");
});
