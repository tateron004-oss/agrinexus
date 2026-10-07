"use strict";
const assert = require("node:assert/strict");
const test = require("node:test");
const { completeHealthRecordPlan } = require("../../nexus/brain/planner.js");
const { profileWithOwnHealthRecordsOnly } = require("../../server/providers/healthRecordScope.js");

// The planner read only "my blood pressure is 140 over 90" and "my blood sugar is 7.2" in plain digits. The ways a reading is SAID (number words, "by", a decimal comma, "my sugar" with no "blood",
// Kiswahili) fell through to the AI model, which has no business guessing at a health number. They are now read by the same reader the spoken route uses, and a figure that cannot be read whole
// is asked about, never recorded cut short.

const catalog = { tools: [{ toolId: "health.record" }, { toolId: "health.emergency-guidance" }], applications: [{ applicationId: "health" }] };
const step = text => completeHealthRecordPlan(text, catalog)?.steps?.[0];

test("a blood pressure said in words, with 'by', or in Kiswahili is recorded as the same two numbers", () => {
  for (const [phrase, systolic, diastolic] of [["my blood pressure is one forty over ninety", 140, 90], ["my bp is 140 by 90", 140, 90], ["my blood pressure is 140 and 90", 140, 90], ["presha yangu ni 160 juu ya 100", 160, 100],
    ["shinikizo la damu 150 na 95", 150, 95], ["systolic 140 diastolic 90", 140, 90], ["my pressure is one fifty over ninety five", 150, 95], ["shinikizo langu la damu ni 140 kwa 90", 140, 90]]) {
    const found = step(phrase);
    assert.ok(found && found.toolId === "health.record", phrase);
    assert.deepEqual([found.input.systolic, found.input.diastolic], [systolic, diastolic], phrase);
  }
});

test("a sugar said without 'blood', with a comma or a spoken point, is recorded whole", () => {
  for (const [phrase, said, unit] of [["my sugar is 9.4", 9.4, "mmol/L"], ["sukari yangu 7.5", 7.5, "mmol/L"], ["my blood sugar is 8,5", 8.5, "mmol/L"], ["my blood sugar is 7 point 2", 7.2, "mmol/L"], ["my sugar is seven point two", 7.2, "mmol/L"], ["my sugar is 130", 130, "mg/dL"]]) {
    const found = step(phrase);
    assert.ok(found && found.toolId === "health.record", phrase);
    assert.equal(found.input.glucoseSaid, said, phrase);
    assert.equal(found.input.glucoseUnit, unit, phrase);
  }
});

test("pulse, temperature and oxygen said plainly are recorded; weight is not a planner reading", () => {
  assert.equal(step("pulse 88").input.pulse, 88);
  assert.equal(step("mapigo ya moyo ni 88").input.pulse, 88);
  assert.deepEqual([step("temperature 38.5").input.temperature, step("temperature 38.5").input.temperatureUnit], [38.5, "C"]);
  assert.equal(step("my oxygen is 96").input.oxygenSaturation, 96);
});

test("impossible or unclear figures are said so and nothing is planned", () => {
  const impossible = completeHealthRecordPlan("my blood pressure is one fifty over fifteen hundred", catalog);
  assert.equal(impossible?.steps?.length, 0);
  assert.match(impossible.response, /did not save it/);
  const cut = completeHealthRecordPlan("my sugar is 8 5", catalog);
  assert.equal(cut?.steps?.length, 0);
  assert.match(cut.response, /nothing has been saved/);
  const unit = completeHealthRecordPlan("my blood sugar is 35", catalog);
  assert.match(unit.response, /not sure if that is in mmol per litre or mg per dL/);
});

test("ordinary sentences are not planned as readings", () => {
  for (const phrase of ["add sugar 2 kg to my shopping list", "split the harvest 60/40", "the plot is 60 by 40", "what is the temperature in Nairobi", "what does a blood pressure of 140 over 90 mean", "I sold 3 bags of pulses"]) {
    assert.equal(completeHealthRecordPlan(phrase, catalog), null, phrase);
  }
});

test("what another signed-in person is shown of the shared data leaves out readings that belong to someone else", () => {
  const profile = {
    nexusChronicDiseaseReadings: [{ id: "a", ownerId: "u1", systolic: 150 }, { id: "b", ownerId: "u2", systolic: 111 }, { id: "c", systolic: 120 }],
    nexusRpmDeviceReadings: [{ id: "d", ownerId: "u2", metric: "weight" }], nexusHealthVoicePending: [{ id: "e", ownerId: "u2", kind: "save" }], other: [1]
  };
  const seen = profileWithOwnHealthRecordsOnly(profile, ["u1", "u1@example.org"]);
  assert.deepEqual(seen.nexusChronicDiseaseReadings.map(record => record.id), ["a", "c"], "own readings and ownerless demo readings stay");
  assert.deepEqual(seen.nexusRpmDeviceReadings, []);
  assert.deepEqual(seen.nexusHealthVoicePending, []);
  assert.deepEqual(seen.other, [1]);
  assert.equal(profile.nexusChronicDiseaseReadings.length, 3, "the shared data itself is not changed");
  assert.equal(profileWithOwnHealthRecordsOnly({ other: [1] }, ["u1"]).other[0], 1);
});
