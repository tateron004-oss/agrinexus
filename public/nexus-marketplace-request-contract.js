(function initNexusMarketplaceRequestContract(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
    return;
  }

  root.NexusMarketplaceRequestContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function buildNexusMarketplaceRequestContract() {
  "use strict";

  const SUPPORTED_MARKETPLACE_REQUEST_TYPES = Object.freeze([
    "marketplace-request",
    "purchase-intent",
    "product-inquiry",
    "seller-question",
    "availability-review",
    "quote-request",
    "logistics-interest",
    "clarification-required",
    "blocked-request",
    "unknown"
  ]);

  const SUPPORTED_MARKETPLACE_CATEGORIES = Object.freeze([
    "agriculture-input",
    "produce-purchase-inquiry",
    "seller-product-question",
    "marketplace-availability-review",
    "price-quote-review-only",
    "logistics-interest",
    "payment-related-blocked",
    "user-provided-marketplace-request"
  ]);

  const REQUIRED_MARKETPLACE_REQUEST_FIELDS = Object.freeze([
    "marketplaceRequestId",
    "marketplaceRequestType",
    "productIdentityResolutionId",
    "productDisplayName",
    "sellerIdentityResolutionId",
    "sellerDisplayName",
    "requestedMarketplaceCategory",
    "requestedQuantity",
    "userProvidedBudgetOrPrice",
    "availabilityRequirement",
    "logisticsRequirement",
    "communicationIntentRequirement",
    "requestDraft",
    "sellerConfirmationRequired",
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
    "checkout",
    "money-movement",
    "order-placement",
    "seller-dispatch",
    "seller-handoff",
    "cart-finalization",
    "purchase-confirmation",
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

  function validateMarketplaceRequestIntent(request) {
    const failures = [];
    if (!isPlainObject(request)) {
      return { ok: false, previewAllowed: false, executionAllowed: false, failures: ["marketplace request must be an object"] };
    }

    REQUIRED_MARKETPLACE_REQUEST_FIELDS.forEach(field => {
      if (!Object.prototype.hasOwnProperty.call(request, field)) failures.push(`missing required field: ${field}`);
    });

    [
      "marketplaceRequestId",
      "marketplaceRequestType",
      "productIdentityResolutionId",
      "productDisplayName",
      "sellerIdentityResolutionId",
      "sellerDisplayName",
      "requestedMarketplaceCategory",
      "requestedQuantity",
      "userProvidedBudgetOrPrice",
      "availabilityRequirement",
      "logisticsRequirement",
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

    if (!SUPPORTED_MARKETPLACE_REQUEST_TYPES.includes(request.marketplaceRequestType)) {
      failures.push("marketplaceRequestType must be supported");
    }
    if (!SUPPORTED_MARKETPLACE_CATEGORIES.includes(request.requestedMarketplaceCategory)) {
      failures.push("requestedMarketplaceCategory must be supported");
    }
    if (request.sellerConfirmationRequired !== true) failures.push("sellerConfirmationRequired must be true");
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

  function isSafeMarketplaceRequestIntent(request) {
    return validateMarketplaceRequestIntent(request).ok === true;
  }

  function createMarketplaceRequestIntent(input) {
    const request = Object.assign({}, input, {
      sellerConfirmationRequired: true,
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
      validation: validateMarketplaceRequestIntent(request)
    });
  }

  return Object.freeze({
    SUPPORTED_MARKETPLACE_REQUEST_TYPES,
    SUPPORTED_MARKETPLACE_CATEGORIES,
    REQUIRED_MARKETPLACE_REQUEST_FIELDS,
    BLOCKED_EXECUTION_CHANNELS,
    validateMarketplaceRequestIntent,
    isSafeMarketplaceRequestIntent,
    createMarketplaceRequestIntent
  });
});
