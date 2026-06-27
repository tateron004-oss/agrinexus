const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  protectedFields,
  loadMultiTurnReasoningFlagFixtures,
  validateMultiTurnReasoningFlagFixtures
} = require("./nexus-sprint-m3-multi-turn-reasoning-flag-contract-harness.js");

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

const docName = "NEXUS_SPRINT_M3_MULTI_TURN_REASONING_FLAG_CONTRACT_HARNESS.md";
const fixtureName = "multi-turn-reasoning-feature-flags.json";
const harnessName = "nexus-sprint-m3-multi-turn-reasoning-flag-contract-harness.js";
const qaName = "nexus-sprint-m3-multi-turn-reasoning-flag-contract-harness-qa.js";

assert(exists("docs", docName), "Sprint M3 harness doc must exist.");
assert(exists("fixtures", "nexus", fixtureName), "Sprint M3 fixture file must exist.");
assert(exists("scripts", harnessName), "Sprint M3 harness must exist.");
assert(exists("scripts", qaName), "Sprint M3 QA script must exist.");

const doc = read("docs", docName);
const fixtureSource = read("fixtures", "nexus", fixtureName);
const harnessSource = read("scripts", harnessName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const fixtures = loadMultiTurnReasoningFlagFixtures();

assertIncludes(doc, [
  "Sprint M3",
  "739f0cdb969c528a8775efe43559e471ca931694",
  "fixture, harness, documentation, and QA only",
  "fixtures/nexus/multi-turn-reasoning-feature-flags.json",
  "scripts/nexus-sprint-m3-multi-turn-reasoning-flag-contract-harness.js",
  "contextReviewAllowed: false",
  "boundedConversationContextAllowed: false",
  "reasoningRuntimeAllowed: false",
  "liveReasoningEngineAllowed: false",
  "contextContinuationAllowed: false",
  "hiddenTaskContinuationAllowed: false",
  "contextBasedExecutionAllowed: false",
  "memoryDerivedAuthorityAllowed: false",
  "automaticRouteChangesAllowed: false",
  "riskTierDowngradeAllowed: false",
  "providerSelectionFromContextAllowed: false",
  "toolSelectionFromContextAllowed: false",
  "plannerActionCreationFromContextAllowed: false",
  "policyBypassAllowed: false",
  "confirmationBypassAllowed: false",
  "permissionBypassAllowed: false",
  "implicitPermissionAllowed: false",
  "firstTurnExecutionAllowed: false",
  "laterTurnExecutionAllowed: false",
  "standardUserReasoningMutationAllowed: false",
  "backendWriteAllowed: false",
  "storageWriteAllowed: false",
  "networkAllowed: false",
  "auditWriteAllowed: false",
  "executionAuthority: false",
  "noExecution: true",
  "Sprint M4 - Multi-Turn Reasoning Runtime Absence Regression Guard"
], "M3 harness doc");

assert.equal(fixtures.length, 4, "M3 fixture set must include exactly four flag fixtures.");

[
  "multi-turn-reasoning-default-off",
  "multi-turn-reasoning-flag-on-review-only",
  "multi-turn-reasoning-unsafe-authority-attempt",
  "multi-turn-reasoning-flag-on-without-visible-ui"
].forEach(id => {
  assert(fixtures.some(fixture => fixture.fixtureId === id), `M3 fixture set must include ${id}`);
});

const result = validateMultiTurnReasoningFlagFixtures(fixtures);
assert.equal(result.ok, true, "M3 harness must validate fixtures successfully.");
assert.equal(result.count, 4, "M3 harness must report four fixtures.");

assert(fixtureSource.includes("\"executionAuthority\": true"), "M3 must include an unsafe executionAuthority attempt fixture.");
assert(fixtureSource.includes("\"noExecution\": false"), "M3 must include an unsafe noExecution false attempt fixture.");
assert(fixtureSource.includes("\"reasoningRuntimeAllowed\": true"), "M3 must include an unsafe reasoning runtime attempt fixture.");
assert(fixtureSource.includes("\"liveReasoningEngineAllowed\": true"), "M3 must include an unsafe live reasoning engine attempt fixture.");
assert(fixtureSource.includes("\"contextContinuationAllowed\": true"), "M3 must include an unsafe context continuation attempt fixture.");
assert(fixtureSource.includes("\"hiddenTaskContinuationAllowed\": true"), "M3 must include an unsafe hidden task continuation attempt fixture.");
assert(fixtureSource.includes("\"contextBasedExecutionAllowed\": true"), "M3 must include an unsafe context-based execution attempt fixture.");
assert(fixtureSource.includes("\"memoryDerivedAuthorityAllowed\": true"), "M3 must include an unsafe memory-derived authority attempt fixture.");
assert(fixtureSource.includes("\"permissionBypassAllowed\": true"), "M3 must include an unsafe permission bypass attempt fixture.");

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
  "executeFromContext(",
  "continueHiddenTask(",
  "selectProviderFromContext(",
  "grantPermissionFromContext(",
  "downgradeRiskFromContext("
]) {
  assert(!harnessSource.includes(term), `M3 harness must not include unsafe or mutating API: ${term}`);
}

const combinedRuntime = [index, app, server].join("\n");
for (const term of [
  "nexus-multi-turn-reasoning-feature-flag.js",
  "nexus-sprint-m3-multi-turn-reasoning-flag-contract-harness",
  "multi-turn-reasoning-feature-flags.json",
  "NexusMultiTurnReasoningFeatureFlagContract",
  "normalizeMultiTurnReasoningFeatureFlagState",
  "isMultiTurnReasoningVisibleFeatureEnabled",
  "multiTurnReasoningRuntime",
  "reasoningRuntime",
  "contextContinuationAdapter",
  "continueHiddenTask",
  "executeFromContext",
  "autoRouteFromContext",
  "selectProviderFromContext",
  "grantPermissionFromContext",
  "downgradeRiskFromContext"
]) {
  assert(!combinedRuntime.includes(term), `Runtime must not load M2/M3 flag harness artifact: ${term}`);
}

assert(exists("docs", "NEXUS_SPRINT_M2_MULTI_TURN_REASONING_FEATURE_FLAG_CONTRACT.md"), "M3 requires M2 feature flag contract doc.");
assert(exists("public", "nexus-multi-turn-reasoning-feature-flag.js"), "M3 requires M2 feature flag module.");

const alias = "qa:nexus-sprint-m3-multi-turn-reasoning-flag-contract-harness";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint M3 QA.");

console.log("[nexus-sprint-m3-multi-turn-reasoning-flag-contract-harness-qa] passed");
