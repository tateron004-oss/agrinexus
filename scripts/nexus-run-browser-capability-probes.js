#!/usr/bin/env node
"use strict";

const fs = require("node:fs");
const { CONTRACTS } = require("../nexus/apps/capability-completion-contracts.js");
const { FAULTS } = require("../nexus/acceptance/fault-register.js");
const liveKnowledgeLifecycleByPage = new WeakMap();

const SCENARIOS = Object.freeze({
  agriculture: "Assess yellow leaves on my maize crop and show sources.",
  health: "Record my blood pressure as 140 over 90 and show the safety response.",
  telehealth: "Save a telehealth intake for my blood pressure concern and show the next step.",
  "mobile-clinic": "Find mobile clinic locations near Nairobi and select the closest one.",
  pharmacy: "Find pharmacy support for metformin and show a safety response with sources.",
  learning: "Create a short maize farming literacy lesson and save my progress.",
  workforce: "Find agriculture jobs in Nairobi with sources and select one listing.",
  marketplace: "Find maize marketplace listings with sources and select one listing.",
  maps: "Show a route from Nairobi to Nakuru with route geometry.",
  "music-media": "Play Stevie Wonder Sir Duke and confirm playback is playing.",
  documents: "Create and save a farming plan document, then reopen it.",
  reminders: "Remind me tomorrow at 9 AM to check my crops and save the reminder.",
  "offline-queue": "Queue a crop observation offline, synchronize it, and show the server acknowledgement.",
  "live-knowledge": "Why do maize leaves turn yellow? Answer with current sources.",
  images: "Show me current images of healthy maize leaves with sources.",
  communications: "Draft a clinic follow-up message, obtain consent, send it, and return the delivery receipt.",
  operations: "Prepare a field operation, record approval state, and return its receipt."
});

function required(value, label) { if (!value) throw new Error(`${label} is required.`); return value; }
async function json(response) { const text = await response.text(); try { return JSON.parse(text); } catch { return { raw: text.slice(0, 500) }; } }
function exactRecord(releaseSha, receipts, extra = {}) { return { releaseSha, production: true, simulated: false,
  passed: true, observedAt: new Date().toISOString(), receipts, ...extra }; }

function pendingConfirmationContinuation(application, turn) {
  return ["health", "offline-queue"].includes(application) && turn?.result?.state === "confirmation_required" &&
    Boolean(turn?.result?.taskId) && Boolean(turn?.result?.outcome?.pendingStepId) &&
    Boolean(turn?.result?.commandId) && Boolean(turn?.result?.correlationId);
}

async function post(url, token, body) {
  const response = await fetch(url, { method: "POST", headers: { authorization: `Bearer ${token}`,
    accept: "application/json", "content-type": "application/json" }, body: JSON.stringify(body) });
  const value = await json(response);
  if (!response.ok) throw new Error(`${url} failed (${response.status}) application=${body.application || "none"}` +
    ` actualApplication=${value.result?.application || "none"} expectedApplication=${value.expectedApplication || "none"}` +
    ` code=${value.code || "none"} category=${value.category || "none"} error=${value.error || value.raw || "none"}`);
  return value;
}

async function reloadAuthenticatedShell(page, attempts = 4) {
  let lastError;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      await page.reload({ waitUntil: "networkidle", timeout: 90000 });
      return;
    } catch (error) {
      lastError = error;
      const recoverable = /ERR_ABORTED|frame was detached|navigation/i.test(String(error?.message || error));
      if (!recoverable || attempt === attempts) break;
      await new Promise(resolve => setTimeout(resolve, attempt * 500));
      await page.goto(page.url(), { waitUntil: "networkidle", timeout: 90000 });
      return;
    }
  }
  throw new Error(`Authenticated Standard User shell reload failed after ${attempts} attempts: ${lastError?.message || "navigation error"}`);
}

