const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  doc: path.join(root, "docs", "NEXUS_COMMUNITY_SERVICE_ORG_CONNECTOR_CONTRACT_PHASE_44.md"),
  roadmap: path.join(root, "docs", "NEXUS_100_FULL_MULTILINGUAL_ACCESS_PLATFORM_ROADMAP.md"),
  module: path.join(root, "public", "nexus-community-service-org-connector-contract.js"),
  communityPublicSources: path.join(root, "public", "nexus-community-service-public-source-contracts.js"),
  publicBaseline: path.join(root, "public", "nexus-public-data-connector-baseline.js"),
  providerUniverse: path.join(root, "public", "nexus-provider-source-universe.js"),
  sourceRuntimeAudit: path.join(root, "docs", "NEXUS_SOURCE_BACKED_RESPONSE_RUNTIME_CONTRACT_AUDIT.md"),
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
    console.error(`[nexus-community-service-org-connector-contract-qa] ${message}`);
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
const communitySources = require(paths.communityPublicSources).getCommunityServicePublicSourceContracts();
const publicBaseline = require(paths.publicBaseline).getPublicDataConnectorBaseline();
const providerUniverse = require(paths.providerUniverse).getNexusProviderSourceUniverse();
const sourceRuntimeAudit = read(paths.sourceRuntimeAudit);
const index = read(paths.index);
const app = read(paths.app);
const server = read(paths.server);
const packageData = JSON.parse(read(paths.packageJson));
const qaSuite = read(paths.qaSuite);

const statuses = [
  "not_configured",
  "service_org_verification_required",
  "service_directory_required",
  "eligibility_source_required",
  "jurisdiction_review_required",
  "terms_review_required",
  "privacy_review_required",
  "referral_gate_required",
  "application_gate_required",
  "appointment_gate_required",
  "sandbox_testing_required",
  "approved_not_live",
  "active_source_directory_only",
  "rejected_or_blocked",
  "inactive"
];
const categories = [
  "ngo_community_service",
  "government_service_agency",
  "food_shelter_household_support",
  "family_child_support",
  "disability_accessibility_support",
  "legal_civil_support",
  "digital_access_support",
  "language_translation_support",
  "workforce_community_support",
  "health_access_navigation",
  "eligibility_review_resource",
  "community_referral_boundary"
];
const fields = [
  "connectorId",
  "providerName",
  "sourceOwner",
  "connectorStatus",
  "serviceCategories",
  "serviceRegions",
  "supportedLanguages",
  "serviceOrgVerificationStatus",
  "serviceDirectoryStatus",
  "eligibilitySourceStatus",
  "jurisdictionReviewStatus",
  "termsReviewStatus",
  "privacyReviewStatus",
  "referralGateStatus",
  "applicationGateStatus",
  "appointmentGateStatus",
  "freshnessModel",
  "regionalScope",
  "languageScope",
  "allowedResponseStates",
  "personalDataSharingGate",
  "referralReadinessGate",
  "auditRequirements",
  "auditEvent",
  "communityContextAllowed",
  "liveAvailabilityAllowed",
  "agencyContactEnabled",
  "caseworkerContactEnabled",
  "personalDataSharingEnabled",
  "referralSubmissionEnabled",
  "applicationSubmissionEnabled",
  "appointmentSchedulingEnabled",
  "accountCreationEnabled",
  "locationSharingEnabled",
  "paymentEnabled",
  "emergencyDispatchEnabled",
  "liveActionEnabled",
  "noExecution"
];
const noExecutionFlags = [
  "noExecution",
  "communityContextAllowed",
  "liveAvailabilityAllowed",
  "agencyContactEnabled",
  "caseworkerContactEnabled",
  "personalDataSharingEnabled",
  "profileSharingEnabled",
  "contactInfoSharingEnabled",
  "referralSubmissionEnabled",
  "applicationSubmissionEnabled",
  "appointmentSchedulingEnabled",
  "accountCreationEnabled",
  "locationSharingEnabled",
  "paymentEnabled",
  "emergencyDispatchEnabled",
  "liveActionEnabled",
  "agencyContacted",
  "caseworkerContacted",
  "personalDataShared",
  "profileShared",
  "contactInfoShared",
  "referralSubmitted",
  "applicationSubmitted",
  "appointmentScheduled",
  "accountCreated",
  "locationShared",
  "paymentExecuted",
  "emergencyDispatched",
  "externalActionExecuted",
  "callOrMessageSent"
];

