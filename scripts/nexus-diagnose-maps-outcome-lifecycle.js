#!/usr/bin/env node
"use strict";

const fs = require("node:fs");
const path = require("node:path");
const {
  installLoginLifecycleDiagnostics,
  captureLoginLifecycleDiagnostics,
  waitForCurrentLoginSubmitListener,
  waitForAuthenticatedStandardUserShell,
  requireVisibleAuthoritativeTypedIngress
} = require("./nexus-run-browser-capability-probes.js");

const MAP_COMMAND = "Show a route from Nairobi to Nakuru with route geometry.";
const LIVE_KNOWLEDGE_COMMAND = "Why do maize leaves turn yellow? Answer with current sources.";

function required(value, label) {
  if (!value) throw new Error(`${label} is required.`);
  return value;
}

function clean(value, limit = 500) {
  return String(value || "").replace(/[\r\n\t]+/g, " ").trim().slice(0, limit);
}

function sameOriginPath(value, base) {
  try {
    const url = new URL(value);
    return url.origin === base ? `${url.pathname}${url.search}`.slice(0, 500) : "cross-origin";
  } catch {
    return "invalid-url";
  }
}

function sanitizeTurnPayload(value = {}) {
  const result = value?.result || value;
  const render = result?.render || result?.outcome?.render || null;
  return Object.freeze({
    code: clean(value?.code || result?.code || "", 100),
    application: clean(result?.application || value?.application || "", 100),
    state: clean(result?.state || value?.state || "", 100),
    renderPresent: Boolean(render),
    renderWorkspace: clean(render?.workspace || "", 100),
    renderType: clean(render?.type || render?.kind || "", 100),
    commandIdPresent: Boolean(result?.commandId || render?.commandId),
    correlationIdPresent: Boolean(result?.correlationId || render?.correlationId),
    taskIdPresent: Boolean(result?.taskId || render?.taskId),
    error: clean(value?.error || result?.error || "", 500)
  });
}

async function installBootLoginBoundaryDiagnostics(page) {
  await page.addInitScript(() => {
    const text = (value, limit = 500) => String(value ?? "").replace(/[\r\n\t]+/g, " ").trim().slice(0, limit);
    const state = window.__NEXUS_BOOT_LOGIN_BOUNDARY__ = {
      startedAt: Date.now(), events: [], listenerRegistrations: [], scriptEvents: [], loginHandler: []
    };
    const push = (key, value, limit = 200) => {
      if (state[key].length < limit) state[key].push({ at: Date.now(), ...value });
    };
    const targetName = target => target === window ? "window" : target === document ? "document"
      : target instanceof Element ? `${target.tagName.toLowerCase()}#${text(target.id, 100)}` : text(target?.constructor?.name, 100);
    const nativeAddEventListener = EventTarget.prototype.addEventListener;
    EventTarget.prototype.addEventListener = function nexusBootBoundaryAddEventListener(type, listener, options) {
      if (["focusin", "input", "keydown", "click", "submit", "change", "hashchange"].includes(type)) {
        push("listenerRegistrations", { type, target: targetName(this),
          capture: typeof options === "boolean" ? options : options?.capture === true });
      }
      if (type === "submit" && this instanceof Element && this.id === "loginForm" && typeof listener === "function") {
        const registeredForm = this;
        const wrapped = function nexusObservedLoginSubmitHandler(event) {
          const email = document.querySelector("#email");
          const password = document.querySelector("#password");
          push("loginHandler", { phase: "entry", currentForm: event?.currentTarget === registeredForm,
            eventTargetIsForm: event?.target === registeredForm, defaultPrevented: Boolean(event?.defaultPrevented),
            emailLength: String(email?.value || "").trim().length,
            passwordLength: String(password?.value || "").length,
            submitDisabled: Boolean(registeredForm.querySelector('button[type="submit"], button')?.disabled),
            credentialGuardDecision: String(email?.value || "").trim() && String(password?.value || "").trim()
              ? "continue" : "early-return-missing-credential" }, 40);
          let result;
          try {
            result = listener.apply(this, arguments);
          } catch (error) {
            push("loginHandler", { phase: "throw", name: text(error?.name, 100), message: text(error?.message || error) }, 40);
            throw error;
          }
          push("loginHandler", { phase: "sync-return", defaultPrevented: Boolean(event?.defaultPrevented),
            promiseReturned: Boolean(result && typeof result.then === "function") }, 40);
          if (result && typeof result.then === "function") result.then(
            () => push("loginHandler", { phase: "fulfilled", defaultPrevented: Boolean(event?.defaultPrevented) }, 40),
            error => push("loginHandler", { phase: "rejected", name: text(error?.name, 100), message: text(error?.message || error) }, 40)
          );
          return result;
        };
        return nativeAddEventListener.call(this, type, wrapped, options);
      }
      return nativeAddEventListener.apply(this, arguments);
    };
    const nativeFetch = window.fetch;
    window.fetch = function nexusObservedBootLoginFetch(input, init) {
      let path = "";
      try { path = new URL(typeof input === "string" ? input : input?.url, location.href).pathname; } catch {}
      if (path === "/api/login") push("loginHandler", { phase: "gateway-invocation", method: String(init?.method || "GET").toUpperCase() }, 40);
      return nativeFetch.apply(this, arguments);
    };
    nativeAddEventListener.call(document, "DOMContentLoaded", () => push("events", { phase: "dom-content-loaded" }), true);
    nativeAddEventListener.call(window, "load", () => push("events", { phase: "window-load" }), true);
    nativeAddEventListener.call(document, "readystatechange", () => push("events", {
      phase: "ready-state", readyState: document.readyState
    }), true);
    nativeAddEventListener.call(document, "load", event => {
      if (event.target instanceof HTMLScriptElement) push("scriptEvents", {
        phase: "script-load", path: (() => { try { return new URL(event.target.src, location.href).pathname; } catch { return ""; } })()
      });
    }, true);
    nativeAddEventListener.call(document, "error", event => {
      if (event.target instanceof HTMLScriptElement) push("scriptEvents", {
        phase: "script-error", path: (() => { try { return new URL(event.target.src, location.href).pathname; } catch { return ""; } })()
      });
    }, true);
    const observe = () => {
      const body = document.body;
      if (!body || state.events.length >= 200) return;
      push("events", {
        phase: "dom-mutation", loginFormPresent: Boolean(document.querySelector("#loginForm")),
        authorityFirewall: text(body.dataset.nexusStandardUserAuthority, 100),
        brainBridgeBound: body.dataset.nexusBrainIntelligenceBound === "true",
        functionWindowDelegateBound: body.dataset.nexusFunctionWindowDelegateBound === "true"
      });
    };
    new MutationObserver(observe).observe(document, { childList: true, subtree: true, attributes: true });
  });
}

