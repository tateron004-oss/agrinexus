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

function assertRuntimeExcludes(source, terms, label) {
  for (const term of terms) {
    assert(!source.includes(term), `${label} must not runtime-load or activate Sprint W artifact: ${term}`);
  }
}

const docName = "NEXUS_SPRINT_W5_TRUST_FRAUD_RISK_DETECTION_LANE_CLOSEOUT.md";
const qaName = "nexus-sprint-w5-trust-fraud-risk-detection-lane-closeout-qa.js";

assert(exists("docs", docName), "Sprint W5 closeout doc must exist.");
assert(exists("scripts", qaName), "Sprint W5 QA script must exist.");

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
  "Sprint W5",
  "25319be76bf2f5c30df19bf9f424f003e037d363",
  "documentation and deterministic QA only",
  "Sprint W Completion Summary",
  "What Is Active Now",
  "What Remains Inert",
  "No-Authority And No-Execution Guarantees",
  "Blocked Runtime Categories",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "Rollback Strategy",
  "Sprint X1 - Farmer Mode Runtime Activation Readiness Gate"
], "W5 closeout doc");

assertIncludes(doc, [
  "Trust/Fraud/Risk Detection runtime activation readiness gate",
  "Trust/Fraud/Risk Detection feature flag contract",
  "Trust/Fraud/Risk Detection flag contract harness",
  "Trust/Fraud/Risk Detection runtime absence regression guard",
  "Trust/Fraud/Risk Detection lane closeout"
], "W5 sprint summary");

assertIncludes(doc, [
  "Trust/Fraud/Risk Detection readiness is not runtime activation",
  "Trust/Fraud/Risk Detection visibility readiness is not scoring, fraud determination, enforcement, account, marketplace, payment, identity, provider, communications, or execution authority",
  "risk metadata is not source authority, factual authority, fraud authority, enforcement authority, account authority, marketplace restriction authority, payment hold authority, transaction blocking authority, identity authority, role authorization, user consent, provider approval, human review approval, audit approval, or execution approval",
  "generated risk text cannot authorize, stage, accuse, restrict, block, hold, enforce, contact, pay, dispatch, or execute an action by itself",
  "enabled: false",
  "visibleUiAllowed: false",
  "riskReviewAllowed: false",
  "riskSignalPreviewAllowed: false",
  "fraudSignalPreviewAllowed: false",
  "trustReviewSummaryAllowed: false",
  "humanReviewQueuePreviewAllowed: false",
  "trustFraudRiskRuntimeAllowed: false",
  "liveRiskEngineAllowed: false",
  "fraudScoringRuntimeAllowed: false",
  "riskSignalRetrievalRuntimeAllowed: false",
  "automatedScoringAllowed: false",
  "hiddenScoringAllowed: false",
  "finalFraudDeterminationAllowed: false",
  "accountRestrictionAllowed: false",
  "marketplaceRestrictionAllowed: false",
  "paymentHoldAllowed: false",
  "transactionBlockAllowed: false",
  "identityDecisionAllowed: false",
  "roleAuthorizationDecisionAllowed: false",
  "enforcementActionAllowed: false",
  "userAccusationAllowed: false",
  "providerConnectionClaimAllowed: false",
  "completedActionClaimAllowed: false",
  "providerContactAllowed: false",
  "communicationExecutionAllowed: false",
  "locationSharingAllowed: false",
  "paymentExecutionAllowed: false",
  "marketplaceTransactionAllowed: false",
  "identityAccountProfileActionAllowed: false",
  "policyBypassAllowed: false",
  "confirmationBypassAllowed: false",
  "permissionBypassAllowed: false",
  "firstTurnExecutionAllowed: false",
  "laterTurnExecutionAllowed: false",
  "standardUserRiskEngineMutationAllowed: false",
  "backendWriteAllowed: false",
  "storageWriteAllowed: false",
  "networkAllowed: false",
  "auditWriteAllowed: false",
  "executionAuthority: false",
  "noExecution: true",
  "unsafe authority attempts normalize back to no-execution values",
  "no action has been taken"
], "W5 no-authority and no-execution language");

assertIncludes(doc, [
  "active Trust/Fraud/Risk Detection runtime",
  "live risk engine",
  "fraud scoring runtime",
  "risk signal retrieval runtime",
  "automated scoring",
  "hidden scoring",
  "final fraud determination",
  "fraud accusation claims",
  "automated adverse decisions",
  "automated account restrictions",
  "automated marketplace restrictions",
  "automated payment holds",
  "automated transaction blocks",
  "automated identity decisions",
  "automated role authorization decisions",
  "enforcement action claims",
  "user accusation claims",
  "source-backed risk claims without sources",
  "stale data claims without freshness labels",
  "confidence-free risk claims",
  "unsupported live data claims",
  "provider connection claims",
  "completed action claims",
  "provider contact claims",
  "location sharing claims",
  "communication execution claims",
  "payment execution claims",
  "marketplace transaction claims",
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
  "execution authority"
], "W5 blocked runtime categories");

