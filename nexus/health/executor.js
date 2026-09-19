"use strict";

// Real executor for the "health.record" canonical tool. Unlike the other
// Phase-1 tools, this one has no external provider to call -- "real" here
// means genuinely writing to nexus/'s own Postgres store
// (nexus/data/record-repository.js's RecordRepository, already real:
// versioned rows, optimistic concurrency) instead of the
// scripts/provider-engines.js mock's fabricated receipt.
const WORKSPACE_ID = "health-records";

// The planner (completeHealthRecordPlan) sends the reading at the top level of
// the step input -- { intakeType, readingType, systolic, diastolic } or
// { glucose } etc. -- not under observation/record/data. This executor used to
// read only those three keys, so a real "record my blood pressure as 140 over
// 90" was persisted with EMPTY data even though the task verified as completed.
const READING_FIELDS = Object.freeze(["systolic", "diastolic", "glucose", "oxygenSaturation", "temperature", "pulse"]);

function observationFrom(input) {
  const explicit = input.observation || input.record || input.data;
  if (explicit && typeof explicit === "object" && Object.keys(explicit).length) return explicit;
  const observation = {};
  const type = input.readingType || input.intakeType;
  if (type) observation.type = type;
  for (const key of READING_FIELDS) if (Number.isFinite(Number(input[key])) && input[key] !== null && input[key] !== "") observation[key] = Number(input[key]);
  return Object.keys(observation).some(key => key !== "type") ? observation : (explicit || {});
}

// Conservative, non-diagnostic guidance from the values that were actually stored.
// Nexus does not diagnose, prescribe or change treatment.
function healthSafetyResponse(reading = {}) {
  const closing = " Nexus does not diagnose or change treatment; share your readings with a clinician, and if you have severe symptoms such as chest pain, trouble breathing, weakness or confusion, call your local emergency number now.";
  const { systolic, diastolic } = reading;
  if (Number.isFinite(systolic) && Number.isFinite(diastolic)) {
    if (systolic >= 180 || diastolic >= 120)
      return "This blood pressure reading is very high and can need urgent care. Rest, recheck after a few minutes, and contact a clinician or emergency services promptly." + closing;
    if (systolic >= 140 || diastolic >= 90)
      return "This blood pressure reading is above the usual range. A single reading is not a diagnosis: rest for five minutes, recheck, keep a log, and share it with a clinician." + closing;
    if (systolic < 90 || diastolic < 60)
      return "This blood pressure reading is below the usual range. If you feel dizzy or faint, sit or lie down and seek care." + closing;
    return "This blood pressure reading is within a typical range. Keep logging so a clinician can look at trends." + closing;
  }
  return "Your reading was recorded. It has not been interpreted or diagnosed." + closing;
}

function createHealthRecordExecutor({ records }) {
  if (!records?.create) throw new Error("A record repository is required.");
  return async function execute({ input = {}, context, taskId }) {
    const observation = observationFrom(input);
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
    const hasReading = Object.keys(observation).length > 0;
    return {
      ...(hasReading ? { reading: observation, persistedRecordId: inserted.record_id, safetyResponse: healthSafetyResponse(observation) } : {}),
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

module.exports = Object.freeze({ createHealthRecordExecutor, verifyHealthRecordOutcome, healthSafetyResponse, observationFrom });
