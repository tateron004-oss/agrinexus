(function nexusProviderOnboardingModelFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusProviderOnboardingModel = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusProviderOnboardingModelModule() {
  const providerCategories = [
    "agriculture extension offices", "farmer cooperatives", "crop disease/pest authorities", "weather/climate sources",
    "soil/fertilizer sources", "irrigation sources", "market price sources", "buyer/seller marketplace partners",
    "logistics providers", "workforce training providers", "certification providers", "job/employer partners",
    "clinics", "hospitals", "telehealth providers", "mobile clinic operators", "pharmacies", "prescription/eRx partners",
    "transportation providers", "payment processors", "medical record/FHIR/EHR partners", "public health agencies",
    "emergency response/public safety partners", "NGOs/community service organizations", "government service agencies",
    "education/training content providers", "language/localization partners"
  ];

  const PROVIDER_ONBOARDING_MODEL = Object.freeze(providerCategories.map(name => Object.freeze({
    categoryId: name.toLowerCase().replace(/[^a-z0-9]+/g, ".").replace(/^\.+|\.+$/g, ""),
    providerCategory: name,
    intakeFields: ["legal name", "service region", "service categories", "data owner", "technical contact", "compliance contact"],
    verificationRequirements: ["organization verified", "source ownership verified", "terms reviewed"],
    legalContactRequirements: ["data-use agreement", "support contact", "incident contact"],
    apiDataMethodOptions: ["REST API", "webhook", "SFTP", "partner portal", "manual review"],
    csvManualImportOptions: ["CSV upload", "spreadsheet import", "admin-reviewed manual entry"],
    freshnessRequirements: ["lastVerifiedAt", "sourceUpdatedAt", "staleAfter"],
    languageRequirements: ["English baseline", "Spanish", "French", "Arabic", "Portuguese", "Swahili", "regional language review when needed"],
    consentRequirements: ["user approval before personal data sharing", "regulated consent when applicable"],
    auditRequirements: ["source onboarding", "data refresh", "permission shown", "action approved or blocked"],
    goLiveChecklist: ["sandbox tested", "QA passed", "compliance approved", "audit enabled", "rollback plan ready"],
    disabledByDefault: true,
    testSandboxRequirementForRegulatedActions: true
  })));

  function getNexusProviderOnboardingModel() {
    return PROVIDER_ONBOARDING_MODEL.slice();
  }

  return Object.freeze({
    PROVIDER_ONBOARDING_MODEL,
    getNexusProviderOnboardingModel
  });
});
