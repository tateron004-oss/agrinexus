(function nexusFarmerModeFeatureFlagFactory(root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory(); else root.NexusFarmerModeFeatureFlagContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusFarmerModeFeatureFlagModule() {
  const FARMER_MODE_FEATURE_FLAG_NAME = "NEXUS_FARMER_MODE_VISIBLE_ENABLED";

  const DEFAULT_FARMER_MODE_FEATURE_FLAG_STATE = Object.freeze({
    flagName: FARMER_MODE_FEATURE_FLAG_NAME,
    enabled: false,
    visibleUiAllowed: false,
    farmerModeReviewAllowed: false,
    sourceBackedFarmerGuidancePreviewAllowed: false,
    farmerProfileSummaryPreviewAllowed: false,
    cropFieldSupportPreviewAllowed: false,
    agritradeReviewPreviewAllowed: false,
    extensionEscalationPreviewAllowed: false,
    farmerModeRuntimeAllowed: false,
    liveFarmerModeRuntimeAllowed: false,
    agricultureConnectorRuntimeAllowed: false,
    marketSourceRetrievalRuntimeAllowed: false,
    unsourcedAgronomicAdviceAllowed: false,
    diagnosisClaimAllowed: false,
    chemicalApplicationInstructionAllowed: false,
    marketplaceTransactionAllowed: false,
    paymentExecutionAllowed: false,
    buyerSellerContactAllowed: false,
    providerOrExtensionContactAllowed: false,
    transportationDispatchAllowed: false,
    emergencyDispatchAllowed: false,
    locationSharingAllowed: false,
    cameraActivationAllowed: false,
    microphoneActivationAllowed: false,
    medicalPharmacyExecutionAllowed: false,
    identityAccountProfileActionAllowed: false,
    policyBypassAllowed: false,
    confirmationBypassAllowed: false,
    permissionBypassAllowed: false,
    firstTurnExecutionAllowed: false,
    laterTurnExecutionAllowed: false,
    standardUserFarmerModeMutationAllowed: false,
    backendWriteAllowed: false,
    storageWriteAllowed: false,
    networkAllowed: false,
    auditWriteAllowed: false,
    executionAuthority: false,
    noExecution: true
  });

  const PROTECTED_FARMER_MODE_FLAG_FIELDS = Object.freeze([
    "farmerModeReviewAllowed",
    "sourceBackedFarmerGuidancePreviewAllowed",
    "farmerProfileSummaryPreviewAllowed",
    "cropFieldSupportPreviewAllowed",
    "agritradeReviewPreviewAllowed",
    "extensionEscalationPreviewAllowed",
    "farmerModeRuntimeAllowed",
    "liveFarmerModeRuntimeAllowed",
    "agricultureConnectorRuntimeAllowed",
    "marketSourceRetrievalRuntimeAllowed",
    "unsourcedAgronomicAdviceAllowed",
    "diagnosisClaimAllowed",
    "chemicalApplicationInstructionAllowed",
    "marketplaceTransactionAllowed",
    "paymentExecutionAllowed",
    "buyerSellerContactAllowed",
    "providerOrExtensionContactAllowed",
    "transportationDispatchAllowed",
    "emergencyDispatchAllowed",
    "locationSharingAllowed",
    "cameraActivationAllowed",
    "microphoneActivationAllowed",
    "medicalPharmacyExecutionAllowed",
    "identityAccountProfileActionAllowed",
    "policyBypassAllowed",
    "confirmationBypassAllowed",
    "permissionBypassAllowed",
    "firstTurnExecutionAllowed",
    "laterTurnExecutionAllowed",
    "standardUserFarmerModeMutationAllowed",
    "backendWriteAllowed",
    "storageWriteAllowed",
    "networkAllowed",
    "auditWriteAllowed",
    "executionAuthority"
  ]);

  function normalizeFarmerModeFeatureFlagState(input = {}) {
    const requested = input && typeof input === "object" ? input : {};
    const normalized = {
      ...DEFAULT_FARMER_MODE_FEATURE_FLAG_STATE,
      enabled: requested.enabled === true,
      visibleUiAllowed: requested.enabled === true && requested.visibleUiAllowed === true,
      noExecution: true
    };

    for (const field of PROTECTED_FARMER_MODE_FLAG_FIELDS) {
      normalized[field] = false;
    }

    return Object.freeze(normalized);
  }

  function isFarmerModeVisibleFeatureEnabled(state) {
    const normalized = normalizeFarmerModeFeatureFlagState(state);
    return normalized.enabled === true && normalized.visibleUiAllowed === true && normalized.noExecution === true;
  }

  return Object.freeze({
    FARMER_MODE_FEATURE_FLAG_NAME,
    DEFAULT_FARMER_MODE_FEATURE_FLAG_STATE,
    PROTECTED_FARMER_MODE_FLAG_FIELDS,
    normalizeFarmerModeFeatureFlagState,
    isFarmerModeVisibleFeatureEnabled
  });
});
