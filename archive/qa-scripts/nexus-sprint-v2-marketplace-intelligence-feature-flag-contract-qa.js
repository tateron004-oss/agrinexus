const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  MARKETPLACE_INTELLIGENCE_FEATURE_FLAG_NAME,
  DEFAULT_MARKETPLACE_INTELLIGENCE_FEATURE_FLAG_STATE,
  PROTECTED_MARKETPLACE_INTELLIGENCE_FLAG_FIELDS,
  normalizeMarketplaceIntelligenceFeatureFlagState,
  isMarketplaceIntelligenceVisibleFeatureEnabled
} = require("../public/nexus-marketplace-intelligence-feature-flag.js");

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

const docName = "NEXUS_SPRINT_V2_MARKETPLACE_INTELLIGENCE_FEATURE_FLAG_CONTRACT.md";
const moduleName = "nexus-marketplace-intelligence-feature-flag.js";
const qaName = "nexus-sprint-v2-marketplace-intelligence-feature-flag-contract-qa.js";

assert(exists("docs", docName), "Sprint V2 feature flag contract doc must exist.");
assert(exists("public", moduleName), "Sprint V2 feature flag module must exist.");
assert(exists("scripts", qaName), "Sprint V2 QA script must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const readinessContract = read("public", "nexus-marketplace-intelligence-readiness-contract.js");
const v1Doc = read("docs", "NEXUS_SPRINT_V1_MARKETPLACE_INTELLIGENCE_RUNTIME_ACTIVATION_READINESS_GATE.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "Sprint V2",
  "ffd76fda829eb56958bba15953678d4eb0ff131b",
  "standalone inert contract module and deterministic QA only",
  "Feature Flag Name",
  "NEXUS_MARKETPLACE_INTELLIGENCE_VISIBLE_ENABLED",
  "Default State",
  "Contract Module",
  "Important Boundary",
  "Relationship To Sprint V1",
  "Runtime Absence Requirements",
  "QA Expectations",
  "Sprint V3 - Marketplace Intelligence Flag Contract Harness"
], "V2 feature flag doc");

assert(readinessContract.includes("marketplace-intelligence.readiness.phase_74"), "V2 must build on the Phase 74 Marketplace Intelligence readiness contract.");
assert(readinessContract.includes("liveConnectorEnabled: false"), "Phase 74 live connector default must remain false.");
assert(readinessContract.includes("providerExecutionEnabled: false"), "Phase 74 provider execution default must remain false.");
assert(readinessContract.includes("regulatedActionEnabled: false"), "Phase 74 regulated action default must remain false.");
assert(readinessContract.includes("executionAllowed: false"), "Phase 74 execution default must remain false.");
assert(v1Doc.includes("Sprint V2 - Marketplace Intelligence Feature Flag Contract"), "V1 must recommend Sprint V2.");

assert.equal(MARKETPLACE_INTELLIGENCE_FEATURE_FLAG_NAME, "NEXUS_MARKETPLACE_INTELLIGENCE_VISIBLE_ENABLED");
assert.equal(DEFAULT_MARKETPLACE_INTELLIGENCE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_MARKETPLACE_INTELLIGENCE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
assert.equal(DEFAULT_MARKETPLACE_INTELLIGENCE_FEATURE_FLAG_STATE.noExecution, true);

for (const field of PROTECTED_MARKETPLACE_INTELLIGENCE_FLAG_FIELDS) {
  assert.equal(DEFAULT_MARKETPLACE_INTELLIGENCE_FEATURE_FLAG_STATE[field], false, `default ${field} must be false.`);
  assert(doc.includes(`${field}: false`), `V2 doc must document ${field}: false.`);
}

const defaultState = normalizeMarketplaceIntelligenceFeatureFlagState();
assert.equal(defaultState.enabled, false);
assert.equal(defaultState.visibleUiAllowed, false);
assert.equal(defaultState.noExecution, true);
assert.equal(isMarketplaceIntelligenceVisibleFeatureEnabled(defaultState), false);

const visibleOnly = normalizeMarketplaceIntelligenceFeatureFlagState({
  enabled: true,
  visibleUiAllowed: true
});
assert.equal(visibleOnly.enabled, true);
assert.equal(visibleOnly.visibleUiAllowed, true);
assert.equal(isMarketplaceIntelligenceVisibleFeatureEnabled(visibleOnly), true);
for (const field of PROTECTED_MARKETPLACE_INTELLIGENCE_FLAG_FIELDS) {
  assert.equal(visibleOnly[field], false, `visible-only state must keep ${field}=false.`);
}
assert.equal(visibleOnly.noExecution, true);

const unsafeAttempt = normalizeMarketplaceIntelligenceFeatureFlagState({
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
assert.equal(unsafeAttempt.visibleUiAllowed, true);
for (const field of PROTECTED_MARKETPLACE_INTELLIGENCE_FLAG_FIELDS) {
  assert.equal(unsafeAttempt[field], false, `unsafe attempt must keep ${field}=false.`);
}
assert.equal(unsafeAttempt.noExecution, true);

const runtime = [index, app, server].join("\n");
for (const term of [
  moduleName,
  "NEXUS_MARKETPLACE_INTELLIGENCE_VISIBLE_ENABLED",
  "NexusMarketplaceIntelligenceFeatureFlagContract",
  "normalizeMarketplaceIntelligenceFeatureFlagState",
  "isMarketplaceIntelligenceVisibleFeatureEnabled",
  "marketplaceIntelligenceRuntime",
  "liveMarketplaceAdvisor",
  "executeMarketplacePurchase(",
  "executeMarketplaceSale(",
  "createMarketplaceOrder(",
  "executeMarketplaceCheckout(",
  "processMarketplacePayment(",
  "contactMarketplaceCounterparty("
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Marketplace Intelligence feature flag artifact: ${term}`);
}

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
  "executeMarketplaceCheckout(",
  "processMarketplacePayment(",
  "contactMarketplaceCounterparty("
]) {
  assert(!moduleSource.includes(term), `V2 feature flag module must not include runtime API: ${term}`);
}

const alias = "qa:nexus-sprint-v2-marketplace-intelligence-feature-flag-contract";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint V2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-v1-marketplace-intelligence-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint V1 QA.");

console.log("[nexus-sprint-v2-marketplace-intelligence-feature-flag-contract-qa] passed");
