const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const memoryPath = path.join(root, "public", "nexus-session-memory.js");
const indexPath = path.join(root, "public", "index.html");
const appPath = path.join(root, "public", "app.js");
const serverPath = path.join(root, "server.js");
const plannerPath = path.join(root, "public", "nexus-planner.js");
const policyPath = path.join(root, "public", "nexus-policy-engine.js");
const registryPath = path.join(root, "public", "nexus-tool-registry.js");
const architectureDocPath = path.join(root, "docs", "NEXUS_SESSION_MEMORY_PENDING_TASK_ARCHITECTURE.md");
const modelDocPath = path.join(root, "docs", "NEXUS_SESSION_MEMORY_MODEL.md");

const memory = require(memoryPath);
const planner = require(plannerPath);
const policy = require(policyPath);
const registry = require(registryPath);

const memorySource = fs.readFileSync(memoryPath, "utf8");
const indexSource = fs.readFileSync(indexPath, "utf8");
const appSource = fs.readFileSync(appPath, "utf8");
const serverSource = fs.readFileSync(serverPath, "utf8");
const architectureDoc = fs.readFileSync(architectureDocPath, "utf8");
const modelDoc = fs.readFileSync(modelDocPath, "utf8");

const expectedExports = [
  "clearNexusSessionContext",
  "createNexusPendingTask",
  "createNexusSessionContext",
  "getNexusSessionMemorySchema",
  "redactSensitiveText",
  "resetNexusSessionContext",
  "sanitizeSessionMemoryValue",
  "serializeNexusPendingTask",
  "serializeNexusSessionMemory",
  "validateNexusSessionMemorySnapshot"
];

for (const name of expectedExports) {
  assert.equal(typeof memory[name], "function", `session memory must export ${name}`);
}

const schema = memory.getNexusSessionMemorySchema();
assert.equal(schema.schemaVersion, "nexus-session-memory.v1", "schema version should be explicit");
assert.equal(schema.canExecuteAlwaysFalse, true, "schema should document canExecute false");
assert.equal(schema.executionAuthority, "none", "schema should document no execution authority");
assert.equal(schema.persistence, "in_memory_only", "schema should remain in-memory only");

const context = memory.createNexusSessionContext({
  sessionId: "session.local.test",
  currentDomain: "learning",
  currentWorkflowSurface: "Ask Nexus",
  lastIntentCategory: "training",
  lastIntentId: "learning.training.find",
  lastToolId: "workforce.training",
  activeTopic: "agriculture training",
  safeSummary: "User is exploring training options.",
  phone: "+1 555 123 4567",
  email: "patient@example.com",
  nonSensitiveHints: [
    "prefers short lessons",
    { phoneNumber: "+1 555 111 2222", topic: "irrigation basics" }
  ]
});

assert.equal(context.schemaVersion, "nexus-session-memory.v1", "context should include schema version");
assert.equal(context.currentDomain, "learning", "context should preserve safe broad domain");
assert.equal(context.canExecute, false, "context canExecute must be false");
assert.equal(context.executionAuthority, "none", "context executionAuthority must be none");
assert(!Object.prototype.hasOwnProperty.call(context, "phone"), "context should not keep sensitive phone key");
assert(!Object.prototype.hasOwnProperty.call(context, "email"), "context should not keep sensitive email key");
assert(!JSON.stringify(context).includes("555 111"), "context nested hints should remove raw phone numbers");

const reset = memory.resetNexusSessionContext(context, "profile_switch");
assert.equal(reset.sessionId, context.sessionId, "reset may preserve short-lived session id");
assert.equal(reset.currentDomain, "general", "reset should clear domain");
assert.equal(reset.activeTopic, "", "reset should clear active topic");
assert.equal(reset.safeSummary, "", "reset should clear summary");
assert.equal(reset.resetReason, "profile_switch", "reset should preserve safe reset reason");
assert.equal(reset.canExecute, false, "reset context remains non-executing");

const dangerousTask = memory.createNexusPendingTask({
  taskId: "task.call.john",
  sessionId: "session.local.test",
  sourceText: "Call John at +1 555 999 8888",
  intentId: "communications.outbound_contact.controlled",
  toolId: "communications.call_contact",
  domain: "communications",
  risk: "high",
  actionType: "provider_handoff",
  provider: "whatsapp",
  phoneNumberToDial: "+1 555 999 8888",
  telUrl: "tel:+15559998888",
  canExecute: true,
  executionAuthority: "provider",
  confirmationGates: [{ type: "explicit", allowedConfirmations: ["yes", "confirm", "do it"], phone: "+1 555 000 1111" }],
  nextSafeStep: "Ask for final confirmation. Do not call +1 555 999 8888."
});

