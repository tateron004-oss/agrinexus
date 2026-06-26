(function nexusAuditEventContractModule(globalScope) {
  "use strict";

  const AUDIT_EVENT_STATUS = Object.freeze({
    PREVIEW_ONLY: "preview-only",
    BLOCKED: "blocked"
  });

  const REDACTION_RULES = Object.freeze([
    "no secrets",
    "no credentials",
    "no tokens",
    "no payment data",
    "no health details",
    "no precise location",
    "no raw uploaded media",
    "no contact details unless future explicit permission exists"
  ]);

  const SENSITIVE_FIELD_PATTERN = /(secret|credential|token|password|payment|card|healthDetail|medicalRecord|preciseLocation|rawMedia|contactDetail|phone|email|address)/i;

  function safeText(value, fallback) {
    return typeof value === "string" && value.trim() ? value.trim() : fallback;
  }

  function hasSensitiveField(input) {
    if (!input || typeof input !== "object") return false;
    return Object.keys(input).some(key => SENSITIVE_FIELD_PATTERN.test(key));
  }

  function buildAuditEventPreview(eventRequest) {
    const input = eventRequest && typeof eventRequest === "object" ? eventRequest : {};
    const sensitiveFieldBlocked = hasSensitiveField(input);
    return Object.freeze({
      status: sensitiveFieldBlocked ? AUDIT_EVENT_STATUS.BLOCKED : AUDIT_EVENT_STATUS.PREVIEW_ONLY,
      eventType: safeText(input.eventType, "permission-review-preview"),
      riskLevel: safeText(input.riskLevel, "high"),
      domain: safeText(input.domain || input.intentDomain, "general"),
      actionType: safeText(input.actionType, "review-only-action"),
      summary: safeText(input.summary, "Previewed future permission requirements."),
      sourceStatus: safeText(input.sourceStatus, "general guidance"),
      permissionStatus: safeText(input.permissionStatus, "preview-only"),
      backendWriteAllowed: false,
      storageWriteAllowed: false,
      networkAllowed: false,
      executionAllowed: false,
      providerCredentialAllowed: false,
      tokenAllowed: false,
      secretsAllowed: false,
      sensitiveFieldBlocked,
      redactionPolicy: "summary-only-no-secrets",
      redactionRules: REDACTION_RULES.slice(),
      disclosure: "Audit preview only. No audit record has been written."
    });
  }

  function assertAuditEventPreviewSafe(event) {
    if (!event || typeof event !== "object") return false;
    if (!Object.values(AUDIT_EVENT_STATUS).includes(event.status)) return false;
    if (event.backendWriteAllowed !== false || event.storageWriteAllowed !== false || event.networkAllowed !== false) return false;
    if (event.executionAllowed !== false || event.providerCredentialAllowed !== false || event.tokenAllowed !== false || event.secretsAllowed !== false) return false;
    if (event.redactionPolicy !== "summary-only-no-secrets") return false;
    if (!Array.isArray(event.redactionRules) || event.redactionRules.length < REDACTION_RULES.length) return false;
    return /Audit preview only/i.test(String(event.disclosure || "")) && /No audit record has been written/i.test(String(event.disclosure || ""));
  }

  const api = Object.freeze({
    AUDIT_EVENT_STATUS,
    buildAuditEventPreview,
    assertAuditEventPreviewSafe
  });

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  }

  if (globalScope) {
    globalScope.NexusAuditEventContract = api;
  }
})(typeof window !== "undefined" ? window : globalThis);
