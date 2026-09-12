const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  protectedFields,
  loadToolProviderSelectionFlagFixtures,
  validateToolProviderSelectionFlagFixtures
} = require("./nexus-sprint-o3-tool-provider-selection-flag-contract-harness.js");

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

const docName = "NEXUS_SPRINT_O3_TOOL_PROVIDER_SELECTION_FLAG_CONTRACT_HARNESS.md";
const fixtureName = "tool-provider-selection-feature-flags.json";
const harnessName = "nexus-sprint-o3-tool-provider-selection-flag-contract-harness.js";
const qaName = "nexus-sprint-o3-tool-provider-selection-flag-contract-harness-qa.js";

assert(exists("docs", docName), "Sprint O3 harness doc must exist.");
assert(exists("fixtures", "nexus", fixtureName), "Sprint O3 fixture file must exist.");
assert(exists("scripts", harnessName), "Sprint O3 harness must exist.");
assert(exists("scripts", qaName), "Sprint O3 QA script must exist.");

const doc = read("docs", docName);
const fixtureSource = read("fixtures", "nexus", fixtureName);
const harnessSource = read("scripts", harnessName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const fixtures = loadToolProviderSelectionFlagFixtures();

assertIncludes(doc, [
  "Sprint O3",
  "ab757670c8ad10dd0384b8d8b03729f108517a58",
  "fixture, harness, documentation, and QA only",
  "fixtures/nexus/tool-provider-selection-feature-flags.json",
  "scripts/nexus-sprint-o3-tool-provider-selection-flag-contract-harness.js",
  "selectionReviewAllowed: false",
  "providerPathPreviewAllowed: false",
  "selectionRuntimeAllowed: false",
  "liveSelectionEngineAllowed: false",
  "rawAdapterCallsAllowed: false",
  "providerCallsFromRawIntentAllowed: false",
  "silentProviderHandoffAllowed: false",
  "automaticConnectorExecutionAllowed: false",
  "providerCredentialUseAllowed: false",
  "paymentProviderSelectionAllowed: false",
  "regulatedProviderExecutionAllowed: false",
  "emergencyProviderDispatchAllowed: false",
  "transportationDispatchProviderExecutionAllowed: false",
  "communicationProviderExecutionAllowed: false",
  "locationCameraProviderActivationAllowed: false",
  "selectedToolIdRouteMutationAllowed: false",
  "selectedToolIdRiskMutationAllowed: false",
  "selectedToolIdProviderHandoffAllowed: false",
  "policyBypassAllowed: false",
  "confirmationBypassAllowed: false",
  "permissionBypassAllowed: false",
  "firstTurnExecutionAllowed: false",
  "laterTurnExecutionAllowed: false",
  "standardUserSelectionMutationAllowed: false",
  "backendWriteAllowed: false",
  "storageWriteAllowed: false",
  "networkAllowed: false",
  "auditWriteAllowed: false",
  "executionAuthority: false",
  "noExecution: true",
  "Sprint O4 - Tool Provider Selection Runtime Absence Regression Guard"
], "O3 harness doc");

assert.equal(fixtures.length, 4, "O3 fixture set must include exactly four flag fixtures.");

[
  "tool-provider-selection-default-off",
  "tool-provider-selection-flag-on-review-only",
  "tool-provider-selection-unsafe-authority-attempt",
  "tool-provider-selection-flag-on-without-visible-permission"
].forEach(id => {
  assert(fixtures.some(fixture => fixture.fixtureId === id), `O3 fixture set must include ${id}`);
});

const result = validateToolProviderSelectionFlagFixtures(fixtures);
assert.equal(result.ok, true, "O3 harness must validate fixtures successfully.");
assert.equal(result.count, 4, "O3 harness must report four fixtures.");

assert(fixtureSource.includes("\"executionAuthority\": true"), "O3 must include an unsafe executionAuthority attempt fixture.");
assert(fixtureSource.includes("\"noExecution\": false"), "O3 must include an unsafe noExecution false attempt fixture.");
assert(fixtureSource.includes("\"selectionRuntimeAllowed\": true"), "O3 must include an unsafe selection runtime attempt fixture.");
assert(fixtureSource.includes("\"liveSelectionEngineAllowed\": true"), "O3 must include an unsafe live selection engine attempt fixture.");
assert(fixtureSource.includes("\"rawAdapterCallsAllowed\": true"), "O3 must include an unsafe raw adapter calls attempt fixture.");
assert(fixtureSource.includes("\"providerCallsFromRawIntentAllowed\": true"), "O3 must include an unsafe provider calls from raw intent attempt fixture.");
assert(fixtureSource.includes("\"silentProviderHandoffAllowed\": true"), "O3 must include an unsafe silent provider handoff attempt fixture.");
assert(fixtureSource.includes("\"automaticConnectorExecutionAllowed\": true"), "O3 must include an unsafe automatic connector execution attempt fixture.");
assert(fixtureSource.includes("\"providerCredentialUseAllowed\": true"), "O3 must include an unsafe provider credential use attempt fixture.");
assert(fixtureSource.includes("\"selectedToolIdProviderHandoffAllowed\": true"), "O3 must include an unsafe selectedToolId provider handoff attempt fixture.");

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
  "openProvider(",
  "callAdapter(",
  "selectAndExecuteProvider("
]) {
  assert(!harnessSource.includes(term), `O3 harness must not include unsafe or mutating API: ${term}`);
}

const combinedRuntime = [index, app, server].join("\n");
for (const term of [
  "nexus-tool-provider-selection-feature-flag.js",
  "nexus-sprint-o3-tool-provider-selection-flag-contract-harness",
  "tool-provider-selection-feature-flags.json",
  "NEXUS_TOOL_PROVIDER_SELECTION_VISIBLE_ENABLED",
  "NexusToolProviderSelectionFeatureFlagContract",
  "normalizeToolProviderSelectionFeatureFlagState",
  "isToolProviderSelectionVisibleFeatureEnabled",
  "toolProviderSelectionRuntime",
  "providerSelectionRuntime",
  "providerSelectionAdapter",
  "selectAndExecuteProvider",
  "openProvider(",
  "callAdapter("
]) {
  assert(!combinedRuntime.includes(term), `Runtime must not load O2/O3 flag harness artifact: ${term}`);
}

assert(exists("docs", "NEXUS_SPRINT_O1_TOOL_PROVIDER_SELECTION_RUNTIME_ACTIVATION_READINESS_GATE.md"), "O3 requires O1 readiness gate doc.");
assert(exists("docs", "NEXUS_SPRINT_O2_TOOL_PROVIDER_SELECTION_FEATURE_FLAG_CONTRACT.md"), "O3 requires O2 feature flag contract doc.");
assert(exists("public", "nexus-tool-provider-selection-feature-flag.js"), "O3 requires O2 feature flag module.");

const alias = "qa:nexus-sprint-o3-tool-provider-selection-flag-contract-harness";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint O3 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-o1-tool-provider-selection-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint O1 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-o2-tool-provider-selection-feature-flag-contract-qa.js"), "qa-suite must continue to include Sprint O2 QA.");

console.log("[nexus-sprint-o3-tool-provider-selection-flag-contract-harness-qa] passed");
