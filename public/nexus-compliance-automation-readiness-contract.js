(function nexusComplianceAutomationReadinessContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory(); else root.NexusComplianceAutomationReadinessContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusComplianceAutomationReadinessContractModule() {
  const COMPLIANCE_AUTOMATION_ACTION_TYPES = Object.freeze(["explain_compliance_automation_boundary","review_compliance_automation_readiness","prepare_compliance_automation_summary","evaluate_compliance_automation_gate","unsupported"]);
  const COMPLIANCE_AUTOMATION_REQUIRED_PRECONDITIONS = Object.freeze([
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
  "complianceautomationSpecificReadiness",
  "complianceautomationHumanReviewPath"
]);
  const COMPLIANCE_AUTOMATION_RESTRICTED_DOMAINS = Object.freeze([
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
  const COMPLIANCE_AUTOMATION_NO_EXECUTION_DEFAULTS = Object.freeze({
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
  const COMPLIANCE_AUTOMATION_READINESS_CONTRACT = Object.freeze({
    contractId: "compliance-automation.readiness.phase_96",
    phase: "96",
    readinessStatus: "blocked",
    riskTier: "restricted",
    roadmapComponent: "compliance workflows",
    acceptanceTarget: "evidence generated",
    allowedActionTypes: COMPLIANCE_AUTOMATION_ACTION_TYPES,
    requiredPreconditions: COMPLIANCE_AUTOMATION_REQUIRED_PRECONDITIONS,
    restrictedDomains: COMPLIANCE_AUTOMATION_RESTRICTED_DOMAINS,
    auditRequirement: "audit_decision_record_required_before_activation",
    fallbackRequirement: "unsupported_or_unconfigured_paths_must_label_limits_or_fallback",
    nonAuthorityRequirement: "readiness_contract_must_not_claim_or_authorize_execution",
    ...COMPLIANCE_AUTOMATION_NO_EXECUTION_DEFAULTS
  });

  function normalizeActionType(value) {
    return COMPLIANCE_AUTOMATION_ACTION_TYPES.includes(value) ? value : "unsupported";
  }

  function createComplianceAutomationReadinessContract(overrides = {}) {
    return Object.freeze({
      ...COMPLIANCE_AUTOMATION_READINESS_CONTRACT,
      ...overrides,
      actionType: normalizeActionType(overrides.actionType || "unsupported"),
      phase: "96",
      readinessStatus: "blocked",
      riskTier: "restricted",
      auditRequirement: "audit_decision_record_required_before_activation",
      fallbackRequirement: "unsupported_or_unconfigured_paths_must_label_limits_or_fallback",
      nonAuthorityRequirement: "readiness_contract_must_not_claim_or_authorize_execution",
      ...COMPLIANCE_AUTOMATION_NO_EXECUTION_DEFAULTS
    });
  }

  return Object.freeze({
    COMPLIANCE_AUTOMATION_ACTION_TYPES,
    COMPLIANCE_AUTOMATION_REQUIRED_PRECONDITIONS,
    COMPLIANCE_AUTOMATION_RESTRICTED_DOMAINS,
    COMPLIANCE_AUTOMATION_NO_EXECUTION_DEFAULTS,
    COMPLIANCE_AUTOMATION_READINESS_CONTRACT,
    createComplianceAutomationReadinessContract
  });
});
