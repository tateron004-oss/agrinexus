const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const paths = {
  doc: path.join(root, "docs", "NEXUS_LOCATION_SHARING_READINESS_CONTRACT_PHASE_56.md"),
  contract: path.join(root, "public", "nexus-location-sharing-readiness-contract.js"),
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
    console.error(`[nexus-location-sharing-readiness-contract-qa] ${message}`);
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

assert(doc.includes("Phase: 56"), "doc must identify Phase 56.");
assert(doc.includes("inert readiness contract"), "doc must state this phase is inert.");
assert(doc.includes("No location has been shared."), "doc must include safe no-sharing copy.");
assert(doc.includes("Location permission is not universal permission."), "doc must define purpose-specific consent.");

[
  "browser geolocation",
  "device location APIs",
  "location sharing",
  "background tracking",
  "live tracking",
  "map-provider location transmission",
  "transportation location handoff",
  "healthcare location handoff",
  "emergency dispatch location handoff",
  "marketplace location sharing",
  "external navigation",
  "Standard User runtime location-sharing behavior",
  "storage or network side effects",
  "backend behavior changes"
].forEach(boundary => {
  assert(doc.includes(boundary), `doc must document inactive boundary ${boundary}.`);
});

[
  "resolvedRequester",
  "locationPurpose",
  "locationRecipientOrDestination",
  "locationPrecision",
  "sharingDuration",
  "providerOrSurfaceDisplay",
  "permissionState",
  "purposeConsent",
  "auditEvent",
  "explicitUserApproval",
  "cancellationPath",
  "revocationPath",
  "noBackgroundTracking",
  "noSilentLocationRequest",
  "noHiddenLocationTransmission"
].forEach(precondition => {
  assert(contract.LOCATION_SHARING_REQUIRED_PRECONDITIONS.includes(precondition), `contract must include precondition ${precondition}.`);
  assert(doc.includes(precondition), `doc must include precondition ${precondition}.`);
});

[
  "healthcare",
  "emergency",
  "transportation_dispatch",
  "marketplace_transactions",
  "minors_family_support",
  "regulated_records",
  "payments",
  "account_identity"
].forEach(domain => {
  assert(contract.LOCATION_SHARING_RESTRICTED_DOMAINS.includes(domain), `contract must include restricted domain ${domain}.`);
  assert(doc.includes(domain), `doc must include restricted domain ${domain}.`);
});

const defaults = contract.LOCATION_SHARING_NO_EXECUTION_DEFAULTS;
[
  "locationRequestEnabled",
  "locationSharingEnabled",
  "backgroundTrackingEnabled",
  "liveTrackingEnabled",
  "browserGeolocationEnabled",
  "deviceLocationEnabled",
  "providerLocationHandoffEnabled",
  "externalNavigationAllowed",
  "silentLocationRequestAllowed",
  "hiddenLocationTransmissionAllowed",
  "standardUserLocationSharingAllowed",
  "executionAllowed",
  "liveActionEnabled"
].forEach(field => {
  assert(defaults[field] === false, `${field} must default false.`);
  assert(contract.LOCATION_SHARING_READINESS_CONTRACT[field] === false, `${field} must be false on the default contract.`);
});

const sample = contract.createLocationSharingReadinessContract({
  actionType: "share_location",
  locationRequestEnabled: true,
  locationSharingEnabled: true,
  backgroundTrackingEnabled: true,
  browserGeolocationEnabled: true,
  executionAllowed: true
});

assert(sample.actionType === "share_location", "recognized action type may be represented.");
assert(sample.phase === "56", "sample phase must remain 56.");
assert(sample.readinessStatus === "blocked", "sample readiness remains blocked.");
assert(sample.riskTier === "sensitive", "sample risk tier remains sensitive.");
assert(sample.locationRequestEnabled === false, "factory must force location request disabled.");
assert(sample.locationSharingEnabled === false, "factory must force location sharing disabled.");
assert(sample.backgroundTrackingEnabled === false, "factory must force background tracking disabled.");
assert(sample.browserGeolocationEnabled === false, "factory must force browser geolocation disabled.");
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
  "getCurrentPosition",
  "watchPosition",
  "window.location",
  "document.location",
  "addEventListener",
  "onclick",
  "setInterval",
  "setTimeout",
  "shareLocation(",
  "sendLocation(",
  "trackLocation(",
  "openMapProvider"
].forEach(forbidden => {
  assert(!contractSource.includes(forbidden), `contract module must not include runtime behavior: ${forbidden}`);
});

[
  "nexus-location-sharing-readiness-contract.js",
  "NexusLocationSharingReadinessContract",
  "locationSharingReadiness",
  "LOCATION_SHARING_READINESS_CONTRACT"
].forEach(runtimeHook => {
  assert(!index.includes(runtimeHook), `index.html must not load ${runtimeHook}.`);
  assert(!app.includes(runtimeHook), `app.js must not consume ${runtimeHook}.`);
  assert(!server.includes(runtimeHook), `server.js must not consume ${runtimeHook}.`);
});

assert(packageData.scripts["qa:nexus-location-sharing-readiness-contract"] === "node scripts/nexus-location-sharing-readiness-contract-qa.js", "package.json must expose qa:nexus-location-sharing-readiness-contract.");
assert(qaSuite.includes("scripts/nexus-location-sharing-readiness-contract-qa.js"), "qa-suite.js must include location sharing readiness QA.");

console.log("[nexus-location-sharing-readiness-contract-qa] passed");
