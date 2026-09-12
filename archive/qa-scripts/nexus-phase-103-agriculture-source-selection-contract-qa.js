const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const modulePath = path.join(root, "public", "nexus-agriculture-source-selection-phase-103.js");
const packagePath = path.join(root, "package.json");
const qaSuitePath = path.join(root, "scripts", "qa-suite.js");
const indexPath = path.join(root, "public", "index.html");
const appPath = path.join(root, "public", "app.js");
const serverPath = path.join(root, "server.js");

function assert(condition, message) {
  if (!condition) {
    console.error(`[nexus-phase-103-agriculture-source-selection-contract-qa] ${message}`);
    process.exit(1);
  }
}

[modulePath, packagePath, qaSuitePath, indexPath, appPath, serverPath].forEach(filePath => assert(fs.existsSync(filePath), `${path.relative(root, filePath)} must exist.`));

const source = fs.readFileSync(modulePath, "utf8");
const selection = require(modulePath);
const packageData = JSON.parse(fs.readFileSync(packagePath, "utf8"));
const qaSuite = fs.readFileSync(qaSuitePath, "utf8");
const activeRuntime = [indexPath, appPath, serverPath].map(filePath => fs.readFileSync(filePath, "utf8")).join("\n");

assert(selection.SELECTION_VERSION === "nexus.agricultureSourceSelection.phase103.v1", "selection version must be canonical.");

[
  ["My maize leaves are turning yellow", "pest_disease"],
  ["How do I improve irrigation?", "irrigation_water"],
  ["How do I prepare for drought?", "weather_climate"],
  ["What fertilizer safety checks should I review?", "soil_fertilizer"],
  ["What should I review before selling through AgriTrade?", "market_context"]
].forEach(([prompt, category]) => {
  const observation = selection.buildSourceSelectionObservation(prompt);
  assert(observation.selection.selected === true, `${prompt} must select a source candidate.`);
  assert(observation.selection.category === category, `${prompt} must select ${category}.`);
  assert(observation.selection.executionEnabled === false, `${prompt} must remain non-executing.`);
  assert(observation.selection.fallbackIfUnverified === "general guidance", `${prompt} must fall back to general guidance.`);
  assert(observation.canExecute === false && observation.executionAuthority === "none", `${prompt} observation must be non-authoritative.`);
});

assert(selection.buildSourceSelectionObservation("").selection.selected === false, "empty prompt must not select a source.");

[
  "fetch(",
  "XMLHttpRequest",
  "WebSocket",
  "EventSource",
  "navigator.geolocation",
  "getUserMedia",
  "PaymentRequest",
  "localStorage.setItem",
  "window.open",
  "location.href"
].forEach(forbidden => assert(!source.includes(forbidden), `selection module must not include ${forbidden}.`));

[
  "nexus-agriculture-source-selection-phase-103.js",
  "NexusAgricultureSourceSelectionPhase103"
].forEach(hook => assert(!activeRuntime.includes(hook), `active runtime must not load ${hook}.`));

assert(packageData.scripts["qa:nexus-phase-103-agriculture-source-selection-contract"] === "node scripts/nexus-phase-103-agriculture-source-selection-contract-qa.js", "package alias must exist.");
assert(qaSuite.includes("scripts/nexus-phase-103-agriculture-source-selection-contract-qa.js"), "qa-suite must include Phase 103 QA.");

console.log("[nexus-phase-103-agriculture-source-selection-contract-qa] passed");
