const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  doc: path.join(root, "docs", "NEXUS_MOBILE_CLINIC_OPERATOR_CONNECTOR_CONTRACT_PHASE_38.md"),
  roadmap: path.join(root, "docs", "NEXUS_100_FULL_MULTILINGUAL_ACCESS_PLATFORM_ROADMAP.md"),
  module: path.join(root, "public", "nexus-mobile-clinic-operator-connector-contract.js"),
  publicBaseline: path.join(root, "public", "nexus-public-data-connector-baseline.js"),
  clinicDirectory: path.join(root, "public", "nexus-provider-clinic-public-directory-contracts.js"),
  providerUniverse: path.join(root, "public", "nexus-provider-source-universe.js"),
  appBehaviorQa: path.join(root, "scripts", "app-behavior-audit.js"),
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
    console.error(`[nexus-mobile-clinic-operator-connector-contract-qa] ${message}`);
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
const publicBaseline = require(paths.publicBaseline).getPublicDataConnectorBaseline();
const clinicDirectories = require(paths.clinicDirectory).getProviderClinicPublicDirectoryContracts();
const providerUniverse = require(paths.providerUniverse).getNexusProviderSourceUniverse();
const appBehaviorQa = read(paths.appBehaviorQa);
const index = read(paths.index);
const app = read(paths.app);
const server = read(paths.server);
const packageData = JSON.parse(read(paths.packageJson));
const qaSuite = read(paths.qaSuite);

const statuses = [
  "not_configured",
  "operator_verification_required",
  "schedule_source_required",
  "service_scope_review_required",
  "terms_review_required",
  "location_consent_review_required",
  "dispatch_governance_required",
  "sandbox_testing_required",
  "approved_not_live",
  "active_schedule_directory_only",
  "rejected_or_blocked",
  "inactive"
];
const categories = [
  "rural_health_outreach",
  "maternal_child_health_outreach",
  "vaccination_outreach",
  "pharmacy_access_support",
  "screening_event",
  "community_health_navigation",
  "mobile_lab_referral",
  "transportation_to_care_support",
  "health_education_event",
  "care_coordination_event"
];
const fields = [
  "connectorId",
  "operatorName",
  "sourceOwner",
  "connectorStatus",
  "serviceCategories",
  "serviceRegions",
  "supportedLanguages",
  "operatorVerificationStatus",
  "scheduleSourceStatus",
  "serviceScopeReviewStatus",
  "termsReviewStatus",
  "locationConsentReviewStatus",
  "dispatchGovernanceStatus",
  "freshnessModel",
  "regionalScope",
  "languageScope",
  "allowedResponseStates",
  "scheduleReadinessGate",
  "locationConsentGate",
  "auditRequirements",
  "auditEvent",
  "scheduleContextAllowed",
  "liveAvailabilityAllowed",
  "operatorContactEnabled",
  "visitBookingEnabled",
  "mobileClinicDispatchEnabled",
  "locationSharingEnabled",
  "paymentEnabled",
  "liveActionEnabled",
  "noExecution"
];
const noExecutionFlags = [
  "noExecution",
  "scheduleContextAllowed",
  "liveAvailabilityAllowed",
  "operatorContactEnabled",
  "visitBookingEnabled",
  "mobileClinicDispatchEnabled",
  "supplyDispatchEnabled",
  "locationSharingEnabled",
  "preciseLocationEnabled",
  "routeOptimizationEnabled",
  "medicalRecordAccessEnabled",
  "prescriptionRefillEnabled",
  "paymentEnabled",
  "emergencyDispatchEnabled",
  "liveActionEnabled",
  "operatorContacted",
  "visitBooked",
  "mobileClinicDispatched",
  "supplyDispatched",
  "locationShared",
  "preciseLocationShared",
  "userDataShared",
  "externalActionExecuted",
  "paymentExecuted",
  "medicalRecordAccessed",
  "prescriptionSubmitted",
  "emergencyDispatched",
  "callOrMessageSent"
];

