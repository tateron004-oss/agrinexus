(function nexusStagedActionStateFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusStagedActionState = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusStagedActionStateModule() {
  const UI_STATES = Object.freeze([
    "hidden_metadata_only",
    "informational_response",
    "suggestion_preview",
    "review_option",
    "staged_action",
    "missing_input_required",
    "confirmation_required",
    "provider_handoff_ready",
    "blocked_restricted",
    "cancelled"
  ]);

  const BASE_BLOCKED_CONTROLS = Object.freeze([
    "execute",
    "provider_handoff",
    "request_permission",
    "place_call",
    "send_message",
    "open_camera",
    "share_location",
    "transaction",
    "emergency_dispatch"
  ]);

  const SAFETY_NOTES = Object.freeze([
    "executionAllowed is false in this phase",
    "providerHandoffAllowed is false in this phase",
    "no button may execute real-world action directly from actionDecision metadata",
    "selectedToolId must not directly execute",
    "agentAction must not directly execute",
    "missingInputs must block execution",
    "restricted actions must not execute",
    "confirmationRequired true means no execution may occur",
    "provider_handoff_only means Nexus may prepare a handoff but did not execute the action",
    "no browser permissions",
    "no call execution",
    "no message execution",
    "no camera opening",
    "no location sharing",
    "no transaction",
    "no emergency dispatch claim",
    "Standard User visible behavior remains unchanged"
  ]);

  function list(value) {
    return Array.isArray(value) ? value.filter(Boolean) : [];
  }

  function normalizeRisk(value) {
    return ["low", "medium", "high", "restricted"].includes(value) ? value : "restricted";
  }

  function normalizeBoundary(value) {
    return [
      "conversation_only",
      "suggestion_only",
      "navigation_only",
      "staged_only",
      "confirmation_required",
      "provider_handoff_only",
      "controlled_execution",
      "blocked"
    ].includes(value) ? value : "blocked";
  }

  function state(uiState, actionDecision = {}, overrides = {}) {
    const riskLevel = normalizeRisk(actionDecision.riskLevel);
    const executionBoundary = normalizeBoundary(actionDecision.executionBoundary);
    return {
      uiState,
      visibleLabel: overrides.visibleLabel || actionDecision.userVisibleLabel || "Review",
      description: overrides.description || actionDecision.summary || "Nexus can review this safely without taking action.",
      allowedControls: list(overrides.allowedControls),
      blockedControls: [...new Set([...(overrides.blockedControls || []), ...BASE_BLOCKED_CONTROLS])],
      confirmationRequired: overrides.confirmationRequired === true || actionDecision.confirmationRequired === true,
      permissionRequired: overrides.permissionRequired === true || list(actionDecision.requiredPermissions).length > 0,
      providerHandoffAllowed: false,
      executionAllowed: false,
      riskLevel,
      executionBoundary,
      resultState: actionDecision.resultState || "proposed",
      reason: overrides.reason || "Derived state is inert and cannot execute.",
      safetyNotes: [...SAFETY_NOTES, ...list(actionDecision.safetyNotes), ...list(overrides.safetyNotes)]
    };
  }

  function deriveNexusStagedActionState(actionDecision = {}, context = {}) {
    const missingInputs = list(actionDecision.missingInputs);
    const riskLevel = normalizeRisk(actionDecision.riskLevel);
    const executionBoundary = normalizeBoundary(actionDecision.executionBoundary);
    const resultState = actionDecision.resultState || "proposed";

    if (!actionDecision || typeof actionDecision !== "object" || Object.keys(actionDecision).length === 0) {
      return state("hidden_metadata_only", {}, {
        allowedControls: [],
        confirmationRequired: false,
        reason: "No actionDecision is available; keep metadata hidden."
      });
    }

    if (context.cancelled === true || resultState === "cancelled") {
      return state("cancelled", actionDecision, {
        allowedControls: [],
        confirmationRequired: false,
        permissionRequired: false,
        reason: "The user cancelled or dismissed the staged action; no action was taken."
      });
    }

    if (riskLevel === "restricted" || executionBoundary === "blocked" || resultState === "execution_blocked") {
      return state("blocked_restricted", actionDecision, {
        allowedControls: ["show_safer_alternatives", "cancel"],
        confirmationRequired: false,
        reason: "Restricted actions must not execute; show a safe explanation instead."
      });
    }

    if (missingInputs.length) {
      return state("missing_input_required", actionDecision, {
        allowedControls: ["provide_missing_input", "cancel"],
        reason: `Missing inputs block execution: ${missingInputs.join(", ")}.`
      });
    }

    if (executionBoundary === "conversation_only") {
      return state("informational_response", actionDecision, {
        allowedControls: [],
        confirmationRequired: false,
        permissionRequired: false,
        reason: "Conversation-only metadata should remain an informational response."
      });
    }

    if (riskLevel === "low" && executionBoundary === "suggestion_only") {
      return state("suggestion_preview", actionDecision, {
        allowedControls: ["learn_more", "review_options", "cancel"],
        confirmationRequired: false,
        permissionRequired: false,
        reason: "Low-risk suggestion can be previewed without execution."
      });
    }

    if (riskLevel === "low" && executionBoundary === "navigation_only") {
      return state("review_option", actionDecision, {
        allowedControls: ["review_options", "learn_more", "cancel"],
        confirmationRequired: false,
        permissionRequired: false,
        reason: "Low-risk navigation can be reviewed without form submission, purchase, contact, or provider action."
      });
    }

    if (executionBoundary === "provider_handoff_only") {
      const ready = context.confirmationSatisfied === true && actionDecision.confirmationRequired !== true;
      return state(ready ? "provider_handoff_ready" : "confirmation_required", actionDecision, {
        allowedControls: ready ? ["review_provider", "cancel"] : ["continue_to_confirmation", "cancel"],
        confirmationRequired: !ready,
        reason: "provider_handoff_only means Nexus may prepare a handoff but did not execute the action."
      });
    }

    if (actionDecision.confirmationRequired === true || executionBoundary === "confirmation_required" || riskLevel === "high") {
      return state("confirmation_required", actionDecision, {
        allowedControls: ["continue_to_confirmation", "review_permissions", "cancel"],
        reason: "confirmationRequired true means no execution may occur; explicit confirmation is required first."
      });
    }

    if (riskLevel === "medium" || executionBoundary === "staged_only") {
      return state("staged_action", actionDecision, {
        allowedControls: ["prepare_draft", "review_before_sending", "cancel"],
        reason: "Medium-risk or staged-only actions can be prepared for review but cannot execute."
      });
    }

    return state("hidden_metadata_only", actionDecision, {
      allowedControls: [],
      reason: "Unrecognized actionDecision state remains hidden metadata only."
    });
  }

  return {
    BASE_BLOCKED_CONTROLS,
    SAFETY_NOTES,
    UI_STATES,
    deriveNexusStagedActionState
  };
});
