const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const agriculture = require("../server/nexus-agriculture-context-source-provider.js");
const { isSafeReadOnlySourceResult } = require("../public/nexus-live-source-result-contract.js");

const root = path.resolve(__dirname, "..");

const TEST_QUERIES = Object.freeze([
  "What crop disease updates should tomato farmers know?",
  "What irrigation guidance is current for small farms?",
  "Find agriculture training resources.",
  "What should farmers know about heat stress in crops?"
]);

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticContract() {
  const docName = "NEXUS_RP3_AGRICULTURE_CONTEXT_REAL_PROVIDER_ACTIVATION.md";
  const qaName = "nexus-rp3-agriculture-context-real-provider-activation-qa.js";
  assert(exists("docs", docName), "RP3 agriculture activation doc must exist.");
  assert(exists("scripts", qaName), "RP3 agriculture activation QA must exist.");

  const doc = read("docs", docName);
  const qaSource = read("scripts", qaName);
  const app = read("public", "app.js");
  const index = read("public", "index.html");
  const server = read("server.js");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");

  [
    "Agriculture Context Real Provider Activation",
    "agriculture-context",
    "NEXUS_AGRICULTURE_CONTEXT_PROVIDER_API_KEY",
    "What crop disease updates should tomato farmers know?",
    "What irrigation guidance is current for small farms?",
    "Find agriculture training resources.",
    "What should farmers know about heat stress in crops?",
    "safe unavailable or fixture/mock result",
    "live-ready config returns a future read-only query-ready state",
    "no execution authorized"
  ].forEach(term => assert(doc.includes(term), `RP3 doc must include ${term}.`));

  [
    "unsafe pesticide/chemical instructions",
    "diagnosis-as-certainty",
    "purchases",
    "provider contact",
    "location permission",
    "marketplace transactions",
    "camera/image diagnosis",
    "payment behavior",
    "dispatch",
    "backend writes"
  ].forEach(term => assert(doc.includes(term), `RP3 blocked behavior must include ${term}.`));

  [
    "nexus-rp3-agriculture-context-real-provider-activation-qa",
    "NEXUS_AGRICULTURE_CONTEXT_PROVIDER_API_KEY"
  ].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load or expose ${term}.`);
    assert(!index.includes(term), `public/index.html must not load or expose ${term}.`);
  });
  assert(!server.includes("nexus-rp3-agriculture-context-real-provider-activation-qa"), "server.js must not load RP3 QA.");

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
    "make" + "Payment",
    "dispatch" + "Provider",
    "send" + "Message",
    "book" + "Appointment"
  ].forEach(term => assert(!qaSource.includes(term), `RP3 QA must not include unsafe behavior: ${term}`));

  assert.equal(
    pkg.scripts["qa:nexus-rp3-agriculture-context-real-provider-activation"],
    "node scripts/nexus-rp3-agriculture-context-real-provider-activation-qa.js",
    "RP3 package alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-rp3-agriculture-context-real-provider-activation-qa.js"), "RP3 QA must be in safe suites.");
}

function assertSafeAgricultureResult(result, label, options = {}) {
  assert.equal(isSafeReadOnlySourceResult(result), true, `${label} must satisfy safe read-only source result contract.`);
  if (options.requireAgricultureRequestType) {
    assert.equal(result.requestType, "agriculture-context", `${label} must be agriculture-context.`);
  }
  assert.notEqual(result.executionAuthority, true, `${label} must not grant execution authority.`);
  assert(!/\b(can|will|authorized to|allowed to)\s+(buy|pay|contact|dispatch|diagnose|submit|book)\b/i.test(result.limitationNotes || ""), `${label} limitation notes must not authorize unsafe action.`);
}

function runRp3AgricultureContextRealProviderActivationQa() {
  assertStaticContract();

  const missing = agriculture.getAgricultureContextSourceResult({}, {});
  assert.equal(missing.sourceStatus, "provider-required", "Missing agriculture topic must ask for topic rather than executing.");
  assertSafeAgricultureResult(missing, "missing topic result");

  TEST_QUERIES.forEach(query => {
    const skipped = agriculture.getAgricultureContextSourceResult({ topic: query }, {});
    assert.equal(skipped.sourceStatus, "provider-not-configured", `${query} must skip safely without config.`);
    assertSafeAgricultureResult(skipped, `${query} skipped result`);

    const mock = agriculture.getAgricultureContextSourceResult({ topic: query, locationText: "Stockton, CA" }, {
      NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
      NEXUS_AGRICULTURE_CONTEXT_PROVIDER_ENABLED: "true",
      NEXUS_AGRICULTURE_CONTEXT_PROVIDER_API_KEY: ""
    });
    assert.equal(mock.providerMode, "mock", `${query} missing key path should use mock provider mode.`);
    assert.equal(mock.sourceStatus, "source-result-available", `${query} mock path must be source-shaped.`);
    assertSafeAgricultureResult(mock, `${query} mock result`, { requireAgricultureRequestType: true });

    const liveReady = agriculture.getAgricultureContextSourceResult({ topic: query, locationText: "Stockton, CA" }, {
      NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
      NEXUS_AGRICULTURE_CONTEXT_PROVIDER_ENABLED: "true",
      NEXUS_AGRICULTURE_CONTEXT_PROVIDER_API_KEY: "configured-for-test"
    });
    assert.equal(liveReady.providerMode, "live", `${query} credentialed path should be live-ready.`);
    assert.equal(liveReady.sourceStatus, "source-query-ready", `${query} credentialed path must not perform a live network request in RP3.`);
    assertSafeAgricultureResult(liveReady, `${query} live-ready result`, { requireAgricultureRequestType: true });
  });

  console.log(JSON.stringify({
    providerId: "agriculture-context",
    queryCount: TEST_QUERIES.length,
    liveTested: false,
    status: "prepared-live-query-ready-with-safe-skip-and-mock-paths",
    noExecutionAuthorized: true,
    noLocationPermissionRequested: true,
    noProviderContactAuthorized: true,
    noBackendWritePerformed: true
  }, null, 2));
  console.log("[nexus-rp3-agriculture-context-real-provider-activation-qa] passed");
}

if (require.main === module) {
  try {
    runRp3AgricultureContextRealProviderActivationQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  TEST_QUERIES,
  runRp3AgricultureContextRealProviderActivationQa
});
