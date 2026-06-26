(function nexusSecurityHardeningReadinessContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory(); else root.NexusSecurityHardeningReadinessContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusSecurityHardeningReadinessContractModule() {
  const SECURITY_HARDENING_ACTION_TYPES = Object.freeze(["explain_security_hardening_boundary","review_security_hardening_readiness","prepare_security_hardening_summary","evaluate_security_hardening_gate","unsupported"]);
  const SECURITY_HARDENING_REQUIRED_PRECONDITIONS = Object.freeze([
  "verifiedSourceOrPartner",
  "sourceAttribution",
  "freshnessLabel",
  "confidenceLabel",
  "userConsentBoundary",
  "roleAndPermissionCheck",
  "explicitUserApprovalForHighRisk",
  "cancellationPath",
  "auditDecisionRecord",
  "fallbackPath",
  "noUnsupportedLiveClaim",
  "noCompletedActionClaim",
  "regressionSuiteCoverage",
  "securityhardeningSpecificReadiness",
  "securityhardeningHumanReviewPath"
]);
  const SECURITY_HARDENING_RESTRICTED_DOMAINS = Object.freeze([
  "healthcare",
  "medical_records",
  "pharmacy",
  "payments",
  "location",
  "communications",
  "provider_contact",
  "marketplace_transactions",
  "emergency",
  "transportation_dispatch",
  "identity",
  "account_profile",
  "role_authorization",
  "regulated_execution"
]);
  const SECURITY_HARDENING_NO_EXECUTION_DEFAULTS = Object.freeze({
  "liveConnectorEnabled": false,
  "providerExecutionEnabled": false,
  "regulatedActionEnabled": false,
  "silentActionAllowed": false,
  "backgroundExecutionAllowed": false,
  "standardUserRuntimeMutationAllowed": false,
  "storageSideEffectAllowed": false,
  "networkSideEffectAllowed": false,
  "executionAllowed": false,
  "liveActionEnabled": false
});
  const SECURITY_HARDENING_READINESS_CONTRACT = Object.freeze({
    contractId: "security-hardening.readiness.phase_95",
    phase: "95",
    readinessStatus: "blocked",
    riskTier: "restricted",
    roadmapComponent: "security controls",
    acceptanceTarget: "risk reduced",
    allowedActionTypes: SECURITY_HARDENING_ACTION_TYPES,
    requiredPreconditions: SECURITY_HARDENING_REQUIRED_PRECONDITIONS,
    restrictedDomains: SECURITY_HARDENING_RESTRICTED_DOMAINS,
    auditRequirement: "audit_decision_record_required_before_activation",
    fallbackRequirement: "unsupported_or_unconfigured_paths_must_label_limits_or_fallback",
    nonAuthorityRequirement: "readiness_contract_must_not_claim_or_authorize_execution",
    ...SECURITY_HARDENING_NO_EXECUTION_DEFAULTS
  });

  function normalizeActionType(value) {
    return SECURITY_HARDENING_ACTION_TYPES.includes(value) ? value : "unsupported";
  }

  function createSecurityHardeningReadinessContract(overrides = {}) {
    return Object.freeze({
      ...SECURITY_HARDENING_READINESS_CONTRACT,
      ...overrides,
      actionType: normalizeActionType(overrides.actionType || "unsupported"),
      phase: "95",
      readinessStatus: "blocked",
      riskTier: "restricted",
      auditRequirement: "audit_decision_record_required_before_activation",
      fallbackRequirement: "unsupported_or_unconfigured_paths_must_label_limits_or_fallback",
      nonAuthorityRequirement: "readiness_contract_must_not_claim_or_authorize_execution",
      ...SECURITY_HARDENING_NO_EXECUTION_DEFAULTS
    });
  }

  return Object.freeze({
    SECURITY_HARDENING_ACTION_TYPES,
    SECURITY_HARDENING_REQUIRED_PRECONDITIONS,
    SECURITY_HARDENING_RESTRICTED_DOMAINS,
    SECURITY_HARDENING_NO_EXECUTION_DEFAULTS,
    SECURITY_HARDENING_READINESS_CONTRACT,
    createSecurityHardeningReadinessContract
  });
});
