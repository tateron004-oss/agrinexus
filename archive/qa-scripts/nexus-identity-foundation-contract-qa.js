const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  doc: path.join(root, "docs", "NEXUS_IDENTITY_FOUNDATION_CONTRACT_PHASE_46.md"),
  roadmap: path.join(root, "docs", "NEXUS_100_FULL_MULTILINGUAL_ACCESS_PLATFORM_ROADMAP.md"),
  module: path.join(root, "public", "nexus-identity-foundation-contract.js"),
  index: path.join(root, "public", "index.html"),
  app: path.join(root, "public", "app.js"),
  server: path.join(root, "server.js"),
  authLoginGateQa: path.join(root, "scripts", "auth-login-gate-qa.js"),
  intentClassifierQa: path.join(root, "scripts", "nexus-intent-classifier-qa.js"),
  policyEngineQa: path.join(root, "scripts", "nexus-policy-engine-qa.js"),
  toolRegistry: path.join(root, "public", "nexus-tool-registry.js"),
  packageJson: path.join(root, "package.json"),
  qaSuite: path.join(root, "scripts", "qa-suite.js")
};

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function assert(condition, message) {
  if (!condition) {
    console.error(`[nexus-identity-foundation-contract-qa] ${message}`);
    process.exit(1);
  }
}

Object.values(paths).forEach(filePath => {
  assert(fs.existsSync(filePath), `${path.relative(root, filePath)} must exist.`);
});

const doc = read(paths.doc);
const roadmap = read(paths.roadmap);
const moduleSource = read(paths.module);
const contract = require(paths.module);
const index = read(paths.index);
const app = read(paths.app);
const server = read(paths.server);
const authLoginGateQa = read(paths.authLoginGateQa);
const intentClassifierQa = read(paths.intentClassifierQa);
const policyEngineQa = read(paths.policyEngineQa);
const toolRegistry = read(paths.toolRegistry);
const packageData = JSON.parse(read(paths.packageJson));
const qaSuite = read(paths.qaSuite);

const statuses = [
  "not_configured",
  "identity_model_review_required",
  "identity_provider_optional",
  "consent_policy_required",
  "audit_policy_required",
  "role_policy_required",
  "credential_review_required",
  "document_handling_review_required",
  "sandbox_testing_required",
  "approved_not_live",
  "rejected_or_blocked",
  "inactive"
];
const categories = [
  "account_identity_boundary",
  "profile_identity_boundary",
  "role_authorization_boundary",
  "identity_document_boundary",
  "provider_identity_boundary",
  "patient_identity_boundary",
  "worker_identity_boundary",
  "marketplace_party_identity_boundary",
  "payment_identity_boundary",
  "emergency_contact_identity_boundary",
  "restricted_identity_boundary"
];
const fields = [
  "identityModelId",
  "identityProviderName",
  "sourceOwner",
  "identityStatus",
  "identityCategories",
  "supportedRegions",
  "supportedLanguages",
  "identityProviderStatus",
  "consentPolicyStatus",
  "auditPolicyStatus",
  "rolePolicyStatus",
  "credentialReviewStatus",
  "documentHandlingReviewStatus",
  "sandboxTestingStatus",
  "freshnessModel",
  "regionalScope",
  "languageScope",
  "allowedResponseStates",
  "identityConsentGate",
  "roleAuthorizationGate",
  "auditRequirements",
  "auditEvent",
  "identityContextAllowed",
  "identityVerificationEnabled",
  "identityDocumentSharingEnabled",
  "profileMutationEnabled",
  "accountCreationEnabled",
  "roleElevationEnabled",
  "providerAuthorizationEnabled",
  "paymentAuthorizationEnabled",
  "liveActionEnabled",
  "noExecution"
];
const noExecutionFlags = [
  "noExecution",
  "identityContextAllowed",
  "accountContextAllowed",
  "roleContextAllowed",
  "identityProviderConnectionEnabled",
  "identityVerificationEnabled",
  "identityDocumentCollectionEnabled",
  "identityDocumentSharingEnabled",
  "profileMutationEnabled",
  "accountCreationEnabled",
  "accountDeletionEnabled",
  "accountLoginEnabled",
  "passwordResetEnabled",
  "roleElevationEnabled",
  "providerAuthorizationEnabled",
  "patientAuthorizationEnabled",
  "paymentAuthorizationEnabled",
  "emergencyContactSharingEnabled",
  "externalNavigationEnabled",
  "credentialUseEnabled",
  "liveActionEnabled",
  "identityVerified",
  "identityDocumentCollected",
  "identityDocumentShared",
  "profileMutated",
  "accountCreated",
  "accountDeleted",
  "accountLoggedIn",
  "passwordResetStarted",
  "roleElevated",
  "providerAuthorized",
  "patientAuthorized",
  "paymentAuthorized",
  "emergencyContactShared",
  "externalActionExecuted"
];

