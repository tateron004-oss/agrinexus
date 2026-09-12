const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  doc: path.join(root, "docs", "NEXUS_TELEHEALTH_PROVIDER_CONNECTOR_CONTRACT_PHASE_37.md"),
  roadmap: path.join(root, "docs", "NEXUS_100_FULL_MULTILINGUAL_ACCESS_PLATFORM_ROADMAP.md"),
  module: path.join(root, "public", "nexus-telehealth-provider-connector-contract.js"),
  providerUniverse: path.join(root, "public", "nexus-provider-source-universe.js"),
  telehealthCameraQa: path.join(root, "scripts", "telehealth-camera-discoverability-qa.js"),
  telehealthVideoQa: path.join(root, "scripts", "telehealth-video-handoff-qa.js"),
  telehealthPrivacyQa: path.join(root, "scripts", "telehealth-privacy-role-qa.js"),
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
    console.error(`[nexus-telehealth-provider-connector-contract-qa] ${message}`);
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
const providerUniverse = require(paths.providerUniverse).getNexusProviderSourceUniverse();
const telehealthCameraQa = read(paths.telehealthCameraQa);
const telehealthVideoQa = read(paths.telehealthVideoQa);
const telehealthPrivacyQa = read(paths.telehealthPrivacyQa);
const index = read(paths.index);
const app = read(paths.app);
const server = read(paths.server);
const packageData = JSON.parse(read(paths.packageJson));
const qaSuite = read(paths.qaSuite);

const statuses = [
  "not_configured",
  "provider_verification_required",
  "clinical_governance_review_required",
  "terms_review_required",
  "availability_source_required",
  "live_room_configuration_required",
  "consent_review_required",
  "privacy_security_review_required",
  "sandbox_testing_required",
  "approved_not_live",
  "active_directory_only",
  "rejected_or_blocked",
  "inactive"
];
const categories = [
  "primary_care_virtual_visit",
  "urgent_care_triage",
  "maternal_child_health_virtual_support",
  "pharmacy_consultation",
  "behavioral_health_referral",
  "chronic_care_follow_up",
  "specialist_referral",
  "rural_health_navigation",
  "language_supported_virtual_care",
  "care_coordination"
];
const fields = [
  "connectorId",
  "providerName",
  "sourceOwner",
  "connectorStatus",
  "serviceCategories",
  "serviceRegions",
  "supportedLanguages",
  "providerVerificationStatus",
  "clinicalGovernanceStatus",
  "termsReviewStatus",
  "availabilitySourceStatus",
  "liveRoomConfigurationStatus",
  "privacySecurityReviewStatus",
  "freshnessModel",
  "regionalScope",
  "languageScope",
  "allowedResponseStates",
  "liveRoomReadinessGate",
  "patientConsentGate",
  "auditRequirements",
  "auditEvent",
  "directoryContextAllowed",
  "liveAvailabilityAllowed",
  "providerContactEnabled",
  "appointmentSchedulingEnabled",
  "telehealthRoomEnabled",
  "cameraPermissionEnabled",
  "microphonePermissionEnabled",
  "paymentEnabled",
  "liveActionEnabled",
  "noExecution"
];
const noExecutionFlags = [
  "noExecution",
  "directoryContextAllowed",
  "liveAvailabilityAllowed",
  "providerContactEnabled",
  "appointmentSchedulingEnabled",
  "telehealthRoomEnabled",
  "cameraPermissionEnabled",
  "microphonePermissionEnabled",
  "externalRoomNavigationEnabled",
  "medicalRecordAccessEnabled",
  "prescriptionRefillEnabled",
  "paymentEnabled",
  "locationSharingEnabled",
  "emergencyDispatchEnabled",
  "liveActionEnabled",
  "providerContacted",
  "appointmentScheduled",
  "telehealthRoomOpened",
  "cameraActivated",
  "microphoneActivated",
  "externalRoomNavigated",
  "userDataShared",
  "externalActionExecuted",
  "paymentExecuted",
  "medicalRecordAccessed",
  "prescriptionSubmitted",
  "emergencyDispatched",
  "locationShared",
  "callOrMessageSent"
];

