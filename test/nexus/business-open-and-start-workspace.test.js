"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const voiceDispatch = require("../../nexus/business/voice-dispatch.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");

// Found on production with the real AI: "Open the business workspace." was refused (HTTP 422, "I could not tell what to do with that in your business records") and "Start a workspace." reached the AI
// model, which planned a DOCUMENT and failed (HTTP 502). Both are now read by the business matcher itself, before any model is asked.
const catalog = {
  tools: [
    { tool_id: "business.manage", domain: "business", risk_tier: "low", confirmation_required: true },
    { tool_id: "business.query", domain: "business", risk_tier: "low", confirmation_required: false }
  ],
  applications: [{ applicationId: "business", capabilities: ["business.manage", "business.query"], riskTiers: ["low"] }]
};
const planner = count => new OpenEndedPlanner({
  model: { plan: async () => { throw new Error("must not reach the AI planning model"); } },
  tools: { list: async () => catalog.tools }, applications: { list: () => catalog.applications }, businessWorkspaces: { count: async () => count }
});
const ask = (p, text) => p.plan({ command: { text, tenantId: "t1", actorId: "u1", locale: "en", channel: "typed" }, context: {} });

test("opening the business workspace is a request for the person's workspaces, in the words people use", () => {
  for (const text of ["Open the business workspace.", "open my business", "go to my nonprofit", "Open the church workspace", "Show my business workspace"]) {
    assert.equal(voiceDispatch.classify(text), "list", text);
  }
});

test("starting a workspace is a request to create one, whether or not the word business is said", () => {
  for (const text of ["Start a workspace.", "Set up my workspace", "Create a new workspace", "Begin a workspace", "Start a business workspace called Sunrise Poultry"]) {
    assert.equal(voiceDispatch.classify(text), "createWorkspace", text);
  }
});

test("other sentences that share the words are NOT taken: plans, the farm window, opening a business, unrelated talk", () => {
  for (const text of ["Create a business plan for my bakery", "Start the farm workspace", "open the farm workspace", "open a business", "Make it happen with my business somehow", "What is the weather"]) {
    assert.equal(voiceDispatch.classify(text), null, text);
  }
});

test("'Start a workspace.' is answered by the planner itself, asking what to call it, with no model call and no steps", async () => {
  const plan = await ask(planner(0), "Start a workspace.");
  assert.deepEqual(plan.steps, []);
  assert.match(String(plan.clarification || plan.response || ""), /call this/i);
});

test("'Open the business workspace.' becomes a read-only look at the person's workspaces (business.query), with no model call", async () => {
  const plan = await ask(planner(0), "Open the business workspace.");
  assert.equal(plan.steps.length, 1);
  assert.equal(plan.steps[0].toolId, "business.query");
});
