const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const plannerPath = path.join(root, "public", "nexus-planner.js");
const appPath = path.join(root, "public", "app.js");
const serverPath = path.join(root, "server.js");
const plannerDocPath = path.join(root, "docs", "NEXUS_PLANNER_MODEL.md");
const observationDocPath = path.join(root, "docs", "NEXUS_PLAN_OBSERVATION_MODEL.md");
const hardeningDocPath = path.join(root, "docs", "NEXUS_PLANNER_SAFETY_HARDENING.md");

const planner = require(plannerPath);
const classifier = require(path.join(root, "public", "nexus-intent-classifier.js"));
const registry = require(path.join(root, "public", "nexus-tool-registry.js"));
const policy = require(path.join(root, "public", "nexus-policy-engine.js"));

const plannerSource = fs.readFileSync(plannerPath, "utf8");
const appSource = fs.readFileSync(appPath, "utf8");
const serverSource = fs.readFileSync(serverPath, "utf8");
const plannerDoc = fs.readFileSync(plannerDocPath, "utf8");
const observationDoc = fs.readFileSync(observationDocPath, "utf8");
const hardeningDoc = fs.readFileSync(hardeningDocPath, "utf8");

const dangerousKeys = new Set([
  "handler",
  "callback",
  "execute",
  "executor",
  "adapter",
  "openUrl",
  "deepLink",
  "routeTo",
  "modalId",
  "permissionRequest",
  "paymentIntent",
  "phoneNumberToDial",
  "messageToSend",
  "providerHandoff"
]);

const requiredPrompts = [
  { prompt: "Help me find agriculture training", allowedStatuses: ["informational", "preview_only"], risk: "low" },
  { prompt: "Teach me how irrigation works", allowedStatuses: ["informational", "preview_only"], risk: "low" },
  { prompt: "Show me farm jobs", allowedStatuses: ["informational", "preview_only"], risk: "low" },
  { prompt: "Browse AgriTrade", allowedStatuses: ["informational", "preview_only"], risk: "low" },
  { prompt: "I need help with crop issues", allowedStatuses: ["informational", "preview_only"], risk: "low" },
  { prompt: "Nexus, use my location", allowedStatuses: ["permission_required"], risk: "sensitive" },
  { prompt: "Call John", allowedStatuses: ["needs_clarification", "permission_required", "confirmation_required"], risk: "high" },
  { prompt: "Call the provider", allowedStatuses: ["permission_required", "confirmation_required", "needs_clarification"], risk: "high" },
  { prompt: "open video for provider to show injury", allowedStatuses: ["permission_required"], risk: "sensitive" },
  { prompt: "Buyer Pay", allowedStatuses: ["permission_required", "confirmation_required", "not_implemented", "blocked"], risk: "high" },
  { prompt: "launch the moon tractor", allowedStatuses: ["needs_clarification", "not_implemented", "blocked"], risk: "high" }
];

function walk(value, visitor, pathParts = []) {
  visitor(value, pathParts);
  if (Array.isArray(value)) {
    value.forEach((item, index) => walk(item, visitor, [...pathParts, String(index)]));
    return;
  }
  if (value && typeof value === "object") {
    for (const [key, child] of Object.entries(value)) {
      walk(child, visitor, [...pathParts, key]);
    }
  }
}

function finalStepStatus(plan) {
  return plan.steps[plan.steps.length - 1]?.status;
}

function assertNoDangerousPlanShape(plan, prompt) {
  assert.strictEqual(plan.canExecute, false, `${prompt} plan canExecute must remain false`);
  assert.strictEqual(plan.executionMode, "plan_only", `${prompt} plan must remain plan_only`);
  for (const item of plan.steps) {
    assert.strictEqual(item.canExecute, false, `${prompt} step ${item.stepId} canExecute must remain false`);
  }

  walk(plan, (value, pathParts) => {
    const key = pathParts[pathParts.length - 1] || "";
    assert(!dangerousKeys.has(key), `${prompt} plan must not include dangerous key ${pathParts.join(".")}`);
    assert.notStrictEqual(typeof value, "function", `${prompt} plan must not include function value at ${pathParts.join(".")}`);
  });
}

function assertPromptPlan(testCase) {
  const intent = classifier.classifyNexusIntent({ text: testCase.prompt });
  const tool = intent.selectedToolId
    ? registry.getNexusToolById(intent.selectedToolId)
    : registry.findNexusToolsByIntent(intent.id)[0] || null;
  const policyDecision = policy.buildNexusPolicyDecision(intent, tool, {
    text: testCase.prompt,
    command: testCase.prompt,
    source: "planner-safety-hardening-qa"
  });
  const plan = planner.createNexusPlan({
    text: testCase.prompt,
    intentClassification: intent,
    toolMetadata: tool,
    policyDecision
  });
  const validation = planner.validateNexusPlan(plan);

  assert.strictEqual(validation.ok, true, `${testCase.prompt} plan should validate: ${validation.errors.join(", ")}`);
  assertNoDangerousPlanShape(plan, testCase.prompt);
  assert.strictEqual(plan.policyStatus, policyDecision.status, `${testCase.prompt} plan should mirror policy status`);
  assert(testCase.allowedStatuses.includes(finalStepStatus(plan)), `${testCase.prompt} final status ${finalStepStatus(plan)} should be one of ${testCase.allowedStatuses.join(", ")}`);
  if (testCase.risk) assert.strictEqual(plan.risk, testCase.risk, `${testCase.prompt} risk mismatch`);
  if (["sensitive", "high"].includes(plan.risk)) {
    assert(["permission_required", "confirmation_required", "blocked", "not_implemented", "needs_clarification"].includes(finalStepStatus(plan)), `${testCase.prompt} sensitive/high plan must stay gated or blocked`);
  }
  return { intent, tool, policyDecision, plan };
}