async function installBootFunctionDebugger(page, appSource) {
  const session = await page.context().newCDPSession(page);
  const events = [];
  const lines = String(appSource || "").split("\n");
  const markers = [
    ["bindStatic-entry", "function bindStatic() {"],
    ["boot-entry", "async function boot() {"],
    ["bindStatic-completed", "  const publicMapConfigPromise = loadPublicMapConfig().catch(() => DEFAULT_MAP_TILE_CONFIG);"],
    ["boot-success-final-statement", "    startAskNexusAfterLogin();"],
    ["boot-catch-final-statement", "    $(\"#password\")?.focus();"]
  ];
  await session.send("Debugger.enable");
  await session.send("Runtime.enable");
  session.on("Runtime.exceptionThrown", event => {
    const details = event.exceptionDetails || {};
    events.push({ at: Date.now(), phase: "runtime-exception", name: String(details.exception?.className || "Error").slice(0, 100),
      message: String(details.text || details.exception?.description || "Unknown runtime exception").replace(/[\r\n\t]+/g, " ").slice(0, 500),
      lineNumber: Number(details.lineNumber || 0) + 1 });
  });
  for (const [phase, marker] of markers) {
    const lineNumber = lines.findIndex(line => line === marker);
    if (lineNumber < 0) {
      events.push({ at: Date.now(), phase: "probe-marker-missing", marker: phase });
      continue;
    }
    await session.send("Debugger.setBreakpointByUrl", { lineNumber, urlRegex: "/app\\.js(?:\\?.*)?$" });
  }
  session.on("Debugger.paused", async event => {
    const frame = event.callFrames?.[0];
    const lineNumber = Number(frame?.location?.lineNumber ?? -1);
    const marker = markers.find(([, text]) => lines.findIndex(line => line === text) === lineNumber);
    events.push({ at: Date.now(), phase: marker?.[0] || "unmapped-breakpoint",
      functionName: String(frame?.functionName || "").slice(0, 100), lineNumber: lineNumber + 1 });
    await session.send("Debugger.resume").catch(() => {});
  });
  return { session, events };
}

