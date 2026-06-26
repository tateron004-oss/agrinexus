const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  doc: path.join(root, "docs", "NEXUS_COMMUNICATIONS_APPROVAL_AUDIT_HANDOFF_CONTRACT_PHASE_51C.md"),
  readinessGate: path.join(root, "public", "nexus-communications-provider-execution-readiness-gate.js"),
  previewContract: path.join(root, "public", "nexus-communications-prepared-action-preview-contract.js"),
  regressionContract: path.join(root, "public", "nexus-communications-no-execution-regression-contract.js"),
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
    console.error(`[nexus-communications-approval-audit-handoff-contract-qa] ${message}`);
    process.exit(1);
  }
}

Object.values(paths).forEach(filePath => {
  assert(fs.existsSync(filePath), `${path.relative(root, filePath)} must exist.`);
});

const doc = read(paths.doc);
const readinessGate = require(paths.readinessGate);
const previewContract = require(paths.previewContract);
const regressionContract = require(paths.regressionContract);
const index = read(paths.index);
const app = read(paths.app);
const server = read(paths.server);
const packageData = JSON.parse(read(paths.packageJson));
const qaSuite = read(paths.qaSuite);

assert(readinessGate.COMMUNICATIONS_PROVIDER_EXECUTION_READINESS_GATE.phase51Blocked === true, "Phase 50A readiness gate must still block Phase 51.");
assert(previewContract.COMMUNICATION_PREVIEW_CONTRACT.executionEnabled === false, "Phase 51A preview contract must remain non-executing.");
assert(regressionContract.COMMUNICATIONS_NO_EXECUTION_REGRESSION_CONTRACT.executionAllowed === false, "Phase 51B regression contract must remain non-executing.");
assert(doc.includes("Phase 51C"), "doc must identify Phase 51C.");
assert(doc.includes("does not send, call, message, open providers, or change runtime behavior"), "doc must state no runtime communication execution.");

[
  "preparedActionId",
  "approvalRequestId",
  "auditEventId",
  "resolvedRecipient",
  "recipientDisplay",
  "providerDisplay",
  "actionTypeDisplay",
  "purposePreview",
  "languageConfirmation",
  "permissionState",
  "providerAvailabilityState",
  "domainRestrictionState",
  "explicitApprovalState",
  "cancellationAvailable",
  "executionEnabled: false",
  "providerOpenAllowed: false",
  "backgroundExecutionAllowed: false"
].forEach(term => {
  assert(doc.includes(term), `doc must document handoff precondition ${term}.`);
});

[
  "explicit",
  "action-specific",
  "provider-specific",
  "recipient-specific",
  "purpose-specific",
  "language-confirmed",
  "revocable before execution",
  "okay",
  "sure",
  "go ahead maybe",
  "silence"
].forEach(term => {
  assert(doc.includes(term), `doc must document approval requirement ${term}.`);
});

[
  "intent classification",
  "risk tier",
  "source surface",
  "selected provider",
  "selected action type",
  "recipient resolution",
  "purpose preview",
  "language confirmation",
  "permission state",
  "approval state",
  "cancellation state",
  "provider availability state",
  "domain restriction state",
  "blocked/fallback reason",
  "timestamp",
  "redacted payload summary"
].forEach(term => {
  assert(doc.includes(term), `doc must document audit field ${term}.`);
});

[
  "healthcare",
  "pharmacy",
  "emergency",
  "payments",
  "marketplace transactions",
  "transportation dispatch",
  "minors/family support"
].forEach(domain => {
  assert(doc.includes(domain), `doc must document domain restriction ${domain}.`);
});

[
  "execute communication",
  "open a communications provider",
  "contact a person or organization",
  "approve with vague language",
  "bypass audit",
  "bypass cancellation",
  "run provider actions in the background"
].forEach(boundary => {
  assert(doc.includes(boundary), `doc must document Standard User boundary ${boundary}.`);
});

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
  "sendMessage",
  "placeCall",
  "openWhatsApp",
  "openTelegram",
  "openPhone",
  "processPayment",
  "dispatchEmergency"
].forEach(forbidden => {
  assert(!doc.includes(forbidden), `approval/audit handoff doc must not introduce runtime behavior wording: ${forbidden}`);
});

[
  "NEXUS_COMMUNICATIONS_APPROVAL_AUDIT_HANDOFF_CONTRACT_PHASE_51C",
  "nexus-communications-approval-audit-handoff",
  "approvalAuditHandoff"
].forEach(runtimeHook => {
  assert(!index.includes(runtimeHook), `index.html must not load ${runtimeHook}.`);
  assert(!app.includes(runtimeHook), `app.js must not consume ${runtimeHook}.`);
  assert(!server.includes(runtimeHook), `server.js must not consume ${runtimeHook}.`);
});

assert(packageData.scripts["qa:nexus-communications-approval-audit-handoff-contract"] === "node scripts/nexus-communications-approval-audit-handoff-contract-qa.js", "package.json must expose qa:nexus-communications-approval-audit-handoff-contract.");
assert(qaSuite.includes("scripts/nexus-communications-approval-audit-handoff-contract-qa.js"), "qa-suite.js must include communications approval/audit handoff QA.");

console.log("[nexus-communications-approval-audit-handoff-contract-qa] passed");
