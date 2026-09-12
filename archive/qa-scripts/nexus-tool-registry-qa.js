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
  "protectedCompatibilityNotes",
  "mappingReadiness",
  "earliestAllowedPhase",
  "frontendConsumptionPolicy",
  "mappingNotes",
  "suggestionEligibility",
  "maxSuggestionLevel",
  "suggestionLabel",
  "suggestionSafetyNotes"
];

const approvedRiskLevels = new Set(["low", "medium", "high", "privacy-sensitive"]);
const approvedLiveStatuses = new Set(["demo", "local-only", "dry-run", "requires-live-adapter", "not-live", "planned"]);
const approvedMappingReadiness = new Set(["candidate-low-risk", "excluded-high-risk", "excluded-privacy-sensitive", "future-confirmation-gated"]);
const approvedFrontendConsumptionPolicies = new Set(["observation-only", "display-only-suggestion", "user-click-required", "not-eligible-yet"]);
const requiredDomains = [
  "workforce",
  "learning",
  "health",
  "map",
  "agriculture",
  "marketplace",
  "logistics",
  "voice",
  "music",
  "admin",
  "reports"
];
const requiredRegistryQaCoverage = [
  "scripts/nexus-tool-registry-qa.js",
  "scripts/nexus-workforce-branding-qa.js",
  "scripts/nexus-workforce-standard-user-qa.js",
  "scripts/nexus-workforce-alias-qa.js",
  "scripts/nexus-workforce-metadata-qa.js",
  "scripts/nexus-low-risk-agent-mapping-qa.js",
  "scripts/nexus-agent-action-suggestion-policy-qa.js"
];
const riskyIntentPattern = /health|provider|video|camera|call|dispatch|outbound|share|export|application|apply|order|payment|wallet|settlement|certificate|transcript|drone|admin|document|report/i;
const unsupportedLiveClaimPattern = /live (medical diagnosis|provider dispatch|payment execution|job application submission|external messaging|webrtc|ehr|fhir)/i;

