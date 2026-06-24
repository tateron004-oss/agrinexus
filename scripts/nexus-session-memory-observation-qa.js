const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const memoryPath = path.join(root, "public", "nexus-session-memory.js");
const appPath = path.join(root, "public", "app.js");
const serverPath = path.join(root, "server.js");
const indexPath = path.join(root, "public", "index.html");
const plannerPath = path.join(root, "public", "nexus-planner.js");
const policyPath = path.join(root, "public", "nexus-policy-engine.js");
const registryPath = path.join(root, "public", "nexus-tool-registry.js");
const modelDocPath = path.join(root, "docs", "NEXUS_SESSION_MEMORY_MODEL.md");
const observationDocPath = path.join(root, "docs", "NEXUS_SESSION_MEMORY_OBSERVATION_QA.md");

const memory = require(memoryPath);
const planner = require(plannerPath);
const policy = require(policyPath);
const registry = require(registryPath);

const memorySource = fs.readFileSync(memoryPath, "utf8");
const appSource = fs.readFileSync(appPath, "utf8");
const serverSource = fs.readFileSync(serverPath, "utf8");
const indexSource = fs.readFileSync(indexPath, "utf8");
const modelDoc = fs.readFileSync(modelDocPath, "utf8");
const observationDoc = fs.readFileSync(observationDocPath, "utf8");

const blockedCategories = [
  "provider",
  "call",
  "message",
  "payment",
  "location",
  "camera",
  "marketplace",
  "account",
  "profile",
  "health",
  "emergency"
];

const forbiddenSourceHooks = [
  "fetch(",
  "XMLHttpRequest",
  "localStorage",
  "sessionStorage",
  "indexedDB",
  "window.open",
  "location.href",
  ".click()",
  "getUserMedia",
  "geolocation",
  "ACTION_CALL",
  "ACTION_DIAL",
  "openWorkflow",
  "confirmPending",
  "agentPendingAction",
  "outboundCalls.push",
  "transactions.push",
  "messages.push"
];

function assertNoSensitiveValues(value, label) {
  const serialized = JSON.stringify(value);
  assert(!serialized.includes("+1 555"), `${label} must not include raw test phone numbers`);
  assert(!serialized.includes("patient@example.com"), `${label} must not include raw email`);
  assert(!serialized.includes("742 Evergreen Terrace"), `${label} must not include address`);
  assert(!serialized.includes("37.7749"), `${label} must not include precise latitude`);
  assert(!serialized.includes("-122.4194"), `${label} must not include precise longitude`);
  assert(!serialized.includes("blood pressure 190/120"), `${label} must not include health details`);
  assert(!serialized.includes("4111 1111 1111 1111"), `${label} must not include payment details`);
  assert(!serialized.includes("super-secret-token"), `${label} must not include credentials`);
  assert(!serialized.includes("tel:+1555"), `${label} must not include tel payloads`);
  assert(!/(phoneNumberToDial|messageToSend|paymentIntent|providerUrl|openUrl|deepLink|routeTo|modalId|permissionRequest)/.test(serialized), `${label} must not include executable payload keys`);
}

function assertReadOnlySnapshot(snapshot, label) {
  assert.equal(snapshot.canExecute, false, `${label} canExecute must be false`);
  assert.equal(snapshot.executionAuthority, "none", `${label} executionAuthority must be none`);
  assert.equal(memory.validateNexusSessionMemorySnapshot(snapshot).ok, true, `${label} should validate as safe`);
  assertNoSensitiveValues(snapshot, label);
}

const context = memory.createNexusSessionContext({
  sessionId: "session.local.observation",
  currentDomain: "learning",
  currentWorkflowSurface: "Ask Nexus",
  lastIntentCategory: "training",
  lastIntentId: "learning.training.find",
  lastToolId: "workforce.training",
  activeTopic: "agriculture training",
  safeSummary: "User is exploring training options.",
  phone: "+1 555 123 4567",
  email: "patient@example.com",
  address: "742 Evergreen Terrace",
  preciseLocation: { lat: "37.7749", lng: "-122.4194" },
  healthDetails: "blood pressure 190/120",
  paymentDetails: "4111 1111 1111 1111",
  credentialToken: "super-secret-token",
  nonSensitiveHints: [
    "prefers short learning steps",
    {
      topic: "irrigation",
      emailAddress: "patient@example.com",
      location: "37.7749,-122.4194"
    }
  ]
});

const pendingTasks = blockedCategories.map(category => memory.createNexusPendingTask({
  taskId: `task.${category}.blocked`,
  sessionId: context.sessionId,
  sourceText: `${category} request for +1 555 987 6543`,
  intentId: `${category}.controlled`,
  toolId: `${category}.tool`,
  domain: category === "provider" ? "communications" : category,
  risk: ["provider", "call", "message", "payment", "health", "emergency"].includes(category) ? "high" : "sensitive",
  actionType: category === "provider" ? "provider_handoff" : category,
  providerUrl: "https://provider.example/launch",
  telUrl: "tel:+15559876543",
  phoneNumberToDial: "+1 555 987 6543",
  messageToSend: "Send private details",
  paymentIntent: "pay-now",
  nativeBridgePayload: { provider: "native-phone" },
  canExecute: true,
  executionAuthority: "provider",
  nextSafeStep: `Do not execute ${category}.`
}));

