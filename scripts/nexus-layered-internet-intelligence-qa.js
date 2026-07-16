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
  "function nexusKnowledgeClassifier",
  "function nexusKnowledgeNeedsRetrieval",
  "function nexusKnowledgeBuiltInGuidance",
  "function nexusKnowledgeKeyPoints",
  "function nexusKnowledgeFollowUpActions",
  "function nexusKnowledgeSaveTargets",
  "function nexusKnowledgeAttachToRecord",
  "function nexusKnowledgePrepareReviewSummary",
  "function nexusKnowledgeReadiness",
  "knowledge_classification_completed",
  "knowledge_retrieval_attempted",
  "knowledge_retrieval_disabled_fallback_used",
  "knowledge_retrieval_succeeded",
  "knowledge_retrieval_failed",
  "knowledge_result_saved",
  "knowledge_result_attached_to_record",
  "knowledge_review_summary_prepared"
].forEach(token => includes(server, token, `server layered intelligence ${token}`));

[
  "/api/nexus/knowledge/classify",
  "/api/nexus/intelligence/ask",
  "/api/nexus/knowledge/save-result",
  "/api/nexus/knowledge/attach-to-record",
  "/api/nexus/knowledge/prepare-review-summary",
  "/api/nexus/knowledge/history",
  "/api/nexus/knowledge/source-policy",
  "/api/nexus/knowledge/readiness"
].forEach(token => includes(server, token, `knowledge endpoint ${token}`));

[
  "retrievalNeeded",
  "retrievalConfigured",
  "answerMode",
  "keyPoints",
  "trustedSourceCategory",
  "retrievedAt",
  "limitations",
  "followUpActions",
  "saveTargets",
  "safetyFlags",
  "sourceTrustLabel",
  "sourceType",
  "publisher",
  "domain"
].forEach(token => includes(server, token, `layered result field ${token}`));

[
  "agriculture",
  "health",
  "chronicCare",
  "telehealth",
  "pharmacy",
  "mobileClinic",
  "learning",
  "jobs",
  "marketplace",
  "maps",
  "general",
  "Provider/admin"
].forEach(token => includes(server, token, `required category or provider/admin coverage ${token}`));

[
  "No source-backed current answer is available until a retrieval provider is configured.",
  "does not diagnose",
  "does not refill prescriptions",
  "does not claim current prices unless retrieved",
  "must not claim a job is available unless retrieved",
  "crop and region",
  "typed location or nearest landmark",
  "No fake URLs",
  "No fabricated source names",
  "Disabled mode returns zero citations",
  "Built-in guidance is labeled as built-in",
  "Retrieved answers must cite retrieved sources"
].forEach(token => includes(server, token, `safety/source invariant ${token}`));
includes(app, "No citations are shown because live retrieval is not configured", "frontend disabled citation copy");

[
  "NEXUS_LIVE_KNOWLEDGE_PROVIDER",
  "NEXUS_LIVE_KNOWLEDGE_PROVIDER_ENDPOINT",
  "NEXUS_LIVE_KNOWLEDGE_MAX_RESULTS",
  "NEXUS_LIVE_KNOWLEDGE_TIMEOUT_MS",
  "NEXUS_LIVE_KNOWLEDGE_SAFE_MODE"
].forEach(token => {
  includes(server, token, `provider abstraction env ${token}`);
  includes(envExample, token, `env example ${token}`);
});

[
  "providerState",
  "citationHandlingReady",
  "saveAttachReady",
  "auditReady"
].forEach(token => includes(server, token, `provider abstraction status ${token}`));

[
  "function renderNexusKnowledgeRailPanel",
  "function renderNexusKnowledgeAnswerCard",
  "function renderNexusKnowledgeAnswerOptions",
  "function runNexusKnowledgeQuery",
  "data-testid=\"nexus-knowledge-answer-mode\"",
  "data-testid=\"nexus-knowledge-keypoints\"",
  "data-testid=\"nexus-knowledge-limitations\"",
  "data-testid=\"nexus-knowledge-followups\"",
  "data-testid=\"nexus-knowledge-save-target\"",
  "data-testid=\"nexus-knowledge-user-notes\"",
  "data-testid=\"nexus-knowledge-prepare-review-summary\"",
  "data-testid=\"nexus-knowledge-save-offline\"",
  "data-testid=\"nexus-mode-knowledge-prompt\"",
  "data-testid=\"nexus-mode-ask-with-sources\"",
  "data-testid=\"nexus-live-knowledge-readiness\"",
  "/api/nexus/intelligence/ask",
  "/api/nexus/knowledge/save-result",
  "/api/nexus/knowledge/prepare-review-summary"
].forEach(token => includes(app, token, `frontend layered UI ${token}`));

[
  "nexus-mode-card",
  "Agriculture Help",
  "Health & Chronic Care",
  "Telehealth Intake",
  "AgriTrade Marketplace",
  "Music / Media",
  "data-nexus-mode-shortcut",
  "nexus-command-center-hero"
].forEach(token => includes(app, token, `Standard User icon-first home ${token}`));

[
  "body.user-mode .nexus-knowledge-rail",
  "body.user-mode .nexus-knowledge-answer-card",
  "body.user-mode .nexus-knowledge-keypoints",
  "body.user-mode .nexus-knowledge-limitations",
  "body.user-mode .nexus-knowledge-followups",
  "body.user-mode .nexus-mode-knowledge-prompt"
].forEach(token => includes(css, token, `layered css ${token}`));

[
  "nexus-behavior-451",
  "agrinexus-pwa-v396"
].forEach(token => {
  includes(app, token, `app build ${token}`);
  includes(server, token, `server build ${token}`);
  includes(sw, token, `service worker build ${token}`);
});
includes(index, "/styles.css?v=nexus-behavior-451", "stylesheet cache bust");
includes(index, "/app.js?v=nexus-behavior-451", "app cache bust");

assert.strictEqual(
  packageJson.scripts["qa:nexus-layered-internet-intelligence"],
  "node scripts/nexus-layered-internet-intelligence-qa.js",
  "package script should run layered internet intelligence QA"
);
includes(qaSuite, "scripts/nexus-layered-internet-intelligence-qa.js", "qa-suite wiring");

[
  "fake live retrieval",
  "fabricated source was used",
  "invented source URL",
  "Nexus diagnosed",
  "Nexus prescribed",
  "dose changed",
  "emergency dispatch is active",
  "pharmacy fulfillment is active",
  "payment was processed",
  "live job guaranteed",
  "current price guaranteed"
].forEach(token => {
  excludes(app, token, `unsafe frontend claim ${token}`);
  excludes(server, token, `unsafe server claim ${token}`);
});

console.log("nexus-layered-internet-intelligence QA passed");
