const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const read = file => fs.readFileSync(path.join(root, file), "utf8");
const includes = (haystack, needle, label) => assert(haystack.includes(needle), `${label} must include ${needle}`);
const excludes = (haystack, needle, label) => assert(!haystack.includes(needle), `${label} must not include ${needle}`);
const runtime = require("../public/nexus-agriculture-collaboration-runtime.js");

function assertCommonRuntime() {
  assert(runtime, "agriculture collaboration runtime should load");
  [
    "providerRegistry",
    "sourceReadinessMatrix",
    "providerEvidence",
    "prepareAction",
    "attemptExecution",
    "isAgricultureCollaborationCommand",
    "shouldHandleBeforeLegacy",
    "process",
    "getWeatherStatus",
    "getCurrentWeather",
    "buildIrrigationAdvisory",
    "buildCropAdvisory",
    "buildLivestockSupportPacket",
    "prepareMarketplaceListing",
    "prepareShipmentPlan",
    "prepareDroneFieldObservation",
    "createOrUpdateFarmProfile"
  ].forEach(name => assert.equal(typeof runtime[name], "function", `${name} should be a function`));

  [
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
  ].forEach(category => assert(runtime.SOURCE_CATEGORIES.includes(category), `source category ${category} should exist`));

  [
    "NOAA / National Weather Service",
    "OpenWeather",
    "NASA Earthdata",
    "USDA NRCS Soil Survey / SSURGO",
    "PlantVillage",
    "CABI crop protection",
    "FAO livestock resources",
    "AgriTrade internal marketplace",
    "Carrier API placeholder",
    "DJI/cloud flight provider placeholder",
    "Koachlearn/Nexus learning"
  ].forEach(label => assert(runtime.PROVIDERS.some(provider => provider.displayName === label), `provider ${label} should exist`));

  assert(runtime.RUNTIME_CARDS.length >= 17, "runtime should expose agriculture workflow cards");
}

function assertRegistryAndSources() {
  const registry = runtime.providerRegistry({});
  assert.equal(registry.noSecretValues, true, "registry should not expose secrets");
  assert.equal(registry.noFakeLiveWeather, true, "registry should reject fake live weather");
  assert(registry.providers.some(provider => provider.id === "openweather" && provider.missingEnvNames.includes("OPENWEATHER_API_KEY")), "OpenWeather missing env should be reported");
  assert(registry.providers.some(provider => provider.id === "agritrade_internal" && provider.missingEnvNames.includes("AGRITRADE_PROVIDER_API_KEY")), "AgriTrade missing env should be reported");

  const configured = runtime.providerRegistry({
    NEXUS_AGRICULTURE_ENABLED: "true",
    NEXUS_AGRICULTURE_LIVE_SOURCES_ENABLED: "true",
    OPENWEATHER_API_KEY: "configured-openweather-secret",
    AGRITRADE_PROVIDER_API_KEY: "configured-agritrade-secret"
  });
  const json = JSON.stringify(configured);
  excludes(json, "configured-openweather-secret", "configured registry");
  excludes(json, "configured-agritrade-secret", "configured registry");
  assert(configured.providers.some(provider => provider.id === "openweather" && provider.executionMode === "live"), "OpenWeather should become live source-ready when configured");

  const matrix = runtime.sourceReadinessMatrix({});
  assert.equal(matrix.rows.length, runtime.SOURCE_CATEGORIES.length, "source matrix should include every source category");
  assert(matrix.rows.some(row => row.sourceCategory === "satellite_remote_sensing" && row.configuredStatus !== "Configured for live use"), "satellite should not fake live readiness");
}

