(function nexusLocationSharingReadinessContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusLocationSharingReadinessContract = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusLocationSharingReadinessContractModule() {
  const LOCATION_SHARING_ACTION_TYPES = Object.freeze([
    "explain_requirements",
    "prepare_consent",
    "request_permission",
    "share_location",
    "stop_sharing",
    "unsupported"
  ]);

  const LOCATION_SHARING_REQUIRED_PRECONDITIONS = Object.freeze([
    "resolvedRequester",
    "locationPurpose",
    "locationRecipientOrDestination",
    "locationPrecision",
    "sharingDuration",
    "providerOrSurfaceDisplay",
    "permissionState",
    "purposeConsent",
    "auditEvent",
    "explicitUserApproval",
    "cancellationPath",
    "revocationPath",
    "noBackgroundTracking",
    "noSilentLocationRequest",
    "noHiddenLocationTransmission"
  ]);

  const LOCATION_SHARING_RESTRICTED_DOMAINS = Object.freeze([
    "healthcare",
    "emergency",
    "transportation_dispatch",
    "marketplace_transactions",
    "minors_family_support",
    "regulated_records",
    "payments",
    "account_identity"
  ]);

  const LOCATION_SHARING_NO_EXECUTION_DEFAULTS = Object.freeze({
    locationRequestEnabled: false,
    locationSharingEnabled: false,
    backgroundTrackingEnabled: false,
    liveTrackingEnabled: false,
    browserGeolocationEnabled: false,
    deviceLocationEnabled: false,
    providerLocationHandoffEnabled: false,
    externalNavigationAllowed: false,
    silentLocationRequestAllowed: false,
    hiddenLocationTransmissionAllowed: false,
    standardUserLocationSharingAllowed: false,
    executionAllowed: false,
    liveActionEnabled: false
  });

  const LOCATION_SHARING_READINESS_CONTRACT = Object.freeze({
    contractId: "location_sharing.readiness.phase_56",
    phase: "56",
    readinessStatus: "blocked",
    riskTier: "sensitive",
    allowedActionTypes: LOCATION_SHARING_ACTION_TYPES,
    requiredPreconditions: LOCATION_SHARING_REQUIRED_PRECONDITIONS,
    restrictedDomains: LOCATION_SHARING_RESTRICTED_DOMAINS,
    purposeConsentRequirement: "purpose_specific_location_consent_required",
    permissionRequirement: "browser_or_device_permission_required",
    auditRequirement: "audit_event_required_before_execution",
    revocationRequirement: "revocation_path_required",
    cancellationRequirement: "cancellation_path_required",
    ...LOCATION_SHARING_NO_EXECUTION_DEFAULTS
  });

  function normalizeActionType(value) {
    return LOCATION_SHARING_ACTION_TYPES.includes(value) ? value : "unsupported";
  }

  function createLocationSharingReadinessContract(overrides = {}) {
    return Object.freeze({
      ...LOCATION_SHARING_READINESS_CONTRACT,
      ...overrides,
      actionType: normalizeActionType(overrides.actionType || "unsupported"),
      phase: "56",
      readinessStatus: "blocked",
      riskTier: "sensitive",
      purposeConsentRequirement: "purpose_specific_location_consent_required",
      permissionRequirement: "browser_or_device_permission_required",
      auditRequirement: "audit_event_required_before_execution",
      revocationRequirement: "revocation_path_required",
      cancellationRequirement: "cancellation_path_required",
      ...LOCATION_SHARING_NO_EXECUTION_DEFAULTS
    });
  }

  return Object.freeze({
    LOCATION_SHARING_ACTION_TYPES,
    LOCATION_SHARING_REQUIRED_PRECONDITIONS,
    LOCATION_SHARING_RESTRICTED_DOMAINS,
    LOCATION_SHARING_NO_EXECUTION_DEFAULTS,
    LOCATION_SHARING_READINESS_CONTRACT,
    createLocationSharingReadinessContract
  });
});
