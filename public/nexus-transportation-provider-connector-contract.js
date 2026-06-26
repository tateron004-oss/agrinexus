(function nexusTransportationProviderConnectorContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusTransportationProviderConnectorContract = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusTransportationProviderConnectorContractModule() {
  const TRANSPORTATION_PROVIDER_STATUSES = Object.freeze([
    "not_configured",
    "transport_partner_verification_required",
    "route_source_required",
    "service_area_review_required",
    "terms_review_required",
    "location_consent_review_required",
    "booking_gate_required",
    "payment_review_required",
    "sandbox_testing_required",
    "approved_not_live",
    "active_resource_directory_only",
    "rejected_or_blocked",
    "inactive"
  ]);

  const TRANSPORTATION_SERVICE_CATEGORIES = Object.freeze([
    "transportation_to_care",
    "community_transport_resource",
    "accessible_transport_resource",
    "clinic_shuttle_resource",
    "mobile_clinic_route_support",
    "rural_transport_resource",
    "paratransit_resource",
    "public_transit_guidance",
    "care_partner_pickup_boundary",
    "transportation_eligibility_review"
  ]);

  const NO_EXECUTION_DEFAULTS = Object.freeze({
    noExecution: true,
    resourceContextAllowed: false,
    liveAvailabilityAllowed: false,
    partnerContactEnabled: false,
    rideBookingEnabled: false,
    transportDispatchEnabled: false,
    routeOptimizationEnabled: false,
    locationSharingEnabled: false,
    preciseLocationEnabled: false,
    paymentEnabled: false,
    medicalDataSharingEnabled: false,
    emergencyDispatchEnabled: false,
    liveActionEnabled: false,
    partnerContacted: false,
    rideBooked: false,
    transportDispatched: false,
    routeOptimized: false,
    locationShared: false,
    preciseLocationShared: false,
    paymentExecuted: false,
    medicalDataShared: false,
    emergencyDispatched: false,
    externalActionExecuted: false,
    callOrMessageSent: false
  });

  const TRANSPORTATION_PROVIDER_CONNECTOR_FIELDS = Object.freeze([
    "connectorId",
    "providerName",
    "sourceOwner",
    "connectorStatus",
    "serviceCategories",
    "serviceRegions",
    "supportedLanguages",
    "partnerVerificationStatus",
    "routeSourceStatus",
    "serviceAreaReviewStatus",
    "termsReviewStatus",
    "locationConsentReviewStatus",
    "bookingGateStatus",
    "paymentReviewStatus",
    "freshnessModel",
    "regionalScope",
    "languageScope",
    "allowedResponseStates",
    "bookingReadinessGate",
    "locationConsentGate",
    "auditRequirements",
    "auditEvent",
    "resourceContextAllowed",
    "liveAvailabilityAllowed",
    "partnerContactEnabled",
    "rideBookingEnabled",
    "transportDispatchEnabled",
    "locationSharingEnabled",
    "paymentEnabled",
    "liveActionEnabled",
    "noExecution"
  ]);

  const BOOKING_READINESS_GATE_FIELDS = Object.freeze([
    "requiresPartnerVerification",
    "requiresRouteFreshness",
    "requiresServiceAreaReview",
    "requiresUserApproval",
    "requiresPartnerConfirmation",
    "requiresBookingPolicyReview",
    "requiresPaymentReview",
    "requiresAuditLogging",
    "allowsResourceContext",
    "allowsPartnerContact",
    "allowsRideBooking",
    "allowsTransportDispatch",
    "allowsPaymentProcessing",
    "allowsExternalNavigation"
  ]);

  const LOCATION_CONSENT_GATE_FIELDS = Object.freeze([
    "requiresPurposeDisclosure",
    "requiresUserConsent",
    "requiresApproximateLocationOnlyByDefault",
    "requiresPreciseLocationConsent",
    "requiresMinimumNecessaryLocation",
    "requiresCareContextConsent",
    "allowsApproximateLocationUse",
    "allowsPreciseLocationSharing",
    "allowsRouteOptimization",
    "allowsPickupDropoffSharing",
    "allowsCarePartnerDataSharing"
  ]);

  const TRANSPORTATION_PROVIDER_AUDIT_EVENT_FIELDS = Object.freeze([
    "eventType",
    "connectorId",
    "connectorStatus",
    "serviceCategories",
    "resourceContextAllowed",
    "liveAvailabilityAllowed",
    "partnerContactEnabled",
    "rideBookingEnabled",
    "transportDispatchEnabled",
    "locationSharingEnabled",
    "paymentEnabled",
    "noExecution",
    "createdAt"
  ]);

  const DEFAULT_BOOKING_READINESS_GATE = Object.freeze({
    requiresPartnerVerification: true,
    requiresRouteFreshness: true,
    requiresServiceAreaReview: true,
    requiresUserApproval: true,
    requiresPartnerConfirmation: true,
    requiresBookingPolicyReview: true,
    requiresPaymentReview: true,
    requiresAuditLogging: true,
    allowsResourceContext: false,
    allowsPartnerContact: false,
    allowsRideBooking: false,
    allowsTransportDispatch: false,
    allowsPaymentProcessing: false,
    allowsExternalNavigation: false
  });

  const DEFAULT_LOCATION_CONSENT_GATE = Object.freeze({
    requiresPurposeDisclosure: true,
    requiresUserConsent: true,
    requiresApproximateLocationOnlyByDefault: true,
    requiresPreciseLocationConsent: true,
    requiresMinimumNecessaryLocation: true,
    requiresCareContextConsent: true,
    allowsApproximateLocationUse: false,
    allowsPreciseLocationSharing: false,
    allowsRouteOptimization: false,
    allowsPickupDropoffSharing: false,
    allowsCarePartnerDataSharing: false
  });

  const TRANSPORTATION_PROVIDER_CONNECTOR_CONTRACT = Object.freeze({
    connectorId: "transportation.provider.not_configured",
    providerName: "",
    sourceOwner: "transportation provider verification required",
    connectorStatus: "not_configured",
    serviceCategories: Object.freeze([]),
    serviceRegions: Object.freeze([]),
    supportedLanguages: Object.freeze(["en"]),
    partnerVerificationStatus: "not_started",
    routeSourceStatus: "not_configured",
    serviceAreaReviewStatus: "not_reviewed",
    termsReviewStatus: "not_reviewed",
    locationConsentReviewStatus: "not_reviewed",
    bookingGateStatus: "not_configured",
    paymentReviewStatus: "not_reviewed",
    freshnessModel: Object.freeze({
      freshnessField: "transportationResourceLastVerifiedAt",
      staleAfter: "transportation-provider-specific",
      displayRequirement: "Show transportation source, service area, freshness, and booking-disabled boundary before relying on transport context."
    }),
    regionalScope: "not reviewed",
    languageScope: "not reviewed",
    allowedResponseStates: Object.freeze(["transportation_resource_result", "care_transport_guidance", "unavailable_source_fallback"]),
    bookingReadinessGate: DEFAULT_BOOKING_READINESS_GATE,
    locationConsentGate: DEFAULT_LOCATION_CONSENT_GATE,
    auditRequirements: Object.freeze(["transportation-provider-reviewed", "booking-blocked", "dispatch-blocked", "location-consent-boundary-shown"]),
    auditEvent: Object.freeze({
      eventType: "transportation.provider_connector_created",
      connectorId: "transportation.provider.not_configured",
      connectorStatus: "not_configured",
      serviceCategories: Object.freeze([]),
      resourceContextAllowed: false,
      liveAvailabilityAllowed: false,
      partnerContactEnabled: false,
      rideBookingEnabled: false,
      transportDispatchEnabled: false,
      locationSharingEnabled: false,
      paymentEnabled: false,
      noExecution: true,
      createdAt: null
    }),
    ...NO_EXECUTION_DEFAULTS
  });

  function normalizeConnectorStatus(value) {
    return TRANSPORTATION_PROVIDER_STATUSES.includes(value) ? value : TRANSPORTATION_PROVIDER_CONNECTOR_CONTRACT.connectorStatus;
  }

  function createTransportationProviderConnector(overrides = {}) {
    const connectorStatus = normalizeConnectorStatus(overrides.connectorStatus);
    const serviceCategories = Array.isArray(overrides.serviceCategories)
      ? overrides.serviceCategories.filter(category => TRANSPORTATION_SERVICE_CATEGORIES.includes(category))
      : [];
    return Object.freeze({
      ...TRANSPORTATION_PROVIDER_CONNECTOR_CONTRACT,
      ...overrides,
      connectorStatus,
      serviceCategories: Object.freeze(serviceCategories),
      serviceRegions: Object.freeze(Array.isArray(overrides.serviceRegions) ? overrides.serviceRegions.slice() : []),
      supportedLanguages: Object.freeze(Array.isArray(overrides.supportedLanguages) ? overrides.supportedLanguages.slice() : ["en"]),
      bookingReadinessGate: Object.freeze({
        ...DEFAULT_BOOKING_READINESS_GATE,
        ...(overrides.bookingReadinessGate || {}),
        allowsResourceContext: false,
        allowsPartnerContact: false,
        allowsRideBooking: false,
        allowsTransportDispatch: false,
        allowsPaymentProcessing: false,
        allowsExternalNavigation: false
      }),
      locationConsentGate: Object.freeze({
        ...DEFAULT_LOCATION_CONSENT_GATE,
        ...(overrides.locationConsentGate || {}),
        allowsApproximateLocationUse: false,
        allowsPreciseLocationSharing: false,
        allowsRouteOptimization: false,
        allowsPickupDropoffSharing: false,
        allowsCarePartnerDataSharing: false
      }),
      auditRequirements: Object.freeze(Array.isArray(overrides.auditRequirements) ? overrides.auditRequirements.slice() : TRANSPORTATION_PROVIDER_CONNECTOR_CONTRACT.auditRequirements.slice()),
      auditEvent: Object.freeze({
        ...TRANSPORTATION_PROVIDER_CONNECTOR_CONTRACT.auditEvent,
        ...(overrides.auditEvent || {}),
        connectorId: overrides.connectorId || TRANSPORTATION_PROVIDER_CONNECTOR_CONTRACT.connectorId,
        connectorStatus,
        serviceCategories: Object.freeze(serviceCategories),
        resourceContextAllowed: false,
        liveAvailabilityAllowed: false,
        partnerContactEnabled: false,
        rideBookingEnabled: false,
        transportDispatchEnabled: false,
        locationSharingEnabled: false,
        paymentEnabled: false,
        noExecution: true
      }),
      ...Object.fromEntries(Object.entries(NO_EXECUTION_DEFAULTS).map(([key, value]) => [key, value]))
    });
  }

  return Object.freeze({
    TRANSPORTATION_PROVIDER_STATUSES,
    TRANSPORTATION_SERVICE_CATEGORIES,
    NO_EXECUTION_DEFAULTS,
    TRANSPORTATION_PROVIDER_CONNECTOR_FIELDS,
    BOOKING_READINESS_GATE_FIELDS,
    LOCATION_CONSENT_GATE_FIELDS,
    TRANSPORTATION_PROVIDER_AUDIT_EVENT_FIELDS,
    DEFAULT_BOOKING_READINESS_GATE,
    DEFAULT_LOCATION_CONSENT_GATE,
    TRANSPORTATION_PROVIDER_CONNECTOR_CONTRACT,
    createTransportationProviderConnector
  });
});
