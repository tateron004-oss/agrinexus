const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  doc: path.join(root, "docs", "NEXUS_TASK_PLANNING_READINESS_CONTRACT_PHASE_66.md"),
  contract: path.join(root, "public", "nexus-task-planning-readiness-contract.js"),
  index: path.join(root, "public", "index.html"),
  app: path.join(root, "public", "app.js"),
  server: path.join(root, "server.js"),
  packageJson: path.join(root, "package.json"),
  qaSuite: path.join(root, "scripts", "qa-suite.js")
};

function read(filePath) { return fs.readFileSync(filePath, "utf8"); }
function assert(condition, message) { if (!condition) { console.error(`[nexus-task-planning-readiness-contract-qa] ${message}`); process.exit(1); } }
Object.values(paths).forEach(filePath => assert(fs.existsSync(filePath), `${path.relative(root, filePath)} must exist.`));
const doc = read(paths.doc);
const contractSource = read(paths.contract);
const contract = require(paths.contract);
const index = read(paths.index);
const app = read(paths.app);
const server = read(paths.server);
const packageData = JSON.parse(read(paths.packageJson));
const qaSuite = read(paths.qaSuite);
assert(doc.includes("Phase: 66"), "doc must identify Phase 66.");
assert(doc.includes("inert readiness contract"), "doc must state this phase is inert.");
assert(doc.includes("I can prepare a staged plan, but I will not run any step until the required approvals and connections are active."), "doc must include safe user-facing copy.");
assert(doc.includes("a plan is not execution"), "doc must preserve plan non-execution language.");
[
  "live planner replacement",
  "executable plan steps",
  "automatic step chaining",
  "provider execution from plans",
  "call or message execution from plans",
  "payment execution from plans",
  "marketplace transaction execution from plans",
  "medical or pharmacy execution from plans",
  "emergency dispatch from plans",
  "transportation dispatch from plans",
  "location or camera activation from plans",
  "identity or account changes from plans",
  "role or permission elevation",
  "Standard User runtime planner changes",
  "storage or network side effects",
  "backend behavior changes"
].forEach(boundary => assert(doc.includes(boundary), `doc must document inactive boundary ${boundary}.`));
[
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
].forEach(precondition => { assert(contract.TASK_PLANNING_REQUIRED_PRECONDITIONS.includes(precondition), `contract must include precondition ${precondition}.`); assert(doc.includes(precondition), `doc must include precondition ${precondition}.`); });
[
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
].forEach(domain => { assert(contract.TASK_PLANNING_RESTRICTED_DOMAINS.includes(domain), `contract must include restricted domain ${domain}.`); assert(doc.includes(domain), `doc must include restricted domain ${domain}.`); });
const defaults = contract.TASK_PLANNING_NO_EXECUTION_DEFAULTS;
[
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
].forEach(field => { assert(defaults[field] === false, `${field} must default false.`); assert(contract.TASK_PLANNING_READINESS_CONTRACT[field] === false, `${field} must be false on the default contract.`); });
const sample = contract.createTaskPlanningReadinessContract({ actionType: "prepare_plan_preview", livePlannerReplacementEnabled: true, executablePlanStepsEnabled: true, automaticStepChainingEnabled: true, providerExecutionFromPlansEnabled: true, executionAllowed: true });
assert(sample.actionType === "prepare_plan_preview", "recognized action type may be represented.");
assert(sample.phase === "66", "sample phase must remain 66.");
assert(sample.readinessStatus === "blocked", "sample readiness remains blocked.");
assert(sample.riskTier === "high", "sample risk tier remains high.");
assert(sample.livePlannerReplacementEnabled === false, "factory must force livePlannerReplacementEnabled disabled.");
assert(sample.executablePlanStepsEnabled === false, "factory must force executablePlanStepsEnabled disabled.");
assert(sample.automaticStepChainingEnabled === false, "factory must force automaticStepChainingEnabled disabled.");
assert(sample.providerExecutionFromPlansEnabled === false, "factory must force providerExecutionFromPlansEnabled disabled.");
assert(sample.executionAllowed === false, "factory must force executionAllowed disabled.");
[
  "fetch(",
  "XMLHttpRequest",
  "axios",
  "EventSource",
  "WebSocket",
  "localStorage",
  "sessionStorage",
  "indexedDB",
  "window.location",
  "document.location",
  "addEventListener",
  "onclick",
  "setInterval",
  "setTimeout",
  "executePlan(",
  "runPlanStep(",
  "callProvider(",
  "openPayment("
].forEach(forbidden => assert(!contractSource.includes(forbidden), `contract module must not include runtime behavior: ${forbidden}`));
[
  "nexus-task-planning-readiness-contract.js",
  "NexusTaskPlanningReadinessContract",
  "taskPlanningReadiness",
  "TASK_PLANNING_READINESS_CONTRACT"
].forEach(runtimeHook => { assert(!index.includes(runtimeHook), `index.html must not load ${runtimeHook}.`); assert(!app.includes(runtimeHook), `app.js must not consume ${runtimeHook}.`); assert(!server.includes(runtimeHook), `server.js must not consume ${runtimeHook}.`); });
assert(packageData.scripts["qa:nexus-task-planning-readiness-contract"] === "node scripts/nexus-task-planning-readiness-contract-qa.js", "package.json must expose qa:nexus-task-planning-readiness-contract.");
assert(qaSuite.includes("scripts/nexus-task-planning-readiness-contract-qa.js"), "qa-suite.js must include Phase 66 QA.");
console.log("[nexus-task-planning-readiness-contract-qa] passed");
