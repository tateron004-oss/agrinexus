(function initNexusAppointmentServiceRequestContract(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
    return;
  }

  root.NexusAppointmentServiceRequestContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function buildNexusAppointmentServiceRequestContract() {
  "use strict";

  const SUPPORTED_SERVICE_REQUEST_TYPES = Object.freeze([
    "appointment-request",
    "service-request",
    "field-visit-request",
    "consultation-request",
    "coordination-request",
    "clarification-required",
    "blocked-request",
    "unknown"
  ]);

  const SUPPORTED_SERVICE_CATEGORIES = Object.freeze([
    "agriculture-support",
    "training-workforce",
    "provider-consultation",
    "field-visit",
    "logistics-coordination",
    "health-service-caution-only",
    "emergency-service-blocked",
    "user-provided-service"
  ]);

  const REQUIRED_SERVICE_REQUEST_FIELDS = Object.freeze([
    "serviceRequestId",
    "serviceRequestType",
    "providerIdentityResolutionId",
    "providerDisplayName",
    "requestedServiceCategory",
    "requestedTimeWindow",
    "userProvidedTimePreference",
    "serviceLocationRequirement",
    "communicationIntentRequirement",
    "requestDraft",
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
    "booking",
    "provider-dispatch",
    "provider-handoff",
    "call",
    "message",
    "SMS",
    "WhatsApp",
    "Telegram",
    "email",
    "payment",
    "purchase",
    "marketplace-transaction",
    "location",
    "camera",
    "image-capture",
    "emergency",
    "medical",
    "pharmacy",
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

  function validateAppointmentServiceRequestIntent(request) {
    const failures = [];
    if (!isPlainObject(request)) {
      return { ok: false, previewAllowed: false, executionAllowed: false, failures: ["appointment/service request must be an object"] };
    }

    REQUIRED_SERVICE_REQUEST_FIELDS.forEach(field => {
      if (!Object.prototype.hasOwnProperty.call(request, field)) failures.push(`missing required field: ${field}`);
    });

    [
      "serviceRequestId",
      "serviceRequestType",
      "providerIdentityResolutionId",
      "providerDisplayName",
      "requestedServiceCategory",
      "requestedTimeWindow",
      "userProvidedTimePreference",
      "serviceLocationRequirement",
      "communicationIntentRequirement",
      "requestDraft",
      "riskTier",
      "evidenceRequirement",
      "sourcePacketRequirement",
      "safeUseNotes",
      "limitations"
    ].forEach(field => {
      if (Object.prototype.hasOwnProperty.call(request, field) && !hasText(request[field])) {
        failures.push(`field must be non-empty text: ${field}`);
      }
    });

    if (!SUPPORTED_SERVICE_REQUEST_TYPES.includes(request.serviceRequestType)) {
      failures.push("serviceRequestType must be supported");
    }
    if (!SUPPORTED_SERVICE_CATEGORIES.includes(request.requestedServiceCategory)) {
      failures.push("requestedServiceCategory must be supported");
    }
    if (request.providerConfirmationRequired !== true) failures.push("providerConfirmationRequired must be true");
    if (request.userApprovalRequired !== true) failures.push("userApprovalRequired must be true");
    if (request.finalExecutionGateRequired !== true) failures.push("finalExecutionGateRequired must be true");
    if (request.executionAuthority !== false) failures.push("executionAuthority must be false");
    if (!includesEvery(request.blockedExecutionChannels, BLOCKED_EXECUTION_CHANNELS)) {
      failures.push("blockedExecutionChannels must include every required blocked channel");
    }

    return {
      ok: failures.length === 0,
      previewAllowed: failures.length === 0,
      executionAllowed: false,
      failures
    };
  }

  function isSafeAppointmentServiceRequestIntent(request) {
    return validateAppointmentServiceRequestIntent(request).ok === true;
  }

  function createAppointmentServiceRequestIntent(input) {
    const request = Object.assign({}, input, {
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
      request: Object.freeze(request),
      validation: validateAppointmentServiceRequestIntent(request)
    });
  }

  return Object.freeze({
    SUPPORTED_SERVICE_REQUEST_TYPES,
    SUPPORTED_SERVICE_CATEGORIES,
    REQUIRED_SERVICE_REQUEST_FIELDS,
    BLOCKED_EXECUTION_CHANNELS,
    validateAppointmentServiceRequestIntent,
    isSafeAppointmentServiceRequestIntent,
    createAppointmentServiceRequestIntent
  });
});
