"use strict";

// Dates said in Kiswahili: the months (Januari ... Desemba and their short forms), "tarehe 15 Oktoba", "15 Oktoba", "Desemba 25", "tarehe 3 Novemba 2027", "tarehe 15" (that day of the
// month), "Jumatatu ijayo" (next Monday), "mwezi ujao" (next month) and "mwisho wa mwezi" (the end of the month). Swahili weekdays, "kesho", "leo" and "keshokutwa" were already read.
//
// This only READS the words. It turns each Swahili date phrase into the English date phrase the rest of the time reading already understands (nexus/reminders/time-phrase.js,
// nexus/personal/dates.js), so the Swahili forms follow exactly the rules the English ones do: a date with no year is the next time it comes round, a day that does not exist
// ("tarehe 31 Februari") or one that has passed is asked about, and a day that is only a week or a month ("wiki ijayo", "mwezi ujao") is asked about. Nothing here picks a day for the person.
//
// The Swahili wording of every reply that uses this should be checked by a fluent speaker.

const EN_MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const SW_MONTHS = ["Januari", "Februari", "Machi", "Aprili", "Mei", "Juni", "Julai", "Agosti", "Septemba", "Oktoba", "Novemba", "Desemba"];
const SW_WEEKDAYS = ["Jumapili", "Jumatatu", "Jumanne", "Jumatano", "Alhamisi", "Ijumaa", "Jumamosi"];
const FULL = Object.fromEntries(SW_MONTHS.map((name, index) => [name.toLowerCase(), index]));
const SHORT = { jan: 0, feb: 1, mac: 2, apr: 3, jun: 5, jul: 6, ago: 7, sep: 8, sept: 8, okt: 9, nov: 10, des: 11 };
// longest first, so "septemba" is not read as "sep" + "temba"
const MONTH_PATTERN = "(januari|februari|septemba|oktoba|novemba|desemba|machi|aprili|julai|agosti|juni|mei|sept|jan|feb|mac|apr|jun|jul|ago|sep|okt|nov|des)";
const WEEKDAY_WORDS = "jumatatu|jumanne|jumatano|alhamisi|ijumaa|jumamosi|jumapili";

const monthIndex = word => { const w = String(word || "").toLowerCase().replace(/\.$/, ""); return w in FULL ? FULL[w] : w in SHORT ? SHORT[w] : -1; };
const ordinal = n => `${n}${n % 100 >= 11 && n % 100 <= 13 ? "th" : ({ 1: "st", 2: "nd", 3: "rd" })[n % 10] || "th"}`;
const YEAR = "((?:19|20)\\d{2})(?!\\d)";

// "tarehe 15 Oktoba", "tarehe ya 15 Oktoba", "15 Oktoba", "15 ya Oktoba", "tarehe 15 mwezi wa Oktoba", each with an optional year: "15 Oktoba 2027"
const DAY_FIRST_SOURCE = `(?:\\btarehe(?:\\s+ya)?\\s+)?(?<![\\d.:/-])(\\d{1,2})(?:\\s+(?:ya|mwezi\\s+wa)\\s+|\\s*)${MONTH_PATTERN}\\.?(?![a-z])(?:\\s*,?\\s*${YEAR})?`;
// "Oktoba 15", "tarehe Oktoba 15", "Desemba 25", "Desemba 25, 2027"
const MONTH_FIRST_SOURCE = `(?:\\btarehe\\s+)?\\b${MONTH_PATTERN}\\.?\\s+(?<![\\d])(\\d{1,2})(?!\\d)(?:\\s*,?\\s*${YEAR})?`;
// "tarehe 15" with no month
const BARE_TAREHE_SOURCE = "\\btarehe\\s+(?:ya\\s+)?(\\d{1,2})(?!\\d)(?![\\s]*(?:ya\\s+|mwezi\\s+wa\\s+)?(?:" + MONTH_PATTERN.slice(1, -1) + ")(?![a-z]))";
const END_OF_MONTH_SOURCE = "\\bmwisho\\s+wa\\s+mwezi(?:\\s+huu)?(?!\\s+ujao)\\b";
const NEXT_MONTH_SOURCE = "\\bmwezi\\s+ujao\\b";
const WEEKDAY_NEXT_SOURCE = `\\b(${WEEKDAY_WORDS})\\s+(?:ya\\s+)?(?:wiki\\s+)?ijayo\\b`;

