const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  doc: path.join(root, "docs", "NEXUS_PHARMACY_PROVIDER_CONNECTOR_CONTRACT_PHASE_39.md"),
  roadmap: path.join(root, "docs", "NEXUS_100_FULL_MULTILINGUAL_ACCESS_PLATFORM_ROADMAP.md"),
  module: path.join(root, "public", "nexus-pharmacy-provider-connector-contract.js"),
  publicBaseline: path.join(root, "public", "nexus-public-data-connector-baseline.js"),
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
    console.error(`[nexus-pharmacy-provider-connector-contract-qa] ${message}`);
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
const providerUniverse = require(paths.providerUniverse).getNexusProviderSourceUniverse();
const appBehaviorQa = read(paths.appBehaviorQa);
const index = read(paths.index);
const app = read(paths.app);
const server = read(paths.server);
const packageData = JSON.parse(read(paths.packageJson));
const qaSuite = read(paths.qaSuite);

const statuses = [
  "not_configured",
  "pharmacy_verification_required",
  "directory_source_required",
  "terms_review_required",
  "regulated_workflow_review_required",
  "refill_gate_required",
  "patient_consent_review_required",
  "payment_review_required",
  "sandbox_testing_required",
  "approved_not_live",
  "active_directory_only",
  "rejected_or_blocked",
  "inactive"
];
const categories = [
  "pharmacy_directory",
  "medicine_access_guidance",
  "refill_readiness_review",
  "pharmacist_consult_boundary",
  "mobile_clinic_pharmacy_support",
  "inventory_context",
  "pickup_hours_context",
  "delivery_option_context",
  "insurance_payment_boundary",
  "language_supported_pharmacy_access"
];
const fields = [
  "connectorId",
  "pharmacyName",
  "sourceOwner",
  "connectorStatus",
  "serviceCategories",
  "serviceRegions",
  "supportedLanguages",
  "pharmacyVerificationStatus",
  "directorySourceStatus",
  "termsReviewStatus",
  "regulatedWorkflowReviewStatus",
  "refillGateStatus",
  "patientConsentReviewStatus",
  "paymentReviewStatus",
  "freshnessModel",
  "regionalScope",
  "languageScope",
  "allowedResponseStates",
  "pharmacyActionGate",
  "patientConsentGate",
  "auditRequirements",
  "auditEvent",
  "directoryContextAllowed",
  "liveInventoryAllowed",
  "pharmacyContactEnabled",
  "refillExecutionEnabled",
  "prescriptionSubmissionEnabled",
  "paymentEnabled",
  "liveActionEnabled",
  "noExecution"
];
const noExecutionFlags = [
  "noExecution",
  "directoryContextAllowed",
  "liveInventoryAllowed",
  "pharmacyContactEnabled",
  "refillPreparationEnabled",
  "refillExecutionEnabled",
  "prescriptionSubmissionEnabled",
  "medicalRecordAccessEnabled",
  "medicationDataSharingEnabled",
  "paymentEnabled",
  "locationSharingEnabled",
  "deliveryDispatchEnabled",
  "emergencyDispatchEnabled",
  "liveActionEnabled",
  "pharmacyContacted",
  "refillPrepared",
  "refillSubmitted",
  "prescriptionSubmitted",
  "patientDataShared",
  "medicationDataShared",
  "paymentExecuted",
  "locationShared",
  "deliveryDispatched",
  "emergencyDispatched",
  "externalActionExecuted",
  "callOrMessageSent"
];

assert(roadmap.includes("| Phase 39 | Pharmacy providers |"), "Nexus 100 roadmap must include Phase 39 pharmacy providers row.");
assert(providerUniverse.some(item => item.categoryId === "health.pharmacy_providers" && item.defaultExecutionEnabled === false), "provider universe must keep health.pharmacy_providers disabled by default.");
assert(publicBaseline.some(item => item.connectorId === "public.health.pharmacy_directory" && item.executionEnabled === false), "public pharmacy directory connector must remain execution-disabled.");
assert(appBehaviorQa.includes("I heard you need medicine. I can guide you step by step.") && appBehaviorQa.includes("clinic/pharmacy map"), "app behavior audit must continue guarding medicine and pharmacy access routes.");

statuses.forEach(status => {
  assert(contract.PHARMACY_PROVIDER_STATUSES.includes(status), `contract must include status ${status}`);
  assert(doc.includes(status), `doc must include status ${status}`);
});
categories.forEach(category => {
  assert(contract.PHARMACY_SERVICE_CATEGORIES.includes(category), `contract must include service category ${category}`);
  assert(doc.includes(category), `doc must include service category ${category}`);
});
fields.forEach(field => {
  assert(contract.PHARMACY_PROVIDER_CONNECTOR_FIELDS.includes(field), `contract must list field ${field}`);
  assert(Object.prototype.hasOwnProperty.call(contract.PHARMACY_PROVIDER_CONNECTOR_CONTRACT, field), `pharmacy provider connector contract must include ${field}`);
  assert(doc.includes(field), `doc must document ${field}`);
});
contract.PHARMACY_ACTION_GATE_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.DEFAULT_PHARMACY_ACTION_GATE, field), `pharmacy action gate must include ${field}`);
  assert(doc.includes(field), `doc must document pharmacy action gate field ${field}`);
});
contract.PATIENT_CONSENT_GATE_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.DEFAULT_PATIENT_CONSENT_GATE, field), `patient consent gate must include ${field}`);
  assert(doc.includes(field), `doc must document patient consent gate field ${field}`);
});
contract.PHARMACY_PROVIDER_AUDIT_EVENT_FIELDS.forEach(field => {
  assert(Object.prototype.hasOwnProperty.call(contract.PHARMACY_PROVIDER_CONNECTOR_CONTRACT.auditEvent, field), `audit event must include ${field}`);
  assert(doc.includes(field), `doc must document audit field ${field}`);
});

