const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

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

const docName = "NEXUS_SPRINT_AM1_OBSERVABILITY_MONITORING_RUNTIME_ACTIVATION_READINESS_GATE.md";
const qaName = "nexus-sprint-am1-observability-monitoring-runtime-activation-readiness-gate-qa.js";

assert(exists("docs", docName), "Sprint AM1 readiness gate doc must exist.");
assert(exists("scripts", qaName), "Sprint AM1 QA script must exist.");

const doc = read("docs", docName);
const al5Doc = read("docs", "NEXUS_SPRINT_AL5_LOCAL_LANGUAGE_PACK_MODE_LANE_CLOSEOUT.md");
const runtime = [read("public", "index.html"), read("public", "app.js"), read("server.js")].join("\n");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const contractSource = read("public", "nexus-observability-monitoring-readiness-contract.js");
const contract = require("../public/nexus-observability-monitoring-readiness-contract.js");

assertIncludes(doc, [
  "Sprint AM1",
  "a3ebc14597746dde41cca94f6cc11c781ea464c7",
  "documentation and deterministic QA only",
  "Relationship To Prior Lanes",
  "Runtime Activation Preconditions",
  "Runtime Absence Requirements",
  "Blocked Runtime Behavior",
  "Standard User Boundary",
  "Required Contract Invariants",
  "Restricted Domains",
  "Safe Copy Boundary",
  "Browser Validation Implication",
  "Rollback Strategy",
  "Sprint AM2 - Observability Monitoring Feature Flag Contract"
], "AM1 readiness doc");

assertIncludes(doc, [
  "Sprint AL5 - Local Language Pack Mode Lane Closeout",
  "Phase 91 - Observability Monitoring Readiness Contract",
  "Observability Monitoring readiness is not telemetry approval, dashboard authority, connector polling authority, alerting authority, provider authority, health authority, pharmacy authority, payment authority, marketplace authority, transportation authority, emergency authority, location authority, identity authority, user consent, product owner approval, audit approval, or execution authority"
], "AM1 relationship section");

assertIncludes(doc, [
  "product owner approval for an Observability Monitoring runtime change",
  "verified public source, partner source, or regulated source for each monitored signal",
  "source attribution for every monitored signal",
  "visible freshness label",
  "visible confidence label",
  "privacy audit",
  "data minimization review",
  "redaction review",
  "retention policy",
  "role and permission check",
  "explicit user approval for high-risk actions",
  "visible cancellation path",
  "audit decision record before any monitoring-driven alert",
  "safe fallback path",
  "no unsupported live claim",
  "no completed action claim",
  "no silent monitoring activation",
  "no silent connector polling",
  "regression suite coverage",
  "browser validation plan",
  "deterministic QA coverage"
], "AM1 runtime activation preconditions");

assertIncludes(doc, [
  "active Observability Monitoring runtime",
  "live Observability Monitoring runtime",
  "telemetry collection",
  "dashboard UI",
  "alert runtime",
  "connector polling runtime",
  "source freshness monitor runtime",
  "partner health monitor runtime",
  "admin monitoring queue runtime",
  "provider connector runtime",
  "clinic connector runtime",
  "telehealth connector runtime",
  "pharmacy connector runtime",
  "monitoring-driven call execution",
  "monitoring-driven message execution",
  "WhatsApp, Telegram, SMS, or email execution",
  "payment execution",
  "marketplace transaction execution",
  "transportation dispatch",
  "emergency dispatch",
  "location sharing",
  "medical advice",
  "diagnosis claims",
  "prescription instructions",
  "unsupported live status claims",
  "unsupported connector health claims",
  "typed route mutation",
  "voice route mutation",
  "privacy audit bypass",
  "data minimization bypass",
  "redaction bypass",
  "permission prompts",
  "audit writes",
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
], "AM1 blocked runtime behavior");

assertIncludes(doc, [
  "I can prepare an observability summary when verified monitoring sources are available.",
  "Observability Monitoring is not connected yet.",
  "This requires source attribution, privacy review, role permissions, and audit logging.",
  "This monitoring view requires freshness and confidence labels before it can be shown as current.",
  "I cannot claim live connector health or contact providers from monitoring metadata yet.",
  "No action has been taken.",
  "I activated monitoring.",
  "I am collecting telemetry now.",
  "This provider is live.",
  "This clinic connector is healthy.",
  "I contacted the provider.",
  "I scheduled the appointment.",
  "I requested the refill.",
  "I processed the payment.",
  "I shared your location.",
  "I dispatched transportation.",
  "I dispatched emergency help.",
  "This monitoring data is current.",
  "I completed the monitoring action."
], "AM1 safe copy boundary");

for (const requiredPath of [
  ["docs", "NEXUS_SPRINT_AL5_LOCAL_LANGUAGE_PACK_MODE_LANE_CLOSEOUT.md"],
  ["docs", "NEXUS_OBSERVABILITY_MONITORING_READINESS_CONTRACT_PHASE_91.md"],
  ["public", "nexus-observability-monitoring-readiness-contract.js"],
  ["scripts", "nexus-observability-monitoring-readiness-contract-qa.js"]
]) {
  assert(exists(...requiredPath), `AM1 requires artifact: ${requiredPath.join("/")}`);
}

