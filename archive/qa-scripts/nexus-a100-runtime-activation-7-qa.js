const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function sourceBetween(source, start, end) {
  const startIndex = source.indexOf(start);
  assert(startIndex >= 0, `Missing source marker: ${start}`);
  const endIndex = source.indexOf(end, startIndex + start.length);
  assert(endIndex > startIndex, `Missing end marker after ${start}`);
  return source.slice(startIndex, endIndex);
}

const app = read("public", "app.js");
const styles = read("public", "styles.css");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

const cardSource = sourceBetween(app, "function a100SafeAutonomyCardHtml", "function renderA100SafeAutonomyCard");
const agricultureSource = sourceBetween(app, "function a100AgricultureHelpCard", "function a100TrainingLearningCard");
const intentSource = sourceBetween(app, "function a100SafeAutonomyIntent", "function openA100SafeAutonomyPreview");

assert(cardSource.includes("a100-domain-guidance"), "Runtime card should render domain guidance cards.");
assert(cardSource.includes("data-a100-guidance-domain"), "Guidance cards should expose a safe domain marker.");
assert(intentSource.includes("capability.id === \"agriculture\" ? a100AgricultureHelpCard()"), "Agriculture prompts should attach agriculture guidance.");

[
  "Crop issues",
  "irrigation learning",
  "soil help",
  "pest/disease triage",
  "Describe crop symptoms",
  "Ask what irrigation pattern changed",
  "Crop and growth stage",
  "Symptoms and timing",
  "Field conditions",
  "Pest observations",
  "Check a local expert/source before acting"
].forEach(copy => assert(agricultureSource.includes(copy), `Agriculture guidance should cover: ${copy}`));

[
  "General guidance only",
  "does not diagnose with certainty",
  "buy supplies",
  "contact buyers",
  "mutate records",
  "execute provider actions"
].forEach(copy => assert(agricultureSource.includes(copy), `Agriculture boundary should include: ${copy}`));

[
  "agriculture",
  "crop",
  "farm",
  "farmer",
  "field",
  "pest",
  "soil",
  "harvest"
].forEach(prompt => assert(intentSource.includes(prompt), `Agriculture prompt should be recognized: ${prompt}`));

[
  agricultureSource,
  intentSource
].forEach((source, index) => {
  assert(!source.includes("localStorage"), `Sprint 7 source ${index} must not persist to localStorage.`);
  assert(!source.includes("sessionStorage"), `Sprint 7 source ${index} must not persist to sessionStorage.`);
  assert(!source.includes("navigator.geolocation"), `Sprint 7 source ${index} must not request geolocation.`);
  assert(!source.includes("window.open"), `Sprint 7 source ${index} must not open external providers.`);
  assert(!source.includes("openWorkflowByVoice"), `Sprint 7 source ${index} must not execute workflows.`);
  assert(!source.includes("dispatchProviderWebhook"), `Sprint 7 source ${index} must not dispatch providers.`);
  assert(!source.includes("requestPermission"), `Sprint 7 source ${index} must not prompt browser permission.`);
  assert(!source.includes("mediaDevices"), `Sprint 7 source ${index} must not start camera or microphone.`);
  assert(!source.includes("fetch("), `Sprint 7 source ${index} must not add external/backend calls.`);
});

assert(styles.includes(".a100-domain-guidance"), "Sprint 7 styles should cover domain guidance cards.");
assert.equal(pkg.scripts["qa:nexus-a100-runtime-activation-7"], "node scripts/nexus-a100-runtime-activation-7-qa.js", "Sprint 7 QA alias should exist.");
assert(qaSuite.includes("scripts/nexus-a100-runtime-activation-7-qa.js"), "Sprint 7 QA should be wired into qa-suite.");

console.log("[nexus-a100-runtime-activation-7-qa] passed");
