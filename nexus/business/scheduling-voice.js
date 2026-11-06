"use strict";

// The front desk of a small business, by voice or typed: business hours, who is free when, booking a named customer, moving or cancelling a booking, the confirmation sent to the customer,
// who agreed to be called back, and the quotes people asked for. Phase 1 of the small-business assistant team asked for by the owner on 5 November 2026.
//
// Pure functions over the workspace data (client.data.editable) so they can be tested without a database; voice-dispatch.js supplies the client, the day, the time and the write bridge.
//
//   classifySchedule(command) -> an intent name or null
//   readSchedule(intent, ctx) -> the spoken answer
//   planScheduleWrite(intent, ctx) -> { response } to ask or refuse, or { prompt, apply, done } (and { send } when a message must really go out first)
//
// Days are YYYY-MM-DD and times HH:MM (24-hour) in the business's own time zone, so nothing here depends on the server's clock zone.
// Nothing is invented: hours that were never set are assumed to be Monday to Friday, 9 to 5, and the answer says so. A confirmation is "sent" only after the sending provider says it went out.

const { extractDay, extractTime, describeDay, addDays, weekdayOf } = require("../personal/dates.js");
const { normalizeRecipient } = require("../communications/send-request.js");

const lower = value => String(value || "").toLowerCase();
const pad2 = value => String(value).padStart(2, "0");
const ISO_DAY = /^\d{4}-\d{2}-\d{2}$/;
const DAY_NAMES = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
const DEFAULT_OPEN = "09:00";
const DEFAULT_CLOSE = "17:00";
const DEFAULT_MINUTES = 60;
const STEP = 30;
const HORIZON_DAYS = 21;
const APPOINTMENT_LIMIT = 200;

const toMinutes = time => { const m = /^(\d{1,2}):(\d{2})$/.exec(String(time || "")); return m ? Number(m[1]) * 60 + Number(m[2]) : null; };
const fromMinutes = total => `${pad2(Math.floor(total / 60))}:${pad2(total % 60)}`;
// "14:00" -> "2 PM", "09:30" -> "9:30 AM"
function clock(time) {
  const total = toMinutes(time); if (total === null) return String(time || "");
  const hour = Math.floor(total / 60); const minute = total % 60;
  const h12 = hour % 12 === 0 ? 12 : hour % 12;
  return `${h12}${minute ? `:${pad2(minute)}` : ""} ${hour < 12 ? "AM" : "PM"}`;
}
const say = list => (list.length <= 1 ? list.join("") : `${list.slice(0, -1).join(", ")} and ${list[list.length - 1]}`);
const plural = (count, word) => `${count} ${count === 1 ? word : word === "person" ? "people" : `${word}s`}`;
const first = name => String(name || "").trim().split(/\s+/)[0] || "";
const dayWord = (day, today) => describeDay(day, today);
const NAME = "[A-Z][A-Za-z'’-]+(?:\\s+[A-Z][A-Za-z'’-]+){0,2}";
const NOT_NAMES = /^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday|Today|Tomorrow|Tonight|January|February|March|April|May|June|July|August|September|October|November|December|The|A|An|My|Our|Kyro|Nexus|Please|Appointment|Meeting|Cancel|Move|Reschedule|Change|Send|Text|Email|Message|Confirm|Book|Schedule|Set|Put|Add|Can|Could|Would|Will|Hey|Hi|Yes|No|Ok|Okay|Call|Show|Tell|Give|Who|What|When)$/;

// ---- hours --------------------------------------------------------------------------------------------------------------------------------------------------------------------
// -> { open, close, assumed } for the day, or null when the business is closed that day. With no hours saved at all, Monday to Friday 9 to 5 is assumed (and the answer says so).
function hoursFor(editable, day) {
  const rows = Array.isArray(editable?.hours) ? editable.hours : [];
  const name = DAY_NAMES[weekdayOf(day)];
  if (!rows.length) { const wd = weekdayOf(day); return wd >= 1 && wd <= 5 ? { open: DEFAULT_OPEN, close: DEFAULT_CLOSE, assumed: true } : null; }
  const row = rows.find(item => lower(item.day) === name && toMinutes(item.open) !== null && toMinutes(item.close) !== null && toMinutes(item.close) > toMinutes(item.open));
  return row ? { open: row.open, close: row.close, assumed: false } : null;
}
const hoursAssumed = editable => !(Array.isArray(editable?.hours) && editable.hours.length);
const ASSUMED_NOTE = "I have no business hours saved, so I assumed Monday to Friday, 9 to 5. Say, for example, \"set my hours Monday to Friday 8 to 6\" to change that.";

// ---- reading what was said ----------------------------------------------------------------------------------------------------------------------------------------------------
const WORD_NUMBERS = { a: 1, an: 1, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, fifteen: 15, twenty: 20, thirty: 30, forty: 40, sixty: 60, ninety: 90 };
// "for 30 minutes", "for an hour", "half an hour", "for two hours", "an hour and a half" -> minutes, or 0 when no length was said.
function parseDuration(text) {
  const t = lower(text);
  if (/\ban? hour and a half\b|\b1\.5 hours?\b|\bone and a half hours?\b/.test(t)) return 90;
  if (/\bhalf an? hour\b|\bhalf-hour\b/.test(t)) return 30;
  let m = /\b(\d+(?:\.\d+)?|a|an|one|two|three|four|five|six|seven|eight)\s*-?\s*(?:hours?|hrs?)\b/.exec(t);
  if (m) { const n = WORD_NUMBERS[m[1]] || Number(m[1]); const total = Math.round(n * 60); if (total >= 15 && total <= 720) return total; }
  m = /\b(\d{1,3}|ten|fifteen|twenty|thirty|forty|sixty|ninety)\s*-?\s*(?:minutes?|mins?)\b/.exec(t);
  if (m) { const n = WORD_NUMBERS[m[1]] || Number(m[1]); if (n >= 5 && n <= 720) return n; }
  return 0;
}
function withoutDuration(text) {
  return String(text || "").replace(/\bfor\s+(?:about\s+)?(?:an? hour and a half|half an? hour|(?:\d+(?:\.\d+)?|an?|one|two|three|four|five|six|seven|eight)\s*-?\s*(?:hours?|hrs?)|(?:\d{1,3}|ten|fifteen|twenty|thirty|forty|sixty|ninety)\s*-?\s*(?:minutes?|mins?))\b/ig, " ");
}
// { day, time } from the words (either may be ""), with the text that is left over
function parseWhen(text, today) {
  let rest = String(text || "");
  const day = extractDay(rest, today);
  if (day) rest = day.text;
  const time = extractTime(rest);
  if (time) rest = time.text;
  return { day: day ? day.day : "", time: time ? time.time : "", rest };
}

