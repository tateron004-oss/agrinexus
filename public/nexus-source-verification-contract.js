(function nexusSourceVerificationContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusSourceVerificationContract = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusSourceVerificationContractModule() {
  const SOURCE_VERIFICATION_STATUSES = Object.freeze([
    "not_started",
    "owner_proof_required",
    "terms_review_required",
    "data_rights_review_required",
    "freshness_rule_required",
    "regional_scope_review_required",
    "language_scope_review_required",
    "verification_in_progress",
    "verified_not_live",
    "rejected_or_blocked",
    "expired_or_needs_reverification"
  ]);

  const OWNER_PROOF_TYPES = Object.freeze([
    "official_domain",
    "signed_partner_agreement",
    "public_registry_record",
    "government_publication",
    "organization_document",
    "api_terms_document",
    "data_use_agreement",
    "manual_admin_review",
    "not_provided"
  ]);

  const TERMS_REVIEW_STATUSES = Object.freeze([
    "not_reviewed",
    "review_required",
    "allowed_for_public_guidance",
    "allowed_for_partner_guidance",
    "allowed_for_regulated_use_after_consent",
    "restricted",
    "rejected",
    "expired"
  ]);

  const NO_EXECUTION_DEFAULTS = Object.freeze({
    noExecution: true,
    sourceBackedGuidanceAllowed: false,
    connectorActivationAllowed: false,
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

  const SOURCE_VERIFICATION_REVIEW_FIELDS = Object.freeze([
    "verificationId",
    "sourceId",
    "sourceName",
    "sourceOwner",
    "sourceType",
    "verificationStatus",
    "ownerProofType",
    "ownerProofReference",
    "termsReviewStatus",
    "dataRightsStatus",
    "freshnessRuleStatus",
    "regionalScopeStatus",
    "languageScopeStatus",
    "complianceReviewStatus",
    "reviewedBy",
    "reviewedAt",
    "expiresAt",
    "verificationDecision",
    "auditEvent",
    "sourceBackedGuidanceAllowed",
    "connectorActivationAllowed",
    "liveActionEnabled",
    "noExecution"
  ]);

  const VERIFICATION_DECISION_FIELDS = Object.freeze([
    "decisionStatus",
    "decisionReason",
    "allowedUse",
    "blockedUse",
    "requiresReverification",
    "requiresAdminApproval",
    "allowsSourceBackedGuidance",
    "allowsConnectorActivation",
    "allowsLiveAction"
  ]);

  const VERIFICATION_AUDIT_EVENT_FIELDS = Object.freeze([
    "eventType",
    "verificationId",
    "sourceId",
    "verificationStatus",
    "termsReviewStatus",
    "decisionStatus",
    "noExecution",
    "createdAt"
  ]);

  const DEFAULT_VERIFICATION_DECISION = Object.freeze({
    decisionStatus: "review_required",
    decisionReason: "source verification required before use",
    allowedUse: Object.freeze([]),
    blockedUse: Object.freeze(["live_action", "provider_contact", "regulated_use"]),
    requiresReverification: false,
    requiresAdminApproval: true,
    allowsSourceBackedGuidance: false,
    allowsConnectorActivation: false,
    allowsLiveAction: false
  });

  const SOURCE_VERIFICATION_REVIEW_CONTRACT = Object.freeze({
    verificationId: "",
    sourceId: "",
    sourceName: "",
    sourceOwner: "source owner verification required",
    sourceType: "unverified",
    verificationStatus: "not_started",
    ownerProofType: "not_provided",
    ownerProofReference: "",
    termsReviewStatus: "not_reviewed",
    dataRightsStatus: "review required",
    freshnessRuleStatus: "review required",
    regionalScopeStatus: "review required",
    languageScopeStatus: "review required",
    complianceReviewStatus: "review required",
    reviewedBy: null,
    reviewedAt: null,
    expiresAt: null,
    verificationDecision: DEFAULT_VERIFICATION_DECISION,
    auditEvent: Object.freeze({
      eventType: "source.verification_review_created",
      verificationId: "",
      sourceId: "",
      verificationStatus: "not_started",
      termsReviewStatus: "not_reviewed",
      decisionStatus: "review_required",
      noExecution: true,
      createdAt: null
    }),
    ...NO_EXECUTION_DEFAULTS
  });

  function normalizeVerificationStatus(value) {
    return SOURCE_VERIFICATION_STATUSES.includes(value) ? value : SOURCE_VERIFICATION_REVIEW_CONTRACT.verificationStatus;
  }

  function normalizeOwnerProofType(value) {
    return OWNER_PROOF_TYPES.includes(value) ? value : SOURCE_VERIFICATION_REVIEW_CONTRACT.ownerProofType;
  }

  function normalizeTermsReviewStatus(value) {
    return TERMS_REVIEW_STATUSES.includes(value) ? value : SOURCE_VERIFICATION_REVIEW_CONTRACT.termsReviewStatus;
  }

  function createSourceVerificationReview(overrides = {}) {
    const verificationStatus = normalizeVerificationStatus(overrides.verificationStatus);
    const ownerProofType = normalizeOwnerProofType(overrides.ownerProofType);
    const termsReviewStatus = normalizeTermsReviewStatus(overrides.termsReviewStatus);
    return Object.freeze({
      ...SOURCE_VERIFICATION_REVIEW_CONTRACT,
      ...overrides,
      verificationStatus,
      ownerProofType,
      termsReviewStatus,
      verificationDecision: Object.freeze({
        ...DEFAULT_VERIFICATION_DECISION,
        ...(overrides.verificationDecision || {}),
        allowedUse: Object.freeze(Array.isArray(overrides.verificationDecision?.allowedUse) ? overrides.verificationDecision.allowedUse.slice() : []),
        blockedUse: Object.freeze(Array.isArray(overrides.verificationDecision?.blockedUse) ? overrides.verificationDecision.blockedUse.slice() : DEFAULT_VERIFICATION_DECISION.blockedUse.slice()),
        allowsConnectorActivation: false,
        allowsLiveAction: false
      }),
      auditEvent: Object.freeze({
        ...SOURCE_VERIFICATION_REVIEW_CONTRACT.auditEvent,
        ...(overrides.auditEvent || {}),
        verificationId: overrides.verificationId || SOURCE_VERIFICATION_REVIEW_CONTRACT.verificationId,
        sourceId: overrides.sourceId || SOURCE_VERIFICATION_REVIEW_CONTRACT.sourceId,
        verificationStatus,
        termsReviewStatus,
        decisionStatus: overrides.verificationDecision?.decisionStatus || DEFAULT_VERIFICATION_DECISION.decisionStatus,
        noExecution: true
      }),
      ...Object.fromEntries(Object.entries(NO_EXECUTION_DEFAULTS).map(([key, value]) => [key, value]))
    });
  }

  return Object.freeze({
    SOURCE_VERIFICATION_STATUSES,
    OWNER_PROOF_TYPES,
    TERMS_REVIEW_STATUSES,
    NO_EXECUTION_DEFAULTS,
    SOURCE_VERIFICATION_REVIEW_FIELDS,
    VERIFICATION_DECISION_FIELDS,
    VERIFICATION_AUDIT_EVENT_FIELDS,
    DEFAULT_VERIFICATION_DECISION,
    SOURCE_VERIFICATION_REVIEW_CONTRACT,
    createSourceVerificationReview
  });
});
