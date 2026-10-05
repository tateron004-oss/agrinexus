"use strict";

const { extractAssistantReminderTask } = require("./time-phrase.js");

// Reading a repeating reminder out of what a person said: "remind me every morning at 8 to check the pump", "every Monday at 9 remind me to call
// the buyer", "remind me to take my pills daily at 8am and 8pm", "stop my daily reminder to check the pump", "show my repeating reminders".
// Also: "every other day", "every 3 days", "every other Monday", "every 2 weeks on Friday", "on the 15th of every month", "every 2 hours", "twice a day".
// It only reads words. It never guesses: a repeat it cannot do ("every few days", "every 3 months", "yearly") is said plainly instead of becoming a one-time reminder.

const DAY_NAMES = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
const DAY_WORD = "(?:sun|mon|tues?|wed(?:nes)?|thu(?:rs)?|fri|sat(?:ur)?)(?:day)?";
const DAY_PREFIX = { sun: 0, mon: 1, tue: 2, wed: 3, thu: 4, fri: 5, sat: 6 };
const dayNumber = word => DAY_PREFIX[String(word).slice(0, 3).toLowerCase()];
const PART_OF_DAY = { morning: 8, afternoon: 14, evening: 18, night: 21 };

const ASKS_FOR_REMINDER = /\b(?:remind(?:\s+(?:me|us))?|reminder|notify me|alert me|nudge me|ping me)\b/i;
// A question ABOUT reminders is not a request for one.
const QUESTION = /^\s*(?:how|what|why|can i|could i|is it|is there|do you|does it|are you able)\b/i;
const UNSUPPORTED = /\b(?:every (?:few|several)\b|every (?:year|minute)\b|each year\b|(?:yearly|annually)\b|every (?:other|second|third|fourth|\d+) (?:months?|minutes?|years?)\b|every \d+ (?:months?|minutes?|years?)\b|twice a (?:week|month))/i;
const REPEAT_COUNT_WORD = { other: 2, second: 2, third: 3, fourth: 4 };
const repeatCount = word => (/^\d+$/.test(String(word)) ? Number(word) : REPEAT_COUNT_WORD[String(word)] || 0);
const MINUTES = (hour, minute) => hour * 60 + minute;
const hhmm = minutes => clock(Math.floor(minutes / 60) % 24, minutes % 60);
const DAILY = new RegExp(`\\b(?:every|each)\\s+(?:single\\s+)?(day|morning|afternoon|evening|night)\\b|\\b(daily)\\b`, "i");
const WEEKDAYS = /\b(?:every|each)\s+week\s?days?\b|\bweek\s?days\b|\b(?:monday|mon)\s+(?:to|through|thru|-)\s+(?:friday|fri)\b/i;
const EVERY_DAYS = new RegExp(`\\b(?:every|each)\\s+(${DAY_WORD}(?:\\s*(?:,|and|&)\\s*${DAY_WORD})*)\\b`, "i");
const PLURAL_DAYS = new RegExp(`\\b(?:on\\s+)?((?:monday|tuesday|wednesday|thursday|friday|saturday|sunday)s(?:\\s*(?:,|and|&)\\s*(?:monday|tuesday|wednesday|thursday|friday|saturday|sunday)s)*)\\b`, "i");
const WEEKLY = /\b(?:every|each)\s+week\b|\bweekly\b/i;

const pad = number => String(number).padStart(2, "0");
const clock = (hour, minute) => `${pad(hour)}:${pad(minute)}`;

