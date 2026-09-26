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

// Found live: with valid VAPID keys but no device-token vault (NEXUS_DEVICE_TOKEN_KEY missing -- runtime.deviceTokens
// is then null), this used to THROW instead of returning null. nexus/workers/process.js's main() calls
// createWebPushProvider() with no try/catch, so that throw took down the ENTIRE worker process (every scheduled
// sweep, not just push) via main()'s top-level .catch()+process.exit(1) -- a single missing/rotated env var
// crash-looping all background automation for every tenant. Must degrade the same way a missing VAPID key already
// does: push disabled, everything else keeps working.
test("returns null, does not throw, when VAPID keys are configured but the device vault is not", () => {
  assert.equal(createWebPushProvider({ env, devices: {}, deviceTokens: null }), null);
  assert.equal(createWebPushProvider({ env, devices: null, deviceTokens: {} }), null);
  assert.equal(createWebPushProvider({ env, devices: {}, deviceTokens: {} }), null, "deviceTokens with no decrypt method is not a usable vault either");
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
