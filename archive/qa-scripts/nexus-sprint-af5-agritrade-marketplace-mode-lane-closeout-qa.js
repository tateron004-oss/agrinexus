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

const docName = "NEXUS_SPRINT_AF5_AGRITRADE_MARKETPLACE_MODE_LANE_CLOSEOUT.md";
const qaName = "nexus-sprint-af5-agritrade-marketplace-mode-lane-closeout-qa.js";

assert(exists("docs", docName), "Sprint AF5 lane closeout doc must exist.");
assert(exists("scripts", qaName), "Sprint AF5 QA script must exist.");

const doc = read("docs", docName);
const af4Doc = read("docs", "NEXUS_SPRINT_AF4_AGRITRADE_MARKETPLACE_MODE_RUNTIME_ABSENCE_REGRESSION_GUARD.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const readinessContract = read("public", "nexus-agritrade-marketplace-mode-readiness-contract.js");
const featureFlagModule = read("public", "nexus-agritrade-marketplace-mode-feature-flag.js");
const harness = read("scripts", "nexus-sprint-af3-agritrade-marketplace-mode-flag-contract-harness.js");
const fixtures = loadAgritradeMarketplaceModeFlagFixtures();

assertIncludes(doc, [
  "Sprint AF5",
  "19248b8a3861aeae20df659df092ab3b7dcbe858",
  "documentation and deterministic QA only",
  "Sprint AF Completion Summary",
  "What Is Active Now",
  "What Remains Inert",
  "No-Authority And No-Execution Guarantees",
  "Blocked Runtime Categories",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "Rollback Strategy",
  "Sprint AG1 - Field Agent Mode Runtime Activation Readiness Gate"
], "AF5 closeout doc");

assertIncludes(doc, [
  "AF1 | AgriTrade Marketplace Mode runtime activation readiness gate | Complete",
  "AF2 | AgriTrade Marketplace Mode feature flag contract | Complete",
  "AF3 | AgriTrade Marketplace Mode flag contract harness | Complete",
  "AF4 | AgriTrade Marketplace Mode runtime absence regression guard | Complete",
  "AF5 | AgriTrade Marketplace Mode lane closeout | Complete"
], "AF5 completion table");

assertIncludes(af4Doc, [
  "Sprint AF5 - AgriTrade Marketplace Mode Lane Closeout"
], "AF4 next sprint recommendation");

for (const requiredPath of [
  ["docs", "NEXUS_SPRINT_AF1_AGRITRADE_MARKETPLACE_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md"],
  ["docs", "NEXUS_SPRINT_AF2_AGRITRADE_MARKETPLACE_MODE_FEATURE_FLAG_CONTRACT.md"],
  ["docs", "NEXUS_SPRINT_AF3_AGRITRADE_MARKETPLACE_MODE_FLAG_CONTRACT_HARNESS.md"],
  ["docs", "NEXUS_SPRINT_AF4_AGRITRADE_MARKETPLACE_MODE_RUNTIME_ABSENCE_REGRESSION_GUARD.md"],
  ["docs", "NEXUS_AGRITRADE_MARKETPLACE_MODE_READINESS_CONTRACT_PHASE_84.md"],
  ["docs", "NEXUS_FIELD_AGENT_MODE_READINESS_CONTRACT_PHASE_85.md"],
  ["public", "nexus-agritrade-marketplace-mode-readiness-contract.js"],
  ["public", "nexus-agritrade-marketplace-mode-feature-flag.js"],
  ["public", "nexus-field-agent-mode-readiness-contract.js"],
  ["fixtures", "nexus", "agritrade-marketplace-mode-feature-flags.json"],
  ["scripts", "nexus-sprint-af1-agritrade-marketplace-mode-runtime-activation-readiness-gate-qa.js"],
  ["scripts", "nexus-sprint-af2-agritrade-marketplace-mode-feature-flag-contract-qa.js"],
  ["scripts", "nexus-sprint-af3-agritrade-marketplace-mode-flag-contract-harness-qa.js"],
  ["scripts", "nexus-sprint-af4-agritrade-marketplace-mode-runtime-absence-regression-guard-qa.js"],
  ["scripts", "nexus-agritrade-marketplace-mode-readiness-contract-qa.js"],
  ["scripts", "nexus-field-agent-mode-readiness-contract-qa.js"]
]) {
  assert(exists(...requiredPath), `AF5 requires artifact: ${requiredPath.join("/")}`);
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
  "no auto buy/sell"
], "Phase 84 AgriTrade Marketplace Mode readiness contract");

assert.equal(DEFAULT_AGRITRADE_MARKETPLACE_MODE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_AGRITRADE_MARKETPLACE_MODE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
for (const field of protectedFields) {
  assert.equal(DEFAULT_AGRITRADE_MARKETPLACE_MODE_FEATURE_FLAG_STATE[field], false, `AF5 default ${field} must remain false.`);
  assert(doc.includes(`${field}: false`), `AF5 doc must document ${field}: false.`);
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
  "nexus-sprint-af5-agritrade-marketplace-mode-lane-closeout"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate AgriTrade Marketplace Mode lane artifact: ${term}`);
}

for (const source of [featureFlagModule, harness]) {
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

const alias = "qa:nexus-sprint-af5-agritrade-marketplace-mode-lane-closeout";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AF5 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-af1-agritrade-marketplace-mode-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint AF1 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-af2-agritrade-marketplace-mode-feature-flag-contract-qa.js"), "qa-suite must continue to include Sprint AF2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-af3-agritrade-marketplace-mode-flag-contract-harness-qa.js"), "qa-suite must continue to include Sprint AF3 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-af4-agritrade-marketplace-mode-runtime-absence-regression-guard-qa.js"), "qa-suite must continue to include Sprint AF4 QA.");
assert(qaSuite.includes("scripts/nexus-agritrade-marketplace-mode-readiness-contract-qa.js"), "qa-suite must continue to include Phase 84 QA.");
assert(qaSuite.includes("scripts/nexus-field-agent-mode-readiness-contract-qa.js"), "qa-suite must continue to include Phase 85 QA.");

console.log("[nexus-sprint-af5-agritrade-marketplace-mode-lane-closeout-qa] passed");
