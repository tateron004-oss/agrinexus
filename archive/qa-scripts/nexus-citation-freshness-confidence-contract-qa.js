const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  doc: path.join(root, "docs", "NEXUS_CITATION_FRESHNESS_CONFIDENCE_CONTRACT_PHASE_25.md"),
  roadmap: path.join(root, "docs", "NEXUS_100_FULL_MULTILINGUAL_ACCESS_PLATFORM_ROADMAP.md"),
  module: path.join(root, "public", "nexus-citation-freshness-confidence-contract.js"),
  phase24Module: path.join(root, "public", "nexus-source-backed-answer-engine-contract.js"),
  index: path.join(root, "public", "index.html"),
  app: path.join(root, "public", "app.js"),
  server: path.join(root, "server.js"),
  packageJson: path.join(root, "package.json"),
  qaSuite: path.join(root, "scripts", "qa-suite.js")
};

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function assert(condition, message) {
  if (!condition) {
    console.error(`[nexus-citation-freshness-confidence-contract-qa] ${message}`);
    process.exit(1);
  }
}

Object.values(paths).forEach(filePath => {
  assert(fs.existsSync(filePath), `${path.relative(root, filePath)} must exist.`);
});

const doc = read(paths.doc);
const roadmap = read(paths.roadmap);
const moduleSource = read(paths.module);
const phase24Source = read(paths.phase24Module);
const contract = require(paths.module);
const index = read(paths.index);
const app = read(paths.app);
const server = read(paths.server);
const packageData = JSON.parse(read(paths.packageJson));
const qaSuite = read(paths.qaSuite);

const requiredFreshnessStates = [
  "current",
  "stale",
  "expired",
  "unknown",
  "not_connected_yet",
  "source_unavailable"
];

const requiredConfidenceLevels = [
  "verified_high",
  "source_backed",
  "limited",
  "stale_source",
  "unverified",
  "unavailable"
];

const requiredLabelFields = [
  "sourceId",
  "sourceOwner",
  "sourceType",
  "title",
  "reference",
  "freshnessState",
  "freshnessLabel",
  "confidenceLevel",
  "confidenceLabel",
  "lastVerifiedAt",
  "staleAfter",
  "termsStatus",
  "region",
  "language",
  "limitations",
  "staleWarningRequired",
  "userFacingDisclosure",
  "connectorStatus",
  "sourceBackedGuidanceAvailable",
  "noExecution"
];

const noExecutionFlags = [
  "noExecution",
  "providerContacted",
  "userDataShared",
  "externalActionExecuted",
  "paymentExecuted",
  "marketplaceTransactionExecuted",
  "medicalRecordAccessed",
  "prescriptionSubmitted",
  "emergencyDispatched",
  "locationShared",
  "callOrMessageSent"
];

assert(roadmap.includes("| Phase 25 | Citations/freshness/confidence |"), "Nexus 100 roadmap must include Phase 25 citation freshness confidence row.");
assert(phase24Source.includes("SOURCE_BACKED_ANSWER_ENVELOPE"), "Phase 24 answer envelope contract must remain present.");

requiredFreshnessStates.forEach(state => {
  assert(contract.FRESHNESS_STATES.includes(state), `contract must include freshness state ${state}`);
  assert(doc.includes(state), `doc must include freshness state ${state}`);
});

requiredConfidenceLevels.forEach(level => {
  assert(contract.CONFIDENCE_LEVELS.includes(level), `contract must include confidence level ${level}`);
  assert(doc.includes(level), `doc must include confidence level ${level}`);
});

requiredLabelFields.forEach(field => {
  assert(contract.CITATION_TRUST_LABEL_FIELDS.includes(field), `contract must list citation trust label field ${field}`);
  assert(Object.prototype.hasOwnProperty.call(contract.CITATION_TRUST_LABEL_CONTRACT, field), `label contract must include ${field}`);
  assert(doc.includes(field), `doc must document ${field}`);
});

[
  "stale",
  "expired",
  "unknown",
  "not_connected_yet",
  "source_unavailable"
].forEach(state => {
  assert(contract.requiresStaleWarning(state, "source_backed") === true, `${state} must require a stale/source warning.`);
});

[
  "stale_source",
  "unverified",
  "unavailable"
].forEach(level => {
  assert(contract.requiresStaleWarning("current", level) === true, `${level} confidence must require a stale/source warning.`);
});

assert(contract.requiresStaleWarning("current", "verified_high") === false, "current verified_high should not require warning by default.");

noExecutionFlags.forEach(flag => {
  assert(contract.NO_EXECUTION_DEFAULTS[flag] === (flag === "noExecution" ? true : false), `${flag} must default safely.`);
  assert(contract.CITATION_TRUST_LABEL_CONTRACT[flag] === contract.NO_EXECUTION_DEFAULTS[flag], `label ${flag} must match safe default.`);
});

const staleLabel = contract.createCitationTrustLabel({
  sourceId: "sample",
  sourceOwner: "Sample public source",
  sourceType: "public",
  freshnessState: "stale",
  confidenceLevel: "stale_source"
});
assert(Object.isFrozen(staleLabel), "created citation trust label must be frozen.");
assert(staleLabel.staleWarningRequired === true, "stale label must require warning.");
noExecutionFlags.forEach(flag => {
  assert(staleLabel[flag] === contract.NO_EXECUTION_DEFAULTS[flag], `created label must force ${flag} safe default.`);
});

const invalidLabel = contract.createCitationTrustLabel({ freshnessState: "live_magic", confidenceLevel: "certain" });
assert(invalidLabel.freshnessState === "not_connected_yet", "invalid freshness must fall back to not_connected_yet.");
assert(invalidLabel.confidenceLevel === "unverified", "invalid confidence must fall back to unverified.");

[
  "fetch(",
  "XMLHttpRequest",
  "axios",
  "EventSource",
  "WebSocket",
  "localStorage",
  "sessionStorage",
  "navigator.geolocation",
  "navigator.mediaDevices",
  "window.location",
  "document.location",
  "execute:",
  "handler:",
  "adapter:",
  "providerHandoff",
  "processPayment",
  "dispatchEmergency",
  "contactProvider",
  "open("
].forEach(forbidden => {
  assert(!moduleSource.includes(forbidden), `citation freshness confidence contract must not include runtime/execution behavior: ${forbidden}`);
});

[
  "nexus-citation-freshness-confidence-contract.js",
  "NexusCitationFreshnessConfidenceContract",
  "createCitationTrustLabel",
  "CITATION_TRUST_LABEL_CONTRACT"
].forEach(runtimeHook => {
  assert(!index.includes(runtimeHook), `index.html must not load ${runtimeHook}`);
  assert(!app.includes(runtimeHook), `app.js must not consume ${runtimeHook}`);
  assert(!server.includes(runtimeHook), `server.js must not consume ${runtimeHook}`);
});

assert(
  packageData.scripts["qa:nexus-citation-freshness-confidence-contract"] === "node scripts/nexus-citation-freshness-confidence-contract-qa.js",
  "package.json must expose qa:nexus-citation-freshness-confidence-contract"
);
assert(
  qaSuite.includes("scripts/nexus-citation-freshness-confidence-contract-qa.js"),
  "qa-suite.js must include citation freshness confidence contract QA"
);

console.log("[nexus-citation-freshness-confidence-contract-qa] passed");
