(function nexusApprovalAuditPersistenceContractFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusApprovalAuditPersistenceContract = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusApprovalAuditPersistenceContractModule() {
  const APPROVAL_AUDIT_PERSISTENCE_STATUSES = Object.freeze([
    "not_configured",
    "readiness_gate_required",
    "audit_backend_required",
    "redaction_policy_required",
    "retention_policy_required",
    "consent_policy_required",
    "role_policy_required",
    "approved_not_live",
    "rejected_or_blocked",
    "inactive"
  ]);

  const APPROVAL_AUDIT_RECORD_TYPES = Object.freeze([
    "approval_review_opened",
    "approval_accepted_without_execution",
    "approval_rejected",
    "approval_cancelled",
    "approval_expired",
    "approval_blocked",
    "audit_persistence_unavailable"
  ]);

  const NO_PERSISTENCE_DEFAULTS = Object.freeze({
    noExecution: true,
    persistenceEnabled: false,
    storageWriteAllowed: false,
    backendWriteAllowed: false,
    networkAllowed: false,
    auditExportAllowed: false,
    providerHandoffAllowed: false,
    executionAuthority: false,
    eventStored: false,
    eventExported: false,
    actionExecuted: false,
    providerContacted: false,
    callPlaced: false,
    messageSent: false,
    paymentExecuted: false,
    healthActionPerformed: false,
    locationShared: false,
    emergencyDispatched: false,
    marketplaceTransactionCompleted: false,
    accountMutated: false
  });

  const APPROVAL_AUDIT_PERSISTENCE_RECORD_FIELDS = Object.freeze([
    "approvalAuditRecordId",
    "recordType",
    "approvalId",
    "pendingActionId",
    "actionType",
    "riskTier",
    "sourceSurface",
    "targetSummary",
    "providerSummary",
    "confirmationState",
    "permissionState",
    "consentState",
    "resultStatus",
    "redactedPayload",
    "retentionClass",
    "createdAt",
    "expiresAt",
    "persistenceStatus",
    "readinessGateStatus",
    "noExecution"
  ]);

  const DEFAULT_APPROVAL_AUDIT_PERSISTENCE_RECORD = Object.freeze({
    approvalAuditRecordId: "approval.audit.persistence.not_configured",
    recordType: "audit_persistence_unavailable",
    approvalId: "approval.not_persisted",
    pendingActionId: "pending_action.not_persisted",
    actionType: "not_configured",
    riskTier: "unknown",
    sourceSurface: "not_configured",
    targetSummary: "not_stored",
    providerSummary: "not_stored",
    confirmationState: "not_recorded",
    permissionState: "not_recorded",
    consentState: "not_recorded",
    resultStatus: "not_persisted",
    redactedPayload: Object.freeze({}),
    retentionClass: "policy_required",
    createdAt: null,
    expiresAt: null,
    persistenceStatus: "not_configured",
    readinessGateStatus: "readiness_gate_required",
    ...NO_PERSISTENCE_DEFAULTS
  });

  function normalizeRecordType(value) {
    return APPROVAL_AUDIT_RECORD_TYPES.includes(value) ? value : DEFAULT_APPROVAL_AUDIT_PERSISTENCE_RECORD.recordType;
  }

  function normalizePersistenceStatus(value) {
    return APPROVAL_AUDIT_PERSISTENCE_STATUSES.includes(value) ? value : DEFAULT_APPROVAL_AUDIT_PERSISTENCE_RECORD.persistenceStatus;
  }

  function minimizeText(value, fallback) {
    if (typeof value !== "string") return fallback;
    const trimmed = value.trim();
    return trimmed ? trimmed.slice(0, 160) : fallback;
  }

  function createApprovalAuditPersistenceRecord(overrides = {}) {
    return Object.freeze({
      ...DEFAULT_APPROVAL_AUDIT_PERSISTENCE_RECORD,
      ...overrides,
      recordType: normalizeRecordType(overrides.recordType),
      persistenceStatus: normalizePersistenceStatus(overrides.persistenceStatus),
      readinessGateStatus: "readiness_gate_required",
      targetSummary: minimizeText(overrides.targetSummary, DEFAULT_APPROVAL_AUDIT_PERSISTENCE_RECORD.targetSummary),
      providerSummary: minimizeText(overrides.providerSummary, DEFAULT_APPROVAL_AUDIT_PERSISTENCE_RECORD.providerSummary),
      redactedPayload: Object.freeze(
        overrides.redactedPayload && typeof overrides.redactedPayload === "object" && !Array.isArray(overrides.redactedPayload)
          ? { ...overrides.redactedPayload }
          : {}
      ),
      ...NO_PERSISTENCE_DEFAULTS
    });
  }

  return Object.freeze({
    APPROVAL_AUDIT_PERSISTENCE_STATUSES,
    APPROVAL_AUDIT_RECORD_TYPES,
    NO_PERSISTENCE_DEFAULTS,
    APPROVAL_AUDIT_PERSISTENCE_RECORD_FIELDS,
    DEFAULT_APPROVAL_AUDIT_PERSISTENCE_RECORD,
    createApprovalAuditPersistenceRecord
  });
});
