(function initNexusNaturalResponseGenerationFeatureFlagContract(root) {
  "use strict";

  const NATURAL_RESPONSE_GENERATION_FEATURE_FLAG_NAME = "NEXUS_NATURAL_RESPONSE_GENERATION_VISIBLE_ENABLED";

  const DEFAULT_NATURAL_RESPONSE_GENERATION_FEATURE_FLAG_STATE = Object.freeze({
    flagName: NATURAL_RESPONSE_GENERATION_FEATURE_FLAG_NAME,
    enabled: false,
    visibleUiAllowed: false,
    responseReviewAllowed: false,
    plainLanguagePreviewAllowed: false,
    sourceTraceReviewAllowed: false,
    responseRuntimeAllowed: false,
    liveResponseModelAllowed: false,
    unsupportedClaimAllowed: false,
    providerConnectionClaimAllowed: false,
    completedActionClaimAllowed: false,
    diagnosisClaimAllowed: false,
    prescriptionClaimAllowed: false,
    paymentCompletionClaimAllowed: false,
    transactionCompletionClaimAllowed: false,
    emergencyDispatchClaimAllowed: false,
    locationSharingClaimAllowed: false,
    callMessageSentClaimAllowed: false,
    sourceRetrievalRuntimeAllowed: false,
    policyBypassAllowed: false,
    confirmationBypassAllowed: false,
    permissionBypassAllowed: false,
    firstTurnExecutionAllowed: false,
    laterTurnExecutionAllowed: false,
    standardUserResponseGeneratorMutationAllowed: false,
    backendWriteAllowed: false,
    storageWriteAllowed: false,
    networkAllowed: false,
    auditWriteAllowed: false,
    executionAuthority: false,
    noExecution: true
  });

  function normalizeNaturalResponseGenerationFeatureFlagState(input) {
    const candidate = input && typeof input === "object" ? input : {};
    const enabled = candidate.enabled === true;
    return Object.freeze({
      flagName: NATURAL_RESPONSE_GENERATION_FEATURE_FLAG_NAME,
      enabled,
      visibleUiAllowed: enabled === true && candidate.visibleUiAllowed === true,
      responseReviewAllowed: false,
      plainLanguagePreviewAllowed: false,
      sourceTraceReviewAllowed: false,
      responseRuntimeAllowed: false,
      liveResponseModelAllowed: false,
      unsupportedClaimAllowed: false,
      providerConnectionClaimAllowed: false,
      completedActionClaimAllowed: false,
      diagnosisClaimAllowed: false,
      prescriptionClaimAllowed: false,
      paymentCompletionClaimAllowed: false,
      transactionCompletionClaimAllowed: false,
      emergencyDispatchClaimAllowed: false,
      locationSharingClaimAllowed: false,
      callMessageSentClaimAllowed: false,
      sourceRetrievalRuntimeAllowed: false,
      policyBypassAllowed: false,
      confirmationBypassAllowed: false,
      permissionBypassAllowed: false,
      firstTurnExecutionAllowed: false,
      laterTurnExecutionAllowed: false,
      standardUserResponseGeneratorMutationAllowed: false,
      backendWriteAllowed: false,
      storageWriteAllowed: false,
      networkAllowed: false,
      auditWriteAllowed: false,
      executionAuthority: false,
      noExecution: true
    });
  }

  function isNaturalResponseGenerationVisibleFeatureEnabled(input) {
    const normalized = normalizeNaturalResponseGenerationFeatureFlagState(input);
    return normalized.enabled === true && normalized.visibleUiAllowed === true;
  }

  const api = Object.freeze({
    NATURAL_RESPONSE_GENERATION_FEATURE_FLAG_NAME,
    DEFAULT_NATURAL_RESPONSE_GENERATION_FEATURE_FLAG_STATE,
    normalizeNaturalResponseGenerationFeatureFlagState,
    isNaturalResponseGenerationVisibleFeatureEnabled
  });

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  } else {
    root.NexusNaturalResponseGenerationFeatureFlagContract = api;
  }
})(typeof globalThis !== "undefined" ? globalThis : this);
