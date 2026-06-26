(function nexusPharmacyProviderConnectorContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusPharmacyProviderConnectorContract = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusPharmacyProviderConnectorContractModule() {
  const PHARMACY_PROVIDER_STATUSES = Object.freeze([
    "not_configured",
    "pharmacy_verification_required",
    "directory_source_required",
    "terms_review_required",
    "regulated_workflow_review_required",
    "refill_gate_required",
    "patient_consent_review_required",
    "payment_review_required",
    "sandbox_testing_required",
    "approved_not_live",
    "active_directory_only",
    "rejected_or_blocked",
    "inactive"
  ]);

  const PHARMACY_SERVICE_CATEGORIES = Object.freeze([
    "pharmacy_directory",
    "medicine_access_guidance",
    "refill_readiness_review",
    "pharmacist_consult_boundary",
    "mobile_clinic_pharmacy_support",
    "inventory_context",
    "pickup_hours_context",
    "delivery_option_context",
    "insurance_payment_boundary",
    "language_supported_pharmacy_access"
  ]);

  const NO_EXECUTION_DEFAULTS = Object.freeze({
    noExecution: true,
    directoryContextAllowed: false,
    liveInventoryAllowed: false,
    pharmacyContactEnabled: false,
    refillPreparationEnabled: false,
    refillExecutionEnabled: false,
    prescriptionSubmissionEnabled: false,
    medicalRecordAccessEnabled: false,
    medicationDataSharingEnabled: false,
    paymentEnabled: false,
    locationSharingEnabled: false,
    deliveryDispatchEnabled: false,
    emergencyDispatchEnabled: false,
    liveActionEnabled: false,
    pharmacyContacted: false,
    refillPrepared: false,
    refillSubmitted: false,
    prescriptionSubmitted: false,
    patientDataShared: false,
    medicationDataShared: false,
    paymentExecuted: false,
    locationShared: false,
    deliveryDispatched: false,
    emergencyDispatched: false,
    externalActionExecuted: false,
    callOrMessageSent: false
  });

  const PHARMACY_PROVIDER_CONNECTOR_FIELDS = Object.freeze([
    "connectorId",
    "pharmacyName",
    "sourceOwner",
    "connectorStatus",
    "serviceCategories",
    "serviceRegions",
    "supportedLanguages",
    "pharmacyVerificationStatus",
    "directorySourceStatus",
    "termsReviewStatus",
    "regulatedWorkflowReviewStatus",
    "refillGateStatus",
    "patientConsentReviewStatus",
    "paymentReviewStatus",
    "freshnessModel",
    "regionalScope",
    "languageScope",
    "allowedResponseStates",
    "pharmacyActionGate",
    "patientConsentGate",
    "auditRequirements",
    "auditEvent",
    "directoryContextAllowed",
    "liveInventoryAllowed",
    "pharmacyContactEnabled",
    "refillExecutionEnabled",
    "prescriptionSubmissionEnabled",
    "paymentEnabled",
    "liveActionEnabled",
    "noExecution"
  ]);

  const PHARMACY_ACTION_GATE_FIELDS = Object.freeze([
    "requiresPharmacyVerification",
    "requiresDirectoryFreshness",
    "requiresRegulatedWorkflowReview",
    "requiresUserApproval",
    "requiresPharmacyConfirmation",
    "requiresPrescriberAuthorization",
    "requiresAuditLogging",
    "allowsDirectoryContext",
    "allowsPharmacyContact",
    "allowsRefillPreparation",
    "allowsRefillExecution",
    "allowsPrescriptionSubmission",
    "allowsPaymentProcessing",
    "allowsExternalNavigation"
  ]);

  const PATIENT_CONSENT_GATE_FIELDS = Object.freeze([
    "requiresPurposeDisclosure",
    "requiresUserConsent",
    "requiresMinimumNecessaryData",
    "requiresMedicationContextConsent",
    "requiresHealthContextConsent",
    "requiresIdentityVerification",
    "requiresPaymentConsent",
    "allowsPatientDataSharing",
    "allowsMedicationDataSharing",
    "allowsMedicalRecordAccess",
    "allowsPrescriptionSubmission",
    "allowsPaymentProcessing",
    "allowsLocationSharing"
  ]);

  const PHARMACY_PROVIDER_AUDIT_EVENT_FIELDS = Object.freeze([
    "eventType",
    "connectorId",
    "connectorStatus",
    "serviceCategories",
    "directoryContextAllowed",
    "liveInventoryAllowed",
    "pharmacyContactEnabled",
    "refillExecutionEnabled",
    "prescriptionSubmissionEnabled",
    "paymentEnabled",
    "noExecution",
    "createdAt"
  ]);

  const DEFAULT_PHARMACY_ACTION_GATE = Object.freeze({
    requiresPharmacyVerification: true,
    requiresDirectoryFreshness: true,
    requiresRegulatedWorkflowReview: true,
    requiresUserApproval: true,
    requiresPharmacyConfirmation: true,
    requiresPrescriberAuthorization: true,
    requiresAuditLogging: true,
    allowsDirectoryContext: false,
    allowsPharmacyContact: false,
    allowsRefillPreparation: false,
    allowsRefillExecution: false,
    allowsPrescriptionSubmission: false,
    allowsPaymentProcessing: false,
    allowsExternalNavigation: false
  });

  const DEFAULT_PATIENT_CONSENT_GATE = Object.freeze({
    requiresPurposeDisclosure: true,
    requiresUserConsent: true,
    requiresMinimumNecessaryData: true,
    requiresMedicationContextConsent: true,
    requiresHealthContextConsent: true,
    requiresIdentityVerification: true,
    requiresPaymentConsent: true,
    allowsPatientDataSharing: false,
    allowsMedicationDataSharing: false,
    allowsMedicalRecordAccess: false,
    allowsPrescriptionSubmission: false,
    allowsPaymentProcessing: false,
    allowsLocationSharing: false
  });

  const PHARMACY_PROVIDER_CONNECTOR_CONTRACT = Object.freeze({
    connectorId: "health.pharmacy_provider.not_configured",
    pharmacyName: "",
    sourceOwner: "pharmacy provider verification required",
    connectorStatus: "not_configured",
    serviceCategories: Object.freeze([]),
    serviceRegions: Object.freeze([]),
    supportedLanguages: Object.freeze(["en"]),
    pharmacyVerificationStatus: "not_started",
    directorySourceStatus: "not_configured",
    termsReviewStatus: "not_reviewed",
    regulatedWorkflowReviewStatus: "not_reviewed",
    refillGateStatus: "not_configured",
    patientConsentReviewStatus: "not_reviewed",
    paymentReviewStatus: "not_reviewed",
    freshnessModel: Object.freeze({
      freshnessField: "pharmacyDirectoryLastVerifiedAt",
      staleAfter: "pharmacy-specific",
      displayRequirement: "Show pharmacy source, region, service scope, freshness, and no-refill-execution boundary before relying on pharmacy context."
    }),
    regionalScope: "not reviewed",
    languageScope: "not reviewed",
    allowedResponseStates: Object.freeze(["pharmacy_directory_result", "medicine_access_guidance", "unavailable_source_fallback"]),
    pharmacyActionGate: DEFAULT_PHARMACY_ACTION_GATE,
    patientConsentGate: DEFAULT_PATIENT_CONSENT_GATE,
    auditRequirements: Object.freeze(["pharmacy-provider-reviewed", "pharmacy-contact-blocked", "refill-execution-blocked", "medicine-access-boundary-shown"]),
    auditEvent: Object.freeze({
      eventType: "health.pharmacy_provider_connector_created",
      connectorId: "health.pharmacy_provider.not_configured",
      connectorStatus: "not_configured",
      serviceCategories: Object.freeze([]),
      directoryContextAllowed: false,
      liveInventoryAllowed: false,
      pharmacyContactEnabled: false,
      refillExecutionEnabled: false,
      prescriptionSubmissionEnabled: false,
      paymentEnabled: false,
      noExecution: true,
      createdAt: null
    }),
    ...NO_EXECUTION_DEFAULTS
  });

  function normalizeConnectorStatus(value) {
    return PHARMACY_PROVIDER_STATUSES.includes(value) ? value : PHARMACY_PROVIDER_CONNECTOR_CONTRACT.connectorStatus;
  }

  function createPharmacyProviderConnector(overrides = {}) {
    const connectorStatus = normalizeConnectorStatus(overrides.connectorStatus);
    const serviceCategories = Array.isArray(overrides.serviceCategories)
      ? overrides.serviceCategories.filter(category => PHARMACY_SERVICE_CATEGORIES.includes(category))
      : [];
    return Object.freeze({
      ...PHARMACY_PROVIDER_CONNECTOR_CONTRACT,
      ...overrides,
      connectorStatus,
      serviceCategories: Object.freeze(serviceCategories),
      serviceRegions: Object.freeze(Array.isArray(overrides.serviceRegions) ? overrides.serviceRegions.slice() : []),
      supportedLanguages: Object.freeze(Array.isArray(overrides.supportedLanguages) ? overrides.supportedLanguages.slice() : ["en"]),
      pharmacyActionGate: Object.freeze({
        ...DEFAULT_PHARMACY_ACTION_GATE,
        ...(overrides.pharmacyActionGate || {}),
        allowsDirectoryContext: false,
        allowsPharmacyContact: false,
        allowsRefillPreparation: false,
        allowsRefillExecution: false,
        allowsPrescriptionSubmission: false,
        allowsPaymentProcessing: false,
        allowsExternalNavigation: false
      }),
      patientConsentGate: Object.freeze({
        ...DEFAULT_PATIENT_CONSENT_GATE,
        ...(overrides.patientConsentGate || {}),
        allowsPatientDataSharing: false,
        allowsMedicationDataSharing: false,
        allowsMedicalRecordAccess: false,
        allowsPrescriptionSubmission: false,
        allowsPaymentProcessing: false,
        allowsLocationSharing: false
      }),
      auditRequirements: Object.freeze(Array.isArray(overrides.auditRequirements) ? overrides.auditRequirements.slice() : PHARMACY_PROVIDER_CONNECTOR_CONTRACT.auditRequirements.slice()),
      auditEvent: Object.freeze({
        ...PHARMACY_PROVIDER_CONNECTOR_CONTRACT.auditEvent,
        ...(overrides.auditEvent || {}),
        connectorId: overrides.connectorId || PHARMACY_PROVIDER_CONNECTOR_CONTRACT.connectorId,
        connectorStatus,
        serviceCategories: Object.freeze(serviceCategories),
        directoryContextAllowed: false,
        liveInventoryAllowed: false,
        pharmacyContactEnabled: false,
        refillExecutionEnabled: false,
        prescriptionSubmissionEnabled: false,
        paymentEnabled: false,
        noExecution: true
      }),
      ...Object.fromEntries(Object.entries(NO_EXECUTION_DEFAULTS).map(([key, value]) => [key, value]))
    });
  }

  return Object.freeze({
    PHARMACY_PROVIDER_STATUSES,
    PHARMACY_SERVICE_CATEGORIES,
    NO_EXECUTION_DEFAULTS,
    PHARMACY_PROVIDER_CONNECTOR_FIELDS,
    PHARMACY_ACTION_GATE_FIELDS,
    PATIENT_CONSENT_GATE_FIELDS,
    PHARMACY_PROVIDER_AUDIT_EVENT_FIELDS,
    DEFAULT_PHARMACY_ACTION_GATE,
    DEFAULT_PATIENT_CONSENT_GATE,
    PHARMACY_PROVIDER_CONNECTOR_CONTRACT,
    createPharmacyProviderConnector
  });
});
