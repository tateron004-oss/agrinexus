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
  "const NEXUS_HOME_MODE_PANEL_CONTENT",
  "const NEXUS_HOME_MODE_PANEL_FIELDS",
  "function buildNexusHomeModePanelResult",
  "function buildNexusHomeModeSummaryResult",
  "function detectNexusHomeModePanelId",
  "function renderNexusHomeModePanel",
  "function renderNexusHomeModeSummary",
  "function handleNexusHomeModeSummaryClick",
  "function renderNexusSuggestedActions",
  "function renderNexusCommandCenterSidebar",
  "function renderNexusTopWelcomeArea",
  "function renderNexusCoreFeatureCards",
  "function renderNexusVoiceInteractionBar",
  "function renderNexusRightUtilityColumn",
  "function renderNexusOperationsShelf",
  "data-nexus-command-sidebar",
  "data-nexus-command-topbar",
  "data-nexus-core-feature-grid",
  "data-nexus-core-feature",
  "data-nexus-voice-interaction-bar",
  "data-nexus-command-right-rail",
  "data-nexus-operations-shelf",
  "function buildNexusCapabilityOverviewResult",
  "function runNexusStandardUserHomeLocalCommand",
  "function handleNexusStandardUserHomeClick",
  "function nexusHandleStandardUserHomeShortcut",
  "window.nexusHandleStandardUserHomeShortcut",
  "function bindNexusStandardUserHomeControls",
  "nexus-agentic-brain-panel-empty",
  "data-nexus-mode-launcher",
  "data-nexus-suggested-actions",
  "nexus-command-center-shell",
  "nexus-shell",
  "nexus-command-main",
  "nexus-main",
  "nexus-command-neural-wave",
  "data-nexus-orb",
  "nexus-orb-stage",
  "nexus-orb",
  "nexus-orb-core",
  "nexus-orb-ring",
  "data-nexus-energy-wave",
  "nexus-energy-wave",
  "nexus-utility-card",
  "nexus-command-right-rail",
  "nexus-right-rail",
  "nexus-sidebar",
  "nexus-hero",
  "nexus-glass-card",
  "nexus-feature-card",
  "nexus-voice-bar",
  "nexus-status-pill",
  "data-nexus-mode-shortcut",
  "onclick=\"return window.nexusHandleStandardUserHomeShortcut",
  "nexus-mode-card",
  "data-nexus-home-mode-panel",
  "data-nexus-home-mode-summary",
  "data-nexus-mode-form",
  "data-nexus-mode-field",
  "data-nexus-mode-summary",
  "nexus-home-mode-panel-actions",
  "nexus-home-mode-field-grid",
  "nexus-home-mode-summary-button",
  "nexus-suggested-action"
].forEach(token => includes(app, token, `home screen implementation token ${token}`));

[
  ["🌱", "Agriculture Help"],
  ["🩺", "Health & Chronic Care"],
  ["🧑🏾‍⚕️", "Telehealth Intake"],
  ["🚐", "Mobile Clinic"],
  ["💊", "Pharmacy Support"],
  ["🎓", "Learning & Literacy"],
  ["💼", "Jobs & Workforce"],
  ["🛒", "AgriTrade Marketplace"],
  ["🗺️", "Maps / Field Visit"],
  ["🎵", "Music / Media"],
  ["🔔", "Reminders"],
  ["📶", "Offline Queue"]
].forEach(([icon, label]) => {
  includes(app, `icon: "${icon}"`, `Standard User home mode icon ${icon} for ${label}`);
  includes(app, `title: "${label}"`, `Standard User home mode label ${label}`);
});

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
  "data-nexus-core-feature=\"${escapeHtml(id)}\"",
  "[\"agriculture\", \"Agriculture Help\"",
  "[\"chronic-care\", \"Chronic Care Support\"",
  "[\"agritrade\", \"Marketplace\"",
  "[\"learning\", \"Learning & Jobs\""
].forEach(token => includes(app, token, `core feature card contract ${token}`));

