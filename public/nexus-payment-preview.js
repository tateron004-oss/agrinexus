(function initNexusPaymentPreview(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory(
      require("./nexus-payment-risk-evidence-mapping.js"),
      require("./nexus-payment-preview-flag-guard.js")
    );
    return;
  }

  root.NexusPaymentPreview = factory(
    root.NexusPaymentRiskEvidenceMapping,
    root.NexusPaymentPreviewFlagGuard
  );
})(typeof globalThis !== "undefined" ? globalThis : this, function buildNexusPaymentPreview(mapper, flagGuard) {
  "use strict";

  function hiddenPaymentPreview(reason) {
    return Object.freeze({
      visible: false,
      reason,
      executionAllowed: false,
      executionAuthority: false,
      paymentAllowed: false,
      walletTransferAllowed: false,
      checkoutAllowed: false,
      credentialStorageAllowed: false,
      providerPaymentIntentAllowed: false,
      providerHandoffAllowed: false,
      communicationAllowed: false,
      externalNavigationAllowed: false,
      nativeBridgeAllowed: false,
      networkAllowed: false,
      storageWriteAllowed: false,
      backendWriteAllowed: false,
      controls: Object.freeze([]),
      links: Object.freeze([]),
      eventHandlers: Object.freeze([])
    });
  }

  function buildPaymentPreview(input, options) {
    const mapped = mapper.mapPaymentRiskEvidence(input || {});
    const allowed = flagGuard.isPaymentPreviewAllowed(mapped.intent, options);

    if (!allowed.previewAllowed) {
      return hiddenPaymentPreview("flag-or-context-disabled");
    }

    return Object.freeze({
      visible: true,
      title: "Review payment safety packet",
      payeeDisplayName: mapped.intent.payeeDisplayName,
      payerDisplayName: mapped.intent.payerDisplayName,
      paymentCategory: mapped.intent.paymentCategory,
      amountDisplay: mapped.intent.amountDisplay,
      currencyDisplay: mapped.intent.currencyDisplay,
      paymentPurpose: mapped.intent.paymentPurpose,
      paymentMethodPreference: mapped.intent.paymentMethodPreference,
      providerRequirement: mapped.intent.providerRequirement,
      consentRequirement: mapped.intent.consentRequirement,
      dryRunPacket: mapped.intent.dryRunPacket,
      riskTier: mapped.intent.riskTier,
      evidenceRequirement: mapped.intent.evidenceRequirement,
      sourcePacketRequirement: mapped.intent.sourcePacketRequirement,
      payeeConfirmationRequired: true,
      userApprovalRequired: true,
      finalExecutionGateRequired: true,
      safeUseNotes: mapped.intent.safeUseNotes,
      limitations: mapped.intent.limitations,
      executionAllowed: false,
      executionAuthority: false,
      paymentAllowed: false,
      walletTransferAllowed: false,
      checkoutAllowed: false,
      credentialStorageAllowed: false,
      providerPaymentIntentAllowed: false,
      providerHandoffAllowed: false,
      communicationAllowed: false,
      externalNavigationAllowed: false,
      nativeBridgeAllowed: false,
      networkAllowed: false,
      storageWriteAllowed: false,
      backendWriteAllowed: false,
      controls: Object.freeze([]),
      links: Object.freeze([]),
      eventHandlers: Object.freeze([]),
      mapping: mapped.mapping
    });
  }

  return Object.freeze({
    hiddenPaymentPreview,
    buildPaymentPreview
  });
});