assert(roadmap.includes("| Phase 38 | Mobile clinic operators |"), "Nexus 100 roadmap must include Phase 38 mobile clinic operators row.");
assert(providerUniverse.some(item => item.categoryId === "health.mobile_clinic_operators" && item.defaultExecutionEnabled === false), "provider universe must keep health.mobile_clinic_operators disabled by default.");
assert(publicBaseline.some(item => item.connectorId === "public.health.mobile_clinic_schedule" && item.executionEnabled === false), "public mobile clinic schedule connector must remain execution-disabled.");
assert(clinicDirectories.some(item => item.directoryId === "provider.mobile_clinic.public_schedule" && item.executionEnabled === false), "mobile clinic public schedule directory must remain execution-disabled.");
assert(appBehaviorQa.includes("Mobile Clinic Supply Network") && appBehaviorQa.includes("Rural Health"), "app behavior audit must continue guarding mobile clinic health UI.");

statuses.forEach(status => {
  assert(contract.MOBILE_CLINIC_OPERATOR_STATUSES.includes(status), `contract must include status ${status}`);
  assert(doc.includes(status), `doc must include status ${status}`);
});
categories.forEach(category => {
  assert(contract.MOBILE_CLINIC_SERVICE_CATEGORIES.includes(category), `contract must include service category ${category}`);
  assert(doc.includes(category), `doc must include service category ${category}`);
});
fields.forEach(field => {
  assert(contract.MOBILE_CLINIC_OPERATOR_CONNECTOR_FIELDS.includes(field), `contract must list field ${field}`);
  assert(Object.prototype.hasOwnProperty.call(contract.MOBILE_CLINIC_OPERATOR_CONNECTOR_CONTRACT, field), `mobile clinic operator connector contract must include ${field}`);
  assert(doc.includes(field), `doc must document ${field}`);
});
contract.SCHEDULE_READINESS_GATE_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.DEFAULT_SCHEDULE_READINESS_GATE, field), `schedule readiness gate must include ${field}`);
  assert(doc.includes(field), `doc must document schedule readiness gate field ${field}`);
});
contract.LOCATION_CONSENT_GATE_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.DEFAULT_LOCATION_CONSENT_GATE, field), `location consent gate must include ${field}`);
  assert(doc.includes(field), `doc must document location consent gate field ${field}`);
});
contract.MOBILE_CLINIC_OPERATOR_AUDIT_EVENT_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.MOBILE_CLINIC_OPERATOR_CONNECTOR_CONTRACT.auditEvent, field), `audit event must include ${field}`);
  assert(doc.includes(field), `doc must document audit field ${field}`);
});

[
  "allowsScheduleContext",
  "allowsOperatorContact",
  "allowsVisitBooking",
  "allowsMobileClinicDispatch",
  "allowsSupplyDispatch",
  "allowsExternalNavigation"
].forEach(field => {
  assert(contract.DEFAULT_SCHEDULE_READINESS_GATE[field] === false, `${field} must default false.`);
});
[
  "allowsApproximateLocationUse",
  "allowsPreciseLocationSharing",
  "allowsRouteOptimization",
  "allowsDispatchLocationSharing",
  "allowsPatientDataSharing"
].forEach(field => {
  assert(contract.DEFAULT_LOCATION_CONSENT_GATE[field] === false, `${field} must default false.`);
});
noExecutionFlags.forEach(flag => {
  assert(contract.NO_EXECUTION_DEFAULTS[flag] === (flag === "noExecution" ? true : false), `${flag} must default safely.`);
  assert(contract.MOBILE_CLINIC_OPERATOR_CONNECTOR_CONTRACT[flag] === contract.NO_EXECUTION_DEFAULTS[flag], `${flag} must match safe default.`);
});

