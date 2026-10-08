"use strict";

const { clean, titleCase, round } = require("./parse.js");
const { recordMoney, sum, profitOf, NOT_FARM } = require("./money.js");
const { addStock, findItems, categoryOf } = require("./inventory.js");
const { addDays } = require("../personal/dates.js");
const { parseQuantitySw, unitLabelSw, parseMoneySw, moneyShown, CURRENCY_WORDS, englishItem, incomeCategorySw, expenseCategorySw, periodSw, describeDaySw, swahiliItem, categorySw, UNIT_WORD, NUMBER } = require("../i18n/swahili-words.js");
const numbers = require("../i18n/swahili-numbers.js");

// The farm's money and stock, in Swahili. The same records the English tools keep (the same collections, the same shapes), so a farmer can say a sale in
// Swahili and read the summary in English, or the other way round. Every phrase here starts with a Swahili first-person verb ("nimeuza", "nimenunua",
// "nimetumia", "nimemlipa") or a Swahili question, so English talk and everything else falls straight through to the other tools.
// First draft: a fluent speaker must review the wording before it is relied on. Kyro records exactly what the farmer says and adds nothing.
const SW = {
  full: "Rekodi zako za pesa zimejaa (maingizo elfu tano). Niombe muhtasari, kisha ondoa baadhi.",
  sold: ({ qty, item, buyer, amount, stock, income, when = "" }) => `Nimerekodi: umeuza ${qty ? `${qty} za ` : ""}${item}${buyer ? ` kwa ${buyer}` : ""} kwa ${amount}${when}.${stock} Mapato ya mwezi huu: ${income}.`,
  stockOut: ({ taken, left, less, low = "" }) => ` Nimetoa ${taken} kwenye ghala lako${less ? " (ulikuwa na kidogo kuliko ulichouza, kwa hivyo sasa ni sifuri)" : `; zimebaki ${left}`}.${low}`,
  spent: ({ amount, what, category, spent, when = "", note = "" }) => `Nimerekodi: umetumia ${amount} kwa ${what}${categorySw(category) === what ? "" : ` (${categorySw(category)})`}${when}.${note} Matumizi ya mwezi huu: ${spent}.`,
  bought: ({ qty, item, seller, amount, category, stock, spent, when = "" }) => `Nimerekodi: umenunua ${qty ? `${qty} za ` : ""}${item}${seller ? ` kutoka kwa ${seller}` : ""} kwa ${amount} (${categorySw(category)})${when}.${stock} Matumizi ya mwezi huu: ${spent}.`,
  amountWrong: "Kiasi hicho kinaonekana si sahihi, kwa hivyo sijaandika chochote. Ninaandika hadi 100,000,000 tu. Sema tena kiasi sahihi.",
  householdNote: " Gharama za nyumbani hazihesabiwi kwenye faida ya shamba.",
  stockIn: ({ qty, name }) => ` Nimeongeza kwenye ghala lako (sasa una ${qty} za ${name}).`,
  paid: ({ who, amount, what, when = "" }) => `Nimerekodi: umemlipa ${who} ${amount} kwa ${what}${when}.`,
  spentTotal: ({ total, what, period, n }) => `Ulitumia ${total}${what ? ` kwa ${what}` : ""} ${period} (maingizo ${n}).`,
  spentNone: ({ what, period }) => `Sina matumizi ${what ? `ya ${what} ` : ""}yaliyorekodiwa ${period}.`,
  earnedTotal: ({ total, period, n }) => `Ulipata ${total} ${period} (maingizo ${n}).`,
  earnedNone: ({ period }) => `Sina mapato yaliyorekodiwa ${period}.`,
  profitNone: ({ period }) => `Sina pesa yoyote iliyorekodiwa ${period}. Sema "nimetumia 5000 kwa mbolea" au "nimeuza kilo 200 za mahindi kwa 9000".`,
  profit: ({ period, income, spent, gain, amount }) => `${period[0].toUpperCase()}${period.slice(1)}: mapato ${income}, matumizi ${spent}, kwa hivyo ${gain ? "faida ya" : "hasara ya"} ${amount}.`,
  latest: ({ lines }) => `Za hivi karibuni: ${lines}.`, latestNone: "Bado huna rekodi za pesa.",
  undoNone: "Hakuna cha kufuta.", undone: ({ what, amount, income, kind }) => `Nimeondoa: ${kind === "saving" ? "akiba" : kind === "loan" ? "mkopo" : income ? "mapato" : "matumizi"} ya ${amount} (${what}). Mabadiliko ya ghala hayajarudishwa; niambie ukitaka yasahihishwe.`,
  stockUsed: ({ taken, name, left }) => `Nimerekodi: umetumia ${taken} za ${name}; zimebaki ${left}.`,
  stockUsedNone: ({ name }) => `Sioni ${name} kwenye ghala lako. Sema "ongeza ${name} kwenye ghala" kwanza.`,
  stockUsedTooMuch: ({ have, name, diff }) => `Una ${have} tu za ${name}, kwa hivyo sijabadilisha chochote. Kama hesabu si sahihi, niambie "ongeza ${diff} za ${name} kwenye ghala" kwanza.`,
  stockChanged: ({ name }) => `Kiasi cha ${name} kimebadilika. Sema tena ili niangalie kiasi cha sasa kwanza.`,
  stockAdded: ({ qty, name, now }) => `Nimeongeza ${qty} za ${name} kwenye ghala lako. Sasa una ${now}.`,
  stockFull: "Ghala lako limejaa (vitu mia nne). Ondoa vingine kwanza.",
  stockHave: ({ name, now }) => `Una ${now} za ${name}.`, stockNone: ({ name }) => `Sioni ${name} kwenye ghala lako.`,
  stockList: ({ lines, more }) => `Ghala lako: ${lines}${more ? `; na vitu ${more} zaidi` : ""}.`, stockEmpty: "Ghala lako halina kitu bado. Sema \"ongeza mbolea gunia 2 kwenye ghala\".",
  // numbers that are not clear: nothing is recorded until the person says which
  askAmount: ({ shown }) => `Je, ni ${shown}? Sema ndiyo, au sema kiasi tena.`,
  chooseAmount: ({ a, b }) => `Sijui kama ni ${a} au ${b}, kwa hivyo sijaandika chochote. Sema kiasi tena kwa namba, kwa mfano "${a.replace(/,/g, "")}".`,
  numberUnclear: ({ said }) => `Sijaelewa kiasi "${said}", kwa hivyo sijaandika chochote. Sema tena kwa namba, kwa mfano "4500".`,
  noAmount: "Sijasikia kiasi. Sema tena na kiasi, kwa mfano \"nimeuza mahindi kwa 4500\".",
  tooManyNumbers: "Nimesikia namba nyingi na sijui ipi ni bei. Sema tena, kwa mfano \"nimeuza mahindi gunia 3 kwa 4500\".",
  // credit
  soldCredit: ({ qty, item, buyer, amount, stock, income, when }) => `Nimerekodi: umeuza ${qty ? `${qty} za ` : ""}${item}${buyer ? ` kwa ${buyer}` : ""} kwa ${amount} kwa mkopo${when}.${stock} Sijahesabu kama mapato bado. ${buyer ? `${buyer} akilipa, sema "${buyer} amelipa".` : "Wakati mwingine sema umemuuzia nani, ili nikumbuke."} Mapato ya mwezi huu: ${income}.`,
  boughtCredit: ({ qty, item, seller, amount, category, stock, spent, when }) => `Nimerekodi: umenunua ${qty ? `${qty} za ` : ""}${item}${seller ? ` kutoka kwa ${seller}` : ""} kwa ${amount} (${categorySw(category)}) kwa mkopo${when}.${stock} Ni gharama sasa, na nitakumbuka unadaiwa ${amount}${seller ? ` na ${seller}` : ""}.${seller ? ` Ukilipa, sema "nimemlipa ${seller}".` : ""} Matumizi ya mwezi huu: ${spent}.`,
  notBusiness: ' Kama hiyo si ya biashara yako, sema "futa rekodi ya mwisho" nami nitaiondoa.',
  stockOtherUnit: ({ name, unit }) => ` Unaweka ${name} kwa ${unit}, kwa hivyo sijabadilisha ghala lako. Sema kwa kipimo kilekile ili nilipunguze.`,
  whenShown: ({ when }) => ` (${when})`
};

