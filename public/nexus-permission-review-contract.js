(function nexusPermissionReviewContractModule(globalScope) {
  "use strict";

  const PERMISSION_REVIEW_STATUS = Object.freeze({
    PREVIEW_ONLY: "preview-only",
    BLOCKED: "blocked"
  });

  const DEFAULT_DATA_NEEDED = Object.freeze([
    "clear action target",
    "visible user confirmation",
    "verified provider or source readiness",
    "audit-ready summary"
  ]);

  const DANGEROUS_KEYS = Object.freeze([
    "executionAllowed",
    "sideEffectsAllowed",
    "providerHandoffAllowed",
    "backendWriteAllowed",
    "auditWriteAllowed",
    "confirmEnabled",
    "hiddenExecutionAllowed",
    "backgroundExecutionAllowed"
  ]);

  function safeText(value, fallback) {
    return typeof value === "string" && value.trim() ? value.trim() : fallback;
  }

  function safeList(value, fallback) {
    const source = Array.isArray(value) ? value : fallback;
    return source
      .map(item => safeText(item, "required review detail"))
      .filter(Boolean)
      .slice(0, 8);
  }

  function normalizePermissionReviewRequest(request) {
    const input = request && typeof request === "object" ? request : {};
    const unsafeRequested = DANGEROUS_KEYS.some(key => input[key] === true);
    return {
      actionType: safeText(input.actionType, "review-only-action"),
      domain: safeText(input.domain || input.intentDomain, "general"),
      riskLevel: safeText(input.riskLevel, "high"),
      summary: safeText(input.summary, "Nexus can explain what would be required, but cannot execute this now."),
      dataNeeded: safeList(input.dataNeeded, DEFAULT_DATA_NEEDED),
      unsafeRequested,
      blocked: input.blocked === true
    };
  }

  function buildPermissionReview(request) {
    const normalized = normalizePermissionReviewRequest(request);
    return Object.freeze({
      status: normalized.blocked || normalized.unsafeRequested ? PERMISSION_REVIEW_STATUS.BLOCKED : PERMISSION_REVIEW_STATUS.PREVIEW_ONLY,
      actionType: normalized.actionType,
      domain: normalized.domain,
      riskLevel: normalized.riskLevel,
      summary: normalized.summary,
      dataNeeded: Object.freeze(normalized.dataNeeded.slice()),
      confirmationRequiredBeforeFutureExecution: true,
      cancelAvailable: true,
      confirmEnabled: false,
      executionAllowed: false,
      sideEffectsAllowed: false,
      providerHandoffAllowed: false,
      backendWriteAllowed: false,
      auditWriteAllowed: false,
      permissionPromptInformationalOnly: true,
      hiddenExecutionAllowed: false,
      backgroundExecutionAllowed: false,
      unsafeRequestBlocked: normalized.unsafeRequested,
      disclosure: "Permission review only. No action has been taken."
    });
  }

  function assertPermissionReviewSafe(review) {
    if (!review || typeof review !== "object") return false;
    if (!Object.values(PERMISSION_REVIEW_STATUS).includes(review.status)) return false;
    if (review.confirmEnabled !== false || review.cancelAvailable !== true) return false;
    if (review.executionAllowed !== false || review.sideEffectsAllowed !== false) return false;
    if (review.providerHandoffAllowed !== false || review.backendWriteAllowed !== false || review.auditWriteAllowed !== false) return false;
    if (review.hiddenExecutionAllowed !== false || review.backgroundExecutionAllowed !== false) return false;
    if (review.permissionPromptInformationalOnly !== true) return false;
    if (review.confirmationRequiredBeforeFutureExecution !== true) return false;
    if (!Array.isArray(review.dataNeeded) || review.dataNeeded.length < 1) return false;
    return /Permission review only/i.test(String(review.disclosure || "")) && /No action has been taken/i.test(String(review.disclosure || ""));
  }

  const api = Object.freeze({
    PERMISSION_REVIEW_STATUS,
    buildPermissionReview,
    assertPermissionReviewSafe
  });

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  }

  if (globalScope) {
    globalScope.NexusPermissionReviewContract = api;
  }
})(typeof window !== "undefined" ? window : globalThis);
