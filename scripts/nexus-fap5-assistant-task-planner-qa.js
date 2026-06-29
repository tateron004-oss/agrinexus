const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const planner = require("../server/nexus-agent-task-planner.js");
const runtime = require("../server/nexus-assistant-runtime-entrypoint.js");
const standardUserAgentExperience = require("../server/nexus-standard-user-agent-experience.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function functionSlice(source, name) {
  const start = source.indexOf(`function ${name}`);
  assert(start >= 0, `${name} must exist.`);
  const next = source.indexOf("\nfunction ", start + 1);
  return source.slice(start, next > start ? next : source.length);
}

function assertPlan(goal, expectedGoalType, expectedQueries) {
  const plan = planner.buildAgentTaskPlan(goal, { surface: "standard-user", previewOnly: true });
  assert.equal(planner.isSafeAgentTaskPlan(plan), true, `${goal} must produce a safe task plan.`);
  assert.equal(plan.goalType, expectedGoalType, `${goal} must map to ${expectedGoalType}.`);
  assert.equal(plan.providerQueryMode, "read-only", `${goal} provider queries must be read-only.`);
  expectedQueries.forEach(query => assert(plan.providerQueries.includes(query), `${goal} must include read-only provider query ${query}.`));
  assert(Array.isArray(plan.steps) && plan.steps.length >= 3, `${goal} must include multi-step plan.`);
  assert(Array.isArray(plan.neededInformation) && plan.neededInformation.length >= 3, `${goal} must include needed information.`);
  assert(Array.isArray(plan.safeUserActions) && plan.safeUserActions.length >= 3, `${goal} must include safe user actions.`);
  assert.equal(plan.noExecutionAuthorized, true, `${goal} must not authorize execution.`);
  assert.equal(plan.noProviderContactAuthorized, true, `${goal} must not authorize provider contact.`);
  assert.equal(plan.noLocationPermissionRequested, true, `${goal} must not request location.`);
  assert.equal(plan.noBackendWritePerformed, true, `${goal} must not write backend state.`);
  assert.equal(plan.noPendingRealWorldActionCreated, true, `${goal} must not create pending execution action.`);
  return plan;
}

function assertStaticContracts() {
  const plannerSource = read("server", "nexus-agent-task-planner.js");
  const experienceSource = read("server", "nexus-standard-user-agent-experience.js");
  const app = read("public", "app.js");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");
  const normalizeCard = functionSlice(app, "normalizeAssistantRuntimePreviewCard");
  const renderExperience = functionSlice(app, "renderStandardUserAgentExperienceMarkup");

  [
    "farm-plan",
    "providerQueryMode: \"read-only\"",
    "noExecutionAuthorized: true",
    "noPendingRealWorldActionCreated: true"
  ].forEach(term => assert(plannerSource.includes(term), `FAP5 planner source must include ${term}.`));

  [
    "providerQueries",
    "safeUserActions",
    "blockedActions",
    "confidence",
    "providerQueryMode",
    "noExecutionAuthorized"
  ].forEach(term => {
    assert(experienceSource.includes(term), `FAP5 standard experience must carry ${term}.`);
    assert(normalizeCard.includes(term) || renderExperience.includes(term), `FAP5 preview card must render/normalize ${term}.`);
  });

  [
    "Planner inputs and safe actions",
    "Read-only provider queries",
    "Safe user actions",
    "Blocked execution actions"
  ].forEach(term => assert(renderExperience.includes(term), `FAP5 card renderer must include visible planner label: ${term}.`));

  [
    "<button",
    "<a ",
    "onclick",
    "data-command",
    "window.open",
    "location.href",
    "navigator.geolocation",
    "getCurrentPosition",
    "localStorage.setItem",
    "sessionStorage.setItem",
    "goSection(",
    "fetch(",
    "requestWithTimeout(",
    "pendingAction"
  ].forEach(term => assert(!renderExperience.includes(term), `FAP5 planner renderer must not include unsafe behavior: ${term}`));

  assert.equal(
    pkg.scripts["qa:nexus-fap5-assistant-task-planner"],
    "node scripts/nexus-fap5-assistant-task-planner-qa.js",
    "FAP5 package alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-fap5-assistant-task-planner-qa.js"), "FAP5 QA must be wired into local-safe suites.");
}

