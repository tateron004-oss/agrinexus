const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  doc: path.join(root, "docs", "NEXUS_TRANSPORTATION_PROVIDER_CONNECTOR_CONTRACT_PHASE_40.md"),
  roadmap: path.join(root, "docs", "NEXUS_100_FULL_MULTILINGUAL_ACCESS_PLATFORM_ROADMAP.md"),
  module: path.join(root, "public", "nexus-transportation-provider-connector-contract.js"),
  publicBaseline: path.join(root, "public", "nexus-public-data-connector-baseline.js"),
  clinicDirectory: path.join(root, "public", "nexus-provider-clinic-public-directory-contracts.js"),
  providerUniverse: path.join(root, "public", "nexus-provider-source-universe.js"),
  voiceShell: path.join(root, "public", "nexus-voice-demo-shell.js"),
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
    console.error(`[nexus-transportation-provider-connector-contract-qa] ${message}`);
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
const voiceShell = read(paths.voiceShell);
const index = read(paths.index);
const app = read(paths.app);
const server = read(paths.server);
const packageData = JSON.parse(read(paths.packageJson));
const qaSuite = read(paths.qaSuite);

const statuses = [
  "not_configured",
  "transport_partner_verification_required",
  "route_source_required",
  "service_area_review_required",
  "terms_review_required",
  "location_consent_review_required",
  "booking_gate_required",
  "payment_review_required",
  "sandbox_testing_required",
  "approved_not_live",
  "active_resource_directory_only",
  "rejected_or_blocked",
  "inactive"
];
const categories = [
  "transportation_to_care",
  "community_transport_resource",
  "accessible_transport_resource",
  "clinic_shuttle_resource",
  "mobile_clinic_route_support",
  "rural_transport_resource",
  "paratransit_resource",
  "public_transit_guidance",
  "care_partner_pickup_boundary",
  "transportation_eligibility_review"
];
const fields = [
  "connectorId",
  "providerName",
  "sourceOwner",
  "connectorStatus",
  "serviceCategories",
  "serviceRegions",
  "supportedLanguages",
  "partnerVerificationStatus",
  "routeSourceStatus",
  "serviceAreaReviewStatus",
  "termsReviewStatus",
  "locationConsentReviewStatus",
  "bookingGateStatus",
  "paymentReviewStatus",
  "freshnessModel",
  "regionalScope",
  "languageScope",
  "allowedResponseStates",
  "bookingReadinessGate",
  "locationConsentGate",
  "auditRequirements",
  "auditEvent",
  "resourceContextAllowed",
  "liveAvailabilityAllowed",
  "partnerContactEnabled",
  "rideBookingEnabled",
  "transportDispatchEnabled",
  "locationSharingEnabled",
  "paymentEnabled",
  "liveActionEnabled",
  "noExecution"
];
const noExecutionFlags = [
  "noExecution",
  "resourceContextAllowed",
  "liveAvailabilityAllowed",
  "partnerContactEnabled",
  "rideBookingEnabled",
  "transportDispatchEnabled",
  "routeOptimizationEnabled",
  "locationSharingEnabled",
  "preciseLocationEnabled",
  "paymentEnabled",
  "medicalDataSharingEnabled",
  "emergencyDispatchEnabled",
  "liveActionEnabled",
  "partnerContacted",
  "rideBooked",
  "transportDispatched",
  "routeOptimized",
  "locationShared",
  "preciseLocationShared",
  "paymentExecuted",
  "medicalDataShared",
  "emergencyDispatched",
  "externalActionExecuted",
  "callOrMessageSent"
];

assert(roadmap.includes("| Phase 40 | Transportation providers |"), "Nexus 100 roadmap must include Phase 40 transportation providers row.");
assert(providerUniverse.some(item => item.categoryId === "transportation.providers" && item.defaultExecutionEnabled === false), "provider universe must keep transportation.providers disabled by default.");
assert(publicBaseline.some(item => item.connectorId === "public.transportation.resources" && item.executionEnabled === false), "public transportation resource connector must remain execution-disabled.");
assert(clinicDirectories.some(item => item.directoryId === "provider.transportation_to_care.access" && item.executionEnabled === false), "transportation-to-care directory must remain execution-disabled.");
assert(voiceShell.includes("I have not shared your location") && voiceShell.includes("scheduled a ride"), "voice shell must preserve transportation non-execution boundary copy.");

statuses.forEach(status => {
  assert(contract.TRANSPORTATION_PROVIDER_STATUSES.includes(status), `contract must include status ${status}`);
  assert(doc.includes(status), `doc must include status ${status}`);
});
categories.forEach(category => {
  assert(contract.TRANSPORTATION_SERVICE_CATEGORIES.includes(category), `contract must include service category ${category}`);
  assert(doc.includes(category), `doc must include service category ${category}`);
});
fields.forEach(field => {
  assert(contract.TRANSPORTATION_PROVIDER_CONNECTOR_FIELDS.includes(field), `contract must list field ${field}`);
  assert(Object.prototype.hasOwnProperty.call(contract.TRANSPORTATION_PROVIDER_CONNECTOR_CONTRACT, field), `transportation provider connector contract must include ${field}`);
  assert(doc.includes(field), `doc must document ${field}`);
});
contract.BOOKING_READINESS_GATE_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.DEFAULT_BOOKING_READINESS_GATE, field), `booking readiness gate must include ${field}`);
  assert(doc.includes(field), `doc must document booking readiness gate field ${field}`);
});
contract.LOCATION_CONSENT_GATE_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.DEFAULT_LOCATION_CONSENT_GATE, field), `location consent gate must include ${field}`);
  assert(doc.includes(field), `doc must document location consent gate field ${field}`);
});
contract.TRANSPORTATION_PROVIDER_AUDIT_EVENT_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.TRANSPORTATION_PROVIDER_CONNECTOR_CONTRACT.auditEvent, field), `audit event must include ${field}`);
  assert(doc.includes(field), `doc must document audit field ${field}`);
});

