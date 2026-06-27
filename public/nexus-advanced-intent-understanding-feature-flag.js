(function initNexusAdvancedIntentUnderstandingFeatureFlagContract(root) {
  "use strict";

  const ADVANCED_INTENT_UNDERSTANDING_FEATURE_FLAG_NAME = "NEXUS_ADVANCED_INTENT_UNDERSTANDING_VISIBLE_ENABLED";

  const DEFAULT_ADVANCED_INTENT_UNDERSTANDING_FEATURE_FLAG_STATE = Object.freeze({
    flagName: ADVANCED_INTENT_UNDERSTANDING_FEATURE_FLAG_NAME,
    enabled: false,
    visibleUiAllowed: false,
    classifierContextAllowed: false,
    classifierRuntimeAllowed: false,
    liveClassifierReplacementAllowed: false,
    automaticRouteChangesAllowed: false,
    hiddenRiskDowngradeAllowed: false,
    confidenceRiskDowngradeAllowed: false,
    providerSelectionAllowed: false,
    toolSelectionAllowed: false,
    plannerActionCreationAllowed: false,
    policyBypassAllowed: false,
    confirmationBypassAllowed: false,
    permissionBypassAllowed: false,
    rawAdapterCallsAllowed: false,
    implicitPermissionAllowed: false,
    firstTurnExecutionAllowed: false,
    standardUserClassifierMutationAllowed: false,
    backendWriteAllowed: false,
    storageWriteAllowed: false,
    networkAllowed: false,
    auditWriteAllowed: false,
    executionAuthority: false,
    noExecution: true
  });

  function normalizeAdvancedIntentUnderstandingFeatureFlagState(input) {
    const candidate = input && typeof input === "object" ? input : {};
    const enabled = candidate.enabled === true;
    return Object.freeze({
      flagName: ADVANCED_INTENT_UNDERSTANDING_FEATURE_FLAG_NAME,
      enabled,
      visibleUiAllowed: enabled === true && candidate.visibleUiAllowed === true,
      classifierContextAllowed: false,
      classifierRuntimeAllowed: false,
      liveClassifierReplacementAllowed: false,
      automaticRouteChangesAllowed: false,
      hiddenRiskDowngradeAllowed: false,
      confidenceRiskDowngradeAllowed: false,
      providerSelectionAllowed: false,
      toolSelectionAllowed: false,
      plannerActionCreationAllowed: false,
      policyBypassAllowed: false,
      confirmationBypassAllowed: false,
      permissionBypassAllowed: false,
      rawAdapterCallsAllowed: false,
      implicitPermissionAllowed: false,
      firstTurnExecutionAllowed: false,
      standardUserClassifierMutationAllowed: false,
      backendWriteAllowed: false,
      storageWriteAllowed: false,
      networkAllowed: false,
      auditWriteAllowed: false,
      executionAuthority: false,
      noExecution: true
    });
  }

  function isAdvancedIntentUnderstandingVisibleFeatureEnabled(input) {
    const normalized = normalizeAdvancedIntentUnderstandingFeatureFlagState(input);
    return normalized.enabled === true && normalized.visibleUiAllowed === true;
  }

  const api = Object.freeze({
    ADVANCED_INTENT_UNDERSTANDING_FEATURE_FLAG_NAME,
    DEFAULT_ADVANCED_INTENT_UNDERSTANDING_FEATURE_FLAG_STATE,
    normalizeAdvancedIntentUnderstandingFeatureFlagState,
    isAdvancedIntentUnderstandingVisibleFeatureEnabled
  });

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  } else {
    root.NexusAdvancedIntentUnderstandingFeatureFlagContract = api;
  }
})(typeof globalThis !== "undefined" ? globalThis : this);
