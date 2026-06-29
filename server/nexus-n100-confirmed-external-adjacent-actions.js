const crypto = require("node:crypto");
const {
  createN100PermissionRequest,
  isSafeN100PermissionState
} = require("./nexus-n100-permission-consent-manager.js");
const {
  BLOCKED_EXTERNAL_ACTION_TYPES
} = require("./nexus-n100-safe-local-tools.js");
const { BLOCKED_REAL_WORLD_ACTIONS } = require("./nexus-n100-deep-workflow-engine.js");

const SCHEMA_VERSION = "nexus.n100.confirmedExternalAdjacentActions.v1";

const LOW_RISK_EXTERNAL_ADJACENT_ACTIONS = Object.freeze([
  "create_local_reminder_task",
  "prepare_calendar_draft",
  "prepare_email_draft",
  "export_download_plain_text",
  "save_to_local_app_storage",
  "open_internal_section"
]);

const PERMISSION_REQUIRED_ACTIONS = Object.freeze([
  "prepare_calendar_draft",
  "prepare_email_draft",
  "save_to_local_app_storage"
]);

const BLOCKED_ACTIONS = Object.freeze([
  "send_email",
  "send_message",
  "make_call",
  "payment_purchase",
  "submit_application_form",
  "external_provider_booking",
  "dispatch",
  "location_sharing",
  "account_creation"
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

function requiredPermissionCapability(actionType) {
  if (actionType === "prepare_calendar_draft") return "calendar";
  if (actionType === "prepare_email_draft") return "email_message_draft";
  if (actionType === "save_to_local_app_storage") return "profile_account_write";
  if (actionType === "export_download_plain_text") return "file_export";
  return null;
}

function auditMetadata(input = {}) {
  const actionType = text(input.actionType, "unknown");
  return Object.freeze({
    auditId: text(input.auditId, stableId("n100-adjacent-audit", `${actionType}:${input.summary || ""}`)),
    auditEventType: "external_adjacent_action_prepared",
    actionType,
    riskTier: "low_external_adjacent",
    createdAt: nowIso(input),
    permissionStatus: text(input.permissionStatus, "not_required"),
    confirmationStatus: text(input.confirmationStatus, "pending"),
    noExecutionAuthorized: true,
    noProviderContactAuthorized: true,
    noExternalSendAuthorized: true,
    redactedPayloadOnly: true
  });
}

function safetyPosture() {
  return Object.freeze({
    canExecute: false,
    executionAuthority: "none",
    confirmedActionStillFixtureOnly: true,
    noSendAuthorized: true,
    noProviderContactAuthorized: true,
    noExternalProviderBookingAuthorized: true,
    noLocationSharingAuthorized: true,
    noPaymentAuthorized: true,
    noBackendWritePerformed: true,
    noStorageWritePerformed: true,
    noFileWritePerformed: true,
    noExternalNavigationAuthorized: true
  });
}

function blockedAdjacentAction(actionType, reason = "") {
  const normalized = text(actionType, "unknown_blocked_action");
  return Object.freeze({
    schemaVersion: SCHEMA_VERSION,
    actionId: stableId("n100-adjacent-blocked", normalized),
    actionType: normalized,
    status: "blocked_external_action",
    reason: text(reason, `${normalized} is not allowed in N100-9.`),
    blockedActions: Object.freeze([...BLOCKED_REAL_WORLD_ACTIONS, ...BLOCKED_EXTERNAL_ACTION_TYPES, ...BLOCKED_ACTIONS]),
    auditMetadata: auditMetadata({ actionType: normalized, confirmationStatus: "blocked" }),
    safetyPosture: safetyPosture(),
    requiresPermission: true,
    requiresConfirmation: true,
    cancelAvailable: true,
    canExecute: false,
    executionAuthority: "none",
    noExecutionAuthorized: true,
    noProviderContactAuthorized: true,
    noBackendWritePerformed: true,
    noStorageWritePerformed: true,
    noFileWritePerformed: true
  });
}

function prepareN100ExternalAdjacentAction(input = {}) {
  const actionType = text(input.actionType, "export_download_plain_text");
  if (!LOW_RISK_EXTERNAL_ADJACENT_ACTIONS.includes(actionType)) {
    return blockedAdjacentAction(actionType);
  }

  const permissionCapability = requiredPermissionCapability(actionType);
  const permissionState = input.permissionState;
  const permissionSatisfied = !PERMISSION_REQUIRED_ACTIONS.includes(actionType)
    || (isSafeN100PermissionState(permissionState) && permissionState.capability === permissionCapability && permissionState.status === "granted");
  const permissionRequest = permissionSatisfied || !permissionCapability
    ? null
    : createN100PermissionRequest({
      capability: permissionCapability,
      reason: `Nexus needs permission before preparing ${actionType.replace(/_/g, " ")}.`,
      nowIso: input.nowIso
    });
  const summary = text(input.summary, `Prepare ${actionType.replace(/_/g, " ")} for user review.`);

  return Object.freeze({
    schemaVersion: SCHEMA_VERSION,
    actionId: text(input.actionId, stableId("n100-adjacent-action", `${actionType}:${summary}`)),
    actionType,
    status: permissionSatisfied ? "waiting_for_user_confirmation" : "waiting_for_permission",
    actionSummary: summary,
    previewText: text(input.previewText, summary),
    permissionCapability,
    permissionSatisfied,
    permissionRequest,
    requiresPermission: PERMISSION_REQUIRED_ACTIONS.includes(actionType),
    requiresConfirmation: true,
    cancelAvailable: true,
    auditMetadata: auditMetadata({
      actionType,
      summary,
      permissionStatus: permissionSatisfied ? "satisfied_or_not_required" : "required",
      nowIso: input.nowIso
    }),
    safetyPosture: safetyPosture(),
    blockedActions: Object.freeze([...BLOCKED_REAL_WORLD_ACTIONS, ...BLOCKED_EXTERNAL_ACTION_TYPES, ...BLOCKED_ACTIONS]),
    safeSuccessResponse: `${actionType.replace(/_/g, " ")} prepared for review. Nothing was sent or executed.`,
    safeFailureResponse: `${actionType.replace(/_/g, " ")} was not prepared. Nothing was sent or executed.`,
    canExecute: false,
    executionAuthority: "none",
    noExecutionAuthorized: true,
    noProviderContactAuthorized: true,
    noBackendWritePerformed: true,
    noStorageWritePerformed: true,
    noFileWritePerformed: true
  });
}

function confirmN100ExternalAdjacentAction(action, input = {}) {
  if (!isSafeN100ExternalAdjacentAction(action)) {
    return blockedAdjacentAction("invalid_external_adjacent_action", "The action failed safety validation.");
  }
  if (action.status === "blocked_external_action") return action;
  if (action.status === "waiting_for_permission") {
    return Object.freeze({
      ...action,
      status: "waiting_for_permission",
      confirmationRejected: true,
      safeFailureResponse: "Permission is required before confirmation. No action was taken.",
      canExecute: false,
      executionAuthority: "none",
      noExecutionAuthorized: true
    });
  }
  if (text(input.confirmation, "").toLowerCase() !== "confirm") {
    return Object.freeze({
      ...action,
      status: "waiting_for_user_confirmation",
      confirmationRejected: true,
      safeFailureResponse: "Explicit confirmation is required. No action was taken.",
      canExecute: false,
      executionAuthority: "none",
      noExecutionAuthorized: true
    });
  }
  return Object.freeze({
    ...action,
    status: "confirmed_fixture_only",
    confirmedAt: nowIso(input),
    confirmationAccepted: true,
    localEffect: "prepared_for_user_review_only",
    auditMetadata: auditMetadata({
      actionType: action.actionType,
      summary: action.actionSummary,
      permissionStatus: action.permissionSatisfied ? "satisfied_or_not_required" : "required",
      confirmationStatus: "accepted",
      nowIso: input.nowIso
    }),
    canExecute: false,
    executionAuthority: "none",
    noExecutionAuthorized: true,
    noBackendWritePerformed: true,
    noStorageWritePerformed: true,
    noFileWritePerformed: true
  });
}

function cancelN100ExternalAdjacentAction(action, reason = "user_cancelled") {
  if (!isSafeN100ExternalAdjacentAction(action)) {
    return blockedAdjacentAction("invalid_external_adjacent_action", "The action failed safety validation.");
  }
  return Object.freeze({
    ...action,
    status: "cancelled",
    cancelReason: text(reason, "user_cancelled"),
    safeFailureResponse: "The action was cancelled. Nothing was sent or executed.",
    canExecute: false,
    executionAuthority: "none",
    noExecutionAuthorized: true
  });
}

function isSafeN100ExternalAdjacentAction(action) {
  if (!action || typeof action !== "object" || Array.isArray(action)) return false;
  if (action.schemaVersion !== SCHEMA_VERSION) return false;
  if (!action.actionId || !action.actionType || !action.status) return false;
  if (action.canExecute !== false || action.executionAuthority !== "none") return false;
  if (action.noExecutionAuthorized !== true || action.noProviderContactAuthorized !== true || action.noBackendWritePerformed !== true) return false;
  if (action.noStorageWritePerformed !== true || action.noFileWritePerformed !== true) return false;
  if (action.requiresConfirmation !== true || action.cancelAvailable !== true) return false;
  if (!action.safetyPosture || action.safetyPosture.noSendAuthorized !== true || action.safetyPosture.noPaymentAuthorized !== true) return false;
  const serialized = JSON.stringify(action);
  if (/(sendMail|sendMessage|phoneNumberToDial|telUrl|nativeBridge|paymentIntent|providerUrl|deepLink|executionAuthority":"provider")/.test(serialized)) return false;
  if (LOW_RISK_EXTERNAL_ADJACENT_ACTIONS.includes(action.actionType)) {
    return Array.isArray(action.blockedActions) && BLOCKED_ACTIONS.every(item => action.blockedActions.includes(item));
  }
  return action.status === "blocked_external_action";
}

module.exports = Object.freeze({
  SCHEMA_VERSION,
  LOW_RISK_EXTERNAL_ADJACENT_ACTIONS,
  PERMISSION_REQUIRED_ACTIONS,
  BLOCKED_ACTIONS,
  prepareN100ExternalAdjacentAction,
  confirmN100ExternalAdjacentAction,
  cancelN100ExternalAdjacentAction,
  isSafeN100ExternalAdjacentAction
});
