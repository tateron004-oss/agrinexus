"use strict";

const { clean, titleCase, round } = require("./parse.js");
const { recordMoney, sum, profitOf, NOT_FARM } = require("./money.js");
const { addStock, findItems } = require("./inventory.js");
const { parseQuantitySw, unitLabelSw, parseMoneySw, moneyShown, CURRENCY_WORDS, englishItem, incomeCategorySw, expenseCategorySw, periodSw, describeDaySw, swahiliItem, categorySw, UNIT_WORD, NUMBER } = require("../i18n/swahili-words.js");

// The farm's money and stock, in Swahili. The same records the English tools keep (the same collections, the same shapes), so a farmer can say a sale in
// Swahili and read the summary in English, or the other way round. Every phrase here starts with a Swahili first-person verb ("nimeuza", "nimenunua",
// "nimetumia", "nimemlipa") or a Swahili question, so English talk and everything else falls straight through to the other tools.
// First draft: a fluent speaker must review the wording before it is relied on. Kyro records exactly what the farmer says and adds nothing.
const SW = {
  full: "Rekodi zako za pesa zimejaa (maingizo elfu tano). Niombe muhtasari, kisha ondoa baadhi.",
  sold: ({ qty, item, buyer, amount, stock, income }) => `Nimerekodi: umeuza ${qty ? `${qty} za ` : ""}${item}${buyer ? ` kwa ${buyer}` : ""} kwa ${amount}.${stock} Mapato ya mwezi huu: ${income}.`,
  stockOut: ({ taken, left, less }) => ` Nimetoa ${taken} kwenye ghala lako${less ? " (ulikuwa na kidogo kuliko ulichouza, kwa hivyo sasa ni sifuri)" : `; zimebaki ${left}`}.`,
  spent: ({ amount, what, category, spent }) => `Nimerekodi: umetumia ${amount} kwa ${what}${categorySw(category) === what ? "" : ` (${categorySw(category)})`}. Matumizi ya mwezi huu: ${spent}.`,
  bought: ({ qty, item, seller, amount, category, stock, spent }) => `Nimerekodi: umenunua ${qty ? `${qty} za ` : ""}${item}${seller ? ` kutoka kwa ${seller}` : ""} kwa ${amount} (${categorySw(category)}).${stock} Matumizi ya mwezi huu: ${spent}.`,
  stockIn: ({ qty, name }) => ` Nimeongeza kwenye ghala lako (sasa una ${qty} za ${name}).`,
  paid: ({ who, amount, what }) => `Nimerekodi: umemlipa ${who} ${amount} kwa ${what}.`,
  spentTotal: ({ total, what, period, n }) => `Ulitumia ${total}${what ? ` kwa ${what}` : ""} ${period} (maingizo ${n}).`,
  spentNone: ({ what, period }) => `Sina matumizi ${what ? `ya ${what} ` : ""}yaliyorekodiwa ${period}.`,
  earnedTotal: ({ total, period, n }) => `Ulipata ${total} ${period} (maingizo ${n}).`,
  earnedNone: ({ period }) => `Sina mapato yaliyorekodiwa ${period}.`,
  profitNone: ({ period }) => `Sina pesa yoyote iliyorekodiwa ${period}. Sema "nimetumia 5000 kwa mbolea" au "nimeuza kilo 200 za mahindi kwa 9000".`,
  profit: ({ period, income, spent, gain, amount }) => `${period[0].toUpperCase()}${period.slice(1)}: mapato ${income}, matumizi ${spent}, kwa hivyo ${gain ? "faida ya" : "hasara ya"} ${amount}.`,
  latest: ({ lines }) => `Za hivi karibuni: ${lines}.`, latestNone: "Bado huna rekodi za pesa.",
  undoNone: "Hakuna cha kufuta.", undone: ({ what, amount, income }) => `Nimeondoa: ${income ? "mapato" : "matumizi"} ya ${amount} (${what}). Mabadiliko ya ghala hayajarudishwa; niambie ukitaka yasahihishwe.`,
  stockUsed: ({ taken, name, left }) => `Nimerekodi: umetumia ${taken} za ${name}; zimebaki ${left}.`,
  stockUsedNone: ({ name }) => `Sioni ${name} kwenye ghala lako. Sema "ongeza ${name} kwenye ghala" kwanza.`,
  stockAdded: ({ qty, name, now }) => `Nimeongeza ${qty} za ${name} kwenye ghala lako. Sasa una ${now}.`,
  stockFull: "Ghala lako limejaa (vitu mia nne). Ondoa vingine kwanza.",
  stockHave: ({ name, now }) => `Una ${now} za ${name}.`, stockNone: ({ name }) => `Sioni ${name} kwenye ghala lako.`,
  stockList: ({ lines, more }) => `Ghala lako: ${lines}${more ? `; na vitu ${more} zaidi` : ""}.`, stockEmpty: "Ghala lako halina kitu bado. Sema \"ongeza mbolea gunia 2 kwenye ghala\"."
};

