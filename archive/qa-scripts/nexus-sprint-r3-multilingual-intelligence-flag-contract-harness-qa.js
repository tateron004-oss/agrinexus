const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
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

const docName = "NEXUS_SPRINT_R3_MULTILINGUAL_INTELLIGENCE_FLAG_CONTRACT_HARNESS.md";
const fixtureName = "multilingual-intelligence-feature-flags.json";
const harnessName = "nexus-sprint-r3-multilingual-intelligence-flag-contract-harness.js";
const qaName = "nexus-sprint-r3-multilingual-intelligence-flag-contract-harness-qa.js";

assert(exists("docs", docName), "Sprint R3 harness doc must exist.");
assert(exists("fixtures", "nexus", fixtureName), "Sprint R3 fixture file must exist.");
assert(exists("scripts", harnessName), "Sprint R3 harness must exist.");
assert(exists("scripts", qaName), "Sprint R3 QA script must exist.");

const doc = read("docs", docName);
const fixtureSource = read("fixtures", "nexus", fixtureName);
const harnessSource = read("scripts", harnessName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const fixtures = loadMultilingualIntelligenceFlagFixtures();

assertIncludes(doc, [
  "Sprint R3",
  "dbe6ce4e3ade19b9fafd51bfd070f37f1b26059f",
  "fixture, harness, documentation, and QA only",
  "fixtures/nexus/multilingual-intelligence-feature-flags.json",
  "scripts/nexus-sprint-r3-multilingual-intelligence-flag-contract-harness.js",
  "languageReviewAllowed: false",
  "localizedResponsePreviewAllowed: false",
  "sourceTraceLanguageReviewAllowed: false",
  "languageRuntimeAllowed: false",
  "liveTranslationProviderAllowed: false",
  "automaticLanguageSwitchingAllowed: false",
  "clinicalInterpretationClaimAllowed: false",
  "medicalTranslationCertificationClaimAllowed: false",
  "providerExecutionFromLanguageSwitchAllowed: false",
  "callMessageExecutionFromLanguageSwitchAllowed: false",
  "paymentExecutionFromLanguageSwitchAllowed: false",
  "regulatedTranslationExecutionAllowed: false",
  "emergencyDispatchTranslationAllowed: false",
  "locationCameraActivationFromLanguageSwitchAllowed: false",
  "policyBypassAllowed: false",
  "confirmationBypassAllowed: false",
  "permissionBypassAllowed: false",
  "firstTurnExecutionAllowed: false",
  "laterTurnExecutionAllowed: false",
  "standardUserLanguageEngineMutationAllowed: false",
  "backendWriteAllowed: false",
  "storageWriteAllowed: false",
  "networkAllowed: false",
  "auditWriteAllowed: false",
  "executionAuthority: false",
  "noExecution: true",
  "Sprint R4 - Multilingual Intelligence Runtime Absence Regression Guard"
], "R3 harness doc");

assert.equal(fixtures.length, 4, "R3 fixture set must include exactly four flag fixtures.");

[
  "multilingual-intelligence-default-off",
  "multilingual-intelligence-flag-on-review-only",
  "multilingual-intelligence-unsafe-authority-attempt",
  "multilingual-intelligence-flag-on-without-visible-permission"
].forEach(id => {
  assert(fixtures.some(fixture => fixture.fixtureId === id), `R3 fixture set must include ${id}`);
});

const result = validateMultilingualIntelligenceFlagFixtures(fixtures);
assert.equal(result.ok, true, "R3 harness must validate fixtures successfully.");
assert.equal(result.count, 4, "R3 harness must report four fixtures.");

assert(fixtureSource.includes("\"executionAuthority\": true"), "R3 must include an unsafe executionAuthority attempt fixture.");
assert(fixtureSource.includes("\"noExecution\": false"), "R3 must include an unsafe noExecution false attempt fixture.");
assert(fixtureSource.includes("\"languageRuntimeAllowed\": true"), "R3 must include an unsafe language runtime attempt fixture.");
assert(fixtureSource.includes("\"liveTranslationProviderAllowed\": true"), "R3 must include an unsafe live translation provider attempt fixture.");
assert(fixtureSource.includes("\"automaticLanguageSwitchingAllowed\": true"), "R3 must include an unsafe automatic language switching attempt fixture.");
assert(fixtureSource.includes("\"clinicalInterpretationClaimAllowed\": true"), "R3 must include an unsafe clinical interpretation claim attempt fixture.");
assert(fixtureSource.includes("\"medicalTranslationCertificationClaimAllowed\": true"), "R3 must include an unsafe medical translation certification attempt fixture.");
assert(fixtureSource.includes("\"providerExecutionFromLanguageSwitchAllowed\": true"), "R3 must include an unsafe provider execution attempt fixture.");
assert(fixtureSource.includes("\"callMessageExecutionFromLanguageSwitchAllowed\": true"), "R3 must include an unsafe call/message execution attempt fixture.");
assert(fixtureSource.includes("\"regulatedTranslationExecutionAllowed\": true"), "R3 must include an unsafe regulated translation execution attempt fixture.");

for (const fixture of fixtures) {
  assert(fixture.expected, `${fixture.fixtureId} must include expected values.`);
  for (const field of protectedFields) {
    assert.equal(fixture.expected[field], false, `${fixture.fixtureId} must expect ${field} false.`);
  }
  assert.equal(fixture.expected.noExecution, true, `${fixture.fixtureId} must expect noExecution true.`);
}

for (const term of [
  "writeFile",
  "appendFile",
  "rmSync",
  "unlinkSync",
  "fetch(",
  "XMLHttpRequest",
  "document.",
  "querySelector",
  "addEventListener",
  "localStorage",
  "sessionStorage",
  "indexedDB",
  "db.json",
  "open(",
  "window.location",
  "location.href",
  "navigator.geolocation",
  "mediaDevices",
  "navigator.credentials",
  "window.nativeBridge",
  "nativeBridge.",
  "ACTION_CALL",
  "getUserMedia",
  "setItem",
  "postMessage",
  "openWorkflow(",
  "goSection(",
  "translateLive(",
  "replaceLanguageEngine(",
  "claimClinicalInterpretation(",
  "executeLanguageAction("
]) {
  assert(!harnessSource.includes(term), `R3 harness must not include unsafe or mutating API: ${term}`);
}

const combinedRuntime = [index, app, server].join("\n");
for (const term of [
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
]) {
  assert(!combinedRuntime.includes(term), `Runtime must not load R2/R3 flag harness artifact: ${term}`);
}

assert(exists("docs", "NEXUS_SPRINT_R1_MULTILINGUAL_INTELLIGENCE_RUNTIME_ACTIVATION_READINESS_GATE.md"), "R3 requires R1 readiness gate doc.");
assert(exists("docs", "NEXUS_SPRINT_R2_MULTILINGUAL_INTELLIGENCE_FEATURE_FLAG_CONTRACT.md"), "R3 requires R2 feature flag contract doc.");
assert(exists("public", "nexus-multilingual-intelligence-feature-flag.js"), "R3 requires R2 feature flag module.");

const alias = "qa:nexus-sprint-r3-multilingual-intelligence-flag-contract-harness";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint R3 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-r1-multilingual-intelligence-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint R1 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-r2-multilingual-intelligence-feature-flag-contract-qa.js"), "qa-suite must continue to include Sprint R2 QA.");

console.log("[nexus-sprint-r3-multilingual-intelligence-flag-contract-harness-qa] passed");
