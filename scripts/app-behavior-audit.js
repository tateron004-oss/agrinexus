const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const styles = fs.readFileSync(path.join(root, "public", "styles.css"), "utf8");
const html = fs.readFileSync(path.join(root, "public", "index.html"), "utf8");

function hasAll(haystack, values, message) {
  values.forEach(value => assert(haystack.includes(value), `${message}: missing ${value}`));
}

hasAll(app, [
  "function renderUserWorkspace",
  "user-language-panel",
  "[\"en\", \"English\"]",
  "[\"fr\", \"French\"]",
  "[\"sw\", \"Kiswahili\"]",
  "[\"ar\", \"Arabic\"]",
  "[\"es\", \"Spanish\"]",
  "[data-user-language]",
  "function renderUserSimpleActiveSection",
  "simpleUserSections",
  "insertAdjacentHTML(\"afterbegin\"",
  ":scope > .user-simple-module",
  "user-module-status",
  "data-user-voice-action",
  "data-close-user-language",
  "user-module-close",
  "userModeTranslationPack",
  "Object.entries(userModeTranslationPack)",
  "function nexusMemoryProfile",
  "function nexusBehaviorMode",
  "function updateNexusBehaviorLayer",
  "function contextualVoiceSuggestions",
  "function nexusDeepMemorySignals",
  "function nexusAutopilotQueue",
  "function providerActionDepthStatus",
  "function nexusProactiveAlerts",
  "function mobilePermissionRecoveryGuide",
  "function interruptNexusSpeech",
  "title: \"Learn\"",
  "title: \"Find Work\"",
  "title: \"Health\"",
  "title: \"Trade\"",
  "title: \"Map\"",
  "title: \"AI Help\"",
  "pendingGrandmaAction",
  "function renderGrandmaConfirmation",
  "function simpleUserCommandWorkflow",
  "function openDefaultUserSectionAction",
  "function renderUserInlineWorkflow",
  "function activateSectionFromButton",
  "activateSectionFromButton(button)",
  "![\"dashboard\", \"map\"].includes(sectionId)",
  "event.target.closest(\"[data-section], [data-mobile-section]\")",
  "function openMappedUserWorkflow",
  "eventOrButton?.target?.closest",
  "eventOrButton?.currentTarget?.matches",
  "data-inline-workflow-confirm",
  "data-inline-workflow-cancel",
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
  "function workflowRealUseCoach",
  "function workflowRealUseCoachHtml",
  "Plain meaning",
  "Ask this first",
  "Watch out",
  "Say next",
  "data.providerCandidates?.groups",
  "Rural African Farmer Provider Pipeline",
  "Rural Farmer Real Engine Pipeline",
  "African Country Coverage",
  "African Country Coverage Desk",
  "data.providerCandidates?.countryCoverage",
  "farmerFocus.successDefinition",
  "Legal/compliance",
  "Create legal and compliance packet",
  "workflow === \"provider-candidate\"",
  "/api/providers/candidates/shortlist",
  "function courseSelectOptions",
  "function productSelectOptions",
  "function routeSelectOptions",
  "closeAskNexus({ silent: true })",
  "const userSection = workflow === \"ai\" ? \"agent\" : workflow === \"map\" ? \"map\" : workflow",
  "experienceMode === \"user\" && simpleUserSections[userSection]",
  "lower.includes(\"help me\")",
  "action: \"orchestrate\"",
  "openDefaultAction: experienceMode === \"user\"",
  "function learningCertificateWorkflowConfig",
  "openWorkflowModal(config)",
  "$(\"#workflowConfirm\").onclick",
  "Nexus is completing this workflow now.",
  "remoteLaunchKitBtn",
  "function runRemoteLaunchKit",
  "/api/pilot/remote-launch-kit",
  "Remote Rural Farmer Launch Kit",
  "await handleVoiceCommand(button.dataset.simpleCommand)",
  "data-grandma-confirm=\"yes\"",
  "data-grandma-confirm=\"no\"",
  "closeAskNexus({ silent: true })",
  "openAskNexus();",
  "await handleVoiceCommand(action.command);"
], "App-mode workflow behavior");

