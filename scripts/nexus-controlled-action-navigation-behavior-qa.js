const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const appPath = path.join(root, "public", "app.js");
const packagePath = path.join(root, "package.json");
const suitePath = path.join(root, "scripts", "qa-suite.js");
const behaviorDocPath = path.join(root, "docs", "NEXUS_CONTROLLED_ACTION_NAVIGATION_BEHAVIOR.md");

const app = fs.readFileSync(appPath, "utf8");
const pkg = JSON.parse(fs.readFileSync(packagePath, "utf8"));
const suite = fs.readFileSync(suitePath, "utf8");
const behaviorDoc = fs.readFileSync(behaviorDocPath, "utf8");

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

function extractConstObjectThroughFunction(source, constName, endFunctionName) {
  const start = source.indexOf(`const ${constName}`);
  const end = source.indexOf(`function ${endFunctionName}`, start);
  assert(start >= 0, `${constName} should exist`);
  assert(end > start, `${constName} block should end before ${endFunctionName}`);
  return source.slice(start, end);
}

const navigationBlock = extractConstObjectThroughFunction(app, "controlledLowRiskNavigationTargets", "handleControlledActionConfirmationPrototypeClick");
const clickBody = extractFunction(app, "handleControlledActionConfirmationPrototypeClick");
const previewRendererBody = extractFunction(app, "renderControlledActionPreview");
const confirmationRendererBody = extractFunction(app, "renderControlledActionConfirmationPrototype");
const clearBody = extractFunction(app, "clearControlledActionPreview");

