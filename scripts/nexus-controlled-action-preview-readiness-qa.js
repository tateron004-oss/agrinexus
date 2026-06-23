const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const appPath = path.join(root, "public", "app.js");
const serverPath = path.join(root, "server.js");
const packagePath = path.join(root, "package.json");
const readinessDocPath = path.join(root, "docs", "NEXUS_CONTROLLED_ACTION_PREVIEW_READINESS.md");
const metadataDocPath = path.join(root, "docs", "NEXUS_CONTROLLED_ACTION_METADATA_SCHEMA.md");

const app = fs.readFileSync(appPath, "utf8");
const server = fs.readFileSync(serverPath, "utf8");
const pkg = JSON.parse(fs.readFileSync(packagePath, "utf8"));
const readinessDoc = fs.readFileSync(readinessDocPath, "utf8");
const metadataDoc = fs.readFileSync(metadataDocPath, "utf8");

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

const metadataBuilderBody = extractFunction(app, "buildControlledActionMetadataFromSuggestion");
const previewReadinessBody = extractFunction(app, "buildControlledActionPreviewReadinessFromMetadata");
const observationBody = extractFunction(app, "observeAgentActionMetadata");

assert.match(previewReadinessBody, /readiness metadata only/i, "preview readiness helper must state metadata-only readiness scope");
assert.match(previewReadinessBody, /must not render UI, ask to continue,[\s\S]*stage actions, request permissions, route, open workflows, confirm, or execute/i, "preview readiness helper must include no-execute boundary");
assert.match(previewReadinessBody, /controlledActionMetadata\.schemaVersion !== "controlled-action-metadata\.v1"/, "preview readiness must derive only from metadata v1");
assert.match(previewReadinessBody, /schemaVersion:\s*"controlled-action-preview-readiness\.v1"/, "preview readiness schema must be v1");
assert.match(previewReadinessBody, /sourceMetadataVersion:\s*"controlled-action-metadata\.v1"/, "preview readiness must reference source metadata schema");
assert.match(previewReadinessBody, /userVisibleInThisPhase:\s*false/, "preview readiness must stay hidden in Phase 8K");
assert.match(previewReadinessBody, /allowedNextStep:\s*"preparePreviewOnly"/, "eligible preview readiness may only prepare preview");
assert.match(previewReadinessBody, /allowedNextStep:\s*"blocked"/, "blocked preview readiness must be represented");
assert.match(previewReadinessBody, /executionBoundary:\s*"previewOnlyReadiness"/, "preview readiness boundary must not execute");
assert.match(previewReadinessBody, /auditPolicy:\s*"observeOnly"/, "preview readiness must remain observe-only");

const requiredFields = [
  "schemaVersion",
  "sourceMetadataVersion",
  "actionId",
  "selectedToolId",
  "levelOneLabel",
  "previewEligible",
  "previewBlockedReason",
  "previewRiskLevel",
  "previewMode",
  "safePreviewTitle",
  "safePreviewSummary",
  "requiresExplicitConfirmation",
  "requiredPermissions",
  "missingInputs",
  "allowedNextStep",
  "executionBoundary",
  "auditPolicy",
  "userVisibleInThisPhase"
];
for (const field of requiredFields) {
  assert(previewReadinessBody.includes(field), `preview readiness helper should include ${field}`);
  assert(readinessDoc.includes(field), `preview readiness doc should define ${field}`);
}

const sandbox = vm.runInNewContext(`
  ${previewReadinessBody}
  ({ buildControlledActionPreviewReadinessFromMetadata });
`, {});

const lowRiskMetadata = {
  "workforce.training": ["openTrainingResources", "Training", "low", "Review training resources"],
  "workforce.job_pathways": ["showFarmJobs", "Jobs", "low", "Review farm job resources"],
  "workforce.field_support": ["openFieldSupportGuidance", "Field Support", "info", "Review field support guidance"],
  "learning.start": ["explainLearningTopic", "Learning", "low", "Review irrigation learning help"],
  "marketplace.agritrade": ["browseMarketplace", "Marketplace", "low", "Review AgriTrade browsing help"],
  "agriculture.help": ["explainAgricultureHelp", "Agriculture Help", "info", "Review agriculture help"]
};

