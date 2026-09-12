const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const planner = require("../server/nexus-agent-task-planner.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function assertPlan(goal, expectedType, expectedQueries) {
  const plan = planner.buildAgentTaskPlan(goal);
  assert.equal(planner.isSafeAgentTaskPlan(plan), true, `${goal} must produce a safe plan.`);
  assert.equal(plan.goalType, expectedType, `${goal} must map to ${expectedType}.`);
  expectedQueries.forEach(query => assert(plan.providerQueries.includes(query), `${goal} must include provider query ${query}.`));
  assert.equal(plan.noExecutionAuthorized, true);
  assert.equal(plan.noProviderContactAuthorized, true);
  assert.equal(plan.noLocationPermissionRequested, true);
  assert.equal(plan.noBackendWritePerformed, true);
  assert.equal(plan.noPendingRealWorldActionCreated, true);
  ["apply", "call", "message", "buy", "pay", "book", "submit", "dispatch", "send location"].forEach(action => {
    assert(plan.blockedActions.includes(action), `${goal} must block ${action}.`);
  });
  return plan;
}

function runNap3AgentTaskPlannerQa() {
  const source = read("server", "nexus-agent-task-planner.js");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");

  [
    "goal",
    "steps",
    "neededInformation",
    "providerQueries",
    "safeUserActions",
    "blockedActions",
    "nextBestStep",
    "confidence",
    "noExecutionAuthorized"
  ].forEach(term => assert(source.includes(term), `NAP3 planner must include ${term}.`));

  [
    "window.open",
    "location.href",
    "navigator.geolocation",
    "getCurrentPosition",
    "getUserMedia",
    "localStorage.setItem",
    "sessionStorage.setItem",
    "writeFileSync",
    "executionAuthority: true",
    "providerHandoffAllowed: true"
  ].forEach(term => assert(!source.includes(term), `NAP3 planner must not introduce unsafe behavior: ${term}`));

  assert.equal(
    pkg.scripts["qa:nexus-nap3-agent-task-planner"],
    "node scripts/nexus-nap3-agent-task-planner-qa.js",
    "NAP3 package alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-nap3-agent-task-planner-qa.js"), "NAP3 QA must be wired into local-safe suites.");

  assertPlan("Help me get a farm job.", "farm-job", ["job-search", "agriculture-context"]);
  assertPlan("Help me prepare for agriculture training.", "agriculture-training", ["agriculture-context", "music-media"]);
  assertPlan("Help me solve this crop issue.", "crop-issue", ["agriculture-context", "weather"]);
  assertPlan("Help me compare workforce programs.", "workforce-program-comparison", ["job-search"]);
  assertPlan("Help me get started with EV/agriculture technician work.", "ev-agriculture-technician", ["job-search", "music-media"]);

  ["Apply to the first job.", "Call the provider.", "Buy fertilizer.", "Dispatch help.", "Send my location."].forEach(goal => {
    const plan = planner.buildAgentTaskPlan(goal);
    assert.equal(planner.isSafeAgentTaskPlan(plan), true, `${goal} blocked plan must remain safe.`);
    assert.equal(plan.goalType, "blocked-execution-request", `${goal} must be blocked as execution request.`);
    assert.equal(plan.providerQueries.length, 0, `${goal} must not run provider query in blocked execution plan.`);
    assert.match(plan.nextBestStep, /information|prepared/i, `${goal} must suggest a safe alternative.`);
  });

  console.log(JSON.stringify({
    farmJobPlan: true,
    agricultureTrainingPlan: true,
    cropIssuePlan: true,
    workforceComparisonPlan: true,
    technicianPlan: true,
    blockedExecutionPlans: true,
    noExecutionAuthorized: true
  }, null, 2));
  console.log("[nexus-nap3-agent-task-planner-qa] passed");
}

if (require.main === module) {
  try {
    runNap3AgentTaskPlannerQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runNap3AgentTaskPlannerQa
});
