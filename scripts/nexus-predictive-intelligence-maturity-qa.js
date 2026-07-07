const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const read = file => fs.readFileSync(path.join(root, file), "utf8");

const app = read("public/app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function includesAll(source, tokens, label) {
  for (const token of tokens) {
    assert(source.includes(token), `${label} is missing required token: ${token}`);
  }
}

includesAll(app, [
  "NEXUS_PREDICTIVE_MATURITY_STORAGE_KEY",
  "function buildEmptyNexusPredictiveMaturityMemory",
  "function recordNexusPredictiveMaturityHistory",
  "function compareNexusPredictiveSignals",
  "function buildCrossDomainPredictiveInsights",
  "function calculatePredictiveConfidence",
  "function captureNexusPredictiveExpertFeedback",
  "function buildNexusPredictiveIntelligenceSummary",
  "function routeNexusPredictiveMaturityCommand",
  "function renderNexusPredictiveMaturityPanel",
  "function renderNexusPredictiveMaturityInline",
  "recordNexusPredictiveMaturityHistory(\"health\"",
  "recordNexusPredictiveMaturityHistory(\"agriculture\"",
  "recordNexusPredictiveMaturityHistory(mode, input, state, parsed.observation)",
  "isNexusPredictiveMaturityCommand(command)",
  "routeNexusPredictiveMaturityCommand(command",
  "nexusPredictiveMaturityMemory.history",
  "nexusPredictiveMaturityMemory.feedback",
  "nexusPredictiveMaturityMemory.intelligenceSummaries"
], "public/app.js predictive maturity runtime");

includesAll(app, [
  "data-nexus-predictive-maturity-layer",
  "data-nexus-predictive-history",
  "data-nexus-predictive-comparison",
  "data-nexus-predictive-confidence-explanation",
  "data-nexus-predictive-feedback-controls",
  "data-nexus-cross-domain-impact",
  "data-nexus-intelligence-summary",
  "data-nexus-predictive-maturity-receipts",
  "data-nexus-predictive-history-inline",
  "data-nexus-predictive-comparison-inline",
  "data-nexus-predictive-confidence-inline",
  "data-nexus-predictive-feedback-inline"
], "predictive maturity UI");

includesAll(app, [
  "Nexus, show my predictive history.",
  "Nexus, what changed since my last health reading?",
  "Nexus, show cross-domain insights.",
  "Nexus, summarize my predictive intelligence.",
  "Nexus, mark this prediction accurate.",
  "Nexus, this risk is too high.",
  "Nexus, this summary is useful."
], "predictive maturity command examples");

includesAll(app, [
  "noExternalExecutionAuthorized",
  "No external action was executed.",
  "Review locally before any configured external action."
], "frontend no-execution posture");

includesAll(server, [
  "function calculatePredictiveConfidence",
  "function buildNexusPredictiveMemoryFixture",
  "function compareNexusPredictiveMemoryEntries",
  "function buildCrossDomainPredictiveInsights",
  "function buildNexusPredictiveIntelligenceSummary",
  "/api/nexus/predictive-memory/status",
  "/api/nexus/predictive-memory/history",
  "/api/nexus/predictive-memory/compare",
  "/api/nexus/predictive-memory/cross-domain",
  "/api/nexus/predictive-memory/feedback",
  "/api/nexus/predictive-memory/intelligence-summary",
  "nexus_predictive_intelligence_maturity",
  "noProviderHandoffAuthorized",
  "noSecretsExposed",
  "noExternalExecutionAuthorized"
], "server predictive memory API");

includesAll(app + server, [
  "Chronic Health",
  "Agriculture & Food Security",
  "Marketplace & Trade",
  "Logistics / Maps / Shipment",
  "Workforce / Employment",
  "Learning & Development",
  "Drone & Field Operations",
  "Communications / Media"
], "predictive maturity domain coverage");

const unsafeClaims = [
  "provider contacted successfully",
  "message sent successfully",
  "payment processed successfully",
  "drone dispatched successfully",
  "diagnosed successfully",
  "prescription sent",
  "job application submitted successfully",
  "course enrolled successfully",
  "shipment updated externally"
];

for (const claim of unsafeClaims) {
  assert(!app.toLowerCase().includes(claim), `Unsafe execution claim found in app: ${claim}`);
  assert(!server.toLowerCase().includes(claim), `Unsafe execution claim found in server: ${claim}`);
}

assert(
  pkg.scripts["qa:nexus-predictive-intelligence-maturity"] === "node scripts/nexus-predictive-intelligence-maturity-qa.js",
  "package.json is missing qa:nexus-predictive-intelligence-maturity alias"
);
assert(
  qaSuite.includes("scripts/nexus-predictive-intelligence-maturity-qa.js"),
  "scripts/qa-suite.js is missing maturity QA wiring"
);

console.log("Nexus predictive intelligence maturity QA passed.");
