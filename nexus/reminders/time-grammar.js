"use strict";

// Reading a time out of what a person said, in English and Kiswahili: how long from now ("in 20 mins", "twenty five minutes", "an hour and a half", "baada ya dakika ishirini", "nusu saa")
// and what the clock says ("at 8 pm", "eight thirty", "half past seven", "quarter to six", "saa mbili usiku").
//
// It only READS. It finds each piece of time in the sentence, says where it was (so the task can be cut out around it), and says plainly when it is not sure: a bare "at 6" is
// "ambiguous" (6 in the morning or in the evening), two different times in one sentence are a "conflict". It never picks a time for the person.
//
// The Swahili clock counts from sunrise: "saa moja" is 7 o'clock, "saa mbili" 8, "saa sita" 12, "saa saba" 1, "saa kumi na mbili" 6. With the part of the day
// (asubuhi morning, mchana midday/afternoon, jioni evening, usiku night, alfajiri dawn): saa moja asubuhi 7am, saa moja usiku 7pm, saa mbili usiku 8pm, saa sita mchana 12 noon.
// A Swahili hour with no part of the day is asked about, never guessed. The Swahili wording of every reply should be checked by a fluent speaker.

// ---- numbers ----
const EN_ONES = { zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15, sixteen: 16, seventeen: 17, eighteen: 18, nineteen: 19 };
const EN_TENS = { twenty: 20, thirty: 30, forty: 40, fourty: 40, fifty: 50, sixty: 60, seventy: 70, eighty: 80, ninety: 90 };
const longestFirst = words => Object.keys(words).sort((a, b) => b.length - a.length).join("|");
const EN_ONES_1_9 = "one|two|three|four|five|six|seven|eight|nine";
const EN_NUMBER_WORD = `(?:(?:${longestFirst(EN_TENS)})(?:[\\s-]+(?:${EN_ONES_1_9}))?|(?:${longestFirst(EN_ONES)}))(?![a-z])`;
const EN_NUMBER = `(?:\\d{1,4}(?:\\.\\d+)?|(?:(?:a|one)\\s+hundred(?:\\s+and)?\\s+)?${EN_NUMBER_WORD})`;
function enNumber(text) {
  const raw = String(text || "").toLowerCase().trim();
  if (/^\d+(?:\.\d+)?$/.test(raw)) return Number(raw);
  let total = 0;
  for (const token of raw.split(/[\s-]+/).filter(item => item && item !== "and")) {
    if (token === "a") continue;
    if (token === "hundred") total = (total || 1) * 100;
    else if (token in EN_TENS) total += EN_TENS[token];
    else if (token in EN_ONES) total += EN_ONES[token];
    else return null;
  }
  return total;
}

const SW_ONES = { sifuri: 0, moja: 1, mbili: 2, tatu: 3, nne: 4, tano: 5, sita: 6, saba: 7, nane: 8, tisa: 9, mawili: 2, matatu: 3, manne: 4, matano: 5 };
const SW_TENS = { kumi: 10, ishirini: 20, thelathini: 30, arobaini: 40, hamsini: 50, sitini: 60, sabini: 70, themanini: 80, tisini: 90 };
const SW_ONES_1_9 = "moja|mbili|tatu|nne|tano|sita|saba|nane|tisa";
const SW_NUMBER_WORD = `(?:mia(?:\\s+(?:${SW_ONES_1_9}))?(?:\\s+na\\s+)?(?:(?:${longestFirst(SW_TENS)})(?:\\s+na\\s+(?:${SW_ONES_1_9}))?)?|(?:${longestFirst(SW_TENS)})(?:\\s+na\\s+(?:${SW_ONES_1_9}))?|(?:${longestFirst(SW_ONES)}))(?![a-z])`;
const SW_NUMBER = `(?:\\d{1,4}|${SW_NUMBER_WORD})`;
function swNumber(text) {
  const raw = String(text || "").toLowerCase().trim();
  if (/^\d+$/.test(raw)) return Number(raw);
  const tokens = raw.split(/\s+/).filter(item => item && item !== "na");
  let total = 0;
  for (let index = 0; index < tokens.length; index += 1) {
    const token = tokens[index];
    if (token === "mia") { const next = SW_ONES[tokens[index + 1]]; if (next !== undefined && next >= 1) { total += 100 * next; index += 1; } else total += 100; }
    else if (token in SW_TENS) total += SW_TENS[token];
    else if (token in SW_ONES) total += SW_ONES[token];
    else return null;
  }
  return total;
}

