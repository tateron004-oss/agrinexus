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

const controlsSource = sourceBetween(app, "function a100SafeTaskControlsHtml", "function a100SafeAutonomyCardHtml");
const cardSource = sourceBetween(app, "function a100SafeAutonomyCardHtml", "function renderA100SafeAutonomyCard");
const renderSource = sourceBetween(app, "function renderA100SafeAutonomyCard", "function rememberA100SafeFollowUpContext");
const previewSource = sourceBetween(app, "function openA100SafeAutonomyPreview", "function openFullScaleUserMap");

assert(app.includes("id=\"a100RuntimeCardSlot\""), "A100 surface should expose a runtime card slot.");
assert(controlsSource.includes("simpleUserSections"), "Open section controls should be constrained to known internal Standard User sections.");
assert(controlsSource.includes("data-simple-command"), "Task controls should route through existing local command handling.");

[
  "Open",
  "Explain",
  "Show More",
  "Prepare",
  "Provider Status",
  "Back",
  "Next Step"
].forEach(label => assert(controlsSource.includes(label), `Task control should render: ${label}`));

[
  "Nexus, explain it",
  "Nexus, show me more",
  "Nexus, prepare a review checklist",
  "Nexus, what providers are connected?",
  "Nexus, go back",
  "Nexus, what should I do next"
].forEach(command => assert(controlsSource.includes(command), `Task control should use safe command: ${command}`));

assert(cardSource.includes("Review-only"), "A100 runtime cards should be explicitly review-only.");
assert(cardSource.includes("Open pages, explain, show more, prepare a checklist, or show provider status."), "Allowed actions should remain local/review-only.");
assert(cardSource.includes("Nexus will not call, send messages, pay, buy, contact providers, turn on location, use camera or microphone, dispatch help, or change records."), "Blocked actions should be visible.");
assert(cardSource.includes("a100SafeTaskControlsHtml(section)"), "A100 runtime cards should include safe task controls.");
assert(renderSource.includes("isA100SafeAutonomyEnabled()"), "Runtime card rendering should respect the A100 safe-autonomy gate.");
assert(previewSource.includes("renderA100SafeAutonomyCard(intent);"), "A100 dashboard previews should render the safe runtime card.");

[
  controlsSource,
  cardSource,
  renderSource,
  previewSource
].forEach((source, index) => {
  assert(!source.includes("localStorage"), `Sprint 3 source ${index} must not persist to localStorage.`);
  assert(!source.includes("sessionStorage"), `Sprint 3 source ${index} must not persist to sessionStorage.`);
  assert(!source.includes("navigator.geolocation"), `Sprint 3 source ${index} must not request geolocation.`);
  assert(!source.includes("getCurrentPosition"), `Sprint 3 source ${index} must not request current position.`);
  assert(!source.includes("watchPosition"), `Sprint 3 source ${index} must not start tracking.`);
  assert(!source.includes("window.open"), `Sprint 3 source ${index} must not open external providers.`);
  assert(!source.includes("openWorkflowByVoice"), `Sprint 3 source ${index} must not execute workflows.`);
  assert(!source.includes("dispatchProviderWebhook"), `Sprint 3 source ${index} must not dispatch providers.`);
  assert(!source.includes("requestPermission"), `Sprint 3 source ${index} must not prompt browser permission.`);
  assert(!source.includes("mediaDevices"), `Sprint 3 source ${index} must not start camera or microphone.`);
  assert(!source.includes("fetch("), `Sprint 3 source ${index} must not add external/backend calls.`);
});

[
  ".a100-runtime-card-slot",
  ".a100-runtime-card",
  ".a100-safe-task-controls"
].forEach(selector => assert(styles.includes(selector), `Sprint 3 styles should include ${selector}.`));

assert(pkg.scripts["qa:nexus-a100-runtime-activation-1"], "Sprint 1 QA alias should remain.");
assert(pkg.scripts["qa:nexus-a100-runtime-activation-2"], "Sprint 2 QA alias should remain.");
assert.equal(pkg.scripts["qa:nexus-a100-runtime-activation-3"], "node scripts/nexus-a100-runtime-activation-3-qa.js", "Sprint 3 QA alias should exist.");
assert(qaSuite.includes("scripts/nexus-a100-runtime-activation-3-qa.js"), "Sprint 3 QA should be wired into qa-suite.");

console.log("[nexus-a100-runtime-activation-3-qa] passed");
