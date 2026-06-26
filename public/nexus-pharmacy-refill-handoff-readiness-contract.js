(function nexusPharmacyRefillHandoffReadinessContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusPharmacyRefillHandoffReadinessContract = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusPharmacyRefillHandoffReadinessContractModule() {
  const PHARMACY_REFILL_ACTION_TYPES = Object.freeze([
    "prepare_checklist",
    "prepare_handoff",
    "request_provider_review",
    "submit_refill",
    "unsupported"
  ]);

  const PHARMACY_REFILL_REQUIRED_PRECONDITIONS = Object.freeze([
    "resolvedRequester",
    "verifiedPatientIdentity",
    "patientConsent",
    "visiblePharmacyDisplay",
    "visibleMedicationSummary",
    "refillPurposePreview",
    "prescriberOrProviderReference",
    "pharmacyConnectorState",
    "eRxConnectorState",
    "permissionState",
    "complianceState",
    "auditEvent",
    "explicitUserApproval",
    "cancellationPath",
    "noPrescribing",
    "noMedicationChange",
    "noBackgroundSubmission",
    "noSilentPharmacyContact",
    "noHiddenPatientDataTransmission"
  ]);

  const PHARMACY_REFILL_RESTRICTED_DOMAINS = Object.freeze([
    "pharmacy",
    "healthcare",
    "regulated_records",
    "prescriptions",
    "payments",
    "insurance",
    "minors_family_support",
    "emergency"
  ]);

  const PHARMACY_REFILL_NO_EXECUTION_DEFAULTS = Object.freeze({
    refillSubmissionEnabled: false,
    pharmacyApiEnabled: false,
    eRxEnabled: false,
    prescribingAllowed: false,
    medicationChangeAllowed: false,
    patientRecordAccessAllowed: false,
    providerContactAllowed: false,
    pharmacyContactAllowed: false,
    paymentProcessingAllowed: false,
    insuranceProcessingAllowed: false,
    backgroundSubmissionAllowed: false,
    silentPharmacyContactAllowed: false,
    hiddenPatientDataTransmissionAllowed: false,
    standardUserRefillExecutionAllowed: false,
    executionAllowed: false,
    liveActionEnabled: false
  });

  const PHARMACY_REFILL_HANDOFF_READINESS_CONTRACT = Object.freeze({
    contractId: "pharmacy_refill_handoff.readiness.phase_54",
    phase: "54",
    readinessStatus: "blocked",
    riskTier: "restricted",
    allowedActionTypes: PHARMACY_REFILL_ACTION_TYPES,
    requiredPreconditions: PHARMACY_REFILL_REQUIRED_PRECONDITIONS,
    restrictedDomains: PHARMACY_REFILL_RESTRICTED_DOMAINS,
    identityRequirement: "verified_patient_identity_required",
    consentRequirement: "patient_consent_required",
    complianceRequirement: "pharmacy_compliance_review_required",
    auditRequirement: "audit_event_required_before_execution",
    cancellationRequirement: "cancellation_path_required",
    ...PHARMACY_REFILL_NO_EXECUTION_DEFAULTS
  });

  function normalizeActionType(value) {
    return PHARMACY_REFILL_ACTION_TYPES.includes(value) ? value : "unsupported";
  }

  function createPharmacyRefillHandoffReadinessContract(overrides = {}) {
    return Object.freeze({
      ...PHARMACY_REFILL_HANDOFF_READINESS_CONTRACT,
      ...overrides,
      actionType: normalizeActionType(overrides.actionType || "unsupported"),
      phase: "54",
      readinessStatus: "blocked",
      riskTier: "restricted",
      identityRequirement: "verified_patient_identity_required",
      consentRequirement: "patient_consent_required",
      complianceRequirement: "pharmacy_compliance_review_required",
      auditRequirement: "audit_event_required_before_execution",
      cancellationRequirement: "cancellation_path_required",
      ...PHARMACY_REFILL_NO_EXECUTION_DEFAULTS
    });
  }

  return Object.freeze({
    PHARMACY_REFILL_ACTION_TYPES,
    PHARMACY_REFILL_REQUIRED_PRECONDITIONS,
    PHARMACY_REFILL_RESTRICTED_DOMAINS,
    PHARMACY_REFILL_NO_EXECUTION_DEFAULTS,
    PHARMACY_REFILL_HANDOFF_READINESS_CONTRACT,
    createPharmacyRefillHandoffReadinessContract
  });
});
