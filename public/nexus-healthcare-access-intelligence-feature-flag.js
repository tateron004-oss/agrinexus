(function nexusHealthcareAccessIntelligenceFeatureFlagFactory(root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory(); else root.NexusHealthcareAccessIntelligenceFeatureFlagContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusHealthcareAccessIntelligenceFeatureFlagModule() {
  const HEALTHCARE_ACCESS_INTELLIGENCE_FEATURE_FLAG_NAME = "NEXUS_HEALTHCARE_ACCESS_INTELLIGENCE_VISIBLE_ENABLED";

  const DEFAULT_HEALTHCARE_ACCESS_INTELLIGENCE_FEATURE_FLAG_STATE = Object.freeze({
    enabled: false,
    visibleUiAllowed: false,
    healthAccessReviewAllowed: false,
    sourceBackedHealthGuidancePreviewAllowed: false,
    patientAccessSummaryPreviewAllowed: false,
    providerEscalationPreviewAllowed: false,
    healthcareRuntimeAllowed: false,
    liveHealthcareAdvisorAllowed: false,
    sourceRetrievalRuntimeAllowed: false,
    diagnosisClaimAllowed: false,
    medicalAdviceClaimAllowed: false,
    prescriptionOrRefillExecutionAllowed: false,
    pharmacyWorkflowExecutionAllowed: false,
    clinicProviderTelehealthContactAllowed: false,
    telehealthSessionLaunchAllowed: false,
    medicalRecordsFhirAccessAllowed: false,
    paymentExecutionAllowed: false,
    emergencyDispatchAllowed: false,
    transportationDispatchAllowed: false,
    locationSharingAllowed: false,
    cameraMicrophoneActivationAllowed: false,
    providerConnectionClaimAllowed: false,
    completedActionClaimAllowed: false,
    policyBypassAllowed: false,
    confirmationBypassAllowed: false,
    permissionBypassAllowed: false,
    firstTurnExecutionAllowed: false,
    laterTurnExecutionAllowed: false,
    standardUserHealthcareBrainMutationAllowed: false,
    backendWriteAllowed: false,
    storageWriteAllowed: false,
    networkAllowed: false,
    auditWriteAllowed: false,
    executionAuthority: false,
    noExecution: true
  });

  const PROTECTED_HEALTHCARE_ACCESS_INTELLIGENCE_FLAG_FIELDS = Object.freeze([
    "healthAccessReviewAllowed",
    "sourceBackedHealthGuidancePreviewAllowed",
    "patientAccessSummaryPreviewAllowed",
    "providerEscalationPreviewAllowed",
    "healthcareRuntimeAllowed",
    "liveHealthcareAdvisorAllowed",
    "sourceRetrievalRuntimeAllowed",
    "diagnosisClaimAllowed",
    "medicalAdviceClaimAllowed",
    "prescriptionOrRefillExecutionAllowed",
    "pharmacyWorkflowExecutionAllowed",
    "clinicProviderTelehealthContactAllowed",
    "telehealthSessionLaunchAllowed",
    "medicalRecordsFhirAccessAllowed",
    "paymentExecutionAllowed",
    "emergencyDispatchAllowed",
    "transportationDispatchAllowed",
    "locationSharingAllowed",
    "cameraMicrophoneActivationAllowed",
    "providerConnectionClaimAllowed",
    "completedActionClaimAllowed",
    "policyBypassAllowed",
    "confirmationBypassAllowed",
    "permissionBypassAllowed",
    "firstTurnExecutionAllowed",
    "laterTurnExecutionAllowed",
    "standardUserHealthcareBrainMutationAllowed",
    "backendWriteAllowed",
    "storageWriteAllowed",
    "networkAllowed",
    "auditWriteAllowed",
    "executionAuthority"
  ]);

  function normalizeHealthcareAccessIntelligenceFeatureFlagState(input = {}) {
    const requested = input && typeof input === "object" ? input : {};
    const normalized = {
      ...DEFAULT_HEALTHCARE_ACCESS_INTELLIGENCE_FEATURE_FLAG_STATE,
      enabled: requested.enabled === true,
      visibleUiAllowed: requested.enabled === true && requested.visibleUiAllowed === true,
      noExecution: true
    };

    for (const field of PROTECTED_HEALTHCARE_ACCESS_INTELLIGENCE_FLAG_FIELDS) {
      normalized[field] = false;
    }

    return Object.freeze(normalized);
  }

  function isHealthcareAccessIntelligenceVisibleFeatureEnabled(state) {
    const normalized = normalizeHealthcareAccessIntelligenceFeatureFlagState(state);
    return normalized.enabled === true && normalized.visibleUiAllowed === true && normalized.noExecution === true;
  }

  return Object.freeze({
    HEALTHCARE_ACCESS_INTELLIGENCE_FEATURE_FLAG_NAME,
    DEFAULT_HEALTHCARE_ACCESS_INTELLIGENCE_FEATURE_FLAG_STATE,
    PROTECTED_HEALTHCARE_ACCESS_INTELLIGENCE_FLAG_FIELDS,
    normalizeHealthcareAccessIntelligenceFeatureFlagState,
    isHealthcareAccessIntelligenceVisibleFeatureEnabled
  });
});
