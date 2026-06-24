const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.resolve(__dirname, "..");
const appPath = path.join(root, "public", "app.js");
const stylesPath = path.join(root, "public", "styles.css");
const serverPath = path.join(root, "server.js");
const packagePath = path.join(root, "package.json");
const schemaDocPath = path.join(root, "docs", "NEXUS_CONTROLLED_ACTION_METADATA_SCHEMA.md");

const app = fs.readFileSync(appPath, "utf8");
const styles = fs.readFileSync(stylesPath, "utf8");
const server = fs.readFileSync(serverPath, "utf8");
const pkg = JSON.parse(fs.readFileSync(packagePath, "utf8"));
const schemaDoc = fs.readFileSync(schemaDocPath, "utf8");

function extractFunction(source, name) {
  const start = source.indexOf(`function ${name}`);
  assert(start >= 0, `${name} should exist`);
  const signatureEnd = source.indexOf(")", start);
  const bodyStart = source.indexOf("{", signatureEnd);
  assert(signatureEnd > start && bodyStart > signatureEnd, `${name} body should start after its signature`);
  let depth = 0;
  for (let index = bodyStart; index < source.length; index += 1) {
    const char = source[index];
    if (char === "{") {
      depth += 1;
    } else if (char === "}") {
      depth -= 1;
      if (depth === 0) return source.slice(start, index + 1);
    }
  }
  throw new Error(`${name} body should be extractable`);
}

const lowRiskBuilderBody = extractFunction(app, "buildLowRiskAgentActionSuggestion");
const controlledBuilderBody = extractFunction(app, "buildControlledActionMetadataFromSuggestion");
const observationBody = extractFunction(app, "observeAgentActionMetadata");

assert.match(controlledBuilderBody, /schema foundation only/i, "controlled action metadata helper must declare schema-only scope");
assert.match(controlledBuilderBody, /must not render UI, stage actions, request[\s\S]*permissions, route, open workflows, confirm, or execute anything/i, "controlled action metadata helper must include no-execute boundary");
assert.match(controlledBuilderBody, /lowRiskSuggestion\.visibility !== "visible-level-1-label"/, "controlled action metadata must derive from visible Level 1 labels only");
assert.match(controlledBuilderBody, /lowRiskSuggestion\.displayOnly !== true/, "controlled action metadata must require display-only suggestions");
assert.match(controlledBuilderBody, /lowRiskSuggestion\.executionAllowed !== false/, "controlled action metadata must require execution-disabled suggestions");
assert.match(controlledBuilderBody, /lowRiskSuggestion\.autoOpenAllowed !== false/, "controlled action metadata must require auto-open-disabled suggestions");
assert.match(controlledBuilderBody, /schemaVersion:\s*"controlled-action-metadata\.v1"/, "controlled action metadata schema version must be v1");
assert.match(controlledBuilderBody, /executionBoundary:\s*"metadataOnly"/, "controlled action metadata must remain metadata-only");
assert.match(controlledBuilderBody, /auditPolicy:\s*"observeOnly"/, "controlled action metadata must remain observe-only");
assert.match(controlledBuilderBody, /requiredPermissions:\s*\[\]/, "controlled action metadata must not request permissions in Phase 8I");
assert.match(controlledBuilderBody, /missingInputs:\s*\[\]/, "controlled action metadata must not request inputs in Phase 8I");
assert.match(controlledBuilderBody, /confirmationRequired:\s*false/, "controlled action metadata must not create confirmation state");
assert.match(controlledBuilderBody, /blockedReason:\s*null/, "controlled action metadata may expose explicit blockedReason placeholder");

const requiredFields = [
  "schemaVersion",
  "actionId",
  "selectedToolId",
  "levelOneLabel",
  "riskLevel",
  "requiredPermissions",
  "missingInputs",
  "confirmationRequired",
  "confirmationText",
  "cancelPath",
  "executionBoundary",
  "auditPolicy",
  "blockedReason"
];
for (const field of requiredFields) {
  assert(controlledBuilderBody.includes(field), `controlled action metadata should include ${field}`);
  assert(schemaDoc.includes(field), `schema doc should define ${field}`);
}

