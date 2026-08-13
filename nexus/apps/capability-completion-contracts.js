"use strict";

const CONTRACTS = Object.freeze({
  agriculture: ["crop", "observations", "assessment", "sources"],
  health: ["reading", "persistedRecordId", "safetyResponse"],
  telehealth: ["intake", "savedRecordId", "nextStep"],
  "mobile-clinic": ["locations", "source", "selectedLocation"],
  pharmacy: ["result", "source", "safetyResponse"],
  learning: ["lesson", "content", "savedProgress"],
  workforce: ["listings", "sources", "selectedListing"],
  marketplace: ["listings", "sources", "selectedListing"],
  maps: ["origin", "destination", "routeGeometry"],
  "music-media": ["requestedMedia", "resolvedMedia", "playbackState"],
  documents: ["documentId", "savedVersion", "reopenVerified"],
  reminders: ["resolvedTime", "reminderId", "persisted"],
  "offline-queue": ["operationId", "syncState", "serverAcknowledged"],
  "live-knowledge": ["answer", "sources"],
  images: ["query", "images", "sources"],
  communications: ["draft", "consentState", "deliveryReceipt"],
  operations: ["operation", "approvalState", "receipt"]
});

function completionRequirements(application) {
  const requirements = CONTRACTS[application];
  if (!requirements) throw coded("capability_contract_missing", `No completion contract exists for ${application}.`);
  return requirements;
}

function verifyCapabilityCompletion({ application, evidence = {}, releaseSha, expectedSha = releaseSha }) {
  if (!releaseSha || releaseSha !== expectedSha) throw coded("verification_failed", "Capability evidence is not bound to the active release SHA.");
  const requirements = completionRequirements(application);
  const missing = requirements.filter(key => !meaningful(evidence[key]));
  if (missing.length) throw coded("verification_failed", `${application} is missing completion evidence: ${missing.join(", ")}.`);
  if (evidence.rendered !== true || (evidence.visible !== true && evidence.audible !== true)) {
    throw coded("render_failed", `${application} lacks a visible or audible renderer acknowledgement.`);
  }
  return Object.freeze({ verified: true, application, releaseSha, requirements });
}

function meaningful(value) {
  if (value === true || (typeof value === "number" && Number.isFinite(value))) return true;
  if (typeof value === "string") return value.trim().length > 0 && !/^(unknown|none|pending)$/i.test(value.trim());
  if (Array.isArray(value)) return value.length > 0;
  return Boolean(value && typeof value === "object" && Object.keys(value).length);
}
function coded(code, message) { const error = new Error(message); error.code = code; return error; }

module.exports = Object.freeze({ CONTRACTS, completionRequirements, verifyCapabilityCompletion });