assert(roadmap.includes("| Phase 44 | Community service orgs |"), "Nexus 100 roadmap must include Phase 44 community service orgs row.");
assert(providerUniverse.some(item => item.categoryId === "community.ngos_services" && item.defaultExecutionEnabled === false), "provider universe must keep community.ngos_services disabled by default.");
assert(providerUniverse.some(item => item.categoryId === "government.service_agencies" && item.defaultExecutionEnabled === false), "provider universe must keep government.service_agencies disabled by default.");
assert(publicBaseline.some(item => item.connectorId === "public.community.resources" && item.executionEnabled === false), "public community resources connector must remain execution-disabled.");
assert(communitySources.some(item => item.sourceId === "community.ngo.directory" && item.executionEnabled === false), "NGO directory source must remain execution-disabled.");
assert(communitySources.some(item => item.sourceId === "community.government.services" && item.executionEnabled === false), "government service source must remain execution-disabled.");
assert(sourceRuntimeAudit.includes("community resources") && sourceRuntimeAudit.includes("consent before sharing personal data"), "source-backed response audit must preserve community consent boundary.");
communitySources.forEach(item => {
  assert(item.referralSubmissionEnabled === false, `${item.sourceId} must keep referrals disabled.`);
  assert(item.agencyContactEnabled === false, `${item.sourceId} must keep agency contact disabled.`);
  assert(item.profileSharingEnabled === false, `${item.sourceId} must keep profile sharing disabled.`);
  assert(item.locationSharingEnabled === false, `${item.sourceId} must keep location sharing disabled.`);
  assert(item.emergencyDispatchEnabled === false, `${item.sourceId} must keep emergency dispatch disabled.`);
});

statuses.forEach(status => {
  assert(contract.COMMUNITY_SERVICE_ORG_STATUSES.includes(status), `contract must include status ${status}`);
  assert(doc.includes(status), `doc must include status ${status}`);
});
categories.forEach(category => {
  assert(contract.COMMUNITY_SERVICE_CATEGORIES.includes(category), `contract must include service category ${category}`);
  assert(doc.includes(category), `doc must include service category ${category}`);
});
fields.forEach(field => {
  assert(contract.COMMUNITY_SERVICE_ORG_CONNECTOR_FIELDS.includes(field), `contract must list field ${field}`);
  assert(Object.prototype.hasOwnProperty.call(contract.COMMUNITY_SERVICE_ORG_CONNECTOR_CONTRACT, field), `community service org connector contract must include ${field}`);
  assert(doc.includes(field), `doc must document ${field}`);
});
contract.PERSONAL_DATA_SHARING_GATE_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.DEFAULT_PERSONAL_DATA_SHARING_GATE, field), `personal data sharing gate must include ${field}`);
  assert(doc.includes(field), `doc must document personal data sharing gate field ${field}`);
});
contract.REFERRAL_READINESS_GATE_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.DEFAULT_REFERRAL_READINESS_GATE, field), `referral readiness gate must include ${field}`);
  assert(doc.includes(field), `doc must document referral readiness gate field ${field}`);
});
contract.COMMUNITY_SERVICE_ORG_AUDIT_EVENT_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.COMMUNITY_SERVICE_ORG_CONNECTOR_CONTRACT.auditEvent, field), `audit event must include ${field}`);
  assert(doc.includes(field), `doc must document audit field ${field}`);
});

[
  "allowsPersonalDataSharing",
  "allowsProfileSharing",
  "allowsLocationSharing",
  "allowsContactInfoSharing",
  "allowsExternalNavigation"
].forEach(field => {
  assert(contract.DEFAULT_PERSONAL_DATA_SHARING_GATE[field] === false, `${field} must default false.`);
});
[
  "allowsCommunityContext",
  "allowsAgencyContact",
  "allowsCaseworkerContact",
  "allowsReferralSubmission",
  "allowsApplicationSubmission",
  "allowsAppointmentScheduling",
  "allowsAccountCreation",
  "allowsPaymentProcessing",
  "allowsEmergencyDispatch",
  "allowsExternalNavigation"
].forEach(field => {
  assert(contract.DEFAULT_REFERRAL_READINESS_GATE[field] === false, `${field} must default false.`);
});
noExecutionFlags.forEach(flag => {
  assert(contract.NO_EXECUTION_DEFAULTS[flag] === (flag === "noExecution" ? true : false), `${flag} must default safely.`);
  assert(contract.COMMUNITY_SERVICE_ORG_CONNECTOR_CONTRACT[flag] === contract.NO_EXECUTION_DEFAULTS[flag], `${flag} must match safe default.`);
});

