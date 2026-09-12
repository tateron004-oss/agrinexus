const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  doc: path.join(root, "docs", "NEXUS_DATA_QUALITY_MONITORING_CONTRACT_PHASE_26.md"),
  roadmap: path.join(root, "docs", "NEXUS_100_FULL_MULTILINGUAL_ACCESS_PLATFORM_ROADMAP.md"),
  module: path.join(root, "public", "nexus-data-quality-monitoring-contract.js"),
  phase24Module: path.join(root, "public", "nexus-source-backed-answer-engine-contract.js"),
  phase25Module: path.join(root, "public", "nexus-citation-freshness-confidence-contract.js"),
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
    console.error(`[nexus-data-quality-monitoring-contract-qa] ${message}`);
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
const phase25Source = read(paths.phase25Module);
const contract = require(paths.module);
const index = read(paths.index);
const app = read(paths.app);
const server = read(paths.server);
const packageData = JSON.parse(read(paths.packageJson));
const qaSuite = read(paths.qaSuite);

const requiredQualityStates = [
  "ready",
  "stale",
  "conflicting",
  "incomplete",
  "unverified",
  "not_connected_yet",
  "source_unavailable",
  "blocked_for_safety"
];

const requiredSignals = [
  "freshness_missing",
  "freshness_stale",
  "owner_missing",
  "terms_unreviewed",
  "region_mismatch",
  "language_mismatch",
  "required_field_missing",
  "conflicting_value",
  "connector_inactive",
  "regulated_data_without_consent",
  "unsafe_action_claim"
];

const requiredSeverities = [
  "none",
  "low",
  "medium",
  "high",
  "critical"
];

const requiredObservationFields = [
  "qualityState",
  "sourceId",
  "sourceOwner",
  "sourceType",
  "connectorStatus",
  "freshnessState",
  "lastVerifiedAt",
  "staleAfter",
  "qualitySignals",
  "missingFields",
  "conflictSeverity",
  "conflictSummary",
  "requiresHumanReview",
  "requiresSourceRefresh",
  "userFacingWarning",
  "fallbackResponseState",
  "auditEvent",
  "noExecution"
];

const requiredAuditFields = [
  "eventType",
  "sourceId",
  "qualityState",
  "qualitySignals",
  "conflictSeverity",
  "fallbackResponseState",
  "noExecution",
  "createdAt"
];

