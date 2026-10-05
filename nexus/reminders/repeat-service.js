"use strict";

const { readRepeatRequest, DAY_NAMES } = require("./repeat-phrase.js");
const { normalizeSpokenText } = require("../i18n/spoken-input.js");
const { isDueNow, localClock, formatTimeOfDay, minutesOfDay } = require("../brief/schedule.js");
const { validTimeZone, DEFAULT_TIME_ZONE } = require("../brief/compose.js");
const { addDays, weekdayOf } = require("../personal/dates.js");

// Repeating reminders: what Kyro says when someone sets, lists or stops one (repeatReminderTurn, used by the planner like the wellness and community
// turns), and the worker's sweep that sends each one when its local time comes (createRepeatReminderService). Reminders that happen once are
// untouched: they still go through the governed reminders.schedule path.
//
// "days" says which days a reminder runs: "daily", "weekdays", a list of weekdays ([1, 4]), or one of
//   { unit: "day",   every: N, anchor }                     every other day / every 3 days, counted from the anchor day
//   { unit: "week",  every: N, weekdays: [..], anchor }     every other Monday / every 2 weeks on Friday
//   { unit: "month", every: 1, dayOfMonth, last }           on the 15th of every month (a shorter month uses its last day)
const CAP_WORDS = 20;
const cap = text => (text ? text.charAt(0).toUpperCase() + text.slice(1) : text);

const dayList = days => { const names = days.map(number => cap(DAY_NAMES[number])); return names.length < 2 ? names.join("") : `${names.slice(0, -1).join(", ")} and ${names[names.length - 1]}`; };
const ordinal = number => `${number}${[11, 12, 13].includes(number % 100) ? "th" : { 1: "st", 2: "nd", 3: "rd" }[number % 10] || "th"}`;
const isRule = days => days && typeof days === "object" && !Array.isArray(days);

// "every day", "every other Monday", "on the 15th of every month": the days part of a reminder in words.
function daysWords(days) {
  if (days === "daily") return "every day";
  if (days === "weekdays") return "every weekday (Monday to Friday)";
  if (Array.isArray(days)) return `every ${dayList(days)}`;
  if (isRule(days)) {
    if (days.unit === "day") return days.every === 2 ? "every other day" : `every ${days.every} days`;
    if (days.unit === "week") return days.every === 2 ? `every other ${dayList(days.weekdays)}` : `every ${days.every} weeks on ${dayList(days.weekdays)}`;
    if (days.unit === "month") return days.last ? "on the last day of every month" : `on the ${ordinal(days.dayOfMonth)} of every month`;
  }
  return "every day";
}
// A reminder as one phrase: "every day at 8:00 am", "every 2 hours from 8:00 am to 8:00 pm".
function whenWords(days, timeOfDay, extra = {}) {
  if (extra.hourly) {
    const window = `every ${extra.hourly.every === 1 ? "hour" : `${extra.hourly.every} hours`} from ${formatTimeOfDay(extra.hourly.from)} to ${formatTimeOfDay(extra.hourly.to)}`;
    return days === "daily" ? window : `${daysWords(days)}, ${window}`;
  }
  return `${daysWords(days)} at ${formatTimeOfDay(timeOfDay)}`;
}
const remindYou = task => `remind you ${/^about\s/i.test(task) ? "" : "to "}${task}`;

// The first day a counted repeat (every other day...) counts from: today if its first time has not passed yet, otherwise tomorrow.
function firstDay(zone, now, firstTime) {
  const clock = localClock(now, zone);
  const target = minutesOfDay(firstTime);
  return target !== null && clock.minutes < target ? clock.day : addDays(clock.day, 1);
}
function withAnchor(days, zone, now, firstTime) {
  if (!isRule(days) || days.unit === "month") return days;
  let anchor = firstDay(zone, now, firstTime);
  if (days.unit === "week") for (let guard = 0; guard < 7 && !days.weekdays.includes(weekdayOf(anchor)); guard += 1) anchor = addDays(anchor, 1);
  return { ...days, anchor };
}

