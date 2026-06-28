const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const newsSecurity = require("../server/nexus-news-security-source-provider.js");
const { isSafeReadOnlySourceResult } = require("../public/nexus-live-source-result-contract.js");

const root = path.resolve(__dirname, "..");

const TEST_QUERIES = Object.freeze([
  "What security issues are affecting farmers right now?",
  "What current conflict risks may affect agriculture logistics?",
  "Summarize recent agriculture supply chain security news."
]);

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticContract() {
  const docName = "NEXUS_RP4_NEWS_SECURITY_CONFLICT_REAL_PROVIDER_ACTIVATION.md";
  const qaName = "nexus-rp4-news-security-conflict-real-provider-activation-qa.js";
  assert(exists("docs", docName), "RP4 news/security activation doc must exist.");
  assert(exists("scripts", qaName), "RP4 news/security activation QA must exist.");

  const doc = read("docs", docName);
  const qaSource = read("scripts", qaName);
  const app = read("public", "app.js");
  const index = read("public", "index.html");
  const server = read("server.js");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");

  [
    "News/Security/Conflict Real Provider Activation",
    "news-security",
    "NEXUS_NEWS_SECURITY_PROVIDER_API_KEY",
    "What security issues are affecting farmers right now?",
    "What current conflict risks may affect agriculture logistics?",
    "Summarize recent agriculture supply chain security news.",
    "low-confidence warning",
    "uncertainty disclosure",
    "safe awareness-only summary",
    "live-ready config returns a future read-only query-ready state"
  ].forEach(term => assert(doc.includes(term), `RP4 doc must include ${term}.`));

  [
    "tactical harm guidance",
    "violence facilitation",
    "panic-inducing claims",
    "political persuasion tooling",
    "targeted political influence",
    "emergency dispatch",
    "calls/messages",
    "provider contact",
    "location permission",
    "safety certainty"
  ].forEach(term => assert(doc.includes(term), `RP4 blocked behavior must include ${term}.`));

  ["nexus-rp4-news-security-conflict-real-provider-activation-qa", "NEXUS_NEWS_SECURITY_PROVIDER_API_KEY"].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load or expose ${term}.`);
    assert(!index.includes(term), `public/index.html must not load or expose ${term}.`);
  });
  assert(!server.includes("nexus-rp4-news-security-conflict-real-provider-activation-qa"), "server.js must not load RP4 QA.");

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
    "emergency" + "Dispatch"
  ].forEach(term => assert(!qaSource.includes(term), `RP4 QA must not include unsafe behavior: ${term}`));

  assert.equal(
    pkg.scripts["qa:nexus-rp4-news-security-conflict-real-provider-activation"],
    "node scripts/nexus-rp4-news-security-conflict-real-provider-activation-qa.js",
    "RP4 package alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-rp4-news-security-conflict-real-provider-activation-qa.js"), "RP4 QA must be in safe suites.");
}

function assertSafeNewsSecurityResult(result, label) {
  assert.equal(isSafeReadOnlySourceResult(result), true, `${label} must satisfy safe read-only source result contract.`);
  assert.notEqual(result.executionAuthority, true, `${label} must not grant execution authority.`);
  assert(!/\b(can|will|authorized to|allowed to)\s+(dispatch|contact|call|message|target|harm|persuade)\b/i.test(result.limitationNotes || ""), `${label} limitation notes must not authorize unsafe action.`);
}

function runRp4NewsSecurityConflictRealProviderActivationQa() {
  assertStaticContract();

  const missing = newsSecurity.getNewsSecuritySourceResult({}, {});
  assert.equal(missing.sourceStatus, "provider-required", "Missing news/security topic must ask for area/topic rather than executing.");
  assertSafeNewsSecurityResult(missing, "missing topic result");

  TEST_QUERIES.forEach(query => {
    const skipped = newsSecurity.getNewsSecuritySourceResult({ regionOrTopic: query }, {});
    assert.equal(skipped.sourceStatus, "provider-not-configured", `${query} must skip safely without config.`);
    assertSafeNewsSecurityResult(skipped, `${query} skipped result`);

    const mock = newsSecurity.getNewsSecuritySourceResult({ regionOrTopic: query }, {
      NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
      NEXUS_NEWS_SECURITY_PROVIDER_ENABLED: "true",
      NEXUS_NEWS_SECURITY_PROVIDER_API_KEY: ""
    });
    assert.equal(mock.providerMode, "mock", `${query} missing key path should use mock provider mode.`);
    assert.equal(mock.sourceStatus, "source-result-available", `${query} mock path must be source-shaped.`);
    assertSafeNewsSecurityResult(mock, `${query} mock result`);

    const conflict = newsSecurity.getNewsSecuritySourceResult({ regionOrTopic: query, conflictExpected: true }, {
      NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
      NEXUS_NEWS_SECURITY_PROVIDER_ENABLED: "true",
      NEXUS_NEWS_SECURITY_PROVIDER_API_KEY: ""
    });
    assert.equal(conflict.sourceStatus, "source-conflict-detected", `${query} conflict fixture must disclose conflict.`);
    assert.equal(conflict.evidenceStatus, "conflicting", `${query} conflict fixture must mark evidence as conflicting.`);
    assertSafeNewsSecurityResult(conflict, `${query} conflict result`);

    const liveReady = newsSecurity.getNewsSecuritySourceResult({ regionOrTopic: query }, {
      NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
      NEXUS_NEWS_SECURITY_PROVIDER_ENABLED: "true",
      NEXUS_NEWS_SECURITY_PROVIDER_API_KEY: "configured-for-test"
    });
    assert.equal(liveReady.providerMode, "live", `${query} credentialed path should be live-ready.`);
    assert.equal(liveReady.sourceStatus, "source-query-ready", `${query} credentialed path must not perform a live network request in RP4.`);
    assertSafeNewsSecurityResult(liveReady, `${query} live-ready result`);
  });

  console.log(JSON.stringify({
    providerId: "news-security",
    queryCount: TEST_QUERIES.length,
    liveTested: false,
    status: "prepared-live-query-ready-with-safe-skip-mock-and-conflict-paths",
    noExecutionAuthorized: true,
    noLocationPermissionRequested: true,
    noProviderContactAuthorized: true,
    noBackendWritePerformed: true
  }, null, 2));
  console.log("[nexus-rp4-news-security-conflict-real-provider-activation-qa] passed");
}

if (require.main === module) {
  try {
    runRp4NewsSecurityConflictRealProviderActivationQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  TEST_QUERIES,
  runRp4NewsSecurityConflictRealProviderActivationQa
});
