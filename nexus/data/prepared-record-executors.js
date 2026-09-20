"use strict";

// Real executors for "telehealth.prepare" and "drone.plan". Both used to be answered by the scripts/provider-engines.js
// stand-in, which returned a success with a made-up id and stored nothing: "Save a telehealth intake" reported
// "savedRecordId" for a record that did not exist, and "record approval state" returned an "approvalState: recorded"
// receipt for nothing. Like health.record (nexus/health/executor.js), "real" here means a genuine versioned write to
// nexus/'s own Postgres store (RecordRepository), and the result says exactly what did and did not happen.

function coded(code, message) { const error = new Error(message); error.code = code; return error; }
const text = (value, limit) => String(value ?? "").replace(/\s+/g, " ").trim().slice(0, limit);

function createTelehealthPrepareExecutor({ records }) {
  if (!records?.create) throw new Error("A record repository is required.");
  return async function execute({ input = {}, context, taskId }) {
    const concern = text(input.concern || input.reason || input.goal, 2000);
    if (!concern) throw coded("telehealth_concern_required", "A telehealth intake needs a concern to save.");
    // telehealth.prepare is confirmationRequired with consent scope health:telehealth-intake:write; the engine only
    // reaches this executor after the person approved it, and the subject is the person themselves.
    const intake = { concern, requestedNextStep: input.requestedNextStep === true, status: "saved_not_shared", preparedAt: new Date().toISOString() };
    const inserted = await records.create({
      tenantId: context.tenantId, ownerId: context.userId, subjectId: input.subjectId || context.userId,
      workspaceId: "telehealth-intakes", taskId, recordType: "telehealth_intake", classification: "health",
      data: intake, provenance: { source: "nexus-agent", tool: "telehealth.prepare" }
    });
    return {
      intake, savedRecordId: inserted.record_id, recordId: inserted.record_id, version: inserted.version, persisted: true,
      nextStep: "Review this intake, then schedule a visit with a connected care provider. It is saved to your own records only; nothing was shared with or sent to any provider."
    };
  };
}

function verifyTelehealthPrepareOutcome({ result }) {
  const verified = result?.persisted === true && typeof result?.recordId === "string" && result.recordId.length > 0
    && result?.savedRecordId === result?.recordId && Number(result?.version) >= 1 && Boolean(result?.intake?.concern);
  return { verified, method: "real_record_write", reason: verified ? null : "telehealth_intake_not_saved" };
}

function createOperationPlanExecutor({ records }) {
  if (!records?.create) throw new Error("A record repository is required.");
  return async function execute({ input = {}, context, taskId }) {
    const operation = text(input.operation || input.goal || input.plan, 2000);
    if (!operation) throw coded("operation_description_required", "A field operation plan needs a description to save.");
    // drone.plan carries no confirmation gate of its own, so nobody has approved the operation: the plan is saved as
    // awaiting approval, and nothing is dispatched.
    const plan = { operation, approvalRequested: input.recordApproval === true, approvalState: "pending_approval", dispatched: false,
      status: "planned_not_dispatched", preparedAt: new Date().toISOString() };
    const inserted = await records.create({
      tenantId: context.tenantId, ownerId: context.userId, subjectId: input.subjectId || context.userId,
      workspaceId: "field-operations", taskId, recordType: "field_operation_plan", classification: "standard",
      data: plan, provenance: { source: "nexus-agent", tool: "drone.plan" }
    });
    return {
      operation, approvalState: plan.approvalState, dispatched: false, persisted: true, recordId: inserted.record_id, version: inserted.version,
      receipt: { recordId: inserted.record_id, version: inserted.version, recordType: inserted.record_type || "field_operation_plan", createdAt: inserted.created_at || plan.preparedAt },
      note: "The plan is saved and waits for approval. Nothing was dispatched and no drone or vehicle was contacted."
    };
  };
}

function verifyOperationPlanOutcome({ result }) {
  const verified = result?.persisted === true && typeof result?.recordId === "string" && result.recordId.length > 0
    && Number(result?.version) >= 1 && result?.dispatched === false && result?.receipt?.recordId === result?.recordId;
  return { verified, method: "real_record_write", reason: verified ? null : "operation_plan_not_saved" };
}

module.exports = Object.freeze({ createTelehealthPrepareExecutor, verifyTelehealthPrepareOutcome, createOperationPlanExecutor, verifyOperationPlanOutcome });
