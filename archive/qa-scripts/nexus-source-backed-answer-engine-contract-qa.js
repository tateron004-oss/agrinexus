const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  doc: path.join(root, "docs", "NEXUS_SOURCE_BACKED_ANSWER_ENGINE_CONTRACT_PHASE_24.md"),
  roadmap: path.join(root, "docs", "NEXUS_100_FULL_MULTILINGUAL_ACCESS_PLATFORM_ROADMAP.md"),
  module: path.join(root, "public", "nexus-source-backed-answer-engine-contract.js"),
  sourceContract: path.join(root, "public", "nexus-source-backed-answer-contract.js"),
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
    console.error(`[nexus-source-backed-answer-engine-contract-qa] ${message}`);
    process.exit(1);
  }
}

Object.values(paths).forEach(filePath => {
  assert(fs.existsSync(filePath), `${path.relative(root, filePath)} must exist.`);
});

const doc = read(paths.doc);
const roadmap = read(paths.roadmap);
const moduleSource = read(paths.module);
const sourceContract = read(paths.sourceContract);
const engine = require(paths.module);
const index = read(paths.index);
const app = read(paths.app);
const server = read(paths.server);
const packageData = JSON.parse(read(paths.packageJson));
const qaSuite = read(paths.qaSuite);

const requiredStates = [
  "general_guidance",
  "source_backed_guidance",
  "provider_directory_result",
  "prepared_action_preview",
  "permission_required",
  "privacy_gate_required",
  "emergency_escalation_guidance",
  "blocked_or_unsupported",
  "unavailable_source_fallback"
];

const requiredEnvelopeFields = [
  "responseState",
  "answerText",
  "language",
  "serviceDomain",
  "sourceSummary",
  "citations",
  "provenance",
  "freshness",
  "confidence",
  "limitations",
  "permission",
  "audit",
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

assert(roadmap.includes("| Phase 24 | Source-backed answer engine |"), "Nexus 100 roadmap must include Phase 24 source-backed answer engine.");
requiredStates.forEach(state => {
  assert(engine.RESPONSE_STATES.includes(state), `engine must include response state ${state}`);
  assert(doc.includes(state), `doc must include response state ${state}`);
});

requiredEnvelopeFields.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(engine.SOURCE_BACKED_ANSWER_ENVELOPE, field), `answer envelope must include ${field}`);
  assert(doc.includes(field), `doc must document ${field}`);
});

engine.CITATION_FIELDS.forEach(field => {
  assert(doc.includes(field), `doc must document citation field ${field}`);
});
engine.PROVENANCE_FIELDS.forEach(field => {
  assert(doc.includes(field), `doc must document provenance field ${field}`);
});

noExecutionFlags.forEach(flag => {
  assert(engine.NO_EXECUTION_DEFAULTS[flag] === (flag === "noExecution" ? true : false), `${flag} must default safely`);
  assert(engine.SOURCE_BACKED_ANSWER_ENVELOPE[flag] === engine.NO_EXECUTION_DEFAULTS[flag], `envelope ${flag} must match safe default`);
});

const sample = engine.createSourceBackedAnswerEnvelope({
  responseState: "source_backed_guidance",
  answerText: "Sample source-backed guidance.",
  citations: [{ sourceId: "sample", sourceOwner: "Sample public source", sourceType: "public", title: "Sample", reference: "not-live", lastVerifiedAt: null, staleAfter: "source-specific", freshnessLabel: "requires verified source", termsStatus: "review required", region: "example", language: "English" }]
});
assert(Object.isFrozen(sample), "created answer envelope must be frozen.");
assert(sample.responseState === "source_backed_guidance", "sample envelope should preserve valid source-backed state.");
assert(sample.provenance.sourceBackedGuidanceAvailable === true, "source-backed sample with citation should mark source-backed guidance available.");
noExecutionFlags.forEach(flag => {
  assert(sample[flag] === engine.NO_EXECUTION_DEFAULTS[flag], `created envelope must force ${flag} safe default`);
});

const fallback = engine.createSourceBackedAnswerEnvelope({ responseState: "not_real_state" });
assert(fallback.responseState === "general_guidance", "invalid response state must fall back to general_guidance.");

[
  "SOURCE_BACKED_ANSWER_CONTRACT",
  "DANGEROUS_DEFAULTS"
].forEach(phrase => {
  assert(sourceContract.includes(phrase), `existing source-backed answer contract must remain present: ${phrase}`);
});

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
  "execute:",
  "handler:",
  "adapter:",
  "providerHandoff",
  "processPayment",
  "dispatchEmergency",
  "contactProvider"
].forEach(forbidden => {
  assert(!moduleSource.includes(forbidden), `answer engine contract must not include runtime/execution behavior: ${forbidden}`);
});

[
  "nexus-source-backed-answer-engine-contract.js",
  "NexusSourceBackedAnswerEngineContract",
  "createSourceBackedAnswerEnvelope",
  "SOURCE_BACKED_ANSWER_ENVELOPE"
].forEach(runtimeHook => {
  assert(!index.includes(runtimeHook), `index.html must not load ${runtimeHook}`);
  assert(!app.includes(runtimeHook), `app.js must not consume ${runtimeHook}`);
  assert(!server.includes(runtimeHook), `server.js must not consume ${runtimeHook}`);
});

assert(
  packageData.scripts["qa:nexus-source-backed-answer-engine-contract"] === "node scripts/nexus-source-backed-answer-engine-contract-qa.js",
  "package.json must expose qa:nexus-source-backed-answer-engine-contract"
);
assert(
  qaSuite.includes("scripts/nexus-source-backed-answer-engine-contract-qa.js"),
  "qa-suite.js must include source-backed answer engine contract QA"
);

console.log("[nexus-source-backed-answer-engine-contract-qa] passed");