[
  "allowsDirectoryContext",
  "allowsPharmacyContact",
  "allowsRefillPreparation",
  "allowsRefillExecution",
  "allowsPrescriptionSubmission",
  "allowsPaymentProcessing",
  "allowsExternalNavigation"
].forEach(field => {
  assert(contract.DEFAULT_PHARMACY_ACTION_GATE[field] === false, `${field} must default false.`);
});
[
  "allowsPatientDataSharing",
  "allowsMedicationDataSharing",
  "allowsMedicalRecordAccess",
  "allowsPrescriptionSubmission",
  "allowsPaymentProcessing",
  "allowsLocationSharing"
].forEach(field => {
  assert(contract.DEFAULT_PATIENT_CONSENT_GATE[field] === false, `${field} must default false.`);
});
noExecutionFlags.forEach(flag => {
  assert(contract.NO_EXECUTION_DEFAULTS[flag] === (flag === "noExecution" ? true : false), `${flag} must default safely.`);
  assert(contract.PHARMACY_PROVIDER_CONNECTOR_CONTRACT[flag] === contract.NO_EXECUTION_DEFAULTS[flag], `${flag} must match safe default.`);
});

const sample = contract.createPharmacyProviderConnector({
  connectorId: "sample-pharmacy",
  connectorStatus: "active_directory_only",
  serviceCategories: ["pharmacy_directory", "medicine_access_guidance", "unsafe"],
  pharmacyActionGate: {
    allowsDirectoryContext: true,
    allowsPharmacyContact: true,
    allowsRefillPreparation: true,
    allowsRefillExecution: true,
    allowsPrescriptionSubmission: true,
    allowsPaymentProcessing: true,
    allowsExternalNavigation: true
  },
  patientConsentGate: {
    allowsPatientDataSharing: true,
    allowsMedicationDataSharing: true,
    allowsMedicalRecordAccess: true,
    allowsPrescriptionSubmission: true,
    allowsPaymentProcessing: true,
    allowsLocationSharing: true
  }
});
assert(Object.isFrozen(sample), "created pharmacy provider connector must be frozen.");
assert(sample.serviceCategories.includes("pharmacy_directory"), "valid service category must be preserved.");
assert(!sample.serviceCategories.includes("unsafe"), "invalid service category must be filtered.");
assert(sample.pharmacyActionGate.allowsDirectoryContext === false, "directory context must remain disabled.");
assert(sample.pharmacyActionGate.allowsPharmacyContact === false, "pharmacy contact must remain disabled.");
assert(sample.pharmacyActionGate.allowsRefillPreparation === false, "refill preparation must remain disabled.");
assert(sample.pharmacyActionGate.allowsRefillExecution === false, "refill execution must remain disabled.");
assert(sample.pharmacyActionGate.allowsPrescriptionSubmission === false, "prescription submission must remain disabled.");
assert(sample.pharmacyActionGate.allowsPaymentProcessing === false, "payment processing must remain disabled.");
assert(sample.pharmacyActionGate.allowsExternalNavigation === false, "external navigation must remain disabled.");
assert(sample.patientConsentGate.allowsPatientDataSharing === false, "patient data sharing must remain disabled.");
assert(sample.patientConsentGate.allowsMedicationDataSharing === false, "medication data sharing must remain disabled.");
assert(sample.patientConsentGate.allowsMedicalRecordAccess === false, "medical record access must remain disabled.");
assert(sample.patientConsentGate.allowsPrescriptionSubmission === false, "prescription submission must remain disabled.");
assert(sample.patientConsentGate.allowsPaymentProcessing === false, "payment processing must remain disabled.");
assert(sample.patientConsentGate.allowsLocationSharing === false, "location sharing must remain disabled.");
noExecutionFlags.forEach(flag => {
  assert(sample[flag] === contract.NO_EXECUTION_DEFAULTS[flag], `created connector must force ${flag} safe default.`);
});

const invalid = contract.createPharmacyProviderConnector({ connectorStatus: "live_now" });
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
  "contactPharmacy",
  "submitRefill",
  "processPayment",
  "dispatchEmergency",
  "open("
].forEach(forbidden => {
  assert(!moduleSource.includes(forbidden), `pharmacy provider connector contract must not include runtime/execution behavior: ${forbidden}`);
});

[
  "nexus-pharmacy-provider-connector-contract.js",
  "NexusPharmacyProviderConnectorContract",
  "createPharmacyProviderConnector",
  "PHARMACY_PROVIDER_CONNECTOR_CONTRACT"
].forEach(runtimeHook => {
  assert(!index.includes(runtimeHook), `index.html must not load ${runtimeHook}`);
  assert(!app.includes(runtimeHook), `app.js must not consume ${runtimeHook}`);
  assert(!server.includes(runtimeHook), `server.js must not consume ${runtimeHook}`);
});

assert(packageData.scripts["qa:nexus-pharmacy-provider-connector-contract"] === "node scripts/nexus-pharmacy-provider-connector-contract-qa.js", "package.json must expose qa:nexus-pharmacy-provider-connector-contract");
assert(qaSuite.includes("scripts/nexus-pharmacy-provider-connector-contract-qa.js"), "qa-suite.js must include pharmacy provider connector contract QA");

console.log("[nexus-pharmacy-provider-connector-contract-qa] passed");
