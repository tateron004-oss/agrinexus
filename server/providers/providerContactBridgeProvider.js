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

// Found live (drone/provider sibling sweep, widening to a systemic regex audit): "diagnos"/"prescri"/
// "pregnan" here were bare word-FRAGMENTS wrapped in \b(...)\b -- but \b requires a boundary
// immediately after the fragment, and none of "diagnosis"/"diagnosed"/"diagnosing", "prescribe"/
// "prescribing"/"prescription", or "pregnant"/"pregnancy" have a word boundary right after "diagnos"/
// "prescri"/"pregnan". The pattern matched NONE of the natural forms of its own three most important
// trigger words -- only the literal, essentially never-typed fragments "diagnos"/"prescri"/"pregnan"
// as whole words. \w* lets each fragment match any real-word continuation, the same fix applied to
// the 6 sibling SENSITIVE_*_PATTERN/BLOCKED_*_TEXT regexes across the codebase with this identical
// defect (communicationsBridgeProvider.js, learningBridgeProvider.js, mapsFieldVisitBridgeProvider.js,
// marketplaceBridgeProvider.js, sessionBridgeProvider.js, workflowOrchestratorBridgeProvider.js).
function containsSensitiveHealthDetails(value = "") {
  return /\b(diagnos\w*|prescri\w*|symptom|pain|bleeding|pregnan\w*|diabetes|blood pressure|medication|medicine|patient|medical record|ssn|insurance|dob|date of birth)\b/i.test(clean(value));
}

function saveProvider(body = {}, db, env = process.env) {
  const provider = "nexus-provider-contact-bridge";
  const action = "providers.save";
  if (!envEnabled("NEXUS_PROVIDER_CONTACT_BRIDGE_ENABLED", env, true)) return disabledResponse(provider, action, "NEXUS_PROVIDER_CONTACT_BRIDGE_ENABLED");
  const confirmation = requireConfirmation(body, provider, action);
  if (confirmation) return confirmation;
  const card = normalizeProviderCard(body);
  if (!card.name && !card.organization) return blockedResponse(provider, action, "Provider name or organization is required before saving.");
  // Found live (drone/provider sibling sweep): this unconditionally asserted noHealthDataStored: true
  // without ever checking that claim -- name/organization/specialty/address are all free text a raw
  // POST caller fully controls (this endpoint isn't restricted to actual npiProvider.search() output),
  // so nothing stopped sensitive health content from being saved while the record claimed otherwise.
  if ([card.name, card.organization, card.specialty, card.address].some(containsSensitiveHealthDetails)) {
    return blockedResponse(provider, action, "Saved providers must stay non-sensitive. Do not enter patient, diagnosis, medication, symptom, insurance, or medical-record details.");
  }
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
  const providerName = clean(body.providerName || body.name).slice(0, 180);
  const organization = clean(body.organizationName || body.organization).slice(0, 180);
  const npi = clean(body.npi).slice(0, 40);
  const source = clean(body.source || "CMS NPPES NPI Registry").slice(0, 120);
  // Found live (drone/provider sibling sweep): only `note` was scanned here, but providerName/
  // organization/npi/source are ALL persisted into the same record and are equally free-text,
  // caller-controlled fields on this raw POST body -- sensitive content placed in any of them sailed
  // through unfiltered even though the function unconditionally asserted sensitiveHealthDataAllowed:
  // false and the blocked-response message explicitly promises notes "must stay non-sensitive."
  if ([note, providerName, organization, npi, source].some(containsSensitiveHealthDetails)) {
    return blockedResponse(provider, action, "Provider notes must stay non-sensitive. Do not enter patient, diagnosis, medication, symptom, insurance, or medical-record details.");
  }
  const savedNote = {
    id: `provider-note-${Date.now()}`,
    providerName,
    organization,
    npi,
    note,
    source,
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
