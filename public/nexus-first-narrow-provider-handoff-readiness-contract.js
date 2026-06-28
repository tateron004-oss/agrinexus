(function initNexusFirstNarrowProviderHandoffReadinessContract(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
    return;
  }

  root.NexusFirstNarrowProviderHandoffReadinessContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function buildNexusFirstNarrowProviderHandoffReadinessContract() {
  "use strict";

  const REQUIRED_HANDOFF_READINESS_FIELDS = Object.freeze([
    "handoffReadinessId",
    "providerCategory",
    "providerDisplayName",
    "recipientDisplayName",
    "actionType",
    "purposeSummary",
    "riskTier",
    "sourceSurface",
    "language",
    "userApprovalState",
    "finalGateState",
    "permissionState",
    "consentState",
    "auditState",
    "providerAvailabilityState",
    "dryRunState",
    "handoffReadinessOnly",
    "handoffAllowed",
    "externalNavigationAllowed",
    "providerApiAllowed",
    "nativeBridgeAllowed",
    "networkAllowed",
    "storageWriteAllowed",
    "backendWriteAllowed",
    "executionAuthority",
    "cancelPath",
    "blockedHandoffChannels",
    "limitations"
  ]);

  const BLOCKED_HANDOFF_CHANNELS = Object.freeze([
    "provider-handoff",
    "external-navigation",
    "provider-api",
    "native-bridge",
    "call",
    "message",
    "WhatsApp",
    "Telegram",
    "SMS",
    "email",
    "payment",
    "location",
    "camera",
    "medical",
    "pharmacy",
    "emergency",
    "appointment",
    "marketplace-transaction",
    "backend-write",
    "storage-write",
    "network-call",
    "pending-action"
  ]);

  const READY_STATES = Object.freeze(["satisfied", "ready", "available", "approved", "validated"]);

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

  function validateProviderHandoffReadiness(candidate) {
    const failures = [];
    if (!isPlainObject(candidate)) {
      return { ok: false, handoffAllowed: false, executionAllowed: false, failures: ["handoff readiness candidate must be an object"] };
    }

    for (const field of REQUIRED_HANDOFF_READINESS_FIELDS) {
      if (!Object.prototype.hasOwnProperty.call(candidate, field)) failures.push(`missing required field: ${field}`);
    }

    [
      "handoffReadinessId",
      "providerCategory",
      "providerDisplayName",
      "recipientDisplayName",
      "actionType",
      "purposeSummary",
      "riskTier",
      "sourceSurface",
      "language",
      "cancelPath",
      "limitations"
    ].forEach(field => {
      if (Object.prototype.hasOwnProperty.call(candidate, field) && !hasText(candidate[field])) {
        failures.push(`field must be non-empty text: ${field}`);
      }
    });

    if (candidate.handoffReadinessOnly !== true) failures.push("handoffReadinessOnly must be true");
    if (candidate.handoffAllowed !== false) failures.push("handoffAllowed must be false");
    if (candidate.externalNavigationAllowed !== false) failures.push("externalNavigationAllowed must be false");
    if (candidate.providerApiAllowed !== false) failures.push("providerApiAllowed must be false");
    if (candidate.nativeBridgeAllowed !== false) failures.push("nativeBridgeAllowed must be false");
    if (candidate.networkAllowed !== false) failures.push("networkAllowed must be false");
    if (candidate.storageWriteAllowed !== false) failures.push("storageWriteAllowed must be false");
    if (candidate.backendWriteAllowed !== false) failures.push("backendWriteAllowed must be false");
    if (candidate.executionAuthority !== false) failures.push("executionAuthority must be false");

    [
      ["userApprovalState", candidate.userApprovalState],
      ["finalGateState", candidate.finalGateState],
      ["permissionState", candidate.permissionState],
      ["consentState", candidate.consentState],
      ["auditState", candidate.auditState],
      ["providerAvailabilityState", candidate.providerAvailabilityState],
      ["dryRunState", candidate.dryRunState]
    ].forEach(([field, value]) => {
      if (!stateIsReady(value)) failures.push(`${field} must be ready`);
    });

    if (!includesEvery(candidate.blockedHandoffChannels, BLOCKED_HANDOFF_CHANNELS)) {
      failures.push("blockedHandoffChannels must include every required blocked channel");
    }

    return {
      ok: failures.length === 0,
      handoffAllowed: false,
      executionAllowed: false,
      failures
    };
  }

  function createProviderHandoffReadiness(input) {
    const candidate = Object.assign({}, input, {
      handoffReadinessOnly: true,
      handoffAllowed: false,
      externalNavigationAllowed: false,
      providerApiAllowed: false,
      nativeBridgeAllowed: false,
      networkAllowed: false,
      storageWriteAllowed: false,
      backendWriteAllowed: false,
      executionAuthority: false,
      blockedHandoffChannels: Array.from(new Set([
        ...BLOCKED_HANDOFF_CHANNELS,
        ...Array.isArray(input && input.blockedHandoffChannels) ? input.blockedHandoffChannels : []
      ]))
    });

    return {
      candidate,
      validation: validateProviderHandoffReadiness(candidate)
    };
  }

  return Object.freeze({
    REQUIRED_HANDOFF_READINESS_FIELDS,
    BLOCKED_HANDOFF_CHANNELS,
    validateProviderHandoffReadiness,
    createProviderHandoffReadiness
  });
});
