const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const registryPath = path.join(root, "public", "nexus-tool-registry.js");
const classifierPath = path.join(root, "public", "nexus-intent-classifier.js");
const indexPath = path.join(root, "public", "index.html");
const appPath = path.join(root, "public", "app.js");
const serverPath = path.join(root, "server.js");
const docPath = path.join(root, "docs", "NEXUS_TOOL_REGISTRY_MODEL.md");

const registry = require(registryPath);
const classifier = require(classifierPath);
const index = fs.readFileSync(indexPath, "utf8");
const app = fs.readFileSync(appPath, "utf8");
const server = fs.readFileSync(serverPath, "utf8");
const doc = fs.readFileSync(docPath, "utf8");

const requiredFields = [
  "id",
  "label",
  "description",
  "domain",
  "category",
  "risk",
  "actionType",
  "supportedIntentIds",
  "selectedToolId",
  "requiresConfirmation",
  "requiresPermission",
  "permissionType",
  "executionStatus",
  "enabled",
  "visibleToUser",
  "metadataOnly",
  "routerOwned",
  "notes"
];

const validRisks = new Set(["low", "controlled", "sensitive", "high"]);
const validActionTypes = new Set([
  "answer",
  "preview_or_route",
  "open_workflow",
  "request_permission",
  "request_confirmation",
  "provider_handoff",
  "external_execution",
  "unsupported"
]);
const validExecutionStatuses = new Set([
  "metadata_only",
  "preview_only",
  "permission_required",
  "confirmation_required",
  "not_implemented",
  "blocked"
]);
const validPermissionTypes = new Set([
  "none",
  "location",
  "camera",
  "contacts",
  "phone",
  "provider",
  "marketplace",
  "account",
  "medical",
  "external_app"
]);

assert.strictEqual(typeof registry.getNexusToolRegistry, "function", "registry must export getNexusToolRegistry");
assert.strictEqual(typeof registry.getNexusToolById, "function", "registry must export getNexusToolById");
assert.strictEqual(typeof registry.findNexusToolsByIntent, "function", "registry must export findNexusToolsByIntent");
assert.strictEqual(typeof registry.findNexusToolsByDomain, "function", "registry must export findNexusToolsByDomain");
assert.strictEqual(typeof registry.validateNexusToolRegistry, "function", "registry must export validateNexusToolRegistry");

const tools = registry.getNexusToolRegistry();
assert(tools.length >= 25, "runtime registry should include major Nexus capabilities");
assert.deepStrictEqual(registry.validateNexusToolRegistry().errors, [], "registry validation should pass");
assert.strictEqual(registry.validateNexusToolRegistry().ok, true, "registry validation should be ok");

const ids = new Set();
for (const tool of tools) {
  for (const field of requiredFields) {
    assert(Object.prototype.hasOwnProperty.call(tool, field), `${tool.id || "tool"} missing ${field}`);
  }
  assert(!ids.has(tool.id), `${tool.id} must be unique`);
  ids.add(tool.id);
  assert(validRisks.has(tool.risk), `${tool.id} risk must be valid`);
  assert(validActionTypes.has(tool.actionType), `${tool.id} actionType must be valid`);
  assert(validExecutionStatuses.has(tool.executionStatus), `${tool.id} executionStatus must be valid`);
  assert(validPermissionTypes.has(tool.permissionType), `${tool.id} permissionType must be valid`);
  assert.strictEqual(tool.metadataOnly, true, `${tool.id} must stay metadataOnly`);
  assert.strictEqual(tool.routerOwned, true, `${tool.id} must keep existing routers authoritative`);
  assert.strictEqual(typeof tool.enabled, "boolean", `${tool.id} enabled must be boolean`);
  assert.strictEqual(typeof tool.visibleToUser, "boolean", `${tool.id} visibleToUser must be boolean`);
  assert(Array.isArray(tool.supportedIntentIds) && tool.supportedIntentIds.length, `${tool.id} must list supportedIntentIds`);
  assert(Array.isArray(tool.notes) && tool.notes.length, `${tool.id} must list notes`);
  for (const value of Object.values(tool)) {
    assert.notStrictEqual(typeof value, "function", `${tool.id} must not include executable callbacks`);
  }
  if (["controlled", "sensitive", "high"].includes(tool.risk)) {
    assert(tool.requiresConfirmation || tool.requiresPermission, `${tool.id} controlled/sensitive/high tool must require confirmation or permission`);
  }
  if (["provider_handoff", "external_execution"].includes(tool.actionType)) {
    assert(["not_implemented", "blocked"].includes(tool.executionStatus), `${tool.id} provider/external handoff must not be executable`);
    assert.strictEqual(tool.enabled, false, `${tool.id} provider/external handoff must not be enabled`);
  }
  if (tool.risk !== "low" && /(call|message|payment|provider|location|camera|medical|account|emergency|phone|whatsapp|telegram|booking)/i.test(`${tool.id} ${tool.label} ${tool.description}`)) {
    assert(tool.requiresConfirmation || tool.requiresPermission, `${tool.id} sensitive/high capability must stay guarded`);
    assert.notStrictEqual(tool.executionStatus, "preview_only", `${tool.id} sensitive/high capability must not be preview-only executable`);
  }
}

