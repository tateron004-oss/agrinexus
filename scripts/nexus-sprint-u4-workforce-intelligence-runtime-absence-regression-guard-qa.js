const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  DEFAULT_WORKFORCE_INTELLIGENCE_FEATURE_FLAG_STATE,
  normalizeWorkforceIntelligenceFeatureFlagState
} = require("../public/nexus-workforce-intelligence-feature-flag.js");
const {
  protectedFields,
  loadWorkforceIntelligenceFlagFixtures,
  validateWorkforceIntelligenceFlagFixtures
} = require("./nexus-sprint-u3-workforce-intelligence-flag-contract-harness.js");

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

const docName = "NEXUS_SPRINT_U4_WORKFORCE_INTELLIGENCE_RUNTIME_ABSENCE_REGRESSION_GUARD.md";
const qaName = "nexus-sprint-u4-workforce-intelligence-runtime-absence-regression-guard-qa.js";

assert(exists("docs", docName), "Sprint U4 absence guard doc must exist.");
assert(exists("scripts", qaName), "Sprint U4 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const readinessContract = read("public", "nexus-workforce-intelligence-readiness-contract.js");
const featureFlagModule = read("public", "nexus-workforce-intelligence-feature-flag.js");
const u3Harness = read("scripts", "nexus-sprint-u3-workforce-intelligence-flag-contract-harness.js");
const fixtures = loadWorkforceIntelligenceFlagFixtures();

assertIncludes(doc, [
  "Sprint U4",
  "073e032c10409527ae3ca86f6b9e2d6f4b99fa85",
  "documentation and QA only",
  "Purpose",
  "Runtime Absence Requirements",
  "Blocked Runtime Behavior",
  "Required Contract Invariants",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "QA Expectations",
  "Sprint U5 - Workforce Intelligence Lane Closeout"
], "U4 absence guard doc");

assertIncludes(doc, [
  "U1 Workforce Intelligence runtime activation readiness gate",
  "U2 Workforce Intelligence feature flag contract",
  "U3 Workforce Intelligence flag contract harness",
  "Phase 73 Workforce Intelligence readiness contract"
], "U4 protected artifacts");

assertIncludes(doc, [
  "public/nexus-workforce-intelligence-readiness-contract.js",
  "public/nexus-workforce-intelligence-feature-flag.js",
  "scripts/nexus-sprint-u3-workforce-intelligence-flag-contract-harness.js",
  "fixtures/nexus/workforce-intelligence-feature-flags.json",
  "Sprint U QA scripts"
], "U4 runtime absence artifact list");

assertIncludes(doc, [
  "It intentionally does not ban generic workforce words such as",
  "workforce",
  "training",
  "job",
  "career",
  "learning",
  "skills",
  "pathway",
  "provider",
  "program",
  "support"
], "U4 generic wording exception");

assertIncludes(doc, [
  "active workforce intelligence runtime",
  "live workforce advisor",
  "source retrieval runtime",
  "job application submission",
  "referral submission",
  "training enrollment execution",
  "credential issuance",
  "certificate issuance",
  "eligibility claims",
  "employer, provider, or workforce program contact",
  "provider connection claims",
  "completed action claims",
  "standard user workforce brain mutation",
  "source-backed workforce claims without sources",
  "stale data claims without freshness labels",
  "confidence-free source-backed claims",
  "unsupported live data claims",
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
  "transportation dispatch",
  "emergency dispatch",
  "location sharing",
  "account or profile mutation",
  "external navigation",
  "real pending action creation",
  "execution authority"
], "U4 blocked runtime behavior");

for (const requiredPath of [
  ["docs", "NEXUS_SPRINT_U1_WORKFORCE_INTELLIGENCE_RUNTIME_ACTIVATION_READINESS_GATE.md"],
  ["docs", "NEXUS_SPRINT_U2_WORKFORCE_INTELLIGENCE_FEATURE_FLAG_CONTRACT.md"],
  ["docs", "NEXUS_SPRINT_U3_WORKFORCE_INTELLIGENCE_FLAG_CONTRACT_HARNESS.md"],
  ["docs", "NEXUS_WORKFORCE_INTELLIGENCE_READINESS_CONTRACT_PHASE_73.md"],
  ["public", "nexus-workforce-intelligence-readiness-contract.js"],
  ["public", "nexus-workforce-intelligence-feature-flag.js"],
  ["fixtures", "nexus", "workforce-intelligence-feature-flags.json"],
  ["scripts", "nexus-sprint-u3-workforce-intelligence-flag-contract-harness.js"]
]) {
  assert(exists(...requiredPath), `U4 requires artifact: ${requiredPath.join("/")}`);
}

const runtime = [index, app, server].join("\n");
for (const term of [
  "nexus-workforce-intelligence-readiness-contract.js",
  "nexus-workforce-intelligence-feature-flag.js",
  "nexus-sprint-u3-workforce-intelligence-flag-contract-harness",
  "workforce-intelligence-feature-flags.json",
  "NEXUS_WORKFORCE_INTELLIGENCE_VISIBLE_ENABLED",
  "NexusWorkforceIntelligenceFeatureFlagContract",
  "normalizeWorkforceIntelligenceFeatureFlagState",
  "isWorkforceIntelligenceVisibleFeatureEnabled",
  "workforceIntelligenceRuntime",
  "liveWorkforceAdvisor",
  "sourceRetrievalRuntime",
  "submitJobApplication(",
  "submitWorkforceReferral(",
  "enrollInTraining(",
  "issueCredential(",
  "contactWorkforceProvider(",
  "nexus-sprint-u4-workforce-intelligence-runtime-absence-regression-guard"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Workforce Intelligence lane artifact: ${term}`);
}

assertIncludes(readinessContract, [
  "WORKFORCE_INTELLIGENCE_READINESS_CONTRACT",
  "workforce-intelligence.readiness.phase_73",
  "WORKFORCE_INTELLIGENCE_NO_EXECUTION_DEFAULTS",
  "createWorkforceIntelligenceReadinessContract",
  "executionAllowed: false",
  "liveConnectorEnabled: false",
  "providerExecutionEnabled: false",
  "regulatedActionEnabled: false",
  "provider_contact",
  "marketplace_transactions",
  "identity",
  "regulated_execution"
], "Phase 73 Workforce Intelligence readiness contract");

assert.equal(DEFAULT_WORKFORCE_INTELLIGENCE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_WORKFORCE_INTELLIGENCE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
for (const field of protectedFields) {
  assert.equal(DEFAULT_WORKFORCE_INTELLIGENCE_FEATURE_FLAG_STATE[field], false, `U4 default ${field} must remain false.`);
}
assert.equal(DEFAULT_WORKFORCE_INTELLIGENCE_FEATURE_FLAG_STATE.noExecution, true);

const normalizedUnsafeAttempt = normalizeWorkforceIntelligenceFeatureFlagState({
  enabled: true,
  visibleUiAllowed: true,
  workforcePathwayReviewAllowed: true,
  sourceBackedWorkforceGuidancePreviewAllowed: true,
  trainingPathwaySummaryPreviewAllowed: true,
  jobPathwaySummaryPreviewAllowed: true,
  providerEscalationPreviewAllowed: true,
  workforceRuntimeAllowed: true,
  liveWorkforceAdvisorAllowed: true,
  sourceRetrievalRuntimeAllowed: true,
  jobApplicationSubmissionAllowed: true,
  referralSubmissionAllowed: true,
  trainingEnrollmentExecutionAllowed: true,
  credentialIssuanceAllowed: true,
  certificateIssuanceAllowed: true,
  eligibilityClaimAllowed: true,
  employerProviderProgramContactAllowed: true,
  providerConnectionClaimAllowed: true,
  completedActionClaimAllowed: true,
  paymentExecutionAllowed: true,
  marketplaceTransactionAllowed: true,
  identityAccountProfileActionAllowed: true,
  locationSharingAllowed: true,
  transportationDispatchAllowed: true,
  emergencyDispatchAllowed: true,
  communicationExecutionAllowed: true,
  policyBypassAllowed: true,
  confirmationBypassAllowed: true,
  permissionBypassAllowed: true,
  firstTurnExecutionAllowed: true,
  laterTurnExecutionAllowed: true,
  standardUserWorkforceBrainMutationAllowed: true,
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

const fixtureResult = validateWorkforceIntelligenceFlagFixtures(fixtures);
assert.equal(fixtureResult.ok, true, "U3 fixtures must remain valid.");
assert.equal(fixtureResult.count, 4, "U3 fixtures must remain complete.");

for (const source of [featureFlagModule, u3Harness]) {
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
    "submitJobApplication(",
    "submitWorkforceReferral(",
    "enrollInTraining(",
    "issueCredential(",
    "contactWorkforceProvider("
  ]) {
    assert(!source.includes(term), `Sprint U contract/harness must not include runtime API: ${term}`);
  }
}

const alias = "qa:nexus-sprint-u4-workforce-intelligence-runtime-absence-regression-guard";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint U4 QA.");

console.log("[nexus-sprint-u4-workforce-intelligence-runtime-absence-regression-guard-qa] passed");
