(function initNexusPaymentRiskEvidenceMapping(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory(require("./nexus-payment-intent-contract.js"));
    return;
  }

  root.NexusPaymentRiskEvidenceMapping = factory(root.NexusPaymentIntentContract);
})(typeof globalThis !== "undefined" ? globalThis : this, function buildNexusPaymentRiskEvidenceMapping(contract) {
  "use strict";

  const RESTRICTED_PAYMENT_TERMS = Object.freeze([
    "payment",
    "pay",
    "paid",
    "wallet",
    "transfer",
    "mobile money",
    "checkout",
    "money",
    "credential",
    "refund",
    "reversal",
    "provider-payment",
    "purchase"
  ]);

  function asText(value) {
    return typeof value === "string" ? value.toLowerCase() : "";
  }

  function isAmbiguousPayee(intent) {
    return asText(intent.payeeIdentityResolutionId).includes("ambiguous")
      || asText(intent.payeeDisplayName).includes("multiple possible")
      || intent.paymentIntentType === "clarification-required";
  }

  function isAmbiguousAmount(intent) {
    return asText(intent.amountDisplay).includes("not yet clarified")
      || asText(intent.currencyDisplay).includes("not yet clarified");
  }

  function derivePaymentRiskTier() {
    return "restricted";
  }

  function describePayeeIdentityStatus(intent) {
    return isAmbiguousPayee(intent)
      ? "clarification required before payee identity can be trusted"
      : `visible payee identity required: ${intent.payeeDisplayName}`;
  }

  function describeAmountCurrencyStatus(intent) {
    return isAmbiguousAmount(intent)
      ? "clarification required before amount or currency can be trusted"
      : `visible amount and currency required before future action: ${intent.amountDisplay}; ${intent.currencyDisplay}`;
  }

  function buildPaymentEvidenceRequirement(intent, riskTier) {
    const parts = [
      describePayeeIdentityStatus(intent),
      describeAmountCurrencyStatus(intent),
      `visible payment purpose required: ${intent.paymentPurpose}`,
      "payment provider readiness required",
      "visible user approval required",
      "payee confirmation required",
      "final execution gate required",
      "audit-ready state required",
      "source packet required before future payment action"
    ];

    if (riskTier === "restricted") {
      parts.push("restricted payment category cannot be executed by this lane");
    }
    if (isAmbiguousPayee(intent) || isAmbiguousAmount(intent)) {
      parts.push("clarification required before any future payment review can proceed");
    }

    return parts.join("; ");
  }

  function mapPaymentRiskEvidence(input) {
    const riskTier = derivePaymentRiskTier(input || {});
    const evidenceRequirement = buildPaymentEvidenceRequirement(input || {}, riskTier);
    const enriched = Object.assign({}, input, {
      riskTier,
      evidenceRequirement,
      sourcePacketRequirement: input && input.sourcePacketRequirement
        ? input.sourcePacketRequirement
        : "source packet required before future payment, checkout, wallet transfer, refund, or reversal"
    });
    const created = contract.createPaymentIntent(enriched);

    return Object.freeze({
      intent: created.intent,
      validation: created.validation,
      mapping: Object.freeze({
        riskTier,
        evidenceRequirement,
        payeeIdentityStatus: describePayeeIdentityStatus(created.intent),
        amountCurrencyStatus: describeAmountCurrencyStatus(created.intent),
        clarificationRequired: isAmbiguousPayee(created.intent) || isAmbiguousAmount(created.intent),
        dryRunAllowed: created.validation.ok === true,
        executionAllowed: false,
        paymentAllowed: false,
        walletTransferAllowed: false,
        checkoutAllowed: false,
        credentialStorageAllowed: false,
        providerPaymentIntentAllowed: false
      })
    });
  }

  return Object.freeze({
    RESTRICTED_PAYMENT_TERMS,
    derivePaymentRiskTier,
    buildPaymentEvidenceRequirement,
    mapPaymentRiskEvidence
  });
});
