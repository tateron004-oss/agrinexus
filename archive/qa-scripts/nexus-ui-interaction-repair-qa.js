const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8");

const app = read("public/app.js");
const styles = read("public/styles.css");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

function includes(source, token, label) {
  assert(source.includes(token), `${label} should include ${token}`);
}

function excludes(source, token, label) {
  assert(!source.includes(token), `${label} should not include ${token}`);
}

[
  "function handleNexusStandardUserHomeClick",
  "function bindNexusStandardUserHomeControls",
  "function activateSectionFromButton",
  "function goSection",
  "function openNexusWorkflow",
  "function handleNexusWorkflowControllerClick",
  "function handleNexusLaneActionClick",
  "function handleNexusPartnerOnboardingClick",
  "function nexusActiveSidebarId"
].forEach(token => includes(app, token, "required UI dispatcher"));

[
  "data-nexus-command-center-submit",
  "data-nexus-command-center-voice",
  "data-nexus-command-prefill",
  "data-nexus-mode-shortcut",
  "data-nexus-action-controller=\"prepare-packet\"",
  "data-nexus-action-controller=\"request-confirmation\"",
  "data-nexus-action-controller=\"queue-packet\"",
  "data-nexus-action-controller=\"execute-confirmed-test\"",
  "data-nexus-lane-action=\"test\"",
  "data-nexus-lane-action=\"configure\"",
  "data-nexus-lane-action=\"link-partner\"",
  "data-nexus-lane-action=\"export\""
].forEach(token => includes(app, token, "click target selector"));

[
  "data-nexus-mode-shortcut=\"sidebar-",
  "data-nexus-mode-shortcut=\"core-",
  "data-nexus-mode-shortcut=\"suggested-",
  "data-testid=\"nexus-mode-card-",
  "data-nexus-mode-shortcut=\"provider-support\"",
  "data-nexus-mode-shortcut=\"activation-center\"",
  "data-nexus-mode-shortcut=\"settings\""
].forEach(token => includes(app, token, "routable Standard User control"));

[
  "normalizedModeId === \"home\"",
  "normalizedModeId === \"settings\"",
  "normalizedModeId === \"activation-center\"",
  "nexusWorkflowDefinition(normalizedWorkflowId, command)",
  "openNexusWorkflow(normalizedWorkflowId",
  "runNexusStandardUserHomeLocalCommand(command)",
  "return !handleNexusStandardUserHomeClick(event);"
].forEach(token => includes(app, token, "safe click routing behavior"));

[
  "aria-pressed=\"${activeSidebarId === id}\"",
  "aria-pressed=\"${activeWorkflowId === item.id}\"",
  "nexus-core-feature-card nexus-feature-card nexus-glass-card",
  "${activeSidebarId === id ? \"selected active\" : \"\"}",
  "${activeWorkflowId === item.id ? \"selected active\" : \"\"}"
].forEach(token => includes(app, token, "visible active state"));

[
  "onclick=\"return window.nexusHandleStandardUserHomeShortcut ? !window.nexusHandleStandardUserHomeShortcut(event) : true\"",
  "handleNexusStandardUserHomeClick(event);\n      return false;"
].forEach(token => excludes(app, token, "stale inline/return-false click trap"));

[
  "body.user-mode .nexus-sidebar-nav button",
  "body.user-mode .nexus-mode-launcher button",
  "body.user-mode .nexus-core-feature-card.selected",
  "body.user-mode .nexus-core-feature-card.active",
  "body.user-mode .nexus-active-workflow"
].forEach(token => includes(styles, token, "interaction styling"));

[
  "body.user-mode .nexus-mode-launcher button {\n  pointer-events: none",
  "body.user-mode .nexus-sidebar-nav button {\n  pointer-events: none",
  "body.user-mode .nexus-command-send {\n  pointer-events: none",
  "body.user-mode .nexus-workflow-actions button {\n  pointer-events: none"
].forEach(token => excludes(styles, token, "critical controls must remain clickable"));

[
  "Live actions remain credential, consent, confirmation, and audit gated.",
  "You can prepare the packet now; live handoff stays gated.",
  "data-no-live-execution=\"true\"",
  "data-execution-authority=\"false\""
].forEach(token => includes(app, token, "credential-gated visible status"));

assert.strictEqual(
  packageJson.scripts["qa:nexus-ui-interaction-repair"],
  "node scripts/nexus-ui-interaction-repair-qa.js",
  "package alias should run UI interaction repair QA"
);

includes(qaSuite, "scripts/nexus-ui-interaction-repair-qa.js", "qa-suite local-safe wiring");

console.log("Nexus UI interaction repair QA passed.");
