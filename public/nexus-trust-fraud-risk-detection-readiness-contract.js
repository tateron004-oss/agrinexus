(function nexusTrustFraudRiskDetectionReadinessContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory(); else root.NexusTrustFraudRiskDetectionReadinessContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusTrustFraudRiskDetectionReadinessContractModule() {
  const TRUST_FRAUD_RISK_DETECTION_ACTION_TYPES = Object.freeze(["explain_trust_fraud_risk_detection_boundary","review_trust_fraud_risk_detection_readiness","prepare_trust_fraud_risk_detection_summary","evaluate_trust_fraud_risk_detection_gate","unsupported"]);
  const TRUST_FRAUD_RISK_DETECTION_REQUIRED_PRECONDITIONS = Object.freeze([
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
  "trustfraudriskdetectionSpecificReadiness",
  "trustfraudriskdetectionHumanReviewPath"
]);
  const TRUST_FRAUD_RISK_DETECTION_RESTRICTED_DOMAINS = Object.freeze([
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
  const TRUST_FRAUD_RISK_DETECTION_NO_EXECUTION_DEFAULTS = Object.freeze({
    liveConnectorEnabled: false,
    providerExecutionEnabled: false,
    regulatedActionEnabled: false,
    silentActionAllowed: false,
    backgroundExecutionAllowed: false,
    standardUserRuntimeMutationAllowed: false,
    storageSideEffectAllowed: false,
    networkSideEffectAllowed: false,
    executionAllowed: false,
    liveActionEnabled: false
  });
  const TRUST_FRAUD_RISK_DETECTION_READINESS_CONTRACT = Object.freeze({
    contractId: "trust-fraud-risk-detection.readiness.phase_75", phase: "75", readinessStatus: "blocked", riskTier: "restricted", roadmapComponent: "risk engine", acceptanceTarget: "risky actions blocked", allowedActionTypes: TRUST_FRAUD_RISK_DETECTION_ACTION_TYPES, requiredPreconditions: TRUST_FRAUD_RISK_DETECTION_REQUIRED_PRECONDITIONS, restrictedDomains: TRUST_FRAUD_RISK_DETECTION_RESTRICTED_DOMAINS, auditRequirement: "audit_decision_record_required_before_activation", fallbackRequirement: "unsupported_or_unconfigured_paths_must_label_limits_or_fallback", nonAuthorityRequirement: "readiness_contract_must_not_claim_or_authorize_execution", ...TRUST_FRAUD_RISK_DETECTION_NO_EXECUTION_DEFAULTS
  });
  function normalizeActionType(value) { return TRUST_FRAUD_RISK_DETECTION_ACTION_TYPES.includes(value) ? value : "unsupported"; }
  function createTrustFraudRiskDetectionReadinessContract(overrides = {}) { return Object.freeze({ ...TRUST_FRAUD_RISK_DETECTION_READINESS_CONTRACT, ...overrides, actionType: normalizeActionType(overrides.actionType || "unsupported"), phase: "75", readinessStatus: "blocked", riskTier: "restricted", auditRequirement: "audit_decision_record_required_before_activation", fallbackRequirement: "unsupported_or_unconfigured_paths_must_label_limits_or_fallback", nonAuthorityRequirement: "readiness_contract_must_not_claim_or_authorize_execution", ...TRUST_FRAUD_RISK_DETECTION_NO_EXECUTION_DEFAULTS }); }
  return Object.freeze({ TRUST_FRAUD_RISK_DETECTION_ACTION_TYPES, TRUST_FRAUD_RISK_DETECTION_REQUIRED_PRECONDITIONS, TRUST_FRAUD_RISK_DETECTION_RESTRICTED_DOMAINS, TRUST_FRAUD_RISK_DETECTION_NO_EXECUTION_DEFAULTS, TRUST_FRAUD_RISK_DETECTION_READINESS_CONTRACT, createTrustFraudRiskDetectionReadinessContract });
});
