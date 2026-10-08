"use strict";

// Found live (notification-delivery audit): every date computed here used the server process's own local clock -- in production that's UTC, not the caller's real time zone. All
// calendar/clock arithmetic is done in the caller's real IANA zone (Intl.DateTimeFormat conversion, DST-safe), the same technique nexus/brief/schedule.js uses.
//
// Found by the user-journey sweep: 22 of 36 spoken ways to say "in 20 minutes" were scheduled for TOMORROW ("in 20 mins", "twenty five minutes", "half an hour", "in 2 hrs", every Kiswahili
// form), "1 hr 30 min" became 60 minutes, "at eight am" / "half past seven" / "saa mbili usiku" became 9am, and a bare "at 6" was quietly taken as 6pm. The time is now read by
// time-grammar.js (English and Kiswahili, number words, every abbreviation, the Swahili clock) and this file decides what to do with it:
//   * resolveReminderTime() returns { status: "ok" | "ask" | "none" }. "ask" is a time that is ambiguous (a bare "at 6": morning or evening?) or contradicts itself; "none" is no time at all.
//     Neither ever becomes a guessed reminder: the caller asks (ask.en / ask.sw) and sets nothing.
//   * Every answer carries `readback`, the time it resolved to in the person's own zone ("at 8:00 pm today", "in 20 minutes, at 8:14 pm today") and `readbackSw`.
//   * parseAssistantReminderTime() is the older shape ({ scheduledAt, whenLabel }) kept for callers that always need an instant; it now also says status/ask/readback so they can be strict.
const { scanTime, swahiliClockWords, SW_PERIODS, pad2 } = require("./time-grammar.js");
const { extractDay } = require("../personal/dates.js");
const { DEFAULT_TIME_ZONE } = require("./time-zone.js");
const { normaliseSwahiliDates, findSwahiliDate } = require("./sw-dates.js");

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

// Pure calendar-day arithmetic on abstract Y-M-D values -- never treated as a real instant itself, only ever fed back through zonedTimeToUtc, so this is safe from DST drift.
function addLocalDays({ year, month, day }, days) {
  const abstract = new Date(Date.UTC(year, month - 1, day));
  abstract.setUTCDate(abstract.getUTCDate() + days);
  return { year: abstract.getUTCFullYear(), month: abstract.getUTCMonth() + 1, day: abstract.getUTCDate() };
}

const pad = pad2;
// A day with no time said ("tomorrow", "next Monday", "15 October") is a reminder for the morning: 9am, and it is said back as 9:00 am.
const DEFAULT_DAY_CLOCK = Object.freeze({ hour: 9, minute: 0 });
// A part of the day with no clock time ("tomorrow morning", "this evening"). Said back with the hour.
const PERIOD_HOUR = Object.freeze({ morning: 8, noon: 12, midday: 12, afternoon: 15, evening: 18, night: 21 });
const MONTH_WORDS = "jan(?:uary)?|feb(?:ruary)?|mar(?:ch)?|apr(?:il)?|may|jun(?:e)?|jul(?:y)?|aug(?:ust)?|sep(?:t(?:ember)?)?|oct(?:ober)?|nov(?:ember)?|dec(?:ember)?";
// "15 October", "15th of October", "October 15", "2026-10-15".
const END_OF_MONTH = /\b(?:on\s+|by\s+|at\s+)?(?:the\s+)?(?:end|last\s+day)\s+of\s+(?:the\s+|this\s+)?month\b/i;
const DATE_PHRASE = new RegExp(`\\b\\d{4}-\\d{2}-\\d{2}\\b|\\b\\d{1,2}(?:st|nd|rd|th)?(?:\\s+of)?\\s+(?:${MONTH_WORDS})\\b|\\b(?:${MONTH_WORDS})\\s+\\d{1,2}(?:st|nd|rd|th)?\\b`, "i");

