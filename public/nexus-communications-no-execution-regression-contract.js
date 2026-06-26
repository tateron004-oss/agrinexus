(function nexusCommunicationsNoExecutionRegressionContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusCommunicationsNoExecutionRegressionContract = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusCommunicationsNoExecutionRegressionContractModule() {
  const COMMUNICATIONS_NO_EXECUTION_PROMPTS = Object.freeze([
    "Call John",
    "Call my doctor",
    "Call Maria on WhatsApp",
    "Call Maria on Telegram",
    "Text John",
    "Email John",
    "Send WhatsApp to buyer",
    "Message the seller",
    "Call workforce support",
    "Call my emergency contact"
  ]);

  const COMMUNICATIONS_NO_EXECUTION_ALLOWED_OUTCOMES = Object.freeze([
    "clarify_recipient",
    "resolve_recipient",
    "permission_required",
    "approval_required",
    "preview_only",
    "blocked",
    "unsupported_provider"
  ]);

  const COMMUNICATIONS_NO_EXECUTION_FORBIDDEN_OUTCOMES = Object.freeze([
    "communication_executed",
    "provider_opened",
    "phone_opened",
    "whatsapp_opened",
    "telegram_opened",
    "sms_sent",
    "email_sent",
    "background_communication",
    "hidden_provider_handoff",
    "silent_call",
    "silent_send",
    "emergency_dispatched",
    "payment_processed",
    "marketplace_transaction_started",
    "location_shared",
    "camera_started"
  ]);

  const COMMUNICATIONS_NO_EXECUTION_REQUIRED_BOUNDARIES = Object.freeze([
    "noFirstTurnExecution",
    "requiresResolvedRecipient",
    "requiresVisibleProvider",
    "requiresPurposePreview",
    "requiresLanguageConfirmation",
    "requiresExplicitApproval",
    "requiresCancellationPath",
    "requiresAuditEvent",
    "requiresPermissionState",
    "requiresProviderAvailability",
    "blocksVagueConfirmation",
    "blocksBackgroundExecution",
    "blocksSilentSend",
    "blocksSilentCall",
    "blocksHiddenProviderHandoff"
  ]);

  const SAFE_BOUNDARY_DEFAULTS = Object.freeze(
    COMMUNICATIONS_NO_EXECUTION_REQUIRED_BOUNDARIES.reduce((acc, boundary) => {
      acc[boundary] = true;
      return acc;
    }, {})
  );

  const EXECUTION_FLAGS = Object.freeze({
    executionAllowed: false,
    providerOpenAllowed: false,
    nativeBridgeAllowed: false,
    externalNavigationAllowed: false,
    backgroundCommunicationAllowed: false,
    standardUserExecutionAllowed: false,
    liveActionEnabled: false
  });

  function createCommunicationsNoExecutionRegressionCase(overrides = {}) {
    const prompt = COMMUNICATIONS_NO_EXECUTION_PROMPTS.includes(overrides.prompt)
      ? overrides.prompt
      : "unsupported communication prompt";
    const expectedOutcome = COMMUNICATIONS_NO_EXECUTION_ALLOWED_OUTCOMES.includes(overrides.expectedOutcome)
      ? overrides.expectedOutcome
      : "blocked";

    return Object.freeze({
      phase: "51B",
      prompt,
      expectedOutcome,
      ...overrides,
      boundaries: Object.freeze({
        ...SAFE_BOUNDARY_DEFAULTS,
        ...(overrides.boundaries || {}),
        ...SAFE_BOUNDARY_DEFAULTS
      }),
      ...EXECUTION_FLAGS
    });
  }

  const COMMUNICATIONS_NO_EXECUTION_REGRESSION_CONTRACT = Object.freeze({
    phase: "51B",
    contractId: "communications.no_execution_regression.phase_51b",
    prompts: COMMUNICATIONS_NO_EXECUTION_PROMPTS,
    allowedOutcomes: COMMUNICATIONS_NO_EXECUTION_ALLOWED_OUTCOMES,
    forbiddenOutcomes: COMMUNICATIONS_NO_EXECUTION_FORBIDDEN_OUTCOMES,
    requiredBoundaries: COMMUNICATIONS_NO_EXECUTION_REQUIRED_BOUNDARIES,
    cases: Object.freeze(
      COMMUNICATIONS_NO_EXECUTION_PROMPTS.map(prompt =>
        createCommunicationsNoExecutionRegressionCase({ prompt, expectedOutcome: "approval_required" })
      )
    ),
    ...EXECUTION_FLAGS
  });

  return Object.freeze({
    COMMUNICATIONS_NO_EXECUTION_PROMPTS,
    COMMUNICATIONS_NO_EXECUTION_ALLOWED_OUTCOMES,
    COMMUNICATIONS_NO_EXECUTION_FORBIDDEN_OUTCOMES,
    COMMUNICATIONS_NO_EXECUTION_REQUIRED_BOUNDARIES,
    COMMUNICATIONS_NO_EXECUTION_REGRESSION_CONTRACT,
    createCommunicationsNoExecutionRegressionCase
  });
});
