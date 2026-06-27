(function initNexusTaskPlanningFeatureFlagContract(root) {
  "use strict";

  const TASK_PLANNING_FEATURE_FLAG_NAME = "NEXUS_TASK_PLANNING_VISIBLE_ENABLED";

  const DEFAULT_TASK_PLANNING_FEATURE_FLAG_STATE = Object.freeze({
    flagName: TASK_PLANNING_FEATURE_FLAG_NAME,
    enabled: false,
    visibleUiAllowed: false,
    planReviewAllowed: false,
    stagedPlanPreviewAllowed: false,
    plannerRuntimeAllowed: false,
    livePlannerReplacementAllowed: false,
    executablePlanStepsAllowed: false,
    automaticStepChainingAllowed: false,
    providerExecutionFromPlansAllowed: false,
    rawAdapterCallsAllowed: false,
    implicitPermissionAllowed: false,
    autonomousHighRiskStepsAllowed: false,
    planBasedRouteMutationAllowed: false,
    riskTierDowngradeAllowed: false,
    providerSelectionFromPlanAllowed: false,
    toolSelectionFromPlanAllowed: false,
    policyBypassAllowed: false,
    confirmationBypassAllowed: false,
    permissionBypassAllowed: false,
    firstTurnExecutionAllowed: false,
    laterTurnExecutionAllowed: false,
    standardUserPlannerMutationAllowed: false,
    backendWriteAllowed: false,
    storageWriteAllowed: false,
    networkAllowed: false,
    auditWriteAllowed: false,
    executionAuthority: false,
    noExecution: true
  });

  function normalizeTaskPlanningFeatureFlagState(input) {
    const candidate = input && typeof input === "object" ? input : {};
    const enabled = candidate.enabled === true;
    return Object.freeze({
      flagName: TASK_PLANNING_FEATURE_FLAG_NAME,
      enabled,
      visibleUiAllowed: enabled === true && candidate.visibleUiAllowed === true,
      planReviewAllowed: false,
      stagedPlanPreviewAllowed: false,
      plannerRuntimeAllowed: false,
      livePlannerReplacementAllowed: false,
      executablePlanStepsAllowed: false,
      automaticStepChainingAllowed: false,
      providerExecutionFromPlansAllowed: false,
      rawAdapterCallsAllowed: false,
      implicitPermissionAllowed: false,
      autonomousHighRiskStepsAllowed: false,
      planBasedRouteMutationAllowed: false,
      riskTierDowngradeAllowed: false,
      providerSelectionFromPlanAllowed: false,
      toolSelectionFromPlanAllowed: false,
      policyBypassAllowed: false,
      confirmationBypassAllowed: false,
      permissionBypassAllowed: false,
      firstTurnExecutionAllowed: false,
      laterTurnExecutionAllowed: false,
      standardUserPlannerMutationAllowed: false,
      backendWriteAllowed: false,
      storageWriteAllowed: false,
      networkAllowed: false,
      auditWriteAllowed: false,
      executionAuthority: false,
      noExecution: true
    });
  }

  function isTaskPlanningVisibleFeatureEnabled(input) {
    const normalized = normalizeTaskPlanningFeatureFlagState(input);
    return normalized.enabled === true && normalized.visibleUiAllowed === true;
  }

  const api = Object.freeze({
    TASK_PLANNING_FEATURE_FLAG_NAME,
    DEFAULT_TASK_PLANNING_FEATURE_FLAG_STATE,
    normalizeTaskPlanningFeatureFlagState,
    isTaskPlanningVisibleFeatureEnabled
  });

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  } else {
    root.NexusTaskPlanningFeatureFlagContract = api;
  }
})(typeof globalThis !== "undefined" ? globalThis : this);
