const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");
const { spawnSync } = require("node:child_process");

const root = path.resolve(__dirname, "..");
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8");

const server = read("server.js");
const app = read("public/app.js");
const doc = read("docs/NEXUS_GLOBAL_AGRICULTURE_INTELLIGENCE.md");
const qaSuite = read("scripts/qa-suite.js");
const packageJson = JSON.parse(read("package.json"));

function includes(source, token, label) {
  assert(source.includes(token), `${label} should include ${token}`);
}

function excludes(source, token, label) {
  assert(!source.includes(token), `${label} must not include ${token}`);
}

const liveKnowledge = spawnSync(process.execPath, ["scripts/nexus-global-live-knowledge-qa.js"], {
  cwd: root,
  encoding: "utf8"
});
assert.strictEqual(liveKnowledge.status, 0, liveKnowledge.stdout || liveKnowledge.stderr);

[
  "nexusGlobalAgricultureIntent",
  "nexusGlobalAgriculturePacketType",
  "buildNexusGlobalAgriculturePacket",
  "nexusGlobalAgricultureIntelligence",
  "/api/nexus/global-agriculture/intelligence",
  "nexusLiveKnowledgeAllModesQuery",
  "agriculture_support_packet",
  "crop_support_packet",
  "farm_planning_packet",
  "field_visit_packet",
  "disease",
  "pest",
  "soil",
  "irrigation",
  "fertilizer",
  "climate",
  "yield",
  "crop calendar",
  "input planning",
  "water planning",
  "climate-smart",
  "harvest",
  "local agronomist, extension officer",
  "noPurchaseAuthorized",
  "noVendorContactAuthorized",
  "noLocationSharingAuthorized",
  "noFieldDispatchAuthorized",
  "requiresConfirmationForVendorContact",
  "requiresConfirmationForLocationSharing"
].forEach(token => includes(server, token, `server agriculture intelligence ${token}`));

[
  "renderNexusGlobalAgriculturePacket",
  "/api/nexus/global-agriculture/intelligence",
  "data-testid=\"nexus-global-agriculture-packet-card\"",
  "data-testid=\"nexus-agriculture-issue-summary\"",
  "data-testid=\"nexus-agriculture-likely-causes\"",
  "data-testid=\"nexus-agriculture-source-backed-guidance\"",
  "data-testid=\"nexus-agriculture-local-condition-uncertainty\"",
  "data-testid=\"nexus-agriculture-field-checks\"",
  "data-testid=\"nexus-agriculture-extension-review\"",
  "data-testid=\"nexus-agriculture-export-ready\"",
  "data-testid=\"nexus-agriculture-no-execution\"",
  "Research crop disease guidance",
  "Plan farm season",
  "Prepare field visit packet",
  "agriculture_support_packet",
  "crop_support_packet",
  "farm_planning_packet",
  "field_visit_packet"
].forEach(token => includes(app, token, `app agriculture intelligence ${token}`));

[
  "Nexus Global Agriculture Intelligence",
  "crop disease",
  "pest",
  "soil",
  "irrigation",
  "fertilizer",
  "climate",
  "yield",
  "crop calendar",
  "input planning",
  "water planning",
  "climate-smart",
  "harvest planning",
  "field visit preparation",
  "local-condition uncertainty",
  "agronomist",
  "extension officer",
  "does not fabricate citations",
  "does not",
  "purchase inputs",
  "contact vendors",
  "share location",
  "dispatch a field visit"
].forEach(token => includes(doc, token, `doc agriculture intelligence ${token}`));

[
  "purchased inputs automatically",
  "contacted the vendor automatically",
  "shared your location automatically",
  "dispatched a field agent automatically",
  "guaranteed diagnosis",
  "generated fake citation"
].forEach(token => {
  excludes(server, token, `server unsafe agriculture claim ${token}`);
  excludes(app, token, `app unsafe agriculture claim ${token}`);
  excludes(doc, token, `doc unsafe agriculture claim ${token}`);
});

assert.strictEqual(
  packageJson.scripts["qa:nexus-global-agriculture-intelligence"],
  "node scripts/nexus-global-agriculture-intelligence-qa.js",
  "package alias should run global agriculture intelligence QA"
);
includes(qaSuite, "scripts/nexus-global-agriculture-intelligence-qa.js", "qa suite should include global agriculture intelligence QA");

console.log("nexus-global-agriculture-intelligence QA passed");
