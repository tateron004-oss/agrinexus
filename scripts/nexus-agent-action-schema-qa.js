const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const serverPath = path.join(root, "server.js");
const appPath = path.join(root, "public", "app.js");
const registryPath = path.join(root, "docs", "nexus-tool-registry.v1.json");

function readText(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

const server = readText(serverPath);
const app = readText(appPath);
const registry = JSON.parse(readText(registryPath));

assert.match(server, /function buildAgentActionMetadata\(input = \{\}\)/, "server must define buildAgentActionMetadata helper");
assert.match(server, /schemaVersion:\s*"agent-action\.v1"/, "agentAction schemaVersion must be agent-action.v1");
assert.match(server, /runtimeStatus:\s*"metadata-only"/, "agentAction runtimeStatus must be metadata-only");
assert.match(server, /source:\s*"existing-router"/, "agentAction source must be existing-router");

const requiredFields = [
  "schemaVersion",
  "runtimeStatus",
  "source",
  "userMessage",
  "normalizedIntent",
  "goal",
  "selectedToolId",
  "confidence",
  "requiredInputs",
  "missingInputs",
  "riskLevel",
  "confirmationRequired",
  "executionMode",
  "frontendAction",
  "backendAction",
  "result",
  "nextStep",
  "auditMetadata",
  "safetyNotes",
  "legacyCompatibility"
];

for (const field of requiredFields) {
  assert.match(server, new RegExp(`\\b${field}\\b`), `agentAction helper must include ${field}`);
}

assert.match(server, /const agentAction = buildAgentActionMetadata\(\{[\s\S]*userMessage: command/, "agent command path must build agentAction from existing result");
assert.match(server, /agentAction,\s*\n\s*language: commandLanguage/, "agentAction must be attached additively to result.metadata");
assert.match(server, /state\.commandResult = result;/, "/api/agent/command must still return existing commandResult");
assert.match(server, /companionUnderstanding,\s*\n\s*companionRouteOutcome,\s*\n\s*agentAction/, "companion metadata must remain and agentAction must be additive");

assert.ok(!server.includes("nexus-tool-registry.v1.json"), "server.js must not import/read/reference static registry JSON");
assert.ok(!app.includes("nexus-tool-registry.v1.json"), "public/app.js must not import/read/reference static registry JSON");
assert.ok(!server.includes("NEXUS_TOOL_REGISTRY_SPEC.md"), "server.js must not reference registry spec at runtime");
assert.ok(!app.includes("NEXUS_TOOL_REGISTRY_SPEC.md"), "public/app.js must not reference registry spec at runtime");
assert.match(registry.runtimeStatus || "", /static|spec/i, "static registry must remain static/spec-only");
assert.match(registry.warning || "", /not runtime-authoritative/i, "static registry must warn that it is not runtime-authoritative");

assert.match(server, /function stageAgentAction\(db, command, action\)/, "high-risk staging helper must remain present");
assert.match(server, /allowedConfirmations/, "confirmation allow-list handling must remain present");
assert.match(server, /PRODUCT_IDENTITY/, "product identity must remain present");
assert.match(server, /legacyProductName:\s*"AgriNexus"/, "AgriNexus compatibility must remain present");
assert.match(server, /AgriTrade/, "AgriTrade compatibility must remain present");
assert.match(server, /agriculture|farmer|crop/i, "agriculture/farm/crop compatibility must remain present");

const protectedRenamePatterns = [
  /require\([^)]*nexus-tool-registry/i,
  /fs\.readFileSync\([^)]*nexus-tool-registry/i,
  /import\s+.*nexus-tool-registry/i
];
for (const pattern of protectedRenamePatterns) {
  assert.ok(!pattern.test(server), "server must not load the static registry at runtime");
  assert.ok(!pattern.test(app), "frontend must not load the static registry at runtime");
}

console.log("Nexus agent action schema QA passed");