async function captureImmutablePreClickSnapshot(page, debuggerEvents) {
  const browser = await page.evaluate(() => {
    const form = document.querySelector("#loginForm");
    const button = form?.querySelector('button[type="submit"], button');
    return {
      capturedAt: Date.now(), url: location.href, readyState: document.readyState,
      formPresent: Boolean(form), formConnected: Boolean(form?.isConnected),
      currentFormWasRegisteredTarget: form === window.__NEXUS_LOGIN_LIFECYCLE_CONTEXT__?.registeredLoginForm,
      loginSubmitListenerRegistrations: window.__NEXUS_LOGIN_LIFECYCLE_CONTEXT__?.loginSubmitListenerRegistrations || 0,
      emailLength: String(document.querySelector("#email")?.value || "").trim().length,
      passwordLength: String(document.querySelector("#password")?.value || "").length,
      buttonPresent: Boolean(button), buttonDisabled: Boolean(button?.disabled),
      authorityFirewall: String(document.body?.dataset?.nexusStandardUserAuthority || "").slice(0, 100),
      brainBridgeBound: document.body?.dataset?.nexusBrainIntelligenceBound === "true",
      functionWindowDelegateBound: document.body?.dataset?.nexusFunctionWindowDelegateBound === "true"
    };
  });
  return Object.freeze({ ...browser, debuggerEvents: debuggerEvents.map(event => Object.freeze({ ...event })) });
}
async function captureBootLoginBoundary(page) {
  return page.evaluate(async () => {
    const visible = node => Boolean(node && node.getClientRects().length && getComputedStyle(node).display !== "none" && getComputedStyle(node).visibility !== "hidden");
    const form = document.querySelector("#loginForm");
    const button = form?.querySelector('button[type="submit"], button');
    const appScripts = [...document.scripts].filter(script => /\/app\.js(?:\?|$)/.test(script.src));
    const appResources = performance.getEntriesByType("resource").filter(entry => /\/app\.js(?:\?|$)/.test(entry.name));
    const appScriptEvidence = [];
    for (const script of appScripts.slice(0, 3)) {
      try {
        const response = await fetch(script.src, { cache: "no-store", credentials: "same-origin" });
        const bytes = await response.arrayBuffer();
        const digest = [...new Uint8Array(await crypto.subtle.digest("SHA-256", bytes))]
          .map(byte => byte.toString(16).padStart(2, "0")).join("");
        appScriptEvidence.push({ path: new URL(script.src, location.href).pathname, status: response.status,
          bytes: bytes.byteLength, sha256: digest });
      } catch (error) {
        appScriptEvidence.push({ path: new URL(script.src, location.href).pathname,
          error: String(error?.message || error).slice(0, 500) });
      }
    }
    return {
      readyState: document.readyState,
      appScriptEvidence,
      appResources: appResources.slice(-5).map(entry => ({ path: new URL(entry.name, location.href).pathname,
        transferSize: Number(entry.transferSize || 0), encodedBodySize: Number(entry.encodedBodySize || 0),
        decodedBodySize: Number(entry.decodedBodySize || 0), duration: Number(entry.duration || 0) })),
      globalFunctions: { boot: typeof window.boot, bindStatic: typeof window.bindStatic },
      milestones: {
        authorityFirewall: String(document.body?.dataset?.nexusStandardUserAuthority || "").slice(0, 100),
        brainBridgeBound: document.body?.dataset?.nexusBrainIntelligenceBound === "true",
        functionWindowDelegateBound: document.body?.dataset?.nexusFunctionWindowDelegateBound === "true"
      },
      loginForm: {
        present: Boolean(form), connected: Boolean(form?.isConnected), visible: visible(form),
        action: String(form?.getAttribute("action") || "").slice(0, 200),
        method: String(form?.getAttribute("method") || "").slice(0, 30),
        buttonPresent: Boolean(button), buttonVisible: visible(button), buttonDisabled: Boolean(button?.disabled),
        currentFormWasRegisteredTarget: form === window.__NEXUS_LOGIN_LIFECYCLE_CONTEXT__?.registeredLoginForm
      },
      serviceWorker: {
        controllerPresent: Boolean(navigator.serviceWorker?.controller),
        controllerPath: navigator.serviceWorker?.controller
          ? new URL(navigator.serviceWorker.controller.scriptURL, location.href).pathname : ""
      },
      trace: window.__NEXUS_BOOT_LOGIN_BOUNDARY__ || null
    };
  });
}

