(function initNexusPaymentPreviewFlagGuard(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory(require("./nexus-payment-intent-contract.js"));
    return;
  }

  root.NexusPaymentPreviewFlagGuard = factory(root.NexusPaymentIntentContract);
})(typeof globalThis !== "undefined" ? globalThis : this, function buildNexusPaymentPreviewFlagGuard(contract) {
  "use strict";

  const PAYMENT_PREVIEW_FLAG = "NEXUS_PAYMENT_PREVIEW_ENABLED";
  const DEFAULT_PAYMENT_PREVIEW_ENABLED = false;
  const LOCAL_SAFE_CONTEXT = "local-safe-fixture";

  function isFlagEnabled(options) {
    return Boolean(options && (
      options.enablePaymentPreview === true
      || options[PAYMENT_PREVIEW_FLAG] === true
    ));
  }

  function isLocalSafeContext(options) {
    return Boolean(options && (
      options.context === LOCAL_SAFE_CONTEXT
      || options.surface === LOCAL_SAFE_CONTEXT
    ));
  }

  function validateCandidate(candidate) {
    if (!candidate || typeof candidate !== "object") {
      return { ok: false, dryRunAllowed: false, executionAllowed: false, failures: ["candidate missing"] };
    }
    if (candidate.intent && candidate.validation) return candidate.validation;
    return contract.validatePaymentIntent(candidate);
  }

  function resolvePaymentPreviewFlag(options) {
    return Object.freeze({
      flagName: PAYMENT_PREVIEW_FLAG,
      defaultEnabled: DEFAULT_PAYMENT_PREVIEW_ENABLED,
      enabled: isFlagEnabled(options),
      standardUserEnabled: false,
      localSafeContext: isLocalSafeContext(options),
      executionAuthority: false
    });
  }

  function isPaymentPreviewAllowed(candidate, options) {
    const flag = resolvePaymentPreviewFlag(options);
    const validation = validateCandidate(candidate);
    const previewAllowed = Boolean(
      flag.enabled
      && flag.localSafeContext
      && validation.ok === true
      && validation.executionAllowed === false
    );

    return Object.freeze({
      previewAllowed,
      dryRunAllowed: previewAllowed,
      visibleRendererAllowed: previewAllowed,
      executionAllowed: false,
      executionAuthority: false,
      paymentAllowed: false,
      walletTransferAllowed: false,
      checkoutAllowed: false,
      credentialStorageAllowed: false,
      providerPaymentIntentAllowed: false,
      providerHandoffAllowed: false,
      communicationAllowed: false,
      networkAllowed: false,
      storageWriteAllowed: false,
      backendWriteAllowed: false,
      flag
    });
  }

  return Object.freeze({
    PAYMENT_PREVIEW_FLAG,
    DEFAULT_PAYMENT_PREVIEW_ENABLED,
    LOCAL_SAFE_CONTEXT,
    resolvePaymentPreviewFlag,
    isPaymentPreviewAllowed
  });
});
