(function nexusCitationFreshnessConfidenceContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusCitationFreshnessConfidenceContract = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusCitationFreshnessConfidenceContractModule() {
  const FRESHNESS_STATES = Object.freeze([
    "current",
    "stale",
    "expired",
    "unknown",
    "not_connected_yet",
    "source_unavailable"
  ]);

  const CONFIDENCE_LEVELS = Object.freeze([
    "verified_high",
    "source_backed",
    "limited",
    "stale_source",
    "unverified",
    "unavailable"
  ]);

  const STALE_WARNING_STATES = Object.freeze([
    "stale",
    "expired",
    "unknown",
    "not_connected_yet",
    "source_unavailable"
  ]);

  const STALE_WARNING_CONFIDENCE_LEVELS = Object.freeze([
    "stale_source",
    "unverified",
    "unavailable"
  ]);

  const NO_EXECUTION_DEFAULTS = Object.freeze({
    noExecution: true,
    providerContacted: false,
    userDataShared: false,
    externalActionExecuted: false,
    paymentExecuted: false,
    marketplaceTransactionExecuted: false,
    medicalRecordAccessed: false,
    prescriptionSubmitted: false,
    emergencyDispatched: false,
    locationShared: false,
    callOrMessageSent: false
  });

  const CITATION_TRUST_LABEL_FIELDS = Object.freeze([
    "sourceId",
    "sourceOwner",
    "sourceType",
    "title",
    "reference",
    "freshnessState",
    "freshnessLabel",
    "confidenceLevel",
    "confidenceLabel",
    "lastVerifiedAt",
    "staleAfter",
    "termsStatus",
    "region",
    "language",
    "limitations",
    "staleWarningRequired",
    "userFacingDisclosure",
    "connectorStatus",
    "sourceBackedGuidanceAvailable",
    "noExecution"
  ]);

  const CITATION_TRUST_LABEL_CONTRACT = Object.freeze({
    sourceId: "",
    sourceOwner: "verified source required",
    sourceType: "unverified",
    title: "",
    reference: "not-live",
    freshnessState: "not_connected_yet",
    freshnessLabel: "requires verified source",
    confidenceLevel: "unverified",
    confidenceLabel: "unverified guidance",
    lastVerifiedAt: null,
    staleAfter: null,
    termsStatus: "review required",
    region: "not specified",
    language: "English",
    limitations: ["Source must be verified before current, local, provider-backed, or regulated claims."],
    staleWarningRequired: true,
    userFacingDisclosure: "I need a verified source before I can present this as current.",
    connectorStatus: "not_connected_yet",
    sourceBackedGuidanceAvailable: false,
    ...NO_EXECUTION_DEFAULTS
  });

  function requiresStaleWarning(freshnessState, confidenceLevel) {
    return STALE_WARNING_STATES.includes(freshnessState) || STALE_WARNING_CONFIDENCE_LEVELS.includes(confidenceLevel);
  }

  function normalizeFreshnessState(value) {
    return FRESHNESS_STATES.includes(value) ? value : CITATION_TRUST_LABEL_CONTRACT.freshnessState;
  }

  function normalizeConfidenceLevel(value) {
    return CONFIDENCE_LEVELS.includes(value) ? value : CITATION_TRUST_LABEL_CONTRACT.confidenceLevel;
  }

  function createCitationTrustLabel(overrides = {}) {
    const freshnessState = normalizeFreshnessState(overrides.freshnessState);
    const confidenceLevel = normalizeConfidenceLevel(overrides.confidenceLevel);
    const staleWarningRequired = requiresStaleWarning(freshnessState, confidenceLevel);
    return Object.freeze({
      ...CITATION_TRUST_LABEL_CONTRACT,
      ...overrides,
      freshnessState,
      confidenceLevel,
      staleWarningRequired,
      limitations: Object.freeze(Array.isArray(overrides.limitations) ? overrides.limitations.slice() : CITATION_TRUST_LABEL_CONTRACT.limitations.slice()),
      ...Object.fromEntries(Object.entries(NO_EXECUTION_DEFAULTS).map(([key, value]) => [key, value]))
    });
  }

  return Object.freeze({
    FRESHNESS_STATES,
    CONFIDENCE_LEVELS,
    STALE_WARNING_STATES,
    STALE_WARNING_CONFIDENCE_LEVELS,
    NO_EXECUTION_DEFAULTS,
    CITATION_TRUST_LABEL_FIELDS,
    CITATION_TRUST_LABEL_CONTRACT,
    requiresStaleWarning,
    createCitationTrustLabel
  });
});
