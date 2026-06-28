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

const docName = "NEXUS_SPRINT_AO1_STALE_DATA_ALERTS_RUNTIME_ACTIVATION_READINESS_GATE.md";
const qaName = "nexus-sprint-ao1-stale-data-alerts-runtime-activation-readiness-gate-qa.js";

assert(exists("docs", docName), "Sprint AO1 readiness gate doc must exist.");
assert(exists("scripts", qaName), "Sprint AO1 QA script must exist.");

const doc = read("docs", docName);
const an5Doc = read("docs", "NEXUS_SPRINT_AN5_CONNECTOR_RELIABILITY_LANE_CLOSEOUT.md");
const runtime = [read("public", "index.html"), read("public", "app.js"), read("server.js")].join("\n");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const contractSource = read("public", "nexus-stale-data-alerts-readiness-contract.js");
const contract = require("../public/nexus-stale-data-alerts-readiness-contract.js");

assertIncludes(doc, [
  "Sprint AO1",
  "01132af08513cd857c6cd4e1313128d614ab1adc",
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
  "Sprint AO2 - Stale Data Alerts Feature Flag Contract"
], "AO1 readiness doc");

assertIncludes(doc, [
  "Sprint AN5 - Connector Reliability Lane Closeout",
  "Phase 93 - Stale Data Alerts Readiness Contract",
  "Stale Data Alerts readiness is not stale alert runtime approval, source freshness authority, connector polling authority, source authority, provider authority, clinic authority, telehealth authority, pharmacy authority, payment authority, marketplace authority, transportation authority, emergency authority, location authority, identity authority, user consent, product owner approval, partner approval, compliance approval, audit approval, or execution authority"
], "AO1 relationship section");

assertIncludes(doc, [
  "product owner approval for a Stale Data Alerts runtime change",
  "verified public source, partner source, or regulated source for every freshness signal",
  "source attribution for every stale-data status",
  "visible freshness label",
  "visible confidence label",
  "defined stale threshold",
  "defined fallback path",
  "partner availability contract",
  "privacy audit",
  "data minimization review",
  "redaction review",
  "retention policy",
  "role and permission check",
  "explicit user approval for high-risk actions",
  "visible cancellation path",
  "audit decision record before any stale-data alert",
  "safe fallback path",
  "no unsupported live claim",
  "no unsupported current data claim",
  "no completed action claim",
  "no silent stale-data alert activation",
  "no silent source polling",
  "no silent stale-data warning",
  "regression suite coverage",
  "browser validation plan",
  "deterministic QA coverage"
], "AO1 runtime activation preconditions");

assertIncludes(doc, [
  "active Stale Data Alerts runtime",
  "live Stale Data Alerts runtime",
  "stale source detection runtime",
  "source freshness monitoring runtime",
  "stale connector warning runtime",
  "stale data dashboard UI",
  "source confidence warning runtime",
  "admin stale-data queue runtime",
  "provider connector runtime",
  "clinic connector runtime",
  "telehealth connector runtime",
  "pharmacy connector runtime",
  "stale-data-driven call execution",
  "stale-data-driven message execution",
  "WhatsApp, Telegram, SMS, or email execution",
  "payment execution",
  "marketplace transaction execution",
  "transportation dispatch",
  "emergency dispatch",
  "location sharing",
  "medical advice",
  "diagnosis claims",
  "prescription instructions",
  "unsupported live claims",
  "unsupported current data claims",
  "unsupported freshness claims",
  "completed action claims",
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
], "AO1 blocked runtime behavior");

assertIncludes(doc, [
  "I can prepare a stale-data readiness summary when verified sources and freshness rules are available.",
  "Stale Data Alerts are not connected yet.",
  "This requires source attribution, freshness labels, confidence labels, partner availability checks, role permissions, fallback rules, and audit logging.",
  "This data cannot be shown as current without a verified freshness signal.",
  "I cannot claim live freshness or contact providers from stale-data metadata yet.",
  "No action has been taken.",
  "I activated stale data alerts.",
  "I am monitoring sources now.",
  "This source is current.",
  "This provider data is live.",
  "This clinic data is fresh.",
  "I warned the provider.",
  "I used a fallback provider.",
  "I contacted the provider.",
  "I scheduled the appointment.",
  "I requested the refill.",
  "I processed the payment.",
  "I shared your location.",
  "I dispatched transportation.",
  "I dispatched emergency help.",
  "I completed the stale-data action."
], "AO1 safe copy boundary");

