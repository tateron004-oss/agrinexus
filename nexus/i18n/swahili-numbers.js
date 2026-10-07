"use strict";

// Swahili numbers, as people really say them when they talk about money: "elfu mbili mia tano" (2,500), "elfu kumi na mbili" (12,000), "laki moja" (100,000),
// "milioni mbili" (2,000,000), "ishirini na tano" (25) -- and the mixed forms of everyday speech and texts: "elfu 4", "4 elfu", "mia 5", "2k", "1.5k",
// "4,500", "4.500". This file only READS numbers; it never decides what a number is for (a price, a count, a weight: that is the caller's job).
//
// Rules that keep it honest:
//  * A number is only returned when the whole expression is understood. A bare "elfu" or "mia" (no number after it) is not a number.
//  * Nothing is guessed. "4.500" can be 4,500 (a thousands point, as written in Swahili and European texts) or 4.5: it is returned as AMBIGUOUS, with
//    both readings, and the caller must ask. The same goes for "elfu mia tano" (500,000 by the grammar, 1,500 as often said).
//  * Parts of a number must get smaller as they go ("elfu mbili" then "mia tano" then "hamsini" then "tano"). "kilo mbili elfu moja" is therefore two
//    numbers (2 and 1,000), never 3,000 and never 2,001.
// First draft: a fluent speaker must review the words (see the Swahili review sheet).

const UNIT_WORDS = {
  moja: 1, mmoja: 1, kimoja: 1, mbili: 2, wawili: 2, viwili: 2, miwili: 2, mawili: 2, tatu: 3, watatu: 3, vitatu: 3, mitatu: 3, matatu: 3, nne: 4, wanne: 4, vinne: 4, minne: 4, manne: 4,
  tano: 5, watano: 5, vitano: 5, mitano: 5, matano: 5, sita: 6, saba: 7, nane: 8, wanane: 8, vinane: 8, minane: 8, manane: 8, tisa: 9
};
const TENS_WORDS = { kumi: 10, ishirini: 20, thelathini: 30, thalathini: 30, arobaini: 40, hamsini: 50, sitini: 60, sabini: 70, themanini: 80, tisini: 90 };
const MAGNITUDE_WORDS = { mia: 100, elfu: 1000, ngiri: 1000, laki: 100000, milioni: 1000000, bilioni: 1000000000 };
// Digits said one by one, as a number is read out over a phone: "nne tano sifuri sifuri" is 4500 (English "four five zero zero" too).
const DIGIT_WORDS = { sifuri: 0, zero: 0, moja: 1, one: 1, mbili: 2, two: 2, tatu: 3, three: 3, nne: 4, four: 4, tano: 5, five: 5, sita: 6, six: 6, saba: 7, seven: 7, nane: 8, eight: 8, tisa: 9, nine: 9 };
// Words that are not a price when a number follows them: a time, a length of time, a date.
const NOT_MONEY_BEFORE = new Set(["saa", "siku", "wiki", "mwezi", "miezi", "mwaka", "miaka", "dakika", "tarehe", "namba", "nambari", "no", "number", "ukurasa", "darasa", "kidato"]);

