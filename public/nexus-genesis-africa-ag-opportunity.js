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
    country("ethiopia", "Ethiopia", ["English", "Amharic"], ["teff", "coffee", "wheat", "poultry", "horticulture"], "Ethiopia agriculture, labor, education, youth, and women authorities"),
    country("democratic_republic_of_the_congo", "Democratic Republic of the Congo", ["French", "Swahili", "Lingala", "Kikongo", "Tshiluba"], ["cassava", "maize", "beans", "rice", "plantain", "horticulture", "livestock", "poultry", "aquaculture", "food processing"], "DRC agriculture, labor, education, humanitarian, social-support, and women/youth enterprise authorities", {
      isoAlpha2: "CD",
      isoAlpha3: "COD",
      internalCountryId: "nexus-country-cd",
      region: "Africa",
      subregion: "Central Africa",
      currency: "CDF",
      primaryLanguage: "French",
      aliases: ["democratic republic of the congo", "drc", "dr congo", "congo-kinshasa", "congo kinshasa", "rdc", "republique democratique du congo"],
      priorityDeployment: true,
      administrativeLevel: "province",
      administrativeUnits: ["Kinshasa", "North Kivu", "South Kivu", "Ituri", "Kasai", "Kasai Central", "Kasai Oriental", "Haut-Katanga", "Lualaba", "Tanganyika", "Tshopo", "Equateur", "Kongo Central"],
      jurisdiction: "CD",
      provinceAware: true,
      contextNotes: ["province-aware planning", "smallholder agriculture", "displaced and conflict-affected population support", "humanitarian and social-support coordination", "digital and transportation barriers", "land and finance access"],
      operatingAssumptions: ["Do not treat DRC as one uniform operating environment.", "Ask for province, territory, language, and local validation before provider or buyer recommendations."]
    }),
    country("republic_of_the_congo", "Republic of the Congo", ["French", "Lingala", "Kituba"], ["cassava", "maize", "plantain", "horticulture", "livestock", "poultry", "aquaculture", "forestry-linked agribusiness"], "Republic of the Congo agriculture, forestry, labor, education, social-service, and women/youth enterprise authorities", {
      isoAlpha2: "CG",
      isoAlpha3: "COG",
      internalCountryId: "nexus-country-cg",
      region: "Africa",
      subregion: "Central Africa",
      currency: "XAF",
      primaryLanguage: "French",
      aliases: ["republic of the congo", "congo-brazzaville", "congo brazzaville", "republique du congo"],
      administrativeLevel: "department",
      administrativeUnits: ["Brazzaville", "Pointe-Noire", "Pool", "Bouenza", "Niari", "Lekoumou", "Cuvette", "Plateaux", "Sangha", "Likouala", "Kouilou"],
      jurisdiction: "CG",
      provinceAware: false,
      contextNotes: ["separate Congo-Brazzaville jurisdiction", "agriculture and forestry context", "separate ministries, laws, providers, buyers, markets, and training systems from DRC"],
      operatingAssumptions: ["Do not reuse DRC records for Republic of the Congo.", "Ask for department and local validation before provider or market recommendations."]
    }),
    country("egypt", "Egypt", ["Arabic", "Egyptian Arabic", "English", "French"], ["wheat", "rice", "maize", "horticulture", "greenhouse vegetables", "livestock", "poultry", "aquaculture", "food processing", "agricultural exports"], "Egypt agriculture, irrigation, labor, education, vocational training, meteorology, research, university, women/youth, and development partner authorities", {
      isoAlpha2: "EG",
      isoAlpha3: "EGY",
      internalCountryId: "nexus-country-eg",
      region: "Africa",
      subregion: "Northern Africa",
      currency: "EGP",
      primaryLanguage: "Arabic",
      aliases: ["egypt", "arab republic of egypt", "misr", "egyptian"],
      priorityDeployment: true,
      rightToLeft: true,
      administrativeLevel: "governorate",
      administrativeUnits: ["Cairo", "Giza", "Alexandria", "Dakahlia", "Sharqia", "Beheira", "Kafr El Sheikh", "Gharbia", "Minya", "Fayoum", "Beni Suef", "Assiut", "Sohag", "Qena", "Luxor", "Aswan", "New Valley", "Matrouh", "North Sinai", "South Sinai", "Red Sea"],
      jurisdiction: "EG",
      provinceAware: false,
      contextNotes: ["governorate-aware planning", "Nile Valley and Nile Delta agriculture", "desert and reclaimed-land agriculture", "irrigation and water-efficiency planning", "water scarcity", "heat and drought risk", "soil salinity", "cold-chain requirements", "greenhouse agriculture", "agricultural exports", "technical and vocational training"],
      operatingAssumptions: ["Do not copy sub-Saharan assumptions into Egypt.", "Use Arabic-first, right-to-left aware communication and ask for governorate before local planning."]
    })
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
    countrySource(countryConfig, "irrigation_water_authority", `${countryConfig.name} irrigation, water, or water-resource authority`, "official_water_authority", "country_verified_required"),
    countrySource(countryConfig, "university_research", `${countryConfig.name} agriculture universities and applied research programs`, "university_research_source", "country_verified_required"),
    countrySource(countryConfig, "extension_service", `${countryConfig.name} extension and advisory services`, "extension_service_directory", "partner_required"),
    countrySource(countryConfig, "verified_training_provider", `${countryConfig.name} verified training providers`, "training_provider_directory", "partner_required"),
    countrySource(countryConfig, "verified_employer", `${countryConfig.name} verified agriculture employers`, "employer_directory", "partner_required"),
    countrySource(countryConfig, "verified_buyer", `${countryConfig.name} verified crop and livestock buyers`, "buyer_directory", "partner_required"),
    countrySource(countryConfig, "verified_cooperative", `${countryConfig.name} verified cooperatives`, "cooperative_directory", "partner_required"),
    countrySource(countryConfig, "finance_program", `${countryConfig.name} verified finance, grant, and savings programs`, "finance_program_directory", "partner_required"),
    countrySource(countryConfig, "transport_provider", `${countryConfig.name} verified transport and route-support providers`, "transport_provider_directory", "partner_required"),
    countrySource(countryConfig, "storage_provider", `${countryConfig.name} verified storage and cold-chain providers`, "storage_provider_directory", "partner_required"),
    countrySource(countryConfig, "government_program", `${countryConfig.name} government agriculture, youth, women, food-security, and enterprise programs`, "government_program_directory", "country_verified_required"),
    countrySource(countryConfig, "ngo_development_partner", `${countryConfig.name} recognized NGO and international development partners`, "ngo_development_partner_directory", "partner_required"),
    countrySource(countryConfig, "social_service", `${countryConfig.name} women, youth, childcare, transport, and social-service support`, "social_service_directory", "partner_required")
  ]));

  const COUNTRY_TRUST_REGISTRY = Object.freeze(SUPPORTED_COUNTRIES.flatMap(countryConfig => [
    countryTrustRecord(countryConfig, "provider", "Verified agriculture and social-support providers", ["identity", "jurisdiction", "service scope", "safeguarding policy"], "provider_backed_required"),
    countryTrustRecord(countryConfig, "training_provider", "Verified training and vocational providers", ["identity", "curriculum", "language support", "completion evidence"], "credential_blocked"),
    countryTrustRecord(countryConfig, "employer", "Verified employers and apprenticeship hosts", ["identity", "role terms", "safety policy", "youth safeguarding"], "employer_backed"),
    countryTrustRecord(countryConfig, "buyer", "Verified buyers and market actors", ["identity", "commodity", "quality terms", "payment terms"], "buyer_backed"),
    countryTrustRecord(countryConfig, "cooperative", "Verified cooperatives and producer groups", ["registration", "governance", "member terms", "records"], "provider_backed"),
    countryTrustRecord(countryConfig, "extension_service", "Verified extension and advisory services", ["authority", "coverage area", "specialty", "review receipt"], "partner_required"),
    countryTrustRecord(countryConfig, "finance_program", "Verified finance, grant, and savings programs", ["eligibility", "terms", "fees", "consumer protection"], "credential_blocked"),
    countryTrustRecord(countryConfig, "transport_provider", "Verified transport and logistics providers", ["license", "route", "cost basis", "safety"], "credential_blocked"),
    countryTrustRecord(countryConfig, "storage_provider", "Verified storage and cold-chain providers", ["facility identity", "capacity", "quality controls", "pricing"], "partner_required"),
    countryTrustRecord(countryConfig, "government", "Verified government programs and authorities", ["official source", "jurisdiction", "eligibility", "freshness date"], "country_verified_required"),
    countryTrustRecord(countryConfig, "university", "Verified universities and research institutes", ["official source", "program scope", "licensing", "freshness date"], "country_verified_required"),
    countryTrustRecord(countryConfig, "ngo_social_service", "Verified NGOs and social-service organizations", ["service owner", "eligibility", "privacy policy", "safeguarding"], "provider_backed_required")
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
    southern_africa: region("Southern Africa", ["zambia", "south_africa"], ["English", "local languages"], ["maize", "soybean", "livestock", "horticulture", "agri-processing"], ["drought", "equipment access", "youth jobs", "logistics"]),
    central_africa: region("Central Africa", ["democratic_republic_of_the_congo", "republic_of_the_congo"], ["French", "Swahili where applicable", "Lingala", "Kikongo", "Kituba", "Tshiluba"], ["cassava", "maize", "beans", "rice", "plantain", "horticulture", "livestock", "poultry", "aquaculture", "forestry-linked agribusiness"], ["province or department specificity", "rural logistics", "post-harvest loss", "digital barriers", "transport barriers", "land and finance access", "humanitarian and social-support coordination"]),
    north_africa: region("North Africa", ["egypt"], ["Arabic", "Egyptian Arabic", "English", "French"], ["wheat", "rice", "maize", "horticulture", "greenhouse agriculture", "livestock", "poultry", "aquaculture", "food processing", "agricultural exports"], ["water scarcity", "heat and drought", "soil salinity", "irrigation efficiency", "cold-chain logistics", "governorate-specific planning"])
  });

  const RISK_INTELLIGENCE_REGISTRY = Object.freeze([
    "rainfall_variability",
    "drought",
    "flood",
    "heat",
    "water_scarcity",
    "soil_salinity",
    "soil_fertility",
    "water_access",
    "crop_calendar",
    "planting_window",
    "pest_pressure",
    "disease_pressure",
    "province_security_logistics_context",
    "humanitarian_support_coordination",
    "nile_delta_irrigation_efficiency",
    "aquaculture_water_quality",
    "harvest_timing",
    "storage_loss",
    "post_harvest_handling",
    "market_distance",
    "transport_availability"
  ]);

  const SUPPORT_INTELLIGENCE_REGISTRY = Object.freeze([
    supportSignal("learner_success", ["attendance", "completion", "mentor access", "practice time"], "implemented_locally"),
    supportSignal("dropout_prevention", ["missed sessions", "care duties", "transport gaps", "equipment gaps"], "implemented_locally"),
    supportSignal("literacy_support", ["low-literacy mode", "voice-first prompts", "visual checklist"], "implemented_locally"),
    supportSignal("language_support", ["English", "Swahili", "French", "Portuguese", "Arabic", "Egyptian Arabic", "Amharic", "Kinyarwanda", "Lingala", "Kikongo", "Kituba", "Tshiluba"], "implemented_locally"),
    supportSignal("digital_access", ["phone-only path", "offline packet", "low-bandwidth summary"], "implemented_locally"),
    supportSignal("childcare_support", ["childcare need", "safe schedule", "social-service referral readiness"], "provider_backed_required"),
    supportSignal("transport_support", ["travel distance", "market route", "training route", "field visit"], "provider_backed_required"),
    supportSignal("mentoring_support", ["peer mentor", "extension worker", "women leader", "youth coach"], "partner_required"),
    supportSignal("equipment_need", ["starter tools", "protective equipment", "shared equipment", "repair support"], "partner_required")
  ]);

  const WOMEN_YOUTH_PROTECTION_REGISTRY = Object.freeze([
    protection("women_land_access", "Land access barrier support", ["land tenure review question", "group farming option", "lease verification"], "awaiting_local_validation"),
    protection("women_finance_access", "Women finance readiness", ["savings group readiness", "grant eligibility checklist", "no automatic application"], "credential_blocked"),
    protection("women_safety", "Women safety and participation support", ["safe meeting location", "harassment concern prompt", "trusted reviewer path"], "professional_review_required"),
    protection("women_leadership", "Women leadership pathway", ["cooperative leadership", "mentor matching readiness", "community validation"], "partner_required"),
    protection("youth_safeguarding", "Youth safeguarding", ["age-aware support", "guardian/mentor review when needed", "no exploitative placement"], "professional_review_required"),
    protection("youth_training_to_work", "Youth training-to-work pathway", ["apprenticeship readiness", "internship readiness", "verified employer only"], "employer_backed_required")
  ]);

  const TRUST_REGISTRY = Object.freeze([
    trustRecord("training_provider", "Verified training provider", ["identity", "curriculum", "safeguarding policy", "completion evidence"], "credential_blocked"),
    trustRecord("employer", "Verified agriculture employer", ["identity", "role details", "wage or stipend terms", "safety policy"], "employer_backed"),
    trustRecord("buyer", "Verified buyer", ["identity", "crop/specification", "price basis", "payment terms"], "buyer_backed"),
    trustRecord("cooperative", "Verified cooperative", ["registration", "governance", "member terms", "records"], "provider_backed"),
    trustRecord("finance_program", "Verified finance program", ["eligibility", "terms", "fees", "consumer protection"], "credential_blocked"),
    trustRecord("extension_service", "Verified extension service", ["authority", "specialty", "coverage area", "review receipt"], "partner_required"),
    trustRecord("transport_provider", "Verified transport provider", ["license", "route", "cost basis", "safety"], "credential_blocked"),
    trustRecord("storage_provider", "Verified storage or cold-chain provider", ["facility identity", "capacity", "quality controls", "pricing"], "partner_required"),
    trustRecord("social_service", "Verified women/youth social service", ["service owner", "eligibility", "privacy policy", "safeguarding"], "provider_backed_required")
  ]);

  const PRIVACY_FAIRNESS_CONTROLS = Object.freeze({
    consent: "required_before_sharing_or_provider_use",
    correction: "implemented_locally",
    export: "implemented_locally",
    deletion: "implemented_locally",
    revocation: "implemented_locally",
    dataIsolation: "session_or_case_scoped",
    roleBasedAccess: Object.freeze(["standard_user", "mentor_reviewer", "provider_reviewer", "program_admin"]),
    prohibitedDiscriminationSignals: MODEL_REGISTRY[0].excludedNegativeSignals,
    fairnessTests: Object.freeze(["gender_supportive_not_exclusionary", "youth_safeguarding", "rural_access_bias", "low_literacy_access", "disability_and_health_non_exclusion"]),
    adversarialTests: Object.freeze(["fake_buyer_claim", "fake_financing_approval", "unsafe_youth_job", "pressure_to_share_private_data", "guaranteed_income_claim"]),
    securityControls: Object.freeze(["no_secret_exposure", "no_provider_write_without_consent", "no_cross_user_data", "receipt_required", "review_required_for_execution"])
  });

  const ACCESSIBILITY_LOCALIZATION = Object.freeze({
    multilingualSupport: ["English", "Swahili", "French", "Portuguese", "Arabic", "Egyptian Arabic", "Amharic", "Kinyarwanda", "Lingala", "Kikongo", "Kituba", "Tshiluba"],
    rightToLeftSupport: "Arabic and Egypt interface metadata are marked right-to-left ready; local copy review is required before production.",
    voiceSupport: "command_routing_and_spoken_summary_ready",
    lowLiteracySupport: ["short plain language", "checklist output", "voice-first guidance", "icons where UI renders cards"],
    offlineSupport: "packet_can_be_generated_locally_without_live_provider",
    lowBandwidthSupport: "compact packet and source IDs available",
    accessibilityChecks: ["keyboard reachable via Ask Nexus", "plain-language labels", "no color-only status", "screen-reader friendly packet labels"]
  });

  const PROGRAM_IMPACT_FIELDS = Object.freeze({
    verifiedOutcomeFields: ["verified enrollment", "verified attendance", "verified completion", "verified placement", "verified buyer transaction", "verified finance approval"],
    estimatedOutcomeFields: ["estimated readiness", "estimated support need", "estimated pathway fit", "estimated climate risk", "estimated market readiness"],
    reportingRule: "verified outcomes and estimated indicators must remain separated",
    funderExportEnabled: false,
    aggregateOnlyWithoutConsent: true
  });

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
    production_authorization: "not_production_authorized",
    privacy_consent_controls: "implemented_locally",
    fairness_controls: "implemented_locally",
    youth_safeguarding: "implemented_locally",
    women_inclusion_controls: "implemented_locally",
    multilingual_low_literacy_support: "implemented_locally",
    program_impact_reporting: "implemented_locally",
    funder_export: "disabled"
  });

  const COMMAND_PATTERNS = Object.freeze([
    /\b(start farming|agriculture pathway|what can i grow|crop.*fit|farm.*fit|poultry|livestock|irrigation|food processing|cooperative|sell produce)\b/i,
    /\b(young woman|women|woman|girls?|childcare|land access|safety|mentorship|leadership|income)\b/i,
    /\b(youth|young people|apprenticeship|training near me|drone agriculture|farming jobs|agritech|skills am i missing)\b/i,
    /\b(financing|grant|loan|savings group|equipment|transport|market access|buyers?|buyer|storage|logistics)\b/i,
    /\b(africa.*capability status|youth and women agriculture capability|program progress|show my progress|delete my program profile|do not remember this)\b/i,
    /\b(dropout|attendance|completion|literacy|language support|digital access|mentor|equipment|safeguarding|fairness|privacy|export|delete|consent|program impact|funder report|trust registry|verified buyer|verified employer|verified training)\b/i,
    /\b(democratic republic of the congo|drc|dr congo|congo[-\s]?kinshasa|rdc|republic of the congo|congo[-\s]?brazzaville|egypt|arab republic of egypt|nile delta|congo)\b/i
  ]);

  function country(id, name, languages, crops, sourceSummary, meta = {}) {
    return Object.freeze({
      id,
      name,
      canonicalCountryName: name,
      isoAlpha2: meta.isoAlpha2 || id.slice(0, 2).toUpperCase(),
      isoAlpha3: meta.isoAlpha3 || null,
      internalCountryId: meta.internalCountryId || `nexus-country-${id.replace(/_/g, "-")}`,
      region: meta.region || "Africa",
      subregion: meta.subregion || "country-specific subregion",
      currency: meta.currency || "country-specific currency",
      primaryLanguage: meta.primaryLanguage || languages[0],
      languages: Object.freeze(languages),
      supportedLanguages: Object.freeze(languages),
      rightToLeft: meta.rightToLeft === true,
      priorityCrops: Object.freeze(crops),
      sourceSummary,
      aliases: Object.freeze(meta.aliases || [name.toLowerCase(), id.replace(/_/g, " ")]),
      priorityDeployment: meta.priorityDeployment === true,
      administrativeLevel: meta.administrativeLevel || "country/district",
      administrativeUnits: Object.freeze(meta.administrativeUnits || []),
      jurisdiction: meta.jurisdiction || meta.isoAlpha2 || id,
      sourceVerificationState: "country_verified_required",
      localValidationState: "awaiting_local_validation",
      providerVerificationState: "partner_or_provider_required",
      fairnessReviewState: "awaiting_fairness_review",
      safeguardingState: "safeguarding_controls_required",
      lastVerificationDate: "not_live_verified_in_this_session",
      productionAuthorizationState: "not_production_authorized",
      offlineSupportState: "local_packet_supported",
      lowBandwidthSupportState: "compact_packet_supported",
      provinceAware: meta.provinceAware === true,
      contextNotes: Object.freeze(meta.contextNotes || []),
      operatingAssumptions: Object.freeze(meta.operatingAssumptions || []),
      localValidationRequired: true
    });
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
      isoAlpha2: countryConfig.isoAlpha2,
      isoAlpha3: countryConfig.isoAlpha3,
      jurisdiction: countryConfig.jurisdiction,
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

  function countryTrustRecord(countryConfig, recordType, title, verificationRequirements, state) {
    return Object.freeze({
      recordId: `${countryConfig.id}.${recordType}`,
      countryId: countryConfig.id,
      country: countryConfig.name,
      isoAlpha2: countryConfig.isoAlpha2,
      isoAlpha3: countryConfig.isoAlpha3,
      jurisdiction: countryConfig.jurisdiction,
      recordType,
      title,
      verificationRequirements: Object.freeze(verificationRequirements),
      sourceVerification: "required_before_use",
      freshnessRequired: true,
      canonicalUrlRequired: true,
      jurisdictionRequired: true,
      licensingRequired: true,
      reviewReceiptRequired: true,
      state,
      sourceIsolationRequired: true,
      providerOrBuyerIsolationRequired: true,
      liveExecutionEnabled: false
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

  function supportSignal(signalId, factors, readiness) {
    return Object.freeze({ signalId, factors: Object.freeze(factors), readiness, noExecutionAuthorized: true });
  }

  function protection(protectionId, title, controls, readiness) {
    return Object.freeze({ protectionId, title, controls: Object.freeze(controls), readiness, professionalReviewRequired: true, noExecutionAuthorized: true });
  }

  function trustRecord(recordType, title, verificationRequirements, state) {
    return Object.freeze({
      recordType,
      title,
      verificationRequirements: Object.freeze(verificationRequirements),
      sourceVerification: "required_before_use",
      freshnessRequired: true,
      canonicalUrlRequired: true,
      jurisdictionRequired: true,
      licensingRequired: true,
      reviewReceiptRequired: true,
      state,
      liveExecutionEnabled: false
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

  function matchesCountryToken(text, token) {
    const normalized = normalizeText(token).toLowerCase();
    if (!normalized) return false;
    return new RegExp(`(^|[^a-z0-9])${normalized.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}([^a-z0-9]|$)`, "i").test(text);
  }

  function detectCountry(command = "", context = {}) {
    const text = `${command} ${JSON.stringify(context || {})}`.toLowerCase();
    const explicitContext = normalizeText(context.countryId || context.country || context.isoAlpha2 || context.isoAlpha3).toLowerCase();
    if (explicitContext) {
      const contextCountry = SUPPORTED_COUNTRIES.find(item => (
        item.id === explicitContext ||
        item.name.toLowerCase() === explicitContext ||
        item.isoAlpha2.toLowerCase() === explicitContext ||
        (item.isoAlpha3 || "").toLowerCase() === explicitContext ||
        item.aliases.some(alias => alias.toLowerCase() === explicitContext)
      ));
      if (contextCountry) return Object.freeze({ country: contextCountry, ambiguous: false, candidates: Object.freeze([]), reason: "explicit_context" });
    }

    const drc = SUPPORTED_COUNTRIES.find(item => item.id === "democratic_republic_of_the_congo");
    const republic = SUPPORTED_COUNTRIES.find(item => item.id === "republic_of_the_congo");
    const bareCongo = matchesCountryToken(text, "congo");
    const qualifiedCongo = /\b(democratic republic of the congo|drc|dr congo|congo[-\s]?kinshasa|rdc|republic of the congo|congo[-\s]?brazzaville)\b/i.test(text);
    if (bareCongo && !qualifiedCongo) {
      return Object.freeze({
        country: null,
        ambiguous: true,
        candidates: Object.freeze([drc, republic].filter(Boolean).map(item => Object.freeze({ id: item.id, name: item.name, isoAlpha2: item.isoAlpha2, isoAlpha3: item.isoAlpha3 }))),
        reason: "ambiguous_congo"
      });
    }

    if (/\b(nile delta|nile valley|arab republic of egypt|misr|egyptian)\b/i.test(text)) {
      const egypt = SUPPORTED_COUNTRIES.find(item => item.id === "egypt");
      if (egypt) return Object.freeze({ country: egypt, ambiguous: false, candidates: Object.freeze([]), reason: "egypt_regional_context" });
    }

    const country = SUPPORTED_COUNTRIES.find(item => {
      const tokens = [item.name, item.id.replace(/_/g, " "), item.isoAlpha2, item.isoAlpha3, ...(item.aliases || [])].filter(Boolean);
      return tokens.some(token => matchesCountryToken(text, token));
    }) || SUPPORTED_COUNTRIES[0];
    return Object.freeze({ country, ambiguous: false, candidates: Object.freeze([]), reason: country === SUPPORTED_COUNTRIES[0] ? "default" : "matched_alias" });
  }

  function inferParticipantProfile(command = "", context = {}) {
    const text = `${command} ${JSON.stringify(context || {})}`.toLowerCase();
    const countryDetection = detectCountry(command, context);
    const country = countryDetection.country || SUPPORTED_COUNTRIES[0];
    const barriers = [];
    [
      ["land_access", /\b(no land|do not have land|don't have land|without land|land access|rent land|small plot)\b/],
      ["financing", /\b(no money|financing|grant|loan|equipment|startup)\b/],
      ["childcare", /\b(childcare|child care|children|single mother)\b/],
      ["transport", /\b(transport|transportation|market distance|road)\b/],
      ["digital_access", /\b(no internet|phone only|digital|online)\b/],
      ["water_access", /\b(irrigation|water|rainfall|drought)\b/],
      ["safety", /\b(safety|unsafe|harassment|violence)\b/],
      ["literacy_language", /\b(literacy|read|language|translate|swahili|french|arabic|portuguese|lingala|kikongo|kituba|tshiluba)\b/],
      ["humanitarian_displacement", /\b(eastern drc|north kivu|south kivu|ituri|displaced|conflict|humanitarian)\b/],
      ["water_scarcity", /\b(nile delta|nile valley|desert|reclaimed land|salinity|water scarcity)\b/]
    ].forEach(([id, pattern]) => { if (pattern.test(text)) barriers.push(id); });
    const interests = [];
    ["poultry", "horticulture", "maize", "cassava", "rice", "livestock", "drone", "irrigation", "food processing", "cooperative", "market access", "greenhouse", "aquaculture", "exports", "cold chain", "nile delta"].forEach(item => {
      if (text.includes(item)) interests.push(item);
    });
    if (/\b(process|processing|value add|value-add)\b/i.test(text)) interests.push("food processing");
    return Object.freeze({
      country: countryDetection.ambiguous ? "Congo clarification needed" : country.name,
      countryId: countryDetection.ambiguous ? "ambiguous_congo" : country.id,
      countryDetection,
      countryAmbiguity: countryDetection.ambiguous,
      countryCandidates: countryDetection.candidates,
      region: normalizeText(context.region || context.province || context.governorate || "region not provided"),
      administrativeLevel: country.administrativeLevel,
      administrativeUnit: normalizeText(context.province || context.governorate || context.region || "not provided"),
      jurisdiction: countryDetection.ambiguous ? "ambiguous_congo" : country.jurisdiction,
      isoAlpha2: countryDetection.ambiguous ? null : country.isoAlpha2,
      isoAlpha3: countryDetection.ambiguous ? null : country.isoAlpha3,
      primaryLanguage: country.primaryLanguage,
      preferredLanguages: country.languages,
      rightToLeft: country.rightToLeft === true,
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

  function buildSupportPrediction(command = "", profile = inferParticipantProfile(command)) {
    const text = normalizeText(command).toLowerCase();
    const supportNeeds = new Set(profile.barriers || []);
    if (/\b(dropout|miss|attendance|completion)\b/i.test(text)) supportNeeds.add("attendance_completion");
    if (/\b(literacy|read|language|translate|swahili|french|arabic|amharic|kinyarwanda)\b/i.test(text)) supportNeeds.add("literacy_language");
    if (/\b(phone|internet|offline|data|digital)\b/i.test(text)) supportNeeds.add("digital_access");
    if (/\b(mentor|coach|support)\b/i.test(text)) supportNeeds.add("mentoring");
    if (/\b(equipment|tools|protective|starter)\b/i.test(text)) supportNeeds.add("equipment");
    return Object.freeze({
      supportNeeds: Object.freeze([...supportNeeds]),
      dropoutPreventionPlan: Object.freeze(["confirm schedule fit", "identify transport and childcare barriers", "offer low-bandwidth study plan", "connect to verified mentor only after consent"]),
      learnerSuccessSignals: SUPPORT_INTELLIGENCE_REGISTRY,
      confidence: profile.region === "region not provided" ? "medium_low_until_region_known" : "medium",
      blockedProviderSteps: Object.freeze(["training enrollment", "mentor assignment", "transport booking", "equipment grant application"])
    });
  }

  function buildClimateRiskProfile(profile = {}) {
    const countryConfig = SUPPORTED_COUNTRIES.find(item => item.id === profile.countryId);
    const countrySpecificRisks = countryConfig && countryConfig.contextNotes.length ? countryConfig.contextNotes : ["local validation required"];
    return Object.freeze({
      country: profile.country || "country not provided",
      countryId: profile.countryId || "country_not_provided",
      jurisdiction: profile.jurisdiction || "jurisdiction_not_selected",
      administrativeLevel: profile.administrativeLevel || "country/district",
      administrativeUnit: profile.administrativeUnit || "not provided",
      rightToLeft: profile.rightToLeft === true,
      riskSignals: RISK_INTELLIGENCE_REGISTRY,
      countrySpecificRisks: Object.freeze(countrySpecificRisks),
      cropLivestockScope: Object.freeze(["crop", "livestock", "poultry", "aquaculture", "irrigation", "soil", "storage", "post-harvest"]),
      dataStatus: "data_limited_without_live_country_weather_soil_extension_sources",
      guidance: Object.freeze([`ask for ${profile.administrativeLevel || "district"}`, "verify local crop calendar", "check extension source", "do not treat as pesticide, veterinary, or fertilizer prescription"])
    });
  }

  function buildMarketEnterpriseReadiness(profile = {}) {
    return Object.freeze({
      entrepreneurshipReadiness: "implemented_locally",
      cooperativeReadiness: "implemented_locally",
      agribusinessReadiness: "implemented_locally",
      marketAccessReadiness: "buyer_backed_required",
      logisticsReadiness: "implemented_locally",
      financingReadiness: "credential_blocked_for_application",
      buyerReadiness: "buyer_backed_required",
      nextChecks: Object.freeze(["verify buyer identity", "verify cooperative terms", "verify transport and storage", "separate estimate from verified outcome", "collect explicit consent before sharing"])
    });
  }

  function buildGovernancePacket(command = "") {
    return Object.freeze({
      packetType: "genesis_africa_ag_opportunity_governance_packet",
      capabilityId: SERVICE_ID,
      schemaVersion: SCHEMA_VERSION,
      command: normalizeText(command),
      privacyFairnessControls: PRIVACY_FAIRNESS_CONTROLS,
      womenYouthProtections: WOMEN_YOUTH_PROTECTION_REGISTRY,
      accessibilityLocalization: ACCESSIBILITY_LOCALIZATION,
      executionBoundaries: EXECUTION_BOUNDARIES,
      productionAuthorized: false,
      userVisibleStatus: "Nexus prepared the privacy, fairness, safeguarding, accessibility, and governance controls for Africa youth and women agriculture opportunity support. Provider-facing use still requires consent, local validation, fairness review, and professional review."
    });
  }

  function buildTrustRegistryPacket(command = "") {
    return Object.freeze({
      packetType: "genesis_africa_ag_opportunity_trust_registry_packet",
      capabilityId: SERVICE_ID,
      schemaVersion: SCHEMA_VERSION,
      command: normalizeText(command),
      trustRegistry: TRUST_REGISTRY,
      countryTrustRegistry: COUNTRY_TRUST_REGISTRY,
      countrySources: COUNTRY_SOURCE_REGISTRY,
      sourceVerificationStates: Object.freeze(["country_verified_required", "partner_required", "credential_blocked", "buyer_backed", "employer_backed", "provider_backed_required"]),
      userVisibleStatus: "Nexus prepared verified-source and provider trust requirements. Unverified buyers, employers, training providers, finance programs, transport providers, storage providers, and social-service partners remain blocked from live action.",
      ...EXECUTION_BOUNDARIES
    });
  }

  function buildProgramImpactPacket(command = "") {
    return Object.freeze({
      packetType: "genesis_africa_ag_opportunity_program_impact_packet",
      capabilityId: SERVICE_ID,
      schemaVersion: SCHEMA_VERSION,
      command: normalizeText(command),
      programImpactFields: PROGRAM_IMPACT_FIELDS,
      verifiedOutcomes: Object.freeze([]),
      estimatedIndicators: Object.freeze(["readiness packet count", "support need categories", "pathway interest categories", "country/regional gap categories"]),
      funderExportEnabled: false,
      aggregateOnlyWithoutConsent: true,
      userVisibleStatus: "Nexus can prepare local program-impact indicators, but verified outcomes must remain separate from estimates. Funder exports are disabled until consent, governance approval, and verified outcome sources exist.",
      ...EXECUTION_BOUNDARIES
    });
  }

  function buildCompletionClassificationPacket(command = "") {
    return Object.freeze({
      packetType: "genesis_africa_ag_opportunity_completion_classification_packet",
      capabilityId: SERVICE_ID,
      schemaVersion: SCHEMA_VERSION,
      command: normalizeText(command),
      countries: SUPPORTED_COUNTRIES.map(item => item.name),
      modelIds: MODEL_REGISTRY.map(item => item.modelId),
      registryCounts: Object.freeze({
        countrySources: COUNTRY_SOURCE_REGISTRY.length,
        countryTrustRecords: COUNTRY_TRUST_REGISTRY.length,
        trustRecords: TRUST_REGISTRY.length,
        pathways: PATHWAY_REGISTRY.length,
        supportSignals: SUPPORT_INTELLIGENCE_REGISTRY.length,
        protectionControls: WOMEN_YOUTH_PROTECTION_REGISTRY.length,
        riskSignals: RISK_INTELLIGENCE_REGISTRY.length
      }),
      classifications: Object.freeze({
        localAdvisoryRuntime: "implemented_locally",
        supportPrediction: "implemented_locally",
        climateCropRisk: "data_limited",
        verifiedBuyerAction: "buyer_backed",
        employerPlacementAction: "employer_backed",
        trainingEnrollment: "credential_blocked",
        financeApplication: "credential_blocked",
        transportDispatch: "credential_blocked",
        countrySourceUse: "awaiting_local_validation",
        fairnessReview: "awaiting_fairness_review",
        professionalReview: "awaiting_professional_review",
        funderExport: "disabled",
        productionAuthorization: "not_production_authorized"
      }),
      userVisibleStatus: "Nexus classified the Africa youth and women agricultural opportunity capability for end-to-end testing. Local advisory, support, governance, and reporting packets are implemented; live partner execution remains gated or blocked by verification, credentials, fairness, professional review, and authorization.",
      ...EXECUTION_BOUNDARIES
    });
  }

  function buildReceipt(command = "", profile = {}, recommendations = []) {
    return Object.freeze({
      receiptId: stableId("africa-ag-opportunity-receipt", `${command}:${profile.country}:${recommendations.map(item => item.title).join("|")}`),
      predictionId: stableId("africa-ag-opportunity-prediction", `${profile.country}:${command}`),
      schemaVersion: SCHEMA_VERSION,
      participantConsent: profile.memoryPreference,
      country: profile.country,
      countryId: profile.countryId,
      isoAlpha2: profile.isoAlpha2,
      isoAlpha3: profile.isoAlpha3,
      jurisdiction: profile.jurisdiction,
      region: profile.region,
      administrativeLevel: profile.administrativeLevel,
      administrativeUnit: profile.administrativeUnit,
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
    const countryConfig = SUPPORTED_COUNTRIES.find(item => item.id === profile.countryId) || null;
    const countrySourceRegistry = profile.countryAmbiguity ? [] : COUNTRY_SOURCE_REGISTRY.filter(item => item.countryId === profile.countryId);
    const countryTrustRegistry = profile.countryAmbiguity ? [] : COUNTRY_TRUST_REGISTRY.filter(item => item.countryId === profile.countryId);
    const regionalConfiguration = profile.countryAmbiguity ? null : Object.values(REGIONAL_CONFIGURATION).find(item => item.countryIds.includes(profile.countryId)) || null;
    const userVisibleStatus = profile.countryAmbiguity
      ? "Nexus needs clarification: do you mean Democratic Republic of the Congo (Congo-Kinshasa/DRC) or Republic of the Congo (Congo-Brazzaville)? No country-specific provider, buyer, market, law, ministry, source, or model record was selected."
      : "Nexus prepared an Africa youth and women agricultural opportunity packet. It can recommend local planning steps, training pathways, support needs, and verification questions, but it does not promise income, yield, jobs, financing, buyer demand, enrollment, or provider action.";
    return Object.freeze({
      packetType: "genesis_africa_youth_women_ag_opportunity_packet",
      capabilityId: SERVICE_ID,
      schemaVersion: SCHEMA_VERSION,
      command: normalizeText(command),
      userVisibleStatus,
      participantProfile: profile,
      recommendations,
      supportPrediction: buildSupportPrediction(command, profile),
      climateRiskProfile: buildClimateRiskProfile(profile),
      marketEnterpriseReadiness: buildMarketEnterpriseReadiness(profile),
      womenYouthProtections: WOMEN_YOUTH_PROTECTION_REGISTRY,
      privacyFairnessControls: PRIVACY_FAIRNESS_CONTROLS,
      accessibilityLocalization: ACCESSIBILITY_LOCALIZATION,
      programImpactFields: PROGRAM_IMPACT_FIELDS,
      trustRegistry: TRUST_REGISTRY,
      countryConfig,
      sourceRegistry: SOURCE_REGISTRY,
      countrySourceRegistry,
      countryTrustRegistry,
      modelRegistry: MODEL_REGISTRY,
      pathwayRegistry: PATHWAY_REGISTRY,
      regionalConfiguration,
      riskIntelligenceRegistry: RISK_INTELLIGENCE_REGISTRY,
      capabilityStatus: CAPABILITY_STATUS,
      countryIsolation: Object.freeze({
        jurisdiction: profile.jurisdiction,
        sourceIsolationRequired: true,
        providerBuyerIsolationRequired: true,
        providerRecordsMustMatchCountry: true,
        buyerRecordsMustMatchCountry: true,
        ambiguousCountryRequiresClarification: profile.countryAmbiguity === true
      }),
      receipt: buildReceipt(command, profile, recommendations),
      explanation: {
        whyRecommended: recommendations.map(item => item.why),
        missingInformation: [profile.administrativeLevel || "district", "land/water details", "training availability", "verified provider", "verified market or buyer", "finance eligibility"],
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
      priorityDeploymentCountries: SUPPORTED_COUNTRIES.filter(item => item.priorityDeployment).map(item => Object.freeze({ id: item.id, name: item.name, isoAlpha2: item.isoAlpha2, isoAlpha3: item.isoAlpha3 })),
      sourceCount: SOURCE_REGISTRY.length,
      countrySourceCount: COUNTRY_SOURCE_REGISTRY.length,
      countryTrustRecordCount: COUNTRY_TRUST_REGISTRY.length,
      modelCount: MODEL_REGISTRY.length,
      pathwayCount: PATHWAY_REGISTRY.length,
      riskSignalCount: RISK_INTELLIGENCE_REGISTRY.length,
      trustRecordCount: TRUST_REGISTRY.length,
      supportSignalCount: SUPPORT_INTELLIGENCE_REGISTRY.length,
      protectionControlCount: WOMEN_YOUTH_PROTECTION_REGISTRY.length,
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
      countryTrustRegistry: COUNTRY_TRUST_REGISTRY,
      models: MODEL_REGISTRY,
      pathways: PATHWAY_REGISTRY,
      regions: REGIONAL_CONFIGURATION,
      riskSignals: RISK_INTELLIGENCE_REGISTRY,
      supportSignals: SUPPORT_INTELLIGENCE_REGISTRY,
      womenYouthProtections: WOMEN_YOUTH_PROTECTION_REGISTRY,
      trustRegistry: TRUST_REGISTRY,
      privacyFairnessControls: PRIVACY_FAIRNESS_CONTROLS,
      accessibilityLocalization: ACCESSIBILITY_LOCALIZATION,
      programImpactFields: PROGRAM_IMPACT_FIELDS,
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
      priorityDeploymentCountries: SUPPORTED_COUNTRIES.filter(item => item.priorityDeployment).map(item => Object.freeze({ id: item.id, name: item.name, isoAlpha2: item.isoAlpha2, isoAlpha3: item.isoAlpha3 })),
      sourceCount: SOURCE_REGISTRY.length,
      countrySourceCount: COUNTRY_SOURCE_REGISTRY.length,
      countryTrustRecordCount: COUNTRY_TRUST_REGISTRY.length,
      modelCount: MODEL_REGISTRY.length,
      pathwayCount: PATHWAY_REGISTRY.length,
      riskSignalCount: RISK_INTELLIGENCE_REGISTRY.length,
      trustRecordCount: TRUST_REGISTRY.length,
      supportSignalCount: SUPPORT_INTELLIGENCE_REGISTRY.length,
      protectionControlCount: WOMEN_YOUTH_PROTECTION_REGISTRY.length,
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
    COUNTRY_TRUST_REGISTRY,
    MODEL_REGISTRY,
    PATHWAY_REGISTRY,
    REGIONAL_CONFIGURATION,
    RISK_INTELLIGENCE_REGISTRY,
    SUPPORT_INTELLIGENCE_REGISTRY,
    WOMEN_YOUTH_PROTECTION_REGISTRY,
    TRUST_REGISTRY,
    PRIVACY_FAIRNESS_CONTROLS,
    ACCESSIBILITY_LOCALIZATION,
    PROGRAM_IMPACT_FIELDS,
    CAPABILITY_STATUS,
    shouldHandle,
    detectCountry,
    inferParticipantProfile,
    buildSupportPrediction,
    buildClimateRiskProfile,
    buildMarketEnterpriseReadiness,
    buildOpportunityPacket,
    buildCapabilityStatusPacket,
    buildGovernancePacket,
    buildTrustRegistryPacket,
    buildProgramImpactPacket,
    buildCompletionClassificationPacket,
    registries,
    status
  });
});
