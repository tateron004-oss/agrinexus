(function initNexusMarketplaceRequestPreviewFlagGuard(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory(require("./nexus-marketplace-request-contract.js"));
    return;
  }

  root.NexusMarketplaceRequestPreviewFlagGuard = factory(root.NexusMarketplaceRequestContract);
})(typeof globalThis !== "undefined" ? globalThis : this, function buildNexusMarketplaceRequestPreviewFlagGuard(contract) {
  "use strict";

  const MARKETPLACE_REQUEST_PREVIEW_FLAG = "NEXUS_MARKETPLACE_REQUEST_PREVIEW_ENABLED";
  const DEFAULT_MARKETPLACE_REQUEST_PREVIEW_ENABLED = false;
  const LOCAL_SAFE_CONTEXT = "local-safe-fixture";

  function isFlagEnabled(options) {
    return Boolean(options && (
      options.enableMarketplaceRequestPreview === true
      || options[MARKETPLACE_REQUEST_PREVIEW_FLAG] === true
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
      return { ok: false, executionAllowed: false, failures: ["candidate missing"] };
    }
    if (candidate.request && candidate.validation) return candidate.validation;
    return contract.validateMarketplaceRequestIntent(candidate);
  }

  function isRestricted(candidate) {
    const request = candidate && candidate.request ? candidate.request : candidate;
    return request && request.riskTier === "restricted";
  }

  function resolveMarketplaceRequestPreviewFlag(options) {
    return Object.freeze({
      flagName: MARKETPLACE_REQUEST_PREVIEW_FLAG,
      defaultEnabled: DEFAULT_MARKETPLACE_REQUEST_PREVIEW_ENABLED,
      enabled: isFlagEnabled(options),
      standardUserEnabled: false,
      localSafeContext: isLocalSafeContext(options),
      executionAuthority: false
    });
  }

  function isMarketplaceRequestPreviewAllowed(candidate, options) {
    const flag = resolveMarketplaceRequestPreviewFlag(options);
    const validation = validateCandidate(candidate);
    const previewAllowed = Boolean(
      flag.enabled
      && flag.localSafeContext
      && validation.ok === true
      && validation.executionAllowed === false
      && !isRestricted(candidate)
    );

    return Object.freeze({
      previewAllowed,
      visibleRendererAllowed: previewAllowed,
      executionAllowed: false,
      executionAuthority: false,
      paymentAllowed: false,
      checkoutAllowed: false,
      orderPlacementAllowed: false,
      sellerDispatchAllowed: false,
      sellerHandoffAllowed: false,
      communicationAllowed: false,
      networkAllowed: false,
      storageWriteAllowed: false,
      backendWriteAllowed: false,
      flag
    });
  }

  return Object.freeze({
    MARKETPLACE_REQUEST_PREVIEW_FLAG,
    DEFAULT_MARKETPLACE_REQUEST_PREVIEW_ENABLED,
    LOCAL_SAFE_CONTEXT,
    resolveMarketplaceRequestPreviewFlag,
    isMarketplaceRequestPreviewAllowed
  });
});
