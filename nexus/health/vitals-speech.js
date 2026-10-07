"use strict";

// What a person SAYS about their health readings, turned into something the app can act on. Pure text in, plain object out: nothing here saves, deletes or
// answers anything, and nothing here decides what a number MEANS (the limits and the guidance stay in server/providers/bloodPressure.js and bloodGlucose.js).
//
// Why this exists: a spoken reading does not look like a typed one. "one forty over ninety", "140 by 90", "140 kwa 90", "presha yangu ni 160 juu ya 100",
// "sukari ni 8,5" and "seven point two" all failed to be understood, and two of them were SAVED WRONG (8,5 became 8 and 7 point 2 became 7, because the part
// after the comma or the word "point" was dropped). The rule here is: read the whole number or say that we could not; never hand on a truncated one.
//
// parseReading(text)      -> null | { vital, ... } | { ask, vital }  (a reading, or something that must be asked about, never guessed)
// parseHealthIntent(text) -> null | { intent, ... }                   (a reading, or show / delete / correct / share / who-can-see / medicine)
// isYes(text) / isNo(text), isSwahili(text)
//
// Kiswahili here is a first draft and must be checked by a fluent speaker before it is relied on.

// ---------------------------------------------------------------- number words (English and Kiswahili) -> digits

const EN_UNITS = { zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9 };
const EN_TEENS = { ten: 10, eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15, sixteen: 16, seventeen: 17, eighteen: 18, nineteen: 19 };
const EN_TENS = { twenty: 20, thirty: 30, forty: 40, fourty: 40, fifty: 50, sixty: 60, seventy: 70, eighty: 80, ninety: 90 };
const SW_UNITS = { sifuri: 0, moja: 1, mbili: 2, tatu: 3, nne: 4, tano: 5, sita: 6, saba: 7, nane: 8, tisa: 9 };
const SW_TENS = { ishirini: 20, thelathini: 30, arobaini: 40, hamsini: 50, sitini: 60, sabini: 70, themanini: 80, tisini: 90 };

const isEnWord = word => word in EN_UNITS || word in EN_TEENS || word in EN_TENS || word === "hundred" || word === "oh";
const isSwWord = word => word in SW_UNITS || word in SW_TENS || word === "kumi" || word === "mia";

// Reads one number from the front of `words` (lower-case words). Returns { value, used } or null. English: "one forty five", "one hundred and forty",
// "ninety five", "a hundred and ten", "one oh five". A leading 1 or 2 followed by a tens or teen word with no "hundred" is the way people say a blood
// pressure aloud ("one forty" is 140), so it is read that way.
function readEnglish(words) {
  let i = 0;
  const w = n => words[n];
  const subHundred = start => {
    // -> { value, used } for 0..99 starting at `start`, or null
    const a = w(start);
    if (a === "oh" && w(start + 1) in EN_UNITS && w(start + 1) !== "zero") return { value: EN_UNITS[w(start + 1)], used: 2 };
    if (a in EN_TEENS) return { value: EN_TEENS[a], used: 1 };
    if (a in EN_TENS) {
      const b = w(start + 1);
      if (b in EN_UNITS && b !== "zero") return { value: EN_TENS[a] + EN_UNITS[b], used: 2 };
      return { value: EN_TENS[a], used: 1 };
    }
    if (a in EN_UNITS) return { value: EN_UNITS[a], used: 1 };
    return null;
  };
  let extra = 0;
  if (w(0) === "a" && w(1) === "hundred") { words = ["one", ...words.slice(1)]; }
  else if (w(0) === "hundred") { words = ["one", ...words]; extra = 1; }
  const first = w(0);
  if (!(first in EN_UNITS || first in EN_TEENS || first in EN_TENS)) return null;
  // "<unit> hundred [and] <0..99>"
  if (first in EN_UNITS && first !== "zero" && w(1) === "hundred") {
    i = 2; if (w(i) === "and") i += 1;
    const rest = subHundred(i);
    if (rest) return { value: EN_UNITS[first] * 100 + rest.value, used: i + rest.used - extra };
    // an "and" with nothing after it is not part of the number
    return { value: EN_UNITS[first] * 100, used: 2 - extra };
  }
  // "one forty five", "two twenty", "one oh five", "one ten": the way a blood pressure is read aloud
  if ((first === "one" || first === "two") && (w(1) in EN_TENS || w(1) in EN_TEENS || (w(1) === "oh" && w(2) in EN_UNITS && w(2) !== "zero"))) {
    const rest = subHundred(1);
    if (rest) return { value: EN_UNITS[first] * 100 + rest.value, used: 1 + rest.used };
  }
  const plain = subHundred(0);
  return plain ? { value: plain.value, used: plain.used } : null;
}

