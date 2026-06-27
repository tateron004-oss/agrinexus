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

function assertRuntimeExcludes(source, terms, label) {
  for (const term of terms) {
    assert(!source.includes(term), `${label} must not runtime-load or activate Sprint V artifact: ${term}`);
  }
}

const docName = "NEXUS_SPRINT_V5_MARKETPLACE_INTELLIGENCE_LANE_CLOSEOUT.md";
const qaName = "nexus-sprint-v5-marketplace-intelligence-lane-closeout-qa.js";

assert(exists("docs", docName), "Sprint V5 closeout doc must exist.");
assert(exists("scripts", qaName), "Sprint V5 QA script must exist.");

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
  "Sprint V5",
  "5d4fa9ffd680227769ad639fca176790567f7720",
  "documentation and deterministic QA only",
  "Sprint V Completion Summary",
  "What Is Active Now",
  "What Remains Inert",
  "No-Authority And No-Execution Guarantees",
  "Blocked Runtime Categories",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "Rollback Strategy",
  "Sprint W1 - Trust/Fraud/Risk Detection Runtime Activation Readiness Gate"
], "V5 closeout doc");

assertIncludes(doc, [
  "Marketplace Intelligence runtime activation readiness gate",
  "Marketplace Intelligence feature flag contract",
  "Marketplace Intelligence flag contract harness",
  "Marketplace Intelligence runtime absence regression guard",
  "Marketplace Intelligence lane closeout"
], "V5 sprint summary");

assertIncludes(doc, [
  "Marketplace Intelligence readiness is not runtime activation",
  "Marketplace Intelligence visibility readiness is not transaction, payment, counterparty, provider, shipping, or inventory authority",
  "marketplace metadata is not source authority, factual authority, price authority, availability authority, transaction authority, payment authority, seller authorization, buyer authorization, shipping authorization, user consent, provider approval, location consent, dispatch approval, or execution approval",
  "generated marketplace text cannot authorize, stage, buy, sell, order, reserve, guarantee, contact, pay, ship, dispatch, or execute an action by itself",
  "enabled: false",
  "visibleUiAllowed: false",
  "marketplaceReviewAllowed: false",
  "sourceBackedMarketplaceGuidancePreviewAllowed: false",
  "listingSummaryPreviewAllowed: false",
  "priceAvailabilitySummaryPreviewAllowed: false",
  "counterpartyEscalationPreviewAllowed: false",
  "marketplaceRuntimeAllowed: false",
  "liveMarketplaceAdvisorAllowed: false",
  "sourceRetrievalRuntimeAllowed: false",
  "buyExecutionAllowed: false",
  "sellExecutionAllowed: false",
  "orderCreationAllowed: false",
  "checkoutExecutionAllowed: false",
  "paymentExecutionAllowed: false",
  "marketplaceTransactionAllowed: false",
  "inventoryReservationAllowed: false",
  "priceGuaranteeClaimAllowed: false",
  "availabilityGuaranteeClaimAllowed: false",
  "buyerSellerContactAllowed: false",
  "providerConnectionClaimAllowed: false",
  "completedActionClaimAllowed: false",
  "shippingTransportationDispatchAllowed: false",
  "communicationExecutionAllowed: false",
  "locationSharingAllowed: false",
  "identityAccountProfileActionAllowed: false",
  "policyBypassAllowed: false",
  "confirmationBypassAllowed: false",
  "permissionBypassAllowed: false",
  "firstTurnExecutionAllowed: false",
  "laterTurnExecutionAllowed: false",
  "standardUserMarketplaceBrainMutationAllowed: false",
  "backendWriteAllowed: false",
  "storageWriteAllowed: false",
  "networkAllowed: false",
  "auditWriteAllowed: false",
  "executionAuthority: false",
  "noExecution: true",
  "unsafe authority attempts normalize back to no-execution values",
  "no action has been taken"
], "V5 no-authority and no-execution language");

assertIncludes(doc, [
  "active Marketplace Intelligence runtime",
  "live marketplace advisor",
  "marketplace intelligence runtime UI",
  "marketplace review buttons from Sprint V artifacts",
  "source-backed marketplace guidance runtime retrieval",
  "listing summary preview UI from Sprint V artifacts",
  "price availability summary preview UI from Sprint V artifacts",
  "counterparty escalation preview UI from Sprint V artifacts",
  "buy execution claims",
  "sell execution claims",
  "order creation claims",
  "checkout execution claims",
  "payment execution claims",
  "marketplace transaction claims",
  "inventory reservation claims",
  "price guarantee claims",
  "availability guarantee claims",
  "buyer or seller contact claims",
  "provider connection claims",
  "completed action claims",
  "shipping or transportation dispatch claims",
  "emergency dispatch claims",
  "location sharing claims",
  "communication execution claims",
  "account or profile mutation claims",
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
  "external navigation",
  "real pending action creation",
  "execution authority"
], "V5 blocked runtime categories");

