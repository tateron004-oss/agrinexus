(function nexusProviderContactPreparationContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusProviderContactPreparationContract = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusProviderContactPreparationContractModule() {
  const PROVIDER_CONTACT_PREPARATION_STATUSES = Object.freeze([
    "not_configured",
    "contact_source_required",
    "resolver_required",
    "provider_confirmation_required",
    "consent_policy_required",
    "audit_policy_required",
    "role_policy_required",
    "handoff_policy_required",
    "sandbox_testing_required",
    "approved_not_live",
    "rejected_or_blocked",
    "inactive"
  ]);

  const PROVIDER_CONTACT_CATEGORIES = Object.freeze([
    "provider_directory_contact",
    "clinic_contact",
    "telehealth_provider_contact",
    "pharmacy_contact",
    "transportation_contact",
    "workforce_support_contact",
    "marketplace_partner_contact",
    "community_service_contact",
    "emergency_contact_boundary",
    "restricted_contact_boundary"
  ]);

  const NO_EXECUTION_DEFAULTS = Object.freeze({
    noExecution: true,
    contactResolverEnabled: false,
    contactSourceEnabled: false,
    contactPersistenceEnabled: false,
    providerConfirmationEnabled: false,
    contactHandoffPreparationEnabled: false,
    runtimeContactAuthorityEnabled: false,
    providerExecutionEnabled: false,
    callExecutionEnabled: false,
    messageExecutionEnabled: false,
    whatsAppExecutionEnabled: false,
    smsExecutionEnabled: false,
    emailExecutionEnabled: false,
    healthActionEnabled: false,
    locationSharingEnabled: false,
    marketplaceTransactionEnabled: false,
    emergencyDispatchEnabled: false,
    externalNavigationEnabled: false,
    liveActionEnabled: false,
    contactResolved: false,
    contactSelected: false,
    providerConfirmed: false,
    handoffPrepared: false,
    providerContacted: false,
    callPlaced: false,
    messageSent: false,
    whatsAppOpened: false,
    smsSent: false,
    emailSent: false,
    healthActionPerformed: false,
    locationShared: false,
    marketplaceTransactionCompleted: false,
    emergencyDispatched: false,
    externalActionExecuted: false
  });

  const PROVIDER_CONTACT_PREPARATION_FIELDS = Object.freeze([
    "contactPreparationId",
    "sourceOwner",
    "preparationStatus",
    "contactCategories",
    "supportedRegions",
    "supportedLanguages",
    "contactSourceStatus",
    "resolverStatus",
    "providerConfirmationStatus",
    "consentPolicyStatus",
    "auditPolicyStatus",
    "rolePolicyStatus",
    "handoffPolicyStatus",
    "freshnessModel",
    "allowedResponseStates",
    "contactResolutionGate",
    "handoffPreparationGate",
    "contactCandidateSchema",
    "auditRequirements",
    "contactResolverEnabled",
    "providerConfirmationEnabled",
    "contactHandoffPreparationEnabled",
    "providerExecutionEnabled",
    "callExecutionEnabled",
    "messageExecutionEnabled",
    "liveActionEnabled",
    "noExecution"
  ]);

  const CONTACT_RESOLUTION_GATE_FIELDS = Object.freeze([
    "requiresKnownContactSource",
    "requiresTargetDisambiguation",
    "requiresMissingNumberPrompt",
    "requiresDuplicateSelection",
    "requiresProviderTypeValidation",
    "requiresPurposeDisclosure",
    "requiresConsentPolicy",
    "requiresAuditPolicy",
    "requiresNoRawPromptContact",
    "allowsRawPromptContact",
    "allowsAutomaticContactSelection",
    "allowsContactPersistence",
    "allowsProviderContact",
    "allowsExternalNavigation"
  ]);

  const HANDOFF_PREPARATION_GATE_FIELDS = Object.freeze([
    "requiresResolvedCandidate",
    "requiresProviderConfirmation",
    "requiresExplicitUserApproval",
    "requiresHandoffPolicy",
    "requiresAuditLogging",
    "requiresNoFirstTurnExecution",
    "requiresCancellationPath",
    "allowsCallExecution",
    "allowsMessageExecution",
    "allowsWhatsAppExecution",
    "allowsSmsExecution",
    "allowsEmailExecution",
    "allowsEmergencyDispatch",
    "allowsMarketplaceTransaction",
    "allowsExternalNavigation"
  ]);

  const CONTACT_CANDIDATE_SCHEMA_FIELDS = Object.freeze([
    "candidateId",
    "displayName",
    "contactCategory",
    "organizationName",
    "role",
    "region",
    "language",
    "sourceType",
    "sourceName",
    "freshnessStatus",
    "hasPhone",
    "hasMessageChannel",
    "redactedContactSummary",
    "consentRequired",
    "providerConfirmationRequired",
    "auditRequired"
  ]);

  const DEFAULT_CONTACT_RESOLUTION_GATE = Object.freeze({
    requiresKnownContactSource: true,
    requiresTargetDisambiguation: true,
    requiresMissingNumberPrompt: true,
    requiresDuplicateSelection: true,
    requiresProviderTypeValidation: true,
    requiresPurposeDisclosure: true,
    requiresConsentPolicy: true,
    requiresAuditPolicy: true,
    requiresNoRawPromptContact: true,
    allowsRawPromptContact: false,
    allowsAutomaticContactSelection: false,
    allowsContactPersistence: false,
    allowsProviderContact: false,
    allowsExternalNavigation: false
  });

  const DEFAULT_HANDOFF_PREPARATION_GATE = Object.freeze({
    requiresResolvedCandidate: true,
    requiresProviderConfirmation: true,
    requiresExplicitUserApproval: true,
    requiresHandoffPolicy: true,
    requiresAuditLogging: true,
    requiresNoFirstTurnExecution: true,
    requiresCancellationPath: true,
    allowsCallExecution: false,
    allowsMessageExecution: false,
    allowsWhatsAppExecution: false,
    allowsSmsExecution: false,
    allowsEmailExecution: false,
    allowsEmergencyDispatch: false,
    allowsMarketplaceTransaction: false,
    allowsExternalNavigation: false
  });

  const PROVIDER_CONTACT_PREPARATION_CONTRACT = Object.freeze({
    contactPreparationId: "provider.contact_preparation.not_configured",
    sourceOwner: "provider contact source approval required",
    preparationStatus: "not_configured",
    contactCategories: Object.freeze([]),
    supportedRegions: Object.freeze([]),
    supportedLanguages: Object.freeze(["en"]),
    contactSourceStatus: "not_reviewed",
    resolverStatus: "not_reviewed",
    providerConfirmationStatus: "not_reviewed",
    consentPolicyStatus: "not_reviewed",
    auditPolicyStatus: "not_reviewed",
    rolePolicyStatus: "not_reviewed",
    handoffPolicyStatus: "not_reviewed",
    freshnessModel: Object.freeze({
      freshnessField: "providerContactSourceLastReviewedAt",
      staleAfter: "provider-contact-source-specific",
      displayRequirement: "Show source, freshness, provider confirmation requirement, consent, audit, and execution-disabled boundary before preparing contact handoff context."
    }),
    allowedResponseStates: Object.freeze([
      "contact_source_needed_guidance",
      "contact_disambiguation_guidance",
      "missing_contact_detail_guidance",
      "provider_confirmation_required_fallback",
      "unavailable_contact_source_fallback"
    ]),
    contactResolutionGate: DEFAULT_CONTACT_RESOLUTION_GATE,
    handoffPreparationGate: DEFAULT_HANDOFF_PREPARATION_GATE,
    contactCandidateSchema: Object.freeze(CONTACT_CANDIDATE_SCHEMA_FIELDS.slice()),
    auditRequirements: Object.freeze([
      "contact-source-reviewed",
      "target-disambiguated",
      "provider-confirmation-required",
      "raw-prompt-contact-blocked",
      "execution-blocked"
    ]),
    ...NO_EXECUTION_DEFAULTS
  });

  function normalizePreparationStatus(value) {
    return PROVIDER_CONTACT_PREPARATION_STATUSES.includes(value) ? value : PROVIDER_CONTACT_PREPARATION_CONTRACT.preparationStatus;
  }

  function normalizeContactCategories(values) {
    if (!Array.isArray(values)) return [];
    return values.filter(value => PROVIDER_CONTACT_CATEGORIES.includes(value));
  }

  function createProviderContactPreparationContract(overrides = {}) {
    const preparationStatus = normalizePreparationStatus(overrides.preparationStatus);
    const contactCategories = normalizeContactCategories(overrides.contactCategories);
    return Object.freeze({
      ...PROVIDER_CONTACT_PREPARATION_CONTRACT,
      ...overrides,
      preparationStatus,
      contactCategories: Object.freeze(contactCategories),
      supportedRegions: Object.freeze(Array.isArray(overrides.supportedRegions) ? overrides.supportedRegions.slice() : []),
      supportedLanguages: Object.freeze(Array.isArray(overrides.supportedLanguages) ? overrides.supportedLanguages.slice() : ["en"]),
      contactResolutionGate: Object.freeze({
        ...DEFAULT_CONTACT_RESOLUTION_GATE,
        ...(overrides.contactResolutionGate || {}),
        allowsRawPromptContact: false,
        allowsAutomaticContactSelection: false,
        allowsContactPersistence: false,
        allowsProviderContact: false,
        allowsExternalNavigation: false
      }),
      handoffPreparationGate: Object.freeze({
        ...DEFAULT_HANDOFF_PREPARATION_GATE,
        ...(overrides.handoffPreparationGate || {}),
        allowsCallExecution: false,
        allowsMessageExecution: false,
        allowsWhatsAppExecution: false,
        allowsSmsExecution: false,
        allowsEmailExecution: false,
        allowsEmergencyDispatch: false,
        allowsMarketplaceTransaction: false,
        allowsExternalNavigation: false
      }),
      contactCandidateSchema: Object.freeze(CONTACT_CANDIDATE_SCHEMA_FIELDS.slice()),
      ...NO_EXECUTION_DEFAULTS
    });
  }

  return Object.freeze({
    PROVIDER_CONTACT_PREPARATION_STATUSES,
    PROVIDER_CONTACT_CATEGORIES,
    NO_EXECUTION_DEFAULTS,
    PROVIDER_CONTACT_PREPARATION_FIELDS,
    CONTACT_RESOLUTION_GATE_FIELDS,
    HANDOFF_PREPARATION_GATE_FIELDS,
    CONTACT_CANDIDATE_SCHEMA_FIELDS,
    DEFAULT_CONTACT_RESOLUTION_GATE,
    DEFAULT_HANDOFF_PREPARATION_GATE,
    PROVIDER_CONTACT_PREPARATION_CONTRACT,
    createProviderContactPreparationContract
  });
});
