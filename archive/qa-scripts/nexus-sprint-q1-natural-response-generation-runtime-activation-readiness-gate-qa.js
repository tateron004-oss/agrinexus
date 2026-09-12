const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  NATURAL_RESPONSE_GENERATION_REQUIRED_PRECONDITIONS,
  NATURAL_RESPONSE_GENERATION_RESTRICTED_DOMAINS,
  NATURAL_RESPONSE_GENERATION_NO_EXECUTION_DEFAULTS,
  NATURAL_RESPONSE_GENERATION_READINESS_CONTRACT,
  createNaturalResponseGenerationReadinessContract
} = require("../public/nexus-natural-response-generation-readiness-contract.js");

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

const docName = "NEXUS_SPRINT_Q1_NATURAL_RESPONSE_GENERATION_RUNTIME_ACTIVATION_READINESS_GATE.md";
const qaName = "nexus-sprint-q1-natural-response-generation-runtime-activation-readiness-gate-qa.js";

assert(exists("docs", docName), "Sprint Q1 readiness gate doc must exist.");
assert(exists("scripts", qaName), "Sprint Q1 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const contractSource = read("public", "nexus-natural-response-generation-readiness-contract.js");

assertIncludes(doc, [
  "Sprint Q1",
  "ac2321ff8dc16a7575036f8d75e66f59dddcc590",
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
  "Sprint Q2 - Natural Response Generation Feature Flag Contract"
], "Q1 readiness gate doc");

assertIncludes(doc, [
  "Sprint P5 - Orchestration Engine Lane Closeout",
  "Phase 69 - Natural Response Generation Readiness Contract",
  "Orchestration readiness is not response-generation authority",
  "A generated natural response must never become consent, permission, provider authorization, credential use, source authority, medical advice, diagnosis, prescription, payment completion, emergency dispatch, communication completion, or execution approval"
], "Q1 relationship language");

assertIncludes(doc, [
  "source-backed answer available when factual claims are made",
  "citation or source trace for source-backed claims",
  "freshness label for source-backed claims",
  "confidence label for source-backed claims",
  "unsupported claim filter",
  "regulated advice boundary",
  "medical diagnosis boundary",
  "pharmacy and prescription boundary",
  "provider connection claim boundary",
  "completed action claim boundary",
  "payment completion claim boundary",
  "marketplace transaction claim boundary",
  "emergency dispatch claim boundary",
  "call or message sent claim boundary",
  "location sharing claim boundary",
  "plain language review",
  "language fallback path",
  "human escalation copy when needed",
  "policy engine review",
  "audit decision record for high-risk generated responses",
  "no action completion claims",
  "no provider connection claims",
  "no diagnosis or prescription claims",
  "no unsupported live data claims",
  "no hidden provider handoff",
  "no background execution",
  "representative prompt set",
  "multilingual prompt coverage",
  "Standard User prompt coverage",
  "voice prompt coverage",
  "typed prompt coverage",
  "ambiguity fallback",
  "regression suite coverage",
  "browser validation plan",
  "deterministic QA coverage"
], "Q1 activation preconditions");

assertIncludes(doc, [
  "live response model replacement",
  "natural response runtime UI",
  "unsupported live data claims",
  "provider connection claims",
  "completed action claims",
  "medical diagnosis claims",
  "prescription or refill claims",
  "payment completion claims",
  "marketplace transaction claims",
  "emergency dispatch claims",
  "location sharing claims",
  "call or message sent claims",
  "source-backed answer claims without sources",
  "stale data claims without freshness labels",
  "confidence-free source-backed claims",
  "regulated advice without a boundary",
  "hallucinated provider availability",
  "hallucinated provider contact",
  "hallucinated scheduling",
  "hallucinated payment",
  "hallucinated marketplace transaction",
  "hallucinated emergency dispatch",
  "hallucinated medical record access",
  "hallucinated FHIR access",
  "automatic route changes from generated text",
  "policy bypass from generated text",
  "confirmation bypass from generated text",
  "permission bypass from generated text",
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
  "payment execution",
  "marketplace transactions",
  "location sharing",
  "camera or microphone activation",
  "health, medical, pharmacy, prescription, or FHIR execution",
  "appointment scheduling",
  "transportation dispatch",
  "emergency dispatch",
  "external navigation",
  "real pending action creation",
  "execution authority"
], "Q1 blocked behavior");

for (const precondition of [
  "sourceBackedAnswerAvailable",
  "citationOrSourceTrace",
  "freshnessLabel",
  "confidenceLabel",
  "unsupportedClaimFilter",
  "regulatedAdviceBoundary",
  "plainLanguageReview",
  "languageFallbackPath",
  "humanEscalationCopyWhenNeeded",
  "policyEngineReview",
  "auditDecisionRecordForHighRiskResponses",
  "noActionCompletionClaims",
  "noProviderConnectionClaims",
  "noDiagnosisOrPrescriptionClaims",
  "regressionSuiteCoverage"
]) {
  assert(NATURAL_RESPONSE_GENERATION_REQUIRED_PRECONDITIONS.includes(precondition), `Phase 69 contract must include ${precondition}.`);
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
  "role_authorization"
]) {
  assert(NATURAL_RESPONSE_GENERATION_RESTRICTED_DOMAINS.includes(domain), `Phase 69 contract must include restricted domain ${domain}.`);
}

