const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8");

const app = read("public/app.js");
const css = read("public/styles.css");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");
const healthAccessBlock = app.slice(
  app.indexOf("const NEXUS_HEALTH_ACCESS_PREPARATION_MODES"),
  app.indexOf("function renderNexusAgenticBrainMatrix")
);

function assertIncludes(source, token, label) {
  assert(source.includes(token), `${label} should include ${token}`);
}

function assertNotIncludes(source, token, label) {
  assert(!source.includes(token), `${label} must not include unsafe token ${token}`);
}

[
  ["Health", "health"],
  ["Chronic Care", "chronic-care"],
  ["Telehealth", "telehealth-intake"],
  ["Video Visit", "provider-video"],
  ["Pharmacy", "pharmacy-support"],
  ["Mobile Clinic", "mobile-clinic"],
  ["Providers", "providers"],
  ["Agriculture", "agriculture"],
  ["AgriTrade", "agritrade"],
  ["Jobs", "jobs"],
  ["Learning", "learning"],
  ["Maps", "maps"],
  ["Music / Media", "media"],
  ["Messages", "messages"],
  ["Reminders", "reminders"],
  ["Language", "language"],
  ["Offline", "offline"],
  ["Safety", "safety"]
].forEach(([label, id]) => {
  assertIncludes(app, `id: "${id}"`, `${label} launcher id`);
  assertIncludes(app, `label: "${label}"`, `${label} launcher label`);
});

[
  "Nexus, help me record my blood pressure.",
  "Nexus, start a telehealth intake.",
  "Nexus, prepare a video visit provider bridge.",
  "Nexus, prepare pharmacy support.",
  "Nexus, prepare mobile clinic support."
].forEach(command => assertIncludes(app, command, `health access launcher command ${command}`));

[
  "function renderNexusHealthAccessPreparationOptions",
  "data-nexus-health-access-card",
  "const NEXUS_HEALTH_ACCESS_PREPARATION_MODES",
  "function detectNexusHealthAccessPreparationMode",
  "function buildNexusHealthAccessPreparationResult",
  "health_access_preparation_ready",
  "Diabetes, obesity, hypertension, RPM/RTM manual tracking",
  "Manual blood pressure, blood glucose, weight, symptoms, medication adherence",
  "Telehealth preparation and access intake",
  "Provider bridge preparation, no live video launch",
  "Pharmacy preparation, medication-list review, refill questions",
  "Mobile clinic and community resource preparation"
].forEach(token => assertIncludes(app, token, `health access prep token ${token}`));

[
  "does not diagnose, prescribe, book, call, message, dispatch, share medical records, request location, or contact a provider",
  "No provider, pharmacy, call, message, payment, location, camera, drone, appointment, or emergency action was executed"
].forEach(token => assertIncludes(app, token, `safety boundary ${token}`));

[
  "body.user-mode .nexus-mode-launcher",
  "body.user-mode .nexus-mode-launcher button",
  ".nexus-health-access-card",
  ".nexus-health-access-card li"
].forEach(token => assertIncludes(css, token, `compact UI CSS ${token}`));

[
  "diagnosis completed",
  "prescription sent",
  "appointment booked",
  "provider contacted",
  "pharmacy contacted",
  "clinic dispatched",
  "location shared",
  "payment processed"
].forEach(token => assertNotIncludes(healthAccessBlock.toLowerCase(), token, "Standard User task mode implementation"));

assert.strictEqual(
  packageJson.scripts["qa:nexus-standard-user-task-mode-launcher"],
  "node scripts/nexus-standard-user-task-mode-launcher-qa.js",
  "package alias should run task mode launcher QA"
);
assertIncludes(qaSuite, "scripts/nexus-standard-user-task-mode-launcher-qa.js", "safe QA suite wiring");

console.log("Nexus Standard User task mode launcher QA passed.");