for (const requiredPath of [
  ["docs", "NEXUS_SPRINT_AN5_CONNECTOR_RELIABILITY_LANE_CLOSEOUT.md"],
  ["docs", "NEXUS_STALE_DATA_ALERTS_READINESS_CONTRACT_PHASE_93.md"],
  ["public", "nexus-stale-data-alerts-readiness-contract.js"],
  ["scripts", "nexus-stale-data-alerts-readiness-contract-qa.js"]
]) {
  assert(exists(...requiredPath), `AO1 requires artifact: ${requiredPath.join("/")}`);
}

assertIncludes(an5Doc, [
  "Sprint AO1 - Stale Data Alerts Runtime Activation Readiness Gate"
], "AN5 closeout next sprint recommendation");

assertIncludes(contractSource, [
  "STALE_DATA_ALERTS_READINESS_CONTRACT",
  "stale-data-alerts.readiness.phase_93",
  "STALE_DATA_ALERTS_NO_EXECUTION_DEFAULTS",
  "createStaleDataAlertsReadinessContract",
  "stale data labeled",
  "healthcare",
  "communications",
  "provider_contact",
  "regulated_execution"
], "Phase 93 Stale Data Alerts readiness contract");

assert.equal(contract.STALE_DATA_ALERTS_READINESS_CONTRACT.readinessStatus, "blocked");
assert.equal(contract.STALE_DATA_ALERTS_READINESS_CONTRACT.riskTier, "controlled");
assert.equal(contract.STALE_DATA_ALERTS_READINESS_CONTRACT.acceptanceTarget, "stale data labeled");
assert.equal(contract.STALE_DATA_ALERTS_READINESS_CONTRACT.liveConnectorEnabled, false);
assert.equal(contract.STALE_DATA_ALERTS_READINESS_CONTRACT.providerExecutionEnabled, false);
assert.equal(contract.STALE_DATA_ALERTS_READINESS_CONTRACT.regulatedActionEnabled, false);
assert.equal(contract.STALE_DATA_ALERTS_READINESS_CONTRACT.silentActionAllowed, false);
assert.equal(contract.STALE_DATA_ALERTS_READINESS_CONTRACT.backgroundExecutionAllowed, false);
assert.equal(contract.STALE_DATA_ALERTS_READINESS_CONTRACT.standardUserRuntimeMutationAllowed, false);
assert.equal(contract.STALE_DATA_ALERTS_READINESS_CONTRACT.storageSideEffectAllowed, false);
assert.equal(contract.STALE_DATA_ALERTS_READINESS_CONTRACT.networkSideEffectAllowed, false);
assert.equal(contract.STALE_DATA_ALERTS_READINESS_CONTRACT.executionAllowed, false);
assert.equal(contract.STALE_DATA_ALERTS_READINESS_CONTRACT.liveActionEnabled, false);

const sample = contract.createStaleDataAlertsReadinessContract({
  actionType: "prepare_stale_data_alerts_summary",
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
assert.equal(sample.actionType, "prepare_stale_data_alerts_summary");
assert.equal(sample.phase, "93");
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
  "nexus-stale-data-alerts-readiness-contract.js",
  "NexusStaleDataAlertsReadinessContract",
  "STALE_DATA_ALERTS_READINESS_CONTRACT",
  "stale-data-alerts.readiness.phase_93",
  "createStaleDataAlertsReadinessContract",
  "staleDataAlertsRuntime",
  "staleSourceDetectionRuntime",
  "sourceFreshnessMonitorRuntime",
  "staleConnectorWarningRuntime",
  "staleDataDashboard",
  "adminStaleDataQueue",
  "monitorSourceFreshness(",
  "renderStaleDataAlert(",
  "createStaleDataAlert(",
  "nexus-sprint-ao1-stale-data-alerts-runtime-activation-readiness-gate"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Stale Data Alerts lane artifact: ${term}`);
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
  "monitorSourceFreshness(",
  "renderStaleDataAlert(",
  "createStaleDataAlert("
]) {
  assert(!contractSource.includes(term), `Phase 93 contract must not include runtime API: ${term}`);
}

const alias = "qa:nexus-sprint-ao1-stale-data-alerts-runtime-activation-readiness-gate";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AO1 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-an5-connector-reliability-lane-closeout-qa.js"), "qa-suite must continue to include Sprint AN5 QA.");
assert(qaSuite.includes("scripts/nexus-stale-data-alerts-readiness-contract-qa.js"), "qa-suite must continue to include Phase 93 QA.");

console.log("[nexus-sprint-ao1-stale-data-alerts-runtime-activation-readiness-gate-qa] passed");
