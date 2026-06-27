(function nexusStagedActionApprovalAuditEventFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusStagedActionApprovalAuditEvent = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusStagedActionApprovalAuditEventModule() {
  const APPROVAL_AUDIT_EVENT_TYPES = Object.freeze([
    "approval.preview.created",
    "approval.review.opened",
    "approval.awaiting_explicit_confirmation",
    "approval.accepted.inert",
    "approval.rejected",
    "approval.cancelled",
    "approval.expired",
    "approval.blocked",
    "approval.validation.failed"
  ]);

  const APPROVAL_AUDIT_RESULT_STATUSES = Object.freeze([
    "recorded_for_review",
    "accepted_without_execution",
    "rejected_without_execution",
    "cancelled_without_execution",
    "expired_without_execution",
    "blocked_without_execution",
    "validation_failed_without_execution"
  ]);

  const REQUIRED_APPROVAL_AUDIT_EVENT_FIELDS = Object.freeze([
    "auditEventId",
    "approvalRecordId",
    "stagedActionId",
    "stagedActionType",
    "eventType",
    "approvalState",
    "previousApprovalState",
    "nextApprovalState",
    "riskTier",
    "sourceSurface",
    "actorRole",
    "actorRef",
    "sessionRef",
    "targetSummary",
    "providerSummary",
    "evidencePacketRef",
    "consentState",
    "permissionState",
    "auditRequired",
    "resultStatus",
    "blockedReason",
    "cancellationReason",
    "redactedPayload",
    "retentionPolicy",
    "createdAt"
  ]);

  const SENSITIVE_RAW_DATA_KEYS = Object.freeze([
    "phone",
    "phoneNumber",
    "email",
    "fullName",
    "preciseLocation",
    "address",
    "paymentCard",
    "accountSecret",
    "medicalRecord",
    "prescription",
    "emergencyContact",
    "providerCredential",
    "nativeBridgePayload"
  ]);

  function list(value) {
    return Array.isArray(value) ? value.filter(Boolean) : [];
  }

  function hasSensitiveRawData(value) {
    if (!value || typeof value !== "object") return false;
    return SENSITIVE_RAW_DATA_KEYS.some(key => Object.prototype.hasOwnProperty.call(value, key));
  }

  function validateStagedActionApprovalAuditEvent(event) {
    const errors = [];

    if (!event || typeof event !== "object" || Array.isArray(event)) {
      return { ok: false, errors: ["approval audit event must be an object"] };
    }

    for (const field of REQUIRED_APPROVAL_AUDIT_EVENT_FIELDS) {
      if (!(field in event)) errors.push(`missing required field: ${field}`);
    }

    if (!APPROVAL_AUDIT_EVENT_TYPES.includes(event.eventType)) {
      errors.push("eventType must be an allowed approval audit event type");
    }

    if (!APPROVAL_AUDIT_RESULT_STATUSES.includes(event.resultStatus)) {
      errors.push("resultStatus must be an allowed no-execution audit result status");
    }

    if (event.executionRecorded !== false) errors.push("executionRecorded must be false");
    if (event.providerHandoffRecorded !== false) errors.push("providerHandoffRecorded must be false");
    if (event.backendWriteOccurred !== false) errors.push("backendWriteOccurred must be false");
    if (event.storageWriteOccurred !== false) errors.push("storageWriteOccurred must be false");
    if (event.networkOccurred !== false) errors.push("networkOccurred must be false");
    if (event.runtimeUiOccurred !== false) errors.push("runtimeUiOccurred must be false");
    if (event.auditRequired !== true) errors.push("auditRequired must be true");

    if (!event.redactedPayload || typeof event.redactedPayload !== "object" || Array.isArray(event.redactedPayload)) {
      errors.push("redactedPayload must be an object");
    } else if (hasSensitiveRawData(event.redactedPayload)) {
      errors.push("redactedPayload must not include sensitive raw data keys");
    }

    if (event.eventType === "approval.blocked" && !String(event.blockedReason || "").trim()) {
      errors.push("blocked events must include blockedReason");
    }

    if (event.eventType === "approval.cancelled" && !String(event.cancellationReason || "").trim()) {
      errors.push("cancelled events must include cancellationReason");
    }

    return { ok: errors.length === 0, errors };
  }

  function isSafeStagedActionApprovalAuditEvent(event) {
    return validateStagedActionApprovalAuditEvent(event).ok;
  }

  function createStagedActionApprovalAuditEvent(input = {}) {
    const event = Object.assign({}, input, {
      eventType: APPROVAL_AUDIT_EVENT_TYPES.includes(input.eventType) ? input.eventType : "approval.preview.created",
      resultStatus: APPROVAL_AUDIT_RESULT_STATUSES.includes(input.resultStatus) ? input.resultStatus : "recorded_for_review",
      executionRecorded: false,
      providerHandoffRecorded: false,
      backendWriteOccurred: false,
      storageWriteOccurred: false,
      networkOccurred: false,
      runtimeUiOccurred: false,
      auditRequired: true,
      redactedPayload: Object.assign({}, input.redactedPayload || {})
    });

    for (const sensitiveKey of SENSITIVE_RAW_DATA_KEYS) {
      if (Object.prototype.hasOwnProperty.call(event.redactedPayload, sensitiveKey)) {
        delete event.redactedPayload[sensitiveKey];
      }
    }

    return {
      event,
      validation: validateStagedActionApprovalAuditEvent(event)
    };
  }

  return {
    APPROVAL_AUDIT_EVENT_TYPES,
    APPROVAL_AUDIT_RESULT_STATUSES,
    REQUIRED_APPROVAL_AUDIT_EVENT_FIELDS,
    SENSITIVE_RAW_DATA_KEYS,
    createStagedActionApprovalAuditEvent,
    isSafeStagedActionApprovalAuditEvent,
    validateStagedActionApprovalAuditEvent
  };
});
