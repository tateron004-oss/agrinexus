(function initNexusControlledLowRiskTextOnlyRendererLoader(globalScope) {
  "use strict";

  const ENABLE_VISIBLE_UI_FLAG = "enableControlledLowRiskRendererVisibleUi";
  const ENABLE_LOADER_FLAG = "enableControlledLowRiskRendererLoader";
  const MOUNT_ID = "nexus-controlled-low-risk-renderer-root";

  function isPlainObject(value) {
    return Boolean(value) && typeof value === "object" && !Array.isArray(value);
  }

  function isControlledLowRiskRendererLoaderEnabled(config) {
    return isPlainObject(config) &&
      config[ENABLE_VISIBLE_UI_FLAG] === true &&
      config[ENABLE_LOADER_FLAG] === true;
  }

  function getDefaultDocument() {
    return globalScope && globalScope.document ? globalScope.document : null;
  }

  function getRendererApi(options) {
    if (isPlainObject(options) && isPlainObject(options.rendererApi)) return options.rendererApi;
    if (globalScope && isPlainObject(globalScope.NexusControlledLowRiskTextOnlyRenderer)) {
      return globalScope.NexusControlledLowRiskTextOnlyRenderer;
    }
    return null;
  }

  function getRendererMount(options, rendererApi) {
    if (isPlainObject(options) && options.mount) return options.mount;
    if (rendererApi && typeof rendererApi.getControlledLowRiskRendererMount === "function") {
      return rendererApi.getControlledLowRiskRendererMount(
        isPlainObject(options) ? options.document : null
      );
    }

    const doc = isPlainObject(options) && options.document ? options.document : getDefaultDocument();
    if (!doc || typeof doc.querySelectorAll !== "function") return null;
    const matches = Array.from(doc.querySelectorAll(`#${MOUNT_ID}`));
    return matches.length === 1 ? matches[0] : null;
  }

  function renderControlledLowRiskTextOnlyPreview(model, config, options) {
    const safeOptions = isPlainObject(options) ? options : {};
    if (!isControlledLowRiskRendererLoaderEnabled(config)) {
      return Object.freeze({ rendered: false, reason: "disabled" });
    }

    const rendererApi = getRendererApi(safeOptions);
    if (!rendererApi || typeof rendererApi.renderControlledLowRiskTextModel !== "function") {
      return Object.freeze({ rendered: false, reason: "renderer-unavailable" });
    }

    const mount = getRendererMount(safeOptions, rendererApi);
    if (!mount) {
      return Object.freeze({ rendered: false, reason: "mount-unavailable" });
    }

    const rendered = rendererApi.renderControlledLowRiskTextModel(
      mount,
      model,
      config,
      safeOptions.document || null
    ) === true;

    return Object.freeze({
      rendered,
      reason: rendered ? "rendered" : "renderer-rejected"
    });
  }

  const api = Object.freeze({
    ENABLE_VISIBLE_UI_FLAG,
    ENABLE_LOADER_FLAG,
    MOUNT_ID,
    isControlledLowRiskRendererLoaderEnabled,
    renderControlledLowRiskTextOnlyPreview
  });

  if (typeof module === "object" && module.exports) {
    module.exports = api;
  } else if (globalScope) {
    globalScope.NexusControlledLowRiskTextOnlyRendererLoader = api;
  }
})(typeof globalThis !== "undefined" ? globalThis : this);
