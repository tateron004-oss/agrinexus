const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  TRUST_FRAUD_RISK_DETECTION_FEATURE_FLAG_NAME,
  DEFAULT_TRUST_FRAUD_RISK_DETECTION_FEATURE_FLAG_STATE,
  PROTECTED_TRUST_FRAUD_RISK_DETECTION_FLAG_FIELDS,
  normalizeTrustFraudRiskDetectionFeatureFlagState,
  isTrustFraudRiskDetectionVisibleFeatureEnabled
} = require("../public/nexus-trust-fraud-risk-detection-feature-flag.js");

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

const docName = "NEXUS_SPRINT_W2_TRUST_FRAUD_RISK_DETECTION_FEATURE_FLAG_CONTRACT.md";
const moduleName = "nexus-trust-fraud-risk-detection-feature-flag.js";
const qaName = "nexus-sprint-w2-trust-fraud-risk-detection-feature-flag-contract-qa.js";

assert(exists("docs", docName), "Sprint W2 feature flag contract doc must exist.");
assert(exists("public", moduleName), "Sprint W2 feature flag module must exist.");
assert(exists("scripts", qaName), "Sprint W2 QA script must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const readinessContract = read("public", "nexus-trust-fraud-risk-detection-readiness-contract.js");
const w1Doc = read("docs", "NEXUS_SPRINT_W1_TRUST_FRAUD_RISK_DETECTION_RUNTIME_ACTIVATION_READINESS_GATE.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "Sprint W2",
  "71a91fbdb637e0ce3a19dfc862ea0abf9bde56ee",
  "standalone inert contract module and deterministic QA only",
  "Feature Flag Name",
  "NEXUS_TRUST_FRAUD_RISK_DETECTION_VISIBLE_ENABLED",
  "Default State",
  "Contract Module",
  "Important Boundary",
  "Relationship To Sprint W1",
  "Runtime Absence Requirements",
  "QA Expectations",
  "Sprint W3 - Trust/Fraud/Risk Detection Flag Contract Harness"
], "W2 feature flag doc");

assert(readinessContract.includes("trust-fraud-risk-detection.readiness.phase_75"), "W2 must build on the Phase 75 Trust/Fraud/Risk Detection readiness contract.");
assert(readinessContract.includes("liveConnectorEnabled: false"), "Phase 75 live connector default must remain false.");
assert(readinessContract.includes("providerExecutionEnabled: false"), "Phase 75 provider execution default must remain false.");
assert(readinessContract.includes("regulatedActionEnabled: false"), "Phase 75 regulated action default must remain false.");
assert(readinessContract.includes("executionAllowed: false"), "Phase 75 execution default must remain false.");
assert(w1Doc.includes("Sprint W2 - Trust/Fraud/Risk Detection Feature Flag Contract"), "W1 must recommend Sprint W2.");

assert.equal(TRUST_FRAUD_RISK_DETECTION_FEATURE_FLAG_NAME, "NEXUS_TRUST_FRAUD_RISK_DETECTION_VISIBLE_ENABLED");
assert.equal(DEFAULT_TRUST_FRAUD_RISK_DETECTION_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_TRUST_FRAUD_RISK_DETECTION_FEATURE_FLAG_STATE.visibleUiAllowed, false);
assert.equal(DEFAULT_TRUST_FRAUD_RISK_DETECTION_FEATURE_FLAG_STATE.noExecution, true);

for (const field of PROTECTED_TRUST_FRAUD_RISK_DETECTION_FLAG_FIELDS) {
  assert.equal(DEFAULT_TRUST_FRAUD_RISK_DETECTION_FEATURE_FLAG_STATE[field], false, `default ${field} must be false.`);
  assert(doc.includes(`${field}: false`), `W2 doc must document ${field}: false.`);
}

const defaultState = normalizeTrustFraudRiskDetectionFeatureFlagState();
assert.equal(defaultState.enabled, false);
assert.equal(defaultState.visibleUiAllowed, false);
assert.equal(defaultState.noExecution, true);
assert.equal(isTrustFraudRiskDetectionVisibleFeatureEnabled(defaultState), false);

const visibleOnly = normalizeTrustFraudRiskDetectionFeatureFlagState({
  enabled: true,
  visibleUiAllowed: true
});
assert.equal(visibleOnly.enabled, true);
assert.equal(visibleOnly.visibleUiAllowed, true);
assert.equal(isTrustFraudRiskDetectionVisibleFeatureEnabled(visibleOnly), true);
for (const field of PROTECTED_TRUST_FRAUD_RISK_DETECTION_FLAG_FIELDS) {
  assert.equal(visibleOnly[field], false, `visible-only state must keep ${field}=false.`);
}
assert.equal(visibleOnly.noExecution, true);

const unsafeAttempt = normalizeTrustFraudRiskDetectionFeatureFlagState({
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
assert.equal(unsafeAttempt.visibleUiAllowed, true);
for (const field of PROTECTED_TRUST_FRAUD_RISK_DETECTION_FLAG_FIELDS) {
  assert.equal(unsafeAttempt[field], false, `unsafe attempt must keep ${field}=false.`);
}
assert.equal(unsafeAttempt.noExecution, true);

const runtime = [index, app, server].join("\n");
for (const term of [
  moduleName,
  "NEXUS_TRUST_FRAUD_RISK_DETECTION_VISIBLE_ENABLED",
  "NexusTrustFraudRiskDetectionFeatureFlagContract",
  "normalizeTrustFraudRiskDetectionFeatureFlagState",
  "isTrustFraudRiskDetectionVisibleFeatureEnabled",
  "trustFraudRiskDetectionRuntime",
  "liveRiskEngine",
  "fraudScoringRuntime",
  "riskSignalRetrievalRuntime",
  "restrictAccount(",
  "blockMarketplaceTransaction(",
  "holdPayment(",
  "approveIdentity("
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Trust/Fraud/Risk Detection feature flag artifact: ${term}`);
}

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
  "open(",
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
  "reportFraud("
]) {
  assert(!moduleSource.includes(term), `W2 feature flag module must not include runtime API: ${term}`);
}

const alias = "qa:nexus-sprint-w2-trust-fraud-risk-detection-feature-flag-contract";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint W2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-w1-trust-fraud-risk-detection-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint W1 QA.");

console.log("[nexus-sprint-w2-trust-fraud-risk-detection-feature-flag-contract-qa] passed");
