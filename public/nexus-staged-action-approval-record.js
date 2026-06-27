(function nexusStagedActionApprovalRecordFactory(root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.NexusStagedActionApprovalRecord = factory();
  }
})(typeof globalThis !== "undefined" ? globalThis : this, function nexusStagedActionApprovalRecordModule() {
  const APPROVAL_STATES = Object.freeze([
    "notApprovalReady",
    "approvalPreviewOnly",
    "awaitingExplicitApproval",
    "approvalAccepted",
    "approvalRejected",
    "approvalCancelled",
    "approvalExpired",
    "approvalBlocked"
  ]);

  const REQUIRED_APPROVAL_RECORD_FIELDS = Object.freeze([
    "approvalRecordId",
    "stagedActionId",
    "stagedActionType",
    "approvalState",
    "riskTier",
    "sourceSurface",
    "userVisibleTitle",
    "userVisibleTarget",
    "userVisibleConsequence",
    "limitationSummary",
    "noActionDisclosure",
    "cancellationPath",
    "consentState",
    "permissionState",
    "auditRequired",
    "auditEventType",
    "blockedExecutionChannels",
    "allowedApprovalTerms",
    "blockedApprovalTerms",
    "evidencePacketRef",
    "providerSummary",
    "expiresAt",
    "createdAt",
    "redactedPayload"
  ]);

  const REQUIRED_BLOCKED_EXECUTION_CHANNELS = Object.freeze([
    "provider",
    "call",
    "message",
    "whatsapp",
    "telegram",
    "sms",
    "email",
    "payment",
    "marketplace",
    "location",
    "camera",
    "microphone",
    "health",
    "medical",
    "pharmacy",
    "prescription",
    "fhir",
    "appointment",
    "transportation",
    "emergency",
    "backend-write",
    "storage-write",
    "native-bridge"
  ]);

  const ALLOWED_APPROVAL_TERMS = Object.freeze([
    "yes",
    "confirm",
    "do it",
    "approve"
  ]);

  const BLOCKED_APPROVAL_TERMS = Object.freeze([
    "okay",
    "ok",
    "sure",
    "sounds good",
    "fine",
    "go ahead maybe"
  ]);

  const UNSAFE_COMPLETION_COPY = Object.freeze([
    "I already did it",
    "I contacted them",
    "I sent it",
    "I called",
    "Payment complete",
    "Location shared",
    "Camera activated",
    "Appointment booked",
    "Prescription refilled",
    "Emergency dispatched"
  ]);

  function list(value) {
    return Array.isArray(value) ? value.filter(Boolean) : [];
  }

  function text(value) {
    return typeof value === "string" ? value : "";
  }

  function includesAll(values, required) {
    const set = new Set(list(values));
    return required.every(item => set.has(item));
  }

  function hasUnsafeCopy(record) {
    const visibleText = [
      record.userVisibleTitle,
      record.userVisibleTarget,
      record.userVisibleConsequence,
      record.limitationSummary,
      record.noActionDisclosure,
      record.providerSummary
    ].map(text).join(" ");

    return UNSAFE_COMPLETION_COPY.some(term => visibleText.includes(term));
  }

  function validateStagedActionApprovalRecord(record) {
    const errors = [];

    if (!record || typeof record !== "object" || Array.isArray(record)) {
      return { ok: false, errors: ["approval record must be an object"] };
    }

    for (const field of REQUIRED_APPROVAL_RECORD_FIELDS) {
      if (!(field in record)) errors.push(`missing required field: ${field}`);
    }

    if (!APPROVAL_STATES.includes(record.approvalState)) {
      errors.push("approvalState must be an allowed approval state");
    }

    if (record.executionAuthority !== false) errors.push("executionAuthority must be false");
    if (record.providerHandoffAllowed !== false) errors.push("providerHandoffAllowed must be false");
    if (record.backendWriteAllowed !== false) errors.push("backendWriteAllowed must be false");
    if (record.storageWriteAllowed !== false) errors.push("storageWriteAllowed must be false");
    if (record.networkAllowed !== false) errors.push("networkAllowed must be false");
    if (record.runtimeUiAllowed !== false) errors.push("runtimeUiAllowed must be false");
    if (record.auditRequired !== true) errors.push("auditRequired must be true");

    if (!/no action has been taken/i.test(text(record.noActionDisclosure))) {
      errors.push("noActionDisclosure must say no action has been taken");
    }

    if (!text(record.cancellationPath).trim()) {
      errors.push("cancellationPath must be present");
    }

    if (!includesAll(record.blockedExecutionChannels, REQUIRED_BLOCKED_EXECUTION_CHANNELS)) {
      errors.push("blockedExecutionChannels must include every required blocked execution channel");
    }

    if (!includesAll(record.allowedApprovalTerms, ALLOWED_APPROVAL_TERMS)) {
      errors.push("allowedApprovalTerms must include every allowed approval term");
    }

    if (!includesAll(record.blockedApprovalTerms, BLOCKED_APPROVAL_TERMS)) {
      errors.push("blockedApprovalTerms must include vague blocked approval terms");
    }

    if (list(record.allowedApprovalTerms).some(term => BLOCKED_APPROVAL_TERMS.includes(term))) {
      errors.push("allowedApprovalTerms must not include vague blocked terms");
    }

    if (hasUnsafeCopy(record)) {
      errors.push("approval record must not include unsafe completion copy");
    }

    return { ok: errors.length === 0, errors };
  }

  function isSafeStagedActionApprovalRecord(record) {
    return validateStagedActionApprovalRecord(record).ok;
  }

  function createStagedActionApprovalRecord(input = {}) {
    const record = Object.assign({}, input, {
      approvalState: APPROVAL_STATES.includes(input.approvalState) ? input.approvalState : "approvalPreviewOnly",
      executionAuthority: false,
      providerHandoffAllowed: false,
      backendWriteAllowed: false,
      storageWriteAllowed: false,
      networkAllowed: false,
      runtimeUiAllowed: false,
      auditRequired: true,
      noActionDisclosure: input.noActionDisclosure || "No action has been taken.",
      cancellationPath: input.cancellationPath || "The user can cancel or dismiss the approval review.",
      blockedExecutionChannels: [...new Set([...list(input.blockedExecutionChannels), ...REQUIRED_BLOCKED_EXECUTION_CHANNELS])],
      allowedApprovalTerms: [...new Set([...ALLOWED_APPROVAL_TERMS, ...list(input.allowedApprovalTerms).filter(term => !BLOCKED_APPROVAL_TERMS.includes(term))])],
      blockedApprovalTerms: [...new Set([...list(input.blockedApprovalTerms), ...BLOCKED_APPROVAL_TERMS])]
    });

    return {
      record,
      validation: validateStagedActionApprovalRecord(record)
    };
  }

  return {
    ALLOWED_APPROVAL_TERMS,
    APPROVAL_STATES,
    BLOCKED_APPROVAL_TERMS,
    REQUIRED_APPROVAL_RECORD_FIELDS,
    REQUIRED_BLOCKED_EXECUTION_CHANNELS,
    UNSAFE_COMPLETION_COPY,
    createStagedActionApprovalRecord,
    isSafeStagedActionApprovalRecord,
    validateStagedActionApprovalRecord
  };
});
