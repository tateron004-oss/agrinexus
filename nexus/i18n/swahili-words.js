"use strict";

const { clean, round, num, parseMoney, formatMoney } = require("../farmwork/parse.js");
const { extractPeriod, addDays } = require("../personal/dates.js");

// Swahili words the record-keeping tools share (farm and health): quantities and units, money, periods, dates. First draft: a fluent speaker must review
// every word before it is relied on (see the Swahili review sheet). The records themselves are the same records the English tools keep.

// ---- units: Swahili puts the unit first ("kilo 200", "gunia 3") or after ("200 kg"); stored as the English toolkit stores them ----
const UNITS = [[/^(?:kilo|kg|kgs)$/, "kg", 1], [/^(?:tani)$/, "kg", 1000], [/^(?:gramu)$/, "kg", 0.001], [/^(?:lita|l)$/, "L", 1], [/^(?:gunia|magunia)$/, "sack", 1], [/^(?:mfuko|mifuko)$/, "bag", 1],
  [/^(?:debe|madebe)$/, "tin", 1], [/^(?:kreti|makreti)$/, "crate", 1], [/^(?:mkungu|mikungu)$/, "bunch", 1], [/^(?:kipande|vipande)$/, "piece", 1], [/^(?:pakiti|paketi)$/, "packet", 1],
  [/^(?:chupa)$/, "bottle", 1], [/^(?:ndoo)$/, "bucket", 1], [/^(?:trei)$/, "tray", 1], [/^(?:ekari)$/, "acre", 1], [/^(?:hekta)$/, "ha", 1], [/^(?:dozi)$/, "dose", 1]];
const UNIT_WORD = "kilo|kg|kgs|tani|gramu|lita|l|gunia|magunia|mfuko|mifuko|debe|madebe|kreti|makreti|mkungu|mikungu|kipande|vipande|pakiti|paketi|chupa|ndoo|trei|ekari|hekta|dozi";
const NUMBER = "\\d[\\d,]*(?:[.]\\d+)?";
const unitOf = word => UNITS.find(([pattern]) => pattern.test(String(word).toLowerCase()));

// "kilo 200", "200 kg", "gunia 3", "magunia 3" -> { value, unit, matched, index }; null when there is no amount with a unit.
function parseQuantitySw(text) {
  const t = clean(text);
  const m = new RegExp(`\\b(${UNIT_WORD})\\s+(${NUMBER})\\b(?!\\s*(?:${UNIT_WORD})\\b)|(?<![\\d.,])(${NUMBER})\\s*(${UNIT_WORD})\\b`, "i").exec(t);
  if (!m) return null;
  const entry = unitOf(m[1] || m[4]); const raw = m[2] || m[3];
  if (!entry) return null;
  const value = round(num(raw.replace(/,/g, "")) * entry[2], 3);
  return Number.isFinite(value) && value > 0 ? { value, unit: entry[1], index: m.index, matched: m[0] } : null;
}
const UNIT_SHOWN = { kg: "kilo", L: "lita", sack: "gunia", bag: "mfuko", tin: "debe", crate: "kreti", bunch: "mkungu", piece: "vipande", packet: "pakiti", bottle: "chupa", bucket: "ndoo", tray: "trei", acre: "ekari", ha: "hekta", dose: "dozi" };
const unitLabelSw = (value, unit) => `${UNIT_SHOWN[unit] || unit} ${value}`;

// ---- money ----
const CURRENCY_WORDS = /^(?:shilingi|sh|shs|ksh|kshs|tsh|tshs|ush|ugx|kes|tzs|etb|birr|rwf|usd|dola|dola)$/i;
// "shilingi 9000", "sh 9000", "9000", "KSh 9,000" -> { amount, currency }. A currency is kept as the person said it, and "shilingi" is the English tools' "shillings".
function parseMoneySw(text) {
  const t = clean(text).replace(/\bshilingi\b/gi, "shillings").replace(/\bdola\b/gi, "dollars");
  const found = parseMoney(t);
  if (found) return found;
  const bare = new RegExp(`(?<![\\d.,])(${NUMBER})(?![\\d.,]*\\s*(?:${UNIT_WORD})\\b)`).exec(t);
  return bare ? { amount: num(bare[1].replace(/,/g, "")), currency: "" } : null;
}
const moneyShown = (amount, currency) => {
  const shown = Number(amount).toLocaleString("en", { maximumFractionDigits: 2 });
  if (!currency) return shown;
  if (currency === "shillings") return `shilingi ${shown}`;
  return formatMoney(amount, currency);
};

