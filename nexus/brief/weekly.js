"use strict";

const crypto = require("node:crypto");
const { validTimeZone, DEFAULT_TIME_ZONE, localDay } = require("./compose.js");
const { isDueNow, formatTimeOfDay, parseTimeOfDay } = require("./schedule.js");
const { addDays, weekdayOf, describeDay } = require("../personal/dates.js");
const { factsByKind } = require("./service.js");

// A weekly summary a person asked for ("Send me a weekly summary on Sunday at 6pm"): what they logged on the farm this past week, what is
// still open on their to-do list, and what is coming up in the next seven days. Every line is something the person told Kyro; nothing is
// estimated. Opt-in, one push per person per week, same push path, pause switch and no-device rules as the morning brief.
const JOB_TYPE = "summary.weekly";
const PARKED = "2100-01-01T00:00:00.000Z";
const WEEKDAYS = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
const fmt = value => String(Number(Number(value).toFixed(1)));

// The setting: one active row per person in nexus_schedules (parked in 2100 so schedules.dispatch never runs it), like the brief's.
class WeeklySummarySettingsRepository {
  constructor(db) { if (!db?.query) throw new Error("A database runtime is required."); this.db = db; }
  async set({ tenantId, userId, dayOfWeek, timeOfDay, timeZone }) {
    if (!tenantId || !userId || !timeOfDay || !timeZone || !Number.isInteger(dayOfWeek) || dayOfWeek < 0 || dayOfWeek > 6) throw new Error("Tenant, user, weekday, time and time zone are required.");
    const cancelled = await this.db.query(`update nexus_schedules set state='cancelled',updated_at=now()
      where tenant_id=$1 and owner_id=$2 and job_type=$3 and state='active' returning schedule_id`, [tenantId, userId, JOB_TYPE]);
    const created = await this.db.query(`insert into nexus_schedules
      (schedule_id,tenant_id,owner_id,job_type,payload,cadence,timezone,next_run_at,state)
      values ($1,$2,$3,$4,$5,$6,$7,$8,'active') returning schedule_id`,
    [`sch_${crypto.randomUUID()}`, tenantId, userId, JOB_TYPE, { dayOfWeek, timeOfDay, timeZone }, { kind: "setting" }, timeZone, PARKED]);
    return { scheduleId: (created.rows || created)[0]?.schedule_id, dayOfWeek, timeOfDay, timeZone, replaced: (cancelled.rows || cancelled).length > 0 };
  }
  async stop({ tenantId, userId }) {
    const result = await this.db.query(`update nexus_schedules set state='cancelled',updated_at=now()
      where tenant_id=$1 and owner_id=$2 and job_type=$3 and state='active' returning schedule_id`, [tenantId, userId, JOB_TYPE]);
    return (result.rows || result).length;
  }
  async get({ tenantId, userId }) {
    const result = await this.db.query(`select schedule_id,payload,timezone from nexus_schedules
      where tenant_id=$1 and owner_id=$2 and job_type=$3 and state='active' order by created_at desc limit 1`, [tenantId, userId, JOB_TYPE]);
    const row = (result.rows || result)[0];
    return row ? { scheduleId: row.schedule_id, dayOfWeek: row.payload?.dayOfWeek, timeOfDay: row.payload?.timeOfDay, timeZone: row.payload?.timeZone || row.timezone } : null;
  }
  async listActive({ limit = 500 } = {}) {
    const result = await this.db.query(`select schedule_id,tenant_id,owner_id,payload,timezone from nexus_schedules
      where job_type=$1 and state='active' order by created_at limit $2`, [JOB_TYPE, Math.min(Math.max(Number(limit) || 500, 1), 2000)]);
    return (result.rows || result).map(row => ({ scheduleId: row.schedule_id, tenantId: row.tenant_id, userId: row.owner_id,
      dayOfWeek: row.payload?.dayOfWeek, timeOfDay: row.payload?.timeOfDay, timeZone: row.payload?.timeZone || row.timezone }));
  }
}

