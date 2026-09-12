const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  MARKETPLACE_INTELLIGENCE_READINESS_CONTRACT,
  MARKETPLACE_INTELLIGENCE_NO_EXECUTION_DEFAULTS,
  createMarketplaceIntelligenceReadinessContract
} = require("../public/nexus-marketplace-intelligence-readiness-contract.js");

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

const docName = "NEXUS_SPRINT_V1_MARKETPLACE_INTELLIGENCE_RUNTIME_ACTIVATION_READINESS_GATE.md";
const qaName = "nexus-sprint-v1-marketplace-intelligence-runtime-activation-readiness-gate-qa.js";

assert(exists("docs", docName), "Sprint V1 readiness gate doc must exist.");
assert(exists("scripts", qaName), "Sprint V1 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const readinessContractSource = read("public", "nexus-marketplace-intelligence-readiness-contract.js");
const u5Doc = read("docs", "NEXUS_SPRINT_U5_WORKFORCE_INTELLIGENCE_LANE_CLOSEOUT.md");

assertIncludes(doc, [
  "Sprint V1",
  "6b18e523e03e6791c8f25ac7695b48ffed901ed6",
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
  "Sprint V2 - Marketplace Intelligence Feature Flag Contract"
], "V1 readiness gate doc");

assertIncludes(doc, [
  "Sprint U5 - Workforce Intelligence Lane Closeout",
  "Phase 74 - Marketplace Intelligence Readiness Contract",
  "Workforce Intelligence readiness is not marketplace authority"
], "V1 relationship section");

assertIncludes(doc, [
  "product owner approval for a marketplace intelligence runtime change",
  "verified marketplace source or partner",
  "source attribution",
  "freshness label",
  "confidence label",
  "user consent boundary",
  "role and permission check",
  "explicit user approval for high-risk marketplace actions",
  "visible cancellation path",
  "audit decision record",
  "safe fallback path",
  "no unsupported live claim",
  "no completed action claim",
  "no buy, sell, order, checkout, or payment execution",
  "no buyer or seller contact without active partner integration, consent, confirmation, and audit",
  "no inventory reservation without approved partner integration and visible confirmation",
  "no price guarantee without verified source, freshness, and confidence",
  "no availability guarantee without verified source, freshness, and confidence",
  "no shipping or transportation dispatch",
  "no account, profile, or identity mutation",
  "no location sharing",
  "Standard User runtime marketplace brain mutation approval gap",
  "marketplace prompt coverage",
  "AgriTrade prompt coverage",
  "buy/sell/payment boundary prompt coverage",
  "buyer/seller contact boundary prompt coverage",
  "marketplace transaction boundary prompt coverage",
  "regression suite coverage",
  "browser validation plan",
  "deterministic QA coverage"
], "V1 activation preconditions");

assertIncludes(doc, [
  "public/nexus-marketplace-intelligence-readiness-contract.js",
  "any future Marketplace Intelligence feature flag",
  "any future Marketplace Intelligence fixture harness",
  "any future live marketplace advisor runtime",
  "any future marketplace source retrieval runtime",
  "any future marketplace provider handoff runtime",
  "any buyer/seller contact runtime",
  "any buy/sell/order/checkout/payment execution runtime",
  "any provider execution runtime",
  "Sprint V QA scripts"
], "V1 runtime absence requirements");

assertIncludes(doc, [
  "active Marketplace Intelligence runtime",
  "live marketplace advisor execution",
  "buy execution claims",
  "sell execution claims",
  "order creation claims",
  "checkout execution claims",
  "payment execution claims",
  "marketplace transaction completion claims",
  "inventory reservation claims",
  "price guarantee claims",
  "availability guarantee claims",
  "buyer or seller contact claims",
  "shipping or transportation dispatch claims",
  "location sharing claims",
  "communication execution claims",
  "account, profile, or identity mutation claims",
  "provider connection claims",
  "completed action claims",
  "unsupported live data claims",
  "source-backed marketplace answer claims without sources",
  "stale data claims without freshness labels",
  "confidence-free source-backed claims",
  "typed route mutation",
  "voice route mutation",
  "policy bypass from marketplace intelligence metadata",
  "confirmation bypass from marketplace intelligence metadata",
  "permission bypass from marketplace intelligence metadata",
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
], "V1 blocked runtime behavior");

assertIncludes(doc, [
  "contractId: \"marketplace-intelligence.readiness.phase_74\"",
  "readinessStatus: \"blocked\"",
  "riskTier: \"high\"",
  "roadmapComponent: \"marketplace brain\"",
  "acceptanceTarget: \"no auto trade\"",
  "liveConnectorEnabled: false",
  "providerExecutionEnabled: false",
  "regulatedActionEnabled: false",
  "silentActionAllowed: false",
  "backgroundExecutionAllowed: false",
  "standardUserRuntimeMutationAllowed: false",
  "storageSideEffectAllowed: false",
  "networkSideEffectAllowed: false",
  "executionAllowed: false",
  "liveActionEnabled: false"
], "V1 contract invariants");

assertIncludes(doc, [
  "I can help review marketplace options and prepare next steps using verified sources, but buying, selling, payments, buyer or seller contact, and transaction completion require configured partners, your approval, and audit controls.",
  "I bought the item.",
  "I sold your crops.",
  "I paid the seller.",
  "I contacted the buyer.",
  "I contacted the seller.",
  "I reserved the inventory.",
  "I guaranteed the price.",
  "I guaranteed availability.",
  "I completed the order."
], "V1 safe copy boundary");

assert(u5Doc.includes("Sprint V1 - Marketplace Intelligence Runtime Activation Readiness Gate"), "Sprint U5 must recommend Sprint V1.");

assert.equal(MARKETPLACE_INTELLIGENCE_READINESS_CONTRACT.contractId, "marketplace-intelligence.readiness.phase_74");
assert.equal(MARKETPLACE_INTELLIGENCE_READINESS_CONTRACT.readinessStatus, "blocked");
assert.equal(MARKETPLACE_INTELLIGENCE_READINESS_CONTRACT.riskTier, "high");
assert.equal(MARKETPLACE_INTELLIGENCE_READINESS_CONTRACT.roadmapComponent, "marketplace brain");
assert.equal(MARKETPLACE_INTELLIGENCE_READINESS_CONTRACT.acceptanceTarget, "no auto trade");

for (const field of [
  "liveConnectorEnabled",
  "providerExecutionEnabled",
  "regulatedActionEnabled",
  "silentActionAllowed",
  "backgroundExecutionAllowed",
  "standardUserRuntimeMutationAllowed",
  "storageSideEffectAllowed",
  "networkSideEffectAllowed",
  "executionAllowed",
  "liveActionEnabled"
]) {
  assert.equal(MARKETPLACE_INTELLIGENCE_NO_EXECUTION_DEFAULTS[field], false, `V1 default ${field} must be false.`);
  assert.equal(MARKETPLACE_INTELLIGENCE_READINESS_CONTRACT[field], false, `V1 contract ${field} must be false.`);
}

const unsafeAttempt = createMarketplaceIntelligenceReadinessContract({
  actionType: "prepare_marketplace_intelligence_summary",
  liveConnectorEnabled: true,
  providerExecutionEnabled: true,
  regulatedActionEnabled: true,
  silentActionAllowed: true,
  backgroundExecutionAllowed: true,
  standardUserRuntimeMutationAllowed: true,
  storageSideEffectAllowed: true,
  networkSideEffectAllowed: true,
  executionAllowed: true,
  liveActionEnabled: true
});

assert.equal(unsafeAttempt.actionType, "prepare_marketplace_intelligence_summary");
for (const field of [
  "liveConnectorEnabled",
  "providerExecutionEnabled",
  "regulatedActionEnabled",
  "silentActionAllowed",
  "backgroundExecutionAllowed",
  "standardUserRuntimeMutationAllowed",
  "storageSideEffectAllowed",
  "networkSideEffectAllowed",
  "executionAllowed",
  "liveActionEnabled"
]) {
  assert.equal(unsafeAttempt[field], false, `V1 factory must force ${field}=false.`);
}

for (const requiredPath of [
  ["docs", "NEXUS_MARKETPLACE_INTELLIGENCE_READINESS_CONTRACT_PHASE_74.md"],
  ["public", "nexus-marketplace-intelligence-readiness-contract.js"],
  ["scripts", "nexus-marketplace-intelligence-readiness-contract-qa.js"],
  ["docs", "NEXUS_SPRINT_U5_WORKFORCE_INTELLIGENCE_LANE_CLOSEOUT.md"]
]) {
  assert(exists(...requiredPath), `V1 requires artifact: ${requiredPath.join("/")}`);
}

const runtime = [index, app, server].join("\n");
for (const term of [
  "nexus-marketplace-intelligence-readiness-contract.js",
  "NexusMarketplaceIntelligenceReadinessContract",
  "marketplace-intelligence.readiness.phase_74",
  "MARKETPLACE_INTELLIGENCE_READINESS_CONTRACT",
  "marketplaceIntelligenceRuntime",
  "liveMarketplaceAdvisor",
  "executeMarketplacePurchase(",
  "executeMarketplaceSale(",
  "completeMarketplaceTransaction(",
  "contactMarketplaceCounterparty(",
  "nexus-sprint-v1-marketplace-intelligence-runtime-activation-readiness-gate"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Marketplace Intelligence lane artifact: ${term}`);
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
  "completeMarketplaceTransaction(",
  "contactMarketplaceCounterparty(",
  "processMarketplacePayment("
]) {
  assert(!readinessContractSource.includes(term), `Phase 74 contract module must not include runtime API: ${term}`);
}

const alias = "qa:nexus-sprint-v1-marketplace-intelligence-runtime-activation-readiness-gate";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint V1 QA.");

console.log("[nexus-sprint-v1-marketplace-intelligence-runtime-activation-readiness-gate-qa] passed");
