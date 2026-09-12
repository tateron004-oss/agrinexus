const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const contract = require("../public/nexus-approval-audit-persistence-contract.js");

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

const docName = "NEXUS_SPRINT_G2_APPROVAL_AUDIT_PERSISTENCE_CONTRACT.md";
const moduleName = "nexus-approval-audit-persistence-contract.js";
const fixtureName = "approval-audit-persistence-records.json";
const qaName = "nexus-sprint-g2-approval-audit-persistence-contract-qa.js";

assert(exists("docs", docName), "Sprint G2 contract doc must exist.");
assert(exists("public", moduleName), "Sprint G2 contract module must exist.");
assert(exists("fixtures", "nexus", fixtureName), "Sprint G2 fixture must exist.");
assert(exists("scripts", qaName), "Sprint G2 QA script must exist.");

const doc = read("docs", docName);
const moduleSource = read("public", moduleName);
const fixtures = JSON.parse(read("fixtures", "nexus", fixtureName));
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

assertIncludes(doc, [
  "Sprint G2",
  "94f638a7610e5f247f83e219ab5729e9e0f3f777",
  "inert contract",
  "does not persist records",
  "No-Persistence Defaults",
  "Redaction Boundary",
  "Standard User Runtime Boundary",
  "Browser Validation Implication",
  "Sprint G3 - Approval Audit Persistence Fixture Harness"
], "G2 contract doc");

for (const field of contract.APPROVAL_AUDIT_PERSISTENCE_RECORD_FIELDS) {
  assert(Object.prototype.hasOwnProperty.call(contract.DEFAULT_APPROVAL_AUDIT_PERSISTENCE_RECORD, field), `default record must include ${field}`);
  assert(doc.includes(field), `doc must document ${field}`);
}

for (const type of contract.APPROVAL_AUDIT_RECORD_TYPES) {
  assert(doc.includes(type), `doc must document record type ${type}`);
}

for (const status of contract.APPROVAL_AUDIT_PERSISTENCE_STATUSES) {
  assert(doc.includes(status), `doc must document persistence status ${status}`);
}

for (const [key, expected] of Object.entries(contract.NO_PERSISTENCE_DEFAULTS)) {
  assert.equal(contract.DEFAULT_APPROVAL_AUDIT_PERSISTENCE_RECORD[key], expected, `default record must keep ${key} safe`);
}

assert.equal(contract.DEFAULT_APPROVAL_AUDIT_PERSISTENCE_RECORD.noExecution, true);
assert.equal(contract.DEFAULT_APPROVAL_AUDIT_PERSISTENCE_RECORD.persistenceEnabled, false);
assert.equal(contract.DEFAULT_APPROVAL_AUDIT_PERSISTENCE_RECORD.storageWriteAllowed, false);
assert.equal(contract.DEFAULT_APPROVAL_AUDIT_PERSISTENCE_RECORD.backendWriteAllowed, false);
assert.equal(contract.DEFAULT_APPROVAL_AUDIT_PERSISTENCE_RECORD.networkAllowed, false);
assert.equal(contract.DEFAULT_APPROVAL_AUDIT_PERSISTENCE_RECORD.auditExportAllowed, false);
assert.equal(contract.DEFAULT_APPROVAL_AUDIT_PERSISTENCE_RECORD.executionAuthority, false);
assert.equal(contract.DEFAULT_APPROVAL_AUDIT_PERSISTENCE_RECORD.eventStored, false);

assert(Array.isArray(fixtures), "fixtures must be an array.");
assert(fixtures.length >= 3, "fixtures must cover default, accepted, and blocked cases.");

for (const fixture of fixtures) {
  const record = contract.createApprovalAuditPersistenceRecord(fixture.input);
  assert(Object.isFrozen(record), `${fixture.name} record must be frozen.`);
  for (const [key, value] of Object.entries(fixture.expected)) {
    assert.deepEqual(record[key], value, `${fixture.name} must normalize ${key}`);
  }
  assert.equal(record.noExecution, true, `${fixture.name} must remain no-execution.`);
  assert.equal(record.persistenceEnabled, false, `${fixture.name} must not enable persistence.`);
  assert.equal(record.storageWriteAllowed, false, `${fixture.name} must not allow storage writes.`);
  assert.equal(record.backendWriteAllowed, false, `${fixture.name} must not allow backend writes.`);
  assert.equal(record.networkAllowed, false, `${fixture.name} must not allow network calls.`);
  assert.equal(record.executionAuthority, false, `${fixture.name} must not grant execution authority.`);
  assert.equal(record.eventStored, false, `${fixture.name} must not claim event storage.`);
}

const unsafe = contract.createApprovalAuditPersistenceRecord({
  recordType: "approval_accepted_without_execution",
  persistenceStatus: "approved_not_live",
  targetSummary: "x".repeat(400),
  providerSummary: "y".repeat(400),
  redactedPayload: { ok: true },
  noExecution: false,
  persistenceEnabled: true,
  storageWriteAllowed: true,
  backendWriteAllowed: true,
  networkAllowed: true,
  auditExportAllowed: true,
  providerHandoffAllowed: true,
  executionAuthority: true,
  eventStored: true,
  eventExported: true,
  actionExecuted: true,
  providerContacted: true,
  callPlaced: true,
  messageSent: true,
  paymentExecuted: true,
  healthActionPerformed: true,
  locationShared: true,
  emergencyDispatched: true,
  marketplaceTransactionCompleted: true,
  accountMutated: true
});

assert.equal(unsafe.noExecution, true);
assert.equal(unsafe.persistenceEnabled, false);
assert.equal(unsafe.storageWriteAllowed, false);
assert.equal(unsafe.backendWriteAllowed, false);
assert.equal(unsafe.networkAllowed, false);
assert.equal(unsafe.auditExportAllowed, false);
assert.equal(unsafe.providerHandoffAllowed, false);
assert.equal(unsafe.executionAuthority, false);
assert.equal(unsafe.eventStored, false);
assert.equal(unsafe.eventExported, false);
assert.equal(unsafe.actionExecuted, false);
assert.equal(unsafe.callPlaced, false);
assert.equal(unsafe.messageSent, false);
assert.equal(unsafe.paymentExecuted, false);
assert.equal(unsafe.healthActionPerformed, false);
assert.equal(unsafe.locationShared, false);
assert.equal(unsafe.emergencyDispatched, false);
assert.equal(unsafe.marketplaceTransactionCompleted, false);
assert.equal(unsafe.accountMutated, false);
assert.equal(unsafe.targetSummary.length, 160);
assert.equal(unsafe.providerSummary.length, 160);
assert.deepEqual(unsafe.redactedPayload, { ok: true });

const invalid = contract.createApprovalAuditPersistenceRecord({
  recordType: "approval_saved_to_database",
  persistenceStatus: "live_enabled"
});
assert.equal(invalid.recordType, "audit_persistence_unavailable");
assert.equal(invalid.persistenceStatus, "not_configured");

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
  assert(!moduleSource.includes(term), `G2 contract module must not include runtime API: ${term}`);
}

const runtime = [index, app, server].join("\n");
for (const term of [
  moduleName,
  "NexusApprovalAuditPersistenceContract",
  "createApprovalAuditPersistenceRecord",
  "approval-audit-persistence-records.json",
  "nexus-sprint-g2-approval-audit-persistence-contract"
]) {
  assert(!runtime.includes(term), `Runtime must not load G2 persistence contract artifact: ${term}`);
}

const alias = "qa:nexus-sprint-g2-approval-audit-persistence-contract";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint G2 QA.");

console.log("[nexus-sprint-g2-approval-audit-persistence-contract-qa] passed");
