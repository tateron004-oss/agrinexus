const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const appPath = path.join(root, "public", "app.js");
const serverPath = path.join(root, "server.js");
const packagePath = path.join(root, "package.json");
const suitePath = path.join(root, "scripts", "qa-suite.js");
const navigationDocPath = path.join(root, "docs", "NEXUS_CONTROLLED_ACTION_NAVIGATION_READINESS.md");
const prototypeDocPath = path.join(root, "docs", "NEXUS_LOW_RISK_CONFIRMATION_UI_PROTOTYPE.md");

const app = fs.readFileSync(appPath, "utf8");
const server = fs.readFileSync(serverPath, "utf8");
const pkg = JSON.parse(fs.readFileSync(packagePath, "utf8"));
const suite = fs.readFileSync(suitePath, "utf8");
const navigationDoc = fs.readFileSync(navigationDocPath, "utf8");
const prototypeDoc = fs.readFileSync(prototypeDocPath, "utf8");

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

const confirmationBody = extractFunction(app, "buildControlledActionConfirmationReadinessFromPreview");
const navigationBody = extractFunction(app, "buildControlledActionNavigationReadinessFromConfirmation");
const observationBody = extractFunction(app, "observeAgentActionMetadata");
const localPaintBody = extractFunction(app, "paintLocalLevelOneSuggestionForSimpleUserIntent");
const prototypeClickBody = extractFunction(app, "handleControlledActionConfirmationPrototypeClick");
const prototypeRendererBody = extractFunction(app, "renderControlledActionConfirmationPrototype");
const previewRendererBody = extractFunction(app, "renderControlledActionPreview");

assert.match(navigationBody, /internal metadata only/i, "navigation readiness helper must state internal-only scope");
assert.match(navigationBody, /must not navigate, route,[\s\S]*open workflows,[\s\S]*request permissions,[\s\S]*confirm, or execute/i, "navigation readiness helper must include no-navigation/no-execution boundary");
assert.match(navigationBody, /controlledActionConfirmationReadiness\.schemaVersion !== "controlled-action-confirmation-readiness\.v1"/, "navigation readiness must derive only from confirmation readiness v1");
assert.match(navigationBody, /schemaVersion:\s*"controlled-action-navigation-readiness\.v1"/, "navigation readiness schema must be v1");
assert.match(navigationBody, /sourceConfirmationReadinessVersion:\s*"controlled-action-confirmation-readiness\.v1"/, "navigation readiness must reference source confirmation schema");
assert.match(navigationBody, /confirmationEligible !== true/, "navigation readiness must require eligible source confirmation");
assert.match(navigationBody, /\["info",\s*"low"\]\.includes\(riskLevel\)/, "navigation readiness must be limited to info/low risk");
assert.match(navigationBody, /requiredPermissions\.length \|\| missingInputs\.length/, "navigation readiness must block permissions and missing inputs");
assert.match(navigationBody, /allowedNextStep !== "observeConfirmationReadinessOnly"/, "navigation readiness must require confirmation-observation next step");
assert.match(navigationBody, /executionBoundary !== "confirmationReadinessOnly"/, "navigation readiness must require confirmation-readiness boundary");
assert.match(navigationBody, /confirmationBlockedReason/, "navigation readiness must respect source blocked reason");
assert.match(navigationBody, /requiresConfirmationClick:\s*true/, "eligible navigation readiness must require confirmation click");
assert.match(navigationBody, /allowedAfterConfirmationOnly:\s*true/, "eligible navigation readiness must be allowed only after confirmation");
assert.match(navigationBody, /allowedNextStep:\s*"observeNavigationReadinessOnly"/, "eligible navigation readiness must remain observation-only");
assert.match(navigationBody, /executionBoundary:\s*"navigationReadinessOnly"/, "eligible navigation readiness must use navigation-readiness boundary");
assert.match(navigationBody, /userVisibleInThisPhase:\s*false/, "navigation readiness must stay hidden in Phase 8V");

