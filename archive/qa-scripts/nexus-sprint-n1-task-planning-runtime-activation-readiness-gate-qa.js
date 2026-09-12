const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  TASK_PLANNING_REQUIRED_PRECONDITIONS,
  TASK_PLANNING_RESTRICTED_DOMAINS,
  TASK_PLANNING_NO_EXECUTION_DEFAULTS,
  TASK_PLANNING_READINESS_CONTRACT,
  createTaskPlanningReadinessContract
} = require("../public/nexus-task-planning-readiness-contract.js");

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

const docName = "NEXUS_SPRINT_N1_TASK_PLANNING_RUNTIME_ACTIVATION_READINESS_GATE.md";
const qaName = "nexus-sprint-n1-task-planning-runtime-activation-readiness-gate-qa.js";

assert(exists("docs", docName), "Sprint N1 readiness gate doc must exist.");
assert(exists("scripts", qaName), "Sprint N1 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const contractSource = read("public", "nexus-task-planning-readiness-contract.js");

assertIncludes(doc, [
  "Sprint N1",
  "489bef0820afe6315857c7abb26eed43776d0f7b",
  "documentation and deterministic QA only",
  "Relationship To Prior Lanes",
  "Runtime Activation Preconditions",
  "Runtime Absence Requirements",
  "Blocked Runtime Behavior",
  "Standard User Boundary",
  "Required Contract Invariants",
  "Restricted Domains",
  "Safe Copy Boundary",
  "Browser Validation Implication",
  "Rollback Strategy",
  "Sprint N2 - Task Planning Feature Flag Contract"
], "N1 readiness gate doc");

assertIncludes(doc, [
  "Sprint M5 - Multi-Turn Reasoning Lane Closeout",
  "Phase 66 - Task Planning Readiness Contract",
  "Multi-Turn Reasoning readiness is not planner authority",
  "a plan must never become consent, permission, provider authorization, or execution approval"
], "N1 relationship language");

assertIncludes(doc, [
  "product owner approval for a planner runtime change",
  "evaluated planner version",
  "tool registry step mapping",
  "risk tier for each plan step",
  "policy review for each plan step",
  "execution false by default",
  "staged plan preview",
  "visible step purpose",
  "visible step consequence",
  "explicit approval per high-risk step",
  "cancellation path",
  "provider availability check",
  "permission state per step",
  "audit event per step",
  "source trace for plan",
  "no autonomous high-risk steps",
  "no raw adapter calls",
  "no implicit permission",
  "representative prompt set",
  "multilingual prompt coverage",
  "Standard User prompt coverage",
  "voice prompt coverage",
  "typed prompt coverage",
  "ambiguity fallback",
  "rollback plan",
  "regression suite coverage",
  "browser validation plan",
  "deterministic QA coverage"
], "N1 activation preconditions");

assertIncludes(doc, [
  "live planner replacement",
  "executable plan steps",
  "automatic step chaining",
  "provider execution from plans",
  "raw adapter calls",
  "implicit permission from plans",
  "autonomous high-risk steps",
  "plan-based typed route mutation",
  "plan-based voice route mutation",
  "plan-based risk tier downgrade",
  "plan-based provider selection",
  "plan-based tool selection",
  "plan-based policy bypass",
  "plan-based confirmation bypass",
  "plan-based permission bypass",
  "medical diagnosis from a generated plan",
  "pharmacy or prescription execution from a generated plan",
  "payment or marketplace transaction execution from a generated plan",
  "emergency dispatch from a generated plan",
  "contact or message execution from a generated plan",
  "location or camera activation from a generated plan",
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
], "N1 blocked behavior");

assertIncludes(doc, [
  "no Task Planning runtime surface",
  "no planner engine module loaded",
  "no plan step adapter loaded",
  "no plan-driven route mutation",
  "no plan-driven risk tier mutation",
  "no plan-driven provider selection",
  "no plan-driven execution, staging, or confirmation bypass",
  "existing confirmation and permission gates untouched"
], "N1 Standard User boundary");

for (const precondition of [
  "toolRegistryStepMapping",
  "riskTierForEachStep",
  "policyReviewForEachStep",
  "executionFalseByDefault",
  "stagedPlanPreview",
  "visibleStepPurpose",
  "visibleStepConsequence",
  "explicitApprovalPerHighRiskStep",
  "cancellationPath",
  "providerAvailabilityCheck",
  "permissionStatePerStep",
  "auditEventPerStep",
  "sourceTraceForPlan",
  "noAutonomousHighRiskSteps",
  "noRawAdapterCalls",
  "noImplicitPermission",
  "rollbackPlan",
  "regressionSuiteCoverage"
]) {
  assert(TASK_PLANNING_REQUIRED_PRECONDITIONS.includes(precondition), `Phase 66 contract must include ${precondition}.`);
}

for (const domain of [
  "healthcare",
  "medical_records",
  "pharmacy",
  "payments",
  "location",
  "communications",
  "provider_contact",
  "marketplace_transactions",
  "emergency",
  "transportation_dispatch",
  "identity",
  "account_profile",
  "role_authorization",
  "minors_family_support"
]) {
  assert(TASK_PLANNING_RESTRICTED_DOMAINS.includes(domain), `Phase 66 contract must include restricted domain ${domain}.`);
}

for (const field of [
  "livePlannerReplacementEnabled",
  "executablePlanStepsEnabled",
  "automaticStepChainingEnabled",
  "providerExecutionFromPlansEnabled",
  "rawAdapterCallsEnabled",
  "implicitPermissionEnabled",
  "autonomousHighRiskStepsEnabled",
  "standardUserPlannerMutationAllowed",
  "executionAllowed",
  "liveActionEnabled"
]) {
  assert.equal(TASK_PLANNING_NO_EXECUTION_DEFAULTS[field], false, `${field} must default false.`);
  assert.equal(TASK_PLANNING_READINESS_CONTRACT[field], false, `${field} must remain false on default contract.`);
  assert(doc.includes(`${field}: false`), `N1 doc must list ${field}: false.`);
}

const unsafeOverride = createTaskPlanningReadinessContract({
  actionType: "prepare_plan_preview",
  livePlannerReplacementEnabled: true,
  executablePlanStepsEnabled: true,
  automaticStepChainingEnabled: true,
  providerExecutionFromPlansEnabled: true,
  rawAdapterCallsEnabled: true,
  implicitPermissionEnabled: true,
  autonomousHighRiskStepsEnabled: true,
  standardUserPlannerMutationAllowed: true,
  executionAllowed: true,
  liveActionEnabled: true
});

assert.equal(unsafeOverride.actionType, "prepare_plan_preview");
assert.equal(unsafeOverride.phase, "66");
assert.equal(unsafeOverride.readinessStatus, "blocked");
assert.equal(unsafeOverride.riskTier, "high");
for (const field of Object.keys(TASK_PLANNING_NO_EXECUTION_DEFAULTS)) {
  assert.equal(unsafeOverride[field], false, `Factory must force unsafe override ${field} back to false.`);
}

const runtime = [index, app, server].join("\n");
for (const term of [
  "nexus-task-planning-readiness-contract.js",
  "NexusTaskPlanningReadinessContract",
  "TASK_PLANNING_READINESS_CONTRACT",
  "createTaskPlanningReadinessContract",
  "taskPlanningRuntime",
  "plannerRuntime",
  "planStepAdapter",
  "executePlan",
  "runPlanStep",
  "autoRunPlan",
  "chainPlanSteps",
  "selectProviderFromPlan",
  "grantPermissionFromPlan",
  "nexus-sprint-n1-task-planning-runtime-activation-readiness-gate"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Task Planning lane artifact: ${term}`);
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
  "callProvider(",
  "openPayment("
]) {
  assert(!contractSource.includes(term), `Phase 66 contract must not include runtime API: ${term}`);
}

assert(exists("docs", "NEXUS_SPRINT_M5_MULTI_TURN_REASONING_LANE_CLOSEOUT.md"), "N1 requires Sprint M5 closeout doc.");
assert(exists("docs", "NEXUS_TASK_PLANNING_READINESS_CONTRACT_PHASE_66.md"), "N1 requires Phase 66 doc.");
assert(exists("scripts", "nexus-task-planning-readiness-contract-qa.js"), "N1 requires Phase 66 QA.");
assert(qaSuite.includes("scripts/nexus-task-planning-readiness-contract-qa.js"), "qa-suite must include Phase 66 QA.");

const alias = "qa:nexus-sprint-n1-task-planning-runtime-activation-readiness-gate";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint N1 QA.");

console.log("[nexus-sprint-n1-task-planning-runtime-activation-readiness-gate-qa] passed");