// Plain misspellings of the words a time is made of ("tomorow at 6"), so they are read as the time they mean and not dropped in favour of a guess. ("o'clock" is written "oclock" so it is one word.)
// Kiswahili dates ("tarehe 15 Oktoba", "Desemba 25", "mwisho wa mwezi") are turned into the English date phrases first (see sw-dates.js), so they follow exactly the rules the English ones do.
const fixTimeSpelling = text => normaliseSwahiliDates(String(text || "")).replace(/[’‘]/g, "'").replace(/\b(?:tomorow|tommorow|tommorrow|tomorro|tomorrw|tmrw|2morrow|2moro|tomoro)\b/gi, "tomorrow").replace(/\bo'?clock\b/gi, "oclock")
  .replace(/\bafter\s+(?=(?:\d|an?\s|half\b|one\b|two\b|three\b|four\b|five\b|six\b|seven\b|eight\b|nine\b|ten\b))/gi, "in ").replace(/\bin\s+in\b/gi, "in")
  // a stutter, as speech-to-text writes it ("remind remind me in 20 20 minutes to take take my medicine")
  .replace(/\b([a-z0-9']{2,})(?:\s+\1\b)+/gi, "$1");

// Kiswahili day and part-of-day words, as the English the rest of this file reads. (Only what is left once the clock and the lengths of time have been taken out.)
const SW_DAYS = { jumatatu: "monday", jumanne: "tuesday", jumatano: "wednesday", alhamisi: "thursday", ijumaa: "friday", jumamosi: "saturday", jumapili: "sunday" };
function swahiliToEnglish(lower) {
  return lower
    .replace(/\b(?:keshokutwa|kesho\s+kutwa)\b/g, "the day after tomorrow")
    .replace(/\b(?:usiku\s+wa\s+leo|leo\s+usiku)\b/g, "tonight")
    .replace(/\bkesho\b/g, "tomorrow").replace(/\bleo\b/g, "today")
    .replace(/\bwiki\s+ijayo\b/g, "next week")
    .replace(new RegExp(`\\b(${Object.keys(SW_DAYS).join("|")})\\b`, "g"), (whole, day) => SW_DAYS[day])
    .replace(/\b(?:asubuhi|alfajiri)\b/g, "morning").replace(/\b(?:mchana|alasiri)\b/g, "afternoon").replace(/\bjioni\b/g, "evening").replace(/\busiku\b/g, "night");
}
// A clipped request ("reminder 20 min medicine", "remind tomorrow 8am vet") may give a length of time without "in".
const isReminderFragment = text => /^\s*(?:(?:hey|please|ok|okay)\s+)*remind(?:er)?\b(?!\s+(?:me|us|you|to|about|that)\b)/i.test(String(text || ""));
const blank = (text, spans) => { let out = text; for (const [start, end] of spans) out = `${out.slice(0, start)}${" ".repeat(end - start)}${out.slice(end)}`; return out; };

// ---- saying a time back ----
const DAYS_EN = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const MONTHS_EN = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const DAYS_SW = ["Jumapili", "Jumatatu", "Jumanne", "Jumatano", "Alhamisi", "Ijumaa", "Jumamosi"];
const MONTHS_SW = ["Januari", "Februari", "Machi", "Aprili", "Mei", "Juni", "Julai", "Agosti", "Septemba", "Oktoba", "Novemba", "Desemba"];
const clockEn = (hour, minute) => `${hour % 12 || 12}:${pad(minute)} ${hour < 12 ? "am" : "pm"}`;
const clockShort = (hour, minute) => `${hour % 12 || 12}${minute ? `:${pad(minute)}` : ""}${hour < 12 ? "am" : "pm"}`;
const dayDiff = (a, b) => Math.round((Date.UTC(a.year, a.month - 1, a.day) - Date.UTC(b.year, b.month - 1, b.day)) / 86400000);

// "at 8:14 pm today", "at 9:00 am tomorrow", "at 9:00 am on Monday, 12 October" (and in Kiswahili: "saa mbili na dakika 14 usiku leo")
function describeMoment(instant, { now = new Date(), timeZone = DEFAULT_TIME_ZONE, language = "en" } = {}) {
  const zone = validTimeZone(timeZone);
  const at = localParts(new Date(instant), zone); const today = localParts(now, zone);
  const diff = dayDiff(at, today);
  if (language === "sw") {
    const when = diff === 0 ? "leo" : diff === 1 ? "kesho" : diff === 2 ? "keshokutwa" : `${DAYS_SW[at.weekdayIndex]}, tarehe ${at.day} ${MONTHS_SW[at.month - 1]}${at.year !== today.year ? ` ${at.year}` : ""}`;
    return `${when} ${swahiliClockWords(at.hour, at.minute)}`;
  }
  const when = diff === 0 ? "today" : diff === 1 ? "tomorrow" : `on ${DAYS_EN[at.weekdayIndex]}, ${at.day} ${MONTHS_EN[at.month - 1]}${at.year !== today.year ? ` ${at.year}` : ""}`;
  return `at ${clockEn(at.hour, at.minute)} ${when}`;
}

const NONE_ASK = Object.freeze({
  en: 'When should I remind you? For example, "in 20 minutes", "tomorrow at 8 am" or "today at 6 pm". Nothing was set yet.',
  sw: 'Nikukumbushe lini? Kwa mfano "baada ya dakika 20", "kesho saa mbili asubuhi" au "leo saa kumi na mbili jioni". Bado sijaweka chochote.'
});
const CONFLICT_ASK = Object.freeze({
  en: "I heard two different times. Which one should I use? Tell me just one, for example \"tomorrow at 8 am\". Nothing was set yet.",
  sw: 'Nimesikia nyakati mbili tofauti. Niweke ipi? Niambie moja tu, kwa mfano "kesho saa mbili asubuhi". Bado sijaweka chochote.'
});
const SW_HOURS_ASK = ["", "moja", "mbili", "tatu", "nne", "tano", "sita", "saba", "nane", "tisa", "kumi", "kumi na moja", "kumi na mbili"];
function ambiguousAsk(clock) {
  const hour = clock.hour12; const minute = clock.minute;
  const shown = `${hour}${minute ? `:${pad(minute)}` : ""}`;
  const en = hour === 12 && !minute ? "At 12 noon or 12 midnight? Nothing was set yet."
    : hour <= 3 ? `At ${shown} in the morning or in the afternoon? Say, for example, "${shown} in the afternoon" or "${shown} am". Nothing was set yet.`
      : `At ${shown} in the morning or in the evening? Say, for example, "${shown} in the evening" or "${shown} am". Nothing was set yet.`;
  const swHour = clock.swahili ? SW_HOURS_ASK[clock.swahiliHour] : SW_HOURS_ASK[((hour - 6 + 11) % 12) + 1];
  const sw = `Samahani, saa ngapi? Saa ${swHour} ni asubuhi, mchana, jioni au usiku? Sema kwa mfano "saa ${swHour} usiku". Bado sijaweka chochote.`;
  return { kind: "ambiguous-hour", hour12: hour, minute, en, sw, clockSpan: [clock.start, clock.end], swahili: Boolean(clock.swahili) };
}

function parseTimeInner(text = "", options = {}) {
  const zone = validTimeZone(options.timeZone || DEFAULT_TIME_ZONE);
  const nowInstant = options.now instanceof Date ? options.now : new Date();
  const now = localParts(nowInstant, zone);
  const src = fixTimeSpelling(text);
  const grammar = scanTime(src, { bareDurations: isReminderFragment(src) });
  const spans = grammar.spans;
  const lower = swahiliToEnglish(blank(src, spans).toLowerCase());
  const language = options.language === "sw" || grammar.swahili || (options.language !== "en" && (/\b(?:kesho|leo|keshokutwa|jumatatu|jumanne|jumatano|alhamisi|ijumaa|jumamosi|jumapili|nikumbushe|saa)\b/i.test(src) || Boolean(findSwahiliDate(text)) || /\b(?:tarehe|ijayo|ujao)\b|\bmwisho wa mwezi\b/i.test(String(text || "")))) ? "sw" : "en";
  const addMs = ms => new Date(nowInstant.getTime() + ms);
  const momentOptions = { now: nowInstant, timeZone: zone };

  const finish = (scheduled, whenLabel, extra = {}) => {
    const instant = scheduled instanceof Date ? scheduled : new Date(scheduled);
    const base = describeMoment(instant, momentOptions); const baseSw = describeMoment(instant, { ...momentOptions, language: "sw" });
    const lead = extra.durationLabel ? `${extra.durationLabel}, ` : "";
    const leadSw = extra.durationLabelSw ? `${extra.durationLabelSw}, ` : "";
    return { status: "ok", scheduledAt: instant.toISOString(), whenLabel, readback: `${lead}${base}`, readbackSw: `${leadSw}${baseSw}`, timeZone: zone, language, spans, ...extra };
  };
  const ask = (info, guess) => ({ status: info.kind === "none" ? "none" : "ask", ask: info, scheduledAt: guess.scheduledAt, whenLabel: guess.whenLabel, readback: "", readbackSw: "", timeZone: zone, language, spans, guess });
  const tomorrowGuess = () => ({ scheduledAt: addMs(24 * 60 * 60 * 1000).toISOString(), whenLabel: "tomorrow" });

  if (grammar.conflict) return ask({ kind: "conflict", ...CONFLICT_ASK }, tomorrowGuess());

  // A clock time the person said, if it is clear.
  const period = (lower.match(/\b(morning|midday|noon|afternoon|evening|night)\b/) || [])[1] || "";
  const tonightWord = /\btonight\b/.test(lower);
  let clock = grammar.clocks[0] || null;
  if (clock?.ambiguous) {
    const word = tonightWord ? "night" : ["morning", "afternoon", "evening", "night"].includes(period) ? period : "";
    if (word) {
      const resolvedHour = ({ morning: h => (h === 12 ? null : h), afternoon: h => (h === 12 ? 12 : h + 12), evening: h => (h === 12 ? null : h + 12), night: h => (h === 12 ? 0 : h >= 6 ? h + 12 : h) })[word](clock.hour12);
      if (resolvedHour !== null) clock = { ...clock, ambiguous: false, hour: resolvedHour };
    }
  }
  const ambiguous = Boolean(clock?.ambiguous);
  // For a named day an unmarked hour is read the way people mean it (1 to 6 afternoon, 7 to 11 morning, 12 noon): only used for the guess handed back with an "ask".
  let parsedClock = null;
  if (clock) parsedClock = ambiguous ? { hour: clock.hour12 >= 1 && clock.hour12 <= 6 ? clock.hour12 + 12 : clock.hour12, minute: clock.minute } : { hour: clock.hour, minute: clock.minute };
  const dayClock = () => parsedClock || (period && PERIOD_HOUR[period] !== undefined ? { hour: PERIOD_HOUR[period], minute: 0 } : DEFAULT_DAY_CLOCK);
  const usedDefaultClock = () => !parsedClock;
  const clockLabel = used => (clock?.swahili ? ` ${clock.spoken}` : clock?.named ? ` at ${clock.named}` : clock ? ` at ${clockShort(used.hour, used.minute)}` : period ? ` ${period}` : "");
  const answer = (scheduled, label, extra = {}) => {
    if (ambiguous) return ask(ambiguousAsk(clock), { scheduledAt: scheduled instanceof Date ? scheduled.toISOString() : scheduled, whenLabel: label });
    return finish(scheduled, label, extra);
  };

  // A given local calendar day (relative to today, in the caller's zone) at `clockUsed`.
  const atLocalDay = (dayOffset, clockUsed, checkRollover = false) => {
    const day = addLocalDays(now, dayOffset);
    const scheduled = zonedTimeToUtc(day.year, day.month, day.day, clockUsed.hour, clockUsed.minute, 0, zone);
    if (checkRollover && scheduled.getTime() <= nowInstant.getTime()) {
      const nextDay = addLocalDays(day, 1);
      return zonedTimeToUtc(nextDay.year, nextDay.month, nextDay.day, clockUsed.hour, clockUsed.minute, 0, zone);
    }
    return scheduled;
  };
  const nowClock = { hour: now.hour, minute: now.minute };

  // "in 20 minutes" and the other lengths of time: elapsed time, or whole calendar days (the same moment of the day, so no DST drift).
  if (grammar.durations.length) {
    const duration = grammar.durations[0];
    const said = src.slice(duration.start, duration.end).replace(/\s+/g, " ").trim().toLowerCase();
    if (!(duration.minutes > 0 || duration.days > 0)) return ask({ kind: "none", ...NONE_ASK }, tomorrowGuess());
    const label = /^(?:in|after|within)\s/i.test(said) ? `in ${duration.label}` : `in ${duration.label}`;
    const labelSw = duration.swahili ? (/^(?:baada|ndani)/.test(said) ? said : `baada ya ${said}`) : `baada ya ${duration.label.replace(/ hours?/, " masaa").replace(/ minutes?/, " dakika").replace(/ days?/, " siku")}`;
    if (duration.days > 0) {
      const used = clock && !ambiguous ? { hour: clock.hour, minute: clock.minute } : nowClock;
      const scheduled = atLocalDay(duration.days, used);
      const withExtra = duration.minutes ? new Date(scheduled.getTime() + duration.minutes * 60000) : scheduled;
      if (ambiguous) return ask(ambiguousAsk(clock), { scheduledAt: withExtra.toISOString(), whenLabel: label });
      return finish(withExtra, label, { durationLabel: label, durationLabelSw: labelSw });
    }
    return finish(addMs(duration.minutes * 60000), label, { durationLabel: label, durationLabelSw: labelSw });
  }
  if (grammar.unclear.length) return ask({ kind: "unit", en: `In ${grammar.unclear[0].amount ?? "how many"} what: minutes or hours? For example, "in 20 minutes" or "in 2 hours". Nothing was set yet.`, sw: 'Baada ya muda gani: dakika au masaa? Kwa mfano "baada ya dakika 20" au "baada ya masaa 2". Bado sijaweka chochote.' }, tomorrowGuess());

  // A real date: "on 15 October at 10am". extractDay rolls a date with no year to the next time it comes round, never one already past.
  if (DATE_PHRASE.test(lower)) {
    const todayText = `${now.year}-${pad(now.month)}-${pad(now.day)}`;
    const found = extractDay(lower, todayText);
    if (found?.day) {
      const [year, month, day] = found.day.split("-").map(Number);
      const used = dayClock();
      const scheduled = zonedTimeToUtc(year, month, day, used.hour, used.minute, 0, zone);
      // Said back to the person as they said it: "on 15 october at 10am", not an ISO date.
      if (scheduled.getTime() > nowInstant.getTime()) return answer(scheduled, `on ${lower.match(DATE_PHRASE)[0].replace(/^on\s+/, "")}${clockLabel(used)}`, { defaultedTime: usedDefaultClock() });
    }
  }

  // "on the 22nd" (no month): the next time that day of the month comes round, this month if it has not passed. A month with no such day (the 31st) is skipped.
  const dayOfMonth = lower.match(/\bon\s+the\s+(\d{1,2})(?:st|nd|rd|th)\b(?!\s+(?:of\s+)?(?:\w+\s+)?(?:\d{4}|jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec))/);
  if (dayOfMonth && Number(dayOfMonth[1]) >= 1 && Number(dayOfMonth[1]) <= 31) {
    const wanted = Number(dayOfMonth[1]); const used = dayClock();
    for (let step = 0; step < 14; step += 1) {
      const monthIndex = now.month - 1 + step; const year = now.year + Math.floor(monthIndex / 12); const month = (monthIndex % 12) + 1;
      if (wanted > new Date(Date.UTC(year, month, 0)).getUTCDate()) continue;
      const scheduled = zonedTimeToUtc(year, month, wanted, used.hour, used.minute, 0, zone);
      if (scheduled.getTime() > nowInstant.getTime()) return answer(scheduled, `on the ${dayOfMonth[1]}${dayOfMonth[0].match(/(st|nd|rd|th)\b/)[1]}${clockLabel(used)}`, { defaultedTime: usedDefaultClock() });
    }
  }

  // "the end of the month" ("mwisho wa mwezi"): the last day of this month, or of the next one when that day's time has already gone by.
  if (END_OF_MONTH.test(lower)) {
    const used = dayClock();
    for (let step = 0; step < 3; step += 1) {
      const monthIndex = now.month - 1 + step; const year = now.year + Math.floor(monthIndex / 12); const month = (monthIndex % 12) + 1;
      const scheduled = zonedTimeToUtc(year, month, new Date(Date.UTC(year, month, 0)).getUTCDate(), used.hour, used.minute, 0, zone);
      if (scheduled.getTime() > nowInstant.getTime()) return answer(scheduled, `on the last day of the month${clockLabel(used)}`, { defaultedTime: usedDefaultClock() });
    }
  }

  const dayNames = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  // Picking the weekday that appears EARLIEST IN THE TEXT (not earliest in the Sun-Sat array) matches what a person said first: "friday, not sunday".
  const weekdayPositions = dayNames.map(day => lower.indexOf(day)).map((position, index) => ({ index, position }));
  const earliestWeekday = weekdayPositions.filter(hit => hit.position >= 0).sort((a, b) => a.position - b.position)[0];
  const weekdayIndex = earliestWeekday ? earliestWeekday.index : -1;
  if (weekdayIndex >= 0) {
    const daysAhead = (weekdayIndex - now.weekdayIndex + 7) % 7 || 7;
    const used = dayClock();
    return answer(atLocalDay(daysAhead, used), `${dayNames[weekdayIndex]}${clockLabel(used)}`, { defaultedTime: usedDefaultClock() });
  }
  // "the day after tomorrow" is two days on. It used to be read as "tomorrow", so the reminder came a day early.
  if (/\bday after tomorrow\b/.test(lower)) {
    const used = dayClock();
    return answer(atLocalDay(2, used), `the day after tomorrow${clockLabel(used)}`, { defaultedTime: usedDefaultClock() });
  }
  if (/\btomorrow\b/.test(lower)) {
    const used = dayClock();
    return answer(atLocalDay(1, used), `tomorrow${clockLabel(used)}`, { defaultedTime: usedDefaultClock() });
  }
  if (tonightWord) {
    const used = parsedClock || { hour: 19, minute: 0 };
    let scheduled = zonedTimeToUtc(now.year, now.month, now.day, used.hour, used.minute, 0, zone);
    // Tonight at 12 or 1 means just after midnight, i.e. the early hours of the next day.
    if (used.hour <= 4 && now.hour >= 5) { const next = addLocalDays(now, 1); scheduled = zonedTimeToUtc(next.year, next.month, next.day, used.hour, used.minute, 0, zone); }
    if (scheduled.getTime() <= nowInstant.getTime()) {
      const tomorrow = addLocalDays(now, 1);
      scheduled = zonedTimeToUtc(tomorrow.year, tomorrow.month, tomorrow.day, used.hour, used.minute, 0, zone);
    }
    return answer(scheduled, "tonight", { defaultedTime: !parsedClock });
  }
  // "this morning / afternoon / evening", "later today": today at that part of the day; if it has already begun, in a little while instead of in the past.
  const thisPeriod = lower.match(/\bthis\s+(morning|afternoon|evening)\b/);
  if (thisPeriod || /\blater today\b/.test(lower)) {
    const targetHour = thisPeriod ? PERIOD_HOUR[thisPeriod[1]] : now.hour + 3;
    let scheduled = zonedTimeToUtc(now.year, now.month, now.day, parsedClock ? parsedClock.hour : Math.min(targetHour, 23), parsedClock ? parsedClock.minute : 0, 0, zone);
    if (scheduled.getTime() <= nowInstant.getTime()) scheduled = new Date(nowInstant.getTime() + (thisPeriod ? 60 : 3 * 60) * 60 * 1000);
    return answer(scheduled, thisPeriod ? `this ${thisPeriod[1]}` : "later today", { defaultedTime: !parsedClock });
  }
  // "in the evening" with no day: this evening if it has not come, else tomorrow's. It used to become "tomorrow" at the default time.
  const inPart = !parsedClock && lower.match(/\b(?:in|during)\s+the\s+(morning|afternoon|evening|night)\b/);
  if (inPart) {
    let scheduled = zonedTimeToUtc(now.year, now.month, now.day, PERIOD_HOUR[inPart[1]], 0, 0, zone);
    const tomorrowNote = scheduled.getTime() <= nowInstant.getTime();
    if (tomorrowNote) { const next = addLocalDays(now, 1); scheduled = zonedTimeToUtc(next.year, next.month, next.day, PERIOD_HOUR[inPart[1]], 0, 0, zone); }
    return finish(scheduled, `in the ${inPart[1]}${tomorrowNote ? " tomorrow" : ""}`, { defaultedTime: true });
  }
  // "next week at 9am" / "wiki ijayo saa tatu asubuhi": a week or a month is not a day, so the day is asked for; the clock alone must not be taken as the next time that hour comes round.
  if (parsedClock && /\b(?:next week|next month)\b/.test(lower)) return ask({ kind: "need-day", en: 'Which day, and what time? For example, "next Monday at 9 am". Nothing was set yet.', sw: 'Siku gani, na saa ngapi? Kwa mfano "jumatatu saa tatu asubuhi". Bado sijaweka chochote.' }, tomorrowGuess());
  if (parsedClock) {
    // A clock time and nothing else ("at 6pm", "at noon", "at 5"): the next time it comes round. A bare hour such as "at 5" is the next 5 o'clock, am or pm,
    // whichever is sooner (said at 3:30pm it is 5pm today; said at 6pm it is 5am tomorrow) -- but that is only the guess handed back with an "ask": the person is asked.
    if (ambiguous) {
      const hour12 = clock.hour12 % 12;
      const candidates = [[0, hour12], [0, hour12 + 12], [1, hour12]].map(([offset, hour]) => atLocalDay(offset, { hour, minute: parsedClock.minute }))
        .filter(date => date.getTime() > nowInstant.getTime());
      candidates.sort((a, b) => a.getTime() - b.getTime());
      return ask(ambiguousAsk(clock), { scheduledAt: candidates[0].toISOString(), whenLabel: clockShort(parsedClock.hour, parsedClock.minute) });
    }
    const scheduled = atLocalDay(0, parsedClock, true);
    // That time has already passed today, so it is for tomorrow: said so, not left for the person to find out when nothing arrives.
    const tomorrowNote = localParts(scheduled, zone).day !== now.day ? " tomorrow" : "";
    const shown = clock.swahili ? clock.spoken : clock.named ? clock.named : clockShort(parsedClock.hour, parsedClock.minute);
    return finish(scheduled, `${shown}${tomorrowNote}`, { rolledToTomorrow: Boolean(tomorrowNote) });
  }
  // "today" and nothing else: a day with no time is not enough to set a reminder on.
  if (/\btoday\b/.test(lower)) return ask({ kind: "need-time-today", en: 'What time today? For example, "at 6 pm" or "in 2 hours". Nothing was set yet.', sw: 'Leo saa ngapi? Kwa mfano "saa kumi na mbili jioni" au "baada ya masaa 2". Bado sijaweka chochote.' }, tomorrowGuess());
  if (/\b(?:next week|next month|this weekend|the weekend|weekend)\b/.test(lower)) return ask({ kind: "need-day", en: 'Which day, and what time? For example, "next Monday at 9 am". Nothing was set yet.', sw: 'Siku gani, na saa ngapi? Kwa mfano "jumatatu saa tatu asubuhi". Bado sijaweka chochote.' }, tomorrowGuess());
  return ask({ kind: "none", ...NONE_ASK }, tomorrowGuess());
}

// The time a reminder is set for, said back, or a question to ask first. A date that was said but could not be used (a day that does not exist, or one that has passed) is named in the
// words said back instead of quietly becoming "tomorrow".
function resolveReminderTime(text = "", options = {}) {
  const result = parseTimeInner(text, options);
  const said = fixTimeSpelling(text).toLowerCase().match(DATE_PHRASE);
  // A date that was said but cannot be used: a day that does not exist (31 February), or one that has passed. It is named in the person's own words, never quietly turned into another day.
  const badDate = () => {
    const own = findSwahiliDate(text);
    return { kind: "bad-date", en: `I could not use "${said[0]}": it is not a real day, or it has passed. Which day do you mean? Nothing was set yet.`,
      sw: `Siwezi kutumia "${own ? own.original : said[0]}": si siku halisi, au imepita. Unamaanisha siku gani? Bado sijaweka chochote.` };
  };
  if (result.status === "none" && said && result.ask?.kind === "none") return { ...result, status: "ask", ask: badDate() };
  if (result.status !== "ok") return result;
  if (said && !/^(?:on |in )/.test(result.whenLabel)) {
    return { ...result, status: "ask", ask: badDate(), whenLabel: `${result.whenLabel} (I could not use "${said[0]}": it is not a real day, or it has passed)` };
  }
  return result;
}

// The older shape: always an instant. A caller that must not guess checks `status` ("ok") -- anything else comes with `ask`, the question to put to the person.
function parseAssistantReminderTime(text = "", options = {}) {
  const result = resolveReminderTime(text, options);
  if (result.status === "ok") return result;
  return { ...result, scheduledAt: result.guess?.scheduledAt || result.scheduledAt, whenLabel: result.whenLabel || result.guess?.whenLabel || "tomorrow" };
}

// Every word group that names a day or a part of the day. One list, used to find the time in a sentence (hasReminderTimePhrase), to match a reminder request in the planner, and to cut the
// time out of the sentence to leave the task (extractAssistantReminderTask). (Clock times and lengths of time are read by time-grammar.js, which says where they sit.)
const WEEKDAYS = "sunday|monday|tuesday|wednesday|thursday|friday|saturday";
const PART_OF_DAY = "(?:morning|afternoon|evening|night)";
const SW_DAY_WORDS = "keshokutwa|kesho\\s+kutwa|usiku\\s+wa\\s+leo|leo\\s+usiku|kesho|leo|jumatatu|jumanne|jumatano|alhamisi|ijumaa|jumamosi|jumapili";
const TIME_WORDS = [
  // longest first: the alternation takes the first that matches, so "tomorrow morning" must be tried before "tomorrow"
  `(?:the\\s+)?day\\s+after\\s+tomorrow(?:\\s+${PART_OF_DAY})?`, `(?:tomorrow|today)\\s+${PART_OF_DAY}`, "tomorrow", "today", "tonight", "later today", `this\\s+${PART_OF_DAY}`,
  `(?:(?:on|next|this)\\s+)?(?:${WEEKDAYS})(?:\\s+${PART_OF_DAY})?`,
  `(?:in|during)\\s+the\\s+${PART_OF_DAY}`,
  `(?:on\\s+|by\\s+|at\\s+)?(?:the\\s+)?(?:end|last\\s+day)\\s+of\\s+(?:the\\s+|this\\s+)?month`,
  `(?:on\\s+)?\\d{4}-\\d{2}-\\d{2}`,
  `(?:on\\s+)?(?:the\\s+)?\\d{1,2}(?:st|nd|rd|th)?(?:\\s+of)?\\s+(?:${MONTH_WORDS})(?:,?\\s+\\d{4})?`,
  `(?:on\\s+)?(?:${MONTH_WORDS})\\s+\\d{1,2}(?:st|nd|rd|th)?(?:,?\\s+\\d{4})?`,
  // after the month forms, so "on the 22nd of October" is taken whole
  "on\\s+the\\s+\\d{1,2}(?:st|nd|rd|th)\\b",
  // Kiswahili
  `(?:${SW_DAY_WORDS})(?:\\s+(?:${SW_PERIODS}))?`
];
const TIME_ALTERNATION = TIME_WORDS.join("|");
const REMINDER_TIME_PHRASE = new RegExp(`\\b(?:${TIME_ALTERNATION})\\b`, "i");

// ---- the task: what is left once the time and the ways of asking are taken away ----
// Politeness and filler that is not part of what is to be remembered ("could you maybe", "abeg", "naomba", "tafadhali", "please").
const FILLER_WORDS = "hey|hi|hello|ok|okay|please|pls|plz|kindly|maybe|perhaps|abeg|naomba|nakuomba|tafadhali|kyro|nexus|agrinexus|sasa|then|so|um|uh|er|erm|just|quickly";
const ASK_WRAPPERS = "(?:(?:can|could|would|will)\\s+you(?:\\s+please)?|(?:i|we)\\s+(?:want|need|would\\s+like|'d\\s+like|wish|would\\s+love)\\s+you\\s+to|i\\s+(?:want|need)\\s+to\\s+be)";
const LEAD_INS = [
  "remind\\s+(?:me|us|you)\\s+(?:to|about|that|of)", "remind\\s+(?:me|us|you)", "reminder\\s+(?:to|about|that|for)", "a\\s+reminder\\s+(?:to|about|that|for)", "notify\\s+me\\s+(?:to|about|that)", "notify\\s+me", "set\\s+(?:a\\s+)?reminder\\s+(?:to|about|that|for)",
  "set\\s+(?:a\\s+)?reminder", "remember\\s+to", "follow\\s+up\\s+(?:to|about)", "i\\s+need\\s+(?:a\\s+)?reminder\\s+(?:to|about|that)?", "ni-?remind(?:\\s+me)?", "reminders?", "remind",
  "(?:ni)?(?:kumbushe|kumbushie|kumbusheni)(?:\\s+(?:kwamba|kuhusu|ya|kuwa))?", "(?:wa)?kumbushe(?:\\s+(?:kwamba|kuhusu|ya))?", "unikumbushe(?:\\s+(?:kwamba|kuhusu|ya))?", "(?:niwekee|weka)\\s+kikumbusho(?:\\s+(?:cha|kwamba|kuhusu|ya))?"
];
const LEAD_PATTERN = new RegExp(`^(?:${LEAD_INS.join("|")})(?![a-z])\\s*`, "i");
const FILLER_PATTERN = new RegExp(`^(?:(?:${FILLER_WORDS})(?![a-z])[,\\s]*|${ASK_WRAPPERS}(?![a-z])[,\\s]*(?:to\\s+)?)`, "i");

const ANYWHERE_LEAD = /\b(?:remind\s+(?:me|us|you)\s+(to|about|that|of)|notify\s+me\s+(to|about|that)|set\s+(?:a\s+)?reminder\s+(to|about|that|for)|remember\s+(to)|follow\s+up\s+(to|about)|(?:ni|u)?kumbush(?:e|ie)\s+(kwamba|kuhusu|ya)|(?:niwekee|weka)\s+kikumbusho\s+(cha|kwamba|kuhusu|ya))(?![a-z])\s+(.+)/i;

function extractAssistantReminderTask(text = "") {
  const fixed = fixTimeSpelling(text);
  const grammar = scanTime(fixed, { bareDurations: isReminderFragment(fixed) });
  const source = blank(fixed, grammar.spans);
  // The wording that asks (not part of the task): the lead-in may come after other words ("blah remind me to X"), so the task starts after the FIRST one.
  const anywhere = ANYWHERE_LEAD.exec(source);
  let aboutLead = Boolean(anywhere && /^(?:about|kuhusu)$/i.test(anywhere.slice(1, 8).find(Boolean) || ""));
  let task = (anywhere ? anywhere[8] : source);
  task = task.replace(new RegExp(`\\b(?:${TIME_ALTERNATION})\\b`, "ig"), " ").replace(/\s+/g, " ").trim();
  // Strip the wrappers one after another, however many were said ("could you maybe remind me to ...").
  for (let guard = 0; guard < 8; guard += 1) {
    const before = task;
    task = task.replace(FILLER_PATTERN, "").trim();
    const lead = LEAD_PATTERN.exec(task);
    if (lead) { if (/\babout\b|kuhusu/i.test(lead[0])) aboutLead = true; task = task.slice(lead[0].length).trim(); }
    task = task.replace(/^(?:to|that|kwamba|ili)\s+(?=\S)/i, "");
    if (task === before) break;
  }
  // "...tomorrow at 9 too call the vet": "too" where the person meant "to"
  task = task.replace(/^(?:too|2)\s+(?=[a-z]{3,})/i, "").replace(/^to\s+(?=[a-z]{3,})/i, "");
  task = task.replace(/\s+(?:please|pls|plz|abeg|tafadhali|for me|too)\s*([.!?]*)$/i, "$1").replace(/\s+([.,!?;:])/g, "$1").replace(/\s+/g, " ").trim();
  task = task.replace(/^[,;:.\-\s]+|[,;:\-\s]+$/g, "").trim();
  if (task && aboutLead && !/^about\b/i.test(task)) task = `about ${task}`;
  return task || "follow up";
}

// True when the sentence names a time (a length of time, a clock time, a day, a part of the day) -- including one that will need a question ("at 6"). Without one the reminder tools do not
// guess a time: they ask.
function hasReminderTimePhrase(text = "") {
  const fixed = fixTimeSpelling(text);
  const grammar = scanTime(fixed, { bareDurations: isReminderFragment(fixed) });
  if (grammar.spans.length) return true;
  return REMINDER_TIME_PHRASE.test(blank(fixed, grammar.spans));
}

module.exports = Object.freeze({ parseAssistantReminderTime, resolveReminderTime, describeMoment, extractAssistantReminderTask, hasReminderTimePhrase, REMINDER_TIME_PHRASE, DEFAULT_TIME_ZONE, NONE_ASK });
