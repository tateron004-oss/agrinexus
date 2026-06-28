(function initNexusContactProviderIdentityContract(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
    return;
  }

  root.NexusContactProviderIdentityContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function buildNexusContactProviderIdentityContract() {
  "use strict";

  const SUPPORTED_ENTITY_TYPES = Object.freeze([
    "contact",
    "provider",
    "organization",
    "role",
    "marketplace-party",
    "healthcare-provider",
    "pharmacy-provider",
    "emergency-contact",
    "transportation-provider",
    "unknown"
  ]);

  const SUPPORTED_CONFIDENCE_TIERS = Object.freeze(["low", "medium", "high", "ambiguous", "missing"]);

  const REQUIRED_IDENTITY_FIELDS = Object.freeze([
    "identityCandidateId",
    "sourceSurface",
    "requestedActionType",
    "entityType",
    "displayName",
    "candidateSummary",
    "evidenceSummary",
    "confidenceTier",
    "riskTier",
    "language",
    "ambiguityState",
    "missingInformationState",
    "permissionState",
    "consentState",
    "auditState",
    "finalExecutionGateState",
    "identityResolutionOnly",
    "approvalIntentOnly",
    "finalExecutionGateRequired",
    "executionAuthority",
    "providerDispatchAllowed",
    "providerHandoffAllowed",
    "communicationAllowed",
    "externalNavigationAllowed",
    "nativeBridgeAllowed",
    "networkAllowed",
    "storageWriteAllowed",
    "backendWriteAllowed",
    "blockedIdentityChannels",
    "limitations"
  ]);

  const BLOCKED_IDENTITY_CHANNELS = Object.freeze([
    "provider-dispatch",
    "provider-handoff",
    "external-navigation",
    "native-bridge",
    "call",
    "message",
    "WhatsApp",
    "Telegram",
    "SMS",
    "email",
    "appointment",
    "payment",
    "purchase",
    "marketplace-transaction",
    "location",
    "camera",
    "medical",
    "pharmacy",
    "emergency",
    "backend-write",
    "storage-write",
    "network-call",
    "pending-action"
  ]);

  const READY_STATES = Object.freeze(["not-required", "satisfied", "ready", "available", "approved", "validated"]);

  function isPlainObject(value) {
    return Boolean(value) && typeof value === "object" && !Array.isArray(value);
  }

  function hasText(value) {
    return typeof value === "string" && value.trim().length > 0;
  }

  function stateIsReady(value) {
    return READY_STATES.includes(String(value || "").trim().toLowerCase());
  }

  function includesEvery(values, requiredValues) {
    if (!Array.isArray(values)) return false;
    return requiredValues.every(value => values.includes(value));
  }

  function validateContactProviderIdentityCandidate(candidate) {
    const failures = [];
    if (!isPlainObject(candidate)) {
      return { ok: false, identityPreviewAllowed: false, executionAllowed: false, failures: ["identity candidate must be an object"] };
    }

    REQUIRED_IDENTITY_FIELDS.forEach(field => {
      if (!Object.prototype.hasOwnProperty.call(candidate, field)) failures.push(`missing required field: ${field}`);
    });

    [
      "identityCandidateId",
      "sourceSurface",
      "requestedActionType",
      "entityType",
      "displayName",
      "candidateSummary",
      "evidenceSummary",
      "confidenceTier",
      "riskTier",
      "language",
      "limitations"
    ].forEach(field => {
      if (Object.prototype.hasOwnProperty.call(candidate, field) && !hasText(candidate[field])) {
        failures.push(`field must be non-empty text: ${field}`);
      }
    });

    if (!SUPPORTED_ENTITY_TYPES.includes(candidate.entityType)) failures.push("entityType must be supported");
    if (!SUPPORTED_CONFIDENCE_TIERS.includes(candidate.confidenceTier)) failures.push("confidenceTier must be supported");
    if (candidate.identityResolutionOnly !== true) failures.push("identityResolutionOnly must be true");
    if (candidate.approvalIntentOnly !== true) failures.push("approvalIntentOnly must be true");
    if (candidate.finalExecutionGateRequired !== true) failures.push("finalExecutionGateRequired must be true");
    if (candidate.executionAuthority !== false) failures.push("executionAuthority must be false");
    if (candidate.providerDispatchAllowed !== false) failures.push("providerDispatchAllowed must be false");
    if (candidate.providerHandoffAllowed !== false) failures.push("providerHandoffAllowed must be false");
    if (candidate.communicationAllowed !== false) failures.push("communicationAllowed must be false");
    if (candidate.externalNavigationAllowed !== false) failures.push("externalNavigationAllowed must be false");
    if (candidate.nativeBridgeAllowed !== false) failures.push("nativeBridgeAllowed must be false");
    if (candidate.networkAllowed !== false) failures.push("networkAllowed must be false");
    if (candidate.storageWriteAllowed !== false) failures.push("storageWriteAllowed must be false");
    if (candidate.backendWriteAllowed !== false) failures.push("backendWriteAllowed must be false");

    [
      ["permissionState", candidate.permissionState],
      ["consentState", candidate.consentState],
      ["auditState", candidate.auditState],
      ["finalExecutionGateState", candidate.finalExecutionGateState]
    ].forEach(([field, value]) => {
      if (!stateIsReady(value)) failures.push(`${field} must be ready or not-required`);
    });

    if (!hasText(candidate.ambiguityState)) failures.push("ambiguityState must be non-empty text");
    if (!hasText(candidate.missingInformationState)) failures.push("missingInformationState must be non-empty text");

    if (!includesEvery(candidate.blockedIdentityChannels, BLOCKED_IDENTITY_CHANNELS)) {
      failures.push("blockedIdentityChannels must include every required blocked channel");
    }

    return {
      ok: failures.length === 0,
      identityPreviewAllowed: failures.length === 0,
      executionAllowed: false,
      failures
    };
  }

  function createContactProviderIdentityCandidate(input) {
    const candidate = Object.assign({}, input, {
      identityResolutionOnly: true,
      approvalIntentOnly: true,
      finalExecutionGateRequired: true,
      executionAuthority: false,
      providerDispatchAllowed: false,
      providerHandoffAllowed: false,
      communicationAllowed: false,
      externalNavigationAllowed: false,
      nativeBridgeAllowed: false,
      networkAllowed: false,
      storageWriteAllowed: false,
      backendWriteAllowed: false,
      blockedIdentityChannels: Array.from(new Set([
        ...BLOCKED_IDENTITY_CHANNELS,
        ...Array.isArray(input && input.blockedIdentityChannels) ? input.blockedIdentityChannels : []
      ]))
    });

    return {
      candidate,
      validation: validateContactProviderIdentityCandidate(candidate)
    };
  }

  return Object.freeze({
    SUPPORTED_ENTITY_TYPES,
    SUPPORTED_CONFIDENCE_TIERS,
    REQUIRED_IDENTITY_FIELDS,
    BLOCKED_IDENTITY_CHANNELS,
    validateContactProviderIdentityCandidate,
    createContactProviderIdentityCandidate
  });
});
