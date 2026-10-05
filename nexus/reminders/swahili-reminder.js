"use strict";

// "Nikumbushe kesho saa tatu asubuhi kunywesha ng'ombe": a reminder asked for in Kiswahili. Found by the audits: every Swahili reminder went to the AI model and nothing was scheduled, because the
// reminder reader only knew English day and clock words. This reads the Swahili day (kesho, keshokutwa, leo, a weekday) and the Swahili clock, and hands the English-form time to the same scheduler.
// The same reading serves repeating reminders ("nikumbushe kila siku saa tatu asubuhi kunywa dawa", and stopping or listing them) and calendar events ("ongeza mkutano kwenye kalenda kesho saa nne asubuhi").
//
// The Swahili clock counts from sunrise: "saa moja" is 7 o'clock, "saa tatu" is 9, "saa sita" is 12, "saa saba" is 1, "saa kumi na mbili" is 6. The part of the day
// (asubuhi morning, mchana midday/afternoon, jioni evening, usiku night, alfajiri dawn) says which half. A time with no part of the day is asked about, never guessed.
// The Swahili wording of every reply should be checked by a fluent speaker.
const clean = value => String(value ?? "").replace(/[’]/g, "'").replace(/\s+/g, " ").trim();

const HOURS = { moja: 1, mbili: 2, tatu: 3, nne: 4, tano: 5, sita: 6, saba: 7, nane: 8, tisa: 9, kumi: 10, "kumi na moja": 11, "kumi na mbili": 12 };
const HOUR_WORDS = "kumi na moja|kumi na mbili|kumi|moja|mbili|tatu|nne|tano|sita|saba|nane|tisa";
const PERIODS = "asubuhi|mchana|alasiri|jioni|usiku|alfajiri";
const WEEKDAYS_SW = { jumatatu: "Monday", jumanne: "Tuesday", jumatano: "Wednesday", alhamisi: "Thursday", ijumaa: "Friday", jumamosi: "Saturday", jumapili: "Sunday" };
const WEEKDAY_WORDS = Object.keys(WEEKDAYS_SW).join("|");
const REMIND = /^(?:tafadhali\s+)?(?:nikumbushe|nikumbushie|nikumbusheni|niwekee kikumbusho(?: cha)?|weka kikumbusho(?: cha)?)\s+(.+)$/i;
// "saa tatu", "saa tatu na nusu", "saa tatu na robo", "saa tatu kasoro robo", "saa 3 asubuhi", "saa 9:30 alasiri", each with an optional part of the day before or after
const CLOCK = new RegExp(`(?:\\b(${PERIODS})\\s+)?\\bsaa\\s+(${HOUR_WORDS}|\\d{1,2}(?::\\d{2})?)(?:\\s+na\\s+(nusu|robo|dakika\\s+\\d{1,2}))?(?:\\s+kasoro\\s+(robo|dakika\\s+\\d{1,2}))?(?:\\s+(${PERIODS}))?\\b`, "i");

// The 12-hour clock a Swahili hour means: 1 -> 7, 5 -> 11, 6 -> 12, 7 -> 1, 12 -> 6.
const clock12 = swahiliHour => ((swahiliHour + 5) % 12) + 1;

function hourFor(swahiliHour, period) {
  const h = clock12(swahiliHour);
  switch (period) {
    case "asubuhi": case "alfajiri": return h === 12 ? 12 : h;
    case "mchana": case "alasiri": return h === 12 ? 12 : h + 12;
    case "jioni": return h === 12 ? 12 : h + 12;
    case "usiku": return h === 12 ? 0 : h >= 6 ? h + 12 : h;
    default: return null;
  }
}
const english = (hour24, minute) => `${hour24 % 12 || 12}:${String(minute).padStart(2, "0")} ${hour24 >= 12 ? "pm" : "am"}`;

