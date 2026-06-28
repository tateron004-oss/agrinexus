const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  DEFAULT_EDUCATION_MODE_FEATURE_FLAG_STATE,
  PROTECTED_EDUCATION_MODE_FLAG_FIELDS,
  normalizeEducationModeFeatureFlagState
} = require("../public/nexus-education-mode-feature-flag.js");
const {
  loadEducationModeFlagFixtures,
  validateEducationModeFlagFixtures
} = require("./nexus-sprint-ae3-education-mode-flag-contract-harness.js");

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

const docName = "NEXUS_SPRINT_AE5_EDUCATION_MODE_LANE_CLOSEOUT.md";
const qaName = "nexus-sprint-ae5-education-mode-lane-closeout-qa.js";

assert(exists("docs", docName), "Sprint AE5 lane closeout doc must exist.");
assert(exists("scripts", qaName), "Sprint AE5 QA script must exist.");

const doc = read("docs", docName);
const ae4Doc = read("docs", "NEXUS_SPRINT_AE4_EDUCATION_MODE_RUNTIME_ABSENCE_REGRESSION_GUARD.md");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const readinessContract = read("public", "nexus-education-mode-readiness-contract.js");
const featureFlagModule = read("public", "nexus-education-mode-feature-flag.js");
const harness = read("scripts", "nexus-sprint-ae3-education-mode-flag-contract-harness.js");
const fixtures = loadEducationModeFlagFixtures();

assertIncludes(doc, [
  "Sprint AE5",
  "edb116d5d40a88c90cdf0dea936594d25c31260e",
  "documentation and deterministic QA only",
  "Sprint AE Completion Summary",
  "What Is Active Now",
  "What Remains Inert",
  "No-Authority And No-Execution Guarantees",
  "Blocked Runtime Categories",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "Rollback Strategy",
  "Sprint AF1 - AgriTrade Marketplace Mode Runtime Activation Readiness Gate"
], "AE5 closeout doc");

assertIncludes(doc, [
  "AE1 | Education Mode runtime activation readiness gate | Complete",
  "AE2 | Education Mode feature flag contract | Complete",
  "AE3 | Education Mode flag contract harness | Complete",
  "AE4 | Education Mode runtime absence regression guard | Complete",
  "AE5 | Education Mode lane closeout | Complete"
], "AE5 completion table");

assertIncludes(ae4Doc, [
  "Sprint AE5 - Education Mode Lane Closeout"
], "AE4 next sprint recommendation");

for (const requiredPath of [
  ["docs", "NEXUS_SPRINT_AE1_EDUCATION_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md"],
  ["docs", "NEXUS_SPRINT_AE2_EDUCATION_MODE_FEATURE_FLAG_CONTRACT.md"],
  ["docs", "NEXUS_SPRINT_AE3_EDUCATION_MODE_FLAG_CONTRACT_HARNESS.md"],
  ["docs", "NEXUS_SPRINT_AE4_EDUCATION_MODE_RUNTIME_ABSENCE_REGRESSION_GUARD.md"],
  ["docs", "NEXUS_EDUCATION_MODE_READINESS_CONTRACT_PHASE_83.md"],
  ["docs", "NEXUS_AGRITRADE_MARKETPLACE_MODE_READINESS_CONTRACT_PHASE_84.md"],
  ["public", "nexus-education-mode-readiness-contract.js"],
  ["public", "nexus-education-mode-feature-flag.js"],
  ["fixtures", "nexus", "education-mode-feature-flags.json"],
  ["scripts", "nexus-sprint-ae1-education-mode-runtime-activation-readiness-gate-qa.js"],
  ["scripts", "nexus-sprint-ae2-education-mode-feature-flag-contract-qa.js"],
  ["scripts", "nexus-sprint-ae3-education-mode-flag-contract-harness-qa.js"],
  ["scripts", "nexus-sprint-ae4-education-mode-runtime-absence-regression-guard-qa.js"],
  ["scripts", "nexus-education-mode-readiness-contract-qa.js"],
  ["scripts", "nexus-agritrade-marketplace-mode-readiness-contract-qa.js"]
]) {
  assert(exists(...requiredPath), `AE5 requires artifact: ${requiredPath.join("/")}`);
}

assertIncludes(readinessContract, [
  "EDUCATION_MODE_READINESS_CONTRACT",
  "education-mode.readiness.phase_83",
  "EDUCATION_MODE_NO_EXECUTION_DEFAULTS",
  "createEducationModeReadinessContract",
  "learning available"
], "Phase 83 Education Mode readiness contract");

