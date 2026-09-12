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

const docName = "NEXUS_SPRINT_Q4_NATURAL_RESPONSE_GENERATION_RUNTIME_ABSENCE_REGRESSION_GUARD.md";
const qaName = "nexus-sprint-q4-natural-response-generation-runtime-absence-regression-guard-qa.js";

assert(exists("docs", docName), "Sprint Q4 absence guard doc must exist.");
assert(exists("scripts", qaName), "Sprint Q4 QA script must exist.");

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
  "Sprint Q4",
  "51c7daaa00c2153e21fa2e501032146dda2d01fa",
  "documentation and QA only",
  "Purpose",
  "Runtime Absence Requirements",
  "Blocked Runtime Behavior",
  "Required Contract Invariants",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "QA Expectations",
  "Sprint Q5 - Natural Response Generation Lane Closeout"
], "Q4 absence guard doc");

assertIncludes(doc, [
  "Q1 Natural Response Generation runtime activation readiness gate",
  "Q2 Natural Response Generation feature flag contract",
  "Q3 Natural Response Generation flag contract harness",
  "Phase 69 Natural Response Generation readiness contract"
], "Q4 protected artifacts");

assertIncludes(doc, [
  "public/nexus-natural-response-generation-readiness-contract.js",
  "public/nexus-natural-response-generation-feature-flag.js",
  "scripts/nexus-sprint-q3-natural-response-generation-flag-contract-harness.js",
  "fixtures/nexus/natural-response-generation-feature-flags.json",
  "Sprint Q QA scripts"
], "Q4 runtime absence artifact list");

assertIncludes(doc, [
  "It intentionally does not ban generic words such as",
  "response",
  "source",
  "review",
  "language",
  "confidence",
  "freshness",
  "route",
  "settings"
], "Q4 generic wording exception");

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
], "Q4 blocked runtime behavior");

for (const requiredPath of [
  ["docs", "NEXUS_SPRINT_Q1_NATURAL_RESPONSE_GENERATION_RUNTIME_ACTIVATION_READINESS_GATE.md"],
  ["docs", "NEXUS_SPRINT_Q2_NATURAL_RESPONSE_GENERATION_FEATURE_FLAG_CONTRACT.md"],
  ["docs", "NEXUS_SPRINT_Q3_NATURAL_RESPONSE_GENERATION_FLAG_CONTRACT_HARNESS.md"],
  ["docs", "NEXUS_NATURAL_RESPONSE_GENERATION_READINESS_CONTRACT_PHASE_69.md"],
  ["public", "nexus-natural-response-generation-readiness-contract.js"],
  ["public", "nexus-natural-response-generation-feature-flag.js"],
  ["fixtures", "nexus", "natural-response-generation-feature-flags.json"],
  ["scripts", "nexus-sprint-q3-natural-response-generation-flag-contract-harness.js"]
]) {
  assert(exists(...requiredPath), `Q4 requires artifact: ${requiredPath.join("/")}`);
}

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
  "nexus-sprint-q4-natural-response-generation-runtime-absence-regression-guard"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Natural Response Generation lane artifact: ${term}`);
}

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

assert.equal(DEFAULT_NATURAL_RESPONSE_GENERATION_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_NATURAL_RESPONSE_GENERATION_FEATURE_FLAG_STATE.visibleUiAllowed, false);
for (const field of protectedFields) {
  assert.equal(DEFAULT_NATURAL_RESPONSE_GENERATION_FEATURE_FLAG_STATE[field], false, `Q4 default ${field} must remain false.`);
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

const alias = "qa:nexus-sprint-q4-natural-response-generation-runtime-absence-regression-guard";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint Q4 QA.");

console.log("[nexus-sprint-q4-natural-response-generation-runtime-absence-regression-guard-qa] passed");
