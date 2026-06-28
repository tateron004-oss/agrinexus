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

const docName = "NEXUS_SPRINT_AN1_CONNECTOR_RELIABILITY_RUNTIME_ACTIVATION_READINESS_GATE.md";
const qaName = "nexus-sprint-an1-connector-reliability-runtime-activation-readiness-gate-qa.js";

assert(exists("docs", docName), "Sprint AN1 readiness gate doc must exist.");
assert(exists("scripts", qaName), "Sprint AN1 QA script must exist.");

const doc = read("docs", docName);
const am5Doc = read("docs", "NEXUS_SPRINT_AM5_OBSERVABILITY_MONITORING_LANE_CLOSEOUT.md");
const runtime = [read("public", "index.html"), read("public", "app.js"), read("server.js")].join("\n");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const contractSource = read("public", "nexus-connector-reliability-readiness-contract.js");
const contract = require("../public/nexus-connector-reliability-readiness-contract.js");

assertIncludes(doc, [
  "Sprint AN1",
  "ea398474584c63ea9c2859e906ae7d085c1f8e7a",
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
  "Sprint AN2 - Connector Reliability Feature Flag Contract"
], "AN1 readiness doc");

assertIncludes(doc, [
  "Sprint AM5 - Observability Monitoring Lane Closeout",
  "Phase 92 - Connector Reliability Readiness Contract",
  "Connector Reliability readiness is not connector runtime approval, polling authority, retry authority, fallback authority, source authority, provider authority, clinic authority, telehealth authority, pharmacy authority, payment authority, marketplace authority, transportation authority, emergency authority, location authority, identity authority, user consent, product owner approval, partner approval, compliance approval, audit approval, or execution authority"
], "AN1 relationship section");

assertIncludes(doc, [
  "product owner approval for a Connector Reliability runtime change",
  "verified public source, partner source, or regulated source for every connector being monitored",
  "source attribution for every connector status",
  "visible freshness label",
  "visible confidence label",
  "defined retry policy",
  "defined fallback path",
  "partner availability contract",
  "privacy audit",
  "data minimization review",
  "redaction review",
  "retention policy",
  "role and permission check",
  "explicit user approval for high-risk actions",
  "visible cancellation path",
  "audit decision record before any connector-driven alert",
  "safe fallback path",
  "no unsupported live connector claim",
  "no unsupported provider availability claim",
  "no completed action claim",
  "no silent connector reliability activation",
  "no silent connector polling",
  "no silent retry",
  "no silent fallback",
  "regression suite coverage",
  "browser validation plan",
  "deterministic QA coverage"
], "AN1 runtime activation preconditions");

assertIncludes(doc, [
  "active Connector Reliability runtime",
  "live Connector Reliability runtime",
  "live connector activation",
  "connector polling runtime",
  "connector retry runtime",
  "connector fallback runtime",
  "connector health dashboard UI",
  "source availability runtime",
  "provider availability runtime",
  "partner health monitor runtime",
  "admin connector queue runtime",
  "provider connector runtime",
  "clinic connector runtime",
  "telehealth connector runtime",
  "pharmacy connector runtime",
  "connector-driven call execution",
  "connector-driven message execution",
  "WhatsApp, Telegram, SMS, or email execution",
  "payment execution",
  "marketplace transaction execution",
  "transportation dispatch",
  "emergency dispatch",
  "location sharing",
  "medical advice",
  "diagnosis claims",
  "prescription instructions",
  "unsupported live connector claims",
  "unsupported provider availability claims",
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
], "AN1 blocked runtime behavior");

assertIncludes(doc, [
  "I can prepare a connector reliability summary when verified connector sources are available.",
  "Connector Reliability is not connected yet.",
  "This requires source attribution, partner availability checks, role permissions, fallback rules, and audit logging.",
  "This connector status requires freshness and confidence labels before it can be shown as current.",
  "I cannot claim live connector health or contact providers from connector reliability metadata yet.",
  "No action has been taken.",
  "I activated connector reliability.",
  "I am polling connectors now.",
  "This provider connector is live.",
  "This clinic connector is healthy.",
  "I retried the provider connection.",
  "I used the fallback provider.",
  "I contacted the provider.",
  "I scheduled the appointment.",
  "I requested the refill.",
  "I processed the payment.",
  "I shared your location.",
  "I dispatched transportation.",
  "I dispatched emergency help.",
  "This connector data is current.",
  "I completed the connector reliability action."
], "AN1 safe copy boundary");