// something said to be the speaker's own ("simu yangu") from a person with no records: kept, but they are told how to take it back out
const PERSONAL_SW = /\b(?:yangu|wangu|langu|zangu|yetu|wetu|letu|zetu|gari|nyumba|kiwanja)\b/i;
const stripUnit = rest => rest.replace(new RegExp(`\\b(?:${UNIT_WORD})\\s+${NUMBER}\\b|(?<![\\d.,])${NUMBER}\\s*(?:${UNIT_WORD})\\b`, "i"), " ");

// ---- reading a deal: what, how much of it, for how much, with whom, and whether it is on credit ----
// A person: "Juma", "Mama Njeri", "Bwana Otieno Ochieng". Honorifics stay part of the name. Words that are things, not people, are never names.
const HONORIFIC = "mama|baba|mzee|bwana|bw|bi|bibi|dada|kaka|mwalimu|shangazi|mjomba";
const NOT_PERSON = new RegExp(`^(?:nani|yeye|wao|huyu|yule|hawa|wale|mimi|wewe|sisi|nini|gani|ngapi|kiasi|pesa|kwa|na|ya|za|wa|la|cha|kutoka|mkopo|deni|leo|jana|juzi|kesho|kila|bado|ni|ana|amelipa|shillings|dollars|shilingi|sh|shs|ksh|kshs|tsh|ush|bob|wateja|mteja|wanunuzi|mnunuzi|soko|sokoni|duka|dukani|jirani|majirani|watu|mtu|wengine|mwingine|${UNIT_WORD}|${[...Object.keys(numbers.UNIT_WORDS), ...Object.keys(numbers.TENS_WORDS), ...Object.keys(numbers.MAGNITUDE_WORDS), "nusu", "sifuri"].join("|")})$`, "i");
const isHonorific = word => new RegExp(`^(?:${HONORIFIC})$`, "i").test(word);
const nameWord = word => /^[A-Za-z][A-Za-z']{1,20}$/.test(word) && !NOT_PERSON.test(word) && !isHonorific(word);
// The name at the start of a text: { name, rest } or null. A second word joins a name only when both are written with capitals ("Juma Otieno").
function readName(text) {
  const words = clean(text).split(" "); if (!words[0]) return null;
  let n = 0;
  if (isHonorific(words[0]) && words[1] && nameWord(words[1])) n = 2; else if (nameWord(words[0])) n = 1; else return null;
  if (/^[A-Z]/.test(words[n - 1]) && words[n] && /^[A-Z]/.test(words[n]) && nameWord(words[n]) && n < 3) n += 1;
  return { name: titleCase(words.slice(0, n).join(" ")), rest: words.slice(n).join(" ") };
}
// Said about a sale: "kwa mkopo", "bado hajalipa", "atalipa baadaye". Said about a purchase: "kwa mkopo", "nitalipa baadaye", "sijalipa bado".
const LATER = "(?:baadaye|kesho|keshokutwa|wiki\\s+ijayo|mwezi\\s+ujao|jumatatu|jumanne|jumatano|alhamisi|ijumaa|jumamosi|jumapili|mwisho\\s+wa\\s+mwezi)";
const CREDIT_SALE = new RegExp(`\\b(?:kwa\\s+(?:mkopo|deni)|mkopo|(?:bado\\s+)?(?:hajalipa|hawajalipa|hajanilipa|hawajanilipa)(?:\\s+bado)?|(?:atalipa|watalipa|atanilipa|watanilipa|analipa)\\s+${LATER}|ananidai|wananidai)\\b`, "gi");
const CREDIT_BUY = new RegExp(`\\b(?:kwa\\s+(?:mkopo|deni)|mkopo|(?:bado\\s+)?sijalipa(?:\\s+bado)?|(?:nitalipa|tutalipa)\\s+${LATER}|nadaiwa|ninadaiwa)\\b`, "gi");
const EACH = /\b(?:kwa\s+)?kila\s+(?:mmoja|moja|kimoja|kitu|kipande|mfuko|gunia|kilo|debe|trei|kreti|fungu|chupa)\b/i;
// Household costs are kept, but are not the farm's (the English tool does the same): school fees, a chama contribution, a wedding, church.
const HOUSEHOLD_SW = /\b(?:ada(?: za| ya)? shule|karo|harusi|mazishi|msiba|kanisa|kanisani|zaka|sadaka|chama|mchango|michango|harambee|nyumbani|nguo|mavazi|vocha|airtime)\b/i;
const FARM_WORDS_SW = /\b(?:shamba|mbegu|mbolea|mifugo|mahindi|kuku|ng'?ombe|mbuzi|dawa|vibarua|kibarua|usafiri|nauli|kodi ya shamba)\b/i;
const CUR = "shillings|dollars|sh|shs|ksh|kshs|kes|tsh|tshs|ush|ugx";
const SPOKEN_CURRENCY = text => text.replace(/\bshilingi\b|\bshillingi\b/gi, "shillings").replace(/\bdola\b/gi, "dollars").replace(/\bbob\s*(?=\d)/gi, "shillings ").replace(/(\d[\d,]*(?:\.\d+)?)\s*bobs?\b/gi, "$1 shillings").replace(/(\d[\d,]*(?:\.\d+)?)\s*\/[=-](?![\w])/g, "$1 shillings");

// The day an entry is for: "leo" (today), "jana" (yesterday), "juzi" (the day before). { day, text } with the day word taken out of the text.
function takeDay(ctx, text) {
  const m = /\b(leo|jana|juzi)\b/i.exec(text);
  if (!m) return { day: ctx.today, text, said: "" };
  const word = m[1].toLowerCase();
  return { day: word === "leo" ? ctx.today : addDays(ctx.today, word === "jana" ? -1 : -2), text: clean(text.slice(0, m.index) + " " + text.slice(m.index + m[0].length)), said: word };
}

// "mahindi magunia matatu elfu nne mia tano" -> { item: "mahindi", quantity: gunia 3, money: 4500, ... }. Nothing is guessed:
//  `ambiguous` (a number with two readings) and `unclear` (more numbers than the sentence can use) stop the entry; the caller asks.
function readDeal(rest, party, preset = {}) {
  const normalized = numbers.normalizeNumbers(clean(rest));
  let body = clean(SPOKEN_CURRENCY(normalized.text).replace(/\b(?:kwa|kupitia|via)\s+(?:m-?pesa|airtel money|pesa taslimu|cash|till|paybill|benki)\b/gi, " "));
  const credit = ((preset.sale ?? party === "kwa") ? CREDIT_SALE : CREDIT_BUY); const isCredit = new RegExp(credit.source, "i").test(body);
  if (isCredit) body = clean(body.replace(credit, " "));
  let who = preset.party || "";
  // who first (it can come after the price: "kwa shilingi 30000 kutoka kwa Juma"), then the price
  if (!who && !preset.noParty) {
    for (const found of body.matchAll(new RegExp(`\\b${party}\\s+(?=\\S)`, "gi"))) {
      const after = body.slice(found.index + found[0].length); const named = readName(after);
      if (!named || !/^(?:$|kwa\b|@|\d|(?:shillings|dollars|sh|shs|ksh|kshs|tsh|ush)\b|na\b)/i.test(named.rest)) continue;
      who = named.name; body = clean(`${body.slice(0, found.index)} ${named.rest}`); break;
    }
  }
  const each = EACH.test(body); if (each) body = clean(body.replace(EACH, " "));
  const quantity = parseQuantitySw(body);
  let money = null; let count = null; let unclear = false;
  const per = new RegExp(`\\bkwa\\s+((?:${CUR})\\s*)?(${NUMBER})\\s*(${CUR})?\\s*(?:kwa|kila|/)\\s*(${UNIT_WORD})\\b`, "i").exec(body);
  let priceText = "";
  if (per && quantity) { money = { amount: round(Number(per[2].replace(/,/g, "")) * quantity.value, 2), currency: /shillings/i.test((per[1] || "") + (per[3] || "")) ? "shillings" : "" }; priceText = per[0]; }
  else {
    // every number that is not the quantity: a price is next to a currency word or "kwa"; the last one otherwise
    const rest2 = quantity ? body.replace(quantity.matched, " ") : body;
    const hits = [...rest2.matchAll(new RegExp(`(?<![\\d.,])(${NUMBER})(?![\\d.,]*\\d)`, "g"))].map(hit => {
      const before = rest2.slice(0, hit.index); const after = rest2.slice(hit.index + hit[0].length); const prev = (before.match(/([A-Za-z']+)\s*$/) || [])[1] || ""; const next = (after.match(/^\s*([A-Za-z']+)/) || [])[1] || "";
      return { raw: hit[1], index: hit.index, length: hit[0].length, prev: prev.toLowerCase(), next: next.toLowerCase(), strong: new RegExp(`^(?:${CUR})$`, "i").test(prev) || new RegExp(`^(?:${CUR})$`, "i").test(next), viaKwa: prev.toLowerCase() === "kwa", time: numbers.NOT_MONEY_BEFORE.has(prev.toLowerCase()) };
    });
    const usable = hits.filter(hit => hit.strong || !hit.time);
    const strong = usable.filter(hit => hit.strong); const viaKwa = usable.filter(hit => hit.viaKwa);
    const pick = strong[strong.length - 1] || viaKwa[viaKwa.length - 1] || usable[usable.length - 1] || null;
    if (pick) {
      const leftover = usable.filter(hit => hit !== pick);
      if (leftover.length === 1 && !quantity && !each && Number.isInteger(Number(leftover[0].raw)) && Number(leftover[0].raw) > 0) count = Number(leftover[0].raw);
      else if (leftover.length) unclear = true;
      const currencyAround = new RegExp(`(?:\\b(${CUR})\\s*)?${pick.raw.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?:\\s*(${CUR})\\b)?`, "i").exec(rest2.slice(Math.max(0, pick.index - 12), pick.index + pick.length + 12));
      const spoken = (currencyAround && (currencyAround[1] || currencyAround[2])) || "";
      money = { amount: round(Number(pick.raw.replace(/,/g, "")), 2), currency: /^(?:shillings|sh|shs)$/i.test(spoken) ? "shillings" : /^dollars$/i.test(spoken) ? "dollars" : "" };
      if (/^(?:ksh|kshs|kes)$/i.test(spoken)) money.currency = "KSh"; else if (/^(?:tsh|tshs)$/i.test(spoken)) money.currency = "TSh"; else if (/^(?:ush|ugx)$/i.test(spoken)) money.currency = "UGX";
      priceText = pick.raw;
      if (money.currency === "dollars") money.currency = "$";
    }
  }
  if (money && each) { const many = quantity?.value ?? count; if (many) money = { ...money, amount: round(money.amount * many, 2) }; }
  // the words left after the quantity, the price and the people are what was sold or bought
  let left = body;
  if (quantity) left = left.replace(quantity.matched, " ");
  if (per && quantity) left = left.replace(per[0], " ");
  else if (priceText) left = left.replace(new RegExp(`(?:\\bkwa\\s+)?(?:\\b(?:${CUR})\\s*)?(?<![\\d.,])${priceText.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?![\\d.,]*\\d)(?:\\s*(?:${CUR})\\b)?`, "i"), " ");
  if (count) left = left.replace(new RegExp(`(?<![\\d.,])${count}(?![\\d.,])`), " ");
  const item = clean(clean(left).replace(/^(?:kwa|@)\s+/i, "").replace(/\b(?:kwa|@)\s*$/i, "").replace(/^(?:za|ya|wa|la)\s+/i, "").replace(/\s+(?:kwa|@)$/i, "").replace(/\s+(?:ya|za|wa|la|cha)$/i, "")).toLowerCase();
  return { quantity, count, item, party: who, money, credit: isCredit, each, unclear, ambiguous: normalized.ambiguous ? (parseQuantitySw(clean(rest))?.ambiguous ? { kind: "quantity", values: parseQuantitySw(clean(rest)).ambiguous } : { kind: "money", values: normalized.ambiguous.values, span: normalized.ambiguous }) : null, invalid: normalized.invalid };
}

const describeRecord = record => `${swahiliItem(record.data.item || "") || categorySw(record.data.category)}${record.data.party ? ` (${record.data.party})` : ""}`;
const monthOf = (ctx, records) => { const from = `${ctx.today.slice(0, 7)}-01`; return records.filter(record => record.data.day >= from && record.data.day <= ctx.today); };
const totalsText = totals => { const entries = Object.entries(totals); return entries.length ? entries.map(([currency, amount]) => moneyShown(amount, currency)).join(" na ") : "0"; };


// Numbers that cannot be read for sure stop the entry: nothing is recorded until the person says which. "4.500" is asked as a yes/no question ("Je, ni 4,500?"); the
// answer "ndiyo" records the sentence again with that reading. Two readings that differ a lot ("elfu mia tano") are never guessed: the person says the number again.
const fmtNumber = value => Number(value).toLocaleString("en", { maximumFractionDigits: 3 });
async function askAbout(ctx, text, deal) {
  if (deal.invalid) return SW.numberUnclear({ said: deal.invalid.text });
  if (!deal.ambiguous) return null;
  const span = numbers.normalizeNumbers(text).ambiguous;
  if (!span) return SW.numberUnclear({ said: clean(text).slice(0, 30) });
  const values = deal.ambiguous.kind === "quantity" ? [...span.values].reverse() : span.values;
  if (!/^\d/.test(span.text)) { const sorted = [...values].sort((a, b) => a - b); return SW.chooseAmount({ a: fmtNumber(sorted[0]), b: fmtNumber(sorted[1]) }); }
  const again = clean(text.slice(0, span.start) + numbers.digitString(values[0]) + text.slice(span.end));
  await ctx.store.setSession({ tenantId: ctx.tenantId, userId: ctx.userId, session: { collection: "_confirm", answers: {}, asking: "confirm", action: { type: "sw-amount", text: again, from: numbers.digitString(values[0]), language: "sw" }, expiresAt: new Date(Date.now() + 10 * 60000).toISOString() } });
  return SW.askAmount({ shown: fmtNumber(values[0]) });
}

const whenOf = (ctx, day) => (day && day !== ctx.today ? SW.whenShown({ when: describeDaySw(day, ctx.today) }) : "");
const refusedText = refused => (/five thousand/.test(refused || "") ? SW.full : SW.amountWrong);

// A sale, recorded as the English tool records it ("sold ... on credit" when it is on credit), taking the goods out of stock when they are in stock.
async function sellRecord(ctx, deal, { day = ctx.today } = {}) {
  const scope = { tenantId: ctx.tenantId, userId: ctx.userId };
  const run = day === ctx.today ? ctx : { ...ctx, entryDay: day };
  const item = englishItem(deal.item); const fresh = !(await ctx.hasFarmData());
  const result = await recordMoney(run, { type: "income", category: incomeCategorySw(deal.item), amount: deal.money.amount, currency: deal.money.currency, party: deal.party, item, qty: deal.quantity?.value ?? deal.count ?? null, unit: deal.quantity?.unit || "", note: `sold ${item}`, ...(deal.credit ? { unpaid: true } : {}) });
  if (result.refused) return refusedText(result.refused);
  let stock = "";
  if (deal.quantity) {
    // Same bug as money.js's English "sold" stock deduction, same fix, duplicated by hand in Swahili.
    for (let attempt = 0; attempt < 5; attempt += 1) {
      // Only goods of the same kind come out of stock (selling mahindi must not take kilos out of the maize SEED), and only when one stock record matches.
      const list = await ctx.store.list({ ...scope, collection: "stock" }); const same = findItems(list, item).filter(entry => entry.data.category === "other" || entry.data.category === categoryOf(item)); const found = same.filter(entry => entry.data.unit === deal.quantity.unit);
      if (same.length === 1 && !found.length) { stock = SW.stockOtherUnit({ name: swahiliItem(same[0].data.name), unit: unitLabelSw(1, same[0].data.unit).split(" ")[0] }); break; }
      if (found.length !== 1) break;
      const left = round(Math.max(0, found[0].data.qty - deal.quantity.value), 3);
      const applied = await ctx.store.update({ ...scope, record: { ...found[0], data: { ...found[0].data, qty: left } }, casField: "qty", casValue: found[0].data.qty });
      if (!applied) continue;
      stock = SW.stockOut({ taken: unitLabelSw(Math.min(deal.quantity.value, found[0].data.qty), deal.quantity.unit), left: unitLabelSw(left, deal.quantity.unit), less: deal.quantity.value > found[0].data.qty, low: found[0].data.low !== undefined && found[0].data.low !== null && left <= found[0].data.low ? ` Angalia: kiasi hicho kiko chini ya kiwango chako cha chini cha ${unitLabelSw(found[0].data.low, found[0].data.unit)}.` : "" });
      break;
    }
  }
  const args = { qty: deal.quantity ? unitLabelSw(deal.quantity.value, deal.quantity.unit) : "", item: deal.count ? `${deal.item} ${deal.count}` : deal.item, buyer: deal.party, amount: moneyShown(deal.money.amount, result.record.data.currency), stock, income: totalsText(sum(monthOf(ctx, result.all), "income")), when: whenOf(ctx, day) };
  const reply = deal.credit ? SW.soldCredit(args) : SW.sold(args);
  return fresh && PERSONAL_SW.test(deal.item) ? `${reply}${SW.notBusiness}` : reply;
}

// A purchase; bought on credit, the cost counts now and what is still owed to the seller is kept until it is paid (as the English tool keeps it).
async function buyRecord(ctx, deal, { day = ctx.today } = {}) {
  const run = day === ctx.today ? ctx : { ...ctx, entryDay: day };
  const category = expenseCategorySw(deal.item); const item = englishItem(deal.item); const fresh = !(await ctx.hasFarmData());
  const result = await recordMoney(run, { type: "expense", category, amount: deal.money.amount, currency: deal.money.currency, party: deal.party, item, qty: deal.quantity?.value ?? deal.count ?? null, unit: deal.quantity?.unit || "", note: `bought ${item}`, ...(deal.credit ? { unpaid: true, owing: deal.money.amount } : {}) });
  if (result.refused) return refusedText(result.refused);
  let stock = "";
  if (deal.quantity && ["seed", "fertiliser", "chemicals", "feed", "equipment"].includes(category)) {
    const added = await addStock(ctx, item, deal.quantity);
    if (added) stock = SW.stockIn({ qty: unitLabelSw(added.data.qty, added.data.unit), name: swahiliItem(added.data.name) });
  }
  const args = { qty: deal.quantity ? unitLabelSw(deal.quantity.value, deal.quantity.unit) : "", item: deal.count ? `${deal.item} ${deal.count}` : deal.item, seller: deal.party, amount: moneyShown(deal.money.amount, result.record.data.currency), category, stock, spent: totalsText(sum(monthOf(ctx, result.all), "expense")), when: whenOf(ctx, day) };
  const reply = deal.credit ? SW.boughtCredit(args) : SW.bought(args);
  return fresh && category === "other" && PERSONAL_SW.test(deal.item) ? `${reply}${SW.notBusiness}` : reply;
}


// What was spent, earned or gained in a period (periodWord is Swahili: "leo", "wiki hii", "mwezi huu"...). `what` narrows spending to one kind ("usafiri").
async function totalsAnswer(ctx, metric, periodWord = "", what = "") {
  const rowsAll = await ctx.store.list({ tenantId: ctx.tenantId, userId: ctx.userId, collection: "money" });
  const period = periodSw(periodWord, ctx.today, metric === "profit" ? "this year" : "this month");
  const inPeriod = rowsAll.filter(record => record.data.day >= period.from && record.data.day <= period.to);
  if (metric === "expense") {
    let rows = inPeriod.filter(record => record.data.type === "expense");
    if (what) { const english = englishItem(what); rows = rows.filter(record => `${record.data.item || ""} ${record.data.category} ${record.data.note || ""}`.toLowerCase().includes(english) || `${record.data.note || ""}`.toLowerCase().includes(what)); }
    return rows.length ? SW.spentTotal({ total: totalsText(sum(rows, "expense")), what, period: period.label, n: rows.length }) : SW.spentNone({ what, period: period.label });
  }
  if (metric === "income") {
    const rows = inPeriod.filter(record => record.data.type === "income" && !record.data.unpaid);
    return rows.length ? SW.earnedTotal({ total: totalsText(sum(rows, "income")), period: period.label, n: rows.length }) : SW.earnedNone({ period: period.label });
  }
  if (!inPeriod.length) return SW.profitNone({ period: period.label });
  const profit = profitOf(inPeriod);
  return SW.profit({ period: period.label, income: totalsText(sum(inPeriod, "income")), spent: totalsText(sum(inPeriod, "expense")), gain: Object.values(profit).every(value => value >= 0), amount: Object.entries(profit).map(([currency, value]) => moneyShown(Math.abs(value), currency)).join(" na ") });
}

async function handle(ctx) {
  try { return await handleSwahili({ ...ctx, anyGoods: true }); } catch (error) { if (error === NOT_FARM) return null; throw error; }
}

async function handleSwahili(ctx) {
  const t = clean(ctx.text).replace(/[.!?]+$/g, ""); const lower = t.toLowerCase();
  if (!/\b(?:nime|nili|tume|tuli|nina|tuna|matumizi|mapato|mauzo|faida|gharama|ghala|hifadhi|stoo|futa|ondoa|ongeza|onyesha|orodhesha)/i.test(lower)) return null;
  const scope = { tenantId: ctx.tenantId, userId: ctx.userId };
  const recordsOf = () => ctx.store.list({ ...scope, collection: "money" });
  let m;

  // ---- selling: "Nimeuza kilo 200 za mahindi kwa Amina kwa 9000", "Nimeuza mahindi magunia matatu elfu nne mia tano", "... kwa mkopo" ----
  if ((m = /^(?:nimeuza|tumeuza|niliuza|tuliuza)\s+(.+)$/i.exec(t))) {
    const { day, text: body } = takeDay(ctx, m[1]);
    const deal = readDeal(body, "kwa");
    const doubt = await askAbout(ctx, t, deal); if (doubt) return doubt;
    if (!deal.item || deal.item.length > 50) return null;
    if (!deal.money) return SW.noAmount;
    if (deal.unclear) return SW.tooManyNumbers;
    if (!(deal.money.amount > 0)) return null;
    return await sellRecord(ctx, deal, { day });
  }

  // ---- spending: "Nimetumia 5000 kwa mbolea", "Nimelipa kodi elfu tatu" ----
  if ((m = /^(?:nimetumia|tumetumia|nilitumia|tulitumia|nimelipa|tumelipa|nililipa|tulilipa|nimetoa|tumetoa|nimechangia|tumechangia|nilichangia)\s+(.+)$/i.exec(t)) && !/^(?:kiasi gani|pesa ngapi)/i.test(m[1])) {
    const { day, text: body } = takeDay(ctx, m[1]);
    const deal = readDeal(body, "kwa", { sale: false, noParty: true });
    if (deal.money && !deal.quantity) {
      const doubt = await askAbout(ctx, t, deal); if (doubt) return doubt;
      if (deal.unclear) return SW.tooManyNumbers;
      const what = deal.item.replace(/^(?:kununua|kulipia|katika|kwa)\s+/i, "").slice(0, 60);
      if (!(deal.money.amount > 0) || !what) return null;
      const household = HOUSEHOLD_SW.test(what) && !FARM_WORDS_SW.test(what);
      const category = household ? "household" : expenseCategorySw(what);
      const run = day === ctx.today ? ctx : { ...ctx, entryDay: day };
      const result = await recordMoney(run, { type: "expense", category, amount: deal.money.amount, currency: deal.money.currency, item: englishItem(what).slice(0, 60), note: what.slice(0, 80) });
      if (result.refused) return refusedText(result.refused);
      return SW.spent({ amount: moneyShown(deal.money.amount, result.record.data.currency), what: what.toLowerCase(), category, spent: totalsText(sum(monthOf(ctx, result.all), "expense")), when: whenOf(ctx, day), note: household ? SW.householdNote : "" });
    }
  }

  // ---- buying: "Nimenunua gunia 2 za mbolea kwa 30000 kutoka kwa Juma", "Nimeuziwa mbolea na Juma elfu mbili" ----
  if (((m = /^(?:nimenunua|tumenunua|nilinunua|tulinunua)\s+(.+)$/i.exec(t)) && !/\b(?:nimeuza|tumeuza)\b/i.test(t)) || (m = /^(?:nimeuziwa|tumeuziwa|niliuziwa)\s+(.+)$/i.exec(t))) {
    const { day, text: body } = takeDay(ctx, m[1]);
    const deal = readDeal(body, /^(?:nimeuziwa|tumeuziwa|niliuziwa)/i.test(t) ? "na" : "kutoka kwa", { sale: false });
    const doubt = await askAbout(ctx, t, deal); if (doubt) return doubt;
    if (!deal.item || deal.item.length > 60) return null;
    if (!deal.money) return SW.noAmount;
    if (deal.unclear) return SW.tooManyNumbers;
    if (!(deal.money.amount > 0)) return null;
    return await buyRecord(ctx, deal, { day });
  }

  // ---- paying someone: "Nimemlipa Juma 5000 kwa kupalilia", "Nimemlipa Juma elfu tano kwa kupalilia" ----
  if ((m = /^(?:nimemlipa|tumemlipa|nilimlipa|tulimlipa)\s+(.+)$/i.exec(t))) {
    const { day, text: body } = takeDay(ctx, m[1]);
    const named = readName(body); if (!named) return null;
    const deal = readDeal(named.rest, "kwa", { sale: false, party: named.name });
    const doubt = await askAbout(ctx, t, deal); if (doubt) return doubt;
    if (!deal.money || !(deal.money.amount > 0)) return null;
    if (deal.unclear) return SW.tooManyNumbers;
    const forWhat = clean(deal.item.replace(/^(?:kwa|kununua|kulipia)\s+/i, "")) || "kazi";
    const category = expenseCategorySw(forWhat) === "other" ? "labour" : expenseCategorySw(forWhat);
    const run = day === ctx.today ? ctx : { ...ctx, entryDay: day };
    const result = await recordMoney(run, { type: "expense", category, amount: deal.money.amount, currency: deal.money.currency, party: named.name, item: englishItem(forWhat).slice(0, 60), note: `paid ${named.name}` });
    if (result.refused) return refusedText(result.refused);
    return SW.paid({ who: named.name, amount: moneyShown(deal.money.amount, result.record.data.currency), what: forWhat.toLowerCase().slice(0, 60), when: whenOf(ctx, day) });
  }

  // ---- asking about money ----
  if ((m = /^(?:nimetumia kiasi gani|matumizi yangu|gharama zangu|nilitumia kiasi gani|jumla ya matumizi yangu|nimetumia)(?:\s+kwa\s+(.+?))?(?:\s+(leo|jana|wiki hii|wiki iliyopita|mwezi huu|mwezi uliopita|msimu huu|mwaka huu))?$/i.exec(t)) && (/^(?:nimetumia kiasi gani|nilitumia kiasi gani|matumizi yangu|gharama zangu|jumla ya matumizi yangu)/i.test(t))) {
    return totalsAnswer(ctx, "expense", m[2] || "", m[1] ? clean(m[1]).toLowerCase() : "");
  }
  if ((m = /^(?:nimepata kiasi gani|nimeuza kiasi gani|mapato yangu|mauzo yangu|jumla ya mapato yangu)(?:\s+(leo|jana|wiki hii|wiki iliyopita|mwezi huu|mwezi uliopita|msimu huu|mwaka huu))?$/i.exec(t))) {
    return totalsAnswer(ctx, "income", m[1] || "");
  }
  if ((m = /^(?:faida yangu|nina faida|nimepata faida|shamba langu linaendeleaje|hali ya faida yangu)(?:\s+(leo|jana|wiki hii|wiki iliyopita|mwezi huu|mwezi uliopita|msimu huu|mwaka huu))?$/i.exec(t))) {
    return totalsAnswer(ctx, "profit", m[1] || "");
  }
  if (/^(?:onyesha|orodhesha) (?:rekodi zangu za pesa|pesa zangu|matumizi yangu ya hivi karibuni|mauzo yangu ya hivi karibuni)$/.test(lower)) {
    const rows = (await recordsOf()).slice(0, 8);
    return rows.length ? SW.latest({ lines: rows.map(record => `${describeDaySw(record.data.day, ctx.today)} ${record.data.type === "income" ? "+" : "-"}${moneyShown(record.data.amount, record.data.currency)} ${describeRecord(record)}`).join("; ") }) : SW.latestNone;
  }
  if (/^(?:futa|ondoa) (?:rekodi|ingizo|muamala) (?:ya|wa) mwisho(?: (?:ya|wa) (?:pesa|matumizi|mauzo|mapato|manunuzi))?$/.test(lower)) {
    const rows = await recordsOf();
    const last = rows.find(record => /matumizi|manunuzi/.test(lower) ? record.data.type === "expense" : /mauzo|mapato/.test(lower) ? record.data.type === "income" : true);
    if (!last) return SW.undoNone;
    await ctx.store.remove({ ...scope, memoryId: last.memoryId });
    return SW.undone({ what: describeRecord(last), amount: moneyShown(last.data.amount, last.data.currency), income: last.data.type === "income", kind: last.data.type === "saving" ? "saving" : last.data.loan ? "loan" : "" });
  }

  // ---- stock: "Ongeza mbolea gunia 2 kwenye ghala", "Nimetumia mbolea gunia 1", "Nina mbolea kiasi gani", "Ghala langu" ----
  if ((m = /^(?:ongeza|weka)\s+(.+?)\s+(?:kwenye|katika|ndani ya|kwa)\s+(?:ghala|hifadhi|stoo)(?: langu| yangu)?$/i.exec(t))) {
    const quantity = parseQuantitySw(m[1]); const name = clean(stripUnit(m[1])).replace(/^(?:za|ya|wa|la)\s+/i, "").toLowerCase();
    if (!quantity || !name || name.length > 60) return null;
    const added = await addStock(ctx, englishItem(name), quantity);
    if (!added) return SW.stockFull;
    return SW.stockAdded({ qty: unitLabelSw(quantity.value, quantity.unit), name, now: unitLabelSw(added.data.qty, added.data.unit) });
  }
  if ((m = /^(?:nimetumia|tumetumia)\s+(.+)$/i.exec(t)) && parseQuantitySw(m[1]) && !parseMoneySw(stripUnit(m[1]))) {
    const quantity = parseQuantitySw(m[1]); const name = clean(stripUnit(m[1])).replace(/^(?:za|ya|wa|la)\s+/i, "").toLowerCase();
    if (!name || name.length > 60) return null;
    const list = await ctx.store.list({ ...scope, collection: "stock" }); const found = findItems(list, englishItem(name)).filter(entry => entry.data.unit === quantity.unit);
    if (found.length !== 1) return SW.stockUsedNone({ name });
    // Found live (further follow-up sweep): unlike inventory.js's English "used X of Y" deduction
    // (which refuses when the stated quantity exceeds what's recorded, so a mistaken/implausible
    // figure never silently corrupts the count), this Swahili command had no such guard at all -- it
    // just clamped to zero and reported success as if nothing were wrong. A Swahili speaker saying
    // "used 10 bags" against 2 recorded bags got their real stock silently zeroed with no warning,
    // strictly worse protection than the identical English action.
    if (quantity.value > found[0].data.qty) return SW.stockUsedTooMuch({ have: unitLabelSw(found[0].data.qty, found[0].data.unit), name: found[0].data.name, diff: unitLabelSw(round(quantity.value - found[0].data.qty, 3), quantity.unit) });
    const left = round(Math.max(0, found[0].data.qty - quantity.value), 3);
    // Same bug as inventory.js's English "used X of Y" deduction, same fix, duplicated by hand in Swahili.
    const applied = await ctx.store.update({ ...scope, record: { ...found[0], data: { ...found[0].data, qty: left } }, casField: "qty", casValue: found[0].data.qty });
    if (!applied) return SW.stockChanged({ name: found[0].data.name });
    return SW.stockUsed({ taken: unitLabelSw(quantity.value, quantity.unit), name, left: unitLabelSw(left, quantity.unit) });
  }
  if ((m = /^(?:nina|tuna)\s+(.+?)\s+kiasi gani(?: (?:ghalani|kwenye ghala|stoo))?$/i.exec(t))) {
    const name = clean(m[1]).toLowerCase(); const found = findItems(await ctx.store.list({ ...scope, collection: "stock" }), englishItem(name));
    if (!found.length) return null; // "nina X kiasi gani" about something that is not in stock is left to normal planning
    return SW.stockHave({ name, now: found.map(item => unitLabelSw(item.data.qty, item.data.unit)).join(" na ") });
  }
  if (/^(?:ghala langu|hifadhi yangu|stoo yangu|onyesha (?:ghala langu|hifadhi yangu|stoo yangu)|nina nini (?:ghalani|kwenye ghala))$/.test(lower)) {
    const list = await ctx.store.list({ ...scope, collection: "stock" });
    if (!list.length) return SW.stockEmpty;
    return SW.stockList({ lines: list.slice(0, 10).map(item => `${swahiliItem(item.data.name)} ${unitLabelSw(item.data.qty, item.data.unit)}`).join("; "), more: Math.max(0, list.length - 10) });
  }
  return null;
}

module.exports = Object.freeze({ handle, SW, readDeal, readName, takeDay, sellRecord, buyRecord, askAbout, totalsAnswer, monthOf, totalsText, describeRecord, HONORIFIC, HOUSEHOLD_SW, FARM_WORDS_SW, SPOKEN_CURRENCY, CREDIT_SALE, CREDIT_BUY });