// Returns the words to answer with, or null when this is not about repeating reminders. `store` needs add/list/cancel/cancelAll.
async function repeatReminderTurn({ text, store, tenantId, userId, timeZone, now = new Date() }) {
  if (!store?.add || !store?.list || !store?.cancel) return null;
  const request = readRepeatRequest(normalizeSpokenText(String(text || "")));
  if (!request) return null;
  try {
    const zone = validTimeZone(timeZone || DEFAULT_TIME_ZONE);
    switch (request.action) {
      case "unsupported": return 'I can repeat a reminder every day, every weekday, on named days, every other day or every few days, every other week, on a day of the month, every few hours, or several times a day, for example "remind me every morning at 8 to check the pump". I can\'t do yearly, every few months, or vague repeats like "every few days". Nothing was set.';
      case "need-day": return 'Which day of the week? For example, say "remind me every Monday at 9 to call the buyer". Nothing was set yet.';
      case "need-day-of-month": return 'Which day of the month? For example, say "remind me on the 15th of every month to pay rent". Nothing was set yet.';
      case "need-task": return 'What should I remind you about? For example, say "remind me every morning at 8 to check the pump". Nothing was set yet.';
      case "add": {
        const days = withAnchor(request.days, zone, now, request.times[0]);
        // One reminder that fires many times in a day (every 2 hours) is one rule; "at 8am and 8pm" is one rule per time, as before.
        const rules = request.hourly ? [{ timeOfDay: request.times[0], timesOfDay: request.times, hourly: request.hourly }] : request.times.map(timeOfDay => ({ timeOfDay }));
        const made = [];
        for (const rule of rules) {
          const saved = await store.add({ tenantId, userId, task: request.task, days, timeZone: zone, ...rule });
          if (saved.capped) return made.length ? `I set ${made.length} of them, then reached the limit of ${CAP_WORDS} repeating reminders. Say "show my repeating reminders" and stop one first.` : `You already have ${CAP_WORDS} repeating reminders, which is the limit. Say "show my repeating reminders" and stop one first. Nothing was set.`;
          made.push({ ...rule, duplicate: Boolean(saved.duplicate) });
        }
        const fresh = made.filter(item => !item.duplicate);
        if (!fresh.length) return `You already have that one: I will ${remindYou(request.task)} ${whenWords(days, rules[0].timeOfDay, rules[0])}.`;
        const when = request.hourly ? whenWords(days, fresh[0].timeOfDay, fresh[0]) : `${daysWords(days)} at ${fresh.map(item => formatTimeOfDay(item.timeOfDay)).join(" and ")}`;
        const note = request.hourly?.defaultWindow ? ` I used 8:00 am to 8:00 pm; say "from 7 am to 5 pm" in the request to change it.` : "";
        return `Okay. I will ${remindYou(request.task)} ${when}.${note} To stop it, say "stop my repeating reminder ${/^about\s/i.test(request.task) ? "" : "to "}${request.task}".`;
      }
      case "list": {
        const rows = await store.list({ tenantId, userId });
        if (!rows.length) return 'You have no repeating reminders. Say, for example, "remind me every morning at 8 to check the pump".';
        return `You have ${rows.length} repeating reminder${rows.length === 1 ? "" : "s"}: ${rows.map((row, index) => `${index + 1}, ${row.task}, ${whenWords(row.days, row.timeOfDay, row)}`).join("; ")}. To stop one, say "stop repeating reminder" and its number.`;
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
          return `Done. I stopped the repeating reminder to ${row.task}, ${whenWords(row.days, row.timeOfDay, row)}.`;
        }
        const subject = String(request.subject || "").toLowerCase().trim();
        const matches = subject ? rows.filter(row => { const task = row.task.toLowerCase(); return task.includes(subject) || subject.includes(task); }) : [];
        if (matches.length === 1) {
          await store.cancel({ tenantId, userId, scheduleId: matches[0].scheduleId });
          return `Done. I stopped the repeating reminder to ${matches[0].task}, ${whenWords(matches[0].days, matches[0].timeOfDay, matches[0])}.`;
        }
        // Not about a repeating reminder of theirs: a plain "cancel my reminder" is for the one-time reminders, so carry on normally.
        if (!request.explicit && !matches.length) return null;
        if (matches.length > 1) return `More than one matches: ${matches.map(row => `${rows.indexOf(row) + 1}, ${row.task}, ${whenWords(row.days, row.timeOfDay, row)}`).join("; ")}. Say "stop repeating reminder" and the number. Nothing was stopped.`;
        return rows.length ? 'I could not tell which repeating reminder you mean, so nothing was stopped. Say "show my repeating reminders", then "stop repeating reminder" and its number.' : "You have no repeating reminders to stop.";
      }
      default: return null;
    }
  } catch { return null; }
}

