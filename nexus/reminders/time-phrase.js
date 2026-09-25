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

function parseAssistantReminderTime(text = "", options = {}) {
  const zone = validTimeZone(options.timeZone || DEFAULT_TIME_ZONE);
  const nowInstant = options.now instanceof Date ? options.now : new Date();
  const now = localParts(nowInstant, zone);
  const lower = String(text || "").toLowerCase();
  const addMs = ms => new Date(nowInstant.getTime() + ms);

  const explicitTime = lower.match(/\bat\s+(\d{1,2})(?::(\d{2}))?\s*(am|pm)?\b/);
  const parsedClock = (() => {
    if (!explicitTime) return null;
    let hour = Number(explicitTime[1]);
    const minute = Number(explicitTime[2] || 0);
    const meridiem = explicitTime[3] || "";
    if (meridiem === "pm" && hour < 12) hour += 12;
    if (meridiem === "am" && hour === 12) hour = 0;
    return { hour, minute };
  })();

  // A given local calendar day (relative to today, in the caller's zone) at
  // either the explicit "at HH:MM" clock time if one was said, or else the
  // same hour/minute "now" currently is -- matching this function's own
  // original behavior of leaving the time-of-day alone when no explicit
  // time was given ("next Monday" keeps whatever time it is right now).
  // Only rolls forward an extra day for the explicit-time, same-day case,
  // exactly like the original: any dayOffset of 1 or more is already in
  // the future regardless of clock time, so no rollover check is needed
  // there (and doing one for the default clock would wrongly skip a day
  // whenever "now" is later than "now", which is never true anyway).
  const atLocalDay = (dayOffset, checkRollover = false) => {
    const clock = parsedClock || { hour: now.hour, minute: now.minute };
    const day = addLocalDays(now, dayOffset);
    const scheduled = zonedTimeToUtc(day.year, day.month, day.day, clock.hour, clock.minute, 0, zone);
    if (checkRollover && scheduled.getTime() <= nowInstant.getTime()) {
      const nextDay = addLocalDays(day, 1);
      return zonedTimeToUtc(nextDay.year, nextDay.month, nextDay.day, clock.hour, clock.minute, 0, zone);
    }
    return scheduled;
  };

  const relative = lower.match(/\bin\s+(\d{1,3})\s*(minute|minutes|min|hour|hours|hr|day|days|week|weeks)\b/);
  if (relative) {
    const amount = Number(relative[1]);
    const unit = relative[2];
    const multiplier = /minute|min/.test(unit) ? 60 * 1000
      : /hour|hr/.test(unit) ? 60 * 60 * 1000
        : /week/.test(unit) ? 7 * 24 * 60 * 60 * 1000
          : 24 * 60 * 60 * 1000;
    const date = addMs(amount * multiplier);
    return { scheduledAt: date.toISOString(), whenLabel: `in ${amount} ${unit}` };
  }

  const dayNames = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  const weekdayIndex = dayNames.findIndex(day => lower.includes(day));
  if (weekdayIndex >= 0) {
    const daysAhead = (weekdayIndex - now.weekdayIndex + 7) % 7 || 7;
    const scheduled = atLocalDay(daysAhead, false);
    return { scheduledAt: scheduled.toISOString(), whenLabel: `${dayNames[weekdayIndex]}${explicitTime ? ` at ${explicitTime[0].replace(/^at\s+/, "")}` : ""}` };
  }
  if (/\btomorrow\b/.test(lower)) {
    const scheduled = atLocalDay(1, false);
    return { scheduledAt: scheduled.toISOString(), whenLabel: `tomorrow${explicitTime ? ` at ${explicitTime[0].replace(/^at\s+/, "")}` : ""}` };
  }
  if (/\btonight\b/.test(lower)) {
    let scheduled = zonedTimeToUtc(now.year, now.month, now.day, 19, 0, 0, zone);
    if (scheduled.getTime() <= nowInstant.getTime()) {
      const tomorrow = addLocalDays(now, 1);
      scheduled = zonedTimeToUtc(tomorrow.year, tomorrow.month, tomorrow.day, 19, 0, 0, zone);
    }
    return { scheduledAt: scheduled.toISOString(), whenLabel: "tonight" };
  }
  if (/\blater today\b|\bthis afternoon\b/.test(lower)) {
    const isAfternoon = /\bafternoon\b/.test(lower);
    const targetHour = isAfternoon ? 15 : now.hour + 3;
    let scheduled = zonedTimeToUtc(now.year, now.month, now.day, targetHour, 0, 0, zone);
    if (scheduled.getTime() <= nowInstant.getTime()) scheduled = new Date(nowInstant.getTime() + 3 * 60 * 60 * 1000);
    return { scheduledAt: scheduled.toISOString(), whenLabel: isAfternoon ? "this afternoon" : "later today" };
  }
  if (explicitTime) {
    const scheduled = atLocalDay(0, true);
    return { scheduledAt: scheduled.toISOString(), whenLabel: explicitTime[0].replace(/^at\s+/, "") };
  }
  const fallback = addMs(24 * 60 * 60 * 1000);
  return { scheduledAt: fallback.toISOString(), whenLabel: "tomorrow" };
}

function extractAssistantReminderTask(text = "") {
  const source = String(text || "")
    .replace(/\bnexus\b/ig, " ")
    .replace(/\b(hey|please|can you|could you|would you)\b/ig, " ")
    .replace(/\s+/g, " ")
    .trim();
  const match = source.match(/\b(?:remind me to|remind me about|notify me to|notify me about|set a reminder to|set reminder to|remember to|follow up to|follow up about)\s+(.+)/i);
  const task = (match?.[1] || source)
    .replace(/\b(in\s+\d{1,3}\s*(minutes?|mins?|hours?|hrs?|days?|weeks?)|tomorrow|tonight|later today|this afternoon|on\s+(sunday|monday|tuesday|wednesday|thursday|friday|saturday)|at\s+\d{1,2}(:\d{2})?\s*(am|pm)?)\b/ig, " ")
    .replace(/\s+/g, " ")
    .trim();
  // Removing "in 2 minutes" from "test push in 2 minutes." left "test push ." (a space before the period).
  return task.replace(/\s+([.,!?;:])/g, "$1").trim() || "follow up";
}

// True only when the sentence names a time parseAssistantReminderTime really understands. Without one the parser
// silently falls back to "tomorrow", so callers that must not guess (the spoken reminder tool) check this first.
// Kept in step with the planner's reminder matcher (nexus/brain/planner.js completeRemainingWorkspacePlan).
const REMINDER_TIME_PHRASE = /\b(tomorrow|today|tonight|later today|this afternoon|in\s+\d{1,3}\s*(?:minutes?|mins?|hours?|hrs?|days?|weeks?)|(?:sunday|monday|tuesday|wednesday|thursday|friday|saturday)|\d{1,2}(?::\d{2})?\s*(?:am|pm))\b/i;

function hasReminderTimePhrase(text = "") {
  return REMINDER_TIME_PHRASE.test(String(text || ""));
}

module.exports = Object.freeze({ parseAssistantReminderTime, extractAssistantReminderTask, hasReminderTimePhrase, DEFAULT_TIME_ZONE });
