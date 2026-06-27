const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  protectedFields,
  loadAdvancedIntentUnderstandingFlagFixtures,
  validateAdvancedIntentUnderstandingFlagFixtures
} = require("./nexus-sprint-l3-advanced-intent-understanding-flag-contract-harness.js");

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

const docName = "NEXUS_SPRINT_L3_ADVANCED_INTENT_UNDERSTANDING_FLAG_CONTRACT_HARNESS.md";
const fixtureName = "advanced-intent-understanding-feature-flags.json";
const harnessName = "nexus-sprint-l3-advanced-intent-understanding-flag-contract-harness.js";
const qaName = "nexus-sprint-l3-advanced-intent-understanding-flag-contract-harness-qa.js";

assert(exists("docs", docName), "Sprint L3 harness doc must exist.");
assert(exists("fixtures", "nexus", fixtureName), "Sprint L3 fixture file must exist.");
assert(exists("scripts", harnessName), "Sprint L3 harness must exist.");
assert(exists("scripts", qaName), "Sprint L3 QA script must exist.");

const doc = read("docs", docName);
const fixtureSource = read("fixtures", "nexus", fixtureName);
const harnessSource = read("scripts", harnessName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const fixtures = loadAdvancedIntentUnderstandingFlagFixtures();

assertIncludes(doc, [
  "Sprint L3",
  "7f1f6ec1b5b2551e12d1f62310ec9f52d3683f44",
  "fixture, harness, documentation, and QA only",
  "fixtures/nexus/advanced-intent-understanding-feature-flags.json",
  "scripts/nexus-sprint-l3-advanced-intent-understanding-flag-contract-harness.js",
  "classifierContextAllowed: false",
  "classifierRuntimeAllowed: false",
  "liveClassifierReplacementAllowed: false",
  "automaticRouteChangesAllowed: false",
  "hiddenRiskDowngradeAllowed: false",
  "confidenceRiskDowngradeAllowed: false",
  "providerSelectionAllowed: false",
  "toolSelectionAllowed: false",
  "plannerActionCreationAllowed: false",
  "policyBypassAllowed: false",
  "confirmationBypassAllowed: false",
  "permissionBypassAllowed: false",
  "rawAdapterCallsAllowed: false",
  "implicitPermissionAllowed: false",
  "firstTurnExecutionAllowed: false",
  "standardUserClassifierMutationAllowed: false",
  "backendWriteAllowed: false",
  "storageWriteAllowed: false",
  "networkAllowed: false",
  "auditWriteAllowed: false",
  "executionAuthority: false",
  "noExecution: true",
  "Sprint L4 - Advanced Intent Understanding Runtime Absence Regression Guard"
], "L3 harness doc");

assert.equal(fixtures.length, 4, "L3 fixture set must include exactly four flag fixtures.");

[
  "advanced-intent-default-off",
  "advanced-intent-flag-on-review-only",
  "advanced-intent-unsafe-authority-attempt",
  "advanced-intent-flag-on-without-visible-ui"
].forEach(id => {
  assert(fixtures.some(fixture => fixture.fixtureId === id), `L3 fixture set must include ${id}`);
});

const result = validateAdvancedIntentUnderstandingFlagFixtures(fixtures);
assert.equal(result.ok, true, "L3 harness must validate fixtures successfully.");
assert.equal(result.count, 4, "L3 harness must report four fixtures.");

assert(fixtureSource.includes("\"executionAuthority\": true"), "L3 must include an unsafe executionAuthority attempt fixture.");
assert(fixtureSource.includes("\"noExecution\": false"), "L3 must include an unsafe noExecution false attempt fixture.");
assert(fixtureSource.includes("\"classifierRuntimeAllowed\": true"), "L3 must include an unsafe classifier runtime attempt fixture.");
assert(fixtureSource.includes("\"liveClassifierReplacementAllowed\": true"), "L3 must include an unsafe classifier replacement attempt fixture.");
assert(fixtureSource.includes("\"automaticRouteChangesAllowed\": true"), "L3 must include an unsafe route change attempt fixture.");
assert(fixtureSource.includes("\"hiddenRiskDowngradeAllowed\": true"), "L3 must include an unsafe hidden risk downgrade attempt fixture.");
assert(fixtureSource.includes("\"providerSelectionAllowed\": true"), "L3 must include an unsafe provider selection attempt fixture.");
assert(fixtureSource.includes("\"permissionBypassAllowed\": true"), "L3 must include an unsafe permission bypass attempt fixture.");

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
  "postMessage",
  "replaceClassifier(",
  "routeAutomatically(",
  "selectProvider(",
  "executeIntent("
]) {
  assert(!harnessSource.includes(term), `L3 harness must not include unsafe or mutating API: ${term}`);
}

const combinedRuntime = [index, app, server].join("\n");
for (const term of [
  "nexus-advanced-intent-understanding-feature-flag.js",
  "nexus-sprint-l3-advanced-intent-understanding-flag-contract-harness",
  "advanced-intent-understanding-feature-flags.json",
  "NexusAdvancedIntentUnderstandingFeatureFlagContract",
  "normalizeAdvancedIntentUnderstandingFeatureFlagState",
  "isAdvancedIntentUnderstandingVisibleFeatureEnabled",
  "replaceClassifier",
  "activateIntentUnderstanding",
  "advancedIntentRuntime",
  "classifierRuntime",
  "autoRouteFromClassifier",
  "downgradeRiskFromClassifier",
  "selectProviderFromIntent",
  "executeIntent",
  "dispatchIntentAction"
]) {
  assert(!combinedRuntime.includes(term), `Runtime must not load L2/L3 flag harness artifact: ${term}`);
}

assert(exists("docs", "NEXUS_SPRINT_L2_ADVANCED_INTENT_UNDERSTANDING_FEATURE_FLAG_CONTRACT.md"), "L3 requires L2 feature flag contract doc.");
assert(exists("public", "nexus-advanced-intent-understanding-feature-flag.js"), "L3 requires L2 feature flag module.");

const alias = "qa:nexus-sprint-l3-advanced-intent-understanding-flag-contract-harness";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint L3 QA.");

console.log("[nexus-sprint-l3-advanced-intent-understanding-flag-contract-harness-qa] passed");
