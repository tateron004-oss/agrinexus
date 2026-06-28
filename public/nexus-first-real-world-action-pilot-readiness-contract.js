(function initNexusFirstRealWorldActionPilotReadinessContract(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
    return;
  }

  root.NexusFirstRealWorldActionPilotReadinessContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function buildNexusFirstRealWorldActionPilotReadinessContract() {
  "use strict";

  const REQUIRED_PILOT_READINESS_FIELDS = Object.freeze([
    "pilotReadinessId",
    "pilotName",
    "actionCategory",
    "actionType",
    "targetSummary",
    "purposeSummary",
    "riskTier",
    "sourceSurface",
    "language",
    "identityState",
    "recipientResolutionState",
    "providerReadinessState",
    "finalGateState",
    "permissionState",
    "consentState",
    "auditState",
    "dryRunState",
    "reversalOrCancelState",
    "userApprovalState",
    "pilotReadinessOnly",
    "executionAuthority",
    "executionAllowed",
    "providerDispatchAllowed",
    "providerHandoffAllowed",
    "externalNavigationAllowed",
    "nativeBridgeAllowed",
    "networkAllowed",
    "storageWriteAllowed",
    "backendWriteAllowed",
    "blockedActionChannels",
    "limitations"
  ]);

  const BLOCKED_ACTION_CHANNELS = Object.freeze([
    "real-world-action",
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

  const READY_STATES = Object.freeze(["satisfied", "ready", "available", "approved", "validated", "resolved"]);

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

  function validateFirstRealWorldActionPilotReadiness(candidate) {
    const failures = [];
    if (!isPlainObject(candidate)) {
      return { ok: false, executionAllowed: false, pilotAllowed: false, failures: ["pilot readiness candidate must be an object"] };
    }

    for (const field of REQUIRED_PILOT_READINESS_FIELDS) {
      if (!Object.prototype.hasOwnProperty.call(candidate, field)) failures.push(`missing required field: ${field}`);
    }

    [
      "pilotReadinessId",
      "pilotName",
      "actionCategory",
      "actionType",
      "targetSummary",
      "purposeSummary",
      "riskTier",
      "sourceSurface",
      "language",
      "limitations"
    ].forEach(field => {
      if (Object.prototype.hasOwnProperty.call(candidate, field) && !hasText(candidate[field])) {
        failures.push(`field must be non-empty text: ${field}`);
      }
    });

    if (candidate.pilotReadinessOnly !== true) failures.push("pilotReadinessOnly must be true");
    if (candidate.executionAuthority !== false) failures.push("executionAuthority must be false");
    if (candidate.executionAllowed !== false) failures.push("executionAllowed must be false");
    if (candidate.providerDispatchAllowed !== false) failures.push("providerDispatchAllowed must be false");
    if (candidate.providerHandoffAllowed !== false) failures.push("providerHandoffAllowed must be false");
    if (candidate.externalNavigationAllowed !== false) failures.push("externalNavigationAllowed must be false");
    if (candidate.nativeBridgeAllowed !== false) failures.push("nativeBridgeAllowed must be false");
    if (candidate.networkAllowed !== false) failures.push("networkAllowed must be false");
    if (candidate.storageWriteAllowed !== false) failures.push("storageWriteAllowed must be false");
    if (candidate.backendWriteAllowed !== false) failures.push("backendWriteAllowed must be false");

    [
      ["identityState", candidate.identityState],
      ["recipientResolutionState", candidate.recipientResolutionState],
      ["providerReadinessState", candidate.providerReadinessState],
      ["finalGateState", candidate.finalGateState],
      ["permissionState", candidate.permissionState],
      ["consentState", candidate.consentState],
      ["auditState", candidate.auditState],
      ["dryRunState", candidate.dryRunState],
      ["reversalOrCancelState", candidate.reversalOrCancelState],
      ["userApprovalState", candidate.userApprovalState]
    ].forEach(([field, value]) => {
      if (!stateIsReady(value)) failures.push(`${field} must be ready`);
    });

    if (!includesEvery(candidate.blockedActionChannels, BLOCKED_ACTION_CHANNELS)) {
      failures.push("blockedActionChannels must include every required blocked channel");
    }

    return {
      ok: failures.length === 0,
      executionAllowed: false,
      pilotAllowed: false,
      failures
    };
  }

  function createFirstRealWorldActionPilotReadiness(input) {
    const candidate = Object.assign({}, input, {
      pilotReadinessOnly: true,
      executionAuthority: false,
      executionAllowed: false,
      providerDispatchAllowed: false,
      providerHandoffAllowed: false,
      externalNavigationAllowed: false,
      nativeBridgeAllowed: false,
      networkAllowed: false,
      storageWriteAllowed: false,
      backendWriteAllowed: false,
      blockedActionChannels: Array.from(new Set([
        ...BLOCKED_ACTION_CHANNELS,
        ...Array.isArray(input && input.blockedActionChannels) ? input.blockedActionChannels : []
      ]))
    });

    return {
      candidate,
      validation: validateFirstRealWorldActionPilotReadiness(candidate)
    };
  }

  return Object.freeze({
    REQUIRED_PILOT_READINESS_FIELDS,
    BLOCKED_ACTION_CHANNELS,
    validateFirstRealWorldActionPilotReadiness,
    createFirstRealWorldActionPilotReadiness
  });
});
