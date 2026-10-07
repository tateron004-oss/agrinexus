"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const numbers = require("../../nexus/i18n/swahili-numbers.js");
const words = require("../../nexus/i18n/swahili-words.js");

// A whole text that is one number: [text, value], or [text, { ambiguous: [readings] }], or [text, null] when it is not a (clear) number.
const WHOLE = [
  // units, tens, teens
  ["moja", 1], ["mbili", 2], ["tatu", 3], ["nne", 4], ["tano", 5], ["sita", 6], ["saba", 7], ["nane", 8], ["tisa", 9], ["kumi", 10],
  ["kumi na moja", 11], ["kumi na mbili", 12], ["kumi na tisa", 19], ["ishirini", 20], ["ishirini na tano", 25], ["thelathini", 30], ["thelathini na nne", 34], ["arobaini", 40],
  ["hamsini", 50], ["sitini", 60], ["sabini", 70], ["themanini", 80], ["tisini", 90], ["tisini na tisa", 99],
  // the same words for people and things ("magunia matatu", "wafanyakazi wawili", "vitu vinne")
  ["matatu", 3], ["manne", 4], ["matano", 5], ["wawili", 2], ["watatu", 3], ["vinne", 4], ["mmoja", 1], ["kimoja", 1],
  // hundreds
  ["mia moja", 100], ["mia tano", 500], ["mia mbili na hamsini", 250], ["mia mbili hamsini", 250], ["mia tatu thelathini na mbili", 332], ["mia tisa tisini na tisa", 999], ["mia moja na tano", 105], ["mia na hamsini", 150],
  // thousands, the way they are said
  ["elfu moja", 1000], ["elfu mbili", 2000], ["elfu nne", 4000], ["elfu kumi", 10000], ["elfu kumi na mbili", 12000], ["elfu ishirini", 20000], ["elfu ishirini na tano", 25000], ["elfu hamsini", 50000],
  ["elfu mbili mia tano", 2500], ["elfu moja mia tano", 1500], ["elfu nne mia tano", 4500], ["elfu mbili na mia tano", 2500], ["elfu mbili mia tano ishirini na tano", 2525], ["elfu tisa mia tisa tisini na tisa", 9999], ["elfu tatu na mia mbili", 3200],
  ["elfu kumi na mia tano", 10500], ["elfu kumi na mbili mia tano", 12500], ["elfu mbili hamsini", 2050], ["elfu mbili na tano", 2005],
  // "elfu mia ..." is 500,000 by the grammar and 1,500 as often said: never guessed
  ["elfu mia tano", { ambiguous: [500000, 1500] }], ["elfu mia mbili hamsini", { ambiguous: [250000, 1250] }], ["elfu mia moja", { ambiguous: [100000, 1100] }],
  // laki and milioni
  ["laki moja", 100000], ["laki mbili", 200000], ["laki tano", 500000], ["laki mbili na nusu", 250000], ["laki na nusu", 150000], ["milioni moja", 1000000], ["milioni mbili", 2000000], ["milioni mbili na laki tano", 2500000], ["milioni kumi", 10000000],
  ["laki mbili na elfu hamsini", 250000], ["milioni moja na elfu mia tano", { ambiguous: [1500000, 1001500] }],
  // halves
  ["elfu moja na nusu", 1500], ["elfu mbili na nusu", 2500], ["mia mbili na nusu", 250], ["tano na nusu", 5.5], ["nusu elfu", 500], ["nusu milioni", 500000], ["moja na nusu", 1.5],
  // digits mixed with words
  ["elfu 4", 4000], ["4 elfu", 4000], ["mia 5", 500], ["elfu 12", 12000], ["elfu 4 mia 5", 4500], ["laki 2", 200000], ["2 laki", 200000], ["3 milioni", 3000000], ["elfu 2.5", 2500], ["milioni 1.5", 1500000],
  // shorthand
  ["2k", 2000], ["2K", 2000], ["1.5k", 1500], ["10k", 10000], ["250k", 250000], ["0.5k", 500],
  // digits and their separators
  ["4500", 4500], ["4,500", 4500], ["12,345,678", 12345678], ["4.5", 4.5], ["4,5", 4.5], ["0.500", 0.5], ["1.500.000", 1500000], ["4.500,50", 4500.5], ["0", 0],
  ["4.500", { ambiguous: [4500, 4.5] }], ["12.000", { ambiguous: [12000, 12] }], ["1.000", { ambiguous: [1000, 1] }],
  // digits said one by one
  ["nne tano sifuri sifuri", 4500], ["tano sifuri sifuri", 500], ["four five zero zero", 4500], ["mbili sifuri sifuri sifuri", 2000],
  // not numbers, or not a clear number
  ["elfu", null], ["mia", null], ["laki", null], ["milioni", null], ["nusu", null], ["sifuri", null], ["", null], ["habari", null], ["mahindi", null], ["elfu mbili mahindi", null], ["mimi", null], ["kila moja", null],
  ["mbili tatu", null], ["ishirini tano", null], ["elfu mbili tano", null], ["4,5000", null], ["elfu na", null], ["saba saba", null]
];

