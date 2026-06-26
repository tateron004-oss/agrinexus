(function nexusLongTermMemoryReadinessContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusLongTermMemoryReadinessContract = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusLongTermMemoryReadinessContractModule() {
  const LONG_TERM_MEMORY_ACTION_TYPES = Object.freeze([
    "explain_memory",
    "review_memory_categories",
    "request_memory_consent",
    "create_durable_memory",
    "delete_memory",
    "export_memory",
    "unsupported"
  ]);

  const LONG_TERM_MEMORY_REQUIRED_PRECONDITIONS = Object.freeze([
    "explicitMemoryConsent",
    "visibleMemoryPurpose",
    "visibleMemoryCategories",
    "sensitiveCategoryExclusions",
    "retentionPolicy",
    "expiryPolicy",
    "redactionPolicy",
    "resetControl",
    "deleteControl",
    "exportControlWhenApplicable",
    "auditEvent",
    "permissionState",
    "consentRevocationPath",
    "nonAuthoritativeMemoryRule",
    "noActionAuthorizationFromMemory",
    "noPermissionUnlockFromMemory",
    "noSilentSensitiveStorage",
    "noHiddenCrossDeviceSync",
    "noProviderSharingWithoutApproval"
  ]);

  const LONG_TERM_MEMORY_RESTRICTED_DOMAINS = Object.freeze([
    "identity",
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

  const LONG_TERM_MEMORY_NO_EXECUTION_DEFAULTS = Object.freeze({
    durableMemoryEnabled: false,
    memoryBackendEnabled: false,
    crossSessionMemoryEnabled: false,
    accountLinkedMemoryEnabled: false,
    providerSharedMemoryEnabled: false,
    sensitiveMemoryEnabled: false,
    automaticPersonalizationEnabled: false,
    memoryCanAuthorizeActions: false,
    memoryCanUnlockPermissions: false,
    standardUserDurableMemoryAllowed: false,
    executionAllowed: false,
    liveActionEnabled: false
  });

  const LONG_TERM_MEMORY_READINESS_CONTRACT = Object.freeze({
    contractId: "long_term_memory.readiness.phase_61",
    phase: "61",
    readinessStatus: "blocked",
    riskTier: "high",
    allowedActionTypes: LONG_TERM_MEMORY_ACTION_TYPES,
    requiredPreconditions: LONG_TERM_MEMORY_REQUIRED_PRECONDITIONS,
    restrictedDomains: LONG_TERM_MEMORY_RESTRICTED_DOMAINS,
    consentRequirement: "explicit_memory_consent_required",
    resetRequirement: "reset_delete_and_revocation_controls_required",
    auditRequirement: "audit_event_required_before_durable_memory_write",
    nonAuthorityRequirement: "memory_must_remain_non_authoritative",
    ...LONG_TERM_MEMORY_NO_EXECUTION_DEFAULTS
  });

  function normalizeActionType(value) {
    return LONG_TERM_MEMORY_ACTION_TYPES.includes(value) ? value : "unsupported";
  }

  function createLongTermMemoryReadinessContract(overrides = {}) {
    return Object.freeze({
      ...LONG_TERM_MEMORY_READINESS_CONTRACT,
      ...overrides,
      actionType: normalizeActionType(overrides.actionType || "unsupported"),
      phase: "61",
      readinessStatus: "blocked",
      riskTier: "high",
      consentRequirement: "explicit_memory_consent_required",
      resetRequirement: "reset_delete_and_revocation_controls_required",
      auditRequirement: "audit_event_required_before_durable_memory_write",
      nonAuthorityRequirement: "memory_must_remain_non_authoritative",
      ...LONG_TERM_MEMORY_NO_EXECUTION_DEFAULTS
    });
  }

  return Object.freeze({
    LONG_TERM_MEMORY_ACTION_TYPES,
    LONG_TERM_MEMORY_REQUIRED_PRECONDITIONS,
    LONG_TERM_MEMORY_RESTRICTED_DOMAINS,
    LONG_TERM_MEMORY_NO_EXECUTION_DEFAULTS,
    LONG_TERM_MEMORY_READINESS_CONTRACT,
    createLongTermMemoryReadinessContract
  });
});