const sample = contract.createCommunityServiceOrgConnector({
  connectorId: "sample-community-org",
  connectorStatus: "active_source_directory_only",
  serviceCategories: ["ngo_community_service", "government_service_agency", "unsafe"],
  personalDataSharingGate: {
    allowsPersonalDataSharing: true,
    allowsProfileSharing: true,
    allowsLocationSharing: true,
    allowsContactInfoSharing: true,
    allowsExternalNavigation: true
  },
  referralReadinessGate: {
    allowsCommunityContext: true,
    allowsAgencyContact: true,
    allowsCaseworkerContact: true,
    allowsReferralSubmission: true,
    allowsApplicationSubmission: true,
    allowsAppointmentScheduling: true,
    allowsAccountCreation: true,
    allowsPaymentProcessing: true,
    allowsEmergencyDispatch: true,
    allowsExternalNavigation: true
  }
});
assert(Object.isFrozen(sample), "created community service org connector must be frozen.");
assert(sample.serviceCategories.includes("ngo_community_service"), "valid NGO service category must be preserved.");
assert(sample.serviceCategories.includes("government_service_agency"), "valid government service category must be preserved.");
assert(!sample.serviceCategories.includes("unsafe"), "invalid service category must be filtered.");
assert(sample.personalDataSharingGate.allowsPersonalDataSharing === false, "personal data sharing must remain disabled.");
assert(sample.personalDataSharingGate.allowsProfileSharing === false, "profile sharing must remain disabled.");
assert(sample.personalDataSharingGate.allowsLocationSharing === false, "location sharing must remain disabled.");
assert(sample.personalDataSharingGate.allowsContactInfoSharing === false, "contact info sharing must remain disabled.");
assert(sample.personalDataSharingGate.allowsExternalNavigation === false, "personal data external navigation must remain disabled.");
assert(sample.referralReadinessGate.allowsCommunityContext === false, "community context must remain disabled for partner connector execution.");
assert(sample.referralReadinessGate.allowsAgencyContact === false, "agency contact must remain disabled.");
assert(sample.referralReadinessGate.allowsCaseworkerContact === false, "caseworker contact must remain disabled.");
assert(sample.referralReadinessGate.allowsReferralSubmission === false, "referral submission must remain disabled.");
assert(sample.referralReadinessGate.allowsApplicationSubmission === false, "application submission must remain disabled.");
assert(sample.referralReadinessGate.allowsAppointmentScheduling === false, "appointment scheduling must remain disabled.");
assert(sample.referralReadinessGate.allowsAccountCreation === false, "account creation must remain disabled.");
assert(sample.referralReadinessGate.allowsPaymentProcessing === false, "payment processing must remain disabled.");
assert(sample.referralReadinessGate.allowsEmergencyDispatch === false, "emergency dispatch must remain disabled.");
assert(sample.referralReadinessGate.allowsExternalNavigation === false, "referral external navigation must remain disabled.");
noExecutionFlags.forEach(flag => {
  assert(sample[flag] === contract.NO_EXECUTION_DEFAULTS[flag], `created connector must force ${flag} safe default.`);
});

const invalid = contract.createCommunityServiceOrgConnector({ connectorStatus: "live_now" });
assert(invalid.connectorStatus === "not_configured", "invalid connector status must fall back to not_configured.");

[
  "fetch(",
  "XMLHttpRequest",
  "axios",
  "EventSource",
  "WebSocket",
  "localStorage",
  "sessionStorage",
  "navigator.geolocation",
  "navigator.mediaDevices",
  "window.location",
  "document.location",
  "setInterval",
  "execute:",
  "handler:",
  "adapter:",
  "providerHandoff",
  "submitReferral",
  "contactAgency",
  "contactCaseworker",
  "sharePersonalData",
  "createAccount",
  "scheduleAppointment",
  "dispatchEmergency",
  "processPayment",
  "open("
].forEach(forbidden => {
  assert(!moduleSource.includes(forbidden), `community service org connector contract must not include runtime/execution behavior: ${forbidden}`);
});

[
  "nexus-community-service-org-connector-contract.js",
  "NexusCommunityServiceOrgConnectorContract",
  "createCommunityServiceOrgConnector",
  "COMMUNITY_SERVICE_ORG_CONNECTOR_CONTRACT"
].forEach(runtimeHook => {
  assert(!index.includes(runtimeHook), `index.html must not load ${runtimeHook}`);
  assert(!app.includes(runtimeHook), `app.js must not consume ${runtimeHook}`);
  assert(!server.includes(runtimeHook), `server.js must not consume ${runtimeHook}`);
});

assert(packageData.scripts["qa:nexus-community-service-org-connector-contract"] === "node scripts/nexus-community-service-org-connector-contract-qa.js", "package.json must expose qa:nexus-community-service-org-connector-contract");
assert(qaSuite.includes("scripts/nexus-community-service-org-connector-contract-qa.js"), "qa-suite.js must include community service org connector contract QA");

console.log("[nexus-community-service-org-connector-contract-qa] passed");