assert(roadmap.includes("| Phase 37 | Telehealth providers |"), "Nexus 100 roadmap must include Phase 37 telehealth providers row.");
assert(providerUniverse.some(item => item.categoryId === "health.telehealth_providers" && item.defaultExecutionEnabled === false), "provider universe must keep health.telehealth_providers disabled by default.");
assert(telehealthCameraQa.includes("workflow-video-preview") && telehealthCameraQa.includes("Open camera"), "telehealth camera QA must continue to protect local camera preview.");
assert(telehealthVideoQa.includes("/api/video/session") && telehealthVideoQa.includes("video"), "telehealth video handoff QA must continue to protect video handoff boundaries.");
assert(telehealthPrivacyQa.includes("telehealth") && telehealthPrivacyQa.includes("privacy"), "telehealth privacy/role QA must remain present.");

statuses.forEach(status => {
  assert(contract.TELEHEALTH_PROVIDER_STATUSES.includes(status), `contract must include status ${status}`);
  assert(doc.includes(status), `doc must include status ${status}`);
});
categories.forEach(category => {
  assert(contract.TELEHEALTH_SERVICE_CATEGORIES.includes(category), `contract must include service category ${category}`);
  assert(doc.includes(category), `doc must include service category ${category}`);
});
fields.forEach(field => {
  assert(contract.TELEHEALTH_PROVIDER_CONNECTOR_FIELDS.includes(field), `contract must list field ${field}`);
  assert(Object.prototype.hasOwnProperty.call(contract.TELEHEALTH_PROVIDER_CONNECTOR_CONTRACT, field), `telehealth provider connector contract must include ${field}`);
  assert(doc.includes(field), `doc must document ${field}`);
});
contract.LIVE_ROOM_READINESS_GATE_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.DEFAULT_LIVE_ROOM_READINESS_GATE, field), `live room readiness gate must include ${field}`);
  assert(doc.includes(field), `doc must document live room readiness gate field ${field}`);
});
contract.PATIENT_CONSENT_GATE_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.DEFAULT_PATIENT_CONSENT_GATE, field), `patient consent gate must include ${field}`);
  assert(doc.includes(field), `doc must document patient consent gate field ${field}`);
});
contract.TELEHEALTH_PROVIDER_AUDIT_EVENT_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.TELEHEALTH_PROVIDER_CONNECTOR_CONTRACT.auditEvent, field), `audit event must include ${field}`);
  assert(doc.includes(field), `doc must document audit field ${field}`);
});

[
  "allowsProviderContact",
  "allowsAppointmentScheduling",
  "allowsTelehealthRoomCreation",
  "allowsCameraActivation",
  "allowsMicrophoneActivation",
  "allowsExternalRoomNavigation"
].forEach(field => {
  assert(contract.DEFAULT_LIVE_ROOM_READINESS_GATE[field] === false, `${field} must default false.`);
});
[
  "allowsPatientDataSharing",
  "allowsMedicalRecordAccess",
  "allowsPrescriptionSubmission",
  "allowsPreciseLocationSharing",
  "allowsPaymentProcessing"
].forEach(field => {
  assert(contract.DEFAULT_PATIENT_CONSENT_GATE[field] === false, `${field} must default false.`);
});
noExecutionFlags.forEach(flag => {
  assert(contract.NO_EXECUTION_DEFAULTS[flag] === (flag === "noExecution" ? true : false), `${flag} must default safely.`);
  assert(contract.TELEHEALTH_PROVIDER_CONNECTOR_CONTRACT[flag] === contract.NO_EXECUTION_DEFAULTS[flag], `${flag} must match safe default.`);
});

