const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  doc: path.join(root, "docs", "NEXUS_COMMUNICATIONS_PREPARED_ACTION_PREVIEW_CONTRACT_PHASE_51A.md"),
  roadmap: path.join(root, "docs", "NEXUS_100_FULL_MULTILINGUAL_ACCESS_PLATFORM_ROADMAP.md"),
  module: path.join(root, "public", "nexus-communications-prepared-action-preview-contract.js"),
  readinessGateModule: path.join(root, "public", "nexus-communications-provider-execution-readiness-gate.js"),
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
    console.error(`[nexus-communications-prepared-action-preview-contract-qa] ${message}`);
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
const contract = require(paths.module);
const index = read(paths.index);
const app = read(paths.app);
const server = read(paths.server);
const packageData = JSON.parse(read(paths.packageJson));
const qaSuite = read(paths.qaSuite);

assert(roadmap.includes("| Phase 51 | Communications send after approval | Enable messages/calls through providers | comm adapter | future | high | WhatsApp/SMS/email/native provider | explicit approval/audit | comm QA | no first-turn sending |"), "roadmap must preserve Phase 51 communications row.");
assert(readinessGate.COMMUNICATIONS_PROVIDER_EXECUTION_READINESS_GATE.phase51Blocked === true, "Phase 50A readiness gate must still block Phase 51.");
assert(readinessGate.COMMUNICATIONS_PROVIDER_EXECUTION_READINESS_GATE.communicationsExecutionEnabled === false, "Phase 50A readiness gate must not enable communications execution.");
assert(doc.includes("Phase 51 remains execution-disabled"), "Phase 51A doc must state execution remains disabled.");
assert(doc.includes("Phase 51B"), "Phase 51A doc must identify the next safe subphase.");

[
  "COMMUNICATION_PREVIEW_ACTION_TYPES",
  "COMMUNICATION_PREVIEW_PROVIDERS",
  "COMMUNICATION_PREVIEW_REQUIRED_FIELDS",
  "COMMUNICATION_PREVIEW_NO_EXECUTION_DEFAULTS",
  "COMMUNICATION_PREVIEW_RESTRICTED_DOMAINS",
  "COMMUNICATION_PREVIEW_CONTRACT",
  "createCommunicationsPreparedActionPreview"
].forEach(exportName => {
  assert(Object.prototype.hasOwnProperty.call(contract, exportName), `contract must export ${exportName}.`);
  assert(doc.includes(exportName), `doc must document ${exportName}.`);
});

[
  "previewId",
  "phase",
  "actionType",
  "provider",
  "recipientDisplay",
  "purposePreview",
  "language",
  "riskTier",
  "permissionState",
  "auditState",
  "approvalState",
  "cancellationAvailable",
  "executionEnabled",
  "providerOpenAllowed",
  "backgroundExecutionAllowed",
  "standardUserExecutionAllowed"
].forEach(field => {
  assert(contract.COMMUNICATION_PREVIEW_REQUIRED_FIELDS.includes(field), `required preview fields must include ${field}.`);
  assert(Object.prototype.hasOwnProperty.call(contract.COMMUNICATION_PREVIEW_CONTRACT, field), `base preview contract must include ${field}.`);
  assert(doc.includes(field), `doc must document preview field ${field}.`);
});

[
  "call",
  "message",
  "whatsapp",
  "telegram",
  "native_phone",
  "browser_tel",
  "sms",
  "email",
  "unsupported"
].forEach(actionType => {
  assert(contract.COMMUNICATION_PREVIEW_ACTION_TYPES.includes(actionType), `preview action types must include ${actionType}.`);
});

[
  "none",
  "native-phone",
  "browser-tel",
  "whatsapp",
  "telegram",
  "sms",
  "email",
  "approved-communications-provider",
  "unsupported"
].forEach(provider => {
  assert(contract.COMMUNICATION_PREVIEW_PROVIDERS.includes(provider), `preview providers must include ${provider}.`);
});

[
  "healthcare",
  "pharmacy",
  "emergency",
  "payments",
  "marketplace_transactions",
  "transportation_dispatch",
  "minors_family_support"
].forEach(domain => {
  assert(contract.COMMUNICATION_PREVIEW_RESTRICTED_DOMAINS.includes(domain), `restricted domains must include ${domain}.`);
  assert(doc.includes(domain), `doc must document restricted domain ${domain}.`);
});

Object.entries(contract.COMMUNICATION_PREVIEW_NO_EXECUTION_DEFAULTS).forEach(([flag, expected]) => {
  assert(expected === false, `${flag} must default false.`);
  assert(contract.COMMUNICATION_PREVIEW_CONTRACT[flag] === false, `${flag} must remain false on base contract.`);
});

const attemptedExecution = contract.createCommunicationsPreparedActionPreview({
  actionType: "whatsapp",
  provider: "whatsapp",
  executionEnabled: true,
  providerOpenAllowed: true,
  backgroundExecutionAllowed: true,
  standardUserExecutionAllowed: true,
  messageSendAllowed: true,
  callStartAllowed: true,
  whatsAppOpenAllowed: true,
  telegramOpenAllowed: true,
  nativePhoneOpenAllowed: true,
  browserTelOpenAllowed: true,
  smsSendAllowed: true,
  emailSendAllowed: true,
  providerContactAllowed: true,
  externalNavigationAllowed: true,
  liveActionEnabled: true
});

assert(Object.isFrozen(attemptedExecution), "prepared action preview must be frozen.");
assert(attemptedExecution.actionType === "whatsapp", "allowed action type may be represented for preview.");
assert(attemptedExecution.provider === "whatsapp", "allowed provider may be represented for preview.");
Object.keys(contract.COMMUNICATION_PREVIEW_NO_EXECUTION_DEFAULTS).forEach(flag => {
  assert(attemptedExecution[flag] === false, `factory must force ${flag} false.`);
});

const invalid = contract.createCommunicationsPreparedActionPreview({ actionType: "execute_everything", provider: "raw-url" });
assert(invalid.actionType === "unsupported", "invalid action types must normalize to unsupported.");
assert(invalid.provider === "unsupported", "invalid providers must normalize to unsupported.");

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
  "sendMessage",
  "placeCall",
  "openWhatsApp",
  "openTelegram",
  "openPhone",
  "processPayment",
  "dispatchEmergency"
].forEach(forbidden => {
  assert(!moduleSource.includes(forbidden), `prepared action preview contract must not include runtime/execution behavior: ${forbidden}`);
});

[
  "nexus-communications-prepared-action-preview-contract.js",
  "NexusCommunicationsPreparedActionPreviewContract",
  "createCommunicationsPreparedActionPreview",
  "COMMUNICATION_PREVIEW_CONTRACT"
].forEach(runtimeHook => {
  assert(!index.includes(runtimeHook), `index.html must not load ${runtimeHook}.`);
  assert(!app.includes(runtimeHook), `app.js must not consume ${runtimeHook}.`);
  assert(!server.includes(runtimeHook), `server.js must not consume ${runtimeHook}.`);
});

assert(packageData.scripts["qa:nexus-communications-prepared-action-preview-contract"] === "node scripts/nexus-communications-prepared-action-preview-contract-qa.js", "package.json must expose qa:nexus-communications-prepared-action-preview-contract.");
assert(qaSuite.includes("scripts/nexus-communications-prepared-action-preview-contract-qa.js"), "qa-suite.js must include communications prepared action preview QA.");

console.log("[nexus-communications-prepared-action-preview-contract-qa] passed");
