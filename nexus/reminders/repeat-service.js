"use strict";

const { readRepeatRequest, DAY_NAMES } = require("./repeat-phrase.js");
const { normalizeSpokenText } = require("../i18n/spoken-input.js");
const { isDueNow, localClock, formatTimeOfDay } = require("../brief/schedule.js");
const { validTimeZone, DEFAULT_TIME_ZONE } = require("../brief/compose.js");

// Repeating reminders: what Kyro says when someone sets, lists or stops one (repeatReminderTurn, used by the planner like the wellness and community
// turns), and the worker's sweep that sends each one when its local time comes (createRepeatReminderService). Reminders that happen once are
// untouched: they still go through the governed reminders.schedule path.
const CAP_WORDS = 20;
const cap = text => (text ? text.charAt(0).toUpperCase() + text.slice(1) : text);

const dayList = days => { const names = days.map(number => cap(DAY_NAMES[number])); return names.length < 2 ? names.join("") : `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}`; };
function whenWords(days, timeOfDay) {
  const time = formatTimeOfDay(timeOfDay);
  if (days === "daily") return `every day at ${time}`;
  if (days === "weekdays") return `every weekday (Monday to Friday) at ${time}`;
  return `every ${dayList(days)} at ${time}`;
}
const remindYou = task => `remind you ${/^about\s/i.test(task) ? "" : "to "}${task}`;

// Returns the words to answer with, or null when this is not about repeating reminders. `store` needs add/list/cancel/cancelAll.
async function repeatReminderTurn({ text, store, tenantId, userId, timeZone }) {
  if (!store?.add || !store?.list || !store?.cancel) return null;
  const request = readRepeatRequest(normalizeSpokenText(String(text || "")));
  if (!request) return null;
  try {
    const zone = validTimeZone(timeZone || DEFAULT_TIME_ZONE);
    switch (request.action) {
      case "unsupported": return 'I can repeat a reminder every day, every weekday, or on the days of the week you choose, for example "remind me every morning at 8 to check the pump". I can\'t do every other day, every few hours, or monthly yet. Nothing was set.';
      case "need-day": return 'Which day of the week? For example, say "remind me every Monday at 9 to call the buyer". Nothing was set yet.';
      case "need-task": return 'What should I remind you about? For example, say "remind me every morning at 8 to check the pump". Nothing was set yet.';
      case "add": {
        const made = [];
        for (const timeOfDay of request.times) {
          const saved = await store.add({ tenantId, userId, task: request.task, timeOfDay, days: request.days, timeZone: zone });
          if (saved.capped) return made.length ? `I set ${made.length} of them, then reached the limit of ${CAP_WORDS} repeating reminders. Say "show my repeating reminders" and stop one first.` : `You already have ${CAP_WORDS} repeating reminders, which is the limit. Say "show my repeating reminders" and stop one first. Nothing was set.`;
          made.push({ timeOfDay, duplicate: Boolean(saved.duplicate) });
        }
        const fresh = made.filter(item => !item.duplicate);
        if (!fresh.length) return `You already have that one: I will ${remindYou(request.task)} ${whenWords(request.days, request.times[0])}.`;
        const times = fresh.map(item => formatTimeOfDay(item.timeOfDay));
        const when = request.days === "daily" ? `every day at ${times.join(" and ")}` : request.days === "weekdays" ? `every weekday (Monday to Friday) at ${times.join(" and ")}` : `every ${dayList(request.days)} at ${times.join(" and ")}`;
        return `Okay. I will ${remindYou(request.task)} ${when}. To stop it, say "stop my repeating reminder ${/^about\s/i.test(request.task) ? "" : "to "}${request.task}".`;
      }
      case "list": {
        const rows = await store.list({ tenantId, userId });
        if (!rows.length) return 'You have no repeating reminders. Say, for example, "remind me every morning at 8 to check the pump".';
        return `You have ${rows.length} repeating reminder${rows.length === 1 ? "" : "s"}: ${rows.map((row, index) => `${index + 1}, ${row.task}, ${whenWords(row.days, row.timeOfDay)}`).join("; ")}. To stop one, say "stop repeating reminder" and its number.`;
      }
      case "stop": {
        const rows = await store.list({ tenantId, userId });
        if (request.all) {
          if (!rows.length) return "You have no repeating reminders to stop.";
          const stopped = await store.cancelAll({ tenantId, userId });
          return `Done. I stopped ${stopped} repeating reminder${stopped === 1 ? "" : "s"}. Reminders that happen once are not affected.`;
        }
        if (request.number) {
          const row = rows[request.number - 1];
          if (!row) return rows.length ? `I don't have a repeating reminder number ${request.number}. Say "show my repeating reminders" to hear them.` : "You have no repeating reminders to stop.";
          await store.cancel({ tenantId, userId, scheduleId: row.scheduleId });
          return `Done. I stopped the repeating reminder to ${row.task}, ${whenWords(row.days, row.timeOfDay)}.`;
        }
        const subject = String(request.subject || "").toLowerCase().trim();
        const matches = subject ? rows.filter(row => { const task = row.task.toLowerCase(); return task.includes(subject) || subject.includes(task); }) : [];
        if (matches.length === 1) {
          await store.cancel({ tenantId, userId, scheduleId: matches[0].scheduleId });
          return `Done. I stopped the repeating reminder to ${matches[0].task}, ${whenWords(matches[0].days, matches[0].timeOfDay)}.`;
        }
        // Not about a repeating reminder of theirs: a plain "cancel my reminder" is for the one-time reminders, so carry on normally.
        if (!request.explicit && !matches.length) return null;
        if (matches.length > 1) return `More than one matches: ${matches.map(row => `${rows.indexOf(row) + 1}, ${row.task}, ${whenWords(row.days, row.timeOfDay)}`).join("; ")}. Say "stop repeating reminder" and the number. Nothing was stopped.`;
        return rows.length ? 'I could not tell which repeating reminder you mean, so nothing was stopped. Say "show my repeating reminders", then "stop repeating reminder" and its number.' : "You have no repeating reminders to stop.";
      }
      default: return null;
    }
  } catch { return null; }
}

