(function initNexusApprovalCenterFeatureFlagContract(root) {
  "use strict";

  const APPROVAL_CENTER_FEATURE_FLAG_NAME = "NEXUS_APPROVAL_CENTER_VISIBLE_ENABLED";

  const DEFAULT_APPROVAL_CENTER_FEATURE_FLAG_STATE = Object.freeze({
    flagName: APPROVAL_CENTER_FEATURE_FLAG_NAME,
    enabled: false,
    visibleUiAllowed: false,
    approvalPersistenceAllowed: false,
    auditWriteAllowed: false,
    providerHandoffAllowed: false,
    backendWriteAllowed: false,
    storageWriteAllowed: false,
    networkAllowed: false,
    executionAuthority: false,
    noExecution: true
  });

  function normalizeApprovalCenterFeatureFlagState(input) {
    const candidate = input && typeof input === "object" ? input : {};
    const enabled = candidate.enabled === true;
    return Object.freeze({
      flagName: APPROVAL_CENTER_FEATURE_FLAG_NAME,
      enabled,
      visibleUiAllowed: enabled === true && candidate.visibleUiAllowed === true,
      approvalPersistenceAllowed: false,
      auditWriteAllowed: false,
      providerHandoffAllowed: false,
      backendWriteAllowed: false,
      storageWriteAllowed: false,
      networkAllowed: false,
      executionAuthority: false,
      noExecution: true
    });
  }

  function isApprovalCenterVisibleFeatureEnabled(input) {
    const normalized = normalizeApprovalCenterFeatureFlagState(input);
    return normalized.enabled === true && normalized.visibleUiAllowed === true;
  }

  const api = Object.freeze({
    APPROVAL_CENTER_FEATURE_FLAG_NAME,
    DEFAULT_APPROVAL_CENTER_FEATURE_FLAG_STATE,
    normalizeApprovalCenterFeatureFlagState,
    isApprovalCenterVisibleFeatureEnabled
  });

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  } else {
    root.NexusApprovalCenterFeatureFlagContract = api;
  }
})(typeof globalThis !== "undefined" ? globalThis : this);
