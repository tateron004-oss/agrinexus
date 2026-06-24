const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const policyPath = path.join(root, "public", "nexus-policy-engine.js");
const classifierPath = path.join(root, "public", "nexus-intent-classifier.js");
const registryPath = path.join(root, "public", "nexus-tool-registry.js");
const indexPath = path.join(root, "public", "index.html");
const appPath = path.join(root, "public", "app.js");
const serverPath = path.join(root, "server.js");
const docPath = path.join(root, "docs", "NEXUS_POLICY_ENGINE_MODEL.md");

const policy = require(policyPath);
const classifier = require(classifierPath);
const registry = require(registryPath);
const index = fs.readFileSync(indexPath, "utf8");
const app = fs.readFileSync(appPath, "utf8");
const server = fs.readFileSync(serverPath, "utf8");
const doc = fs.readFileSync(docPath, "utf8");

const requiredFields = [
  "decisionId",
  "intentId",
  "toolId",
  "domain",
  "risk",
  "actionType",
  "status",
  "allowed",
  "requiresPermission",
  "permissionType",
  "requiresConfirmation",
  "confirmationType",
  "blocked",
  "blockReason",
  "clarificationRequired",
  "clarificationPrompt",
  "previewOnly",
  "canRoute",
  "canExecute",
  "executionStatus",
  "nextSafeStep",
  "policySource",
  "notes"
];

assert.strictEqual(typeof policy.evaluateNexusPolicy, "function", "policy engine must export evaluateNexusPolicy");
assert.strictEqual(typeof policy.buildNexusPolicyDecision, "function", "policy engine must export buildNexusPolicyDecision");
assert.strictEqual(typeof policy.validateNexusPolicyDecision, "function", "policy engine must export validateNexusPolicyDecision");
assert.strictEqual(typeof policy.getNexusPolicyRules, "function", "policy engine must export getNexusPolicyRules");
assert(policy.getNexusPolicyRules().advisoryOnly, "policy rules must be advisory-only");
assert(policy.getNexusPolicyRules().canExecuteAlwaysFalse, "policy rules must force canExecute false");

function evaluate(prompt) {
  const decision = policy.evaluateNexusPolicy(prompt);
  for (const field of requiredFields) {
    assert(Object.prototype.hasOwnProperty.call(decision, field), `${prompt} decision missing ${field}`);
  }
  assert.strictEqual(decision.canExecute, false, `${prompt} must never execute in Phase 11D`);
  assert.strictEqual(policy.validateNexusPolicyDecision(decision).ok, true, `${prompt} decision should validate`);
  assert(Array.isArray(decision.notes) && decision.notes.length, `${prompt} decision needs notes`);
  return decision;
}

const lowRisk = [
  ["Help me find agriculture training", "allow_route", "workforce.training"],
  ["Teach me how irrigation works", "allow_route", "learning.irrigation"],
  ["Show me farm jobs", "allow_route", "workforce.job_pathways"],
  ["Browse AgriTrade", "allow_route", "marketplace.agritrade"],
  ["I need help with crop issues", "allow_route", "agriculture.crop_help"]
];

for (const [prompt, expectedStatus, expectedToolId] of lowRisk) {
  const decision = evaluate(prompt);
  assert.strictEqual(decision.status, expectedStatus, `${prompt} should allow low-risk route/preview`);
  assert.strictEqual(decision.risk, "low", `${prompt} should be low risk`);
  assert.strictEqual(decision.allowed, true, `${prompt} should be allowed only as preview/route`);
  assert.strictEqual(decision.previewOnly, true, `${prompt} should be preview-only`);
  assert.strictEqual(decision.canExecute, false, `${prompt} must not execute`);
  assert.strictEqual(decision.toolId, expectedToolId, `${prompt} should map expected policy tool`);
}

const permissioned = [
  ["Nexus, use my location", "location"],
  ["open map", "location"],
  ["find nearby providers", "location"],
  ["open camera", "camera"],
  ["open video for provider to show injury", "camera"],
  ["start a telehealth video call", "medical"]
];

for (const [prompt, permissionType] of permissioned) {
  const decision = evaluate(prompt);
  assert.strictEqual(decision.status, "require_permission", `${prompt} should require permission`);
  assert.strictEqual(decision.risk, "sensitive", `${prompt} should be sensitive`);
  assert.strictEqual(decision.requiresPermission, true, `${prompt} should require permission`);
  assert.strictEqual(decision.allowed, false, `${prompt} should not be allowed`);
  assert.strictEqual(decision.permissionType, permissionType, `${prompt} permission type should be ${permissionType}`);
  assert.strictEqual(decision.canExecute, false, `${prompt} must not execute`);
}

