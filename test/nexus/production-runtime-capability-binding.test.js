"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { executeAction } = require("../../server/nexusActionExecutor");

// nexusActionExecutor.executeAction() is supposed to execute only a
// capability that nexusActionPlanner actually selected for the stated
// userGoal (plan.capabilities) -- the planner is what computes
// missingInformation and requiresConfirmation for that specific intent.
// Instead it did `getCapability(input.capabilityId || plan.capabilities[0])`,
// trusting a raw, client-supplied capabilityId with no check that it was
// even one of the capabilities the plan selected. A caller could send an
// easy, low-risk userGoal (empty missingInformation, e.g. "weather in
// Nairobi") together with an unrelated, more sensitive capabilityId (e.g.
// "medical.chronicCare") and `confirmed: true`, and the executor would bind
// to and attempt that unrelated capability -- reachable live via POST
// /api/nexus/runtime/execute.
test("an unrelated, client-supplied capabilityId cannot override the capability the planner selected for the stated goal", async () => {
  const db = {};
  const result = await executeAction({
    userGoal: "what is the weather in Nairobi",
    capabilityId: "medical.chronicCare",
    confirmed: true
  }, db, process.env);

  assert.deepEqual(Object.keys(result.connectorReadiness), ["public_weather_open_meteo"],
    "execution must stay bound to the planned capability's connector (knowledge.weather), never the spoofed medical.chronicCare connector");
  assert.deepEqual(result.capabilities, ["knowledge.weather"]);
});

test("a capabilityId that IS one of the planner's selected capabilities for the goal is still honored", async () => {
  const db = {};
  const result = await executeAction({
    userGoal: "my blood pressure is 150 over 95, please note it for my provider",
    capabilityId: "medical.rpm",
    confirmed: true
  }, db, process.env);

  assert.ok(result.capabilities.includes("medical.rpm"), "medical.rpm must be one of the planned capabilities for this goal");
  assert.deepEqual(Object.keys(result.connectorReadiness), ["medical_provider_api"],
    "choosing a capability that the plan legitimately offered for this goal must still work");
});