const forbiddenClaimWords = /\b(opened|started|called|paid|verified|submitted|dispatched|scheduled|permission granted)\b/i;
for (const [selectedToolId, [actionId, levelOneLabel, riskLevel, expectedTitle]] of Object.entries(lowRiskMetadata)) {
  const readiness = sandbox.buildControlledActionPreviewReadinessFromMetadata({
    schemaVersion: "controlled-action-metadata.v1",
    actionId,
    selectedToolId,
    levelOneLabel,
    riskLevel,
    requiredPermissions: [],
    missingInputs: [],
    confirmationRequired: false,
    confirmationText: "metadata only",
    cancelPath: "ignore",
    executionBoundary: "metadataOnly",
    auditPolicy: "observeOnly",
    blockedReason: null
  });
  assert(readiness, `${selectedToolId} should create preview readiness`);
  assert.strictEqual(readiness.schemaVersion, "controlled-action-preview-readiness.v1", `${selectedToolId} preview schema should match`);
  assert.strictEqual(readiness.sourceMetadataVersion, "controlled-action-metadata.v1", `${selectedToolId} source metadata schema should match`);
  assert.strictEqual(readiness.actionId, actionId, `${selectedToolId} actionId should match`);
  assert.strictEqual(readiness.selectedToolId, selectedToolId, `${selectedToolId} selectedToolId should match`);
  assert.strictEqual(readiness.levelOneLabel, levelOneLabel, `${selectedToolId} Level 1 label should match`);
  assert.strictEqual(readiness.previewEligible, true, `${selectedToolId} should be preview-eligible internally`);
  assert.strictEqual(readiness.previewBlockedReason, null, `${selectedToolId} should not be blocked`);
  assert.strictEqual(readiness.previewRiskLevel, riskLevel, `${selectedToolId} risk should match`);
  assert(["informationalPreviewOnly", "lowRiskPreviewOnly"].includes(readiness.previewMode), `${selectedToolId} preview mode should be informational or low-risk only`);
  assert.strictEqual(readiness.safePreviewTitle, expectedTitle, `${selectedToolId} safe title should match`);
  assert(!forbiddenClaimWords.test(readiness.safePreviewTitle), `${selectedToolId} title must not claim execution`);
  assert(!forbiddenClaimWords.test(readiness.safePreviewSummary), `${selectedToolId} summary must not claim execution`);
  assert.strictEqual(readiness.requiresExplicitConfirmation, false, `${selectedToolId} must not create confirmation state`);
  assert(Array.isArray(readiness.requiredPermissions) && readiness.requiredPermissions.length === 0, `${selectedToolId} must not require permissions`);
  assert(Array.isArray(readiness.missingInputs) && readiness.missingInputs.length === 0, `${selectedToolId} must not require inputs`);
  assert.strictEqual(readiness.allowedNextStep, "preparePreviewOnly", `${selectedToolId} next step must not execute`);
  assert.strictEqual(readiness.executionBoundary, "previewOnlyReadiness", `${selectedToolId} boundary must not execute`);
  assert.strictEqual(readiness.auditPolicy, "observeOnly", `${selectedToolId} audit must remain observation-only`);
  assert.strictEqual(readiness.userVisibleInThisPhase, false, `${selectedToolId} must remain hidden`);
}

const blockedMetadata = [
  ["health.telehealth", "openTelehealthVideo", "Health", "restricted", [], [], "metadataOnly"],
  ["health.video_preview", "openCameraPreview", "Health", "low", ["camera"], [], "metadataOnly"],
  ["call.provider", "callDoctor", "Call", "low", ["call"], [], "metadataOnly"],
  ["map.location", "findLocation", "Map", "low", ["location"], [], "metadataOnly"],
  ["marketplace.sell_crop", "sellProduce", "Marketplace", "low", [], [], "metadataOnly"],
  ["marketplace.agritrade", "buyFertilizer", "Marketplace", "low", [], [], "metadataOnly"],
  ["payments.checkout", "processPayment", "Payment", "low", ["payment"], [], "metadataOnly"],
  ["identity.account", "verifyIdentity", "Identity", "low", ["identity"], [], "metadataOnly"],
  ["account.login", "logIntoAccount", "Account", "low", ["account"], [], "metadataOnly"],
  ["workforce.training", "openTrainingResources", "Training", "low", [], ["topic"], "metadataOnly"],
  ["workforce.training", "openTrainingResources", "Training", "medium", [], [], "metadataOnly"],
  ["workforce.training", "openTrainingResources", "Training", "low", [], [], "executeNow"]
];

for (const [selectedToolId, actionId, levelOneLabel, riskLevel, requiredPermissions, missingInputs, executionBoundary] of blockedMetadata) {
  const readiness = sandbox.buildControlledActionPreviewReadinessFromMetadata({
    schemaVersion: "controlled-action-metadata.v1",
    actionId,
    selectedToolId,
    levelOneLabel,
    riskLevel,
    requiredPermissions,
    missingInputs,
    confirmationRequired: false,
    confirmationText: "metadata only",
    cancelPath: "ignore",
    executionBoundary,
    auditPolicy: "observeOnly",
    blockedReason: null
  });
  assert(readiness, `${selectedToolId}/${actionId} should return a blocked readiness object`);
  assert.strictEqual(readiness.previewEligible, false, `${selectedToolId}/${actionId} must not be preview eligible`);
  assert(readiness.previewBlockedReason, `${selectedToolId}/${actionId} must include a blocked reason`);
  assert.strictEqual(readiness.allowedNextStep, "blocked", `${selectedToolId}/${actionId} next step must be blocked`);
  assert.strictEqual(readiness.userVisibleInThisPhase, false, `${selectedToolId}/${actionId} must remain hidden`);
  assert.notStrictEqual(readiness.executionBoundary, "execute", `${selectedToolId}/${actionId} must not permit execution`);
}

