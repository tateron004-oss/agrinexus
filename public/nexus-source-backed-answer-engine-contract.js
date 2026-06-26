(function nexusSourceBackedAnswerEngineContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusSourceBackedAnswerEngineContract = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusSourceBackedAnswerEngineContractModule() {
  const RESPONSE_STATES = Object.freeze([
    "general_guidance",
    "source_backed_guidance",
    "provider_directory_result",
    "prepared_action_preview",
    "permission_required",
    "privacy_gate_required",
    "emergency_escalation_guidance",
    "blocked_or_unsupported",
    "unavailable_source_fallback"
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

  const CITATION_FIELDS = Object.freeze([
    "sourceId",
    "sourceOwner",
    "sourceType",
    "title",
    "reference",
    "lastVerifiedAt",
    "staleAfter",
    "freshnessLabel",
    "termsStatus",
    "region",
    "language"
  ]);

  const PROVENANCE_FIELDS = Object.freeze([
    "sourceStatus",
    "connectorStatus",
    "sourceBackedGuidanceAvailable",
    "liveDataConnected",
    "providerContacted",
    "userDataShared",
    "actionExecuted"
  ]);

  const SOURCE_BACKED_ANSWER_ENVELOPE = Object.freeze({
    responseState: "general_guidance",
    answerText: "",
    language: "English",
    serviceDomain: "core",
    sourceSummary: "general information; verified source required for local or live claims",
    citations: [],
    provenance: {
      sourceStatus: "not_connected_yet",
      connectorStatus: "not_connected_yet",
      sourceBackedGuidanceAvailable: false,
      liveDataConnected: false,
      providerContacted: false,
      userDataShared: false,
      actionExecuted: false
    },
    freshness: {
      lastVerifiedAt: null,
      staleAfter: null,
      freshnessLabel: "requires verified source"
    },
    confidence: "unverified",
    limitations: ["Source must be verified before local, live, provider-backed, or regulated claims."],
    permission: {
      userApprovalRequired: false,
      consentRequired: false,
      providerConfirmationRequired: false,
      privacyGateRequired: false
    },
    audit: {
      auditRequired: true,
      eventType: "response.answer_envelope_created",
      noExecutionEventRequired: true
    },
    ...NO_EXECUTION_DEFAULTS
  });

  function createSourceBackedAnswerEnvelope(overrides = {}) {
    const responseState = RESPONSE_STATES.includes(overrides.responseState) ? overrides.responseState : SOURCE_BACKED_ANSWER_ENVELOPE.responseState;
    const citations = Array.isArray(overrides.citations) ? overrides.citations.map(item => Object.freeze({ ...item })) : [];
    const sourceBackedState = responseState === "source_backed_guidance" || responseState === "provider_directory_result";
    return Object.freeze({
      ...SOURCE_BACKED_ANSWER_ENVELOPE,
      ...overrides,
      responseState,
      citations,
      provenance: Object.freeze({
        ...SOURCE_BACKED_ANSWER_ENVELOPE.provenance,
        ...(overrides.provenance || {}),
        sourceBackedGuidanceAvailable: sourceBackedState ? citations.length > 0 : Boolean(overrides.provenance?.sourceBackedGuidanceAvailable)
      }),
      freshness: Object.freeze({
        ...SOURCE_BACKED_ANSWER_ENVELOPE.freshness,
        ...(overrides.freshness || {})
      }),
      permission: Object.freeze({
        ...SOURCE_BACKED_ANSWER_ENVELOPE.permission,
        ...(overrides.permission || {})
      }),
      audit: Object.freeze({
        ...SOURCE_BACKED_ANSWER_ENVELOPE.audit,
        ...(overrides.audit || {})
      }),
      ...Object.fromEntries(Object.entries(NO_EXECUTION_DEFAULTS).map(([key, value]) => [key, value]))
    });
  }

  return Object.freeze({
    RESPONSE_STATES,
    NO_EXECUTION_DEFAULTS,
    CITATION_FIELDS,
    PROVENANCE_FIELDS,
    SOURCE_BACKED_ANSWER_ENVELOPE,
    createSourceBackedAnswerEnvelope
  });
});
