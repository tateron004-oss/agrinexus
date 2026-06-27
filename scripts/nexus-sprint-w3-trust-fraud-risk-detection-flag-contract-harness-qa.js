const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
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

const docName = "NEXUS_SPRINT_W3_TRUST_FRAUD_RISK_DETECTION_FLAG_CONTRACT_HARNESS.md";
const fixtureName = "trust-fraud-risk-detection-feature-flags.json";
const harnessName = "nexus-sprint-w3-trust-fraud-risk-detection-flag-contract-harness.js";
const qaName = "nexus-sprint-w3-trust-fraud-risk-detection-flag-contract-harness-qa.js";

assert(exists("docs", docName), "Sprint W3 harness doc must exist.");
assert(exists("fixtures", "nexus", fixtureName), "Sprint W3 fixture file must exist.");
assert(exists("scripts", harnessName), "Sprint W3 harness must exist.");
assert(exists("scripts", qaName), "Sprint W3 QA script must exist.");

const doc = read("docs", docName);
const fixtureSource = read("fixtures", "nexus", fixtureName);
const harnessSource = read("scripts", harnessName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const fixtures = loadTrustFraudRiskDetectionFlagFixtures();

assertIncludes(doc, [
  "Sprint W3",
  "c78fdad49efcc1b2bf77950ebf0e4abbad234884",
  "fixture, harness, documentation, and QA only",
  "fixtures/nexus/trust-fraud-risk-detection-feature-flags.json",
  "scripts/nexus-sprint-w3-trust-fraud-risk-detection-flag-contract-harness.js",
  "riskReviewAllowed: false",
  "riskSignalPreviewAllowed: false",
  "fraudSignalPreviewAllowed: false",
  "liveRiskEngineAllowed: false",
  "fraudScoringRuntimeAllowed: false",
  "automatedScoringAllowed: false",
  "hiddenScoringAllowed: false",
  "finalFraudDeterminationAllowed: false",
  "accountRestrictionAllowed: false",
  "marketplaceRestrictionAllowed: false",
  "paymentHoldAllowed: false",
  "identityDecisionAllowed: false",
  "enforcementActionAllowed: false",
  "userAccusationAllowed: false",
  "executionAuthority: false",
  "noExecution: true",
  "Sprint W4 - Trust/Fraud/Risk Detection Runtime Absence Regression Guard"
], "W3 harness doc");

assert.equal(fixtures.length, 4, "W3 fixture set must include exactly four flag fixtures.");
[
  "trust-fraud-risk-detection-default-off",
  "trust-fraud-risk-detection-flag-on-review-only",
  "trust-fraud-risk-detection-unsafe-authority-attempt",
  "trust-fraud-risk-detection-flag-on-without-visible-permission"
].forEach(id => {
  assert(fixtures.some(fixture => fixture.fixtureId === id), `W3 fixture set must include ${id}`);
});

const result = validateTrustFraudRiskDetectionFlagFixtures(fixtures);
assert.equal(result.ok, true, "W3 harness must validate fixtures successfully.");
assert.equal(result.count, 4, "W3 harness must report four fixtures.");

for (const term of [
  "\"executionAuthority\": true",
  "\"noExecution\": false",
  "\"trustFraudRiskRuntimeAllowed\": true",
  "\"liveRiskEngineAllowed\": true",
  "\"fraudScoringRuntimeAllowed\": true",
  "\"riskSignalRetrievalRuntimeAllowed\": true",
  "\"automatedScoringAllowed\": true",
  "\"hiddenScoringAllowed\": true",
  "\"finalFraudDeterminationAllowed\": true",
  "\"accountRestrictionAllowed\": true",
  "\"marketplaceRestrictionAllowed\": true",
  "\"paymentHoldAllowed\": true",
  "\"transactionBlockAllowed\": true",
  "\"identityDecisionAllowed\": true",
  "\"roleAuthorizationDecisionAllowed\": true",
  "\"enforcementActionAllowed\": true",
  "\"userAccusationAllowed\": true"
]) {
  assert(fixtureSource.includes(term), `W3 fixture must include unsafe attempt term: ${term}`);
}

for (const fixture of fixtures) {
  assert(fixture.expected, `${fixture.fixtureId} must include expected values.`);
  for (const field of protectedFields) {
    assert.equal(fixture.expected[field], false, `${fixture.fixtureId} must expect ${field} false.`);
  }
  assert.equal(fixture.expected.noExecution, true, `${fixture.fixtureId} must expect noExecution true.`);
}

for (const term of [
  "writeFile",
  "appendFile",
  "rmSync",
  "unlinkSync",
  "fetch(",
  "XMLHttpRequest",
  "document.",
  "querySelector",
  "addEventListener",
  "localStorage",
  "sessionStorage",
  "indexedDB",
  "db.json",
  "open(",
  "window.location",
  "location.href",
  "navigator.geolocation",
  "mediaDevices",
  "window.nativeBridge",
  "nativeBridge.",
  "ACTION_CALL",
  "getUserMedia",
  "setItem",
  "postMessage",
  "openWorkflow(",
  "goSection(",
  "restrictAccount(",
  "blockMarketplaceTransaction(",
  "holdPayment(",
  "approveIdentity(",
  "reportFraud("
]) {
  assert(!harnessSource.includes(term), `W3 harness must not include unsafe or mutating API: ${term}`);
}

const combinedRuntime = [index, app, server].join("\n");
for (const term of [
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
  "restrictAccount(",
  "blockMarketplaceTransaction(",
  "holdPayment(",
  "approveIdentity("
]) {
  assert(!combinedRuntime.includes(term), `Runtime must not load W2/W3 flag harness artifact: ${term}`);
}

assert(exists("docs", "NEXUS_SPRINT_W1_TRUST_FRAUD_RISK_DETECTION_RUNTIME_ACTIVATION_READINESS_GATE.md"), "W3 requires W1 readiness gate doc.");
assert(exists("docs", "NEXUS_SPRINT_W2_TRUST_FRAUD_RISK_DETECTION_FEATURE_FLAG_CONTRACT.md"), "W3 requires W2 feature flag contract doc.");
assert(exists("public", "nexus-trust-fraud-risk-detection-feature-flag.js"), "W3 requires W2 feature flag module.");

const alias = "qa:nexus-sprint-w3-trust-fraud-risk-detection-flag-contract-harness";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint W3 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-w1-trust-fraud-risk-detection-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint W1 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-w2-trust-fraud-risk-detection-feature-flag-contract-qa.js"), "qa-suite must continue to include Sprint W2 QA.");

console.log("[nexus-sprint-w3-trust-fraud-risk-detection-flag-contract-harness-qa] passed");
