"use strict";

const { convertNumberWords } = require("./spoken-input.js");

// English amounts as people SAY them when they talk about money, for the forms nexus/i18n/spoken-input.js does not read:
//   "two grand" (2,000), "a grand" (1,000), "two and a half grand" / "two and a half thousand" (2,500), "one and a half hundred" (150),
//   "four five zero zero" (the digits said one by one: 4,500 or four separate things?), "four thousand five" (4,005 or 4,500?).
// The rule is the same one the Swahili reader keeps (swahili-numbers.js): an expression that could be read two ways is never guessed. rewrite() returns the text with the CLEAR forms turned into digits,
// and `ambiguity` when one form is not clear: { says, values } (the words as they were said, and the numbers they might mean, the most likely first). The caller asks.
const SMALL = "one|two|three|four|five|six|seven|eight|nine";
const TEENS = "ten|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen";
const TENS = "twenty|thirty|forty|fourty|fifty|sixty|seventy|eighty|ninety";
const SMALL_VALUE = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10 };
const NUMBER_RUN = `(?:(?:(?:${SMALL}|${TEENS}|${TENS}|hundred|and|a)[ -]+)*(?:${SMALL}|${TEENS}|${TENS}|hundred))`;
const DIGIT_WORD = `zero|oh|${SMALL}`;
const DIGIT_VALUE = { zero: 0, oh: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9 };
// A digit run followed by one of these is a count or a measure, not an amount ("three five kg").
const MEASURE_AFTER = /^\s*(?:kgs?|kilos?|kilograms?|grams?|tonnes?|tons?|litres?|liters?|ml|bags?|sacks?|crates?|bunch(?:es)?|pieces?|packets?|bottles?|tins?|acres?|ha|hectares?|trays?|buckets?|cartons?|percent|%|days?|hours?|weeks?|months?|years?|people|workers?|times|cows?|goats?|sheep|chickens?|hens?|pigs?)\b/i;
// Only talk about money gets the digit-by-digit reading: a phone number said aloud is not an amount.
const MONEY_TALK = /^(?:(?:i|we)(?:'ve| have)?\s+)?(?:(?:just|also|already|now|then|please)\s+)*(?:sold|bought|purchased|paid|spent|received|earned|got|made|gave|borrowed|repaid|refunded|refund|lent|chama|stock|loan|supplier)\b|\b(?:owes? (?:me|us)|owe)\b/i;

// Words that make a sentence about money at all (so "four thousand five" in a story about steps is left alone).
const MONEY_CONTEXT = /\b(?:sold|bought|purchased|paid|spent|received|earned|price|cost|costs|worth|owes?|owing|borrowed|lent|loan|repaid|refunded?|chama|contribution|income|profit|sales?)\b/i;

const wordsToNumber = words => { const digits = convertNumberWords(words); const n = Number(String(digits).replace(/,/g, "")); return Number.isFinite(n) && /^\d/.test(String(digits)) ? n : NaN; };
const spaced = value => Number(value).toLocaleString("en", { maximumFractionDigits: 2 });

function rewrite(input) {
  let text = String(input ?? ""); let ambiguity = null;

  // "a grand and a half", "two thousand and a half" (the half is of the last word): 1.5 thousand, 2.5 thousand
  text = text.replace(new RegExp("\\b(an?|" + SMALL + "|ten)\\s+(grand|thousand|hundred|million)\\s+and\\s+a\\s+half\\b", "gi"), (whole, n, scale) => `${/^an?$/i.test(n) ? 1 : SMALL_VALUE[String(n).toLowerCase()]}.5 ${/^grand$/i.test(scale) ? "thousand" : scale}`);
  // "two grand", "a grand", "2.5 grand", "two and a half grand": a grand is a thousand
  text = text.replace(new RegExp(`\\b((?:an?|\\d[\\d,]*(?:\\.\\d+)?|${NUMBER_RUN})(?:\\s+and\\s+a\\s+half)?)\\s+grand\\b`, "gi"), (whole, number) => `${/^an?$/i.test(number) ? "a" : number} thousand`);
  // "two and a half thousand" is 2.5 thousand, "one and a half hundred" is 1.5 hundred
  text = text.replace(new RegExp(`\\b(${SMALL}|ten|\\d+)\\s+and\\s+a\\s+half\\s+(thousand|hundred|million)\\b`, "gi"), (whole, n, scale) => `${SMALL_VALUE[String(n).toLowerCase()] ?? n}.5 ${scale}`);

  // "four thousand five": 4,005 as it is written, 4,500 as it is so often said. Not guessed.
  const thousandUnit = new RegExp(`\\b(${NUMBER_RUN}\\s+thousand)\\s+(${SMALL})\\b(?!\\s+(?:hundred|thousand|million|and\\b))`, "i").exec(text);
  if (thousandUnit && MONEY_CONTEXT.test(text) && !MEASURE_AFTER.test(text.slice(thousandUnit.index + thousandUnit[0].length))) {
    const base = wordsToNumber(thousandUnit[1]); const unit = SMALL_VALUE[thousandUnit[2].toLowerCase()];
    if (Number.isFinite(base) && base % 1000 === 0 && base > 0) {
      ambiguity = { says: thousandUnit[0], values: [base + unit * 100, base + unit] };
      text = `${text.slice(0, thousandUnit.index)}${ambiguity.values[0]}${text.slice(thousandUnit.index + thousandUnit[0].length)}`;
    }
  }

  // "four five zero zero": digits said one after the other (three or more, or any with a zero). Could be 4,500, could be separate numbers.
  if (!ambiguity && MONEY_TALK.test(text.trim())) {
    const run = new RegExp(`\\b((?:${DIGIT_WORD})(?:[ ,-]+(?:${DIGIT_WORD})){2,})\\b`, "i").exec(text);
    if (run && !MEASURE_AFTER.test(text.slice(run.index + run[0].length))) {
      const digits = run[1].toLowerCase().split(/[ ,-]+/).map(word => DIGIT_VALUE[word]);
      if (digits[0] !== 0 && (digits.length >= 4 || digits.includes(0))) {
        ambiguity = { says: run[1], values: [Number(digits.join(""))] };
        text = `${text.slice(0, run.index)}${ambiguity.values[0]}${text.slice(run.index + run[0].length)}`;
      }
    }
  }
  return { text, ambiguity };
}

module.exports = Object.freeze({ rewrite, spaced });
