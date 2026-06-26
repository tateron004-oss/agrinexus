(function nexusAgricultureSourceRegistryPhase102Factory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusAgricultureSourceRegistryPhase102 = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusAgricultureSourceRegistryPhase102Module() {
  "use strict";

  const REGISTRY_VERSION = "nexus.agricultureSourceRegistry.phase102.v1";
  const LIVE_DISABLED = Object.freeze({
    liveLookupEnabled: false,
    fetchEnabled: false,
    providerContactEnabled: false,
    locationSharingEnabled: false,
    marketplaceTransactionEnabled: false,
    paymentEnabled: false,
    diagnosisEnabled: false,
    executionEnabled: false
  });

  const sourceRegistry = Object.freeze([
    {
      sourceId: "agriculture.extension.advisory",
      label: "Agriculture extension advisory",
      category: "extension_advisory",
      trustedSourceType: "public_agriculture_extension",
      freshnessField: "sourceUpdatedAt",
      requiredCitationFields: ["sourceName", "sourceOwner", "sourceUpdatedAt", "region"],
      allowedUse: "source-backed crop and field guidance after verification",
      fallbackUse: "general guidance when no verified local source is available"
    },
    {
      sourceId: "agriculture.weather.climate",
      label: "Weather and climate agriculture guidance",
      category: "weather_climate",
      trustedSourceType: "public_weather_or_climate_authority",
      freshnessField: "issuedAt",
      requiredCitationFields: ["sourceName", "issuedAt", "validUntil", "region"],
      allowedUse: "weather-aware planting, irrigation, and drought preparedness context",
      fallbackUse: "general weather-risk planning language when no current source exists"
    },
    {
      sourceId: "agriculture.soil.fertilizer",
      label: "Soil and fertilizer guidance",
      category: "soil_fertilizer",
      trustedSourceType: "public_soil_or_agriculture_research",
      freshnessField: "sourceUpdatedAt",
      requiredCitationFields: ["sourceName", "sourceOwner", "sourceUpdatedAt", "crop", "region"],
      allowedUse: "soil and nutrient planning context after verification",
      fallbackUse: "general soil observation and local expert escalation"
    },
    {
      sourceId: "agriculture.irrigation.water",
      label: "Irrigation and water-resource guidance",
      category: "irrigation_water",
      trustedSourceType: "public_water_or_irrigation_authority",
      freshnessField: "sourceUpdatedAt",
      requiredCitationFields: ["sourceName", "sourceOwner", "sourceUpdatedAt", "region"],
      allowedUse: "irrigation timing and water conservation context after verification",
      fallbackUse: "general irrigation checks and water-safety caveats"
    },
    {
      sourceId: "agriculture.pest.disease",
      label: "Crop pest and disease advisory",
      category: "pest_disease",
      trustedSourceType: "public_crop_protection_authority",
      freshnessField: "sourceUpdatedAt",
      requiredCitationFields: ["sourceName", "sourceOwner", "sourceUpdatedAt", "crop", "region"],
      allowedUse: "symptom review and extension escalation guidance after verification",
      fallbackUse: "non-diagnostic crop stress review"
    },
    {
      sourceId: "agriculture.market.context",
      label: "Agriculture market context",
      category: "market_context",
      trustedSourceType: "public_market_board_or_commodity_source",
      freshnessField: "timestamp",
      requiredCitationFields: ["sourceName", "timestamp", "commodity", "market"],
      allowedUse: "market context and readiness guidance after verification",
      fallbackUse: "review-only selling preparation guidance"
    }
  ].map(source => Object.freeze({
    ...source,
    status: "source-ready",
    sourceBackedGuidanceAllowed: true,
    sourceVerificationRequired: true,
    userApprovalRequiredForPrivateData: true,
    auditEvents: ["source_candidate_selected", "freshness_checked", "citation_display_required", "unsafe_action_blocked"],
    noExecutionDisclosureRequired: true,
    ...LIVE_DISABLED
  })));

  function getAgricultureSourceRegistry() {
    return sourceRegistry.slice();
  }

  function findAgricultureSourceByCategory(category) {
    return sourceRegistry.find(source => source.category === category) || null;
  }

  function validateSourceCandidate(candidate) {
    if (!candidate || typeof candidate !== "object") return Object.freeze({ valid: false, reason: "missing_candidate" });
    const registrySource = sourceRegistry.find(source => source.sourceId === candidate.sourceId);
    if (!registrySource) return Object.freeze({ valid: false, reason: "unknown_source" });
    const missing = registrySource.requiredCitationFields.filter(field => !candidate[field]);
    if (missing.length) return Object.freeze({ valid: false, reason: "missing_citation_fields", missing });
    return Object.freeze({
      valid: true,
      reason: "source_candidate_ready_for_review",
      sourceId: registrySource.sourceId,
      category: registrySource.category,
      sourceBackedGuidanceAllowed: true,
      executionEnabled: false
    });
  }

  return Object.freeze({
    REGISTRY_VERSION,
    LIVE_DISABLED,
    getAgricultureSourceRegistry,
    findAgricultureSourceByCategory,
    validateSourceCandidate
  });
});
