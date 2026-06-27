(function nexusPharmacyModeFeatureFlagFactory(root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory(); else root.NexusPharmacyModeFeatureFlagContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusPharmacyModeFeatureFlagModule() {
  const PHARMACY_MODE_FEATURE_FLAG_NAME = "NEXUS_PHARMACY_MODE_VISIBLE_ENABLED";

  const DEFAULT_PHARMACY_MODE_FEATURE_FLAG_STATE = Object.freeze({
    flagName: PHARMACY_MODE_FEATURE_FLAG_NAME,
    enabled: false,
    visibleUiAllowed: false,
    pharmacyModeReviewAllowed: false,
    pharmacySupportPreviewAllowed: false,
    prescriptionReadinessPreviewAllowed: false,
    refillReadinessPreviewAllowed: false,
    pharmacyProviderDirectoryPreviewAllowed: false,
    medicationSafetyBoundaryPreviewAllowed: false,
    paymentInsuranceBoundaryPreviewAllowed: false,
    pharmacyModeRuntimeAllowed: false,
    livePharmacyModeRuntimeAllowed: false,
    healthConnectorRuntimeAllowed: false,
    clinicConnectorRuntimeAllowed: false,
    telehealthConnectorRuntimeAllowed: false,
    pharmacyConnectorRuntimeAllowed: false,
    pharmacyProviderConnectorRuntimeAllowed: false,
    prescriptionConnectorRuntimeAllowed: false,
    refillConnectorRuntimeAllowed: false,
    medicationSafetyConnectorRuntimeAllowed: false,
    paymentInsuranceConnectorRuntimeAllowed: false,
    prescriptionRefillRuntimeAllowed: false,
    appointmentSchedulingAllowed: false,
    transportationDispatchAllowed: false,
    emergencyDispatchAllowed: false,
    medicalRecordsFhirRuntimeAllowed: false,
    medicalAdviceAllowed: false,
    diagnosisClaimAllowed: false,
    prescriptionInstructionAllowed: false,
    dosageInstructionAllowed: false,
    refillExecutionAllowed: false,
    providerContactAllowed: false,
    pharmacistContactAllowed: false,
    locationSharingAllowed: false,
    cameraActivationAllowed: false,
    microphoneActivationAllowed: false,
    paymentExecutionAllowed: false,
    insuranceProcessingAllowed: false,
    marketplaceTransactionAllowed: false,
    identityAccountProfileActionAllowed: false,
    communicationsExecutionAllowed: false,
    policyBypassAllowed: false,
    confirmationBypassAllowed: false,
    permissionBypassAllowed: false,
    firstTurnExecutionAllowed: false,
    laterTurnExecutionAllowed: false,
    standardUserPharmacyModeMutationAllowed: false,
    backendWriteAllowed: false,
    storageWriteAllowed: false,
    networkAllowed: false,
    auditWriteAllowed: false,
    executionAuthority: false,
    noExecution: true
  });

  const PROTECTED_PHARMACY_MODE_FLAG_FIELDS = Object.freeze([
    "pharmacyModeReviewAllowed",
    "pharmacySupportPreviewAllowed",
    "prescriptionReadinessPreviewAllowed",
    "refillReadinessPreviewAllowed",
    "pharmacyProviderDirectoryPreviewAllowed",
    "medicationSafetyBoundaryPreviewAllowed",
    "paymentInsuranceBoundaryPreviewAllowed",
    "pharmacyModeRuntimeAllowed",
    "livePharmacyModeRuntimeAllowed",
    "healthConnectorRuntimeAllowed",
    "clinicConnectorRuntimeAllowed",
    "telehealthConnectorRuntimeAllowed",
    "pharmacyConnectorRuntimeAllowed",
    "pharmacyProviderConnectorRuntimeAllowed",
    "prescriptionConnectorRuntimeAllowed",
    "refillConnectorRuntimeAllowed",
    "medicationSafetyConnectorRuntimeAllowed",
    "paymentInsuranceConnectorRuntimeAllowed",
    "prescriptionRefillRuntimeAllowed",
    "appointmentSchedulingAllowed",
    "transportationDispatchAllowed",
    "emergencyDispatchAllowed",
    "medicalRecordsFhirRuntimeAllowed",
    "medicalAdviceAllowed",
    "diagnosisClaimAllowed",
    "prescriptionInstructionAllowed",
    "dosageInstructionAllowed",
    "refillExecutionAllowed",
    "providerContactAllowed",
    "pharmacistContactAllowed",
    "locationSharingAllowed",
    "cameraActivationAllowed",
    "microphoneActivationAllowed",
    "paymentExecutionAllowed",
    "insuranceProcessingAllowed",
    "marketplaceTransactionAllowed",
    "identityAccountProfileActionAllowed",
    "communicationsExecutionAllowed",
    "policyBypassAllowed",
    "confirmationBypassAllowed",
    "permissionBypassAllowed",
    "firstTurnExecutionAllowed",
    "laterTurnExecutionAllowed",
    "standardUserPharmacyModeMutationAllowed",
    "backendWriteAllowed",
    "storageWriteAllowed",
    "networkAllowed",
    "auditWriteAllowed",
    "executionAuthority"
  ]);

  function normalizePharmacyModeFeatureFlagState(input = {}) {
    const requested = input && typeof input === "object" ? input : {};
    const normalized = {
      ...DEFAULT_PHARMACY_MODE_FEATURE_FLAG_STATE,
      enabled: requested.enabled === true,
      visibleUiAllowed: requested.enabled === true && requested.visibleUiAllowed === true,
      noExecution: true
    };

    for (const field of PROTECTED_PHARMACY_MODE_FLAG_FIELDS) {
      normalized[field] = false;
    }

    return Object.freeze(normalized);
  }

  function isPharmacyModeVisibleFeatureEnabled(state) {
    const normalized = normalizePharmacyModeFeatureFlagState(state);
    return normalized.enabled === true && normalized.visibleUiAllowed === true && normalized.noExecution === true;
  }

  return Object.freeze({
    PHARMACY_MODE_FEATURE_FLAG_NAME,
    DEFAULT_PHARMACY_MODE_FEATURE_FLAG_STATE,
    PROTECTED_PHARMACY_MODE_FLAG_FIELDS,
    normalizePharmacyModeFeatureFlagState,
    isPharmacyModeVisibleFeatureEnabled
  });
});