async function installMapLifecycleDiagnostics(page, base) {
  const lifecycle = {
    schema: "nexus.maps-outcome-lifecycle-diagnostic.v3",
    requests: [],
    responses: [],
    pageErrors: [],
    consoleErrors: []
  };
  const relevant = value => {
    const requestPath = sameOriginPath(value, base);
    return requestPath.startsWith("/api/nexus/runtime/behavior/turn") ||
      requestPath.startsWith("/api/nexus/runtime/behavior/acknowledgements");
  };
  page.on("request", request => {
    if (!relevant(request.url()) || lifecycle.requests.length >= 20) return;
    lifecycle.requests.push({ method: request.method(), path: sameOriginPath(request.url(), base) });
  });
  page.on("response", async response => {
    if (!relevant(response.url()) || lifecycle.responses.length >= 20) return;
    let payload = {};
    try { payload = sanitizeTurnPayload(await response.json()); } catch {}
    lifecycle.responses.push({
      status: response.status(),
      path: sameOriginPath(response.url(), base),
      payload
    });
  });
  page.on("pageerror", error => {
    if (lifecycle.pageErrors.length < 20) lifecycle.pageErrors.push({
      name: clean(error?.name, 100),
      message: clean(error?.message, 1000),
      stack: clean(error?.stack, 2000)
    });
  });
  page.on("console", message => {
    if (message.type() === "error" && lifecycle.consoleErrors.length < 20) lifecycle.consoleErrors.push(clean(message.text(), 1000));
  });
  await page.addInitScript(() => {
    const boundedText = (value, limit = 500) => String(value ?? "").replace(/[\r\n\t]+/g, " ").trim().slice(0, limit);
    const selectorIdentity = node => {
      if (!(node instanceof Element)) return { present: false };
      return {
        present: true,
        tag: boundedText(node.tagName, 30).toLowerCase(),
        id: boundedText(node.id, 100),
        type: boundedText(node.getAttribute("type"), 30),
        name: boundedText(node.getAttribute("name"), 100),
        ariaLabel: boundedText(node.getAttribute("aria-label"), 200),
        commandCenterSubmit: node.hasAttribute("data-nexus-command-center-submit"),
        primaryTypedSubmit: node.getAttribute("data-nexus-primary-typed-submit") === "true",
        primaryTypedEntry: node.getAttribute("data-nexus-primary-typed-entry") === "true"
      };
    };
    const controlState = node => ({
      ...selectorIdentity(node),
      value: boundedText(node?.value, 500),
      disabled: Boolean(node?.disabled),
      ariaDisabled: boundedText(node?.getAttribute?.("aria-disabled"), 20),
      pending: Boolean(node?.hasAttribute?.("data-pending") || node?.getAttribute?.("aria-busy") === "true"),
      visible: Boolean(node instanceof Element && node.getClientRects().length && getComputedStyle(node).display !== "none")
    });
    const state = window.__NEXUS_MAPS_LIFECYCLE__ = {
      mutations: [], voiceEvents: [], submitEvents: [], handlerRouting: [], gatewayInvocations: [],
      commandBinding: { turn: null, acknowledgement: null }, sequentialPrelude: null, listenerSequence: 0
    };
    const push = (key, value, limit = 100) => {
      const trace = state[key];
      if (Array.isArray(trace) && trace.length < limit) trace.push({ at: Date.now(), ...value });
    };
    const commandControlFor = target => target?.closest?.('[data-nexus-primary-typed-submit="true"], [data-nexus-command-center-submit]') || null;
    const commandInputFor = target => target?.matches?.('[data-nexus-primary-typed-entry="true"]')
      ? target
      : target?.closest?.("form")?.querySelector?.('[data-nexus-primary-typed-entry="true"], #nexusCommandCenterInput')
        || document.querySelector('[data-nexus-primary-typed-entry="true"]:not([hidden]), #nexusCommandCenterInput');
    const relevantEvent = event => {
      if (!event || !["click", "submit", "keydown"].includes(event.type)) return false;
      if (event.type === "keydown" && (event.key !== "Enter" || event.shiftKey)) return false;
      const input = commandInputFor(event.target);
      const control = commandControlFor(event.target);
      return Boolean(control?.getAttribute?.("data-nexus-primary-typed-submit") === "true" || input?.getAttribute?.("data-nexus-primary-typed-entry") === "true");
    };
    const eventSnapshot = (event, phase) => {
      const input = commandInputFor(event.target);
      const control = commandControlFor(event.target) || event.submitter || null;
      return {
        phase,
        eventType: event.type,
        key: boundedText(event.key, 30),
        target: selectorIdentity(event.target),
        input: controlState(input),
        control: controlState(control),
        form: selectorIdentity(control?.form || event.target?.closest?.("form") || (event.target instanceof HTMLFormElement ? event.target : null)),
        defaultPrevented: event.defaultPrevented,
        cancelBubble: event.cancelBubble,
        bodyAuthoritative: boundedText(document.body?.dataset?.nexusStandardUserAuthority, 100),
        bodyMode: boundedText(document.body?.className, 300)
      };
    };
    for (const target of [window, document]) {
      for (const eventName of ["click", "submit", "keydown"]) {
        target.addEventListener(eventName, event => {
          if (!relevantEvent(event)) return;
          push("submitEvents", eventSnapshot(event, `${target === window ? "window" : "document"}-capture`));
          queueMicrotask(() => push("submitEvents", eventSnapshot(event, `${target === window ? "window" : "document"}-microtask`)));
        }, true);
        target.addEventListener(eventName, event => {
          if (relevantEvent(event)) push("submitEvents", eventSnapshot(event, `${target === window ? "window" : "document"}-bubble`));
        });
      }
    }
    const nativeAddEventListener = EventTarget.prototype.addEventListener;
    EventTarget.prototype.addEventListener = function nexusDiagnosticAddEventListener(type, listener, options) {
      if (!["click", "submit", "keydown"].includes(type) || !listener) {
        return nativeAddEventListener.apply(this, arguments);
      }
      const sequence = ++state.listenerSequence;
      const targetIdentity = this === window ? "window" : this === document ? "document" : boundedText(this?.tagName || this?.constructor?.name, 50);
      const capture = typeof options === "boolean" ? options : options?.capture === true;
      const invoke = typeof listener === "function" ? listener : listener.handleEvent?.bind(listener);
      if (typeof invoke !== "function") return nativeAddEventListener.apply(this, arguments);
      const wrapped = function nexusDiagnosticEventListener(event) {
        if (!relevantEvent(event)) return invoke.apply(this, arguments);
        const before = eventSnapshot(event, "handler-before");
        let result;
        try {
          result = invoke.apply(this, arguments);
        } catch (error) {
          push("handlerRouting", { sequence, target: targetIdentity, capture, type, before,
            after: eventSnapshot(event, "handler-threw"), error: boundedText(error?.message || error, 500) });
          throw error;
        }
        push("handlerRouting", { sequence, target: targetIdentity, capture, type, before,
          after: eventSnapshot(event, "handler-after"), returnedPromise: Boolean(result && typeof result.then === "function") });
        if (result && typeof result.then === "function") result.then(
          value => push("handlerRouting", { sequence, target: targetIdentity, capture, type, settled: "fulfilled", returned: boundedText(value, 100) }),
          error => push("handlerRouting", { sequence, target: targetIdentity, capture, type, settled: "rejected", error: boundedText(error?.message || error, 500) })
        );
        return result;
      };
      return nativeAddEventListener.call(this, type, wrapped, options);
    };
    const nativeFetch = window.fetch;
    window.fetch = function nexusDiagnosticFetch(input, init = {}) {
      const url = typeof input === "string" ? input : input?.url || "";
      let pathname = "";
      try { pathname = new URL(url, location.href).pathname; } catch {}
      if (pathname === "/api/nexus/runtime/behavior/turn") {
        let body = {};
        try { body = typeof init.body === "string" ? JSON.parse(init.body) : {}; } catch {}
        push("gatewayInvocations", {
          phase: "fetch-before", path: pathname, method: boundedText(init.method || "GET", 20),
          text: boundedText(body.text, 500), channel: boundedText(body.channel, 30),
          conversationIdPresent: Boolean(body.conversationId), taskIdPresent: Boolean(body.taskId)
        }, 20);
      }
      let result;
      try { result = nativeFetch.apply(this, arguments); }
      catch (error) {
        if (pathname === "/api/nexus/runtime/behavior/turn") push("gatewayInvocations", {
          phase: "fetch-threw", path: pathname, error: boundedText(error?.message || error, 500)
        }, 20);
        throw error;
      }
      if (pathname === "/api/nexus/runtime/behavior/acknowledgements") {
        let body = {};
        try { body = typeof init.body === "string" ? JSON.parse(init.body) : {}; } catch {}
        const turn = state.commandBinding.turn;
        state.commandBinding.acknowledgement = {
          phase: "request", commandIdPresent: Boolean(body.commandId), correlationIdPresent: Boolean(body.correlationId),
          taskIdPresent: Boolean(body.taskId), commandIdMatchesTurn: Boolean(turn?.commandId && body.commandId === turn.commandId),
          correlationIdMatchesTurn: Boolean(turn?.correlationId && body.correlationId === turn.correlationId),
          taskIdMatchesTurn: Boolean(turn?.taskId && body.taskId === turn.taskId), workspace: boundedText(body.workspace, 100),
          rendered: body.rendered === true, visible: body.visible === true, audible: body.audible === true,
          evidence: {
            workspace: boundedText(body.evidence?.workspace, 100), operation: boundedText(body.evidence?.operation, 100),
            commandIdMatchesTurn: Boolean(turn?.commandId && body.evidence?.commandId === turn.commandId),
            routeEndpoints: Array.isArray(body.evidence?.routeEndpoints)
              ? body.evidence.routeEndpoints.map(value => boundedText(value, 300)).slice(0, 2) : [],
            routeGeometryObserved: body.evidence?.routeGeometryObserved === true,
            renderedFields: Array.isArray(body.evidence?.renderedFields)
              ? body.evidence.renderedFields.map(value => boundedText(value, 100)).slice(0, 30) : []
          }
        };
        push("gatewayInvocations", { phase: "acknowledgement-before", path: pathname,
          commandIdMatchesTurn: state.commandBinding.acknowledgement.commandIdMatchesTurn,
          correlationIdMatchesTurn: state.commandBinding.acknowledgement.correlationIdMatchesTurn,
          taskIdMatchesTurn: state.commandBinding.acknowledgement.taskIdMatchesTurn }, 20);
      }
      if (pathname === "/api/nexus/runtime/behavior/turn") result.then(
        response => {
          push("gatewayInvocations", { phase: "fetch-response", path: pathname, status: response.status }, 20);
          response.clone().json().then(value => {
            const resultValue = value?.result || value || {};
            const render = resultValue.render || resultValue.outcome?.render || {};
            state.commandBinding.turn = {
              status: response.status, commandId: boundedText(resultValue.commandId || render.commandId, 500),
              correlationId: boundedText(resultValue.correlationId || render.correlationId, 500),
              taskId: boundedText(resultValue.taskId || render.taskId, 500), application: boundedText(resultValue.application, 100),
              workspace: boundedText(render.workspace, 100), operation: boundedText(render.operation, 100),
              origin: boundedText(render.data?.origin, 300), destination: boundedText(render.data?.destination, 300)
            };
          }).catch(() => {});
        },
        error => push("gatewayInvocations", { phase: "fetch-rejected", path: pathname, error: boundedText(error?.message || error, 500) }, 20)
      );
      if (pathname === "/api/nexus/runtime/behavior/acknowledgements") result.then(
        response => {
          push("gatewayInvocations", { phase: "acknowledgement-response", path: pathname, status: response.status }, 20);
          response.clone().json().then(value => {
            const request = state.commandBinding.acknowledgement || {};
            state.commandBinding.acknowledgement = { ...request, response: {
              status: response.status, schema: boundedText(value?.schema, 100), completed: value?.completed === true,
              commandIdMatchesTurn: Boolean(state.commandBinding.turn?.commandId && value?.commandId === state.commandBinding.turn.commandId),
              outcomeCommandIdMatchesTurn: Boolean(state.commandBinding.turn?.commandId && value?.outcome?.commandId === state.commandBinding.turn.commandId),
              outcomeWorkspace: boundedText(value?.outcome?.workspace, 100), outcomeVisible: value?.outcome?.visible === true,
              outcomeRendered: value?.outcome?.rendered === true,
              routeGeometryObserved: value?.outcome?.evidence?.routeGeometryObserved === true,
              routeEndpoints: Array.isArray(value?.outcome?.evidence?.routeEndpoints)
                ? value.outcome.evidence.routeEndpoints.map(item => boundedText(item, 300)).slice(0, 2) : []
            } };
          }).catch(() => {});
        },
        error => push("gatewayInvocations", { phase: "acknowledgement-rejected", path: pathname,
          error: boundedText(error?.message || error, 500) }, 20)
      );
      return result;
    };
    const record = () => {
      const state = window.__NEXUS_MAPS_LIFECYCLE__;
      if (!state || state.mutations.length >= 50) return;
      const surface = document.querySelector('[data-nexus-authoritative-outcome="true"]');
      const maps = [...document.querySelectorAll('[data-nexus-map], [data-nexus-authoritative-map], .leaflet-container')];
      state.mutations.push({
        at: Date.now(),
        authoritativeOutcomePresent: Boolean(surface),
        commandIdPresent: Boolean(surface?.getAttribute("data-command-id")),
        workspace: String(surface?.getAttribute("data-workspace") || "").slice(0, 100),
        mapNodeCount: maps.length,
        visibleMapNodeCount: maps.filter(node => Boolean(node.getClientRects().length && getComputedStyle(node).display !== "none")).length
      });
    };
    new MutationObserver(record).observe(document, { childList: true, subtree: true, attributes: true });
    for (const eventName of ["nexus:voice-state", "nexus:voice-runtime", "nexus:authoritative-outcome-rendered", "nexus:authoritative-outcome-acknowledged"]) {
      window.addEventListener(eventName, event => {
        const state = window.__NEXUS_MAPS_LIFECYCLE__;
        if (state && state.voiceEvents.length < 30) state.voiceEvents.push({ name: eventName, at: Date.now(), detailPresent: Boolean(event?.detail) });
      });
    }
  });
  return lifecycle;
}

