(function initNexusPaymentIntentContract(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
    return;
  }

  root.NexusPaymentIntentContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function buildNexusPaymentIntentContract() {
  "use strict";

  const SUPPORTED_PAYMENT_INTENT_TYPES = Object.freeze([
    "payment-intent",
    "mobile-money-intent",
    "marketplace-payment-intent",
    "service-fee-intent",
    "transportation-fare-intent",
    "refund-review",
    "reversal-review",
    "clarification-required",
    "blocked-payment-request",
    "unknown"
  ]);

  const SUPPORTED_PAYMENT_CATEGORIES = Object.freeze([
    "marketplace-payment-review",
    "service-payment-review",
    "mobile-money-transfer-review",
    "transportation-fare-review",
    "provider-fee-review",
    "quote-payment-review",
    "refund-reversal-review",
    "ambiguous-payment-review",
    "blocked-payment-execution"
  ]);

  const REQUIRED_PAYMENT_INTENT_FIELDS = Object.freeze([
    "paymentIntentId",
    "paymentIntentType",
    "payeeIdentityResolutionId",
    "payeeDisplayName",
    "payerDisplayName",
    "paymentCategory",
    "amountDisplay",
    "currencyDisplay",
    "paymentPurpose",
    "paymentMethodPreference",
    "providerRequirement",
    "consentRequirement",
    "dryRunPacket",
    "payeeConfirmationRequired",
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
    "payment",
    "wallet-transfer",
    "mobile-money-transfer",
    "checkout",
    "money-movement",
    "credential-storage",
    "payment-api-call",
    "provider-payment-intent",
    "order-placement",
    "purchase-confirmation",
    "seller-handoff",
    "provider-handoff",
    "call",
    "message",
    "SMS",
    "WhatsApp",
    "Telegram",
    "email",
    "location",
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

  function validatePaymentIntent(intent) {
    const failures = [];
    if (!isPlainObject(intent)) {
      return { ok: false, previewAllowed: false, dryRunAllowed: false, executionAllowed: false, failures: ["payment intent must be an object"] };
    }

    REQUIRED_PAYMENT_INTENT_FIELDS.forEach(field => {
      if (!Object.prototype.hasOwnProperty.call(intent, field)) failures.push(`missing required field: ${field}`);
    });

    [
      "paymentIntentId",
      "paymentIntentType",
      "payeeIdentityResolutionId",
      "payeeDisplayName",
      "payerDisplayName",
      "paymentCategory",
      "amountDisplay",
      "currencyDisplay",
      "paymentPurpose",
      "paymentMethodPreference",
      "providerRequirement",
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

    if (!SUPPORTED_PAYMENT_INTENT_TYPES.includes(intent.paymentIntentType)) failures.push("paymentIntentType must be supported");
    if (!SUPPORTED_PAYMENT_CATEGORIES.includes(intent.paymentCategory)) failures.push("paymentCategory must be supported");
    if (intent.payeeConfirmationRequired !== true) failures.push("payeeConfirmationRequired must be true");
    if (intent.userApprovalRequired !== true) failures.push("userApprovalRequired must be true");
    if (intent.finalExecutionGateRequired !== true) failures.push("finalExecutionGateRequired must be true");
    if (intent.executionAuthority !== false) failures.push("executionAuthority must be false");
    if (!includesEvery(intent.blockedExecutionChannels, BLOCKED_EXECUTION_CHANNELS)) {
      failures.push("blockedExecutionChannels must include every required blocked channel");
    }

    return {
      ok: failures.length === 0,
      previewAllowed: failures.length === 0,
      dryRunAllowed: failures.length === 0,
      executionAllowed: false,
      failures
    };
  }

  function isSafePaymentIntent(intent) {
    return validatePaymentIntent(intent).ok === true;
  }

  function createPaymentIntent(input) {
    const intent = Object.assign({}, input, {
      payeeConfirmationRequired: true,
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
      validation: validatePaymentIntent(intent)
    });
  }

  return Object.freeze({
    SUPPORTED_PAYMENT_INTENT_TYPES,
    SUPPORTED_PAYMENT_CATEGORIES,
    REQUIRED_PAYMENT_INTENT_FIELDS,
    BLOCKED_EXECUTION_CHANNELS,
    validatePaymentIntent,
    isSafePaymentIntent,
    createPaymentIntent
  });
});
