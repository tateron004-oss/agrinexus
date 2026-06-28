(function initNexusConfirmationPreviewFlag(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
    return;
  }

  root.NexusConfirmationPreviewFlag = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function buildNexusConfirmationPreviewFlag() {
  "use strict";

  const FLAG_NAME = "NEXUS_USER_CONFIRMATION_PREVIEW_ENABLED";
  const DEFAULT_CONFIRMATION_PREVIEW_ENABLED = false;

  function isConfirmationPreviewEnabled(config) {
    if (!config || typeof config !== "object" || Array.isArray(config)) {
      return DEFAULT_CONFIRMATION_PREVIEW_ENABLED;
    }

    return config[FLAG_NAME] === true;
  }

  function describeConfirmationPreviewFlag(config) {
    const enabled = isConfirmationPreviewEnabled(config);
    return Object.freeze({
      flagName: FLAG_NAME,
      enabled,
      defaultEnabled: DEFAULT_CONFIRMATION_PREVIEW_ENABLED,
      runtimeVisible: enabled,
      grantsExecutionAuthority: false,
      providerHandoffAllowed: false,
      pendingActionAllowed: false,
      backendWriteAllowed: false
    });
  }

  return Object.freeze({
    FLAG_NAME,
    DEFAULT_CONFIRMATION_PREVIEW_ENABLED,
    isConfirmationPreviewEnabled,
    describeConfirmationPreviewFlag
  });
});
