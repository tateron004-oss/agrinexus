(function initNexusStagedActionContract(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
    return;
  }

  root.NexusStagedActionContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function buildNexusStagedActionContract() {
  "use strict";

  const ALLOWED_STAGED_ACTION_TYPES = Object.freeze([
    "agriculture.training.review",
    "agriculture.irrigation.learning.review",
    "workforce.farm_jobs.review",
    "marketplace.agritrade.browse.review",
    "agriculture.crop_issue.observation_review",
    "agriculture.field_support.review",
    "agriculture.source_backed_guidance.review",
    "blocked.high_risk.request_review"
  ]);

  const REQUIRED_BLOCKED_EXECUTION_CHANNELS = Object.freeze([
    "call",
    "message",
    "payment",
    "location",
    "camera",
    "provider",
    "emergency",
    "medical",
    "pharmacy",
    "backend-write",
    "pending-action"
  ]);

  const REQUIRED_STAGED_ACTION_FIELDS = Object.freeze([
    "stagedActionId",
    "stagedActionType",
    "title",
    "summary",
    "reviewOnly",
    "requiresUserApproval",
    "executionAuthority",
    "riskTier",
    "blockedExecutionChannels",
    "evidenceRequirement",
    "sourcePacketRequirement",
    "createdFromPromptFamily",
    "safeUseNotes",
    "limitations"
  ]);

  const TEXT_FIELDS = Object.freeze([
    "stagedActionId",
    "stagedActionType",
    "title",
    "summary",
    "riskTier",
    "evidenceRequirement",
    "sourcePacketRequirement",
    "createdFromPromptFamily",
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

  function validateReviewOnlyStagedAction(action) {
    const failures = [];

    if (!isPlainObject(action)) {
      return {
        ok: false,
        failures: ["action must be an object"]
      };
    }

    for (const field of REQUIRED_STAGED_ACTION_FIELDS) {
      if (!Object.prototype.hasOwnProperty.call(action, field)) {
        failures.push(`missing required field: ${field}`);
      }
    }

    for (const field of TEXT_FIELDS) {
      if (Object.prototype.hasOwnProperty.call(action, field) && !hasNonEmptyText(action[field])) {
        failures.push(`field must be non-empty text: ${field}`);
      }
    }

    if (!ALLOWED_STAGED_ACTION_TYPES.includes(action.stagedActionType)) {
      failures.push(`stagedActionType is not allowed: ${action.stagedActionType}`);
    }

    if (action.reviewOnly !== true) {
      failures.push("reviewOnly must be true");
    }

    if (action.requiresUserApproval !== true) {
      failures.push("requiresUserApproval must be true");
    }

    if (action.executionAuthority !== false) {
      failures.push("executionAuthority must be false");
    }

    if (!Array.isArray(action.blockedExecutionChannels)) {
      failures.push("blockedExecutionChannels must be an array");
    } else if (!includesEvery(action.blockedExecutionChannels, REQUIRED_BLOCKED_EXECUTION_CHANNELS)) {
      failures.push("blockedExecutionChannels must include every required blocked channel");
    }

    return {
      ok: failures.length === 0,
      failures
    };
  }

  function isSafeReviewOnlyStagedAction(action) {
    return validateReviewOnlyStagedAction(action).ok;
  }

  function createReviewOnlyStagedAction(input) {
    const action = Object.assign({}, input, {
      reviewOnly: true,
      requiresUserApproval: true,
      executionAuthority: false,
      blockedExecutionChannels: Array.from(new Set([
        ...REQUIRED_BLOCKED_EXECUTION_CHANNELS,
        ...Array.isArray(input && input.blockedExecutionChannels) ? input.blockedExecutionChannels : []
      ]))
    });

    return {
      action,
      validation: validateReviewOnlyStagedAction(action)
    };
  }

  return Object.freeze({
    ALLOWED_STAGED_ACTION_TYPES,
    REQUIRED_BLOCKED_EXECUTION_CHANNELS,
    REQUIRED_STAGED_ACTION_FIELDS,
    isSafeReviewOnlyStagedAction,
    validateReviewOnlyStagedAction,
    createReviewOnlyStagedAction
  });
});
