const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  doc: path.join(root, "docs", "NEXUS_COMMUNICATIONS_NO_EXECUTION_REGRESSION_CONTRACT_PHASE_51B.md"),
  roadmap: path.join(root, "docs", "NEXUS_100_FULL_MULTILINGUAL_ACCESS_PLATFORM_ROADMAP.md"),
  module: path.join(root, "public", "nexus-communications-no-execution-regression-contract.js"),
  readinessGateModule: path.join(root, "public", "nexus-communications-provider-execution-readiness-gate.js"),
  previewModule: path.join(root, "public", "nexus-communications-prepared-action-preview-contract.js"),
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
    console.error(`[nexus-communications-no-execution-regression-contract-qa] ${message}`);
    process.exit(1);
  }
}

Object.values(paths).forEach(filePath => {
  assert(fs.existsSync(filePath), `${path.relative(root, filePath)} must exist.`);
});

const doc = read(paths.doc);
const roadmap = read(paths.roadmap);
const moduleSource = read(paths.module);
const readinessGate = require(paths.readinessGateModule);
const previewContract = require(paths.previewModule);
const contract = require(paths.module);
const index = read(paths.index);
const app = read(paths.app);
const server = read(paths.server);
const packageData = JSON.parse(read(paths.packageJson));
const qaSuite = read(paths.qaSuite);

assert(roadmap.includes("| Phase 51 | Communications send after approval | Enable messages/calls through providers | comm adapter | future | high | WhatsApp/SMS/email/native provider | explicit approval/audit | comm QA | no first-turn sending |"), "roadmap must preserve Phase 51 communications row.");
assert(readinessGate.COMMUNICATIONS_PROVIDER_EXECUTION_READINESS_GATE.phase51Blocked === true, "Phase 50A readiness gate must still block Phase 51.");
assert(previewContract.COMMUNICATION_PREVIEW_CONTRACT.executionEnabled === false, "Phase 51A preview contract must remain non-executing.");
assert(doc.includes("Phase 51B"), "doc must identify Phase 51B.");
assert(doc.includes("does not enable communications execution"), "doc must state no communications execution.");

[
  "COMMUNICATIONS_NO_EXECUTION_PROMPTS",
  "COMMUNICATIONS_NO_EXECUTION_ALLOWED_OUTCOMES",
  "COMMUNICATIONS_NO_EXECUTION_FORBIDDEN_OUTCOMES",
  "COMMUNICATIONS_NO_EXECUTION_REQUIRED_BOUNDARIES",
  "COMMUNICATIONS_NO_EXECUTION_REGRESSION_CONTRACT",
  "createCommunicationsNoExecutionRegressionCase"
].forEach(exportName => {
  assert(Object.prototype.hasOwnProperty.call(contract, exportName), `contract must export ${exportName}.`);
  assert(doc.includes(exportName), `doc must document ${exportName}.`);
});

[
  "Call John",
  "Call my doctor",
  "Call Maria on WhatsApp",
  "Call Maria on Telegram",
  "Text John",
  "Email John",
  "Send WhatsApp to buyer",
  "Message the seller",
  "Call workforce support",
  "Call my emergency contact"
].forEach(prompt => {
  assert(contract.COMMUNICATIONS_NO_EXECUTION_PROMPTS.includes(prompt), `prompt matrix must include ${prompt}.`);
  assert(doc.includes(prompt), `doc must document prompt ${prompt}.`);
});

[
  "clarify_recipient",
  "resolve_recipient",
  "permission_required",
  "approval_required",
  "preview_only",
  "blocked",
  "unsupported_provider"
].forEach(outcome => {
  assert(contract.COMMUNICATIONS_NO_EXECUTION_ALLOWED_OUTCOMES.includes(outcome), `allowed outcomes must include ${outcome}.`);
  assert(!contract.COMMUNICATIONS_NO_EXECUTION_FORBIDDEN_OUTCOMES.includes(outcome), `${outcome} must not be forbidden and allowed.`);
});

[
  "communication_executed",
  "provider_opened",
  "phone_opened",
  "whatsapp_opened",
  "telegram_opened",
  "sms_sent",
  "email_sent",
  "background_communication",
  "hidden_provider_handoff",
  "silent_call",
  "silent_send",
  "emergency_dispatched",
  "payment_processed",
  "marketplace_transaction_started",
  "location_shared",
  "camera_started"
].forEach(outcome => {
  assert(contract.COMMUNICATIONS_NO_EXECUTION_FORBIDDEN_OUTCOMES.includes(outcome), `forbidden outcomes must include ${outcome}.`);
  assert(doc.includes(outcome), `doc must document forbidden outcome ${outcome}.`);
});

