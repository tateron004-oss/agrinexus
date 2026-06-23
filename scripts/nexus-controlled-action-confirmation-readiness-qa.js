const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const appPath = path.join(root, "public", "app.js");
const serverPath = path.join(root, "server.js");
const packagePath = path.join(root, "package.json");
const suitePath = path.join(root, "scripts", "qa-suite.js");
const confirmationDocPath = path.join(root, "docs", "NEXUS_CONTROLLED_ACTION_CONFIRMATION_READINESS.md");
const previewDocPath = path.join(root, "docs", "NEXUS_CONTROLLED_ACTION_PREVIEW_READINESS.md");

const app = fs.readFileSync(appPath, "utf8");
const server = fs.readFileSync(serverPath, "utf8");
const pkg = JSON.parse(fs.readFileSync(packagePath, "utf8"));
const suite = fs.readFileSync(suitePath, "utf8");
const confirmationDoc = fs.readFileSync(confirmationDocPath, "utf8");
const previewDoc = fs.readFileSync(previewDocPath, "utf8");

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
const observationBody = extractFunction(app, "observeAgentActionMetadata");
const localPaintBody = extractFunction(app, "paintLocalLevelOneSuggestionForSimpleUserIntent");
const renderPreviewBody = extractFunction(app, "renderControlledActionPreview");
const paintPreviewBody = extractFunction(app, "paintControlledActionPreview");

assert.match(confirmationBody, /internal metadata only/i, "confirmation readiness helper must state internal-only scope");
assert.match(confirmationBody, /must not render UI, stage actions,[\s\S]*request permissions, route, open workflows, confirm, or[\s\S]*execute/i, "confirmation readiness helper must include no-execute boundary");
assert.match(confirmationBody, /controlledActionPreviewReadiness\.schemaVersion !== "controlled-action-preview-readiness\.v1"/, "confirmation readiness must derive only from preview readiness v1");
assert.match(confirmationBody, /schemaVersion:\s*"controlled-action-confirmation-readiness\.v1"/, "confirmation readiness schema must be v1");
assert.match(confirmationBody, /sourcePreviewReadinessVersion:\s*"controlled-action-preview-readiness\.v1"/, "confirmation readiness must reference source preview schema");
assert.match(confirmationBody, /previewEligible !== true/, "confirmation readiness must require eligible source preview");
assert.match(confirmationBody, /userVisibleInThisPhase !== true/, "confirmation readiness must require visible-safe preview source");
assert.match(confirmationBody, /\["info",\s*"low"\]\.includes\(riskLevel\)/, "confirmation readiness must be limited to info/low risk");
assert.match(confirmationBody, /requiredPermissions\.length \|\| missingInputs\.length/, "confirmation readiness must block permissions and missing inputs");
assert.match(confirmationBody, /allowedNextStep !== "preparePreviewOnly"/, "confirmation readiness must require preview-only next step");
assert.match(confirmationBody, /executionBoundary !== "previewOnlyReadiness"/, "confirmation readiness must require preview-only boundary");
assert.match(confirmationBody, /previewBlockedReason/, "confirmation readiness must respect source blocked reason");
assert.match(confirmationBody, /allowedNextStep:\s*"observeConfirmationReadinessOnly"/, "eligible readiness must remain observation-only");
assert.match(confirmationBody, /executionBoundary:\s*"confirmationReadinessOnly"/, "eligible readiness must use confirmation-readiness boundary");
assert.match(confirmationBody, /userVisibleInThisPhase:\s*true/, "eligible confirmation readiness may be visible to Phase 8T approved UI");

