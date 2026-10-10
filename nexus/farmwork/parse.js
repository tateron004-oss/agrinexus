"use strict";

const { extractDay, addDays, weekdayOf } = require("../personal/dates.js");

// Reading the everyday words farmers use for amounts, money, sizes and days. Everything is conservative: when a number cannot be read as
// what it should be, the caller gets null and asks, rather than guessing.
const clean = value => String(value ?? "").replace(/[’]/g, "'").replace(/\s+/g, " ").trim();
const num = raw => Number(String(raw).replace(/,/g, ""));
const round = (value, places = 2) => Number(Number(value).toFixed(places));
const titleCase = value => clean(value).split(" ").map(word => (word ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() : word)).join(" ");

const UNIT_WORDS = "kgs?|kilos?|kilograms?|tonnes?|tons?|grams?|g|litres?|liters?|l|ml|bags?|sacks?|crates?|bunch(?:es)?|pieces?|pcs|packets?|bottles?|tins?|heads?|acres?|ha|hectares?|doses?|trays?|buckets?|cartons?";
const UNIT_TABLE = [[/^(?:kgs?|kilos?|kilograms?)$/, "kg", 1], [/^(?:tonnes?|tons?)$/, "kg", 1000], [/^(?:grams?|g)$/, "kg", 0.001], [/^(?:litres?|liters?|l)$/, "L", 1], [/^ml$/, "L", 0.001],
  [/^bags?$/, "bag", 1], [/^sacks?$/, "sack", 1], [/^crates?$/, "crate", 1], [/^bunch(?:es)?$/, "bunch", 1], [/^(?:pieces?|pcs)$/, "piece", 1], [/^packets?$/, "packet", 1],
  [/^bottles?$/, "bottle", 1], [/^tins?$/, "tin", 1], [/^heads?$/, "head", 1], [/^acres?$/, "acre", 1], [/^(?:ha|hectares?)$/, "ha", 1], [/^doses?$/, "dose", 1], [/^trays?$/, "tray", 1], [/^buckets?$/, "bucket", 1], [/^cartons?$/, "carton", 1]];

// "50 kg", "2 tonnes", "3 bags" -> { value: 50, unit: "kg" } (weights and volumes are stored in kg and litres). null when no amount is found.
// The number in front of a unit, as people say it: "50", "2.5", "1/2", "1 1/2", "2 and a half", "half an acre", "a quarter acre". Found by the audit: "1/2 acre" was read as 2 acres (the "1/" was
// dropped) and "half an acre" was not read at all, so a field was saved four times too big.
const NUMBER_FORMS = "\\d+\\s+\\d+\\/\\d+|\\d+\\/\\d+|\\d[\\d,]*(?:\\.\\d+)?(?:\\s+and a half)?|half an?|half|a quarter of an?|a quarter|quarter";
function amountValue(raw) {
  const text = String(raw).trim().toLowerCase();
  let m;
  if ((m = /^(\d+)\s+(\d+)\/(\d+)$/.exec(text))) return Number(m[3]) > 0 ? Number(m[1]) + Number(m[2]) / Number(m[3]) : NaN;
  if ((m = /^(\d+)\/(\d+)$/.exec(text))) return Number(m[2]) > 0 ? Number(m[1]) / Number(m[2]) : NaN;
  if (/^half/.test(text)) return 0.5;
  if (/quarter/.test(text)) return 0.25;
  if ((m = /^(.+?)\s+and a half$/.exec(text))) return num(m[1]) + 0.5;
  return num(text);
}
function parseQuantity(text) {
  const m = new RegExp(`(${NUMBER_FORMS})\\s*(${UNIT_WORDS})\\b`, "i").exec(clean(text));
  if (!m) return null;
  const entry = UNIT_TABLE.find(([pattern]) => pattern.test(m[2].toLowerCase()));
  if (!entry) return null;
  const value = round(amountValue(m[1]) * entry[2], 3);
  return Number.isFinite(value) && value > 0 ? { value, unit: entry[1], index: m.index, matched: m[0] } : null;
}
const isCountUnit = unit => !["kg", "L", "acre", "ha"].includes(unit);
function unitLabel(value, unit) {
  if (unit === "kg" || unit === "L") return `${value} ${unit}`;
  if (unit === "acre") return `${value} ${value === 1 ? "acre" : "acres"}`;
  if (unit === "ha") return `${value} ${value === 1 ? "hectare" : "hectares"}`;
  if (unit === "bunch") return `${value} ${value === 1 ? "bunch" : "bunches"}`;
  return `${value} ${unit}${value === 1 ? "" : "s"}`;
}

