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

const PROVIDER = "nexus-pharmacy-bridge";
const FLAG = "NEXUS_PHARMACY_BRIDGE_ENABLED";
const INTAKES = "nexusPharmacyIntakes";
const SAVED = "nexusSavedPharmacies";

const CATALOG = [
  { id: "ph-community", name: "Community Pharmacy Resource", category: "community pharmacy", city: "Stockton", services: ["medication counseling", "vaccination pharmacy", "medication safety education"] },
  { id: "ph-chronic", name: "Chronic Care Pharmacy Questions Desk", category: "chronic care support", city: "Sacramento", services: ["diabetes medication question preparation", "hypertension medication question preparation", "obesity/cardiometabolic medication question preparation"] },
  { id: "ph-rural", name: "Rural Medication Access Resource", category: "rural medication access", city: "Nakuru", services: ["low-cost medication resource", "delivery-capable pharmacy informational only"] }
];

const SAFE_QUESTION_PROMPTS = [
  "What information should I bring when asking a pharmacist about medication safety?",
  "What questions should I ask before taking a new medication?",
  "What should I ask about possible side effects or interactions?",
  "What should I ask my doctor or pharmacist before stopping or changing a medication?",
  "What should I ask about safe storage or timing without changing my medication on my own?",
  "What should I ask my doctor or pharmacist about managing medicines with diabetes, high blood pressure, or weight-related health concerns?"
];

function status(env = process.env) {
  return defaultStatus(PROVIDER, FLAG, env, { localCatalog: true, safeQuestionPrompts: SAFE_QUESTION_PROMPTS, prescriptionExecution: false });
}

function search(query = {}) {
  const text = safeText([query.q, query.query, query.city, query.serviceType, query.keyword].filter(Boolean).join(" "), 300).toLowerCase();
  const cards = CATALOG.filter(item => !text || [item.name, item.category, item.city, ...item.services].join(" ").toLowerCase().includes(text)).map(item => ({
    ...item,
    source: "Nexus local pharmacy starter catalog",
    inventoryClaimed: false,
    refillEnabled: false,
    paymentEnabled: false
  }));
  return response(PROVIDER, "pharmacy.search", "completed", `Loaded ${cards.length} local pharmacy option(s).`, { cards });
}

function intake(body = {}, db, env = process.env) {
  const action = "pharmacy.intake";
  const disabled = guardEnabled(PROVIDER, action, FLAG, env);
  if (disabled) return disabled;
  const confirmation = requireConfirmation(body, PROVIDER, action);
  if (confirmation) return confirmation;
  const blocked = guardMedicalText(PROVIDER, action, [body.reason, body.notes, body.question], false);
  if (blocked) return blocked;
  const record = saveRecord(db, INTAKES, localRecord("pharmacy-intake", body, {
    questionTopic: safeText(body.questionTopic || body.serviceType || "medication safety question preparation", 160),
    cityState: safeText(body.cityState || body.location || body.city, 160),
    reason: safeText(body.reason || "pharmacist question preparation", 240),
    medicationListStored: false
  }));
  return response(PROVIDER, action, "completed", "Pharmacy intake saved locally for question preparation only.", { intake: record });
}

function intakes(db) {
  return response(PROVIDER, "pharmacy.intakes", "completed", "Pharmacy intakes loaded.", { intakes: ensureProfileStore(db, INTAKES) });
}

function save(body = {}, db, env = process.env) {
  const action = "pharmacy.save";
  const disabled = guardEnabled(PROVIDER, action, FLAG, env);
  if (disabled) return disabled;
  const confirmation = requireConfirmation(body, PROVIDER, action);
  if (confirmation) return confirmation;
  const record = saveRecord(db, SAVED, localRecord("pharmacy-save", body, {
    pharmacyId: safeText(body.pharmacyId || body.id, 120),
    name: safeText(body.name || body.title || "Pharmacy option", 160),
    category: safeText(body.category || body.serviceType, 120),
    typedLocation: safeText(body.typedLocation || body.location || body.city, 160)
  }));
  return response(PROVIDER, action, "completed", "Pharmacy option saved locally after confirmation. No pharmacy was contacted.", { pharmacy: record });
}

function questionDraft(body = {}) {
  const action = "pharmacy.question_draft";
  const blocked = guardMedicalText(PROVIDER, action, [body.question, body.reason], false);
  if (blocked) return blocked;
  return response(PROVIDER, action, "prepared", "Pharmacist question draft prepared. Nexus did not request refills, transfers, dispensing, dosage advice, payment, or contact.", {
    draft: {
      topic: safeText(body.questionTopic || "medication safety", 120),
      questions: SAFE_QUESTION_PROMPTS,
      userQuestion: safeText(body.question || "", 240),
      medicationListStored: false,
      refillRequested: false,
      pharmacyContacted: false
    }
  });
}

function reminder(body = {}, db, env = process.env) {
  const disabled = guardEnabled(PROVIDER, "pharmacy.reminder", FLAG, env);
  if (disabled) return disabled;
  return createReminder(PROVIDER, "pharmacy.reminder", body, db, "Pharmacy question review");
}

function offline(body = {}, db, env = process.env) {
  const disabled = guardEnabled(PROVIDER, "pharmacy.offline", FLAG, env);
  if (disabled) return disabled;
  return queueOffline(PROVIDER, "pharmacy.offline", body, db, "pharmacy_question_draft", body.summary || body.questionTopic || "pharmacy question preparation metadata");
}

module.exports = { status, search, intake, intakes, save, questionDraft, reminder, offline, CATALOG, SAFE_QUESTION_PROMPTS };
