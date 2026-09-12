const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  DEFAULT_OBSERVABILITY_MONITORING_FEATURE_FLAG_STATE,
  normalizeObservabilityMonitoringFeatureFlagState
} = require("../public/nexus-observability-monitoring-feature-flag.js");
const {
  protectedFields,
  loadObservabilityMonitoringFlagFixtures,
  expandFixtureInput,
  validateObservabilityMonitoringFlagFixtures
} = require("./nexus-sprint-am3-observability-monitoring-flag-contract-harness.js");

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

const docName = "NEXUS_SPRINT_AM5_OBSERVABILITY_MONITORING_LANE_CLOSEOUT.md";
const qaName = "nexus-sprint-am5-observability-monitoring-lane-closeout-qa.js";

assert(exists("docs", docName), "Sprint AM5 lane closeout doc must exist.");
assert(exists("scripts", qaName), "Sprint AM5 QA script must exist.");

const doc = read("docs", docName);
const am4Doc = read("docs", "NEXUS_SPRINT_AM4_OBSERVABILITY_MONITORING_RUNTIME_ABSENCE_REGRESSION_GUARD.md");
const runtime = [read("public", "index.html"), read("public", "app.js"), read("server.js")].join("\n");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const readinessContract = read("public", "nexus-observability-monitoring-readiness-contract.js");
const featureFlagModule = read("public", "nexus-observability-monitoring-feature-flag.js");
const harness = read("scripts", "nexus-sprint-am3-observability-monitoring-flag-contract-harness.js");
const fixtures = loadObservabilityMonitoringFlagFixtures();

assertIncludes(doc, [
  "Sprint AM5",
  "5f4568c9cfc60c541a29ac5898423f29abfe21f9",
  "documentation and deterministic QA only",
  "Sprint AM Completion Summary",
  "What Is Active Now",
  "What Remains Inert",
  "No-Authority And No-Execution Guarantees",
  "Blocked Runtime Categories",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "Rollback Strategy",
  "Sprint AN1 - Connector Reliability Runtime Activation Readiness Gate"
], "AM5 closeout doc");

assertIncludes(doc, [
  "AM1 | Observability Monitoring runtime activation readiness gate | Complete",
  "AM2 | Observability Monitoring feature flag contract | Complete",
  "AM3 | Observability Monitoring flag contract harness | Complete",
  "AM4 | Observability Monitoring runtime absence regression guard | Complete",
  "AM5 | Observability Monitoring lane closeout | Complete"
], "AM5 completion table");

assertIncludes(am4Doc, [
  "Sprint AM5 - Observability Monitoring Lane Closeout"
], "AM4 next sprint recommendation");

for (const requiredPath of [
  ["docs", "NEXUS_SPRINT_AM1_OBSERVABILITY_MONITORING_RUNTIME_ACTIVATION_READINESS_GATE.md"],
  ["docs", "NEXUS_SPRINT_AM2_OBSERVABILITY_MONITORING_FEATURE_FLAG_CONTRACT.md"],
  ["docs", "NEXUS_SPRINT_AM3_OBSERVABILITY_MONITORING_FLAG_CONTRACT_HARNESS.md"],
  ["docs", "NEXUS_SPRINT_AM4_OBSERVABILITY_MONITORING_RUNTIME_ABSENCE_REGRESSION_GUARD.md"],
  ["docs", "NEXUS_OBSERVABILITY_MONITORING_READINESS_CONTRACT_PHASE_91.md"],
  ["public", "nexus-observability-monitoring-readiness-contract.js"],
  ["public", "nexus-observability-monitoring-feature-flag.js"],
  ["fixtures", "nexus", "observability-monitoring-feature-flags.json"],
  ["scripts", "nexus-sprint-am1-observability-monitoring-runtime-activation-readiness-gate-qa.js"],
  ["scripts", "nexus-sprint-am2-observability-monitoring-feature-flag-contract-qa.js"],
  ["scripts", "nexus-sprint-am3-observability-monitoring-flag-contract-harness-qa.js"],
  ["scripts", "nexus-sprint-am4-observability-monitoring-runtime-absence-regression-guard-qa.js"],
  ["scripts", "nexus-observability-monitoring-readiness-contract-qa.js"]
]) {
  assert(exists(...requiredPath), `AM5 requires artifact: ${requiredPath.join("/")}`);
}