test("a number said in Swahili words, digits or both is read exactly as spoken, and an unclear one is never guessed", () => {
  assert.ok(WHOLE.length >= 100, `table size ${WHOLE.length}`);
  for (const [text, expected] of WHOLE) {
    const got = numbers.parseSwahiliNumber(text);
    if (expected === null) assert.equal(got, null, `"${text}" is not a clear number`);
    else if (typeof expected === "object") { assert.ok(got && got.ambiguous, `"${text}" is ambiguous`); assert.deepEqual([...got.values].sort((a, b) => b - a), [...expected.ambiguous].sort((a, b) => b - a), text); }
    else { assert.ok(got, `"${text}" is a number`); assert.equal(got.ambiguous, undefined, `"${text}" is not ambiguous`); assert.equal(got.value, expected, text); }
  }
});

test("parts of a number must get smaller as they go: two numbers side by side stay two numbers", () => {
  const values = text => numbers.scanNumbers(text).filter(span => span.kind !== "each").map(span => span.value);
  assert.deepEqual(values("magunia matatu elfu nne mia tano"), [3, 4500]);
  assert.deepEqual(values("kilo mbili elfu moja"), [2, 1000]);
  assert.deepEqual(values("gunia moja mia tano"), [1, 500]);
  assert.deepEqual(values("kilo kumi mia tano"), [10, 500]);
  assert.deepEqual(values("mbuzi mmoja elfu kumi na mbili"), [1, 12000]);
  assert.deepEqual(values("trei tano elfu mbili mia mbili hamsini"), [5, 2250]);
  assert.deepEqual(values("gunia 3 kwa 4500"), [3, 4500]);
  assert.deepEqual(values("gunia 3 elfu nne"), [3, 4000], "digits then a thousand: a count and a price, not 3,000");
  assert.deepEqual(values("nimeuza kwa mia mbili na kununua kwa mia moja"), [200, 100]);
});

test("'kila moja' means each, not one; 'saa' and 'siku' say a number is a time, not money", () => {
  const spans = numbers.scanNumbers("unga mifuko kumi kila mmoja 150");
  assert.deepEqual(spans.map(span => span.kind), ["words", "each", "digits"]);
  assert.equal(numbers.scanNumbers("saa tano asubuhi")[0].before, "saa");
  assert.equal(numbers.scanNumbers("siku tatu zilizopita")[0].before, "siku");
});

test("normalizeNumbers rewrites a sentence with digits and says what was unclear", () => {
  assert.equal(numbers.normalizeNumbers("nimeuza mahindi magunia matatu elfu nne mia tano").text, "nimeuza mahindi magunia 3 4500");
  assert.equal(numbers.normalizeNumbers("kwa 2k na mia 5").text, "kwa 2500");
  assert.equal(numbers.normalizeNumbers("kwa 2k, mia 5").text, "kwa 2000, 500", "a comma ends a number");
  const doubt = numbers.normalizeNumbers("kwa 4.500");
  assert.equal(doubt.ambiguous.text, "4.500"); assert.deepEqual(doubt.ambiguous.values, [4500, 4.5]);
  assert.ok(numbers.normalizeNumbers("kwa 4,5000").invalid);
  assert.equal(numbers.normalizeNumbers("Habari yako").text, "Habari yako");
});

