const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const planner = require("../server/nexus-autonomy-workflow-planner.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function assertPlanShape(plan, label) {
  [
    "workflowId",
    "workflowType",
    "userGoal",
    "status",
    "steps",
    "currentStepIndex",
    "providerQueries",
    "artifactsToPrepare",
    "safeUserActions",
    "blockedActions",
    "nextBestStep",
    "confidence",
    "noExecutionAuthorized",
    "noProviderContactAuthorized",
    "noLocationPermissionRequested",
    "noBackendActionWritePerformed"
  ].forEach(field => assert(Object.prototype.hasOwnProperty.call(plan, field), `${label} must include ${field}.`));

  assert.equal(planner.isSafeAutonomyWorkflowPlan(plan), true, `${label} must satisfy safe plan predicate.`);
  assert.equal(plan.noExecutionAuthorized, true, `${label} must not authorize execution.`);
  assert.equal(plan.noProviderContactAuthorized, true, `${label} must not authorize provider contact.`);
  assert.equal(plan.noLocationPermissionRequested, true, `${label} must not request location.`);
  assert.equal(plan.noBackendActionWritePerformed, true, `${label} must not write backend actions.`);
  assert(plan.steps.every(step => step.readOnly === true), `${label} steps must be read-only.`);
  assert(plan.steps.every(step => step.executionProhibited === true), `${label} steps must prohibit execution.`);
}

function assertAllowedPlan(prompt, expectedType) {
  const plan = planner.buildAutonomyWorkflowPlan(prompt);
  assertPlanShape(plan, prompt);
  assert.equal(plan.workflowType, expectedType, `${prompt} workflow type mismatch.`);
  assert.equal(plan.status, "planned", `${prompt} must produce a planned workflow.`);
  assert(plan.steps.length >= 3, `${prompt} must include multi-step plan.`);
  assert(plan.providerQueries.length >= 1 || expectedType === "general_assistant_plan_workflow", `${prompt} should include read-only provider/source query intents when relevant.`);
  assert(plan.artifactsToPrepare.length >= 1, `${prompt} must prepare safe artifacts.`);
  assert(plan.safeUserActions.length >= 1, `${prompt} must include safe user actions.`);
  assert(plan.blockedActions.includes("apply_submit"), `${prompt} must preserve blocked actions.`);
  assert(plan.blockedActions.includes("buy_pay_purchase"), `${prompt} must preserve purchase block.`);
  return plan;
}

function assertBlockedPlan(prompt, expectedType) {
  const plan = planner.buildAutonomyWorkflowPlan(prompt);
  assertPlanShape(plan, prompt);
  assert.equal(plan.workflowType, expectedType, `${prompt} blocked workflow type mismatch.`);
  assert.equal(plan.status, "blocked", `${prompt} must produce blocked plan.`);
  assert.equal(plan.providerQueries.length, 0, `${prompt} must not create provider queries.`);
  assert(plan.artifactsToPrepare.includes("safe_alternative_summary"), `${prompt} must only prepare safe alternative summary.`);
  assert(plan.blockedActions.includes(expectedType), `${prompt} must include blocked workflow action.`);
  assert(plan.steps.some(step => step.title.includes("Explain why")), `${prompt} must explain block.`);
}

