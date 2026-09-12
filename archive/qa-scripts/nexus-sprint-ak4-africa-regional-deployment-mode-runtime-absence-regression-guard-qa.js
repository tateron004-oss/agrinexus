const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  DEFAULT_AFRICA_REGIONAL_DEPLOYMENT_MODE_FEATURE_FLAG_STATE,
  PROTECTED_AFRICA_REGIONAL_DEPLOYMENT_MODE_FLAG_FIELDS,
  normalizeAfricaRegionalDeploymentModeFeatureFlagState
} = require("../public/nexus-africa-regional-deployment-mode-feature-flag.js");
const {
  protectedFields,
  loadAfricaRegionalDeploymentModeFlagFixtures,
  expandFixtureInput,
  validateAfricaRegionalDeploymentModeFlagFixtures
} = require("./nexus-sprint-ak3-africa-regional-deployment-mode-flag-contract-harness.js");

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

const docName = "NEXUS_SPRINT_AK4_AFRICA_REGIONAL_DEPLOYMENT_MODE_RUNTIME_ABSENCE_REGRESSION_GUARD.md";
const qaName = "nexus-sprint-ak4-africa-regional-deployment-mode-runtime-absence-regression-guard-qa.js";

assert(exists("docs", docName), "Sprint AK4 absence guard doc must exist.");
assert(exists("scripts", qaName), "Sprint AK4 QA script must exist.");

const doc = read("docs", docName);
const runtime = [read("public", "index.html"), read("public", "app.js"), read("server.js")].join("\n");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const readinessContract = read("public", "nexus-africa-regional-deployment-mode-readiness-contract.js");
const featureFlagModule = read("public", "nexus-africa-regional-deployment-mode-feature-flag.js");
const ak3Harness = read("scripts", "nexus-sprint-ak3-africa-regional-deployment-mode-flag-contract-harness.js");
const fixtures = loadAfricaRegionalDeploymentModeFlagFixtures();

assertIncludes(doc, [
  "Sprint AK4",
  "2712860e90e8f2eee0e9b444052e1d1c3054139b",
  "documentation and QA only",
  "Purpose",
  "Runtime Absence Requirements",
  "Blocked Runtime Behavior",
  "Required Contract Invariants",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "QA Expectations",
  "Sprint AK5 - Africa Regional Deployment Mode Lane Closeout"
], "AK4 absence guard doc");

assertIncludes(doc, [
  "AK1 Africa Regional Deployment Mode runtime activation readiness gate",
  "AK2 Africa Regional Deployment Mode feature flag contract",
  "AK3 Africa Regional Deployment Mode flag contract harness",
  "Phase 89 Africa Regional Deployment Mode readiness contract",
  "public/nexus-africa-regional-deployment-mode-readiness-contract.js",
  "public/nexus-africa-regional-deployment-mode-feature-flag.js",
  "scripts/nexus-sprint-ak3-africa-regional-deployment-mode-flag-contract-harness.js",
  "fixtures/nexus/africa-regional-deployment-mode-feature-flags.json",
  "Sprint AK QA scripts"
], "AK4 protected artifacts");

assertIncludes(doc, [
  "It intentionally does not ban generic health, telehealth, clinic",
  "AgriTrade",
  "Africa",
  "regional",
  "country",
  "language",
  "source",
  "freshness",
  "confidence",
  "jurisdiction"
], "AK4 generic wording exception");

assertIncludes(doc, [
  "active Africa Regional Deployment Mode runtime",
  "live Africa Regional Deployment Mode runtime",
  "country kit activation",
  "jurisdiction routing runtime",
  "local language runtime",
  "regional source connector runtime",
  "partner connector runtime",
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
  "regional preference mutation",
  "regional source sync",
  "partner verification bypass",
  "jurisdiction bypass",
  "language review bypass",
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
], "AK4 blocked runtime behavior");

for (const requiredPath of [
  ["docs", "NEXUS_SPRINT_AK1_AFRICA_REGIONAL_DEPLOYMENT_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md"],
  ["docs", "NEXUS_SPRINT_AK2_AFRICA_REGIONAL_DEPLOYMENT_MODE_FEATURE_FLAG_CONTRACT.md"],
  ["docs", "NEXUS_SPRINT_AK3_AFRICA_REGIONAL_DEPLOYMENT_MODE_FLAG_CONTRACT_HARNESS.md"],
  ["docs", "NEXUS_AFRICA_REGIONAL_DEPLOYMENT_MODE_READINESS_CONTRACT_PHASE_89.md"],
  ["public", "nexus-africa-regional-deployment-mode-readiness-contract.js"],
  ["public", "nexus-africa-regional-deployment-mode-feature-flag.js"],
  ["fixtures", "nexus", "africa-regional-deployment-mode-feature-flags.json"],
  ["scripts", "nexus-sprint-ak3-africa-regional-deployment-mode-flag-contract-harness.js"]
]) {
  assert(exists(...requiredPath), `AK4 requires artifact: ${requiredPath.join("/")}`);
}