[
  "Describe a crop issue",
  "Record blood pressure",
  "Start intake",
  "Prepare clinic request",
  "Prepare pharmacy checklist",
  "Build literacy plan",
  "Build skills checklist",
  "Prepare seller question",
  "Plan field visit",
  "Play Afrobeats",
  "Create reminder",
  "Show offline queue"
].forEach(label => includes(app, label, `mode panel quick action ${label}`));

[
  "Nexus Command Center",
  "AgriNexus AI Platform",
  "Platform Active",
  "All systems operational",
  "Ask Nexus",
  "Your AI assistant. Real answers. Real impact.",
  "Saved Questions",
  "Provider Support",
  "Platform Status",
  "Tap to speak with Nexus",
  "Voice stays user-initiated",
  "Review workspace details",
  "AI Assistant",
  "Data & Insights",
  "Network Services"
].forEach(token => includes(app, token, `premium command center copy ${token}`));

[
  "Agriculture Help",
  "Chronic Care Support",
  "Marketplace",
  "Learning & Jobs",
  "Source-aware crop, soil, pest, field, and advisor preparation.",
  "Organize readings, questions, RPM/RTM context, and provider-ready summaries.",
  "Prepare product, buyer, price, logistics, and review notes without transactions.",
  "Build training, literacy, skills, and workforce next-step plans."
].forEach(token => includes(app, token, `core feature card ${token}`));

[
  "Crop",
  "Blood pressure",
  "Blood glucose",
  "Main concern",
  "Care or service needed",
  "Medication name",
  "Learning goal",
  "Job interest",
  "Product / crop",
  "Site / farm / community",
  "Music / media type",
  "Reminder type",
  "Offline item type"
].forEach(label => includes(app, label, `mode panel structured field ${label}`));

[
  "Prepare local summary",
  "standard_user_mode_summary_prepared",
  "Local summary only",
  "Provider-ready preparation only",
  "Marketplace preparation only",
  "Route and access preparation only",
  "Media preparation only"
].forEach(token => includes(app, token, `mode panel summary behavior ${token}`));

[
  "Educational and planning support only",
  "Nexus does not diagnose, prescribe, or replace clinical judgment",
  "No live clinician is connected here",
  "Nexus does not prescribe, change medication, request refills",
  "Nexus does not dispatch a clinic, share your location",
  "It does not apply, contact employers, or submit personal information",
  "Nexus does not place orders, process payments, contact sellers",
  "Nexus does not request browser location, share your location",
  "Nexus does not host, download, rip, cache, or redistribute copyrighted music",
  "High-risk actions remain skipped"
].forEach(token => includes(app, token, `mode panel safety boundary ${token}`));

[
  "Nexus, open agriculture help.",
  "Nexus, start a telehealth intake.",
  "Nexus, record my blood pressure.",
  "Nexus, open mobile clinic.",
  "Nexus, open pharmacy support.",
  "Nexus, find agriculture training.",
  "Nexus, open AgriTrade.",
  "Nexus, find farm jobs.",
  "Nexus, open maps.",
  "Nexus, play music.",
  "Nexus, show reminders.",
  "Nexus, open offline queue."
].forEach(command => {
  const normalized = command
    .replace("Nexus, open agriculture help.", "I need agriculture support.")
    .replace("Nexus, open mobile clinic.", "Nexus, prepare mobile clinic support.")
    .replace("Nexus, open pharmacy support.", "Nexus, prepare pharmacy support.")
    .replace("Nexus, find agriculture training.", "Help me find agriculture training.")
    .replace("Nexus, open AgriTrade.", "Help me with AgriTrade, but do not take payment.")
    .replace("Nexus, find farm jobs.", "Help me find jobs or training.")
    .replace("Nexus, open maps.", "Help me plan a field visit route.")
    .replace("Nexus, play music.", "Play Afrobeats.")
    .replace("Nexus, show reminders.", "Create a reminder.")
    .replace("Nexus, open offline queue.", "Show offline queue status.");
  includes(app, normalized, `typed command routing support for ${command}`);
});

