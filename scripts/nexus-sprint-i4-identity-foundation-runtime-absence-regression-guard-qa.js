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

const docName = "NEXUS_SPRINT_I4_IDENTITY_FOUNDATION_RUNTIME_ABSENCE_REGRESSION_GUARD.md";
const qaName = "nexus-sprint-i4-identity-foundation-runtime-absence-regression-guard-qa.js";

assert(exists("docs", docName), "Sprint I4 runtime absence guard doc must exist.");
assert(exists("scripts", qaName), "Sprint I4 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const featureFlagModule = read("public", "nexus-identity-foundation-feature-flag.js");
const harnessSource = read("scripts", "nexus-sprint-i3-identity-foundation-flag-contract-harness.js");
const fixtures = loadIdentityFoundationFlagFixtures();

assertIncludes(doc, [
  "Sprint I4",
  "a14019b13f0cea00599ee0adf66573c9e1dd5451",
  "documentation and QA only",
  "Runtime Absence Requirements",
  "Blocked Runtime Behavior",
  "Required Contract Invariants",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "Sprint I5 - Identity Foundation Lane Closeout"
], "I4 runtime absence doc");

assertIncludes(doc, [
  "public/nexus-identity-foundation-contract.js",
  "public/nexus-identity-foundation-feature-flag.js",
  "scripts/nexus-sprint-i3-identity-foundation-flag-contract-harness.js",
  "fixtures/nexus/identity-foundation-feature-flags.json",
  "It intentionally does not ban generic words such as identity, account, profile, or login"
], "I4 protected artifact list");

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
], "I4 blocked runtime behavior");

for (const prior of [
  ["docs", "NEXUS_SPRINT_I1_IDENTITY_FOUNDATION_RUNTIME_ACTIVATION_READINESS_GATE.md"],
  ["docs", "NEXUS_SPRINT_I2_IDENTITY_FOUNDATION_FEATURE_FLAG_CONTRACT.md"],
  ["docs", "NEXUS_SPRINT_I3_IDENTITY_FOUNDATION_FLAG_CONTRACT_HARNESS.md"],
  ["docs", "NEXUS_IDENTITY_FOUNDATION_CONTRACT_PHASE_46.md"],
  ["public", "nexus-identity-foundation-contract.js"],
  ["public", "nexus-identity-foundation-feature-flag.js"],
  ["fixtures", "nexus", "identity-foundation-feature-flags.json"],
  ["scripts", "nexus-sprint-i3-identity-foundation-flag-contract-harness.js"]
]) {
  assert(exists(...prior), `Sprint I4 requires prior artifact: ${prior.join("/")}`);
}

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
  "dispatchIdentityAction"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Identity Foundation artifact: ${term}`);
}

assert.equal(DEFAULT_IDENTITY_FOUNDATION_FEATURE_FLAG_STATE.enabled, false);
assert.equal(DEFAULT_IDENTITY_FOUNDATION_FEATURE_FLAG_STATE.visibleUiAllowed, false);
for (const field of protectedFields) {
  assert.equal(DEFAULT_IDENTITY_FOUNDATION_FEATURE_FLAG_STATE[field], false, `I2 default ${field} must remain false.`);
}
assert.equal(DEFAULT_IDENTITY_FOUNDATION_FEATURE_FLAG_STATE.noExecution, true);

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
  assert.equal(unsafeAttempt[field], false, `Unsafe attempt must normalize ${field} back to false.`);
}
assert.equal(unsafeAttempt.noExecution, true);

const fixtureResult = validateIdentityFoundationFlagFixtures(fixtures);
assert.equal(fixtureResult.ok, true, "I3 fixtures must remain valid.");
assert.equal(fixtureResult.count, 4, "I3 fixtures must remain complete.");

for (const source of [featureFlagModule, harnessSource]) {
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
    assert(!source.includes(term), `I2/I3 artifact must not include runtime API: ${term}`);
  }
}

const alias = "qa:nexus-sprint-i4-identity-foundation-runtime-absence-regression-guard";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint I4 QA.");

console.log("[nexus-sprint-i4-identity-foundation-runtime-absence-regression-guard-qa] passed");
