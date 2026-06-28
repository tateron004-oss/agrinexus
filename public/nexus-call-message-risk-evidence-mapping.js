(function initNexusCallMessageRiskEvidenceMapping(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory(require("./nexus-call-message-intent-contract.js"));
    return;
  }

  root.NexusCallMessageRiskEvidenceMapping = factory(root.NexusCallMessageIntentContract);
})(typeof globalThis !== "undefined" ? globalThis : this, function buildNexusCallMessageRiskEvidenceMapping(callMessageContract) {
  "use strict";

  const RESTRICTED_TERMS = Object.freeze([
    "emergency",
    "dispatch",
    "payment",
    "pay",
    "purchase",
    "buy",
    "checkout",
    "medical",
    "diagnosis",
    "pharmacy",
    "prescription",
    "refill",
    "location",
    "camera"
  ]);

  const HIGH_RISK_CHANNELS = Object.freeze(["phone-call", "SMS", "WhatsApp", "Telegram", "email"]);

  function textIncludesAny(text, terms) {
    const normalized = String(text || "").toLowerCase();
    return terms.some(term => normalized.includes(term));
  }

  function deriveRiskTier(input) {
    const combined = [
      input.recipientDisplayName,
      input.recipientChannelType,
      input.messageDraft,
      input.callPurpose,
      input.safeUseNotes,
      input.limitations
    ].join(" ");

    if (textIncludesAny(combined, RESTRICTED_TERMS)) return "restricted";
    if (HIGH_RISK_CHANNELS.includes(input.recipientChannelType)) return "high";
    if (input.communicationType === "recipient-confirmation" || input.recipientChannelType === "user-provided-channel") return "high";
    return "medium";
  }

  function buildEvidenceRequirement(input, riskTier) {
    return [
      "resolved or explicitly ambiguous recipient state",
      "visible recipient display",
      "visible channel display",
      "visible message draft or call purpose",
      "source packet requirement",
      "channel confirmation",
      "explicit user approval",
      "final execution gate",
      "audit-ready state",
      `risk tier: ${riskTier}`
    ].join("; ");
  }

  function mapCallMessageRiskEvidence(input) {
    const riskTier = deriveRiskTier(input || {});
    const sourcePacketRequirement = input && input.sourcePacketRequirement
      ? input.sourcePacketRequirement
      : "contact-provider-identity-packet";
    const evidenceRequirement = buildEvidenceRequirement(input || {}, riskTier);
    const built = callMessageContract.createCallMessageIntent(Object.assign({}, input, {
      riskTier,
      evidenceRequirement,
      sourcePacketRequirement,
      permissionState: input && input.permissionState ? input.permissionState : "ready",
      auditState: input && input.auditState ? input.auditState : "ready",
      safeUseNotes: input && input.safeUseNotes ? input.safeUseNotes : "Risk/evidence mapping only; no communication occurs",
      limitations: input && input.limitations ? input.limitations : "No provider opens, no call starts, no message sends, and no pending action is created"
    }));

    return Object.freeze({
      intent: Object.freeze(built.intent),
      validation: Object.freeze(built.validation),
      mapping: Object.freeze({
        riskTier,
        evidenceRequirement,
        sourcePacketRequirement,
        channelConfirmationRequired: true,
        userApprovalRequired: true,
        finalExecutionGateRequired: true,
        executionAuthority: false,
        executionAllowed: false,
        mappingOnly: true
      })
    });
  }

  return Object.freeze({
    RESTRICTED_TERMS,
    HIGH_RISK_CHANNELS,
    deriveRiskTier,
    buildEvidenceRequirement,
    mapCallMessageRiskEvidence
  });
});
