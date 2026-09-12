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
  "function buildEmptyNexusChronicPredictiveModelerState",
  "function parseNexusChronicPredictiveReadings",
  "function evaluateNexusChronicPredictiveModel",
  "function buildNexusChronicScenarioSimulations",
  "function buildNexusChronicReasoningTrace",
  "function buildNexusChronicChecklist",
  "function buildNexusChronicPhysicianSummary",
  "function applyNexusChronicPredictiveCommand",
  "function renderNexusChronicPredictiveModelerPanel",
  "NEXUS_CHRONIC_PREDICTIVE_STORAGE_KEY"
].forEach(token => includes(app, token, `frontend predictive modeler runtime ${token}`));

[
  "blood pressure",
  "bp\\b",
  "glucose",
  "blood sugar",
  "A1C",
  "weight",
  "missed",
  "chest pain",
  "shortness of breath",
  "predictive reasoning trace",
  "physician checklist",
  "predictive receipts"
].forEach(token => includes(app, token, `natural command coverage ${token}`));

[
  "Nexus, my blood pressure is 145 over 92 today.",
  "Nexus, my BP was 152/96 yesterday and 148/94 today.",
  "Nexus, my glucose was 188 this morning.",
  "Nexus, my fasting glucose was 165.",
  "Nexus, my A1C is 8.1.",
  "Nexus, my weight increased by 5 pounds this month.",
  "Nexus, I missed my medication twice this week.",
  "Nexus, I have chest pain and shortness of breath.",
  "Nexus, show my chronic risk trend.",
  "Nexus, predict my risk pattern.",
  "Nexus, what is driving my health risk?",
  "Nexus, what data is missing from my prediction?",
  "Nexus, compare this week to last week.",
  "Nexus, simulate what happens if my BP stays high.",
  "Nexus, simulate improvement if my BP improves.",
  "Nexus, create a physician summary.",
  "Nexus, show the predictive reasoning trace.",
  "Nexus, show physician checklist.",
  "Nexus, show predictive receipts."
].forEach(token => includes(app, token, `visible command example ${token}`));

[
  "data-nexus-chronic-predictive-modeler",
  "data-nexus-current-risk-snapshot",
  "data-nexus-longitudinal-trends",
  "data-nexus-contributing-factors",
  "data-nexus-missing-data",
  "data-nexus-scenario-simulator",
  "data-nexus-physician-checklist",
  "data-nexus-reasoning-trace",
  "data-nexus-predictive-receipts",
  "data-nexus-physician-summary",
  "data-nexus-copy-predictive-summary"
].forEach(token => includes(app, token, `visible modeler panel contract ${token}`));

[
  "stable",
  "watch",
  "elevated",
  "high",
  "urgent_review",
  "emergency_escalation",
  "insufficient_data",
  "improving",
  "worsening",
  "variable",
  "moderate",
  "low"
].forEach(token => includes(app, token, `risk/trajectory/confidence taxonomy ${token}`));

[
  "isNexusChronicPredictiveModelerCommand(command)",
  "isNexusChronicPredictiveModelerCommand(normalized)",
  "isNexusChronicPredictiveModelerCommand(command) || isExplicitBrainLaneCommand(command)",
  "data-nexus-command-input-target=\"nexusCommandCenterInput\"",
  "const targetId = target?.dataset?.nexusCommandInputTarget",
  "submode: \"chronic_health_predictive_modeler\"",
  "renderNexusChronicPredictiveModelerPanel()"
].forEach(token => includes(app, token, `command routing integration ${token}`));

[
  "/api/nexus/chronic-predictive/status",
  "/api/nexus/chronic-predictive/evaluate",
  "/api/nexus/chronic-predictive/summary",
  "/api/nexus/chronic-predictive/scenarios",
  "/api/nexus/chronic-predictive/checklist",
  "function evaluateNexusChronicPredictiveApiState",
  "function parseNexusChronicPredictiveApiReadings"
].forEach(token => includes(server, token, `backend route/modeler API ${token}`));

[
  "diabetes",
  "hypertension",
  "obesity",
  "RPM",
  "RTM",
  "CHW support",
  "physician review"
].forEach(token => includes(server, token, `backend domain coverage ${token}`));

[
  "noDiagnosis: true",
  "noPrescription: true",
  "noExternalProviderContact: true",
  "noExternalExecutionAuthorized: true",
  "Nexus does not diagnose, prescribe",
  "Nexus did not diagnose, prescribe"
].forEach(token => includes(`${app}\n${server}`, token, `health safety boundary ${token}`));

[
  "diagnosed successfully",
  "prescription sent",
  "medication changed",
  "provider contacted successfully",
  "emergency dispatched successfully",
  "health data transmitted"
].forEach(token => excludes(`${app}\n${server}`, token, `unsafe chronic predictive claim ${token}`));

assert.strictEqual(
  packageJson.scripts["qa:nexus-chronic-health-predictive-modeler"],
  "node scripts/nexus-chronic-health-predictive-modeler-qa.js",
  "package alias should run chronic health predictive modeler QA"
);
includes(qaSuite, "scripts/nexus-chronic-health-predictive-modeler-qa.js", "qa-suite should include chronic health predictive modeler QA");

console.log("Nexus chronic health predictive modeler QA passed.");
