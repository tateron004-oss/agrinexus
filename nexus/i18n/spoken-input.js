"use strict";

// What a person SAYS reaches Kyro as a transcript, and a transcript is not typed text:
//  * a short reply ends with a full stop ("Yes.", "Skip.", "Cancel.") that no typed-text matcher expects, so a plain "yes" never matched "Yes." and a
//    "skip" on an optional question was saved AS THE ANSWER ("Skip.");
//  * amounts come out as words ("forty kilos", "two hundred kg", "three thousand") that every matcher written for digits ignores, so the whole
//    sentence was dropped and the farmer got a generic answer instead of a saved record.
// normalizeSpokenText() fixes both before a toolkit reads the sentence. It is deliberately conservative: it keeps a question mark (questions are
// recognised by it), never touches a lone "one" ("one of my cows", "no one") unless a unit follows, and leaves everything else alone.

const UNITS = { zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15, sixteen: 16, seventeen: 17, eighteen: 18, nineteen: 19 };
const TENS = { twenty: 20, thirty: 30, forty: 40, fourty: 40, fifty: 50, sixty: 60, seventy: 70, eighty: 80, ninety: 90 };
const SCALES = { hundred: 100, thousand: 1000, million: 1000000 };
// A lone "one" is only a number when a measure or money word follows it.
const MEASURE = /^(?:kgs?|kilos?|kilograms?|grams?|tonnes?|tons?|litres?|liters?|ml|bags?|sacks?|crates?|bunch(?:es)?|pieces?|packets?|bottles?|tins?|heads?|acres?|ha|hectares?|doses?|trays?|buckets?|cartons?|hours?|percent|mm|cm|millimet(?:er|re)s?|centimet(?:er|re)s?|inch(?:es)?|shillings?|ksh|kes|dollars?|cows?|goats?|sheep|chickens?|hens?|pigs?|workers?|people)$/i;

const kindOf = word => {
  if (word === "zero") return "zero";
  if (word in UNITS) return UNITS[word] >= 10 ? "teen" : "unit";
  if (word in TENS) return "tens";
  if (word === "hundred") return "hundred";
  if (word === "thousand" || word === "million") return "scale";
  return null;
};
const isNumberWord = word => kindOf(word) !== null;

// Tokens: words (letters, with hyphens) and the separators between them.
function tokenize(text) {
  const tokens = [];
  const pattern = /([A-Za-z]+(?:-[A-Za-z]+)*)|([^A-Za-z]+)/g;
  let match;
  while ((match = pattern.exec(text))) tokens.push(match[1] ? { word: true, text: match[1] } : { word: false, text: match[2] });
  return tokens;
}
// "forty-five" is two number words joined by a hyphen.
const parts = token => token.text.toLowerCase().split("-");
const isJoiner = token => !token.word && /^[\s-]+$/.test(token.text);

