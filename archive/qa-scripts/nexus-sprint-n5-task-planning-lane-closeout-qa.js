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

const docName = "NEXUS_SPRINT_N5_TASK_PLANNING_LANE_CLOSEOUT.md";
const qaName = "nexus-sprint-n5-task-planning-lane-closeout-qa.js";

assert(exists("docs", docName), "Sprint N5 closeout doc must exist.");
assert(exists("scripts", qaName), "Sprint N5 QA script must exist.");

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
  "Sprint N5",
  "c276c845cf24864e47cf777c2665fc56da86d281",
  "documentation and deterministic QA only",
  "Sprint N Completion Summary",
  "What Is Active Now",
  "What Remains Inert",
  "No-Authority And No-Execution Guarantees",
  "Blocked Runtime Categories",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "Rollback Strategy",
  "Sprint O1 - Tool Provider Selection Runtime Activation Readiness Gate"
], "N5 closeout doc");

assertIncludes(doc, [
  "Task Planning runtime activation readiness gate",
  "Task Planning feature flag contract",
  "Task Planning flag contract harness",
  "Task Planning runtime absence regression guard",
  "Task Planning lane closeout"
], "N5 sprint summary");

assertIncludes(doc, [
  "Task Planning readiness is not runtime activation",
  "Task Planning visibility readiness is not planner authority",
  "a generated plan is not consent, identity, role authorization, provider authorization, or execution approval",
  "plan context must remain non-authoritative context",
  "plans cannot authorize, stage, dispatch, or execute an action by themselves",
  "ambiguous prompts must clarify rather than infer high-impact intent from a plan",
  "enabled: false",
  "visibleUiAllowed: false",
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
  "unsafe authority attempts normalize back to no-execution values",
  "no action has been taken"
], "N5 no-authority and no-execution language");

assertIncludes(doc, [
  "live planner replacement",
  "active plan step adapters",
  "plan review buttons",
  "task board controls",
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
  "identity verification from generated plans",
  "role or permission elevation from generated plans",
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
], "N5 blocked runtime categories");

const requiredDocs = [
  "NEXUS_SPRINT_N1_TASK_PLANNING_RUNTIME_ACTIVATION_READINESS_GATE.md",
  "NEXUS_SPRINT_N2_TASK_PLANNING_FEATURE_FLAG_CONTRACT.md",
  "NEXUS_SPRINT_N3_TASK_PLANNING_FLAG_CONTRACT_HARNESS.md",
  "NEXUS_SPRINT_N4_TASK_PLANNING_RUNTIME_ABSENCE_REGRESSION_GUARD.md",
  "NEXUS_TASK_PLANNING_READINESS_CONTRACT_PHASE_66.md",
  "NEXUS_TOOL_PROVIDER_SELECTION_READINESS_CONTRACT_PHASE_67.md"
];

for (const requiredDoc of requiredDocs) {
  assert(exists("docs", requiredDoc), `Sprint N5 requires prior or next-lane doc: ${requiredDoc}`);
}

const requiredScripts = [
  "nexus-sprint-n1-task-planning-runtime-activation-readiness-gate-qa.js",
  "nexus-sprint-n2-task-planning-feature-flag-contract-qa.js",
  "nexus-sprint-n3-task-planning-flag-contract-harness-qa.js",
  "nexus-sprint-n4-task-planning-runtime-absence-regression-guard-qa.js"
];

for (const requiredScript of requiredScripts) {
  assert(exists("scripts", requiredScript), `Sprint N5 requires prior Sprint N QA: ${requiredScript}`);
  assert(qaSuite.includes(`scripts/${requiredScript}`), `qa-suite must include prior Sprint N QA: ${requiredScript}`);
}

assert(exists("public", "nexus-task-planning-readiness-contract.js"), "Sprint N5 requires Phase 66 Task Planning readiness contract.");
assert(exists("public", "nexus-task-planning-feature-flag.js"), "Sprint N5 requires N2 feature flag contract.");
assert(exists("fixtures", "nexus", "task-planning-feature-flags.json"), "Sprint N5 requires N3 feature flag fixture.");
assert(exists("public", "nexus-tool-provider-selection-readiness-contract.js"), "Sprint N5 requires Phase 67 Tool Provider Selection readiness contract.");

assertIncludes(readinessContract, [
  "TASK_PLANNING_READINESS_CONTRACT",
  "task_planning.readiness.phase_66",
  "TASK_PLANNING_NO_EXECUTION_DEFAULTS",
  "createTaskPlanningReadinessContract",
  "executionAllowed: false",
  "liveActionEnabled: false"
], "Phase 66 Task Planning readiness contract");

assertIncludes(featureFlagModule, [
  "DEFAULT_TASK_PLANNING_FEATURE_FLAG_STATE",
  "NEXUS_TASK_PLANNING_VISIBLE_ENABLED",
  "normalizeTaskPlanningFeatureFlagState",
  "isTaskPlanningVisibleFeatureEnabled",
  "executionAuthority",
  "noExecution"
], "N2 Task Planning feature flag module");

assertIncludes(n3Harness, [
  "loadTaskPlanningFlagFixtures",
  "validateTaskPlanningFlagFixtures"
], "N3 Task Planning harness");

assert.equal(DEFAULT_TASK_PLANNING_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_TASK_PLANNING_FEATURE_FLAG_STATE.visibleUiAllowed, false);
for (const field of protectedFields) {
  assert.equal(DEFAULT_TASK_PLANNING_FEATURE_FLAG_STATE[field], false, `N5 default ${field} must remain false.`);
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
  "nexus-sprint-n5-task-planning-lane-closeout"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Task Planning lane artifact: ${term}`);
}

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
    "routeFromPlan(",
    "selectProviderFromPlan("
  ]) {
    assert(!source.includes(term), `Sprint N contract/harness must not include runtime API: ${term}`);
  }
}

const alias = "qa:nexus-sprint-n5-task-planning-lane-closeout";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint N5 QA.");

console.log("[nexus-sprint-n5-task-planning-lane-closeout-qa] passed");
