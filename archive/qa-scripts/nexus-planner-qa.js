const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const plannerPath = path.join(root, "public", "nexus-planner.js");
const indexPath = path.join(root, "public", "index.html");
const appPath = path.join(root, "public", "app.js");
const serverPath = path.join(root, "server.js");
const docPath = path.join(root, "docs", "NEXUS_PLANNER_MODEL.md");

const planner = require(plannerPath);
const classifier = require(path.join(root, "public", "nexus-intent-classifier.js"));
const registry = require(path.join(root, "public", "nexus-tool-registry.js"));
const policy = require(path.join(root, "public", "nexus-policy-engine.js"));

const plannerSource = fs.readFileSync(plannerPath, "utf8");
const index = fs.readFileSync(indexPath, "utf8");
const app = fs.readFileSync(appPath, "utf8");
const server = fs.readFileSync(serverPath, "utf8");
const doc = fs.readFileSync(docPath, "utf8");

const requiredPlanFields = [
  "planId",
  "sourceText",
  "intentId",
  "toolId",
  "domain",
  "risk",
  "policyStatus",
  "summary",
  "steps",
  "requiredInputs",
  "permissionGates",
  "confirmationGates",
  "blockedActions",
  "safeAlternatives",
  "nextSafeStep",
  "canExecute",
  "executionMode",
  "plannerSource",
  "createdAt",
  "notes"
];

const requiredStepFields = [
  "stepId",
  "order",
  "label",
  "description",
  "intentId",
  "toolId",
  "risk",
  "status",
  "requiresPermission",
  "requiresConfirmation",
  "canExecute",
  "blockedReason",
  "userVisible",
  "notes"
];

const validStatuses = planner.getNexusPlanningStatuses();

assert.strictEqual(typeof planner.createNexusPlan, "function", "planner must export createNexusPlan");
assert.strictEqual(typeof planner.buildNexusPlan, "function", "planner must export buildNexusPlan");
assert.strictEqual(typeof planner.validateNexusPlan, "function", "planner must export validateNexusPlan");
assert.strictEqual(typeof planner.getNexusPlanningStatuses, "function", "planner must export getNexusPlanningStatuses");

for (const status of [
  "informational",
  "preview_only",
  "needs_clarification",
  "permission_required",
  "confirmation_required",
  "blocked",
  "not_implemented",
  "future_pending_action",
  "complete_without_execution"
]) {
  assert(validStatuses.includes(status), `planner statuses must include ${status}`);
}

function assertPlan(prompt, expected = {}) {
  const plan = planner.createNexusPlan(prompt);
  for (const field of requiredPlanFields) {
    assert(Object.prototype.hasOwnProperty.call(plan, field), `${prompt} plan missing ${field}`);
  }
  assert.strictEqual(plan.sourceText, prompt, `${prompt} sourceText should be preserved`);
  assert.strictEqual(plan.canExecute, false, `${prompt} plan must not execute`);
  assert.strictEqual(plan.executionMode, "plan_only", `${prompt} executionMode must be plan_only`);
  assert(Array.isArray(plan.steps) && plan.steps.length >= 2, `${prompt} should have structured steps`);
  assert(Array.isArray(plan.notes) && plan.notes.some(note => /non-executing|routers remain authoritative|canExecute/i.test(note)), `${prompt} should explain non-execution`);
  for (const step of plan.steps) {
    for (const field of requiredStepFields) {
      assert(Object.prototype.hasOwnProperty.call(step, field), `${prompt} step ${step.stepId || "unknown"} missing ${field}`);
    }
    assert(validStatuses.includes(step.status), `${prompt} step ${step.stepId} status ${step.status} must be valid`);
    assert.strictEqual(step.canExecute, false, `${prompt} step ${step.stepId} must not execute`);
  }
  assert.strictEqual(planner.validateNexusPlan(plan).ok, true, `${prompt} plan should validate`);
  const intent = classifier.classifyNexusIntent(prompt);
  const policyDecision = policy.evaluateNexusPolicy(prompt);
  assert.strictEqual(plan.intentId, intent.id, `${prompt} should align with classifier intent`);
  assert.strictEqual(plan.policyStatus, policyDecision.status, `${prompt} should align with policy decision`);
  if (intent.selectedToolId) {
    const selectedTool = registry.getNexusToolById(intent.selectedToolId);
    assert(
      plan.toolId === intent.selectedToolId || plan.toolId === selectedTool?.id,
      `${prompt} should align with selectedToolId or concrete registry tool`
    );
  }
  if (expected.statuses) assert(expected.statuses.includes(plan.steps[plan.steps.length - 1].status), `${prompt} final step status ${plan.steps[plan.steps.length - 1].status} should be expected`);
  if (expected.risk) assert.strictEqual(plan.risk, expected.risk, `${prompt} risk mismatch`);
  if (expected.permissionGate) assert(plan.permissionGates.some(gate => gate.type === expected.permissionGate), `${prompt} should include ${expected.permissionGate} permission gate`);
  if (expected.confirmation) assert(plan.confirmationGates.length > 0 || ["needs_clarification", "confirmation_required"].includes(plan.steps[plan.steps.length - 1].status), `${prompt} should stay confirmation/clarification guarded`);
  return plan;
}

