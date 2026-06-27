const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  FARMER_AGRICULTURE_INTELLIGENCE_ACTION_TYPES,
  FARMER_AGRICULTURE_INTELLIGENCE_REQUIRED_PRECONDITIONS,
  FARMER_AGRICULTURE_INTELLIGENCE_RESTRICTED_DOMAINS,
  FARMER_AGRICULTURE_INTELLIGENCE_NO_EXECUTION_DEFAULTS,
  FARMER_AGRICULTURE_INTELLIGENCE_READINESS_CONTRACT,
  createFarmerAgricultureIntelligenceReadinessContract
} = require("../public/nexus-farmer-agriculture-intelligence-readiness-contract.js");

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

const docName = "NEXUS_SPRINT_S1_FARMER_AGRICULTURE_INTELLIGENCE_RUNTIME_ACTIVATION_READINESS_GATE.md";
const qaName = "nexus-sprint-s1-farmer-agriculture-intelligence-runtime-activation-readiness-gate-qa.js";

assert(exists("docs", docName), "Sprint S1 readiness gate doc must exist.");
assert(exists("scripts", qaName), "Sprint S1 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const contractSource = read("public", "nexus-farmer-agriculture-intelligence-readiness-contract.js");

assertIncludes(doc, [
  "Sprint S1",
  "874bc1669178fe006bf7ad8e76097f32c797c658",
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
  "Sprint S2 - Farmer Agriculture Intelligence Feature Flag Contract"
], "S1 readiness gate doc");

assertIncludes(doc, [
  "Sprint R5 - Multilingual Intelligence Lane Closeout",
  "Phase 71 - Farmer Agriculture Intelligence Readiness Contract",
  "Multilingual readiness is not farmer agriculture authority",
  "Farmer Agriculture Intelligence must never become source authority, operational agronomy authority, chemical application authority, extension provider authorization, marketplace transaction approval, payment completion, insurance filing authority, location sharing approval, communication completion, or execution approval"
], "S1 relationship language");

assertIncludes(doc, [
  "verified agriculture source registry",
  "source attribution",
  "freshness label",
  "confidence label",
  "regional context boundary",
  "crop or livestock context boundary",
  "plain-language farmer summary copy",
  "extension service escalation copy",
  "marketplace transaction boundary",
  "payment boundary",
  "weather or pest source trace",
  "human expert escalation path",
  "audit decision record for high-risk agriculture guidance",
  "no diagnosis or chemical application claim",
  "no unsourced crop or livestock claim",
  "no marketplace buy or sell execution",
  "no payment execution",
  "no provider or extension contact execution",
  "no weather or pest live-data claim without source trace",
  "no location sharing for field visits",
  "no insurance or regulated filing action",
  "Standard User runtime agriculture brain mutation approval",
  "crop issue prompt coverage",
  "livestock prompt coverage",
  "training prompt coverage",
  "AgriTrade prompt coverage",
  "source-backed answer prompt coverage",
  "stale source fallback coverage",
  "confidence fallback coverage",
  "ambiguity fallback",
  "browser validation plan",
  "deterministic QA coverage"
], "S1 activation preconditions");

assertIncludes(doc, [
  "live agriculture advisor execution",
  "unsourced crop or livestock claims",
  "unsourced agronomy recommendations",
  "chemical application instructions",
  "diagnosis or treatment claims for crops or livestock",
  "marketplace buy or sell execution",
  "payment execution",
  "provider or extension contact execution",
  "weather or pest live-data claims without source trace",
  "location sharing for field visits",
  "insurance or regulated filing actions",
  "Standard User runtime agriculture brain mutation",
  "unsupported live data claims",
  "provider connection claims",
  "completed action claims",
  "marketplace transaction claims",
  "location sharing claims",
  "call or message sent claims",
  "source-backed answer claims without sources",
  "stale data claims without freshness labels",
  "confidence-free source-backed claims",
  "regulated advice without a boundary",
  "typed route mutation",
  "voice route mutation",
  "permission prompts",
  "audit writes",
  "backend writes",
  "localStorage or sessionStorage writes",
  "fetch or network calls",
  "provider handoff",
  "native bridge dispatch",
  "calls",
  "messages",
  "payment execution",
  "marketplace transactions",
  "location sharing",
  "camera or microphone activation",
  "external navigation",
  "real pending action creation",
  "execution authority"
], "S1 blocked behavior");

for (const actionType of [
  "explain_agriculture_guidance_boundary",
  "review_agriculture_source_answer",
  "prepare_farmer_support_summary",
  "evaluate_agriculture_intelligence",
  "unsupported"
]) {
  assert(FARMER_AGRICULTURE_INTELLIGENCE_ACTION_TYPES.includes(actionType), `Phase 71 contract must include action type ${actionType}.`);
}

for (const precondition of [
  "verifiedAgricultureSource",
  "sourceAttribution",
  "freshnessLabel",
  "confidenceLabel",
  "regionalContextKnown",
  "cropOrLivestockContext",
  "plainLanguageFarmerSummary",
  "extensionServiceEscalationCopy",
  "marketplaceTransactionBoundary",
  "paymentBoundary",
  "weatherOrPestSourceTrace",
  "humanExpertEscalationPath",
  "auditDecisionRecordForHighRiskGuidance",
  "noDiagnosisOrChemicalApplicationClaim",
  "regressionSuiteCoverage"
]) {
  assert(FARMER_AGRICULTURE_INTELLIGENCE_REQUIRED_PRECONDITIONS.includes(precondition), `Phase 71 contract must include ${precondition}.`);
}

for (const domain of [
  "healthcare",
  "medical_records",
  "pharmacy",
  "payments",
  "location",
  "communications",
  "provider_contact",
  "marketplace_transactions",
  "emergency",
  "transportation_dispatch",
  "identity",
  "account_profile",
  "role_authorization",
  "regulated_chemical_application",
  "crop_insurance_claims"
]) {
  assert(FARMER_AGRICULTURE_INTELLIGENCE_RESTRICTED_DOMAINS.includes(domain), `Phase 71 contract must include restricted domain ${domain}.`);
  assert(doc.includes(domain), `S1 doc must include restricted domain ${domain}.`);
}

for (const field of [
  "liveAgricultureAdvisorEnabled",
  "unsourcedAgricultureAdviceAllowed",
  "chemicalApplicationInstructionAllowed",
  "marketplaceTransactionAllowed",
  "paymentExecutionAllowed",
  "providerOrExtensionContactAllowed",
  "weatherOrPestLiveClaimAllowed",
  "standardUserAgricultureBrainMutationAllowed",
  "executionAllowed",
  "liveActionEnabled"
]) {
  assert.equal(FARMER_AGRICULTURE_INTELLIGENCE_NO_EXECUTION_DEFAULTS[field], false, `${field} must default false.`);
  assert.equal(FARMER_AGRICULTURE_INTELLIGENCE_READINESS_CONTRACT[field], false, `${field} must remain false on default contract.`);
  assert(doc.includes(`${field}: false`), `S1 doc must list ${field}: false.`);
}

const unsafeOverride = createFarmerAgricultureIntelligenceReadinessContract({
  actionType: "review_agriculture_source_answer",
  liveAgricultureAdvisorEnabled: true,
  unsourcedAgricultureAdviceAllowed: true,
  chemicalApplicationInstructionAllowed: true,
  marketplaceTransactionAllowed: true,
  paymentExecutionAllowed: true,
  providerOrExtensionContactAllowed: true,
  weatherOrPestLiveClaimAllowed: true,
  standardUserAgricultureBrainMutationAllowed: true,
  executionAllowed: true,
  liveActionEnabled: true
});

assert.equal(unsafeOverride.actionType, "review_agriculture_source_answer");
assert.equal(unsafeOverride.phase, "71");
assert.equal(unsafeOverride.readinessStatus, "blocked");
assert.equal(unsafeOverride.riskTier, "controlled");
for (const field of Object.keys(FARMER_AGRICULTURE_INTELLIGENCE_NO_EXECUTION_DEFAULTS)) {
  assert.equal(unsafeOverride[field], false, `Factory must force unsafe override ${field} back to false.`);
}

const runtime = [index, app, server].join("\n");
for (const term of [
  "nexus-farmer-agriculture-intelligence-readiness-contract.js",
  "NexusFarmerAgricultureIntelligenceReadinessContract",
  "FARMER_AGRICULTURE_INTELLIGENCE_READINESS_CONTRACT",
  "createFarmerAgricultureIntelligenceReadinessContract",
  "farmerAgricultureIntelligenceRuntime",
  "liveAgricultureAdvisor",
  "executeAgricultureAdvice(",
  "contactExtensionProvider(",
  "executeChemicalApplication(",
  "nexus-sprint-s1-farmer-agriculture-intelligence-runtime-activation-readiness-gate"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Farmer Agriculture Intelligence lane artifact: ${term}`);
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
  "sendBeacon",
  "open(",
  "postMessage",
  "dispatchEvent",
  "Notification"
]) {
  assert(!contractSource.includes(term), `Phase 71 contract must remain inert and avoid ${term}.`);
}

const alias = "qa:nexus-sprint-s1-farmer-agriculture-intelligence-runtime-activation-readiness-gate";
assert.equal(
  pkg.scripts[alias],
  "node scripts/nexus-sprint-s1-farmer-agriculture-intelligence-runtime-activation-readiness-gate-qa.js",
  "package.json must expose Sprint S1 QA alias."
);
assert(qaSuite.includes("scripts/nexus-sprint-s1-farmer-agriculture-intelligence-runtime-activation-readiness-gate-qa.js"), "qa-suite must include Sprint S1 QA.");

console.log("[nexus-sprint-s1-farmer-agriculture-intelligence-runtime-activation-readiness-gate-qa] passed");
