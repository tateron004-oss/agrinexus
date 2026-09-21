"use strict";

const { extractDay } = require("../personal/dates.js");

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
function parseQuantity(text) {
  const m = new RegExp(`(\\d[\\d,]*(?:\\.\\d+)?)\\s*(${UNIT_WORDS})\\b`, "i").exec(clean(text));
  if (!m) return null;
  const entry = UNIT_TABLE.find(([pattern]) => pattern.test(m[2].toLowerCase()));
  if (!entry) return null;
  const value = round(num(m[1]) * entry[2], 3);
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
  const shown = Number(amount).toLocaleString("en", { maximumFractionDigits: 2 });
  if (!currency) return shown;
  if (currency === "shillings") return `${shown} shillings`;
  return /^[$€£₦]$/.test(currency) ? `${currency}${shown}` : `${currency} ${shown}`;
}

// "at 45 per kg", "@ KSh 45/kg", "for 40 a kg" -> { amount, currency, per: "kg" }
function parsePricePer(text) {
  const m = new RegExp(`(?:at|@|for|costing|price)\\s*(?:of )?(?:(${CURRENCY_WORD}|[$€£₦])\\s*)?${AMOUNT}\\s*(${CURRENCY_WORD})?\\s*(?:per|a|each|/|the)\\s*(${UNIT_WORDS})\\b`, "i").exec(clean(text));
  if (!m) return null;
  const entry = UNIT_TABLE.find(([pattern]) => pattern.test(m[4].toLowerCase()));
  return { amount: round(num(m[2])), currency: currencyOf(m[1] || m[3]), per: entry ? entry[1] : m[4].toLowerCase() };
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

module.exports = Object.freeze({ clean, num, round, titleCase, parseQuantity, isCountUnit, unitLabel, parseMoney, formatMoney, parsePricePer, anyDay, pastDay, plural, CANCEL_WORDS, looksLikeQuestion, UNIT_WORDS, CURRENCY_WORD });
