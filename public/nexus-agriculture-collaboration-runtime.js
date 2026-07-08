(function initNexusAgricultureCollaborationRuntime(root, factory) {
  const runtime = factory(root);
  if (typeof module === "object" && module.exports) {
    module.exports = runtime;
  }
  if (root) {
    root.NexusAgricultureCollaborationRuntime = runtime;
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusAgricultureCollaborationRuntimeFactory(root) {
  "use strict";

  const GLOBAL_FLAGS = Object.freeze({
    enabled: "NEXUS_AGRICULTURE_ENABLED",
    liveSources: "NEXUS_AGRICULTURE_LIVE_SOURCES_ENABLED",
    synthetic: "NEXUS_AGRICULTURE_SYNTHETIC_DATA_ENABLED",
    marketplace: "NEXUS_AGRICULTURE_MARKETPLACE_ENABLED",
    logistics: "NEXUS_AGRICULTURE_LOGISTICS_ENABLED",
    drone: "NEXUS_AGRICULTURE_DRONE_ENABLED",
    finance: "NEXUS_AGRICULTURE_FINANCE_ENABLED",
    expertReview: "NEXUS_AGRICULTURE_EXPERT_REVIEW_CONFIRMED",
    adminReview: "NEXUS_AGRICULTURE_ADMIN_REVIEW_CONFIRMED"
  });

  const ACTION_LEVELS = Object.freeze({
    ONE_PREPARE: 1,
    TWO_COMMUNICATE: 2,
    THREE_COORDINATE: 3,
    FOUR_MARKETPLACE_LOGISTICS: 4,
    FIVE_REGULATED_EXPERT: 5,
    SIX_DRONE_FIELD_OPERATION: 6
  });

  const SOURCE_CATEGORIES = Object.freeze([
    "weather_climate_risk",
    "satellite_remote_sensing",
    "soil_land_water",
    "crop_advisory_extension",
    "pest_disease_plant_health",
    "livestock_animal_health",
    "marketplace_buyer_seller_trade",
    "logistics_shipment_cold_chain",
    "farm_management_records",
    "drone_field_operations",
    "finance_insurance_grants",
    "learning_workforce_extension_training"
  ]);

  const PROVIDERS = Object.freeze([
    provider("noaa_weather", "NOAA / National Weather Service", "Weather / Climate / Risk", "weather_climate_risk", [], { dataSourceType: "public_source", standardsSupported: ["weather.gov JSON", "CAP alerts"], weatherCapability: true, actions: ["prepare_weather_risk_summary", "prepare_heat_index_risk_summary"] }),
    provider("openweather", "OpenWeather", "Weather / Climate / Risk", "weather_climate_risk", ["OPENWEATHER_API_KEY"], { weatherCapability: true, actions: ["prepare_weather_risk_summary", "prepare_climate_risk_summary"] }),
    provider("tomorrow_io", "Tomorrow.io", "Weather / Climate / Risk", "weather_climate_risk", ["TOMORROW_IO_API_KEY"], { weatherCapability: true, actions: ["prepare_weather_risk_summary"] }),
    provider("nasa_power", "NASA POWER agroclimatology", "Weather / Climate / Risk", "weather_climate_risk", [], { dataSourceType: "public_source", weatherCapability: true, actions: ["prepare_climate_risk_summary"] }),
    provider("visual_crossing", "Visual Crossing", "Weather / Climate / Risk", "weather_climate_risk", ["VISUAL_CROSSING_API_KEY"], { weatherCapability: true, actions: ["prepare_climate_risk_summary"] }),
    provider("ecmwf_placeholder", "ECMWF placeholder", "Weather / Climate / Risk", "weather_climate_risk", ["ECMWF_API_KEY"], { weatherCapability: true, actions: ["prepare_climate_risk_summary"] }),
    provider("chirps_rainfall_placeholder", "CHIRPS rainfall placeholder", "Weather / Climate / Risk", "weather_climate_risk", ["CHIRPS_API_KEY"], { weatherCapability: true, actions: ["prepare_weather_risk_summary"] }),
    provider("nasa_earthdata", "NASA Earthdata", "Satellite / Remote Sensing", "satellite_remote_sensing", ["NASA_EARTHDATA_TOKEN"], { satelliteCapability: true, standardsSupported: ["Earthdata", "GeoTIFF"], actions: ["prepare_field_scouting_report"] }),
    provider("nasa_modis", "NASA MODIS", "Satellite / Remote Sensing", "satellite_remote_sensing", ["NASA_EARTHDATA_TOKEN"], { satelliteCapability: true, actions: ["prepare_field_scouting_report"] }),
    provider("landsat_usgs", "Landsat / USGS", "Satellite / Remote Sensing", "satellite_remote_sensing", ["USGS_API_KEY"], { satelliteCapability: true, actions: ["prepare_field_scouting_report"] }),
    provider("sentinel_copernicus", "Sentinel / Copernicus", "Satellite / Remote Sensing", "satellite_remote_sensing", ["COPERNICUS_API_KEY"], { satelliteCapability: true, actions: ["prepare_field_scouting_report"] }),
    provider("google_earth_engine_placeholder", "Google Earth Engine placeholder", "Satellite / Remote Sensing", "satellite_remote_sensing", ["GOOGLE_EARTH_ENGINE_KEY"], { satelliteCapability: true, actions: ["prepare_field_scouting_report"] }),
    provider("planet_labs_placeholder", "Planet Labs placeholder", "Satellite / Remote Sensing", "satellite_remote_sensing", ["PLANET_LABS_API_KEY"], { satelliteCapability: true, actions: ["prepare_field_scouting_report"] }),
    provider("maxar_placeholder", "Maxar placeholder", "Satellite / Remote Sensing", "satellite_remote_sensing", ["MAXAR_API_KEY"], { satelliteCapability: true, actions: ["prepare_field_scouting_report"] }),
    provider("usda_nrcs_soil_survey", "USDA NRCS Soil Survey / SSURGO", "Soil / Land / Water", "soil_land_water", ["USDA_API_KEY"], { soilCapability: true, dataSourceType: "public_or_partner_source", standardsSupported: ["SSURGO", "Web Soil Survey"], actions: ["prepare_soil_summary", "prepare_irrigation_advisory"] }),
    provider("soilgrids", "SoilGrids", "Soil / Land / Water", "soil_land_water", ["SOILGRIDS_API_KEY"], { soilCapability: true, actions: ["prepare_soil_summary"] }),
    provider("fao_soil_placeholder", "FAO soil data placeholder", "Soil / Land / Water", "soil_land_water", ["FAO_API_KEY"], { soilCapability: true, actions: ["prepare_soil_summary"] }),
    provider("local_soil_lab_placeholder", "Local soil lab provider placeholder", "Soil / Land / Water", "soil_land_water", ["LOCAL_SOIL_LAB_API_KEY"], { soilCapability: true, actions: ["prepare_soil_summary"] }),
    provider("irrigation_district_placeholder", "Irrigation district data placeholder", "Soil / Land / Water", "soil_land_water", ["IRRIGATION_DISTRICT_API_KEY"], { soilCapability: true, actions: ["prepare_irrigation_advisory"] }),
    provider("usda_resources", "USDA resources", "Crop Advisory / Extension", "crop_advisory_extension", ["USDA_API_KEY"], { cropCapability: true, advisoryCapability: true, actions: ["prepare_crop_advisory", "prepare_extension_service_handoff"] }),
    provider("state_extension_services", "State extension services", "Crop Advisory / Extension", "crop_advisory_extension", ["EXTENSION_SERVICE_API_KEY"], { cropCapability: true, advisoryCapability: true, actions: ["prepare_crop_advisory", "prepare_extension_service_handoff"] }),
    provider("fao_crop_resources", "FAO crop resources", "Crop Advisory / Extension", "crop_advisory_extension", ["FAO_API_KEY"], { cropCapability: true, advisoryCapability: true, actions: ["prepare_crop_advisory"] }),
    provider("cgiar_resources", "CGIAR resources", "Crop Advisory / Extension", "crop_advisory_extension", ["CGIAR_API_KEY"], { cropCapability: true, advisoryCapability: true, actions: ["prepare_crop_advisory"] }),
    provider("plantvillage", "PlantVillage", "Pest / Disease / Plant Health", "pest_disease_plant_health", ["PLANTVILLAGE_API_KEY"], { cropCapability: true, advisoryCapability: true, riskLevel: "expert_review", actions: ["prepare_pest_disease_advisory", "prepare_extension_service_handoff"] }),
    provider("cabi_crop_protection", "CABI crop protection", "Pest / Disease / Plant Health", "pest_disease_plant_health", ["CABI_API_KEY"], { cropCapability: true, advisoryCapability: true, riskLevel: "expert_review", actions: ["prepare_pest_disease_advisory"] }),
    provider("eppo_placeholder", "EPPO placeholder", "Pest / Disease / Plant Health", "pest_disease_plant_health", ["EPPO_API_KEY"], { cropCapability: true, advisoryCapability: true, actions: ["prepare_pest_disease_advisory"] }),
    provider("local_extension_plant_clinic", "Local extension plant clinic placeholder", "Pest / Disease / Plant Health", "pest_disease_plant_health", ["LOCAL_PLANT_CLINIC_API_KEY"], { advisoryCapability: true, actions: ["prepare_pest_disease_advisory"] }),
    provider("fao_livestock", "FAO livestock resources", "Livestock / Animal Health", "livestock_animal_health", ["FAO_API_KEY"], { livestockCapability: true, advisoryCapability: true, riskLevel: "expert_review", actions: ["prepare_livestock_support_packet"] }),
    provider("local_veterinary_placeholder", "Local veterinary provider placeholder", "Livestock / Animal Health", "livestock_animal_health", ["LOCAL_VETERINARY_PROVIDER_API_KEY"], { livestockCapability: true, advisoryCapability: true, riskLevel: "regulated_high", actions: ["prepare_livestock_support_packet", "queue_for_expert_review"], blockedActions: ["diagnose_animal", "prescribe_veterinary_treatment"] }),
    provider("agritrade_internal", "AgriTrade internal marketplace", "Marketplace / Buyer-Seller / Trade", "marketplace_buyer_seller_trade", ["AGRITRADE_PROVIDER_API_KEY"], { marketplaceCapability: true, actions: ["prepare_marketplace_listing", "prepare_buyer_message", "prepare_seller_message", "prepare_trade_match_summary"] }),
    provider("generic_marketplace_adapter", "Generic marketplace adapter", "Marketplace / Buyer-Seller / Trade", "marketplace_buyer_seller_trade", ["AGRITRADE_MARKETPLACE_API_KEY"], { marketplaceCapability: true, riskLevel: "transaction_gated", actions: ["prepare_marketplace_listing"], blockedActions: ["post_live_listing", "accept_offer", "process_payment"] }),
    provider("commodity_price_provider", "Commodity price provider placeholder", "Marketplace / Buyer-Seller / Trade", "marketplace_buyer_seller_trade", ["COMMODITY_PRICE_API_KEY"], { marketplaceCapability: true, actions: ["prepare_trade_match_summary"] }),
    provider("internal_route_shipment_tracker", "Internal route/shipment tracker", "Logistics / Shipment / Cold Chain", "logistics_shipment_cold_chain", [], { dataSourceType: "local_system", logisticsCapability: true, actions: ["prepare_shipment_plan", "prepare_route_plan"] }),
    provider("carrier_api_placeholder", "Carrier API placeholder", "Logistics / Shipment / Cold Chain", "logistics_shipment_cold_chain", ["AGRITRADE_CARRIER_API_KEY"], { logisticsCapability: true, actions: ["prepare_shipment_tracking_summary"], blockedActions: ["update_shipment", "cancel_shipment"] }),
    provider("cold_chain_provider", "Cold chain monitoring provider placeholder", "Logistics / Shipment / Cold Chain", "logistics_shipment_cold_chain", ["AGRITRADE_COLD_CHAIN_API_KEY"], { logisticsCapability: true, actions: ["prepare_cold_chain_checklist"] }),
    provider("farm_profile_registry", "Farm profile registry", "Farm Management / Records", "farm_management_records", [], { dataSourceType: "local_session", actions: ["prepare_farm_profile_summary", "remember_farm_intake", "deactivate_farm_profile"] }),
    provider("drone_mission_placeholder", "Drone mission planning placeholder", "Drone / Field Operations", "drone_field_operations", ["DRONEDEPLOY_API_KEY"], { droneCapability: true, riskLevel: "drone_high", actions: ["prepare_drone_field_observation", "prepare_drone_mission_plan"], blockedActions: ["launch_drone_mission", "autonomous_spraying"] }),
    provider("dji_cloud_provider", "DJI/cloud flight provider placeholder", "Drone / Field Operations", "drone_field_operations", ["DJI_CLOUD_API_KEY"], { droneCapability: true, riskLevel: "drone_high", actions: ["prepare_drone_field_observation"], blockedActions: ["launch_drone_mission"] }),
    provider("pix4d_placeholder", "Pix4D placeholder", "Drone / Field Operations", "drone_field_operations", ["PIX4D_API_KEY"], { droneCapability: true, actions: ["prepare_image_observation_summary"] }),
    provider("grant_provider_placeholder", "Agriculture grant provider placeholder", "Finance / Insurance / Grants", "finance_insurance_grants", ["AGRICULTURE_GRANT_PROVIDER_API_KEY"], { financeCapability: true, riskLevel: "regulated_high", actions: ["prepare_finance_grant_packet"], blockedActions: ["submit_grant_application"] }),
    provider("crop_insurance_placeholder", "Crop insurance provider placeholder", "Finance / Insurance / Grants", "finance_insurance_grants", ["CROP_INSURANCE_PROVIDER_API_KEY"], { financeCapability: true, riskLevel: "regulated_high", actions: ["prepare_crop_insurance_packet"], blockedActions: ["submit_claim"] }),
    provider("payment_escrow_placeholder", "Mobile money/payment/escrow provider placeholder", "Finance / Insurance / Grants", "finance_insurance_grants", ["AGRITRADE_PAYMENT_API_KEY"], { financeCapability: true, riskLevel: "transaction_gated", actions: ["prepare_transaction_receipt"], blockedActions: ["process_payment", "release_escrow"] }),
    provider("koachlearn_nexus_learning", "Koachlearn/Nexus learning", "Learning / Workforce / Extension Training", "learning_workforce_extension_training", ["KOACHLEARN_API_KEY"], { advisoryCapability: true, actions: ["prepare_agriculture_training_recommendation"] }),
    provider("extension_training_placeholder", "Extension training provider placeholder", "Learning / Workforce / Extension Training", "learning_workforce_extension_training", ["EXTENSION_TRAINING_API_KEY"], { advisoryCapability: true, actions: ["prepare_agriculture_training_recommendation"] })
  ]);

  const RUNTIME_CARDS = Object.freeze([
    card("crop_advisory", "Crop Advisory", "Prepare crop support with source labels and expert-review warnings.", "prepare_crop_advisory", "crop_advisory_extension"),
    card("pest_disease", "Pest / Disease Help", "Prepare pest or disease risk summary; pesticide actions require local expert review.", "prepare_pest_disease_advisory", "pest_disease_plant_health"),
    card("soil_irrigation", "Soil / Irrigation", "Prepare soil and irrigation checklist with local verification reminders.", "prepare_irrigation_advisory", "soil_land_water"),
    card("weather_heat", "Weather / Heat Risk", "Prepare climate, rainfall, heat, drought, or wind risk summary.", "prepare_weather_risk_summary", "weather_climate_risk"),
    card("livestock", "Livestock Support", "Prepare animal health, feed, water, or veterinary handoff checklist.", "prepare_livestock_support_packet", "livestock_animal_health"),
    card("marketplace_listing", "Marketplace Listing", "Draft a listing without posting live unless marketplace gates are configured.", "prepare_marketplace_listing", "marketplace_buyer_seller_trade"),
    card("buyer_message", "Buyer Message", "Draft buyer outreach without sending automatically.", "prepare_buyer_message", "marketplace_buyer_seller_trade"),
    card("seller_message", "Seller Message", "Draft seller outreach without sending automatically.", "prepare_seller_message", "marketplace_buyer_seller_trade"),
    card("trade_match", "Trade Match", "Prepare buyer/seller fit and missing-information summary.", "prepare_trade_match_summary", "marketplace_buyer_seller_trade"),
    card("shipment_plan", "Shipment Plan", "Prepare origin, destination, commodity, carrier, and route checklist.", "prepare_shipment_plan", "logistics_shipment_cold_chain"),
    card("shipment_tracking", "Shipment Tracking", "Summarize tracking readiness; live carrier tracking stays gated.", "prepare_shipment_tracking_summary", "logistics_shipment_cold_chain"),
    card("cold_chain", "Cold Chain", "Prepare cold-chain and storage checklist without claiming live telemetry.", "prepare_cold_chain_checklist", "logistics_shipment_cold_chain"),
    card("drone_observation", "Drone Field Observation", "Prepare field observation packet; no flight or scan is executed.", "prepare_drone_field_observation", "drone_field_operations"),
    card("extension_handoff", "Extension Service Handoff", "Prepare extension-service handoff for local expert review.", "prepare_extension_service_handoff", "crop_advisory_extension"),
    card("farm_profile", "Farm Profile / Intake", "Create or update local/session farm intake and receipt.", "prepare_farm_profile_summary", "farm_management_records"),
    card("training_workforce", "Training / Workforce", "Prepare agriculture training or workforce recommendation.", "prepare_agriculture_training_recommendation", "learning_workforce_extension_training"),
    card("finance_grants", "Finance / Grants Packet", "Prepare grants, insurance, or finance packet; no submission or payment.", "prepare_finance_grant_packet", "finance_insurance_grants")
  ]);

  const receipts = [];
  const expertReviewQueue = [];
  const adminReviewQueue = [];
  const farmProfiles = [];
  let lastResult = null;

  function provider(id, displayName, category, sourceCategory, requiredEnv, options = {}) {
    return Object.freeze({
      id,
      displayName,
      category,
      sourceCategory,
      supportedActions: options.actions || [],
      requiredEnv,
      optionalEnv: options.optionalEnv || [],
      authRequired: requiredEnv.length > 0 || options.authRequired === true,
      dataSourceType: options.dataSourceType || "provider_api",
      readCapability: options.readCapability !== false,
      writeCapability: Boolean(options.writeCapability),
      schedulingCapability: Boolean(options.schedulingCapability),
      messagingCapability: Boolean(options.messagingCapability),
      fileSharingCapability: Boolean(options.fileSharingCapability),
      advisoryCapability: Boolean(options.advisoryCapability),
      marketplaceCapability: Boolean(options.marketplaceCapability),
      logisticsCapability: Boolean(options.logisticsCapability),
      droneCapability: Boolean(options.droneCapability),
      financeCapability: Boolean(options.financeCapability),
      livestockCapability: Boolean(options.livestockCapability),
      cropCapability: Boolean(options.cropCapability),
      weatherCapability: Boolean(options.weatherCapability),
      satelliteCapability: Boolean(options.satelliteCapability),
      soilCapability: Boolean(options.soilCapability),
      riskLevel: options.riskLevel || "prepare_only",
      actionSafetyLevels: options.actionSafetyLevels || [ACTION_LEVELS.ONE_PREPARE],
      standardsSupported: options.standardsSupported || ["provider_api", "csv_json_export", "receipt_metadata"],
      blockedActions: options.blockedActions || [],
      lastTestStatus: "not_tested",
      receiptSupport: true
    });
  }

  function card(id, title, description, actionType, sourceCategory) {
    return Object.freeze({ id, title, description, actionType, sourceCategory });
  }

  function envPresent(env, name) {
    const value = String((env || {})[name] || "").trim();
    return Boolean(value && !/replace-with|changeme|todo|your-|example|dummy|fake/i.test(value));
  }

  function flag(env, name) {
    return String((env || {})[name] || "").trim().toLowerCase() === "true";
  }

  function missingEnv(env, names) {
    return names.filter(name => !envPresent(env, name));
  }

  function redactedFlags(env = {}) {
    return {
      agricultureEnabled: flag(env, GLOBAL_FLAGS.enabled),
      liveSourcesEnabled: flag(env, GLOBAL_FLAGS.liveSources),
      syntheticDataEnabled: flag(env, GLOBAL_FLAGS.synthetic),
      marketplaceExecutionEnabled: flag(env, GLOBAL_FLAGS.marketplace),
      logisticsExecutionEnabled: flag(env, GLOBAL_FLAGS.logistics),
      droneExecutionEnabled: flag(env, GLOBAL_FLAGS.drone),
      financeExecutionEnabled: flag(env, GLOBAL_FLAGS.finance),
      expertReviewConfirmed: flag(env, GLOBAL_FLAGS.expertReview),
      adminReviewConfirmed: flag(env, GLOBAL_FLAGS.adminReview)
    };
  }

  function providerReadiness(providerDef, env = {}) {
    const flags = redactedFlags(env);
    const missing = missingEnv(env, providerDef.requiredEnv);
    const configured = missing.length === 0;
    const publicSource = providerDef.dataSourceType === "public_source" && providerDef.requiredEnv.length === 0;
    const localSource = ["local_system", "local_session"].includes(providerDef.dataSourceType);
    const liveAllowed = flags.agricultureEnabled && flags.liveSourcesEnabled;
    let executionMode = "blocked";
    if (!flags.agricultureEnabled) executionMode = localSource ? "localFallback" : "blocked";
    else if (configured && (publicSource || localSource)) executionMode = localSource ? "localFallback" : "live";
    else if (configured && liveAllowed) executionMode = "live";
    else if (flags.syntheticDataEnabled) executionMode = "sandbox";
    else if (localSource) executionMode = "localFallback";
    const liveReady = executionMode === "live";
    const missingAuthorization = providerDef.authRequired && (!configured || !liveAllowed);
    const executionEnabled = liveReady && executionFlagForProvider(providerDef, flags);
    const safeStatus = liveReady
      ? `${providerDef.displayName} source is configured for live read use; execution remains gated.`
      : executionMode === "sandbox"
        ? `${providerDef.displayName} synthetic/sample mode only; no live source claim.`
        : executionMode === "localFallback"
          ? `${providerDef.displayName} local fallback only; no external source was contacted.`
          : `${providerDef.displayName} supported, not connected; missing credentials or authorization.`;
    return {
      id: providerDef.id,
      displayName: providerDef.displayName,
      category: providerDef.category,
      sourceCategory: providerDef.sourceCategory,
      supportedActions: providerDef.supportedActions,
      requiredEnv: providerDef.requiredEnv,
      optionalEnv: providerDef.optionalEnv,
      authRequired: providerDef.authRequired,
      configured,
      dataSourceType: providerDef.dataSourceType,
      readCapability: providerDef.readCapability,
      writeCapability: providerDef.writeCapability,
      schedulingCapability: providerDef.schedulingCapability,
      messagingCapability: providerDef.messagingCapability,
      fileSharingCapability: providerDef.fileSharingCapability,
      advisoryCapability: providerDef.advisoryCapability,
      marketplaceCapability: providerDef.marketplaceCapability,
      logisticsCapability: providerDef.logisticsCapability,
      droneCapability: providerDef.droneCapability,
      financeCapability: providerDef.financeCapability,
      livestockCapability: providerDef.livestockCapability,
      cropCapability: providerDef.cropCapability,
      weatherCapability: providerDef.weatherCapability,
      satelliteCapability: providerDef.satelliteCapability,
      soilCapability: providerDef.soilCapability,
      riskLevel: providerDef.riskLevel,
      actionSafetyLevels: providerDef.actionSafetyLevels,
      executionMode,
      missingEnv: missing,
      missingEnvNames: missing,
      missingAuthorization,
      userSafeStatusMessage: safeStatus,
      adminSafeStatusMessage: `${safeStatus} Required env: ${providerDef.requiredEnv.join(", ") || "none"}.`,
      providerEvidenceSummary: `${providerDef.displayName} supports ${providerDef.supportedActions.join(", ") || "readiness review"} for ${providerDef.category}.`,
      standardsSupported: providerDef.standardsSupported,
      lastTestStatus: providerDef.lastTestStatus,
      receiptSupport: providerDef.receiptSupport,
      executionCurrentlyEnabled: executionEnabled,
      secretValuesExposed: false
    };
  }

  function executionFlagForProvider(providerDef, flags) {
    if (providerDef.marketplaceCapability) return flags.marketplaceExecutionEnabled;
    if (providerDef.logisticsCapability) return flags.logisticsExecutionEnabled;
    if (providerDef.droneCapability) return flags.droneExecutionEnabled;
    if (providerDef.financeCapability) return flags.financeExecutionEnabled;
    return false;
  }

  function providerRegistry(env = {}) {
    const providers = PROVIDERS.map(item => providerReadiness(item, env));
    return {
      ok: true,
      runtime: "nexus-agriculture-collaboration-runtime",
      flags: redactedFlags(env),
      providers,
      executionAuthority: providers.some(item => item.executionCurrentlyEnabled),
      noSecretValues: true,
      noFakeLiveWeather: true,
      noFakeSatelliteScan: true,
      noFakeMarketplaceTransaction: true,
      noDroneExecution: true,
      noPesticideAuthority: true,
      noVeterinaryDiagnosis: true
    };
  }

  function sourceReadinessMatrix(env = {}) {
    const registry = providerRegistry(env);
    const rows = SOURCE_CATEGORIES.map(sourceCategory => {
      const providers = registry.providers.filter(item => item.sourceCategory === sourceCategory);
      const missingEnvNames = [...new Set(providers.flatMap(item => item.missingEnvNames))];
      const liveCount = providers.filter(item => item.executionMode === "live").length;
      const sandboxCount = providers.filter(item => item.executionMode === "sandbox").length;
      const localFallbackCount = providers.filter(item => item.executionMode === "localFallback").length;
      const status = liveCount ? "Configured for live use" : sandboxCount ? "Synthetic sample data only" : localFallbackCount ? "Local fallback only" : "Supported, not connected";
      const sourceMode = liveCount ? "live" : sandboxCount ? "synthetic" : localFallbackCount ? "localFallback" : "blocked";
      return {
        sourceCategory,
        displayName: sourceCategory.replace(/_/g, " / "),
        supportedProviderExamples: providers.map(item => item.displayName),
        standardsOrFormats: [...new Set(providers.flatMap(item => item.standardsSupported))],
        configuredStatus: status,
        missingCredentials: missingEnvNames,
        authorizationRequired: providers.some(item => item.authRequired),
        executionMode: sourceMode,
        syntheticFallbackAvailability: flag(env, GLOBAL_FLAGS.synthetic),
        supportedActions: [...new Set(providers.flatMap(item => item.supportedActions))],
        blockedActions: [...new Set(providers.flatMap(item => PROVIDERS.find(providerDef => providerDef.id === item.id)?.blockedActions || []))],
        expertAdminReviewRequired: expertReviewRequiredForSource(sourceCategory),
        lastTestStatus: "not_tested",
        sourceReceiptSupport: providers.some(item => item.receiptSupport),
        userSafeStatusMessage: status
      };
    });
    return {
      ok: true,
      rows,
      summary: {
        totalCategories: rows.length,
        liveCategories: rows.filter(row => row.executionMode === "live").length,
        blockedCategories: rows.filter(row => row.executionMode === "blocked").length
      },
      noSecretValues: true
    };
  }

  function expertReviewRequiredForSource(sourceCategory) {
    return /pest|livestock|finance|drone|marketplace|logistics/.test(sourceCategory);
  }

  function providerEvidence(env = {}) {
    const matrix = sourceReadinessMatrix(env);
    return {
      ok: true,
      evidenceId: `agriculture-evidence-${Date.now()}`,
      generatedAt: new Date().toISOString(),
      categories: matrix.rows.map(row => ({
        sourceCategory: row.sourceCategory,
        realExamples: row.supportedProviderExamples,
        standardsOrFormats: row.standardsOrFormats,
        configuredStatus: row.configuredStatus,
        credentialGaps: row.missingCredentials,
        authorizationGaps: row.authorizationRequired ? ["provider/source authorization required before live action"] : [],
        sourceMode: row.executionMode,
        supportedActions: row.supportedActions,
        blockedActions: row.blockedActions,
        lastTestStatus: row.lastTestStatus,
        receiptsGenerated: row.sourceReceiptSupport
      })),
      safety: {
        noFakeGovernmentClaims: true,
        noFakeLiveWeather: true,
        noFakeSatelliteScan: true,
        noFakeBuyerSellerTransaction: true,
        noFakeShipmentTracking: true,
        noFakeDroneFlight: true,
        noSecretValues: true
      }
    };
  }

  function normalizeInput(input) {
    if (typeof input === "string") return { rawInput: input };
    return { ...(input || {}), rawInput: String((input || {}).rawInput || (input || {}).command || "").trim() };
  }

  function actionForText(text = "") {
    const lower = String(text || "").toLowerCase();
    if (/\b(source readiness|agriculture sources|provider evidence|weather sources connected|satellite sources connected|agriculture actions blocked)\b/.test(lower)) return action("generate_agriculture_provider_evidence_report", "Agriculture Provider Evidence", ACTION_LEVELS.ONE_PREPARE, "provider_evidence");
    if (/\b(weather|heat|rain|rainfall|drought|frost|wind|climate)\b/.test(lower)) return action(/\b(heat)\b/.test(lower) ? "prepare_heat_index_risk_summary" : "prepare_weather_risk_summary", "Weather / Heat Risk", ACTION_LEVELS.ONE_PREPARE, "weather_climate_risk");
    if (/\b(soil|irrigation|water|moisture)\b/.test(lower)) return action(/\b(soil)\b/.test(lower) ? "prepare_soil_summary" : "prepare_irrigation_advisory", "Soil / Irrigation", ACTION_LEVELS.ONE_PREPARE, "soil_land_water");
    if (/\b(pest|disease|yellow leaves|fungus|blight|pesticide|chemical|what is wrong with my plants)\b/.test(lower)) return action("prepare_pest_disease_advisory", "Pest / Disease Help", ACTION_LEVELS.FIVE_REGULATED_EXPERT, "pest_disease_plant_health");
    if (/\b(livestock|cattle|goat|sheep|poultry|animal|veterinary|vet)\b/.test(lower)) return action("prepare_livestock_support_packet", "Livestock Support", ACTION_LEVELS.FIVE_REGULATED_EXPERT, "livestock_animal_health");
    if (/\b(drone|field observation|field scouting|scout|imagery|image observation|flight)\b/.test(lower)) return action(/\b(scout|scouting)\b/.test(lower) ? "prepare_field_scouting_report" : "prepare_drone_field_observation", "Drone Field Observation", ACTION_LEVELS.SIX_DRONE_FIELD_OPERATION, "drone_field_operations");
    if (/\b(shipment|shipping|logistics|cold chain|carrier|track this shipment|delivery|route plan)\b/.test(lower)) return action(/\b(cold chain)\b/.test(lower) ? "prepare_cold_chain_checklist" : /\b(track|tracking)\b/.test(lower) ? "prepare_shipment_tracking_summary" : "prepare_shipment_plan", "Shipment / Logistics", ACTION_LEVELS.FOUR_MARKETPLACE_LOGISTICS, "logistics_shipment_cold_chain");
    if (/\b(buyer|seller|marketplace|listing|trade match|offer|agritrade)\b/.test(lower)) {
      const type = /\bbuyer\b/.test(lower) ? "prepare_buyer_message" : /\bseller\b/.test(lower) ? "prepare_seller_message" : /\btrade match|match\b/.test(lower) ? "prepare_trade_match_summary" : "prepare_marketplace_listing";
      return action(type, "Marketplace Buyer/Seller", ACTION_LEVELS.FOUR_MARKETPLACE_LOGISTICS, "marketplace_buyer_seller_trade");
    }
    if (/\b(farm profile|farm intake|remember this farm|delete this buyer|deactivate this seller|deactivate|delete)\b/.test(lower)) return action(/\b(delete|deactivate)\b/.test(lower) ? "deactivate_farm_profile" : "prepare_farm_profile_summary", "Farm Profile / Intake", ACTION_LEVELS.ONE_PREPARE, "farm_management_records");
    if (/\b(training|workforce|extension training|farmer field school|certification)\b/.test(lower)) return action("prepare_agriculture_training_recommendation", "Training / Workforce", ACTION_LEVELS.ONE_PREPARE, "learning_workforce_extension_training");
    if (/\b(finance|grant|insurance|loan|subsidy|claim)\b/.test(lower)) return action(/\binsurance|claim\b/.test(lower) ? "prepare_crop_insurance_packet" : "prepare_finance_grant_packet", "Finance / Grants Packet", ACTION_LEVELS.FIVE_REGULATED_EXPERT, "finance_insurance_grants");
    return action("prepare_crop_advisory", "Crop Advisory", ACTION_LEVELS.ONE_PREPARE, "crop_advisory_extension");
  }

  function action(actionType, title, level, sourceCategory) {
    return { actionType, title, level, sourceCategory };
  }

  function isAgricultureCollaborationCommand(command = "") {
    const lower = String(command || "").toLowerCase();
    return /\b(crop|farm|farmer|agriculture|plants|pest|disease|soil|irrigation|weather|heat risk|livestock|marketplace listing|buyer|seller|trade match|shipment|cold chain|drone|field observation|extension service|farm profile|farm intake|agriculture sources|provider evidence|satellite source|weather source|delete this buyer|deactivate this seller|grant|crop insurance)\b/.test(lower);
  }

  function shouldHandleBeforeLegacy(command = "") {
    return isAgricultureCollaborationCommand(command);
  }

  function providerRowsForSource(sourceCategory, env = {}) {
    return providerRegistry(env).providers.filter(item => item.sourceCategory === sourceCategory);
  }

  function sourceLabelForProvider(item) {
    if (item.executionMode === "live") return `${item.displayName} - configured live`;
    if (item.executionMode === "sandbox") return `${item.displayName} - synthetic/sample data only`;
    if (item.executionMode === "localFallback") return `${item.displayName} - local fallback only`;
    return `${item.displayName} - supported, not connected`;
  }

  function buildPreparedPayload(actionDef, input, env = {}) {
    const providers = providerRowsForSource(actionDef.sourceCategory, env);
    const liveReady = providers.some(item => item.executionMode === "live");
    const synthetic = providers.some(item => item.executionMode === "sandbox");
    const localFallback = providers.some(item => item.executionMode === "localFallback") || !liveReady;
    const commonSafety = [
      "Verify locally before field decisions.",
      "Use local agronomist, extension, veterinarian, logistics, finance, or marketplace review where relevant.",
      "Nexus did not send, post, buy, sell, ship, pay, schedule, fly, diagnose, prescribe, or submit anything."
    ];
    const sections = payloadSections(actionDef);
    return {
      packetId: `agriculture-packet-${Date.now()}-${receipts.length + 1}`,
      title: actionDef.title,
      requestText: input.rawInput,
      actionType: actionDef.actionType,
      sourceCategory: actionDef.sourceCategory,
      sourceLabels: providers.map(sourceLabelForProvider),
      sourceSystems: providers.map(item => item.displayName),
      sourceMode: liveReady ? "live" : synthetic ? "synthetic" : localFallback ? "localFallback" : "blocked",
      dataFreshness: liveReady ? "fresh_at_provider_request_time" : synthetic ? "sample_not_live" : "local_or_farmer_reported",
      farmerReported: true,
      expertVerified: false,
      deviceReported: false,
      satelliteReported: actionDef.sourceCategory === "satellite_remote_sensing" && liveReady,
      weatherReported: actionDef.sourceCategory === "weather_climate_risk" && liveReady,
      imported: false,
      synthetic,
      localFallback,
      confidenceStatusNote: liveReady ? "source configured; still verify locally" : "limited confidence because live source/provider is not connected",
      summary: summaryForAction(actionDef),
      sections,
      checklist: checklistForAction(actionDef),
      safetyNotes: commonSafety,
      missingData: missingDataForAction(actionDef),
      reviewWarning: reviewWarningForAction(actionDef)
    };
  }

  function summaryForAction(actionDef) {
    const map = {
      prepare_crop_advisory: "Crop advisory prepared locally with source labels, field checks, and expert-review next steps.",
      prepare_pest_disease_advisory: "Pest/disease risk summary prepared. Chemical or pesticide decisions require label, legal, and local expert review.",
      prepare_irrigation_advisory: "Irrigation checklist prepared with local verification and water-source status reminders.",
      prepare_soil_summary: "Soil summary prepared from entered/local context; no lab result is claimed unless a configured source exists.",
      prepare_weather_risk_summary: "Weather and climate risk summary prepared. Live weather is claimed only when a weather source is configured.",
      prepare_heat_index_risk_summary: "Heat-risk summary prepared with hydration, shade, timing, and local weather verification reminders.",
      prepare_livestock_support_packet: "Livestock support checklist prepared. Nexus does not diagnose animals or prescribe treatment.",
      prepare_marketplace_listing: "Marketplace listing draft prepared; it was not posted live.",
      prepare_buyer_message: "Buyer message draft prepared; it was not sent.",
      prepare_seller_message: "Seller message draft prepared; it was not sent.",
      prepare_trade_match_summary: "Trade match summary prepared for review; no buyer/seller transaction occurred.",
      prepare_shipment_plan: "Shipment plan prepared; no carrier was booked.",
      prepare_shipment_tracking_summary: "Shipment tracking summary prepared; live carrier tracking is blocked until a carrier source is connected.",
      prepare_cold_chain_checklist: "Cold-chain checklist prepared; no live telemetry is claimed.",
      prepare_drone_field_observation: "Drone field observation packet prepared; no drone flight or scan occurred.",
      prepare_field_scouting_report: "Field scouting report prepared from user/local observation; no satellite or drone scan is claimed unless configured.",
      prepare_extension_service_handoff: "Extension-service handoff packet prepared; it was not sent.",
      prepare_agriculture_training_recommendation: "Agriculture training recommendation prepared for review.",
      prepare_farm_profile_summary: "Farm profile/intake summary prepared in local/session memory.",
      deactivate_farm_profile: "Local deactivation/delete receipt prepared; no production provider record was deleted.",
      prepare_finance_grant_packet: "Finance/grant packet prepared; no application, loan, insurance, subsidy, or payment was submitted.",
      prepare_crop_insurance_packet: "Crop insurance packet prepared; no claim was submitted."
    };
    return map[actionDef.actionType] || "Agriculture packet prepared locally with source labels and safety gates.";
  }

  function payloadSections(actionDef) {
    const base = ["request summary", "source status", "missing information", "local verification", "review requirements"];
    if (actionDef.sourceCategory === "marketplace_buyer_seller_trade") return [...base, "product", "quantity", "grade/quality", "price/currency", "pickup/delivery terms", "payment status"];
    if (actionDef.sourceCategory === "logistics_shipment_cold_chain") return [...base, "origin", "destination", "carrier", "commodity", "route status", "cold chain status"];
    if (actionDef.sourceCategory === "farm_management_records") return [...base, "farm profile", "fields", "crops", "livestock", "buyers/sellers", "advisory history"];
    if (actionDef.sourceCategory === "drone_field_operations") return [...base, "field boundary note", "mission objective", "pilot approval", "flight compliance", "image observation"];
    return base;
  }

  function checklistForAction(actionDef) {
    if (actionDef.sourceCategory === "pest_disease_plant_health") return ["crop and variety", "symptoms", "photos if user-provided", "field history", "weather context", "local extension review", "label/legal review before pesticide use"];
    if (actionDef.sourceCategory === "soil_land_water") return ["field location text", "soil texture if known", "irrigation source", "recent rainfall", "crop stage", "verify with soil/water test if possible"];
    if (actionDef.sourceCategory === "livestock_animal_health") return ["species", "age/count", "feed/water", "symptoms", "vaccination history if known", "contact veterinarian/local authority for urgent illness"];
    if (actionDef.sourceCategory === "marketplace_buyer_seller_trade") return ["commodity", "quantity", "grade", "price", "buyer/seller identity", "payment terms", "confirmation before posting/sending"];
    if (actionDef.sourceCategory === "logistics_shipment_cold_chain") return ["origin", "destination", "carrier", "pickup time", "delivery time", "temperature needs", "confirmation before carrier update"];
    if (actionDef.sourceCategory === "drone_field_operations") return ["field", "mission purpose", "human pilot", "weather", "airspace compliance", "no autonomous flight"];
    return ["crop/farm context", "location text if relevant", "date/time", "source labels", "local expert review where relevant"];
  }

  function missingDataForAction(actionDef) {
    if (actionDef.sourceCategory === "weather_climate_risk") return ["explicit farm location text", "configured live weather provider if live data is needed"];
    if (actionDef.sourceCategory === "satellite_remote_sensing") return ["field boundary", "configured satellite provider", "image date"];
    if (actionDef.sourceCategory === "marketplace_buyer_seller_trade") return ["verified counterparty", "quantity", "quality/grade", "payment/provider configuration"];
    return ["local observation details", "source/provider configuration if live data is required"];
  }

  function reviewWarningForAction(actionDef) {
    if (actionDef.level === ACTION_LEVELS.SIX_DRONE_FIELD_OPERATION) return "Drone execution requires licensed/human pilot approval, configured provider, and compliance review. No flight executed.";
    if (actionDef.level === ACTION_LEVELS.FIVE_REGULATED_EXPERT) return "Expert review required before regulated recommendations, pesticide/chemical, veterinary, finance, insurance, grant, or legal action.";
    if (actionDef.level >= ACTION_LEVELS.FOUR_MARKETPLACE_LOGISTICS) return "Marketplace/logistics execution is blocked until provider configuration, confirmation, and receipts are active.";
    if (actionDef.level >= ACTION_LEVELS.TWO_COMMUNICATE) return "Communication requires configured provider, user confirmation, and audit.";
    return "Prepared locally for review.";
  }

  function statusForAction(actionDef, env = {}, options = {}) {
    const providers = providerRowsForSource(actionDef.sourceCategory, env);
    const liveReady = providers.some(item => item.executionMode === "live");
    if (actionDef.level >= ACTION_LEVELS.SIX_DRONE_FIELD_OPERATION && (!flag(env, GLOBAL_FLAGS.drone) || !options.humanPilotApproved)) return "blocked_drone_execution";
    if (actionDef.level >= ACTION_LEVELS.FIVE_REGULATED_EXPERT && !options.expertReviewed && !flag(env, GLOBAL_FLAGS.expertReview)) return "queued_for_expert_review";
    if (actionDef.level >= ACTION_LEVELS.FOUR_MARKETPLACE_LOGISTICS) {
      if (actionDef.sourceCategory === "marketplace_buyer_seller_trade" && !flag(env, GLOBAL_FLAGS.marketplace)) return "blocked_marketplace_execution";
      if (actionDef.sourceCategory === "logistics_shipment_cold_chain" && !flag(env, GLOBAL_FLAGS.logistics)) return "blocked_logistics_execution";
    }
    if (actionDef.sourceCategory === "finance_insurance_grants" && !flag(env, GLOBAL_FLAGS.finance)) return "blocked_payment_finance_execution";
    if (actionDef.level >= ACTION_LEVELS.TWO_COMMUNICATE && !options.confirmed) return "requires_confirmation";
    if (!liveReady && providers.some(item => item.requiredEnv.length)) return "prepared_local_missing_credentials";
    return liveReady ? "prepared_live_source_gated" : "prepared_local_fallback";
  }

  function makeReceipt(actionDef, payload, status, options = {}) {
    const receipt = {
      receiptId: `agriculture-receipt-${Date.now()}-${receipts.length + 1}`,
      timestamp: new Date().toISOString(),
      action: actionDef.actionType,
      provider: payload.sourceSystems[0] || "local",
      providerDisplayName: payload.sourceSystems[0] || "Local agriculture runtime",
      category: actionDef.title,
      sourceCategory: actionDef.sourceCategory,
      executionMode: payload.sourceMode,
      status,
      subjectType: subjectTypeForAction(actionDef),
      sourceSystems: payload.sourceSystems,
      sourceMode: payload.sourceMode,
      syntheticDataUsed: payload.synthetic,
      confirmationRequired: actionDef.level >= ACTION_LEVELS.TWO_COMMUNICATE,
      confirmationCaptured: Boolean(options.confirmed),
      expertReviewRequired: actionDef.level >= ACTION_LEVELS.FIVE_REGULATED_EXPERT,
      expertReviewStatus: options.expertReviewed ? "reviewed" : actionDef.level >= ACTION_LEVELS.FIVE_REGULATED_EXPERT ? "required" : "not_required",
      authorizationRequired: actionDef.level >= ACTION_LEVELS.TWO_COMMUNICATE,
      authorizationStatus: "not_authorized_for_execution",
      marketplaceExecutionBlocked: status === "blocked_marketplace_execution",
      logisticsExecutionBlocked: status === "blocked_logistics_execution",
      droneExecutionBlocked: status === "blocked_drone_execution",
      paymentExecutionBlocked: status === "blocked_payment_finance_execution",
      regulatedActionBlocked: actionDef.level >= ACTION_LEVELS.FIVE_REGULATED_EXPERT && status !== "prepared_live_source_gated",
      outcome: payload.summary,
      blockedReason: blockedReasonForStatus(status),
      nextSteps: nextStepsForAction(actionDef, status),
      errors: []
    };
    receipts.unshift(receipt);
    receipts.splice(20);
    return receipt;
  }

  function subjectTypeForAction(actionDef) {
    if (/buyer|seller|marketplace|trade/.test(actionDef.actionType)) return "buyer/seller";
    if (/shipment|cold_chain/.test(actionDef.actionType)) return "shipment";
    if (/drone|scouting|observation/.test(actionDef.actionType)) return "drone";
    if (/livestock/.test(actionDef.actionType)) return "livestock";
    if (/farm_profile|farm_intake/.test(actionDef.actionType)) return "farm";
    return "crop";
  }

  function blockedReasonForStatus(status) {
    const map = {
      blocked_drone_execution: "Drone execution requires configured provider, licensed/human approval, confirmation, and compliance review.",
      queued_for_expert_review: "Expert/admin review is required before regulated or expert-only action.",
      blocked_marketplace_execution: "Marketplace execution is disabled or missing provider credentials.",
      blocked_logistics_execution: "Logistics/carrier execution is disabled or missing provider credentials.",
      blocked_payment_finance_execution: "Payment, finance, insurance, or grant execution is disabled.",
      requires_confirmation: "Explicit user confirmation is required before communication or external action.",
      prepared_local_missing_credentials: "Required source/provider credentials are missing."
    };
    return map[status] || "";
  }

  function nextStepsForAction(actionDef, status) {
    const steps = ["Review prepared packet", "Confirm local facts", "Keep receipt with source labels"];
    if (/missing|blocked/.test(status)) steps.push("Connect provider credentials and authorization before live execution");
    if (actionDef.level >= ACTION_LEVELS.FIVE_REGULATED_EXPERT) steps.push("Obtain expert/admin/provider review");
    if (actionDef.level >= ACTION_LEVELS.TWO_COMMUNICATE) steps.push("Capture explicit confirmation before sending or scheduling");
    return steps;
  }

  function queueReview(actionDef, payload, status, receipt) {
    const queueItem = {
      queueId: `agriculture-review-${Date.now()}-${expertReviewQueue.length + adminReviewQueue.length + 1}`,
      createdAt: receipt.timestamp,
      actionType: actionDef.actionType,
      title: actionDef.title,
      status,
      packetId: payload.packetId,
      sourceCategory: actionDef.sourceCategory,
      noExternalActionCompleted: true
    };
    if (actionDef.level >= ACTION_LEVELS.FIVE_REGULATED_EXPERT || /expert|drone|finance/.test(status)) expertReviewQueue.unshift(queueItem);
    if (/marketplace|logistics|drone|finance|deactivate|delete/.test(actionDef.actionType) || actionDef.level >= ACTION_LEVELS.FOUR_MARKETPLACE_LOGISTICS) adminReviewQueue.unshift(queueItem);
    expertReviewQueue.splice(20);
    adminReviewQueue.splice(20);
  }

  function prepareAction(inputValue, options = {}) {
    const input = normalizeInput(inputValue);
    const env = options.env || {};
    const actionDef = actionForText(input.rawInput || input.actionType || "");
    if (input.actionType && !input.rawInput) input.rawInput = input.actionType.replace(/_/g, " ");
    const payload = buildPreparedPayload(actionDef, input, env);
    const status = statusForAction(actionDef, env, options);
    const receipt = makeReceipt(actionDef, payload, status, options);
    if (actionDef.sourceCategory === "farm_management_records") {
      farmProfiles.unshift({ profileId: `farm-profile-${Date.now()}`, status: /deactivate|delete/.test(actionDef.actionType) ? "deactivated_local" : "local_session_profile_prepared", payload, receiptId: receipt.receiptId });
      farmProfiles.splice(10);
    }
    if (actionDef.level >= ACTION_LEVELS.FIVE_REGULATED_EXPERT || /blocked|queued/.test(status)) queueReview(actionDef, payload, status, receipt);
    const result = {
      ok: true,
      runtime: "nexus-agriculture-collaboration-runtime",
      action: actionDef.actionType,
      actionDetail: actionDef,
      provider: payload.sourceSystems[0] || "local",
      providerDisplayName: payload.sourceSystems[0] || "Local agriculture runtime",
      category: actionDef.title,
      sourceCategory: actionDef.sourceCategory,
      executionMode: payload.sourceMode,
      status,
      userVisibleStatus: messageForStatus(status, actionDef),
      adminVisibleStatus: `${messageForStatus(status, actionDef)} Missing env: ${missingForSource(actionDef.sourceCategory, env).join(", ") || "none"}.`,
      providerVisibleStatus: reviewWarningForAction(actionDef),
      confirmationRequired: actionDef.level >= ACTION_LEVELS.TWO_COMMUNICATE,
      confirmationCaptured: Boolean(options.confirmed),
      expertReviewRequired: actionDef.level >= ACTION_LEVELS.FIVE_REGULATED_EXPERT,
      expertReviewStatus: actionDef.level >= ACTION_LEVELS.FIVE_REGULATED_EXPERT ? "required" : "not_required",
      missingCredentialBlocked: status === "prepared_local_missing_credentials",
      authorizationBlocked: /blocked|queued|required/.test(status),
      marketplaceExecutionBlocked: status === "blocked_marketplace_execution",
      logisticsExecutionBlocked: status === "blocked_logistics_execution",
      droneExecutionBlocked: status === "blocked_drone_execution",
      paymentExecutionBlocked: status === "blocked_payment_finance_execution",
      regulatedActionBlocked: actionDef.level >= ACTION_LEVELS.FIVE_REGULATED_EXPERT,
      preparedPayload: payload,
      sentPayloadSummary: "No external send/share/schedule/post/payment/logistics/drone action was executed.",
      sourceLabels: payload.sourceLabels,
      receipt,
      nextSteps: receipt.nextSteps,
      errors: [],
      registry: providerRegistry(env),
      sourceReadiness: sourceReadinessMatrix(env),
      noExecutionAuthorized: true,
      noSecretValues: true
    };
    lastResult = result;
    return result;
  }

  function missingForSource(sourceCategory, env = {}) {
    return [...new Set(providerRowsForSource(sourceCategory, env).flatMap(item => item.missingEnvNames))];
  }

  function messageForStatus(status, actionDef) {
    if (status === "blocked_drone_execution") return `${actionDef.title} is prepared only. Drone mission/flight execution requires configured provider, licensed/human approval, confirmation, and compliance review. No flight executed.`;
    if (status === "queued_for_expert_review") return `${actionDef.title} is prepared and queued for expert/admin review. Nexus did not diagnose, prescribe, submit, send, or execute.`;
    if (status === "blocked_marketplace_execution") return `${actionDef.title} is prepared but marketplace action is not posted live. Provider credentials, authorization, confirmation, and receipt gates are required.`;
    if (status === "blocked_logistics_execution") return `${actionDef.title} is prepared but logistics/carrier execution or tracking is not connected. No shipment was updated or canceled.`;
    if (status === "blocked_payment_finance_execution") return `${actionDef.title} is prepared but finance/payment/insurance/grant execution is disabled. Nothing was submitted or paid.`;
    if (status === "requires_confirmation") return `${actionDef.title} is prepared. External communication or coordination requires explicit confirmation and configured provider gates.`;
    if (status === "prepared_local_missing_credentials") return `${actionDef.title} is prepared locally. Live source/provider credentials are missing, so Nexus used local fallback and did not claim live data.`;
    if (status === "prepared_live_source_gated") return `${actionDef.title} used configured source readiness but execution remains gated by confirmation, review, and authorization.`;
    return `${actionDef.title} is prepared locally with source labels and receipts. No external agriculture action was executed.`;
  }

  function attemptExecution(inputValue, options = {}) {
    const result = prepareAction(inputValue, options);
    if (!options.confirmed && result.confirmationRequired) {
      result.status = "blocked_confirmation_required";
      result.userVisibleStatus = "Explicit confirmation is required before any external agriculture action. Nothing was executed.";
      result.noExecutionAuthorized = true;
      return result;
    }
    if (result.expertReviewRequired && !options.expertReviewed) {
      result.status = "blocked_expert_review_required";
      result.userVisibleStatus = "Expert/admin review is required before this agriculture action can move forward. Nothing was executed.";
      result.noExecutionAuthorized = true;
      return result;
    }
    if (!result.registry.executionAuthority) {
      result.status = "blocked_execution_disabled";
      result.userVisibleStatus = "Provider execution is not enabled for this agriculture lane. Nexus prepared the packet and receipt only.";
      result.noExecutionAuthorized = true;
      return result;
    }
    result.status = "ready_for_confirmed_provider_execution_but_not_sent_by_runtime";
    result.userVisibleStatus = "All configured gates appear ready, but this runtime returns a final review packet instead of silently executing.";
    result.noExecutionAuthorized = false;
    return result;
  }

  function getWeatherStatus(env = {}) {
    return sourceReadinessMatrix(env).rows.find(row => row.sourceCategory === "weather_climate_risk");
  }

  function getCurrentWeather(options = {}, env = {}) {
    const status = getWeatherStatus(env);
    return {
      ok: status.executionMode === "live",
      mode: status.executionMode,
      locationStatus: options.location ? "explicit_location_text" : "location_missing",
      timestamp: new Date().toISOString(),
      sourceLabel: status.executionMode === "live" ? "Configured weather source" : status.executionMode === "synthetic" ? "Synthetic heat-risk sample - not live weather" : "Live weather source is not configured.",
      noLiveWeatherClaim: status.executionMode !== "live"
    };
  }

  function getForecast(options = {}, env = {}) { return getCurrentWeather(options, env); }
  function getHeatIndexRisk(options = {}, env = {}) { return { ...getCurrentWeather(options, env), riskTypes: ["heat", "hydration", "shade", "work timing"] }; }
  function getRainfallSummary(options = {}, env = {}) { return { ...getCurrentWeather(options, env), riskTypes: ["rainfall", "drought", "irrigation timing"] }; }
  function getDroughtRisk(options = {}, env = {}) { return { ...getCurrentWeather(options, env), riskTypes: ["drought", "water availability"] }; }
  function getClimateRiskSummary(options = {}, env = {}) { return { ...getCurrentWeather(options, env), riskTypes: ["climate trend", "seasonal uncertainty"] }; }
  function buildWeatherRiskAdvisory(input, options = {}) { return prepareAction(input || "prepare weather risk summary", options); }
  function buildWeatherReceipt(input, options = {}) { return buildWeatherRiskAdvisory(input, options).receipt; }

  function getSoilStatus(env = {}) { return sourceReadinessMatrix(env).rows.find(row => row.sourceCategory === "soil_land_water"); }
  function getSoilProfile(options = {}, env = {}) { return { ok: getSoilStatus(env).executionMode === "live", mode: getSoilStatus(env).executionMode, label: getSoilStatus(env).executionMode === "live" ? "Configured soil source" : "Local/sample soil profile - not a lab result" }; }
  function getSoilMoistureSummary(options = {}, env = {}) { return getSoilProfile(options, env); }
  function getWaterAvailabilityStatus(options = {}, env = {}) { return getSoilProfile(options, env); }
  function buildIrrigationAdvisory(input, options = {}) { return prepareAction(input || "prepare irrigation advisory", options); }
  function buildSoilHealthSummary(input, options = {}) { return prepareAction(input || "prepare soil summary", options); }
  function buildSoilReceipt(input, options = {}) { return buildSoilHealthSummary(input, options).receipt; }

  const buildCropAdvisory = (input, options = {}) => prepareAction(input || "prepare crop advisory", options);
  const buildCropCalendarSummary = (input, options = {}) => prepareAction(input || "prepare crop calendar", options);
  const buildPestRiskSummary = (input, options = {}) => prepareAction(input || "prepare pest disease advisory", options);
  const buildDiseaseRiskSummary = buildPestRiskSummary;
  const buildIPMChecklist = buildPestRiskSummary;
  const buildExtensionHandoff = (input, options = {}) => prepareAction(input || "prepare extension service handoff", options);
  const buildCropAdvisoryReceipt = (input, options = {}) => buildCropAdvisory(input, options).receipt;
  const buildLivestockSupportPacket = (input, options = {}) => prepareAction(input || "prepare livestock support packet", options);
  const buildAnimalHealthChecklist = buildLivestockSupportPacket;
  const buildFeedWaterChecklist = buildLivestockSupportPacket;
  const buildVeterinaryHandoff = buildLivestockSupportPacket;
  const buildLivestockMarketSummary = buildLivestockSupportPacket;
  const buildLivestockReceipt = (input, options = {}) => buildLivestockSupportPacket(input, options).receipt;
  const prepareMarketplaceListing = (input, options = {}) => prepareAction(input || "create a marketplace listing", options);
  const prepareBuyerMessage = (input, options = {}) => prepareAction(input || "message a buyer", options);
  const prepareSellerMessage = (input, options = {}) => prepareAction(input || "message a seller", options);
  const prepareTradeMatchSummary = (input, options = {}) => prepareAction(input || "find a trade match", options);
  const prepareOfferReview = prepareTradeMatchSummary;
  const prepareTransactionReceipt = (input, options = {}) => prepareMarketplaceListing(input, options).receipt;
  const executeMarketplaceAction = (input, options = {}) => attemptExecution(input || "create live marketplace listing", options);
  const cancelMarketplaceAction = executeMarketplaceAction;
  const updateMarketplaceAction = executeMarketplaceAction;
  const prepareShipmentPlan = (input, options = {}) => prepareAction(input || "plan a shipment", options);
  const prepareShipmentTrackingSummary = (input, options = {}) => prepareAction(input || "track this shipment", options);
  const prepareRoutePlan = prepareShipmentPlan;
  const prepareColdChainChecklist = (input, options = {}) => prepareAction(input || "prepare cold chain checklist", options);
  const prepareDeliveryConfirmation = prepareShipmentPlan;
  const executeShipmentUpdate = (input, options = {}) => attemptExecution(input || "update shipment", options);
  const cancelShipment = executeShipmentUpdate;
  const createShipmentReceipt = (input, options = {}) => prepareShipmentPlan(input, options).receipt;
  const prepareDroneFieldObservation = (input, options = {}) => prepareAction(input || "prepare drone field observation", options);
  const prepareFieldScoutingReport = (input, options = {}) => prepareAction(input || "prepare field scouting report", options);
  const prepareDroneMissionPlan = prepareDroneFieldObservation;
  const prepareImageObservationSummary = prepareDroneFieldObservation;
  const queueDroneMissionForReview = prepareDroneFieldObservation;
  const buildDroneReceipt = (input, options = {}) => prepareDroneFieldObservation(input, options).receipt;

  function createOrUpdateFarmProfile(input = {}, options = {}) {
    return prepareAction({ rawInput: typeof input === "string" ? input : "create a farm profile", ...input }, options);
  }

  function retrieveFarmIntakeSummary() {
    return { ok: true, profiles: farmProfiles.slice(), sourceMode: "local_session", noProductionStorageClaim: true };
  }

  function deactivateFarmProfile(input = {}, options = {}) {
    return prepareAction({ rawInput: typeof input === "string" ? input : "deactivate farm profile", ...input }, options);
  }

  const deactivateBuyerSeller = deactivateFarmProfile;

  async function processCommand(command = "", options = {}) {
    return prepareAction({ rawInput: command }, options);
  }

  function escapeHtml(value = "") {
    return String(value).replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[char]));
  }

  function setText(selector, value) {
    const el = root?.document?.querySelector?.(selector);
    if (el) el.textContent = value;
  }

  function mount() {
    const doc = root?.document;
    const panel = doc?.querySelector?.("[data-nexus-agriculture-collaboration-runtime]");
    if (!panel) return null;
    renderCards(panel);
    renderSources(sourceReadinessMatrix(), panel);
    renderEvidence(providerEvidence(), panel);
    renderQueue(panel);
    renderReceipts(panel);
    setText("[data-nexus-agriculture-status]", "Agriculture collaboration local-ready; live execution gated.");
    return panel;
  }

  function renderCards(panel) {
    const target = panel.querySelector("[data-nexus-agriculture-cards]");
    if (!target) return;
    target.innerHTML = RUNTIME_CARDS.map(item => `
      <article class="nexus-agriculture-collaboration-card" data-nexus-agriculture-card="${escapeHtml(item.id)}" data-nexus-agriculture-action-type="${escapeHtml(item.actionType)}">
        <div>
          <strong>${escapeHtml(item.title)}</strong>
          <p>${escapeHtml(item.description)}</p>
          <small>${escapeHtml(item.sourceCategory.replace(/_/g, " "))}</small>
        </div>
        <div class="nexus-agriculture-collaboration-card-actions">
          <button type="button" data-nexus-agriculture-action="prepare" data-nexus-agriculture-action-type="${escapeHtml(item.actionType)}">Prepare</button>
          <button type="button" data-nexus-agriculture-action="review" data-nexus-agriculture-action-type="${escapeHtml(item.actionType)}">Review</button>
          <button type="button" data-nexus-agriculture-action="execute-gate" data-nexus-agriculture-action-type="${escapeHtml(item.actionType)}">Check gate</button>
        </div>
      </article>
    `).join("");
  }

  function renderSources(matrix, panel = root?.document?.querySelector?.("[data-nexus-agriculture-collaboration-runtime]")) {
    const target = panel?.querySelector?.("[data-nexus-agriculture-sources]");
    if (!target) return;
    target.innerHTML = matrix.rows.map(row => `
      <span class="nexus-agriculture-source-row">
        <b>${escapeHtml(row.displayName)}</b>
        <small>${escapeHtml(row.configuredStatus)} - missing: ${escapeHtml(row.missingCredentials.join(", ") || "none")}</small>
      </span>
    `).join("");
  }

  function renderEvidence(evidence, panel = root?.document?.querySelector?.("[data-nexus-agriculture-collaboration-runtime]")) {
    const target = panel?.querySelector?.("[data-nexus-agriculture-evidence]");
    if (!target) return;
    target.innerHTML = evidence.categories.slice(0, 12).map(item => `
      <span class="nexus-agriculture-evidence-row">
        <b>${escapeHtml(item.sourceCategory.replace(/_/g, " "))}</b>
        <small>${escapeHtml(item.configuredStatus)} - examples: ${escapeHtml(item.realExamples.slice(0, 3).join(", "))}</small>
      </span>
    `).join("");
  }

  function renderQueue(panel = root?.document?.querySelector?.("[data-nexus-agriculture-collaboration-runtime]")) {
    const target = panel?.querySelector?.("[data-nexus-agriculture-review-queue]");
    if (!target) return;
    const items = [...expertReviewQueue, ...adminReviewQueue].slice(0, 8);
    target.innerHTML = items.length
      ? items.map(item => `<span><b>${escapeHtml(item.title)}</b><small>${escapeHtml(item.status)} - ${escapeHtml(item.packetId)}</small></span>`).join("")
      : "<span><b>No agriculture review items yet</b><small>Regulated, marketplace, logistics, drone, finance, and expert-only packets appear here before external action.</small></span>";
  }

  function renderReceipts(panel = root?.document?.querySelector?.("[data-nexus-agriculture-collaboration-runtime]")) {
    const target = panel?.querySelector?.("[data-nexus-agriculture-receipts]");
    if (!target) return;
    target.innerHTML = receipts.length
      ? receipts.slice(0, 8).map(item => `<span><b>${escapeHtml(item.action)}</b><small>${escapeHtml(item.status)} - ${escapeHtml(item.receiptId)}</small></span>`).join("")
      : "<span><b>No agriculture receipts yet</b><small>Receipts appear after Nexus prepares a packet or checks an execution gate.</small></span>";
  }

  function render(result, panel = root?.document?.querySelector?.("[data-nexus-agriculture-collaboration-runtime]")) {
    if (!panel || !result) return;
    const target = panel.querySelector("[data-nexus-agriculture-result]");
    if (target) {
      target.innerHTML = `
        <strong>${escapeHtml(result.category || "Agriculture collaboration")}</strong>
        <p>${escapeHtml(result.userVisibleStatus || "")}</p>
        <dl>
          <dt>Status</dt><dd>${escapeHtml(result.status)}</dd>
          <dt>Action</dt><dd>${escapeHtml(result.action || "")}</dd>
          <dt>Source mode</dt><dd>${escapeHtml(result.executionMode || "")}</dd>
          <dt>Missing config</dt><dd>${escapeHtml((missingForSource(result.sourceCategory || "", {}).join(", ")) || (result.preparedPayload?.sourceMode === "live" ? "none" : "see source matrix"))}</dd>
          <dt>Receipt</dt><dd>${escapeHtml(result.receipt?.receiptId || "")}</dd>
        </dl>
        <div class="nexus-agriculture-source-labels">${(result.sourceLabels || []).slice(0, 6).map(label => `<span>${escapeHtml(label)}</span>`).join("")}</div>
      `;
    }
    renderSources(result.sourceReadiness || sourceReadinessMatrix(), panel);
    renderEvidence(providerEvidence(), panel);
    renderQueue(panel);
    renderReceipts(panel);
  }

  async function refreshStatus() {
    const panel = mount();
    try {
      const response = await root.fetch?.("/api/agriculture-collaboration/status");
      const status = await response?.json?.();
      if (status?.sourceReadiness) renderSources(status.sourceReadiness, panel);
      if (status?.providerEvidence) renderEvidence(status.providerEvidence, panel);
      setText("[data-nexus-agriculture-status]", status?.flags?.agricultureEnabled ? "Agriculture runtime enabled; live execution still gated." : "Agriculture runtime local-ready; live sources/execution disabled.");
      return status;
    } catch (error) {
      setText("[data-nexus-agriculture-status]", "Agriculture status unavailable locally; safety gates remain active.");
      return { ok: false, error: "status_unavailable" };
    }
  }

  function handlePanelAction(actionName, actionType) {
    const command = actionType ? `${actionType.replace(/_/g, " ")} agriculture` : "show agriculture provider evidence";
    const result = actionName === "execute-gate" ? attemptExecution(command, { confirmed: false, expertReviewed: false }) : prepareAction(command, {});
    render(result);
    return result;
  }

  function getReceipts() { return receipts.slice(); }
  function getExpertReviewQueue() { return expertReviewQueue.slice(); }
  function getAdminReviewQueue() { return adminReviewQueue.slice(); }

  return Object.freeze({
    GLOBAL_FLAGS,
    ACTION_LEVELS,
    SOURCE_CATEGORIES,
    PROVIDERS,
    RUNTIME_CARDS,
    providerRegistry,
    sourceReadinessMatrix,
    providerEvidence,
    prepareAction,
    attemptExecution,
    process: processCommand,
    isAgricultureCollaborationCommand,
    shouldHandleBeforeLegacy,
    getWeatherStatus,
    getCurrentWeather,
    getForecast,
    getHeatIndexRisk,
    getRainfallSummary,
    getDroughtRisk,
    getClimateRiskSummary,
    buildWeatherRiskAdvisory,
    buildWeatherReceipt,
    getSoilStatus,
    getSoilProfile,
    getSoilMoistureSummary,
    getWaterAvailabilityStatus,
    buildIrrigationAdvisory,
    buildSoilHealthSummary,
    buildSoilReceipt,
    buildCropAdvisory,
    buildCropCalendarSummary,
    buildPestRiskSummary,
    buildDiseaseRiskSummary,
    buildIPMChecklist,
    buildExtensionHandoff,
    buildCropAdvisoryReceipt,
    buildLivestockSupportPacket,
    buildAnimalHealthChecklist,
    buildFeedWaterChecklist,
    buildVeterinaryHandoff,
    buildLivestockMarketSummary,
    buildLivestockReceipt,
    prepareMarketplaceListing,
    prepareBuyerMessage,
    prepareSellerMessage,
    prepareTradeMatchSummary,
    prepareOfferReview,
    prepareTransactionReceipt,
    executeMarketplaceAction,
    cancelMarketplaceAction,
    updateMarketplaceAction,
    prepareShipmentPlan,
    prepareShipmentTrackingSummary,
    prepareRoutePlan,
    prepareColdChainChecklist,
    prepareDeliveryConfirmation,
    executeShipmentUpdate,
    cancelShipment,
    createShipmentReceipt,
    prepareDroneFieldObservation,
    prepareFieldScoutingReport,
    prepareDroneMissionPlan,
    prepareImageObservationSummary,
    queueDroneMissionForReview,
    buildDroneReceipt,
    createOrUpdateFarmProfile,
    retrieveFarmIntakeSummary,
    deactivateFarmProfile,
    deactivateBuyerSeller,
    mount,
    render,
    refreshStatus,
    handlePanelAction,
    getReceipts,
    getExpertReviewQueue,
    getAdminReviewQueue,
    getLastResult: () => lastResult
  });
});