for (const term of [
  "nexus-africa-regional-deployment-mode-readiness-contract.js",
  "nexus-africa-regional-deployment-mode-feature-flag.js",
  "nexus-sprint-ak3-africa-regional-deployment-mode-flag-contract-harness",
  "africa-regional-deployment-mode-feature-flags.json",
  "NEXUS_AFRICA_REGIONAL_DEPLOYMENT_MODE_VISIBLE_ENABLED",
  "NexusAfricaRegionalDeploymentModeFeatureFlagContract",
  "normalizeAfricaRegionalDeploymentModeFeatureFlagState",
  "isAfricaRegionalDeploymentModeVisibleFeatureEnabled",
  "africaRegionalDeploymentModeFeatureFlag",
  "liveAfricaRegionalDeploymentModeRuntime",
  "regionalCountryKitRuntime",
  "jurisdictionRoutingRuntime",
  "localLanguageRuntime",
  "regionalSourceConnectorRuntime",
  "activateCountryKit(",
  "routeByJurisdiction(",
  "syncRegionalSources(",
  "nexus-sprint-ak4-africa-regional-deployment-mode-runtime-absence-regression-guard"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Africa Regional Deployment Mode lane artifact: ${term}`);
}

assertIncludes(readinessContract, [
  "AFRICA_REGIONAL_DEPLOYMENT_MODE_READINESS_CONTRACT",
  "africa-regional-deployment-mode.readiness.phase_89",
  "country kit ready",
  "AFRICA_REGIONAL_DEPLOYMENT_MODE_NO_EXECUTION_DEFAULTS",
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
], "Phase 89 Africa Regional Deployment Mode readiness contract");

assert.equal(DEFAULT_AFRICA_REGIONAL_DEPLOYMENT_MODE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_AFRICA_REGIONAL_DEPLOYMENT_MODE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
assert.equal(DEFAULT_AFRICA_REGIONAL_DEPLOYMENT_MODE_FEATURE_FLAG_STATE.noExecution, true);
assert.deepEqual(protectedFields, Array.from(PROTECTED_AFRICA_REGIONAL_DEPLOYMENT_MODE_FLAG_FIELDS), "AK3 harness must mirror AK2 protected fields.");

for (const field of protectedFields) {
  assert.equal(DEFAULT_AFRICA_REGIONAL_DEPLOYMENT_MODE_FEATURE_FLAG_STATE[field], false, `AK4 default ${field} must remain false.`);
}

const unsafeInput = { enabled: true, visibleUiAllowed: true, noExecution: false };
for (const field of protectedFields) unsafeInput[field] = true;
const normalizedUnsafeAttempt = normalizeAfricaRegionalDeploymentModeFeatureFlagState(unsafeInput);
assert.equal(normalizedUnsafeAttempt.visibleUiAllowed, true);
assert.equal(normalizedUnsafeAttempt.noExecution, true);
for (const field of protectedFields) {
  assert.equal(normalizedUnsafeAttempt[field], false, `AK4 unsafe attempt must normalize ${field}=false.`);
}

const fixtureResult = validateAfricaRegionalDeploymentModeFlagFixtures(fixtures);
assert.equal(fixtureResult.ok, true, fixtureResult.failures.join("\n"));
assert.equal(fixtureResult.count, 4, "AK3 fixtures must remain deterministic.");

const unsafeFixture = fixtures.find(fixture => fixture.fixtureId === "africa-regional-deployment-mode-unsafe-authority-attempt");
const expandedUnsafe = expandFixtureInput(unsafeFixture.input);
for (const field of protectedFields) {
  assert.equal(expandedUnsafe[field], true, `AK4 unsafe fixture must expand ${field}=true before normalization.`);
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
  "activateCountryKit(",
  "routeByJurisdiction(",
  "syncRegionalSources(",
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
  assert(!featureFlagModule.includes(term), `AK2 feature flag module must not include runtime API: ${term}`);
  assert(!ak3Harness.includes(term), `AK3 harness must not include runtime API: ${term}`);
}

const alias = "qa:nexus-sprint-ak4-africa-regional-deployment-mode-runtime-absence-regression-guard";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AK4 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ak3-africa-regional-deployment-mode-flag-contract-harness-qa.js"), "qa-suite must continue to include Sprint AK3 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ak2-africa-regional-deployment-mode-feature-flag-contract-qa.js"), "qa-suite must continue to include Sprint AK2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ak1-africa-regional-deployment-mode-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint AK1 QA.");
assert(qaSuite.includes("scripts/nexus-africa-regional-deployment-mode-readiness-contract-qa.js"), "qa-suite must continue to include Africa Regional Deployment Mode readiness QA.");

console.log("[nexus-sprint-ak4-africa-regional-deployment-mode-runtime-absence-regression-guard-qa] passed");
