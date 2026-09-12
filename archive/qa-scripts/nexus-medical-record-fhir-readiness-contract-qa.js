const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  doc: path.join(root, "docs", "NEXUS_MEDICAL_RECORD_FHIR_READINESS_CONTRACT_PHASE_58.md"),
  contract: path.join(root, "public", "nexus-medical-record-fhir-readiness-contract.js"),
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
    console.error(`[nexus-medical-record-fhir-readiness-contract-qa] ${message}`);
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

assert(doc.includes("Phase: 58"), "doc must identify Phase 58.");
assert(doc.includes("inert readiness contract"), "doc must state this phase is inert.");
assert(doc.includes("No medical record has been accessed or shared."), "doc must include safe no-record-access copy.");
assert(doc.includes("Redacted Access Boundary"), "doc must define redacted access boundary.");

[
  "live FHIR connector behavior",
  "EHR or patient portal access",
  "SMART-on-FHIR authorization",
  "OAuth token exchange",
  "medical record retrieval",
  "medical record storage",
  "medical record sharing",
  "clinical note summarization",
  "diagnostic interpretation",
  "Standard User runtime medical record access",
  "storage or network side effects",
  "backend behavior changes"
].forEach(boundary => {
  assert(doc.includes(boundary), `doc must document inactive boundary ${boundary}.`);
});

[
  "verifiedPatientIdentity",
  "resolvedRecordSubject",
  "authorizedRequestingRole",
  "visibleRecordScope",
  "visibleRecordSource",
  "visibleDataCategories",
  "minimumNecessaryPurpose",
  "scopedPatientConsent",
  "providerAuthorization",
  "fhirServerTrust",
  "oauthScopeReview",
  "permissionState",
  "complianceState",
  "redactionPolicy",
  "retentionPolicy",
  "auditEvent",
  "explicitFinalUserApproval",
  "cancellationPath",
  "noSilentRecordAccess",
  "noHiddenRecordSharing"
].forEach(precondition => {
  assert(contract.MEDICAL_RECORD_FHIR_REQUIRED_PRECONDITIONS.includes(precondition), `contract must include precondition ${precondition}.`);
  assert(doc.includes(precondition), `doc must include precondition ${precondition}.`);
});

[
  "medical_records",
  "fhir",
  "ehr",
  "patient_identity",
  "healthcare",
  "pharmacy",
  "provider_contact",
  "emergency",
  "payments",
  "minors_family_support"
].forEach(domain => {
  assert(contract.MEDICAL_RECORD_FHIR_RESTRICTED_DOMAINS.includes(domain), `contract must include restricted domain ${domain}.`);
  assert(doc.includes(domain), `doc must include restricted domain ${domain}.`);
});

const defaults = contract.MEDICAL_RECORD_FHIR_NO_EXECUTION_DEFAULTS;
[
  "fhirConnectorEnabled",
  "ehrAccessEnabled",
  "smartOnFhirEnabled",
  "oauthTokenExchangeEnabled",
  "medicalRecordRetrievalEnabled",
  "medicalRecordStorageEnabled",
  "medicalRecordSharingEnabled",
  "clinicalSummarizationEnabled",
  "diagnosticInterpretationEnabled",
  "standardUserRecordAccessAllowed",
  "executionAllowed",
  "liveActionEnabled"
].forEach(field => {
  assert(defaults[field] === false, `${field} must default false.`);
  assert(contract.MEDICAL_RECORD_FHIR_READINESS_CONTRACT[field] === false, `${field} must be false on the default contract.`);
});

const sample = contract.createMedicalRecordFhirReadinessContract({
  actionType: "retrieve_record",
  fhirConnectorEnabled: true,
  smartOnFhirEnabled: true,
  medicalRecordRetrievalEnabled: true,
  executionAllowed: true
});

assert(sample.actionType === "retrieve_record", "recognized action type may be represented.");
assert(sample.phase === "58", "sample phase must remain 58.");
assert(sample.readinessStatus === "blocked", "sample readiness remains blocked.");
assert(sample.riskTier === "restricted", "sample risk tier remains restricted.");
assert(sample.fhirConnectorEnabled === false, "factory must force FHIR connector disabled.");
assert(sample.smartOnFhirEnabled === false, "factory must force SMART-on-FHIR disabled.");
assert(sample.medicalRecordRetrievalEnabled === false, "factory must force record retrieval disabled.");
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
  "authorizeFhir(",
  "exchangeToken(",
  "retrieveMedicalRecord(",
  "shareMedicalRecord(",
  "openPatientPortal("
].forEach(forbidden => {
  assert(!contractSource.includes(forbidden), `contract module must not include runtime behavior: ${forbidden}`);
});

[
  "nexus-medical-record-fhir-readiness-contract.js",
  "NexusMedicalRecordFhirReadinessContract",
  "medicalRecordFhirReadiness",
  "MEDICAL_RECORD_FHIR_READINESS_CONTRACT"
].forEach(runtimeHook => {
  assert(!index.includes(runtimeHook), `index.html must not load ${runtimeHook}.`);
  assert(!app.includes(runtimeHook), `app.js must not consume ${runtimeHook}.`);
  assert(!server.includes(runtimeHook), `server.js must not consume ${runtimeHook}.`);
});

assert(packageData.scripts["qa:nexus-medical-record-fhir-readiness-contract"] === "node scripts/nexus-medical-record-fhir-readiness-contract-qa.js", "package.json must expose qa:nexus-medical-record-fhir-readiness-contract.");
assert(qaSuite.includes("scripts/nexus-medical-record-fhir-readiness-contract-qa.js"), "qa-suite.js must include medical record/FHIR readiness QA.");

console.log("[nexus-medical-record-fhir-readiness-contract-qa] passed");
