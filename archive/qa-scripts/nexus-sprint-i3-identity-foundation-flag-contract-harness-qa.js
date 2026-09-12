const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  protectedFields,
  loadIdentityFoundationFlagFixtures,
  validateIdentityFoundationFlagFixtures
} = require("./nexus-sprint-i3-identity-foundation-flag-contract-harness.js");

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

const docName = "NEXUS_SPRINT_I3_IDENTITY_FOUNDATION_FLAG_CONTRACT_HARNESS.md";
const fixtureName = "identity-foundation-feature-flags.json";
const harnessName = "nexus-sprint-i3-identity-foundation-flag-contract-harness.js";
const qaName = "nexus-sprint-i3-identity-foundation-flag-contract-harness-qa.js";

assert(exists("docs", docName), "Sprint I3 harness doc must exist.");
assert(exists("fixtures", "nexus", fixtureName), "Sprint I3 fixture file must exist.");
assert(exists("scripts", harnessName), "Sprint I3 harness must exist.");
assert(exists("scripts", qaName), "Sprint I3 QA script must exist.");

const doc = read("docs", docName);
const fixtureSource = read("fixtures", "nexus", fixtureName);
const harnessSource = read("scripts", harnessName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const fixtures = loadIdentityFoundationFlagFixtures();

assertIncludes(doc, [
  "Sprint I3",
  "00c892a81643b197eed81b4036491b34c9e63093",
  "fixture, harness, documentation, and QA only",
  "fixtures/nexus/identity-foundation-feature-flags.json",
  "scripts/nexus-sprint-i3-identity-foundation-flag-contract-harness.js",
  "identityContextAllowed: false",
  "accountContextAllowed: false",
  "roleContextAllowed: false",
  "identityVerificationAllowed: false",
  "identityDocumentCollectionAllowed: false",
  "identityDocumentSharingAllowed: false",
  "profileMutationAllowed: false",
  "accountMutationAllowed: false",
  "accountLoginAllowed: false",
  "passwordResetAllowed: false",
  "roleElevationAllowed: false",
  "credentialUseAllowed: false",
  "providerAuthorizationAllowed: false",
  "patientAuthorizationAllowed: false",
  "paymentAuthorizationAllowed: false",
  "emergencyContactSharingAllowed: false",
  "permissionPromptAllowed: false",
  "backendWriteAllowed: false",
  "storageWriteAllowed: false",
  "networkAllowed: false",
  "executionAuthority: false",
  "noExecution: true",
  "Sprint I4 - Identity Foundation Runtime Absence Regression Guard"
], "I3 harness doc");

assert.equal(fixtures.length, 4, "I3 fixture set must include exactly four flag fixtures.");

[
  "identity-foundation-default-off",
  "identity-foundation-flag-on-review-only",
  "identity-foundation-unsafe-authority-attempt",
  "identity-foundation-flag-on-without-visible-ui"
].forEach(id => {
  assert(fixtures.some(fixture => fixture.fixtureId === id), `I3 fixture set must include ${id}`);
});

const result = validateIdentityFoundationFlagFixtures(fixtures);
assert.equal(result.ok, true, "I3 harness must validate fixtures successfully.");
assert.equal(result.count, 4, "I3 harness must report four fixtures.");

assert(fixtureSource.includes("\"executionAuthority\": true"), "I3 must include an unsafe executionAuthority attempt fixture.");
assert(fixtureSource.includes("\"noExecution\": false"), "I3 must include an unsafe noExecution false attempt fixture.");
assert(fixtureSource.includes("\"identityVerificationAllowed\": true"), "I3 must include an unsafe identity verification attempt fixture.");
assert(fixtureSource.includes("\"identityDocumentSharingAllowed\": true"), "I3 must include an unsafe document sharing attempt fixture.");
assert(fixtureSource.includes("\"profileMutationAllowed\": true"), "I3 must include an unsafe profile mutation attempt fixture.");
assert(fixtureSource.includes("\"permissionPromptAllowed\": true"), "I3 must include an unsafe permission prompt attempt fixture.");

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
  assert(!harnessSource.includes(term), `I3 harness must not include unsafe or mutating API: ${term}`);
}

const combinedRuntime = [index, app, server].join("\n");
for (const term of [
  "nexus-identity-foundation-feature-flag.js",
  "nexus-sprint-i3-identity-foundation-flag-contract-harness",
  "identity-foundation-feature-flags.json",
  "NexusIdentityFoundationFeatureFlagContract",
  "normalizeIdentityFoundationFeatureFlagState",
  "isIdentityFoundationVisibleFeatureEnabled",
  "renderIdentityCenter",
  "openIdentityCenter"
]) {
  assert(!combinedRuntime.includes(term), `Runtime must not load I2/I3 flag harness artifact: ${term}`);
}

assert(exists("docs", "NEXUS_SPRINT_I2_IDENTITY_FOUNDATION_FEATURE_FLAG_CONTRACT.md"), "I3 requires I2 feature flag contract doc.");
assert(exists("public", "nexus-identity-foundation-feature-flag.js"), "I3 requires I2 feature flag module.");

const alias = "qa:nexus-sprint-i3-identity-foundation-flag-contract-harness";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint I3 QA.");

console.log("[nexus-sprint-i3-identity-foundation-flag-contract-harness-qa] passed");
