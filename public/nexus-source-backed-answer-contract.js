(function nexusSourceBackedAnswerContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusSourceBackedAnswerContract = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusSourceBackedAnswerContractModule() {
  const DANGEROUS_DEFAULTS = Object.freeze({
    containsLiveData: false,
    externalActionAllowed: false,
    providerContactAllowed: false,
    paymentAllowed: false,
    prescriptionActionAllowed: false,
    medicalRecordAccessAllowed: false,
    emergencyDispatchAllowed: false,
    locationSharingAllowed: false,
    messageSendAllowed: false,
    callAllowed: false,
    appointmentSchedulingAllowed: false
  });

  const SOURCE_BACKED_ANSWER_CONTRACT = Object.freeze({
    answerText: "",
    normalizedIntent: "unsupported",
    userMode: "standard-user",
    language: "English",
    sources: [],
    sourceOwners: [],
    sourceUrlsReferences: [],
    sourceType: "none",
    sourceStatus: "not_connected_yet",
    freshness: { lastUpdated: null, staleAfter: null, freshnessLabel: "requires verified source" },
    confidence: "unverified",
    limitations: ["Requires verified source before live-data claims.", "Requires connector before external action."],
    connectorStatus: "not_connected_yet",
    liveDataConnected: false,
    userApprovalRequired: true,
    consentRequired: false,
    providerConfirmationRequired: false,
    auditRequired: true,
    ...DANGEROUS_DEFAULTS
  });

  function createSourceBackedAnswer(overrides = {}) {
    return Object.freeze({
      ...SOURCE_BACKED_ANSWER_CONTRACT,
      ...overrides,
      ...Object.fromEntries(Object.entries(DANGEROUS_DEFAULTS).map(([key, value]) => [key, overrides[key] === true ? true : value]))
    });
  }

  return Object.freeze({
    DANGEROUS_DEFAULTS,
    SOURCE_BACKED_ANSWER_CONTRACT,
    createSourceBackedAnswer
  });
});
