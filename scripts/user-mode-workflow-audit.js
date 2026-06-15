const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const styles = fs.readFileSync(path.join(root, "public", "styles.css"), "utf8");
const html = fs.readFileSync(path.join(root, "public", "index.html"), "utf8");
const sw = fs.readFileSync(path.join(root, "public", "sw.js"), "utf8");

const expectedSections = {
  learning: [
    ["Start a Course", "start training path", "workflow: \"learning\"", "action: \"start\""],
    ["Finish Lesson", "complete my lesson", "workflow: \"learning\"", "action: \"lesson\""],
    ["Get Certificate", "issue my certificate", "learningCertificateWorkflowConfig()"],
    ["Make Captions", "build captions", "learningAccessibilityWorkflowConfig(\"caption\")"]
  ],
  workforce: [
    ["Find Jobs", "show me jobs", "workflow: \"workforce\"", "action: \"build-profile\""],
    ["Apply for Job", "apply for that job", "workflow: \"workforce\"", "action: \"apply-role\""],
    ["Check Skills", "review my workforce gaps", "workflow: \"workforce\"", "action: \"mentor\""],
    ["Plan Shift", "schedule my shift", "workflow: \"workforce\"", "action: \"shift\""]
  ],
  health: [
    ["Start Intake", "start telehealth intake", "workflow: \"health\"", "action: \"intake\""],
    ["Talk to Provider", "open telehealth access", "workflow: \"health\"", "action: \"provider\""],
    ["Show Injury", "open video for provider to show injury", "workflow: \"health\"", "action: \"video\""],
    ["Check Region", "check health risk in my region", "workflow: \"health\"", "action: \"safety\""],
    ["Accessibility Help", "create audio guide and captions", "workflow: \"health\"", "action: \"accessibility\""]
  ],
  trade: [
    ["Contact Buyer", "contact my buyer", "workflow: \"trade\"", "action: \"buyer-contact\""],
    ["Show Crop", "open video for buyer to show crops", "workflow: \"trade\"", "action: \"buyer-video\""],
    ["Create Order", "create a crop order", "workflow: \"trade\"", "action: \"order\""],
    ["Track Route", "track my route", "workflow: \"ai\"", "action: \"route\""],
    ["Scan Farm", "run drone scan", "workflow: \"trade\"", "action: \"drone\""]
  ],
  map: [
    ["Full Map", "open full scale map", "directAction: \"full-map\""],
    ["Check Route", "check route risk", "workflow: \"ai\"", "action: \"route\""],
    ["Check Farm", "run drone scan", "workflow: \"trade\"", "action: \"drone\""],
    ["Find Facility", "find nearest health facility", "workflow: \"map\"", "action: \"facility-route\""],
    ["Explain Map", "explain the map", "workflow: \"map\"", "action: \"inspector\""]
  ],
  agent: [
    ["Ask Question", "help me understand the platform", "workflow: \"ai\"", "action: \"orchestrate\""],
    ["Plan Mission", "create an agent plan", "workflow: \"ai\"", "action: \"command\""],
    ["Explain Next Step", "what should I do next", "workflow: \"ai\"", "action: \"orchestrate\""],
    ["Read to Me", "read the current response", "conversational: true"]
  ]
};

for (const [section, buttons] of Object.entries(expectedSections)) {
  assert(app.includes(`${section}: {`), `User section missing: ${section}`);
  for (const [label, command, ...workflowChecks] of buttons) {
    assert(app.includes(`label: "${label}"`), `${section} missing button label: ${label}`);
    assert(app.includes(`command: "${command}"`), `${section} missing button command: ${command}`);
    for (const check of workflowChecks) {
      assert(app.includes(check), `${section}/${label} missing workflow mapping marker: ${check}`);
    }
  }
}

