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

const PROVIDER = "nexus-mobile-clinic-bridge";
const FLAG = "NEXUS_MOBILE_CLINIC_BRIDGE_ENABLED";
const INTAKES = "nexusMobileClinicIntakes";
const SAVED = "nexusSavedMobileClinics";

const CATALOG = [
  { id: "mc-primary-rural", name: "Rural Primary Care Mobile Clinic", category: "general primary care", city: "Stockton", region: "California", services: ["primary care", "rural health", "agriculture worker health outreach"] },
  { id: "mc-vaccine", name: "Community Vaccination Outreach", category: "vaccination clinic", city: "Sacramento", region: "California", services: ["vaccination", "community health fair"] },
  { id: "mc-chronic", name: "Chronic Care Screening Day", category: "chronic care screening", city: "Kisumu", region: "Kenya", services: ["hypertension screening", "diabetes screening", "obesity/cardiometabolic screening"] },
  { id: "mc-rural-africa", name: "Rural Health Outreach Site", category: "rural health outreach", city: "Nakuru", region: "Kenya", services: ["mobile clinic", "telehealth support site", "community health worker support"] }
];

function status(env = process.env) {
  return defaultStatus(PROVIDER, FLAG, env, { localCatalog: true, categories: Array.from(new Set(CATALOG.flatMap(item => item.services.concat(item.category)))) });
}

function search(query = {}) {
  const text = safeText([query.q, query.query, query.city, query.state, query.serviceType, query.keyword, query.dateText].filter(Boolean).join(" "), 300).toLowerCase();
  const cards = CATALOG.filter(item => !text || [item.name, item.category, item.city, item.region, ...item.services].join(" ").toLowerCase().includes(text)).map(item => ({
    ...item,
    source: "Nexus local mobile clinic starter catalog",
    realTimeAvailabilityClaimed: false,
    appointmentBooked: false,
    emergencyTriage: false
  }));
  return response(PROVIDER, "mobile_clinics.search", "completed", `Loaded ${cards.length} local mobile clinic option(s).`, { cards });
}

function intake(body = {}, db, env = process.env) {
  const action = "mobile_clinics.intake";
  const disabled = guardEnabled(PROVIDER, action, FLAG, env);
  if (disabled) return disabled;
  const confirmation = requireConfirmation(body, PROVIDER, action);
  if (confirmation) return confirmation;
  const blocked = guardMedicalText(PROVIDER, action, [body.reason, body.notes], false);
  if (blocked) return blocked;
  const record = saveRecord(db, INTAKES, localRecord("mobile-clinic-intake", body, {
    serviceType: safeText(body.serviceType || "rural health outreach", 120),
    cityState: safeText(body.cityState || body.location || body.city, 160),
    dateText: safeText(body.dateText || body.preferredDateTime, 120),
    reason: safeText(body.reason || "mobile clinic visit preparation", 240)
  }));
  return response(PROVIDER, action, "completed", "Mobile clinic intake saved locally. No appointment, contact, triage, or dispatch occurred.", { intake: record });
}

function intakes(db) {
  return response(PROVIDER, "mobile_clinics.intakes", "completed", "Mobile clinic intakes loaded.", { intakes: ensureProfileStore(db, INTAKES) });
}

function save(body = {}, db, env = process.env) {
  const action = "mobile_clinics.save";
  const disabled = guardEnabled(PROVIDER, action, FLAG, env);
  if (disabled) return disabled;
  const confirmation = requireConfirmation(body, PROVIDER, action);
  if (confirmation) return confirmation;
  const record = saveRecord(db, SAVED, localRecord("mobile-clinic-save", body, {
    clinicId: safeText(body.clinicId || body.id, 120),
    name: safeText(body.name || body.title || "Mobile clinic option", 160),
    category: safeText(body.category || body.serviceType, 120),
    typedLocation: safeText(body.typedLocation || body.location || body.city, 160)
  }));
  return response(PROVIDER, action, "completed", "Mobile clinic option saved locally after confirmation. No clinic was contacted.", { clinic: record });
}

function visitPlan(body = {}) {
  const action = "mobile_clinics.visit_plan";
  const blocked = guardMedicalText(PROVIDER, action, [body.reason, body.notes], false);
  if (blocked) return blocked;
  return response(PROVIDER, action, "prepared", "Mobile clinic visit plan prepared from typed location text only. No geolocation or booking occurred.", {
    plan: {
      title: safeText(body.title || "Mobile clinic visit plan", 160),
      typedOrigin: safeText(body.origin || body.typedOrigin, 160),
      clinicLocation: safeText(body.clinicLocation || body.destination || body.location, 160),
      routeByTypedOriginOnly: true,
      appointmentBooked: false
    }
  });
}

function reminder(body = {}, db, env = process.env) {
  const disabled = guardEnabled(PROVIDER, "mobile_clinics.reminder", FLAG, env);
  if (disabled) return disabled;
  return createReminder(PROVIDER, "mobile_clinics.reminder", body, db, "Mobile clinic review");
}

function offline(body = {}, db, env = process.env) {
  const disabled = guardEnabled(PROVIDER, "mobile_clinics.offline", FLAG, env);
  if (disabled) return disabled;
  return queueOffline(PROVIDER, "mobile_clinics.offline", body, db, "mobile_clinic_option", body.summary || body.name || "mobile clinic preparation metadata");
}

module.exports = { status, search, intake, intakes, save, visitPlan, reminder, offline, CATALOG };