const requiredFields = [
  "schemaVersion",
  "sourcePreviewReadinessVersion",
  "actionId",
  "selectedToolId",
  "levelOneLabel",
  "confirmationEligible",
  "confirmationBlockedReason",
  "confirmationRiskLevel",
  "confirmationMode",
  "safeConfirmationTitle",
  "safeConfirmationSummary",
  "confirmationQuestion",
  "requiredPermissions",
  "missingInputs",
  "allowedNextStep",
  "executionBoundary",
  "auditPolicy",
  "userVisibleInThisPhase"
];
for (const field of requiredFields) {
  assert(confirmationBody.includes(field), `confirmation readiness helper should include ${field}`);
  assert(confirmationDoc.includes(field), `confirmation readiness doc should define ${field}`);
}

const sandbox = vm.runInNewContext(`
  ${confirmationBody}
  ({ buildControlledActionConfirmationReadinessFromPreview });
`, {});

const eligiblePreviewReadiness = {
  "workforce.training": ["openTrainingResources", "Training", "low", "Continue to training resources"],
  "workforce.job_pathways": ["showFarmJobs", "Jobs", "low", "Continue to job pathway resources"],
  "workforce.field_support": ["openFieldSupportGuidance", "Field Support", "info", "Continue to field support guidance"],
  "learning.start": ["explainLearningTopic", "Learning", "low", "Continue to learning guidance"],
  "marketplace.agritrade": ["browseMarketplace", "Marketplace", "low", "Continue to AgriTrade browsing guidance"],
  "agriculture.help": ["explainAgricultureHelp", "Agriculture Help", "info", "Continue to agriculture guidance"]
};