assert.strictEqual(typeof planner.createNexusPlan, "function", "planner must expose createNexusPlan");
assert.strictEqual(typeof planner.buildNexusPlan, "function", "planner must expose buildNexusPlan");
assert.strictEqual(typeof planner.validateNexusPlan, "function", "planner must expose validateNexusPlan");
assert.strictEqual(typeof planner.getNexusPlanningStatuses, "function", "planner must expose getNexusPlanningStatuses");
assert.deepStrictEqual(
  Object.keys(planner).sort(),
  ["buildNexusPlan", "createNexusPlan", "getNexusPlanningStatuses", "validateNexusPlan"].sort(),
  "planner must not expose execution APIs"
);

assert(!/(^|[^\w])(handler|callback|execute|executor|adapter)\s*:/i.test(plannerSource), "planner source must not define executable handler/callback/adapter fields");
assert(!/\b(openWorkflow|goSection|mutate|request\(|confirm\(|confirmPending|stage\(|stagePending|dispatch\(|getUserMedia|geolocation\.|ACTION_CALL|window\.open|location\.href|click\(\))/i.test(plannerSource), "planner source must not route, mutate, request permissions, open providers, or execute");
assert(!/createPending|agentPendingAction|pendingAction\s*=|outboundCalls\.push|transactions\.push|messages\.push/i.test(plannerSource), "planner source must not create pending actions or records");

for (const testCase of requiredPrompts) {
  assertPromptPlan(testCase);
}

const unsafePlan = planner.createNexusPlan({ text: "Call John" });
assert.strictEqual(planner.validateNexusPlan({ ...unsafePlan, canExecute: true }).ok, false, "validator must reject executable plans");
assert.strictEqual(
  planner.validateNexusPlan({ ...unsafePlan, steps: [{ ...unsafePlan.steps[0], canExecute: true }] }).ok,
  false,
  "validator must reject executable steps"
);
assert.strictEqual(
  planner.validateNexusPlan({ ...unsafePlan, handler: "openWorkflow" }).ok,
  true,
  "Phase 11F4 dangerous-key rejection is enforced by safety QA, not runtime mutation"
);

assert.match(serverSource, /const plannerObservation = \{[\s\S]*executionAuthority:\s*"none"[\s\S]*canExecute:\s*false/, "server plannerObservation must keep executionAuthority none");
assert.match(serverSource, /nexusPlan,[\s\S]{0,260}plannerObservation/, "server should attach planner metadata additively");
assert.match(appSource, /nexusPlan metadata is observation-only/i, "frontend should document nexusPlan observation-only boundary");
assert.match(appSource, /const nexusPlan = response\?\.metadata\?\.nexusPlan \|\| agentAction\.nexusPlan \|\| null/, "frontend should observe nexusPlan metadata");
assert.match(appSource, /plannerObservation,\s*\n\s*controlledActionMetadata/, "frontend observation record should include plannerObservation");
const observeStart = appSource.indexOf("function observeAgentActionMetadata");
const observeEnd = appSource.indexOf("const countryLanguageMap", observeStart);
assert(observeStart >= 0 && observeEnd > observeStart, "frontend observation helper should be extractable");
const observationHelper = appSource.slice(observeStart, observeEnd);
for (const forbidden of [
  "openWorkflowModal",
  "openWorkflowByVoice",
  "executeWorkflowConfigFromVoice",
  "executeWorkflow",
  "confirmWorkflow",
  "confirmPending",
  "stageAgentAction",
  "maybeDispatchConfirmedNativeCallHandoff",
  "goSection(",
  "mutate(",
  "request(",
  "getUserMedia",
  "geolocation"
]) {
  assert(!observationHelper.includes(forbidden), `frontend observation helper must not call ${forbidden}`);
}

for (const doc of [plannerDoc, observationDoc, hardeningDoc]) {
  assert.match(doc, /not execution authority|advisory|observation-only|non-executing/i, "planner docs must preserve non-execution language");
}
for (const key of dangerousKeys) {
  assert.match(hardeningDoc, new RegExp(key, "i"), `hardening doc must document dangerous key ${key}`);
}
assert.match(hardeningDoc, /Phase 11G/i, "hardening doc should define readiness criteria for Phase 11G");

console.log("Nexus planner safety hardening QA passed");
requiredPrompts.forEach(testCase => console.log(`- ${testCase.prompt} -> non-executing plan`));
