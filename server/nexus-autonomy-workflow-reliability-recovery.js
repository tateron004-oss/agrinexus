const { BLOCKED_ACTIONS } = require("./nexus-autonomy-workflow-goal-classifier.js");

const AUTONOMY_WORKFLOW_RECOVERY_REASONS = Object.freeze([
  "cancelled",
  "expired_workflow",
  "provider_error",
  "missing_config",
  "empty_results",
  "stale_source",
  "blocked_action",
  "step_failed",
  "unsafe_retry_blocked"
]);

const RECOVERY_MESSAGES = Object.freeze({
  cancelled: "Workflow cancelled. No action was taken.",
  expired_workflow: "That workflow context expired. Start again when you are ready.",
  provider_error: "The read-only provider had a problem, so Nexus stopped safely and did not retry in the background.",
  missing_config: "The required read-only source is not configured yet. Nexus can keep the workflow in preparation mode only.",
  empty_results: "No source results were available. Nexus can refine the search or prepare a checklist, but nothing was executed.",
  stale_source: "The source looks stale. Nexus will label it as stale and ask you to verify before relying on it.",
  blocked_action: "That request would require real-world execution, so Nexus kept the workflow in preview-only mode.",
  step_failed: "This step could not complete safely. Nexus preserved the workflow state and did not fall back to execution.",
  unsafe_retry_blocked: "Automatic retry is blocked. You can choose a safe manual retry or change the request."
});

function text(value, fallback = "") {
  const normalized = String(value || "").trim().replace(/\s+/g, " ");
  return normalized || fallback;
}

function normalizeReason(reason) {
  const normalized = text(reason, "step_failed").toLowerCase().replace(/[\s-]+/g, "_");
  return AUTONOMY_WORKFLOW_RECOVERY_REASONS.includes(normalized) ? normalized : "step_failed";
}

function safeNextStepsFor(reason) {
  if (reason === "cancelled") return Object.freeze(["Start a new supported low-risk workflow when ready."]);
  if (reason === "expired_workflow") return Object.freeze(["Start the workflow again.", "Keep actions in preview-only mode."]);
  if (reason === "missing_config") return Object.freeze(["Use available general guidance.", "Wait for the read-only source to be configured."]);
  if (reason === "empty_results") return Object.freeze(["Try a clearer query.", "Ask for a checklist or comparison template."]);
  if (reason === "stale_source") return Object.freeze(["Verify the source manually.", "Ask for fresher source-backed information."]);
  if (reason === "blocked_action") return Object.freeze(["Choose an informational follow-up.", "Use manual review outside Nexus for real-world action."]);
  return Object.freeze(["Retry manually only if the source is safe.", "Ask Nexus for a checklist, summary, or draft."]);
}

function redactProviderError(error) {
  if (!error) return null;
  return Object.freeze({
    code: text(error.code || error.name || "provider_error", "provider_error"),
    safeMessage: text(error.safeMessage || "Provider error was captured without secrets or stack traces.", "Provider error was captured without secrets or stack traces.")
  });
}

function buildAutonomyWorkflowRecovery(input = {}) {
  const reason = normalizeReason(input.reason);
  const now = text(input.recoveredAt, new Date(input.now || Date.now()).toISOString());
  return Object.freeze({
    schemaVersion: "nexus.aut9.workflowReliabilityRecovery.v1",
    recoveryId: text(input.recoveryId, `aut9-${reason}`),
    reason,
    status: reason === "cancelled" ? "cancelled" : "safe_recovery",
    workflowId: text(input.workflowId || input.workflowState?.activeWorkflowId, ""),
    workflowType: text(input.workflowType || input.workflowState?.workflowType, ""),
    stepId: text(input.stepId || input.stepResult?.stepId, ""),
    providerStatus: text(input.providerStatus || input.stepResult?.providerStatus, "not_called"),
    userMessage: text(input.userMessage, RECOVERY_MESSAGES[reason]),
    safeNextSteps: safeNextStepsFor(reason),
    blockedActions: Object.freeze([...BLOCKED_ACTIONS]),
    retryPolicy: Object.freeze({
      automaticRetriesAllowed: false,
      maxAutomaticRetries: 0,
      userInitiatedRetryOnly: true,
      retryRequiresFreshSafetyCheck: true
    }),
    auditEvent: Object.freeze({
      eventType: "autonomy.workflow.recovery",
      reason,
      result: reason === "cancelled" ? "cancelled" : "blocked_or_recovered",
      noExecutionAuthorized: true,
      createdAt: now
    }),
    providerError: redactProviderError(input.error || input.providerError),
    sourceFreshness: text(input.sourceFreshness, reason === "stale_source" ? "stale" : "unknown"),
    noExecutionAuthorized: true,
    executionAuthority: false,
    noProviderContactAuthorized: true,
    noProviderHandoff: true,
    noLocationPermissionRequested: true,
    noPermissionPromptAuthorized: true,
    noBackendActionWritePerformed: true,
    noAutoRetry: true,
    noNavigationAuthorized: true,
    sessionOnly: true
  });
}

function isSafeAutonomyWorkflowRecovery(recovery) {
  return Boolean(
    recovery &&
    recovery.schemaVersion === "nexus.aut9.workflowReliabilityRecovery.v1" &&
    AUTONOMY_WORKFLOW_RECOVERY_REASONS.includes(recovery.reason) &&
    ["cancelled", "safe_recovery"].includes(recovery.status) &&
    typeof recovery.userMessage === "string" &&
    Array.isArray(recovery.safeNextSteps) &&
    Array.isArray(recovery.blockedActions) &&
    recovery.retryPolicy &&
    recovery.retryPolicy.automaticRetriesAllowed === false &&
    recovery.retryPolicy.maxAutomaticRetries === 0 &&
    recovery.retryPolicy.userInitiatedRetryOnly === true &&
    recovery.auditEvent &&
    recovery.auditEvent.noExecutionAuthorized === true &&
    recovery.noExecutionAuthorized === true &&
    recovery.executionAuthority === false &&
    recovery.noProviderContactAuthorized === true &&
    recovery.noProviderHandoff === true &&
    recovery.noLocationPermissionRequested === true &&
    recovery.noPermissionPromptAuthorized === true &&
    recovery.noBackendActionWritePerformed === true &&
    recovery.noAutoRetry === true &&
    recovery.noNavigationAuthorized === true &&
    recovery.sessionOnly === true
  );
}

module.exports = Object.freeze({
  AUTONOMY_WORKFLOW_RECOVERY_REASONS,
  buildAutonomyWorkflowRecovery,
  isSafeAutonomyWorkflowRecovery,
  normalizeReason
});
