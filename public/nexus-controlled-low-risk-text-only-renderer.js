(function initNexusControlledLowRiskTextOnlyRenderer(globalScope) {
  "use strict";

  const MOUNT_ID = "nexus-controlled-low-risk-renderer-root";
  const ENABLE_VISIBLE_UI_FLAG = "enableControlledLowRiskRendererVisibleUi";

  const ALLOWED_CATEGORIES = new Set([
    "agriculture_training",
    "irrigation_learning",
    "farm_jobs_workforce_discovery",
    "agritrade_marketplace_preview",
    "crop_issue_education_help"
  ]);

  const BLOCKED_CATEGORIES = new Set([
    "call",
    "message",
    "payment",
    "location",
    "camera",
    "health",
    "telehealth",
    "emergency",
    "marketplace_transaction",
    "account",
    "identity",
    "provider_handoff"
  ]);

  const ALLOWED_MODEL_FIELDS = new Set([
    "category",
    "title",
    "summary",
    "previewLines",
    "safetyLabel",
    "previewOnly",
    "riskTier"
  ]);

  const FORBIDDEN_MODEL_FIELDS = new Set([
    "html",
    "rawHtml",
    "button",
    "buttons",
    "link",
    "links",
    "href",
    "url",
    "onClick",
    "onclick",
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
    "fetch",
    "storage",
    "script",
    "style",
    "iframe",
    "form",
    "input"
  ]);

  function isPlainObject(value) {
    return Boolean(value) && typeof value === "object" && !Array.isArray(value);
  }

  function isControlledLowRiskRendererVisibleUiEnabled(config) {
    return isPlainObject(config) && config[ENABLE_VISIBLE_UI_FLAG] === true;
  }

  function getDefaultDocument() {
    return globalScope && globalScope.document ? globalScope.document : null;
  }

  function getControlledLowRiskRendererMount(rootDocument) {
    const doc = rootDocument || getDefaultDocument();
    if (!doc || typeof doc.querySelectorAll !== "function") return null;
    const matches = Array.from(doc.querySelectorAll(`#${MOUNT_ID}`));
    return matches.length === 1 ? matches[0] : null;
  }

  function getAttribute(element, name) {
    if (!element || typeof element.getAttribute !== "function") return null;
    return element.getAttribute(name);
  }

  function hasUnsafeInteractiveChildren(mount) {
    if (!mount || typeof mount.querySelectorAll !== "function") return false;
    const unsafeSelectors = [
      "button",
      "a",
      "form",
      "input",
      "select",
      "textarea",
      "iframe",
      "script",
      "[onclick]",
      "[href]",
      "[tabindex]"
    ];
    return unsafeSelectors.some(selector => mount.querySelectorAll(selector).length > 0);
  }

  function runControlledLowRiskRendererPreflight(mount, rootDocument) {
    if (!mount) return false;

    const doc = rootDocument || mount.ownerDocument || getDefaultDocument();
    if (doc && typeof doc.querySelectorAll === "function") {
      const matches = Array.from(doc.querySelectorAll(`#${MOUNT_ID}`));
      if (matches.length !== 1 || matches[0] !== mount) return false;
    }

    if (mount.id !== MOUNT_ID && getAttribute(mount, "id") !== MOUNT_ID) return false;
    if (mount.hidden !== true) return false;
    if (getAttribute(mount, "aria-hidden") !== "true") return false;
    if (getAttribute(mount, "data-visible-renderer-enabled") !== "false") return false;
    if (getAttribute(mount, "data-execution-allowed") !== "false") return false;
    if (getAttribute(mount, "data-provider-handoff") !== "false") return false;
    if (getAttribute(mount, "data-permission-request") !== "false") return false;
    if (getAttribute(mount, "data-navigation-allowed") !== "false") return false;
    if ((mount.textContent || "").trim()) return false;
    if (mount.childNodes && mount.childNodes.length > 0) return false;
    return !hasUnsafeInteractiveChildren(mount);
  }

  function normalizeText(value, maxLength) {
    if (typeof value !== "string") return "";
    const normalized = value.replace(/\s+/g, " ").trim();
    return normalized.slice(0, maxLength);
  }

  function modelHasOnlyAllowedFields(model) {
    return Object.keys(model).every(key => ALLOWED_MODEL_FIELDS.has(key) && !FORBIDDEN_MODEL_FIELDS.has(key));
  }

  function isSafeTextOnlyModel(model) {
    if (!isPlainObject(model)) return false;
    if (!modelHasOnlyAllowedFields(model)) return false;

    const category = normalizeText(model.category, 80);
    if (!ALLOWED_CATEGORIES.has(category)) return false;
    if (BLOCKED_CATEGORIES.has(category)) return false;

    if (!normalizeText(model.title, 120)) return false;
    if (!normalizeText(model.summary, 360)) return false;
    if (model.safetyLabel !== undefined && !normalizeText(model.safetyLabel, 120)) return false;
    if (model.previewOnly !== undefined && model.previewOnly !== true) return false;
    if (model.riskTier !== undefined && normalizeText(model.riskTier, 20).toLowerCase() !== "low") return false;

    if (model.previewLines !== undefined) {
      if (!Array.isArray(model.previewLines)) return false;
      if (model.previewLines.length > 5) return false;
      if (!model.previewLines.every(line => normalizeText(line, 180))) return false;
    }

    return true;
  }

  function clearControlledLowRiskRendererMount(mount) {
    if (!mount) return false;
    while (mount.firstChild) mount.removeChild(mount.firstChild);
    mount.textContent = "";
    mount.hidden = true;
    if (typeof mount.setAttribute === "function") {
      mount.setAttribute("aria-hidden", "true");
      mount.setAttribute("data-visible-renderer-enabled", "false");
      mount.setAttribute("data-execution-allowed", "false");
      mount.setAttribute("data-provider-handoff", "false");
      mount.setAttribute("data-permission-request", "false");
      mount.setAttribute("data-navigation-allowed", "false");
    }
    return true;
  }

  function createTextElement(doc, tagName, className, text) {
    const element = doc.createElement(tagName);
    if (className) element.className = className;
    element.textContent = text;
    return element;
  }

  function renderControlledLowRiskTextModel(mount, model, config, rootDocument) {
    if (!isControlledLowRiskRendererVisibleUiEnabled(config)) return false;
    if (!runControlledLowRiskRendererPreflight(mount, rootDocument)) return false;
    if (!isSafeTextOnlyModel(model)) return false;

    const doc = rootDocument || mount.ownerDocument || getDefaultDocument();
    if (!doc || typeof doc.createElement !== "function") return false;

    const section = doc.createElement("section");
    section.className = "nexus-controlled-low-risk-text-only-renderer";
    section.setAttribute("data-renderer-contract", "text-only");

    section.appendChild(createTextElement(doc, "p", "nexus-controlled-low-risk-renderer-label", normalizeText(model.safetyLabel || "Preview only", 120)));
    section.appendChild(createTextElement(doc, "h3", "nexus-controlled-low-risk-renderer-title", normalizeText(model.title, 120)));
    section.appendChild(createTextElement(doc, "p", "nexus-controlled-low-risk-renderer-summary", normalizeText(model.summary, 360)));

    if (Array.isArray(model.previewLines) && model.previewLines.length) {
      const list = doc.createElement("ul");
      list.className = "nexus-controlled-low-risk-renderer-lines";
      model.previewLines.forEach(line => {
        list.appendChild(createTextElement(doc, "li", "", normalizeText(line, 180)));
      });
      section.appendChild(list);
    }

    mount.appendChild(section);
    mount.hidden = false;
    mount.setAttribute("aria-hidden", "false");
    mount.setAttribute("data-visible-renderer-enabled", "true");
    mount.setAttribute("data-execution-allowed", "false");
    mount.setAttribute("data-provider-handoff", "false");
    mount.setAttribute("data-permission-request", "false");
    mount.setAttribute("data-navigation-allowed", "false");
    return true;
  }

  const api = Object.freeze({
    MOUNT_ID,
    ENABLE_VISIBLE_UI_FLAG,
    ALLOWED_CATEGORIES: Object.freeze(Array.from(ALLOWED_CATEGORIES)),
    BLOCKED_CATEGORIES: Object.freeze(Array.from(BLOCKED_CATEGORIES)),
    FORBIDDEN_MODEL_FIELDS: Object.freeze(Array.from(FORBIDDEN_MODEL_FIELDS)),
    isControlledLowRiskRendererVisibleUiEnabled,
    getControlledLowRiskRendererMount,
    runControlledLowRiskRendererPreflight,
    renderControlledLowRiskTextModel,
    clearControlledLowRiskRendererMount,
    isSafeTextOnlyModel
  });

  if (typeof module === "object" && module.exports) {
    module.exports = api;
  } else if (globalScope) {
    globalScope.NexusControlledLowRiskTextOnlyRenderer = api;
  }
})(typeof globalThis !== "undefined" ? globalThis : this);
