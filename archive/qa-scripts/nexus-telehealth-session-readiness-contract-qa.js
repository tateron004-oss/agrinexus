const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  doc: path.join(root, "docs", "NEXUS_TELEHEALTH_SESSION_READINESS_CONTRACT_PHASE_53.md"),
  contract: path.join(root, "public", "nexus-telehealth-session-readiness-contract.js"),
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
    console.error(`[nexus-telehealth-session-readiness-contract-qa] ${message}`);
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

assert(doc.includes("Phase: 53"), "doc must identify Phase 53.");
assert(doc.includes("inert readiness contract"), "doc must state this phase is inert.");
assert(doc.includes("Camera and microphone access must remain explicit"), "doc must guard media consent.");
assert(doc.includes("No live provider session has been opened."), "doc must include safe no-live-session copy.");

[
  "live telehealth sessions",
  "video room creation",
  "camera activation",
  "microphone activation",
  "provider session APIs",
  "external telehealth links",
  "waiting-room entry",
  "provider connection claims",
  "medical diagnosis",
  "emergency dispatch",
  "background media capture",
  "Standard User runtime telehealth execution behavior",
  "storage or network side effects",
  "backend behavior changes"
].forEach(boundary => {
  assert(doc.includes(boundary), `doc must document inactive boundary ${boundary}.`);
});

[
  "resolvedRequester",
  "resolvedPatient",
  "visibleProviderDisplay",
  "visibleSessionPurpose",
  "providerAvailabilityState",
  "sessionAvailabilityState",
  "appointmentOrEncounterReference",
  "cameraConsent",
  "microphoneConsent",
  "privacyConsent",
  "languagePreference",
  "accessibilityNeeds",
  "identityOrRoleState",
  "explicitUserApproval",
  "providerConfirmationState",
  "cancellationPath",
  "auditEvent",
  "noBackgroundMediaCapture",
  "noSilentRoomJoin",
  "noHiddenProviderConnection"
].forEach(precondition => {
  assert(contract.TELEHEALTH_SESSION_REQUIRED_PRECONDITIONS.includes(precondition), `contract must include precondition ${precondition}.`);
  assert(doc.includes(precondition), `doc must include precondition ${precondition}.`);
});

[
  "healthcare",
  "telehealth",
  "emergency",
  "minors_family_support",
  "regulated_records",
  "pharmacy",
  "payments",
  "transportation_dispatch"
].forEach(domain => {
  assert(contract.TELEHEALTH_SESSION_RESTRICTED_DOMAINS.includes(domain), `contract must include restricted domain ${domain}.`);
  assert(doc.includes(domain), `doc must include restricted domain ${domain}.`);
});

const defaults = contract.TELEHEALTH_SESSION_NO_EXECUTION_DEFAULTS;
[
  "liveRoomEnabled",
  "sessionCreationEnabled",
  "sessionJoinEnabled",
  "sessionReconnectEnabled",
  "cameraActivationAllowed",
  "microphoneActivationAllowed",
  "providerApiEnabled",
  "externalLinkOpenAllowed",
  "backgroundMediaCaptureAllowed",
  "silentRoomJoinAllowed",
  "hiddenProviderConnectionAllowed",
  "standardUserTelehealthExecutionAllowed",
  "providerConnectionClaimAllowed",
  "diagnosisAllowed",
  "emergencyDispatchAllowed",
  "executionAllowed",
  "liveActionEnabled"
].forEach(field => {
  assert(defaults[field] === false, `${field} must default false.`);
  assert(contract.TELEHEALTH_SESSION_READINESS_CONTRACT[field] === false, `${field} must be false on the default contract.`);
});

const sample = contract.createTelehealthSessionReadinessContract({
  actionType: "join_session",
  liveRoomEnabled: true,
  sessionJoinEnabled: true,
  cameraActivationAllowed: true,
  microphoneActivationAllowed: true,
  executionAllowed: true
});

assert(sample.actionType === "join_session", "recognized action type may be represented.");
assert(sample.phase === "53", "sample phase must remain 53.");
assert(sample.readinessStatus === "blocked", "sample readiness remains blocked.");
assert(sample.riskTier === "high", "sample risk tier remains high.");
assert(sample.liveRoomEnabled === false, "factory must force live room disabled.");
assert(sample.sessionJoinEnabled === false, "factory must force session join disabled.");
assert(sample.cameraActivationAllowed === false, "factory must force camera activation disabled.");
assert(sample.microphoneActivationAllowed === false, "factory must force microphone activation disabled.");
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
  "navigator.mediaDevices",
  "getUserMedia",
  "window.location",
  "document.location",
  "addEventListener",
  "onclick",
  "setInterval",
  "setTimeout",
  "createRoom(",
  "joinRoom(",
  "openTelehealth",
  "dispatchEmergency",
  "diagnose"
].forEach(forbidden => {
  assert(!contractSource.includes(forbidden), `contract module must not include runtime behavior: ${forbidden}`);
});

[
  "nexus-telehealth-session-readiness-contract.js",
  "NexusTelehealthSessionReadinessContract",
  "telehealthSessionReadiness",
  "TELEHEALTH_SESSION_READINESS_CONTRACT"
].forEach(runtimeHook => {
  assert(!index.includes(runtimeHook), `index.html must not load ${runtimeHook}.`);
  assert(!app.includes(runtimeHook), `app.js must not consume ${runtimeHook}.`);
  assert(!server.includes(runtimeHook), `server.js must not consume ${runtimeHook}.`);
});

assert(packageData.scripts["qa:nexus-telehealth-session-readiness-contract"] === "node scripts/nexus-telehealth-session-readiness-contract-qa.js", "package.json must expose qa:nexus-telehealth-session-readiness-contract.");
assert(qaSuite.includes("scripts/nexus-telehealth-session-readiness-contract-qa.js"), "qa-suite.js must include telehealth session readiness QA.");

console.log("[nexus-telehealth-session-readiness-contract-qa] passed");
