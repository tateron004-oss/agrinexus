const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8");

const server = read("server.js");
const app = read("public/app.js");
const css = read("public/styles.css");
const sw = read("public/sw.js");
const index = read("public/index.html");
const envExample = read(".env.example");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

function includes(source, token, label) {
  assert(source.includes(token), `${label} should include ${token}`);
}

function excludes(source, token, label) {
  assert(!source.includes(token), `${label} must not include ${token}`);
}

[
  "NEXUS_KNOWLEDGE_DISABLED_MESSAGE",
  "Live internet retrieval is not configured yet. Nexus can still use built-in guidance and prepare a question for review.",
  "NEXUS_KNOWLEDGE_TRUSTED_SOURCES",
  "function nexusKnowledgeProviderStatus",
  "function nexusKnowledgeCategoryForQuestion",
  "function nexusKnowledgeNeedsRetrieval",
  "function runNexusKnowledgeProviderQuery",
  "function nexusKnowledgeQuery",
  "function nexusKnowledgeSaveResult",
  "normalizeNexusKnowledgeCitations",
  "No configured provider returned citable sources",
  "No execution occurred",
  "noFakeCitations: true"
].forEach(token => includes(server, token, `server knowledge rail ${token}`));

[
  "agriculture",
  "health",
  "telehealth",
  "pharmacy",
  "mobileClinic",
  "learning",
  "jobs",
  "marketplace",
  "maps",
  "general",
  "FAO",
  "WHO",
  "CDC",
  "NIH",
  "MedlinePlus",
  "official labor data",
  "current market data",
  "does not diagnose",
  "does not refill prescriptions"
].forEach(token => includes(server, token, `trusted source/safety category ${token}`));

[
  "/api/nexus/knowledge/status",
  "/api/nexus/knowledge/trusted-sources",
  "/api/nexus/intelligence/ask",
  "/api/nexus/knowledge/save-result"
].forEach(token => includes(server, token, `knowledge endpoint ${token}`));

[
  "TAVILY_API_KEY",
  "BRAVE_SEARCH_API_KEY",
  "EXA_API_KEY",
  "OPENAI_WEB_SEARCH_ENABLED",
  "OPENAI_API_KEY",
  "WEB_SEARCH_PROVIDER",
  "NEXUS_LIVE_KNOWLEDGE_ENABLED",
  "NEXUS_LIVE_KNOWLEDGE_PROVIDER",
  "NEXUS_LIVE_KNOWLEDGE_API_KEY",
  "NEXUS_LIVE_KNOWLEDGE_PROVIDER_ENDPOINT",
  "NEXUS_LIVE_KNOWLEDGE_MAX_RESULTS",
  "NEXUS_LIVE_KNOWLEDGE_TIMEOUT_MS",
  "NEXUS_LIVE_KNOWLEDGE_SAFE_MODE"
].forEach(token => includes(server, token, `knowledge provider env ${token}`));

[
  'provider: "tavily"',
  'provider: "brave"',
  'provider: "exa"',
  'provider: "openai-web-search"',
  'provider: "provider-endpoint"',
  'requiredEnv: ["TAVILY_API_KEY"]',
  'requiredEnv: ["BRAVE_SEARCH_API_KEY"]',
  'requiredEnv: ["EXA_API_KEY"]',
  'requiredEnv: ["OPENAI_WEB_SEARCH_ENABLED", "OPENAI_API_KEY"]',
  'requiredEnv: ["NEXUS_LIVE_KNOWLEDGE_PROVIDER_ENDPOINT"]',
  "supportedProviders",
  "selectedProvider",
  "unsupportedProvider",
  "unsupported_provider",
  "NEXUS_LIVE_KNOWLEDGE_PROVIDER must be one of",
  "function nexusLiveKnowledgeApiKeyForProvider",
  "function nexusKnowledgeProviderErrorMessage",
  "missingEnv"
].forEach(token => includes(server, token, `provider readiness contract ${token}`));

[
  "function fetchExaKnowledge",
  "https://api.exa.ai/search",
  "function fetchConfiguredLiveKnowledgeEndpoint",
  "NEXUS_LIVE_KNOWLEDGE_PROVIDER_ENDPOINT",
  "function fetchOpenAiWebKnowledge",
  "fetchTavilyKnowledge",
  "fetchBraveKnowledge",
  "normalizeNexusKnowledgeCitations"
].forEach(token => includes(server, token, `provider retrieval path ${token}`));

[
  "internet-retrieval",
  "Live knowledge / internet retrieval",
  "oneOfEnv",
  "NEXUS_LIVE_KNOWLEDGE_ENABLED",
  "executionEnabled: false",
  "userApprovalRequired: true",
  "auditRequired: true",
  "noSilentExecution: true",
  "noSecretValuesReturned: true"
].forEach(token => includes(server, token, `production integration ${token}`));

