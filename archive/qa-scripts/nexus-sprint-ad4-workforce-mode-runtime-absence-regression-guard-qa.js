const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  DEFAULT_WORKFORCE_MODE_FEATURE_FLAG_STATE,
  normalizeWorkforceModeFeatureFlagState
} = require("../public/nexus-workforce-mode-feature-flag.js");
const {
  protectedFields,
  loadWorkforceModeFlagFixtures,
  validateWorkforceModeFlagFixtures
} = require("./nexus-sprint-ad3-workforce-mode-flag-contract-harness.js");

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

const docName = "NEXUS_SPRINT_AD4_WORKFORCE_MODE_RUNTIME_ABSENCE_REGRESSION_GUARD.md";
const qaName = "nexus-sprint-ad4-workforce-mode-runtime-absence-regression-guard-qa.js";

assert(exists("docs", docName), "Sprint AD4 absence guard doc must exist.");
assert(exists("scripts", qaName), "Sprint AD4 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const readinessContract = read("public", "nexus-workforce-mode-readiness-contract.js");
const featureFlagModule = read("public", "nexus-workforce-mode-feature-flag.js");
const ad3Harness = read("scripts", "nexus-sprint-ad3-workforce-mode-flag-contract-harness.js");
const fixtures = loadWorkforceModeFlagFixtures();

assertIncludes(doc, [
  "Sprint AD4",
  "d9b620dd883559e4771f9022a420a531efa7c635",
  "documentation and QA only",
  "Purpose",
  "Runtime Absence Requirements",
  "Blocked Runtime Behavior",
  "Required Contract Invariants",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "QA Expectations",
  "Sprint AD5 - Workforce Mode Lane Closeout"
], "AD4 absence guard doc");

assertIncludes(doc, [
  "AD1 Workforce Mode runtime activation readiness gate",
  "AD2 Workforce Mode feature flag contract",
  "AD3 Workforce Mode flag contract harness",
  "Phase 82 Workforce Mode readiness contract"
], "AD4 protected artifacts");

assertIncludes(doc, [
  "public/nexus-workforce-mode-readiness-contract.js",
  "public/nexus-workforce-mode-feature-flag.js",
  "scripts/nexus-sprint-ad3-workforce-mode-flag-contract-harness.js",
  "fixtures/nexus/workforce-mode-feature-flags.json",
  "Sprint AD QA scripts"
], "AD4 runtime absence artifact list");

assertIncludes(doc, [
  "It intentionally does not ban generic health, telehealth, clinic",
  "provider",
  "employer",
  "workforce",
  "training",
  "jobs",
  "education",
  "certification",
  "referral",
  "location",
  "map",
  "transportation",
  "learning",
  "support",
  "marketplace",
  "agriculture",
  "AgriTrade"
], "AD4 generic wording exception");

assertIncludes(doc, [
  "active Workforce Mode runtime",
  "live Workforce Mode runtime",
  "workforce connector runtime",
  "workforce program connector runtime",
  "training provider connector runtime",
  "certification provider connector runtime",
  "employer connector runtime",
  "referral connector runtime",
  "application connector runtime",
  "identity connector runtime",
  "payment connector runtime",
  "communications connector runtime",
  "transportation connector runtime",
  "health connector runtime",
  "job application submission",
  "workforce referral creation",
  "credential issuance",
  "provider contact",
  "employer contact",
  "training provider contact",
  "certification provider contact",
  "location sharing",
  "camera activation",
  "microphone activation",
  "payment execution",
  "marketplace transaction execution",
  "communications execution",
  "transportation dispatch",
  "emergency dispatch",
  "medical records/FHIR runtime",
  "medical advice",
  "diagnosis claims",
  "prescription instructions",
  "provider connection claims",
  "employer connection claims",
  "completed action claims",
  "typed route mutation",
  "voice route mutation",
  "policy bypass",
  "confirmation bypass",
  "permission bypass",
  "permission prompts",
  "audit writes",
  "backend writes",
  "localStorage or sessionStorage writes",
  "fetch or network calls",
  "provider handoff",
  "employer handoff",
  "native bridge dispatch",
  "calls",
  "messages",
  "WhatsApp, Telegram, SMS, or email sending",
  "external navigation",
  "real pending action creation",
  "execution authority"
], "AD4 blocked runtime behavior");

for (const requiredPath of [
  ["docs", "NEXUS_SPRINT_AD1_WORKFORCE_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md"],
  ["docs", "NEXUS_SPRINT_AD2_WORKFORCE_MODE_FEATURE_FLAG_CONTRACT.md"],
  ["docs", "NEXUS_SPRINT_AD3_WORKFORCE_MODE_FLAG_CONTRACT_HARNESS.md"],
  ["docs", "NEXUS_WORKFORCE_MODE_READINESS_CONTRACT_PHASE_82.md"],
  ["public", "nexus-workforce-mode-readiness-contract.js"],
  ["public", "nexus-workforce-mode-feature-flag.js"],
  ["fixtures", "nexus", "workforce-mode-feature-flags.json"],
  ["scripts", "nexus-sprint-ad3-workforce-mode-flag-contract-harness.js"]
]) {
  assert(exists(...requiredPath), `AD4 requires artifact: ${requiredPath.join("/")}`);
}

const runtime = [index, app, server].join("\n");
for (const term of [
  "nexus-workforce-mode-readiness-contract.js",
  "nexus-workforce-mode-feature-flag.js",
  "nexus-sprint-ad3-workforce-mode-flag-contract-harness",
  "workforce-mode-feature-flags.json",
  "NEXUS_WORKFORCE_MODE_VISIBLE_ENABLED",
  "NexusWorkforceModeFeatureFlagContract",
  "normalizeWorkforceModeFeatureFlagState",
  "isWorkforceModeVisibleFeatureEnabled",
  "workforceModeFeatureFlag",
  "liveWorkforceModeRuntime",
  "workforceConnectorRuntime",
  "workforceProgramConnectorRuntime",
  "trainingProviderConnectorRuntime",
  "certificationProviderConnectorRuntime",
  "employerConnectorRuntime",
  "referralConnectorRuntime",
  "applicationConnectorRuntime",
  "identityConnectorRuntime",
  "paymentConnectorRuntime",
  "communicationsConnectorRuntime",
  "transportationConnectorRuntime",
  "healthConnectorRuntime",
  "executeWorkforceReferral(",
  "submitJobApplication(",
  "contactWorkforceProvider(",
  "contactEmployer(",
  "contactTrainingProvider(",
  "contactCertificationProvider(",
  "issueCertification(",
  "processWorkforcePayment(",
  "dispatchTransportation(",
  "dispatchEmergency(",
  "sharePatientLocation(",
  "openWorkforceCamera(",
  "openWorkforceMicrophone(",
  "nexus-sprint-ad4-workforce-mode-runtime-absence-regression-guard"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Workforce Mode lane artifact: ${term}`);
}

assertIncludes(readinessContract, [
  "WORKFORCE_MODE_READINESS_CONTRACT",
  "workforce-mode.readiness.phase_82",
  "WORKFORCE_MODE_NO_EXECUTION_DEFAULTS",
  "createWorkforceModeReadinessContract",
  "\"executionAllowed\": false",
  "\"liveConnectorEnabled\": false",
  "\"providerExecutionEnabled\": false",
  "\"regulatedActionEnabled\": false",
  "workforce",
  "communications",
  "identity",
  "payments",
  "healthcare",
  "emergency",
  "regulated_execution"
], "Phase 82 Workforce Mode readiness contract");

assert.equal(DEFAULT_WORKFORCE_MODE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_WORKFORCE_MODE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
for (const field of protectedFields) {
  assert.equal(DEFAULT_WORKFORCE_MODE_FEATURE_FLAG_STATE[field], false, `AD4 default ${field} must remain false.`);
}
assert.equal(DEFAULT_WORKFORCE_MODE_FEATURE_FLAG_STATE.noExecution, true);

const unsafeInput = {
  enabled: true,
  visibleUiAllowed: true,
  noExecution: false
};
for (const field of protectedFields) {
  unsafeInput[field] = true;
}
const normalizedUnsafeAttempt = normalizeWorkforceModeFeatureFlagState(unsafeInput);

assert.equal(normalizedUnsafeAttempt.visibleUiAllowed, true);
for (const field of protectedFields) {
  assert.equal(normalizedUnsafeAttempt[field], false, `Unsafe attempt must normalize ${field} back to false.`);
}
assert.equal(normalizedUnsafeAttempt.noExecution, true);

const fixtureResult = validateWorkforceModeFlagFixtures(fixtures);
assert.equal(fixtureResult.ok, true, "AD3 fixtures must remain valid.");
assert.equal(fixtureResult.count, 4, "AD3 fixtures must remain complete.");

for (const source of [featureFlagModule, ad3Harness]) {
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
    "executeWorkforceReferral(",
    "submitJobApplication(",
    "contactWorkforceProvider(",
    "contactEmployer(",
    "contactTrainingProvider(",
    "contactCertificationProvider(",
    "issueCertification(",
    "processWorkforcePayment(",
    "dispatchTransportation(",
    "dispatchEmergency(",
    "sharePatientLocation(",
    "openWorkforceCamera(",
    "openWorkforceMicrophone("
  ]) {
    assert(!source.includes(term), `Sprint AD contract/harness must not include runtime API: ${term}`);
  }
}

const alias = "qa:nexus-sprint-ad4-workforce-mode-runtime-absence-regression-guard";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AD4 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ad1-workforce-mode-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint AD1 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ad2-workforce-mode-feature-flag-contract-qa.js"), "qa-suite must continue to include Sprint AD2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ad3-workforce-mode-flag-contract-harness-qa.js"), "qa-suite must continue to include Sprint AD3 QA.");

console.log("[nexus-sprint-ad4-workforce-mode-runtime-absence-regression-guard-qa] passed");
