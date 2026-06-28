const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const audit = require("../public/nexus-live-source-audit-logging-contract.js");
const orchestrator = require("../server/nexus-live-source-orchestrator.js");

const root = path.resolve(__dirname, "..");

function read(...parts) {
  return fs.readFileSync(path.join(root, ...parts), "utf8");
}

function assertSafeEvent(event, label) {
  assert.equal(audit.isSafeLiveSourceRetrievalAuditEvent(event), true, `${label} audit event must be safe.`);
  assert.equal(event.noExecutionAuthorized, true, `${label} must not authorize execution.`);
  assert.equal(event.noLocationPermissionRequested, true, `${label} must not request location permission.`);
  assert.equal(event.noProviderContactAuthorized, true, `${label} must not authorize provider contact.`);
  assert.equal(event.noBackendWritePerformed, true, `${label} must not perform backend writes.`);
  assert.equal(event.redactionStatus, "no-secrets-or-sensitive-payloads", `${label} must preserve redaction status.`);
}

function runRt8LiveSourceRetrievalAuditLoggingContractQa() {
  const moduleSource = read("public", "nexus-live-source-audit-logging-contract.js");
  const orchestratorSource = read("server", "nexus-live-source-orchestrator.js");
  const doc = read("docs", "NEXUS_RT8_LIVE_SOURCE_RETRIEVAL_AUDIT_LOGGING_CONTRACT.md");
  const app = read("public", "app.js");
  const index = read("public", "index.html");
  const server = read("server.js");
  const pkg = JSON.parse(read("package.json"));
  const qaSuite = read("scripts", "qa-suite.js");

  [
    "eventType",
    "requestId",
    "providerId",
    "intent",
    "riskTier",
    "allowed",
    "blockedReason",
    "providerStatus",
    "retrievedAt",
    "sourceCount",
    "citationCount",
    "confidence",
    "noExecutionAuthorized",
    "noLocationPermissionRequested",
    "noProviderContactAuthorized",
    "noBackendWritePerformed",
    "redactionStatus"
  ].forEach(field => {
    assert(audit.REQUIRED_LIVE_SOURCE_AUDIT_FIELDS.includes(field), `RT8 field list must include ${field}.`);
  });

  const allowedEvent = audit.buildLiveSourceRetrievalAuditEvent({
    requestId: "live-source-test",
    providerId: "weather",
    intent: "weather",
    riskTier: "low",
    allowed: true,
    providerStatus: "ready",
    sourceCount: 1,
    citationCount: 1,
    confidence: "medium"
  });
  assertSafeEvent(allowedEvent, "allowed");
  assert.equal(allowedEvent.allowed, true, "allowed event should preserve allowed true.");

  const blockedEvent = audit.buildLiveSourceRetrievalAuditEvent({
    requestId: "live-source-blocked",
    providerId: "none",
    intent: "calls-messaging-intent",
    riskTier: "high",
    allowed: false,
    blockedReason: "execution_or_high_risk_intent_blocked",
    providerStatus: "blocked_by_policy",
    confidence: "low"
  });
  assertSafeEvent(blockedEvent, "blocked");
  assert.equal(blockedEvent.allowed, false, "blocked event must not be allowed.");
  assert.equal(blockedEvent.blockedReason, "execution_or_high_risk_intent_blocked", "blocked reason must be preserved.");

  const providerErrorEvent = audit.buildLiveSourceRetrievalAuditEvent({
    requestId: "live-source-provider-error",
    providerId: "weather",
    intent: "weather",
    riskTier: "low",
    allowed: false,
    blockedReason: "source_result_failed_safety_contract",
    providerStatus: "provider_error",
    confidence: "low",
    sourceCount: 0,
    citationCount: 0
  });
  assertSafeEvent(providerErrorEvent, "provider error");
  assert.equal(providerErrorEvent.providerStatus, "provider_error", "provider errors must be represented.");

  const redacted = audit.buildLiveSourceRetrievalAuditEvent({
    requestId: "live-source-NEXUS_WEATHER_PROVIDER_API_KEY=secret-value",
    providerId: "weather",
    intent: "weather",
    riskTier: "low",
    allowed: false,
    blockedReason: "token bearer abc123",
    providerStatus: "provider_error",
    confidence: "low"
  });
  assert.equal(redacted.requestId, "[redacted]", "secret-like requestId must be redacted.");
  assert.equal(redacted.blockedReason, "[redacted]", "secret-like blockedReason must be redacted.");
  assertSafeEvent(redacted, "redacted");

  const allowedOrchestration = orchestrator.buildLiveSourceOrchestrationResult("What is the weather in Stockton, CA?", {}, {
    NEXUS_LIVE_SOURCE_RETRIEVAL_ENABLED: "true",
    NEXUS_WEATHER_PROVIDER_ENABLED: "true"
  });
  assertSafeEvent(allowedOrchestration.auditEvent, "orchestrator allowed");

  const blockedOrchestration = orchestrator.buildLiveSourceOrchestrationResult("Call my provider", {}, {});
  assertSafeEvent(blockedOrchestration.auditEvent, "orchestrator blocked");
  assert.equal(blockedOrchestration.auditEvent.allowed, false, "blocked orchestrator audit must not be allowed.");
  assert(blockedOrchestration.auditEvent.blockedReason, "blocked orchestrator audit must include blockedReason.");

  assert(orchestratorSource.includes("liveSourceAudit.buildLiveSourceRetrievalAuditEvent"), "orchestrator must use RT8 audit contract.");

  [
    "Blocked requests are audited",
    "Provider failures are represented",
    "Redaction Rules",
    "noExecutionAuthorized",
    "noLocationPermissionRequested",
    "noProviderContactAuthorized",
    "noBackendWritePerformed",
    "Audit logging must never trigger execution"
  ].forEach(term => assert(doc.includes(term), `RT8 doc must include ${term}.`));

  [
    "writeFile",
    "appendFile",
    "createWriteStream",
    "localStorage",
    "sessionStorage",
    "db.json",
    "fetch(",
    "XMLHttpRequest",
    "http.request",
    "https.request",
    "navigator.geolocation",
    "mediaDevices",
    "window.open",
    "location.href",
    "sendBeacon",
    "document.",
    "addEventListener"
  ].forEach(term => assert(!moduleSource.includes(term), `RT8 audit contract must not include side-effect API: ${term}`));

  [app, index, server].forEach((source, indexNumber) => {
    const label = ["public/app.js", "public/index.html", "server.js"][indexNumber];
    assert(!source.includes("nexus-live-source-audit-logging-contract"), `${label} must not load RT8 audit contract.`);
  });

  assert.equal(
    pkg.scripts["qa:nexus-rt8-live-source-retrieval-audit-logging-contract"],
    "node scripts/nexus-rt8-live-source-retrieval-audit-logging-contract-qa.js",
    "RT8 package alias must exist."
  );
  assert(qaSuite.includes("scripts/nexus-rt8-live-source-retrieval-audit-logging-contract-qa.js"), "RT8 QA must be in safe suites.");

  console.log("[nexus-rt8-live-source-retrieval-audit-logging-contract-qa] passed");
}

if (require.main === module) {
  try {
    runRt8LiveSourceRetrievalAuditLoggingContractQa();
  } catch (error) {
    console.error(error && error.stack ? error.stack : error);
    process.exitCode = 1;
  }
}

module.exports = Object.freeze({
  runRt8LiveSourceRetrievalAuditLoggingContractQa
});
