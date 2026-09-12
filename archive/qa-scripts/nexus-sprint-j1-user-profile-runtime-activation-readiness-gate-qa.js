const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const profile = require("../public/nexus-user-profile-readiness-contract.js");

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

const docName = "NEXUS_SPRINT_J1_USER_PROFILE_RUNTIME_ACTIVATION_READINESS_GATE.md";
const qaName = "nexus-sprint-j1-user-profile-runtime-activation-readiness-gate-qa.js";

assert(exists("docs", docName), "Sprint J1 readiness gate doc must exist.");
assert(exists("scripts", qaName), "Sprint J1 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const profileModuleSource = read("public", "nexus-user-profile-readiness-contract.js");

assertIncludes(doc, [
  "Sprint J1",
  "43cb846ee7f782fa1d5358f6dbde0ef985533b44",
  "documentation and deterministic QA only",
  "Runtime Activation Preconditions",
  "Runtime Absence Requirements",
  "Blocked Runtime Behavior",
  "Standard User Boundary",
  "Required Contract Invariants",
  "Browser Validation Implication",
  "Rollback Strategy",
  "Sprint J2 - User Profile Feature Flag Contract"
], "J1 readiness gate doc");

assertIncludes(doc, [
  "explicit profile consent model",
  "visible profile purpose",
  "visible profile fields",
  "sensitive field exclusions",
  "profile source ownership model",
  "profile access scope model",
  "role authorization policy",
  "permission state display",
  "consent revocation path",
  "edit control",
  "delete control",
  "export control when applicable",
  "retention policy",
  "redaction policy",
  "audit event contract",
  "non-authoritative profile rule",
  "no profile based execution",
  "no silent profile sharing",
  "no hidden role elevation",
  "browser validation plan",
  "rollback plan",
  "deterministic QA coverage"
], "J1 activation preconditions");

assertIncludes(doc, [
  "visible profile center UI",
  "profile buttons",
  "profile forms",
  "event handlers",
  "confirmation bypasses",
  "profile creation",
  "profile mutation",
  "profile sharing",
  "profile sync",
  "sensitive profile storage",
  "automatic personalization without consent",
  "account creation",
  "role elevation",
  "provider profile handoff",
  "identity proofing",
  "health profile storage",
  "payment profile storage",
  "precise location profile storage",
  "marketplace buyer or seller profile sharing",
  "provider authorization",
  "payment authorization",
  "audit writes",
  "provider handoff",
  "native bridge dispatch",
  "calls",
  "messages",
  "payment execution",
  "marketplace transactions",
  "location sharing",
  "camera or microphone activation",
  "health, medical, pharmacy, prescription, or FHIR execution",
  "emergency dispatch",
  "fetch or network calls",
  "localStorage or sessionStorage writes",
  "backend writes",
  "execution authority"
], "J1 blocked runtime behavior");

for (const required of [
  ["docs", "NEXUS_SPRINT_I5_IDENTITY_FOUNDATION_LANE_CLOSEOUT.md"],
  ["docs", "NEXUS_USER_PROFILE_READINESS_CONTRACT_PHASE_62.md"],
  ["public", "nexus-user-profile-readiness-contract.js"],
  ["scripts", "nexus-user-profile-readiness-contract-qa.js"]
]) {
  assert(exists(...required), `Sprint J1 requires artifact: ${required.join("/")}`);
}

const runtime = [index, app, server].join("\n");
for (const term of [
  "nexus-user-profile-readiness-contract.js",
  "NexusUserProfileReadinessContract",
  "USER_PROFILE_READINESS_CONTRACT",
  "createUserProfileReadinessContract",
  "renderProfileCenter",
  "openProfileCenter",
  "createUserProfile(",
  "updateUserProfile(",
  "shareUserProfile(",
  "syncUserProfile(",
  "executeProfileAction"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate User Profile artifact: ${term}`);
}

for (const field of [
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
]) {
  assert.equal(profile.USER_PROFILE_NO_EXECUTION_DEFAULTS[field], false, `${field} must default false.`);
  assert.equal(profile.USER_PROFILE_READINESS_CONTRACT[field], false, `${field} must remain false on default contract.`);
  assert(doc.includes(`${field}: false`), `J1 doc must preserve ${field}: false invariant.`);
}

const unsafeAttempt = profile.createUserProfileReadinessContract({
  actionType: "share_profile",
  profileBackendEnabled: true,
  accountCreationEnabled: true,
  profileMutationEnabled: true,
  profileSharingEnabled: true,
  profileSyncEnabled: true,
  identityProofingEnabled: true,
  roleElevationEnabled: true,
  providerProfileHandoffEnabled: true,
  sensitiveProfileStorageEnabled: true,
  automaticPersonalizationEnabled: true,
  standardUserProfileMutationAllowed: true,
  executionAllowed: true,
  liveActionEnabled: true
});
assert.equal(unsafeAttempt.actionType, "share_profile", "recognized profile action type can be represented.");
assert.equal(unsafeAttempt.readinessStatus, "blocked", "profile readiness must remain blocked.");
for (const [field, value] of Object.entries(profile.USER_PROFILE_NO_EXECUTION_DEFAULTS)) {
  assert.equal(unsafeAttempt[field], value, `Unsafe profile attempt must normalize ${field} back to ${value}.`);
}

for (const term of [
  "fetch(",
  "XMLHttpRequest",
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
]) {
  assert(!profileModuleSource.includes(term), `Phase 62 profile contract must not include runtime API: ${term}`);
}

const alias = "qa:nexus-sprint-j1-user-profile-runtime-activation-readiness-gate";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint J1 QA.");

console.log("[nexus-sprint-j1-user-profile-runtime-activation-readiness-gate-qa] passed");
