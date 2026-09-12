const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const appPath = path.join(root, "public", "app.js");
const packagePath = path.join(root, "package.json");
const qaSuitePath = path.join(root, "scripts", "qa-suite.js");
const readinessDocPath = path.join(root, "docs", "NEXUS_CONTROLLED_ACTION_PREVIEW_READINESS.md");

const app = fs.readFileSync(appPath, "utf8");
const pkg = JSON.parse(fs.readFileSync(packagePath, "utf8"));
const qaSuite = fs.readFileSync(qaSuitePath, "utf8");
const readinessDoc = fs.readFileSync(readinessDocPath, "utf8");

function extractFunction(source, name) {
  const start = source.indexOf(`function ${name}`);
  assert(start >= 0, `${name} should exist`);
  const signatureEnd = source.indexOf(")", start);
  const bodyStart = source.indexOf("{", signatureEnd);
  assert(signatureEnd > start && bodyStart > signatureEnd, `${name} body should start after its signature`);
  let depth = 0;
  for (let index = bodyStart; index < source.length; index += 1) {
    const char = source[index];
    if (char === "{") depth += 1;
    if (char === "}") {
      depth -= 1;
      if (depth === 0) return source.slice(start, index + 1);
    }
  }
  throw new Error(`${name} body should be extractable`);
}

const htmlSafeBody = extractFunction(app, "htmlSafe");
const lowRiskBuilderBody = extractFunction(app, "buildLowRiskAgentActionSuggestion");
const metadataBuilderBody = extractFunction(app, "buildControlledActionMetadataFromSuggestion");
const taskPlanCategoryBody = extractFunction(app, "nexusAutonomousTaskPlanCategory");
const taskPlanBuilderBody = extractFunction(app, "buildNexusAutonomousTaskPlan");
const readinessBuilderBody = extractFunction(app, "buildControlledActionPreviewReadinessFromMetadata");
const confirmationReadinessBuilderBody = extractFunction(app, "buildControlledActionConfirmationReadinessFromPreview");
const visibleGuardBody = extractFunction(app, "isVisibleControlledActionPreviewReadiness");
const previewRendererBody = extractFunction(app, "renderControlledActionPreview");
const confirmationPrototypeGuardBody = extractFunction(app, "isVisibleControlledActionConfirmationPrototypeReadiness");
const confirmationPrototypeRendererBody = extractFunction(app, "renderControlledActionConfirmationPrototype");
const confirmationPrototypePainterBody = extractFunction(app, "paintControlledActionConfirmationPrototype");
const navigationReadinessBuilderBody = extractFunction(app, "buildControlledActionNavigationReadinessFromConfirmation");
const previewPainterBody = extractFunction(app, "paintControlledActionPreview");
const clearPreviewBody = extractFunction(app, "clearControlledActionPreview");
const labelPainterBody = extractFunction(app, "paintLevelOneAgentActionSuggestionLabel");
const clearLabelBody = extractFunction(app, "clearLevelOneAgentActionSuggestionLabel");
const localSuggestionBody = extractFunction(app, "localLevelOneSuggestionForSimpleUserIntent");
const paintLocalBody = extractFunction(app, "paintLocalLevelOneSuggestionForSimpleUserIntent");
const observationBody = extractFunction(app, "observeAgentActionMetadata");
const handleVoiceCommandCoreBody = extractFunction(app, "handleVoiceCommandCore");
const runSimpleUserVoiceIntentBody = extractFunction(app, "runSimpleUserVoiceIntent");
const openMappedUserWorkflowBody = extractFunction(app, "openMappedUserWorkflow");
const openAgentResultWorkflowBody = extractFunction(app, "openAgentResultWorkflow");
const runGlobalCommandBody = extractFunction(app, "runGlobalCommand");
const activateSectionBody = extractFunction(app, "activateSectionFromButton");
const closeAskBody = extractFunction(app, "closeAskNexus");
const openHomeBody = extractFunction(app, "openNexusHome");
const setCommandInputsBody = extractFunction(app, "setCommandInputs");
const backendCommandBody = extractFunction(app, "runBackendAgentCommand");
const utilityCommandBody = extractFunction(app, "runUtilityAgentCommand");

