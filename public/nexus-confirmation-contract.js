(function initNexusConfirmationContract(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
    return;
  }

  root.NexusConfirmationContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function buildNexusConfirmationContract() {
  "use strict";

  const ALLOWED_CONFIRMATION_TYPES = Object.freeze([
    "reviewAcknowledgement",
    "prepareNextStep",
    "sourceReview",
    "riskDisclosureAcknowledgement",
    "cancelConfirmation",
    "notNow"
  ]);

  const REQUIRED_BLOCKED_EXECUTION_CHANNELS = Object.freeze([
    "provider",
    "call",
    "message",
    "payment",
    "location",
    "camera",
    "emergency",
    "medical",
    "pharmacy",
    "backend-write",
    "pending-action"
  ]);

  const REQUIRED_CONFIRMATION_FIELDS = Object.freeze([
    "confirmationId",
    "relatedStagedActionId",
    "confirmationType",
    "title",
    "summary",
    "approvalIntentOnly",
    "requiresFinalExecutionGate",
    "executionAuthority",
    "riskTier",
    "riskDisclosure",
    "blockedExecutionChannels",
    "evidenceRequirement",
    "sourcePacketRequirement",
    "userFacingLanguage",
    "safeUseNotes",
    "limitations"
  ]);

  const TEXT_FIELDS = Object.freeze([
    "confirmationId",
    "relatedStagedActionId",
    "confirmationType",
    "title",
    "summary",
    "riskTier",
    "riskDisclosure",
    "evidenceRequirement",
    "sourcePacketRequirement",
    "userFacingLanguage",
    "safeUseNotes",
    "limitations"
  ]);

  function isPlainObject(value) {
    return Boolean(value) && typeof value === "object" && !Array.isArray(value);
  }

  function hasNonEmptyText(value) {
    return typeof value === "string" && value.trim().length > 0;
  }

  function includesEvery(values, requiredValues) {
    if (!Array.isArray(values)) return false;
    return requiredValues.every(value => values.includes(value));
  }

  function validateApprovalIntentConfirmation(confirmation) {
    const failures = [];

    if (!isPlainObject(confirmation)) {
      return {
        ok: false,
        failures: ["confirmation must be an object"]
      };
    }

    for (const field of REQUIRED_CONFIRMATION_FIELDS) {
      if (!Object.prototype.hasOwnProperty.call(confirmation, field)) {
        failures.push(`missing required field: ${field}`);
      }
    }

    for (const field of TEXT_FIELDS) {
      if (Object.prototype.hasOwnProperty.call(confirmation, field) && !hasNonEmptyText(confirmation[field])) {
        failures.push(`field must be non-empty text: ${field}`);
      }
    }

    if (!ALLOWED_CONFIRMATION_TYPES.includes(confirmation.confirmationType)) {
      failures.push(`confirmationType is not allowed: ${confirmation.confirmationType}`);
    }

    if (confirmation.approvalIntentOnly !== true) {
      failures.push("approvalIntentOnly must be true");
    }

    if (confirmation.requiresFinalExecutionGate !== true) {
      failures.push("requiresFinalExecutionGate must be true");
    }

    if (confirmation.executionAuthority !== false) {
      failures.push("executionAuthority must be false");
    }

    if (!Array.isArray(confirmation.blockedExecutionChannels)) {
      failures.push("blockedExecutionChannels must be an array");
    } else if (!includesEvery(confirmation.blockedExecutionChannels, REQUIRED_BLOCKED_EXECUTION_CHANNELS)) {
      failures.push("blockedExecutionChannels must include every required blocked channel");
    }

    return {
      ok: failures.length === 0,
      failures
    };
  }

  function isSafeApprovalIntentConfirmation(confirmation) {
    return validateApprovalIntentConfirmation(confirmation).ok;
  }

  function createApprovalIntentConfirmation(input) {
    const confirmation = Object.assign({}, input, {
      approvalIntentOnly: true,
      requiresFinalExecutionGate: true,
      executionAuthority: false,
      blockedExecutionChannels: Array.from(new Set([
        ...REQUIRED_BLOCKED_EXECUTION_CHANNELS,
        ...Array.isArray(input && input.blockedExecutionChannels) ? input.blockedExecutionChannels : []
      ]))
    });

    return {
      confirmation,
      validation: validateApprovalIntentConfirmation(confirmation)
    };
  }

  return Object.freeze({
    ALLOWED_CONFIRMATION_TYPES,
    REQUIRED_BLOCKED_EXECUTION_CHANNELS,
    REQUIRED_CONFIRMATION_FIELDS,
    isSafeApprovalIntentConfirmation,
    validateApprovalIntentConfirmation,
    createApprovalIntentConfirmation
  });
});