const highRisk = [
  ["Call John", "clarify"],
  ["Call the provider", "require_permission"],
  ["Call Maria on WhatsApp", "require_permission"],
  ["Message the seller", "require_permission"],
  ["Pay the buyer", "require_permission"],
  ["Process marketplace payment", "require_permission"],
  ["Log into my account", "require_permission"],
  ["Verify my identity", "require_permission"],
  ["My baby is not breathing", "require_permission"]
];

for (const [prompt, expectedStatus] of highRisk) {
  const decision = evaluate(prompt);
  assert.strictEqual(decision.status, expectedStatus, `${prompt} should remain guarded`);
  assert(["high", "sensitive"].includes(decision.risk), `${prompt} should be high/sensitive`);
  assert.strictEqual(decision.allowed, false, `${prompt} should not be allowed`);
  assert.strictEqual(decision.canExecute, false, `${prompt} must not execute`);
  assert(decision.requiresConfirmation || decision.requiresPermission || decision.clarificationRequired, `${prompt} must require confirmation, permission, or clarification`);
}

const callJohn = evaluate("Call John");
assert.strictEqual(callJohn.clarificationRequired, true, "Call John should require contact/number clarification without context");
assert.match(callJohn.clarificationPrompt, /who|contact/i, "Call John should ask who to contact");

const unknown = evaluate("launch the moon tractor");
assert(["clarify", "unsupported"].includes(unknown.status), "unknown prompt should clarify or be unsupported");
assert.strictEqual(unknown.allowed, false, "unknown prompt should not be allowed");
assert.strictEqual(unknown.canExecute, false, "unknown prompt must not execute");

const futurePlan = policy.buildNexusPolicyDecision(
  classifier.classifyNexusIntent("launch the moon tractor"),
  registry.getNexusToolById("planning.autonomous_multistep"),
  {}
);
assert.strictEqual(futurePlan.status, "blocked", "blocked future planning tool should be blocked");
assert.strictEqual(futurePlan.blocked, true, "blocked future planning tool should set blocked");
assert.strictEqual(futurePlan.canExecute, false, "blocked future planning tool must not execute");

const nativeBridge = policy.buildNexusPolicyDecision(
  classifier.classifyNexusIntent("Call John"),
  registry.getNexusToolById("communications.native_phone_bridge"),
  {}
);
assert.strictEqual(nativeBridge.status, "not_implemented", "future native phone bridge should be not implemented");
assert.strictEqual(nativeBridge.canExecute, false, "future native phone bridge must not execute");

const unsafeDecision = { ...evaluate("Browse AgriTrade"), canExecute: true };
assert.strictEqual(policy.validateNexusPolicyDecision(unsafeDecision).ok, false, "validation must reject canExecute true");

assert.match(index, /nexus-policy-engine\.js\?v=nexus-behavior-304/, "browser should load policy engine");
assert(index.indexOf("nexus-tool-registry.js") < index.indexOf("nexus-policy-engine.js"), "registry should load before policy engine");
assert(index.indexOf("nexus-intent-classifier.js") < index.indexOf("nexus-policy-engine.js"), "classifier should load before policy engine");
assert(!/evaluateNexusPolicy[\s\S]{0,240}(openWorkflow|goSection|mutate|request\(|confirm|execute|stage|dispatch)/i.test(app), "frontend must not execute from policy decisions");
assert(!/evaluateNexusPolicy[\s\S]{0,240}(openWorkflow|goSection|mutate|request\(|confirm|execute|stage|dispatch)/i.test(server), "backend must not execute from policy decisions");
assert(!/(^|[^\w])(handler|callback|execute|adapter)\s*:/i.test(fs.readFileSync(policyPath, "utf8")), "policy engine must not define executable handlers/adapters");
assert.match(doc, /canExecute.*false/i, "policy model doc must document canExecute false");
assert.match(doc, /existing routers remain authoritative/i, "policy model doc must preserve router authority");

console.log("Nexus policy engine QA passed");
lowRisk.forEach(([prompt, status]) => console.log(`- ${prompt} -> ${status}`));
permissioned.forEach(([prompt]) => console.log(`- ${prompt} -> require_permission`));
highRisk.forEach(([prompt, status]) => console.log(`- ${prompt} -> ${status}`));
