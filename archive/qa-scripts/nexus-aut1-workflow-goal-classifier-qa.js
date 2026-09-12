const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const classifier = require("../server/nexus-autonomy-workflow-goal-classifier.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function assertClassificationShape(result, label) {
  [
    "workflowType",
    "userGoal",
    "riskTier",
    "allowed",
    "blockedReason",
    "requiresProvider",
    "requiresUserInput",
    "requiresConfirmation",
    "executionProhibited",
    "safeEntryPoint",
    "blockedActions"
  ].forEach(field => assert(Object.prototype.hasOwnProperty.call(result, field), `${label} must include ${field}.`));

  assert.equal(result.executionProhibited, true, `${label} must prohibit execution.`);
  assert(Array.isArray(result.blockedActions), `${label} must include blockedActions array.`);
  assert(result.blockedActions.length >= 5, `${label} must enumerate blocked actions.`);
  assert.equal(classifier.isSafeAutonomyWorkflowClassification(result), true, `${label} must pass safety predicate.`);
}

function assertAllowed(prompt, workflowType, options = {}) {
  const result = classifier.classifyAutonomyWorkflowGoal(prompt);
  assertClassificationShape(result, prompt);
  assert.equal(result.workflowType, workflowType, `${prompt} must classify as ${workflowType}.`);
  assert.equal(result.allowed, true, `${prompt} must be allowed as preview-only workflow.`);
  assert.equal(result.riskTier, "low", `${prompt} must stay low risk.`);
  assert.equal(result.requiresConfirmation, false, `${prompt} must not create an execution confirmation.`);
  assert.equal(result.executionProhibited, true, `${prompt} must remain non-executing.`);
  assert.notEqual(result.safeEntryPoint, "blocked-workflow-boundary", `${prompt} must have a safe preview entrypoint.`);
  if (Object.prototype.hasOwnProperty.call(options, "requiresProvider")) {
    assert.equal(result.requiresProvider, options.requiresProvider, `${prompt} requiresProvider mismatch.`);
  }
  if (Object.prototype.hasOwnProperty.call(options, "requiresUserInput")) {
    assert.equal(result.requiresUserInput, options.requiresUserInput, `${prompt} requiresUserInput mismatch.`);
  }
  return result;
}

function assertBlocked(prompt, workflowType) {
  const result = classifier.classifyAutonomyWorkflowGoal(prompt);
  assertClassificationShape(result, prompt);
  assert.equal(result.workflowType, workflowType, `${prompt} must classify as ${workflowType}.`);
  assert.equal(result.allowed, false, `${prompt} must be blocked.`);
  assert.notEqual(result.blockedReason, "", `${prompt} must explain the block.`);
  assert.equal(result.requiresConfirmation, true, `${prompt} must require a future explicit gate.`);
  assert.equal(result.executionProhibited, true, `${prompt} must remain non-executing.`);
  assert.equal(result.safeEntryPoint, "blocked-workflow-boundary", `${prompt} must stay in blocked boundary.`);
  assert(result.blockedActions.includes(workflowType), `${prompt} must list blocked workflow type.`);
  return result;
}

function assertTaxonomy() {
  [
    "job_search_workflow",
    "agriculture_training_workflow",
    "crop_issue_guidance_workflow",
    "workforce_program_comparison_workflow",
    "weather_planning_workflow",
    "agriculture_news_awareness_workflow",
    "media_training_discovery_workflow",
    "marketplace_browse_workflow",
    "shipment_status_workflow",
    "general_assistant_plan_workflow"
  ].forEach(type => assert(classifier.SUPPORTED_WORKFLOW_TYPES.includes(type), `Supported taxonomy must include ${type}.`));

  [
    "call_provider",
    "send_message",
    "apply_submit",
    "buy_pay_purchase",
    "book_schedule",
    "dispatch_help",
    "send_location",
    "emergency_execution",
    "medical_pharmacy_execution",
    "account_login_or_creation"
  ].forEach(type => {
    assert(classifier.BLOCKED_WORKFLOW_TYPES.includes(type), `Blocked taxonomy must include ${type}.`);
    assert(classifier.BLOCKED_ACTIONS.includes(type), `Blocked actions must include ${type}.`);
  });
}

