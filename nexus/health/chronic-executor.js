"use strict";

// Real executors for chronic-disease tracking (diabetes, hypertension,
// obesity, cardiometabolic). Before this, server/providers/
// chronicDiseaseBridgeProvider.js only ever pushed records into a local
// db.profile array (confirmed decorative by the production capability
// audit: no outbound integration, and -- more importantly -- no real,
// durable, tenant/subject-scoped storage at all). This writes to the same
// real nexus_records table health.record already uses (Phase 1), so
// chronic-disease data is genuinely persisted, versioned, and queryable --
// still entirely local (no external chronic-disease API exists to call),
// but real storage instead of an in-memory array that a server restart
// could lose.
//
// The medical-safety guard (no diagnosis/prescription/dispatch language)
// and text-sanitization helpers are reused as-is from the legacy bridge's
// own utils -- that logic was already correct, only the storage layer
// wasn't real.
const { guardMedicalText, safeText, safeList } = require("../../server/providers/medicalBridgeUtils");

const WORKSPACE_ID = "health-records";
const INTAKE_RECORD_TYPE = "chronic_disease_intake";
const READING_RECORD_TYPE = "chronic_disease_reading";
const CONDITIONS = new Set(["diabetes", "hypertension", "obesity", "cardiometabolic", "unknown_provider_review_needed"]);
const PROVIDER_SAFETY_NOTE = "Preparation only: Nexus does not diagnose, prescribe, change medication, or contact a provider from this data. Seek emergency help now for severe symptoms.";

function conditionFocusOf(input, fallback = "unknown_provider_review_needed") {
  const value = safeText(input.conditionFocus || input.condition || fallback, 80);
  return CONDITIONS.has(value) ? value : "unknown_provider_review_needed";
}

function numberOrNull(value) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function bmi(weightValue, weightUnit, heightValue, heightUnit) {
  const weight = numberOrNull(weightValue);
  const height = numberOrNull(heightValue);
  if (!weight || !height) return null;
  // Found live (health toolkit/LMS follow-up audit): this exact bug was
  // already found and fixed in the legacy, no-longer-live
  // server/providers/chronicDiseaseBridgeProvider.js (only the exact
  // singular "lb" was recognized -- "lbs"/"pounds", the spellings this
  // codebase's own natural-language extractors actually produce, silently
  // fell through to "assume already kg," inflating a real, normal BMI into
  // a fabricated morbid-obesity reading) but the fix was never ported to
  // this file, which is the REAL, currently-wired executor
  // (nexus/runtime/create-runtime.js's "health.chronic-reading").
  // Case-insensitive, and recognizes every unit spelling this codebase's
  // own extractors produce.
  const kg = /^(lbs?|pounds?)$/i.test(String(weightUnit || "").trim()) ? weight * 0.45359237 : weight;
  const meters = heightUnit === "ft_in" ? height * 0.3048 : heightUnit === "cm" ? height / 100 : null;
  if (!meters) return null;
  return Math.round((kg / (meters * meters)) * 10) / 10;
}

function createChronicDiseaseIntakeExecutor({ records }) {
  if (!records?.create) throw new Error("A record repository is required.");
  return async function execute({ input = {}, context, taskId }) {
    const blocked = guardMedicalText("nexus-chronic-disease", "chronic_disease.intake", [input.questionsForProvider, input.accessBarriers], false);
    // A safety block is a deliberate, correct refusal -- not a tool
    // failure -- so it's returned as a normal (non-throwing) outcome, the
    // same way an "already exists"/"not found" condition is elsewhere in
    // this codebase. Throwing would make the engine treat it as a failure
    // eligible for fallback-tool retry, which can't fix a safety block.
    if (blocked) return { persisted: false, blocked: true, reason: blocked.body.message };
    const data = {
      conditionFocus: conditionFocusOf(input),
      userRole: safeText(input.userRole || "patient", 80),
      ageBand: safeText(input.ageBand || "not_provided", 80),
      communityLocation: safeText(input.communityLocation || input.location || input.country || input.city, 160),
      accessBarriers: safeList(input.accessBarriers),
      questionsForProvider: safeList(input.questionsForProvider || input.questions),
      monitoringGoal: safeText(input.monitoringGoal || "prepare_for_visit", 120)
    };
    const inserted = await records.create({ tenantId: context.tenantId, ownerId: context.userId, subjectId: input.subjectId || context.userId,
      workspaceId: WORKSPACE_ID, taskId, recordType: INTAKE_RECORD_TYPE, classification: "health", data,
      provenance: { source: "nexus-agent", command: input.command || "" } });
    return { recordId: inserted.record_id, version: inserted.version, persisted: true, safetyNote: PROVIDER_SAFETY_NOTE, ...data };
  };
}

function verifyChronicDiseaseIntakeOutcome({ result }) {
  if (result?.blocked === true) return { verified: true, method: "real_record_write", reason: null };
  const verified = result?.persisted === true && typeof result?.recordId === "string" && result.recordId.length > 0
    && Number.isFinite(Number(result?.version)) && Number(result.version) >= 1;
  return { verified, method: "real_record_write", reason: verified ? null : "chronic_intake_write_incomplete" };
}

