"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { BehaviorSpine } = require("../../nexus/runtime/behavior-spine.js");

// Found by an independent audit: after "yes" on a confirmed write (a blood pressure reading, a business record, a document) the write happened, but the result carried the
// confirmation's own new command and correlation ids, and the engine only accepts an acknowledgement made with the ids the task was created under. The acknowledgement was refused
// (409), the task stayed "verifying" for ever, and the screen fell back to the older handlers.

const context = { tenantId: "tenant", userId: "user" };

test("the result of a confirmation carries the ids the task was made under, so the screen's acknowledgement is accepted", async () => {
  const task = { taskId: "tsk_9", tenantId: "tenant", ownerId: "user", conversationId: "cnv_9", commandId: "command_original", correlationId: "trace_original",
    application: "health", goal: "Record blood pressure", riskTier: "regulated", state: "verifying", steps: [{ stepId: "stp_9", toolId: "health.record", input: {} }] };
  const staged = [];
  const spine = new BehaviorSpine({
    workspaceStates: { stage: async value => { staged.push(value); }, acknowledge: async () => {} },
    agent: { command: async () => assert.fail("confirm must not re-plan") },
    engine: { approve: async () => {}, executeTask: async () => ({ state: "awaiting_render", completed: false, receipts: [{ receiptId: "rcp_9" }] }) },
    tasks: { get: async () => task }
  });
  const result = await spine.confirm({ input: { taskId: "tsk_9", stepId: "stp_9", approved: true, text: "Yes" }, context });
  assert.equal(result.state, "render_required");
  assert.equal(result.commandId, "command_original");
  assert.equal(result.correlationId, "trace_original");
  assert.equal(result.render.commandId, "command_original");
  assert.equal(result.render.correlationId, "trace_original");
  assert.equal(staged.at(-1).outcome.commandId, "command_original", "what is stored for the acknowledgement uses them too");
});
