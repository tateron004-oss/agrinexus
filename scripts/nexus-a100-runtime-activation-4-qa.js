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
const preparationSource = sourceBetween(app, "function a100ReviewOnlyPreparation", "function rememberA100SafeFollowUpContext");
const intentSource = sourceBetween(app, "function a100SafeAutonomyIntent", "function openA100SafeAutonomyPreview");

assert(cardSource.includes("a100-review-preparation"), "Runtime card should render review-only preparation details.");
assert(cardSource.includes("Task goal"), "Preparation card should include task goal.");
assert(cardSource.includes("Safe next steps"), "Preparation card should include safe next steps.");
assert(cardSource.includes("Information needed"), "Preparation card should include needed information.");
assert(cardSource.includes("Review status"), "Preparation card should include review status.");
assert(cardSource.includes("Blocked execution"), "Preparation card should include blocked execution.");

[
  "agriculture",
  "learning",
  "workforce",
  "marketplace",
  "route",
  "providers",
  "general"
].forEach(category => {
  assert(preparationSource.includes(`category: "${category}"`), `Preparation category should be supported: ${category}`);
});

[
  "Review-only agriculture support",
  "Review-only learning preparation",
  "Review-only job search preparation",
  "Review-only marketplace preparation",
  "Review-only route preparation",
  "Review-only provider setup guidance",
  "Review-only preparation"
].forEach(copy => assert(preparationSource.includes(copy), `Preparation should be review-only: ${copy}`));

[
  "No purchase",
  "No enrollment",
  "No job application submission",
  "No buy, sell, payment, order, inventory mutation",
  "No geolocation request",
  "No provider handoff",
  "No messages, calls, purchases, payments"
].forEach(copy => assert(preparationSource.includes(copy), `Preparation should block execution: ${copy}`));

assert(intentSource.includes("a100ReviewOnlyPreparation(preparationCategory)"), "A100 intent should attach preparation details for prepare/plan/checklist prompts.");
assert(intentSource.includes("capability.id === \"map\" ? \"route\""), "Map preparation should map to route preview category.");
assert(styles.includes(".a100-review-preparation"), "Sprint 4 styles should cover preparation cards.");

[
  preparationSource,
  intentSource
].forEach((source, index) => {
  assert(!source.includes("localStorage"), `Sprint 4 source ${index} must not persist to localStorage.`);
  assert(!source.includes("sessionStorage"), `Sprint 4 source ${index} must not persist to sessionStorage.`);
  assert(!source.includes("navigator.geolocation"), `Sprint 4 source ${index} must not request geolocation.`);
  assert(!source.includes("getCurrentPosition"), `Sprint 4 source ${index} must not request current position.`);
  assert(!source.includes("watchPosition"), `Sprint 4 source ${index} must not start tracking.`);
  assert(!source.includes("window.open"), `Sprint 4 source ${index} must not open external providers.`);
  assert(!source.includes("openWorkflowByVoice"), `Sprint 4 source ${index} must not execute workflows.`);
  assert(!source.includes("dispatchProviderWebhook"), `Sprint 4 source ${index} must not dispatch providers.`);
  assert(!source.includes("requestPermission"), `Sprint 4 source ${index} must not prompt browser permission.`);
  assert(!source.includes("mediaDevices"), `Sprint 4 source ${index} must not start camera or microphone.`);
  assert(!source.includes("fetch("), `Sprint 4 source ${index} must not add external/backend calls.`);
});

assert(pkg.scripts["qa:nexus-a100-runtime-activation-3"], "Sprint 3 QA alias should remain.");
assert.equal(pkg.scripts["qa:nexus-a100-runtime-activation-4"], "node scripts/nexus-a100-runtime-activation-4-qa.js", "Sprint 4 QA alias should exist.");
assert(qaSuite.includes("scripts/nexus-a100-runtime-activation-4-qa.js"), "Sprint 4 QA should be wired into qa-suite.");

console.log("[nexus-a100-runtime-activation-4-qa] passed");
