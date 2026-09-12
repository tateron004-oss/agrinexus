const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const planner = require("../server/nexus-autonomy-workflow-planner.js");
const session = require("../server/nexus-autonomy-workflow-session-state.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function assertSafeState(state, label) {
  assert.equal(session.isSafeAutonomyWorkflowSessionState(state), true, `${label} must be safe session state.`);
  assert.equal(state.sessionOnly, true, `${label} must be session-only.`);
  assert.equal(state.executionAuthority, false, `${label} must not carry execution authority.`);
  assert.equal(state.noExecutionAuthorized, true, `${label} must not authorize execution.`);
  assert(!/phone|email|password|token|secret/i.test(JSON.stringify(state)), `${label} must not expose sensitive persistence fields.`);
}

function assertCommand(result, expectedStatus, label) {
  assert.equal(result.status, expectedStatus, `${label} status mismatch.`);
  assert.equal(result.noExecutionAuthorized, true, `${label} must not authorize execution.`);
  assertSafeState(result.state, `${label} state`);
}

function assertAut4SessionState() {
  const plan = planner.buildAutonomyWorkflowPlan("Help me get a farm job near Stockton.");
  const state = session.createAutonomyWorkflowSession(plan, { now: 1000 });
  assertSafeState(state, "created workflow state");
  assert.equal(state.activeWorkflowId, plan.workflowId, "State must track active workflow id.");
  assert.equal(state.workflowType, "job_search_workflow", "State must track workflow type.");
  assert.equal(state.currentStepIndex, 0, "State must start at first step.");
  assert(state.pendingSafeArtifacts.includes("application_prep_checklist"), "State must carry pending safe artifacts.");

  const continued = session.applyAutonomyWorkflowCommand(state, "continue", { now: 2000 });
  assertCommand(continued, "continued", "continue command");
  assert.equal(continued.state.currentStepIndex, 1, "Continue must advance current step.");
  assert(continued.state.completedSteps.length >= 1, "Continue must record completed step.");

  const selected = session.applyAutonomyWorkflowCommand(continued.state, "use the second one", { now: 3000 });
  assertCommand(selected, "selected_item", "selected item command");
  assert.equal(selected.state.selectedItem.index, 1, "Selected item reference must store second option index.");

  const compared = session.applyAutonomyWorkflowCommand(selected.state, "compare the top two", { now: 4000 });
  assertCommand(compared, "artifact_requested", "compare command");
  assert(compared.state.pendingSafeArtifacts.includes("comparison_table"), "Compare command must request comparison artifact.");

  const checklist = session.applyAutonomyWorkflowCommand(compared.state, "turn that into a checklist", { now: 5000 });
  assertCommand(checklist, "artifact_requested", "checklist command");
  assert(checklist.state.pendingSafeArtifacts.includes("checklist"), "Checklist command must request checklist artifact.");

  const draft = session.applyAutonomyWorkflowCommand(checklist.state, "draft questions", { now: 6000 });
  assertCommand(draft, "artifact_requested", "draft command");
  assert(draft.response.includes("Nothing was sent"), "Draft command must make no-send boundary visible.");

  const back = session.applyAutonomyWorkflowCommand(draft.state, "go back", { now: 7000 });
  assertCommand(back, "moved_back", "go back command");
  assert.equal(back.state.currentStepIndex, 0, "Go back must reduce current step safely.");

  const restarted = session.applyAutonomyWorkflowCommand(back.state, "restart", { now: 8000 });
  assertCommand(restarted, "restarted", "restart command");
  assert.equal(restarted.state.currentStepIndex, 0, "Restart must return to first step.");
  assert.equal(restarted.state.completedSteps.length, 0, "Restart must clear completed steps.");

  const cancelled = session.applyAutonomyWorkflowCommand(restarted.state, "cancel", { now: 9000 });
  assertCommand(cancelled, "cancelled", "cancel command");
  assert.equal(cancelled.state.status, "cancelled", "Cancel must mark state cancelled.");

  const missing = session.applyAutonomyWorkflowCommand(null, "continue", { now: 10000 });
  assert.equal(missing.status, "missing_context", "Missing context must be safe.");
  assert.equal(missing.noExecutionAuthorized, true, "Missing context must not authorize execution.");

  const expired = session.applyAutonomyWorkflowCommand(state, "next step", { now: Date.parse(state.expiresAt) + 1 });
  assertCommand(expired, "expired", "expired context command");
  assert.equal(expired.state.status, "expired", "Expired context must mark state expired.");

  [
    "apply now",
    "send it",
    "call them",
    "buy it",
    "book it",
    "dispatch",
    "share my location"
  ].forEach(command => {
    const blocked = session.applyAutonomyWorkflowCommand(state, command, { now: 11000 });
    assertCommand(blocked, "blocked", `blocked command ${command}`);
    assert.equal(blocked.blocked, true, `${command} must be blocked.`);
    assert(blocked.response.includes("preview-only"), `${command} must explain preview-only mode.`);
  });
}

function assertStaticSafety() {
  const moduleSource = read("server", "nexus-autonomy-workflow-session-state.js");
  const appSource = read("public", "app.js");
  const indexSource = read("public", "index.html");
  const serverSource = read("server.js");
  const pkg = JSON.parse(read("package.json"));
  const suite = read("scripts", "qa-suite.js");

  [
    "fetch(",
    "requestWithTimeout(",
    "http://",
    "https://",
    "localStorage",
    "sessionStorage",
    "navigator.geolocation",
    "getCurrentPosition",
    "window.open",
    "location.href",
    "child_process",
    "fs.writeFile",
    "writeFileSync",
    "createOutboundCallWorkflow",
    "openWorkflowModal"
  ].forEach(term => assert(!moduleSource.includes(term), `AUT4 session state must not introduce unsafe behavior: ${term}`));

  [
    "nexus-autonomy-workflow-session-state.js",
    "createAutonomyWorkflowSession",
    "applyAutonomyWorkflowCommand"
  ].forEach(term => {
    assert(!appSource.includes(term), `AUT4 must not wire session state into public/app.js: ${term}`);
    assert(!indexSource.includes(term), `AUT4 must not load session state in index.html: ${term}`);
    assert(!serverSource.includes(term), `AUT4 must not wire session state into server.js: ${term}`);
  });

  assert.equal(
    pkg.scripts["qa:nexus-aut4-workflow-session-state"],
    "node scripts/nexus-aut4-workflow-session-state-qa.js",
    "AUT4 package alias must exist."
  );
  assert(suite.includes("scripts/nexus-aut4-workflow-session-state-qa.js"), "AUT4 QA must be wired into local-safe suites.");
}

function runAut4WorkflowSessionStateQa() {
  assertAut4SessionState();
  assertStaticSafety();
  console.log(JSON.stringify({
    workflowStateCreated: true,
    workflowContinuesSafely: true,
    selectedItemReferenceWorks: true,
    restartWorks: true,
    cancelWorks: true,
    missingExpiredContextSafe: true,
    highRiskContinuationBlocked: true,
    noSensitivePersistence: true,
    runtimeWiring: "none"
  }, null, 2));
  console.log("[nexus-aut4-workflow-session-state-qa] passed");
}

if (require.main === module) {
  try {
    runAut4WorkflowSessionStateQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runAut4WorkflowSessionStateQa
});
