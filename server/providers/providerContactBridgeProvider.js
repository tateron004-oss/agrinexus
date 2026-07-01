const {
  clean,
  envEnabled,
  providerResponse,
  disabledResponse,
  requireConfirmation,
  blockedResponse
} = require("./providerUtils");

function maskPhoneNumber(value = "") {
  const digits = clean(value).replace(/\D/g, "");
  if (digits.length < 4) return "";
  return `${clean(value).startsWith("+") ? "+" : ""}${"*".repeat(6)}${digits.slice(-4)}`;
}

function status(env = process.env) {
  return {
    provider: "nexus-provider-contact-bridge",
    enabled: envEnabled("NEXUS_PROVIDER_CONTACT_BRIDGE_ENABLED", env, true),
    localOnly: true,
    confirmationControlled: true,
    noProviderHandoff: true,
    noHealthDataByDefault: true
  };
}

function ensureSavedProviders(db) {
  db.profile = db.profile || {};
  db.profile.nexusSavedProviders = db.profile.nexusSavedProviders || [];
  return db.profile.nexusSavedProviders;
}

function ensureProviderNotes(db) {
  db.profile = db.profile || {};
  db.profile.nexusProviderNotes = db.profile.nexusProviderNotes || [];
  return db.profile.nexusProviderNotes;
}

function normalizeProviderCard(body = {}) {
  return {
    name: clean(body.providerName || body.name).slice(0, 180),
    organization: clean(body.organizationName || body.organization).slice(0, 180),
    specialty: clean(body.providerType || body.specialty || body.type).slice(0, 180),
    address: clean(body.address).slice(0, 260),
    maskedPhone: maskPhoneNumber(body.phone || body.maskedPhone),
    npi: clean(body.npi).slice(0, 40),
    source: clean(body.source || "CMS NPPES NPI Registry").slice(0, 120),
    savedAt: new Date().toISOString()
  };
}

function containsSensitiveHealthDetails(value = "") {
  return /\b(diagnos|prescri|symptom|pain|bleeding|pregnan|diabetes|blood pressure|medication|medicine|patient|medical record|ssn|insurance|dob|date of birth)\b/i.test(clean(value));
}

function saveProvider(body = {}, db, env = process.env) {
  const provider = "nexus-provider-contact-bridge";
  const action = "providers.save";
  if (!envEnabled("NEXUS_PROVIDER_CONTACT_BRIDGE_ENABLED", env, true)) return disabledResponse(provider, action, "NEXUS_PROVIDER_CONTACT_BRIDGE_ENABLED");
  const confirmation = requireConfirmation(body, provider, action);
  if (confirmation) return confirmation;
  const card = normalizeProviderCard(body);
  if (!card.name && !card.organization) return blockedResponse(provider, action, "Provider name or organization is required before saving.");
  const savedProvider = {
    id: `saved-provider-${Date.now()}`,
    ...card,
    sourceType: "public-provider-directory",
    noHealthDataStored: true
  };
  ensureSavedProviders(db).unshift(savedProvider);
  db.profile.nexusSavedProviders = db.profile.nexusSavedProviders.slice(0, 50);
  return providerResponse({
    provider,
    action,
    status: "completed",
    message: "Provider saved locally after explicit confirmation. No health details or secrets were stored.",
    data: { provider: savedProvider }
  });
}

function saveProviderNote(body = {}, db, env = process.env) {
  const provider = "nexus-provider-contact-bridge";
  const action = "providers.note.save";
  if (!envEnabled("NEXUS_PROVIDER_CONTACT_BRIDGE_ENABLED", env, true)) return disabledResponse(provider, action, "NEXUS_PROVIDER_CONTACT_BRIDGE_ENABLED");
  const confirmation = requireConfirmation(body, provider, action);
  if (confirmation) return confirmation;
  const note = clean(body.note).slice(0, 500);
  if (!note) return blockedResponse(provider, action, "A non-sensitive provider note is required.");
  if (containsSensitiveHealthDetails(note)) {
    return blockedResponse(provider, action, "Provider notes must stay non-sensitive. Do not enter patient, diagnosis, medication, symptom, insurance, or medical-record details.");
  }
  const savedNote = {
    id: `provider-note-${Date.now()}`,
    providerName: clean(body.providerName || body.name).slice(0, 180),
    organization: clean(body.organizationName || body.organization).slice(0, 180),
    npi: clean(body.npi).slice(0, 40),
    note,
    source: clean(body.source || "CMS NPPES NPI Registry").slice(0, 120),
    sensitiveHealthDataAllowed: false,
    createdAt: new Date().toISOString()
  };
  ensureProviderNotes(db).unshift(savedNote);
  db.profile.nexusProviderNotes = db.profile.nexusProviderNotes.slice(0, 50);
  return providerResponse({
    provider,
    action,
    status: "completed",
    message: "Non-sensitive provider note saved locally after explicit confirmation.",
    data: { note: savedNote }
  });
}

module.exports = { status, saveProvider, saveProviderNote, maskPhoneNumber };
