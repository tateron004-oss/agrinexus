(function nexusWorkforceTrainingProviderConnectorContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusWorkforceTrainingProviderConnectorContract = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusWorkforceTrainingProviderConnectorContractModule() {
  const WORKFORCE_TRAINING_PROVIDER_STATUSES = Object.freeze([
    "not_configured",
    "program_partner_verification_required",
    "program_catalog_required",
    "eligibility_source_required",
    "terms_review_required",
    "profile_sharing_review_required",
    "referral_gate_required",
    "application_gate_required",
    "credential_policy_review_required",
    "sandbox_testing_required",
    "approved_not_live",
    "active_source_directory_only",
    "rejected_or_blocked",
    "inactive"
  ]);

  const WORKFORCE_TRAINING_PROGRAM_CATEGORIES = Object.freeze([
    "workforce_training_program",
    "technical_training_program",
    "agriculture_workforce_training",
    "job_readiness_program",
    "career_pathway_program",
    "apprenticeship_program",
    "youth_workforce_program",
    "women_workforce_program",
    "community_workforce_program",
    "language_and_digital_skills_program",
    "eligibility_review_resource",
    "training_referral_boundary"
  ]);

  const NO_EXECUTION_DEFAULTS = Object.freeze({
    noExecution: true,
    programContextAllowed: false,
    liveAvailabilityAllowed: false,
    providerContactEnabled: false,
    profileSharingEnabled: false,
    resumeSharingEnabled: false,
    credentialSharingEnabled: false,
    contactInfoSharingEnabled: false,
    referralSubmissionEnabled: false,
    applicationSubmissionEnabled: false,
    credentialIssuingEnabled: false,
    interviewSchedulingEnabled: false,
    paymentEnabled: false,
    liveActionEnabled: false,
    providerContacted: false,
    profileShared: false,
    resumeShared: false,
    credentialShared: false,
    contactInfoShared: false,
    referralSubmitted: false,
    applicationSubmitted: false,
    credentialIssued: false,
    interviewScheduled: false,
    paymentExecuted: false,
    externalActionExecuted: false,
    callOrMessageSent: false
  });

  const WORKFORCE_TRAINING_PROVIDER_CONNECTOR_FIELDS = Object.freeze([
    "connectorId",
    "providerName",
    "sourceOwner",
    "connectorStatus",
    "programCategories",
    "programRegions",
    "supportedLanguages",
    "partnerVerificationStatus",
    "programCatalogStatus",
    "eligibilitySourceStatus",
    "termsReviewStatus",
    "profileSharingReviewStatus",
    "referralGateStatus",
    "applicationGateStatus",
    "credentialPolicyStatus",
    "freshnessModel",
    "regionalScope",
    "languageScope",
    "allowedResponseStates",
    "profileSharingGate",
    "referralReadinessGate",
    "auditRequirements",
    "auditEvent",
    "programContextAllowed",
    "liveAvailabilityAllowed",
    "providerContactEnabled",
    "profileSharingEnabled",
    "referralSubmissionEnabled",
    "applicationSubmissionEnabled",
    "credentialIssuingEnabled",
    "paymentEnabled",
    "liveActionEnabled",
    "noExecution"
  ]);

  const PROFILE_SHARING_GATE_FIELDS = Object.freeze([
    "requiresUserApproval",
    "requiresPurposeDisclosure",
    "requiresMinimumNecessaryProfile",
    "requiresResumeReview",
    "requiresPartnerVerification",
    "requiresAuditLogging",
    "allowsProfileSharing",
    "allowsResumeSharing",
    "allowsCredentialSharing",
    "allowsContactInfoSharing",
    "allowsExternalNavigation"
  ]);

  const REFERRAL_READINESS_GATE_FIELDS = Object.freeze([
    "requiresProgramPartnerVerification",
    "requiresEligibilitySource",
    "requiresUserApproval",
    "requiresPartnerConfirmation",
    "requiresReferralPolicyReview",
    "requiresApplicationPolicyReview",
    "requiresCredentialPolicyReview",
    "requiresAuditLogging",
    "allowsProgramContext",
    "allowsProviderContact",
    "allowsReferralSubmission",
    "allowsApplicationSubmission",
    "allowsCredentialIssuing",
    "allowsPaymentProcessing",
    "allowsExternalNavigation"
  ]);

  const WORKFORCE_TRAINING_PROVIDER_AUDIT_EVENT_FIELDS = Object.freeze([
    "eventType",
    "connectorId",
    "connectorStatus",
    "programCategories",
    "programContextAllowed",
    "liveAvailabilityAllowed",
    "providerContactEnabled",
    "profileSharingEnabled",
    "referralSubmissionEnabled",
    "applicationSubmissionEnabled",
    "credentialIssuingEnabled",
    "paymentEnabled",
    "noExecution",
    "createdAt"
  ]);

  const DEFAULT_PROFILE_SHARING_GATE = Object.freeze({
    requiresUserApproval: true,
    requiresPurposeDisclosure: true,
    requiresMinimumNecessaryProfile: true,
    requiresResumeReview: true,
    requiresPartnerVerification: true,
    requiresAuditLogging: true,
    allowsProfileSharing: false,
    allowsResumeSharing: false,
    allowsCredentialSharing: false,
    allowsContactInfoSharing: false,
    allowsExternalNavigation: false
  });

  const DEFAULT_REFERRAL_READINESS_GATE = Object.freeze({
    requiresProgramPartnerVerification: true,
    requiresEligibilitySource: true,
    requiresUserApproval: true,
    requiresPartnerConfirmation: true,
    requiresReferralPolicyReview: true,
    requiresApplicationPolicyReview: true,
    requiresCredentialPolicyReview: true,
    requiresAuditLogging: true,
    allowsProgramContext: false,
    allowsProviderContact: false,
    allowsReferralSubmission: false,
    allowsApplicationSubmission: false,
    allowsCredentialIssuing: false,
    allowsPaymentProcessing: false,
    allowsExternalNavigation: false
  });

  const WORKFORCE_TRAINING_PROVIDER_CONNECTOR_CONTRACT = Object.freeze({
    connectorId: "workforce.training_provider.not_configured",
    providerName: "",
    sourceOwner: "workforce training provider verification required",
    connectorStatus: "not_configured",
    programCategories: Object.freeze([]),
    programRegions: Object.freeze([]),
    supportedLanguages: Object.freeze(["en"]),
    partnerVerificationStatus: "not_started",
    programCatalogStatus: "not_configured",
    eligibilitySourceStatus: "not_configured",
    termsReviewStatus: "not_reviewed",
    profileSharingReviewStatus: "not_reviewed",
    referralGateStatus: "not_configured",
    applicationGateStatus: "not_configured",
    credentialPolicyStatus: "not_reviewed",
    freshnessModel: Object.freeze({
      freshnessField: "trainingProviderLastVerifiedAt",
      staleAfter: "workforce-training-provider-specific",
      displayRequirement: "Show training provider source, program scope, freshness, and referral-disabled boundary before relying on provider context."
    }),
    regionalScope: "not reviewed",
    languageScope: "not reviewed",
    allowedResponseStates: Object.freeze(["workforce_program_guidance", "training_source_guidance", "eligibility_preparation", "prepared_referral_preview", "unavailable_source_fallback"]),
    profileSharingGate: DEFAULT_PROFILE_SHARING_GATE,
    referralReadinessGate: DEFAULT_REFERRAL_READINESS_GATE,
    auditRequirements: Object.freeze(["workforce-training-provider-reviewed", "profile-sharing-blocked", "referral-blocked", "application-blocked", "credential-issue-blocked"]),
    auditEvent: Object.freeze({
      eventType: "workforce.training_provider_connector_created",
      connectorId: "workforce.training_provider.not_configured",
      connectorStatus: "not_configured",
      programCategories: Object.freeze([]),
      programContextAllowed: false,
      liveAvailabilityAllowed: false,
      providerContactEnabled: false,
      profileSharingEnabled: false,
      referralSubmissionEnabled: false,
      applicationSubmissionEnabled: false,
      credentialIssuingEnabled: false,
      paymentEnabled: false,
      noExecution: true,
      createdAt: null
    }),
    ...NO_EXECUTION_DEFAULTS
  });

  function normalizeConnectorStatus(value) {
    return WORKFORCE_TRAINING_PROVIDER_STATUSES.includes(value) ? value : WORKFORCE_TRAINING_PROVIDER_CONNECTOR_CONTRACT.connectorStatus;
  }

  function createWorkforceTrainingProviderConnector(overrides = {}) {
    const connectorStatus = normalizeConnectorStatus(overrides.connectorStatus);
    const programCategories = Array.isArray(overrides.programCategories)
      ? overrides.programCategories.filter(category => WORKFORCE_TRAINING_PROGRAM_CATEGORIES.includes(category))
      : [];
    return Object.freeze({
      ...WORKFORCE_TRAINING_PROVIDER_CONNECTOR_CONTRACT,
      ...overrides,
      connectorStatus,
      programCategories: Object.freeze(programCategories),
      programRegions: Object.freeze(Array.isArray(overrides.programRegions) ? overrides.programRegions.slice() : []),
      supportedLanguages: Object.freeze(Array.isArray(overrides.supportedLanguages) ? overrides.supportedLanguages.slice() : ["en"]),
      profileSharingGate: Object.freeze({
        ...DEFAULT_PROFILE_SHARING_GATE,
        ...(overrides.profileSharingGate || {}),
        allowsProfileSharing: false,
        allowsResumeSharing: false,
        allowsCredentialSharing: false,
        allowsContactInfoSharing: false,
        allowsExternalNavigation: false
      }),
      referralReadinessGate: Object.freeze({
        ...DEFAULT_REFERRAL_READINESS_GATE,
        ...(overrides.referralReadinessGate || {}),
        allowsProgramContext: false,
        allowsProviderContact: false,
        allowsReferralSubmission: false,
        allowsApplicationSubmission: false,
        allowsCredentialIssuing: false,
        allowsPaymentProcessing: false,
        allowsExternalNavigation: false
      }),
      auditEvent: Object.freeze({
        ...WORKFORCE_TRAINING_PROVIDER_CONNECTOR_CONTRACT.auditEvent,
        ...(overrides.auditEvent || {}),
        connectorId: overrides.connectorId || WORKFORCE_TRAINING_PROVIDER_CONNECTOR_CONTRACT.connectorId,
        connectorStatus,
        programCategories: Object.freeze(programCategories),
        programContextAllowed: false,
        liveAvailabilityAllowed: false,
        providerContactEnabled: false,
        profileSharingEnabled: false,
        referralSubmissionEnabled: false,
        applicationSubmissionEnabled: false,
        credentialIssuingEnabled: false,
        paymentEnabled: false,
        noExecution: true
      }),
      ...NO_EXECUTION_DEFAULTS
    });
  }

  return Object.freeze({
    WORKFORCE_TRAINING_PROVIDER_STATUSES,
    WORKFORCE_TRAINING_PROGRAM_CATEGORIES,
    NO_EXECUTION_DEFAULTS,
    WORKFORCE_TRAINING_PROVIDER_CONNECTOR_FIELDS,
    PROFILE_SHARING_GATE_FIELDS,
    REFERRAL_READINESS_GATE_FIELDS,
    WORKFORCE_TRAINING_PROVIDER_AUDIT_EVENT_FIELDS,
    DEFAULT_PROFILE_SHARING_GATE,
    DEFAULT_REFERRAL_READINESS_GATE,
    WORKFORCE_TRAINING_PROVIDER_CONNECTOR_CONTRACT,
    createWorkforceTrainingProviderConnector
  });
});

