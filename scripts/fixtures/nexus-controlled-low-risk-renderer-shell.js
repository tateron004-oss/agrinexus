const ALLOWED_LOW_RISK_CATEGORIES = Object.freeze([
  "agriculture_training",
  "irrigation_learning",
  "farm_jobs_workforce_discovery",
  "agritrade_marketplace_preview",
  "crop_issue_education_help"
]);

const CATEGORY_TEXT = Object.freeze({
  agriculture_training: {
    title: "Agriculture training preview",
    summary: "Review training options before choosing a safe learning path.",
    previewLines: [
      "Compare agriculture training topics.",
      "Review next steps before opening any learning area."
    ]
  },
  irrigation_learning: {
    title: "Irrigation learning preview",
    summary: "Review irrigation education topics without changing app state.",
    previewLines: [
      "Summarize irrigation concepts.",
      "Keep guidance informational and review-only."
    ]
  },
  farm_jobs_workforce_discovery: {
    title: "Farm jobs and workforce preview",
    summary: "Review workforce discovery options without applying or contacting anyone.",
    previewLines: [
      "Compare job-readiness topics.",
      "No application, message, or contact step is started."
    ]
  },
  agritrade_marketplace_preview: {
    title: "AgriTrade marketplace preview",
    summary: "Review marketplace information without buying, selling, or paying.",
    previewLines: [
      "Browse marketplace education safely.",
      "No transaction or seller contact is started."
    ]
  },
  crop_issue_education_help: {
    title: "Crop issue education preview",
    summary: "Review crop help guidance without diagnosing or dispatching support.",
    previewLines: [
      "Collect educational crop support topics.",
      "No field scan, provider handoff, or permission request is started."
    ]
  }
});

function normalizeCategory(category) {
  return typeof category === "string" ? category.trim().toLowerCase() : "";
}

function evaluateControlledLowRiskRendererEligibility(input) {
  if (!input || typeof input !== "object" || Array.isArray(input)) return false;
  if (input.enableControlledLowRiskRendererVisibleUi !== true) return false;
  if (input.mountExistsExactlyOnce !== true) return false;
  if (input.mountHidden !== true) return false;
  if (input.mountEmpty !== true) return false;

  const category = normalizeCategory(input.category);
  if (!ALLOWED_LOW_RISK_CATEGORIES.includes(category)) return false;

  if (input.executionAllowed !== false) return false;
  if (input.providerHandoff !== false) return false;
  if (input.permissionRequest !== false) return false;
  if (input.navigationAllowed !== false) return false;

  for (const key of [
    "requiresRawHtml",
    "requiresButton",
    "requiresLink",
    "requiresHandler",
    "requiresNetwork",
    "requiresStorage",
    "requiresConfirmation",
    "requiresExecution"
  ]) {
    if (input[key] === true) return false;
  }

  return true;
}

function buildControlledLowRiskRendererTextModel(input) {
  if (!evaluateControlledLowRiskRendererEligibility(input)) return null;

  const category = normalizeCategory(input.category);
  const copy = CATEGORY_TEXT[category];

  return {
    title: copy.title,
    category,
    summary: copy.summary,
    previewLines: copy.previewLines.slice(),
    safetyLabel: "Preview only. No action has been taken."
  };
}

module.exports = {
  ALLOWED_LOW_RISK_CATEGORIES,
  evaluateControlledLowRiskRendererEligibility,
  buildControlledLowRiskRendererTextModel
};
