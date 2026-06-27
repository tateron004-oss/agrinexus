const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const identity = require("../public/nexus-identity-foundation-contract.js");

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

const docName = "NEXUS_SPRINT_I1_IDENTITY_FOUNDATION_RUNTIME_ACTIVATION_READINESS_GATE.md";
const qaName = "nexus-sprint-i1-identity-foundation-runtime-activation-readiness-gate-qa.js";

assert(exists("docs", docName), "Sprint I1 readiness gate doc must exist.");
assert(exists("scripts", qaName), "Sprint I1 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const identityModuleSource = read("public", "nexus-identity-foundation-contract.js");
const intentQa = read("scripts", "nexus-intent-classifier-qa.js");
const policyQa = read("scripts", "nexus-policy-engine-qa.js");
const authQa = read("scripts", "auth-login-gate-qa.js");

assertIncludes(doc, [
  "Sprint I1",
  "6df633e43c969d9777669dfe611d661258dda87f",
  "documentation and deterministic QA only",
  "Activation Is Blocked Until",
  "Runtime Must Remain Disabled",
  "What I1 Does Not Enable",
  "Standard User Safety Posture",
  "Identity Is Not Authorization",
  "Browser Validation Implication",
  "Rollback Strategy",
  "Sprint I2 - Identity Foundation Feature Flag Contract"
], "I1 readiness gate doc");

assertIncludes(doc, [
  "product owner approval",
  "privacy and compliance review",
  "identity provider selection or explicit no-provider policy",
  "credential handling review",
  "identity document handling review",
  "purpose-specific identity language",
  "explicit user approval path",
  "cancellation path",
  "retention policy",
  "redaction policy",
  "consent policy",
  "audit persistence design",
  "role authorization policy",
  "account mutation policy",
  "provider authorization policy",
  "payment authorization policy",
  "emergency contact sharing policy",
  "browser validation plan",
  "rollback plan",
  "deterministic QA coverage"
], "I1 activation preconditions");

assertIncludes(doc, [
  "identityContextAllowed: false",
  "accountContextAllowed: false",
  "roleContextAllowed: false",
  "identityProviderConnectionEnabled: false",
  "identityVerificationEnabled: false",
  "identityDocumentCollectionEnabled: false",
  "identityDocumentSharingEnabled: false",
  "profileMutationEnabled: false",
  "accountCreationEnabled: false",
  "accountDeletionEnabled: false",
  "accountLoginEnabled: false",
  "passwordResetEnabled: false",
  "roleElevationEnabled: false",
  "providerAuthorizationEnabled: false",
  "patientAuthorizationEnabled: false",
  "paymentAuthorizationEnabled: false",
  "emergencyContactSharingEnabled: false",
  "externalNavigationEnabled: false",
  "credentialUseEnabled: false",
  "liveActionEnabled: false",
  "noExecution: true"
], "I1 disabled runtime defaults");

assertIncludes(doc, [
  "visible Identity Center UI",
  "identity buttons or forms",
  "identity verification",
  "identity document collection",
  "identity document sharing",
  "profile mutation",
  "account creation",
  "account deletion",
  "account login",
  "password reset",
  "role elevation",
  "provider authorization",
  "patient authorization",
  "payment authorization",
  "emergency contact sharing",
  "credential use",
  "consent persistence",
  "audit writes",
  "backend writes",
  "localStorage writes",
  "sessionStorage writes",
  "IndexedDB writes",
  "network calls",
  "provider handoff",
  "native bridge dispatch",
  "calls",
  "messages",
  "payments",
  "marketplace transactions",
  "location sharing",
  "camera or microphone activation",
  "health, medical, pharmacy, prescription, or FHIR execution",
  "appointment scheduling",
  "transportation dispatch",
  "emergency dispatch",
  "external navigation",
  "execution authority"
], "I1 blocked runtime behavior");

for (const prior of [
  ["docs", "NEXUS_IDENTITY_FOUNDATION_CONTRACT_PHASE_46.md"],
  ["docs", "NEXUS_CONSENT_CENTER_CONTRACT_PHASE_47.md"],
  ["docs", "NEXUS_AUDIT_LOG_RUNTIME_CONTRACT_PHASE_48.md"],
  ["docs", "NEXUS_APPROVAL_CENTER_CONTRACT_PHASE_49.md"],
  ["public", "nexus-identity-foundation-contract.js"],
  ["scripts", "nexus-identity-foundation-contract-qa.js"]
]) {
  assert(exists(...prior), `Sprint I1 requires prior artifact: ${prior.join("/")}`);
}

assert(intentQa.includes('["Log into my account", "account", "request_confirmation"]'), "account login must remain high-risk/gated in intent QA.");
assert(intentQa.includes('["Verify my identity", "account", "request_confirmation"]'), "identity verification must remain high-risk/gated in intent QA.");
assert(policyQa.includes('["Log into my account", "require_permission"]'), "account login must require permission in policy QA.");
assert(policyQa.includes('["Verify my identity", "require_permission"]'), "identity verification must require permission in policy QA.");
assert(authQa.includes("frontend requires email and password"), "existing auth login gate must remain covered.");
assert(authQa.includes("server rejects blank credentials"), "server auth rejection must remain covered.");

for (const [key, value] of Object.entries(identity.NO_EXECUTION_DEFAULTS)) {
  assert.equal(identity.IDENTITY_FOUNDATION_CONTRACT[key], value, `identity contract must preserve ${key}`);
}
assert.equal(identity.IDENTITY_FOUNDATION_CONTRACT.noExecution, true);

const unsafeAttempt = identity.createIdentityFoundation({
  identityStatus: "approved_not_live",
  identityContextAllowed: true,
  accountContextAllowed: true,
  roleContextAllowed: true,
  identityProviderConnectionEnabled: true,
  identityVerificationEnabled: true,
  identityDocumentCollectionEnabled: true,
  identityDocumentSharingEnabled: true,
  profileMutationEnabled: true,
  accountCreationEnabled: true,
  accountDeletionEnabled: true,
  accountLoginEnabled: true,
  passwordResetEnabled: true,
  roleElevationEnabled: true,
  providerAuthorizationEnabled: true,
  patientAuthorizationEnabled: true,
  paymentAuthorizationEnabled: true,
  emergencyContactSharingEnabled: true,
  externalNavigationEnabled: true,
  credentialUseEnabled: true,
  liveActionEnabled: true,
  noExecution: false,
  identityConsentGate: {
    allowsIdentityVerification: true,
    allowsIdentityDocumentCollection: true,
    allowsIdentityDocumentSharing: true,
    allowsProfileMutation: true,
    allowsAccountCreation: true,
    allowsExternalNavigation: true,
    allowsCredentialUse: true
  },
  roleAuthorizationGate: {
    allowsRoleContext: true,
    allowsRoleElevation: true,
    allowsProviderAuthorization: true,
    allowsPatientAuthorization: true,
    allowsPaymentAuthorization: true,
    allowsEmergencyContactSharing: true
  }
});

for (const [key, value] of Object.entries(identity.NO_EXECUTION_DEFAULTS)) {
  assert.equal(unsafeAttempt[key], value, `unsafe identity attempt must normalize ${key}`);
}
assert.equal(unsafeAttempt.identityConsentGate.allowsIdentityVerification, false);
assert.equal(unsafeAttempt.identityConsentGate.allowsIdentityDocumentCollection, false);
assert.equal(unsafeAttempt.identityConsentGate.allowsIdentityDocumentSharing, false);
assert.equal(unsafeAttempt.identityConsentGate.allowsProfileMutation, false);
assert.equal(unsafeAttempt.identityConsentGate.allowsAccountCreation, false);
assert.equal(unsafeAttempt.identityConsentGate.allowsExternalNavigation, false);
assert.equal(unsafeAttempt.identityConsentGate.allowsCredentialUse, false);
assert.equal(unsafeAttempt.roleAuthorizationGate.allowsRoleContext, false);
assert.equal(unsafeAttempt.roleAuthorizationGate.allowsRoleElevation, false);
assert.equal(unsafeAttempt.roleAuthorizationGate.allowsProviderAuthorization, false);
assert.equal(unsafeAttempt.roleAuthorizationGate.allowsPatientAuthorization, false);
assert.equal(unsafeAttempt.roleAuthorizationGate.allowsPaymentAuthorization, false);
assert.equal(unsafeAttempt.roleAuthorizationGate.allowsEmergencyContactSharing, false);

const runtime = [index, app, server].join("\n");
for (const term of [
  "nexus-identity-foundation-contract.js",
  "NexusIdentityFoundationContract",
  "createIdentityFoundation",
  "IDENTITY_FOUNDATION_CONTRACT",
  "verifyIdentity",
  "collectIdentityDocument",
  "shareIdentityDocument",
  "mutateProfile",
  "createAccount",
  "deleteAccount",
  "loginAccount",
  "resetPassword",
  "elevateRole",
  "authorizePayment",
  "nexus-sprint-i1-identity-foundation-runtime-activation-readiness-gate"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate Identity Foundation artifact: ${term}`);
}

for (const term of [
  "fetch(",
  "XMLHttpRequest",
  "localStorage",
  "sessionStorage",
  "navigator.credentials",
  "navigator.geolocation",
  "navigator.mediaDevices",
  "window.location",
  "document.location",
  "open(",
  "setItem",
  "sendBeacon",
  "window.nativeBridge",
  "nativeBridge.",
  "ACTION_CALL",
  "getUserMedia",
  "openWorkflow(",
  "goSection("
]) {
  assert(!identityModuleSource.includes(term), `Identity Foundation contract must not include runtime API: ${term}`);
}

const alias = "qa:nexus-sprint-i1-identity-foundation-runtime-activation-readiness-gate";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint I1 QA.");

console.log("[nexus-sprint-i1-identity-foundation-runtime-activation-readiness-gate-qa] passed");
