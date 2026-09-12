const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const styles = fs.readFileSync(path.join(root, "public", "styles.css"), "utf8");
const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const suite = fs.readFileSync(path.join(root, "scripts", "qa-suite.js"), "utf8");

function assert(condition, message) {
  if (!condition) {
    console.error(`FAIL ${message}`);
    process.exitCode = 1;
  } else {
    console.log(`PASS ${message}`);
  }
}

function includes(source, token, message) {
  assert(source.includes(token), message);
}

const requiredTypes = [
  "conversational_interview",
  "one_question_prompt",
  "multi_step_intake",
  "option_comparison",
  "profile_review",
  "measurement_entry",
  "timeline",
  "shipment_tracking",
  "map_and_route",
  "learning_activity",
  "document_review",
  "provider_handoff",
  "confirmation",
  "receipt",
  "completion_summary",
  "error_recovery",
  "blocked_state_explanation"
];

includes(app, "NEXUS_DYNAMIC_WORKFLOW_PRESENTATION_TYPES", "dynamic workflow presentation type registry exists");
for (const type of requiredTypes) {
  includes(app, `"${type}"`, `dynamic workflow type exists: ${type}`);
}

[
  "function buildNexusDynamicWorkflowMissionState",
  "getActiveNexusOsMission",
  "nexusIntentDrivenWorkflowLastRoute",
  "missionState.route",
  "missingInformation",
  "confirmationRequirement",
  "providerRequirement",
  "executionPath"
].forEach(token => includes(app, token, `mission-state renderer contract ${token}`));

[
  "function nexusDynamicWorkflowPresentationType",
  "function nexusDynamicWorkflowTypeCopy",
  "function renderNexusDynamicWorkflowRenderer",
  "renderNexusDynamicWorkflowRenderer(definition, state)",
  "data-nexus-dynamic-workflow-renderer=\"true\"",
  "data-nexus-dynamic-workflow-consumes-mission-state=\"true\"",
  "data-nexus-background-interaction=\"blocked\"",
  "data-nexus-keyboard-navigation=\"true\"",
  "data-nexus-mobile-rendering=\"true\"",
  "data-execution-authority=\"false\""
].forEach(token => includes(app, token, `dynamic renderer runtime ${token}`));

[
  "data-nexus-dynamic-next-question=\"true\"",
  "data-nexus-dynamic-voice-text-access=\"true\"",
  "data-nexus-dynamic-workflow-text-input",
  "data-nexus-voice-control=\"listen\"",
  "data-nexus-dynamic-workflow-speak=\"true\"",
  "data-nexus-dynamic-workflow-cancel=\"true\"",
  "data-nexus-dynamic-workflow-return-home=\"true\"",
  "data-nexus-workflow-close",
  "data-nexus-workflow-back"
].forEach(token => includes(app, token, `dynamic renderer user control ${token}`));

[
  "No background execution",
  "No external execution",
  "No fake citations",
  "No geolocation requested",
  "No silent execution",
  "Nexus can recover safely without claiming a completed action."
].forEach(token => includes(app, token, `dynamic renderer safety copy ${token}`));

[
  "map_and_route",
  "shipment_tracking",
  "learning_activity",
  "measurement_entry",
  "provider_handoff",
  "option_comparison",
  "document_review",
  "blocked_state_explanation"
].forEach(type => {
  const token = `return "${type}"`;
  includes(app, token, `dynamic renderer route can select ${type}`);
});

const activeWorkspaceStart = app.indexOf("function renderNexusActiveWorkflowWorkspace()");
const activeWorkspaceEnd = app.indexOf("function focusNexusActiveWorkflow", activeWorkspaceStart);
const activeWorkspaceSource = app.slice(activeWorkspaceStart, activeWorkspaceEnd);
assert(
  activeWorkspaceSource.includes("renderNexusDynamicWorkflowRenderer(definition, state)") &&
    activeWorkspaceSource.indexOf("renderNexusDynamicWorkflowRenderer(definition, state)") < activeWorkspaceSource.indexOf("renderNexusWorkflowLandingWindow(definition, state)"),
  "dynamic renderer appears in focused workflow before broad landing/form areas"
);

const intentRouterSource = app.slice(
  app.indexOf("function routeNexusIntentDrivenWorkflowCommand"),
  app.indexOf("function handleNexusIntentDrivenCommandCenterSubmit")
);
assert(
  intentRouterSource.includes("openNexusWorkflow(route.recommendedWorkflow") &&
    intentRouterSource.includes("renderUserWorkspace()"),
  "workflow opens from intent and renders dynamic workspace"
);

[
  ".nexus-dynamic-workflow-renderer",
  ".nexus-dynamic-workflow-body",
  ".nexus-dynamic-workflow-access",
  ".nexus-dynamic-workflow-long-copy",
  "@media (max-width: 780px)",
  "body.user-mode .nexus-dynamic-workflow-body {\n    grid-template-columns: 1fr;",
  "body.user-mode .nexus-dynamic-workflow-access {\n    align-items: stretch;"
].forEach(token => includes(styles, token, `dynamic renderer CSS ${token}`));

[
  "body.user-mode .nexus-workflow-modal-backdrop",
  "position: fixed;",
  "aria-modal=\"true\"",
  "data-nexus-workflow-modal=\"true\""
].forEach(token => includes(app + styles, token, `background blocking/focused modal ${token}`));

assert(
  pkg.scripts["qa:nexus-os-dynamic-workflow-renderer"] === "node scripts/nexus-os-dynamic-workflow-renderer-qa.js",
  "package alias exists"
);
assert(suite.includes("scripts/nexus-os-dynamic-workflow-renderer-qa.js"), "safe QA suite includes Rail 9 QA");

if (process.exitCode) process.exit(process.exitCode);

console.log("Nexus OS dynamic workflow renderer QA passed.");