assert(roadmap.includes("| Phase 46 | Identity foundation |"), "Nexus 100 roadmap must include Phase 46 identity foundation row.");
assert(intentClassifierQa.includes('["Log into my account", "account", "request_confirmation"]'), "intent classifier QA must keep account login high-risk/gated.");
assert(intentClassifierQa.includes('["Verify my identity", "account", "request_confirmation"]'), "intent classifier QA must keep identity verification high-risk/gated.");
assert(policyEngineQa.includes('["Log into my account", "require_permission"]'), "policy engine QA must require permission for account login prompts.");
assert(policyEngineQa.includes('["Verify my identity", "require_permission"]'), "policy engine QA must require permission for identity verification prompts.");
assert(authLoginGateQa.includes("frontend requires email and password") && authLoginGateQa.includes("server rejects blank credentials"), "auth login gate QA must continue protecting current login boundaries.");
assert(toolRegistry.includes('"account.profile_change"') && toolRegistry.includes("No profile/account mutation is authorized by registry metadata."), "tool registry must keep account/profile changes non-authoritative.");

statuses.forEach(status => {
  assert(contract.IDENTITY_FOUNDATION_STATUSES.includes(status), `contract must include status ${status}`);
  assert(doc.includes(status), `doc must include status ${status}`);
});
categories.forEach(category => {
  assert(contract.IDENTITY_CONTEXT_CATEGORIES.includes(category), `contract must include identity category ${category}`);
  assert(doc.includes(category), `doc must include identity category ${category}`);
});
fields.forEach(field => {
  assert(contract.IDENTITY_FOUNDATION_FIELDS.includes(field), `contract must list field ${field}`);
  assert(Object.prototype.hasOwnProperty.call(contract.IDENTITY_FOUNDATION_CONTRACT, field), `identity foundation contract must include ${field}`);
  assert(doc.includes(field), `doc must document ${field}`);
});
contract.IDENTITY_CONSENT_GATE_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.DEFAULT_IDENTITY_CONSENT_GATE, field), `identity consent gate must include ${field}`);
  assert(doc.includes(field), `doc must document identity consent gate field ${field}`);
});
contract.ROLE_AUTHORIZATION_GATE_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.DEFAULT_ROLE_AUTHORIZATION_GATE, field), `role authorization gate must include ${field}`);
  assert(doc.includes(field), `doc must document role authorization gate field ${field}`);
});
contract.IDENTITY_AUDIT_EVENT_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.IDENTITY_FOUNDATION_CONTRACT.auditEvent, field), `audit event must include ${field}`);
  assert(doc.includes(field), `doc must document audit field ${field}`);
});

[
  "allowsIdentityVerification",
  "allowsIdentityDocumentCollection",
  "allowsIdentityDocumentSharing",
  "allowsProfileMutation",
  "allowsAccountCreation",
  "allowsExternalNavigation",
  "allowsCredentialUse"
].forEach(field => {
  assert(contract.DEFAULT_IDENTITY_CONSENT_GATE[field] === false, `${field} must default false.`);
});
[
  "allowsRoleContext",
  "allowsRoleElevation",
  "allowsProviderAuthorization",
  "allowsPatientAuthorization",
  "allowsPaymentAuthorization",
  "allowsEmergencyContactSharing"
].forEach(field => {
  assert(contract.DEFAULT_ROLE_AUTHORIZATION_GATE[field] === false, `${field} must default false.`);
});
noExecutionFlags.forEach(flag => {
  assert(contract.NO_EXECUTION_DEFAULTS[flag] === (flag === "noExecution" ? true : false), `${flag} must default safely.`);
  assert(contract.IDENTITY_FOUNDATION_CONTRACT[flag] === contract.NO_EXECUTION_DEFAULTS[flag], `${flag} must match safe default.`);
});

