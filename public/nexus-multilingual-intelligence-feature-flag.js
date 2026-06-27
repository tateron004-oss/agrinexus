(function initNexusMultilingualIntelligenceFeatureFlagContract(root) {
  "use strict";

  const MULTILINGUAL_INTELLIGENCE_FEATURE_FLAG_NAME = "NEXUS_MULTILINGUAL_INTELLIGENCE_VISIBLE_ENABLED";

  const DEFAULT_MULTILINGUAL_INTELLIGENCE_FEATURE_FLAG_STATE = Object.freeze({
    flagName: MULTILINGUAL_INTELLIGENCE_FEATURE_FLAG_NAME,
    enabled: false,
    visibleUiAllowed: false,
    languageReviewAllowed: false,
    localizedResponsePreviewAllowed: false,
    sourceTraceLanguageReviewAllowed: false,
    languageRuntimeAllowed: false,
    liveTranslationProviderAllowed: false,
    automaticLanguageSwitchingAllowed: false,
    clinicalInterpretationClaimAllowed: false,
    medicalTranslationCertificationClaimAllowed: false,
    providerExecutionFromLanguageSwitchAllowed: false,
    callMessageExecutionFromLanguageSwitchAllowed: false,
    paymentExecutionFromLanguageSwitchAllowed: false,
    regulatedTranslationExecutionAllowed: false,
    emergencyDispatchTranslationAllowed: false,
    locationCameraActivationFromLanguageSwitchAllowed: false,
    policyBypassAllowed: false,
    confirmationBypassAllowed: false,
    permissionBypassAllowed: false,
    firstTurnExecutionAllowed: false,
    laterTurnExecutionAllowed: false,
    standardUserLanguageEngineMutationAllowed: false,
    backendWriteAllowed: false,
    storageWriteAllowed: false,
    networkAllowed: false,
    auditWriteAllowed: false,
    executionAuthority: false,
    noExecution: true
  });

  function normalizeMultilingualIntelligenceFeatureFlagState(input) {
    const candidate = input && typeof input === "object" ? input : {};
    const enabled = candidate.enabled === true;
    return Object.freeze({
      flagName: MULTILINGUAL_INTELLIGENCE_FEATURE_FLAG_NAME,
      enabled,
      visibleUiAllowed: enabled === true && candidate.visibleUiAllowed === true,
      languageReviewAllowed: false,
      localizedResponsePreviewAllowed: false,
      sourceTraceLanguageReviewAllowed: false,
      languageRuntimeAllowed: false,
      liveTranslationProviderAllowed: false,
      automaticLanguageSwitchingAllowed: false,
      clinicalInterpretationClaimAllowed: false,
      medicalTranslationCertificationClaimAllowed: false,
      providerExecutionFromLanguageSwitchAllowed: false,
      callMessageExecutionFromLanguageSwitchAllowed: false,
      paymentExecutionFromLanguageSwitchAllowed: false,
      regulatedTranslationExecutionAllowed: false,
      emergencyDispatchTranslationAllowed: false,
      locationCameraActivationFromLanguageSwitchAllowed: false,
      policyBypassAllowed: false,
      confirmationBypassAllowed: false,
      permissionBypassAllowed: false,
      firstTurnExecutionAllowed: false,
      laterTurnExecutionAllowed: false,
      standardUserLanguageEngineMutationAllowed: false,
      backendWriteAllowed: false,
      storageWriteAllowed: false,
      networkAllowed: false,
      auditWriteAllowed: false,
      executionAuthority: false,
      noExecution: true
    });
  }

  function isMultilingualIntelligenceVisibleFeatureEnabled(input) {
    const normalized = normalizeMultilingualIntelligenceFeatureFlagState(input);
    return normalized.enabled === true && normalized.visibleUiAllowed === true;
  }

  const api = Object.freeze({
    MULTILINGUAL_INTELLIGENCE_FEATURE_FLAG_NAME,
    DEFAULT_MULTILINGUAL_INTELLIGENCE_FEATURE_FLAG_STATE,
    normalizeMultilingualIntelligenceFeatureFlagState,
    isMultilingualIntelligenceVisibleFeatureEnabled
  });

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  } else {
    root.NexusMultilingualIntelligenceFeatureFlagContract = api;
  }
})(typeof globalThis !== "undefined" ? globalThis : this);
