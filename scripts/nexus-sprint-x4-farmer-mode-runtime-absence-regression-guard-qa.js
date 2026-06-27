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

const docName = "NEXUS_SPRINT_X4_FARMER_MODE_RUNTIME_ABSENCE_REGRESSION_GUARD.md";
const qaName = "nexus-sprint-x4-farmer-mode-runtime-absence-regression-guard-qa.js";

assert(exists("docs", docName), "Sprint X4 absence guard doc must exist.");
assert(exists("scripts", qaName), "Sprint X4 QA script must exist.");

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
  "Sprint X4",
  "9fb8ecf670f689ce5f9331d4ba365451a4a15286",
  "documentation and QA only",
  "Purpose",
  "Runtime Absence Requirements",
  "Blocked Runtime Behavior",
  "Required Contract Invariants",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "QA Expectations",
  "Sprint X5 - Farmer Mode Lane Closeout"
], "X4 absence guard doc");

assertIncludes(doc, [
  "X1 Farmer Mode runtime activation readiness gate",
  "X2 Farmer Mode feature flag contract",
  "X3 Farmer Mode flag contract harness",
  "Phase 76 Farmer Mode readiness contract"
], "X4 protected artifacts");

assertIncludes(doc, [
  "public/nexus-farmer-mode-readiness-contract.js",
  "public/nexus-farmer-mode-feature-flag.js",
  "scripts/nexus-sprint-x3-farmer-mode-flag-contract-harness.js",
  "fixtures/nexus/farmer-mode-feature-flags.json",
  "Sprint X QA scripts"
], "X4 runtime absence artifact list");

assertIncludes(doc, [
  "It intentionally does not ban generic farmer, agriculture, field, crop",
  "AgriTrade",
  "marketplace",
  "learning",
  "health",
  "support",
  "map",
  "workforce"
], "X4 generic wording exception");

assertIncludes(doc, [
  "active Farmer Mode runtime",
  "live Farmer Mode runtime",
  "agriculture connector runtime",
  "market source retrieval runtime",
  "source-backed farmer guidance preview runtime",
  "farmer profile summary runtime",
  "crop field support runtime",
  "AgriTrade review runtime",
  "extension escalation runtime",
  "unsourced agronomic advice",
  "diagnosis claims",
  "chemical application instructions",
  "marketplace transaction execution",
  "payment execution",
  "buyer contact",
  "seller contact",
  "provider or extension contact",
  "transportation dispatch",
  "emergency dispatch",
  "location sharing",
  "camera activation",
  "microphone activation",
  "medical or pharmacy execution",
  "identity, account, or profile mutation",
  "source-backed claims without sources",
  "stale data claims without freshness labels",
  "confidence-free source-backed claims",
  "unsupported live data claims",
  "provider connection claims",
  "completed action claims",
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
  "execution authority"
], "X4 blocked runtime behavior");

for (const requiredPath of [
  ["docs", "NEXUS_SPRINT_X1_FARMER_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md"],
  ["docs", "NEXUS_SPRINT_X2_FARMER_MODE_FEATURE_FLAG_CONTRACT.md"],
  ["docs", "NEXUS_SPRINT_X3_FARMER_MODE_FLAG_CONTRACT_HARNESS.md"],
  ["docs", "NEXUS_FARMER_MODE_READINESS_CONTRACT_PHASE_76.md"],
  ["public", "nexus-farmer-mode-readiness-contract.js"],
  ["public", "nexus-farmer-mode-feature-flag.js"],
  ["fixtures", "nexus", "farmer-mode-feature-flags.json"],
  ["scripts", "nexus-sprint-x3-farmer-mode-flag-contract-harness.js"]
]) {
  assert(exists(...requiredPath), `X4 requires artifact: ${requiredPath.join("/")}`);
}

const runtime = [index, app, server].join("\n");
for (const term of [
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
  "sourceBackedFarmerGuidancePreview",
  "farmerProfileSummaryRuntime",
  "cropFieldSupportRuntime",
  "agritradeReviewRuntime",
  "extensionEscalationRuntime",
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
  "activateFarmMicrophone(",
  "nexus-sprint-x4-farmer-mode-runtime-absence-regression-guard"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Farmer Mode lane artifact: ${term}`);
}

assertIncludes(readinessContract, [
  "FARMER_MODE_READINESS_CONTRACT",
  "farmer-mode.readiness.phase_76",
  "FARMER_MODE_NO_EXECUTION_DEFAULTS",
  "createFarmerModeReadinessContract",
  "executionAllowed: false",
  "liveConnectorEnabled: false",
  "providerExecutionEnabled: false",
  "regulatedActionEnabled: false",
  "marketplace_transactions",
  "provider_contact",
  "location",
  "transportation_dispatch",
  "emergency",
  "regulated_execution"
], "Phase 76 Farmer Mode readiness contract");

assert.equal(DEFAULT_FARMER_MODE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_FARMER_MODE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
for (const field of protectedFields) {
  assert.equal(DEFAULT_FARMER_MODE_FEATURE_FLAG_STATE[field], false, `X4 default ${field} must remain false.`);
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

assert.equal(normalizedUnsafeAttempt.visibleUiAllowed, true);
for (const field of protectedFields) {
  assert.equal(normalizedUnsafeAttempt[field], false, `Unsafe attempt must normalize ${field} back to false.`);
}
assert.equal(normalizedUnsafeAttempt.noExecution, true);

const fixtureResult = validateFarmerModeFlagFixtures(fixtures);
assert.equal(fixtureResult.ok, true, "X3 fixtures must remain valid.");
assert.equal(fixtureResult.count, 4, "X3 fixtures must remain complete.");

for (const source of [featureFlagModule, x3Harness]) {
  for (const term of [
    "document.",
    "querySelector",
    "addEventListener",
    "fetch(",
    "XMLHttpRequest",
    "localStorage",
    "sessionStorage",
    "indexedDB",
    "navigator.credentials",
    "navigator.geolocation",
    "mediaDevices",
    "window.location",
    "location.href",
    "sendBeacon",
    "setItem",
    "postMessage",
    "window.nativeBridge",
    "nativeBridge.",
    "ACTION_CALL",
    "getUserMedia",
    "openWorkflow(",
    "goSection(",
    "executeFarmerMode(",
    "executeMarketplaceSale(",
    "executeMarketplacePurchase(",
    "contactMarketplaceBuyer(",
    "contactMarketplaceSeller(",
    "shareFarmLocation(",
    "openCropCamera(",
    "dispatchFieldAgent("
  ]) {
    assert(!source.includes(term), `Sprint X contract/harness must not include runtime API: ${term}`);
  }
}

const alias = "qa:nexus-sprint-x4-farmer-mode-runtime-absence-regression-guard";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint X4 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-x1-farmer-mode-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint X1 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-x2-farmer-mode-feature-flag-contract-qa.js"), "qa-suite must continue to include Sprint X2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-x3-farmer-mode-flag-contract-harness-qa.js"), "qa-suite must continue to include Sprint X3 QA.");

console.log("[nexus-sprint-x4-farmer-mode-runtime-absence-regression-guard-qa] passed");
