(function nexusCommunicationsPreparedActionPreviewContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusCommunicationsPreparedActionPreviewContract = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusCommunicationsPreparedActionPreviewContractModule() {
  const COMMUNICATION_PREVIEW_ACTION_TYPES = Object.freeze([
    "call",
    "message",
    "whatsapp",
    "telegram",
    "native_phone",
    "browser_tel",
    "sms",
    "email",
    "unsupported"
  ]);

  const COMMUNICATION_PREVIEW_PROVIDERS = Object.freeze([
    "none",
    "native-phone",
    "browser-tel",
    "whatsapp",
    "telegram",
    "sms",
    "email",
    "approved-communications-provider",
    "unsupported"
  ]);

  const COMMUNICATION_PREVIEW_REQUIRED_FIELDS = Object.freeze([
    "previewId",
    "phase",
    "actionType",
    "provider",
    "recipientDisplay",
    "purposePreview",
    "language",
    "riskTier",
    "permissionState",
    "auditState",
    "approvalState",
    "cancellationAvailable",
    "executionEnabled",
    "providerOpenAllowed",
    "backgroundExecutionAllowed",
    "standardUserExecutionAllowed"
  ]);

  const COMMUNICATION_PREVIEW_RESTRICTED_DOMAINS = Object.freeze([
    "healthcare",
    "pharmacy",
    "emergency",
    "payments",
    "marketplace_transactions",
    "transportation_dispatch",
    "minors_family_support"
  ]);

  const COMMUNICATION_PREVIEW_NO_EXECUTION_DEFAULTS = Object.freeze({
    executionEnabled: false,
    providerOpenAllowed: false,
    backgroundExecutionAllowed: false,
    standardUserExecutionAllowed: false,
    messageSendAllowed: false,
    callStartAllowed: false,
    whatsAppOpenAllowed: false,
    telegramOpenAllowed: false,
    nativePhoneOpenAllowed: false,
    browserTelOpenAllowed: false,
    smsSendAllowed: false,
    emailSendAllowed: false,
    providerContactAllowed: false,
    externalNavigationAllowed: false,
    liveActionEnabled: false
  });

  const COMMUNICATION_PREVIEW_CONTRACT = Object.freeze({
    previewId: "communications.prepared_action.phase_51a",
    phase: "51A",
    actionType: "unsupported",
    provider: "none",
    recipientDisplay: "Recipient must be resolved before any communication can be prepared.",
    purposePreview: "Communication purpose must be shown before approval.",
    language: "undetermined",
    riskTier: "high",
    permissionState: "permission_required",
    auditState: "audit_required",
    approvalState: "approval_required",
    cancellationAvailable: true,
    requiredFields: COMMUNICATION_PREVIEW_REQUIRED_FIELDS,
    allowedActionTypes: COMMUNICATION_PREVIEW_ACTION_TYPES,
    allowedProviders: COMMUNICATION_PREVIEW_PROVIDERS,
    restrictedDomains: COMMUNICATION_PREVIEW_RESTRICTED_DOMAINS,
    ...COMMUNICATION_PREVIEW_NO_EXECUTION_DEFAULTS
  });

  function normalizeActionType(value) {
    return COMMUNICATION_PREVIEW_ACTION_TYPES.includes(value) ? value : "unsupported";
  }

  function normalizeProvider(value) {
    return COMMUNICATION_PREVIEW_PROVIDERS.includes(value) ? value : "unsupported";
  }

  function createCommunicationsPreparedActionPreview(overrides = {}) {
    return Object.freeze({
      ...COMMUNICATION_PREVIEW_CONTRACT,
      ...overrides,
      actionType: normalizeActionType(overrides.actionType || COMMUNICATION_PREVIEW_CONTRACT.actionType),
      provider: normalizeProvider(overrides.provider || COMMUNICATION_PREVIEW_CONTRACT.provider),
      riskTier: "high",
      permissionState: overrides.permissionState || COMMUNICATION_PREVIEW_CONTRACT.permissionState,
      auditState: overrides.auditState || COMMUNICATION_PREVIEW_CONTRACT.auditState,
      approvalState: overrides.approvalState || COMMUNICATION_PREVIEW_CONTRACT.approvalState,
      cancellationAvailable: true,
      ...COMMUNICATION_PREVIEW_NO_EXECUTION_DEFAULTS
    });
  }

  return Object.freeze({
    COMMUNICATION_PREVIEW_ACTION_TYPES,
    COMMUNICATION_PREVIEW_PROVIDERS,
    COMMUNICATION_PREVIEW_REQUIRED_FIELDS,
    COMMUNICATION_PREVIEW_NO_EXECUTION_DEFAULTS,
    COMMUNICATION_PREVIEW_RESTRICTED_DOMAINS,
    COMMUNICATION_PREVIEW_CONTRACT,
    createCommunicationsPreparedActionPreview
  });
});
