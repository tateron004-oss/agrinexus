(function nexusMobileClinicOperatorConnectorContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusMobileClinicOperatorConnectorContract = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusMobileClinicOperatorConnectorContractModule() {
  const MOBILE_CLINIC_OPERATOR_STATUSES = Object.freeze([
    "not_configured",
    "operator_verification_required",
    "schedule_source_required",
    "service_scope_review_required",
    "terms_review_required",
    "location_consent_review_required",
    "dispatch_governance_required",
    "sandbox_testing_required",
    "approved_not_live",
    "active_schedule_directory_only",
    "rejected_or_blocked",
    "inactive"
  ]);

  const MOBILE_CLINIC_SERVICE_CATEGORIES = Object.freeze([
    "rural_health_outreach",
    "maternal_child_health_outreach",
    "vaccination_outreach",
    "pharmacy_access_support",
    "screening_event",
    "community_health_navigation",
    "mobile_lab_referral",
    "transportation_to_care_support",
    "health_education_event",
    "care_coordination_event"
  ]);

  const NO_EXECUTION_DEFAULTS = Object.freeze({
    noExecution: true,
    scheduleContextAllowed: false,
    liveAvailabilityAllowed: false,
    operatorContactEnabled: false,
    visitBookingEnabled: false,
    mobileClinicDispatchEnabled: false,
    supplyDispatchEnabled: false,
    locationSharingEnabled: false,
    preciseLocationEnabled: false,
    routeOptimizationEnabled: false,
    medicalRecordAccessEnabled: false,
    prescriptionRefillEnabled: false,
    paymentEnabled: false,
    emergencyDispatchEnabled: false,
    liveActionEnabled: false,
    operatorContacted: false,
    visitBooked: false,
    mobileClinicDispatched: false,
    supplyDispatched: false,
    locationShared: false,
    preciseLocationShared: false,
    userDataShared: false,
    externalActionExecuted: false,
    paymentExecuted: false,
    medicalRecordAccessed: false,
    prescriptionSubmitted: false,
    emergencyDispatched: false,
    callOrMessageSent: false
  });

  const MOBILE_CLINIC_OPERATOR_CONNECTOR_FIELDS = Object.freeze([
    "connectorId",
    "operatorName",
    "sourceOwner",
    "connectorStatus",
    "serviceCategories",
    "serviceRegions",
    "supportedLanguages",
    "operatorVerificationStatus",
    "scheduleSourceStatus",
    "serviceScopeReviewStatus",
    "termsReviewStatus",
    "locationConsentReviewStatus",
    "dispatchGovernanceStatus",
    "freshnessModel",
    "regionalScope",
    "languageScope",
    "allowedResponseStates",
    "scheduleReadinessGate",
    "locationConsentGate",
    "auditRequirements",
    "auditEvent",
    "scheduleContextAllowed",
    "liveAvailabilityAllowed",
    "operatorContactEnabled",
    "visitBookingEnabled",
    "mobileClinicDispatchEnabled",
    "locationSharingEnabled",
    "paymentEnabled",
    "liveActionEnabled",
    "noExecution"
  ]);

  const SCHEDULE_READINESS_GATE_FIELDS = Object.freeze([
    "requiresOperatorVerification",
    "requiresScheduleFreshness",
    "requiresServiceScopeReview",
    "requiresUserApproval",
    "requiresPartnerConfirmation",
    "requiresDispatchGovernance",
    "requiresAuditLogging",
    "allowsScheduleContext",
    "allowsOperatorContact",
    "allowsVisitBooking",
    "allowsMobileClinicDispatch",
    "allowsSupplyDispatch",
    "allowsExternalNavigation"
  ]);

  const LOCATION_CONSENT_GATE_FIELDS = Object.freeze([
    "requiresPurposeDisclosure",
    "requiresUserConsent",
    "requiresApproximateLocationOnlyByDefault",
    "requiresPreciseLocationConsent",
    "requiresMinimumNecessaryLocation",
    "requiresHealthContextConsent",
    "allowsApproximateLocationUse",
    "allowsPreciseLocationSharing",
    "allowsRouteOptimization",
    "allowsDispatchLocationSharing",
    "allowsPatientDataSharing"
  ]);

  const MOBILE_CLINIC_OPERATOR_AUDIT_EVENT_FIELDS = Object.freeze([
    "eventType",
    "connectorId",
    "connectorStatus",
    "serviceCategories",
    "scheduleContextAllowed",
    "liveAvailabilityAllowed",
    "operatorContactEnabled",
    "visitBookingEnabled",
    "mobileClinicDispatchEnabled",
    "locationSharingEnabled",
    "paymentEnabled",
    "noExecution",
    "createdAt"
  ]);

  const DEFAULT_SCHEDULE_READINESS_GATE = Object.freeze({
    requiresOperatorVerification: true,
    requiresScheduleFreshness: true,
    requiresServiceScopeReview: true,
    requiresUserApproval: true,
    requiresPartnerConfirmation: true,
    requiresDispatchGovernance: true,
    requiresAuditLogging: true,
    allowsScheduleContext: false,
    allowsOperatorContact: false,
    allowsVisitBooking: false,
    allowsMobileClinicDispatch: false,
    allowsSupplyDispatch: false,
    allowsExternalNavigation: false
  });

  const DEFAULT_LOCATION_CONSENT_GATE = Object.freeze({
    requiresPurposeDisclosure: true,
    requiresUserConsent: true,
    requiresApproximateLocationOnlyByDefault: true,
    requiresPreciseLocationConsent: true,
    requiresMinimumNecessaryLocation: true,
    requiresHealthContextConsent: true,
    allowsApproximateLocationUse: false,
    allowsPreciseLocationSharing: false,
    allowsRouteOptimization: false,
    allowsDispatchLocationSharing: false,
    allowsPatientDataSharing: false
  });

  const MOBILE_CLINIC_OPERATOR_CONNECTOR_CONTRACT = Object.freeze({
    connectorId: "health.mobile_clinic_operator.not_configured",
    operatorName: "",
    sourceOwner: "mobile clinic operator verification required",
    connectorStatus: "not_configured",
    serviceCategories: Object.freeze([]),
    serviceRegions: Object.freeze([]),
    supportedLanguages: Object.freeze(["en"]),
    operatorVerificationStatus: "not_started",
    scheduleSourceStatus: "not_configured",
    serviceScopeReviewStatus: "not_reviewed",
    termsReviewStatus: "not_reviewed",
    locationConsentReviewStatus: "not_reviewed",
    dispatchGovernanceStatus: "not_reviewed",
    freshnessModel: Object.freeze({
      freshnessField: "mobileClinicScheduleLastVerifiedAt",
      staleAfter: "operator-specific",
      displayRequirement: "Show operator source, region, route/service-window scope, freshness, and dispatch-disabled boundary before relying on schedule context."
    }),
    regionalScope: "not reviewed",
    languageScope: "not reviewed",
    allowedResponseStates: Object.freeze(["schedule_directory_result", "mobile_clinic_access_guidance", "unavailable_source_fallback"]),
    scheduleReadinessGate: DEFAULT_SCHEDULE_READINESS_GATE,
    locationConsentGate: DEFAULT_LOCATION_CONSENT_GATE,
    auditRequirements: Object.freeze(["mobile-clinic-operator-reviewed", "schedule-context-blocked", "dispatch-blocked", "location-consent-boundary-shown"]),
    auditEvent: Object.freeze({
      eventType: "health.mobile_clinic_operator_connector_created",
      connectorId: "health.mobile_clinic_operator.not_configured",
      connectorStatus: "not_configured",
      serviceCategories: Object.freeze([]),
      scheduleContextAllowed: false,
      liveAvailabilityAllowed: false,
      operatorContactEnabled: false,
      visitBookingEnabled: false,
      mobileClinicDispatchEnabled: false,
      locationSharingEnabled: false,
      paymentEnabled: false,
      noExecution: true,
      createdAt: null
    }),
    ...NO_EXECUTION_DEFAULTS
  });

  function normalizeConnectorStatus(value) {
    return MOBILE_CLINIC_OPERATOR_STATUSES.includes(value) ? value : MOBILE_CLINIC_OPERATOR_CONNECTOR_CONTRACT.connectorStatus;
  }

  function createMobileClinicOperatorConnector(overrides = {}) {
    const connectorStatus = normalizeConnectorStatus(overrides.connectorStatus);
    const serviceCategories = Array.isArray(overrides.serviceCategories)
      ? overrides.serviceCategories.filter(category => MOBILE_CLINIC_SERVICE_CATEGORIES.includes(category))
      : [];
    return Object.freeze({
      ...MOBILE_CLINIC_OPERATOR_CONNECTOR_CONTRACT,
      ...overrides,
      connectorStatus,
      serviceCategories: Object.freeze(serviceCategories),
      serviceRegions: Object.freeze(Array.isArray(overrides.serviceRegions) ? overrides.serviceRegions.slice() : []),
      supportedLanguages: Object.freeze(Array.isArray(overrides.supportedLanguages) ? overrides.supportedLanguages.slice() : ["en"]),
      scheduleReadinessGate: Object.freeze({
        ...DEFAULT_SCHEDULE_READINESS_GATE,
        ...(overrides.scheduleReadinessGate || {}),
        allowsScheduleContext: false,
        allowsOperatorContact: false,
        allowsVisitBooking: false,
        allowsMobileClinicDispatch: false,
        allowsSupplyDispatch: false,
        allowsExternalNavigation: false
      }),
      locationConsentGate: Object.freeze({
        ...DEFAULT_LOCATION_CONSENT_GATE,
        ...(overrides.locationConsentGate || {}),
        allowsApproximateLocationUse: false,
        allowsPreciseLocationSharing: false,
        allowsRouteOptimization: false,
        allowsDispatchLocationSharing: false,
        allowsPatientDataSharing: false
      }),
      auditRequirements: Object.freeze(Array.isArray(overrides.auditRequirements) ? overrides.auditRequirements.slice() : MOBILE_CLINIC_OPERATOR_CONNECTOR_CONTRACT.auditRequirements.slice()),
      auditEvent: Object.freeze({
        ...MOBILE_CLINIC_OPERATOR_CONNECTOR_CONTRACT.auditEvent,
        ...(overrides.auditEvent || {}),
        connectorId: overrides.connectorId || MOBILE_CLINIC_OPERATOR_CONNECTOR_CONTRACT.connectorId,
        connectorStatus,
        serviceCategories: Object.freeze(serviceCategories),
        scheduleContextAllowed: false,
        liveAvailabilityAllowed: false,
        operatorContactEnabled: false,
        visitBookingEnabled: false,
        mobileClinicDispatchEnabled: false,
        locationSharingEnabled: false,
        paymentEnabled: false,
        noExecution: true
      }),
      ...Object.fromEntries(Object.entries(NO_EXECUTION_DEFAULTS).map(([key, value]) => [key, value]))
    });
  }

  return Object.freeze({
    MOBILE_CLINIC_OPERATOR_STATUSES,
    MOBILE_CLINIC_SERVICE_CATEGORIES,
    NO_EXECUTION_DEFAULTS,
    MOBILE_CLINIC_OPERATOR_CONNECTOR_FIELDS,
    SCHEDULE_READINESS_GATE_FIELDS,
    LOCATION_CONSENT_GATE_FIELDS,
    MOBILE_CLINIC_OPERATOR_AUDIT_EVENT_FIELDS,
    DEFAULT_SCHEDULE_READINESS_GATE,
    DEFAULT_LOCATION_CONSENT_GATE,
    MOBILE_CLINIC_OPERATOR_CONNECTOR_CONTRACT,
    createMobileClinicOperatorConnector
  });
});
