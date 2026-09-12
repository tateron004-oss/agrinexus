const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const policyPath = path.join(root, "docs", "NEXUS_AGENT_ACTION_SUGGESTION_POLICY.md");
const registryPath = path.join(root, "docs", "nexus-tool-registry.v1.json");
const serverPath = path.join(root, "server.js");
const appPath = path.join(root, "public", "app.js");

const policy = fs.readFileSync(policyPath, "utf8");
const registry = JSON.parse(fs.readFileSync(registryPath, "utf8"));
const server = fs.readFileSync(serverPath, "utf8");
const app = fs.readFileSync(appPath, "utf8");

for (const level of [
  "Level 0: Observation only",
  "Level 1: Display-only label",
  "Level 2: User-click-required navigation suggestion",
  "Level 3: Low-risk auto-open candidate",
  "Level 4: Confirmation-gated action"
]) {
  assert.match(policy, new RegExp(level.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")), `policy must document ${level}`);
}

assert.match(policy, /Level 3:[\s\S]*Not allowed yet/i, "Level 3 must be explicitly not allowed yet");
assert.match(policy, /Level 4:[\s\S]*confirmation schema[\s\S]*audit logs[\s\S]*adapter boundaries/i, "Level 4 must require confirmation/audit/adapter boundaries");
assert.match(policy, /health intake record creation/i, "policy must exclude health intake creation");
assert.match(policy, /telehealth\/video\/camera handoff/i, "policy must exclude telehealth/video/camera handoff");
assert.match(policy, /map\/location permission use/i, "policy must exclude location permission");
assert.match(policy, /marketplace orders, payments, or messages/i, "policy must exclude marketplace transactions");
assert.match(policy, /job application submission/i, "policy must exclude job application submission");
assert.match(policy, /document sharing or exporting/i, "policy must exclude document sharing/exporting");
assert.match(policy, /voice provider activation/i, "policy must exclude voice provider activation");
assert.match(policy, /AgriNexus, AgriTrade, agriculture, farm, crop, and trade compatibility/i, "policy must preserve compatibility");

for (const unsafe of [
  "I will do this.",
  "I already opened this.",
  "I contacted provider.",
  "I submitted.",
  "I diagnosed.",
  "I dispatched.",
  "I sent.",
  "Payment processed.",
  "Application submitted."
]) {
  assert.ok(policy.includes(`"${unsafe}"`), `policy must explicitly prohibit unsafe wording: ${unsafe}`);
}

assert.match(registry.runtimeStatus || "", /static|spec/i, "registry must remain static/spec-only");
assert.match(registry.warning || "", /not runtime-authoritative/i, "registry warning must remain non-runtime-authoritative");
assert.ok(registry.qaCoverage.includes("scripts/nexus-agent-action-suggestion-policy-qa.js"), "registry qaCoverage should include suggestion policy QA");

const eligibleIds = new Set([
  "workforce.training",
  "workforce.job_pathways",
  "workforce.field_support",
  "learning.start",
  "learning.quiz",
  "agriculture.help",
  "marketplace.agritrade",
  "music.local_playback"
]);
const excludedPattern = /health|video|camera|provider|call|payment|order|application|apply|dispatch|cancel|outbound|message|notification|share|export|location|admin|drone|scan|ehr|webrtc|stt|tts|microphone/i;

for (const tool of registry.tools) {
  assert.strictEqual(typeof tool.suggestionEligibility, "boolean", `${tool.canonicalToolId} must declare boolean suggestionEligibility`);
  assert.ok(Number.isInteger(tool.maxSuggestionLevel), `${tool.canonicalToolId} must declare integer maxSuggestionLevel`);
  assert.ok(tool.maxSuggestionLevel >= 0 && tool.maxSuggestionLevel <= 4, `${tool.canonicalToolId} maxSuggestionLevel must be 0-4`);
  assert.ok(Object.prototype.hasOwnProperty.call(tool, "suggestionLabel"), `${tool.canonicalToolId} must declare suggestionLabel`);
  assert.ok(String(tool.suggestionSafetyNotes || "").trim().length >= 40, `${tool.canonicalToolId} needs meaningful suggestionSafetyNotes`);

  if (tool.suggestionEligibility) {
    assert.ok(eligibleIds.has(tool.canonicalToolId), `${tool.canonicalToolId} must not be suggestion-eligible in Phase 7H`);
    assert.ok(tool.maxSuggestionLevel <= 2, `${tool.canonicalToolId} must not exceed Level 2`);
    assert.ok(String(tool.suggestionLabel || "").trim(), `${tool.canonicalToolId} eligible tool needs suggestionLabel`);
  } else {
    assert.strictEqual(tool.maxSuggestionLevel, 0, `${tool.canonicalToolId} ineligible tool must stay Level 0`);
  }

  if (tool.riskLevel === "high" || tool.riskLevel === "privacy-sensitive") {
    assert.strictEqual(tool.suggestionEligibility, false, `${tool.canonicalToolId} high/privacy-sensitive tool must not be suggestion-eligible`);
    assert.strictEqual(tool.maxSuggestionLevel, 0, `${tool.canonicalToolId} high/privacy-sensitive tool must stay Level 0`);
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
    suggestionSafetyNotes: tool.suggestionSafetyNotes
  });
  if (excludedPattern.test(searchable) && !eligibleIds.has(tool.canonicalToolId)) {
    assert.strictEqual(tool.suggestionEligibility, false, `${tool.canonicalToolId} excluded pattern must not be suggestion-eligible`);
    assert.strictEqual(tool.maxSuggestionLevel, 0, `${tool.canonicalToolId} excluded pattern must stay Level 0`);
  }
}

assert.ok(!server.includes("nexus-tool-registry.v1.json"), "server.js must not reference static registry JSON at runtime");
assert.ok(!app.includes("nexus-tool-registry.v1.json"), "public/app.js must not reference static registry JSON at runtime");

const helperStart = app.indexOf("function observeAgentActionMetadata");
const helperEnd = app.indexOf("const countryLanguageMap", helperStart);
assert(helperStart >= 0 && helperEnd > helperStart, "frontend observation helper must remain present");
const helperBody = app.slice(helperStart, helperEnd);
for (const forbidden of ["openWorkflow", "goSection(", "mutate(", "request(", "confirmWorkflow", "stageAgentAction", "executeWorkflow"]) {
  assert.ok(!helperBody.includes(forbidden), `frontend observation helper must not call ${forbidden} from metadata`);
}

console.log("Nexus agent action suggestion policy QA passed");
