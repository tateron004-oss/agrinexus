(function nexusProviderSourceUniverseFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusProviderSourceUniverse = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusProviderSourceUniverseModule() {
  const categorySeeds = [
    ["agriculture.extension_offices", "agriculture extension offices", "public_partner", ["office name", "region", "services", "contact boundary"], ["public directory", "partner feed"], "17N"],
    ["agriculture.farmer_cooperatives", "farmer cooperatives", "partner", ["cooperative name", "memberships", "services"], ["partner onboarding", "CSV import"], "17N"],
    ["agriculture.crop_pest_authorities", "crop disease/pest authorities", "public_partner", ["crop", "pest", "region", "advisory"], ["public source", "expert feed"], "17N"],
    ["agriculture.weather_climate", "weather/climate sources", "public_source", ["forecast", "alert", "region", "timestamp"], ["public API contract"], "19"],
    ["agriculture.soil_fertilizer", "soil/fertilizer sources", "public_partner", ["soil type", "recommendation", "region"], ["public source", "partner lab feed"], "19"],
    ["agriculture.irrigation", "irrigation sources", "public_partner", ["water source", "guidance", "region"], ["public source", "partner feed"], "19"],
    ["market.price_sources", "market price sources", "public_partner", ["commodity", "market", "price", "timestamp"], ["public API", "partner feed"], "22"],
    ["market.buyer_seller_partners", "buyer/seller marketplace partners", "partner", ["buyer", "seller", "offer", "terms"], ["partner API", "manual import"], "35"],
    ["logistics.providers", "logistics providers", "partner", ["route", "capacity", "availability"], ["partner API", "CSV import"], "39"],
    ["workforce.training_providers", "workforce training providers", "public_partner", ["program", "eligibility", "schedule"], ["public catalog", "partner feed"], "41"],
    ["workforce.certification_providers", "certification providers", "partner", ["certificate", "issuer", "requirements"], ["partner feed"], "42"],
    ["workforce.job_employers", "job/employer partners", "partner", ["role", "employer", "requirements"], ["job feed", "partner API"], "43"],
    ["health.clinics", "clinics", "partner_regulated", ["clinic", "services", "availability"], ["partner API", "directory import"], "36"],
    ["health.hospitals", "hospitals", "public_partner_regulated", ["hospital", "services", "location"], ["public directory", "partner feed"], "36"],
    ["health.telehealth_providers", "telehealth providers", "partner_regulated", ["provider", "availability", "specialty"], ["telehealth API"], "37"],
    ["health.mobile_clinic_operators", "mobile clinic operators", "partner", ["route", "schedule", "operator"], ["schedule feed"], "38"],
    ["health.pharmacy_providers", "pharmacy providers", "public_partner_regulated", ["pharmacy", "services", "hours"], ["directory import", "partner API"], "39"],
    ["health.prescription_erx_partners", "prescription/eRx partners", "regulated", ["medication", "prescriber", "refill status"], ["regulated API", "FHIR"], "52"],
    ["transportation.providers", "transportation providers", "public_partner", ["route", "service", "eligibility"], ["public route source", "partner API"], "55"],
    ["finance.payment_processors", "payment processors", "approved_high_risk", ["processor", "quote", "receipt"], ["credentialed provider adapter"], "57"],
    ["health.fhir_ehr_partners", "medical record/FHIR/EHR partners", "regulated", ["patient", "scope", "record type"], ["SMART-on-FHIR", "OAuth"], "58"],
    ["public_health.agencies", "public health agencies", "public_partner", ["agency", "program", "guidance"], ["public source", "partner feed"], "24"],
    ["emergency.public_safety_partners", "emergency response/public safety partners", "approved_high_risk", ["jurisdiction", "service", "handoff path"], ["approved emergency adapter"], "59"],
    ["community.ngos_services", "NGOs/community service organizations", "public_partner", ["organization", "service", "eligibility"], ["public directory", "partner feed"], "44"],
    ["government.service_agencies", "government service agencies", "public_partner", ["agency", "service", "eligibility"], ["public source", "partner feed"], "44"],
    ["education.content_providers", "education/training content providers", "public_partner", ["course", "language", "level"], ["content feed", "partner import"], "43"],
    ["language.localization_partners", "language/localization partners", "partner", ["language", "region", "translation scope"], ["partner content", "review workflow"], "30"]
  ];

  const PROVIDER_SOURCE_UNIVERSE = Object.freeze(categorySeeds.map(([categoryId, sourceProviderType, publicPartnerRegulatedStatus, expectedDataFields, integrationMethods, phase]) => Object.freeze({
    categoryId,
    sourceProviderType,
    publicPartnerRegulatedStatus,
    expectedDataFields,
    integrationMethods,
    verificationRequirements: ["source owner verified", "terms reviewed", "freshness rule configured"],
    dataFreshnessRequirements: ["lastVerifiedAt", "staleAfter", "sourceUpdatedAt when available"],
    languageLocalizationNeeds: ["English baseline", "Spanish", "French", "Arabic", "Portuguese", "Swahili", "regional language pack when available"],
    permissionRequirements: ["user approval before action or external sharing"],
    consentRequirements: publicPartnerRegulatedStatus.includes("regulated") || publicPartnerRegulatedStatus.includes("high_risk") ? ["explicit consent required"] : ["consent required before personal data sharing"],
    auditRequirements: ["source-used", "freshness-shown", "action-blocked-or-approved"],
    legalComplianceRequirements: publicPartnerRegulatedStatus.includes("regulated") ? ["privacy/compliance review", "minimum necessary data"] : ["source terms and partner agreement"],
    actionCapabilities: ["answer", "prepare next step", "future provider/source handoff"],
    defaultExecutionEnabled: false,
    futureRoadmapPhases: [phase]
  })));

  function getNexusProviderSourceUniverse() {
    return PROVIDER_SOURCE_UNIVERSE.slice();
  }

  return Object.freeze({
    PROVIDER_SOURCE_UNIVERSE,
    getNexusProviderSourceUniverse
  });
});
