const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..");
const read = relativePath => fs.readFileSync(path.join(ROOT, relativePath), "utf8");

const dataset = require("../server/nexus-demo-provider-dataset.js");
const providers = dataset.getNexusDemoProviders();
const summary = dataset.summarizeDemoProviders(providers);
const server = read("server.js");
const app = read("public/app.js");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");
const docs = read("docs/NEXUS_DEMO_PROVIDER_DATASET.md");

function includes(source, token, label) {
  assert(source.includes(token), `${label} must include ${token}`);
}

function excludesInsensitive(source, token, label) {
  assert(!source.toLowerCase().includes(token.toLowerCase()), `${label} must not include ${token}`);
}

assert(providers.length >= 120, "demo provider dataset should include broad end-to-end coverage");
assert(summary.totalLanes >= 17, "demo provider summary should cover all required service lanes");
assert(summary.noLiveExecution, "all demo providers must remain no-live-execution records");

const requiredFields = [
  "providerId",
  "providerName",
  "providerType",
  "serviceLane",
  "capabilities",
  "supportedModes",
  "status",
  "readinessStatus",
  "demoOnly",
  "testMode",
  "liveConnected",
  "configured",
  "missingCredentials",
  "blockedActions",
  "availableLocalActions",
  "serviceArea",
  "contactPlaceholder",
  "description",
  "safetyNotes",
  "exampleUseCases",
  "relatedWorkspaceIds",
  "createdAt",
  "updatedAt"
];

providers.forEach(provider => {
  requiredFields.forEach(field => assert(Object.prototype.hasOwnProperty.call(provider, field), `${provider.providerId} missing ${field}`));
  assert(provider.demoOnly === true, `${provider.providerId} must be demoOnly`);
  assert(provider.testMode === true, `${provider.providerId} must be testMode`);
  assert(provider.liveConnected === false, `${provider.providerId} must not be liveConnected`);
  assert(provider.configured === false, `${provider.providerId} must not default configured`);
  assert(!["ready", "connected", "live"].includes(provider.status), `${provider.providerId} must not default to live/ready status`);
  assert(provider.safetyNotes.includes("Demo provider"), `${provider.providerId} must be labeled Demo provider`);
  assert(provider.safetyNotes.includes("Local-safe test data"), `${provider.providerId} must be labeled local-safe test data`);
  assert(provider.safetyNotes.includes("Not live connected"), `${provider.providerId} must be labeled not live connected`);
  assert(provider.blockedActions.some(action => /No live provider execution/.test(action)), `${provider.providerId} must block live provider execution`);
});

const requiredLanes = [
  "health_care",
  "pharmacy",
  "mobile_clinic",
  "agriculture",
  "drone_field_ops",
  "marketplace_agritrade",
  "payments_mobile_money",
  "logistics_shipment",
  "maps_routing_geocoding",
  "communications",
  "learning_lms",
  "workforce_jobs",
  "provider_clinic_admin_review",
  "live_knowledge_internet",
  "database_storage",
  "file_media_document",
  "regional_global_africa_support"
];

requiredLanes.forEach(lane => {
  const records = providers.filter(provider => provider.serviceLane === lane);
  assert(records.length > 0, `${lane} must have at least one demo provider`);
});

[
  "primary care clinic",
  "chronic care provider",
  "diabetes support provider",
  "hypertension support provider",
  "telehealth provider",
  "retail pharmacy",
  "mobile clinic",
  "crop advisor",
  "drone field survey provider",
  "buyer verification provider",
  "Stripe test-mode placeholder",
  "rural logistics provider",
  "routing provider",
  "SMS provider placeholder",
  "Koachlearn LMS placeholder",
  "job board placeholder",
  "provider review queue",
  "Tavily",
  "PostgreSQL/DATABASE_URL",
  "crop image placeholder",
  "African agriculture support"
].forEach(type => {
  assert(providers.some(provider => provider.providerType === type), `dataset must include provider type: ${type}`);
});

[
  "No SMS sent",
  "No WhatsApp sent",
  "No email sent",
  "No funds moved",
  "No refill request submitted",
  "No real drone launch",
  "No fake citations",
  "Live GPS/tracking blocked unless provider connected",
  "No appointment booking"
].forEach(boundary => {
  assert(providers.some(provider => provider.blockedActions.includes(boundary)), `dataset must include boundary: ${boundary}`);
});

includes(server, "require(\"./server/nexus-demo-provider-dataset.js\")", "server demo provider import");
includes(server, "demoProviderCatalog: nexusDemoProviderDataset.summarizeDemoProviders()", "tools status demo summary");
includes(server, "demoProviderSample: nexusDemoProviderDataset.getNexusDemoProviders().slice(0, 12)", "tools status demo sample");
includes(server, "/api/nexus/demo-providers/catalog", "demo provider catalog endpoint");

[
  "renderNexusDemoProviderCoveragePanel",
  "${renderNexusDemoProviderCoveragePanel()}",
  "data-nexus-demo-provider-coverage",
  "data-demo-provider-lane",
  "Demo provider coverage",
  "Local-safe test data",
  "Not live connected"
].forEach(token => includes(app, token, "Standard User demo provider UI"));

[
  "provider categories seeded",
  "dummy/test provider rules",
  "not live connected",
  "what remains blocked by real credentials",
  "QA verifies provider coverage"
].forEach(token => includes(docs, token, "demo provider dataset documentation"));

[
  "payment processed",
  "appointment booked",
  "message sent successfully",
  "refill approved",
  "shipment tracked live",
  "drone dispatched",
  "telehealth scheduled",
  "provider referral submitted"
].forEach(token => {
  excludesInsensitive(read("server/nexus-demo-provider-dataset.js"), token, "demo provider dataset");
});

assert.equal(
  packageJson.scripts["qa:nexus-demo-provider-dataset"],
  "node scripts/nexus-demo-provider-dataset-qa.js",
  "package.json must expose qa:nexus-demo-provider-dataset"
);
assert(qaSuite.includes("scripts/nexus-demo-provider-dataset-qa.js"), "qa-suite.js must include demo provider dataset QA");

console.log("[nexus-demo-provider-dataset-qa] passed");
