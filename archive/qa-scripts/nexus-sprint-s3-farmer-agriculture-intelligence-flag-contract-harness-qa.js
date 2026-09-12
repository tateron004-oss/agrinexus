const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  protectedFields,
  loadFarmerAgricultureIntelligenceFlagFixtures,
  validateFarmerAgricultureIntelligenceFlagFixtures
} = require("./nexus-sprint-s3-farmer-agriculture-intelligence-flag-contract-harness.js");

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

const docName = "NEXUS_SPRINT_S3_FARMER_AGRICULTURE_INTELLIGENCE_FLAG_CONTRACT_HARNESS.md";
const fixtureName = "farmer-agriculture-intelligence-feature-flags.json";
const harnessName = "nexus-sprint-s3-farmer-agriculture-intelligence-flag-contract-harness.js";
const qaName = "nexus-sprint-s3-farmer-agriculture-intelligence-flag-contract-harness-qa.js";

assert(exists("docs", docName), "Sprint S3 harness doc must exist.");
assert(exists("fixtures", "nexus", fixtureName), "Sprint S3 fixture file must exist.");
assert(exists("scripts", harnessName), "Sprint S3 harness must exist.");
assert(exists("scripts", qaName), "Sprint S3 QA script must exist.");

const doc = read("docs", docName);
const fixtureSource = read("fixtures", "nexus", fixtureName);
const harnessSource = read("scripts", harnessName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const fixtures = loadFarmerAgricultureIntelligenceFlagFixtures();

assertIncludes(doc, [
  "Sprint S3",
  "ecb2851a7662e33621917025373ab4edd356c1b3",
  "fixture, harness, documentation, and QA only",
  "fixtures/nexus/farmer-agriculture-intelligence-feature-flags.json",
  "scripts/nexus-sprint-s3-farmer-agriculture-intelligence-flag-contract-harness.js",
  "agricultureReviewAllowed: false",
  "sourceBackedGuidancePreviewAllowed: false",
  "liveAgricultureAdvisorAllowed: false",
  "unsourcedAgricultureAdviceAllowed: false",
  "chemicalApplicationInstructionAllowed: false",
  "marketplaceTransactionAllowed: false",
  "paymentExecutionAllowed: false",
  "providerOrExtensionContactAllowed: false",
  "executionAuthority: false",
  "noExecution: true",
  "Sprint S4 - Farmer Agriculture Intelligence Runtime Absence Regression Guard"
], "S3 harness doc");

assert.equal(fixtures.length, 4, "S3 fixture set must include exactly four flag fixtures.");
[
  "farmer-agriculture-intelligence-default-off",
  "farmer-agriculture-intelligence-flag-on-review-only",
  "farmer-agriculture-intelligence-unsafe-authority-attempt",
  "farmer-agriculture-intelligence-flag-on-without-visible-permission"
].forEach(id => {
  assert(fixtures.some(fixture => fixture.fixtureId === id), `S3 fixture set must include ${id}`);
});

const result = validateFarmerAgricultureIntelligenceFlagFixtures(fixtures);
assert.equal(result.ok, true, "S3 harness must validate fixtures successfully.");
assert.equal(result.count, 4, "S3 harness must report four fixtures.");

for (const term of [
  "\"executionAuthority\": true",
  "\"noExecution\": false",
  "\"agricultureRuntimeAllowed\": true",
  "\"liveAgricultureAdvisorAllowed\": true",
  "\"sourceRetrievalRuntimeAllowed\": true",
  "\"unsourcedAgricultureAdviceAllowed\": true",
  "\"chemicalApplicationInstructionAllowed\": true",
  "\"providerOrExtensionContactAllowed\": true",
  "\"marketplaceTransactionAllowed\": true",
  "\"paymentExecutionAllowed\": true"
]) {
  assert(fixtureSource.includes(term), `S3 fixture must include unsafe attempt term: ${term}`);
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
  "executeAgricultureAdvice(",
  "contactExtensionProvider(",
  "executeChemicalApplication("
]) {
  assert(!harnessSource.includes(term), `S3 harness must not include unsafe or mutating API: ${term}`);
}

const combinedRuntime = [index, app, server].join("\n");
for (const term of [
  "nexus-farmer-agriculture-intelligence-feature-flag.js",
  "nexus-sprint-s3-farmer-agriculture-intelligence-flag-contract-harness",
  "farmer-agriculture-intelligence-feature-flags.json",
  "NEXUS_FARMER_AGRICULTURE_INTELLIGENCE_VISIBLE_ENABLED",
  "NexusFarmerAgricultureIntelligenceFeatureFlagContract",
  "normalizeFarmerAgricultureIntelligenceFeatureFlagState",
  "isFarmerAgricultureIntelligenceVisibleFeatureEnabled",
  "farmerAgricultureIntelligenceRuntime",
  "liveAgricultureAdvisor",
  "executeAgricultureAdvice(",
  "contactExtensionProvider(",
  "executeChemicalApplication("
]) {
  assert(!combinedRuntime.includes(term), `Runtime must not load S2/S3 flag harness artifact: ${term}`);
}

assert(exists("docs", "NEXUS_SPRINT_S1_FARMER_AGRICULTURE_INTELLIGENCE_RUNTIME_ACTIVATION_READINESS_GATE.md"), "S3 requires S1 readiness gate doc.");
assert(exists("docs", "NEXUS_SPRINT_S2_FARMER_AGRICULTURE_INTELLIGENCE_FEATURE_FLAG_CONTRACT.md"), "S3 requires S2 feature flag contract doc.");
assert(exists("public", "nexus-farmer-agriculture-intelligence-feature-flag.js"), "S3 requires S2 feature flag module.");

const alias = "qa:nexus-sprint-s3-farmer-agriculture-intelligence-flag-contract-harness";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint S3 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-s1-farmer-agriculture-intelligence-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint S1 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-s2-farmer-agriculture-intelligence-feature-flag-contract-qa.js"), "qa-suite must continue to include Sprint S2 QA.");

console.log("[nexus-sprint-s3-farmer-agriculture-intelligence-flag-contract-harness-qa] passed");
