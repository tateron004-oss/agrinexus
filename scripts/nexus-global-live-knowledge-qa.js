const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");
const { spawnSync } = require("node:child_process");

const root = path.resolve(__dirname, "..");
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8");

const server = read("server.js");
const app = read("public/app.js");
const envExample = read(".env.example");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");
const doc = read("docs/NEXUS_GLOBAL_LIVE_KNOWLEDGE_LAYER.md");

function includes(source, token, label) {
  assert(source.includes(token), `${label} should include ${token}`);
}

function excludes(source, token, label) {
  assert(!source.includes(token), `${label} must not include ${token}`);
}

const existing = spawnSync(process.execPath, ["scripts/nexus-live-knowledge-all-modes-qa.js"], {
  cwd: root,
  encoding: "utf8"
});
assert.strictEqual(existing.status, 0, existing.stdout || existing.stderr);

[
  "NEXUS_LIVE_KNOWLEDGE_PROVIDER_PRIORITY",
  '"tavily", "brave", "exa", "generic"',
  "NEXUS_LIVE_KNOWLEDGE_ALLOWED_PROVIDERS",
  '"auto", "tavily", "brave", "exa", "generic"',
  "nexusLiveKnowledgeProviderCatalog",
  "nexusLiveKnowledgeAllModesQuery",
  "fetchTavilyKnowledge",
  "https://api.tavily.com/search",
  "fetchBraveKnowledge",
  "https://api.search.brave.com/res/v1/web/search",
  "fetchExaKnowledge",
  "https://api.exa.ai/search",
  "fetchConfiguredLiveKnowledgeEndpoint",
  "NEXUS_LIVE_KNOWLEDGE_PROVIDER_ENDPOINT",
  "/api/nexus/live-knowledge/status",
  "/api/nexus/live-knowledge/query",
  "credential-blocked",
  "provider-error",
  "live_knowledge_research_packet",
  "noSecretValuesReturned",
  "noExecutionAuthorized",
  "noProviderHandoffAuthorized",
  "noPaymentAuthorized",
  "noMedicalActionAuthorized"
].forEach(token => includes(server, token, `global live knowledge server ${token}`));

[
  "data-testid=\"nexus-live-knowledge-all-modes-status\"",
  "data-testid=\"nexus-live-knowledge-provider-used\"",
  "data-testid=\"nexus-live-knowledge-domain\"",
  "data-testid=\"nexus-live-knowledge-packet-type\"",
  "data-testid=\"nexus-live-knowledge-missing-env\"",
  "Live Knowledge / Resource Assistant",
  "liveKnowledgeStatus",
  "liveKnowledgeQuery",
  "buildLiveKnowledgePacket"
].forEach(token => includes(app, token, `global live knowledge UI/runtime ${token}`));

[
  "auto                   default; tries Tavily, Brave, Exa, then generic fallback",
  "TAVILY_API_KEY=",
  "BRAVE_SEARCH_API_KEY=",
  "EXA_API_KEY=",
  "NEXUS_LIVE_KNOWLEDGE_API_KEY=",
  "NEXUS_LIVE_KNOWLEDGE_PROVIDER_ENDPOINT=",
  "NEXUS_LIVE_KNOWLEDGE_SAFE_MODE=true"
].forEach(token => includes(envExample, token, `env example ${token}`));

[
  "Global Live Knowledge Layer",
  "production shared research layer",
  "Agriculture",
  "Crop support",
  "Farm planning",
  "Field visits",
  "Logistics/resource planning",
  "Maps/route/resource guidance",
  "Training and literacy",
  "Workforce development",
  "Employer partner support",
  "Chronic disease education",
  "Diabetes support",
  "Hypertension support",
  "Obesity support",
  "RPM support",
  "RTM support",
  "Community Health Worker support",
  "Telehealth preparation",
  "Pharmacy education",
  "Mobile clinic/resource access",
  "Marketplace/vendor research",
  "Communications preparation",
  "General Ask Nexus research",
  "No diagnosis",
  "No prescribing",
  "No medication changes",
  "No purchases",
  "No message sending without confirmation",
  "No telehealth launch without credentials and confirmation",
  "No pharmacy refill submission"
].forEach(token => includes(doc, token, `global live knowledge doc ${token}`));

[
  "diagnosed the patient",
  "prescribed medication",
  "changed medication",
  "message was sent without confirmation",
  "payment was processed",
  "telehealth visit launched",
  "pharmacy refill submitted"
].forEach(token => {
  excludes(server, token, `server unsafe claim ${token}`);
  excludes(app, token, `app unsafe claim ${token}`);
  excludes(doc, token, `doc unsafe claim ${token}`);
});

assert.strictEqual(
  packageJson.scripts["qa:nexus-global-live-knowledge"],
  "node scripts/nexus-global-live-knowledge-qa.js",
  "package alias should run global live knowledge QA"
);
includes(qaSuite, "scripts/nexus-global-live-knowledge-qa.js", "qa suite should include global live knowledge QA");

console.log("nexus-global-live-knowledge QA passed");
