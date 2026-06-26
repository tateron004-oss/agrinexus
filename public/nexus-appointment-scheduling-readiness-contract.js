(function nexusAppointmentSchedulingReadinessContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusAppointmentSchedulingReadinessContract = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusAppointmentSchedulingReadinessContractModule() {
  const APPOINTMENT_SCHEDULING_ACTION_TYPES = Object.freeze([
    "prepare_request",
    "check_options",
    "request_provider_confirmation",
    "schedule",
    "reschedule",
    "cancel",
    "unsupported"
  ]);

  const APPOINTMENT_SCHEDULING_PROVIDER_TYPES = Object.freeze([
    "clinic",
    "telehealth",
    "pharmacy",
    "mobile_clinic",
    "transportation",
    "workforce",
    "marketplace",
    "community_service",
    "unsupported"
  ]);

  const APPOINTMENT_SCHEDULING_REQUIRED_PRECONDITIONS = Object.freeze([
    "resolvedRequester",
    "resolvedPatientOrParticipant",
    "visibleProviderDisplay",
    "visibleAppointmentType",
    "visiblePurposePreview",
    "candidateDateTime",
    "timezone",
    "locationOrVisitMode",
    "languagePreference",
    "accessibilityNeeds",
    "consentState",
    "permissionState",
    "providerAvailabilityState",
    "providerConfirmationState",
    "explicitUserApproval",
    "cancellationPath",
    "auditEvent",
    "noBackgroundScheduling",
    "noSilentScheduling",
    "noHiddenProviderWrite"
  ]);

  const APPOINTMENT_SCHEDULING_RESTRICTED_DOMAINS = Object.freeze([
    "healthcare",
    "telehealth",
    "pharmacy",
    "transportation_dispatch",
    "emergency",
    "payments",
    "marketplace_transactions",
    "minors_family_support",
    "regulated_records"
  ]);

  const APPOINTMENT_SCHEDULING_NO_EXECUTION_DEFAULTS = Object.freeze({
    schedulingEnabled: false,
    providerApiEnabled: false,
    calendarWriteEnabled: false,
    appointmentHoldEnabled: false,
    appointmentConfirmEnabled: false,
    appointmentCancelEnabled: false,
    appointmentRescheduleEnabled: false,
    backgroundSchedulingEnabled: false,
    silentSchedulingEnabled: false,
    standardUserSchedulingAllowed: false,
    adminBypassAllowed: false,
    executionAllowed: false,
    liveActionEnabled: false
  });

  const APPOINTMENT_SCHEDULING_READINESS_CONTRACT = Object.freeze({
    contractId: "appointment_scheduling.readiness.phase_52",
    phase: "52",
    readinessStatus: "blocked",
    riskTier: "high",
    allowedActionTypes: APPOINTMENT_SCHEDULING_ACTION_TYPES,
    providerTypes: APPOINTMENT_SCHEDULING_PROVIDER_TYPES,
    requiredPreconditions: APPOINTMENT_SCHEDULING_REQUIRED_PRECONDITIONS,
    restrictedDomains: APPOINTMENT_SCHEDULING_RESTRICTED_DOMAINS,
    approvalRequirement: "explicit_user_approval_required",
    providerConfirmationRequirement: "provider_confirmation_required",
    auditRequirement: "audit_event_required_before_execution",
    cancellationRequirement: "cancellation_path_required",
    ...APPOINTMENT_SCHEDULING_NO_EXECUTION_DEFAULTS
  });

  function normalizeActionType(value) {
    return APPOINTMENT_SCHEDULING_ACTION_TYPES.includes(value) ? value : "unsupported";
  }

  function normalizeProviderType(value) {
    return APPOINTMENT_SCHEDULING_PROVIDER_TYPES.includes(value) ? value : "unsupported";
  }

  function createAppointmentSchedulingReadinessContract(overrides = {}) {
    return Object.freeze({
      ...APPOINTMENT_SCHEDULING_READINESS_CONTRACT,
      ...overrides,
      actionType: normalizeActionType(overrides.actionType || "unsupported"),
      providerType: normalizeProviderType(overrides.providerType || "unsupported"),
      phase: "52",
      readinessStatus: "blocked",
      riskTier: "high",
      approvalRequirement: "explicit_user_approval_required",
      providerConfirmationRequirement: "provider_confirmation_required",
      auditRequirement: "audit_event_required_before_execution",
      cancellationRequirement: "cancellation_path_required",
      ...APPOINTMENT_SCHEDULING_NO_EXECUTION_DEFAULTS
    });
  }

  return Object.freeze({
    APPOINTMENT_SCHEDULING_ACTION_TYPES,
    APPOINTMENT_SCHEDULING_PROVIDER_TYPES,
    APPOINTMENT_SCHEDULING_REQUIRED_PRECONDITIONS,
    APPOINTMENT_SCHEDULING_RESTRICTED_DOMAINS,
    APPOINTMENT_SCHEDULING_NO_EXECUTION_DEFAULTS,
    APPOINTMENT_SCHEDULING_READINESS_CONTRACT,
    createAppointmentSchedulingReadinessContract
  });
});