const noSchema = sandbox.buildControlledActionPreviewReadinessFromMetadata({
  schemaVersion: "agent-action.v1",
  actionId: "openTrainingResources",
  selectedToolId: "workforce.training"
});
assert.strictEqual(noSchema, null, "preview readiness must derive only from controlled-action-metadata.v1");

const fieldSupport = sandbox.buildControlledActionPreviewReadinessFromMetadata({
  schemaVersion: "controlled-action-metadata.v1",
  actionId: "openFieldSupportGuidance",
  selectedToolId: "workforce.field_support",
  levelOneLabel: "Field Support",
  riskLevel: "info",
  requiredPermissions: [],
  missingInputs: [],
  executionBoundary: "metadataOnly",
  blockedReason: null
});
assert(!/\b(dispatch|location|scheduling|service request)\b/i.test(fieldSupport.safePreviewSummary.replace(/\bwithout dispatching anyone, using location, scheduling, or creating a service request\b/i, "")), "field support summary must not imply dispatch/location/scheduling/service request");

const cropHelp = sandbox.buildControlledActionPreviewReadinessFromMetadata({
  schemaVersion: "controlled-action-metadata.v1",
  actionId: "explainAgricultureHelp",
  selectedToolId: "agriculture.help",
  levelOneLabel: "Agriculture Help",
  riskLevel: "info",
  requiredPermissions: [],
  missingInputs: [],
  executionBoundary: "metadataOnly",
  blockedReason: null
});
assert(!/\b(camera diagnosis|location use|dispatch|scheduling|record creation)\b/i.test(cropHelp.safePreviewSummary.replace(/\bwithout camera diagnosis, location use, dispatch, scheduling, or record creation\b/i, "")), "crop help summary must not imply camera/location/dispatch/scheduling/record creation");

assert.match(observationBody, /const controlledActionPreviewReadiness = buildControlledActionPreviewReadinessFromMetadata\(controlledActionMetadata\)/, "observation helper should derive preview readiness from controlled metadata only");
assert.match(observationBody, /controlledActionMetadata,\s*\n\s*controlledActionPreviewReadiness/, "observation record may store preview readiness beside controlled metadata");
assert(!/controlledActionPreviewReadiness[\s\S]{0,260}(openWorkflow|goSection|mutate|request|confirm|execute|stage|modal|permission|getUserMedia|geolocation|addEventListener|onclick)/i.test(observationBody), "observation helper must not execute from preview readiness");

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
  assert(!previewReadinessBody.includes(call), `preview readiness helper must not call ${call}`);
}

assert(!/renderControlledActionPreview|controlled-action-preview-card|data-controlled-action|controlledActionButton|Do you want me to continue\?/i.test(app), "Phase 8K must not insert visible preview UI hooks");
assert(!/Action:\s|Risk:\s|Needs:\s|Do you want me to continue\?/i.test(previewReadinessBody), "preview readiness helper must not contain visible preview prompt language");
assert.match(metadataBuilderBody, /schemaVersion:\s*"controlled-action-metadata\.v1"/, "metadata schema helper must remain present");
assert.match(server, /runtimeStatus:\s*"metadata-only"/, "server agent action metadata must remain metadata-only");
assert.match(server, /selectedToolId:\s*inferredSelectedToolId \|\| null/, "selectedToolId inference must remain additive");
assert(!server.includes("controlled-action-preview-readiness.v1"), "server.js must not emit preview readiness in Phase 8K");

assert.match(readinessDoc, /Phase 8K internal readiness contract only/i, "readiness doc must state Phase 8K scope");
assert.match(readinessDoc, /does not add visible preview UI/i, "readiness doc must forbid visible preview UI");
assert.match(readinessDoc, /Start a telehealth video call[\s\S]*Use my camera to diagnose this crop[\s\S]*Call the doctor[\s\S]*Find my location[\s\S]*Sell my produce[\s\S]*Buy fertilizer[\s\S]*Process my payment[\s\S]*Log into my account[\s\S]*Verify my identity/i, "readiness doc must list restricted examples");
assert.match(readinessDoc, /Browse AgriTrade[\s\S]*browse\/informational/i, "readiness doc must document marketplace browse nuance");
assert.match(readinessDoc, /buy, sell, payment, account, order, quote, and transaction behavior remains blocked/i, "readiness doc must block marketplace transactions");
assert.match(metadataDoc, /controlled-action-metadata\.v1/, "metadata doc must remain available as source schema");

assert.strictEqual(
  pkg.scripts["qa:nexus-controlled-action-preview-readiness"],
  "node scripts/nexus-controlled-action-preview-readiness-qa.js",
  "package should expose preview readiness QA alias"
);

console.log("Nexus controlled action preview readiness QA passed");
