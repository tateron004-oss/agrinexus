const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const runtime = require(path.join(root, "public", "nexus-genesis-provider-orchestration.js"));
const abstraction = require(path.join(root, "public", "nexus-genesis-provider-abstraction.js"));
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");
const index = fs.readFileSync(path.join(root, "public", "index.html"), "utf8");
const server = fs.readFileSync(path.join(root, "server.js"), "utf8");
const qaSuite = fs.readFileSync(path.join(root, "scripts", "qa-suite.js"), "utf8");
const packageJson = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));

function includes(source, token, label) {
  assert(source.includes(token), `${label} should include ${token}`);
}

function adapter(providerId) {
  const found = runtime.getAdapter(providerId);
  assert(found, `adapter ${providerId} should be registered`);
  return found;
}

assert.strictEqual(runtime.SERVICE_ID, "nexus_genesis_provider_orchestration_runtime");
assert.strictEqual(runtime.SCHEMA_VERSION, "nexus.genesis.provider-orchestration.v1");
assert(runtime.ADAPTER_CONTRACTS.length >= abstraction.PROVIDERS.length, "every provider should have an adapter contract");
assert(runtime.ADAPTER_CONTRACTS.length >= 50, "adapter registry should cover all major provider families");
assert(runtime.DATA_GOVERNANCE_CONTROLS.length >= 6, "data governance controls should cover privacy, retention, residency, deletion, revocation, and transfer");
assert(runtime.REVIEW_DIMENSIONS.includes("security"), "review dimensions should include security");
assert(runtime.REVIEW_DIMENSIONS.includes("privacy"), "review dimensions should include privacy");
assert(runtime.REVIEW_DIMENSIONS.includes("accessibility"), "review dimensions should include accessibility");

[
  "ai",
  "cloud",
  "voice_translation",
  "maps_weather",
  "communications",
  "payments_finance",
  "healthcare",
  "workforce_learning",
  "agriculture_market",
  "logistics_drone",
  "local"
].forEach(family => assert(runtime.ADAPTER_FAMILIES.includes(family), `adapter family ${family} should exist`));

[
  "local_completed",
  "queued",
  "credential-blocked",
  "consent-blocked",
  "confirmation-blocked",
  "jurisdiction-blocked",
  "data-class-blocked",
  "quota-blocked",
  "circuit-open",
  "cancelled",
  "duplicate-blocked",
  "replay-blocked",
  "provider-prepared",
  "not production-authorized",
  "failed-safe"
].forEach(state => assert(runtime.EXECUTION_STATES.includes(state), `execution state ${state} should exist`));

[
  "no_silent_execution",
  "secret_redaction",
  "ack_not_outcome",
  "high_impact_confirmation",
  "data_class_enforcement",
  "jurisdiction_enforcement",
  "cost_quota_guard",
  "retry_boundaries",
  "idempotency_required",
  "local_fallback_first"
].forEach(ruleId => {
  assert(runtime.PROVIDER_POLICY_RULES.some(rule => rule.ruleId === ruleId), `policy rule ${ruleId} should exist`);
});

[
  "local.nexus",
  "openai",
  "aws",
  "azure",
  "google-cloud",
  "twilio-sms",
  "twilio-whatsapp",
  "twilio-voice",
  "sendgrid-email",
  "stripe-card",
  "mobile-money",
  "fhir-provider",
  "telehealth-provider",
  "pharmacy-provider",
  "training-provider",
  "agriculture-authority",
  "buyer-partner",
  "logistics-provider",
  "drone-provider"
].forEach(adapter);

const localReadiness = runtime.evaluateExecutionReadiness({
  command: "help with crop support",
  capabilityId: "agriculture.extension",
  dataClass: "public",
  country: "Kenya"
});
assert.strictEqual(localReadiness.providerId, "local.nexus");
assert.strictEqual(localReadiness.state, "local-ready");
assert.strictEqual(localReadiness.executionAuthority, false);

