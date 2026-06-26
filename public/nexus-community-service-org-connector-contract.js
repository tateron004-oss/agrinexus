(function nexusCommunityServiceOrgConnectorContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusCommunityServiceOrgConnectorContract = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusCommunityServiceOrgConnectorContractModule() {
  const COMMUNITY_SERVICE_ORG_STATUSES = Object.freeze([
    "not_configured",
    "service_org_verification_required",
    "service_directory_required",
    "eligibility_source_required",
    "jurisdiction_review_required",
    "terms_review_required",
    "privacy_review_required",
    "referral_gate_required",
    "application_gate_required",
    "appointment_gate_required",
    "sandbox_testing_required",
    "approved_not_live",
    "active_source_directory_only",
    "rejected_or_blocked",
    "inactive"
  ]);

  const COMMUNITY_SERVICE_CATEGORIES = Object.freeze([
    "ngo_community_service",
    "government_service_agency",
    "food_shelter_household_support",
    "family_child_support",
    "disability_accessibility_support",
    "legal_civil_support",
    "digital_access_support",
    "language_translation_support",
    "workforce_community_support",
    "health_access_navigation",
    "eligibility_review_resource",
    "community_referral_boundary"
  ]);

  const NO_EXECUTION_DEFAULTS = Object.freeze({
    noExecution: true,
    communityContextAllowed: false,
    liveAvailabilityAllowed: false,
    agencyContactEnabled: false,
    caseworkerContactEnabled: false,
    personalDataSharingEnabled: false,
    profileSharingEnabled: false,
    contactInfoSharingEnabled: false,
    referralSubmissionEnabled: false,
    applicationSubmissionEnabled: false,
    appointmentSchedulingEnabled: false,
    accountCreationEnabled: false,
    locationSharingEnabled: false,
    paymentEnabled: false,
    emergencyDispatchEnabled: false,
    liveActionEnabled: false,
    agencyContacted: false,
    caseworkerContacted: false,
    personalDataShared: false,
    profileShared: false,
    contactInfoShared: false,
    referralSubmitted: false,
    applicationSubmitted: false,
    appointmentScheduled: false,
    accountCreated: false,
    locationShared: false,
    paymentExecuted: false,
    emergencyDispatched: false,
    externalActionExecuted: false,
    callOrMessageSent: false
  });

  const COMMUNITY_SERVICE_ORG_CONNECTOR_FIELDS = Object.freeze([
    "connectorId",
    "providerName",
    "sourceOwner",
    "connectorStatus",
    "serviceCategories",
    "serviceRegions",
    "supportedLanguages",
    "serviceOrgVerificationStatus",
    "serviceDirectoryStatus",
    "eligibilitySourceStatus",
    "jurisdictionReviewStatus",
    "termsReviewStatus",
    "privacyReviewStatus",
    "referralGateStatus",
    "applicationGateStatus",
    "appointmentGateStatus",
    "freshnessModel",
    "regionalScope",
    "languageScope",
    "allowedResponseStates",
    "personalDataSharingGate",
    "referralReadinessGate",
    "auditRequirements",
    "auditEvent",
    "communityContextAllowed",
    "liveAvailabilityAllowed",
    "agencyContactEnabled",
    "caseworkerContactEnabled",
    "personalDataSharingEnabled",
    "referralSubmissionEnabled",
    "applicationSubmissionEnabled",
    "appointmentSchedulingEnabled",
    "accountCreationEnabled",
    "locationSharingEnabled",
    "paymentEnabled",
    "emergencyDispatchEnabled",
    "liveActionEnabled",
    "noExecution"
  ]);

  const PERSONAL_DATA_SHARING_GATE_FIELDS = Object.freeze([
    "requiresUserApproval",
    "requiresPurposeDisclosure",
    "requiresMinimumNecessaryData",
    "requiresPrivacyReview",
    "requiresServiceOrgVerification",
    "requiresAuditLogging",
    "allowsPersonalDataSharing",
    "allowsProfileSharing",
    "allowsLocationSharing",
    "allowsContactInfoSharing",
    "allowsExternalNavigation"
  ]);

  const REFERRAL_READINESS_GATE_FIELDS = Object.freeze([
    "requiresServiceOrgVerification",
    "requiresEligibilitySource",
    "requiresJurisdictionReview",
    "requiresUserApproval",
    "requiresPartnerConfirmation",
    "requiresReferralPolicyReview",
    "requiresApplicationPolicyReview",
    "requiresAppointmentPolicyReview",
    "requiresAuditLogging",
    "allowsCommunityContext",
    "allowsAgencyContact",
    "allowsCaseworkerContact",
    "allowsReferralSubmission",
    "allowsApplicationSubmission",
    "allowsAppointmentScheduling",
    "allowsAccountCreation",
    "allowsPaymentProcessing",
    "allowsEmergencyDispatch",
    "allowsExternalNavigation"
  ]);

  const COMMUNITY_SERVICE_ORG_AUDIT_EVENT_FIELDS = Object.freeze([
    "eventType",
    "connectorId",
    "connectorStatus",
    "serviceCategories",
    "communityContextAllowed",
    "liveAvailabilityAllowed",
    "agencyContactEnabled",
    "caseworkerContactEnabled",
    "personalDataSharingEnabled",
    "referralSubmissionEnabled",
    "applicationSubmissionEnabled",
    "appointmentSchedulingEnabled",
    "accountCreationEnabled",
    "locationSharingEnabled",
    "paymentEnabled",
    "emergencyDispatchEnabled",
    "noExecution",
    "createdAt"
  ]);

  const DEFAULT_PERSONAL_DATA_SHARING_GATE = Object.freeze({
    requiresUserApproval: true,
    requiresPurposeDisclosure: true,
    requiresMinimumNecessaryData: true,
    requiresPrivacyReview: true,
    requiresServiceOrgVerification: true,
    requiresAuditLogging: true,
    allowsPersonalDataSharing: false,
    allowsProfileSharing: false,
    allowsLocationSharing: false,
    allowsContactInfoSharing: false,
    allowsExternalNavigation: false
  });

  const DEFAULT_REFERRAL_READINESS_GATE = Object.freeze({
    requiresServiceOrgVerification: true,
    requiresEligibilitySource: true,
    requiresJurisdictionReview: true,
    requiresUserApproval: true,
    requiresPartnerConfirmation: true,
    requiresReferralPolicyReview: true,
    requiresApplicationPolicyReview: true,
    requiresAppointmentPolicyReview: true,
    requiresAuditLogging: true,
    allowsCommunityContext: false,
    allowsAgencyContact: false,
    allowsCaseworkerContact: false,
    allowsReferralSubmission: false,
    allowsApplicationSubmission: false,
    allowsAppointmentScheduling: false,
    allowsAccountCreation: false,
    allowsPaymentProcessing: false,
    allowsEmergencyDispatch: false,
    allowsExternalNavigation: false
  });

  const COMMUNITY_SERVICE_ORG_CONNECTOR_CONTRACT = Object.freeze({
    connectorId: "community.service_org.not_configured",
    providerName: "",
    sourceOwner: "community service organization verification required",
    connectorStatus: "not_configured",
    serviceCategories: Object.freeze([]),
    serviceRegions: Object.freeze([]),
    supportedLanguages: Object.freeze(["en"]),
    serviceOrgVerificationStatus: "not_started",
    serviceDirectoryStatus: "not_configured",
    eligibilitySourceStatus: "not_configured",
    jurisdictionReviewStatus: "not_reviewed",
    termsReviewStatus: "not_reviewed",
    privacyReviewStatus: "not_reviewed",
    referralGateStatus: "not_configured",
    applicationGateStatus: "not_configured",
    appointmentGateStatus: "not_configured",
    freshnessModel: Object.freeze({
      freshnessField: "communityServiceOrgLastVerifiedAt",
      staleAfter: "community-service-org-specific",
      displayRequirement: "Show community service organization source, jurisdiction, freshness, and referral-disabled boundary before relying on partner context."
    }),
    regionalScope: "not reviewed",
    languageScope: "not reviewed",
    allowedResponseStates: Object.freeze(["community_resource_guidance", "service_directory_guidance", "eligibility_preparation", "prepared_referral_preview", "unavailable_source_fallback"]),
    personalDataSharingGate: DEFAULT_PERSONAL_DATA_SHARING_GATE,
    referralReadinessGate: DEFAULT_REFERRAL_READINESS_GATE,
    auditRequirements: Object.freeze(["community-service-org-reviewed", "personal-data-sharing-blocked", "referral-blocked", "application-blocked", "appointment-blocked", "emergency-dispatch-blocked"]),
    auditEvent: Object.freeze({
      eventType: "community.service_org_connector_created",
      connectorId: "community.service_org.not_configured",
      connectorStatus: "not_configured",
      serviceCategories: Object.freeze([]),
      communityContextAllowed: false,
      liveAvailabilityAllowed: false,
      agencyContactEnabled: false,
      caseworkerContactEnabled: false,
      personalDataSharingEnabled: false,
      referralSubmissionEnabled: false,
      applicationSubmissionEnabled: false,
      appointmentSchedulingEnabled: false,
      accountCreationEnabled: false,
      locationSharingEnabled: false,
      paymentEnabled: false,
      emergencyDispatchEnabled: false,
      noExecution: true,
      createdAt: null
    }),
    ...NO_EXECUTION_DEFAULTS
  });

  function normalizeConnectorStatus(value) {
    return COMMUNITY_SERVICE_ORG_STATUSES.includes(value) ? value : COMMUNITY_SERVICE_ORG_CONNECTOR_CONTRACT.connectorStatus;
  }

  function createCommunityServiceOrgConnector(overrides = {}) {
    const connectorStatus = normalizeConnectorStatus(overrides.connectorStatus);
    const serviceCategories = Array.isArray(overrides.serviceCategories)
      ? overrides.serviceCategories.filter(category => COMMUNITY_SERVICE_CATEGORIES.includes(category))
      : [];
    return Object.freeze({
      ...COMMUNITY_SERVICE_ORG_CONNECTOR_CONTRACT,
      ...overrides,
      connectorStatus,
      serviceCategories: Object.freeze(serviceCategories),
      serviceRegions: Object.freeze(Array.isArray(overrides.serviceRegions) ? overrides.serviceRegions.slice() : []),
      supportedLanguages: Object.freeze(Array.isArray(overrides.supportedLanguages) ? overrides.supportedLanguages.slice() : ["en"]),
      personalDataSharingGate: Object.freeze({
        ...DEFAULT_PERSONAL_DATA_SHARING_GATE,
        ...(overrides.personalDataSharingGate || {}),
        allowsPersonalDataSharing: false,
        allowsProfileSharing: false,
        allowsLocationSharing: false,
        allowsContactInfoSharing: false,
        allowsExternalNavigation: false
      }),
      referralReadinessGate: Object.freeze({
        ...DEFAULT_REFERRAL_READINESS_GATE,
        ...(overrides.referralReadinessGate || {}),
        allowsCommunityContext: false,
        allowsAgencyContact: false,
        allowsCaseworkerContact: false,
        allowsReferralSubmission: false,
        allowsApplicationSubmission: false,
        allowsAppointmentScheduling: false,
        allowsAccountCreation: false,
        allowsPaymentProcessing: false,
        allowsEmergencyDispatch: false,
        allowsExternalNavigation: false
      }),
      auditEvent: Object.freeze({
        ...COMMUNITY_SERVICE_ORG_CONNECTOR_CONTRACT.auditEvent,
        ...(overrides.auditEvent || {}),
        connectorId: overrides.connectorId || COMMUNITY_SERVICE_ORG_CONNECTOR_CONTRACT.connectorId,
        connectorStatus,
        serviceCategories: Object.freeze(serviceCategories),
        communityContextAllowed: false,
        liveAvailabilityAllowed: false,
        agencyContactEnabled: false,
        caseworkerContactEnabled: false,
        personalDataSharingEnabled: false,
        referralSubmissionEnabled: false,
        applicationSubmissionEnabled: false,
        appointmentSchedulingEnabled: false,
        accountCreationEnabled: false,
        locationSharingEnabled: false,
        paymentEnabled: false,
        emergencyDispatchEnabled: false,
        noExecution: true
      }),
      ...NO_EXECUTION_DEFAULTS
    });
  }

  return Object.freeze({
    COMMUNITY_SERVICE_ORG_STATUSES,
    COMMUNITY_SERVICE_CATEGORIES,
    NO_EXECUTION_DEFAULTS,
    COMMUNITY_SERVICE_ORG_CONNECTOR_FIELDS,
    PERSONAL_DATA_SHARING_GATE_FIELDS,
    REFERRAL_READINESS_GATE_FIELDS,
    COMMUNITY_SERVICE_ORG_AUDIT_EVENT_FIELDS,
    DEFAULT_PERSONAL_DATA_SHARING_GATE,
    DEFAULT_REFERRAL_READINESS_GATE,
    COMMUNITY_SERVICE_ORG_CONNECTOR_CONTRACT,
    createCommunityServiceOrgConnector
  });
});

