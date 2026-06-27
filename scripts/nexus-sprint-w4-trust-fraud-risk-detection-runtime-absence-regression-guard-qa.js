const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  DEFAULT_TRUST_FRAUD_RISK_DETECTION_FEATURE_FLAG_STATE,
  normalizeTrustFraudRiskDetectionFeatureFlagState
} = require("../public/nexus-trust-fraud-risk-detection-feature-flag.js");
const {
  protectedFields,
  loadTrustFraudRiskDetectionFlagFixtures,
  validateTrustFraudRiskDetectionFlagFixtures
} = require("./nexus-sprint-w3-trust-fraud-risk-detection-flag-contract-harness.js");

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

const docName = "NEXUS_SPRINT_W4_TRUST_FRAUD_RISK_DETECTION_RUNTIME_ABSENCE_REGRESSION_GUARD.md";
const qaName = "nexus-sprint-w4-trust-fraud-risk-detection-runtime-absence-regression-guard-qa.js";

assert(exists("docs", docName), "Sprint W4 absence guard doc must exist.");
assert(exists("scripts", qaName), "Sprint W4 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const readinessContract = read("public", "nexus-trust-fraud-risk-detection-readiness-contract.js");
const featureFlagModule = read("public", "nexus-trust-fraud-risk-detection-feature-flag.js");
const w3Harness = read("scripts", "nexus-sprint-w3-trust-fraud-risk-detection-flag-contract-harness.js");
const fixtures = loadTrustFraudRiskDetectionFlagFixtures();

assertIncludes(doc, [
  "Sprint W4",
  "3dbbf989777d041460b8a951768ea9c67e59c516",
  "documentation and QA only",
  "Purpose",
  "Runtime Absence Requirements",
  "Blocked Runtime Behavior",
  "Required Contract Invariants",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "QA Expectations",
  "Sprint W5 - Trust/Fraud/Risk Detection Lane Closeout"
], "W4 absence guard doc");

assertIncludes(doc, [
  "W1 Trust/Fraud/Risk Detection runtime activation readiness gate",
  "W2 Trust/Fraud/Risk Detection feature flag contract",
  "W3 Trust/Fraud/Risk Detection flag contract harness",
  "Phase 75 Trust/Fraud/Risk Detection readiness contract"
], "W4 protected artifacts");

assertIncludes(doc, [
  "public/nexus-trust-fraud-risk-detection-readiness-contract.js",
  "public/nexus-trust-fraud-risk-detection-feature-flag.js",
  "scripts/nexus-sprint-w3-trust-fraud-risk-detection-flag-contract-harness.js",
  "fixtures/nexus/trust-fraud-risk-detection-feature-flags.json",
  "Sprint W QA scripts"
], "W4 runtime absence artifact list");

assertIncludes(doc, [
  "It intentionally does not ban generic safety, trust, fraud, risk",
  "marketplace",
  "payment",
  "account",
  "identity",
  "role",
  "review",
  "blocked",
  "support",
  "warning"
], "W4 generic wording exception");

assertIncludes(doc, [
  "active trust/fraud/risk detection runtime",
  "live risk engine",
  "fraud scoring runtime",
  "risk signal retrieval runtime",
  "automated scoring",
  "hidden scoring",
  "final fraud determination",
  "account restriction",
  "marketplace restriction",
  "payment hold",
  "transaction block",
  "identity decision",
  "role authorization decision",
  "enforcement action",
  "user accusation",
  "trust review mutation",
  "human review queue mutation",
  "source-backed risk claims without sources",
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
  "shipping or transportation dispatch",
  "emergency dispatch",
  "location sharing",
  "payment execution",
  "marketplace transaction execution",
  "account or profile mutation",
  "external navigation",
  "real pending action creation",
  "execution authority"
], "W4 blocked runtime behavior");

for (const requiredPath of [
  ["docs", "NEXUS_SPRINT_W1_TRUST_FRAUD_RISK_DETECTION_RUNTIME_ACTIVATION_READINESS_GATE.md"],
  ["docs", "NEXUS_SPRINT_W2_TRUST_FRAUD_RISK_DETECTION_FEATURE_FLAG_CONTRACT.md"],
  ["docs", "NEXUS_SPRINT_W3_TRUST_FRAUD_RISK_DETECTION_FLAG_CONTRACT_HARNESS.md"],
  ["docs", "NEXUS_TRUST_FRAUD_RISK_DETECTION_READINESS_CONTRACT_PHASE_75.md"],
  ["public", "nexus-trust-fraud-risk-detection-readiness-contract.js"],
  ["public", "nexus-trust-fraud-risk-detection-feature-flag.js"],
  ["fixtures", "nexus", "trust-fraud-risk-detection-feature-flags.json"],
  ["scripts", "nexus-sprint-w3-trust-fraud-risk-detection-flag-contract-harness.js"]
]) {
  assert(exists(...requiredPath), `W4 requires artifact: ${requiredPath.join("/")}`);
}

const runtime = [index, app, server].join("\n");
for (const term of [
  "nexus-trust-fraud-risk-detection-readiness-contract.js",
  "nexus-trust-fraud-risk-detection-feature-flag.js",
  "nexus-sprint-w3-trust-fraud-risk-detection-flag-contract-harness",
  "trust-fraud-risk-detection-feature-flags.json",
  "NEXUS_TRUST_FRAUD_RISK_DETECTION_VISIBLE_ENABLED",
  "NexusTrustFraudRiskDetectionFeatureFlagContract",
  "normalizeTrustFraudRiskDetectionFeatureFlagState",
  "isTrustFraudRiskDetectionVisibleFeatureEnabled",
  "trustFraudRiskDetectionRuntime",
  "liveRiskEngine",
  "fraudScoringRuntime",
  "riskSignalRetrievalRuntime",
  "automatedScoringRuntime",
  "hiddenScoringRuntime",
  "finalFraudDetermination",
  "restrictAccount(",
  "blockMarketplaceTransaction(",
  "holdPayment(",
  "approveIdentity(",
  "authorizeRole(",
  "enforceRiskAction(",
  "accuseUserOfFraud(",
  "nexus-sprint-w4-trust-fraud-risk-detection-runtime-absence-regression-guard"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Trust/Fraud/Risk Detection lane artifact: ${term}`);
}

assertIncludes(readinessContract, [
  "TRUST_FRAUD_RISK_DETECTION_READINESS_CONTRACT",
  "trust-fraud-risk-detection.readiness.phase_75",
  "TRUST_FRAUD_RISK_DETECTION_NO_EXECUTION_DEFAULTS",
  "createTrustFraudRiskDetectionReadinessContract",
  "executionAllowed: false",
  "liveConnectorEnabled: false",
  "providerExecutionEnabled: false",
  "regulatedActionEnabled: false",
  "provider_contact",
  "marketplace_transactions",
  "identity",
  "regulated_execution"
], "Phase 75 Trust/Fraud/Risk Detection readiness contract");

assert.equal(DEFAULT_TRUST_FRAUD_RISK_DETECTION_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_TRUST_FRAUD_RISK_DETECTION_FEATURE_FLAG_STATE.visibleUiAllowed, false);
for (const field of protectedFields) {
  assert.equal(DEFAULT_TRUST_FRAUD_RISK_DETECTION_FEATURE_FLAG_STATE[field], false, `W4 default ${field} must remain false.`);
}
assert.equal(DEFAULT_TRUST_FRAUD_RISK_DETECTION_FEATURE_FLAG_STATE.noExecution, true);

const normalizedUnsafeAttempt = normalizeTrustFraudRiskDetectionFeatureFlagState({
  enabled: true,
  visibleUiAllowed: true,
  riskReviewAllowed: true,
  riskSignalPreviewAllowed: true,
  fraudSignalPreviewAllowed: true,
  trustReviewSummaryAllowed: true,
  humanReviewQueuePreviewAllowed: true,
  trustFraudRiskRuntimeAllowed: true,
  liveRiskEngineAllowed: true,
  fraudScoringRuntimeAllowed: true,
  riskSignalRetrievalRuntimeAllowed: true,
  automatedScoringAllowed: true,
  hiddenScoringAllowed: true,
  finalFraudDeterminationAllowed: true,
  accountRestrictionAllowed: true,
  marketplaceRestrictionAllowed: true,
  paymentHoldAllowed: true,
  transactionBlockAllowed: true,
  identityDecisionAllowed: true,
  roleAuthorizationDecisionAllowed: true,
  enforcementActionAllowed: true,
  userAccusationAllowed: true,
  providerConnectionClaimAllowed: true,
  completedActionClaimAllowed: true,
  providerContactAllowed: true,
  communicationExecutionAllowed: true,
  locationSharingAllowed: true,
  paymentExecutionAllowed: true,
  marketplaceTransactionAllowed: true,
  identityAccountProfileActionAllowed: true,
  policyBypassAllowed: true,
  confirmationBypassAllowed: true,
  permissionBypassAllowed: true,
  firstTurnExecutionAllowed: true,
  laterTurnExecutionAllowed: true,
  standardUserRiskEngineMutationAllowed: true,
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

const fixtureResult = validateTrustFraudRiskDetectionFlagFixtures(fixtures);
assert.equal(fixtureResult.ok, true, "W3 fixtures must remain valid.");
assert.equal(fixtureResult.count, 4, "W3 fixtures must remain complete.");

for (const source of [featureFlagModule, w3Harness]) {
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
    "restrictAccount(",
    "blockMarketplaceTransaction(",
    "holdPayment(",
    "approveIdentity(",
    "authorizeRole(",
    "enforceRiskAction(",
    "accuseUserOfFraud("
  ]) {
    assert(!source.includes(term), `Sprint W contract/harness must not include runtime API: ${term}`);
  }
}

const alias = "qa:nexus-sprint-w4-trust-fraud-risk-detection-runtime-absence-regression-guard";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint W4 QA.");

console.log("[nexus-sprint-w4-trust-fraud-risk-detection-runtime-absence-regression-guard-qa] passed");