const localDryRun = runtime.executeDryRun({
  command: "help with crop support",
  capabilityId: "agriculture.extension",
  dataClass: "public",
  country: "Kenya",
  idempotencyKey: "qa-local-agriculture-1",
  replayToken: "qa-replay-local-agriculture-1"
});
assert.strictEqual(localDryRun.state, "local_completed");
assert.strictEqual(localDryRun.ok, true);
assert.strictEqual(localDryRun.noLiveExternalExecution, true);
assert.strictEqual(localDryRun.noSecretExposure, true);
assert.strictEqual(localDryRun.receipt.acknowledgementIsNotOutcome, true);

const duplicate = runtime.executeDryRun({
  command: "help with crop support",
  capabilityId: "agriculture.extension",
  dataClass: "public",
  country: "Kenya",
  idempotencyKey: "qa-local-agriculture-1",
  replayToken: "qa-replay-local-agriculture-1"
});
assert(["duplicate-blocked", "replay-blocked"].includes(duplicate.readiness.state), "duplicate or replay should be blocked");
assert.strictEqual(duplicate.noLiveExternalExecution, true);

const smsBlocked = runtime.evaluateExecutionReadiness({
  command: "prepare an SMS",
  capabilityId: "communications.sms",
  providerId: "twilio-sms",
  dataClass: "personal",
  country: "US",
  consentState: "missing",
  confirmationState: "missing"
}, {});
assert.strictEqual(smsBlocked.providerId, "twilio-sms");
assert.strictEqual(smsBlocked.state, "credential-blocked");
assert.strictEqual(smsBlocked.executionAuthority, false);
assert(smsBlocked.readiness.missingEnv.includes("TWILIO_ACCOUNT_SID"), "SMS readiness should name missing account SID");
assert(smsBlocked.readiness.missingEnv.includes("TWILIO_AUTH_TOKEN"), "SMS readiness should name missing auth token");
assert(smsBlocked.readiness.missingEnv.some(item => /TWILIO_(FROM_)?NUMBER/.test(item)), "SMS readiness should name missing sender number");

const fakeEnv = {
  TWILIO_ACCOUNT_SID: "AC_FAKE_SECRET_VALUE",
  TWILIO_AUTH_TOKEN: "fake-auth-token-secret",
  TWILIO_FROM_NUMBER: "+15551234567",
  SENDGRID_API_KEY: "sendgrid-secret-value",
  STRIPE_SECRET_KEY: "stripe-secret-value"
};
const smsPrepared = runtime.evaluateExecutionReadiness({
  command: "prepare an SMS",
  capabilityId: "communications.sms",
  providerId: "twilio-sms",
  dataClass: "personal",
  country: "US",
  consentState: "granted",
  confirmationState: "confirmed"
}, fakeEnv);
assert.strictEqual(smsPrepared.state, "not production-authorized");
assert.strictEqual(smsPrepared.executionAuthority, false);
assert(smsPrepared.reasons.some(item => /not production-authorized/i.test(item)), "configured SMS should remain production-authorized blocked");

const queue = runtime.enqueue({
  command: "prepare a provider handoff",
  capabilityId: "communications.sms",
  providerId: "twilio-sms",
  dataClass: "personal",
  country: "US"
});
assert.strictEqual(queue.ok, true);
assert(queue.queueItem.queueId.startsWith("provider-queue-"));
assert.strictEqual(queue.queueItem.noExternalExecution, true);

const cancelled = runtime.cancel(queue.queueItem.queueId);
assert.strictEqual(cancelled.ok, true);
assert.strictEqual(cancelled.state, "cancelled");

const disabled = runtime.disableProvider("twilio-sms", "qa_controlled_disablement");
assert.strictEqual(disabled.ok, true);
const disabledReadiness = runtime.evaluateExecutionReadiness({
  capabilityId: "communications.sms",
  providerId: "twilio-sms",
  dataClass: "personal",
  country: "US"
}, fakeEnv);
assert.strictEqual(disabledReadiness.state, "disabled");
const rolledBack = runtime.rollbackProvider("twilio-sms");
assert.strictEqual(rolledBack.ok, true);
assert.strictEqual(rolledBack.circuit.state, "closed");

