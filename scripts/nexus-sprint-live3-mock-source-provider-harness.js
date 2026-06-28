const fs = require("node:fs");
const path = require("node:path");
const {
  isSafeReadOnlySourceResult,
  validateReadOnlySourceResult
} = require("../public/nexus-live-source-result-contract.js");

const fixturePath = path.resolve(__dirname, "..", "fixtures", "nexus", "live-source-results.json");

const REQUIRED_JOB_FIELDS = Object.freeze([
  "jobResultId",
  "jobTitle",
  "employerName",
  "employerType",
  "jobLocation",
  "country",
  "cityOrRegion",
  "remoteOrOnsite",
  "employmentType",
  "salaryOrCompensation",
  "postedDate",
  "applicationDeadline",
  "applicationUrl",
  "applicationActionAllowed",
  "applicationSubmissionAuthority"
]);

function loadLiveSourceFixtures() {
  return JSON.parse(fs.readFileSync(fixturePath, "utf8"));
}

function hasText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function validateJobSourceResult(result) {
  const failures = [];
  if (result.requestType !== "job-search" && result.requestType !== "job-application-preparation") {
    return failures;
  }

  REQUIRED_JOB_FIELDS.forEach(field => {
    if (!Object.prototype.hasOwnProperty.call(result, field)) failures.push(`missing job field: ${field}`);
  });

  REQUIRED_JOB_FIELDS.filter(field => !["applicationActionAllowed", "applicationSubmissionAuthority"].includes(field)).forEach(field => {
    if (Object.prototype.hasOwnProperty.call(result, field) && !hasText(result[field])) failures.push(`job field must be text: ${field}`);
  });

  if (result.applicationActionAllowed !== false) failures.push("applicationActionAllowed must be false");
  if (result.applicationSubmissionAuthority !== false) failures.push("applicationSubmissionAuthority must be false");

  return failures;
}

function validateLiveSourceFixtures(fixtures = loadLiveSourceFixtures()) {
  const results = fixtures.map(fixture => {
    const sourceValidation = validateReadOnlySourceResult(fixture);
    const jobFailures = validateJobSourceResult(fixture);
    const ok = sourceValidation.ok && jobFailures.length === 0 && isSafeReadOnlySourceResult(fixture);
    return Object.freeze({
      sourceResultId: fixture.sourceResultId,
      requestType: fixture.requestType,
      sourceStatus: fixture.sourceStatus,
      freshnessStatus: fixture.freshnessStatus,
      evidenceStatus: fixture.evidenceStatus,
      ok,
      executionAllowed: false,
      failures: Object.freeze([...sourceValidation.failures, ...jobFailures])
    });
  });

  return Object.freeze({
    ok: results.every(result => result.ok),
    count: results.length,
    results: Object.freeze(results)
  });
}

if (require.main === module) {
  const validation = validateLiveSourceFixtures();
  validation.results.forEach(result => {
    const marker = result.ok ? "ok" : `failed: ${result.failures.join("; ")}`;
    console.log(`${result.sourceResultId} (${result.requestType}/${result.sourceStatus}) ${marker}`);
  });

  if (!validation.ok) {
    process.exitCode = 1;
  } else {
    console.log(`[nexus-sprint-live3-mock-source-provider-harness] validated ${validation.count} fixture source results`);
  }
}

module.exports = Object.freeze({
  REQUIRED_JOB_FIELDS,
  loadLiveSourceFixtures,
  validateLiveSourceFixtures,
  validateJobSourceResult
});
