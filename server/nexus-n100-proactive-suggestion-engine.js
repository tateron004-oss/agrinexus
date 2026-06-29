const crypto = require("node:crypto");
const { BLOCKED_REAL_WORLD_ACTIONS } = require("./nexus-n100-deep-workflow-engine.js");

const SCHEMA_VERSION = "nexus.n100.proactiveSuggestionEngine.v1";

const SAFE_ACTION_TYPES = Object.freeze([
  "safe_continuation",
  "retry_or_refine",
  "refresh_source",
  "observation_checklist",
  "application_prep_checklist",
  "review_saved_plan",
  "manual_export_review"
]);

const NOT_ALLOWED_AUTONOMY = Object.freeze([
  "background_monitoring",
  "unsolicited_notifications",
  "automatic_provider_calls",
  "automatic_external_actions",
  "hidden_provider_contact",
  "location_polling",
  "emergency_escalation"
]);

function text(value, fallback = "") {
  const normalized = String(value || "").trim().replace(/\s+/g, " ");
  return normalized || fallback;
}

function stableId(prefix, value) {
  return `${prefix}-${crypto.createHash("sha256").update(String(value || "")).digest("hex").slice(0, 12)}`;
}

function suggestion(input = {}) {
  const safeActionType = SAFE_ACTION_TYPES.includes(input.safeActionType) ? input.safeActionType : "safe_continuation";
  const reason = text(input.reason, "A user-visible result is available for review.");
  const label = text(input.label, "Review next safe step");
  return Object.freeze({
    schemaVersion: SCHEMA_VERSION,
    suggestionId: text(input.suggestionId, stableId("n100-suggestion", `${safeActionType}:${reason}:${label}`)),
    reason,
    label,
    safeActionType,
    requiresConfirmation: input.requiresConfirmation !== false,
    sourceEventType: text(input.sourceEventType, "user_result"),
    userInitiatedContextRequired: true,
    backgroundGenerated: false,
    notificationAllowed: false,
    blockedActions: Object.freeze([...(input.blockedActions || BLOCKED_REAL_WORLD_ACTIONS), ...NOT_ALLOWED_AUTONOMY]),
    canExecute: false,
    executionAuthority: "none",
    noExecutionAuthorized: true,
    noProviderContactAuthorized: true,
    noLocationPermissionRequested: true,
    noBackendWritePerformed: true
  });
}

function buildN100ProactiveSuggestions(context = {}) {
  const eventType = text(context.eventType, "user_result");
  const domain = text(context.domain, "general").toLowerCase();
  const status = text(context.status, "result_ready").toLowerCase();
  const suggestions = [];

  if (!["user_result", "workflow_step", "provider_failure", "stale_data", "saved_plan"].includes(eventType)) {
    return Object.freeze([]);
  }

  if (eventType === "provider_failure") {
    suggestions.push(suggestion({
      sourceEventType: eventType,
      safeActionType: "retry_or_refine",
      reason: "The read-only provider failed or returned no usable result.",
      label: "Refine or retry the read-only lookup"
    }));
  }

  if (eventType === "stale_data" || status.includes("stale")) {
    suggestions.push(suggestion({
      sourceEventType: eventType,
      safeActionType: "refresh_source",
      reason: "The current source may be stale.",
      label: "Refresh or verify the source"
    }));
  }

  if (eventType === "saved_plan") {
    suggestions.push(suggestion({
      sourceEventType: eventType,
      safeActionType: "review_saved_plan",
      reason: "A saved plan is available for user review.",
      label: "Review saved plan"
    }));
  }

  if (domain.includes("crop") || domain.includes("agriculture")) {
    suggestions.push(suggestion({
      sourceEventType: eventType,
      safeActionType: "observation_checklist",
      reason: "Crop guidance was prepared and can be turned into a manual observation checklist.",
      label: "Create observation checklist"
    }));
  }

  if (domain.includes("job") || domain.includes("workforce")) {
    suggestions.push(suggestion({
      sourceEventType: eventType,
      safeActionType: "application_prep_checklist",
      reason: "Job or workforce results are available for application preparation.",
      label: "Prepare application checklist"
    }));
  }

  if (eventType === "workflow_step" || eventType === "user_result") {
    suggestions.push(suggestion({
      sourceEventType: eventType,
      safeActionType: "safe_continuation",
      reason: "The user has an active review-only workflow result.",
      label: "Continue safely"
    }));
  }

  return Object.freeze(suggestions.slice(0, 4));
}

function blockN100ProactiveSuggestionContext(context = {}) {
  return suggestion({
    sourceEventType: text(context.eventType, "blocked"),
    safeActionType: "safe_continuation",
    reason: "This context is blocked from proactive action.",
    label: "No automatic action available",
    requiresConfirmation: true,
    blockedActions: Object.freeze([...BLOCKED_REAL_WORLD_ACTIONS, ...NOT_ALLOWED_AUTONOMY])
  });
}

function isSafeN100ProactiveSuggestion(item) {
  if (!item || typeof item !== "object" || Array.isArray(item)) return false;
  if (item.schemaVersion !== SCHEMA_VERSION) return false;
  if (!item.suggestionId || !item.reason || !item.safeActionType) return false;
  if (!SAFE_ACTION_TYPES.includes(item.safeActionType)) return false;
  if (item.userInitiatedContextRequired !== true || item.backgroundGenerated !== false || item.notificationAllowed !== false) return false;
  if (item.canExecute !== false || item.executionAuthority !== "none") return false;
  if (item.noExecutionAuthorized !== true || item.noProviderContactAuthorized !== true || item.noBackendWritePerformed !== true) return false;
  const serialized = JSON.stringify(item);
  if (/(phoneNumberToDial|telUrl|nativeBridge|paymentIntent|messageToSend|providerUrl|deepLink|executionAuthority":"provider")/.test(serialized)) return false;
  return NOT_ALLOWED_AUTONOMY.every(action => item.blockedActions.includes(action));
}

module.exports = Object.freeze({
  SCHEMA_VERSION,
  SAFE_ACTION_TYPES,
  NOT_ALLOWED_AUTONOMY,
  buildN100ProactiveSuggestions,
  blockN100ProactiveSuggestionContext,
  isSafeN100ProactiveSuggestion
});