// ---- words for things a farmer buys and sells: what the English tools call them (so one record means one thing in either language) ----
const CROPS = [[/^(?:mahindi|mahindi mabichi)$/, "maize"], [/^(?:maharage|maharagwe)$/, "beans"], [/^(?:mihogo|muhogo)$/, "cassava"], [/^(?:mchele|mpunga|mchele mbichi)$/, "rice"], [/^ngano$/, "wheat"], [/^mtama$/, "sorghum"], [/^ulezi$/, "millet"],
  [/^(?:nyanya)$/, "tomatoes"], [/^(?:viazi|viazi vikuu)$/, "potatoes"], [/^(?:viazi vitamu)$/, "sweet potatoes"], [/^kabichi$/, "cabbage"], [/^sukuma(?: wiki)?$/, "kale"], [/^(?:vitunguu|kitunguu)$/, "onions"], [/^(?:ndizi)$/, "bananas"], [/^kahawa$/, "coffee"],
  [/^chai$/, "tea"], [/^(?:karanga)$/, "groundnuts"], [/^(?:mboga|mboga mboga)$/, "vegetables"], [/^(?:matunda|tunda)$/, "fruit"], [/^(?:mazao)$/, "crops"], [/^(?:maziwa)$/, "milk"], [/^(?:mayai|yai)$/, "eggs"],
  [/^(?:ng'ombe|ngombe)$/, "cow"], [/^(?:mbuzi)$/, "goat"], [/^(?:kondoo)$/, "sheep"], [/^(?:nguruwe)$/, "pigs"], [/^(?:kuku)$/, "chickens"], [/^(?:sungura)$/, "rabbits"], [/^(?:mifugo)$/, "livestock"],
  [/^(?:mbegu)$/, "seed"], [/^(?:mbolea)$/, "fertiliser"], [/^(?:dawa ya kunyunyizia|dawa ya wadudu|viuatilifu|dawa za kunyunyizia)$/, "pesticide"], [/^(?:chakula cha mifugo|lishe ya mifugo|lishe)$/, "feed"], [/^(?:chumvi ya madini)$/, "mineral"]];
function englishItem(word) {
  const w = clean(word).toLowerCase().replace(/[.,;]+$/, "");
  const hit = CROPS.find(([pattern]) => pattern.test(w));
  return hit ? hit[1] : w;
}
// The other way: what the English tools keep, said in Swahili (a name that is not in the list is shown as it was kept).
const SW_NAMES = { maize: "mahindi", beans: "maharage", cassava: "mihogo", rice: "mchele", wheat: "ngano", sorghum: "mtama", millet: "ulezi", tomatoes: "nyanya", potatoes: "viazi", "sweet potatoes": "viazi vitamu", cabbage: "kabichi", kale: "sukuma wiki", onions: "vitunguu", bananas: "ndizi", coffee: "kahawa", tea: "chai", groundnuts: "karanga", vegetables: "mboga", fruit: "matunda", crops: "mazao",
  milk: "maziwa", eggs: "mayai", cow: "ng'ombe", goat: "mbuzi", sheep: "kondoo", pigs: "nguruwe", chickens: "kuku", rabbits: "sungura", livestock: "mifugo", seed: "mbegu", fertiliser: "mbolea", pesticide: "dawa ya kunyunyizia", feed: "chakula cha mifugo", mineral: "chumvi ya madini" };
const swahiliItem = name => { const key = clean(name).toLowerCase(); return SW_NAMES[key] || key; };
const CATEGORY_SW = { seed: "mbegu", fertiliser: "mbolea", chemicals: "dawa", feed: "chakula cha mifugo", labour: "vibarua", transport: "usafiri", veterinary: "huduma ya mifugo", equipment: "vifaa", water: "maji", rent: "kodi", other: "nyingine", crops: "mazao", livestock: "mifugo", milk: "maziwa", eggs: "mayai" };
const categorySw = category => CATEGORY_SW[category] || category;
// Category of what was sold or bought, using the English tools' category names.
const SW_INCOME = [["milk", /\bmaziwa\b/i], ["eggs", /\b(?:mayai|yai)\b/i], ["livestock", /\b(?:ng'?ombe|mbuzi|kondoo|nguruwe|kuku|sungura|mifugo|ndama|fahali|mnyama|wanyama)\b/i],
  ["crops", /\b(?:mahindi|maharag[ew]|mihogo|muhogo|mchele|mpunga|ngano|mtama|ulezi|nyanya|viazi|kabichi|sukuma|vitunguu|kitunguu|ndizi|kahawa|chai|karanga|mboga|matunda|mazao|mavuno|nafaka)\b/i]];
const incomeCategorySw = text => (SW_INCOME.find(([, pattern]) => pattern.test(text)) || ["other"])[0];
const SW_EXPENSE = [["seed", /\b(?:mbegu|miche)\b/i], ["fertiliser", /\b(?:mbolea|samadi|chokaa)\b/i], ["chemicals", /\b(?:viuatilifu|dawa ya (?:kunyunyizia|wadudu|magugu|kuua)|dawa za (?:kunyunyizia|wadudu)|kemikali)\b/i], ["feed", /\b(?:chakula cha mifugo|lishe|majani makavu|pumba|malisho)\b/i],
  ["labour", /\b(?:vibarua|kibarua|mshahara|mishahara|wafanyakazi|mfanyakazi|kupalilia|kulima|kuvuna|ujira)\b/i], ["transport", /\b(?:usafiri|nauli|mafuta|dizeli|petroli|lori|gari|pikipiki|boda|matatu|kusafirisha)\b/i], ["veterinary", /\b(?:mifugo|daktari wa mifugo|chanjo|dawa ya (?:mifugo|ng'ombe|kuku|mbuzi)|kuogesha|dawa)\b/i],
  ["equipment", /\b(?:zana|jembe|panga|pampu|trekta|mashine|kifaa|vifaa|ukarabati)\b/i], ["water", /\b(?:maji|umwagiliaji|kisima|mabomba)\b/i], ["rent", /\b(?:kodi|ada ya shamba|kukodi)\b/i]];
const expenseCategorySw = text => (SW_EXPENSE.find(([, pattern]) => pattern.test(text)) || ["other"])[0];
// Does this look like farm business at all? (A purchase of "simu" or "gari" alone is not recorded for a person with no farm data.)

// ---- periods ("this month" and so on): the English period, in Swahili words ----
const PERIODS = [[/\bwiki iliyopita\b/, "last week", "wiki iliyopita"], [/\bwiki hii\b/, "this week", "wiki hii"], [/\bmwezi (?:uliopita|jana)\b/, "last month", "mwezi uliopita"], [/\bmwezi huu\b/, "this month", "mwezi huu"], [/\b(?:msimu huu)\b/, "this season", "msimu huu"], [/\bmwaka huu\b/, "this year", "mwaka huu"], [/\bjana\b/, "yesterday", "jana"], [/\bleo\b/, "today", "leo"]];
function periodSw(text, today, fallback = "this month") {
  const t = clean(text).toLowerCase();
  const hit = PERIODS.find(([pattern]) => pattern.test(t)) || PERIODS.find(([, english]) => english === fallback);
  const period = extractPeriod(hit[1], today);
  return period ? { ...period, label: hit[2] } : null;
}

// ---- dates (for a follow-up or an expiry): the Swahili day, as the English reader takes it ----
const DAYS = [["jumatatu", "Monday"], ["jumanne", "Tuesday"], ["jumatano", "Wednesday"], ["alhamisi", "Thursday"], ["ijumaa", "Friday"], ["jumamosi", "Saturday"], ["jumapili", "Sunday"]];
const MONTHS = [["januari", "January"], ["februari", "February"], ["machi", "March"], ["aprili", "April"], ["mei", "May"], ["juni", "June"], ["julai", "July"], ["agosti", "August"], ["septemba", "September"], ["oktoba", "October"], ["novemba", "November"], ["desemba", "December"]];
// "kesho", "baada ya siku 3", "baada ya wiki 2", "Ijumaa", "tarehe 12 Machi", "12 Machi 2027" -> English words for the shared day reader ("tomorrow", "in 3 days", "Friday", "12 March").
function dayInEnglish(text) {
  let t = clean(text).toLowerCase().replace(/^(?:tarehe|siku ya|siku ya jumamosi)\s+/, "").replace(/^(?:mnamo|siku ya)\s+/, "");
  if (/^(?:leo)$/.test(t)) return "today";
  if (/^(?:kesho)$/.test(t)) return "tomorrow";
  if (/^(?:kesho kutwa|keshokutwa)$/.test(t)) return "the day after tomorrow";
  if (/^(?:jana)$/.test(t)) return "yesterday";
  let m;
  if ((m = /^(?:baada ya|ndani ya)\s+(?:siku|wiki|mwezi|miezi)\s+(\d{1,3})$/.exec(t)) || (m = /^(?:baada ya|ndani ya)\s+(\d{1,3})\s+(?:siku|wiki|mwezi|miezi)$/.exec(t))) {
    const unit = /wiki/.test(t) ? "week" : /mwezi|miezi/.test(t) ? "month" : "day";
    return `in ${m[1]} ${unit}${Number(m[1]) === 1 ? "" : "s"}`;
  }
  if ((m = /^(?:siku ya )?(jumatatu|jumanne|jumatano|alhamisi|ijumaa|jumamosi|jumapili)(?: ijayo| hii)?$/.exec(t))) return DAYS.find(([sw]) => sw === m[1])[1];
  for (const [sw, en] of MONTHS) t = t.replace(new RegExp(`\\b${sw}\\b`, "g"), en);
  return /[a-z]/.test(t) || /\d/.test(t) ? t : "";
}
const isDayWord = text => /^(?:leo|kesho|kesho ?kutwa|jana|(?:baada|ndani) ya\b.+|(?:siku ya )?(?:jumatatu|jumanne|jumatano|alhamisi|ijumaa|jumamosi|jumapili)(?: ijayo| hii)?|(?:tarehe )?\d{1,2} (?:januari|februari|machi|aprili|mei|juni|julai|agosti|septemba|oktoba|novemba|desemba)(?: \d{4})?)$/i.test(clean(text));

// A day in words: "leo", "kesho", "jana", else "Ijumaa 25 Septemba" (with the year when it is another year).
const WEEKDAYS_SW = ["Jumapili", "Jumatatu", "Jumanne", "Jumatano", "Alhamisi", "Ijumaa", "Jumamosi"];
function describeDaySw(day, today) {
  if (day === today) return "leo"; if (day === addDays(today, 1)) return "kesho"; if (day === addDays(today, -1)) return "jana";
  const [y, mo, d] = String(day).split("-").map(Number); if (!y) return String(day);
  const weekday = new Date(Date.UTC(y, mo - 1, d)).getUTCDay(); const month = MONTHS[mo - 1][0]; const other = String(day).slice(0, 4) !== String(today).slice(0, 4);
  return `${WEEKDAYS_SW[weekday]} ${d} ${month[0].toUpperCase()}${month.slice(1)}${other ? ` ${y}` : ""}`;
}

// Only the date forms above are read ("wiki 3 zilizopita" and the like are not).
module.exports = Object.freeze({ UNITS, UNIT_WORD, NUMBER, parseQuantitySw, unitLabelSw, parseMoneySw, moneyShown, CURRENCY_WORDS, englishItem, swahiliItem, categorySw, incomeCategorySw, expenseCategorySw, periodSw, PERIODS, dayInEnglish, isDayWord, describeDaySw, MONTHS, DAYS, addDays });
