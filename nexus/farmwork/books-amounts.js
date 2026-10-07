"use strict";

const { clean, num, round, parseMoney, parseQuantity, parseCount } = require("./parse.js");

// Reading how people REALLY say what a sale or a cost was ("sold maize 4500", "sold eggs 15 trays at 450", "sold 1 goat 12000 cash"). Pure functions, no store: books.js decides what to do with them.
// The rule that runs through all of it: an amount that could be read two ways is never guessed. "4.500" (4500 or 4.5?) and "4 5 0 0" (four, five, zero, zero) come back as `unsure`, and the caller asks
// "Did you mean 4500?" instead of recording something that may be a thousand times wrong.

const CUR_L = "(?:ksh|kshs|kes|tsh|tshs|tzs|ugx|etb|ngn|ghs|zar|zmw|rwf|usd|shs?|[$€£₦])";
const CUR_T = "(?:shillings?|ksh|kshs|kes|tsh|ugx|usd|dollars?|bob|bobs|birr|naira|cedis?)";
// One money token: "4500", "4,500", "2k", "2.5k", "KSh 4,500", "$20", "4500 shillings", "9000 ksh".
const MONEY_TOKEN = `(?:${CUR_L}\\.?\\s?)?\\d[\\d,]*(?:\\.\\d+)?(?:\\s?k(?![a-z0-9]))?(?:\\s?${CUR_T}(?![a-z]))?`;
const PAYMENT_WORDS = "cash|m-?pesa|mpesa|airtel(?: money)?|till|bank(?: transfer)?|card|cheque|check|momo|mtn momo|equity|tigo ?pesa|opay|paystack|transfer";
const PAYMENT_TAIL = new RegExp(`\\s+(?:(?:by|via|in|on|through|using|with|thru|paid by|paid in|paid with)\\s+)?(${PAYMENT_WORDS})$`, "i");
const PREPOSITION_END = /\b(?:for|at|@|of|to|from|on|per|is|was|price|worth|cost|costs|about|around|a|the|my|some|each)$/i;

// "mpesa", "m-pesa", "M Pesa" -> "mpesa"; everything else is lowercased as said.
function paymentLabel(word) {
  const w = clean(word).toLowerCase().replace(/\s+/g, " ");
  if (/^m-?\s?pesa$/.test(w)) return "mpesa";
  if (/^tigo\s?pesa$/.test(w)) return "tigo pesa";
  if (/^mtn momo$/.test(w)) return "momo";
  return w;
}

// Takes "maize 4500 cash" apart into { head: "maize", token: "4500", payment: "cash" }, or null when the text does not END in an amount.
function splitTrailingMoney(text) {
  let rest = clean(text); let payment = "";
  const tail = PAYMENT_TAIL.exec(rest);
  if (tail) { payment = paymentLabel(tail[1]); rest = rest.slice(0, tail.index); }
  const m = new RegExp(`^(.*?\\S)\\s+(${MONEY_TOKEN})$`, "i").exec(rest); // the shortest head, so "ksh 4500" is kept together
  if (!m) return null;
  let head = clean(m[1]); let token = clean(m[2]);
  if (!head || PREPOSITION_END.test(head)) return null;
  // "sold maize 1 000" / "4 500": the thousands were said apart. Joined, and flagged so the caller asks; a number followed by a stray number is never a price.
  if (/\d$/.test(head)) {
    const spaced = /^(.*\S)\s+(\d{1,3})$/.exec(head);
    if (!spaced || !/^\d{3}$/.test(token) || PREPOSITION_END.test(clean(spaced[1]))) return null;
    head = clean(spaced[1]); const said = `${spaced[2]} ${token}`; token = `${spaced[2]}${token}`;
    return { head, token, payment, spaced: true, said };
  }
  return { head, token, payment };
}

// "2k" -> 2000, "2.5k" -> 2500, commas dropped. Returns { amount, currency, text, unsure } or null.
//  - text is the amount as the bookkeeping grammar reads it ("KSh 4500", "$20", "4500 shillings", "4500"),
//  - unsure is the number it MIGHT have meant, when "4.500" could be 4500 (thousands written with a dot) or 4.5.
function readToken(token) {
  const raw = clean(token);
  const m = new RegExp(`^(?:(${CUR_L})\\.?\\s?)?(\\d[\\d,]*(?:\\.\\d+)?)(\\s?k(?![a-z0-9]))?(?:\\s?(${CUR_T}))?$`, "i").exec(raw);
  if (!m) return null;
  const lead = m[1]; const digits = m[2]; const kilo = Boolean(m[3]); const tail = m[4];
  let amount = num(digits);
  if (!Number.isFinite(amount)) return null;
  let unsure = null;
  // "4.500" / "12.000": a dot followed by exactly three digits is a thousands separator in much of the world and a decimal in English. Not guessed.
  if (!kilo && !digits.includes(",") && /^\d{1,3}\.\d{3}$/.test(digits)) unsure = Number(digits.replace(".", ""));
  // "4,5" / "12,50": a comma with one or two digits after it is a decimal comma or a typo. Not guessed either.
  if (!kilo && /^\d+,\d{1,2}$/.test(digits)) unsure = Number(digits.replace(",", "."));
  if (kilo) amount = round(amount * 1000);
  const shown = String(round(amount, 2));
  const text = lead ? (/^[$€£₦]$/.test(lead) ? `${lead}${shown}` : `${lead} ${shown}`) : tail ? `${shown} ${tail}` : shown;
  // "dollars" is "$", "naira" is "₦", "ksh" is "KSh": the same names the rest of the toolkit stores
  const currency = lead || tail ? (parseMoney(text)?.currency || "") : "";
  return { amount, currency, text, unsure };
}

// Single digits said one after the other ("four five zero zero" reaches here as "4 5 0 0"). Could be 4500, could be four separate things: the caller asks.
function spokenDigits(text) {
  const m = /(?<![\d.,])(\d)((?: \d){2,})(?![\d.,]|\s?[a-z%])/i.exec(clean(text));
  return m ? Number(`${m[1]}${m[2].replace(/ /g, "")}`) : null;
}

// What an amount that is not certain should be called back as: "4500", or "4,500".
const sayAmount = value => Number(value).toLocaleString("en", { maximumFractionDigits: 2 });

// The weights and measures where "at 80" does not say whether 80 is for each kilo or for the lot.
const MEASURED = new Set(["kg", "L"]);

// "15 trays of eggs" from "eggs 15 trays" (the grammar reads the quantity first). Returns { phrase, quantity } or { phrase: text, quantity: null }.
function quantityFirst(text) {
  const t = clean(text); const quantity = parseQuantity(t);
  if (!quantity) return { phrase: t, quantity: null, count: parseCount(t) };
  const item = clean(`${t.slice(0, quantity.index)} ${t.slice(quantity.index + quantity.matched.length)}`).replace(/^(?:of|some|my|the)\s+/i, "").replace(/\s+(?:of)$/i, "");
  return { phrase: item ? `${quantity.matched} of ${item}` : quantity.matched, quantity, item, count: null };
}

module.exports = Object.freeze({ MONEY_TOKEN, CUR_L, CUR_T, PAYMENT_WORDS, paymentLabel, splitTrailingMoney, readToken, spokenDigits, sayAmount, quantityFirst, MEASURED, parseMoney });
