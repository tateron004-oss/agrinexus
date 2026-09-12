const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  TRUST_FRAUD_RISK_DETECTION_READINESS_CONTRACT,
  TRUST_FRAUD_RISK_DETECTION_NO_EXECUTION_DEFAULTS,
  createTrustFraudRiskDetectionReadinessContract
} = require("../public/nexus-trust-fraud-risk-detection-readiness-contract.js");

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

const docName = "NEXUS_SPRINT_W1_TRUST_FRAUD_RISK_DETECTION_RUNTIME_ACTIVATION_READINESS_GATE.md";
const qaName = "nexus-sprint-w1-trust-fraud-risk-detection-runtime-activation-readiness-gate-qa.js";

assert(exists("docs", docName), "Sprint W1 readiness gate doc must exist.");
assert(exists("scripts", qaName), "Sprint W1 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const readinessContractSource = read("public", "nexus-trust-fraud-risk-detection-readiness-contract.js");
const v5Doc = read("docs", "NEXUS_SPRINT_V5_MARKETPLACE_INTELLIGENCE_LANE_CLOSEOUT.md");

assertIncludes(doc, [
  "Sprint W1",
  "c7dc51d4f240e1fbba658b0150d18b6f10aa996a",
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
  "Sprint W2 - Trust/Fraud/Risk Detection Feature Flag Contract"
], "W1 readiness gate doc");

assertIncludes(doc, [
  "Sprint V5 - Marketplace Intelligence Lane Closeout",
  "Phase 75 - Trust Fraud Risk Detection Readiness Contract",
  "Marketplace Intelligence readiness is not trust, fraud, risk, scoring, enforcement, account, marketplace restriction, provider, payment, identity, role, or execution authority"
], "W1 relationship section");

assertIncludes(doc, [
  "product owner approval for a risk engine runtime change",
  "verified source or partner signal",
  "source attribution",
  "freshness label",
  "confidence label",
  "user consent boundary where user data is involved",
  "role and permission check",
  "explicit user approval for high-risk user-facing actions",
  "visible cancellation or appeal path where appropriate",
  "human review path before adverse decisions",
  "audit decision record",
  "safe fallback path",
  "no unsupported live claim",
  "no completed action claim",
  "no final fraud determination by automated text",
  "no hidden scoring in Standard User runtime",
  "no automated account restriction",
  "no automated marketplace enforcement",
  "no automated payment hold",
  "no automated identity decision",
  "no provider, buyer, seller, clinician, pharmacy, emergency, transportation, or workforce contact",
  "no communications execution",
  "no location sharing",
  "Standard User runtime risk-engine mutation approval gap",
  "risky prompt coverage",
  "marketplace risk boundary prompt coverage",
  "payment risk boundary prompt coverage",
  "identity/account boundary prompt coverage",
  "healthcare/pharmacy/emergency boundary prompt coverage",
  "regression suite coverage",
  "browser validation plan",
  "deterministic QA coverage"
], "W1 activation preconditions");

assertIncludes(doc, [
  "public/nexus-trust-fraud-risk-detection-readiness-contract.js",
  "any future Trust/Fraud/Risk Detection feature flag",
  "any future Trust/Fraud/Risk Detection fixture harness",
  "any future live risk engine runtime",
  "any future fraud scoring runtime",
  "any future risk signal retrieval runtime",
  "any future enforcement runtime",
  "any future account restriction runtime",
  "any future marketplace restriction runtime",
  "any future payment hold runtime",
  "any future provider handoff runtime",
  "Sprint W QA scripts"
], "W1 runtime absence requirements");

assertIncludes(doc, [
  "active Trust/Fraud/Risk Detection runtime",
  "live risk engine execution",
  "hidden risk scoring",
  "hidden fraud scoring",
  "fraud accusation claims",
  "final fraud determination claims",
  "automated adverse decisions",
  "automated account restrictions",
  "automated marketplace restrictions",
  "automated payment holds",
  "automated identity decisions",
  "automated role authorization decisions",
  "provider connection claims",
  "completed action claims",
  "unsupported live data claims",
  "source-backed risk answer claims without sources",
  "stale data claims without freshness labels",
  "confidence-free risk claims",
  "typed route mutation",
  "voice route mutation",
  "policy bypass from risk metadata",
  "confirmation bypass from risk metadata",
  "permission bypass from risk metadata",
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
], "W1 blocked runtime behavior");

assertIncludes(doc, [
  "contractId: \"trust-fraud-risk-detection.readiness.phase_75\"",
  "readinessStatus: \"blocked\"",
  "riskTier: \"restricted\"",
  "roadmapComponent: \"risk engine\"",
  "acceptanceTarget: \"risky actions blocked\"",
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
], "W1 contract invariants");

assertIncludes(doc, [
  "I can help flag potential risk signals for review, but I cannot make final fraud determinations, restrict accounts, block transactions, contact providers, or take enforcement action without approved review, permission, and audit controls.",
  "I found fraud.",
  "I blocked the user.",
  "I restricted the account.",
  "I held the payment.",
  "I stopped the transaction.",
  "I contacted the provider.",
  "I reported the seller.",
  "I approved the identity.",
  "I completed enforcement."
], "W1 safe copy boundary");

assert(v5Doc.includes("Sprint W1 - Trust/Fraud/Risk Detection Runtime Activation Readiness Gate"), "Sprint V5 must recommend Sprint W1.");

assert.equal(TRUST_FRAUD_RISK_DETECTION_READINESS_CONTRACT.contractId, "trust-fraud-risk-detection.readiness.phase_75");
assert.equal(TRUST_FRAUD_RISK_DETECTION_READINESS_CONTRACT.readinessStatus, "blocked");
assert.equal(TRUST_FRAUD_RISK_DETECTION_READINESS_CONTRACT.riskTier, "restricted");
assert.equal(TRUST_FRAUD_RISK_DETECTION_READINESS_CONTRACT.roadmapComponent, "risk engine");
assert.equal(TRUST_FRAUD_RISK_DETECTION_READINESS_CONTRACT.acceptanceTarget, "risky actions blocked");

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
  assert.equal(TRUST_FRAUD_RISK_DETECTION_NO_EXECUTION_DEFAULTS[field], false, `W1 default ${field} must be false.`);
  assert.equal(TRUST_FRAUD_RISK_DETECTION_READINESS_CONTRACT[field], false, `W1 contract ${field} must be false.`);
}

