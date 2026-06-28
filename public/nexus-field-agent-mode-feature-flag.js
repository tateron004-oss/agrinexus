(function nexusFieldAgentModeFeatureFlagFactory(root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory(); else root.NexusFieldAgentModeFeatureFlagContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusFieldAgentModeFeatureFlagModule() {
  const FIELD_AGENT_MODE_FEATURE_FLAG_NAME = "NEXUS_FIELD_AGENT_MODE_VISIBLE_ENABLED";

  const DEFAULT_FIELD_AGENT_MODE_FEATURE_FLAG_STATE = Object.freeze({
    flagName: FIELD_AGENT_MODE_FEATURE_FLAG_NAME,
    enabled: false,
    visibleUiAllowed: false,
    fieldAgentModeReviewAllowed: false,
    fieldSupportPreviewAllowed: false,
    fieldSourcePreviewAllowed: false,
    offlineCapturePreviewAllowed: false,
    surveyPreviewAllowed: false,
    caseIntakePreviewAllowed: false,
    taskAssignmentPreviewAllowed: false,
    supervisorDirectoryPreviewAllowed: false,
    programDirectoryPreviewAllowed: false,
    locationBoundaryPreviewAllowed: false,
    cameraBoundaryPreviewAllowed: false,
    microphoneBoundaryPreviewAllowed: false,
    identityBoundaryPreviewAllowed: false,
    communicationsBoundaryPreviewAllowed: false,
    transportationBoundaryPreviewAllowed: false,
    emergencyBoundaryPreviewAllowed: false,
    fieldAgentModeRuntimeAllowed: false,
    liveFieldAgentModeRuntimeAllowed: false,
    fieldConnectorRuntimeAllowed: false,
    fieldSourceConnectorRuntimeAllowed: false,
    offlineCaptureConnectorRuntimeAllowed: false,
    surveyConnectorRuntimeAllowed: false,
    caseIntakeConnectorRuntimeAllowed: false,
    taskAssignmentConnectorRuntimeAllowed: false,
    locationConnectorRuntimeAllowed: false,
    cameraConnectorRuntimeAllowed: false,
    microphoneConnectorRuntimeAllowed: false,
    providerConnectorRuntimeAllowed: false,
    communicationsConnectorRuntimeAllowed: false,
    transportationConnectorRuntimeAllowed: false,
    healthConnectorRuntimeAllowed: false,
    marketplaceConnectorRuntimeAllowed: false,
    fieldDispatchAllowed: false,
    offlineCaptureSubmissionAllowed: false,
    caseCreationAllowed: false,
    taskAssignmentAllowed: false,
    providerContactAllowed: false,
    supervisorContactAllowed: false,
    programPartnerContactAllowed: false,
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
    standardUserFieldAgentModeMutationAllowed: false,
    backendWriteAllowed: false,
    storageWriteAllowed: false,
    networkAllowed: false,
    auditWriteAllowed: false,
    executionAuthority: false,
    noExecution: true
  });

  const PROTECTED_FIELD_AGENT_MODE_FLAG_FIELDS = Object.freeze([
    "fieldAgentModeReviewAllowed",
    "fieldSupportPreviewAllowed",
    "fieldSourcePreviewAllowed",
    "offlineCapturePreviewAllowed",
    "surveyPreviewAllowed",
    "caseIntakePreviewAllowed",
    "taskAssignmentPreviewAllowed",
    "supervisorDirectoryPreviewAllowed",
    "programDirectoryPreviewAllowed",
    "locationBoundaryPreviewAllowed",
    "cameraBoundaryPreviewAllowed",
    "microphoneBoundaryPreviewAllowed",
    "identityBoundaryPreviewAllowed",
    "communicationsBoundaryPreviewAllowed",
    "transportationBoundaryPreviewAllowed",
    "emergencyBoundaryPreviewAllowed",
    "fieldAgentModeRuntimeAllowed",
    "liveFieldAgentModeRuntimeAllowed",
    "fieldConnectorRuntimeAllowed",
    "fieldSourceConnectorRuntimeAllowed",
    "offlineCaptureConnectorRuntimeAllowed",
    "surveyConnectorRuntimeAllowed",
    "caseIntakeConnectorRuntimeAllowed",
    "taskAssignmentConnectorRuntimeAllowed",
    "locationConnectorRuntimeAllowed",
    "cameraConnectorRuntimeAllowed",
    "microphoneConnectorRuntimeAllowed",
    "providerConnectorRuntimeAllowed",
    "communicationsConnectorRuntimeAllowed",
    "transportationConnectorRuntimeAllowed",
    "healthConnectorRuntimeAllowed",
    "marketplaceConnectorRuntimeAllowed",
    "fieldDispatchAllowed",
    "offlineCaptureSubmissionAllowed",
    "caseCreationAllowed",
    "taskAssignmentAllowed",
    "providerContactAllowed",
    "supervisorContactAllowed",
    "programPartnerContactAllowed",
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
    "standardUserFieldAgentModeMutationAllowed",
    "backendWriteAllowed",
    "storageWriteAllowed",
    "networkAllowed",
    "auditWriteAllowed",
    "executionAuthority"
  ]);

  function normalizeFieldAgentModeFeatureFlagState(input = {}) {
    const requested = input && typeof input === "object" ? input : {};
    const normalized = {
      ...DEFAULT_FIELD_AGENT_MODE_FEATURE_FLAG_STATE,
      enabled: requested.enabled === true,
      visibleUiAllowed: requested.enabled === true && requested.visibleUiAllowed === true,
      noExecution: true
    };

    for (const field of PROTECTED_FIELD_AGENT_MODE_FLAG_FIELDS) {
      normalized[field] = false;
    }

    return Object.freeze(normalized);
  }

  function isFieldAgentModeVisibleFeatureEnabled(state) {
    const normalized = normalizeFieldAgentModeFeatureFlagState(state);
    return normalized.enabled === true && normalized.visibleUiAllowed === true && normalized.noExecution === true;
  }

  return Object.freeze({
    FIELD_AGENT_MODE_FEATURE_FLAG_NAME,
    DEFAULT_FIELD_AGENT_MODE_FEATURE_FLAG_STATE,
    PROTECTED_FIELD_AGENT_MODE_FLAG_FIELDS,
    normalizeFieldAgentModeFeatureFlagState,
    isFieldAgentModeVisibleFeatureEnabled
  });
});
