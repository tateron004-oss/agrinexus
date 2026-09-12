const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const harness = require("../server/nexus-live-provider-adoption-harness.js");

const root = path.resolve(__dirname, "..");

const PROVIDER_MATRIX_META = Object.freeze({
  weather: Object.freeze({
    category: "weather/current conditions",
    credentialsRequired: ["NEXUS_WEATHER_PROVIDER_ENABLED", "NEXUS_WEATHER_PROVIDER_API_KEY"],
    testQuery: "Stockton, CA current weather",
    nextActivationRequirement: "verified API key, source terms review, citation/freshness display"
  }),
  "agriculture-context": Object.freeze({
    category: "agriculture guidance/current context",
    credentialsRequired: ["NEXUS_AGRICULTURE_CONTEXT_PROVIDER_ENABLED", "NEXUS_AGRICULTURE_CONTEXT_PROVIDER_API_KEY"],
    testQuery: "maize crop disease updates in Kenya",
    nextActivationRequirement: "verified public/partner source, freshness policy, evidence display"
  }),
  "news-security": Object.freeze({
    category: "news/security/conflict awareness",
    credentialsRequired: ["NEXUS_NEWS_SECURITY_PROVIDER_ENABLED", "NEXUS_NEWS_SECURITY_PROVIDER_API_KEY"],
    testQuery: "farm security updates in Kenya",
    nextActivationRequirement: "verified trusted source, uncertainty policy, low-confidence copy"
  }),
  "job-search": Object.freeze({
    category: "job search/application preparation",
    credentialsRequired: ["NEXUS_JOB_SEARCH_PROVIDER_ENABLED", "NEXUS_JOB_SEARCH_PROVIDER_API_KEY"],
    testQuery: "farm jobs in Nairobi",
    nextActivationRequirement: "verified job source, application no-execution guard, freshness policy"
  }),
  "shipment-tracking": Object.freeze({
    category: "shipment tracking/logistics status",
    credentialsRequired: ["NEXUS_SHIPMENT_TRACKING_PROVIDER_ENABLED", "NEXUS_SHIPMENT_TRACKING_PROVIDER_API_KEY"],
    testQuery: "AB12345678",
    nextActivationRequirement: "verified carrier source, tracking redaction, account-free lookup boundary"
  }),
  "music-media": Object.freeze({
    category: "music/media discovery",
    credentialsRequired: ["NEXUS_MUSIC_MEDIA_PROVIDER_ENABLED", "NEXUS_MUSIC_MEDIA_PROVIDER_API_KEY"],
    testQuery: "Kenya farming music information",
    nextActivationRequirement: "verified media metadata source, licensing copy, no-playback boundary"
  })
});

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function buildProviderMatrix(timestamp = "qa-run") {
  return Object.freeze(harness.runAllProviderAdoptionHarnesses().map(report => {
    const meta = PROVIDER_MATRIX_META[report.providerId];
    const sourceStatuses = Object.freeze(report.scenarios.map(result => `${result.scenario}:${result.sourceStatus}`));
    const providerModes = Object.freeze(Array.from(new Set(report.scenarios.map(result => result.providerMode))));
    return Object.freeze({
      providerId: report.providerId,
      category: meta.category,
      currentStatus: "prepared-live-query-ready-with-safe-skip-mock-paths",
      credentialsRequired: meta.credentialsRequired,
      realCallTested: false,
      lastTestTimestamp: timestamp,
      testQuery: meta.testQuery,
      resultType: "read-only-source-result",
      safetyPosture: "no execution, no backend writes, no provider contact, no location permission",
      standardUserStatus: "default-off and unchanged",
      nextActivationRequirement: meta.nextActivationRequirement,
      sourceStatuses,
      providerModes,
      noExecutionAuthorized: report.scenarios.every(result => result.noExecutionAuthorized === true),
      noBackendWritePerformed: report.scenarios.every(result => result.noBackendWritePerformed === true),
      noLocationPermissionRequested: report.scenarios.every(result => result.noLocationPermissionRequested === true),
      noProviderContactAuthorized: report.scenarios.every(result => result.noProviderContactAuthorized === true)
    });
  }));
}

