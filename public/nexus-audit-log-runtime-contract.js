(function nexusAuditLogRuntimeContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusAuditLogRuntimeContract = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusAuditLogRuntimeContractModule() {
  const AUDIT_RUNTIME_STATUSES = Object.freeze([
    "not_configured",
    "audit_backend_required",
    "retention_policy_required",
    "redaction_policy_required",
    "role_projection_required",
    "export_policy_required",
    "consent_policy_required",
    "provider_policy_required",
    "sandbox_testing_required",
    "approved_not_live",
    "rejected_or_blocked",
    "inactive"
  ]);

  const AUDIT_EVENT_CATEGORIES = Object.freeze([
    "low_risk_preview_event",
    "medium_risk_staging_event",
    "high_risk_confirmation_event",
    "provider_action_boundary_event",
    "payment_boundary_event",
    "health_boundary_event",
    "identity_boundary_event",
    "location_boundary_event",
    "emergency_boundary_event",
    "consent_boundary_event",
    "restricted_audit_boundary"
  ]);

  const NO_EXECUTION_DEFAULTS = Object.freeze({
    noExecution: true,
    auditBackendEnabled: false,
    auditPersistenceEnabled: false,
    runtimeAuditWriteEnabled: false,
    auditExportEnabled: false,
    roleProjectionEnabled: false,
    providerExecutionEnabled: false,
    callExecutionEnabled: false,
    messageExecutionEnabled: false,
    paymentExecutionEnabled: false,
    healthActionEnabled: false,
    medicalRecordAccessEnabled: false,
    locationSharingEnabled: false,
    emergencyDispatchEnabled: false,
    accountMutationEnabled: false,
    externalNavigationEnabled: false,
    liveActionEnabled: false,
    auditEventStored: false,
    auditEventExported: false,
    providerContacted: false,
    callPlaced: false,
    messageSent: false,
    paymentExecuted: false,
    healthActionPerformed: false,
    medicalRecordAccessed: false,
    locationShared: false,
    emergencyDispatched: false,
    accountMutated: false,
    externalActionExecuted: false
  });

  const AUDIT_RUNTIME_FIELDS = Object.freeze([
    "auditRuntimeId",
    "auditBackendName",
    "sourceOwner",
    "auditStatus",
    "auditEventCategories",
    "supportedRegions",
    "supportedLanguages",
    "retentionPolicyStatus",
    "redactionPolicyStatus",
    "roleProjectionStatus",
    "exportPolicyStatus",
    "consentPolicyStatus",
    "providerPolicyStatus",
    "freshnessModel",
    "allowedResponseStates",
    "auditBeforeExecutionGate",
    "redactionGate",
    "retentionModel",
    "auditRequirements",
    "auditEventSchema",
    "auditBackendEnabled",
    "auditPersistenceEnabled",
    "runtimeAuditWriteEnabled",
    "auditExportEnabled",
    "liveActionEnabled",
    "noExecution"
  ]);

  const AUDIT_BEFORE_EXECUTION_GATE_FIELDS = Object.freeze([
    "requiresAuditBackendReview",
    "requiresRetentionPolicy",
    "requiresRedactionPolicy",
    "requiresRoleProjectionPolicy",
    "requiresConsentPolicy",
    "requiresProviderPolicy",
    "requiresNoExecutionFromLogging",
    "requiresAuditBeforeHighRiskExecution",
    "allowsAuditPersistence",
    "allowsAuditExport",
    "allowsProviderExecution",
    "allowsPaymentExecution",
    "allowsEmergencyDispatch",
    "allowsExternalNavigation"
  ]);

  const REDACTION_GATE_FIELDS = Object.freeze([
    "requiresPhoneRedaction",
    "requiresEmailRedaction",
    "requiresNameMinimization",
    "requiresHealthRedaction",
    "requiresPaymentRedaction",
    "requiresLocationMinimization",
    "requiresIdentitySecretExclusion",
    "requiresProviderCredentialExclusion",
    "allowsRawPhoneStorage",
    "allowsRawHealthStorage",
    "allowsRawPaymentStorage",
    "allowsPreciseLocationStorage",
    "allowsProviderCredentialStorage"
  ]);

  const AUDIT_EVENT_SCHEMA_FIELDS = Object.freeze([
    "auditId",
    "eventType",
    "actionId",
    "intentId",
    "sessionId",
    "userRef",
    "role",
    "sourceSurface",
    "riskTier",
    "actionType",
    "targetSummary",
    "provider",
    "confirmationState",
    "permissionState",
    "consentState",
    "resultStatus",
    "redactedPayload",
    "retentionClass",
    "expiresAt",
    "createdAt"
  ]);

  const DEFAULT_AUDIT_BEFORE_EXECUTION_GATE = Object.freeze({
    requiresAuditBackendReview: true,
    requiresRetentionPolicy: true,
    requiresRedactionPolicy: true,
    requiresRoleProjectionPolicy: true,
    requiresConsentPolicy: true,
    requiresProviderPolicy: true,
    requiresNoExecutionFromLogging: true,
    requiresAuditBeforeHighRiskExecution: true,
    allowsAuditPersistence: false,
    allowsAuditExport: false,
    allowsProviderExecution: false,
    allowsPaymentExecution: false,
    allowsEmergencyDispatch: false,
    allowsExternalNavigation: false
  });

  const DEFAULT_REDACTION_GATE = Object.freeze({
    requiresPhoneRedaction: true,
    requiresEmailRedaction: true,
    requiresNameMinimization: true,
    requiresHealthRedaction: true,
    requiresPaymentRedaction: true,
    requiresLocationMinimization: true,
    requiresIdentitySecretExclusion: true,
    requiresProviderCredentialExclusion: true,
    allowsRawPhoneStorage: false,
    allowsRawHealthStorage: false,
    allowsRawPaymentStorage: false,
    allowsPreciseLocationStorage: false,
    allowsProviderCredentialStorage: false
  });

  const AUDIT_LOG_RUNTIME_CONTRACT = Object.freeze({
    auditRuntimeId: "audit.runtime.not_configured",
    auditBackendName: "audit backend not configured",
    sourceOwner: "audit backend approval required",
    auditStatus: "not_configured",
    auditEventCategories: Object.freeze([]),
    supportedRegions: Object.freeze([]),
    supportedLanguages: Object.freeze(["en"]),
    retentionPolicyStatus: "not_reviewed",
    redactionPolicyStatus: "not_reviewed",
    roleProjectionStatus: "not_reviewed",
    exportPolicyStatus: "not_reviewed",
    consentPolicyStatus: "not_reviewed",
    providerPolicyStatus: "not_reviewed",
    freshnessModel: Object.freeze({
      freshnessField: "auditPolicyLastReviewedAt",
      staleAfter: "audit-policy-specific",
      displayRequirement: "Show audit backend, redaction, retention, role projection, consent, and execution-disabled boundary before relying on audit runtime context."
    }),
    allowedResponseStates: Object.freeze([
      "audit_readiness_guidance",
      "redaction_policy_guidance",
      "retention_policy_guidance",
      "audit_required_fallback",
      "unavailable_audit_backend_fallback"
    ]),
    auditBeforeExecutionGate: DEFAULT_AUDIT_BEFORE_EXECUTION_GATE,
    redactionGate: DEFAULT_REDACTION_GATE,
    retentionModel: Object.freeze({
      retentionClass: "policy_required",
      defaultRetentionDays: 0,
      expiryField: "expiresAt",
      retentionReviewRequired: true,
      externalStorageEnabled: false,
      exportEnabled: false
    }),
    auditRequirements: Object.freeze([
      "audit-backend-review-required",
      "redaction-policy-required",
      "retention-policy-required",
      "role-projection-required",
      "execution-blocked"
    ]),
    auditEventSchema: Object.freeze(AUDIT_EVENT_SCHEMA_FIELDS.slice()),
    ...NO_EXECUTION_DEFAULTS
  });

  function normalizeAuditStatus(value) {
    return AUDIT_RUNTIME_STATUSES.includes(value) ? value : AUDIT_LOG_RUNTIME_CONTRACT.auditStatus;
  }

  function normalizeAuditEventCategories(values) {
    if (!Array.isArray(values)) return [];
    return values.filter(value => AUDIT_EVENT_CATEGORIES.includes(value));
  }

  function createAuditLogRuntimeContract(overrides = {}) {
    const auditStatus = normalizeAuditStatus(overrides.auditStatus);
    const auditEventCategories = normalizeAuditEventCategories(overrides.auditEventCategories);
    return Object.freeze({
      ...AUDIT_LOG_RUNTIME_CONTRACT,
      ...overrides,
      auditStatus,
      auditEventCategories: Object.freeze(auditEventCategories),
      supportedRegions: Object.freeze(Array.isArray(overrides.supportedRegions) ? overrides.supportedRegions.slice() : []),
      supportedLanguages: Object.freeze(Array.isArray(overrides.supportedLanguages) ? overrides.supportedLanguages.slice() : ["en"]),
      auditBeforeExecutionGate: Object.freeze({
        ...DEFAULT_AUDIT_BEFORE_EXECUTION_GATE,
        ...(overrides.auditBeforeExecutionGate || {}),
        allowsAuditPersistence: false,
        allowsAuditExport: false,
        allowsProviderExecution: false,
        allowsPaymentExecution: false,
        allowsEmergencyDispatch: false,
        allowsExternalNavigation: false
      }),
      redactionGate: Object.freeze({
        ...DEFAULT_REDACTION_GATE,
        ...(overrides.redactionGate || {}),
        allowsRawPhoneStorage: false,
        allowsRawHealthStorage: false,
        allowsRawPaymentStorage: false,
        allowsPreciseLocationStorage: false,
        allowsProviderCredentialStorage: false
      }),
      retentionModel: Object.freeze({
        ...AUDIT_LOG_RUNTIME_CONTRACT.retentionModel,
        ...(overrides.retentionModel || {}),
        externalStorageEnabled: false,
        exportEnabled: false
      }),
      auditEventSchema: Object.freeze(AUDIT_EVENT_SCHEMA_FIELDS.slice()),
      ...NO_EXECUTION_DEFAULTS
    });
  }

  return Object.freeze({
    AUDIT_RUNTIME_STATUSES,
    AUDIT_EVENT_CATEGORIES,
    NO_EXECUTION_DEFAULTS,
    AUDIT_RUNTIME_FIELDS,
    AUDIT_BEFORE_EXECUTION_GATE_FIELDS,
    REDACTION_GATE_FIELDS,
    AUDIT_EVENT_SCHEMA_FIELDS,
    DEFAULT_AUDIT_BEFORE_EXECUTION_GATE,
    DEFAULT_REDACTION_GATE,
    AUDIT_LOG_RUNTIME_CONTRACT,
    createAuditLogRuntimeContract
  });
});
