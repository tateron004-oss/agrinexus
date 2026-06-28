(function initNexusMultiLaneAssistantRouterReadinessContract(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
    return;
  }

  root.NexusMultiLaneAssistantRouterReadinessContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function buildNexusMultiLaneAssistantRouterReadinessContract() {
  "use strict";

  const SUPPORTED_ROUTER_LANES = Object.freeze([
    "agriculture-support",
    "workforce-support",
    "learning-support",
    "marketplace-review",
    "health-access-info",
    "communications-preparation",
    "provider-handoff-readiness",
    "real-world-action-pilot-readiness",
    "map-location-permission-info",
    "emergency-boundary-info"
  ]);

  const REQUIRED_ROUTER_READINESS_FIELDS = Object.freeze([
    "routerReadinessId",
    "routerName",
    "sourceSurface",
    "inputSummary",
    "primaryLane",
    "candidateLanes",
    "riskTier",
    "language",
    "intentConfidenceState",
    "policyState",
    "permissionState",
    "consentState",
    "auditState",
    "finalGateState",
    "dryRunState",
    "fallbackState",
    "routerReadinessOnly",
    "routingAuthority",
    "executionAuthority",
    "runtimeRoutingAllowed",
    "providerDispatchAllowed",
    "providerHandoffAllowed",
    "externalNavigationAllowed",
    "nativeBridgeAllowed",
    "networkAllowed",
    "storageWriteAllowed",
    "backendWriteAllowed",
    "blockedRouterChannels",
    "limitations"
  ]);

  const BLOCKED_ROUTER_CHANNELS = Object.freeze([
    "runtime-routing",
    "tool-selection-authority",
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

  function lanesAreSupported(primaryLane, candidateLanes) {
    if (!SUPPORTED_ROUTER_LANES.includes(primaryLane)) return false;
    if (!Array.isArray(candidateLanes) || candidateLanes.length === 0) return false;
    return candidateLanes.every(lane => SUPPORTED_ROUTER_LANES.includes(lane));
  }

  function validateMultiLaneAssistantRouterReadiness(candidate) {
    const failures = [];
    if (!isPlainObject(candidate)) {
      return { ok: false, routingAllowed: false, executionAllowed: false, failures: ["router readiness candidate must be an object"] };
    }

    for (const field of REQUIRED_ROUTER_READINESS_FIELDS) {
      if (!Object.prototype.hasOwnProperty.call(candidate, field)) failures.push(`missing required field: ${field}`);
    }

    [
      "routerReadinessId",
      "routerName",
      "sourceSurface",
      "inputSummary",
      "primaryLane",
      "riskTier",
      "language",
      "limitations"
    ].forEach(field => {
      if (Object.prototype.hasOwnProperty.call(candidate, field) && !hasText(candidate[field])) {
        failures.push(`field must be non-empty text: ${field}`);
      }
    });

    if (!lanesAreSupported(candidate.primaryLane, candidate.candidateLanes)) {
      failures.push("primaryLane and candidateLanes must use supported router lanes");
    }

    if (candidate.routerReadinessOnly !== true) failures.push("routerReadinessOnly must be true");
    if (candidate.routingAuthority !== false) failures.push("routingAuthority must be false");
    if (candidate.executionAuthority !== false) failures.push("executionAuthority must be false");
    if (candidate.runtimeRoutingAllowed !== false) failures.push("runtimeRoutingAllowed must be false");
    if (candidate.providerDispatchAllowed !== false) failures.push("providerDispatchAllowed must be false");
    if (candidate.providerHandoffAllowed !== false) failures.push("providerHandoffAllowed must be false");
    if (candidate.externalNavigationAllowed !== false) failures.push("externalNavigationAllowed must be false");
    if (candidate.nativeBridgeAllowed !== false) failures.push("nativeBridgeAllowed must be false");
    if (candidate.networkAllowed !== false) failures.push("networkAllowed must be false");
    if (candidate.storageWriteAllowed !== false) failures.push("storageWriteAllowed must be false");
    if (candidate.backendWriteAllowed !== false) failures.push("backendWriteAllowed must be false");

    [
      ["intentConfidenceState", candidate.intentConfidenceState],
      ["policyState", candidate.policyState],
      ["permissionState", candidate.permissionState],
      ["consentState", candidate.consentState],
      ["auditState", candidate.auditState],
      ["finalGateState", candidate.finalGateState],
      ["dryRunState", candidate.dryRunState],
      ["fallbackState", candidate.fallbackState]
    ].forEach(([field, value]) => {
      if (!stateIsReady(value)) failures.push(`${field} must be ready`);
    });

    if (!includesEvery(candidate.blockedRouterChannels, BLOCKED_ROUTER_CHANNELS)) {
      failures.push("blockedRouterChannels must include every required blocked channel");
    }

    return {
      ok: failures.length === 0,
      routingAllowed: false,
      executionAllowed: false,
      failures
    };
  }

  function createMultiLaneAssistantRouterReadiness(input) {
    const candidate = Object.assign({}, input, {
      routerReadinessOnly: true,
      routingAuthority: false,
      executionAuthority: false,
      runtimeRoutingAllowed: false,
      providerDispatchAllowed: false,
      providerHandoffAllowed: false,
      externalNavigationAllowed: false,
      nativeBridgeAllowed: false,
      networkAllowed: false,
      storageWriteAllowed: false,
      backendWriteAllowed: false,
      blockedRouterChannels: Array.from(new Set([
        ...BLOCKED_ROUTER_CHANNELS,
        ...Array.isArray(input && input.blockedRouterChannels) ? input.blockedRouterChannels : []
      ]))
    });

    return {
      candidate,
      validation: validateMultiLaneAssistantRouterReadiness(candidate)
    };
  }

  return Object.freeze({
    SUPPORTED_ROUTER_LANES,
    REQUIRED_ROUTER_READINESS_FIELDS,
    BLOCKED_ROUTER_CHANNELS,
    validateMultiLaneAssistantRouterReadiness,
    createMultiLaneAssistantRouterReadiness
  });
});
