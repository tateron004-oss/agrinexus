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

const docName = "NEXUS_SPRINT_X1_FARMER_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md";
const qaName = "nexus-sprint-x1-farmer-mode-runtime-activation-readiness-gate-qa.js";

assert(exists("docs", docName), "Sprint X1 readiness gate doc must exist.");
assert(exists("scripts", qaName), "Sprint X1 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const farmerContractSource = read("public", "nexus-farmer-mode-readiness-contract.js");
const farmerContract = require("../public/nexus-farmer-mode-readiness-contract.js");

assertIncludes(doc, [
  "Sprint X1",
  "08ef8fe86be3049391e97fffae3173ccb9defb0f",
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
  "Sprint X2 - Farmer Mode Feature Flag Contract"
], "X1 readiness doc");

assertIncludes(doc, [
  "Sprint W5 - Trust/Fraud/Risk Detection Lane Closeout",
  "Phase 76 - Farmer Mode Readiness Contract",
  "Farmer Mode readiness is also not source authority, agronomic advice authority, marketplace transaction authority, payment authority, buyer or seller contact authority, location consent, camera consent, medical authority, provider authority, product owner approval, user consent, audit approval, or execution authority"
], "X1 relationship section");

assertIncludes(doc, [
  "product owner approval for a Farmer Mode runtime change",
  "verified agriculture, extension, market, weather, or partner source",
  "source attribution",
  "freshness label",
  "confidence label",
  "local context boundary and uncertainty label",
  "user consent boundary",
  "role and permission check",
  "explicit user approval for high-risk or partner-dependent actions",
  "visible cancellation path",
  "audit decision record",
  "safe fallback path",
  "no unsupported live claim",
  "no completed action claim",
  "no medical diagnosis, prescription, telehealth, or pharmacy execution from Farmer Mode",
  "no marketplace buy, sell, order, payment, buyer contact, seller contact, shipment, or dispatch execution from Farmer Mode",
  "no location sharing without explicit permission and configured connector",
  "no camera or microphone activation without explicit permission and configured connector",
  "no communications execution",
  "regression suite coverage",
  "browser validation plan",
  "deterministic QA coverage"
], "X1 runtime activation preconditions");

assertIncludes(doc, [
  "active Farmer Mode runtime",
  "live agriculture connector activation",
  "live market source retrieval runtime",
  "source-backed agronomic claims without sources",
  "stale data claims without freshness labels",
  "confidence-free agriculture claims",
  "unsupported live data claims",
  "provider connection claims",
  "completed action claims",
  "medical diagnosis claims",
  "prescription or pharmacy execution claims",
  "telehealth action execution claims",
  "marketplace transaction claims",
  "buy execution claims",
  "sell execution claims",
  "order creation claims",
  "payment execution claims",
  "buyer or seller contact claims",
  "transportation dispatch claims",
  "emergency dispatch claims",
  "location sharing claims",
  "camera activation claims",
  "microphone activation claims",
  "account or profile mutation claims",
  "event handlers",
  "typed route mutation",
  "voice route mutation",
  "policy bypass from Farmer Mode metadata",
  "confirmation bypass from Farmer Mode metadata",
  "permission bypass from Farmer Mode metadata",
  "permission prompts",
  "audit writes",
  "backend writes",
  "localStorage or sessionStorage writes",
  "fetch or network calls",
  "provider handoff",
  "native bridge dispatch",
  "calls",
  "messages",
  "WhatsApp, Telegram, SMS, or email sending",
  "external navigation",
  "real pending action creation",
  "execution authority"
], "X1 blocked runtime behavior");

assertIncludes(doc, [
  "I can help prepare source-backed agriculture guidance",
  "I cannot buy, sell, pay, contact buyers or providers, share location, activate the camera, or take field actions without approved sources, permission, confirmation, and audit controls",
  "I diagnosed your crop.",
  "I sold your produce.",
  "I contacted the buyer.",
  "I placed the order.",
  "I scheduled transport.",
  "I shared your location.",
  "I opened your camera.",
  "I completed the action."
], "X1 safe copy boundary");

for (const requiredPath of [
  ["docs", "NEXUS_SPRINT_W5_TRUST_FRAUD_RISK_DETECTION_LANE_CLOSEOUT.md"],
  ["docs", "NEXUS_FARMER_MODE_READINESS_CONTRACT_PHASE_76.md"],
  ["public", "nexus-farmer-mode-readiness-contract.js"],
  ["scripts", "nexus-farmer-mode-readiness-contract-qa.js"]
]) {
  assert(exists(...requiredPath), `X1 requires artifact: ${requiredPath.join("/")}`);
}

assertIncludes(farmerContractSource, [
  "FARMER_MODE_READINESS_CONTRACT",
  "farmer-mode.readiness.phase_76",
  "FARMER_MODE_NO_EXECUTION_DEFAULTS",
  "createFarmerModeReadinessContract",
  "executionAllowed: false",
  "liveConnectorEnabled: false",
  "providerExecutionEnabled: false",
  "regulatedActionEnabled: false",
  "marketplace_transactions",
  "provider_contact",
  "transportation_dispatch"
], "Phase 76 Farmer Mode readiness contract");

assert.equal(farmerContract.FARMER_MODE_READINESS_CONTRACT.readinessStatus, "blocked");
assert.equal(farmerContract.FARMER_MODE_READINESS_CONTRACT.riskTier, "controlled");
assert.equal(farmerContract.FARMER_MODE_READINESS_CONTRACT.liveConnectorEnabled, false);
assert.equal(farmerContract.FARMER_MODE_READINESS_CONTRACT.providerExecutionEnabled, false);
assert.equal(farmerContract.FARMER_MODE_READINESS_CONTRACT.regulatedActionEnabled, false);
assert.equal(farmerContract.FARMER_MODE_READINESS_CONTRACT.executionAllowed, false);
assert.equal(farmerContract.FARMER_MODE_READINESS_CONTRACT.liveActionEnabled, false);

const sample = farmerContract.createFarmerModeReadinessContract({
  actionType: "prepare_farmer_mode_summary",
  liveConnectorEnabled: true,
  providerExecutionEnabled: true,
  regulatedActionEnabled: true,
  executionAllowed: true,
  liveActionEnabled: true
});
assert.equal(sample.actionType, "prepare_farmer_mode_summary");
assert.equal(sample.phase, "76");
assert.equal(sample.readinessStatus, "blocked");
assert.equal(sample.liveConnectorEnabled, false);
assert.equal(sample.providerExecutionEnabled, false);
assert.equal(sample.regulatedActionEnabled, false);
assert.equal(sample.executionAllowed, false);
assert.equal(sample.liveActionEnabled, false);

const runtime = [index, app, server].join("\n");
for (const term of [
  "nexus-farmer-mode-readiness-contract.js",
  "NexusFarmerModeReadinessContract",
  "farmer-mode.readiness.phase_76",
  "FARMER_MODE_READINESS_CONTRACT",
  "farmerModeRuntime",
  "liveFarmerModeRuntime",
  "farmerModeFeatureFlag",
  "activateFarmerMode(",
  "executeFarmerMode(",
  "executeCropDiagnosis(",
  "executeMarketplaceSale(",
  "executeMarketplacePurchase(",
  "contactMarketplaceBuyer(",
  "contactMarketplaceSeller(",
  "shareFarmLocation(",
  "openCropCamera(",
  "dispatchFieldAgent(",
  "nexus-sprint-x1-farmer-mode-runtime-activation-readiness-gate"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Farmer Mode lane artifact: ${term}`);
}

for (const term of [
  "fetch(",
  "XMLHttpRequest",
  "EventSource",
  "WebSocket",
  "localStorage",
  "sessionStorage",
  "indexedDB",
  "window.location",
  "document.location",
  "addEventListener",
  "onclick",
  "execute(",
  "dispatch(",
  "openProvider(",
  "sendMessage(",
  "makeCall(",
  "processPayment(",
  "requestPermission("
]) {
  assert(!farmerContractSource.includes(term), `Farmer Mode readiness contract must not include runtime behavior: ${term}`);
}

const alias = "qa:nexus-sprint-x1-farmer-mode-runtime-activation-readiness-gate";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint X1 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-w5-trust-fraud-risk-detection-lane-closeout-qa.js"), "qa-suite must continue to include Sprint W5 QA.");
assert(qaSuite.includes("scripts/nexus-farmer-mode-readiness-contract-qa.js"), "qa-suite must continue to include Phase 76 QA.");

console.log("[nexus-sprint-x1-farmer-mode-runtime-activation-readiness-gate-qa] passed");