const lowRiskPrompts = [
  "Help me find agriculture training",
  "Teach me how irrigation works",
  "Show me farm jobs",
  "Browse AgriTrade",
  "I need help with crop issues"
];
for (const prompt of lowRiskPrompts) {
  const plan = assertPlan(prompt, { statuses: ["preview_only", "informational"], risk: "low" });
  assert(["allow_route", "allow_preview", "allow_answer"].includes(plan.policyStatus), `${prompt} should be low-risk policy`);
  assert.strictEqual(plan.permissionGates.length, 0, `${prompt} should not require permission gates`);
  assert.strictEqual(plan.confirmationGates.length, 0, `${prompt} should not require confirmation gates`);
}

assertPlan("Nexus, use my location", { statuses: ["permission_required"], permissionGate: "location" });
assertPlan("open video for provider to show injury", { statuses: ["permission_required"], permissionGate: "camera" });
assertPlan("Call John", { statuses: ["needs_clarification", "permission_required", "confirmation_required"], confirmation: true });
assertPlan("Call the provider", { statuses: ["permission_required", "confirmation_required"], confirmation: true });
assertPlan("Buyer Pay", { statuses: ["permission_required", "confirmation_required", "blocked", "not_implemented"], confirmation: true });
assertPlan("launch the moon tractor", { statuses: ["needs_clarification"], risk: "controlled" });

const explicitIntent = classifier.classifyNexusIntent("Browse AgriTrade");
const explicitTool = registry.getNexusToolById("marketplace.agritrade");
const explicitPolicy = policy.buildNexusPolicyDecision(explicitIntent, explicitTool, { text: "Browse AgriTrade" });
const explicitPlan = planner.buildNexusPlan(explicitIntent, explicitTool, explicitPolicy, { sourceText: "Browse AgriTrade", createdAt: "2026-06-23T00:00:00.000Z" });
assert.strictEqual(explicitPlan.toolId, "marketplace.agritrade", "buildNexusPlan should accept explicit tool metadata");
assert.strictEqual(explicitPlan.policyStatus, explicitPolicy.status, "buildNexusPlan should accept explicit policy metadata");
assert.strictEqual(explicitPlan.canExecute, false, "explicit plans must remain non-executing");

const unsafePlan = { ...explicitPlan, canExecute: true };
assert.strictEqual(planner.validateNexusPlan(unsafePlan).ok, false, "validator must reject executable plans");
const unsafeStepPlan = { ...explicitPlan, steps: [{ ...explicitPlan.steps[0], canExecute: true }] };
assert.strictEqual(planner.validateNexusPlan(unsafeStepPlan).ok, false, "validator must reject executable steps");

assert.match(index, /nexus-planner\.js\?v=nexus-behavior-304/, "browser should load planner");
assert(index.indexOf("nexus-policy-engine.js") < index.indexOf("nexus-planner.js"), "policy engine should load before planner");
assert(index.indexOf("nexus-planner.js") < index.indexOf("app.js"), "planner should load before app");

assert(!/(^|[^\w])(handler|callback|execute|adapter)\s*:/i.test(plannerSource), "planner must not define executable handlers/adapters");
assert(!/\b(openWorkflow|goSection|mutate|request\(|confirm\(|confirmPending|stage\(|stagePending|dispatch\(|getUserMedia|geolocation\.|ACTION_CALL|window\.open|location\.href|click\(\))/i.test(plannerSource), "planner must not route, mutate, request permissions, open providers, or execute");
assert(!/createPending|agentPendingAction|pendingAction\s*=|outboundCalls\.push|transactions\.push|messages\.push/i.test(plannerSource), "planner must not create pending actions or records");
assert(!/NexusPlanner[\s\S]{0,240}(openWorkflow|goSection|request\(|confirm|execute|stage|dispatch)/i.test(app), "frontend must not execute from planner metadata");
assert(!/NexusPlanner[\s\S]{0,240}(openWorkflow|goSection|request\(|confirm|execute|stage|dispatch)/i.test(server), "backend must not execute from planner metadata");
assert.match(doc, /canExecute.*false/i, "planner model doc must document canExecute false");
assert.match(doc, /Existing routers remain authoritative/i, "planner model doc must preserve router authority");

console.log("Nexus planner QA passed");
lowRiskPrompts.forEach(prompt => console.log(`- ${prompt} -> preview_only`));
console.log("- Nexus, use my location -> permission_required");
console.log("- open video for provider to show injury -> permission_required");
console.log("- Call John -> guarded");
console.log("- Buyer Pay -> guarded");
