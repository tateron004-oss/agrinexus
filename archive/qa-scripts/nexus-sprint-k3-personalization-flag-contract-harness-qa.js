const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  protectedFields,
  loadPersonalizationFlagFixtures,
  validatePersonalizationFlagFixtures
} = require("./nexus-sprint-k3-personalization-flag-contract-harness.js");

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

const docName = "NEXUS_SPRINT_K3_PERSONALIZATION_FLAG_CONTRACT_HARNESS.md";
const fixtureName = "personalization-feature-flags.json";
const harnessName = "nexus-sprint-k3-personalization-flag-contract-harness.js";
const qaName = "nexus-sprint-k3-personalization-flag-contract-harness-qa.js";

assert(exists("docs", docName), "Sprint K3 harness doc must exist.");
assert(exists("fixtures", "nexus", fixtureName), "Sprint K3 fixture file must exist.");
assert(exists("scripts", harnessName), "Sprint K3 harness must exist.");
assert(exists("scripts", qaName), "Sprint K3 QA script must exist.");

const doc = read("docs", docName);
const fixtureSource = read("fixtures", "nexus", fixtureName);
const harnessSource = read("scripts", harnessName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const fixtures = loadPersonalizationFlagFixtures();

assertIncludes(doc, [
  "Sprint K3",
  "f906bc254e72e7585a828a9f0114616cfa41de1d",
  "fixture, harness, documentation, and QA only",
  "fixtures/nexus/personalization-feature-flags.json",
  "scripts/nexus-sprint-k3-personalization-flag-contract-harness.js",
  "preferenceContextAllowed: false",
  "preferenceEngineAllowed: false",
  "automaticPersonalizationAllowed: false",
  "hiddenPersonalizationAllowed: false",
  "preferencePersistenceAllowed: false",
  "preferenceSyncAllowed: false",
  "preferenceMutationAllowed: false",
  "profileDerivedExecutionAllowed: false",
  "providerHandoffAllowed: false",
  "riskTierMutationAllowed: false",
  "standardUserPreferenceMutationAllowed: false",
  "permissionPromptAllowed: false",
  "backendWriteAllowed: false",
  "storageWriteAllowed: false",
  "networkAllowed: false",
  "auditWriteAllowed: false",
  "executionAuthority: false",
  "noExecution: true",
  "Sprint K4 - Personalization Runtime Absence Regression Guard"
], "K3 harness doc");

assert.equal(fixtures.length, 4, "K3 fixture set must include exactly four flag fixtures.");

[
  "personalization-default-off",
  "personalization-flag-on-review-only",
  "personalization-unsafe-authority-attempt",
  "personalization-flag-on-without-visible-ui"
].forEach(id => {
  assert(fixtures.some(fixture => fixture.fixtureId === id), `K3 fixture set must include ${id}`);
});

const result = validatePersonalizationFlagFixtures(fixtures);
assert.equal(result.ok, true, "K3 harness must validate fixtures successfully.");
assert.equal(result.count, 4, "K3 harness must report four fixtures.");

assert(fixtureSource.includes("\"executionAuthority\": true"), "K3 must include an unsafe executionAuthority attempt fixture.");
assert(fixtureSource.includes("\"noExecution\": false"), "K3 must include an unsafe noExecution false attempt fixture.");
assert(fixtureSource.includes("\"preferenceEngineAllowed\": true"), "K3 must include an unsafe preference engine attempt fixture.");
assert(fixtureSource.includes("\"automaticPersonalizationAllowed\": true"), "K3 must include an unsafe automatic personalization attempt fixture.");
assert(fixtureSource.includes("\"hiddenPersonalizationAllowed\": true"), "K3 must include an unsafe hidden personalization attempt fixture.");
assert(fixtureSource.includes("\"preferencePersistenceAllowed\": true"), "K3 must include an unsafe persistence attempt fixture.");
assert(fixtureSource.includes("\"riskTierMutationAllowed\": true"), "K3 must include an unsafe risk tier mutation attempt fixture.");
assert(fixtureSource.includes("\"permissionPromptAllowed\": true"), "K3 must include an unsafe permission prompt attempt fixture.");

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
  "navigator.geolocation",
  "mediaDevices",
  "navigator.credentials",
  "window.nativeBridge",
  "nativeBridge.",
  "setItem",
  "postMessage"
]) {
  assert(!harnessSource.includes(term), `K3 harness must not include unsafe or mutating API: ${term}`);
}

const combinedRuntime = [index, app, server].join("\n");
for (const term of [
  "nexus-personalization-feature-flag.js",
  "nexus-sprint-k3-personalization-flag-contract-harness",
  "personalization-feature-flags.json",
  "NexusPersonalizationFeatureFlagContract",
  "normalizePersonalizationFeatureFlagState",
  "isPersonalizationVisibleFeatureEnabled",
  "renderPersonalizationCenter",
  "openPersonalizationCenter",
  "loadPreferences(",
  "savePreferences(",
  "updatePreferences(",
  "sharePreferences(",
  "applyPersonalization",
  "mutateRiskTierFromPreferences"
]) {
  assert(!combinedRuntime.includes(term), `Runtime must not load K2/K3 flag harness artifact: ${term}`);
}

assert(exists("docs", "NEXUS_SPRINT_K2_PERSONALIZATION_FEATURE_FLAG_CONTRACT.md"), "K3 requires K2 feature flag contract doc.");
assert(exists("public", "nexus-personalization-feature-flag.js"), "K3 requires K2 feature flag module.");

const alias = "qa:nexus-sprint-k3-personalization-flag-contract-harness";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint K3 QA.");

console.log("[nexus-sprint-k3-personalization-flag-contract-harness-qa] passed");