// Reads the longest valid run of number words starting at token index `start`. Returns { value, end } (end = index after the run) or null.
function readRun(tokens, start, allowBareScale = false) {
  let total = 0; let current = 0; let previous = "start"; let consumedAny = false; let end = start; let sawAnd = false;
  let i = start;
  const accept = (kind, apply) => { apply(); previous = kind; consumedAny = true; };
  while (i < tokens.length) {
    const token = tokens[i];
    if (!token.word) break;
    const words = parts(token);
    let okToken = true; let consumedWords = 0;
    for (const word of words) {
      const kind = kindOf(word);
      if (word === "a" && previous === "start" && consumedWords === 0 && words.length === 1) {
        // "a hundred" / "a thousand": handled below by looking ahead
        okToken = false; break;
      }
      if (kind === "zero") { if (previous !== "start") { okToken = false; break; } accept("zero", () => { current = 0; }); }
      else if (kind === "unit") { if (!["start", "hundred", "scale", "and", "tens"].includes(previous) || (previous === "tens" && false)) { okToken = false; break; } if (previous === "tens" && current % 10 !== 0) { okToken = false; break; } accept("unit", () => { current += UNITS[word]; }); }
      else if (kind === "teen") { if (!["start", "hundred", "scale", "and"].includes(previous)) { okToken = false; break; } accept("teen", () => { current += UNITS[word]; }); }
      else if (kind === "tens") { if (!["start", "hundred", "scale", "and"].includes(previous)) { okToken = false; break; } accept("tens", () => { current += TENS[word]; }); }
      else if (kind === "hundred") { if (!["unit", "teen", "tens"].includes(previous) && !(previous === "start")) { okToken = false; break; } accept("hundred", () => { current = (current || 1) * 100; }); }
      else if (kind === "scale") { if (!["unit", "teen", "tens", "hundred"].includes(previous) && !(previous === "start" && allowBareScale)) { okToken = false; break; } accept("scale", () => { total += (current || 1) * SCALES[word]; current = 0; }); }
      else { okToken = false; break; }
      consumedWords += 1;
    }
    if (!okToken || consumedWords !== words.length) break;
    end = i + 1;
    // look past a separator: spaces/hyphen continue the run; "and" only continues it after a hundred/thousand and before more number words
    const sep = tokens[i + 1];
    if (!sep || !isJoiner(sep)) { i += 1; break; }
    const next = tokens[i + 2];
    if (!next || !next.word) { i += 1; break; }
    const nextLower = next.text.toLowerCase();
    if (nextLower === "and" && (previous === "hundred" || previous === "scale")) {
      const after = tokens[i + 4];
      if (tokens[i + 3] && isJoiner(tokens[i + 3]) && after && after.word && isNumberWord(parts(after)[0])) { sawAnd = true; previous = "and"; i += 4; continue; }
      i += 1; break;
    }
    i += 2;
  }
  void sawAnd;
  if (!consumedAny) return null;
  return { value: total + current, end };
}

function convertNumberWords(text) {
  const tokens = tokenize(text);
  const out = [];
  for (let i = 0; i < tokens.length; i += 1) {
    const token = tokens[i];
    if (!token.word) { out.push(token.text); continue; }
    const lower = token.text.toLowerCase();
    // "a hundred" / "a thousand"
    let start = i; let aPrefix = false;
    if (lower === "a" && tokens[i + 1] && isJoiner(tokens[i + 1]) && tokens[i + 2]?.word && ["hundred", "thousand"].includes(parts(tokens[i + 2])[0])) { start = i + 2; aPrefix = true; }
    if (!isNumberWord(parts(tokens[start])[0])) { out.push(token.text); continue; }
    const run = readRun(tokens, start, aPrefix);
    if (!run) { out.push(token.text); continue; }
    const wordsInRun = tokens.slice(start, run.end).filter(t => t.word).flatMap(parts);
    // a lone "one" is a pronoun unless a measure follows
    if (wordsInRun.length === 1 && wordsInRun[0] === "one" && !aPrefix) {
      const next = tokens[run.end + 1];
      if (!(tokens[run.end] && isJoiner(tokens[run.end]) && next?.word && MEASURE.test(next.text))) { out.push(token.text); continue; }
    }
    let value = String(run.value);
    let end = run.end;
    // "two point five" -> 2.5
    if (tokens[end] && isJoiner(tokens[end]) && tokens[end + 1]?.word && tokens[end + 1].text.toLowerCase() === "point" && tokens[end + 2] && isJoiner(tokens[end + 2])) {
      let j = end + 3; let digits = "";
      while (tokens[j]?.word && parts(tokens[j]).length === 1 && kindOf(parts(tokens[j])[0]) && UNITS[parts(tokens[j])[0]] <= 9 && parts(tokens[j])[0] in UNITS) {
        digits += UNITS[parts(tokens[j])[0]]; end = j + 1;
        if (tokens[j + 1] && isJoiner(tokens[j + 1]) && tokens[j + 2]?.word && parts(tokens[j + 2])[0] in UNITS && UNITS[parts(tokens[j + 2])[0]] <= 9) j += 2; else break;
      }
      if (digits) value = `${value}.${digits}`;
    }
    out.push(value);
    i = end - 1;
  }
  return out.join("");
}

// Trailing sentence punctuation a transcript adds to a short reply ("Yes.", "Skip!", "Cancel,") is not part of what was meant. A question mark is kept.
function stripTrailingPunctuation(text) {
  return String(text ?? "").replace(/\s+/g, " ").trim().replace(/[.!,;:]+$/g, "").trim();
}