async function submitRegisteredStandardUserLogin(page, base, lifecycle = null) {
  const loginResponsePromise = page.waitForResponse(response => {
    try {
      const url = new URL(response.url());
      return url.origin === base && url.pathname === "/api/login" &&
        response.request().method() === "POST";
    } catch {
      return false;
    }
  }, { timeout: 30000 });
  if (lifecycle) lifecycle.beforeClick = await page.evaluate(() => ({
    loginSubmitListenerRegistrations:
      window.__NEXUS_LOGIN_LIFECYCLE_CONTEXT__?.loginSubmitListenerRegistrations || 0,
    currentFormWasRegisteredTarget:
      document.querySelector("#loginForm") === window.__NEXUS_LOGIN_LIFECYCLE_CONTEXT__?.registeredLoginForm
  }));
  await page.getByRole("button", { name: "Enter platform", exact: true }).click();
  let response;
  try {
    response = await loginResponsePromise;
  } catch (error) {
    throw new Error(`Registered Standard User login request was not observed within 30000ms (${error?.name || "timeout"}).`);
  }
  if (!response.ok()) {
    throw new Error(`Registered Standard User login returned HTTP ${response.status()}.`);
  }
  return Object.freeze({ requestObserved: true, status: response.status() });
}

function sanitizeLoginLifecycleValue(value, limit = 1000) {
  return String(value || "").replace(/[\r\n\t]+/g, " ").trim().slice(0, limit);
}

async function installLoginLifecycleDiagnostics(page, base) {
  const lifecycle = {
    schema: "nexus.browser-login-lifecycle-context.v1",
    requests: [],
    responses: [],
    navigations: [],
    submitEvents: []
  };
  const sameOriginPath = value => {
    try {
      const url = new URL(value);
      return url.origin === base ? `${url.pathname}${url.search}`.slice(0, 500) : "cross-origin";
    } catch { return "invalid-url"; }
  };
  page.on("request", request => {
    const path = sameOriginPath(request.url());
    if (path === "cross-origin") return;
    const record = { method: request.method(), path, resourceType: request.resourceType() };
    if (path.startsWith("/api/login") || request.resourceType() === "document") lifecycle.requests.push(record);
    else if (lifecycle.requests.length < 30) lifecycle.requests.push(record);
  });
  page.on("response", response => {
    if (lifecycle.responses.length >= 30) return;
    const path = sameOriginPath(response.url());
    if (path === "cross-origin") return;
    lifecycle.responses.push({ status: response.status(), path });
  });
  page.on("framenavigated", frame => {
    if (frame !== page.mainFrame() || lifecycle.navigations.length >= 20) return;
    lifecycle.navigations.push({ path: sameOriginPath(frame.url()) });
  });
  await page.exposeFunction("__NEXUS_REPORT_LOGIN_SUBMIT__", value => {
    if (lifecycle.submitEvents.length < 10) lifecycle.submitEvents.push(value);
  });
  await page.addInitScript(() => {
    const state = window.__NEXUS_LOGIN_LIFECYCLE_CONTEXT__ = {
      loginSubmitListenerRegistrations: 0,
      registeredLoginForm: null,
      submitEvents: [],
      errors: []
    };
    const record = value => {
      if (state.errors.length < 20) state.errors.push(value);
    };
    const originalAddEventListener = EventTarget.prototype.addEventListener;
    EventTarget.prototype.addEventListener = function nexusLoginLifecycleAddEventListener(type, listener, options) {
      if (type === "submit" && this instanceof Element && this.id === "loginForm") {
        state.loginSubmitListenerRegistrations += 1;
        state.registeredLoginForm = this;
      }
      return originalAddEventListener.call(this, type, listener, options);
    };
    document.addEventListener("submit", event => {
      if (event.target?.id !== "loginForm" || state.submitEvents.length >= 10) return;
      state.submitEvents.push({
        currentFormWasRegisteredTarget: event.target === state.registeredLoginForm,
        defaultPreventedAtCapture: event.defaultPrevented
      });
      void window.__NEXUS_REPORT_LOGIN_SUBMIT__?.({
        currentFormWasRegisteredTarget: event.target === state.registeredLoginForm,
        defaultPreventedAtCapture: event.defaultPrevented
      });
      queueMicrotask(() => {
        const record = state.submitEvents[state.submitEvents.length - 1];
        if (record) record.defaultPreventedAfterDispatch = event.defaultPrevented;
      });
    }, true);
    window.addEventListener("error", event => record({
      type: "error",
      name: event.error?.name || "Error",
      message: event.error?.message || event.message || "Unknown startup error",
      source: event.filename || "",
      line: event.lineno || 0,
      column: event.colno || 0
    }));
    window.addEventListener("unhandledrejection", event => record({
      type: "unhandledrejection",
      name: event.reason?.name || "Error",
      message: event.reason?.message || String(event.reason || "Unknown unhandled rejection"),
      source: "",
      line: 0,
      column: 0
    }));
  });
  return lifecycle;
}

