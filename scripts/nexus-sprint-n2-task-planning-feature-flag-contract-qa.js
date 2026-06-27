const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  TASK_PLANNING_FEATURE_FLAG_NAME,
  DEFAULT_TASK_PLANNING_FEATURE_FLAG_STATE,
  normalizeTaskPlanningFeatureFlagState,
  isTaskPlanningVisibleFeatureEnabled
} = require("../public/nexus-task-planning-feature-flag.js");

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

const docName = "NEXUS_SPRINT_N2_TASK_PLANNING_FEATURE_FLAG_CONTRACT.md";
const moduleName = "nexus-task-planning-feature-flag.js";
const qaName = "nexus-sprint-n2-task-planning-feature-flag-contract-qa.js";

assert(exists("docs", docName), "Sprint N2 feature flag contract doc must exist.");
assert(exists("public", moduleName), "Sprint N2 feature flag module must exist.");
assert(exists("scripts", qaName), "Sprint N2 QA script must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const readinessContract = read("public", "nexus-task-planning-readiness-contract.js");
const n1Doc = read("docs", "NEXUS_SPRINT_N1_TASK_PLANNING_RUNTIME_ACTIVATION_READINESS_GATE.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "Sprint N2",
  "2233180456e8029336ace2375e4a573dcb9f9cd3",
  "standalone inert contract module and deterministic QA only",
  "Feature Flag Name",
  "NEXUS_TASK_PLANNING_VISIBLE_ENABLED",
  "Default State",
  "Contract Module",
  "Important Boundary",
  "Prohibited Behavior",
  "Relationship To Sprint N1",
  "QA Expectations",
  "Sprint N3 - Task Planning Flag Contract Harness"
], "N2 feature flag doc");

assert(readinessContract.includes("task_planning.readiness.phase_66"), "N2 must build on the Phase 66 Task Planning readiness contract.");
assert(readinessContract.includes("livePlannerReplacementEnabled: false"), "Phase 66 live planner replacement default must remain false.");
assert(readinessContract.includes("executablePlanStepsEnabled: false"), "Phase 66 executable plan steps default must remain false.");
assert(readinessContract.includes("automaticStepChainingEnabled: false"), "Phase 66 automatic step chaining default must remain false.");
assert(readinessContract.includes("providerExecutionFromPlansEnabled: false"), "Phase 66 provider execution from plans default must remain false.");
assert(readinessContract.includes("executionAllowed: false"), "Phase 66 execution default must remain false.");
assert(n1Doc.includes("Sprint N2 - Task Planning Feature Flag Contract"), "N1 must recommend Sprint N2.");

const protectedFields = [
  "planReviewAllowed",
  "stagedPlanPreviewAllowed",
  "plannerRuntimeAllowed",
  "livePlannerReplacementAllowed",
  "executablePlanStepsAllowed",
  "automaticStepChainingAllowed",
  "providerExecutionFromPlansAllowed",
  "rawAdapterCallsAllowed",
  "implicitPermissionAllowed",
  "autonomousHighRiskStepsAllowed",
  "planBasedRouteMutationAllowed",
  "riskTierDowngradeAllowed",
  "providerSelectionFromPlanAllowed",
  "toolSelectionFromPlanAllowed",
  "policyBypassAllowed",
  "confirmationBypassAllowed",
  "permissionBypassAllowed",
  "firstTurnExecutionAllowed",
  "laterTurnExecutionAllowed",
  "standardUserPlannerMutationAllowed",
  "backendWriteAllowed",
  "storageWriteAllowed",
  "networkAllowed",
  "auditWriteAllowed",
  "executionAuthority"
];

assert.equal(TASK_PLANNING_FEATURE_FLAG_NAME, "NEXUS_TASK_PLANNING_VISIBLE_ENABLED");
assert.equal(DEFAULT_TASK_PLANNING_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_TASK_PLANNING_FEATURE_FLAG_STATE.visibleUiAllowed, false);
assert.equal(DEFAULT_TASK_PLANNING_FEATURE_FLAG_STATE.noExecution, true);
for (const field of protectedFields) {
  assert.equal(DEFAULT_TASK_PLANNING_FEATURE_FLAG_STATE[field], false, `default ${field} must be false.`);
  assert(doc.includes(`${field}: false`), `N2 doc must document ${field}: false.`);
}

