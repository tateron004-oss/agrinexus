(function nexusActionReversalFollowupReadinessContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusActionReversalFollowupReadinessContract = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusActionReversalFollowupReadinessContractModule() {
  const ACTION_REVERSAL_FOLLOWUP_ACTION_TYPES = Object.freeze([
    "show_status",
    "explain_cancellation_options",
    "request_cancel",
    "request_undo",
    "request_retry",
    "schedule_followup",
    "unsupported"
  ]);

  const ACTION_REVERSAL_FOLLOWUP_REQUIRED_PRECONDITIONS = Object.freeze([
    "originalActionId",
    "originalActionType",
    "originalActionResult",
    "originalProvider",
    "visibleCurrentStatus",
    "reversalCapability",
    "reversalWindow",
    "reversalConsequence",
    "userVisibleOutcome",
    "auditEvent",
    "permissionState",
    "providerAvailabilityState",
    "explicitUserApproval",
    "providerConfirmationWhenRequired",
    "cancellationPath",
    "failureFallback",
    "noSilentRollback",
    "noHiddenExternalMutation",
    "noUnsupportedUndoClaim"
  ]);

  const ACTION_REVERSAL_FOLLOWUP_RESTRICTED_DOMAINS = Object.freeze([
    "communications",
    "payments",
    "marketplace_transactions",
    "appointments",
    "pharmacy",
    "transportation_dispatch",
    "emergency_dispatch",
    "location",
    "medical_records",
    "provider_contact",
    "account_identity"
  ]);

  const ACTION_REVERSAL_FOLLOWUP_NO_EXECUTION_DEFAULTS = Object.freeze({
    resultLifecycleEnabled: false,
    cancelActionEnabled: false,
    undoActionEnabled: false,
    rollbackEnabled: false,
    retryEnabled: false,
    followUpSchedulingEnabled: false,
    providerCancellationEnabled: false,
    paymentRefundEnabled: false,
    externalStateMutationEnabled: false,
    standardUserReversalExecutionAllowed: false,
    executionAllowed: false,
    liveActionEnabled: false
  });

  const ACTION_REVERSAL_FOLLOWUP_READINESS_CONTRACT = Object.freeze({
    contractId: "action_reversal_followup.readiness.phase_60",
    phase: "60",
    readinessStatus: "blocked",
    riskTier: "high",
    allowedActionTypes: ACTION_REVERSAL_FOLLOWUP_ACTION_TYPES,
    requiredPreconditions: ACTION_REVERSAL_FOLLOWUP_REQUIRED_PRECONDITIONS,
    restrictedDomains: ACTION_REVERSAL_FOLLOWUP_RESTRICTED_DOMAINS,
    lifecycleRequirement: "visible_result_lifecycle_required",
    approvalRequirement: "explicit_user_approval_required_for_external_change",
    providerRequirement: "provider_confirmation_required_when_external_state_changes",
    auditRequirement: "audit_event_required_before_reversal_or_followup",
    outcomeRequirement: "user_visible_outcome_required",
    ...ACTION_REVERSAL_FOLLOWUP_NO_EXECUTION_DEFAULTS
  });

  function normalizeActionType(value) {
    return ACTION_REVERSAL_FOLLOWUP_ACTION_TYPES.includes(value) ? value : "unsupported";
  }

  function createActionReversalFollowupReadinessContract(overrides = {}) {
    return Object.freeze({
      ...ACTION_REVERSAL_FOLLOWUP_READINESS_CONTRACT,
      ...overrides,
      actionType: normalizeActionType(overrides.actionType || "unsupported"),
      phase: "60",
      readinessStatus: "blocked",
      riskTier: "high",
      lifecycleRequirement: "visible_result_lifecycle_required",
      approvalRequirement: "explicit_user_approval_required_for_external_change",
      providerRequirement: "provider_confirmation_required_when_external_state_changes",
      auditRequirement: "audit_event_required_before_reversal_or_followup",
      outcomeRequirement: "user_visible_outcome_required",
      ...ACTION_REVERSAL_FOLLOWUP_NO_EXECUTION_DEFAULTS
    });
  }

  return Object.freeze({
    ACTION_REVERSAL_FOLLOWUP_ACTION_TYPES,
    ACTION_REVERSAL_FOLLOWUP_REQUIRED_PRECONDITIONS,
    ACTION_REVERSAL_FOLLOWUP_RESTRICTED_DOMAINS,
    ACTION_REVERSAL_FOLLOWUP_NO_EXECUTION_DEFAULTS,
    ACTION_REVERSAL_FOLLOWUP_READINESS_CONTRACT,
    createActionReversalFollowupReadinessContract
  });
});