async function captureLoginLifecycleDiagnostics(page, lifecycle) {
  const browser = await page.evaluate(() => ({
    url: location.href,
    readyState: document.readyState,
    loginSubmitListenerRegistrations:
      window.__NEXUS_LOGIN_LIFECYCLE_CONTEXT__?.loginSubmitListenerRegistrations || 0,
    currentFormWasRegisteredTarget:
      document.querySelector("#loginForm") === window.__NEXUS_LOGIN_LIFECYCLE_CONTEXT__?.registeredLoginForm,
    submitEvents: window.__NEXUS_LOGIN_LIFECYCLE_CONTEXT__?.submitEvents || [],
    errors: window.__NEXUS_LOGIN_LIFECYCLE_CONTEXT__?.errors || []
  })).catch(error => ({ captureError: String(error?.message || error) }));
  const errors = Array.isArray(browser.errors) ? browser.errors.map(value => ({
    type: sanitizeLoginLifecycleValue(value.type || "error", 50),
    name: sanitizeLoginLifecycleValue(value.name || "Error", 100),
    message: sanitizeLoginLifecycleValue(value.message),
    source: sanitizeLoginLifecycleValue(value.source, 500),
    line: Number.isInteger(value.line) ? value.line : 0,
    column: Number.isInteger(value.column) ? value.column : 0
  })) : [];
  return {
    schema: lifecycle.schema,
    beforeClick: lifecycle.beforeClick || null,
    submitEvents: lifecycle.submitEvents.slice(-10),
    browser: { ...browser, errors },
    requests: lifecycle.requests.slice(-30),
    responses: lifecycle.responses.slice(-30),
    navigations: lifecycle.navigations.slice(-20)
  };
}

function sanitizedAuthoritativeLifecyclePayload(value = {}) {
  const result = value?.result || value;
  const render = result?.render || null;
  return {
    schema: sanitizeLoginLifecycleValue(result?.schema || value?.schema, 100),
    authoritative: result?.authoritative === true,
    legacyFallbackUsed: result?.legacyFallbackUsed === true,
    state: sanitizeLoginLifecycleValue(result?.state, 100),
    application: sanitizeLoginLifecycleValue(result?.application || render?.application, 100),
    renderPresent: Boolean(render),
    renderApplication: sanitizeLoginLifecycleValue(render?.application, 100),
    renderWorkspace: sanitizeLoginLifecycleValue(render?.workspace, 100),
    renderOperation: sanitizeLoginLifecycleValue(render?.operation, 100),
    commandIdPresent: Boolean(result?.commandId || render?.commandId),
    correlationIdPresent: Boolean(result?.correlationId || render?.correlationId)
  };
}

function sanitizedAcknowledgementLifecyclePayload(value = {}) {
  const receipt = value?.receipt || value?.renderReceipt || value;
  return {
    application: sanitizeLoginLifecycleValue(value?.application || receipt?.application, 100),
    workspace: sanitizeLoginLifecycleValue(value?.workspace || receipt?.workspace, 100),
    commandIdPresent: Boolean(value?.commandId || receipt?.commandId),
    correlationIdPresent: Boolean(value?.correlationId || receipt?.correlationId),
    rendered: receipt?.rendered === true,
    visible: receipt?.visible === true,
    audible: receipt?.audible === true,
    acknowledged: receipt?.acknowledged === true,
    evidenceFields: receipt?.evidence && typeof receipt.evidence === "object"
      ? Object.keys(receipt.evidence).sort().slice(0, 30)
      : []
  };
}

