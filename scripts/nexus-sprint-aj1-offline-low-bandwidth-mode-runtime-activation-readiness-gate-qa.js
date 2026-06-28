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

const docName = "NEXUS_SPRINT_AJ1_OFFLINE_LOW_BANDWIDTH_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md";
const qaName = "nexus-sprint-aj1-offline-low-bandwidth-mode-runtime-activation-readiness-gate-qa.js";

assert(exists("docs", docName), "Sprint AJ1 readiness gate doc must exist.");
assert(exists("scripts", qaName), "Sprint AJ1 QA script must exist.");

const doc = read("docs", docName);
const ai5Doc = read("docs", "NEXUS_SPRINT_AI5_ADMIN_MODE_LANE_CLOSEOUT.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const offlineContractSource = read("public", "nexus-offline-low-bandwidth-mode-readiness-contract.js");
const offlineContract = require("../public/nexus-offline-low-bandwidth-mode-readiness-contract.js");

assertIncludes(doc, [
  "Sprint AJ1",
  "9786e397cb98c585c4dbd153f03eec26b6493eaa",
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
  "Sprint AJ2 - Offline Low-Bandwidth Mode Feature Flag Contract"
], "AJ1 readiness doc");

assertIncludes(doc, [
  "Sprint AI5 - Admin Mode Lane Closeout",
  "Phase 88 - Offline Low-Bandwidth Mode Readiness Contract",
  "Offline Low-Bandwidth Mode readiness is not offline runtime authority, cache authority, service worker authority, sync authority, source connector authority, provider authority, health authority, pharmacy authority, payment authority, marketplace authority, transportation authority, emergency authority, location authority, camera authority, microphone authority, identity authority, user consent, product owner approval, audit approval, or execution authority"
], "AJ1 relationship section");

assertIncludes(doc, [
  "product owner approval for an Offline Low-Bandwidth Mode runtime change",
  "verified public source, partner source, or regulated source for every offline response class",
  "explicit source attribution for any cached, queued, or low-bandwidth response",
  "visible freshness label for every cached or degraded answer",
  "visible confidence label for every cached or degraded answer",
  "stale-data warning for any response that may be old, incomplete, unavailable, queued, degraded, or offline",
  "user consent boundary for any future persistence, caching, syncing, or saved context",
  "role and permission check where offline mode touches provider, health, pharmacy, marketplace, transportation, identity, or regulated workflows",
  "explicit user approval for high-risk actions",
  "visible cancellation path",
  "audit decision record before any offline-to-online handoff",
  "safe fallback path when sources are unavailable or stale",
  "no unsupported live claim",
  "no completed action claim",
  "no claim that cached data is current unless freshness is verified",
  "no silent cache write",
  "no silent background sync",
  "no service worker cache mutation without approval and QA",
  "regression suite coverage",
  "browser validation plan",
  "deterministic QA coverage"
], "AJ1 runtime activation preconditions");

assertIncludes(doc, [
  "active Offline Low-Bandwidth Mode runtime",
  "offline cache runtime",
  "local-first source runtime",
  "service worker cache mutation",
  "service worker route mutation",
  "background sync",
  "queued action execution",
  "queued provider handoff",
  "source sync",
  "connector sync",
  "offline provider execution",
  "offline call execution",
  "offline message execution",
  "offline WhatsApp, Telegram, SMS, or email execution",
  "offline payment execution",
  "offline marketplace transaction execution",
  "offline transportation dispatch",
  "offline emergency dispatch",
  "offline location sharing",
  "offline camera activation",
  "offline microphone activation",
  "offline medical advice",
  "offline diagnosis claims",
  "offline prescription instructions",
  "stale data claims without freshness labels",
  "confidence-free cached claims",
  "typed route mutation",
  "voice route mutation",
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
], "AJ1 blocked runtime behavior");

assertIncludes(doc, [
  "I can prepare an offline-safe summary when verified sources are available.",
  "Offline Low-Bandwidth Mode is not connected yet.",
  "This requires verified sources, freshness labels, and consent before caching.",
  "This may be stale or unavailable until the source is refreshed.",
  "I cannot complete offline actions, sync providers, or dispatch services yet.",
  "No action has been taken.",
  "I saved this for offline use.",
  "I synced your records.",
  "I queued the call.",
  "I sent the message.",
  "I contacted the provider.",
  "I scheduled the appointment.",
  "I requested the refill.",
  "I processed the payment.",
  "I shared your location.",
  "I opened your camera.",
  "I dispatched help.",
  "This cached answer is current.",
  "I completed the offline action."
], "AJ1 safe copy boundary");

for (const requiredPath of [
  ["docs", "NEXUS_SPRINT_AI5_ADMIN_MODE_LANE_CLOSEOUT.md"],
  ["docs", "NEXUS_OFFLINE_LOW_BANDWIDTH_MODE_READINESS_CONTRACT_PHASE_88.md"],
  ["public", "nexus-offline-low-bandwidth-mode-readiness-contract.js"],
  ["scripts", "nexus-offline-low-bandwidth-mode-readiness-contract-qa.js"]
]) {
  assert(exists(...requiredPath), `AJ1 requires artifact: ${requiredPath.join("/")}`);
}

assertIncludes(ai5Doc, [
  "Sprint AJ1 - Offline Low-Bandwidth Mode Runtime Activation Readiness Gate"
], "AI5 closeout next sprint recommendation");

assertIncludes(offlineContractSource, [
  "OFFLINE_LOW_BANDWIDTH_MODE_READINESS_CONTRACT",
  "offline-low-bandwidth-mode.readiness.phase_88",
  "OFFLINE_LOW_BANDWIDTH_MODE_NO_EXECUTION_DEFAULTS",
  "createOfflineLowBandwidthModeReadinessContract",
  "degraded path works",
  "healthcare",
  "communications",
  "provider_contact",
  "regulated_execution"
], "Phase 88 Offline Low-Bandwidth Mode readiness contract");

assert.equal(offlineContract.OFFLINE_LOW_BANDWIDTH_MODE_READINESS_CONTRACT.readinessStatus, "blocked");
assert.equal(offlineContract.OFFLINE_LOW_BANDWIDTH_MODE_READINESS_CONTRACT.riskTier, "controlled");
assert.equal(offlineContract.OFFLINE_LOW_BANDWIDTH_MODE_READINESS_CONTRACT.acceptanceTarget, "degraded path works");
assert.equal(offlineContract.OFFLINE_LOW_BANDWIDTH_MODE_READINESS_CONTRACT.liveConnectorEnabled, false);
assert.equal(offlineContract.OFFLINE_LOW_BANDWIDTH_MODE_READINESS_CONTRACT.providerExecutionEnabled, false);
assert.equal(offlineContract.OFFLINE_LOW_BANDWIDTH_MODE_READINESS_CONTRACT.regulatedActionEnabled, false);
assert.equal(offlineContract.OFFLINE_LOW_BANDWIDTH_MODE_READINESS_CONTRACT.silentActionAllowed, false);
assert.equal(offlineContract.OFFLINE_LOW_BANDWIDTH_MODE_READINESS_CONTRACT.backgroundExecutionAllowed, false);
assert.equal(offlineContract.OFFLINE_LOW_BANDWIDTH_MODE_READINESS_CONTRACT.standardUserRuntimeMutationAllowed, false);
assert.equal(offlineContract.OFFLINE_LOW_BANDWIDTH_MODE_READINESS_CONTRACT.storageSideEffectAllowed, false);
assert.equal(offlineContract.OFFLINE_LOW_BANDWIDTH_MODE_READINESS_CONTRACT.networkSideEffectAllowed, false);
assert.equal(offlineContract.OFFLINE_LOW_BANDWIDTH_MODE_READINESS_CONTRACT.executionAllowed, false);
assert.equal(offlineContract.OFFLINE_LOW_BANDWIDTH_MODE_READINESS_CONTRACT.liveActionEnabled, false);

const sample = offlineContract.createOfflineLowBandwidthModeReadinessContract({
  actionType: "prepare_offline_low_bandwidth_mode_summary",
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
assert.equal(sample.actionType, "prepare_offline_low_bandwidth_mode_summary");
assert.equal(sample.phase, "88");
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

const runtime = [index, app, server].join("\n");
for (const term of [
  "nexus-offline-low-bandwidth-mode-readiness-contract.js",
  "NexusOfflineLowBandwidthModeReadinessContract",
  "OFFLINE_LOW_BANDWIDTH_MODE_READINESS_CONTRACT",
  "offline-low-bandwidth-mode.readiness.phase_88",
  "createOfflineLowBandwidthModeReadinessContract",
  "offlineLowBandwidthModeRuntime",
  "liveOfflineLowBandwidthModeRuntime",
  "offlineCacheRuntime",
  "backgroundSyncRuntime",
  "sourceSyncRuntime",
  "connectorSyncRuntime",
  "offlineQueueRuntime",
  "cacheOfflineResponse(",
  "syncOfflineSources(",
  "queueOfflineAction(",
  "nexus-sprint-aj1-offline-low-bandwidth-mode-runtime-activation-readiness-gate"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Offline Low-Bandwidth Mode lane artifact: ${term}`);
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
  "SyncManager",
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
  "cacheOfflineResponse(",
  "syncOfflineSources(",
  "queueOfflineAction("
]) {
  assert(!offlineContractSource.includes(term), `Phase 88 contract must not include runtime API: ${term}`);
}

const alias = "qa:nexus-sprint-aj1-offline-low-bandwidth-mode-runtime-activation-readiness-gate";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AJ1 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ai5-admin-mode-lane-closeout-qa.js"), "qa-suite must continue to include Sprint AI5 QA.");
assert(qaSuite.includes("scripts/nexus-offline-low-bandwidth-mode-readiness-contract-qa.js"), "qa-suite must continue to include Phase 88 QA.");

console.log("[nexus-sprint-aj1-offline-low-bandwidth-mode-runtime-activation-readiness-gate-qa] passed");
