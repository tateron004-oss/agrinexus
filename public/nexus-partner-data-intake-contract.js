(function nexusPartnerDataIntakeContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusPartnerDataIntakeContract = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusPartnerDataIntakeContractModule() {
  const PARTNER_INTAKE_STATUSES = Object.freeze([
    "draft",
    "received_not_processed",
    "schema_review_required",
    "terms_review_required",
    "source_verification_required",
    "sandbox_only",
    "approved_for_source_backed_guidance",
    "rejected_or_blocked",
    "inactive"
  ]);

  const PARTNER_FEED_TYPES = Object.freeze([
    "provider_directory",
    "clinic_availability",
    "telehealth_availability",
    "mobile_clinic_schedule",
    "pharmacy_directory",
    "prescription_workflow_metadata",
    "transportation_resource",
    "workforce_program",
    "agriculture_resource",
    "community_service_resource",
    "marketplace_partner_catalog",
    "education_content",
    "medical_records_metadata",
    "payment_provider_metadata",
    "emergency_resource_directory"
  ]);

  const NO_EXECUTION_DEFAULTS = Object.freeze({
    noExecution: true,
    liveActionEnabled: false,
    providerContacted: false,
    userDataShared: false,
    externalActionExecuted: false,
    paymentExecuted: false,
    marketplaceTransactionExecuted: false,
    medicalRecordAccessed: false,
    prescriptionSubmitted: false,
    emergencyDispatched: false,
    locationShared: false,
    callOrMessageSent: false
  });

  const PARTNER_INTAKE_RECORD_FIELDS = Object.freeze([
    "intakeId",
    "partnerName",
    "partnerType",
    "feedType",
    "intakeStatus",
    "sourceOwner",
    "sourceType",
    "integrationMethod",
    "schemaVersion",
    "expectedFields",
    "providedFields",
    "missingFields",
    "termsStatus",
    "dataRightsStatus",
    "authenticationRequirements",
    "consentRequirements",
    "permissionRequirements",
    "complianceRequirements",
    "freshnessModel",
    "sandboxReview",
    "approvalGate",
    "auditRequirements",
    "liveActionEnabled",
    "userApprovalRequired",
    "providerConfirmationRequired",
    "noExecution"
  ]);

  const SANDBOX_REVIEW_FIELDS = Object.freeze([
    "schemaValidationStatus",
    "requiredFieldCoverage",
    "sourceOwnerVerification",
    "termsReview",
    "freshnessRuleReview",
    "privacyReview",
    "complianceReview",
    "regulatedDataClassification",
    "auditReadiness",
    "approvalDecision"
  ]);

  const APPROVAL_GATE_FIELDS = Object.freeze([
    "requiresAdminApproval",
    "requiresPartnerAgreement",
    "requiresComplianceReview",
    "requiresSecurityReview",
    "requiresAuditReadiness",
    "allowsSourceBackedGuidance",
    "allowsLiveAction",
    "approvedBy",
    "approvedAt"
  ]);

  const DEFAULT_SANDBOX_REVIEW = Object.freeze({
    schemaValidationStatus: "not_reviewed",
    requiredFieldCoverage: "not_reviewed",
    sourceOwnerVerification: "not_verified",
    termsReview: "not_reviewed",
    freshnessRuleReview: "not_reviewed",
    privacyReview: "not_reviewed",
    complianceReview: "not_reviewed",
    regulatedDataClassification: "unknown",
    auditReadiness: "not_ready",
    approvalDecision: "not_approved"
  });

  const DEFAULT_APPROVAL_GATE = Object.freeze({
    requiresAdminApproval: true,
    requiresPartnerAgreement: true,
    requiresComplianceReview: true,
    requiresSecurityReview: true,
    requiresAuditReadiness: true,
    allowsSourceBackedGuidance: false,
    allowsLiveAction: false,
    approvedBy: null,
    approvedAt: null
  });

  const PARTNER_DATA_INTAKE_RECORD_CONTRACT = Object.freeze({
    intakeId: "",
    partnerName: "",
    partnerType: "unverified_partner",
    feedType: "provider_directory",
    intakeStatus: "draft",
    sourceOwner: "partner verification required",
    sourceType: "partner_provided_operational_data",
    integrationMethod: "not_connected_yet",
    schemaVersion: "phase-27-contract",
    expectedFields: Object.freeze([]),
    providedFields: Object.freeze([]),
    missingFields: Object.freeze([]),
    termsStatus: "review required",
    dataRightsStatus: "review required",
    authenticationRequirements: Object.freeze(["partner authentication required before live connection"]),
    consentRequirements: Object.freeze(["consent model required before regulated or user-specific data use"]),
    permissionRequirements: Object.freeze(["approval required before source-backed guidance or live action"]),
    complianceRequirements: Object.freeze(["compliance review required before regulated use"]),
    freshnessModel: Object.freeze({
      freshnessField: "partnerVerifiedAt",
      staleAfter: "partner-defined",
      displayRequirement: "Show partner source, verification status, and freshness before relying on data."
    }),
    sandboxReview: DEFAULT_SANDBOX_REVIEW,
    approvalGate: DEFAULT_APPROVAL_GATE,
    auditRequirements: Object.freeze(["partner-intake-created", "sandbox-review-required", "approval-gate-blocked"]),
    userApprovalRequired: true,
    providerConfirmationRequired: true,
    ...NO_EXECUTION_DEFAULTS
  });

  function normalizeStatus(value) {
    return PARTNER_INTAKE_STATUSES.includes(value) ? value : PARTNER_DATA_INTAKE_RECORD_CONTRACT.intakeStatus;
  }

  function normalizeFeedType(value) {
    return PARTNER_FEED_TYPES.includes(value) ? value : PARTNER_DATA_INTAKE_RECORD_CONTRACT.feedType;
  }

  function createPartnerDataIntakeRecord(overrides = {}) {
    const intakeStatus = normalizeStatus(overrides.intakeStatus);
    const feedType = normalizeFeedType(overrides.feedType);
    const expectedFields = Array.isArray(overrides.expectedFields) ? overrides.expectedFields.slice() : [];
    const providedFields = Array.isArray(overrides.providedFields) ? overrides.providedFields.slice() : [];
    const missingFields = Array.isArray(overrides.missingFields) ? overrides.missingFields.slice() : expectedFields.filter(field => !providedFields.includes(field));
    const approvalGate = Object.freeze({
      ...DEFAULT_APPROVAL_GATE,
      ...(overrides.approvalGate || {}),
      allowsLiveAction: false
    });
    return Object.freeze({
      ...PARTNER_DATA_INTAKE_RECORD_CONTRACT,
      ...overrides,
      feedType,
      intakeStatus,
      expectedFields: Object.freeze(expectedFields),
      providedFields: Object.freeze(providedFields),
      missingFields: Object.freeze(missingFields),
      sandboxReview: Object.freeze({
        ...DEFAULT_SANDBOX_REVIEW,
        ...(overrides.sandboxReview || {})
      }),
      approvalGate,
      auditRequirements: Object.freeze(Array.isArray(overrides.auditRequirements) ? overrides.auditRequirements.slice() : PARTNER_DATA_INTAKE_RECORD_CONTRACT.auditRequirements.slice()),
      ...Object.fromEntries(Object.entries(NO_EXECUTION_DEFAULTS).map(([key, value]) => [key, value]))
    });
  }

  return Object.freeze({
    PARTNER_INTAKE_STATUSES,
    PARTNER_FEED_TYPES,
    NO_EXECUTION_DEFAULTS,
    PARTNER_INTAKE_RECORD_FIELDS,
    SANDBOX_REVIEW_FIELDS,
    APPROVAL_GATE_FIELDS,
    DEFAULT_SANDBOX_REVIEW,
    DEFAULT_APPROVAL_GATE,
    PARTNER_DATA_INTAKE_RECORD_CONTRACT,
    createPartnerDataIntakeRecord
  });
});