// Kiswahili: "mia moja arobaini" (140), "mia moja na hamsini" (150), "mia moja sitini na tano" (165), "arobaini na tano" (45), "kumi na moja" (11), "tisini" (90).
// "na" is "and": it joins a tens word to a unit, but "arobaini na tisini" is two numbers (40 and 90), so a "na" before a tens word ends the number.
function readSwahili(words) {
  let i = 0; let total = 0;
  const w = n => words[n];
  const isUnit = n => w(n) in SW_UNITS && w(n) !== "sifuri";
  if (w(0) === "mia") {
    if (isUnit(1)) { total = SW_UNITS[w(1)] * 100; i = 2; } else return null;
    if (w(i) === "na" && (w(i + 1) in SW_TENS || w(i + 1) === "kumi" || isUnit(i + 1))) i += 1;
    else if (!(w(i) in SW_TENS || w(i) === "kumi" || isUnit(i))) return { value: total, used: i };
  }
  const startRest = i;
  if (w(i) === "kumi") {
    total += 10; i += 1;
    if (w(i) === "na" && isUnit(i + 1)) { total += SW_UNITS[w(i + 1)]; i += 2; }
  } else if (w(i) in SW_TENS) {
    total += SW_TENS[w(i)]; i += 1;
    if (w(i) === "na" && isUnit(i + 1)) { total += SW_UNITS[w(i + 1)]; i += 2; }
  } else if (w(i) in SW_UNITS) {
    total += SW_UNITS[w(i)]; i += 1;
  } else if (i === startRest && total === 0) return null;
  return { value: total, used: i };
}

const NUMBER_WORD_TOKEN = /^[a-z]+$/;
// Replaces every run of number words in `text` with digits. Words that are not numbers, and digits already there, are left exactly as they were.
function numberWordsToDigits(text) {
  const tokens = String(text).match(/[a-z']+|\d+(?:\.\d+)?|\s+|[^\sa-z\d']/g) || [];
  const out = [];
  let i = 0;
  while (i < tokens.length) {
    const token = tokens[i];
    if (NUMBER_WORD_TOKEN.test(token) && (isEnWord(token) || isSwWord(token) || token === "a")) {
      // gather the words that could belong to one number: number words, "and"/"na", joined by single spaces or hyphens
      const words = []; const wordToken = [];
      let j = i;
      while (j < tokens.length) {
        const t = tokens[j];
        if (NUMBER_WORD_TOKEN.test(t) && (isEnWord(t) || isSwWord(t) || t === "and" || t === "na" || t === "a")) { words.push(t); wordToken.push(j); j += 1; continue; }
        if ((/^\s+$/.test(t) && !/\n/.test(t)) || t === "-") { j += 1; continue; }
        break;
      }
      const eng = isEnWord(words[0]) || (words[0] === "a" && words[1] === "hundred");
      const read = eng ? readEnglish(words) : (isSwWord(words[0]) ? readSwahili(words) : null);
      if (read && read.used >= 1) {
        out.push(String(read.value));
        i = wordToken[Math.min(words.length, read.used) - 1] + 1;
        continue;
      }
    }
    out.push(token);
    i += 1;
  }
  return out.join("");
}

// "7 point 2", "seven point two", "saba nukta mbili" (and "point two five" -> .25) -> 7.2; "8,5" -> 8.5. A comma before exactly three digits is a thousands comma and is left alone.
function joinDecimals(text) {
  let t = String(text);
  t = t.replace(/(\d)\s*(?:point|dot|nukta|kitone)\s*(\d)/g, "$1.$2");
  t = t.replace(/(\d),(\d{1,2})(?!\d)/g, "$1.$2");
  return t;
}

// "point two five" (the fraction said digit by digit) becomes "point 25" BEFORE the number words are read, so "seven point two five" is 7.25 and not 7.2 followed by a stray 5.
function spokenFractions(text) {
  const digitWords = "zero|oh|one|two|three|four|five|six|seven|eight|nine|sifuri|moja|mbili|tatu|nne|tano|sita|saba|nane|tisa";
  const wordDigit = { zero: 0, oh: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, sifuri: 0, moja: 1, mbili: 2, tatu: 3, nne: 4, tano: 5, sita: 6, saba: 7, nane: 8, tisa: 9 };
  return String(text).replace(new RegExp(`\\b(point|dot|nukta)((?:\\s+(?:${digitWords}))+)\\b`, "g"), (_, word, run) => ` ${word} ${run.trim().split(/\s+/).map(item => wordDigit[item]).join("")}`);
}