const requiredFields = [
  "schemaVersion",
  "sourceConfirmationReadinessVersion",
  "actionId",
  "selectedToolId",
  "levelOneLabel",
  "navigationEligible",
  "navigationBlockedReason",
  "navigationRiskLevel",
  "navigationMode",
  "targetRoute",
  "targetSurface",
  "requiresConfirmationClick",
  "allowedAfterConfirmationOnly",
  "requiredPermissions",
  "missingInputs",
  "safeNavigationTitle",
  "safeNavigationSummary",
  "allowedNextStep",
  "executionBoundary",
  "auditPolicy",
  "userVisibleInThisPhase"
];

for (const field of requiredFields) {
  assert(navigationBody.includes(field), `navigation readiness helper should include ${field}`);
  assert(navigationDoc.includes(field), `navigation readiness doc should define ${field}`);
}

const sandbox = vm.runInNewContext(`
  ${confirmationBody}
  ${navigationBody}
  ({
    buildControlledActionConfirmationReadinessFromPreview,
    buildControlledActionNavigationReadinessFromConfirmation
  });
`, {});

const eligiblePreviewReadiness = {
  "workforce.training": ["openTrainingResources", "Training", "low", "training", "standardUserModule", "Review training resources"],
  "workforce.job_pathways": ["showFarmJobs", "Jobs", "low", "jobs", "standardUserModule", "Review job pathway resources"],
  "workforce.field_support": ["openFieldSupportGuidance", "Field Support", "info", "fieldSupportInfo", "askNexus", "Review field support guidance"],
  "learning.start": ["explainLearningTopic", "Learning", "low", "learning", "standardUserModule", "Review learning guidance"],
  "marketplace.agritrade": ["browseMarketplace", "Marketplace", "low", "marketplaceBrowse", "standardUserModule", "Review AgriTrade browsing guidance"],
  "agriculture.help": ["explainAgricultureHelp", "Agriculture Help", "info", "agricultureHelp", "askNexus", "Review agriculture guidance"]
};