const unsafeAttempt = createTrustFraudRiskDetectionReadinessContract({
  actionType: "prepare_trust_fraud_risk_detection_summary",
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

assert.equal(unsafeAttempt.actionType, "prepare_trust_fraud_risk_detection_summary");
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
  assert.equal(unsafeAttempt[field], false, `W1 factory must force ${field}=false.`);
}

for (const requiredPath of [
  ["docs", "NEXUS_TRUST_FRAUD_RISK_DETECTION_READINESS_CONTRACT_PHASE_75.md"],
  ["public", "nexus-trust-fraud-risk-detection-readiness-contract.js"],
  ["scripts", "nexus-trust-fraud-risk-detection-readiness-contract-qa.js"],
  ["docs", "NEXUS_SPRINT_V5_MARKETPLACE_INTELLIGENCE_LANE_CLOSEOUT.md"]
]) {
  assert(exists(...requiredPath), `W1 requires artifact: ${requiredPath.join("/")}`);
}

const runtime = [index, app, server].join("\n");
for (const term of [
  "nexus-trust-fraud-risk-detection-readiness-contract.js",
  "NexusTrustFraudRiskDetectionReadinessContract",
  "trust-fraud-risk-detection.readiness.phase_75",
  "TRUST_FRAUD_RISK_DETECTION_READINESS_CONTRACT",
  "trustFraudRiskDetectionRuntime",
  "liveRiskEngine",
  "fraudScoringRuntime",
  "riskSignalRetrievalRuntime",
  "enforcementRuntime",
  "restrictAccount(",
  "blockMarketplaceTransaction(",
  "holdPayment(",
  "approveIdentity(",
  "nexus-sprint-w1-trust-fraud-risk-detection-runtime-activation-readiness-gate"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Trust/Fraud/Risk Detection lane artifact: ${term}`);
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
  "restrictAccount(",
  "blockMarketplaceTransaction(",
  "holdPayment(",
  "approveIdentity(",
  "contactProvider(",
  "reportFraud("
]) {
  assert(!readinessContractSource.includes(term), `Phase 75 contract module must not include runtime API: ${term}`);
}

const alias = "qa:nexus-sprint-w1-trust-fraud-risk-detection-runtime-activation-readiness-gate";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint W1 QA.");

console.log("[nexus-sprint-w1-trust-fraud-risk-detection-runtime-activation-readiness-gate-qa] passed");
