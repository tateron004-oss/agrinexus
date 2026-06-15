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
  "/styles.css?v=nexus-behavior-247",
  "/app.js?v=nexus-behavior-247"
]);
requireMarkers("service worker cache contract", sw, [
  'CACHE_NAME = "agrinexus-pwa-v227"',
  'BUILD_VERSION = "nexus-behavior-247"',
  "`/app.js?v=${BUILD_VERSION}`",
  "`/styles.css?v=${BUILD_VERSION}`",
  "purgeOldCaches",
  "AGRINEXUS_PURGE_OLD_CACHES",
  "skipWaiting",
  "clients.claim"
]);

requireMarkers("internal app freshness check", app, [
  "AGRINEXUS_BUILD_VERSION",
  "AGRINEXUS_PWA_CACHE_VERSION",
  "topSettingsClose",
  "voiceShouldResumeAfterUiAction",
  "resumeVoiceAfterUiAction",
  "VOICE_RESTART_DELAY_MS = 320",
  "VOICE_UI_RESUME_DELAYS_MS",
  "Nexus heard you. One moment.",
  "function resumeVoiceListeningAfterSpeech",
  "function ignoreStaleNexusTurn",
  "controllerchange",
  "agrinexusReloadedForBuild",
  "function runUserModeSelfTest",
  "newest files are loaded",
  "Please refresh the app or contact support."
]);
[
  "function repairAppRuntime",
  "data-app-self-test",
  "data-app-repair",
  "userRepairStatus",
  "Press Repair App",
  "body.user-mode .user-repair-panel",
  "body.user-mode .user-repair-actions"
].forEach(marker => {
  assert(!app.includes(marker), `User-facing app repair hook must not be in app.js: ${marker}`);
  assert(!html.includes(marker), `User-facing app repair hook must not be in index.html: ${marker}`);
  assert(!styles.includes(marker), `User-facing app repair style must not be in styles.css: ${marker}`);
});

requireMarkers("simple user workflow contract", app, [
  "function renderUserWorkspace",
  "function renderUserSimpleActiveSection",
  "function runSimpleAction",
  "function activateSectionFromButton",
  "openDefaultAction: false",
  "event.target.closest(\"[data-section], [data-mobile-section]\")",
  "function simpleUserCommandWorkflow",
  "function openMappedUserWorkflow",
  "function renderUserProcessScreen",
  "function userProcessScreenHtml",
  "function userHealthRegionalMapHtml",
  "function renderUserHealthMap",
  "userHealthMapCanvas",
  "function surroundingMapBounds",
  "function fitMapToSurroundingRegion",
  "L.control.scale",
  "workflowLeafletMap.remove",
  "shipmentPreviewMapCanvas",
  "renderShipmentPreviewMap",
  "function shipmentTrackingState",
  "function drawShipmentRoute",
  "shipment-tracker-strip",
  "shipment-progress-bar",
  "healthHotspotMapCanvas",
  "renderHealthHotspotPreviewMap",
  "ruralHealthAccessMapCanvas",
  "renderRuralHealthAccessMap",
  "function drawRuralHealthNetwork",
  "addRuralHealthMapLegend",
  "/api/health/rural-network",
  "Mobile Clinic Supply Network",
  "mobileClinicSupplyRequests",
  "medical-supply",
  "World_Imagery/MapServer/tile",
  "World_Boundaries_and_Places/MapServer/tile",
  "function createGlobalGridLayer",
  "Latitude/longitude grid",
  "function addGlobalMapControl",
  "function globalMapBounds",
  "function addLiveMapStatusControl",
  "real tile(s) loaded",
  "pane: \"countryLabels\"",
  "L.control.layers",
  "startAskNexusAfterLogin",
  "pendingWorkflow = config",
  "return forceOpenUserProcessScreen(sectionId, config, mapped, label)",
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
  "data-agent-pending-confirm",
  "agent-pending-confirm-card",
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
  ".map-grid-label",
  ".global-map-control",
  ".live-map-status-control",
  ".rural-map-legend",
  ".legend-supply",
  "min-height: calc(100dvh - 16px)",
  "max-height: calc(100dvh - 16px)",
  "overflow-wrap: break-word",
  "word-break: normal",
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
  "function nexusIntentSignals",
  "function nexusIntelligenceRouterDecision",
  "function executeNexusIntelligenceRoute",
  "await handleNexusIntelligenceRouter(command)",
  "learning-support",
  "function nexusStrategicReasoningModel",
  "function enhanceNexusDecisionWithStrategy",
  "agrinexusStrategicReasoning",
  "nextBestAction",
  "function speechRateForLanguage",
  "function speechSafetyRisk",
  "function applySpeechSafetyToDecision",
  "agrinexusSpeechSafety",
  "rate: speechRateForLanguage()",
  "function normalizeImperfectSpeech",
  "function adaptiveCommandUnderstanding",
  "agrinexusAdaptiveUnderstanding",
  "nexusAdaptiveUnderstandingSummary",
  "function nexusContextMemoryModel",
  "function nexusNextBestQuestion",
  "agrinexusContextMemory",
  "function nexusContextMemorySummary",
  "function nexusAdvisorProfile",
  "function nexusDecisionScoringModel",
  "function nexusPredictiveAdvisorModel",
  "function nexusLiveKnowledgeFeedReadiness",
  "agrinexusPredictiveAdvisor",
  "agrinexusLiveKnowledgeFeeds",
  "function speakVoiceResponse",
  "function setVoiceResponse",
  "voiceDemoQuietMode",
  "function disableNexusVoiceForDemo",
  "function enableNexusVoiceForDemo",
  "function isNexusVoiceOffCommand",
  "function isNexusVoiceOnCommand",
  "Demo quiet mode is on",
  "allowVoiceFirst: false",
  "/api/voice/transcribe",
  "/api/voice/speak",
  "/api/agent/command"
]);

requireMarkers("offline reasoning contract", server, [
  "function offlineReasoningBrainModel",
  "function offlineReasoningKnowledgeBase",
  "function reasonedActionBridgePlan",
  "function guidedOutcomeLoopFromResult",
  "function activeOutcomeLoopBrief",
  "function conversationSupervisorReview",
  "function reasoningGovernanceReview",
  "conversation.offline_reasoning_brain",
  "conversation.reasoning_governance_status",
  "/api/intelligence/offline-reasoning",
  "reasonedActionBridge",
  "activeOutcomeLoop",
  "conversationSupervisor",
  "reasoningGovernance"
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
  "conversation:rural-eval",
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
console.log("Checked: cache freshness, no user-facing repair controls, User-mode workflows, no partial windows, language/voice behavior, role separation, live-service contract, and regression coverage.");
