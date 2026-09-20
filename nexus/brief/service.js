"use strict";

const { fetchTodayForecast } = require("./weather.js");
const { composeBrief, DEFAULT_TIME_ZONE } = require("./compose.js");

// Composes a person's brief from what is real right now: the forecast for the town they told Kyro, and the reminders they have set.
// It only reads. Sending anything on a schedule is a separate, opt-in step.
function createBriefService({ notifications, fetchImpl = globalThis.fetch, now = () => new Date() } = {}) {
  return {
    // known: { name, location } from what the person has told Kyro. Returns the brief text, or null when there is nothing to say.
    async compose({ tenantId, userId, known = {}, timeZone = DEFAULT_TIME_ZONE }) {
      const [forecast, rows] = await Promise.all([
        known.location ? fetchTodayForecast({ place: known.location, fetchImpl }) : Promise.resolve(null),
        notifications?.listReminders ? notifications.listReminders({ tenantId, userId, limit: 50 }).catch(() => []) : Promise.resolve([])
      ]);
      const reminders = (rows || []).map(row => ({ text: row?.content?.reminderText || row?.content?.body || "", scheduledAt: row?.scheduled_at }));
      return composeBrief({ name: known.name, forecast, reminders, now: now(), timeZone });
    }
  };
}

module.exports = Object.freeze({ createBriefService });
