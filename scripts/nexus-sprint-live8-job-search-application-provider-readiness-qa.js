const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  isSafeReadOnlySourceResult
} = require("../public/nexus-live-source-result-contract.js");
const jobs = require("../server/nexus-job-search-source-provider.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

const docName = "NEXUS_SPRINT_LIVE8_JOB_SEARCH_APPLICATION_PROVIDER_READINESS.md";
const moduleName = "nexus-job-search-source-provider.js";
const qaName = "nexus-sprint-live8-job-search-application-provider-readiness-qa.js";

assert(exists("docs", docName), "LIVE8 doc must exist.");
assert(exists("server", moduleName), "LIVE8 provider module must exist.");
assert(exists("scripts", qaName), "LIVE8 QA script must exist.");

const doc = read("docs", docName);
const moduleSource = read("server", moduleName);
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

[
  "Nexus Sprint LIVE8",
  "Job Search and Application Assistance Provider Readiness",
  "job board provider adapter",
  "employer career page adapter",
  "public job feed adapter",
  "NEXUS_JOB_SEARCH_PROVIDER_ENABLED=false",
  "NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED=true",
  "NEXUS_JOB_SEARCH_PROVIDER_ENABLED=true",
  "NEXUS_JOB_SEARCH_PROVIDER_API_KEY",
  "applicationActionAllowed: false",
  "applicationSubmissionAuthority: false",
  "executionAuthority: false",
  "submit a job application",
  "contact an employer",
  "send email",
  "create accounts",
  "upload resumes",
  "process application payments",
  "write backend job tracking state",
  "LIVE9 Readiness"
].forEach(term => assert(doc.includes(term), `LIVE8 doc must include: ${term}`));

[
  "classifyJobAssistantIntent",
  "buildJobSearchQuery",
  "resolveJobSearchProviderConfig",
  "buildMockJobSearchResult",
  "buildApplicationPreparationPreview",
  "buildJobProviderUnavailableResult",
  "getJobSearchSourceResult"
].forEach(fn => assert.equal(typeof jobs[fn], "function", `LIVE8 module must export ${fn}`));

assert.equal(jobs.classifyJobAssistantIntent("Find farm jobs near Nairobi"), "job-search", "job search intent must be recognized.");
assert.equal(jobs.classifyJobAssistantIntent("Draft a cover letter"), "job-application-preparation", "application preparation intent must be recognized.");

const query = jobs.buildJobSearchQuery({ query: "farm jobs", locationText: "Nairobi" });
assert.equal(query.applicationActionAllowed, false, "job query must not allow application action.");
assert.equal(query.applicationSubmissionAuthority, false, "job query must not allow application submission.");
assert.equal(query.employerContactAllowed, false, "job query must not allow employer contact.");
assert.equal(query.resumeUploadAllowed, false, "job query must not allow resume upload.");
assert.equal(query.backendJobTrackingAllowed, false, "job query must not allow backend tracking.");
assert.equal(query.executionAuthority, false, "job query must not grant execution.");

assert.equal(jobs.resolveJobSearchProviderConfig({}).providerMode, "fixture", "job provider must default to fixture.");
assert.equal(jobs.resolveJobSearchProviderConfig({
  NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
  NEXUS_JOB_SEARCH_PROVIDER_ENABLED: "true"
}).providerMode, "mock", "job provider without key must stay mock.");
assert.equal(jobs.resolveJobSearchProviderConfig({
  NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
  NEXUS_JOB_SEARCH_PROVIDER_ENABLED: "true",
  NEXUS_JOB_SEARCH_PROVIDER_API_KEY: "configured"
}).providerMode, "live", "job provider with flags/key may become live-ready.");

const missing = jobs.getJobSearchSourceResult({}, {});
assert.equal(isSafeReadOnlySourceResult(missing), true, "missing job role/location result must remain safe.");
assert.equal(missing.sourceStatus, "provider-required", "missing job role/location must request clarification.");
assert(missing.resultSummary.includes("What kind of job"), "missing job query must ask concise clarification.");

const unavailable = jobs.getJobSearchSourceResult({ query: "farm jobs", locationText: "Nairobi" }, {});
assert.equal(isSafeReadOnlySourceResult(unavailable), true, "unavailable job result must remain safe.");
assert.equal(unavailable.sourceStatus, "provider-not-configured", "disabled provider must return provider-not-configured.");

const mock = jobs.getJobSearchSourceResult({ query: "farm jobs", locationText: "Nairobi" }, {
  NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
  NEXUS_JOB_SEARCH_PROVIDER_ENABLED: "true"
});
assert.equal(isSafeReadOnlySourceResult(mock), true, "mock job result must be safe.");
assert.equal(mock.providerMode, "mock", "missing key must produce mock mode.");
assert.equal(mock.sourceStatus, "source-result-available", "mock job result must be available.");
jobs.JOB_RESULT_FIELDS.forEach(field => assert(Object.prototype.hasOwnProperty.call(mock, field), `mock job result must include ${field}`));
assert.equal(mock.applicationActionAllowed, false, "mock job result must block application action.");
assert.equal(mock.applicationSubmissionAuthority, false, "mock job result must block application submission.");

const prep = jobs.buildApplicationPreparationPreview({ requiredSkills: ["irrigation"], missingSkills: ["tractor safety"] });
assert.equal(prep.applicationActionAllowed, false, "application prep must block application action.");
assert.equal(prep.applicationSubmissionAuthority, false, "application prep must block submission.");
assert.equal(prep.backendJobTrackingAllowed, false, "application prep must block backend tracking.");
assert.equal(prep.executionAuthority, false, "application prep must not grant execution.");
assert(prep.applicationLimitations.includes("cannot submit"), "application prep must disclose submission limitation.");

const liveReady = jobs.getJobSearchSourceResult({ query: "solar technician jobs", locationText: "Ghana" }, {
  NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
  NEXUS_JOB_SEARCH_PROVIDER_ENABLED: "true",
  NEXUS_JOB_SEARCH_PROVIDER_API_KEY: "configured"
});
assert.equal(isSafeReadOnlySourceResult(liveReady), true, "live-ready job result must remain safe.");
assert.equal(liveReady.providerMode, "live", "configured provider may report live mode.");
assert.equal(liveReady.sourceStatus, "source-query-ready", "configured provider must be query-ready, not fetched, in this phase.");
assert.equal(liveReady.rawResultAvailable, false, "LIVE8 must not claim raw live result availability.");

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
].forEach(term => assert(!moduleSource.includes(term), `LIVE8 module must not include unsafe or live side-effect API: ${term}`));

[
  "submitApplication",
  "contactEmployer",
  "sendEmail",
  "createAccount",
  "uploadResume",
  "payment",
  "executionAuthority: true"
].forEach(term => assert(!moduleSource.includes(term), `LIVE8 module must not include job execution path: ${term}`));

const alias = "qa:nexus-sprint-live8-job-search-application-provider-readiness";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include LIVE8 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-live7-shipment-tracking-provider-readiness-qa.js"), "LIVE8 requires LIVE7 QA to remain in qa-suite.");

console.log("[nexus-sprint-live8-job-search-application-provider-readiness-qa] passed");
