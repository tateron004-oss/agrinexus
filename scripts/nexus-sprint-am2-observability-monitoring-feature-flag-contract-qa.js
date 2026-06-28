const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  OBSERVABILITY_MONITORING_FEATURE_FLAG_NAME,
  DEFAULT_OBSERVABILITY_MONITORING_FEATURE_FLAG_STATE,
  PROTECTED_OBSERVABILITY_MONITORING_FLAG_FIELDS,
  normalizeObservabilityMonitoringFeatureFlagState,
  isObservabilityMonitoringVisibleFeatureEnabled
} = require("../public/nexus-observability-monitoring-feature-flag.js");

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

const docName = "NEXUS_SPRINT_AM2_OBSERVABILITY_MONITORING_FEATURE_FLAG_CONTRACT.md";
const qaName = "nexus-sprint-am2-observability-monitoring-feature-flag-contract-qa.js";
const moduleName = "nexus-observability-monitoring-feature-flag.js";

assert(exists("docs", docName), "Sprint AM2 feature flag doc must exist.");
assert(exists("public", moduleName), "Sprint AM2 feature flag module must exist.");
assert(exists("scripts", qaName), "Sprint AM2 QA script must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const am1Doc = read("docs", "NEXUS_SPRINT_AM1_OBSERVABILITY_MONITORING_RUNTIME_ACTIVATION_READINESS_GATE.md");
const phase91Contract = read("public", "nexus-observability-monitoring-readiness-contract.js");
const runtime = [read("public", "index.html"), read("public", "app.js"), read("server.js")].join("\n");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assert.equal(OBSERVABILITY_MONITORING_FEATURE_FLAG_NAME, "NEXUS_OBSERVABILITY_MONITORING_VISIBLE_ENABLED");
assert.equal(DEFAULT_OBSERVABILITY_MONITORING_FEATURE_FLAG_STATE.flagName, OBSERVABILITY_MONITORING_FEATURE_FLAG_NAME);
assert.equal(DEFAULT_OBSERVABILITY_MONITORING_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_OBSERVABILITY_MONITORING_FEATURE_FLAG_STATE.visibleUiAllowed, false);
assert.equal(DEFAULT_OBSERVABILITY_MONITORING_FEATURE_FLAG_STATE.noExecution, true);
assert(PROTECTED_OBSERVABILITY_MONITORING_FLAG_FIELDS.length >= 85, "Observability Monitoring protected field list must stay comprehensive.");

assertIncludes(doc, [
  "Sprint AM2",
  "8d9b8e607f31f53c7c06af508ce32c8a9dba7a31",
  "standalone inert contract module and deterministic QA only",
  "Feature Flag Name",
  "NEXUS_OBSERVABILITY_MONITORING_VISIBLE_ENABLED",
  "Default State",
  "Contract Module",
  "Important Boundary",
  "Relationship To Sprint AM1",
  "Runtime Absence Requirements",
  "Protected No-Execution Fields",
  "QA Expectations",
  "Sprint AM3 - Observability Monitoring Flag Contract Harness"
], "AM2 feature flag doc");

assert(am1Doc.includes("Sprint AM2 - Observability Monitoring Feature Flag Contract"), "AM1 must recommend Sprint AM2.");
assertIncludes(phase91Contract, [
  "OBSERVABILITY_MONITORING_READINESS_CONTRACT",
  "observability-monitoring.readiness.phase_91",
  "health visible",
  "OBSERVABILITY_MONITORING_NO_EXECUTION_DEFAULTS"
], "Phase 91 Observability Monitoring readiness contract");

for (const field of PROTECTED_OBSERVABILITY_MONITORING_FLAG_FIELDS) {
  assert.equal(DEFAULT_OBSERVABILITY_MONITORING_FEATURE_FLAG_STATE[field], false, `Default ${field} must be false.`);
  assert(doc.includes(`${field}: false`), `AM2 doc must document ${field}: false.`);
}

const defaultState = normalizeObservabilityMonitoringFeatureFlagState();
assert.equal(defaultState.enabled, false);
assert.equal(defaultState.visibleUiAllowed, false);
assert.equal(defaultState.noExecution, true);
assert.equal(isObservabilityMonitoringVisibleFeatureEnabled(defaultState), false);

const visibleOnly = normalizeObservabilityMonitoringFeatureFlagState({ enabled: true, visibleUiAllowed: true });
assert.equal(visibleOnly.enabled, true);
assert.equal(visibleOnly.visibleUiAllowed, true);
assert.equal(visibleOnly.noExecution, true);
assert.equal(isObservabilityMonitoringVisibleFeatureEnabled(visibleOnly), true);
for (const field of PROTECTED_OBSERVABILITY_MONITORING_FLAG_FIELDS) {
  assert.equal(visibleOnly[field], false, `Visible-only state must keep ${field}=false.`);
}

const unsafeInput = { enabled: true, visibleUiAllowed: true, noExecution: false };
for (const field of PROTECTED_OBSERVABILITY_MONITORING_FLAG_FIELDS) unsafeInput[field] = true;
const normalizedUnsafeAttempt = normalizeObservabilityMonitoringFeatureFlagState(unsafeInput);
for (const field of PROTECTED_OBSERVABILITY_MONITORING_FLAG_FIELDS) {
  assert.equal(normalizedUnsafeAttempt[field], false, `Unsafe attempt must normalize ${field} back to false.`);
}
assert.equal(normalizedUnsafeAttempt.noExecution, true);
assert.equal(normalizedUnsafeAttempt.enabled, true);
assert.equal(normalizedUnsafeAttempt.visibleUiAllowed, true);

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
  "monitorPartnerHealth("
]) {
  assert(!moduleSource.includes(term), `AM2 feature flag module must not include runtime API: ${term}`);
}

for (const term of [
  moduleName,
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
  "nexus-sprint-am2-observability-monitoring-feature-flag-contract"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Observability Monitoring feature flag artifact: ${term}`);
}

const alias = "qa:nexus-sprint-am2-observability-monitoring-feature-flag-contract";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AM2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-am1-observability-monitoring-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint AM1 QA.");
assert(qaSuite.includes("scripts/nexus-observability-monitoring-readiness-contract-qa.js"), "qa-suite must continue to include Phase 91 QA.");

console.log("[nexus-sprint-am2-observability-monitoring-feature-flag-contract-qa] passed");
