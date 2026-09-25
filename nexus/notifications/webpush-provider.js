"use strict";

// Fail-closed like createNotificationProviders() -- no configured VAPID
// keypair means no "push" delivery provider is registered at all, rather
// than a provider that silently no-ops or fabricates a delivered receipt.
function createWebPushProvider({ env = process.env, devices, deviceTokens, webPush = require("web-push") } = {}) {
  const { VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY, VAPID_SUBJECT } = env;
  if (!VAPID_PUBLIC_KEY || !VAPID_PRIVATE_KEY || !VAPID_SUBJECT) return null;
  if (!devices?.listPushable || !deviceTokens?.decrypt) throw new Error("Push delivery requires a device repository and token vault.");

  return async function pushProvider(notification) {
    const targets = await devices.listPushable({ tenantId: notification.tenant_id, userId: notification.user_id });
    if (!targets.length) throw coded("webpush_subscription_missing", "No registered push subscription for this user.");
    const payload = JSON.stringify({
      receiptId: notification.notification_id,
      title: notification.content?.title || "Nexus reminder",
      body: notification.content?.body || notification.content?.reminderText || "",
      url: notification.content?.url || "/",
      tag: notification.notification_id
    });
    // Found live (delivery-pipeline audit): devicesDelivered was hardcoded
    // to targets.length regardless of how many sends actually succeeded --
    // a user with 2 devices where only 1 received the push still got a
    // receipt claiming both did, with the second device's real failure
    // (lastError) simply discarded once the first one succeeded. The
    // caller (nexus/workers/handlers.js) trusts `verified: true` alone to
    // mark the whole notification "delivered," so a real per-device miss
    // had no log line, no retry, and no trace anywhere.
    let deliveredCount = 0;
    let lastError = null;
    let stage = "decrypt";
    const failedDeviceIds = [];
    for (const device of targets) {
      stage = "decrypt";
      try {
        const keys = deviceTokens.decrypt(device.push_key_ciphertext, `${notification.tenant_id}:${notification.user_id}:${device.device_id}`);
        const subscription = { endpoint: device.push_endpoint, keys: { p256dh: keys.p256dh, auth: keys.auth } };
        stage = "send";
        await webPush.sendNotification(subscription, payload, {
          vapidDetails: { subject: VAPID_SUBJECT, publicKey: VAPID_PUBLIC_KEY, privateKey: VAPID_PRIVATE_KEY },
          TTL: 300
        });
        deliveredCount += 1;
      } catch (error) {
        // 404/410 means the browser/OS revoked the subscription -- clear it
        // so future reminders don't keep failing against a dead endpoint.
        if (error?.statusCode === 404 || error?.statusCode === 410) {
          await devices.revoke({ tenantId: notification.tenant_id, userId: notification.user_id, deviceId: device.device_id }).catch(() => {});
        }
        lastError = error;
        failedDeviceIds.push(device.device_id);
      }
    }
    if (deliveredCount === 0) {
      // web-push's WebPushError carries the push service's answer in statusCode/body ("invalid JWT",
      // "VAPID credentials do not correspond", ...). Keeping only .message hid why every send failed.
      const status = lastError?.statusCode ? `status ${lastError.statusCode}` : "";
      const reason = String(lastError?.body || lastError?.message || "").replace(/\s+/g, " ").slice(0, 240);
      const detail = [`stage ${stage}`, status, reason].filter(Boolean).join("; ");
      throw coded(lastError?.code || "webpush_delivery_failed", lastError ? `Push delivery failed (${detail})` : "No push subscription could be delivered to.");
    }
    return {
      verified: true,
      method: "webpush_delivery",
      devicesDelivered: deliveredCount,
      devicesAttempted: targets.length,
      devicesFailed: failedDeviceIds.length ? failedDeviceIds : undefined
    };
  };
}

function coded(code, message) { const error = new Error(message); error.code = code; return error; }

module.exports = Object.freeze({ createWebPushProvider });