const sample = contract.createMobileClinicOperatorConnector({
  connectorId: "sample-mobile-clinic",
  connectorStatus: "active_schedule_directory_only",
  serviceCategories: ["rural_health_outreach", "pharmacy_access_support", "unsafe"],
  scheduleReadinessGate: {
    allowsScheduleContext: true,
    allowsOperatorContact: true,
    allowsVisitBooking: true,
    allowsMobileClinicDispatch: true,
    allowsSupplyDispatch: true,
    allowsExternalNavigation: true
  },
  locationConsentGate: {
    allowsApproximateLocationUse: true,
    allowsPreciseLocationSharing: true,
    allowsRouteOptimization: true,
    allowsDispatchLocationSharing: true,
    allowsPatientDataSharing: true
  }
});
assert(Object.isFrozen(sample), "created mobile clinic operator connector must be frozen.");
assert(sample.serviceCategories.includes("rural_health_outreach"), "valid service category must be preserved.");
assert(!sample.serviceCategories.includes("unsafe"), "invalid service category must be filtered.");
assert(sample.scheduleReadinessGate.allowsScheduleContext === false, "schedule context must remain disabled.");
assert(sample.scheduleReadinessGate.allowsOperatorContact === false, "operator contact must remain disabled.");
assert(sample.scheduleReadinessGate.allowsVisitBooking === false, "visit booking must remain disabled.");
assert(sample.scheduleReadinessGate.allowsMobileClinicDispatch === false, "mobile clinic dispatch must remain disabled.");
assert(sample.scheduleReadinessGate.allowsSupplyDispatch === false, "supply dispatch must remain disabled.");
assert(sample.scheduleReadinessGate.allowsExternalNavigation === false, "external navigation must remain disabled.");
assert(sample.locationConsentGate.allowsApproximateLocationUse === false, "approximate location use must remain disabled.");
assert(sample.locationConsentGate.allowsPreciseLocationSharing === false, "precise location sharing must remain disabled.");
assert(sample.locationConsentGate.allowsRouteOptimization === false, "route optimization must remain disabled.");
assert(sample.locationConsentGate.allowsDispatchLocationSharing === false, "dispatch location sharing must remain disabled.");
assert(sample.locationConsentGate.allowsPatientDataSharing === false, "patient data sharing must remain disabled.");
noExecutionFlags.forEach(flag => {
  assert(sample[flag] === contract.NO_EXECUTION_DEFAULTS[flag], `created connector must force ${flag} safe default.`);
});

const invalid = contract.createMobileClinicOperatorConnector({ connectorStatus: "live_now" });
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
  "contactOperator",
  "bookVisit",
  "processPayment",
  "dispatchEmergency",
  "open("
].forEach(forbidden => {
  assert(!moduleSource.includes(forbidden), `mobile clinic operator connector contract must not include runtime/execution behavior: ${forbidden}`);
});

[
  "nexus-mobile-clinic-operator-connector-contract.js",
  "NexusMobileClinicOperatorConnectorContract",
  "createMobileClinicOperatorConnector",
  "MOBILE_CLINIC_OPERATOR_CONNECTOR_CONTRACT"
].forEach(runtimeHook => {
  assert(!index.includes(runtimeHook), `index.html must not load ${runtimeHook}`);
  assert(!app.includes(runtimeHook), `app.js must not consume ${runtimeHook}`);
  assert(!server.includes(runtimeHook), `server.js must not consume ${runtimeHook}`);
});

assert(packageData.scripts["qa:nexus-mobile-clinic-operator-connector-contract"] === "node scripts/nexus-mobile-clinic-operator-connector-contract-qa.js", "package.json must expose qa:nexus-mobile-clinic-operator-connector-contract");
assert(qaSuite.includes("scripts/nexus-mobile-clinic-operator-connector-contract-qa.js"), "qa-suite.js must include mobile clinic operator connector contract QA");

console.log("[nexus-mobile-clinic-operator-connector-contract-qa] passed");
