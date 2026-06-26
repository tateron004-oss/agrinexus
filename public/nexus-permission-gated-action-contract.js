(function nexusPermissionGatedActionContractModule(globalScope) {
  "use strict";

  const ACTION_STATUS = Object.freeze({
    INFORMATION_ONLY: "information-only",
    REVIEW_ONLY: "review-only",
    PERMISSION_REQUIRED: "permission-required",
    BLOCKED: "blocked"
  });

  const RISK_LEVEL = Object.freeze({
    LOW: "low",
    MEDIUM: "medium",
    HIGH: "high",
    EXCLUDED: "excluded"
  });

  const ACTION_TYPES = Object.freeze({
    INFORMATION: "information",
    PROVIDER_CONTACT: "provider-contact",
    MESSAGE: "message",
    CALL: "call",
    APPOINTMENT: "appointment",
    MARKETPLACE: "marketplace",
    PAYMENT: "payment",
    LOCATION: "location",
    CAMERA_MEDIA: "camera-media",
    HEALTH_MEDICAL: "health-medical",
    EMERGENCY: "emergency",
    BACKGROUND_TASK: "background-task"
  });

  const HIGH_RISK_ACTIONS = new Set([
    ACTION_TYPES.PROVIDER_CONTACT,
    ACTION_TYPES.MESSAGE,
    ACTION_TYPES.CALL,
    ACTION_TYPES.APPOINTMENT,
    ACTION_TYPES.MARKETPLACE,
    ACTION_TYPES.PAYMENT,
    ACTION_TYPES.LOCATION,
    ACTION_TYPES.CAMERA_MEDIA,
    ACTION_TYPES.HEALTH_MEDICAL,
    ACTION_TYPES.EMERGENCY,
    ACTION_TYPES.BACKGROUND_TASK
  ]);

  const BLOCKED_ACTIONS = new Set([
    ACTION_TYPES.PAYMENT,
    ACTION_TYPES.EMERGENCY,
    ACTION_TYPES.HEALTH_MEDICAL,
    ACTION_TYPES.BACKGROUND_TASK
  ]);

  function normalizeActionType(actionType) {
    if (!actionType || typeof actionType !== "string") {
      return ACTION_TYPES.INFORMATION;
    }
    const normalized = actionType.trim().toLowerCase();
    return Object.values(ACTION_TYPES).includes(normalized) ? normalized : ACTION_TYPES.INFORMATION;
  }

  function buildActionContract(actionRequest) {
    const request = actionRequest && typeof actionRequest === "object" ? actionRequest : {};
    const actionType = normalizeActionType(request.actionType);
    const summary = typeof request.summary === "string" && request.summary.trim()
      ? request.summary.trim()
      : "Nexus can provide information or prepare a review-only preview.";

    if (BLOCKED_ACTIONS.has(actionType)) {
      return {
        actionType,
        status: ACTION_STATUS.BLOCKED,
        riskLevel: RISK_LEVEL.EXCLUDED,
        summary,
        executionAllowed: false,
        confirmationRequired: false,
        permissionPromptAllowed: false,
        providerHandoffAllowed: false,
        sideEffectsAllowed: false,
        userVisibleDisclosure: "This action is blocked in the current Nexus safety mode. No action has been taken.",
        auditRequiredBeforeFutureExecution: true
      };
    }

    if (HIGH_RISK_ACTIONS.has(actionType)) {
      return {
        actionType,
        status: ACTION_STATUS.PERMISSION_REQUIRED,
        riskLevel: RISK_LEVEL.HIGH,
        summary,
        executionAllowed: false,
        confirmationRequired: true,
        permissionPromptAllowed: false,
        providerHandoffAllowed: false,
        sideEffectsAllowed: false,
        userVisibleDisclosure: "Nexus can describe this request, but cannot execute it in the current safety mode. No provider has been contacted and no action has been taken.",
        auditRequiredBeforeFutureExecution: true
      };
    }

    return {
      actionType,
      status: actionType === ACTION_TYPES.INFORMATION ? ACTION_STATUS.INFORMATION_ONLY : ACTION_STATUS.REVIEW_ONLY,
      riskLevel: RISK_LEVEL.LOW,
      summary,
      executionAllowed: false,
      confirmationRequired: false,
      permissionPromptAllowed: false,
      providerHandoffAllowed: false,
      sideEffectsAllowed: false,
      userVisibleDisclosure: "Nexus is providing information only. No action has been taken.",
      auditRequiredBeforeFutureExecution: false
    };
  }

  function summarizeNoExecutionBoundary(contract) {
    const normalized = contract && typeof contract === "object" ? contract : buildActionContract({});
    return [
      normalized.userVisibleDisclosure || "No action has been taken.",
      "No provider has been contacted.",
      "No message has been sent.",
      "No call has been placed.",
      "No appointment has been scheduled.",
      "No payment or marketplace transaction has been started.",
      "No location has been shared.",
      "No camera, media, medical, pharmacy, emergency, or background execution has started."
    ];
  }

  const api = Object.freeze({
    ACTION_STATUS,
    RISK_LEVEL,
    ACTION_TYPES,
    buildActionContract,
    summarizeNoExecutionBoundary
  });

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  }

  if (globalScope) {
    globalScope.NexusPermissionGatedActionContract = api;
  }
})(typeof window !== "undefined" ? window : globalThis);