runtime.recordCircuitFailure("sendgrid-email", "qa_failure_1");
runtime.recordCircuitFailure("sendgrid-email", "qa_failure_2");
const openedCircuit = runtime.recordCircuitFailure("sendgrid-email", "qa_failure_3");
assert.strictEqual(openedCircuit.state, "open");
const circuitBlocked = runtime.evaluateExecutionReadiness({
  capabilityId: "communications.email",
  providerId: "sendgrid-email",
  dataClass: "personal",
  country: "US",
  consentState: "granted",
  confirmationState: "confirmed"
}, { SENDGRID_API_KEY: "configured-secret" });
assert.strictEqual(circuitBlocked.state, "circuit-open");
assert.strictEqual(runtime.resetCircuit("sendgrid-email").state, "closed");

const outcome = runtime.verifyOutcome({
  receiptId: "receipt-qa",
  finalOutcomeVerified: false,
  acknowledgementIsNotOutcome: true
});
assert.strictEqual(outcome.providerOrchestrationVerified, false);
assert.strictEqual(outcome.acknowledgementIsNotOutcome, true);

const configurationControls = runtime.providerConfigurationControls(fakeEnv);
assert.strictEqual(configurationControls.ok, true);
assert(configurationControls.controlCount >= 50);
assert.strictEqual(configurationControls.noSecretExposure, true);
assert.strictEqual(configurationControls.noLiveExternalExecution, true);
assert(configurationControls.controls.some(item => item.providerId === "twilio-sms"), "configuration controls should include Twilio SMS");
assert(configurationControls.controls.every(item => item.secretValuesReturned === false), "configuration controls must not return secret values");

const transferReceipt = runtime.createDataTransferReceipt({
  command: "prepare provider handoff",
  capabilityId: "communications.sms",
  providerId: "twilio-sms",
  dataClass: "personal",
  country: "US",
  jurisdiction: "US",
  consentState: "missing",
  confirmationState: "missing"
}, fakeEnv);
assert.strictEqual(transferReceipt.packetType, "nexus_genesis_provider_data_transfer_receipt");
assert.strictEqual(transferReceipt.noLiveExternalExecution, true);
assert.strictEqual(transferReceipt.noSecretExposure, true);
assert.strictEqual(transferReceipt.deletionSupported, true);
assert.strictEqual(transferReceipt.correctionSupported, true);
assert.strictEqual(transferReceipt.revocationSupported, true);
assert.strictEqual(transferReceipt.dataTransferAllowed, false, "data transfer should remain blocked without consent/confirmation/production authorization");

const capabilityMatrix = runtime.capabilityStatusMatrix(fakeEnv);
assert(capabilityMatrix.length >= abstraction.CAPABILITIES.length, "capability matrix should cover all abstraction capabilities");
assert(capabilityMatrix.every(item => item.executionAuthority === false), "capability matrix must not grant execution authority");
assert(capabilityMatrix.some(item => item.state === "local"), "capability matrix should include local fallback capabilities");
assert(capabilityMatrix.some(item => item.state === "credential-blocked" || item.state === "not production-authorized" || item.state === "consent-blocked"), "capability matrix should include blocked external capability states");

const reviewPacket = runtime.securityPrivacyReview(fakeEnv);
assert.strictEqual(reviewPacket.ok, true);
assert.strictEqual(reviewPacket.pass, true);
assert(reviewPacket.findings.length >= 10, "security/privacy/adversarial/accessibility review should include multiple findings");
assert(reviewPacket.dimensions.includes("adversarial"), "review should cover adversarial testing");
assert.strictEqual(reviewPacket.noSecretExposure, true);

const readinessReport = runtime.endToEndReadinessReport(fakeEnv);
assert.strictEqual(readinessReport.ok, true);
assert.strictEqual(readinessReport.packetType, "nexus_genesis_provider_end_to_end_readiness_report");
assert(readinessReport.providerCount >= 50);
assert(readinessReport.adapterCount >= readinessReport.providerCount);
assert(readinessReport.capabilityCount >= 70);
assert.strictEqual(readinessReport.standardUserTestingReady, true);
assert.strictEqual(readinessReport.productionLiveExecutionAuthorized, false);
assert.strictEqual(readinessReport.noSilentExecution, true);
assert(readinessReport.productionLimitations.some(item => /Live external execution remains provider-specific/i.test(item)), "readiness report should state live-execution limitation");

const consolePacket = runtime.adminConsole(fakeEnv);
assert.strictEqual(consolePacket.ok, true);
assert(consolePacket.providerCount >= 50);
assert(consolePacket.adapterCount >= 50);
assert.strictEqual(consolePacket.noSecretExposure, true);
assert.strictEqual(consolePacket.noLiveExternalExecution, true);