function assertRuntimeActionsAndSafety() {
  const crop = runtime.prepareAction("Help me with a crop issue", {});
  assert.equal(crop.action, "prepare_crop_advisory", "crop prompt should route");
  assert.equal(crop.noExecutionAuthorized, true, "crop advisory should not execute externally");
  assert(crop.preparedPayload.sourceLabels.length, "crop advisory should include source labels");

  const pest = runtime.prepareAction("What is wrong with my plants and can I spray pesticide?", {});
  assert.equal(pest.action, "prepare_pest_disease_advisory", "pest action should route");
  assert.equal(pest.expertReviewRequired, true, "pesticide-related advisory should require expert review");
  includes(pest.userVisibleStatus, "queued for expert/admin review", "pest status");

  const weather = runtime.prepareAction("Check heat risk for this farm", {});
  assert.equal(weather.action, "prepare_heat_index_risk_summary", "heat action should route");
  assert.notEqual(weather.executionMode, "live", "unconfigured weather should not claim live mode");

  const livestock = runtime.prepareAction("Help with livestock illness", {});
  assert.equal(livestock.action, "prepare_livestock_support_packet", "livestock action should route");
  assert.equal(livestock.regulatedActionBlocked, true, "livestock should stay review-gated");

  const market = runtime.attemptExecution("Create a marketplace listing", { confirmed: true });
  assert.equal(market.marketplaceExecutionBlocked, true, "marketplace execution should block by default");
  assert.equal(market.noExecutionAuthorized, true, "marketplace block should preserve no-execution flag");

  const logistics = runtime.attemptExecution("Track this shipment", { confirmed: true });
  assert.equal(logistics.logisticsExecutionBlocked, true, "logistics execution should block by default");

  const drone = runtime.attemptExecution("Prepare a drone field observation and launch drone", { confirmed: true });
  assert.equal(drone.droneExecutionBlocked, true, "drone execution should block without human/pilot approval");

  const farm = runtime.prepareAction("Create a farm profile", {});
  assert.equal(farm.receipt.subjectType, "farm", "farm profile should create farm receipt");
  assert(runtime.getReceipts().length >= 1, "receipts should be recorded");
}

function assertAdapters() {
  const weather = runtime.getCurrentWeather({ location: "Stockton, CA" }, {});
  assert.equal(weather.noLiveWeatherClaim, true, "weather fallback should not claim live weather");
  assert(/not configured|local|Synthetic/.test(weather.sourceLabel), "weather fallback should be labeled");
  const soil = runtime.getSoilProfile({}, {});
  assert(/Local|sample|Configured/.test(soil.label), "soil profile should label source mode");
  const livestock = runtime.buildLivestockSupportPacket("livestock support", {});
  assert.equal(livestock.action, "prepare_livestock_support_packet", "livestock adapter should build packet");
}

function assertUiAndServerWiring() {
  const index = read("public/index.html");
  const app = read("public/app.js");
  const conversation = read("public/nexus-conversational-voice-runtime.js");
  const server = read("server.js");
  includes(index, "id=\"nexusAgricultureCollaborationRuntime\"", "index");
  includes(index, "data-nexus-agriculture-cards", "index");
  includes(index, "/nexus-agriculture-collaboration-runtime.js", "index");
  includes(app, "handleNexusAgricultureCollaborationRuntimeCommand", "app");
  includes(app, "NexusAgricultureCollaborationRuntime?.mount", "app");
  includes(conversation, "NexusAgricultureCollaborationRuntime", "conversation runtime");
  includes(conversation, "No agriculture execution was authorized", "conversation runtime");
  includes(server, "nexusAgricultureCollaborationRuntime", "server");
  includes(server, "/api/agriculture-collaboration/status", "server");
  includes(server, "/api/agriculture-collaboration/action", "server");
  includes(server, "/api/agriculture-collaboration/execute", "server");
}

function assertProviderEvidenceAndReceipts() {
  const evidence = runtime.providerEvidence({});
  assert.equal(evidence.categories.length, runtime.SOURCE_CATEGORIES.length, "evidence should include every category");
  assert.equal(evidence.safety.noFakeDroneFlight, true, "evidence should include drone safety");
  const before = runtime.getReceipts().length;
  const result = runtime.prepareAction("Prepare cold chain checklist", {});
  assert(result.receipt.receiptId, "receipt id should exist");
  assert(runtime.getReceipts().length >= before, "receipt list should be readable");
  assert(Array.isArray(runtime.getExpertReviewQueue()), "expert queue should be readable");
  assert(Array.isArray(runtime.getAdminReviewQueue()), "admin queue should be readable");
}

