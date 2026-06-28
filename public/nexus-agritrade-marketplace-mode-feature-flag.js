(function nexusAgritradeMarketplaceModeFeatureFlagFactory(root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory(); else root.NexusAgritradeMarketplaceModeFeatureFlagContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusAgritradeMarketplaceModeFeatureFlagModule() {
  const AGRITRADE_MARKETPLACE_MODE_FEATURE_FLAG_NAME = "NEXUS_AGRITRADE_MARKETPLACE_MODE_VISIBLE_ENABLED";

  const DEFAULT_AGRITRADE_MARKETPLACE_MODE_FEATURE_FLAG_STATE = Object.freeze({
    flagName: AGRITRADE_MARKETPLACE_MODE_FEATURE_FLAG_NAME,
    enabled: false,
    visibleUiAllowed: false,
    agritradeMarketplaceModeReviewAllowed: false,
    marketplaceReviewPreviewAllowed: false,
    marketplaceListingPreviewAllowed: false,
    marketplacePricePreviewAllowed: false,
    marketplaceInventoryPreviewAllowed: false,
    buyerDirectoryPreviewAllowed: false,
    sellerDirectoryPreviewAllowed: false,
    quoteReadinessPreviewAllowed: false,
    orderReadinessPreviewAllowed: false,
    paymentBoundaryPreviewAllowed: false,
    escrowBoundaryPreviewAllowed: false,
    logisticsBoundaryPreviewAllowed: false,
    identityBoundaryPreviewAllowed: false,
    communicationsBoundaryPreviewAllowed: false,
    transportationBoundaryPreviewAllowed: false,
    emergencyBoundaryPreviewAllowed: false,
    agritradeMarketplaceModeRuntimeAllowed: false,
    liveAgritradeMarketplaceModeRuntimeAllowed: false,
    marketplaceConnectorRuntimeAllowed: false,
    buyerConnectorRuntimeAllowed: false,
    sellerConnectorRuntimeAllowed: false,
    listingConnectorRuntimeAllowed: false,
    quoteConnectorRuntimeAllowed: false,
    orderConnectorRuntimeAllowed: false,
    inventoryConnectorRuntimeAllowed: false,
    paymentConnectorRuntimeAllowed: false,
    escrowConnectorRuntimeAllowed: false,
    logisticsConnectorRuntimeAllowed: false,
    identityConnectorRuntimeAllowed: false,
    communicationsConnectorRuntimeAllowed: false,
    transportationConnectorRuntimeAllowed: false,
    healthConnectorRuntimeAllowed: false,
    marketplaceTransactionAllowed: false,
    buyExecutionAllowed: false,
    sellExecutionAllowed: false,
    orderCreationAllowed: false,
    quoteAcceptanceAllowed: false,
    listingPublicationAllowed: false,
    buyerContactAllowed: false,
    sellerContactAllowed: false,
    marketplacePartnerContactAllowed: false,
    paymentExecutionAllowed: false,
    escrowExecutionAllowed: false,
    shipmentDispatchAllowed: false,
    locationSharingAllowed: false,
    cameraActivationAllowed: false,
    microphoneActivationAllowed: false,
    identityAccountProfileActionAllowed: false,
    communicationsExecutionAllowed: false,
    transportationDispatchAllowed: false,
    emergencyDispatchAllowed: false,
    medicalRecordsFhirRuntimeAllowed: false,
    medicalAdviceAllowed: false,
    diagnosisClaimAllowed: false,
    prescriptionInstructionAllowed: false,
    policyBypassAllowed: false,
    confirmationBypassAllowed: false,
    permissionBypassAllowed: false,
    firstTurnExecutionAllowed: false,
    laterTurnExecutionAllowed: false,
    standardUserAgritradeMarketplaceModeMutationAllowed: false,
    backendWriteAllowed: false,
    storageWriteAllowed: false,
    networkAllowed: false,
    auditWriteAllowed: false,
    executionAuthority: false,
    noExecution: true
  });

  const PROTECTED_AGRITRADE_MARKETPLACE_MODE_FLAG_FIELDS = Object.freeze([
    "agritradeMarketplaceModeReviewAllowed",
    "marketplaceReviewPreviewAllowed",
    "marketplaceListingPreviewAllowed",
    "marketplacePricePreviewAllowed",
    "marketplaceInventoryPreviewAllowed",
    "buyerDirectoryPreviewAllowed",
    "sellerDirectoryPreviewAllowed",
    "quoteReadinessPreviewAllowed",
    "orderReadinessPreviewAllowed",
    "paymentBoundaryPreviewAllowed",
    "escrowBoundaryPreviewAllowed",
    "logisticsBoundaryPreviewAllowed",
    "identityBoundaryPreviewAllowed",
    "communicationsBoundaryPreviewAllowed",
    "transportationBoundaryPreviewAllowed",
    "emergencyBoundaryPreviewAllowed",
    "agritradeMarketplaceModeRuntimeAllowed",
    "liveAgritradeMarketplaceModeRuntimeAllowed",
    "marketplaceConnectorRuntimeAllowed",
    "buyerConnectorRuntimeAllowed",
    "sellerConnectorRuntimeAllowed",
    "listingConnectorRuntimeAllowed",
    "quoteConnectorRuntimeAllowed",
    "orderConnectorRuntimeAllowed",
    "inventoryConnectorRuntimeAllowed",
    "paymentConnectorRuntimeAllowed",
    "escrowConnectorRuntimeAllowed",
    "logisticsConnectorRuntimeAllowed",
    "identityConnectorRuntimeAllowed",
    "communicationsConnectorRuntimeAllowed",
    "transportationConnectorRuntimeAllowed",
    "healthConnectorRuntimeAllowed",
    "marketplaceTransactionAllowed",
    "buyExecutionAllowed",
    "sellExecutionAllowed",
    "orderCreationAllowed",
    "quoteAcceptanceAllowed",
    "listingPublicationAllowed",
    "buyerContactAllowed",
    "sellerContactAllowed",
    "marketplacePartnerContactAllowed",
    "paymentExecutionAllowed",
    "escrowExecutionAllowed",
    "shipmentDispatchAllowed",
    "locationSharingAllowed",
    "cameraActivationAllowed",
    "microphoneActivationAllowed",
    "identityAccountProfileActionAllowed",
    "communicationsExecutionAllowed",
    "transportationDispatchAllowed",
    "emergencyDispatchAllowed",
    "medicalRecordsFhirRuntimeAllowed",
    "medicalAdviceAllowed",
    "diagnosisClaimAllowed",
    "prescriptionInstructionAllowed",
    "policyBypassAllowed",
    "confirmationBypassAllowed",
    "permissionBypassAllowed",
    "firstTurnExecutionAllowed",
    "laterTurnExecutionAllowed",
    "standardUserAgritradeMarketplaceModeMutationAllowed",
    "backendWriteAllowed",
    "storageWriteAllowed",
    "networkAllowed",
    "auditWriteAllowed",
    "executionAuthority"
  ]);

  function normalizeAgritradeMarketplaceModeFeatureFlagState(input = {}) {
    const requested = input && typeof input === "object" ? input : {};
    const normalized = {
      ...DEFAULT_AGRITRADE_MARKETPLACE_MODE_FEATURE_FLAG_STATE,
      enabled: requested.enabled === true,
      visibleUiAllowed: requested.enabled === true && requested.visibleUiAllowed === true,
      noExecution: true
    };

    for (const field of PROTECTED_AGRITRADE_MARKETPLACE_MODE_FLAG_FIELDS) {
      normalized[field] = false;
    }

    return Object.freeze(normalized);
  }

  function isAgritradeMarketplaceModeVisibleFeatureEnabled(state) {
    const normalized = normalizeAgritradeMarketplaceModeFeatureFlagState(state);
    return normalized.enabled === true && normalized.visibleUiAllowed === true && normalized.noExecution === true;
  }

  return Object.freeze({
    AGRITRADE_MARKETPLACE_MODE_FEATURE_FLAG_NAME,
    DEFAULT_AGRITRADE_MARKETPLACE_MODE_FEATURE_FLAG_STATE,
    PROTECTED_AGRITRADE_MARKETPLACE_MODE_FLAG_FIELDS,
    normalizeAgritradeMarketplaceModeFeatureFlagState,
    isAgritradeMarketplaceModeVisibleFeatureEnabled
  });
});
