const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  protectedFields,
  loadUserProfileFlagFixtures,
  validateUserProfileFlagFixtures
} = require("./nexus-sprint-j3-user-profile-flag-contract-harness.js");

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

const docName = "NEXUS_SPRINT_J3_USER_PROFILE_FLAG_CONTRACT_HARNESS.md";
const fixtureName = "user-profile-feature-flags.json";
const harnessName = "nexus-sprint-j3-user-profile-flag-contract-harness.js";
const qaName = "nexus-sprint-j3-user-profile-flag-contract-harness-qa.js";

assert(exists("docs", docName), "Sprint J3 harness doc must exist.");
assert(exists("fixtures", "nexus", fixtureName), "Sprint J3 fixture file must exist.");
assert(exists("scripts", harnessName), "Sprint J3 harness must exist.");
assert(exists("scripts", qaName), "Sprint J3 QA script must exist.");

const doc = read("docs", docName);
const fixtureSource = read("fixtures", "nexus", fixtureName);
const harnessSource = read("scripts", harnessName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const fixtures = loadUserProfileFlagFixtures();

assertIncludes(doc, [
  "Sprint J3",
  "47360e589e4c9c403301017a76c2f78688af0c8f",
  "fixture, harness, documentation, and QA only",
  "fixtures/nexus/user-profile-feature-flags.json",
  "scripts/nexus-sprint-j3-user-profile-flag-contract-harness.js",
  "profileContextAllowed: false",
  "profileBackendAllowed: false",
  "accountCreationAllowed: false",
  "profileMutationAllowed: false",
  "profileSharingAllowed: false",
  "profileSyncAllowed: false",
  "identityProofingAllowed: false",
  "roleElevationAllowed: false",
  "providerProfileHandoffAllowed: false",
  "sensitiveProfileStorageAllowed: false",
  "automaticPersonalizationAllowed: false",
  "standardUserProfileMutationAllowed: false",
  "permissionPromptAllowed: false",
  "backendWriteAllowed: false",
  "storageWriteAllowed: false",
  "networkAllowed: false",
  "auditWriteAllowed: false",
  "executionAuthority: false",
  "noExecution: true",
  "Sprint J4 - User Profile Runtime Absence Regression Guard"
], "J3 harness doc");

assert.equal(fixtures.length, 4, "J3 fixture set must include exactly four flag fixtures.");

[
  "user-profile-default-off",
  "user-profile-flag-on-review-only",
  "user-profile-unsafe-authority-attempt",
  "user-profile-flag-on-without-visible-ui"
].forEach(id => {
  assert(fixtures.some(fixture => fixture.fixtureId === id), `J3 fixture set must include ${id}`);
});

const result = validateUserProfileFlagFixtures(fixtures);
assert.equal(result.ok, true, "J3 harness must validate fixtures successfully.");
assert.equal(result.count, 4, "J3 harness must report four fixtures.");

assert(fixtureSource.includes("\"executionAuthority\": true"), "J3 must include an unsafe executionAuthority attempt fixture.");
assert(fixtureSource.includes("\"noExecution\": false"), "J3 must include an unsafe noExecution false attempt fixture.");
assert(fixtureSource.includes("\"profileBackendAllowed\": true"), "J3 must include an unsafe profile backend attempt fixture.");
assert(fixtureSource.includes("\"profileMutationAllowed\": true"), "J3 must include an unsafe profile mutation attempt fixture.");
assert(fixtureSource.includes("\"profileSharingAllowed\": true"), "J3 must include an unsafe profile sharing attempt fixture.");
assert(fixtureSource.includes("\"automaticPersonalizationAllowed\": true"), "J3 must include an unsafe automatic personalization attempt fixture.");
assert(fixtureSource.includes("\"permissionPromptAllowed\": true"), "J3 must include an unsafe permission prompt attempt fixture.");

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
  assert(!harnessSource.includes(term), `J3 harness must not include unsafe or mutating API: ${term}`);
}

const combinedRuntime = [index, app, server].join("\n");
for (const term of [
  "nexus-user-profile-feature-flag.js",
  "nexus-sprint-j3-user-profile-flag-contract-harness",
  "user-profile-feature-flags.json",
  "NexusUserProfileFeatureFlagContract",
  "normalizeUserProfileFeatureFlagState",
  "isUserProfileVisibleFeatureEnabled",
  "renderProfileCenter",
  "openProfileCenter",
  "createUserProfile(",
  "updateUserProfile(",
  "shareUserProfile("
]) {
  assert(!combinedRuntime.includes(term), `Runtime must not load J2/J3 flag harness artifact: ${term}`);
}

assert(exists("docs", "NEXUS_SPRINT_J2_USER_PROFILE_FEATURE_FLAG_CONTRACT.md"), "J3 requires J2 feature flag contract doc.");
assert(exists("public", "nexus-user-profile-feature-flag.js"), "J3 requires J2 feature flag module.");

const alias = "qa:nexus-sprint-j3-user-profile-flag-contract-harness";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint J3 QA.");

console.log("[nexus-sprint-j3-user-profile-flag-contract-harness-qa] passed");