async function captureDomState(page) {
  return page.evaluate(() => {
    const visible = node => Boolean(node && node.getClientRects().length && getComputedStyle(node).display !== "none" && getComputedStyle(node).visibility !== "hidden");
    const describe = node => ({
      present: Boolean(node),
      visible: visible(node),
      workspace: String(node?.getAttribute("data-workspace") || "").slice(0, 100),
      commandIdPresent: Boolean(node?.getAttribute("data-command-id")),
      text: String(node?.textContent || "").replace(/[\r\n\t]+/g, " ").trim().slice(0, 1000)
    });
    const mapNodes = [...document.querySelectorAll('[data-nexus-map], [data-nexus-authoritative-map], .leaflet-container')];
    const canvas = document.querySelector("#userMapCanvas.leaflet-container");
    const markerNodes = [...(canvas?.querySelectorAll(".leaflet-marker-pane .leaflet-marker-icon") || [])];
    const routePaths = [...(canvas?.querySelectorAll('.leaflet-overlay-pane path[stroke="#14b8a6"], .leaflet-overlay-pane path[stroke="rgb(20, 184, 166)"]') || [])];
    const turn = window.__NEXUS_MAPS_LIFECYCLE__?.commandBinding?.turn || null;
    return {
      authoritativeOutcome: describe(document.querySelector('[data-nexus-authoritative-outcome="true"]')),
      commandBoundMap: {
        canvas: describe(canvas), bodyWorkspace: String(document.body.dataset.genesisWorkspace || "").slice(0, 100),
        bodyLocation: String(document.body.dataset.genesisMapLocation || "").slice(0, 300),
        requestIdPresent: Boolean(document.body.dataset.genesisWorkspaceRequestId),
        requestIdMatchesTurn: Boolean(turn?.commandId && document.body.dataset.genesisWorkspaceRequestId === turn.commandId),
        markerCount: markerNodes.length, visibleMarkerCount: markerNodes.filter(visible).length,
        routePathCount: routePaths.length, visibleRoutePathCount: routePaths.filter(visible).length,
        origin: String(turn?.origin || "").slice(0, 300), destination: String(turn?.destination || "").slice(0, 300)
      },
      mapNodes: mapNodes.slice(0, 20).map(describe),
      relevantStatuses: [...document.querySelectorAll('[role="status"]')].filter(visible)
        .map(node => String(node.textContent || "").replace(/[\r\n\t]+/g, " ").trim().slice(0, 500))
        .filter(text => /map|route|Nairobi|Nakuru|voice|microphone|outcome/i.test(text)).slice(-30),
      mutations: (window.__NEXUS_MAPS_LIFECYCLE__?.mutations || []).slice(-50),
      voiceEvents: (window.__NEXUS_MAPS_LIFECYCLE__?.voiceEvents || []).slice(-30),
      submitEvents: (window.__NEXUS_MAPS_LIFECYCLE__?.submitEvents || []).slice(-100),
      handlerRouting: (window.__NEXUS_MAPS_LIFECYCLE__?.handlerRouting || []).slice(-100),
      gatewayInvocations: (window.__NEXUS_MAPS_LIFECYCLE__?.gatewayInvocations || []).slice(-20),
      commandBinding: window.__NEXUS_MAPS_LIFECYCLE__?.commandBinding || null
      ,sequentialPrelude: window.__NEXUS_MAPS_LIFECYCLE__?.sequentialPrelude || null
    };
  });
}

