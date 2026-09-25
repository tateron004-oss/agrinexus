"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { createChronicDiseaseIntakeExecutor, verifyChronicDiseaseIntakeOutcome,
  createChronicDiseaseReadingExecutor, verifyChronicDiseaseReadingOutcome,
  createChronicDiseaseSummaryExecutor, verifyChronicDiseaseSummaryOutcome,
  WORKSPACE_ID, INTAKE_RECORD_TYPE, READING_RECORD_TYPE } = require("../../nexus/health/chronic-executor.js");

function fixture(existingRows = []) {
  const created = [];
  const records = {
    create: async row => { created.push(row); return { record_id: `rec_${created.length}`, version: 1 }; },
    list: async ({ workspaceId, recordType }) => existingRows.filter(row => row.workspaceId === workspaceId && row.recordType === recordType)
  };
  return { records, created };
}

test("throws without a record repository", () => {
  assert.throws(() => createChronicDiseaseIntakeExecutor({}), /record repository is required/);
  assert.throws(() => createChronicDiseaseReadingExecutor({}), /record repository is required/);
  assert.throws(() => createChronicDiseaseSummaryExecutor({}), /record repository is required/);
});

test("intake writes a real, workspace-scoped record with a verified outcome", async () => {
  const { records, created } = fixture();
  const execute = createChronicDiseaseIntakeExecutor({ records });
  const context = { tenantId: "t1", userId: "u1" };
  const result = await execute({ input: { conditionFocus: "diabetes", userRole: "patient",
    accessBarriers: ["no transport"], questionsForProvider: ["is my glucose trend normal"] }, context, taskId: "task-1" });
  assert.equal(created.length, 1);
  assert.equal(created[0].workspaceId, WORKSPACE_ID);
  assert.equal(created[0].recordType, INTAKE_RECORD_TYPE);
  assert.equal(created[0].classification, "health");
  assert.equal(created[0].tenantId, "t1"); assert.equal(created[0].ownerId, "u1"); assert.equal(created[0].subjectId, "u1");
  assert.equal(created[0].data.conditionFocus, "diabetes");
  assert.deepEqual(created[0].data.accessBarriers, ["no transport"]);
  assert.equal(result.recordId, "rec_1"); assert.equal(result.persisted, true);
  assert.equal(verifyChronicDiseaseIntakeOutcome({ result }).verified, true);
});

test("intake defaults an invalid conditionFocus to unknown_provider_review_needed", async () => {
  const { records, created } = fixture();
  const execute = createChronicDiseaseIntakeExecutor({ records });
  await execute({ input: { conditionFocus: "made-up-condition" }, context: { tenantId: "t1", userId: "u1" } });
  assert.equal(created[0].data.conditionFocus, "unknown_provider_review_needed");
});

test("intake refuses diagnosis/prescription-shaped text without writing anything, as a verified (not failed) outcome", async () => {
  const { records, created } = fixture();
  const execute = createChronicDiseaseIntakeExecutor({ records });
  const result = await execute({ input: { questionsForProvider: ["can you change my medication dose"] }, context: { tenantId: "t1", userId: "u1" } });
  assert.equal(created.length, 0);
  assert.equal(result.blocked, true);
  assert.equal(result.persisted, false);
  assert.equal(verifyChronicDiseaseIntakeOutcome({ result }).verified, true);
});

test("reading writes a real record with number-coerced vitals and a computed BMI", async () => {
  const { records, created } = fixture();
  const execute = createChronicDiseaseReadingExecutor({ records });
  const result = await execute({ input: { conditionFocus: "hypertension", systolic: "140", diastolic: "90", pulse: 72,
    weight: 70, weightUnit: "kg", height: 1.75, heightUnit: "m" }, context: { tenantId: "t1", userId: "u1" }, taskId: "task-1" });
  assert.equal(created[0].recordType, READING_RECORD_TYPE);
  assert.equal(created[0].data.systolic, 140); assert.equal(created[0].data.diastolic, 90);
  assert.equal(created[0].data.bmiInformational, null); // heightUnit "m" isn't a recognized unit (ft_in/cm only) -- honestly null, not guessed
  assert.equal(result.persisted, true);
  assert.equal(verifyChronicDiseaseReadingOutcome({ result }).verified, true);
});

