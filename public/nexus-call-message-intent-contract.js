(function initNexusCallMessageIntentContract(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
    return;
  }

  root.NexusCallMessageIntentContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function buildNexusCallMessageIntentContract() {
  "use strict";

  const SUPPORTED_COMMUNICATION_TYPES = Object.freeze([
    "call",
    "message",
    "draft",
    "channel-selection",
    "recipient-confirmation",
    "unknown"
  ]);

  const SUPPORTED_COMMUNICATION_CHANNELS = Object.freeze([
    "phone-call",
    "SMS",
    "WhatsApp",
    "Telegram",
    "email",
    "in-app-message",
    "user-provided-channel"
  ]);

  const REQUIRED_COMMUNICATION_INTENT_FIELDS = Object.freeze([
    "communicationIntentId",
    "sourceSurface",
    "communicationType",
    "recipientIdentityResolutionId",
    "recipientDisplayName",
    "recipientChannelType",
    "recipientChannelValue",
    "messageDraft",
    "callPurpose",
    "language",
    "riskTier",
    "evidenceRequirement",
    "sourcePacketRequirement",
    "permissionState",
    "auditState",
    "channelConfirmationRequired",
    "userApprovalRequired",
    "finalExecutionGateRequired",
    "executionAuthority",
    "providerHandoffAllowed",
    "externalNavigationAllowed",
    "nativeBridgeAllowed",
    "networkAllowed",
    "storageWriteAllowed",
    "backendWriteAllowed",
    "blockedExecutionChannels",
    "safeUseNotes",
    "limitations"
  ]);

  const BLOCKED_EXECUTION_CHANNELS = Object.freeze([
    "call",
    "message",
    "SMS",
    "WhatsApp",
    "Telegram",
    "email",
    "in-app-message",
    "provider-dispatch",
    "provider-handoff",
    "external-navigation",
    "native-bridge",
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

  function validateCallMessageIntent(intent) {
    const failures = [];
    if (!isPlainObject(intent)) {
      return { ok: false, previewAllowed: false, executionAllowed: false, failures: ["call/message intent must be an object"] };
    }

    REQUIRED_COMMUNICATION_INTENT_FIELDS.forEach(field => {
      if (!Object.prototype.hasOwnProperty.call(intent, field)) failures.push(`missing required field: ${field}`);
    });

    [
      "communicationIntentId",
      "sourceSurface",
      "communicationType",
      "recipientIdentityResolutionId",
      "recipientDisplayName",
      "recipientChannelType",
      "recipientChannelValue",
      "language",
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

    if (!SUPPORTED_COMMUNICATION_TYPES.includes(intent.communicationType)) {
      failures.push("communicationType must be supported");
    }
    if (!SUPPORTED_COMMUNICATION_CHANNELS.includes(intent.recipientChannelType)) {
      failures.push("recipientChannelType must be supported");
    }
    if (!hasText(intent.messageDraft) && !hasText(intent.callPurpose)) {
      failures.push("messageDraft or callPurpose must describe the user-visible purpose");
    }
    if (!stateIsReady(intent.permissionState)) failures.push("permissionState must be ready or not-required");
    if (!stateIsReady(intent.auditState)) failures.push("auditState must be ready or not-required");
    if (intent.channelConfirmationRequired !== true) failures.push("channelConfirmationRequired must be true");
    if (intent.userApprovalRequired !== true) failures.push("userApprovalRequired must be true");
    if (intent.finalExecutionGateRequired !== true) failures.push("finalExecutionGateRequired must be true");
    if (intent.executionAuthority !== false) failures.push("executionAuthority must be false");
    if (intent.providerHandoffAllowed !== false) failures.push("providerHandoffAllowed must be false");
    if (intent.externalNavigationAllowed !== false) failures.push("externalNavigationAllowed must be false");
    if (intent.nativeBridgeAllowed !== false) failures.push("nativeBridgeAllowed must be false");
    if (intent.networkAllowed !== false) failures.push("networkAllowed must be false");
    if (intent.storageWriteAllowed !== false) failures.push("storageWriteAllowed must be false");
    if (intent.backendWriteAllowed !== false) failures.push("backendWriteAllowed must be false");

    if (!includesEvery(intent.blockedExecutionChannels, BLOCKED_EXECUTION_CHANNELS)) {
      failures.push("blockedExecutionChannels must include every required blocked channel");
    }

    return {
      ok: failures.length === 0,
      previewAllowed: failures.length === 0,
      executionAllowed: false,
      failures
    };
  }

  function isSafeCallMessageIntent(intent) {
    return validateCallMessageIntent(intent).ok === true;
  }

  function createCallMessageIntent(input) {
    const intent = Object.assign({}, input, {
      channelConfirmationRequired: true,
      userApprovalRequired: true,
      finalExecutionGateRequired: true,
      executionAuthority: false,
      providerHandoffAllowed: false,
      externalNavigationAllowed: false,
      nativeBridgeAllowed: false,
      networkAllowed: false,
      storageWriteAllowed: false,
      backendWriteAllowed: false,
      blockedExecutionChannels: Array.from(new Set([
        ...BLOCKED_EXECUTION_CHANNELS,
        ...Array.isArray(input && input.blockedExecutionChannels) ? input.blockedExecutionChannels : []
      ]))
    });

    return {
      intent,
      validation: validateCallMessageIntent(intent)
    };
  }

  return Object.freeze({
    SUPPORTED_COMMUNICATION_TYPES,
    SUPPORTED_COMMUNICATION_CHANNELS,
    REQUIRED_COMMUNICATION_INTENT_FIELDS,
    BLOCKED_EXECUTION_CHANNELS,
    validateCallMessageIntent,
    isSafeCallMessageIntent,
    createCallMessageIntent
  });
});
