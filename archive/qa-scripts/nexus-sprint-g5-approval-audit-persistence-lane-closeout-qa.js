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

const docName = "NEXUS_SPRINT_G5_APPROVAL_AUDIT_PERSISTENCE_LANE_CLOSEOUT.md";
const qaName = "nexus-sprint-g5-approval-audit-persistence-lane-closeout-qa.js";

assert(exists("docs", docName), "Sprint G5 closeout doc must exist.");
assert(exists("scripts", qaName), "Sprint G5 QA script must exist.");

const doc = read("docs", docName);
const index = read("public", "index.html");
const app = read("public", "app.js");
const server = read("server.js");
const pkg = JSON.parse(read("package.json"));
const qaSuite = read("scripts", "qa-suite.js");
const contractSource = read("public", "nexus-approval-audit-persistence-contract.js");
const g3Harness = read("scripts", "nexus-sprint-g3-approval-audit-persistence-fixture-harness.js");

assertIncludes(doc, [
  "Sprint G5",
  "0347c28a0efd6fa8ded70823892a53cf3f9cb82b",
  "documentation and deterministic QA only",
  "Sprint G Completion Summary",
  "What Is Active Now",
  "What Remains Inert",
  "No-Write And No-Execution Guarantees",
  "Blocked Runtime Categories",
  "Standard User Safety Posture",
  "Browser Validation Implication",
  "Rollback Strategy",
  "Sprint H1 - Consent Center Runtime Activation Readiness Gate"
], "G5 closeout doc");

assertIncludes(doc, [
  "approval-audit persistence readiness gate",
  "approval-audit persistence contract",
  "approval-audit persistence fixture harness",
  "approval-audit persistence no-write regression guard",
  "approval-audit persistence lane closeout"
], "G5 sprint summary");

assertIncludes(doc, [
  "approval-audit persistence readiness is not persistence activation",
  "approval-audit persistence contract records are not stored records",
  "approval-audit persistence lifecycle fixtures are not runtime events",
  "no action has been taken",
  "noExecution: true",
  "persistenceEnabled: false",
  "storageWriteAllowed: false",
  "backendWriteAllowed: false",
  "networkAllowed: false",
  "auditExportAllowed: false",
  "providerHandoffAllowed: false",
  "executionAuthority: false",
  "eventStored: false",
  "eventExported: false",
  "actionExecuted: false",
  "unsafe persistence attempts normalize back to no-write and no-execution values"
], "G5 no-write and no-execution language");

assertIncludes(doc, [
  "approval-audit persistence UI",
  "log viewers or audit export controls",
  "event handlers",
  "confirmation bypasses",
  "approval record persistence",
  "audit event storage",
  "backend writes",
  "filesystem writes",
  "localStorage writes",
  "sessionStorage writes",
  "IndexedDB writes",
  "network calls",
  "fetch or sendBeacon calls",
  "provider handoff",
  "native bridge dispatch",
  "calls",
  "messages",
  "WhatsApp, Telegram, SMS, or email sending",
  "payment execution",
  "marketplace transactions",
  "location sharing",
  "camera or microphone activation",
  "health, medical, pharmacy, prescription, or FHIR execution",
  "appointment scheduling",
  "transportation dispatch",
  "emergency dispatch",
  "account or identity mutation",
  "external navigation",
  "real pending action creation",
  "execution authority"
], "G5 blocked runtime categories");

const requiredDocs = [
  "NEXUS_SPRINT_G1_APPROVAL_AUDIT_PERSISTENCE_READINESS_GATE.md",
  "NEXUS_SPRINT_G2_APPROVAL_AUDIT_PERSISTENCE_CONTRACT.md",
  "NEXUS_SPRINT_G3_APPROVAL_AUDIT_PERSISTENCE_FIXTURE_HARNESS.md",
  "NEXUS_SPRINT_G4_APPROVAL_AUDIT_PERSISTENCE_NO_WRITE_REGRESSION_GUARD.md"
];

for (const requiredDoc of requiredDocs) {
  assert(exists("docs", requiredDoc), `Sprint G5 requires prior Sprint G doc: ${requiredDoc}`);
}

const requiredScripts = [
  "nexus-sprint-g1-approval-audit-persistence-readiness-gate-qa.js",
  "nexus-sprint-g2-approval-audit-persistence-contract-qa.js",
  "nexus-sprint-g3-approval-audit-persistence-fixture-harness-qa.js",
  "nexus-sprint-g4-approval-audit-persistence-no-write-regression-guard-qa.js"
];

