const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8");

const app = read("public/app.js");
const server = read("server.js");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

function includes(source, token, label) {
  assert(source.includes(token), `${label} should include ${token}`);
}

function excludes(source, token, label) {
  assert(!source.toLowerCase().includes(token.toLowerCase()), `${label} must not include ${token}`);
}

[
  "function buildEmptyNexusAgriculturePredictiveModelerState",
  "function parseNexusAgriculturePredictiveObservations",
  "function evaluateNexusAgriculturePredictiveModel",
  "function buildNexusAgricultureScenarioSimulations",
  "function buildNexusAgricultureReasoningTrace",
  "function buildNexusAgricultureExpertChecklist",
  "function buildNexusAgricultureAdvisorSummary",
  "function applyNexusAgriculturePredictiveCommand",
  "function renderNexusAgriculturePredictiveModelerPanel",
  "NEXUS_AGRICULTURE_PREDICTIVE_STORAGE_KEY"
].forEach(token => includes(app, token, `frontend agriculture predictive runtime ${token}`));

[
  "data-nexus-agriculture-predictive-modeler",
  "data-nexus-farm-risk-snapshot",
  "data-nexus-field-farm-trends",
  "data-nexus-agriculture-contributing-factors",
  "data-nexus-agriculture-missing-data",
  "data-nexus-agriculture-scenario-simulator",
  "data-nexus-agriculture-expert-checklist",
  "data-nexus-agriculture-reasoning-trace",
  "data-nexus-agriculture-advisor-summary",
  "data-nexus-agriculture-predictive-receipts",
  "data-nexus-agriculture-command-examples",
  "data-nexus-copy-agriculture-advisor-summary"
].forEach(token => includes(app, token, `visible agriculture modeler panel contract ${token}`));

[
  "Nexus, my maize leaves are yellowing.",
  "Nexus, my tomato plants are wilting after three days without irrigation.",
  "Nexus, pests are damaging my cassava leaves.",
  "Nexus, I saw mold on stored maize.",
  "Nexus, rainfall has been low for two weeks.",
  "Nexus, the soil test is missing.",
  "Nexus, I planted rice on 3 hectares last month.",
  "Nexus, estimate yield risk for my maize.",
  "Nexus, show my field risk trend.",
  "Nexus, predict my crop risk pattern.",
  "Nexus, what is driving my agriculture risk?",
  "Nexus, what data is missing from my farm prediction?",
  "Nexus, compare this week to last week for the field.",
  "Nexus, simulate what happens if rainfall stays low.",
  "Nexus, simulate improvement if irrigation resumes.",
  "Nexus, create an agronomist summary.",
  "Nexus, show the agriculture reasoning trace.",
  "Nexus, show agriculture expert checklist.",
  "Nexus, show agriculture predictive receipts.",
  "Nexus, is my crop market-ready?",
  "Nexus, help me prepare maize for sale.",
  "Nexus, assess food-security risk for this community."
].forEach(token => includes(app, token, `visible agriculture command example ${token}`));

[
  "crop_health",
  "pest_disease",
  "water_irrigation",
  "soil_fertility",
  "yield",
  "storage",
  "market",
  "food_security",
  "yellowing",
  "wilting",
  "pest damage",
  "mold on stored commodity",
  "low rainfall",
  "soil test missing",
  "market readiness question",
  "food-security risk assessment"
].forEach(token => includes(app, token, `agriculture parser coverage ${token}`));

[
  "Crop stress signal",
  "Pest/disease pressure",
  "Water stress signal",
  "Soil/fertility gap",
  "Yield-risk signal",
  "Storage-loss risk",
  "Market-readiness signal",
  "Food-security risk",
  "stable",
  "watch",
  "elevated",
  "high",
  "urgent_review",
  "insufficient_data",
  "improving",
  "worsening",
  "variable",
  "moderate",
  "low"
].forEach(token => includes(app, token, `risk/trajectory/confidence coverage ${token}`));

[
  "Rainfall remains low for the next 14 days",
  "Irrigation resumes consistently",
  "Pest pressure spreads",
  "Storage moisture remains high",
  "Market transport becomes available",
  "Missing field data is completed",
  "Agriculture Predictive Intelligence Summary",
  "Observation parsed",
  "No external action falsely claimed",
  "Receipt/timeline recorded"
].forEach(token => includes(app, token, `scenario/summary/checklist/receipt coverage ${token}`));

[
  "isNexusAgriculturePredictiveModelerCommand(normalizedCommand)",
  "isNexusAgriculturePredictiveModelerCommand(command)",
  "isNexusAgriculturePredictiveModelerCommand(normalized)",
  "submode: \"agriculture_predictive_intelligence_modeler\"",
  "renderNexusAgriculturePredictiveModelerPanel()",
  "nexusAgriculturePredictiveModelerState?.riskSignals?.length",
  "data-nexus-command-input-target=\"nexusCommandCenterInput\""
].forEach(token => includes(app, token, `agriculture command routing integration ${token}`));

[
  "/api/nexus/agriculture-predictive/status",
  "/api/nexus/agriculture-predictive/evaluate",
  "/api/nexus/agriculture-predictive/summary",
  "/api/nexus/agriculture-predictive/scenarios",
  "/api/nexus/agriculture-predictive/checklist",
  "function emptyNexusAgriculturePredictiveState",
  "function parseNexusAgriculturePredictiveApiObservations",
  "function evaluateNexusAgriculturePredictiveApiState",
  "function buildNexusAgriculturePredictiveApiScenarios",
  "function buildNexusAgriculturePredictiveApiChecklist",
  "function buildNexusAgriculturePredictiveApiSummary"
].forEach(token => includes(server, token, `backend agriculture predictive route/modeler API ${token}`));

[
  "crop health",
  "pest/disease pressure",
  "water stress",
  "soil/fertility",
  "yield risk",
  "storage loss",
  "market readiness",
  "food-security risk"
].forEach(token => includes(server, token, `backend agriculture domain coverage ${token}`));

[
  "noLiveWeatherClaim: true",
  "noSatelliteOrDroneAnalysisClaim: true",
  "noBuyerContact: true",
  "noExternalExecutionAuthorized: true",
  "Nexus does not claim live weather",
  "Nexus did not pull live weather"
].forEach(token => includes(`${app}\n${server}`, token, `agriculture safety boundary ${token}`));

[
  "live weather pulled",
  "satellite imagery analyzed successfully",
  "drone imagery analyzed successfully",
  "buyer contacted successfully",
  "shipment arranged successfully",
  "insurance claim submitted",
  "government agency notified",
  "yield guaranteed",
  "pesticide prescribed",
  "fertilizer prescribed"
].forEach(token => excludes(`${app}\n${server}`, token, `unsafe agriculture predictive claim ${token}`));

assert.strictEqual(
  packageJson.scripts["qa:nexus-agriculture-predictive-intelligence"],
  "node scripts/nexus-agriculture-predictive-intelligence-qa.js",
  "package alias should run agriculture predictive intelligence QA"
);
includes(qaSuite, "scripts/nexus-agriculture-predictive-intelligence-qa.js", "qa-suite should include agriculture predictive intelligence QA");

console.log("Nexus agriculture predictive intelligence modeler QA passed.");
