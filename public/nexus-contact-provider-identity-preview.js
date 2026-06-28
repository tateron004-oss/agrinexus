(function initNexusContactProviderIdentityPreview(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory(
      require("./nexus-contact-provider-identity-evidence-mapper.js"),
      require("./nexus-contact-provider-identity-flag-guard.js")
    );
    return;
  }

  root.NexusContactProviderIdentityPreview = factory(
    root.NexusContactProviderIdentityEvidenceMapper,
    root.NexusContactProviderIdentityFlagGuard
  );
})(typeof globalThis !== "undefined" ? globalThis : this, function buildNexusContactProviderIdentityPreview(evidenceMapper, flagGuard) {
  "use strict";

  function hiddenPreview(reason, flag) {
    return Object.freeze({
      visible: false,
      reason,
      flag,
      title: "",
      subtitle: "",
      executionAuthority: false,
      executionAllowed: false,
      providerDispatchAllowed: false,
      providerHandoffAllowed: false,
      communicationAllowed: false,
      externalNavigationAllowed: false,
      nativeBridgeAllowed: false,
      networkAllowed: false,
      storageWriteAllowed: false,
      backendWriteAllowed: false
    });
  }

  function createContactProviderIdentityPreviewModel(options = {}) {
    const flag = flagGuard.resolveContactProviderIdentityPreviewFlag(options);
    if (!flag.enabled) return hiddenPreview(flag.reason, flag);

    const mapped = evidenceMapper.mapIdentityConfidenceRiskEvidence(options.identity || {});
    const allowance = flagGuard.isContactProviderIdentityPreviewAllowed({ flag, validation: mapped.validation });
    if (!allowance.allowed) return hiddenPreview(allowance.reason, flag);

    const candidate = mapped.candidate;
    return Object.freeze({
      visible: true,
      reason: "fixture-preview-only",
      flag,
      title: "Review identity match",
      subtitle: "Identity preview only. No contact or provider is reached.",
      displayName: candidate.displayName,
      entityType: candidate.entityType,
      requestedActionType: candidate.requestedActionType,
      confidenceTier: candidate.confidenceTier,
      riskTier: candidate.riskTier,
      evidenceSummary: candidate.evidenceSummary,
      ambiguityState: candidate.ambiguityState,
      missingInformationState: candidate.missingInformationState,
      limitations: candidate.limitations,
      candidate,
      identityResolutionOnly: true,
      approvalIntentOnly: true,
      finalExecutionGateRequired: true,
      executionAuthority: false,
      executionAllowed: false,
      providerDispatchAllowed: false,
      providerHandoffAllowed: false,
      communicationAllowed: false,
      externalNavigationAllowed: false,
      nativeBridgeAllowed: false,
      networkAllowed: false,
      storageWriteAllowed: false,
      backendWriteAllowed: false,
      controls: Object.freeze([]),
      links: Object.freeze([]),
      forms: Object.freeze([]),
      eventHandlers: Object.freeze([])
    });
  }

  return Object.freeze({
    createContactProviderIdentityPreviewModel
  });
});
