(function nexusLowRiskInertRendererEligibilityFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory(require("./nexus-low-risk-inert-renderer-flag.js"));
  } else {
    root.NexusLowRiskInertRendererEligibility = factory(root.NexusLowRiskInertRendererFlag);
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusLowRiskInertRendererEligibilityModule(flagGuard = {}) {
  const ALLOWED_DOMAINS = Object.freeze(["learning", "jobs", "marketplace", "agriculture"]);
  const ALLOWED_BOUNDARIES = Object.freeze(["suggestion_only", "navigation_only"]);
  const ALLOWED_UI_STATES = Object.freeze(["suggestion_preview", "review_option", "informational_response"]);
  const ALLOWED_RENDER_MODES = Object.freeze(["inert_preview", "inert_review", "inert_review_option", "inert_information"]);
  const EXCLUDED_DOMAINS = Object.freeze(["communications", "call", "message", "location", "camera", "health", "telehealth", "emergency"]);
  const EXCLUDED_TERMS = Object.freeze([
    "marketplace_transaction",
    "purchase",
    "seller_contact",
    "provider_handoff",
    "browser_permission",
    "form_submission",
    "job_application_submission"
  ]);

  function flagEnabled(context = {}) {
    if (typeof flagGuard.isNexusLowRiskInertRendererEnabled === "function") {
      return flagGuard.isNexusLowRiskInertRendererEnabled(context) === true;
    }
    return false;
  }

  function text(value) {
    return String(value || "").trim().toLowerCase();
  }

  function list(value) {
    return Array.isArray(value) ? value.filter(Boolean) : [];
  }

  function base(overrides = {}) {
    const blocked = overrides.eligible !== true;
    return Object.freeze({
      eligible: false,
      reason: "unknown_error",
      allowedDomain: false,
      allowedRisk: false,
      allowedBoundary: false,
      allowedUiState: false,
      allowedRenderMode: false,
      inertRendererSafe: false,
      executionBlocked: true,
      providerBlocked: true,
      permissionBlocked: true,
      highRiskBlocked: true,
      visibleRenderingAuthorized: false,
      executionAuthority: "none",
      renderingAuthority: "none",
      providerHandoffAuthority: "none",
      browserPermissionAuthority: "none",
      navigationAuthority: "none",
      clickHandlerAuthority: "none",
      source: "nexus-low-risk-inert-renderer-eligibility.v1",
      ...overrides,
      visibleRenderingAuthorized: false,
      executionAuthority: "none",
      renderingAuthority: "none",
      providerHandoffAuthority: "none",
      browserPermissionAuthority: "none",
      navigationAuthority: "none",
      clickHandlerAuthority: "none",
      highRiskBlocked: overrides.highRiskBlocked !== undefined ? overrides.highRiskBlocked : blocked
    });
  }

  function hasExcludedIntent(actionDecision = {}, stagedActionState = {}, inertRenderModel = {}) {
    const domain = text(actionDecision.domain);
    const selectedToolId = text(actionDecision.selectedToolId);
    const actionId = text(actionDecision.actionId);
    const boundary = text(actionDecision.executionBoundary);
    const renderMode = text(inertRenderModel.renderMode);
    const uiState = text(stagedActionState.uiState);
    const combined = [domain, selectedToolId, actionId, boundary, renderMode, uiState, ...list(actionDecision.requiredPermissions).map(text)].join(" ");
    const normalizedCombined = combined.replace(/[^a-z0-9]+/g, "_");

    if (EXCLUDED_DOMAINS.includes(domain)) return true;
    return EXCLUDED_TERMS.some(term => combined.includes(term) || normalizedCombined.includes(term));
  }

  function allowedDomain(actionDecision = {}) {
    const domain = text(actionDecision.domain);
    if (!ALLOWED_DOMAINS.includes(domain)) return false;
    if (domain === "marketplace") {
      return text(actionDecision.actionId).includes("review")
        && !text(actionDecision.actionId).includes("transaction")
        && text(actionDecision.selectedToolId) === "marketplace.agritrade";
    }
    if (domain === "agriculture") {
      return text(actionDecision.actionId).includes("support")
        && text(actionDecision.actionId).includes("review");
    }
    return true;
  }

  function getNexusLowRiskInertRendererEligibility(actionDecision, stagedActionState, inertRenderModel, context = {}) {
    try {
      if (!flagEnabled(context)) {
        return base({ reason: "flag_disabled" });
      }
      if (!actionDecision || typeof actionDecision !== "object") {
        return base({ reason: "missing_action_decision" });
      }
      if (!stagedActionState || typeof stagedActionState !== "object") {
        return base({ reason: "missing_staged_action_state" });
      }
      if (!inertRenderModel || typeof inertRenderModel !== "object") {
        return base({ reason: "missing_inert_render_model" });
      }

      const allowedRisk = actionDecision.riskLevel === "low" && stagedActionState.riskLevel === "low";
      const domainAllowed = allowedDomain(actionDecision);
      const boundaryAllowed = ALLOWED_BOUNDARIES.includes(actionDecision.executionBoundary);
      const uiStateAllowed = ALLOWED_UI_STATES.includes(stagedActionState.uiState);
      const renderModeAllowed = ALLOWED_RENDER_MODES.includes(inertRenderModel.renderMode);
      const executionBlocked = actionDecision.confirmationRequired !== true
        && list(actionDecision.missingInputs).length === 0
        && stagedActionState.executionAllowed === false
        && inertRenderModel.executionAllowed === false;
      const providerBlocked = stagedActionState.providerHandoffAllowed === false
        && inertRenderModel.providerHandoffAllowed === false;
      const permissionBlocked = list(actionDecision.requiredPermissions).length === 0
        && stagedActionState.permissionRequired !== true
        && inertRenderModel.permissionRequestAllowed === false;
      const domBlocked = inertRenderModel.domRenderingAllowed === false;
      const clickBlocked = inertRenderModel.clickHandlersAllowed === false;
      const inertRendererSafe = executionBlocked && providerBlocked && permissionBlocked && domBlocked && clickBlocked;

      if (hasExcludedIntent(actionDecision, stagedActionState, inertRenderModel)) {
        return base({ reason: "excluded_intent", highRiskBlocked: true });
      }
      if (!allowedRisk) return base({ reason: "disallowed_risk", allowedRisk, highRiskBlocked: actionDecision.riskLevel !== "low" });
      if (!domainAllowed) return base({ reason: "disallowed_domain", allowedRisk, allowedDomain: domainAllowed });
      if (!boundaryAllowed) return base({ reason: "disallowed_boundary", allowedRisk, allowedDomain: domainAllowed, allowedBoundary: boundaryAllowed });
      if (!uiStateAllowed) return base({ reason: "disallowed_ui_state", allowedRisk, allowedDomain: domainAllowed, allowedBoundary: boundaryAllowed, allowedUiState: uiStateAllowed });
      if (!renderModeAllowed) return base({ reason: "disallowed_render_mode", allowedRisk, allowedDomain: domainAllowed, allowedBoundary: boundaryAllowed, allowedUiState: uiStateAllowed, allowedRenderMode: renderModeAllowed });
      if (!executionBlocked) return base({ reason: "execution_not_blocked", allowedRisk, allowedDomain: domainAllowed, allowedBoundary: boundaryAllowed, allowedUiState: uiStateAllowed, allowedRenderMode: renderModeAllowed, executionBlocked });
      if (!providerBlocked) return base({ reason: "provider_not_blocked", allowedRisk, allowedDomain: domainAllowed, allowedBoundary: boundaryAllowed, allowedUiState: uiStateAllowed, allowedRenderMode: renderModeAllowed, executionBlocked, providerBlocked });
      if (!permissionBlocked) return base({ reason: "permission_not_blocked", allowedRisk, allowedDomain: domainAllowed, allowedBoundary: boundaryAllowed, allowedUiState: uiStateAllowed, allowedRenderMode: renderModeAllowed, executionBlocked, providerBlocked, permissionBlocked });
      if (!domBlocked) return base({ reason: "dom_rendering_not_blocked", allowedRisk, allowedDomain: domainAllowed, allowedBoundary: boundaryAllowed, allowedUiState: uiStateAllowed, allowedRenderMode: renderModeAllowed, executionBlocked, providerBlocked, permissionBlocked, inertRendererSafe });
      if (!clickBlocked) return base({ reason: "click_handlers_not_blocked", allowedRisk, allowedDomain: domainAllowed, allowedBoundary: boundaryAllowed, allowedUiState: uiStateAllowed, allowedRenderMode: renderModeAllowed, executionBlocked, providerBlocked, permissionBlocked, inertRendererSafe });

      return base({
        eligible: true,
        reason: "eligible",
        allowedDomain: true,
        allowedRisk: true,
        allowedBoundary: true,
        allowedUiState: true,
        allowedRenderMode: true,
        inertRendererSafe,
        executionBlocked,
        providerBlocked,
        permissionBlocked,
        highRiskBlocked: true
      });
    } catch (_error) {
      return base({ reason: "unknown_error" });
    }
  }

  function isNexusLowRiskInertRendererEligible(actionDecision, stagedActionState, inertRenderModel, context = {}) {
    return getNexusLowRiskInertRendererEligibility(actionDecision, stagedActionState, inertRenderModel, context).eligible === true;
  }

  return {
    ALLOWED_BOUNDARIES,
    ALLOWED_DOMAINS,
    ALLOWED_RENDER_MODES,
    ALLOWED_UI_STATES,
    EXCLUDED_DOMAINS,
    EXCLUDED_TERMS,
    getNexusLowRiskInertRendererEligibility,
    isNexusLowRiskInertRendererEligible
  };
});