for (const field of [
  "liveResponseModelEnabled",
  "unsupportedClaimAllowed",
  "providerConnectionClaimAllowed",
  "completedActionClaimAllowed",
  "diagnosisClaimAllowed",
  "prescriptionClaimAllowed",
  "paymentCompletionClaimAllowed",
  "transactionCompletionClaimAllowed",
  "standardUserResponseGeneratorMutationAllowed",
  "executionAllowed",
  "liveActionEnabled"
]) {
  assert.equal(NATURAL_RESPONSE_GENERATION_NO_EXECUTION_DEFAULTS[field], false, `${field} must default false.`);
  assert.equal(NATURAL_RESPONSE_GENERATION_READINESS_CONTRACT[field], false, `${field} must remain false on default contract.`);
  assert(doc.includes(`${field}: false`), `Q1 doc must list ${field}: false.`);
}

const unsafeOverride = createNaturalResponseGenerationReadinessContract({
  actionType: "prepare_plain_language_response",
  liveResponseModelEnabled: true,
  unsupportedClaimAllowed: true,
  providerConnectionClaimAllowed: true,
  completedActionClaimAllowed: true,
  diagnosisClaimAllowed: true,
  prescriptionClaimAllowed: true,
  paymentCompletionClaimAllowed: true,
  transactionCompletionClaimAllowed: true,
  standardUserResponseGeneratorMutationAllowed: true,
  executionAllowed: true,
  liveActionEnabled: true
});

assert.equal(unsafeOverride.actionType, "prepare_plain_language_response");
assert.equal(unsafeOverride.phase, "69");
assert.equal(unsafeOverride.readinessStatus, "blocked");
assert.equal(unsafeOverride.riskTier, "controlled");
for (const field of Object.keys(NATURAL_RESPONSE_GENERATION_NO_EXECUTION_DEFAULTS)) {
  assert.equal(unsafeOverride[field], false, `Factory must force unsafe override ${field} back to false.`);
}

const runtime = [index, app, server].join("\n");
for (const term of [
  "nexus-natural-response-generation-readiness-contract.js",
  "NexusNaturalResponseGenerationReadinessContract",
  "NATURAL_RESPONSE_GENERATION_READINESS_CONTRACT",
  "createNaturalResponseGenerationReadinessContract",
  "naturalResponseGenerationRuntime",
  "liveResponseModel",
  "generateLiveResponse(",
  "claimCompletedAction(",
  "connectProvider(",
  "nexus-sprint-q1-natural-response-generation-runtime-activation-readiness-gate"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Natural Response Generation lane artifact: ${term}`);
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
  "generateLiveResponse(",
  "claimCompletedAction(",
  "connectProvider("
]) {
  assert(!contractSource.includes(term), `Phase 69 contract must not include runtime API: ${term}`);
}

for (const requiredPath of [
  ["docs", "NEXUS_SPRINT_P5_ORCHESTRATION_ENGINE_LANE_CLOSEOUT.md"],
  ["docs", "NEXUS_NATURAL_RESPONSE_GENERATION_READINESS_CONTRACT_PHASE_69.md"],
  ["public", "nexus-natural-response-generation-readiness-contract.js"],
  ["scripts", "nexus-natural-response-generation-readiness-contract-qa.js"]
]) {
  assert(exists(...requiredPath), `Q1 requires artifact: ${requiredPath.join("/")}`);
}

const alias = "qa:nexus-sprint-q1-natural-response-generation-runtime-activation-readiness-gate";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint Q1 QA.");

console.log("[nexus-sprint-q1-natural-response-generation-runtime-activation-readiness-gate-qa] passed");
