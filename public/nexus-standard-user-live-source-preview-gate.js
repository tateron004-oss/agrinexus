(function initNexusStandardUserLiveSourcePreviewGate(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
    return;
  }

  root.NexusStandardUserLiveSourcePreviewGate = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function buildNexusStandardUserLiveSourcePreviewGate() {
  "use strict";

  const REQUIRED_FLAGS = Object.freeze([
    "NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED",
    "NEXUS_ASSISTANT_DIALOGUE_LIVE_PREVIEW_ENABLED",
    "NEXUS_STANDARD_USER_LIVE_SOURCE_PREVIEW_ENABLED"
  ]);

  const ALLOWED_STANDARD_USER_PREVIEW_INTENTS = Object.freeze([
    "weather",
    "agriculture-context",
    "agriculture-help",
    "current-events-news",
    "conflict-security",
    "job-search",
    "shipment-tracking",
    "music-media"
  ]);

  const BLOCKED_STANDARD_USER_PREVIEW_PATTERNS = Object.freeze([
    /\bemergency\b/i,
    /\bmedical\b/i,
    /\bpharmacy\b/i,
    /\bprescription\b/i,
    /\bbuy\b/i,
    /\bpay\b/i,
    /\bpurchase\b/i,
    /\bapply\b/i,
    /\bsubmit\b/i,
    /\bcall\b/i,
    /\bmessage\b/i,
    /\bbook\b/i,
    /\bschedule\b/i,
    /\blocation\b/i,
    /\bwhere am i\b/i,
    /\blog\s*in\b/i,
    /\baccount\b/i
  ]);

  function hasText(value) {
    return typeof value === "string" && value.trim().length > 0;
  }

  function areRequiredFlagsEnabled(env) {
    const source = env || {};
    return REQUIRED_FLAGS.every(flag => source[flag] === "true");
  }

  function hasExplicitShipmentReference(prompt) {
    return /\b[A-Z]{2,}[- ]?\d{4,}\b/i.test(String(prompt || "")) || /\b\d{8,}\b/.test(String(prompt || ""));
  }

  function resolveStandardUserLiveSourcePreviewGate(candidate = {}, env = {}) {
    const prompt = String(candidate.prompt || candidate.normalizedQuery || "");
    const intent = String(candidate.intent || candidate.intentType || "");
    const flagsEnabled = areRequiredFlagsEnabled(env);
    const blockedByPrompt = BLOCKED_STANDARD_USER_PREVIEW_PATTERNS.some(pattern => pattern.test(prompt));
    const allowedIntent = ALLOWED_STANDARD_USER_PREVIEW_INTENTS.includes(intent);
    const explicitShipmentOk = intent !== "shipment-tracking" || hasExplicitShipmentReference(prompt);
    const enabled = flagsEnabled && allowedIntent && explicitShipmentOk && !blockedByPrompt;
    const blockedReason = enabled
      ? ""
      : !flagsEnabled
        ? "standard_user_live_source_preview_flags_disabled"
        : !allowedIntent
          ? "intent_not_allowed_for_standard_user_live_source_preview"
          : !explicitShipmentOk
            ? "shipment_tracking_requires_explicit_reference"
            : "high_risk_or_execution_prompt_blocked";

    return Object.freeze({
      gateId: "standard-user-live-source-preview-gate.v1",
      flagsEnabled,
      enabled,
      intent,
      blockedReason,
      allowedPreviewOnly: enabled,
      readOnly: true,
      previewOnly: true,
      noExecutionAuthorized: true,
      noLocationPermissionRequested: true,
      noProviderContactAuthorized: true,
      noBackendWritePerformed: true,
      noAutoNavigationAuthorized: true,
      noPermissionPromptAuthorized: true,
      noVisibleRuntimeChangeWhenDisabled: !flagsEnabled,
      safeControlsAllowed: Object.freeze([]),
      unsafeControlsBlocked: Object.freeze(["call", "message", "buy", "pay", "book", "submit", "send location", "dispatch", "create account"]),
      userFacingFallback: hasText(blockedReason)
        ? "I can explain safe source-backed next steps, but this preview is not enabled for that request."
        : "I can show a read-only source-backed preview."
    });
  }

  function isSafeStandardUserLiveSourcePreviewGate(gate) {
    if (!gate || typeof gate !== "object" || Array.isArray(gate)) return false;
    if (gate.readOnly !== true || gate.previewOnly !== true) return false;
    if (gate.noExecutionAuthorized !== true) return false;
    if (gate.noLocationPermissionRequested !== true) return false;
    if (gate.noProviderContactAuthorized !== true) return false;
    if (gate.noBackendWritePerformed !== true) return false;
    if (gate.noAutoNavigationAuthorized !== true) return false;
    if (gate.noPermissionPromptAuthorized !== true) return false;
    if (!Array.isArray(gate.safeControlsAllowed) || gate.safeControlsAllowed.length !== 0) return false;
    return true;
  }

  return Object.freeze({
    REQUIRED_FLAGS,
    ALLOWED_STANDARD_USER_PREVIEW_INTENTS,
    BLOCKED_STANDARD_USER_PREVIEW_PATTERNS,
    areRequiredFlagsEnabled,
    resolveStandardUserLiveSourcePreviewGate,
    isSafeStandardUserLiveSourcePreviewGate
  });
});
