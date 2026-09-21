"use strict";

const { fetchAlertForecast } = require("./forecast.js");
const { evaluateForecast } = require("./rules.js");
const { localClock } = require("../brief/schedule.js");
const { validTimeZone, DEFAULT_TIME_ZONE } = require("../brief/compose.js");
const { factsByKind } = require("../brief/service.js");

// Weather alerts a person asked for: the worker's sweep looks at the forecast for the town they told Kyro and pushes a warning when
// something serious is coming (see rules.js). Reading the forecast changes nothing; a push goes only to people who opted in, once per
// kind of alert per day (the idempotency key), never overnight in their own time zone, and never while autonomy is paused.
const QUIET_FROM_MINUTES = 22 * 60;
const QUIET_UNTIL_MINUTES = 5 * 60;
const MAX_PUSHES_PER_PERSON_PER_SWEEP = 2;

function createWeatherAlertService({ notifications, settings = null, memory = null, devices = null, autonomyControl = null, logger = null, fetchImpl = globalThis.fetch, now = () => new Date() } = {}) {
  return {
    async enable({ tenantId, userId, timeZone }) {
      if (!settings?.set) throw new Error("Weather alert settings are unavailable.");
      const saved = await settings.set({ tenantId, userId, timeZone: validTimeZone(timeZone || DEFAULT_TIME_ZONE) });
      const known = await factsByKind(memory, { tenantId, userId });
      let pushable = true;
      try { pushable = devices?.listPushable ? (await devices.listPushable({ tenantId, userId })).length > 0 : true; } catch { pushable = true; }
      return { ...saved, location: known.location || "", hasPushDevice: pushable };
    },
    async disable({ tenantId, userId }) { return settings?.stop ? settings.stop({ tenantId, userId }) : 0; },
    async status({ tenantId, userId }) { return settings?.get ? settings.get({ tenantId, userId }) : null; },

    // One pass over everyone who has alerts on. Forecasts are fetched once per town per pass, however many people share it.
    async sendDue({ at = now() } = {}) {
      const result = { checked: 0, sent: 0, skippedPaused: 0, skippedNoDevice: 0, skippedNoTown: 0, skippedQuiet: 0, skippedNoForecast: 0 };
      if (!settings?.listActive || !notifications?.enqueue) return result;
      const paused = new Map(); const forecasts = new Map();
      for (const setting of await settings.listActive({ limit: 500 })) {
        result.checked += 1;
        const zone = validTimeZone(setting.timeZone || DEFAULT_TIME_ZONE);
        const clock = localClock(at, zone);
        if (clock.minutes >= QUIET_FROM_MINUTES || clock.minutes < QUIET_UNTIL_MINUTES) { result.skippedQuiet += 1; continue; }
        if (!paused.has(setting.tenantId)) paused.set(setting.tenantId, autonomyControl?.isPaused ? await autonomyControl.isPaused({ tenantId: setting.tenantId }).catch(() => false) : false);
        if (paused.get(setting.tenantId)) { result.skippedPaused += 1; continue; }
        const known = await factsByKind(memory, { tenantId: setting.tenantId, userId: setting.userId });
        if (!known.location) { result.skippedNoTown += 1; continue; }
        const townKey = known.location.trim().toLowerCase();
        if (!forecasts.has(townKey)) forecasts.set(townKey, fetchAlertForecast({ place: known.location, fetchImpl }));
        const forecast = await forecasts.get(townKey);
        if (!forecast) { result.skippedNoForecast += 1; continue; }
        // The forecast's own dates are the place's local days; the first is "today" there.
        const alerts = evaluateForecast(forecast, forecast.days[0]?.date);
        if (!alerts.length) continue;
        let devicesFound = [];
        try { devicesFound = devices?.listPushable ? await devices.listPushable({ tenantId: setting.tenantId, userId: setting.userId }) : [{}]; } catch { devicesFound = []; }
        if (!devicesFound.length) { result.skippedNoDevice += 1; continue; }
        let sentNow = 0;
        for (const alert of alerts) {
          if (sentNow >= MAX_PUSHES_PER_PERSON_PER_SWEEP) break;
          const key = `alert:${setting.userId}:${alert.kind}:${alert.date}`;
          if (notifications.existsByKey && await notifications.existsByKey({ tenantId: setting.tenantId, idempotencyKey: key })) continue;
          await notifications.enqueue({ tenantId: setting.tenantId, userId: setting.userId, channel: "push", scheduledAt: at, idempotencyKey: key,
            content: { title: "Weather alert", body: alert.text, kind: "weather_alert" } });
          logger?.info?.("weather_alert.queued", { userId: setting.userId, kind: alert.kind, day: alert.date });
          sentNow += 1; result.sent += 1;
        }
      }
      return result;
    }
  };
}

module.exports = Object.freeze({ createWeatherAlertService, QUIET_FROM_MINUTES, QUIET_UNTIL_MINUTES, MAX_PUSHES_PER_PERSON_PER_SWEEP });