assert.equal(DEFAULT_EDUCATION_MODE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_EDUCATION_MODE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
for (const field of PROTECTED_EDUCATION_MODE_FLAG_FIELDS) {
  assert.equal(DEFAULT_EDUCATION_MODE_FEATURE_FLAG_STATE[field], false, `AE5 default ${field} must remain false.`);
  assert(doc.includes(`${field}: false`), `AE5 doc must document ${field}: false.`);
}
assert.equal(DEFAULT_EDUCATION_MODE_FEATURE_FLAG_STATE.noExecution, true);

const unsafeInput = {
  enabled: true,
  visibleUiAllowed: true,
  noExecution: false
};
for (const field of PROTECTED_EDUCATION_MODE_FLAG_FIELDS) {
  unsafeInput[field] = true;
}
const normalizedUnsafeAttempt = normalizeEducationModeFeatureFlagState(unsafeInput);
assert.equal(normalizedUnsafeAttempt.visibleUiAllowed, true);
for (const field of PROTECTED_EDUCATION_MODE_FLAG_FIELDS) {
  assert.equal(normalizedUnsafeAttempt[field], false, `Unsafe attempt must normalize ${field} back to false.`);
}
assert.equal(normalizedUnsafeAttempt.noExecution, true);

const fixtureResult = validateEducationModeFlagFixtures(fixtures);
assert.equal(fixtureResult.ok, true, "AE3 fixtures must remain valid.");
assert.equal(fixtureResult.count, 4, "AE3 fixtures must remain complete.");

const runtime = [index, app, server].join("\n");
for (const term of [
  "nexus-education-mode-readiness-contract.js",
  "nexus-education-mode-feature-flag.js",
  "nexus-sprint-ae3-education-mode-flag-contract-harness",
  "education-mode-feature-flags.json",
  "NEXUS_EDUCATION_MODE_VISIBLE_ENABLED",
  "NexusEducationModeFeatureFlagContract",
  "normalizeEducationModeFeatureFlagState",
  "isEducationModeVisibleFeatureEnabled",
  "educationModeFeatureFlag",
  "liveEducationModeRuntime",
  "liveEducationConnectorRuntime",
  "educationConnectorRuntime",
  "educationContentProviderConnectorRuntime",
  "trainingProviderConnectorRuntime",
  "certificationProviderConnectorRuntime",
  "enrollmentConnectorRuntime",
  "executeEducationEnrollment(",
  "registerCourse(",
  "enrollInCourse(",
  "issueEducationCredential(",
  "contactEducationProvider(",
  "contactTrainingProvider(",
  "processEducationPayment(",
  "nexus-sprint-ae5-education-mode-lane-closeout"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Education Mode lane artifact: ${term}`);
}

for (const source of [featureFlagModule, harness]) {
  for (const term of [
    "document.",
    "querySelector",
    "addEventListener",
    "fetch(",
    "XMLHttpRequest",
    "localStorage",
    "sessionStorage",
    "indexedDB",
    "navigator.credentials",
    "navigator.geolocation",
    "mediaDevices",
    "window.location",
    "location.href",
    "sendBeacon",
    "setItem",
    "postMessage",
    "window.nativeBridge",
    "nativeBridge.",
    "ACTION_CALL",
    "getUserMedia",
    "openWorkflow(",
    "goSection(",
    "executeEducationEnrollment(",
    "registerCourse(",
    "enrollInCourse(",
    "contactEducationProvider(",
    "contactTrainingProvider(",
    "contactCertificationProvider(",
    "issueEducationCredential(",
    "processEducationPayment(",
    "dispatchTransportation(",
    "dispatchEmergency(",
    "sharePatientLocation("
  ]) {
    assert(!source.includes(term), `Sprint AE contract/harness must not include runtime API: ${term}`);
  }
}

const alias = "qa:nexus-sprint-ae5-education-mode-lane-closeout";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AE5 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ae1-education-mode-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint AE1 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ae2-education-mode-feature-flag-contract-qa.js"), "qa-suite must continue to include Sprint AE2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ae3-education-mode-flag-contract-harness-qa.js"), "qa-suite must continue to include Sprint AE3 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ae4-education-mode-runtime-absence-regression-guard-qa.js"), "qa-suite must continue to include Sprint AE4 QA.");
assert(qaSuite.includes("scripts/nexus-education-mode-readiness-contract-qa.js"), "qa-suite must continue to include Phase 83 QA.");
assert(qaSuite.includes("scripts/nexus-agritrade-marketplace-mode-readiness-contract-qa.js"), "qa-suite must continue to include Phase 84 QA.");

console.log("[nexus-sprint-ae5-education-mode-lane-closeout-qa] passed");
