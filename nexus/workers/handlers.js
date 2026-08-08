"use strict";

function createHandlers({ runtime, deliveryProviders = {} }) {
  if (!runtime) throw new Error("The authoritative runtime is required.");
  return Object.freeze({
    "acceptance.canary": async ({ job }) => ({ accepted: true, releaseSha: process.env.RENDER_GIT_COMMIT || process.env.GIT_SHA || "development",
      nonce: required(job.payload?.nonce, "Acceptance canary nonce") }),
    "schedules.dispatch": async ({ job }) => ({ dispatched: await runtime.schedules.dispatchDue({ jobs: runtime.jobs,
      limit: job.payload?.limit || 100 }) }),
    "notifications.deliver": async ({ job, heartbeat }) => {
      const claimed = await runtime.notifications.claim(job.payload?.limit || 25);
      const outcomes = [];
      for (const notification of claimed) {
        await heartbeat();
        const provider = deliveryProviders[notification.channel];
        if (typeof provider !== "function") {
          await runtime.notifications.failed(notification.notification_id, { code: "delivery_provider_unavailable",
            message: `No ${notification.channel} delivery provider is configured.` });
          outcomes.push({ notificationId: notification.notification_id, delivered: false, code: "delivery_provider_unavailable" });
          continue;
        }
        try {
          const receipt = await provider(notification);
          if (!receipt?.verified) throw Object.assign(new Error("Delivery provider returned no verified receipt."), { code: "delivery_unverified" });
          await runtime.notifications.delivered(notification.notification_id);
          outcomes.push({ notificationId: notification.notification_id, delivered: true, receipt });
        } catch (error) {
          await runtime.notifications.failed(notification.notification_id, { code: error.code || "delivery_failed", message: error.message });
          outcomes.push({ notificationId: notification.notification_id, delivered: false, code: error.code || "delivery_failed" });
        }
      }
      return { outcomes };
    },
    "retention.sweep": async ({ job }) => ({ purged: await runtime.dataLifecycle.purgeExpired({ limit: job.payload?.limit || 100 }) }),
    "deletion.execute": async ({ job }) => runtime.dataLifecycle.executeDeletion({ tenantId: job.tenant_id,
      requestId: required(job.payload?.requestId, "Deletion request ID") })
  });
}

function required(value, label) { if (!value) throw new Error(`${label} is required.`); return value; }

module.exports = Object.freeze({ createHandlers });
