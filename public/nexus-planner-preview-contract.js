(function nexusPlannerPreviewContractModule(globalScope) {
  "use strict";

  const PLAN_STATUS = Object.freeze({
    PREVIEW_ONLY: "preview-only",
    BLOCKED: "blocked"
  });

  const DEFAULT_DISCLOSURES = Object.freeze([
    "This is a preview only.",
    "No action has been taken.",
    "No outside party has been contacted.",
    "No communication has been sent.",
    "No calendar event has been created.",
    "No transaction has been started.",
    "No device permission has been requested.",
    "No regulated or background execution has started."
  ]);

  function safeText(value, fallback) {
    return typeof value === "string" && value.trim() ? value.trim() : fallback;
  }

  function normalizeStep(step, index) {
    const input = step && typeof step === "object" ? step : {};
    return {
      stepNumber: index + 1,
      title: safeText(input.title, `Review step ${index + 1}`),
      description: safeText(input.description, "Nexus can describe this step for review."),
      riskLevel: safeText(input.riskLevel, "low"),
      executionAllowed: false,
      requiresFuturePermission: input.requiresFuturePermission === true,
      hidden: false,
      sideEffectsAllowed: false
    };
  }

  function buildPlannerPreview(planRequest) {
    const request = planRequest && typeof planRequest === "object" ? planRequest : {};
    const requestedSteps = Array.isArray(request.steps) ? request.steps : [];
    const hasHiddenStep = requestedSteps.some(step => step && step.hidden === true);

    if (hasHiddenStep) {
      return {
        status: PLAN_STATUS.BLOCKED,
        title: safeText(request.title, "Nexus Plan Preview"),
        executionAllowed: false,
        sideEffectsAllowed: false,
        reason: "Hidden plan steps are not allowed.",
        steps: [],
        disclosures: DEFAULT_DISCLOSURES.slice()
      };
    }

    const steps = requestedSteps.length
      ? requestedSteps.map(normalizeStep)
      : [normalizeStep({ title: "Review request", description: "Nexus can summarize the request and prepare safe next steps." }, 0)];

    return {
      status: PLAN_STATUS.PREVIEW_ONLY,
      title: safeText(request.title, "Nexus Plan Preview"),
      executionAllowed: false,
      sideEffectsAllowed: false,
      reason: "Plans are preview-only until a later explicit permission and audit phase.",
      steps,
      disclosures: DEFAULT_DISCLOSURES.slice()
    };
  }

  function assertPlannerPreviewSafe(planPreview) {
    if (!planPreview || typeof planPreview !== "object") {
      return false;
    }
    if (planPreview.executionAllowed !== false || planPreview.sideEffectsAllowed !== false) {
      return false;
    }
    if (!Array.isArray(planPreview.disclosures) || !planPreview.disclosures.includes("No action has been taken.")) {
      return false;
    }
    return (planPreview.steps || []).every(step => step.executionAllowed === false && step.sideEffectsAllowed === false && step.hidden === false);
  }

  const api = Object.freeze({
    PLAN_STATUS,
    buildPlannerPreview,
    assertPlannerPreviewSafe
  });

  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  }

  if (globalScope) {
    globalScope.NexusPlannerPreviewContract = api;
  }
})(typeof window !== "undefined" ? window : globalThis);