function readText(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

assert.ok(fs.existsSync(registryPath), "Static Nexus Tool Registry artifact must exist");

const registry = JSON.parse(readText(registryPath));

assert.ok(registry.schemaVersion, "Registry must declare schemaVersion");
assert.strictEqual(registry.productName, "Nexus Genesis | AgriNexus", "Registry productName must match Nexus Genesis | AgriNexus");
assert.strictEqual(registry.assistantName, "Nexus", "Registry assistantName must be Nexus");
assert.strictEqual(registry.edition, "workforce", "Registry edition must be genesis");
assert.strictEqual(registry.legacyProductName, "AgriNexus", "Registry must preserve AgriNexus legacy compatibility");
assert.match(registry.runtimeStatus || "", /static|spec/i, "Registry runtimeStatus must clearly be static/spec-only");
assert.strictEqual(registry.generatedFrom, "docs/NEXUS_TOOL_REGISTRY_SPEC.md", "Registry must cite the Phase 7A spec");
assert.match(registry.warning || "", /not runtime-authoritative/i, "Registry warning must say it is not runtime-authoritative");
assert.ok(Array.isArray(registry.protectedInternalBoundary), "Registry must declare protectedInternalBoundary");
assert.ok(registry.protectedInternalBoundary.length >= 5, "Registry must list protected internal boundaries");
assert.ok(Array.isArray(registry.qaCoverage), "Registry must declare top-level qaCoverage");
for (const qaScript of requiredRegistryQaCoverage) {
  assert.ok(registry.qaCoverage.includes(qaScript), `Registry top-level qaCoverage must include ${qaScript}`);
}
assert.ok(Array.isArray(registry.tools), "Registry must expose a tools array");
assert.ok(registry.tools.length >= 20, "Initial registry should include the requested representative tool set");

const ids = new Set();
const domains = new Set();
for (const tool of registry.tools) {
  for (const field of requiredToolFields) {
    assert.ok(Object.prototype.hasOwnProperty.call(tool, field), `${tool.canonicalToolId || "tool"} missing ${field}`);
  }

  for (const field of ["canonicalToolId", "displayName", "domain", "category", "description", "riskLevel", "demoStatus", "liveStatus", "resultSchema", "auditEvent", "protectedCompatibilityNotes"]) {
    assert.ok(String(tool[field] || "").trim(), `${tool.canonicalToolId || "tool"} ${field} must be non-empty`);
  }

  assert.match(tool.canonicalToolId, /^[a-z][a-z0-9_]*\.[a-z][a-z0-9_]*$/, `${tool.canonicalToolId} must use domain.tool_id form`);
  assert.ok(!/\s/.test(tool.canonicalToolId), `${tool.canonicalToolId} must not contain spaces`);
  assert.ok(!/api|route|workflow|localstorage|cache|native|package/i.test(tool.canonicalToolId), `${tool.canonicalToolId} must not imply a protected internal hard rename`);
  assert.ok(!ids.has(tool.canonicalToolId), `${tool.canonicalToolId} must be unique`);
  ids.add(tool.canonicalToolId);
  domains.add(tool.domain);

  assert.ok(approvedRiskLevels.has(tool.riskLevel), `${tool.canonicalToolId} has unsupported riskLevel ${tool.riskLevel}`);
  assert.ok(approvedLiveStatuses.has(tool.liveStatus), `${tool.canonicalToolId} has unsupported liveStatus ${tool.liveStatus}`);
  assert.ok(approvedMappingReadiness.has(tool.mappingReadiness), `${tool.canonicalToolId} has unsupported mappingReadiness ${tool.mappingReadiness}`);
  assert.ok(approvedFrontendConsumptionPolicies.has(tool.frontendConsumptionPolicy), `${tool.canonicalToolId} has unsupported frontendConsumptionPolicy ${tool.frontendConsumptionPolicy}`);
  assert.strictEqual(typeof tool.suggestionEligibility, "boolean", `${tool.canonicalToolId} suggestionEligibility must be boolean`);
  assert.ok(Number.isInteger(tool.maxSuggestionLevel) && tool.maxSuggestionLevel >= 0 && tool.maxSuggestionLevel <= 4, `${tool.canonicalToolId} maxSuggestionLevel must be 0-4`);
  assert.strictEqual(typeof tool.confirmationRequired, "boolean", `${tool.canonicalToolId} confirmationRequired must be boolean`);
  assert.ok(Array.isArray(tool.exampleAliases), `${tool.canonicalToolId} exampleAliases must be an array`);
  assert.ok(Array.isArray(tool.legacyAliases), `${tool.canonicalToolId} legacyAliases must be an array`);
  assert.ok(Array.isArray(tool.requiredInputs), `${tool.canonicalToolId} requiredInputs must be an array`);
  assert.ok(Array.isArray(tool.optionalInputs), `${tool.canonicalToolId} optionalInputs must be an array`);
  assert.ok(Array.isArray(tool.qaCoverage), `${tool.canonicalToolId} qaCoverage must be an array`);
  assert.ok(tool.exampleAliases.length > 0, `${tool.canonicalToolId} must list at least one example alias`);
  assert.ok(tool.legacyAliases.length > 0, `${tool.canonicalToolId} must list at least one legacy alias in this initial compatibility registry`);
  for (const [field, values] of [["exampleAliases", tool.exampleAliases], ["legacyAliases", tool.legacyAliases], ["requiredInputs", tool.requiredInputs], ["optionalInputs", tool.optionalInputs], ["qaCoverage", tool.qaCoverage]]) {
    for (const value of values) {
      assert.ok(String(value || "").trim(), `${tool.canonicalToolId} ${field} contains an empty value`);
    }
  }
  assert.ok(tool.qaCoverage.length > 0, `${tool.canonicalToolId} must list qaCoverage`);
  assert.ok(String(tool.protectedCompatibilityNotes || "").trim().length > 20, `${tool.canonicalToolId} needs meaningful protectedCompatibilityNotes`);
  assert.ok(tool.rolePermissions && typeof tool.rolePermissions === "object" && !Array.isArray(tool.rolePermissions), `${tool.canonicalToolId} must define rolePermissions`);
  assert.ok(tool.frontendAction && typeof tool.frontendAction === "object" && !Array.isArray(tool.frontendAction), `${tool.canonicalToolId} must define frontendAction`);
  assert.ok(tool.backendAction && typeof tool.backendAction === "object" && !Array.isArray(tool.backendAction), `${tool.canonicalToolId} must define backendAction`);

  if (tool.riskLevel === "high" || tool.riskLevel === "privacy-sensitive") {
    assert.strictEqual(tool.confirmationRequired, true, `${tool.canonicalToolId} high/privacy-sensitive tools must require confirmation`);
    assert.notStrictEqual(tool.mappingReadiness, "candidate-low-risk", `${tool.canonicalToolId} high/privacy-sensitive tools must not be low-risk mapping candidates`);
    assert.strictEqual(tool.suggestionEligibility, false, `${tool.canonicalToolId} high/privacy-sensitive tools must not be suggestion-eligible`);
    assert.strictEqual(tool.maxSuggestionLevel, 0, `${tool.canonicalToolId} high/privacy-sensitive tools must stay Level 0`);
  }

  const riskRelevantText = JSON.stringify({
    canonicalToolId: tool.canonicalToolId,
    displayName: tool.displayName,
    domain: tool.domain,
    category: tool.category,
    description: tool.description,
    exampleAliases: tool.exampleAliases,
    legacyAliases: tool.legacyAliases,
    frontendAction: tool.frontendAction,
    backendAction: tool.backendAction,
    resultSchema: tool.resultSchema,
    auditEvent: tool.auditEvent,
    protectedCompatibilityNotes: tool.protectedCompatibilityNotes
  });
  const liveClaimRelevantText = JSON.stringify({
    canonicalToolId: tool.canonicalToolId,
    displayName: tool.displayName,
    domain: tool.domain,
    category: tool.category,
    description: tool.description,
    exampleAliases: tool.exampleAliases,
    legacyAliases: tool.legacyAliases,
    frontendAction: tool.frontendAction,
    backendAction: tool.backendAction,
    resultSchema: tool.resultSchema,
    auditEvent: tool.auditEvent
  });
  if (riskyIntentPattern.test(riskRelevantText)) {
    const lowRiskException = /help|training|workforce\.field_support|music\.local_playback|telehealth opened|marketplace\.agritrade|agriculture\.help/i.test(`${tool.canonicalToolId} ${tool.description} ${tool.auditEvent}`);
    if (!lowRiskException) {
      assert.strictEqual(tool.confirmationRequired, true, `${tool.canonicalToolId} risky/provider/video/call/export/order/payment-like tool must require confirmation`);
    }
  }
  assert.ok(!unsupportedLiveClaimPattern.test(liveClaimRelevantText), `${tool.canonicalToolId} must not claim unsupported live execution`);
  if (tool.riskLevel === "high" || tool.riskLevel === "privacy-sensitive") {
    assert.notStrictEqual(tool.liveStatus, "demo", `${tool.canonicalToolId} high/privacy-sensitive tool must not claim generic live demo status`);
    assert.notStrictEqual(tool.liveStatus, "planned", `${tool.canonicalToolId} high/privacy-sensitive tool must not claim vague planned live status`);
  }
}

for (const domain of requiredDomains) {
  assert.ok(domains.has(domain), `Registry must include required domain ${domain}`);
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
assert.match(combinedRegistryText, /trade/i, "Registry must keep trade compatibility present");
assert.match(combinedRegistryText, /workforce/i, "Registry must keep workforce aliases present");
assert.match(combinedRegistryText, /training/i, "Registry must keep training aliases present");
assert.match(combinedRegistryText, /job/i, "Registry must keep job aliases present");
assert.match(combinedRegistryText, /field support|field/i, "Registry must keep field support aliases present");
assert.match(combinedRegistryText, /health.*confirmation|confirmation.*health/i, "Registry must keep health confirmation boundary notes present");
assert.match(combinedRegistryText, /video.*privacy|camera.*privacy|video.*handoff|camera.*preview/i, "Registry must keep video/camera privacy boundary notes present");
assert.match(combinedRegistryText, /location permission/i, "Registry must keep map/location permission boundary notes present");
assert.match(combinedRegistryText, /Music mute\/unmute must stay separate from Nexus voice mute\/unmute/i, "Registry must keep voice/music separation notes present");
assert.match(combinedRegistryText, /Standard User/i, "Registry must keep Standard User workflow behavior notes present");

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

const specText = readText(path.join(root, "docs", "NEXUS_TOOL_REGISTRY_SPEC.md"));
assert.match(specText, /runtime-authoritative/i, "Spec must warn registry is not runtime-authoritative yet");
assert.match(specText, /static[/-]spec-only/i, "Spec must preserve static/spec-only wording");

console.log(`Nexus Tool Registry QA passed (${registry.tools.length} tools).`);