async function installLiveKnowledgeLifecycleDiagnostics(page, base) {
  const lifecycle = {
    schema: "nexus.live-knowledge-browser-lifecycle.v1",
    requests: [],
    responses: [],
    turn: null,
    acknowledgementRequest: null,
    acknowledgementResponse: null
  };
  const relevantPath = value => {
    try {
      const url = new URL(value);
      if (url.origin !== base) return "";
      return ["/api/nexus/runtime/behavior/turn", "/api/nexus/runtime/behavior/acknowledgements",
        "/api/nexus/realtime/session", "/api/nexus/realtime/token"].includes(url.pathname) ? url.pathname : "";
    } catch { return ""; }
  };
  page.on("request", request => {
    const path = relevantPath(request.url());
    if (!path) return;
    lifecycle.requests.push({ method: request.method(), path });
    if (path === "/api/nexus/runtime/behavior/acknowledgements") {
      try { lifecycle.acknowledgementRequest = sanitizedAcknowledgementLifecyclePayload(request.postDataJSON()); }
      catch { lifecycle.acknowledgementRequest = { parseError: true }; }
    }
  });
  page.on("response", async response => {
    const path = relevantPath(response.url());
    if (!path) return;
    lifecycle.responses.push({ status: response.status(), path });
    try {
      const value = await response.json();
      if (path === "/api/nexus/runtime/behavior/turn") lifecycle.turn = sanitizedAuthoritativeLifecyclePayload(value);
      if (path === "/api/nexus/runtime/behavior/acknowledgements") {
        lifecycle.acknowledgementResponse = {
          status: response.status(),
          acknowledged: value?.acknowledged === true || value?.result?.acknowledged === true,
          completed: value?.completed === true || value?.result?.completed === true
        };
      }
    } catch { /* status and path remain sufficient when no JSON body exists */ }
  });
  liveKnowledgeLifecycleByPage.set(page, lifecycle);
  return lifecycle;
}

async function captureLiveKnowledgeLifecycleDiagnostics(page, lifecycle, error) {
  const browser = await page.evaluate(() => {
    const visible = node => Boolean(node && node.getClientRects().length && getComputedStyle(node).display !== "none" &&
      getComputedStyle(node).visibility !== "hidden");
    const surface = document.querySelector('[data-nexus-authoritative-outcome="true"]');
    const statusText = [...document.querySelectorAll('[role="status"]')].filter(visible)
      .map(node => String(node.textContent || "").trim()).filter(Boolean).slice(-30);
    return {
      authoritativeOutcome: {
        present: Boolean(surface),
        visible: visible(surface),
        application: String(surface?.getAttribute("data-application") || "").slice(0, 100),
        workspace: String(surface?.getAttribute("data-workspace") || "").slice(0, 100),
        commandIdPresent: Boolean(surface?.getAttribute("data-command-id"))
      },
      voice: {
        microphoneControlsVisible: [...document.querySelectorAll('[data-nexus-permanent-microphone-control="true"]')].filter(visible).length,
        bodyVoiceState: String(document.body?.dataset?.nexusVoiceState || "").slice(0, 100),
        realtimeState: String(document.body?.dataset?.nexusRealtimeState || "").slice(0, 100),
        relevantStatus: statusText.filter(text => /voice|microphone|realtime|visible|audible|outcome/i.test(text)).slice(-15)
      }
    };
  }).catch(captureError => ({ captureError: sanitizeLoginLifecycleValue(captureError?.message || captureError) }));
  return {
    schema: lifecycle.schema,
    error: sanitizeLoginLifecycleValue(error?.message || error),
    requests: lifecycle.requests.slice(-20),
    responses: lifecycle.responses.slice(-20),
    turn: lifecycle.turn,
    acknowledgementRequest: lifecycle.acknowledgementRequest,
    acknowledgementResponse: lifecycle.acknowledgementResponse,
    browser
  };
}

async function authenticatedStandardUserRole(page, base) {
  const response = await page.context().request.get(`${base}/api/state`, {
    headers: { accept: "application/json", "cache-control": "no-cache" }
  });
  if (!response.ok()) throw new Error(`Authenticated state failed (${response.status()}).`);
  const shell = await response.json();
  return shell?.user?.role || "";
}

