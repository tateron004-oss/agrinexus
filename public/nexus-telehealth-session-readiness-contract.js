(function nexusTelehealthSessionReadinessContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusTelehealthSessionReadinessContract = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusTelehealthSessionReadinessContractModule() {
  const TELEHEALTH_SESSION_ACTION_TYPES = Object.freeze([
    "prepare_requirements",
    "check_session_options",
    "request_provider_confirmation",
    "create_session",
    "join_session",
    "reconnect_session",
    "unsupported"
  ]);

  const TELEHEALTH_SESSION_REQUIRED_PRECONDITIONS = Object.freeze([
    "resolvedRequester",
    "resolvedPatient",
    "visibleProviderDisplay",
    "visibleSessionPurpose",
    "providerAvailabilityState",
    "sessionAvailabilityState",
    "appointmentOrEncounterReference",
    "cameraConsent",
    "microphoneConsent",
    "privacyConsent",
    "languagePreference",
    "accessibilityNeeds",
    "identityOrRoleState",
    "explicitUserApproval",
    "providerConfirmationState",
    "cancellationPath",
    "auditEvent",
    "noBackgroundMediaCapture",
    "noSilentRoomJoin",
    "noHiddenProviderConnection"
  ]);

  const TELEHEALTH_SESSION_RESTRICTED_DOMAINS = Object.freeze([
    "healthcare",
    "telehealth",
    "emergency",
    "minors_family_support",
    "regulated_records",
    "pharmacy",
    "payments",
    "transportation_dispatch"
  ]);

  const TELEHEALTH_SESSION_NO_EXECUTION_DEFAULTS = Object.freeze({
    liveRoomEnabled: false,
    sessionCreationEnabled: false,
    sessionJoinEnabled: false,
    sessionReconnectEnabled: false,
    cameraActivationAllowed: false,
    microphoneActivationAllowed: false,
    providerApiEnabled: false,
    externalLinkOpenAllowed: false,
    backgroundMediaCaptureAllowed: false,
    silentRoomJoinAllowed: false,
    hiddenProviderConnectionAllowed: false,
    standardUserTelehealthExecutionAllowed: false,
    providerConnectionClaimAllowed: false,
    diagnosisAllowed: false,
    emergencyDispatchAllowed: false,
    executionAllowed: false,
    liveActionEnabled: false
  });

  const TELEHEALTH_SESSION_READINESS_CONTRACT = Object.freeze({
    contractId: "telehealth_session.readiness.phase_53",
    phase: "53",
    readinessStatus: "blocked",
    riskTier: "high",
    allowedActionTypes: TELEHEALTH_SESSION_ACTION_TYPES,
    requiredPreconditions: TELEHEALTH_SESSION_REQUIRED_PRECONDITIONS,
    restrictedDomains: TELEHEALTH_SESSION_RESTRICTED_DOMAINS,
    consentRequirement: "camera_microphone_privacy_consent_required",
    providerConfirmationRequirement: "provider_session_confirmation_required",
    auditRequirement: "audit_event_required_before_execution",
    cancellationRequirement: "cancellation_path_required",
    ...TELEHEALTH_SESSION_NO_EXECUTION_DEFAULTS
  });

  function normalizeActionType(value) {
    return TELEHEALTH_SESSION_ACTION_TYPES.includes(value) ? value : "unsupported";
  }

  function createTelehealthSessionReadinessContract(overrides = {}) {
    return Object.freeze({
      ...TELEHEALTH_SESSION_READINESS_CONTRACT,
      ...overrides,
      actionType: normalizeActionType(overrides.actionType || "unsupported"),
      phase: "53",
      readinessStatus: "blocked",
      riskTier: "high",
      consentRequirement: "camera_microphone_privacy_consent_required",
      providerConfirmationRequirement: "provider_session_confirmation_required",
      auditRequirement: "audit_event_required_before_execution",
      cancellationRequirement: "cancellation_path_required",
      ...TELEHEALTH_SESSION_NO_EXECUTION_DEFAULTS
    });
  }

  return Object.freeze({
    TELEHEALTH_SESSION_ACTION_TYPES,
    TELEHEALTH_SESSION_REQUIRED_PRECONDITIONS,
    TELEHEALTH_SESSION_RESTRICTED_DOMAINS,
    TELEHEALTH_SESSION_NO_EXECUTION_DEFAULTS,
    TELEHEALTH_SESSION_READINESS_CONTRACT,
    createTelehealthSessionReadinessContract
  });
});