const daysBetween = (from, to) => Math.round((Date.UTC(...to.split("-").map((part, index) => (index === 1 ? Number(part) - 1 : Number(part)))) - Date.UTC(...from.split("-").map((part, index) => (index === 1 ? Number(part) - 1 : Number(part))))) / 86400000);
const mondayOf = day => addDays(day, -((weekdayOf(day) + 6) % 7));
const daysInMonth = day => new Date(Date.UTC(Number(day.slice(0, 4)), Number(day.slice(5, 7)), 0)).getUTCDate();

// Does a reminder run on this local day?
function runsOn(days, day) {
  if (days === "daily") return true;
  if (days === "weekdays") return weekdayOf(day) >= 1 && weekdayOf(day) <= 5;
  if (Array.isArray(days)) return days.includes(weekdayOf(day));
  if (isRule(days)) {
    if (days.unit === "day") { const diff = days.anchor ? daysBetween(days.anchor, day) : -1; return diff >= 0 && diff % days.every === 0; }
    if (days.unit === "week") {
      if (!days.anchor || !Array.isArray(days.weekdays) || !days.weekdays.includes(weekdayOf(day)) || day < days.anchor) return false;
      const weeks = Math.round(daysBetween(mondayOf(days.anchor), mondayOf(day)) / 7);
      return weeks >= 0 && weeks % days.every === 0;
    }
    if (days.unit === "month") { const last = daysInMonth(day); const want = days.last ? last : Math.min(days.dayOfMonth, last); return Number(day.slice(8, 10)) === want; }
  }
  return false;
}

// The worker's sweep: for every repeating reminder whose local time has just arrived (and that runs today), queue one push, at most once per reminder
// per local day (per time, for a reminder that fires several times a day). A reminder is only for the hour after its time, so one is not delivered at noon
// because the worker was down at eight.
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
          const slots = Array.isArray(rule.timesOfDay) && rule.timesOfDay.length > 1 ? rule.timesOfDay : [rule.timeOfDay];
          for (const slot of slots) {
            if (!isDueNow({ timeOfDay: slot, timeZone: rule.timeZone, now: at, windowMinutes })) continue;
            const day = localClock(at, rule.timeZone).day;
            if (!runsOn(rule.days, day)) continue;
            // A single-time reminder keeps the original key, so a restart across this change never repeats one that was already sent today.
            const key = slots.length > 1 ? `reminder-repeat:${rule.scheduleId}:${day}:${slot}` : `reminder-repeat:${rule.scheduleId}:${day}`;
            if (handled.has(key)) continue;
            if (notifications.existsByKey && await notifications.existsByKey({ tenantId: rule.tenantId, idempotencyKey: key })) { handled.add(key); continue; }
            const person = `${rule.tenantId}:${rule.userId}`;
            if (!pushable.has(person)) { try { pushable.set(person, devices?.listPushable ? (await devices.listPushable({ tenantId: rule.tenantId, userId: rule.userId })).length > 0 : true); } catch { pushable.set(person, false); } }
            if (!pushable.get(person)) { result.skippedNoDevice += 1; continue; }
            // Marked handled only after the queue write really happened, so a failed write is tried again on the next sweep within the hour.
            await notifications.enqueue({ tenantId: rule.tenantId, userId: rule.userId, channel: "push", scheduledAt: at, idempotencyKey: key,
              content: { title: "Nexus reminder", body: rule.task, kind: "repeating_reminder" } });
            handled.add(key);
            logger?.info?.("reminder.repeat.queued", { scheduleId: rule.scheduleId, day, slot });
            result.sent += 1;
          }
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