// ---- tokens ----
function tokenize(text) {
  const out = [];
  const pattern = /(\d+(?:[.,]\d+)*)(k(?![a-z0-9]))?|[a-z'’]+|\S/gi;
  let match;
  while ((match = pattern.exec(String(text ?? "")))) {
    if (match[1] !== undefined) out.push({ type: "digits", raw: match[1], k: Boolean(match[2]), text: match[0], start: match.index, end: match.index + match[0].length });
    else if (/^[a-z'’]/i.test(match[0])) out.push({ type: "word", word: match[0].toLowerCase().replace(/’/g, "'"), text: match[0], start: match.index, end: match.index + match[0].length });
    else out.push({ type: "other", text: match[0], start: match.index, end: match.index + match[0].length });
  }
  return out;
}

// ---- digits ----
// "4500", "4,500", "4.5", "4.500" (ambiguous), "1.500.000" (thousands points), "4.500,50" -> { values: [primary, other?], ambiguous } | { invalid }
function readDigits(raw) {
  const groups = /^\d{1,3}(?:[.,]\d{3})+$/;
  if (/^\d+$/.test(raw)) return { values: [Number(raw)] };
  if (/^\d{1,3}(?:,\d{3})+(?:\.\d+)?$/.test(raw)) return { values: [Number(raw.replace(/,/g, ""))] };
  if (/^\d{1,3}(?:\.\d{3}){2,}$/.test(raw)) return { values: [Number(raw.replace(/\./g, ""))] };
  if (/^\d{1,3}(?:\.\d{3})+,\d+$/.test(raw)) return { values: [Number(raw.replace(/\./g, "").replace(",", "."))] };
  if (/^\d{1,3}\.\d{3}$/.test(raw) && !/^0\./.test(raw)) { const thousands = Number(raw.replace(".", "")); const decimal = Number(raw); return { values: [thousands, decimal], ambiguous: true }; }
  if (/^\d+\.\d+$/.test(raw)) return { values: [Number(raw)] };
  if (/^\d+,\d{1,2}$/.test(raw)) return { values: [Number(raw.replace(",", "."))] };
  void groups;
  return { invalid: true };
}

// The place of the last non-zero digit: 2500 -> 100, 2000 -> 1000, 25 -> 1, 2.5 -> 0.1. A next part of the same number must be smaller than this.
function granularity(value) {
  if (!Number.isFinite(value) || value <= 0) return 1;
  if (Math.abs(value - Math.round(value)) > 1e-9) return 0.001;
  let g = 1; let v = Math.round(value);
  while (v % 10 === 0 && g < 1e9) { v /= 10; g *= 10; }
  return g;
}

// ---- words below a thousand: [mia N] [tens] [na unit] ----
const isWord = (token, set) => token && token.type === "word" && Object.prototype.hasOwnProperty.call(set, token.word);
const isNa = token => token && token.type === "word" && token.word === "na";
const isMia = token => token && token.type === "word" && token.word === "mia";

// Reads 1..999 from words (or one small digit token after "mia"). Returns { value, end, startsWithHundreds } or null.
function readBelowThousand(tokens, i) {
  let value = 0; let j = i; let startsWithHundreds = false; let any = false;
  if (isMia(tokens[j])) {
    startsWithHundreds = true; j += 1;
    if (isWord(tokens[j], UNIT_WORDS)) { value += 100 * UNIT_WORDS[tokens[j].word]; j += 1; any = true; }
    else if (tokens[j] && tokens[j].type === "digits" && /^[1-9]$/.test(tokens[j].raw) && !tokens[j].k) { value += 100 * Number(tokens[j].raw); j += 1; any = true; }
    else {
      // a bare "mia" is a hundred only when more of the number follows ("mia na hamsini", "mia hamsini")
      const after = isNa(tokens[j]) ? tokens[j + 1] : tokens[j];
      if (isWord(after, TENS_WORDS) || isWord(after, UNIT_WORDS)) { value += 100; any = true; } else return null;
    }
    // hundreds, then tens or a unit: "mia mbili na hamsini", "mia mbili hamsini", "mia tano na tano"
    let k = j; if (isNa(tokens[k]) && (isWord(tokens[k + 1], TENS_WORDS) || isWord(tokens[k + 1], UNIT_WORDS))) k += 1;
    if (isWord(tokens[k], TENS_WORDS)) {
      value += TENS_WORDS[tokens[k].word]; j = k + 1;
      if (isNa(tokens[j]) && isWord(tokens[j + 1], UNIT_WORDS)) { value += UNIT_WORDS[tokens[j + 1].word]; j += 2; }
    } else if (k > j && isWord(tokens[k], UNIT_WORDS)) { value += UNIT_WORDS[tokens[k].word]; j = k + 1; }
    return { value, end: j, startsWithHundreds };
  }
  if (isWord(tokens[j], TENS_WORDS)) {
    value += TENS_WORDS[tokens[j].word]; j += 1; any = true;
    if (isNa(tokens[j]) && isWord(tokens[j + 1], UNIT_WORDS)) { value += UNIT_WORDS[tokens[j + 1].word]; j += 2; }
    return { value, end: j, startsWithHundreds };
  }
  if (isWord(tokens[j], UNIT_WORDS)) return { value: UNIT_WORDS[tokens[j].word], end: j + 1, startsWithHundreds };
  void any;
  return null;
}

// "4 elfu" is read only when nothing numeric follows the magnitude word ("gunia 3 elfu nne" is 3 sacks and a price, not 3,000).
const startsNumber = token => Boolean(token) && (token.type === "digits" || (token.type === "word" && (Object.prototype.hasOwnProperty.call(UNIT_WORDS, token.word) || Object.prototype.hasOwnProperty.call(TENS_WORDS, token.word) || Object.prototype.hasOwnProperty.call(MAGNITUDE_WORDS, token.word) || token.word === "nusu")));

// One part of a number: a magnitude with its multiplier ("elfu mbili"), hundreds, tens, a unit, digits, or "nusu elfu".
// Returns { value, end, ambiguous?, mag, invalid? } or null.
function readPart(tokens, i) {
  const token = tokens[i]; if (!token) return null;
  if (token.type === "digits") {
    const d = readDigits(token.raw);
    if (d.invalid) return { value: NaN, end: i + 1, invalid: true, g: 0.001 };
    const factor = token.k ? 1000 : 1;
    const values = d.values.map(v => v * factor);
    const next = tokens[i + 1];
    // "4 elfu", "2 laki", "3 milioni"
    if (!token.k && isWord(next, MAGNITUDE_WORDS) && next.word !== "mia" && !startsNumber(tokens[i + 2])) {
      const mag = MAGNITUDE_WORDS[next.word];
      return { value: values[0] * mag, values: values.map(v => v * mag), ambiguous: d.ambiguous, end: i + 2, g: granularity(values[0] * mag), mag, kind: "mag" };
    }
    return { value: values[0], values, ambiguous: d.ambiguous, end: i + 1, g: granularity(values[0]), mag: 0, digits: true, kind: "digits" };
  }
  if (token.type !== "word") return null;
  const w = token.word;
  if (w === "nusu" && isWord(tokens[i + 1], MAGNITUDE_WORDS)) { const mag = MAGNITUDE_WORDS[tokens[i + 1].word]; return { value: mag / 2, end: i + 2, g: granularity(mag / 2), mag, kind: "mag" }; }
  if (isWord(token, MAGNITUDE_WORDS) && w !== "mia") {
    const mag = MAGNITUDE_WORDS[w]; const next = tokens[i + 1];
    if (next && next.type === "digits") {
      const d = readDigits(next.raw);
      if (d.invalid) return { value: NaN, end: i + 2, invalid: true, g: 0.001 };
      const factor = next.k ? 1000 : 1;
      return { value: d.values[0] * factor * mag, values: d.values.map(v => v * factor * mag), ambiguous: d.ambiguous, end: i + 2, g: granularity(d.values[0] * factor * mag), mag, kind: "mag" };
    }
    const sub = readBelowThousand(tokens, i + 1);
    if (sub) {
      const out = { value: sub.value * mag, end: sub.end, g: granularity(sub.value * mag), mag, kind: "mag" };
      // "elfu mia tano": 500,000 by the grammar, 1,500 as it is often said -- not guessed
      if (sub.startsWithHundreds && (w === "elfu" || w === "ngiri" || w === "laki")) { out.ambiguous = true; out.values = [sub.value * mag, mag + sub.value]; }
      return out;
    }
    // a bare "elfu"/"laki"/"milioni" is a number only when more follows: "elfu na mia tano"
    if (isNa(next) && startsNumber(tokens[i + 2])) return { value: mag, end: i + 1, g: mag, mag, kind: "mag" };
    return null;
  }
  const sub = readBelowThousand(tokens, i);
  if (sub) return { value: sub.value, end: sub.end, g: granularity(sub.value), mag: sub.startsWithHundreds ? 100 : 0, hundreds: sub.startsWithHundreds, kind: sub.startsWithHundreds ? "hundreds" : isWord(tokens[i], TENS_WORDS) ? "tens" : "unit" };
  return null;
}

// A number from tokens[i]: parts that get smaller, joined by "na" or nothing. Returns { value, values, ambiguous, end, invalid } or null.
function readNumberAt(tokens, i) {
  let part = readPart(tokens, i); if (!part) return null;
  let value = part.value; let end = part.end; let g = part.g; let lastMag = part.mag || 0; let ambiguous = Boolean(part.ambiguous); let values = part.values ? [...part.values] : [part.value]; let invalid = Boolean(part.invalid);
  for (;;) {
    if (invalid || !Number.isFinite(g)) break;
    let j = end; let hadNa = false;
    if (isNa(tokens[j])) { hadNa = true; j += 1; }
    // "na nusu": half of the last magnitude word ("elfu mbili na nusu" = 2,500), or a half of a plain number ("tano na nusu" = 5.5)
    if (hadNa && tokens[j] && tokens[j].type === "word" && tokens[j].word === "nusu" && !isWord(tokens[j + 1], MAGNITUDE_WORDS)) {
      const half = lastMag ? lastMag / 2 : 0.5;
      if (half < g) { value += half; values = values.map(v => v + half); end = j + 1; g = granularity(value); }
      break;
    }
    const next = readPart(tokens, j); if (!next || next.invalid) break;
    // a following part must be smaller than the last place of what came before ("elfu mbili" then "mia tano")
    if (!(next.value < g) || next.digits) break;
    // a lone unit needs its "na" ("elfu mbili na tano"); "ishirini tano" is not said
    if (!hadNa && next.kind === "unit") break;
    const adds = next.ambiguous && next.values ? next.values : [next.value];
    values = values.flatMap(v => adds.map(add => v + add)); value = values[0]; end = next.end; g = granularity(value); if (next.mag) lastMag = next.mag; part = next;
    if (next.ambiguous) ambiguous = true;
  }
  if (ambiguous && values.length < 2) ambiguous = false;
  return { value, values, ambiguous, invalid, end };
}

// Digits read out one by one: "nne tano sifuri sifuri" (4500). Needs a "sifuri"/"zero", or four or more digit words, so "kilo mbili tatu" is not one number.
function readDigitRun(tokens, i) {
  let j = i; let digits = ""; let zero = false;
  while (tokens[j] && tokens[j].type === "word" && Object.prototype.hasOwnProperty.call(DIGIT_WORDS, tokens[j].word) && tokens[j].word !== "moja") {
    if (DIGIT_WORDS[tokens[j].word] === 0) zero = true;
    digits += String(DIGIT_WORDS[tokens[j].word]); j += 1;
  }
  const words = j - i;
  if (words < 3 || !(zero || words >= 4) || digits[0] === "0") return null;
  return { value: Number(digits), values: [Number(digits)], ambiguous: false, end: j };
}

// Every number in a text: [{ start, end, text, value, values, ambiguous, invalid, before, after, kind }].
// `before` is the word just before the number (for "saa tano", "siku tatu"); `each` marks "kila moja" (each one), which is not a number.
function scanNumbers(text) {
  const source = String(text ?? ""); const tokens = tokenize(source); const found = [];
  for (let i = 0; i < tokens.length;) {
    const token = tokens[i];
    if (token.type === "word" && token.word === "kila" && isWord(tokens[i + 1], { moja: 1, mmoja: 1, kimoja: 1 })) { found.push({ start: token.start, end: tokens[i + 1].end, text: source.slice(token.start, tokens[i + 1].end), kind: "each" }); i += 2; continue; }
    if (token.type !== "digits" && !(token.type === "word" && (Object.prototype.hasOwnProperty.call(UNIT_WORDS, token.word) || Object.prototype.hasOwnProperty.call(TENS_WORDS, token.word) || Object.prototype.hasOwnProperty.call(MAGNITUDE_WORDS, token.word) || Object.prototype.hasOwnProperty.call(DIGIT_WORDS, token.word) || token.word === "nusu"))) { i += 1; continue; }
    const run = readDigitRun(tokens, i) || readNumberAt(tokens, i);
    if (!run) { i += 1; continue; }
    const last = tokens[run.end - 1]; const prev = tokens[i - 1];
    // a plain digit string is already a number: only record it when it carries something to decide (words, "k", a separator that may mean a thousand)
    found.push({ start: token.start, end: last.end, text: source.slice(token.start, last.end), value: run.value, values: run.values, ambiguous: run.ambiguous, invalid: run.invalid, kind: tokens.slice(i, run.end).every(t => t.type === "digits") && run.end - i === 1 && !tokens[i].k ? "digits" : "words",
      before: prev && prev.type === "word" ? prev.word : "", after: tokens[run.end] && tokens[run.end].type === "word" ? tokens[run.end].word : "" });
    i = run.end;
  }
  return found;
}

const digitString = value => { if (!Number.isFinite(value)) return ""; if (Number.isInteger(value)) return String(value); return String(Math.round(value * 1000) / 1000); };

// The same sentence with every number as digits ("magunia matatu elfu nne mia tano" -> "magunia 3 4500"), and what was unclear.
// `ambiguous` is the first number with two readings, `invalid` the first that could not be read; the text then uses the first reading.
function normalizeNumbers(text, { quantityHint = null } = {}) {
  const source = String(text ?? ""); const spans = scanNumbers(source).filter(span => span.kind !== "each");
  let out = ""; let at = 0; let ambiguous = null; let invalid = null;
  for (const span of spans) {
    out += source.slice(at, span.start);
    if (span.invalid) { invalid = invalid || span; out += span.text; }
    else {
      if (span.ambiguous && !ambiguous) ambiguous = span;
      out += digitString(span.value);
    }
    at = span.end;
  }
  out += source.slice(at);
  void quantityHint;
  return { text: out, spans, ambiguous, invalid };
}

// A whole text that is one number: parseSwahiliNumber("elfu mbili mia tano") -> { value: 2500 }; null when it is not (entirely) a number;
// { value, ambiguous: true, values: [...] } when it has two readings.
function parseSwahiliNumber(text) {
  const source = String(text ?? "").trim().replace(/[.!?,;:]+$/g, ""); if (!source) return null;
  const spans = scanNumbers(source).filter(span => span.kind !== "each");
  if (spans.length !== 1 || spans[0].invalid) return null;
  const span = spans[0];
  if (source.slice(0, span.start).trim() || source.slice(span.end).trim()) return null;
  return span.ambiguous ? { value: span.value, ambiguous: true, values: span.values } : { value: span.value };
}

module.exports = Object.freeze({ UNIT_WORDS, TENS_WORDS, MAGNITUDE_WORDS, NOT_MONEY_BEFORE, tokenize, readDigits, granularity, scanNumbers, normalizeNumbers, parseSwahiliNumber, digitString });
