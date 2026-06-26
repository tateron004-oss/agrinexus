(function nexusPersonalizationReadinessContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusPersonalizationReadinessContract = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusPersonalizationReadinessContractModule() {
  const PERSONALIZATION_ACTION_TYPES = Object.freeze([
    "explain_personalization",
    "review_preferences",
    "request_personalization_consent",
    "tailor_guidance",
    "reset_preferences",
    "unsupported"
  ]);

  const PERSONALIZATION_REQUIRED_PRECONDITIONS = Object.freeze([
    "explicitPersonalizationConsent",
    "visiblePersonalizationPurpose",
    "visiblePreferenceFields",
    "preferenceSource",
    "preferenceOwner",
    "preferenceScope",
    "userOverrideControl",
    "editControl",
    "deleteControl",
    "resetControl",
    "consentRevocationPath",
    "retentionPolicy",
    "redactionPolicy",
    "auditEvent",
    "sourceAttributionWhenRelevant",
    "nonAuthoritativePreferenceRule",
    "noPreferenceBasedExecution",
    "noHiddenPersonalization",
    "noRiskTierChangesFromPreferences"
  ]);

  const PERSONALIZATION_RESTRICTED_DOMAINS = Object.freeze([
    "healthcare",
    "medical_records",
    "pharmacy",
    "payments",
    "location",
    "communications",
    "provider_contact",
    "marketplace_transactions",
    "emergency",
    "identity",
    "account_profile",
    "role_authorization",
    "minors_family_support"
  ]);

  const PERSONALIZATION_NO_EXECUTION_DEFAULTS = Object.freeze({
    preferenceEngineEnabled: false,
    automaticPersonalizationEnabled: false,
    hiddenPersonalizationEnabled: false,
    preferencePersistenceEnabled: false,
    preferenceSyncEnabled: false,
    profileDerivedExecutionEnabled: false,
    providerHandoffEnabled: false,
    riskTierMutationEnabled: false,
    standardUserPreferenceMutationAllowed: false,
    executionAllowed: false,
    liveActionEnabled: false
  });

  const PERSONALIZATION_READINESS_CONTRACT = Object.freeze({
    contractId: "personalization.readiness.phase_63",
    phase: "63",
    readinessStatus: "blocked",
    riskTier: "controlled",
    allowedActionTypes: PERSONALIZATION_ACTION_TYPES,
    requiredPreconditions: PERSONALIZATION_REQUIRED_PRECONDITIONS,
    restrictedDomains: PERSONALIZATION_RESTRICTED_DOMAINS,
    consentRequirement: "explicit_personalization_consent_required",
    controlRequirement: "edit_delete_reset_override_and_revocation_controls_required",
    auditRequirement: "audit_event_required_before_preference_persistence_or_sharing",
    nonAuthorityRequirement: "preferences_must_remain_non_authoritative_context",
    ...PERSONALIZATION_NO_EXECUTION_DEFAULTS
  });

  function normalizeActionType(value) {
    return PERSONALIZATION_ACTION_TYPES.includes(value) ? value : "unsupported";
  }

  function createPersonalizationReadinessContract(overrides = {}) {
    return Object.freeze({
      ...PERSONALIZATION_READINESS_CONTRACT,
      ...overrides,
      actionType: normalizeActionType(overrides.actionType || "unsupported"),
      phase: "63",
      readinessStatus: "blocked",
      riskTier: "controlled",
      consentRequirement: "explicit_personalization_consent_required",
      controlRequirement: "edit_delete_reset_override_and_revocation_controls_required",
      auditRequirement: "audit_event_required_before_preference_persistence_or_sharing",
      nonAuthorityRequirement: "preferences_must_remain_non_authoritative_context",
      ...PERSONALIZATION_NO_EXECUTION_DEFAULTS
    });
  }

  return Object.freeze({
    PERSONALIZATION_ACTION_TYPES,
    PERSONALIZATION_REQUIRED_PRECONDITIONS,
    PERSONALIZATION_RESTRICTED_DOMAINS,
    PERSONALIZATION_NO_EXECUTION_DEFAULTS,
    PERSONALIZATION_READINESS_CONTRACT,
    createPersonalizationReadinessContract
  });
});
