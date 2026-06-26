(function nexusDataQualityMonitoringContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusDataQualityMonitoringContract = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusDataQualityMonitoringContractModule() {
  const SOURCE_QUALITY_STATES = Object.freeze([
    "ready",
    "stale",
    "conflicting",
    "incomplete",
    "unverified",
    "not_connected_yet",
    "source_unavailable",
    "blocked_for_safety"
  ]);

  const QUALITY_SIGNAL_TYPES = Object.freeze([
    "freshness_missing",
    "freshness_stale",
    "owner_missing",
    "terms_unreviewed",
    "region_mismatch",
    "language_mismatch",
    "required_field_missing",
    "conflicting_value",
    "connector_inactive",
    "regulated_data_without_consent",
    "unsafe_action_claim"
  ]);

  const CONFLICT_SEVERITY_LEVELS = Object.freeze([
    "none",
    "low",
    "medium",
    "high",
    "critical"
  ]);

  const WARNING_REQUIRED_STATES = Object.freeze([
    "stale",
    "conflicting",
    "incomplete",
    "unverified",
    "not_connected_yet",
    "source_unavailable",
    "blocked_for_safety"
  ]);

  const NO_EXECUTION_DEFAULTS = Object.freeze({
    noExecution: true,
    sourceRefreshStarted: false,
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

  const DATA_QUALITY_OBSERVATION_FIELDS = Object.freeze([
    "qualityState",
    "sourceId",
    "sourceOwner",
    "sourceType",
    "connectorStatus",
    "freshnessState",
    "lastVerifiedAt",
    "staleAfter",
    "qualitySignals",
    "missingFields",
    "conflictSeverity",
    "conflictSummary",
    "requiresHumanReview",
    "requiresSourceRefresh",
    "userFacingWarning",
    "fallbackResponseState",
    "auditEvent",
    "noExecution"
  ]);

  const QUALITY_AUDIT_EVENT_FIELDS = Object.freeze([
    "eventType",
    "sourceId",
    "qualityState",
    "qualitySignals",
    "conflictSeverity",
    "fallbackResponseState",
    "noExecution",
    "createdAt"
  ]);

  const DATA_QUALITY_OBSERVATION_CONTRACT = Object.freeze({
    qualityState: "not_connected_yet",
    sourceId: "",
    sourceOwner: "verified source required",
    sourceType: "unverified",
    connectorStatus: "not_connected_yet",
    freshnessState: "not_connected_yet",
    lastVerifiedAt: null,
    staleAfter: null,
    qualitySignals: Object.freeze(["connector_inactive"]),
    missingFields: Object.freeze([]),
    conflictSeverity: "none",
    conflictSummary: "",
    requiresHumanReview: false,
    requiresSourceRefresh: false,
    userFacingWarning: "This connector is not connected yet.",
    fallbackResponseState: "unavailable_source_fallback",
    auditEvent: Object.freeze({
      eventType: "source.quality_observed",
      sourceId: "",
      qualityState: "not_connected_yet",
      qualitySignals: Object.freeze(["connector_inactive"]),
      conflictSeverity: "none",
      fallbackResponseState: "unavailable_source_fallback",
      noExecution: true,
      createdAt: null
    }),
    ...NO_EXECUTION_DEFAULTS
  });

  function normalizeQualityState(value) {
    return SOURCE_QUALITY_STATES.includes(value) ? value : DATA_QUALITY_OBSERVATION_CONTRACT.qualityState;
  }

  function normalizeConflictSeverity(value) {
    return CONFLICT_SEVERITY_LEVELS.includes(value) ? value : DATA_QUALITY_OBSERVATION_CONTRACT.conflictSeverity;
  }

  function warningRequiredForQuality(qualityState, conflictSeverity) {
    return WARNING_REQUIRED_STATES.includes(qualityState) || ["low", "medium", "high", "critical"].includes(conflictSeverity);
  }

  function createDataQualityObservation(overrides = {}) {
    const qualityState = normalizeQualityState(overrides.qualityState);
    const conflictSeverity = normalizeConflictSeverity(overrides.conflictSeverity);
    const qualitySignals = Array.isArray(overrides.qualitySignals) ? overrides.qualitySignals.filter(signal => QUALITY_SIGNAL_TYPES.includes(signal)) : DATA_QUALITY_OBSERVATION_CONTRACT.qualitySignals.slice();
    const missingFields = Array.isArray(overrides.missingFields) ? overrides.missingFields.slice() : [];
    const warningRequired = warningRequiredForQuality(qualityState, conflictSeverity);
    return Object.freeze({
      ...DATA_QUALITY_OBSERVATION_CONTRACT,
      ...overrides,
      qualityState,
      qualitySignals: Object.freeze(qualitySignals),
      missingFields: Object.freeze(missingFields),
      conflictSeverity,
      requiresHumanReview: Boolean(overrides.requiresHumanReview) || ["high", "critical"].includes(conflictSeverity),
      requiresSourceRefresh: Boolean(overrides.requiresSourceRefresh) || qualityState === "stale",
      userFacingWarning: warningRequired ? (overrides.userFacingWarning || DATA_QUALITY_OBSERVATION_CONTRACT.userFacingWarning) : "",
      fallbackResponseState: qualityState === "ready" && conflictSeverity === "none" ? "source_backed_guidance" : (overrides.fallbackResponseState || DATA_QUALITY_OBSERVATION_CONTRACT.fallbackResponseState),
      auditEvent: Object.freeze({
        ...DATA_QUALITY_OBSERVATION_CONTRACT.auditEvent,
        ...(overrides.auditEvent || {}),
        sourceId: overrides.sourceId || DATA_QUALITY_OBSERVATION_CONTRACT.sourceId,
        qualityState,
        qualitySignals: Object.freeze(qualitySignals),
        conflictSeverity,
        fallbackResponseState: qualityState === "ready" && conflictSeverity === "none" ? "source_backed_guidance" : (overrides.fallbackResponseState || DATA_QUALITY_OBSERVATION_CONTRACT.fallbackResponseState),
        noExecution: true
      }),
      ...Object.fromEntries(Object.entries(NO_EXECUTION_DEFAULTS).map(([key, value]) => [key, value]))
    });
  }

  return Object.freeze({
    SOURCE_QUALITY_STATES,
    QUALITY_SIGNAL_TYPES,
    CONFLICT_SEVERITY_LEVELS,
    WARNING_REQUIRED_STATES,
    NO_EXECUTION_DEFAULTS,
    DATA_QUALITY_OBSERVATION_FIELDS,
    QUALITY_AUDIT_EVENT_FIELDS,
    DATA_QUALITY_OBSERVATION_CONTRACT,
    warningRequiredForQuality,
    createDataQualityObservation
  });
});
