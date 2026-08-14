#!/usr/bin/env node
"use strict";

const fs = require("node:fs");
const path = require("node:path");
const {
  installLoginLifecycleDiagnostics,
  waitForCurrentLoginSubmitListener,
  waitForAuthenticatedStandardUserShell,
  requireVisibleAuthoritativeTypedIngress
} = require("./nexus-run-browser-capability-probes.js");

const MAP_COMMAND = "Show a route from Nairobi to Nakuru with route geometry.";

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

function sanitizedResourcePath(value, base) {
  try {
    const url = new URL(value);
    return url.origin === base ? url.pathname.slice(0, 500) : `cross-origin:${url.hostname.slice(0, 200)}`;
  } catch {
    return "invalid-url";
  }
}

function sanitizeTurnPayload(value = {}) {
  const result = value?.result || value;
  const render = result?.render || result?.outcome?.render || null;
  const data = render?.data || result?.data || result?.outcome?.data || {};
  const geometry = data?.routeGeometry || render?.routeGeometry || [];
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
    origin: clean(data?.origin || "", 200),
    destination: clean(data?.destination || "", 200),
    routeGeometryPointCount: Array.isArray(geometry) ? geometry.length : 0,
    error: clean(value?.error || result?.error || "", 500)
  });
}

async function installMapLifecycleDiagnostics(page, base) {
  const lifecycle = {
    schema: "nexus.maps-outcome-lifecycle-diagnostic.v1",
    phase: "setup",
    requests: [],
    responses: [],
    failedResources: [],
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
    if (response.status() >= 400 && lifecycle.failedResources.length < 30) {
      lifecycle.failedResources.push({
        status: response.status(),
        path: sanitizedResourcePath(response.url(), base),
        resourceType: clean(response.request().resourceType(), 100),
        phase: lifecycle.phase
      });
    }
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
    window.__NEXUS_MAPS_LIFECYCLE__ = { mutations: [], voiceEvents: [] };
    const record = () => {
      const state = window.__NEXUS_MAPS_LIFECYCLE__;
      if (!state || state.mutations.length >= 50) return;
      const body = document.body;
      const surface = document.querySelector('[data-nexus-authoritative-outcome="true"]');
      const maps = [...document.querySelectorAll('[data-nexus-map], [data-nexus-authoritative-map], .leaflet-container')];
      state.mutations.push({
        at: Date.now(),
        workspaceRequestIdPresent: Boolean(body?.dataset?.genesisWorkspaceRequestId),
        authoritativeOutcomePresent: Boolean(surface),
        commandIdPresent: Boolean(surface?.getAttribute("data-command-id")),
        workspace: String(surface?.getAttribute("data-workspace") || "").slice(0, 100),
        mapNodeCount: maps.length,
        visibleMapNodeCount: maps.filter(node => Boolean(node.getClientRects().length && getComputedStyle(node).display !== "none")).length,
        markerCount: document.querySelectorAll("#userMapCanvas .leaflet-marker-pane .leaflet-marker-icon").length,
        routePathCount: [...document.querySelectorAll("#userMapCanvas .leaflet-overlay-pane svg path")]
          .filter(node => Boolean(node.getClientRects().length)).length
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
    const markerNodes = [...document.querySelectorAll("#userMapCanvas .leaflet-marker-pane .leaflet-marker-icon")];
    const routePaths = [...document.querySelectorAll("#userMapCanvas .leaflet-overlay-pane svg path")];
    return {
      workspaceRequestIdPresent: Boolean(document.body.dataset.genesisWorkspaceRequestId),
      workspaceRequestId: String(document.body.dataset.genesisWorkspaceRequestId || "").slice(0, 200),
      mapLocation: String(document.body.dataset.genesisMapLocation || "").slice(0, 300),
      authoritativeOutcome: describe(document.querySelector('[data-nexus-authoritative-outcome="true"]')),
      mapNodes: mapNodes.slice(0, 20).map(describe),
      leaflet: {
        canvasPresent: Boolean(document.querySelector("#userMapCanvas.leaflet-container")),
        canvasVisible: visible(document.querySelector("#userMapCanvas.leaflet-container")),
        markerCount: markerNodes.length,
        visibleMarkerCount: markerNodes.filter(visible).length,
        routePathCount: routePaths.length,
        visibleRoutePathCount: routePaths.filter(visible).length,
        routePaths: routePaths.slice(0, 10).map(node => ({
          visible: visible(node),
          dLength: String(node.getAttribute("d") || "").length,
          stroke: String(node.getAttribute("stroke") || "").slice(0, 100)
        }))
      },
      relevantStatuses: [...document.querySelectorAll('[role="status"]')].filter(visible)
        .map(node => String(node.textContent || "").replace(/[\r\n\t]+/g, " ").trim().slice(0, 500))
        .filter(text => /map|route|Nairobi|Nakuru|voice|microphone|outcome/i.test(text)).slice(-30),
      mutations: (window.__NEXUS_MAPS_LIFECYCLE__?.mutations || []).slice(-50),
      voiceEvents: (window.__NEXUS_MAPS_LIFECYCLE__?.voiceEvents || []).slice(-30)
    };
  });
}

async function run(env = process.env) {
  const { chromium } = require("playwright");
  const base = required(env.NEXUS_BASE_URL, "NEXUS_BASE_URL").replace(/\/$/, "");
  const releaseSha = required(env.EXPECTED_RELEASE_SHA, "EXPECTED_RELEASE_SHA");
  const outputFile = env.NEXUS_MAPS_LIFECYCLE_FILE || "output/nexus-maps-outcome-lifecycle.json";
  const screenshotFile = env.NEXUS_MAPS_LIFECYCLE_SCREENSHOT || "output/nexus-maps-outcome-lifecycle.png";
  const browser = await chromium.launch({ channel: "chrome", headless: true,
    ignoreDefaultArgs: ["--enable-automation"], args: ["--disable-blink-features=AutomationControlled"] });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const loginLifecycle = await installLoginLifecycleDiagnostics(page, base);
  const lifecycle = await installMapLifecycleDiagnostics(page, base);
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
    lifecycle.phase = "navigation";
    await page.goto(`${base}/?nexusMapsLifecycleDiagnostic=${encodeURIComponent(releaseSha)}`, { waitUntil: "networkidle", timeout: 90000 });
    lifecycle.phase = "login-form";
    await page.getByLabel("Email", { exact: true }).fill(env.NEXUS_STANDARD_USER_EMAIL || "user@agrinexus.org");
    await page.getByLabel("Password", { exact: true }).fill(env.NEXUS_STANDARD_USER_PASSWORD || "User2026!");
    const loginListener = await waitForCurrentLoginSubmitListener(page);
    const loginResponse = page.waitForResponse(response => sameOriginPath(response.url(), base) === "/api/login" && response.request().method() === "POST", { timeout: 30000 });
    lifecycle.phase = "login-submit";
    await page.getByRole("button", { name: "Enter platform", exact: true }).click();
    const login = await loginResponse;
    if (!login.ok()) throw new Error(`Standard User login returned HTTP ${login.status()}.`);
    loginEvidence = {
      listenerRegistrations: loginListener.loginSubmitListenerRegistrations,
      currentFormWasRegisteredTarget: loginListener.currentFormWasRegisteredTarget,
      status: login.status()
    };
    lifecycle.phase = "authenticated-shell";
    await waitForAuthenticatedStandardUserShell(page, base);
    const input = await requireVisibleAuthoritativeTypedIngress(page);
    const send = page.locator('[data-nexus-primary-typed-submit="true"]:visible').first();
    const beforeRequestId = await page.locator("body").getAttribute("data-genesis-workspace-request-id").catch(() => null);
    lifecycle.phase = "map-command";
    await input.fill(MAP_COMMAND);
    await send.click();
    try {
      await page.waitForFunction(previousRequestId => {
        const requestId = document.body.dataset.genesisWorkspaceRequestId || "";
        const canvas = document.querySelector("#userMapCanvas.leaflet-container");
        const routePaths = [...document.querySelectorAll("#userMapCanvas .leaflet-overlay-pane svg path")];
        const markers = document.querySelectorAll("#userMapCanvas .leaflet-marker-pane .leaflet-marker-icon");
        return Boolean(requestId && requestId !== previousRequestId && canvas?.getClientRects().length &&
          markers.length >= 2 && routePaths.some(node => node.getClientRects().length && String(node.getAttribute("d") || "").length > 0));
      }, beforeRequestId, { timeout: 120000 });
    } catch (error) {
      failure = clean(error?.message || error, 1000);
    }
    await page.waitForTimeout(1000);
  } catch (error) {
    failure = clean(error?.message || error, 1000);
  } finally {
    lifecycle.phase = "capture";
    fs.mkdirSync(path.dirname(outputFile), { recursive: true });
    await page.screenshot({ path: screenshotFile, fullPage: true }).catch(() => {});
    const diagnostic = {
      ...lifecycle,
      releaseSha,
      production: true,
      simulated: false,
      observedAt: new Date().toISOString(),
      mapCommand: MAP_COMMAND,
      failure,
      login: loginEvidence,
      dom: await captureDomState(page).catch(error => ({ captureError: clean(error?.message || error, 1000) }))
    };
    fs.writeFileSync(outputFile, JSON.stringify(diagnostic, null, 2));
    console.log(JSON.stringify({ mapsOutcomeLifecycleDiagnostic: diagnostic }, null, 2));
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

module.exports = Object.freeze({ MAP_COMMAND, clean, sameOriginPath, sanitizedResourcePath, sanitizeTurnPayload, installMapLifecycleDiagnostics, captureDomState, run });
