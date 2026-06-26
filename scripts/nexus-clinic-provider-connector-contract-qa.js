const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  doc: path.join(root, "docs", "NEXUS_CLINIC_PROVIDER_CONNECTOR_CONTRACT_PHASE_36.md"),
  roadmap: path.join(root, "docs", "NEXUS_100_FULL_MULTILINGUAL_ACCESS_PLATFORM_ROADMAP.md"),
  module: path.join(root, "public", "nexus-clinic-provider-connector-contract.js"),
  clinicDirectory: path.join(root, "public", "nexus-provider-clinic-public-directory-contracts.js"),
  providerUniverse: path.join(root, "public", "nexus-provider-source-universe.js"),
  confirmationQa: path.join(root, "scripts", "companion-confirmation-gate-smoke.js"),
  handoffQa: path.join(root, "scripts", "confirmed-call-handoff-qa.js"),
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
    console.error(`[nexus-clinic-provider-connector-contract-qa] ${message}`);
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
const clinicDirectories = require(paths.clinicDirectory).getProviderClinicPublicDirectoryContracts();
const providerUniverse = require(paths.providerUniverse).getNexusProviderSourceUniverse();
const confirmationQa = read(paths.confirmationQa);
const handoffQa = read(paths.handoffQa);
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
  "scheduling_gate_required",
  "consent_review_required",
  "sandbox_testing_required",
  "approved_not_live",
  "active_directory_only",
  "rejected_or_blocked",
  "inactive"
];
const categories = [
  "primary_care",
  "urgent_care_guidance",
  "maternal_child_health",
  "pharmacy_access",
  "telehealth_referral",
  "mobile_clinic_referral",
  "lab_referral",
  "vaccination_service",
  "transportation_to_care",
  "community_health_support"
];
const fields = [
  "connectorId",
  "clinicName",
  "sourceOwner",
  "connectorStatus",
  "serviceCategories",
  "serviceRegions",
  "supportedLanguages",
  "providerVerificationStatus",
  "clinicalGovernanceStatus",
  "termsReviewStatus",
  "availabilitySourceStatus",
  "freshnessModel",
  "regionalScope",
  "languageScope",
  "allowedResponseStates",
  "providerSchedulingGate",
  "patientDataConsentGate",
  "auditRequirements",
  "auditEvent",
  "directoryContextAllowed",
  "liveAvailabilityAllowed",
  "providerContactEnabled",
  "appointmentSchedulingEnabled",
  "telehealthRoomEnabled",
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
  "medicalRecordAccessEnabled",
  "prescriptionRefillEnabled",
  "paymentEnabled",
  "locationSharingEnabled",
  "emergencyDispatchEnabled",
  "liveActionEnabled",
  "providerContacted",
  "appointmentScheduled",
  "telehealthRoomOpened",
  "userDataShared",
  "externalActionExecuted",
  "paymentExecuted",
  "medicalRecordAccessed",
  "prescriptionSubmitted",
  "emergencyDispatched",
  "locationShared",
  "callOrMessageSent"
];

assert(roadmap.includes("| Phase 36 | Clinic providers |"), "Nexus 100 roadmap must include Phase 36 clinic providers row.");
assert(clinicDirectories.some(item => item.directoryId === "provider.clinic.public_directory" && item.executionEnabled === false), "Phase 21 clinic public directory must remain execution-disabled.");
assert(providerUniverse.some(item => item.categoryId === "health.clinics" && item.defaultExecutionEnabled === false), "provider universe must keep health.clinics disabled by default.");
assert(confirmationQa.includes("Schedule appointment") && confirmationQa.includes("gated"), "confirmation gate smoke must still gate appointments.");
assert(handoffQa.includes("confirmed-call-handoff"), "confirmed call handoff QA must remain present.");

statuses.forEach(status => {
  assert(contract.CLINIC_PROVIDER_STATUSES.includes(status), `contract must include status ${status}`);
  assert(doc.includes(status), `doc must include status ${status}`);
});
categories.forEach(category => {
  assert(contract.CLINIC_SERVICE_CATEGORIES.includes(category), `contract must include service category ${category}`);
  assert(doc.includes(category), `doc must include service category ${category}`);
});
fields.forEach(field => {
  assert(contract.CLINIC_PROVIDER_CONNECTOR_FIELDS.includes(field), `contract must list field ${field}`);
  assert(Object.prototype.hasOwnProperty.call(contract.CLINIC_PROVIDER_CONNECTOR_CONTRACT, field), `clinic provider connector contract must include ${field}`);
  assert(doc.includes(field), `doc must document ${field}`);
});
contract.PROVIDER_SCHEDULING_GATE_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.DEFAULT_PROVIDER_SCHEDULING_GATE, field), `provider scheduling gate must include ${field}`);
  assert(doc.includes(field), `doc must document provider scheduling gate field ${field}`);
});
contract.PATIENT_DATA_CONSENT_GATE_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.DEFAULT_PATIENT_DATA_CONSENT_GATE, field), `patient data consent gate must include ${field}`);
  assert(doc.includes(field), `doc must document patient data consent gate field ${field}`);
});
contract.CLINIC_PROVIDER_AUDIT_EVENT_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.CLINIC_PROVIDER_CONNECTOR_CONTRACT.auditEvent, field), `audit event must include ${field}`);
  assert(doc.includes(field), `doc must document audit field ${field}`);
});

