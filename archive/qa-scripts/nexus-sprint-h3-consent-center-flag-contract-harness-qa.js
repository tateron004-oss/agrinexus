const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  loadConsentCenterFlagFixtures,
  validateConsentCenterFlagFixtures
} = require("./nexus-sprint-h3-consent-center-flag-contract-harness.js");

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

const docName = "NEXUS_SPRINT_H3_CONSENT_CENTER_FLAG_CONTRACT_HARNESS.md";
const fixtureName = "consent-center-feature-flags.json";
const harnessName = "nexus-sprint-h3-consent-center-flag-contract-harness.js";
const qaName = "nexus-sprint-h3-consent-center-flag-contract-harness-qa.js";

assert(exists("docs", docName), "Sprint H3 harness doc must exist.");
assert(exists("fixtures", "nexus", fixtureName), "Sprint H3 fixture file must exist.");
assert(exists("scripts", harnessName), "Sprint H3 harness must exist.");
assert(exists("scripts", qaName), "Sprint H3 QA script must exist.");

const doc = read("docs", docName);
const fixtureSource = read("fixtures", "nexus", fixtureName);
const harnessSource = read("scripts", harnessName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const fixtures = loadConsentCenterFlagFixtures();

assertIncludes(doc, [
  "Sprint H3",
  "5ae1d41c32ea9d0b2cc3eb2a79df257eb8323676",
  "fixture, harness, documentation, and QA only",
  "fixtures/nexus/consent-center-feature-flags.json",
  "scripts/nexus-sprint-h3-consent-center-flag-contract-harness.js",
  "consentPersistenceAllowed: false",
  "consentRevocationAllowed: false",
  "auditWriteAllowed: false",
  "providerHandoffAllowed: false",
  "permissionPromptAllowed: false",
  "backendWriteAllowed: false",
  "storageWriteAllowed: false",
  "networkAllowed: false",
  "executionAuthority: false",
  "noExecution: true",
  "Sprint H4 - Consent Center Runtime Absence Regression Guard"
], "H3 harness doc");

assert.equal(fixtures.length, 4, "H3 fixture set must include exactly four flag fixtures.");

[
  "consent-center-default-off",
  "consent-center-flag-on-review-only",
  "consent-center-unsafe-authority-attempt",
  "consent-center-flag-on-without-visible-ui"
].forEach(id => {
  assert(fixtures.some(fixture => fixture.fixtureId === id), `H3 fixture set must include ${id}`);
});

const result = validateConsentCenterFlagFixtures(fixtures);
assert.equal(result.ok, true, "H3 harness must validate fixtures successfully.");
assert.equal(result.count, 4, "H3 harness must report four fixtures.");

assert(fixtureSource.includes("\"executionAuthority\": true"), "H3 must include an unsafe executionAuthority attempt fixture.");
assert(fixtureSource.includes("\"noExecution\": false"), "H3 must include an unsafe noExecution false attempt fixture.");
assert(fixtureSource.includes("\"consentPersistenceAllowed\": true"), "H3 must include an unsafe persistence attempt fixture.");
assert(fixtureSource.includes("\"permissionPromptAllowed\": true"), "H3 must include an unsafe permission prompt attempt fixture.");

for (const fixture of fixtures) {
  assert(fixture.expected, `${fixture.fixtureId} must include expected values.`);
  assert.equal(fixture.expected.consentPersistenceAllowed, false, `${fixture.fixtureId} must expect consent persistence false.`);
  assert.equal(fixture.expected.consentRevocationAllowed, false, `${fixture.fixtureId} must expect consent revocation false.`);
  assert.equal(fixture.expected.auditWriteAllowed, false, `${fixture.fixtureId} must expect audit write false.`);
  assert.equal(fixture.expected.providerHandoffAllowed, false, `${fixture.fixtureId} must expect provider handoff false.`);
  assert.equal(fixture.expected.permissionPromptAllowed, false, `${fixture.fixtureId} must expect permission prompt false.`);
  assert.equal(fixture.expected.backendWriteAllowed, false, `${fixture.fixtureId} must expect backend write false.`);
  assert.equal(fixture.expected.storageWriteAllowed, false, `${fixture.fixtureId} must expect storage write false.`);
  assert.equal(fixture.expected.networkAllowed, false, `${fixture.fixtureId} must expect network false.`);
  assert.equal(fixture.expected.executionAuthority, false, `${fixture.fixtureId} must expect executionAuthority false.`);
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
  "window.nativeBridge",
  "nativeBridge."
]) {
  assert(!harnessSource.includes(term), `H3 harness must not include unsafe or mutating API: ${term}`);
}

const combinedRuntime = [index, app, server].join("\n");
for (const term of [
  "nexus-consent-center-feature-flag.js",
  "nexus-sprint-h3-consent-center-flag-contract-harness",
  "consent-center-feature-flags.json"
]) {
  assert(!combinedRuntime.includes(term), `Runtime must not load H2/H3 flag harness artifact: ${term}`);
}

assert(exists("docs", "NEXUS_SPRINT_H2_CONSENT_CENTER_FEATURE_FLAG_CONTRACT.md"), "H3 requires H2 feature flag contract doc.");
assert(exists("public", "nexus-consent-center-feature-flag.js"), "H3 requires H2 feature flag module.");

const alias = "qa:nexus-sprint-h3-consent-center-flag-contract-harness";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint H3 QA.");

console.log("[nexus-sprint-h3-consent-center-flag-contract-harness-qa] passed");