const defaultState = normalizeTaskPlanningFeatureFlagState();
assert.equal(defaultState.enabled, false);
assert.equal(defaultState.visibleUiAllowed, false);
assert.equal(defaultState.noExecution, true);
assert.equal(isTaskPlanningVisibleFeatureEnabled(defaultState), false);

const visibleOnly = normalizeTaskPlanningFeatureFlagState({
  enabled: true,
  visibleUiAllowed: true
});
assert.equal(visibleOnly.enabled, true);
assert.equal(visibleOnly.visibleUiAllowed, true);
assert.equal(isTaskPlanningVisibleFeatureEnabled(visibleOnly), true);
for (const field of protectedFields) {
  assert.equal(visibleOnly[field], false, `visible-only state must keep ${field}=false.`);
}
assert.equal(visibleOnly.noExecution, true);

const unsafeAttempt = normalizeTaskPlanningFeatureFlagState({
  enabled: true,
  visibleUiAllowed: true,
  planReviewAllowed: true,
  stagedPlanPreviewAllowed: true,
  plannerRuntimeAllowed: true,
  livePlannerReplacementAllowed: true,
  executablePlanStepsAllowed: true,
  automaticStepChainingAllowed: true,
  providerExecutionFromPlansAllowed: true,
  rawAdapterCallsAllowed: true,
  implicitPermissionAllowed: true,
  autonomousHighRiskStepsAllowed: true,
  planBasedRouteMutationAllowed: true,
  riskTierDowngradeAllowed: true,
  providerSelectionFromPlanAllowed: true,
  toolSelectionFromPlanAllowed: true,
  policyBypassAllowed: true,
  confirmationBypassAllowed: true,
  permissionBypassAllowed: true,
  firstTurnExecutionAllowed: true,
  laterTurnExecutionAllowed: true,
  standardUserPlannerMutationAllowed: true,
  backendWriteAllowed: true,
  storageWriteAllowed: true,
  networkAllowed: true,
  auditWriteAllowed: true,
  executionAuthority: true,
  noExecution: false
});
assert.equal(unsafeAttempt.visibleUiAllowed, true);
for (const field of protectedFields) {
  assert.equal(unsafeAttempt[field], false, `unsafe attempt must keep ${field}=false.`);
}
assert.equal(unsafeAttempt.noExecution, true);

const runtime = [index, app, server].join("\n");
for (const term of [
  moduleName,
  "NEXUS_TASK_PLANNING_VISIBLE_ENABLED",
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
  assert(!runtime.includes(term), `Runtime must not load or activate Task Planning feature flag artifact: ${term}`);
}

for (const term of [
  "document.",
  "querySelector",
  "addEventListener",
  "fetch(",
  "XMLHttpRequest",
  "localStorage",
  "sessionStorage",
  "indexedDB",
  "navigator.credentials",
  "navigator.geolocation",
  "mediaDevices",
  "window.location",
  "location.href",
  "open(",
  "sendBeacon",
  "setItem",
  "postMessage",
  "window.nativeBridge",
  "nativeBridge.",
  "ACTION_CALL",
  "getUserMedia",
  "openWorkflow(",
  "goSection(",
  "executePlan(",
  "runPlanStep(",
  "selectProviderFromPlan(",
  "grantPermissionFromPlan("
]) {
  assert(!moduleSource.includes(term), `N2 feature flag module must not include runtime API: ${term}`);
}

const alias = "qa:nexus-sprint-n2-task-planning-feature-flag-contract";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint N2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-n1-task-planning-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint N1 QA.");

console.log("[nexus-sprint-n2-task-planning-feature-flag-contract-qa] passed");
