(function nexusCropPestDiseaseSourceConnectorContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusCropPestDiseaseSourceConnectorContract = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusCropPestDiseaseSourceConnectorContractModule() {
  const CROP_AUTHORITY_SOURCE_STATUSES = Object.freeze([
    "not_configured",
    "source_verification_required",
    "authority_scope_required",
    "freshness_rule_required",
    "regional_scope_required",
    "language_review_required",
    "sandbox_testing_required",
    "approved_not_live",
    "active_source_only",
    "rejected_or_blocked",
    "inactive"
  ]);

  const CROP_AUTHORITY_SOURCE_CATEGORIES = Object.freeze([
    "pest_alert",
    "disease_advisory",
    "crop_protection_guidance",
    "field_scouting_guidance",
    "symptom_triage_guidance",
    "integrated_pest_management",
    "plant_health_authority_notice",
    "regional_outbreak_notice",
    "safe_treatment_guidance",
    "extension_referral_guidance"
  ]);

  const NO_EXECUTION_DEFAULTS = Object.freeze({
    noExecution: true,
    sourceBackedGuidanceAllowed: false,
    diagnosisClaimAllowed: false,
    cropDiagnosisEnabled: false,
    cameraUseEnabled: false,
    cropPhotoSharingEnabled: false,
    providerContactEnabled: false,
    farmDataSharingEnabled: false,
    locationSharingEnabled: false,
    liveActionEnabled: false,
    authorityContacted: false,
    advisorContacted: false,
    userDataShared: false,
    externalActionExecuted: false,
    paymentExecuted: false,
    marketplaceTransactionExecuted: false,
    logisticsDispatched: false,
    droneDispatched: false,
    medicalRecordAccessed: false,
    prescriptionSubmitted: false,
    emergencyDispatched: false,
    locationShared: false,
    callOrMessageSent: false
  });

  const CROP_PEST_DISEASE_SOURCE_CONNECTOR_FIELDS = Object.freeze([
    "connectorId",
    "authorityName",
    "sourceOwner",
    "connectorStatus",
    "sourceCategories",
    "coveredRegions",
    "coveredCrops",
    "coveredPests",
    "coveredDiseases",
    "supportedLanguages",
    "authorityScopeStatus",
    "sourceVerificationStatus",
    "freshnessRuleStatus",
    "freshnessModel",
    "regionalScope",
    "languageScope",
    "allowedResponseStates",
    "diagnosisBoundary",
    "cropEvidenceConsentGate",
    "auditRequirements",
    "auditEvent",
    "sourceBackedGuidanceAllowed",
    "diagnosisClaimAllowed",
    "cameraUseEnabled",
    "cropPhotoSharingEnabled",
    "farmDataSharingEnabled",
    "locationSharingEnabled",
    "liveActionEnabled",
    "noExecution"
  ]);

  const DIAGNOSIS_BOUNDARY_FIELDS = Object.freeze([
    "requiresSourceAttribution",
    "requiresFreshnessDisclosure",
    "requiresRegionalScopeDisclosure",
    "requiresHumanExpertReviewForDiagnosis",
    "allowsFinalDiagnosisClaim",
    "allowsTreatmentPrescription",
    "allowsAuthorityContact",
    "allowsAdvisorHandoff"
  ]);

  const CROP_EVIDENCE_CONSENT_GATE_FIELDS = Object.freeze([
    "requiresPurposeDisclosure",
    "requiresUserConsent",
    "requiresMinimumNecessaryData",
    "requiresLocationConsent",
    "requiresPhotoConsent",
    "requiresFarmProfileConsent",
    "allowsCropPhotoSharing",
    "allowsPreciseLocationSharing",
    "allowsFarmDataSharing",
    "allowsCameraActivation"
  ]);

  const CROP_AUTHORITY_AUDIT_EVENT_FIELDS = Object.freeze([
    "eventType",
    "connectorId",
    "connectorStatus",
    "sourceCategories",
    "sourceBackedGuidanceAllowed",
    "diagnosisClaimAllowed",
    "cropPhotoSharingEnabled",
    "farmDataSharingEnabled",
    "noExecution",
    "createdAt"
  ]);

  const DEFAULT_DIAGNOSIS_BOUNDARY = Object.freeze({
    requiresSourceAttribution: true,
    requiresFreshnessDisclosure: true,
    requiresRegionalScopeDisclosure: true,
    requiresHumanExpertReviewForDiagnosis: true,
    allowsFinalDiagnosisClaim: false,
    allowsTreatmentPrescription: false,
    allowsAuthorityContact: false,
    allowsAdvisorHandoff: false
  });

  const DEFAULT_CROP_EVIDENCE_CONSENT_GATE = Object.freeze({
    requiresPurposeDisclosure: true,
    requiresUserConsent: true,
    requiresMinimumNecessaryData: true,
    requiresLocationConsent: true,
    requiresPhotoConsent: true,
    requiresFarmProfileConsent: true,
    allowsCropPhotoSharing: false,
    allowsPreciseLocationSharing: false,
    allowsFarmDataSharing: false,
    allowsCameraActivation: false
  });

  const CROP_PEST_DISEASE_SOURCE_CONNECTOR_CONTRACT = Object.freeze({
    connectorId: "agriculture.crop_pest_disease.not_configured",
    authorityName: "",
    sourceOwner: "crop authority source verification required",
    connectorStatus: "not_configured",
    sourceCategories: Object.freeze([]),
    coveredRegions: Object.freeze([]),
    coveredCrops: Object.freeze([]),
    coveredPests: Object.freeze([]),
    coveredDiseases: Object.freeze([]),
    supportedLanguages: Object.freeze(["en"]),
    authorityScopeStatus: "not_reviewed",
    sourceVerificationStatus: "not_started",
    freshnessRuleStatus: "not_configured",
    freshnessModel: Object.freeze({
      freshnessField: "authoritySourceUpdatedAt",
      staleAfter: "source-specific",
      displayRequirement: "Show authority source, region, crop scope, and freshness before relying on crop guidance."
    }),
    regionalScope: "not reviewed",
    languageScope: "not reviewed",
    allowedResponseStates: Object.freeze(["general_guidance", "unavailable_source_fallback"]),
    diagnosisBoundary: DEFAULT_DIAGNOSIS_BOUNDARY,
    cropEvidenceConsentGate: DEFAULT_CROP_EVIDENCE_CONSENT_GATE,
    auditRequirements: Object.freeze(["crop-authority-source-reviewed", "source-freshness-shown", "diagnosis-claim-blocked"]),
    auditEvent: Object.freeze({
      eventType: "agriculture.crop_pest_disease_source_connector_created",
      connectorId: "agriculture.crop_pest_disease.not_configured",
      connectorStatus: "not_configured",
      sourceCategories: Object.freeze([]),
      sourceBackedGuidanceAllowed: false,
      diagnosisClaimAllowed: false,
      cropPhotoSharingEnabled: false,
      farmDataSharingEnabled: false,
      noExecution: true,
      createdAt: null
    }),
    ...NO_EXECUTION_DEFAULTS
  });

  function normalizeConnectorStatus(value) {
    return CROP_AUTHORITY_SOURCE_STATUSES.includes(value) ? value : CROP_PEST_DISEASE_SOURCE_CONNECTOR_CONTRACT.connectorStatus;
  }

  function createCropPestDiseaseSourceConnector(overrides = {}) {
    const connectorStatus = normalizeConnectorStatus(overrides.connectorStatus);
    const sourceCategories = Array.isArray(overrides.sourceCategories)
      ? overrides.sourceCategories.filter(category => CROP_AUTHORITY_SOURCE_CATEGORIES.includes(category))
      : [];
    return Object.freeze({
      ...CROP_PEST_DISEASE_SOURCE_CONNECTOR_CONTRACT,
      ...overrides,
      connectorStatus,
      sourceCategories: Object.freeze(sourceCategories),
      coveredRegions: Object.freeze(Array.isArray(overrides.coveredRegions) ? overrides.coveredRegions.slice() : []),
      coveredCrops: Object.freeze(Array.isArray(overrides.coveredCrops) ? overrides.coveredCrops.slice() : []),
      coveredPests: Object.freeze(Array.isArray(overrides.coveredPests) ? overrides.coveredPests.slice() : []),
      coveredDiseases: Object.freeze(Array.isArray(overrides.coveredDiseases) ? overrides.coveredDiseases.slice() : []),
      supportedLanguages: Object.freeze(Array.isArray(overrides.supportedLanguages) ? overrides.supportedLanguages.slice() : ["en"]),
      diagnosisBoundary: Object.freeze({
        ...DEFAULT_DIAGNOSIS_BOUNDARY,
        ...(overrides.diagnosisBoundary || {}),
        allowsFinalDiagnosisClaim: false,
        allowsTreatmentPrescription: false,
        allowsAuthorityContact: false,
        allowsAdvisorHandoff: false
      }),
      cropEvidenceConsentGate: Object.freeze({
        ...DEFAULT_CROP_EVIDENCE_CONSENT_GATE,
        ...(overrides.cropEvidenceConsentGate || {}),
        allowsCropPhotoSharing: false,
        allowsPreciseLocationSharing: false,
        allowsFarmDataSharing: false,
        allowsCameraActivation: false
      }),
      auditRequirements: Object.freeze(Array.isArray(overrides.auditRequirements) ? overrides.auditRequirements.slice() : CROP_PEST_DISEASE_SOURCE_CONNECTOR_CONTRACT.auditRequirements.slice()),
      auditEvent: Object.freeze({
        ...CROP_PEST_DISEASE_SOURCE_CONNECTOR_CONTRACT.auditEvent,
        ...(overrides.auditEvent || {}),
        connectorId: overrides.connectorId || CROP_PEST_DISEASE_SOURCE_CONNECTOR_CONTRACT.connectorId,
        connectorStatus,
        sourceCategories: Object.freeze(sourceCategories),
        sourceBackedGuidanceAllowed: false,
        diagnosisClaimAllowed: false,
        cropPhotoSharingEnabled: false,
        farmDataSharingEnabled: false,
        noExecution: true
      }),
      ...Object.fromEntries(Object.entries(NO_EXECUTION_DEFAULTS).map(([key, value]) => [key, value]))
    });
  }

  return Object.freeze({
    CROP_AUTHORITY_SOURCE_STATUSES,
    CROP_AUTHORITY_SOURCE_CATEGORIES,
    NO_EXECUTION_DEFAULTS,
    CROP_PEST_DISEASE_SOURCE_CONNECTOR_FIELDS,
    DIAGNOSIS_BOUNDARY_FIELDS,
    CROP_EVIDENCE_CONSENT_GATE_FIELDS,
    CROP_AUTHORITY_AUDIT_EVENT_FIELDS,
    DEFAULT_DIAGNOSIS_BOUNDARY,
    DEFAULT_CROP_EVIDENCE_CONSENT_GATE,
    CROP_PEST_DISEASE_SOURCE_CONNECTOR_CONTRACT,
    createCropPestDiseaseSourceConnector
  });
});