hasAll(styles, [
  "body.user-mode #dashboard > :not(#userWorkspace)",
  "body.user-mode .simple-home",
  "display: none !important",
  "body.user-mode #countrySelect",
  "body.user-mode .section.active:not(#dashboard) > :not(.user-simple-module)",
  "body.user-mode .user-module-preview",
  "body.user-mode .user-scene-visual",
  "body.user-mode .user-module-preview .shipment-map-card",
  "body.user-mode .user-simple-module",
  "min-height: calc(100vh - 162px)",
  "max-height: calc(100vh - 88px)",
  "body.user-mode .user-language-panel",
  "body.user-mode #countrySelect",
  "body.user-mode #platformLanguageSelect",
  "body.user-mode .user-language-header",
  "body.user-mode .user-language-buttons button",
  "body.user-mode .user-fast-actions",
  "body.user-mode .user-fast-action",
  "body.user-mode .user-preview-actions",
  ".user-visual-icon",
  "body.user-mode .user-voice-dock",
  "body.user-mode .user-caption-panel",
  "body.admin-mode .user-caption-panel",
  "body.investor-mode .user-caption-panel",
  ".user-caption-text",
  "body.user-mode .user-voice-dock #nexusBehaviorStatus",
  "body.user-mode .user-module-status",
  "body.user-mode .user-module-back",
  "body.user-mode .user-module-close",
  "body.user-mode #globalVoiceGuide",
  "body.user-mode .global-assistant",
  "max-height: calc(100vh - 24px)",
  "Final assistant containment pass",
  ".global-assistant:not(.hidden)",
  ".jarvis-panel:not(.hidden)",
  ".modal:not(.hidden)",
  "min-height: calc(100dvh - 16px)",
  "position: fixed",
  "z-index: 220",
  "body.user-mode .global-assistant .field-label",
  "body.user-mode .assistant-close",
  "white-space: nowrap",
  "body.user-mode .global-assistant-status",
  "overflow-wrap: anywhere",
  "body.user-mode .grandma-workflow .workflow-fields",
  "body.user-mode .grandma-workflow .task-list",
  "body.user-mode .grandma-workflow .modal-actions button",
  "body.user-mode .user-inline-workflow",
  "body.user-mode #workforce .user-inline-workflow",
  "body.user-mode .user-inline-workflow-actions",
  ".workflow-real-use-coach",
  ".workflow-real-use-grid",
  ".user-inline-coach",
  "body.user-mode .toast"
], "App-mode containment styles");

hasAll(styles, [
  "service-learning",
  "service-workforce",
  "service-health",
  "service-trade",
  "service-map",
  "service-agent"
], "Color-coded app service buttons");

hasAll(app, [
  "{ label: \"Talk to Nexus\", section: \"ask\"",
  "{ label: \"Learn\", section: \"learning\"",
  "{ label: \"Find Work\", section: \"workforce\"",
  "{ label: \"Get Health Help\", section: \"health\"",
  "{ label: \"Sell Crops\", section: \"trade\"",
  "{ label: \"Map\", section: \"map\"",
  "{ label: \"AI Help\", section: \"agent\""
], "Visible app home services");

hasAll(app, [
  "lower.includes(\"show me jobs\")",
  "lower.includes(\"track my route\")",
  "lower.includes(\"check health risk\")",
  "lower.includes(\"nearest health facility\")",
  "lower.includes(\"explain the map\")",
  "lower.includes(\"help me understand the platform\")",
  "lower.includes(\"read the current response\")",
  "function isUniversalLanguageCommand",
  "function changeLanguageByVoice",
  "pendingAgentClarification = null;\n    await changeLanguageByVoice(command);",
  "function isGlobalStopCommand",
  "function clearConversationHold",
  "function isFreshActionDuringClarification",
  "Nexus heard a new request and cleared the old choice",
  "function guideAmbiguousUserWithoutChoice",
  "You do not need perfect words",
  "I hear you",
  "We can do this together",
  "you are not stuck",
  "Just tell me what you need",
  "You can keep talking",
  "Talk to me naturally",
  "function advisorBrainSignals",
  "function handleAdvisorBrainCommand",
  "function advisorCropCalendarAdvice",
  "learnerSupport",
  "workforceSupport",
  "mapSupport",
  "adminSupport",
  "integrationSupport",
  "investorSupport",
  "function rankedLogisticsRoutes",
  "function advisorLogisticsRecommendation",
  "function advisorCropConditionRecommendation",
  "Best current route",
  "Advisor recommendation",
  "Photo or video note",
  "Emergency escalation",
  "function moduleUseExplanation",
  "function userDisplayName",
  "roleLike.has(name.toLowerCase())"
], "Voice behavior routes");

