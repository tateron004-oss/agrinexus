const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const planner = require("../server/nexus-autonomy-workflow-planner.js");
const runner = require("../server/nexus-autonomy-workflow-step-runner.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function assertStepResult(result, label) {
  [
    "stepId",
    "stepType",
    "status",
    "providerStatus",
    "resultSummary",
    "citations",
    "artifacts",
    "blockedActions",
    "safeNextSteps",
    "noExecutionAuthorized"
  ].forEach(field => assert(Object.prototype.hasOwnProperty.call(result, field), `${label} must include ${field}.`));

  assert.equal(runner.isSafeAutonomyWorkflowStepResult(result), true, `${label} must satisfy safe step-result predicate.`);
  assert.equal(result.noExecutionAuthorized, true, `${label} must not authorize execution.`);
  assert(result.blockedActions.includes("call_provider"), `${label} must preserve call block.`);
  assert(result.blockedActions.includes("buy_pay_purchase"), `${label} must preserve purchase block.`);
}

function assertAut3StepRunner() {
  const jobPlan = planner.buildAutonomyWorkflowPlan("Help me get a farm job near Stockton.");
  const providerLookup = runner.runNextAutonomyWorkflowStep(jobPlan, {
    providerMode: "available",
    citations: [{ title: "Example workforce source", sourceType: "fixture", freshness: "current" }]
  });
  assertStepResult(providerLookup, "provider lookup step");
  assert.equal(providerLookup.status, "completed", "Provider lookup step must complete safely.");
  assert.equal(providerLookup.providerStatus, "read_only_ready", "Provider lookup step must be read-only ready.");
  assert(providerLookup.resultSummary.includes("read-only"), "Provider lookup summary must be read-only.");
  assert.equal(providerLookup.citations.length, 1, "Provider lookup should preserve citations.");

  const comparison = runner.runAutonomyWorkflowStep({
    stepId: "compare-step",
    stepType: "compare_options",
    title: "Compare top options."
  });
  assertStepResult(comparison, "comparison step");
  assert.equal(comparison.artifacts[0].artifactType, "comparison_table", "Comparison step must create comparison artifact.");

  const checklist = runner.runAutonomyWorkflowStep({
    stepId: "checklist-step",
    stepType: "build_checklist",
    title: "Build application prep checklist."
  }, { userGoal: "farm job" });
  assertStepResult(checklist, "checklist step");
  assert.equal(checklist.artifacts[0].artifactType, "checklist", "Checklist step must create checklist artifact.");

  const draft = runner.runAutonomyWorkflowStep({
    stepId: "draft-step",
    stepType: "draft_questions",
    title: "Draft questions."
  });
  assertStepResult(draft, "draft step");
  assert.equal(draft.artifacts[0].artifactType, "draft_text", "Draft step must create draft text artifact.");
  assert(draft.artifacts[0].content.includes("nothing was sent"), "Draft artifact must say nothing was sent.");

  const blocked = runner.runAutonomyWorkflowStep({
    stepId: "call-step",
    stepType: "call",
    title: "Call provider."
  });
  assertStepResult(blocked, "blocked action step");
  assert.equal(blocked.status, "blocked", "Blocked action step must be blocked.");
  assert.equal(blocked.providerStatus, "not_called", "Blocked action step must not call providers.");

  const unavailable = runner.runAutonomyWorkflowStep({
    stepId: "source-step",
    stepType: "review_sources",
    title: "Review read-only crop guidance."
  }, { providerMode: "unavailable" });
  assertStepResult(unavailable, "provider unavailable step");
  assert.equal(unavailable.status, "safe_fallback", "Unavailable provider must produce safe fallback.");
  assert.equal(unavailable.providerStatus, "unavailable", "Provider unavailable status must be explicit.");
  assert(unavailable.resultSummary.includes("did not retry unsafely"), "Provider unavailable fallback must avoid unsafe retry.");

  const error = runner.runAutonomyWorkflowStep({
    stepId: "weather-step",
    stepType: "review_weather_context",
    title: "Review read-only weather context."
  }, { providerMode: "error" });
  assertStepResult(error, "provider error step");
  assert.equal(error.status, "safe_fallback", "Provider error must produce safe fallback.");
  assert.equal(error.providerStatus, "error", "Provider error status must be explicit.");
  assert(error.resultSummary.includes("No execution fallback"), "Provider error must not trigger execution fallback.");

  const built = runner.buildAndRunFirstAutonomyWorkflowStep("Help me prepare for agriculture training.");
  assert(planner.isSafeAutonomyWorkflowPlan(built.plan), "Build-and-run helper must include safe plan.");
  assertStepResult(built.stepResult, "build and run first step");
}

function assertStaticSafety() {
  const moduleSource = read("server", "nexus-autonomy-workflow-step-runner.js");
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
    "createOutboundCallWorkflow",
    "openWorkflowModal",
    "pendingAction"
  ].forEach(term => assert(!moduleSource.includes(term), `AUT3 step runner must not introduce unsafe behavior: ${term}`));

  [
    "nexus-autonomy-workflow-step-runner.js",
    "runAutonomyWorkflowStep",
    "runNextAutonomyWorkflowStep"
  ].forEach(term => {
    assert(!appSource.includes(term), `AUT3 must not wire runner into public/app.js: ${term}`);
    assert(!indexSource.includes(term), `AUT3 must not load runner in index.html: ${term}`);
    assert(!serverSource.includes(term), `AUT3 must not wire runner into server.js: ${term}`);
  });

  assert.equal(
    pkg.scripts["qa:nexus-aut3-workflow-step-runner"],
    "node scripts/nexus-aut3-workflow-step-runner-qa.js",
    "AUT3 package alias must exist."
  );
  assert(suite.includes("scripts/nexus-aut3-workflow-step-runner-qa.js"), "AUT3 QA must be wired into local-safe suites.");
}

function runAut3WorkflowStepRunnerQa() {
  assertAut3StepRunner();
  assertStaticSafety();
  console.log(JSON.stringify({
    providerLookupStepSafe: true,
    comparisonStepSafe: true,
    checklistStepSafe: true,
    draftStepSafe: true,
    blockedActionStepBlocked: true,
    providerUnavailableSafe: true,
    providerErrorSafe: true,
    noExecutionAuthorized: true,
    runtimeWiring: "none"
  }, null, 2));
  console.log("[nexus-aut3-workflow-step-runner-qa] passed");
}

if (require.main === module) {
  try {
    runAut3WorkflowStepRunnerQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runAut3WorkflowStepRunnerQa
});
