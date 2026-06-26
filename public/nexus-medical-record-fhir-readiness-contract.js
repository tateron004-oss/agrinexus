(function nexusMedicalRecordFhirReadinessContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusMedicalRecordFhirReadinessContract = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusMedicalRecordFhirReadinessContractModule() {
  const MEDICAL_RECORD_FHIR_ACTION_TYPES = Object.freeze([
    "prepare_requirements",
    "review_scope",
    "request_consent",
    "authorize_fhir_access",
    "retrieve_record",
    "share_record",
    "unsupported"
  ]);

  const MEDICAL_RECORD_FHIR_REQUIRED_PRECONDITIONS = Object.freeze([
    "verifiedPatientIdentity",
    "resolvedRecordSubject",
    "authorizedRequestingRole",
    "visibleRecordScope",
    "visibleRecordSource",
    "visibleDataCategories",
    "minimumNecessaryPurpose",
    "scopedPatientConsent",
    "providerAuthorization",
    "fhirServerTrust",
    "oauthScopeReview",
    "permissionState",
    "complianceState",
    "redactionPolicy",
    "retentionPolicy",
    "auditEvent",
    "explicitFinalUserApproval",
    "cancellationPath",
    "noSilentRecordAccess",
    "noHiddenRecordSharing"
  ]);

  const MEDICAL_RECORD_FHIR_RESTRICTED_DOMAINS = Object.freeze([
    "medical_records",
    "fhir",
    "ehr",
    "patient_identity",
    "healthcare",
    "pharmacy",
    "provider_contact",
    "emergency",
    "payments",
    "minors_family_support"
  ]);

  const MEDICAL_RECORD_FHIR_NO_EXECUTION_DEFAULTS = Object.freeze({
    fhirConnectorEnabled: false,
    ehrAccessEnabled: false,
    smartOnFhirEnabled: false,
    oauthTokenExchangeEnabled: false,
    medicalRecordRetrievalEnabled: false,
    medicalRecordStorageEnabled: false,
    medicalRecordSharingEnabled: false,
    clinicalSummarizationEnabled: false,
    diagnosticInterpretationEnabled: false,
    standardUserRecordAccessAllowed: false,
    executionAllowed: false,
    liveActionEnabled: false
  });

  const MEDICAL_RECORD_FHIR_READINESS_CONTRACT = Object.freeze({
    contractId: "medical_record_fhir.readiness.phase_58",
    phase: "58",
    readinessStatus: "blocked",
    riskTier: "restricted",
    allowedActionTypes: MEDICAL_RECORD_FHIR_ACTION_TYPES,
    requiredPreconditions: MEDICAL_RECORD_FHIR_REQUIRED_PRECONDITIONS,
    restrictedDomains: MEDICAL_RECORD_FHIR_RESTRICTED_DOMAINS,
    identityRequirement: "verified_patient_identity_required",
    consentRequirement: "scoped_patient_consent_required",
    providerRequirement: "provider_authorization_required",
    redactionRequirement: "redacted_minimum_necessary_access_required",
    auditRequirement: "audit_event_required_before_access",
    cancellationRequirement: "cancellation_path_required",
    ...MEDICAL_RECORD_FHIR_NO_EXECUTION_DEFAULTS
  });

  function normalizeActionType(value) {
    return MEDICAL_RECORD_FHIR_ACTION_TYPES.includes(value) ? value : "unsupported";
  }

  function createMedicalRecordFhirReadinessContract(overrides = {}) {
    return Object.freeze({
      ...MEDICAL_RECORD_FHIR_READINESS_CONTRACT,
      ...overrides,
      actionType: normalizeActionType(overrides.actionType || "unsupported"),
      phase: "58",
      readinessStatus: "blocked",
      riskTier: "restricted",
      identityRequirement: "verified_patient_identity_required",
      consentRequirement: "scoped_patient_consent_required",
      providerRequirement: "provider_authorization_required",
      redactionRequirement: "redacted_minimum_necessary_access_required",
      auditRequirement: "audit_event_required_before_access",
      cancellationRequirement: "cancellation_path_required",
      ...MEDICAL_RECORD_FHIR_NO_EXECUTION_DEFAULTS
    });
  }

  return Object.freeze({
    MEDICAL_RECORD_FHIR_ACTION_TYPES,
    MEDICAL_RECORD_FHIR_REQUIRED_PRECONDITIONS,
    MEDICAL_RECORD_FHIR_RESTRICTED_DOMAINS,
    MEDICAL_RECORD_FHIR_NO_EXECUTION_DEFAULTS,
    MEDICAL_RECORD_FHIR_READINESS_CONTRACT,
    createMedicalRecordFhirReadinessContract
  });
});
