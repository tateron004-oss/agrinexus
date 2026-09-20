"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { BehaviorSpine } = require("../../nexus/runtime/behavior-spine.js");
const { createCommand } = require("../../nexus/contracts/command.js");
const { ordinaryConversationPlan } = require("../../nexus/brain/planner.js");

// Production 2026-09-20: after #507 shipped, "weather" (and "hali ya hewa") returned 503 "The authoritative Nexus runtime is
// unavailable". The deterministic clarification carried application "conversation", which is not a registered application, so
// the result builder rejected it; unit tests of the planner alone never ran that path. This runs the plan through the spine.
function spineReturning(plan) {
  const command = createCommand({ text: "weather", channel: "typed", correlationId: "corr-1", tenantId: "t1", actorId: "u1" });
  return new BehaviorSpine({ agent: { command: async () => ({ action: "clarify", command, plan, task: null }) },
    engine: { executeTask: async () => assert.fail("a clarification executes nothing") }, tasks: { get: async () => null },
    conversations: {}, workspaceStates: { stage: async () => {}, acknowledge: async () => {} } });
}

test("every deterministic clarification the planner can return survives the result builder", async () => {
  for (const text of ["weather", "What's the weather", "hali ya hewa", "forecast"]) {
    const plan = ordinaryConversationPlan(text, {});
    assert.ok(plan.clarification, text);
    const result = await spineReturning(plan).turn({ input: { text }, context: { tenantId: "t1", userId: "u1" } });
    assert.equal(result.state, "clarification_required", text); assert.equal(result.response, "Which town or place should I check the weather for? (Tell me \"I live in <your town>\" once and I will remember it.)", text);
    assert.equal(result.application, "live-knowledge", "a registered application, not the made-up 'conversation'");
  }
});
