const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const appPath = path.join(root, "public", "app.js");
const stylesPath = path.join(root, "public", "styles.css");
const packagePath = path.join(root, "package.json");
const suitePath = path.join(root, "scripts", "qa-suite.js");
const prototypeDocPath = path.join(root, "docs", "NEXUS_LOW_RISK_CONFIRMATION_UI_PROTOTYPE.md");
const designDocPath = path.join(root, "docs", "NEXUS_LOW_RISK_CONFIRMATION_UI_DESIGN_AUDIT.md");

const app = fs.readFileSync(appPath, "utf8");
const styles = fs.readFileSync(stylesPath, "utf8");
const pkg = JSON.parse(fs.readFileSync(packagePath, "utf8"));
const suite = fs.readFileSync(suitePath, "utf8");
const prototypeDoc = fs.readFileSync(prototypeDocPath, "utf8");
const designDoc = fs.readFileSync(designDocPath, "utf8");

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
const confirmationReadinessBody = extractFunction(app, "buildControlledActionConfirmationReadinessFromPreview");
const prototypeGuardBody = extractFunction(app, "isVisibleControlledActionConfirmationPrototypeReadiness");
const prototypeRendererBody = extractFunction(app, "renderControlledActionConfirmationPrototype");
const prototypePainterBody = extractFunction(app, "paintControlledActionConfirmationPrototype");
const previewPainterBody = extractFunction(app, "paintControlledActionPreview");
const clearPreviewBody = extractFunction(app, "clearControlledActionPreview");
const clickHandlerBody = extractFunction(app, "handleControlledActionConfirmationPrototypeClick");
const bindStaticBody = extractFunction(app, "bindStatic");

assert.match(prototypeGuardBody, /controlled-action-confirmation-readiness\.v1/, "prototype guard must require confirmation readiness schema");
assert.match(prototypeGuardBody, /confirmationEligible !== true/, "prototype guard must require eligible readiness");
assert.match(prototypeGuardBody, /\["info",\s*"low"\]\.includes/, "prototype guard must allow only info/low risk");
assert.match(prototypeGuardBody, /requiredPermissions[\s\S]*length/, "prototype guard must block permission-required readiness");
assert.match(prototypeGuardBody, /missingInputs[\s\S]*length/, "prototype guard must block missing-input readiness");
assert.match(prototypeGuardBody, /allowedNextStep !== "observeConfirmationReadinessOnly"/, "prototype guard must require observation-only next step");
assert.match(prototypeGuardBody, /executionBoundary !== "confirmationReadinessOnly"/, "prototype guard must require confirmation-readiness boundary");
assert.match(prototypeGuardBody, /confirmationBlockedReason/, "prototype guard must reject blocked readiness");
assert.match(prototypeGuardBody, /userVisibleInThisPhase !== true/, "prototype guard must require approved visible phase flag");

assert.match(prototypeRendererBody, /surface !== "ask-full-assistant"/, "prototype renderer must render only for Ask/full assistant surface");
assert.match(prototypeRendererBody, /Review options/, "prototype renderer must include Review options");
assert.match(prototypeRendererBody, /Not now/, "prototype renderer must include Not now");
assert.match(prototypeRendererBody, /Prototype only - no action will be taken\./, "prototype renderer must include inert status copy");
assert.match(prototypeRendererBody, /data-controlled-action-confirmation-prototype="review"/, "prototype renderer must mark review button");
assert.match(prototypeRendererBody, /data-controlled-action-confirmation-prototype="dismiss"/, "prototype renderer must mark dismiss button");
assert.match(prototypeRendererBody, /nexus-confirmation-prototype/, "prototype renderer must use scoped confirmation class");

