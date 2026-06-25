(function initNexusControlledLowRiskRendererEligibilityAdapter(globalScope) {
  "use strict";

  const ENABLE_ADAPTER_FLAG = "enableControlledLowRiskRendererEligibilityAdapter";

  const CATEGORY_MAP = Object.freeze({
    "agriculture training": "agriculture_training",
    agriculture_training: "agriculture_training",
    "workforce.training": "agriculture_training",
    training: "agriculture_training",

    "irrigation learning": "irrigation_learning",
    irrigation_learning: "irrigation_learning",
    "learning.irrigation": "irrigation_learning",
    "learning.start": "irrigation_learning",

    "farm jobs": "farm_jobs_workforce_discovery",
    "farm jobs/workforce preview": "farm_jobs_workforce_discovery",
    farm_jobs_workforce_discovery: "farm_jobs_workforce_discovery",
    "workforce.job_pathways": "farm_jobs_workforce_discovery",
    jobs: "farm_jobs_workforce_discovery",

    "agritrade browse-only preview": "agritrade_marketplace_preview",
    "agritrade marketplace preview": "agritrade_marketplace_preview",
    "agritrade_marketplace_preview": "agritrade_marketplace_preview",
    "marketplace.agritrade": "agritrade_marketplace_preview",
    marketplace: "agritrade_marketplace_preview",

    "crop issue educational help": "crop_issue_education_help",
    crop_issue_education_help: "crop_issue_education_help",
    "agriculture.help": "crop_issue_education_help",
    "workforce.field_support": "crop_issue_education_help",
    "field support": "crop_issue_education_help"
  });

  const BLOCKED_TERMS = [
    "call",
    "message",
    "whatsapp",
    "telegram",
    "sms",
    "phone",
    "location",
    "map permission",
    "camera",
    "microphone",
    "mic",
    "buy",
    "sell",
    "payment",
    "appointment",
    "schedule",
    "emergency",
    "medical",
    "telehealth",
    "provider",
    "handoff",
    "account",
    "login",
    "contact",
    "navigation",
    "url",
    "execute",
    "execution"
  ];

  const FORBIDDEN_OUTPUT_FIELDS = [
    "button",
    "buttons",
    "link",
    "links",
    "href",
    "url",
    "form",
    "forms",
    "input",
    "inputs",
    "handler",
    "handlers",
    "onClick",
    "onclick",
    "provider",
    "providerAction",
    "permission",
    "permissionRequest",
    "storage",
    "fetch",
    "network",
    "navigation",
    "route",
    "execute",
    "execution",
    "dispatch",
    "contact",
    "location",
    "camera",
    "microphone",
    "payment",
    "call",
    "message"
  ];

  function isPlainObject(value) {
    return Boolean(value) && typeof value === "object" && !Array.isArray(value);
  }

  function isEligibilityAdapterEnabled(candidate) {
    return isPlainObject(candidate) && candidate[ENABLE_ADAPTER_FLAG] === true;
  }

  function normalizeText(value, maxLength) {
    if (typeof value !== "string") return "";
    return value
      .replace(/[\u0000-\u001f\u007f]/g, " ")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, maxLength);
  }

  function normalizeKey(value) {
    return normalizeText(value, 120).toLowerCase();
  }

  function getCandidateCategory(candidate) {
    const values = [
      candidate.category,
      candidate.intentCategory,
      candidate.selectedToolId,
      candidate.toolId,
      candidate.intent,
      candidate.label
    ];

    for (const value of values) {
      const key = normalizeKey(value);
      if (CATEGORY_MAP[key]) return CATEGORY_MAP[key];
    }

    return "";
  }

  function hasBlockedTerm(candidate) {
    const text = [
      candidate.category,
      candidate.intentCategory,
      candidate.selectedToolId,
      candidate.toolId,
      candidate.intent,
      candidate.label,
      candidate.title,
      candidate.summary,
      candidate.actionType,
      candidate.provider,
      candidate.riskTier
    ]
      .map(value => normalizeKey(value))
      .join(" ");

    return BLOCKED_TERMS.some(term => text.includes(term));
  }

  function hasForbiddenCandidateAuthority(candidate) {
    return FORBIDDEN_OUTPUT_FIELDS.some(field => Object.prototype.hasOwnProperty.call(candidate, field));
  }

  function isLowRiskPreviewCandidate(candidate) {
    if (!isPlainObject(candidate)) return false;
    if (!isEligibilityAdapterEnabled(candidate)) return false;
    if (candidate.previewOnly !== true) return false;
    if (normalizeKey(candidate.riskTier) !== "low") return false;
    if (hasForbiddenCandidateAuthority(candidate)) return false;
    if (hasBlockedTerm(candidate)) return false;
    return Boolean(getCandidateCategory(candidate));
  }

  function buildControlledLowRiskRendererPayload(candidate) {
    if (!isLowRiskPreviewCandidate(candidate)) return null;

    const category = getCandidateCategory(candidate);
    const title = normalizeText(candidate.title || candidate.label || "Review safe preview", 120);
    const summary = normalizeText(candidate.summary || candidate.description || "Review this low-risk preview before choosing a next step.", 360);

    if (!title || !summary) return null;

    return Object.freeze({
      category,
      title,
      summary,
      previewOnly: true,
      riskTier: "low"
    });
  }

  const api = Object.freeze({
    ENABLE_ADAPTER_FLAG,
    ALLOWED_CATEGORIES: Object.freeze(Object.values(CATEGORY_MAP).filter((value, index, array) => array.indexOf(value) === index)),
    FORBIDDEN_OUTPUT_FIELDS: Object.freeze(FORBIDDEN_OUTPUT_FIELDS.slice()),
    isEligibilityAdapterEnabled,
    buildControlledLowRiskRendererPayload
  });

  if (typeof module === "object" && module.exports) {
    module.exports = api;
  } else if (globalScope) {
    globalScope.NexusControlledLowRiskRendererEligibilityAdapter = api;
  }
})(typeof globalThis !== "undefined" ? globalThis : this);
