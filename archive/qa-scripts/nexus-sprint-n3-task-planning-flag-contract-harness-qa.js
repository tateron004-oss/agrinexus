const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  protectedFields,
  loadTaskPlanningFlagFixtures,
  validateTaskPlanningFlagFixtures
} = require("./nexus-sprint-n3-task-planning-flag-contract-harness.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertIncludes(source, terms, label) {
  const normalizedSource = source.replace(/`/g, "");
  for (const term of terms) {
    assert(normalizedSource.includes(term), `${label} must include: ${term}`);
  }
}

const docName = "NEXUS_SPRINT_N3_TASK_PLANNING_FLAG_CONTRACT_HARNESS.md";
const fixtureName = "task-planning-feature-flags.json";
const harnessName = "nexus-sprint-n3-task-planning-flag-contract-harness.js";
const qaName = "nexus-sprint-n3-task-planning-flag-contract-harness-qa.js";

assert(exists("docs", docName), "Sprint N3 harness doc must exist.");
assert(exists("fixtures", "nexus", fixtureName), "Sprint N3 fixture file must exist.");
assert(exists("scripts", harnessName), "Sprint N3 harness must exist.");
assert(exists("scripts", qaName), "Sprint N3 QA script must exist.");

const doc = read("docs", docName);
const fixtureSource = read("fixtures", "nexus", fixtureName);
const harnessSource = read("scripts", harnessName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const fixtures = loadTaskPlanningFlagFixtures();

assertIncludes(doc, [
  "Sprint N3",
  "941be24558034b3ff25567509c7c10d78c645a22",
  "fixture, harness, documentation, and QA only",
  "fixtures/nexus/task-planning-feature-flags.json",
  "scripts/nexus-sprint-n3-task-planning-flag-contract-harness.js",
  "planReviewAllowed: false",
  "stagedPlanPreviewAllowed: false",
  "plannerRuntimeAllowed: false",
  "livePlannerReplacementAllowed: false",
  "executablePlanStepsAllowed: false",
  "automaticStepChainingAllowed: false",
  "providerExecutionFromPlansAllowed: false",
  "rawAdapterCallsAllowed: false",
  "implicitPermissionAllowed: false",
  "autonomousHighRiskStepsAllowed: false",
  "planBasedRouteMutationAllowed: false",
  "riskTierDowngradeAllowed: false",
  "providerSelectionFromPlanAllowed: false",
  "toolSelectionFromPlanAllowed: false",
  "policyBypassAllowed: false",
  "confirmationBypassAllowed: false",
  "permissionBypassAllowed: false",
  "firstTurnExecutionAllowed: false",
  "laterTurnExecutionAllowed: false",
  "standardUserPlannerMutationAllowed: false",
  "backendWriteAllowed: false",
  "storageWriteAllowed: false",
  "networkAllowed: false",
  "auditWriteAllowed: false",
  "executionAuthority: false",
  "noExecution: true",
  "Sprint N4 - Task Planning Runtime Absence Regression Guard"
], "N3 harness doc");

assert.equal(fixtures.length, 4, "N3 fixture set must include exactly four flag fixtures.");

[
  "task-planning-default-off",
  "task-planning-flag-on-review-only",
  "task-planning-unsafe-authority-attempt",
  "task-planning-flag-on-without-visible-ui"
].forEach(id => {
  assert(fixtures.some(fixture => fixture.fixtureId === id), `N3 fixture set must include ${id}`);
});

const result = validateTaskPlanningFlagFixtures(fixtures);
assert.equal(result.ok, true, "N3 harness must validate fixtures successfully.");
assert.equal(result.count, 4, "N3 harness must report four fixtures.");

assert(fixtureSource.includes("\"executionAuthority\": true"), "N3 must include an unsafe executionAuthority attempt fixture.");
assert(fixtureSource.includes("\"noExecution\": false"), "N3 must include an unsafe noExecution false attempt fixture.");
assert(fixtureSource.includes("\"plannerRuntimeAllowed\": true"), "N3 must include an unsafe planner runtime attempt fixture.");
assert(fixtureSource.includes("\"livePlannerReplacementAllowed\": true"), "N3 must include an unsafe live planner replacement attempt fixture.");
assert(fixtureSource.includes("\"executablePlanStepsAllowed\": true"), "N3 must include an unsafe executable plan steps attempt fixture.");
assert(fixtureSource.includes("\"automaticStepChainingAllowed\": true"), "N3 must include an unsafe automatic step chaining attempt fixture.");
assert(fixtureSource.includes("\"providerExecutionFromPlansAllowed\": true"), "N3 must include an unsafe provider execution from plans attempt fixture.");
assert(fixtureSource.includes("\"rawAdapterCallsAllowed\": true"), "N3 must include an unsafe raw adapter calls attempt fixture.");
assert(fixtureSource.includes("\"permissionBypassAllowed\": true"), "N3 must include an unsafe permission bypass attempt fixture.");

for (const fixture of fixtures) {
  assert(fixture.expected, `${fixture.fixtureId} must include expected values.`);
  for (const field of protectedFields) {
    assert.equal(fixture.expected[field], false, `${fixture.fixtureId} must expect ${field} false.`);
  }
  assert.equal(fixture.expected.noExecution, true, `${fixture.fixtureId} must expect noExecution true.`);
}

for (const term of [
  "writeFile",
  "appendFile",
  "rmSync",
  "unlinkSync",
  "fetch(",
  "XMLHttpRequest",
  "document.",
  "querySelector",
  "addEventListener",
  "localStorage",
  "sessionStorage",
  "indexedDB",
  "db.json",
  "open(",
  "window.location",
  "navigator.geolocation",
  "mediaDevices",
  "navigator.credentials",
  "window.nativeBridge",
  "nativeBridge.",
  "setItem",
  "postMessage",
  "executePlan(",
  "runPlanStep(",
  "autoRunPlan(",
  "chainPlanSteps(",
  "selectProviderFromPlan(",
  "grantPermissionFromPlan(",
  "downgradeRiskFromPlan("
]) {
  assert(!harnessSource.includes(term), `N3 harness must not include unsafe or mutating API: ${term}`);
}

const combinedRuntime = [index, app, server].join("\n");
for (const term of [
  "nexus-task-planning-feature-flag.js",
  "nexus-sprint-n3-task-planning-flag-contract-harness",
  "task-planning-feature-flags.json",
  "NexusTaskPlanningFeatureFlagContract",
  "normalizeTaskPlanningFeatureFlagState",
  "isTaskPlanningVisibleFeatureEnabled",
  "taskPlanningRuntime",
  "plannerRuntime",
  "planStepAdapter",
  "executePlan",
  "runPlanStep",
  "autoRunPlan",
  "chainPlanSteps",
  "selectProviderFromPlan",
  "grantPermissionFromPlan"
]) {
  assert(!combinedRuntime.includes(term), `Runtime must not load N2/N3 flag harness artifact: ${term}`);
}

assert(exists("docs", "NEXUS_SPRINT_N2_TASK_PLANNING_FEATURE_FLAG_CONTRACT.md"), "N3 requires N2 feature flag contract doc.");
assert(exists("public", "nexus-task-planning-feature-flag.js"), "N3 requires N2 feature flag module.");

const alias = "qa:nexus-sprint-n3-task-planning-flag-contract-harness";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint N3 QA.");

console.log("[nexus-sprint-n3-task-planning-flag-contract-harness-qa] passed");
