(function initNexusConsentCenterFeatureFlagContract(root) {
  "use strict";

  const CONSENT_CENTER_FEATURE_FLAG_NAME = "NEXUS_CONSENT_CENTER_VISIBLE_ENABLED";

  const DEFAULT_CONSENT_CENTER_FEATURE_FLAG_STATE = Object.freeze({
    flagName: CONSENT_CENTER_FEATURE_FLAG_NAME,
    enabled: false,
    visibleUiAllowed: false,
    consentPersistenceAllowed: false,
    consentRevocationAllowed: false,
    auditWriteAllowed: false,
    providerHandoffAllowed: false,
    permissionPromptAllowed: false,
    backendWriteAllowed: false,
    storageWriteAllowed: false,
    networkAllowed: false,
    executionAuthority: false,
    noExecution: true
  });

  function normalizeConsentCenterFeatureFlagState(input) {
    const candidate = input && typeof input === "object" ? input : {};
    const enabled = candidate.enabled === true;
    return Object.freeze({
      flagName: CONSENT_CENTER_FEATURE_FLAG_NAME,
      enabled,
      visibleUiAllowed: enabled === true && candidate.visibleUiAllowed === true,
      consentPersistenceAllowed: false,
      consentRevocationAllowed: false,
      auditWriteAllowed: false,
      providerHandoffAllowed: false,
      permissionPromptAllowed: false,
      backendWriteAllowed: false,
      storageWriteAllowed: false,
      networkAllowed: false,
      executionAuthority: false,
      noExecution: true
    });
  }

  function isConsentCenterVisibleFeatureEnabled(input) {
    const normalized = normalizeConsentCenterFeatureFlagState(input);
    return normalized.enabled === true && normalized.visibleUiAllowed === true;
  }

  const api = Object.freeze({
    CONSENT_CENTER_FEATURE_FLAG_NAME,
    DEFAULT_CONSENT_CENTER_FEATURE_FLAG_STATE,
    normalizeConsentCenterFeatureFlagState,
    isConsentCenterVisibleFeatureEnabled
  });

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  } else {
    root.NexusConsentCenterFeatureFlagContract = api;
  }
})(typeof globalThis !== "undefined" ? globalThis : this);
