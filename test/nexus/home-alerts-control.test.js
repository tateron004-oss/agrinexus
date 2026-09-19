"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
const start = app.indexOf("function nexusLocalDeviceId()");
const end = app.indexOf("async function requestProductionMobilePermission(");
assert.ok(start > 0 && end > start, "the push helpers must stay extractable");

function load({ permission = "default", supported = true, key = "AAAA", subscribe, requests = [] } = {}) {
  const nodes = [];
  const sandbox = {
    window: supported ? { PushManager: {}, Notification: {} } : {},
    navigator: supported ? { serviceWorker: { ready: Promise.resolve({ pushManager: { getSubscription: async () => null, subscribe: subscribe || (async () => ({
      toJSON: () => ({ endpoint: "https://push.example/abc", keys: { p256dh: "k", auth: "a" } }) })) } }) } } : {},
    Notification: supported ? { permission } : undefined,
    nexusVapidPublicKey: key, localStorage: { getItem: () => "device-1", setItem() {} },
    requestWithTimeout: async (url, options) => { requests.push([url, options.method]); return {}; },
    escapeHtml: value => String(value), translateText: value => value, atob, Uint8Array, Array, String, Error,
    document: { querySelectorAll: () => nodes }
  };
  if (!supported) delete sandbox.Notification;
  vm.createContext(sandbox);
  vm.runInContext(`${app.slice(start, end)}\nthis.render = renderNexusHomeAlertsControl; this.subscribe = subscribeToNexusPushNotifications; this.setStatus = setNexusHomeAlertsStatus;`, sandbox);
  return { sandbox, requests, nodes };
}

test("home shows an Enable alerts button that uses the existing permission handler when permission is undecided", () => {
  const html = load({ permission: "default" }).sandbox.render();
  assert.match(html, /data-mobile-permission="notifications"/, "reuses the delegated click handler");
  assert.match(html, /data-nexus-home-alerts-button="true"/);
  assert.match(html, />Enable alerts</);
  assert.match(html, /role="status" aria-live="polite"/, "the outcome is announced");
});

test("home shows no dead button: none when unsupported or already granted, an explanation when blocked", () => {
  assert.equal(load({ supported: false }).sandbox.render(), "");
  assert.equal(load({ permission: "granted" }).sandbox.render(), "", "granted permission subscribes on load");
  const blocked = load({ permission: "denied" }).sandbox.render();
  assert.doesNotMatch(blocked, /<button/);
  assert.match(blocked, /blocked for this site/);
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
  assert.equal(refused.ok, false); assert.match(refused.message, /Registration failed - permission denied/, "the browser's own reason is shown, not swallowed");
});

test("a failed registration call is reported too, never claimed as success", async () => {
  const harness = load({ permission: "granted" });
  harness.sandbox.requestWithTimeout = async () => { throw new Error("Device registration rejected (403)"); };
  const result = await harness.sandbox.subscribe();
  assert.equal(result.ok, false); assert.match(result.message, /403/);
});

test("both audio-only home variants render the control, and the button reports what happened", () => {
  const trueHome = app.slice(app.indexOf("function renderNexusTrueHome()"), app.indexOf("function renderNexusAudioCompanionExperience()"));
  const companion = app.slice(app.indexOf("function renderNexusAudioCompanionExperience()"), app.indexOf("function renderNexusMinimalConversationExperience()"));
  assert.match(trueHome, /\$\{renderNexusHomeAlertsControl\(\)\}/);
  assert.match(companion, /\$\{renderNexusHomeAlertsControl\(\)\}/);
  const handler = app.slice(app.indexOf('if (kind === "notifications") {'), app.indexOf('if (kind === "location") {'));
  assert.match(handler, /await subscribeToNexusPushNotifications\(\)/, "waits for the real outcome");
  assert.match(handler, /Alerts could not be turned on: \$\{push\.message\}/);
  assert.match(handler, /setNexusHomeAlertsStatus\(outcome, \{ done: push\.ok \}\)/);
  assert.match(handler, /done: result === "denied"/, "a blocked permission removes the dead button");
});

test("the load-time subscription stays silent: it ignores the result", () => {
  const onLoad = app.slice(app.indexOf("async function verifyLoadedBuildWithServer()"), app.indexOf("const expectedBuild", app.indexOf("async function verifyLoadedBuildWithServer()")));
  assert.match(onLoad, /\n\s+subscribeToNexusPushNotifications\(\);/);
  assert.doesNotMatch(onLoad, /await subscribeToNexusPushNotifications/);
});

test("a guest or limited session is told to sign in instead of seeing a raw permission error", async () => {
  const harness = load({ permission: "granted" });
  harness.sandbox.requestWithTimeout = async () => { throw new Error("Missing permission: devices:write"); };
  const result = await harness.sandbox.subscribe();
  assert.equal(result.ok, false);
  assert.match(result.message, /guest or limited session/);
  assert.match(result.message, /sign in with your account/i);
  assert.doesNotMatch(result.message, /devices:write/);
  const other = load({ permission: "granted" });
  other.sandbox.requestWithTimeout = async () => { throw new Error("Device registration rejected (500)"); };
  assert.match((await other.sandbox.subscribe()).message, /500/, "other failures keep their own reason");
});
