(function nexusTelehealthProviderConnectorContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusTelehealthProviderConnectorContract = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusTelehealthProviderConnectorContractModule() {
  const TELEHEALTH_PROVIDER_STATUSES = Object.freeze([
    "not_configured",
    "provider_verification_required",
    "clinical_governance_review_required",
    "terms_review_required",
    "availability_source_required",
    "live_room_configuration_required",
    "consent_review_required",
    "privacy_security_review_required",
    "sandbox_testing_required",
    "approved_not_live",
    "active_directory_only",
    "rejected_or_blocked",
    "inactive"
  ]);

  const TELEHEALTH_SERVICE_CATEGORIES = Object.freeze([
    "primary_care_virtual_visit",
    "urgent_care_triage",
    "maternal_child_health_virtual_support",
    "pharmacy_consultation",
    "behavioral_health_referral",
    "chronic_care_follow_up",
    "specialist_referral",
    "rural_health_navigation",
    "language_supported_virtual_care",
    "care_coordination"
  ]);

  const NO_EXECUTION_DEFAULTS = Object.freeze({
    noExecution: true,
    directoryContextAllowed: false,
    liveAvailabilityAllowed: false,
    providerContactEnabled: false,
    appointmentSchedulingEnabled: false,
    telehealthRoomEnabled: false,
    cameraPermissionEnabled: false,
    microphonePermissionEnabled: false,
    externalRoomNavigationEnabled: false,
    medicalRecordAccessEnabled: false,
    prescriptionRefillEnabled: false,
    paymentEnabled: false,
    locationSharingEnabled: false,
    emergencyDispatchEnabled: false,
    liveActionEnabled: false,
    providerContacted: false,
    appointmentScheduled: false,
    telehealthRoomOpened: false,
    cameraActivated: false,
    microphoneActivated: false,
    externalRoomNavigated: false,
    userDataShared: false,
    externalActionExecuted: false,
    paymentExecuted: false,
    medicalRecordAccessed: false,
    prescriptionSubmitted: false,
    emergencyDispatched: false,
    locationShared: false,
    callOrMessageSent: false
  });

  const TELEHEALTH_PROVIDER_CONNECTOR_FIELDS = Object.freeze([
    "connectorId",
    "providerName",
    "sourceOwner",
    "connectorStatus",
    "serviceCategories",
    "serviceRegions",
    "supportedLanguages",
    "providerVerificationStatus",
    "clinicalGovernanceStatus",
    "termsReviewStatus",
    "availabilitySourceStatus",
    "liveRoomConfigurationStatus",
    "privacySecurityReviewStatus",
    "freshnessModel",
    "regionalScope",
    "languageScope",
    "allowedResponseStates",
    "liveRoomReadinessGate",
    "patientConsentGate",
    "auditRequirements",
    "auditEvent",
    "directoryContextAllowed",
    "liveAvailabilityAllowed",
    "providerContactEnabled",
    "appointmentSchedulingEnabled",
    "telehealthRoomEnabled",
    "cameraPermissionEnabled",
    "microphonePermissionEnabled",
    "paymentEnabled",
    "liveActionEnabled",
    "noExecution"
  ]);

  const LIVE_ROOM_READINESS_GATE_FIELDS = Object.freeze([
    "requiresUserApproval",
    "requiresProviderConfirmation",
    "requiresClinicalGovernanceReview",
    "requiresAuditLogging",
    "requiresAvailabilityFreshness",
    "requiresLiveRoomConfiguration",
    "requiresPrivacySecurityReview",
    "allowsProviderContact",
    "allowsAppointmentScheduling",
    "allowsTelehealthRoomCreation",
    "allowsCameraActivation",
    "allowsMicrophoneActivation",
    "allowsExternalRoomNavigation"
  ]);

  const PATIENT_CONSENT_GATE_FIELDS = Object.freeze([
    "requiresPurposeDisclosure",
    "requiresUserConsent",
    "requiresMinimumNecessaryData",
    "requiresHealthContextConsent",
    "requiresIdentityVerification",
    "requiresProviderPrivacyTerms",
    "requiresCameraConsent",
    "requiresMicrophoneConsent",
    "allowsPatientDataSharing",
    "allowsMedicalRecordAccess",
    "allowsPrescriptionSubmission",
    "allowsPreciseLocationSharing",
    "allowsPaymentProcessing"
  ]);

  const TELEHEALTH_PROVIDER_AUDIT_EVENT_FIELDS = Object.freeze([
    "eventType",
    "connectorId",
    "connectorStatus",
    "serviceCategories",
    "directoryContextAllowed",
    "liveAvailabilityAllowed",
    "providerContactEnabled",
    "appointmentSchedulingEnabled",
    "telehealthRoomEnabled",
    "cameraPermissionEnabled",
    "microphonePermissionEnabled",
    "paymentEnabled",
    "noExecution",
    "createdAt"
  ]);

  const DEFAULT_LIVE_ROOM_READINESS_GATE = Object.freeze({
    requiresUserApproval: true,
    requiresProviderConfirmation: true,
    requiresClinicalGovernanceReview: true,
    requiresAuditLogging: true,
    requiresAvailabilityFreshness: true,
    requiresLiveRoomConfiguration: true,
    requiresPrivacySecurityReview: true,
    allowsProviderContact: false,
    allowsAppointmentScheduling: false,
    allowsTelehealthRoomCreation: false,
    allowsCameraActivation: false,
    allowsMicrophoneActivation: false,
    allowsExternalRoomNavigation: false
  });

  const DEFAULT_PATIENT_CONSENT_GATE = Object.freeze({
    requiresPurposeDisclosure: true,
    requiresUserConsent: true,
    requiresMinimumNecessaryData: true,
    requiresHealthContextConsent: true,
    requiresIdentityVerification: true,
    requiresProviderPrivacyTerms: true,
    requiresCameraConsent: true,
    requiresMicrophoneConsent: true,
    allowsPatientDataSharing: false,
    allowsMedicalRecordAccess: false,
    allowsPrescriptionSubmission: false,
    allowsPreciseLocationSharing: false,
    allowsPaymentProcessing: false
  });

  const TELEHEALTH_PROVIDER_CONNECTOR_CONTRACT = Object.freeze({
    connectorId: "health.telehealth_provider.not_configured",
    providerName: "",
    sourceOwner: "telehealth provider verification required",
    connectorStatus: "not_configured",
    serviceCategories: Object.freeze([]),
    serviceRegions: Object.freeze([]),
    supportedLanguages: Object.freeze(["en"]),
    providerVerificationStatus: "not_started",
    clinicalGovernanceStatus: "not_reviewed",
    termsReviewStatus: "not_reviewed",
    availabilitySourceStatus: "not_configured",
    liveRoomConfigurationStatus: "not_configured",
    privacySecurityReviewStatus: "not_reviewed",
    freshnessModel: Object.freeze({
      freshnessField: "telehealthProviderLastVerifiedAt",
      staleAfter: "provider-specific",
      displayRequirement: "Show telehealth source, region, service scope, availability freshness, and live-room status before relying on provider context."
    }),
    regionalScope: "not reviewed",
    languageScope: "not reviewed",
    allowedResponseStates: Object.freeze(["provider_directory_result", "telehealth_access_guidance", "unavailable_source_fallback"]),
    liveRoomReadinessGate: DEFAULT_LIVE_ROOM_READINESS_GATE,
    patientConsentGate: DEFAULT_PATIENT_CONSENT_GATE,
    auditRequirements: Object.freeze(["telehealth-provider-reviewed", "live-room-blocked", "camera-microphone-blocked", "health-privacy-boundary-shown"]),
    auditEvent: Object.freeze({
      eventType: "health.telehealth_provider_connector_created",
      connectorId: "health.telehealth_provider.not_configured",
      connectorStatus: "not_configured",
      serviceCategories: Object.freeze([]),
      directoryContextAllowed: false,
      liveAvailabilityAllowed: false,
      providerContactEnabled: false,
      appointmentSchedulingEnabled: false,
      telehealthRoomEnabled: false,
      cameraPermissionEnabled: false,
      microphonePermissionEnabled: false,
      paymentEnabled: false,
      noExecution: true,
      createdAt: null
    }),
    ...NO_EXECUTION_DEFAULTS
  });

  function normalizeConnectorStatus(value) {
    return TELEHEALTH_PROVIDER_STATUSES.includes(value) ? value : TELEHEALTH_PROVIDER_CONNECTOR_CONTRACT.connectorStatus;
  }

  function createTelehealthProviderConnector(overrides = {}) {
    const connectorStatus = normalizeConnectorStatus(overrides.connectorStatus);
    const serviceCategories = Array.isArray(overrides.serviceCategories)
      ? overrides.serviceCategories.filter(category => TELEHEALTH_SERVICE_CATEGORIES.includes(category))
      : [];
    return Object.freeze({
      ...TELEHEALTH_PROVIDER_CONNECTOR_CONTRACT,
      ...overrides,
      connectorStatus,
      serviceCategories: Object.freeze(serviceCategories),
      serviceRegions: Object.freeze(Array.isArray(overrides.serviceRegions) ? overrides.serviceRegions.slice() : []),
      supportedLanguages: Object.freeze(Array.isArray(overrides.supportedLanguages) ? overrides.supportedLanguages.slice() : ["en"]),
      liveRoomReadinessGate: Object.freeze({
        ...DEFAULT_LIVE_ROOM_READINESS_GATE,
        ...(overrides.liveRoomReadinessGate || {}),
        allowsProviderContact: false,
        allowsAppointmentScheduling: false,
        allowsTelehealthRoomCreation: false,
        allowsCameraActivation: false,
        allowsMicrophoneActivation: false,
        allowsExternalRoomNavigation: false
      }),
      patientConsentGate: Object.freeze({
        ...DEFAULT_PATIENT_CONSENT_GATE,
        ...(overrides.patientConsentGate || {}),
        allowsPatientDataSharing: false,
        allowsMedicalRecordAccess: false,
        allowsPrescriptionSubmission: false,
        allowsPreciseLocationSharing: false,
        allowsPaymentProcessing: false
      }),
      auditRequirements: Object.freeze(Array.isArray(overrides.auditRequirements) ? overrides.auditRequirements.slice() : TELEHEALTH_PROVIDER_CONNECTOR_CONTRACT.auditRequirements.slice()),
      auditEvent: Object.freeze({
        ...TELEHEALTH_PROVIDER_CONNECTOR_CONTRACT.auditEvent,
        ...(overrides.auditEvent || {}),
        connectorId: overrides.connectorId || TELEHEALTH_PROVIDER_CONNECTOR_CONTRACT.connectorId,
        connectorStatus,
        serviceCategories: Object.freeze(serviceCategories),
        directoryContextAllowed: false,
        liveAvailabilityAllowed: false,
        providerContactEnabled: false,
        appointmentSchedulingEnabled: false,
        telehealthRoomEnabled: false,
        cameraPermissionEnabled: false,
        microphonePermissionEnabled: false,
        paymentEnabled: false,
        noExecution: true
      }),
      ...Object.fromEntries(Object.entries(NO_EXECUTION_DEFAULTS).map(([key, value]) => [key, value]))
    });
  }

  return Object.freeze({
    TELEHEALTH_PROVIDER_STATUSES,
    TELEHEALTH_SERVICE_CATEGORIES,
    NO_EXECUTION_DEFAULTS,
    TELEHEALTH_PROVIDER_CONNECTOR_FIELDS,
    LIVE_ROOM_READINESS_GATE_FIELDS,
    PATIENT_CONSENT_GATE_FIELDS,
    TELEHEALTH_PROVIDER_AUDIT_EVENT_FIELDS,
    DEFAULT_LIVE_ROOM_READINESS_GATE,
    DEFAULT_PATIENT_CONSENT_GATE,
    TELEHEALTH_PROVIDER_CONNECTOR_CONTRACT,
    createTelehealthProviderConnector
  });
});