for (const id of [
  "workforce.training",
  "learning.irrigation",
  "workforce.job_pathways",
  "marketplace.agritrade",
  "agriculture.crop_help",
  "agriculture.general_help",
  "learning.help",
  "maps.location_permission",
  "maps.open",
  "maps.nearby_providers",
  "health.camera_preview",
  "health.telehealth_video",
  "health.show_injury",
  "communications.call_contact",
  "communications.call_provider",
  "communications.message_contact",
  "communications.message_provider",
  "communications.contact_marketplace_party",
  "marketplace.payment",
  "account.profile_change",
  "safety.emergency_escalation",
  "planning.autonomous_multistep",
  "communications.native_phone_bridge",
  "communications.whatsapp_bridge",
  "communications.telegram_bridge",
  "calendar.reminder_execution",
  "memory.durable_write",
  "providers.booking"
]) {
  assert(registry.getNexusToolById(id), `registry must include ${id}`);
}

const lowRiskAlignment = [
  ["Help me find agriculture training", "workforce.training"],
  ["Teach me how irrigation works", "learning.start"],
  ["Show me farm jobs", "workforce.job_pathways"],
  ["Browse AgriTrade", "marketplace.agritrade"],
  ["I need help with crop issues", "agriculture.help"]
];

for (const [prompt, selectedToolId] of lowRiskAlignment) {
  const intent = classifier.classifyNexusIntent(prompt);
  assert.strictEqual(intent.selectedToolId, selectedToolId, `${prompt} classifier selectedToolId should align`);
  const tool = registry.getNexusToolById(selectedToolId) || registry.findNexusToolsByIntent(intent.id)[0];
  assert(tool, `${prompt} should map to a registry tool`);
  assert.strictEqual(tool.risk, "low", `${prompt} registry tool should be low risk`);
  assert.strictEqual(tool.metadataOnly, true, `${prompt} registry tool must stay metadata-only`);
}

for (const prompt of ["Call John", "Call Maria on WhatsApp", "Pay the buyer", "open camera", "Nexus, use my location"]) {
  const intent = classifier.classifyNexusIntent(prompt);
  const matches = registry.findNexusToolsByIntent(intent.id);
  assert(matches.length >= 1, `${prompt} should have registry metadata by intent`);
  for (const tool of matches) {
    assert.notStrictEqual(tool.risk, "low", `${prompt} must not map to a low-risk registry tool`);
    assert(tool.requiresConfirmation || tool.requiresPermission, `${prompt} registry match must be guarded`);
  }
}

const broken = registry.getNexusToolRegistry();
broken[0].risk = "reckless";
assert.strictEqual(registry.validateNexusToolRegistry(broken).ok, false, "registry validation should fail invalid risk");
const brokenHighRisk = registry.getNexusToolRegistry();
const highRiskTool = brokenHighRisk.find(tool => tool.risk === "high");
highRiskTool.requiresConfirmation = false;
highRiskTool.requiresPermission = false;
assert.strictEqual(registry.validateNexusToolRegistry(brokenHighRisk).ok, false, "registry validation should fail unguarded high-risk tool");

assert.match(index, /nexus-tool-registry\.js\?v=nexus-behavior-304/, "browser should load runtime registry");
assert(index.indexOf("nexus-tool-registry.js") < index.indexOf("nexus-intent-classifier.js"), "registry should load before classifier");
assert(!/getNexusToolById[\s\S]{0,220}(openWorkflow|goSection|mutate|request\(|confirm|execute|stage|dispatch)/i.test(app), "frontend must not execute from registry metadata");
assert(!/getNexusToolById[\s\S]{0,220}(openWorkflow|goSection|mutate|request\(|confirm|execute|stage|dispatch)/i.test(server), "backend must not execute from registry metadata");
assert(!/handler\s*:|callback\s*:|execute\s*:|adapter\s*:/i.test(fs.readFileSync(registryPath, "utf8")), "registry source must not define executable handlers or adapters");
assert.match(doc, /metadata-only/i, "registry model doc must explain metadata-only limitation");
assert.match(doc, /existing routers remain authoritative/i, "registry model doc must preserve router authority");

console.log(`Nexus runtime tool registry QA passed (${tools.length} tools).`);
