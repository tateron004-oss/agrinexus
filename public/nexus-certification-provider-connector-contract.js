(function nexusCertificationProviderConnectorContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusCertificationProviderConnectorContract = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusCertificationProviderConnectorContractModule() {
  const CERTIFICATION_PROVIDER_STATUSES = Object.freeze([
    "not_configured",
    "certification_partner_verification_required",
    "credential_catalog_required",
    "eligibility_evidence_required",
    "identity_consent_review_required",
    "terms_review_required",
    "certificate_issue_gate_required",
    "transcript_sharing_review_required",
    "credential_policy_review_required",
    "sandbox_testing_required",
    "approved_not_live",
    "active_source_directory_only",
    "rejected_or_blocked",
    "inactive"
  ]);

  const CREDENTIAL_CATEGORIES = Object.freeze([
    "workforce_certificate",
    "technical_certificate",
    "agriculture_certificate",
    "apprenticeship_credential",
    "micro_credential",
    "digital_badge",
    "skills_transcript",
    "course_completion_certificate",
    "language_or_accessibility_certificate",
    "partner_verified_credential",
    "identity_review_boundary",
    "credential_issue_boundary"
  ]);

  const NO_EXECUTION_DEFAULTS = Object.freeze({
    noExecution: true,
    credentialContextAllowed: false,
    liveAvailabilityAllowed: false,
    providerContactEnabled: false,
    identityVerificationEnabled: false,
    identityDocumentSharingEnabled: false,
    profileSharingEnabled: false,
    transcriptSharingEnabled: false,
    certificateIssuingEnabled: false,
    credentialPublishingEnabled: false,
    transcriptSubmissionEnabled: false,
    paymentEnabled: false,
    liveActionEnabled: false,
    providerContacted: false,
    identityVerified: false,
    identityDocumentShared: false,
    profileShared: false,
    transcriptShared: false,
    certificateIssued: false,
    credentialPublished: false,
    transcriptSubmitted: false,
    paymentExecuted: false,
    externalActionExecuted: false,
    callOrMessageSent: false
  });

  const CERTIFICATION_PROVIDER_CONNECTOR_FIELDS = Object.freeze([
    "connectorId",
    "providerName",
    "sourceOwner",
    "connectorStatus",
    "credentialCategories",
    "credentialRegions",
    "supportedLanguages",
    "partnerVerificationStatus",
    "credentialCatalogStatus",
    "eligibilityEvidenceStatus",
    "identityConsentReviewStatus",
    "termsReviewStatus",
    "certificateIssueGateStatus",
    "transcriptSharingReviewStatus",
    "credentialPolicyStatus",
    "freshnessModel",
    "regionalScope",
    "languageScope",
    "allowedResponseStates",
    "identityConsentGate",
    "certificateIssueGate",
    "auditRequirements",
    "auditEvent",
    "credentialContextAllowed",
    "liveAvailabilityAllowed",
    "providerContactEnabled",
    "identityVerificationEnabled",
    "profileSharingEnabled",
    "transcriptSharingEnabled",
    "certificateIssuingEnabled",
    "credentialPublishingEnabled",
    "paymentEnabled",
    "liveActionEnabled",
    "noExecution"
  ]);

  const IDENTITY_CONSENT_GATE_FIELDS = Object.freeze([
    "requiresUserApproval",
    "requiresPurposeDisclosure",
    "requiresIdentityConsent",
    "requiresMinimumNecessaryIdentity",
    "requiresEvidenceReview",
    "requiresPartnerVerification",
    "requiresAuditLogging",
    "allowsIdentityVerification",
    "allowsIdentityDocumentSharing",
    "allowsProfileSharing",
    "allowsTranscriptSharing",
    "allowsExternalNavigation"
  ]);

  const CERTIFICATE_ISSUE_GATE_FIELDS = Object.freeze([
    "requiresCertificationPartnerVerification",
    "requiresCredentialCatalog",
    "requiresEligibilityEvidence",
    "requiresUserApproval",
    "requiresPartnerConfirmation",
    "requiresCredentialPolicyReview",
    "requiresIdentityConsent",
    "requiresAuditLogging",
    "allowsCredentialContext",
    "allowsProviderContact",
    "allowsCertificateIssuing",
    "allowsCredentialPublishing",
    "allowsTranscriptSubmission",
    "allowsPaymentProcessing",
    "allowsExternalNavigation"
  ]);

  const CERTIFICATION_PROVIDER_AUDIT_EVENT_FIELDS = Object.freeze([
    "eventType",
    "connectorId",
    "connectorStatus",
    "credentialCategories",
    "credentialContextAllowed",
    "liveAvailabilityAllowed",
    "providerContactEnabled",
    "identityVerificationEnabled",
    "profileSharingEnabled",
    "transcriptSharingEnabled",
    "certificateIssuingEnabled",
    "credentialPublishingEnabled",
    "paymentEnabled",
    "noExecution",
    "createdAt"
  ]);

  const DEFAULT_IDENTITY_CONSENT_GATE = Object.freeze({
    requiresUserApproval: true,
    requiresPurposeDisclosure: true,
    requiresIdentityConsent: true,
    requiresMinimumNecessaryIdentity: true,
    requiresEvidenceReview: true,
    requiresPartnerVerification: true,
    requiresAuditLogging: true,
    allowsIdentityVerification: false,
    allowsIdentityDocumentSharing: false,
    allowsProfileSharing: false,
    allowsTranscriptSharing: false,
    allowsExternalNavigation: false
  });

  const DEFAULT_CERTIFICATE_ISSUE_GATE = Object.freeze({
    requiresCertificationPartnerVerification: true,
    requiresCredentialCatalog: true,
    requiresEligibilityEvidence: true,
    requiresUserApproval: true,
    requiresPartnerConfirmation: true,
    requiresCredentialPolicyReview: true,
    requiresIdentityConsent: true,
    requiresAuditLogging: true,
    allowsCredentialContext: false,
    allowsProviderContact: false,
    allowsCertificateIssuing: false,
    allowsCredentialPublishing: false,
    allowsTranscriptSubmission: false,
    allowsPaymentProcessing: false,
    allowsExternalNavigation: false
  });

  const CERTIFICATION_PROVIDER_CONNECTOR_CONTRACT = Object.freeze({
    connectorId: "workforce.certification_provider.not_configured",
    providerName: "",
    sourceOwner: "certification provider verification required",
    connectorStatus: "not_configured",
    credentialCategories: Object.freeze([]),
    credentialRegions: Object.freeze([]),
    supportedLanguages: Object.freeze(["en"]),
    partnerVerificationStatus: "not_started",
    credentialCatalogStatus: "not_configured",
    eligibilityEvidenceStatus: "not_configured",
    identityConsentReviewStatus: "not_reviewed",
    termsReviewStatus: "not_reviewed",
    certificateIssueGateStatus: "not_configured",
    transcriptSharingReviewStatus: "not_reviewed",
    credentialPolicyStatus: "not_reviewed",
    freshnessModel: Object.freeze({
      freshnessField: "certificationProviderLastVerifiedAt",
      staleAfter: "certification-provider-specific",
      displayRequirement: "Show certification provider source, credential scope, freshness, and certificate-issue-disabled boundary before relying on credential context."
    }),
    regionalScope: "not reviewed",
    languageScope: "not reviewed",
    allowedResponseStates: Object.freeze(["credential_source_guidance", "certificate_readiness_guidance", "eligibility_evidence_preparation", "identity_consent_preparation", "unavailable_source_fallback"]),
    identityConsentGate: DEFAULT_IDENTITY_CONSENT_GATE,
    certificateIssueGate: DEFAULT_CERTIFICATE_ISSUE_GATE,
    auditRequirements: Object.freeze(["certification-provider-reviewed", "identity-consent-boundary-shown", "certificate-issue-blocked", "transcript-sharing-blocked", "credential-publishing-blocked"]),
    auditEvent: Object.freeze({
      eventType: "workforce.certification_provider_connector_created",
      connectorId: "workforce.certification_provider.not_configured",
      connectorStatus: "not_configured",
      credentialCategories: Object.freeze([]),
      credentialContextAllowed: false,
      liveAvailabilityAllowed: false,
      providerContactEnabled: false,
      identityVerificationEnabled: false,
      profileSharingEnabled: false,
      transcriptSharingEnabled: false,
      certificateIssuingEnabled: false,
      credentialPublishingEnabled: false,
      paymentEnabled: false,
      noExecution: true,
      createdAt: null
    }),
    ...NO_EXECUTION_DEFAULTS
  });

  function normalizeConnectorStatus(value) {
    return CERTIFICATION_PROVIDER_STATUSES.includes(value) ? value : CERTIFICATION_PROVIDER_CONNECTOR_CONTRACT.connectorStatus;
  }

  function createCertificationProviderConnector(overrides = {}) {
    const connectorStatus = normalizeConnectorStatus(overrides.connectorStatus);
    const credentialCategories = Array.isArray(overrides.credentialCategories)
      ? overrides.credentialCategories.filter(category => CREDENTIAL_CATEGORIES.includes(category))
      : [];
    return Object.freeze({
      ...CERTIFICATION_PROVIDER_CONNECTOR_CONTRACT,
      ...overrides,
      connectorStatus,
      credentialCategories: Object.freeze(credentialCategories),
      credentialRegions: Object.freeze(Array.isArray(overrides.credentialRegions) ? overrides.credentialRegions.slice() : []),
      supportedLanguages: Object.freeze(Array.isArray(overrides.supportedLanguages) ? overrides.supportedLanguages.slice() : ["en"]),
      identityConsentGate: Object.freeze({
        ...DEFAULT_IDENTITY_CONSENT_GATE,
        ...(overrides.identityConsentGate || {}),
        allowsIdentityVerification: false,
        allowsIdentityDocumentSharing: false,
        allowsProfileSharing: false,
        allowsTranscriptSharing: false,
        allowsExternalNavigation: false
      }),
      certificateIssueGate: Object.freeze({
        ...DEFAULT_CERTIFICATE_ISSUE_GATE,
        ...(overrides.certificateIssueGate || {}),
        allowsCredentialContext: false,
        allowsProviderContact: false,
        allowsCertificateIssuing: false,
        allowsCredentialPublishing: false,
        allowsTranscriptSubmission: false,
        allowsPaymentProcessing: false,
        allowsExternalNavigation: false
      }),
      auditEvent: Object.freeze({
        ...CERTIFICATION_PROVIDER_CONNECTOR_CONTRACT.auditEvent,
        ...(overrides.auditEvent || {}),
        connectorId: overrides.connectorId || CERTIFICATION_PROVIDER_CONNECTOR_CONTRACT.connectorId,
        connectorStatus,
        credentialCategories: Object.freeze(credentialCategories),
        credentialContextAllowed: false,
        liveAvailabilityAllowed: false,
        providerContactEnabled: false,
        identityVerificationEnabled: false,
        profileSharingEnabled: false,
        transcriptSharingEnabled: false,
        certificateIssuingEnabled: false,
        credentialPublishingEnabled: false,
        paymentEnabled: false,
        noExecution: true
      }),
      ...NO_EXECUTION_DEFAULTS
    });
  }

  return Object.freeze({
    CERTIFICATION_PROVIDER_STATUSES,
    CREDENTIAL_CATEGORIES,
    NO_EXECUTION_DEFAULTS,
    CERTIFICATION_PROVIDER_CONNECTOR_FIELDS,
    IDENTITY_CONSENT_GATE_FIELDS,
    CERTIFICATE_ISSUE_GATE_FIELDS,
    CERTIFICATION_PROVIDER_AUDIT_EVENT_FIELDS,
    DEFAULT_IDENTITY_CONSENT_GATE,
    DEFAULT_CERTIFICATE_ISSUE_GATE,
    CERTIFICATION_PROVIDER_CONNECTOR_CONTRACT,
    createCertificationProviderConnector
  });
});