const unsafeOutputWords = /\b(opened|started|submitted|paid|called|verified|permission granted|execute|start now|open now|submit|pay|call|verify|use camera|use location|dispatch now|schedule now)\b/i;
const allowedRoutes = new Set(["training", "jobs", "fieldSupportInfo", "learning", "marketplaceBrowse", "agricultureHelp"]);
for (const [selectedToolId, [actionId, levelOneLabel, riskLevel, targetRoute, targetSurface, expectedTitle]] of Object.entries(eligiblePreviewReadiness)) {
  const confirmation = sandbox.buildControlledActionConfirmationReadinessFromPreview({
    schemaVersion: "controlled-action-preview-readiness.v1",
    sourceMetadataVersion: "controlled-action-metadata.v1",
    actionId,
    selectedToolId,
    levelOneLabel,
    previewEligible: true,
    previewBlockedReason: null,
    previewRiskLevel: riskLevel,
    previewMode: "lowRiskPreviewOnly",
    safePreviewTitle: "Review safe guidance",
    safePreviewSummary: "Preview only.",
    requiresExplicitConfirmation: false,
    requiredPermissions: [],
    missingInputs: [],
    allowedNextStep: "preparePreviewOnly",
    executionBoundary: "previewOnlyReadiness",
    auditPolicy: "observeOnly",
    userVisibleInThisPhase: true
  });
  assert.strictEqual(confirmation.confirmationEligible, true, `${selectedToolId} should be confirmation-ready`);
  const readiness = sandbox.buildControlledActionNavigationReadinessFromConfirmation(confirmation);
  assert(readiness, `${selectedToolId} should create navigation readiness`);
  assert.strictEqual(readiness.schemaVersion, "controlled-action-navigation-readiness.v1", `${selectedToolId} schema should match`);
  assert.strictEqual(readiness.sourceConfirmationReadinessVersion, "controlled-action-confirmation-readiness.v1", `${selectedToolId} source confirmation schema should match`);
  assert.strictEqual(readiness.actionId, actionId, `${selectedToolId} actionId should match`);
  assert.strictEqual(readiness.selectedToolId, selectedToolId, `${selectedToolId} selectedToolId should match`);
  assert.strictEqual(readiness.levelOneLabel, levelOneLabel, `${selectedToolId} Level 1 label should match`);
  assert.strictEqual(readiness.navigationEligible, true, `${selectedToolId} should be navigation-ready internally`);
  assert.strictEqual(readiness.navigationBlockedReason, null, `${selectedToolId} should not be blocked`);
  assert.strictEqual(readiness.navigationRiskLevel, riskLevel, `${selectedToolId} risk should match`);
  assert.strictEqual(readiness.navigationMode, "lowRiskInternalNavigationReadinessOnly", `${selectedToolId} mode should be internal-only`);
  assert.strictEqual(readiness.targetRoute, targetRoute, `${selectedToolId} target route should match`);
  assert(allowedRoutes.has(readiness.targetRoute), `${selectedToolId} target route must be allowlisted`);
  assert.strictEqual(readiness.targetSurface, targetSurface, `${selectedToolId} target surface should match`);
  assert.strictEqual(readiness.requiresConfirmationClick, true, `${selectedToolId} must require a confirmation click`);
  assert.strictEqual(readiness.allowedAfterConfirmationOnly, true, `${selectedToolId} must be after-confirmation only`);
  assert(Array.isArray(readiness.requiredPermissions) && readiness.requiredPermissions.length === 0, `${selectedToolId} must not require permissions`);
  assert(Array.isArray(readiness.missingInputs) && readiness.missingInputs.length === 0, `${selectedToolId} must not require inputs`);
  assert.strictEqual(readiness.safeNavigationTitle, expectedTitle, `${selectedToolId} safe title should match`);
  assert(readiness.safeNavigationSummary, `${selectedToolId} should include safe summary`);
  assert(!unsafeOutputWords.test(readiness.safeNavigationTitle), `${selectedToolId} title must not imply execution`);
  assert(!unsafeOutputWords.test(readiness.safeNavigationSummary), `${selectedToolId} summary must not imply execution`);
  assert.strictEqual(readiness.allowedNextStep, "observeNavigationReadinessOnly", `${selectedToolId} next step must not navigate`);
  assert.strictEqual(readiness.executionBoundary, "navigationReadinessOnly", `${selectedToolId} boundary must not navigate`);
  assert.strictEqual(readiness.auditPolicy, "observeOnly", `${selectedToolId} audit must remain observation-only`);
  assert.strictEqual(readiness.userVisibleInThisPhase, false, `${selectedToolId} must stay hidden`);
}

const eligibleConfirmationBase = {
  schemaVersion: "controlled-action-confirmation-readiness.v1",
  sourcePreviewReadinessVersion: "controlled-action-preview-readiness.v1",
  actionId: "openTrainingResources",
  selectedToolId: "workforce.training",
  levelOneLabel: "Training",
  confirmationEligible: true,
  confirmationBlockedReason: null,
  confirmationRiskLevel: "low",
  confirmationMode: "lowRiskConfirmationReadinessOnly",
  safeConfirmationTitle: "Continue to training resources",
  safeConfirmationSummary: "Nexus can keep a future training-resource review step ready.",
  confirmationQuestion: "Would you like Nexus to keep this low-risk next step ready?",
  requiredPermissions: [],
  missingInputs: [],
  allowedNextStep: "observeConfirmationReadinessOnly",
  executionBoundary: "confirmationReadinessOnly",
  auditPolicy: "observeOnly",
  userVisibleInThisPhase: true
};

