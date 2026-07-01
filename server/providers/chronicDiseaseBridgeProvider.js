const {
  defaultStatus,
  guardEnabled,
  guardMedicalText,
  requireConfirmation,
  safeText,
  safeList,
  ensureProfileStore,
  localRecord,
  saveRecord,
  response,
  createReminder,
  queueOffline
} = require("./medicalBridgeUtils");

const PROVIDER = "nexus-chronic-disease-bridge";
const FLAG = "NEXUS_CHRONIC_DISEASE_BRIDGE_ENABLED";
const INTAKES = "nexusChronicDiseaseIntakes";
const READINGS = "nexusChronicDiseaseReadings";
const CONDITIONS = new Set(["diabetes", "hypertension", "obesity", "cardiometabolic", "unknown_provider_review_needed"]);

function status(env = process.env) {
  return defaultStatus(PROVIDER, FLAG, env, {
    conditionFocus: ["diabetes mellitus", "hypertension", "obesity", "combined cardiometabolic risk preparation"],
    manualReadings: ["blood glucose", "blood pressure", "pulse", "weight", "height", "waist circumference"],
    trendSummary: "provider_review_only"
  });
}

function normalizeIntake(body = {}) {
  const conditionFocus = safeText(body.conditionFocus || body.condition || "unknown_provider_review_needed", 80);
  return localRecord("chronic-disease-intake", body, {
    conditionFocus: CONDITIONS.has(conditionFocus) ? conditionFocus : "unknown_provider_review_needed",
    userRole: safeText(body.userRole || "patient", 80),
    ageBand: safeText(body.ageBand || "not_provided", 80),
    communityLocation: safeText(body.communityLocation || body.location || body.country || body.city, 160),
    accessBarriers: safeList(body.accessBarriers),
    questionsForProvider: safeList(body.questionsForProvider || body.questions),
    monitoringGoal: safeText(body.monitoringGoal || "prepare_for_visit", 120)
  });
}

function intake(body = {}, db, env = process.env) {
  const action = "chronic_disease.intake";
  const disabled = guardEnabled(PROVIDER, action, FLAG, env);
  if (disabled) return disabled;
  const confirmation = requireConfirmation(body, PROVIDER, action);
  if (confirmation) return confirmation;
  const blocked = guardMedicalText(PROVIDER, action, [body.questionsForProvider, body.accessBarriers], false);
  if (blocked) return blocked;
  const record = saveRecord(db, INTAKES, normalizeIntake(body));
  return response(PROVIDER, action, "completed", "Chronic disease intake saved locally for care-team/provider review only.", { intake: record });
}

function intakes(db) {
  return response(PROVIDER, "chronic_disease.intakes", "completed", "Chronic disease intakes loaded.", { intakes: ensureProfileStore(db, INTAKES) });
}

function numberOrNull(value) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}

function bmi(weightValue, weightUnit, heightValue, heightUnit) {
  const weight = numberOrNull(weightValue);
  const height = numberOrNull(heightValue);
  if (!weight || !height) return null;
  const kg = weightUnit === "lb" ? weight * 0.45359237 : weight;
  const meters = heightUnit === "ft_in" ? height * 0.3048 : heightUnit === "cm" ? height / 100 : null;
  if (!meters) return null;
  return Math.round((kg / (meters * meters)) * 10) / 10;
}

function normalizeReading(body = {}) {
  const conditionFocus = safeText(body.conditionFocus || body.condition || "diabetes", 80);
  return localRecord("chronic-reading", body, {
    conditionFocus: CONDITIONS.has(conditionFocus) ? conditionFocus : "unknown_provider_review_needed",
    dateTimeText: safeText(body.dateTimeText || body.dueAt || "not provided", 120),
    glucose: numberOrNull(body.glucose || body.bloodGlucose),
    glucoseUnit: safeText(body.glucoseUnit || "unknown", 20),
    readingContext: safeText(body.readingContext || "unknown", 80),
    systolic: numberOrNull(body.systolic),
    diastolic: numberOrNull(body.diastolic),
    pulse: numberOrNull(body.pulse),
    postureContext: safeText(body.postureContext || "unknown", 80),
    weight: numberOrNull(body.weight || body.weightValue),
    weightUnit: safeText(body.weightUnit || "unknown", 20),
    height: numberOrNull(body.height || body.heightValue),
    heightUnit: safeText(body.heightUnit || "unknown", 20),
    waistCircumference: numberOrNull(body.waistCircumference),
    bmiInformational: bmi(body.weight || body.weightValue, body.weightUnit, body.height || body.heightValue, body.heightUnit),
    foodActivityNote: safeText(body.foodActivityNote || body.activityNutritionNote, 240),
    deviceSource: safeText(body.deviceSource || body.source || "manual", 80),
    notes: safeText(body.notes || body.symptoms, 240)
  });
}

