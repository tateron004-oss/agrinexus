(function initNexusToolProviderSelectionFeatureFlagContract(root) {
  "use strict";

  const TOOL_PROVIDER_SELECTION_FEATURE_FLAG_NAME = "NEXUS_TOOL_PROVIDER_SELECTION_VISIBLE_ENABLED";

  const DEFAULT_TOOL_PROVIDER_SELECTION_FEATURE_FLAG_STATE = Object.freeze({
    flagName: TOOL_PROVIDER_SELECTION_FEATURE_FLAG_NAME,
    enabled: false,
    visibleUiAllowed: false,
    selectionReviewAllowed: false,
    providerPathPreviewAllowed: false,
    selectionRuntimeAllowed: false,
    liveSelectionEngineAllowed: false,
    rawAdapterCallsAllowed: false,
    providerCallsFromRawIntentAllowed: false,
    silentProviderHandoffAllowed: false,
    automaticConnectorExecutionAllowed: false,
    providerCredentialUseAllowed: false,
    paymentProviderSelectionAllowed: false,
    regulatedProviderExecutionAllowed: false,
    emergencyProviderDispatchAllowed: false,
    transportationDispatchProviderExecutionAllowed: false,
    communicationProviderExecutionAllowed: false,
    locationCameraProviderActivationAllowed: false,
    selectedToolIdRouteMutationAllowed: false,
    selectedToolIdRiskMutationAllowed: false,
    selectedToolIdProviderHandoffAllowed: false,
    policyBypassAllowed: false,
    confirmationBypassAllowed: false,
    permissionBypassAllowed: false,
    firstTurnExecutionAllowed: false,
    laterTurnExecutionAllowed: false,
    standardUserSelectionMutationAllowed: false,
    backendWriteAllowed: false,
    storageWriteAllowed: false,
    networkAllowed: false,
    auditWriteAllowed: false,
    executionAuthority: false,
    noExecution: true
  });

  function normalizeToolProviderSelectionFeatureFlagState(input) {
    const candidate = input && typeof input === "object" ? input : {};
    const enabled = candidate.enabled === true;
    return Object.freeze({
      flagName: TOOL_PROVIDER_SELECTION_FEATURE_FLAG_NAME,
      enabled,
      visibleUiAllowed: enabled === true && candidate.visibleUiAllowed === true,
      selectionReviewAllowed: false,
      providerPathPreviewAllowed: false,
      selectionRuntimeAllowed: false,
      liveSelectionEngineAllowed: false,
      rawAdapterCallsAllowed: false,
      providerCallsFromRawIntentAllowed: false,
      silentProviderHandoffAllowed: false,
      automaticConnectorExecutionAllowed: false,
      providerCredentialUseAllowed: false,
      paymentProviderSelectionAllowed: false,
      regulatedProviderExecutionAllowed: false,
      emergencyProviderDispatchAllowed: false,
      transportationDispatchProviderExecutionAllowed: false,
      communicationProviderExecutionAllowed: false,
      locationCameraProviderActivationAllowed: false,
      selectedToolIdRouteMutationAllowed: false,
      selectedToolIdRiskMutationAllowed: false,
      selectedToolIdProviderHandoffAllowed: false,
      policyBypassAllowed: false,
      confirmationBypassAllowed: false,
      permissionBypassAllowed: false,
      firstTurnExecutionAllowed: false,
      laterTurnExecutionAllowed: false,
      standardUserSelectionMutationAllowed: false,
      backendWriteAllowed: false,
      storageWriteAllowed: false,
      networkAllowed: false,
      auditWriteAllowed: false,
      executionAuthority: false,
      noExecution: true
    });
  }

  function isToolProviderSelectionVisibleFeatureEnabled(input) {
    const normalized = normalizeToolProviderSelectionFeatureFlagState(input);
    return normalized.enabled === true && normalized.visibleUiAllowed === true;
  }

  const api = Object.freeze({
    TOOL_PROVIDER_SELECTION_FEATURE_FLAG_NAME,
    DEFAULT_TOOL_PROVIDER_SELECTION_FEATURE_FLAG_STATE,
    normalizeToolProviderSelectionFeatureFlagState,
    isToolProviderSelectionVisibleFeatureEnabled
  });

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  } else {
    root.NexusToolProviderSelectionFeatureFlagContract = api;
  }
})(typeof globalThis !== "undefined" ? globalThis : this);