contract.COMMUNICATIONS_NO_EXECUTION_REQUIRED_BOUNDARIES.forEach(boundary => {
  assert(doc.includes(boundary), `doc must document required boundary ${boundary}.`);
});

contract.COMMUNICATIONS_NO_EXECUTION_REGRESSION_CONTRACT.cases.forEach(testCase => {
  assert(testCase.executionAllowed === false, "regression case must not allow execution.");
  assert(testCase.providerOpenAllowed === false, "regression case must not allow provider opening.");
  assert(testCase.nativeBridgeAllowed === false, "regression case must not allow native bridge.");
  assert(testCase.externalNavigationAllowed === false, "regression case must not allow external navigation.");
  assert(testCase.backgroundCommunicationAllowed === false, "regression case must not allow background communication.");
  contract.COMMUNICATIONS_NO_EXECUTION_REQUIRED_BOUNDARIES.forEach(boundary => {
    assert(testCase.boundaries[boundary] === true, `regression case must preserve ${boundary}.`);
  });
});

const attempted = contract.createCommunicationsNoExecutionRegressionCase({
  prompt: "Call John",
  expectedOutcome: "approval_required",
  executionAllowed: true,
  providerOpenAllowed: true,
  nativeBridgeAllowed: true,
  externalNavigationAllowed: true,
  backgroundCommunicationAllowed: true,
  standardUserExecutionAllowed: true,
  liveActionEnabled: true,
  boundaries: {
    noFirstTurnExecution: false,
    blocksSilentCall: false,
    blocksSilentSend: false
  }
});
assert(Object.isFrozen(attempted), "created regression case must be frozen.");
assert(attempted.executionAllowed === false, "factory must force executionAllowed false.");
assert(attempted.providerOpenAllowed === false, "factory must force providerOpenAllowed false.");
assert(attempted.nativeBridgeAllowed === false, "factory must force nativeBridgeAllowed false.");
assert(attempted.externalNavigationAllowed === false, "factory must force externalNavigationAllowed false.");
assert(attempted.backgroundCommunicationAllowed === false, "factory must force backgroundCommunicationAllowed false.");
assert(attempted.boundaries.noFirstTurnExecution === true, "factory must preserve noFirstTurnExecution.");
assert(attempted.boundaries.blocksSilentCall === true, "factory must preserve blocksSilentCall.");
assert(attempted.boundaries.blocksSilentSend === true, "factory must preserve blocksSilentSend.");

[
  "fetch(",
  "XMLHttpRequest",
  "axios",
  "EventSource",
  "WebSocket",
  "localStorage",
  "sessionStorage",
  "indexedDB",
  "navigator.contacts",
  "navigator.geolocation",
  "navigator.mediaDevices",
  "window.location",
  "document.location",
  "setInterval",
  "addEventListener",
  "onclick",
  "execute:",
  "handler:",
  "adapter:",
  "processPayment",
  "dispatchEmergency"
].forEach(forbidden => {
  assert(!moduleSource.includes(forbidden), `no-execution regression contract must not include runtime/execution behavior: ${forbidden}`);
});

[
  "nexus-communications-no-execution-regression-contract.js",
  "NexusCommunicationsNoExecutionRegressionContract",
  "createCommunicationsNoExecutionRegressionCase",
  "COMMUNICATIONS_NO_EXECUTION_REGRESSION_CONTRACT"
].forEach(runtimeHook => {
  assert(!index.includes(runtimeHook), `index.html must not load ${runtimeHook}.`);
  assert(!app.includes(runtimeHook), `app.js must not consume ${runtimeHook}.`);
  assert(!server.includes(runtimeHook), `server.js must not consume ${runtimeHook}.`);
});

assert(packageData.scripts["qa:nexus-communications-no-execution-regression-contract"] === "node scripts/nexus-communications-no-execution-regression-contract-qa.js", "package.json must expose qa:nexus-communications-no-execution-regression-contract.");
assert(qaSuite.includes("scripts/nexus-communications-no-execution-regression-contract-qa.js"), "qa-suite.js must include communications no-execution regression QA.");

console.log("[nexus-communications-no-execution-regression-contract-qa] passed");
