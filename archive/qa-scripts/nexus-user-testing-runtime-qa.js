"use strict";

const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const runtime = require("../server/nexus-user-testing-runtime.js");

function read(relativePath) {
  return fs.readFileSync(path.join(root, relativePath), "utf8");
}

function assertIncludes(haystack, needle, label) {
  assert.ok(haystack.includes(needle), `${label} should include ${needle}`);
}

function assertNotIncludes(haystack, needle, label) {
  assert.ok(!haystack.includes(needle), `${label} should not include ${needle}`);
}

const db = { profile: {} };
const envMissing = {};
const envConfigured = {
  DATABASE_URL: "postgres://configured",
  TAVILY_API_KEY: "secret-live-knowledge",
  NEXUS_LIVE_KNOWLEDGE_ENABLED: "true",
  TWILIO_ACCOUNT_SID: "sid",
  TWILIO_AUTH_TOKEN: "token",
  TWILIO_FROM_NUMBER: "+15551231234",
  NEXUS_MESSAGES_ENABLED: "true"
};

assert.ok(runtime.MEMORY_RECORD_TYPES.includes("health_chronic_care"), "health memory type should exist");
assert.ok(runtime.MEMORY_RECORD_TYPES.includes("agriculture_crop_issue"), "agriculture memory type should exist");
assert.ok(runtime.MEMORY_RECORD_TYPES.includes("marketplace_intent"), "marketplace memory type should exist");
assert.ok(runtime.MEMORY_RECORD_TYPES.includes("logistics_route"), "logistics memory type should exist");
assert.ok(runtime.MEMORY_RECORD_TYPES.includes("training_workforce"), "training/workforce memory type should exist");

const missingDb = runtime.databaseReadiness(envMissing);
assert.equal(missingDb.configured, false, "missing DB should be unconfigured");
assert.equal(missingDb.userMessage, "Local memory active. Production database not connected.", "local memory copy should be exact");
assert.ok(missingDb.missingEnvNames.includes("DATABASE_URL"), "DB missing env should include DATABASE_URL");
assert.equal(missingDb.noSecretValues, true, "DB readiness should promise no secret values");

const configuredDb = runtime.databaseReadiness(envConfigured);
assert.equal(configuredDb.configured, true, "configured DB shape should be detected");
assert.deepEqual(configuredDb.missingEnvNames, [], "configured DB should not report missing names");

const providersMissing = runtime.providerActivationSnapshot(envMissing);
assert.ok(providersMissing.lanes.length >= 16, "provider snapshot should include all required lanes");
assert.ok(providersMissing.lanes.some(lane => lane.id === "sms" && lane.testabilityState === "missing_config"), "SMS should be missing config when env is absent");
assert.ok(providersMissing.lanes.some(lane => lane.id === "payments"), "payments lane should exist");
assert.ok(providersMissing.lanes.some(lane => lane.id === "drone-service"), "drone lane should exist");
assert.equal(providersMissing.noSecretValues, true, "provider snapshot should not expose secrets");

const providersConfigured = runtime.providerActivationSnapshot(envConfigured);
assert.ok(providersConfigured.lanes.some(lane => lane.id === "live-knowledge-search" && lane.configured), "live knowledge should detect configured env shape");
assert.ok(providersConfigured.lanes.some(lane => lane.id === "sms" && lane.configured), "SMS should detect configured env shape");
assertNotIncludes(JSON.stringify(providersConfigured), "secret-live-knowledge", "provider snapshot");
assertNotIncludes(JSON.stringify(providersConfigured), "+15551231234", "provider snapshot");

const record = runtime.createMemoryRecord(db, {
  type: "agriculture_crop_issue",
  title: "Tomato blight testing record",
  summary: "Farmer reports spots and irrigation concerns.",
  ownerRole: "Farmer",
  data: { crop: "tomato", issue: "leaf spots" }
}, { role: "Farmer" });
assert.equal(record.type, "agriculture_crop_issue", "record type should be preserved");
assert.equal(record.noExecutionAuthorized, true, "memory record should not authorize execution");

const updated = runtime.updateMemoryRecord(db, record.id, { summary: "Updated local crop issue summary." });
assert.equal(updated.ok, true, "record update should work");
assert.match(updated.record.summary, /Updated local/, "record should update summary");

const receipt = runtime.createReceipt(db, {
  title: "Crop packet receipt",
  actionType: "run_local_harness",
  status: "completed_local",
  outcome: "Local crop packet was prepared and verified."
});
const attached = runtime.attachReceiptToRecord(db, record.id, receipt.id);
assert.equal(attached.ok, true, "receipt should attach");
assert.ok(attached.record.receipts.includes(receipt.id), "record should reference receipt");

const archived = runtime.archiveMemoryRecord(db, record.id);
assert.equal(archived.ok, true, "record should archive");
assert.equal(archived.record.archived, true, "record should be archived");
assert.ok(archived.record.archivedAt, "record should have archived timestamp");
assert.ok(runtime.searchMemoryRecords(db, "tomato").length >= 1, "archived records should remain searchable");

