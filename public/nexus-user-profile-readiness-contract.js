(function nexusUserProfileReadinessContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusUserProfileReadinessContract = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusUserProfileReadinessContractModule() {
  const USER_PROFILE_ACTION_TYPES = Object.freeze([
    "explain_profile",
    "review_profile_fields",
    "request_profile_consent",
    "create_profile",
    "update_profile",
    "share_profile",
    "unsupported"
  ]);

  const USER_PROFILE_REQUIRED_PRECONDITIONS = Object.freeze([
    "explicitProfileConsent",
    "visibleProfilePurpose",
    "visibleProfileFields",
    "sensitiveFieldExclusions",
    "profileSource",
    "profileOwner",
    "profileAccessScope",
    "roleAuthorization",
    "permissionState",
    "consentRevocationPath",
    "editControl",
    "deleteControl",
    "exportControlWhenApplicable",
    "retentionPolicy",
    "redactionPolicy",
    "auditEvent",
    "nonAuthoritativeProfileRule",
    "noProfileBasedExecution",
    "noSilentProfileSharing",
    "noHiddenRoleElevation"
  ]);

  const USER_PROFILE_RESTRICTED_DOMAINS = Object.freeze([
    "identity",
    "account_profile",
    "role_authorization",
    "healthcare",
    "medical_records",
    "pharmacy",
    "payments",
    "location",
    "communications",
    "provider_contact",
    "marketplace_transactions",
    "emergency",
    "minors_family_support"
  ]);

  const USER_PROFILE_NO_EXECUTION_DEFAULTS = Object.freeze({
    profileBackendEnabled: false,
    accountCreationEnabled: false,
    profileMutationEnabled: false,
    profileSharingEnabled: false,
    profileSyncEnabled: false,
    identityProofingEnabled: false,
    roleElevationEnabled: false,
    providerProfileHandoffEnabled: false,
    sensitiveProfileStorageEnabled: false,
    automaticPersonalizationEnabled: false,
    standardUserProfileMutationAllowed: false,
    executionAllowed: false,
    liveActionEnabled: false
  });

  const USER_PROFILE_READINESS_CONTRACT = Object.freeze({
    contractId: "user_profile.readiness.phase_62",
    phase: "62",
    readinessStatus: "blocked",
    riskTier: "high",
    allowedActionTypes: USER_PROFILE_ACTION_TYPES,
    requiredPreconditions: USER_PROFILE_REQUIRED_PRECONDITIONS,
    restrictedDomains: USER_PROFILE_RESTRICTED_DOMAINS,
    consentRequirement: "explicit_profile_consent_required",
    controlRequirement: "edit_delete_export_and_revocation_controls_required",
    auditRequirement: "audit_event_required_before_profile_mutation_or_sharing",
    nonAuthorityRequirement: "profile_context_must_remain_non_authoritative",
    ...USER_PROFILE_NO_EXECUTION_DEFAULTS
  });

  function normalizeActionType(value) {
    return USER_PROFILE_ACTION_TYPES.includes(value) ? value : "unsupported";
  }

  function createUserProfileReadinessContract(overrides = {}) {
    return Object.freeze({
      ...USER_PROFILE_READINESS_CONTRACT,
      ...overrides,
      actionType: normalizeActionType(overrides.actionType || "unsupported"),
      phase: "62",
      readinessStatus: "blocked",
      riskTier: "high",
      consentRequirement: "explicit_profile_consent_required",
      controlRequirement: "edit_delete_export_and_revocation_controls_required",
      auditRequirement: "audit_event_required_before_profile_mutation_or_sharing",
      nonAuthorityRequirement: "profile_context_must_remain_non_authoritative",
      ...USER_PROFILE_NO_EXECUTION_DEFAULTS
    });
  }

  return Object.freeze({
    USER_PROFILE_ACTION_TYPES,
    USER_PROFILE_REQUIRED_PRECONDITIONS,
    USER_PROFILE_RESTRICTED_DOMAINS,
    USER_PROFILE_NO_EXECUTION_DEFAULTS,
    USER_PROFILE_READINESS_CONTRACT,
    createUserProfileReadinessContract
  });
});