[
  "function openMappedUserWorkflow",
  "function nexusSmartIntentRouter",
  "recordNexusAutonomousLearning({ type: \"smart-intent\"",
  "function nexusHumanResponsePolicy",
  "function ruralCommunicationResponseTuning",
  "health, crops, work, learning, map, or medicine",
  "result.metadata?.frontierCommunication?.nextQuestion",
  "Nexus is ready for one answer",
  "const responseMessage = nexusHumanResponsePolicy(rawResponseMessage",
  "function handleNexusSelfCorrection",
  "recordNexusAutonomousLearning({ type: \"self-correction\"",
  "agrinexusBehaviorRecovery",
  "async function handleNexusRealtimeAdjustment",
  "recordNexusAutonomousLearning({ type: \"realtime-adjustment\"",
  "agrinexusRealtimeAdjustments",
  "localStorage.setItem(\"agrinexusShortAnswers\", \"on\")",
  "await handleNexusRealtimeAdjustment(command || localizedCommand)",
  "function isOpenKnowledgeQuestion",
  "function isOpenDialogVoiceQuestion",
  "crop bad",
  "child sick",
  "need medicine",
  "job kenya",
  "Nexus is treating this as open dialog, not a fixed menu command.",
  "Nexus cleared the old choice and is answering the new question.",
  "healthAdvisorQuestion",
  "careerAdvisorQuestion",
  "biochemistry",
  "best|right",
  "Nexus is checking live knowledge and platform context before answering.",
  "pendingWorkflow = config",
  "function renderUserProcessScreen",
  "function workflowFieldsHtml",
  "function forceOpenUserProcessScreen",
  "function openHealthIntakeNow",
  "directAction: \"health-intake\"",
  "function guidedHealthIntakeHtml",
  "function guidedHealthProviderHtml",
  "const directHealthGuide = isHealthIntakeWorkflow(config) || isHealthProviderWorkflow(config)",
  "config.userTitle = \"Doctor help\"",
  "function activeWorkflowFieldCandidates",
  "function healthIntakeVoiceFieldMatch",
  "Step 1: Who needs care?",
  "Doctor help is open",
  "directAction: \"doctor-help\"",
  "Nexus will walk you through this",
  "user-process-fields",
  "data-workflow-field",
  "open intake",
  "Telehealth intake is open. Step 1: Who needs care? Say the patient or household name, or type it in the first box. This is not a diagnosis.",
  "function userProcessScreenHtml",
  "return forceOpenUserProcessScreen(sectionId, config, mapped, label)",
  "panel.closest(\".user-simple-module\")",
  "moduleShell.scrollTo",
  "closeAskNexus({ silent: true })",
  "row(\"How this works\"",
  "workflowStepHtml",
  "workflow-timeline-step",
  "function workflowOperatingScreenHtml",
  "function renderWorkflowLiveMap",
  "workflowLiveMapCanvas",
  "function learningUserCopy",
  "function workforceUserCopy",
  "function tradeUserCopy",
  "function healthUserCopy",
  "function workflowRealUseCoach",
  "function workflowRealUseCoachHtml",
  "Plain meaning",
  "Ask this first",
  "Watch out",
  "Say next",
  "function courseSelectOptions",
  "function productSelectOptions",
  "function routeSelectOptions",
  "experienceMode === \"user\" && simpleUserSections[userSection]",
  "forceOpenUserProcessScreen(userSection, config",
  "data-agent-pending-confirm",
  "agent-pending-confirm-card",
  "function userPreviewActionsHtml",
  "function userSceneVisualHtml",
  "function userServicePhotoHtml",
  "user-service-photo",
  "function userRealMapHtml",
  "function renderUserRealMap",
  "userMapCanvas",
  "function userHealthRegionalMapHtml",
  "function renderUserHealthMap",
  "userHealthMapCanvas",
  "OpenStreetMap",
  "Africa operations",
  "Humanitarian street map",
  "function surroundingMapBounds",
  "function fitMapToSurroundingRegion",
  "L.control.scale",
  "sectionId === \"map\" || sectionId === \"trade\"",
  "workflowLeafletMap.remove",
  "function activateSectionFromButton",
  "activateSectionFromButton(button)",
  "openDefaultAction: false",
  "event.target.closest(\"[data-section], [data-mobile-section]\")",
  "eventOrButton?.target?.closest",
  "eventOrButton?.currentTarget?.matches",
  "closeAskNexus({ silent: true })",
  "function runUserModeSelfTest",
  "data-toggle-user-language",
  "data-close-user-language",
  "user-module-close",
  "userModeTranslationPack",
  "Object.entries(userModeTranslationPack)",
  "function openCaptionBox",
  "function nexusIntelligenceRouterDecision",
  "await handleNexusIntelligenceRouter(command)",
  "learning-support",
  "function nexusStrategicReasoningModel",
  "function enhanceNexusDecisionWithStrategy",
  "nextBestAction",
  "function speechRateForLanguage",
  "function speechSafetyRisk",
  "function applySpeechSafetyToDecision",
  "agrinexusSpeechSafety",
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
  "Please refresh the app or contact support."
].forEach(marker => {
  assert(app.includes(marker), `User workflow safety marker missing: ${marker}`);
});

