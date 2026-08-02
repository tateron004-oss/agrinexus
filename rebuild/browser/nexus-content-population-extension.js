(function nexusContentPopulationExtension(globalObject) {
  "use strict";

  const STORAGE = Object.freeze({
    artifacts: "nexus.content.artifacts.v2",
    history: "nexus.content.history.v2",
    offline: "nexus.content.offline.v2"
  });

  const APP_NAMES = Object.freeze({
    agriculture: "Agriculture Help", health: "Health & Chronic Care", telehealth: "Telehealth Intake",
    "mobile-clinic": "Mobile Clinic", pharmacy: "Pharmacy Support", learning: "Learning & Literacy",
    workforce: "Jobs & Workforce", marketplace: "AgriTrade Marketplace", maps: "Maps",
    music: "Music / Media", reminders: "Reminders", offline: "Offline Queue",
    "live-knowledge": "Live Knowledge / Internet"
  });

  const REQUIRED_WORKSPACE_FIELDS = Object.freeze({
    "mobile-clinic": Object.freeze([
      Object.freeze({ id: "location", label: "Location", type: "text", value: "" }),
      Object.freeze({ id: "careNeeded", label: "Care needed", type: "text", value: "" }),
      Object.freeze({ id: "travelDistance", label: "Travel distance", type: "text", value: "" })
    ])
  });

  function normalize(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
  }

  function escapeMarkup(value) {
    return String(value || "").replace(/[&<>"']/g, (character) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;"
    })[character]);
  }

  function safeUrl(value) {
    try {
      const url = new URL(String(value || ""));
      return ["http:", "https:"].includes(url.protocol) ? url.href : "";
    } catch {
      return "";
    }
  }

  function readJson(storage, key, fallback) {
    try {
      const value = JSON.parse(storage.getItem(key) || "null");
      return value == null ? fallback : value;
    } catch {
      return fallback;
    }
  }

  function outcomeKind(capability) {
    if (capability === "music" || capability === "media-control") return "music";
    if (capability === "map") return "map";
    if (capability === "search") return "evidence";
    return "application";
  }

  function workflowButtonCommand(label, fields = []) {
    const action = normalize(label);
    const context = (fields || [])
      .map((field) => ({ label: normalize(field && (field.label || field.id)), value: normalize(field && field.value) }))
      .filter((field) => field.label && field.value)
      .map((field) => `${field.label}: ${field.value}`);
    return [action, ...context].filter(Boolean).join(". ");
  }

  function shouldYieldTranscriptToGuidedEntry(command, documentObject) {
    const workspace = documentObject?.getElementById?.("nexus-workspace");
    if (!workspace || workspace.hidden) return false;
    const editableFields = [...(workspace.querySelectorAll?.("input:not([disabled]), textarea:not([disabled]), select:not([disabled])") || [])]
      .filter((field) => !field.readOnly && field.type !== "hidden");
    if (!editableFields.length) return false;
    return /\b(add|append|enter|record|put|set|change|replace|correct|undo|revert|read|review|repeat|save|store|keep|reopen|restore|load|continue|submit|send|share|apply|publish|confirm|approve|cancel)\b/i.test(normalize(command));
  }

  function fieldMarkup(field) {
    const id = escapeMarkup(field.id || field.label);
    const visibleLabel = String(field.label || "Field");
    const accessibleLabel = escapeMarkup(field.accessibleLabel || (/^county\s*\/\s*area$/i.test(visibleLabel) ? "Location" : visibleLabel));
    const label = `${escapeMarkup(visibleLabel)}${field.required ? " *" : ""}`;
    const value = escapeMarkup(field.value || "");
    if (field.type === "textarea") return `<label for="${id}">${label}<textarea id="${id}" name="${id}" aria-label="${accessibleLabel}"${field.required ? " required" : ""}>${value}</textarea></label>`;
    if (field.type === "select") {
      const options = (field.options || []).map((option) => `<option${String(option) === String(field.value) ? " selected" : ""}>${escapeMarkup(option)}</option>`).join("");
      return `<label for="${id}">${label}<select id="${id}" name="${id}" aria-label="${accessibleLabel}">${options}</select></label>`;
    }
    if (field.type === "checkbox") return `<label class="nexus-content-checkbox"><input id="${id}" name="${id}" type="checkbox" aria-label="${accessibleLabel}"${String(field.value).toLowerCase() === "true" ? " checked" : ""}>${label}</label>`;
    const type = ["text", "number", "date", "email", "tel"].includes(field.type) ? field.type : "text";
    return `<label for="${id}">${label}<input id="${id}" name="${id}" type="${type}" aria-label="${accessibleLabel}" value="${value}"${field.required ? " required" : ""}></label>`;
  }

  function workspaceFields(result, artifact) {
    const fields = [...(artifact.fields || [])];
    for (const required of REQUIRED_WORKSPACE_FIELDS[result && result.workspace] || []) {
      const present = fields.some((field) => normalize(field.id).toLowerCase() === required.id.toLowerCase()
        || normalize(field.label).toLowerCase() === required.label.toLowerCase());
      if (!present) fields.push({ ...required });
    }
    return fields;
  }

  function routePreviewMarkup(media = {}) {
    const coordinates = (media.route && Array.isArray(media.route.coordinates) ? media.route.coordinates : [])
      .map(point => [Number(point && point[0]), Number(point && point[1])])
      .filter(point => Number.isFinite(point[0]) && Number.isFinite(point[1]));
    if (coordinates.length < 2) return "";
    const lons = coordinates.map(point => point[0]); const lats = coordinates.map(point => point[1]);
    const minLon = Math.min(...lons); const maxLon = Math.max(...lons); const minLat = Math.min(...lats); const maxLat = Math.max(...lats);
    const lonSpan = Math.max(0.000001, maxLon - minLon); const latSpan = Math.max(0.000001, maxLat - minLat);
    const pointList = coordinates.map(([lon, lat]) => `${(5 + ((lon - minLon) / lonSpan) * 90).toFixed(2)},${(95 - ((lat - minLat) / latSpan) * 90).toFixed(2)}`);
    const origin = escapeMarkup(media.route.origin && media.route.origin.label || "Origin");
    const destination = escapeMarkup(media.route.destination && media.route.destination.label || "Destination");
    const first = pointList[0].split(","); const last = pointList.at(-1).split(",");
    return `<figure class="nexus-content-route-preview"><svg id="nexus-content-map-route" viewBox="0 0 100 100" role="img" aria-label="Route from ${origin} to ${destination}"><rect width="100" height="100" rx="4" fill="#071c24"></rect><polyline points="${pointList.join(" ")}" fill="none" stroke="#6af0ba" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"></polyline><circle cx="${first[0]}" cy="${first[1]}" r="2.4" fill="#ffffff"></circle><circle cx="${last[0]}" cy="${last[1]}" r="2.4" fill="#ffcf70"></circle></svg><figcaption>${origin} → ${destination}</figcaption></figure>`;
  }

  function renderArtifactMarkup(result) {
    const artifact = result && result.artifact || {};
    const status = result && result.status || "failed";
    const resultId = escapeMarkup(result && result.requestId || `result-${Date.now()}`);
    const description = artifact.description ? `<p>${escapeMarkup(artifact.description)}</p>` : "";
    const failure = status === "failed" && result.recovery
      ? `<aside class="nexus-content-recovery" role="alert"><h3>What Nexus can do next</h3><p>${escapeMarkup(result.recovery.message || "The provider did not complete the request.")}</p>${(result.recovery.nextActions || []).length ? `<ul>${result.recovery.nextActions.map((item) => `<li>${escapeMarkup(item)}</li>`).join("")}</ul>` : ""}</aside>`
      : "";
    const editableFields = workspaceFields(result, artifact);
    const fields = editableFields.length
      ? `<form class="nexus-content-form" data-nexus-visible-form data-nexus-printable-card>${editableFields.map(fieldMarkup).join("")}<div class="nexus-content-actions"><button type="button" data-content-action="save">Save visible draft</button><button type="button" data-content-action="print">Print</button></div></form>`
      : "";
    const sections = (artifact.sections || []).map((section) => `<section class="nexus-content-section"><h3>${escapeMarkup(section.heading || "Details")}</h3>${section.body ? `<p>${escapeMarkup(section.body)}</p>` : ""}${(section.items || []).length ? `<ul>${section.items.map((item) => `<li>${escapeMarkup(item)}</li>`).join("")}</ul>` : ""}</section>`).join("");
    const items = (artifact.items || []).map((item) => {
      const source = safeUrl(item.sourceUrl);
      const image = safeUrl(item.imageUrl);
      return `<article data-nexus-item="${escapeMarkup(item.id)}">${image ? `<img src="${escapeMarkup(image)}" alt="${escapeMarkup(item.title || "Result image")}" loading="lazy">` : ""}<h3>${escapeMarkup(item.title || "Result")}</h3>${item.description ? `<p>${escapeMarkup(item.description)}</p>` : ""}${(item.metadata || []).length ? `<p class="nexus-content-meta">${item.metadata.map(escapeMarkup).join(" · ")}</p>` : ""}${source ? `<a href="${escapeMarkup(source)}" target="_blank" rel="noopener noreferrer">Open source${item.sourceName ? ` · ${escapeMarkup(item.sourceName)}` : ""}</a>` : ""}</article>`;
    }).join("");
    const links = (artifact.links || []).map((link) => {
      const url = safeUrl(link.url);
      return url ? `<a href="${escapeMarkup(url)}" target="_blank" rel="noopener noreferrer">${escapeMarkup(link.label || "Open source")}</a>` : "";
    }).join("");
    const mediaUrl = safeUrl(artifact.media && artifact.media.embedUrl);
    const routePreview = artifact.media && artifact.media.kind === "map" ? routePreviewMarkup(artifact.media) : "";
    const mediaElement = mediaUrl
      ? artifact.media.kind === "audio"
        ? `<div class="nexus-content-media"><audio id="nexus-content-music-player" src="${escapeMarkup(mediaUrl)}" title="${escapeMarkup(artifact.media.title || artifact.title || "Nexus music result")}" controls autoplay></audio></div>`
        : `<div class="nexus-content-media"><iframe id="${artifact.media.kind === "map" ? "nexus-content-map-frame" : "nexus-content-music-frame"}" src="${escapeMarkup(mediaUrl)}" title="${escapeMarkup(artifact.media.title || artifact.title || "Nexus media result")}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe></div>`
      : artifact.media && artifact.media.state === "stopped" ? `<p class="nexus-content-meta" data-media-state="stopped">Playback is stopped.</p>` : "";
    const media = `${routePreview}${mediaElement}`;
    return `<section class="nexus-content-result" data-nexus-content-result-id="${resultId}" data-nexus-content-artifact="${escapeMarkup(artifact.kind || "status")}" data-result-status="${escapeMarkup(status)}"><article class="nexus-content-card"><p class="nexus-content-meta">${escapeMarkup(result.capability || "workspace")} · ${escapeMarkup(result.operation || "open")}</p><h2>${escapeMarkup(artifact.title || "Nexus result")}</h2>${description}</article>${failure}${fields}${sections}${items ? `<div class="nexus-content-list">${items}</div>` : ""}${links ? `<nav class="nexus-content-actions" aria-label="Result links">${links}</nav>` : ""}${media}</section>`;
  }

  class NexusContentPopulationController {
    constructor({ windowObject = globalObject, documentObject = globalObject.document, fetchImpl = globalObject.fetch?.bind(globalObject) } = {}) {
      this.window = windowObject;
      this.document = documentObject;
      this.fetch = fetchImpl;
      this.activeWorkspace = null;
      this.currentResult = null;
      this.pending = new Map();
      this.stages = [];
      this.transcriptTimer = null;
      this.lastOpenCommand = "";
      this.lastOpenAt = 0;
      this.installed = false;
      this.onOpenCapture = this.onOpenCapture.bind(this);
      this.onAcknowledgementCapture = this.onAcknowledgementCapture.bind(this);
      this.onReceipt = this.onReceipt.bind(this);
      this.onWorkflowButtonClick = this.onWorkflowButtonClick.bind(this);
    }

    install() {
      if (this.installed || !this.window || !this.document) return this;
      this.installed = true;
      this.window.addEventListener("nexus.clean.workspace.open", this.onOpenCapture, true);
      this.window.addEventListener("nexus.clean.workspace.acknowledged", this.onAcknowledgementCapture, true);
      this.window.addEventListener("nexus.clean.receipt", this.onReceipt);
      this.document.addEventListener("click", this.onWorkflowButtonClick, true);
      return this;
    }

    onWorkflowButtonClick(event) {
      const button = event.target && event.target.closest && event.target.closest("#nexus-app-surface .app-actions button");
      if (!button || button.dataset.resumeAction || button.dataset.providerCardAction || button.dataset.contentAction || button.dataset.nexusActionPending === "true") return;
      const surface = button.closest("#nexus-app-surface");
      if (!surface || surface.querySelector("[data-nexus-content-result-id]")) return;
      event.preventDefault();
      event.stopImmediatePropagation();
      const workspaceShell = this.document.getElementById("nexus-workspace");
      const workspace = workspaceShell && workspaceShell.dataset.workspace || this.activeWorkspace || "live-knowledge";
      const fields = [...surface.querySelectorAll("input, textarea, select")].map((field) => ({
        id: field.name || field.id,
        label: field.getAttribute("aria-label") || field.closest("label")?.childNodes?.[0]?.textContent || field.name || field.id,
        value: field.type === "checkbox" ? String(field.checked) : field.value
      }));
      const command = workflowButtonCommand(button.textContent, fields);
      if (!command) return;
      const requestId = globalObject.crypto?.randomUUID?.() || `button-${Date.now()}`;
      button.dataset.nexusActionPending = "true";
      button.dataset.nexusActionLabel = normalize(button.textContent);
      button.disabled = true;
      button.setAttribute("aria-busy", "true");
      button.textContent = "Working…";
      this.stage("workflow.button-requested", { requestId, workspace, action: normalize(button.textContent) });
      this.open(Object.freeze({
        requestId,
        transactionId: `button-action-${requestId}`,
        workspace,
        command,
        utterance: command,
        parameters: {},
        contentExtensionExclusive: true,
        source: "workflow-button"
      }));
    }

    stage(type, detail = {}) {
      const value = Object.freeze({ type, detail: Object.freeze({ ...detail }), at: new Date().toISOString() });
      this.stages.push(value);
      if (this.stages.length > 250) this.stages.shift();
      this.window.dispatchEvent(new CustomEvent("nexus.content.stage", { detail: value }));
      return value;
    }

    onOpenCapture(event) {
      const detail = event.detail || {};
      if (detail.contentExtensionExclusive || !detail.requestId || !normalize(detail.command || detail.utterance)) return;
      event.stopImmediatePropagation();
      const exclusive = Object.freeze({ ...detail, command: normalize(detail.command || detail.utterance), contentExtensionExclusive: true });
      this.open(exclusive);
    }

    onAcknowledgementCapture(event) {
      const detail = event.detail || {};
      if (detail.contentExtension === true) return;
      if (detail.requestId && this.pending.has(detail.requestId)) {
        event.stopImmediatePropagation();
        this.stage("renderer.premature-acknowledgement-blocked", { requestId: detail.requestId });
      }
    }

    onReceipt(event) {
      const receipt = event.detail || {};
      if (receipt.type !== "transcript.final") return;
      const command = normalize(receipt.detail && receipt.detail.transcript);
      if (!command) return;
      if (shouldYieldTranscriptToGuidedEntry(command, this.document)) {
        this.stage("transcript.yielded-to-guided-entry", { command, workspace: this.activeWorkspace });
        return;
      }
      if (this.transcriptTimer) this.window.clearTimeout(this.transcriptTimer);
      this.transcriptTimer = this.window.setTimeout(() => {
        if (this.lastOpenCommand === command && Date.now() - this.lastOpenAt < 900) return;
        const requestId = globalObject.crypto?.randomUUID?.() || `content-${Date.now()}`;
        this.open(Object.freeze({
          requestId, transactionId: `content-follow-up-${requestId}`,
          workspace: this.activeWorkspace || "live-knowledge", command,
          utterance: command, parameters: {}, contentExtensionExclusive: true, contentExtensionSynthetic: true
        }));
      }, 150);
    }

    history() {
      const history = readJson(this.window.localStorage, STORAGE.history, []);
      return Array.isArray(history) ? history.slice(-20) : [];
    }

    saveHistory(entries) {
      this.window.localStorage.setItem(STORAGE.history, JSON.stringify(entries.slice(-20)));
    }

    visibleFields() {
      return [...(this.document.querySelectorAll("#nexus-app-surface input, #nexus-app-surface select, #nexus-app-surface textarea") || [])].map((field) => ({
        id: field.name || field.id, label: field.closest("label")?.childNodes?.[0]?.textContent?.trim() || field.name || field.id,
        value: field.type === "checkbox" ? String(field.checked) : field.value
      }));
    }

    surface(workspace) {
      const shell = this.document.getElementById("nexus-workspace");
      const appSurface = this.document.getElementById("nexus-app-surface");
      if (shell) {
        shell.hidden = false; shell.dataset.populated = "false"; shell.dataset.workspace = workspace || "live-knowledge";
        shell.dataset.guidedEntryProcess = workspace || "live-knowledge";
        shell.dataset.document = `${workspace || "live-knowledge"}-active-document`;
        this.document.body.classList.add("nexus-workspace-open");
      }
      if (appSurface) appSurface.hidden = false;
      const title = this.document.getElementById("nexus-workspace-title");
      if (title) title.textContent = APP_NAMES[workspace] || workspace || "Nexus Workspace";
      return { shell, appSurface };
    }

    async provider(detail) {
      if (!this.fetch) throw new Error("Network access is unavailable in this browser.");
      const token = this.window.NEXUS_CLEAN_CONFIG?.sessionToken || this.window.sessionStorage?.getItem("nexus.clean.session");
      const previousArtifact = this.currentResult && this.currentResult.artifact || readJson(this.window.localStorage, STORAGE.artifacts, {})[this.activeWorkspace] || null;
      const body = {
        command: detail.command,
        requestedWorkspace: detail.workspace || null,
        activeWorkspace: this.activeWorkspace,
        previousArtifact,
        visibleFields: this.visibleFields(),
        history: this.history()
      };
      this.stage("resolver.requested", { requestId: detail.requestId, command: detail.command, activeWorkspace: this.activeWorkspace });
      const response = await this.fetch("/api/visual/content", {
        method: "POST",
        headers: { authorization: `Bearer ${token}`, "content-type": "application/json" },
        body: JSON.stringify(body)
      });
      const result = await response.json();
      this.stage("resolver.returned", { requestId: detail.requestId, httpStatus: response.status, status: result.status, capability: result.capability });
      if (!response.ok) throw new Error(result.message || `Nexus content service failed (${response.status}).`);
      if (result.schema !== "nexus.content.result.v2" || !result.artifact) throw new Error("Nexus received an invalid content result contract.");
      return result;
    }

    open(detail) {
      this.lastOpenCommand = normalize(detail.command);
      this.lastOpenAt = Date.now();
      this.activeWorkspace = detail.workspace || this.activeWorkspace || "live-knowledge";
      this.pending.set(detail.requestId, { detail });
      this.stage("conversation.received", { requestId: detail.requestId, command: detail.command, workspace: this.activeWorkspace });
      Promise.resolve(this.provider(detail)).then(async (result) => {
        this.activeWorkspace = result.workspace || this.activeWorkspace;
        this.currentResult = result;
        this.render(result, detail);
        await this.settleRendered(result, detail);
        this.acknowledge(result, detail);
      }).catch((error) => this.fail(error, detail));
    }

    render(result, detail) {
      const { shell, appSurface } = this.surface(result.workspace || this.activeWorkspace);
      if (!shell || !appSurface) throw new Error("The visible Nexus workspace is unavailable.");
      if (["music", "media-control"].includes(result.capability)) {
        for (const audio of this.document.querySelectorAll("audio, video")) audio.pause?.();
        const protectedFrame = this.document.getElementById("nexus-music-frame");
        if (protectedFrame && !appSurface.contains(protectedFrame)) protectedFrame.removeAttribute("src");
      }
      appSurface.innerHTML = renderArtifactMarkup(result);
      this.bindArtifact(appSurface, result);
      const root = appSurface.querySelector(`[data-nexus-content-result-id="${globalObject.CSS?.escape ? globalObject.CSS.escape(result.requestId) : result.requestId}"]`);
      if (!root || !normalize(root.textContent)) throw new Error("The requested content did not become visible.");
      const media = result.artifact && result.artifact.media;
      if (result.status === "ready" && media && media.state === "playing" && !root.querySelector("iframe[src], audio[src], video[src]")) throw new Error("The requested media did not become visible.");
      shell.dataset.populated = result.status === "ready" ? "true" : "false";
      shell.dataset.contentAction = `${result.capability}:${result.operation}`;
      const artifacts = readJson(this.window.localStorage, STORAGE.artifacts, {});
      if (result.status === "ready") {
        artifacts[result.workspace || this.activeWorkspace] = result.artifact;
        this.window.localStorage.setItem(STORAGE.artifacts, JSON.stringify(artifacts));
      }
      this.stage("renderer.visible", { requestId: detail.requestId, resultId: result.requestId, status: result.status, capability: result.capability });
    }

    bindArtifact(surface, result) {
      const form = surface.querySelector("[data-nexus-visible-form]");
      if (form) {
        const persist = () => {
          for (const field of result.artifact.fields || []) {
            const control = form.elements.namedItem(field.id);
            if (control) field.value = control.type === "checkbox" ? String(control.checked) : control.value;
          }
          this.currentResult = result;
          const artifacts = readJson(this.window.localStorage, STORAGE.artifacts, {});
          artifacts[result.workspace || this.activeWorkspace] = result.artifact;
          this.window.localStorage.setItem(STORAGE.artifacts, JSON.stringify(artifacts));
        };
        form.addEventListener("input", persist);
        form.querySelector("[data-content-action='save']")?.addEventListener("click", persist);
      }
      surface.querySelector("[data-content-action='print']")?.addEventListener("click", () => this.window.print?.());
    }

    async settleRendered(result, detail) {
      await new Promise((resolve) => this.window.setTimeout(resolve, 120));
      const selector = `[data-nexus-content-result-id="${globalObject.CSS?.escape ? globalObject.CSS.escape(result.requestId) : result.requestId}"]`;
      if (!this.document.querySelector(selector)) {
        this.stage("renderer.overwrite-recovered", { requestId: detail.requestId, resultId: result.requestId });
        this.render(result, detail);
      }
      await new Promise((resolve) => this.window.requestAnimationFrame(() => this.window.requestAnimationFrame(resolve)));
      if (!this.document.querySelector(selector)) throw new Error("The requested result was replaced before acknowledgement.");
    }

    acknowledge(result, detail) {
      this.pending.delete(detail.requestId);
      const successful = result.status === "ready";
      const history = this.history();
      history.push({ role: "user", content: normalize(detail.command) });
      history.push({ role: "assistant", content: successful ? normalize(result.acknowledgement) : normalize(result.recovery && result.recovery.message) });
      this.saveHistory(history);
      const surface = this.document.querySelector(`[data-nexus-content-result-id="${globalObject.CSS?.escape ? globalObject.CSS.escape(result.requestId) : result.requestId}"]`);
      const summary = normalize(surface && surface.textContent).slice(0, 300);
      this.stage(successful ? "renderer.acknowledged" : "renderer.failure-visible", { requestId: detail.requestId, resultId: result.requestId, summary });
      this.window.dispatchEvent(new CustomEvent("nexus.clean.workspace.acknowledged", {
        detail: Object.freeze({
          requestId: detail.requestId, acknowledgementId: `content-${result.requestId}`,
          workspace: result.workspace || this.activeWorkspace, contentExtension: true,
          visible: true, populated: successful, outcomeVerified: successful,
          outcomeKind: outcomeKind(result.capability), visualContext: Object.freeze({
            workspace: result.workspace || this.activeWorkspace, outcomeKind: outcomeKind(result.capability),
            surfaceId: result.requestId, summary, items: [], selectedItem: null, viewport: null,
            sourceIds: (result.artifact.items || []).map((item) => item.id).filter(Boolean),
            availableActions: ["inspect", "revise", "review", "print", "share", "ask-follow-up"]
          }), recovery: successful ? null : result.recovery
        })
      }));
    }

    fail(error, detail) {
      const result = {
        schema: "nexus.content.result.v2", requestId: `local-failure-${Date.now()}`, status: "failed",
        capability: "workspace", operation: "open", workspace: this.activeWorkspace || detail.workspace || "live-knowledge",
        acknowledgement: "", artifact: { kind: "status", title: "Nexus could not complete that request", description: normalize(error.message), fields: [], sections: [], items: [], links: [], media: { state: "unavailable" } },
        recovery: { message: normalize(error.message), nextActions: ["Check the provider connection and retry."] }
      };
      this.currentResult = result;
      this.render(result, detail);
      const queued = readJson(this.window.localStorage, STORAGE.offline, []);
      queued.push({ id: detail.requestId, command: normalize(detail.command), state: "waiting", error: normalize(error.message), createdAt: new Date().toISOString() });
      this.window.localStorage.setItem(STORAGE.offline, JSON.stringify(queued.slice(-50)));
      this.acknowledge(result, detail);
    }

    snapshot() {
      return Object.freeze({ activeWorkspace: this.activeWorkspace, currentResult: this.currentResult, pending: [...this.pending.keys()], stages: [...this.stages], history: this.history() });
    }
  }

  const exported = Object.freeze({ APP_NAMES, NexusContentPopulationController, STORAGE, escapeMarkup, normalize, outcomeKind, renderArtifactMarkup, safeUrl, shouldYieldTranscriptToGuidedEntry, workflowButtonCommand });
  if (typeof module !== "undefined" && module.exports) module.exports = exported;
  if (globalObject && globalObject.document) {
    const install = () => {
      const controller = new NexusContentPopulationController();
      controller.install();
      globalObject.NexusContentPopulation = Object.freeze({ snapshot: () => controller.snapshot(), controller });
    };
    if (globalObject.document.readyState === "loading") globalObject.document.addEventListener("DOMContentLoaded", install, { once: true });
    else install();
  }
})(typeof window !== "undefined" ? window : globalThis);