// the name after book/schedule, or after "appointment for/with", or "NAME's appointment". A name starts with a capital letter, the words around it may be in any case.
const ci = word => String(word).split("").map(c => (/[a-z]/i.test(c) ? `[${c.toLowerCase()}${c.toUpperCase()}]` : c)).join("");
const any = words => `(?:${words.map(ci).join("|")})`;
const LEAD_IN = String.raw`^(?:${ci("please")}\s+)?(?:(?:${ci("hey")}\s+)?(?:${ci("kyro")}|${ci("nexus")})[,.]?\s+)?`;
const NAME_PATTERNS = [
  new RegExp(String.raw`${LEAD_IN}${any(["book", "schedule", "set up", "put"])}\s+(${NAME})\b`),
  new RegExp(String.raw`\b${any(["book", "schedule", "set up"])}\s+(?:${any(["an", "a"])}\s+)?(?:\w+\s+)?${ci("appointment")}\s+${any(["for", "with"])}\s+(${NAME})\b`),
  new RegExp(String.raw`\b${any(["appointment", "booking"])}\s+${any(["for", "with"])}\s+(${NAME})\b`),
  new RegExp(String.raw`\b(${NAME})['’]s\s+${any(["appointment", "booking"])}\b`),
  new RegExp(String.raw`\b${any(["confirmation", "confirm"])}\s+${any(["to", "for", "with"])}\s+(${NAME})\b`),
  new RegExp(String.raw`\b${any(["send", "text", "email", "message"])}\s+(${NAME})\s+${any(["her", "his", "their", "the", "a", "an"])}\b`),
  new RegExp(String.raw`${LEAD_IN}(${NAME})\s+${any(["agreed", "said", "is ok", "consented", "opted", "signed", "subscribed", "unsubscribed", "replied", "responded", "gave", "does not", "doesn't", "doesn’t", "asked", "wants", "want", "needs", "need", "requested", "would", "has asked", "called", "says", "is fine"])}\b`),
  new RegExp(String.raw`\b${any(["i", "we"])}\s+${any(["sent", "gave", "emailed", "texted"])}\s+(${NAME})\b`),
  new RegExp(String.raw`\b${any(["from", "for", "with", "to"])}\s+(${NAME})\b`)
];
function nameIn(command) {
  const text = String(command || "").replace(/\s+/g, " ").trim();
  for (const pattern of NAME_PATTERNS) {
    const m = pattern.exec(text);
    if (!m) continue;
    const words = m[1].split(/\s+/);
    while (words.length && NOT_NAMES.test(words[0])) words.shift();
    while (words.length && NOT_NAMES.test(words[words.length - 1])) words.pop();
    if (words.length) return words.join(" ");
  }
  return "";
}
function leadFor(editable, command, nameHint) {
  const leads = editable.leads || [];
  const t = lower(command);
  if (nameHint) { const exact = leads.filter(row => lower(row.name) === lower(nameHint)); if (exact.length === 1) return exact[0]; }
  const hits = leads.filter(row => row.name && t.includes(lower(row.name)));
  if (hits.length) { hits.sort((a, b) => String(b.name).length - String(a.name).length); return hits[0]; }
  if (nameHint) { const part = leads.filter(row => row.name && lower(row.name).split(/\s+/).includes(lower(nameHint))); if (part.length === 1) return part[0]; }
  return null;
}

// ---- who is booked when -------------------------------------------------------------------------------------------------------------------------------------------------------
function minutesOf(item) { return Number(item.durationMinutes) > 0 ? Number(item.durationMinutes) : DEFAULT_MINUTES; }
function bookedOn(editable, day) {
  return (editable.appointments || []).map((item, index) => ({ item, index }))
    .filter(({ item }) => lower(item.status) !== "cancelled" && typeof item.startAt === "string" && item.startAt.slice(0, 10) === day && toMinutes(item.startAt.slice(11, 16)) !== null)
    .map(({ item, index }) => { const start = toMinutes(item.startAt.slice(11, 16)); return { index, item, start, end: start + minutesOf(item) }; })
    .sort((a, b) => a.start - b.start);
}
// whether `minutes` starting at `time` on `day` can be booked: { ok } or { ok:false, why:"closed"|"outside"|"past"|"busy", conflict, hours }
function check(editable, day, time, minutes, { today, nowTime, ignoreIndex = -1 } = {}) {
  const hours = hoursFor(editable, day);
  if (!hours) return { ok: false, why: "closed" };
  const start = toMinutes(time); const end = start + minutes;
  if (start < toMinutes(hours.open) || end > toMinutes(hours.close)) return { ok: false, why: "outside", hours };
  if (today && day === today && nowTime && start < toMinutes(nowTime)) return { ok: false, why: "past" };
  const conflict = bookedOn(editable, day).find(entry => entry.index !== ignoreIndex && entry.start < end && start < entry.end);
  return conflict ? { ok: false, why: "busy", conflict, hours } : { ok: true, hours };
}
function freeIntervals(editable, day, minutes, { today, nowTime } = {}) {
  const hours = hoursFor(editable, day);
  if (!hours) return [];
  let from = toMinutes(hours.open); const to = toMinutes(hours.close);
  if (today && day === today && nowTime) from = Math.max(from, Math.ceil(toMinutes(nowTime) / STEP) * STEP);
  const out = []; let cursor = from;
  for (const entry of bookedOn(editable, day)) {
    if (entry.end <= cursor) continue;
    if (entry.start > cursor && entry.start - cursor >= minutes) out.push([cursor, Math.min(entry.start, to)]);
    cursor = Math.max(cursor, entry.end);
  }
  if (to - cursor >= minutes) out.push([cursor, to]);
  return out;
}
// the next few start times (on the half hour) that fit, from a day and time onward
function nextOpenings(editable, fromDay, fromTime, minutes, { today, nowTime, count = 3 } = {}) {
  const found = [];
  for (let step = 0; step <= HORIZON_DAYS && found.length < count; step += 1) {
    const day = addDays(fromDay, step);
    const hours = hoursFor(editable, day); if (!hours) continue;
    let start = toMinutes(hours.open);
    if (step === 0 && fromTime) start = Math.max(start, Math.ceil(toMinutes(fromTime) / STEP) * STEP);
    for (; start + minutes <= toMinutes(hours.close) && found.length < count; start += STEP) {
      if (check(editable, day, fromMinutes(start), minutes, { today, nowTime }).ok) found.push({ day, time: fromMinutes(start) });
    }
  }
  return found;
}
const sayOpenings = (list, today) => say(list.map(item => `${dayWord(item.day, today)} at ${clock(item.time)}`));
const sayIntervals = list => say(list.map(([a, b]) => `${clock(fromMinutes(a))} to ${clock(fromMinutes(b))}`));
const callDay = (day, today) => (day === today ? "today" : dayWord(day, today));
const withCapital = text => text.charAt(0).toUpperCase() + text.slice(1);