const stripUnit = rest => rest.replace(new RegExp(`\\b(?:${UNIT_WORD})\\s+${NUMBER}\\b|(?<![\\d.,])${NUMBER}\\s*(?:${UNIT_WORD})\\b`, "i"), " ");

// "gunia 3 za mbolea kwa 30000 kutoka kwa Juma" -> { quantity, item, party, money }. The price may be the total ("kwa 9000") or per unit ("kwa 50 kwa kilo").
function readDeal(rest, party) {
  const quantity = parseQuantitySw(rest);
  let body = clean(rest); let money = null; let who = "";
  // who first (it can come after the price: "kwa shilingi 30000 kutoka kwa Juma"), then the price
  const partyRe = new RegExp(`\\b${party}\\s+(?:(?:mama|mzee|bwana|bi|bw|mteja|mfanyabiashara)\\s+)?([A-Za-z][A-Za-z']{1,20}(?:\\s+[A-Za-z][A-Za-z']{1,20})?)(?=\\s+(?:kwa|@)\\b|$)`, "gi");
  for (const found of body.matchAll(partyRe)) {
    if (CURRENCY_WORDS.test(found[1]) || new RegExp(`^(?:${UNIT_WORD})\\b`, "i").test(found[1])) continue;
    who = titleCase(found[1]); body = clean(body.slice(0, found.index) + " " + body.slice(found.index + found[0].length)); break;
  }
  const per = new RegExp(`\\bkwa\\s+((?:shilingi|sh|ksh|tsh|ush)\\s*)?(${NUMBER})\\s*(shilingi|sh|ksh|tsh|ush)?\\s*(?:kwa|kila|/)\\s*(${UNIT_WORD})\\b`, "i").exec(body);
  if (per && quantity) { money = { amount: round(Number(per[2].replace(/,/g, "")) * quantity.value, 2), currency: /shilingi/i.test((per[1] || "") + (per[3] || "")) ? "shillings" : "" }; body = clean(body.replace(per[0], " ")); }
  else { const priceAt = /\bkwa\s+(?:shilingi\s+|sh\s+|ksh\s+|tsh\s+|ush\s+)?\d/i.exec(body); if (priceAt) { money = parseMoneySw(body.slice(priceAt.index)); body = clean(body.slice(0, priceAt.index)); } else money = parseMoneySw(stripUnit(body)); }
  const cleaned = quantity ? stripUnit(body) : body;
  const item = clean(clean(cleaned).replace(/\b(?:kwa|@)\s+(?:shilingi\s+|sh\s+)?\d[\d,.]*.*$/i, " ").replace(/^(?:za|ya|wa|la)\s+/i, "").replace(/\s+(?:kwa|@)$/i, "")).toLowerCase();
  return { quantity, item, party: who, money };
}

const describeRecord = record => `${swahiliItem(record.data.item || "") || categorySw(record.data.category)}${record.data.party ? ` (${record.data.party})` : ""}`;
const monthOf = (ctx, records) => { const from = `${ctx.today.slice(0, 7)}-01`; return records.filter(record => record.data.day >= from && record.data.day <= ctx.today); };
const totalsText = totals => { const entries = Object.entries(totals); return entries.length ? entries.map(([currency, amount]) => moneyShown(amount, currency)).join(" na ") : "0"; };

async function handle(ctx) {
  try { return await handleSwahili(ctx); } catch (error) { if (error === NOT_FARM) return null; throw error; }
}