const SW_PERIODS = "asubuhi|mchana|alasiri|jioni|usiku|alfajiri";
const PERIOD_WORDS = "morning|afternoon|evening|night";
const AMPM = "(a\\.?\\s?m\\.?|p\\.?\\s?m\\.?)(?![a-z])";
const meridiemOf = text => (text ? (/^p/i.test(text) ? "pm" : "am") : null);
// "at 5 bags", "at 6 per kg": a number that is a quantity or a price, not a time
const NOT_A_CLOCK_UNIT = "(?:kgs?|kilos?|bags?|sacks?|crates?|%|percent|per|each|units?|litres?|liters?|acres?|hectares?|shillings?|ksh|kes|naira|cedis?|dollars?|pieces?|doses?|tablets?|pills?|mg|ml|times|cows?|goats?|chickens?|eggs?|minutes?|mins?|hours?|hrs?|days?|weeks?)\\b";

const pad2 = value => String(value).padStart(2, "0");
const clean = value => String(value ?? "").replace(/\s+/g, " ").trim();

// ---- parts of the day tied to a clock time ("7 in the evening", "7 tonight", "saa mbili usiku") ----
const PERIOD_TAIL = `(?:\\s+(?:in\\s+the\\s+|of\\s+the\\s+|at\\s+|this\\s+)(${PERIOD_WORDS})(?![a-z])|\\s+(tonight)(?![a-z]))?`;
const periodFromTail = (a, b) => (b ? "night" : a ? String(a).toLowerCase() : "");

// The 24-hour clock a 12-hour hour, an am/pm and/or a part of the day mean. -> { hour } | { ambiguous: true, hour12 }
function resolveHour(hourText, meridiem, period, { leadingZero = false, twentyFour = false } = {}) {
  const hour = Number(hourText);
  if (!Number.isInteger(hour) || hour < 0 || hour > 23) return null;
  if (hour === 0 || hour >= 13 || twentyFour || (leadingZero && !meridiem)) {
    if (meridiem && hour >= 13) return null;
    return { hour };
  }
  if (meridiem === "pm") return { hour: hour === 12 ? 12 : hour + 12 };
  if (meridiem === "am") return { hour: hour === 12 ? 0 : hour };
  switch (period) {
    case "morning": return hour === 12 ? { ambiguous: true, hour12: 12 } : { hour };
    case "afternoon": return { hour: hour === 12 ? 12 : hour + 12 };
    case "evening": return hour === 12 ? { ambiguous: true, hour12: 12 } : { hour: hour + 12 };
    case "night": return hour === 12 ? { hour: 0 } : hour >= 6 ? { hour: hour + 12 } : { hour };
    default: return { ambiguous: true, hour12: hour };
  }
}

// ---- the Swahili clock ----
const SW_HOUR_WORDS = ["", "moja", "mbili", "tatu", "nne", "tano", "sita", "saba", "nane", "tisa", "kumi", "kumi na moja", "kumi na mbili"];
const swahiliHourOf = hour24 => ((((hour24 % 12) || 12) - 6 + 11) % 12) + 1; // 8 -> mbili(2), 12 -> sita(6), 6 -> kumi na mbili(12)
const clock12OfSwahili = swahiliHour => ((swahiliHour + 5) % 12) + 1;
function swahiliPeriodOf(hour24) {
  if (hour24 >= 4 && hour24 < 6) return "alfajiri";
  if (hour24 >= 6 && hour24 < 12) return "asubuhi";
  if (hour24 >= 12 && hour24 < 16) return "mchana";
  if (hour24 >= 16 && hour24 < 19) return "jioni";
  return "usiku";
}
// 20:14 -> "saa mbili na dakika 14 usiku"; 20:30 -> "saa mbili na nusu usiku"; 19:45 -> "saa mbili kasoro robo usiku"
function swahiliClockWords(hour24, minute) {
  let hour = hour24; let tail = "";
  if (minute === 0) tail = "";
  else if (minute === 15) tail = " na robo";
  else if (minute === 30) tail = " na nusu";
  else if (minute === 45) { hour = (hour24 + 1) % 24; tail = " kasoro robo"; }
  else tail = ` na dakika ${minute}`;
  return `saa ${SW_HOUR_WORDS[swahiliHourOf(hour)]}${tail} ${swahiliPeriodOf(minute === 45 ? hour24 : hour24)}`;
}
// the 24-hour hour a Swahili hour means in a part of the day (null when the part of the day does not fit)
function swahiliTo24(swahiliHour, period) {
  if (!(swahiliHour >= 1 && swahiliHour <= 12)) return null;
  const h = clock12OfSwahili(swahiliHour);
  switch (period) {
    case "asubuhi": case "alfajiri": return h === 12 ? 12 : h;
    case "mchana": case "alasiri": return h === 12 ? 12 : h + 12;
    case "jioni": return h === 12 ? 12 : h + 12;
    case "usiku": return h === 12 ? 0 : h >= 6 ? h + 12 : h;
    default: return null;
  }
}