// A day word in the text -> { en, sw, rest } (rest = the text without it), or null.
function readDay(body) {
  let day = null; let daySw = ""; let d;
  if ((d = /\bkeshokutwa\b/i.exec(body))) { day = "the day after tomorrow"; daySw = "keshokutwa"; }
  else if ((d = /\bkesho\b/i.exec(body))) { day = "tomorrow"; daySw = "kesho"; }
  else if ((d = /(?:^|\s)leo\b/i.exec(body))) { day = "today"; daySw = "leo"; d = { index: d.index + (/^\s/.test(d[0]) ? 1 : 0), 0: "leo" }; }
  else if ((d = new RegExp(`\\b(${WEEKDAY_WORDS})\\b`, "i").exec(body))) { day = `on ${WEEKDAYS_SW[d[1].toLowerCase()]}`; daySw = d[1].toLowerCase(); }
  return d ? { en: day, sw: daySw, rest: clean(`${body.slice(0, d.index)} ${body.slice(d.index + d[0].length)}`) } : { en: "", sw: "", rest: body };
}
// The Swahili clock in the text -> null (none) | { needTime: true } | { en, sw, rest }
function readClock(body) {
  const c = CLOCK.exec(body);
  if (!c) return /\bsaa\b/i.test(body) ? { needTime: true } : null;
  const rawHour = c[2].toLowerCase();
  let swahiliHour; let minute = 0; let literal24 = false;
  if (/:/.test(rawHour)) { const [h, mm] = rawHour.split(":").map(Number); swahiliHour = h; minute = mm; literal24 = true; }
  else swahiliHour = HOURS[rawHour] ?? Number(rawHour);
  if (!(swahiliHour >= 0 && swahiliHour <= 24)) return { needTime: true };
  const period = (c[5] || c[1] || "").toLowerCase();
  let hour24;
  if (literal24 && !period) hour24 = swahiliHour; // "saa 14:30" is the plain 24-hour clock
  else if (!period && /^\d/.test(rawHour) && swahiliHour >= 13) hour24 = swahiliHour; // "saa 15" is 3 pm
  else if (!period) return { needTime: true };
  else if (swahiliHour < 1 || swahiliHour > 12) return { needTime: true };
  else hour24 = hourFor(swahiliHour, period);
  if (c[3]) { const part = c[3].toLowerCase(); minute += part === "nusu" ? 30 : part === "robo" ? 15 : Number(part.replace(/\D/g, "")); }
  if (c[4]) { const part = c[4].toLowerCase(); minute -= part === "robo" ? 15 : Number(part.replace(/\D/g, "")); }
  let total = hour24 * 60 + minute;
  if (!(minute >= -59 && minute <= 119) || total < 0) total = ((total % 1440) + 1440) % 1440;
  hour24 = Math.floor(total / 60) % 24; minute = total % 60;
  return { en: english(hour24, minute), sw: c[0].replace(/^\s+/, "").replace(/\s+/g, " ").trim(), rest: clean(`${body.slice(0, c.index)} ${body.slice(c.index + c[0].length)}`) };
}
const tidyTask = value => clean(value).replace(/^(?:ya|kwamba|ili|kuhusu)\s+/i, "").replace(/\s+([.,!?;:])/g, "$1");

// -> null (not a Swahili reminder) | { needTime: true } | { needTask: true } | { task, when, whenSw }
function parseSwahiliReminder(text) {
  const t = clean(text).replace(/[.!?]+$/g, "");
  const m = REMIND.exec(t);
  if (!m) return null;
  // a repeating one ("kila siku") is read by parseSwahiliRepeating
  if (/\bkila\b/i.test(m[1])) return null;
  const day = readDay(m[1]);
  const clock = readClock(day.rest);
  if (!clock) return day.en ? { needTime: true } : null;
  if (clock.needTime) return { needTime: true };
  const task = tidyTask(clock.rest);
  if (!task) return { needTask: true };
  return { task, when: `${day.en ? `${day.en} ` : ""}at ${clock.en}`, whenSw: `${day.sw ? `${day.sw} ` : ""}${clock.sw}`.trim() };
}

// ---- repeating reminders ----
const CADENCE_DAYS = new RegExp(`\\bkila\\s+((?:${WEEKDAY_WORDS})(?:\\s*(?:,|na)\\s*(?:${WEEKDAY_WORDS}))*)\\b`, "i");
// -> null | { unsupported: true } | { needDay | needTask | needTime: true } | { english, task, cadenceSw, clockSw, replySw }
function parseSwahiliRepeating(text) {
  const t = clean(text).replace(/[.!?]+$/g, "");
  const m = REMIND.exec(t);
  if (!m || !/\bkila\b/i.test(m[1])) return null;
  let body = m[1]; let cadence = ""; let cadenceSw = ""; let match;
  if ((match = /\bkila\s+siku\s+(?:ya|za)\s+kazi\b|\bsiku\s+za\s+kazi\b/i.exec(body))) { cadence = "every weekday"; cadenceSw = "kila siku ya kazi"; }
  else if ((match = /\bkila\s+siku\b/i.exec(body))) { cadence = "every day"; cadenceSw = "kila siku"; }
  else if ((match = CADENCE_DAYS.exec(body))) {
    const names = match[1].toLowerCase().split(/\s*(?:,|na)\s*/).filter(Boolean);
    cadence = `every ${names.map(name => WEEKDAYS_SW[name]).join(" and ")}`; cadenceSw = `kila ${names.join(" na ")}`;
  } else if ((match = /\bkila\s+(asubuhi|jioni|usiku)\b/i.exec(body))) {
    const word = match[1].toLowerCase(); cadence = word === "asubuhi" ? "every morning" : word === "jioni" ? "every evening" : "every night"; cadenceSw = `kila ${word}`;
  } else if (/\bkila\s+wiki\b/i.test(body)) return { needDay: true };
  else return { unsupported: true };
  body = clean(`${body.slice(0, match.index)} ${body.slice(match.index + match[0].length)}`);
  const clock = readClock(body);
  if (clock?.needTime) return { needTime: true };
  const task = tidyTask(clock ? clock.rest : body);
  if (!task) return { needTask: true };
  const english = `Remind me ${cadence}${clock ? ` at ${clock.en}` : ""} to ${task}`;
  return { english, task, cadenceSw, clockSw: clock?.sw || "", replySw: `Sawa. Nitakukumbusha ${task} ${cadenceSw}${clock ? ` ${clock.sw}` : ""}. Ili kuacha, sema "acha kikumbusho cha ${task}".` };
}
// "acha kikumbusho cha kila siku kunywa dawa" -> the English sentence the existing stop reads
function parseSwahiliStop(text) {
  const m = /^(?:tafadhali\s+)?(?:acha|simamisha|futa|ondoa)\s+kikumbusho(?:\s+changu)?(?:\s+cha\s+kujirudia|\s+cha\s+kila\s+siku)?(?:\s+cha|\s+kuhusu)?\s+(.+)$/i.exec(clean(text).replace(/[.!?]+$/g, ""));
  return m ? { english: `stop my repeating reminder to ${tidyTask(m[1])}`, task: tidyTask(m[1]) } : null;
}
function parseSwahiliList(text) {
  return /^(?:tafadhali\s+)?(?:onyesha|nionyeshe|orodha ya)\s+vikumbusho\s+vyangu(?:\s+vinavyojirudia|\s+vya\s+kila\s+siku)?$/i.test(clean(text).replace(/[.!?]+$/g, "")) ? { english: "show my repeating reminders" } : null;
}

