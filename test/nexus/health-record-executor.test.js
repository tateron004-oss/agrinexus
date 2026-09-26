"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { createHealthRecordExecutor, verifyHealthRecordOutcome } = require("../../nexus/health/executor.js");

function fixture() {
  const created = [];
  const records = {
    async create(row) {
      created.push(row);
      return {
        record_id: `rec-${created.length}`,
        version: 1,
        record_type: row.recordType,
        created_at: "2026-09-16T00:00:00.000Z"
      };
    }
  };
  return { records, created };
}

test("throws without a record repository", () => {
  assert.throws(() => createHealthRecordExecutor({}), /record repository is required/);
});

test("writes a real record via the repository and returns a verified outcome", async () => {
  const { records, created } = fixture();
  const execute = createHealthRecordExecutor({ records });
  const context = { tenantId: "t1", userId: "u1" };
  const result = await execute({
    input: { recordType: "blood_pressure", observation: { systolic: 120, diastolic: 80 }, command: "log my bp" },
    context,
    taskId: "task-1"
  });
  assert.equal(created.length, 1);
  assert.equal(created[0].tenantId, "t1");
  assert.equal(created[0].ownerId, "u1");
  assert.equal(created[0].subjectId, "u1");
  assert.equal(created[0].workspaceId, "health-records");
  assert.equal(created[0].taskId, "task-1");
  assert.equal(created[0].recordType, "blood_pressure");
  assert.equal(created[0].classification, "health");
  assert.deepEqual(created[0].data, { systolic: 120, diastolic: 80 });
  assert.equal(created[0].provenance.source, "nexus-agent");

  assert.equal(result.recordId, "rec-1");
  assert.equal(result.version, 1);
  assert.equal(result.persisted, true);
  assert.equal(verifyHealthRecordOutcome({ result }).verified, true);
});

test("defaults recordType and subjectId when not provided", async () => {
  const { records, created } = fixture();
  const execute = createHealthRecordExecutor({ records });
  await execute({ input: { record: { note: "feeling fine" } }, context: { tenantId: "t1", userId: "u2" }, taskId: "task-2" });
  assert.equal(created[0].recordType, "health_observation");
  assert.equal(created[0].subjectId, "u2");
  assert.deepEqual(created[0].data, { note: "feeling fine" });
});

// Found live (cross-user IDOR audit): a caller-supplied subjectId used to be
// honored outright -- any signed-in user could forge a health observation
// attributed to an arbitrary other patient, since nothing checked any
// relationship between the caller and the claimed subject. "Recording on
// behalf of someone else isn't a surfaced capability today" (this
// executor's own comment) -- the subject is always the caller.
test("a caller-supplied subjectId is ignored -- the subject is always the caller", async () => {
  const { records, created } = fixture();
  const execute = createHealthRecordExecutor({ records });
  await execute({ input: { subjectId: "victim-patient-99", data: { weight: 150 } }, context: { tenantId: "t1", userId: "u3" }, taskId: "task-3" });
  assert.equal(created[0].subjectId, "u3", "the forged subjectId must never be used");
});

test("a missing recordId or non-positive version does not verify", () => {
  assert.equal(verifyHealthRecordOutcome({ result: { persisted: true, recordId: "", version: 1 } }).verified, false);
  assert.equal(verifyHealthRecordOutcome({ result: { persisted: true, recordId: "rec-1", version: 0 } }).verified, false);
  assert.equal(verifyHealthRecordOutcome({ result: { persisted: false, recordId: "rec-1", version: 1 } }).verified, false);
  assert.equal(verifyHealthRecordOutcome({ result: undefined }).verified, false);
});

test("a reading sent at the top level of the step input, as the planner does, is actually stored", async () => {
  // Before: only observation/record/data were read, so "record my blood pressure
  // as 140 over 90" was persisted with empty data although the task verified.
  const { records, created } = fixture();
  const execute = createHealthRecordExecutor({ records });
  const result = await execute({ input: { intakeType: "blood-pressure", readingType: "blood-pressure", systolic: 140, diastolic: 90 },
    context: { tenantId: "t1", userId: "u1" }, taskId: "task-9" });
  assert.deepEqual(created[0].data, { type: "blood-pressure", systolic: 140, diastolic: 90 });
  assert.deepEqual(result.reading, { type: "blood-pressure", systolic: 140, diastolic: 90 });
  assert.equal(result.persistedRecordId, "rec-1");
  assert.match(result.safetyResponse, /above the usual range/);
  assert.match(result.safetyResponse, /does not diagnose/);
  for (const [key, value] of [["glucose", 110], ["oxygenSaturation", 96], ["temperature", 99.1], ["pulse", 72]]) {
    const each = fixture(); await createHealthRecordExecutor({ records: each.records })({ input: { readingType: key, [key]: value }, context: { tenantId: "t", userId: "u" }, taskId: "t" });
    assert.equal(each.created[0].data[key], value, key);
  }
});

test("an empty input stores nothing invented and returns no reading or safety claim", async () => {
  const { records } = fixture();
  const result = await createHealthRecordExecutor({ records })({ input: {}, context: { tenantId: "t", userId: "u" }, taskId: "t" });
  assert.equal(result.reading, undefined); assert.equal(result.safetyResponse, undefined); assert.equal(result.persisted, true);
});

test("safety guidance follows the stored values and never diagnoses", () => {
  const { healthSafetyResponse } = require("../../nexus/health/executor.js");
  assert.match(healthSafetyResponse({ systolic: 185, diastolic: 100 }), /very high/);
  assert.match(healthSafetyResponse({ systolic: 120, diastolic: 80 }), /typical range/);
  assert.match(healthSafetyResponse({ systolic: 85, diastolic: 55 }), /below the usual range/);
  assert.match(healthSafetyResponse({ glucose: 250 }), /recorded/);
  for (const reading of [{ systolic: 120, diastolic: 80 }, { systolic: 150, diastolic: 95 }, { glucose: 90 }])
    assert.doesNotMatch(healthSafetyResponse(reading), /you have (hypertension|diabetes)|prescrib(e|ing) (you|a)/i);
});
