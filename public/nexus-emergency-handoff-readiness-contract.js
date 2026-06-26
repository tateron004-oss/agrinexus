(function nexusEmergencyHandoffReadinessContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusEmergencyHandoffReadinessContract = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusEmergencyHandoffReadinessContractModule() {
  const EMERGENCY_HANDOFF_ACTION_TYPES = Object.freeze([
    "provide_safety_guidance",
    "prepare_information",
    "review_handoff_requirements",
    "request_location_permission",
    "contact_emergency_partner",
    "dispatch_emergency_help",
    "unsupported"
  ]);

  const EMERGENCY_HANDOFF_REQUIRED_PRECONDITIONS = Object.freeze([
    "recognizedEmergencyRegion",
    "approvedEmergencyPartner",
    "legalRegionalApproval",
    "verifiedUserIdentityWhenRequired",
    "visibleEmergencyType",
    "visibleActionType",
    "visibleRecipientOrAgency",
    "visibleLocationSource",
    "locationPermissionState",
    "medicalDataSharingScope",
    "consentOrLegalBasis",
    "providerAvailabilityState",
    "responderConfirmationRequirement",
    "auditEvent",
    "explicitFinalUserApprovalWhenSafe",
    "immediateDangerFallback",
    "cancellationPathWhenApplicable",
    "noSilentDispatch",
    "noHiddenLocationSharing",
    "noUnsupportedResponderContact"
  ]);

  const EMERGENCY_HANDOFF_RESTRICTED_DOMAINS = Object.freeze([
    "emergency",
    "emergency_dispatch",
    "healthcare",
    "telehealth",
    "location",
    "transportation_dispatch",
    "medical_records",
    "provider_contact",
    "caregiver_contact",
    "payments",
    "minors_family_support"
  ]);

  const EMERGENCY_HANDOFF_NO_EXECUTION_DEFAULTS = Object.freeze({
    emergencyDispatchEnabled: false,
    emergencyPartnerApiEnabled: false,
    responderContactEnabled: false,
    caregiverContactEnabled: false,
    locationSharingEnabled: false,
    transportDispatchEnabled: false,
    medicalRecordSharingEnabled: false,
    telehealthEscalationEnabled: false,
    cameraOrMicrophoneEnabled: false,
    standardUserEmergencyExecutionAllowed: false,
    executionAllowed: false,
    liveActionEnabled: false
  });

  const EMERGENCY_HANDOFF_READINESS_CONTRACT = Object.freeze({
    contractId: "emergency_handoff.readiness.phase_59",
    phase: "59",
    readinessStatus: "blocked",
    riskTier: "restricted",
    allowedActionTypes: EMERGENCY_HANDOFF_ACTION_TYPES,
    requiredPreconditions: EMERGENCY_HANDOFF_REQUIRED_PRECONDITIONS,
    restrictedDomains: EMERGENCY_HANDOFF_RESTRICTED_DOMAINS,
    legalRequirement: "legal_regional_approval_required",
    partnerRequirement: "approved_emergency_partner_required",
    locationRequirement: "explicit_location_permission_required_before_sharing",
    auditRequirement: "audit_event_required_before_handoff",
    fallbackRequirement: "immediate_danger_local_emergency_services_fallback_required",
    cancellationRequirement: "cancellation_path_required_when_applicable",
    ...EMERGENCY_HANDOFF_NO_EXECUTION_DEFAULTS
  });

  function normalizeActionType(value) {
    return EMERGENCY_HANDOFF_ACTION_TYPES.includes(value) ? value : "unsupported";
  }

  function createEmergencyHandoffReadinessContract(overrides = {}) {
    return Object.freeze({
      ...EMERGENCY_HANDOFF_READINESS_CONTRACT,
      ...overrides,
      actionType: normalizeActionType(overrides.actionType || "unsupported"),
      phase: "59",
      readinessStatus: "blocked",
      riskTier: "restricted",
      legalRequirement: "legal_regional_approval_required",
      partnerRequirement: "approved_emergency_partner_required",
      locationRequirement: "explicit_location_permission_required_before_sharing",
      auditRequirement: "audit_event_required_before_handoff",
      fallbackRequirement: "immediate_danger_local_emergency_services_fallback_required",
      cancellationRequirement: "cancellation_path_required_when_applicable",
      ...EMERGENCY_HANDOFF_NO_EXECUTION_DEFAULTS
    });
  }

  return Object.freeze({
    EMERGENCY_HANDOFF_ACTION_TYPES,
    EMERGENCY_HANDOFF_REQUIRED_PRECONDITIONS,
    EMERGENCY_HANDOFF_RESTRICTED_DOMAINS,
    EMERGENCY_HANDOFF_NO_EXECUTION_DEFAULTS,
    EMERGENCY_HANDOFF_READINESS_CONTRACT,
    createEmergencyHandoffReadinessContract
  });
});
