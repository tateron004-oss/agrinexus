const crypto = require("node:crypto");

function safeText(value = "", max = 500) {
  return String(value || "")
    .replace(/\b(secret|token|password|api key|auth token)\b/gi, "[redacted]")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}

function createAuditEvent(result = {}) {
  return {
    auditId: `nexus-runtime-audit-${crypto.randomUUID()}`,
    timestamp: new Date().toISOString(),
    userGoal: safeText(result.userGoal, 240),
    domain: result.domain || "unknown",
    intent: result.intent || "unknown",
    capabilityIds: Array.isArray(result.capabilities) ? result.capabilities.slice(0, 8) : [],
    mode: result.mode || "unknown",
    riskLevel: result.riskLevel || "unknown",
    confirmationStatus: result.confirmed === true ? "confirmed" : "not_confirmed",
    executionAttempted: result.executionAttempted === true,
    executionStatus: result.executionResult?.status || result.mode || "unknown",
    blockedReason: result.blockedReason || "",
    referenceId: result.executionResult?.referenceId || result.verification?.referenceId || "",
    safeUserFacingSummary: safeText(result.userMessage || result.executionResult?.message || result.verification?.message || "", 500),
    noSecretStored: true,
    minimalSensitiveData: true
  };
}

function ensureRuntimeAuditStore(db = {}) {
  db.profile = db.profile || {};
  db.profile.nexusRuntimeActivity = Array.isArray(db.profile.nexusRuntimeActivity) ? db.profile.nexusRuntimeActivity : [];
  return db.profile.nexusRuntimeActivity;
}

function recordRuntimeAudit(db = {}, result = {}) {
  const event = createAuditEvent(result);
  ensureRuntimeAuditStore(db).unshift(event);
  db.profile.nexusRuntimeActivity = db.profile.nexusRuntimeActivity.slice(0, 100);
  return event;
}

module.exports = {
  safeText,
  createAuditEvent,
  recordRuntimeAudit
};
