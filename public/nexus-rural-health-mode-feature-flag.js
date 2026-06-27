(function nexusRuralHealthModeFeatureFlagFactory(root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory(); else root.NexusRuralHealthModeFeatureFlagContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusRuralHealthModeFeatureFlagModule() {
  const RURAL_HEALTH_MODE_FEATURE_FLAG_NAME = "NEXUS_RURAL_HEALTH_MODE_VISIBLE_ENABLED";

  const DEFAULT_RURAL_HEALTH_MODE_FEATURE_FLAG_STATE = Object.freeze({
    flagName: RURAL_HEALTH_MODE_FEATURE_FLAG_NAME,
    enabled: false,
    visibleUiAllowed: false,
    ruralHealthModeReviewAllowed: false,
    healthAccessGuidancePreviewAllowed: false,
    providerDirectoryPreviewAllowed: false,
    clinicAccessPreviewAllowed: false,
    telehealthReadinessPreviewAllowed: false,
    pharmacySupportPreviewAllowed: false,
    mobileClinicSchedulePreviewAllowed: false,
    transportationToCarePreviewAllowed: false,
    ruralHealthModeRuntimeAllowed: false,
    liveRuralHealthModeRuntimeAllowed: false,
    healthConnectorRuntimeAllowed: false,
    clinicConnectorRuntimeAllowed: false,
    telehealthConnectorRuntimeAllowed: false,
    pharmacyConnectorRuntimeAllowed: false,
    prescriptionRefillRuntimeAllowed: false,
    mobileClinicScheduleRuntimeAllowed: false,
    transportationDispatchAllowed: false,
    emergencyDispatchAllowed: false,
    medicalRecordsFhirRuntimeAllowed: false,
    medicalAdviceAllowed: false,
    diagnosisClaimAllowed: false,
    prescriptionInstructionAllowed: false,
    refillExecutionAllowed: false,
    providerContactAllowed: false,
    clinicianContactAllowed: false,
    locationSharingAllowed: false,
    cameraActivationAllowed: false,
    microphoneActivationAllowed: false,
    paymentExecutionAllowed: false,
    marketplaceTransactionAllowed: false,
    identityAccountProfileActionAllowed: false,
    communicationsExecutionAllowed: false,
    policyBypassAllowed: false,
    confirmationBypassAllowed: false,
    permissionBypassAllowed: false,
    firstTurnExecutionAllowed: false,
    laterTurnExecutionAllowed: false,
    standardUserRuralHealthModeMutationAllowed: false,
    backendWriteAllowed: false,
    storageWriteAllowed: false,
    networkAllowed: false,
    auditWriteAllowed: false,
    executionAuthority: false,
    noExecution: true
  });

  const PROTECTED_RURAL_HEALTH_MODE_FLAG_FIELDS = Object.freeze([
    "ruralHealthModeReviewAllowed",
    "healthAccessGuidancePreviewAllowed",
    "providerDirectoryPreviewAllowed",
    "clinicAccessPreviewAllowed",
    "telehealthReadinessPreviewAllowed",
    "pharmacySupportPreviewAllowed",
    "mobileClinicSchedulePreviewAllowed",
    "transportationToCarePreviewAllowed",
    "ruralHealthModeRuntimeAllowed",
    "liveRuralHealthModeRuntimeAllowed",
    "healthConnectorRuntimeAllowed",
    "clinicConnectorRuntimeAllowed",
    "telehealthConnectorRuntimeAllowed",
    "pharmacyConnectorRuntimeAllowed",
    "prescriptionRefillRuntimeAllowed",
    "mobileClinicScheduleRuntimeAllowed",
    "transportationDispatchAllowed",
    "emergencyDispatchAllowed",
    "medicalRecordsFhirRuntimeAllowed",
    "medicalAdviceAllowed",
    "diagnosisClaimAllowed",
    "prescriptionInstructionAllowed",
    "refillExecutionAllowed",
    "providerContactAllowed",
    "clinicianContactAllowed",
    "locationSharingAllowed",
    "cameraActivationAllowed",
    "microphoneActivationAllowed",
    "paymentExecutionAllowed",
    "marketplaceTransactionAllowed",
    "identityAccountProfileActionAllowed",
    "communicationsExecutionAllowed",
    "policyBypassAllowed",
    "confirmationBypassAllowed",
    "permissionBypassAllowed",
    "firstTurnExecutionAllowed",
    "laterTurnExecutionAllowed",
    "standardUserRuralHealthModeMutationAllowed",
    "backendWriteAllowed",
    "storageWriteAllowed",
    "networkAllowed",
    "auditWriteAllowed",
    "executionAuthority"
  ]);

  function normalizeRuralHealthModeFeatureFlagState(input = {}) {
    const requested = input && typeof input === "object" ? input : {};
    const normalized = {
      ...DEFAULT_RURAL_HEALTH_MODE_FEATURE_FLAG_STATE,
      enabled: requested.enabled === true,
      visibleUiAllowed: requested.enabled === true && requested.visibleUiAllowed === true,
      noExecution: true
    };

    for (const field of PROTECTED_RURAL_HEALTH_MODE_FLAG_FIELDS) {
      normalized[field] = false;
    }

    return Object.freeze(normalized);
  }

  function isRuralHealthModeVisibleFeatureEnabled(state) {
    const normalized = normalizeRuralHealthModeFeatureFlagState(state);
    return normalized.enabled === true && normalized.visibleUiAllowed === true && normalized.noExecution === true;
  }

  return Object.freeze({
    RURAL_HEALTH_MODE_FEATURE_FLAG_NAME,
    DEFAULT_RURAL_HEALTH_MODE_FEATURE_FLAG_STATE,
    PROTECTED_RURAL_HEALTH_MODE_FLAG_FIELDS,
    normalizeRuralHealthModeFeatureFlagState,
    isRuralHealthModeVisibleFeatureEnabled
  });
});
