const crypto = require("node:crypto");
const { BLOCKED_REAL_WORLD_ACTIONS } = require("./nexus-n100-deep-workflow-engine.js");

const SCHEMA_VERSION = "nexus.n100.safeLocalTools.v1";

const SAFE_LOCAL_ACTION_TYPES = Object.freeze([
  "copy_answer",
  "save_checklist",
  "save_plan",
  "save_search_criteria",
  "save_provider_result_summary",
  "export_plain_text",
  "create_in_app_note",
  "create_local_task",
  "mark_workflow_complete",
  "clear_session",
  "restart_workflow",
  "open_internal_app_section",
  "download_checklist"
]);

const BLOCKED_EXTERNAL_ACTION_TYPES = Object.freeze([
  "send_email",
  "send_message",
  "make_phone_call",
  "book_appointment",
  "purchase_or_pay",
  "submit_application_or_form",
  "provider_contact",
  "location_sharing",
  "dispatch"
]);

const CONFIRMATION_REQUIRED_ACTION_TYPES = Object.freeze([
  "save_checklist",
  "save_plan",
  "save_search_criteria",
  "save_provider_result_summary",
  "export_plain_text",
  "create_in_app_note",
  "create_local_task",
  "mark_workflow_complete",
  "clear_session",
  "restart_workflow",
  "open_internal_app_section",
  "download_checklist"
]);

function text(value, fallback = "") {
  const normalized = String(value || "").trim().replace(/\s+/g, " ");
  return normalized || fallback;
}

function stableId(prefix, value) {
  return `${prefix}-${crypto.createHash("sha256").update(String(value || "")).digest("hex").slice(0, 12)}`;
}

function nowIso(input = {}) {
  return input.nowIso || new Date(input.now || Date.now()).toISOString();
}

function freezeArray(list) {
  return Object.freeze((Array.isArray(list) ? list : []).map(item => (
    item && typeof item === "object" ? Object.freeze({ ...item }) : item
  )));
}

function safetyPosture() {
  return Object.freeze({
    canExecute: false,
    executionAuthority: "none",
    localOnly: true,
    fixtureOnly: true,
    finalExecutionGateRequired: true,
    confirmationRequiredForPersistenceOrExport: true,
    cancelAvailable: true,
    noProviderContactAuthorized: true,
    noProviderHandoffAuthorized: true,
    noExternalNavigationAuthorized: true,
    noLocationPermissionRequested: true,
    noBackendWritePerformed: true,
    noStorageWritePerformed: true,
    noClipboardWritePerformed: true,
    noFileWritePerformed: true,
    noDispatchAuthorized: true
  });
}

function auditMetadata(input = {}) {
  const actionType = text(input.actionType, "unknown");
  return Object.freeze({
    auditId: text(input.auditId, stableId("n100-local-audit", `${actionType}:${input.summary || ""}`)),
    auditEventType: "safe_local_action_prepared",
    riskTier: "low_local_only",
    actionType,
    createdAt: nowIso(input),
    noExecutionAuthorized: true,
    noProviderContactAuthorized: true,
    redactedPayloadOnly: true
  });
}

function blockedAction(actionType, reason = "") {
  const normalized = text(actionType, "unknown_external_action");
  return Object.freeze({
    schemaVersion: SCHEMA_VERSION,
    actionId: stableId("n100-local-action-blocked", normalized),
    actionType: normalized,
    status: "blocked_external_action",
    reason: text(reason, `${normalized} is outside the safe local tool boundary.`),
    blockedActions: freezeArray([...BLOCKED_REAL_WORLD_ACTIONS, ...BLOCKED_EXTERNAL_ACTION_TYPES]),
    auditMetadata: auditMetadata({ actionType: normalized }),
    safetyPosture: safetyPosture(),
    requiresConfirmation: true,
    cancelAvailable: true,
    canExecute: false,
    executionAuthority: "none",
    noExecutionAuthorized: true,
    noProviderContactAuthorized: true,
    noBackendWritePerformed: true,
    noStorageWritePerformed: true,
    noClipboardWritePerformed: true,
    noFileWritePerformed: true
  });
}

