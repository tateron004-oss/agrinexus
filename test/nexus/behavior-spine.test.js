"use strict";
const assert = require("node:assert/strict");
const test = require("node:test");
const { BehaviorSpine } = require("../../nexus/runtime/behavior-spine.js");

const context = { tenantId: "tenant", userId: "user", can: () => true, hasRole: () => false };
const command = { commandId: "cmd_1", correlationId: "trace", conversationId: "cnv_1" };

test("behavior spine executes a reasoned task and returns only verified completion", async () => {
  const appended = [];
  const spine = new BehaviorSpine({
    agent: { command: async () => ({ action: "create", command,
      plan: { application: "live-knowledge", goal: "Explain autumn leaves", steps: [{ toolId: "knowledge.search" }] },
      task: { taskId: "tsk_1" } }) },
    engine: { executeTask: async () => ({ state: "completed", completed: true,
      receipts: [{ receiptId: "rcp_1" }] }) },
    tasks: { get: async () => ({ taskId: "tsk_1", goal: "Explain autumn leaves",
      outcome: { verified: true, visibleOrAudible: true } }) },
    conversations: { append: async value => appended.push(value) }
  });
  const result = await spine.turn({ input: { text: "Why do leaves change color?" }, context });
  assert.equal(result.completed, true);
  assert.equal(result.application, "live-knowledge");
  assert.equal(result.legacyFallbackUsed, false);
  assert.deepEqual(result.outcome.receiptIds, ["rcp_1"]);
  assert.equal(appended[0].provenance.type, "verified_outcome");
});

test("behavior spine preserves clarification and confirmation without false success", async () => {
  const clarification = new BehaviorSpine({
    agent: { command: async () => ({ action: "clarify", command, task: null,
      plan: { application: "maps", clarification: "Where should the route begin?", steps: [] } }) },
    engine: { executeTask: async () => assert.fail("must not execute") }, tasks: { get: async () => null }
  });
  const first = await clarification.turn({ input: {}, context });
  assert.equal(first.state, "clarification_required"); assert.equal(first.completed, false);

  const confirmation = new BehaviorSpine({
    agent: { command: async () => ({ action: "create", command,
      plan: { application: "reminders", goal: "Create reminder", steps: [] }, task: { taskId: "tsk_2" } }) },
    engine: { executeTask: async () => ({ state: "awaiting_confirmation", completed: false,
      pendingStepId: "stp_2", receipts: [] }) }, tasks: { get: async () => ({ taskId: "tsk_2" }) }
  });
  const second = await confirmation.turn({ input: {}, context });
  assert.equal(second.state, "confirmation_required"); assert.equal(second.outcome.verified, false);
});

test("behavior spine rejects execution without verified user outcome", async () => {
  const spine = new BehaviorSpine({ agent: { command: async () => ({ action: "create", command,
    plan: { application: "documents", goal: "Create list", steps: [] }, task: { taskId: "tsk_3" } }) },
    engine: { executeTask: async () => ({ state: "completed", completed: true, receipts: [] }) },
    tasks: { get: async () => ({ taskId: "tsk_3", outcome: { verified: false } }) } });
  await assert.rejects(() => spine.turn({ input: {}, context }), error => error.code === "behavior_outcome_unverified");
});
