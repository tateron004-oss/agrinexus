(function initNexusCallMessagePreview(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory(
      require("./nexus-call-message-risk-evidence-mapping.js"),
      require("./nexus-call-message-preview-flag-guard.js")
    );
    return;
  }

  root.NexusCallMessagePreview = factory(
    root.NexusCallMessageRiskEvidenceMapping,
    root.NexusCallMessagePreviewFlagGuard
  );
})(typeof globalThis !== "undefined" ? globalThis : this, function buildNexusCallMessagePreview(mapping, flagGuard) {
  "use strict";

  function hiddenPreview(reason) {
    return Object.freeze({
      visible: false,
      reviewOnly: true,
      reason,
      controls: Object.freeze([]),
      links: Object.freeze([]),
      eventHandlers: Object.freeze([]),
      executionAllowed: false,
      providerHandoffAllowed: false,
      externalNavigationAllowed: false,
      nativeBridgeAllowed: false,
      networkAllowed: false,
      storageWriteAllowed: false,
      backendWriteAllowed: false
    });
  }

  function buildCallMessagePreview(input, options) {
    const settings = options || {};
    const mapped = mapping.mapCallMessageRiskEvidence(input || {});
    const allowed = flagGuard.isCallMessagePreviewAllowed(Object.assign({}, settings, {
      validation: mapped.validation,
      intent: mapped.intent
    }));

    if (!allowed) {
      return Object.freeze({
        mapped,
        preview: hiddenPreview("call/message preview disabled or not safe")
      });
    }

    const preview = Object.freeze({
      visible: true,
      reviewOnly: true,
      title: mapped.intent.communicationType === "call" ? "Review call request" : "Review message request",
      recipientDisplayName: mapped.intent.recipientDisplayName,
      recipientChannelType: mapped.intent.recipientChannelType,
      messageDraft: mapped.intent.messageDraft,
      callPurpose: mapped.intent.callPurpose,
      riskTier: mapped.mapping.riskTier,
      evidenceSummary: mapped.mapping.evidenceRequirement,
      requiredUserAction: "Review recipient, channel, purpose, approval, and final execution gate before any future action.",
      safeUseNotes: mapped.intent.safeUseNotes,
      limitations: mapped.intent.limitations,
      controls: Object.freeze([]),
      links: Object.freeze([]),
      eventHandlers: Object.freeze([]),
      executionAllowed: false,
      providerHandoffAllowed: false,
      externalNavigationAllowed: false,
      nativeBridgeAllowed: false,
      networkAllowed: false,
      storageWriteAllowed: false,
      backendWriteAllowed: false
    });

    return Object.freeze({ mapped, preview });
  }

  return Object.freeze({
    hiddenPreview,
    buildCallMessagePreview
  });
});
