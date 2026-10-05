"use strict";

// Real executor for the "health.record" canonical tool. Unlike the other
// Phase-1 tools, this one has no external provider to call -- "real" here
// means genuinely writing to nexus/'s own Postgres store
// (nexus/data/record-repository.js's RecordRepository, already real:
// versioned rows, optimistic concurrency) instead of the
// scripts/provider-engines.js mock's fabricated receipt.
const WORKSPACE_ID = "health-records";
const { glucoseLevel, resolveGlucose } = require("../../server/providers/bloodGlucose.js");
const { assessBloodPressure } = require("../../server/providers/bloodPressure.js");

// A reading that cannot be real is never saved, whichever way it reached the executor. The typed and spoken paths already refuse these ("400 over 20", a sugar of 9000); a reading planned by the AI
// model went straight through, so an impossible number became a saved health record and was then "interpreted". Returns the reason, or null when every number could be a real reading.
function invalidReadingReason(observation = {}) {
  const has = key => Number.isFinite(observation[key]);
  if (has("systolic") || has("diastolic")) {
    if (!(has("systolic") && has("diastolic"))) return "a blood pressure needs both numbers, the top and the bottom";
    if (!assessBloodPressure(observation.systolic, observation.diastolic).valid) return `${observation.systolic} over ${observation.diastolic} cannot be a real blood pressure`;
  }
  if (has("glucose") && resolveGlucose(observation.glucose, "mg/dL").invalid) return `a blood sugar of ${observation.glucose} mg/dL cannot be a real reading`;
  if (has("oxygenSaturation") && !(observation.oxygenSaturation >= 50 && observation.oxygenSaturation <= 100)) return `an oxygen level of ${observation.oxygenSaturation} cannot be a real reading`;
  if (has("pulse") && !(observation.pulse >= 20 && observation.pulse <= 250)) return `a pulse of ${observation.pulse} cannot be a real reading`;
  if (has("temperature")) {
    const t = observation.temperature; const unit = observation.temperatureUnit;
    const real = unit === "C" ? t >= 25 && t <= 45 : unit === "F" ? t >= 77 && t <= 115 : (t >= 30 && t <= 45) || (t >= 70 && t <= 115);
    if (!real) return `a temperature of ${t}${unit ? ` ${unit}` : ""} cannot be a real reading`;
  }
  return null;
}

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
  if (observation.temperature !== undefined && ["C", "F"].includes(input.temperatureUnit)) observation.temperatureUnit = input.temperatureUnit;
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
  if (Number.isFinite(reading.glucose)) {
    const level = glucoseLevel({ unit: "mg/dL", value: reading.glucose });
    if (level === "very-low") return "This blood sugar is very low. If you feel shaky, sweaty, confused, very sleepy or faint, get emergency help now and do not be alone; follow the plan your clinic gave you." + closing;
    if (level === "low") return "This blood sugar is lower than usual. If you feel shaky, sweaty, confused or faint, get help now and do not be alone, and contact your clinic today." + closing;
    if (level === "very-high") return "This blood sugar is very high. If you have vomiting, stomach pain, fast breathing, confusion, or you are very sleepy or very thirsty, get emergency help now, and contact your clinic today." + closing;
    return "Your blood sugar reading was recorded. A single reading does not establish a diagnosis; keep logging and share it with a clinician." + closing;
  }
  if (Number.isFinite(reading.temperature)) {
    // In Celsius, whichever unit it was said in. These words are not a diagnosis, and should be reviewed by a clinician.
    const celsius = reading.temperatureUnit === "F" || (!reading.temperatureUnit && reading.temperature > 60) ? (reading.temperature - 32) * 5 / 9 : reading.temperature;
    if (celsius >= 39.5) return "This temperature is very high. Please get medical care today, and straight away for a baby or a small child, or if you have a stiff neck, a rash, confusion or trouble breathing. Until then rest, drink plenty of fluids and keep cool with light clothes." + closing;
    if (celsius >= 38) return "This is a raised temperature (a fever). Rest, drink plenty of fluids and keep cool with light clothes. If it lasts more than a day or two, keeps rising, or you have a stiff neck, a rash, confusion or trouble breathing, get medical care; for a baby or a small child get care today." + closing;
    if (celsius < 35) return "This temperature is lower than usual. Warm up with dry clothes and blankets and a warm drink, and get medical care if you are shivering a lot, very sleepy or confused." + closing;
    return "This temperature is within a typical range. Keep logging if you are unwell so a clinician can look at the pattern." + closing;
  }
  return "Your reading was recorded. It has not been interpreted or diagnosed." + closing;
}

function createHealthRecordExecutor({ records }) {
  if (!records?.create) throw new Error("A record repository is required.");
  return async function execute({ input = {}, context, taskId }) {
    // Found live (restriction-bypass follow-up audit): every direct REST health-write route in server.js
    // is gated on userIsRestrictedFrom(user, "health-record-write"), and so is the legacy cloud agent's
    // health.* tool dispatch and the plain-conversation healthWork toolkit (nexus/brain/planner.js:223) --
    // but this newer authoritative-task-engine executor for the "health.record" canonical tool, reachable
    // from an ordinary typed command like "record my blood pressure as 140 over 90", had no restriction
    // check at all. An Investor/Provider Reviewer account could approve the confirmation prompt and have a
    // real PHI record written on their behalf. context.isRestrictedFrom is already wired onto every request
    // context (nexus/compat/server-runtime-adapter.js's requestContext) -- it was just never called here.
    if (context?.isRestrictedFrom?.("health-record-write")) {
      throw Object.assign(new Error("This account type cannot write real health records."), { code: "health_record_write_restricted", status: 403 });
    }
    const observation = observationFrom(input);
    const impossible = invalidReadingReason(observation);
    if (impossible) throw Object.assign(new Error(`I did not save this: ${impossible}. Please check the number on your device and tell me again.`), { code: "health_reading_invalid", status: 422 });
    const inserted = await records.create({
      tenantId: context.tenantId,
      ownerId: context.userId,
      // health.record's own canonical definition already carries
      // confirmationRequired:true and consentScope:"health:record:write" --
      // the engine only reaches this executor once a human has explicitly
      // approved the step, so the subject defaults to the user themselves
      // (recording on behalf of someone else isn't a surfaced capability
      // today). Found live (cross-user IDOR audit): this comment describes
      // the intent, but "input.subjectId ||" let the CALLER override it --
      // any signed-in user could forge a health observation attributed to
      // an arbitrary other patient. The subject is always the caller.
      subjectId: context.userId,
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

module.exports = Object.freeze({ createHealthRecordExecutor, verifyHealthRecordOutcome, healthSafetyResponse, observationFrom, invalidReadingReason });
