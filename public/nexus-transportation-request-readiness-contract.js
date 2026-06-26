(function nexusTransportationRequestReadinessContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusTransportationRequestReadinessContract = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusTransportationRequestReadinessContractModule() {
  const TRANSPORTATION_REQUEST_ACTION_TYPES = Object.freeze([
    "prepare_checklist",
    "prepare_request",
    "check_provider_options",
    "request_transport",
    "cancel_transport",
    "unsupported"
  ]);

  const TRANSPORTATION_REQUEST_REQUIRED_PRECONDITIONS = Object.freeze([
    "resolvedRequester",
    "visibleRiderDisplay",
    "pickupLocation",
    "dropoffLocation",
    "transportPurposePreview",
    "providerDisplay",
    "providerAvailabilityState",
    "bookingWindow",
    "fareOrCostDisclosure",
    "locationConsent",
    "bookingConsent",
    "permissionState",
    "auditEvent",
    "explicitUserApproval",
    "providerConfirmationState",
    "cancellationPath",
    "noBackgroundTracking",
    "noSilentDispatch",
    "noHiddenLocationSharing"
  ]);

  const TRANSPORTATION_REQUEST_RESTRICTED_DOMAINS = Object.freeze([
    "healthcare_transport",
    "emergency",
    "payments",
    "location",
    "minors_family_support",
    "marketplace_transactions",
    "regulated_records"
  ]);

  const TRANSPORTATION_REQUEST_NO_EXECUTION_DEFAULTS = Object.freeze({
    transportRequestEnabled: false,
    providerBookingApiEnabled: false,
    dispatchEnabled: false,
    driverContactAllowed: false,
    locationSharingAllowed: false,
    backgroundTrackingAllowed: false,
    farePaymentAllowed: false,
    externalLinkOpenAllowed: false,
    silentDispatchAllowed: false,
    hiddenLocationSharingAllowed: false,
    standardUserTransportExecutionAllowed: false,
    executionAllowed: false,
    liveActionEnabled: false
  });

  const TRANSPORTATION_REQUEST_READINESS_CONTRACT = Object.freeze({
    contractId: "transportation_request.readiness.phase_55",
    phase: "55",
    readinessStatus: "blocked",
    riskTier: "high",
    allowedActionTypes: TRANSPORTATION_REQUEST_ACTION_TYPES,
    requiredPreconditions: TRANSPORTATION_REQUEST_REQUIRED_PRECONDITIONS,
    restrictedDomains: TRANSPORTATION_REQUEST_RESTRICTED_DOMAINS,
    locationConsentRequirement: "purpose_specific_location_consent_required",
    bookingConsentRequirement: "transport_booking_consent_required",
    providerConfirmationRequirement: "provider_confirmation_required",
    auditRequirement: "audit_event_required_before_execution",
    cancellationRequirement: "cancellation_path_required",
    ...TRANSPORTATION_REQUEST_NO_EXECUTION_DEFAULTS
  });

  function normalizeActionType(value) {
    return TRANSPORTATION_REQUEST_ACTION_TYPES.includes(value) ? value : "unsupported";
  }

  function createTransportationRequestReadinessContract(overrides = {}) {
    return Object.freeze({
      ...TRANSPORTATION_REQUEST_READINESS_CONTRACT,
      ...overrides,
      actionType: normalizeActionType(overrides.actionType || "unsupported"),
      phase: "55",
      readinessStatus: "blocked",
      riskTier: "high",
      locationConsentRequirement: "purpose_specific_location_consent_required",
      bookingConsentRequirement: "transport_booking_consent_required",
      providerConfirmationRequirement: "provider_confirmation_required",
      auditRequirement: "audit_event_required_before_execution",
      cancellationRequirement: "cancellation_path_required",
      ...TRANSPORTATION_REQUEST_NO_EXECUTION_DEFAULTS
    });
  }

  return Object.freeze({
    TRANSPORTATION_REQUEST_ACTION_TYPES,
    TRANSPORTATION_REQUEST_REQUIRED_PRECONDITIONS,
    TRANSPORTATION_REQUEST_RESTRICTED_DOMAINS,
    TRANSPORTATION_REQUEST_NO_EXECUTION_DEFAULTS,
    TRANSPORTATION_REQUEST_READINESS_CONTRACT,
    createTransportationRequestReadinessContract
  });
});