const blockedConfirmationCases = [
  ["health.telehealth", "openTelehealthVideo", "Health", "restricted", [], [], true, "observeConfirmationReadinessOnly", "confirmationReadinessOnly"],
  ["health.video_preview", "openCameraPreview", "Health", "low", ["camera"], [], true, "observeConfirmationReadinessOnly", "confirmationReadinessOnly"],
  ["call.provider", "callDoctor", "Call", "low", ["call"], [], true, "observeConfirmationReadinessOnly", "confirmationReadinessOnly"],
  ["map.location", "findLocation", "Map", "low", ["location"], [], true, "observeConfirmationReadinessOnly", "confirmationReadinessOnly"],
  ["marketplace.sell_crop", "sellProduce", "Marketplace", "low", [], [], true, "observeConfirmationReadinessOnly", "confirmationReadinessOnly"],
  ["marketplace.agritrade", "buyFertilizer", "Marketplace", "low", [], [], true, "observeConfirmationReadinessOnly", "confirmationReadinessOnly"],
  ["payments.checkout", "processPayment", "Payment", "low", ["payment"], [], true, "observeConfirmationReadinessOnly", "confirmationReadinessOnly"],
  ["identity.account", "verifyIdentity", "Identity", "low", ["identity"], [], true, "observeConfirmationReadinessOnly", "confirmationReadinessOnly"],
  ["account.login", "logIntoAccount", "Account", "low", ["account"], [], true, "observeConfirmationReadinessOnly", "confirmationReadinessOnly"],
  ["workforce.field_support", "scheduleFieldSupport", "Field Support", "low", [], [], true, "observeConfirmationReadinessOnly", "confirmationReadinessOnly"],
  ["workforce.field_support", "dispatchFieldSupport", "Field Support", "low", [], [], true, "observeConfirmationReadinessOnly", "confirmationReadinessOnly"],
  ["workforce.training", "openTrainingResources", "Training", "medium", [], [], true, "observeConfirmationReadinessOnly", "confirmationReadinessOnly"],
  ["workforce.training", "openTrainingResources", "Training", "low", [], ["topic"], true, "observeConfirmationReadinessOnly", "confirmationReadinessOnly"],
  ["workforce.training", "openTrainingResources", "Training", "low", [], [], false, "observeConfirmationReadinessOnly", "confirmationReadinessOnly"],
  ["workforce.training", "openTrainingResources", "Training", "low", [], [], true, "blocked", "confirmationReadinessOnly"],
  ["workforce.training", "openTrainingResources", "Training", "low", [], [], true, "observeConfirmationReadinessOnly", "executeNow"]
];

for (const [selectedToolId, actionId, levelOneLabel, riskLevel, requiredPermissions, missingInputs, confirmationEligible, allowedNextStep, executionBoundary] of blockedConfirmationCases) {
  const readiness = sandbox.buildControlledActionNavigationReadinessFromConfirmation({
    ...eligibleConfirmationBase,
    actionId,
    selectedToolId,
    levelOneLabel,
    confirmationEligible,
    confirmationBlockedReason: confirmationEligible ? null : "not confirmation eligible",
    confirmationRiskLevel: riskLevel,
    requiredPermissions,
    missingInputs,
    allowedNextStep,
    executionBoundary
  });
  assert(readiness, `${selectedToolId}/${actionId} should return a blocked navigation readiness object`);
  assert.strictEqual(readiness.navigationEligible, false, `${selectedToolId}/${actionId} must not be navigation eligible`);
  assert(readiness.navigationBlockedReason, `${selectedToolId}/${actionId} must include a blocked reason`);
  assert.strictEqual(readiness.allowedNextStep, "blocked", `${selectedToolId}/${actionId} next step must be blocked`);
  assert.strictEqual(readiness.executionBoundary, "navigationReadinessOnly", `${selectedToolId}/${actionId} boundary must remain navigation readiness only`);
  assert.strictEqual(readiness.userVisibleInThisPhase, false, `${selectedToolId}/${actionId} must remain hidden`);
}

