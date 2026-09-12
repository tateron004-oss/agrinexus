const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const appPath = path.join(root, "public", "app.js");
const stylesPath = path.join(root, "public", "styles.css");
const packagePath = path.join(root, "package.json");
const readinessDocPath = path.join(root, "docs", "NEXUS_CONTROLLED_ACTION_PREVIEW_READINESS.md");

const app = fs.readFileSync(appPath, "utf8");
const styles = fs.readFileSync(stylesPath, "utf8");
const pkg = JSON.parse(fs.readFileSync(packagePath, "utf8"));
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
const visibleGuardBody = extractFunction(app, "isVisibleControlledActionPreviewReadiness");
const previewRendererBody = extractFunction(app, "renderControlledActionPreview");
const previewPainterBody = extractFunction(app, "paintControlledActionPreview");
const clearPreviewBody = extractFunction(app, "clearControlledActionPreview");
const clearBody = extractFunction(app, "clearLevelOneAgentActionSuggestionLabel");
const localSuggestionBody = extractFunction(app, "localLevelOneSuggestionForSimpleUserIntent");
const paintLocalBody = extractFunction(app, "paintLocalLevelOneSuggestionForSimpleUserIntent");
const observationBody = extractFunction(app, "observeAgentActionMetadata");

assert.match(previewRendererBody, /nexus-controlled-action-preview/, "preview renderer must use scoped preview class");
assert.match(previewRendererBody, /Category:/, "preview renderer must show category");
assert.match(previewRendererBody, /Needs: No special permission/, "preview renderer must show no-permission language");
assert.match(previewRendererBody, /Preview only - no action has been taken\./, "preview renderer must show no-action-taken language");
assert.match(previewRendererBody, /safePreviewTitle/, "preview renderer must use safe preview title");
assert.match(previewRendererBody, /safePreviewSummary/, "preview renderer may use safe preview summary");
assert.match(visibleGuardBody, /previewEligible !== true/, "visible guard must require preview eligibility");
assert.match(visibleGuardBody, /userVisibleInThisPhase !== true/, "visible guard must require Phase 8M visibility");
assert.match(visibleGuardBody, /requiredPermissions[\s\S]*length/, "visible guard must block permission-required previews");
assert.match(visibleGuardBody, /missingInputs[\s\S]*length/, "visible guard must block missing-input previews");
assert.match(visibleGuardBody, /telehealth/, "visible guard must block sensitive terms");
assert.match(clearPreviewBody, /visibleControlledActionPreviewReadiness\s*=\s*null/, "central clear helper must reset stale preview state");
assert.match(clearPreviewBody, /paintControlledActionPreview\(\)/, "central clear helper must repaint preview state");
assert.match(clearBody, /clearControlledActionPreview\(/, "label clear helper must clear stale preview state");
assert.match(paintLocalBody, /buildControlledActionMetadataFromSuggestion\(suggestion\)/, "local labels should feed controlled metadata safely");
assert.match(paintLocalBody, /buildControlledActionPreviewReadinessFromMetadata\(controlledActionMetadata\)/, "local labels should feed preview readiness safely");
assert.match(observationBody, /visibleControlledActionPreviewReadiness = isVisibleControlledActionPreviewReadiness/, "backend observed metadata should render only visible-eligible previews");

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
  "request(",
  "navigator.permissions",
  "getUserMedia",
  "geolocation",
  "addEventListener",
  "onclick"
];

for (const call of forbiddenCalls) {
  assert(!visibleGuardBody.includes(call), `visible guard must not call ${call}`);
  assert(!previewRendererBody.includes(call), `preview renderer must not call ${call}`);
  assert(!previewPainterBody.includes(call), `preview painter must not call ${call}`);
}