const sample = contract.createIdentityFoundation({
  identityModelId: "sample-identity-model",
  identityStatus: "approved_not_live",
  identityCategories: ["account_identity_boundary", "payment_identity_boundary", "provider_identity_boundary", "unsafe"],
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
assert(Object.isFrozen(sample), "created identity foundation must be frozen.");
assert(sample.identityCategories.includes("account_identity_boundary"), "valid account identity category must be preserved.");
assert(sample.identityCategories.includes("payment_identity_boundary"), "valid payment identity category must be preserved.");
assert(sample.identityCategories.includes("provider_identity_boundary"), "valid provider identity category must be preserved.");
assert(!sample.identityCategories.includes("unsafe"), "invalid identity category must be filtered.");
assert(sample.identityConsentGate.allowsIdentityVerification === false, "identity verification must remain disabled.");
assert(sample.identityConsentGate.allowsIdentityDocumentCollection === false, "identity document collection must remain disabled.");
assert(sample.identityConsentGate.allowsIdentityDocumentSharing === false, "identity document sharing must remain disabled.");
assert(sample.identityConsentGate.allowsProfileMutation === false, "profile mutation must remain disabled.");
assert(sample.identityConsentGate.allowsAccountCreation === false, "account creation must remain disabled.");
assert(sample.identityConsentGate.allowsExternalNavigation === false, "external navigation must remain disabled.");
assert(sample.identityConsentGate.allowsCredentialUse === false, "credential use must remain disabled.");
assert(sample.roleAuthorizationGate.allowsRoleContext === false, "role context must remain disabled.");
assert(sample.roleAuthorizationGate.allowsRoleElevation === false, "role elevation must remain disabled.");
assert(sample.roleAuthorizationGate.allowsProviderAuthorization === false, "provider authorization must remain disabled.");
assert(sample.roleAuthorizationGate.allowsPatientAuthorization === false, "patient authorization must remain disabled.");
assert(sample.roleAuthorizationGate.allowsPaymentAuthorization === false, "payment authorization must remain disabled.");
assert(sample.roleAuthorizationGate.allowsEmergencyContactSharing === false, "emergency contact sharing must remain disabled.");
noExecutionFlags.forEach(flag => {
  assert(sample[flag] === contract.NO_EXECUTION_DEFAULTS[flag], `created identity foundation must force ${flag} safe default.`);
});

const invalid = contract.createIdentityFoundation({ identityStatus: "verified_now" });
assert(invalid.identityStatus === "not_configured", "invalid identity status must fall back to not_configured.");

[
  "fetch(",
  "XMLHttpRequest",
  "axios",
  "EventSource",
  "WebSocket",
  "localStorage",
  "sessionStorage",
  "navigator.credentials",
  "navigator.geolocation",
  "navigator.mediaDevices",
  "window.location",
  "document.location",
  "setInterval",
  "execute:",
  "handler:",
  "adapter:",
  "providerHandoff",
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
  "open("
].forEach(forbidden => {
  assert(!moduleSource.includes(forbidden), `identity foundation contract must not include runtime/execution behavior: ${forbidden}`);
});

[
  "nexus-identity-foundation-contract.js",
  "NexusIdentityFoundationContract",
  "createIdentityFoundation",
  "IDENTITY_FOUNDATION_CONTRACT"
].forEach(runtimeHook => {
  assert(!index.includes(runtimeHook), `index.html must not load ${runtimeHook}`);
  assert(!app.includes(runtimeHook), `app.js must not consume ${runtimeHook}`);
  assert(!server.includes(runtimeHook), `server.js must not consume ${runtimeHook}`);
});

assert(packageData.scripts["qa:nexus-identity-foundation-contract"] === "node scripts/nexus-identity-foundation-contract-qa.js", "package.json must expose qa:nexus-identity-foundation-contract");
assert(qaSuite.includes("scripts/nexus-identity-foundation-contract-qa.js"), "qa-suite.js must include identity foundation contract QA");

console.log("[nexus-identity-foundation-contract-qa] passed");