assertIncludes(al5Doc, [
  "Sprint AM1 - Observability Monitoring Runtime Activation Readiness Gate"
], "AL5 closeout next sprint recommendation");

assertIncludes(contractSource, [
  "OBSERVABILITY_MONITORING_READINESS_CONTRACT",
  "observability-monitoring.readiness.phase_91",
  "OBSERVABILITY_MONITORING_NO_EXECUTION_DEFAULTS",
  "createObservabilityMonitoringReadinessContract",
  "health visible",
  "healthcare",
  "communications",
  "provider_contact",
  "regulated_execution"
], "Phase 91 Observability Monitoring readiness contract");

assert.equal(contract.OBSERVABILITY_MONITORING_READINESS_CONTRACT.readinessStatus, "blocked");
assert.equal(contract.OBSERVABILITY_MONITORING_READINESS_CONTRACT.riskTier, "controlled");
assert.equal(contract.OBSERVABILITY_MONITORING_READINESS_CONTRACT.acceptanceTarget, "health visible");
assert.equal(contract.OBSERVABILITY_MONITORING_READINESS_CONTRACT.liveConnectorEnabled, false);
assert.equal(contract.OBSERVABILITY_MONITORING_READINESS_CONTRACT.providerExecutionEnabled, false);
assert.equal(contract.OBSERVABILITY_MONITORING_READINESS_CONTRACT.regulatedActionEnabled, false);
assert.equal(contract.OBSERVABILITY_MONITORING_READINESS_CONTRACT.silentActionAllowed, false);
assert.equal(contract.OBSERVABILITY_MONITORING_READINESS_CONTRACT.backgroundExecutionAllowed, false);
assert.equal(contract.OBSERVABILITY_MONITORING_READINESS_CONTRACT.standardUserRuntimeMutationAllowed, false);
assert.equal(contract.OBSERVABILITY_MONITORING_READINESS_CONTRACT.storageSideEffectAllowed, false);
assert.equal(contract.OBSERVABILITY_MONITORING_READINESS_CONTRACT.networkSideEffectAllowed, false);
assert.equal(contract.OBSERVABILITY_MONITORING_READINESS_CONTRACT.executionAllowed, false);
assert.equal(contract.OBSERVABILITY_MONITORING_READINESS_CONTRACT.liveActionEnabled, false);

const sample = contract.createObservabilityMonitoringReadinessContract({
  actionType: "prepare_observability_monitoring_summary",
  liveConnectorEnabled: true,
  providerExecutionEnabled: true,
  regulatedActionEnabled: true,
  silentActionAllowed: true,
  backgroundExecutionAllowed: true,
  storageSideEffectAllowed: true,
  networkSideEffectAllowed: true,
  executionAllowed: true,
  liveActionEnabled: true
});
assert.equal(sample.actionType, "prepare_observability_monitoring_summary");
assert.equal(sample.phase, "91");
assert.equal(sample.readinessStatus, "blocked");
assert.equal(sample.riskTier, "controlled");
assert.equal(sample.liveConnectorEnabled, false);
assert.equal(sample.providerExecutionEnabled, false);
assert.equal(sample.regulatedActionEnabled, false);
assert.equal(sample.silentActionAllowed, false);
assert.equal(sample.backgroundExecutionAllowed, false);
assert.equal(sample.storageSideEffectAllowed, false);
assert.equal(sample.networkSideEffectAllowed, false);
assert.equal(sample.executionAllowed, false);
assert.equal(sample.liveActionEnabled, false);

for (const term of [
  "nexus-observability-monitoring-readiness-contract.js",
  "NexusObservabilityMonitoringReadinessContract",
  "OBSERVABILITY_MONITORING_READINESS_CONTRACT",
  "observability-monitoring.readiness.phase_91",
  "createObservabilityMonitoringReadinessContract",
  "observabilityMonitoringRuntime",
  "telemetryCollectionRuntime",
  "dashboardRuntime",
  "alertRuntime",
  "connectorPollingRuntime",
  "monitorPlatformHealth(",
  "pollConnectorHealth(",
  "renderMonitoringDashboard(",
  "nexus-sprint-am1-observability-monitoring-runtime-activation-readiness-gate"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Observability Monitoring lane artifact: ${term}`);
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
  "monitorPlatformHealth(",
  "pollConnectorHealth(",
  "renderMonitoringDashboard("
]) {
  assert(!contractSource.includes(term), `Phase 91 contract must not include runtime API: ${term}`);
}

const alias = "qa:nexus-sprint-am1-observability-monitoring-runtime-activation-readiness-gate";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AM1 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-al5-local-language-pack-mode-lane-closeout-qa.js"), "qa-suite must continue to include Sprint AL5 QA.");
assert(qaSuite.includes("scripts/nexus-observability-monitoring-readiness-contract-qa.js"), "qa-suite must continue to include Phase 91 QA.");

console.log("[nexus-sprint-am1-observability-monitoring-runtime-activation-readiness-gate-qa] passed");
