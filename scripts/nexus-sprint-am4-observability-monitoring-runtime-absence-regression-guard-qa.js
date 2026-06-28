const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  DEFAULT_OBSERVABILITY_MONITORING_FEATURE_FLAG_STATE,
  PROTECTED_OBSERVABILITY_MONITORING_FLAG_FIELDS,
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

const docName = "NEXUS_SPRINT_AM4_OBSERVABILITY_MONITORING_RUNTIME_ABSENCE_REGRESSION_GUARD.md";
const qaName = "nexus-sprint-am4-observability-monitoring-runtime-absence-regression-guard-qa.js";

assert(exists("docs", docName), "Sprint AM4 absence guard doc must exist.");
assert(exists("scripts", qaName), "Sprint AM4 QA script must exist.");

const doc = read("docs", docName);
const runtime = [read("public", "index.html"), read("public", "app.js"), read("server.js")].join("\n");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const readinessContract = read("public", "nexus-observability-monitoring-readiness-contract.js");
const featureFlagModule = read("public", "nexus-observability-monitoring-feature-flag.js");
const am3Harness = read("scripts", "nexus-sprint-am3-observability-monitoring-flag-contract-harness.js");
const fixtures = loadObservabilityMonitoringFlagFixtures();

assertIncludes(doc, [
  "Sprint AM4",
  "74bf77cda6a33fdbf0f6bac45e9984e5d0ef218d",
  "documentation and QA only",
  "Purpose",
  "Runtime Absence Requirements",
  "Blocked Runtime Behavior",
  "Required Contract Invariants",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "QA Expectations",
  "Sprint AM5 - Observability Monitoring Lane Closeout"
], "AM4 absence guard doc");

assertIncludes(doc, [
  "AM1 Observability Monitoring runtime activation readiness gate",
  "AM2 Observability Monitoring feature flag contract",
  "AM3 Observability Monitoring flag contract harness",
  "Phase 91 Observability Monitoring readiness contract",
  "public/nexus-observability-monitoring-readiness-contract.js",
  "public/nexus-observability-monitoring-feature-flag.js",
  "scripts/nexus-sprint-am3-observability-monitoring-flag-contract-harness.js",
  "fixtures/nexus/observability-monitoring-feature-flags.json",
  "Sprint AM QA scripts"
], "AM4 protected artifacts");

assertIncludes(doc, [
  "It intentionally does not ban generic source",
  "freshness",
  "confidence",
  "health",
  "telehealth",
  "provider",
  "pharmacy",
  "dashboard",
  "alert",
  "monitoring",
  "observability"
], "AM4 generic wording exception");

assertIncludes(doc, [
  "active Observability Monitoring runtime",
  "live Observability Monitoring runtime",
  "telemetry collection runtime",
  "dashboard rendering runtime",
  "alert creation runtime",
  "connector polling runtime",
  "source freshness monitor runtime",
  "partner health monitor runtime",
  "admin monitoring queue runtime",
  "provider connector runtime",
  "clinic connector runtime",
  "telehealth connector runtime",
  "pharmacy connector runtime",
  "agriculture connector runtime",
  "workforce connector runtime",
  "community-service connector runtime",
  "transportation connector runtime",
  "marketplace connector runtime",
  "health connector runtime",
  "medical record connector runtime",
  "FHIR connector runtime",
  "location connector runtime",
  "identity connector runtime",
  "communications connector runtime",
  "emergency connector runtime",
  "monitoring-driven action creation",
  "provider contact",
  "appointment scheduling",
  "telehealth session creation",
  "prescription refill workflow",
  "medical record access",
  "FHIR access",
  "location sharing",
  "camera activation",
  "microphone activation",
  "payment execution",
  "marketplace transaction execution",
  "typed route mutation",
  "voice route mutation",
  "policy bypass",
  "confirmation bypass",
  "permission bypass",
  "privacy bypass",
  "data minimization bypass",
  "redaction bypass",
  "backend writes",
  "localStorage or sessionStorage writes",
  "IndexedDB writes",
  "Cache API writes",
  "fetch or network calls",
  "provider handoff",
  "native bridge dispatch",
  "external navigation",
  "real pending action creation",
  "execution authority"
], "AM4 blocked runtime behavior");