// The words of the summary, or null when there is nothing to say.
function composeWeekly({ name = "", farmRows = [], personalRows = [], reminders = [], today }) {
  const from = addDays(today, -6);
  const farm = (farmRows || []).map(row => row?.content).filter(item => item?.kind === "reading" && item.day >= from && item.day <= today);
  const personal = (personalRows || []).map(row => row?.content).filter(Boolean);
  const parts = [];
  const rain = farm.filter(item => item.metric === "rain");
  if (rain.length) { const days = new Set(rain.map(item => item.day)).size; parts.push(`Rain logged: ${fmt(rain.reduce((sum, item) => sum + item.value, 0))} mm over ${days} ${days === 1 ? "day" : "days"}.`); }
  const harvest = {};
  for (const item of farm.filter(entry => entry.metric === "harvest")) { harvest[item.crop] = harvest[item.crop] || {}; harvest[item.crop][item.unit] = (harvest[item.crop][item.unit] || 0) + item.value; }
  const harvested = Object.entries(harvest).map(([crop, sums]) => {
    const total = Object.entries(sums).map(([unit, value]) => `${fmt(value)}${unit === "kg" ? " kg" : unit === "egg" ? " eggs" : unit === "litres" ? " litres" : ` ${unit}${value === 1 ? "" : "s"}`}`).join(" and ");
    return crop === "eggs" ? total : `${crop} ${total}`;
  });
  if (harvested.length) parts.push(`Harvested: ${harvested.slice(0, 4).join("; ")}.`);
  const open = personal.filter(item => item.kind === "todo" && item.list === "todo" && !item.done).length;
  if (open) parts.push(`${open} open ${open === 1 ? "item" : "items"} on your to-do list.`);
  const upcoming = personal.filter(item => item.kind === "event" && item.day > today && item.day <= addDays(today, 7)).sort((a, b) => `${a.day} ${a.time || ""}`.localeCompare(`${b.day} ${b.time || ""}`));
  if (upcoming.length) parts.push(`Coming up: ${upcoming.slice(0, 3).map(event => `${describeDay(event.day, today)}${event.time ? ` at ${formatTimeOfDay(event.time)}` : ""}: ${event.text}`).join("; ")}${upcoming.length > 3 ? ` and ${upcoming.length - 3} more` : ""}.`);
  const due = (reminders || []).filter(item => item?.scheduledAt && !Number.isNaN(new Date(item.scheduledAt).getTime())).length;
  if (due) parts.push(`${due} ${due === 1 ? "reminder" : "reminders"} set for the days ahead.`);
  if (!parts.length) return null;
  const first = String(name || "").trim().split(/\s+/)[0];
  return [`Your week${first ? `, ${first}` : ""}:`, ...parts].join(" ");
}