// Every time of day said in the sentence ("at 8am and 8pm", "at 7:30", "at noon"), as 24-hour "HH:MM". A bare hour takes its meaning from the
// part of the day said ("every evening at 6" is 6 pm); with no part of the day, 1 to 6 is the afternoon and 7 to 11 is the morning.
function readTimes(text, partOfDay) {
  const times = [];
  const add = value => { if (value && !times.includes(value)) times.push(value); };
  const lower = String(text).toLowerCase();
  if (/\b(?:at\s+)?noon\b/.test(lower)) add("12:00");
  if (/\b(?:at\s+)?midnight\b/.test(lower)) add("00:00");
  const timePattern = /(?:\bat\s+|\bby\s+|\baround\s+|\band\s+|,\s*)?\b(\d{1,2})(?:[:.](\d{2}))?\s*(a\.?m\.?|p\.?m\.?)?(?=\s|$|[,.;!?])/g;
  let match;
  while ((match = timePattern.exec(lower))) {
    const hourText = match[1]; const minuteText = match[2]; const suffix = (match[3] || "").replace(/\./g, "");
    const lead = /\bat\s+$|\bby\s+$|\baround\s+$/.test(lower.slice(0, match.index + match[0].indexOf(hourText)));
    // A number counts as a time only with "at", a minute part, or am/pm: "every morning to water 5 plants" is not a time.
    const joined = /\band\s+$/.test(lower.slice(0, match.index + match[0].indexOf(hourText))) && times.length > 0;
    if (!(lead || minuteText || suffix || joined)) continue;
    let hour = Number(hourText); const minute = minuteText === undefined ? 0 : Number(minuteText);
    if (!Number.isInteger(hour) || minute > 59) continue;
    if (suffix) { if (hour < 1 || hour > 12) continue; hour = suffix === "pm" ? (hour === 12 ? 12 : hour + 12) : (hour === 12 ? 0 : hour); }
    else if (hour > 23) continue;
    else if (hour >= 1 && hour <= 12) {
      if (partOfDay === "evening" || partOfDay === "night") hour = hour === 12 ? (partOfDay === "night" ? 0 : 12) : hour + 12;
      else if (partOfDay === "afternoon") hour = hour === 12 ? 12 : hour + 12;
      else if (partOfDay === "morning") hour = hour === 12 ? 0 : hour;
      else if (hour >= 1 && hour <= 6) hour += 12;
    }
    add(clock(hour, minute));
  }
  return times;
}

// A bare clock time in a window ("8", "6pm", "7:30 am"). With no am/pm: 7 to 11 is the morning, 12 noon, 1 to 6 the afternoon.
function windowTime(hourText, minuteText, suffixText, defaultAfternoonBelow = 7) {
  let hour = Number(hourText); const minute = minuteText === undefined ? 0 : Number(minuteText);
  const suffix = String(suffixText || "").replace(/\./g, "");
  if (!Number.isInteger(hour) || minute > 59) return null;
  if (suffix) { if (hour < 1 || hour > 12) return null; hour = suffix === "pm" ? (hour === 12 ? 12 : hour + 12) : (hour === 12 ? 0 : hour); }
  else if (hour > 23) return null;
  else if (hour >= 1 && hour < defaultAfternoonBelow) hour += 12;
  return MINUTES(hour, minute);
}
const WINDOW = /(?:from|between)\s+(\d{1,2})(?::(\d{2}))?\s*(a\.?m\.?|p\.?m\.?)?\s*(?:to|and|until|till|-)\s*(\d{1,2})(?::(\d{2}))?\s*(a\.?m\.?|p\.?m\.?)?/i;
const MONTH_DAY = /\b(?:on\s+)?the\s+(\d{1,2})(?:st|nd|rd|th)\b(?:\s+of\s+(?:every|each|the)\s+month)?|\b(?:every|each)\s+month\s+(?:on\s+)?(?:the\s+)?(\d{1,2})(?:st|nd|rd|th)?\b/i;
const LAST_DAY = /\b(?:on\s+)?the last day of (?:every|each|the) month\b|\blast day of (?:every|each) month\b/i;