async function run(env = process.env) {
  const { chromium } = require("playwright");
  const base = required(env.NEXUS_BASE_URL, "NEXUS_BASE_URL").replace(/\/$/, "");
  const releaseSha = required(env.EXPECTED_RELEASE_SHA, "EXPECTED_RELEASE_SHA");
  const outputFile = env.NEXUS_MAPS_LIFECYCLE_FILE || "output/nexus-maps-outcome-lifecycle.json";
  const browser = await chromium.launch({ channel: "chrome", headless: true,
    ignoreDefaultArgs: ["--enable-automation"], args: ["--disable-blink-features=AutomationControlled"] });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const loginLifecycle = await installLoginLifecycleDiagnostics(page, base);
  const lifecycle = await installMapLifecycleDiagnostics(page, base);
  await installBootLoginBoundaryDiagnostics(page);
  const appResponse = await fetch(`${base}/app.js`, { cache: "no-store" });
  const bootDebugger = await installBootFunctionDebugger(page, await appResponse.text());
  let failure = "";
  let loginEvidence = { listenerRegistrations: 0, currentFormWasRegisteredTarget: false, status: 0 };
  try {
    const permissionSession = await page.context().newCDPSession(page);
    try {
      await permissionSession.send("Browser.setPermission", {
        permission: { name: "microphone" }, setting: "denied", origin: base
      });
    } finally {
      await permissionSession.detach();
    }
    await page.goto(`${base}/?nexusMapsLifecycleDiagnostic=${encodeURIComponent(releaseSha)}`, { waitUntil: "networkidle", timeout: 90000 });
    const loginListener = await waitForCurrentLoginSubmitListener(page);
    await page.getByLabel("Email", { exact: true }).fill(env.NEXUS_STANDARD_USER_EMAIL || "user@agrinexus.org");
    await page.getByLabel("Password", { exact: true }).fill(env.NEXUS_STANDARD_USER_PASSWORD || "User2026!");
    loginLifecycle.beforeClick = await captureImmutablePreClickSnapshot(page, bootDebugger.events);
    const loginResponse = page.waitForResponse(response => sameOriginPath(response.url(), base) === "/api/login" && response.request().method() === "POST", { timeout: 30000 });
    await page.getByRole("button", { name: "Enter platform", exact: true }).click();
    const login = await loginResponse;
    if (!login.ok()) throw new Error(`Standard User login returned HTTP ${login.status()}.`);
    loginEvidence = {
      listenerRegistrations: loginListener.loginSubmitListenerRegistrations,
      currentFormWasRegisteredTarget: loginListener.currentFormWasRegisteredTarget,
      status: login.status()
    };
    await waitForAuthenticatedStandardUserShell(page, base);
    const input = await requireVisibleAuthoritativeTypedIngress(page);
    const send = page.locator('[data-nexus-primary-typed-submit="true"]:visible').first();
    await input.fill(LIVE_KNOWLEDGE_COMMAND);
    await send.click();
    await page.waitForFunction(() => {
      const state = window.__NEXUS_MAPS_LIFECYCLE__;
      return Boolean(state?.commandBinding?.turn?.application === "live-knowledge" &&
        state?.commandBinding?.acknowledgement?.response?.completed === true);
    }, null, { timeout: 120000 });
    await page.evaluate(() => {
      const state = window.__NEXUS_MAPS_LIFECYCLE__;
      state.sequentialPrelude = JSON.parse(JSON.stringify(state.commandBinding));
      state.commandBinding = { turn: null, acknowledgement: null };
    });
    await input.fill(MAP_COMMAND);
    await send.click();
    try {
      await page.waitForFunction(() => {
        const state = window.__NEXUS_MAPS_LIFECYCLE__;
        return Boolean(state?.commandBinding?.acknowledgement?.response?.completed === true);
      }, null, { timeout: 120000 });
    } catch (error) {
      failure = clean(error?.message || error, 1000);
    }
    await page.waitForTimeout(1000);
  } catch (error) {
    failure = clean(error?.message || error, 1000);
  } finally {
    const diagnostic = {
      ...lifecycle,
      releaseSha,
      production: true,
      simulated: false,
      observedAt: new Date().toISOString(),
      mapCommand: MAP_COMMAND,
      failure,
      login: loginEvidence,
      loginLifecycle: await captureLoginLifecycleDiagnostics(page, loginLifecycle)
        .catch(error => ({ captureError: clean(error?.message || error, 1000) })),
      bootLoginBoundary: await captureBootLoginBoundary(page)
        .catch(error => ({ captureError: clean(error?.message || error, 1000) })),
      bootFunctionDebugger: bootDebugger.events,
      dom: await captureDomState(page).catch(error => ({ captureError: clean(error?.message || error, 1000) }))
    };
    fs.mkdirSync(path.dirname(outputFile), { recursive: true });
    fs.writeFileSync(outputFile, JSON.stringify(diagnostic, null, 2));
    console.log(JSON.stringify({ mapsOutcomeLifecycleDiagnostic: diagnostic }, null, 2));
    await bootDebugger.session.detach().catch(() => {});
    await browser.close();
    if (failure) {
      const error = new Error(`Maps lifecycle diagnostic did not verify a visible outcome: ${failure}`);
      error.diagnostic = diagnostic;
      throw error;
    }
    return diagnostic;
  }
}

if (require.main === module) run().catch(error => {
  console.error(error.stack || error.message);
  process.exit(1);
});

module.exports = Object.freeze({ MAP_COMMAND, LIVE_KNOWLEDGE_COMMAND, clean, sameOriginPath, sanitizeTurnPayload,
  installBootLoginBoundaryDiagnostics, installBootFunctionDebugger, captureImmutablePreClickSnapshot,
  captureBootLoginBoundary, installMapLifecycleDiagnostics, captureDomState, run });
