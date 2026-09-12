const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  CONNECTOR_RELIABILITY_FEATURE_FLAG_NAME,
  DEFAULT_CONNECTOR_RELIABILITY_FEATURE_FLAG_STATE,
  PROTECTED_CONNECTOR_RELIABILITY_FLAG_FIELDS,
  normalizeConnectorReliabilityFeatureFlagState,
  isConnectorReliabilityVisibleFeatureEnabled
} = require("../public/nexus-connector-reliability-feature-flag.js");

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

const docName = "NEXUS_SPRINT_AN2_CONNECTOR_RELIABILITY_FEATURE_FLAG_CONTRACT.md";
const qaName = "nexus-sprint-an2-connector-reliability-feature-flag-contract-qa.js";
const moduleName = "nexus-connector-reliability-feature-flag.js";

assert(exists("docs", docName), "Sprint AN2 feature flag doc must exist.");
assert(exists("public", moduleName), "Sprint AN2 feature flag module must exist.");
assert(exists("scripts", qaName), "Sprint AN2 QA script must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const an1Doc = read("docs", "NEXUS_SPRINT_AN1_CONNECTOR_RELIABILITY_RUNTIME_ACTIVATION_READINESS_GATE.md");
const phase92Contract = read("public", "nexus-connector-reliability-readiness-contract.js");
const runtime = [read("public", "index.html"), read("public", "app.js"), read("server.js")].join("\n");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assert.equal(CONNECTOR_RELIABILITY_FEATURE_FLAG_NAME, "NEXUS_CONNECTOR_RELIABILITY_VISIBLE_ENABLED");
assert.equal(DEFAULT_CONNECTOR_RELIABILITY_FEATURE_FLAG_STATE.flagName, CONNECTOR_RELIABILITY_FEATURE_FLAG_NAME);
assert.equal(DEFAULT_CONNECTOR_RELIABILITY_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_CONNECTOR_RELIABILITY_FEATURE_FLAG_STATE.visibleUiAllowed, false);
assert.equal(DEFAULT_CONNECTOR_RELIABILITY_FEATURE_FLAG_STATE.noExecution, true);
assert(PROTECTED_CONNECTOR_RELIABILITY_FLAG_FIELDS.length >= 85, "Connector Reliability protected field list must stay comprehensive.");

assertIncludes(doc, [
  "Sprint AN2",
  "0c2f9f00ae22543cc22feae0938032d69263e3a5",
  "standalone inert contract module and deterministic QA only",
  "Feature Flag Name",
  "NEXUS_CONNECTOR_RELIABILITY_VISIBLE_ENABLED",
  "Default State",
  "Contract Module",
  "Important Boundary",
  "Relationship To Sprint AN1",
  "Runtime Absence Requirements",
  "Protected No-Execution Fields",
  "QA Expectations",
  "Sprint AN3 - Connector Reliability Flag Contract Harness"
], "AN2 feature flag doc");

assert(an1Doc.includes("Sprint AN2 - Connector Reliability Feature Flag Contract"), "AN1 must recommend Sprint AN2.");
assertIncludes(phase92Contract, [
  "CONNECTOR_RELIABILITY_READINESS_CONTRACT",
  "connector-reliability.readiness.phase_92",
  "failures safe",
  "CONNECTOR_RELIABILITY_NO_EXECUTION_DEFAULTS"
], "Phase 92 Connector Reliability readiness contract");

for (const field of PROTECTED_CONNECTOR_RELIABILITY_FLAG_FIELDS) {
  assert.equal(DEFAULT_CONNECTOR_RELIABILITY_FEATURE_FLAG_STATE[field], false, `Default ${field} must be false.`);
  assert(doc.includes(`${field}: false`), `AN2 doc must document ${field}: false.`);
}

const defaultState = normalizeConnectorReliabilityFeatureFlagState();
assert.equal(defaultState.enabled, false);
assert.equal(defaultState.visibleUiAllowed, false);
assert.equal(defaultState.noExecution, true);
assert.equal(isConnectorReliabilityVisibleFeatureEnabled(defaultState), false);

const visibleOnly = normalizeConnectorReliabilityFeatureFlagState({ enabled: true, visibleUiAllowed: true });
assert.equal(visibleOnly.enabled, true);
assert.equal(visibleOnly.visibleUiAllowed, true);
assert.equal(visibleOnly.noExecution, true);
assert.equal(isConnectorReliabilityVisibleFeatureEnabled(visibleOnly), true);
for (const field of PROTECTED_CONNECTOR_RELIABILITY_FLAG_FIELDS) {
  assert.equal(visibleOnly[field], false, `Visible-only state must keep ${field}=false.`);
}

const unsafeInput = { enabled: true, visibleUiAllowed: true, noExecution: false };
for (const field of PROTECTED_CONNECTOR_RELIABILITY_FLAG_FIELDS) unsafeInput[field] = true;
const normalizedUnsafeAttempt = normalizeConnectorReliabilityFeatureFlagState(unsafeInput);
for (const field of PROTECTED_CONNECTOR_RELIABILITY_FLAG_FIELDS) {
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
  "pollConnectorHealth(",
  "retryConnector(",
  "applyConnectorFallback(",
  "renderConnectorDashboard(",
  "createStaleDataAlert(",
  "monitorPartnerHealth("
]) {
  assert(!moduleSource.includes(term), `AN2 feature flag module must not include runtime API: ${term}`);
}

for (const term of [
  moduleName,
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
  "nexus-sprint-an2-connector-reliability-feature-flag-contract"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Connector Reliability feature flag artifact: ${term}`);
}

const alias = "qa:nexus-sprint-an2-connector-reliability-feature-flag-contract";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AN2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-an1-connector-reliability-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint AN1 QA.");
assert(qaSuite.includes("scripts/nexus-connector-reliability-readiness-contract-qa.js"), "qa-suite must continue to include Phase 92 QA.");

console.log("[nexus-sprint-an2-connector-reliability-feature-flag-contract-qa] passed");
