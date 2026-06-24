(function nexusStagedActionInertRendererFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusStagedActionInertRenderer = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusStagedActionInertRendererModule() {
  const DISABLED_CONTROLS = Object.freeze([
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

  const SAFETY_COPY = "No action has been taken.";

  function list(value) {
    return Array.isArray(value) ? value.filter(Boolean) : [];
  }

  function text(value, fallback = "") {
    const normalized = String(value || "").trim();
    return normalized || fallback;
  }

  function riskLabel(riskLevel = "restricted") {
    return {
      low: "Low risk",
      medium: "Review required",
      high: "Confirmation required",
      restricted: "Blocked for safety"
    }[riskLevel] || "Blocked for safety";
  }

  function baseModel(stagedActionState = {}, actionDecision = {}, overrides = {}) {
    const uiState = stagedActionState.uiState || "hidden_metadata_only";
    const title = text(overrides.title, stagedActionState.visibleLabel || actionDecision.userVisibleLabel || "Review");
    const body = text(overrides.body, stagedActionState.description || actionDecision.summary || "Nexus can review this safely without taking action.");
    const disabledControls = [...new Set([...DISABLED_CONTROLS, ...list(stagedActionState.blockedControls), ...list(overrides.disabledControls)])];
    return {
      renderMode: overrides.renderMode || "inert_preview",
      visible: overrides.visible === true,
      title,
      body,
      badge: text(overrides.badge, "Review only"),
      riskLabel: text(overrides.riskLabel, riskLabel(stagedActionState.riskLevel || actionDecision.riskLevel)),
      primaryControlLabel: text(overrides.primaryControlLabel, ""),
      secondaryControlLabel: text(overrides.secondaryControlLabel, ""),
      disabledControls,
      warningText: text(overrides.warningText, ""),
      confirmationCopy: text(overrides.confirmationCopy, ""),
      providerCopy: text(overrides.providerCopy, ""),
      missingInputCopy: text(overrides.missingInputCopy, ""),
      safetyCopy: text(overrides.safetyCopy, SAFETY_COPY),
      executionAllowed: false,
      providerHandoffAllowed: false,
      permissionRequestAllowed: false,
      domRenderingAllowed: false,
      clickHandlersAllowed: false,
      uiState,
      metadataOnly: true,
      source: "nexus-staged-action-inert-renderer.v1"
    };
  }

  function missingInputCopy(actionDecision = {}) {
    const missing = list(actionDecision.missingInputs);
    if (!missing.length) return "Nexus needs more information before anything can be reviewed.";
    return `Nexus needs more information first: ${missing.join(", ")}.`;
  }

  function deriveNexusStagedActionRenderModel(stagedActionState = {}, actionDecision = {}, context = {}) {
    const uiState = stagedActionState && typeof stagedActionState === "object"
      ? stagedActionState.uiState || "hidden_metadata_only"
      : "hidden_metadata_only";

    if (context.cancelled === true || uiState === "cancelled") {
      return baseModel(stagedActionState, actionDecision, {
        renderMode: "inert_cancelled",
        visible: false,
        title: "Cancelled",
        body: "This staged action is inactive. No action has been taken.",
        badge: "Cancelled",
        secondaryControlLabel: "",
        safetyCopy: SAFETY_COPY
      });
    }

    const byState = {
      hidden_metadata_only: {
        renderMode: "inert_hidden",
        visible: false,
        title: "Hidden metadata",
        body: "Staged action metadata remains hidden.",
        badge: "Hidden",
        primaryControlLabel: "",
        secondaryControlLabel: "",
        safetyCopy: "Inert render metadata only. No action has been taken."
      },
      informational_response: {
        renderMode: "inert_information",
        visible: false,
        badge: "Information only",
        primaryControlLabel: "",
        secondaryControlLabel: "",
        safetyCopy: SAFETY_COPY
      },
      suggestion_preview: {
        renderMode: "inert_preview",
        visible: false,
        badge: "Preview only",
        primaryControlLabel: "Review options",
        secondaryControlLabel: "Not now",
        safetyCopy: SAFETY_COPY
      },
      review_option: {
        renderMode: "inert_review_option",
        visible: false,
        badge: "Review only",
        primaryControlLabel: "Review options",
        secondaryControlLabel: "Cancel",
        safetyCopy: "Navigation is not performed by this renderer. No action has been taken."
      },
      staged_action: {
        renderMode: "inert_staged_action",
        visible: false,
        badge: "Prepared, not executed",
        primaryControlLabel: "Review before action",
        secondaryControlLabel: "Cancel",
        warningText: "Prepared, not executed.",
        safetyCopy: SAFETY_COPY
      },
      missing_input_required: {
        renderMode: "inert_missing_input",
        visible: false,
        badge: "Needs information",
        primaryControlLabel: "Provide information",
        secondaryControlLabel: "Cancel",
        missingInputCopy: missingInputCopy(actionDecision),
        warningText: "Missing information blocks execution.",
        safetyCopy: SAFETY_COPY
      },
      confirmation_required: {
        renderMode: "inert_confirmation_required",
        visible: false,
        badge: "Confirmation required",
        primaryControlLabel: "Continue to confirmation",
        secondaryControlLabel: "Cancel",
        confirmationCopy: "Explicit confirmation is required before any future action. Confirmation has not been provided.",
        warningText: "No execution may occur from this render model.",
        safetyCopy: SAFETY_COPY
      },
      provider_handoff_ready: {
        renderMode: "inert_provider_handoff_ready",
        visible: false,
        badge: "Handoff prepared only",
        primaryControlLabel: "Review provider",
        secondaryControlLabel: "Cancel",
        providerCopy: "Provider handoff is prepared only. No provider has been opened.",
        warningText: "provider_handoff_only must not mean execution happened.",
        safetyCopy: SAFETY_COPY
      },
      blocked_restricted: {
        renderMode: "inert_blocked",
        visible: false,
        badge: "Blocked for safety",
        primaryControlLabel: "",
        secondaryControlLabel: "Cancel",
        warningText: "This action is blocked for safety.",
        safetyCopy: "Restricted actions must not execute. No action has been taken."
      }
    };

    return baseModel(stagedActionState, actionDecision, byState[uiState] || byState.hidden_metadata_only);
  }

  return {
    DISABLED_CONTROLS,
    deriveNexusStagedActionRenderModel
  };
});
