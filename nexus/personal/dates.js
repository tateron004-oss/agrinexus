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
// "In 3 months" means the same day-of-month 3 calendar months later, clamped
// to the shorter month's real last day (31 Jan + 1 month = 28/29 Feb, not
// 3 March) -- not a fixed 30-day jump. Found live (health-toolkit follow-up
// audit): nexus/healthwork/visits.js's follow-up scheduler and
// immunisation.js's next-dose scheduler both explicitly advertise "in N
// months" as accepted input, but nothing in this module could ever resolve
// it -- the only relative-offset pattern below understood days/weeks, so a
// health worker saying "follow up in 3 months" (a common phrasing for a
// malnutrition recheck, chronic-care review, or vaccine booster) got no
// appointment/reminder scheduled at all, with a confusing bounce-back
// message that never mentioned months were the actual problem.
function addMonths(day, count) {
  const date = atNoon(day);
  const targetIndex = date.getUTCMonth() + count;
  const targetYear = date.getUTCFullYear() + Math.floor(targetIndex / 12);
  const targetMonth = ((targetIndex % 12) + 12) % 12;
  const daysInTargetMonth = new Date(Date.UTC(targetYear, targetMonth + 1, 0)).getUTCDate();
  const clampedDate = Math.min(date.getUTCDate(), daysInTargetMonth);
  return toDay(new Date(Date.UTC(targetYear, targetMonth, clampedDate, 12)));
}
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
  { pattern: /\byesterday\b/i, read: (m, today) => addDays(today, -1) },
  { pattern: /\btomorrow\b/i, read: (m, today) => addDays(today, 1) },
  // Kiswahili: "keshokutwa" (the day after tomorrow) and "kesho" (tomorrow), and the days of the week. "Leo" and "jana" are left out on purpose: they are also common names.
  { pattern: /\bkeshokutwa\b/i, read: (m, today) => addDays(today, 2) },
  { pattern: /\bkesho\b/i, read: (m, today) => addDays(today, 1) },
  { pattern: /\b(jumatatu|jumanne|jumatano|alhamisi|ijumaa|jumamosi|jumapili)\b/i,
    read: (m, today) => { const index = { jumapili: 0, jumatatu: 1, jumanne: 2, jumatano: 3, alhamisi: 4, ijumaa: 5, jumamosi: 6 }[m[1].toLowerCase()]; const ahead = (index - weekdayOf(today) + 7) % 7; return addDays(today, ahead === 0 ? 7 : ahead); } },
  { pattern: /\b(?:today|tonight)\b/i, read: (m, today) => today },
  { pattern: /\bin (\d{1,2}) (day|days|week|weeks|month|months)\b/i, read: (m, today) => /^month/i.test(m[2]) ? addMonths(today, Number(m[1])) : addDays(today, Number(m[1]) * (/^week/i.test(m[2]) ? 7 : 1)) },
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
  // "at 10 in the morning", "at ten in the morning", "8 in the evening", "at nine at night": the part of the day says which hour is meant.
  const HOUR_WORDS = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12 };
  const partOfDay = /(?:\bat\s+|@\s*|\b)(\d{1,2}|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)(?::([0-5]\d))?\s*(?:o'?clock\s+)?(?:in the |in |at |this )(morning|afternoon|evening|night)\b/i.exec(source);
  if (partOfDay) {
    const hour = HOUR_WORDS[partOfDay[1].toLowerCase()] || Number(partOfDay[1]);
    const minute = partOfDay[2] === undefined ? 0 : Number(partOfDay[2]);
    const part = partOfDay[3].toLowerCase();
    let hour24 = null;
    if (hour >= 1 && hour <= 12) {
      if (part === "morning") hour24 = hour === 12 ? null : hour;
      else if (part === "afternoon") hour24 = hour === 12 ? 12 : hour + 12;
      else if (part === "evening") hour24 = hour === 12 ? null : hour + 12;
      else hour24 = hour === 12 ? 0 : hour >= 6 ? hour + 12 : hour; // night: 8 at night is 20:00, 1 at night is 01:00
    }
    if (hour24 !== null && hour24 < 24) return { time: `${pad(hour24)}:${pad(minute)}`, text: `${source.slice(0, partOfDay.index)} ${source.slice(partOfDay.index + partOfDay[0].length)}` };
  }
  const twentyFour = /\bat\s+([01]?\d|2[0-3]):([0-5]\d)\b/i.exec(source);
  if (twentyFour) return { time: `${pad(twentyFour[1])}:${twentyFour[2]}`, text: `${source.slice(0, twentyFour.index)} ${source.slice(twentyFour.index + twentyFour[0].length)}` };
  // "at 10", "at 3": no am/pm said. 7 to 11 is the morning, 12 is noon and 1 to 6 is the afternoon (the reply always says the time, so a wrong guess is heard).
  // Not when a unit or a thing follows ("at 3 acres", "at 5 percent"): only the end, a comma, or a word like "on" / "to" / a day word.
  const bare = /\bat\s+(\d{1,2})(?![\d:.])(?=\s*(?:$|[.,;!?]|(?:to|on|in|for|and|with|tomorrow|today|tonight|monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b))/i.exec(source);
  if (bare) {
    const hour = Number(bare[1]);
    if (hour >= 1 && hour <= 12) {
      const twentyFourHour = hour === 12 ? 12 : hour <= 6 ? hour + 12 : hour;
      return { time: `${pad(twentyFourHour)}:00`, text: `${source.slice(0, bare.index)} ${source.slice(bare.index + bare[0].length)}` };
    }
  }
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

// Looking back: the days a question about the past covers. "today", "yesterday", "this week" (since Monday), "last week", "this month",
// "last month", "this year" (also "this season"), "the last 10 days". Returns { from, to, label } or null when no period is named.
function extractPeriod(text, today) {
  const t = String(text || "").toLowerCase();
  const monthStart = day => `${day.slice(0, 7)}-01`;
  let m;
  if ((m = /\b(?:last|past|previous) (\d{1,3}) days\b/.exec(t))) { const n = Math.min(Number(m[1]), 366); return { from: addDays(today, -(n - 1)), to: today, label: `the last ${n} days` }; }
  if (/\blast week\b/.test(t)) { const monday = addDays(today, -((weekdayOf(today) + 6) % 7) - 7); return { from: monday, to: addDays(monday, 6), label: "last week" }; }
  if (/\bthis week\b/.test(t)) return { from: addDays(today, -((weekdayOf(today) + 6) % 7)), to: today, label: "this week" };
  if (/\blast month\b/.test(t)) { const last = addDays(monthStart(today), -1); return { from: monthStart(last), to: last, label: "last month" }; }
  if (/\bthis month\b/.test(t)) return { from: monthStart(today), to: today, label: "this month" };
  // "last year" is the previous calendar year. It used to be unread, so a question about last year was silently answered for a different period.
  if (/\blast year\b/.test(t)) { const year = Number(today.slice(0, 4)) - 1; return { from: `${year}-01-01`, to: `${year}-12-31`, label: "last year" }; }
  if (/\b(?:this year|this season|so far this year)\b/.test(t)) return { from: `${today.slice(0, 4)}-01-01`, to: today, label: /season/.test(t) ? "this season" : "this year" };
  if (/\byesterday\b/.test(t)) return { from: addDays(today, -1), to: addDays(today, -1), label: "yesterday" };
  if (/\btoday\b/.test(t)) return { from: today, to: today, label: "today" };
  // "in September", "for March 2025": a named month (the most recent one that has begun, when no year is said), and "in 2025": a whole calendar year. A question about a month used to
  // be unread, so it was answered for a different period or not at all.
  if ((m = new RegExp(`\\b(?:in|for|during|of)\\s+${MONTH_PATTERN}(?:\\s+(\\d{4}))?\\b`, "i").exec(t))) {
    const month = monthIndex(m[1]);
    const thisYear = Number(today.slice(0, 4));
    const year = m[2] ? Number(m[2]) : month <= Number(today.slice(5, 7)) - 1 ? thisYear : thisYear - 1;
    const first = makeDay(year, month, 1);
    const last = addDays(makeDay(month === 11 ? year + 1 : year, month === 11 ? 0 : month + 1, 1), -1);
    if (first) return { from: first, to: last, label: `in ${MONTH_NAMES[month][0].toUpperCase()}${MONTH_NAMES[month].slice(1)} ${year}` };
  }
  if ((m = /\b(?:in|for|during)\s+(20\d{2})\b/.exec(t))) return { from: `${m[1]}-01-01`, to: `${m[1]}-12-31`, label: `in ${m[1]}` };
  return null;
}

module.exports = Object.freeze({ extractDay, extractTime, tidyTitle, extractRange, extractPeriod, describeDay, addDays, addMonths, weekdayOf, makeDay });