const expectedActions = {
  "workforce.training": ["openTrainingResources", "Training", "low"],
  "workforce.job_pathways": ["showFarmJobs", "Jobs", "low"],
  "workforce.field_support": ["openFieldSupportGuidance", "Field Support", "info"],
  "learning.start": ["explainLearningTopic", "Learning", "low"],
  "marketplace.agritrade": ["browseMarketplace", "Marketplace", "low"],
  "agriculture.help": ["explainAgricultureHelp", "Agriculture Help", "info"]
};

const sandbox = vm.runInNewContext(`
  ${controlledBuilderBody}
  ({ buildControlledActionMetadataFromSuggestion });
`, {});

for (const [selectedToolId, [actionId, levelLabel, riskLevel]] of Object.entries(expectedActions)) {
  assert(lowRiskBuilderBody.includes(`"${selectedToolId}"`), `low-risk builder should keep ${selectedToolId}`);
  assert(controlledBuilderBody.includes(`"${selectedToolId}"`), `controlled action metadata should keep ${selectedToolId}`);
  assert(controlledBuilderBody.includes(`actionId: "${actionId}"`), `controlled action metadata should map ${selectedToolId} to ${actionId}`);
  assert(schemaDoc.includes(selectedToolId), `schema doc should mention ${selectedToolId}`);

  const metadata = sandbox.buildControlledActionMetadataFromSuggestion({
    visibility: "visible-level-1-label",
    selectedToolId,
    levelLabel,
    displayOnly: true,
    executionAllowed: false,
    autoOpenAllowed: false
  });
  assert(metadata, `${selectedToolId} should produce controlled action metadata`);
  assert.strictEqual(metadata.schemaVersion, "controlled-action-metadata.v1", `${selectedToolId} schema version should match`);
  assert.strictEqual(metadata.actionId, actionId, `${selectedToolId} actionId should match`);
  assert.strictEqual(metadata.selectedToolId, selectedToolId, `${selectedToolId} selectedToolId should match`);
  assert.strictEqual(metadata.levelOneLabel, levelLabel, `${selectedToolId} Level 1 label should match`);
  assert.strictEqual(metadata.riskLevel, riskLevel, `${selectedToolId} riskLevel should match`);
  assert(Array.isArray(metadata.requiredPermissions) && metadata.requiredPermissions.length === 0, `${selectedToolId} should not require permissions`);
  assert(Array.isArray(metadata.missingInputs) && metadata.missingInputs.length === 0, `${selectedToolId} should not require inputs`);
  assert.strictEqual(metadata.confirmationRequired, false, `${selectedToolId} should not require confirmation in Phase 8I`);
  assert.strictEqual(metadata.executionBoundary, "metadataOnly", `${selectedToolId} execution boundary should remain metadataOnly`);
  assert.strictEqual(metadata.auditPolicy, "observeOnly", `${selectedToolId} audit policy should remain observeOnly`);
  assert.strictEqual(metadata.blockedReason, null, `${selectedToolId} blockedReason placeholder should remain null`);
}

const invalidSuggestions = [
  null,
  {},
  { visibility: "visible-level-1-label", selectedToolId: "health.telehealth", levelLabel: "Health", displayOnly: true, executionAllowed: false, autoOpenAllowed: false },
  { visibility: "visible-level-1-label", selectedToolId: "marketplace.sell_crop", levelLabel: "Marketplace", displayOnly: true, executionAllowed: false, autoOpenAllowed: false },
  { visibility: "hidden", selectedToolId: "workforce.training", levelLabel: "Training", displayOnly: true, executionAllowed: false, autoOpenAllowed: false },
  { visibility: "visible-level-1-label", selectedToolId: "workforce.training", levelLabel: "Training", displayOnly: false, executionAllowed: false, autoOpenAllowed: false },
  { visibility: "visible-level-1-label", selectedToolId: "workforce.training", levelLabel: "Training", displayOnly: true, executionAllowed: true, autoOpenAllowed: false },
  { visibility: "visible-level-1-label", selectedToolId: "workforce.training", levelLabel: "Training", displayOnly: true, executionAllowed: false, autoOpenAllowed: true }
];
for (const suggestion of invalidSuggestions) {
  assert.strictEqual(sandbox.buildControlledActionMetadataFromSuggestion(suggestion), null, "invalid or high-risk suggestions must not produce controlled action metadata");
}