test("money in Swahili: number words, shorthand, currency words, slashes", () => {
  const money = text => { const m = words.parseMoneySw(text); return m && { amount: m.amount, currency: m.currency, ...(m.ambiguous ? { ambiguous: m.ambiguous } : {}) }; };
  const CASES = [
    ["kwa 9000", { amount: 9000, currency: "" }], ["kwa shilingi 9,000", { amount: 9000, currency: "shillings" }], ["KSh 5000", { amount: 5000, currency: "KSh" }], ["ksh 4500", { amount: 4500, currency: "KSh" }],
    ["kwa elfu mbili mia tano", { amount: 2500, currency: "" }], ["shilingi mia mbili", { amount: 200, currency: "shillings" }], ["bob mia mbili", { amount: 200, currency: "shillings" }], ["bob 200", { amount: 200, currency: "shillings" }],
    ["200 bob", { amount: 200, currency: "shillings" }], ["sh 300", { amount: 300, currency: "shillings" }], ["shs. 300", { amount: 300, currency: "shillings" }], ["4,500/=", { amount: 4500, currency: "shillings" }], ["4500/-", { amount: 4500, currency: "shillings" }],
    ["kwa 2k", { amount: 2000, currency: "" }], ["kwa 1.5k", { amount: 1500, currency: "" }], ["kwa laki moja", { amount: 100000, currency: "" }], ["kwa milioni mbili", { amount: 2000000, currency: "" }], ["elfu 4", { amount: 4000, currency: "" }],
    ["mbuzi 1 12000", { amount: 12000, currency: "" }], ["saa tano kwa 300", { amount: 300, currency: "" }], ["nne tano sifuri sifuri", { amount: 4500, currency: "" }], ["dola 20", { amount: 20, currency: "$" }],
    ["kwa 4.500", { amount: 4500, currency: "", ambiguous: [4500, 4.5] }], ["hakuna kiasi", null], ["", null]
  ];
  for (const [text, expected] of CASES) assert.deepEqual(money(text), expected, text);
});

test("quantities in Swahili: number words with the unit before or after, halves, and a doubtful number is flagged", () => {
  const quantity = text => { const q = words.parseQuantitySw(text); return q && { value: q.value, unit: q.unit, ...(q.ambiguous ? { ambiguous: q.ambiguous } : {}) }; };
  const CASES = [
    ["magunia matatu", { value: 3, unit: "sack" }], ["gunia mbili", { value: 2, unit: "sack" }], ["kilo mia mbili za mahindi", { value: 200, unit: "kg" }], ["kilo 200", { value: 200, unit: "kg" }], ["200 kg", { value: 200, unit: "kg" }],
    ["lita ishirini", { value: 20, unit: "L" }], ["lita kumi na mbili", { value: 12, unit: "L" }], ["trei tano", { value: 5, unit: "tray" }], ["debe mbili", { value: 2, unit: "tin" }], ["kreti tatu", { value: 3, unit: "crate" }], ["ekari mbili na nusu", { value: 2.5, unit: "acre" }],
    ["fungu 5", { value: 5, unit: "bunch" }], ["mafungu kumi", { value: 10, unit: "bunch" }], ["kilo nusu", { value: 0.5, unit: "kg" }], ["nusu kilo", { value: 0.5, unit: "kg" }], ["kilo moja na nusu", { value: 1.5, unit: "kg" }], ["tani mbili", { value: 2000, unit: "kg" }],
    ["kilo 2.500", { value: 2.5, unit: "kg", ambiguous: [2.5, 2500] }], ["mahindi mengi", null]
  ];
  for (const [text, expected] of CASES) assert.deepEqual(quantity(text), expected, text);
});