assert.equal(dangerousTask.canExecute, false, "pending task canExecute must be false even when input asks otherwise");
assert.equal(dangerousTask.executionAuthority, "none", "pending task executionAuthority must be none even when input asks otherwise");
assert.equal(dangerousTask.actionType, "context_only", "executable action types should be downgraded to context_only");
assert.equal(dangerousTask.status, "blocked", "executable action type requests should be blocked as memory tasks");
assert(!Object.prototype.hasOwnProperty.call(dangerousTask, "provider"), "provider details should not be retained");
assert(!Object.prototype.hasOwnProperty.call(dangerousTask, "phoneNumberToDial"), "phoneNumberToDial should not be retained");
assert(!Object.prototype.hasOwnProperty.call(dangerousTask, "telUrl"), "telUrl should not be retained");
assert(!JSON.stringify(dangerousTask).includes("555 999"), "pending task should not contain raw phone number");

for (const actionType of ["call", "message", "payment", "location", "camera", "marketplace", "account", "health", "emergency", "external_execution"]) {
  const task = memory.createNexusPendingTask({ actionType, risk: "high" });
  assert.equal(task.canExecute, false, `${actionType} task canExecute must be false`);
  assert.equal(task.executionAuthority, "none", `${actionType} task executionAuthority must be none`);
  assert.equal(task.actionType, "context_only", `${actionType} should not remain executable action type`);
}

const serialized = memory.serializeNexusSessionMemory(context, [dangerousTask]);
assert.equal(serialized.canExecute, false, "serialized memory canExecute must be false");
assert.equal(serialized.executionAuthority, "none", "serialized memory executionAuthority must be none");
assert.equal(serialized.pendingTasks.length, 1, "serialized memory should include safe task summary");
assert.equal(memory.validateNexusSessionMemorySnapshot(serialized).ok, true, "serialized memory snapshot should validate");
assert(!JSON.stringify(serialized).includes("patient@example.com"), "serialized memory should exclude raw email");
assert(!JSON.stringify(serialized).includes("+1 555"), "serialized memory should exclude raw phone");
assert(!/(phoneNumberToDial|telUrl|deepLink|openUrl|providerUrl|nativeBridge|paymentIntent|messageToSend|routeTo|modalId|permissionRequest)/.test(JSON.stringify(serialized)), "serialized memory should exclude executable fields");

for (const forbidden of [
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
  "nativeBridge",
  "openWorkflow",
  "confirmPending",
  "agentPendingAction",
  "outboundCalls.push",
  "transactions.push",
  "messages.push"
]) {
  assert(!memorySource.includes(forbidden), `session memory source must not include ${forbidden}`);
}

assert(!indexSource.includes("nexus-session-memory.js"), "session memory should not be loaded into active browser runtime yet");
assert(!appSource.includes("NexusSessionMemory"), "app should not consume session memory yet");
assert(!serverSource.includes("NexusSessionMemory"), "server should not consume session memory yet");

assert.equal(typeof planner.createNexusPlan, "function", "planner should remain available");
assert.equal(typeof policy.buildNexusPolicyDecision, "function", "policy engine should remain available");
assert.equal(typeof registry.getNexusToolRegistry, "function", "tool registry should remain available");
const plan = planner.createNexusPlan("Call John");
assert.equal(plan.canExecute, false, "planner safety posture should remain non-executing");

assert.match(architectureDoc, /Session memory is context, not authority/i, "architecture doc should preserve context-not-authority rule");
assert.match(architectureDoc, /canExecute:\s*false/i, "architecture doc should require canExecute false");
assert.match(architectureDoc, /executionAuthority:\s*"none"/i, "architecture doc should require executionAuthority none");
assert.match(modelDoc, /context, not authority/i, "model doc should explain memory is context not authority");
assert.match(modelDoc, /must never store/i, "model doc should define forbidden storage");
assert.match(modelDoc, /in-memory/i, "model doc should document in-memory posture");
assert.match(modelDoc, /not execution authority|non-executing/i, "model doc should document non-execution");

console.log("Nexus session memory QA passed");
console.log("- session context defaults are non-executing");
console.log("- reset clears context");
console.log("- pending tasks cannot gain execution authority");
console.log("- serialization excludes sensitive and executable fields");