const snapshot = memory.serializeNexusSessionMemory(context, pendingTasks);
assertReadOnlySnapshot(snapshot, "observation snapshot");

assert.equal(snapshot.context.currentDomain, "learning", "observation should preserve safe broad context");
assert.equal(snapshot.context.currentWorkflowSurface, "Ask Nexus", "observation should preserve safe surface");
assert.equal(snapshot.context.lastIntentId, "learning.training.find", "observation should preserve safe intent id");
assert.equal(snapshot.context.lastToolId, "workforce.training", "observation should preserve safe tool id");
assert.equal(snapshot.pendingTasks.length, 10, "observation should cap pending task summaries to a bounded list");

for (const [index, task] of snapshot.pendingTasks.entries()) {
  const category = blockedCategories[index];
  assert.equal(task.canExecute, false, `${category} observed task must not execute`);
  assert.equal(task.executionAuthority, "none", `${category} observed task must have no execution authority`);
  assert.equal(task.actionType, "context_only", `${category} actionType must be downgraded`);
  assert(["blocked", "context_only"].includes(task.status), `${category} task must stay blocked/context-only`);
  assertNoSensitiveValues(task, `${category} task`);
}

for (const category of blockedCategories) {
  const task = memory.createNexusPendingTask({
    taskId: `task.${category}.single`,
    sessionId: context.sessionId,
    sourceText: `${category} request for +1 555 222 3333`,
    intentId: `${category}.controlled`,
    toolId: `${category}.tool`,
    domain: category === "provider" ? "communications" : category,
    risk: ["provider", "call", "message", "payment", "health", "emergency"].includes(category) ? "high" : "sensitive",
    actionType: category === "provider" ? "provider_handoff" : category,
    canExecute: true,
    executionAuthority: "provider",
    providerUrl: "https://provider.example/launch",
    telUrl: "tel:+15552223333"
  });
  assert.equal(task.canExecute, false, `${category} standalone task must not execute`);
  assert.equal(task.executionAuthority, "none", `${category} standalone task must have no execution authority`);
  assert.equal(task.actionType, "context_only", `${category} standalone actionType must be downgraded`);
  assertNoSensitiveValues(task, `${category} standalone task`);
}

const resetSnapshot = memory.serializeNexusSessionMemory(
  memory.resetNexusSessionContext(context, "observation_qa_reset"),
  []
);
assertReadOnlySnapshot(resetSnapshot, "reset observation snapshot");
assert.equal(resetSnapshot.context.activeTopic, "", "reset observation should clear active topic");
assert.equal(resetSnapshot.context.safeSummary, "", "reset observation should clear summary");

for (const forbidden of forbiddenSourceHooks) {
  assert(!memorySource.includes(forbidden), `session memory source must not introduce ${forbidden}`);
}
assert(!/nativeBridge|providerUrl|telUrl|phoneNumberToDial|messageToSend|paymentIntent/.test(JSON.stringify(snapshot)), "snapshot must not expose provider/native/payment payload keys");

assert(!indexSource.includes("nexus-session-memory.js"), "session memory observation must not be loaded in active browser runtime yet");
assert(!appSource.includes("NexusSessionMemory"), "frontend must not consume session memory observation yet");
assert(!serverSource.includes("NexusSessionMemory"), "backend must not consume session memory observation yet");
assert(!/nexus-session-memory[\s\S]{0,240}(openWorkflow|goSection|request\(|confirm|execute|stage|dispatch|getUserMedia|geolocation)/i.test(`${appSource}\n${serverSource}`), "session memory must not wire into runtime hooks");

const plan = planner.createNexusPlan("Call John");
assert.equal(plan.canExecute, false, "planner remains non-executing");
const policyDecision = policy.evaluateNexusPolicy("Call John");
assert.equal(policyDecision.canExecute, false, "policy remains non-executing");
const callTools = registry.findNexusToolsByIntent("communications.outbound_contact.controlled");
assert(callTools.length > 0, "registry should still expose contact metadata");
for (const tool of callTools) {
  assert(tool.requiresConfirmation || tool.requiresPermission, `${tool.id} must remain guarded`);
  assert.notEqual(tool.executionStatus, "preview_only", `${tool.id} must not become preview-only executable`);
}

assert.match(modelDoc, /Session memory is context, not authority/i, "model doc should preserve context-not-authority language");
assert.match(observationDoc, /read-only/i, "observation doc should describe read-only posture");
assert.match(observationDoc, /must not authorize/i, "observation doc should document no authorization");
assert.match(observationDoc, /canExecute:\s*false/i, "observation doc should preserve canExecute false");
assert.match(observationDoc, /executionAuthority:\s*"none"/i, "observation doc should preserve executionAuthority none");

console.log("Nexus session memory observation QA passed");
console.log("- read-only observation snapshot excludes sensitive data");
console.log("- pending task observations remain non-executing");
console.log("- runtime app/server/session memory wiring remains absent");
console.log("- planner, policy, and registry safety posture remains guarded");