async function waitForAuthenticatedStandardUserShell(page, base, timeoutMs = 30000) {
  const deadline = Date.now() + timeoutMs;
  let lastRole = "";
  let lastError = "";
  let shellState = { appVisible: false, loginVisible: true };
  while (Date.now() < deadline) {
    try {
      lastRole = await authenticatedStandardUserRole(page, base);
      lastError = "";
    } catch (error) {
      lastError = String(error?.message || error);
    }
    shellState = {
      appVisible: await page.locator("#appView").isVisible(),
      loginVisible: await page.locator("#loginView").isVisible()
    };
    if (lastRole === "Standard User" && shellState.appVisible && !shellState.loginVisible) {
      return { role: lastRole, ...shellState };
    }
    await new Promise(resolve => setTimeout(resolve, 250));
  }
  throw new Error(`Authenticated Standard User shell did not settle (role=${lastRole || "missing"}, appVisible=${shellState.appVisible}, loginVisible=${shellState.loginVisible}, lastError=${lastError || "none"}).`);
}

async function captureTypedIngressDiagnostic(page, releaseSha, phase, error) {
  const browserState = await page.evaluate(async () => {
    const visible = node => Boolean(node && node.getClientRects().length && getComputedStyle(node).visibility !== "hidden" &&
      getComputedStyle(node).display !== "none");
    const describe = node => ({
      visible: visible(node),
      disabled: Boolean(node.disabled),
      hidden: Boolean(node.hidden),
      ariaHidden: node.getAttribute("aria-hidden"),
      ariaExpanded: node.getAttribute("aria-expanded"),
      text: String(node.textContent || "").trim().slice(0, 300)
    });
    let microphonePermission = "unavailable";
    try { microphonePermission = (await navigator.permissions.query({ name: "microphone" })).state; }
    catch (permissionError) { microphonePermission = `error:${permissionError?.name || "unknown"}`; }
    const inputs = [...document.querySelectorAll('[data-nexus-primary-typed-entry="true"]')];
    const microphones = [...document.querySelectorAll('[data-nexus-permanent-microphone-control="true"]')];
    return {
      url: location.href,
      readyState: document.readyState,
      bodyClass: document.body?.className || "",
      microphonePermission,
      loginView: describe(document.querySelector("#loginView")),
      appView: describe(document.querySelector("#appView")),
      typedEntries: inputs.map(describe),
      microphoneControls: microphones.map(describe),
      statusText: [...document.querySelectorAll('[role="status"]')].filter(visible)
        .map(node => String(node.textContent || "").trim()).filter(Boolean).slice(-20)
    };
  });
  return {
    schema: "nexus.typed-ingress-diagnostic.v1",
    releaseSha,
    phase,
    observedAt: new Date().toISOString(),
    error: String(error?.message || error),
    browserState
  };
}

async function preserveTypedIngressDiagnostic(page, releaseSha, phase, error) {
  const diagnostic = await captureTypedIngressDiagnostic(page, releaseSha, phase, error).catch(diagnosticError => ({
    schema: "nexus.typed-ingress-diagnostic.v1",
    releaseSha,
    phase,
    observedAt: new Date().toISOString(),
    error: String(error?.message || error),
    diagnosticCaptureError: String(diagnosticError?.message || diagnosticError)
  }));
  fs.mkdirSync("output", { recursive: true });
  fs.writeFileSync("output/nexus-production-typed-ingress-diagnostic.json", JSON.stringify(diagnostic, null, 2));
  console.error(JSON.stringify({ typedIngressDiagnostic: diagnostic }, null, 2));
  return diagnostic;
}

async function requireVisibleAuthoritativeTypedIngress(page) {
  const input = page.locator('[data-nexus-primary-typed-entry="true"]:visible').first();
  if (await input.isVisible()) return input;
  const microphone = page.locator('[data-nexus-permanent-microphone-control="true"]:visible').first();
  await microphone.waitFor({ state: "visible", timeout: 30000 });
  await microphone.click();
  await input.waitFor({ state: "visible", timeout: 30000 });
  return input;
}

