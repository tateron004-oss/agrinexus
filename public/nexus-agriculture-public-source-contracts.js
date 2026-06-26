(function nexusAgriculturePublicSourceContractsFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusAgriculturePublicSourceContracts = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusAgriculturePublicSourceContractsModule() {
  const DISABLED_FLAGS = Object.freeze({
    fetchEnabled: false,
    liveWeatherEnabled: false,
    liveMarketPriceEnabled: false,
    cropDiagnosisEnabled: false,
    providerContactEnabled: false,
    buyerSellerContactEnabled: false,
    marketplaceTransactionEnabled: false,
    paymentEnabled: false,
    logisticsDispatchEnabled: false,
    droneDispatchEnabled: false,
    locationSharingEnabled: false,
    executionEnabled: false
  });

  const commonForbiddenClaims = Object.freeze([
    "final crop diagnosis",
    "verified local condition without source freshness",
    "extension officer contacted",
    "buyer or seller contacted",
    "AgriTrade transaction completed",
    "payment processed",
    "logistics dispatched",
    "drone dispatched",
    "precise location shared"
  ]);

  const sourceSeeds = [
    {
      sourceId: "agriculture.extension.advisory",
      displayName: "Agriculture extension advisory source",
      sourceOwnerType: "public agriculture extension office or ministry agriculture source",
      agricultureSourceCategory: "extension_advisory",
      supportedFarmerQuestions: ["crop care", "field preparation", "post-harvest handling", "local extension guidance"],
      expectedDataFields: ["crop", "region", "advisory", "sourceUpdatedAt", "sourceOwner"]
    },
    {
      sourceId: "agriculture.weather.climate",
      displayName: "Weather and climate agriculture source",
      sourceOwnerType: "public weather service or climate authority",
      agricultureSourceCategory: "weather_climate",
      supportedFarmerQuestions: ["rain timing", "heat risk", "storm alerts", "planting weather"],
      expectedDataFields: ["region", "forecast", "alert", "issuedAt", "validUntil"]
    },
    {
      sourceId: "agriculture.soil.fertilizer",
      displayName: "Soil and fertilizer guidance source",
      sourceOwnerType: "public soil, fertilizer, or agriculture research authority",
      agricultureSourceCategory: "soil_fertilizer",
      supportedFarmerQuestions: ["soil condition", "fertilizer planning", "nutrient guidance", "soil testing next steps"],
      expectedDataFields: ["soilType", "crop", "region", "guidance", "sourceUpdatedAt"]
    },
    {
      sourceId: "agriculture.irrigation.water",
      displayName: "Irrigation and water-resource source",
      sourceOwnerType: "public water authority, irrigation board, or agriculture source",
      agricultureSourceCategory: "irrigation_water",
      supportedFarmerQuestions: ["irrigation timing", "water conservation", "dry-season planning", "water source safety"],
      expectedDataFields: ["region", "waterCondition", "irrigationGuidance", "sourceUpdatedAt"]
    },
    {
      sourceId: "agriculture.pest.disease",
      displayName: "Crop pest and disease authority source",
      sourceOwnerType: "public crop protection, plant health, or pest authority",
      agricultureSourceCategory: "pest_disease",
      supportedFarmerQuestions: ["pest symptoms", "disease risk", "field scouting", "when to contact extension"],
      expectedDataFields: ["crop", "symptom", "region", "advisory", "sourceUpdatedAt"]
    },
    {
      sourceId: "agriculture.crop.calendar",
      displayName: "Crop calendar and planting-window source",
      sourceOwnerType: "public agriculture calendar, research institute, or extension source",
      agricultureSourceCategory: "crop_calendar",
      supportedFarmerQuestions: ["planting window", "harvest timing", "seasonal tasks", "crop rotation"],
      expectedDataFields: ["crop", "region", "season", "taskWindow", "sourceUpdatedAt"]
    },
    {
      sourceId: "agriculture.market.context",
      displayName: "Public agriculture market context source",
      sourceOwnerType: "public market board or commodity information source",
      agricultureSourceCategory: "market_context",
      supportedFarmerQuestions: ["market context", "price source requirements", "selling preparation", "quality evidence"],
      expectedDataFields: ["commodity", "market", "context", "timestamp", "sourceOwner"]
    },
    {
      sourceId: "agriculture.cooperative.public_info",
      displayName: "Farmer cooperative public information source",
      sourceOwnerType: "public cooperative directory or farmer association source",
      agricultureSourceCategory: "cooperative_public_info",
      supportedFarmerQuestions: ["cooperative services", "farmer group support", "training access", "local resource navigation"],
      expectedDataFields: ["cooperativeName", "region", "services", "eligibility", "lastVerifiedAt"]
    }
  ];

  const AGRICULTURE_PUBLIC_SOURCE_CONTRACTS = Object.freeze(sourceSeeds.map(seed => Object.freeze({
    ...seed,
    domain: "agriculture support",
    sourceVerificationRequirements: ["source owner named", "public terms reviewed", "region covered", "freshness rule configured"],
    freshnessRequirements: {
      freshnessField: seed.expectedDataFields.includes("issuedAt") ? "issuedAt" : "sourceUpdatedAt",
      staleAfter: "source-specific; must be configured before source-backed local guidance",
      displayRequirement: "Show freshness or use unavailable_source_fallback before relying on local agriculture guidance."
    },
    regionalizationRequirements: ["country or region coverage required", "do not generalize across regions without disclosure", "show local applicability limits"],
    languageLocalizationRequirements: ["English baseline", "Spanish", "French", "Arabic", "Portuguese", "Swahili", "local language review where available"],
    allowedResponseStates: ["general_guidance", "source_backed_guidance", "unavailable_source_fallback", "prepared_action_preview"],
    forbiddenClaims: commonForbiddenClaims.slice(),
    permissionRequirements: ["none for public guidance", "user approval before sharing farm, buyer, seller, location, or private household details"],
    auditRequirements: ["agriculture-source-used", "source-freshness-shown", "local-guidance-limit-disclosed", "unsafe-action-blocked"],
    futureRoadmapPhase: "20-agriculture-public-sources",
    ...DISABLED_FLAGS
  })));

  function getAgriculturePublicSourceContracts() {
    return AGRICULTURE_PUBLIC_SOURCE_CONTRACTS.slice();
  }

  return Object.freeze({
    DISABLED_FLAGS,
    AGRICULTURE_PUBLIC_SOURCE_CONTRACTS,
    getAgriculturePublicSourceContracts
  });
});