const excludedIds = [
  "health.intake",
  "health.telehealth",
  "health.video_preview",
  "health.provider_call",
  "map.location",
  "marketplace.sell_crop",
  "payments.checkout",
  "identity.account",
  "account.login",
  "call.provider"
];
for (const id of excludedIds) {
  assert(!lowRiskBuilderBody.includes(`"${id}"`), `low-risk builder must not include ${id}`);
  assert(!controlledBuilderBody.includes(`"${id}"`), `controlled action metadata must not include ${id}`);
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
  "request(",
  "navigator.permissions",
  "getUserMedia",
  "geolocation",
  "addEventListener",
  "onclick"
];
for (const call of forbiddenCalls) {
  assert(!controlledBuilderBody.includes(call), `controlled action metadata helper must not call ${call}`);
}

assert.match(observationBody, /const lowRiskSuggestion = buildLowRiskAgentActionSuggestion\(agentAction\)/, "observation helper should build low-risk suggestion first");
assert.match(observationBody, /const controlledActionMetadata = buildControlledActionMetadataFromSuggestion\(lowRiskSuggestion, \{ agentAction \}\)/, "observation helper should derive controlled metadata from low-risk suggestion only");
assert.match(observationBody, /lowRiskSuggestion,\s*\n\s*(policyDecision,\s*\n\s*)?controlledActionMetadata/, "observation record should store controlled metadata beside low-risk suggestion");
assert(!/controlledActionMetadata[\s\S]{0,260}(openWorkflow|goSection|mutate|request\(|confirmPending|execute|stage|modal|permission|getUserMedia|geolocation)/i.test(observationBody), "observation helper must not execute from controlled metadata");

assert.match(app, /class="level-one-suggestion-label"/, "visible suggestion labels must remain label elements");
assert.match(styles, /\.level-one-suggestion-label[\s\S]*pointer-events:\s*none/, "visible suggestion labels must remain non-clickable");
assert(!/controlledActionButton|Do you want me to continue\?/i.test(app), "controlled action metadata must not add action buttons or continue prompts");
assert.match(app, /function renderControlledActionPreview/, "Phase 8M may render a display-only preview downstream of metadata");

assert.match(server, /runtimeStatus:\s*"metadata-only"/, "backend agent action metadata must remain metadata-only");
assert.match(server, /selectedToolId:\s*inferredSelectedToolId \|\| null/, "backend selectedToolId inference should remain additive");
assert(!server.includes("controlled-action-metadata.v1"), "server.js should not emit controlled action metadata in Phase 8I");

assert.match(schemaDoc, /metadata-only/i, "schema doc must describe metadata-only scope");
assert.match(schemaDoc, /info[\s\S]*low[\s\S]*medium[\s\S]*high[\s\S]*restricted/i, "schema doc must define risk levels");
assert.match(schemaDoc, /camera[\s\S]*location[\s\S]*call[\s\S]*telehealth[\s\S]*payment[\s\S]*identity[\s\S]*account[\s\S]*marketplaceTransaction/i, "schema doc must define permission classes");
assert.match(schemaDoc, /metadataOnly[\s\S]*previewOnly[\s\S]*confirmedLowRiskOnly[\s\S]*permissionedActionRequired[\s\S]*restricted/i, "schema doc must define execution boundaries");
assert.match(schemaDoc, /none[\s\S]*observeOnly[\s\S]*logOnPreview[\s\S]*logOnConfirmation[\s\S]*logOnExecution/i, "schema doc must define audit policies");
assert.match(schemaDoc, /telehealth video[\s\S]*camera diagnosis[\s\S]*call the doctor[\s\S]*find my location[\s\S]*sell my produce[\s\S]*buy fertilizer[\s\S]*process my payment[\s\S]*log into my account[\s\S]*verify my identity/i, "schema doc must document restricted examples");

assert.strictEqual(
  pkg.scripts["qa:nexus-controlled-action-metadata-schema"],
  "node scripts/nexus-controlled-action-metadata-schema-qa.js",
  "package should expose controlled action metadata schema QA alias"
);

console.log("Nexus controlled action metadata schema QA passed");
