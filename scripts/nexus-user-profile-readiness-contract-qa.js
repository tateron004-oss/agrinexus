const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  doc: path.join(root, "docs", "NEXUS_USER_PROFILE_READINESS_CONTRACT_PHASE_62.md"),
  contract: path.join(root, "public", "nexus-user-profile-readiness-contract.js"),
  index: path.join(root, "public", "index.html"),
  app: path.join(root, "public", "app.js"),
  server: path.join(root, "server.js"),
  packageJson: path.join(root, "package.json"),
  qaSuite: path.join(root, "scripts", "qa-suite.js")
};

function read(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function assert(condition, message) {
  if (!condition) {
    console.error(`[nexus-user-profile-readiness-contract-qa] ${message}`);
    process.exit(1);
  }
}

Object.values(paths).forEach(filePath => {
  assert(fs.existsSync(filePath), `${path.relative(root, filePath)} must exist.`);
});

const doc = read(paths.doc);
const contractSource = read(paths.contract);
const contract = require(paths.contract);
const index = read(paths.index);
const app = read(paths.app);
const server = read(paths.server);
const packageData = JSON.parse(read(paths.packageJson));
const qaSuite = read(paths.qaSuite);

assert(doc.includes("Phase: 62"), "doc must identify Phase 62.");
assert(doc.includes("inert readiness contract"), "doc must state this phase is inert.");
assert(doc.includes("No profile has been created or changed by this contract."), "doc must include safe no-profile-change copy.");
assert(doc.includes("Profile Access Boundary"), "doc must define profile access boundary.");

[
  "live profile backend behavior",
  "account creation",
  "profile mutation",
  "profile sharing",
  "profile sync",
  "provider profile handoff",
  "identity document handling",
  "role or permission elevation",
  "health profile storage",
  "payment profile storage",
  "precise location profile storage",
  "marketplace buyer or seller profile sharing",
  "automatic personalization without consent",
  "Standard User runtime profile changes",
  "storage or network side effects",
  "backend behavior changes"
].forEach(boundary => {
  assert(doc.includes(boundary), `doc must document inactive boundary ${boundary}.`);
});

[
  "explicitProfileConsent",
  "visibleProfilePurpose",
  "visibleProfileFields",
  "sensitiveFieldExclusions",
  "profileSource",
  "profileOwner",
  "profileAccessScope",
  "roleAuthorization",
  "permissionState",
  "consentRevocationPath",
  "editControl",
  "deleteControl",
  "exportControlWhenApplicable",
  "retentionPolicy",
  "redactionPolicy",
  "auditEvent",
  "nonAuthoritativeProfileRule",
  "noProfileBasedExecution",
  "noSilentProfileSharing",
  "noHiddenRoleElevation"
].forEach(precondition => {
  assert(contract.USER_PROFILE_REQUIRED_PRECONDITIONS.includes(precondition), `contract must include precondition ${precondition}.`);
  assert(doc.includes(precondition), `doc must include precondition ${precondition}.`);
});

[
  "identity",
  "account_profile",
  "role_authorization",
  "healthcare",
  "medical_records",
  "pharmacy",
  "payments",
  "location",
  "communications",
  "provider_contact",
  "marketplace_transactions",
  "emergency",
  "minors_family_support"
].forEach(domain => {
  assert(contract.USER_PROFILE_RESTRICTED_DOMAINS.includes(domain), `contract must include restricted domain ${domain}.`);
  assert(doc.includes(domain), `doc must include restricted domain ${domain}.`);
});

const defaults = contract.USER_PROFILE_NO_EXECUTION_DEFAULTS;
[
  "profileBackendEnabled",
  "accountCreationEnabled",
  "profileMutationEnabled",
  "profileSharingEnabled",
  "profileSyncEnabled",
  "identityProofingEnabled",
  "roleElevationEnabled",
  "providerProfileHandoffEnabled",
  "sensitiveProfileStorageEnabled",
  "automaticPersonalizationEnabled",
  "standardUserProfileMutationAllowed",
  "executionAllowed",
  "liveActionEnabled"
].forEach(field => {
  assert(defaults[field] === false, `${field} must default false.`);
  assert(contract.USER_PROFILE_READINESS_CONTRACT[field] === false, `${field} must be false on the default contract.`);
});

const sample = contract.createUserProfileReadinessContract({
  actionType: "update_profile",
  profileBackendEnabled: true,
  profileMutationEnabled: true,
  roleElevationEnabled: true,
  executionAllowed: true
});

assert(sample.actionType === "update_profile", "recognized action type may be represented.");
assert(sample.phase === "62", "sample phase must remain 62.");
assert(sample.readinessStatus === "blocked", "sample readiness remains blocked.");
assert(sample.riskTier === "high", "sample risk tier remains high.");
assert(sample.profileBackendEnabled === false, "factory must force profile backend disabled.");
assert(sample.profileMutationEnabled === false, "factory must force profile mutation disabled.");
assert(sample.roleElevationEnabled === false, "factory must force role elevation disabled.");
assert(sample.executionAllowed === false, "factory must force execution disabled.");

[
  "fetch(",
  "XMLHttpRequest",
  "axios",
  "EventSource",
  "WebSocket",
  "localStorage",
  "sessionStorage",
  "indexedDB",
  "window.location",
  "document.location",
  "addEventListener",
  "onclick",
  "setInterval",
  "setTimeout",
  "createProfile(",
  "updateProfile(",
  "shareProfile(",
  "elevateRole("
].forEach(forbidden => {
  assert(!contractSource.includes(forbidden), `contract module must not include runtime behavior: ${forbidden}`);
});

[
  "nexus-user-profile-readiness-contract.js",
  "NexusUserProfileReadinessContract",
  "userProfileReadiness",
  "USER_PROFILE_READINESS_CONTRACT"
].forEach(runtimeHook => {
  assert(!index.includes(runtimeHook), `index.html must not load ${runtimeHook}.`);
  assert(!app.includes(runtimeHook), `app.js must not consume ${runtimeHook}.`);
  assert(!server.includes(runtimeHook), `server.js must not consume ${runtimeHook}.`);
});

assert(packageData.scripts["qa:nexus-user-profile-readiness-contract"] === "node scripts/nexus-user-profile-readiness-contract-qa.js", "package.json must expose qa:nexus-user-profile-readiness-contract.");
assert(qaSuite.includes("scripts/nexus-user-profile-readiness-contract-qa.js"), "qa-suite.js must include user profile readiness QA.");

console.log("[nexus-user-profile-readiness-contract-qa] passed");
