const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const jobs = require("../server/nexus-job-search-source-provider.js");
const { isSafeReadOnlySourceResult } = require("../public/nexus-live-source-result-contract.js");

const root = path.resolve(__dirname, "..");

const TEST_QUERIES = Object.freeze([
  { query: "farm jobs", locationText: "Stockton, CA", label: "Find farm jobs near Stockton, CA." },
  { query: "agriculture training jobs", locationText: "Stockton, CA", label: "Find agriculture training jobs." },
  { query: "workforce development jobs in agriculture", locationText: "Stockton, CA", label: "Find workforce development jobs in agriculture." },
  { query: "EV or agriculture technician jobs", locationText: "Stockton, CA", label: "Show me EV or agriculture technician jobs." }
]);

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertStaticContract() {
  const docName = "NEXUS_RP5_JOB_SEARCH_REAL_PROVIDER_ACTIVATION.md";
  const qaName = "nexus-rp5-job-search-real-provider-activation-qa.js";
  assert(exists("docs", docName), "RP5 job search activation doc must exist.");
  assert(exists("scripts", qaName), "RP5 job search activation QA must exist.");

  const doc = read("docs", docName);
  const qaSource = read("scripts", qaName);
  const app = read("public", "app.js");
  const index = read("public", "index.html");
  const server = read("server.js");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");

  [
    "Job Search/Application Preparation Real Provider Activation",
    "job-search",
    "NEXUS_JOB_SEARCH_PROVIDER_API_KEY",
    "Find farm jobs near Stockton, CA.",
    "Find agriculture training jobs.",
    "Find workforce development jobs in agriculture.",
    "Show me EV or agriculture technician jobs.",
    "application preparation preview",
    "safe next steps",
    "live-ready config returns a future read-only query-ready state"
  ].forEach(term => assert(doc.includes(term), `RP5 doc must include ${term}.`));

  [
    "submit applications",
    "contact employers",
    "send messages",
    "upload resumes",
    "create accounts",
    "book interviews",
    "fill forms",
    "process payment",
    "share personal information",
    "backend job-tracking state"
  ].forEach(term => assert(doc.includes(term), `RP5 blocked behavior must include ${term}.`));

  ["nexus-rp5-job-search-real-provider-activation-qa", "NEXUS_JOB_SEARCH_PROVIDER_API_KEY"].forEach(term => {
    assert(!app.includes(term), `public/app.js must not load or expose ${term}.`);
    assert(!index.includes(term), `public/index.html must not load or expose ${term}.`);
  });
  assert(!server.includes("nexus-rp5-job-search-real-provider-activation-qa"), "server.js must not load RP5 QA.");

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
    "submit" + "Application",
    "upload" + "Resume"
  ].forEach(term => assert(!qaSource.includes(term), `RP5 QA must not include unsafe behavior: ${term}`));

  assert.equal(
    pkg.scripts["qa:nexus-rp5-job-search-real-provider-activation"],
    "node scripts/nexus-rp5-job-search-real-provider-activation-qa.js",
    "RP5 package alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-rp5-job-search-real-provider-activation-qa.js"), "RP5 QA must be in safe suites.");
}

function assertSafeJobResult(result, label) {
  assert.equal(isSafeReadOnlySourceResult(result), true, `${label} must satisfy safe read-only source result contract.`);
  assert.notEqual(result.executionAuthority, true, `${label} must not grant execution authority.`);
  assert.notEqual(result.applicationActionAllowed, true, `${label} must not allow application action.`);
  assert.notEqual(result.applicationSubmissionAuthority, true, `${label} must not allow application submission.`);
  assert(!/\b(submit|contact|message|upload|create account|book|pay|process payment)\b/i.test(result.resultSummary || ""), `${label} summary must not claim execution.`);
}

function runRp5JobSearchRealProviderActivationQa() {
  assertStaticContract();

  const missing = jobs.getJobSearchSourceResult({ query: "farm jobs" }, {});
  assert.equal(missing.sourceStatus, "provider-required", "Missing job location must ask for role/location rather than executing.");
  assertSafeJobResult(missing, "missing job location result");

  TEST_QUERIES.forEach(testCase => {
    const skipped = jobs.getJobSearchSourceResult(testCase, {});
    assert.equal(skipped.sourceStatus, "provider-not-configured", `${testCase.label} must skip safely without config.`);
    assertSafeJobResult(skipped, `${testCase.label} skipped result`);

    const mock = jobs.getJobSearchSourceResult(testCase, {
      NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
      NEXUS_JOB_SEARCH_PROVIDER_ENABLED: "true",
      NEXUS_JOB_SEARCH_PROVIDER_API_KEY: ""
    });
    assert.equal(mock.providerMode, "mock", `${testCase.label} missing key path should use mock provider mode.`);
    assert.equal(mock.sourceStatus, "source-result-available", `${testCase.label} mock path must be source-shaped.`);
    assert.equal(mock.applicationActionAllowed, false, `${testCase.label} mock path must block application action.`);
    assert.equal(mock.applicationSubmissionAuthority, false, `${testCase.label} mock path must block application submission.`);
    assertSafeJobResult(mock, `${testCase.label} mock result`);

    const liveReady = jobs.getJobSearchSourceResult(testCase, {
      NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
      NEXUS_JOB_SEARCH_PROVIDER_ENABLED: "true",
      NEXUS_JOB_SEARCH_PROVIDER_API_KEY: "configured-for-test"
    });
    assert.equal(liveReady.providerMode, "live", `${testCase.label} credentialed path should be live-ready.`);
    assert.equal(liveReady.sourceStatus, "source-query-ready", `${testCase.label} credentialed path must not perform a live network request in RP5.`);
    assertSafeJobResult(liveReady, `${testCase.label} live-ready result`);
  });

  const prep = jobs.buildApplicationPreparationPreview({
    query: "farm technician",
    locationText: "Stockton, CA",
    requiredSkills: ["equipment safety"],
    missingSkills: ["certification"]
  });
  assert.equal(prep.requestType, "job-application-preparation", "Application preparation must be explicit preview mode.");
  assert.equal(prep.applicationActionAllowed, false, "Application preparation must not allow application action.");
  assert.equal(prep.applicationSubmissionAuthority, false, "Application preparation must not allow application submission.");
  assert.equal(prep.executionAuthority, false, "Application preparation must not grant execution authority.");
  assert(prep.applicationLimitations.includes("cannot submit"), "Application preparation limitations must block submission.");

  console.log(JSON.stringify({
    providerId: "job-search",
    queryCount: TEST_QUERIES.length,
    liveTested: false,
    status: "prepared-live-query-ready-with-safe-skip-mock-and-application-prep-preview-paths",
    noApplicationSubmitted: true,
    noEmployerContactAuthorized: true,
    noResumeUploadAuthorized: true,
    noAccountCreationAuthorized: true,
    noPaymentAuthorized: true,
    noBackendWritePerformed: true
  }, null, 2));
  console.log("[nexus-rp5-job-search-real-provider-activation-qa] passed");
}

if (require.main === module) {
  try {
    runRp5JobSearchRealProviderActivationQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  TEST_QUERIES,
  runRp5JobSearchRealProviderActivationQa
});