const noExecutionFlags = [
  "noExecution",
  "sourceRefreshStarted",
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

assert(roadmap.includes("| Phase 26 | Data quality monitoring |"), "Nexus 100 roadmap must include Phase 26 data quality monitoring row.");
assert(phase24Source.includes("SOURCE_BACKED_ANSWER_ENVELOPE"), "Phase 24 source-backed answer envelope contract must remain present.");
assert(phase25Source.includes("CITATION_TRUST_LABEL_CONTRACT"), "Phase 25 citation freshness confidence contract must remain present.");

requiredQualityStates.forEach(state => {
  assert(contract.SOURCE_QUALITY_STATES.includes(state), `contract must include source quality state ${state}`);
  assert(doc.includes(state), `doc must include source quality state ${state}`);
});

requiredSignals.forEach(signal => {
  assert(contract.QUALITY_SIGNAL_TYPES.includes(signal), `contract must include quality signal ${signal}`);
  assert(doc.includes(signal), `doc must include quality signal ${signal}`);
});

requiredSeverities.forEach(level => {
  assert(contract.CONFLICT_SEVERITY_LEVELS.includes(level), `contract must include conflict severity ${level}`);
  assert(doc.includes(level), `doc must include conflict severity ${level}`);
});

requiredObservationFields.forEach(field => {
  assert(contract.DATA_QUALITY_OBSERVATION_FIELDS.includes(field), `contract must list observation field ${field}`);
  assert(Object.prototype.hasOwnProperty.call(contract.DATA_QUALITY_OBSERVATION_CONTRACT, field), `observation contract must include ${field}`);
  assert(doc.includes(field), `doc must document ${field}`);
});

requiredAuditFields.forEach(field => {
  assert(contract.QUALITY_AUDIT_EVENT_FIELDS.includes(field), `contract must list audit event field ${field}`);
  assert(Object.prototype.hasOwnProperty.call(contract.DATA_QUALITY_OBSERVATION_CONTRACT.auditEvent, field), `audit event contract must include ${field}`);
  assert(doc.includes(field), `doc must document audit field ${field}`);
});

[
  "stale",
  "conflicting",
  "incomplete",
  "unverified",
  "not_connected_yet",
  "source_unavailable",
  "blocked_for_safety"
].forEach(state => {
  assert(contract.warningRequiredForQuality(state, "none") === true, `${state} must require warning or fallback.`);
});

["low", "medium", "high", "critical"].forEach(level => {
  assert(contract.warningRequiredForQuality("ready", level) === true, `${level} conflict must require warning.`);
});
assert(contract.warningRequiredForQuality("ready", "none") === false, "ready with no conflict should not require warning by default.");

noExecutionFlags.forEach(flag => {
  assert(contract.NO_EXECUTION_DEFAULTS[flag] === (flag === "noExecution" ? true : false), `${flag} must default safely.`);
  assert(contract.DATA_QUALITY_OBSERVATION_CONTRACT[flag] === contract.NO_EXECUTION_DEFAULTS[flag], `observation ${flag} must match safe default.`);
});

const conflicting = contract.createDataQualityObservation({
  sourceId: "sample",
  qualityState: "conflicting",
  qualitySignals: ["conflicting_value", "freshness_stale", "not_a_real_signal"],
  conflictSeverity: "high"
});
assert(Object.isFrozen(conflicting), "created data quality observation must be frozen.");
assert(conflicting.qualitySignals.includes("conflicting_value"), "valid quality signal must be preserved.");
assert(!conflicting.qualitySignals.includes("not_a_real_signal"), "invalid quality signal must be filtered.");
assert(conflicting.requiresHumanReview === true, "high conflict must require human review.");
assert(conflicting.userFacingWarning.length > 0, "conflicting source must expose user-facing warning.");
noExecutionFlags.forEach(flag => {
  assert(conflicting[flag] === contract.NO_EXECUTION_DEFAULTS[flag], `created observation must force ${flag} safe default.`);
});

const ready = contract.createDataQualityObservation({
  qualityState: "ready",
  conflictSeverity: "none",
  qualitySignals: []
});
assert(ready.fallbackResponseState === "source_backed_guidance", "ready source with no conflict may map to source_backed_guidance.");
assert(ready.noExecution === true, "ready source quality still must not execute.");

const invalid = contract.createDataQualityObservation({ qualityState: "magic_ready", conflictSeverity: "certain" });
assert(invalid.qualityState === "not_connected_yet", "invalid quality state must fall back to not_connected_yet.");
assert(invalid.conflictSeverity === "none", "invalid conflict severity must fall back to none.");

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
  "setInterval",
  "setTimeout",
  "execute:",
  "handler:",
  "adapter:",
  "providerHandoff",
  "processPayment",
  "dispatchEmergency",
  "contactProvider",
  "open("
].forEach(forbidden => {
  assert(!moduleSource.includes(forbidden), `data quality contract must not include monitor/runtime/execution behavior: ${forbidden}`);
});

[
  "nexus-data-quality-monitoring-contract.js",
  "NexusDataQualityMonitoringContract",
  "createDataQualityObservation",
  "DATA_QUALITY_OBSERVATION_CONTRACT"
].forEach(runtimeHook => {
  assert(!index.includes(runtimeHook), `index.html must not load ${runtimeHook}`);
  assert(!app.includes(runtimeHook), `app.js must not consume ${runtimeHook}`);
  assert(!server.includes(runtimeHook), `server.js must not consume ${runtimeHook}`);
});

assert(
  packageData.scripts["qa:nexus-data-quality-monitoring-contract"] === "node scripts/nexus-data-quality-monitoring-contract-qa.js",
  "package.json must expose qa:nexus-data-quality-monitoring-contract"
);
assert(
  qaSuite.includes("scripts/nexus-data-quality-monitoring-contract-qa.js"),
  "qa-suite.js must include data quality monitoring contract QA"
);

console.log("[nexus-data-quality-monitoring-contract-qa] passed");
