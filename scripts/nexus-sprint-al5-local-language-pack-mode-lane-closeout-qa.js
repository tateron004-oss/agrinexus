const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  DEFAULT_LOCAL_LANGUAGE_PACK_MODE_FEATURE_FLAG_STATE,
  normalizeLocalLanguagePackModeFeatureFlagState
} = require("../public/nexus-local-language-pack-mode-feature-flag.js");
const {
  protectedFields,
  loadLocalLanguagePackModeFlagFixtures,
  expandFixtureInput,
  validateLocalLanguagePackModeFlagFixtures
} = require("./nexus-sprint-al3-local-language-pack-mode-flag-contract-harness.js");

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

const docName = "NEXUS_SPRINT_AL5_LOCAL_LANGUAGE_PACK_MODE_LANE_CLOSEOUT.md";
const qaName = "nexus-sprint-al5-local-language-pack-mode-lane-closeout-qa.js";

assert(exists("docs", docName), "Sprint AL5 lane closeout doc must exist.");
assert(exists("scripts", qaName), "Sprint AL5 QA script must exist.");

const doc = read("docs", docName);
const al4Doc = read("docs", "NEXUS_SPRINT_AL4_LOCAL_LANGUAGE_PACK_MODE_RUNTIME_ABSENCE_REGRESSION_GUARD.md");
const runtime = [read("public", "index.html"), read("public", "app.js"), read("server.js")].join("\n");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const readinessContract = read("public", "nexus-local-language-pack-mode-readiness-contract.js");
const featureFlagModule = read("public", "nexus-local-language-pack-mode-feature-flag.js");
const harness = read("scripts", "nexus-sprint-al3-local-language-pack-mode-flag-contract-harness.js");
const fixtures = loadLocalLanguagePackModeFlagFixtures();

assertIncludes(doc, [
  "Sprint AL5",
  "c9af765af00e1949c90c42d8149005e4ba80d084",
  "documentation and deterministic QA only",
  "Sprint AL Completion Summary",
  "What Is Active Now",
  "What Remains Inert",
  "No-Authority And No-Execution Guarantees",
  "Blocked Runtime Categories",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "Rollback Strategy",
  "Sprint AM1 - Observability Monitoring Runtime Activation Readiness Gate"
], "AL5 closeout doc");

assertIncludes(doc, [
  "AL1 | Local Language Pack Mode runtime activation readiness gate | Complete",
  "AL2 | Local Language Pack Mode feature flag contract | Complete",
  "AL3 | Local Language Pack Mode flag contract harness | Complete",
  "AL4 | Local Language Pack Mode runtime absence regression guard | Complete",
  "AL5 | Local Language Pack Mode lane closeout | Complete"
], "AL5 completion table");

assertIncludes(al4Doc, [
  "Sprint AL5 - Local Language Pack Mode Lane Closeout"
], "AL4 next sprint recommendation");

for (const requiredPath of [
  ["docs", "NEXUS_SPRINT_AL1_LOCAL_LANGUAGE_PACK_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md"],
  ["docs", "NEXUS_SPRINT_AL2_LOCAL_LANGUAGE_PACK_MODE_FEATURE_FLAG_CONTRACT.md"],
  ["docs", "NEXUS_SPRINT_AL3_LOCAL_LANGUAGE_PACK_MODE_FLAG_CONTRACT_HARNESS.md"],
  ["docs", "NEXUS_SPRINT_AL4_LOCAL_LANGUAGE_PACK_MODE_RUNTIME_ABSENCE_REGRESSION_GUARD.md"],
  ["docs", "NEXUS_LOCAL_LANGUAGE_PACK_MODE_READINESS_CONTRACT_PHASE_90.md"],
  ["public", "nexus-local-language-pack-mode-readiness-contract.js"],
  ["public", "nexus-local-language-pack-mode-feature-flag.js"],
  ["fixtures", "nexus", "local-language-pack-mode-feature-flags.json"],
  ["scripts", "nexus-sprint-al1-local-language-pack-mode-runtime-activation-readiness-gate-qa.js"],
  ["scripts", "nexus-sprint-al2-local-language-pack-mode-feature-flag-contract-qa.js"],
  ["scripts", "nexus-sprint-al3-local-language-pack-mode-flag-contract-harness-qa.js"],
  ["scripts", "nexus-sprint-al4-local-language-pack-mode-runtime-absence-regression-guard-qa.js"],
  ["scripts", "nexus-local-language-pack-mode-readiness-contract-qa.js"]
]) {
  assert(exists(...requiredPath), `AL5 requires artifact: ${requiredPath.join("/")}`);
}

assertIncludes(readinessContract, [
  "LOCAL_LANGUAGE_PACK_MODE_READINESS_CONTRACT",
  "local-language-pack-mode.readiness.phase_90",
  "LOCAL_LANGUAGE_PACK_MODE_NO_EXECUTION_DEFAULTS",
  "createLocalLanguagePackModeReadinessContract",
  "\"executionAllowed\": false",
  "\"liveConnectorEnabled\": false",
  "\"providerExecutionEnabled\": false",
  "\"regulatedActionEnabled\": false",
  "healthcare",
  "pharmacy",
  "medical_records",
  "emergency",
  "regulated_execution"
], "Phase 90 Local Language Pack Mode readiness contract");