test("reading computes BMI correctly for recognized units (cm)", async () => {
  const { records, created } = fixture();
  const execute = createChronicDiseaseReadingExecutor({ records });
  await execute({ input: { weight: 70, weightUnit: "kg", height: 175, heightUnit: "cm" }, context: { tenantId: "t1", userId: "u1" } });
  assert.equal(created[0].data.bmiInformational, 22.9);
});

// Found live (health toolkit/LMS follow-up audit): this exact bug was
// already fixed in the sibling, no-longer-live
// server/providers/chronicDiseaseBridgeProvider.js -- only the exact
// singular "lb" was recognized, so "lbs"/"pounds" (the spellings this
// codebase's own natural-language extractors actually produce) silently
// fell through to "assume already kg," inflating a real, normal BMI into a
// fabricated morbid-obesity reading -- but the fix was never ported to this
// file, the REAL currently-wired executor.
test("reading converts pounds to kg for BMI regardless of spelling (lb/lbs/pounds/POUNDS), not just the exact singular 'lb'", async () => {
  const { records, created } = fixture();
  const execute = createChronicDiseaseReadingExecutor({ records });
  for (const weightUnit of ["lb", "lbs", "pounds", "POUNDS", "Lb"]) {
    await execute({ input: { weight: 180, weightUnit, height: 175, heightUnit: "cm" }, context: { tenantId: "t1", userId: "u1" } });
    assert.equal(created[created.length - 1].data.bmiInformational, 26.7, weightUnit);
  }
});

test("reading refuses emergency/diagnosis-shaped notes without writing anything", async () => {
  const { records, created } = fixture();
  const execute = createChronicDiseaseReadingExecutor({ records });
  const result = await execute({ input: { notes: "please change my medication dose" }, context: { tenantId: "t1", userId: "u1" } });
  assert.equal(created.length, 0);
  assert.equal(result.blocked, true);
  assert.equal(verifyChronicDiseaseReadingOutcome({ result }).verified, true);
});

test("summary honestly reports no readings yet when none exist", async () => {
  const { records } = fixture([]);
  const execute = createChronicDiseaseSummaryExecutor({ records });
  const result = await execute({ input: {}, context: { tenantId: "t1", userId: "u1" } });
  assert.equal(result.readingCount, 0);
  assert.deepEqual(result.missingData, ["No readings saved yet"]);
  assert.equal(verifyChronicDiseaseSummaryOutcome({ result }).verified, true);
});

test("summary aggregates real readings filtered by condition focus, and pulls questions from the latest intake", async () => {
  const rows = [
    { workspaceId: WORKSPACE_ID, recordType: READING_RECORD_TYPE, data: { conditionFocus: "diabetes", glucose: 110, dateTimeText: "today" } },
    { workspaceId: WORKSPACE_ID, recordType: READING_RECORD_TYPE, data: { conditionFocus: "hypertension", systolic: 130, diastolic: 85 } },
    { workspaceId: WORKSPACE_ID, recordType: INTAKE_RECORD_TYPE, data: { conditionFocus: "diabetes", questionsForProvider: ["is this normal"], accessBarriers: ["no transport"] } }
  ];
  const { records } = fixture(rows);
  const execute = createChronicDiseaseSummaryExecutor({ records });
  const diabetesOnly = await execute({ input: { conditionFocus: "diabetes" }, context: { tenantId: "t1", userId: "u1" } });
  assert.equal(diabetesOnly.readingCount, 1);
  assert.equal(diabetesOnly.readingTableSummary[0].glucose, 110);
  assert.deepEqual(diabetesOnly.patientQuestions, ["is this normal"]);
  assert.deepEqual(diabetesOnly.accessBarriers, ["no transport"]);
  assert.equal(verifyChronicDiseaseSummaryOutcome({ result: diabetesOnly }).verified, true);

  const allConditions = await execute({ input: {}, context: { tenantId: "t1", userId: "u1" } });
  assert.equal(allConditions.conditionFocus, "cardiometabolic");
  assert.equal(allConditions.readingCount, 2);
});

test("verify functions reject a malformed result", () => {
  assert.equal(verifyChronicDiseaseIntakeOutcome({ result: undefined }).verified, false);
  assert.equal(verifyChronicDiseaseReadingOutcome({ result: { persisted: true, recordId: "", version: 1 } }).verified, false);
  assert.equal(verifyChronicDiseaseSummaryOutcome({ result: { persisted: true } }).verified, false);
});
