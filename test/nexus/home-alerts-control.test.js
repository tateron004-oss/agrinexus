"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
const css = fs.readFileSync(path.join(__dirname, "../../public/styles.css"), "utf8");
const start = app.indexOf("function nexusLocalDeviceId()");
const end = app.indexOf("async function requestProductionMobilePermission(");
assert.ok(start > 0 && end > start, "the push helpers must stay extractable");

// A tiny browser: enough of document/Notification/localStorage to run the real functions.
function load({ permission = "default", supported = true, key = "AAAA", subscribe, requests = [], requestPermission, userMode = true, appHidden = false, attempts = 0 } = {}) {
  const statusNodes = [{ textContent: "" }];
  const listeners = []; const store = { agrinexusDeviceId: "device-1" };
  if (attempts) store.agrinexusAlertPromptAttempts = String(attempts);
  const calls = { requestPermission: 0 };
  // Like a real browser, the permission changes only after the person answers the prompt.
  const notification = supported ? { permission, requestPermission: async () => { calls.requestPermission += 1;
    if (requestPermission instanceof Error) throw requestPermission;
    const answer = requestPermission || notification.permission; if (answer !== "default") notification.permission = answer; return answer; } } : undefined;
  const ui = { userMode, appHidden };
  const sandbox = {
    window: supported ? { PushManager: {}, Notification: notification } : {},
    navigator: supported ? { serviceWorker: { ready: Promise.resolve({ pushManager: { getSubscription: async () => null, subscribe: subscribe || (async () => ({
      toJSON: () => ({ endpoint: "https://push.example/abc", keys: { p256dh: "k", auth: "a" } }) })) } }) } } : {},
    Notification: notification, nexusVapidPublicKey: key,
    localStorage: { getItem: name => (name in store ? store[name] : null), setItem: (name, value) => { store[name] = String(value); } },
    requestWithTimeout: async (url, options) => { requests.push([url, options.method]); return {}; },
    escapeHtml: value => String(value), translateText: value => value, atob, Uint8Array, Array, String, Error, Number,
    document: {
      body: { classList: { contains: name => name === "user-mode" && ui.userMode } },
      querySelector: selector => (selector === "#appView" ? { classList: { contains: name => name === "hidden" && ui.appHidden } } : null),
      querySelectorAll: () => statusNodes,
      addEventListener: (type, fn, capture) => listeners.push({ type, fn, capture }),
      removeEventListener: (type, fn) => { const at = listeners.findIndex(item => item.type === type && item.fn === fn); if (at >= 0) listeners.splice(at, 1); }
    }
  };
  if (!supported) delete sandbox.Notification;
  vm.createContext(sandbox);
  vm.runInContext(`${app.slice(start, end)}\nthis.render = renderNexusHomeAlertsControl; this.subscribe = subscribeToNexusPushNotifications;`, sandbox);
  const tap = async () => { for (const item of [...listeners]) if (item.type === "click") await item.fn(); await new Promise(resolve => setImmediate(resolve)); await new Promise(resolve => setImmediate(resolve)); };
  return { sandbox, requests, statusNodes, listeners, calls, store, ui, tap, notification };
}

test("home has no Enable alerts button, only an empty status line for failures", () => {
  const html = load({ permission: "default" }).sandbox.render();
  assert.doesNotMatch(html, /<button/);
  assert.match(html, /data-nexus-home-alerts-status="true" role="status" aria-live="polite"><\/span>/);
  assert.equal(load({ supported: false }).sandbox.render(), "", "nothing renders where push cannot work");
  assert.doesNotMatch(app, /data-nexus-home-alerts-button/, "the button is gone from the app source");
});

test("the first tap in the signed-in app asks for notification permission once, then registers the device", async () => {
  const harness = load({ permission: "default", requestPermission: "granted" });
  assert.equal(harness.listeners.length, 1, "one capture-phase click listener is installed at load");
  assert.equal(harness.listeners[0].capture, true);
  await harness.tap();
  assert.equal(harness.calls.requestPermission, 1);
  assert.deepEqual(harness.requests, [["/api/nexus/runtime/devices", "POST"], ["/api/nexus/runtime/devices/device-1/push", "POST"]]);
  assert.equal(harness.statusNodes[0].textContent, "", "success is silent");
  assert.equal(harness.listeners.length, 0, "the listener removes itself");
  await harness.tap();
  assert.equal(harness.calls.requestPermission, 1, "a second tap never asks again");
});

test("a failed registration shows the reason in the status line", async () => {
  const harness = load({ permission: "default", requestPermission: "granted", subscribe: async () => { throw new Error("Registration failed - permission denied"); } });
  await harness.tap();
  assert.equal(harness.statusNodes[0].textContent, "Alerts could not be turned on: Registration failed - permission denied");
});

test("a blocked or dismissed prompt is never repeated in the same page and registers nothing", async () => {
  for (const answer of ["denied", "default"]) {
    const harness = load({ permission: "default", requestPermission: answer });
    await harness.tap(); await harness.tap(); await harness.tap();
    assert.equal(harness.calls.requestPermission, 1, answer);
    assert.equal(harness.requests.length, 0, `${answer} registers nothing`);
    assert.equal(harness.statusNodes[0].textContent, "", `${answer} shows no nagging message`);
  }
  const throwing = load({ permission: "default", requestPermission: new Error("prompt failed") });
  await throwing.tap();
  assert.equal(throwing.requests.length, 0);
});

