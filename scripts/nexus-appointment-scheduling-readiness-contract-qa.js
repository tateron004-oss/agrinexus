const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  doc: path.join(root, "docs", "NEXUS_APPOINTMENT_SCHEDULING_READINESS_CONTRACT_PHASE_52.md"),
  contract: path.join(root, "public", "nexus-appointment-scheduling-readiness-contract.js"),
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
    console.error(`[nexus-appointment-scheduling-readiness-contract-qa] ${message}`);
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

assert(doc.includes("Phase: 52"), "doc must identify Phase 52.");
assert(doc.includes("inert readiness contract"), "doc must state this phase is inert.");
assert(doc.includes("provider confirmation"), "doc must require provider confirmation.");
assert(doc.includes("explicit user approval"), "doc must require explicit user approval.");
assert(doc.includes("No appointment has been booked."), "doc must include safe no-booking copy.");

[
  "live appointment scheduling",
  "provider calendar writes",
  "clinic scheduling APIs",
  "telehealth scheduling APIs",
  "pharmacy appointment or refill scheduling",
  "transportation dispatch or pickup scheduling",
  "marketplace meeting scheduling",
  "emergency response scheduling",
  "external calendar writes",
  "background scheduling",
  "silent appointment holds",
  "Standard User runtime scheduling behavior",
  "storage or network side effects",
  "backend behavior changes"
].forEach(boundary => {
  assert(doc.includes(boundary), `doc must document inactive boundary ${boundary}.`);
});

[
  "resolvedRequester",
  "resolvedPatientOrParticipant",
  "visibleProviderDisplay",
  "visibleAppointmentType",
  "visiblePurposePreview",
  "candidateDateTime",
  "timezone",
  "locationOrVisitMode",
  "languagePreference",
  "accessibilityNeeds",
  "consentState",
  "permissionState",
  "providerAvailabilityState",
  "providerConfirmationState",
  "explicitUserApproval",
  "cancellationPath",
  "auditEvent",
  "noBackgroundScheduling",
  "noSilentScheduling",
  "noHiddenProviderWrite"
].forEach(precondition => {
  assert(contract.APPOINTMENT_SCHEDULING_REQUIRED_PRECONDITIONS.includes(precondition), `contract must include precondition ${precondition}.`);
  assert(doc.includes(precondition), `doc must include precondition ${precondition}.`);
});

[
  "healthcare",
  "telehealth",
  "pharmacy",
  "transportation_dispatch",
  "emergency",
  "payments",
  "marketplace_transactions",
  "minors_family_support",
  "regulated_records"
].forEach(domain => {
  assert(contract.APPOINTMENT_SCHEDULING_RESTRICTED_DOMAINS.includes(domain), `contract must include restricted domain ${domain}.`);
  assert(doc.includes(domain), `doc must include restricted domain ${domain}.`);
});

const defaults = contract.APPOINTMENT_SCHEDULING_NO_EXECUTION_DEFAULTS;
[
  "schedulingEnabled",
  "providerApiEnabled",
  "calendarWriteEnabled",
  "appointmentHoldEnabled",
  "appointmentConfirmEnabled",
  "appointmentCancelEnabled",
  "appointmentRescheduleEnabled",
  "backgroundSchedulingEnabled",
  "silentSchedulingEnabled",
  "standardUserSchedulingAllowed",
  "adminBypassAllowed",
  "executionAllowed",
  "liveActionEnabled"
].forEach(field => {
  assert(defaults[field] === false, `${field} must default false.`);
  assert(contract.APPOINTMENT_SCHEDULING_READINESS_CONTRACT[field] === false, `${field} must be false on the default contract.`);
});

const sample = contract.createAppointmentSchedulingReadinessContract({
  actionType: "schedule",
  providerType: "clinic",
  schedulingEnabled: true,
  providerApiEnabled: true,
  executionAllowed: true
});

assert(sample.actionType === "schedule", "recognized action type may be represented.");
assert(sample.providerType === "clinic", "recognized provider type may be represented.");
assert(sample.phase === "52", "sample phase must remain 52.");
assert(sample.readinessStatus === "blocked", "sample readiness remains blocked.");
assert(sample.riskTier === "high", "sample risk tier remains high.");
assert(sample.schedulingEnabled === false, "factory must force scheduling disabled.");
assert(sample.providerApiEnabled === false, "factory must force provider API disabled.");
assert(sample.executionAllowed === false, "factory must force execution disabled.");
assert(sample.adminBypassAllowed === false, "factory must force admin bypass disabled.");

[
  "fetch(",
  "XMLHttpRequest",
  "axios",
  "EventSource",
  "WebSocket",
  "localStorage",
  "sessionStorage",
  "indexedDB",
  "navigator.geolocation",
  "navigator.mediaDevices",
  "window.location",
  "document.location",
  "addEventListener",
  "onclick",
  "setInterval",
  "setTimeout",
  "scheduleAppointment",
  "bookAppointment",
  "cancelAppointment",
  "rescheduleAppointment",
  "writeCalendar",
  "providerApi(",
  "dispatchEmergency",
  "processPayment"
].forEach(forbidden => {
  assert(!contractSource.includes(forbidden), `contract module must not include runtime behavior: ${forbidden}`);
});

[
  "nexus-appointment-scheduling-readiness-contract.js",
  "NexusAppointmentSchedulingReadinessContract",
  "appointmentSchedulingReadiness",
  "APPOINTMENT_SCHEDULING_READINESS_CONTRACT"
].forEach(runtimeHook => {
  assert(!index.includes(runtimeHook), `index.html must not load ${runtimeHook}.`);
  assert(!app.includes(runtimeHook), `app.js must not consume ${runtimeHook}.`);
  assert(!server.includes(runtimeHook), `server.js must not consume ${runtimeHook}.`);
});

assert(packageData.scripts["qa:nexus-appointment-scheduling-readiness-contract"] === "node scripts/nexus-appointment-scheduling-readiness-contract-qa.js", "package.json must expose qa:nexus-appointment-scheduling-readiness-contract.");
assert(qaSuite.includes("scripts/nexus-appointment-scheduling-readiness-contract-qa.js"), "qa-suite.js must include appointment scheduling readiness QA.");

console.log("[nexus-appointment-scheduling-readiness-contract-qa] passed");
