const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  isSafeReadOnlySourceResult
} = require("../public/nexus-live-source-result-contract.js");
const shipment = require("../server/nexus-shipment-tracking-source-provider.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

const docName = "NEXUS_SPRINT_LIVE7_SHIPMENT_TRACKING_PROVIDER_READINESS.md";
const moduleName = "nexus-shipment-tracking-source-provider.js";
const qaName = "nexus-sprint-live7-shipment-tracking-provider-readiness-qa.js";

assert(exists("docs", docName), "LIVE7 doc must exist.");
assert(exists("server", moduleName), "LIVE7 provider module must exist.");
assert(exists("scripts", qaName), "LIVE7 QA script must exist.");

const doc = read("docs", docName);
const moduleSource = read("server", moduleName);
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

[
  "Nexus Sprint LIVE7",
  "Shipment Tracking Provider Readiness",
  "AfterShip",
  "EasyPost",
  "Shippo",
  "NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED=true",
  "NEXUS_SHIPMENT_TRACKING_PROVIDER_ENABLED=true",
  "NEXUS_SHIPMENT_TRACKING_PROVIDER_API_KEY",
  "redact tracking numbers",
  "provider-not-configured",
  "source-query-ready",
  "does not make network requests",
  "change delivery instructions",
  "contact carriers",
  "readOnly: true",
  "noExecutionRequired: true",
  "executionAuthority: false",
  "LIVE8 Readiness"
].forEach(term => assert(doc.includes(term), `LIVE7 doc must include: ${term}`));

[
  "buildShipmentTrackingQuery",
  "resolveShipmentTrackingProviderConfig",
  "buildMockShipmentTrackingResult",
  "buildShipmentProviderUnavailableResult",
  "getShipmentTrackingSourceResult"
].forEach(fn => assert.equal(typeof shipment[fn], "function", `LIVE7 module must export ${fn}`));

const query = shipment.buildShipmentTrackingQuery({ trackingNumber: "DHL1234567890", carrierHint: "DHL" });
assert.equal(query.trackingNumberPresent, true, "tracking query must detect tracking number presence.");
assert.equal(query.carrierHint, "DHL", "tracking query may preserve carrier hint.");
assert(!query.redactedTrackingReference.includes("DHL1234567890"), "tracking query must redact tracking number.");
assert.equal(query.canChangeDelivery, false, "tracking query must not allow delivery changes.");
assert.equal(query.canContactCarrier, false, "tracking query must not allow carrier contact.");
assert.equal(query.executionAuthority, false, "tracking query must not grant execution.");

assert.equal(shipment.resolveShipmentTrackingProviderConfig({}).providerMode, "fixture", "shipment provider must default to fixture.");
assert.equal(shipment.resolveShipmentTrackingProviderConfig({
  NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
  NEXUS_SHIPMENT_TRACKING_PROVIDER_ENABLED: "true"
}).providerMode, "mock", "shipment provider without key must stay mock.");
assert.equal(shipment.resolveShipmentTrackingProviderConfig({
  NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
  NEXUS_SHIPMENT_TRACKING_PROVIDER_ENABLED: "true",
  NEXUS_SHIPMENT_TRACKING_PROVIDER_API_KEY: "configured"
}).providerMode, "live", "shipment provider with flags/key may become live-ready.");

const missingNumber = shipment.getShipmentTrackingSourceResult({}, {});
assert.equal(isSafeReadOnlySourceResult(missingNumber), true, "missing tracking number result must remain safe.");
assert.equal(missingNumber.sourceStatus, "provider-required", "missing tracking number must request clarification.");
assert(missingNumber.resultSummary.includes("What tracking number"), "missing tracking number must ask concise clarification.");

const unavailable = shipment.getShipmentTrackingSourceResult({ trackingNumber: "DHL1234567890" }, {});
assert.equal(isSafeReadOnlySourceResult(unavailable), true, "unavailable shipment result must remain safe.");
assert.equal(unavailable.sourceStatus, "provider-not-configured", "disabled provider must return provider-not-configured.");

const mock = shipment.getShipmentTrackingSourceResult({ trackingNumber: "DHL1234567890" }, {
  NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
  NEXUS_SHIPMENT_TRACKING_PROVIDER_ENABLED: "true"
});
assert.equal(isSafeReadOnlySourceResult(mock), true, "mock shipment result must be safe.");
assert.equal(mock.providerMode, "mock", "missing key must produce mock mode.");
assert.equal(mock.sourceStatus, "source-result-available", "mock shipment result must be available.");
assert(!mock.query.includes("DHL1234567890"), "mock shipment query must redact tracking number.");
assert(mock.limitationNotes.includes("no live carrier lookup"), "mock shipment result must disclose no live lookup.");

const liveReady = shipment.getShipmentTrackingSourceResult({ trackingNumber: "DHL1234567890" }, {
  NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
  NEXUS_SHIPMENT_TRACKING_PROVIDER_ENABLED: "true",
  NEXUS_SHIPMENT_TRACKING_PROVIDER_API_KEY: "configured"
});
assert.equal(isSafeReadOnlySourceResult(liveReady), true, "live-ready shipment result must remain safe.");
assert.equal(liveReady.providerMode, "live", "configured provider may report live mode.");
assert.equal(liveReady.sourceStatus, "source-query-ready", "configured provider must be query-ready, not fetched, in this phase.");
assert.equal(liveReady.rawResultAvailable, false, "LIVE7 must not claim raw live result availability.");
assert(!liveReady.query.includes("DHL1234567890"), "live-ready shipment query must redact tracking number.");

[
  "fetch(",
  "XMLHttpRequest",
  "http.request",
  "https.request",
  "axios",
  "request(",
  "writeFile",
  "appendFile",
  "localStorage",
  "sessionStorage",
  "db.json",
  "window.open",
  "location.href",
  "sendBeacon",
  "navigator.geolocation",
  "mediaDevices"
].forEach(term => assert(!moduleSource.includes(term), `LIVE7 module must not include unsafe or live side-effect API: ${term}`));

[
  "changeDelivery",
  "contactCarrier",
  "createShipment",
  "deliveryInstruction",
  "executionAuthority: true"
].forEach(term => assert(!moduleSource.includes(term), `LIVE7 module must not include shipment execution path: ${term}`));

const alias = "qa:nexus-sprint-live7-shipment-tracking-provider-readiness";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include LIVE7 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-live6-news-security-conflict-provider-readiness-qa.js"), "LIVE7 requires LIVE6 QA to remain in qa-suite.");

console.log("[nexus-sprint-live7-shipment-tracking-provider-readiness-qa] passed");
