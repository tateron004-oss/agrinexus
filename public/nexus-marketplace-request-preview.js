(function initNexusMarketplaceRequestPreview(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory(
      require("./nexus-marketplace-request-risk-evidence-mapping.js"),
      require("./nexus-marketplace-request-preview-flag-guard.js")
    );
    return;
  }

  root.NexusMarketplaceRequestPreview = factory(
    root.NexusMarketplaceRequestRiskEvidenceMapping,
    root.NexusMarketplaceRequestPreviewFlagGuard
  );
})(typeof globalThis !== "undefined" ? globalThis : this, function buildNexusMarketplaceRequestPreview(mapper, flagGuard) {
  "use strict";

  function hiddenMarketplaceRequestPreview(reason) {
    return Object.freeze({
      visible: false,
      reason,
      executionAllowed: false,
      executionAuthority: false,
      paymentAllowed: false,
      checkoutAllowed: false,
      orderPlacementAllowed: false,
      sellerDispatchAllowed: false,
      sellerHandoffAllowed: false,
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

  function buildMarketplaceRequestPreview(input, options) {
    const mapped = mapper.mapMarketplaceRequestRiskEvidence(input || {});
    const allowed = flagGuard.isMarketplaceRequestPreviewAllowed(mapped.request, options);

    if (!allowed.previewAllowed) {
      return hiddenMarketplaceRequestPreview(mapped.request.riskTier === "restricted" ? "restricted-risk" : "flag-or-context-disabled");
    }

    return Object.freeze({
      visible: true,
      title: "Review marketplace request",
      productDisplayName: mapped.request.productDisplayName,
      sellerDisplayName: mapped.request.sellerDisplayName,
      requestedMarketplaceCategory: mapped.request.requestedMarketplaceCategory,
      requestedQuantity: mapped.request.requestedQuantity,
      userProvidedBudgetOrPrice: mapped.request.userProvidedBudgetOrPrice,
      availabilityRequirement: mapped.request.availabilityRequirement,
      logisticsRequirement: mapped.request.logisticsRequirement,
      requestDraft: mapped.request.requestDraft,
      riskTier: mapped.request.riskTier,
      evidenceRequirement: mapped.request.evidenceRequirement,
      sourcePacketRequirement: mapped.request.sourcePacketRequirement,
      sellerConfirmationRequired: true,
      userApprovalRequired: true,
      finalExecutionGateRequired: true,
      safeUseNotes: mapped.request.safeUseNotes,
      limitations: mapped.request.limitations,
      executionAllowed: false,
      executionAuthority: false,
      paymentAllowed: false,
      checkoutAllowed: false,
      orderPlacementAllowed: false,
      sellerDispatchAllowed: false,
      sellerHandoffAllowed: false,
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
    hiddenMarketplaceRequestPreview,
    buildMarketplaceRequestPreview
  });
});