// Repeats beyond daily / weekdays / named days. Returns { kind, ... }, { action: "need-day" | "need-day-of-month" | "unsupported" } or null.
function readUnusualRepeat(lower) {
  let m;
  // several times a day
  if (/\b(?:twice|two times)\s+(?:a|per|each)\s+day\b/.test(lower)) return { kind: "times", count: 2, defaults: ["08:00", "20:00"] };
  if (/\b(?:three times|thrice)\s+(?:a|per|each)\s+day\b/.test(lower)) return { kind: "times", count: 3, defaults: ["08:00", "14:00", "20:00"] };
  if (/\bfour times\s+(?:a|per|each)\s+day\b/.test(lower)) return { kind: "times", count: 4, defaults: ["07:00", "12:00", "17:00", "21:00"] };
  // every N hours, within a window (8 am to 8 pm unless the person says another)
  if ((m = /\b(?:every|each)\s+(other|second|third|\d+)?\s*hours?\b|\bhourly\b/.exec(lower))) {
    const every = m[1] ? repeatCount(m[1]) : 1;
    if (!(every >= 1 && every <= 12)) return { action: "unsupported" };
    let from = MINUTES(8, 0); let to = MINUTES(20, 0); let defaultWindow = true;
    const win = WINDOW.exec(lower);
    if (win) {
      const first = windowTime(win[1], win[2], win[3]);
      let second = windowTime(win[4], win[5], win[6], 1);
      if (first === null || second === null) return { action: "unsupported" };
      // "from 8 to 6" with no am/pm: the end is the same evening, so it comes after the start.
      if (!win[6] && second <= first && second + 720 < 1440) second += 720;
      if (second <= first) return { action: "unsupported" };
      from = first; to = second; defaultWindow = false;
    }
    const times = [];
    for (let at = from; at <= to; at += every * 60) times.push(hhmm(at));
    if (times.length > 16) return { action: "unsupported" };
    return { kind: "hourly", every, from: hhmm(from), to: hhmm(to), times, defaultWindow };
  }
  // every other day, every 3 days
  if ((m = /\bevery\s+(other|second|third|fourth|\d+)\s+days?\b/.exec(lower))) {
    const every = repeatCount(m[1]);
    if (every >= 2 && every <= 60) return { kind: "interval", unit: "day", every };
    if (every > 60) return { action: "unsupported" };
  }
  // every other Monday, every 2 weeks (on Friday), fortnightly
  const weekWord = new RegExp(`\\bevery\\s+(other|second|third|fourth|\\d+)\\s+(?:weeks?\\b|(${DAY_WORD})s?\\b)|\\b(?:fortnightly|bi-?weekly)\\b`, "i");
  if ((m = weekWord.exec(lower))) {
    const every = /fortnightly|bi-?weekly/i.test(m[0]) ? 2 : repeatCount(m[1]);
    if (!(every >= 2 && every <= 12)) return { action: "unsupported" };
    const named = [...lower.matchAll(new RegExp(DAY_WORD, "ig"))].map(item => dayNumber(item[0])).filter(number => number !== undefined);
    const weekdays = [...new Set(m[2] ? [dayNumber(m[2])] : named)].sort((a, b) => a - b);
    if (!weekdays.length) return { action: "need-day" };
    return { kind: "interval", unit: "week", every, weekdays };
  }
  // monthly, on the 15th of every month, on the last day of the month
  if (/\bmonthly\b|\b(?:every|each)\s+month\b/.test(lower) || LAST_DAY.test(lower) || /\bof (?:every|each) month\b/.test(lower)) {
    if (LAST_DAY.test(lower)) return { kind: "monthly", dayOfMonth: 31, last: true };
    const day = MONTH_DAY.exec(lower);
    const number = day ? Number(day[1] || day[2]) : 0;
    if (number >= 1 && number <= 31) return { kind: "monthly", dayOfMonth: number, last: false };
    return { action: "need-day-of-month" };
  }
  return null;
}

function pickDays(text) {
  if (WEEKDAYS.test(text)) return { days: "weekdays", partOfDay: "" };
  const every = EVERY_DAYS.exec(text);
  if (every) {
    const numbers = [...every[1].matchAll(new RegExp(DAY_WORD, "ig"))].map(item => dayNumber(item[0])).filter(number => number !== undefined);
    if (numbers.length) return { days: [...new Set(numbers)].sort((a, b) => a - b), partOfDay: "" };
  }
  const plural = PLURAL_DAYS.exec(text);
  if (plural) {
    const numbers = [...plural[1].matchAll(/(monday|tuesday|wednesday|thursday|friday|saturday|sunday)s/ig)].map(item => dayNumber(item[1]));
    if (numbers.length) return { days: [...new Set(numbers)].sort((a, b) => a - b), partOfDay: "" };
  }
  const daily = DAILY.exec(text);
  if (daily) { const word = (daily[1] || "").toLowerCase(); return { days: "daily", partOfDay: PART_OF_DAY[word] ? word : "" }; }
  if (WEEKLY.test(text)) return { days: "weekly-no-day", partOfDay: "" };
  return null;
}