function prepareN100SafeLocalAction(input = {}) {
  const actionType = text(input.actionType, "copy_answer");
  if (!SAFE_LOCAL_ACTION_TYPES.includes(actionType)) {
    return blockedAction(actionType);
  }

  const summary = text(input.summary, `Prepare ${actionType.replace(/_/g, " ")} for local review.`);
  const requiresConfirmation = CONFIRMATION_REQUIRED_ACTION_TYPES.includes(actionType);
  return Object.freeze({
    schemaVersion: SCHEMA_VERSION,
    actionId: text(input.actionId, stableId("n100-local-action", `${actionType}:${summary}`)),
    actionType,
    status: requiresConfirmation ? "waiting_for_user_confirmation" : "ready_for_user_local_interaction",
    actionSummary: summary,
    previewText: text(input.previewText, summary),
    requiresConfirmation,
    cancelAvailable: true,
    allowedConfirmationEffect: requiresConfirmation ? "local_fixture_only" : "user_controlled_local_interaction",
    safeSuccessResponse: `${actionType.replace(/_/g, " ")} prepared locally. No external action was taken.`,
    safeFailureResponse: `${actionType.replace(/_/g, " ")} was not completed. No external action was taken.`,
    auditMetadata: auditMetadata({ actionType, summary, nowIso: input.nowIso }),
    blockedActions: freezeArray([...BLOCKED_REAL_WORLD_ACTIONS, ...BLOCKED_EXTERNAL_ACTION_TYPES]),
    safetyPosture: safetyPosture(),
    canExecute: false,
    executionAuthority: "none",
    noExecutionAuthorized: true,
    noProviderContactAuthorized: true,
    noProviderHandoffAuthorized: true,
    noExternalNavigationAuthorized: true,
    noLocationPermissionRequested: true,
    noBackendWritePerformed: true,
    noStorageWritePerformed: true,
    noClipboardWritePerformed: true,
    noFileWritePerformed: true
  });
}

function confirmN100SafeLocalAction(action, input = {}) {
  if (!isSafeN100LocalToolAction(action)) {
    return blockedAction("invalid_local_action", "The local action payload failed safety validation.");
  }
  if (action.status === "blocked_external_action") return action;
  if (action.requiresConfirmation && text(input.confirmation, "").toLowerCase() !== "confirm") {
    return Object.freeze({
      ...action,
      status: "waiting_for_user_confirmation",
      confirmationRejected: true,
      safeFailureResponse: "The local action still needs an explicit confirmation. No external action was taken.",
      canExecute: false,
      executionAuthority: "none",
      noExecutionAuthorized: true
    });
  }
  return Object.freeze({
    ...action,
    status: "confirmed_local_only",
    confirmedAt: nowIso(input),
    confirmationAccepted: true,
    localEffect: "fixture_only_no_runtime_side_effect",
    canExecute: false,
    executionAuthority: "none",
    noExecutionAuthorized: true,
    noBackendWritePerformed: true,
    noStorageWritePerformed: true,
    noClipboardWritePerformed: true,
    noFileWritePerformed: true
  });
}

function cancelN100SafeLocalAction(action, reason = "user_cancelled") {
  if (!isSafeN100LocalToolAction(action)) {
    return blockedAction("invalid_local_action", "The local action payload failed safety validation.");
  }
  return Object.freeze({
    ...action,
    status: "cancelled",
    cancelReason: text(reason, "user_cancelled"),
    safeFailureResponse: "The local action was cancelled. No external action was taken.",
    canExecute: false,
    executionAuthority: "none",
    noExecutionAuthorized: true
  });
}

function isSafeN100LocalToolAction(action) {
  if (!action || typeof action !== "object" || Array.isArray(action)) return false;
  if (action.schemaVersion !== SCHEMA_VERSION) return false;
  if (!action.actionId || !action.actionType || !action.status) return false;
  if (action.canExecute !== false || action.executionAuthority !== "none") return false;
  if (action.noExecutionAuthorized !== true || action.noProviderContactAuthorized !== true || action.noBackendWritePerformed !== true) return false;
  if (action.cancelAvailable !== true) return false;
  if (!action.safetyPosture || action.safetyPosture.finalExecutionGateRequired !== true) return false;
  if (action.noStorageWritePerformed !== true || action.noClipboardWritePerformed !== true || action.noFileWritePerformed !== true) return false;
  const serialized = JSON.stringify(action);
  if (/(phoneNumberToDial|telUrl|nativeBridge|paymentIntent|messageToSend|providerUrl|deepLink|executionAuthority":"provider")/.test(serialized)) return false;
  if (SAFE_LOCAL_ACTION_TYPES.includes(action.actionType)) {
    return Array.isArray(action.blockedActions) && BLOCKED_EXTERNAL_ACTION_TYPES.every(item => action.blockedActions.includes(item));
  }
  return action.status === "blocked_external_action";
}

module.exports = Object.freeze({
  SCHEMA_VERSION,
  SAFE_LOCAL_ACTION_TYPES,
  BLOCKED_EXTERNAL_ACTION_TYPES,
  CONFIRMATION_REQUIRED_ACTION_TYPES,
  prepareN100SafeLocalAction,
  confirmN100SafeLocalAction,
  cancelN100SafeLocalAction,
  isSafeN100LocalToolAction
});
