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

const docName = "NEXUS_SPRINT_J4_USER_PROFILE_RUNTIME_ABSENCE_REGRESSION_GUARD.md";
const qaName = "nexus-sprint-j4-user-profile-runtime-absence-regression-guard-qa.js";

assert(exists("docs", docName), "Sprint J4 runtime absence guard doc must exist.");
assert(exists("scripts", qaName), "Sprint J4 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const featureFlagModule = read("public", "nexus-user-profile-feature-flag.js");
const harnessSource = read("scripts", "nexus-sprint-j3-user-profile-flag-contract-harness.js");
const fixtures = loadUserProfileFlagFixtures();

assertIncludes(doc, [
  "Sprint J4",
  "37bcc50a37b34c0d5e0f79c5c869789d41e6e104",
  "documentation and QA only",
  "Runtime Absence Requirements",
  "Blocked Runtime Behavior",
  "Required Contract Invariants",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "Sprint J5 - User Profile Lane Closeout"
], "J4 runtime absence doc");

assertIncludes(doc, [
  "public/nexus-user-profile-readiness-contract.js",
  "public/nexus-user-profile-feature-flag.js",
  "scripts/nexus-sprint-j3-user-profile-flag-contract-harness.js",
  "fixtures/nexus/user-profile-feature-flags.json",
  "It intentionally does not ban generic words such as profile, account, login, or user"
], "J4 protected artifact list");

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
], "J4 blocked runtime behavior");

for (const prior of [
  ["docs", "NEXUS_SPRINT_J1_USER_PROFILE_RUNTIME_ACTIVATION_READINESS_GATE.md"],
  ["docs", "NEXUS_SPRINT_J2_USER_PROFILE_FEATURE_FLAG_CONTRACT.md"],
  ["docs", "NEXUS_SPRINT_J3_USER_PROFILE_FLAG_CONTRACT_HARNESS.md"],
  ["docs", "NEXUS_USER_PROFILE_READINESS_CONTRACT_PHASE_62.md"],
  ["public", "nexus-user-profile-readiness-contract.js"],
  ["public", "nexus-user-profile-feature-flag.js"],
  ["fixtures", "nexus", "user-profile-feature-flags.json"],
  ["scripts", "nexus-sprint-j3-user-profile-flag-contract-harness.js"]
]) {
  assert(exists(...prior), `Sprint J4 requires prior artifact: ${prior.join("/")}`);
}

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
  "authorizeProfilePayment"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate User Profile artifact: ${term}`);
}

assert.equal(DEFAULT_USER_PROFILE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_USER_PROFILE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
for (const field of protectedFields) {
  assert.equal(DEFAULT_USER_PROFILE_FEATURE_FLAG_STATE[field], false, `J2 default ${field} must remain false.`);
}
assert.equal(DEFAULT_USER_PROFILE_FEATURE_FLAG_STATE.noExecution, true);

const unsafeAttempt = normalizeUserProfileFeatureFlagState({
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
assert.equal(unsafeAttempt.visibleUiAllowed, true);
for (const field of protectedFields) {
  assert.equal(unsafeAttempt[field], false, `Unsafe attempt must normalize ${field} back to false.`);
}
assert.equal(unsafeAttempt.noExecution, true);

const fixtureResult = validateUserProfileFlagFixtures(fixtures);
assert.equal(fixtureResult.ok, true, "J3 fixtures must remain valid.");
assert.equal(fixtureResult.count, 4, "J3 fixtures must remain complete.");

for (const source of [featureFlagModule, harnessSource]) {
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
    "open(",
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
    assert(!source.includes(term), `J2/J3 artifact must not include runtime API: ${term}`);
  }
}

const alias = "qa:nexus-sprint-j4-user-profile-runtime-absence-regression-guard";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint J4 QA.");

console.log("[nexus-sprint-j4-user-profile-runtime-absence-regression-guard-qa] passed");