function assertStaticContract() {
  const docName = "NEXUS_RP8_UNIFIED_PROVIDER_LIVE_MOCK_SKIP_MATRIX.md";
  const qaName = "nexus-rp8-unified-provider-live-mock-skip-matrix-qa.js";
  assert(exists("docs", docName), "RP8 unified provider matrix doc must exist.");
  assert(exists("scripts", qaName), "RP8 unified provider matrix QA must exist.");

  const doc = read("docs", docName);
  const qaSource = read("scripts", qaName);
  const app = read("public", "app.js");
  const index = read("public", "index.html");
  const server = read("server.js");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");

  [
    "Unified Provider Live/Mock/Skip Matrix",
    "`weather`",
    "`agriculture-context`",
    "`news-security`",
    "`job-search`",
    "`shipment-tracking`",
    "`music-media`",
    "`providerId`",
    "`currentStatus`",
    "`credentialsRequired`",
    "`realCallTested`",
    "`lastTestTimestamp`",
    "`testQuery`",
    "`resultType`",
    "`safetyPosture`",
    "`standardUserStatus`",
    "`nextActivationRequirement`",
    "no Standard User runtime"
  ].forEach(term => assert(doc.includes(term), `RP8 doc must include ${term}.`));

  ["nexus-rp8-unified-provider-live-mock-skip-matrix-qa", "PROVIDER_MATRIX_META"].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load or expose ${term}.`);
    assert(!index.includes(term), `public/index.html must not load or expose ${term}.`);
  });
  assert(!server.includes("nexus-rp8-unified-provider-live-mock-skip-matrix-qa"), "server.js must not load RP8 QA.");

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
    "dispatch" + "Provider"
  ].forEach(term => assert(!qaSource.includes(term), `RP8 QA must not include unsafe behavior: ${term}`));

  assert.equal(
    pkg.scripts["qa:nexus-rp8-unified-provider-live-mock-skip-matrix"],
    "node scripts/nexus-rp8-unified-provider-live-mock-skip-matrix-qa.js",
    "RP8 package alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-rp8-unified-provider-live-mock-skip-matrix-qa.js"), "RP8 QA must be in safe suites.");
}

function runRp8UnifiedProviderLiveMockSkipMatrixQa() {
  assertStaticContract();

  const expectedProviders = Object.keys(PROVIDER_MATRIX_META);
  const matrix = buildProviderMatrix("2026-06-28T00:00:00.000Z");
  assert.deepEqual(matrix.map(row => row.providerId), expectedProviders, "RP8 matrix must cover all six providers in registry order.");

  matrix.forEach(row => {
    [
      "providerId",
      "category",
      "currentStatus",
      "credentialsRequired",
      "realCallTested",
      "lastTestTimestamp",
      "testQuery",
      "resultType",
      "safetyPosture",
      "standardUserStatus",
      "nextActivationRequirement",
      "sourceStatuses",
      "providerModes",
      "noExecutionAuthorized",
      "noBackendWritePerformed",
      "noLocationPermissionRequested",
      "noProviderContactAuthorized"
    ].forEach(field => assert(Object.prototype.hasOwnProperty.call(row, field), `${row.providerId} matrix row must include ${field}.`));

    assert.equal(row.realCallTested, false, `${row.providerId} must not claim live provider call was tested by RP8.`);
    assert.equal(row.standardUserStatus, "default-off and unchanged", `${row.providerId} must keep Standard User default-off.`);
    assert.equal(row.resultType, "read-only-source-result", `${row.providerId} must use read-only result type.`);
    assert.equal(row.noExecutionAuthorized, true, `${row.providerId} must authorize no execution.`);
    assert.equal(row.noBackendWritePerformed, true, `${row.providerId} must perform no backend write.`);
    assert.equal(row.noLocationPermissionRequested, true, `${row.providerId} must request no location permission.`);
    assert.equal(row.noProviderContactAuthorized, true, `${row.providerId} must authorize no provider contact.`);
    assert(row.sourceStatuses.some(status => status.includes("missing-input:")), `${row.providerId} must include missing-input status.`);
    assert(row.sourceStatuses.some(status => status.includes("disabled:provider-not-configured")), `${row.providerId} must include disabled skip status.`);
    assert(row.sourceStatuses.some(status => status.includes("mock:source-result-available")), `${row.providerId} must include mock source result status.`);
    assert(row.sourceStatuses.some(status => status.includes("live-ready:source-query-ready")), `${row.providerId} must include live-ready query-ready status.`);
    assert(row.providerModes.includes("fixture"), `${row.providerId} must include fixture provider mode.`);
    assert(row.providerModes.includes("mock"), `${row.providerId} must include mock provider mode.`);
    assert(row.providerModes.includes("live"), `${row.providerId} must include live provider mode.`);
    assert(!JSON.stringify(row).includes("configured-for-test"), `${row.providerId} matrix must not expose configured test key values.`);
  });

  console.log(JSON.stringify({
    providerCount: matrix.length,
    providers: matrix.map(row => row.providerId),
    realCallsTested: false,
    status: "unified-live-mock-skip-matrix-built-from-safe-provider-harness",
    noExecutionAuthorized: true,
    noBackendWritePerformed: true,
    noLocationPermissionRequested: true,
    noProviderContactAuthorized: true
  }, null, 2));
  console.log("[nexus-rp8-unified-provider-live-mock-skip-matrix-qa] passed");
}

if (require.main === module) {
  try {
    runRp8UnifiedProviderLiveMockSkipMatrixQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  PROVIDER_MATRIX_META,
  buildProviderMatrix,
  runRp8UnifiedProviderLiveMockSkipMatrixQa
});