const CURRENCIES = [[/^(?:ksh|kshs|kes)$/i, "KSh"], [/^(?:tsh|tshs|tzs)$/i, "TSh"], [/^ugx$/i, "UGX"], [/^(?:etb|birr)$/i, "ETB"], [/^(?:ngn|naira)$/i, "₦"], [/^(?:ghs|cedis?)$/i, "GHS"], [/^zar$/i, "ZAR"], [/^zmw$/i, "ZMW"], [/^rwf$/i, "RWF"], [/^(?:usd|dollars?)$/i, "$"], [/^shillings?$/i, "shillings"]];
const CURRENCY_WORD = "ksh|kshs|kes|tsh|tshs|tzs|ugx|etb|birr|ngn|naira|ghs|cedis?|zar|zmw|rwf|usd|dollars?|shillings?";
const currencyOf = token => { const t = String(token || "").trim(); if (t === "$") return "$"; if (t === "₦") return "₦"; if (t === "€") return "€"; if (t === "£") return "£"; const hit = CURRENCIES.find(([pattern]) => pattern.test(t)); return hit ? hit[1] : ""; };
const AMOUNT = "(\\d[\\d,]*(?:\\.\\d+)?)";
const COUNT_NOUNS = "workers?|people|persons?|men|women|days?|hours?|weeks?|months?|years?|animals?|cows?|goats?|sheep|chickens?|hens?|pigs?|fields?|plots?|times?|trips?";
// The number must end where it ends (no backtracking into "20" of "200"), and must not be a quantity ("200 kg") or a count ("3 workers").
const NOT_A_UNIT = `(?![\\d,.]*\\d)(?!\\s*(?:${UNIT_WORDS}|${COUNT_NOUNS})\\b)`;

// "5000", "KSh 5,000", "$20", "9000 shillings", "for 9000", "paid 2000" -> { amount, currency }. A bare number counts only after words such as
// for / at / paid / cost / spent, and never when it is followed by a unit ("200 kg" is a quantity, not money).
function parseMoney(text) {
  const t = clean(text);
  let m = new RegExp(`(?:^|[^a-z])(${CURRENCY_WORD}|[$€£₦])\\s*${AMOUNT}`, "i").exec(t);
  if (m) return { amount: round(num(m[2])), currency: currencyOf(m[1]) };
  m = new RegExp(`${AMOUNT}\\s*(${CURRENCY_WORD})\\b`, "i").exec(t);
  if (m) return { amount: round(num(m[1])), currency: currencyOf(m[2]) };
  m = new RegExp(`\\b(?:for|at|@|paid|pay|cost|costs|costing|spent|worth|price of|total of|of)\\s+(?:about |around )?${AMOUNT}${NOT_A_UNIT}(?![\\d,.]*\\s*(?:%|percent))`, "i").exec(t);
  if (m) return { amount: round(num(m[1])), currency: "" };
  m = new RegExp(`\\b(?:paid|gave|pay)\\s+(?:[a-z']+\\s+){1,3}?${AMOUNT}${NOT_A_UNIT}`, "i").exec(t); // "paid Otieno 2000 for labor"
  if (m) return { amount: round(num(m[1])), currency: "" };
  return null;
}
function formatMoney(amount, currency = "") {
  // Dollars, pounds and euros are written with their cents when there are any: "$230.50", not "$230.5"
  const withCents = /^[$€£]$/.test(currency) && !Number.isInteger(Number(amount));
  const shown = Number(amount).toLocaleString("en", { minimumFractionDigits: withCents ? 2 : 0, maximumFractionDigits: 2 });
  if (!currency) return shown;
  if (currency === "shillings") return `${shown} shillings`;
  return /^[$€£₦]$/.test(currency) ? `${currency}${shown}` : `${currency} ${shown}`;
}

