const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const appPath = path.join(root, "public", "app.js");
const serverPath = path.join(root, "server.js");
const registryPath = path.join(root, "docs", "nexus-tool-registry.v1.json");

const app = fs.readFileSync(appPath, "utf8");
const server = fs.readFileSync(serverPath, "utf8");
const registry = JSON.parse(fs.readFileSync(registryPath, "utf8"));

assert.match(app, /function observeAgentActionMetadata\(response = \{\}, context = \{\}\)/, "frontend must define observeAgentActionMetadata helper");
assert.match(app, /function buildLowRiskAgentActionSuggestion\(agentAction = \{\}\)/, "frontend may define hidden low-risk suggestion builder");
assert.match(app, /agentAction is observation-only and non-authoritative/i, "helper must state agentAction is observation-only");
assert.match(app, /Existing frontend routers remain authoritative/i, "helper must state existing routers remain authoritative");
assert.match(app, /static registry is not[\s\S]{0,40}runtime-authoritative/i, "helper must state static registry is non-authoritative");
assert.match(app, /Never execute, route, confirm, stage, open workflows,[\s\S]*or trigger modals from this metadata/i, "helper must include explicit no-execute/no-route guard");
assert.match(app, /agentAction\.runtimeStatus !== "metadata-only"/, "helper must require metadata-only runtimeStatus");
assert.match(app, /agentAction\.source !== "existing-router"/, "helper must require existing-router source");
assert.match(app, /latestObservedAgentActionMetadata/, "helper must store only local observation metadata");
assert.match(app, /observedAgentActionMetadataLog/, "helper must keep a bounded local observation log");
assert.match(app, /lowRiskSuggestion:\s*buildLowRiskAgentActionSuggestion\(agentAction\)/, "observation may store hidden suggestion metadata");
assert.match(app, /observeAgentActionMetadata\(result, \{ source: "runBackendAgentCommand", command \}\)/, "backend agent command response should be observed");
assert.match(app, /observeAgentActionMetadata\(result, \{ source: "runUtilityAgentCommand", command \}\)/, "utility agent command response should be observed");

const helperStart = app.indexOf("function observeAgentActionMetadata");
const helperEnd = app.indexOf("const countryLanguageMap", helperStart);
assert(helperStart >= 0 && helperEnd > helperStart, "helper body should be extractable");
const helperBody = app.slice(helperStart, helperEnd);
const forbiddenCalls = [
  "openWorkflowModal",
  "openWorkflowByVoice",
  "executeWorkflowConfigFromVoice",
  "executeWorkflow",
  "confirmWorkflow",
  "stageAgentAction",
  "maybeDispatchConfirmedNativeCallHandoff",
  "goSection(",
  "mutate(",
  "request("
];
for (const forbidden of forbiddenCalls) {
  assert.ok(!helperBody.includes(forbidden), `helper must not call ${forbidden}`);
}

assert.ok(!app.includes("nexus-tool-registry.v1.json"), "public/app.js must not reference static registry JSON at runtime");
assert.ok(!server.includes("nexus-tool-registry.v1.json"), "server.js must not reference static registry JSON at runtime");
assert.match(registry.runtimeStatus || "", /static|spec/i, "static registry must remain static/spec-only");
assert.match(registry.warning || "", /not runtime-authoritative/i, "static registry must remain non-authoritative");

assert.match(app, /async function runBackendAgentCommand/, "existing backend command router must remain present");
assert.match(app, /async function handleVoiceCommand/, "existing voice command router must remain present");
assert.match(app, /function openWorkflowByVoice/, "existing workflow opener must remain present");
assert.match(app, /function openHealthVideoPreviewWorkflow/, "health video preview route must remain present");
assert.match(app, /function handleLocalMusicControlCommand/, "music controls must remain present");
assert.match(app, /maybeDispatchConfirmedNativeCallHandoff/, "call handoff path must remain present");
assert.match(app, /assistantFullName = "AgriNexus"/, "AgriNexus compatibility must remain present");
assert.match(app, /AgriTrade|trade/i, "AgriTrade/trade compatibility must remain present");
assert.match(app, /agriculture|farmer|crop/i, "agriculture/farm/crop compatibility must remain present");
assert.match(app, /location permission|geolocation|routeTrackingWatchId/i, "map/location permission patterns must remain present");

console.log("Nexus agent action frontend observation QA passed");
