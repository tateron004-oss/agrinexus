(function nexusProviderModeFeatureFlagFactory(root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory(); else root.NexusProviderModeFeatureFlagContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusProviderModeFeatureFlagModule() {
  const PROVIDER_MODE_FEATURE_FLAG_NAME = "NEXUS_PROVIDER_MODE_VISIBLE_ENABLED";

  const DEFAULT_PROVIDER_MODE_FEATURE_FLAG_STATE = Object.freeze({
    flagName: PROVIDER_MODE_FEATURE_FLAG_NAME,
    enabled: false,
    visibleUiAllowed: false,
    providerModeReviewAllowed: false,
    providerAccessPreviewAllowed: false,
    providerDirectoryPreviewAllowed: false,
    clinicDirectoryPreviewAllowed: false,
    telehealthPreviewAllowed: false,
    pharmacyPreviewAllowed: false,
    schedulingPreviewAllowed: false,
    medicalRecordBoundaryPreviewAllowed: false,
    prescriptionBoundaryPreviewAllowed: false,
    locationBoundaryPreviewAllowed: false,
    cameraBoundaryPreviewAllowed: false,
    microphoneBoundaryPreviewAllowed: false,
    identityBoundaryPreviewAllowed: false,
    communicationsBoundaryPreviewAllowed: false,
    transportationBoundaryPreviewAllowed: false,
    emergencyBoundaryPreviewAllowed: false,
    providerModeRuntimeAllowed: false,
    liveProviderModeRuntimeAllowed: false,
    providerConnectorRuntimeAllowed: false,
    clinicConnectorRuntimeAllowed: false,
    telehealthConnectorRuntimeAllowed: false,
    pharmacyConnectorRuntimeAllowed: false,
    schedulingConnectorRuntimeAllowed: false,
    medicalRecordConnectorRuntimeAllowed: false,
    fhirConnectorRuntimeAllowed: false,
    prescriptionConnectorRuntimeAllowed: false,
    locationConnectorRuntimeAllowed: false,
    cameraConnectorRuntimeAllowed: false,
    microphoneConnectorRuntimeAllowed: false,
    communicationsConnectorRuntimeAllowed: false,
    transportationConnectorRuntimeAllowed: false,
    healthConnectorRuntimeAllowed: false,
    marketplaceConnectorRuntimeAllowed: false,
    providerActionAllowed: false,
    providerContactAllowed: false,
    clinicContactAllowed: false,
    pharmacyContactAllowed: false,
    telehealthSessionCreationAllowed: false,
    appointmentSchedulingAllowed: false,
    prescriptionRefillAllowed: false,
    medicalRecordAccessAllowed: false,
    fhirAccessAllowed: false,
    clinicalDocumentationAllowed: false,
    locationSharingAllowed: false,
    cameraActivationAllowed: false,
    microphoneActivationAllowed: false,
    paymentExecutionAllowed: false,
    marketplaceTransactionAllowed: false,
    identityAccountProfileActionAllowed: false,
    communicationsExecutionAllowed: false,
    transportationDispatchAllowed: false,
    emergencyDispatchAllowed: false,
    medicalRecordsFhirRuntimeAllowed: false,
    medicalAdviceAllowed: false,
    diagnosisClaimAllowed: false,
    prescriptionInstructionAllowed: false,
    policyBypassAllowed: false,
    confirmationBypassAllowed: false,
    permissionBypassAllowed: false,
    firstTurnExecutionAllowed: false,
    laterTurnExecutionAllowed: false,
    standardUserProviderModeMutationAllowed: false,
    backendWriteAllowed: false,
    storageWriteAllowed: false,
    networkAllowed: false,
    auditWriteAllowed: false,
    executionAuthority: false,
    noExecution: true
  });

  const PROTECTED_PROVIDER_MODE_FLAG_FIELDS = Object.freeze([
    "providerModeReviewAllowed",
    "providerAccessPreviewAllowed",
    "providerDirectoryPreviewAllowed",
    "clinicDirectoryPreviewAllowed",
    "telehealthPreviewAllowed",
    "pharmacyPreviewAllowed",
    "schedulingPreviewAllowed",
    "medicalRecordBoundaryPreviewAllowed",
    "prescriptionBoundaryPreviewAllowed",
    "locationBoundaryPreviewAllowed",
    "cameraBoundaryPreviewAllowed",
    "microphoneBoundaryPreviewAllowed",
    "identityBoundaryPreviewAllowed",
    "communicationsBoundaryPreviewAllowed",
    "transportationBoundaryPreviewAllowed",
    "emergencyBoundaryPreviewAllowed",
    "providerModeRuntimeAllowed",
    "liveProviderModeRuntimeAllowed",
    "providerConnectorRuntimeAllowed",
    "clinicConnectorRuntimeAllowed",
    "telehealthConnectorRuntimeAllowed",
    "pharmacyConnectorRuntimeAllowed",
    "schedulingConnectorRuntimeAllowed",
    "medicalRecordConnectorRuntimeAllowed",
    "fhirConnectorRuntimeAllowed",
    "prescriptionConnectorRuntimeAllowed",
    "locationConnectorRuntimeAllowed",
    "cameraConnectorRuntimeAllowed",
    "microphoneConnectorRuntimeAllowed",
    "communicationsConnectorRuntimeAllowed",
    "transportationConnectorRuntimeAllowed",
    "healthConnectorRuntimeAllowed",
    "marketplaceConnectorRuntimeAllowed",
    "providerActionAllowed",
    "providerContactAllowed",
    "clinicContactAllowed",
    "pharmacyContactAllowed",
    "telehealthSessionCreationAllowed",
    "appointmentSchedulingAllowed",
    "prescriptionRefillAllowed",
    "medicalRecordAccessAllowed",
    "fhirAccessAllowed",
    "clinicalDocumentationAllowed",
    "locationSharingAllowed",
    "cameraActivationAllowed",
    "microphoneActivationAllowed",
    "paymentExecutionAllowed",
    "marketplaceTransactionAllowed",
    "identityAccountProfileActionAllowed",
    "communicationsExecutionAllowed",
    "transportationDispatchAllowed",
    "emergencyDispatchAllowed",
    "medicalRecordsFhirRuntimeAllowed",
    "medicalAdviceAllowed",
    "diagnosisClaimAllowed",
    "prescriptionInstructionAllowed",
    "policyBypassAllowed",
    "confirmationBypassAllowed",
    "permissionBypassAllowed",
    "firstTurnExecutionAllowed",
    "laterTurnExecutionAllowed",
    "standardUserProviderModeMutationAllowed",
    "backendWriteAllowed",
    "storageWriteAllowed",
    "networkAllowed",
    "auditWriteAllowed",
    "executionAuthority"
  ]);

  function normalizeProviderModeFeatureFlagState(input = {}) {
    const requested = input && typeof input === "object" ? input : {};
    const normalized = {
      ...DEFAULT_PROVIDER_MODE_FEATURE_FLAG_STATE,
      enabled: requested.enabled === true,
      visibleUiAllowed: requested.enabled === true && requested.visibleUiAllowed === true,
      noExecution: true
    };

    for (const field of PROTECTED_PROVIDER_MODE_FLAG_FIELDS) {
      normalized[field] = false;
    }

    return Object.freeze(normalized);
  }

  function isProviderModeVisibleFeatureEnabled(state) {
    const normalized = normalizeProviderModeFeatureFlagState(state);
    return normalized.enabled === true && normalized.visibleUiAllowed === true && normalized.noExecution === true;
  }

  return Object.freeze({
    PROVIDER_MODE_FEATURE_FLAG_NAME,
    DEFAULT_PROVIDER_MODE_FEATURE_FLAG_STATE,
    PROTECTED_PROVIDER_MODE_FLAG_FIELDS,
    normalizeProviderModeFeatureFlagState,
    isProviderModeVisibleFeatureEnabled
  });
});