const wrongSchema = sandbox.buildControlledActionNavigationReadinessFromConfirmation({
  schemaVersion: "controlled-action-preview-readiness.v1",
  actionId: "openTrainingResources",
  selectedToolId: "workforce.training"
});
assert.strictEqual(wrongSchema, null, "navigation readiness must derive only from confirmation readiness v1");

assert.match(localPaintBody, /latestControlledActionNavigationReadiness = latestControlledActionConfirmationReadiness[\s\S]*buildControlledActionNavigationReadinessFromConfirmation/, "local route should derive hidden navigation readiness from confirmation readiness");
assert.match(observationBody, /const controlledActionNavigationReadiness = buildControlledActionNavigationReadinessFromConfirmation\(controlledActionConfirmationReadiness\)/, "backend observation should derive navigation readiness from confirmation readiness");
assert.match(observationBody, /controlledActionConfirmationReadiness,\s*\n\s*controlledActionNavigationReadiness/, "observation record should store navigation readiness beside confirmation readiness");
assert(!/controlledActionNavigationReadiness[\s\S]{0,320}(goSection|openWorkflow|mutate|request|confirmPending|execute|stage|permission|getUserMedia|geolocation|addEventListener|onclick|click\()/i.test(observationBody), "observation helper must not navigate or execute from navigation readiness");
assert(!/buildControlledActionNavigationReadinessFromConfirmation|controlledActionNavigationReadiness|targetRoute|observeNavigationReadinessOnly/i.test(prototypeClickBody), "Review options and Not now must not use navigation readiness");
assert(!/controlledActionNavigationReadiness|safeNavigationTitle|observeNavigationReadinessOnly/i.test(prototypeRendererBody), "confirmation prototype renderer must not render navigation readiness");
assert(!/controlledActionNavigationReadiness|safeNavigationTitle|observeNavigationReadinessOnly/i.test(previewRendererBody), "preview renderer must not render navigation readiness");
assert(!/data-controlled-action-navigation|nexus-navigation-readiness|navigation-readiness-card/i.test(app), "Phase 8V must not add visible navigation readiness UI markers");
assert(!/Review options[\s\S]{0,240}(goSection|openWorkflow|mutate|request|execute|stage|permission|getUserMedia|geolocation)/i.test(app), "Review options must remain inert");

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
  "onclick",
  "click()"
];
for (const call of forbiddenCalls) {
  assert(!navigationBody.includes(call), `navigation readiness helper must not call ${call}`);
}

assert(!server.includes("controlled-action-navigation-readiness.v1"), "server.js must not emit navigation readiness in Phase 8V");
assert.match(navigationDoc, /Phase 8V/i, "navigation readiness doc must state Phase 8V scope");
assert.match(navigationDoc, /does not add navigation/i, "navigation readiness doc must preserve no-navigation boundary");
assert.match(navigationDoc, /controlled-action-navigation-readiness\.v1/, "navigation readiness doc must define schema");
assert.match(navigationDoc, /Browse AgriTrade[\s\S]*browse\/read-only/i, "navigation doc must document marketplace browse-only nuance");
assert.match(navigationDoc, /Field support[\s\S]*informational support/i, "navigation doc must document field-support nuance");
assert.match(prototypeDoc, /controlled-action-navigation-readiness\.v1/, "prototype doc should reference downstream navigation readiness");

assert.strictEqual(
  pkg.scripts["qa:nexus-controlled-action-navigation-readiness"],
  "node scripts/nexus-controlled-action-navigation-readiness-qa.js",
  "package should expose navigation readiness QA alias"
);
assert.match(suite, /scripts\/nexus-controlled-action-navigation-readiness-qa\.js/, "nexus-workforce suite should include navigation readiness QA");

console.log("Nexus controlled action navigation readiness QA passed");
