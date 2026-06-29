const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const deep = require("../server/nexus-n100-deep-workflow-engine.js");
const memory = require("../server/nexus-n100-memory-personalization-stack.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticSafety() {
  const moduleSource = read("server", "nexus-n100-deep-workflow-engine.js");
  const doc = read("docs", "NEXUS_N100_4_DEEP_WORKFLOW_ENGINE.md");
  const app = read("public", "app.js");
  const index = read("public", "index.html");
  const server = read("server.js");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");

  assert(exists("server", "nexus-n100-deep-workflow-engine.js"), "N100-4 deep workflow module must exist.");
  assert(exists("docs", "NEXUS_N100_4_DEEP_WORKFLOW_ENGINE.md"), "N100-4 doc must exist.");
  assert(exists("scripts", "nexus-n100-4-deep-workflow-engine-qa.js"), "N100-4 QA must exist.");

  [
    "DEEP_WORKFLOW_TEMPLATES",
    "wait_for_user_answer",
    "compare_and_recommend",
    "prepare_final_package",
    "approval_checkpoint",
    "safeRetryAfterN100ProviderFailure",
    "finalExecutionGateRequired",
    "executionAuthority: \"none\""
  ].forEach(term => assert(moduleSource.includes(term), `N100-4 module must include ${term}.`));

  [
    "multi-provider workflows",
    "branching",
    "approval checkpoints",
    "safe retry",
    "Still blocked"
  ].forEach(term => assert(doc.includes(term), `N100-4 doc must include ${term}.`));

  [
    "nexus-n100-deep-workflow-engine",
    "createN100DeepWorkflow",
    "advanceN100DeepWorkflow"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load N100-4 runtime term: ${term}.`);
    assert(!index.includes(term), `public/index.html must not load N100-4 runtime term: ${term}.`);
    assert(!server.includes(term), `server.js must not load N100-4 runtime term: ${term}.`);
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
  ].forEach(term => assert(!moduleSource.includes(term), `N100-4 module must not introduce unsafe behavior: ${term}.`));

  assert.equal(
    pkg.scripts["qa:nexus-n100-4-deep-workflow-engine"],
    "node scripts/nexus-n100-4-deep-workflow-engine-qa.js",
    "N100-4 package QA alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-n100-4-deep-workflow-engine-qa.js"), "N100-4 QA must be wired into local-safe suites.");
}

function assertTemplateCoverage() {
  const templates = Object.values(deep.DEEP_WORKFLOW_TEMPLATES);
  assert(templates.length >= 7, "N100-4 must include reusable workflow templates.");
  templates.forEach(template => {
    assert(template.providers.length >= 2, `${template.templateId} must be a multi-provider workflow.`);
    assert(template.steps.some(step => step.stepType === "wait_for_user_answer"), `${template.templateId} must wait for user input.`);
    assert(template.steps.some(step => step.stepType === "branch"), `${template.templateId} must include branching.`);
    assert(template.steps.some(step => step.stepType === "compare_and_recommend"), `${template.templateId} must compare/recommend.`);
    assert(template.steps.some(step => step.stepType === "prepare_final_package"), `${template.templateId} must prepare a final package.`);
    assert(template.steps.some(step => step.stepType === "approval_checkpoint"), `${template.templateId} must include approval checkpoint.`);
    assert(Object.keys(template.branches).length >= 2, `${template.templateId} must define branches.`);
  });
}

function assertWorkflowLifecycle() {
  let workflow = deep.createN100DeepWorkflow({
    prompt: "Help me get a farm job.",
    userAllowsResume: true,
    now: Date.UTC(2026, 0, 1)
  });
  assert.equal(deep.isSafeN100DeepWorkflowState(workflow), true, "Initial workflow must be safe.");
  assert.equal(workflow.templateId, "farm_job_pathway");
  assert.equal(workflow.status, "waiting_for_user");
  assert.equal(workflow.resume.resumeAllowed, true, "Resume should be available only when user allows it.");
  assert.match(workflow.resume.resumeToken, /^resume-/, "Allowed resume should get non-persistent token.");

  workflow = deep.advanceN100DeepWorkflow(workflow, {
    type: "user_answer",
    answer: "I am a beginner in Stockton and want farm work."
  });
  assert.equal(deep.isSafeN100DeepWorkflowState(workflow), true, "Answered workflow must stay safe.");
  assert.equal(workflow.selectedBranch, "training_first", "Beginner answer should branch training-first.");
  assert(workflow.progressTimeline.some(item => item.status === "ready"), "Answered workflow should expose ready read-only steps.");

  for (let i = 0; i < 6; i += 1) {
    workflow = deep.advanceN100DeepWorkflow(workflow, { type: "continue" });
    assert.equal(deep.isSafeN100DeepWorkflowState(workflow), true, `Workflow must stay safe after continue ${i + 1}.`);
    if (workflow.status === "waiting_for_approval_checkpoint") break;
  }
  assert.equal(workflow.status, "waiting_for_approval_checkpoint", "Workflow must stop at approval checkpoint.");
  assert.equal(workflow.canExecute, false, "Approval checkpoint must not enable execution.");
  assert.equal(workflow.executionAuthority, "none", "Approval checkpoint authority must remain none.");

  workflow = deep.advanceN100DeepWorkflow(workflow, { type: "approval_checkpoint_reviewed" });
  assert.equal(deep.isSafeN100DeepWorkflowState(workflow), true, "Reviewed checkpoint must stay safe.");
  assert(workflow.steps.some(step => step.stepType === "approval_checkpoint" && step.status === "completed"), "Checkpoint can be reviewed without execution.");

  workflow = deep.advanceN100DeepWorkflow(workflow, { type: "continue" });
  assert.equal(workflow.status, "completed_preview_only", "Workflow should complete as preview-only.");
  assert.equal(workflow.finalPackage.canExecute, false, "Final package must not execute.");
}

function assertFailureCancelRestartAndResume() {
  let workflow = deep.createN100DeepWorkflow({ prompt: "Help me solve this crop issue." });
  assert.equal(workflow.resume.resumeAllowed, false, "Resume must default off.");
  assert.equal(workflow.resume.resumeToken, "", "Resume token must be absent unless user allows resume.");

  workflow = deep.advanceN100DeepWorkflow(workflow, {
    type: "user_answer",
    answer: "It might be a pest on tomatoes."
  });
  workflow = deep.advanceN100DeepWorkflow(workflow, {
    type: "provider_failure",
    provider: "crop-guidance-read-only",
    stepId: "crop-2",
    code: "fixture_provider_error"
  });
  assert.equal(deep.isSafeN100DeepWorkflowState(workflow), true, "Provider fallback workflow must stay safe.");
  assert.equal(workflow.status, "safe_provider_fallback", "Provider failures should use safe fallback.");
  assert.equal(workflow.safetyPosture.noAutoRetry, true, "Provider retry must not happen in the background.");
  assert(workflow.recoveryEvents.length >= 1, "Provider failure should record a safe recovery event.");

  const cancelled = deep.cancelN100DeepWorkflow(workflow, "user stopped");
  assert.equal(cancelled.status, "cancelled", "Cancel should mark workflow cancelled.");
  assert.equal(cancelled.noExecutionAuthorized, true, "Cancelled workflow must not execute.");

  const restarted = deep.restartN100DeepWorkflow(cancelled);
  assert.equal(restarted.status, "waiting_for_user", "Restart should create fresh waiting workflow.");
  assert.equal(restarted.templateId, "crop_issue_support", "Restart should preserve template.");

  const recovered = deep.recoverN100DeepWorkflow(restarted, "stale_source");
  assert.equal(recovered.status, "safe_recovery", "Recover should create safe recovery status.");
  assert.equal(deep.isSafeN100DeepWorkflowState(recovered), true, "Recovered workflow must stay safe.");
}

function assertPromptTemplateMapping() {
  const prompts = new Map([
    ["Help me become an agriculture technician.", "agriculture_technician_pathway"],
    ["Help me prepare for agriculture training.", "agriculture_technician_pathway"],
    ["Help me start a small farm plan.", "small_farm_plan"],
    ["Help me compare training programs.", "program_comparison"],
    ["Help me plan around weather.", "small_farm_plan"],
    ["Help me find agriculture resources near me using typed location.", "typed_location_resource_search"],
    ["Help me browse AgriTrade safely.", "agritrade_safe_browse"]
  ]);
  prompts.forEach((templateId, prompt) => {
    const workflow = deep.createN100DeepWorkflow({ prompt });
    assert.equal(workflow.templateId, templateId, `${prompt} should map to ${templateId}.`);
    assert.equal(deep.isSafeN100DeepWorkflowState(workflow), true, `${prompt} workflow must be safe.`);
  });
}

function assertN100MemoryAdjacency() {
  let mem = memory.createN100MemoryState({ sessionId: "n100-4-session", activeTopic: "farm job workflow" });
  const workflow = deep.createN100DeepWorkflow({ prompt: "Help me get a farm job." });
  mem = memory.rememberN100ConversationEvent(mem, { activeWorkflow: workflow });
  assert.equal(memory.isSafeN100MemoryState(mem), true, "N100-3 memory must remain safe when holding workflow context.");
  assert.equal(mem.executionAuthority, "none", "Memory must not become authoritative from workflow context.");
}

function assertBlockedActions() {
  [
    "application_submission",
    "call",
    "message",
    "provider_contact",
    "payment",
    "purchase",
    "booking",
    "dispatch",
    "send_location"
  ].forEach(action => assert(deep.BLOCKED_REAL_WORLD_ACTIONS.includes(action), `${action} must remain blocked.`));
}

function runN100DeepWorkflowEngineQa() {
  assertStaticSafety();
  assertTemplateCoverage();
  assertWorkflowLifecycle();
  assertFailureCancelRestartAndResume();
  assertPromptTemplateMapping();
  assertN100MemoryAdjacency();
  assertBlockedActions();

  console.log(JSON.stringify({
    phase: "N100-4",
    templates: Object.keys(deep.DEEP_WORKFLOW_TEMPLATES),
    standardUserRuntimeActivated: false,
    multiProvider: true,
    branching: true,
    approvalCheckpoints: true,
    noExecutionAuthorized: true
  }, null, 2));
  console.log("[nexus-n100-4-deep-workflow-engine-qa] passed");
}

if (require.main === module) {
  try {
    runN100DeepWorkflowEngineQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runN100DeepWorkflowEngineQa
});
