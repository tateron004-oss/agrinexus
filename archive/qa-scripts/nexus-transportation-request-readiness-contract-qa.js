const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  doc: path.join(root, "docs", "NEXUS_TRANSPORTATION_REQUEST_READINESS_CONTRACT_PHASE_55.md"),
  contract: path.join(root, "public", "nexus-transportation-request-readiness-contract.js"),
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
    console.error(`[nexus-transportation-request-readiness-contract-qa] ${message}`);
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

assert(doc.includes("Phase: 55"), "doc must identify Phase 55.");
assert(doc.includes("inert readiness contract"), "doc must state this phase is inert.");
assert(doc.includes("No ride has been requested."), "doc must include safe no-request copy.");
assert(doc.includes("Location permission alone does not authorize booking or dispatch."), "doc must separate location and booking consent.");

[
  "live ride requests",
  "transportation dispatch",
  "driver contact",
  "provider booking APIs",
  "location sharing",
  "background tracking",
  "fare/payment processing",
  "external transportation links",
  "emergency transport dispatch",
  "Standard User runtime transportation execution behavior",
  "storage or network side effects",
  "backend behavior changes"
].forEach(boundary => {
  assert(doc.includes(boundary), `doc must document inactive boundary ${boundary}.`);
});

[
  "resolvedRequester",
  "visibleRiderDisplay",
  "pickupLocation",
  "dropoffLocation",
  "transportPurposePreview",
  "providerDisplay",
  "providerAvailabilityState",
  "bookingWindow",
  "fareOrCostDisclosure",
  "locationConsent",
  "bookingConsent",
  "permissionState",
  "auditEvent",
  "explicitUserApproval",
  "providerConfirmationState",
  "cancellationPath",
  "noBackgroundTracking",
  "noSilentDispatch",
  "noHiddenLocationSharing"
].forEach(precondition => {
  assert(contract.TRANSPORTATION_REQUEST_REQUIRED_PRECONDITIONS.includes(precondition), `contract must include precondition ${precondition}.`);
  assert(doc.includes(precondition), `doc must include precondition ${precondition}.`);
});

[
  "healthcare_transport",
  "emergency",
  "payments",
  "location",
  "minors_family_support",
  "marketplace_transactions",
  "regulated_records"
].forEach(domain => {
  assert(contract.TRANSPORTATION_REQUEST_RESTRICTED_DOMAINS.includes(domain), `contract must include restricted domain ${domain}.`);
  assert(doc.includes(domain), `doc must include restricted domain ${domain}.`);
});

const defaults = contract.TRANSPORTATION_REQUEST_NO_EXECUTION_DEFAULTS;
[
  "transportRequestEnabled",
  "providerBookingApiEnabled",
  "dispatchEnabled",
  "driverContactAllowed",
  "locationSharingAllowed",
  "backgroundTrackingAllowed",
  "farePaymentAllowed",
  "externalLinkOpenAllowed",
  "silentDispatchAllowed",
  "hiddenLocationSharingAllowed",
  "standardUserTransportExecutionAllowed",
  "executionAllowed",
  "liveActionEnabled"
].forEach(field => {
  assert(defaults[field] === false, `${field} must default false.`);
  assert(contract.TRANSPORTATION_REQUEST_READINESS_CONTRACT[field] === false, `${field} must be false on the default contract.`);
});

const sample = contract.createTransportationRequestReadinessContract({
  actionType: "request_transport",
  transportRequestEnabled: true,
  dispatchEnabled: true,
  locationSharingAllowed: true,
  farePaymentAllowed: true,
  executionAllowed: true
});

assert(sample.actionType === "request_transport", "recognized action type may be represented.");
assert(sample.phase === "55", "sample phase must remain 55.");
assert(sample.readinessStatus === "blocked", "sample readiness remains blocked.");
assert(sample.riskTier === "high", "sample risk tier remains high.");
assert(sample.transportRequestEnabled === false, "factory must force transport request disabled.");
assert(sample.dispatchEnabled === false, "factory must force dispatch disabled.");
assert(sample.locationSharingAllowed === false, "factory must force location sharing disabled.");
assert(sample.farePaymentAllowed === false, "factory must force fare payment disabled.");
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
  "navigator.geolocation",
  "watchPosition",
  "window.location",
  "document.location",
  "addEventListener",
  "onclick",
  "setInterval",
  "setTimeout",
  "requestRide(",
  "dispatchTransport(",
  "contactDriver(",
  "processPayment(",
  "openTransport"
].forEach(forbidden => {
  assert(!contractSource.includes(forbidden), `contract module must not include runtime behavior: ${forbidden}`);
});

[
  "nexus-transportation-request-readiness-contract.js",
  "NexusTransportationRequestReadinessContract",
  "transportationRequestReadiness",
  "TRANSPORTATION_REQUEST_READINESS_CONTRACT"
].forEach(runtimeHook => {
  assert(!index.includes(runtimeHook), `index.html must not load ${runtimeHook}.`);
  assert(!app.includes(runtimeHook), `app.js must not consume ${runtimeHook}.`);
  assert(!server.includes(runtimeHook), `server.js must not consume ${runtimeHook}.`);
});

assert(packageData.scripts["qa:nexus-transportation-request-readiness-contract"] === "node scripts/nexus-transportation-request-readiness-contract-qa.js", "package.json must expose qa:nexus-transportation-request-readiness-contract.");
assert(qaSuite.includes("scripts/nexus-transportation-request-readiness-contract-qa.js"), "qa-suite.js must include transportation request readiness QA.");

console.log("[nexus-transportation-request-readiness-contract-qa] passed");
