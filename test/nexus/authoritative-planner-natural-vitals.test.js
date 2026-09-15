"use strict";
const assert = require("node:assert/strict");
const test = require("node:test");
const { completeHealthRecordPlan, emergencyHealthGuidancePlan } = require("../../nexus/brain/planner.js");

const catalog = {
  tools: [{ toolId: "health.record" }, { toolId: "health.emergency-guidance" }],
  applications: [{ applicationId: "health" }]
};

function planFor(command) {
  return emergencyHealthGuidancePlan(command, catalog) || completeHealthRecordPlan(command, catalog);
}

test("a natural 'my temperature is X' statement is recorded, not left to fall through to AI planning", () => {
  const plan = completeHealthRecordPlan("My temperature is 101.", catalog);
  assert.equal(plan.application, "health");
  assert.equal(plan.riskTier, "regulated");
  assert.equal(plan.steps[0].toolId, "health.record");
  assert.equal(plan.steps[0].input.temperature, 101);
});

test("a natural, NORMAL blood pressure statement is recorded, not misrouted to emergency guidance -- confirmed live this was the actual production bug (120/80 produced a 'call 911 now' response)", () => {
  const plan = completeHealthRecordPlan("My blood pressure is 120 over 80.", catalog);
  assert.equal(plan.steps[0].toolId, "health.record");
  assert.deepEqual({ systolic: plan.steps[0].input.systolic, diastolic: plan.steps[0].input.diastolic }, { systolic: 120, diastolic: 80 });
});

test("natural pulse, oxygen, and glucose statements are all recorded the same way", () => {
  const pulse = completeHealthRecordPlan("My pulse is 72.", catalog);
  assert.equal(pulse.steps[0].toolId, "health.record");
  assert.equal(pulse.steps[0].input.pulse, 72);

  const oxygen = completeHealthRecordPlan("My oxygen is 95.", catalog);
  assert.equal(oxygen.steps[0].toolId, "health.record");
  assert.equal(oxygen.steps[0].input.oxygenSaturation, 95);

  const glucose = completeHealthRecordPlan("My blood sugar is 120.", catalog);
  assert.equal(glucose.steps[0].toolId, "health.record");
  assert.equal(glucose.steps[0].input.glucose, 120);
});

test("a temporal filler word ('today') does not break natural vitals recognition", () => {
  const plan = completeHealthRecordPlan("My temperature today is 101.", catalog);
  assert.equal(plan.steps[0].toolId, "health.record");
  assert.equal(plan.steps[0].input.temperature, 101);
});

test("a genuine hypertensive-crisis blood pressure reading still routes to emergency guidance, not a plain record, even phrased naturally", () => {
  const plan = planFor("My blood pressure is 190 over 125.");
  assert.equal(plan.steps[0].toolId, "health.emergency-guidance");
});

test("an explicit red-flag symptom still routes to emergency guidance regardless of any co-mentioned reading", () => {
  const plan = planFor("My blood pressure is 180 over 120 and I have chest pain.");
  assert.equal(plan.steps[0].toolId, "health.emergency-guidance");
});

test("existing command-style phrasing ('record my BP as X') is unaffected by the natural-statement widening", () => {
  const plan = completeHealthRecordPlan("Record my blood pressure as 140 over 90 and show the safety response.", catalog);
  assert.equal(plan.steps[0].toolId, "health.record");
  assert.deepEqual({ systolic: plan.steps[0].input.systolic, diastolic: plan.steps[0].input.diastolic }, { systolic: 140, diastolic: 90 });
});

test("a purely informational question about a vital is not fabricated into a saved reading", () => {
  assert.equal(completeHealthRecordPlan("Help me understand blood pressure.", catalog), null);
  assert.equal(completeHealthRecordPlan("What is a normal blood pressure, like 120 over 80?", catalog), null);
});

test("a completely unrelated command using a vital-sounding word does not fabricate a reading -- mirrors the server-side VITAL_VALUE_CONNECTOR fix", () => {
  assert.equal(completeHealthRecordPlan("Please use temp file 42 for this.", catalog), null);
  assert.equal(completeHealthRecordPlan("The template 87 needs review.", catalog), null);
  assert.equal(completeHealthRecordPlan("Check pulse item 85 in the catalog.", catalog), null);
  assert.equal(completeHealthRecordPlan("Check oxygen tank 95 for the clinic.", catalog), null);
  assert.equal(completeHealthRecordPlan("The glucose sensor model 120 is out of stock.", catalog), null);
});
