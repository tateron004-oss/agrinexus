const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = relativePath => fs.readFileSync(path.join(root, relativePath), "utf8");

const app = read("public/app.js");
const css = read("public/styles.css");
const packageJson = JSON.parse(read("package.json"));
const qaSuite = read("scripts/qa-suite.js");

function includes(source, token, label) {
  assert(source.includes(token), `${label} should include ${token}`);
}

function excludes(source, token, label) {
  assert(!source.toLowerCase().includes(token.toLowerCase()), `${label} must not include ${token}`);
}

[
  "data-nexus-command-center-launches=\"true\"",
  "data-nexus-app-window-switcher=\"true\"",
  "data-nexus-app-window-command-row=\"true\"",
  "data-nexus-window-command-input",
  "Open a major service",
  "Switch Nexus app window",
  "Ask Nexus in this window",
  "Virtual Care",
  "Mobile Clinic",
  "Pharmacy",
  "Agriculture",
  "AgriTrade",
  "Logistics",
  "Workforce",
  "Live Knowledge"
].forEach(token => includes(app, token, `command center ${token}`));

[
  "let nexusRecentWorkflows = []",
  "function recordNexusRecentWorkflow",
  "data-nexus-recent-workflows=\"true\"",
  "Continue where you left off",
  "data-nexus-recent-workflow="
].forEach(token => includes(app, token, `recent workflows ${token}`));

[
  "let nexusGuidedWorkflowAnswers = {}",
  "function renderNexusGuidedIntakePanel",
  "data-nexus-guided-intake=\"true\"",
  "Conversational interview",
  "One question at a time - step ${Math.min",
  "Switch to form mode",
  "data-nexus-guided-save",
  "data-nexus-guided-back"
].forEach(token => includes(app, token, `guided intake ${token}`));

[
  "function renderNexusWorkflowHelperBlock",
  "data-nexus-window-helper=\"what-can-nexus-do\"",
  "What can Nexus do here?",
  "Nexus can prepare a mobile clinic request",
  "Nexus can prepare a pharmacy review packet",
  "Nexus can prepare telehealth intake notes"
].forEach(token => includes(app, token, `window helper ${token}`));

[
  "function renderNexusSmartEmptyState",
  "data-nexus-smart-empty-state",
  "No packet prepared yet. Complete the intake fields, then choose Prepare packet.",
  "No route prepared yet. Enter a start point and destination to prepare a route request.",
  "No provider endpoint is configured yet. Nexus can still prepare and queue this locally.",
  "Enter a research question to run source-backed Live Knowledge."
].forEach(token => includes(app, token, `smart empty state ${token}`));

[
  "function renderNexusStatusBadge",
  "data-nexus-status-badge=",
  "Queued locally",
  "Blocked: missing credentials",
  "Needs confirmation",
  "Not executed"
].forEach(token => includes(app, token, `status badge ${token}`));

[
  "const NEXUS_UX_ROLES",
  "Standard User",
  "Provider",
  "Vendor",
  "Admin",
  "Trainer",
  "Agriculture Expert",
  "Clinic Staff",
  "data-nexus-role-aware-view=\"true\"",
  "data-nexus-role-selector"
].forEach(token => includes(app, token, `role-aware views ${token}`));

[
  "data-nexus-language-preference",
  "data-nexus-low-bandwidth-control=\"true\"",
  "data-nexus-low-bandwidth-toggle",
  "nexus-low-bandwidth-mode",
  "Low-bandwidth mode is on",
  "Language preference captured"
].forEach(token => includes(app, token, `language low bandwidth mobile ${token}`));

[
  "function renderNexusConfirmationSummary",
  "data-nexus-confirmation-summary=\"true\"",
  "Here is what Nexus will do:",
  "Nexus will not:",
  "Confirm",
  "Cancel",
  "Edit"
].forEach(token => includes(app, token, `confirmation summaries ${token}`));

[
  "function renderNexusActionReceipt",
  "data-nexus-action-receipt=\"true\"",
  "Nexus did:",
  "Nexus did not:",
  "Action receipt"
].forEach(token => includes(app, token, `action receipts ${token}`));

[
  "mobile clinic",
  "pharmacy",
  "telehealth",
  "agriculture",
  "marketplace",
  "logistics",
  "maps",
  "research",
  "workforce",
  "gate",
  "communications",
  "media",
  "offline"
].forEach(token => includes(app.toLowerCase(), token, `upgraded app window ${token}`));

[
  "show recent workflows",
  "start guided",
  "set role to provider",
  "set role to admin",
  "use low bandwidth mode",
  "close this window",
  "minimize this window",
  "restore last window",
  "show action receipt"
].forEach(token => includes(app.toLowerCase(), token, `Ask Nexus UX command ${token}`));

[
  ".nexus-major-launches",
  ".nexus-app-window-switcher",
  ".nexus-app-window-command-row",
  ".nexus-recent-workflows",
  ".nexus-role-low-bandwidth-panel",
  ".nexus-window-helper",
  ".nexus-guided-intake",
  ".nexus-ux-status-badge",
  ".nexus-confirmation-summary",
  ".nexus-action-receipt",
  "@media (max-width: 780px)"
].forEach(token => includes(css, token, `UX CSS ${token}`));

[
  "payment completed",
  "booking completed",
  "dispatch completed",
  "appointment accepted",
  "provider accepted",
  "refill approved",
  "diagnosis confirmed"
].forEach(token => excludes(app, token, "Nexus UX maximization"));

includes(app, "Secret values are never rendered.", "secret-safe environment-name handling");

assert.equal(
  packageJson.scripts["qa:nexus-user-experience-maximization"],
  "node scripts/nexus-user-experience-maximization-qa.js",
  "package.json must expose qa:nexus-user-experience-maximization"
);
assert(qaSuite.includes("scripts/nexus-user-experience-maximization-qa.js"), "qa-suite.js must include UX maximization QA.");

console.log("Nexus user experience maximization QA passed.");