const STRIP = [
  /\bevery\s+(?:other|second|third|fourth|\d+)\s+(?:days?|weeks?|hours?)\b/ig,
  new RegExp(`\\bevery\\s+(?:other|second|third|fourth|\\d+)\\s+${DAY_WORD}s?\\b`, "ig"),
  /\b(?:on\s+)?the\s+\d{1,2}(?:st|nd|rd|th)\b(?:\s+of\s+(?:every|each|the)\s+month)?/ig, /\b(?:on\s+)?the last day of (?:every|each|the) month\b/ig, /\bof (?:every|each) month\b/ig,
  /\b(?:every|each)\s+(?:month|hour)\b/ig, /\b(?:hourly|monthly|fortnightly|bi-?weekly)\b/ig,
  /\b(?:from|between)\s+\d{1,2}(?::\d{2})?\s*(?:a\.?m\.?|p\.?m\.?)?\s*(?:to|and|until|till|-)\s*\d{1,2}(?::\d{2})?\s*(?:a\.?m\.?|p\.?m\.?)?/ig,
  /\b(?:twice|two times|three times|thrice|four times)\s+(?:a|per|each)\s+day\b/ig,
  /\bon\s+(?:mon|tues?|wed(?:nes)?|thu(?:rs)?|fri|sat(?:ur)?|sun)day\b(?:\s*(?:,|and|&)\s*(?:mon|tues?|wed(?:nes)?|thu(?:rs)?|fri|sat(?:ur)?|sun)day\b)*/ig,
  new RegExp(`\\b(?:every|each)\\s+(?:single\\s+)?(?:day|morning|afternoon|evening|night)\\b`, "ig"),
  /\b(?:every|each)\s+week\s?days?\b/ig, /\bweek\s?days\b/ig, /\b(?:monday|mon)\s+(?:to|through|thru|-)\s+(?:friday|fri)\b/ig,
  new RegExp(`\\b(?:every|each)\\s+${DAY_WORD}(?:\\s*(?:,|and|&)\\s*${DAY_WORD})*\\b`, "ig"),
  /\b(?:on\s+)?(?:monday|tuesday|wednesday|thursday|friday|saturday|sunday)s(?:\s*(?:,|and|&)\s*(?:monday|tuesday|wednesday|thursday|friday|saturday|sunday)s)*\b/ig,
  /\b(?:every|each)\s+week\b/ig, /\b(?:daily|weekly)\b/ig,
  /\b(?:at\s+)?noon\b/ig, /\b(?:at\s+)?midnight\b/ig,
  /\b(?:at|by|around)\s+\d{1,2}(?:[:.]\d{2})?\s*(?:a\.?m\.?|p\.?m\.?)?(?:\s+(?:and|,)\s*\d{1,2}(?:[:.]\d{2})?\s*(?:a\.?m\.?|p\.?m\.?)?)*/ig,
  /\b\d{1,2}[:.]\d{2}\s*(?:a\.?m\.?|p\.?m\.?)?/ig, /\b\d{1,2}\s*(?:a\.?m\.?|p\.?m\.?)\b/ig,
  /\b(?:in the|during the)\s+(?:morning|afternoon|evening|night)\b/ig
];
function taskFrom(text) {
  let rest = String(text);
  for (const pattern of STRIP) rest = rest.replace(pattern, " ");
  rest = rest.replace(/\band\s+(?=to\b)/ig, " ").replace(/\s+/g, " ").replace(/\s+([.,!?;:])/g, "$1").trim();
  const task = extractAssistantReminderTask(rest).replace(/[\s,;:.!?-]+$/g, "").trim();
  return task && !/^(?:follow up|remind me|remind us|a reminder|reminder|set a reminder|set reminder|me)$/i.test(task) ? task : "";
}

