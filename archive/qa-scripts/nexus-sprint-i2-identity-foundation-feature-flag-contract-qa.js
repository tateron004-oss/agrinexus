const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  IDENTITY_FOUNDATION_FEATURE_FLAG_NAME,
  DEFAULT_IDENTITY_FOUNDATION_FEATURE_FLAG_STATE,
  normalizeIdentityFoundationFeatureFlagState,
  isIdentityFoundationVisibleFeatureEnabled
} = require("../public/nexus-identity-foundation-feature-flag.js");

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

const docName = "NEXUS_SPRINT_I2_IDENTITY_FOUNDATION_FEATURE_FLAG_CONTRACT.md";
const moduleName = "nexus-identity-foundation-feature-flag.js";
const qaName = "nexus-sprint-i2-identity-foundation-feature-flag-contract-qa.js";

assert(exists("docs", docName), "Sprint I2 feature flag contract doc must exist.");
assert(exists("public", moduleName), "Sprint I2 feature flag module must exist.");
assert(exists("scripts", qaName), "Sprint I2 QA script must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "Sprint I2",
  "d8b27643fec16870c0b7b4dc8862dfe636970f57",
  "standalone inert contract module and deterministic QA only",
  "Feature Flag Name",
  "NEXUS_IDENTITY_FOUNDATION_VISIBLE_ENABLED",
  "Default State",
  "Contract Module",
  "Important Boundary",
  "Prohibited Behavior",
  "Relationship To Sprint I1",
  "QA Expectations",
  "Sprint I3 - Identity Foundation Flag Contract Harness"
], "I2 feature flag doc");

const protectedFields = [
  "identityContextAllowed",
  "accountContextAllowed",
  "roleContextAllowed",
  "identityVerificationAllowed",
  "identityDocumentCollectionAllowed",
  "identityDocumentSharingAllowed",
  "profileMutationAllowed",
  "accountMutationAllowed",
  "accountLoginAllowed",
  "passwordResetAllowed",
  "roleElevationAllowed",
  "credentialUseAllowed",
  "providerAuthorizationAllowed",
  "patientAuthorizationAllowed",
  "paymentAuthorizationAllowed",
  "emergencyContactSharingAllowed",
  "permissionPromptAllowed",
  "backendWriteAllowed",
  "storageWriteAllowed",
  "networkAllowed",
  "executionAuthority"
];

assert.equal(IDENTITY_FOUNDATION_FEATURE_FLAG_NAME, "NEXUS_IDENTITY_FOUNDATION_VISIBLE_ENABLED");
assert.equal(DEFAULT_IDENTITY_FOUNDATION_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_IDENTITY_FOUNDATION_FEATURE_FLAG_STATE.visibleUiAllowed, false);
assert.equal(DEFAULT_IDENTITY_FOUNDATION_FEATURE_FLAG_STATE.noExecution, true);
for (const field of protectedFields) {
  assert.equal(DEFAULT_IDENTITY_FOUNDATION_FEATURE_FLAG_STATE[field], false, `default ${field} must be false.`);
  assert(doc.includes(`${field}: false`), `I2 doc must document ${field}: false.`);
}

const defaultState = normalizeIdentityFoundationFeatureFlagState();
assert.equal(defaultState.enabled, false);
assert.equal(defaultState.visibleUiAllowed, false);
assert.equal(defaultState.noExecution, true);
assert.equal(isIdentityFoundationVisibleFeatureEnabled(defaultState), false);

const visibleOnly = normalizeIdentityFoundationFeatureFlagState({
  enabled: true,
  visibleUiAllowed: true
});
assert.equal(visibleOnly.enabled, true);
assert.equal(visibleOnly.visibleUiAllowed, true);
assert.equal(isIdentityFoundationVisibleFeatureEnabled(visibleOnly), true);
for (const field of protectedFields) {
  assert.equal(visibleOnly[field], false, `visible-only state must keep ${field}=false.`);
}
assert.equal(visibleOnly.noExecution, true);

const unsafeAttempt = normalizeIdentityFoundationFeatureFlagState({
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
assert.equal(unsafeAttempt.visibleUiAllowed, true);
for (const field of protectedFields) {
  assert.equal(unsafeAttempt[field], false, `unsafe attempt must keep ${field}=false.`);
}
assert.equal(unsafeAttempt.noExecution, true);

const runtime = [index, app, server].join("\n");
for (const term of [
  moduleName,
  "NEXUS_IDENTITY_FOUNDATION_VISIBLE_ENABLED",
  "NexusIdentityFoundationFeatureFlagContract",
  "normalizeIdentityFoundationFeatureFlagState",
  "isIdentityFoundationVisibleFeatureEnabled",
  "renderIdentityCenter",
  "openIdentityCenter",
  "verifyIdentity",
  "collectIdentityDocument",
  "shareIdentityDocument",
  "mutateProfile",
  "createAccount",
  "deleteAccount",
  "loginAccount",
  "resetPassword",
  "elevateRole",
  "authorizePayment"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Identity Foundation feature flag artifact: ${term}`);
}

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
  assert(!moduleSource.includes(term), `I2 feature flag module must not include runtime API: ${term}`);
}

const alias = "qa:nexus-sprint-i2-identity-foundation-feature-flag-contract";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint I2 QA.");

console.log("[nexus-sprint-i2-identity-foundation-feature-flag-contract-qa] passed");
