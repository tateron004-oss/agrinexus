"use strict";

// Found live (notification-delivery audit): every date computed here used
// the server process's own local clock (new Date()/setHours()/setDate()) --
// in production that's UTC, not the caller's real time zone. "Remind me at
// 3pm" from someone in America/Los_Angeles was silently scheduled for 3pm
// UTC (7am/8am Pacific), hours off from what they actually asked for, and
// sometimes already in the past by the time it "arrived". context.timeZone
// is already captured from the request and threaded through the rest of
// the runtime (see nexus/companion/medications.js, nexus/brief/schedule.js)
// -- this module just never read it. Rewritten to do all calendar/clock
// arithmetic in the caller's real IANA zone, using the same
// Intl.DateTimeFormat-based conversion technique nexus/brief/schedule.js
// already relies on for DST correctness, so every phrase below now means
// what the caller actually meant in their own local time.
const DEFAULT_TIME_ZONE = "Africa/Nairobi";

function validTimeZone(zone) {
  try { new Intl.DateTimeFormat("en", { timeZone: zone }); return zone; } catch { return DEFAULT_TIME_ZONE; }
}

const WEEKDAY_INDEX = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

// The real calendar date/time an instant reads as in a given zone.
function localParts(date, timeZone) {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone, year: "numeric", month: "2-digit", day: "2-digit",
    hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false, weekday: "short"
  });
  const parts = Object.fromEntries(formatter.formatToParts(date).map(part => [part.type, part.value]));
  return {
    year: Number(parts.year), month: Number(parts.month), day: Number(parts.day),
    hour: Number(parts.hour) % 24, minute: Number(parts.minute), second: Number(parts.second),
    weekdayIndex: WEEKDAY_INDEX[parts.weekday] ?? new Date(date).getUTCDay()
  };
}

// The real UTC instant a given wall-clock date/time represents in a zone.
function zonedTimeToUtc(year, month, day, hour, minute, second, timeZone) {
  const guess = Date.UTC(year, month - 1, day, hour, minute, second);
  const rendered = localParts(new Date(guess), timeZone);
  const renderedAsUtc = Date.UTC(rendered.year, rendered.month - 1, rendered.day, rendered.hour, rendered.minute, rendered.second);
  return new Date(guess - (renderedAsUtc - guess));
}

// Pure calendar-day arithmetic on abstract Y-M-D values -- never treated as
// a real instant itself, only ever fed back through zonedTimeToUtc, so this
// is safe from DST drift.
function addLocalDays({ year, month, day }, days) {
  const abstract = new Date(Date.UTC(year, month - 1, day));
  abstract.setUTCDate(abstract.getUTCDate() + days);
  return { year: abstract.getUTCFullYear(), month: abstract.getUTCMonth() + 1, day: abstract.getUTCDate() };
}

const { extractDay } = require("../personal/dates.js");

const pad2 = value => String(value).padStart(2, "0");
// A day with no time said ("tomorrow", "next Monday", "15 October") is a reminder for the morning: 9am. It used to keep whatever time it happened to be
// right now, so "remind me tomorrow to buy seed" said at 3:30pm fired at 3:30pm tomorrow, an arbitrary time nobody asked for.
const DEFAULT_DAY_CLOCK = Object.freeze({ hour: 9, minute: 0 });
// A part of the day with no clock time ("tomorrow morning", "this evening").
const PERIOD_HOUR = Object.freeze({ morning: 8, noon: 12, midday: 12, afternoon: 15, evening: 18, night: 21 });
const MONTH_WORDS = "jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|jun(?:e)?|jul(?:y)?|aug(?:ust)?|sep(?:t(?:ember)?)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?";
// "15 October", "15th of October", "October 15", "2026-10-15".
const DATE_PHRASE = new RegExp(`\\b\\d{4}-\\d{2}-\\d{2}\\b|\\b\\d{1,2}(?:st|nd|rd|th)?(?:\\s+of)?\\s+(?:${MONTH_WORDS})\\b|\\b(?:${MONTH_WORDS})\\s+\\d{1,2}(?:st|nd|rd|th)?\\b`, "i");
const UNIT_MS = { minute: 60 * 1000, hour: 60 * 60 * 1000 };