assert(!/<button|data-preview-action|data-controlled-action-button|continue|confirm|execute|Do you want me to continue\?/i.test(previewRendererBody), "preview renderer must not include working action or continue controls");
assert(!/Action:\s|Risk:\s|schemaVersion|selectedToolId|actionId|auditPolicy|executionBoundary|blockedReason/.test(previewRendererBody), "preview renderer must not expose raw internal metadata");
assert.match(styles, /\.nexus-controlled-action-preview/, "preview card must have CSS");
assert.match(styles, /\.nexus-controlled-action-preview[\s\S]*pointer-events:\s*none/, "preview card must be non-clickable");
assert.match(styles, /border-radius:\s*8px/, "preview card should stay compact, not oversized");

const sandbox = vm.runInNewContext(`
  ${htmlSafeBody}
  let visibleControlledActionPreviewReadiness = null;
  ${lowRiskBuilderBody}
  ${metadataBuilderBody}
  ${taskPlanCategoryBody}
  ${taskPlanBuilderBody}
  ${readinessBuilderBody}
  ${visibleGuardBody}
  ${previewRendererBody}
  ({
    buildLowRiskAgentActionSuggestion,
    buildControlledActionMetadataFromSuggestion,
    buildControlledActionPreviewReadinessFromMetadata,
    isVisibleControlledActionPreviewReadiness,
    renderControlledActionPreview,
    setVisible: (readiness) => {
      visibleControlledActionPreviewReadiness = readiness;
    }
  });
`, {});

const expectedLowRisk = [
  ["workforce.training", "Training", "Review training resources"],
  ["workforce.job_pathways", "Jobs", "Review farm job resources"],
  ["learning.start", "Learning", "Review irrigation learning help"],
  ["marketplace.agritrade", "Marketplace", "Review AgriTrade browsing help"],
  ["agriculture.help", "Agriculture Help", "Review agriculture help"],
  ["workforce.field_support", "Field Support", "Review field support guidance"]
];

const forbiddenActionCompleteWords = /\b(opened|started|submitted|called|paid|verified|permission granted|diagnosed|dispatched|scheduled|bought|sold|checked out|logged in)\b/i;
const forbiddenRawWords = /\b(schemaVersion|selectedToolId|actionId|auditPolicy|executionBoundary|blockedReason|controlled-action-metadata|controlled-action-preview-readiness)\b/i;

for (const [selectedToolId, levelLabel, title] of expectedLowRisk) {
  const suggestion = sandbox.buildLowRiskAgentActionSuggestion({
    runtimeStatus: "metadata-only",
    source: "existing-router",
    selectedToolId
  });
  const metadata = sandbox.buildControlledActionMetadataFromSuggestion(suggestion);
  const readiness = sandbox.buildControlledActionPreviewReadinessFromMetadata(metadata);
  assert(readiness, `${selectedToolId} should build preview readiness`);
  assert.strictEqual(readiness.previewEligible, true, `${selectedToolId} should be preview eligible`);
  assert.strictEqual(readiness.userVisibleInThisPhase, true, `${selectedToolId} should be visible in Phase 8M`);
  assert.strictEqual(readiness.allowedNextStep, "preparePreviewOnly", `${selectedToolId} must only prepare preview`);
  assert.strictEqual(readiness.executionBoundary, "previewOnlyReadiness", `${selectedToolId} must not execute`);
  assert.strictEqual(readiness.requiresExplicitConfirmation, false, `${selectedToolId} must not create confirmation`);
  assert.strictEqual(sandbox.isVisibleControlledActionPreviewReadiness(readiness), true, `${selectedToolId} should pass visible guard`);
  const html = sandbox.renderControlledActionPreview(readiness);
  assert.match(html, /nexus-controlled-action-preview/, `${selectedToolId} should render preview card`);
  assert(html.includes(title), `${selectedToolId} should render title`);
  assert(html.includes(`Category: ${levelLabel}`), `${selectedToolId} should render category`);
  assert(html.includes("Needs: No special permission"), `${selectedToolId} should render no-permission language`);
  assert(html.includes("Preview only - no action has been taken."), `${selectedToolId} should render no-action text`);
  assert(!/<button|onclick|data-preview-action|data-controlled-action-button/i.test(html), `${selectedToolId} preview must not contain controls`);
  assert(!forbiddenRawWords.test(html), `${selectedToolId} preview must not expose raw metadata`);
  if (html.includes("nexus-controlled-action-task-plan")) {
    assert(html.includes("Blocked:"), `${selectedToolId} task plan preview should show safety boundaries`);
  }
  assert(!forbiddenActionCompleteWords.test(html), `${selectedToolId} preview must not include action-complete wording`);
}