function prepare(raw) {
  let t = String(raw ?? "").toLowerCase().normalize("NFKC").replace(/[‘’`´]/g, "'").replace(/[“”"]/g, "");
  t = t.replace(/\b(?:uh+|um+|erm+|er|hmm+|ah+|eh)\b/g, " ");
  t = t.replace(/\bb\.?\s?p\.?(?=[^a-z]|$)/g, "bp");
  t = t.replace(/\b(?:shuger|sugger|suger|sugr|shugar)\b/g, "sugar");
  t = t.replace(/\bpresha\s+ya\s+damu\b/g, "presha");
  t = numberWordsToDigits(spokenFractions(t));
  t = joinDecimals(t);
  return t.replace(/[.!?]+$/g, "").replace(/\s+/g, " ").trim();
}

// ---------------------------------------------------------------- language

const SW_MARKERS = /\b(?:yangu|zangu|wangu|langu|ni|kwa|juu ya|presha|shinikizo|sukari|futa|ondoa|nionyeshe|onyesha|kipimo|vipimo|ndiyo|ndio|hapana|sawa|nimekosea|ilikuwa|uzito|joto|mapigo|dawa|nimesahau|nimeacha|nimemeza|zote|afya|mwisho|nani|anaweza|kuona|daktari|nesi|muuguzi|mhudumu|kliniki|nimekunywa|nukta|jana|leo|tuma|shiriki|sikumeza|inaisha|zinaisha|zimeisha|nimeishiwa|nilisahau)\b/;
const isSwahili = text => SW_MARKERS.test(String(text || "").toLowerCase());

// ---------------------------------------------------------------- pieces shared by the readings

const FILLER = "(?:\\s+(?:my|is|was|are|ni|na|of|reads?|reading|level|today|yesterday|now|leo|jana|sasa|yangu|langu|a|the|at|about|around|like|just|this|morning|afternoon|evening|night|asubuhi|jioni|usiku|after|before|lunch|breakfast|dinner|meal|food|fasting|ya|than|as|to|actually|currently|right|again|nikipima|i|took|got|measured|measure|checked|had)){0,7}";
const NUM = "(\\d{1,4}(?:\\.\\d+)?)";
const QUANTITY_UNIT = "(?:kg|kgs|kilos?|kilograms?|grams?|g|bags?|packets?|sacks?|spoons?|teaspoons?|tablespoons?|cups?|litres?|liters?|shillings?|bob|ksh|kes|ugx|tzs|times|x|days?|hours?|weeks?|months?|years?|%|percent|pieces|pcs|vijiko|kijiko|mifuko|gunia|magunia)";
const SHOPPING_CONTEXT = /\b(?:add|buy|bought|need|get|sell|sold|price|cost|market|harvest|farm|crop|shop(?:ping)?|list|nunua|ongeza|uza|bei|soko|shamba)\b/;
const PERSONAL = /\b(?:my|mine|i have|i got|i took|yangu|wangu|langu|nina|nilipima|nikipima|body)\b/;
const LOG_VERB = /\b(?:log|record|save|add|capture|note|andika|rekodi|hifadhi)\b/;

const ordinaryNumber = text => {
  const number = Number(text);
  return Number.isFinite(number) ? number : NaN;
};

// ---------------------------------------------------------------- blood pressure

const BP_TRIGGER = "(?:blood\\s*pressure|bp|pressure|presha|shinikizo(?:\\s+langu)?(?:\\s+la\\s+damu)?|systolic)";
const BP_SEP = "\\s*(?:\\/|\\\\|over|by|and|or|kwa|juu\\s+ya|juu|na|upon|on|slash|-|:|,)?\\s*";

function parseBloodPressure(t, options = {}) {
  // labelled: "systolic 140 diastolic 90", "top 140 bottom 90", "juu 140 chini 90" (top / bottom may be said in either order)
  const labelled = new RegExp(`\\b(systolic|top(?:\\s+number)?|upper(?:\\s+number)?|juu)\\b${FILLER}\\s*${NUM}\\D{0,25}?\\b(diastolic|bottom(?:\\s+number)?|lower(?:\\s+number)?|chini)\\b${FILLER}\\s*${NUM}`).exec(t);
  if (labelled) return { systolic: ordinaryNumber(labelled[2]), diastolic: ordinaryNumber(labelled[4]), form: "labelled" };
  const labelledBackwards = new RegExp(`\\b(diastolic|bottom(?:\\s+number)?|lower(?:\\s+number)?|chini)\\b${FILLER}\\s*${NUM}\\D{0,25}?\\b(systolic|top(?:\\s+number)?|upper(?:\\s+number)?|juu)\\b${FILLER}\\s*${NUM}`).exec(t);
  if (labelledBackwards) return { systolic: ordinaryNumber(labelledBackwards[4]), diastolic: ordinaryNumber(labelledBackwards[2]), form: "labelled" };
  // trigger word first: "my blood pressure is 140 over 90", "bp 140/90", "presha yangu ni 160 juu ya 100", "shinikizo la damu 150 na 95"
  const after = new RegExp(`\\b${BP_TRIGGER}\\b${FILLER}\\s*[:=]?\\s*${NUM}${BP_SEP}${NUM}(?![\\d.]*\\d)`).exec(t);
  if (after) return { systolic: ordinaryNumber(after[1]), diastolic: ordinaryNumber(after[2]), form: "trigger" };
  // numbers first: "140 over 90 is my blood pressure"
  const before = new RegExp(`${NUM}\\s*(?:\\/|over|by|and|or|kwa|juu\\s+ya)\\s*${NUM}\\b[^\\d]{0,30}?\\b${BP_TRIGGER}\\b`).exec(t);
  if (before) return { systolic: ordinaryNumber(before[1]), diastolic: ordinaryNumber(before[2]), form: "numbers-first" };
  // nothing but the two numbers: "140/90", "one forty over ninety". Only "over" and "/" and only a top number that could be a pressure ("60/40" is a split).
  const bare = new RegExp(`^(?:(?:no|nope|sorry|wait|actually|oh)[,\\s]+)*(?:it(?:'s| is| was)\\s+|(?:my\\s+)?(?:reading|numbers?)\\s+(?:is|was|are)\\s+|reading\\s+)?${NUM}\\s*(?:\\/|over)\\s*${NUM}$`).exec(t);
  if (bare) {
    const systolic = ordinaryNumber(bare[1]);
    if (systolic >= 90 && systolic <= 300) return { systolic, diastolic: ordinaryNumber(bare[2]), form: "bare" };
  }
  // In the middle of a health conversation (a reading was just talked about, or asked for) the other ways of saying it are fine too: "140 by 90", "140 kwa 90", "140 and 90".
  // Outside one, "100 by 50" is far more likely the size of a field than a blood pressure, so it is not taken for one.
  if (options.context) {
    const loose = new RegExp(`^(?:(?:no|nope|sorry|wait|actually|oh)[,\\s]+)*(?:it(?:'s| is| was)\\s+|(?:my\\s+)?(?:reading|numbers?)\\s+(?:is|was|are)\\s+|reading\\s+)?${NUM}\\s*(?:\\/|over|by|and|or|kwa|juu\\s+ya|na)\\s*${NUM}$`).exec(t);
    if (loose) {
      const systolic = ordinaryNumber(loose[1]);
      if (systolic >= 60 && systolic <= 300) return { systolic, diastolic: ordinaryNumber(loose[2]), form: "bare-in-context" };
    }
  }
  return null;
}

// ---------------------------------------------------------------- blood sugar

const GLUCOSE_STRONG = "(?:blood\\s*sugar|blood\\s*glucose|glucose|sukari\\s+(?:ya|katika)\\s+damu)";
const GLUCOSE_WEAK = "(?:sugar|sukari)";
const GLUCOSE_UNIT = "(mmol(?:\\s*(?:\\/|per|kwa)\\s*(?:l|lita|liters?|litres?))?|mg\\s*(?:\\/|per|kwa)?\\s*d?l|millimoles?(?:\\s+per\\s+lit(?:er|re)s?)?|milligrams?(?:\\s+per\\s+deci?lit(?:er|re)s?)?)";

const unitName = word => {
  const w = String(word || "").toLowerCase().replace(/\s+/g, "");
  if (!w) return "";
  if (/^(?:mmol|millimole)/.test(w)) return "mmol/L";
  if (/^(?:mg|milligram)/.test(w)) return "mg/dL";
  return "";
};

// Looks at what follows a number so that a figure is never read in part. -> { clean: true } or { clean: false, why }
function looseEnds(t, endIndex, hasUnit) {
  const rest = t.slice(endIndex);
  if (/^[.,]\d/.test(rest)) return { clean: false, why: "decimal" };
  if (!hasUnit && /^\s+\d/.test(rest)) return { clean: false, why: "two-numbers" };
  return { clean: true };
}

function parseGlucose(t) {
  if (SHOPPING_CONTEXT.test(t) && !new RegExp(`\\b${GLUCOSE_STRONG}\\b`).test(t) && !PERSONAL.test(t) && !LOG_VERB.test(t)) return null;
  const strong = new RegExp(`\\b${GLUCOSE_STRONG}\\b${FILLER}\\s*[:=]?\\s*${NUM}(?:\\s*${GLUCOSE_UNIT})?`).exec(t);
  const weak = !strong ? new RegExp(`(^|[^a-z])(my\\s+)?${GLUCOSE_WEAK}(\\s+yangu)?\\b${FILLER}\\s*[:=]?\\s*${NUM}(?:\\s*${GLUCOSE_UNIT})?`).exec(t) : null;
  let match = strong; let valueText; let unitText; let end;
  if (strong) { valueText = strong[1]; unitText = strong[2]; end = strong.index + strong[0].length; }
  else if (weak) {
    const hasOwner = Boolean(weak[2] || weak[3]);
    const value = ordinaryNumber(weak[4]);
    const connected = new RegExp(`${GLUCOSE_WEAK}(?:\\s+yangu)?\\s+(?:is|was|ni|level|reading)\\b`).test(t);
    // "sugar 130" with nothing else: only a figure that looks like a sugar reading (a decimal, or 40 and over)
    const looksLikeReading = weak[4].includes(".") || value >= 40;
    if (!(hasOwner || connected || (looksLikeReading && !SHOPPING_CONTEXT.test(t)))) return null;
    match = weak; valueText = weak[4]; unitText = weak[5]; end = weak.index + weak[0].length;
  } else return null;
  const unit = unitName(unitText);
  // "sugar 2 kg", "sugar 5 bags": a quantity, not a reading
  if (!unit && new RegExp(`^\\s*${QUANTITY_UNIT}\\b`).test(t.slice(end))) return null;
  const ends = looseEnds(t, end, Boolean(unit));
  if (!ends.clean) return { vital: "glucose", ask: ends.why, valueText, unit: unit || "" };
  return { vital: "glucose", value: ordinaryNumber(valueText), valueText, unit };
}

// ---------------------------------------------------------------- weight, pulse, temperature, oxygen

function parseWeight(t) {
  if (!/\b(?:my\s+(?:body\s+)?weight|i\s+weigh(?:ed)?|weigh\s+me|uzito\s+wangu|uzito\s+wa\s+mwili|nina\s+uzito|(?:log|record|save|andika|rekodi|hifadhi)\s+(?:my\s+|the\s+)?weight)\b/.test(t)) return null;
  const m = new RegExp(`\\b(?:weight|weigh(?:ed)?|uzito(?:\\s+wangu|\\s+wa\\s+mwili)?)\\b${FILLER}\\s*[:=]?\\s*${NUM}\\s*(kg|kgs|kilos?|kilograms?|kilo|lbs?|pounds?)?`).exec(t);
  if (!m) return null;
  const unit = m[2] ? (/^(?:lb|pound)/.test(m[2]) ? "lb" : "kg") : "";
  const ends = looseEnds(t, m.index + m[0].length, Boolean(unit));
  if (!ends.clean) return { vital: "weight", ask: ends.why, valueText: m[1], unit };
  return { vital: "weight", value: ordinaryNumber(m[1]), valueText: m[1], unit };
}

function parsePulse(t) {
  if (SHOPPING_CONTEXT.test(t) && !PERSONAL.test(t)) return null;
  const m = new RegExp(`\\b(?:pulse|heart\\s*rate|heartbeat|mapigo(?:\\s+ya\\s+moyo)?)\\b${FILLER}\\s*[:=]?\\s*${NUM}\\s*(bpm|beats(?:\\s+per\\s+minute)?|kwa\\s+dakika)?`).exec(t);
  if (!m) return null;
  if (!m[2] && new RegExp(`^\\s*${QUANTITY_UNIT}\\b`).test(t.slice(m.index + m[0].length))) return null;
  const ends = looseEnds(t, m.index + m[0].length, Boolean(m[2]));
  if (!ends.clean) return { vital: "pulse", ask: ends.why, valueText: m[1] };
  return { vital: "pulse", value: ordinaryNumber(m[1]), valueText: m[1], unit: "bpm" };
}

function parseTemperature(t) {
  if (/\b(?:weather|forecast|outside|hali ya hewa|nje|rain|today in|temperature (?:in|at|for|near|around)|temp (?:in|at|for|near|around)|in [a-z]{4,}\b.*\btemperature)\b/.test(t)) return null;
  const m = new RegExp(`\\b(?:temperature|temp|joto(?:\\s+la\\s+mwili)?|body\\s*temp)\\b${FILLER}\\s*[:=]?\\s*${NUM}\\s*(?:\\u00b0|degrees?|digrii)?\\s*(celsius|fahrenheit|c|f)?\\b`).exec(t);
  if (!m) return null;
  const said = m[2] ? (m[2][0] === "f" ? "F" : "C") : "";
  const ends = looseEnds(t, m.index + m[0].length, Boolean(said));
  const personal = PERSONAL.test(t) || LOG_VERB.test(t) || /\bfever|homa|body\b/.test(t);
  // "temperature 38.5" said on its own is a reading; "the temperature is 38 today" in a longer sentence is the weather.
  if (!personal && t.split(" ").length > 4) return null;
  if (!ends.clean) return { vital: "temperature", ask: ends.why, valueText: m[1], unit: said, personal };
  return { vital: "temperature", value: ordinaryNumber(m[1]), valueText: m[1], unit: said, personal };
}

function parseOxygen(t) {
  if (!/\b(?:my\s+(?:oxygen|o2|spo2)|spo2|sp\s*o2|saturation|oxygen\s+(?:level|saturation|is|was|ni)|oksijeni\s+(?:yangu|ni)|(?:log|record|save|andika|rekodi|hifadhi)\s+(?:my\s+)?(?:oxygen|o2))\b/.test(t)) return null;
  const m = new RegExp(`\\b(?:oxygen|o2|spo2|sp\\s*o2|saturation|oksijeni)\\b${FILLER}\\s*[:=]?\\s*${NUM}\\s*(%|percent|asilimia)?`).exec(t);
  if (!m) return null;
  const ends = looseEnds(t, m.index + m[0].length, Boolean(m[2]));
  if (!ends.clean) return { vital: "oxygen", ask: ends.why, valueText: m[1] };
  return { vital: "oxygen", value: ordinaryNumber(m[1]), valueText: m[1], unit: "%" };
}

// When the person says "yesterday" the reading is dated yesterday; otherwise it is today's.
function datePhrase(t) {
  if (/\b(?:yesterday|jana)\b/.test(t)) return "yesterday";
  return "today";
}

// -> null (not a reading) | { vital: "bp", systolic, diastolic } | { vital: "glucose"|"weight"|"pulse"|"temperature"|"oxygen", value, unit } | { ask: reason, vital, ... }
// `reading.count` says how many different readings were in the sentence; more than one is asked about, not partly saved.
function parseReading(text, options = {}) {
  const t = prepare(text);
  if (!t) return null;
  // A question about a number ("what does a blood pressure of 140 over 90 mean", "is 7.8 a high sugar reading") is not a reading to save.
  if (/^(?:what|whats|what's|is|are|does|do|how|why|should|can|could|will|which|when|where|who|am|did)\b/.test(t) || /\b(?:mean|means|meaning)\b/.test(t)) return null;
  const found = [];
  const bp = parseBloodPressure(t, options);
  if (bp) found.push({ vital: "bp", ...bp });
  const glucose = parseGlucose(t);
  if (glucose) found.push(glucose);
  const rest = [parseWeight(t), parsePulse(t), parseTemperature(t), parseOxygen(t)].filter(Boolean);
  // a temperature that is not clearly about the body (no "my", no log verb) and not a body figure is left alone
  for (const item of rest) {
    if (item.vital === "temperature" && item.personal === false && !(item.value >= 30 && item.value <= 45)) continue;
    found.push(item);
  }
  if (!found.length) return null;
  const when = datePhrase(t);
  if (found.length > 1) return { ask: "several", vital: found[0].vital, vitals: found.map(item => item.vital), count: found.length, when };
  const only = found[0];
  if (only.vital === "bp") {
    if (!Number.isInteger(only.systolic) || !Number.isInteger(only.diastolic)) return { ask: "bp-not-whole", vital: "bp", systolic: only.systolic, diastolic: only.diastolic, when };
    return { vital: "bp", systolic: only.systolic, diastolic: only.diastolic, form: only.form, when };
  }
  if (only.ask) return { ask: only.ask, vital: only.vital, valueText: only.valueText, unit: only.unit || "", when };
  return { vital: only.vital, value: only.value, valueText: only.valueText, unit: only.unit || "", when, ...(only.vital === "temperature" ? { personal: only.personal } : {}) };
}

// ---------------------------------------------------------------- what else a person says about their readings

const TYPE_WORDS = [
  ["bp", /\b(?:blood\s*pressure|bp|presha|shinikizo)\b/],
  ["glucose", /\b(?:blood\s*sugar|glucose|sugar|sukari)\b/],
  ["weight", /\b(?:weight|uzito)\b/],
  ["pulse", /\b(?:pulse|heart\s*rate|mapigo)\b/],
  ["temperature", /\b(?:temperature|temp|joto)\b/],
  ["oxygen", /\b(?:oxygen|spo2|o2|oksijeni)\b/]
];
const typeOf = t => (TYPE_WORDS.find(([, re]) => re.test(t)) || [null])[0];

// A sentence that says it is about the body or its numbers. A bare "readings" is not enough: a farmer has rainfall and soil readings too.
const STRONG_HEALTH = /\b(?:health|medical|vitals?|blood|bp|pressure|presha|shinikizo|sugar|glucose|sukari|pulse|weight|temperature|oxygen|vipimo vyangu|afya)\b/;
const HEALTH_WORDS =/\b(?:health|medical|reading|readings|blood|bp|pressure|presha|shinikizo|sugar|glucose|sukari|pulse|weight|temperature|oxygen|vipimo|kipimo|afya)\b/;
// Asking for a provider summary or report, or for the trend or chronic-care history, is answered by the health tool's own report and history answers, not by "show my readings".
const REPORTISH = /\b(?:provider|summary|report|trend|trends|chronic|progress|rpm|rtm|bring to)\b/;
const DELETE_VERB ="(?:delete|remove|erase|forget|undo|clear|wipe|get rid of|futa|ondoa|sahau|toa)";
const LAST_WORD = "(?:last|latest|recent|previous|most recent|final|mwisho|ya mwisho|cha mwisho|hiyo|that|this|it)";

function parseHealthIntent(text, options = {}) {
  const t = prepare(text);
  if (!t) return null;
  const language = isSwahili(t) ? "sw" : "en";
  const type = typeOf(t);

  // ---- a medicine: missed, running out, stopped. Nothing here advises; the answer only points to the pharmacist or the clinic.
  const medicineWord = "(?:dose|doses|pills?|tablets?|medicine|medicines|medication|medications|meds|capsules?|dawa|dozi|vidonge)";
  // A dose for the cattle or a spray for the crop is not a person's medicine, and "I did not miss my dose" is not a missed one.
  const farmOrAnimal = /\b(?:cow|cows|cattle|goat|goats|sheep|pig|pigs|chicken|chickens|poultry|livestock|calf|calves|animal|animals|dog|dogs|cat|cats|donkey|donkeys|ng'ombe|mbuzi|kondoo|nguruwe|kuku|mifugo|ndama|wanyama|punda|farm|shamba|crop|crops|maize|fertili[sz]er|spray|pesticide|dewormer|vaccine|vaccines|vaccination|chanjo)\b/.test(t);
  const negated = /\b(?:did not|didn't|never|haven't|have not|do not|don't|sikusahau|sijasahau)\s+(?:miss|missed|forget|forgot|skip|skipped|stop|stopped)\b/.test(t);
  const medicineOk = !farmOrAnimal && !negated;
  const stoppedMedicine = new RegExp(`\\b(?:i\\s+(?:have\\s+|'ve\\s+)?(?:stopped|quit|left off|gave up)|i\\s+(?:don't|do not|no longer)\\s+(?:take|taking)|nimeacha|nimesimamisha|situmii|siendelei)\\b[^.?]{0,40}\\b${medicineWord}\\b`).exec(t)
    || (/\b(?:nimeacha)\b/.test(t) && /\b(?:kumeza|kunywa|dawa)\b/.test(t) ? [t] : null);
  if (medicineOk && stoppedMedicine) return { intent: "medicine-stopped", language, bp: /\b(?:bp|blood\s*pressure|presha|shinikizo|pressure)\b/.test(t) };
  const runningOut = new RegExp(`\\b(?:running out|run out|ran out|almost out|nearly out|out of|last few|finishing|zinaisha|inaisha|zimeisha|nimeishiwa|zinakaribia kuisha)\\b[^.?]{0,30}\\b${medicineWord}\\b`).exec(t)
    || new RegExp(`\\b${medicineWord}\\b[^.?]{0,30}\\b(?:running out|are finishing|finishing|zinaisha|zimeisha|inaisha|zinakaribia kuisha)\\b`).exec(t);
  if (medicineOk && runningOut) return { intent: "medicine-running-out", language };
  const missed = new RegExp(`\\b(?:i\\s+)?(?:missed|forgot|skipped|miss|forget|nimesahau|nilisahau|sikumeza|sijameza|sikunywa|nimesahau kumeza|nimekosa)\\b[^.?]{0,40}\\b${medicineWord}\\b`).exec(t)
    || (/\b(?:nimesahau|nilisahau|sikumeza|sikunywa|sijameza)\b/.test(t) && /\b(?:dawa|dozi|vidonge)\b/.test(t) ? [t] : null);
  if (medicineOk && missed) return { intent: "medicine-missed", language, double: /\b(?:double|twice|two|both|extra|make up|zaidi|mara mbili)\b/.test(t) };

  // ---- who can see my health information
  if (/\b(?:who|anyone|anybody|someone|nani|can (?:other )?(?:people|someone|anyone)|can my \w+)\b[^.?]{0,40}\b(?:see|view|access|read|look at|sees|kuona|kufikia|anaona|anaweza kuona|ana ufikiaji)\b[^.?]{0,50}\b(?:health|medical|reading|readings|blood|bp|sugar|vipimo|afya|taarifa)\b/.test(t)
    || /\bis my (?:health|medical)\b[^.?]{0,30}\b(?:private|safe|secret|confidential|secure)\b/.test(t)
    || /\b(?:taarifa|vipimo)\b[^.?]{0,30}\b(?:za afya|vyangu)\b[^.?]{0,30}\b(?:siri|salama|nani)\b/.test(t)) return { intent: "who-can-see", language };

  // ---- share with a nurse / doctor
  const shareVerb = /\b(?:share|send|forward|email|whatsapp|tuma|shiriki|mpe|mtumie|mwonyeshe)\b/.test(t);
  const shareWho = /\b(?:nurse|doctor|clinician|health worker|chw|clinic|hospital|daktari|nesi|muuguzi|mhudumu wa afya|kliniki|hospitali)\b/.test(t);
  const notHealthMessage = /\b(?:message|email|e-mail|text|sms|photo|picture|document|letter|invoice|receipt|money|mpesa|m-pesa|airtime|location|voucher|file|pdf|insurance|card|form|appointment|bill|payment|booking)\b/.test(t);
  if (shareVerb && shareWho && !notHealthMessage && !REPORTISH.test(t)
    && (HEALTH_WORDS.test(t) || /^(?:please\s+)?(?:share|send|tuma|shiriki)\b[^.?]{0,20}\b(?:with|to|kwa)\b[^.?]{0,12}\b(?:nurse|doctor|clinician|health worker|daktari|nesi|muuguzi|mhudumu wa afya)\b/.test(t))) return { intent: "share", language };

  // ---- delete everything (or every reading of one kind)
  const deleteAll = new RegExp(`\\b${DELETE_VERB}\\b[^.?]{0,25}\\b(?:all|every|everything|zote|yote|whole)\\b[^.?]{0,40}\\b(?:health|medical|reading|readings|records?|data|information|vipimo|afya|taarifa|bp|blood|sugar|glucose|presha|sukari)\\b`).exec(t)
    || new RegExp(`\\b${DELETE_VERB}\\b[^.?]{0,12}\\b(?:my\\s+)?(?:health|medical)\\s+(?:readings|records|data|information)\\b`).exec(t)
    || new RegExp(`\\b${DELETE_VERB}\\b[^.?]{0,14}\\b(?:taarifa zangu zote|vipimo vyangu vyote|vipimo vyote)\\b`).exec(t);
  const typedPlural = type && new RegExp(`\\b${DELETE_VERB}\\b[^.?]{0,25}\\b(?:readings|records|vipimo)\\b`).test(t) && !new RegExp(`\\b${LAST_WORD}\\b`).test(t);
  if (deleteAll || typedPlural) return { intent: "delete-all", type: deleteAll && !type ? null : type, language };

  // ---- delete the last one
  const deleteLast = new RegExp(`\\b${DELETE_VERB}\\b[^.?]{0,25}\\b${LAST_WORD}\\b[^.?]{0,40}\\b(?:reading|readings|kipimo|entry|one|record|figure|number|numbers)\\b`).exec(t)
    || new RegExp(`\\b${DELETE_VERB}\\b[^.?]{0,25}\\b(?:reading|kipimo)\\b[^.?]{0,25}\\b(?:mwisho|cha mwisho|ya mwisho|last|latest)\\b`).exec(t)
    || new RegExp(`\\b${DELETE_VERB}\\b\\s+(?:my\\s+|the\\s+|that\\s+|this\\s+)?(?:last\\s+|latest\\s+)?(?:blood\\s*pressure|bp|sugar|blood\\s*sugar|glucose|weight|pulse|temperature|presha|sukari)\\s+(?:reading|kipimo)\\b`).exec(t);
  if (deleteLast) return { intent: "delete-last", type, language, weak: !type && !STRONG_HEALTH.test(t) };

  // ---- a correction: "it was 133/78", "that was wrong", "nimekosea ilikuwa 130 juu ya 80"
  const correctionMarker = /\b(?:that\s+was\s+(?:wrong|a\s+mistake|not\s+right|incorrect)|that's\s+(?:wrong|not\s+right|incorrect)|i\s+made\s+a\s+mistake|made\s+a\s+mistake|by\s+mistake|it\s+was|i\s+meant|i\s+mean|correction|should\s+(?:have\s+been|be)|nimekosea|ilikuwa|nilimaanisha|si\s+sahihi|makosa|ni\s+makosa|nilikosea)\b/.test(t);
  if (correctionMarker) {
    const reading = parseReading(text, options);
    if (reading && reading.vital && !reading.ask) return { intent: "correct", reading, type: reading.vital, language };
    if (!reading) {
      // "it was 133/78" or "it was 7.2" with no word saying which reading: the figure alone
      const pair = /(?:^|\s)(\d{2,3})\s*(?:\/|over|juu ya)\s*(\d{2,3})(?:\s|$)/.exec(t);
      const lone = /\b(?:it\s+was|i\s+meant|i\s+mean|ilikuwa|nilimaanisha)\s+(\d{1,3}(?:\.\d+)?)(?:\s*(mmol|mg|kg|bpm|%))?\s*$/.exec(t);
      if (pair) return { intent: "correct", reading: { vital: "bp", systolic: Number(pair[1]), diastolic: Number(pair[2]), when: "today" }, type: "bp", language, bare: true };
      if (lone) return { intent: "correct", reading: { vital: type || null, value: Number(lone[1]), valueText: lone[1], unit: unitName(lone[2]) || (lone[2] === "kg" ? "kg" : lone[2] === "bpm" ? "bpm" : lone[2] === "%" ? "%" : ""), when: "today" }, type: type || null, language, bare: true, lone: true };
    }
    if (/\b(?:that\s+was\s+(?:wrong|a\s+mistake|not\s+right|incorrect)|that's\s+(?:wrong|not\s+right|incorrect)|i\s+made\s+a\s+mistake|made\s+a\s+mistake|nimekosea|nilikosea|si\s+sahihi|ni\s+makosa|makosa)\b/.test(t) && !reading) return { intent: "wrong", type, language };
  }

  // ---- show / read back
  const showVerb = /\b(?:show|list|read|tell|see|view|display|give|nionyeshe|onyesha|nipe|niambie|soma|what(?:'s|\s+is|\s+are|\s+was|\s+were)?|which|how many|ni\s+nini|ilikuwa)\b/.test(t);
  const readingNoun = /\b(?:readings?|history|records?|vipimo|kipimo|results?|numbers?)\b/.test(t);
  const lastish = new RegExp(`\\b${LAST_WORD.replace("|that|this|it", "")}\\b`).test(t);
  const questionAboutLast = lastish && type && /\b(?:what|which|ni\s+nini|ilikuwa|nini|show|tell|read)\b/.test(t);
  if (showVerb && ((readingNoun && (type || STRONG_HEALTH.test(t) || /^(?:please )?(?:show|list|read|display|give|tell|nionyeshe|onyesha)(?: me)?(?: all)?(?: of)? (?:my|the) (?:saved |latest |recent |last )?readings?(?: please)?$/.test(t))) || questionAboutLast) && !REPORTISH.test(t) && !/\b(?:meaning|mean|normal|high|low|good|bad|okay|ok)\b/.test(t)) {
    const wantsOne = /\b(?:last|latest|most recent|recent|previous|mwisho|ya mwisho|cha mwisho)\b/.test(t) && !/\breadings\b|\bvipimo\b/.test(t);
    const days = /\bthis\s+week\b|\bwiki\s+hii\b|\bpast\s+week\b|\blast\s+7\s+days\b/.test(t) ? 7 : /\btoday\b|\bleo\b/.test(t) ? 1 : /\bthis\s+month\b|\bmwezi\s+huu\b/.test(t) ? 31 : null;
    return { intent: "show", type, one: wantsOne, days, language, weak: !type && !STRONG_HEALTH.test(t) };
  }
  return null;
}

// ---------------------------------------------------------------- yes and no

const YES = /^(?:(?:yes|yeah|yep|yup|sure|correct|right|ok yes|that's right|that is right|please do|do it|go ahead|save it|please save it|ndiyo|ndio|sawa|hifadhi|ndiyo hifadhi|sawa hifadhi|ni sahihi|sahihi)(?:\s+(?:please|save(?:\s+it)?|do it|delete(?:\s+it|\s+them|\s+all)?(?:\s+\d+)?(?:\s+(?:readings?|records?))?|change(?:\s+it)?|hifadhi|futa(?:\s+zote)?(?:\s+\d+)?(?:\s+(?:readings?|records?|vipimo))?|badilisha|asante))*)$/;
const NO = /^(?:no|nope|nah|not now|don't|do not|don't save|do not save|never mind|nevermind|cancel|stop|wrong|not right|that's wrong|that is wrong|keep them|keep it|hapana|siyo|sio|la|usihifadhi|ghairi|acha|si sahihi|usifute|weka|no thanks|no thank you)(?:\s+(?:please|thanks|thank you|asante|save(?:\s+it)?|delete(?:\s+it)?|it))*$/;
const stripAnswer = text => prepare(text).replace(/[,;:!]+/g, " ").replace(/\s+/g, " ").trim();
const isYes = text => YES.test(stripAnswer(text));
const isNo = text => NO.test(stripAnswer(text));
// "yes, delete all 7 readings" / "ndiyo futa zote": said in full for the one thing that cannot be undone
const isDeleteConfirmed = text => {
  const t = stripAnswer(text);
  return YES.test(t) && /\b(?:delete|futa)\b/.test(t);
};

module.exports = Object.freeze({ UNIT_NAME: unitName, prepare, numberWordsToDigits, parseReading, parseHealthIntent, parseBloodPressure, isYes, isNo, isDeleteConfirmed, isSwahili, typeOf });
