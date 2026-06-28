(function initLiveSourceAuditLoggingContract(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusLiveSourceAuditLoggingContract = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function buildContract() {
  const REQUIRED_LIVE_SOURCE_AUDIT_FIELDS = Object.freeze([
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
  ]);

  const SENSITIVE_AUDIT_PATTERNS = Object.freeze([
    /api[_-]?key/i,
    /authorization/i,
    /bearer\s+[a-z0-9._-]+/i,
    /secret/i,
    /token/i,
    /password/i,
    /\b[\w.+-]+@[\w.-]+\.[a-z]{2,}\b/i,
    /\+?\d[\d\s().-]{10,}\d/
  ]);

  function hasSensitiveAuditPattern(value) {
    const text = String(value == null ? "" : value);
    return SENSITIVE_AUDIT_PATTERNS.some(pattern => pattern.test(text));
  }

  function redactLiveSourceAuditValue(value) {
    if (value == null) return value;
    if (typeof value === "string") return hasSensitiveAuditPattern(value) ? "[redacted]" : value;
    if (typeof value === "number" || typeof value === "boolean") return value;
    if (Array.isArray(value)) return Object.freeze(value.map(redactLiveSourceAuditValue));
    if (typeof value === "object") {
      const output = {};
      Object.keys(value).forEach(key => {
        output[key] = hasSensitiveAuditPattern(key) ? "[redacted]" : redactLiveSourceAuditValue(value[key]);
      });
      return Object.freeze(output);
    }
    return "[redacted]";
  }

  function normalizeCount(value) {
    const number = Number(value);
    return Number.isFinite(number) && number >= 0 ? Math.floor(number) : 0;
  }

  function buildLiveSourceRetrievalAuditEvent(input) {
    const source = input && typeof input === "object" ? input : {};
    const event = {
      eventType: "live-source-orchestration",
      requestId: redactLiveSourceAuditValue(source.requestId || ""),
      providerId: redactLiveSourceAuditValue(source.providerId || "none"),
      intent: redactLiveSourceAuditValue(source.intent || "unknown"),
      riskTier: redactLiveSourceAuditValue(source.riskTier || "medium"),
      allowed: source.allowed === true,
      blockedReason: redactLiveSourceAuditValue(source.blockedReason || ""),
      providerStatus: redactLiveSourceAuditValue(source.providerStatus || "unknown"),
      retrievedAt: source.retrievedAt || new Date().toISOString(),
      sourceCount: normalizeCount(source.sourceCount),
      citationCount: normalizeCount(source.citationCount),
      confidence: redactLiveSourceAuditValue(source.confidence || "low"),
      noExecutionAuthorized: true,
      noLocationPermissionRequested: true,
      noProviderContactAuthorized: true,
      noBackendWritePerformed: true,
      redactionStatus: "no-secrets-or-sensitive-payloads"
    };
    return Object.freeze(event);
  }

  function isSafeLiveSourceRetrievalAuditEvent(event) {
    if (!event || typeof event !== "object" || Array.isArray(event)) return false;
    if (!REQUIRED_LIVE_SOURCE_AUDIT_FIELDS.every(field => Object.prototype.hasOwnProperty.call(event, field))) return false;
    if (event.noExecutionAuthorized !== true) return false;
    if (event.noLocationPermissionRequested !== true) return false;
    if (event.noProviderContactAuthorized !== true) return false;
    if (event.noBackendWritePerformed !== true) return false;
    if (event.redactionStatus !== "no-secrets-or-sensitive-payloads") return false;
    return !Object.keys(event).some(key => {
      if (key === "redactionStatus") return false;
      return hasSensitiveAuditPattern(key) || hasSensitiveAuditPattern(event[key]);
    });
  }

  return Object.freeze({
    REQUIRED_LIVE_SOURCE_AUDIT_FIELDS,
    SENSITIVE_AUDIT_PATTERNS,
    redactLiveSourceAuditValue,
    buildLiveSourceRetrievalAuditEvent,
    isSafeLiveSourceRetrievalAuditEvent
  });
});
