const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const appPath = path.join(root, "public", "app.js");
const stylesPath = path.join(root, "public", "styles.css");
const serverPath = path.join(root, "server.js");
const planPath = path.join(root, "docs", "NEXUS_LOW_RISK_SUGGESTION_DISPLAY_PLAN.md");

const app = fs.readFileSync(appPath, "utf8");
const styles = fs.readFileSync(stylesPath, "utf8");
const server = fs.readFileSync(serverPath, "utf8");
const plan = fs.readFileSync(planPath, "utf8");

function sliceFunction(source, name) {
  const start = source.indexOf(`function ${name}`);
  assert(start >= 0, `${name} must exist`);
  const nextFunction = source.indexOf("\nfunction ", start + 1);
  assert(nextFunction > start, `${name} body must be extractable`);
  return source.slice(start, nextFunction);
}

const htmlSafeBody = sliceFunction(app, "htmlSafe");
const builderBody = sliceFunction(app, "buildLowRiskAgentActionSuggestion");
const rendererBody = sliceFunction(app, "renderLevelOneAgentActionSuggestionLabel");
const paintBody = sliceFunction(app, "paintLevelOneAgentActionSuggestionLabel");
const clearBody = sliceFunction(app, "clearLevelOneAgentActionSuggestionLabel");
const localSuggestionBody = sliceFunction(app, "localLevelOneSuggestionForSimpleUserIntent");
const paintLocalBody = sliceFunction(app, "paintLocalLevelOneSuggestionForSimpleUserIntent");
const renderLiveStart = app.indexOf("function renderLiveVoiceSuggestions");
const renderLiveEnd = app.indexOf("function renderVoiceHelpPanel", renderLiveStart);
assert(renderLiveStart >= 0 && renderLiveEnd > renderLiveStart, "renderLiveVoiceSuggestions must be extractable");
const renderLiveBody = app.slice(renderLiveStart, renderLiveEnd);
const runSimpleStart = app.indexOf("function runSimpleUserVoiceIntent");
const runSimpleEnd = app.indexOf("function isPriorityServiceVoiceIntent", runSimpleStart);
assert(runSimpleStart >= 0 && runSimpleEnd > runSimpleStart, "runSimpleUserVoiceIntent must be extractable");
const runSimpleBody = app.slice(runSimpleStart, runSimpleEnd);

