const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  STALE_DATA_ALERTS_FEATURE_FLAG_NAME,
  DEFAULT_STALE_DATA_ALERTS_FEATURE_FLAG_STATE,
  PROTECTED_STALE_DATA_ALERTS_FLAG_FIELDS,
  normalizeStaleDataAlertsFeatureFlagState,
  isStaleDataAlertsVisibleFeatureEnabled
} = require("../public/nexus-stale-data-alerts-feature-flag.js");

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

const docName = "NEXUS_SPRINT_AO2_STALE_DATA_ALERTS_FEATURE_FLAG_CONTRACT.md";
const qaName = "nexus-sprint-ao2-stale-data-alerts-feature-flag-contract-qa.js";
const moduleName = "nexus-stale-data-alerts-feature-flag.js";

assert(exists("docs", docName), "Sprint AO2 feature flag doc must exist.");
assert(exists("public", moduleName), "Sprint AO2 feature flag module must exist.");
assert(exists("scripts", qaName), "Sprint AO2 QA script must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const ao1Doc = read("docs", "NEXUS_SPRINT_AO1_STALE_DATA_ALERTS_RUNTIME_ACTIVATION_READINESS_GATE.md");
const phase93Contract = read("public", "nexus-stale-data-alerts-readiness-contract.js");
const runtime = [read("public", "index.html"), read("public", "app.js"), read("server.js")].join("\n");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assert.equal(STALE_DATA_ALERTS_FEATURE_FLAG_NAME, "NEXUS_STALE_DATA_ALERTS_VISIBLE_ENABLED");
assert.equal(DEFAULT_STALE_DATA_ALERTS_FEATURE_FLAG_STATE.flagName, STALE_DATA_ALERTS_FEATURE_FLAG_NAME);
assert.equal(DEFAULT_STALE_DATA_ALERTS_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_STALE_DATA_ALERTS_FEATURE_FLAG_STATE.visibleUiAllowed, false);
assert.equal(DEFAULT_STALE_DATA_ALERTS_FEATURE_FLAG_STATE.noExecution, true);
assert(PROTECTED_STALE_DATA_ALERTS_FLAG_FIELDS.length >= 90, "Stale Data Alerts protected field list must stay comprehensive.");

assertIncludes(doc, [
  "Sprint AO2",
  "ea58844d5bfc8ff49b6a32eee4dc95ccc1966434",
  "standalone inert contract module and deterministic QA only",
  "Feature Flag Name",
  "NEXUS_STALE_DATA_ALERTS_VISIBLE_ENABLED",
  "Default State",
  "Contract Module",
  "Important Boundary",
  "Relationship To Sprint AO1",
  "Runtime Absence Requirements",
  "Protected No-Execution Fields",
  "QA Expectations",
  "Sprint AO3 - Stale Data Alerts Flag Contract Harness"
], "AO2 feature flag doc");

assert(ao1Doc.includes("Sprint AO2 - Stale Data Alerts Feature Flag Contract"), "AO1 must recommend Sprint AO2.");
assertIncludes(phase93Contract, [
  "STALE_DATA_ALERTS_READINESS_CONTRACT",
  "stale-data-alerts.readiness.phase_93",
  "stale data labeled",
  "STALE_DATA_ALERTS_NO_EXECUTION_DEFAULTS"
], "Phase 93 Stale Data Alerts readiness contract");

for (const field of PROTECTED_STALE_DATA_ALERTS_FLAG_FIELDS) {
  assert.equal(DEFAULT_STALE_DATA_ALERTS_FEATURE_FLAG_STATE[field], false, `Default ${field} must be false.`);
}

const defaultState = normalizeStaleDataAlertsFeatureFlagState();
assert.equal(defaultState.enabled, false);
assert.equal(defaultState.visibleUiAllowed, false);
assert.equal(defaultState.noExecution, true);
assert.equal(isStaleDataAlertsVisibleFeatureEnabled(defaultState), false);

const visibleOnly = normalizeStaleDataAlertsFeatureFlagState({ enabled: true, visibleUiAllowed: true });
assert.equal(visibleOnly.enabled, true);
assert.equal(visibleOnly.visibleUiAllowed, true);
assert.equal(visibleOnly.noExecution, true);
assert.equal(isStaleDataAlertsVisibleFeatureEnabled(visibleOnly), true);
for (const field of PROTECTED_STALE_DATA_ALERTS_FLAG_FIELDS) {
  assert.equal(visibleOnly[field], false, `Visible-only state must keep ${field}=false.`);
}

const unsafeInput = { enabled: true, visibleUiAllowed: true, noExecution: false };
for (const field of PROTECTED_STALE_DATA_ALERTS_FLAG_FIELDS) unsafeInput[field] = true;
const normalizedUnsafeAttempt = normalizeStaleDataAlertsFeatureFlagState(unsafeInput);
for (const field of PROTECTED_STALE_DATA_ALERTS_FLAG_FIELDS) {
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
  "monitorSourceFreshness(",
  "renderStaleDataAlert(",
  "createStaleDataAlert(",
  "routeStaleWarning("
]) {
  assert(!moduleSource.includes(term), `AO2 feature flag module must not include runtime API: ${term}`);
}

for (const term of [
  moduleName,
  "NEXUS_STALE_DATA_ALERTS_VISIBLE_ENABLED",
  "NexusStaleDataAlertsFeatureFlagContract",
  "normalizeStaleDataAlertsFeatureFlagState",
  "isStaleDataAlertsVisibleFeatureEnabled",
  "staleDataAlertsFeatureFlag",
  "liveStaleDataAlertsRuntime",
  "staleSourceDetectionRuntime",
  "sourceFreshnessMonitoringRuntime",
  "staleConnectorWarningRuntime",
  "staleDataDashboardRuntime",
  "adminStaleDataQueueRuntime",
  "monitorSourceFreshness(",
  "renderStaleDataAlert(",
  "createStaleDataAlert(",
  "routeStaleWarning(",
  "nexus-sprint-ao2-stale-data-alerts-feature-flag-contract"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Stale Data Alerts feature flag artifact: ${term}`);
}

const alias = "qa:nexus-sprint-ao2-stale-data-alerts-feature-flag-contract";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AO2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ao1-stale-data-alerts-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint AO1 QA.");
assert(qaSuite.includes("scripts/nexus-stale-data-alerts-readiness-contract-qa.js"), "qa-suite must continue to include Phase 93 QA.");

console.log("[nexus-sprint-ao2-stale-data-alerts-feature-flag-contract-qa] passed");