// "at 45 per kg", "@ KSh 45/kg", "for 40 a kg" -> { amount, currency, per: "kg", spokenAmount }
// Weights and volumes are stored in kg and litres, so a price must be stated in the same unit: "40000 per tonne" is 40 per kg (a tonne is 1000 kg),
// "2 per gram" is 2000 per kg. Found live: the unit was converted but the price was not, so 40000 per tonne was stored as 40000 per kg and every
// total built on it (the board, orders, sales) came out 1000 times too big. `spokenAmount` is the number as it was actually said, which callers use
// to tell "the money number is just the per-unit price echoed back" apart from a separately stated total.
function parsePricePer(text) {
  const m = new RegExp(`(?:at|@|for|costing|price)\\s*(?:of )?(?:(${CURRENCY_WORD}|[$€£₦])\\s*)?${AMOUNT}\\s*(${CURRENCY_WORD})?\\s*(?:per|a|each|/|the)\\s*(${UNIT_WORDS})\\b`, "i").exec(clean(text));
  if (!m) return null;
  const entry = UNIT_TABLE.find(([pattern]) => pattern.test(m[4].toLowerCase()));
  const spokenAmount = round(num(m[2]));
  const factor = entry ? entry[2] : 1;
  return { amount: factor === 1 ? spokenAmount : round(num(m[2]) / factor, 4), currency: currencyOf(m[1] || m[3]), per: entry ? entry[1] : m[4].toLowerCase(), spokenAmount };
}

// "at 3000 each", "for 600 apiece", "@ KSh 45 per piece" -> { amount, currency, spokenAmount }: a price for ONE of something. Found by the audit: "sold 10 bags at 3000 each" saved 3000 as the
// whole sale, because only "per kg" style prices were understood.
function parseEachPrice(text) {
  const m = new RegExp(`(?:at|@|for|costing|,)\\s*(?:of )?(?:(${CURRENCY_WORD}|[$€£₦])\\s*)?${AMOUNT}\\s*(${CURRENCY_WORD})?\\s*(?:each|apiece|a piece|per piece|per item|per one|a head|per head)\\b`, "i").exec(clean(text));
  if (!m) return null;
  const spokenAmount = round(num(m[2]));
  return { amount: spokenAmount, currency: currencyOf(m[1] || m[3]), spokenAmount };
}
// "5 chickens at 600 each" -> { value: 5, item: "chickens" }: a count of something that is not a weight or a measure. Only used together with an each-price.
function parseCount(text) {
  const m = new RegExp(`^(?:some |about |around )?(\\d[\\d,]*(?:\\.\\d+)?)\\s+(?:of )?(?!(?:${UNIT_WORDS})\\b)([a-z][a-z' -]{1,40}?)(?=\\s+(?:at|@|for|to|from|each|on)\\b|\\s*,|\\s*$)`, "i").exec(clean(text));
  const value = m ? num(m[1]) : NaN;
  return m && Number.isFinite(value) && value > 0 ? { value, item: clean(m[2]).toLowerCase() } : null;
}