const sample = contract.createTelehealthProviderConnector({
  connectorId: "sample-telehealth",
  connectorStatus: "active_directory_only",
  serviceCategories: ["primary_care_virtual_visit", "language_supported_virtual_care", "unsafe"],
  liveRoomReadinessGate: {
    allowsProviderContact: true,
    allowsAppointmentScheduling: true,
    allowsTelehealthRoomCreation: true,
    allowsCameraActivation: true,
    allowsMicrophoneActivation: true,
    allowsExternalRoomNavigation: true
  },
  patientConsentGate: {
    allowsPatientDataSharing: true,
    allowsMedicalRecordAccess: true,
    allowsPrescriptionSubmission: true,
    allowsPreciseLocationSharing: true,
    allowsPaymentProcessing: true
  }
});
assert(Object.isFrozen(sample), "created telehealth provider connector must be frozen.");
assert(sample.serviceCategories.includes("primary_care_virtual_visit"), "valid service category must be preserved.");
assert(!sample.serviceCategories.includes("unsafe"), "invalid service category must be filtered.");
assert(sample.liveRoomReadinessGate.allowsProviderContact === false, "provider contact must remain disabled.");
assert(sample.liveRoomReadinessGate.allowsAppointmentScheduling === false, "appointment scheduling must remain disabled.");
assert(sample.liveRoomReadinessGate.allowsTelehealthRoomCreation === false, "telehealth room creation must remain disabled.");
assert(sample.liveRoomReadinessGate.allowsCameraActivation === false, "camera activation must remain disabled.");
assert(sample.liveRoomReadinessGate.allowsMicrophoneActivation === false, "microphone activation must remain disabled.");
assert(sample.liveRoomReadinessGate.allowsExternalRoomNavigation === false, "external room navigation must remain disabled.");
assert(sample.patientConsentGate.allowsPatientDataSharing === false, "patient data sharing must remain disabled.");
assert(sample.patientConsentGate.allowsMedicalRecordAccess === false, "medical record access must remain disabled.");
assert(sample.patientConsentGate.allowsPrescriptionSubmission === false, "prescription submission must remain disabled.");
assert(sample.patientConsentGate.allowsPreciseLocationSharing === false, "precise location sharing must remain disabled.");
assert(sample.patientConsentGate.allowsPaymentProcessing === false, "payment processing must remain disabled.");
noExecutionFlags.forEach(flag => {
  assert(sample[flag] === contract.NO_EXECUTION_DEFAULTS[flag], `created connector must force ${flag} safe default.`);
});

const invalid = contract.createTelehealthProviderConnector({ connectorStatus: "live_now" });
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
  "getUserMedia",
  "window.location",
  "document.location",
  "setInterval",
  "execute:",
  "handler:",
  "adapter:",
  "providerHandoff",
  "createRoom",
  "openRoom",
  "contactProvider",
  "processPayment",
  "dispatchEmergency",
  "open("
].forEach(forbidden => {
  assert(!moduleSource.includes(forbidden), `telehealth provider connector contract must not include runtime/execution behavior: ${forbidden}`);
});

[
  "nexus-telehealth-provider-connector-contract.js",
  "NexusTelehealthProviderConnectorContract",
  "createTelehealthProviderConnector",
  "TELEHEALTH_PROVIDER_CONNECTOR_CONTRACT"
].forEach(runtimeHook => {
  assert(!index.includes(runtimeHook), `index.html must not load ${runtimeHook}`);
  assert(!app.includes(runtimeHook), `app.js must not consume ${runtimeHook}`);
  assert(!server.includes(runtimeHook), `server.js must not consume ${runtimeHook}`);
});

assert(packageData.scripts["qa:nexus-telehealth-provider-connector-contract"] === "node scripts/nexus-telehealth-provider-connector-contract-qa.js", "package.json must expose qa:nexus-telehealth-provider-connector-contract");
assert(qaSuite.includes("scripts/nexus-telehealth-provider-connector-contract-qa.js"), "qa-suite.js must include telehealth provider connector contract QA");

console.log("[nexus-telehealth-provider-connector-contract-qa] passed");