const unsafeOutputWords = /\b(opened|started|submitted|paid|called|verified|permission granted|camera|location|checkout|dispatch|schedule|execute|submit|pay|call|verify|open camera|diagnose)\b/i;
for (const [selectedToolId, [actionId, levelOneLabel, riskLevel, expectedTitle]] of Object.entries(eligiblePreviewReadiness)) {
  const readiness = sandbox.buildControlledActionConfirmationReadinessFromPreview({
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
  assert(readiness, `${selectedToolId} should create confirmation readiness`);
  assert.strictEqual(readiness.schemaVersion, "controlled-action-confirmation-readiness.v1", `${selectedToolId} schema should match`);
  assert.strictEqual(readiness.sourcePreviewReadinessVersion, "controlled-action-preview-readiness.v1", `${selectedToolId} source preview schema should match`);
  assert.strictEqual(readiness.actionId, actionId, `${selectedToolId} actionId should match`);
  assert.strictEqual(readiness.selectedToolId, selectedToolId, `${selectedToolId} selectedToolId should match`);
  assert.strictEqual(readiness.levelOneLabel, levelOneLabel, `${selectedToolId} Level 1 label should match`);
  assert.strictEqual(readiness.confirmationEligible, true, `${selectedToolId} should be internally confirmation-ready`);
  assert.strictEqual(readiness.confirmationBlockedReason, null, `${selectedToolId} should not be blocked`);
  assert.strictEqual(readiness.confirmationRiskLevel, riskLevel, `${selectedToolId} risk should match`);
  assert(["informationalConfirmationReadinessOnly", "lowRiskConfirmationReadinessOnly"].includes(readiness.confirmationMode), `${selectedToolId} mode should be informational or low-risk only`);
  assert.strictEqual(readiness.safeConfirmationTitle, expectedTitle, `${selectedToolId} safe title should match`);
  assert(readiness.safeConfirmationSummary, `${selectedToolId} should include safe summary`);
  assert(readiness.confirmationQuestion, `${selectedToolId} should include future confirmation wording`);
  assert(!unsafeOutputWords.test(readiness.safeConfirmationTitle), `${selectedToolId} title must not imply execution`);
  assert(!unsafeOutputWords.test(readiness.safeConfirmationSummary), `${selectedToolId} summary must not imply execution`);
  assert(!unsafeOutputWords.test(readiness.confirmationQuestion), `${selectedToolId} question must not imply execution`);
  assert(Array.isArray(readiness.requiredPermissions) && readiness.requiredPermissions.length === 0, `${selectedToolId} must not require permissions`);
  assert(Array.isArray(readiness.missingInputs) && readiness.missingInputs.length === 0, `${selectedToolId} must not require inputs`);
  assert.strictEqual(readiness.allowedNextStep, "observeConfirmationReadinessOnly", `${selectedToolId} next step must not execute`);
  assert.strictEqual(readiness.executionBoundary, "confirmationReadinessOnly", `${selectedToolId} boundary must not execute`);
  assert.strictEqual(readiness.auditPolicy, "observeOnly", `${selectedToolId} audit must remain observation-only`);
  assert.strictEqual(readiness.userVisibleInThisPhase, true, `${selectedToolId} may be visible to the Phase 8T approved Ask-only prototype`);
}

const blockedPreviewReadiness = [
  ["health.telehealth", "openTelehealthVideo", "Health", "restricted", [], [], true, "preparePreviewOnly", "previewOnlyReadiness"],
  ["health.video_preview", "openCameraPreview", "Health", "low", ["camera"], [], true, "preparePreviewOnly", "previewOnlyReadiness"],
  ["call.provider", "callDoctor", "Call", "low", ["call"], [], true, "preparePreviewOnly", "previewOnlyReadiness"],
  ["map.location", "findLocation", "Map", "low", ["location"], [], true, "preparePreviewOnly", "previewOnlyReadiness"],
  ["marketplace.sell_crop", "sellProduce", "Marketplace", "low", [], [], true, "preparePreviewOnly", "previewOnlyReadiness"],
  ["marketplace.agritrade", "buyFertilizer", "Marketplace", "low", [], [], true, "preparePreviewOnly", "previewOnlyReadiness"],
  ["payments.checkout", "processPayment", "Payment", "low", ["payment"], [], true, "preparePreviewOnly", "previewOnlyReadiness"],
  ["identity.account", "verifyIdentity", "Identity", "low", ["identity"], [], true, "preparePreviewOnly", "previewOnlyReadiness"],
  ["account.login", "logIntoAccount", "Account", "low", ["account"], [], true, "preparePreviewOnly", "previewOnlyReadiness"],
  ["workforce.training", "openTrainingResources", "Training", "medium", [], [], true, "preparePreviewOnly", "previewOnlyReadiness"],
  ["workforce.training", "openTrainingResources", "Training", "low", [], ["topic"], true, "preparePreviewOnly", "previewOnlyReadiness"],
  ["workforce.training", "openTrainingResources", "Training", "low", [], [], false, "preparePreviewOnly", "previewOnlyReadiness"],
  ["workforce.training", "openTrainingResources", "Training", "low", [], [], true, "blocked", "previewOnlyReadiness"],
  ["workforce.training", "openTrainingResources", "Training", "low", [], [], true, "preparePreviewOnly", "executeNow"]
];

for (const [selectedToolId, actionId, levelOneLabel, riskLevel, requiredPermissions, missingInputs, previewEligible, allowedNextStep, executionBoundary] of blockedPreviewReadiness) {
  const readiness = sandbox.buildControlledActionConfirmationReadinessFromPreview({
    schemaVersion: "controlled-action-preview-readiness.v1",
    actionId,
    selectedToolId,
    levelOneLabel,
    previewEligible,
    previewBlockedReason: previewEligible ? null : "not preview eligible",
    previewRiskLevel: riskLevel,
    previewMode: "lowRiskPreviewOnly",
    requiredPermissions,
    missingInputs,
    allowedNextStep,
    executionBoundary,
    auditPolicy: "observeOnly",
    userVisibleInThisPhase: true
  });
  assert(readiness, `${selectedToolId}/${actionId} should return a blocked confirmation readiness object`);
  assert.strictEqual(readiness.confirmationEligible, false, `${selectedToolId}/${actionId} must not be confirmation eligible`);
  assert(readiness.confirmationBlockedReason, `${selectedToolId}/${actionId} must include a blocked reason`);
  assert.strictEqual(readiness.allowedNextStep, "blocked", `${selectedToolId}/${actionId} next step must be blocked`);
  assert.strictEqual(readiness.executionBoundary, "confirmationReadinessOnly", `${selectedToolId}/${actionId} boundary must remain confirmation readiness only`);
  assert.strictEqual(readiness.userVisibleInThisPhase, false, `${selectedToolId}/${actionId} must remain hidden`);
}

const wrongSchema = sandbox.buildControlledActionConfirmationReadinessFromPreview({
  schemaVersion: "controlled-action-metadata.v1",
  actionId: "openTrainingResources",
  selectedToolId: "workforce.training"
});
assert.strictEqual(wrongSchema, null, "confirmation readiness must derive only from preview readiness v1");

assert.match(localPaintBody, /latestControlledActionConfirmationReadiness = visibleControlledActionPreviewReadiness[\s\S]*buildControlledActionConfirmationReadinessFromPreview/, "local route should derive hidden confirmation readiness from visible-safe preview readiness");
assert.match(observationBody, /const controlledActionConfirmationReadiness = buildControlledActionConfirmationReadinessFromPreview\(controlledActionPreviewReadiness\)/, "backend observation should derive confirmation readiness from preview readiness");
assert.match(observationBody, /controlledActionPreviewReadiness,\s*\n\s*controlledActionConfirmationReadiness/, "observation record should store confirmation readiness beside preview readiness");

assert(!/controlledActionConfirmationReadiness[\s\S]{0,260}(openWorkflow|goSection|mutate|request|confirmPending|execute|stage|permission|getUserMedia|geolocation|addEventListener|onclick)/i.test(observationBody), "observation helper must not execute from confirmation readiness");
assert(!/controlledActionConfirmationReadiness|safeConfirmationTitle|confirmationQuestion|observeConfirmationReadinessOnly/i.test(renderPreviewBody), "visible preview renderer must not render confirmation readiness");
assert(!/controlledActionConfirmationReadiness|safeConfirmationTitle|confirmationQuestion|observeConfirmationReadinessOnly/i.test(paintPreviewBody), "visible preview painter must not render confirmation readiness");
assert(!/data-confirmation-readiness|confirmation-readiness-card/i.test(app), "controlled action readiness must not leak raw confirmation metadata UI markers");
assert.match(app, /data-controlled-action-confirmation-prototype="review"/, "Phase 8T may expose Review options only through the prototype marker");
assert.match(app, /data-controlled-action-confirmation-prototype="dismiss"/, "Phase 8T may expose Not now only through the prototype marker");

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
  assert(!confirmationBody.includes(call), `confirmation readiness helper must not call ${call}`);
}

assert(!server.includes("controlled-action-confirmation-readiness.v1"), "server.js must not emit confirmation readiness in Phase 8Q");
assert.match(confirmationDoc, /Phase 8T/i, "confirmation readiness doc must state Phase 8T scope");
assert.match(confirmationDoc, /Ask Nexus\/full assistant surface/i, "confirmation readiness doc must state Ask-only visible scope");
assert.match(confirmationDoc, /non-executing/i, "confirmation readiness doc must state non-executing scope");
assert.match(confirmationDoc, /controlled-action-confirmation-readiness\.v1/, "confirmation readiness doc must define the schema");
assert.match(previewDoc, /controlled-action-confirmation-readiness\.v1/, "preview readiness doc should reference downstream confirmation readiness");

assert.strictEqual(
  pkg.scripts["qa:nexus-controlled-action-confirmation-readiness"],
  "node scripts/nexus-controlled-action-confirmation-readiness-qa.js",
  "package should expose confirmation readiness QA alias"
);
assert.match(suite, /scripts\/nexus-controlled-action-confirmation-readiness-qa\.js/, "nexus-workforce suite should include confirmation readiness QA");

console.log("Nexus controlled action confirmation readiness QA passed");