[
  "function repairAppRuntime",
  "data-app-self-test",
  "data-app-repair",
  "userRepairStatus",
  "Press Repair App",
  "body.user-mode .user-repair-panel",
  "body.user-mode .user-repair-actions"
].forEach(marker => {
  assert(!app.includes(marker), `User-facing repair hook should not be in app.js: ${marker}`);
  assert(!html.includes(marker), `User-facing repair hook should not be in index.html: ${marker}`);
  assert(!styles.includes(marker), `User-facing repair style should not be in styles.css: ${marker}`);
});

[
  "body.user-mode .user-inline-workflow",
  "body.user-mode .user-module-preview",
  "body.user-mode .user-scene-visual",
  "body.user-mode .user-service-photo-card",
  "body.user-mode .user-service-photo",
  "body.user-mode .user-module-preview .shipment-map-card",
  "body.user-mode .user-real-map-card",
  "body.user-mode .user-real-map",
  "body.user-mode .user-real-map-meta",
  ".user-choice-card",
  ".user-choice-card.workforce-choice.applied",
  ".user-choice-title",
  ".user-choice-module",
  ".user-visual-icon",
  "body.user-mode .user-fast-actions",
  "body.user-mode .user-fast-action",
  "body.user-mode #countrySelect",
  "body.user-mode #platformLanguageSelect",
  "body:not(.user-mode) #topCaptionsBtn",
  "body:not(.user-mode) #topHomeBtn",
  "body.user-mode .user-language-header",
  "body.user-mode .user-module-close",
  "body.user-mode .assistant-close",
  "body.user-mode .user-preview-actions",
  "body.user-mode .user-caption-panel",
  ".user-caption-text",
  "pointer-events: none",
  "pointer-events: auto",
  "width: min(300px, calc(100vw - 24px))",
  "max-height: 138px",
  ".user-caption-panel.expanded",
  "body.user-mode .user-process-screen",
  "body.user-mode .user-process-actions",
  "body.user-mode #workforce .user-process-actions .primary",
  ".workflow-real-use-coach",
  ".workflow-real-use-grid",
  ".workflow-operating-screen",
  ".workflow-operating-body",
  ".workflow-live-map",
  ".workflow-timeline-step",
  ".user-inline-coach",
  ".global-assistant:not(.hidden)",
  ".jarvis-panel:not(.hidden)",
  ".modal:not(.hidden)",
  "min-height: calc(100dvh - 16px)"
].forEach(marker => {
  assert(styles.includes(marker), `User workflow containment style missing: ${marker}`);
});

