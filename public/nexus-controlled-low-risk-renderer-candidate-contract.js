(function initNexusControlledLowRiskRendererCandidateContract(globalScope) {
  "use strict";

  const ALLOWED_CATEGORY_MAP = Object.freeze({
    "agriculture training": "agriculture training",
    agriculture_training: "agriculture training",
    "workforce.training": "agriculture training",
    training: "agriculture training",

    "irrigation learning": "irrigation learning",
    irrigation_learning: "irrigation learning",
    "learning.irrigation": "irrigation learning",
    "learning.start": "irrigation learning",

    "farm jobs/workforce preview": "farm jobs/workforce preview",
    "farm jobs": "farm jobs/workforce preview",
    farm_jobs_workforce_discovery: "farm jobs/workforce preview",
    "workforce.job_pathways": "farm jobs/workforce preview",
    jobs: "farm jobs/workforce preview",

    "agritrade browse-only preview": "AgriTrade browse-only preview",
    "agritrade marketplace preview": "AgriTrade browse-only preview",
    agritrade_marketplace_preview: "AgriTrade browse-only preview",
    "marketplace.agritrade": "AgriTrade browse-only preview",
    marketplace: "AgriTrade browse-only preview",

    "crop issue educational help": "crop issue educational help",
    crop_issue_education_help: "crop issue educational help",
    "agriculture.help": "crop issue educational help",
    "workforce.field_support": "crop issue educational help",
    "field support": "crop issue educational help"
  });

  const ALLOWED_TOP_LEVEL_FIELDS = Object.freeze([
    "category",
    "title",
    "summary",
    "previewOnly",
    "riskTier",
    "source",
    "selectedToolId",
    "readiness",
    "reason"
  ]);

  const FORBIDDEN_FIELDS = Object.freeze([
    "url",
    "href",
    "link",
    "links",
    "button",
    "buttons",
    "form",
    "forms",
    "input",
    "inputs",
    "handler",
    "handlers",
    "onClick",
    "click",
    "route",
    "routing",
    "navigate",
    "navigation",
    "provider",
    "providerHandoff",
    "handoff",
    "permission",
    "permissions",
    "camera",
    "microphone",
    "location",
    "map",
    "contact",
    "contacts",
    "phone",
    "call",
    "message",
    "sms",
    "whatsapp",
    "telegram",
    "payment",
    "buy",
    "sell",
    "purchase",
    "checkout",
    "appointment",
    "schedule",
    "emergency",
    "dispatch",
    "medical",
    "telehealth",
    "fetch",
    "network",
    "storage",
    "execute",
    "execution",
    "action",
    "actions",
    "completion",
    "completed"
  ]);

  const BLOCKED_VALUE_TERMS = Object.freeze([
    "call",
    "message",
    "whatsapp",
    "telegram",
    "sms",
    "phone",
    "location",
    "camera",
    "microphone",
    "buy",
    "sell",
    "payment",
    "purchase",
    "checkout",
    "appointment",
    "schedule",
    "emergency",
    "dispatch",
    "medical diagnosis",
    "telehealth",
    "provider handoff",
    "execute",
    "execution",
    "completed real-world"
  ]);

  const SAFE_READINESS_FIELDS = Object.freeze([
    "isReady",
    "ready",
    "previewReady",
    "metadataOnly",
    "previewOnly",
    "requiresPermission",
    "requiresConfirmation",
    "hasMissingInput",
    "reason",
    "source",
    "status",
    "riskTier",
    "selectedToolId",
    "category"
  ]);

  function isPlainObject(value) {
    return Boolean(value) && typeof value === "object" && !Array.isArray(value);
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
    return normalizeText(value, 160).toLowerCase();
  }

  function hasForbiddenField(value) {
    if (!isPlainObject(value)) return false;
    return Object.keys(value).some(key => {
      const normalized = normalizeKey(key);
      if (FORBIDDEN_FIELDS.some(field => normalizeKey(field) === normalized)) return true;
      return hasForbiddenField(value[key]);
    });
  }

  function hasUnknownTopLevelField(candidate) {
    return Object.keys(candidate).some(key => !ALLOWED_TOP_LEVEL_FIELDS.includes(key));
  }

  function hasBlockedValue(candidate) {
    const values = [
      candidate.category,
      candidate.title,
      candidate.summary,
      candidate.selectedToolId,
      candidate.reason
    ];
    const text = values.map(value => normalizeKey(value)).join(" ");
    return BLOCKED_VALUE_TERMS.some(term => text.includes(term));
  }

  function normalizeCategory(candidate) {
    const candidates = [candidate.category, candidate.selectedToolId];
    for (const value of candidates) {
      const key = normalizeKey(value);
      if (ALLOWED_CATEGORY_MAP[key]) return ALLOWED_CATEGORY_MAP[key];
    }
    return "";
  }

  function normalizeReadiness(readiness) {
    if (readiness == null) return undefined;
    if (!isPlainObject(readiness)) return null;
    if (hasForbiddenField(readiness)) return null;

    const output = {};
    for (const [key, value] of Object.entries(readiness)) {
      if (!SAFE_READINESS_FIELDS.includes(key)) return null;
      if (typeof value === "boolean") {
        output[key] = value;
      } else if (typeof value === "string") {
        output[key] = normalizeText(value, 160);
      } else {
        return null;
      }
    }
    return Object.freeze(output);
  }

  function normalizeControlledLowRiskRendererCandidate(candidate) {
    if (!isPlainObject(candidate)) return null;
    if (hasUnknownTopLevelField(candidate)) return null;
    if (hasForbiddenField(candidate)) return null;
    if (candidate.previewOnly !== true) return null;
    if (normalizeKey(candidate.riskTier) !== "low") return null;
    if (hasBlockedValue(candidate)) return null;

    const category = normalizeCategory(candidate);
    if (!category) return null;

    const title = normalizeText(candidate.title, 120);
    const summary = normalizeText(candidate.summary, 360);
    const source = normalizeText(candidate.source, 120);
    const selectedToolId = normalizeText(candidate.selectedToolId, 120);
    const reason = normalizeText(candidate.reason, 220);
    const readiness = normalizeReadiness(candidate.readiness);

    if (!title || !summary || !source) return null;
    if (readiness === null) return null;

    const output = {
      category,
      title,
      summary,
      previewOnly: true,
      riskTier: "low",
      source
    };

    if (selectedToolId) output.selectedToolId = selectedToolId;
    if (readiness) output.readiness = readiness;
    if (reason) output.reason = reason;

    return Object.freeze(output);
  }

  function validateControlledLowRiskRendererCandidate(candidate) {
    const normalized = normalizeControlledLowRiskRendererCandidate(candidate);
    return Object.freeze({
      valid: Boolean(normalized),
      candidate: normalized
    });
  }

  const api = Object.freeze({
    ALLOWED_CATEGORIES: Object.freeze(Object.values(ALLOWED_CATEGORY_MAP).filter((value, index, array) => array.indexOf(value) === index)),
    ALLOWED_TOP_LEVEL_FIELDS,
    FORBIDDEN_FIELDS,
    SAFE_READINESS_FIELDS,
    normalizeControlledLowRiskRendererCandidate,
    validateControlledLowRiskRendererCandidate
  });

  if (typeof module === "object" && module.exports) {
    module.exports = api;
  } else if (globalScope) {
    globalScope.NexusControlledLowRiskRendererCandidateContract = api;
  }
})(typeof globalThis !== "undefined" ? globalThis : this);
