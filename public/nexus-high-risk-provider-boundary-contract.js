(function nexusHighRiskProviderBoundaryContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusHighRiskProviderBoundaryContract = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusHighRiskProviderBoundaryContractModule() {
  const HIGH_RISK_PROVIDER_STATUSES = Object.freeze([
    "not_configured",
    "communications_provider_review_required",
    "payment_provider_review_required",
    "emergency_partner_review_required",
    "credential_review_required",
    "consent_policy_review_required",
    "audit_policy_review_required",
    "handoff_policy_review_required",
    "sandbox_testing_required",
    "approved_not_live",
    "rejected_or_blocked",
    "inactive"
  ]);

  const HIGH_RISK_PROVIDER_CATEGORIES = Object.freeze([
    "outbound_call_provider",
    "outbound_message_provider",
    "whatsapp_handoff_provider",
    "sms_provider",
    "email_provider",
    "payment_processor",
    "wallet_provider",
    "marketplace_payment_provider",
    "emergency_response_partner",
    "public_safety_partner",
    "crisis_line_directory",
    "restricted_provider_boundary"
  ]);

  const NO_EXECUTION_DEFAULTS = Object.freeze({
    noExecution: true,
    communicationContextAllowed: false,
    paymentContextAllowed: false,
    emergencyContextAllowed: false,
    liveProviderConnectionEnabled: false,
    providerContactEnabled: false,
    callExecutionEnabled: false,
    messageExecutionEnabled: false,
    whatsAppExecutionEnabled: false,
    smsExecutionEnabled: false,
    emailExecutionEnabled: false,
    paymentExecutionEnabled: false,
    walletExecutionEnabled: false,
    marketplacePaymentEnabled: false,
    emergencyDispatchEnabled: false,
    publicSafetyDispatchEnabled: false,
    externalNavigationEnabled: false,
    credentialUseEnabled: false,
    liveActionEnabled: false,
    providerContacted: false,
    callPlaced: false,
    messageSent: false,
    whatsAppOpened: false,
    smsSent: false,
    emailSent: false,
    paymentProcessed: false,
    walletCharged: false,
    marketplacePaymentProcessed: false,
    emergencyDispatched: false,
    publicSafetyDispatched: false,
    externalActionExecuted: false
  });

  const HIGH_RISK_PROVIDER_BOUNDARY_FIELDS = Object.freeze([
    "connectorId",
    "providerName",
    "sourceOwner",
    "providerStatus",
    "providerCategories",
    "supportedRegions",
    "supportedLanguages",
    "credentialReviewStatus",
    "consentPolicyStatus",
    "auditPolicyStatus",
    "handoffPolicyStatus",
    "sandboxTestingStatus",
    "freshnessModel",
    "regionalScope",
    "languageScope",
    "allowedResponseStates",
    "consentGate",
    "highRiskExecutionGate",
    "auditRequirements",
    "auditEvent",
    "communicationContextAllowed",
    "paymentContextAllowed",
    "emergencyContextAllowed",
    "providerContactEnabled",
    "callExecutionEnabled",
    "messageExecutionEnabled",
    "paymentExecutionEnabled",
    "emergencyDispatchEnabled",
    "liveActionEnabled",
    "noExecution"
  ]);

  const CONSENT_GATE_FIELDS = Object.freeze([
    "requiresExplicitUserApproval",
    "requiresPurposeDisclosure",
    "requiresProviderVerification",
    "requiresCredentialReview",
    "requiresAuditLogging",
    "requiresPartnerConfirmation",
    "requiresNoFirstTurnExecution",
    "requiresCancellationPath",
    "allowsCommunicationProviderContact",
    "allowsPaymentProcessing",
    "allowsEmergencyDispatch",
    "allowsExternalNavigation",
    "allowsCredentialUse"
  ]);

  const HIGH_RISK_EXECUTION_GATE_FIELDS = Object.freeze([
    "requiresRiskReview",
    "requiresPolicyApproval",
    "requiresUserConfirmation",
    "requiresProviderConfirmation",
    "requiresCredentialReadiness",
    "requiresAuditLogging",
    "requiresRoleAuthorization",
    "requiresNoFirstTurnExecution",
    "requiresFallback",
    "allowsCallExecution",
    "allowsMessageExecution",
    "allowsPaymentExecution",
    "allowsEmergencyDispatch",
    "allowsPublicSafetyDispatch",
    "allowsLiveProviderConnection",
    "allowsExternalNavigation"
  ]);

  const HIGH_RISK_PROVIDER_AUDIT_EVENT_FIELDS = Object.freeze([
    "eventType",
    "connectorId",
    "providerStatus",
    "providerCategories",
    "communicationContextAllowed",
    "paymentContextAllowed",
    "emergencyContextAllowed",
    "providerContactEnabled",
    "callExecutionEnabled",
    "messageExecutionEnabled",
    "paymentExecutionEnabled",
    "emergencyDispatchEnabled",
    "publicSafetyDispatchEnabled",
    "credentialUseEnabled",
    "noExecution",
    "createdAt"
  ]);

  const DEFAULT_CONSENT_GATE = Object.freeze({
    requiresExplicitUserApproval: true,
    requiresPurposeDisclosure: true,
    requiresProviderVerification: true,
    requiresCredentialReview: true,
    requiresAuditLogging: true,
    requiresPartnerConfirmation: true,
    requiresNoFirstTurnExecution: true,
    requiresCancellationPath: true,
    allowsCommunicationProviderContact: false,
    allowsPaymentProcessing: false,
    allowsEmergencyDispatch: false,
    allowsExternalNavigation: false,
    allowsCredentialUse: false
  });

  const DEFAULT_HIGH_RISK_EXECUTION_GATE = Object.freeze({
    requiresRiskReview: true,
    requiresPolicyApproval: true,
    requiresUserConfirmation: true,
    requiresProviderConfirmation: true,
    requiresCredentialReadiness: true,
    requiresAuditLogging: true,
    requiresRoleAuthorization: true,
    requiresNoFirstTurnExecution: true,
    requiresFallback: true,
    allowsCallExecution: false,
    allowsMessageExecution: false,
    allowsPaymentExecution: false,
    allowsEmergencyDispatch: false,
    allowsPublicSafetyDispatch: false,
    allowsLiveProviderConnection: false,
    allowsExternalNavigation: false
  });

  const HIGH_RISK_PROVIDER_BOUNDARY_CONTRACT = Object.freeze({
    connectorId: "high_risk.provider_boundary.not_configured",
    providerName: "",
    sourceOwner: "high-risk provider approval required",
    providerStatus: "not_configured",
    providerCategories: Object.freeze([]),
    supportedRegions: Object.freeze([]),
    supportedLanguages: Object.freeze(["en"]),
    credentialReviewStatus: "not_reviewed",
    consentPolicyStatus: "not_reviewed",
    auditPolicyStatus: "not_reviewed",
    handoffPolicyStatus: "not_reviewed",
    sandboxTestingStatus: "not_started",
    freshnessModel: Object.freeze({
      freshnessField: "highRiskProviderLastReviewedAt",
      staleAfter: "provider-specific",
      displayRequirement: "Show provider approval, credential, consent, audit, and live-action-disabled boundary before preparing high-risk next steps."
    }),
    regionalScope: "not reviewed",
    languageScope: "not reviewed",
    allowedResponseStates: Object.freeze([
      "provider_readiness_guidance",
      "consent_needed_guidance",
      "payment_readiness_guidance",
      "emergency_boundary_guidance",
      "unavailable_provider_fallback"
    ]),
    consentGate: DEFAULT_CONSENT_GATE,
    highRiskExecutionGate: DEFAULT_HIGH_RISK_EXECUTION_GATE,
    auditRequirements: Object.freeze([
      "provider-boundary-reviewed",
      "explicit-consent-required",
      "credential-use-blocked",
      "communication-execution-blocked",
      "payment-execution-blocked",
      "emergency-dispatch-blocked"
    ]),
    auditEvent: Object.freeze({
      eventType: "high_risk.provider_boundary_created",
      connectorId: "high_risk.provider_boundary.not_configured",
      providerStatus: "not_configured",
      providerCategories: Object.freeze([]),
      communicationContextAllowed: false,
      paymentContextAllowed: false,
      emergencyContextAllowed: false,
      providerContactEnabled: false,
      callExecutionEnabled: false,
      messageExecutionEnabled: false,
      paymentExecutionEnabled: false,
      emergencyDispatchEnabled: false,
      publicSafetyDispatchEnabled: false,
      credentialUseEnabled: false,
      noExecution: true,
      createdAt: null
    }),
    ...NO_EXECUTION_DEFAULTS
  });

  function normalizeProviderStatus(value) {
    return HIGH_RISK_PROVIDER_STATUSES.includes(value) ? value : HIGH_RISK_PROVIDER_BOUNDARY_CONTRACT.providerStatus;
  }

  function createHighRiskProviderBoundary(overrides = {}) {
    const providerStatus = normalizeProviderStatus(overrides.providerStatus);
    const providerCategories = Array.isArray(overrides.providerCategories)
      ? overrides.providerCategories.filter(category => HIGH_RISK_PROVIDER_CATEGORIES.includes(category))
      : [];
    return Object.freeze({
      ...HIGH_RISK_PROVIDER_BOUNDARY_CONTRACT,
      ...overrides,
      providerStatus,
      providerCategories: Object.freeze(providerCategories),
      supportedRegions: Object.freeze(Array.isArray(overrides.supportedRegions) ? overrides.supportedRegions.slice() : []),
      supportedLanguages: Object.freeze(Array.isArray(overrides.supportedLanguages) ? overrides.supportedLanguages.slice() : ["en"]),
      consentGate: Object.freeze({
        ...DEFAULT_CONSENT_GATE,
        ...(overrides.consentGate || {}),
        allowsCommunicationProviderContact: false,
        allowsPaymentProcessing: false,
        allowsEmergencyDispatch: false,
        allowsExternalNavigation: false,
        allowsCredentialUse: false
      }),
      highRiskExecutionGate: Object.freeze({
        ...DEFAULT_HIGH_RISK_EXECUTION_GATE,
        ...(overrides.highRiskExecutionGate || {}),
        allowsCallExecution: false,
        allowsMessageExecution: false,
        allowsPaymentExecution: false,
        allowsEmergencyDispatch: false,
        allowsPublicSafetyDispatch: false,
        allowsLiveProviderConnection: false,
        allowsExternalNavigation: false
      }),
      auditEvent: Object.freeze({
        ...HIGH_RISK_PROVIDER_BOUNDARY_CONTRACT.auditEvent,
        ...(overrides.auditEvent || {}),
        connectorId: overrides.connectorId || HIGH_RISK_PROVIDER_BOUNDARY_CONTRACT.connectorId,
        providerStatus,
        providerCategories: Object.freeze(providerCategories),
        communicationContextAllowed: false,
        paymentContextAllowed: false,
        emergencyContextAllowed: false,
        providerContactEnabled: false,
        callExecutionEnabled: false,
        messageExecutionEnabled: false,
        paymentExecutionEnabled: false,
        emergencyDispatchEnabled: false,
        publicSafetyDispatchEnabled: false,
        credentialUseEnabled: false,
        noExecution: true
      }),
      ...NO_EXECUTION_DEFAULTS
    });
  }

  return Object.freeze({
    HIGH_RISK_PROVIDER_STATUSES,
    HIGH_RISK_PROVIDER_CATEGORIES,
    NO_EXECUTION_DEFAULTS,
    HIGH_RISK_PROVIDER_BOUNDARY_FIELDS,
    CONSENT_GATE_FIELDS,
    HIGH_RISK_EXECUTION_GATE_FIELDS,
    HIGH_RISK_PROVIDER_AUDIT_EVENT_FIELDS,
    DEFAULT_CONSENT_GATE,
    DEFAULT_HIGH_RISK_EXECUTION_GATE,
    HIGH_RISK_PROVIDER_BOUNDARY_CONTRACT,
    createHighRiskProviderBoundary
  });
});