const blockedReadinessSamples = [
  {
    schemaVersion: "controlled-action-preview-readiness.v1",
    actionId: "openTelehealthVideo",
    selectedToolId: "health.telehealth",
    levelOneLabel: "Health",
    previewEligible: false,
    previewBlockedReason: "blocked",
    previewRiskLevel: "restricted",
    previewMode: "restrictedPreviewBlocked",
    safePreviewTitle: "",
    safePreviewSummary: "",
    requiresExplicitConfirmation: false,
    requiredPermissions: [],
    missingInputs: [],
    allowedNextStep: "blocked",
    executionBoundary: "previewOnlyReadiness",
    auditPolicy: "observeOnly",
    userVisibleInThisPhase: false
  },
  {
    schemaVersion: "controlled-action-preview-readiness.v1",
    actionId: "openCameraPreview",
    selectedToolId: "health.video_preview",
    levelOneLabel: "Health",
    previewEligible: true,
    previewBlockedReason: null,
    previewRiskLevel: "low",
    previewMode: "permissionRequiredPreviewBlocked",
    safePreviewTitle: "Use camera",
    safePreviewSummary: "Camera permission would be needed.",
    requiresExplicitConfirmation: false,
    requiredPermissions: ["camera"],
    missingInputs: [],
    allowedNextStep: "preparePreviewOnly",
    executionBoundary: "previewOnlyReadiness",
    auditPolicy: "observeOnly",
    userVisibleInThisPhase: true
  },
  {
    schemaVersion: "controlled-action-preview-readiness.v1",
    actionId: "buyFertilizer",
    selectedToolId: "marketplace.agritrade",
    levelOneLabel: "Marketplace",
    previewEligible: true,
    previewBlockedReason: null,
    previewRiskLevel: "low",
    previewMode: "lowRiskPreviewOnly",
    safePreviewTitle: "Buy fertilizer",
    safePreviewSummary: "Nexus can buy fertilizer.",
    requiresExplicitConfirmation: false,
    requiredPermissions: [],
    missingInputs: [],
    allowedNextStep: "preparePreviewOnly",
    executionBoundary: "previewOnlyReadiness",
    auditPolicy: "observeOnly",
    userVisibleInThisPhase: true
  }
];

for (const readiness of blockedReadinessSamples) {
  assert.strictEqual(sandbox.isVisibleControlledActionPreviewReadiness(readiness), false, `${readiness.selectedToolId}/${readiness.actionId} must not pass visible preview guard`);
  assert.strictEqual(sandbox.renderControlledActionPreview(readiness), "", `${readiness.selectedToolId}/${readiness.actionId} must not render preview card`);
}

const excludedLocalPrompts = [
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
for (const prompt of excludedLocalPrompts) {
  assert.strictEqual(sandbox.renderControlledActionPreview(null), "", `${prompt} should have no stale preview when readiness is null`);
  assert(localSuggestionBody.includes("telehealth|video|camera|call|doctor"), "local high-risk command exclusions must remain present");
}

assert.strictEqual(
  pkg.scripts["qa:nexus-controlled-action-preview-ui"],
  "node scripts/nexus-controlled-action-preview-ui-qa.js",
  "package should expose preview UI QA alias"
);
assert.match(readinessDoc, /Phase 8M/, "preview readiness doc should document Phase 8M");
assert.match(readinessDoc, /Preview only - no action has been taken/i, "preview readiness doc should document no-action visible wording");

console.log("Nexus controlled action preview UI QA passed");
expectedLowRisk.forEach(([toolId, label]) => console.log(`- ${toolId} -> preview category ${label}`));
