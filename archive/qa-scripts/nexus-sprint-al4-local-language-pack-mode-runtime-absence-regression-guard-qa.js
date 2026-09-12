const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  DEFAULT_LOCAL_LANGUAGE_PACK_MODE_FEATURE_FLAG_STATE,
  PROTECTED_LOCAL_LANGUAGE_PACK_MODE_FLAG_FIELDS,
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

const docName = "NEXUS_SPRINT_AL4_LOCAL_LANGUAGE_PACK_MODE_RUNTIME_ABSENCE_REGRESSION_GUARD.md";
const qaName = "nexus-sprint-al4-local-language-pack-mode-runtime-absence-regression-guard-qa.js";

assert(exists("docs", docName), "Sprint AL4 absence guard doc must exist.");
assert(exists("scripts", qaName), "Sprint AL4 QA script must exist.");

const doc = read("docs", docName);
const runtime = [read("public", "index.html"), read("public", "app.js"), read("server.js")].join("\n");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const readinessContract = read("public", "nexus-local-language-pack-mode-readiness-contract.js");
const featureFlagModule = read("public", "nexus-local-language-pack-mode-feature-flag.js");
const al3Harness = read("scripts", "nexus-sprint-al3-local-language-pack-mode-flag-contract-harness.js");
const fixtures = loadLocalLanguagePackModeFlagFixtures();

assertIncludes(doc, [
  "Sprint AL4",
  "b92f105e672674326ccd4dc7048388e0f99dc1eb",
  "documentation and QA only",
  "Purpose",
  "Runtime Absence Requirements",
  "Blocked Runtime Behavior",
  "Required Contract Invariants",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "QA Expectations",
  "Sprint AL5 - Local Language Pack Mode Lane Closeout"
], "AL4 absence guard doc");

assertIncludes(doc, [
  "AL1 Local Language Pack Mode runtime activation readiness gate",
  "AL2 Local Language Pack Mode feature flag contract",
  "AL3 Local Language Pack Mode flag contract harness",
  "Phase 90 Local Language Pack Mode readiness contract",
  "public/nexus-local-language-pack-mode-readiness-contract.js",
  "public/nexus-local-language-pack-mode-feature-flag.js",
  "scripts/nexus-sprint-al3-local-language-pack-mode-flag-contract-harness.js",
  "fixtures/nexus/local-language-pack-mode-feature-flags.json",
  "Sprint AL QA scripts"
], "AL4 protected artifacts");

assertIncludes(doc, [
  "It intentionally does not ban generic language",
  "multilingual",
  "English",
  "Spanish",
  "French",
  "Arabic",
  "Portuguese",
  "Swahili",
  "translation",
  "speech",
  "voice",
  "source",
  "freshness",
  "confidence"
], "AL4 generic wording exception");

assertIncludes(doc, [
  "active Local Language Pack Mode runtime",
  "live Local Language Pack Mode runtime",
  "language pack installation runtime",
  "translation runtime",
  "local language routing runtime",
  "clinical interpretation runtime",
  "speech recognition locale runtime",
  "speech synthesis voice runtime",
  "partner translation connector runtime",
  "provider connector runtime",
  "clinic connector runtime",
  "telehealth connector runtime",
  "pharmacy connector runtime",
  "agriculture connector runtime",
  "workforce connector runtime",
  "community-service connector runtime",
  "transportation connector runtime",
  "marketplace connector runtime",
  "health connector runtime",
  "medical record connector runtime",
  "FHIR connector runtime",
  "location connector runtime",
  "identity connector runtime",
  "communications connector runtime",
  "emergency connector runtime",
  "language preference mutation",
  "translation review bypass",
  "clinical interpretation claims",
  "medical interpretation compliance claims",
  "provider contact",
  "appointment scheduling",
  "telehealth session creation",
  "prescription refill workflow",
  "medical record access",
  "FHIR access",
  "location sharing",
  "camera activation",
  "microphone activation",
  "payment execution",
  "marketplace transaction execution",
  "typed route mutation",
  "voice route mutation",
  "policy bypass",
  "confirmation bypass",
  "permission bypass",
  "backend writes",
  "localStorage or sessionStorage writes",
  "IndexedDB writes",
  "Cache API writes",
  "fetch or network calls",
  "provider handoff",
  "native bridge dispatch",
  "external navigation",
  "real pending action creation",
  "execution authority"
], "AL4 blocked runtime behavior");

