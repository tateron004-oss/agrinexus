(function nexusMobileClinicModeFeatureFlagFactory(root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory(); else root.NexusMobileClinicModeFeatureFlagContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusMobileClinicModeFeatureFlagModule() {
  const MOBILE_CLINIC_MODE_FEATURE_FLAG_NAME = "NEXUS_MOBILE_CLINIC_MODE_VISIBLE_ENABLED";

  const DEFAULT_MOBILE_CLINIC_MODE_FEATURE_FLAG_STATE = Object.freeze({
    flagName: MOBILE_CLINIC_MODE_FEATURE_FLAG_NAME,
    enabled: false,
    visibleUiAllowed: false,
    mobileClinicModeReviewAllowed: false,
    mobileClinicSchedulePreviewAllowed: false,
    clinicAccessPreviewAllowed: false,
    providerDirectoryPreviewAllowed: false,
    transportationReadinessPreviewAllowed: false,
    locationConsentBoundaryPreviewAllowed: false,
    emergencyBoundaryPreviewAllowed: false,
    mobileClinicModeRuntimeAllowed: false,
    liveMobileClinicModeRuntimeAllowed: false,
    healthConnectorRuntimeAllowed: false,
    clinicConnectorRuntimeAllowed: false,
    telehealthConnectorRuntimeAllowed: false,
    mobileClinicConnectorRuntimeAllowed: false,
    mobileClinicScheduleConnectorRuntimeAllowed: false,
    providerConnectorRuntimeAllowed: false,
    clinicianConnectorRuntimeAllowed: false,
    transportationConnectorRuntimeAllowed: false,
    locationConnectorRuntimeAllowed: false,
    appointmentSchedulingAllowed: false,
    transportationDispatchAllowed: false,
    emergencyDispatchAllowed: false,
    medicalRecordsFhirRuntimeAllowed: false,
    medicalAdviceAllowed: false,
    diagnosisClaimAllowed: false,
    prescriptionInstructionAllowed: false,
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
    standardUserMobileClinicModeMutationAllowed: false,
    backendWriteAllowed: false,
    storageWriteAllowed: false,
    networkAllowed: false,
    auditWriteAllowed: false,
    executionAuthority: false,
    noExecution: true
  });

  const PROTECTED_MOBILE_CLINIC_MODE_FLAG_FIELDS = Object.freeze([
    "mobileClinicModeReviewAllowed",
    "mobileClinicSchedulePreviewAllowed",
    "clinicAccessPreviewAllowed",
    "providerDirectoryPreviewAllowed",
    "transportationReadinessPreviewAllowed",
    "locationConsentBoundaryPreviewAllowed",
    "emergencyBoundaryPreviewAllowed",
    "mobileClinicModeRuntimeAllowed",
    "liveMobileClinicModeRuntimeAllowed",
    "healthConnectorRuntimeAllowed",
    "clinicConnectorRuntimeAllowed",
    "telehealthConnectorRuntimeAllowed",
    "mobileClinicConnectorRuntimeAllowed",
    "mobileClinicScheduleConnectorRuntimeAllowed",
    "providerConnectorRuntimeAllowed",
    "clinicianConnectorRuntimeAllowed",
    "transportationConnectorRuntimeAllowed",
    "locationConnectorRuntimeAllowed",
    "appointmentSchedulingAllowed",
    "transportationDispatchAllowed",
    "emergencyDispatchAllowed",
    "medicalRecordsFhirRuntimeAllowed",
    "medicalAdviceAllowed",
    "diagnosisClaimAllowed",
    "prescriptionInstructionAllowed",
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
    "standardUserMobileClinicModeMutationAllowed",
    "backendWriteAllowed",
    "storageWriteAllowed",
    "networkAllowed",
    "auditWriteAllowed",
    "executionAuthority"
  ]);

  function normalizeMobileClinicModeFeatureFlagState(input = {}) {
    const requested = input && typeof input === "object" ? input : {};
    const normalized = {
      ...DEFAULT_MOBILE_CLINIC_MODE_FEATURE_FLAG_STATE,
      enabled: requested.enabled === true,
      visibleUiAllowed: requested.enabled === true && requested.visibleUiAllowed === true,
      noExecution: true
    };

    for (const field of PROTECTED_MOBILE_CLINIC_MODE_FLAG_FIELDS) {
      normalized[field] = false;
    }

    return Object.freeze(normalized);
  }

  function isMobileClinicModeVisibleFeatureEnabled(state) {
    const normalized = normalizeMobileClinicModeFeatureFlagState(state);
    return normalized.enabled === true && normalized.visibleUiAllowed === true && normalized.noExecution === true;
  }

  return Object.freeze({
    MOBILE_CLINIC_MODE_FEATURE_FLAG_NAME,
    DEFAULT_MOBILE_CLINIC_MODE_FEATURE_FLAG_STATE,
    PROTECTED_MOBILE_CLINIC_MODE_FLAG_FIELDS,
    normalizeMobileClinicModeFeatureFlagState,
    isMobileClinicModeVisibleFeatureEnabled
  });
});
