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

function includes(source, token, label) {
  assert(source.includes(token), `${label} should include ${token}`);
}

function excludes(source, token, label) {
  assert(!source.includes(token), `${label} must not include ${token}`);
}

[
  "fetchTavilyKnowledge",
  "https://api.tavily.com/search",
  "TAVILY_API_KEY",
  "fetchBraveKnowledge",
  "https://api.search.brave.com/res/v1/web/search",
  "BRAVE_SEARCH_API_KEY",
  "fetchExaKnowledge",
  "https://api.exa.ai/search",
  "EXA_API_KEY",
  "fetchConfiguredLiveKnowledgeEndpoint",
  "NEXUS_LIVE_KNOWLEDGE_PROVIDER_ENDPOINT",
  "NEXUS_LIVE_KNOWLEDGE_API_KEY",
  "nexusLiveKnowledgeProviderTest",
  "/api/nexus/live-knowledge/test",
  "live_knowledge_research_packet",
  "noFakeCitations",
  "noSecretValuesReturned",
  "noExecutionAuthorized"
].forEach(token => includes(server, token, `server ${token}`));

[
  "NEXUS_LIVE_KNOWLEDGE_PROVIDER=tavily",
  "NEXUS_LIVE_KNOWLEDGE_PROVIDER=brave",
  "NEXUS_LIVE_KNOWLEDGE_PROVIDER=exa",
  "NEXUS_LIVE_KNOWLEDGE_PROVIDER=generic",
  "TAVILY_API_KEY=",
  "BRAVE_SEARCH_API_KEY=",
  "EXA_API_KEY=",
  "NEXUS_LIVE_KNOWLEDGE_PROVIDER_ENDPOINT=",
  "NEXUS_LIVE_KNOWLEDGE_API_KEY="
].forEach(token => includes(envExample, token, `.env.example ${token}`));

[
  "data-testid=\"nexus-live-knowledge-test-provider\"",
  "data-testid=\"nexus-live-knowledge-last-test-result\"",
  "/api/nexus/live-knowledge/test",
  "climate-smart agriculture Africa",
  "Live Knowledge provider returned citation-ready sources",
  "no fake citations were shown"
].forEach(token => includes(app, token, `app ${token}`));

[
  "diagnosed the patient",
  "prescribed medication",
  "fabricated citation",
  "citation.example",
  "example.com/source",
  "sk-test-secret",
  "real-api-key",
  "payment was processed",
  "message was sent without confirmation"
].forEach(token => {
  excludes(server, token, `server unsafe token ${token}`);
  excludes(app, token, `app unsafe token ${token}`);
});

assert.strictEqual(
  packageJson.scripts["qa:nexus-live-knowledge-provider-activation"],
  "node scripts/nexus-live-knowledge-provider-activation-qa.js",
  "package alias should run live knowledge provider activation QA"
);
includes(qaSuite, "scripts/nexus-live-knowledge-provider-activation-qa.js", "qa suite should include live knowledge activation QA");

console.log("nexus-live-knowledge-provider-activation QA passed");
