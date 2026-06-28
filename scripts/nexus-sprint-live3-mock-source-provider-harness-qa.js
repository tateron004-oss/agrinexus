const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  REQUIRED_SOURCE_RESULT_FIELDS,
  isSafeReadOnlySourceResult
} = require("../public/nexus-live-source-result-contract.js");
const {
  REQUIRED_JOB_FIELDS,
  loadLiveSourceFixtures,
  validateLiveSourceFixtures
} = require("./nexus-sprint-live3-mock-source-provider-harness.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

const docName = "NEXUS_SPRINT_LIVE3_MOCK_FIXTURE_SOURCE_PROVIDER_HARNESS.md";
const fixtureName = path.join("fixtures", "nexus", "live-source-results.json");
const harnessName = "nexus-sprint-live3-mock-source-provider-harness.js";
const qaName = "nexus-sprint-live3-mock-source-provider-harness-qa.js";

assert(exists("docs", docName), "LIVE3 harness doc must exist.");
assert(exists("fixtures", "nexus", "live-source-results.json"), "LIVE3 fixture file must exist.");
assert(exists("scripts", harnessName), "LIVE3 harness script must exist.");
assert(exists("scripts", qaName), "LIVE3 QA script must exist.");

const doc = read("docs", docName);
const fixtureSource = read("fixtures", "nexus", "live-source-results.json");
const harnessSource = read("scripts", harnessName);
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const fixtures = loadLiveSourceFixtures();

[
  "Nexus Sprint LIVE3",
  "Mock/Fixture Source Provider Harness",
  fixtureName.replace(/\\/g, "/"),
  "scripts/nexus-sprint-live3-mock-source-provider-harness.js",
  "Nairobi weather result",
  "Kinshasa weather result",
  "eastern DRC conflict/security result",
  "Sudan current events result",
  "shipment in transit result",
  "shipment delivered result",
  "shipment provider not configured",
  "agriculture weather/market context result",
  "R&B music provider not connected",
  "stale source result",
  "conflicting source result",
  "provider rate limited",
  "provider error",
  "unsupported request type",
  "Kenya farm job result",
  "Ghana solar/electrical technician job result",
  "stale job posting",
  "unverified employer job posting",
  "job application preparation blocked from submission",
  "general question answered from source-unavailable fallback",
  "readOnly: true",
  "noExecutionRequired: true",
  "executionAuthority: false",
  "applicationActionAllowed: false",
  "applicationSubmissionAuthority: false",
  "does not mutate files",
  "use network calls",
  "write `db.json`",
  "LIVE4 Readiness"
].forEach(term => assert(doc.includes(term), `LIVE3 doc must include: ${term}`));

assert.equal(fixtures.length, 20, "LIVE3 fixture set must include exactly 20 source results.");

[
  "live3-weather-nairobi",
  "live3-weather-kinshasa",
  "live3-security-eastern-drc",
  "live3-news-sudan",
  "live3-shipment-in-transit",
  "live3-shipment-delivered",
  "live3-shipment-provider-not-configured",
  "live3-agriculture-market-weather",
  "live3-music-rnb-provider-not-connected",
  "live3-stale-weather-source",
  "live3-conflicting-security-source",
  "live3-provider-rate-limited",
  "live3-provider-error",
  "live3-unsupported-request-type",
  "live3-job-kenya-farm",
  "live3-job-ghana-electrical",
  "live3-job-stale-posting",
  "live3-job-unverified-employer",
  "live3-job-application-prep-blocked",
  "live3-general-source-unavailable"
].forEach(id => {
  assert(fixtures.some(result => result.sourceResultId === id), `LIVE3 fixture set must include ${id}`);
});

fixtures.forEach(result => {
  REQUIRED_SOURCE_RESULT_FIELDS.forEach(field => {
    assert(Object.prototype.hasOwnProperty.call(result, field), `${result.sourceResultId} must include ${field}`);
  });
  assert.equal(result.readOnly, true, `${result.sourceResultId} must be read-only`);
  assert.equal(result.noExecutionRequired, true, `${result.sourceResultId} must require no execution`);
  assert.equal(result.executionAuthority, false, `${result.sourceResultId} must have no execution authority`);
  assert.equal(isSafeReadOnlySourceResult(result), true, `${result.sourceResultId} must pass LIVE2 contract validation`);
  assert.match(result.retrievedAt, /^\d{4}-\d{2}-\d{2}T/, `${result.sourceResultId} must include ISO retrievedAt`);
  assert.match(result.lastUpdated, /^\d{4}-\d{2}-\d{2}T/, `${result.sourceResultId} must include ISO lastUpdated`);
});

fixtures.filter(result => result.requestType === "job-search" || result.requestType === "job-application-preparation").forEach(result => {
  REQUIRED_JOB_FIELDS.forEach(field => assert(Object.prototype.hasOwnProperty.call(result, field), `${result.sourceResultId} must include job field ${field}`));
  assert.equal(result.applicationActionAllowed, false, `${result.sourceResultId} must block application action`);
  assert.equal(result.applicationSubmissionAuthority, false, `${result.sourceResultId} must block application submission`);
});

[
  "provider-not-configured",
  "provider-not-connected",
  "source-stale",
  "source-conflict-detected",
  "source-rate-limited",
  "source-error",
  "unsupported",
  "provider-required"
].forEach(status => {
  assert(fixtures.some(result => result.sourceStatus === status), `LIVE3 fixtures must cover ${status}`);
});

const validation = validateLiveSourceFixtures(fixtures);
assert.equal(validation.ok, true, "LIVE3 harness must validate fixtures successfully.");
assert.equal(validation.count, 20, "LIVE3 harness must report 20 fixtures.");
assert(validation.results.every(result => result.executionAllowed === false), "LIVE3 harness must never allow execution.");

assert(!fixtureSource.includes("\"executionAuthority\": true"), "LIVE3 fixtures must not grant execution authority.");
assert(!fixtureSource.includes("\"readOnly\": false"), "LIVE3 fixtures must not disable readOnly.");
assert(!fixtureSource.includes("\"noExecutionRequired\": false"), "LIVE3 fixtures must not require execution.");
assert(!fixtureSource.includes("\"applicationActionAllowed\": true"), "LIVE3 fixtures must not allow application actions.");
assert(!fixtureSource.includes("\"applicationSubmissionAuthority\": true"), "LIVE3 fixtures must not allow application submissions.");

[
  "writeFile",
  "appendFile",
  "rmSync",
  "unlinkSync",
  "fetch(",
  "XMLHttpRequest",
  "http.request",
  "https.request",
  "document.",
  "querySelector",
  "addEventListener",
  "localStorage",
  "sessionStorage",
  "db.json",
  "window.open",
  "window.location",
  "navigator.geolocation",
  "mediaDevices"
].forEach(term => {
  assert(!harnessSource.includes(term), `LIVE3 harness must not include unsafe or mutating API: ${term}`);
});

const alias = "qa:nexus-sprint-live3-mock-source-provider-harness";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include LIVE3 QA.");
assert(qaSuite.includes("scripts/nexus-sprint-live2-provider-adapter-interface-source-result-contract-qa.js"), "LIVE3 requires LIVE2 QA to remain in qa-suite.");

console.log("[nexus-sprint-live3-mock-source-provider-harness-qa] passed");
