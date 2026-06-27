(function nexusTransportationModeFeatureFlagFactory(root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory(); else root.NexusTransportationModeFeatureFlagContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusTransportationModeFeatureFlagModule() {
  const TRANSPORTATION_MODE_FEATURE_FLAG_NAME = "NEXUS_TRANSPORTATION_MODE_VISIBLE_ENABLED";

  const DEFAULT_TRANSPORTATION_MODE_FEATURE_FLAG_STATE = Object.freeze({
    flagName: TRANSPORTATION_MODE_FEATURE_FLAG_NAME,
    enabled: false,
    visibleUiAllowed: false,
    transportationModeReviewAllowed: false,
    transportationAccessPreviewAllowed: false,
    routeReadinessPreviewAllowed: false,
    providerDirectoryPreviewAllowed: false,
    driverDirectoryPreviewAllowed: false,
    locationConsentBoundaryPreviewAllowed: false,
    paymentBoundaryPreviewAllowed: false,
    emergencyBoundaryPreviewAllowed: false,
    transportationModeRuntimeAllowed: false,
    liveTransportationModeRuntimeAllowed: false,
    transportationConnectorRuntimeAllowed: false,
    transportationProviderConnectorRuntimeAllowed: false,
    driverConnectorRuntimeAllowed: false,
    dispatchConnectorRuntimeAllowed: false,
    routeConnectorRuntimeAllowed: false,
    locationConnectorRuntimeAllowed: false,
    clinicConnectorRuntimeAllowed: false,
    telehealthConnectorRuntimeAllowed: false,
    paymentConnectorRuntimeAllowed: false,
    appointmentSchedulingAllowed: false,
    transportationBookingAllowed: false,
    transportationDispatchAllowed: false,
    emergencyDispatchAllowed: false,
    medicalRecordsFhirRuntimeAllowed: false,
    medicalAdviceAllowed: false,
    diagnosisClaimAllowed: false,
    prescriptionInstructionAllowed: false,
    providerContactAllowed: false,
    driverContactAllowed: false,
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
    standardUserTransportationModeMutationAllowed: false,
    backendWriteAllowed: false,
    storageWriteAllowed: false,
    networkAllowed: false,
    auditWriteAllowed: false,
    executionAuthority: false,
    noExecution: true
  });

  const PROTECTED_TRANSPORTATION_MODE_FLAG_FIELDS = Object.freeze([
    "transportationModeReviewAllowed",
    "transportationAccessPreviewAllowed",
    "routeReadinessPreviewAllowed",
    "providerDirectoryPreviewAllowed",
    "driverDirectoryPreviewAllowed",
    "locationConsentBoundaryPreviewAllowed",
    "paymentBoundaryPreviewAllowed",
    "emergencyBoundaryPreviewAllowed",
    "transportationModeRuntimeAllowed",
    "liveTransportationModeRuntimeAllowed",
    "transportationConnectorRuntimeAllowed",
    "transportationProviderConnectorRuntimeAllowed",
    "driverConnectorRuntimeAllowed",
    "dispatchConnectorRuntimeAllowed",
    "routeConnectorRuntimeAllowed",
    "locationConnectorRuntimeAllowed",
    "clinicConnectorRuntimeAllowed",
    "telehealthConnectorRuntimeAllowed",
    "paymentConnectorRuntimeAllowed",
    "appointmentSchedulingAllowed",
    "transportationBookingAllowed",
    "transportationDispatchAllowed",
    "emergencyDispatchAllowed",
    "medicalRecordsFhirRuntimeAllowed",
    "medicalAdviceAllowed",
    "diagnosisClaimAllowed",
    "prescriptionInstructionAllowed",
    "providerContactAllowed",
    "driverContactAllowed",
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
    "standardUserTransportationModeMutationAllowed",
    "backendWriteAllowed",
    "storageWriteAllowed",
    "networkAllowed",
    "auditWriteAllowed",
    "executionAuthority"
  ]);

  function normalizeTransportationModeFeatureFlagState(input = {}) {
    const requested = input && typeof input === "object" ? input : {};
    const normalized = {
      ...DEFAULT_TRANSPORTATION_MODE_FEATURE_FLAG_STATE,
      enabled: requested.enabled === true,
      visibleUiAllowed: requested.enabled === true && requested.visibleUiAllowed === true,
      noExecution: true
    };

    for (const field of PROTECTED_TRANSPORTATION_MODE_FLAG_FIELDS) {
      normalized[field] = false;
    }

    return Object.freeze(normalized);
  }

  function isTransportationModeVisibleFeatureEnabled(state) {
    const normalized = normalizeTransportationModeFeatureFlagState(state);
    return normalized.enabled === true && normalized.visibleUiAllowed === true && normalized.noExecution === true;
  }

  return Object.freeze({
    TRANSPORTATION_MODE_FEATURE_FLAG_NAME,
    DEFAULT_TRANSPORTATION_MODE_FEATURE_FLAG_STATE,
    PROTECTED_TRANSPORTATION_MODE_FLAG_FIELDS,
    normalizeTransportationModeFeatureFlagState,
    isTransportationModeVisibleFeatureEnabled
  });
});
