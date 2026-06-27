(function initNexusOrchestrationEngineFeatureFlagContract(root) {
  "use strict";

  const ORCHESTRATION_ENGINE_FEATURE_FLAG_NAME = "NEXUS_ORCHESTRATION_ENGINE_VISIBLE_ENABLED";

  const DEFAULT_ORCHESTRATION_ENGINE_FEATURE_FLAG_STATE = Object.freeze({
    flagName: ORCHESTRATION_ENGINE_FEATURE_FLAG_NAME,
    enabled: false,
    visibleUiAllowed: false,
    orchestrationReviewAllowed: false,
    orchestrationTracePreviewAllowed: false,
    orchestrationRuntimeAllowed: false,
    liveOrchestrationEngineAllowed: false,
    executableStepsAllowed: false,
    automaticStepChainingAllowed: false,
    backgroundExecutionAllowed: false,
    providerAdapterExecutionAllowed: false,
    rawAdapterCallsAllowed: false,
    silentProviderHandoffAllowed: false,
    autonomousHighRiskOrchestrationAllowed: false,
    orchestrationFromRawIntentAllowed: false,
    planBasedOrchestrationExecutionAllowed: false,
    selectedToolIdOrchestrationExecutionAllowed: false,
    contextBasedOrchestrationExecutionAllowed: false,
    policyBypassAllowed: false,
    confirmationBypassAllowed: false,
    permissionBypassAllowed: false,
    firstTurnExecutionAllowed: false,
    laterTurnExecutionAllowed: false,
    standardUserOrchestrationMutationAllowed: false,
    backendWriteAllowed: false,
    storageWriteAllowed: false,
    networkAllowed: false,
    auditWriteAllowed: false,
    executionAuthority: false,
    noExecution: true
  });

  function normalizeOrchestrationEngineFeatureFlagState(input) {
    const candidate = input && typeof input === "object" ? input : {};
    const enabled = candidate.enabled === true;
    return Object.freeze({
      flagName: ORCHESTRATION_ENGINE_FEATURE_FLAG_NAME,
      enabled,
      visibleUiAllowed: enabled === true && candidate.visibleUiAllowed === true,
      orchestrationReviewAllowed: false,
      orchestrationTracePreviewAllowed: false,
      orchestrationRuntimeAllowed: false,
      liveOrchestrationEngineAllowed: false,
      executableStepsAllowed: false,
      automaticStepChainingAllowed: false,
      backgroundExecutionAllowed: false,
      providerAdapterExecutionAllowed: false,
      rawAdapterCallsAllowed: false,
      silentProviderHandoffAllowed: false,
      autonomousHighRiskOrchestrationAllowed: false,
      orchestrationFromRawIntentAllowed: false,
      planBasedOrchestrationExecutionAllowed: false,
      selectedToolIdOrchestrationExecutionAllowed: false,
      contextBasedOrchestrationExecutionAllowed: false,
      policyBypassAllowed: false,
      confirmationBypassAllowed: false,
      permissionBypassAllowed: false,
      firstTurnExecutionAllowed: false,
      laterTurnExecutionAllowed: false,
      standardUserOrchestrationMutationAllowed: false,
      backendWriteAllowed: false,
      storageWriteAllowed: false,
      networkAllowed: false,
      auditWriteAllowed: false,
      executionAuthority: false,
      noExecution: true
    });
  }

  function isOrchestrationEngineVisibleFeatureEnabled(input) {
    const normalized = normalizeOrchestrationEngineFeatureFlagState(input);
    return normalized.enabled === true && normalized.visibleUiAllowed === true;
  }

  const api = Object.freeze({
    ORCHESTRATION_ENGINE_FEATURE_FLAG_NAME,
    DEFAULT_ORCHESTRATION_ENGINE_FEATURE_FLAG_STATE,
    normalizeOrchestrationEngineFeatureFlagState,
    isOrchestrationEngineVisibleFeatureEnabled
  });

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  } else {
    root.NexusOrchestrationEngineFeatureFlagContract = api;
  }
})(typeof globalThis !== "undefined" ? globalThis : this);
