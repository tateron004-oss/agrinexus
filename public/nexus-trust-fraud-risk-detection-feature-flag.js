(function nexusTrustFraudRiskDetectionFeatureFlagFactory(root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory(); else root.NexusTrustFraudRiskDetectionFeatureFlagContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusTrustFraudRiskDetectionFeatureFlagModule() {
  const TRUST_FRAUD_RISK_DETECTION_FEATURE_FLAG_NAME = "NEXUS_TRUST_FRAUD_RISK_DETECTION_VISIBLE_ENABLED";

  const DEFAULT_TRUST_FRAUD_RISK_DETECTION_FEATURE_FLAG_STATE = Object.freeze({
    enabled: false,
    visibleUiAllowed: false,
    riskReviewAllowed: false,
    riskSignalPreviewAllowed: false,
    fraudSignalPreviewAllowed: false,
    trustReviewSummaryAllowed: false,
    humanReviewQueuePreviewAllowed: false,
    trustFraudRiskRuntimeAllowed: false,
    liveRiskEngineAllowed: false,
    fraudScoringRuntimeAllowed: false,
    riskSignalRetrievalRuntimeAllowed: false,
    automatedScoringAllowed: false,
    hiddenScoringAllowed: false,
    finalFraudDeterminationAllowed: false,
    accountRestrictionAllowed: false,
    marketplaceRestrictionAllowed: false,
    paymentHoldAllowed: false,
    transactionBlockAllowed: false,
    identityDecisionAllowed: false,
    roleAuthorizationDecisionAllowed: false,
    enforcementActionAllowed: false,
    userAccusationAllowed: false,
    providerConnectionClaimAllowed: false,
    completedActionClaimAllowed: false,
    providerContactAllowed: false,
    communicationExecutionAllowed: false,
    locationSharingAllowed: false,
    paymentExecutionAllowed: false,
    marketplaceTransactionAllowed: false,
    identityAccountProfileActionAllowed: false,
    policyBypassAllowed: false,
    confirmationBypassAllowed: false,
    permissionBypassAllowed: false,
    firstTurnExecutionAllowed: false,
    laterTurnExecutionAllowed: false,
    standardUserRiskEngineMutationAllowed: false,
    backendWriteAllowed: false,
    storageWriteAllowed: false,
    networkAllowed: false,
    auditWriteAllowed: false,
    executionAuthority: false,
    noExecution: true
  });

  const PROTECTED_TRUST_FRAUD_RISK_DETECTION_FLAG_FIELDS = Object.freeze([
    "riskReviewAllowed",
    "riskSignalPreviewAllowed",
    "fraudSignalPreviewAllowed",
    "trustReviewSummaryAllowed",
    "humanReviewQueuePreviewAllowed",
    "trustFraudRiskRuntimeAllowed",
    "liveRiskEngineAllowed",
    "fraudScoringRuntimeAllowed",
    "riskSignalRetrievalRuntimeAllowed",
    "automatedScoringAllowed",
    "hiddenScoringAllowed",
    "finalFraudDeterminationAllowed",
    "accountRestrictionAllowed",
    "marketplaceRestrictionAllowed",
    "paymentHoldAllowed",
    "transactionBlockAllowed",
    "identityDecisionAllowed",
    "roleAuthorizationDecisionAllowed",
    "enforcementActionAllowed",
    "userAccusationAllowed",
    "providerConnectionClaimAllowed",
    "completedActionClaimAllowed",
    "providerContactAllowed",
    "communicationExecutionAllowed",
    "locationSharingAllowed",
    "paymentExecutionAllowed",
    "marketplaceTransactionAllowed",
    "identityAccountProfileActionAllowed",
    "policyBypassAllowed",
    "confirmationBypassAllowed",
    "permissionBypassAllowed",
    "firstTurnExecutionAllowed",
    "laterTurnExecutionAllowed",
    "standardUserRiskEngineMutationAllowed",
    "backendWriteAllowed",
    "storageWriteAllowed",
    "networkAllowed",
    "auditWriteAllowed",
    "executionAuthority"
  ]);

  function normalizeTrustFraudRiskDetectionFeatureFlagState(input = {}) {
    const requested = input && typeof input === "object" ? input : {};
    const normalized = {
      ...DEFAULT_TRUST_FRAUD_RISK_DETECTION_FEATURE_FLAG_STATE,
      enabled: requested.enabled === true,
      visibleUiAllowed: requested.enabled === true && requested.visibleUiAllowed === true,
      noExecution: true
    };

    for (const field of PROTECTED_TRUST_FRAUD_RISK_DETECTION_FLAG_FIELDS) {
      normalized[field] = false;
    }

    return Object.freeze(normalized);
  }

  function isTrustFraudRiskDetectionVisibleFeatureEnabled(state) {
    const normalized = normalizeTrustFraudRiskDetectionFeatureFlagState(state);
    return normalized.enabled === true && normalized.visibleUiAllowed === true && normalized.noExecution === true;
  }

  return Object.freeze({
    TRUST_FRAUD_RISK_DETECTION_FEATURE_FLAG_NAME,
    DEFAULT_TRUST_FRAUD_RISK_DETECTION_FEATURE_FLAG_STATE,
    PROTECTED_TRUST_FRAUD_RISK_DETECTION_FLAG_FIELDS,
    normalizeTrustFraudRiskDetectionFeatureFlagState,
    isTrustFraudRiskDetectionVisibleFeatureEnabled
  });
});
