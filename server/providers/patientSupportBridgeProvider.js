const {
  defaultStatus,
  guardEnabled,
  guardMedicalText,
  requireConfirmation,
  safeText,
  ensureProfileStore,
  localRecord,
  saveRecord,
  response,
  createReminder,
  queueOffline
} = require("./medicalBridgeUtils");

const PROVIDER = "nexus-patient-support-bridge";
const FLAG = "NEXUS_PATIENT_SUPPORT_BRIDGE_ENABLED";
const INTAKES = "nexusPatientSupportIntakes";
const SAVED = "nexusSavedPatientSupportResources";

const RESOURCES = [
  { id: "ps-health-literacy", title: "Plain-language health literacy support", category: "health literacy", region: "global", summary: "Prepare questions and understand access options before provider review." },
  { id: "ps-chw", title: "Community health worker follow-up preparation", category: "community health worker support", region: "Africa/rural", summary: "Organize non-sensitive follow-up topics for CHW or care team review." },
  { id: "ps-diabetes", title: "Diabetes education preparation", category: "diabetes education preparation", region: "global", summary: "Prepare glucose-reading questions for provider review; no medication dosing." },
  { id: "ps-hypertension", title: "Hypertension education preparation", category: "hypertension education preparation", region: "global", summary: "Prepare blood-pressure tracking questions for provider review." },
  { id: "ps-obesity", title: "Obesity/cardiometabolic education preparation", category: "obesity/cardiometabolic education preparation", region: "global", summary: "Prepare lifestyle/access discussion prompts for provider review." },
  { id: "ps-transport", title: "Transportation planning resource", category: "transportation planning", region: "rural", summary: "Prepare transport questions and typed-route planning; no dispatch or booking." },
  { id: "ps-rpm", title: "RPM participation preparation", category: "RPM participation preparation", region: "global", summary: "Organize manual readings and care-team questions." },
  { id: "ps-rtm", title: "RTM participation preparation", category: "RTM participation preparation", region: "global", summary: "Organize activity/adherence discussion prompts without treatment plans." }
];

function status(env = process.env) {
  return defaultStatus(PROVIDER, FLAG, env, { localResources: true, categories: Array.from(new Set(RESOURCES.map(item => item.category))) });
}

function resources(query = {}) {
  const text = safeText([query.q, query.query, query.category, query.keyword].filter(Boolean).join(" "), 300).toLowerCase();
  const cards = RESOURCES.filter(item => !text || [item.title, item.category, item.region, item.summary].join(" ").toLowerCase().includes(text)).map(item => ({
    ...item,
    source: "Nexus local patient support starter catalog",
    eligibilityDetermined: false,
    referralSubmitted: false,
    automaticContact: false
  }));
  return response(PROVIDER, "patient_support.resources", "completed", `Loaded ${cards.length} patient support resource(s).`, { cards });
}

function intake(body = {}, db, env = process.env) {
  const action = "patient_support.intake";
  const disabled = guardEnabled(PROVIDER, action, FLAG, env);
  if (disabled) return disabled;
  const confirmation = requireConfirmation(body, PROVIDER, action);
  if (confirmation) return confirmation;
  const blocked = guardMedicalText(PROVIDER, action, [body.reason, body.notes], false);
  if (blocked) return blocked;
  const record = saveRecord(db, INTAKES, localRecord("patient-support-intake", body, {
    supportNeed: safeText(body.supportNeed || body.category || "patient navigation", 160),
    cityCountry: safeText(body.cityCountry || body.location || body.city, 160),
    reason: safeText(body.reason || "patient support preparation", 240),
    languageAccess: safeText(body.languageAccess || body.languagePreference, 120),
    eligibilityDetermined: false,
    referralSubmitted: false
  }));
  return response(PROVIDER, action, "completed", "Patient support intake saved locally for navigation preparation only.", { intake: record });
}

function intakes(db) {
  return response(PROVIDER, "patient_support.intakes", "completed", "Patient support intakes loaded.", { intakes: ensureProfileStore(db, INTAKES) });
}

function save(body = {}, db, env = process.env) {
  const action = "patient_support.save";
  const disabled = guardEnabled(PROVIDER, action, FLAG, env);
  if (disabled) return disabled;
  const confirmation = requireConfirmation(body, PROVIDER, action);
  if (confirmation) return confirmation;
  const record = saveRecord(db, SAVED, localRecord("patient-support-save", body, {
    resourceId: safeText(body.resourceId || body.id, 120),
    title: safeText(body.title || "Patient support resource", 160),
    category: safeText(body.category || "patient navigation", 120),
    summary: safeText(body.summary || "", 240)
  }));
  return response(PROVIDER, action, "completed", "Patient support resource saved locally. No referral or benefit action was submitted.", { resource: record });
}

function reminder(body = {}, db, env = process.env) {
  const disabled = guardEnabled(PROVIDER, "patient_support.reminder", FLAG, env);
  if (disabled) return disabled;
  return createReminder(PROVIDER, "patient_support.reminder", body, db, "Patient support review");
}

function offline(body = {}, db, env = process.env) {
  const disabled = guardEnabled(PROVIDER, "patient_support.offline", FLAG, env);
  if (disabled) return disabled;
  return queueOffline(PROVIDER, "patient_support.offline", body, db, "patient_support_resource", body.summary || body.title || "patient support resource metadata");
}

module.exports = { status, resources, intake, intakes, save, reminder, offline, RESOURCES };
