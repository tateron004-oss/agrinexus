const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  USER_PROFILE_FEATURE_FLAG_NAME,
  DEFAULT_USER_PROFILE_FEATURE_FLAG_STATE,
  normalizeUserProfileFeatureFlagState,
  isUserProfileVisibleFeatureEnabled
} = require("../public/nexus-user-profile-feature-flag.js");

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

const docName = "NEXUS_SPRINT_J2_USER_PROFILE_FEATURE_FLAG_CONTRACT.md";
const moduleName = "nexus-user-profile-feature-flag.js";
const qaName = "nexus-sprint-j2-user-profile-feature-flag-contract-qa.js";

assert(exists("docs", docName), "Sprint J2 feature flag contract doc must exist.");
assert(exists("public", moduleName), "Sprint J2 feature flag module must exist.");
assert(exists("scripts", qaName), "Sprint J2 QA script must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const readinessContract = read("public", "nexus-user-profile-readiness-contract.js");
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "Sprint J2",
  "ac39793f45b4401c8d293ad8ee432573ae4b0d32",
  "standalone inert contract module and deterministic QA only",
  "Feature Flag Name",
  "NEXUS_USER_PROFILE_VISIBLE_ENABLED",
  "Default State",
  "Contract Module",
  "Important Boundary",
  "Prohibited Behavior",
  "Relationship To Sprint J1",
  "QA Expectations",
  "Sprint J3 - User Profile Flag Contract Harness"
], "J2 feature flag doc");

assert(readinessContract.includes("user_profile.readiness.phase_62"), "J2 must build on the Phase 62 User Profile readiness contract.");
assert(readinessContract.includes("profileBackendEnabled: false"), "Phase 62 profile backend default must remain false.");
assert(readinessContract.includes("profileMutationEnabled: false"), "Phase 62 profile mutation default must remain false.");
assert(readinessContract.includes("profileSharingEnabled: false"), "Phase 62 profile sharing default must remain false.");
assert(readinessContract.includes("automaticPersonalizationEnabled: false"), "Phase 62 automatic personalization default must remain false.");
assert(readinessContract.includes("executionAllowed: false"), "Phase 62 execution default must remain false.");

const protectedFields = [
  "profileContextAllowed",
  "profileBackendAllowed",
  "accountCreationAllowed",
  "profileMutationAllowed",
  "profileSharingAllowed",
  "profileSyncAllowed",
  "identityProofingAllowed",
  "roleElevationAllowed",
  "providerProfileHandoffAllowed",
  "sensitiveProfileStorageAllowed",
  "automaticPersonalizationAllowed",
  "standardUserProfileMutationAllowed",
  "permissionPromptAllowed",
  "backendWriteAllowed",
  "storageWriteAllowed",
  "networkAllowed",
  "auditWriteAllowed",
  "executionAuthority"
];

assert.equal(USER_PROFILE_FEATURE_FLAG_NAME, "NEXUS_USER_PROFILE_VISIBLE_ENABLED");
assert.equal(DEFAULT_USER_PROFILE_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_USER_PROFILE_FEATURE_FLAG_STATE.visibleUiAllowed, false);
assert.equal(DEFAULT_USER_PROFILE_FEATURE_FLAG_STATE.noExecution, true);
for (const field of protectedFields) {
  assert.equal(DEFAULT_USER_PROFILE_FEATURE_FLAG_STATE[field], false, `default ${field} must be false.`);
  assert(doc.includes(`${field}: false`), `J2 doc must document ${field}: false.`);
}

const defaultState = normalizeUserProfileFeatureFlagState();
assert.equal(defaultState.enabled, false);
assert.equal(defaultState.visibleUiAllowed, false);
assert.equal(defaultState.noExecution, true);
assert.equal(isUserProfileVisibleFeatureEnabled(defaultState), false);

const visibleOnly = normalizeUserProfileFeatureFlagState({
  enabled: true,
  visibleUiAllowed: true
});
assert.equal(visibleOnly.enabled, true);
assert.equal(visibleOnly.visibleUiAllowed, true);
assert.equal(isUserProfileVisibleFeatureEnabled(visibleOnly), true);
for (const field of protectedFields) {
  assert.equal(visibleOnly[field], false, `visible-only state must keep ${field}=false.`);
}
assert.equal(visibleOnly.noExecution, true);

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
  assert.equal(unsafeAttempt[field], false, `unsafe attempt must keep ${field}=false.`);
}
assert.equal(unsafeAttempt.noExecution, true);

const runtime = [index, app, server].join("\n");
for (const term of [
  moduleName,
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
  "elevateProfileRole",
  "authorizeProfilePayment"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate User Profile feature flag artifact: ${term}`);
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
  assert(!moduleSource.includes(term), `J2 feature flag module must not include runtime API: ${term}`);
}

const alias = "qa:nexus-sprint-j2-user-profile-feature-flag-contract";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint J2 QA.");

console.log("[nexus-sprint-j2-user-profile-feature-flag-contract-qa] passed");