assert(!app.includes('{ label: "Me", section: "profile"'), "Standard User home should not expose profile clutter");
assert(!app.includes("Welcome back, ${data.user.role}"), "Ask Nexus should not welcome people by role label");
assert(!styles.includes("body.user-mode .user-mobile-dock button.active,\nbody.user-mode .user-mobile-dock button[data-mobile-ask] {\n  display:"), "Mobile dock should stay hidden in app mode");
assert(html.includes("addTestUserBtn"), "Admin should have a User-only test login button");
assert(app.includes('workflow === "test-user"'), "User-only test login needs workflow wiring");
assert(app.includes("This account cannot access Admin or Investor mode"), "User-only login flow should clearly exclude Admin and Investor");
assert(html.includes("addAdminUserBtn"), "Admin should have an Admin test login button");
assert(app.includes('workflow === "admin-user"'), "Admin test login needs workflow wiring");
assert(app.includes("Standard Users and Investors cannot run this workflow"), "Admin login flow should clearly exclude Standard Users and Investors");
assert(html.includes("userVoiceDock"), "User app shell needs a compact always-available voice dock");
assert(html.includes("globalBackBtn"), "Ask Nexus needs a clear Back to app close control");
assert(html.includes("nexusBehaviorStatus"), "User voice dock needs an assistant state indicator");
assert(html.includes('data-user-voice-action="listen"'), "User voice dock needs a speak action");
assert(html.includes('data-user-voice-action="type"'), "User voice dock needs a type action");
assert(html.includes('data-user-voice-action="read"'), "User voice dock needs a read action");
assert(html.includes("nexus-behavior-116"), "Index must force browsers to load Nexus behavior CSS");
assert(html.includes("nexus-behavior-116"), "Index must force browsers to load Nexus behavior JS");
assert(app.includes("if (!id) return \"dashboard\";"), "Language changes must survive an empty hash without querying '#'");
assert(app.includes("document.getElementById(id)?.classList.contains(\"section\")"), "Section hash lookup must avoid invalid CSS selectors during language switching");
assert(app.includes("I want to sell maize"), "Nexus behavior layer should support natural trade requests without button hunting");
assert(app.includes("I need a doctor"), "Nexus behavior layer should support natural telehealth requests without button hunting");
assert(app.includes("function allModeVoiceCommandCatalog"), "Nexus needs an explicit all-mode voice command contract");
assert(app.includes("These commands are available in User, Admin, and Investor mode"), "Nexus must explain command support across all three modes");
assert(app.includes("what commands work in all modes"), "Voice help should expose an all-three-modes command phrase");
assert(app.includes("User, Admin, or Investor mode"), "Voice help response must say Nexus works in all three modes");
assert(app.includes("function migrantFriendlyVoiceIntent"), "Voice layer needs migrant-friendly imperfect English intent routing");
assert(app.includes("doctor help"), "Voice help needs migrant-friendly health phrasing");
assert(app.includes("job please"), "Voice help needs migrant-friendly workforce phrasing");
assert(app.includes("where my product"), "Voice help needs migrant-friendly product tracking phrasing");
assert(app.includes("track transaction location"), "Voice help needs transaction and location tracking phrasing");
assert(app.includes("buy product"), "Voice help needs product buying phrasing");
assert(app.includes("i sick"), "Voice aliases need imperfect-English telehealth support");
assert(app.includes("crop buyer"), "Voice aliases need imperfect-English trade support");
assert(app.includes("I opened the map to track your product, transaction, sale route, and delivery location."), "Migrant-friendly trade tracking must open map route support");
assert(app.includes("function dynamicVoiceToolRegistry"), "Nexus needs a dynamic voice tool registry for unlimited-menu behavior");
assert(app.includes("function bestDynamicVoiceTool"), "Nexus needs dynamic tool scoring for natural commands");
assert(app.includes("await runDynamicVoiceTool(command)"), "Voice handler must try registered workflow tools before generic AI fallback");
assert(app.includes("I can also discover"), "Voice help should explain dynamic workflow discovery");
assert(app.includes("function voiceMissionTemplates"), "Advanced voice needs multi-step mission templates");
assert(app.includes("function isVoiceMissionRequest"), "Advanced voice needs clear mission detection");
assert(app.includes("opening the first step now"), "Mission requests should begin the first workflow without extra choice friction");
assert(app.includes("\\b(help|assist|walk me through|guide|start|run|i need|i want|please)\\b"), "Mission detection should accept natural help and want phrases");
assert(app.includes("\\b(help|assist|guide).*\\b(sell|selling)\\b"), "Crop-sale mission should catch help sell my crop phrasing");
assert(app.includes("function fillWorkflowFieldByVoice"), "Advanced voice needs form filling by speech");
assert(app.includes("function voiceWorkflowStatus"), "Advanced voice needs workflow status readout");
assert(app.includes("function voiceErrorRecovery"), "Advanced voice needs recovery when actions fail");
assert(app.includes("function modeSpecificVoicePersona"), "Advanced voice needs mode-specific persona behavior");
assert(app.includes("function recordVoiceEvent"), "Advanced voice needs real-time progress event stream");
assert(app.includes("start multi-step missions"), "Voice help must explain advanced voice capabilities");
assert(app.includes("Admin Operator"), "Nexus behavior layer should adapt for Admin mode");
assert(app.includes("Investor Presenter"), "Nexus behavior layer should adapt for Investor mode");
assert(app.includes("visibilitychange"), "Nexus behavior layer should recover voice-first listening after app visibility changes");
assert(app.includes("Nexus is resuming voice-first listening"), "Nexus behavior layer should explain listening recovery");
assert(app.includes("providerActionDepthStatus"), "Nexus behavior layer should summarize real provider action depth");
assert(app.includes("mobilePermissionRecoveryGuide"), "Nexus behavior layer should guide mobile permission recovery");

console.log("App behavior audit passed");
console.log("Checked: app-mode language picker, service buttons, section containment, workflow confirmations, voice routes, overflow wrapping, and advanced-panel hiding.");
