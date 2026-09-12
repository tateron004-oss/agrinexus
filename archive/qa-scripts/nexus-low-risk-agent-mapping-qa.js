const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const registryPath = path.join(root, "docs", "nexus-tool-registry.v1.json");
const specPath = path.join(root, "docs", "NEXUS_LOW_RISK_AGENT_ACTION_MAPPING.md");
const serverPath = path.join(root, "server.js");
const appPath = path.join(root, "public", "app.js");

const registry = JSON.parse(fs.readFileSync(registryPath, "utf8"));
const spec = fs.readFileSync(specPath, "utf8");
const server = fs.readFileSync(serverPath, "utf8");
const app = fs.readFileSync(appPath, "utf8");

const readinessValues = new Set([
  "candidate-low-risk",
  "excluded-high-risk",
  "excluded-privacy-sensitive",
  "future-confirmation-gated"
]);
const policyValues = new Set([
  "observation-only",
  "display-only-suggestion",
  "user-click-required",
  "not-eligible-yet"
]);
const earlyExcludedPattern = /health|video|camera|provider|call|payment|order|application|apply|dispatch|cancel|outbound|message|notification|share|export|location|admin|drone|scan|ehr|webrtc|stt|tts|microphone/i;
const lowRiskCandidates = new Set([
  "workforce.training",
  "workforce.field_support",
  "learning.start",
  "agriculture.help",
  "marketplace.agritrade",
  "music.local_playback"
]);

assert.match(registry.runtimeStatus || "", /static|spec/i, "registry must remain static/spec-only");
assert.match(registry.warning || "", /not runtime-authoritative/i, "registry warning must remain non-runtime-authoritative");
assert.ok(Array.isArray(registry.tools), "registry must expose tools");
assert.ok(registry.qaCoverage.includes("scripts/nexus-low-risk-agent-mapping-qa.js"), "registry qaCoverage should include low-risk mapping QA");

for (const tool of registry.tools) {
  assert.ok(readinessValues.has(tool.mappingReadiness), `${tool.canonicalToolId} has unsupported mappingReadiness`);
  assert.ok(String(tool.earliestAllowedPhase || "").trim(), `${tool.canonicalToolId} must declare earliestAllowedPhase`);
  assert.ok(policyValues.has(tool.frontendConsumptionPolicy), `${tool.canonicalToolId} has unsupported frontendConsumptionPolicy`);
  assert.ok(String(tool.mappingNotes || "").trim().length >= 40, `${tool.canonicalToolId} needs meaningful mappingNotes`);

  if (tool.riskLevel === "high") {
    assert.notStrictEqual(tool.mappingReadiness, "candidate-low-risk", `${tool.canonicalToolId} high-risk tool must not be a low-risk candidate`);
    assert.notStrictEqual(tool.frontendConsumptionPolicy, "display-only-suggestion", `${tool.canonicalToolId} high-risk tool must not be display-only early`);
    assert.notStrictEqual(tool.frontendConsumptionPolicy, "user-click-required", `${tool.canonicalToolId} high-risk tool must not be user-click early`);
  }
  if (tool.riskLevel === "privacy-sensitive") {
    assert.notStrictEqual(tool.mappingReadiness, "candidate-low-risk", `${tool.canonicalToolId} privacy-sensitive tool must not be a low-risk candidate`);
    assert.strictEqual(tool.frontendConsumptionPolicy, "not-eligible-yet", `${tool.canonicalToolId} privacy-sensitive tool must not be frontend-consumable early`);
  }

  const searchable = JSON.stringify({
    canonicalToolId: tool.canonicalToolId,
    displayName: tool.displayName,
    domain: tool.domain,
    description: tool.description,
    exampleAliases: tool.exampleAliases,
    legacyAliases: tool.legacyAliases,
    frontendAction: tool.frontendAction,
    backendAction: tool.backendAction,
    mappingNotes: tool.mappingNotes
  });
  if (earlyExcludedPattern.test(searchable) && !lowRiskCandidates.has(tool.canonicalToolId)) {
    assert.notStrictEqual(tool.mappingReadiness, "candidate-low-risk", `${tool.canonicalToolId} early-excluded pattern must not be candidate-low-risk`);
  }

  if (tool.mappingReadiness === "candidate-low-risk") {
    assert.strictEqual(tool.riskLevel, "low", `${tool.canonicalToolId} candidate-low-risk must also be low risk`);
    assert.ok(
      tool.frontendConsumptionPolicy === "display-only-suggestion" || tool.frontendConsumptionPolicy === "user-click-required",
      `${tool.canonicalToolId} low-risk candidate must be display-only or user-click required`
    );
  }
}

for (const id of lowRiskCandidates) {
  const tool = registry.tools.find((candidate) => candidate.canonicalToolId === id);
  assert(tool, `${id} must exist`);
  assert.strictEqual(tool.mappingReadiness, "candidate-low-risk", `${id} should be marked candidate-low-risk`);
}

assert.match(spec, /Level 0: Observation only/, "mapping spec must define Level 0");
assert.match(spec, /Level 1: Display-only suggestion/, "mapping spec must define Level 1");
assert.match(spec, /Level 2: User-click required navigation suggestion/, "mapping spec must define Level 2");
assert.match(spec, /Level 3: Low-risk auto-open candidate/, "mapping spec must define Level 3");
assert.match(spec, /Level 4: Confirmation-gated action/, "mapping spec must define Level 4");
assert.match(spec, /health intake record creation/i, "mapping spec must exclude health intake creation");
assert.match(spec, /telehealth\/video\/camera handoff/i, "mapping spec must exclude telehealth/video/camera handoff");
assert.match(spec, /map\/location permission/i, "mapping spec must exclude map/location permission use");
assert.match(spec, /marketplace order, payment, or message actions/i, "mapping spec must exclude marketplace transactions");
assert.match(spec, /job application submission/i, "mapping spec must exclude job application submission");
assert.match(spec, /document sharing or exporting/i, "mapping spec must exclude document sharing/exporting");
assert.match(spec, /AgriNexus, AgriTrade, agriculture, farm, crop, or trade compatibility/i, "mapping spec must preserve compatibility");

assert.ok(!server.includes("nexus-tool-registry.v1.json"), "server.js must not reference static registry JSON at runtime");
assert.ok(!app.includes("nexus-tool-registry.v1.json"), "public/app.js must not reference static registry JSON at runtime");

const helperStart = app.indexOf("function observeAgentActionMetadata");
const helperEnd = app.indexOf("const countryLanguageMap", helperStart);
assert(helperStart >= 0 && helperEnd > helperStart, "frontend observation helper must remain present");
const helperBody = app.slice(helperStart, helperEnd);
for (const forbidden of ["openWorkflow", "goSection(", "mutate(", "request(", "confirmWorkflow", "stageAgentAction", "executeWorkflow"]) {
  assert.ok(!helperBody.includes(forbidden), `frontend observation helper must not call ${forbidden} from metadata`);
}

console.log("Nexus low-risk agent action mapping QA passed");
