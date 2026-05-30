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
  "title: \"Learn\"",
  "title: \"Work\"",
  "title: \"Health\"",
  "title: \"Trade\"",
  "title: \"Map\"",
  "title: \"AI Help\"",
  "pendingGrandmaAction",
  "function renderGrandmaConfirmation",
  "data-grandma-confirm=\"yes\"",
  "data-grandma-confirm=\"no\"",
  "openAskNexus();",
  "await handleVoiceCommand(action.command);"
], "App-mode workflow behavior");

hasAll(styles, [
  "body.user-mode #dashboard > :not(#userWorkspace)",
  "body.user-mode .simple-home",
  "display: none !important",
  "body.user-mode .section.active:not(#dashboard) > :not(.user-simple-module)",
  "body.user-mode .user-simple-module",
  "min-height: calc(100vh - 92px)",
  "body.user-mode .user-language-panel",
  "body.user-mode .user-language-buttons button",
  "body.user-mode #globalVoiceGuide",
  "body.user-mode .assistant-close",
  "white-space: nowrap",
  "body.user-mode .global-assistant-status",
  "overflow-wrap: anywhere",
  "body.user-mode .grandma-workflow .workflow-fields",
  "body.user-mode .grandma-workflow .task-list",
  "body.user-mode .grandma-workflow .modal-actions button",
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
assert(html.includes("user-only-test-account-53"), "Index must force browsers to load user account CSS");
assert(html.includes("user-only-test-account-66"), "Index must force browsers to load user account JS");

console.log("App behavior audit passed");
console.log("Checked: app-mode language picker, service buttons, section containment, workflow confirmations, voice routes, overflow wrapping, and advanced-panel hiding.");
