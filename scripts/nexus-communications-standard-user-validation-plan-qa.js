const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  doc: path.join(root, "docs", "NEXUS_COMMUNICATIONS_STANDARD_USER_VALIDATION_PLAN_PHASE_51E.md"),
  readinessDoc: path.join(root, "docs", "NEXUS_COMMUNICATIONS_PROVIDER_EXECUTION_READINESS_GATE.md"),
  previewDoc: path.join(root, "docs", "NEXUS_COMMUNICATIONS_PREPARED_ACTION_PREVIEW_CONTRACT_PHASE_51A.md"),
  regressionDoc: path.join(root, "docs", "NEXUS_COMMUNICATIONS_NO_EXECUTION_REGRESSION_CONTRACT_PHASE_51B.md"),
  handoffDoc: path.join(root, "docs", "NEXUS_COMMUNICATIONS_APPROVAL_AUDIT_HANDOFF_CONTRACT_PHASE_51C.md"),
  fallbackDoc: path.join(root, "docs", "NEXUS_COMMUNICATIONS_PROVIDER_AVAILABILITY_FALLBACK_CONTRACT_PHASE_51D.md"),
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
    console.error(`[nexus-communications-standard-user-validation-plan-qa] ${message}`);
    process.exit(1);
  }
}

Object.values(paths).forEach(filePath => {
  assert(fs.existsSync(filePath), `${path.relative(root, filePath)} must exist.`);
});

const doc = read(paths.doc);
const readinessDoc = read(paths.readinessDoc);
const previewDoc = read(paths.previewDoc);
const regressionDoc = read(paths.regressionDoc);
const handoffDoc = read(paths.handoffDoc);
const fallbackDoc = read(paths.fallbackDoc);
const readinessGate = require(paths.readinessGate);
const previewContract = require(paths.previewContract);
const regressionContract = require(paths.regressionContract);
const index = read(paths.index);
const app = read(paths.app);
const server = read(paths.server);
const packageData = JSON.parse(read(paths.packageJson));
const qaSuite = read(paths.qaSuite);

assert(readinessDoc.includes("Phase 50A"), "Phase 50A doc must remain present.");
assert(previewDoc.includes("Phase 51A"), "Phase 51A doc must remain present.");
assert(regressionDoc.includes("Phase 51B"), "Phase 51B doc must remain present.");
assert(handoffDoc.includes("Phase 51C"), "Phase 51C doc must remain present.");
assert(fallbackDoc.includes("Phase 51D"), "Phase 51D doc must remain present.");
assert(readinessGate.COMMUNICATIONS_PROVIDER_EXECUTION_READINESS_GATE.phase51Blocked === true, "Phase 50A readiness gate must still block Phase 51.");
assert(previewContract.COMMUNICATION_PREVIEW_CONTRACT.executionEnabled === false, "Phase 51A preview contract must remain non-executing.");
assert(regressionContract.COMMUNICATIONS_NO_EXECUTION_REGRESSION_CONTRACT.executionAllowed === false, "Phase 51B regression contract must remain non-executing.");
assert(doc.includes("Phase 51E"), "doc must identify Phase 51E.");
assert(doc.includes("safe inert form"), "doc must state Phase 51 completion is inert.");

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
  "Call my emergency contact",
  "okay",
  "yes",
  "confirm",
  "do it"
].forEach(prompt => {
  assert(doc.includes(prompt), `Standard User validation prompt must include ${prompt}.`);
});

[
  "clarify the recipient",
  "ask for missing contact details",
  "provider connection is required",
  "non-executing review summary",
  "require explicit approval",
  "provider availability is not yet active",
  "preserve cancellation"
].forEach(expected => {
  assert(doc.includes(expected), `doc must document expected safe behavior ${expected}.`);
});

[
  "place a call",
  "send a message",
  "open WhatsApp",
  "open Telegram",
  "open phone, SMS, or email",
  "open arbitrary provider URLs",
  "contact a buyer",
  "execute from a vague confirmation",
  "execute from an orphan confirmation",
  "continue in the background",
  "hide the provider handoff",
  "claim the action was completed"
].forEach(boundary => {
  assert(doc.includes(boundary), `doc must document prohibited behavior ${boundary}.`);
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
  assert(doc.includes(domain), `doc must document high-risk validation domain ${domain}.`);
});

[
  "node server.js",
  "http://127.0.0.1:4182/",
  "Start as User",
  "no browser provider opens",
  "no native provider opens",
  "no background communication",
  "browser console"
].forEach(check => {
  assert(doc.includes(check), `doc must document browser checklist item ${check}.`);
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
  assert(!doc.includes(forbidden), `validation plan must not introduce runtime behavior wording: ${forbidden}`);
});

[
  "NEXUS_COMMUNICATIONS_STANDARD_USER_VALIDATION_PLAN_PHASE_51E",
  "nexus-communications-standard-user-validation",
  "communicationsStandardUserValidation"
].forEach(runtimeHook => {
  assert(!index.includes(runtimeHook), `index.html must not load ${runtimeHook}.`);
  assert(!app.includes(runtimeHook), `app.js must not consume ${runtimeHook}.`);
  assert(!server.includes(runtimeHook), `server.js must not consume ${runtimeHook}.`);
});

assert(packageData.scripts["qa:nexus-communications-standard-user-validation-plan"] === "node scripts/nexus-communications-standard-user-validation-plan-qa.js", "package.json must expose qa:nexus-communications-standard-user-validation-plan.");
assert(qaSuite.includes("scripts/nexus-communications-standard-user-validation-plan-qa.js"), "qa-suite.js must include communications Standard User validation plan QA.");

console.log("[nexus-communications-standard-user-validation-plan-qa] passed");