const dayFirst = () => new RegExp(DAY_FIRST_SOURCE, "gi");
const monthFirst = () => new RegExp(MONTH_FIRST_SOURCE, "gi");

// The day of a Swahili-month date as { day, month (0-11), year|null } -- or null. (Whether the day exists is for the caller to check: see makeDay in personal/dates.js.)
function readDateMatch(match, dayFirstForm) {
  const day = Number(dayFirstForm ? match[1] : match[2]);
  const month = monthIndex(dayFirstForm ? match[2] : match[1]);
  const year = match[3] ? Number(match[3]) : null;
  return month < 0 || !(day >= 1 && day <= 31) ? null : { day, month, year };
}

// The first Swahili-month date in the text: { original, day, month, year, english, swahili, index, length } or null.
function findSwahiliDate(text) {
  const source = String(text ?? "");
  for (const [form, make] of [[true, dayFirst], [false, monthFirst]]) {
    const re = make(); let m;
    while ((m = re.exec(source))) {
      const parsed = readDateMatch(m, form);
      if (!parsed) continue;
      const original = m[0].trim();
      const english = `${parsed.day} ${EN_MONTHS[parsed.month]}${parsed.year ? ` ${parsed.year}` : ""}`;
      const swahili = `tarehe ${parsed.day} ${SW_MONTHS[parsed.month]}${parsed.year ? ` ${parsed.year}` : ""}`;
      return { ...parsed, original, english, swahili, index: m.index + (m[0].length - m[0].trimStart().length), length: original.length };
    }
  }
  return null;
}

// A day that exists in the calendar, ignoring the year (29 February counts): false for "31 Februari" and "31 Aprili".
const DAYS_IN_MONTH = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const isRealDay = ({ day, month }) => day >= 1 && day <= DAYS_IN_MONTH[month];

// The Swahili date phrases in a sentence, as the English the rest of the time reading understands. Everything else is left exactly as it was.
function normaliseSwahiliDates(text) {
  let out = String(text ?? "");
  if (!/[a-z]/i.test(out)) return out;
  out = out.replace(dayFirst(), (whole, d, month, year) => { const parsed = readDateMatch([whole, d, month, year], true); return parsed ? `${parsed.day} ${EN_MONTHS[parsed.month]}${parsed.year ? ` ${parsed.year}` : ""}` : whole; });
  out = out.replace(monthFirst(), (whole, month, d, year) => { const parsed = readDateMatch([whole, month, d, year], false); return parsed ? `${parsed.day} ${EN_MONTHS[parsed.month]}${parsed.year ? ` ${parsed.year}` : ""}` : whole; });
  out = out.replace(new RegExp(BARE_TAREHE_SOURCE, "gi"), (whole, d) => (Number(d) >= 1 && Number(d) <= 31 ? `on the ${ordinal(Number(d))}` : whole));
  out = out.replace(new RegExp(END_OF_MONTH_SOURCE, "gi"), "the end of the month");
  out = out.replace(new RegExp(NEXT_MONTH_SOURCE, "gi"), "next month");
  out = out.replace(new RegExp(WEEKDAY_NEXT_SOURCE, "gi"), "$1");
  return out;
}

// "Jumatatu, tarehe 12 Oktoba" -- a calendar day (YYYY-MM-DD) said in Kiswahili, with the year only when it is not this year.
function describeDaySw(day, today) {
  const [year, month, date] = day.split("-").map(Number);
  const weekday = new Date(Date.UTC(year, month - 1, date, 12)).getUTCDay();
  const todayYear = Number(String(today).slice(0, 4));
  return `${SW_WEEKDAYS[weekday]}, tarehe ${date} ${SW_MONTHS[month - 1]}${year !== todayYear ? ` ${year}` : ""}`;
}

module.exports = Object.freeze({ normaliseSwahiliDates, findSwahiliDate, isRealDay, describeDaySw, monthIndex, ordinal, EN_MONTHS, SW_MONTHS, SW_WEEKDAYS,
  MONTH_PATTERN, WEEKDAY_WORDS, DAY_FIRST_SOURCE, MONTH_FIRST_SOURCE, BARE_TAREHE_SOURCE, END_OF_MONTH_SOURCE, WEEKDAY_NEXT_SOURCE });
