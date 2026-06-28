(function nexusEducationModeFeatureFlagFactory(root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory(); else root.NexusEducationModeFeatureFlagContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusEducationModeFeatureFlagModule() {
  const EDUCATION_MODE_FEATURE_FLAG_NAME = "NEXUS_EDUCATION_MODE_VISIBLE_ENABLED";

  const DEFAULT_EDUCATION_MODE_FEATURE_FLAG_STATE = Object.freeze({
    flagName: EDUCATION_MODE_FEATURE_FLAG_NAME,
    enabled: false,
    visibleUiAllowed: false,
    educationModeReviewAllowed: false,
    learningPathwayPreviewAllowed: false,
    coursePreviewAllowed: false,
    trainingProgramPreviewAllowed: false,
    certificationPreviewAllowed: false,
    contentProviderDirectoryPreviewAllowed: false,
    trainingProviderDirectoryPreviewAllowed: false,
    enrollmentReadinessPreviewAllowed: false,
    identityBoundaryPreviewAllowed: false,
    paymentBoundaryPreviewAllowed: false,
    transportationBoundaryPreviewAllowed: false,
    emergencyBoundaryPreviewAllowed: false,
    educationModeRuntimeAllowed: false,
    liveEducationModeRuntimeAllowed: false,
    educationConnectorRuntimeAllowed: false,
    educationContentProviderConnectorRuntimeAllowed: false,
    trainingProviderConnectorRuntimeAllowed: false,
    certificationProviderConnectorRuntimeAllowed: false,
    enrollmentConnectorRuntimeAllowed: false,
    identityConnectorRuntimeAllowed: false,
    paymentConnectorRuntimeAllowed: false,
    communicationsConnectorRuntimeAllowed: false,
    transportationConnectorRuntimeAllowed: false,
    healthConnectorRuntimeAllowed: false,
    courseEnrollmentAllowed: false,
    courseRegistrationAllowed: false,
    credentialIssuanceAllowed: false,
    certificateIssuanceAllowed: false,
    providerContactAllowed: false,
    trainingProviderContactAllowed: false,
    certificationProviderContactAllowed: false,
    contentProviderContactAllowed: false,
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
    standardUserEducationModeMutationAllowed: false,
    backendWriteAllowed: false,
    storageWriteAllowed: false,
    networkAllowed: false,
    auditWriteAllowed: false,
    executionAuthority: false,
    noExecution: true
  });

  const PROTECTED_EDUCATION_MODE_FLAG_FIELDS = Object.freeze([
    "educationModeReviewAllowed",
    "learningPathwayPreviewAllowed",
    "coursePreviewAllowed",
    "trainingProgramPreviewAllowed",
    "certificationPreviewAllowed",
    "contentProviderDirectoryPreviewAllowed",
    "trainingProviderDirectoryPreviewAllowed",
    "enrollmentReadinessPreviewAllowed",
    "identityBoundaryPreviewAllowed",
    "paymentBoundaryPreviewAllowed",
    "transportationBoundaryPreviewAllowed",
    "emergencyBoundaryPreviewAllowed",
    "educationModeRuntimeAllowed",
    "liveEducationModeRuntimeAllowed",
    "educationConnectorRuntimeAllowed",
    "educationContentProviderConnectorRuntimeAllowed",
    "trainingProviderConnectorRuntimeAllowed",
    "certificationProviderConnectorRuntimeAllowed",
    "enrollmentConnectorRuntimeAllowed",
    "identityConnectorRuntimeAllowed",
    "paymentConnectorRuntimeAllowed",
    "communicationsConnectorRuntimeAllowed",
    "transportationConnectorRuntimeAllowed",
    "healthConnectorRuntimeAllowed",
    "courseEnrollmentAllowed",
    "courseRegistrationAllowed",
    "credentialIssuanceAllowed",
    "certificateIssuanceAllowed",
    "providerContactAllowed",
    "trainingProviderContactAllowed",
    "certificationProviderContactAllowed",
    "contentProviderContactAllowed",
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
    "standardUserEducationModeMutationAllowed",
    "backendWriteAllowed",
    "storageWriteAllowed",
    "networkAllowed",
    "auditWriteAllowed",
    "executionAuthority"
  ]);

  function normalizeEducationModeFeatureFlagState(input = {}) {
    const requested = input && typeof input === "object" ? input : {};
    const normalized = {
      ...DEFAULT_EDUCATION_MODE_FEATURE_FLAG_STATE,
      enabled: requested.enabled === true,
      visibleUiAllowed: requested.enabled === true && requested.visibleUiAllowed === true,
      noExecution: true
    };

    for (const field of PROTECTED_EDUCATION_MODE_FLAG_FIELDS) {
      normalized[field] = false;
    }

    return Object.freeze(normalized);
  }

  function isEducationModeVisibleFeatureEnabled(state) {
    const normalized = normalizeEducationModeFeatureFlagState(state);
    return normalized.enabled === true && normalized.visibleUiAllowed === true && normalized.noExecution === true;
  }

  return Object.freeze({
    EDUCATION_MODE_FEATURE_FLAG_NAME,
    DEFAULT_EDUCATION_MODE_FEATURE_FLAG_STATE,
    PROTECTED_EDUCATION_MODE_FLAG_FIELDS,
    normalizeEducationModeFeatureFlagState,
    isEducationModeVisibleFeatureEnabled
  });
});
