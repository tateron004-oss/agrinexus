const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  loadApprovalAuditPersistenceFixtures,
  validateApprovalAuditPersistenceFixtures
} = require("./nexus-sprint-g3-approval-audit-persistence-fixture-harness.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function exists(...parts) {
  return fs.existsSync(path.join(root, ...parts));
}

function assertIncludes(source, terms, label) {
  for (const term of terms) {
    assert(source.includes(term), `${label} must include: ${term}`);
  }
}

const docName = "NEXUS_SPRINT_G3_APPROVAL_AUDIT_PERSISTENCE_FIXTURE_HARNESS.md";
const qaName = "nexus-sprint-g3-approval-audit-persistence-fixture-harness-qa.js";
const harnessName = "nexus-sprint-g3-approval-audit-persistence-fixture-harness.js";

assert(exists("docs", docName), "Sprint G3 doc must exist.");
assert(exists("scripts", qaName), "Sprint G3 QA script must exist.");
assert(exists("scripts", harnessName), "Sprint G3 harness must exist.");
assert(exists("fixtures", "nexus", "approval-audit-persistence-lifecycle.json"), "Sprint G3 lifecycle fixture must exist.");

const doc = read("docs", docName);
const harnessSource = read("scripts", harnessName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "Sprint G3",
  "41dd4706ac0d3c59ee769340c810181069fdb6e2",
  "deterministic fixture harness",
  "does not persist records",
  "Covered Scenarios",
  "Safety Guarantees",
  "Standard User Runtime Boundary",
  "Browser Validation Implication",
  "Sprint G4 - Approval Audit Persistence No-Write Regression Guard"
], "G3 fixture harness doc");

assertIncludes(doc, [
  "noExecution: true",
  "persistenceEnabled: false",
  "storageWriteAllowed: false",
  "backendWriteAllowed: false",
  "networkAllowed: false",
  "providerHandoffAllowed: false",
  "executionAuthority: false",
  "eventStored: false",
  "actionExecuted: false"
], "G3 safety guarantees");

assertIncludes(harnessSource, [
  "loadApprovalAuditPersistenceFixtures",
  "observeRecordFixture",
  "observeLifecycleFixture",
  "validateApprovalAuditPersistenceFixtures",
  "createApprovalAuditPersistenceRecord"
], "G3 harness source");

const fixtures = loadApprovalAuditPersistenceFixtures();
assert.equal(fixtures.records.length, 3, "G2 record fixtures must remain complete.");
assert.equal(fixtures.lifecycles.length, 3, "G3 lifecycle fixtures must cover three lifecycle cases.");

const result = validateApprovalAuditPersistenceFixtures(fixtures);
assert.equal(result.ok, true, "G3 fixture harness must validate all fixtures.");
assert.equal(result.recordCount, 3, "G3 harness must report three record fixtures.");
assert.equal(result.lifecycleCount, 3, "G3 harness must report three lifecycle fixtures.");

for (const item of result.results) {
  const record = item.finalRecord || item.record;
  assert.equal(record.noExecution, true, `${item.name} must be no-execution.`);
  assert.equal(record.persistenceEnabled, false, `${item.name} must not enable persistence.`);
  assert.equal(record.storageWriteAllowed, false, `${item.name} must not allow storage writes.`);
  assert.equal(record.backendWriteAllowed, false, `${item.name} must not allow backend writes.`);
  assert.equal(record.networkAllowed, false, `${item.name} must not allow network calls.`);
  assert.equal(record.executionAuthority, false, `${item.name} must not grant execution authority.`);
  assert.equal(record.eventStored, false, `${item.name} must not claim storage.`);
  assert.equal(record.actionExecuted, false, `${item.name} must not claim execution.`);
}

for (const term of [
  "fetch(",
  "XMLHttpRequest",
  "localStorage",
  "sessionStorage",
  "indexedDB",
  "navigator.geolocation",
  "mediaDevices",
  "window.location",
  "location.href",
  "sendBeacon",
  "setItem",
  "window.nativeBridge",
  "nativeBridge.",
  "ACTION_CALL",
  "getUserMedia",
  "openWorkflow(",
  "goSection(",
  "writeFile",
  "appendFile",
  "createServer",
  "listen("
]) {
  assert(!harnessSource.includes(term), `G3 harness must not include runtime API: ${term}`);
}

const runtime = [index, app, server].join("\n");
for (const term of [
  harnessName,
  "approval-audit-persistence-lifecycle.json",
  "loadApprovalAuditPersistenceFixtures",
  "validateApprovalAuditPersistenceFixtures",
  "nexus-sprint-g3-approval-audit-persistence-fixture-harness"
]) {
  assert(!runtime.includes(term), `Runtime must not load G3 fixture harness artifact: ${term}`);
}

const alias = "qa:nexus-sprint-g3-approval-audit-persistence-fixture-harness";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint G3 QA.");

console.log("[nexus-sprint-g3-approval-audit-persistence-fixture-harness-qa] passed");
