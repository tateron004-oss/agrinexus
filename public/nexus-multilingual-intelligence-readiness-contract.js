(function nexusMultilingualIntelligenceReadinessContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) module.exports = factory(); else root.NexusMultilingualIntelligenceReadinessContract = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusMultilingualIntelligenceReadinessContractModule() {
  const MULTILINGUAL_INTELLIGENCE_SUPPORTED_LANGUAGES = Object.freeze([
    "English",
    "Spanish",
    "French",
    "Arabic",
    "Portuguese",
    "Swahili"
]);
  const MULTILINGUAL_INTELLIGENCE_ACTION_TYPES = Object.freeze(["explain_language_boundary", "review_language_options", "prepare_localized_response", "evaluate_language_partner", "unsupported"]);
  const MULTILINGUAL_INTELLIGENCE_REQUIRED_PRECONDITIONS = Object.freeze([
    "supportedLanguageList",
    "localeDetectionBoundary",
    "userSelectedLanguage",
    "translationReviewPath",
    "clinicalInterpretationBoundary",
    "sourceTracePreservedAcrossLanguage",
    "freshnessLabelPreservedAcrossLanguage",
    "confidenceLabelPreservedAcrossLanguage",
    "fallbackTextPath",
    "humanLanguageSupportEscalationCopy",
    "auditDecisionRecordForRegulatedLanguageUse",
    "noMedicalInterpretationClaim",
    "noProviderExecutionFromLanguageSwitch",
    "regressionSuiteCoverage"
]);
  const MULTILINGUAL_INTELLIGENCE_RESTRICTED_DOMAINS = Object.freeze([
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
    "role_authorization"
]);
  const MULTILINGUAL_INTELLIGENCE_NO_EXECUTION_DEFAULTS = Object.freeze({
    liveTranslationProviderEnabled: false,
    automaticLanguageSwitchingEnabled: false,
    clinicalInterpretationClaimAllowed: false,
    medicalTranslationCertificationClaimAllowed: false,
    providerExecutionFromLanguageSwitchEnabled: false,
    regulatedTranslationExecutionEnabled: false,
    standardUserLanguageEngineMutationAllowed: false,
    executionAllowed: false,
    liveActionEnabled: false
  });
  const MULTILINGUAL_INTELLIGENCE_READINESS_CONTRACT = Object.freeze({
    contractId: "multilingual_intelligence.readiness.phase_70", phase: "70", readinessStatus: "blocked", riskTier: "controlled", supportedLanguages: MULTILINGUAL_INTELLIGENCE_SUPPORTED_LANGUAGES, allowedActionTypes: MULTILINGUAL_INTELLIGENCE_ACTION_TYPES, requiredPreconditions: MULTILINGUAL_INTELLIGENCE_REQUIRED_PRECONDITIONS, restrictedDomains: MULTILINGUAL_INTELLIGENCE_RESTRICTED_DOMAINS, auditRequirement: "translation_audit_required_before_regulated_language_activation", fallbackRequirement: "unsupported_or_unreviewed_language_paths_must_fallback_safely", nonAuthorityRequirement: "language_support_must_not_authorize_execution", ...MULTILINGUAL_INTELLIGENCE_NO_EXECUTION_DEFAULTS });
  function normalizeActionType(value) { return MULTILINGUAL_INTELLIGENCE_ACTION_TYPES.includes(value) ? value : "unsupported"; }
  function createMultilingualIntelligenceReadinessContract(overrides = {}) { return Object.freeze({ ...MULTILINGUAL_INTELLIGENCE_READINESS_CONTRACT, ...overrides, actionType: normalizeActionType(overrides.actionType || "unsupported"), phase: "70", readinessStatus: "blocked", riskTier: "controlled", supportedLanguages: MULTILINGUAL_INTELLIGENCE_SUPPORTED_LANGUAGES, auditRequirement: "translation_audit_required_before_regulated_language_activation", fallbackRequirement: "unsupported_or_unreviewed_language_paths_must_fallback_safely", nonAuthorityRequirement: "language_support_must_not_authorize_execution", ...MULTILINGUAL_INTELLIGENCE_NO_EXECUTION_DEFAULTS }); }
  return Object.freeze({ MULTILINGUAL_INTELLIGENCE_SUPPORTED_LANGUAGES, MULTILINGUAL_INTELLIGENCE_ACTION_TYPES, MULTILINGUAL_INTELLIGENCE_REQUIRED_PRECONDITIONS, MULTILINGUAL_INTELLIGENCE_RESTRICTED_DOMAINS, MULTILINGUAL_INTELLIGENCE_NO_EXECUTION_DEFAULTS, MULTILINGUAL_INTELLIGENCE_READINESS_CONTRACT, createMultilingualIntelligenceReadinessContract });
});
