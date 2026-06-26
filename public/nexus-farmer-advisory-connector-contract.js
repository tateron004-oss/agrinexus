(function nexusFarmerAdvisoryConnectorContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusFarmerAdvisoryConnectorContract = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusFarmerAdvisoryConnectorContractModule() {
  const ADVISORY_CONNECTOR_STATUSES = Object.freeze([
    "not_configured",
    "source_verification_required",
    "partner_agreement_required",
    "advisor_credential_review_required",
    "regional_scope_required",
    "language_review_required",
    "sandbox_testing_required",
    "approved_not_live",
    "active_source_only",
    "rejected_or_blocked",
    "inactive"
  ]);

  const ADVISORY_SERVICE_CATEGORIES = Object.freeze([
    "farm_planning",
    "crop_care_guidance",
    "soil_fertility_guidance",
    "irrigation_planning",
    "pest_disease_triage",
    "post_harvest_guidance",
    "market_readiness_advice",
    "cooperative_advisory",
    "climate_resilience_planning",
    "training_pathway_advice"
  ]);

  const NO_EXECUTION_DEFAULTS = Object.freeze({
    noExecution: true,
    sourceBackedGuidanceAllowed: false,
    advisoryHandoffEnabled: false,
    providerContactEnabled: false,
    farmDataSharingEnabled: false,
    locationSharingEnabled: false,
    liveActionEnabled: false,
    advisorContacted: false,
    providerContacted: false,
    userDataShared: false,
    externalActionExecuted: false,
    paymentExecuted: false,
    marketplaceTransactionExecuted: false,
    medicalRecordAccessed: false,
    prescriptionSubmitted: false,
    emergencyDispatched: false,
    locationShared: false,
    callOrMessageSent: false
  });

  const FARMER_ADVISORY_CONNECTOR_FIELDS = Object.freeze([
    "connectorId",
    "advisoryPartnerName",
    "sourceOwner",
    "connectorStatus",
    "serviceCategories",
    "serviceRegions",
    "supportedCrops",
    "supportedLanguages",
    "advisorCredentialStatus",
    "sourceVerificationStatus",
    "partnerAgreementStatus",
    "freshnessModel",
    "regionalScope",
    "languageScope",
    "allowedResponseStates",
    "advisoryHandoffGate",
    "farmDataConsentGate",
    "auditRequirements",
    "auditEvent",
    "sourceBackedGuidanceAllowed",
    "advisoryHandoffEnabled",
    "farmDataSharingEnabled",
    "locationSharingEnabled",
    "liveActionEnabled",
    "noExecution"
  ]);

  const ADVISORY_HANDOFF_GATE_FIELDS = Object.freeze([
    "requiresUserApproval",
    "requiresAdvisorConfirmation",
    "requiresAdminApproval",
    "requiresAuditLogging",
    "allowsAdvisorContact",
    "allowsSessionScheduling",
    "allowsMessageSending",
    "allowsCallHandoff"
  ]);

  const FARM_DATA_CONSENT_GATE_FIELDS = Object.freeze([
    "requiresPurposeDisclosure",
    "requiresUserConsent",
    "requiresMinimumNecessaryData",
    "requiresLocationConsent",
    "requiresPhotoConsent",
    "requiresFarmProfileConsent",
    "allowsFarmDataSharing",
    "allowsPreciseLocationSharing",
    "allowsCropPhotoSharing",
    "allowsFarmProfileSharing"
  ]);

  const ADVISORY_AUDIT_EVENT_FIELDS = Object.freeze([
    "eventType",
    "connectorId",
    "connectorStatus",
    "serviceCategories",
    "sourceBackedGuidanceAllowed",
    "advisoryHandoffEnabled",
    "farmDataSharingEnabled",
    "noExecution",
    "createdAt"
  ]);

  const DEFAULT_ADVISORY_HANDOFF_GATE = Object.freeze({
    requiresUserApproval: true,
    requiresAdvisorConfirmation: true,
    requiresAdminApproval: true,
    requiresAuditLogging: true,
    allowsAdvisorContact: false,
    allowsSessionScheduling: false,
    allowsMessageSending: false,
    allowsCallHandoff: false
  });

  const DEFAULT_FARM_DATA_CONSENT_GATE = Object.freeze({
    requiresPurposeDisclosure: true,
    requiresUserConsent: true,
    requiresMinimumNecessaryData: true,
    requiresLocationConsent: true,
    requiresPhotoConsent: true,
    requiresFarmProfileConsent: true,
    allowsFarmDataSharing: false,
    allowsPreciseLocationSharing: false,
    allowsCropPhotoSharing: false,
    allowsFarmProfileSharing: false
  });

  const FARMER_ADVISORY_CONNECTOR_CONTRACT = Object.freeze({
    connectorId: "agriculture.farmer_advisory.not_configured",
    advisoryPartnerName: "",
    sourceOwner: "farmer advisory source verification required",
    connectorStatus: "not_configured",
    serviceCategories: Object.freeze([]),
    serviceRegions: Object.freeze([]),
    supportedCrops: Object.freeze([]),
    supportedLanguages: Object.freeze(["en"]),
    advisorCredentialStatus: "not_reviewed",
    sourceVerificationStatus: "not_started",
    partnerAgreementStatus: "review required",
    freshnessModel: Object.freeze({
      freshnessField: "advisorySourceVerifiedAt",
      staleAfter: "source-specific",
      displayRequirement: "Show advisory source, regional scope, and freshness before relying on guidance."
    }),
    regionalScope: "not reviewed",
    languageScope: "not reviewed",
    allowedResponseStates: Object.freeze(["general_guidance", "unavailable_source_fallback"]),
    advisoryHandoffGate: DEFAULT_ADVISORY_HANDOFF_GATE,
    farmDataConsentGate: DEFAULT_FARM_DATA_CONSENT_GATE,
    auditRequirements: Object.freeze(["farmer-advisory-reviewed", "source-freshness-shown", "handoff-blocked-until-approved"]),
    auditEvent: Object.freeze({
      eventType: "agriculture.farmer_advisory_connector_created",
      connectorId: "agriculture.farmer_advisory.not_configured",
      connectorStatus: "not_configured",
      serviceCategories: Object.freeze([]),
      sourceBackedGuidanceAllowed: false,
      advisoryHandoffEnabled: false,
      farmDataSharingEnabled: false,
      noExecution: true,
      createdAt: null
    }),
    ...NO_EXECUTION_DEFAULTS
  });

  function normalizeConnectorStatus(value) {
    return ADVISORY_CONNECTOR_STATUSES.includes(value) ? value : FARMER_ADVISORY_CONNECTOR_CONTRACT.connectorStatus;
  }

  function createFarmerAdvisoryConnector(overrides = {}) {
    const connectorStatus = normalizeConnectorStatus(overrides.connectorStatus);
    const serviceCategories = Array.isArray(overrides.serviceCategories)
      ? overrides.serviceCategories.filter(category => ADVISORY_SERVICE_CATEGORIES.includes(category))
      : [];
    return Object.freeze({
      ...FARMER_ADVISORY_CONNECTOR_CONTRACT,
      ...overrides,
      connectorStatus,
      serviceCategories: Object.freeze(serviceCategories),
      serviceRegions: Object.freeze(Array.isArray(overrides.serviceRegions) ? overrides.serviceRegions.slice() : []),
      supportedCrops: Object.freeze(Array.isArray(overrides.supportedCrops) ? overrides.supportedCrops.slice() : []),
      supportedLanguages: Object.freeze(Array.isArray(overrides.supportedLanguages) ? overrides.supportedLanguages.slice() : ["en"]),
      advisoryHandoffGate: Object.freeze({
        ...DEFAULT_ADVISORY_HANDOFF_GATE,
        ...(overrides.advisoryHandoffGate || {}),
        allowsAdvisorContact: false,
        allowsSessionScheduling: false,
        allowsMessageSending: false,
        allowsCallHandoff: false
      }),
      farmDataConsentGate: Object.freeze({
        ...DEFAULT_FARM_DATA_CONSENT_GATE,
        ...(overrides.farmDataConsentGate || {}),
        allowsFarmDataSharing: false,
        allowsPreciseLocationSharing: false,
        allowsCropPhotoSharing: false,
        allowsFarmProfileSharing: false
      }),
      auditRequirements: Object.freeze(Array.isArray(overrides.auditRequirements) ? overrides.auditRequirements.slice() : FARMER_ADVISORY_CONNECTOR_CONTRACT.auditRequirements.slice()),
      auditEvent: Object.freeze({
        ...FARMER_ADVISORY_CONNECTOR_CONTRACT.auditEvent,
        ...(overrides.auditEvent || {}),
        connectorId: overrides.connectorId || FARMER_ADVISORY_CONNECTOR_CONTRACT.connectorId,
        connectorStatus,
        serviceCategories: Object.freeze(serviceCategories),
        sourceBackedGuidanceAllowed: false,
        advisoryHandoffEnabled: false,
        farmDataSharingEnabled: false,
        noExecution: true
      }),
      ...Object.fromEntries(Object.entries(NO_EXECUTION_DEFAULTS).map(([key, value]) => [key, value]))
    });
  }

  return Object.freeze({
    ADVISORY_CONNECTOR_STATUSES,
    ADVISORY_SERVICE_CATEGORIES,
    NO_EXECUTION_DEFAULTS,
    FARMER_ADVISORY_CONNECTOR_FIELDS,
    ADVISORY_HANDOFF_GATE_FIELDS,
    FARM_DATA_CONSENT_GATE_FIELDS,
    ADVISORY_AUDIT_EVENT_FIELDS,
    DEFAULT_ADVISORY_HANDOFF_GATE,
    DEFAULT_FARM_DATA_CONSENT_GATE,
    FARMER_ADVISORY_CONNECTOR_CONTRACT,
    createFarmerAdvisoryConnector
  });
});
