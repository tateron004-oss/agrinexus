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

const docName = "NEXUS_SPRINT_AF1_AGRITRADE_MARKETPLACE_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md";
const qaName = "nexus-sprint-af1-agritade-marketplace-mode-runtime-activation-readiness-gate-qa.js".replace("agritade", "agritrade");

assert(exists("docs", docName), "Sprint AF1 readiness gate doc must exist.");
assert(exists("scripts", qaName), "Sprint AF1 QA script must exist.");

const doc = read("docs", docName);
const ae5Doc = read("docs", "NEXUS_SPRINT_AE5_EDUCATION_MODE_LANE_CLOSEOUT.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const agritradeContractSource = read("public", "nexus-agritrade-marketplace-mode-readiness-contract.js");
const agritradeContract = require("../public/nexus-agritrade-marketplace-mode-readiness-contract.js");

assertIncludes(doc, [
  "Sprint AF1",
  "b2c46ba029f5bdc470be5e481f8ad8b75553c1a0",
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
  "Sprint AF2 - AgriTrade Marketplace Mode Feature Flag Contract"
], "AF1 readiness doc");

assertIncludes(doc, [
  "Sprint AE5 - Education Mode Lane Closeout",
  "Phase 84 - AgriTrade Marketplace Mode Readiness Contract",
  "AgriTrade Marketplace Mode readiness is not buy authority, sell authority, order authority, listing authority, quote authority, buyer authority, seller authority, payment authority, escrow authority, logistics authority, identity authority, communications authority, transportation authority, emergency authority, medical authority, location consent, product owner approval, user consent, provider confirmation, buyer confirmation, seller confirmation, marketplace partner confirmation, human review approval, audit approval, or execution authority"
], "AF1 relationship section");

assertIncludes(doc, [
  "product owner approval for an AgriTrade Marketplace Mode runtime change",
  "verified marketplace, agriculture trade, buyer, seller, listing, price, inventory, logistics, or regulated source",
  "verified live marketplace connector or partner availability state",
  "source attribution",
  "freshness label",
  "confidence label",
  "user consent boundary",
  "identity verification boundary when needed",
  "role and permission check",
  "explicit user approval for every marketplace, buyer, seller, payment, logistics, or partner-dependent action",
  "buyer, seller, marketplace partner, payment partner, logistics partner, or provider confirmation before any partner-facing workflow",
  "visible cancellation path",
  "audit decision record",
  "safe fallback path",
  "no unsupported live claim",
  "no completed action claim",
  "no auto buy or sell",
  "no marketplace transaction execution",
  "no payment, escrow, shipment dispatch, provider contact, buyer contact, seller contact, order creation, quote acceptance, listing publication, location sharing, camera, microphone, healthcare, pharmacy, prescription, refill, transportation dispatch, emergency dispatch, or account/profile mutation from AgriTrade Marketplace Mode",
  "no communications execution",
  "regression suite coverage",
  "browser validation plan",
  "deterministic QA coverage"
], "AF1 runtime activation preconditions");

assertIncludes(doc, [
  "active AgriTrade Marketplace Mode runtime",
  "live marketplace connector activation",
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
  "provider connector runtime",
  "marketplace transaction runtime",
  "buy execution runtime",
  "sell execution runtime",
  "quote acceptance runtime",
  "order creation runtime",
  "listing publication runtime",
  "payment runtime",
  "escrow runtime",
  "shipment dispatch runtime",
  "transportation dispatch runtime",
  "emergency dispatch runtime",
  "marketplace action execution claims",
  "buyer contact claims",
  "seller contact claims",
  "marketplace partner contact claims",
  "payment execution claims",
  "unsupported live data claims",
  "completed action claims",
  "typed route mutation",
  "voice route mutation",
  "policy bypass from AgriTrade Marketplace Mode metadata",
  "confirmation bypass from AgriTrade Marketplace Mode metadata",
  "permission bypass from AgriTrade Marketplace Mode metadata",
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
], "AF1 blocked runtime behavior");

assertIncludes(doc, [
  "I can help prepare marketplace options.",
  "AgriTrade Marketplace Mode is not connected yet.",
  "This requires a verified marketplace source or partner.",
  "This requires consent and approval.",
  "I cannot buy or sell for you yet.",
  "I cannot contact a buyer, seller, or marketplace partner yet.",
  "No action has been taken.",
  "I bought this item for you.",
  "I sold your produce.",
  "I created the order.",
  "I accepted the quote.",
  "I published the listing.",
  "I contacted the buyer.",
  "I contacted the seller.",
  "I processed your payment.",
  "I arranged shipment.",
  "I changed your account.",
  "I completed the action."
], "AF1 safe copy boundary");

for (const requiredPath of [
  ["docs", "NEXUS_SPRINT_AE5_EDUCATION_MODE_LANE_CLOSEOUT.md"],
  ["docs", "NEXUS_AGRITRADE_MARKETPLACE_MODE_READINESS_CONTRACT_PHASE_84.md"],
  ["public", "nexus-agritrade-marketplace-mode-readiness-contract.js"],
  ["scripts", "nexus-agritrade-marketplace-mode-readiness-contract-qa.js"]
]) {
  assert(exists(...requiredPath), `AF1 requires artifact: ${requiredPath.join("/")}`);
}

assertIncludes(ae5Doc, [
  "Sprint AF1 - AgriTrade Marketplace Mode Runtime Activation Readiness Gate"
], "AE5 closeout next sprint recommendation");

assertIncludes(agritradeContractSource, [
  "AGRITRADE_MARKETPLACE_MODE_READINESS_CONTRACT",
  "agritrade-marketplace-mode.readiness.phase_84",
  "AGRITRADE_MARKETPLACE_MODE_NO_EXECUTION_DEFAULTS",
  "createAgritradeMarketplaceModeReadinessContract",
  "no auto buy/sell",
  "marketplace_transactions",
  "payments",
  "communications",
  "provider_contact",
  "regulated_execution"
], "Phase 84 AgriTrade Marketplace Mode readiness contract");

assert.equal(agritradeContract.AGRITRADE_MARKETPLACE_MODE_READINESS_CONTRACT.readinessStatus, "blocked");
assert.equal(agritradeContract.AGRITRADE_MARKETPLACE_MODE_READINESS_CONTRACT.riskTier, "high");
assert.equal(agritradeContract.AGRITRADE_MARKETPLACE_MODE_READINESS_CONTRACT.acceptanceTarget, "no auto buy/sell");
assert.equal(agritradeContract.AGRITRADE_MARKETPLACE_MODE_READINESS_CONTRACT.liveConnectorEnabled, false);
assert.equal(agritradeContract.AGRITRADE_MARKETPLACE_MODE_READINESS_CONTRACT.providerExecutionEnabled, false);
assert.equal(agritradeContract.AGRITRADE_MARKETPLACE_MODE_READINESS_CONTRACT.regulatedActionEnabled, false);
assert.equal(agritradeContract.AGRITRADE_MARKETPLACE_MODE_READINESS_CONTRACT.silentActionAllowed, false);
assert.equal(agritradeContract.AGRITRADE_MARKETPLACE_MODE_READINESS_CONTRACT.backgroundExecutionAllowed, false);
assert.equal(agritradeContract.AGRITRADE_MARKETPLACE_MODE_READINESS_CONTRACT.standardUserRuntimeMutationAllowed, false);
assert.equal(agritradeContract.AGRITRADE_MARKETPLACE_MODE_READINESS_CONTRACT.storageSideEffectAllowed, false);
assert.equal(agritradeContract.AGRITRADE_MARKETPLACE_MODE_READINESS_CONTRACT.networkSideEffectAllowed, false);
assert.equal(agritradeContract.AGRITRADE_MARKETPLACE_MODE_READINESS_CONTRACT.executionAllowed, false);
assert.equal(agritradeContract.AGRITRADE_MARKETPLACE_MODE_READINESS_CONTRACT.liveActionEnabled, false);

const sample = agritradeContract.createAgritradeMarketplaceModeReadinessContract({
  actionType: "prepare_agritrade_marketplace_mode_summary",
  liveConnectorEnabled: true,
  providerExecutionEnabled: true,
  regulatedActionEnabled: true,
  executionAllowed: true,
  liveActionEnabled: true
});
assert.equal(sample.actionType, "prepare_agritrade_marketplace_mode_summary");
assert.equal(sample.phase, "84");
assert.equal(sample.readinessStatus, "blocked");
assert.equal(sample.riskTier, "high");
assert.equal(sample.liveConnectorEnabled, false);
assert.equal(sample.providerExecutionEnabled, false);
assert.equal(sample.regulatedActionEnabled, false);
assert.equal(sample.executionAllowed, false);
assert.equal(sample.liveActionEnabled, false);

const runtime = [index, app, server].join("\n");
for (const term of [
  "nexus-agritrade-marketplace-mode-readiness-contract.js",
  "NexusAgritradeMarketplaceModeReadinessContract",
  "AGRITRADE_MARKETPLACE_MODE_READINESS_CONTRACT",
  "agritrade-marketplace-mode.readiness.phase_84",
  "createAgritradeMarketplaceModeReadinessContract",
  "agritradeMarketplaceModeRuntime",
  "liveAgritradeMarketplaceModeRuntime",
  "liveMarketplaceConnectorRuntime",
  "executeMarketplacePurchase(",
  "executeMarketplaceSale(",
  "createMarketplaceOrder(",
  "acceptMarketplaceQuote(",
  "publishMarketplaceListing(",
  "contactMarketplaceBuyer(",
  "contactMarketplaceSeller(",
  "processMarketplacePayment(",
  "nexus-sprint-af1-agritrade-marketplace-mode-runtime-activation-readiness-gate"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate AgriTrade Marketplace Mode lane artifact: ${term}`);
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
  "dispatchEmergency("
]) {
  assert(!agritradeContractSource.includes(term), `Phase 84 contract must not include runtime API: ${term}`);
}

const alias = "qa:nexus-sprint-af1-agritrade-marketplace-mode-runtime-activation-readiness-gate";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AF1 QA.");
assert(qaSuite.includes("scripts/nexus-agritrade-marketplace-mode-readiness-contract-qa.js"), "qa-suite must continue to include Phase 84 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ae5-education-mode-lane-closeout-qa.js"), "qa-suite must continue to include Sprint AE5 QA.");

console.log("[nexus-sprint-af1-agritrade-marketplace-mode-runtime-activation-readiness-gate-qa] passed");
