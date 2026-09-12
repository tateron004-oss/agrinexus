const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  doc: path.join(root, "docs", "NEXUS_AGRICULTURE_PUBLIC_SOURCE_CONTRACTS_PHASE_20.md"),
  roadmap: path.join(root, "docs", "NEXUS_100_FULL_MULTILINGUAL_ACCESS_PLATFORM_ROADMAP.md"),
  baseline: path.join(root, "public", "nexus-public-data-connector-baseline.js"),
  module: path.join(root, "public", "nexus-agriculture-public-source-contracts.js"),
  index: path.join(root, "public", "index.html"),
  app: path.join(root, "public", "app.js"),
  server: path.join(root, "server.js"),
  packageJson: path.join(root, "package.json"),
  qaSuite: path.join(root, "scripts", "qa-suite.js")
};

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function assert(condition, message) {
  if (!condition) {
    console.error(`[nexus-agriculture-public-source-contracts-qa] ${message}`);
    process.exit(1);
  }
}

Object.values(paths).forEach(filePath => {
  assert(fs.existsSync(filePath), `${path.relative(root, filePath)} must exist.`);
});

const doc = read(paths.doc);
const roadmap = read(paths.roadmap);
const baseline = require(paths.baseline).getPublicDataConnectorBaseline();
const moduleSource = read(paths.module);
const contracts = require(paths.module).getAgriculturePublicSourceContracts();
const index = read(paths.index);
const app = read(paths.app);
const server = read(paths.server);
const packageData = JSON.parse(read(paths.packageJson));
const qaSuite = read(paths.qaSuite);

const requiredSourceIds = [
  "agriculture.extension.advisory",
  "agriculture.weather.climate",
  "agriculture.soil.fertilizer",
  "agriculture.irrigation.water",
  "agriculture.pest.disease",
  "agriculture.crop.calendar",
  "agriculture.market.context",
  "agriculture.cooperative.public_info"
];

const requiredFields = [
  "sourceId",
  "domain",
  "displayName",
  "sourceOwnerType",
  "agricultureSourceCategory",
  "supportedFarmerQuestions",
  "expectedDataFields",
  "sourceVerificationRequirements",
  "freshnessRequirements",
  "regionalizationRequirements",
  "languageLocalizationRequirements",
  "allowedResponseStates",
  "forbiddenClaims",
  "permissionRequirements",
  "auditRequirements",
  "futureRoadmapPhase"
];

const disabledFlags = [
  "fetchEnabled",
  "liveWeatherEnabled",
  "liveMarketPriceEnabled",
  "cropDiagnosisEnabled",
  "providerContactEnabled",
  "buyerSellerContactEnabled",
  "marketplaceTransactionEnabled",
  "paymentEnabled",
  "logisticsDispatchEnabled",
  "droneDispatchEnabled",
  "locationSharingEnabled",
  "executionEnabled"
];

assert(roadmap.includes("| Phase 20 | Agriculture public sources |"), "Nexus 100 roadmap must include Phase 20 agriculture public sources.");
assert(baseline.some(item => item.connectorId === "public.agriculture.extension"), "Phase 19 baseline must include agriculture extension connector.");
assert(Array.isArray(contracts), "agriculture source contracts must export an array.");
assert(contracts.length === requiredSourceIds.length, `agriculture contracts must include exactly ${requiredSourceIds.length} entries.`);

requiredSourceIds.forEach(sourceId => {
  const contract = contracts.find(item => item.sourceId === sourceId);
  assert(contract, `contracts must include ${sourceId}`);
  requiredFields.forEach(field => {
    assert(Object.prototype.hasOwnProperty.call(contract, field), `${sourceId} must include ${field}`);
  });
  disabledFlags.forEach(flag => {
    assert(contract[flag] === false, `${sourceId} must keep ${flag} false`);
  });
  assert(contract.domain === "agriculture support", `${sourceId} must stay in agriculture support domain.`);
  assert(contract.allowedResponseStates.includes("source_backed_guidance"), `${sourceId} must allow source-backed guidance.`);
  assert(contract.allowedResponseStates.includes("unavailable_source_fallback"), `${sourceId} must include unavailable fallback.`);
  assert(contract.sourceVerificationRequirements.includes("source owner named"), `${sourceId} must require named source owner.`);
  assert(contract.regionalizationRequirements.length >= 3, `${sourceId} must include regionalization requirements.`);
  assert(contract.auditRequirements.includes("unsafe-action-blocked"), `${sourceId} must audit unsafe action blocks.`);
});

[
  "agriculture extension advisory sources",
  "public weather and climate sources",
  "soil and fertilizer guidance sources",
  "irrigation and water-resource sources",
  "crop pest and disease authority sources",
  "crop calendar and planting-window sources",
  "public market context sources",
  "farmer cooperative public information sources",
  "general information from verified agriculture-source-backed guidance",
  "unavailable_source_fallback",
  "present general crop advice as verified local guidance",
  "contact an agriculture extension officer",
  "create or submit AgriTrade buy/sell actions"
].forEach(phrase => {
  assert(doc.toLowerCase().includes(phrase.toLowerCase()), `doc must include ${phrase}`);
});

[
  "fetch(",
  "XMLHttpRequest",
  "axios",
  "EventSource",
  "WebSocket",
  "execute:",
  "handler:",
  "adapter:",
  "diagnoseCrop(",
  "contactExtensionOfficer(",
  "contactBuyer",
  "processPayment",
  "dispatchDrone"
].forEach(forbidden => {
  assert(!moduleSource.includes(forbidden), `agriculture source module must not include runtime/execution behavior: ${forbidden}`);
});

[
  "nexus-agriculture-public-source-contracts.js",
  "NexusAgriculturePublicSourceContracts",
  "getAgriculturePublicSourceContracts",
  "AGRICULTURE_PUBLIC_SOURCE_CONTRACTS"
].forEach(runtimeHook => {
  assert(!index.includes(runtimeHook), `index.html must not load ${runtimeHook}`);
  assert(!app.includes(runtimeHook), `app.js must not consume ${runtimeHook}`);
  assert(!server.includes(runtimeHook), `server.js must not consume ${runtimeHook}`);
});

assert(
  packageData.scripts["qa:nexus-agriculture-public-source-contracts"] === "node scripts/nexus-agriculture-public-source-contracts-qa.js",
  "package.json must expose qa:nexus-agriculture-public-source-contracts"
);
assert(
  qaSuite.includes("scripts/nexus-agriculture-public-source-contracts-qa.js"),
  "qa-suite.js must include agriculture public source contracts QA"
);

console.log("[nexus-agriculture-public-source-contracts-qa] passed");
