"use strict";

// Real executor for the "health.record" canonical tool. Unlike the other
// Phase-1 tools, this one has no external provider to call -- "real" here
// means genuinely writing to nexus/'s own Postgres store
// (nexus/data/record-repository.js's RecordRepository, already real:
// versioned rows, optimistic concurrency) instead of the
// scripts/provider-engines.js mock's fabricated receipt.
const WORKSPACE_ID = "health-records";

function createHealthRecordExecutor({ records }) {
  if (!records?.create) throw new Error("A record repository is required.");
  return async function execute({ input = {}, context, taskId }) {
    const observation = input.observation || input.record || input.data || {};
    const inserted = await records.create({
      tenantId: context.tenantId,
      ownerId: context.userId,
      // health.record's own canonical definition already carries
      // confirmationRequired:true and consentScope:"health:record:write" --
      // the engine only reaches this executor once a human has explicitly
      // approved the step, so the subject defaults to the user themselves
      // (recording on behalf of someone else isn't a surfaced capability
      // today).
      subjectId: input.subjectId || context.userId,
      workspaceId: WORKSPACE_ID,
      taskId,
      recordType: input.recordType || "health_observation",
      classification: "health",
      data: observation,
      provenance: { source: "nexus-agent", command: input.command || "" }
    });
    return {
      recordId: inserted.record_id,
      version: inserted.version,
      recordType: inserted.record_type,
      createdAt: inserted.created_at,
      persisted: true
    };
  };
}

function verifyHealthRecordOutcome({ result }) {
  const verified = result?.persisted === true
    && typeof result?.recordId === "string" && result.recordId.length > 0
    && Number.isFinite(Number(result?.version)) && Number(result.version) >= 1;
  return { verified, method: "real_record_write", reason: verified ? null : "record_write_incomplete" };
}

module.exports = Object.freeze({ createHealthRecordExecutor, verifyHealthRecordOutcome });
