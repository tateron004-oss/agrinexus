"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { createWebPushProvider } = require("../../nexus/notifications/webpush-provider.js");
const { DeviceTokenVault } = require("../../nexus/security/device-token-vault.js");

const env = { VAPID_PUBLIC_KEY: "pub", VAPID_PRIVATE_KEY: "priv", VAPID_SUBJECT: "mailto:test@agrinexus.org" };

test("returns null (no provider registered) when VAPID keys aren't configured -- fail closed", () => {
  assert.equal(createWebPushProvider({ env: {}, devices: {}, deviceTokens: {} }), null);
  assert.equal(createWebPushProvider({ env: { VAPID_PUBLIC_KEY: "pub" }, devices: {}, deviceTokens: {} }), null);
});

function fixture() {
  const tokens = new DeviceTokenVault("test-secret");
  const notification = {
    notification_id: "ntf_1", tenant_id: "tenant-1", user_id: "user-1",
    content: { title: "Nexus reminder", body: "check irrigation", reminderText: "check irrigation" }
  };
  const ciphertext = tokens.encrypt({ p256dh: "public-key", auth: "auth-secret" }, "tenant-1:user-1:device-1");
  const devices = {
    listPushable: async () => [{ device_id: "device-1", push_provider: "webpush", push_endpoint: "https://push.example/ep-1", push_key_ciphertext: ciphertext }],
    revoke: async () => true
  };
  return { tokens, notification, devices, ciphertext };
}

test("delivers via web-push with the correct subscription/payload/vapid shape", async () => {
  const { devices, notification, tokens } = fixture();
  const calls = [];
  const webPush = { sendNotification: async (subscription, payload, options) => { calls.push({ subscription, payload, options }); } };
  const provider = createWebPushProvider({ env, devices, deviceTokens: tokens, webPush });
  const result = await provider(notification);

  assert.equal(result.verified, true);
  assert.equal(calls.length, 1);
  assert.deepEqual(calls[0].subscription, { endpoint: "https://push.example/ep-1", keys: { p256dh: "public-key", auth: "auth-secret" } });
  const payload = JSON.parse(calls[0].payload);
  assert.equal(payload.receiptId, "ntf_1");
  assert.equal(payload.body, "check irrigation");
  assert.deepEqual(calls[0].options.vapidDetails, { subject: env.VAPID_SUBJECT, publicKey: env.VAPID_PUBLIC_KEY, privateKey: env.VAPID_PRIVATE_KEY });
});

test("a 410/404 response revokes the stale subscription", async () => {
  const { devices, notification, tokens } = fixture();
  let revoked = null;
  devices.revoke = async input => { revoked = input; return true; };
  const webPush = { sendNotification: async () => { throw Object.assign(new Error("gone"), { statusCode: 410 }); } };
  const provider = createWebPushProvider({ env, devices, deviceTokens: tokens, webPush });
  await assert.rejects(() => provider(notification));
  assert.deepEqual(revoked, { tenantId: "tenant-1", userId: "user-1", deviceId: "device-1" });
});

test("a non-expiry delivery failure throws (so the job handler can mark it failed/retryable) instead of being swallowed", async () => {
  const { devices, notification, tokens } = fixture();
  const webPush = { sendNotification: async () => { throw new Error("network error"); } };
  const provider = createWebPushProvider({ env, devices, deviceTokens: tokens, webPush });
  await assert.rejects(() => provider(notification), /No push subscription could be delivered to|network error/);
});

test("no registered device throws a clear error", async () => {
  const { notification, tokens } = fixture();
  const devices = { listPushable: async () => [] };
  const provider = createWebPushProvider({ env, devices, deviceTokens: tokens, webPush: { sendNotification: async () => {} } });
  await assert.rejects(() => provider(notification), error => error.code === "webpush_subscription_missing");
});

// Found live (delivery-pipeline audit): devicesDelivered was hardcoded to
// targets.length regardless of how many sends actually succeeded -- a user
// with 2 devices where only 1 received the push still got a receipt
// claiming both did, and the second device's real failure was silently
// discarded once the first one succeeded (lastError only ever surfaced when
// EVERY device failed).
test("a multi-device fan-out reports the real per-device outcome, not the total device count, when one device fails", async () => {
  const { notification, tokens } = fixture();
  const ciphertext1 = tokens.encrypt({ p256dh: "pub-1", auth: "auth-1" }, "tenant-1:user-1:device-1");
  const ciphertext2 = tokens.encrypt({ p256dh: "pub-2", auth: "auth-2" }, "tenant-1:user-1:device-2");
  const devices = {
    listPushable: async () => [
      { device_id: "device-1", push_provider: "webpush", push_endpoint: "https://push.example/ep-1", push_key_ciphertext: ciphertext1 },
      { device_id: "device-2", push_provider: "webpush", push_endpoint: "https://push.example/ep-2", push_key_ciphertext: ciphertext2 }
    ],
    revoke: async () => true
  };
  const webPush = {
    sendNotification: async subscription => {
      if (subscription.endpoint.endsWith("ep-2")) throw Object.assign(new Error("connection reset"), { statusCode: 500 });
    }
  };
  const provider = createWebPushProvider({ env, devices, deviceTokens: tokens, webPush });
  const result = await provider(notification);

  assert.equal(result.verified, true, "reaching at least one device is still a real success");
  assert.equal(result.devicesDelivered, 1, "must report the real number of devices that actually received the push, not the total attempted");
  assert.equal(result.devicesAttempted, 2);
  assert.deepEqual(result.devicesFailed, ["device-2"], "the failing device must be identifiable, not silently discarded");
});

test("a multi-device fan-out where every device succeeds reports no failures", async () => {
  const { notification, tokens } = fixture();
  const ciphertext1 = tokens.encrypt({ p256dh: "pub-1", auth: "auth-1" }, "tenant-1:user-1:device-1");
  const ciphertext2 = tokens.encrypt({ p256dh: "pub-2", auth: "auth-2" }, "tenant-1:user-1:device-2");
  const devices = {
    listPushable: async () => [
      { device_id: "device-1", push_provider: "webpush", push_endpoint: "https://push.example/ep-1", push_key_ciphertext: ciphertext1 },
      { device_id: "device-2", push_provider: "webpush", push_endpoint: "https://push.example/ep-2", push_key_ciphertext: ciphertext2 }
    ]
  };
  const webPush = { sendNotification: async () => {} };
  const provider = createWebPushProvider({ env, devices, deviceTokens: tokens, webPush });
  const result = await provider(notification);
  assert.equal(result.devicesDelivered, 2);
  assert.equal(result.devicesAttempted, 2);
  assert.equal(result.devicesFailed, undefined);
});