assert.match(builderBody, /visible Level 1 label only/i, "builder must remain display-label only");
assert.match(builderBody, /visibility:\s*"visible-level-1-label"/, "builder must expose Level 1 label visibility");
assert.match(builderBody, /displayOnly:\s*true/, "builder must mark labels display-only");
assert.match(builderBody, /executionAllowed:\s*false/, "builder must not allow execution");
assert.match(builderBody, /autoOpenAllowed:\s*false/, "builder must not allow auto-open");
assert.match(builderBody, /userClickRequired:\s*false/, "Level 1 labels must not be user-click actions");
assert.match(rendererBody, /class="level-one-suggestion-label"/, "renderer must use the Level 1 label class");
assert.match(paintBody, /data-level-one-suggestion-label/, "paint helper must mark visible Level 1 labels");
assert.match(paintBody, /#userCaptionPanel/, "paint helper must target the visible caption panel");
assert.match(paintBody, /#globalAssistantBar/, "paint helper must target the visible global assistant bar");
assert.match(clearBody, /visibleLevelOneAgentActionSuggestion\s*=\s*null/, "clear helper must reset the visible suggestion state");
assert.match(app, /clearLevelOneAgentActionSuggestionLabel\(\);\s*\n\s*const companionUnderstanding/, "new commands must clear stale visible labels before routing");
assert.match(localSuggestionBody, /local-simple-user-route/, "local Standard User routes may add display-only labels without metadata authority");
assert.match(localSuggestionBody, /telehealth\|video\|camera\|call\|doctor/, "local labels must exclude high-risk health/video/call prompts");
assert.match(localSuggestionBody, /sell\|buy\|payment\|pay\|checkout\|fertilizer\|login\|account\|verify\|identity/, "local labels must exclude payment/auth/trade execution prompts");
assert.match(paintLocalBody, /paintLevelOneAgentActionSuggestionLabel\(\)/, "local display helper must only paint the visible label");
assert.match(runSimpleBody, /paintLocalLevelOneSuggestionForSimpleUserIntent\(intent, command\);/, "local simple routes must paint safe display-only labels before opening existing workflows");
assert.match(renderLiveBody, /renderLevelOneAgentActionSuggestionLabel\(\)/, "live suggestions must include the display-only label renderer");
assert.match(styles, /\.level-one-suggestion-label/, "Level 1 label must have compact styling");
assert.match(styles, /pointer-events:\s*none/, "Level 1 label styling must not invite interaction");

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
  assert(!builderBody.includes(call), `builder must not call ${call}`);
  assert(!rendererBody.includes(call), `renderer must not call ${call}`);
  assert(!paintBody.includes(call), `paint helper must not call ${call}`);
  assert(!clearBody.includes(call), `clear helper must not call ${call}`);
  assert(!localSuggestionBody.includes(call), `local suggestion helper must not call ${call}`);
  assert(!paintLocalBody.includes(call), `local suggestion paint helper must not call ${call}`);
}

assert(!/level-one-suggestion-label[\s\S]{0,240}(addEventListener|onclick|openWorkflow|goSection|mutate|request|confirm|execute|stage|modal)/i.test(app), "Level 1 label must not be clickable or executable");
assert(!/data-low-risk-suggestion|data-agent-action-suggestion|lowRiskSuggestionButton|agentActionSuggestionButton/i.test(app), "Phase 8F must not add actionable suggestion buttons or data hooks");

const harness = vm.runInNewContext(`
  ${htmlSafeBody}
  let visibleLevelOneAgentActionSuggestion = null;
  ${builderBody}
  ${rendererBody}
  ({
    buildLowRiskAgentActionSuggestion,
    renderLevelOneAgentActionSuggestionLabel,
    setLatestSuggestion: (lowRiskSuggestion) => {
      visibleLevelOneAgentActionSuggestion = lowRiskSuggestion;
    }
  });
`, {});

const allowed = [
  ["workforce.training", "Open Training", "Training"],
  ["workforce.job_pathways", "View Job Pathways", "Jobs"],
  ["workforce.field_support", "View Field Support", "Field Support"],
  ["learning.start", "Open Learning", "Learning"],
  ["marketplace.agritrade", "Browse AgriTrade", "Marketplace"],
  ["agriculture.help", "Get Agriculture Help", "Agriculture Help"]
];

for (const [selectedToolId, label, levelLabel] of allowed) {
  const suggestion = harness.buildLowRiskAgentActionSuggestion({
    runtimeStatus: "metadata-only",
    source: "existing-router",
    selectedToolId
  });
  assert(suggestion, `${selectedToolId} should produce a Level 1 label`);
  assert.strictEqual(suggestion.level, 1, `${selectedToolId} should be Level 1`);
  assert.strictEqual(suggestion.visibility, "visible-level-1-label", `${selectedToolId} should be visible label only`);
  assert.strictEqual(suggestion.label, label, `${selectedToolId} action label should remain ${label}`);
  assert.strictEqual(suggestion.levelLabel, levelLabel, `${selectedToolId} category label should be ${levelLabel}`);
  assert.strictEqual(suggestion.displayOnly, true, `${selectedToolId} should be display-only`);
  assert.strictEqual(suggestion.userClickRequired, false, `${selectedToolId} should not become a click action`);
  assert.strictEqual(suggestion.executionAllowed, false, `${selectedToolId} must not allow execution`);
  assert.strictEqual(suggestion.autoOpenAllowed, false, `${selectedToolId} must not auto-open`);
  harness.setLatestSuggestion(suggestion);
  const html = harness.renderLevelOneAgentActionSuggestionLabel();
  assert.match(html, /class="level-one-suggestion-label"/, `${selectedToolId} should render a label span`);
  assert(html.includes(levelLabel), `${selectedToolId} should render visible label ${levelLabel}`);
  assert(!/<button|data-voice-example|onclick|data-low-risk-suggestion/i.test(html), `${selectedToolId} label must not render as a button`);
  assert(plan.includes(selectedToolId), `display plan must document ${selectedToolId}`);
}

const excluded = [
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
  "reports.document",
  "payments.checkout",
  "identity.account"
];

for (const selectedToolId of excluded) {
  const suggestion = harness.buildLowRiskAgentActionSuggestion({
    runtimeStatus: "metadata-only",
    source: "existing-router",
    selectedToolId
  });
  assert.strictEqual(suggestion, null, `${selectedToolId} must not produce a Level 1 label`);
}

assert.strictEqual(harness.buildLowRiskAgentActionSuggestion({ runtimeStatus: "runtime", source: "existing-router", selectedToolId: "learning.start" }), null, "non-metadata runtime status must not produce labels");
assert.strictEqual(harness.buildLowRiskAgentActionSuggestion({ runtimeStatus: "metadata-only", source: "registry", selectedToolId: "learning.start" }), null, "non-existing-router source must not produce labels");

assert.match(server, /selectedToolId:\s*inferredSelectedToolId \|\| null/, "selectedToolId inference must remain backend metadata-only");
assert(!server.includes("level-one-suggestion-label"), "server must not render frontend Level 1 labels");
assert.match(app, /assistantFullName = "AgriNexus"/, "AgriNexus compatibility must remain present");
assert.match(`${server} ${app}`, /AgriTrade/, "AgriTrade compatibility must remain present");
assert.match(`${server} ${app}`, /agriculture|farmer|crop/i, "agriculture/farm/crop compatibility must remain present");

console.log("Nexus Level 1 suggestion label QA passed");
allowed.forEach(([toolId, , levelLabel]) => console.log(`- ${toolId} -> ${levelLabel}`));
excluded.forEach(toolId => console.log(`- ${toolId} -> no label`));
