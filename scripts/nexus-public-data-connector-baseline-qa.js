const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  doc: path.join(root, "docs", "NEXUS_PUBLIC_DATA_CONNECTOR_BASELINE_PHASE_19.md"),
  roadmap: path.join(root, "docs", "NEXUS_100_FULL_MULTILINGUAL_ACCESS_PLATFORM_ROADMAP.md"),
  module: path.join(root, "public", "nexus-public-data-connector-baseline.js"),
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
    console.error(`[nexus-public-data-connector-baseline-qa] ${message}`);
    process.exit(1);
  }
}

Object.values(paths).forEach(filePath => {
  assert(fs.existsSync(filePath), `${path.relative(root, filePath)} must exist.`);
});

const doc = read(paths.doc);
const roadmap = read(paths.roadmap);
const moduleSource = read(paths.module);
const index = read(paths.index);
const app = read(paths.app);
const server = read(paths.server);
const packageData = JSON.parse(read(paths.packageJson));
const qaSuite = read(paths.qaSuite);
const baselineModule = require(paths.module);
const baseline = baselineModule.getPublicDataConnectorBaseline();

const requiredConnectorIds = [
  "public.agriculture.extension",
  "public.agriculture.weather_climate",
  "public.agriculture.soil_irrigation",
  "public.market.prices",
  "public.provider.directory",
  "public.health.clinic_directory",
  "public.health.mobile_clinic_schedule",
  "public.health.pharmacy_directory",
  "public.transportation.resources",
  "public.workforce.training",
  "public.emergency.information",
  "public.community.resources"
];

const requiredFields = [
  "connectorId",
  "domain",
  "displayName",
  "sourceOwnerType",
  "publicSourceCategory",
  "publicPartnerRegulatedStatus",
  "integrationMethod",
  "expectedFields",
  "attributionRequirements",
  "freshnessRequirements",
  "termsReviewRequirements",
  "languageLocalizationRequirements",
  "permissionRequirements",
  "auditRequirements",
  "allowedResponseStates",
  "forbiddenClaims",
  "futureRoadmapPhase"
];

const disabledFlags = [
  "fetchEnabled",
  "liveConnectionEnabled",
  "executionEnabled",
  "providerContactEnabled",
  "paymentEnabled",
  "medicalRecordAccessEnabled",
  "emergencyDispatchEnabled",
  "marketplaceTransactionEnabled",
  "locationSharingEnabled"
];

assert(roadmap.includes("| Phase 19 | Public data connector baseline |"), "Nexus 100 roadmap must include Phase 19 public data connector baseline.");
assert(Array.isArray(baseline), "public data connector baseline must export an array.");
assert(baseline.length === requiredConnectorIds.length, `baseline must include exactly ${requiredConnectorIds.length} connector templates.`);

requiredConnectorIds.forEach(id => {
  const connector = baseline.find(item => item.connectorId === id);
  assert(connector, `baseline must include ${id}`);
  requiredFields.forEach(field => {
    assert(Object.prototype.hasOwnProperty.call(connector, field), `${id} must include ${field}`);
  });
  disabledFlags.forEach(flag => {
    assert(connector[flag] === false, `${id} must keep ${flag} false`);
  });
  assert(connector.publicPartnerRegulatedStatus === "public", `${id} must be public status in Phase 19.`);
  assert(connector.integrationMethod.includes("no fetch"), `${id} must document no fetch behavior.`);
  assert(connector.attributionRequirements.length >= 4, `${id} must document attribution requirements.`);
  assert(connector.termsReviewRequirements.length >= 3, `${id} must document terms review requirements.`);
  assert(connector.auditRequirements.includes("freshness-disclosed"), `${id} must audit freshness disclosure.`);
  assert(connector.allowedResponseStates.includes("source_backed_guidance"), `${id} must allow source_backed_guidance only as guidance.`);
  assert(connector.allowedResponseStates.includes("unavailable_source_fallback"), `${id} must include unavailable_source_fallback.`);
});

[
  "agriculture extension and advisory sources",
  "weather and climate alert sources",
  "soil, fertilizer, and irrigation sources",
  "public market price sources",
  "public provider directory sources",
  "public health access and clinic directory sources",
  "public mobile clinic schedule sources",
  "public pharmacy directory sources",
  "public transportation resource sources",
  "public workforce and training program sources",
  "public emergency information sources",
  "public community resource sources",
  "unavailable_source_fallback",
  "fetchEnabled: false",
  "liveConnectionEnabled: false",
  "executionEnabled: false"
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
  "providerHandoff",
  "openPayment",
  "dispatchEmergency"
].forEach(forbidden => {
  assert(!moduleSource.includes(forbidden), `baseline module must not include runtime/execution behavior: ${forbidden}`);
});

[
  "nexus-public-data-connector-baseline.js",
  "NexusPublicDataConnectorBaseline",
  "getPublicDataConnectorBaseline",
  "PUBLIC_DATA_CONNECTOR_BASELINE"
].forEach(runtimeHook => {
  assert(!index.includes(runtimeHook), `index.html must not load ${runtimeHook}`);
  assert(!app.includes(runtimeHook), `app.js must not consume ${runtimeHook}`);
  assert(!server.includes(runtimeHook), `server.js must not consume ${runtimeHook}`);
});

assert(
  packageData.scripts["qa:nexus-public-data-connector-baseline"] === "node scripts/nexus-public-data-connector-baseline-qa.js",
  "package.json must expose qa:nexus-public-data-connector-baseline"
);
assert(
  qaSuite.includes("scripts/nexus-public-data-connector-baseline-qa.js"),
  "qa-suite.js must include public data connector baseline QA"
);

console.log("[nexus-public-data-connector-baseline-qa] passed");