assertIncludes(readinessContract, [
  "OBSERVABILITY_MONITORING_READINESS_CONTRACT",
  "observability-monitoring.readiness.phase_91",
  "OBSERVABILITY_MONITORING_NO_EXECUTION_DEFAULTS",
  "createObservabilityMonitoringReadinessContract",
  "\"executionAllowed\": false",
  "\"liveConnectorEnabled\": false",
  "\"providerExecutionEnabled\": false",
  "\"regulatedActionEnabled\": false",
  "healthcare",
  "pharmacy",
  "medical_records",
  "emergency",
  "regulated_execution"
], "Phase 91 Observability Monitoring readiness contract");

assert.equal(DEFAULT_OBSERVABILITY_MONITORING_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_OBSERVABILITY_MONITORING_FEATURE_FLAG_STATE.visibleUiAllowed, false);
for (const field of protectedFields) {
  assert.equal(DEFAULT_OBSERVABILITY_MONITORING_FEATURE_FLAG_STATE[field], false, `AM5 default ${field} must remain false.`);
}
assert.equal(DEFAULT_OBSERVABILITY_MONITORING_FEATURE_FLAG_STATE.noExecution, true);
assert(doc.includes("noExecution: true"), "AM5 doc must document noExecution: true.");

const unsafeInput = {
  enabled: true,
  visibleUiAllowed: true,
  noExecution: false
};
for (const field of protectedFields) unsafeInput[field] = true;
const normalizedUnsafeAttempt = normalizeObservabilityMonitoringFeatureFlagState(unsafeInput);
assert.equal(normalizedUnsafeAttempt.visibleUiAllowed, true);
assert.equal(normalizedUnsafeAttempt.noExecution, true);
for (const field of protectedFields) {
  assert.equal(normalizedUnsafeAttempt[field], false, `Unsafe attempt must normalize ${field} back to false.`);
}

const fixtureResult = validateObservabilityMonitoringFlagFixtures(fixtures);
assert.equal(fixtureResult.ok, true, "AM3 fixtures must remain valid.");
assert.equal(fixtureResult.count, 4, "AM3 fixtures must remain complete.");

const unsafeFixture = fixtures.find(fixture => fixture.fixtureId === "observability-monitoring-unsafe-authority-attempt");
const expandedUnsafe = expandFixtureInput(unsafeFixture.input);
for (const field of protectedFields) {
  assert.equal(expandedUnsafe[field], true, `unsafeAuthorityAttempt must expand ${field}=true before normalization.`);
}

for (const term of [
  "nexus-observability-monitoring-readiness-contract.js",
  "nexus-observability-monitoring-feature-flag.js",
  "nexus-sprint-am3-observability-monitoring-flag-contract-harness",
  "observability-monitoring-feature-flags.json",
  "NEXUS_OBSERVABILITY_MONITORING_VISIBLE_ENABLED",
  "NexusObservabilityMonitoringFeatureFlagContract",
  "normalizeObservabilityMonitoringFeatureFlagState",
  "isObservabilityMonitoringVisibleFeatureEnabled",
  "observabilityMonitoringFeatureFlag",
  "liveObservabilityMonitoringRuntime",
  "telemetryCollectionRuntime",
  "dashboardRuntime",
  "alertRuntime",
  "connectorPollingRuntime",
  "sourceFreshnessMonitorRuntime",
  "partnerHealthMonitorRuntime",
  "adminMonitoringQueueRuntime",
  "collectTelemetry(",
  "renderMonitoringDashboard(",
  "createMonitoringAlert(",
  "pollConnectorHealth(",
  "monitorSourceFreshness(",
  "monitorPartnerHealth(",
  "nexus-sprint-am5-observability-monitoring-lane-closeout"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Observability Monitoring lane artifact: ${term}`);
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
    "collectTelemetry(",
    "renderMonitoringDashboard(",
    "createMonitoringAlert(",
    "pollConnectorHealth(",
    "monitorSourceFreshness(",
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
    assert(!source.includes(term), `Sprint AM contract/harness must not include runtime API: ${term}`);
  }
}

const alias = "qa:nexus-sprint-am5-observability-monitoring-lane-closeout";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AM5 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-am1-observability-monitoring-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint AM1 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-am2-observability-monitoring-feature-flag-contract-qa.js"), "qa-suite must continue to include Sprint AM2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-am3-observability-monitoring-flag-contract-harness-qa.js"), "qa-suite must continue to include Sprint AM3 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-am4-observability-monitoring-runtime-absence-regression-guard-qa.js"), "qa-suite must continue to include Sprint AM4 QA.");
assert(qaSuite.includes("scripts/nexus-observability-monitoring-readiness-contract-qa.js"), "qa-suite must continue to include Phase 91 QA.");

console.log("[nexus-sprint-am5-observability-monitoring-lane-closeout-qa] passed");
