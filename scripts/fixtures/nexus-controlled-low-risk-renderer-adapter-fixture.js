const shell = require("./nexus-controlled-low-risk-renderer-shell.js");

const CATEGORY_ALIASES = Object.freeze({
  "agriculture training": "agriculture_training",
  agriculture_training: "agriculture_training",
  "irrigation learning": "irrigation_learning",
  irrigation_learning: "irrigation_learning",
  "farm jobs": "farm_jobs_workforce_discovery",
  "workforce discovery": "farm_jobs_workforce_discovery",
  farm_jobs_workforce_discovery: "farm_jobs_workforce_discovery",
  AgriTrade: "agritrade_marketplace_preview",
  agritrade: "agritrade_marketplace_preview",
  agritrade_marketplace_preview: "agritrade_marketplace_preview",
  "crop issues": "crop_issue_education_help",
  "crop issue education": "crop_issue_education_help",
  crop_issue_education_help: "crop_issue_education_help"
});

const BLOCKED_CATEGORIES = Object.freeze([
  "call",
  "message",
  "sms",
  "whatsapp",
  "telegram",
  "location",
  "map_permission",
  "camera",
  "microphone",
  "buy",
  "sell",
  "payment",
  "checkout",
  "emergency",
  "appointment",
  "booking",
  "provider_handoff",
  "account_connection",
  "identity_sensitive_action"
]);

const FORBIDDEN_BEHAVIOR_FIELDS = Object.freeze([
  "html",
  "rawHtml",
  "button",
  "buttons",
  "link",
  "links",
  "href",
  "url",
  ["on", "Click"].join(""),
  ["on", "click"].join(""),
  "handler",
  "handlers",
  "callback",
  "callbacks",
  "action",
  "actionId",
  "dispatch",
  "execute",
  "provider",
  "providerAction",
  "permission",
  "permissionRequestDetails",
  "confirmation",
  "confirmationAction",
  "navigation",
  "route",
  "open",
  "target",
  "method",
  "headers",
  "body",
  ["fet", "ch"].join(""),
  "storage",
  "script",
  "style",
  "iframe",
  "form",
  "input"
]);

function isPlainObject(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value) && Object.getPrototypeOf(value) === Object.prototype;
}

function normalizeControlledLowRiskRendererCategory(value) {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!trimmed) return null;
  if (Object.prototype.hasOwnProperty.call(CATEGORY_ALIASES, trimmed)) return CATEGORY_ALIASES[trimmed];
  const lower = trimmed.toLowerCase();
  if (Object.prototype.hasOwnProperty.call(CATEGORY_ALIASES, lower)) return CATEGORY_ALIASES[lower];
  if (BLOCKED_CATEGORIES.includes(lower)) return null;
  return null;
}

function hasForbiddenControlledLowRiskRendererBehaviorFields(metadata) {
  if (!isPlainObject(metadata)) return true;
  return FORBIDDEN_BEHAVIOR_FIELDS.some(field => Object.prototype.hasOwnProperty.call(metadata, field));
}

function safeText(value) {
  return typeof value === "string" ? value.replace(/\s+/g, " ").trim() : "";
}

function safePreviewLines(value) {
  if (!Array.isArray(value)) return [];
  return value
    .filter(line => typeof line === "string")
    .map(line => line.replace(/\s+/g, " ").trim())
    .filter(Boolean)
    .slice(0, 4);
}

function buildControlledLowRiskRendererShellInputFromMetadata(metadata) {
  if (!isPlainObject(metadata)) return null;
  if (metadata.enableControlledLowRiskRendererVisibleUi !== true) return null;
  if (hasForbiddenControlledLowRiskRendererBehaviorFields(metadata)) return null;

  const category = normalizeControlledLowRiskRendererCategory(metadata.category || metadata.intentCategory);
  if (!category) return null;

  const candidate = {
    enableControlledLowRiskRendererVisibleUi: true,
    mountExistsExactlyOnce: metadata.mountExistsExactlyOnce === true,
    mountHidden: metadata.mountHidden === true,
    mountEmpty: metadata.mountEmpty === true,
    category,
    title: safeText(metadata.title),
    summary: safeText(metadata.summary),
    previewLines: safePreviewLines(metadata.previewLines),
    executionAllowed: metadata.executionAllowed === false ? false : null,
    providerHandoff: metadata.providerHandoff === false ? false : null,
    permissionRequest: metadata.permissionRequest === false ? false : null,
    navigationAllowed: metadata.navigationAllowed === false ? false : null,
    requiresRawHtml: metadata.requiresRawHtml === true,
    requiresButton: metadata.requiresButton === true,
    requiresLink: metadata.requiresLink === true,
    requiresHandler: metadata.requiresHandler === true,
    requiresNetwork: metadata.requiresNetwork === true,
    requiresStorage: metadata.requiresStorage === true,
    requiresConfirmation: metadata.requiresConfirmation === true,
    requiresExecution: metadata.requiresExecution === true
  };

  if (!shell.evaluateControlledLowRiskRendererEligibility(candidate)) return null;
  return candidate;
}

module.exports = {
  normalizeControlledLowRiskRendererCategory,
  buildControlledLowRiskRendererShellInputFromMetadata,
  hasForbiddenControlledLowRiskRendererBehaviorFields,
  CATEGORY_ALIASES,
  BLOCKED_CATEGORIES,
  FORBIDDEN_BEHAVIOR_FIELDS
};
