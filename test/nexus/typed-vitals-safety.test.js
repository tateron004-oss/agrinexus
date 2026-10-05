"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { completeHealthRecordPlan, emergencyHealthGuidancePlan } = require("../../nexus/brain/planner.js");
const { informedConfirmationPrompt } = require("../../nexus/consent/user-confirmable-consents.js");
const { createHealthRecordExecutor } = require("../../nexus/health/executor.js");

// Found by an independent capability audit: the safety rules for a blood-sugar or blood-pressure reading (refuse a number that cannot be real, ask the unit, say plainly when a reading is
// very high or very low) existed only on the spoken path. Typed, "my blood sugar is 35" or "450" was saved after a plain confirmation with no word of warning, "7.2 mmol" and "my sugar is 45"
// were not read, "my blood pressure is 400 over 20" gave emergency guidance instead of a refusal, and "190 over 125, please save it" gave guidance but never saved.
// The wording of the urgent guidance is general safety information and must be reviewed by a clinician before it is relied on.

const catalog = { tools: [{ toolId: "health.record" }, { toolId: "health.emergency-guidance" }], applications: [{ applicationId: "health" }] };
const planFor = text => emergencyHealthGuidancePlan(text, catalog) || completeHealthRecordPlan(text, catalog);
const prompt = plan => informedConfirmationPrompt({ scope: "health:record:write", step: { title: plan.steps[0].title, input: plan.steps[0].input } });

test("a blood sugar with its unit is read, converted to one unit for the record, and said back with the unit", () => {
  const mmol = planFor("my blood sugar is 7.2 mmol");
  assert.equal(mmol.steps[0].toolId, "health.record");
  assert.equal(mmol.steps[0].input.glucose, 130);
  assert.equal(mmol.steps[0].input.glucoseUnit, "mmol/L");
  assert.match(prompt(mmol), /7\.2 millimoles per litre \(about 130 milligrams per decilitre\)/);
  const mgdl = planFor("my glucose is 130 mg per dL");
  assert.equal(mgdl.steps[0].input.glucose, 130);
  assert.equal(mgdl.steps[0].input.glucoseUnit, "mg/dL");
  assert.equal(planFor("My blood sugar is 120.").steps[0].input.glucose, 120, "a plain mg/dL-sized number is still read");
});

test("a number that cannot be a real reading, or that could be either unit, is said so and nothing is saved", () => {
  for (const text of ["my blood sugar is 5000", "my blood sugar is 900", "my blood sugar is 60 mmol"]) {
    const plan = planFor(text);
    assert.equal(plan.steps.length, 0, text);
    assert.match(plan.response, /did not save it/, text);
  }
  const unclear = planFor("my blood sugar is 35");
  assert.equal(unclear.steps.length, 0);
  assert.match(unclear.response, /not sure if that is in mmol per litre or mg per dL/);
});

test("a very low or very high blood sugar is said plainly before the question about saving it", () => {
  const low = planFor("my blood sugar is 45 mg per dL");
  assert.match(prompt(low), /^This is a very low blood sugar\. If you feel shaky.*get emergency help now.*I can save this to your own health records/);
  const high = planFor("my blood sugar is 450");
  assert.match(prompt(high), /^This is a very high blood sugar\..*emergency help now.*I can save this/);
  const slightlyLow = planFor("my blood sugar is 65 mg per dL");
  assert.match(prompt(slightlyLow), /^This is lower than usual\./);
  assert.doesNotMatch(prompt(planFor("my blood sugar is 105")), /emergency|lower than usual|very/i, "a normal reading has no warning");
});

test("blood pressure: an impossible reading is refused, an urgent one is saved after the guidance, a symptom still gets the guidance alone", () => {
  const impossible = planFor("my blood pressure is 400 over 20");
  assert.equal(impossible.steps.length, 0);
  assert.match(impossible.response, /does not sound like a real blood-pressure reading/);
  assert.equal(planFor("my blood pressure is 120 over 130").steps.length, 0, "the top number must be higher");

  const urgent = planFor("my blood pressure is 190 over 125, please save it");
  assert.equal(urgent.steps[0].toolId, "health.record", "recorded, not only talked about");
  assert.equal(urgent.steps[0].input.systolic, 190);
  assert.match(prompt(urgent), /^This is a very high blood pressure\..*emergency help now.*I can save this/);

  const withSymptom = planFor("my blood pressure is 190 over 125 and I have chest pain");
  assert.equal(withSymptom.steps[0].toolId, "health.emergency-guidance", "an emergency sign gets the guidance alone, straight away");
  const low = planFor("my blood pressure is 85 over 55");
  assert.match(prompt(low), /^This is lower than many people's usual reading\./);
  assert.doesNotMatch(prompt(planFor("my blood pressure is 120 over 80")), /very high|lower than/i);
});

test("a normal blood-pressure or glucose confirmation is unchanged", () => {
  assert.match(prompt(planFor("My blood pressure is 120 over 80.")), /^I can save this to your own health records: blood pressure 120 over 80\./);
});

test("after saving, a low or high blood sugar gets the same plain guidance", async () => {
  const created = [];
  const execute = createHealthRecordExecutor({ records: { create: async value => { created.push(value); return { recordId: "r1" }; } } });
  const run = async glucose => execute({ input: { intakeType: "blood-glucose", readingType: "blood-glucose", glucose }, context: { tenantId: "t", userId: "u" }, taskId: "tsk_1" });
  const low = await run(45);
  assert.match(JSON.stringify(low), /very low/i);
  const high = await run(450);
  assert.match(JSON.stringify(high), /very high/i);
  const normal = await run(105);
  assert.match(JSON.stringify(normal), /recorded/i);
  assert.doesNotMatch(JSON.stringify(normal), /emergency help now/i);
});
