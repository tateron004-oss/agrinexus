(function nexusEducationContentProviderConnectorContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusEducationContentProviderConnectorContract = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusEducationContentProviderConnectorContractModule() {
  const EDUCATION_CONTENT_PROVIDER_STATUSES = Object.freeze([
    "not_configured",
    "education_partner_verification_required",
    "content_catalog_required",
    "content_rights_review_required",
    "attribution_review_required",
    "freshness_rule_required",
    "localization_review_required",
    "accessibility_review_required",
    "sandbox_testing_required",
    "approved_not_live",
    "active_source_directory_only",
    "rejected_or_blocked",
    "inactive"
  ]);

  const EDUCATION_CONTENT_CATEGORIES = Object.freeze([
    "learning_content_catalog",
    "workforce_training_content",
    "agriculture_training_content",
    "technical_skills_content",
    "health_access_education_content",
    "digital_literacy_content",
    "language_learning_content",
    "accessibility_learning_content",
    "quiz_question_bank",
    "lesson_outline_source",
    "localized_content_source",
    "content_attribution_boundary"
  ]);

  const NO_EXECUTION_DEFAULTS = Object.freeze({
    noExecution: true,
    contentContextAllowed: false,
    sourceBackedContentAllowed: false,
    liveContentFetchEnabled: false,
    providerContactEnabled: false,
    enrollmentEnabled: false,
    progressMutationEnabled: false,
    certificateActionEnabled: false,
    paymentEnabled: false,
    liveActionEnabled: false,
    contentContextUsed: false,
    sourceBackedContentPresented: false,
    liveContentFetched: false,
    providerContacted: false,
    learnerEnrolled: false,
    progressMutated: false,
    certificateActionTaken: false,
    paymentExecuted: false,
    externalActionExecuted: false
  });

  const EDUCATION_CONTENT_PROVIDER_CONNECTOR_FIELDS = Object.freeze([
    "connectorId",
    "providerName",
    "sourceOwner",
    "connectorStatus",
    "contentCategories",
    "contentRegions",
    "supportedLanguages",
    "partnerVerificationStatus",
    "contentCatalogStatus",
    "contentRightsReviewStatus",
    "attributionReviewStatus",
    "freshnessRuleStatus",
    "localizationReviewStatus",
    "accessibilityReviewStatus",
    "freshnessModel",
    "regionalScope",
    "languageScope",
    "allowedResponseStates",
    "attributionGate",
    "contentReadinessGate",
    "auditRequirements",
    "auditEvent",
    "contentContextAllowed",
    "sourceBackedContentAllowed",
    "liveContentFetchEnabled",
    "providerContactEnabled",
    "enrollmentEnabled",
    "progressMutationEnabled",
    "certificateActionEnabled",
    "paymentEnabled",
    "liveActionEnabled",
    "noExecution"
  ]);

  const ATTRIBUTION_GATE_FIELDS = Object.freeze([
    "requiresSourceOwner",
    "requiresSourceCategory",
    "requiresRightsReview",
    "requiresFreshnessDisplay",
    "requiresLocalizationDisclosure",
    "requiresAccessibilityReview",
    "requiresAuditLogging",
    "allowsUnattributedContent",
    "allowsRightsUnreviewedContent",
    "allowsFreshnessHiddenContent",
    "allowsExternalNavigation"
  ]);

  const CONTENT_READINESS_GATE_FIELDS = Object.freeze([
    "requiresEducationPartnerVerification",
    "requiresContentCatalog",
    "requiresAttributionReview",
    "requiresFreshnessRule",
    "requiresLocalizationReview",
    "requiresAccessibilityReview",
    "requiresAuditLogging",
    "allowsContentContext",
    "allowsSourceBackedContent",
    "allowsLiveContentFetch",
    "allowsProviderContact",
    "allowsEnrollment",
    "allowsProgressMutation",
    "allowsCertificateAction",
    "allowsPaymentProcessing",
    "allowsExternalNavigation"
  ]);

  const EDUCATION_CONTENT_PROVIDER_AUDIT_EVENT_FIELDS = Object.freeze([
    "eventType",
    "connectorId",
    "connectorStatus",
    "contentCategories",
    "contentContextAllowed",
    "sourceBackedContentAllowed",
    "liveContentFetchEnabled",
    "providerContactEnabled",
    "enrollmentEnabled",
    "progressMutationEnabled",
    "certificateActionEnabled",
    "paymentEnabled",
    "noExecution",
    "createdAt"
  ]);

  const DEFAULT_ATTRIBUTION_GATE = Object.freeze({
    requiresSourceOwner: true,
    requiresSourceCategory: true,
    requiresRightsReview: true,
    requiresFreshnessDisplay: true,
    requiresLocalizationDisclosure: true,
    requiresAccessibilityReview: true,
    requiresAuditLogging: true,
    allowsUnattributedContent: false,
    allowsRightsUnreviewedContent: false,
    allowsFreshnessHiddenContent: false,
    allowsExternalNavigation: false
  });

  const DEFAULT_CONTENT_READINESS_GATE = Object.freeze({
    requiresEducationPartnerVerification: true,
    requiresContentCatalog: true,
    requiresAttributionReview: true,
    requiresFreshnessRule: true,
    requiresLocalizationReview: true,
    requiresAccessibilityReview: true,
    requiresAuditLogging: true,
    allowsContentContext: false,
    allowsSourceBackedContent: false,
    allowsLiveContentFetch: false,
    allowsProviderContact: false,
    allowsEnrollment: false,
    allowsProgressMutation: false,
    allowsCertificateAction: false,
    allowsPaymentProcessing: false,
    allowsExternalNavigation: false
  });

  const EDUCATION_CONTENT_PROVIDER_CONNECTOR_CONTRACT = Object.freeze({
    connectorId: "education.content_provider.not_configured",
    providerName: "",
    sourceOwner: "education content provider verification required",
    connectorStatus: "not_configured",
    contentCategories: Object.freeze([]),
    contentRegions: Object.freeze([]),
    supportedLanguages: Object.freeze(["en"]),
    partnerVerificationStatus: "not_started",
    contentCatalogStatus: "not_configured",
    contentRightsReviewStatus: "not_reviewed",
    attributionReviewStatus: "not_reviewed",
    freshnessRuleStatus: "not_configured",
    localizationReviewStatus: "not_reviewed",
    accessibilityReviewStatus: "not_reviewed",
    freshnessModel: Object.freeze({
      freshnessField: "educationContentLastVerifiedAt",
      staleAfter: "education-content-provider-specific",
      displayRequirement: "Show education content source, rights review, attribution, freshness, and source-backed boundary before relying on content context."
    }),
    regionalScope: "not reviewed",
    languageScope: "not reviewed",
    allowedResponseStates: Object.freeze(["education_source_guidance", "content_catalog_guidance", "lesson_outline_guidance", "localized_learning_guidance", "unavailable_source_fallback"]),
    attributionGate: DEFAULT_ATTRIBUTION_GATE,
    contentReadinessGate: DEFAULT_CONTENT_READINESS_GATE,
    auditRequirements: Object.freeze(["education-content-provider-reviewed", "attribution-required", "freshness-required", "external-content-load-blocked", "learning-record-mutation-blocked"]),
    auditEvent: Object.freeze({
      eventType: "education.content_provider_connector_created",
      connectorId: "education.content_provider.not_configured",
      connectorStatus: "not_configured",
      contentCategories: Object.freeze([]),
      contentContextAllowed: false,
      sourceBackedContentAllowed: false,
      liveContentFetchEnabled: false,
      providerContactEnabled: false,
      enrollmentEnabled: false,
      progressMutationEnabled: false,
      certificateActionEnabled: false,
      paymentEnabled: false,
      noExecution: true,
      createdAt: null
    }),
    ...NO_EXECUTION_DEFAULTS
  });

  function normalizeConnectorStatus(value) {
    return EDUCATION_CONTENT_PROVIDER_STATUSES.includes(value) ? value : EDUCATION_CONTENT_PROVIDER_CONNECTOR_CONTRACT.connectorStatus;
  }

  function createEducationContentProviderConnector(overrides = {}) {
    const connectorStatus = normalizeConnectorStatus(overrides.connectorStatus);
    const contentCategories = Array.isArray(overrides.contentCategories)
      ? overrides.contentCategories.filter(category => EDUCATION_CONTENT_CATEGORIES.includes(category))
      : [];
    return Object.freeze({
      ...EDUCATION_CONTENT_PROVIDER_CONNECTOR_CONTRACT,
      ...overrides,
      connectorStatus,
      contentCategories: Object.freeze(contentCategories),
      contentRegions: Object.freeze(Array.isArray(overrides.contentRegions) ? overrides.contentRegions.slice() : []),
      supportedLanguages: Object.freeze(Array.isArray(overrides.supportedLanguages) ? overrides.supportedLanguages.slice() : ["en"]),
      attributionGate: Object.freeze({
        ...DEFAULT_ATTRIBUTION_GATE,
        ...(overrides.attributionGate || {}),
        allowsUnattributedContent: false,
        allowsRightsUnreviewedContent: false,
        allowsFreshnessHiddenContent: false,
        allowsExternalNavigation: false
      }),
      contentReadinessGate: Object.freeze({
        ...DEFAULT_CONTENT_READINESS_GATE,
        ...(overrides.contentReadinessGate || {}),
        allowsContentContext: false,
        allowsSourceBackedContent: false,
        allowsLiveContentFetch: false,
        allowsProviderContact: false,
        allowsEnrollment: false,
        allowsProgressMutation: false,
        allowsCertificateAction: false,
        allowsPaymentProcessing: false,
        allowsExternalNavigation: false
      }),
      auditEvent: Object.freeze({
        ...EDUCATION_CONTENT_PROVIDER_CONNECTOR_CONTRACT.auditEvent,
        ...(overrides.auditEvent || {}),
        connectorId: overrides.connectorId || EDUCATION_CONTENT_PROVIDER_CONNECTOR_CONTRACT.connectorId,
        connectorStatus,
        contentCategories: Object.freeze(contentCategories),
        contentContextAllowed: false,
        sourceBackedContentAllowed: false,
        liveContentFetchEnabled: false,
        providerContactEnabled: false,
        enrollmentEnabled: false,
        progressMutationEnabled: false,
        certificateActionEnabled: false,
        paymentEnabled: false,
        noExecution: true
      }),
      ...NO_EXECUTION_DEFAULTS
    });
  }

  return Object.freeze({
    EDUCATION_CONTENT_PROVIDER_STATUSES,
    EDUCATION_CONTENT_CATEGORIES,
    NO_EXECUTION_DEFAULTS,
    EDUCATION_CONTENT_PROVIDER_CONNECTOR_FIELDS,
    ATTRIBUTION_GATE_FIELDS,
    CONTENT_READINESS_GATE_FIELDS,
    EDUCATION_CONTENT_PROVIDER_AUDIT_EVENT_FIELDS,
    DEFAULT_ATTRIBUTION_GATE,
    DEFAULT_CONTENT_READINESS_GATE,
    EDUCATION_CONTENT_PROVIDER_CONNECTOR_CONTRACT,
    createEducationContentProviderConnector
  });
});

