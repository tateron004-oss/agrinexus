const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  MULTILINGUAL_INTELLIGENCE_FEATURE_FLAG_NAME,
  DEFAULT_MULTILINGUAL_INTELLIGENCE_FEATURE_FLAG_STATE,
  normalizeMultilingualIntelligenceFeatureFlagState,
  isMultilingualIntelligenceVisibleFeatureEnabled
} = require("../public/nexus-multilingual-intelligence-feature-flag.js");

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

const docName = "NEXUS_SPRINT_R2_MULTILINGUAL_INTELLIGENCE_FEATURE_FLAG_CONTRACT.md";
const moduleName = "nexus-multilingual-intelligence-feature-flag.js";
const qaName = "nexus-sprint-r2-multilingual-intelligence-feature-flag-contract-qa.js";

assert(exists("docs", docName), "Sprint R2 feature flag contract doc must exist.");
assert(exists("public", moduleName), "Sprint R2 feature flag module must exist.");
assert(exists("scripts", qaName), "Sprint R2 QA script must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const readinessContract = read("public", "nexus-multilingual-intelligence-readiness-contract.js");
const r1Doc = read("docs", "NEXUS_SPRINT_R1_MULTILINGUAL_INTELLIGENCE_RUNTIME_ACTIVATION_READINESS_GATE.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "Sprint R2",
  "6fb905ce30e2db7a131424809d65b522c205d975",
  "standalone inert contract module and deterministic QA only",
  "Feature Flag Name",
  "NEXUS_MULTILINGUAL_INTELLIGENCE_VISIBLE_ENABLED",
  "Default State",
  "Contract Module",
  "Important Boundary",
  "Prohibited Behavior",
  "Relationship To Sprint R1",
  "QA Expectations",
  "Sprint R3 - Multilingual Intelligence Flag Contract Harness"
], "R2 feature flag doc");

assert(readinessContract.includes("multilingual_intelligence.readiness.phase_70"), "R2 must build on the Phase 70 Multilingual Intelligence readiness contract.");
assert(readinessContract.includes("liveTranslationProviderEnabled: false"), "Phase 70 live translation provider default must remain false.");
assert(readinessContract.includes("automaticLanguageSwitchingEnabled: false"), "Phase 70 automatic language switching default must remain false.");
assert(readinessContract.includes("clinicalInterpretationClaimAllowed: false"), "Phase 70 clinical interpretation claim default must remain false.");
assert(readinessContract.includes("providerExecutionFromLanguageSwitchEnabled: false"), "Phase 70 provider execution from language switch default must remain false.");
assert(readinessContract.includes("executionAllowed: false"), "Phase 70 execution default must remain false.");
assert(r1Doc.includes("Sprint R2 - Multilingual Intelligence Feature Flag Contract"), "R1 must recommend Sprint R2.");

const protectedFields = [
  "languageReviewAllowed",
  "localizedResponsePreviewAllowed",
  "sourceTraceLanguageReviewAllowed",
  "languageRuntimeAllowed",
  "liveTranslationProviderAllowed",
  "automaticLanguageSwitchingAllowed",
  "clinicalInterpretationClaimAllowed",
  "medicalTranslationCertificationClaimAllowed",
  "providerExecutionFromLanguageSwitchAllowed",
  "callMessageExecutionFromLanguageSwitchAllowed",
  "paymentExecutionFromLanguageSwitchAllowed",
  "regulatedTranslationExecutionAllowed",
  "emergencyDispatchTranslationAllowed",
  "locationCameraActivationFromLanguageSwitchAllowed",
  "policyBypassAllowed",
  "confirmationBypassAllowed",
  "permissionBypassAllowed",
  "firstTurnExecutionAllowed",
  "laterTurnExecutionAllowed",
  "standardUserLanguageEngineMutationAllowed",
  "backendWriteAllowed",
  "storageWriteAllowed",
  "networkAllowed",
  "auditWriteAllowed",
  "executionAuthority"
];

assert.equal(MULTILINGUAL_INTELLIGENCE_FEATURE_FLAG_NAME, "NEXUS_MULTILINGUAL_INTELLIGENCE_VISIBLE_ENABLED");
assert.equal(DEFAULT_MULTILINGUAL_INTELLIGENCE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_MULTILINGUAL_INTELLIGENCE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
assert.equal(DEFAULT_MULTILINGUAL_INTELLIGENCE_FEATURE_FLAG_STATE.noExecution, true);
for (const field of protectedFields) {
  assert.equal(DEFAULT_MULTILINGUAL_INTELLIGENCE_FEATURE_FLAG_STATE[field], false, `default ${field} must be false.`);
  assert(doc.includes(`${field}: false`), `R2 doc must document ${field}: false.`);
}

const defaultState = normalizeMultilingualIntelligenceFeatureFlagState();
assert.equal(defaultState.enabled, false);
assert.equal(defaultState.visibleUiAllowed, false);
assert.equal(defaultState.noExecution, true);
assert.equal(isMultilingualIntelligenceVisibleFeatureEnabled(defaultState), false);

const visibleOnly = normalizeMultilingualIntelligenceFeatureFlagState({
  enabled: true,
  visibleUiAllowed: true
});
assert.equal(visibleOnly.enabled, true);
assert.equal(visibleOnly.visibleUiAllowed, true);
assert.equal(isMultilingualIntelligenceVisibleFeatureEnabled(visibleOnly), true);
for (const field of protectedFields) {
  assert.equal(visibleOnly[field], false, `visible-only state must keep ${field}=false.`);
}
assert.equal(visibleOnly.noExecution, true);

const unsafeAttempt = normalizeMultilingualIntelligenceFeatureFlagState({
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
assert.equal(unsafeAttempt.visibleUiAllowed, true);
for (const field of protectedFields) {
  assert.equal(unsafeAttempt[field], false, `unsafe attempt must keep ${field}=false.`);
}
assert.equal(unsafeAttempt.noExecution, true);

const runtime = [index, app, server].join("\n");
for (const term of [
  moduleName,
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
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Multilingual Intelligence feature flag artifact: ${term}`);
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
  "translateLive(",
  "replaceLanguageEngine(",
  "claimClinicalInterpretation(",
  "executeLanguageAction("
]) {
  assert(!moduleSource.includes(term), `R2 feature flag module must not include runtime API: ${term}`);
}

const alias = "qa:nexus-sprint-r2-multilingual-intelligence-feature-flag-contract";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint R2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-r1-multilingual-intelligence-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint R1 QA.");

console.log("[nexus-sprint-r2-multilingual-intelligence-feature-flag-contract-qa] passed");