[
  "Hi, I’m Nexus. What do you need help with today?",
  "Ask Nexus or choose a support area below",
  "Playback depends on supported providers or accounts",
  "Nexus does not host, download, rip, cache, or redistribute copyrighted music",
  "keeping high-risk actions gated",
  "No provider, pharmacy, call, message, payment, location, camera, drone, appointment, or emergency action was executed"
].forEach(token => includes(app, token, `safe assistant copy ${token}`));

[
  "body.user-mode .nexus-command-center-hero",
  "body.user-mode .nexus-command-center-shell",
  "body.user-mode .nexus-orb-stage",
  "body.user-mode .nexus-orb",
  "body.user-mode .nexus-orb-core",
  "body.user-mode .nexus-orb-ring",
  "body.user-mode .nexus-energy-wave",
  "body.user-mode .nexus-command-sidebar",
  "body.user-mode .nexus-command-topbar",
  "body.user-mode .nexus-command-main",
  "body.user-mode .nexus-command-right-rail",
  "body.user-mode .nexus-sidebar-nav",
  "body.user-mode .nexus-sidebar-status",
  "body.user-mode .nexus-command-neural-wave",
  "body.user-mode .nexus-core-feature-grid",
  "body.user-mode .nexus-core-feature-card",
  "body.user-mode .nexus-voice-interaction-bar",
  "body.user-mode .nexus-utility-card",
  "body.user-mode .nexus-operations-shelf",
  "body.user-mode .nexus-mode-launcher",
  "body.user-mode .nexus-mode-card-green .nexus-mode-icon",
  "body.user-mode .nexus-mode-card-blue .nexus-mode-icon",
  "body.user-mode .nexus-mode-card-gold .nexus-mode-icon",
  "body.user-mode .nexus-mode-card-magenta .nexus-mode-icon",
  "body.user-mode .nexus-suggested-actions",
  "body.user-mode .nexus-suggested-action-grid",
  "body.user-mode .nexus-agentic-brain-panel-empty",
  "body.user-mode .nexus-home-mode-panel",
  "body.user-mode .nexus-home-mode-panel-actions",
  "body.user-mode .nexus-home-mode-panel-icon",
  "body.user-mode .nexus-home-mode-panel-form",
  "body.user-mode .nexus-home-mode-field-grid",
  "body.user-mode .nexus-home-mode-summary",
  "body.user-mode .nexus-home-mode-summary-button",
  "--nexus-bg",
  "--nexus-panel",
  "--nexus-panel-strong",
  "--nexus-cyan",
  "--nexus-violet",
  "--nexus-magenta",
  "--nexus-border",
  "--nexus-glow",
  "--nexus-text",
  "--nexus-muted",
  "@keyframes nexusOrbFloat",
  "@keyframes nexusEnergySweep",
  "@keyframes nexusHeroGlowSpin",
  "linear-gradient(135deg",
  "#050816",
  "#22d3ee",
  "#8b5cf6",
  "#ec4899"
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
  [app, 'AGRINEXUS_BUILD_VERSION = "nexus-behavior-352"', "app build version"],
  [app, 'AGRINEXUS_PWA_CACHE_VERSION = "agrinexus-pwa-v331"', "app cache version"],
  [server, 'AGRINEXUS_WEB_BUILD_VERSION = "nexus-behavior-352"', "server build version"],
  [server, 'AGRINEXUS_PWA_CACHE_VERSION = "agrinexus-pwa-v331"', "server cache version"],
  [sw, 'CACHE_NAME = "agrinexus-pwa-v331"', "service worker cache"],
  [sw, 'BUILD_VERSION = "nexus-behavior-352"', "service worker build"],
  [index, "/styles.css?v=nexus-behavior-352", "stylesheet cache bust"],
  [index, "/app.js?v=nexus-behavior-352", "app script cache bust"]
].forEach(([source, token, label]) => includes(source, token, label));

assert.strictEqual(
  packageJson.scripts["qa:nexus-standard-user-home-screen-redesign"],
  "node scripts/nexus-standard-user-home-screen-redesign-qa.js",
  "package alias should run Standard User home screen redesign QA"
);
includes(qaSuite, "scripts/nexus-standard-user-home-screen-redesign-qa.js", "safe QA suite wiring");

console.log("Nexus Standard User home screen redesign QA passed.");
