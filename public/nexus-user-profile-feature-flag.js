(function initNexusUserProfileFeatureFlagContract(root) {
  "use strict";

  const USER_PROFILE_FEATURE_FLAG_NAME = "NEXUS_USER_PROFILE_VISIBLE_ENABLED";

  const DEFAULT_USER_PROFILE_FEATURE_FLAG_STATE = Object.freeze({
    flagName: USER_PROFILE_FEATURE_FLAG_NAME,
    enabled: false,
    visibleUiAllowed: false,
    profileContextAllowed: false,
    profileBackendAllowed: false,
    accountCreationAllowed: false,
    profileMutationAllowed: false,
    profileSharingAllowed: false,
    profileSyncAllowed: false,
    identityProofingAllowed: false,
    roleElevationAllowed: false,
    providerProfileHandoffAllowed: false,
    sensitiveProfileStorageAllowed: false,
    automaticPersonalizationAllowed: false,
    standardUserProfileMutationAllowed: false,
    permissionPromptAllowed: false,
    backendWriteAllowed: false,
    storageWriteAllowed: false,
    networkAllowed: false,
    auditWriteAllowed: false,
    executionAuthority: false,
    noExecution: true
  });

  function normalizeUserProfileFeatureFlagState(input) {
    const candidate = input && typeof input === "object" ? input : {};
    const enabled = candidate.enabled === true;
    return Object.freeze({
      flagName: USER_PROFILE_FEATURE_FLAG_NAME,
      enabled,
      visibleUiAllowed: enabled === true && candidate.visibleUiAllowed === true,
      profileContextAllowed: false,
      profileBackendAllowed: false,
      accountCreationAllowed: false,
      profileMutationAllowed: false,
      profileSharingAllowed: false,
      profileSyncAllowed: false,
      identityProofingAllowed: false,
      roleElevationAllowed: false,
      providerProfileHandoffAllowed: false,
      sensitiveProfileStorageAllowed: false,
      automaticPersonalizationAllowed: false,
      standardUserProfileMutationAllowed: false,
      permissionPromptAllowed: false,
      backendWriteAllowed: false,
      storageWriteAllowed: false,
      networkAllowed: false,
      auditWriteAllowed: false,
      executionAuthority: false,
      noExecution: true
    });
  }

  function isUserProfileVisibleFeatureEnabled(input) {
    const normalized = normalizeUserProfileFeatureFlagState(input);
    return normalized.enabled === true && normalized.visibleUiAllowed === true;
  }

  const api = Object.freeze({
    USER_PROFILE_FEATURE_FLAG_NAME,
    DEFAULT_USER_PROFILE_FEATURE_FLAG_STATE,
    normalizeUserProfileFeatureFlagState,
    isUserProfileVisibleFeatureEnabled
  });

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  } else {
    root.NexusUserProfileFeatureFlagContract = api;
  }
})(typeof globalThis !== "undefined" ? globalThis : this);
