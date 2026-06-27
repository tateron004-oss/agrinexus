const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  DEFAULT_MARKETPLACE_INTELLIGENCE_FEATURE_FLAG_STATE,
  normalizeMarketplaceIntelligenceFeatureFlagState
} = require("../public/nexus-marketplace-intelligence-feature-flag.js");
const {
  protectedFields,
  loadMarketplaceIntelligenceFlagFixtures,
  validateMarketplaceIntelligenceFlagFixtures
} = require("./nexus-sprint-v3-marketplace-intelligence-flag-contract-harness.js");

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

const docName = "NEXUS_SPRINT_V4_MARKETPLACE_INTELLIGENCE_RUNTIME_ABSENCE_REGRESSION_GUARD.md";
const qaName = "nexus-sprint-v4-marketplace-intelligence-runtime-absence-regression-guard-qa.js";

assert(exists("docs", docName), "Sprint V4 absence guard doc must exist.");
assert(exists("scripts", qaName), "Sprint V4 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const readinessContract = read("public", "nexus-marketplace-intelligence-readiness-contract.js");
const featureFlagModule = read("public", "nexus-marketplace-intelligence-feature-flag.js");
const v3Harness = read("scripts", "nexus-sprint-v3-marketplace-intelligence-flag-contract-harness.js");
const fixtures = loadMarketplaceIntelligenceFlagFixtures();

assertIncludes(doc, [
  "Sprint V4",
  "fa87449589b4a1b86632bb63ed9e966715c13415",
  "documentation and QA only",
  "Purpose",
  "Runtime Absence Requirements",
  "Blocked Runtime Behavior",
  "Required Contract Invariants",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "QA Expectations",
  "Sprint V5 - Marketplace Intelligence Lane Closeout"
], "V4 absence guard doc");

assertIncludes(doc, [
  "V1 Marketplace Intelligence runtime activation readiness gate",
  "V2 Marketplace Intelligence feature flag contract",
  "V3 Marketplace Intelligence flag contract harness",
  "Phase 74 Marketplace Intelligence readiness contract"
], "V4 protected artifacts");

assertIncludes(doc, [
  "public/nexus-marketplace-intelligence-readiness-contract.js",
  "public/nexus-marketplace-intelligence-feature-flag.js",
  "scripts/nexus-sprint-v3-marketplace-intelligence-flag-contract-harness.js",
  "fixtures/nexus/marketplace-intelligence-feature-flags.json",
  "Sprint V QA scripts"
], "V4 runtime absence artifact list");

assertIncludes(doc, [
  "It intentionally does not ban generic marketplace words such as",
  "marketplace",
  "AgriTrade",
  "trade",
  "crop",
  "sell",
  "buyer",
  "seller",
  "price",
  "listing",
  "browse",
  "support"
], "V4 generic wording exception");

assertIncludes(doc, [
  "active marketplace intelligence runtime",
  "live marketplace advisor",
  "source retrieval runtime",
  "buy execution",
  "sell execution",
  "order creation",
  "checkout execution",
  "payment execution",
  "marketplace transaction completion",
  "inventory reservation",
  "price guarantee claims",
  "availability guarantee claims",
  "buyer or seller contact",
  "provider connection claims",
  "completed action claims",
  "standard user marketplace brain mutation",
  "source-backed marketplace claims without sources",
  "stale data claims without freshness labels",
  "confidence-free source-backed claims",
  "unsupported live data claims",
  "event handlers",
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
  "provider handoff",
  "native bridge dispatch",
  "calls",
  "messages",
  "WhatsApp, Telegram, SMS, or email sending",
  "shipping or transportation dispatch",
  "emergency dispatch",
  "location sharing",
  "account or profile mutation",
  "external navigation",
  "real pending action creation",
  "execution authority"
], "V4 blocked runtime behavior");

for (const requiredPath of [
  ["docs", "NEXUS_SPRINT_V1_MARKETPLACE_INTELLIGENCE_RUNTIME_ACTIVATION_READINESS_GATE.md"],
  ["docs", "NEXUS_SPRINT_V2_MARKETPLACE_INTELLIGENCE_FEATURE_FLAG_CONTRACT.md"],
  ["docs", "NEXUS_SPRINT_V3_MARKETPLACE_INTELLIGENCE_FLAG_CONTRACT_HARNESS.md"],
  ["docs", "NEXUS_MARKETPLACE_INTELLIGENCE_READINESS_CONTRACT_PHASE_74.md"],
  ["public", "nexus-marketplace-intelligence-readiness-contract.js"],
  ["public", "nexus-marketplace-intelligence-feature-flag.js"],
  ["fixtures", "nexus", "marketplace-intelligence-feature-flags.json"],
  ["scripts", "nexus-sprint-v3-marketplace-intelligence-flag-contract-harness.js"]
]) {
  assert(exists(...requiredPath), `V4 requires artifact: ${requiredPath.join("/")}`);
}

const runtime = [index, app, server].join("\n");
for (const term of [
  "nexus-marketplace-intelligence-readiness-contract.js",
  "nexus-marketplace-intelligence-feature-flag.js",
  "nexus-sprint-v3-marketplace-intelligence-flag-contract-harness",
  "marketplace-intelligence-feature-flags.json",
  "NEXUS_MARKETPLACE_INTELLIGENCE_VISIBLE_ENABLED",
  "NexusMarketplaceIntelligenceFeatureFlagContract",
  "normalizeMarketplaceIntelligenceFeatureFlagState",
  "isMarketplaceIntelligenceVisibleFeatureEnabled",
  "marketplaceIntelligenceRuntime",
  "liveMarketplaceAdvisor",
  "sourceRetrievalRuntime",
  "executeMarketplacePurchase(",
  "executeMarketplaceSale(",
  "createMarketplaceOrder(",
  "executeMarketplaceCheckout(",
  "processMarketplacePayment(",
  "contactMarketplaceCounterparty(",
  "nexus-sprint-v4-marketplace-intelligence-runtime-absence-regression-guard"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Marketplace Intelligence lane artifact: ${term}`);
}

assertIncludes(readinessContract, [
  "MARKETPLACE_INTELLIGENCE_READINESS_CONTRACT",
  "marketplace-intelligence.readiness.phase_74",
  "MARKETPLACE_INTELLIGENCE_NO_EXECUTION_DEFAULTS",
  "createMarketplaceIntelligenceReadinessContract",
  "executionAllowed: false",
  "liveConnectorEnabled: false",
  "providerExecutionEnabled: false",
  "regulatedActionEnabled: false",
  "provider_contact",
  "marketplace_transactions",
  "identity",
  "regulated_execution"
], "Phase 74 Marketplace Intelligence readiness contract");

assert.equal(DEFAULT_MARKETPLACE_INTELLIGENCE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_MARKETPLACE_INTELLIGENCE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
for (const field of protectedFields) {
  assert.equal(DEFAULT_MARKETPLACE_INTELLIGENCE_FEATURE_FLAG_STATE[field], false, `V4 default ${field} must remain false.`);
}
assert.equal(DEFAULT_MARKETPLACE_INTELLIGENCE_FEATURE_FLAG_STATE.noExecution, true);

const normalizedUnsafeAttempt = normalizeMarketplaceIntelligenceFeatureFlagState({
  enabled: true,
  visibleUiAllowed: true,
  marketplaceReviewAllowed: true,
  sourceBackedMarketplaceGuidancePreviewAllowed: true,
  listingSummaryPreviewAllowed: true,
  priceAvailabilitySummaryPreviewAllowed: true,
  counterpartyEscalationPreviewAllowed: true,
  marketplaceRuntimeAllowed: true,
  liveMarketplaceAdvisorAllowed: true,
  sourceRetrievalRuntimeAllowed: true,
  buyExecutionAllowed: true,
  sellExecutionAllowed: true,
  orderCreationAllowed: true,
  checkoutExecutionAllowed: true,
  paymentExecutionAllowed: true,
  marketplaceTransactionAllowed: true,
  inventoryReservationAllowed: true,
  priceGuaranteeClaimAllowed: true,
  availabilityGuaranteeClaimAllowed: true,
  buyerSellerContactAllowed: true,
  providerConnectionClaimAllowed: true,
  completedActionClaimAllowed: true,
  shippingTransportationDispatchAllowed: true,
  communicationExecutionAllowed: true,
  locationSharingAllowed: true,
  identityAccountProfileActionAllowed: true,
  policyBypassAllowed: true,
  confirmationBypassAllowed: true,
  permissionBypassAllowed: true,
  firstTurnExecutionAllowed: true,
  laterTurnExecutionAllowed: true,
  standardUserMarketplaceBrainMutationAllowed: true,
  backendWriteAllowed: true,
  storageWriteAllowed: true,
  networkAllowed: true,
  auditWriteAllowed: true,
  executionAuthority: true,
  noExecution: false
});

assert.equal(normalizedUnsafeAttempt.visibleUiAllowed, true);
for (const field of protectedFields) {
  assert.equal(normalizedUnsafeAttempt[field], false, `Unsafe attempt must normalize ${field} back to false.`);
}
assert.equal(normalizedUnsafeAttempt.noExecution, true);

const fixtureResult = validateMarketplaceIntelligenceFlagFixtures(fixtures);
assert.equal(fixtureResult.ok, true, "V3 fixtures must remain valid.");
assert.equal(fixtureResult.count, 4, "V3 fixtures must remain complete.");

for (const source of [featureFlagModule, v3Harness]) {
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
    "executeMarketplaceCheckout(",
    "processMarketplacePayment(",
    "contactMarketplaceCounterparty("
  ]) {
    assert(!source.includes(term), `Sprint V contract/harness must not include runtime API: ${term}`);
  }
}

const alias = "qa:nexus-sprint-v4-marketplace-intelligence-runtime-absence-regression-guard";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint V4 QA.");

console.log("[nexus-sprint-v4-marketplace-intelligence-runtime-absence-regression-guard-qa] passed");
