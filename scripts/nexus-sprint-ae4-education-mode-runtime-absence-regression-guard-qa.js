const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  DEFAULT_EDUCATION_MODE_FEATURE_FLAG_STATE,
  normalizeEducationModeFeatureFlagState
} = require("../public/nexus-education-mode-feature-flag.js");
const {
  protectedFields,
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

const docName = "NEXUS_SPRINT_AE4_EDUCATION_MODE_RUNTIME_ABSENCE_REGRESSION_GUARD.md";
const qaName = "nexus-sprint-ae4-education-mode-runtime-absence-regression-guard-qa.js";

assert(exists("docs", docName), "Sprint AE4 absence guard doc must exist.");
assert(exists("scripts", qaName), "Sprint AE4 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const readinessContract = read("public", "nexus-education-mode-readiness-contract.js");
const featureFlagModule = read("public", "nexus-education-mode-feature-flag.js");
const ae3Harness = read("scripts", "nexus-sprint-ae3-education-mode-flag-contract-harness.js");
const fixtures = loadEducationModeFlagFixtures();

assertIncludes(doc, [
  "Sprint AE4",
  "b8a16d4cda9147149ae2c658d0fe6944fadd9e7b",
  "documentation and QA only",
  "Purpose",
  "Runtime Absence Requirements",
  "Blocked Runtime Behavior",
  "Required Contract Invariants",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "QA Expectations",
  "Sprint AE5 - Education Mode Lane Closeout"
], "AE4 absence guard doc");

assertIncludes(doc, [
  "AE1 Education Mode runtime activation readiness gate",
  "AE2 Education Mode feature flag contract",
  "AE3 Education Mode flag contract harness",
  "Phase 83 Education Mode readiness contract"
], "AE4 protected artifacts");

assertIncludes(doc, [
  "public/nexus-education-mode-readiness-contract.js",
  "public/nexus-education-mode-feature-flag.js",
  "scripts/nexus-sprint-ae3-education-mode-flag-contract-harness.js",
  "fixtures/nexus/education-mode-feature-flags.json",
  "Sprint AE QA scripts"
], "AE4 runtime absence artifact list");

assertIncludes(doc, [
  "It intentionally does not ban generic health, telehealth, clinic",
  "provider",
  "training",
  "jobs",
  "education",
  "certification",
  "enrollment",
  "learning",
  "support",
  "marketplace",
  "agriculture",
  "AgriTrade"
], "AE4 generic wording exception");

assertIncludes(doc, [
  "active Education Mode runtime",
  "live Education Mode runtime",
  "education connector runtime",
  "education content provider connector runtime",
  "training provider connector runtime",
  "certification provider connector runtime",
  "enrollment connector runtime",
  "identity connector runtime",
  "payment connector runtime",
  "communications connector runtime",
  "transportation connector runtime",
  "health connector runtime",
  "course enrollment",
  "course registration",
  "credential issuance",
  "certificate issuance",
  "provider contact",
  "training provider contact",
  "certification provider contact",
  "content provider contact",
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
  "training partner connection claims",
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
  "training partner handoff",
  "native bridge dispatch",
  "calls",
  "messages",
  "WhatsApp, Telegram, SMS, or email sending",
  "external navigation",
  "real pending action creation",
  "execution authority"
], "AE4 blocked runtime behavior");

for (const requiredPath of [
  ["docs", "NEXUS_SPRINT_AE1_EDUCATION_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md"],
  ["docs", "NEXUS_SPRINT_AE2_EDUCATION_MODE_FEATURE_FLAG_CONTRACT.md"],
  ["docs", "NEXUS_SPRINT_AE3_EDUCATION_MODE_FLAG_CONTRACT_HARNESS.md"],
  ["docs", "NEXUS_EDUCATION_MODE_READINESS_CONTRACT_PHASE_83.md"],
  ["public", "nexus-education-mode-readiness-contract.js"],
  ["public", "nexus-education-mode-feature-flag.js"],
  ["fixtures", "nexus", "education-mode-feature-flags.json"],
  ["scripts", "nexus-sprint-ae3-education-mode-flag-contract-harness.js"]
]) {
  assert(exists(...requiredPath), `AE4 requires artifact: ${requiredPath.join("/")}`);
}

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
  "educationConnectorRuntime",
  "educationContentProviderConnectorRuntime",
  "trainingProviderConnectorRuntime",
  "certificationProviderConnectorRuntime",
  "enrollmentConnectorRuntime",
  "identityConnectorRuntime",
  "paymentConnectorRuntime",
  "communicationsConnectorRuntime",
  "transportationConnectorRuntime",
  "healthConnectorRuntime",
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
  "sharePatientLocation(",
  "openEducationCamera(",
  "openEducationMicrophone(",
  "nexus-sprint-ae4-education-mode-runtime-absence-regression-guard"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Education Mode lane artifact: ${term}`);
}

assertIncludes(readinessContract, [
  "EDUCATION_MODE_READINESS_CONTRACT",
  "education-mode.readiness.phase_83",
  "EDUCATION_MODE_NO_EXECUTION_DEFAULTS",
  "createEducationModeReadinessContract",
  "\"executionAllowed\": false",
  "\"liveConnectorEnabled\": false",
  "\"providerExecutionEnabled\": false",
  "\"regulatedActionEnabled\": false",
  "communications",
  "identity",
  "payments",
  "healthcare",
  "emergency",
  "regulated_execution"
], "Phase 83 Education Mode readiness contract");

assert.equal(DEFAULT_EDUCATION_MODE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_EDUCATION_MODE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
for (const field of protectedFields) {
  assert.equal(DEFAULT_EDUCATION_MODE_FEATURE_FLAG_STATE[field], false, `AE4 default ${field} must remain false.`);
}
assert.equal(DEFAULT_EDUCATION_MODE_FEATURE_FLAG_STATE.noExecution, true);

const unsafeInput = {
  enabled: true,
  visibleUiAllowed: true,
  noExecution: false
};
for (const field of protectedFields) {
  unsafeInput[field] = true;
}
const normalizedUnsafeAttempt = normalizeEducationModeFeatureFlagState(unsafeInput);

assert.equal(normalizedUnsafeAttempt.visibleUiAllowed, true);
for (const field of protectedFields) {
  assert.equal(normalizedUnsafeAttempt[field], false, `Unsafe attempt must normalize ${field} back to false.`);
}
assert.equal(normalizedUnsafeAttempt.noExecution, true);

const fixtureResult = validateEducationModeFlagFixtures(fixtures);
assert.equal(fixtureResult.ok, true, "AE3 fixtures must remain valid.");
assert.equal(fixtureResult.count, 4, "AE3 fixtures must remain complete.");

for (const source of [featureFlagModule, ae3Harness]) {
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
    "sharePatientLocation(",
    "openEducationCamera(",
    "openEducationMicrophone("
  ]) {
    assert(!source.includes(term), `Sprint AE contract/harness must not include runtime API: ${term}`);
  }
}

const alias = "qa:nexus-sprint-ae4-education-mode-runtime-absence-regression-guard";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint AE4 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ae1-education-mode-runtime-activation-readiness-gate-qa.js"), "qa-suite must continue to include Sprint AE1 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ae2-education-mode-feature-flag-contract-qa.js"), "qa-suite must continue to include Sprint AE2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-ae3-education-mode-flag-contract-harness-qa.js"), "qa-suite must continue to include Sprint AE3 QA.");

console.log("[nexus-sprint-ae4-education-mode-runtime-absence-regression-guard-qa] passed");