assert.match(clearPreviewBody, /visibleControlledActionPreviewReadiness\s*=\s*null/, "central preview clear must reset preview readiness");
assert.match(clearPreviewBody, /visibleControlledStagedActionPreview\s*=\s*null/, "central preview clear must reset staged preview readiness");
assert.match(clearPreviewBody, /visibleUserConfirmationPreview\s*=\s*null/, "central preview clear must reset user confirmation preview readiness");
assert.match(clearPreviewBody, /paintControlledActionPreview\(\)/, "central preview clear must repaint preview UI");
assert.match(clearLabelBody, /visibleLevelOneAgentActionSuggestion\s*=\s*null/, "label clear must reset visible Level 1 suggestion");
assert.match(clearLabelBody, /clearControlledActionPreview\(/, "label clear must also clear preview readiness");
assert.match(handleVoiceCommandCoreBody, /clearLevelOneAgentActionSuggestionLabel\(\)/, "new commands must clear stale labels and previews before routing");
assert.match(handleVoiceCommandCoreBody, /explicitLearningIntent[\s\S]*paintLocalLevelOneSuggestionForSimpleUserIntent\(\{ type: "workflow", workflow: "learning"/, "explicit learning workflow commands should paint low-risk previews before opening learning workflow");
assert.match(handleVoiceCommandCoreBody, /explicitLearningIntent[\s\S]*preserveControlledActionPreviewDuringCommandRoute\s*=\s*true/, "explicit learning workflow commands should preserve the current preview through command-owned close");
assert.match(runSimpleUserVoiceIntentBody, /preserveControlledActionPreviewDuringCommandRoute\s*=\s*true/, "command-owned route closes should preserve the current preview for that route turn");
assert.match(runSimpleUserVoiceIntentBody, /queueMicrotask[\s\S]*preserveControlledActionPreviewDuringCommandRoute\s*=\s*false/, "command-owned preview preservation should be short-lived");
assert.match(runSimpleUserVoiceIntentBody, /directAction === "learning-guided"[\s\S]*openLearningGuidedNow\(intent\.response\)[\s\S]*paintLocalLevelOneSuggestionForSimpleUserIntent\(intent, command\)/, "guided learning typed commands should repaint eligible previews after learning intake opens");
assert.match(runSimpleUserVoiceIntentBody, /directAction === "learning-guided"[\s\S]*setTimeout\(\(\) => \{[\s\S]*paintLocalLevelOneSuggestionForSimpleUserIntent\(intent, command\)/, "guided learning typed commands should repaint after delayed user-process rendering");
assert.match(runSimpleUserVoiceIntentBody, /intent\.type === "workflow"[\s\S]*openWorkflowByVoice\(intent\.workflow, intent\.action, intent\.response, intent\.dataset \|\| \{\}\)[\s\S]*paintLocalLevelOneSuggestionForSimpleUserIntent\(intent, command\)/, "workflow typed commands should repaint eligible low-risk previews after workflow routing");
assert.match(runSimpleUserVoiceIntentBody, /intent\.type === "workflow"[\s\S]*setTimeout\(\(\) => \{[\s\S]*paintLocalLevelOneSuggestionForSimpleUserIntent\(intent, command\)/, "workflow typed commands should repaint after delayed user-process rendering");
assert.match(openAgentResultWorkflowBody, /conversation\.learning_start"[\s\S]*openWorkflowByVoice\("learning", "start", response, \{\}\)[\s\S]*paintLocalLevelOneSuggestionForSimpleUserIntent\(\{ type: "workflow", workflow: "learning", action: "start" \}, command\)/, "backend learning-start workflow bridge should repaint eligible low-risk previews after workflow routing");
assert.match(openAgentResultWorkflowBody, /conversation\.learning_start"[\s\S]*setTimeout\(\(\) => \{[\s\S]*paintLocalLevelOneSuggestionForSimpleUserIntent\(\{ type: "workflow", workflow: "learning", action: "start" \}, command\)/, "backend learning-start workflow bridge should repaint after delayed user-process rendering");
assert.match(openMappedUserWorkflowBody, /mapped\.command[\s\S]*paintLocalLevelOneSuggestionForSimpleUserIntent\(mapped, mapped\.command\)/, "mapped standard-user workflow commands should paint eligible low-risk previews");
assert.match(openMappedUserWorkflowBody, /mapped\.command[\s\S]*preserveControlledActionPreviewDuringCommandRoute\s*=\s*true/, "mapped standard-user workflow commands should preserve previews through command-owned workflow routing");
assert.match(openMappedUserWorkflowBody, /forceOpenUserProcessScreen[\s\S]*paintControlledActionPreview\(\)[\s\S]*paintLevelOneAgentActionSuggestionLabel\(\)/, "mapped workflow opening should repaint preview and label surfaces after user-process rendering");
assert.match(openMappedUserWorkflowBody, /forceOpenUserProcessScreen[\s\S]*setTimeout\(\(\) => \{[\s\S]*paintControlledActionPreview\(\)[\s\S]*paintLevelOneAgentActionSuggestionLabel\(\)/, "mapped workflow opening should repaint after delayed user-process rendering");
assert.match(closeAskBody, /!options\.keepPreview && !preserveControlledActionPreviewDuringCommandRoute/, "manual assistant close should clear previews unless a command-owned route is in progress");
assert.match(runGlobalCommandBody, /!String\(command \|\| ""\)\.trim\(\)[\s\S]*clearLevelOneAgentActionSuggestionLabel\(\)/, "empty global typed commands should clear stale previews");
assert.match(app, /globalCommandInput"\)\.addEventListener\("input"[\s\S]*clearLevelOneAgentActionSuggestionLabel\(\)/, "clearing the visible global command field should clear stale previews");
assert.match(backendCommandBody, /if \(!visibleControlledActionPreviewReadiness(?: \|\| isNexusSimulationCommand\(command\))?\)[\s\S]*paintLocalLevelOneSuggestionForSimpleUserIntent\(\{ type: "direct" \}, command\)/, "backend answers without metadata should allow low-risk local preview fallback, with the simulation-only prompt exception");
assert.match(utilityCommandBody, /if \(!visibleControlledActionPreviewReadiness(?: \|\| isNexusSimulationCommand\(command\))?\)[\s\S]*paintLocalLevelOneSuggestionForSimpleUserIntent\(\{ type: "direct" \}, command\)/, "utility answers without metadata should allow low-risk local preview fallback, with the simulation-only prompt exception");
assert.match(paintLocalBody, /clearControlledActionPreview\("low-risk-preview-replaced"\)/, "low-risk preview generation must replace old preview state");
assert.match(paintLocalBody, /if \(!suggestion\)[\s\S]*clearLevelOneAgentActionSuggestionLabel\(\)/, "ineligible local commands must clear old previews");
assert.match(observationBody, /clearLevelOneAgentActionSuggestionLabel\(\)/, "missing, blocked, or ineligible backend metadata must clear previews");
assert.match(observationBody, /clearControlledActionPreview\("backend-preview-readiness-replaced"\)/, "backend preview readiness must replace old preview state");
assert.match(activateSectionBody, /clearLevelOneAgentActionSuggestionLabel\(\)/, "user-driven route/module changes must clear stale previews");
assert.match(closeAskBody, /clearLevelOneAgentActionSuggestionLabel\(\)/, "assistant close/reset must clear stale previews");
assert.match(openHomeBody, /clearLevelOneAgentActionSuggestionLabel\(\)/, "home reset must clear stale previews");
assert.match(setCommandInputsBody, /!value\.trim\(\)[\s\S]*clearLevelOneAgentActionSuggestionLabel\(\)/, "input clear/reset should clear stale previews");

const forbiddenClearCalls = [
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
  "request(",
  "navigator.permissions",
  "getUserMedia",
  "geolocation",
  "addEventListener",
  "onclick",
  "click()"
];

for (const call of forbiddenClearCalls) {
  assert(!clearPreviewBody.includes(call), `central preview clear must not call ${call}`);
  assert(!clearLabelBody.includes(call), `label/preview clear must not call ${call}`);
}

const sandbox = vm.runInNewContext(`
  const debugLogs = [];
  const localStorage = { getItem: () => null };
  const previewHosts = [
    { innerHTML: "", insertAdjacentElement() {}, classList: { hidden: false, toggle(name, value) { this[name] = value; } } },
    { innerHTML: "", insertAdjacentElement() {}, classList: { hidden: false, toggle(name, value) { this[name] = value; } } }
  ];
  const labelHosts = [
    { textContent: "", classList: { hidden: false, toggle(name, value) { this[name] = value; } } },
    { textContent: "", classList: { hidden: false, toggle(name, value) { this[name] = value; } } }
  ];
  const anchors = [{ insertAdjacentElement() {} }, { insertAdjacentElement() {} }];
  const roots = [
    {
      querySelector(selector) {
        if (selector === "[data-controlled-action-preview]") return previewHosts[0];
        if (selector === "[data-level-one-suggestion-label]") return labelHosts[0];
        return null;
      }
    },
    {
      querySelector(selector) {
        if (selector === "[data-controlled-action-preview]") return previewHosts[1];
        if (selector === "[data-level-one-suggestion-label]") return labelHosts[1];
        return null;
      }
    }
  ];
  function $(selector) {
    if (selector === "#userCaptionPanel") return roots[0];
    if (selector === "#globalAssistantBar") return roots[1];
    if (selector === "#userCaptionText") return anchors[0];
    if (selector === "#globalAssistantStatus") return anchors[1];
    return null;
  }
  const document = {
    createElement() {
      return { dataset: {}, className: "", setAttribute() {}, innerHTML: "", textContent: "", classList: { hidden: false, toggle(name, value) { this[name] = value; } } };
    }
  };
  const console = { debug: (...args) => debugLogs.push(args) };
  ${htmlSafeBody}
  let visibleLevelOneAgentActionSuggestion = null;
  let visibleControlledActionPreviewReadiness = null;
  let visibleControlledStagedActionPreview = null;
  let visibleUserConfirmationPreview = null;
  let latestControlledActionConfirmationReadiness = null;
  let latestControlledActionNavigationReadiness = null;
  let controlledActionConfirmationPrototypeStatus = "";
  let latestObservedAgentActionMetadata = null;
  let observedAgentActionMetadataLog = [];
  ${lowRiskBuilderBody}
  ${metadataBuilderBody}
  ${taskPlanCategoryBody}
  ${taskPlanBuilderBody}
  ${readinessBuilderBody}
  ${confirmationReadinessBuilderBody}
  ${visibleGuardBody}
  ${previewRendererBody}
  ${confirmationPrototypeGuardBody}
  ${confirmationPrototypeRendererBody}
  ${confirmationPrototypePainterBody}
  ${navigationReadinessBuilderBody}
  function buildControlledStagedActionPreviewFromReadiness() {
    return null;
  }
  function buildUserConfirmationPreviewFromReadiness() {
    return null;
  }
  function paintControlledStagedActionPreview() {}
  ${previewPainterBody}
  ${clearPreviewBody}
  ${labelPainterBody}
  ${clearLabelBody}
  ${localSuggestionBody}
  ${paintLocalBody}
  ${observationBody}
  ({
    buildLowRiskAgentActionSuggestion,
    buildControlledActionMetadataFromSuggestion,
    buildControlledActionPreviewReadinessFromMetadata,
    isVisibleControlledActionPreviewReadiness,
    renderControlledActionPreview,
    paintLocalLevelOneSuggestionForSimpleUserIntent,
    clearControlledActionPreview,
    clearLevelOneAgentActionSuggestionLabel,
    observeAgentActionMetadata,
    previewHosts,
    labelHosts,
    state: () => ({ visibleLevelOneAgentActionSuggestion, visibleControlledActionPreviewReadiness, latestObservedAgentActionMetadata, observedAgentActionMetadataLog })
  });
`, {});

function previewTexts() {
  return sandbox.previewHosts.map(host => host.innerHTML).filter(Boolean);
}

function labelTexts() {
  return sandbox.labelHosts.map(host => host.textContent).filter(Boolean);
}

function assertNoExecutionSurface(html, label) {
  assert(!/<button|onclick|data-preview-action|data-controlled-action-button|Do you want me to continue\?|confirm|execute/i.test(html), `${label} must not create execution UI`);
  assert(!/\b(opened|started|submitted|called|paid|verified|permission granted)\b/i.test(html), `${label} must not claim action completion`);
}

const jobsIntent = { type: "direct", directAction: "workforce-guided" };
sandbox.paintLocalLevelOneSuggestionForSimpleUserIntent(jobsIntent, "Show me farm jobs");
assert.strictEqual(previewTexts().length, 2, "low-risk preview should render once per assistant surface");
assert(previewTexts()[0].includes("Review farm job resources"), "farm jobs preview should render safe title");
assert(labelTexts().every(text => text === "Jobs"), "farm jobs should render Jobs label");
assertNoExecutionSurface(previewTexts().join("\n"), "farm jobs preview");

sandbox.paintLocalLevelOneSuggestionForSimpleUserIntent(jobsIntent, "Show me farm jobs");
assert.strictEqual(previewTexts().length, 2, "repeating low-risk command should replace, not stack duplicate preview nodes");
assert.strictEqual((previewTexts()[0].match(/Review farm job resources/g) || []).length, 1, "repeating low-risk command should not duplicate card content");

sandbox.paintLocalLevelOneSuggestionForSimpleUserIntent({ type: "direct", directAction: "learning-guided" }, "Teach me how irrigation works");
assert(previewTexts()[0].includes("Review irrigation learning help"), "different low-risk command should replace previous preview");
assert(!previewTexts()[0].includes("Review farm job resources"), "different low-risk command should remove previous preview content");
assert(labelTexts().every(text => text === "Learning"), "different low-risk command should replace previous label");

const blockedPrompts = [
  "Start a telehealth video call",
  "Use my camera to diagnose this crop",
  "Call the doctor",
  "Find my location",
  "Sell my produce",
  "Buy fertilizer",
  "Process my payment",
  "Log into my account",
  "Verify my identity"
];

for (const prompt of blockedPrompts) {
  sandbox.paintLocalLevelOneSuggestionForSimpleUserIntent(jobsIntent, "Show me farm jobs");
  sandbox.paintLocalLevelOneSuggestionForSimpleUserIntent({ type: "direct", directAction: "health-intake" }, prompt);
  assert.strictEqual(previewTexts().length, 0, `${prompt} should clear prior low-risk preview`);
  assert.strictEqual(labelTexts().length, 0, `${prompt} should clear prior Level 1 label`);
}

sandbox.paintLocalLevelOneSuggestionForSimpleUserIntent(jobsIntent, "Show me farm jobs");
sandbox.clearLevelOneAgentActionSuggestionLabel();
assert.strictEqual(previewTexts().length, 0, "suggestion clear path should clear preview");
assert.strictEqual(labelTexts().length, 0, "suggestion clear path should clear labels");

sandbox.paintLocalLevelOneSuggestionForSimpleUserIntent(jobsIntent, "Show me farm jobs");
sandbox.clearControlledActionPreview("qa-reset");
assert.strictEqual(previewTexts().length, 0, "central clear should clear preview only");
assert(labelTexts().every(text => text === "Jobs"), "central preview clear should not clear labels by itself");

sandbox.paintLocalLevelOneSuggestionForSimpleUserIntent(jobsIntent, "Show me farm jobs");
sandbox.observeAgentActionMetadata({}, { source: "qa", command: "plain conversation" });
assert.strictEqual(previewTexts().length, 0, "backend response without agentAction should clear stale preview");
assert.strictEqual(labelTexts().length, 0, "backend response without agentAction should clear stale label");

sandbox.paintLocalLevelOneSuggestionForSimpleUserIntent(jobsIntent, "Show me farm jobs");
sandbox.observeAgentActionMetadata({ metadata: { agentAction: { runtimeStatus: "runtime", source: "existing-router", selectedToolId: "workforce.training" } } }, { source: "qa", command: "runtime action" });
assert.strictEqual(previewTexts().length, 0, "non-metadata runtime status should clear stale preview");
assert.strictEqual(labelTexts().length, 0, "non-metadata runtime status should clear stale label");

sandbox.paintLocalLevelOneSuggestionForSimpleUserIntent(jobsIntent, "Show me farm jobs");
sandbox.observeAgentActionMetadata({ metadata: { agentAction: { runtimeStatus: "metadata-only", source: "existing-router", selectedToolId: "health.telehealth" } } }, { source: "qa", command: "start telehealth" });
assert.strictEqual(previewTexts().length, 0, "blocked or null low-risk suggestion should clear stale preview");
assert.strictEqual(labelTexts().length, 0, "blocked or null low-risk suggestion should clear stale label");

sandbox.observeAgentActionMetadata({ metadata: { agentAction: { runtimeStatus: "metadata-only", source: "existing-router", selectedToolId: "workforce.training", riskLevel: "low" } } }, { source: "qa", command: "training" });
assert(previewTexts()[0].includes("Review training resources"), "eligible backend observation should render preview");
assert(labelTexts().every(text => text === "Training"), "eligible backend observation should render label");
assert.strictEqual(sandbox.state().visibleControlledActionPreviewReadiness.selectedToolId, "workforce.training", "selectedToolId should remain unchanged by clear lifecycle");

assert.strictEqual(
  pkg.scripts["qa:nexus-controlled-action-preview-clear"],
  "node scripts/nexus-controlled-action-preview-clear-qa.js",
  "package should expose preview clear QA alias"
);
assert(qaSuite.includes("scripts/nexus-controlled-action-preview-clear-qa.js"), "nexus-workforce suite should include preview clear QA");
assert.match(readinessDoc, /Phase 8O/i, "preview readiness doc should document Phase 8O clearing");
assert.match(readinessDoc, /Clear Conditions/i, "preview readiness doc should document clear conditions");
assert.match(readinessDoc, /does not execute/i, "preview readiness doc should preserve no-execution boundary");

console.log("Nexus controlled action preview clear QA passed");
console.log("- low-risk previews replace instead of stacking");
console.log("- high-risk, permission, transaction, account, and identity prompts clear stale previews");
console.log("- clear paths do not execute, route, stage, confirm, or request permissions");
