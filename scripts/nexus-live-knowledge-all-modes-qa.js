const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8");

const server = read("server.js");
const app = read("public/app.js");
const envExample = read(".env.example");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");
const docs = read("docs/NEXUS_LIVE_KNOWLEDGE_ALL_MODES_ACTIVATION.md");

function includes(source, token, label) {
  assert(source.includes(token), `${label} should include ${token}`);
}

function excludes(source, token, label) {
  assert(!source.includes(token), `${label} must not include ${token}`);
}

[
  "NEXUS_LIVE_KNOWLEDGE_PROVIDER_PRIORITY",
  '"tavily", "brave", "exa", "generic"',
  "NEXUS_LIVE_KNOWLEDGE_ALLOWED_PROVIDERS",
  '"auto", "tavily", "brave", "exa"',
  "NEXUS_LIVE_KNOWLEDGE_SHARED_DOMAINS",
  "function nexusLiveKnowledgeProviderCatalog",
  "function nexusLiveKnowledgeDomainForInput",
  "function nexusLiveKnowledgeCategoryForDomain",
  "function nexusLiveKnowledgeSafetyProfile",
  "function buildNexusLiveKnowledgeResearchPacket",
  "function nexusLiveKnowledgeAllModesQuery",
  "function runNexusLiveKnowledgeProviderQuery",
  "live_knowledge_research_packet",
  "/api/nexus/live-knowledge/status",
  "/api/nexus/live-knowledge/query"
].forEach(token => includes(server, token, `server all-mode contract ${token}`));

[
  "TAVILY_API_KEY",
  "BRAVE_SEARCH_API_KEY",
  "EXA_API_KEY",
  "NEXUS_LIVE_KNOWLEDGE_API_KEY",
  "NEXUS_LIVE_KNOWLEDGE_ENABLED",
  "NEXUS_LIVE_KNOWLEDGE_PROVIDER",
  "missingEnvVars",
  "noSecretValuesReturned",
  "citationCapability",
  "safeDomainsSupported",
  "testabilityStatus",
  "credential-blocked",
  "provider-error",
  "provider-test-mode"
].forEach(token => includes(server, token, `status/error contract ${token}`));

[
  "agriculture", "crop", "farm", "field", "logistics", "route",
  "training", "workforce", "employer",
  "chronic", "diabetes", "hypertension", "obesity", "RPM", "RTM", "CHW",
  "telehealth", "pharmacy", "mobile clinic", "marketplace",
  "communications", "email", "SMS", "WhatsApp", "phone", "Telegram"
].forEach(token => includes(server, token, `all-mode domain ${token}`));

[
  "does not diagnose",
  "does not prescribe",
  "does not send SMS, WhatsApp, email, Telegram, or calls",
  "does not create listings, purchases, payments, or commitments",
  "does not request browser location or dispatch services",
  "No execution occurred",
  "noExecutionAuthorized: true",
  "noProviderHandoffAuthorized: true",
  "noLocationPermissionRequested: true",
  "noDispatchAuthorized: true",
  "noPaymentAuthorized: true",
  "noMedicalActionAuthorized: true",
  "noFakeCitations"
].forEach(token => includes(server, token, `safety/no-execution server contract ${token}`));

[
  "/api/nexus/live-knowledge/status",
  "/api/nexus/live-knowledge/query",
  "data-testid=\"nexus-live-knowledge-all-modes-status\"",
  "data-testid=\"nexus-live-knowledge-safe-domains\"",
  "data-testid=\"nexus-live-knowledge-provider-used\"",
  "data-testid=\"nexus-live-knowledge-domain\"",
  "data-testid=\"nexus-live-knowledge-packet-type\"",
  "data-testid=\"nexus-live-knowledge-recommended-next-steps\"",
  "data-testid=\"nexus-live-knowledge-missing-env\"",
  "Live Knowledge / Resource Assistant",
  "Tavily / Brave / Exa / generic provider fallback",
  "liveKnowledgeStatus",
  "liveKnowledgeQuery",
  "buildLiveKnowledgePacket",
  "live_knowledge_research_packet"
].forEach(token => includes(app, token, `frontend runtime/UI contract ${token}`));

[
  "resource-assistant-lane",
  "Nexus Live Knowledge provider registry",
  "provider priority: Tavily, Brave, Exa, generic",
  "citation honesty",
  "no downstream execution"
].forEach(token => includes(app, token, `activation center lane contract ${token}`));

[
  "auto                   default; tries Tavily, Brave, Exa, then generic fallback",
  "tavily                 requires TAVILY_API_KEY",
  "brave                  requires BRAVE_SEARCH_API_KEY",
  "exa                    requires EXA_API_KEY",
  "generic                fallback key shape uses NEXUS_LIVE_KNOWLEDGE_API_KEY",
  "NEXUS_LIVE_KNOWLEDGE_MAX_RESULTS=5",
  "NEXUS_LIVE_KNOWLEDGE_TIMEOUT_MS=9000",
  "NEXUS_LIVE_KNOWLEDGE_SAFE_MODE=true"
].forEach(token => includes(envExample, token, `env documentation ${token}`));

[
  "Nexus Live Knowledge All-Modes Activation",
  "GET `/api/nexus/live-knowledge/status`",
  "POST `/api/nexus/live-knowledge/query`",
  "`live_knowledge_research_packet`",
  "Tavily",
  "Brave",
  "Exa",
  "generic fallback",
  "credential-blocked",
  "provider-error",
  "No live actions are authorized by a research result.",
  "all Nexus modes"
].forEach(token => includes(docs, token, `documentation contract ${token}`));

[
  "TWILIO_AUTH_TOKEN=",
  "OPENAI_API_KEY=sk-",
  "TAVILY_API_KEY=tvly-",
  "completed provider handoff",
  "payment was processed",
  "diagnosed the patient",
  "prescribed medication"
].forEach(token => {
  excludes(server, token, `server unsafe/secret token ${token}`);
  excludes(app, token, `frontend unsafe/secret token ${token}`);
  excludes(docs, token, `docs unsafe/secret token ${token}`);
});

[
  "sk-",
  "tvly-",
  "Bearer "
].forEach(token => excludes(docs, token, `docs must not include secret-looking token ${token}`));

assert.strictEqual(
  packageJson.scripts["qa:nexus-live-knowledge-all-modes"],
  "node scripts/nexus-live-knowledge-all-modes-qa.js",
  "package alias should run all-mode live knowledge QA"
);
includes(qaSuite, "scripts/nexus-live-knowledge-all-modes-qa.js", "qa-suite safe wiring");

console.log("nexus-live-knowledge-all-modes QA passed");
