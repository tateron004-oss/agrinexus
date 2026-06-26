(function nexusMultilingualDataLabelingContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusMultilingualDataLabelingContract = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusMultilingualDataLabelingContractModule() {
  const SUPPORTED_BASELINE_LANGUAGES = Object.freeze([
    Object.freeze({ code: "en", label: "English" }),
    Object.freeze({ code: "es", label: "Spanish" }),
    Object.freeze({ code: "fr", label: "French" }),
    Object.freeze({ code: "ar", label: "Arabic" }),
    Object.freeze({ code: "pt", label: "Portuguese" }),
    Object.freeze({ code: "sw", label: "Swahili" })
  ]);

  const LOCALIZATION_LABEL_STATUSES = Object.freeze([
    "not_labeled",
    "source_language_known",
    "translation_review_required",
    "machine_translation_draft",
    "human_review_required",
    "human_reviewed_not_live",
    "approved_for_source_backed_guidance",
    "rejected_or_blocked",
    "expired_or_needs_reverification"
  ]);

  const TRANSLATION_SOURCE_TYPES = Object.freeze([
    "original_source_language",
    "partner_provided_translation",
    "human_translator_review",
    "community_localization_review",
    "machine_translation_draft",
    "government_publication_translation",
    "clinical_interpreter_review_required",
    "not_provided"
  ]);

  const NO_EXECUTION_DEFAULTS = Object.freeze({
    noExecution: true,
    clinicalInterpretationCertified: false,
    regulatedUseAllowed: false,
    sourceBackedGuidanceAllowed: false,
    liveActionEnabled: false,
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

  const MULTILINGUAL_SOURCE_LABEL_FIELDS = Object.freeze([
    "labelId",
    "sourceId",
    "sourceLanguage",
    "targetLanguage",
    "supportedLanguages",
    "localizationStatus",
    "translationSourceType",
    "translationSourceOwner",
    "translationReviewStatus",
    "reviewedBy",
    "reviewedAt",
    "expiresAt",
    "region",
    "dialectOrLocale",
    "readingLevel",
    "accessibilityNotes",
    "clinicalInterpretationCertified",
    "regulatedUseAllowed",
    "sourceBackedGuidanceAllowed",
    "liveActionEnabled",
    "auditEvent",
    "noExecution"
  ]);

  const TRANSLATION_REVIEW_FIELDS = Object.freeze([
    "requiresHumanReview",
    "requiresQualifiedInterpreter",
    "requiresPartnerApproval",
    "requiresComplianceReview",
    "allowsSourceBackedGuidance",
    "allowsRegulatedUse",
    "allowsLiveAction",
    "reviewNotes"
  ]);

  const LOCALIZATION_AUDIT_EVENT_FIELDS = Object.freeze([
    "eventType",
    "labelId",
    "sourceId",
    "sourceLanguage",
    "targetLanguage",
    "localizationStatus",
    "translationSourceType",
    "noExecution",
    "createdAt"
  ]);

  const DEFAULT_TRANSLATION_REVIEW = Object.freeze({
    requiresHumanReview: true,
    requiresQualifiedInterpreter: false,
    requiresPartnerApproval: true,
    requiresComplianceReview: true,
    allowsSourceBackedGuidance: false,
    allowsRegulatedUse: false,
    allowsLiveAction: false,
    reviewNotes: ""
  });

  const MULTILINGUAL_SOURCE_LABEL_CONTRACT = Object.freeze({
    labelId: "",
    sourceId: "",
    sourceLanguage: "unknown",
    targetLanguage: "en",
    supportedLanguages: Object.freeze(["en"]),
    localizationStatus: "not_labeled",
    translationSourceType: "not_provided",
    translationSourceOwner: "translation source required",
    translationReviewStatus: "review required",
    reviewedBy: null,
    reviewedAt: null,
    expiresAt: null,
    region: "not specified",
    dialectOrLocale: "not specified",
    readingLevel: "not reviewed",
    accessibilityNotes: Object.freeze([]),
    translationReview: DEFAULT_TRANSLATION_REVIEW,
    auditEvent: Object.freeze({
      eventType: "source.localization_label_created",
      labelId: "",
      sourceId: "",
      sourceLanguage: "unknown",
      targetLanguage: "en",
      localizationStatus: "not_labeled",
      translationSourceType: "not_provided",
      noExecution: true,
      createdAt: null
    }),
    ...NO_EXECUTION_DEFAULTS
  });

  function supportedLanguageCodes() {
    return SUPPORTED_BASELINE_LANGUAGES.map(item => item.code);
  }

  function normalizeLanguageCode(value, fallback = "en") {
    return supportedLanguageCodes().includes(value) ? value : fallback;
  }

  function normalizeLocalizationStatus(value) {
    return LOCALIZATION_LABEL_STATUSES.includes(value) ? value : MULTILINGUAL_SOURCE_LABEL_CONTRACT.localizationStatus;
  }

  function normalizeTranslationSourceType(value) {
    return TRANSLATION_SOURCE_TYPES.includes(value) ? value : MULTILINGUAL_SOURCE_LABEL_CONTRACT.translationSourceType;
  }

  function createMultilingualSourceLabel(overrides = {}) {
    const sourceLanguage = normalizeLanguageCode(overrides.sourceLanguage, "unknown");
    const targetLanguage = normalizeLanguageCode(overrides.targetLanguage, "en");
    const localizationStatus = normalizeLocalizationStatus(overrides.localizationStatus);
    const translationSourceType = normalizeTranslationSourceType(overrides.translationSourceType);
    const supportedLanguages = Array.isArray(overrides.supportedLanguages)
      ? overrides.supportedLanguages.filter(code => supportedLanguageCodes().includes(code))
      : ["en"];
    return Object.freeze({
      ...MULTILINGUAL_SOURCE_LABEL_CONTRACT,
      ...overrides,
      sourceLanguage,
      targetLanguage,
      supportedLanguages: Object.freeze(supportedLanguages.length ? supportedLanguages : ["en"]),
      localizationStatus,
      translationSourceType,
      accessibilityNotes: Object.freeze(Array.isArray(overrides.accessibilityNotes) ? overrides.accessibilityNotes.slice() : []),
      translationReview: Object.freeze({
        ...DEFAULT_TRANSLATION_REVIEW,
        ...(overrides.translationReview || {}),
        allowsRegulatedUse: false,
        allowsLiveAction: false
      }),
      auditEvent: Object.freeze({
        ...MULTILINGUAL_SOURCE_LABEL_CONTRACT.auditEvent,
        ...(overrides.auditEvent || {}),
        labelId: overrides.labelId || MULTILINGUAL_SOURCE_LABEL_CONTRACT.labelId,
        sourceId: overrides.sourceId || MULTILINGUAL_SOURCE_LABEL_CONTRACT.sourceId,
        sourceLanguage,
        targetLanguage,
        localizationStatus,
        translationSourceType,
        noExecution: true
      }),
      ...Object.fromEntries(Object.entries(NO_EXECUTION_DEFAULTS).map(([key, value]) => [key, value]))
    });
  }

  return Object.freeze({
    SUPPORTED_BASELINE_LANGUAGES,
    LOCALIZATION_LABEL_STATUSES,
    TRANSLATION_SOURCE_TYPES,
    NO_EXECUTION_DEFAULTS,
    MULTILINGUAL_SOURCE_LABEL_FIELDS,
    TRANSLATION_REVIEW_FIELDS,
    LOCALIZATION_AUDIT_EVENT_FIELDS,
    DEFAULT_TRANSLATION_REVIEW,
    MULTILINGUAL_SOURCE_LABEL_CONTRACT,
    supportedLanguageCodes,
    createMultilingualSourceLabel
  });
});
