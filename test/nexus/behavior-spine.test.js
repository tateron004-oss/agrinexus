"use strict";
const assert = require("node:assert/strict");
const test = require("node:test");
const { BehaviorSpine } = require("../../nexus/runtime/behavior-spine.js");

const context = { tenantId: "tenant", userId: "user", can: () => true, hasRole: () => false };
const command = { commandId: "cmd_1", correlationId: "trace", conversationId: "cnv_1", channel: "typed", text: "Why do leaves change color?" };

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
  assert.equal(result.render.schema, "nexus.workspace-outcome.v1");
  assert.equal(result.render.workspace, "live-knowledge");
  assert.equal(result.render.originalText, command.text);
  assert.deepEqual(result.outcome.receiptIds, ["rcp_1"]);
  assert.equal(appended[0].provenance.type, "verified_outcome");
  assert.equal(appended[0].actorId, null);
  assert.equal(appended[0].provenance.systemActor, "nexus-brain");
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

test("behavior spine returns a typed render request and accepts only matching acknowledgement", async () => {
  let acknowledgement;
  const spine = new BehaviorSpine({ agent: { command: async () => ({ action: "create", command,
    plan: { application: "maps", goal: "Route Nairobi to Nakuru", steps: [{ input: { origin: "Nairobi", destination: "Nakuru" } }] },
    task: { taskId: "tsk_4" } }) },
  engine: {
    executeTask: async () => ({ state: "awaiting_render", completed: false, receipts: [{ receiptId: "rcp_4" }] }),
    acknowledgeRender: async input => { acknowledgement = input; return { state: "completed", completed: true, outcome: { verified: true } }; }
  },
  tasks: { get: async () => ({ taskId: "tsk_4", steps: [] }) } });
  const pending = await spine.turn({ input: {}, context });
  assert.equal(pending.state, "render_required");
  assert.equal(pending.render.operation, "show_route");
  assert.equal(pending.render.data.destination, "Nakuru");
  const ack = await spine.acknowledge({ input: { taskId: "tsk_4", commandId: "cmd_1", correlationId: "trace",
    workspace: "map", rendered: true, visible: true }, context });
  assert.equal(ack.completed, true);
  assert.equal(acknowledgement.correlationId, "trace");
});