for (const requiredPath of [
  ["docs", "NEXUS_SPRINT_AM1_OBSERVABILITY_MONITORING_RUNTIME_ACTIVATION_READINESS_GATE.md"],
  ["docs", "NEXUS_SPRINT_AM2_OBSERVABILITY_MONITORING_FEATURE_FLAG_CONTRACT.md"],
  ["docs", "NEXUS_SPRINT_AM3_OBSERVABILITY_MONITORING_FLAG_CONTRACT_HARNESS.md"],
  ["docs", "NEXUS_OBSERVABILITY_MONITORING_READINESS_CONTRACT_PHASE_91.md"],
  ["public", "nexus-observability-monitoring-readiness-contract.js"],
  ["public", "nexus-observability-monitoring-feature-flag.js"],
  ["fixtures", "nexus", "observability-monitoring-feature-flags.json"],
  ["scripts", "nexus-sprint-am3-observability-monitoring-flag-contract-harness.js"]
]) {
  assert(exists(...requiredPath), `AM4 requires artifact: ${requiredPath.join("/")}`);
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
  "nexus-sprint-am4-observability-monitoring-runtime-absence-regression-guard"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Observability Monitoring lane artifact: ${term}`);
}

assertIncludes(readinessContract, [
  "OBSERVABILITY_MONITORING_READINESS_CONTRACT",
  "observability-monitoring.readiness.phase_91",
  "health visible",
  "OBSERVABILITY_MONITORING_NO_EXECUTION_DEFAULTS",
  "\"executionAllowed\": false",
  "\"liveConnectorEnabled\": false",
  "\"providerExecutionEnabled\": false",
  "\"regulatedActionEnabled\": false",
  "communications",
  "healthcare",
  "pharmacy",
  "medical_records",
  "emergency",
  "regulated_execution"
], "Phase 91 Observability Monitoring readiness contract");

assert.equal(DEFAULT_OBSERVABILITY_MONITORING_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_OBSERVABILITY_MONITORING_FEATURE_FLAG_STATE.visibleUiAllowed, false);
assert.equal(DEFAULT_OBSERVABILITY_MONITORING_FEATURE_FLAG_STATE.noExecution, true);
assert.deepEqual(protectedFields, Array.from(PROTECTED_OBSERVABILITY_MONITORING_FLAG_FIELDS), "AM3 harness must mirror AM2 protected fields.");

for (const field of protectedFields) {
  assert.equal(DEFAULT_OBSERVABILITY_MONITORING_FEATURE_FLAG_STATE[field], false, `AM4 default ${field} must remain false.`);
}

const unsafeInput = { enabled: true, visibleUiAllowed: true, noExecution: false };
for (const field of protectedFields) unsafeInput[field] = true;
const normalizedUnsafeAttempt = normalizeObservabilityMonitoringFeatureFlagState(unsafeInput);
assert.equal(normalizedUnsafeAttempt.visibleUiAllowed, true);
assert.equal(normalizedUnsafeAttempt.noExecution, true);
for (const field of protectedFields) {
  assert.equal(normalizedUnsafeAttempt[field], false, `AM4 unsafe attempt must normalize ${field}=false.`);
}

const fixtureResult = validateObservabilityMonitoringFlagFixtures(fixtures);
assert.equal(fixtureResult.ok, true, fixtureResult.failures.join("\n"));
assert.equal(fixtureResult.count, 4, "AM3 fixtures must remain deterministic.");

const unsafeFixture = fixtures.find(fixture => fixture.fixtureId === "observability-monitoring-unsafe-authority-attempt");
const expandedUnsafe = expandFixtureInput(unsafeFixture.input);
for (const field of protectedFields) {
  assert.equal(expandedUnsafe[field], true, `AM4 unsafe fixture must expand ${field}=true before normalization.`);
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
  assert(!featureFlagModule.includes(term), `AM2 feature flag module must not include runtime API: ${term}`);
  assert(!am3Harness.includes(term), `AM3 harness must not include runtime API: ${term}`);
}

const alias = "qa:nexus-sprint-am4-observability-monitoring-runtime-absence-regression-guard";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AM4 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-am3-observability-monitoring-flag-contract-harness-qa.js"), "qa-suite must continue to include Sprint AM3 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-am2-observability-monitoring-feature-flag-contract-qa.js"), "qa-suite must continue to include Sprint AM2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-am1-observability-monitoring-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint AM1 QA.");
assert(qaSuite.includes("scripts/nexus-observability-monitoring-readiness-contract-qa.js"), "qa-suite must continue to include Observability Monitoring readiness QA.");

console.log("[nexus-sprint-am4-observability-monitoring-runtime-absence-regression-guard-qa] passed");
