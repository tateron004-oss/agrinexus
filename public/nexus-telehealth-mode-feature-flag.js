(function nexusTelehealthModeFeatureFlagFactory(root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory(); else root.NexusTelehealthModeFeatureFlagContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusTelehealthModeFeatureFlagModule() {
  const TELEHEALTH_MODE_FEATURE_FLAG_NAME = "NEXUS_TELEHEALTH_MODE_VISIBLE_ENABLED";

  const DEFAULT_TELEHEALTH_MODE_FEATURE_FLAG_STATE = Object.freeze({
    flagName: TELEHEALTH_MODE_FEATURE_FLAG_NAME,
    enabled: false,
    visibleUiAllowed: false,
    telehealthModeReviewAllowed: false,
    telehealthAccessGuidancePreviewAllowed: false,
    providerDirectoryPreviewAllowed: false,
    clinicAccessPreviewAllowed: false,
    clinicianAvailabilityPreviewAllowed: false,
    pharmacySupportPreviewAllowed: false,
    mobileClinicSchedulePreviewAllowed: false,
    transportationToCarePreviewAllowed: false,
    telehealthModeRuntimeAllowed: false,
    liveTelehealthModeRuntimeAllowed: false,
    healthConnectorRuntimeAllowed: false,
    clinicConnectorRuntimeAllowed: false,
    telehealthConnectorRuntimeAllowed: false,
    providerConnectorRuntimeAllowed: false,
    clinicianConnectorRuntimeAllowed: false,
    pharmacyConnectorRuntimeAllowed: false,
    prescriptionRefillRuntimeAllowed: false,
    appointmentSchedulingAllowed: false,
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
    standardUserTelehealthModeMutationAllowed: false,
    backendWriteAllowed: false,
    storageWriteAllowed: false,
    networkAllowed: false,
    auditWriteAllowed: false,
    executionAuthority: false,
    noExecution: true
  });

  const PROTECTED_TELEHEALTH_MODE_FLAG_FIELDS = Object.freeze([
    "telehealthModeReviewAllowed",
    "telehealthAccessGuidancePreviewAllowed",
    "providerDirectoryPreviewAllowed",
    "clinicAccessPreviewAllowed",
    "clinicianAvailabilityPreviewAllowed",
    "pharmacySupportPreviewAllowed",
    "mobileClinicSchedulePreviewAllowed",
    "transportationToCarePreviewAllowed",
    "telehealthModeRuntimeAllowed",
    "liveTelehealthModeRuntimeAllowed",
    "healthConnectorRuntimeAllowed",
    "clinicConnectorRuntimeAllowed",
    "telehealthConnectorRuntimeAllowed",
    "providerConnectorRuntimeAllowed",
    "clinicianConnectorRuntimeAllowed",
    "pharmacyConnectorRuntimeAllowed",
    "prescriptionRefillRuntimeAllowed",
    "appointmentSchedulingAllowed",
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
    "standardUserTelehealthModeMutationAllowed",
    "backendWriteAllowed",
    "storageWriteAllowed",
    "networkAllowed",
    "auditWriteAllowed",
    "executionAuthority"
  ]);

  function normalizeTelehealthModeFeatureFlagState(input = {}) {
    const requested = input && typeof input === "object" ? input : {};
    const normalized = {
      ...DEFAULT_TELEHEALTH_MODE_FEATURE_FLAG_STATE,
      enabled: requested.enabled === true,
      visibleUiAllowed: requested.enabled === true && requested.visibleUiAllowed === true,
      noExecution: true
    };

    for (const field of PROTECTED_TELEHEALTH_MODE_FLAG_FIELDS) {
      normalized[field] = false;
    }

    return Object.freeze(normalized);
  }

  function isTelehealthModeVisibleFeatureEnabled(state) {
    const normalized = normalizeTelehealthModeFeatureFlagState(state);
    return normalized.enabled === true && normalized.visibleUiAllowed === true && normalized.noExecution === true;
  }

  return Object.freeze({
    TELEHEALTH_MODE_FEATURE_FLAG_NAME,
    DEFAULT_TELEHEALTH_MODE_FEATURE_FLAG_STATE,
    PROTECTED_TELEHEALTH_MODE_FLAG_FIELDS,
    normalizeTelehealthModeFeatureFlagState,
    isTelehealthModeVisibleFeatureEnabled
  });
});