for (const requiredPath of [
  ["docs", "NEXUS_SPRINT_AM5_OBSERVABILITY_MONITORING_LANE_CLOSEOUT.md"],
  ["docs", "NEXUS_CONNECTOR_RELIABILITY_READINESS_CONTRACT_PHASE_92.md"],
  ["public", "nexus-connector-reliability-readiness-contract.js"],
  ["scripts", "nexus-connector-reliability-readiness-contract-qa.js"]
]) {
  assert(exists(...requiredPath), `AN1 requires artifact: ${requiredPath.join("/")}`);
}

assertIncludes(am5Doc, [
  "Sprint AN1 - Connector Reliability Runtime Activation Readiness Gate"
], "AM5 closeout next sprint recommendation");

assertIncludes(contractSource, [
  "CONNECTOR_RELIABILITY_READINESS_CONTRACT",
  "connector-reliability.readiness.phase_92",
  "CONNECTOR_RELIABILITY_NO_EXECUTION_DEFAULTS",
  "createConnectorReliabilityReadinessContract",
  "failures safe",
  "healthcare",
  "communications",
  "provider_contact",
  "regulated_execution"
], "Phase 92 Connector Reliability readiness contract");

assert.equal(contract.CONNECTOR_RELIABILITY_READINESS_CONTRACT.readinessStatus, "blocked");
assert.equal(contract.CONNECTOR_RELIABILITY_READINESS_CONTRACT.riskTier, "high");
assert.equal(contract.CONNECTOR_RELIABILITY_READINESS_CONTRACT.acceptanceTarget, "failures safe");
assert.equal(contract.CONNECTOR_RELIABILITY_READINESS_CONTRACT.liveConnectorEnabled, false);
assert.equal(contract.CONNECTOR_RELIABILITY_READINESS_CONTRACT.providerExecutionEnabled, false);
assert.equal(contract.CONNECTOR_RELIABILITY_READINESS_CONTRACT.regulatedActionEnabled, false);
assert.equal(contract.CONNECTOR_RELIABILITY_READINESS_CONTRACT.silentActionAllowed, false);
assert.equal(contract.CONNECTOR_RELIABILITY_READINESS_CONTRACT.backgroundExecutionAllowed, false);
assert.equal(contract.CONNECTOR_RELIABILITY_READINESS_CONTRACT.standardUserRuntimeMutationAllowed, false);
assert.equal(contract.CONNECTOR_RELIABILITY_READINESS_CONTRACT.storageSideEffectAllowed, false);
assert.equal(contract.CONNECTOR_RELIABILITY_READINESS_CONTRACT.networkSideEffectAllowed, false);
assert.equal(contract.CONNECTOR_RELIABILITY_READINESS_CONTRACT.executionAllowed, false);
assert.equal(contract.CONNECTOR_RELIABILITY_READINESS_CONTRACT.liveActionEnabled, false);

const sample = contract.createConnectorReliabilityReadinessContract({
  actionType: "prepare_connector_reliability_summary",
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
assert.equal(sample.actionType, "prepare_connector_reliability_summary");
assert.equal(sample.phase, "92");
assert.equal(sample.readinessStatus, "blocked");
assert.equal(sample.riskTier, "high");
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
  "nexus-connector-reliability-readiness-contract.js",
  "NexusConnectorReliabilityReadinessContract",
  "CONNECTOR_RELIABILITY_READINESS_CONTRACT",
  "connector-reliability.readiness.phase_92",
  "createConnectorReliabilityReadinessContract",
  "connectorReliabilityRuntime",
  "connectorPollingRuntime",
  "connectorRetryRuntime",
  "connectorFallbackRuntime",
  "connectorHealthDashboard",
  "partnerConnectorMonitor",
  "adminConnectorQueue",
  "pollConnectorHealth(",
  "retryConnector(",
  "applyConnectorFallback(",
  "renderConnectorDashboard(",
  "nexus-sprint-an1-connector-reliability-runtime-activation-readiness-gate"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Connector Reliability lane artifact: ${term}`);
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
  "renderConnectorDashboard("
]) {
  assert(!contractSource.includes(term), `Phase 92 contract must not include runtime API: ${term}`);
}

const alias = "qa:nexus-sprint-an1-connector-reliability-runtime-activation-readiness-gate";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AN1 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-am5-observability-monitoring-lane-closeout-qa.js"), "qa-suite must continue to include Sprint AM5 QA.");
assert(qaSuite.includes("scripts/nexus-connector-reliability-readiness-contract-qa.js"), "qa-suite must continue to include Phase 92 QA.");

console.log("[nexus-sprint-an1-connector-reliability-runtime-activation-readiness-gate-qa] passed");