// -> { action: "add", task, times: ["08:00"], days } | { action: "need-task" | "need-day" | "unsupported" } | { action: "list" } | { action: "stop", ... } | null
function readRepeatRequest(rawText) {
  const text = String(rawText || "").replace(/\s+/g, " ").trim();
  if (!text || text.length > 400) return null;
  const lower = text.toLowerCase().replace(/[’]/g, "'");

  if (/^(?:please )?(?:show|list|read|what(?:'s| is| are)|tell me|give me)\b.*\b(?:repeating|recurring|regular|daily|weekly|repeat)\s+reminders?\b/.test(lower) || /^(?:what|which) (?:repeating|recurring|regular|daily|weekly) reminders\b/.test(lower)) return { action: "list" };

  const stopAll = /\b(?:stop|cancel|delete|remove|clear)\b.*\ball\b.*\b(?:repeating|recurring|regular|daily|weekly)\s+reminders?\b/.test(lower);
  if (stopAll) return { action: "stop", all: true, explicit: true };
  const stopWords = /^(?:please )?(?:stop|cancel|delete|remove|end)\b/.test(lower);
  if (stopWords) {
    const explicit = /\b(?:repeating|recurring|regular|daily|weekly)\s+reminders?\b|\bevery\s+(?:day|morning|afternoon|evening|night|week)\b|\b(?:daily|weekly)\b/.test(lower);
    const reminding = /^(?:please )?stop reminding me\b/.test(lower);
    const aboutReminder = /\breminders?\b/.test(lower);
    if (!(explicit || reminding || (aboutReminder && /\b(?:repeat|recurring)\b/.test(lower)))) return null;
    const number = /\b(?:repeating|recurring|regular|daily|weekly)?\s*reminder\s*(?:number\s*|#\s*)?(\d{1,2})\b/.exec(lower) || /\b(?:number|#)\s*(\d{1,2})\b/.exec(lower);
    const subject = (/\b(?:reminder|reminding me)\s+(?:to|about|of)\s+(.{2,120})$/.exec(lower) || /\bstop reminding me\s+(?:to|about)\s+(.{2,120})$/.exec(lower) || [])[1] || "";
    return { action: "stop", number: number ? Number(number[1]) : null, subject: subject.replace(/[.!?]+$/, "").replace(/\bevery\s+\w+.*$/, "").trim(), explicit };
  }

  if (QUESTION.test(text) && !/^(?:can|could|would) you\b/i.test(text)) return null;
  if (!ASKS_FOR_REMINDER.test(text)) return null;
  if (UNSUPPORTED.test(lower)) return { action: "unsupported" };
  const unusual = readUnusualRepeat(lower);
  if (unusual?.action) return unusual;
  if (unusual) {
    const task = taskFrom(text);
    if (!task) return { action: "need-task" };
    const part = (/\b(morning|afternoon|evening|night)\b/.exec(lower) || [])[1] || "";
    const calm = pickDays(lower);
    const outer = calm && (calm.days === "weekdays" || Array.isArray(calm.days)) ? calm.days : "daily";
    let times;
    if (unusual.kind === "hourly") times = unusual.times;
    else {
      times = readTimes(lower.replace(taskPart(lower), " "), part);
      if (unusual.kind === "times") times = times.length >= unusual.count ? times.slice(0, unusual.count) : unusual.defaults;
      else if (!times.length) times = [clock(PART_OF_DAY[part] === undefined ? 9 : PART_OF_DAY[part], 0)];
    }
    const days = unusual.kind === "times" || unusual.kind === "hourly" ? outer
      : unusual.kind === "monthly" ? { unit: "month", every: 1, dayOfMonth: unusual.dayOfMonth, last: unusual.last }
      : unusual.unit === "week" ? { unit: "week", every: unusual.every, weekdays: unusual.weekdays } : { unit: "day", every: unusual.every };
    return { action: "add", task, times: times.slice(0, 16), days, ...(unusual.kind === "hourly" ? { hourly: { every: unusual.every, from: unusual.from, to: unusual.to, defaultWindow: unusual.defaultWindow } } : {}) };
  }
  const picked = pickDays(lower);
  if (!picked) return null;
  if (picked.days === "weekly-no-day") return { action: "need-day" };
  const task = taskFrom(text);
  if (!task) return { action: "need-task" };
  let times = readTimes(lower.replace(taskPart(lower), " "), picked.partOfDay);
  if (!times.length) {
    const hour = PART_OF_DAY[picked.partOfDay];
    times = [clock(hour === undefined ? 9 : hour, 0)];
  }
  return { action: "add", task, times: times.slice(0, 4), days: picked.days };
}

// The words before the task itself ("remind me to ...") can hold the times; the task's own words must not be read as a time ("to count 12 sheep").
// Only the sentence minus what follows "to"/"about" is searched, unless the time words come after the task ("... every day at 8").
function taskPart(lower) {
  const match = /\b(?:remind(?: me| us)? (?:to|about)|reminder (?:to|about)|notify me (?:to|about)|alert me (?:to|about))\s+(.+)$/.exec(lower);
  if (!match) return /$^/;
  // keep any trailing "every ... at ..." phrase (it is searched), but blank the task's body
  const body = match[1];
  const tail = /\b(?:every|each|daily|weekly|on\s+(?:monday|tuesday|wednesday|thursday|friday|saturday|sunday)s|at\s+\d|at\s+noon|\d{1,2}\s*(?:am|pm))\b/.exec(body);
  const taskBody = tail ? body.slice(0, tail.index) : body;
  return new RegExp(taskBody.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
}

module.exports = Object.freeze({ readRepeatRequest, DAY_NAMES });
