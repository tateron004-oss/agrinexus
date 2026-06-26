(function nexusPublicDataConnectorBaselineFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusPublicDataConnectorBaseline = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusPublicDataConnectorBaselineModule() {
  const DISABLED_RUNTIME_FLAGS = Object.freeze({
    fetchEnabled: false,
    liveConnectionEnabled: false,
    executionEnabled: false,
    providerContactEnabled: false,
    paymentEnabled: false,
    medicalRecordAccessEnabled: false,
    emergencyDispatchEnabled: false,
    marketplaceTransactionEnabled: false,
    locationSharingEnabled: false
  });

  const requiredAttribution = Object.freeze([
    "show source owner",
    "show source category",
    "show last verified or unavailable freshness",
    "show stale-source warning before relying on source-backed guidance"
  ]);

  const requiredFreshness = Object.freeze({
    freshnessField: "lastVerifiedAt",
    staleAfter: "source-specific and must be configured before live use",
    displayRequirement: "Display freshness or unavailable-source fallback in user-facing source-backed answers."
  });

  const baselineSeeds = [
    ["public.agriculture.extension", "agriculture support", "Agriculture extension and advisory sources", "public agriculture agency or extension office", "agriculture_extension", ["crop", "region", "advisory", "sourceUpdatedAt"], "20"],
    ["public.agriculture.weather_climate", "agriculture support", "Weather and climate alert sources", "public weather or climate authority", "weather_climate", ["forecast", "alert", "region", "issuedAt"], "20"],
    ["public.agriculture.soil_irrigation", "agriculture support", "Soil, fertilizer, and irrigation sources", "public agriculture, water, or soil authority", "soil_irrigation", ["soilType", "waterGuidance", "region", "sourceUpdatedAt"], "20"],
    ["public.market.prices", "marketplace/AgriTrade", "Public market price sources", "public market board or commodity authority", "market_price", ["commodity", "market", "price", "timestamp"], "23"],
    ["public.provider.directory", "healthcare access", "Public provider directory sources", "public provider directory owner", "provider_directory", ["providerName", "serviceType", "region", "lastVerifiedAt"], "21"],
    ["public.health.clinic_directory", "healthcare access", "Public clinic and health access sources", "public health agency or clinic directory owner", "clinic_directory", ["clinicName", "services", "region", "lastVerifiedAt"], "21"],
    ["public.health.mobile_clinic_schedule", "mobile clinics", "Public mobile clinic schedule sources", "public health agency, mobile clinic operator, or NGO source", "mobile_clinic_schedule", ["route", "location", "serviceWindow", "scheduleUpdatedAt"], "24"],
    ["public.health.pharmacy_directory", "pharmacy support", "Public pharmacy directory sources", "public pharmacy directory owner or regulator", "pharmacy_directory", ["pharmacyName", "services", "region", "lastVerifiedAt"], "24"],
    ["public.transportation.resources", "transportation", "Public transportation resource sources", "public transit authority or community transport directory", "transportation_resource", ["route", "serviceArea", "eligibility", "lastUpdatedAt"], "25"],
    ["public.workforce.training", "workforce/jobs", "Public workforce and training program sources", "public workforce board, training provider, or education agency", "workforce_training", ["program", "eligibility", "schedule", "sourceUpdatedAt"], "22"],
    ["public.emergency.information", "emergency pathways", "Public emergency information sources", "public safety agency or official emergency information source", "emergency_information", ["jurisdiction", "service", "officialNumberOrGuidance", "lastVerifiedAt"], "26"],
    ["public.community.resources", "community resources", "Public community resource sources", "public agency, NGO, or community-service directory owner", "community_resource", ["organization", "service", "eligibility", "lastVerifiedAt"], "27"]
  ];

  const PUBLIC_DATA_CONNECTOR_BASELINE = Object.freeze(baselineSeeds.map(([connectorId, domain, displayName, sourceOwnerType, publicSourceCategory, expectedFields, futureRoadmapPhase]) => Object.freeze({
    connectorId,
    domain,
    displayName,
    sourceOwnerType,
    publicSourceCategory,
    publicPartnerRegulatedStatus: "public",
    integrationMethod: "metadata-only public source contract; no fetch, ingestion, or runtime loading in Phase 19",
    expectedFields,
    attributionRequirements: requiredAttribution.slice(),
    freshnessRequirements: { ...requiredFreshness },
    termsReviewRequirements: ["review public source terms", "confirm reuse permissions", "record attribution requirements before live use"],
    languageLocalizationRequirements: ["English baseline", "Spanish", "French", "Arabic", "Portuguese", "Swahili", "local language pack when source supports it"],
    permissionRequirements: ["none for public-source display", "user approval before contact, sharing, payment, booking, marketplace, provider, or regulated action"],
    auditRequirements: ["public-source-template-used", "source-owner-disclosed", "freshness-disclosed", "unavailable-source-fallback-used-when-needed"],
    allowedResponseStates: ["source_backed_guidance", "unavailable_source_fallback", "general_guidance"],
    forbiddenClaims: [
      "live provider availability without verified source",
      "completed provider contact",
      "completed payment",
      "completed marketplace transaction",
      "completed medical record access",
      "completed emergency dispatch",
      "precise location used or shared"
    ],
    futureRoadmapPhase,
    ...DISABLED_RUNTIME_FLAGS
  })));

  function getPublicDataConnectorBaseline() {
    return PUBLIC_DATA_CONNECTOR_BASELINE.slice();
  }

  return Object.freeze({
    DISABLED_RUNTIME_FLAGS,
    PUBLIC_DATA_CONNECTOR_BASELINE,
    getPublicDataConnectorBaseline
  });
});