// ---- calendar events ----
// "Ongeza mkutano kwenye kalenda kesho saa nne asubuhi", "weka kwenye kalenda ziara ya daktari jumatatu"
function parseSwahiliCalendar(text) {
  const t = clean(text).replace(/[.!?]+$/g, "");
  const m = /^(?:tafadhali\s+)?(?:ongeza|weka|andika)\s+(?:(.+?)\s+)?(?:kwenye|katika|kwa)\s+kalenda(?:\s+yangu)?(?:\s+(.+))?$/i.exec(t);
  if (!m || !(m[1] || m[2])) return null;
  const day = readDay(clean(`${m[1] || ""} ${m[2] || ""}`));
  const clock = readClock(day.rest);
  if (clock?.needTime) return { needTime: true };
  const title = tidyTask(clock ? clock.rest : day.rest);
  if (!title) return { needTitle: true };
  if (!day.en) return { needDay: true, title };
  const english = `add ${title} to my calendar ${day.en}${clock ? ` at ${clock.en}` : ""}`;
  const whenSw = `${day.sw}${clock ? ` ${clock.sw}` : ""}`.trim();
  return { english, title, whenSw, replySw: `Nimeongeza kwenye kalenda yako: ${title} ${whenSw}. Nitaitaja kwenye muhtasari wako wa asubuhi siku hiyo.` };
}

const NEED_TIME_SW = "Saa ngapi? Kwa mfano \"kesho saa tatu asubuhi\" au \"leo saa kumi jioni\" (saa tatu asubuhi ni saa tisa ya kawaida).";
const NEED_TASK_SW = "Nikukumbushe nini? Kwa mfano \"nikumbushe kesho saa tatu asubuhi kunywesha ng'ombe\".";
const NEED_DAY_SW = "Siku gani? Kwa mfano \"kila jumatatu saa mbili asubuhi\" au \"kila siku saa tatu asubuhi\".";
const UNSUPPORTED_REPEAT_SW = "Naweza kurudia kikumbusho kila siku, kila siku ya kazi, au siku fulani za wiki (kwa mfano \"kila jumatatu\"). Bado sijaweka chochote.";
const NEED_EVENT_DAY_SW = "Siku gani? Sema kwa mfano \"kesho\" au \"jumatatu\".";
const NEED_EVENT_TITLE_SW = "Tukio linaitwaje? Kwa mfano \"ongeza ziara ya daktari kwenye kalenda kesho saa nne asubuhi\".";
const setReplySw = ({ task, whenSw }) => `Sawa. Nitakukumbusha ${task} ${whenSw}.`;
const stoppedReplySw = task => `Sawa. Nimeacha kikumbusho cha ${task}.`;

module.exports = Object.freeze({ parseSwahiliReminder, parseSwahiliRepeating, parseSwahiliStop, parseSwahiliList, parseSwahiliCalendar, NEED_TIME_SW, NEED_TASK_SW, NEED_DAY_SW, UNSUPPORTED_REPEAT_SW,
  NEED_EVENT_DAY_SW, NEED_EVENT_TITLE_SW, setReplySw, stoppedReplySw, clock12 });
