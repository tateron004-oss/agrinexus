const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

const docPath = path.join(root, "docs", "NEXUS_ACTION_DECISION_STAGING_UI_CONTRACT.md");
assert(fs.existsSync(docPath), "docs/NEXUS_ACTION_DECISION_STAGING_UI_CONTRACT.md must exist");

const doc = read("docs", "NEXUS_ACTION_DECISION_STAGING_UI_CONTRACT.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const packageJson = read("package.json");
const suite = read("scripts", "qa-suite.js");
const observationDoc = read("docs", "NEXUS_ACTION_DECISION_OBSERVATION_METADATA.md");
const mapper = read("public", "nexus-action-decision-mapper.js");
const memory = read("public", "nexus-session-memory.js");

for (const term of [
  "Action Decision Staging UI Contract",
  "hidden_metadata_only",
  "informational_response",
  "suggestion_preview",
  "review_option",
  "staged_action",
  "missing_input_required",
  "confirmation_required",
  "provider_handoff_ready",
  "blocked_restricted",
  "cancelled",
  "Review options",
  "Prepare action",
  "Needs information",
  "Confirm before action",
  "Provider handoff",
  "Blocked for safety",
  "No button may execute real-world action directly from actionDecision metadata",
  "selectedToolId must not directly execute",
  "agentAction must not directly execute",
  "missingInputs must block execution",
  "confirmationRequired: true means no execution may occur",
  "provider_handoff_only means Nexus may prepare a handoff but did not execute the action",
  "restricted actions must not execute",
  "Standard User visible behavior",
  "no live execution",
  "no browser permissions",
  "no call execution",
  "no message execution",
  "no camera opening",
  "no location sharing",
  "no transaction",
  "no emergency dispatch claim"
]) {
  assert(doc.includes(term), `staging UI contract must include required term: ${term}`);
}

for (const section of [
  "## 1. Purpose And Scope",
  "## 2. Relationship To Phase 12A, 12B, 12C, And 12D",
  "## 3. Staging UI States",
  "## 4. Visual Treatment Contract",
  "## 5. Button And Control Rules",
  "## 6. Missing Input UI Contract",
  "## 7. Confirmation UI Contract",
  "## 8. Provider Handoff UI Contract",
  "## 9. Risk-Based UI Rules",
  "## 10. Standard User Demo Preservation",
  "## 11. Future Runtime Implementation Guidance",
  "## 12. Non-Goals"
]) {
  assert(doc.includes(section), `staging UI contract must include section: ${section}`);
}

for (const risk of ["low", "medium", "high", "restricted"]) {
  assert(new RegExp(`### ${risk}\\b`).test(doc), `staging UI contract must define risk UI section: ${risk}`);
}

assert(packageJson.includes("\"qa:nexus-action-decision-staging-ui-contract\""), "package.json must expose qa:nexus-action-decision-staging-ui-contract");
assert(suite.includes("scripts/nexus-action-decision-staging-ui-contract-qa.js"), "nexus-workforce suite should include staging UI contract QA");

assert(observationDoc.includes("Action Decision Observation Metadata"), "Phase 12D observation doc must remain present");
assert(mapper.includes("mapNexusPromptToActionDecision"), "Phase 12C mapper must remain present");
assert(!index.includes("nexus-staged-action-ui.js"), "Standard User page must not load future staged action UI in Phase 12E");
assert(!index.includes("nexus-action-decision-mapper.js"), "Standard User page must not load action decision mapper in Phase 12E");
assert(!/actionDecision[\s\S]{0,240}(openWorkflow|goSection|request\(|confirm|execute|stage|dispatch|getUserMedia|geolocation)/i.test(app), "frontend must not execute from actionDecision metadata");
assert(!/actionDecision[\s\S]{0,240}(openWorkflow|goSection|request\(|confirm|execute|stage|dispatch|getUserMedia|geolocation)/i.test(server), "backend must not execute from actionDecision metadata");
assert.match(app, /Preview only - no action has been taken\./, "existing preview-only visible language must remain");
assert.match(app, /Review options/, "existing Review options label must remain");
assert.match(app, /executionBoundary:\s*"metadataOnly"/, "existing metadata-only boundary must remain");
assert.match(app, /executionBoundary:\s*"previewOnlyReadiness"/, "existing preview-only readiness boundary must remain");
assert.match(app, /executionBoundary:\s*"confirmationReadinessOnly"/, "existing confirmation-readiness-only boundary must remain");
assert.match(app, /executionBoundary:\s*"navigationReadinessOnly"/, "existing navigation-readiness-only boundary must remain");
assert.match(server, /runtimeStatus:\s*"metadata-only"/, "backend agentAction metadata must remain metadata-only");
assert.match(memory, /canExecute:\s*false/, "session memory must remain non-executing");
assert.match(memory, /executionAuthority:\s*"none"/, "session memory must remain non-authoritative");

for (const forbidden of [
  "executeStagedAction(",
  "runStagedAction(",
  "actionDecision.execute",
  "selectedToolId.execute",
  "agentAction.execute",
  "nexus-staged-action-ui.js"
]) {
  assert(!`${app}\n${server}\n${index}`.includes(forbidden), `runtime must not include staged action execution hook: ${forbidden}`);
}

console.log("Nexus action decision staging UI contract QA passed");
console.log("- required staging states, labels, and risk treatments are documented");
console.log("- contract preserves non-execution button and confirmation rules");
console.log("- Standard User runtime remains unwired to actionDecision staging UI");