function createChronicDiseaseReadingExecutor({ records }) {
  if (!records?.create) throw new Error("A record repository is required.");
  return async function execute({ input = {}, context, taskId }) {
    const blocked = guardMedicalText("nexus-chronic-disease", "chronic_disease.reading", [input.notes, input.symptoms, input.foodActivityNote], false);
    if (blocked) return { persisted: false, blocked: true, reason: blocked.body.message };
    const data = {
      conditionFocus: conditionFocusOf(input, "diabetes"),
      dateTimeText: safeText(input.dateTimeText || input.dueAt || "not provided", 120),
      glucose: numberOrNull(input.glucose || input.bloodGlucose),
      glucoseUnit: safeText(input.glucoseUnit || "unknown", 20),
      readingContext: safeText(input.readingContext || "unknown", 80),
      systolic: numberOrNull(input.systolic),
      diastolic: numberOrNull(input.diastolic),
      pulse: numberOrNull(input.pulse),
      postureContext: safeText(input.postureContext || "unknown", 80),
      weight: numberOrNull(input.weight || input.weightValue),
      weightUnit: safeText(input.weightUnit || "unknown", 20),
      height: numberOrNull(input.height || input.heightValue),
      heightUnit: safeText(input.heightUnit || "unknown", 20),
      waistCircumference: numberOrNull(input.waistCircumference),
      bmiInformational: bmi(input.weight || input.weightValue, input.weightUnit, input.height || input.heightValue, input.heightUnit),
      foodActivityNote: safeText(input.foodActivityNote || input.activityNutritionNote, 240),
      deviceSource: safeText(input.deviceSource || input.source || "manual", 80),
      notes: safeText(input.notes || input.symptoms, 240)
    };
    const inserted = await records.create({ tenantId: context.tenantId, ownerId: context.userId, subjectId: input.subjectId || context.userId,
      workspaceId: WORKSPACE_ID, taskId, recordType: READING_RECORD_TYPE, classification: "health", data,
      provenance: { source: "nexus-agent", command: input.command || "" } });
    return { recordId: inserted.record_id, version: inserted.version, persisted: true, safetyNote: PROVIDER_SAFETY_NOTE, ...data };
  };
}

function verifyChronicDiseaseReadingOutcome({ result }) {
  if (result?.blocked === true) return { verified: true, method: "real_record_write", reason: null };
  const verified = result?.persisted === true && typeof result?.recordId === "string" && result.recordId.length > 0
    && Number.isFinite(Number(result?.version)) && Number(result.version) >= 1;
  return { verified, method: "real_record_write", reason: verified ? null : "chronic_reading_write_incomplete" };
}

function createChronicDiseaseSummaryExecutor({ records }) {
  if (!records?.list) throw new Error("A record repository is required.");
  return async function execute({ input = {}, context }) {
    const focus = input.conditionFocus && CONDITIONS.has(input.conditionFocus) ? input.conditionFocus : "cardiometabolic";
    const allReadings = await records.list({ tenantId: context.tenantId, ownerId: context.userId, subjectId: input.subjectId || context.userId,
      workspaceId: WORKSPACE_ID, recordType: READING_RECORD_TYPE, limit: 100 });
    const readingsList = allReadings.filter(row => focus === "cardiometabolic" || row.data?.conditionFocus === focus).slice(0, 30);
    const allIntakes = await records.list({ tenantId: context.tenantId, ownerId: context.userId, subjectId: input.subjectId || context.userId,
      workspaceId: WORKSPACE_ID, recordType: INTAKE_RECORD_TYPE, limit: 10 });
    const latestIntake = allIntakes.find(row => focus === "cardiometabolic" || row.data?.conditionFocus === focus) || null;
    return {
      persisted: true,
      conditionFocus: focus,
      readingCount: readingsList.length,
      missingData: readingsList.length ? [] : ["No readings saved yet"],
      notablePatternsForProviderReview: readingsList.length
        ? ["Review date/time context, repeated high/low patterns, and access barriers with a clinician/community health worker."]
        : ["Capture manual readings before interpreting patterns."],
      emergencySafetyMessage: "Seek emergency help now if severe symptoms or emergency signs are present. Nexus does not dispatch.",
      readingTableSummary: readingsList.map(row => ({
        dateTimeText: row.data?.dateTimeText, glucose: row.data?.glucose,
        bloodPressure: row.data?.systolic && row.data?.diastolic ? `${row.data.systolic}/${row.data.diastolic}` : "",
        pulse: row.data?.pulse, weight: row.data?.weight, bmiInformational: row.data?.bmiInformational
      })),
      patientQuestions: latestIntake?.data?.questionsForProvider || [],
      accessBarriers: latestIntake?.data?.accessBarriers || [],
      discussionPrompts: ["medication adherence discussion", "food/activity access", "device access", "mobile clinic or telehealth option"]
    };
  };
}

function verifyChronicDiseaseSummaryOutcome({ result }) {
  const verified = result?.persisted === true && Array.isArray(result?.readingTableSummary) && Number.isFinite(Number(result?.readingCount));
  return { verified, method: "real_record_lookup", reason: verified ? null : "chronic_summary_incomplete" };
}

module.exports = Object.freeze({
  createChronicDiseaseIntakeExecutor, verifyChronicDiseaseIntakeOutcome,
  createChronicDiseaseReadingExecutor, verifyChronicDiseaseReadingOutcome,
  createChronicDiseaseSummaryExecutor, verifyChronicDiseaseSummaryOutcome,
  WORKSPACE_ID, INTAKE_RECORD_TYPE, READING_RECORD_TYPE
});
