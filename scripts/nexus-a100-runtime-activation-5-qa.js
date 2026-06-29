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
const providerSource = sourceBetween(app, "function a100ProviderReadinessCards", "function rememberA100SafeFollowUpContext");
const intentSource = sourceBetween(app, "function a100SafeAutonomyIntent", "function openA100SafeAutonomyPreview");

assert(cardSource.includes("a100-provider-readiness"), "Runtime card should render provider readiness cards.");
assert(cardSource.includes("data-a100-provider-status"), "Provider readiness card should expose safe status metadata.");
assert(intentSource.includes("providerReadiness: capability.id === \"providers\" ? a100ProviderReadinessCards() : null"), "Provider prompts should attach readiness cards.");

[
  "maps-location",
  "routing-navigation",
  "whatsapp-message",
  "phone-call",
  "marketplace-payment",
  "camera-microphone"
].forEach(id => assert(providerSource.includes(`id: "${id}"`), `Provider readiness should include ${id}.`));

[
  "preview-only",
  "review required",
  "not connected",
  "permission required"
].forEach(status => assert(providerSource.includes(`status: "${status}"`), `Provider readiness should use safe honest status: ${status}`));

[
  "will not request live location",
  "will not send messages",
  "Calling requires explicit review",
  "Buying, selling, checkout, orders, payments, and inventory changes are gated",
  "never prompts for browser permission"
].forEach(copy => assert(providerSource.includes(copy), `Provider readiness should preserve safety copy: ${copy}`));

[
  providerSource,
  intentSource
].forEach((source, index) => {
  assert(!source.includes("API_KEY"), `Sprint 5 source ${index} must not expose API_KEY.`);
  assert(!source.includes("SECRET"), `Sprint 5 source ${index} must not expose SECRET.`);
  assert(!source.includes("TOKEN"), `Sprint 5 source ${index} must not expose TOKEN.`);
  assert(!source.includes("localStorage"), `Sprint 5 source ${index} must not persist to localStorage.`);
  assert(!source.includes("sessionStorage"), `Sprint 5 source ${index} must not persist to sessionStorage.`);
  assert(!source.includes("navigator.geolocation"), `Sprint 5 source ${index} must not request geolocation.`);
  assert(!source.includes("getCurrentPosition"), `Sprint 5 source ${index} must not request current position.`);
  assert(!source.includes("watchPosition"), `Sprint 5 source ${index} must not start tracking.`);
  assert(!source.includes("window.open"), `Sprint 5 source ${index} must not open external providers.`);
  assert(!source.includes("openWorkflowByVoice"), `Sprint 5 source ${index} must not execute workflows.`);
  assert(!source.includes("dispatchProviderWebhook"), `Sprint 5 source ${index} must not dispatch providers.`);
  assert(!source.includes("requestPermission"), `Sprint 5 source ${index} must not prompt browser permission.`);
  assert(!source.includes("mediaDevices"), `Sprint 5 source ${index} must not start camera or microphone.`);
  assert(!source.includes("fetch("), `Sprint 5 source ${index} must not add external/backend calls.`);
});

assert(styles.includes(".a100-provider-readiness"), "Sprint 5 styles should cover provider readiness cards.");
assert(pkg.scripts["qa:nexus-a100-runtime-activation-4"], "Sprint 4 QA alias should remain.");
assert.equal(pkg.scripts["qa:nexus-a100-runtime-activation-5"], "node scripts/nexus-a100-runtime-activation-5-qa.js", "Sprint 5 QA alias should exist.");
assert(qaSuite.includes("scripts/nexus-a100-runtime-activation-5-qa.js"), "Sprint 5 QA should be wired into qa-suite.");

console.log("[nexus-a100-runtime-activation-5-qa] passed");
