"use strict";
const assert = require("node:assert/strict");
const test = require("node:test");
const { BehaviorSpine } = require("../../nexus/runtime/behavior-spine.js");

const staged = [];
const context = { tenantId: "tenant", userId: "user", can: () => true, hasRole: () => false };
const command = { commandId: "cmd_1", correlationId: "trace", conversationId: "cnv_1", channel: "typed", text: "Why do leaves change color?" };

test("behavior spine executes a reasoned task and returns only verified completion", async () => {
  const appended = [];
  const spine = new BehaviorSpine({ workspaceStates: { stage: async value => { staged.push(value); }, acknowledge: async value => { staged.push(value); } },
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
  assert.equal(result.render.schema, "nexus.workspace-outcome.v2");
  assert.equal(result.render.workspace, "live-knowledge");
  assert.equal(result.render.originalText, command.text);
  assert.deepEqual(result.outcome.receiptIds, ["rcp_1"]);
  assert.equal(appended[0].provenance.type, "verified_outcome");
  assert.equal(appended[0].actorId, null);
  assert.equal(appended[0].provenance.systemActor, "nexus-brain");
});

test("behavior spine preserves clarification and confirmation without false success", async () => {
  const clarification = new BehaviorSpine({ workspaceStates: { stage: async value => { staged.push(value); }, acknowledge: async value => { staged.push(value); } },
    agent: { command: async () => ({ action: "clarify", command, task: null,
      plan: { application: "maps", clarification: "Where should the route begin?", steps: [] } }) },
    engine: { executeTask: async () => assert.fail("must not execute") }, tasks: { get: async () => null }
  });
  const first = await clarification.turn({ input: {}, context });
  assert.equal(first.state, "clarification_required"); assert.equal(first.completed, false);

  const confirmation = new BehaviorSpine({ workspaceStates: { stage: async value => { staged.push(value); }, acknowledge: async value => { staged.push(value); } },
    agent: { command: async () => ({ action: "create", command,
      plan: { application: "reminders", goal: "Create reminder", steps: [] }, task: { taskId: "tsk_2" } }) },
    engine: { executeTask: async () => ({ state: "awaiting_confirmation", completed: false,
      pendingStepId: "stp_2", receipts: [] }) }, tasks: { get: async () => ({ taskId: "tsk_2" }) }
  });
  const second = await confirmation.turn({ input: {}, context });
  assert.equal(second.state, "confirmation_required"); assert.equal(second.outcome.verified, false);
});

test("behavior spine rejects execution without verified user outcome", async () => {
  const spine = new BehaviorSpine({ workspaceStates: { stage: async value => { staged.push(value); }, acknowledge: async value => { staged.push(value); } }, agent: { command: async () => ({ action: "create", command,
    plan: { application: "documents", goal: "Create list", steps: [] }, task: { taskId: "tsk_3" } }) },
    engine: { executeTask: async () => ({ state: "completed", completed: true, receipts: [] }) },
    tasks: { get: async () => ({ taskId: "tsk_3", outcome: { verified: false } }) } });
  await assert.rejects(() => spine.turn({ input: {}, context }), error => error.code === "behavior_outcome_unverified");
});

test("behavior spine returns a typed render request and accepts only matching acknowledgement", async () => {
  let acknowledgement;
  const spine = new BehaviorSpine({ workspaceStates: { stage: async value => { staged.push(value); }, acknowledge: async value => { staged.push(value); } }, agent: { command: async () => ({ action: "create", command,
    plan: { application: "maps", goal: "Route Nairobi to Nakuru", steps: [{ input: { origin: "Nairobi", destination: "Nakuru" } }] },
    task: { taskId: "tsk_4" } }) },
  engine: {
    executeTask: async () => ({ state: "awaiting_render", completed: false, receipts: [{ receiptId: "rcp_4" }] }),
    acknowledgeRender: async input => { acknowledgement = input; return { state: "completed", completed: true, outcome: { verified: true } }; }
  },
  tasks: { get: async () => ({ taskId: "tsk_4", steps: [] }) } });
  const pending = await spine.turn({ input: {}, context });
  assert.equal(pending.state, "render_required");
  assert.equal(staged.at(-1).tenantId, context.tenantId);
  assert.equal(staged.at(-1).ownerId, context.userId);
  assert.equal(staged.at(-1).outcome, pending.render);
  assert.equal(pending.render.operation, "show_route");
  assert.equal(pending.render.data.destination, "Nakuru");
  const ack = await spine.acknowledge({ input: { taskId: "tsk_4", commandId: "cmd_1", correlationId: "trace",
    workspace: "map", rendered: true, visible: true }, context });
  assert.equal(ack.completed, true);
  assert.equal(staged.at(-1).taskId, "tsk_4");
  assert.equal(staged.at(-1).actorId, context.userId);
  assert.equal(staged.at(-1).receipt.visible, true);
  assert.equal(acknowledgement.correlationId, "trace");
});

test("behavior spine confirm() approves a pending step and resumes the same task through to completion", async () => {
  const approvals = [];
  const appended = [];
  const pendingTask = { taskId: "tsk_5", tenantId: "tenant", ownerId: "user", conversationId: "cnv_5",
    application: "health", goal: "Record temperature", riskTier: "regulated",
    steps: [{ stepId: "stp_5", toolId: "health.record", input: { intakeType: "temperature", temperature: 102.5 } }] };
  const spine = new BehaviorSpine({
    workspaceStates: { stage: async value => { staged.push(value); }, acknowledge: async value => { staged.push(value); } },
    agent: { command: async () => assert.fail("confirm must not re-plan through the agent") },
    engine: {
      executeTask: async () => ({ state: "completed", completed: true, receipts: [{ receiptId: "rcp_5" }] }),
      approve: async input => { approvals.push(input); }
    },
    tasks: { get: async () => ({ ...pendingTask, outcome: { verified: true, visibleOrAudible: true } }) },
    conversations: { append: async value => appended.push(value) }
  });
  const result = await spine.confirm({ input: { taskId: "tsk_5", stepId: "stp_5", approved: true, text: "Yes, confirm it." }, context });
  assert.equal(approvals[0].taskId, "tsk_5");
  assert.equal(approvals[0].stepId, "stp_5");
  assert.equal(approvals[0].approved, true);
  assert.equal(result.state, "completed");
  assert.equal(result.completed, true);
  assert.equal(result.taskId, "tsk_5");
  assert.equal(result.render.originalText, "Yes, confirm it.");
  assert.equal(appended.at(-1).provenance.type, "verified_outcome");
});

test("behavior spine confirm() declines a pending step, cancels the task, and never executes it", async () => {
  const approvals = []; const transitions = []; const appended = [];
  const pendingTask = { taskId: "tsk_6", tenantId: "tenant", ownerId: "user", conversationId: "cnv_6",
    application: "communications", goal: "Send a message", riskTier: "regulated", steps: [] };
  const spine = new BehaviorSpine({
    workspaceStates: { stage: async value => { staged.push(value); }, acknowledge: async value => { staged.push(value); } },
    agent: { command: async () => assert.fail("confirm must not re-plan through the agent") },
    engine: {
      executeTask: async () => assert.fail("a declined step must not execute"),
      approve: async input => { approvals.push(input); },
      transition: async input => { transitions.push(input); return { ...pendingTask, state: "cancelled" }; }
    },
    tasks: { get: async () => pendingTask },
    conversations: { append: async value => appended.push(value) }
  });
  const result = await spine.confirm({ input: { taskId: "tsk_6", stepId: "stp_6", approved: false, text: "No, cancel it." }, context });
  assert.equal(approvals[0].approved, false);
  assert.equal(transitions[0].nextState, "cancelled");
  assert.equal(result.state, "cancelled");
  assert.equal(result.completed, false);
  assert.equal(result.outcome.verified, false);
  assert.equal(result.outcome.reason, "declined_by_user");
  assert.equal(appended.at(-1).provenance.type, "declined_outcome");
});

test("behavior spine confirm() rejects an unknown task and refuses a task owned by someone else", async () => {
  const spine = new BehaviorSpine({
    workspaceStates: { stage: async value => { staged.push(value); }, acknowledge: async value => { staged.push(value); } },
    agent: { command: async () => assert.fail("confirm must not re-plan through the agent") },
    engine: { executeTask: async () => assert.fail("must not execute"), approve: async () => {} },
    tasks: { get: async () => null }
  });
  await assert.rejects(() => spine.confirm({ input: { taskId: "missing", stepId: "stp_1", approved: true }, context }),
    error => error.code === "task_not_found");

  const otherOwnerSpine = new BehaviorSpine({
    workspaceStates: { stage: async value => { staged.push(value); }, acknowledge: async value => { staged.push(value); } },
    agent: { command: async () => assert.fail("confirm must not re-plan through the agent") },
    engine: { executeTask: async () => assert.fail("must not execute"), approve: async () => assert.fail("must not approve") },
    tasks: { get: async () => ({ taskId: "tsk_7", tenantId: "tenant", ownerId: "someone-else", conversationId: "cnv_7", application: "health", steps: [] }) }
  });
  await assert.rejects(() => otherOwnerSpine.confirm({ input: { taskId: "tsk_7", stepId: "stp_1", approved: true }, context }),
    error => error.code === "task_owner_required");
});
