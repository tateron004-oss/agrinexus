"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { normalizeSpokenText, convertNumberWords, stripTrailingPunctuation } = require("../../nexus/i18n/spoken-input.js");

// A transcript is not typed text: short replies end with a full stop ("Yes.", "Skip.") and amounts come as words ("forty kilos"). Every matcher in
// the toolkits is written for "yes" and "40 kilos", so spoken input was missed (or, for "Skip.", saved as the answer).

test("number words become digits", () => {
  const cases = [
    ["forty kilos", "40 kilos"], ["two hundred kg", "200 kg"], ["forty five", "45"], ["forty-five", "45"], ["twenty one", "21"],
    ["one hundred and twenty bags", "120 bags"], ["a hundred bags", "100 bags"], ["a thousand shillings", "1000 shillings"], ["three thousand", "3000"],
    ["five thousand five hundred", "5500"], ["forty five thousand", "45000"], ["two hundred and fifty", "250"], ["twelve", "12"], ["zero", "0"],
    ["nineteen", "19"], ["ninety nine", "99"], ["two point five kilos", "2.5 kilos"], ["twelve point seven five", "12.75"],
    ["I have fifty bags of maize", "I have 50 bags of maize"],
    ["Sold two hundred kg of maize to Otieno at forty five per kg", "Sold 200 kg of maize to Otieno at 45 per kg"],
    ["it rained twelve millimeters today", "it rained 12 millimeters today"],
    ["bought five bags of seed for three thousand", "bought 5 bags of seed for 3000"],
    ["two cows and three goats", "2 cows and 3 goats"],
    ["Forty Kilos", "40 Kilos"]
  ];
  for (const [input, expected] of cases) assert.equal(convertNumberWords(input), expected, input);
});

test("digits, names and ordinary words are left alone", () => {
  for (const same of ["40 kilos", "I harvested 40 kilos of maize", "Otieno", "someone came", "a bag of maize", "and then", "tens of people", "stone wall", "money for the one who asked", "hundredth"]) {
    assert.equal(convertNumberWords(same), same, same);
  }
});

test("a lone 'one' is a pronoun unless a measure follows it", () => {
  for (const same of ["one of my cows", "no one came", "which one", "one day I will", "the one I bought", "one"]) assert.equal(convertNumberWords(same), same, same);
  assert.equal(convertNumberWords("one kilo of salt"), "1 kilo of salt");
  assert.equal(convertNumberWords("one bag"), "1 bag");
  assert.equal(convertNumberWords("one hundred kg"), "100 kg");
  assert.equal(convertNumberWords("twenty one bags"), "21 bags");
});

test("runs that are not one number stay separate", () => {
  assert.equal(convertNumberWords("two three bags"), "2 3 bags");
  assert.equal(convertNumberWords("five, six"), "5, 6");
});

test("trailing sentence punctuation is removed, a question mark is kept", () => {
  for (const [input, expected] of [["Yes.", "Yes"], ["Skip!", "Skip"], ["Cancel,", "Cancel"], ["yes...", "yes"], ["  Okay.  ", "Okay"], ["Is it ready?", "Is it ready?"], ["No", "No"], ["Sold 200 kg of maize.", "Sold 200 kg of maize"]]) {
    assert.equal(stripTrailingPunctuation(input), expected, input);
  }
  assert.equal(normalizeSpokenText("Yes."), "Yes");
  assert.equal(normalizeSpokenText("Sold two hundred kg of maize at forty five per kg."), "Sold 200 kg of maize at 45 per kg");
  assert.equal(normalizeSpokenText("How many bags do I have?"), "How many bags do I have?");
  assert.equal(normalizeSpokenText(""), "");
  assert.equal(normalizeSpokenText("   "), "   ");
});
