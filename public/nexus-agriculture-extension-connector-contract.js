(function nexusAgricultureExtensionConnectorContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusAgricultureExtensionConnectorContract = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusAgricultureExtensionConnectorContractModule() {
  const EXTENSION_CONNECTOR_STATUSES = Object.freeze([
    "not_configured",
    "source_verification_required",
    "partner_agreement_required",
    "regional_scope_required",
    "language_review_required",
    "sandbox_testing_required",
    "approved_not_live",
    "active_source_only",
    "rejected_or_blocked",
    "inactive"
  ]);

  const EXTENSION_SERVICE_CATEGORIES = Object.freeze([
    "crop_advisory",
    "field_support",
    "soil_guidance",
    "irrigation_guidance",
    "pest_disease_guidance",
    "post_harvest_support",
    "training_referral",
    "cooperative_navigation",
    "market_readiness_guidance",
    "climate_resilience_guidance"
  ]);

  const NO_EXECUTION_DEFAULTS = Object.freeze({
    noExecution: true,
    sourceBackedGuidanceAllowed: false,
    providerContactEnabled: false,
    farmDataSharingEnabled: false,
    locationSharingEnabled: false,
    liveActionEnabled: false,
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

  const EXTENSION_CONNECTOR_FIELDS = Object.freeze([
    "connectorId",
    "extensionOfficeName",
    "sourceOwner",
    "connectorStatus",
    "serviceCategories",
    "serviceRegions",
    "supportedCrops",
    "supportedLanguages",
    "sourceVerificationStatus",
    "partnerAgreementStatus",
    "freshnessModel",
    "regionalScope",
    "languageScope",
    "allowedResponseStates",
    "contactApprovalGate",
    "farmDataSharingGate",
    "auditRequirements",
    "auditEvent",
    "sourceBackedGuidanceAllowed",
    "providerContactEnabled",
    "farmDataSharingEnabled",
    "locationSharingEnabled",
    "liveActionEnabled",
    "noExecution"
  ]);

  const CONTACT_APPROVAL_GATE_FIELDS = Object.freeze([
    "requiresUserApproval",
    "requiresProviderConfirmation",
    "requiresAdminApproval",
    "requiresAuditLogging",
    "allowsExtensionContact",
    "allowsVisitScheduling",
    "allowsMessageSending",
    "allowsCallHandoff"
  ]);

  const FARM_DATA_SHARING_GATE_FIELDS = Object.freeze([
    "requiresPurposeDisclosure",
    "requiresUserConsent",
    "requiresMinimumNecessaryData",
    "requiresLocationConsent",
    "requiresPhotoConsent",
    "allowsFarmDataSharing",
    "allowsPreciseLocationSharing",
    "allowsCropPhotoSharing"
  ]);

  const EXTENSION_AUDIT_EVENT_FIELDS = Object.freeze([
    "eventType",
    "connectorId",
    "connectorStatus",
    "serviceCategories",
    "sourceBackedGuidanceAllowed",
    "providerContactEnabled",
    "farmDataSharingEnabled",
    "noExecution",
    "createdAt"
  ]);

  const DEFAULT_CONTACT_APPROVAL_GATE = Object.freeze({
    requiresUserApproval: true,
    requiresProviderConfirmation: true,
    requiresAdminApproval: true,
    requiresAuditLogging: true,
    allowsExtensionContact: false,
    allowsVisitScheduling: false,
    allowsMessageSending: false,
    allowsCallHandoff: false
  });

  const DEFAULT_FARM_DATA_SHARING_GATE = Object.freeze({
    requiresPurposeDisclosure: true,
    requiresUserConsent: true,
    requiresMinimumNecessaryData: true,
    requiresLocationConsent: true,
    requiresPhotoConsent: true,
    allowsFarmDataSharing: false,
    allowsPreciseLocationSharing: false,
    allowsCropPhotoSharing: false
  });

  const AGRICULTURE_EXTENSION_CONNECTOR_CONTRACT = Object.freeze({
    connectorId: "agriculture.extension.not_configured",
    extensionOfficeName: "",
    sourceOwner: "extension source verification required",
    connectorStatus: "not_configured",
    serviceCategories: Object.freeze([]),
    serviceRegions: Object.freeze([]),
    supportedCrops: Object.freeze([]),
    supportedLanguages: Object.freeze(["en"]),
    sourceVerificationStatus: "not_started",
    partnerAgreementStatus: "review required",
    freshnessModel: Object.freeze({
      freshnessField: "extensionSourceVerifiedAt",
      staleAfter: "source-specific",
      displayRequirement: "Show extension source, regional scope, and freshness before relying on guidance."
    }),
    regionalScope: "not reviewed",
    languageScope: "not reviewed",
    allowedResponseStates: Object.freeze(["general_guidance", "unavailable_source_fallback"]),
    contactApprovalGate: DEFAULT_CONTACT_APPROVAL_GATE,
    farmDataSharingGate: DEFAULT_FARM_DATA_SHARING_GATE,
    auditRequirements: Object.freeze(["extension-connector-reviewed", "source-freshness-shown", "contact-blocked-until-approved"]),
    auditEvent: Object.freeze({
      eventType: "agriculture.extension_connector_created",
      connectorId: "agriculture.extension.not_configured",
      connectorStatus: "not_configured",
      serviceCategories: Object.freeze([]),
      sourceBackedGuidanceAllowed: false,
      providerContactEnabled: false,
      farmDataSharingEnabled: false,
      noExecution: true,
      createdAt: null
    }),
    ...NO_EXECUTION_DEFAULTS
  });

  function normalizeConnectorStatus(value) {
    return EXTENSION_CONNECTOR_STATUSES.includes(value) ? value : AGRICULTURE_EXTENSION_CONNECTOR_CONTRACT.connectorStatus;
  }

  function createAgricultureExtensionConnector(overrides = {}) {
    const connectorStatus = normalizeConnectorStatus(overrides.connectorStatus);
    const serviceCategories = Array.isArray(overrides.serviceCategories)
      ? overrides.serviceCategories.filter(category => EXTENSION_SERVICE_CATEGORIES.includes(category))
      : [];
    return Object.freeze({
      ...AGRICULTURE_EXTENSION_CONNECTOR_CONTRACT,
      ...overrides,
      connectorStatus,
      serviceCategories: Object.freeze(serviceCategories),
      serviceRegions: Object.freeze(Array.isArray(overrides.serviceRegions) ? overrides.serviceRegions.slice() : []),
      supportedCrops: Object.freeze(Array.isArray(overrides.supportedCrops) ? overrides.supportedCrops.slice() : []),
      supportedLanguages: Object.freeze(Array.isArray(overrides.supportedLanguages) ? overrides.supportedLanguages.slice() : ["en"]),
      contactApprovalGate: Object.freeze({
        ...DEFAULT_CONTACT_APPROVAL_GATE,
        ...(overrides.contactApprovalGate || {}),
        allowsExtensionContact: false,
        allowsVisitScheduling: false,
        allowsMessageSending: false,
        allowsCallHandoff: false
      }),
      farmDataSharingGate: Object.freeze({
        ...DEFAULT_FARM_DATA_SHARING_GATE,
        ...(overrides.farmDataSharingGate || {}),
        allowsFarmDataSharing: false,
        allowsPreciseLocationSharing: false,
        allowsCropPhotoSharing: false
      }),
      auditRequirements: Object.freeze(Array.isArray(overrides.auditRequirements) ? overrides.auditRequirements.slice() : AGRICULTURE_EXTENSION_CONNECTOR_CONTRACT.auditRequirements.slice()),
      auditEvent: Object.freeze({
        ...AGRICULTURE_EXTENSION_CONNECTOR_CONTRACT.auditEvent,
        ...(overrides.auditEvent || {}),
        connectorId: overrides.connectorId || AGRICULTURE_EXTENSION_CONNECTOR_CONTRACT.connectorId,
        connectorStatus,
        serviceCategories: Object.freeze(serviceCategories),
        sourceBackedGuidanceAllowed: false,
        providerContactEnabled: false,
        farmDataSharingEnabled: false,
        noExecution: true
      }),
      ...Object.fromEntries(Object.entries(NO_EXECUTION_DEFAULTS).map(([key, value]) => [key, value]))
    });
  }

  return Object.freeze({
    EXTENSION_CONNECTOR_STATUSES,
    EXTENSION_SERVICE_CATEGORIES,
    NO_EXECUTION_DEFAULTS,
    EXTENSION_CONNECTOR_FIELDS,
    CONTACT_APPROVAL_GATE_FIELDS,
    FARM_DATA_SHARING_GATE_FIELDS,
    EXTENSION_AUDIT_EVENT_FIELDS,
    DEFAULT_CONTACT_APPROVAL_GATE,
    DEFAULT_FARM_DATA_SHARING_GATE,
    AGRICULTURE_EXTENSION_CONNECTOR_CONTRACT,
    createAgricultureExtensionConnector
  });
});