function assertAut2Plans() {
  const job = assertAllowedPlan("Help me get a farm job near Stockton.", "job_search_workflow");
  assert(job.steps.some(step => step.title === "Search for relevant jobs."), "Job workflow must search relevant jobs.");
  assert(job.steps.some(step => step.title === "Filter for entry-level or user criteria."), "Job workflow must filter criteria.");
  assert(job.steps.some(step => step.title === "Compare top options."), "Job workflow must compare options.");
  assert(job.steps.some(step => step.title === "Identify requirements."), "Job workflow must identify requirements.");
  assert(job.steps.some(step => step.title === "Build application prep checklist."), "Job workflow must build application checklist.");
  assert(job.steps.some(step => step.title.includes("Draft questions")), "Job workflow must draft manual questions.");
  assert(job.steps.some(step => step.description.includes("cannot apply")), "Job workflow must explain blocked apply/contact/send actions.");
  assert(job.artifactsToPrepare.includes("application_prep_checklist"), "Job workflow must prepare application checklist.");

  const training = assertAllowedPlan("Help me prepare for agriculture training.", "agriculture_training_workflow");
  assert(training.steps.some(step => step.title === "Find training resources."), "Training workflow must find resources.");
  assert(training.artifactsToPrepare.includes("training_plan"), "Training workflow must prepare a training plan.");
  assert(training.steps.some(step => step.description.includes("cannot enroll")), "Training workflow must explain blocked enrollment/payment/scheduling.");

  const crop = assertAllowedPlan("Help me solve this crop issue.", "crop_issue_guidance_workflow");
  assert(crop.steps.some(step => step.description.includes("not diagnosing")), "Crop issue workflow must include diagnosis caveat.");
  assert(crop.steps.some(step => step.description.includes("do not request camera or location permission")), "Crop issue workflow must not request camera/location.");
  assert(crop.artifactsToPrepare.includes("farm_issue_observation_checklist"), "Crop issue workflow must prepare observation checklist.");

  const marketplace = assertAllowedPlan("Browse AgriTrade options.", "marketplace_browse_workflow");
  assert(marketplace.steps.some(step => step.description.includes("browse/info mode only")), "Marketplace workflow must remain browse/info only.");
  assert(marketplace.steps.some(step => step.description.includes("cannot buy, sell, pay, checkout")), "Marketplace workflow must explain blocked transactions.");
  assert(marketplace.providerQueries.includes("agritrade-browse-read-only"), "Marketplace workflow must only use read-only browse query.");

  const shipment = assertAllowedPlan("Track this shipment TEST123.", "shipment_status_workflow");
  assert(shipment.steps.some(step => step.title === "Verify explicit tracking/reference text."), "Shipment workflow must verify explicit reference.");
  assert(shipment.steps.some(step => step.description.includes("Do not infer shipment identity")), "Shipment workflow must not infer shipment identity.");

  const missingShipment = planner.buildAutonomyWorkflowPlan("Track this shipment.");
  assertPlanShape(missingShipment, "missing shipment reference");
  assert.equal(missingShipment.workflowType, "shipment_status_workflow", "Missing shipment reference still maps to shipment workflow.");
  assert.equal(missingShipment.status, "needs_input", "Missing shipment reference must require input.");
  assert.equal(missingShipment.providerQueries.length, 0, "Missing shipment reference must not create lookup queries.");
  assert(missingShipment.nextBestStep.includes("explicit tracking"), "Missing shipment reference must ask for explicit tracking/reference text.");

  assertBlockedPlan("Apply to this job for me.", "apply_submit");
  assertBlockedPlan("Call this provider.", "call_provider");
  assertBlockedPlan("Buy fertilizer.", "buy_pay_purchase");
  assertBlockedPlan("Send my location.", "send_location");
  assertBlockedPlan("This is an emergency.", "emergency_execution");
}

function assertStaticSafety() {
  const moduleSource = read("server", "nexus-autonomy-workflow-planner.js");
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
    "pendingAction",
    "providerHandoff",
    "createOutboundCallWorkflow"
  ].forEach(term => assert(!moduleSource.includes(term), `AUT2 planner must not introduce unsafe behavior: ${term}`));

  [
    "nexus-autonomy-workflow-planner.js",
    "buildAutonomyWorkflowPlan"
  ].forEach(term => {
    assert(!appSource.includes(term), `AUT2 must not wire planner into public/app.js: ${term}`);
    assert(!indexSource.includes(term), `AUT2 must not load planner in index.html: ${term}`);
    assert(!serverSource.includes(term), `AUT2 must not wire planner into server.js: ${term}`);
  });

  assert.equal(
    pkg.scripts["qa:nexus-aut2-workflow-planner"],
    "node scripts/nexus-aut2-workflow-planner-qa.js",
    "AUT2 package alias must exist."
  );
  assert(suite.includes("scripts/nexus-aut2-workflow-planner-qa.js"), "AUT2 QA must be wired into local-safe suites.");
}

function runAut2WorkflowPlannerQa() {
  assertAut2Plans();
  assertStaticSafety();
  console.log(JSON.stringify({
    plannedWorkflowsCovered: 5,
    needsInputCovered: true,
    blockedWorkflowsCovered: 5,
    providerQueries: "read-only intent strings",
    noExecutionAuthorized: true,
    runtimeWiring: "none"
  }, null, 2));
  console.log("[nexus-aut2-workflow-planner-qa] passed");
}

if (require.main === module) {
  try {
    runAut2WorkflowPlannerQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runAut2WorkflowPlannerQa
});
