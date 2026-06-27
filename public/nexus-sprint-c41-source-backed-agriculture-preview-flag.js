(function nexusSprintC41SourceBackedAgriculturePreviewFlag(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusSprintC41SourceBackedAgriculturePreviewFlag = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusSprintC41SourceBackedAgriculturePreviewFlagModule() {
  "use strict";

  const CONTRACT_VERSION = "nexus.sprintC41.sourceBackedAgriculturePreviewFlag.v1";
  const FLAG_NAME = "NEXUS_SOURCE_BACKED_AGRICULTURE_PREVIEW_ENABLED";

  function isPlainObject(value) {
    return Boolean(value) && typeof value === "object" && !Array.isArray(value);
  }

  function resolveSourceBackedAgriculturePreviewFlag(input) {
    const source = isPlainObject(input) ? input : {};
    const enabled = source[FLAG_NAME] === true;
    return Object.freeze({
      contractVersion: CONTRACT_VERSION,
      flagName: FLAG_NAME,
      enabled,
      disabled: !enabled,
      activationSource: enabled ? "explicit_boolean_config" : "default_false",
      visiblePreviewAllowed: enabled,
      reviewOnly: true,
      executionAllowed: false,
      providerHandoffAllowed: false,
      callsAllowed: false,
      messagesAllowed: false,
      paymentsAllowed: false,
      marketplaceTransactionAllowed: false,
      locationAllowed: false,
      cameraAllowed: false,
      medicalWorkflowAllowed: false,
      pharmacyWorkflowAllowed: false,
      emergencyWorkflowAllowed: false,
      backendWriteAllowed: false,
      pendingActionAllowed: false,
      liveLookupAllowed: false,
      networkAllowed: false,
      storageWriteAllowed: false,
      externalNavigationAllowed: false,
      noActionDisclosure: "No action has been taken."
    });
  }

  return Object.freeze({
    CONTRACT_VERSION,
    FLAG_NAME,
    resolveSourceBackedAgriculturePreviewFlag
  });
});
