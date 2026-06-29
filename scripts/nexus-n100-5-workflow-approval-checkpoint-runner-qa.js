const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const runner = require("../server/nexus-n100-workflow-approval-checkpoint-runner.js");
const deep = require("../server/nexus-n100-deep-workflow-engine.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticSafety() {
  const source = read("server", "nexus-n100-workflow-approval-checkpoint-runner.js");
  const doc = read("docs", "NEXUS_N100_5_WORKFLOW_APPROVAL_CHECKPOINT_RUNNER.md");
  const app = read("public", "app.js");
  const index = read("public", "index.html");
  const server = read("server.js");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");

  assert(exists("server", "nexus-n100-workflow-approval-checkpoint-runner.js"), "N100-5 runner module must exist.");
  assert(exists("docs", "NEXUS_N100_5_WORKFLOW_APPROVAL_CHECKPOINT_RUNNER.md"), "N100-5 doc must exist.");
  assert(exists("scripts", "nexus-n100-5-workflow-approval-checkpoint-runner-qa.js"), "N100-5 QA must exist.");

  [
    "ALLOWED_AUTOMATIC_STEP_TYPES",
    "APPROVAL_REQUIRED_ACTIONS",
    "HIGH_RISK_BLOCKED_WITHOUT_FUTURE_GATE",
    "runN100WorkflowUntilCheckpoint",
    "reviewN100ApprovalCheckpoint",
    "finalExecutionGateRequired",
    "executionAuthority: \"none\""
  ].forEach(term => assert(source.includes(term), `N100-5 module must include ${term}.`));

  [
    "Allowed automatic workflow steps",
    "Approval checkpoint required",
    "Blocked without future high-risk gate",
    "no hidden execution"
  ].forEach(term => assert(doc.includes(term), `N100-5 doc must include ${term}.`));

  [
    "nexus-n100-workflow-approval-checkpoint-runner",
    "runN100WorkflowUntilCheckpoint",
    "reviewN100ApprovalCheckpoint"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load N100-5 runtime term: ${term}.`);
    assert(!index.includes(term), `public/index.html must not load N100-5 runtime term: ${term}.`);
    assert(!server.includes(term), `server.js must not load N100-5 runtime term: ${term}.`);
  });

  [
    "fetch(",
    "navigator.geolocation",
    "getCurrentPosition",
    "watchPosition",
    "getUserMedia",
    "window.open",
    "location.href",
    "localStorage.setItem",
    "sessionStorage.setItem",
    "writeFileSync",
    "ACTION_CALL",
    "providerHandoffAllowed: true",
    "executionAuthority: \"provider\""
  ].forEach(term => assert(!source.includes(term), `N100-5 module must not introduce unsafe behavior: ${term}.`));

  assert.equal(
    pkg.scripts["qa:nexus-n100-5-workflow-approval-checkpoint-runner"],
    "node scripts/nexus-n100-5-workflow-approval-checkpoint-runner-qa.js",
    "N100-5 package QA alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-n100-5-workflow-approval-checkpoint-runner-qa.js"), "N100-5 QA must be wired into local-safe suites.");
}

function assertAllowedAndApprovalLists() {
  [
    "provider_lookup",
    "source_lookup",
    "branch",
    "compare_and_recommend",
    "prepare_final_package",
    "complete"
  ].forEach(type => assert(runner.ALLOWED_AUTOMATIC_STEP_TYPES.includes(type), `${type} must be allowed as read-only auto step.`));

  [
    "saving_persistent_data",
    "exporting_file",
    "creating_local_task_or_reminder",
    "opening_internal_app_section",
    "using_saved_preference",
    "connector_or_api_write",
    "calendar_action",
    "email_draft_creation",
    "provider_handoff_preparation"
  ].forEach(action => assert(runner.APPROVAL_REQUIRED_ACTIONS.includes(action), `${action} must require approval.`));

  [
    "payments",
    "purchases",
    "external_booking",
    "application_submission",
    "emergency_dispatch",
    "medical_or_pharmacy_execution"
  ].forEach(action => assert(runner.HIGH_RISK_BLOCKED_WITHOUT_FUTURE_GATE.includes(action), `${action} must remain blocked.`));
}

function assertWorkflowProgressAndCheckpoint() {
  let run = runner.createN100WorkflowRunner({ prompt: "Help me get a farm job." });
  assert.equal(runner.isSafeN100WorkflowRunner(run), true, "Initial runner must be safe.");
  assert.equal(run.status, "waiting_for_user", "Runner should wait for user answer first.");

  run = runner.answerN100WorkflowClarification(run, "I am a beginner in Stockton and want farm work.");
  assert.equal(runner.isSafeN100WorkflowRunner(run), true, "Answered runner must stay safe.");
  assert.equal(run.status, "ready", "Answered runner should be ready for read-only progression.");

  run = runner.runN100WorkflowUntilCheckpoint(run);
  assert.equal(runner.isSafeN100WorkflowRunner(run), true, "Auto-progressed runner must stay safe.");
  assert.equal(run.status, "waiting_for_approval_checkpoint", "Runner must stop at approval checkpoint.");
  assert(run.automaticStepLog.length >= 4, "Runner should complete several read-only steps before checkpoint.");
  assert.equal(run.workflow.canExecute, false, "Workflow cannot execute at checkpoint.");
  assert.equal(run.executionAuthority, "none", "Runner authority must remain none.");

  run.automaticStepLog.forEach(item => {
    assert.equal(item.canExecute, false, `${item.stepId} auto step must not execute.`);
    assert.equal(item.executionAuthority, "none", `${item.stepId} auto step authority must remain none.`);
  });
}

function assertApprovalCancelAndCompletion() {
  let run = runner.createN100WorkflowRunner({ prompt: "Help me solve this crop issue." });
  run = runner.answerN100WorkflowClarification(run, "Tomatoes have spots and it might be disease.");
  run = runner.runN100WorkflowUntilCheckpoint(run);
  assert.equal(run.status, "waiting_for_approval_checkpoint", "Crop workflow should stop at checkpoint.");

  const cancelled = runner.reviewN100ApprovalCheckpoint(run, { decision: "cancel" });
  assert.equal(cancelled.status, "cancelled", "User can cancel at checkpoint.");
  assert.equal(runner.isSafeN100WorkflowRunner(cancelled), true, "Cancelled runner must stay safe.");

  run = runner.createN100WorkflowRunner({ prompt: "Help me solve this crop issue." });
  run = runner.answerN100WorkflowClarification(run, "Tomatoes have spots and it might be disease.");
  run = runner.runN100WorkflowUntilCheckpoint(run);
  run = runner.reviewN100ApprovalCheckpoint(run, { decision: "approve" });
  assert.equal(runner.isSafeN100WorkflowRunner(run), true, "Approved checkpoint runner must stay safe.");
  assert.equal(run.approvalLog[0].decision, "approved_for_review_only", "Approval must be review-only.");
  assert.equal(run.approvalLog[0].finalExecutionGateRequired, true, "Approval still requires final execution gate.");

  run = runner.runN100WorkflowUntilCheckpoint(run);
  assert.equal(run.status, "completed_preview_only", "Runner should complete preview-only after checkpoint review.");
  assert.equal(run.workflow.finalPackage.canExecute, false, "Final package must remain non-executing.");
}

function assertHighRiskBlocked() {
  let run = runner.createN100WorkflowRunner({ prompt: "Help me browse AgriTrade safely." });
  run = runner.blockN100HighRiskWorkflowAction(run, "payment", "Payments require a future high-risk gate.");
  assert.equal(run.status, "blocked_high_risk_action", "High-risk action should block.");
  assert.equal(runner.isSafeN100WorkflowRunner(run), true, "Blocked high-risk runner must remain safe.");
  assert.equal(run.blockedLog[0].requiresFutureHighRiskGate, true, "Blocked action must require future gate.");
  assert.equal(run.blockedLog[0].canExecute, false, "Blocked action must not execute.");
}

function assertDeepWorkflowCompatibility() {
  const workflow = deep.createN100DeepWorkflow({ prompt: "Help me compare training programs." });
  let run = runner.createN100WorkflowRunner({ workflow });
  run = runner.answerN100WorkflowClarification(run, "Compare schedule and credential value.");
  run = runner.runN100WorkflowUntilCheckpoint(run);
  assert.equal(runner.isSafeN100WorkflowRunner(run), true, "Runner must preserve N100-4 workflow safety.");
  assert.equal(deep.isSafeN100DeepWorkflowState(run.workflow), true, "Underlying deep workflow remains safe.");
}

function runN100WorkflowApprovalCheckpointRunnerQa() {
  assertStaticSafety();
  assertAllowedAndApprovalLists();
  assertWorkflowProgressAndCheckpoint();
  assertApprovalCancelAndCompletion();
  assertHighRiskBlocked();
  assertDeepWorkflowCompatibility();

  console.log(JSON.stringify({
    phase: "N100-5",
    readOnlyAutomaticSteps: runner.ALLOWED_AUTOMATIC_STEP_TYPES,
    approvalRequiredActions: runner.APPROVAL_REQUIRED_ACTIONS,
    highRiskBlocked: runner.HIGH_RISK_BLOCKED_WITHOUT_FUTURE_GATE,
    standardUserRuntimeActivated: false,
    noHiddenExecution: true
  }, null, 2));
  console.log("[nexus-n100-5-workflow-approval-checkpoint-runner-qa] passed");
}

if (require.main === module) {
  try {
    runN100WorkflowApprovalCheckpointRunnerQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runN100WorkflowApprovalCheckpointRunnerQa
});
