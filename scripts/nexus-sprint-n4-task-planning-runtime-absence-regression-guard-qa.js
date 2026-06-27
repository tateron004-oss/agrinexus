const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  DEFAULT_TASK_PLANNING_FEATURE_FLAG_STATE,
  normalizeTaskPlanningFeatureFlagState
} = require("../public/nexus-task-planning-feature-flag.js");
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

const docName = "NEXUS_SPRINT_N4_TASK_PLANNING_RUNTIME_ABSENCE_REGRESSION_GUARD.md";
const qaName = "nexus-sprint-n4-task-planning-runtime-absence-regression-guard-qa.js";

assert(exists("docs", docName), "Sprint N4 absence guard doc must exist.");
assert(exists("scripts", qaName), "Sprint N4 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const readinessContract = read("public", "nexus-task-planning-readiness-contract.js");
const featureFlagModule = read("public", "nexus-task-planning-feature-flag.js");
const n3Harness = read("scripts", "nexus-sprint-n3-task-planning-flag-contract-harness.js");
const fixtures = loadTaskPlanningFlagFixtures();

assertIncludes(doc, [
  "Sprint N4",
  "c9809d736e6b1b90625eab06617f33a518fffc32",
  "documentation and QA only",
  "Purpose",
  "Runtime Absence Requirements",
  "Blocked Runtime Behavior",
  "Required Contract Invariants",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "QA Expectations",
  "Sprint N5 - Task Planning Lane Closeout"
], "N4 absence guard doc");

assertIncludes(doc, [
  "N1 Task Planning runtime activation readiness gate",
  "N2 Task Planning feature flag contract",
  "N3 Task Planning flag contract harness",
  "Phase 66 Task Planning readiness contract"
], "N4 protected artifacts");

assertIncludes(doc, [
  "public/nexus-task-planning-readiness-contract.js",
  "public/nexus-task-planning-feature-flag.js",
  "scripts/nexus-sprint-n3-task-planning-flag-contract-harness.js",
  "fixtures/nexus/task-planning-feature-flags.json",
  "Sprint N QA scripts"
], "N4 runtime absence artifact list");

assertIncludes(doc, [
  "It intentionally does not ban generic words such as",
  "plan",
  "planning",
  "task",
  "route",
  "review",
  "language",
  "settings"
], "N4 generic wording exception");

assertIncludes(doc, [
  "live planner replacement",
  "active plan step adapters",
  "plan review buttons",
  "event handlers",
  "typed route mutation",
  "voice route mutation",
  "automatic route changes from generated plans",
  "executable plan steps",
  "automatic step chaining",
  "provider execution from plans",
  "raw adapter calls",
  "implicit permission from plans",
  "autonomous high-risk steps",
  "risk downgrades from generated plans",
  "ambiguous prompt execution",
  "provider selection from plans",
  "tool selection from plans",
  "staged action creation from plans",
  "policy bypass from generated plans",
  "confirmation bypass from generated plans",
  "permission bypass from generated plans",
  "medical diagnosis from generated plans",
  "pharmacy or prescription execution from generated plans",
  "payment or marketplace transaction execution from generated plans",
  "emergency dispatch from generated plans",
  "contact or message execution from generated plans",
  "location or camera activation from generated plans",
  "permission prompts",
  "audit writes",
  "backend writes",
  "localStorage or sessionStorage writes",
  "fetch or network calls",
  "provider handoff",
  "native bridge dispatch",
  "calls",
  "messages",
  "WhatsApp, Telegram, SMS, or email sending",
  "payment execution",
  "marketplace transactions",
  "location sharing",
  "camera or microphone activation",
  "health, medical, pharmacy, prescription, or FHIR execution",
  "appointment scheduling",
  "transportation dispatch",
  "emergency dispatch",
  "external navigation",
  "real pending action creation",
  "execution authority"
], "N4 blocked runtime behavior");

for (const requiredPath of [
  ["docs", "NEXUS_SPRINT_N1_TASK_PLANNING_RUNTIME_ACTIVATION_READINESS_GATE.md"],
  ["docs", "NEXUS_SPRINT_N2_TASK_PLANNING_FEATURE_FLAG_CONTRACT.md"],
  ["docs", "NEXUS_SPRINT_N3_TASK_PLANNING_FLAG_CONTRACT_HARNESS.md"],
  ["docs", "NEXUS_TASK_PLANNING_READINESS_CONTRACT_PHASE_66.md"],
  ["public", "nexus-task-planning-readiness-contract.js"],
  ["public", "nexus-task-planning-feature-flag.js"],
  ["fixtures", "nexus", "task-planning-feature-flags.json"],
  ["scripts", "nexus-sprint-n3-task-planning-flag-contract-harness.js"]
]) {
  assert(exists(...requiredPath), `N4 requires artifact: ${requiredPath.join("/")}`);
}

const runtime = [index, app, server].join("\n");
for (const term of [
  "nexus-task-planning-readiness-contract.js",
  "nexus-task-planning-feature-flag.js",
  "nexus-sprint-n3-task-planning-flag-contract-harness",
  "task-planning-feature-flags.json",
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
  "grantPermissionFromPlan",
  "downgradeRiskFromPlan",
  "nexus-sprint-n4-task-planning-runtime-absence-regression-guard"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Task Planning lane artifact: ${term}`);
}

assertIncludes(readinessContract, [
  "TASK_PLANNING_READINESS_CONTRACT",
  "task_planning.readiness.phase_66",
  "TASK_PLANNING_NO_EXECUTION_DEFAULTS",
  "createTaskPlanningReadinessContract",
  "executionAllowed: false",
  "liveActionEnabled: false"
], "Phase 66 Task Planning readiness contract");

assert.equal(DEFAULT_TASK_PLANNING_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_TASK_PLANNING_FEATURE_FLAG_STATE.visibleUiAllowed, false);
for (const field of protectedFields) {
  assert.equal(DEFAULT_TASK_PLANNING_FEATURE_FLAG_STATE[field], false, `N4 default ${field} must remain false.`);
}
assert.equal(DEFAULT_TASK_PLANNING_FEATURE_FLAG_STATE.noExecution, true);

const normalizedUnsafeAttempt = normalizeTaskPlanningFeatureFlagState({
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

assert.equal(normalizedUnsafeAttempt.visibleUiAllowed, true);
for (const field of protectedFields) {
  assert.equal(normalizedUnsafeAttempt[field], false, `Unsafe attempt must normalize ${field} back to false.`);
}
assert.equal(normalizedUnsafeAttempt.noExecution, true);

const fixtureResult = validateTaskPlanningFlagFixtures(fixtures);
assert.equal(fixtureResult.ok, true, "N3 fixtures must remain valid.");
assert.equal(fixtureResult.count, 4, "N3 fixtures must remain complete.");

for (const source of [featureFlagModule, n3Harness]) {
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
    "selectProviderFromPlan("
  ]) {
    assert(!source.includes(term), `Sprint N contract/harness must not include runtime API: ${term}`);
  }
}

const alias = "qa:nexus-sprint-n4-task-planning-runtime-absence-regression-guard";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint N4 QA.");

console.log("[nexus-sprint-n4-task-planning-runtime-absence-regression-guard-qa] passed");
