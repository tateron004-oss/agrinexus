"use strict";

// "Nikumbushe kesho saa tatu asubuhi kunywesha ng'ombe": a reminder asked for in Kiswahili. Found by the audits: every Swahili reminder went to the AI model and nothing was scheduled, because the
// reminder reader only knew English day and clock words. This reads the Swahili day (kesho, keshokutwa, leo, a weekday) and the Swahili clock, and hands the English-form time to the same scheduler.
//
// The Swahili clock counts from sunrise: "saa moja" is 7 o'clock, "saa tatu" is 9, "saa sita" is 12, "saa saba" is 1, "saa kumi na mbili" is 6. The part of the day
// (asubuhi morning, mchana midday/afternoon, jioni evening, usiku night, alfajiri dawn) says which half. A time with no part of the day is asked about, never guessed.
// The Swahili wording of every reply should be checked by a fluent speaker.
const clean = value => String(value ?? "").replace(/[’]/g, "'").replace(/\s+/g, " ").trim();

const HOURS = { moja: 1, mbili: 2, tatu: 3, nne: 4, tano: 5, sita: 6, saba: 7, nane: 8, tisa: 9, kumi: 10, "kumi na moja": 11, "kumi na mbili": 12 };
const HOUR_WORDS = "kumi na moja|kumi na mbili|kumi|moja|mbili|tatu|nne|tano|sita|saba|nane|tisa";
const PERIODS = "asubuhi|mchana|alasiri|jioni|usiku|alfajiri";
const WEEKDAYS_SW = { jumatatu: "Monday", jumanne: "Tuesday", jumatano: "Wednesday", alhamisi: "Thursday", ijumaa: "Friday", jumamosi: "Saturday", jumapili: "Sunday" };
const REMIND = /^(?:tafadhali\s+)?(?:nikumbushe|nikumbushie|nikumbusheni|niwekee kikumbusho(?: cha)?|weka kikumbusho(?: cha)?)\s+(.+)$/i;
// "saa tatu", "saa tatu na nusu", "saa tatu na robo", "saa tatu kasoro robo", "saa 3 asubuhi", "saa 9:30 alasiri", each with an optional part of the day
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

// -> null (not a Swahili reminder) | { needTime: true } | { task, when, whenSw }
function parseSwahiliReminder(text) {
  const t = clean(text).replace(/[.!?]+$/g, "");
  const m = REMIND.exec(t);
  if (!m) return null;
  let body = m[1];
  // a repeating one ("kila siku") is not read here
  if (/\bkila\b/i.test(body)) return null;
  let day = null; let daySw = "";
  let d;
  if ((d = /\bkeshokutwa\b/i.exec(body))) { day = "the day after tomorrow"; daySw = "keshokutwa"; }
  else if ((d = /\bkesho\b/i.exec(body))) { day = "tomorrow"; daySw = "kesho"; }
  else if ((d = /(?:^|\s)leo\b/i.exec(body))) { day = "today"; daySw = "leo"; d = { index: d.index + (/^\s/.test(d[0]) ? 1 : 0), 0: "leo" }; }
  else if ((d = new RegExp(`\\b(${Object.keys(WEEKDAYS_SW).join("|")})\\b`, "i").exec(body))) { day = `on ${WEEKDAYS_SW[d[1].toLowerCase()]}`; daySw = d[1].toLowerCase(); }
  if (d) body = clean(`${body.slice(0, d.index)} ${body.slice(d.index + d[0].length)}`);
  const c = CLOCK.exec(body);
  if (!c) return /\bsaa\b/i.test(body) || day ? { needTime: true } : null;
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
  const task = clean(`${body.slice(0, c.index)} ${body.slice(c.index + c[0].length)}`).replace(/^(?:ya|kwamba|ili)\s+/i, "").replace(/\s+([.,!?;:])/g, "$1");
  if (!task) return { needTask: true };
  const when = `${day ? `${day} ` : ""}at ${english(hour24, minute)}`;
  const whenSw = `${daySw ? `${daySw} ` : ""}${c[0].replace(/^\s+/, "")}`.replace(/\s+/g, " ").trim();
  return { task, when, whenSw };
}

const NEED_TIME_SW = "Saa ngapi? Kwa mfano \"kesho saa tatu asubuhi\" au \"leo saa kumi jioni\" (saa tatu asubuhi ni saa tisa ya kawaida).";
const NEED_TASK_SW = "Nikukumbushe nini? Kwa mfano \"nikumbushe kesho saa tatu asubuhi kunywesha ng'ombe\".";
const setReplySw = ({ task, whenSw }) => `Sawa. Nitakukumbusha ${task} ${whenSw}.`;

module.exports = Object.freeze({ parseSwahiliReminder, NEED_TIME_SW, NEED_TASK_SW, setReplySw, clock12 });
