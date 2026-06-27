(function initNexusPersonalizationFeatureFlagContract(root) {
  "use strict";

  const PERSONALIZATION_FEATURE_FLAG_NAME = "NEXUS_PERSONALIZATION_VISIBLE_ENABLED";

  const DEFAULT_PERSONALIZATION_FEATURE_FLAG_STATE = Object.freeze({
    flagName: PERSONALIZATION_FEATURE_FLAG_NAME,
    enabled: false,
    visibleUiAllowed: false,
    preferenceContextAllowed: false,
    preferenceEngineAllowed: false,
    automaticPersonalizationAllowed: false,
    hiddenPersonalizationAllowed: false,
    preferencePersistenceAllowed: false,
    preferenceSyncAllowed: false,
    preferenceMutationAllowed: false,
    profileDerivedExecutionAllowed: false,
    providerHandoffAllowed: false,
    riskTierMutationAllowed: false,
    standardUserPreferenceMutationAllowed: false,
    permissionPromptAllowed: false,
    backendWriteAllowed: false,
    storageWriteAllowed: false,
    networkAllowed: false,
    auditWriteAllowed: false,
    executionAuthority: false,
    noExecution: true
  });

  function normalizePersonalizationFeatureFlagState(input) {
    const candidate = input && typeof input === "object" ? input : {};
    const enabled = candidate.enabled === true;
    return Object.freeze({
      flagName: PERSONALIZATION_FEATURE_FLAG_NAME,
      enabled,
      visibleUiAllowed: enabled === true && candidate.visibleUiAllowed === true,
      preferenceContextAllowed: false,
      preferenceEngineAllowed: false,
      automaticPersonalizationAllowed: false,
      hiddenPersonalizationAllowed: false,
      preferencePersistenceAllowed: false,
      preferenceSyncAllowed: false,
      preferenceMutationAllowed: false,
      profileDerivedExecutionAllowed: false,
      providerHandoffAllowed: false,
      riskTierMutationAllowed: false,
      standardUserPreferenceMutationAllowed: false,
      permissionPromptAllowed: false,
      backendWriteAllowed: false,
      storageWriteAllowed: false,
      networkAllowed: false,
      auditWriteAllowed: false,
      executionAuthority: false,
      noExecution: true
    });
  }

  function isPersonalizationVisibleFeatureEnabled(input) {
    const normalized = normalizePersonalizationFeatureFlagState(input);
    return normalized.enabled === true && normalized.visibleUiAllowed === true;
  }

  const api = Object.freeze({
    PERSONALIZATION_FEATURE_FLAG_NAME,
    DEFAULT_PERSONALIZATION_FEATURE_FLAG_STATE,
    normalizePersonalizationFeatureFlagState,
    isPersonalizationVisibleFeatureEnabled
  });

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  } else {
    root.NexusPersonalizationFeatureFlagContract = api;
  }
})(typeof globalThis !== "undefined" ? globalThis : this);