assert.match(navigationBlock, /function getAllowedControlledNavigationTarget/, "navigation target helper should exist");
assert.match(navigationBlock, /function performControlledLowRiskNavigation/, "navigation behavior helper should exist");
assert.match(navigationBlock, /goSection\(target\.sectionId/, "behavior helper should use the existing section router");
assert.match(navigationBlock, /keepAssistant:\s*true/, "controlled navigation should keep Ask Nexus open");
assert.match(navigationBlock, /openDefaultAction:\s*false/, "controlled navigation must not open default workflows");
assert.match(navigationBlock, /scroll:\s*false/, "controlled navigation should be a quiet internal route update");
assert.match(clickBody, /performControlledLowRiskNavigation\(latestControlledActionNavigationReadiness\)/, "Review options should use controlled navigation readiness");
assert.match(clickBody, /clearControlledActionPreview\("confirmation-prototype-dismissed"\)/, "Not now must remain clear-only");

assert(!/data-controlled-action-navigation|nexus-navigation-readiness|navigation-readiness-card/i.test(app), "navigation readiness must not add visible metadata UI");
assert(!/controlledActionNavigationReadiness|safeNavigationTitle|observeNavigationReadinessOnly/i.test(previewRendererBody), "preview renderer must not render navigation readiness");
assert(!/controlledActionNavigationReadiness|safeNavigationTitle|observeNavigationReadinessOnly/i.test(confirmationRendererBody), "confirmation renderer must not render navigation readiness");

const dangerousCallPattern = /\b(openWorkflowModal|openWorkflowByVoice|executeWorkflowConfigFromVoice|runBackendAgentCommand|runUtilityAgentCommand|confirmPendingWorkflow|stageAgentAction|maybeDispatchConfirmedNativeCallHandoff|mutate|navigator\.permissions|requestPermission|getUserMedia|geolocation|location\.href|window\.open|fetch|XMLHttpRequest|submit\(|click\()\b/;
assert(!dangerousCallPattern.test(navigationBlock), "controlled navigation behavior must not execute tools, request permissions, fetch, submit, or open external links");

const sandboxState = { sectionCalls: [], statusWrites: [] };
const sandbox = vm.runInNewContext(`
  const sandboxState = __sandboxState;
  function goSection(sectionId, options) {
    sandboxState.sectionCalls.push({ sectionId, options });
  }
  function translateText(value) {
    return value;
  }
  function $(selector) {
    if (selector === "#simpleActionStatus" || /\\.user-module-status$/.test(selector)) {
      return {
        set textContent(value) {
          sandboxState.statusWrites.push({ selector, value });
        }
      };
    }
    return null;
  }
  ${navigationBlock}
  ({
    controlledLowRiskNavigationTargets,
    getAllowedControlledNavigationTarget,
    performControlledLowRiskNavigation
  });
`, { __sandboxState: sandboxState });

const validReadinessBase = {
  schemaVersion: "controlled-action-navigation-readiness.v1",
  sourceConfirmationReadinessVersion: "controlled-action-confirmation-readiness.v1",
  actionId: "openTrainingResources",
  selectedToolId: "workforce.training",
  levelOneLabel: "Training",
  navigationEligible: true,
  navigationBlockedReason: null,
  navigationRiskLevel: "low",
  navigationMode: "lowRiskInternalNavigationReadinessOnly",
  targetRoute: "training",
  targetSurface: "standardUserModule",
  requiresConfirmationClick: true,
  allowedAfterConfirmationOnly: true,
  requiredPermissions: [],
  missingInputs: [],
  safeNavigationTitle: "Review training resources",
  safeNavigationSummary: "Nexus may prepare safe training resources.",
  allowedNextStep: "observeNavigationReadinessOnly",
  executionBoundary: "navigationReadinessOnly",
  auditPolicy: "observeOnly",
  userVisibleInThisPhase: false
};

const expectedTargets = {
  training: "learning",
  jobs: "workforce",
  fieldSupportInfo: "trade",
  learning: "learning",
  marketplaceBrowse: "trade",
  agricultureHelp: "trade"
};

for (const [targetRoute, sectionId] of Object.entries(expectedTargets)) {
  const readiness = { ...validReadinessBase, targetRoute };
  const target = sandbox.getAllowedControlledNavigationTarget(readiness);
  assert(target, `${targetRoute} should resolve to an allowed target`);
  assert.strictEqual(target.sectionId, sectionId, `${targetRoute} should map to ${sectionId}`);
  const before = sandboxState.sectionCalls.length;
  const result = sandbox.performControlledLowRiskNavigation(readiness);
  assert.strictEqual(result.navigated, true, `${targetRoute} should navigate`);
  assert.strictEqual(result.sectionId, sectionId, `${targetRoute} should navigate to ${sectionId}`);
  assert.strictEqual(sandboxState.sectionCalls.length, before + 1, `${targetRoute} should call goSection once`);
  const options = sandboxState.sectionCalls.at(-1).options;
  assert.strictEqual(options.instant, true, `${targetRoute} should use instant section navigation`);
  assert.strictEqual(options.keepAssistant, true, `${targetRoute} should keep Ask Nexus open`);
  assert.strictEqual(options.openDefaultAction, false, `${targetRoute} must not open default actions`);
  assert.strictEqual(options.scroll, false, `${targetRoute} should not force page scroll`);
  assert(!/\b(executed|submitted|purchased|sold|paid|called|verified|permission granted|camera started|location used|dispatched|scheduled)\b/i.test(result.status), `${targetRoute} status must not imply execution`);
}

const blockedCases = [
  ["wrong schema", { ...validReadinessBase, schemaVersion: "controlled-action-confirmation-readiness.v1" }],
  ["not eligible", { ...validReadinessBase, navigationEligible: false }],
  ["blocked reason", { ...validReadinessBase, navigationBlockedReason: "blocked" }],
  ["medium risk", { ...validReadinessBase, navigationRiskLevel: "medium" }],
  ["permission", { ...validReadinessBase, requiredPermissions: ["camera"] }],
  ["missing input", { ...validReadinessBase, missingInputs: ["topic"] }],
  ["no confirmation click", { ...validReadinessBase, requiresConfirmationClick: false }],
  ["not after confirmation", { ...validReadinessBase, allowedAfterConfirmationOnly: false }],
  ["wrong next step", { ...validReadinessBase, allowedNextStep: "executeNow" }],
  ["wrong boundary", { ...validReadinessBase, executionBoundary: "executeNow" }],
  ["unknown route", { ...validReadinessBase, targetRoute: "adminDashboard" }],
  ["health route", { ...validReadinessBase, targetRoute: "health", selectedToolId: "health.telehealth", actionId: "openTelehealthVideo" }],
  ["camera route", { ...validReadinessBase, targetRoute: "cameraPreview", selectedToolId: "health.video_preview", actionId: "openCameraPreview" }],
  ["location route", { ...validReadinessBase, targetRoute: "map", selectedToolId: "map.location", actionId: "findLocation" }],
  ["call route", { ...validReadinessBase, targetRoute: "providerCall", selectedToolId: "call.provider", actionId: "callDoctor" }],
  ["buy route", { ...validReadinessBase, targetRoute: "marketplaceBuy", selectedToolId: "marketplace.buy", actionId: "buyFertilizer" }],
  ["sell route", { ...validReadinessBase, targetRoute: "marketplaceSell", selectedToolId: "marketplace.sell_crop", actionId: "sellProduce" }],
  ["payment route", { ...validReadinessBase, targetRoute: "checkout", selectedToolId: "payments.checkout", actionId: "processPayment" }],
  ["identity route", { ...validReadinessBase, targetRoute: "identity", selectedToolId: "identity.account", actionId: "verifyIdentity" }]
];

for (const [name, readiness] of blockedCases) {
  const before = sandboxState.sectionCalls.length;
  const target = sandbox.getAllowedControlledNavigationTarget(readiness);
  assert.strictEqual(target, null, `${name} should not resolve an allowed target`);
  const result = sandbox.performControlledLowRiskNavigation(readiness);
  assert.strictEqual(result.navigated, false, `${name} must not navigate`);
  assert.strictEqual(sandboxState.sectionCalls.length, before, `${name} must not call goSection`);
  assert.match(result.status, /No action has been taken/, `${name} should report no action taken`);
}

assert.match(behaviorDoc, /Phase 8X/i, "behavior doc should describe Phase 8X");
assert.match(behaviorDoc, /Review options/i, "behavior doc should describe Review options");
assert.match(behaviorDoc, /Not now/i, "behavior doc should describe Not now");
assert.match(behaviorDoc, /Training[\s\S]*learning/i, "behavior doc should document training target");
assert.match(behaviorDoc, /Jobs[\s\S]*workforce/i, "behavior doc should document jobs target");
assert.match(behaviorDoc, /AgriTrade[\s\S]*browse-only/i, "behavior doc should document browse-only AgriTrade boundary");
assert.match(behaviorDoc, /field support[\s\S]*not dispatch/i, "behavior doc should document field support boundary");
assert.match(behaviorDoc, /Health\/telehealth|health\/telehealth/i, "behavior doc should document health exclusion");
assert.match(behaviorDoc, /Phase 8Y browser validation/i, "behavior doc should recommend Phase 8Y validation");

assert.strictEqual(
  pkg.scripts["qa:nexus-controlled-action-navigation-behavior"],
  "node scripts/nexus-controlled-action-navigation-behavior-qa.js",
  "package should expose navigation behavior QA alias"
);
assert.match(suite, /scripts\/nexus-controlled-action-navigation-behavior-qa\.js/, "nexus-workforce suite should include navigation behavior QA");
assert.match(clearBody, /latestControlledActionNavigationReadiness = null/, "clear path must clear navigation readiness");

console.log("Nexus controlled action navigation behavior QA passed");
