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
  "title: \"Work\"",
  "title: \"Health\"",
  "title: \"Trade\"",
  "title: \"Map\"",
  "title: \"AI Help\"",
  "pendingGrandmaAction",
  "function renderGrandmaConfirmation",
  "function simpleUserCommandWorkflow",
  "function openDefaultUserSectionAction",
  "function renderUserInlineWorkflow",
  "function openMappedUserWorkflow",
  "data-inline-workflow-confirm",
  "data-inline-workflow-cancel",
  "lower.includes(\"help me\")",
  "action: \"orchestrate\"",
  "openDefaultAction: experienceMode === \"user\"",
  "function learningCertificateWorkflowConfig",
  "openWorkflowModal(config)",
  "$(\"#workflowConfirm\").onclick",
  "Nexus is completing this workflow now.",
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
  "body.user-mode .section.active:not(#dashboard) > :not(.user-simple-module)",
  "body.user-mode .user-simple-module",
  "min-height: calc(100vh - 162px)",
  "max-height: calc(100vh - 88px)",
  "body.user-mode .user-language-panel",
  "body.user-mode .user-language-buttons button",
  "body.user-mode .user-voice-dock",
  "body.user-mode .user-voice-dock #nexusBehaviorStatus",
  "body.user-mode .user-module-status",
  "body.user-mode .user-module-back",
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
  "body.user-mode .user-inline-workflow-actions",
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
assert(html.includes("nexusBehaviorStatus"), "User voice dock needs an assistant state indicator");
assert(html.includes('data-user-voice-action="listen"'), "User voice dock needs a speak action");
assert(html.includes('data-user-voice-action="type"'), "User voice dock needs a type action");
assert(html.includes('data-user-voice-action="read"'), "User voice dock needs a read action");
assert(html.includes("nexus-behavior-56"), "Index must force browsers to load Nexus behavior CSS");
assert(html.includes("nexus-behavior-69"), "Index must force browsers to load Nexus behavior JS");
assert(app.includes("I want to sell maize"), "Nexus behavior layer should support natural trade requests without button hunting");
assert(app.includes("I need a doctor"), "Nexus behavior layer should support natural telehealth requests without button hunting");
assert(app.includes("Admin Operator"), "Nexus behavior layer should adapt for Admin mode");
assert(app.includes("Investor Presenter"), "Nexus behavior layer should adapt for Investor mode");
assert(app.includes("visibilitychange"), "Nexus behavior layer should recover voice-first listening after app visibility changes");
assert(app.includes("Nexus is resuming voice-first listening"), "Nexus behavior layer should explain listening recovery");
assert(app.includes("providerActionDepthStatus"), "Nexus behavior layer should summarize real provider action depth");
assert(app.includes("mobilePermissionRecoveryGuide"), "Nexus behavior layer should guide mobile permission recovery");

console.log("App behavior audit passed");
console.log("Checked: app-mode language picker, service buttons, section containment, workflow confirmations, voice routes, overflow wrapping, and advanced-panel hiding.");
