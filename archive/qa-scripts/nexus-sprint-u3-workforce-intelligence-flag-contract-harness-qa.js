const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  protectedFields,
  loadWorkforceIntelligenceFlagFixtures,
  validateWorkforceIntelligenceFlagFixtures
} = require("./nexus-sprint-u3-workforce-intelligence-flag-contract-harness.js");

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

const docName = "NEXUS_SPRINT_U3_WORKFORCE_INTELLIGENCE_FLAG_CONTRACT_HARNESS.md";
const fixtureName = "workforce-intelligence-feature-flags.json";
const harnessName = "nexus-sprint-u3-workforce-intelligence-flag-contract-harness.js";
const qaName = "nexus-sprint-u3-workforce-intelligence-flag-contract-harness-qa.js";

assert(exists("docs", docName), "Sprint U3 harness doc must exist.");
assert(exists("fixtures", "nexus", fixtureName), "Sprint U3 fixture file must exist.");
assert(exists("scripts", harnessName), "Sprint U3 harness must exist.");
assert(exists("scripts", qaName), "Sprint U3 QA script must exist.");

const doc = read("docs", docName);
const fixtureSource = read("fixtures", "nexus", fixtureName);
const harnessSource = read("scripts", harnessName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const fixtures = loadWorkforceIntelligenceFlagFixtures();

assertIncludes(doc, [
  "Sprint U3",
  "ff9fc09e91099d577c09f27e320dea5ff2816a42",
  "fixture, harness, documentation, and QA only",
  "fixtures/nexus/workforce-intelligence-feature-flags.json",
  "scripts/nexus-sprint-u3-workforce-intelligence-flag-contract-harness.js",
  "workforcePathwayReviewAllowed: false",
  "sourceBackedWorkforceGuidancePreviewAllowed: false",
  "liveWorkforceAdvisorAllowed: false",
  "jobApplicationSubmissionAllowed: false",
  "referralSubmissionAllowed: false",
  "trainingEnrollmentExecutionAllowed: false",
  "credentialIssuanceAllowed: false",
  "certificateIssuanceAllowed: false",
  "eligibilityClaimAllowed: false",
  "employerProviderProgramContactAllowed: false",
  "paymentExecutionAllowed: false",
  "marketplaceTransactionAllowed: false",
  "communicationExecutionAllowed: false",
  "executionAuthority: false",
  "noExecution: true",
  "Sprint U4 - Workforce Intelligence Runtime Absence Regression Guard"
], "U3 harness doc");

assert.equal(fixtures.length, 4, "U3 fixture set must include exactly four flag fixtures.");
[
  "workforce-intelligence-default-off",
  "workforce-intelligence-flag-on-review-only",
  "workforce-intelligence-unsafe-authority-attempt",
  "workforce-intelligence-flag-on-without-visible-permission"
].forEach(id => {
  assert(fixtures.some(fixture => fixture.fixtureId === id), `U3 fixture set must include ${id}`);
});

const result = validateWorkforceIntelligenceFlagFixtures(fixtures);
assert.equal(result.ok, true, "U3 harness must validate fixtures successfully.");
assert.equal(result.count, 4, "U3 harness must report four fixtures.");

for (const term of [
  "\"executionAuthority\": true",
  "\"noExecution\": false",
  "\"workforceRuntimeAllowed\": true",
  "\"liveWorkforceAdvisorAllowed\": true",
  "\"sourceRetrievalRuntimeAllowed\": true",
  "\"jobApplicationSubmissionAllowed\": true",
  "\"referralSubmissionAllowed\": true",
  "\"trainingEnrollmentExecutionAllowed\": true",
  "\"credentialIssuanceAllowed\": true",
  "\"certificateIssuanceAllowed\": true",
  "\"eligibilityClaimAllowed\": true",
  "\"employerProviderProgramContactAllowed\": true",
  "\"providerConnectionClaimAllowed\": true",
  "\"completedActionClaimAllowed\": true",
  "\"paymentExecutionAllowed\": true",
  "\"marketplaceTransactionAllowed\": true",
  "\"communicationExecutionAllowed\": true",
  "\"locationSharingAllowed\": true"
]) {
  assert(fixtureSource.includes(term), `U3 fixture must include unsafe attempt term: ${term}`);
}

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
  "window.nativeBridge",
  "nativeBridge.",
  "ACTION_CALL",
  "getUserMedia",
  "setItem",
  "postMessage",
  "openWorkflow(",
  "goSection(",
  "submitJobApplication(",
  "submitWorkforceReferral(",
  "enrollInTraining(",
  "issueCredential(",
  "contactWorkforceProvider("
]) {
  assert(!harnessSource.includes(term), `U3 harness must not include unsafe or mutating API: ${term}`);
}

const combinedRuntime = [index, app, server].join("\n");
for (const term of [
  "nexus-workforce-intelligence-feature-flag.js",
  "nexus-sprint-u3-workforce-intelligence-flag-contract-harness",
  "workforce-intelligence-feature-flags.json",
  "NEXUS_WORKFORCE_INTELLIGENCE_VISIBLE_ENABLED",
  "NexusWorkforceIntelligenceFeatureFlagContract",
  "normalizeWorkforceIntelligenceFeatureFlagState",
  "isWorkforceIntelligenceVisibleFeatureEnabled",
  "workforceIntelligenceRuntime",
  "liveWorkforceAdvisor",
  "submitJobApplication(",
  "submitWorkforceReferral(",
  "enrollInTraining(",
  "issueCredential(",
  "contactWorkforceProvider("
]) {
  assert(!combinedRuntime.includes(term), `Runtime must not load U2/U3 flag harness artifact: ${term}`);
}

assert(exists("docs", "NEXUS_SPRINT_U1_WORKFORCE_INTELLIGENCE_RUNTIME_ACTIVATION_READINESS_GATE.md"), "U3 requires U1 readiness gate doc.");
assert(exists("docs", "NEXUS_SPRINT_U2_WORKFORCE_INTELLIGENCE_FEATURE_FLAG_CONTRACT.md"), "U3 requires U2 feature flag contract doc.");
assert(exists("public", "nexus-workforce-intelligence-feature-flag.js"), "U3 requires U2 feature flag module.");

const alias = "qa:nexus-sprint-u3-workforce-intelligence-flag-contract-harness";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint U3 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-u1-workforce-intelligence-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint U1 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-u2-workforce-intelligence-feature-flag-contract-qa.js"), "qa-suite must continue to include Sprint U2 QA.");

console.log("[nexus-sprint-u3-workforce-intelligence-flag-contract-harness-qa] passed");