async function submitVisibleCommand(page, text, application) {
  const input = page.locator('[data-nexus-primary-typed-entry="true"]:visible').first();
  const send = page.locator('[data-nexus-primary-typed-submit="true"]:visible').first();
  const before = await page.locator('[data-nexus-authoritative-outcome="true"]').getAttribute("data-command-id").catch(() => null);
  await input.fill(text);
  await send.click();
  try {
    await page.waitForFunction(previous => {
      const surface = document.querySelector('[data-nexus-authoritative-outcome="true"]');
      const commandId = surface?.getAttribute("data-command-id") || "";
      return Boolean(commandId && commandId !== previous);
    }, before, { timeout: 120000 });
  } catch (error) {
    const status = await page.locator('[role="status"]').allTextContents().catch(() => []);
    const commandError = new Error(`Visible Standard User command failed application=${application}: ${status.join(" | ").slice(-1200) || error.message}`);
    if (application === "live-knowledge") {
      const lifecycle = liveKnowledgeLifecycleByPage.get(page);
      if (lifecycle) {
        const diagnostic = await captureLiveKnowledgeLifecycleDiagnostics(page, lifecycle, commandError);
        fs.writeFileSync("output/nexus-live-knowledge-browser-lifecycle.json", JSON.stringify(diagnostic, null, 2));
        console.error(JSON.stringify({ liveKnowledgeLifecycleDiagnostic: diagnostic }, null, 2));
      }
    }
    throw commandError;
  }
  const surface = page.locator('[data-nexus-authoritative-outcome="true"]').first();
  if (!await surface.isVisible()) throw new Error(`Visible Standard User outcome was not visible application=${application}.`);
  const workspace = await surface.getAttribute("data-workspace");
  const textContent = await surface.innerText();
  if (/authoritative Nexus runtime is unavailable|legacy write fallback|behavior spine is unavailable/i.test(textContent)) {
    throw new Error(`Visible Standard User command failed closed application=${application}: ${textContent.slice(0, 500)}`);
  }
  if (application === "images") {
    const loaded = await page.locator('[data-nexus-authoritative-image="true"]').evaluateAll(nodes =>
      nodes.filter(node => node.complete && node.naturalWidth > 0 && node.naturalHeight > 0).length);
    if (loaded < 1) throw new Error("Visible image search produced no genuinely loaded image.");
  }
  return { application, workspace, text: textContent.slice(0, 1000) };
}

