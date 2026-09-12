const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  doc: path.join(root, "docs", "NEXUS_EMERGENCY_HANDOFF_READINESS_CONTRACT_PHASE_59.md"),
  contract: path.join(root, "public", "nexus-emergency-handoff-readiness-contract.js"),
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
    console.error(`[nexus-emergency-handoff-readiness-contract-qa] ${message}`);
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

assert(doc.includes("Phase: 59"), "doc must identify Phase 59.");
assert(doc.includes("inert readiness contract"), "doc must state this phase is inert.");
assert(doc.includes("No emergency service has been contacted or dispatched by Nexus."), "doc must include safe no-dispatch copy.");
assert(doc.includes("Immediate Danger Boundary"), "doc must define immediate danger boundary.");

[
  "live emergency dispatch",
  "emergency partner APIs",
  "ambulance or responder contact",
  "family or caregiver contact",
  "emergency location sharing",
  "emergency transport dispatch",
  "emergency medical record sharing",
  "telehealth escalation execution",
  "camera or microphone activation",
  "Standard User runtime emergency execution behavior",
  "storage or network side effects",
  "backend behavior changes"
].forEach(boundary => {
  assert(doc.includes(boundary), `doc must document inactive boundary ${boundary}.`);
});

[
  "recognizedEmergencyRegion",
  "approvedEmergencyPartner",
  "legalRegionalApproval",
  "verifiedUserIdentityWhenRequired",
  "visibleEmergencyType",
  "visibleActionType",
  "visibleRecipientOrAgency",
  "visibleLocationSource",
  "locationPermissionState",
  "medicalDataSharingScope",
  "consentOrLegalBasis",
  "providerAvailabilityState",
  "responderConfirmationRequirement",
  "auditEvent",
  "explicitFinalUserApprovalWhenSafe",
  "immediateDangerFallback",
  "cancellationPathWhenApplicable",
  "noSilentDispatch",
  "noHiddenLocationSharing",
  "noUnsupportedResponderContact"
].forEach(precondition => {
  assert(contract.EMERGENCY_HANDOFF_REQUIRED_PRECONDITIONS.includes(precondition), `contract must include precondition ${precondition}.`);
  assert(doc.includes(precondition), `doc must include precondition ${precondition}.`);
});

[
  "emergency",
  "emergency_dispatch",
  "healthcare",
  "telehealth",
  "location",
  "transportation_dispatch",
  "medical_records",
  "provider_contact",
  "caregiver_contact",
  "payments",
  "minors_family_support"
].forEach(domain => {
  assert(contract.EMERGENCY_HANDOFF_RESTRICTED_DOMAINS.includes(domain), `contract must include restricted domain ${domain}.`);
  assert(doc.includes(domain), `doc must include restricted domain ${domain}.`);
});

const defaults = contract.EMERGENCY_HANDOFF_NO_EXECUTION_DEFAULTS;
[
  "emergencyDispatchEnabled",
  "emergencyPartnerApiEnabled",
  "responderContactEnabled",
  "caregiverContactEnabled",
  "locationSharingEnabled",
  "transportDispatchEnabled",
  "medicalRecordSharingEnabled",
  "telehealthEscalationEnabled",
  "cameraOrMicrophoneEnabled",
  "standardUserEmergencyExecutionAllowed",
  "executionAllowed",
  "liveActionEnabled"
].forEach(field => {
  assert(defaults[field] === false, `${field} must default false.`);
  assert(contract.EMERGENCY_HANDOFF_READINESS_CONTRACT[field] === false, `${field} must be false on the default contract.`);
});

const sample = contract.createEmergencyHandoffReadinessContract({
  actionType: "dispatch_emergency_help",
  emergencyDispatchEnabled: true,
  emergencyPartnerApiEnabled: true,
  locationSharingEnabled: true,
  executionAllowed: true
});

assert(sample.actionType === "dispatch_emergency_help", "recognized action type may be represented.");
assert(sample.phase === "59", "sample phase must remain 59.");
assert(sample.readinessStatus === "blocked", "sample readiness remains blocked.");
assert(sample.riskTier === "restricted", "sample risk tier remains restricted.");
assert(sample.emergencyDispatchEnabled === false, "factory must force emergency dispatch disabled.");
assert(sample.emergencyPartnerApiEnabled === false, "factory must force emergency partner API disabled.");
assert(sample.locationSharingEnabled === false, "factory must force location sharing disabled.");
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
  "dispatchEmergency(",
  "callResponder(",
  "shareEmergencyLocation(",
  "openEmergencyProvider("
].forEach(forbidden => {
  assert(!contractSource.includes(forbidden), `contract module must not include runtime behavior: ${forbidden}`);
});

[
  "nexus-emergency-handoff-readiness-contract.js",
  "NexusEmergencyHandoffReadinessContract",
  "emergencyHandoffReadiness",
  "EMERGENCY_HANDOFF_READINESS_CONTRACT"
].forEach(runtimeHook => {
  assert(!index.includes(runtimeHook), `index.html must not load ${runtimeHook}.`);
  assert(!app.includes(runtimeHook), `app.js must not consume ${runtimeHook}.`);
  assert(!server.includes(runtimeHook), `server.js must not consume ${runtimeHook}.`);
});

assert(packageData.scripts["qa:nexus-emergency-handoff-readiness-contract"] === "node scripts/nexus-emergency-handoff-readiness-contract-qa.js", "package.json must expose qa:nexus-emergency-handoff-readiness-contract.");
assert(qaSuite.includes("scripts/nexus-emergency-handoff-readiness-contract-qa.js"), "qa-suite.js must include emergency handoff readiness QA.");

console.log("[nexus-emergency-handoff-readiness-contract-qa] passed");
