(function initNexusMultiTurnReasoningFeatureFlagContract(root) {
  "use strict";

  const MULTI_TURN_REASONING_FEATURE_FLAG_NAME = "NEXUS_MULTI_TURN_REASONING_VISIBLE_ENABLED";

  const DEFAULT_MULTI_TURN_REASONING_FEATURE_FLAG_STATE = Object.freeze({
    flagName: MULTI_TURN_REASONING_FEATURE_FLAG_NAME,
    enabled: false,
    visibleUiAllowed: false,
    contextReviewAllowed: false,
    boundedConversationContextAllowed: false,
    reasoningRuntimeAllowed: false,
    liveReasoningEngineAllowed: false,
    contextContinuationAllowed: false,
    hiddenTaskContinuationAllowed: false,
    contextBasedExecutionAllowed: false,
    memoryDerivedAuthorityAllowed: false,
    automaticRouteChangesAllowed: false,
    riskTierDowngradeAllowed: false,
    providerSelectionFromContextAllowed: false,
    toolSelectionFromContextAllowed: false,
    plannerActionCreationFromContextAllowed: false,
    policyBypassAllowed: false,
    confirmationBypassAllowed: false,
    permissionBypassAllowed: false,
    implicitPermissionAllowed: false,
    firstTurnExecutionAllowed: false,
    laterTurnExecutionAllowed: false,
    standardUserReasoningMutationAllowed: false,
    backendWriteAllowed: false,
    storageWriteAllowed: false,
    networkAllowed: false,
    auditWriteAllowed: false,
    executionAuthority: false,
    noExecution: true
  });

  function normalizeMultiTurnReasoningFeatureFlagState(input) {
    const candidate = input && typeof input === "object" ? input : {};
    const enabled = candidate.enabled === true;
    return Object.freeze({
      flagName: MULTI_TURN_REASONING_FEATURE_FLAG_NAME,
      enabled,
      visibleUiAllowed: enabled === true && candidate.visibleUiAllowed === true,
      contextReviewAllowed: false,
      boundedConversationContextAllowed: false,
      reasoningRuntimeAllowed: false,
      liveReasoningEngineAllowed: false,
      contextContinuationAllowed: false,
      hiddenTaskContinuationAllowed: false,
      contextBasedExecutionAllowed: false,
      memoryDerivedAuthorityAllowed: false,
      automaticRouteChangesAllowed: false,
      riskTierDowngradeAllowed: false,
      providerSelectionFromContextAllowed: false,
      toolSelectionFromContextAllowed: false,
      plannerActionCreationFromContextAllowed: false,
      policyBypassAllowed: false,
      confirmationBypassAllowed: false,
      permissionBypassAllowed: false,
      implicitPermissionAllowed: false,
      firstTurnExecutionAllowed: false,
      laterTurnExecutionAllowed: false,
      standardUserReasoningMutationAllowed: false,
      backendWriteAllowed: false,
      storageWriteAllowed: false,
      networkAllowed: false,
      auditWriteAllowed: false,
      executionAuthority: false,
      noExecution: true
    });
  }

  function isMultiTurnReasoningVisibleFeatureEnabled(input) {
    const normalized = normalizeMultiTurnReasoningFeatureFlagState(input);
    return normalized.enabled === true && normalized.visibleUiAllowed === true;
  }

  const api = Object.freeze({
    MULTI_TURN_REASONING_FEATURE_FLAG_NAME,
    DEFAULT_MULTI_TURN_REASONING_FEATURE_FLAG_STATE,
    normalizeMultiTurnReasoningFeatureFlagState,
    isMultiTurnReasoningVisibleFeatureEnabled
  });

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  } else {
    root.NexusMultiTurnReasoningFeatureFlagContract = api;
  }
})(typeof globalThis !== "undefined" ? globalThis : this);