test("no prompt where it would be wrong: signed out, app hidden, already decided, or asked three times before", async () => {
  const signedOut = load({ userMode: false, requestPermission: "denied" });
  await signedOut.tap();
  assert.equal(signedOut.calls.requestPermission, 0); assert.equal(signedOut.listeners.length, 1, "keeps waiting for a signed-in tap");
  signedOut.ui.userMode = true; await signedOut.tap();
  assert.equal(signedOut.calls.requestPermission, 1, "the first signed-in tap prompts");

  const hidden = load({ appHidden: true, requestPermission: "denied" }); await hidden.tap();
  assert.equal(hidden.calls.requestPermission, 0);
  for (const permission of ["granted", "denied"]) { const decided = load({ permission, requestPermission: "granted" }); await decided.tap(); assert.equal(decided.calls.requestPermission, 0, permission); }
  const capped = load({ attempts: 3, requestPermission: "denied" }); await capped.tap();
  assert.equal(capped.calls.requestPermission, 0, "three earlier prompts is the limit");
  const twice = load({ attempts: 2, requestPermission: "default" }); await twice.tap();
  assert.equal(twice.calls.requestPermission, 1); assert.equal(twice.store.agrinexusAlertPromptAttempts, "3", "each prompt is counted");
  const unsupported = load({ supported: false }); await unsupported.tap();
  assert.equal(unsupported.requests.length, 0, "unsupported browsers never register anything");
});

test("subscribing reports success only after both registration calls, and the reason for every failure", async () => {
  const ok = load({ permission: "granted" });
  assert.deepEqual(JSON.parse(JSON.stringify(await ok.sandbox.subscribe())), { ok: true, message: "" });
  assert.deepEqual(ok.requests, [["/api/nexus/runtime/devices", "POST"], ["/api/nexus/runtime/devices/device-1/push", "POST"]]);
  const unsupported = await load({ supported: false }).sandbox.subscribe();
  assert.equal(unsupported.ok, false); assert.match(unsupported.message, /cannot receive push/);
  const noKey = await load({ permission: "granted", key: "" }).sandbox.subscribe();
  assert.equal(noKey.ok, false); assert.match(noKey.message, /not configured on the server/);
  const notAllowed = await load({ permission: "default" }).sandbox.subscribe();
  assert.equal(notAllowed.ok, false); assert.match(notAllowed.message, /not allowed/);
  const refused = await load({ permission: "granted", subscribe: async () => { throw new Error("Registration failed - permission denied"); } }).sandbox.subscribe();
  assert.equal(refused.ok, false); assert.match(refused.message, /Registration failed - permission denied/);
});

test("a failed registration call is reported too, never claimed as success", async () => {
  const harness = load({ permission: "granted" });
  harness.sandbox.requestWithTimeout = async () => { throw new Error("Device registration rejected (403)"); };
  const result = await harness.sandbox.subscribe();
  assert.equal(result.ok, false); assert.match(result.message, /403/);
});

test("a permission refusal says what to do without claiming the session is a guest", async () => {
  const harness = load({ permission: "granted" });
  harness.sandbox.requestWithTimeout = async () => { throw new Error("Missing permission: devices:write"); };
  const result = await harness.sandbox.subscribe();
  assert.equal(result.ok, false);
  assert.match(result.message, /not allowed to register a device/);
  assert.match(result.message, /regular account/);
  assert.doesNotMatch(result.message, /guest|devices:write/i);
  const other = load({ permission: "granted" });
  other.sandbox.requestWithTimeout = async () => { throw new Error("Device registration rejected (500)"); };
  assert.match((await other.sandbox.subscribe()).message, /500/, "other failures keep their own reason");
});

test("both audio-only home variants still render the status line; load-time subscription stays silent", () => {
  const trueHome = app.slice(app.indexOf("function renderNexusTrueHome()"), app.indexOf("function renderNexusAudioCompanionExperience()"));
  const companion = app.slice(app.indexOf("function renderNexusAudioCompanionExperience()"), app.indexOf("function renderNexusMinimalConversationExperience()"));
  assert.match(trueHome, /\$\{renderNexusHomeAlertsControl\(\)\}/);
  assert.match(companion, /\$\{renderNexusHomeAlertsControl\(\)\}/);
  const onLoad = app.slice(app.indexOf("async function verifyLoadedBuildWithServer()"), app.indexOf("const expectedBuild", app.indexOf("async function verifyLoadedBuildWithServer()")));
  assert.match(onLoad, /\n\s+subscribeToNexusPushNotifications\(\);/);
  assert.doesNotMatch(onLoad, /await subscribeToNexusPushNotifications/, "returning users are re-registered silently on every load");
  const handler = app.slice(app.indexOf('if (kind === "notifications") {'), app.indexOf('if (kind === "location") {'));
  assert.match(handler, /await subscribeToNexusPushNotifications\(\)/, "the assistant-bar button still works and reports the outcome");
});

test("the top banner is hidden on the audio-only home only", () => {
  const rules = css.match(/[^{}]*header\.topbar[^{}]*\{\s*display:\s*none;\s*\}/g) || [];
  assert.ok(rules.some(text => /body\.user-mode\[data-nexus-genesis-mode="home"\]\s+#appView\s*>\s*header\.topbar/.test(text)), "scoped to user-mode home");
  assert.ok(!rules.some(text => !/data-nexus-genesis-mode="home"/.test(text)), "no unscoped rule hides the topbar elsewhere");
  assert.match(fs.readFileSync(path.join(__dirname, "../../public/index.html"), "utf8"), /<header class="topbar"/, "the banner element itself is unchanged");
});
