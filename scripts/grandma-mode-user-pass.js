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
  "/styles.css?v=nexus-behavior-158",
  "/app.js?v=nexus-behavior-158"
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
  "body.user-mode .user-health-real-map"
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

includesAll(sw, [
  'CACHE_NAME = "agrinexus-pwa-v138"',
  'BUILD_VERSION = "nexus-behavior-158"'
], "Service worker freshness");

console.log("Grandma mode user pass passed");
console.log("Checked: Settings escape, Guide Me, close/back paths, captions containment, voice continuity, big user buttons, workflow mappings, readable wrapping, map panels, and no user-facing repair/admin trap.");
