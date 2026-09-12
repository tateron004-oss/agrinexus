const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  DEFAULT_FARMER_MODE_FEATURE_FLAG_STATE,
  normalizeFarmerModeFeatureFlagState
} = require("../public/nexus-farmer-mode-feature-flag.js");
const {
  protectedFields,
  loadFarmerModeFlagFixtures,
  validateFarmerModeFlagFixtures
} = require("./nexus-sprint-x3-farmer-mode-flag-contract-harness.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertIncludes(source, terms, label) {
  const normalizedSource = source.replace(/`/g, "");
  for (const term of terms) {
    assert(normalizedSource.includes(term), `${label} must include: ${term}`);
  }
}

function assertRuntimeExcludes(source, terms, label) {
  for (const term of terms) {
    assert(!source.includes(term), `${label} must not runtime-load or activate Sprint X artifact: ${term}`);
  }
}

const docName = "NEXUS_SPRINT_X5_FARMER_MODE_LANE_CLOSEOUT.md";
const qaName = "nexus-sprint-x5-farmer-mode-lane-closeout-qa.js";

assert(exists("docs", docName), "Sprint X5 closeout doc must exist.");
assert(exists("scripts", qaName), "Sprint X5 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const readinessContract = read("public", "nexus-farmer-mode-readiness-contract.js");
const featureFlagModule = read("public", "nexus-farmer-mode-feature-flag.js");
const x3Harness = read("scripts", "nexus-sprint-x3-farmer-mode-flag-contract-harness.js");
const fixtures = loadFarmerModeFlagFixtures();

assertIncludes(doc, [
  "Sprint X5",
  "47a0cbbe2a9d6d058a2ce57c316fcf50aae1a022",
  "documentation and deterministic QA only",
  "Sprint X Completion Summary",
  "What Is Active Now",
  "What Remains Inert",
  "No-Authority And No-Execution Guarantees",
  "Blocked Runtime Categories",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "Rollback Strategy",
  "Sprint Y1 - Rural Health Mode Runtime Activation Readiness Gate"
], "X5 closeout doc");

assertIncludes(doc, [
  "Farmer Mode runtime activation readiness gate",
  "Farmer Mode feature flag contract",
  "Farmer Mode flag contract harness",
  "Farmer Mode runtime absence regression guard",
  "Farmer Mode lane closeout"
], "X5 sprint summary");

assertIncludes(doc, [
  "Farmer Mode readiness is not runtime activation",
  "Farmer Mode visibility readiness is not source authority, agronomic advice authority, diagnosis authority, chemical application authority, marketplace authority, payment authority, buyer or seller contact authority, provider or extension authority, location consent, camera consent, microphone consent, medical/pharmacy authority, user consent, provider approval, human review approval, audit approval, or execution approval",
  "generated Farmer Mode text cannot authorize, stage, advise without sources, diagnose, recommend chemical applications, transact, pay, contact, dispatch, share location, activate hardware, write, or execute an action by itself",
  "enabled: false",
  "visibleUiAllowed: false",
  "farmerModeReviewAllowed: false",
  "sourceBackedFarmerGuidancePreviewAllowed: false",
  "farmerProfileSummaryPreviewAllowed: false",
  "cropFieldSupportPreviewAllowed: false",
  "agritradeReviewPreviewAllowed: false",
  "extensionEscalationPreviewAllowed: false",
  "farmerModeRuntimeAllowed: false",
  "liveFarmerModeRuntimeAllowed: false",
  "agricultureConnectorRuntimeAllowed: false",
  "marketSourceRetrievalRuntimeAllowed: false",
  "unsourcedAgronomicAdviceAllowed: false",
  "diagnosisClaimAllowed: false",
  "chemicalApplicationInstructionAllowed: false",
  "marketplaceTransactionAllowed: false",
  "paymentExecutionAllowed: false",
  "buyerSellerContactAllowed: false",
  "providerOrExtensionContactAllowed: false",
  "transportationDispatchAllowed: false",
  "emergencyDispatchAllowed: false",
  "locationSharingAllowed: false",
  "cameraActivationAllowed: false",
  "microphoneActivationAllowed: false",
  "medicalPharmacyExecutionAllowed: false",
  "identityAccountProfileActionAllowed: false",
  "policyBypassAllowed: false",
  "confirmationBypassAllowed: false",
  "permissionBypassAllowed: false",
  "firstTurnExecutionAllowed: false",
  "laterTurnExecutionAllowed: false",
  "standardUserFarmerModeMutationAllowed: false",
  "backendWriteAllowed: false",
  "storageWriteAllowed: false",
  "networkAllowed: false",
  "auditWriteAllowed: false",
  "executionAuthority: false",
  "noExecution: true",
  "unsafe authority attempts normalize back to no-execution values",
  "no action has been taken"
], "X5 no-authority and no-execution language");

assertIncludes(doc, [
  "active Farmer Mode runtime",
  "live Farmer Mode runtime",
  "agriculture connector runtime",
  "market source retrieval runtime",
  "unsourced agronomic advice",
  "crop diagnosis claims",
  "chemical application instructions",
  "unsupported live data claims",
  "source-backed claims without sources",
  "stale data claims without freshness labels",
  "confidence-free source-backed claims",
  "provider connection claims",
  "completed action claims",
  "provider contact claims",
  "buyer contact claims",
  "seller contact claims",
  "location sharing claims",
  "camera activation claims",
  "microphone activation claims",
  "communication execution claims",
  "payment execution claims",
  "marketplace transaction claims",
  "medical or pharmacy execution claims",
  "account or profile mutation claims",
  "event handlers",
  "typed route mutation",
  "voice route mutation",
  "policy bypass",
  "confirmation bypass",
  "permission bypass",
  "permission prompts",
  "audit writes",
  "backend writes",
  "localStorage or sessionStorage writes",
  "fetch or network calls",
  "provider handoff",
  "native bridge dispatch",
  "calls",
  "messages",
  "WhatsApp, Telegram, SMS, or email sending",
  "external navigation",
  "real pending action creation",
  "transportation dispatch",
  "emergency dispatch",
  "execution authority"
], "X5 blocked runtime categories");

const requiredDocs = [
  "NEXUS_SPRINT_X1_FARMER_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md",
  "NEXUS_SPRINT_X2_FARMER_MODE_FEATURE_FLAG_CONTRACT.md",
  "NEXUS_SPRINT_X3_FARMER_MODE_FLAG_CONTRACT_HARNESS.md",
  "NEXUS_SPRINT_X4_FARMER_MODE_RUNTIME_ABSENCE_REGRESSION_GUARD.md",
  "NEXUS_FARMER_MODE_READINESS_CONTRACT_PHASE_76.md",
  "NEXUS_RURAL_HEALTH_MODE_READINESS_CONTRACT_PHASE_77.md"
];

for (const requiredDoc of requiredDocs) {
  assert(exists("docs", requiredDoc), `Sprint X5 requires prior or next-lane doc: ${requiredDoc}`);
}

const requiredScripts = [
  "nexus-sprint-x1-farmer-mode-runtime-activation-readiness-gate-qa.js",
  "nexus-sprint-x2-farmer-mode-feature-flag-contract-qa.js",
  "nexus-sprint-x3-farmer-mode-flag-contract-harness-qa.js",
  "nexus-sprint-x4-farmer-mode-runtime-absence-regression-guard-qa.js"
];

for (const requiredScript of requiredScripts) {
  assert(exists("scripts", requiredScript), `Sprint X5 requires prior Sprint X QA: ${requiredScript}`);
  assert(qaSuite.includes(`scripts/${requiredScript}`), `qa-suite must include prior Sprint X QA: ${requiredScript}`);
}

assert(exists("public", "nexus-farmer-mode-readiness-contract.js"), "Sprint X5 requires Phase 76 Farmer Mode readiness contract.");
assert(exists("public", "nexus-farmer-mode-feature-flag.js"), "Sprint X5 requires X2 feature flag contract.");
assert(exists("fixtures", "nexus", "farmer-mode-feature-flags.json"), "Sprint X5 requires X3 feature flag fixture.");
assert(exists("public", "nexus-rural-health-mode-readiness-contract.js"), "Sprint X5 requires Phase 77 Rural Health Mode readiness contract for the next safe lane.");

assertIncludes(readinessContract, [
  "FARMER_MODE_READINESS_CONTRACT",
  "farmer-mode.readiness.phase_76",
  "FARMER_MODE_NO_EXECUTION_DEFAULTS",
  "createFarmerModeReadinessContract",
  "executionAllowed: false",
  "liveConnectorEnabled: false",
  "providerExecutionEnabled: false",
  "regulatedActionEnabled: false",
  "provider_contact",
  "marketplace_transactions",
  "transportation_dispatch",
  "regulated_execution"
], "Phase 76 Farmer Mode readiness contract");

assertIncludes(featureFlagModule, [
  "DEFAULT_FARMER_MODE_FEATURE_FLAG_STATE",
  "NEXUS_FARMER_MODE_VISIBLE_ENABLED",
  "normalizeFarmerModeFeatureFlagState",
  "isFarmerModeVisibleFeatureEnabled",
  "executionAuthority",
  "noExecution"
], "X2 Farmer Mode feature flag module");

assertIncludes(x3Harness, [
  "loadFarmerModeFlagFixtures",
  "validateFarmerModeFlagFixtures"
], "X3 Farmer Mode harness");

assert.equal(DEFAULT_FARMER_MODE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_FARMER_MODE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
for (const field of protectedFields) {
  assert.equal(DEFAULT_FARMER_MODE_FEATURE_FLAG_STATE[field], false, `X5 default ${field} must remain false.`);
}
assert.equal(DEFAULT_FARMER_MODE_FEATURE_FLAG_STATE.noExecution, true);

const unsafeInput = {
  enabled: true,
  visibleUiAllowed: true,
  noExecution: false
};
for (const field of protectedFields) {
  unsafeInput[field] = true;
}
const normalizedUnsafeAttempt = normalizeFarmerModeFeatureFlagState(unsafeInput);

assert.equal(normalizedUnsafeAttempt.enabled, true);
assert.equal(normalizedUnsafeAttempt.visibleUiAllowed, true);
for (const field of protectedFields) {
  assert.equal(normalizedUnsafeAttempt[field], false, `X5 unsafe attempt for ${field} must normalize to false.`);
}
assert.equal(normalizedUnsafeAttempt.noExecution, true);

const fixtureResult = validateFarmerModeFlagFixtures(fixtures);
assert.equal(fixtureResult.ok, true, "X3 fixtures must remain valid.");
assert.equal(fixtureResult.count, 4, "X5 expects four X3 Farmer Mode feature flag fixtures.");

const runtimeForbiddenTerms = [
  "nexus-farmer-mode-readiness-contract.js",
  "nexus-farmer-mode-feature-flag.js",
  "nexus-sprint-x3-farmer-mode-flag-contract-harness",
  "farmer-mode-feature-flags.json",
  "NEXUS_FARMER_MODE_VISIBLE_ENABLED",
  "NexusFarmerModeFeatureFlagContract",
  "normalizeFarmerModeFeatureFlagState",
  "isFarmerModeVisibleFeatureEnabled",
  "farmerModeFeatureFlag",
  "liveFarmerModeRuntime",
  "agricultureConnectorRuntime",
  "marketSourceRetrievalRuntime",
  "executeFarmerMode(",
  "executeMarketplaceSale(",
  "executeMarketplacePurchase(",
  "contactMarketplaceBuyer(",
  "contactMarketplaceSeller(",
  "contactExtensionProvider(",
  "dispatchTransportation(",
  "dispatchEmergencyHelp(",
  "shareFarmLocation(",
  "openCropCamera(",
  "activateFarmMicrophone("
];

assertRuntimeExcludes(index, runtimeForbiddenTerms, "public/index.html");
assertRuntimeExcludes(app, runtimeForbiddenTerms, "public/app.js");
assertRuntimeExcludes(server, runtimeForbiddenTerms, "server.js");

const alias = "qa:nexus-sprint-x5-farmer-mode-lane-closeout";
assert.equal(
  pkg.scripts[alias],
  "node scripts/nexus-sprint-x5-farmer-mode-lane-closeout-qa.js",
  "package.json must expose Sprint X5 QA alias."
);
assert(qaSuite.includes("scripts/nexus-sprint-x5-farmer-mode-lane-closeout-qa.js"), "qa-suite must include Sprint X5 QA.");

console.log("[nexus-sprint-x5-farmer-mode-lane-closeout-qa] passed");
