(function nexusConsentCenterContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusConsentCenterContract = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusConsentCenterContractModule() {
  const CONSENT_RECORD_STATUSES = Object.freeze([
    "not_configured",
    "notice_required",
    "explicit_consent_required",
    "scoped_consent_required",
    "audit_policy_required",
    "revocation_path_required",
    "retention_policy_required",
    "provider_policy_required",
    "approved_not_live",
    "revoked",
    "expired",
    "rejected_or_blocked",
    "inactive"
  ]);

  const CONSENT_PURPOSE_CATEGORIES = Object.freeze([
    "temporary_session_context",
    "profile_personalization",
    "provider_contact",
    "health_access",
    "telehealth_handoff",
    "pharmacy_refill_handoff",
    "medical_records_access",
    "location_sharing",
    "transportation_request",
    "payment_authorization",
    "marketplace_contact",
    "workforce_application",
    "emergency_partner_handoff",
    "restricted_consent_boundary"
  ]);

  const NO_EXECUTION_DEFAULTS = Object.freeze({
    noExecution: true,
    consentStoreEnabled: false,
    consentPersistenceEnabled: false,
    consentUiEnabled: false,
    runtimeConsentAuthorityEnabled: false,
    providerContactEnabled: false,
    healthActionEnabled: false,
    telehealthActionEnabled: false,
    pharmacyActionEnabled: false,
    medicalRecordAccessEnabled: false,
    locationSharingEnabled: false,
    transportationDispatchEnabled: false,
    paymentExecutionEnabled: false,
    marketplaceTransactionEnabled: false,
    workforceSubmissionEnabled: false,
    emergencyDispatchEnabled: false,
    accountMutationEnabled: false,
    externalNavigationEnabled: false,
    liveActionEnabled: false,
    consentRecorded: false,
    consentRevoked: false,
    providerContacted: false,
    healthActionPerformed: false,
    telehealthActionPerformed: false,
    pharmacyActionPerformed: false,
    medicalRecordAccessed: false,
    locationShared: false,
    transportationDispatched: false,
    paymentExecuted: false,
    marketplaceTransactionCompleted: false,
    workforceApplicationSubmitted: false,
    emergencyDispatched: false,
    accountMutated: false,
    externalActionExecuted: false
  });

  const CONSENT_CENTER_FIELDS = Object.freeze([
    "consentRecordId",
    "subjectRef",
    "purposeCategory",
    "consentStatus",
    "scope",
    "sourceSurface",
    "supportedLanguages",
    "noticeStatus",
    "auditPolicyStatus",
    "revocationPathStatus",
    "retentionPolicyStatus",
    "providerPolicyStatus",
    "freshnessModel",
    "allowedResponseStates",
    "scopedConsentGate",
    "revocationGate",
    "auditRequirements",
    "auditEvent",
    "consentStoreEnabled",
    "consentPersistenceEnabled",
    "runtimeConsentAuthorityEnabled",
    "providerContactEnabled",
    "paymentExecutionEnabled",
    "emergencyDispatchEnabled",
    "liveActionEnabled",
    "noExecution"
  ]);

  const SCOPED_CONSENT_GATE_FIELDS = Object.freeze([
    "requiresPlainLanguageNotice",
    "requiresPurposeSpecificScope",
    "requiresExplicitUserApproval",
    "requiresMinimumNecessaryData",
    "requiresSensitiveDataReview",
    "requiresProviderPolicyReview",
    "requiresAuditLogging",
    "requiresRevocationPath",
    "requiresNoFirstTurnExecution",
    "allowsProviderContact",
    "allowsHealthAction",
    "allowsMedicalRecordAccess",
    "allowsLocationSharing",
    "allowsPaymentExecution",
    "allowsEmergencyDispatch",
    "allowsExternalNavigation"
  ]);

  const REVOCATION_GATE_FIELDS = Object.freeze([
    "requiresUserVisibleControl",
    "requiresRevocationAudit",
    "requiresProviderRevocationBoundary",
    "requiresRetentionPolicy",
    "requiresNoExecutionOnRevoke",
    "allowsProviderCancellation",
    "allowsExternalDeletion",
    "allowsAccountMutation",
    "allowsPaymentReversal",
    "allowsEmergencyCancellation"
  ]);

  const CONSENT_AUDIT_EVENT_FIELDS = Object.freeze([
    "eventType",
    "consentRecordId",
    "purposeCategory",
    "consentStatus",
    "scope",
    "sourceSurface",
    "consentStoreEnabled",
    "consentPersistenceEnabled",
    "runtimeConsentAuthorityEnabled",
    "providerContactEnabled",
    "paymentExecutionEnabled",
    "emergencyDispatchEnabled",
    "noExecution",
    "createdAt"
  ]);

  const DEFAULT_SCOPED_CONSENT_GATE = Object.freeze({
    requiresPlainLanguageNotice: true,
    requiresPurposeSpecificScope: true,
    requiresExplicitUserApproval: true,
    requiresMinimumNecessaryData: true,
    requiresSensitiveDataReview: true,
    requiresProviderPolicyReview: true,
    requiresAuditLogging: true,
    requiresRevocationPath: true,
    requiresNoFirstTurnExecution: true,
    allowsProviderContact: false,
    allowsHealthAction: false,
    allowsMedicalRecordAccess: false,
    allowsLocationSharing: false,
    allowsPaymentExecution: false,
    allowsEmergencyDispatch: false,
    allowsExternalNavigation: false
  });

  const DEFAULT_REVOCATION_GATE = Object.freeze({
    requiresUserVisibleControl: true,
    requiresRevocationAudit: true,
    requiresProviderRevocationBoundary: true,
    requiresRetentionPolicy: true,
    requiresNoExecutionOnRevoke: true,
    allowsProviderCancellation: false,
    allowsExternalDeletion: false,
    allowsAccountMutation: false,
    allowsPaymentReversal: false,
    allowsEmergencyCancellation: false
  });

  const CONSENT_CENTER_CONTRACT = Object.freeze({
    consentRecordId: "consent.center.not_configured",
    subjectRef: "redacted-or-anonymous",
    purposeCategory: "restricted_consent_boundary",
    consentStatus: "not_configured",
    scope: Object.freeze([]),
    sourceSurface: "not reviewed",
    supportedLanguages: Object.freeze(["en"]),
    noticeStatus: "not_shown",
    auditPolicyStatus: "not_reviewed",
    revocationPathStatus: "not_reviewed",
    retentionPolicyStatus: "not_reviewed",
    providerPolicyStatus: "not_reviewed",
    freshnessModel: Object.freeze({
      freshnessField: "consentPolicyLastReviewedAt",
      staleAfter: "consent-policy-specific",
      displayRequirement: "Show purpose, scope, revocation path, audit policy, retention policy, and execution-disabled boundary before relying on consent context."
    }),
    allowedResponseStates: Object.freeze([
      "consent_readiness_guidance",
      "scope_explanation",
      "revocation_guidance",
      "consent_required_fallback",
      "unavailable_consent_store_fallback"
    ]),
    scopedConsentGate: DEFAULT_SCOPED_CONSENT_GATE,
    revocationGate: DEFAULT_REVOCATION_GATE,
    auditRequirements: Object.freeze([
      "consent-policy-reviewed",
      "purpose-scope-shown",
      "consent-store-disabled",
      "revocation-path-required",
      "execution-blocked"
    ]),
    auditEvent: Object.freeze({
      eventType: "consent.center_record_prepared",
      consentRecordId: "consent.center.not_configured",
      purposeCategory: "restricted_consent_boundary",
      consentStatus: "not_configured",
      scope: Object.freeze([]),
      sourceSurface: "not reviewed",
      consentStoreEnabled: false,
      consentPersistenceEnabled: false,
      runtimeConsentAuthorityEnabled: false,
      providerContactEnabled: false,
      paymentExecutionEnabled: false,
      emergencyDispatchEnabled: false,
      noExecution: true,
      createdAt: null
    }),
    ...NO_EXECUTION_DEFAULTS
  });

  function normalizeConsentStatus(value) {
    return CONSENT_RECORD_STATUSES.includes(value) ? value : CONSENT_CENTER_CONTRACT.consentStatus;
  }

  function normalizePurposeCategory(value) {
    return CONSENT_PURPOSE_CATEGORIES.includes(value) ? value : CONSENT_CENTER_CONTRACT.purposeCategory;
  }

  function createConsentCenterRecord(overrides = {}) {
    const consentStatus = normalizeConsentStatus(overrides.consentStatus);
    const purposeCategory = normalizePurposeCategory(overrides.purposeCategory);
    const scope = Array.isArray(overrides.scope) ? overrides.scope.slice() : [];
    return Object.freeze({
      ...CONSENT_CENTER_CONTRACT,
      ...overrides,
      consentStatus,
      purposeCategory,
      scope: Object.freeze(scope),
      supportedLanguages: Object.freeze(Array.isArray(overrides.supportedLanguages) ? overrides.supportedLanguages.slice() : ["en"]),
      scopedConsentGate: Object.freeze({
        ...DEFAULT_SCOPED_CONSENT_GATE,
        ...(overrides.scopedConsentGate || {}),
        allowsProviderContact: false,
        allowsHealthAction: false,
        allowsMedicalRecordAccess: false,
        allowsLocationSharing: false,
        allowsPaymentExecution: false,
        allowsEmergencyDispatch: false,
        allowsExternalNavigation: false
      }),
      revocationGate: Object.freeze({
        ...DEFAULT_REVOCATION_GATE,
        ...(overrides.revocationGate || {}),
        allowsProviderCancellation: false,
        allowsExternalDeletion: false,
        allowsAccountMutation: false,
        allowsPaymentReversal: false,
        allowsEmergencyCancellation: false
      }),
      auditEvent: Object.freeze({
        ...CONSENT_CENTER_CONTRACT.auditEvent,
        ...(overrides.auditEvent || {}),
        consentRecordId: overrides.consentRecordId || CONSENT_CENTER_CONTRACT.consentRecordId,
        purposeCategory,
        consentStatus,
        scope: Object.freeze(scope),
        sourceSurface: overrides.sourceSurface || CONSENT_CENTER_CONTRACT.sourceSurface,
        consentStoreEnabled: false,
        consentPersistenceEnabled: false,
        runtimeConsentAuthorityEnabled: false,
        providerContactEnabled: false,
        paymentExecutionEnabled: false,
        emergencyDispatchEnabled: false,
        noExecution: true
      }),
      ...NO_EXECUTION_DEFAULTS
    });
  }

  return Object.freeze({
    CONSENT_RECORD_STATUSES,
    CONSENT_PURPOSE_CATEGORIES,
    NO_EXECUTION_DEFAULTS,
    CONSENT_CENTER_FIELDS,
    SCOPED_CONSENT_GATE_FIELDS,
    REVOCATION_GATE_FIELDS,
    CONSENT_AUDIT_EVENT_FIELDS,
    DEFAULT_SCOPED_CONSENT_GATE,
    DEFAULT_REVOCATION_GATE,
    CONSENT_CENTER_CONTRACT,
    createConsentCenterRecord
  });
});