assert.match(prototypePainterBody, /\$\("#globalAssistantBar"\)/, "prototype painter must target Ask/full assistant root");
assert.match(prototypePainterBody, /\$\("#globalAssistantStatus"\)/, "prototype painter must target Ask/full assistant anchor");
assert(!prototypePainterBody.includes("#userCaptionPanel"), "prototype painter must not target caption panel");
assert(!prototypePainterBody.includes("#userCaptionText"), "prototype painter must not target caption text");
assert.match(previewPainterBody, /paintControlledActionConfirmationPrototype\(\)/, "preview paint should refresh the Ask-only prototype host");
assert.match(clearPreviewBody, /controlledActionConfirmationPrototypeStatus\s*=\s*""/, "central clear must reset prototype status");
assert.match(bindStaticBody, /handleControlledActionConfirmationPrototypeClick\(event\)/, "static binding must handle prototype clicks centrally");

const forbiddenCalls = [
  "openWorkflowModal",
  "openWorkflowByVoice",
  "executeWorkflowConfigFromVoice",
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
  "geolocation"
];
for (const call of forbiddenCalls) {
  assert(!prototypeGuardBody.includes(call), `prototype guard must not call ${call}`);
  assert(!prototypeRendererBody.includes(call), `prototype renderer must not call ${call}`);
  assert(!prototypePainterBody.includes(call), `prototype painter must not call ${call}`);
  assert(!clickHandlerBody.includes(call), `prototype click handler must not call ${call}`);
}

assert.match(clickHandlerBody, /closest\("#globalAssistantBar"\)/, "click handler must accept clicks only from Ask/full assistant surface");
assert.match(clickHandlerBody, /Selected for review - no action has been taken\./, "Review options must only set inert selected-for-review status");
assert.match(clickHandlerBody, /clearControlledActionPreview\("confirmation-prototype-dismissed"\)/, "Not now must only clear preview/prototype state");
assert(!/Confirm action|Yes, do it|Execute|Start|Open now|Submit|Buy|Sell|Pay|Call|Verify|Use camera|Use location|Schedule|Dispatch/.test(prototypeRendererBody), "prototype renderer must avoid unsafe labels");

assert.match(styles, /\.nexus-confirmation-prototype/, "styles must include prototype panel class");
assert.match(styles, /\.nexus-confirmation-actions/, "styles must include prototype action class");
assert.match(styles, /\.nexus-confirmation-button/, "styles must include prototype button class");
assert.match(styles, /\.nexus-confirmation-status/, "styles must include prototype status class");

const sandbox = vm.runInNewContext(`
  let controlledActionConfirmationPrototypeStatus = "";
  ${htmlSafeBody}
  ${prototypeGuardBody}
  ${prototypeRendererBody}
  ${confirmationReadinessBody}
  ({
    isVisibleControlledActionConfirmationPrototypeReadiness,
    renderControlledActionConfirmationPrototype,
    buildControlledActionConfirmationReadinessFromPreview,
    setStatus: (value) => { controlledActionConfirmationPrototypeStatus = value; }
  });
`, {});

const eligiblePreview = {
  schemaVersion: "controlled-action-preview-readiness.v1",
  actionId: "showFarmJobs",
  selectedToolId: "workforce.job_pathways",
  levelOneLabel: "Jobs",
  previewEligible: true,
  previewBlockedReason: null,
  previewRiskLevel: "low",
  previewMode: "lowRiskPreviewOnly",
  safePreviewTitle: "Review farm job resources",
  safePreviewSummary: "Preview only.",
  requiredPermissions: [],
  missingInputs: [],
  allowedNextStep: "preparePreviewOnly",
  executionBoundary: "previewOnlyReadiness",
  auditPolicy: "observeOnly",
  userVisibleInThisPhase: true
};
const confirmation = sandbox.buildControlledActionConfirmationReadinessFromPreview(eligiblePreview);
assert.strictEqual(confirmation.confirmationEligible, true, "eligible preview should produce confirmation readiness");
assert.strictEqual(confirmation.userVisibleInThisPhase, true, "Phase 8T eligible confirmation readiness should be visible to approved UI");
assert.strictEqual(sandbox.isVisibleControlledActionConfirmationPrototypeReadiness(confirmation), true, "eligible confirmation readiness should pass prototype guard");
assert.strictEqual(sandbox.renderControlledActionConfirmationPrototype(confirmation, "caption"), "", "caption surface must not render controls");
assert.strictEqual(sandbox.renderControlledActionConfirmationPrototype(confirmation, ""), "", "unknown surface must not render controls");
const html = sandbox.renderControlledActionConfirmationPrototype(confirmation, "ask-full-assistant");
assert.match(html, /Review options/, "Ask surface should render Review options");
assert.match(html, /Not now/, "Ask surface should render Not now");
assert.match(html, /Prototype only - no action will be taken\./, "Ask surface should render inert prototype note");
assert(!/selectedToolId|actionId|schemaVersion|executionBoundary|auditPolicy|confirmationBlockedReason/.test(html), "prototype HTML must not leak raw metadata");
assert(!/Execute|Start|Open now|Submit|Buy|Sell|Pay|Call|Verify|Use camera|Use location|Schedule|Dispatch/.test(html), "prototype HTML must not include unsafe labels");
sandbox.setStatus("Selected for review - no action has been taken.");
const selectedHtml = sandbox.renderControlledActionConfirmationPrototype(confirmation, "ask-full-assistant");
assert.match(selectedHtml, /Selected for review - no action has been taken\./, "Review options status should be inert");

