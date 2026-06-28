const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  DEFAULT_CONNECTOR_RELIABILITY_FEATURE_FLAG_STATE,
  PROTECTED_CONNECTOR_RELIABILITY_FLAG_FIELDS,
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

const docName = "NEXUS_SPRINT_AN4_CONNECTOR_RELIABILITY_RUNTIME_ABSENCE_REGRESSION_GUARD.md";
const qaName = "nexus-sprint-an4-connector-reliability-runtime-absence-regression-guard-qa.js";

assert(exists("docs", docName), "Sprint AN4 absence guard doc must exist.");
assert(exists("scripts", qaName), "Sprint AN4 QA script must exist.");

const doc = read("docs", docName);
const runtime = [read("public", "index.html"), read("public", "app.js"), read("server.js")].join("\n");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const readinessContract = read("public", "nexus-connector-reliability-readiness-contract.js");
const featureFlagModule = read("public", "nexus-connector-reliability-feature-flag.js");
const an3Harness = read("scripts", "nexus-sprint-an3-connector-reliability-flag-contract-harness.js");
const fixtures = loadConnectorReliabilityFlagFixtures();

assertIncludes(doc, [
  "Sprint AN4",
  "3119fc540710ee61f24c6f408f923223f47f0c4f",
  "documentation and QA only",
  "Purpose",
  "Runtime Absence Requirements",
  "Blocked Runtime Behavior",
  "Required Contract Invariants",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "QA Expectations",
  "Sprint AN5 - Connector Reliability Lane Closeout"
], "AN4 absence guard doc");

assertIncludes(doc, [
  "AN1 Connector Reliability runtime activation readiness gate",
  "AN2 Connector Reliability feature flag contract",
  "AN3 Connector Reliability flag contract harness",
  "Phase 92 Connector Reliability readiness contract",
  "public/nexus-connector-reliability-readiness-contract.js",
  "public/nexus-connector-reliability-feature-flag.js",
  "scripts/nexus-sprint-an3-connector-reliability-flag-contract-harness.js",
  "fixtures/nexus/connector-reliability-feature-flags.json",
  "Sprint AN QA scripts"
], "AN4 protected artifacts");

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
  "connector",
  "reliability",
  "retry",
  "fallback"
], "AN4 generic wording exception");

assertIncludes(doc, [
  "active Connector Reliability runtime",
  "live Connector Reliability runtime",
  "live connector activation",
  "connector polling runtime",
  "connector retry runtime",
  "connector fallback runtime",
  "connector health dashboard runtime",
  "source availability runtime",
  "provider availability runtime",
  "partner availability runtime",
  "stale data alert runtime",
  "admin connector queue runtime",
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
  "connector-driven action creation",
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
], "AN4 blocked runtime behavior");

for (const requiredPath of [
  ["docs", "NEXUS_SPRINT_AN1_CONNECTOR_RELIABILITY_RUNTIME_ACTIVATION_READINESS_GATE.md"],
  ["docs", "NEXUS_SPRINT_AN2_CONNECTOR_RELIABILITY_FEATURE_FLAG_CONTRACT.md"],
  ["docs", "NEXUS_SPRINT_AN3_CONNECTOR_RELIABILITY_FLAG_CONTRACT_HARNESS.md"],
  ["docs", "NEXUS_CONNECTOR_RELIABILITY_READINESS_CONTRACT_PHASE_92.md"],
  ["public", "nexus-connector-reliability-readiness-contract.js"],
  ["public", "nexus-connector-reliability-feature-flag.js"],
  ["fixtures", "nexus", "connector-reliability-feature-flags.json"],
  ["scripts", "nexus-sprint-an3-connector-reliability-flag-contract-harness.js"]
]) {
  assert(exists(...requiredPath), `AN4 requires artifact: ${requiredPath.join("/")}`);
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
  "nexus-sprint-an4-connector-reliability-runtime-absence-regression-guard"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Connector Reliability lane artifact: ${term}`);
}

assertIncludes(readinessContract, [
  "CONNECTOR_RELIABILITY_READINESS_CONTRACT",
  "connector-reliability.readiness.phase_92",
  "failures safe",
  "CONNECTOR_RELIABILITY_NO_EXECUTION_DEFAULTS",
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
], "Phase 92 Connector Reliability readiness contract");

assert.equal(DEFAULT_CONNECTOR_RELIABILITY_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_CONNECTOR_RELIABILITY_FEATURE_FLAG_STATE.visibleUiAllowed, false);
assert.equal(DEFAULT_CONNECTOR_RELIABILITY_FEATURE_FLAG_STATE.noExecution, true);
assert.deepEqual(protectedFields, Array.from(PROTECTED_CONNECTOR_RELIABILITY_FLAG_FIELDS), "AN3 harness must mirror AN2 protected fields.");

for (const field of protectedFields) {
  assert.equal(DEFAULT_CONNECTOR_RELIABILITY_FEATURE_FLAG_STATE[field], false, `AN4 default ${field} must remain false.`);
}

const unsafeInput = { enabled: true, visibleUiAllowed: true, noExecution: false };
for (const field of protectedFields) unsafeInput[field] = true;
const normalizedUnsafeAttempt = normalizeConnectorReliabilityFeatureFlagState(unsafeInput);
assert.equal(normalizedUnsafeAttempt.visibleUiAllowed, true);
assert.equal(normalizedUnsafeAttempt.noExecution, true);
for (const field of protectedFields) {
  assert.equal(normalizedUnsafeAttempt[field], false, `AN4 unsafe attempt must normalize ${field}=false.`);
}

const fixtureResult = validateConnectorReliabilityFlagFixtures(fixtures);
assert.equal(fixtureResult.ok, true, fixtureResult.failures.join("\n"));
assert.equal(fixtureResult.count, 4, "AN3 fixtures must remain deterministic.");

const unsafeFixture = fixtures.find(fixture => fixture.fixtureId === "connector-reliability-unsafe-authority-attempt");
const expandedUnsafe = expandFixtureInput(unsafeFixture.input);
for (const field of protectedFields) {
  assert.equal(expandedUnsafe[field], true, `AN4 unsafe fixture must expand ${field}=true before normalization.`);
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
  assert(!featureFlagModule.includes(term), `AN2 feature flag module must not include runtime API: ${term}`);
  assert(!an3Harness.includes(term), `AN3 harness must not include runtime API: ${term}`);
}

const alias = "qa:nexus-sprint-an4-connector-reliability-runtime-absence-regression-guard";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AN4 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-an3-connector-reliability-flag-contract-harness-qa.js"), "qa-suite must continue to include Sprint AN3 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-an2-connector-reliability-feature-flag-contract-qa.js"), "qa-suite must continue to include Sprint AN2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-an1-connector-reliability-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint AN1 QA.");
assert(qaSuite.includes("scripts/nexus-connector-reliability-readiness-contract-qa.js"), "qa-suite must continue to include Connector Reliability readiness QA.");

console.log("[nexus-sprint-an4-connector-reliability-runtime-absence-regression-guard-qa] passed");