const prediction = runtime.generatePrediction(db, {
  domain: "chronic_care",
  signals: ["diabetes", "blood pressure", "missed reading"]
}, envMissing);
assert.equal(prediction.riskLevel, "elevated", "prediction should detect elevated risk signal");
assert.ok(prediction.safetyNotes.some(note => /does not diagnose/i.test(note)), "prediction should preserve medical safety");

const executionNeedsConfirmation = runtime.runExecutionRequest(db, { actionType: "send_sms", confirmed: false }, { role: "Standard User" });
assert.equal(executionNeedsConfirmation.execution.status, "requires_confirmation", "SMS should require confirmation");
assert.equal(executionNeedsConfirmation.execution.providerExecuted, false, "SMS should not execute provider");

const executionBlocked = runtime.runExecutionRequest(db, { actionType: "create_payment", confirmed: true }, { role: "Standard User" });
assert.equal(executionBlocked.execution.status, "blocked_missing_credentials", "payment should block without credentials");
assert.equal(executionBlocked.execution.externalExecution, false, "payment should not execute externally");

const consentGate = runtime.createConsentGate(db, {
  actionType: "provider_referral_preparation",
  riskTier: "high",
  actionSummary: "Prepare provider referral summary.",
  dataIncluded: ["summary", "user entered notes"],
  recipientDisplay: "Provider not selected",
  providerDisplay: "Provider not connected"
});
assert.equal(consentGate.finalExecutionGateRequired, true, "consent gate should require final gate");
assert.equal(consentGate.executionAuthority, false, "consent gate should not grant execution authority");
assert.deepEqual(consentGate.requiredUserChoice, ["approve", "cancel"], "consent gate should expose approval/cancel choices");

const verification = runtime.verifyOutcome(db, { status: "completed_local", summary: "Local action verified." }, { role: "Admin / Review" });
assert.equal(verification.status, "completed_local", "verification should preserve local status");

const roleSnapshot = runtime.roleDashboardSnapshot(db, "Provider", envMissing);
assert.equal(roleSnapshot.selectedRole, "Provider", "role snapshot should select requested role");
assert.ok(roleSnapshot.roles.length >= 10, "role snapshot should include required role surfaces");
assert.ok(roleSnapshot.roles.every(role => role.restrictedActions.some(action => /silent provider handoff/i.test(action))), "roles should preserve restricted actions");

const harness = runtime.runUserTestingHarness(db, envMissing);
assert.equal(harness.ok, true, "harness should run");
assert.ok(harness.flowsCreated >= 6, "harness should create all deterministic flows");
assert.equal(harness.providerBlockedExample.providerExecuted, false, "harness should not execute provider");
assert.equal(harness.noLiveExecution, true, "harness should mark no live execution");

const security = runtime.securityAuditSnapshot(db, envMissing);
assert.equal(security.archiveInsteadOfDelete, true, "security audit should require archive instead of delete");
assert.match(security.medicalSafety, /does not diagnose/i, "medical safety should be explicit");
assert.match(security.paymentSafety, /does not verify or move money/i, "payment safety should be explicit");
assert.match(security.providerSafety, /remain blocked/i, "provider safety should be explicit");

const readiness = runtime.userTestingReadinessSnapshot(db, envMissing);
assert.equal(readiness.readyForControlledUserTesting, true, "readiness should be true for local-safe testing");
assert.equal(readiness.externalExecutionEnabled, false, "external execution should stay disabled");
assert.ok(readiness.counts.records >= 1, "readiness should report records");

const serverSource = read("server.js");
assertIncludes(serverSource, "nexus-user-testing-runtime.js", "server.js");
assertIncludes(serverSource, "/api/nexus/user-testing/status", "server.js");
assertIncludes(serverSource, "/api/nexus/user-testing/e2e-harness", "server.js");
assertIncludes(serverSource, "/api/nexus/user-testing/execute", "server.js");

const appSource = read("public/app.js");
assertIncludes(appSource, "data-nexus-user-testing-runtime=\"true\"", "public/app.js");
assertIncludes(appSource, "Local memory active. Production database not connected.", "public/app.js");
assertIncludes(appSource, "data-nexus-user-testing-action=\"run-harness\"", "public/app.js");
assertIncludes(appSource, "data-nexus-role-surface", "public/app.js");
assertIncludes(appSource, "/api/nexus/user-testing/status", "public/app.js");

const packageJson = read("package.json");
assertIncludes(packageJson, "qa:nexus-user-testing-runtime", "package.json");

const qaSuite = read("scripts/qa-suite.js");
assertIncludes(qaSuite, "scripts/nexus-user-testing-runtime-qa.js", "qa-suite.js");

const doc = read("docs/NEXUS_USER_TESTING_RUNTIME.md");
assertIncludes(doc, "Local memory active. Production database not connected.", "runtime doc");
assertIncludes(doc, "This layer does not diagnose", "runtime doc");
assertIncludes(doc, "Credential readiness reports missing environment variable names only", "runtime doc");

for (const unsafe of [
  "payment completed",
  "message sent",
  "drone dispatched",
  "appointment booked",
  "provider referral submitted",
  "fake citations"
]) {
  assertNotIncludes(read("server/nexus-user-testing-runtime.js").toLowerCase(), unsafe, "runtime module unsafe wording");
}

console.log("Nexus user testing runtime QA passed");
