(function installNexusProductionCapabilityBridge(windowObject) {
  "use strict";

  if (!windowObject || windowObject.NexusProductionCapabilityBridge) return;
  const nativeFetch = windowObject.fetch.bind(windowObject);
  const state = {
    currentResult: null,
    resultStack: [],
    currentCommand: "",
    history: [],
    controller: null,
    stages: [],
    requestSequence: 0,
    sessionToken: "",
    lastTranscriptCommand: "",
    lastTranscriptAt: 0,
    realtimeChannel: null,
    lastAgentEndAt: 0,
    lastUserSpeechAt: 0
  };

  function localResult(capability, operation, acknowledgement, extra = {}) {
    return {
      schema: "nexus.content.result.v2",
      requestId: `production-local-${Date.now()}-${++state.requestSequence}`,
      status: "ready",
      capability,
      operation,
      acknowledgement,
      localLifecycleAction: true,
      ...extra
    };
  }

  function handleLocalLifecycle(command) {
    const value = clean(command).toLowerCase();
    const surface = ensureSurface();
    const audio = surface.querySelector("#nexus-capability-audio");
    if (/\b(close|dismiss)\b.*\b(workspace|window|document|map|results?)\b|\breturn to (?:our )?conversation\b/.test(value)) {
      if (state.controller) state.controller.abort("closed-by-voice");
      surface.hidden = true;
      document.body.classList.remove("nexus-capability-open");
      stage("workspace.closed", { input: "voice" });
      return localResult("workspace", "close", "The workspace is closed and our conversation remains available.");
    }
    if (/^\s*(?:nexus,?\s*)?(?:cancel|cancel this request)\b/.test(value)) {
      if (state.controller) state.controller.abort("cancelled-by-voice");
      stage("request.cancelled", { input: "voice" });
      return localResult("workspace", "cancel", "The active request was cancelled.");
    }
    if (/\b(go back|previous result|return to the previous result)\b/.test(value) && state.resultStack.length) {
      const previous = state.resultStack.pop();
      renderArtifact(previous);
      state.currentResult = previous;
      stage("workspace.previous-visible", { resultId: previous.requestId });
      return { ...previous, acknowledgement: "The previous result is visible again.", localLifecycleAction: true };
    }
    if (/\b(?:pause|stop)\b.*\b(?:music|audio|song|speaking)\b|^\s*(?:nexus,?\s*)?(?:pause|stop)\s*$/.test(value)) {
      if (audio) { audio.pause(); if (/\bstop\b/.test(value)) audio.currentTime = 0; }
      if (/\bspeaking\b/.test(value)) windowObject.speechSynthesis?.cancel();
      stage("media.paused", { stopped: /\bstop\b/.test(value) });
      return localResult("media-control", /\bstop\b/.test(value) ? "stop" : "pause", /\bstop\b/.test(value) ? "Playback is stopped." : "Playback is paused.");
    }
    if (/\bresume\b.*\b(?:music|audio|song|speaking)\b|^\s*(?:nexus,?\s*)?resume\s*$/.test(value)) {
      if (audio) audio.play().catch(() => {});
      stage("media.resumed", {});
      return localResult("media-control", "resume", "Playback resumed when permitted by the browser.");
    }
    if (/\b(increase|larger|bigger)\b.*\b(text|font)\b|\bmake this screen easier to read\b/.test(value)) {
      const frame = surface.querySelector(".nexus-capability-frame");
      if (frame) frame.style.fontSize = `${Math.min(150, Number(frame.dataset.fontPercent || 100) + 15)}%`;
      if (frame) frame.dataset.fontPercent = String(Math.min(150, Number(frame.dataset.fontPercent || 100) + 15));
      stage("accessibility.text-resized", { percent: frame?.dataset.fontPercent || "115" });
      return localResult("accessibility", "update", "The workspace text is larger and remains visible.");
    }
    if (/\bread (?:the )?(?:visible )?(?:results?|screen|document) aloud\b/.test(value)) {
      const text = clean(surface.querySelector("#nexus-capability-body")?.innerText, 5000);
      if (text && windowObject.speechSynthesis && windowObject.SpeechSynthesisUtterance) {
        windowObject.speechSynthesis.cancel();
        windowObject.speechSynthesis.speak(new SpeechSynthesisUtterance(text));
      }
      stage("accessibility.read-aloud", { textLength: text.length });
      return localResult("accessibility", "read", "I am reading the visible result aloud while keeping it on screen.");
    }
    if (/\b(?:try|retry) (?:that|this|the request) again\b/.test(value) && state.currentCommand) {
      stage("request.retry-by-voice", { command: state.currentCommand });
      return executeCapability(state.currentCommand, { retry: true });
    }
    return null;
  }

  function clean(value, limit = 6000) {
    return String(value || "").replace(/\s+/g, " ").trim().slice(0, limit);
  }

  function escapeHtml(value) {
    return String(value || "").replace(/[&<>"']/g, character => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    })[character]);
  }

  function safeUrl(value) {
    try {
      const url = new URL(String(value || ""), windowObject.location.href);
      return ["http:", "https:"].includes(url.protocol) ? url.href : "";
    } catch { return ""; }
  }

  function stage(type, detail = {}) {
    const event = Object.freeze({ type, detail: Object.freeze({ ...detail }), at: new Date().toISOString() });
    state.stages.push(event);
    if (state.stages.length > 300) state.stages.shift();
    windowObject.dispatchEvent(new CustomEvent("nexus.capability.stage", { detail: event }));
    return event;
  }

  function commandFromRequest(input, options = {}) {
    const url = String(input && input.url || input || "");
    if (!/\/api\/(?:agent\/command|voice\/realtime\/tool)(?:\?|$)/.test(url)) return null;
    let body = {};
    try { body = JSON.parse(String(options.body || input && input.body || "{}")); } catch { return null; }
    const args = body.arguments && typeof body.arguments === "object" ? body.arguments : {};
    const command = clean(body.command || body.text || args.command || args.query, 4000);
    if (!command) return null;
    return { url, body, command, realtime: /\/api\/voice\/realtime\/tool/.test(url) };
  }

  function isVisualCapabilityRequest(command) {
    const value = clean(command).toLowerCase();
    if (!value) return false;
    const lifecycleRequest = /\b(close|dismiss|cancel|retry|go back|previous result|pause|resume|stop speaking|read .* aloud|increase .* text|larger .* text|easier to read|return to .*conversation)\b/.test(value);
    const visualOutcome = /\b(show|display|open|find|search|research|look up|create|make|build|draft|prepare|write|play|map|route|directions|remind|revise|change|add|fill|complete|review|print|share|stop|put|set|update)\b/.test(value);
    const artifactOrLiveSource = /\b(image|picture|photo|source|website|map|route|direction|music|song|artist|genre|resume|résumé|cv|document|report|form|intake|card|questions?|marketplace|listing|draft|reminder|weather|forecast|places?|shops?|results?)\b/.test(value);
    const contextualFollowUp = Boolean(state.currentResult) && /^(?:please\s+)?(?:change|revise|add|remove|fill|complete|review|print|share|show|play|stop|make|try|use|put|set|update)\b/.test(value);
    return lifecycleRequest || (visualOutcome && artifactOrLiveSource) || contextualFollowUp;
  }

  function activeCertifiedGuidedEntry(command) {
    const workspace = document.querySelector("#nexus-workspace");
    const editable = workspace && workspace.querySelector(
      '[data-nexus-voice-form-proof], textarea[aria-label^="Résumé "], input[aria-label^="Résumé "]'
    );
    if (!editable) return false;
    return /\b(add|append|enter|record|put|set|change|replace|correct|undo|revert|read|review|repeat|save|store|keep|reopen|restore|load|continue|submit|send|share|apply|publish|confirm|approve|cancel)\b/i.test(command);
  }

  function commandOverlap(left, right) {
    const tokens = value => new Set(clean(value).toLowerCase().replace(/[^a-z0-9]+/g, " ").split(/\s+/).filter(token => token.length >= 3));
    const expected = tokens(left);
    const actual = tokens(right);
    return [...expected].filter(token => actual.has(token)).length / Math.max(1, Math.min(expected.size, actual.size));
  }

  function ensureSurface() {
    let surface = document.getElementById("nexus-capability-surface");
    if (surface) return surface;
    surface = document.createElement("section");
    surface.id = "nexus-capability-surface";
    surface.setAttribute("role", "dialog");
    surface.setAttribute("aria-modal", "true");
    surface.setAttribute("aria-label", "Nexus live capability workspace");
    surface.hidden = true;
    surface.innerHTML = '<div class="nexus-capability-frame"><header><div><span class="nexus-capability-kicker">Nexus live workspace</span><h1 id="nexus-capability-title">Preparing your result</h1></div><button type="button" data-capability-action="close" aria-label="Close workspace">Close</button></header><div id="nexus-capability-body" tabindex="-1"></div></div>';
    document.body.append(surface);
    surface.querySelector('[data-capability-action="close"]').addEventListener("click", () => {
      if (state.controller) state.controller.abort("closed-by-user");
      surface.hidden = true;
      document.body.classList.remove("nexus-capability-open");
      stage("workspace.closed", {});
    });
    return surface;
  }

  function showProgress(command, requestId) {
    const surface = ensureSurface();
    surface.hidden = false;
    surface.dataset.state = "loading";
    document.body.classList.add("nexus-capability-open");
    surface.querySelector("#nexus-capability-title").textContent = "Working on your request";
    const body = surface.querySelector("#nexus-capability-body");
    body.innerHTML = `<section class="nexus-capability-progress" role="status" aria-live="polite"><span class="nexus-capability-spinner" aria-hidden="true"></span><div><h2>Gathering and preparing a visible result</h2><p>${escapeHtml(command)}</p><p class="nexus-capability-muted">Nexus will confirm only after the requested content appears here.</p></div><button type="button" data-capability-action="cancel">Cancel</button></section>`;
    body.querySelector('[data-capability-action="cancel"]').addEventListener("click", () => state.controller && state.controller.abort("cancelled-by-user"));
    stage("provider.progress-visible", { requestId, command });
  }

  function fieldMarkup(field) {
    const id = escapeHtml(field.id || field.label || `field-${Date.now()}`);
    const label = escapeHtml(field.label || "Field");
    const value = escapeHtml(field.value || "");
    if (field.type === "textarea") return `<label>${label}<textarea name="${id}"${field.required ? " required" : ""}>${value}</textarea></label>`;
    if (field.type === "select") return `<label>${label}<select name="${id}">${(field.options || []).map(option => `<option${String(option) === String(field.value) ? " selected" : ""}>${escapeHtml(option)}</option>`).join("")}</select></label>`;
    if (field.type === "checkbox") return `<label class="nexus-capability-check"><input name="${id}" type="checkbox"${String(field.value).toLowerCase() === "true" ? " checked" : ""}>${label}</label>`;
    const type = ["text", "number", "date", "email", "tel"].includes(field.type) ? field.type : "text";
    return `<label>${label}<input name="${id}" type="${type}" value="${value}"${field.required ? " required" : ""}></label>`;
  }

  function itemMarkup(item) {
    const sourceUrl = safeUrl(item.sourceUrl);
    const imageUrl = safeUrl(item.imageUrl);
    return `<article class="nexus-capability-item" data-nexus-item="${escapeHtml(item.id || "result")}">${imageUrl ? `<a href="${escapeHtml(sourceUrl || imageUrl)}" target="_blank" rel="noopener noreferrer" class="nexus-capability-image-link"><img src="${escapeHtml(imageUrl)}" alt="${escapeHtml(item.title || "Source image")}" loading="eager"></a>` : ""}<div><h3>${escapeHtml(item.title || "Result")}</h3>${item.description ? `<p>${escapeHtml(item.description)}</p>` : ""}${(item.metadata || []).length ? `<p class="nexus-capability-muted">${item.metadata.map(escapeHtml).join(" · ")}</p>` : ""}${sourceUrl ? `<a href="${escapeHtml(sourceUrl)}" target="_blank" rel="noopener noreferrer">Open reputable source${item.sourceName ? ` · ${escapeHtml(item.sourceName)}` : ""}</a>` : ""}</div></article>`;
  }

  function renderArtifact(result) {
    const artifact = result.artifact || {};
    const surface = ensureSurface();
    surface.hidden = false;
    surface.dataset.state = result.status;
    surface.dataset.capability = result.capability || "workspace";
    document.body.classList.add("nexus-capability-open");
    surface.querySelector("#nexus-capability-title").textContent = artifact.title || (result.status === "ready" ? "Nexus result" : "Nexus could not complete that request");
    const sections = (artifact.sections || []).map(section => `<section class="nexus-capability-section"><h3>${escapeHtml(section.heading || "Details")}</h3>${section.body ? `<p>${escapeHtml(section.body)}</p>` : ""}${(section.items || []).length ? `<ul>${section.items.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>` : ""}</section>`).join("");
    const fields = (artifact.fields || []).length ? `<form data-nexus-capability-form data-nexus-printable>${artifact.fields.map(fieldMarkup).join("")}<div class="nexus-capability-actions"><button type="button" data-capability-action="save">Save draft</button><button type="button" data-capability-action="print">Print</button><button type="button" data-capability-action="share">Share</button></div></form>` : "";
    const items = (artifact.items || []).map(itemMarkup).join("");
    const links = (artifact.links || []).map(link => safeUrl(link.url) ? `<a href="${escapeHtml(safeUrl(link.url))}" target="_blank" rel="noopener noreferrer">${escapeHtml(link.label || "Open source")}</a>` : "").join("");
    const media = artifact.media || {};
    const embedUrl = safeUrl(media.embedUrl);
    const routeMap = media.kind === "map" ? '<div id="nexus-capability-map" role="img" aria-label="Interactive route map"></div>' : "";
    const playable = embedUrl && media.kind === "audio" ? `<audio id="nexus-capability-audio" src="${escapeHtml(embedUrl)}" controls autoplay preload="metadata"></audio>` : embedUrl && media.kind !== "map" ? `<iframe id="nexus-capability-media" src="${escapeHtml(embedUrl)}" title="${escapeHtml(media.title || artifact.title || "Nexus media")}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>` : "";
    const failure = result.status === "failed" ? `<aside class="nexus-capability-recovery" role="alert"><h2>Live request not completed</h2><p>${escapeHtml(result.recovery && result.recovery.message || artifact.description || "The provider did not complete the request.")}</p>${(result.recovery && result.recovery.nextActions || []).length ? `<ul>${result.recovery.nextActions.map(action => `<li>${escapeHtml(action)}</li>`).join("")}</ul>` : ""}<button type="button" data-capability-action="retry">Retry</button></aside>` : "";
    const body = surface.querySelector("#nexus-capability-body");
    body.innerHTML = `<section class="nexus-capability-result" data-nexus-capability-result="${escapeHtml(result.requestId || "result")}" data-result-status="${escapeHtml(result.status || "failed")}" data-artifact-kind="${escapeHtml(artifact.kind || "status")}"><div class="nexus-capability-summary"><p class="nexus-capability-kicker">${escapeHtml(result.capability || "workspace")} · ${escapeHtml(result.operation || "open")}</p>${artifact.description ? `<p>${escapeHtml(artifact.description)}</p>` : ""}</div>${failure}${fields}${sections}${items ? `<div class="nexus-capability-grid">${items}</div>` : ""}${links ? `<nav class="nexus-capability-actions" aria-label="Result sources">${links}</nav>` : ""}${routeMap}${playable}</section>`;
    bindResult(surface, result);
    body.focus({ preventScroll: true });
    body.scrollTop = 0;
    return body.querySelector("[data-nexus-capability-result]");
  }

  function bindResult(surface, result) {
    const form = surface.querySelector("[data-nexus-capability-form]");
    const persist = () => {
      if (!form) return;
      for (const field of result.artifact.fields || []) {
        const control = form.elements.namedItem(field.id);
        if (control) field.value = control.type === "checkbox" ? String(control.checked) : control.value;
      }
      state.currentResult = result;
      stage("artifact.fields-updated", { requestId: result.requestId, fields: result.artifact.fields.length });
    };
    form && form.addEventListener("input", persist);
    surface.querySelector('[data-capability-action="save"]')?.addEventListener("click", persist);
    surface.querySelector('[data-capability-action="print"]')?.addEventListener("click", () => windowObject.print());
    surface.querySelector('[data-capability-action="share"]')?.addEventListener("click", async () => {
      const text = clean(surface.querySelector(".nexus-capability-result")?.innerText, 8000);
      try {
        if (navigator.share) await navigator.share({ title: result.artifact.title || "Nexus document", text });
        else await navigator.clipboard.writeText(text);
        stage("artifact.shared", { requestId: result.requestId });
      } catch (error) { stage("artifact.share-cancelled", { requestId: result.requestId, message: clean(error.message, 240) }); }
    });
    surface.querySelector('[data-capability-action="retry"]')?.addEventListener("click", () => executeCapability(state.currentCommand, { retry: true }));
    if (result.artifact.media && result.artifact.media.kind === "map") initializeMap(result);
  }

  function initializeMap(result) {
    const target = document.getElementById("nexus-capability-map");
    const route = result.artifact.media.route;
    if (!target || !windowObject.L || !route) return;
    const old = target._leaflet_id && windowObject.L.DomUtil.get(target.id);
    if (old && old._leaflet_id) old._leaflet_id = null;
    const map = windowObject.L.map(target, { zoomControl: true });
    windowObject.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19, attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);
    const coordinates = (route.coordinates || []).map(point => [Number(point[1]), Number(point[0])]).filter(point => Number.isFinite(point[0]) && Number.isFinite(point[1]));
    if (coordinates.length > 1) {
      const line = windowObject.L.polyline(coordinates, { color: "#6af0ba", weight: 6, opacity: 0.92 }).addTo(map);
      map.fitBounds(line.getBounds(), { padding: [28, 28] });
    } else if (route.focus && Number.isFinite(Number(route.focus.lat)) && Number.isFinite(Number(route.focus.lon))) {
      map.setView([Number(route.focus.lat), Number(route.focus.lon)], 12);
    }
    if (route.origin) windowObject.L.marker([route.origin.lat, route.origin.lon]).addTo(map).bindPopup(`Start: ${escapeHtml(route.origin.label || "Origin")}`);
    if (route.destination) windowObject.L.marker([route.destination.lat, route.destination.lon]).addTo(map).bindPopup(`Destination: ${escapeHtml(route.destination.label || "Destination")}`);
    setTimeout(() => map.invalidateSize(), 100);
  }

  function visibleFields() {
    return [...document.querySelectorAll("#nexus-capability-surface input, #nexus-capability-surface textarea, #nexus-capability-surface select")].map(field => ({
      id: field.name || field.id,
      label: clean(field.closest("label")?.childNodes?.[0]?.textContent || field.name || field.id, 200),
      value: field.type === "checkbox" ? String(field.checked) : field.value
    }));
  }

  async function requestContent(command, signal) {
    const response = await nativeFetch("/api/capability/content", {
      method: "POST",
      credentials: "same-origin",
      cache: "no-store",
      signal,
      headers: { "content-type": "application/json", accept: "application/json", ...(state.sessionToken ? { "x-nexus-capability-session": state.sessionToken } : {}) },
      body: JSON.stringify({
        command,
        activeWorkspace: state.currentResult && state.currentResult.workspace || null,
        previousArtifact: state.currentResult && state.currentResult.artifact || null,
        visibleFields: visibleFields(),
        history: state.history.slice(-16)
      })
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) {
      const error = new Error(payload.message || `Capability provider failed (${response.status}).`);
      error.authEvidence = payload.authEvidence || null;
      throw error;
    }
    if (payload.schema !== "nexus.content.result.v2" || !payload.artifact) throw new Error("Capability provider returned an invalid visual result.");
    return payload;
  }

  function withTimeout(controller, milliseconds) {
    const timer = setTimeout(() => controller.abort(`timed-out-after-${milliseconds}ms`), milliseconds);
    return () => clearTimeout(timer);
  }

  async function settleVisual(result, requestId) {
    const root = renderArtifact(result);
    await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    if (!root || !root.isConnected || !clean(root.innerText, 10000)) throw new Error("The requested artifact did not become visible.");
    if (result.status === "ready" && result.capability === "images") {
      const images = [...root.querySelectorAll("img[src]")];
      if (!images.length) throw new Error("The image provider returned no visible thumbnails.");
      await Promise.race([
        Promise.all(images.map(image => image.complete ? Promise.resolve() : new Promise(resolve => { image.addEventListener("load", resolve, { once: true }); image.addEventListener("error", resolve, { once: true }); }))),
        new Promise(resolve => setTimeout(resolve, 6000))
      ]);
      if (!images.some(image => image.naturalWidth >= 120 && image.naturalHeight >= 90)) throw new Error("The image thumbnails could not be loaded from their sources.");
    }
    if (result.status === "ready" && result.capability === "map") {
      const map = root.querySelector("#nexus-capability-map");
      if (!map || !result.artifact.media.route || !(result.artifact.media.route.coordinates || []).length) throw new Error("The route was not visibly plotted.");
    }
    if (result.status === "ready" && result.capability === "music") {
      const audio = root.querySelector("#nexus-capability-audio");
      if (!audio || !audio.src) throw new Error("No playable authorized media source became visible.");
      try { await audio.play(); } catch { /* Controls and authorized source remain visible; do not report playing below. */ }
      if (audio.paused) {
        result.acknowledgement = "I found authorized music choices and opened a playable source. Use the visible Play control if your browser blocked autoplay.";
        result.artifact.media.state = "ready";
      }
    }
    const styles = getComputedStyle(root);
    stage("renderer.visible", {
      requestId,
      resultId: result.requestId,
      capability: result.capability,
      textLength: clean(root.innerText, 10000).length,
      backgroundColor: styles.backgroundColor,
      color: styles.color
    });
    return root;
  }

  async function executeCapability(command, options = {}) {
    if (!options.retry) {
      const lifecycle = handleLocalLifecycle(command);
      if (lifecycle) return lifecycle;
    }
    const requestId = `production-capability-${Date.now()}-${++state.requestSequence}`;
    if (state.controller) state.controller.abort("superseded-by-new-request");
    const controller = new AbortController();
    state.controller = controller;
    state.currentCommand = command;
    showProgress(command, requestId);
    stage("conversation.goal-requested", { requestId, command, retry: Boolean(options.retry) });
    const clearTimer = withTimeout(controller, 36000);
    try {
      let result;
      try { result = await requestContent(command, controller.signal); }
      catch (firstError) {
        if (controller.signal.aborted) throw firstError;
        stage("provider.retry", { requestId, error: clean(firstError.message, 300), authEvidence: firstError.authEvidence || null });
        await new Promise(resolve => setTimeout(resolve, 650));
        result = await requestContent(command, controller.signal);
      }
      stage("provider.returned", { requestId, status: result.status, capability: result.capability, timing: result.timing || null, providerTrace: result.providerTrace || [] });
      const root = await settleVisual(result, requestId);
      if (state.currentResult && state.currentResult.requestId !== result.requestId) {
        state.resultStack.push(state.currentResult);
        state.resultStack = state.resultStack.slice(-12);
      }
      state.currentResult = result;
      state.history.push({ role: "user", content: command }, { role: "assistant", content: result.status === "ready" ? result.acknowledgement : result.recovery && result.recovery.message || "Provider failed." });
      state.history = state.history.slice(-20);
      stage(result.status === "ready" ? "renderer.acknowledged" : "renderer.failure-visible", {
        requestId, resultId: result.requestId, visible: true, populated: result.status === "ready", summary: clean(root.innerText, 500)
      });
      const turnSpeechAlreadyEnded = options.transcriptFallback && state.lastAgentEndAt >= Number(options.transcriptObservedAt || 0);
      if (result.status === "ready" && (options.postRenderVoiceAck || turnSpeechAlreadyEnded)) requestRealtimeVisibleAcknowledgement(result);
      return result;
    } catch (error) {
      const cancelled = controller.signal.aborted && !String(controller.signal.reason || "").includes("timed-out");
      const message = cancelled ? "The request was cancelled. Your previous result is unchanged." : controller.signal.aborted ? "The live request timed out before a visible result was ready." : clean(error.message, 600);
      const failure = {
        schema: "nexus.content.result.v2", requestId: `production-failure-${Date.now()}`, status: "failed", capability: "workspace", operation: "open", workspace: "live-knowledge", acknowledgement: "",
        artifact: { kind: "status", title: cancelled ? "Request cancelled" : "Nexus could not complete that live request", description: message, fields: [], sections: [], items: [], links: [], media: { kind: "", title: "", provider: "", sourceUrl: "", embedUrl: "", state: "unavailable" } },
        recovery: { message, nextActions: cancelled ? ["Ask Nexus to try again when you are ready."] : ["Retry the request.", "Ask for a different live source.", "Use a broader request."] }
      };
      renderArtifact(failure);
      stage("renderer.failure-visible", { requestId, error: message, cancelled });
      return failure;
    } finally {
      clearTimer();
      if (state.controller === controller) state.controller = null;
    }
  }

  function requestRealtimeVisibleAcknowledgement(result) {
    const channel = state.realtimeChannel;
    if (!channel || channel.readyState !== "open") return false;
    try {
      channel.send(JSON.stringify({
        type: "response.create",
        response: {
          instructions: `The requested ${clean(result.capability, 80) || "result"} is now visibly populated and acknowledged in the Nexus workspace. Briefly confirm that visible completion without adding new claims.`
        }
      }));
      stage("voice.post-render-ack-requested", { resultId: result.requestId, capability: result.capability });
      return true;
    } catch { return false; }
  }

  function scheduleTranscriptFallback(transcript, options = {}) {
    const command = clean(transcript, 4000);
    if (!isVisualCapabilityRequest(command)) return;
    const observedAt = Date.now();
    if (observedAt - state.lastTranscriptAt < 5000 && commandOverlap(command, state.lastTranscriptCommand) >= 0.9) return;
    state.lastTranscriptCommand = command;
    state.lastTranscriptAt = observedAt;
    stage("conversation.transcript-observed", { command });
    setTimeout(() => {
      const alreadyRouted = state.stages.some(event => Date.parse(event.at) >= observedAt && event.type === "conversation.goal-requested" && commandOverlap(command, event.detail.command) >= 0.4);
      if (!alreadyRouted) executeCapability(command, { transcriptFallback: true, transcriptObservedAt: observedAt, postRenderVoiceAck: Boolean(options.postRenderVoiceAck) });
    }, 7000);
  }

  function installBrowserActionControllerBridge() {
    const controller = windowObject.NexusBrowserActionController;
    if (!controller || controller.__nexusCapabilityBridge || typeof controller.handleFinalUserTranscript !== "function") return false;
    const original = controller.handleFinalUserTranscript.bind(controller);
    windowObject.NexusBrowserActionController = Object.freeze({
      ...controller,
      __nexusCapabilityBridge: true,
      handleFinalUserTranscript(payload, ...rest) {
        const result = original(payload, ...rest);
        scheduleTranscriptFallback(payload && payload.transcript);
        return result;
      }
    });
    return true;
  }

  function installVisibleTranscriptObserver() {
    const targets = ["#voiceTranscript", "#globalVoiceOutputStatus", "#jarvisSummary"]
      .map(selector => document.querySelector(selector)).filter(Boolean);
    if (!targets.length) return false;
    let timer = null;
    let last = "";
    const inspect = () => {
      const visible = targets.map(target => clean(target.textContent, 4000)).find(text => /^(?:hearing|heard)\s*:/i.test(text)) || "";
      const transcript = clean(visible.replace(/^(?:hearing|heard)\s*:\s*/i, ""), 4000);
      if (!transcript || transcript === last) return;
      last = transcript;
      clearTimeout(timer);
      timer = setTimeout(() => scheduleTranscriptFallback(transcript), 1200);
    };
    const observer = new MutationObserver(inspect);
    targets.forEach(target => observer.observe(target, { childList: true, characterData: true, subtree: true }));
    inspect();
    return true;
  }

  function installAcceptanceSinkBridge() {
    const previous = windowObject.__NEXUS_VOICE_ACCEPTANCE_EVENT_SINK__;
    if (previous && previous.__nexusCapabilityBridge) return;
    const bridged = function nexusCapabilityAcceptanceEvent(event) {
      if (typeof previous === "function") previous(event);
      const text = clean(event && event.text, 4000);
      if (event && event.eventName === "agent_end") state.lastAgentEndAt = Date.now();
      if (event && event.type === "input_audio_buffer.speech_started") state.lastUserSpeechAt = Date.now();
      const editable = state.currentResult && Array.isArray(state.currentResult.artifact && state.currentResult.artifact.fields) && state.currentResult.artifact.fields.length > 0;
      const confirmedEdit = /\b(add|added|update|updated|change|changed|revise|revised|fill|filled|complete|completed)\b/i.test(text);
      const latestVisibleAck = [...state.stages].reverse().find(stageEvent => stageEvent.type === "renderer.acknowledged");
      const recentlyAcknowledged = latestVisibleAck && Date.now() - Date.parse(latestVisibleAck.at) < 15000;
      const newVoiceTurnAfterVisibleAck = !latestVisibleAck || state.lastUserSpeechAt > Date.parse(latestVisibleAck.at);
      if (editable && confirmedEdit && !recentlyAcknowledged && newVoiceTurnAfterVisibleAck && event && event.eventName === "agent_end") {
        scheduleTranscriptFallback(`Update the visible ${state.currentResult.capability || "document"} from the confirmed user revision: ${text}`, { postRenderVoiceAck: true });
        return;
      }
      if (event && event.eventName === "agent_end") {
        const claimedCapability = /\b(map|route|directions?)\b/i.test(text) ? "map"
          : /\b(images?|pictures?|photos?)\b/i.test(text) ? "images"
            : /\b(music|song|artist|playing|playlist)\b/i.test(text) ? "music"
              : /\b(resume|rÃ©sumÃ©|cv)\b/i.test(text) ? "resume"
                : /\b(question card|questions? for|pharmacist)\b/i.test(text) ? "question-card"
                  : /\b(document|form|report|listing|reminder)\b/i.test(text) ? "document" : "";
        const visibleCapability = state.currentResult && state.currentResult.status === "ready" ? state.currentResult.capability : "";
        const claimedVisibleOutcome = /\b(see|shown|opened|created|ready|playing|displayed|workspace|view)\b/i.test(text);
        if (claimedCapability && claimedVisibleOutcome && claimedCapability !== visibleCapability) {
          scheduleTranscriptFallback(`Show the user's requested ${claimedCapability} result reflected in this assistant response: ${text}`, { postRenderVoiceAck: true });
        }
      }
    };
    Object.defineProperty(bridged, "__nexusCapabilityBridge", { value: true });
    windowObject.__NEXUS_VOICE_ACCEPTANCE_EVENT_SINK__ = bridged;
  }

  function installRealtimeTranscriptSafetyNet() {
    const prototype = windowObject.RTCPeerConnection && windowObject.RTCPeerConnection.prototype;
    if (!prototype || prototype.__nexusCapabilityTranscriptSafetyNet) return;
    const nativeCreateDataChannel = prototype.createDataChannel;
    if (typeof nativeCreateDataChannel !== "function") return;
    Object.defineProperty(prototype, "__nexusCapabilityTranscriptSafetyNet", { value: true });
    prototype.createDataChannel = function nexusCapabilityDataChannel(...args) {
      const channel = nativeCreateDataChannel.apply(this, args);
      state.realtimeChannel = channel;
      channel.addEventListener("message", event => {
        let payload;
        try { payload = JSON.parse(String(event.data || "")); } catch { return; }
        if (payload.type !== "conversation.item.input_audio_transcription.completed") return;
        scheduleTranscriptFallback(payload.transcript || payload.item && payload.item.content && payload.item.content.map(part => part.transcript || part.text || "").join(" "));
      });
      return channel;
    };
  }

  function modifyLegacyResponse(originalResponse, request, result) {
    return originalResponse.clone().json().catch(() => null).then(payload => {
      if (!payload || typeof payload !== "object") return originalResponse;
      const success = result.status === "ready";
      const spoken = success ? clean(result.acknowledgement, 400) || "The requested result is visible." : clean(result.recovery && result.recovery.message, 400) || "I could not complete that live request.";
      if (request.realtime) {
        payload.response = spoken;
        payload.status = success ? "completed" : "failed-truthfully";
        payload.ok = success;
        payload.executionVerified = success;
        payload.providerSucceeded = success;
        payload.genesisAction = null;
        payload.genesisAcknowledgement = { verified: success, visible: true, populated: success, workspace: result.workspace, capabilityBridge: true };
      } else {
        payload.commandResult = { ...(payload.commandResult || {}), response: spoken, status: success ? "completed" : "failed", metadata: { ...(payload.commandResult && payload.commandResult.metadata || {}), genesisAction: null, redirectSection: null, capabilityBridge: true } };
        if (payload.nexusResponse) payload.nexusResponse = { ...payload.nexusResponse, response: spoken };
        if (payload.genesisResponse) payload.genesisResponse = { ...payload.genesisResponse, response: spoken };
      }
      const headers = new Headers(originalResponse.headers);
      headers.set("content-type", "application/json; charset=utf-8");
      headers.set("cache-control", "no-store");
      headers.delete("content-length");
      return new Response(JSON.stringify(payload), { status: originalResponse.status, statusText: originalResponse.statusText, headers });
    });
  }

  windowObject.fetch = async function nexusCapabilityAwareFetch(input, options = {}) {
    const rawUrl = String(input && input.url || input || "");
    if (/\/api\/login(?:\?|$)/.test(rawUrl)) {
      const loginResponse = await nativeFetch(input, options);
      const token = loginResponse.headers.get("x-nexus-capability-session") || "";
      if (loginResponse.ok && token) state.sessionToken = token;
      return loginResponse;
    }
    if (/\/api\/logout(?:\?|$)/.test(rawUrl)) {
      state.sessionToken = "";
      return nativeFetch(input, options);
    }
    const request = commandFromRequest(input, options);
    if (!request || !isVisualCapabilityRequest(request.command)) return nativeFetch(input, options);
    const legacyPromise = nativeFetch(input, options);
    if (activeCertifiedGuidedEntry(request.command)) {
      stage("guided-entry.owner-preserved", { command: request.command });
      return legacyPromise;
    }
    const latestVisibleAck = [...state.stages].reverse().find(event => event.type === "renderer.acknowledged");
    const recentMatchingResult = state.currentResult && state.currentResult.status === "ready" && latestVisibleAck
      && Date.now() - Date.parse(latestVisibleAck.at) < 15000 && commandOverlap(request.command, state.currentCommand) >= 0.4;
    const contentPromise = recentMatchingResult ? Promise.resolve(state.currentResult) : executeCapability(request.command);
    const [legacyResult, contentResult] = await Promise.allSettled([legacyPromise, contentPromise]);
    if (legacyResult.status === "rejected") throw legacyResult.reason;
    if (contentResult.status === "rejected") return legacyResult.value;
    return modifyLegacyResponse(legacyResult.value, request, contentResult.value);
  };

  installRealtimeTranscriptSafetyNet();
  if (!installBrowserActionControllerBridge()) {
    windowObject.addEventListener("DOMContentLoaded", installBrowserActionControllerBridge, { once: true });
  }
  if (!installVisibleTranscriptObserver()) {
    windowObject.addEventListener("DOMContentLoaded", installVisibleTranscriptObserver, { once: true });
  }
  installAcceptanceSinkBridge();

  windowObject.NexusProductionCapabilityBridge = Object.freeze({
    execute: command => executeCapability(clean(command, 4000)),
    snapshot: () => ({
      currentCommand: state.currentCommand,
      currentResult: state.currentResult,
      pending: Boolean(state.controller),
      stages: state.stages.slice(),
      history: state.history.slice()
    })
  });
  stage("bridge.installed", { version: "production-experience-1" });
})(typeof window !== "undefined" ? window : null);