function assertCommunicationIntegration() {
  [
    "public/nexus-full-communication-runtime.js",
    "public/nexus-agriculture-collaboration-runtime.js"
  ].forEach(file => assert(fs.existsSync(path.join(root, file)), `${file} should exist`));
  const server = read("server.js");
  const index = read("public/index.html");
  const runtimeSource = read("public/nexus-agriculture-collaboration-runtime.js");
  includes(server, "/api/communication/status", "server communication status route");
  includes(server, "/api/communication/prepare-message", "server communication prepare route");
  includes(index, "/nexus-full-communication-runtime.js", "index communication runtime script");
  includes(runtimeSource, "nexus-full-communication-runtime", "agriculture runtime communication metadata");
  includes(runtimeSource, "/api/communication/prepare-message", "agriculture runtime communication route metadata");

  const buyer = runtime.prepareBuyerMessage("Message a buyer about maize price", {});
  assert.equal(buyer.action, "prepare_buyer_message", "buyer message should route to agriculture communication action");
  assert.equal(buyer.confirmationRequired, true, "buyer message should require confirmation before send");
  assert.equal(buyer.communicationRuntimeUsed, true, "buyer message should mark communication runtime usage");
  assert.equal(buyer.communicationStatus, "prepared_locally_not_sent", "buyer message should remain a local draft");
  assert(buyer.communicationReceiptId && buyer.communicationReceiptId.startsWith("communication-draft-local-"), "buyer message should cross-reference local communication receipt");
  assert.equal(buyer.preparedPayload.communicationDraft.runtime, "nexus-full-communication-runtime", "buyer message should identify communication runtime");
  assert.equal(buyer.preparedPayload.communicationDraft.sent, false, "buyer message draft should not be sent");
  includes(buyer.preparedPayload.communicationDraft.safeStatus, "not sent", "buyer communication safe status");

  const seller = runtime.prepareSellerMessage("Message a seller about produce quality", {});
  assert.equal(seller.communicationRuntimeUsed, true, "seller message should mark communication runtime usage");
  assert.equal(seller.receipt.communicationRuntimeUsed, true, "seller receipt should mark communication runtime usage");
  assert.equal(seller.receipt.communicationStatus, "prepared_locally_not_sent", "seller receipt should show prepared-only status");

  const extension = runtime.buildExtensionHandoff("Prepare extension service handoff", {});
  assert.equal(extension.action, "prepare_extension_service_handoff", "extension service handoff should route");
  assert.equal(extension.communicationRuntimeUsed, true, "extension handoff should mark communication runtime usage");
  assert.equal(extension.preparedPayload.communicationDraft.sent, false, "extension handoff should not be sent");

  const execute = runtime.attemptExecution("Message a buyer", { confirmed: true });
  assert.equal(execute.noExecutionAuthorized, true, "communication execution should remain blocked without provider execution authority");
  assert.notEqual(execute.userVisibleStatus.toLowerCase().includes("sent successfully"), true, "agriculture communication should not claim sent success");
}

function assertNoUnsafeClaims() {
  const files = [
    "public/nexus-agriculture-collaboration-runtime.js",
    "public/index.html",
    "server.js",
    "docs/NEXUS_AGRICULTURE_INTELLIGENCE_COLLABORATION_RUNTIME.md"
  ].filter(file => fs.existsSync(path.join(root, file))).map(read).join("\n");
  [
    "USDA connected",
    "NOAA live",
    "satellite scan completed",
    "buyer contacted",
    "listing posted",
    "shipment tracked",
    "drone flew",
    "drone scanned",
    "pesticide approved",
    "veterinary diagnosis completed",
    "payment completed"
  ].forEach(unsafe => excludes(files.toLowerCase(), unsafe.toLowerCase(), "agriculture collaboration files"));
  includes(files, "No external agriculture action was executed", "runtime safety copy");
}

function run(section = "all") {
  assertCommonRuntime();
  const checks = {
    registry: assertRegistryAndSources,
    runtime: assertRuntimeActionsAndSafety,
    sources: assertRegistryAndSources,
    weather: assertAdapters,
    soil: assertAdapters,
    crop: assertRuntimeActionsAndSafety,
    livestock: assertRuntimeActionsAndSafety,
    marketplace: assertRuntimeActionsAndSafety,
    logistics: assertRuntimeActionsAndSafety,
    drone: assertRuntimeActionsAndSafety,
    farm: assertRuntimeActionsAndSafety,
    ui: assertUiAndServerWiring,
    evidence: assertProviderEvidenceAndReceipts,
    receipts: assertProviderEvidenceAndReceipts,
    communication: assertCommunicationIntegration,
    safety: assertNoUnsafeClaims
  };
  if (section === "all") {
    Object.values(checks).forEach(check => check());
  } else {
    assert(checks[section], `Unknown agriculture QA section: ${section}`);
    checks[section]();
  }
  console.log(`[nexus-agriculture-collaboration-${section}-qa] passed`);
}

module.exports = { run };
