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
  assert(!source.includes(token), `${label} must not include ${token}`);
}

function assertBefore(source, first, second, label) {
  const firstIndex = source.indexOf(first);
  const secondIndex = source.indexOf(second);
  assert(firstIndex >= 0, `${label} missing first token: ${first}`);
  assert(secondIndex >= 0, `${label} missing second token: ${second}`);
  assert(firstIndex < secondIndex, `${label} should place ${first} before ${second}`);
}

[
  "let nexusActiveWorkflowState",
  "function normalizeNexusWorkflowId(",
  "function nexusWorkflowDefinition(",
  "function renderNexusActiveWorkflowWorkspace(",
  "function openNexusWorkflow(",
  "function focusNexusActiveWorkflow(",
  'id="nexus-workspace"',
  'data-nexus-workspace="true"',
  'data-nexus-active-workflow="${escapeHtml(id)}"',
  'data-execution-authority="false"',
  'data-provider-handoff="false"',
  'data-no-live-execution="true"',
  'id="nexusActiveWorkflowHeading"',
  'tabindex="-1"',
  "workspace.scrollIntoView",
  "heading?.focus"
].forEach(token => includes(app, token, `central workflow workspace contract ${token}`));

assertBefore(
  app,
  "${renderNexusCommandCenterHero()}",
  "${renderNexusActiveWorkflowWorkspace()}",
  "workspace should be near the top of the main command area"
);
assertBefore(
  app,
  "${renderNexusActiveWorkflowWorkspace()}",
  "${renderNexusAgenticBrainPanel()}",
  "workspace should appear before contextual logs/history panels"
);

[
  "agriculture",
  "chronic-care",
  "telehealth-intake",
  "mobile-clinic",
  "pharmacy-support",
  "learning",
  "jobs",
  "agritrade",
  "maps",
  "media",
  "reminders",
  "offline",
  "clinical-support",
  "provider-support",
  "communications",
  "resource-assistant"
].forEach(id => includes(app, id, `workflow id ${id}`));

[
  "diabetes",
  "hypertension",
  "obesity",
  "rpm",
  "rtm",
  "remote patient monitoring",
  "remote therapeutic monitoring",
  "telehealth",
  "provider",
  "doctor",
  "appointment preparation",
  "pharmacy",
  "medication",
  "mobile clinic",
  "workforce",
  "jobs",
  "employment",
  "career",
  "maps",
  "route",
  "field visit",
  "learning",
  "training",
  "agriculture",
  "farm",
  "marketplace",
  "agritrade",
  "media",
  "music",
  "communications",
  "resource assistant"
].forEach(alias => includes(app.toLowerCase(), alias, `voice/click alias ${alias}`));

[
  "return openNexusWorkflow(workflowId",
  "return openNexusWorkflow(normalizedWorkflowId",
  "openNexusWorkflow(panelModeId",
  "openNexusWorkflow(centralWorkflowId",
  'source: "voice-command"',
  'source: "mode-click"',
  'source: "typed-command"',
  'source: "command-submit"'
].forEach(token => includes(app, token, `central opener route ${token}`));

[
  "Patient label",
  "Main concern",
  "Condition focus",
  "Blood pressure",
  "Blood glucose",
  "Medication name",
  "Pharmacy question",
  "Area / community",
  "Care or service needed",
  "Provider / reviewer",
  "Recipient",
  "Site / farm / community",
  "Route / logistics notes",
  "origin and destination"
].forEach(token => includes(app, token, `usable workflow field/copy ${token}`));

[
  "Map workspace ready",
  'data-nexus-workflow-map-preview="true"',
  'data-location-permission-requested="false"',
  'data-geolocation-used="false"'
].forEach(token => includes(app, token, `map workflow visible/safe contract ${token}`));

[
  "does not diagnose",
  "does not prescribe",
  "does not contact providers",
  "does not request browser location",
  "does not place orders",
  "does not send SMS",
  "without a future configured connector, consent, confirmation, and audit",
  "No action was executed",
  "noExecutionAuthorized"
].forEach(token => includes(app, token, `safety gate copy ${token}`));

[
  "live provider appointment was scheduled",
  "provider contacted successfully",
  "payment processed successfully",
  "prescription sent successfully",
  "emergency dispatch started",
  "location shared automatically"
].forEach(token => excludes(app.toLowerCase(), token.toLowerCase(), `false live-service claim ${token}`));

[
  ".nexus-active-workflow",
  "min-height: 430px",
  ".nexus-workflow-field-grid",
  ".nexus-workflow-map-preview",
  "min-height: 230px",
  ".nexus-workflow-steps",
  "scroll-margin-top"
].forEach(token => includes(styles, token, `workflow workspace CSS ${token}`));

assert.strictEqual(
  packageJson.scripts["qa:nexus-full-workflow-workspace"],
  "node scripts/nexus-full-workflow-workspace-qa.js",
  "package alias should run full workflow workspace QA"
);
includes(qaSuite, "scripts/nexus-full-workflow-workspace-qa.js", "safe QA suite wiring");

console.log("Nexus full workflow workspace QA passed.");
