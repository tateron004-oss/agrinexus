(function nexusMarketplaceIntelligenceFeatureFlagFactory(root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory(); else root.NexusMarketplaceIntelligenceFeatureFlagContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusMarketplaceIntelligenceFeatureFlagModule() {
  const MARKETPLACE_INTELLIGENCE_FEATURE_FLAG_NAME = "NEXUS_MARKETPLACE_INTELLIGENCE_VISIBLE_ENABLED";

  const DEFAULT_MARKETPLACE_INTELLIGENCE_FEATURE_FLAG_STATE = Object.freeze({
    enabled: false,
    visibleUiAllowed: false,
    marketplaceReviewAllowed: false,
    sourceBackedMarketplaceGuidancePreviewAllowed: false,
    listingSummaryPreviewAllowed: false,
    priceAvailabilitySummaryPreviewAllowed: false,
    counterpartyEscalationPreviewAllowed: false,
    marketplaceRuntimeAllowed: false,
    liveMarketplaceAdvisorAllowed: false,
    sourceRetrievalRuntimeAllowed: false,
    buyExecutionAllowed: false,
    sellExecutionAllowed: false,
    orderCreationAllowed: false,
    checkoutExecutionAllowed: false,
    paymentExecutionAllowed: false,
    marketplaceTransactionAllowed: false,
    inventoryReservationAllowed: false,
    priceGuaranteeClaimAllowed: false,
    availabilityGuaranteeClaimAllowed: false,
    buyerSellerContactAllowed: false,
    providerConnectionClaimAllowed: false,
    completedActionClaimAllowed: false,
    shippingTransportationDispatchAllowed: false,
    communicationExecutionAllowed: false,
    locationSharingAllowed: false,
    identityAccountProfileActionAllowed: false,
    policyBypassAllowed: false,
    confirmationBypassAllowed: false,
    permissionBypassAllowed: false,
    firstTurnExecutionAllowed: false,
    laterTurnExecutionAllowed: false,
    standardUserMarketplaceBrainMutationAllowed: false,
    backendWriteAllowed: false,
    storageWriteAllowed: false,
    networkAllowed: false,
    auditWriteAllowed: false,
    executionAuthority: false,
    noExecution: true
  });

  const PROTECTED_MARKETPLACE_INTELLIGENCE_FLAG_FIELDS = Object.freeze([
    "marketplaceReviewAllowed",
    "sourceBackedMarketplaceGuidancePreviewAllowed",
    "listingSummaryPreviewAllowed",
    "priceAvailabilitySummaryPreviewAllowed",
    "counterpartyEscalationPreviewAllowed",
    "marketplaceRuntimeAllowed",
    "liveMarketplaceAdvisorAllowed",
    "sourceRetrievalRuntimeAllowed",
    "buyExecutionAllowed",
    "sellExecutionAllowed",
    "orderCreationAllowed",
    "checkoutExecutionAllowed",
    "paymentExecutionAllowed",
    "marketplaceTransactionAllowed",
    "inventoryReservationAllowed",
    "priceGuaranteeClaimAllowed",
    "availabilityGuaranteeClaimAllowed",
    "buyerSellerContactAllowed",
    "providerConnectionClaimAllowed",
    "completedActionClaimAllowed",
    "shippingTransportationDispatchAllowed",
    "communicationExecutionAllowed",
    "locationSharingAllowed",
    "identityAccountProfileActionAllowed",
    "policyBypassAllowed",
    "confirmationBypassAllowed",
    "permissionBypassAllowed",
    "firstTurnExecutionAllowed",
    "laterTurnExecutionAllowed",
    "standardUserMarketplaceBrainMutationAllowed",
    "backendWriteAllowed",
    "storageWriteAllowed",
    "networkAllowed",
    "auditWriteAllowed",
    "executionAuthority"
  ]);

  function normalizeMarketplaceIntelligenceFeatureFlagState(input = {}) {
    const requested = input && typeof input === "object" ? input : {};
    const normalized = {
      ...DEFAULT_MARKETPLACE_INTELLIGENCE_FEATURE_FLAG_STATE,
      enabled: requested.enabled === true,
      visibleUiAllowed: requested.enabled === true && requested.visibleUiAllowed === true,
      noExecution: true
    };

    for (const field of PROTECTED_MARKETPLACE_INTELLIGENCE_FLAG_FIELDS) {
      normalized[field] = false;
    }

    return Object.freeze(normalized);
  }

  function isMarketplaceIntelligenceVisibleFeatureEnabled(state) {
    const normalized = normalizeMarketplaceIntelligenceFeatureFlagState(state);
    return normalized.enabled === true && normalized.visibleUiAllowed === true && normalized.noExecution === true;
  }

  return Object.freeze({
    MARKETPLACE_INTELLIGENCE_FEATURE_FLAG_NAME,
    DEFAULT_MARKETPLACE_INTELLIGENCE_FEATURE_FLAG_STATE,
    PROTECTED_MARKETPLACE_INTELLIGENCE_FLAG_FIELDS,
    normalizeMarketplaceIntelligenceFeatureFlagState,
    isMarketplaceIntelligenceVisibleFeatureEnabled
  });
});
