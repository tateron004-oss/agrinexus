const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
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

const docName = "NEXUS_SPRINT_Q3_NATURAL_RESPONSE_GENERATION_FLAG_CONTRACT_HARNESS.md";
const fixtureName = "natural-response-generation-feature-flags.json";
const harnessName = "nexus-sprint-q3-natural-response-generation-flag-contract-harness.js";
const qaName = "nexus-sprint-q3-natural-response-generation-flag-contract-harness-qa.js";

assert(exists("docs", docName), "Sprint Q3 harness doc must exist.");
assert(exists("fixtures", "nexus", fixtureName), "Sprint Q3 fixture file must exist.");
assert(exists("scripts", harnessName), "Sprint Q3 harness must exist.");
assert(exists("scripts", qaName), "Sprint Q3 QA script must exist.");

const doc = read("docs", docName);
const fixtureSource = read("fixtures", "nexus", fixtureName);
const harnessSource = read("scripts", harnessName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const fixtures = loadNaturalResponseGenerationFlagFixtures();

assertIncludes(doc, [
  "Sprint Q3",
  "08f1fae5e79e44b127ab56fed1e93175c81dd6a2",
  "fixture, harness, documentation, and QA only",
  "fixtures/nexus/natural-response-generation-feature-flags.json",
  "scripts/nexus-sprint-q3-natural-response-generation-flag-contract-harness.js",
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
  "Sprint Q4 - Natural Response Generation Runtime Absence Regression Guard"
], "Q3 harness doc");

assert.equal(fixtures.length, 4, "Q3 fixture set must include exactly four flag fixtures.");

[
  "natural-response-generation-default-off",
  "natural-response-generation-flag-on-review-only",
  "natural-response-generation-unsafe-authority-attempt",
  "natural-response-generation-flag-on-without-visible-permission"
].forEach(id => {
  assert(fixtures.some(fixture => fixture.fixtureId === id), `Q3 fixture set must include ${id}`);
});

const result = validateNaturalResponseGenerationFlagFixtures(fixtures);
assert.equal(result.ok, true, "Q3 harness must validate fixtures successfully.");
assert.equal(result.count, 4, "Q3 harness must report four fixtures.");

assert(fixtureSource.includes("\"executionAuthority\": true"), "Q3 must include an unsafe executionAuthority attempt fixture.");
assert(fixtureSource.includes("\"noExecution\": false"), "Q3 must include an unsafe noExecution false attempt fixture.");
assert(fixtureSource.includes("\"responseRuntimeAllowed\": true"), "Q3 must include an unsafe response runtime attempt fixture.");
assert(fixtureSource.includes("\"liveResponseModelAllowed\": true"), "Q3 must include an unsafe live response model attempt fixture.");
assert(fixtureSource.includes("\"unsupportedClaimAllowed\": true"), "Q3 must include an unsafe unsupported claim attempt fixture.");
assert(fixtureSource.includes("\"providerConnectionClaimAllowed\": true"), "Q3 must include an unsafe provider connection claim attempt fixture.");
assert(fixtureSource.includes("\"completedActionClaimAllowed\": true"), "Q3 must include an unsafe completed action claim attempt fixture.");
assert(fixtureSource.includes("\"diagnosisClaimAllowed\": true"), "Q3 must include an unsafe diagnosis claim attempt fixture.");
assert(fixtureSource.includes("\"prescriptionClaimAllowed\": true"), "Q3 must include an unsafe prescription claim attempt fixture.");
assert(fixtureSource.includes("\"sourceRetrievalRuntimeAllowed\": true"), "Q3 must include an unsafe source retrieval runtime attempt fixture.");

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
  "generateLiveResponse(",
  "replaceAssistantResponse(",
  "retrieveSources(",
  "claimCompletedAction(",
  "connectProvider("
]) {
  assert(!harnessSource.includes(term), `Q3 harness must not include unsafe or mutating API: ${term}`);
}

const combinedRuntime = [index, app, server].join("\n");
for (const term of [
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
  "connectProvider("
]) {
  assert(!combinedRuntime.includes(term), `Runtime must not load Q2/Q3 flag harness artifact: ${term}`);
}

assert(exists("docs", "NEXUS_SPRINT_Q1_NATURAL_RESPONSE_GENERATION_RUNTIME_ACTIVATION_READINESS_GATE.md"), "Q3 requires Q1 readiness gate doc.");
assert(exists("docs", "NEXUS_SPRINT_Q2_NATURAL_RESPONSE_GENERATION_FEATURE_FLAG_CONTRACT.md"), "Q3 requires Q2 feature flag contract doc.");
assert(exists("public", "nexus-natural-response-generation-feature-flag.js"), "Q3 requires Q2 feature flag module.");

const alias = "qa:nexus-sprint-q3-natural-response-generation-flag-contract-harness";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint Q3 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-q1-natural-response-generation-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint Q1 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-q2-natural-response-generation-feature-flag-contract-qa.js"), "qa-suite must continue to include Sprint Q2 QA.");

console.log("[nexus-sprint-q3-natural-response-generation-flag-contract-harness-qa] passed");
