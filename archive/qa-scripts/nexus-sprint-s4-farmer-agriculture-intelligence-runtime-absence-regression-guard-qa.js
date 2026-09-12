const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  DEFAULT_FARMER_AGRICULTURE_INTELLIGENCE_FEATURE_FLAG_STATE,
  normalizeFarmerAgricultureIntelligenceFeatureFlagState
} = require("../public/nexus-farmer-agriculture-intelligence-feature-flag.js");
const {
  protectedFields,
  loadFarmerAgricultureIntelligenceFlagFixtures,
  validateFarmerAgricultureIntelligenceFlagFixtures
} = require("./nexus-sprint-s3-farmer-agriculture-intelligence-flag-contract-harness.js");

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

const docName = "NEXUS_SPRINT_S4_FARMER_AGRICULTURE_INTELLIGENCE_RUNTIME_ABSENCE_REGRESSION_GUARD.md";
const qaName = "nexus-sprint-s4-farmer-agriculture-intelligence-runtime-absence-regression-guard-qa.js";

assert(exists("docs", docName), "Sprint S4 absence guard doc must exist.");
assert(exists("scripts", qaName), "Sprint S4 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const readinessContract = read("public", "nexus-farmer-agriculture-intelligence-readiness-contract.js");
const featureFlagModule = read("public", "nexus-farmer-agriculture-intelligence-feature-flag.js");
const s3Harness = read("scripts", "nexus-sprint-s3-farmer-agriculture-intelligence-flag-contract-harness.js");
const fixtures = loadFarmerAgricultureIntelligenceFlagFixtures();

assertIncludes(doc, [
  "Sprint S4",
  "a1f259632adfa61aa0c672d9b918440e19f41a54",
  "documentation and QA only",
  "Purpose",
  "Runtime Absence Requirements",
  "Blocked Runtime Behavior",
  "Required Contract Invariants",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "QA Expectations",
  "Sprint S5 - Farmer Agriculture Intelligence Lane Closeout"
], "S4 absence guard doc");

assertIncludes(doc, [
  "S1 Farmer Agriculture Intelligence runtime activation readiness gate",
  "S2 Farmer Agriculture Intelligence feature flag contract",
  "S3 Farmer Agriculture Intelligence flag contract harness",
  "Phase 71 Farmer Agriculture Intelligence readiness contract"
], "S4 protected artifacts");

assertIncludes(doc, [
  "public/nexus-farmer-agriculture-intelligence-readiness-contract.js",
  "public/nexus-farmer-agriculture-intelligence-feature-flag.js",
  "scripts/nexus-sprint-s3-farmer-agriculture-intelligence-flag-contract-harness.js",
  "fixtures/nexus/farmer-agriculture-intelligence-feature-flags.json",
  "Sprint S QA scripts"
], "S4 runtime absence artifact list");

assertIncludes(doc, [
  "It intentionally does not ban generic agriculture words such as",
  "farmer",
  "farm",
  "crop",
  "livestock",
  "soil",
  "pest",
  "weather",
  "market",
  "AgriTrade",
  "extension",
  "agriculture"
], "S4 generic wording exception");

assertIncludes(doc, [
  "active farmer agriculture intelligence runtime",
  "live agriculture advisor",
  "source retrieval runtime",
  "unsourced agriculture advice",
  "chemical application instruction execution",
  "diagnosis claims",
  "marketplace transaction execution",
  "payment execution",
  "provider or extension contact",
  "live weather or pest claim without a source trace",
  "location sharing",
  "crop insurance filing",
  "standard user agriculture brain mutation",
  "source-backed answer claims without sources",
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
  "health, medical, pharmacy, prescription, or FHIR execution",
  "appointment scheduling",
  "transportation dispatch",
  "emergency dispatch",
  "external navigation",
  "real pending action creation",
  "execution authority"
], "S4 blocked runtime behavior");

for (const requiredPath of [
  ["docs", "NEXUS_SPRINT_S1_FARMER_AGRICULTURE_INTELLIGENCE_RUNTIME_ACTIVATION_READINESS_GATE.md"],
  ["docs", "NEXUS_SPRINT_S2_FARMER_AGRICULTURE_INTELLIGENCE_FEATURE_FLAG_CONTRACT.md"],
  ["docs", "NEXUS_SPRINT_S3_FARMER_AGRICULTURE_INTELLIGENCE_FLAG_CONTRACT_HARNESS.md"],
  ["docs", "NEXUS_FARMER_AGRICULTURE_INTELLIGENCE_READINESS_CONTRACT_PHASE_71.md"],
  ["public", "nexus-farmer-agriculture-intelligence-readiness-contract.js"],
  ["public", "nexus-farmer-agriculture-intelligence-feature-flag.js"],
  ["fixtures", "nexus", "farmer-agriculture-intelligence-feature-flags.json"],
  ["scripts", "nexus-sprint-s3-farmer-agriculture-intelligence-flag-contract-harness.js"]
]) {
  assert(exists(...requiredPath), `S4 requires artifact: ${requiredPath.join("/")}`);
}

const runtime = [index, app, server].join("\n");
for (const term of [
  "nexus-farmer-agriculture-intelligence-readiness-contract.js",
  "nexus-farmer-agriculture-intelligence-feature-flag.js",
  "nexus-sprint-s3-farmer-agriculture-intelligence-flag-contract-harness",
  "farmer-agriculture-intelligence-feature-flags.json",
  "NEXUS_FARMER_AGRICULTURE_INTELLIGENCE_VISIBLE_ENABLED",
  "NexusFarmerAgricultureIntelligenceFeatureFlagContract",
  "normalizeFarmerAgricultureIntelligenceFeatureFlagState",
  "isFarmerAgricultureIntelligenceVisibleFeatureEnabled",
  "farmerAgricultureIntelligenceRuntime",
  "liveAgricultureAdvisor",
  "sourceRetrievalRuntime",
  "executeAgricultureAdvice(",
  "contactExtensionProvider(",
  "executeChemicalApplication(",
  "fileCropInsuranceClaim(",
  "nexus-sprint-s4-farmer-agriculture-intelligence-runtime-absence-regression-guard"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Farmer Agriculture Intelligence lane artifact: ${term}`);
}

assertIncludes(readinessContract, [
  "FARMER_AGRICULTURE_INTELLIGENCE_READINESS_CONTRACT",
  "farmer-agriculture-intelligence.readiness.phase_71",
  "FARMER_AGRICULTURE_INTELLIGENCE_NO_EXECUTION_DEFAULTS",
  "createFarmerAgricultureIntelligenceReadinessContract",
  "executionAllowed: false",
  "liveAgricultureAdvisorEnabled: false",
  "unsourcedAgricultureAdviceAllowed: false",
  "chemicalApplicationInstructionAllowed: false",
  "providerOrExtensionContactAllowed: false"
], "Phase 71 Farmer Agriculture Intelligence readiness contract");

assert.equal(DEFAULT_FARMER_AGRICULTURE_INTELLIGENCE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_FARMER_AGRICULTURE_INTELLIGENCE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
for (const field of protectedFields) {
  assert.equal(DEFAULT_FARMER_AGRICULTURE_INTELLIGENCE_FEATURE_FLAG_STATE[field], false, `S4 default ${field} must remain false.`);
}
assert.equal(DEFAULT_FARMER_AGRICULTURE_INTELLIGENCE_FEATURE_FLAG_STATE.noExecution, true);

const normalizedUnsafeAttempt = normalizeFarmerAgricultureIntelligenceFeatureFlagState({
  enabled: true,
  visibleUiAllowed: true,
  agricultureReviewAllowed: true,
  sourceBackedGuidancePreviewAllowed: true,
  farmerSummaryPreviewAllowed: true,
  extensionEscalationPreviewAllowed: true,
  agricultureRuntimeAllowed: true,
  liveAgricultureAdvisorAllowed: true,
  sourceRetrievalRuntimeAllowed: true,
  unsourcedAgricultureAdviceAllowed: true,
  chemicalApplicationInstructionAllowed: true,
  diagnosisClaimAllowed: true,
  marketplaceTransactionAllowed: true,
  paymentExecutionAllowed: true,
  providerOrExtensionContactAllowed: true,
  weatherOrPestLiveClaimAllowed: true,
  locationSharingAllowed: true,
  cropInsuranceFilingAllowed: true,
  policyBypassAllowed: true,
  confirmationBypassAllowed: true,
  permissionBypassAllowed: true,
  firstTurnExecutionAllowed: true,
  laterTurnExecutionAllowed: true,
  standardUserAgricultureBrainMutationAllowed: true,
  backendWriteAllowed: true,
  storageWriteAllowed: true,
  networkAllowed: true,
  auditWriteAllowed: true,
  executionAuthority: true,
  noExecution: false
});

assert.equal(normalizedUnsafeAttempt.visibleUiAllowed, true);
for (const field of protectedFields) {
  assert.equal(normalizedUnsafeAttempt[field], false, `Unsafe attempt must normalize ${field} back to false.`);
}
assert.equal(normalizedUnsafeAttempt.noExecution, true);

const fixtureResult = validateFarmerAgricultureIntelligenceFlagFixtures(fixtures);
assert.equal(fixtureResult.ok, true, "S3 fixtures must remain valid.");
assert.equal(fixtureResult.count, 4, "S3 fixtures must remain complete.");

for (const source of [featureFlagModule, s3Harness]) {
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
    "executeAgricultureAdvice(",
    "contactExtensionProvider(",
    "executeChemicalApplication(",
    "fileCropInsuranceClaim("
  ]) {
    assert(!source.includes(term), `Sprint S contract/harness must not include runtime API: ${term}`);
  }
}

const alias = "qa:nexus-sprint-s4-farmer-agriculture-intelligence-runtime-absence-regression-guard";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint S4 QA.");

console.log("[nexus-sprint-s4-farmer-agriculture-intelligence-runtime-absence-regression-guard-qa] passed");