assert.equal(DEFAULT_LOCAL_LANGUAGE_PACK_MODE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_LOCAL_LANGUAGE_PACK_MODE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
for (const field of protectedFields) {
  assert.equal(DEFAULT_LOCAL_LANGUAGE_PACK_MODE_FEATURE_FLAG_STATE[field], false, `AL5 default ${field} must remain false.`);
}
assert.equal(DEFAULT_LOCAL_LANGUAGE_PACK_MODE_FEATURE_FLAG_STATE.noExecution, true);
assert(doc.includes("noExecution: true"), "AL5 doc must document noExecution: true.");

const unsafeInput = {
  enabled: true,
  visibleUiAllowed: true,
  noExecution: false
};
for (const field of protectedFields) unsafeInput[field] = true;
const normalizedUnsafeAttempt = normalizeLocalLanguagePackModeFeatureFlagState(unsafeInput);
assert.equal(normalizedUnsafeAttempt.visibleUiAllowed, true);
assert.equal(normalizedUnsafeAttempt.noExecution, true);
for (const field of protectedFields) {
  assert.equal(normalizedUnsafeAttempt[field], false, `Unsafe attempt must normalize ${field} back to false.`);
}

const fixtureResult = validateLocalLanguagePackModeFlagFixtures(fixtures);
assert.equal(fixtureResult.ok, true, "AL3 fixtures must remain valid.");
assert.equal(fixtureResult.count, 4, "AL3 fixtures must remain complete.");

const unsafeFixture = fixtures.find(fixture => fixture.fixtureId === "local-language-pack-mode-unsafe-authority-attempt");
const expandedUnsafe = expandFixtureInput(unsafeFixture.input);
for (const field of protectedFields) {
  assert.equal(expandedUnsafe[field], true, `unsafeAuthorityAttempt must expand ${field}=true before normalization.`);
}

for (const term of [
  "nexus-local-language-pack-mode-readiness-contract.js",
  "nexus-local-language-pack-mode-feature-flag.js",
  "nexus-sprint-al3-local-language-pack-mode-flag-contract-harness",
  "local-language-pack-mode-feature-flags.json",
  "NEXUS_LOCAL_LANGUAGE_PACK_MODE_VISIBLE_ENABLED",
  "NexusLocalLanguagePackModeFeatureFlagContract",
  "normalizeLocalLanguagePackModeFeatureFlagState",
  "isLocalLanguagePackModeVisibleFeatureEnabled",
  "localLanguagePackModeFeatureFlag",
  "liveLocalLanguagePackModeRuntime",
  "languagePackInstallRuntime",
  "translationRuntime",
  "localLanguageRoutingRuntime",
  "clinicalInterpretationRuntime",
  "installLanguagePack(",
  "routeByLocalLanguage(",
  "syncLanguagePackSources(",
  "translateClinicalContext(",
  "nexus-sprint-al5-local-language-pack-mode-lane-closeout"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Local Language Pack Mode lane artifact: ${term}`);
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
    "caches.",
    "navigator.serviceWorker",
    "serviceWorker.",
    "navigator.geolocation",
    "mediaDevices",
    "window.location",
    "location.href",
    "open(",
    "sendBeacon",
    "setItem",
    "postMessage",
    "window.nativeBridge",
    "nativeBridge.",
    "ACTION_CALL",
    "getUserMedia",
    "openWorkflow(",
    "goSection(",
    "installLanguagePack(",
    "routeByLocalLanguage(",
    "syncLanguagePackSources(",
    "translateClinicalContext(",
    "contactProvider(",
    "scheduleProviderAppointment(",
    "createTelehealthSession(",
    "requestPharmacyRefill(",
    "accessMedicalRecord(",
    "processProviderPayment(",
    "dispatchTransportation(",
    "dispatchEmergency(",
    "sharePatientLocation("
  ]) {
    assert(!source.includes(term), `Sprint AL contract/harness must not include runtime API: ${term}`);
  }
}

const alias = "qa:nexus-sprint-al5-local-language-pack-mode-lane-closeout";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AL5 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-al1-local-language-pack-mode-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint AL1 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-al2-local-language-pack-mode-feature-flag-contract-qa.js"), "qa-suite must continue to include Sprint AL2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-al3-local-language-pack-mode-flag-contract-harness-qa.js"), "qa-suite must continue to include Sprint AL3 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-al4-local-language-pack-mode-runtime-absence-regression-guard-qa.js"), "qa-suite must continue to include Sprint AL4 QA.");
assert(qaSuite.includes("scripts/nexus-local-language-pack-mode-readiness-contract-qa.js"), "qa-suite must continue to include Phase 90 QA.");

console.log("[nexus-sprint-al5-local-language-pack-mode-lane-closeout-qa] passed");
