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

function assertRuntimeExcludes(source, terms, label) {
  for (const term of terms) {
    assert(!source.includes(term), `${label} must not runtime-load or activate Sprint AD artifact: ${term}`);
  }
}

const docName = "NEXUS_SPRINT_AD5_WORKFORCE_MODE_LANE_CLOSEOUT.md";
const qaName = "nexus-sprint-ad5-workforce-mode-lane-closeout-qa.js";

assert(exists("docs", docName), "Sprint AD5 closeout doc must exist.");
assert(exists("scripts", qaName), "Sprint AD5 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const readinessContract = read("public", "nexus-workforce-mode-readiness-contract.js");
const featureFlagModule = read("public", "nexus-workforce-mode-feature-flag.js");
const ad3Harness = read("scripts", "nexus-sprint-ad3-workforce-mode-flag-contract-harness.js");
const ad4Doc = read("docs", "NEXUS_SPRINT_AD4_WORKFORCE_MODE_RUNTIME_ABSENCE_REGRESSION_GUARD.md");
const fixtures = loadWorkforceModeFlagFixtures();

assertIncludes(doc, [
  "Sprint AD5",
  "7b92a4d7e4979fa94c7a7db001bf19d1668dc5c3",
  "documentation and deterministic QA only",
  "Sprint AD Completion Summary",
  "What Is Active Now",
  "What Remains Inert",
  "No-Authority And No-Execution Guarantees",
  "Blocked Runtime Categories",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "Rollback Strategy",
  "Sprint AE1 - Education Mode Runtime Activation Readiness Gate"
], "AD5 closeout doc");

assertIncludes(doc, [
  "Workforce Mode runtime activation readiness gate",
  "Workforce Mode feature flag contract",
  "Workforce Mode flag contract harness",
  "Workforce Mode runtime absence regression guard",
  "Workforce Mode lane closeout"
], "AD5 sprint summary");

assertIncludes(doc, [
  "Workforce Mode readiness is not runtime activation",
  "Workforce Mode visibility readiness is not source authority, workforce authority, provider authority, employer authority, training provider authority, certification provider authority, referral authority, credential authority, identity authority, payment authority, communications authority, transportation authority, emergency authority, medical authority, location consent, camera consent, microphone consent, user consent, provider approval, employer approval, human review approval, audit approval, or execution approval",
  "generated Workforce Mode text cannot authorize, stage, advise without sources, diagnose, prescribe, apply, refer, certify, contact, dispatch, share location, activate hardware, pay, transact, write, or execute an action by itself",
  "enabled: false",
  "visibleUiAllowed: false",
  "workforceModeReviewAllowed: false",
  "workforcePathwayPreviewAllowed: false",
  "trainingProgramPreviewAllowed: false",
  "jobReadinessPreviewAllowed: false",
  "employerDirectoryPreviewAllowed: false",
  "trainingProviderDirectoryPreviewAllowed: false",
  "certificationPreviewAllowed: false",
  "referralReadinessPreviewAllowed: false",
  "identityBoundaryPreviewAllowed: false",
  "paymentBoundaryPreviewAllowed: false",
  "transportationBoundaryPreviewAllowed: false",
  "emergencyBoundaryPreviewAllowed: false",
  "workforceModeRuntimeAllowed: false",
  "liveWorkforceModeRuntimeAllowed: false",
  "workforceConnectorRuntimeAllowed: false",
  "workforceProgramConnectorRuntimeAllowed: false",
  "trainingProviderConnectorRuntimeAllowed: false",
  "certificationProviderConnectorRuntimeAllowed: false",
  "employerConnectorRuntimeAllowed: false",
  "referralConnectorRuntimeAllowed: false",
  "applicationConnectorRuntimeAllowed: false",
  "identityConnectorRuntimeAllowed: false",
  "paymentConnectorRuntimeAllowed: false",
  "communicationsConnectorRuntimeAllowed: false",
  "transportationConnectorRuntimeAllowed: false",
  "healthConnectorRuntimeAllowed: false",
  "jobApplicationSubmissionAllowed: false",
  "workforceReferralAllowed: false",
  "credentialIssuanceAllowed: false",
  "providerContactAllowed: false",
  "employerContactAllowed: false",
  "trainingProviderContactAllowed: false",
  "certificationProviderContactAllowed: false",
  "locationSharingAllowed: false",
  "cameraActivationAllowed: false",
  "microphoneActivationAllowed: false",
  "paymentExecutionAllowed: false",
  "marketplaceTransactionAllowed: false",
  "communicationsExecutionAllowed: false",
  "transportationDispatchAllowed: false",
  "emergencyDispatchAllowed: false",
  "executionAuthority: false",
  "noExecution: true",
  "unsafe authority attempts normalize back to no-execution values",
  "no action has been taken"
], "AD5 no-authority and no-execution language");

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
  "unsupported live data claims",
  "provider connection claims",
  "employer connection claims",
  "completed action claims",
  "communication execution claims",
  "payment execution claims",
  "marketplace transaction claims",
  "transportation dispatch claims",
  "emergency dispatch claims",
  "medical advice",
  "diagnosis claims",
  "prescription instructions",
  "medical records/FHIR runtime",
  "event handlers",
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
], "AD5 blocked runtime categories");