function assertPlannerModels() {
  assertPlan("Help me get a farm job.", "farm-job", ["job-search", "agriculture-context"]);
  assertPlan("Help me prepare for agriculture training.", "agriculture-training", ["agriculture-context", "music-media"]);
  assertPlan("Help me solve this crop issue.", "crop-issue", ["agriculture-context", "weather"]);
  assertPlan("Help me compare workforce programs.", "workforce-program-comparison", ["job-search", "agriculture-context"]);
  assertPlan("Help me get started with EV/agriculture technician work.", "ev-agriculture-technician", ["job-search", "music-media"]);
  assertPlan("Help me create a plan for my farm.", "farm-plan", ["agriculture-context", "weather"]);

  [
    "Apply to the first job.",
    "Call the provider.",
    "Buy fertilizer.",
    "Dispatch help.",
    "Send my location."
  ].forEach(goal => {
    const plan = planner.buildAgentTaskPlan(goal, { surface: "standard-user", previewOnly: true });
    assert.equal(planner.isSafeAgentTaskPlan(plan), true, `${goal} blocked plan must remain safe.`);
    assert.equal(plan.goalType, "blocked-execution-request", `${goal} must downgrade to blocked execution request.`);
    assert.equal(plan.providerQueries.length, 0, `${goal} must not query providers.`);
    assert.equal(plan.noPendingRealWorldActionCreated, true, `${goal} must not create a pending action.`);
  });
}

function assertExperienceCarriesPlannerOutput() {
  const env = Object.freeze({
    NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
    NEXUS_ASSISTANT_DIALOGUE_LIVE_PREVIEW_ENABLED: "true",
    NEXUS_STANDARD_USER_LIVE_SOURCE_PREVIEW_ENABLED: "true",
    NEXUS_AGRICULTURE_CONTEXT_PROVIDER_ENABLED: "true",
    NEXUS_JOB_SEARCH_PROVIDER_ENABLED: "true",
    NEXUS_WEATHER_PROVIDER_ENABLED: "true",
    NEXUS_MUSIC_MEDIA_PROVIDER_ENABLED: "true"
  });
  const prompt = "Help me create a plan for my farm.";
  const response = runtime.buildAssistantRuntimeResponse(prompt, { surface: "standard-user", previewOnly: true }, env);
  const experience = standardUserAgentExperience.buildStandardUserAgentExperience(prompt, response, { flags: { enabled: true } });
  assert.equal(standardUserAgentExperience.isSafeStandardUserAgentExperience(experience), true, "FAP5 standard experience must remain safe.");
  assert.equal(experience.taskPlanPreview.goalType, "farm-plan", "FAP5 experience must carry farm-plan goal type.");
  assert.equal(experience.taskPlanPreview.providerQueryMode, "read-only", "FAP5 experience provider queries must be read-only.");
  assert.equal(experience.taskPlanPreview.noExecutionAuthorized, true, "FAP5 experience task plan must not authorize execution.");
  assert(experience.taskPlanPreview.neededInformation.includes("farm goal"), "FAP5 experience must include needed information.");
  assert(experience.taskPlanPreview.safeUserActions.includes("review source-backed guidance"), "FAP5 experience must include safe user actions.");
}

function runFap5AssistantTaskPlannerQa() {
  assertStaticContracts();
  assertPlannerModels();
  assertExperienceCarriesPlannerOutput();
  console.log(JSON.stringify({
    farmJobPlan: true,
    agricultureTrainingPlan: true,
    cropIssuePlan: true,
    workforceComparisonPlan: true,
    technicianPlan: true,
    farmPlan: true,
    providerQueryMode: "read-only",
    noExecutionAuthorized: true
  }, null, 2));
  console.log("[nexus-fap5-assistant-task-planner-qa] passed");
}

if (require.main === module) {
  try {
    runFap5AssistantTaskPlannerQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runFap5AssistantTaskPlannerQa
});