// ---- how long from now ----
const UNIT_RE = "(seconds?|secs?|minutes?|mins?|hours?|hrs?|days?|weeks?|wks?)(?![a-z])";
const unitKind = word => { const w = String(word).toLowerCase(); return /^sec/.test(w) ? "second" : /^min/.test(w) || w === "m" ? "minute" : /^(h|hr|hour)/.test(w) ? "hour" : /^d/.test(w) ? "day" : "week"; };
const MS = { second: 1000, minute: 60000, hour: 3600000 };
const plural = (count, word) => `${count} ${word}${count === 1 ? "" : "s"}`;

// Reads "20 mins", "an hour and a half", "1 hr 30 min", "half an hour", "dakika ishirini", "nusu saa"... at the START of `rest`.
// -> { length, minutes, days, label, swahili } | null.  minutes is elapsed time; days is whole calendar days (kept apart so a change of clocks cannot shift it).
function readDurationBody(rest, { allowHourWord }) {
  let m;
  const done = (length, minutes, days, label, swahili = false) => ({ length, minutes, days, label, swahili });
  // ---- Kiswahili ----
  if ((m = /^nusu\s+saa(?![a-z])/i.exec(rest))) return done(m[0].length, 30, 0, "half an hour", true);
  if ((m = /^robo\s+saa(?![a-z])/i.exec(rest))) return done(m[0].length, 15, 0, "a quarter of an hour", true);
  if ((m = new RegExp(`^(masaa|saa)\\s+(${SW_NUMBER})(?:\\s+na\\s+(nusu|robo)(?![a-z])|\\s+na\\s+dakika\\s+(${SW_NUMBER}))?`, "i").exec(rest)) && (allowHourWord || /^masaa/i.test(m[1]))) {
    const hours = swNumber(m[2]);
    if (hours !== null) {
      const extra = m[3] ? (/nusu/i.test(m[3]) ? 30 : 15) : m[4] ? swNumber(m[4]) : 0;
      if (extra !== null) return done(m[0].length, hours * 60 + extra, 0, `${plural(hours, "hour")}${extra ? ` ${plural(extra, "minute")}` : ""}`, true);
    }
  }
  if ((m = new RegExp(`^dakika\\s+(${SW_NUMBER})(?![a-z])(?:\\s+(?:zijazo|kutoka\\s+sasa))?`, "i").exec(rest))) { const n = swNumber(m[1]); if (n !== null) return done(m[0].length, n, 0, plural(n, "minute"), true); }
  if ((m = new RegExp(`^(${SW_NUMBER})\\s+(dakika|masaa|siku|wiki)(?![a-z])`, "i").exec(rest))) {
    const n = swNumber(m[1]);
    if (n !== null) { const unit = m[2].toLowerCase(); return unit === "dakika" ? done(m[0].length, n, 0, plural(n, "minute"), true) : unit === "masaa" ? done(m[0].length, n * 60, 0, plural(n, "hour"), true) : done(m[0].length, 0, unit === "siku" ? n : n * 7, plural(unit === "siku" ? n : n * 7, "day"), true); }
  }
  if ((m = new RegExp(`^(siku|wiki)\\s+(${SW_NUMBER})(?![a-z])`, "i").exec(rest))) { const n = swNumber(m[2]); if (n !== null) return done(m[0].length, 0, /^siku/i.test(m[1]) ? n : n * 7, plural(/^siku/i.test(m[1]) ? n : n * 7, "day"), true); }
  // ---- English ----
  if ((m = new RegExp(`^(${EN_NUMBER})\\s+and\\s+a\\s+half\\s+${UNIT_RE}`, "i").exec(rest))) {
    const n = enNumber(m[1]); const kind = unitKind(m[2]);
    if (n !== null && kind !== "second") {
      const label = `${n} and a half ${kind}s`;
      if (kind === "minute") return done(m[0].length, n + 0.5, 0, label);
      if (kind === "hour") return done(m[0].length, n * 60 + 30, 0, label);
      return done(m[0].length, 12 * 60, kind === "day" ? n : n * 7, label);
    }
  }
  if ((m = new RegExp(`^(${EN_NUMBER}|an?)\\s+(hour|day|week)s?\\s+and\\s+(?:a\\s+)?half(?![a-z])`, "i").exec(rest))) {
    const n = /^an?$/i.test(m[1]) ? 1 : enNumber(m[1]); const kind = unitKind(m[2]);
    if (n !== null) {
      const label = `${/^an?$/i.test(m[1]) ? (kind === "hour" ? "an" : "a") : n} ${kind}${n === 1 || /^an?$/i.test(m[1]) ? "" : "s"} and a half`;
      return kind === "hour" ? done(m[0].length, n * 60 + 30, 0, label) : { ...done(m[0].length, 12 * 60, kind === "day" ? n : n * 7, label) };
    }
  }
  if ((m = /^half\s+(?:an?\s+|of\s+an?\s+)?(hour|minute|day)(?![a-z])/i.exec(rest))) { const kind = unitKind(m[1]); return kind === "hour" ? done(m[0].length, 30, 0, "half an hour") : kind === "day" ? done(m[0].length, 12 * 60, 0, "half a day") : null; }
  if ((m = /^(?:a\s+|one\s+)?quarter\s+(?:of\s+)?(?:an?\s+)?hour(?![a-z])/i.exec(rest))) return done(m[0].length, 15, 0, "a quarter of an hour");
  if ((m = /^(?:three|3)\s+quarters?\s+(?:of\s+)?(?:an?\s+)?hour(?![a-z])/i.exec(rest))) return done(m[0].length, 45, 0, "three quarters of an hour");
  if ((m = new RegExp(`^a\\s+(couple)\\s+(?:of\\s+)?${UNIT_RE}|^a\\s+(few)\\s+${UNIT_RE}`, "i").exec(rest))) {
    const couple = Boolean(m[1]); const kind = unitKind(m[2] || m[4]); const n = couple ? 2 : 3;
    const label = `a ${couple ? "couple of" : "few"} ${kind}s`;
    return kind === "second" ? null : kind === "minute" ? done(m[0].length, n, 0, label) : kind === "hour" ? done(m[0].length, n * 60, 0, label) : done(m[0].length, 0, kind === "day" ? n : n * 7, label);
  }
  // one or more "<number> <unit>" pieces: "20 mins", "1 hr 30 min", "2 hours and 15 minutes", "1h30m", "a minute"
  let position = 0; let minutes = 0; let days = 0; const labels = []; let lastKind = ""; let any = false;
  for (let guard = 0; guard < 4; guard += 1) {
    const tail = rest.slice(position);
    const joiner = any ? /^(?:\s*(?:,|&|\+)\s*|\s+and\s+|\s+|)/i.exec(tail) : [""];
    if (any && !joiner) break;
    const piece = tail.slice(joiner[0].length);
    let item = new RegExp(`^(${EN_NUMBER}|an?)\\s*${UNIT_RE}`, "i").exec(piece);
    let quantity; let kind; let spoken = null;
    if (item) {
      spoken = /^an?$/i.test(item[1]) ? item[1].toLowerCase() : null;
      quantity = spoken ? 1 : enNumber(item[1]); kind = unitKind(item[2]);
    } else if ((item = /^(\d{1,4}(?:\.\d+)?)\s?([hm])(?![a-z])/i.exec(piece)) && (any || /^\d/.test(piece))) {
      quantity = Number(item[1]); kind = item[2].toLowerCase() === "h" ? "hour" : "minute";
    } else if (any && lastKind === "hour" && (item = /^(\d{1,2})(?![\d:.]|\s*(?:am|pm|o'?clock))/i.exec(piece)) && Number(item[1]) < 60 && /\dh\s*$/i.test(rest.slice(0, position))) {
      quantity = Number(item[1]); kind = "minute";
    } else break;
    if (quantity === null || !(quantity >= 0)) return null;
    if (any && ((lastKind === "minute" || lastKind === "second") && ["hour", "day", "week"].includes(kind))) break;
    if (kind === "second") minutes += quantity / 60;
    else if (kind === "minute") minutes += quantity;
    else if (kind === "hour") minutes += quantity * 60;
    else if (kind === "day") { if (!Number.isInteger(quantity)) { days += Math.floor(quantity); minutes += (quantity % 1) * 24 * 60; } else days += quantity; }
    else { const whole = quantity * 7; if (!Number.isInteger(whole)) { days += Math.floor(whole); minutes += (whole % 1) * 24 * 60; } else days += whole; }
    labels.push(spoken ? `${spoken} ${kind}` : plural(quantity, kind === "second" ? "second" : kind));
    position += joiner[0].length + item[0].length; lastKind = kind; any = true;
  }
  if (!any) return null;
  return done(position, minutes, days, labels.join(" "));
}

// All the "how long from now" phrases in `src`. A phrase needs its lead-in ("in", "after", "within", "baada ya", "ndani ya") or its tail ("from now", "later"); a few Swahili
// forms ("dakika 20", "nusu saa", "masaa mawili") stand on their own.
function findDurations(src, { bare = false } = {}) {
  const found = [];
  const lead = /\b(in|after|within|baada\s+ya|ndani\s+ya)\s+/gi;
  let m;
  while ((m = lead.exec(src))) {
    const bodyStart = m.index + m[0].length;
    const body = readDurationBody(src.slice(bodyStart), { allowHourWord: true });
    if (body) {
      let end = bodyStart + body.length;
      const tail = /^\s+(?:from\s+now|zijazo|kutoka\s+sasa)(?![a-z])/i.exec(src.slice(end));
      if (tail) end += tail[0].length;
      found.push({ type: "duration", start: m.index, end, ...body, swahili: body.swahili || /^(baada|ndani)/i.test(m[1]) });
    }
  }
  const standalone = new RegExp(`\\b(?:nusu\\s+saa|robo\\s+saa|dakika(?![a-z])|masaa(?![a-z])|${SW_NUMBER}\\s+(?:dakika|masaa)(?![a-z]))`, "gi");
  while ((m = standalone.exec(src))) {
    if (found.some(item => m.index >= item.start && m.index < item.end)) continue;
    const body = readDurationBody(src.slice(m.index), { allowHourWord: false });
    if (body && body.swahili) {
      let end = m.index + body.length;
      const tail = /^\s+(?:zijazo|kutoka\s+sasa)(?![a-z])/i.exec(src.slice(end));
      if (tail) end += tail[0].length;
      found.push({ type: "duration", start: m.index, end, ...body });
    }
  }
  // "20 minutes from now", "2 hours later"
  const wordStarts = /\b(?=\d|an?\s|one\s|half\s|a\s+quarter|three\s+quarters|a\s+couple|a\s+few|[a-z]+[\s-]+(?:minutes?|mins?|hours?|hrs?)\b)/gi;
  while ((m = wordStarts.exec(src))) {
    if (m[0] === "") wordStarts.lastIndex += 1;
    if (found.some(item => m.index >= item.start && m.index < item.end)) continue;
    const body = readDurationBody(src.slice(m.index), { allowHourWord: false });
    if (!body || body.swahili) continue;
    const tail = /^\s+(?:from\s+now|later|ahead)(?![a-z])/i.exec(src.slice(m.index + body.length));
    if (tail) found.push({ type: "duration", start: m.index, end: m.index + body.length + tail[0].length, ...body });
    // a bare length in a clipped request ("reminder 20 min medicine"), but not "for 20 minutes" or "every 2 hours"
    else if (bare && !/\b(?:for|every|each|per|of|last|past|than)\s+$/i.test(src.slice(0, m.index)) && !/^\s+(?:ago|long)\b/i.test(src.slice(m.index + body.length))) found.push({ type: "duration", start: m.index, end: m.index + body.length, ...body });
  }
  return found;
}

// ---- what the clock says ----
function hourWordValue(word) { const n = enNumber(word); return n !== null && n >= 0 && n <= 12 ? n : null; }
const HOUR_WORD = `(?:${longestFirst(EN_ONES).split("|").filter(w => EN_ONES[w] >= 1 && EN_ONES[w] <= 12).join("|")})(?![a-z])`;
const MINUTE_WORD = `(?:(?:o|oh)\\s+(?:${EN_ONES_1_9})|(?:${longestFirst(EN_TENS)})(?:[\\s-]+(?:${EN_ONES_1_9}))?|ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen)(?![a-z])`;
const minuteWordValue = word => { const w = String(word).toLowerCase().replace(/^(?:o|oh)\s+/, ""); const n = enNumber(w); return n !== null && n >= 1 && n <= 59 ? n : null; };

function findClocks(src) {
  const found = [];
  const add = candidate => found.push({ type: "clock", ...candidate });
  const lead = "(?:\\b(?:at|by|around|about)\\s+|@\\s*)";
  let m;
  const mk = (match, extra) => ({ start: match.index, end: match.index + match[0].length, ...extra });
  // 8:30 pm, 08:30, at 8.30pm, 20:00, 7:45 in the morning
  const withMinutes = new RegExp(`(?:${lead})?\\b(\\d{1,2})\\s*([:.])\\s*(\\d{2})(?![\\d])(?:\\s*${AMPM})?${PERIOD_TAIL}`, "gi");
  while ((m = withMinutes.exec(src))) {
    const hourText = m[1]; const minute = Number(m[3]); const meridiem = meridiemOf(m[4]); const period = periodFromTail(m[5], m[6]);
    const hasLead = /^(?:\b(?:at|by|around|about)\s+|@)/i.test(m[0]);
    if (m[2] === "." && !hasLead && !meridiem) continue;
    if (minute > 59 || Number(hourText) > 23) continue;
    if (/\d$/.test(src.slice(0, m.index)) || /[:.]\d/.test(src.slice(m.index + m[0].length, m.index + m[0].length + 2))) continue;
    const resolved = resolveHour(hourText, meridiem, period, { leadingZero: /^0\d$/.test(hourText), twentyFour: Number(hourText) >= 13 });
    if (resolved) add(mk(m, { ...resolved, minute, meridiem, period, label: null }));
  }
  // 8pm, at 8 am
  const withMeridiem = new RegExp(`(?:${lead})?\\b(\\d{1,2})\\s*${AMPM}${PERIOD_TAIL}`, "gi");
  while ((m = withMeridiem.exec(src))) {
    const n = Number(m[1]);
    if (n < 1 || n > 12) continue;
    if (found.some(item => m.index >= item.start && m.index < item.end)) continue;
    add(mk(m, { ...resolveHour(m[1], meridiemOf(m[2]), "", {}), minute: 0, meridiem: meridiemOf(m[2]), period: "" }));
  }
  // 8 oclock, at 8 oclock in the evening
  const oclock = new RegExp(`(?:${lead})?\\b(\\d{1,2})\\s*o'?clock(?![a-z])${PERIOD_TAIL}`, "gi");
  while ((m = oclock.exec(src))) {
    const n = Number(m[1]);
    if (n < 1 || n > 24 || found.some(item => m.index >= item.start && m.index < item.end)) continue;
    const resolved = resolveHour(String(n % 24), null, periodFromTail(m[2], m[3]), { twentyFour: n >= 13 });
    if (resolved) add(mk(m, { ...resolved, minute: 0, meridiem: null, period: periodFromTail(m[2], m[3]) }));
  }
  // noon, midday, midnight, 12 noon
  const named = /(?:\bat\s+)?\b(?:12(?::00)?\s*)?(noon|midday|midnight)(?![a-z])/gi;
  while ((m = named.exec(src))) {
    if (found.some(item => m.index >= item.start && m.index < item.end)) continue;
    add(mk(m, { hour: /midnight/i.test(m[1]) ? 0 : 12, minute: 0, meridiem: null, period: "", named: m[1].toLowerCase() }));
  }
  // military: 1830 hrs, at 0630, 2000 hours
  const military = /(?:\bat\s+)?\b([01]\d|2[0-3])([0-5]\d)\s*(hrs|hours|h)(?![a-z])|\bat\s+([01]\d|2[0-3])([0-5]\d)(?![\d:.])/gi;
  while ((m = military.exec(src))) {
    if (found.some(item => m.index >= item.start && m.index < item.end)) continue;
    add(mk(m, { hour: Number(m[1] ?? m[4]), minute: Number(m[2] ?? m[5]), meridiem: null, period: "", twentyFour: true }));
  }
  // half past 7, quarter past 7, quarter to 7, ten past 8, twenty to 9, 20 past 3, half seven
  const hourToken = `(${HOUR_WORD}|\\d{1,2})`;
  const offsets = new RegExp(`(?:${lead})?\\b(half|quarter|a\\s+quarter|ten|five|twenty|twenty[\\s-]five|\\d{1,2})\\s+(past|to|after|till|before)\\s+${hourToken}(?:\\s*${AMPM})?${PERIOD_TAIL}`, "gi");
  while ((m = offsets.exec(src))) {
    const spoken = m[1].toLowerCase().replace(/^a\s+/, "");
    const minutes = spoken === "half" ? 30 : spoken === "quarter" ? 15 : enNumber(spoken);
    const hour = /^\d+$/.test(m[3]) ? Number(m[3]) : hourWordValue(m[3]);
    if (minutes === null || !(minutes >= 1 && minutes <= 59) || hour === null || hour < 1 || hour > 12) continue;
    if (found.some(item => m.index >= item.start && m.index < item.end)) continue;
    const before = /^(?:to|till|before)$/i.test(m[2]);
    if (!/^(?:half|quarter|five|ten|twenty|twenty[\s-]five|a quarter)$/.test(spoken) && !/^\d+$/.test(spoken)) continue;
    if (/^\d+$/.test(spoken) && !(minutes % 5 === 0) ) continue;
    const baseHour = before ? (hour === 1 ? 12 : hour - 1) : hour;
    const minute = before ? 60 - minutes : minutes;
    const meridiem = meridiemOf(m[4]); const period = periodFromTail(m[5], m[6]);
    const resolved = resolveHour(String(baseHour), meridiem, period, {});
    if (resolved) add(mk(m, { ...resolved, minute, meridiem, period }));
  }
  const halfSeven = new RegExp(`(?:${lead})\\bhalf\\s+(${HOUR_WORD})(?![a-z])(?:\\s*${AMPM})?${PERIOD_TAIL}`, "gi"); // "at half seven" (7:30)
  while ((m = halfSeven.exec(src))) {
    if (found.some(item => m.index >= item.start && m.index < item.end)) continue;
    const hour = hourWordValue(m[1]);
    if (hour === null || hour < 1) continue;
    const meridiem = meridiemOf(m[2]); const period = periodFromTail(m[3], m[4]);
    const resolved = resolveHour(String(hour), meridiem, period, {});
    if (resolved) add(mk(m, { ...resolved, minute: 30, meridiem, period }));
  }
  // eight thirty, eight forty five, at eight, eight am, nine oclock
  const words = new RegExp(`(?:(?:${lead})(${HOUR_WORD})(?:\\s+(${MINUTE_WORD}))?|\\b(${HOUR_WORD})(?:\\s+(${MINUTE_WORD}))?(?=\\s*(?:${AMPM}|o'?clock|\\s+in\\s+the\\s+(?:${PERIOD_WORDS})|\\s+tonight)))(?:\\s*${AMPM})?(?:\\s*o'?clock(?![a-z]))?${PERIOD_TAIL}`, "gi");
  while ((m = words.exec(src))) {
    if (found.some(item => m.index >= item.start && m.index < item.end)) continue;
    const hourWord = m[1] || m[3]; const minuteWord = m[2] || m[4];
    const hour = hourWordValue(hourWord);
    if (hour === null || hour < 1) continue;
    const minute = minuteWord ? minuteWordValue(minuteWord) : 0;
    if (minute === null) continue;
    const meridiem = meridiemOf(m[5] || m[6]);
    const period = periodFromTail(m[7], m[8]);
    const resolved = resolveHour(String(hour), meridiem, period, {});
    if (resolved) add(mk(m, { ...resolved, minute, meridiem, period }));
  }
  // at 8, around 6 to, @ 7: a bare hour
  const bare = new RegExp(`(?:\\bat\\s+|(?:\\baround|\\babout)\\s+(?=\\d{1,2}(?:\\s+(?:to|and|then)\\b|\\s*[.,!?]|\\s*$))|@\\s*)(\\d{1,2})(?!\\d)(?![:.]\\d)(?!\\s*(?:${NOT_A_CLOCK_UNIT}))${PERIOD_TAIL}`, "gi");
  while ((m = bare.exec(src))) {
    if (found.some(item => m.index >= item.start && m.index < item.end)) continue;
    const n = Number(m[1]);
    if (n > 23 || /\d$/.test(src.slice(0, m.index))) continue;
    const period = periodFromTail(m[2], m[3]);
    const resolved = resolveHour(String(n), null, period, { leadingZero: /^0\d$/.test(m[1]), twentyFour: n >= 13 });
    if (resolved) add(mk(m, { ...resolved, minute: 0, meridiem: null, period, bare: true }));
  }
  // Kiswahili: saa mbili usiku, saa 2 asubuhi, saa tatu na nusu, saa nne kasoro robo, kesho asubuhi saa mbili, usiku saa mbili
  const swClock = new RegExp(`(?:\\b(${SW_PERIODS})\\s+(?:ya\\s+)?)?\\bsaa\\s+(${SW_NUMBER}(?::\\d{2})?)(?:\\s+na\\s+(nusu|robo)(?![a-z])|\\s+na\\s+dakika\\s+(${SW_NUMBER})|\\s+kasoro\\s+(robo|dakika\\s+${SW_NUMBER})(?![a-z]))?(?:\\s+(?:ya\\s+)?(${SW_PERIODS})(?![a-z]))?`, "gi");
  while ((m = swClock.exec(src))) {
    if (found.some(item => m.index >= item.start && m.index < item.end)) continue;
    const rawHour = m[2].toLowerCase();
    const colon = /:/.test(rawHour);
    let swahiliHour; let minute = 0;
    if (colon) { const [h, mm] = rawHour.split(":").map(Number); swahiliHour = h; minute = mm; } else swahiliHour = swNumber(rawHour);
    if (swahiliHour === null || !(swahiliHour >= 0 && swahiliHour <= 24)) continue;
    const period = (m[6] || m[1] || "").toLowerCase();
    if (m[3]) minute += /nusu/i.test(m[3]) ? 30 : 15;
    if (m[4]) { const extra = swNumber(m[4]); if (extra === null || extra > 59) continue; minute += extra; }
    let minus = 0;
    if (m[5]) { minus = /robo/i.test(m[5]) ? 15 : swNumber(m[5].replace(/^dakika\s+/i, "")); if (minus === null || minus > 59) continue; }
    const spoken = clean(m[0]);
    let resolved;
    if (colon && !period) resolved = { hour: swahiliHour % 24 };
    else if (!period && /^\d+$/.test(rawHour) && swahiliHour >= 13) resolved = { hour: swahiliHour };
    else if (!period) resolved = { ambiguous: true, hour12: clock12OfSwahili(swahiliHour >= 1 && swahiliHour <= 12 ? swahiliHour : 1), swahili: true, swahiliHour };
    else if (colon) { // "saa 8:30 usiku": the digits are the plain clock, with the part of the day
      const r = resolveHour(String(swahiliHour), null, period === "usiku" ? "night" : period === "jioni" ? "evening" : period === "mchana" || period === "alasiri" ? "afternoon" : "morning", {});
      resolved = r;
    } else {
      const hour24 = swahiliTo24(swahiliHour, period);
      resolved = hour24 === null ? null : { hour: hour24 };
    }
    if (!resolved) continue;
    if (resolved.hour !== undefined && (minute || minus)) {
      const total = (((resolved.hour * 60 + minute - minus) % 1440) + 1440) % 1440;
      resolved = { hour: Math.floor(total / 60) }; minute = total % 60;
    } else if (resolved.ambiguous && (minute || minus)) { minute = ((minute - minus) + 60) % 60; if (minus) resolved.hour12 = resolved.hour12 === 1 ? 12 : resolved.hour12 - 1; }
    add({ start: m.index, end: m.index + m[0].length, ...resolved, minute, meridiem: null, period: "", swahili: true, spoken });
  }
  return found;
}

// A bare number after "in"/"after" with no unit ("remind me in 20"): not a time we can use, but worth asking about.
function findUnitless(src) {
  const out = [];
  const re = new RegExp(`\\b(?:in|after|within)\\s+(${EN_NUMBER})(?![\\w:.]|\\s*(?:${UNIT_RE.replace(/\(\?!\[a-z\]\)$/, "")}|am|pm|o'?clock|and\\s+a\\s+half|hours?|minutes?|days?|weeks?))`, "gi");
  let m;
  while ((m = re.exec(src))) out.push({ type: "unclear", kind: "unit", start: m.index, end: m.index + m[0].length, amount: enNumber(m[1]) });
  return out;
}

// Everything in `src` that names a time of day or a length of time: the pieces, where they sit, and whether they disagree.
function scanTime(text, { bareDurations = false } = {}) {
  const src = String(text ?? "").replace(/[’‘]/g, "'");
  const pieces = [...findDurations(src, { bare: bareDurations }), ...findClocks(src)].sort((a, b) => a.start - b.start || (b.end - b.start) - (a.end - a.start));
  const kept = [];
  for (const piece of pieces) {
    const clash = kept.find(item => piece.start < item.end && piece.end > item.start);
    if (!clash) kept.push(piece);
  }
  const durations = kept.filter(item => item.type === "duration");
  const clocks = kept.filter(item => item.type === "clock");
  const unclear = kept.length ? [] : findUnitless(src);
  const sameClock = (a, b) => (a.hour === b.hour && !a.ambiguous && !b.ambiguous && a.minute === b.minute) || (a.ambiguous && b.ambiguous && a.hour12 === b.hour12 && a.minute === b.minute);
  const sameDuration = (a, b) => a.minutes === b.minutes && a.days === b.days;
  const conflict = durations.length > 1 && !durations.every(item => sameDuration(item, durations[0]))
    || clocks.length > 1 && !clocks.every(item => sameClock(item, clocks[0]))
    || (durations.length > 0 && clocks.length > 0 && !durations.every(item => item.days > 0 && item.minutes === 0));
  return { src, durations, clocks, unclear, conflict, spans: kept.map(item => [item.start, item.end]).concat(unclear.map(item => [item.start, item.end])),
    swahili: kept.some(item => item.swahili) };
}

module.exports = Object.freeze({ scanTime, enNumber, swNumber, resolveHour, swahiliClockWords, swahiliPeriodOf, swahiliHourOf, swahiliTo24, clock12OfSwahili, SW_NUMBER, EN_NUMBER, SW_PERIODS, PERIOD_WORDS, pad2, clean });
