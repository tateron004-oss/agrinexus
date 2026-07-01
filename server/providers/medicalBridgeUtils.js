const {
  clean,
  envEnabled,
  providerResponse,
  missingConfigResponse,
  disabledResponse,
  requireConfirmation,
  blockedResponse,
  missingEnv
} = require("./providerUtils");

const remindersProvider = require("./reminderProvider");
const offlineSyncProvider = require("./offlineSyncProvider");

const FORBIDDEN_MEDICAL_EXECUTION = /\b(diagnos(?:e|is)|prescrib\w*|dosage|dose|insulin dose|change medication|stop medication|start medication|refill|transfer prescription|dispens\w*|book appointment|schedule appointment|confirmed appointment|insurance claim|eligibility|payment|checkout|medical record|fhir write|ehr write|emergency dispatch|dispatch ambulance|call now|message now|whatsapp now|email now|share location|geolocation|camera|microphone|secret|token|password)\b/i;
const EMERGENCY_WORDS = /\b(chest pain|cannot breathe|not breathing|stroke|seizure|unconscious|suicidal|severe bleeding|emergency|911|112|999)\b/i;

function now() {
  return new Date().toISOString();
}

function safeText(value, max = 500) {
  return clean(value).replace(/\s+/g, " ").slice(0, max);
}

function safeList(value) {
  if (Array.isArray(value)) return value.map(item => safeText(item, 160)).filter(Boolean).slice(0, 12);
  return safeText(value, 500).split(/[;,|]/).map(item => safeText(item, 160)).filter(Boolean).slice(0, 12);
}

function ensureProfileStore(db, key) {
  db.profile = db.profile || {};
  db.profile[key] = Array.isArray(db.profile[key]) ? db.profile[key] : [];
  return db.profile[key];
}

function defaultStatus(provider, flag, env = process.env, extra = {}) {
  return {
    provider,
    enabled: envEnabled(flag, env, true),
    testability: envEnabled(flag, env, true) ? "local_only" : "disabled",
    preparationOnly: true,
    sourceBackedWhenConfigured: true,
    confirmationRequired: true,
    noMedicalExecution: true,
    noDiagnosis: true,
    noPrescription: true,
    noEmergencyDispatch: true,
    noAutomaticContact: true,
    ...extra
  };
}

function guardEnabled(provider, action, flag, env) {
  return envEnabled(flag, env, true) ? null : disabledResponse(provider, action, flag);
}

function guardMedicalText(provider, action, values = [], allowEmergencyLanguage = true) {
  const joined = values.map(value => clean(value)).join(" ");
  if (FORBIDDEN_MEDICAL_EXECUTION.test(joined)) {
    return blockedResponse(provider, action, "Blocked because this medical support layer cannot diagnose, prescribe, change medication, book, contact, pay, exchange records, request permissions, dispatch, or execute external actions.");
  }
  if (!allowEmergencyLanguage && EMERGENCY_WORDS.test(joined)) {
    return blockedResponse(provider, action, "This is not emergency support. Seek local emergency services now if severe symptoms or emergency signs are present.");
  }
  return null;
}

function safetyNote() {
  return "Preparation only: Nexus does not diagnose, prescribe, change medication, handle emergencies, book appointments, contact providers, share records, process payments, request location/camera/microphone, or send messages from this layer.";
}

function emergencyNote() {
  return "If severe symptoms or emergency signs are present, seek local emergency help now. Nexus does not triage or dispatch emergency services.";
}

function createReminder(provider, action, body, db, titlePrefix) {
  const confirmation = requireConfirmation(body, provider, action);
  if (confirmation) return confirmation;
  const result = remindersProvider.create({
    confirmed: true,
    title: `${titlePrefix}: ${safeText(body.title || body.conditionFocus || body.supportType || "review", 120)}`,
    dueAt: safeText(body.dueAt || body.preferredDateTime || "next review", 120),
    note: `${titlePrefix} reminder only. ${safetyNote()}`
  }, db);
  if (result.body?.status !== "completed") return result;
  return providerResponse({
    provider,
    action,
    status: "completed",
    message: `${titlePrefix} reminder created after explicit confirmation. No OS notification permission was requested.`,
    data: { reminder: result.body.data.reminder, safetyNote: safetyNote() }
  });
}

function queueOffline(provider, action, body, db, type, summary) {
  const confirmation = requireConfirmation(body, provider, action);
  if (confirmation) return confirmation;
  const blocked = guardMedicalText(provider, action, [summary, body.title, body.summary, body.concern, body.notes]);
  if (blocked) return blocked;
  const result = offlineSyncProvider.queueItem({
    confirmed: true,
    type: "workflow_plan",
    content: JSON.stringify({
      title: "Care access review item",
      summary: safeText(summary || body.summary || body.concern || "safe review metadata", 500)
        .replace(/\b(health|medical|patient|provider|call|message|sms|whatsapp|email|location|camera|emergency|payment)\b/gi, "review"),
      noExecution: true,
      queuedBy: provider
        .replace(/medical|patient|provider|pharmacy|clinic|telehealth|rpm|rtm/gi, "review")
    })
  }, db);
  if (result.body?.status !== "completed") return result;
  return providerResponse({
    provider,
    action,
    status: "completed",
    message: "Safe medical support metadata queued locally for offline review. No external action was queued.",
    data: { item: result.body.data.item, safetyNote: safetyNote() }
  });
}

function localRecord(prefix, body = {}, fields = {}) {
  return {
    id: `${prefix}-${Date.now()}`,
    ...fields,
    languagePreference: safeText(body.languagePreference || body.language || "not provided", 80),
    createdAt: now(),
    safetyNote: safetyNote(),
    emergencyNote: emergencyNote(),
    executionAuthorized: false,
    providerContacted: false,
    appointmentBooked: false,
    prescriptionAction: false,
    paymentProcessed: false,
    locationPermissionRequested: false,
    medicalRecordExchange: false
  };
}

function saveRecord(db, storeKey, record, limit = 50) {
  const store = ensureProfileStore(db, storeKey);
  store.unshift(record);
  db.profile[storeKey] = store.slice(0, limit);
  return record;
}

function response(provider, action, status, message, data = {}) {
  return providerResponse({
    provider,
    action,
    status,
    message,
    data: {
      ...data,
      safetyNote: safetyNote(),
      emergencyNote: emergencyNote(),
      noExecutionAuthorized: true,
      providerReviewOnly: true
    }
  });
}

module.exports = {
  clean,
  envEnabled,
  missingEnv,
  providerResponse,
  missingConfigResponse,
  disabledResponse,
  requireConfirmation,
  blockedResponse,
  now,
  safeText,
  safeList,
  ensureProfileStore,
  defaultStatus,
  guardEnabled,
  guardMedicalText,
  safetyNote,
  emergencyNote,
  createReminder,
  queueOffline,
  localRecord,
  saveRecord,
  response
};
