"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { createTelehealthPrepareExecutor, verifyTelehealthPrepareOutcome, createOperationPlanExecutor, verifyOperationPlanOutcome } = require("../../nexus/data/prepared-record-executors.js");
const { verifyCapabilityCompletion } = require("../../nexus/apps/capability-completion-contracts.js");

const sha = "a".repeat(40);
const context = { tenantId: "t1", userId: "u1" };
function fixture() {
  const created = [];
  return { created, records: { create: async item => { created.push(item); return { record_id: "rec-9", version: 1, record_type: item.recordType, created_at: "2026-09-20T05:00:00.000Z" }; } } };
}

test("both executors require a record repository", () => {
  assert.throws(() => createTelehealthPrepareExecutor({}), /record repository is required/);
  assert.throws(() => createOperationPlanExecutor({}), /record repository is required/);
});

test("a telehealth intake is really saved as a health record for the person, and says it was not shared", async () => {
  const { records, created } = fixture();
  const result = await createTelehealthPrepareExecutor({ records })({ input: { concern: "  Save a telehealth   intake for my blood pressure concern  ", requestedNextStep: true }, context, taskId: "tsk_1" });
  assert.equal(created.length, 1);
  assert.deepEqual([created[0].tenantId, created[0].ownerId, created[0].subjectId, created[0].workspaceId, created[0].recordType, created[0].classification, created[0].taskId],
    ["t1", "u1", "u1", "telehealth-intakes", "telehealth_intake", "health", "tsk_1"]);
  assert.equal(created[0].data.concern, "Save a telehealth intake for my blood pressure concern", "whitespace collapsed");
  assert.equal(created[0].data.status, "saved_not_shared"); assert.equal(created[0].data.requestedNextStep, true);
  assert.equal(result.savedRecordId, "rec-9"); assert.equal(result.recordId, "rec-9"); assert.equal(result.persisted, true); assert.equal(result.version, 1);
  assert.match(result.nextStep, /nothing was shared with or sent to any provider/);
  assert.equal(verifyTelehealthPrepareOutcome({ result }).verified, true);
  assert.equal(created[0].subjectId, "u1");
  // Found live (cross-user IDOR audit): a caller-supplied subjectId used to
  // be honored outright -- any signed-in user could forge a telehealth
  // intake attributed to an arbitrary other patient. The subject is always
  // the caller (this same file's own comment already said so; the code
  // didn't enforce it).
  await createTelehealthPrepareExecutor({ records })({ input: { concern: "x", subjectId: "victim-patient" }, context, taskId: "t" });
  assert.equal(created[1].subjectId, "u1", "the forged subjectId must never be used");
});

test("a telehealth intake with no concern is refused, not saved empty", async () => {
  const { records, created } = fixture();
  await assert.rejects(() => createTelehealthPrepareExecutor({ records })({ input: {}, context, taskId: "t" }), error => error.code === "telehealth_concern_required");
  await assert.rejects(() => createTelehealthPrepareExecutor({ records })({ input: { concern: "   " }, context, taskId: "t" }), error => error.code === "telehealth_concern_required");
  assert.equal(created.length, 0);
  assert.equal(verifyTelehealthPrepareOutcome({ result: { persisted: true, recordId: "r", savedRecordId: "other", version: 1, intake: { concern: "c" } } }).verified, false, "the saved id must be the record id");
  for (const bad of [{}, { persisted: true }, { persisted: true, recordId: "", savedRecordId: "", version: 1, intake: { concern: "c" } }, { persisted: true, recordId: "r", savedRecordId: "r", version: 0, intake: { concern: "c" } },
    { persisted: true, recordId: "r", savedRecordId: "r", version: 1, intake: {} }])
    assert.equal(verifyTelehealthPrepareOutcome({ result: bad }).verified, false, JSON.stringify(bad));
});

test("a field operation plan is really saved awaiting approval, and nothing is dispatched", async () => {
  const { records, created } = fixture();
  const result = await createOperationPlanExecutor({ records })({ input: { operation: "Prepare a field operation, record approval state, and return its receipt.", recordApproval: true }, context, taskId: "tsk_2" });
  assert.deepEqual([created[0].workspaceId, created[0].recordType, created[0].classification], ["field-operations", "field_operation_plan", "standard"]);
  assert.equal(created[0].data.approvalState, "pending_approval"); assert.equal(created[0].data.dispatched, false); assert.equal(created[0].data.approvalRequested, true);
  assert.equal(result.approvalState, "pending_approval"); assert.equal(result.dispatched, false); assert.equal(result.receipt.recordId, "rec-9");
  assert.match(result.note, /Nothing was dispatched/);
  assert.equal(verifyOperationPlanOutcome({ result }).verified, true);
  await assert.rejects(() => createOperationPlanExecutor({ records })({ input: {}, context, taskId: "t" }), error => error.code === "operation_description_required");
  assert.equal(created.length, 1);
  for (const bad of [{}, { ...result, dispatched: true }, { ...result, persisted: false }, { ...result, receipt: { recordId: "different" } }, { ...result, version: 0 }])
    assert.equal(verifyOperationPlanOutcome({ result: bad }).verified, false);
  await createOperationPlanExecutor({ records })({ input: { operation: "y", subjectId: "someone-else" }, context, taskId: "t" });
  assert.equal(created[1].subjectId, "u1", "a caller-supplied subjectId must never be used here either");
});

test("the results satisfy the production completion contracts that gate every deploy", async () => {
  const { records } = fixture();
  const telehealthInput = { concern: "Save a telehealth intake for my blood pressure concern and show the next step.", requestedNextStep: true };
  const telehealth = await createTelehealthPrepareExecutor({ records })({ input: telehealthInput, context, taskId: "t" });
  // Production evidence is the step input merged with the executor's result (see a deploy's probe artifact).
  assert.equal(verifyCapabilityCompletion({ application: "telehealth", releaseSha: sha, evidence: { ...telehealthInput, ...telehealth, rendered: true, visible: true } }).verified, true);
  const operationInput = { operation: "Prepare a field operation, record approval state, and return its receipt.", recordApproval: true };
  const operation = await createOperationPlanExecutor({ records })({ input: operationInput, context, taskId: "t" });
  assert.equal(verifyCapabilityCompletion({ application: "operations", releaseSha: sha, evidence: { ...operationInput, ...operation, rendered: true, visible: true } }).verified, true);
  assert.throws(() => verifyCapabilityCompletion({ application: "operations", releaseSha: sha, evidence: { ...operationInput, rendered: true, visible: true } }), /approvalState, receipt/, "without a real result there is no evidence");
});

test("the runtime uses these executors instead of the provider stand-in", () => {
  const runtime = fs.readFileSync(path.join(__dirname, "../../nexus/runtime/create-runtime.js"), "utf8");
  assert.match(runtime, /"telehealth\.prepare": \{ create: \(\) => createTelehealthPrepareExecutor\(\{ records \}\), verify: verifyTelehealthPrepareOutcome, method: "real_record_write" \}/);
  assert.match(runtime, /"drone\.plan": \{ create: \(\) => createOperationPlanExecutor\(\{ records \}\), verify: verifyOperationPlanOutcome, method: "real_record_write" \}/);
});
