(function initNexusMarketplaceRequestRiskEvidenceMapping(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory(require("./nexus-marketplace-request-contract.js"));
    return;
  }

  root.NexusMarketplaceRequestRiskEvidenceMapping = factory(root.NexusMarketplaceRequestContract);
})(typeof globalThis !== "undefined" ? globalThis : this, function buildNexusMarketplaceRequestRiskEvidenceMapping(contract) {
  "use strict";

  const RESTRICTED_TERMS = Object.freeze([
    "payment",
    "checkout",
    "money",
    "pay",
    "paid",
    "order",
    "purchase confirmation",
    "dispatch",
    "medical",
    "diagnosis",
    "prescription",
    "pharmacy",
    "emergency",
    "location",
    "camera"
  ]);

  const HIGH_RISK_CATEGORIES = Object.freeze([
    "seller-product-question",
    "price-quote-review-only",
    "logistics-interest"
  ]);

  function asText(value) {
    return typeof value === "string" ? value.toLowerCase() : "";
  }

  function includesTerm(value, terms) {
    const text = asText(value);
    return terms.some(term => text.includes(term));
  }

  function isAmbiguousProduct(request) {
    return asText(request.productIdentityResolutionId).includes("ambiguous")
      || asText(request.productDisplayName).includes("multiple possible")
      || request.marketplaceRequestType === "clarification-required";
  }

  function isAmbiguousSeller(request) {
    return asText(request.sellerIdentityResolutionId).includes("ambiguous")
      || asText(request.sellerDisplayName).includes("multiple possible")
      || request.marketplaceRequestType === "clarification-required";
  }

  function isAmbiguousQuantityOrPrice(request) {
    return asText(request.requestedQuantity).includes("not yet clarified")
      || asText(request.userProvidedBudgetOrPrice).includes("not yet clarified");
  }

  function deriveMarketplaceRequestRiskTier(request) {
    const fields = [
      request.requestedMarketplaceCategory,
      request.marketplaceRequestType,
      request.requestDraft
    ];
    if (request.requestedMarketplaceCategory === "payment-related-blocked") return "restricted";
    if (fields.some(field => includesTerm(field, RESTRICTED_TERMS))) return "restricted";
    if (HIGH_RISK_CATEGORIES.includes(request.requestedMarketplaceCategory)) return "high";
    if (isAmbiguousProduct(request) || isAmbiguousSeller(request) || isAmbiguousQuantityOrPrice(request)) return "high";
    if (request.requestedMarketplaceCategory === "marketplace-availability-review") return "low";
    return "medium";
  }

  function describeProductIdentityStatus(request) {
    return isAmbiguousProduct(request)
      ? "clarification required before product identity can be trusted"
      : `visible product identity required: ${request.productDisplayName}`;
  }

  function describeSellerIdentityStatus(request) {
    return isAmbiguousSeller(request)
      ? "clarification required before seller identity can be trusted"
      : `visible seller identity required: ${request.sellerDisplayName}`;
  }

  function describeQuantityPriceStatus(request) {
    return isAmbiguousQuantityOrPrice(request)
      ? "clarification required before quantity or price intent can be trusted"
      : `quantity and price interest preserved for later source review: ${request.requestedQuantity}; ${request.userProvidedBudgetOrPrice}`;
  }

  function buildMarketplaceRequestEvidenceRequirement(request, riskTier) {
    const parts = [
      describeProductIdentityStatus(request),
      describeSellerIdentityStatus(request),
      describeQuantityPriceStatus(request),
      "visible user approval required",
      "seller confirmation required",
      "final execution gate required",
      "audit-ready state required",
      "source packet required before future marketplace action"
    ];

    if (riskTier === "restricted") {
      parts.push("restricted category cannot be executed by this lane");
    }
    if (isAmbiguousProduct(request) || isAmbiguousSeller(request) || isAmbiguousQuantityOrPrice(request)) {
      parts.push("clarification required before any future marketplace request can proceed");
    }

    return parts.join("; ");
  }

  function mapMarketplaceRequestRiskEvidence(input) {
    const riskTier = deriveMarketplaceRequestRiskTier(input || {});
    const evidenceRequirement = buildMarketplaceRequestEvidenceRequirement(input || {}, riskTier);
    const enriched = Object.assign({}, input, {
      riskTier,
      evidenceRequirement,
      sourcePacketRequirement: input && input.sourcePacketRequirement
        ? input.sourcePacketRequirement
        : "source packet required before future payment, checkout, seller contact, order, or marketplace request"
    });
    const created = contract.createMarketplaceRequestIntent(enriched);

    return Object.freeze({
      request: created.request,
      validation: created.validation,
      mapping: Object.freeze({
        riskTier,
        evidenceRequirement,
        productIdentityStatus: describeProductIdentityStatus(created.request),
        sellerIdentityStatus: describeSellerIdentityStatus(created.request),
        quantityPriceStatus: describeQuantityPriceStatus(created.request),
        clarificationRequired: isAmbiguousProduct(created.request) || isAmbiguousSeller(created.request) || isAmbiguousQuantityOrPrice(created.request),
        executionAllowed: false,
        paymentAllowed: false,
        checkoutAllowed: false,
        orderPlacementAllowed: false,
        sellerHandoffAllowed: false
      })
    });
  }

  return Object.freeze({
    RESTRICTED_TERMS,
    HIGH_RISK_CATEGORIES,
    deriveMarketplaceRequestRiskTier,
    buildMarketplaceRequestEvidenceRequirement,
    mapMarketplaceRequestRiskEvidence
  });
});
