(function nexusWorkforceIntelligenceFeatureFlagFactory(root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory(); else root.NexusWorkforceIntelligenceFeatureFlagContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusWorkforceIntelligenceFeatureFlagModule() {
  const WORKFORCE_INTELLIGENCE_FEATURE_FLAG_NAME = "NEXUS_WORKFORCE_INTELLIGENCE_VISIBLE_ENABLED";

  const DEFAULT_WORKFORCE_INTELLIGENCE_FEATURE_FLAG_STATE = Object.freeze({
    enabled: false,
    visibleUiAllowed: false,
    workforcePathwayReviewAllowed: false,
    sourceBackedWorkforceGuidancePreviewAllowed: false,
    trainingPathwaySummaryPreviewAllowed: false,
    jobPathwaySummaryPreviewAllowed: false,
    providerEscalationPreviewAllowed: false,
    workforceRuntimeAllowed: false,
    liveWorkforceAdvisorAllowed: false,
    sourceRetrievalRuntimeAllowed: false,
    jobApplicationSubmissionAllowed: false,
    referralSubmissionAllowed: false,
    trainingEnrollmentExecutionAllowed: false,
    credentialIssuanceAllowed: false,
    certificateIssuanceAllowed: false,
    eligibilityClaimAllowed: false,
    employerProviderProgramContactAllowed: false,
    providerConnectionClaimAllowed: false,
    completedActionClaimAllowed: false,
    paymentExecutionAllowed: false,
    marketplaceTransactionAllowed: false,
    identityAccountProfileActionAllowed: false,
    locationSharingAllowed: false,
    transportationDispatchAllowed: false,
    emergencyDispatchAllowed: false,
    communicationExecutionAllowed: false,
    policyBypassAllowed: false,
    confirmationBypassAllowed: false,
    permissionBypassAllowed: false,
    firstTurnExecutionAllowed: false,
    laterTurnExecutionAllowed: false,
    standardUserWorkforceBrainMutationAllowed: false,
    backendWriteAllowed: false,
    storageWriteAllowed: false,
    networkAllowed: false,
    auditWriteAllowed: false,
    executionAuthority: false,
    noExecution: true
  });

  const PROTECTED_WORKFORCE_INTELLIGENCE_FLAG_FIELDS = Object.freeze([
    "workforcePathwayReviewAllowed",
    "sourceBackedWorkforceGuidancePreviewAllowed",
    "trainingPathwaySummaryPreviewAllowed",
    "jobPathwaySummaryPreviewAllowed",
    "providerEscalationPreviewAllowed",
    "workforceRuntimeAllowed",
    "liveWorkforceAdvisorAllowed",
    "sourceRetrievalRuntimeAllowed",
    "jobApplicationSubmissionAllowed",
    "referralSubmissionAllowed",
    "trainingEnrollmentExecutionAllowed",
    "credentialIssuanceAllowed",
    "certificateIssuanceAllowed",
    "eligibilityClaimAllowed",
    "employerProviderProgramContactAllowed",
    "providerConnectionClaimAllowed",
    "completedActionClaimAllowed",
    "paymentExecutionAllowed",
    "marketplaceTransactionAllowed",
    "identityAccountProfileActionAllowed",
    "locationSharingAllowed",
    "transportationDispatchAllowed",
    "emergencyDispatchAllowed",
    "communicationExecutionAllowed",
    "policyBypassAllowed",
    "confirmationBypassAllowed",
    "permissionBypassAllowed",
    "firstTurnExecutionAllowed",
    "laterTurnExecutionAllowed",
    "standardUserWorkforceBrainMutationAllowed",
    "backendWriteAllowed",
    "storageWriteAllowed",
    "networkAllowed",
    "auditWriteAllowed",
    "executionAuthority"
  ]);

  function normalizeWorkforceIntelligenceFeatureFlagState(input = {}) {
    const requested = input && typeof input === "object" ? input : {};
    const normalized = {
      ...DEFAULT_WORKFORCE_INTELLIGENCE_FEATURE_FLAG_STATE,
      enabled: requested.enabled === true,
      visibleUiAllowed: requested.enabled === true && requested.visibleUiAllowed === true,
      noExecution: true
    };

    for (const field of PROTECTED_WORKFORCE_INTELLIGENCE_FLAG_FIELDS) {
      normalized[field] = false;
    }

    return Object.freeze(normalized);
  }

  function isWorkforceIntelligenceVisibleFeatureEnabled(state) {
    const normalized = normalizeWorkforceIntelligenceFeatureFlagState(state);
    return normalized.enabled === true && normalized.visibleUiAllowed === true && normalized.noExecution === true;
  }

  return Object.freeze({
    WORKFORCE_INTELLIGENCE_FEATURE_FLAG_NAME,
    DEFAULT_WORKFORCE_INTELLIGENCE_FEATURE_FLAG_STATE,
    PROTECTED_WORKFORCE_INTELLIGENCE_FLAG_FIELDS,
    normalizeWorkforceIntelligenceFeatureFlagState,
    isWorkforceIntelligenceVisibleFeatureEnabled
  });
});
