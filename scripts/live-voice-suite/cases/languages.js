"use strict";
// Talking to Kyro in Hausa, Amharic, Yoruba and Igbo (full languages from 25 Nov 2026). Each case switches the language by voice, says a short sentence in that language (the pretend voice reads
// it as that language: OpenAI's speech has no tuned voice for these four, so it sounds foreign, and the owner said "i dont care how it sounds. i want it to work"), checks Kyro answers in the same
// language and never says the language is not supported, then switches back to English so the next case starts as before. They change the account's language and put it back.
// (patterns are sent as text: the cases travel to the page as JSON)
// ("I can't switch to Hausa from this setup" was the voice answering a switch the page never made: live run, 25 Nov 2026)
const REFUSAL = /not supported|only (?:speak|understand|support)|can(?:not|'t|’t) (?:speak|understand|switch|change)|don(?:'|’)t speak|don(?:'|’)t have access/i.source;
const ENGLISH_BACK = { say: "Switch to English.", lang: "en", wait: 9000 };

const language = (code, name, sentence, answeredIn, nativeName = name) => ({
  id: `lang-${code}`,
  area: "languages",
  writes: true,
  say: `Switch to ${name}.`,
  timeoutMs: 40000,
  // the page says it changed the language ("Language changed to Hausa"); the voice may say the language's own name
  expect: { said: `${name}|${nativeName}`, notSaid: REFUSAL, language: code },
  then: [
    // the voice session starts again in the new language
    { wait: 9000 },
    { say: sentence, lang: code, timeoutMs: 50000, expect: { said: answeredIn.source, notSaid: REFUSAL, language: code } },
    { say: ENGLISH_BACK.say, lang: ENGLISH_BACK.lang, timeoutMs: 30000, expect: { language: "en" } },
    { wait: ENGLISH_BACK.wait }
  ]
});

module.exports = Object.freeze([
  // Hausa: "Hello Kyro. I want to learn about farming." Answered in Hausa: everyday Hausa words.
  language("ha", "Hausa", "Sannu Kyro. Ina so in koyi game da noma.", /\b(?:sannu|ina|kuma|zan|za ka|kana|noma|gona|wannan|don|yaya|ka|ki)\b/i),
  // Amharic: the same sentence; answered in Amharic: Ge'ez letters.
  language("am", "Amharic", "ሰላም ኪሮ። ስለ ግብርና መማር እፈልጋለሁ።", /[ሀ-፿]/, "አማርኛ"),
  // Yoruba: the same sentence; answered in Yoruba: its dotted letters or everyday words.
  language("yo", "Yoruba", "Ẹ káàárọ̀ Kyro. Mo fẹ́ kọ́ nípa iṣẹ́ àgbẹ̀.", /[ẹọṣẸỌṢ]|\b(?:bawo|mo|ati|nipa|oko|agbe|e kaabo)\b/i),
  // Igbo: the same sentence; answered in Igbo: its dotted letters or everyday words.
  language("ig", "Igbo", "Ndewo Kyro. Achọrọ m ịmụta maka ọrụ ugbo.", /[ịụọṅỊỤỌṄ]|\b(?:ndewo|kedu|biko|ugbo|nke|ka)\b/i)
]);