const weekdayOf = day => new Date(`${day}T12:00:00Z`).getUTCDay();
const runsOn = (days, day) => days === "daily" || (days === "weekdays" ? (weekdayOf(day) >= 1 && weekdayOf(day) <= 5) : Array.isArray(days) && days.includes(weekdayOf(day)));

// The worker's sweep: for every repeating reminder whose local time has just arrived (and that runs today), queue one push, at most once per reminder
// per local day. A reminder is only for the hour after its time, so one is not delivered at noon because the worker was down at eight.
function createRepeatReminderService({ notifications, store, devices = null, logger = null, now = () => new Date(), windowMinutes = 60 } = {}) {
  const handled = new Set();
  return {
    async sendDue({ at = now() } = {}) {
      const result = { checked: 0, sent: 0, skippedNoDevice: 0 };
      if (!store?.listActive || !notifications?.enqueue) return result;
      const pushable = new Map();
      let cursor = null;
      for (;;) {
        const page = await store.listActive({ limit: 500, ...(cursor ? { afterCreatedAt: cursor.createdAt, afterScheduleId: cursor.scheduleId } : {}) });
        if (!page.length) break;
        for (const rule of page) {
          result.checked += 1;
          if (!isDueNow({ timeOfDay: rule.timeOfDay, timeZone: rule.timeZone, now: at, windowMinutes })) continue;
          const day = localClock(at, rule.timeZone).day;
          if (!runsOn(rule.days, day)) continue;
          const key = `reminder-repeat:${rule.scheduleId}:${day}`;
          if (handled.has(key)) continue;
          if (notifications.existsByKey && await notifications.existsByKey({ tenantId: rule.tenantId, idempotencyKey: key })) { handled.add(key); continue; }
          const person = `${rule.tenantId}:${rule.userId}`;
          if (!pushable.has(person)) { try { pushable.set(person, devices?.listPushable ? (await devices.listPushable({ tenantId: rule.tenantId, userId: rule.userId })).length > 0 : true); } catch { pushable.set(person, false); } }
          if (!pushable.get(person)) { result.skippedNoDevice += 1; continue; }
          // Marked handled only after the queue write really happened, so a failed write is tried again on the next sweep within the hour.
          await notifications.enqueue({ tenantId: rule.tenantId, userId: rule.userId, channel: "push", scheduledAt: at, idempotencyKey: key,
            content: { title: "Nexus reminder", body: rule.task, kind: "repeating_reminder" } });
          handled.add(key);
          logger?.info?.("reminder.repeat.queued", { scheduleId: rule.scheduleId, day });
          result.sent += 1;
        }
        cursor = { createdAt: page[page.length - 1].createdAt, scheduleId: page[page.length - 1].scheduleId };
        if (page.length < 500) break;
      }
      if (handled.size > 5000) handled.clear();
      return result;
    }
  };
}

module.exports = Object.freeze({ repeatReminderTurn, createRepeatReminderService, whenWords, runsOn, MAX_PER_PERSON_WORDS: CAP_WORDS });