const report = runtime.capabilityReport("Show provider console and retry history", { env: fakeEnv });
assert.strictEqual(report.ok, true);
assert.strictEqual(report.packetType, "nexus_genesis_provider_orchestration_capability_report");
assert(/Live external execution remains gated/i.test(report.answer), "capability report should explain gated live execution");

const status = runtime.status(fakeEnv);
assert.strictEqual(status.ok, true);
assert.strictEqual(status.productionExecutionEnabledByDefault, false);
assert.strictEqual(status.noSilentExecution, true);

const sdk = runtime.sdk();
assert(sdk.executionMethods.includes("evaluateExecutionReadiness"));
assert(sdk.executionMethods.includes("executeDryRun"));
assert(sdk.executionMethods.includes("rollbackProvider"));

const combinedJson = JSON.stringify({ consolePacket, report, status, smsPrepared });
[
  "AC_FAKE_SECRET_VALUE",
  "fake-auth-token-secret",
  "+15551234567",
  "sendgrid-secret-value",
  "stripe-secret-value"
].forEach(secret => assert(!combinedJson.includes(secret), `secret value ${secret} must not be exposed`));

const completionJson = JSON.stringify({ configurationControls, transferReceipt, capabilityMatrix, reviewPacket, readinessReport });
[
  "AC_FAKE_SECRET_VALUE",
  "fake-auth-token-secret",
  "+15551234567",
  "sendgrid-secret-value",
  "stripe-secret-value"
].forEach(secret => assert(!completionJson.includes(secret), `completion packet must not expose ${secret}`));

[
  "/api/nexus/provider-orchestration/status",
  "/api/nexus/provider-orchestration/console",
  "/api/nexus/provider-orchestration/configuration-controls",
  "/api/nexus/provider-orchestration/capability-matrix",
  "/api/nexus/provider-orchestration/security-privacy-review",
  "/api/nexus/provider-orchestration/end-to-end-readiness",
  "/api/nexus/provider-orchestration/capability-report",
  "/api/nexus/provider-orchestration/readiness",
  "/api/nexus/provider-orchestration/queue",
  "/api/nexus/provider-orchestration/execute-dry-run",
  "/api/nexus/provider-orchestration/cancel",
  "/api/nexus/provider-orchestration/disable-provider",
  "/api/nexus/provider-orchestration/rollback-provider",
  "/api/nexus/provider-orchestration/verify-outcome",
  "/api/nexus/provider-orchestration/data-transfer-receipt",
  "/api/nexus/provider-orchestration/sdk"
].forEach(route => includes(server, route, "server"));

includes(index, "/nexus-genesis-provider-orchestration.js", "index");
includes(app, "handleNexusGenesisProviderOrchestrationCommand", "app");
includes(app, "renderNexusGenesisProviderOrchestrationCard", "app");
includes(app, "providerOrchestrationPacket", "app");

assert.strictEqual(
  packageJson.scripts["qa:nexus-genesis-provider-orchestration"],
  "node scripts/nexus-genesis-provider-orchestration-qa.js",
  "package alias should run focused QA"
);
includes(qaSuite, "scripts/nexus-genesis-provider-orchestration-qa.js", "qa-suite");

assert(runtime.shouldHandle("Show provider console and retry history"), "provider console command should route");
assert(runtime.shouldHandle("Which adapter handles SMS?"), "adapter command should route");
assert(runtime.shouldHandle("Show provider completion report"), "provider completion report command should route");
assert(runtime.shouldHandle("Show provider configuration controls"), "configuration controls command should route");
assert(runtime.shouldHandle("Create a data transfer receipt"), "data transfer receipt command should route");
assert(!runtime.shouldHandle("What can Nexus do?"), "general capability command should stay with existing routing");

assert(!/sent successfully|payment completed|appointment booked|provider confirmed|dispatched successfully/i.test(JSON.stringify({ status, report, consolePacket, localDryRun, smsBlocked, readinessReport, reviewPacket })), "orchestration packets must not claim unsafe live success");

console.log("Nexus Genesis provider orchestration QA passed.");
