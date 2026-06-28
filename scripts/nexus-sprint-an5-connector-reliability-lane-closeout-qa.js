const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  DEFAULT_CONNECTOR_RELIABILITY_FEATURE_FLAG_STATE,
  normalizeConnectorReliabilityFeatureFlagState
} = require("../public/nexus-connector-reliability-feature-flag.js");
const {
  protectedFields,
  loadConnectorReliabilityFlagFixtures,
  expandFixtureInput,
  validateConnectorReliabilityFlagFixtures
} = require("./nexus-sprint-an3-connector-reliability-flag-contract-harness.js");

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

const docName = "NEXUS_SPRINT_AN5_CONNECTOR_RELIABILITY_LANE_CLOSEOUT.md";
const qaName = "nexus-sprint-an5-connector-reliability-lane-closeout-qa.js";

assert(exists("docs", docName), "Sprint AN5 lane closeout doc must exist.");
assert(exists("scripts", qaName), "Sprint AN5 QA script must exist.");

const doc = read("docs", docName);
const an4Doc = read("docs", "NEXUS_SPRINT_AN4_CONNECTOR_RELIABILITY_RUNTIME_ABSENCE_REGRESSION_GUARD.md");
const runtime = [read("public", "index.html"), read("public", "app.js"), read("server.js")].join("\n");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const readinessContract = read("public", "nexus-connector-reliability-readiness-contract.js");
const featureFlagModule = read("public", "nexus-connector-reliability-feature-flag.js");
const harness = read("scripts", "nexus-sprint-an3-connector-reliability-flag-contract-harness.js");
const fixtures = loadConnectorReliabilityFlagFixtures();

assertIncludes(doc, [
  "Sprint AN5",
  "cb0182037119965f0133b7fd5dfc02b6a09bb3c6",
  "documentation and deterministic QA only",
  "Sprint AN Completion Summary",
  "What Is Active Now",
  "What Remains Inert",
  "No-Authority And No-Execution Guarantees",
  "Blocked Runtime Categories",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "Rollback Strategy",
  "Sprint AO1 - Stale Data Alerts Runtime Activation Readiness Gate"
], "AN5 closeout doc");

assertIncludes(doc, [
  "AN1 | Connector Reliability runtime activation readiness gate | Complete",
  "AN2 | Connector Reliability feature flag contract | Complete",
  "AN3 | Connector Reliability flag contract harness | Complete",
  "AN4 | Connector Reliability runtime absence regression guard | Complete",
  "AN5 | Connector Reliability lane closeout | Complete"
], "AN5 completion table");

assertIncludes(an4Doc, [
  "Sprint AN5 - Connector Reliability Lane Closeout"
], "AN4 next sprint recommendation");

for (const requiredPath of [
  ["docs", "NEXUS_SPRINT_AN1_CONNECTOR_RELIABILITY_RUNTIME_ACTIVATION_READINESS_GATE.md"],
  ["docs", "NEXUS_SPRINT_AN2_CONNECTOR_RELIABILITY_FEATURE_FLAG_CONTRACT.md"],
  ["docs", "NEXUS_SPRINT_AN3_CONNECTOR_RELIABILITY_FLAG_CONTRACT_HARNESS.md"],
  ["docs", "NEXUS_SPRINT_AN4_CONNECTOR_RELIABILITY_RUNTIME_ABSENCE_REGRESSION_GUARD.md"],
  ["docs", "NEXUS_CONNECTOR_RELIABILITY_READINESS_CONTRACT_PHASE_92.md"],
  ["public", "nexus-connector-reliability-readiness-contract.js"],
  ["public", "nexus-connector-reliability-feature-flag.js"],
  ["fixtures", "nexus", "connector-reliability-feature-flags.json"],
  ["scripts", "nexus-sprint-an1-connector-reliability-runtime-activation-readiness-gate-qa.js"],
  ["scripts", "nexus-sprint-an2-connector-reliability-feature-flag-contract-qa.js"],
  ["scripts", "nexus-sprint-an3-connector-reliability-flag-contract-harness-qa.js"],
  ["scripts", "nexus-sprint-an4-connector-reliability-runtime-absence-regression-guard-qa.js"],
  ["scripts", "nexus-connector-reliability-readiness-contract-qa.js"]
]) {
  assert(exists(...requiredPath), `AN5 requires artifact: ${requiredPath.join("/")}`);
}

assertIncludes(readinessContract, [
  "CONNECTOR_RELIABILITY_READINESS_CONTRACT",
  "connector-reliability.readiness.phase_92",
  "CONNECTOR_RELIABILITY_NO_EXECUTION_DEFAULTS",
  "createConnectorReliabilityReadinessContract",
  "\"executionAllowed\": false",
  "\"liveConnectorEnabled\": false",
  "\"providerExecutionEnabled\": false",
  "\"regulatedActionEnabled\": false",
  "healthcare",
  "pharmacy",
  "medical_records",
  "emergency",
  "regulated_execution"
], "Phase 92 Connector Reliability readiness contract");

