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

function assertRuntimeExcludes(source, terms, label) {
  for (const term of terms) {
    assert(!source.includes(term), `${label} must not runtime-load or activate Sprint R artifact: ${term}`);
  }
}

const docName = "NEXUS_SPRINT_R5_MULTILINGUAL_INTELLIGENCE_LANE_CLOSEOUT.md";
const qaName = "nexus-sprint-r5-multilingual-intelligence-lane-closeout-qa.js";

assert(exists("docs", docName), "Sprint R5 closeout doc must exist.");
assert(exists("scripts", qaName), "Sprint R5 QA script must exist.");

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
  "Sprint R5",
  "e2518cd494d588a6b195fec8f96cf0345eeff5af",
  "documentation and deterministic QA only",
  "Sprint R Completion Summary",
  "What Is Active Now",
  "What Remains Inert",
  "No-Authority And No-Execution Guarantees",
  "Blocked Runtime Categories",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "Rollback Strategy",
  "Sprint S1 - Farmer Agriculture Intelligence Runtime Activation Readiness Gate"
], "R5 closeout doc");

assertIncludes(doc, [
  "Multilingual Intelligence runtime activation readiness gate",
  "Multilingual Intelligence feature flag contract",
  "Multilingual Intelligence flag contract harness",
  "Multilingual Intelligence runtime absence regression guard",
  "Multilingual Intelligence lane closeout"
], "R5 sprint summary");

assertIncludes(doc, [
  "Multilingual Intelligence readiness is not runtime activation",
  "Multilingual Intelligence visibility readiness is not translation authority",
  "language metadata is not consent, identity, role authorization, provider authorization, provider availability, source authority, factual authority, medical advice, clinical interpretation, diagnosis, prescription, payment completion, emergency dispatch, communication completion, or execution approval",
  "translated wording, locale metadata, browser language metadata, and voice language metadata must remain non-authoritative context",
  "generated or translated text cannot authorize, stage, dispatch, or execute an action by itself",
  "enabled: false",
  "visibleUiAllowed: false",
  "languageReviewAllowed: false",
  "translatedResponsePreviewAllowed: false",
  "sourceTraceLanguagePreviewAllowed: false",
  "clinicalInterpretationClaimAllowed: false",
  "medicalInterpretationComplianceClaimAllowed: false",
  "providerConnectionClaimAllowed: false",
  "completedActionClaimAllowed: false",
  "diagnosisClaimAllowed: false",
  "prescriptionClaimAllowed: false",
  "paymentCompletionClaimAllowed: false",
  "transactionCompletionClaimAllowed: false",
  "emergencyDispatchClaimAllowed: false",
  "locationSharingClaimAllowed: false",
  "callMessageSentClaimAllowed: false",
  "liveTranslationProviderAllowed: false",
  "automaticLanguageSwitchAllowed: false",
  "languageEngineReplacementAllowed: false",
  "sourceRetrievalRuntimeAllowed: false",
  "policyBypassAllowed: false",
  "confirmationBypassAllowed: false",
  "permissionBypassAllowed: false",
  "firstTurnExecutionAllowed: false",
  "laterTurnExecutionAllowed: false",
  "standardUserLanguageMutationAllowed: false",
  "backendWriteAllowed: false",
  "storageWriteAllowed: false",
  "networkAllowed: false",
  "auditWriteAllowed: false",
  "executionAuthority: false",
  "noExecution: true",
  "unsafe authority attempts normalize back to no-execution values",
  "no action has been taken"
], "R5 no-authority and no-execution language");

assertIncludes(doc, [
  "live translation provider",
  "active Multilingual Intelligence runtime",
  "multilingual intelligence runtime UI",
  "language review buttons",
  "generated translated response replacement",
  "translated source trace preview UI",
  "localized response preview UI",
  "source retrieval runtime",
  "clinical interpretation claims",
  "medical interpretation compliance claims",
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
  "automatic language switching",
  "language engine replacement",
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
], "R5 blocked runtime categories");

const requiredDocs = [
  "NEXUS_SPRINT_R1_MULTILINGUAL_INTELLIGENCE_RUNTIME_ACTIVATION_READINESS_GATE.md",
  "NEXUS_SPRINT_R2_MULTILINGUAL_INTELLIGENCE_FEATURE_FLAG_CONTRACT.md",
  "NEXUS_SPRINT_R3_MULTILINGUAL_INTELLIGENCE_FLAG_CONTRACT_HARNESS.md",
  "NEXUS_SPRINT_R4_MULTILINGUAL_INTELLIGENCE_RUNTIME_ABSENCE_REGRESSION_GUARD.md",
  "NEXUS_MULTILINGUAL_INTELLIGENCE_READINESS_CONTRACT_PHASE_70.md",
  "NEXUS_FARMER_AGRICULTURE_INTELLIGENCE_READINESS_CONTRACT_PHASE_71.md"
];

for (const requiredDoc of requiredDocs) {
  assert(exists("docs", requiredDoc), `Sprint R5 requires prior or next-lane doc: ${requiredDoc}`);
}

const requiredScripts = [
  "nexus-sprint-r1-multilingual-intelligence-runtime-activation-readiness-gate-qa.js",
  "nexus-sprint-r2-multilingual-intelligence-feature-flag-contract-qa.js",
  "nexus-sprint-r3-multilingual-intelligence-flag-contract-harness-qa.js",
  "nexus-sprint-r4-multilingual-intelligence-runtime-absence-regression-guard-qa.js"
];

