const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");
const { spawnSync } = require("node:child_process");

const root = path.resolve(__dirname, "..");
const read = file => fs.readFileSync(path.join(root, file), "utf8");

const server = read("server.js");
const app = read("public/app.js");
const doc = read("docs/NEXUS_GLOBAL_MARKETPLACE_LOGISTICS_ENGINE.md");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

function includes(haystack, needle, message) {
  assert(haystack.includes(needle), message || `Expected to find ${needle}`);
}

function excludes(haystack, needle, message) {
  assert(!haystack.toLowerCase().includes(needle.toLowerCase()), message || `Did not expect to find ${needle}`);
}

const liveKnowledge = spawnSync(process.execPath, ["scripts/nexus-global-live-knowledge-qa.js"], {
  cwd: root,
  encoding: "utf8"
});
assert.strictEqual(
  liveKnowledge.status,
  0,
  `global live knowledge QA should pass before marketplace/logistics QA\n${liveKnowledge.stdout}\n${liveKnowledge.stderr}`
);

[
  "nexusGlobalMarketplaceLogisticsIntent",
  "nexusGlobalMarketplaceLogisticsPacketType",
  "nexusGlobalMarketplaceLogisticsGateStatus",
  "nexusGlobalMarketplaceLogisticsChecklist",
  "buildNexusGlobalMarketplaceLogisticsPacket",
  "nexusGlobalMarketplaceLogisticsEngine",
  "/api/nexus/global-marketplace-logistics/engine",
  "nexusLiveKnowledgeAllModesQuery",
  "marketplace_vendor_research_packet",
  "vendor_comparison_packet",
  "logistics_planning_packet",
  "route_resource_packet",
  "purchase_preparation_packet",
  "NEXUS_MARKETPLACE_PROVIDER_ENABLED",
  "NEXUS_MARKETPLACE_PAYMENTS_ENABLED",
  "NEXUS_LOGISTICS_PROVIDER_ENABLED",
  "global_marketplace_logistics_packet_prepared",
  "noVendorContactAuthorized",
  "noPurchaseAuthorized",
  "noPaymentAuthorized",
  "noLogisticsDispatchAuthorized",
  "noLocationSharingAuthorized",
  "noExternalMarketplaceOpened"
].forEach(token => includes(server, token, `server should include ${token}`));

[
  "renderNexusGlobalMarketplaceLogisticsPacket",
  "NEXUS_GLOBAL_MARKETPLACE_LOGISTICS_SECTIONS",
  "renderNexusGlobalMarketplaceLogisticsSections",
  "/api/nexus/global-marketplace-logistics/engine",
  "nexus-global-marketplace-logistics-packet-card",
  "nexus-global-marketplace-logistics-sections",
  "data-global-marketplace-logistics-section",
  "nexus-marketplace-logistics-packet-type",
  "nexus-marketplace-logistics-source-backed",
  "nexus-marketplace-logistics-vendor-comparison",
  "nexus-marketplace-logistics-planning",
  "nexus-marketplace-logistics-purchase-prep",
  "nexus-marketplace-logistics-gate-status",
  "nexus-marketplace-logistics-missing-config",
  "nexus-marketplace-logistics-review-queue",
  "nexus-marketplace-logistics-no-execution",
  "marketplace_vendor_research_packet",
  "vendor_comparison_packet",
  "logistics_planning_packet",
  "route_resource_packet",
  "purchase_preparation_packet"
].forEach(token => includes(app, token, `app should include ${token}`));

[
  "vendor-research",
  "vendor-comparison",
  "logistics-planning",
  "route-resource",
  "storage-cold-chain",
  "purchase-prep",
  "credential-gates",
  "review-queue",
  "Vendor Research",
  "Vendor Comparison",
  "Logistics Planning",
  "Route Resources",
  "Storage / Cold Chain",
  "Purchase Preparation",
  "Credential Gates",
  "Nexus, research vendor options.",
  "Nexus, compare marketplace vendors.",
  "Nexus, prepare logistics planning.",
  "Nexus, prepare purchase questions.",
  "will not contact vendors, buy, sell, order, pay, change inventory, dispatch delivery, share location"
].forEach(token => includes(app, token, `app should include marketplace/logistics section token: ${token}`));

[
  "Nexus Global Marketplace, Vendor, and Logistics Engine",
  "marketplace/vendor research",
  "vendor comparison",
  "logistics planning",
  "rural delivery planning",
  "storage/cold-chain planning",
  "route/resource planning",
  "purchase-preparation packets",
  "Live Knowledge",
  "confirmation",
  "audit",
  "review queue",
  "must not",
  "fabricating citations",
  "no silent checkout",
  "The Standard User active workflow now exposes compact Global Marketplace and Logistics sections",
  "Vendor Research, Vendor Comparison, Logistics Planning, Route Resources, Storage / Cold Chain, Purchase Preparation",
  "without making any external commitment"
].forEach(token => includes(doc, token, `doc should include ${token}`));

[
  "payment completed",
  "purchase completed",
  "vendor contacted automatically",
  "dispatch completed",
  "secret value:",
  "api key value:",
  "silent checkout allowed",
  "silent payment allowed",
  "silent vendor contact allowed"
].forEach(phrase => {
  excludes(server, phrase, `server should not contain unsafe phrase: ${phrase}`);
  excludes(app, phrase, `app should not contain unsafe phrase: ${phrase}`);
  excludes(doc, phrase, `doc should not contain unsafe phrase: ${phrase}`);
});

assert.strictEqual(
  packageJson.scripts["qa:nexus-global-marketplace-logistics"],
  "node scripts/nexus-global-marketplace-logistics-qa.js",
  "package script should expose global marketplace/logistics QA"
);
includes(qaSuite, "scripts/nexus-global-marketplace-logistics-qa.js", "qa suite should include global marketplace/logistics QA");

console.log("nexus-global-marketplace-logistics QA passed");
