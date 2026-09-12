const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  doc: path.join(root, "docs", "NEXUS_PHARMACY_REFILL_HANDOFF_READINESS_CONTRACT_PHASE_54.md"),
  contract: path.join(root, "public", "nexus-pharmacy-refill-handoff-readiness-contract.js"),
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
    console.error(`[nexus-pharmacy-refill-handoff-readiness-contract-qa] ${message}`);
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

assert(doc.includes("Phase: 54"), "doc must identify Phase 54.");
assert(doc.includes("inert readiness contract"), "doc must state this phase is inert.");
assert(doc.includes("No refill has been submitted."), "doc must include safe no-submission copy.");
assert(doc.includes("Nexus does not prescribe or change medication."), "doc must include no-prescribing copy.");

[
  "live pharmacy refill submission",
  "eRx submission",
  "pharmacy provider APIs",
  "prescription creation or prescribing",
  "medication changes",
  "medical advice or diagnosis",
  "patient record access",
  "automatic provider or pharmacy contact",
  "insurance/payment processing",
  "external pharmacy links",
  "Standard User runtime pharmacy execution behavior",
  "storage or network side effects",
  "backend behavior changes"
].forEach(boundary => {
  assert(doc.includes(boundary), `doc must document inactive boundary ${boundary}.`);
});

[
  "resolvedRequester",
  "verifiedPatientIdentity",
  "patientConsent",
  "visiblePharmacyDisplay",
  "visibleMedicationSummary",
  "refillPurposePreview",
  "prescriberOrProviderReference",
  "pharmacyConnectorState",
  "eRxConnectorState",
  "permissionState",
  "complianceState",
  "auditEvent",
  "explicitUserApproval",
  "cancellationPath",
  "noPrescribing",
  "noMedicationChange",
  "noBackgroundSubmission",
  "noSilentPharmacyContact",
  "noHiddenPatientDataTransmission"
].forEach(precondition => {
  assert(contract.PHARMACY_REFILL_REQUIRED_PRECONDITIONS.includes(precondition), `contract must include precondition ${precondition}.`);
  assert(doc.includes(precondition), `doc must include precondition ${precondition}.`);
});

[
  "pharmacy",
  "healthcare",
  "regulated_records",
  "prescriptions",
  "payments",
  "insurance",
  "minors_family_support",
  "emergency"
].forEach(domain => {
  assert(contract.PHARMACY_REFILL_RESTRICTED_DOMAINS.includes(domain), `contract must include restricted domain ${domain}.`);
  assert(doc.includes(domain), `doc must include restricted domain ${domain}.`);
});

const defaults = contract.PHARMACY_REFILL_NO_EXECUTION_DEFAULTS;
[
  "refillSubmissionEnabled",
  "pharmacyApiEnabled",
  "eRxEnabled",
  "prescribingAllowed",
  "medicationChangeAllowed",
  "patientRecordAccessAllowed",
  "providerContactAllowed",
  "pharmacyContactAllowed",
  "paymentProcessingAllowed",
  "insuranceProcessingAllowed",
  "backgroundSubmissionAllowed",
  "silentPharmacyContactAllowed",
  "hiddenPatientDataTransmissionAllowed",
  "standardUserRefillExecutionAllowed",
  "executionAllowed",
  "liveActionEnabled"
].forEach(field => {
  assert(defaults[field] === false, `${field} must default false.`);
  assert(contract.PHARMACY_REFILL_HANDOFF_READINESS_CONTRACT[field] === false, `${field} must be false on the default contract.`);
});

const sample = contract.createPharmacyRefillHandoffReadinessContract({
  actionType: "submit_refill",
  refillSubmissionEnabled: true,
  pharmacyApiEnabled: true,
  eRxEnabled: true,
  prescribingAllowed: true,
  executionAllowed: true
});

assert(sample.actionType === "submit_refill", "recognized action type may be represented.");
assert(sample.phase === "54", "sample phase must remain 54.");
assert(sample.readinessStatus === "blocked", "sample readiness remains blocked.");
assert(sample.riskTier === "restricted", "sample risk tier remains restricted.");
assert(sample.refillSubmissionEnabled === false, "factory must force refill submission disabled.");
assert(sample.pharmacyApiEnabled === false, "factory must force pharmacy API disabled.");
assert(sample.eRxEnabled === false, "factory must force eRx disabled.");
assert(sample.prescribingAllowed === false, "factory must force prescribing disabled.");
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
  "submitRefill(",
  "sendPrescription(",
  "prescribe(",
  "contactPharmacy(",
  "processPayment(",
  "openPharmacy"
].forEach(forbidden => {
  assert(!contractSource.includes(forbidden), `contract module must not include runtime behavior: ${forbidden}`);
});

[
  "nexus-pharmacy-refill-handoff-readiness-contract.js",
  "NexusPharmacyRefillHandoffReadinessContract",
  "pharmacyRefillHandoffReadiness",
  "PHARMACY_REFILL_HANDOFF_READINESS_CONTRACT"
].forEach(runtimeHook => {
  assert(!index.includes(runtimeHook), `index.html must not load ${runtimeHook}.`);
  assert(!app.includes(runtimeHook), `app.js must not consume ${runtimeHook}.`);
  assert(!server.includes(runtimeHook), `server.js must not consume ${runtimeHook}.`);
});

assert(packageData.scripts["qa:nexus-pharmacy-refill-handoff-readiness-contract"] === "node scripts/nexus-pharmacy-refill-handoff-readiness-contract-qa.js", "package.json must expose qa:nexus-pharmacy-refill-handoff-readiness-contract.");
assert(qaSuite.includes("scripts/nexus-pharmacy-refill-handoff-readiness-contract-qa.js"), "qa-suite.js must include pharmacy refill handoff readiness QA.");

console.log("[nexus-pharmacy-refill-handoff-readiness-contract-qa] passed");
