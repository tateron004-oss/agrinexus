"use strict";
// What a Koach Learn course costs a learner, by where they live and the language they learn in (owner, 27 Nov 2026: "we are not going to accept losing money to teach",
// "i asking for my company to make a profit of three dollars per course ... in addition to the cost to take the courses", "No free courses at all", Stripe + Paystack,
// "Price by language" for the four languages that need Kyro's full voice model). The plan, with its reasoning, is the doc "Koach Learn and Kyro Price Plan".
//
// THE RULE every price here is checked against (test/nexus/course-billing.test.js): even if the learner uses every voice minute a plan includes, the price pays
//   the voice, the typed tutoring and the payment provider's fee, and leaves at least $3 per course for the company.
//
// The costs are planning numbers, set to the safe side:
//   voice: $0.15 a minute on the full voice model (the owner's OpenAI bill, 4-10 Nov 2026), $0.05 on the mini model (about a third);
//   typed tutoring: $0.20 a course; a course by voice takes about 45 minutes, which is what each course includes.
// Hausa, Yoruba, Igbo and Amharic always use the full voice model (the mini model got them wrong in live tests: server.js openAiRealtimeSessionModel), so a course in
// those languages is priced on the full-model cost. Level 1 is priced on the full-model cost in every language.

const FX_PER_USD = Object.freeze({ USD: 1, NGN: 1355, KES: 129 }); // naira: official rate 13 Nov 2026; shilling: approximate. Review every 6 months.
const VOICE_COST_PER_MINUTE = Object.freeze({ mini: 0.05, full: 0.15 });
const TYPED_COST_PER_COURSE = 0.2;
const MIN_PROFIT_PER_COURSE = 3;
const FULL_VOICE_LANGUAGES = Object.freeze(new Set(["ha", "yo", "ig", "am"]));
const MINUTES_PER_COURSE = 45;

// Where a person lives sets the level (World Bank income groups, adjusted: North Africa with Level 2). Names as Kyro stores them, and two-letter codes.
const LEVEL_2 = ["Mexico", "Brazil", "Argentina", "Chile", "Colombia", "Peru", "Ecuador", "Bolivia", "Paraguay", "Uruguay", "Venezuela", "Guatemala", "Honduras", "El Salvador",
  "Nicaragua", "Costa Rica", "Panama", "Dominican Republic", "Cuba", "Jamaica", "South Africa", "Namibia", "Botswana", "Mauritius", "Gabon", "Egypt", "Morocco", "Algeria", "Tunisia",
  "Libya", "Jordan", "Lebanon", "Iraq", "Turkey"];
const LEVEL_3 = ["Nigeria", "Kenya", "Ethiopia", "Tanzania", "Ghana", "Niger", "Uganda", "Rwanda", "Burundi", "Cameroon", "Senegal", "Cote d'Ivoire", "Ivory Coast", "Benin", "Togo",
  "Burkina Faso", "Mali", "Guinea", "Sierra Leone", "Liberia", "Gambia", "Chad", "Central African Republic", "Sudan", "South Sudan", "Somalia", "Eritrea", "Djibouti",
  "Democratic Republic of the Congo", "DRC", "Congo", "Malawi", "Zambia", "Zimbabwe", "Mozambique", "Angola", "Madagascar", "Lesotho", "Eswatini", "Haiti", "Yemen", "Afghanistan",
  "Pakistan", "Bangladesh", "Nepal"];
const CODES = Object.freeze({ MX: "Mexico", BR: "Brazil", AR: "Argentina", CL: "Chile", CO: "Colombia", PE: "Peru", ZA: "South Africa", EG: "Egypt", MA: "Morocco", DZ: "Algeria",
  TN: "Tunisia", NG: "Nigeria", KE: "Kenya", ET: "Ethiopia", TZ: "Tanzania", GH: "Ghana", NE: "Niger", UG: "Uganda", RW: "Rwanda", CM: "Cameroon", SN: "Senegal", CI: "Cote d'Ivoire",
  ML: "Mali", MZ: "Mozambique", AO: "Angola", ZM: "Zambia", ZW: "Zimbabwe", MW: "Malawi", CD: "Democratic Republic of the Congo", SD: "Sudan", SO: "Somalia", HT: "Haiti" });
