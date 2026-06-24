(function nexusLowRiskInertRendererFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory(require("./nexus-low-risk-inert-renderer-eligibility.js"));
  } else {
    root.NexusLowRiskInertRenderer = factory(root.NexusLowRiskInertRendererEligibility);
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusLowRiskInertRendererModule(eligibilityGuard = {}) {
  const SOURCE = "nexus-low-risk-inert-renderer.v1";
  const SAFETY_COPY = "Preview only - no action has been taken.";

  function value(text, fallback = "") {
    const normalized = String(text || "").trim();
    return normalized || fallback;
  }

  function inactive(reason = "not_eligible", eligibility = {}) {
    return Object.freeze({
      active: false,
      prototypeDisplayEligible: false,
      reason,
      eligibility,
      card: null,
      executionAllowed: false,
      providerHandoffAllowed: false,
      permissionRequestAllowed: false,
      navigationAllowed: false,
      domRenderingAllowed: false,
      clickHandlersAllowed: false,
      visibleRuntimeUi: false,
      metadataOnly: true,
      source: SOURCE
    });
  }

  function buildCard(actionDecision = {}, stagedActionState = {}, inertRenderModel = {}) {
    return Object.freeze({
      title: value(inertRenderModel.title, stagedActionState.visibleLabel || actionDecision.userVisibleLabel || "Review options"),
      body: value(inertRenderModel.body, stagedActionState.description || actionDecision.summary || "Nexus can review this safely without taking action."),
      badge: value(inertRenderModel.badge, "Preview only"),
      riskLabel: value(inertRenderModel.riskLabel, "Low risk"),
      safetyCopy: value(inertRenderModel.safetyCopy, SAFETY_COPY),
      primaryLabel: value(inertRenderModel.primaryControlLabel, "Review options"),
      secondaryLabel: value(inertRenderModel.secondaryControlLabel, "Not now"),
      controlsDisabled: true
    });
  }

  function getEligibility(actionDecision, stagedActionState, inertRenderModel, context) {
    if (typeof eligibilityGuard.getNexusLowRiskInertRendererEligibility !== "function") {
      return { eligible: false, reason: "missing_eligibility_guard" };
    }
    return eligibilityGuard.getNexusLowRiskInertRendererEligibility(actionDecision, stagedActionState, inertRenderModel, context);
  }

  function buildNexusLowRiskInertRendererPrototype(actionDecision, stagedActionState, inertRenderModel, context = {}) {
    const eligibility = getEligibility(actionDecision, stagedActionState, inertRenderModel, context);
    if (!eligibility.eligible) {
      return inactive(eligibility.reason || "not_eligible", eligibility);
    }

    return Object.freeze({
      active: true,
      prototypeDisplayEligible: true,
      reason: "eligible_inert_preview",
      eligibility,
      card: buildCard(actionDecision, stagedActionState, inertRenderModel),
      executionAllowed: false,
      providerHandoffAllowed: false,
      permissionRequestAllowed: false,
      navigationAllowed: false,
      domRenderingAllowed: false,
      clickHandlersAllowed: false,
      visibleRuntimeUi: false,
      metadataOnly: true,
      source: SOURCE
    });
  }

  function renderNexusLowRiskInertPreview(actionDecision, stagedActionState, inertRenderModel, context = {}) {
    return buildNexusLowRiskInertRendererPrototype(actionDecision, stagedActionState, inertRenderModel, context);
  }

  return {
    SAFETY_COPY,
    SOURCE,
    buildNexusLowRiskInertRendererPrototype,
    renderNexusLowRiskInertPreview
  };
});

