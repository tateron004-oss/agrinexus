"use strict";

const { extractDay, extractPeriod, addDays, weekdayOf, describeDay } = require("../personal/dates.js");
const { localDay, validTimeZone, DEFAULT_TIME_ZONE } = require("../brief/compose.js");

// A farm log the person keeps by talking: rainfall, soil moisture, tank levels and harvests, with totals on request and a warning when a
// tank or soil reading falls below a level they chose. Only what the person reports is stored (nothing is measured or guessed here),
// units are converted to one standard (millimetres, kilograms), and a number that cannot be right is refused rather than saved.
const NUM = "(\\d+(?:[.,]\\d+)?)";
const LEN = "(mm|millimet(?:er|re)s?|cm|centimet(?:er|re)s?|inch(?:es)?)";
const PCT = "(?:%|percent|per cent)";
const WEIGHT = "(kgs?|kilos?|kilograms?|tonnes?|tons?|bags?|sacks?|crates?|bunches|litres|liters)";
const clean = value => String(value ?? "").replace(/\s+/g, " ").trim();
const num = raw => Number(String(raw).replace(",", "."));
const round = value => Number(Number(value).toFixed(1));
const NOT_A_PLACE = new Set(["today", "yesterday", "percent", "the", "my", "our", "it", "this", "that", "last", "night", "morning", "week", "month", "year", "total", "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday",
  "january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]);
const MAX_ENTRIES = 5000;

// Where a reading was taken, from "in the north field", "at the dam", or the words before "tank" ("north tank"). "" when none is given.
function placeFrom(text, fallback = "") {
  const found = /\b(?:in|at|for|on|from) (?:the |my |our )?([a-z][a-z' -]{1,28}?)(?=\s+(?:is|was|reads?|reading|at|of|today|yesterday|this|last|on)\b|[\s.,]*$)/i.exec(clean(text));
  const place = clean(found?.[1] || fallback).toLowerCase();
  return !place || place.split(" ").some(word => NOT_A_PLACE.has(word)) ? "" : place.slice(0, 30);
}
const cropFrom = raw => { const crop = clean(raw).toLowerCase().replace(/^(?:the|my|our|some|fresh)\s+/, "").replace(/[.,!?]+$/g, ""); return /^[a-z][a-z ]{1,24}$/.test(crop) ? crop : ""; };

// The day a report is about: today unless they say yesterday, last night, a date, "3 days ago", or a weekday (the most recent one).
// Reports are about the past, so a day still ahead is an error, not a guess.
function reportDay(text, today) {
  const t = clean(text).toLowerCase();
  let m;
  if (/\blast night\b/.test(t)) return { day: addDays(today, -1) };
  if ((m = /\b(\d{1,2}) days? ago\b/.exec(t))) return { day: addDays(today, -Number(m[1])) };
  if ((m = /\b(?:on |last )?(sunday|monday|tuesday|wednesday|thursday|friday|saturday)\b/.exec(t))) {
    const back = (weekdayOf(today) - ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].indexOf(m[1]) + 7) % 7;
    return { day: addDays(today, -(back || 7)) };
  }
  const found = extractDay(t, today);
  if (!found) return { day: today };
  return found.day > today ? { future: true } : { day: found.day };
}

const RAIN = [
  new RegExp(`^(?:please )?(?:log|record|note|add)(?: down)?(?: that)?\\s+(?:(?:we|i) (?:got|had) )?${NUM}\\s*${LEN}\\s+(?:of )?rain(?:fall)?\\b(.*)$`, "i"),
  new RegExp(`^(?:we|i) (?:got|had|received|recorded) ${NUM}\\s*${LEN}\\s+(?:of )?rain(?:fall)?\\b(.*)$`, "i"),
  new RegExp(`^it rained ${NUM}\\s*${LEN}\\b(.*)$`, "i"),
  new RegExp(`^(?:the )?rain(?:fall)?(?: gauge)?\\s+(?:today |yesterday |last night |this morning )?(?:was|is|measured|read|reads)\\s+${NUM}\\s*${LEN}\\b(.*)$`, "i"),
  new RegExp(`^(?:please )?(?:log|record|note|add) rain(?:fall)?[:,]?\\s+${NUM}\\s*${LEN}\\b(.*)$`, "i")
];
function toMillimetres(value, unit) { return /^c/i.test(unit) ? value * 10 : /^i/i.test(unit) ? value * 25.4 : value; }

// { action: "log", metric, value, unit, place, crop, day } | { action: "refuse", reason } | a question/command | null.
function readRequest(text, today) {
  const t = clean(text).replace(/[’]/g, "'");
  if (!t || t.length > 160 || /\?\s*$/.test(t)) return readQuestion(t, today);
  const lower = t.toLowerCase().replace(/[.!]+$/g, "");
  let m;

  for (const pattern of RAIN) {
    if (!(m = pattern.exec(t))) continue;
    const value = round(toMillimetres(num(m[1]), m[2]));
    const when = reportDay(m[3] !== undefined && pattern !== RAIN[3] ? `${m[3]}` : t, today);
    if (when.future) return { action: "refuse", reason: "future" };
    if (value < 0 || value > 500) return { action: "refuse", reason: "rain", value };
    return { action: "log", metric: "rain", value, unit: "mm", place: placeFrom(m[3] || ""), crop: "", day: when.day };
  }
  if ((m = new RegExp(`^(?:please )?(?:(?:log|record|note|add)(?: down)?(?: that)?\\s+)?(?:the )?soil moisture\\b(.*?)\\b(?:is|was|at|reads?|reading(?: is)?|of|:)?\\s*${NUM}\\s*${PCT}(?=[\\s.,;!]|$)(.*)$`, "i").exec(t))) {
    const value = num(m[2]); const when = reportDay(`${m[1]} ${m[3]}`, today);
    if (when.future) return { action: "refuse", reason: "future" };
    if (value < 0 || value > 100) return { action: "refuse", reason: "percent", value };
    return { action: "log", metric: "soil", value: round(value), unit: "%", place: placeFrom(`${m[1]} ${m[3]}`), crop: "", day: when.day };
  }
  if ((m = new RegExp(`^(?:please )?(?:(?:log|record|note|add)(?: down)?(?: that)?\\s+)?(?:the |my |our )?((?:[a-z]+ ){0,2}?)(?:water )?(?:tank|reservoir)(?: level)?\\b(.*?)\\b(?:is|was|at|reads?|has|reading(?: is)?|:)?\\s*${NUM}\\s*(${PCT}|litres|liters|l)(?=[\\s.,;!]|$)(.*)$`, "i").exec(t))) {
    const value = num(m[3]); const percent = /^(?:%|percent|per cent)$/i.test(m[4]); const when = reportDay(`${m[2]} ${m[5]}`, today);
    if (when.future) return { action: "refuse", reason: "future" };
    if (percent && (value < 0 || value > 100)) return { action: "refuse", reason: "percent", value };
    if (!percent && (value < 0 || value > 10000000)) return { action: "refuse", reason: "litres", value };
    const before = clean(m[1]).toLowerCase(); const qualifier = before.split(" ").filter(word => word && !NOT_A_PLACE.has(word) && !["log", "record", "note", "add", "down", "that"].includes(word)).join(" ");
    return { action: "log", metric: "tank", value: round(value), unit: percent ? "%" : "litres", place: placeFrom(`${m[2]} ${m[5]}`, qualifier), crop: "", day: when.day };
  }
  if ((m = new RegExp(`^(?:please )?(?:(?:log|record|note|add)(?: down)?(?: that)?\\s+)?(?:(?:we|i)\\s+)?(?:harvested|picked|collected|threshed|gathered)\\s+(?:a total of )?${NUM}\\s*${WEIGHT}\\s+(?:of\\s+)?([a-z][a-z ]{1,24}?)(?:\\s+(?:from|in|on|today|yesterday|this|last)\\b(.*))?$`, "i").exec(t)) ||
      (m = new RegExp(`^(?:please )?(?:log|record|note|add) (?:a )?harvest of ${NUM}\\s*${WEIGHT}\\s+(?:of\\s+)?([a-z][a-z ]{1,24}?)(?:\\s+(?:from|in|on|today|yesterday|this|last)\\b(.*))?$`, "i").exec(t))) {
    const raw = num(m[1]); const unitWord = m[2].toLowerCase(); const crop = cropFrom(m[3]);
    const when = reportDay(t, today);
    if (when.future) return { action: "refuse", reason: "future" };
    if (!crop) return null;
    const tonnes = /^(?:tonnes?|tons?)$/.test(unitWord);
    const unit = tonnes || /^(?:kgs?|kilos?|kilograms?)$/.test(unitWord) ? "kg" : /^(?:litres|liters)$/.test(unitWord) ? "litres" : unitWord.replace(/s$/, "").replace(/^bunche$/, "bunch");
    const value = round(tonnes ? raw * 1000 : raw);
    if (value <= 0 || value > 100000000) return { action: "refuse", reason: "amount", value };
    return { action: "log", metric: "harvest", value, unit, place: placeFrom(t.slice(t.toLowerCase().indexOf(m[3].toLowerCase()) + m[3].length)), crop, day: when.day };
  }
  if ((m = new RegExp(`^(?:please )?(?:(?:log|record|note|add)(?: down)?(?: that)?\\s+)?(?:(?:we|i)\\s+)?(?:collected|gathered|got) ${NUM}\\s*eggs\\b(.*)$`, "i").exec(t))) {
    const when = reportDay(m[2], today); const value = num(m[1]);
    if (when.future) return { action: "refuse", reason: "future" };
    if (value <= 0 || value > 100000) return { action: "refuse", reason: "amount", value };
    return { action: "log", metric: "harvest", value: Math.round(value), unit: "egg", place: "", crop: "eggs", day: when.day };
  }
  // the person's own warning levels
  if ((m = new RegExp(`^(?:please )?(?:warn|alert|tell|let|notify|remind) me (?:if|when) (?:the |my )?(.+?) (?:goes |drops |falls |gets |dips |is )?(?:below|under|lower than|less than) ${NUM}\\s*(${PCT}|litres|liters)$`, "i").exec(lower))) {
    const subject = m[1]; const metric = /soil moisture/.test(subject) ? "soil" : /\b(?:tank|reservoir)\b/.test(subject) ? "tank" : null;
    if (!metric) return null;
    const percent = /^(?:%|percent|per cent)$/i.test(m[3]);
    if (num(m[2]) <= 0 || (percent && num(m[2]) > 100)) return { action: "refuse", reason: "percent", value: num(m[2]) };
    return { action: "alert-set", metric, below: round(num(m[2])), unit: percent ? "%" : "litres", place: metric === "soil" ? placeFrom(subject) : placeFrom(subject, subject.replace(/\s*(?:water )?(?:tank|reservoir)(?: level)?\s*/g, " ").trim().replace(/^(?:soil moisture|the|my|our)\s+/, "")) };
  }
  if ((m = /^stop (?:warning|alerting|telling|notifying) me (?:about|if|when) (?:the |my )?(.+)$/i.exec(lower))) {
    const metric = /soil moisture/.test(m[1]) ? "soil" : /\b(?:tank|reservoir)\b/.test(m[1]) ? "tank" : null;
    return metric ? { action: "alert-stop", metric, place: metric === "soil" ? placeFrom(m[1]) : placeFrom(m[1], m[1].replace(/\s*(?:water )?(?:tank|reservoir)(?: level)?\s*/g, " ").trim()) } : null;
  }
  return readQuestion(lower, today);
}

function readQuestion(text, today) {
  const t = clean(text).replace(/[’]/g, "'").toLowerCase().replace(/[.!?]+$/g, "");
  let m;
  if ((m = /^how much rain(?:fall)?(?: (?:did|have) (?:i|we)(?: (?:get|had|have|received|recorded|logged))?| was there| have i logged)?\b\s*(.*)$/.exec(t)) || (m = /^(?:what(?:'s| is| was)|show|tell me) (?:my |the |our )?(?:total )?rain(?:fall)?\b\s*(.*)$/.exec(t)))
  {
    // A question about the weather ahead ("how much rain is forecast tomorrow") is not about the log.
    const rest = clean(m[1]); const period = extractPeriod(rest, today);
    if (/\b(?:forecast|tomorrow|expected|predict\w*|next|will|going to|coming)\b/.test(rest) || (rest && !period && !/^(?:in|at|on|from) /.test(rest))) return null;
    return { action: "sum-rain", period: period || extractPeriod("this month", today) };
  }
  if ((m = /^(?:what(?:'s| is| was)|show|tell me|read me) (?:my |the |our )?(?:(?:last|latest|current|recent) )?(?:(soil moisture)|((?:[a-z]+ ){0,2}?)(?:water )?(?:tank|reservoir)(?: level)?)(?: reading)?\b\s*(.*)$/.exec(t)) ||
      (m = /^how full is (?:my |the |our )?((?:[a-z]+ ){0,2}?)(?:water )?(?:tank|reservoir)\b\s*(.*)$/.exec(t))) {
    const soil = Boolean(m[1] === "soil moisture");
    return { action: "latest", metric: soil ? "soil" : "tank", place: soil ? placeFrom(m[3]) : placeFrom(m[3] || "", clean(m[2] ?? m[1] ?? "")) };
  }
  if ((m = /^how much (.+?) (?:have|did) (?:i|we) (?:harvested?|picked|collected|gathered|threshed)\b\s*(.*)$/.exec(t))) return { action: "sum-harvest", crop: cropFrom(m[1]), period: extractPeriod(m[2], today) || extractPeriod("this year", today) };
  if ((m = /^(?:what(?:'s| is| was)|show|tell me) (?:my |the |our )?(?:total )?(?:harvest|yield)s?\b\s*(.*)$/.exec(t))) return { action: "sum-harvest", crop: "", period: extractPeriod(m[1], today) || extractPeriod("this year", today) };
  if (/^(?:show|read|what(?:'s| is| are)) (?:me )?(?:my |the )?(?:farm log|recent readings|what i(?:'ve| have) logged)$/.test(t) || /^what have i logged$/.test(t)) return { action: "show" };
  if (/^(?:undo|delete|remove)(?: my)? (?:last|latest) (?:farm |log )?(?:entry|reading|record)$/.test(t) || /^undo that (?:reading|entry)$/.test(t)) return { action: "undo" };
  if (/^(?:what|which) (?:farm )?alerts (?:do i have|have i set|are set)$/.test(t) || /^(?:show|list) my (?:farm )?alerts$/.test(t)) return { action: "alert-list" };
  return null;
}

// ---- saying it back ----

const fmt = value => String(round(value));
const describeReading = entry => {
  const where = entry.place ? ` (${entry.place})` : "";
  if (entry.metric === "rain") return `${fmt(entry.value)} mm of rain`;
  if (entry.metric === "soil") return `soil moisture ${fmt(entry.value)}%${where}`;
  if (entry.metric === "tank") return `${entry.place ? `${entry.place} ` : ""}tank at ${fmt(entry.value)}${entry.unit === "%" ? "%" : " litres"}`;
  return `${fmt(entry.value)}${entry.unit === "egg" ? " eggs" : entry.unit === "kg" ? " kg" : entry.unit === "litres" ? " litres" : ` ${entry.unit}${entry.value === 1 ? "" : "s"}`}${entry.crop === "eggs" ? "" : ` of ${entry.crop}`}${entry.place ? ` from ${entry.place}` : ""}`;
};
function whenWords(day, today) {
  if (day === today) return "today";
  if (day === addDays(today, -1)) return "yesterday";
  return describeDay(day, today);
}
function totalWords(sums) {
  return Object.entries(sums).map(([unit, value]) => `${fmt(value)}${unit === "kg" ? " kg" : unit === "egg" ? " eggs" : unit === "litres" ? " litres" : ` ${unit}${value === 1 ? "" : "s"}`}`).join(" and ");
}
const inPeriod = (entry, period) => entry.day >= period.from && entry.day <= period.to;
const samePlace = (entry, place) => !place || entry.place === place;

function belowAlert(entry, alerts) {
  if (entry.metric !== "soil" && entry.metric !== "tank") return null;
  return alerts.find(alert => alert.metric === entry.metric && alert.unit === entry.unit && (!alert.place || alert.place === entry.place) && entry.value < alert.below) || null;
}

// The most recent reading of a kind (by the day it is about, then by when it was logged: rows arrive newest first).
function latestReading(readings, metric, place) {
  let best = null;
  for (const row of readings) if (row.content.metric === metric && samePlace(row.content, place) && (!best || row.content.day > best.content.day)) best = row;
  return best;
}

const REFUSALS = {
  future: "That day is still ahead, and I only log what has already happened. Tell me the day it really was.",
  rain: "That is more rain than falls in a day, so I have not saved it. Say it again in millimetres, like \"12 mm of rain\".",
  percent: "A percentage has to be between 0 and 100, so I have not saved that.",
  litres: "That is more water than a tank holds, so I have not saved it.",
  amount: "That amount does not look right, so I have not saved it. Say it again with the number and the unit."
};

// Returns the words to answer with, or null when this is not about the farm log. `memory` needs addFarmEntry / listFarmEntries / removeFarmEntry.
async function farmLogTurn({ text, memory, tenantId, userId, now = new Date(), timeZone }) {
  if (!memory?.addFarmEntry || !memory?.listFarmEntries || !memory?.removeFarmEntry) return null;
  const zone = validTimeZone(timeZone || DEFAULT_TIME_ZONE);
  const today = localDay(now, zone);
  const request = readRequest(text, today);
  if (!request) return null;
  const scope = { tenantId, userId };
  try {
    if (request.action === "refuse") return REFUSALS[request.reason] || REFUSALS.amount;
    const rows = await memory.listFarmEntries(scope);
    const readings = rows.filter(row => row.content.kind === "reading");
    const alerts = rows.filter(row => row.content.kind === "alert").map(row => row.content);
    switch (request.action) {
      case "log": {
        if (rows.length >= MAX_ENTRIES) return "Your farm log is full. Tell me to undo the last entry, or ask me for a summary first.";
        const entry = { kind: "reading", metric: request.metric, value: request.value, unit: request.unit, place: request.place, crop: request.crop, day: request.day };
        await memory.addFarmEntry({ ...scope, content: entry });
        const when = whenWords(entry.day, today);
        let line = `Logged ${describeReading(entry)} for ${when}.`;
        if (entry.metric === "rain") {
          const month = extractPeriod("this month", today);
          const same = [...readings.map(row => row.content), entry].filter(item => item.metric === "rain" && inPeriod(item, month));
          line += ` Rain this month: ${fmt(same.reduce((sum, item) => sum + item.value, 0))} mm over ${new Set(same.map(item => item.day)).size} ${new Set(same.map(item => item.day)).size === 1 ? "day" : "days"}.`;
        } else if (entry.metric === "harvest") {
          const year = extractPeriod("this year", today);
          const total = [...readings.map(row => row.content), entry].filter(item => item.metric === "harvest" && item.crop === entry.crop && item.unit === entry.unit && inPeriod(item, year)).reduce((sum, item) => sum + item.value, 0);
          line += ` Total ${entry.crop} this year: ${totalWords({ [entry.unit]: total })}.`;
        }
        const hit = belowAlert(entry, alerts);
        if (hit) line += ` Heads up: that is below your ${fmt(hit.below)}${hit.unit === "%" ? "%" : " litres"} alert${hit.place ? ` for the ${hit.place}` : ""}.`;
        return line;
      }
      case "sum-rain": {
        const list = readings.map(row => row.content).filter(item => item.metric === "rain" && inPeriod(item, request.period));
        if (!list.length) return `I have no rain logged for ${request.period.label}. Say "log 12 mm of rain" after it rains.`;
        const days = new Set(list.map(item => item.day)).size;
        return `Rain ${request.period.label}: ${fmt(list.reduce((sum, item) => sum + item.value, 0))} mm over ${days} ${days === 1 ? "day" : "days"}.`;
      }
      case "latest": {
        const found = latestReading(readings, request.metric, request.place);
        const label = request.metric === "soil" ? "soil moisture" : "tank level";
        if (!found) return `I have no ${label} logged${request.place ? ` for the ${request.place}` : ""}. Say "the tank is at 40 percent" to log one.`;
        const entry = found.content;
        return `${request.metric === "soil" ? "Soil moisture" : `${entry.place ? `The ${entry.place} tank` : "The tank"}`} ${request.metric === "soil" ? `was ${fmt(entry.value)}%${entry.place ? ` (${entry.place})` : ""}` : `was at ${fmt(entry.value)}${entry.unit === "%" ? "%" : " litres"}`} when last logged, ${whenWords(entry.day, today)}.`;
      }
      case "sum-harvest": {
        const list = readings.map(row => row.content).filter(item => item.metric === "harvest" && inPeriod(item, request.period) && (!request.crop || item.crop === request.crop || item.crop === `${request.crop}s` || `${item.crop}s` === request.crop));
        if (!list.length) return `I have no ${request.crop ? `${request.crop} ` : ""}harvest logged for ${request.period.label}.`;
        const byCrop = {};
        for (const item of list) { byCrop[item.crop] = byCrop[item.crop] || {}; byCrop[item.crop][item.unit] = (byCrop[item.crop][item.unit] || 0) + item.value; }
        return `Harvest ${request.period.label}: ${Object.entries(byCrop).map(([crop, sums]) => (crop === "eggs" ? totalWords(sums) : `${crop} ${totalWords(sums)}`)).join("; ")}.`;
      }
      case "show": {
        if (!readings.length) return 'Your farm log is empty. Say "log 12 mm of rain" or "the tank is at 40 percent".';
        const recent = [...readings].sort((a, b) => b.content.day.localeCompare(a.content.day)).slice(0, 6).map(row => `${whenWords(row.content.day, today)}: ${describeReading(row.content)}`);
        return `Your latest entries: ${recent.join("; ")}.`;
      }
      case "undo": {
        const last = readings[0];
        if (!last) return "There is nothing in your farm log to undo.";
        await memory.removeFarmEntry({ ...scope, memoryId: last.memory_id });
        return `Removed your last entry: ${describeReading(last.content)} for ${whenWords(last.content.day, today)}.`;
      }
      case "alert-set": {
        const existing = rows.find(row => row.content.kind === "alert" && row.content.metric === request.metric && row.content.place === request.place);
        if (existing) await memory.removeFarmEntry({ ...scope, memoryId: existing.memory_id });
        await memory.addFarmEntry({ ...scope, content: { kind: "alert", metric: request.metric, below: request.below, unit: request.unit, place: request.place } });
        const what = request.metric === "soil" ? `soil moisture${request.place ? ` in the ${request.place}` : ""}` : `${request.place ? `the ${request.place} tank` : "the tank"}`;
        return `${existing ? "Updated. " : ""}I'll warn you when you log ${what} below ${fmt(request.below)}${request.unit === "%" ? "%" : " litres"}. Say "stop warning me about ${request.metric === "soil" ? "soil moisture" : "the tank"}" to remove it.`;
      }
      case "alert-stop": {
        const found = rows.filter(row => row.content.kind === "alert" && row.content.metric === request.metric && (!request.place || row.content.place === request.place));
        for (const row of found) await memory.removeFarmEntry({ ...scope, memoryId: row.memory_id });
        return found.length ? `Done. No more warnings about ${request.metric === "soil" ? "soil moisture" : "the tank"}.` : `You have no ${request.metric === "soil" ? "soil moisture" : "tank"} alert set.`;
      }
      case "alert-list": {
        if (!alerts.length) return 'You have no farm alerts. Say "warn me if the tank drops below 20 percent".';
        return `Your farm alerts: ${alerts.map(alert => `${alert.metric === "soil" ? "soil moisture" : "tank"}${alert.place ? ` (${alert.place})` : ""} below ${fmt(alert.below)}${alert.unit === "%" ? "%" : " litres"}`).join("; ")}.`;
      }
      default: return null;
    }
  } catch { return null; }
}

// For the morning brief: tank or soil readings the person logged in the last three days that sit below their own alert level, and the rain
// they logged over the last seven days. "" when there is nothing worth saying. Only what the person logged is ever repeated.
function farmDigest(rows, today) {
  const entries = (rows || []).map(row => row?.content).filter(Boolean);
  const alerts = entries.filter(item => item.kind === "alert");
  const readings = entries.filter(item => item.kind === "reading");
  const parts = [];
  const seen = new Set();
  for (const item of readings) { // newest logged first
    if ((item.metric !== "soil" && item.metric !== "tank") || item.day < addDays(today, -3) || item.day > today) continue;
    const key = `${item.metric}|${item.place}`;
    if (seen.has(key)) continue; seen.add(key);
    const hit = belowAlert(item, alerts);
    if (hit) parts.push(`Heads up: ${item.metric === "soil" ? "soil moisture" : "the tank"}${item.place ? ` (${item.place})` : ""} was last logged at ${fmt(item.value)}${item.unit === "%" ? "%" : " litres"}, below your ${fmt(hit.below)}${hit.unit === "%" ? "%" : " litres"} alert.`);
  }
  const rain = readings.filter(item => item.metric === "rain" && item.day >= addDays(today, -6) && item.day <= today).reduce((sum, item) => sum + item.value, 0);
  if (rain > 0) parts.push(`Rain you logged in the last 7 days: ${fmt(rain)} mm.`);
  return parts.slice(0, 3).join(" ");
}

module.exports = Object.freeze({ farmLogTurn, readRequest, farmDigest, MAX_ENTRIES });