function assertPromptCoverage() {
  assertAllowed("Help me get a farm job near Stockton.", "job_search_workflow", { requiresProvider: true });
  assertAllowed("Help me prepare for agriculture training.", "agriculture_training_workflow", { requiresProvider: true });
  assertAllowed("Help me solve this crop issue.", "crop_issue_guidance_workflow", { requiresProvider: true });
  assertAllowed("Compare workforce programs.", "workforce_program_comparison_workflow", { requiresProvider: true });
  assertAllowed("Help me plan around the weather.", "weather_planning_workflow", { requiresProvider: true });
  assertAllowed("Find agriculture training videos.", "media_training_discovery_workflow", { requiresProvider: true });
  assertAllowed("Browse AgriTrade options.", "marketplace_browse_workflow", { requiresProvider: true });
  assertAllowed("Track this shipment TEST123.", "shipment_status_workflow", { requiresProvider: true, requiresUserInput: false });
  assertAllowed("Track this shipment.", "shipment_status_workflow", { requiresProvider: true, requiresUserInput: true });
  assertAllowed("Help me organize my next steps.", "general_assistant_plan_workflow", { requiresProvider: false });

  assertBlocked("Apply to this job for me.", "apply_submit");
  assertBlocked("Call this provider.", "call_provider");
  assertBlocked("Buy fertilizer.", "buy_pay_purchase");
  assertBlocked("Dispatch help.", "emergency_execution");
  assertBlocked("Send my location.", "send_location");
  assertBlocked("This is an emergency.", "emergency_execution");
  assertBlocked("Message the seller on WhatsApp.", "send_message");
  assertBlocked("Schedule an appointment.", "book_schedule");
  assertBlocked("Refill my prescription.", "medical_pharmacy_execution");
  assertBlocked("Log into my account.", "account_login_or_creation");
}

function assertStaticSafety() {
  const moduleSource = read("server", "nexus-autonomy-workflow-goal-classifier.js");
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
    "providerHandoff"
  ].forEach(term => assert(!moduleSource.includes(term), `AUT1 classifier must not introduce unsafe behavior: ${term}`));

  [
    "nexus-autonomy-workflow-goal-classifier.js",
    "classifyAutonomyWorkflowGoal"
  ].forEach(term => {
    assert(!appSource.includes(term), `AUT1 must not wire classifier into public/app.js: ${term}`);
    assert(!indexSource.includes(term), `AUT1 must not load classifier in index.html: ${term}`);
    assert(!serverSource.includes(term), `AUT1 must not wire classifier into server.js: ${term}`);
  });

  assert.equal(
    pkg.scripts["qa:nexus-aut1-workflow-goal-classifier"],
    "node scripts/nexus-aut1-workflow-goal-classifier-qa.js",
    "AUT1 package alias must exist."
  );
  assert(suite.includes("scripts/nexus-aut1-workflow-goal-classifier-qa.js"), "AUT1 QA must be wired into local-safe suites.");
}

function runAut1WorkflowGoalClassifierQa() {
  assertTaxonomy();
  assertPromptCoverage();
  assertStaticSafety();
  console.log(JSON.stringify({
    supportedWorkflowTypes: classifier.SUPPORTED_WORKFLOW_TYPES.length,
    blockedWorkflowTypes: classifier.BLOCKED_WORKFLOW_TYPES.length,
    allowedPromptsCovered: 10,
    blockedPromptsCovered: 10,
    executionProhibited: true,
    runtimeWiring: "none"
  }, null, 2));
  console.log("[nexus-aut1-workflow-goal-classifier-qa] passed");
}

if (require.main === module) {
  try {
    runAut1WorkflowGoalClassifierQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runAut1WorkflowGoalClassifierQa
});
