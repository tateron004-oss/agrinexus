#!/usr/bin/env node
"use strict";

const fs = require("node:fs");

function required(value, label) {
  if (!value) throw new Error(`${label} is required.`);
  return value;
}

function sanitizeErrorRecord(value = {}) {
  const clean = input => String(input || "").replace(/[\r\n\t]+/g, " ").trim().slice(0, 1000);
  return Object.freeze({
    type: clean(value.type || "error"),
    name: clean(value.name || "Error"),
    message: clean(value.message || "Unknown browser startup error"),
    source: clean(value.source || ""),
    line: Number.isInteger(value.line) ? value.line : 0,
    column: Number.isInteger(value.column) ? value.column : 0
  });
}

function buildDiagnostic({ releaseSha, beforeClick, afterClick, loginRequest }) {
  return Object.freeze({
    schema: "nexus.browser-login-binding-diagnostic.v1",
    releaseSha,
    production: true,
    simulated: false,
    observedAt: new Date().toISOString(),
    beforeClick: {
      url: String(beforeClick?.url || ""),
      readyState: String(beforeClick?.readyState || ""),
      loginSubmitListenerRegistrations: Number(beforeClick?.loginSubmitListenerRegistrations || 0),
      startupErrors: Array.isArray(beforeClick?.startupErrors)
        ? beforeClick.startupErrors.map(sanitizeErrorRecord).slice(0, 20)
        : []
    },
    afterClick: {
      url: String(afterClick?.url || ""),
      loginViewVisible: Boolean(afterClick?.loginViewVisible),
      appViewVisible: Boolean(afterClick?.appViewVisible)
    },
    loginRequest: {
      observed: Boolean(loginRequest?.observed),
      status: Number(loginRequest?.status || 0),
      method: loginRequest?.observed ? "POST" : ""
    }
  });
}

async function run(env = process.env) {
  const { chromium } = require("playwright");
  const base = required(env.NEXUS_BASE_URL, "NEXUS_BASE_URL").replace(/\/$/, "");
  const releaseSha = required(env.EXPECTED_RELEASE_SHA, "EXPECTED_RELEASE_SHA");
  const outputFile = env.NEXUS_LOGIN_BINDING_DIAGNOSTIC_FILE || "output/nexus-browser-login-binding-diagnostic.json";
  const browser = await chromium.launch({ headless: true, args: ["--disable-blink-features=AutomationControlled"] });
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } });
  await page.addInitScript(() => {
    const state = window.__NEXUS_LOGIN_BINDING_DIAGNOSTIC__ = {
      loginSubmitListenerRegistrations: 0,
      startupErrors: []
    };
    const record = value => {
      if (state.startupErrors.length < 20) state.startupErrors.push(value);
    };
    const originalAddEventListener = EventTarget.prototype.addEventListener;
    EventTarget.prototype.addEventListener = function nexusDiagnosticAddEventListener(type, listener, options) {
      if (type === "submit" && this instanceof Element && this.id === "loginForm") {
        state.loginSubmitListenerRegistrations += 1;
      }
      return originalAddEventListener.call(this, type, listener, options);
    };
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

  let diagnostic;
  try {
    await page.goto(`${base}/?nexusLoginBindingDiagnostic=${encodeURIComponent(releaseSha)}`, {
      waitUntil: "networkidle",
      timeout: 90000
    });
    const beforeClick = await page.evaluate(() => ({
      url: location.href,
      readyState: document.readyState,
      loginSubmitListenerRegistrations:
        window.__NEXUS_LOGIN_BINDING_DIAGNOSTIC__?.loginSubmitListenerRegistrations || 0,
      startupErrors: window.__NEXUS_LOGIN_BINDING_DIAGNOSTIC__?.startupErrors || []
    }));
    await page.getByLabel("Email", { exact: true }).fill(env.NEXUS_STANDARD_USER_EMAIL || "user@agrinexus.org");
    await page.getByLabel("Password", { exact: true }).fill(env.NEXUS_STANDARD_USER_PASSWORD || "User2026!");
    const responsePromise = page.waitForResponse(response => {
      try {
        const url = new URL(response.url());
        return url.origin === base && url.pathname === "/api/login" && response.request().method() === "POST";
      } catch { return false; }
    }, { timeout: 10000 }).catch(() => null);
    await page.getByRole("button", { name: "Enter platform", exact: true }).click();
    const response = await responsePromise;
    await page.waitForTimeout(1000);
    const afterClick = await page.evaluate(() => {
      const visible = node => Boolean(node && node.getClientRects().length && getComputedStyle(node).display !== "none");
      return {
        url: location.href,
        loginViewVisible: visible(document.querySelector("#loginView")),
        appViewVisible: visible(document.querySelector("#appView"))
      };
    });
    diagnostic = buildDiagnostic({
      releaseSha,
      beforeClick,
      afterClick,
      loginRequest: { observed: Boolean(response), status: response?.status() || 0 }
    });
  } finally {
    await browser.close();
  }
  fs.mkdirSync(require("node:path").dirname(outputFile), { recursive: true });
  fs.writeFileSync(outputFile, JSON.stringify(diagnostic, null, 2));
  console.log(JSON.stringify({ browserLoginBindingDiagnostic: diagnostic }, null, 2));
  return diagnostic;
}

if (require.main === module) run().catch(error => {
  console.error(error.stack || error.message);
  process.exit(1);
});

module.exports = Object.freeze({ sanitizeErrorRecord, buildDiagnostic, run });