// ---- which request ------------------------------------------------------------------------------------------------------------------------------------------------------------
const SCHEDULE_READ_INTENTS = Object.freeze(["checkAvailability", "showHours", "listCallbacks", "listQuotes"]);
const SCHEDULE_WRITE_INTENTS = Object.freeze(["setHours", "bookCustomer", "cancelBooking", "moveBooking", "confirmBooking", "recordCallConsent", "requestQuote", "quoteSent"]);
const DAY_WORDS = "monday|tuesday|wednesday|thursday|friday|saturday|sunday|tomorrow|today|tonight|weekdays?|weekends?|every day|daily";
const hasDay = text => /\b\d{4}-\d{2}-\d{2}\b/.test(text) || /\b(?:monday|tuesday|wednesday|thursday|friday|saturday|sunday|tomorrow|today|tonight|next week|this week|(?:\d{1,2}(?:st|nd|rd|th)?\s+(?:of\s+)?)?(?:january|february|march|april|may|june|july|august|september|october|november|december))\b/i.test(text);
const hasTime = text => extractTime(text) !== null || /\b(?:morning|afternoon|evening)\b/i.test(text);

function classifySchedule(command = "") {
  const text = String(command || "").replace(/\s+/g, " ").trim();
  if (!text || text.length > 360) return null;
  const asks = /\?|^(?:(?:hey|ok|okay|please)\s+)*(?:(?:kyro|nexus)[,.]?\s+)?(?:what|which|when|who|how|do|does|did|are|is|am|can|could|any|show|tell|list|check|give)\b/i.test(text);

  // ---- hours
  if (asks && /\b(?:what|when)\b[^.?!]{0,25}\b(?:are|is)\b[^.?!]{0,12}\b(?:my|our|the)\b[^.?!]{0,16}\bhours\b|\bwhen (?:am i|are we|is the (?:shop|office|store|business|salon|clinic)) open\b|\bwhat (?:are )?(?:my|our) (?:business |opening |working )?hours\b/i.test(text) && !hasDay(text)) return "showHours";
  if (!asks && (/\b(?:set|change|update|make)\b[^.?!]{0,30}\b(?:hours|opening times)\b/i.test(text) || /\b(?:we(?:'re| are)|i(?:'m| am)|(?:the )?(?:shop|office|store|salon|clinic|business)(?: is)?)\s+(?:open|closed)\b/i.test(text))
    && daysIn(text).length > 0 && !/\b(?:appointment|booking|book)\b/i.test(text)) return "setHours";

  // ---- who can be called, and the quotes
  if (asks && /\bwho\b[^.?!]{0,30}\b(?:can|may|could|should)\s+(?:i|we)\s+(?:call|phone|ring)\b|\bwho\b[^.?!]{0,25}\b(?:agreed|said yes|opted in|is ok(?:ay)?|are ok(?:ay)?|gave (?:me )?(?:permission|consent))\b[^.?!]{0,25}\b(?:call|calls|called|calling)\b/i.test(text)) return "listCallbacks";
  if (asks && /\b(?:who|which|what|any|how many)\b[^.?!]{0,40}\b(?:quotes?|estimates?|bids?)\b/i.test(text) && /\b(?:waiting|pending|asked|requested|open|outstanding|follow|need|owe|haven['’]?t|not (?:yet )?(?:sent|answered))\b/i.test(text)) return "listQuotes";

  // ---- who is free when
  if (/\b(?:am i|are we|are you|do (?:i|we) have|is there|is anyone|is anybody|any)\b[^.?!]{0,40}\b(?:free|available|availability|openings?|slots?|time (?:on|for|at|tomorrow|today|this|next))\b/i.test(text)
    || /\bwhat(?:['’]s| is| are)?\b[^.?!]{0,25}\b(?:open|free|available|openings?|slots?)\b[^.?!]{0,30}\b(?:on|for|at|this|next|tomorrow|today|tonight|monday|tuesday|wednesday|thursday|friday|saturday|sunday)\b/i.test(text)
    || /\bwhen\b[^.?!]{0,20}\b(?:am i|are we|is (?:my|our|the))\b[^.?!]{0,25}\b(?:free|available|next (?:opening|slot|appointment))\b/i.test(text)
    || /\b(?:next|first)\s+(?:available|open|free)\s+(?:appointments?|slots?|times?|openings?)\b|\bavailability\b/i.test(text)
    || (asks && /\bis\b[^.?!]{0,28}\b(?:free|open|available|taken|booked)\b/i.test(text) && (hasDay(text) || hasTime(text)))) {
    if (!/\b(?:weather|forecast|parking|restaurant|nearby|near me|pharmacy|store near)\b/i.test(text)) return "checkAvailability";
  }

  // ---- changes (not questions)
  if (!asks || /^(?:please\s+)?(?:(?:hey\s+)?(?:kyro|nexus)[,.]?\s+)?(?:can|could|would|will) you\b/i.test(text)) {
    if (/\b(?:send|text|email|message)\b[^.?!]{0,40}\b(?:confirmation|confirm(?:ing)?)\b|\bconfirm\b[^.?!]{0,30}\b(?:appointment|booking)\b/i.test(text) && !/\bgrant\b/i.test(text)) return "confirmBooking";
    if (/\b(?:cancel|call off)\b[^.?!]{0,40}\b(?:appointment|booking)\b/i.test(text)) return "cancelBooking";
    if (/\b(?:move|reschedule|change|shift|push)\b[^.?!]{0,50}\b(?:appointment|booking)\b/i.test(text) && (hasDay(text) || hasTime(text))) return "moveBooking";
    if (/\b(?:does not|doesn['’]t|do not|don['’]t|did not|didn['’]t|no longer)\b[^.?!]{0,25}\b(?:want|wish|like|agree)\b[^.?!]{0,40}\b(?:calls?|called|calling)\b|\bopted out of calls?\b|\bdo not call\b|\bdon['’]t call\b|\bstop calling\b|\bno more calls\b/i.test(text) && nameIn(text)) return "recordCallConsent";
    if (/\b(?:agreed|said (?:yes|ok(?:ay)?|it(?:'s| is) ok(?:ay)?)|is ok(?:ay)? with|consented|opted in|gave (?:me )?(?:permission|consent)|is fine with|says (?:yes|ok(?:ay)?|it(?:'s| is) ok(?:ay)?))\b[^.?!]{0,50}\b(?:calls?|called|calling|call (?:her|him|them))\b/i.test(text) && nameIn(text)) return "recordCallConsent";
    if (/\b(?:i|we)\s+(?:sent|gave|emailed|texted|delivered)\b[^.?!]{0,30}\b(?:the |a |her |his |their )?(?:quote|estimate|bid|proposal)\b/i.test(text) && nameIn(text)) return "quoteSent";
    if ((/\b(?:asked for|wants?|needs?|requested|is asking for|would like|has asked for|asks for|want)\b[^.?!]{0,20}\b(?:an? |the )?(?:quote|estimate|bid|proposal)\b/i.test(text) || /\b(?:log|record|add|note|track)\b[^.?!]{0,20}\b(?:quote|estimate)\s+request\b/i.test(text)) && nameIn(text)) return "requestQuote";
    // booking a named customer: "Book Grace Otieno for Thursday at 2", "Schedule an appointment for Grace Otieno on Friday at 10 for a haircut"
    if (/\b(?:book|schedule|set up)\b/i.test(text) && (hasDay(text) || hasTime(text)) && nameIn(text) && !/\b(?:flight|ticket|hotel|room|table|taxi|ride|bus|train|doctor|dentist|clinic|vet(?:erinarian)?)\b/i.test(text)) return "bookCustomer";
  }
  return null;
}

// ---- reads ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
function readSchedule(intent, { command, editable, workspace, today, nowTime, formatMoney }) {
  const name = `"${workspace}"`;
  if (intent === "showHours") {
    const rows = Array.isArray(editable.hours) ? editable.hours : [];
    if (!rows.length) return `${name} has no business hours saved. ${ASSUMED_NOTE}`;
    const lines = DAY_NAMES.slice(1).concat(DAY_NAMES[0]).map(day => { const row = rows.find(item => lower(item.day) === day); return row && toMinutes(row.open) !== null ? `${withCapital(day)} ${clock(row.open)} to ${clock(row.close)}` : null; }).filter(Boolean);
    return `${name} is open: ${say(lines)}. It is closed on the other days.`;
  }
  if (intent === "checkAvailability") {
    const when = parseWhen(command, today);
    const minutes = parseDuration(command) || DEFAULT_MINUTES;
    const note = hoursAssumed(editable) ? ` ${ASSUMED_NOTE}` : "";
    // "next opening" / no day named: the next three times that fit
    if (!when.day && !when.time) {
      const list = nextOpenings(editable, today, nowTime, minutes, { today, nowTime });
      return list.length ? `The next openings in ${name} are ${sayOpenings(list, today)}.${note}` : `I found no openings in ${name} in the next ${HORIZON_DAYS} days.${note}`;
    }
    const day = when.day || today;
    const label = callDay(day, today);
    const hours = hoursFor(editable, day);
    if (!hours) {
      const list = nextOpenings(editable, day, "", minutes, { today, nowTime });
      return `${name} is closed ${label}.${list.length ? ` The next openings are ${sayOpenings(list, today)}.` : ""}${note}`;
    }
    if (when.time) {
      const result = check(editable, day, when.time, minutes, { today, nowTime });
      if (result.ok) return `Yes, ${label} at ${clock(when.time)} is free for ${minutes === 60 ? "an hour" : `${minutes} minutes`} in ${name}.${note}`;
      const list = nextOpenings(editable, day, when.time, minutes, { today, nowTime });
      const alt = list.length ? ` The next openings are ${sayOpenings(list, today)}.` : "";
      if (result.why === "busy") return `No, ${label} at ${clock(when.time)} is taken by ${result.conflict.item.customer || result.conflict.item.title} (${clock(fromMinutes(result.conflict.start))} to ${clock(fromMinutes(result.conflict.end))}).${alt}${note}`;
      if (result.why === "past") return `${withCapital(label)} at ${clock(when.time)} has already passed.${alt}${note}`;
      return `${withCapital(label)} at ${clock(when.time)} is outside the hours of ${name}, which are ${clock(result.hours.open)} to ${clock(result.hours.close)} that day.${alt}${note}`;
    }
    const free = freeIntervals(editable, day, Math.min(minutes, 30), { today, nowTime });
    const booked = bookedOn(editable, day);
    const bookedText = booked.length ? ` Booked: ${say(booked.map(entry => `${entry.item.customer || entry.item.title} at ${clock(fromMinutes(entry.start))}`))}.` : "";
    if (!free.length) return `${name} is fully booked ${label}.${bookedText}${note}`;
    return `${withCapital(label)} ${name} is open ${clock(hours.open)} to ${clock(hours.close)}. Free: ${sayIntervals(free)}.${bookedText}${note}`;
  }
  if (intent === "listCallbacks") {
    const yes = (editable.leads || []).filter(row => lower(row.callConsent) === "yes");
    const no = (editable.leads || []).filter(row => lower(row.callConsent) === "no");
    if (!yes.length) return `Nobody in ${name} has told you they agree to be called back yet.${no.length ? ` ${plural(no.length, "person")} asked not to be called.` : ""} Say, for example, "Grace Otieno agreed to be called back" to record it.`;
    return `${plural(yes.length, "person")} in ${name} agreed to be called back: ${say(yes.map(row => `${row.name}${row.callConsentDate ? ` (since ${describeDay(row.callConsentDate, today)})` : ""}`))}.${no.length ? ` Do not call: ${say(no.map(row => row.name))}.` : ""}`;
  }
  if (intent === "listQuotes") {
    const waiting = (editable.leads || []).filter(row => lower(row.stage) === "quote requested");
    if (!waiting.length) return `Nobody in ${name} is waiting on a quote.`;
    const lines = waiting.map(row => `${row.name}${row.need ? ` (${row.need.replace(/^(?:an?|the|some)\s+/i, "")})` : ""}${ISO_DAY.test(row.followUpDate || "") ? `, follow up ${describeDay(row.followUpDate, today)}` : ""}`);
    return `${plural(waiting.length, "person")} in ${name} ${waiting.length === 1 ? "is" : "are"} waiting on a quote: ${say(lines)}.`;
  }
  return null;
}

// ---- changes -------------------------------------------------------------------------------------------------------------------------------------------------------------------
const WORD_DAYS = { mon: "monday", tue: "tuesday", tues: "tuesday", wed: "wednesday", thu: "thursday", thur: "thursday", thurs: "thursday", fri: "friday", sat: "saturday", sun: "sunday" };
const dayIndexOf = word => { const w = WORD_DAYS[lower(word)] || lower(word).replace(/s$/, ""); return DAY_NAMES.indexOf(w); };
function daysIn(text) {
  const t = lower(text);
  if (/\bweekdays?\b/.test(t)) return [1, 2, 3, 4, 5];
  if (/\bweekends?\b/.test(t)) return [6, 0];
  if (/\bevery ?day\b|\bdaily\b|\bseven days\b|\b7 days\b/.test(t)) return [0, 1, 2, 3, 4, 5, 6];
  const names = "(monday|tuesday|wednesday|thursday|friday|saturday|sunday|mon|tues|tue|wed|thurs|thur|thu|fri|sat|sun)s?";
  const range = new RegExp(`\\b${names}\\s*(?:to|through|thru|-|until)\\s*${names}\\b`, "i").exec(t);
  if (range) {
    const a = dayIndexOf(range[1]); const b = dayIndexOf(range[2]); const out = [];
    for (let i = a; ; i = (i + 1) % 7) { out.push(i); if (i === b || out.length > 7) break; }
    return out;
  }
  const out = [];
  for (const m of t.matchAll(new RegExp(`\\b${names}\\b`, "g"))) { const i = dayIndexOf(m[1]); if (i >= 0 && !out.includes(i)) out.push(i); }
  return out;
}
// "9 to 5", "nine to five", "8am to 6pm", "from 9 until 5:30": the two times, the second one after the first
function timeRange(text) {
  const t = lower(text).replace(/\b(?:from|between)\b/g, " ");
  const word = "(\\d{1,2}(?::\\d{2})?\\s*(?:am|pm|a\\.m\\.|p\\.m\\.)?|noon|midday|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)";
  const m = new RegExp(`${word}\\s*(?:to|until|till|-|through)\\s*${word}`, "i").exec(t);
  if (!m) return null;
  const words = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12 };
  const read = (raw, fallbackPm) => {
    const s = raw.trim().replace(/\./g, "");
    if (/^(?:noon|midday)$/.test(s)) return 12 * 60;
    const parts = /^(\d{1,2})(?::(\d{2}))?\s*(am|pm)?$/.exec(s);
    let hour; let minute = 0; let meridiem = "";
    if (parts) { hour = Number(parts[1]); minute = parts[2] ? Number(parts[2]) : 0; meridiem = parts[3] || ""; } else if (words[s]) hour = words[s]; else return null;
    if (hour > 24 || minute > 59) return null;
    if (meridiem === "pm" && hour < 12) hour += 12; else if (meridiem === "am" && hour === 12) hour = 0;
    else if (!meridiem && fallbackPm && hour >= 1 && hour <= 11) hour += 12;
    return hour * 60 + minute;
  };
  const open = read(m[1], false);
  let close = read(m[2], true);
  if (open === null || close === null) return null;
  if (open !== null && close <= open && close + 12 * 60 <= 24 * 60 && close < 12 * 60) close += 12 * 60;
  return close > open ? { open: fromMinutes(open), close: fromMinutes(close) } : null;
}

function hoursRowsAfter(editable, days, range) {
  const current = Array.isArray(editable.hours) && editable.hours.length ? editable.hours : [1, 2, 3, 4, 5].map(i => ({ day: DAY_NAMES[i], open: DEFAULT_OPEN, close: DEFAULT_CLOSE }));
  const map = new Map(current.filter(row => toMinutes(row.open) !== null).map(row => [lower(row.day), { day: lower(row.day), open: row.open, close: row.close }]));
  for (const i of days) { if (range) map.set(DAY_NAMES[i], { day: DAY_NAMES[i], open: range.open, close: range.close }); else map.delete(DAY_NAMES[i]); }
  return DAY_NAMES.slice(1).concat(DAY_NAMES[0]).filter(day => map.has(day)).map(day => map.get(day));
}

// (the business's own name can come along in the words, "... for a haircut at Mama Grace Salon": it is not the service)
function serviceIn(rest, nameWords, workspace = "") {
  let text = String(rest || "");
  if (workspace) text = text.replace(new RegExp(String(workspace).trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\s+/g, "\\s+"), "ig"), " ");
  for (const word of String(nameWords || "").split(/\s+/).filter(Boolean)) text = text.replace(new RegExp(`\\b${word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i"), " ");
  text = withoutDuration(text).replace(/\b(?:please|kyro|nexus|book|schedule|set up|put|an?|the|appointment|booking|for|with|on|at|in|to|and|me|her|him|them|a)\b/ig, " ").replace(/\s+/g, " ").trim();
  return text.replace(/^(?:an?|the)\s+/i, "").replace(/[.,;!?]+$/g, "").trim();
}

function appointmentFor(editable, lead, command, name) {
  const list = editable.appointments || [];
  const who = lower(lead ? lead.name : name);
  const upcoming = list.map((item, index) => ({ item, index })).filter(({ item }) => lower(item.status) !== "cancelled" && item.startAt);
  const byWho = who ? upcoming.filter(({ item }) => lower(item.customer) === who || lower(item.title).includes(who)) : [];
  const pool = byWho.length ? byWho : (who ? [] : upcoming);
  const day = parseWhen(command, "2000-01-01");
  const narrowed = day.day && ISO_DAY.test(day.day) ? pool : pool;
  return narrowed;
}

// the confirmation words that go to the customer: plain facts, nothing added
function confirmationText({ lead, appointment, workspace, today }) {
  const day = appointment.startAt.slice(0, 10); const time = appointment.startAt.slice(11, 16);
  const what = appointment.service || (appointment.title && lower(appointment.title) !== lower(appointment.customer) && !/^appointment$/i.test(appointment.title) ? appointment.title : "appointment");
  return `Hi ${first(lead.name)}, this confirms your ${what} with ${workspace} on ${describeDay(day, today)} at ${clock(time)}. If you need to change it, please get in touch with us.`.replace(/\s+/g, " ");
}
// the customer's saved contact -> where a message can go
function channelFor(contact) {
  const raw = String(contact || "").trim();
  const email = (/[^\s@<>,;"]+@[^\s@<>,;"]+\.[^\s@<>,;"]+/.exec(raw) || [])[0];
  if (email && normalizeRecipient("email", email)) return { channel: "email", to: email };
  const phone = normalizeRecipient("sms", raw);
  return phone ? { channel: "sms", to: phone } : null;
}

function planScheduleWrite(intent, { command, editable, workspace, today, nowTime }) {
  const name = `"${workspace}"`;
  const leads = editable.leads || [];

  if (intent === "setHours") {
    const days = daysIn(command);
    if (!days.length) return { response: "Which days? For example: set my hours Monday to Friday 9 to 5.", missingInformation: ["days"] };
    const closed = /\b(?:closed|not open|off)\b/i.test(command) && !/\bopen\b[^.?!]{0,30}\b(?:to|until|-)\b/i.test(command);
    const range = closed ? null : timeRange(command);
    if (!closed && !range) return { response: "What are the opening and closing times? For example: set my hours Monday to Friday 9 to 5.", missingInformation: ["hours"] };
    const names = say(days.map(i => withCapital(DAY_NAMES[i]) + "s"));
    return {
      prompt: closed ? `I can mark ${name} as closed on ${names}. Should I go ahead?` : `I can set the hours of ${name} to ${clock(range.open)} to ${clock(range.close)} on ${names}. Should I go ahead?`,
      apply: current => ({ ...current, hours: hoursRowsAfter(current, days, range) }),
      done: closed ? `${name} is now closed on ${names}.` : `Set the hours of ${name} to ${clock(range.open)} to ${clock(range.close)} on ${names}.`
    };
  }

  if (intent === "bookCustomer") {
    const who = nameIn(command);
    const when = parseWhen(command, today);
    const minutes = parseDuration(command) || DEFAULT_MINUTES;
    if (!who) return { response: "Who is the appointment for?", missingInformation: ["name"] };
    if (!when.day) return { response: `Which day should I book ${who} for?`, missingInformation: ["date"] };
    if (!when.time) return { response: `What time on ${callDay(when.day, today)} should I book ${who} for?`, missingInformation: ["time"] };
    if (when.day < today) return { response: "That day has already passed. Which day should I book?", missingInformation: ["date"] };
    const lead = leadFor(editable, command, who);
    const person = lead ? lead.name : who;
    const startAt = `${when.day}T${when.time}`;
    const same = (editable.appointments || []).find(item => lower(item.status) !== "cancelled" && item.startAt === startAt && lower(item.customer) === lower(person));
    if (same) return { response: `${person} is already booked for ${callDay(when.day, today)} at ${clock(when.time)} in ${name}, so I did not book again.`, info: true };
    const result = check(editable, when.day, when.time, minutes, { today, nowTime });
    if (!result.ok) {
      const list = nextOpenings(editable, when.day, when.time, minutes, { today, nowTime });
      const alt = list.length ? ` The next openings are ${sayOpenings(list, today)}. Which one should I book?` : "";
      const slot = `${callDay(when.day, today)} at ${clock(when.time)}`;
      if (result.why === "closed") return { response: `${name} is closed ${callDay(when.day, today)}, so I did not book ${person}.${alt}`, info: true };
      if (result.why === "past") return { response: `${withCapital(slot)} has already passed, so I did not book ${person}.${alt}`, info: true };
      if (result.why === "outside") return { response: `${withCapital(slot)} is outside the hours of ${name} (${clock(result.hours.open)} to ${clock(result.hours.close)}), so I did not book ${person}.${alt}`, info: true };
      return { response: `${withCapital(slot)} is already taken by ${result.conflict.item.customer || result.conflict.item.title}, so I did not book ${person}.${alt}`, info: true };
    }
    if ((editable.appointments || []).length >= APPOINTMENT_LIMIT) return { response: `${name} already holds ${APPOINTMENT_LIMIT} appointments. Cancel or remove some before booking more.`, info: true };
    const service = serviceIn(when.rest, person, workspace);
    const row = { title: `${person}${service ? ` - ${service}` : ""}`, start: `${callDay(when.day, today)} at ${clock(when.time)}`, end: "", notes: "", status: "scheduled", calendarEventId: "", calendarLink: "", startAt, durationMinutes: minutes, customer: person, service, confirmation: "" };
    const note = result.hours.assumed ? ` ${ASSUMED_NOTE}` : "";
    return {
      prompt: `I can book ${person}${service ? `, ${service},` : ""} on ${callDay(when.day, today)} at ${clock(when.time)} for ${minutes === 60 ? "an hour" : `${minutes} minutes`} in ${name}${lead ? "" : `, and add ${person} to your customers (I do not have them on your list yet)`}. Should I go ahead?${note}`,
      apply: current => ({ ...current,
        appointments: [...(current.appointments || []), row],
        leads: lead || (current.leads || []).some(item => lower(item.name) === lower(person)) ? current.leads : [...(current.leads || []), { name: person, contact: "", type: "customer", need: service, stage: "booked", nextAction: "", followUpDate: "", skills: "", availability: "", source: "", consent: "", consentDate: "", callConsent: "", callConsentDate: "" }] }),
      done: `Booked ${person}${service ? `, ${service},` : ""} on ${callDay(when.day, today)} at ${clock(when.time)} in ${name}.${lead && channelFor(lead.contact) ? ` Say "send ${first(person)} the confirmation" to tell them.` : ` I have no phone number or email for ${first(person)} yet; add one before sending a confirmation.`}`
    };
  }

  if (intent === "cancelBooking" || intent === "moveBooking" || intent === "confirmBooking") {
    const who = nameIn(command);
    const lead = leadFor(editable, command, who);
    const pool = appointmentFor(editable, lead, command, who);
    const label = who || (lead && lead.name) || "that person";
    if (!pool.length) {
      const any = (editable.appointments || []).some(item => lower(item.status) !== "cancelled" && item.startAt);
      return { response: who ? `I could not find an upcoming booking for ${label} in ${name}.${any ? " Say the customer's name exactly as it is saved." : ""}` : `Whose appointment? Say the customer's name, for example: cancel Grace Otieno's appointment.`, missingInformation: ["name"] };
    }
    const wanted = parseWhen(command, today);
    let candidates = pool;
    if (intent === "cancelBooking" && wanted.day) { const onDay = pool.filter(({ item }) => item.startAt.slice(0, 10) === wanted.day); if (onDay.length) candidates = onDay; }
    candidates = candidates.slice().sort((a, b) => a.item.startAt.localeCompare(b.item.startAt));
    const upcomingOnly = candidates.filter(({ item }) => item.startAt.slice(0, 10) >= today);
    if (upcomingOnly.length) candidates = upcomingOnly;
    if (candidates.length > 1 && intent !== "confirmBooking" && !(intent === "moveBooking")) {
      return { response: `${label} has ${candidates.length} bookings: ${say(candidates.map(({ item }) => `${describeDay(item.startAt.slice(0, 10), today)} at ${clock(item.startAt.slice(11, 16))}`))}. Say the day of the one you mean, for example: cancel ${first(label)}'s appointment on ${describeDay(candidates[0].item.startAt.slice(0, 10), today)}.`, missingInformation: ["date"] };
    }
    const target = candidates[0]; const item = target.item;
    const dayOf = item.startAt.slice(0, 10); const timeOf = item.startAt.slice(11, 16);
    const person = item.customer || label;

    if (intent === "cancelBooking") {
      return {
        prompt: `I can cancel ${person}'s booking on ${callDay(dayOf, today)} at ${clock(timeOf)} in ${name}. Should I go ahead?`,
        apply: current => ({ ...current, appointments: current.appointments.map((row, i) => (i === target.index ? { ...row, status: "cancelled" } : row)) }),
        done: `Cancelled ${person}'s booking on ${callDay(dayOf, today)} at ${clock(timeOf)} in ${name}. That time is free again.`
      };
    }
    if (intent === "moveBooking") {
      const withoutName = String(command).replace(new RegExp(`\\b${person.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}['’]?s?\\b`, "ig"), " ");
      const to = parseWhen(withoutName, today);
      const newDay = to.day || dayOf; const newTime = to.time || timeOf;
      if (!to.day && !to.time) return { response: `When should I move ${person}'s booking to? For example: move ${first(person)}'s appointment to Friday at 3.`, missingInformation: ["date"] };
      if (newDay < today) return { response: "That day has already passed. Which day should I move it to?", missingInformation: ["date"] };
      const minutes = minutesOf(item);
      const result = check(editable, newDay, newTime, minutes, { today, nowTime, ignoreIndex: target.index });
      if (!result.ok) {
        const list = nextOpenings(editable, newDay, newTime, minutes, { today, nowTime });
        const alt = list.length ? ` The next openings are ${sayOpenings(list, today)}.` : "";
        const why = result.why === "closed" ? `${name} is closed ${callDay(newDay, today)}` : result.why === "past" ? `${withCapital(callDay(newDay, today))} at ${clock(newTime)} has already passed` : result.why === "outside" ? `${withCapital(callDay(newDay, today))} at ${clock(newTime)} is outside your hours` : `${withCapital(callDay(newDay, today))} at ${clock(newTime)} is taken by ${result.conflict.item.customer || result.conflict.item.title}`;
        return { response: `${why}, so I did not move ${person}'s booking.${alt}`, info: true };
      }
      return {
        prompt: `I can move ${person}'s booking from ${callDay(dayOf, today)} at ${clock(timeOf)} to ${callDay(newDay, today)} at ${clock(newTime)} in ${name}. Should I go ahead?`,
        apply: current => ({ ...current, appointments: current.appointments.map((row, i) => (i === target.index ? { ...row, startAt: `${newDay}T${newTime}`, start: `${callDay(newDay, today)} at ${clock(newTime)}`, confirmation: "", calendarEventId: "", calendarLink: "", status: "scheduled" } : row)) }),
        done: `Moved ${person}'s booking to ${callDay(newDay, today)} at ${clock(newTime)} in ${name}. They have not been told yet; say "send ${first(person)} the confirmation" to tell them.`
      };
    }
    // confirmBooking
    const customer = lead || leads.find(row => lower(row.name) === lower(person));
    if (!customer) return { response: `${person} is not on your customer list in ${name}, so I have nowhere to send a confirmation. Add them with a phone number or email first.`, info: true };
    const channel = channelFor(customer.contact);
    if (!channel) return { response: `I have no usable phone number or email for ${customer.name} in ${name}${customer.contact ? ` (what is saved, "${customer.contact}", is not one I can send to; a phone number needs its country code, like +1 or +254)` : ""}. Add one first, then ask me again.`, info: true };
    if (lower(item.confirmation) === "sent" && !/\b(?:again|resend|re-send)\b/i.test(command)) return { response: `${customer.name} was already sent a confirmation for ${callDay(dayOf, today)} at ${clock(timeOf)}. Say "send the confirmation again" to send it once more.`, info: true };
    const message = confirmationText({ lead: customer, appointment: item, workspace, today });
    return {
      prompt: `I can ${channel.channel === "email" ? "email" : "text"} ${customer.name} at ${channel.to}: "${message}" Should I send it?`,
      send: { channel: channel.channel, to: channel.to, message, subject: `Your appointment with ${workspace}` },
      apply: current => ({ ...current, appointments: current.appointments.map((row, i) => (i === target.index ? { ...row, confirmation: "sent" } : row)) }),
      done: `Sent ${customer.name} the confirmation by ${channel.channel === "email" ? "email" : "text"} for ${callDay(dayOf, today)} at ${clock(timeOf)}.`
    };
  }

  if (intent === "recordCallConsent") {
    const who = nameIn(command);
    if (!who) return { response: "Whose permission is this? For example: Grace Otieno agreed to be called back.", missingInformation: ["name"] };
    const optOut = /\b(?:does not|doesn['’]t|do not|don['’]t|did not|didn['’]t|no longer)\b[^.?!]{0,25}\b(?:want|wish|like|agree)\b|\bopted out\b|\bstop calling\b|\bno more (?:calls|texts)\b|\bdo not call\b/i.test(command);
    const lead = leadFor(editable, command, who);
    const person = lead ? lead.name : who;
    const status = optOut ? "no" : "yes";
    return {
      prompt: optOut ? `I can note in ${name} that ${person} does not want to be called, and I will not call them. Should I go ahead?` : `I can note in ${name} that ${person} agreed to be called back, as of today${lead ? "" : `, and add ${person} to your customers`}. Should I go ahead?`,
      apply: current => {
        const list = current.leads || [];
        const stamp = { callConsent: status, callConsentDate: today };
        if (lead) return { ...current, leads: list.map(row => (row.name === lead.name && row.contact === lead.contact ? { ...row, ...stamp } : row)) };
        return { ...current, leads: [...list, { name: person, contact: "", type: "customer", need: "", stage: "new", nextAction: "", followUpDate: "", skills: "", availability: "", source: "", consent: "", consentDate: "", ...stamp }] };
      },
      done: optOut ? `Noted in ${name}: ${person} does not want to be called. I will not list them as someone to call back.` : `Noted in ${name}: ${person} agreed to be called back. Say "who can I call back" to see everyone who agreed.`
    };
  }

  if (intent === "requestQuote" || intent === "quoteSent") {
    const who = nameIn(command);
    if (!who) return { response: intent === "quoteSent" ? "Who did you send the quote to?" : "Who asked for the quote? For example: Grace Otieno asked for a quote for a fence.", missingInformation: ["name"] };
    const lead = leadFor(editable, command, who);
    const person = lead ? lead.name : who;
    if (intent === "quoteSent") {
      if (!lead || lower(lead.stage) !== "quote requested") return { response: `${person} is not waiting on a quote in ${name}, so there is nothing to mark as sent.`, info: true };
      return {
        prompt: `I can mark the quote for ${person} as sent in ${name}. Should I go ahead?`,
        apply: current => ({ ...current, leads: current.leads.map(row => (row.name === lead.name && row.contact === lead.contact ? { ...row, stage: "quoted" } : row)) }),
        done: `Marked the quote for ${person} as sent in ${name}.`
      };
    }
    const found = extractDay(command, today);
    const followUp = found && found.day >= today ? found.day : "";
    const needMatch = /\b(?:quote|estimate|bid|proposal)\s+(?:for|on|to)\s+(.+?)(?=\s+(?:and|then|follow|by|on|next|this|tomorrow|today)\b|[.,;!?]|$)/i.exec(String(command || ""));
    const need = needMatch ? needMatch[1].replace(/\s+/g, " ").trim().slice(0, 140) : "";
    const day = followUp || addDays(today, 2);
    return {
      prompt: `I can note in ${name} that ${person} asked for a quote${need ? ` for ${need}` : ""}, with a follow-up ${followUp ? "" : "(I picked two days from now since you did not say) "}on ${describeDay(day, today)}${lead ? "" : `, and add ${person} to your customers`}. Should I go ahead?`,
      apply: current => {
        const list = current.leads || [];
        const stamp = { stage: "quote requested", followUpDate: day, nextAction: `Send the quote${need ? ` for ${need}` : ""}`, ...(need ? { need } : {}) };
        if (lead) return { ...current, leads: list.map(row => (row.name === lead.name && row.contact === lead.contact ? { ...row, ...stamp } : row)) };
        return { ...current, leads: [...list, { name: person, contact: "", type: "customer", need, source: "", skills: "", availability: "", consent: "", consentDate: "", callConsent: "", callConsentDate: "", ...stamp }] };
      },
      done: `Noted in ${name}: ${person} asked for a quote${need ? ` for ${need}` : ""}. I will remind you to follow up ${describeDay(day, today)}.`
    };
  }
  return null;
}

// The question to ask BEFORE anyone is asked for a yes, when the words do not say who, which day or what time (null when nothing is missing). It needs no workspace, so the planner can ask it first.
function missingFor(intent, command) {
  const reference = "2000-01-03";
  if (intent === "bookCustomer") {
    const who = nameIn(command); const when = parseWhen(command, reference);
    if (!who) return "Who is the appointment for?";
    if (!when.day) return `Which day should I book ${who} for?`;
    if (!when.time) return `What time should I book ${who} for?`;
  } else if (intent === "setHours") {
    if (!daysIn(command).length) return "Which days? For example: set my hours Monday to Friday 9 to 5.";
    if (!/\b(?:closed|not open|off)\b/i.test(command) && !timeRange(command)) return "What are the opening and closing times? For example: set my hours Monday to Friday 9 to 5.";
  } else if (intent === "moveBooking") {
    const when = parseWhen(command, reference);
    if (!when.day && !when.time) return `When should I move ${nameIn(command) ? `${nameIn(command)}'s` : "that"} booking to? For example: move Grace's appointment to Friday at 3.`;
  } else if (["cancelBooking", "confirmBooking", "recordCallConsent", "requestQuote", "quoteSent"].includes(intent) && !nameIn(command)) {
    return intent === "cancelBooking" || intent === "confirmBooking" ? "Whose appointment? Say the customer's name." : "Who is this about? Say the customer's name.";
  }
  return null;
}

module.exports = Object.freeze({ classifySchedule, readSchedule, planScheduleWrite, SCHEDULE_READ_INTENTS, SCHEDULE_WRITE_INTENTS, leadFor, missingFor,
  hoursFor, check, freeIntervals, nextOpenings, bookedOn, parseDuration, parseWhen, timeRange, daysIn, nameIn, channelFor, confirmationText, clock });