const WEEKDAY_NAMES = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
const NUMBER_WORD_DAYS = { a: 1, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7 };
const MONTH_WORD = "(?:jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*";
// When something HAPPENED, as the person said it: "yesterday", "the day before yesterday", "3 days ago", "last Friday", "on Friday" (the most recent one), "on 10 July". Returns { day, text }
// (text = the sentence without those words), { future: true } for a day still ahead ("tomorrow", "next Friday"), or null when no day is named. Found by the audit: every sale and purchase
// was dated today, whatever day the person named.
function whenOf(text, today) {
  const source = clean(text); const t = source.toLowerCase();
  const cut = match => clean(`${source.slice(0, match.index)} ${source.slice(match.index + match[0].length)}`);
  let m;
  if (/\b(?:tomorrow|next (?:week|month|monday|tuesday|wednesday|thursday|friday|saturday|sunday)|in \d+ (?:days?|weeks?|months?))\b/.test(t)) return { future: true };
  if ((m = /\b(?:the )?day before yesterday\b/.exec(t))) return { day: addDays(today, -2), text: cut(m) };
  if ((m = /\b(?:on )?yesterday\b/.exec(t))) return { day: addDays(today, -1), text: cut(m) };
  if ((m = /\b(\d{1,2}|a|one|two|three|four|five|six|seven) days? ago\b/.exec(t))) {
    const n = /^\d/.test(m[1]) ? Number(m[1]) : NUMBER_WORD_DAYS[m[1]];
    if (n >= 1 && n <= 366) return { day: addDays(today, -n), text: cut(m) };
  }
  if ((m = new RegExp(`\\b(last|on)\\s+(${WEEKDAY_NAMES.join("|")})\\b`).exec(t))) {
    const back = (weekdayOf(today) - WEEKDAY_NAMES.indexOf(m[2]) + 7) % 7;
    return { day: addDays(today, -(back === 0 && m[1] === "last" ? 7 : back)), text: cut(m) };
  }
  const dated = new RegExp(`\\b\\d{1,2}(?:st|nd|rd|th)?(?:\\s+of)?\\s+${MONTH_WORD}\\b|\\b${MONTH_WORD}\\s+\\d{1,2}(?:st|nd|rd|th)?\\b|\\b\\d{4}-\\d{2}-\\d{2}\\b`).exec(t);
  if (dated) {
    const day = pastDay(dated[0], today); // only the date words: an amount like "2000" must not be mistaken for a year
    if (day && day > today) return { future: true };
    if (day) return { day, text: clean(`${source.slice(0, dated.index)} ${source.slice(dated.index + dated[0].length)}`).replace(/\b(?:on|since)\s*$/i, "").trim() };
  }
  return null;
}

// The first day named in the text (future or past words alike), or null.
const anyDay = (text, today) => extractDay(clean(text).toLowerCase(), today)?.day || null;
// For something that already happened: a day named without a year ("1 September") is the most recent one, not next year's. A day that is
// really still ahead (tomorrow, next Friday, a dated year) stays in the future so the caller can refuse it.
function pastDay(text, today) {
  const d = anyDay(text, today);
  if (!d || d <= today || /\b\d{4}\b/.test(text) || /\b(?:tomorrow|next|in \d+)\b/i.test(text)) return d;
  const previous = `${Number(d.slice(0, 4)) - 1}${d.slice(4)}`;
  return previous <= today ? previous : d;
}

const plural = (count, one, many = `${one}s`) => `${count} ${count === 1 ? one : many}`;
const CANCEL_WORDS = /^(?:cancel|stop|never ?mind|forget it|quit|no thanks|leave it|abort)$/i;
const looksLikeQuestion = text => /\?\s*$/.test(clean(text)) || /^(?:what|how|who|when|where|why|show|tell|list|give|can you|could you)\b/i.test(clean(text));

module.exports = Object.freeze({ clean, num, round, titleCase, parseQuantity, isCountUnit, unitLabel, parseMoney, formatMoney, parsePricePer, parseEachPrice, parseCount, whenOf, amountValue, anyDay, pastDay, plural, CANCEL_WORDS, looksLikeQuestion, UNIT_WORDS, CURRENCY_WORD });
