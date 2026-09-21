"use strict";

// Reading days and times out of everyday words ("tomorrow at 2pm", "on 25 September", "next friday"), in the person's own calendar.
// Days are plain YYYY-MM-DD strings and times "HH:MM" (24-hour) in their local time, so nothing here depends on the server's zone.
const MONTH_NAMES = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
const MONTH_PATTERN = "(january|february|march|april|may|june|july|august|september|october|november|december|jan|feb|mar|apr|jun|jul|aug|sept|sep|oct|nov|dec)";
const WEEKDAYS = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
const WEEKDAY_PATTERN = "(sunday|monday|tuesday|wednesday|thursday|friday|saturday)";

const atNoon = day => new Date(`${day}T12:00:00Z`);
const pad = value => String(value).padStart(2, "0");
const toDay = date => date.toISOString().slice(0, 10);

function addDays(day, count) { const date = atNoon(day); date.setUTCDate(date.getUTCDate() + count); return toDay(date); }
function weekdayOf(day) { return atNoon(day).getUTCDay(); }
function monthIndex(name) { const lower = String(name).toLowerCase(); return MONTH_NAMES.findIndex(full => full === lower || full.slice(0, 3) === lower.slice(0, 3)); }

// A real calendar day or null (30 February is not a day).
function makeDay(year, month, date) {
  const candidate = `${year}-${pad(month + 1)}-${pad(date)}`;
  const parsed = atNoon(candidate);
  return Number.isNaN(parsed.getTime()) || parsed.getUTCMonth() !== month || parsed.getUTCDate() !== date ? null : candidate;
}

// A day given without a year is the next time that date comes round, never one already past.
function withinYear(month, date, today) {
  const year = Number(today.slice(0, 4));
  const thisYear = makeDay(year, month, date);
  if (thisYear && thisYear >= today) return thisYear;
  return makeDay(year + 1, month, date);
}

const DAY_FORMS = [
  { pattern: /\b(\d{4})-(\d{2})-(\d{2})\b/i, read: m => makeDay(Number(m[1]), Number(m[2]) - 1, Number(m[3])) },
  { pattern: new RegExp(`\\b(?:on\\s+)?(?:the\\s+)?(\\d{1,2})(?:st|nd|rd|th)?(?:\\s+of)?\\s+${MONTH_PATTERN}\\b(?:,?\\s+(\\d{4}))?`, "i"),
    read: (m, today) => m[3] ? makeDay(Number(m[3]), monthIndex(m[2]), Number(m[1])) : withinYear(monthIndex(m[2]), Number(m[1]), today) },
  { pattern: new RegExp(`\\b(?:on\\s+)?${MONTH_PATTERN}\\s+(\\d{1,2})(?:st|nd|rd|th)?\\b(?:,?\\s+(\\d{4}))?`, "i"),
    read: (m, today) => m[3] ? makeDay(Number(m[3]), monthIndex(m[1]), Number(m[2])) : withinYear(monthIndex(m[1]), Number(m[2]), today) },
  { pattern: /\bday after tomorrow\b/i, read: (m, today) => addDays(today, 2) },
  { pattern: /\btomorrow\b/i, read: (m, today) => addDays(today, 1) },
  { pattern: /\b(?:today|tonight)\b/i, read: (m, today) => today },
  { pattern: /\bin (\d{1,2}) (day|days|week|weeks)\b/i, read: (m, today) => addDays(today, Number(m[1]) * (/^week/i.test(m[2]) ? 7 : 1)) },
  { pattern: new RegExp(`\\b(?:(?:on|next|this)\\s+)?${WEEKDAY_PATTERN}\\b`, "i"),
    read: (m, today) => { const ahead = (WEEKDAYS.indexOf(m[1].toLowerCase()) - weekdayOf(today) + 7) % 7; return addDays(today, ahead === 0 ? 7 : ahead); } }
];

// The first day named in the text and the text without it, or null when no day is named.
function extractDay(text, today) {
  const source = String(text || "");
  for (const { pattern, read } of DAY_FORMS) {
    const match = pattern.exec(source);
    if (!match) continue;
    const day = read(match, today);
    if (!day) continue;
    return { day, text: `${source.slice(0, match.index)} ${source.slice(match.index + match[0].length)}` };
  }
  return null;
}

// "at 2pm", "10:30 am", "at 14:00", "noon". Returns { time: "HH:MM", text } or null. A bare hour without am/pm is left alone.
function extractTime(text) {
  const source = String(text || "");
  const clock = /(?:\bat\s+|@\s*|\b)(\d{1,2})(?::(\d{2}))?\s*(a\.?m\.?|p\.?m\.?)(?=[\s.,;!?]|$)/i.exec(source);
  if (clock) {
    let hour = Number(clock[1]); const minute = clock[2] === undefined ? 0 : Number(clock[2]);
    const pm = /^p/i.test(clock[3]);
    if (hour >= 1 && hour <= 12 && minute <= 59) {
      hour = pm ? (hour === 12 ? 12 : hour + 12) : (hour === 12 ? 0 : hour);
      return { time: `${pad(hour)}:${pad(minute)}`, text: `${source.slice(0, clock.index)} ${source.slice(clock.index + clock[0].length)}` };
    }
  }
  const twentyFour = /\bat\s+([01]?\d|2[0-3]):([0-5]\d)\b/i.exec(source);
  if (twentyFour) return { time: `${pad(twentyFour[1])}:${twentyFour[2]}`, text: `${source.slice(0, twentyFour.index)} ${source.slice(twentyFour.index + twentyFour[0].length)}` };
  const noon = /\b(?:at\s+)?(noon|midday)\b/i.exec(source);
  if (noon) return { time: "12:00", text: `${source.slice(0, noon.index)} ${source.slice(noon.index + noon[0].length)}` };
  return null;
}

// What is left of a phrase once the day and time are taken out: no dangling "for", "on", "at".
function tidyTitle(text) {
  let words = String(text || "").replace(/\s+/g, " ").trim().replace(/^["“'‘]+|["”'’]+$/g, "");
  for (let i = 0; i < 4; i += 1) words = words.replace(/^(?:for|on|at|to|the|that|,|:|-)\s+/i, "").replace(/\s+(?:for|on|at|by|to|the|,|:|-)$/i, "").trim();
  return words.replace(/[.,;:!?]+$/g, "").trim();
}

const DAY_LABEL = new Intl.DateTimeFormat("en-GB", { weekday: "long", day: "numeric", month: "long", timeZone: "UTC" });
function describeDay(day, today) {
  if (day === today) return "today";
  if (day === addDays(today, 1)) return "tomorrow";
  return DAY_LABEL.format(atNoon(day));
}

// The first and last day of what a question asks about: today, tomorrow, this week (to Sunday), next week (Monday to Sunday), a named day.
function extractRange(text, today) {
  const t = String(text || "").toLowerCase();
  if (/\bnext week\b/.test(t)) { const monday = addDays(today, ((8 - weekdayOf(today)) % 7) || 7); return { from: monday, to: addDays(monday, 6), label: "next week" }; }
  if (/\bthis week\b/.test(t)) return { from: today, to: addDays(today, (7 - weekdayOf(today)) % 7), label: "this week" };
  const named = extractDay(t, today);
  if (named) return { from: named.day, to: named.day, label: describeDay(named.day, today) };
  return { from: today, to: addDays(today, 13), label: "the next two weeks" };
}

module.exports = Object.freeze({ extractDay, extractTime, tidyTitle, extractRange, describeDay, addDays, weekdayOf, makeDay });
