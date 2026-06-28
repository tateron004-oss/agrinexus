(function initNexusLocationDispatchPermissionContract(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
    return;
  }

  root.NexusLocationDispatchPermissionContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function buildNexusLocationDispatchPermissionContract() {
  "use strict";

  const SUPPORTED_LOCATION_DISPATCH_INTENT_TYPES = Object.freeze([
    "location-intent",
    "dispatch-intent",
    "field-agent-dispatch-intent",
    "transportation-pickup-intent",
    "mobile-clinic-visit-intent",
    "service-area-review",
    "route-review",
    "clarification-required",
    "blocked-location-dispatch-request",
    "unknown"
  ]);

  const SUPPORTED_DISPATCH_CATEGORIES = Object.freeze([
    "farm-location-sharing-review",
    "care-access-location-review",
    "transportation-pickup-review",
    "field-agent-dispatch-review",
    "mobile-clinic-visit-review",
    "provider-service-area-review",
    "map-route-review",
    "ambiguous-location-dispatch-review",
    "blocked-live-location-dispatch"
  ]);

  const REQUIRED_LOCATION_DISPATCH_FIELDS = Object.freeze([
    "locationDispatchIntentId",
    "locationDispatchIntentType",
    "targetIdentityResolutionId",
    "targetDisplayName",
    "requestedLocationDisplay",
    "locationPrecisionRequirement",
    "dispatchCategory",
    "dispatchPurpose",
    "providerOrServiceRequirement",
    "consentRequirement",
    "dryRunPacket",
    "locationSharingConsentRequired",
    "providerConfirmationRequired",
    "userApprovalRequired",
    "finalExecutionGateRequired",
    "executionAuthority",
    "riskTier",
    "evidenceRequirement",
    "sourcePacketRequirement",
    "blockedExecutionChannels",
    "safeUseNotes",
    "limitations"
  ]);

  const BLOCKED_EXECUTION_CHANNELS = Object.freeze([
    "geolocation",
    "location-sharing",
    "precise-location",
    "map-execution",
    "navigation",
    "dispatch",
    "provider-dispatch",
    "field-agent-dispatch",
    "transportation-dispatch",
    "mobile-clinic-dispatch",
    "provider-handoff",
    "call",
    "message",
    "SMS",
    "WhatsApp",
    "Telegram",
    "email",
    "payment",
    "checkout",
    "marketplace-transaction",
    "camera",
    "image-capture",
    "medical",
    "pharmacy",
    "emergency",
    "backend-write",
    "storage-write",
    "network-call",
    "pending-action"
  ]);

  function isPlainObject(value) {
    return Boolean(value) && typeof value === "object" && !Array.isArray(value);
  }

  function hasText(value) {
    return typeof value === "string" && value.trim().length > 0;
  }

  function includesEvery(values, requiredValues) {
    if (!Array.isArray(values)) return false;
    return requiredValues.every(value => values.includes(value));
  }

  function validateLocationDispatchIntent(intent) {
    const failures = [];
    if (!isPlainObject(intent)) {
      return { ok: false, previewAllowed: false, dryRunAllowed: false, executionAllowed: false, failures: ["location/dispatch intent must be an object"] };
    }

    REQUIRED_LOCATION_DISPATCH_FIELDS.forEach(field => {
      if (!Object.prototype.hasOwnProperty.call(intent, field)) failures.push(`missing required field: ${field}`);
    });

    [
      "locationDispatchIntentId",
      "locationDispatchIntentType",
      "targetIdentityResolutionId",
      "targetDisplayName",
      "requestedLocationDisplay",
      "locationPrecisionRequirement",
      "dispatchCategory",
      "dispatchPurpose",
      "providerOrServiceRequirement",
      "consentRequirement",
      "dryRunPacket",
      "riskTier",
      "evidenceRequirement",
      "sourcePacketRequirement",
      "safeUseNotes",
      "limitations"
    ].forEach(field => {
      if (Object.prototype.hasOwnProperty.call(intent, field) && !hasText(intent[field])) {
        failures.push(`field must be non-empty text: ${field}`);
      }
    });

    if (!SUPPORTED_LOCATION_DISPATCH_INTENT_TYPES.includes(intent.locationDispatchIntentType)) failures.push("locationDispatchIntentType must be supported");
    if (!SUPPORTED_DISPATCH_CATEGORIES.includes(intent.dispatchCategory)) failures.push("dispatchCategory must be supported");
    if (intent.locationSharingConsentRequired !== true) failures.push("locationSharingConsentRequired must be true");
    if (intent.providerConfirmationRequired !== true) failures.push("providerConfirmationRequired must be true");
    if (intent.userApprovalRequired !== true) failures.push("userApprovalRequired must be true");
    if (intent.finalExecutionGateRequired !== true) failures.push("finalExecutionGateRequired must be true");
    if (intent.executionAuthority !== false) failures.push("executionAuthority must be false");
    if (!includesEvery(intent.blockedExecutionChannels, BLOCKED_EXECUTION_CHANNELS)) failures.push("blockedExecutionChannels must include every required blocked channel");

    return {
      ok: failures.length === 0,
      previewAllowed: failures.length === 0,
      dryRunAllowed: failures.length === 0,
      executionAllowed: false,
      failures
    };
  }

  function isSafeLocationDispatchIntent(intent) {
    return validateLocationDispatchIntent(intent).ok === true;
  }

  function createLocationDispatchIntent(input) {
    const intent = Object.assign({}, input, {
      locationSharingConsentRequired: true,
      providerConfirmationRequired: true,
      userApprovalRequired: true,
      finalExecutionGateRequired: true,
      executionAuthority: false,
      blockedExecutionChannels: Array.from(new Set([
        ...BLOCKED_EXECUTION_CHANNELS,
        ...Array.isArray(input && input.blockedExecutionChannels) ? input.blockedExecutionChannels : []
      ]))
    });

    return Object.freeze({
      intent: Object.freeze(intent),
      validation: validateLocationDispatchIntent(intent)
    });
  }

  return Object.freeze({
    SUPPORTED_LOCATION_DISPATCH_INTENT_TYPES,
    SUPPORTED_DISPATCH_CATEGORIES,
    REQUIRED_LOCATION_DISPATCH_FIELDS,
    BLOCKED_EXECUTION_CHANNELS,
    validateLocationDispatchIntent,
    isSafeLocationDispatchIntent,
    createLocationDispatchIntent
  });
});
