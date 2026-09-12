const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const styles = fs.readFileSync(path.join(root, "public", "styles.css"), "utf8");
const pkg = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
const qaSuite = fs.readFileSync(path.join(root, "scripts", "qa-suite.js"), "utf8");

function sourceBetween(source, startMarker, endMarker) {
  const start = source.indexOf(startMarker);
  assert(start >= 0, `Missing start marker: ${startMarker}`);
  const end = source.indexOf(endMarker, start + startMarker.length);
  assert(end > start, `Missing end marker after: ${startMarker}`);
  return source.slice(start, end);
}

const workflowSource = sourceBetween(
  app,
  "function createNexusAutonomousWorkflowState",
  "function isControlledStagedActionPreviewFlagEnabled"
);
const previewLifecycleSource = sourceBetween(
  app,
  "function paintLocalLevelOneSuggestionForSimpleUserIntent",
  "function buildControlledActionMetadataFromSuggestion"
);
const observedLifecycleSource = sourceBetween(
  app,
  "function observeAgentActionMetadata",
  "const countryLanguageMap"
);
const documentClickSource = sourceBetween(
  app,
  "document.addEventListener(\"click\", async event =>",
  "const workflowButton = event.target.closest"
);

[
  "nexusAutonomousWorkflowState",
  "schemaVersion: \"nexus-autonomous-workflow.v1\"",
  "activePlan",
  "currentStepIndex",
  "completedSteps",
  "nextStep",
  "back",
  "next",
  "cancel",
  "revise",
  "explain",
  "finish",
  "executionAuthority: false",
  "canExecute: false",
  "externalExecutionAllowed: false",
  "storageMode: \"volatile-ui-only\""
].forEach(term => assert(workflowSource.includes(term), `Sprint 2 workflow engine must include ${term}`));

[
  "data-nexus-workflow-control=\"back\"",
  "data-nexus-workflow-control=\"next\"",
  "data-nexus-workflow-control=\"explain\"",
  "data-nexus-workflow-control=\"revise\"",
  "data-nexus-workflow-control=\"finish\"",
  "data-nexus-workflow-control=\"cancel\"",
  "No provider handoff",
  "backend write",
  "external action"
].forEach(term => assert(workflowSource.includes(term), `Sprint 2 visible workflow card must include ${term}`));

assert(previewLifecycleSource.includes("startNexusAutonomousWorkflowFromTaskPlan"), "Low-risk local previews must start workflows from task plans.");
assert(observedLifecycleSource.includes("startNexusAutonomousWorkflowFromTaskPlan"), "Observed backend low-risk previews must start workflows from task plans.");
assert(documentClickSource.includes("handleNexusAutonomousWorkflowClick(event)"), "Document click pipeline must handle workflow controls.");
assert(app.includes("nexusAutonomousWorkflowState = null"), "Workflow state must be clearable.");

[
  "localStorage",
  "sessionStorage",
  "fetch(",
  "request(",
  "navigator.geolocation",
  "getCurrentPosition",
  "watchPosition",
  "mediaDevices",
  "getUserMedia",
  "window.open",
  "openWorkflowModal",
  "openWorkflowByVoice",
  "maybeDispatchConfirmedNativeCallHandoff",
  "dispatchProviderWebhook",
  "confirmPendingWorkflow"
].forEach(term => assert(!workflowSource.includes(term), `Sprint 2 workflow engine must not introduce ${term}`));

[
  ".nexus-autonomous-workflow-card",
  ".nexus-autonomous-workflow-actions",
  ".nexus-autonomous-workflow-label",
  "grid-template-columns: repeat(3, minmax(0, 1fr))"
].forEach(term => assert(styles.includes(term), `Sprint 2 workflow styling must include ${term}`));

assert.strictEqual(
  pkg.scripts["qa:nexus-capability-sprint-2-multi-step-workflow-engine"],
  "node scripts/nexus-capability-sprint-2-multi-step-workflow-engine-qa.js",
  "package.json must expose Sprint 2 QA alias."
);
assert(
  qaSuite.includes("scripts/nexus-capability-sprint-2-multi-step-workflow-engine-qa.js"),
  "qa-suite.js must include Sprint 2 QA."
);

console.log("[nexus-capability-sprint-2-multi-step-workflow-engine-qa] passed");