function createWeeklySummaryService({ notifications, settings = null, memory = null, devices = null, autonomyControl = null, logger = null, now = () => new Date() } = {}) {
  const composeFor = async ({ tenantId, userId, known = {}, timeZone = DEFAULT_TIME_ZONE }) => {
    const [farmRows, personalRows, rows] = await Promise.all([
      memory?.listFarmEntries ? memory.listFarmEntries({ tenantId, userId }).catch(() => []) : Promise.resolve([]),
      memory?.listPersonalItems ? memory.listPersonalItems({ tenantId, userId }).catch(() => []) : Promise.resolve([]),
      notifications?.listReminders ? notifications.listReminders({ tenantId, userId, limit: 50 }).catch(() => []) : Promise.resolve([])
    ]);
    const reminders = (rows || []).map(row => ({ scheduledAt: row?.scheduled_at }));
    return composeWeekly({ name: known.name, farmRows, personalRows, reminders, today: localDay(now(), validTimeZone(timeZone)) });
  };
  const handled = new Set();
  return {
    compose: composeFor,
    async schedule({ tenantId, userId, dayOfWeek, timeOfDay, timeZone }) {
      if (!settings?.set) throw new Error("Weekly summary settings are unavailable.");
      const saved = await settings.set({ tenantId, userId, dayOfWeek, timeOfDay, timeZone: validTimeZone(timeZone || DEFAULT_TIME_ZONE) });
      let pushable = true;
      try { pushable = devices?.listPushable ? (await devices.listPushable({ tenantId, userId })).length > 0 : true; } catch { pushable = true; }
      return { ...saved, hasPushDevice: pushable };
    },
    async stop({ tenantId, userId }) { return settings?.stop ? settings.stop({ tenantId, userId }) : 0; },
    async status({ tenantId, userId }) { return settings?.get ? settings.get({ tenantId, userId }) : null; },

    // The worker's sweep: on the chosen weekday, once the chosen local time has arrived, send that person one summary.
    async sendDue({ at = now() } = {}) {
      const result = { checked: 0, sent: 0, skippedPaused: 0, skippedNoDevice: 0, skippedNothingToSay: 0 };
      if (!settings?.listActive || !notifications?.enqueue) return result;
      const paused = new Map();
      for (const setting of await settings.listActive({ limit: 500 })) {
        result.checked += 1;
        const zone = validTimeZone(setting.timeZone || DEFAULT_TIME_ZONE);
        const today = localDay(at, zone);
        if (weekdayOf(today) !== setting.dayOfWeek || !isDueNow({ timeOfDay: setting.timeOfDay, timeZone: zone, now: at })) continue;
        const key = `weekly:${setting.userId}:${today}`;
        if (handled.has(key)) continue;
        if (!paused.has(setting.tenantId)) paused.set(setting.tenantId, autonomyControl?.isPaused ? await autonomyControl.isPaused({ tenantId: setting.tenantId }).catch(() => false) : false);
        if (paused.get(setting.tenantId)) { result.skippedPaused += 1; continue; }
        if (notifications.existsByKey && await notifications.existsByKey({ tenantId: setting.tenantId, idempotencyKey: key })) { handled.add(key); continue; }
        let found = [];
        try { found = devices?.listPushable ? await devices.listPushable({ tenantId: setting.tenantId, userId: setting.userId }) : [{}]; } catch { found = []; }
        if (!found.length) { result.skippedNoDevice += 1; continue; }
        const known = await factsByKind(memory, { tenantId: setting.tenantId, userId: setting.userId });
        const text = await composeFor({ tenantId: setting.tenantId, userId: setting.userId, known, timeZone: zone });
        handled.add(key);
        if (!text) { result.skippedNothingToSay += 1; continue; }
        await notifications.enqueue({ tenantId: setting.tenantId, userId: setting.userId, channel: "push", scheduledAt: at, idempotencyKey: key,
          content: { title: "Your weekly summary", body: text, kind: "weekly_summary" } });
        logger?.info?.("weekly_summary.queued", { userId: setting.userId, day: today });
        result.sent += 1;
      }
      if (handled.size > 5000) handled.clear();
      return result;
    }
  };
}

// "Send me a weekly summary on Sunday at 6pm", "weekly summary every friday", "stop my weekly summary", "do I have a weekly summary?"
function parseWeeklyControl(text) {
  const t = String(text || "").toLowerCase().replace(/[’]/g, "'").replace(/[.!?]+$/g, "").replace(/\s+/g, " ").trim();
  if (!t || t.length > 120 || !/\b(?:weekly|week'?s?) (?:summary|report|recap|brief|update)\b|\bsummary of (?:my|the) week\b/.test(t)) return null;
  if (/^(?:please )?(?:stop|cancel|turn off|disable|end|remove|no more)\b/.test(t)) return { action: "stop" };
  if (/^(?:do i have|is my|when is my|when does my|what time is my|am i getting)\b/.test(t)) return { action: "status" };
  if (!/^(?:please )?(?:send|give|text|push|set up|start|turn on|enable|i want|i'd like|i would like|can you send|could you send|kyro,? send)\b/.test(t)) return null;
  const day = WEEKDAYS.find(name => new RegExp(`\\b${name}s?\\b`).test(t));
  const time = /\b(?:at|around|by)\s+(\d{1,2}(?:[:.]\d{2})?\s*(?:a\.?m\.?|p\.?m\.?)?)/.exec(t)?.[1];
  return { action: "schedule", dayOfWeek: day ? WEEKDAYS.indexOf(day) : 0, timeOfDay: time ? parseTimeOfDay(time) : "18:00", timeGiven: Boolean(time), dayGiven: Boolean(day) };
}

module.exports = Object.freeze({ WeeklySummarySettingsRepository, createWeeklySummaryService, composeWeekly, parseWeeklyControl, JOB_TYPE, WEEKDAYS });
