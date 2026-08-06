"use strict";

const RENDERER_OUTCOME_CONTRACT = Object.freeze({
  "production-capability": Object.freeze({
    owner: "protected-capability-bridge",
    rootAttribute: "data-nexus-capability-result",
    surfaceId: "nexus-capability-surface"
  }),
  "content-population": Object.freeze({
    owner: "content-population-extension",
    rootAttribute: "data-nexus-content-result-id",
    surfaceId: "nexus-app-surface"
  }),
  "protected-workspace": Object.freeze({ owner: "protected-workspace-renderer", rootAttribute: "data-nexus-visual", surfaceId: "nexus-app-surface" })
});

function contractForSurface(surface) {
  const contract = RENDERER_OUTCOME_CONTRACT[surface];
  if (!contract) throw new Error(`Unregistered certification renderer surface: ${surface}`);
  return contract;
}

/* This is the only certification helper allowed to know renderer-private DOM attributes. */
function installRendererOutcomeVerifier(windowObject) {
  const contracts = Object.freeze({
    "production-capability": Object.freeze({ owner: "protected-capability-bridge", rootAttribute: "data-nexus-capability-result", surfaceId: "nexus-capability-surface" }),
    "content-population": Object.freeze({ owner: "content-population-extension", rootAttribute: "data-nexus-content-result-id", surfaceId: "nexus-app-surface" })
    ,"protected-workspace": Object.freeze({ owner: "protected-workspace-renderer", rootAttribute: "data-nexus-visual", surfaceId: "nexus-app-surface" })
  });
  function escape(value) {
    if (windowObject.CSS && typeof windowObject.CSS.escape === "function") return windowObject.CSS.escape(String(value));
    return String(value).replace(/["\\]/g, "\\$&");
  }
  windowObject.NexusRendererOutcomeVerifier = Object.freeze({
    currentResultId(surface) {
      if (surface === "production-capability") return windowObject.NexusProductionCapabilityBridge?.snapshot()?.currentResult?.requestId || null;
      if (surface === "content-population") return windowObject.NexusContentPopulation?.snapshot()?.currentResult?.requestId || null;
      if (surface === "protected-workspace") return windowObject.document.querySelector("[data-nexus-visual]")?.getAttribute("data-nexus-visual") || null;
      throw new Error(`Unregistered certification renderer surface: ${surface}`);
    },
    resolve(surface, resultId) {
      const contract = contracts[surface];
      if (!contract) throw new Error(`Unregistered certification renderer surface: ${surface}`);
      const selector = `[${contract.rootAttribute}="${escape(resultId)}"]`;
      const root = windowObject.document.querySelector(selector);
      const host = windowObject.document.getElementById(contract.surfaceId);
      return { contract, host, root };
    },
    capture(surface, resultId) {
      const { contract, host, root } = this.resolve(surface, resultId);
      return {
        owner: contract.owner,
        exists: Boolean(root),
        resultId: resultId || null,
        status: root?.dataset.resultStatus || null,
        artifactKind: root?.dataset.artifactKind || root?.dataset.nexusContentArtifact || null,
        visibleText: String(root?.innerText || "").replace(/\s+/g, " ").trim().slice(0, 6000),
        itemCount: root?.querySelectorAll("[data-nexus-item]").length || 0,
        imageCount: root ? [...root.querySelectorAll("img[src]")].filter(image => image.naturalWidth > 0 && image.naturalHeight > 0).length : 0,
        linkCount: root?.querySelectorAll("a[href]").length || 0,
        controls: root ? [...root.querySelectorAll("input,textarea,select")].map(field => ({ name: field.name || field.id, value: field.type === "checkbox" ? String(field.checked) : field.value })) : [],
        mapCount: root?.querySelectorAll("iframe[src*='openstreetmap.org'], .leaflet-pane").length || 0,
        musicCount: root?.querySelectorAll("audio[src], iframe[src*='youtube']").length || 0,
        stoppedCount: root?.querySelectorAll("[data-media-state='stopped']").length || 0,
        spinnerCount: host?.querySelectorAll(".nexus-capability-spinner,.nexus-content-spinner").length || 0
      };
    },
    captureCurrent(surface) {
      const resultId = this.currentResultId(surface);
      const contract = contracts[surface];
      if (!contract) throw new Error(`Unregistered certification renderer surface: ${surface}`);
      return resultId ? this.capture(surface, resultId) : { owner: contract.owner, exists: false, resultId: null };
    }
  });
}

module.exports = { RENDERER_OUTCOME_CONTRACT, contractForSurface, installRendererOutcomeVerifier };