for (const requiredScript of requiredScripts) {
  assert(exists("scripts", requiredScript), `Sprint R5 requires prior Sprint R QA: ${requiredScript}`);
  assert(qaSuite.includes(`scripts/${requiredScript}`), `qa-suite must include prior Sprint R QA: ${requiredScript}`);
}

assert(exists("public", "nexus-multilingual-intelligence-readiness-contract.js"), "Sprint R5 requires Phase 70 Multilingual Intelligence readiness contract.");
assert(exists("public", "nexus-multilingual-intelligence-feature-flag.js"), "Sprint R5 requires R2 feature flag contract.");
assert(exists("fixtures", "nexus", "multilingual-intelligence-feature-flags.json"), "Sprint R5 requires R3 feature flag fixture.");
assert(exists("public", "nexus-farmer-agriculture-intelligence-readiness-contract.js"), "Sprint R5 requires Phase 71 Farmer Agriculture Intelligence readiness contract.");

assertIncludes(readinessContract, [
  "MULTILINGUAL_INTELLIGENCE_READINESS_CONTRACT",
  "multilingual_intelligence.readiness.phase_70",
  "MULTILINGUAL_INTELLIGENCE_NO_EXECUTION_DEFAULTS",
  "createMultilingualIntelligenceReadinessContract",
  "executionAllowed: false",
  "liveTranslationProviderEnabled: false",
  "clinicalInterpretationClaimAllowed: false",
  "medicalTranslationCertificationClaimAllowed: false",
  "providerExecutionFromLanguageSwitchEnabled: false",
  "regulatedTranslationExecutionEnabled: false",
  "standardUserLanguageEngineMutationAllowed: false"
], "Phase 70 Multilingual Intelligence readiness contract");

assertIncludes(featureFlagModule, [
  "DEFAULT_MULTILINGUAL_INTELLIGENCE_FEATURE_FLAG_STATE",
  "NEXUS_MULTILINGUAL_INTELLIGENCE_VISIBLE_ENABLED",
  "normalizeMultilingualIntelligenceFeatureFlagState",
  "isMultilingualIntelligenceVisibleFeatureEnabled",
  "executionAuthority",
  "noExecution"
], "R2 Multilingual Intelligence feature flag module");

assertIncludes(r3Harness, [
  "loadMultilingualIntelligenceFlagFixtures",
  "validateMultilingualIntelligenceFlagFixtures"
], "R3 Multilingual Intelligence harness");

assert.equal(DEFAULT_MULTILINGUAL_INTELLIGENCE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_MULTILINGUAL_INTELLIGENCE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
for (const field of protectedFields) {
  assert.equal(DEFAULT_MULTILINGUAL_INTELLIGENCE_FEATURE_FLAG_STATE[field], false, `R5 default ${field} must remain false.`);
}
assert.equal(DEFAULT_MULTILINGUAL_INTELLIGENCE_FEATURE_FLAG_STATE.noExecution, true);

const normalizedUnsafeAttempt = normalizeMultilingualIntelligenceFeatureFlagState({
  enabled: true,
  visibleUiAllowed: true,
  languageReviewAllowed: true,
  translatedResponsePreviewAllowed: true,
  sourceTraceLanguagePreviewAllowed: true,
  clinicalInterpretationClaimAllowed: true,
  medicalInterpretationComplianceClaimAllowed: true,
  providerConnectionClaimAllowed: true,
  completedActionClaimAllowed: true,
  diagnosisClaimAllowed: true,
  prescriptionClaimAllowed: true,
  paymentCompletionClaimAllowed: true,
  transactionCompletionClaimAllowed: true,
  emergencyDispatchClaimAllowed: true,
  locationSharingClaimAllowed: true,
  callMessageSentClaimAllowed: true,
  liveTranslationProviderAllowed: true,
  automaticLanguageSwitchAllowed: true,
  languageEngineReplacementAllowed: true,
  sourceRetrievalRuntimeAllowed: true,
  policyBypassAllowed: true,
  confirmationBypassAllowed: true,
  permissionBypassAllowed: true,
  firstTurnExecutionAllowed: true,
  laterTurnExecutionAllowed: true,
  standardUserLanguageMutationAllowed: true,
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
  assert.equal(normalizedUnsafeAttempt[field], false, `R5 unsafe attempt for ${field} must normalize to false.`);
}
assert.equal(normalizedUnsafeAttempt.noExecution, true);

validateMultilingualIntelligenceFlagFixtures(fixtures);
assert.equal(fixtures.length, 4, "R5 expects four R3 multilingual feature flag fixtures.");

const runtimeForbiddenTerms = [
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
  "executeLanguageAction("
];

assertRuntimeExcludes(index, runtimeForbiddenTerms, "public/index.html");
assertRuntimeExcludes(app, runtimeForbiddenTerms, "public/app.js");
assertRuntimeExcludes(server, runtimeForbiddenTerms, "server.js");

const alias = "qa:nexus-sprint-r5-multilingual-intelligence-lane-closeout";
assert.equal(
  pkg.scripts[alias],
  "node scripts/nexus-sprint-r5-multilingual-intelligence-lane-closeout-qa.js",
  "package.json must expose Sprint R5 QA alias."
);
assert(qaSuite.includes("scripts/nexus-sprint-r5-multilingual-intelligence-lane-closeout-qa.js"), "qa-suite must include Sprint R5 QA.");

console.log("[nexus-sprint-r5-multilingual-intelligence-lane-closeout-qa] passed");
