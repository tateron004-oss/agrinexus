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

test("an explicit subjectId is honored instead of defaulting to the caller", async () => {
  const { records, created } = fixture();
  const execute = createHealthRecordExecutor({ records });
  await execute({ input: { subjectId: "patient-99", data: { weight: 150 } }, context: { tenantId: "t1", userId: "u3" }, taskId: "task-3" });
  assert.equal(created[0].subjectId, "patient-99");
});

test("a missing recordId or non-positive version does not verify", () => {
  assert.equal(verifyHealthRecordOutcome({ result: { persisted: true, recordId: "", version: 1 } }).verified, false);
  assert.equal(verifyHealthRecordOutcome({ result: { persisted: true, recordId: "rec-1", version: 0 } }).verified, false);
  assert.equal(verifyHealthRecordOutcome({ result: { persisted: false, recordId: "rec-1", version: 1 } }).verified, false);
  assert.equal(verifyHealthRecordOutcome({ result: undefined }).verified, false);
});