async function handleSwahili(ctx) {
  const t = clean(ctx.text).replace(/[.!?]+$/g, ""); const lower = t.toLowerCase();
  if (!/\b(?:nime|tume|nina|tuna|matumizi|mapato|mauzo|faida|gharama|ghala|hifadhi|stoo|futa|ondoa|ongeza|onyesha|orodhesha)/i.test(lower)) return null;
  const scope = { tenantId: ctx.tenantId, userId: ctx.userId };
  const recordsOf = () => ctx.store.list({ ...scope, collection: "money" });
  let m;

  // ---- selling: "Nimeuza kilo 200 za mahindi kwa Amina kwa 9000" ----
  if ((m = /^(?:nimeuza|tumeuza)\s+(.+)$/i.exec(t))) {
    const deal = readDeal(m[1], "kwa");
    if (!deal.money || !(deal.money.amount > 0) || !deal.item || deal.item.length > 50) return null;
    const item = englishItem(deal.item);
    const result = await recordMoney(ctx, { type: "income", category: incomeCategorySw(deal.item), amount: deal.money.amount, currency: deal.money.currency, party: deal.party, item, qty: deal.quantity?.value || null, unit: deal.quantity?.unit || "", note: `sold ${item}` });
    if (result.refused) return SW.full;
    let stock = "";
    if (deal.quantity) {
      const list = await ctx.store.list({ ...scope, collection: "stock" }); const found = findItems(list, item).filter(entry => entry.data.unit === deal.quantity.unit);
      if (found.length === 1) {
        const left = round(Math.max(0, found[0].data.qty - deal.quantity.value), 3);
        await ctx.store.update({ ...scope, record: { ...found[0], data: { ...found[0].data, qty: left } } });
        stock = SW.stockOut({ taken: unitLabelSw(Math.min(deal.quantity.value, found[0].data.qty), deal.quantity.unit), left: unitLabelSw(left, deal.quantity.unit), less: deal.quantity.value > found[0].data.qty });
      }
    }
    return SW.sold({ qty: deal.quantity ? unitLabelSw(deal.quantity.value, deal.quantity.unit) : "", item: deal.item, buyer: deal.party, amount: moneyShown(deal.money.amount, result.record.data.currency), stock, income: totalsText(sum(monthOf(ctx, result.all), "income")) });
  }

  // ---- spending: "Nimetumia 5000 kwa mbolea" ----
  if ((m = /^(?:nimetumia|tumetumia|nimelipa|tumelipa|nimetoa|tumetoa)\s+(.+?)\s+(?:kwa|kununua|kulipia|katika)\s+(.+)$/i.exec(t)) && parseMoneySw(m[1]) && !parseQuantitySw(m[1])) {
    const money = parseMoneySw(m[1]); const what = clean(m[2]).replace(/\s+\d[\d,.]*$/, "").slice(0, 60);
    if (!(money.amount > 0) || !what) return null;
    const category = expenseCategorySw(what);
    const result = await recordMoney(ctx, { type: "expense", category, amount: money.amount, currency: money.currency, item: englishItem(what).slice(0, 60), note: what.slice(0, 80) });
    if (result.refused) return SW.full;
    return SW.spent({ amount: moneyShown(money.amount, result.record.data.currency), what: what.toLowerCase(), category, spent: totalsText(sum(monthOf(ctx, result.all), "expense")) });
  }

  // ---- buying: "Nimenunua gunia 2 za mbolea kwa 30000 kutoka kwa Juma" ----
  if ((m = /^(?:nimenunua|tumenunua)\s+(.+)$/i.exec(t)) && !/\b(?:nimeuza|tumeuza)\b/i.test(t)) {
    const deal = readDeal(m[1], "kutoka kwa");
    if (!deal.money || !(deal.money.amount > 0) || !deal.item || deal.item.length > 60) return null;
    const category = expenseCategorySw(deal.item); const item = englishItem(deal.item);
    const result = await recordMoney(ctx, { type: "expense", category, amount: deal.money.amount, currency: deal.money.currency, party: deal.party, item, qty: deal.quantity?.value || null, unit: deal.quantity?.unit || "", note: `bought ${item}` });
    if (result.refused) return SW.full;
    let stock = "";
    if (deal.quantity && ["seed", "fertiliser", "chemicals", "feed", "equipment"].includes(category)) {
      const added = await addStock(ctx, item, deal.quantity);
      if (added) stock = SW.stockIn({ qty: unitLabelSw(added.data.qty, added.data.unit), name: swahiliItem(added.data.name) });
    }
    return SW.bought({ qty: deal.quantity ? unitLabelSw(deal.quantity.value, deal.quantity.unit) : "", item: deal.item, seller: deal.party, amount: moneyShown(deal.money.amount, result.record.data.currency), category, stock, spent: totalsText(sum(monthOf(ctx, result.all), "expense")) });
  }

  // ---- paying someone: "Nimemlipa Juma 5000 kwa kupalilia" ----
  if ((m = /^(?:nimemlipa|tumemlipa)\s+([A-Za-z][A-Za-z']+)(?:\s+([A-Za-z][A-Za-z']+))?\s+(.+)$/i.exec(t))) {
    const second = m[2] && !CURRENCY_WORDS.test(m[2]) && !/^(?:kwa|kiasi)$/i.test(m[2]) ? m[2] : null;
    const tail = `${second ? "" : m[2] ? `${m[2]} ` : ""}${m[3]}`; const who = titleCase(`${m[1]}${second ? ` ${second}` : ""}`);
    const money = parseMoneySw(tail); const forWhat = clean(/\bkwa\s+(?!(?:shilingi|sh|ksh|tsh|ush)\b|\d)(.+)$/i.exec(tail)?.[1] || "kazi");
    if (!money || !(money.amount > 0)) return null;
    const category = expenseCategorySw(forWhat) === "other" ? "labour" : expenseCategorySw(forWhat);
    const result = await recordMoney(ctx, { type: "expense", category, amount: money.amount, currency: money.currency, party: who, item: englishItem(forWhat).slice(0, 60), note: `paid ${who}` });
    if (result.refused) return SW.full;
    return SW.paid({ who, amount: moneyShown(money.amount, result.record.data.currency), what: forWhat.toLowerCase().slice(0, 60) });
  }

  // ---- asking about money ----
  if ((m = /^(?:nimetumia kiasi gani|matumizi yangu|gharama zangu|nilitumia kiasi gani|jumla ya matumizi yangu|nimetumia)(?:\s+kwa\s+(.+?))?(?:\s+(leo|jana|wiki hii|wiki iliyopita|mwezi huu|mwezi uliopita|msimu huu|mwaka huu))?$/i.exec(t)) && (/^(?:nimetumia kiasi gani|nilitumia kiasi gani|matumizi yangu|gharama zangu|jumla ya matumizi yangu)/i.test(t))) {
    const period = periodSw(m[2] || "", ctx.today); const what = m[1] ? clean(m[1]).toLowerCase() : "";
    let rows = (await recordsOf()).filter(record => record.data.type === "expense" && record.data.day >= period.from && record.data.day <= period.to);
    if (what) { const english = englishItem(what); rows = rows.filter(record => `${record.data.item || ""} ${record.data.category} ${record.data.note || ""}`.toLowerCase().includes(english) || `${record.data.note || ""}`.toLowerCase().includes(what)); }
    return rows.length ? SW.spentTotal({ total: totalsText(sum(rows, "expense")), what, period: period.label, n: rows.length }) : SW.spentNone({ what, period: period.label });
  }
  if ((m = /^(?:nimepata kiasi gani|nimeuza kiasi gani|mapato yangu|mauzo yangu|jumla ya mapato yangu)(?:\s+(leo|jana|wiki hii|wiki iliyopita|mwezi huu|mwezi uliopita|msimu huu|mwaka huu))?$/i.exec(t))) {
    const period = periodSw(m[1] || "", ctx.today);
    const rows = (await recordsOf()).filter(record => record.data.type === "income" && record.data.day >= period.from && record.data.day <= period.to);
    return rows.length ? SW.earnedTotal({ total: totalsText(sum(rows, "income")), period: period.label, n: rows.length }) : SW.earnedNone({ period: period.label });
  }
  if ((m = /^(?:faida yangu|nina faida|nimepata faida|shamba langu linaendeleaje|hali ya faida yangu)(?:\s+(leo|jana|wiki hii|wiki iliyopita|mwezi huu|mwezi uliopita|msimu huu|mwaka huu))?$/i.exec(t))) {
    const period = periodSw(m[1] || "", ctx.today, "this year");
    const rows = (await recordsOf()).filter(record => record.data.day >= period.from && record.data.day <= period.to);
    if (!rows.length) return SW.profitNone({ period: period.label });
    const profit = profitOf(rows);
    return SW.profit({ period: period.label, income: totalsText(sum(rows, "income")), spent: totalsText(sum(rows, "expense")), gain: Object.values(profit).every(value => value >= 0), amount: Object.entries(profit).map(([currency, value]) => moneyShown(Math.abs(value), currency)).join(" na ") });
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
    return SW.undone({ what: describeRecord(last), amount: moneyShown(last.data.amount, last.data.currency), income: last.data.type === "income" });
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
    const left = round(Math.max(0, found[0].data.qty - quantity.value), 3);
    await ctx.store.update({ ...scope, record: { ...found[0], data: { ...found[0].data, qty: left } } });
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

module.exports = Object.freeze({ handle, SW, readDeal });
