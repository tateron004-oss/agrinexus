const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  DEFAULT_MULTILINGUAL_INTELLIGENCE_FEATURE_FLAG_STATE,
  normalizeMultilingualIntelligenceFeatureFlagState
} = require("../public/nexus-multilingual-intelligence-feature-flag.js");
const {
  protectedFields,
  loadMultilingualIntelligenceFlagFixtures,
  validateMultilingualIntelligenceFlagFixtures
} = require("./nexus-sprint-r3-multilingual-intelligence-flag-contract-harness.js");

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

const docName = "NEXUS_SPRINT_R4_MULTILINGUAL_INTELLIGENCE_RUNTIME_ABSENCE_REGRESSION_GUARD.md";
const qaName = "nexus-sprint-r4-multilingual-intelligence-runtime-absence-regression-guard-qa.js";

assert(exists("docs", docName), "Sprint R4 absence guard doc must exist.");
assert(exists("scripts", qaName), "Sprint R4 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const readinessContract = read("public", "nexus-multilingual-intelligence-readiness-contract.js");
const featureFlagModule = read("public", "nexus-multilingual-intelligence-feature-flag.js");
const r3Harness = read("scripts", "nexus-sprint-r3-multilingual-intelligence-flag-contract-harness.js");
const fixtures = loadMultilingualIntelligenceFlagFixtures();

assertIncludes(doc, [
  "Sprint R4",
  "aa7ad22959b35a579a23a91e3494560d0046fa05",
  "documentation and QA only",
  "Purpose",
  "Runtime Absence Requirements",
  "Blocked Runtime Behavior",
  "Required Contract Invariants",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "QA Expectations",
  "Sprint R5 - Multilingual Intelligence Lane Closeout"
], "R4 absence guard doc");

assertIncludes(doc, [
  "R1 Multilingual Intelligence runtime activation readiness gate",
  "R2 Multilingual Intelligence feature flag contract",
  "R3 Multilingual Intelligence flag contract harness",
  "Phase 70 Multilingual Intelligence readiness contract"
], "R4 protected artifacts");

assertIncludes(doc, [
  "public/nexus-multilingual-intelligence-readiness-contract.js",
  "public/nexus-multilingual-intelligence-feature-flag.js",
  "scripts/nexus-sprint-r3-multilingual-intelligence-flag-contract-harness.js",
  "fixtures/nexus/multilingual-intelligence-feature-flags.json",
  "Sprint R QA scripts"
], "R4 runtime absence artifact list");

assertIncludes(doc, [
  "It intentionally does not ban generic words such as",
  "language",
  "locale",
  "translate",
  "voice",
  "route",
  "settings",
  "Spanish",
  "French",
  "Arabic",
  "Portuguese",
  "Swahili"
], "R4 generic wording exception");

assertIncludes(doc, [
  "live translation provider",
  "active multilingual intelligence runtime",
  "multilingual intelligence runtime UI",
  "language engine replacement",
  "automatic language switching",
  "generated translated response replacement",
  "language review buttons",
  "source trace language preview UI",
  "localized response preview UI",
  "source retrieval runtime",
  "clinical interpretation claims",
  "medical translation certification claims",
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
  "automatic route changes from translated text",
  "policy bypass from translated text",
  "confirmation bypass from translated text",
  "permission bypass from translated text",
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
], "R4 blocked runtime behavior");

for (const requiredPath of [
  ["docs", "NEXUS_SPRINT_R1_MULTILINGUAL_INTELLIGENCE_RUNTIME_ACTIVATION_READINESS_GATE.md"],
  ["docs", "NEXUS_SPRINT_R2_MULTILINGUAL_INTELLIGENCE_FEATURE_FLAG_CONTRACT.md"],
  ["docs", "NEXUS_SPRINT_R3_MULTILINGUAL_INTELLIGENCE_FLAG_CONTRACT_HARNESS.md"],
  ["docs", "NEXUS_MULTILINGUAL_INTELLIGENCE_READINESS_CONTRACT_PHASE_70.md"],
  ["public", "nexus-multilingual-intelligence-readiness-contract.js"],
  ["public", "nexus-multilingual-intelligence-feature-flag.js"],
  ["fixtures", "nexus", "multilingual-intelligence-feature-flags.json"],
  ["scripts", "nexus-sprint-r3-multilingual-intelligence-flag-contract-harness.js"]
]) {
  assert(exists(...requiredPath), `R4 requires artifact: ${requiredPath.join("/")}`);
}

const runtime = [index, app, server].join("\n");
for (const term of [
  "nexus-multilingual-intelligence-readiness-contract.js",
  "nexus-multilingual-intelligence-feature-flag.js",
  "nexus-sprint-r3-multilingual-intelligence-flag-contract-harness",
  "multilingual-intelligence-feature-flags.json",
  "NEXUS_MULTILINGUAL_INTELLIGENCE_VISIBLE_ENABLED",
  "NexusMultilingualIntelligenceFeatureFlagContract",
  "normalizeMultilingualIntelligenceFeatureFlagState",
  "isMultilingualIntelligenceVisibleFeatureEnabled",
  "multilingualIntelligenceRuntime",
  "liveTranslationProvider",
  "translateLive(",
  "replaceLanguageEngine(",
  "claimClinicalInterpretation(",
  "executeLanguageAction(",
  "nexus-sprint-r4-multilingual-intelligence-runtime-absence-regression-guard"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Multilingual Intelligence lane artifact: ${term}`);
}

assertIncludes(readinessContract, [
  "MULTILINGUAL_INTELLIGENCE_READINESS_CONTRACT",
  "multilingual_intelligence.readiness.phase_70",
  "MULTILINGUAL_INTELLIGENCE_NO_EXECUTION_DEFAULTS",
  "createMultilingualIntelligenceReadinessContract",
  "executionAllowed: false",
  "liveTranslationProviderEnabled: false",
  "automaticLanguageSwitchingEnabled: false",
  "clinicalInterpretationClaimAllowed: false",
  "providerExecutionFromLanguageSwitchEnabled: false"
], "Phase 70 Multilingual Intelligence readiness contract");

assert.equal(DEFAULT_MULTILINGUAL_INTELLIGENCE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_MULTILINGUAL_INTELLIGENCE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
for (const field of protectedFields) {
  assert.equal(DEFAULT_MULTILINGUAL_INTELLIGENCE_FEATURE_FLAG_STATE[field], false, `R4 default ${field} must remain false.`);
}
assert.equal(DEFAULT_MULTILINGUAL_INTELLIGENCE_FEATURE_FLAG_STATE.noExecution, true);

const normalizedUnsafeAttempt = normalizeMultilingualIntelligenceFeatureFlagState({
  enabled: true,
  visibleUiAllowed: true,
  languageReviewAllowed: true,
  localizedResponsePreviewAllowed: true,
  sourceTraceLanguageReviewAllowed: true,
  languageRuntimeAllowed: true,
  liveTranslationProviderAllowed: true,
  automaticLanguageSwitchingAllowed: true,
  clinicalInterpretationClaimAllowed: true,
  medicalTranslationCertificationClaimAllowed: true,
  providerExecutionFromLanguageSwitchAllowed: true,
  callMessageExecutionFromLanguageSwitchAllowed: true,
  paymentExecutionFromLanguageSwitchAllowed: true,
  regulatedTranslationExecutionAllowed: true,
  emergencyDispatchTranslationAllowed: true,
  locationCameraActivationFromLanguageSwitchAllowed: true,
  policyBypassAllowed: true,
  confirmationBypassAllowed: true,
  permissionBypassAllowed: true,
  firstTurnExecutionAllowed: true,
  laterTurnExecutionAllowed: true,
  standardUserLanguageEngineMutationAllowed: true,
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

const fixtureResult = validateMultilingualIntelligenceFlagFixtures(fixtures);
assert.equal(fixtureResult.ok, true, "R3 fixtures must remain valid.");
assert.equal(fixtureResult.count, 4, "R3 fixtures must remain complete.");

for (const source of [featureFlagModule, r3Harness]) {
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
    "translateLive(",
    "replaceLanguageEngine(",
    "claimClinicalInterpretation(",
    "executeLanguageAction("
  ]) {
    assert(!source.includes(term), `Sprint R contract/harness must not include runtime API: ${term}`);
  }
}

const alias = "qa:nexus-sprint-r4-multilingual-intelligence-runtime-absence-regression-guard";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint R4 QA.");

console.log("[nexus-sprint-r4-multilingual-intelligence-runtime-absence-regression-guard-qa] passed");
