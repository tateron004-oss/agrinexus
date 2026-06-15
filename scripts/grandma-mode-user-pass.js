const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const styles = fs.readFileSync(path.join(root, "public", "styles.css"), "utf8");
const html = fs.readFileSync(path.join(root, "public", "index.html"), "utf8");
const sw = fs.readFileSync(path.join(root, "public", "sw.js"), "utf8");

function includesAll(source, markers, label) {
  for (const marker of markers) assert(source.includes(marker), `${label} missing: ${marker}`);
}

includesAll(html, [
  'id="topSettingsClose"',
  "Close menu",
  'id="userCaptionPanel"',
  'data-caption-action="close"',
  "/styles.css?v=nexus-behavior-249",
  "/app.js?v=nexus-behavior-249"
], "HTML grandma-mode shell");

includesAll(app, [
  'const guideCommand = "help me understand the platform"',
  'function renderUserAccessibilityPanel',
  'data-close-user-accessibility',
  'function renderUserWorkspace',
  'function renderUserSimpleActiveSection',
  'function renderUserProcessScreen',
  'function userProcessScreenHtml',
  'data-inline-workflow-confirm',
  'data-inline-workflow-cancel',
  'function openMappedUserWorkflow',
  'function simpleUserCommandWorkflow',
  'function runSimpleAction',
  'voiceShouldResumeAfterUiAction',
  'resumeVoiceAfterUiAction(shouldResumeVoice',
  'voiceResumeAfterSpeech',
  'VOICE_RESTART_DELAY_MS = 320',
  'VOICE_UI_FOCUS_DELAY_MS = 80',
  'VOICE_UI_RESUME_DELAYS_MS',
  'topSettingsClose',
  'closeTopSettings',
  'closeUserCaptionPanel',
  'updateUserCaptionPanel',
  'data-caption-action',
  'data-user-voice-action',
  'data-simple-section="dashboard"',
  'body.classList.toggle("user-mode"',
  'experienceMode === "user"'
], "App grandma-mode behavior");

const requiredCommands = [
  "help me understand the platform",
  "start training path",
  "complete my lesson",
  "build captions",
  "show me jobs",
  "apply for that job",
  "start telehealth intake",
  "open telehealth access",
  "check health risk in my region",
  "contact my buyer",
  "create a crop order",
  "track my route",
  "run drone scan",
  "find nearest health facility",
  "explain the map",
  "read the current response"
];

for (const command of requiredCommands) {
  assert(app.includes(`command: "${command}"`) || app.includes(command), `Grandma-mode command is not wired: ${command}`);
}

includesAll(styles, [
  "body.user-mode .top-settings-close",
  "body.user-mode #logoutBtn",
  "display: none !important",
  "body.user-mode #countrySelect",
  "body.user-mode #platformLanguageSelect",
  "body.user-mode .user-fast-action",
  "body.user-mode .user-service-buttons button",
  "body.user-mode .user-simple-module",
  "body.user-mode .user-module-nav",
  "body.user-mode .user-module-back",
  "body.user-mode .user-module-close",
  "body.user-mode .user-inline-workflow",
  "body.user-mode .user-process-screen",
  "body.user-mode .user-process-actions button",
  "body.user-mode .user-caption-panel",
  "pointer-events: none",
  "pointer-events: auto",
  ".user-caption-head button",
  ".user-caption-text",
  "overflow-wrap: break-word",
  "word-break: normal",
  ".user-caption-actions button",
  "body.user-mode .user-accessibility-module",
  "body.user-mode .user-accessibility-buttons",
  "body.user-mode .user-real-map",
  "body.user-mode .user-health-real-map",
  ".shipment-real-map",
  ".health-hotspot-real-map"
], "CSS grandma-mode containment");

[
  "overflow-wrap: anywhere;",
  "word-break: break-all",
  "body.user-mode .user-repair-panel",
  "data-app-repair",
  "Press Repair App"
].forEach(marker => {
  assert(!styles.includes(marker), `Grandma-mode CSS should not include: ${marker}`);
  assert(!html.includes(marker), `Grandma-mode HTML should not include: ${marker}`);
});

assert(app.includes("shipmentPreviewMapCanvas") && app.includes("renderShipmentPreviewMap"), "Grandma mode shipment preview needs a real map canvas");
assert(app.includes("healthHotspotMapCanvas") && app.includes("renderHealthHotspotPreviewMap"), "Grandma mode health preview needs a real map canvas");
assert(app.includes("shipment-tracker-strip") && app.includes("shipment-progress-bar"), "Grandma mode shipment tracking needs clear logistics status");
assert(app.includes("World_Imagery/MapServer/tile"), "Grandma mode maps should default to real satellite imagery");
assert(app.includes("World_Boundaries_and_Places/MapServer/tile"), "Grandma mode maps should show readable country labels and borders");
assert(app.includes("function createGlobalGridLayer") && app.includes("Latitude/longitude grid"), "Grandma mode maps need real latitude and longitude gridlines");
assert(app.includes("function addGlobalMapControl") && app.includes("function globalMapBounds"), "Grandma mode maps need a simple global view control");
assert(app.includes("function addLiveMapStatusControl") && app.includes("real tile(s) loaded"), "Grandma mode maps need visible live tile loading status");
assert(styles.includes(".map-grid-label") && styles.includes(".global-map-control") && styles.includes(".live-map-status-control"), "Grandma mode real-map controls need readable styling");
assert(app.includes("startAskNexusAfterLogin"), "Grandma mode should wake Ask Nexus after login");
assert(!/function shipmentMapHtml[\s\S]*?<svg[\s\S]*?function healthHotspotHtml/.test(app), "Shipment preview must not render cartoon SVG maps");
assert(!/function healthHotspotHtml[\s\S]*?<svg[\s\S]*?function workflowOutcomeHtml/.test(app), "Health preview must not render cartoon SVG maps");

includesAll(sw, [
  'CACHE_NAME = "agrinexus-pwa-v229"',
  'BUILD_VERSION = "nexus-behavior-249"'
], "Service worker freshness");

console.log("Grandma mode user pass passed");
console.log("Checked: Settings escape, Guide Me, close/back paths, captions containment, voice continuity, big user buttons, workflow mappings, readable wrapping, map panels, and no user-facing repair/admin trap.");
