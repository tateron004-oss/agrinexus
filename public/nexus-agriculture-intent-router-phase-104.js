(function nexusAgricultureIntentRouterPhase104Factory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory(require("./nexus-agriculture-support-response-card.js"), require("./nexus-agriculture-source-selection-phase-103.js"));
  } else {
    root.NexusAgricultureIntentRouterPhase104 = factory(root.NEXUS_PHASE_101_AGRICULTURE_SUPPORT_RESPONSE_CARD, root.NexusAgricultureSourceSelectionPhase103);
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusAgricultureIntentRouterPhase104Module(cardModule, sourceSelectionModule) {
  "use strict";

  const ROUTER_VERSION = "nexus.agricultureIntentRouter.phase104.v1";
  const HIGH_RISK_TERMS = /\b(call|message|text|sms|whatsapp|telegram|email|contact|pay|payment|buy|sell|checkout|order|location|near me|map|gps|camera|photo|upload|diagnose|doctor|clinic|hospital|telehealth|emergency|poisoning|dispatch|appointment|schedule|apply pesticide|spray pesticide|dose|dosage)\b/i;

  function routeAgricultureIntent(prompt) {
    const value = String(prompt || "").replace(/\s+/g, " ").trim();
    const classification = cardModule && typeof cardModule.classifyAgricultureSupportPrompt === "function"
      ? cardModule.classifyAgricultureSupportPrompt(value)
      : Object.freeze({ eligible: false, reason: "card_classifier_unavailable" });
    if (!value) {
      return Object.freeze({ routed: false, route: "empty", reason: "empty_prompt", canRenderPreview: false, canExecute: false, executionAuthority: "none" });
    }
    if (HIGH_RISK_TERMS.test(value) || !classification.eligible) {
      return Object.freeze({
        routed: true,
        route: "blocked_or_existing_safety_router",
        reason: classification.reason || "high_risk_or_non_agriculture_prompt",
        canRenderPreview: false,
        canExecute: false,
        executionAuthority: "none",
        providerContactEnabled: false,
        permissionRequestEnabled: false
      });
    }
    const sourceObservation = sourceSelectionModule && typeof sourceSelectionModule.buildSourceSelectionObservation === "function"
      ? sourceSelectionModule.buildSourceSelectionObservation(value)
      : null;
    return Object.freeze({
      routed: true,
      route: "agriculture_support_review_preview",
      reason: "safe_agriculture_support_prompt",
      canRenderPreview: true,
      canExecute: false,
      executionAuthority: "none",
      selectedSourceId: sourceObservation?.selection?.sourceId || null,
      sourceStatus: sourceObservation?.selection?.sourceStatus || "general guidance",
      responseMode: "preview_only",
      providerContactEnabled: false,
      marketplaceTransactionEnabled: false,
      paymentEnabled: false,
      locationSharingEnabled: false,
      cameraEnabled: false,
      medicalActionEnabled: false,
      emergencyDispatchEnabled: false
    });
  }

  function buildPreviewOnlyAutonomousObservation(prompt) {
    const route = routeAgricultureIntent(prompt);
    return Object.freeze({
      schemaVersion: ROUTER_VERSION,
      prompt: String(prompt || "").replace(/\s+/g, " ").trim(),
      route,
      plannerIntegrationAllowed: route.canRenderPreview === true,
      runtimeIntegrationStatus: "local-contract-only",
      canExecute: false,
      executionAuthority: "none"
    });
  }

  return Object.freeze({
    ROUTER_VERSION,
    routeAgricultureIntent,
    buildPreviewOnlyAutonomousObservation
  });
});
