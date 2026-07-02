const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8");

const app = read("public/app.js");
const css = read("public/styles.css");
const index = read("public/index.html");
const server = read("server.js");
const sw = read("public/sw.js");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

function includes(source, token, label) {
  assert(source.includes(token), `${label} should include ${token}`);
}

function excludes(source, token, label) {
  assert(!source.toLowerCase().includes(token.toLowerCase()), `${label} must not include ${token}`);
}

[
  "const NEXUS_HOME_MODE_IDS",
  "const NEXUS_HOME_MODE_PRESENTATION",
  "const NEXUS_HOME_SUGGESTED_ACTIONS",
  "function renderNexusSuggestedActions",
  "function buildNexusCapabilityOverviewResult",
  "function runNexusStandardUserHomeLocalCommand",
  "function handleNexusStandardUserHomeClick",
  "function bindNexusStandardUserHomeControls",
  "nexus-agentic-brain-panel-empty",
  "data-nexus-mode-launcher",
  "data-nexus-suggested-actions",
  "data-nexus-mode-shortcut",
  "nexus-mode-card",
  "nexus-suggested-action"
].forEach(token => includes(app, token, `home screen implementation token ${token}`));

[
  "Agriculture Help",
  "Health & Chronic Care",
  "Telehealth Intake",
  "Mobile Clinic",
  "Pharmacy Support",
  "Learning & Literacy",
  "Jobs & Workforce",
  "AgriTrade Marketplace",
  "Maps / Field Visit",
  "Music / Media",
  "Reminders",
  "Offline Queue"
].forEach(label => includes(app, label, `Standard User home mode ${label}`));

[
  "Record blood pressure",
  "Start telehealth intake",
  "Ask about crop issues",
  "Find agriculture training",
  "Open AgriTrade",
  "Find farm jobs",
  "Prepare provider summary",
  "Open music/media"
].forEach(label => includes(app, label, `suggested action ${label}`));

[
  "Nexus, open agriculture help.",
  "Nexus, start a telehealth intake.",
  "Nexus, record my blood pressure.",
  "Nexus, open AgriTrade.",
  "Nexus, find farm jobs.",
  "Nexus, play music."
].forEach(command => {
  const normalized = command
    .replace("Nexus, open agriculture help.", "I need agriculture support.")
    .replace("Nexus, open AgriTrade.", "Help me with AgriTrade, but do not take payment.")
    .replace("Nexus, find farm jobs.", "Help me find jobs or training.")
    .replace("Nexus, play music.", "Play Afrobeats.");
  includes(app, normalized, `typed command routing support for ${command}`);
});

[
  "Ask Nexus for agriculture, health, learning, jobs, marketplace, music, or provider support",
  "Playback depends on supported providers or accounts",
  "Nexus does not host, download, rip, cache, or redistribute copyrighted music",
  "keep high-risk actions gated",
  "No provider, pharmacy, call, message, payment, location, camera, drone, appointment, or emergency action was executed"
].forEach(token => includes(app, token, `safe assistant copy ${token}`));

[
  "body.user-mode .nexus-command-center-hero",
  "body.user-mode .nexus-mode-launcher",
  "body.user-mode .nexus-mode-card-green .nexus-mode-icon",
  "body.user-mode .nexus-mode-card-blue .nexus-mode-icon",
  "body.user-mode .nexus-mode-card-gold .nexus-mode-icon",
  "body.user-mode .nexus-mode-card-magenta .nexus-mode-icon",
  "body.user-mode .nexus-suggested-actions",
  "body.user-mode .nexus-suggested-action-grid",
  "body.user-mode .nexus-agentic-brain-panel-empty",
  "linear-gradient(135deg",
  "#1b7f4b",
  "#f4aa48",
  "#2a79b6"
].forEach(token => includes(css, token, `visual redesign CSS ${token}`));

[
  "live emergency response enabled",
  "payment processed",
  "prescription sent",
  "provider contacted automatically",
  "music downloaded",
  "copyrighted music cached"
].forEach(token => excludes(app, token, "Standard User home screen"));

[
  [app, 'AGRINEXUS_BUILD_VERSION = "nexus-behavior-334"', "app build version"],
  [app, 'AGRINEXUS_PWA_CACHE_VERSION = "agrinexus-pwa-v313"', "app cache version"],
  [server, 'AGRINEXUS_WEB_BUILD_VERSION = "nexus-behavior-334"', "server build version"],
  [server, 'AGRINEXUS_PWA_CACHE_VERSION = "agrinexus-pwa-v313"', "server cache version"],
  [sw, 'CACHE_NAME = "agrinexus-pwa-v313"', "service worker cache"],
  [sw, 'BUILD_VERSION = "nexus-behavior-334"', "service worker build"],
  [index, "/styles.css?v=nexus-behavior-334", "stylesheet cache bust"],
  [index, "/app.js?v=nexus-behavior-334", "app script cache bust"]
].forEach(([source, token, label]) => includes(source, token, label));

assert.strictEqual(
  packageJson.scripts["qa:nexus-standard-user-home-screen-redesign"],
  "node scripts/nexus-standard-user-home-screen-redesign-qa.js",
  "package alias should run Standard User home screen redesign QA"
);
includes(qaSuite, "scripts/nexus-standard-user-home-screen-redesign-qa.js", "safe QA suite wiring");

console.log("Nexus Standard User home screen redesign QA passed.");