const blockedCases = [
  { ...eligiblePreview, selectedToolId: "health.telehealth", actionId: "openTelehealthVideo", levelOneLabel: "Health", previewRiskLevel: "restricted" },
  { ...eligiblePreview, selectedToolId: "health.video_preview", actionId: "openCameraPreview", levelOneLabel: "Health", requiredPermissions: ["camera"] },
  { ...eligiblePreview, selectedToolId: "call.provider", actionId: "callDoctor", levelOneLabel: "Call", requiredPermissions: ["call"] },
  { ...eligiblePreview, selectedToolId: "map.location", actionId: "findLocation", levelOneLabel: "Map", requiredPermissions: ["location"] },
  { ...eligiblePreview, selectedToolId: "marketplace.sell_crop", actionId: "sellProduce", levelOneLabel: "Marketplace" },
  { ...eligiblePreview, selectedToolId: "marketplace.agritrade", actionId: "buyFertilizer", levelOneLabel: "Marketplace" },
  { ...eligiblePreview, selectedToolId: "payments.checkout", actionId: "processPayment", levelOneLabel: "Payment", requiredPermissions: ["payment"] },
  { ...eligiblePreview, selectedToolId: "identity.account", actionId: "verifyIdentity", levelOneLabel: "Identity", requiredPermissions: ["identity"] }
];
for (const blocked of blockedCases) {
  const blockedReadiness = sandbox.buildControlledActionConfirmationReadinessFromPreview(blocked);
  assert(blockedReadiness, `${blocked.selectedToolId} should return a blocked readiness object`);
  assert.strictEqual(blockedReadiness.confirmationEligible, false, `${blocked.selectedToolId} must not be confirmation eligible`);
  assert.strictEqual(sandbox.renderControlledActionConfirmationPrototype(blockedReadiness, "ask-full-assistant"), "", `${blocked.selectedToolId} must not render controls`);
}

assert.strictEqual(
  pkg.scripts["qa:nexus-controlled-action-confirmation-ui-prototype"],
  "node scripts/nexus-controlled-action-confirmation-ui-prototype-qa.js",
  "package should expose prototype QA alias"
);
assert.match(suite, /scripts\/nexus-controlled-action-confirmation-ui-prototype-qa\.js/, "nexus-workforce suite should include prototype QA");
assert.match(prototypeDoc, /Ask Nexus\/full assistant surface/i, "prototype doc should document Ask-only placement");
assert.match(prototypeDoc, /Caption surfaces remain preview-only/i, "prototype doc should document caption preview-only rule");
assert.match(prototypeDoc, /Review options[\s\S]*Not now/i, "prototype doc should document allowed labels");
assert.match(prototypeDoc, /does not route[\s\S]*does not execute[\s\S]*does not open workflows[\s\S]*does not request permissions/i, "prototype doc should document inert behavior");
assert.match(designDoc, /NEXUS_LOW_RISK_CONFIRMATION_UI_PROTOTYPE\.md/, "design audit should link to Phase 8T prototype doc");

console.log("Nexus controlled action confirmation UI prototype QA passed");
