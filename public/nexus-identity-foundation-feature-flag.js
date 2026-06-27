(function initNexusIdentityFoundationFeatureFlagContract(root) {
  "use strict";

  const IDENTITY_FOUNDATION_FEATURE_FLAG_NAME = "NEXUS_IDENTITY_FOUNDATION_VISIBLE_ENABLED";

  const DEFAULT_IDENTITY_FOUNDATION_FEATURE_FLAG_STATE = Object.freeze({
    flagName: IDENTITY_FOUNDATION_FEATURE_FLAG_NAME,
    enabled: false,
    visibleUiAllowed: false,
    identityContextAllowed: false,
    accountContextAllowed: false,
    roleContextAllowed: false,
    identityVerificationAllowed: false,
    identityDocumentCollectionAllowed: false,
    identityDocumentSharingAllowed: false,
    profileMutationAllowed: false,
    accountMutationAllowed: false,
    accountLoginAllowed: false,
    passwordResetAllowed: false,
    roleElevationAllowed: false,
    credentialUseAllowed: false,
    providerAuthorizationAllowed: false,
    patientAuthorizationAllowed: false,
    paymentAuthorizationAllowed: false,
    emergencyContactSharingAllowed: false,
    permissionPromptAllowed: false,
    backendWriteAllowed: false,
    storageWriteAllowed: false,
    networkAllowed: false,
    executionAuthority: false,
    noExecution: true
  });

  function normalizeIdentityFoundationFeatureFlagState(input) {
    const candidate = input && typeof input === "object" ? input : {};
    const enabled = candidate.enabled === true;
    return Object.freeze({
      flagName: IDENTITY_FOUNDATION_FEATURE_FLAG_NAME,
      enabled,
      visibleUiAllowed: enabled === true && candidate.visibleUiAllowed === true,
      identityContextAllowed: false,
      accountContextAllowed: false,
      roleContextAllowed: false,
      identityVerificationAllowed: false,
      identityDocumentCollectionAllowed: false,
      identityDocumentSharingAllowed: false,
      profileMutationAllowed: false,
      accountMutationAllowed: false,
      accountLoginAllowed: false,
      passwordResetAllowed: false,
      roleElevationAllowed: false,
      credentialUseAllowed: false,
      providerAuthorizationAllowed: false,
      patientAuthorizationAllowed: false,
      paymentAuthorizationAllowed: false,
      emergencyContactSharingAllowed: false,
      permissionPromptAllowed: false,
      backendWriteAllowed: false,
      storageWriteAllowed: false,
      networkAllowed: false,
      executionAuthority: false,
      noExecution: true
    });
  }

  function isIdentityFoundationVisibleFeatureEnabled(input) {
    const normalized = normalizeIdentityFoundationFeatureFlagState(input);
    return normalized.enabled === true && normalized.visibleUiAllowed === true;
  }

  const api = Object.freeze({
    IDENTITY_FOUNDATION_FEATURE_FLAG_NAME,
    DEFAULT_IDENTITY_FOUNDATION_FEATURE_FLAG_STATE,
    normalizeIdentityFoundationFeatureFlagState,
    isIdentityFoundationVisibleFeatureEnabled
  });

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  } else {
    root.NexusIdentityFoundationFeatureFlagContract = api;
  }
})(typeof globalThis !== "undefined" ? globalThis : this);
