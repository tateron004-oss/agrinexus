"use strict";

const { fetchTodayForecast } = require("./weather.js");
const { composeBrief, DEFAULT_TIME_ZONE, validTimeZone } = require("./compose.js");
const { isDueNow, localClock } = require("./schedule.js");
const { isFact } = require("../memory/profile-facts.js");

// What a person has told Kyro about themselves, by kind (name, location, ...). Never throws: with no memory nothing is known.
async function factsByKind(memory, { tenantId, userId }) {
  if (!memory?.profile) return {};
  try {
    const byKind = {};
    for (const row of [...(await memory.profile({ tenantId, userId }))].reverse()) if (isFact(row.content)) byKind[row.content.kind] = row.content.value;
    return byKind;
  } catch { return {}; }
}

// Composes a person's brief from what is real right now (the forecast for the town they told Kyro, and the reminders they have set),
// keeps their opt-in setting, and sends a due brief through the push path that reminders already use. Composing only reads; sending
// happens only for people who asked for it, at most once per local day.
function createBriefService({ notifications, settings = null, memory = null, devices = null, autonomyControl = null, logger = null, fetchImpl = globalThis.fetch, now = () => new Date() } = {}) {
  const composeFor = async ({ tenantId, userId, known = {}, timeZone = DEFAULT_TIME_ZONE }) => {
    const [forecast, rows] = await Promise.all([
      known.location ? fetchTodayForecast({ place: known.location, fetchImpl }) : Promise.resolve(null),
      notifications?.listReminders ? notifications.listReminders({ tenantId, userId, limit: 50 }).catch(() => []) : Promise.resolve([])
    ]);
    const reminders = (rows || []).map(row => ({ text: row?.content?.reminderText || row?.content?.body || "", scheduledAt: row?.scheduled_at }));
    return composeBrief({ name: known.name, forecast, reminders, now: now(), timeZone });
  };
  // Briefs already handled (sent, or nothing to say) by this process today, so a brief with nothing to say is not recomputed every minute.
  const handledToday = new Set();

  return {
    compose: composeFor,

    // Turn a person's brief on (or change its time). Also reports what they still need for it to be useful.
    async schedule({ tenantId, userId, timeOfDay, timeZone }) {
      if (!settings?.set) throw new Error("Brief settings are unavailable.");
      const zone = validTimeZone(timeZone);
      const saved = await settings.set({ tenantId, userId, timeOfDay, timeZone: zone });
      const known = await factsByKind(memory, { tenantId, userId });
      let pushable = true;
      try { pushable = devices?.listPushable ? (await devices.listPushable({ tenantId, userId })).length > 0 : true; } catch { pushable = true; }
      return { ...saved, location: known.location || "", hasPushDevice: pushable };
    },
    async stop({ tenantId, userId }) { return settings?.stop ? settings.stop({ tenantId, userId }) : 0; },
    async status({ tenantId, userId }) { return settings?.get ? settings.get({ tenantId, userId }) : null; },

    // The worker's sweep: for every person whose brief is on and whose chosen local time has arrived today, send one push.
    async sendDue({ at = now() } = {}) {
      const result = { checked: 0, sent: 0, skippedPaused: 0, skippedNoDevice: 0, skippedNothingToSay: 0 };
      if (!settings?.listActive || !notifications?.enqueue) return result;
      const paused = new Map();
      for (const setting of await settings.listActive({ limit: 500 })) {
        result.checked += 1;
        if (!isDueNow({ timeOfDay: setting.timeOfDay, timeZone: setting.timeZone, now: at })) continue;
        const clock = localClock(at, setting.timeZone);
        const key = `brief:${setting.userId}:${clock.day}`;
        if (handledToday.has(key)) continue;
        if (!paused.has(setting.tenantId)) paused.set(setting.tenantId, autonomyControl?.isPaused ? await autonomyControl.isPaused({ tenantId: setting.tenantId }).catch(() => false) : false);
        if (paused.get(setting.tenantId)) { result.skippedPaused += 1; continue; }
        if (notifications.existsByKey && await notifications.existsByKey({ tenantId: setting.tenantId, idempotencyKey: key })) { handledToday.add(key); continue; }
        let devicesFound = [];
        try { devicesFound = devices?.listPushable ? await devices.listPushable({ tenantId: setting.tenantId, userId: setting.userId }) : [{}]; } catch { devicesFound = []; }
        if (!devicesFound.length) { result.skippedNoDevice += 1; continue; }
        const known = await factsByKind(memory, { tenantId: setting.tenantId, userId: setting.userId });
        const text = await composeFor({ tenantId: setting.tenantId, userId: setting.userId, known, timeZone: setting.timeZone });
        handledToday.add(key);
        if (!text) { result.skippedNothingToSay += 1; continue; }
        await notifications.enqueue({ tenantId: setting.tenantId, userId: setting.userId, channel: "push", scheduledAt: at, idempotencyKey: key,
          content: { title: "Your morning brief", body: text, kind: "daily_brief" } });
        logger?.info?.("brief.queued", { userId: setting.userId, day: clock.day });
        result.sent += 1;
      }
      if (handledToday.size > 5000) handledToday.clear();
      return result;
    }
  };
}

module.exports = Object.freeze({ createBriefService, factsByKind });
