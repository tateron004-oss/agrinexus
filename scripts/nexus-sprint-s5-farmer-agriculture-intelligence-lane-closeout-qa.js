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

function assertRuntimeExcludes(source, terms, label) {
  for (const term of terms) {
    assert(!source.includes(term), `${label} must not runtime-load or activate Sprint S artifact: ${term}`);
  }
}

const docName = "NEXUS_SPRINT_S5_FARMER_AGRICULTURE_INTELLIGENCE_LANE_CLOSEOUT.md";
const qaName = "nexus-sprint-s5-farmer-agriculture-intelligence-lane-closeout-qa.js";

assert(exists("docs", docName), "Sprint S5 closeout doc must exist.");
assert(exists("scripts", qaName), "Sprint S5 QA script must exist.");

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
  "Sprint S5",
  "397ba6b42c31e0d25ff3af4600b4137596cca46e",
  "documentation and deterministic QA only",
  "Sprint S Completion Summary",
  "What Is Active Now",
  "What Remains Inert",
  "No-Authority And No-Execution Guarantees",
  "Blocked Runtime Categories",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "Rollback Strategy",
  "Sprint T1 - Healthcare Access Intelligence Runtime Activation Readiness Gate"
], "S5 closeout doc");

assertIncludes(doc, [
  "Farmer Agriculture Intelligence runtime activation readiness gate",
  "Farmer Agriculture Intelligence feature flag contract",
  "Farmer Agriculture Intelligence flag contract harness",
  "Farmer Agriculture Intelligence runtime absence regression guard",
  "Farmer Agriculture Intelligence lane closeout"
], "S5 sprint summary");

assertIncludes(doc, [
  "Farmer Agriculture Intelligence readiness is not runtime activation",
  "Farmer Agriculture Intelligence visibility readiness is not agronomy authority",
  "agriculture metadata is not source authority, factual authority, regulatory authority, extension provider authorization, marketplace approval, payment authorization, field-visit location consent, crop insurance filing approval, or execution approval",
  "generated agriculture text cannot authorize, stage, dispatch, or execute an action by itself",
  "enabled: false",
  "visibleUiAllowed: false",
  "agricultureReviewAllowed: false",
  "sourceBackedGuidancePreviewAllowed: false",
  "farmerSummaryPreviewAllowed: false",
  "extensionEscalationPreviewAllowed: false",
  "agricultureRuntimeAllowed: false",
  "liveAgricultureAdvisorAllowed: false",
  "sourceRetrievalRuntimeAllowed: false",
  "unsourcedAgricultureAdviceAllowed: false",
  "chemicalApplicationInstructionAllowed: false",
  "diagnosisClaimAllowed: false",
  "marketplaceTransactionAllowed: false",
  "paymentExecutionAllowed: false",
  "providerOrExtensionContactAllowed: false",
  "weatherOrPestLiveClaimAllowed: false",
  "locationSharingAllowed: false",
  "cropInsuranceFilingAllowed: false",
  "policyBypassAllowed: false",
  "confirmationBypassAllowed: false",
  "permissionBypassAllowed: false",
  "firstTurnExecutionAllowed: false",
  "laterTurnExecutionAllowed: false",
  "standardUserAgricultureBrainMutationAllowed: false",
  "backendWriteAllowed: false",
  "storageWriteAllowed: false",
  "networkAllowed: false",
  "auditWriteAllowed: false",
  "executionAuthority: false",
  "noExecution: true",
  "unsafe authority attempts normalize back to no-execution values",
  "no action has been taken"
], "S5 no-authority and no-execution language");

assertIncludes(doc, [
  "active Farmer Agriculture Intelligence runtime",
  "live agriculture advisor",
  "agriculture intelligence runtime UI",
  "farmer review buttons",
  "source-backed guidance runtime retrieval",
  "farmer summary preview UI from Sprint S artifacts",
  "extension escalation preview UI from Sprint S artifacts",
  "unsourced agronomy claims",
  "chemical application instruction claims",
  "diagnosis claims",
  "unsupported live weather or pest claims",
  "provider or extension contact claims",
  "marketplace transaction claims",
  "payment completion claims",
  "crop insurance filing claims",
  "location sharing claims",
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
  "payment execution",
  "marketplace transactions",
  "location sharing",
  "camera or microphone activation",
  "health, medical, pharmacy, prescription, or FHIR execution",
  "appointment scheduling",
  "transportation dispatch",
  "emergency dispatch",
  "external navigation",
  "real pending action creation",
  "execution authority"
], "S5 blocked runtime categories");

const requiredDocs = [
  "NEXUS_SPRINT_S1_FARMER_AGRICULTURE_INTELLIGENCE_RUNTIME_ACTIVATION_READINESS_GATE.md",
  "NEXUS_SPRINT_S2_FARMER_AGRICULTURE_INTELLIGENCE_FEATURE_FLAG_CONTRACT.md",
  "NEXUS_SPRINT_S3_FARMER_AGRICULTURE_INTELLIGENCE_FLAG_CONTRACT_HARNESS.md",
  "NEXUS_SPRINT_S4_FARMER_AGRICULTURE_INTELLIGENCE_RUNTIME_ABSENCE_REGRESSION_GUARD.md",
  "NEXUS_FARMER_AGRICULTURE_INTELLIGENCE_READINESS_CONTRACT_PHASE_71.md",
  "NEXUS_HEALTHCARE_ACCESS_INTELLIGENCE_READINESS_CONTRACT_PHASE_72.md"
];

