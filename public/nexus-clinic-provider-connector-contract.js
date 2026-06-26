(function nexusClinicProviderConnectorContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusClinicProviderConnectorContract = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusClinicProviderConnectorContractModule() {
  const CLINIC_PROVIDER_STATUSES = Object.freeze([
    "not_configured",
    "provider_verification_required",
    "clinical_governance_review_required",
    "terms_review_required",
    "availability_source_required",
    "scheduling_gate_required",
    "consent_review_required",
    "sandbox_testing_required",
    "approved_not_live",
    "active_directory_only",
    "rejected_or_blocked",
    "inactive"
  ]);

  const CLINIC_SERVICE_CATEGORIES = Object.freeze([
    "primary_care",
    "urgent_care_guidance",
    "maternal_child_health",
    "pharmacy_access",
    "telehealth_referral",
    "mobile_clinic_referral",
    "lab_referral",
    "vaccination_service",
    "transportation_to_care",
    "community_health_support"
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
    medicalRecordAccessEnabled: false,
    prescriptionRefillEnabled: false,
    paymentEnabled: false,
    locationSharingEnabled: false,
    emergencyDispatchEnabled: false,
    liveActionEnabled: false,
    providerContacted: false,
    appointmentScheduled: false,
    telehealthRoomOpened: false,
    userDataShared: false,
    externalActionExecuted: false,
    paymentExecuted: false,
    medicalRecordAccessed: false,
    prescriptionSubmitted: false,
    emergencyDispatched: false,
    locationShared: false,
    callOrMessageSent: false
  });

  const CLINIC_PROVIDER_CONNECTOR_FIELDS = Object.freeze([
    "connectorId",
    "clinicName",
    "sourceOwner",
    "connectorStatus",
    "serviceCategories",
    "serviceRegions",
    "supportedLanguages",
    "providerVerificationStatus",
    "clinicalGovernanceStatus",
    "termsReviewStatus",
    "availabilitySourceStatus",
    "freshnessModel",
    "regionalScope",
    "languageScope",
    "allowedResponseStates",
    "providerSchedulingGate",
    "patientDataConsentGate",
    "auditRequirements",
    "auditEvent",
    "directoryContextAllowed",
    "liveAvailabilityAllowed",
    "providerContactEnabled",
    "appointmentSchedulingEnabled",
    "telehealthRoomEnabled",
    "paymentEnabled",
    "liveActionEnabled",
    "noExecution"
  ]);

  const PROVIDER_SCHEDULING_GATE_FIELDS = Object.freeze([
    "requiresUserApproval",
    "requiresProviderConfirmation",
    "requiresClinicalGovernanceReview",
    "requiresAuditLogging",
    "requiresAvailabilityFreshness",
    "allowsProviderContact",
    "allowsAppointmentScheduling",
    "allowsReferralHandoff",
    "allowsTelehealthRoomCreation"
  ]);

  const PATIENT_DATA_CONSENT_GATE_FIELDS = Object.freeze([
    "requiresPurposeDisclosure",
    "requiresUserConsent",
    "requiresMinimumNecessaryData",
    "requiresLocationConsent",
    "requiresHealthContextConsent",
    "requiresIdentityVerification",
    "allowsPatientDataSharing",
    "allowsPreciseLocationSharing",
    "allowsMedicalRecordAccess",
    "allowsPrescriptionSubmission",
    "allowsPaymentProcessing"
  ]);

  const CLINIC_PROVIDER_AUDIT_EVENT_FIELDS = Object.freeze([
    "eventType",
    "connectorId",
    "connectorStatus",
    "serviceCategories",
    "directoryContextAllowed",
    "liveAvailabilityAllowed",
    "providerContactEnabled",
    "appointmentSchedulingEnabled",
    "telehealthRoomEnabled",
    "paymentEnabled",
    "noExecution",
    "createdAt"
  ]);

  const DEFAULT_PROVIDER_SCHEDULING_GATE = Object.freeze({
    requiresUserApproval: true,
    requiresProviderConfirmation: true,
    requiresClinicalGovernanceReview: true,
    requiresAuditLogging: true,
    requiresAvailabilityFreshness: true,
    allowsProviderContact: false,
    allowsAppointmentScheduling: false,
    allowsReferralHandoff: false,
    allowsTelehealthRoomCreation: false
  });

  const DEFAULT_PATIENT_DATA_CONSENT_GATE = Object.freeze({
    requiresPurposeDisclosure: true,
    requiresUserConsent: true,
    requiresMinimumNecessaryData: true,
    requiresLocationConsent: true,
    requiresHealthContextConsent: true,
    requiresIdentityVerification: true,
    allowsPatientDataSharing: false,
    allowsPreciseLocationSharing: false,
    allowsMedicalRecordAccess: false,
    allowsPrescriptionSubmission: false,
    allowsPaymentProcessing: false
  });

  const CLINIC_PROVIDER_CONNECTOR_CONTRACT = Object.freeze({
    connectorId: "health.clinic_provider.not_configured",
    clinicName: "",
    sourceOwner: "clinic provider verification required",
    connectorStatus: "not_configured",
    serviceCategories: Object.freeze([]),
    serviceRegions: Object.freeze([]),
    supportedLanguages: Object.freeze(["en"]),
    providerVerificationStatus: "not_started",
    clinicalGovernanceStatus: "not_reviewed",
    termsReviewStatus: "not_reviewed",
    availabilitySourceStatus: "not_configured",
    freshnessModel: Object.freeze({
      freshnessField: "clinicLastVerifiedAt",
      staleAfter: "provider-specific",
      displayRequirement: "Show clinic source, region, service scope, and freshness before relying on provider context."
    }),
    regionalScope: "not reviewed",
    languageScope: "not reviewed",
    allowedResponseStates: Object.freeze(["provider_directory_result", "general_guidance", "unavailable_source_fallback"]),
    providerSchedulingGate: DEFAULT_PROVIDER_SCHEDULING_GATE,
    patientDataConsentGate: DEFAULT_PATIENT_DATA_CONSENT_GATE,
    auditRequirements: Object.freeze(["clinic-provider-reviewed", "provider-contact-blocked", "scheduling-blocked", "health-privacy-boundary-shown"]),
    auditEvent: Object.freeze({
      eventType: "health.clinic_provider_connector_created",
      connectorId: "health.clinic_provider.not_configured",
      connectorStatus: "not_configured",
      serviceCategories: Object.freeze([]),
      directoryContextAllowed: false,
      liveAvailabilityAllowed: false,
      providerContactEnabled: false,
      appointmentSchedulingEnabled: false,
      telehealthRoomEnabled: false,
      paymentEnabled: false,
      noExecution: true,
      createdAt: null
    }),
    ...NO_EXECUTION_DEFAULTS
  });

  function normalizeConnectorStatus(value) {
    return CLINIC_PROVIDER_STATUSES.includes(value) ? value : CLINIC_PROVIDER_CONNECTOR_CONTRACT.connectorStatus;
  }

  function createClinicProviderConnector(overrides = {}) {
    const connectorStatus = normalizeConnectorStatus(overrides.connectorStatus);
    const serviceCategories = Array.isArray(overrides.serviceCategories)
      ? overrides.serviceCategories.filter(category => CLINIC_SERVICE_CATEGORIES.includes(category))
      : [];
    return Object.freeze({
      ...CLINIC_PROVIDER_CONNECTOR_CONTRACT,
      ...overrides,
      connectorStatus,
      serviceCategories: Object.freeze(serviceCategories),
      serviceRegions: Object.freeze(Array.isArray(overrides.serviceRegions) ? overrides.serviceRegions.slice() : []),
      supportedLanguages: Object.freeze(Array.isArray(overrides.supportedLanguages) ? overrides.supportedLanguages.slice() : ["en"]),
      providerSchedulingGate: Object.freeze({
        ...DEFAULT_PROVIDER_SCHEDULING_GATE,
        ...(overrides.providerSchedulingGate || {}),
        allowsProviderContact: false,
        allowsAppointmentScheduling: false,
        allowsReferralHandoff: false,
        allowsTelehealthRoomCreation: false
      }),
      patientDataConsentGate: Object.freeze({
        ...DEFAULT_PATIENT_DATA_CONSENT_GATE,
        ...(overrides.patientDataConsentGate || {}),
        allowsPatientDataSharing: false,
        allowsPreciseLocationSharing: false,
        allowsMedicalRecordAccess: false,
        allowsPrescriptionSubmission: false,
        allowsPaymentProcessing: false
      }),
      auditRequirements: Object.freeze(Array.isArray(overrides.auditRequirements) ? overrides.auditRequirements.slice() : CLINIC_PROVIDER_CONNECTOR_CONTRACT.auditRequirements.slice()),
      auditEvent: Object.freeze({
        ...CLINIC_PROVIDER_CONNECTOR_CONTRACT.auditEvent,
        ...(overrides.auditEvent || {}),
        connectorId: overrides.connectorId || CLINIC_PROVIDER_CONNECTOR_CONTRACT.connectorId,
        connectorStatus,
        serviceCategories: Object.freeze(serviceCategories),
        directoryContextAllowed: false,
        liveAvailabilityAllowed: false,
        providerContactEnabled: false,
        appointmentSchedulingEnabled: false,
        telehealthRoomEnabled: false,
        paymentEnabled: false,
        noExecution: true
      }),
      ...Object.fromEntries(Object.entries(NO_EXECUTION_DEFAULTS).map(([key, value]) => [key, value]))
    });
  }

  return Object.freeze({
    CLINIC_PROVIDER_STATUSES,
    CLINIC_SERVICE_CATEGORIES,
    NO_EXECUTION_DEFAULTS,
    CLINIC_PROVIDER_CONNECTOR_FIELDS,
    PROVIDER_SCHEDULING_GATE_FIELDS,
    PATIENT_DATA_CONSENT_GATE_FIELDS,
    CLINIC_PROVIDER_AUDIT_EVENT_FIELDS,
    DEFAULT_PROVIDER_SCHEDULING_GATE,
    DEFAULT_PATIENT_DATA_CONSENT_GATE,
    CLINIC_PROVIDER_CONNECTOR_CONTRACT,
    createClinicProviderConnector
  });
});