assert.equal(DEFAULT_CONNECTOR_RELIABILITY_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_CONNECTOR_RELIABILITY_FEATURE_FLAG_STATE.visibleUiAllowed, false);
for (const field of protectedFields) {
  assert.equal(DEFAULT_CONNECTOR_RELIABILITY_FEATURE_FLAG_STATE[field], false, `AN5 default ${field} must remain false.`);
}
assert.equal(DEFAULT_CONNECTOR_RELIABILITY_FEATURE_FLAG_STATE.noExecution, true);
assert(doc.includes("noExecution: true"), "AN5 doc must document noExecution: true.");

const unsafeInput = {
  enabled: true,
  visibleUiAllowed: true,
  noExecution: false
};
for (const field of protectedFields) unsafeInput[field] = true;
const normalizedUnsafeAttempt = normalizeConnectorReliabilityFeatureFlagState(unsafeInput);
assert.equal(normalizedUnsafeAttempt.visibleUiAllowed, true);
assert.equal(normalizedUnsafeAttempt.noExecution, true);
for (const field of protectedFields) {
  assert.equal(normalizedUnsafeAttempt[field], false, `Unsafe attempt must normalize ${field} back to false.`);
}

const fixtureResult = validateConnectorReliabilityFlagFixtures(fixtures);
assert.equal(fixtureResult.ok, true, "AN3 fixtures must remain valid.");
assert.equal(fixtureResult.count, 4, "AN3 fixtures must remain complete.");

const unsafeFixture = fixtures.find(fixture => fixture.fixtureId === "connector-reliability-unsafe-authority-attempt");
const expandedUnsafe = expandFixtureInput(unsafeFixture.input);
for (const field of protectedFields) {
  assert.equal(expandedUnsafe[field], true, `unsafeAuthorityAttempt must expand ${field}=true before normalization.`);
}

for (const term of [
  "nexus-connector-reliability-readiness-contract.js",
  "nexus-connector-reliability-feature-flag.js",
  "nexus-sprint-an3-connector-reliability-flag-contract-harness",
  "connector-reliability-feature-flags.json",
  "NEXUS_CONNECTOR_RELIABILITY_VISIBLE_ENABLED",
  "NexusConnectorReliabilityFeatureFlagContract",
  "normalizeConnectorReliabilityFeatureFlagState",
  "isConnectorReliabilityVisibleFeatureEnabled",
  "connectorReliabilityFeatureFlag",
  "liveConnectorReliabilityRuntime",
  "connectorPollingRuntime",
  "connectorRetryRuntime",
  "connectorFallbackRuntime",
  "connectorHealthDashboardRuntime",
  "sourceAvailabilityRuntime",
  "providerAvailabilityRuntime",
  "partnerAvailabilityRuntime",
  "staleDataAlertRuntime",
  "adminConnectorQueueRuntime",
  "pollConnectorHealth(",
  "retryConnector(",
  "applyConnectorFallback(",
  "renderConnectorDashboard(",
  "createStaleDataAlert(",
  "nexus-sprint-an5-connector-reliability-lane-closeout"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Connector Reliability lane artifact: ${term}`);
}

for (const source of [featureFlagModule, harness]) {
  for (const term of [
    "document.",
    "querySelector",
    "addEventListener",
    "fetch(",
    "XMLHttpRequest",
    "localStorage",
    "sessionStorage",
    "indexedDB",
    "caches.",
    "navigator.serviceWorker",
    "serviceWorker.",
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
    "pollConnectorHealth(",
    "retryConnector(",
    "applyConnectorFallback(",
    "renderConnectorDashboard(",
    "createStaleDataAlert(",
    "monitorSourceAvailability(",
    "monitorProviderAvailability(",
    "monitorPartnerHealth(",
    "contactProvider(",
    "scheduleProviderAppointment(",
    "createTelehealthSession(",
    "requestPharmacyRefill(",
    "accessMedicalRecord(",
    "processProviderPayment(",
    "dispatchTransportation(",
    "dispatchEmergency(",
    "sharePatientLocation("
  ]) {
    assert(!source.includes(term), `Sprint AN contract/harness must not include runtime API: ${term}`);
  }
}

const alias = "qa:nexus-sprint-an5-connector-reliability-lane-closeout";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AN5 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-an1-connector-reliability-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint AN1 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-an2-connector-reliability-feature-flag-contract-qa.js"), "qa-suite must continue to include Sprint AN2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-an3-connector-reliability-flag-contract-harness-qa.js"), "qa-suite must continue to include Sprint AN3 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-an4-connector-reliability-runtime-absence-regression-guard-qa.js"), "qa-suite must continue to include Sprint AN4 QA.");
assert(qaSuite.includes("scripts/nexus-connector-reliability-readiness-contract-qa.js"), "qa-suite must continue to include Phase 92 QA.");

console.log("[nexus-sprint-an5-connector-reliability-lane-closeout-qa] passed");