for (const requiredScript of requiredScripts) {
  assert(exists("scripts", requiredScript), `Sprint G5 requires prior Sprint G QA: ${requiredScript}`);
  assert(qaSuite.includes(`scripts/${requiredScript}`), `qa-suite must include prior Sprint G QA: ${requiredScript}`);
}

assert(exists("public", "nexus-approval-audit-persistence-contract.js"), "Sprint G5 requires G2 persistence contract.");
assert(exists("fixtures", "nexus", "approval-audit-persistence-records.json"), "Sprint G5 requires G2 record fixture.");
assert(exists("fixtures", "nexus", "approval-audit-persistence-lifecycle.json"), "Sprint G5 requires G3 lifecycle fixture.");
assert(exists("scripts", "nexus-sprint-g3-approval-audit-persistence-fixture-harness.js"), "Sprint G5 requires G3 fixture harness.");

assertIncludes(contractSource, [
  "DEFAULT_APPROVAL_AUDIT_PERSISTENCE_RECORD",
  "NO_PERSISTENCE_DEFAULTS",
  "createApprovalAuditPersistenceRecord",
  "persistenceEnabled",
  "storageWriteAllowed",
  "backendWriteAllowed",
  "networkAllowed",
  "executionAuthority",
  "noExecution"
], "G2 persistence contract");

assertIncludes(g3Harness, [
  "loadApprovalAuditPersistenceFixtures",
  "validateApprovalAuditPersistenceFixtures",
  "observeRecordFixture",
  "observeLifecycleFixture"
], "G3 persistence harness");

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

const normalizedUnsafeAttempt = createApprovalAuditPersistenceRecord({
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
  callPlaced: true,
  messageSent: true,
  paymentExecuted: true,
  healthActionPerformed: true,
  locationShared: true,
  emergencyDispatched: true,
  marketplaceTransactionCompleted: true,
  accountMutated: true
});

assert.equal(normalizedUnsafeAttempt.noExecution, true);
assert.equal(normalizedUnsafeAttempt.persistenceEnabled, false);
assert.equal(normalizedUnsafeAttempt.storageWriteAllowed, false);
assert.equal(normalizedUnsafeAttempt.backendWriteAllowed, false);
assert.equal(normalizedUnsafeAttempt.networkAllowed, false);
assert.equal(normalizedUnsafeAttempt.auditExportAllowed, false);
assert.equal(normalizedUnsafeAttempt.providerHandoffAllowed, false);
assert.equal(normalizedUnsafeAttempt.executionAuthority, false);
assert.equal(normalizedUnsafeAttempt.eventStored, false);
assert.equal(normalizedUnsafeAttempt.eventExported, false);
assert.equal(normalizedUnsafeAttempt.actionExecuted, false);
assert.equal(normalizedUnsafeAttempt.callPlaced, false);
assert.equal(normalizedUnsafeAttempt.messageSent, false);
assert.equal(normalizedUnsafeAttempt.paymentExecuted, false);
assert.equal(normalizedUnsafeAttempt.healthActionPerformed, false);
assert.equal(normalizedUnsafeAttempt.locationShared, false);
assert.equal(normalizedUnsafeAttempt.emergencyDispatched, false);
assert.equal(normalizedUnsafeAttempt.marketplaceTransactionCompleted, false);
assert.equal(normalizedUnsafeAttempt.accountMutated, false);

const fixtureResult = validateApprovalAuditPersistenceFixtures(loadApprovalAuditPersistenceFixtures());
assert.equal(fixtureResult.ok, true, "G3 fixtures must remain valid.");
assert.equal(fixtureResult.recordCount, 3, "G3 record fixtures must remain complete.");
assert.equal(fixtureResult.lifecycleCount, 3, "G3 lifecycle fixtures must remain complete.");

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
  "approvalAuditPersistence",
  "nexus-sprint-g5-approval-audit-persistence-lane-closeout"
]) {
  assert(!runtime.includes(term), `Runtime must not load or activate approval-audit persistence lane artifact: ${term}`);
}

for (const source of [contractSource, g3Harness]) {
  for (const term of [
    "document.",
    "querySelector",
    "addEventListener",
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
    assert(!source.includes(term), `Sprint G contract/harness must not include runtime or write API: ${term}`);
  }
}

const alias = "qa:nexus-sprint-g5-approval-audit-persistence-lane-closeout";
const command = `node scripts/${qaName}`;
assert(pkg.scripts && pkg.scripts[alias] === command, `${alias} package script must exist.`);
assert(qaSuite.includes(`scripts/${qaName}`), "qa-suite must include Sprint G5 QA.");

console.log("[nexus-sprint-g5-approval-audit-persistence-lane-closeout-qa] passed");
