const crypto = require("node:crypto");
const { BLOCKED_REAL_WORLD_ACTIONS } = require("./nexus-n100-deep-workflow-engine.js");

const SCHEMA_VERSION = "nexus.n100.permissionConsentManager.v1";

const PERMISSION_CAPABILITIES = Object.freeze([
  "location",
  "notifications_reminders",
  "calendar",
  "email_message_draft",
  "contact_provider_handoff",
  "profile_account_write",
  "file_export",
  "marketplace_action",
  "payment_high_risk_blocked",
  "emergency_dispatch_high_risk_blocked"
]);

const HIGH_RISK_BLOCKED_CAPABILITIES = Object.freeze([
  "payment_high_risk_blocked",
  "emergency_dispatch_high_risk_blocked",
  "marketplace_action",
  "contact_provider_handoff"
]);

const SENSITIVE_BROWSER_CAPABILITIES = Object.freeze([
  "location",
  "notifications_reminders"
]);

function text(value, fallback = "") {
  const normalized = String(value || "").trim().replace(/\s+/g, " ");
  return normalized || fallback;
}

function nowIso(input = {}) {
  return input.nowIso || new Date(input.now || Date.now()).toISOString();
}

function stableId(prefix, value) {
  return `${prefix}-${crypto.createHash("sha256").update(String(value || "")).digest("hex").slice(0, 12)}`;
}

function normalizeCapability(value) {
  const normalized = text(value, "file_export").toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "");
  return PERMISSION_CAPABILITIES.includes(normalized) ? normalized : "file_export";
}

function permissionSafety(capability) {
  const highRisk = HIGH_RISK_BLOCKED_CAPABILITIES.includes(capability);
  return Object.freeze({
    highRiskBlocked: highRisk,
    browserPermissionRequiresExplicitUserFlow: SENSITIVE_BROWSER_CAPABILITIES.includes(capability),
    permissionGrantDoesNotExecuteAction: true,
    finalConfirmationStillRequired: true,
    canExecute: false,
    executionAuthority: "none",
    noSilentPermission: true,
    noBrowserGeolocationRequested: true,
    noProviderContactAuthorized: true,
    noBackendWritePerformed: true,
    noDispatchAuthorized: true
  });
}

function auditEvent(input = {}) {
  const capability = normalizeCapability(input.capability);
  const status = text(input.status, "requested");
  return Object.freeze({
    auditId: text(input.auditId, stableId("n100-permission-audit", `${capability}:${status}:${input.reason || ""}`)),
    auditEventType: "permission_consent_state",
    capability,
    status,
    createdAt: nowIso(input),
    redactedPayloadOnly: true,
    noExecutionAuthorized: true,
    noProviderContactAuthorized: true
  });
}

function createN100PermissionRequest(input = {}) {
  const capability = normalizeCapability(input.capability);
  const reason = text(input.reason, `Nexus needs permission to prepare ${capability.replace(/_/g, " ")}.`);
  return Object.freeze({
    schemaVersion: SCHEMA_VERSION,
    permissionId: text(input.permissionId, stableId("n100-permission", `${capability}:${reason}`)),
    capability,
    requestedBy: text(input.requestedBy, "Nexus"),
    reason,
    dataUsed: Object.freeze(Array.isArray(input.dataUsed) ? input.dataUsed.map(item => text(item)).filter(Boolean) : []),
    actionScope: text(input.actionScope, "single_user_confirmed_action"),
    reversible: input.reversible !== false,
    durationScope: text(input.durationScope, "current_session_or_single_action"),
    status: "requested",
    confirmedAt: null,
    deniedAt: null,
    revokedAt: null,
    auditEvent: auditEvent({ capability, status: "requested", reason, nowIso: input.nowIso }),
    blockedActions: Object.freeze([...BLOCKED_REAL_WORLD_ACTIONS]),
    safety: permissionSafety(capability),
    canExecute: false,
    executionAuthority: "none",
    noExecutionAuthorized: true,
    noProviderContactAuthorized: true,
    noBackendWritePerformed: true
  });
}

function grantN100Permission(request, input = {}) {
  if (!isSafeN100PermissionState(request)) return createN100PermissionRequest({ capability: "file_export", reason: "Recover invalid permission request" });
  return Object.freeze({
    ...request,
    status: request.safety.highRiskBlocked ? "blocked_high_risk" : "granted",
    confirmedAt: request.safety.highRiskBlocked ? null : nowIso(input),
    deniedAt: null,
    auditEvent: auditEvent({
      capability: request.capability,
      status: request.safety.highRiskBlocked ? "blocked_high_risk" : "granted",
      reason: request.reason,
      nowIso: input.nowIso
    }),
    permissionGrantDoesNotExecuteAction: true,
    finalConfirmationStillRequired: true,
    canExecute: false,
    executionAuthority: "none",
    noExecutionAuthorized: true
  });
}

function denyN100Permission(request, input = {}) {
  if (!isSafeN100PermissionState(request)) return createN100PermissionRequest({ capability: "file_export", reason: "Recover invalid permission request" });
  return Object.freeze({
    ...request,
    status: "denied",
    confirmedAt: null,
    deniedAt: nowIso(input),
    auditEvent: auditEvent({ capability: request.capability, status: "denied", reason: request.reason, nowIso: input.nowIso }),
    canExecute: false,
    executionAuthority: "none",
    noExecutionAuthorized: true
  });
}

function revokeN100Permission(request, input = {}) {
  if (!isSafeN100PermissionState(request)) return createN100PermissionRequest({ capability: "file_export", reason: "Recover invalid permission request" });
  return Object.freeze({
    ...request,
    status: "revoked",
    revokedAt: nowIso(input),
    auditEvent: auditEvent({ capability: request.capability, status: "revoked", reason: request.reason, nowIso: input.nowIso }),
    canExecute: false,
    executionAuthority: "none",
    noExecutionAuthorized: true
  });
}

function isSafeN100PermissionState(state) {
  if (!state || typeof state !== "object" || Array.isArray(state)) return false;
  if (state.schemaVersion !== SCHEMA_VERSION) return false;
  if (!state.permissionId || !PERMISSION_CAPABILITIES.includes(state.capability)) return false;
  if (!["requested", "granted", "denied", "revoked", "blocked_high_risk"].includes(state.status)) return false;
  if (state.canExecute !== false || state.executionAuthority !== "none") return false;
  if (state.noExecutionAuthorized !== true || state.noProviderContactAuthorized !== true || state.noBackendWritePerformed !== true) return false;
  if (!state.safety || state.safety.permissionGrantDoesNotExecuteAction !== true || state.safety.noSilentPermission !== true) return false;
  const serialized = JSON.stringify(state);
  if (/(getCurrentPosition|watchPosition|Notification\.requestPermission|phoneNumberToDial|paymentIntent|providerUrl|executionAuthority":"provider")/.test(serialized)) return false;
  return true;
}

module.exports = Object.freeze({
  SCHEMA_VERSION,
  PERMISSION_CAPABILITIES,
  HIGH_RISK_BLOCKED_CAPABILITIES,
  SENSITIVE_BROWSER_CAPABILITIES,
  createN100PermissionRequest,
  grantN100Permission,
  denyN100Permission,
  revokeN100Permission,
  isSafeN100PermissionState
});
