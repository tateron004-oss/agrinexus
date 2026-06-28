(function initNexusCallMessagePreviewFlagGuard(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
    return;
  }

  root.NexusCallMessagePreviewFlagGuard = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function buildNexusCallMessagePreviewFlagGuard() {
  "use strict";

  const NEXUS_CALL_MESSAGE_PREVIEW_ENABLED = false;
  const TEST_SAFE_CONTEXT = "local-safe-fixture";

  function resolveCallMessagePreviewFlag(options) {
    const settings = options || {};
    const context = String(settings.context || "").trim();
    const explicitFlag = settings.NEXUS_CALL_MESSAGE_PREVIEW_ENABLED === true
      || settings.enableCallMessagePreview === true;

    return Object.freeze({
      enabled: explicitFlag && context === TEST_SAFE_CONTEXT,
      defaultEnabled: NEXUS_CALL_MESSAGE_PREVIEW_ENABLED,
      context,
      standardUserAllowed: false,
      executionAuthority: false,
      providerHandoffAllowed: false,
      externalNavigationAllowed: false,
      nativeBridgeAllowed: false,
      networkAllowed: false,
      storageWriteAllowed: false,
      backendWriteAllowed: false
    });
  }

  function isCallMessagePreviewAllowed(options) {
    const flag = resolveCallMessagePreviewFlag(options);
    const validation = options && options.validation ? options.validation : {};
    return Boolean(
      flag.enabled
      && validation.ok === true
      && validation.executionAllowed === false
      && (!options.intent || options.intent.executionAuthority === false)
    );
  }

  return Object.freeze({
    NEXUS_CALL_MESSAGE_PREVIEW_ENABLED,
    TEST_SAFE_CONTEXT,
    resolveCallMessagePreviewFlag,
    isCallMessagePreviewAllowed
  });
});
