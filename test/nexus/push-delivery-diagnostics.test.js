"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { createWebPushProvider } = require("../../nexus/notifications/webpush-provider.js");
const { createHandlers } = require("../../nexus/workers/handlers.js");
const { DeviceTokenVault } = require("../../nexus/security/device-token-vault.js");
const { extractAssistantReminderTask } = require("../../nexus/reminders/time-phrase.js");

// 2026-09-19: a real push reminder was processed by the worker and never arrived, and nothing
// anywhere said why: the worker did not log delivery outcomes and the provider kept only
// error.message, discarding the push service's statusCode/body. These pin the fix.
const env = { VAPID_PUBLIC_KEY: "pub", VAPID_PRIVATE_KEY: "priv", VAPID_SUBJECT: "mailto:test@agrinexus.org" };
function fixture() {
  const tokens = new DeviceTokenVault("test-secret");
  const ciphertext = tokens.encrypt({ p256dh: "k", auth: "a" }, "tenant-1:user-1:device-1");
  const devices = { listPushable: async () => [{ device_id: "device-1", push_endpoint: "https://push.example/ep", push_key_ciphertext: ciphertext }], revoke: async () => true };
  const notification = { notification_id: "ntf_1", tenant_id: "tenant-1", user_id: "user-1", content: { title: "Nexus reminder", body: "x" } };
  return { tokens, devices, notification };
}

test("a rejected send reports the push service's status and reason, and that it failed at the send stage", async () => {
  const { tokens, devices, notification } = fixture();
  const webPush = { sendNotification: async () => { throw Object.assign(new Error("Received unexpected response code"), { statusCode: 403, body: "the VAPID credentials in the authorization header do not correspond to the credentials used to create the subscriptions." }); } };
  const provider = createWebPushProvider({ env, devices, deviceTokens: tokens, webPush });
  await assert.rejects(() => provider(notification), error => {
    assert.match(error.message, /stage send/); assert.match(error.message, /status 403/); assert.match(error.message, /VAPID credentials/);
    assert.equal(error.message.includes("priv"), false, "no key material in the message");
    return true;
  });
});

test("a token-vault failure is reported as the decrypt stage, so a mismatched NEXUS_DEVICE_TOKEN_KEY is distinguishable", async () => {
  const { devices, notification } = fixture();
  const wrongKey = new DeviceTokenVault("a-different-secret");
  const provider = createWebPushProvider({ env, devices, deviceTokens: wrongKey, webPush: { sendNotification: async () => { throw new Error("must not send"); } } });
  await assert.rejects(() => provider(notification), /stage decrypt/);
});

test("no registered device keeps its own clear error", async () => {
  const { tokens, notification } = fixture();
  const provider = createWebPushProvider({ env, devices: { listPushable: async () => [], revoke: async () => true }, deviceTokens: tokens, webPush: {} });
  await assert.rejects(() => provider(notification), error => error.code === "webpush_subscription_missing");
});

function delivery(providers) {
  const rows = { delivered: [], failed: [] };
  const runtime = { notifications: { claim: async () => [{ notification_id: "ntf_9", tenant_id: "t", channel: "push", content: { title: "x" } }],
    delivered: async id => { rows.delivered.push(id); }, failed: async (id, error) => { rows.failed.push({ id, error }); return { state: "failed" }; } },
    tasks: { get: async () => null }, engine: {} };
  const logs = []; const logger = { info: (m, f) => logs.push(["info", m, f]), warn: (m, f) => logs.push(["warn", m, f]), error: (m, f) => logs.push(["error", m, f]) };
  return { rows, logs, handlers: createHandlers({ runtime, deliveryProviders: providers, logger }) };
}
const run = handlers => handlers["notifications.deliver"]({ job: { payload: {} }, heartbeat: async () => {} });

test("the worker logs every delivery outcome with its code and detail", async () => {
  const failing = delivery({ push: async () => { throw Object.assign(new Error("Push delivery failed (stage send; status 403; bad jwt)"), { code: "webpush_delivery_failed" }); } });
  await run(failing.handlers);
  const [level, message, fields] = failing.logs[0];
  assert.deepEqual([level, message], ["warn", "notifications.delivery_failed"]);
  assert.equal(fields.notificationId, "ntf_9"); assert.equal(fields.code, "webpush_delivery_failed"); assert.match(fields.detail, /status 403/);
  assert.equal(failing.rows.failed.length, 1, "the failure is still recorded");

  const ok = delivery({ push: async () => ({ verified: true, method: "webpush_delivery" }) });
  await run(ok.handlers);
  assert.deepEqual(ok.logs[0].slice(0, 2), ["info", "notifications.delivered"]);

  const missing = delivery({});
  await run(missing.handlers);
  assert.deepEqual(missing.logs[0].slice(0, 2), ["warn", "notifications.delivery_unavailable"]);
  assert.equal(missing.logs[0][2].code, "delivery_provider_unavailable", "a worker with no VAPID keys says so");
});

test("the handlers still work without a logger", async () => {
  const runtime = { notifications: { claim: async () => [{ notification_id: "n", channel: "push", content: {} }], delivered: async () => {}, failed: async () => ({ state: "failed" }) }, tasks: { get: async () => null }, engine: {} };
  const handlers = createHandlers({ runtime, deliveryProviders: { push: async () => ({ verified: true }) } });
  const result = await run(handlers);
  assert.equal(result.outcomes[0].delivered, true);
});

test("reminder text has no stray space before punctuation after the time phrase is removed", () => {
  assert.equal(extractAssistantReminderTask("Remind me to test push in 2 minutes."), "test push.");
  assert.equal(extractAssistantReminderTask("Remind me to call Ron tomorrow!"), "call Ron!");
  assert.equal(extractAssistantReminderTask("Remind me to check my crops in 30 minutes"), "check my crops");
  assert.equal(extractAssistantReminderTask(""), "follow up");
});