[
  "allowsResourceContext",
  "allowsPartnerContact",
  "allowsRideBooking",
  "allowsTransportDispatch",
  "allowsPaymentProcessing",
  "allowsExternalNavigation"
].forEach(field => {
  assert(contract.DEFAULT_BOOKING_READINESS_GATE[field] === false, `${field} must default false.`);
});
[
  "allowsApproximateLocationUse",
  "allowsPreciseLocationSharing",
  "allowsRouteOptimization",
  "allowsPickupDropoffSharing",
  "allowsCarePartnerDataSharing"
].forEach(field => {
  assert(contract.DEFAULT_LOCATION_CONSENT_GATE[field] === false, `${field} must default false.`);
});
noExecutionFlags.forEach(flag => {
  assert(contract.NO_EXECUTION_DEFAULTS[flag] === (flag === "noExecution" ? true : false), `${flag} must default safely.`);
  assert(contract.TRANSPORTATION_PROVIDER_CONNECTOR_CONTRACT[flag] === contract.NO_EXECUTION_DEFAULTS[flag], `${flag} must match safe default.`);
});

const sample = contract.createTransportationProviderConnector({
  connectorId: "sample-transport",
  connectorStatus: "active_resource_directory_only",
  serviceCategories: ["transportation_to_care", "accessible_transport_resource", "unsafe"],
  bookingReadinessGate: {
    allowsResourceContext: true,
    allowsPartnerContact: true,
    allowsRideBooking: true,
    allowsTransportDispatch: true,
    allowsPaymentProcessing: true,
    allowsExternalNavigation: true
  },
  locationConsentGate: {
    allowsApproximateLocationUse: true,
    allowsPreciseLocationSharing: true,
    allowsRouteOptimization: true,
    allowsPickupDropoffSharing: true,
    allowsCarePartnerDataSharing: true
  }
});
assert(Object.isFrozen(sample), "created transportation provider connector must be frozen.");
assert(sample.serviceCategories.includes("transportation_to_care"), "valid service category must be preserved.");
assert(!sample.serviceCategories.includes("unsafe"), "invalid service category must be filtered.");
assert(sample.bookingReadinessGate.allowsResourceContext === false, "resource context must remain disabled.");
assert(sample.bookingReadinessGate.allowsPartnerContact === false, "partner contact must remain disabled.");
assert(sample.bookingReadinessGate.allowsRideBooking === false, "ride booking must remain disabled.");
assert(sample.bookingReadinessGate.allowsTransportDispatch === false, "transport dispatch must remain disabled.");
assert(sample.bookingReadinessGate.allowsPaymentProcessing === false, "payment processing must remain disabled.");
assert(sample.bookingReadinessGate.allowsExternalNavigation === false, "external navigation must remain disabled.");
assert(sample.locationConsentGate.allowsApproximateLocationUse === false, "approximate location use must remain disabled.");
assert(sample.locationConsentGate.allowsPreciseLocationSharing === false, "precise location sharing must remain disabled.");
assert(sample.locationConsentGate.allowsRouteOptimization === false, "route optimization must remain disabled.");
assert(sample.locationConsentGate.allowsPickupDropoffSharing === false, "pickup/dropoff sharing must remain disabled.");
assert(sample.locationConsentGate.allowsCarePartnerDataSharing === false, "care partner data sharing must remain disabled.");
noExecutionFlags.forEach(flag => {
  assert(sample[flag] === contract.NO_EXECUTION_DEFAULTS[flag], `created connector must force ${flag} safe default.`);
});

const invalid = contract.createTransportationProviderConnector({ connectorStatus: "live_now" });
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
  "bookRide",
  "dispatchTransport",
  "processPayment",
  "dispatchEmergency",
  "open("
].forEach(forbidden => {
  assert(!moduleSource.includes(forbidden), `transportation provider connector contract must not include runtime/execution behavior: ${forbidden}`);
});

[
  "nexus-transportation-provider-connector-contract.js",
  "NexusTransportationProviderConnectorContract",
  "createTransportationProviderConnector",
  "TRANSPORTATION_PROVIDER_CONNECTOR_CONTRACT"
].forEach(runtimeHook => {
  assert(!index.includes(runtimeHook), `index.html must not load ${runtimeHook}`);
  assert(!app.includes(runtimeHook), `app.js must not consume ${runtimeHook}`);
  assert(!server.includes(runtimeHook), `server.js must not consume ${runtimeHook}`);
});

assert(packageData.scripts["qa:nexus-transportation-provider-connector-contract"] === "node scripts/nexus-transportation-provider-connector-contract-qa.js", "package.json must expose qa:nexus-transportation-provider-connector-contract");
assert(qaSuite.includes("scripts/nexus-transportation-provider-connector-contract-qa.js"), "qa-suite.js must include transportation provider connector contract QA");

console.log("[nexus-transportation-provider-connector-contract-qa] passed");
