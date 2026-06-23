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

assert.match(helperBody, /visible Level 1 label only/i, "builder must be explicitly visible Level 1 label only");
assert.match(helperBody, /display-only/i, "builder must state suggestions are display-only");
assert.match(helperBody, /not authoritative/i, "builder must state suggestions are non-authoritative");
assert.match(helperBody, /Existing routers remain authoritative/i, "builder must preserve router authority");
assert.match(helperBody, /agentAction\.runtimeStatus !== "metadata-only"/, "builder must require metadata-only runtime status");
assert.match(helperBody, /agentAction\.source !== "existing-router"/, "builder must require existing-router source");
assert.match(helperBody, /visibility:\s*"visible-level-1-label"/, "builder suggestions must remain visible Level 1 labels only");
assert.match(helperBody, /level:\s*1/, "builder suggestions must remain level 1");
assert.match(helperBody, /displayOnly:\s*true/, "builder suggestions must be display-only");
assert.match(helperBody, /userClickRequired:\s*false/, "builder suggestions must not be clickable actions");
assert.match(helperBody, /executionAllowed:\s*false/, "builder suggestions must not allow execution");
assert.match(helperBody, /autoOpenAllowed:\s*false/, "builder suggestions must not allow auto-open");
assert.match(helperBody, /source:\s*"agentAction\.metadata"/, "builder suggestions must identify metadata source");

const lowRiskLabels = {
  "workforce.training": ["Open Training", "Training"],
  "workforce.job_pathways": ["View Job Pathways", "Jobs"],
  "workforce.field_support": ["View Field Support", "Field Support"],
  "learning.start": ["Open Learning", "Learning"],
  "marketplace.agritrade": ["Browse AgriTrade", "Marketplace"],
  "agriculture.help": ["Get Agriculture Help", "Agriculture Help"]
};

for (const [toolId, [label, levelLabel]] of Object.entries(lowRiskLabels)) {
  assert(helperBody.includes(`"${toolId}"`), `builder allowlist must include ${toolId}`);
  assert(helperBody.includes(`"${label}"`), `builder must include label ${label}`);
  assert(helperBody.includes(`"${levelLabel}"`), `builder must include Level 1 label ${levelLabel}`);
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
assert.match(observeBody, /const lowRiskSuggestion = buildLowRiskAgentActionSuggestion\(agentAction\)/, "observation helper should build low-risk Level 1 suggestion label metadata");
assert.match(observeBody, /const controlledActionMetadata = buildControlledActionMetadataFromSuggestion\(lowRiskSuggestion, \{ agentAction \}\)/, "observation helper may build controlled action metadata from low-risk suggestion metadata only");
assert.match(observeBody, /lowRiskSuggestion,\s*\n\s*controlledActionMetadata/, "observation record may store low-risk Level 1 suggestion label metadata and controlled action metadata");
assert(!/lowRiskSuggestion[\s\S]{0,220}(openWorkflow|goSection|mutate|request\(|confirmPending|execute|stage|modal)/i.test(observeBody), "observation helper must not execute from lowRiskSuggestion");
assert.match(observeBody, /Never execute, route, confirm, stage, open workflows,[\s\S]*or trigger modals from this metadata/i, "observation helper must retain no-execute/no-route guard");

assert.match(app, /function renderLevelOneAgentActionSuggestionLabel/, "frontend must define a visible Level 1 label renderer");
assert.match(app, /function paintLevelOneAgentActionSuggestionLabel/, "frontend must paint Level 1 labels into visible assistant surfaces");
assert.match(app, /function clearLevelOneAgentActionSuggestionLabel/, "frontend must clear stale Level 1 labels on new commands");
assert.match(app, /function localLevelOneSuggestionForSimpleUserIntent/, "frontend should label safe local Standard User routes without changing selectedToolId metadata");
assert.match(app, /function paintLocalLevelOneSuggestionForSimpleUserIntent/, "frontend should paint safe local Standard User labels into visible assistant surfaces");
assert.match(app, /class="level-one-suggestion-label"/, "visible Level 1 label must use a non-button label element");
assert.match(app, /#userCaptionPanel/, "visible Level 1 label should be available in the Standard User caption panel");
assert.match(app, /#globalAssistantBar/, "visible Level 1 label should be available in the global assistant bar");
assert.match(app, /renderLevelOneAgentActionSuggestionLabel\(\)\}\$\{phrases\.map\(voiceCommandButton\)/, "visible Level 1 label should render alongside existing suggestion chips");
assert.match(app, /clearLevelOneAgentActionSuggestionLabel\(\);\s*\n\s*const companionUnderstanding/, "new commands must clear stale Level 1 labels before routing");
assert.match(app, /paintLocalLevelOneSuggestionForSimpleUserIntent\(intent, command\);/, "safe local Standard User routes must paint display-only Level 1 labels");
assert.match(app, /telehealth\|video\|camera\|call\|doctor\|provider[\s\S]{0,220}sell\|buy\|payment/, "local labels must exclude high-risk, privacy, permission, auth, and payment prompts");
assert(!/level-one-suggestion-label[\s\S]{0,240}(addEventListener|onclick|openWorkflow|goSection|mutate|request|confirm|execute|stage|modal)/i.test(app), "visible Level 1 label must not be clickable or executable");

assert.ok(!server.includes("nexus-tool-registry.v1.json"), "server.js must not reference static registry JSON at runtime");
assert.ok(!app.includes("nexus-tool-registry.v1.json"), "public/app.js must not reference static registry JSON at runtime");
assert.match(registry.runtimeStatus || "", /static|spec/i, "static registry must remain static/spec-only");
assert.match(registry.warning || "", /not runtime-authoritative/i, "static registry must remain non-authoritative");

assert.match(app, /assistantFullName = "AgriNexus"/, "AgriNexus compatibility must remain present");
assert.match(`${server} ${app}`, /AgriTrade/, "AgriTrade compatibility must remain present");
assert.match(`${server} ${app}`, /agriculture|farmer|crop/i, "agriculture/farm/crop compatibility must remain present");

console.log("Nexus low-risk suggestion builder QA passed");
