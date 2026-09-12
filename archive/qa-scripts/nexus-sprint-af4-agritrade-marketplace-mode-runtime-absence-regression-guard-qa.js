const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  DEFAULT_AGRITRADE_MARKETPLACE_MODE_FEATURE_FLAG_STATE,
  normalizeAgritradeMarketplaceModeFeatureFlagState
} = require("../public/nexus-agritrade-marketplace-mode-feature-flag.js");
const {
  protectedFields,
  loadAgritradeMarketplaceModeFlagFixtures,
  validateAgritradeMarketplaceModeFlagFixtures
} = require("./nexus-sprint-af3-agritrade-marketplace-mode-flag-contract-harness.js");

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

const docName = "NEXUS_SPRINT_AF4_AGRITRADE_MARKETPLACE_MODE_RUNTIME_ABSENCE_REGRESSION_GUARD.md";
const qaName = "nexus-sprint-af4-agritrade-marketplace-mode-runtime-absence-regression-guard-qa.js";

assert(exists("docs", docName), "Sprint AF4 absence guard doc must exist.");
assert(exists("scripts", qaName), "Sprint AF4 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const readinessContract = read("public", "nexus-agritrade-marketplace-mode-readiness-contract.js");
const featureFlagModule = read("public", "nexus-agritrade-marketplace-mode-feature-flag.js");
const af3Harness = read("scripts", "nexus-sprint-af3-agritrade-marketplace-mode-flag-contract-harness.js");
const fixtures = loadAgritradeMarketplaceModeFlagFixtures();

assertIncludes(doc, [
  "Sprint AF4",
  "0c87753b63a67927ab85e89a42ec1302efc3e2fb",
  "documentation and QA only",
  "Purpose",
  "Runtime Absence Requirements",
  "Blocked Runtime Behavior",
  "Required Contract Invariants",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "QA Expectations",
  "Sprint AF5 - AgriTrade Marketplace Mode Lane Closeout"
], "AF4 absence guard doc");

assertIncludes(doc, [
  "AF1 AgriTrade Marketplace Mode runtime activation readiness gate",
  "AF2 AgriTrade Marketplace Mode feature flag contract",
  "AF3 AgriTrade Marketplace Mode flag contract harness",
  "Phase 84 AgriTrade Marketplace Mode readiness contract"
], "AF4 protected artifacts");

assertIncludes(doc, [
  "public/nexus-agritrade-marketplace-mode-readiness-contract.js",
  "public/nexus-agritrade-marketplace-mode-feature-flag.js",
  "scripts/nexus-sprint-af3-agritrade-marketplace-mode-flag-contract-harness.js",
  "fixtures/nexus/agritrade-marketplace-mode-feature-flags.json",
  "Sprint AF QA scripts"
], "AF4 runtime absence artifact list");

assertIncludes(doc, [
  "It intentionally does not ban generic health, telehealth, clinic",
  "provider",
  "training",
  "jobs",
  "education",
  "learning",
  "support",
  "marketplace",
  "agriculture",
  "crop",
  "farmer",
  "trade",
  "AgriTrade"
], "AF4 generic wording exception");

assertIncludes(doc, [
  "active AgriTrade Marketplace Mode runtime",
  "live AgriTrade Marketplace Mode runtime",
  "marketplace connector runtime",
  "buyer connector runtime",
  "seller connector runtime",
  "listing connector runtime",
  "quote connector runtime",
  "order connector runtime",
  "inventory connector runtime",
  "payment connector runtime",
  "escrow connector runtime",
  "logistics connector runtime",
  "identity connector runtime",
  "communications connector runtime",
  "transportation connector runtime",
  "health connector runtime",
  "buy execution",
  "sell execution",
  "order creation",
  "quote acceptance",
  "listing publication",
  "buyer contact",
  "seller contact",
  "marketplace partner contact",
  "payment execution",
  "escrow execution",
  "shipment dispatch",
  "marketplace transaction execution",
  "buyer connection claims",
  "seller connection claims",
  "marketplace partner connection claims",
  "completed action claims",
  "typed route mutation",
  "voice route mutation",
  "policy bypass",
  "confirmation bypass",
  "permission bypass",
  "permission prompts",
  "audit writes",
  "backend writes",
  "localStorage or sessionStorage writes",
  "fetch or network calls",
  "buyer handoff",
  "seller handoff",
  "marketplace partner handoff",
  "payment partner handoff",
  "logistics partner handoff",
  "native bridge dispatch",
  "calls",
  "messages",
  "WhatsApp, Telegram, SMS, or email sending",
  "external navigation",
  "real pending action creation",
  "execution authority"
], "AF4 blocked runtime behavior");

for (const requiredPath of [
  ["docs", "NEXUS_SPRINT_AF1_AGRITRADE_MARKETPLACE_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md"],
  ["docs", "NEXUS_SPRINT_AF2_AGRITRADE_MARKETPLACE_MODE_FEATURE_FLAG_CONTRACT.md"],
  ["docs", "NEXUS_SPRINT_AF3_AGRITRADE_MARKETPLACE_MODE_FLAG_CONTRACT_HARNESS.md"],
  ["docs", "NEXUS_AGRITRADE_MARKETPLACE_MODE_READINESS_CONTRACT_PHASE_84.md"],
  ["public", "nexus-agritrade-marketplace-mode-readiness-contract.js"],
  ["public", "nexus-agritrade-marketplace-mode-feature-flag.js"],
  ["fixtures", "nexus", "agritrade-marketplace-mode-feature-flags.json"],
  ["scripts", "nexus-sprint-af3-agritrade-marketplace-mode-flag-contract-harness.js"]
]) {
  assert(exists(...requiredPath), `AF4 requires artifact: ${requiredPath.join("/")}`);
}

const runtime = [index, app, server].join("\n");
for (const term of [
  "nexus-agritrade-marketplace-mode-readiness-contract.js",
  "nexus-agritrade-marketplace-mode-feature-flag.js",
  "nexus-sprint-af3-agritrade-marketplace-mode-flag-contract-harness",
  "agritrade-marketplace-mode-feature-flags.json",
  "NEXUS_AGRITRADE_MARKETPLACE_MODE_VISIBLE_ENABLED",
  "NexusAgritradeMarketplaceModeFeatureFlagContract",
  "normalizeAgritradeMarketplaceModeFeatureFlagState",
  "isAgritradeMarketplaceModeVisibleFeatureEnabled",
  "agritradeMarketplaceModeFeatureFlag",
  "liveAgritradeMarketplaceModeRuntime",
  "marketplaceConnectorRuntime",
  "buyerConnectorRuntime",
  "sellerConnectorRuntime",
  "listingConnectorRuntime",
  "quoteConnectorRuntime",
  "orderConnectorRuntime",
  "inventoryConnectorRuntime",
  "paymentConnectorRuntime",
  "escrowConnectorRuntime",
  "logisticsConnectorRuntime",
  "executeMarketplacePurchase(",
  "executeMarketplaceSale(",
  "createMarketplaceOrder(",
  "acceptMarketplaceQuote(",
  "publishMarketplaceListing(",
  "contactMarketplaceBuyer(",
  "contactMarketplaceSeller(",
  "processMarketplacePayment(",
  "dispatchShipment(",
  "nexus-sprint-af4-agritrade-marketplace-mode-runtime-absence-regression-guard"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate AgriTrade Marketplace Mode lane artifact: ${term}`);
}

assertIncludes(readinessContract, [
  "AGRITRADE_MARKETPLACE_MODE_READINESS_CONTRACT",
  "agritrade-marketplace-mode.readiness.phase_84",
  "AGRITRADE_MARKETPLACE_MODE_NO_EXECUTION_DEFAULTS",
  "createAgritradeMarketplaceModeReadinessContract",
  "\"executionAllowed\": false",
  "\"liveConnectorEnabled\": false",
  "\"providerExecutionEnabled\": false",
  "\"regulatedActionEnabled\": false",
  "communications",
  "identity",
  "payments",
  "marketplace_transactions",
  "emergency",
  "regulated_execution"
], "Phase 84 AgriTrade Marketplace Mode readiness contract");

assert.equal(DEFAULT_AGRITRADE_MARKETPLACE_MODE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_AGRITRADE_MARKETPLACE_MODE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
for (const field of protectedFields) {
  assert.equal(DEFAULT_AGRITRADE_MARKETPLACE_MODE_FEATURE_FLAG_STATE[field], false, `AF4 default ${field} must remain false.`);
}
assert.equal(DEFAULT_AGRITRADE_MARKETPLACE_MODE_FEATURE_FLAG_STATE.noExecution, true);

const unsafeInput = {
  enabled: true,
  visibleUiAllowed: true,
  noExecution: false
};
for (const field of protectedFields) {
  unsafeInput[field] = true;
}
const normalizedUnsafeAttempt = normalizeAgritradeMarketplaceModeFeatureFlagState(unsafeInput);

assert.equal(normalizedUnsafeAttempt.visibleUiAllowed, true);
for (const field of protectedFields) {
  assert.equal(normalizedUnsafeAttempt[field], false, `Unsafe attempt must normalize ${field} back to false.`);
}
assert.equal(normalizedUnsafeAttempt.noExecution, true);

const fixtureResult = validateAgritradeMarketplaceModeFlagFixtures(fixtures);
assert.equal(fixtureResult.ok, true, "AF3 fixtures must remain valid.");
assert.equal(fixtureResult.count, 4, "AF3 fixtures must remain complete.");

for (const source of [featureFlagModule, af3Harness]) {
  for (const term of [
    "document.",
    "querySelector",
    "addEventListener",
    "fetch(",
    "XMLHttpRequest",
    "localStorage",
    "sessionStorage",
    "indexedDB",
    "navigator.credentials",
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
    "executeMarketplacePurchase(",
    "executeMarketplaceSale(",
    "createMarketplaceOrder(",
    "acceptMarketplaceQuote(",
    "publishMarketplaceListing(",
    "contactMarketplaceBuyer(",
    "contactMarketplaceSeller(",
    "processMarketplacePayment(",
    "dispatchShipment(",
    "dispatchTransportation(",
    "dispatchEmergency(",
    "sharePatientLocation("
  ]) {
    assert(!source.includes(term), `Sprint AF contract/harness must not include runtime API: ${term}`);
  }
}

const alias = "qa:nexus-sprint-af4-agritrade-marketplace-mode-runtime-absence-regression-guard";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AF4 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-af1-agritrade-marketplace-mode-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint AF1 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-af2-agritrade-marketplace-mode-feature-flag-contract-qa.js"), "qa-suite must continue to include Sprint AF2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-af3-agritrade-marketplace-mode-flag-contract-harness-qa.js"), "qa-suite must continue to include Sprint AF3 QA.");
assert(qaSuite.includes("scripts/nexus-agritrade-marketplace-mode-readiness-contract-qa.js"), "qa-suite must continue to include Phase 84 QA.");

console.log("[nexus-sprint-af4-agritrade-marketplace-mode-runtime-absence-regression-guard-qa] passed");
