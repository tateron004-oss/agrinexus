(function initNexusContactProviderIdentityFlagGuard(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
    return;
  }

  root.NexusContactProviderIdentityFlagGuard = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function buildNexusContactProviderIdentityFlagGuard() {
  "use strict";

  const CONTACT_PROVIDER_IDENTITY_PREVIEW_FLAG = "enableContactProviderIdentityPreview";
  const TEST_SAFE_CONTEXTS = Object.freeze(["local-safe-fixture", "qa-fixture", "test-harness"]);

  function resolveContactProviderIdentityPreviewFlag(options = {}) {
    const rawValue = options[CONTACT_PROVIDER_IDENTITY_PREVIEW_FLAG];
    const runtimeSurface = String(options.runtimeSurface || "standard-user").trim();
    const context = String(options.context || runtimeSurface).trim();
    const explicitlyEnabled = rawValue === true;
    const testSafeContext = TEST_SAFE_CONTEXTS.includes(context);
    const enabled = explicitlyEnabled && testSafeContext && runtimeSurface !== "standard-user";

    return Object.freeze({
      flagName: CONTACT_PROVIDER_IDENTITY_PREVIEW_FLAG,
      enabled,
      explicitlyEnabled,
      testSafeContext,
      runtimeSurface,
      context,
      executionAuthority: false,
      executionAllowed: false,
      providerDispatchAllowed: false,
      providerHandoffAllowed: false,
      communicationAllowed: false,
      reason: enabled ? "test-safe-flag-enabled" : "flag-disabled-or-runtime-blocked"
    });
  }

  function isContactProviderIdentityPreviewAllowed(options = {}) {
    const flag = options.flag || resolveContactProviderIdentityPreviewFlag(options);
    const validation = options.validation || {};
    const allowed = flag.enabled === true && validation.ok === true && validation.executionAllowed === false;

    return Object.freeze({
      allowed,
      flag,
      validationOk: validation.ok === true,
      executionAuthority: false,
      executionAllowed: false,
      providerDispatchAllowed: false,
      providerHandoffAllowed: false,
      communicationAllowed: false,
      reason: allowed ? "identity-preview-fixture-allowed" : "identity-preview-disabled"
    });
  }

  return Object.freeze({
    CONTACT_PROVIDER_IDENTITY_PREVIEW_FLAG,
    TEST_SAFE_CONTEXTS,
    resolveContactProviderIdentityPreviewFlag,
    isContactProviderIdentityPreviewAllowed
  });
});
