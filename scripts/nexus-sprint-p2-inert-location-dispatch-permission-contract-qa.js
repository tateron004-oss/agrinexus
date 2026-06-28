const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

const docName = "NEXUS_SPRINT_P2_INERT_LOCATION_DISPATCH_PERMISSION_CONTRACT.md";
const moduleName = "nexus-location-dispatch-permission-contract.js";
const qaName = "nexus-sprint-p2-inert-location-dispatch-permission-contract-qa.js";

assert(exists("docs", docName), "P2 doc must exist.");
assert(exists("public", moduleName), "P2 contract module must exist.");
assert(exists("scripts", qaName), "P2 QA must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const contract = require("../public/nexus-location-dispatch-permission-contract.js");

[
  "Sprint P2",
  "Inert Location/Dispatch Permission Contract",
  "location-intent",
  "dispatch-intent",
  "field-agent-dispatch-intent",
  "transportation-pickup-intent",
  "mobile-clinic-visit-intent",
  "service-area-review",
  "route-review",
  "farm-location-sharing-review",
  "care-access-location-review",
  "blocked-live-location-dispatch",
  "`locationSharingConsentRequired: true`",
  "`providerConfirmationRequired: true`",
  "`userApprovalRequired: true`",
  "`finalExecutionGateRequired: true`",
  "`executionAuthority: false`",
  "geolocation",
  "location-sharing",
  "map-execution",
  "provider-dispatch",
  "transportation-dispatch",
  "mobile-clinic-dispatch",
  "backend-write",
  "pending-action",
  "must not mutate DOM",
  "not loaded by `public/index.html`, `public/app.js`, or `server.js`"
].forEach(term => assert(doc.includes(term), `P2 doc must include: ${term}`));

assert.equal(typeof contract.isSafeLocationDispatchIntent, "function", "P2 validator must exist.");
assert.equal(typeof contract.validateLocationDispatchIntent, "function", "P2 validation details must exist.");
assert.equal(typeof contract.createLocationDispatchIntent, "function", "P2 creator must exist.");

const valid = contract.createLocationDispatchIntent({
  locationDispatchIntentId: "location-p2-farm-review",
  locationDispatchIntentType: "location-intent",
  targetIdentityResolutionId: "target-visible-farm",
  targetDisplayName: "Farm location",
  requestedLocationDisplay: "general farm area only",
  locationPrecisionRequirement: "precise location requires future consent",
  dispatchCategory: "farm-location-sharing-review",
  dispatchPurpose: "Review possible farm support location need.",
  providerOrServiceRequirement: "provider/service must be configured later",
  consentRequirement: "explicit location consent and final gate required",
  dryRunPacket: "dry-run only; no geolocation or dispatch",
  riskTier: "high",
  evidenceRequirement: "visible target, consent, provider requirement, audit-ready state",
  sourcePacketRequirement: "source packet required before future location or dispatch action",
  safeUseNotes: "Review-only location/dispatch intent packet.",
  limitations: "Does not request geolocation, share location, dispatch, contact providers, or create pending actions."
});

assert.equal(valid.validation.ok, true, "P2 valid intent must validate.");
assert.equal(contract.isSafeLocationDispatchIntent(valid.intent), true, "P2 safe validator must accept valid inert intent.");
assert.equal(valid.validation.executionAllowed, false, "P2 validation must never allow execution.");
assert.equal(valid.intent.locationSharingConsentRequired, true, "P2 must require location consent.");
assert.equal(valid.intent.providerConfirmationRequired, true, "P2 must require provider confirmation.");
assert.equal(valid.intent.userApprovalRequired, true, "P2 must require user approval.");
assert.equal(valid.intent.finalExecutionGateRequired, true, "P2 must require final execution gate.");
assert.equal(valid.intent.executionAuthority, false, "P2 must preserve executionAuthority false.");

const invalid = Object.assign({}, valid.intent, { executionAuthority: true });
assert.equal(contract.isSafeLocationDispatchIntent(invalid), false, "P2 must reject execution authority.");

contract.BLOCKED_EXECUTION_CHANNELS.forEach(channel => {
  assert(valid.intent.blockedExecutionChannels.includes(channel), `P2 valid intent must block ${channel}.`);
});

[
  "fetch(",
  "XMLHttpRequest",
  "localStorage",
  "sessionStorage",
  "indexedDB",
  "navigator.geolocation",
  "mediaDevices",
  "window.open",
  "location.href",
  "sendBeacon",
  "setItem",
  "writeFile",
  "appendFile",
  "addEventListener",
  "createElement",
  "innerHTML",
  "db.json"
].forEach(term => assert(!moduleSource.includes(term), `P2 module must not include runtime side-effect or DOM API: ${term}`));

[index, app, server].forEach((source, indexNumber) => {
  const label = ["index.html", "app.js", "server.js"][indexNumber];
  assert(!source.includes(moduleName), `${label} must not load the P2 module.`);
});

const alias = "qa:nexus-sprint-p2-inert-location-dispatch-permission-contract";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include P2 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-p1-location-dispatch-product-boundary-qa.js"), "P2 requires P1 QA to remain in qa-suite.");

console.log("[nexus-sprint-p2-inert-location-dispatch-permission-contract-qa] passed");