const fold = s => String(s || "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim();
const LEVEL_OF = new Map([...LEVEL_2.map(name => [fold(name), 2]), ...LEVEL_3.map(name => [fold(name), 3])]);
function levelOf(country) {
  const raw = String(country || "").trim();
  const name = CODES[raw.toUpperCase()] || raw;
  return LEVEL_OF.get(fold(name)) || 1; // unknown or high-income: Level 1
}
function currencyOf(country, level) {
  const raw = String(country || "").trim();
  const name = fold(CODES[raw.toUpperCase()] || raw);
  if (level === 3 && name === "nigeria") return "NGN";
  if (level === 3 && name === "kenya") return "KES";
  return "USD";
}

// The plans. Amounts are in the currency's smallest unit (cents, kobo). `courses` = course slots (Infinity: every course for the year); `countsAs` = courses the
// profit check counts a year as; voice minutes are what the plan includes.
const PLAN_IDS = Object.freeze(["course1", "course3", "course10", "year", "voice"]);
const PRICE_LISTS = Object.freeze({
  // Level 1, every language (full-model cost)
  "1|any|USD": { cost: "full", course1: 1900, course3: 4900, course10: 15500, year: 19900, yearMinutes: 480, voice: 2000, voiceMinutes: 60 },
  // Level 2, mini-model languages
  "2|mini|USD": { cost: "mini", course1: 900, course3: 2400, course10: 6900, year: 9900, yearMinutes: 720, voice: 700, voiceMinutes: 60 },
  // Levels 2 and 3 in US dollars, Hausa / Yoruba / Igbo / Amharic (full-model cost)
  "2|full|USD": { cost: "full", course1: 1100, course3: 3150, course10: 10300, year: 9400, yearMinutes: 360, voice: 2000, voiceMinutes: 60 },
  "3|full|USD": { cost: "full", course1: 1100, course3: 3150, course10: 10300, year: 9400, yearMinutes: 360, voice: 2000, voiceMinutes: 60 },
  // Level 3 in US dollars (Level 3 countries other than Nigeria and Kenya), mini-model languages
  "3|mini|USD": { cost: "mini", course1: 600, course3: 1750, course10: 5700, year: 5700, yearMinutes: 360, voice: 350, voiceMinutes: 30 },
  // Nigeria, in naira
  "3|mini|NGN": { cost: "mini", course1: 770000, course3: 2280000, course10: 7600000, year: 7500000, yearMinutes: 360, voice: 420000, voiceMinutes: 30 },
  "3|full|NGN": { cost: "full", course1: 1400000, course3: 4150000, course10: 13700000, year: 12400000, yearMinutes: 360, voice: 2450000, voiceMinutes: 60 },
  // Kenya, in shillings
  "3|mini|KES": { cost: "mini", course1: 75000, course3: 220000, course10: 730000, year: 730000, yearMinutes: 360, voice: 40000, voiceMinutes: 30 },
  "3|full|KES": { cost: "full", course1: 135000, course3: 400000, course10: 1330000, year: 1200000, yearMinutes: 360, voice: 260000, voiceMinutes: 60 }
});
const COURSES = Object.freeze({ course1: 1, course3: 3, course10: 10, year: Infinity, voice: 0 });
const COUNTS_AS = Object.freeze({ course1: 1, course3: 3, course10: 10, year: 10, voice: 0 });

function listKey(level, lang, currency) {
  const voiceClass = FULL_VOICE_LANGUAGES.has(String(lang || "").toLowerCase()) ? "full" : "mini";
  if (level === 1) return "1|any|USD";
  const key = `${level}|${voiceClass}|${currency}`;
  return PRICE_LISTS[key] ? key : `${level}|${voiceClass}|USD`;
}
// The plans this person sees: { level, currency, voiceClass, plans: [{ id, amount, courses, voiceMinutes, months }] }
function priceList({ country, lang } = {}) {
  const level = levelOf(country);
  const currency = currencyOf(country, level);
  const key = listKey(level, lang, currency);
  const list = PRICE_LISTS[key];
  const listCurrency = key.split("|")[2];
  const plans = PLAN_IDS.map(id => Object.freeze({
    id, amount: list[id], currency: listCurrency, courses: COURSES[id],
    voiceMinutes: id === "year" ? list.yearMinutes : id === "voice" ? list.voiceMinutes : COURSES[id] * MINUTES_PER_COURSE,
    months: id === "voice" ? null : 12
  }));
  return Object.freeze({ level, currency: listCurrency, voiceClass: key.split("|")[1] === "any" ? (FULL_VOICE_LANGUAGES.has(String(lang || "").toLowerCase()) ? "full" : "mini") : key.split("|")[1], key, plans: Object.freeze(plans) });
}
function planFrom(list, id) { return list.plans.find(plan => plan.id === id) || null; }

// The payment provider's fee, in US dollars, for an amount in the currency's smallest unit (Stripe for US dollars, Paystack for naira and shillings; on the safe side).
function feeUsd(currency, amountMinor) {
  const amount = amountMinor / 100;
  if (currency === "NGN") return (Math.min(amount * 0.015 + (amount >= 2500 ? 100 : 0), 2000)) / FX_PER_USD.NGN;
  if (currency === "KES") return (amount * 0.03) / FX_PER_USD.KES;
  return amount * 0.03 + 0.3;
}
// What the company keeps if every included voice minute is used: { priceUsd, costUsd, feeUsd, keptUsd, keptPerCourse }
function worstCase(key, id) {
  const list = PRICE_LISTS[key]; const currency = key.split("|")[2];
  const amountMinor = list[id];
  const priceUsd = amountMinor / 100 / FX_PER_USD[currency];
  const minutes = id === "year" ? list.yearMinutes : id === "voice" ? list.voiceMinutes : COURSES[id] * MINUTES_PER_COURSE;
  const costUsd = minutes * VOICE_COST_PER_MINUTE[list.cost] + COUNTS_AS[id] * TYPED_COST_PER_COURSE;
  const fee = feeUsd(currency, amountMinor);
  const keptUsd = priceUsd - costUsd - fee;
  return Object.freeze({ priceUsd, costUsd, feeUsd: fee, keptUsd, keptPerCourse: COUNTS_AS[id] ? keptUsd / COUNTS_AS[id] : null });
}
function formatPrice(amountMinor, currency) {
  const value = amountMinor / 100;
  if (currency === "NGN") return `₦${value.toLocaleString("en-US")}`;
  if (currency === "KES") return `KSh ${value.toLocaleString("en-US")}`;
  return `$${Number.isInteger(value) ? value : value.toFixed(2)}`;
}

module.exports = Object.freeze({ priceList, planFrom, levelOf, currencyOf, worstCase, feeUsd, formatPrice, PRICE_LISTS, PLAN_IDS, FX_PER_USD, VOICE_COST_PER_MINUTE,
  TYPED_COST_PER_COURSE, MIN_PROFIT_PER_COURSE, FULL_VOICE_LANGUAGES, MINUTES_PER_COURSE, COUNTS_AS });