// Plain misspellings of the words a time is made of ("tomorow at 6"), so they are read as the time they mean and not dropped in favour of a guess.
// A spelled-out number of minutes, hours, days or weeks ("in two minutes", "in ten minutes") is read as the digits, so it is not missed and turned into "tomorrow". ("one" stays: "in one hour" is read as it was.)
const NUMBER_WORDS = Object.freeze({ two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12, fifteen: 15, twenty: 20, thirty: 30, "forty five": 45, sixty: 60 });
const fixTimeSpelling = text => String(text || "").replace(/\b(?:tomorow|tommorow|tommorrow|tomorro|tomorrw|tmrw|2morrow|2moro|tomoro)\b/gi, "tomorrow").replace(/\bo['’]?clock\b/gi, "oclock")
  .replace(/\bin\s+(two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|fifteen|twenty|thirty|forty[ -]five|sixty)\s+(minutes?|mins?|hours?|hrs?|days?|weeks?)\b/gi,
    (whole, word, unit) => `in ${NUMBER_WORDS[word.toLowerCase().replace("-", " ")]} ${unit}`);

function parseTimeInner(text = "", options = {}) {
  const zone = validTimeZone(options.timeZone || DEFAULT_TIME_ZONE);
  const nowInstant = options.now instanceof Date ? options.now : new Date();
  const now = localParts(nowInstant, zone);
  const lower = fixTimeSpelling(text).toLowerCase();
  const addMs = ms => new Date(nowInstant.getTime() + ms);

  const period = (lower.match(/\b(morning|midday|noon|afternoon|evening|night)\b/) || [])[1] || "";
  const explicitTime = lower.match(/\bat\s+(\d{1,2})(?::(\d{2}))?\s*(am|pm)?\b/);
  const namedClock = /\b(?:at\s+)?(noon|midday|midnight)\b/.exec(lower);
  // A bare hour with no am/pm ("at 5"): the part of the day said ("tomorrow morning at 7") settles it; otherwise it is ambiguous and each branch below decides.
  let ambiguousHour = null;
  let parsedClock = (() => {
    if (explicitTime) {
      let hour = Number(explicitTime[1]);
      const minute = Number(explicitTime[2] || 0);
      let meridiem = explicitTime[3] || "";
      if (hour > 23 || minute > 59) return null;
      if (!meridiem && hour >= 1 && hour <= 12) {
        if (period === "morning") meridiem = "am";
        else if (["afternoon", "evening", "night"].includes(period) || /\btonight\b/.test(lower)) meridiem = "pm";
        else ambiguousHour = hour;
      }
      if (meridiem === "pm" && hour < 12) hour += 12;
      if (meridiem === "am" && hour === 12) hour = 0;
      return { hour, minute };
    }
    if (namedClock) return { hour: namedClock[1] === "midnight" ? 0 : 12, minute: 0 };
    return null;
  })();
  // For a named day, an unmarked hour is read the way people mean it: 1 to 6 is the afternoon or evening, 7 to 11 the morning, 12 noon.
  if (parsedClock && ambiguousHour !== null) {
    parsedClock = { hour: ambiguousHour >= 1 && ambiguousHour <= 6 ? ambiguousHour + 12 : ambiguousHour, minute: parsedClock.minute };
  }
  const dayClock = () => parsedClock || (period ? { hour: PERIOD_HOUR[period], minute: 0 } : DEFAULT_DAY_CLOCK);
  const timeLabel = () => (explicitTime ? ` at ${explicitTime[0].replace(/^at\s+/, "").trim()}` : namedClock ? ` at ${namedClock[1]}` : period ? ` ${period}` : "");

  // A given local calendar day (relative to today, in the caller's zone) at `clock`.
  const atLocalDay = (dayOffset, clock, checkRollover = false) => {
    const day = addLocalDays(now, dayOffset);
    const scheduled = zonedTimeToUtc(day.year, day.month, day.day, clock.hour, clock.minute, 0, zone);
    if (checkRollover && scheduled.getTime() <= nowInstant.getTime()) {
      const nextDay = addLocalDays(day, 1);
      return zonedTimeToUtc(nextDay.year, nextDay.month, nextDay.day, clock.hour, clock.minute, 0, zone);
    }
    return scheduled;
  };
  // "in 2 days" / "in a week" mean the same moment of the day, N calendar days on (so no DST drift), so they keep the current clock time.
  const nowClock = { hour: now.hour, minute: now.minute };

  // Elapsed time: "in 30 minutes", "in an hour", "in half an hour", "in a couple of hours", "in 2 days".
  const relativeNumber = lower.match(/\bin\s+(\d{1,3})\s*(minute|minutes|min|hour|hours|hr|day|days|week|weeks)\b/);
  const relativeWord = lower.match(/\bin\s+(half\s+an?|an?|one|a\s+couple\s+of|a\s+few)\s+(minute|minutes|hour|hours|day|days|week|weeks)\b/);
  const relative = relativeNumber || relativeWord;
  if (/\bin\s+(?:an?|one)\s+hours?\s+and\s+a\s+half\b/.test(lower)) return { scheduledAt: addMs(90 * UNIT_MS.minute).toISOString(), whenLabel: "in an hour and a half" };
  if (relative) {
    let amount = relativeNumber ? Number(relativeNumber[1]) : /half/.test(relativeWord[1]) ? 0.5 : /couple/.test(relativeWord[1]) ? 2 : /few/.test(relativeWord[1]) ? 3 : 1;
    const unit = relative[2];
    // "in half an hour" is the only half: 30 minutes. (Half a minute or half a day are not things anyone sets a reminder for.)
    if (amount === 0.5) { return { scheduledAt: addMs(30 * UNIT_MS.minute).toISOString(), whenLabel: "in half an hour" }; }
    const label = relativeNumber ? `in ${amount} ${unit}` : `in ${relativeWord[1].replace(/\s+/g, " ")} ${unit}`;
    if (/day|week/.test(unit)) {
      const days = /week/.test(unit) ? amount * 7 : amount;
      return { scheduledAt: atLocalDay(days, nowClock).toISOString(), whenLabel: label };
    }
    const multiplier = /minute|min/.test(unit) ? UNIT_MS.minute : UNIT_MS.hour;
    return { scheduledAt: addMs(amount * multiplier).toISOString(), whenLabel: label };
  }

  // A real date: "on 15 October at 10am". extractDay rolls a date with no year to the next time it comes round, never one already past.
  if (DATE_PHRASE.test(lower)) {
    const todayText = `${now.year}-${pad2(now.month)}-${pad2(now.day)}`;
    const found = extractDay(lower, todayText);
    if (found?.day) {
      const [year, month, day] = found.day.split("-").map(Number);
      const clock = dayClock();
      const scheduled = zonedTimeToUtc(year, month, day, clock.hour, clock.minute, 0, zone);
      // Said back to the person as they said it: "on 15 october at 10am", not an ISO date.
      if (scheduled.getTime() > nowInstant.getTime()) return { scheduledAt: scheduled.toISOString(), whenLabel: `on ${lower.match(DATE_PHRASE)[0].replace(/^on\s+/, "")}${timeLabel()}` };
    }
  }

  const dayNames = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  // Picking the weekday that appears EARLIEST IN THE TEXT (not earliest in the Sun-Sat array) matches what a person said first: "friday, not sunday".
  const weekdayPositions = dayNames.map(day => lower.indexOf(day)).map((position, index) => ({ index, position }));
  const earliestWeekday = weekdayPositions.filter(hit => hit.position >= 0).sort((a, b) => a.position - b.position)[0];
  const weekdayIndex = earliestWeekday ? earliestWeekday.index : -1;
  if (weekdayIndex >= 0) {
    const daysAhead = (weekdayIndex - now.weekdayIndex + 7) % 7 || 7;
    return { scheduledAt: atLocalDay(daysAhead, dayClock()).toISOString(), whenLabel: `${dayNames[weekdayIndex]}${timeLabel()}` };
  }
  // "the day after tomorrow" is two days on. It used to be read as "tomorrow", so the reminder came a day early.
  if (/\bday after tomorrow\b/.test(lower)) {
    return { scheduledAt: atLocalDay(2, dayClock()).toISOString(), whenLabel: `the day after tomorrow${timeLabel()}` };
  }
  if (/\btomorrow\b/.test(lower)) {
    return { scheduledAt: atLocalDay(1, dayClock()).toISOString(), whenLabel: `tomorrow${timeLabel()}` };
  }
  if (/\btonight\b/.test(lower)) {
    const clock = parsedClock || { hour: 19, minute: 0 };
    let scheduled = zonedTimeToUtc(now.year, now.month, now.day, clock.hour, clock.minute, 0, zone);
    if (scheduled.getTime() <= nowInstant.getTime()) {
      const tomorrow = addLocalDays(now, 1);
      scheduled = zonedTimeToUtc(tomorrow.year, tomorrow.month, tomorrow.day, clock.hour, clock.minute, 0, zone);
    }
    return { scheduledAt: scheduled.toISOString(), whenLabel: "tonight" };
  }
  // "this morning / afternoon / evening", "later today": today at that part of the day; if it has already begun, in a little while instead of in the past.
  const thisPeriod = lower.match(/\bthis\s+(morning|afternoon|evening)\b/);
  if (thisPeriod || /\blater today\b/.test(lower)) {
    const targetHour = thisPeriod ? PERIOD_HOUR[thisPeriod[1]] : now.hour + 3;
    let scheduled = zonedTimeToUtc(now.year, now.month, now.day, parsedClock ? parsedClock.hour : targetHour, parsedClock ? parsedClock.minute : 0, 0, zone);
    if (scheduled.getTime() <= nowInstant.getTime()) scheduled = new Date(nowInstant.getTime() + (thisPeriod ? 60 : 3 * 60) * 60 * 1000);
    return { scheduledAt: scheduled.toISOString(), whenLabel: thisPeriod ? `this ${thisPeriod[1]}` : "later today" };
  }
  if (parsedClock) {
    // A clock time and nothing else ("at 6pm", "at noon", "at 5"): the next time it comes round. A bare hour such as "at 5" is the next 5 o'clock, am or pm,
    // whichever is sooner (said at 3:30pm it is 5pm today; said at 6pm it is 5am tomorrow).
    if (ambiguousHour !== null) {
      const hour12 = ambiguousHour % 12;
      const candidates = [[0, hour12], [0, hour12 + 12], [1, hour12]].map(([offset, hour]) => atLocalDay(offset, { hour, minute: parsedClock.minute }))
        .filter(date => date.getTime() > nowInstant.getTime());
      candidates.sort((a, b) => a.getTime() - b.getTime());
      return { scheduledAt: candidates[0].toISOString(), whenLabel: explicitTime[0].replace(/^at\s+/, "").trim() };
    }
    const scheduled = atLocalDay(0, parsedClock, true);
    // That time has already passed today, so it is for tomorrow: said so, not left for the person to find out when nothing arrives.
    const tomorrowNote = localParts(scheduled, zone).day !== now.day ? " tomorrow" : "";
    return { scheduledAt: scheduled.toISOString(), whenLabel: `${explicitTime ? explicitTime[0].replace(/^at\s+/, "").trim() : namedClock[1]}${tomorrowNote}` };
  }
  const fallback = addMs(24 * 60 * 60 * 1000);
  return { scheduledAt: fallback.toISOString(), whenLabel: "tomorrow" };
}

// The time a reminder is set for, and how it is said back. A date that was said but could not be used (a day that does not exist, or one that has passed) is named in the
// words said back instead of quietly becoming "tomorrow".
function parseAssistantReminderTime(text = "", options = {}) {
  const result = parseTimeInner(text, options);
  const said = fixTimeSpelling(text).toLowerCase().match(DATE_PHRASE);
  if (said && !/^(?:on |in )/.test(result.whenLabel)) {
    return { ...result, whenLabel: `${result.whenLabel} (I could not use "${said[0]}": it is not a real day, or it has passed)` };
  }
  return result;
}

// Every word group that names a time. One list, used to find the time in a sentence (hasReminderTimePhrase), to match a reminder request in the planner, and to cut the
// time out of the sentence to leave the task (extractAssistantReminderTask), so the three can never drift apart.
const WEEKDAYS = "sunday|monday|tuesday|wednesday|thursday|friday|saturday";
const PART_OF_DAY = "(?:morning|afternoon|evening|night)";
const TIME_WORDS = [
  // longest first: the alternation takes the first that matches, so "tomorrow morning" must be tried before "tomorrow"
  `(?:the\\s+)?day\\s+after\\s+tomorrow(?:\\s+${PART_OF_DAY})?`, `(?:tomorrow|today)\\s+${PART_OF_DAY}`, "tomorrow", "today", "tonight", "later today", `this\\s+${PART_OF_DAY}`,
  "in\\s+\\d{1,3}\\s*(?:minutes?|mins?|hours?|hrs?|days?|weeks?)",
  "in\\s+(?:half\\s+an?|an?|one|a\\s+couple\\s+of|a\\s+few)\\s+(?:minutes?|hours?|days?|weeks?)(?:\\s+and\\s+a\\s+half)?",
  `(?:(?:on|next|this)\\s+)?(?:${WEEKDAYS})(?:\\s+${PART_OF_DAY})?`,
  "(?:at\\s+)?(?:noon|midday|midnight)",
  "(?:at\\s+)?\\d{1,2}\\s*oclock",
  `(?:in|during)\\s+the\\s+${PART_OF_DAY}`,
  "(?:at\\s+)?\\d{1,2}(?::\\d{2})?\\s*(?:am|pm)",
  "at\\s+(?:1[0-2]|0?[1-9])(?::[0-5]\\d)?(?![\\d:]|\\s*(?:am|pm|kg|bags?|%|percent|per|each|units?))",
  `(?:on\\s+)?\\d{4}-\\d{2}-\\d{2}`,
  `(?:on\\s+)?(?:the\\s+)?\\d{1,2}(?:st|nd|rd|th)?(?:\\s+of)?\\s+(?:${MONTH_WORDS})(?:,?\\s+\\d{4})?`,
  `(?:on\\s+)?(?:${MONTH_WORDS})\\s+\\d{1,2}(?:st|nd|rd|th)?(?:,?\\s+\\d{4})?`
];
const TIME_ALTERNATION = TIME_WORDS.join("|");
const REMINDER_TIME_PHRASE = new RegExp(`\\b(?:${TIME_ALTERNATION})\\b`, "i");

function extractAssistantReminderTask(text = "") {
  const source = fixTimeSpelling(text)
    .replace(/\bnexus\b/ig, " ")
    .replace(/\b(hey|please|can you|could you|would you)\b/ig, " ")
    .replace(/\s+/g, " ")
    .trim();
  const match = source.match(/\b(remind me to|remind me about|notify me to|notify me about|set a reminder to|set reminder to|remember to|follow up to|follow up about)\s+(.+)/i);
  // "remind me about the clinic": the task is "about the clinic", so the reply can say "remind you about the clinic" and not "remind you to the clinic".
  let aboutLead = Boolean(match && /about$/i.test(match[1]));
  let task = (match?.[2] || source)
    .replace(new RegExp(`\\b(?:${TIME_ALTERNATION})\\b`, "ig"), " ")
    // "remind me tomorrow at 7am to check the tank": with the time cut out only "remind me to check the tank" is left, which is not the task.
    .replace(/^\s*(?:remind me|notify me|set a reminder|set reminder)\s*(to|about|that)?\s+/i, (whole, word) => { if (/^about$/i.test(word || "")) aboutLead = true; return ""; })
    .replace(/\s+/g, " ")
    .trim();
  // Removing "in 2 minutes" from "test push in 2 minutes." left "test push ." (a space before the period).
  task = task.replace(/\s+([.,!?;:])/g, "$1").trim();
  if (task && aboutLead && !/^about\b/i.test(task)) task = `about ${task}`;
  return task || "follow up";
}

// True only when the sentence names a time parseAssistantReminderTime really understands. Without one the parser
// silently falls back to "tomorrow", so callers that must not guess (the spoken reminder tool) check this first.
function hasReminderTimePhrase(text = "") {
  return REMINDER_TIME_PHRASE.test(fixTimeSpelling(text));
}

module.exports = Object.freeze({ parseAssistantReminderTime, extractAssistantReminderTask, hasReminderTimePhrase, REMINDER_TIME_PHRASE, DEFAULT_TIME_ZONE });
