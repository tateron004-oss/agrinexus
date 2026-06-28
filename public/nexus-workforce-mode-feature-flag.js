(function nexusWorkforceModeFeatureFlagFactory(root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory(); else root.NexusWorkforceModeFeatureFlagContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusWorkforceModeFeatureFlagModule() {
  const WORKFORCE_MODE_FEATURE_FLAG_NAME = "NEXUS_WORKFORCE_MODE_VISIBLE_ENABLED";

  const DEFAULT_WORKFORCE_MODE_FEATURE_FLAG_STATE = Object.freeze({
    flagName: WORKFORCE_MODE_FEATURE_FLAG_NAME,
    enabled: false,
    visibleUiAllowed: false,
    workforceModeReviewAllowed: false,
    workforcePathwayPreviewAllowed: false,
    trainingProgramPreviewAllowed: false,
    jobReadinessPreviewAllowed: false,
    employerDirectoryPreviewAllowed: false,
    trainingProviderDirectoryPreviewAllowed: false,
    certificationPreviewAllowed: false,
    referralReadinessPreviewAllowed: false,
    identityBoundaryPreviewAllowed: false,
    paymentBoundaryPreviewAllowed: false,
    transportationBoundaryPreviewAllowed: false,
    emergencyBoundaryPreviewAllowed: false,
    workforceModeRuntimeAllowed: false,
    liveWorkforceModeRuntimeAllowed: false,
    workforceConnectorRuntimeAllowed: false,
    workforceProgramConnectorRuntimeAllowed: false,
    trainingProviderConnectorRuntimeAllowed: false,
    certificationProviderConnectorRuntimeAllowed: false,
    employerConnectorRuntimeAllowed: false,
    referralConnectorRuntimeAllowed: false,
    applicationConnectorRuntimeAllowed: false,
    identityConnectorRuntimeAllowed: false,
    paymentConnectorRuntimeAllowed: false,
    communicationsConnectorRuntimeAllowed: false,
    transportationConnectorRuntimeAllowed: false,
    healthConnectorRuntimeAllowed: false,
    jobApplicationSubmissionAllowed: false,
    workforceReferralAllowed: false,
    credentialIssuanceAllowed: false,
    providerContactAllowed: false,
    employerContactAllowed: false,
    trainingProviderContactAllowed: false,
    certificationProviderContactAllowed: false,
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
    standardUserWorkforceModeMutationAllowed: false,
    backendWriteAllowed: false,
    storageWriteAllowed: false,
    networkAllowed: false,
    auditWriteAllowed: false,
    executionAuthority: false,
    noExecution: true
  });

  const PROTECTED_WORKFORCE_MODE_FLAG_FIELDS = Object.freeze([
    "workforceModeReviewAllowed",
    "workforcePathwayPreviewAllowed",
    "trainingProgramPreviewAllowed",
    "jobReadinessPreviewAllowed",
    "employerDirectoryPreviewAllowed",
    "trainingProviderDirectoryPreviewAllowed",
    "certificationPreviewAllowed",
    "referralReadinessPreviewAllowed",
    "identityBoundaryPreviewAllowed",
    "paymentBoundaryPreviewAllowed",
    "transportationBoundaryPreviewAllowed",
    "emergencyBoundaryPreviewAllowed",
    "workforceModeRuntimeAllowed",
    "liveWorkforceModeRuntimeAllowed",
    "workforceConnectorRuntimeAllowed",
    "workforceProgramConnectorRuntimeAllowed",
    "trainingProviderConnectorRuntimeAllowed",
    "certificationProviderConnectorRuntimeAllowed",
    "employerConnectorRuntimeAllowed",
    "referralConnectorRuntimeAllowed",
    "applicationConnectorRuntimeAllowed",
    "identityConnectorRuntimeAllowed",
    "paymentConnectorRuntimeAllowed",
    "communicationsConnectorRuntimeAllowed",
    "transportationConnectorRuntimeAllowed",
    "healthConnectorRuntimeAllowed",
    "jobApplicationSubmissionAllowed",
    "workforceReferralAllowed",
    "credentialIssuanceAllowed",
    "providerContactAllowed",
    "employerContactAllowed",
    "trainingProviderContactAllowed",
    "certificationProviderContactAllowed",
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
    "standardUserWorkforceModeMutationAllowed",
    "backendWriteAllowed",
    "storageWriteAllowed",
    "networkAllowed",
    "auditWriteAllowed",
    "executionAuthority"
  ]);

  function normalizeWorkforceModeFeatureFlagState(input = {}) {
    const requested = input && typeof input === "object" ? input : {};
    const normalized = {
      ...DEFAULT_WORKFORCE_MODE_FEATURE_FLAG_STATE,
      enabled: requested.enabled === true,
      visibleUiAllowed: requested.enabled === true && requested.visibleUiAllowed === true,
      noExecution: true
    };

    for (const field of PROTECTED_WORKFORCE_MODE_FLAG_FIELDS) {
      normalized[field] = false;
    }

    return Object.freeze(normalized);
  }

  function isWorkforceModeVisibleFeatureEnabled(state) {
    const normalized = normalizeWorkforceModeFeatureFlagState(state);
    return normalized.enabled === true && normalized.visibleUiAllowed === true && normalized.noExecution === true;
  }

  return Object.freeze({
    WORKFORCE_MODE_FEATURE_FLAG_NAME,
    DEFAULT_WORKFORCE_MODE_FEATURE_FLAG_STATE,
    PROTECTED_WORKFORCE_MODE_FLAG_FIELDS,
    normalizeWorkforceModeFeatureFlagState,
    isWorkforceModeVisibleFeatureEnabled
  });
});