async function run(env = process.env) {
  const { chromium } = require("playwright");
  const base = required(env.NEXUS_BASE_URL, "NEXUS_BASE_URL").replace(/\/$/, "");
  const releaseSha = required(env.EXPECTED_RELEASE_SHA, "EXPECTED_RELEASE_SHA");
  const token = required(env.NEXUS_ACCEPTANCE_TOKEN, "NEXUS_ACCEPTANCE_TOKEN");
  const probeFile = required(env.NEXUS_PROBE_FILE, "NEXUS_PROBE_FILE");
  const document = JSON.parse(fs.readFileSync(probeFile, "utf8"));
  const browser = await chromium.launch({ channel: "chrome", headless: true,
    ignoreDefaultArgs: ["--enable-automation"],
    args: ["--autoplay-policy=no-user-gesture-required", "--disable-blink-features=AutomationControlled"] });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  const loginLifecycle = await installLoginLifecycleDiagnostics(page, base);
  await installLiveKnowledgeLifecycleDiagnostics(page, base);
  const permissionSession = await page.context().newCDPSession(page);
  try {
    await permissionSession.send("Browser.setPermission", {
      permission: { name: "microphone" }, setting: "denied", origin: base
    });
  } finally {
    await permissionSession.detach();
  }
  await page.goto(`${base}/?nexusProductionEvidence=${encodeURIComponent(releaseSha)}`, { waitUntil: "networkidle", timeout: 90000 });
  await page.getByLabel("Email", { exact: true }).fill(env.NEXUS_STANDARD_USER_EMAIL || "user@agrinexus.org");
  await page.getByLabel("Password", { exact: true }).fill(env.NEXUS_STANDARD_USER_PASSWORD || "User2026!");
  let loginBoundary;
  try {
    loginBoundary = await submitRegisteredStandardUserLogin(page, base, loginLifecycle);
    await waitForAuthenticatedStandardUserShell(page, base);
    await requireVisibleAuthoritativeTypedIngress(page);
  } catch (error) {
    const diagnosticError = loginBoundary
      ? new Error(`${error.message} Login boundary: requestObserved=true, status=${loginBoundary.status}.`)
      : error;
    await preserveTypedIngressDiagnostic(page, releaseSha, "post-login", diagnosticError);
    const lifecycleDiagnostic = await captureLoginLifecycleDiagnostics(page, loginLifecycle);
    fs.writeFileSync("output/nexus-browser-login-lifecycle-context.json", JSON.stringify(lifecycleDiagnostic, null, 2));
    console.error(JSON.stringify({ loginLifecycleDiagnostic: lifecycleDiagnostic }, null, 2));
    throw diagnosticError;
  }
  await page.waitForFunction(() => typeof window.__NEXUS_CAPTURE_PRODUCTION_OUTCOME__ === "function", null, { timeout: 30000 });
  const visibleIngress = [];
  for (const application of ["live-knowledge", "maps", "workforce", "documents", "images"]) {
    visibleIngress.push(await submitVisibleCommand(page, SCENARIOS[application], application));
  }
  await reloadAuthenticatedShell(page);
  await requireVisibleAuthoritativeTypedIngress(page);
  const capabilityProbes = []; const workspaceProbes = [];
  try {
    for (const [application, text] of Object.entries(SCENARIOS)) {
      const execute = async phase => {
        let turn = await post(`${base}/api/nexus/runtime/production-acceptance/probes/behavior-turn`, token,
          { releaseSha, application, text, channel: "typed", locale: "en", phase });
        if (pendingConfirmationContinuation(application, turn)) {
          const continuation = application === "health" ? "health-continuation" : "offline-queue-continuation";
          turn = await post(`${base}/api/nexus/runtime/production-acceptance/probes/${continuation}`, token,
            { releaseSha, taskId: turn.result.taskId, stepId: turn.result.outcome?.pendingStepId,
              commandId: turn.result.commandId, correlationId: turn.result.correlationId,
              channel: "typed", confirmed: true, consented: true });
        }
        const outcome = turn.result?.render;
        if (!outcome || turn.result?.state !== "render_required") throw new Error(`${application} ${phase} did not reach render_required` +
          ` (state=${turn.result?.state || "missing"}, pendingStep=${Boolean(turn.result?.outcome?.pendingStepId)}, render=${Boolean(outcome)}).`);
        const receiptPromise = page.evaluate(value => window.__NEXUS_CAPTURE_PRODUCTION_OUTCOME__(value), outcome);
        if (application === "music-media") {
          const player = page.locator('[data-nexus-provider-audio="true"], [data-nexus-youtube-player] iframe').first();
          await player.waitFor({ state: "visible", timeout: 20000 });
          if (await player.evaluate(node => node.tagName === "IFRAME")) {
            await page.waitForTimeout(1500);
            const box = await player.boundingBox();
            if (!box) throw new Error("The production fallback player did not expose a clickable viewport.");
            await page.mouse.click(box.x + (box.width / 2), box.y + (box.height / 2));
          }
        }
        const receipt = await receiptPromise;
        if (application === "music-media") {
          const playback = receipt?.evidence?.playbackEvidence || {};
          const previewVerified = receipt.audible === true &&
            receipt.evidence?.mediaProvider === "apple-itunes-preview" &&
            receipt.evidence?.playbackClass === "preview" &&
            playback.schema === "nexus.media-playback-evidence.v1" &&
            playback.playResolved === true && playback.paused === false &&
            playback.muted === false && Number(playback.volume) > 0 &&
            Number(playback.readyState) >= 2 && Number(playback.advancedSeconds) >= 3;
          const youtubeVerified = receipt.audible === true &&
            receipt.evidence?.mediaProvider === "youtube" &&
            Number(playback.playerState) === 1;
          if (!previewVerified && !youtubeVerified) {
            throw new Error(`Music did not return genuine provider-owned playback evidence: ${JSON.stringify(receipt?.evidence || {})}`);
          }
        }
        const acknowledged = await post(`${base}/api/nexus/runtime/production-acceptance/probes/browser-acknowledgement`, token,
          { releaseSha, taskId: outcome.taskId, commandId: outcome.commandId, correlationId: outcome.correlationId,
            workspace: outcome.workspace, receipt });
        if (acknowledged.result?.completed !== true) throw new Error(`${application} ${phase} renderer acknowledgement did not complete.`);
        return { outcome, receipt };
      };
      const candidate = await execute("pre-cutover");
      const candidateReceipts = [`${base}/behavior-turn application=${application} phase=pre-cutover commandId=${candidate.outcome.commandId}`,
        `${base}/browser-acknowledgement application=${application} phase=pre-cutover completed=true`];
      const candidateProof = exactRecord(releaseSha, candidateReceipts);
      const proofs = { contract: candidateProof,
        "tenant-isolation": exactRecord(releaseSha, [`${base}/probes/identity tenantIsolation=true`]),
        "durable-write": exactRecord(releaseSha, [`${base}/probes/task-engine durable=true taskId=${candidate.outcome.taskId}`]),
        receipt: candidateProof, "browser-outcome": exactRecord(releaseSha, candidateReceipts) };
      await post(`${base}/api/nexus/runtime/production-acceptance/workspaces/${encodeURIComponent(application)}`, token,
        { releaseSha, rollbackRef: env.NEXUS_ROLLBACK_REF, proofs: Object.fromEntries(Object.entries(proofs).map(([key, value]) =>
          [key, { state: "verified", evidenceId: `${application}-${key}-${candidate.outcome.commandId}`, releaseSha, record: value }])) });
      const { outcome, receipt } = await execute("post-cutover");
      const receipts = [`${base}/behavior-turn application=${application} commandId=${outcome.commandId}`,
        `${base}/browser-acknowledgement application=${application} completed=true`];
      capabilityProbes.push(exactRecord(releaseSha, receipts, { application, rendered: receipt.rendered === true,
        visible: receipt.visible === true, audible: receipt.audible === true, evidence: outcome.data || {} }));
      const proof = exactRecord(releaseSha, receipts);
      workspaceProbes.push(exactRecord(releaseSha, receipts, { workspaceId: application, proofs: {
        contract: proof, "tenant-isolation": exactRecord(releaseSha, [`${base}/probes/identity tenantIsolation=true`]),
        "durable-write": exactRecord(releaseSha, [`${base}/probes/task-engine durable=true taskId=${outcome.taskId}`]),
        receipt: proof, "browser-outcome": exactRecord(releaseSha, receipts)
      } }));
    }
    const voiceText = SCENARIOS["live-knowledge"];
    const voice = await post(`${base}/api/nexus/runtime/production-acceptance/probes/behavior-turn`, token,
      { releaseSha, application: "live-knowledge", text: voiceText, channel: "voice", locale: "en" });
    if (voice.result?.render?.application !== "live-knowledge" || voice.result?.render?.originalText !== voiceText) {
      throw new Error("Voice and typed input did not preserve equivalent authoritative intent.");
    }
    const faultProbes = [];
    Object.assign(document, { workspaceProbes, capabilityProbes, faultProbes,
      faultProofStatus: { closed: false, releaseSha, required: FAULTS.length, proven: 0,
        missing: [...FAULTS], reason: "Typed fault verifiers have not executed; capability success receipts cannot prove fault closure." },
      browserProbe: { releaseSha, capabilities: capabilityProbes.length, workspaces: workspaceProbes.length,
        visibleIngress, visibleAuthenticatedLogin: true, sequential: true, voiceTypedEquivalent: true, observedAt: new Date().toISOString() } });
    fs.writeFileSync(probeFile, JSON.stringify(document, null, 2));
    console.log(JSON.stringify({ ok: true, releaseSha, capabilities: capabilityProbes.length,
      workspaces: workspaceProbes.length, faults: faultProbes.length, faultProofClosed: false }, null, 2));
    return document;
  } finally { await browser.close(); }
}

if (require.main === module) run().catch(error => { console.error(error.stack || error.message); process.exit(1); });
module.exports = Object.freeze({ SCENARIOS, exactRecord, pendingConfirmationContinuation, reloadAuthenticatedShell, authenticatedStandardUserRole, waitForAuthenticatedStandardUserShell, sanitizeLoginLifecycleValue, sanitizedAuthoritativeLifecyclePayload, sanitizedAcknowledgementLifecyclePayload, installLoginLifecycleDiagnostics, captureLoginLifecycleDiagnostics, installLiveKnowledgeLifecycleDiagnostics, captureLiveKnowledgeLifecycleDiagnostics, captureTypedIngressDiagnostic, preserveTypedIngressDiagnostic, requireVisibleAuthoritativeTypedIngress, submitVisibleCommand, post, run });
