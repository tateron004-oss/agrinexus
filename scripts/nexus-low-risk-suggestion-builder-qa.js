const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const appPath = path.join(root, "public", "app.js");
const serverPath = path.join(root, "server.js");
const registryPath = path.join(root, "docs", "nexus-tool-registry.v1.json");
const planPath = path.join(root, "docs", "NEXUS_LOW_RISK_SUGGESTION_DISPLAY_PLAN.md");

const app = fs.readFileSync(appPath, "utf8");
const server = fs.readFileSync(serverPath, "utf8");
const registry = JSON.parse(fs.readFileSync(registryPath, "utf8"));
const plan = fs.readFileSync(planPath, "utf8");

const helperStart = app.indexOf("function buildLowRiskAgentActionSuggestion");
const helperEnd = app.indexOf("function observeAgentActionMetadata", helperStart);
assert(helperStart >= 0 && helperEnd > helperStart, "frontend must define buildLowRiskAgentActionSuggestion before observation helper");
const helperBody = app.slice(helperStart, helperEnd);

assert.match(helperBody, /hidden observation only/i, "builder must be explicitly hidden observation only");
assert.match(helperBody, /not visible to users/i, "builder must state suggestions are not visible to users");
assert.match(helperBody, /not authoritative/i, "builder must state suggestions are non-authoritative");
assert.match(helperBody, /Existing routers remain authoritative/i, "builder must preserve router authority");
assert.match(helperBody, /agentAction\.runtimeStatus !== "metadata-only"/, "builder must require metadata-only runtime status");
assert.match(helperBody, /agentAction\.source !== "existing-router"/, "builder must require existing-router source");
assert.match(helperBody, /visibility:\s*"hidden-observation-only"/, "builder suggestions must be hidden observation only");
assert.match(helperBody, /level:\s*0/, "builder suggestions must remain level 0");
assert.match(helperBody, /userClickRequired:\s*true/, "builder suggestions must require user click");
assert.match(helperBody, /executionAllowed:\s*false/, "builder suggestions must not allow execution");
assert.match(helperBody, /autoOpenAllowed:\s*false/, "builder suggestions must not allow auto-open");
assert.match(helperBody, /source:\s*"agentAction\.metadata"/, "builder suggestions must identify metadata source");

const lowRiskLabels = {
  "workforce.training": "Open Training",
  "workforce.job_pathways": "View Job Pathways",
  "workforce.field_support": "View Field Support",
  "learning.start": "Open Learning",
  "marketplace.agritrade": "Browse AgriTrade",
  "agriculture.help": "Get Agriculture Help"
};

for (const [toolId, label] of Object.entries(lowRiskLabels)) {
  assert(helperBody.includes(`"${toolId}"`), `builder allowlist must include ${toolId}`);
  assert(helperBody.includes(`"${label}"`), `builder must include label ${label}`);
  assert(plan.includes(toolId), `plan must document ${toolId}`);
}

const excludedIds = [
  "health.intake",
  "health.telehealth",
  "health.video_preview",
  "health.provider_call",
  "map.location",
  "marketplace.sell_crop",
  "logistics.shipment",
  "agriculture.field_scan",
  "voice.tts_stt",
  "admin.dashboard",
  "reports.document"
];

for (const toolId of excludedIds) {
  assert(!helperBody.includes(`"${toolId}"`), `builder allowlist must not include excluded/high-risk ${toolId}`);
}

const forbiddenCalls = [
  "openWorkflowModal",
  "openWorkflowByVoice",
  "executeWorkflowConfigFromVoice",
  "handleVoiceCommand",
  "runBackendAgentCommand",
  "runUtilityAgentCommand",
  "confirmPendingWorkflow",
  "stageAgentAction",
  "maybeDispatchConfirmedNativeCallHandoff",
  "goSection(",
  "mutate(",
  "request("
];

for (const call of forbiddenCalls) {
  assert(!helperBody.includes(call), `builder must not call ${call}`);
}

const observeStart = app.indexOf("function observeAgentActionMetadata");
const observeEnd = app.indexOf("const countryLanguageMap", observeStart);
assert(observeStart >= 0 && observeEnd > observeStart, "observation helper body should be extractable");
const observeBody = app.slice(observeStart, observeEnd);
assert.match(observeBody, /lowRiskSuggestion:\s*buildLowRiskAgentActionSuggestion\(agentAction\)/, "observation record may store hidden low-risk suggestion");
assert(!/lowRiskSuggestion[\s\S]{0,160}(openWorkflow|goSection|mutate|request|confirm|execute|stage|modal)/i.test(observeBody), "observation helper must not execute from lowRiskSuggestion");
assert.match(observeBody, /Never execute, route, confirm, stage, open workflows,[\s\S]*or trigger modals from this metadata/i, "observation helper must retain no-execute/no-route guard");

assert.ok(!server.includes("nexus-tool-registry.v1.json"), "server.js must not reference static registry JSON at runtime");
assert.ok(!app.includes("nexus-tool-registry.v1.json"), "public/app.js must not reference static registry JSON at runtime");
assert.match(registry.runtimeStatus || "", /static|spec/i, "static registry must remain static/spec-only");
assert.match(registry.warning || "", /not runtime-authoritative/i, "static registry must remain non-authoritative");

assert.match(app, /assistantFullName = "AgriNexus"/, "AgriNexus compatibility must remain present");
assert.match(`${server} ${app}`, /AgriTrade/, "AgriTrade compatibility must remain present");
assert.match(`${server} ${app}`, /agriculture|farmer|crop/i, "agriculture/farm/crop compatibility must remain present");

console.log("Nexus low-risk suggestion builder QA passed");
