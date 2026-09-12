const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  DEFAULT_IDENTITY_FOUNDATION_FEATURE_FLAG_STATE,
  normalizeIdentityFoundationFeatureFlagState
} = require("../public/nexus-identity-foundation-feature-flag.js");
const {
  protectedFields,
  loadIdentityFoundationFlagFixtures,
  validateIdentityFoundationFlagFixtures
} = require("./nexus-sprint-i3-identity-foundation-flag-contract-harness.js");

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

const docName = "NEXUS_SPRINT_I5_IDENTITY_FOUNDATION_LANE_CLOSEOUT.md";
const qaName = "nexus-sprint-i5-identity-foundation-lane-closeout-qa.js";

assert(exists("docs", docName), "Sprint I5 closeout doc must exist.");
assert(exists("scripts", qaName), "Sprint I5 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const identityContract = read("public", "nexus-identity-foundation-contract.js");
const featureFlagModule = read("public", "nexus-identity-foundation-feature-flag.js");
const i3Harness = read("scripts", "nexus-sprint-i3-identity-foundation-flag-contract-harness.js");
const fixtures = loadIdentityFoundationFlagFixtures();

assertIncludes(doc, [
  "Sprint I5",
  "b8e5bb6b5ff0b2b1b1ffb379bba51a4f91904f41",
  "documentation and deterministic QA only",
  "Sprint I Completion Summary",
  "What Is Active Now",
  "What Remains Inert",
  "No-Authority And No-Execution Guarantees",
  "Blocked Runtime Categories",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "Rollback Strategy",
  "Sprint J1 - User Profile Runtime Activation Readiness Gate"
], "I5 closeout doc");

assertIncludes(doc, [
  "Identity Foundation runtime activation readiness gate",
  "Identity Foundation feature flag contract",
  "Identity Foundation flag contract harness",
  "Identity Foundation runtime absence regression guard",
  "Identity Foundation lane closeout"
], "I5 sprint summary");

assertIncludes(doc, [
  "Identity Foundation readiness is not runtime activation",
  "Identity Foundation visibility readiness is not identity authority",
  "identity readiness is not proof of identity",
  "enabled: false",
  "visibleUiAllowed: false",
  "identityContextAllowed: false",
  "accountContextAllowed: false",
  "roleContextAllowed: false",
  "identityVerificationAllowed: false",
  "identityDocumentCollectionAllowed: false",
  "identityDocumentSharingAllowed: false",
  "profileMutationAllowed: false",
  "accountMutationAllowed: false",
  "accountLoginAllowed: false",
  "passwordResetAllowed: false",
  "roleElevationAllowed: false",
  "credentialUseAllowed: false",
  "providerAuthorizationAllowed: false",
  "patientAuthorizationAllowed: false",
  "paymentAuthorizationAllowed: false",
  "emergencyContactSharingAllowed: false",
  "permissionPromptAllowed: false",
  "backendWriteAllowed: false",
  "storageWriteAllowed: false",
  "networkAllowed: false",
  "executionAuthority: false",
  "noExecution: true",
  "unsafe authority attempts normalize back to no-execution values",
  "no action has been taken"
], "I5 no-authority and no-execution language");

assertIncludes(doc, [
  "visible Identity Center UI",
  "Identity Center buttons",
  "identity forms",
  "event handlers",
  "confirmation bypasses",
  "identity verification",
  "identity document collection",
  "identity document sharing",
  "profile mutation",
  "account creation",
  "account deletion",
  "account login",
  "password reset",
  "role elevation",
  "credential use",
  "provider authorization",
  "patient authorization",
  "payment authorization",
  "emergency contact sharing",
  "audit writes",
  "provider handoff",
  "native bridge dispatch",
  "calls",
  "messages",
  "WhatsApp, Telegram, SMS, or email sending",
  "payment execution",
  "marketplace transactions",
  "location sharing",
  "camera or microphone activation",
  "health, medical, pharmacy, prescription, or FHIR execution",
  "appointment scheduling",
  "transportation dispatch",
  "emergency dispatch",
  "external navigation",
  "fetch or network calls",
  "localStorage or sessionStorage writes",
  "backend writes",
  "real pending action creation",
  "execution authority"
], "I5 blocked runtime categories");

const requiredDocs = [
  "NEXUS_SPRINT_I1_IDENTITY_FOUNDATION_RUNTIME_ACTIVATION_READINESS_GATE.md",
  "NEXUS_SPRINT_I2_IDENTITY_FOUNDATION_FEATURE_FLAG_CONTRACT.md",
  "NEXUS_SPRINT_I3_IDENTITY_FOUNDATION_FLAG_CONTRACT_HARNESS.md",
  "NEXUS_SPRINT_I4_IDENTITY_FOUNDATION_RUNTIME_ABSENCE_REGRESSION_GUARD.md",
  "NEXUS_IDENTITY_FOUNDATION_CONTRACT_PHASE_46.md",
  "NEXUS_USER_PROFILE_READINESS_CONTRACT_PHASE_62.md"
];

for (const requiredDoc of requiredDocs) {
  assert(exists("docs", requiredDoc), `Sprint I5 requires prior or next-lane doc: ${requiredDoc}`);
}

const requiredScripts = [
  "nexus-sprint-i1-identity-foundation-runtime-activation-readiness-gate-qa.js",
  "nexus-sprint-i2-identity-foundation-feature-flag-contract-qa.js",
  "nexus-sprint-i3-identity-foundation-flag-contract-harness-qa.js",
  "nexus-sprint-i4-identity-foundation-runtime-absence-regression-guard-qa.js"
];

for (const requiredScript of requiredScripts) {
  assert(exists("scripts", requiredScript), `Sprint I5 requires prior Sprint I QA: ${requiredScript}`);
  assert(qaSuite.includes(`scripts/${requiredScript}`), `qa-suite must include prior Sprint I QA: ${requiredScript}`);
}

assert(exists("public", "nexus-identity-foundation-contract.js"), "Sprint I5 requires Phase 46 Identity Foundation contract.");
assert(exists("public", "nexus-identity-foundation-feature-flag.js"), "Sprint I5 requires I2 feature flag contract.");
assert(exists("fixtures", "nexus", "identity-foundation-feature-flags.json"), "Sprint I5 requires I3 feature flag fixture.");

assertIncludes(identityContract, [
  "IDENTITY_FOUNDATION_CONTRACT",
  "identity.foundation.not_configured",
  "NO_EXECUTION_DEFAULTS",
  "createIdentityFoundation",
  "noExecution"
], "Phase 46 Identity Foundation contract");

assertIncludes(featureFlagModule, [
  "DEFAULT_IDENTITY_FOUNDATION_FEATURE_FLAG_STATE",
  "NEXUS_IDENTITY_FOUNDATION_VISIBLE_ENABLED",
  "normalizeIdentityFoundationFeatureFlagState",
  "isIdentityFoundationVisibleFeatureEnabled",
  "executionAuthority",
  "noExecution"
], "I2 Identity Foundation feature flag module");

assertIncludes(i3Harness, [
  "loadIdentityFoundationFlagFixtures",
  "validateIdentityFoundationFlagFixtures"
], "I3 Identity Foundation harness");

assert.equal(DEFAULT_IDENTITY_FOUNDATION_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_IDENTITY_FOUNDATION_FEATURE_FLAG_STATE.visibleUiAllowed, false);
for (const field of protectedFields) {
  assert.equal(DEFAULT_IDENTITY_FOUNDATION_FEATURE_FLAG_STATE[field], false, `I5 default ${field} must remain false.`);
}
assert.equal(DEFAULT_IDENTITY_FOUNDATION_FEATURE_FLAG_STATE.noExecution, true);

const normalizedUnsafeAttempt = normalizeIdentityFoundationFeatureFlagState({
  enabled: true,
  visibleUiAllowed: true,
  identityContextAllowed: true,
  accountContextAllowed: true,
  roleContextAllowed: true,
  identityVerificationAllowed: true,
  identityDocumentCollectionAllowed: true,
  identityDocumentSharingAllowed: true,
  profileMutationAllowed: true,
  accountMutationAllowed: true,
  accountLoginAllowed: true,
  passwordResetAllowed: true,
  roleElevationAllowed: true,
  credentialUseAllowed: true,
  providerAuthorizationAllowed: true,
  patientAuthorizationAllowed: true,
  paymentAuthorizationAllowed: true,
  emergencyContactSharingAllowed: true,
  permissionPromptAllowed: true,
  backendWriteAllowed: true,
  storageWriteAllowed: true,
  networkAllowed: true,
  executionAuthority: true,
  noExecution: false
});

assert.equal(normalizedUnsafeAttempt.visibleUiAllowed, true);
for (const field of protectedFields) {
  assert.equal(normalizedUnsafeAttempt[field], false, `Unsafe attempt must normalize ${field} back to false.`);
}
assert.equal(normalizedUnsafeAttempt.noExecution, true);

const fixtureResult = validateIdentityFoundationFlagFixtures(fixtures);
assert.equal(fixtureResult.ok, true, "I3 fixtures must remain valid.");
assert.equal(fixtureResult.count, 4, "I3 fixtures must remain complete.");

const runtime = [index, app, server].join("\n");
for (const term of [
  "nexus-identity-foundation-contract.js",
  "nexus-identity-foundation-feature-flag.js",
  "nexus-sprint-i3-identity-foundation-flag-contract-harness",
  "identity-foundation-feature-flags.json",
  "NEXUS_IDENTITY_FOUNDATION_VISIBLE_ENABLED",
  "NexusIdentityFoundationFeatureFlagContract",
  "normalizeIdentityFoundationFeatureFlagState",
  "isIdentityFoundationVisibleFeatureEnabled",
  "renderIdentityCenter",
  "openIdentityCenter",
  "verifyIdentityFoundation",
  "collectIdentityDocument",
  "shareIdentityDocument",
  "mutateIdentityProfile",
  "mutateIdentityAccount",
  "elevateIdentityRole",
  "executeIdentityAction",
  "dispatchIdentityAction",
  "nexus-sprint-i5-identity-foundation-lane-closeout"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Identity Foundation lane artifact: ${term}`);
}

for (const source of [featureFlagModule, i3Harness]) {
  for (const term of [
    "document.",
    "querySelector",
    "addEventListener",
    "fetch(",
    "XMLHttpRequest",
    "localStorage",
    "sessionStorage",
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
    "goSection("
  ]) {
    assert(!source.includes(term), `Sprint I contract/harness must not include runtime API: ${term}`);
  }
}

const alias = "qa:nexus-sprint-i5-identity-foundation-lane-closeout";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint I5 QA.");

console.log("[nexus-sprint-i5-identity-foundation-lane-closeout-qa] passed");