for (const requiredPath of [
  ["docs", "NEXUS_SPRINT_AL1_LOCAL_LANGUAGE_PACK_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md"],
  ["docs", "NEXUS_SPRINT_AL2_LOCAL_LANGUAGE_PACK_MODE_FEATURE_FLAG_CONTRACT.md"],
  ["docs", "NEXUS_SPRINT_AL3_LOCAL_LANGUAGE_PACK_MODE_FLAG_CONTRACT_HARNESS.md"],
  ["docs", "NEXUS_LOCAL_LANGUAGE_PACK_MODE_READINESS_CONTRACT_PHASE_90.md"],
  ["public", "nexus-local-language-pack-mode-readiness-contract.js"],
  ["public", "nexus-local-language-pack-mode-feature-flag.js"],
  ["fixtures", "nexus", "local-language-pack-mode-feature-flags.json"],
  ["scripts", "nexus-sprint-al3-local-language-pack-mode-flag-contract-harness.js"]
]) {
  assert(exists(...requiredPath), `AL4 requires artifact: ${requiredPath.join("/")}`);
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
  "nexus-sprint-al4-local-language-pack-mode-runtime-absence-regression-guard"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Local Language Pack Mode lane artifact: ${term}`);
}

assertIncludes(readinessContract, [
  "LOCAL_LANGUAGE_PACK_MODE_READINESS_CONTRACT",
  "local-language-pack-mode.readiness.phase_90",
  "pack install safe",
  "LOCAL_LANGUAGE_PACK_MODE_NO_EXECUTION_DEFAULTS",
  "\"executionAllowed\": false",
  "\"liveConnectorEnabled\": false",
  "\"providerExecutionEnabled\": false",
  "\"regulatedActionEnabled\": false",
  "communications",
  "healthcare",
  "pharmacy",
  "medical_records",
  "emergency",
  "regulated_execution"
], "Phase 90 Local Language Pack Mode readiness contract");

assert.equal(DEFAULT_LOCAL_LANGUAGE_PACK_MODE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_LOCAL_LANGUAGE_PACK_MODE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
assert.equal(DEFAULT_LOCAL_LANGUAGE_PACK_MODE_FEATURE_FLAG_STATE.noExecution, true);
assert.deepEqual(protectedFields, Array.from(PROTECTED_LOCAL_LANGUAGE_PACK_MODE_FLAG_FIELDS), "AL3 harness must mirror AL2 protected fields.");

for (const field of protectedFields) {
  assert.equal(DEFAULT_LOCAL_LANGUAGE_PACK_MODE_FEATURE_FLAG_STATE[field], false, `AL4 default ${field} must remain false.`);
}

const unsafeInput = { enabled: true, visibleUiAllowed: true, noExecution: false };
for (const field of protectedFields) unsafeInput[field] = true;
const normalizedUnsafeAttempt = normalizeLocalLanguagePackModeFeatureFlagState(unsafeInput);
assert.equal(normalizedUnsafeAttempt.visibleUiAllowed, true);
assert.equal(normalizedUnsafeAttempt.noExecution, true);
for (const field of protectedFields) {
  assert.equal(normalizedUnsafeAttempt[field], false, `AL4 unsafe attempt must normalize ${field}=false.`);
}

const fixtureResult = validateLocalLanguagePackModeFlagFixtures(fixtures);
assert.equal(fixtureResult.ok, true, fixtureResult.failures.join("\n"));
assert.equal(fixtureResult.count, 4, "AL3 fixtures must remain deterministic.");

const unsafeFixture = fixtures.find(fixture => fixture.fixtureId === "local-language-pack-mode-unsafe-authority-attempt");
const expandedUnsafe = expandFixtureInput(unsafeFixture.input);
for (const field of protectedFields) {
  assert.equal(expandedUnsafe[field], true, `AL4 unsafe fixture must expand ${field}=true before normalization.`);
}

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
  assert(!featureFlagModule.includes(term), `AL2 feature flag module must not include runtime API: ${term}`);
  assert(!al3Harness.includes(term), `AL3 harness must not include runtime API: ${term}`);
}

const alias = "qa:nexus-sprint-al4-local-language-pack-mode-runtime-absence-regression-guard";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AL4 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-al3-local-language-pack-mode-flag-contract-harness-qa.js"), "qa-suite must continue to include Sprint AL3 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-al2-local-language-pack-mode-feature-flag-contract-qa.js"), "qa-suite must continue to include Sprint AL2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-al1-local-language-pack-mode-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint AL1 QA.");
assert(qaSuite.includes("scripts/nexus-local-language-pack-mode-readiness-contract-qa.js"), "qa-suite must continue to include Local Language Pack Mode readiness QA.");

console.log("[nexus-sprint-al4-local-language-pack-mode-runtime-absence-regression-guard-qa] passed");