// "2 million", "2.5 million", "3 thousand", "1.2 billion" -> 2000000, 2500000, 3000, 1200000000. Without this, "Record income of 2 million shillings" was read as
// an income of 2 (a million times too small) and "3 thousand shillings" as 3, saved silently. Only the WORDS thousand/million/billion are expanded:
// a bare "k" or "m" could be kilometres, metres or a 5k run.
const MAGNITUDES = { thousand: 1e3, million: 1e6, billion: 1e9 };
function expandMagnitudes(text) {
  return String(text ?? "").replace(/(\d[\d,]*(?:\.\d+)?)\s*(thousand|million|billion)\b/gi, (whole, digits, word) => {
    const value = Number(digits.replace(/,/g, "")) * MAGNITUDES[word.toLowerCase()];
    return Number.isFinite(value) ? String(Math.round(value * 100) / 100) : whole;
  });
}

// How money is written in everyday East African speech and texts. Found by the audit: "sold maize for 6k" was recorded as 6 and "200k" as 200 (a thousand times too small), "5000/=" and "200 bob"
// and "Ksh.5000" were not read as money at all. Only done where the number is plainly money (after a currency word or symbol, after for / at / paid / cost / spent / worth / of, or before a
// currency word), because a bare "5k" could be a 5 km run: "5kg" and "5k steps" are left alone.
const CURRENCY_LEAD = "(?:ksh|kshs|kes|tsh|tshs|tzs|ugx|etb|ngn|ghs|zar|zmw|rwf|usd|shs?|[$€£₦])";
const CURRENCY_TAIL = "(?:shillings?|ksh|kshs|kes|tsh|ugx|usd|dollars?|bob|bobs|birr|naira|cedis?)";
const thousands = digits => { const value = Number(digits.replace(/,/g, "")) * 1000; return Number.isFinite(value) ? String(Math.round(value * 100) / 100) : null; };
function expandMoneyShorthand(text) {
  let out = String(text ?? "");
  // "Ksh.5000" / "Ksh. 5,000" -> "Ksh 5000"
  out = out.replace(new RegExp(`\\b(${CURRENCY_LEAD})\\.\\s?(?=\\d)`, "gi"), "$1 ");
  // "5000/=" and "5,000/-" are shillings
  out = out.replace(/(\d[\d,]*(?:\.\d+)?)\s*\/[=-](?![\w])/g, "$1 shillings");
  // "elfu 6" is 6000
  out = out.replace(/\belfu\s+(\d[\d,]*(?:\.\d+)?)\b/gi, (whole, digits) => thousands(digits) ?? whole);
  // "6k": a thousand, in a money place
  const kilo = "(\\d[\\d,]*(?:\\.\\d+)?)\\s?k(?![a-z0-9])(?!\\s*(?:g|m|of|steps?|run|walk)\\b)";
  out = out.replace(new RegExp(`(${CURRENCY_LEAD}\\s*)${kilo}`, "gi"), (whole, lead, digits) => `${lead}${thousands(digits) ?? digits + "k"}`);
  out = out.replace(new RegExp(`\\b((?:for|at|@|paid|pay|cost|costs|costing|spent|worth|of|price|total|earned|made|received|got)\\s+(?:about |around )?)${kilo}`, "gi"), (whole, lead, digits) => `${lead}${thousands(digits) ?? digits + "k"}`);
  out = out.replace(new RegExp(`${kilo}(?=\\s*${CURRENCY_TAIL}\\b)`, "gi"), (whole, digits) => thousands(digits) ?? whole);
  // "200 bob" / "200 bobs" are shillings (after "6k bob" has become "6000 bob")
  out = out.replace(/(\d[\d,]*(?:\.\d+)?)\s*bobs?\b/gi, "$1 shillings");
  return out;
}

function normalizeSpokenText(text) {
  const raw = String(text ?? "");
  if (!raw.trim()) return raw;
  return stripTrailingPunctuation(expandMoneyShorthand(expandMagnitudes(convertNumberWords(raw))));
}

module.exports = Object.freeze({ normalizeSpokenText, convertNumberWords, stripTrailingPunctuation, expandMagnitudes, expandMoneyShorthand });
