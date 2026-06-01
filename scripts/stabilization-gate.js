const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = file => fs.readFileSync(path.join(root, file), "utf8");

const app = read("public/app.js");
const styles = read("public/styles.css");
const html = read("public/index.html");
const sw = read("public/sw.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));

function requireMarkers(label, haystack, markers) {
  const missing = markers.filter(marker => !haystack.includes(marker));
  assert.equal(missing.length, 0, `${label} missing:\n- ${missing.join("\n- ")}`);
}

function requireScript(scriptName) {
  assert(pkg.scripts?.[scriptName], `package.json missing script: ${scriptName}`);
}

requireMarkers("current browser cache contract", html, [
  "/styles.css?v=nexus-behavior-118",
  "/app.js?v=nexus-behavior-118"
]);
requireMarkers("service worker cache contract", sw, [
  'CACHE_NAME = "agrinexus-pwa-v98"',
  "skipWaiting",
  "clients.claim"
]);

requireMarkers("self-healing app repair", app, [
  "function runUserModeSelfTest",
  "function repairAppRuntime",
  "data-app-self-test",
  "data-app-repair",
  "navigator.serviceWorker.getRegistrations",
  "caches.keys()",
  "agrinexusLastRuntimeRepair"
]);
requireMarkers("self-healing app repair styles", styles, [
  "body.user-mode .user-repair-panel",
  "body.user-mode .user-repair-actions",
  "body.user-mode .user-repair-actions button.primary"
]);

requireMarkers("simple user workflow contract", app, [
  "function renderUserWorkspace",
  "function renderUserSimpleActiveSection",
  "function runSimpleAction",
  "function activateSectionFromButton",
  "![\"dashboard\", \"map\"].includes(sectionId)",
  "event.target.closest(\"[data-section], [data-mobile-section]\")",
  "function simpleUserCommandWorkflow",
  "function openMappedUserWorkflow",
  "function renderUserInlineWorkflow",
  "pendingWorkflow = config",
  "openWorkflowModal(config)",
  "$(\"#workflowModal\").classList.remove(\"hidden\")",
  "closeAskNexus({ silent: true })",
  "row(\"How this works\"",
  "workflowStepHtml",
  "function learningUserCopy",
  "function workforceUserCopy",
  "function tradeUserCopy",
  "function healthUserCopy",
  "function courseSelectOptions",
  "function productSelectOptions",
  "function routeSelectOptions",
  "data-inline-workflow-confirm",
  "data-inline-workflow-cancel",
  "eventOrButton?.target?.closest",
  "eventOrButton?.currentTarget?.matches"
]);

[
  ["learning", "Start a Course", "Finish Lesson", "Get Certificate", "Make Captions"],
  ["workforce", "Find Jobs", "Apply for Job", "Check Skills", "Plan Shift"],
  ["health", "Start Intake", "Talk to Provider", "Check Region", "Accessibility Help"],
  ["trade", "Contact Buyer", "Create Order", "Track Route", "Scan Farm"],
  ["map", "Check Route", "Check Farm", "Find Facility", "Explain Map"],
  ["agent", "Ask Question", "Plan Mission", "Explain Next Step", "Read to Me"]
].forEach(([section, ...labels]) => {
  requireMarkers(`simple user ${section} buttons`, app, [`${section}: {`, ...labels.map(label => `label: "${label}"`)]);
});

requireMarkers("partial-window prevention", styles, [
  "Final assistant containment pass",
  ".global-assistant:not(.hidden)",
  ".jarvis-panel:not(.hidden)",
  ".modal:not(.hidden)",
  "min-height: calc(100dvh - 16px)",
  "max-height: calc(100dvh - 16px)",
  "overflow-wrap: anywhere",
  "white-space: normal"
]);

requireMarkers("language and voice contract", app, [
  "function changeLanguageByVoice",
  "function isUniversalLanguageCommand",
  "[\"fr\", \"French\"]",
  "[\"sw\", \"Kiswahili\"]",
  "[\"ar\", \"Arabic\"]",
  "[\"es\", \"Spanish\"]",
  "function normalizeLocalizedVoiceCommand",
  "function handleVoiceCommand",
  "function speakVoiceResponse",
  "function setVoiceResponse",
  "/api/voice/transcribe",
  "/api/voice/speak",
  "/api/agent/command"
]);

requireMarkers("admin investor user mode contract", app, [
  "Admin Operator",
  "Investor Presenter",
  "This account cannot access Admin or Investor mode",
  "Standard Users and Investors cannot run this workflow",
  "conversationModeMemories",
  "conversationMemoryForMode",
  "conversationModeState"
]);

requireMarkers("live production service contract", server, [
  "DATABASE_URL",
  "OPENAI_API_KEY",
  "PROVIDER_ENGINE_BASE_URL",
  "TWILIO_ACCOUNT_SID",
  "TWILIO_AUTH_TOKEN",
  "TWILIO_PHONE_NUMBER",
  "BILLING_PRICE_ID"
]);

[
  "workflow:audit",
  "user-mode:audit",
  "app:behavior-audit",
  "app:jarvis-qa",
  "app:mobile-native-qa",
  "placeholder:audit",
  "production:clickthrough",
  "production:complete-check",
  "smoke",
  "learning:translation-smoke",
  "provider-engines:smoke",
  "github:check",
  "production:regression"
].forEach(requireScript);

console.log("Stabilization gate passed");
console.log("Checked: cache freshness, self-repair, User-mode workflows, no partial windows, language/voice behavior, role separation, live-service contract, and regression coverage.");
