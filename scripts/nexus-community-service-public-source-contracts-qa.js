const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  doc: path.join(root, "docs", "NEXUS_COMMUNITY_SERVICE_PUBLIC_SOURCE_CONTRACTS_PHASE_23.md"),
  roadmap: path.join(root, "docs", "NEXUS_100_FULL_MULTILINGUAL_ACCESS_PLATFORM_ROADMAP.md"),
  baseline: path.join(root, "public", "nexus-public-data-connector-baseline.js"),
  module: path.join(root, "public", "nexus-community-service-public-source-contracts.js"),
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
    console.error(`[nexus-community-service-public-source-contracts-qa] ${message}`);
    process.exit(1);
  }
}

Object.values(paths).forEach(filePath => {
  assert(fs.existsSync(filePath), `${path.relative(root, filePath)} must exist.`);
});

const doc = read(paths.doc);
const roadmap = read(paths.roadmap);
const baseline = require(paths.baseline).getPublicDataConnectorBaseline();
const moduleSource = read(paths.module);
const contracts = require(paths.module).getCommunityServicePublicSourceContracts();
const index = read(paths.index);
const app = read(paths.app);
const server = read(paths.server);
const packageData = JSON.parse(read(paths.packageJson));
const qaSuite = read(paths.qaSuite);

const requiredSourceIds = [
  "community.ngo.directory",
  "community.government.services",
  "community.food_shelter.household",
  "community.family.child_support",
  "community.disability.accessibility",
  "community.legal.civil_support",
  "community.digital_access",
  "community.language.translation"
];

const requiredFields = [
  "sourceId",
  "domain",
  "displayName",
  "sourceOwnerType",
  "communitySourceCategory",
  "supportedCommunityQuestions",
  "expectedDataFields",
  "verificationRequirements",
  "freshnessRequirements",
  "eligibilityDisclosureRequirements",
  "privacyRequirements",
  "languageLocalizationRequirements",
  "allowedResponseStates",
  "forbiddenClaims",
  "permissionRequirements",
  "auditRequirements",
  "futureRoadmapPhase"
];

const disabledFlags = [
  "fetchEnabled",
  "referralSubmissionEnabled",
  "agencyContactEnabled",
  "caseworkerContactEnabled",
  "eligibilityApprovalEnabled",
  "accountCreationEnabled",
  "applicationSubmissionEnabled",
  "appointmentSchedulingEnabled",
  "profileSharingEnabled",
  "locationSharingEnabled",
  "paymentEnabled",
  "emergencyDispatchEnabled",
  "executionEnabled"
];

assert(roadmap.includes("| Phase 23 | Community-service public sources |"), "Nexus 100 roadmap must include Phase 23 community-service public sources.");
assert(baseline.some(item => item.connectorId === "public.community.resources"), "Phase 19 baseline must include public community resources connector.");
assert(Array.isArray(contracts), "community-service contracts must export an array.");
assert(contracts.length === requiredSourceIds.length, `community-service contracts must include exactly ${requiredSourceIds.length} entries.`);

requiredSourceIds.forEach(sourceId => {
  const contract = contracts.find(item => item.sourceId === sourceId);
  assert(contract, `contracts must include ${sourceId}`);
  requiredFields.forEach(field => {
    assert(Object.prototype.hasOwnProperty.call(contract, field), `${sourceId} must include ${field}`);
  });
  disabledFlags.forEach(flag => {
    assert(contract[flag] === false, `${sourceId} must keep ${flag} false`);
  });
  assert(contract.domain === "community resources", `${sourceId} must stay in community resources domain.`);
  assert(contract.allowedResponseStates.includes("source_backed_guidance"), `${sourceId} must allow source-backed guidance.`);
  assert(contract.allowedResponseStates.includes("provider_directory_result"), `${sourceId} must allow directory-style result display.`);
  assert(contract.allowedResponseStates.includes("prepared_action_preview"), `${sourceId} must allow non-executing prepared preview.`);
  assert(contract.allowedResponseStates.includes("unavailable_source_fallback"), `${sourceId} must include unavailable fallback.`);
  assert(contract.eligibilityDisclosureRequirements.some(rule => /do not guarantee/i.test(rule)), `${sourceId} must forbid guaranteed eligibility.`);
  assert(contract.auditRequirements.includes("referral-action-blocked"), `${sourceId} must audit blocked referrals.`);
});

[
  "NGO and community service directories",
  "government service agency directories",
  "food, shelter, and household support resources",
  "maternal, child, and family support resources",
  "disability and accessibility support resources",
  "legal aid and civil-support resource directories",
  "rural connectivity and digital access resources",
  "language and translation support resources",
  "Nexus must not",
  "submit referrals",
  "contact an agency",
  "share personal",
  "create an account",
  "source_backed_guidance",
  "unavailable_source_fallback"
].forEach(phrase => {
  assert(doc.toLowerCase().includes(phrase.toLowerCase()), `doc must include ${phrase}`);
});

[
  "fetch(",
  "XMLHttpRequest",
  "axios",
  "EventSource",
  "WebSocket",
  "execute:",
  "handler:",
  "adapter:",
  "submitReferral",
  "contactAgency",
  "contactCaseworker",
  "shareProfile",
  "createAccount",
  "scheduleAppointment",
  "processPayment"
].forEach(forbidden => {
  assert(!moduleSource.includes(forbidden), `community source module must not include runtime/execution behavior: ${forbidden}`);
});

[
  "nexus-community-service-public-source-contracts.js",
  "NexusCommunityServicePublicSourceContracts",
  "getCommunityServicePublicSourceContracts",
  "COMMUNITY_SERVICE_PUBLIC_SOURCE_CONTRACTS"
].forEach(runtimeHook => {
  assert(!index.includes(runtimeHook), `index.html must not load ${runtimeHook}`);
  assert(!app.includes(runtimeHook), `app.js must not consume ${runtimeHook}`);
  assert(!server.includes(runtimeHook), `server.js must not consume ${runtimeHook}`);
});

assert(
  packageData.scripts["qa:nexus-community-service-public-source-contracts"] === "node scripts/nexus-community-service-public-source-contracts-qa.js",
  "package.json must expose qa:nexus-community-service-public-source-contracts"
);
assert(
  qaSuite.includes("scripts/nexus-community-service-public-source-contracts-qa.js"),
  "qa-suite.js must include community-service public source contracts QA"
);

console.log("[nexus-community-service-public-source-contracts-qa] passed");
