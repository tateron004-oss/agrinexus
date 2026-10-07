"use strict";

// In-memory stand-ins for the two reminder stores (the delivery queue and the repeating-reminder rules), with the same owner scoping as the real tables. They exist so the older
// command route can be exercised end to end without a database: a test or a local development server opts in with NEXUS_TEST_REMINDER_STORE=memory (ignored when NODE_ENV is
// production). Nothing in them is ever delivered. Without that switch and without a database, reminders are NOT saved and the person is told so.

function createMemoryNotifications() {
  const rows = []; let counter = 0;
  const own = (row, tenantId, userId) => row.tenant_id === tenantId && row.user_id === userId;
  return {
    rows,
    async enqueue(item) {
      if (!item.tenantId || !item.userId || !item.channel || !item.idempotencyKey) throw new Error("Notification tenant, user, channel, and idempotency key are required.");
      const existing = rows.find(row => row.tenant_id === item.tenantId && row.idempotency_key === item.idempotencyKey);
      if (existing) return existing;
      counter += 1;
      const row = { notification_id: `ntf_mem_${counter}`, tenant_id: item.tenantId, user_id: item.userId, channel: item.channel, content: item.content || {}, scheduled_at: item.scheduledAt || new Date(), created_at: new Date(Date.now() + counter), state: "queued", idempotency_key: item.idempotencyKey };
      rows.push(row); return row;
    },
    async listReminders({ tenantId, userId, limit = 50 }) {
      return rows.filter(row => own(row, tenantId, userId) && row.state === "queued" && row.content?.reminderText).sort((a, b) => new Date(a.scheduled_at) - new Date(b.scheduled_at) || a.created_at - b.created_at).slice(0, limit);
    },
    async cancelReminder({ tenantId, userId, notificationId }) {
      const row = rows.find(item => item.notification_id === notificationId && own(item, tenantId, userId) && item.state === "queued" && item.content?.reminderText);
      if (!row) return null; row.state = "cancelled"; return row;
    },
    async existsByKey({ tenantId, idempotencyKey }) { return rows.some(row => row.tenant_id === tenantId && row.idempotency_key === idempotencyKey); }
  };
}

function createMemoryRepeatStore() {
  const rows = []; let counter = 0;
  const mine = (tenantId, userId) => rows.filter(row => row.tenantId === tenantId && row.userId === userId);
  return {
    rows,
    async add({ tenantId, userId, task, timeOfDay, days, timeZone, timesOfDay = null, hourly = null }) {
      const { anchor, ...plain } = days && typeof days === "object" && !Array.isArray(days) ? days : { value: days };
      const same = mine(tenantId, userId).find(row => row.task.toLowerCase() === task.toLowerCase() && row.timeOfDay === timeOfDay && JSON.stringify(row.sameKey) === JSON.stringify(plain));
      if (same) return { duplicate: true, scheduleId: same.scheduleId };
      if (mine(tenantId, userId).length >= 20) return { capped: true };
      counter += 1;
      const row = { scheduleId: `sch_mem_${counter}`, tenantId, userId, task, timeOfDay, days, timeZone, ...(timesOfDay && timesOfDay.length > 1 ? { timesOfDay } : {}), ...(hourly ? { hourly } : {}), createdAt: new Date(Date.now() + counter).toISOString(), sameKey: plain };
      rows.push(row); return { scheduleId: row.scheduleId };
    },
    async list({ tenantId, userId }) { return mine(tenantId, userId); },
    async cancel({ tenantId, userId, scheduleId }) { const at = rows.findIndex(row => row.scheduleId === scheduleId && row.tenantId === tenantId && row.userId === userId); if (at < 0) return false; rows.splice(at, 1); return true; },
    async cancelAll({ tenantId, userId }) { const own = mine(tenantId, userId); for (const row of own) rows.splice(rows.indexOf(row), 1); return own.length; },
    async listActive() { return rows.slice(); }
  };
}

module.exports = Object.freeze({ createMemoryNotifications, createMemoryRepeatStore });