[
  "let nexusKnowledgeStatus",
  "function isNexusLiveKnowledgeQuestion",
  "function nexusKnowledgeCategoryForCommand",
  "function renderNexusKnowledgeRailPanel",
  "function renderNexusKnowledgeAnswerCard",
  "function renderNexusKnowledgeAnswerOptions",
  "function refreshNexusKnowledgeRail",
  "function runNexusKnowledgeQuery",
  "async function handleNexusKnowledgeRailClick",
  'data-testid="nexus-knowledge-rail"',
  'data-testid="nexus-knowledge-status"',
  'data-testid="nexus-knowledge-question-input"',
  'data-testid="nexus-knowledge-ask"',
  'data-testid="nexus-knowledge-answer-card"',
  'data-testid="nexus-knowledge-citation"',
  'data-testid="nexus-knowledge-no-fake-citations"',
  'data-testid="nexus-knowledge-save-result"',
  'data-testid="nexus-knowledge-queue-result"',
  "/api/nexus/knowledge/status",
  "/api/nexus/knowledge/trusted-sources",
  "/api/nexus/intelligence/ask",
  "/api/nexus/knowledge/save-result",
  "What causes yellow leaves on maize",
  "No citations are shown because live retrieval is not configured",
  "No provider handoff, payment, message, call, location sharing, pharmacy action, diagnosis, or emergency action occurs from this rail"
].forEach(token => includes(app, token, `frontend knowledge rail ${token}`));

[
  "body.user-mode .nexus-knowledge-rail",
  "body.user-mode .nexus-knowledge-answer-card",
  "body.user-mode .nexus-knowledge-citations",
  "body.user-mode .nexus-knowledge-source-row"
].forEach(token => includes(css, token, `knowledge rail css ${token}`));

[
  "NEXUS_LIVE_KNOWLEDGE_ENABLED=false",
  "Supported NEXUS_LIVE_KNOWLEDGE_PROVIDER values:",
  "tavily                 requires TAVILY_API_KEY",
  "brave                  requires BRAVE_SEARCH_API_KEY",
  "exa                    requires EXA_API_KEY",
  "openai-web-search      requires OPENAI_WEB_SEARCH_ENABLED=true and OPENAI_API_KEY",
  "provider-endpoint      requires NEXUS_LIVE_KNOWLEDGE_PROVIDER_ENDPOINT",
  "NEXUS_LIVE_KNOWLEDGE_PROVIDER=",
  "NEXUS_LIVE_KNOWLEDGE_PROVIDER_ENDPOINT=",
  "NEXUS_LIVE_KNOWLEDGE_MAX_RESULTS=5",
  "NEXUS_LIVE_KNOWLEDGE_TIMEOUT_MS=9000",
  "NEXUS_LIVE_KNOWLEDGE_SAFE_MODE=true",
  "OPENAI_WEB_SEARCH_ENABLED=false",
  "WEB_SEARCH_PROVIDER=",
  "TAVILY_API_KEY=",
  "BRAVE_SEARCH_API_KEY=",
  "EXA_API_KEY="
].forEach(token => includes(envExample, token, `env example ${token}`));

const setupDoc = read("docs/NEXUS_LIVE_KNOWLEDGE_PROVIDER_CONFIGURATION.md");
[
  "Nexus Live Knowledge Provider Configuration",
  "`tavily`",
  "`brave`",
  "`exa`",
  "`openai-web-search`",
  "`provider-endpoint`",
  "Do not commit `.env` or real keys.",
  "Never paste API keys into tracked files",
  "Disabled retrieval must remain useful and citation-free.",
  "Nexus must not fabricate source names, URLs, freshness, providers, or citations."
].forEach(token => includes(setupDoc, token, `setup documentation ${token}`));

[
  "replace-with-local-key"
].forEach(token => includes(setupDoc, token, `setup documentation placeholder ${token}`));

[
  "sk-",
  "tvly-",
  "Bearer "
].forEach(token => excludes(setupDoc, token, `setup documentation secret pattern ${token}`));

[
  "nexus-behavior-469",
  "agrinexus-pwa-v414"
].forEach(token => {
  includes(app, token, `app build ${token}`);
  includes(server, token, `server build ${token}`);
  includes(sw, token, `service worker build ${token}`);
});
includes(index, "/styles.css?v=nexus-behavior-469", "stylesheet cache bust");
includes(index, "/app.js?v=nexus-behavior-469", "app cache bust");

assert.strictEqual(
  packageJson.scripts["qa:nexus-live-knowledge-retrieval"],
  "node scripts/nexus-live-knowledge-retrieval-qa.js",
  "package script should run live knowledge retrieval QA"
);
includes(qaSuite, "scripts/nexus-live-knowledge-retrieval-qa.js", "qa-suite safe wiring");

[
  "fabricated source was used",
  "sources were invented",
  "Nexus diagnosed",
  "Nexus prescribed",
  "live price guaranteed",
  "emergency dispatch is active",
  "payment was processed"
].forEach(token => {
  excludes(app, token, `unsafe frontend claim ${token}`);
  excludes(server, token, `unsafe server claim ${token}`);
});

console.log("nexus-live-knowledge-retrieval QA passed");
