"use strict";

// Days and months in the person's language, from the built-in calendar names (Intl), before a sentence is handed to the model to translate.
// Found on the live Igbo voice run, 26 Nov 2026: "due Fri 27 Nov, 6:00 pm" was said as Thursday ("Tọsde") while the screen's translation of the same line said Friday; in an offline check
// the model also often left "(due Fri 27 Nov, 6:00 pm)" in English. The model is handed the day and month already in the person's language, and a translation that names a different
// day of the week than the English did is caught (wrongWeekday) so it can be asked again or not used.

const DAYS = [
  ["sunday", "sun"], ["monday", "mon"], ["tuesday", "tue", "tues"], ["wednesday", "wed"], ["thursday", "thu", "thur", "thurs"], ["friday", "fri"], ["saturday", "sat"]
];
const MONTHS = [
  ["january", "jan"], ["february", "feb"], ["march", "mar"], ["april", "apr"], ["may"], ["june", "jun"], ["july", "jul"],
  ["august", "aug"], ["september", "sep", "sept"], ["october", "oct"], ["november", "nov"], ["december", "dec"]
];
const DAY_INDEX = new Map(DAYS.flatMap((names, index) => names.map(name => [name, index])));
const MONTH_INDEX = new Map(MONTHS.flatMap((names, index) => names.map(name => [name, index])));
const DAY_WORD = DAYS.flat().sort((a, b) => b.length - a.length).join("|");
const MONTH_WORD = MONTHS.flat().sort((a, b) => b.length - a.length).join("|");
// A full day name anywhere ("on Friday"); a short one, or any month, only next to a date ("Fri 27 Nov", "Friday, 27 November", "Nov 27"): "sun", "sat", "wed", "may" and "march" are also words.
const FULL_DAY = /\b(sunday|monday|tuesday|wednesday|thursday|friday|saturday)\b/gi;
// (a date number may be "27", "27th" or "3rd"; the dot after "Nov." is left where it is, so a sentence's own full stop is never lost)
const DATE_NUMBER = "\\d{1,2}(?:st|nd|rd|th)?\\b";
const DAY_BEFORE_DATE = new RegExp(`\\b(${DAY_WORD})\\b(?=,?\\s+(?:${DATE_NUMBER}|(?:${MONTH_WORD})\\b))`, "gi");
const MONTH_AFTER_NUMBER = new RegExp(`(\\b${DATE_NUMBER}\\s+)(${MONTH_WORD})\\b`, "gi");
const MONTH_BEFORE_NUMBER = new RegExp(`\\b(${MONTH_WORD})\\b(?=\\.?\\s+${DATE_NUMBER})`, "gi");

const base = code => String(code || "en").toLowerCase().split(/[-_]/)[0];
const cache = new Map();
function names(code) {
  const lang = base(code);
  if (cache.has(lang)) return cache.get(lang);
  let result = null;
  try {
    if (Intl.DateTimeFormat.supportedLocalesOf([lang]).length) {
      // 2026-11-01 is a Sunday; days 1..7 are Sunday..Saturday, and the 15th of each month gives its name.
      const day = new Intl.DateTimeFormat(lang, { weekday: "long", timeZone: "UTC" });
      const month = new Intl.DateTimeFormat(lang, { month: "long", timeZone: "UTC" });
      result = {
        days: DAYS.map((_, index) => day.format(new Date(Date.UTC(2026, 10, 1 + index, 12)))),
        months: MONTHS.map((_, index) => month.format(new Date(Date.UTC(2026, index, 15, 12))))
      };
    }
  } catch { result = null; }
  cache.set(lang, result);
  return result;
}

// The English day and month words of a sentence put into the language. Returns the new text and the days of the week it names (0 = Sunday ... 6 = Saturday).
function localizeDateWords(text, language) {
  const source = String(text || "");
  const lang = base(language);
  const local = lang === "en" ? null : names(lang);
  const days = [];
  if (!local) return { text: source, days };
  const day = word => { const index = DAY_INDEX.get(word.toLowerCase()); days.push(index); return local.days[index]; };
  const month = word => local.months[MONTH_INDEX.get(word.toLowerCase())];
  const out = source
    .replace(FULL_DAY, word => day(word))
    .replace(DAY_BEFORE_DATE, word => day(word))
    .replace(MONTH_AFTER_NUMBER, (all, number, word) => `${number}${month(word)}`)
    .replace(MONTH_BEFORE_NUMBER, word => month(word));
  return { text: out, days: [...new Set(days)] };
}

// True when a translation lost a day of the week it was handed (already in the language): the model wrote another day ("Tọsde", Thursday, for "Fraịdee", Friday) or dropped it.
// Checked this way round because the model spells days its own way ("Tọsde" is not the calendar's "Tọọzdee"), so looking for a wrong day by name would miss it.
function lostWeekday(translated, language, days = []) {
  const local = names(language);
  if (!local || !days.length) return false;
  const said = String(translated || "").toLocaleLowerCase();
  return days.some(index => !said.includes(String(local.days[index] || "").toLocaleLowerCase()));
}

module.exports = Object.freeze({ localizeDateWords, lostWeekday, dateNames: names });