const requiredDocs = [
  "NEXUS_SPRINT_V1_MARKETPLACE_INTELLIGENCE_RUNTIME_ACTIVATION_READINESS_GATE.md",
  "NEXUS_SPRINT_V2_MARKETPLACE_INTELLIGENCE_FEATURE_FLAG_CONTRACT.md",
  "NEXUS_SPRINT_V3_MARKETPLACE_INTELLIGENCE_FLAG_CONTRACT_HARNESS.md",
  "NEXUS_SPRINT_V4_MARKETPLACE_INTELLIGENCE_RUNTIME_ABSENCE_REGRESSION_GUARD.md",
  "NEXUS_MARKETPLACE_INTELLIGENCE_READINESS_CONTRACT_PHASE_74.md",
  "NEXUS_TRUST_FRAUD_RISK_DETECTION_READINESS_CONTRACT_PHASE_75.md"
];

for (const requiredDoc of requiredDocs) {
  assert(exists("docs", requiredDoc), `Sprint V5 requires prior or next-lane doc: ${requiredDoc}`);
}

const requiredScripts = [
  "nexus-sprint-v1-marketplace-intelligence-runtime-activation-readiness-gate-qa.js",
  "nexus-sprint-v2-marketplace-intelligence-feature-flag-contract-qa.js",
  "nexus-sprint-v3-marketplace-intelligence-flag-contract-harness-qa.js",
  "nexus-sprint-v4-marketplace-intelligence-runtime-absence-regression-guard-qa.js"
];

for (const requiredScript of requiredScripts) {
  assert(exists("scripts", requiredScript), `Sprint V5 requires prior Sprint V QA: ${requiredScript}`);
  assert(qaSuite.includes(`scripts/${requiredScript}`), `qa-suite must include prior Sprint V QA: ${requiredScript}`);
}

assert(exists("public", "nexus-marketplace-intelligence-readiness-contract.js"), "Sprint V5 requires Phase 74 Marketplace Intelligence readiness contract.");
assert(exists("public", "nexus-marketplace-intelligence-feature-flag.js"), "Sprint V5 requires V2 feature flag contract.");
assert(exists("fixtures", "nexus", "marketplace-intelligence-feature-flags.json"), "Sprint V5 requires V3 feature flag fixture.");
assert(exists("public", "nexus-trust-fraud-risk-detection-readiness-contract.js"), "Sprint V5 requires Phase 75 Trust/Fraud/Risk Detection readiness contract for the next safe lane.");

assertIncludes(readinessContract, [
  "MARKETPLACE_INTELLIGENCE_READINESS_CONTRACT",
  "marketplace-intelligence.readiness.phase_74",
  "MARKETPLACE_INTELLIGENCE_NO_EXECUTION_DEFAULTS",
  "createMarketplaceIntelligenceReadinessContract",
  "executionAllowed: false",
  "liveConnectorEnabled: false",
  "providerExecutionEnabled: false",
  "regulatedActionEnabled: false",
  "marketplace_transactions",
  "provider_contact",
  "payments"
], "Phase 74 Marketplace Intelligence readiness contract");

assertIncludes(featureFlagModule, [
  "DEFAULT_MARKETPLACE_INTELLIGENCE_FEATURE_FLAG_STATE",
  "NEXUS_MARKETPLACE_INTELLIGENCE_VISIBLE_ENABLED",
  "normalizeMarketplaceIntelligenceFeatureFlagState",
  "isMarketplaceIntelligenceVisibleFeatureEnabled",
  "executionAuthority",
  "noExecution"
], "V2 Marketplace Intelligence feature flag module");

assertIncludes(v3Harness, [
  "loadMarketplaceIntelligenceFlagFixtures",
  "validateMarketplaceIntelligenceFlagFixtures"
], "V3 Marketplace Intelligence harness");

assert.equal(DEFAULT_MARKETPLACE_INTELLIGENCE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_MARKETPLACE_INTELLIGENCE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
for (const field of protectedFields) {
  assert.equal(DEFAULT_MARKETPLACE_INTELLIGENCE_FEATURE_FLAG_STATE[field], false, `V5 default ${field} must remain false.`);
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

assert.equal(normalizedUnsafeAttempt.enabled, true);
assert.equal(normalizedUnsafeAttempt.visibleUiAllowed, true);
for (const field of protectedFields) {
  assert.equal(normalizedUnsafeAttempt[field], false, `V5 unsafe attempt for ${field} must normalize to false.`);
}
assert.equal(normalizedUnsafeAttempt.noExecution, true);

const fixtureResult = validateMarketplaceIntelligenceFlagFixtures(fixtures);
assert.equal(fixtureResult.ok, true, "V3 fixtures must remain valid.");
assert.equal(fixtureResult.count, 4, "V5 expects four V3 marketplace feature flag fixtures.");

const runtimeForbiddenTerms = [
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
  "contactMarketplaceCounterparty("
];

assertRuntimeExcludes(index, runtimeForbiddenTerms, "public/index.html");
assertRuntimeExcludes(app, runtimeForbiddenTerms, "public/app.js");
assertRuntimeExcludes(server, runtimeForbiddenTerms, "server.js");

const alias = "qa:nexus-sprint-v5-marketplace-intelligence-lane-closeout";
assert.equal(
  pkg.scripts[alias],
  "node scripts/nexus-sprint-v5-marketplace-intelligence-lane-closeout-qa.js",
  "package.json must expose Sprint V5 QA alias."
);
assert(qaSuite.includes("scripts/nexus-sprint-v5-marketplace-intelligence-lane-closeout-qa.js"), "qa-suite must include Sprint V5 QA.");

console.log("[nexus-sprint-v5-marketplace-intelligence-lane-closeout-qa] passed");