const requiredDocs = [
  "NEXUS_SPRINT_W1_TRUST_FRAUD_RISK_DETECTION_RUNTIME_ACTIVATION_READINESS_GATE.md",
  "NEXUS_SPRINT_W2_TRUST_FRAUD_RISK_DETECTION_FEATURE_FLAG_CONTRACT.md",
  "NEXUS_SPRINT_W3_TRUST_FRAUD_RISK_DETECTION_FLAG_CONTRACT_HARNESS.md",
  "NEXUS_SPRINT_W4_TRUST_FRAUD_RISK_DETECTION_RUNTIME_ABSENCE_REGRESSION_GUARD.md",
  "NEXUS_TRUST_FRAUD_RISK_DETECTION_READINESS_CONTRACT_PHASE_75.md",
  "NEXUS_FARMER_MODE_READINESS_CONTRACT_PHASE_76.md"
];

for (const requiredDoc of requiredDocs) {
  assert(exists("docs", requiredDoc), `Sprint W5 requires prior or next-lane doc: ${requiredDoc}`);
}

const requiredScripts = [
  "nexus-sprint-w1-trust-fraud-risk-detection-runtime-activation-readiness-gate-qa.js",
  "nexus-sprint-w2-trust-fraud-risk-detection-feature-flag-contract-qa.js",
  "nexus-sprint-w3-trust-fraud-risk-detection-flag-contract-harness-qa.js",
  "nexus-sprint-w4-trust-fraud-risk-detection-runtime-absence-regression-guard-qa.js"
];

for (const requiredScript of requiredScripts) {
  assert(exists("scripts", requiredScript), `Sprint W5 requires prior Sprint W QA: ${requiredScript}`);
  assert(qaSuite.includes(`scripts/${requiredScript}`), `qa-suite must include prior Sprint W QA: ${requiredScript}`);
}

assert(exists("public", "nexus-trust-fraud-risk-detection-readiness-contract.js"), "Sprint W5 requires Phase 75 Trust/Fraud/Risk Detection readiness contract.");
assert(exists("public", "nexus-trust-fraud-risk-detection-feature-flag.js"), "Sprint W5 requires W2 feature flag contract.");
assert(exists("fixtures", "nexus", "trust-fraud-risk-detection-feature-flags.json"), "Sprint W5 requires W3 feature flag fixture.");
assert(exists("public", "nexus-farmer-mode-readiness-contract.js"), "Sprint W5 requires Phase 76 Farmer Mode readiness contract for the next safe lane.");

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

assertIncludes(featureFlagModule, [
  "DEFAULT_TRUST_FRAUD_RISK_DETECTION_FEATURE_FLAG_STATE",
  "NEXUS_TRUST_FRAUD_RISK_DETECTION_VISIBLE_ENABLED",
  "normalizeTrustFraudRiskDetectionFeatureFlagState",
  "isTrustFraudRiskDetectionVisibleFeatureEnabled",
  "executionAuthority",
  "noExecution"
], "W2 Trust/Fraud/Risk Detection feature flag module");

assertIncludes(w3Harness, [
  "loadTrustFraudRiskDetectionFlagFixtures",
  "validateTrustFraudRiskDetectionFlagFixtures"
], "W3 Trust/Fraud/Risk Detection harness");

assert.equal(DEFAULT_TRUST_FRAUD_RISK_DETECTION_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_TRUST_FRAUD_RISK_DETECTION_FEATURE_FLAG_STATE.visibleUiAllowed, false);
for (const field of protectedFields) {
  assert.equal(DEFAULT_TRUST_FRAUD_RISK_DETECTION_FEATURE_FLAG_STATE[field], false, `W5 default ${field} must remain false.`);
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

assert.equal(normalizedUnsafeAttempt.enabled, true);
assert.equal(normalizedUnsafeAttempt.visibleUiAllowed, true);
for (const field of protectedFields) {
  assert.equal(normalizedUnsafeAttempt[field], false, `W5 unsafe attempt for ${field} must normalize to false.`);
}
assert.equal(normalizedUnsafeAttempt.noExecution, true);

const fixtureResult = validateTrustFraudRiskDetectionFlagFixtures(fixtures);
assert.equal(fixtureResult.ok, true, "W3 fixtures must remain valid.");
assert.equal(fixtureResult.count, 4, "W5 expects four W3 trust/fraud/risk feature flag fixtures.");

const runtimeForbiddenTerms = [
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
  "accuseUserOfFraud("
];

assertRuntimeExcludes(index, runtimeForbiddenTerms, "public/index.html");
assertRuntimeExcludes(app, runtimeForbiddenTerms, "public/app.js");
assertRuntimeExcludes(server, runtimeForbiddenTerms, "server.js");

const alias = "qa:nexus-sprint-w5-trust-fraud-risk-detection-lane-closeout";
assert.equal(
  pkg.scripts[alias],
  "node scripts/nexus-sprint-w5-trust-fraud-risk-detection-lane-closeout-qa.js",
  "package.json must expose Sprint W5 QA alias."
);
assert(qaSuite.includes("scripts/nexus-sprint-w5-trust-fraud-risk-detection-lane-closeout-qa.js"), "qa-suite must include Sprint W5 QA.");

console.log("[nexus-sprint-w5-trust-fraud-risk-detection-lane-closeout-qa] passed");
