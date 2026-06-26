(function nexusPaymentWorkflowReadinessContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusPaymentWorkflowReadinessContract = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusPaymentWorkflowReadinessContractModule() {
  const PAYMENT_WORKFLOW_ACTION_TYPES = Object.freeze([
    "prepare_review",
    "select_processor",
    "request_final_approval",
    "process_payment",
    "refund_payment",
    "unsupported"
  ]);

  const PAYMENT_WORKFLOW_REQUIRED_PRECONDITIONS = Object.freeze([
    "resolvedPayer",
    "verifiedPayerIdentity",
    "visiblePayeeDisplay",
    "visibleAmount",
    "visibleCurrency",
    "paymentPurposePreview",
    "processorDisplay",
    "processorAvailabilityState",
    "feeDisclosure",
    "refundOrCancellationPolicy",
    "permissionState",
    "complianceState",
    "auditEvent",
    "explicitFinalUserApproval",
    "receiptRequirement",
    "cancellationPath",
    "noCredentialCollection",
    "noSilentCharge",
    "noHiddenProcessorHandoff"
  ]);

  const PAYMENT_WORKFLOW_RESTRICTED_DOMAINS = Object.freeze([
    "payments",
    "marketplace_transactions",
    "pharmacy",
    "healthcare",
    "transportation_dispatch",
    "account_identity",
    "minors_family_support",
    "regulated_records"
  ]);

  const PAYMENT_WORKFLOW_NO_EXECUTION_DEFAULTS = Object.freeze({
    paymentProcessingEnabled: false,
    paymentProcessorApiEnabled: false,
    credentialCollectionEnabled: false,
    walletHandoffEnabled: false,
    marketplaceCheckoutEnabled: false,
    refundEnabled: false,
    receiptGenerationEnabled: false,
    externalPaymentLinkAllowed: false,
    silentChargeAllowed: false,
    hiddenProcessorHandoffAllowed: false,
    standardUserPaymentExecutionAllowed: false,
    executionAllowed: false,
    liveActionEnabled: false
  });

  const PAYMENT_WORKFLOW_READINESS_CONTRACT = Object.freeze({
    contractId: "payment_workflow.readiness.phase_57",
    phase: "57",
    readinessStatus: "blocked",
    riskTier: "restricted",
    allowedActionTypes: PAYMENT_WORKFLOW_ACTION_TYPES,
    requiredPreconditions: PAYMENT_WORKFLOW_REQUIRED_PRECONDITIONS,
    restrictedDomains: PAYMENT_WORKFLOW_RESTRICTED_DOMAINS,
    identityRequirement: "verified_payer_identity_required",
    finalApprovalRequirement: "explicit_final_user_approval_required",
    receiptRequirement: "receipt_required_before_completion_claim",
    auditRequirement: "audit_event_required_before_execution",
    cancellationRequirement: "cancellation_path_required",
    ...PAYMENT_WORKFLOW_NO_EXECUTION_DEFAULTS
  });

  function normalizeActionType(value) {
    return PAYMENT_WORKFLOW_ACTION_TYPES.includes(value) ? value : "unsupported";
  }

  function createPaymentWorkflowReadinessContract(overrides = {}) {
    return Object.freeze({
      ...PAYMENT_WORKFLOW_READINESS_CONTRACT,
      ...overrides,
      actionType: normalizeActionType(overrides.actionType || "unsupported"),
      phase: "57",
      readinessStatus: "blocked",
      riskTier: "restricted",
      identityRequirement: "verified_payer_identity_required",
      finalApprovalRequirement: "explicit_final_user_approval_required",
      receiptRequirement: "receipt_required_before_completion_claim",
      auditRequirement: "audit_event_required_before_execution",
      cancellationRequirement: "cancellation_path_required",
      ...PAYMENT_WORKFLOW_NO_EXECUTION_DEFAULTS
    });
  }

  return Object.freeze({
    PAYMENT_WORKFLOW_ACTION_TYPES,
    PAYMENT_WORKFLOW_REQUIRED_PRECONDITIONS,
    PAYMENT_WORKFLOW_RESTRICTED_DOMAINS,
    PAYMENT_WORKFLOW_NO_EXECUTION_DEFAULTS,
    PAYMENT_WORKFLOW_READINESS_CONTRACT,
    createPaymentWorkflowReadinessContract
  });
});
