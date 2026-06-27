const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  DEFAULT_APPROVAL_AUDIT_PERSISTENCE_RECORD,
  createApprovalAuditPersistenceRecord
} = require("../public/nexus-approval-audit-persistence-contract.js");
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
  const normalizedSource = source.replace(/`/g, "");
  for (const term of terms) {
    assert(normalizedSource.includes(term), `${label} must include: ${term}`);
  }
}

const docName = "NEXUS_SPRINT_G4_APPROVAL_AUDIT_PERSISTENCE_NO_WRITE_REGRESSION_GUARD.md";
const qaName = "nexus-sprint-g4-approval-audit-persistence-no-write-regression-guard-qa.js";

assert(exists("docs", docName), "Sprint G4 no-write guard doc must exist.");
assert(exists("scripts", qaName), "Sprint G4 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");

const protectedImplementationSources = [
  read("public", "nexus-approval-audit-persistence-contract.js"),
  read("scripts", "nexus-sprint-g3-approval-audit-persistence-fixture-harness.js")
];

assertIncludes(doc, [
  "Sprint G4",
  "dc4fc5ec8d63e8bfe3bd2a8fadfd26d8faf9fdc3",
  "documentation and QA only",
  "Protected Artifacts",
  "No-Write Guarantees",
  "Runtime Absence Requirements",
  "Required Safe Defaults",
  "Browser Validation Implication",
  "Sprint G5 - Approval Audit Persistence Lane Closeout"
], "G4 no-write guard doc");

assertIncludes(doc, [
  "localStorage writes",
  "sessionStorage writes",
  "IndexedDB writes",
  "filesystem writes",
  "backend writes",
  "network calls",
  "audit exports",
  "runtime audit event storage",
  "approval record storage",
  "provider handoff",
  "native bridge dispatch",
  "calls or messages",
  "payments",
  "marketplace transactions",
  "location sharing",
  "camera or microphone activation",
  "health, medical, pharmacy, prescription, or FHIR execution",
  "appointment scheduling",
  "transportation dispatch",
  "emergency dispatch",
  "account or identity mutation",
  "external navigation",
  "execution authority"
], "G4 no-write guarantees");

for (const prior of [
  ["docs", "NEXUS_SPRINT_G1_APPROVAL_AUDIT_PERSISTENCE_READINESS_GATE.md"],
  ["docs", "NEXUS_SPRINT_G2_APPROVAL_AUDIT_PERSISTENCE_CONTRACT.md"],
  ["docs", "NEXUS_SPRINT_G3_APPROVAL_AUDIT_PERSISTENCE_FIXTURE_HARNESS.md"],
  ["public", "nexus-approval-audit-persistence-contract.js"],
  ["fixtures", "nexus", "approval-audit-persistence-records.json"],
  ["fixtures", "nexus", "approval-audit-persistence-lifecycle.json"],
  ["scripts", "nexus-sprint-g3-approval-audit-persistence-fixture-harness.js"]
]) {
  assert(exists(...prior), `Sprint G4 requires prior artifact: ${prior.join("/")}`);
}

for (const [key, value] of Object.entries({
  noExecution: true,
  persistenceEnabled: false,
  storageWriteAllowed: false,
  backendWriteAllowed: false,
  networkAllowed: false,
  auditExportAllowed: false,
  providerHandoffAllowed: false,
  executionAuthority: false,
  eventStored: false,
  actionExecuted: false
})) {
  assert.equal(DEFAULT_APPROVAL_AUDIT_PERSISTENCE_RECORD[key], value, `default record must preserve ${key}`);
}

const unsafeRecord = createApprovalAuditPersistenceRecord({
  noExecution: false,
  persistenceEnabled: true,
  storageWriteAllowed: true,
  backendWriteAllowed: true,
  networkAllowed: true,
  auditExportAllowed: true,
  providerHandoffAllowed: true,
  executionAuthority: true,
  eventStored: true,
  actionExecuted: true
});

assert.equal(unsafeRecord.noExecution, true);
assert.equal(unsafeRecord.persistenceEnabled, false);
assert.equal(unsafeRecord.storageWriteAllowed, false);
assert.equal(unsafeRecord.backendWriteAllowed, false);
assert.equal(unsafeRecord.networkAllowed, false);
assert.equal(unsafeRecord.auditExportAllowed, false);
assert.equal(unsafeRecord.providerHandoffAllowed, false);
assert.equal(unsafeRecord.executionAuthority, false);
assert.equal(unsafeRecord.eventStored, false);
assert.equal(unsafeRecord.actionExecuted, false);

const fixtureResult = validateApprovalAuditPersistenceFixtures(loadApprovalAuditPersistenceFixtures());
assert.equal(fixtureResult.ok, true, "G3 fixture harness must remain valid.");
assert.equal(fixtureResult.recordCount, 3, "G3 record fixture count must remain complete.");
assert.equal(fixtureResult.lifecycleCount, 3, "G3 lifecycle fixture count must remain complete.");

const runtime = [index, app, server].join("\n");
for (const term of [
  "nexus-approval-audit-persistence-contract.js",
  "nexus-sprint-g3-approval-audit-persistence-fixture-harness",
  "approval-audit-persistence-records.json",
  "approval-audit-persistence-lifecycle.json",
  "createApprovalAuditPersistenceRecord",
  "persistApprovalAudit",
  "writeApprovalAuditEvent",
  "storeAuditEvent",
  "approvalAuditPersistence"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate approval-audit persistence: ${term}`);
}

for (const source of protectedImplementationSources) {
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
    assert(!source.includes(term), `Approval-audit persistence artifacts must not include write/runtime API: ${term}`);
  }
}

const alias = "qa:nexus-sprint-g4-approval-audit-persistence-no-write-regression-guard";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint G4 QA.");

console.log("[nexus-sprint-g4-approval-audit-persistence-no-write-regression-guard-qa] passed");
