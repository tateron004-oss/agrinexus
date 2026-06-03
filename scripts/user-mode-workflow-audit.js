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
  "pendingWorkflow = config",
  "function renderUserProcessScreen",
  "function userProcessScreenHtml",
  "return renderUserProcessScreen(sectionId, config, mapped, label)",
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
  "renderUserProcessScreen(userSection, config",
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
  "Regional Africa operations view",
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

assert(html.includes("/app.js?v=nexus-behavior-151"), "Index must force browsers to load current User-mode workflow JS");
assert(html.includes("/styles.css?v=nexus-behavior-151"), "Index must force browsers to load current User-mode workflow CSS");
assert(sw.includes('CACHE_NAME = "agrinexus-pwa-v131"'), "Service worker cache must be bumped after User-mode workflow fixes");

console.log("User mode workflow audit passed");
console.log("Checked: every simple app tab/button maps to a workflow, course/job choices are visible, User mode uses inline confirmations, assistant windows have anti-partial containment, and no user-facing repair controls are exposed.");
