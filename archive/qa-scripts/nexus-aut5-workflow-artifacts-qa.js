const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const planner = require("../server/nexus-autonomy-workflow-planner.js");
const session = require("../server/nexus-autonomy-workflow-session-state.js");
const artifacts = require("../server/nexus-autonomy-workflow-artifacts.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function assertSafeArtifact(artifact, label) {
  assert.equal(artifacts.isSafeAutonomyWorkflowArtifact(artifact), true, `${label} must be safe.`);
  assert.equal(artifact.noExecutionAuthorized, true, `${label} must not authorize execution.`);
  assert.equal(artifact.noProviderContactAuthorized, true, `${label} must not authorize provider contact.`);
  assert.equal(artifact.noLocationPermissionRequested, true, `${label} must not request location.`);
  assert.equal(artifact.noBackendActionWritePerformed, true, `${label} must not write backend actions.`);
  assert.equal(artifact.dataAttributes["data-read-only"], "true", `${label} must carry read-only marker.`);
  assert.equal(artifact.dataAttributes["data-execution-authority"], "false", `${label} must carry no-execution marker.`);
  assert.equal(artifact.dataAttributes["data-provider-handoff"], "false", `${label} must carry no-provider marker.`);
  assert(!/"onClick"|"href"|"button"|sendMessage|placeCall|checkout|autoSubmit|autoDispatch|providerHandoff":true/i.test(JSON.stringify(artifact)), `${label} must not contain executable UI metadata.`);
}

function assertArtifactTypes() {
  const sourceRefs = [
    { sourceId: "extension-1", title: "Extension guidance", sourceType: "public-source", url: "https://example.test/source", freshness: "fixture" }
  ];

  [
    "checklist",
    "comparison_table",
    "source_summary",
    "provider_questions",
    "application_prep_checklist",
    "message_draft_text_only",
    "email_draft_text_only",
    "call_script_text_only",
    "training_plan",
    "farm_issue_observation_checklist",
    "weather_planning_note",
    "marketplace_browse_comparison",
    "shipment_status_summary"
  ].forEach((artifactType, index) => {
    const artifact = artifacts.createAutonomyWorkflowArtifact({
      artifactType,
      createdFromWorkflowId: "aut-workflow-fixture",
      sourceRefs,
      index
    });
    assertSafeArtifact(artifact, artifactType);
    assert.equal(artifact.artifactType, artifactType, `${artifactType} must round-trip artifact type.`);
    assert.equal(artifact.sourceRefs[0].sourceId, "extension-1", `${artifactType} must preserve source refs.`);
  });
}

function assertDraftAndScriptBoundaries() {
  const message = artifacts.createAutonomyWorkflowArtifact({ artifactType: "message_draft_text_only" });
  const email = artifacts.createAutonomyWorkflowArtifact({ artifactType: "email_draft_text_only" });
  const call = artifacts.createAutonomyWorkflowArtifact({ artifactType: "call_script_text_only" });

  assertSafeArtifact(message, "message draft");
  assertSafeArtifact(email, "email draft");
  assertSafeArtifact(call, "call script");
  assert(String(message.content).includes("did not send"), "Message draft must say nothing was sent.");
  assert(String(email.content).includes("did not send"), "Email draft must say nothing was sent.");
  assert(JSON.stringify(call.content).includes("did not place a call"), "Call script must say Nexus did not call.");
}

function assertPlanAndSessionIntegration() {
  const plan = planner.buildAutonomyWorkflowPlan("Help me find agriculture training near Stockton.");
  const builtFromPlan = artifacts.createAutonomyWorkflowArtifacts(plan, [{ sourceId: "training-1", title: "Training source" }]);
  assert(builtFromPlan.length >= 1, "Plan must produce artifacts.");
  builtFromPlan.forEach((artifact, index) => {
    assertSafeArtifact(artifact, `plan artifact ${index}`);
    assert.equal(artifact.createdFromWorkflowId, plan.workflowId, "Plan artifacts must preserve workflow id.");
  });

  const state = session.createAutonomyWorkflowSession(plan, { now: 1000 });
  const compared = session.applyAutonomyWorkflowCommand(state, "compare the top two", { now: 2000 });
  const builtFromState = artifacts.createAutonomyWorkflowArtifacts(compared.state);
  assert(builtFromState.some(artifact => artifact.artifactType === "comparison_table"), "Session artifacts must include requested comparison.");
  builtFromState.forEach((artifact, index) => assertSafeArtifact(artifact, `session artifact ${index}`));
}

function assertStaticSafety() {
  const moduleSource = read("server", "nexus-autonomy-workflow-artifacts.js");
  const qaSource = read("scripts", "nexus-aut5-workflow-artifacts-qa.js");
  const appSource = read("public", "app.js");
  const indexSource = read("public", "index.html");
  const serverSource = read("server.js");
  const pkg = JSON.parse(read("package.json"));
  const suite = read("scripts", "qa-suite.js");

  [
    "fetch(",
    "requestWithTimeout(",
    "localStorage",
    "sessionStorage",
    "navigator.geolocation",
    "getCurrentPosition",
    "window.open",
    "location.href",
    "child_process",
    "fs.writeFile",
    "writeFileSync",
    "openWorkflowModal",
    "createOutboundCallWorkflow"
  ].forEach(term => assert(!moduleSource.includes(term), `AUT5 artifacts must not introduce unsafe behavior: ${term}`));

  [
    "nexus-autonomy-workflow-artifacts.js",
    "createAutonomyWorkflowArtifact",
    "createAutonomyWorkflowArtifacts"
  ].forEach(term => {
    assert(!appSource.includes(term), `AUT5 must not wire artifacts into public/app.js: ${term}`);
    assert(!indexSource.includes(term), `AUT5 must not load artifacts in public/index.html: ${term}`);
    assert(!serverSource.includes(term), `AUT5 must not wire artifacts into server.js: ${term}`);
  });

  assert(qaSource.includes("message_draft_text_only"), "AUT5 QA must cover message draft text only.");
  assert(qaSource.includes("call_script_text_only"), "AUT5 QA must cover call script text only.");
  assert.equal(
    pkg.scripts["qa:nexus-aut5-workflow-artifacts"],
    "node scripts/nexus-aut5-workflow-artifacts-qa.js",
    "AUT5 package alias must exist."
  );
  assert(suite.includes("scripts/nexus-aut5-workflow-artifacts-qa.js"), "AUT5 QA must be wired into local-safe suites.");
}

function runAut5WorkflowArtifactsQa() {
  assertArtifactTypes();
  assertDraftAndScriptBoundaries();
  assertPlanAndSessionIntegration();
  assertStaticSafety();
  console.log(JSON.stringify({
    artifactTypesCovered: artifacts.ARTIFACT_TYPES.length,
    sourceRefsPreserved: true,
    draftsTextOnly: true,
    callScriptsTextOnly: true,
    noExecutableMetadata: true,
    runtimeWiring: "none"
  }, null, 2));
  console.log("[nexus-aut5-workflow-artifacts-qa] passed");
}

if (require.main === module) {
  try {
    runAut5WorkflowArtifactsQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runAut5WorkflowArtifactsQa
});
