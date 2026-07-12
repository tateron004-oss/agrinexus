(function nexusGenesisAfricaAgOpportunityFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusGenesisAfricaAgOpportunity = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusGenesisAfricaAgOpportunityModule() {
  const SERVICE_ID = "africa_youth_women_agricultural_opportunity_intelligence";
  const SCHEMA_VERSION = "nexus.genesis.africa-ag-opportunity.v1";

  const EXECUTION_BOUNDARIES = Object.freeze({
    trainingEnrollmentEnabled: false,
    buyerContactEnabled: false,
    providerReferralEnabled: false,
    financingApplicationEnabled: false,
    transportDispatchEnabled: false,
    droneDispatchEnabled: false,
    cooperativeEnrollmentEnabled: false,
    incomeGuaranteeEnabled: false,
    yieldGuaranteeEnabled: false,
    jobGuaranteeEnabled: false,
    noFakeBuyerContact: true,
    noFakeTrainingEnrollment: true,
    noFakeFinancingApproval: true,
    noFakeProviderReferral: true,
    noFakeYieldOrIncomeClaim: true,
    consentRequiredBeforeSharing: true,
    professionalReviewRequiredForProviderFacingUse: true
  });

  const SUPPORTED_COUNTRIES = Object.freeze([
    country("kenya", "Kenya", ["English", "Swahili"], ["maize", "horticulture", "poultry", "dairy", "beans"], "Kenyan agriculture, youth, labor, training, and women enterprise authorities"),
    country("ghana", "Ghana", ["English"], ["maize", "cassava", "poultry", "vegetables", "cocoa"], "Ghana agriculture, labor, youth, education, and women development authorities"),
    country("nigeria", "Nigeria", ["English"], ["cassava", "rice", "maize", "poultry", "vegetables"], "Nigeria agriculture, labor, youth, education, and women affairs authorities"),
    country("tanzania", "Tanzania", ["English", "Swahili"], ["maize", "rice", "horticulture", "poultry", "sunflower"], "Tanzania agriculture, labor, youth, education, and women development authorities"),
    country("uganda", "Uganda", ["English", "Swahili"], ["maize", "coffee", "poultry", "beans", "horticulture"], "Uganda agriculture, labor, youth, education, and gender authorities"),
    country("rwanda", "Rwanda", ["English", "French", "Kinyarwanda"], ["beans", "maize", "horticulture", "poultry", "dairy"], "Rwanda agriculture, youth, education, labor, and gender authorities"),
    country("zambia", "Zambia", ["English"], ["maize", "soybean", "poultry", "horticulture", "dairy"], "Zambia agriculture, labor, youth, education, and community development authorities"),
    country("south_africa", "South Africa", ["English"], ["horticulture", "maize", "livestock", "poultry", "agri-processing"], "South Africa agriculture, labor, education, youth, and women development authorities"),
    country("senegal", "Senegal", ["French"], ["rice", "horticulture", "groundnut", "poultry", "millet"], "Senegal agriculture, labor, youth, vocational training, and women development authorities"),
    country("ethiopia", "Ethiopia", ["English", "Amharic"], ["teff", "coffee", "wheat", "poultry", "horticulture"], "Ethiopia agriculture, labor, education, youth, and women authorities")
  ]);

  const SOURCE_REGISTRY = Object.freeze([
    source("national.agriculture.ministry", "National ministry of agriculture", 1, "official authority", "country-specific official ministry source"),
    source("national.labor.ministry", "National ministry of labor or employment", 1, "official authority", "country-specific labor authority"),
    source("national.youth.agency", "National youth agency or ministry", 1, "official youth authority", "country-specific youth authority"),
    source("national.gender.women.agency", "National women or gender development agency", 1, "official women development authority", "country-specific gender authority"),
    source("national.meteorological.service", "National meteorological service", 1, "official climate authority", "country-specific meteorological authority"),
    source("au.development.agency", "African Union Development Agency", 2, "regional institution", "https://www.nepad.org/"),
    source("fao", "Food and Agriculture Organization", 2, "international agriculture source", "https://www.fao.org/"),
    source("ifad", "International Fund for Agricultural Development", 2, "rural development source", "https://www.ifad.org/"),
    source("cgiar", "CGIAR research centers", 2, "agricultural research source", "https://www.cgiar.org/"),
    source("ilo", "International Labour Organization", 2, "labor and youth employment source", "https://www.ilo.org/"),
    source("verified.training.provider", "Verified training provider", 5, "provider directory", "verified local provider record"),
    source("verified.cooperative", "Verified cooperative or producer group", 5, "provider directory", "verified cooperative record"),
    source("verified.buyer", "Verified buyer or market actor", 5, "provider directory", "verified buyer record"),
    source("verified.finance.program", "Verified finance or grant program", 5, "provider directory", "verified finance program record")
  ]);

  const COUNTRY_SOURCE_REGISTRY = Object.freeze(SUPPORTED_COUNTRIES.flatMap(countryConfig => [
    countrySource(countryConfig, "ministry_agriculture", `${countryConfig.name} agriculture authority`, "official_agriculture_authority", "country_verified_required"),
    countrySource(countryConfig, "labor_employment", `${countryConfig.name} labor and employment authority`, "official_labor_authority", "country_verified_required"),
    countrySource(countryConfig, "education_training", `${countryConfig.name} education and training authority`, "official_education_authority", "country_verified_required"),
    countrySource(countryConfig, "meteorological_service", `${countryConfig.name} meteorological service`, "official_climate_authority", "country_verified_required"),
    countrySource(countryConfig, "research_extension", `${countryConfig.name} agriculture research and extension institute`, "research_extension_institute", "country_verified_required"),
    countrySource(countryConfig, "verified_training_provider", `${countryConfig.name} verified training providers`, "training_provider_directory", "partner_required"),
    countrySource(countryConfig, "verified_employer", `${countryConfig.name} verified agriculture employers`, "employer_directory", "partner_required"),
    countrySource(countryConfig, "verified_buyer", `${countryConfig.name} verified crop and livestock buyers`, "buyer_directory", "partner_required"),
    countrySource(countryConfig, "verified_cooperative", `${countryConfig.name} verified cooperatives`, "cooperative_directory", "partner_required"),
    countrySource(countryConfig, "finance_program", `${countryConfig.name} verified finance, grant, and savings programs`, "finance_program_directory", "partner_required"),
    countrySource(countryConfig, "social_service", `${countryConfig.name} women, youth, childcare, transport, and social-service support`, "social_service_directory", "partner_required")
  ]));

  const MODEL_REGISTRY = Object.freeze([
    model("learner-success-support-v1", "Learner Success and Support Model", "attendance, completion, literacy, language, transport, childcare, and mentoring support", "approved_with_professional_review"),
    model("attendance-risk-v1", "Attendance Risk Support Model", "attendance constraints, family obligations, distance, seasonality, childcare, safety, transport, and timetable fit", "approved_with_professional_review"),
    model("completion-risk-v1", "Completion Risk Support Model", "course completion risks, literacy load, language fit, mentoring access, equipment access, and practice time", "approved_with_professional_review"),
    model("literacy-language-support-v1", "Literacy and Language Support Model", "low-literacy support, translation needs, local-language learning path, voice-first support, and instructor review needs", "approved_with_professional_review"),
    model("digital-access-equipment-v1", "Digital Access and Equipment Need Model", "phone access, data access, offline needs, protective equipment, starter tools, and shared-equipment options", "approved_with_professional_review"),
    model("agricultural-pathway-fit-v1", "Agricultural Pathway Fit Model", "crop, livestock, drone, irrigation, processing, logistics, and agribusiness pathways", "approved_for_advisory_use"),
    model("farm-climate-readiness-v1", "Farm and Climate Readiness Model", "rainfall, water, soil, planting windows, drought, flood, heat, pest, and storage risk", "data_limited"),
    model("crop-calendar-postharvest-v1", "Crop Calendar and Post-Harvest Risk Model", "planting window, crop calendar, harvest timing, storage, spoilage, aggregation, and post-harvest risk", "data_limited"),
    model("pest-disease-watch-v1", "Pest and Disease Watch Model", "pest pressure, disease pressure, scouting prompts, extension questions, and verified-source escalation", "data_limited"),
    model("market-income-opportunity-v1", "Market and Income Opportunity Model", "buyer demand, distance, seasonality, storage, value addition, and entrepreneurship potential", "awaiting_local_validation"),
    model("women-participation-barrier-v1", "Women's Participation and Barrier Model", "childcare, safety, land, finance, mentoring, literacy, digital access, and leadership support", "awaiting_fairness_review"),
    model("youth-employment-enterprise-v1", "Youth Employment and Enterprise Model", "training, apprenticeships, farm jobs, drone careers, agritech, and enterprise progression", "approved_with_professional_review"),
    model("cooperative-group-enterprise-v1", "Cooperative and Group Enterprise Model", "governance, shared equipment, market aggregation, recordkeeping, and leadership readiness", "experimental"),
    model("program-impact-v1", "Program Impact Model", "aggregated enrollment, completion, placement, enterprise, buyer access, and regional gap reporting", "not_production_authorized")
  ]);

  const PATHWAY_REGISTRY = Object.freeze([
    pathway("crop.production", "Crop production", ["maize", "cassava", "rice", "beans", "vegetables"], ["soil", "water", "crop calendar", "pest scouting", "post-harvest storage"]),
    pathway("livestock", "Livestock", ["dairy", "small ruminants", "feed planning"], ["animal health referral", "feed", "housing", "market access"]),
    pathway("poultry", "Poultry enterprise", ["broilers", "layers", "vaccination questions", "feed planning"], ["biosecurity", "starter capital", "market timing"]),
    pathway("aquaculture", "Aquaculture", ["pond setup", "feed", "water quality", "market sizing"], ["water access", "technical training", "local regulation"]),
    pathway("irrigation", "Irrigation and water-smart farming", ["drip basics", "water harvesting", "scheduling"], ["water rights", "equipment", "maintenance"]),
    pathway("food.processing", "Food processing and value addition", ["drying", "milling", "packaging", "quality basics"], ["equipment", "food safety", "market standards"]),
    pathway("logistics", "Agriculture logistics", ["aggregation", "cold-chain readiness", "transport planning"], ["road access", "storage", "buyer timing"]),
    pathway("drone.agriculture", "Drone agriculture support", ["field mapping", "scouting", "spraying safety theory"], ["certification", "equipment", "no flight dispatch"]),
    pathway("maintenance", "Equipment maintenance", ["pump maintenance", "small engines", "irrigation repair"], ["tools", "mentor", "safety"]),
    pathway("agritech", "Agritech and digital agriculture", ["recordkeeping", "mobile advisory", "market data"], ["digital access", "data literacy", "connectivity"]),
    pathway("cooperative", "Cooperative or group enterprise", ["aggregation", "governance", "shared equipment"], ["trust", "records", "leadership"]),
    pathway("employment", "Agriculture employment", ["farm jobs", "apprenticeship", "internship"], ["employer verification", "transport", "safety"]),
    pathway("entrepreneurship", "Agriculture entrepreneurship", ["business basics", "costing", "customer discovery"], ["finance readiness", "mentoring", "buyer validation"])
  ]);

  const REGIONAL_CONFIGURATION = Object.freeze({
    east_africa: region("East Africa", ["kenya", "tanzania", "uganda", "rwanda", "ethiopia"], ["Swahili where applicable", "English", "local languages"], ["maize", "beans", "coffee", "dairy", "horticulture", "poultry"], ["rainfall variability", "transport distance", "digital access", "youth unemployment"]),
    west_africa: region("West Africa", ["ghana", "nigeria", "senegal"], ["English", "French", "local languages"], ["cassava", "rice", "maize", "cocoa", "groundnut", "poultry"], ["market aggregation", "post-harvest loss", "finance access", "women enterprise barriers"]),
    southern_africa: region("Southern Africa", ["zambia", "south_africa"], ["English", "local languages"], ["maize", "soybean", "livestock", "horticulture", "agri-processing"], ["drought", "equipment access", "youth jobs", "logistics"])
  });

  const RISK_INTELLIGENCE_REGISTRY = Object.freeze([
    "rainfall_variability",
    "drought",
    "flood",
    "heat",
    "soil_fertility",
    "water_access",
    "crop_calendar",
    "planting_window",
    "pest_pressure",
    "disease_pressure",
    "harvest_timing",
    "storage_loss",
    "post_harvest_handling",
    "market_distance",
    "transport_availability"
  ]);

  const CAPABILITY_STATUS = Object.freeze({
    participant_intake: "implemented_locally",
    learner_readiness: "implemented_locally",
    training_pathway_prediction: "implemented_locally",
    agricultural_pathway_matching: "implemented_locally",
    climate_readiness_analysis: "data_limited",
    womens_barrier_support: "implemented_locally",
    youth_employment_pathways: "implemented_locally",
    entrepreneurship_readiness: "implemented_locally",
    cooperative_readiness: "implemented_locally",
    buyer_market_discovery: "buyer_backed_required",
    logistics_readiness: "implemented_locally",
    drone_pathway_support: "implemented_locally",
    finance_readiness: "implemented_locally",
    social_service_navigation: "provider_backed_required",
    program_impact_intelligence: "experimental",
    training_enrollment_request: "credential_blocked",
    buyer_contact: "credential_blocked",
    finance_application: "credential_blocked",
    transport_dispatch: "credential_blocked",
    production_authorization: "not_production_authorized"
  });

  const COMMAND_PATTERNS = Object.freeze([
    /\b(start farming|agriculture pathway|what can i grow|crop.*fit|farm.*fit|poultry|livestock|irrigation|food processing|cooperative|sell produce)\b/i,
    /\b(young woman|women|woman|girls?|childcare|land access|safety|mentorship|leadership|income)\b/i,
    /\b(youth|young people|apprenticeship|training near me|drone agriculture|farming jobs|agritech|skills am i missing)\b/i,
    /\b(financing|grant|loan|savings group|equipment|transport|market access|buyers?|buyer|storage|logistics)\b/i,
    /\b(africa.*capability status|youth and women agriculture capability|program progress|show my progress|delete my program profile|do not remember this)\b/i
  ]);

  function country(id, name, languages, crops, sourceSummary) {
    return Object.freeze({ id, name, languages: Object.freeze(languages), priorityCrops: Object.freeze(crops), sourceSummary, localValidationRequired: true });
  }

  function source(sourceId, title, tier, category, canonicalUrl) {
    return Object.freeze({
      sourceId,
      title,
      organization: title,
      evidenceTier: tier,
      sourceCategory: category,
      canonicalUrl,
      activeStatus: canonicalUrl.startsWith("http") ? "active_reference" : "country_config_required",
      lastVerifiedDate: "not_live_verified_in_this_session",
      licensing: "verify before production use",
      limitations: "Directory or reference records do not prove provider quality, availability, funding approval, buyer demand, yield, or income.",
      verificationReceiptRequired: true
    });
  }

  function countrySource(countryConfig, sourceType, title, category, readiness) {
    return Object.freeze({
      sourceId: `${countryConfig.id}.${sourceType}`,
      countryId: countryConfig.id,
      country: countryConfig.name,
      title,
      organization: title,
      sourceType,
      sourceCategory: category,
      readiness,
      status: readiness === "country_verified_required" ? "needs_country_url_verification" : "partner_or_provider_required",
      missingBeforeExecution: Object.freeze(["verified local owner", "current official URL", "licensing or sharing permission", "freshness date", "review receipt"]),
      noExecutionAuthorized: true
    });
  }

  function model(modelId, name, purpose, approvalState) {
    return Object.freeze({
      modelId,
      name,
      purpose,
      prohibitedUse: "Do not deny opportunity, promise income, promise yield, promise jobs, promise financing, or restrict women/youth participation.",
      targetPopulation: "youth and women seeking agriculture, learning, workforce, enterprise, and support pathways across African countries",
      excludedNegativeSignals: Object.freeze(["sex", "ethnicity", "tribe", "religion", "disability", "health_condition", "pregnancy", "poverty", "rural_location", "low_literacy", "lack_of_formal_education"]),
      validationData: "local validation required before production scoring",
      fairnessAnalysis: "required before production ranking",
      humanReviewRequirement: "required for provider-facing, youth, safeguarding, finance, buyer, or program decisions",
      version: "1.0.0",
      owner: "Nexus Africa opportunity governance",
      approvalState,
      monitoringPlan: Object.freeze(["source_freshness", "fairness", "false_positive_barriers", "false_negative_barriers", "provider_verification_expiration", "regional_gaps"]),
      rollbackPlan: "disable model ID and fall back to supportive checklist"
    });
  }

  function pathway(pathwayId, name, subpaths, supportNeeds) {
    return Object.freeze({
      pathwayId,
      name,
      subpaths: Object.freeze(subpaths),
      supportNeeds: Object.freeze(supportNeeds),
      localValidationRequired: true,
      liveEnrollmentEnabled: false,
      buyerContactEnabled: false,
      providerReferralEnabled: false
    });
  }

  function region(name, countryIds, languages, prioritySectors, commonConstraints) {
    return Object.freeze({
      name,
      countryIds: Object.freeze(countryIds),
      languages: Object.freeze(languages),
      prioritySectors: Object.freeze(prioritySectors),
      commonConstraints: Object.freeze(commonConstraints),
      localValidationRequired: true
    });
  }

  function normalizeText(value) {
    return String(value || "").trim().replace(/\s+/g, " ");
  }

  function stableId(prefix, value) {
    let hash = 0;
    const text = String(value || "");
    for (let index = 0; index < text.length; index += 1) hash = ((hash << 5) - hash + text.charCodeAt(index)) | 0;
    return `${prefix}-${Math.abs(hash).toString(36).slice(0, 10)}`;
  }

  function shouldHandle(command = "") {
    return COMMAND_PATTERNS.some(pattern => pattern.test(command));
  }

  function inferParticipantProfile(command = "", context = {}) {
    const text = `${command} ${JSON.stringify(context || {})}`.toLowerCase();
    const country = SUPPORTED_COUNTRIES.find(item => text.includes(item.name.toLowerCase()) || text.includes(item.id.replace(/_/g, " "))) || SUPPORTED_COUNTRIES[0];
    const barriers = [];
    [
      ["land_access", /\b(no land|do not have land|don't have land|without land|land access|rent land|small plot)\b/],
      ["financing", /\b(no money|financing|grant|loan|equipment|startup)\b/],
      ["childcare", /\b(childcare|child care|children|single mother)\b/],
      ["transport", /\b(transport|transportation|market distance|road)\b/],
      ["digital_access", /\b(no internet|phone only|digital|online)\b/],
      ["water_access", /\b(irrigation|water|rainfall|drought)\b/],
      ["safety", /\b(safety|unsafe|harassment|violence)\b/],
      ["literacy_language", /\b(literacy|read|language|translate|swahili|french|arabic|portuguese)\b/]
    ].forEach(([id, pattern]) => { if (pattern.test(text)) barriers.push(id); });
    const interests = [];
    ["poultry", "horticulture", "maize", "cassava", "rice", "livestock", "drone", "irrigation", "food processing", "cooperative", "market access"].forEach(item => {
      if (text.includes(item)) interests.push(item);
    });
    return Object.freeze({
      country: country.name,
      countryId: country.id,
      region: normalizeText(context.region || "region not provided"),
      preferredLanguages: country.languages,
      targetPopulation: /\b(woman|women|girl|single mother)\b/i.test(text) ? "women_support" : /\b(youth|young)\b/i.test(text) ? "youth_support" : "general_youth_women_support",
      interests: Object.freeze([...new Set(interests.length ? interests : ["agriculture pathway"])]),
      barriers: Object.freeze([...new Set(barriers)]),
      memoryPreference: /\b(do not remember|delete)\b/i.test(text) ? "do_not_store" : "session_only"
    });
  }

  function buildRecommendations(profile = {}) {
    const interests = profile.interests || [];
    const primary = interests.includes("poultry") ? "small-scale poultry enterprise pathway"
      : interests.includes("drone") ? "drone agriculture training and field-support pathway"
      : interests.includes("food processing") ? "agri-processing and value-addition pathway"
      : interests.includes("irrigation") ? "irrigation support and water-smart production pathway"
      : "climate-smart agriculture starter pathway";
    return Object.freeze([
      Object.freeze({
        recommendationId: "pathway.primary",
        title: primary,
        why: `This pathway matches stated interests (${interests.join(", ")}) and current country context (${profile.country}).`,
        trainingSequence: ["foundation agriculture orientation", "digital and financial literacy", "pathway-specific technical training", "market and cooperative readiness"],
        supportNeeds: profile.barriers,
        uncertainty: profile.region === "region not provided" ? "region and local source data needed" : "local validation still required",
        humanReviewRequired: true
      }),
      Object.freeze({
        recommendationId: "support.barriers",
        title: "support-service readiness plan",
        why: profile.barriers.length ? `Nexus detected possible support needs: ${profile.barriers.join(", ")}.` : "No major barriers were stated; Nexus still recommends checking transport, childcare, digital access, and finance.",
        trainingSequence: ["confirm participant consent", "verify local providers", "review support options", "avoid sharing sensitive information without approval"],
        supportNeeds: profile.barriers.length ? profile.barriers : ["provider verification", "local eligibility check"],
        uncertainty: "provider availability not live verified",
        humanReviewRequired: true
      })
    ]);
  }

  function buildReceipt(command = "", profile = {}, recommendations = []) {
    return Object.freeze({
      receiptId: stableId("africa-ag-opportunity-receipt", `${command}:${profile.country}:${recommendations.map(item => item.title).join("|")}`),
      predictionId: stableId("africa-ag-opportunity-prediction", `${profile.country}:${command}`),
      schemaVersion: SCHEMA_VERSION,
      participantConsent: profile.memoryPreference,
      country: profile.country,
      region: profile.region,
      purpose: "youth_women_agricultural_opportunity_support",
      predictionHorizon: "near-term pathway and support planning",
      inputsUsed: ["user command", "session context", "country registry", "local pathway rules"],
      excludedData: MODEL_REGISTRY[0].excludedNegativeSignals,
      missingData: ["district", "verified local provider", "live climate data", "verified buyer demand", "funding eligibility"],
      opportunities: recommendations.map(item => item.title),
      uncertainty: "local validation, live source data, and provider verification required",
      sources: SOURCE_REGISTRY.map(item => item.sourceId),
      providerDependencies: ["training provider verification", "buyer verification", "finance program verification", "social support provider verification"],
      professionalReviewRequirement: "required before provider-facing action or program decision",
      providerAction: "none",
      outcome: "local advisory packet only",
      auditHistory: ["packet_created", "no_fake_execution_asserted", "no_guarantees_asserted", "consent_boundary_recorded"]
    });
  }

  function buildOpportunityPacket(command = "", context = {}) {
    const profile = inferParticipantProfile(command, context);
    const recommendations = buildRecommendations(profile);
    return Object.freeze({
      packetType: "genesis_africa_youth_women_ag_opportunity_packet",
      capabilityId: SERVICE_ID,
      schemaVersion: SCHEMA_VERSION,
      command: normalizeText(command),
      userVisibleStatus: "Nexus prepared an Africa youth and women agricultural opportunity packet. It can recommend local planning steps, training pathways, support needs, and verification questions, but it does not promise income, yield, jobs, financing, buyer demand, enrollment, or provider action.",
      participantProfile: profile,
      recommendations,
      countryConfig: SUPPORTED_COUNTRIES.find(item => item.id === profile.countryId),
      sourceRegistry: SOURCE_REGISTRY,
      countrySourceRegistry: COUNTRY_SOURCE_REGISTRY.filter(item => item.countryId === profile.countryId),
      modelRegistry: MODEL_REGISTRY,
      pathwayRegistry: PATHWAY_REGISTRY,
      regionalConfiguration: Object.values(REGIONAL_CONFIGURATION).find(item => item.countryIds.includes(profile.countryId)) || null,
      riskIntelligenceRegistry: RISK_INTELLIGENCE_REGISTRY,
      capabilityStatus: CAPABILITY_STATUS,
      receipt: buildReceipt(command, profile, recommendations),
      explanation: {
        whyRecommended: recommendations.map(item => item.why),
        missingInformation: ["district", "land/water details", "training availability", "verified provider", "verified market or buyer", "finance eligibility"],
        whatNexusIsNotConcluding: [
          "Nexus is not guaranteeing income, yield, employment, buyer demand, financing, or training completion.",
          "Nexus is not contacting providers, buyers, employers, financiers, cooperatives, or transport services.",
          "Nexus is not using gender, poverty, literacy, disability, rural location, or lack of formal education to deny opportunity."
        ]
      },
      ...EXECUTION_BOUNDARIES
    });
  }

  function buildCapabilityStatusPacket(command = "") {
    const counts = Object.values(CAPABILITY_STATUS).reduce((acc, value) => {
      acc[value] = (acc[value] || 0) + 1;
      return acc;
    }, {});
    return Object.freeze({
      packetType: "genesis_africa_ag_opportunity_capability_status_packet",
      capabilityId: SERVICE_ID,
      schemaVersion: SCHEMA_VERSION,
      command: normalizeText(command),
      userVisibleStatus: "Nexus classified Africa youth and women agricultural opportunity capabilities. Local advisory planning is implemented; live buyer contact, enrollment, financing, transport dispatch, provider referral, and production authorization remain blocked until verified providers, consent, confirmation, local validation, and governance gates are satisfied.",
      capabilityStatus: CAPABILITY_STATUS,
      classificationCounts: counts,
      supportedCountryCount: SUPPORTED_COUNTRIES.length,
      sourceCount: SOURCE_REGISTRY.length,
      countrySourceCount: COUNTRY_SOURCE_REGISTRY.length,
      modelCount: MODEL_REGISTRY.length,
      pathwayCount: PATHWAY_REGISTRY.length,
      riskSignalCount: RISK_INTELLIGENCE_REGISTRY.length,
      productionAuthorized: false,
      ...EXECUTION_BOUNDARIES
    });
  }

  function registries() {
    return Object.freeze({
      packetType: "genesis_africa_ag_opportunity_registry_packet",
      capabilityId: SERVICE_ID,
      schemaVersion: SCHEMA_VERSION,
      countries: SUPPORTED_COUNTRIES,
      sources: SOURCE_REGISTRY,
      countrySources: COUNTRY_SOURCE_REGISTRY,
      models: MODEL_REGISTRY,
      pathways: PATHWAY_REGISTRY,
      regions: REGIONAL_CONFIGURATION,
      riskSignals: RISK_INTELLIGENCE_REGISTRY,
      capabilityStatus: CAPABILITY_STATUS,
      ...EXECUTION_BOUNDARIES
    });
  }

  function status() {
    return Object.freeze({
      ok: true,
      capabilityId: SERVICE_ID,
      schemaVersion: SCHEMA_VERSION,
      supportedCountryCount: SUPPORTED_COUNTRIES.length,
      sourceCount: SOURCE_REGISTRY.length,
      countrySourceCount: COUNTRY_SOURCE_REGISTRY.length,
      modelCount: MODEL_REGISTRY.length,
      pathwayCount: PATHWAY_REGISTRY.length,
      riskSignalCount: RISK_INTELLIGENCE_REGISTRY.length,
      productionAuthorized: false,
      noFakeExecution: true,
      noGuarantees: true
    });
  }

  return Object.freeze({
    SERVICE_ID,
    SCHEMA_VERSION,
    EXECUTION_BOUNDARIES,
    SUPPORTED_COUNTRIES,
    SOURCE_REGISTRY,
    COUNTRY_SOURCE_REGISTRY,
    MODEL_REGISTRY,
    PATHWAY_REGISTRY,
    REGIONAL_CONFIGURATION,
    RISK_INTELLIGENCE_REGISTRY,
    CAPABILITY_STATUS,
    shouldHandle,
    inferParticipantProfile,
    buildOpportunityPacket,
    buildCapabilityStatusPacket,
    registries,
    status
  });
});
