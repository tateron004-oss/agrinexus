(function initNexusFarmerAgricultureIntelligenceFeatureFlagContract(root) {
  "use strict";

  const FARMER_AGRICULTURE_INTELLIGENCE_FEATURE_FLAG_NAME = "NEXUS_FARMER_AGRICULTURE_INTELLIGENCE_VISIBLE_ENABLED";

  const DEFAULT_FARMER_AGRICULTURE_INTELLIGENCE_FEATURE_FLAG_STATE = Object.freeze({
    flagName: FARMER_AGRICULTURE_INTELLIGENCE_FEATURE_FLAG_NAME,
    enabled: false,
    visibleUiAllowed: false,
    agricultureReviewAllowed: false,
    sourceBackedGuidancePreviewAllowed: false,
    farmerSummaryPreviewAllowed: false,
    extensionEscalationPreviewAllowed: false,
    agricultureRuntimeAllowed: false,
    liveAgricultureAdvisorAllowed: false,
    sourceRetrievalRuntimeAllowed: false,
    unsourcedAgricultureAdviceAllowed: false,
    chemicalApplicationInstructionAllowed: false,
    diagnosisClaimAllowed: false,
    marketplaceTransactionAllowed: false,
    paymentExecutionAllowed: false,
    providerOrExtensionContactAllowed: false,
    weatherOrPestLiveClaimAllowed: false,
    locationSharingAllowed: false,
    cropInsuranceFilingAllowed: false,
    policyBypassAllowed: false,
    confirmationBypassAllowed: false,
    permissionBypassAllowed: false,
    firstTurnExecutionAllowed: false,
    laterTurnExecutionAllowed: false,
    standardUserAgricultureBrainMutationAllowed: false,
    backendWriteAllowed: false,
    storageWriteAllowed: false,
    networkAllowed: false,
    auditWriteAllowed: false,
    executionAuthority: false,
    noExecution: true
  });

  function normalizeFarmerAgricultureIntelligenceFeatureFlagState(input) {
    const candidate = input && typeof input === "object" ? input : {};
    const enabled = candidate.enabled === true;
    return Object.freeze({
      flagName: FARMER_AGRICULTURE_INTELLIGENCE_FEATURE_FLAG_NAME,
      enabled,
      visibleUiAllowed: enabled === true && candidate.visibleUiAllowed === true,
      agricultureReviewAllowed: false,
      sourceBackedGuidancePreviewAllowed: false,
      farmerSummaryPreviewAllowed: false,
      extensionEscalationPreviewAllowed: false,
      agricultureRuntimeAllowed: false,
      liveAgricultureAdvisorAllowed: false,
      sourceRetrievalRuntimeAllowed: false,
      unsourcedAgricultureAdviceAllowed: false,
      chemicalApplicationInstructionAllowed: false,
      diagnosisClaimAllowed: false,
      marketplaceTransactionAllowed: false,
      paymentExecutionAllowed: false,
      providerOrExtensionContactAllowed: false,
      weatherOrPestLiveClaimAllowed: false,
      locationSharingAllowed: false,
      cropInsuranceFilingAllowed: false,
      policyBypassAllowed: false,
      confirmationBypassAllowed: false,
      permissionBypassAllowed: false,
      firstTurnExecutionAllowed: false,
      laterTurnExecutionAllowed: false,
      standardUserAgricultureBrainMutationAllowed: false,
      backendWriteAllowed: false,
      storageWriteAllowed: false,
      networkAllowed: false,
      auditWriteAllowed: false,
      executionAuthority: false,
      noExecution: true
    });
  }

  function isFarmerAgricultureIntelligenceVisibleFeatureEnabled(input) {
    const normalized = normalizeFarmerAgricultureIntelligenceFeatureFlagState(input);
    return normalized.enabled === true && normalized.visibleUiAllowed === true;
  }

  const api = Object.freeze({
    FARMER_AGRICULTURE_INTELLIGENCE_FEATURE_FLAG_NAME,
    DEFAULT_FARMER_AGRICULTURE_INTELLIGENCE_FEATURE_FLAG_STATE,
    normalizeFarmerAgricultureIntelligenceFeatureFlagState,
    isFarmerAgricultureIntelligenceVisibleFeatureEnabled
  });

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  } else {
    root.NexusFarmerAgricultureIntelligenceFeatureFlagContract = api;
  }
})(typeof globalThis !== "undefined" ? globalThis : this);