assertIncludes(ad4Doc, [
  "Sprint AD5 - Workforce Mode Lane Closeout"
], "AD4 next sprint recommendation");

const requiredDocs = [
  "NEXUS_SPRINT_AD1_WORKFORCE_MODE_RUNTIME_ACTIVATION_READINESS_GATE.md",
  "NEXUS_SPRINT_AD2_WORKFORCE_MODE_FEATURE_FLAG_CONTRACT.md",
  "NEXUS_SPRINT_AD3_WORKFORCE_MODE_FLAG_CONTRACT_HARNESS.md",
  "NEXUS_SPRINT_AD4_WORKFORCE_MODE_RUNTIME_ABSENCE_REGRESSION_GUARD.md",
  "NEXUS_WORKFORCE_MODE_READINESS_CONTRACT_PHASE_82.md",
  "NEXUS_EDUCATION_MODE_READINESS_CONTRACT_PHASE_83.md"
];

for (const requiredDoc of requiredDocs) {
  assert(exists("docs", requiredDoc), `Sprint AD5 requires prior or next-lane doc: ${requiredDoc}`);
}

const requiredScripts = [
  "nexus-sprint-ad1-workforce-mode-runtime-activation-readiness-gate-qa.js",
  "nexus-sprint-ad2-workforce-mode-feature-flag-contract-qa.js",
  "nexus-sprint-ad3-workforce-mode-flag-contract-harness-qa.js",
  "nexus-sprint-ad4-workforce-mode-runtime-absence-regression-guard-qa.js"
];

for (const requiredScript of requiredScripts) {
  assert(exists("scripts", requiredScript), `Sprint AD5 requires prior Sprint AD QA: ${requiredScript}`);
  assert(qaSuite.includes(`scripts/${requiredScript}`), `qa-suite must include prior Sprint AD QA: ${requiredScript}`);
}

assert(exists("public", "nexus-workforce-mode-readiness-contract.js"), "Sprint AD5 requires Phase 82 Workforce Mode readiness contract.");
assert(exists("public", "nexus-workforce-mode-feature-flag.js"), "Sprint AD5 requires AD2 feature flag contract.");
assert(exists("fixtures", "nexus", "workforce-mode-feature-flags.json"), "Sprint AD5 requires AD3 feature flag fixture.");
assert(exists("public", "nexus-education-mode-readiness-contract.js"), "Sprint AD5 requires Education Mode readiness contract for the next safe lane.");

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

assertIncludes(featureFlagModule, [
  "DEFAULT_WORKFORCE_MODE_FEATURE_FLAG_STATE",
  "NEXUS_WORKFORCE_MODE_VISIBLE_ENABLED",
  "normalizeWorkforceModeFeatureFlagState",
  "isWorkforceModeVisibleFeatureEnabled",
  "executionAuthority",
  "noExecution"
], "AD2 Workforce Mode feature flag module");

assertIncludes(ad3Harness, [
  "loadWorkforceModeFlagFixtures",
  "validateWorkforceModeFlagFixtures"
], "AD3 Workforce Mode harness");

assert.equal(DEFAULT_WORKFORCE_MODE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_WORKFORCE_MODE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
for (const field of protectedFields) {
  assert.equal(DEFAULT_WORKFORCE_MODE_FEATURE_FLAG_STATE[field], false, `AD5 default ${field} must remain false.`);
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

assert.equal(normalizedUnsafeAttempt.enabled, true);
assert.equal(normalizedUnsafeAttempt.visibleUiAllowed, true);
for (const field of protectedFields) {
  assert.equal(normalizedUnsafeAttempt[field], false, `AD5 unsafe attempt for ${field} must normalize to false.`);
}
assert.equal(normalizedUnsafeAttempt.noExecution, true);

const fixtureResult = validateWorkforceModeFlagFixtures(fixtures);
assert.equal(fixtureResult.ok, true, "AD3 fixtures must remain valid.");
assert.equal(fixtureResult.count, 4, "AD5 expects four AD3 Workforce Mode feature flag fixtures.");

const runtimeForbiddenTerms = [
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
  "nexus-sprint-ad5-workforce-mode-lane-closeout"
];

assertRuntimeExcludes(index, runtimeForbiddenTerms, "public/index.html");
assertRuntimeExcludes(app, runtimeForbiddenTerms, "public/app.js");
assertRuntimeExcludes(server, runtimeForbiddenTerms, "server.js");

const alias = "qa:nexus-sprint-ad5-workforce-mode-lane-closeout";
assert.equal(
  pkg.scripts[alias],
  "node scripts/nexus-sprint-ad5-workforce-mode-lane-closeout-qa.js",
  "package.json must expose Sprint AD5 QA alias."
);
assert(qaSuite.includes("scripts/nexus-sprint-ad5-workforce-mode-lane-closeout-qa.js"), "qa-suite must include Sprint AD5 QA.");

console.log("[nexus-sprint-ad5-workforce-mode-lane-closeout-qa] passed");
