const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  DEFAULT_USER_PROFILE_FEATURE_FLAG_STATE,
  normalizeUserProfileFeatureFlagState
} = require("../public/nexus-user-profile-feature-flag.js");
const {
  protectedFields,
  loadUserProfileFlagFixtures,
  validateUserProfileFlagFixtures
} = require("./nexus-sprint-j3-user-profile-flag-contract-harness.js");

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

const docName = "NEXUS_SPRINT_J5_USER_PROFILE_LANE_CLOSEOUT.md";
const qaName = "nexus-sprint-j5-user-profile-lane-closeout-qa.js";

assert(exists("docs", docName), "Sprint J5 closeout doc must exist.");
assert(exists("scripts", qaName), "Sprint J5 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const readinessContract = read("public", "nexus-user-profile-readiness-contract.js");
const featureFlagModule = read("public", "nexus-user-profile-feature-flag.js");
const j3Harness = read("scripts", "nexus-sprint-j3-user-profile-flag-contract-harness.js");
const fixtures = loadUserProfileFlagFixtures();

assertIncludes(doc, [
  "Sprint J5",
  "ec460553447e17e6481d061122561383191a4a33",
  "documentation and deterministic QA only",
  "Sprint J Completion Summary",
  "What Is Active Now",
  "What Remains Inert",
  "No-Authority And No-Execution Guarantees",
  "Blocked Runtime Categories",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "Rollback Strategy",
  "Sprint K1 - Personalization Runtime Activation Readiness Gate"
], "J5 closeout doc");

assertIncludes(doc, [
  "User Profile runtime activation readiness gate",
  "User Profile feature flag contract",
  "User Profile flag contract harness",
  "User Profile runtime absence regression guard",
  "User Profile lane closeout"
], "J5 sprint summary");

assertIncludes(doc, [
  "User Profile readiness is not runtime activation",
  "User Profile visibility readiness is not profile authority",
  "profile context is not proof of identity, consent, role authorization, provider authorization, or execution approval",
  "enabled: false",
  "visibleUiAllowed: false",
  "profileContextAllowed: false",
  "profileBackendAllowed: false",
  "accountCreationAllowed: false",
  "profileMutationAllowed: false",
  "profileSharingAllowed: false",
  "profileSyncAllowed: false",
  "identityProofingAllowed: false",
  "roleElevationAllowed: false",
  "providerProfileHandoffAllowed: false",
  "sensitiveProfileStorageAllowed: false",
  "automaticPersonalizationAllowed: false",
  "standardUserProfileMutationAllowed: false",
  "permissionPromptAllowed: false",
  "backendWriteAllowed: false",
  "storageWriteAllowed: false",
  "networkAllowed: false",
  "auditWriteAllowed: false",
  "executionAuthority: false",
  "noExecution: true",
  "unsafe authority attempts normalize back to no-execution values",
  "no action has been taken"
], "J5 no-authority and no-execution language");

assertIncludes(doc, [
  "visible profile center UI",
  "profile center buttons",
  "profile forms",
  "event handlers",
  "confirmation bypasses",
  "profile creation",
  "profile editing",
  "profile mutation",
  "profile sharing",
  "profile sync",
  "sensitive profile storage",
  "automatic personalization",
  "account creation",
  "account deletion",
  "account login",
  "password reset",
  "role elevation",
  "identity proofing",
  "identity document handling",
  "provider profile handoff",
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
], "J5 blocked runtime categories");

const requiredDocs = [
  "NEXUS_SPRINT_J1_USER_PROFILE_RUNTIME_ACTIVATION_READINESS_GATE.md",
  "NEXUS_SPRINT_J2_USER_PROFILE_FEATURE_FLAG_CONTRACT.md",
  "NEXUS_SPRINT_J3_USER_PROFILE_FLAG_CONTRACT_HARNESS.md",
  "NEXUS_SPRINT_J4_USER_PROFILE_RUNTIME_ABSENCE_REGRESSION_GUARD.md",
  "NEXUS_USER_PROFILE_READINESS_CONTRACT_PHASE_62.md",
  "NEXUS_PERSONALIZATION_READINESS_CONTRACT_PHASE_63.md"
];

for (const requiredDoc of requiredDocs) {
  assert(exists("docs", requiredDoc), `Sprint J5 requires prior or next-lane doc: ${requiredDoc}`);
}

const requiredScripts = [
  "nexus-sprint-j1-user-profile-runtime-activation-readiness-gate-qa.js",
  "nexus-sprint-j2-user-profile-feature-flag-contract-qa.js",
  "nexus-sprint-j3-user-profile-flag-contract-harness-qa.js",
  "nexus-sprint-j4-user-profile-runtime-absence-regression-guard-qa.js"
];

for (const requiredScript of requiredScripts) {
  assert(exists("scripts", requiredScript), `Sprint J5 requires prior Sprint J QA: ${requiredScript}`);
  assert(qaSuite.includes(`scripts/${requiredScript}`), `qa-suite must include prior Sprint J QA: ${requiredScript}`);
}

assert(exists("public", "nexus-user-profile-readiness-contract.js"), "Sprint J5 requires Phase 62 User Profile readiness contract.");
assert(exists("public", "nexus-user-profile-feature-flag.js"), "Sprint J5 requires J2 feature flag contract.");
assert(exists("fixtures", "nexus", "user-profile-feature-flags.json"), "Sprint J5 requires J3 feature flag fixture.");

assertIncludes(readinessContract, [
  "USER_PROFILE_READINESS_CONTRACT",
  "user_profile.readiness.phase_62",
  "USER_PROFILE_NO_EXECUTION_DEFAULTS",
  "createUserProfileReadinessContract",
  "executionAllowed: false",
  "liveActionEnabled: false"
], "Phase 62 User Profile readiness contract");

assertIncludes(featureFlagModule, [
  "DEFAULT_USER_PROFILE_FEATURE_FLAG_STATE",
  "NEXUS_USER_PROFILE_VISIBLE_ENABLED",
  "normalizeUserProfileFeatureFlagState",
  "isUserProfileVisibleFeatureEnabled",
  "executionAuthority",
  "noExecution"
], "J2 User Profile feature flag module");

assertIncludes(j3Harness, [
  "loadUserProfileFlagFixtures",
  "validateUserProfileFlagFixtures"
], "J3 User Profile harness");

assert.equal(DEFAULT_USER_PROFILE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_USER_PROFILE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
for (const field of protectedFields) {
  assert.equal(DEFAULT_USER_PROFILE_FEATURE_FLAG_STATE[field], false, `J5 default ${field} must remain false.`);
}
assert.equal(DEFAULT_USER_PROFILE_FEATURE_FLAG_STATE.noExecution, true);

const normalizedUnsafeAttempt = normalizeUserProfileFeatureFlagState({
  enabled: true,
  visibleUiAllowed: true,
  profileContextAllowed: true,
  profileBackendAllowed: true,
  accountCreationAllowed: true,
  profileMutationAllowed: true,
  profileSharingAllowed: true,
  profileSyncAllowed: true,
  identityProofingAllowed: true,
  roleElevationAllowed: true,
  providerProfileHandoffAllowed: true,
  sensitiveProfileStorageAllowed: true,
  automaticPersonalizationAllowed: true,
  standardUserProfileMutationAllowed: true,
  permissionPromptAllowed: true,
  backendWriteAllowed: true,
  storageWriteAllowed: true,
  networkAllowed: true,
  auditWriteAllowed: true,
  executionAuthority: true,
  noExecution: false
});

assert.equal(normalizedUnsafeAttempt.visibleUiAllowed, true);
for (const field of protectedFields) {
  assert.equal(normalizedUnsafeAttempt[field], false, `Unsafe attempt must normalize ${field} back to false.`);
}
assert.equal(normalizedUnsafeAttempt.noExecution, true);

const fixtureResult = validateUserProfileFlagFixtures(fixtures);
assert.equal(fixtureResult.ok, true, "J3 fixtures must remain valid.");
assert.equal(fixtureResult.count, 4, "J3 fixtures must remain complete.");

const runtime = [index, app, server].join("\n");
for (const term of [
  "nexus-user-profile-readiness-contract.js",
  "nexus-user-profile-feature-flag.js",
  "nexus-sprint-j3-user-profile-flag-contract-harness",
  "user-profile-feature-flags.json",
  "NEXUS_USER_PROFILE_VISIBLE_ENABLED",
  "NexusUserProfileFeatureFlagContract",
  "normalizeUserProfileFeatureFlagState",
  "isUserProfileVisibleFeatureEnabled",
  "renderProfileCenter",
  "openProfileCenter",
  "createUserProfile(",
  "updateUserProfile(",
  "shareUserProfile(",
  "syncUserProfile(",
  "executeProfileAction",
  "dispatchProfileAction",
  "elevateProfileRole",
  "authorizeProfilePayment",
  "nexus-sprint-j5-user-profile-lane-closeout"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate User Profile lane artifact: ${term}`);
}

for (const source of [featureFlagModule, j3Harness]) {
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
    "goSection("
  ]) {
    assert(!source.includes(term), `Sprint J contract/harness must not include runtime API: ${term}`);
  }
}

const alias = "qa:nexus-sprint-j5-user-profile-lane-closeout";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint J5 QA.");

console.log("[nexus-sprint-j5-user-profile-lane-closeout-qa] passed");