function reading(body = {}, db, env = process.env) {
  const action = "chronic_disease.reading";
  const disabled = guardEnabled(PROVIDER, action, FLAG, env);
  if (disabled) return disabled;
  const confirmation = requireConfirmation(body, PROVIDER, action);
  if (confirmation) return confirmation;
  const blocked = guardMedicalText(PROVIDER, action, [body.notes, body.symptoms, body.foodActivityNote], false);
  if (blocked) return blocked;
  const record = saveRecord(db, READINGS, normalizeReading(body), 200);
  return response(PROVIDER, action, "completed", "Chronic disease reading saved locally for trend review. No diagnosis or medication advice was generated.", { reading: record });
}

function readings(db) {
  return response(PROVIDER, "chronic_disease.readings", "completed", "Chronic disease readings loaded.", { readings: ensureProfileStore(db, READINGS) });
}

function trendSummary(body = {}, db) {
  const focus = safeText(body.conditionFocus || "cardiometabolic", 80);
  const readingsList = ensureProfileStore(db, READINGS).filter(item => focus === "cardiometabolic" || item.conditionFocus === focus).slice(0, 30);
  return response(PROVIDER, "chronic_disease.trend_summary", "prepared", "Trend summary prepared for provider review only.", {
    summary: {
      conditionFocus: focus,
      readingCount: readingsList.length,
      missingData: readingsList.length ? [] : ["No readings saved yet"],
      notablePatternsForProviderReview: readingsList.length ? ["Review date/time context, repeated high/low patterns, and access barriers with a clinician/community health worker."] : ["Capture manual readings before interpreting patterns."],
      emergencySafetyMessage: "Seek emergency help now if severe symptoms or emergency signs are present. Nexus does not dispatch."
    }
  });
}

function providerReport(body = {}, db) {
  const focus = safeText(body.conditionFocus || "cardiometabolic", 80);
  const readingsList = ensureProfileStore(db, READINGS).filter(item => focus === "cardiometabolic" || item.conditionFocus === focus).slice(0, 20);
  return response(PROVIDER, "chronic_disease.provider_report", "prepared", "Chronic disease provider-review report prepared without diagnosis, prescription, or treatment recommendations.", {
    report: {
      conditionFocus: focus,
      dateRange: safeText(body.dateRange || "local saved readings", 120),
      readingTableSummary: readingsList.map(item => ({
        dateTimeText: item.dateTimeText,
        glucose: item.glucose,
        bloodPressure: item.systolic && item.diastolic ? `${item.systolic}/${item.diastolic}` : "",
        pulse: item.pulse,
        weight: item.weight,
        bmiInformational: item.bmiInformational
      })),
      notableTrendsForProviderReview: ["Review readings, context, and barriers with a provider; Nexus does not diagnose."],
      patientQuestions: safeList(body.questionsForProvider || body.questions),
      accessBarriers: safeList(body.accessBarriers),
      discussionPrompts: ["medication adherence discussion", "food/activity access", "device access", "mobile clinic or telehealth option"]
    }
  });
}

function reminder(body = {}, db, env = process.env) {
  const disabled = guardEnabled(PROVIDER, "chronic_disease.reminder", FLAG, env);
  if (disabled) return disabled;
  return createReminder(PROVIDER, "chronic_disease.reminder", body, db, "Chronic care review");
}

function offline(body = {}, db, env = process.env) {
  const disabled = guardEnabled(PROVIDER, "chronic_disease.offline", FLAG, env);
  if (disabled) return disabled;
  return queueOffline(PROVIDER, "chronic_disease.offline", body, db, "chronic_care_summary", body.summary || body.conditionFocus || "chronic care provider-review metadata");
}

module.exports = { status, intake, intakes, reading, readings, trendSummary, providerReport, reminder, offline, normalizeIntake, normalizeReading };
