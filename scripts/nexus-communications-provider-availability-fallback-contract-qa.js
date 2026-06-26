const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  doc: path.join(root, "docs", "NEXUS_COMMUNICATIONS_PROVIDER_AVAILABILITY_FALLBACK_CONTRACT_PHASE_51D.md"),
  readinessGate: path.join(root, "public", "nexus-communications-provider-execution-readiness-gate.js"),
  previewContract: path.join(root, "public", "nexus-communications-prepared-action-preview-contract.js"),
  regressionContract: path.join(root, "public", "nexus-communications-no-execution-regression-contract.js"),
  handoffDoc: path.join(root, "docs", "NEXUS_COMMUNICATIONS_APPROVAL_AUDIT_HANDOFF_CONTRACT_PHASE_51C.md"),
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
    console.error(`[nexus-communications-provider-availability-fallback-contract-qa] ${message}`);
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
const handoffDoc = read(paths.handoffDoc);
const index = read(paths.index);
const app = read(paths.app);
const server = read(paths.server);
const packageData = JSON.parse(read(paths.packageJson));
const qaSuite = read(paths.qaSuite);

assert(readinessGate.COMMUNICATIONS_PROVIDER_EXECUTION_READINESS_GATE.phase51Blocked === true, "Phase 50A readiness gate must still block Phase 51.");
assert(previewContract.COMMUNICATION_PREVIEW_CONTRACT.executionEnabled === false, "Phase 51A preview contract must remain non-executing.");
assert(regressionContract.COMMUNICATIONS_NO_EXECUTION_REGRESSION_CONTRACT.executionAllowed === false, "Phase 51B regression contract must remain non-executing.");
assert(handoffDoc.includes("approvalRequestId"), "Phase 51C approval/audit handoff doc must remain present.");
assert(doc.includes("Phase 51D"), "doc must identify Phase 51D.");
assert(doc.includes("does not open providers or execute communications"), "doc must state no provider opening or execution.");

[
  "not_configured",
  "configured_not_verified",
  "verified_not_enabled",
  "enabled_for_preview_only",
  "enabled_pending_final_approval",
  "unavailable_region",
  "unsupported_language",
  "missing_credentials",
  "provider_outage",
  "blocked_by_domain_restriction",
  "blocked_by_policy"
].forEach(state => {
  assert(doc.includes(state), `doc must document availability state ${state}.`);
});

[
  "providerId",
  "providerDisplay",
  "providerType",
  "availabilityState",
  "regionSupport",
  "languageSupport",
  "credentialState",
  "policyState",
  "domainRestrictionState",
  "fallbackMessage",
  "userVisibleNextStep",
  "executionEnabled: false",
  "providerOpenAllowed: false",
  "backgroundExecutionAllowed: false"
].forEach(field => {
  assert(doc.includes(field), `doc must document availability field ${field}.`);
});

[
  "explain what connection is missing",
  "choose another safe channel",
  "prepared non-executing review summary",
  "verified provider integration is required",
  "preserve the cancellation path",
  "blocked/fallback audit event"
].forEach(outcome => {
  assert(doc.includes(outcome), `doc must document safe fallback outcome ${outcome}.`);
});

[
  "open an arbitrary URL",
  "infer an unsupported provider",
  "open WhatsApp or Telegram silently",
  "open phone/SMS/email silently",
  "contact a provider",
  "continue in the background",
  "claim a call or message was sent",
  "claim a provider is live"
].forEach(boundary => {
  assert(doc.includes(boundary), `doc must document prohibited fallback boundary ${boundary}.`);
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
  assert(doc.includes(domain), `doc must document restricted domain fallback ${domain}.`);
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
  assert(!doc.includes(forbidden), `provider availability fallback doc must not introduce runtime behavior wording: ${forbidden}`);
});

[
  "NEXUS_COMMUNICATIONS_PROVIDER_AVAILABILITY_FALLBACK_CONTRACT_PHASE_51D",
  "nexus-communications-provider-availability-fallback",
  "communicationsProviderAvailabilityFallback"
].forEach(runtimeHook => {
  assert(!index.includes(runtimeHook), `index.html must not load ${runtimeHook}.`);
  assert(!app.includes(runtimeHook), `app.js must not consume ${runtimeHook}.`);
  assert(!server.includes(runtimeHook), `server.js must not consume ${runtimeHook}.`);
});

assert(packageData.scripts["qa:nexus-communications-provider-availability-fallback-contract"] === "node scripts/nexus-communications-provider-availability-fallback-contract-qa.js", "package.json must expose qa:nexus-communications-provider-availability-fallback-contract.");
assert(qaSuite.includes("scripts/nexus-communications-provider-availability-fallback-contract-qa.js"), "qa-suite.js must include communications provider availability fallback QA.");

console.log("[nexus-communications-provider-availability-fallback-contract-qa] passed");
