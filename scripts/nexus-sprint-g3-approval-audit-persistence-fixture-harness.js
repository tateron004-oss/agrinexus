const fs = require("node:fs");
const path = require("node:path");
const {
  createApprovalAuditPersistenceRecord
} = require("../public/nexus-approval-audit-persistence-contract.js");

const root = path.resolve(__dirname, "..");
const recordFixturePath = path.join(root, "fixtures", "nexus", "approval-audit-persistence-records.json");
const lifecycleFixturePath = path.join(root, "fixtures", "nexus", "approval-audit-persistence-lifecycle.json");

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function loadApprovalAuditPersistenceFixtures() {
  return Object.freeze({
    records: Object.freeze(readJson(recordFixturePath)),
    lifecycles: Object.freeze(readJson(lifecycleFixturePath))
  });
}

function observeRecordFixture(fixture) {
  const record = createApprovalAuditPersistenceRecord(fixture.input || {});
  return Object.freeze({
    name: fixture.name,
    record,
    expected: Object.freeze({ ...(fixture.expected || {}) }),
    ok: Object.entries(fixture.expected || {}).every(([key, value]) => Object.is(record[key], value))
  });
}

function observeLifecycleFixture(fixture) {
  const records = (fixture.steps || []).map(step => createApprovalAuditPersistenceRecord(step));
  const finalRecord = records[records.length - 1] || createApprovalAuditPersistenceRecord();
  return Object.freeze({
    name: fixture.name,
    records: Object.freeze(records),
    finalRecord,
    expectedFinal: Object.freeze({ ...(fixture.expectedFinal || {}) }),
    ok: Object.entries(fixture.expectedFinal || {}).every(([key, value]) => Object.is(finalRecord[key], value))
  });
}

function validateApprovalAuditPersistenceFixtures(fixtures = loadApprovalAuditPersistenceFixtures()) {
  const recordResults = fixtures.records.map(observeRecordFixture);
  const lifecycleResults = fixtures.lifecycles.map(observeLifecycleFixture);
  const allResults = [...recordResults, ...lifecycleResults];
  return Object.freeze({
    ok: allResults.every(result => result.ok),
    recordCount: recordResults.length,
    lifecycleCount: lifecycleResults.length,
    results: Object.freeze(allResults)
  });
}

module.exports = {
  loadApprovalAuditPersistenceFixtures,
  observeRecordFixture,
  observeLifecycleFixture,
  validateApprovalAuditPersistenceFixtures
};

if (require.main === module) {
  const result = validateApprovalAuditPersistenceFixtures();
  if (!result.ok) {
    console.error(JSON.stringify(result, null, 2));
    process.exit(1);
  }
  console.log("[nexus-sprint-g3-approval-audit-persistence-fixture-harness] passed");
}
