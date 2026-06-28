const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const shipment = require("../server/nexus-shipment-tracking-source-provider.js");
const { isSafeReadOnlySourceResult } = require("../public/nexus-live-source-result-contract.js");

const root = path.resolve(__dirname, "..");

const TEST_PROMPTS = Object.freeze([
  { trackingNumber: "AB12345678", query: "Track this shipment AB12345678.", label: "Track this shipment AB12345678." },
  { trackingNumber: "AB12345678", query: "Where is package AB12345678?", label: "Where is package AB12345678?" },
  { trackingNumber: "AB12345678", query: "Change delivery address for AB12345678.", label: "Change delivery address for AB12345678." }
]);

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticContract() {
  const docName = "NEXUS_RP6_SHIPMENT_TRACKING_REAL_PROVIDER_ACTIVATION.md";
  const qaName = "nexus-rp6-shipment-tracking-real-provider-activation-qa.js";
  assert(exists("docs", docName), "RP6 shipment tracking activation doc must exist.");
  assert(exists("scripts", qaName), "RP6 shipment tracking activation QA must exist.");

  const doc = read("docs", docName);
  const qaSource = read("scripts", qaName);
  const app = read("public", "app.js");
  const index = read("public", "index.html");
  const server = read("server.js");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");

  [
    "Shipment Tracking Real Provider Activation",
    "shipment-tracking",
    "NEXUS_SHIPMENT_TRACKING_PROVIDER_API_KEY",
    "Track this shipment AB12345678.",
    "Where is package AB12345678?",
    "Change delivery address for AB12345678.",
    "Call the carrier.",
    "Send a driver.",
    "redacted tracking reference",
    "live-ready config returns a future read-only query-ready state"
  ].forEach(term => assert(doc.includes(term), `RP6 doc must include ${term}.`));

  [
    "change delivery address",
    "change delivery instructions",
    "contact carriers",
    "call/message carriers",
    "dispatch a driver",
    "submit claims",
    "create accounts",
    "log into carrier accounts",
    "process payment",
    "expose addresses",
    "backend shipment state"
  ].forEach(term => assert(doc.includes(term), `RP6 blocked behavior must include ${term}.`));

  ["nexus-rp6-shipment-tracking-real-provider-activation-qa", "NEXUS_SHIPMENT_TRACKING_PROVIDER_API_KEY"].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load or expose ${term}.`);
    assert(!index.includes(term), `public/index.html must not load or expose ${term}.`);
  });
  assert(!server.includes("nexus-rp6-shipment-tracking-real-provider-activation-qa"), "server.js must not load RP6 QA.");

  [
    "fetch" + "(",
    "XML" + "HttpRequest",
    "http." + "request",
    "https." + "request",
    "navigator." + "geolocation",
    "media" + "Devices",
    "write" + "File",
    "append" + "File",
    "localStorage." + "setItem",
    "sessionStorage." + "setItem",
    "window." + "open",
    "location." + "href",
    "send" + "Message",
    "dispatch" + "Provider",
    "change" + "Delivery",
    "dispatch" + "Driver"
  ].forEach(term => assert(!qaSource.includes(term), `RP6 QA must not include unsafe behavior: ${term}`));

  assert.equal(
    pkg.scripts["qa:nexus-rp6-shipment-tracking-real-provider-activation"],
    "node scripts/nexus-rp6-shipment-tracking-real-provider-activation-qa.js",
    "RP6 package alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-rp6-shipment-tracking-real-provider-activation-qa.js"), "RP6 QA must be in safe suites.");
}

function assertSafeShipmentResult(result, label) {
  assert.equal(isSafeReadOnlySourceResult(result), true, `${label} must satisfy safe read-only source result contract.`);
  assert.notEqual(result.executionAuthority, true, `${label} must not grant execution authority.`);
  assert(!/\b(will|can|authorized to|allowed to)\s+(change|contact|call|message|dispatch|pay|submit|login)\b/i.test(result.limitationNotes || ""), `${label} limitation notes must not authorize unsafe action.`);
  assert(!/\b(will|can|authorized to|allowed to)\s+(change delivery|contact the carrier|dispatch a driver|process payment)\b/i.test(result.resultSummary || ""), `${label} summary must not claim unsafe action.`);
}

function runRp6ShipmentTrackingRealProviderActivationQa() {
  assertStaticContract();

  const missing = shipment.getShipmentTrackingSourceResult({}, {});
  assert.equal(missing.sourceStatus, "provider-required", "Missing tracking number must ask for a tracking number rather than executing.");
  assertSafeShipmentResult(missing, "missing tracking number result");

  const unsafeNoTrackingPrompts = ["Call the carrier.", "Send a driver."];
  unsafeNoTrackingPrompts.forEach(prompt => {
    const result = shipment.getShipmentTrackingSourceResult({ query: prompt }, {});
    assert.equal(result.sourceStatus, "provider-required", `${prompt} must not contact a carrier or dispatch without tracking input.`);
    assertSafeShipmentResult(result, `${prompt} result`);
  });

  TEST_PROMPTS.forEach(testCase => {
    const builtQuery = shipment.buildShipmentTrackingQuery(testCase);
    assert.equal(builtQuery.trackingNumberPresent, true, `${testCase.label} should detect a tracking reference.`);
    assert.equal(builtQuery.canChangeDelivery, false, `${testCase.label} must not allow delivery change.`);
    assert.equal(builtQuery.canContactCarrier, false, `${testCase.label} must not allow carrier contact.`);
    assert.equal(builtQuery.executionAuthority, false, `${testCase.label} must not grant execution authority.`);
    assert.notEqual(builtQuery.redactedTrackingReference, testCase.trackingNumber, `${testCase.label} should use a redacted tracking reference.`);

    const skipped = shipment.getShipmentTrackingSourceResult(testCase, {});
    assert.equal(skipped.sourceStatus, "provider-not-configured", `${testCase.label} must skip safely without config.`);
    assertSafeShipmentResult(skipped, `${testCase.label} skipped result`);

    const mock = shipment.getShipmentTrackingSourceResult(testCase, {
      NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
      NEXUS_SHIPMENT_TRACKING_PROVIDER_ENABLED: "true",
      NEXUS_SHIPMENT_TRACKING_PROVIDER_API_KEY: ""
    });
    assert.equal(mock.providerMode, "mock", `${testCase.label} missing key path should use mock provider mode.`);
    assert.equal(mock.sourceStatus, "source-result-available", `${testCase.label} mock path must be source-shaped.`);
    assert(!mock.query.includes(testCase.trackingNumber), `${testCase.label} mock query must not expose raw tracking number.`);
    assertSafeShipmentResult(mock, `${testCase.label} mock result`);

    const liveReady = shipment.getShipmentTrackingSourceResult(testCase, {
      NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
      NEXUS_SHIPMENT_TRACKING_PROVIDER_ENABLED: "true",
      NEXUS_SHIPMENT_TRACKING_PROVIDER_API_KEY: "configured-for-test"
    });
    assert.equal(liveReady.providerMode, "live", `${testCase.label} credentialed path should be live-ready.`);
    assert.equal(liveReady.sourceStatus, "source-query-ready", `${testCase.label} credentialed path must not perform a live network request in RP6.`);
    assert(!liveReady.query.includes(testCase.trackingNumber), `${testCase.label} live-ready query must not expose raw tracking number.`);
    assertSafeShipmentResult(liveReady, `${testCase.label} live-ready result`);
  });

  console.log(JSON.stringify({
    providerId: "shipment-tracking",
    promptCount: TEST_PROMPTS.length,
    liveTested: false,
    status: "prepared-live-query-ready-with-safe-skip-mock-and-redacted-tracking-paths",
    noDeliveryChangeAuthorized: true,
    noCarrierContactAuthorized: true,
    noDriverDispatchAuthorized: true,
    noPaymentAuthorized: true,
    noAccountLoginAuthorized: true,
    noBackendWritePerformed: true
  }, null, 2));
  console.log("[nexus-rp6-shipment-tracking-real-provider-activation-qa] passed");
}

if (require.main === module) {
  try {
    runRp6ShipmentTrackingRealProviderActivationQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  TEST_PROMPTS,
  runRp6ShipmentTrackingRealProviderActivationQa
});
