const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  protectedFields,
  loadOrchestrationEngineFlagFixtures,
  validateOrchestrationEngineFlagFixtures
} = require("./nexus-sprint-p3-orchestration-engine-flag-contract-harness.js");

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

const docName = "NEXUS_SPRINT_P3_ORCHESTRATION_ENGINE_FLAG_CONTRACT_HARNESS.md";
const fixtureName = "orchestration-engine-feature-flags.json";
const harnessName = "nexus-sprint-p3-orchestration-engine-flag-contract-harness.js";
const qaName = "nexus-sprint-p3-orchestration-engine-flag-contract-harness-qa.js";

assert(exists("docs", docName), "Sprint P3 harness doc must exist.");
assert(exists("fixtures", "nexus", fixtureName), "Sprint P3 fixture file must exist.");
assert(exists("scripts", harnessName), "Sprint P3 harness must exist.");
assert(exists("scripts", qaName), "Sprint P3 QA script must exist.");

const doc = read("docs", docName);
const fixtureSource = read("fixtures", "nexus", fixtureName);
const harnessSource = read("scripts", harnessName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const fixtures = loadOrchestrationEngineFlagFixtures();

assertIncludes(doc, [
  "Sprint P3",
  "c156fd5630bdc75b39b03db86c9cda569b260d76",
  "fixture, harness, documentation, and QA only",
  "fixtures/nexus/orchestration-engine-feature-flags.json",
  "scripts/nexus-sprint-p3-orchestration-engine-flag-contract-harness.js",
  "orchestrationReviewAllowed: false",
  "orchestrationTracePreviewAllowed: false",
  "orchestrationRuntimeAllowed: false",
  "liveOrchestrationEngineAllowed: false",
  "executableStepsAllowed: false",
  "automaticStepChainingAllowed: false",
  "backgroundExecutionAllowed: false",
  "providerAdapterExecutionAllowed: false",
  "rawAdapterCallsAllowed: false",
  "silentProviderHandoffAllowed: false",
  "autonomousHighRiskOrchestrationAllowed: false",
  "orchestrationFromRawIntentAllowed: false",
  "planBasedOrchestrationExecutionAllowed: false",
  "selectedToolIdOrchestrationExecutionAllowed: false",
  "contextBasedOrchestrationExecutionAllowed: false",
  "policyBypassAllowed: false",
  "confirmationBypassAllowed: false",
  "permissionBypassAllowed: false",
  "firstTurnExecutionAllowed: false",
  "laterTurnExecutionAllowed: false",
  "standardUserOrchestrationMutationAllowed: false",
  "backendWriteAllowed: false",
  "storageWriteAllowed: false",
  "networkAllowed: false",
  "auditWriteAllowed: false",
  "executionAuthority: false",
  "noExecution: true",
  "Sprint P4 - Orchestration Engine Runtime Absence Regression Guard"
], "P3 harness doc");

assert.equal(fixtures.length, 4, "P3 fixture set must include exactly four flag fixtures.");

[
  "orchestration-engine-default-off",
  "orchestration-engine-flag-on-review-only",
  "orchestration-engine-unsafe-authority-attempt",
  "orchestration-engine-flag-on-without-visible-permission"
].forEach(id => {
  assert(fixtures.some(fixture => fixture.fixtureId === id), `P3 fixture set must include ${id}`);
});

const result = validateOrchestrationEngineFlagFixtures(fixtures);
assert.equal(result.ok, true, "P3 harness must validate fixtures successfully.");
assert.equal(result.count, 4, "P3 harness must report four fixtures.");

assert(fixtureSource.includes("\"executionAuthority\": true"), "P3 must include an unsafe executionAuthority attempt fixture.");
assert(fixtureSource.includes("\"noExecution\": false"), "P3 must include an unsafe noExecution false attempt fixture.");
assert(fixtureSource.includes("\"orchestrationRuntimeAllowed\": true"), "P3 must include an unsafe orchestration runtime attempt fixture.");
assert(fixtureSource.includes("\"liveOrchestrationEngineAllowed\": true"), "P3 must include an unsafe live orchestration engine attempt fixture.");
assert(fixtureSource.includes("\"executableStepsAllowed\": true"), "P3 must include an unsafe executable steps attempt fixture.");
assert(fixtureSource.includes("\"automaticStepChainingAllowed\": true"), "P3 must include an unsafe automatic step chaining attempt fixture.");
assert(fixtureSource.includes("\"backgroundExecutionAllowed\": true"), "P3 must include an unsafe background execution attempt fixture.");
assert(fixtureSource.includes("\"providerAdapterExecutionAllowed\": true"), "P3 must include an unsafe provider adapter execution attempt fixture.");
assert(fixtureSource.includes("\"rawAdapterCallsAllowed\": true"), "P3 must include an unsafe raw adapter calls attempt fixture.");
assert(fixtureSource.includes("\"silentProviderHandoffAllowed\": true"), "P3 must include an unsafe silent provider handoff attempt fixture.");
assert(fixtureSource.includes("\"autonomousHighRiskOrchestrationAllowed\": true"), "P3 must include an unsafe autonomous high-risk orchestration attempt fixture.");

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
  "runOrchestration(",
  "executeStep(",
  "chainSteps(",
  "callAdapter(",
  "dispatchEmergency("
]) {
  assert(!harnessSource.includes(term), `P3 harness must not include unsafe or mutating API: ${term}`);
}

const combinedRuntime = [index, app, server].join("\n");
for (const term of [
  "nexus-orchestration-engine-feature-flag.js",
  "nexus-sprint-p3-orchestration-engine-flag-contract-harness",
  "orchestration-engine-feature-flags.json",
  "NEXUS_ORCHESTRATION_ENGINE_VISIBLE_ENABLED",
  "NexusOrchestrationEngineFeatureFlagContract",
  "normalizeOrchestrationEngineFeatureFlagState",
  "isOrchestrationEngineVisibleFeatureEnabled",
  "orchestrationEngineRuntime",
  "orchestratorRuntime",
  "orchestrationStepRunner",
  "runOrchestration(",
  "executeStep(",
  "chainSteps(",
  "callAdapter(",
  "dispatchEmergency("
]) {
  assert(!combinedRuntime.includes(term), `Runtime must not load P2/P3 flag harness artifact: ${term}`);
}

assert(exists("docs", "NEXUS_SPRINT_P1_ORCHESTRATION_ENGINE_RUNTIME_ACTIVATION_READINESS_GATE.md"), "P3 requires P1 readiness gate doc.");
assert(exists("docs", "NEXUS_SPRINT_P2_ORCHESTRATION_ENGINE_FEATURE_FLAG_CONTRACT.md"), "P3 requires P2 feature flag contract doc.");
assert(exists("public", "nexus-orchestration-engine-feature-flag.js"), "P3 requires P2 feature flag module.");

const alias = "qa:nexus-sprint-p3-orchestration-engine-flag-contract-harness";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint P3 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-p1-orchestration-engine-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint P1 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-p2-orchestration-engine-feature-flag-contract-qa.js"), "qa-suite must continue to include Sprint P2 QA.");

console.log("[nexus-sprint-p3-orchestration-engine-flag-contract-harness-qa] passed");
