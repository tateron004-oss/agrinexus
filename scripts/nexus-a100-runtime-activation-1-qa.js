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
const css = read("public", "styles.css");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

const configSource = sourceBetween(app, "let nexusA100SafeAutonomyConfig", "let selectedLearningTrack");
const loadConfigSource = sourceBetween(app, "async function loadPublicMapConfig", "function isNexusAssistantRuntimePreviewEnabled");
const surfaceSource = sourceBetween(app, "function isA100SafeAutonomyEnabled", "function userVisualIconHtml");
const intentSource = sourceBetween(app, "function a100SafeAutonomyIntent", "function openA100SafeAutonomyPreview");
const previewSource = sourceBetween(app, "function openA100SafeAutonomyPreview", "function openFullScaleUserMap");
const voiceCoreSource = sourceBetween(app, "async function handleVoiceCommandCore", "function bindStatic");
const serverFlagSource = sourceBetween(server, "function a100SafeAutonomyRuntimeFlags", "function inferMetadataOnlySelectedToolId");
const serverConfigSource = sourceBetween(server, 'if (url.pathname === "/api/config"', 'if (url.pathname === "/api/integrations/test"');

assert(configSource.includes("enabled: true"), "A100 safe autonomy should default to visible safe activation.");
[
  "previewOnly: true",
  "executionAuthority: false",
  "noProviderHandoff: true",
  "noLocationPermissionRequested: true",
  "noBrowserPermissionPrompt: true",
  "noExternalActionAuthorized: true",
  "highRiskActionsGated: true"
].forEach(term => {
  assert(configSource.includes(term), `Frontend A100 config must include ${term}.`);
  assert(serverFlagSource.includes(term), `Server A100 flag must include ${term}.`);
});
assert(loadConfigSource.includes("config?.a100SafeAutonomy"), "Frontend should consume public A100 config.");
assert(serverConfigSource.includes("a100SafeAutonomy: a100SafeAutonomyRuntimeFlags()"), "/api/config should expose public A100 flags.");
assert(!serverFlagSource.includes("OPENAI_API_KEY"), "A100 public flag must not expose secrets.");

[
  "a100SafeAutonomySurface",
  "Nexus can help with...",
  "Safe preview mode",
  "Agriculture help",
  "Learning / training",
  "Workforce / jobs",
  "Marketplace browsing",
  "Maps and routes",
  "Provider readiness",
  "Safe task preparation",
  "What can Nexus do?"
].forEach(term => assert(surfaceSource.includes(term), `A100 surface must include ${term}.`));
assert(css.includes(".a100-safe-autonomy-surface"), "A100 surface CSS should exist.");
assert(css.includes(".a100-safe-autonomy-grid"), "A100 capability grid CSS should exist.");

[
  "what can you do",
  "help me with agriculture",
  "find agriculture training",
  "show me farm jobs",
  "browse AgriTrade",
  "help me plan a route",
  "is location enabled",
  "prepare a message",
  "what providers are connected",
  "what should i do next"
].forEach(term => assert(intentSource.toLowerCase().includes(term.toLowerCase()) || surfaceSource.toLowerCase().includes(term.toLowerCase()), `A100 prompt support should include ${term}.`));

[
  "Calls require explicit review",
  "will not send",
  "Payments, purchases, checkout",
  "will not request geolocation",
  "will not start media capture",
  "cannot dispatch emergency services"
].forEach(term => assert(intentSource.includes(term), `High-risk gate should explain ${term}.`));

assert(voiceCoreSource.includes("a100SafeAutonomyIntent"), "Voice/typed command core should invoke A100 intent routing.");
assert(voiceCoreSource.indexOf("a100SafeAutonomyIntent") < voiceCoreSource.indexOf("openExplicitHealthVideoPreviewCommand"), "A100 high-risk gate should run before camera/video preview routing.");
assert(voiceCoreSource.indexOf("a100SafeAutonomyIntent") < voiceCoreSource.indexOf("runStandardUserAssistantRuntimePreview"), "A100 safe autonomy should run before provider-backed assistant preview.");
assert(previewSource.includes("allowHandoff: false"), "A100 preview responses must disable handoff.");
assert(previewSource.includes("goSection("), "A100 low-risk prompts should route to existing Standard User sections.");
assert(previewSource.includes("renderUserSimpleActiveSection"), "A100 prompts should use existing Standard User renderers.");

[
  intentSource,
  previewSource,
  surfaceSource
].forEach((source, index) => {
  assert(!source.includes("navigator.geolocation"), `A100 activation source ${index} must not request geolocation.`);
  assert(!source.includes("getCurrentPosition"), `A100 activation source ${index} must not request current position.`);
  assert(!source.includes("watchPosition"), `A100 activation source ${index} must not start tracking.`);
  assert(!source.includes("window.open"), `A100 activation source ${index} must not open external providers.`);
  assert(!source.includes("/api/map/advanced"), `A100 activation source ${index} must not call map providers.`);
  assert(!source.includes("openWorkflowByVoice"), `A100 activation source ${index} must not execute workflows.`);
  assert(!source.includes("dispatchProviderWebhook"), `A100 activation source ${index} must not dispatch providers.`);
  assert(!source.includes("requestPermission"), `A100 activation source ${index} must not prompt browser permission.`);
  assert(!source.includes("mediaDevices"), `A100 activation source ${index} must not start camera or microphone.`);
});

[
  "qa:nexus-a100-1-standard-user-capability-routing",
  "qa:nexus-a100-7-map-provider-readiness",
  "qa:nexus-a100-8-route-planning-preview",
  "qa:nexus-a100-13-high-risk-gating",
  "qa:nexus-a100-42-a100-closeout"
].forEach(alias => assert(pkg.scripts[alias], `Existing A100 alias should remain: ${alias}`));

assert.equal(pkg.scripts["qa:nexus-a100-runtime-activation-1"], "node scripts/nexus-a100-runtime-activation-1-qa.js", "Package script should expose A100 runtime activation 1 QA.");
assert(qaSuite.includes("scripts/nexus-a100-runtime-activation-1-qa.js"), "A100 runtime activation QA should be wired into qa-suite.");

console.log("[nexus-a100-runtime-activation-1-qa] passed");
