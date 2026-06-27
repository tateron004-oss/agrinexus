const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  DEFAULT_NATURAL_RESPONSE_GENERATION_FEATURE_FLAG_STATE,
  normalizeNaturalResponseGenerationFeatureFlagState
} = require("../public/nexus-natural-response-generation-feature-flag.js");
const {
  protectedFields,
  loadNaturalResponseGenerationFlagFixtures,
  validateNaturalResponseGenerationFlagFixtures
} = require("./nexus-sprint-q3-natural-response-generation-flag-contract-harness.js");

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

const docName = "NEXUS_SPRINT_Q5_NATURAL_RESPONSE_GENERATION_LANE_CLOSEOUT.md";
const qaName = "nexus-sprint-q5-natural-response-generation-lane-closeout-qa.js";

assert(exists("docs", docName), "Sprint Q5 closeout doc must exist.");
assert(exists("scripts", qaName), "Sprint Q5 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const readinessContract = read("public", "nexus-natural-response-generation-readiness-contract.js");
const featureFlagModule = read("public", "nexus-natural-response-generation-feature-flag.js");
const q3Harness = read("scripts", "nexus-sprint-q3-natural-response-generation-flag-contract-harness.js");
const fixtures = loadNaturalResponseGenerationFlagFixtures();

assertIncludes(doc, [
  "Sprint Q5",
  "ca0e239c0d8d79246e1c8817a5ec89ce6aebdbf7",
  "documentation and deterministic QA only",
  "Sprint Q Completion Summary",
  "What Is Active Now",
  "What Remains Inert",
  "No-Authority And No-Execution Guarantees",
  "Blocked Runtime Categories",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "Rollback Strategy",
  "Sprint R1 - Multilingual Intelligence Runtime Activation Readiness Gate"
], "Q5 closeout doc");

assertIncludes(doc, [
  "Natural Response Generation runtime activation readiness gate",
  "Natural Response Generation feature flag contract",
  "Natural Response Generation flag contract harness",
  "Natural Response Generation runtime absence regression guard",
  "Natural Response Generation lane closeout"
], "Q5 sprint summary");

assertIncludes(doc, [
  "Natural Response Generation readiness is not runtime activation",
  "Natural Response Generation visibility readiness is not response-generation authority",
  "generated response metadata is not consent, identity, role authorization, provider authorization, provider availability, source authority, factual authority, medical advice, diagnosis, prescription, payment completion, emergency dispatch, communication completion, or execution approval",
  "source metadata must remain non-authoritative context",
  "confidence metadata must remain non-authoritative context",
  "policy metadata must remain non-authoritative context",
  "generated text cannot authorize, stage, dispatch, or execute an action by itself",
  "ambiguous prompts must clarify rather than infer high-impact intent from generated text or response metadata",
  "enabled: false",
  "visibleUiAllowed: false",
  "responseReviewAllowed: false",
  "plainLanguagePreviewAllowed: false",
  "sourceTraceReviewAllowed: false",
  "responseRuntimeAllowed: false",
  "liveResponseModelAllowed: false",
  "unsupportedClaimAllowed: false",
  "providerConnectionClaimAllowed: false",
  "completedActionClaimAllowed: false",
  "diagnosisClaimAllowed: false",
  "prescriptionClaimAllowed: false",
  "paymentCompletionClaimAllowed: false",
  "transactionCompletionClaimAllowed: false",
  "emergencyDispatchClaimAllowed: false",
  "locationSharingClaimAllowed: false",
  "callMessageSentClaimAllowed: false",
  "sourceRetrievalRuntimeAllowed: false",
  "policyBypassAllowed: false",
  "confirmationBypassAllowed: false",
  "permissionBypassAllowed: false",
  "firstTurnExecutionAllowed: false",
  "laterTurnExecutionAllowed: false",
  "standardUserResponseGeneratorMutationAllowed: false",
  "backendWriteAllowed: false",
  "storageWriteAllowed: false",
  "networkAllowed: false",
  "auditWriteAllowed: false",
  "executionAuthority: false",
  "noExecution: true",
  "unsafe authority attempts normalize back to no-execution values",
  "no action has been taken"
], "Q5 no-authority and no-execution language");

assertIncludes(doc, [
  "live response model",
  "active generated response runtime",
  "natural response runtime UI",
  "generated response replacement",
  "response review buttons",
  "source trace preview UI",
  "plain language preview UI",
  "source retrieval runtime",
  "source-backed answer claims without sources",
  "stale data claims without freshness labels",
  "confidence-free source-backed claims",
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
  "regulated advice without a boundary",
  "event handlers",
  "typed route mutation",
  "voice route mutation",
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
], "Q5 blocked runtime categories");

const requiredDocs = [
  "NEXUS_SPRINT_Q1_NATURAL_RESPONSE_GENERATION_RUNTIME_ACTIVATION_READINESS_GATE.md",
  "NEXUS_SPRINT_Q2_NATURAL_RESPONSE_GENERATION_FEATURE_FLAG_CONTRACT.md",
  "NEXUS_SPRINT_Q3_NATURAL_RESPONSE_GENERATION_FLAG_CONTRACT_HARNESS.md",
  "NEXUS_SPRINT_Q4_NATURAL_RESPONSE_GENERATION_RUNTIME_ABSENCE_REGRESSION_GUARD.md",
  "NEXUS_NATURAL_RESPONSE_GENERATION_READINESS_CONTRACT_PHASE_69.md",
  "NEXUS_MULTILINGUAL_INTELLIGENCE_READINESS_CONTRACT_PHASE_70.md"
];

for (const requiredDoc of requiredDocs) {
  assert(exists("docs", requiredDoc), `Sprint Q5 requires prior or next-lane doc: ${requiredDoc}`);
}

const requiredScripts = [
  "nexus-sprint-q1-natural-response-generation-runtime-activation-readiness-gate-qa.js",
  "nexus-sprint-q2-natural-response-generation-feature-flag-contract-qa.js",
  "nexus-sprint-q3-natural-response-generation-flag-contract-harness-qa.js",
  "nexus-sprint-q4-natural-response-generation-runtime-absence-regression-guard-qa.js"
];

for (const requiredScript of requiredScripts) {
  assert(exists("scripts", requiredScript), `Sprint Q5 requires prior Sprint Q QA: ${requiredScript}`);
  assert(qaSuite.includes(`scripts/${requiredScript}`), `qa-suite must include prior Sprint Q QA: ${requiredScript}`);
}

assert(exists("public", "nexus-natural-response-generation-readiness-contract.js"), "Sprint Q5 requires Phase 69 Natural Response Generation readiness contract.");
assert(exists("public", "nexus-natural-response-generation-feature-flag.js"), "Sprint Q5 requires Q2 feature flag contract.");
assert(exists("fixtures", "nexus", "natural-response-generation-feature-flags.json"), "Sprint Q5 requires Q3 feature flag fixture.");
assert(exists("public", "nexus-multilingual-intelligence-readiness-contract.js"), "Sprint Q5 requires Phase 70 Multilingual Intelligence readiness contract.");

assertIncludes(readinessContract, [
  "NATURAL_RESPONSE_GENERATION_READINESS_CONTRACT",
  "natural_response_generation.readiness.phase_69",
  "NATURAL_RESPONSE_GENERATION_NO_EXECUTION_DEFAULTS",
  "createNaturalResponseGenerationReadinessContract",
  "executionAllowed: false",
  "liveResponseModelEnabled: false",
  "unsupportedClaimAllowed: false",
  "providerConnectionClaimAllowed: false",
  "completedActionClaimAllowed: false"
], "Phase 69 Natural Response Generation readiness contract");

assertIncludes(featureFlagModule, [
  "DEFAULT_NATURAL_RESPONSE_GENERATION_FEATURE_FLAG_STATE",
  "NEXUS_NATURAL_RESPONSE_GENERATION_VISIBLE_ENABLED",
  "normalizeNaturalResponseGenerationFeatureFlagState",
  "isNaturalResponseGenerationVisibleFeatureEnabled",
  "executionAuthority",
  "noExecution"
], "Q2 Natural Response Generation feature flag module");

assertIncludes(q3Harness, [
  "loadNaturalResponseGenerationFlagFixtures",
  "validateNaturalResponseGenerationFlagFixtures"
], "Q3 Natural Response Generation harness");

assert.equal(DEFAULT_NATURAL_RESPONSE_GENERATION_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_NATURAL_RESPONSE_GENERATION_FEATURE_FLAG_STATE.visibleUiAllowed, false);
for (const field of protectedFields) {
  assert.equal(DEFAULT_NATURAL_RESPONSE_GENERATION_FEATURE_FLAG_STATE[field], false, `Q5 default ${field} must remain false.`);
}
assert.equal(DEFAULT_NATURAL_RESPONSE_GENERATION_FEATURE_FLAG_STATE.noExecution, true);

const normalizedUnsafeAttempt = normalizeNaturalResponseGenerationFeatureFlagState({
  enabled: true,
  visibleUiAllowed: true,
  responseReviewAllowed: true,
  plainLanguagePreviewAllowed: true,
  sourceTraceReviewAllowed: true,
  responseRuntimeAllowed: true,
  liveResponseModelAllowed: true,
  unsupportedClaimAllowed: true,
  providerConnectionClaimAllowed: true,
  completedActionClaimAllowed: true,
  diagnosisClaimAllowed: true,
  prescriptionClaimAllowed: true,
  paymentCompletionClaimAllowed: true,
  transactionCompletionClaimAllowed: true,
  emergencyDispatchClaimAllowed: true,
  locationSharingClaimAllowed: true,
  callMessageSentClaimAllowed: true,
  sourceRetrievalRuntimeAllowed: true,
  policyBypassAllowed: true,
  confirmationBypassAllowed: true,
  permissionBypassAllowed: true,
  firstTurnExecutionAllowed: true,
  laterTurnExecutionAllowed: true,
  standardUserResponseGeneratorMutationAllowed: true,
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

const fixtureResult = validateNaturalResponseGenerationFlagFixtures(fixtures);
assert.equal(fixtureResult.ok, true, "Q3 fixtures must remain valid.");
assert.equal(fixtureResult.count, 4, "Q3 fixtures must remain complete.");

const runtime = [index, app, server].join("\n");
for (const term of [
  "nexus-natural-response-generation-readiness-contract.js",
  "nexus-natural-response-generation-feature-flag.js",
  "nexus-sprint-q3-natural-response-generation-flag-contract-harness",
  "natural-response-generation-feature-flags.json",
  "NEXUS_NATURAL_RESPONSE_GENERATION_VISIBLE_ENABLED",
  "NexusNaturalResponseGenerationFeatureFlagContract",
  "normalizeNaturalResponseGenerationFeatureFlagState",
  "isNaturalResponseGenerationVisibleFeatureEnabled",
  "naturalResponseGenerationRuntime",
  "liveResponseModel",
  "generateLiveResponse(",
  "replaceAssistantResponse(",
  "retrieveSources(",
  "claimCompletedAction(",
  "connectProvider(",
  "nexus-sprint-q5-natural-response-generation-lane-closeout"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Natural Response Generation lane artifact: ${term}`);
}

for (const source of [featureFlagModule, q3Harness]) {
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
    "generateLiveResponse(",
    "replaceAssistantResponse(",
    "retrieveSources(",
    "claimCompletedAction(",
    "connectProvider("
  ]) {
    assert(!source.includes(term), `Sprint Q contract/harness must not include runtime API: ${term}`);
  }
}

const alias = "qa:nexus-sprint-q5-natural-response-generation-lane-closeout";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint Q5 QA.");

console.log("[nexus-sprint-q5-natural-response-generation-lane-closeout-qa] passed");