for (const requiredDoc of requiredDocs) {
  assert(exists("docs", requiredDoc), `Sprint S5 requires prior or next-lane doc: ${requiredDoc}`);
}

const requiredScripts = [
  "nexus-sprint-s1-farmer-agriculture-intelligence-runtime-activation-readiness-gate-qa.js",
  "nexus-sprint-s2-farmer-agriculture-intelligence-feature-flag-contract-qa.js",
  "nexus-sprint-s3-farmer-agriculture-intelligence-flag-contract-harness-qa.js",
  "nexus-sprint-s4-farmer-agriculture-intelligence-runtime-absence-regression-guard-qa.js"
];

for (const requiredScript of requiredScripts) {
  assert(exists("scripts", requiredScript), `Sprint S5 requires prior Sprint S QA: ${requiredScript}`);
  assert(qaSuite.includes(`scripts/${requiredScript}`), `qa-suite must include prior Sprint S QA: ${requiredScript}`);
}

assert(exists("public", "nexus-farmer-agriculture-intelligence-readiness-contract.js"), "Sprint S5 requires Phase 71 Farmer Agriculture Intelligence readiness contract.");
assert(exists("public", "nexus-farmer-agriculture-intelligence-feature-flag.js"), "Sprint S5 requires S2 feature flag contract.");
assert(exists("fixtures", "nexus", "farmer-agriculture-intelligence-feature-flags.json"), "Sprint S5 requires S3 feature flag fixture.");
assert(exists("public", "nexus-healthcare-access-intelligence-readiness-contract.js"), "Sprint S5 requires Phase 72 Healthcare Access Intelligence readiness contract for the next safe lane.");

assertIncludes(readinessContract, [
  "FARMER_AGRICULTURE_INTELLIGENCE_READINESS_CONTRACT",
  "farmer-agriculture-intelligence.readiness.phase_71",
  "FARMER_AGRICULTURE_INTELLIGENCE_NO_EXECUTION_DEFAULTS",
  "createFarmerAgricultureIntelligenceReadinessContract",
  "executionAllowed: false",
  "liveAgricultureAdvisorEnabled: false",
  "unsourcedAgricultureAdviceAllowed: false",
  "chemicalApplicationInstructionAllowed: false",
  "providerOrExtensionContactAllowed: false",
  "marketplaceTransactionAllowed: false"
], "Phase 71 Farmer Agriculture Intelligence readiness contract");

assertIncludes(featureFlagModule, [
  "DEFAULT_FARMER_AGRICULTURE_INTELLIGENCE_FEATURE_FLAG_STATE",
  "NEXUS_FARMER_AGRICULTURE_INTELLIGENCE_VISIBLE_ENABLED",
  "normalizeFarmerAgricultureIntelligenceFeatureFlagState",
  "isFarmerAgricultureIntelligenceVisibleFeatureEnabled",
  "executionAuthority",
  "noExecution"
], "S2 Farmer Agriculture Intelligence feature flag module");

assertIncludes(s3Harness, [
  "loadFarmerAgricultureIntelligenceFlagFixtures",
  "validateFarmerAgricultureIntelligenceFlagFixtures"
], "S3 Farmer Agriculture Intelligence harness");

assert.equal(DEFAULT_FARMER_AGRICULTURE_INTELLIGENCE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_FARMER_AGRICULTURE_INTELLIGENCE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
for (const field of protectedFields) {
  assert.equal(DEFAULT_FARMER_AGRICULTURE_INTELLIGENCE_FEATURE_FLAG_STATE[field], false, `S5 default ${field} must remain false.`);
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

assert.equal(normalizedUnsafeAttempt.enabled, true);
assert.equal(normalizedUnsafeAttempt.visibleUiAllowed, true);
for (const field of protectedFields) {
  assert.equal(normalizedUnsafeAttempt[field], false, `S5 unsafe attempt for ${field} must normalize to false.`);
}
assert.equal(normalizedUnsafeAttempt.noExecution, true);

validateFarmerAgricultureIntelligenceFlagFixtures(fixtures);
assert.equal(fixtures.length, 4, "S5 expects four S3 farmer agriculture feature flag fixtures.");

const runtimeForbiddenTerms = [
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
  "fileCropInsuranceClaim("
];

assertRuntimeExcludes(index, runtimeForbiddenTerms, "public/index.html");
assertRuntimeExcludes(app, runtimeForbiddenTerms, "public/app.js");
assertRuntimeExcludes(server, runtimeForbiddenTerms, "server.js");

const alias = "qa:nexus-sprint-s5-farmer-agriculture-intelligence-lane-closeout";
assert.equal(
  pkg.scripts[alias],
  "node scripts/nexus-sprint-s5-farmer-agriculture-intelligence-lane-closeout-qa.js",
  "package.json must expose Sprint S5 QA alias."
);
assert(qaSuite.includes("scripts/nexus-sprint-s5-farmer-agriculture-intelligence-lane-closeout-qa.js"), "qa-suite must include Sprint S5 QA.");

console.log("[nexus-sprint-s5-farmer-agriculture-intelligence-lane-closeout-qa] passed");
