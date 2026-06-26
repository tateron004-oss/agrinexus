(function nexusCommunicationsProviderExecutionReadinessGateFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusCommunicationsProviderExecutionReadinessGate = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusCommunicationsProviderExecutionReadinessGateModule() {
  const READINESS_STATUSES = Object.freeze([
    "blocked_until_gate_satisfied",
    "recipient_resolution_required",
    "provider_display_required",
    "purpose_preview_required",
    "language_confirmation_required",
    "explicit_approval_required",
    "audit_policy_required",
    "permission_policy_required",
    "provider_availability_required",
    "domain_restriction_review_required",
    "approved_not_live",
    "rejected_or_blocked",
    "inactive"
  ]);

  const COMMUNICATION_ACTION_TYPES = Object.freeze([
    "call",
    "message",
    "whatsapp",
    "telegram",
    "native_phone",
    "browser_tel",
    "sms",
    "email",
    "restricted_communication_boundary"
  ]);

  const RESTRICTED_DOMAIN_CATEGORIES = Object.freeze([
    "healthcare",
    "pharmacy",
    "emergency",
    "payments",
    "marketplace_transactions",
    "transportation_dispatch",
    "minors_family_support",
    "regulated_identity",
    "restricted_domain_boundary"
  ]);

  const NO_EXECUTION_DEFAULTS = Object.freeze({
    noExecution: true,
    phase51Blocked: true,
    readinessGateSatisfied: false,
    communicationsExecutionEnabled: false,
    providerExecutionEnabled: false,
    callExecutionEnabled: false,
    messageExecutionEnabled: false,
    whatsAppExecutionEnabled: false,
    telegramExecutionEnabled: false,
    nativePhoneExecutionEnabled: false,
    browserTelExecutionEnabled: false,
    smsExecutionEnabled: false,
    emailExecutionEnabled: false,
    backgroundCommunicationEnabled: false,
    silentSendEnabled: false,
    silentCallEnabled: false,
    hiddenProviderHandoffEnabled: false,
    providerApiEnabled: false,
    standardUserExecutionEnabled: false,
    adminBypassEnabled: false,
    liveActionEnabled: false,
    callPlaced: false,
    messageSent: false,
    whatsAppOpened: false,
    telegramOpened: false,
    nativePhoneOpened: false,
    browserTelOpened: false,
    smsSent: false,
    emailSent: false,
    providerContacted: false,
    externalActionExecuted: false
  });

  const READINESS_GATE_FIELDS = Object.freeze([
    "gateId",
    "phase",
    "gateStatus",
    "actionTypes",
    "restrictedDomains",
    "requiredPreconditions",
    "standardUserExpectations",
    "adminFullExpectations",
    "restrictedDomainRules",
    "auditRequirements",
    "permissionRequirements",
    "providerAvailabilityRequirements",
    "phase51Blocked",
    "readinessGateSatisfied",
    "communicationsExecutionEnabled",
    "providerExecutionEnabled",
    "liveActionEnabled",
    "noExecution"
  ]);

  const REQUIRED_PRECONDITION_FIELDS = Object.freeze([
    "resolvedRecipient",
    "visibleRecipientDisplay",
    "visibleProviderDisplay",
    "visibleActionType",
    "purposePreview",
    "languageConfirmation",
    "explicitUserApproval",
    "cancellationPath",
    "auditEvent",
    "permissionState",
    "providerAvailabilityState",
    "noBackgroundExecution",
    "noSilentSend",
    "noSilentCall",
    "noHiddenProviderHandoff"
  ]);

  const STANDARD_USER_EXPECTATION_FIELDS = Object.freeze([
    "mayPreviewContactOnly",
    "mayPrepareContactOnly",
    "mustNotExecuteCommunication",
    "mustNotTriggerProviderCommunicationAutomatically",
    "mustNotOpenWhatsAppSilently",
    "mustNotOpenPhoneSilently",
    "mustNotOpenSmsSilently",
    "mustNotOpenTelegramSilently"
  ]);

  const ADMIN_FULL_EXPECTATION_FIELDS = Object.freeze([
    "requiresExplicitApproval",
    "requiresAudit",
    "requiresHighRiskRestrictions",
    "cannotBypassConsent",
    "cannotBypassProviderReadiness",
    "cannotBypassDomainRestrictions"
  ]);

  const DEFAULT_REQUIRED_PRECONDITIONS = Object.freeze({
    resolvedRecipient: false,
    visibleRecipientDisplay: false,
    visibleProviderDisplay: false,
    visibleActionType: false,
    purposePreview: false,
    languageConfirmation: false,
    explicitUserApproval: false,
    cancellationPath: false,
    auditEvent: false,
    permissionState: false,
    providerAvailabilityState: false,
    noBackgroundExecution: true,
    noSilentSend: true,
    noSilentCall: true,
    noHiddenProviderHandoff: true
  });

  const DEFAULT_STANDARD_USER_EXPECTATIONS = Object.freeze({
    mayPreviewContactOnly: true,
    mayPrepareContactOnly: true,
    mustNotExecuteCommunication: true,
    mustNotTriggerProviderCommunicationAutomatically: true,
    mustNotOpenWhatsAppSilently: true,
    mustNotOpenPhoneSilently: true,
    mustNotOpenSmsSilently: true,
    mustNotOpenTelegramSilently: true
  });

  const DEFAULT_ADMIN_FULL_EXPECTATIONS = Object.freeze({
    requiresExplicitApproval: true,
    requiresAudit: true,
    requiresHighRiskRestrictions: true,
    cannotBypassConsent: true,
    cannotBypassProviderReadiness: true,
    cannotBypassDomainRestrictions: true
  });

  const COMMUNICATIONS_PROVIDER_EXECUTION_READINESS_GATE = Object.freeze({
    gateId: "communications.provider_execution.phase_50a",
    phase: "50A",
    gateStatus: "blocked_until_gate_satisfied",
    actionTypes: Object.freeze(COMMUNICATION_ACTION_TYPES.slice()),
    restrictedDomains: Object.freeze(RESTRICTED_DOMAIN_CATEGORIES.slice()),
    requiredPreconditions: DEFAULT_REQUIRED_PRECONDITIONS,
    standardUserExpectations: DEFAULT_STANDARD_USER_EXPECTATIONS,
    adminFullExpectations: DEFAULT_ADMIN_FULL_EXPECTATIONS,
    restrictedDomainRules: Object.freeze({
      healthcare: "requires health consent, no diagnosis, no medical advice, no provider contact without approval",
      pharmacy: "requires pharmacy connector, identity review, no refill or prescription action without approval",
      emergency: "requires legal and regional partner approval, no unsupported dispatch",
      payments: "requires payment provider, identity review, final approval, and receipt audit",
      marketplace_transactions: "requires buyer and seller confirmation, no transaction from messaging",
      transportation_dispatch: "requires location consent, transport provider readiness, and booking confirmation",
      minors_family_support: "requires guardian context review, consent, and extra safety language"
    }),
    auditRequirements: Object.freeze([
      "intent-recorded",
      "risk-tier-recorded",
      "recipient-resolution-recorded",
      "provider-display-recorded",
      "purpose-preview-recorded",
      "language-confirmation-recorded",
      "explicit-approval-recorded",
      "cancellation-path-recorded",
      "provider-availability-recorded",
      "execution-blocked-until-phase-51-gate-satisfied"
    ]),
    permissionRequirements: Object.freeze([
      "purpose-specific-permission-state",
      "channel-specific-user-approval",
      "no-background-permission-use",
      "no-silent-provider-open"
    ]),
    providerAvailabilityRequirements: Object.freeze([
      "provider-configured",
      "provider-credential-reviewed",
      "provider-region-supported",
      "provider-language-supported",
      "provider-fallback-defined"
    ]),
    ...NO_EXECUTION_DEFAULTS
  });

  function normalizeGateStatus(value) {
    return READINESS_STATUSES.includes(value) ? value : COMMUNICATIONS_PROVIDER_EXECUTION_READINESS_GATE.gateStatus;
  }

  function normalizeActionTypes(values) {
    if (!Array.isArray(values)) return COMMUNICATION_ACTION_TYPES.slice();
    return values.filter(value => COMMUNICATION_ACTION_TYPES.includes(value));
  }

  function normalizeRestrictedDomains(values) {
    if (!Array.isArray(values)) return RESTRICTED_DOMAIN_CATEGORIES.slice();
    return values.filter(value => RESTRICTED_DOMAIN_CATEGORIES.includes(value));
  }

  function createCommunicationsProviderExecutionReadinessGate(overrides = {}) {
    const gateStatus = normalizeGateStatus(overrides.gateStatus);
    const actionTypes = normalizeActionTypes(overrides.actionTypes);
    const restrictedDomains = normalizeRestrictedDomains(overrides.restrictedDomains);
    return Object.freeze({
      ...COMMUNICATIONS_PROVIDER_EXECUTION_READINESS_GATE,
      ...overrides,
      gateStatus,
      actionTypes: Object.freeze(actionTypes),
      restrictedDomains: Object.freeze(restrictedDomains),
      requiredPreconditions: Object.freeze({
        ...DEFAULT_REQUIRED_PRECONDITIONS,
        ...(overrides.requiredPreconditions || {}),
        noBackgroundExecution: true,
        noSilentSend: true,
        noSilentCall: true,
        noHiddenProviderHandoff: true
      }),
      standardUserExpectations: Object.freeze({
        ...DEFAULT_STANDARD_USER_EXPECTATIONS,
        ...(overrides.standardUserExpectations || {}),
        mustNotExecuteCommunication: true,
        mustNotTriggerProviderCommunicationAutomatically: true,
        mustNotOpenWhatsAppSilently: true,
        mustNotOpenPhoneSilently: true,
        mustNotOpenSmsSilently: true,
        mustNotOpenTelegramSilently: true
      }),
      adminFullExpectations: Object.freeze({
        ...DEFAULT_ADMIN_FULL_EXPECTATIONS,
        ...(overrides.adminFullExpectations || {}),
        requiresExplicitApproval: true,
        requiresAudit: true,
        requiresHighRiskRestrictions: true,
        cannotBypassConsent: true,
        cannotBypassProviderReadiness: true,
        cannotBypassDomainRestrictions: true
      }),
      ...NO_EXECUTION_DEFAULTS
    });
  }

  return Object.freeze({
    READINESS_STATUSES,
    COMMUNICATION_ACTION_TYPES,
    RESTRICTED_DOMAIN_CATEGORIES,
    NO_EXECUTION_DEFAULTS,
    READINESS_GATE_FIELDS,
    REQUIRED_PRECONDITION_FIELDS,
    STANDARD_USER_EXPECTATION_FIELDS,
    ADMIN_FULL_EXPECTATION_FIELDS,
    DEFAULT_REQUIRED_PRECONDITIONS,
    DEFAULT_STANDARD_USER_EXPECTATIONS,
    DEFAULT_ADMIN_FULL_EXPECTATIONS,
    COMMUNICATIONS_PROVIDER_EXECUTION_READINESS_GATE,
    createCommunicationsProviderExecutionReadinessGate
  });
});