["allowsProviderContact", "allowsAppointmentScheduling", "allowsReferralHandoff", "allowsTelehealthRoomCreation"].forEach(field => {
  assert(contract.DEFAULT_PROVIDER_SCHEDULING_GATE[field] === false, `${field} must default false.`);
});
["allowsPatientDataSharing", "allowsPreciseLocationSharing", "allowsMedicalRecordAccess", "allowsPrescriptionSubmission", "allowsPaymentProcessing"].forEach(field => {
  assert(contract.DEFAULT_PATIENT_DATA_CONSENT_GATE[field] === false, `${field} must default false.`);
});
noExecutionFlags.forEach(flag => {
  assert(contract.NO_EXECUTION_DEFAULTS[flag] === (flag === "noExecution" ? true : false), `${flag} must default safely.`);
  assert(contract.CLINIC_PROVIDER_CONNECTOR_CONTRACT[flag] === contract.NO_EXECUTION_DEFAULTS[flag], `${flag} must match safe default.`);
});

const sample = contract.createClinicProviderConnector({
  connectorId: "sample-clinic",
  connectorStatus: "active_directory_only",
  serviceCategories: ["primary_care", "pharmacy_access", "unsafe"],
  providerSchedulingGate: { allowsProviderContact: true, allowsAppointmentScheduling: true, allowsTelehealthRoomCreation: true },
  patientDataConsentGate: { allowsPatientDataSharing: true, allowsMedicalRecordAccess: true, allowsPaymentProcessing: true }
});
assert(Object.isFrozen(sample), "created clinic provider connector must be frozen.");
assert(sample.serviceCategories.includes("primary_care"), "valid service category must be preserved.");
assert(!sample.serviceCategories.includes("unsafe"), "invalid service category must be filtered.");
assert(sample.providerSchedulingGate.allowsProviderContact === false, "provider contact must remain disabled.");
assert(sample.providerSchedulingGate.allowsAppointmentScheduling === false, "appointment scheduling must remain disabled.");
assert(sample.providerSchedulingGate.allowsTelehealthRoomCreation === false, "telehealth room creation must remain disabled.");
assert(sample.patientDataConsentGate.allowsPatientDataSharing === false, "patient data sharing must remain disabled.");
assert(sample.patientDataConsentGate.allowsMedicalRecordAccess === false, "medical record access must remain disabled.");
assert(sample.patientDataConsentGate.allowsPaymentProcessing === false, "payment processing must remain disabled.");
noExecutionFlags.forEach(flag => {
  assert(sample[flag] === contract.NO_EXECUTION_DEFAULTS[flag], `created connector must force ${flag} safe default.`);
});

const invalid = contract.createClinicProviderConnector({ connectorStatus: "live_now" });
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
  "processPayment",
  "dispatchEmergency",
  "contactProvider",
  "open("
].forEach(forbidden => {
  assert(!moduleSource.includes(forbidden), `clinic provider connector contract must not include runtime/execution behavior: ${forbidden}`);
});

[
  "nexus-clinic-provider-connector-contract.js",
  "NexusClinicProviderConnectorContract",
  "createClinicProviderConnector",
  "CLINIC_PROVIDER_CONNECTOR_CONTRACT"
].forEach(runtimeHook => {
  assert(!index.includes(runtimeHook), `index.html must not load ${runtimeHook}`);
  assert(!app.includes(runtimeHook), `app.js must not consume ${runtimeHook}`);
  assert(!server.includes(runtimeHook), `server.js must not consume ${runtimeHook}`);
});

assert(packageData.scripts["qa:nexus-clinic-provider-connector-contract"] === "node scripts/nexus-clinic-provider-connector-contract-qa.js", "package.json must expose qa:nexus-clinic-provider-connector-contract");
assert(qaSuite.includes("scripts/nexus-clinic-provider-connector-contract-qa.js"), "qa-suite.js must include clinic provider connector contract QA");

console.log("[nexus-clinic-provider-connector-contract-qa] passed");
