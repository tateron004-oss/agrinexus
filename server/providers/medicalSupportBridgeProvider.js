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

const PROVIDER = "nexus-medical-support-bridge";
const FLAG = "NEXUS_MEDICAL_SUPPORT_BRIDGE_ENABLED";
const STORE = "nexusMedicalSupportIntakes";
const SUPPORT_TYPES = new Set(["health_access", "provider_review", "chronic_care_preparation", "telehealth_preparation", "mobile_clinic_visit", "pharmacy_question", "patient_navigation", "community_support", "agriculture_worker_health", "remote_monitoring_preparation", "care_team_review"]);

function status(env = process.env) {
  return defaultStatus(PROVIDER, FLAG, env, {
    supportTypes: Array.from(SUPPORT_TYPES),
    suggestedBridgeActions: ["search provider", "prepare telehealth session", "search mobile clinic", "prepare pharmacy questions", "create chronic care monitoring plan", "create provider-review report", "create reminder", "create field visit route", "save offline", "prepare message draft"]
  });
}

function normalizeIntake(body = {}) {
  const supportType = safeText(body.supportType || body.type || "health_access", 80);
  return localRecord("medical-support-intake", body, {
    supportType: SUPPORT_TYPES.has(supportType) ? supportType : "health_access",
    concern: safeText(body.concern || body.reason || "health access preparation", 500),
    questions: safeList(body.questions || body.questionsToAsk),
    preferredDateTime: safeText(body.preferredDateTime || body.dueAt, 120),
    typedLocation: safeText(body.typedLocation || body.location || body.city || body.country, 160),
    accessibilityNeeds: safeText(body.accessibilityNeeds, 220),
    transportationConcern: safeText(body.transportationConcern, 220),
    preferredSupportChannel: safeText(body.preferredSupportChannel || "provider review", 120),
    selectedProviderReference: safeText(body.selectedProviderReference || body.providerReference, 180),
    noEmergencyAcknowledgement: body.noEmergencyAcknowledgement === true || body.confirmed === true
  });
}

function intake(body = {}, db, env = process.env) {
  const action = "medical_support.intake";
  const disabled = guardEnabled(PROVIDER, action, FLAG, env);
  if (disabled) return disabled;
  const confirmation = requireConfirmation(body, PROVIDER, action);
  if (confirmation) return confirmation;
  const blocked = guardMedicalText(PROVIDER, action, [body.concern, body.reason, body.questions, body.selectedProviderReference], false);
  if (blocked) return blocked;
  const record = saveRecord(db, STORE, normalizeIntake(body));
  return response(PROVIDER, action, "completed", "Medical support intake saved locally for preparation and provider review only.", {
    intake: record,
    suggestedNextSteps: suggestedNextSteps(record)
  });
}

function intakes(db) {
  return response(PROVIDER, "medical_support.intakes", "completed", "Medical support intakes loaded from local review store.", {
    intakes: ensureProfileStore(db, STORE)
  });
}

function suggestedNextSteps(record = {}) {
  return [
    "search provider",
    record.supportType === "telehealth_preparation" ? "prepare telehealth session" : "prepare provider-review questions",
    record.supportType === "mobile_clinic_visit" ? "search mobile clinic" : "review mobile clinic options",
    record.supportType === "pharmacy_question" ? "prepare pharmacy questions" : "prepare pharmacy access questions",
    "create reminder",
    "queue safe offline summary"
  ];
}

function summary(body = {}) {
  const action = "medical_support.summary";
  const record = normalizeIntake(body);
  const blocked = guardMedicalText(PROVIDER, action, [record.concern, record.questions.join(" ")], false);
  if (blocked) return blocked;
  return response(PROVIDER, action, "prepared", "Medical support summary prepared for human review. No clinical action was taken.", {
    summary: {
      supportType: record.supportType,
      concern: record.concern,
      questions: record.questions,
      typedLocation: record.typedLocation,
      suggestedNextSteps: suggestedNextSteps(record)
    }
  });
}

function providerReport(body = {}, db) {
  const action = "medical_support.provider_report";
  const record = normalizeIntake(body);
  const blocked = guardMedicalText(PROVIDER, action, [record.concern, record.questions.join(" ")], false);
  if (blocked) return blocked;
  return response(PROVIDER, action, "prepared", "Provider-review report prepared. Nexus did not diagnose, prescribe, book, contact, or transmit records.", {
    report: {
      reportType: "medical_support_provider_review",
      supportType: record.supportType,
      concernSummary: record.concern,
      patientQuestions: record.questions,
      accessBarriers: [record.transportationConcern, record.accessibilityNeeds].filter(Boolean),
      suggestedReviewTopics: ["care access", "telehealth readiness", "mobile clinic option", "pharmacy questions", "patient navigation"],
      localIntakeCount: ensureProfileStore(db, STORE).length
    }
  });
}

function save(body = {}, db, env = process.env) {
  return intake({ ...body, confirmed: body.confirmed === true }, db, env);
}

function reminder(body = {}, db, env = process.env) {
  const disabled = guardEnabled(PROVIDER, "medical_support.reminder", FLAG, env);
  if (disabled) return disabled;
  return createReminder(PROVIDER, "medical_support.reminder", body, db, "Medical support review");
}

function offline(body = {}, db, env = process.env) {
  const disabled = guardEnabled(PROVIDER, "medical_support.offline", FLAG, env);
  if (disabled) return disabled;
  return queueOffline(PROVIDER, "medical_support.offline", body, db, "medical_support_summary", body.concern || body.summary || "medical support preparation");
}

module.exports = { status, intake, intakes, summary, providerReport, save, reminder, offline, normalizeIntake };
