const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const registryPath = path.join(root, "docs", "nexus-tool-registry.v1.json");
const serverPath = path.join(root, "server.js");
const appPath = path.join(root, "public", "app.js");

const requiredToolFields = [
  "canonicalToolId",
  "displayName",
  "domain",
  "category",
  "description",
  "exampleAliases",
  "legacyAliases",
  "requiredInputs",
  "optionalInputs",
  "riskLevel",
  "confirmationRequired",
  "rolePermissions",
  "demoStatus",
  "liveStatus",
  "frontendAction",
  "backendAction",
  "resultSchema",
  "auditEvent",
  "qaCoverage",
  "protectedCompatibilityNotes"
];

const approvedRiskLevels = new Set(["low", "medium", "high", "privacy-sensitive"]);

function readText(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

assert.ok(fs.existsSync(registryPath), "Static Nexus Tool Registry artifact must exist");

const registry = JSON.parse(readText(registryPath));

assert.ok(registry.schemaVersion, "Registry must declare schemaVersion");
assert.strictEqual(registry.productName, "Nexus Workforce AI", "Registry productName must match Nexus Workforce AI");
assert.strictEqual(registry.assistantName, "Nexus", "Registry assistantName must be Nexus");
assert.strictEqual(registry.edition, "workforce", "Registry edition must be workforce");
assert.strictEqual(registry.legacyProductName, "AgriNexus", "Registry must preserve AgriNexus legacy compatibility");
assert.match(registry.runtimeStatus || "", /static|spec/i, "Registry runtimeStatus must clearly be static/spec-only");
assert.strictEqual(registry.generatedFrom, "docs/NEXUS_TOOL_REGISTRY_SPEC.md", "Registry must cite the Phase 7A spec");
assert.match(registry.warning || "", /not runtime-authoritative/i, "Registry warning must say it is not runtime-authoritative");
assert.ok(Array.isArray(registry.tools), "Registry must expose a tools array");
assert.ok(registry.tools.length >= 20, "Initial registry should include the requested representative tool set");

const ids = new Set();
for (const tool of registry.tools) {
  for (const field of requiredToolFields) {
    assert.ok(Object.prototype.hasOwnProperty.call(tool, field), `${tool.canonicalToolId || "tool"} missing ${field}`);
  }

  assert.match(tool.canonicalToolId, /^[a-z][a-z0-9_]*\.[a-z][a-z0-9_]*$/, `${tool.canonicalToolId} must use domain.tool_id form`);
  assert.ok(!ids.has(tool.canonicalToolId), `${tool.canonicalToolId} must be unique`);
  ids.add(tool.canonicalToolId);

  assert.ok(approvedRiskLevels.has(tool.riskLevel), `${tool.canonicalToolId} has unsupported riskLevel ${tool.riskLevel}`);
  assert.strictEqual(typeof tool.confirmationRequired, "boolean", `${tool.canonicalToolId} confirmationRequired must be boolean`);
  assert.ok(Array.isArray(tool.exampleAliases), `${tool.canonicalToolId} exampleAliases must be an array`);
  assert.ok(Array.isArray(tool.legacyAliases), `${tool.canonicalToolId} legacyAliases must be an array`);
  assert.ok(Array.isArray(tool.requiredInputs), `${tool.canonicalToolId} requiredInputs must be an array`);
  assert.ok(Array.isArray(tool.optionalInputs), `${tool.canonicalToolId} optionalInputs must be an array`);
  assert.ok(Array.isArray(tool.qaCoverage), `${tool.canonicalToolId} qaCoverage must be an array`);
  assert.ok(tool.qaCoverage.length > 0, `${tool.canonicalToolId} must list qaCoverage`);
  assert.ok(String(tool.protectedCompatibilityNotes || "").trim().length > 20, `${tool.canonicalToolId} needs meaningful protectedCompatibilityNotes`);
  assert.ok(tool.rolePermissions && typeof tool.rolePermissions === "object", `${tool.canonicalToolId} must define rolePermissions`);
  assert.ok(tool.frontendAction && typeof tool.frontendAction === "object", `${tool.canonicalToolId} must define frontendAction`);
  assert.ok(tool.backendAction && typeof tool.backendAction === "object", `${tool.canonicalToolId} must define backendAction`);

  if (tool.riskLevel === "high" || tool.riskLevel === "privacy-sensitive") {
    assert.strictEqual(tool.confirmationRequired, true, `${tool.canonicalToolId} high/privacy-sensitive tools must require confirmation`);
  }
}

const requiredIds = [
  "workforce.training",
  "workforce.job_pathways",
  "workforce.field_support",
  "learning.start",
  "learning.quiz",
  "health.intake",
  "health.telehealth",
  "health.video_preview",
  "health.provider_call",
  "map.location",
  "agriculture.help",
  "agriculture.field_scan",
  "marketplace.agritrade",
  "marketplace.sell_crop",
  "logistics.shipment",
  "voice.command",
  "voice.tts_stt",
  "music.local_playback",
  "admin.dashboard",
  "reports.document"
];

for (const id of requiredIds) {
  assert.ok(ids.has(id), `Registry must include ${id}`);
}

const combinedRegistryText = JSON.stringify(registry);
assert.match(combinedRegistryText, /AgriNexus/, "Registry must represent AgriNexus legacy compatibility");
assert.match(combinedRegistryText, /AgriTrade/, "Registry must keep AgriTrade present");
assert.match(combinedRegistryText, /agriculture/i, "Registry must keep agriculture present");
assert.match(combinedRegistryText, /farm|farmer|crop/i, "Registry must keep farm/crop compatibility present");

const protectedInternalMarkers = [
  "localStorage",
  "PWA cache",
  "native bridge",
  "endpoint",
  "workflow IDs"
];
for (const marker of protectedInternalMarkers) {
  assert.match(combinedRegistryText, new RegExp(marker, "i"), `Registry must document protected internal marker: ${marker}`);
}

const runtimeFiles = [
  ["server.js", readText(serverPath)],
  ["public/app.js", readText(appPath)]
];
for (const [label, source] of runtimeFiles) {
  assert.ok(!source.includes("nexus-tool-registry.v1.json"), `${label} must not reference static registry during Phase 7B`);
  assert.ok(!source.includes("NEXUS_TOOL_REGISTRY_SPEC.md"), `${label} must not reference the registry spec at runtime`);
}

console.log(`Nexus Tool Registry QA passed (${registry.tools.length} tools).`);