assert(html.includes("/app.js?v=nexus-behavior-234"), "Index must force browsers to load current User-mode workflow JS");
assert(html.includes("/styles.css?v=nexus-behavior-234"), "Index must force browsers to load current User-mode workflow CSS");
assert(html.includes("topSettingsClose"), "User Settings menu needs a visible close button");
assert(styles.includes("body.user-mode .top-settings-toggle") && styles.includes("display: none !important"), "User mode must hide the top Settings button after login");
assert(styles.includes("body.user-mode .top-actions") && styles.includes("body.user-mode .top-actions.open") && styles.includes("display: none !important"), "User mode must not expose the old top Settings menu after login");
assert(app.includes("voiceShouldResumeAfterUiAction"), "Guide Me and other User actions need to preserve active voice listening");
assert(app.includes("resumeVoiceAfterUiAction(shouldResumeVoice"), "Guide Me and other User actions need to restore voice after UI transitions");
assert(app.includes("VOICE_RESTART_DELAY_MS = 320"), "User voice loop should restart quickly after Nexus speaks");
assert(app.includes("VOICE_UI_RESUME_DELAYS_MS = [180, 650, 1500, 3200, 5200]"), "User actions should bring the mic back quickly");
assert(app.includes("shipmentPreviewMapCanvas") && app.includes("renderShipmentPreviewMap"), "User route/shipment previews must be real Leaflet maps");
assert(app.includes("function shipmentTrackingState") && app.includes("shipment-tracker-strip"), "User route tracking should show logistics status, not a decorative route card");
assert(styles.includes(".shipment-tracker-marker") && styles.includes(".shipment-progress-bar"), "User route tracking needs professional marker and progress styling");
assert(app.includes("healthHotspotMapCanvas") && app.includes("renderHealthHotspotPreviewMap"), "User health previews must be real Leaflet maps");
assert(app.includes("function drawRuralHealthNetwork") && app.includes("addRuralHealthMapLegend"), "User health workflows need a real routed rural care network, not a decorative map");
assert(styles.includes(".rural-map-legend") && styles.includes(".legend-supply"), "User health maps need a readable legend for care and supply routes");
assert(app.includes("World_Street_Map"), "User maps should default to a real operational street map");
assert(app.includes("World_Imagery/MapServer/tile"), "User maps should keep real satellite imagery available");
assert(app.includes("Operational map") && app.includes("Satellite imagery") && app.includes("OpenStreetMap") && app.includes("Humanitarian street map"), "User maps should expose real base-map choices");
assert(!app.includes("Regional Africa operations view") && !app.includes("Regional Africa health access view"), "User maps should avoid cartoon-like regional overlay labels");
assert(app.includes("function createGlobalGridLayer") && app.includes("Latitude/longitude grid"), "User maps must expose latitude/longitude gridlines");
assert(app.includes("function addGlobalMapControl") && app.includes("function globalMapBounds"), "User maps must support a one-click global view");
assert(app.includes("function addLiveMapStatusControl") && app.includes("real tile(s) loaded"), "User maps need in-app live tile loading status");
assert(app.includes('pane: "countryLabels"') && app.includes('"Country names and borders"'), "User maps must keep country names and borders above the base map");
assert(styles.includes(".map-grid-label") && styles.includes(".global-map-control") && styles.includes(".live-map-status-control"), "User maps need visible grid, global control, and live tile status styling");
assert(app.includes("/api/trade/tracking") && app.includes("Live GPS provider") && app.includes("Platform route tracker"), "User shipment tracking should show provider source and local fallback clearly");
assert(app.includes("World_Boundaries_and_Places/MapServer/tile"), "User maps should include country names and border labels");
assert(app.includes("startAskNexusAfterLogin"), "User mode should start Ask Nexus after login");
assert(app.includes('label: "User", role: "Simple services"'), "Login profile should show User instead of technical Standard User copy");
assert(app.includes("function friendlyRoleLabel") && app.includes("function userHeaderName"), "User topbar must hide technical role names like Standard User");
assert(app.includes('if (defaultExperienceMode() !== "user")') && app.includes("closeAskNexus({ silent: true })"), "User login greeting must not force the full Ask Nexus panel open");
assert(sw.includes('CACHE_NAME = "agrinexus-pwa-v214"'), "Service worker cache must be bumped after User-mode workflow fixes");
assert(styles.includes("body.user-mode .top-settings-close"), "User Settings close button needs visible app-mode styling");
assert(app.includes('const guideCommand = "help me understand the platform"'), "Guide Me must map to a visible user workflow instead of a silent dynamic command");
assert(app.includes("function renderUserAccessibilityPanel"), "User mode needs a contained accessibility panel with its own controls");
assert(app.includes("[data-close-user-accessibility]"), "User accessibility panel needs a close control");
assert(styles.includes("body.user-mode .user-accessibility-buttons"), "User accessibility buttons need contained app-mode styling");
assert(styles.includes("word-break: normal"), "User mode text should not run vertically from aggressive word breaking");

console.log("User mode workflow audit passed");
console.log("Checked: every simple app tab/button maps to a workflow, course/job choices are visible, User mode uses inline confirmations, assistant windows have anti-partial containment, and no user-facing repair controls are exposed.");
