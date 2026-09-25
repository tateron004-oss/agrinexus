"use strict";

const { clean, parseQuantity, parseMoney, parsePricePer, formatMoney, unitLabel, titleCase, round, plural } = require("./parse.js");
const { extractPeriod, describeDay, addDays } = require("../personal/dates.js");
const { nameKey } = require("./fields.js");
const { findAnimal } = require("./livestock.js");
const { addStock, categoryOf, keyOf, findItems } = require("./inventory.js");

// The farm's money: what was spent, what was earned, and the profit, by month, season, field or kind of cost. Amounts are exactly what the
// farmer says; Kyro adds nothing and estimates nothing. A sale takes the goods out of stock when they are in stock, and a purchase of
// seed, fertiliser, chemicals, feed or tools puts them in, and Kyro says so each time so nothing changes silently.
const EXPENSE_CATEGORIES = [["seed", /\b(?:seeds?|seedlings?)\b/i], ["fertiliser", /\b(?:fertili[sz]ers?|npk|urea|dap|manure|lime)\b/i], ["chemicals", /\b(?:pesticides?|herbicides?|fungicides?|insecticides?|chemicals?|spray)\b/i], ["feed", /\b(?:feed|hay|silage|bran|fodder|mineral|pellets?|mash)\b/i],
  ["labour", /\b(?:labou?r|wages?|worker|workers|salary|casual|weeding|ploughing|harvesting help)\b/i], ["transport", /\b(?:transport|fuel|diesel|petrol|matatu|lorry|truck|boda|delivery|fare)\b/i], ["veterinary", /\b(?:vet|veterinary|vaccine|vaccination|drugs?|medicine|treatment|dip|deworm)/i],
  ["equipment", /\b(?:tools?|repair|equipment|tractor|hoe|panga|pump|sprayer|machine|spare)/i], ["water", /\b(?:water|irrigation|borehole|pipes?)\b/i], ["rent", /\b(?:rent|lease)\b/i]];
const expenseCategory = text => (EXPENSE_CATEGORIES.find(([, pattern]) => pattern.test(text)) || ["other"])[0];
const STOCKED = new Set(["seed", "fertiliser", "chemicals", "feed", "equipment"]);
const stockCategory = { seed: "seed", fertiliser: "fertiliser", chemicals: "chemical", feed: "feed", equipment: "tool" };

function incomeCategory(text) {
  if (/\b(?:milk)\b/i.test(text)) return "milk"; if (/\b(?:eggs?)\b/i.test(text)) return "eggs";
  if (/\b(?:cows?|cattle|bulls?|heifers?|calf|goats?|sheep|pigs?|chickens?|hens?|rabbits?|animals?|livestock)\b/i.test(text)) return "livestock";
  return /\b(?:maize|beans?|cassava|rice|wheat|sorghum|millet|tomato(?:es)?|potato(?:es)?|cabbage|kale|onions?|bananas?|coffee|tea|groundnuts?|vegetables?|fruit|crops?|harvest|grain)\b/i.test(text) ? "crops" : "other";
}

const defaultCurrency = records => (records.find(record => record.data.currency)?.data.currency) || "";

// Not everything someone buys or sells is farm business. A sale or purchase that matches no farm word is only recorded for a person who already
// keeps farm records; for anyone else it is left to normal planning ("I sold my old car").
const NOT_FARM = Symbol("not-farm");

async function recordMoney(ctx, entry) {
  if (entry.category === "other" && !(await ctx.hasFarmData())) throw NOT_FARM;
  const scope = { tenantId: ctx.tenantId, userId: ctx.userId };
  const all = await ctx.store.list({ ...scope, collection: "money" });
  if (all.length >= 5000) return { refused: "Your money records are full (five thousand entries). Ask me for a summary, then remove some." };
  const currency = entry.currency || defaultCurrency(all);
  const record = await ctx.store.add({ ...scope, collection: "money", data: { ...entry, currency, day: entry.day || ctx.today } });
  return { record, all: [record, ...all] };
}

const sum = (records, type) => records.filter(record => record.data.type === type).reduce((acc, record) => { acc[record.data.currency || ""] = round((acc[record.data.currency || ""] || 0) + record.data.amount); return acc; }, {});
const showTotals = totals => { const entries = Object.entries(totals); return entries.length ? entries.map(([currency, amount]) => formatMoney(amount, currency)).join(" and ") : "0"; };
const inPeriod = (record, period) => record.data.day >= period.from && record.data.day <= period.to;
function profitOf(records) {
  const income = sum(records, "income"); const spent = sum(records, "expense"); const out = {};
  for (const currency of new Set([...Object.keys(income), ...Object.keys(spent)])) out[currency] = round((income[currency] || 0) - (spent[currency] || 0));
  return out;
}
const fieldIn = (fields, text) => fields.find(field => nameKey(field.data.name) && new RegExp(`\\b${nameKey(field.data.name).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i").test(text));
const periodOf = (text, today, fallback) => extractPeriod(text, today) || extractPeriod(fallback, today);

async function handle(ctx) {
  try { return await handleMoney(ctx); } catch (error) { if (error === NOT_FARM) return null; throw error; }
}

async function handleMoney(ctx) {
  const t = clean(ctx.text).replace(/[.!?]+$/g, ""); const lower = t.toLowerCase();
  const scope = { tenantId: ctx.tenantId, userId: ctx.userId };
  let m;

  // ---- selling ----
  if ((m = /^(?:i |we )?sold (.+)$/i.exec(t))) {
    const rest = m[1];
    // an animal: "sold cow 12 for 40000"
    const animals = await ctx.store.list({ ...scope, collection: "animal" });
    const animalRef = /^(.+?)(?: (?:for|at|to)\b.*)?$/i.exec(rest)?.[1];
    const animal = animalRef ? findAnimal(animals, animalRef) : null;
    const money = parseMoney(rest);
    if (animal && money) {
      const buyer = /\bto (?:my |the )?([A-Za-z][A-Za-z' -]{1,30}?)(?:\s+(?:for|at)\b|$)/.exec(rest)?.[1];
      const result = await recordMoney(ctx, { type: "income", category: "livestock", amount: money.amount, currency: money.currency, party: buyer ? titleCase(buyer) : "", note: `sold ${animal.data.tag}` });
      if (result.refused) return result.refused;
      await ctx.store.update({ ...scope, record: { ...animal, data: { ...animal.data, status: "gone", goneOn: ctx.today, soldFor: money.amount } } });
      return `Recorded: sold ${animal.data.tag} for ${formatMoney(money.amount, result.record.data.currency)}. I've taken it off your animal list (its history is kept).`;
    }
    const quantity = parseQuantity(rest); const per = parsePricePer(rest);
    const itemMatch = quantity ? new RegExp(`${quantity.matched.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*(?:of )?(.+?)(?:\\s+(?:for|at|to|@)\\b.*)?$`, "i").exec(rest) : /^(?:some |my )?(.+?)(?:\s+(?:for|at|to|@)\b.*)?$/i.exec(rest);
    const item = clean(itemMatch?.[1] || "").toLowerCase().replace(/^(?:some|my|the)\s+/, "");
    let amount = money?.amount; let currency = money?.currency || "";
    if (quantity && per && !money) { amount = round(quantity.value * per.amount); currency = per.currency; }
    else if (quantity && per && money && money.amount === per.amount) { amount = round(quantity.value * per.amount); currency = per.currency || money.currency; }
    if (!(amount > 0) || !item || item.length > 50) return null;
    const buyer = /\bto (?:my |the )?([A-Za-z][A-Za-z' -]{1,30}?)(?:\s+(?:for|at|@)\b|$)/.exec(rest)?.[1];
    const fields = await ctx.store.list({ ...scope, collection: "field" }); const field = fieldIn(fields, t);
    const result = await recordMoney(ctx, { type: "income", category: incomeCategory(item), amount, currency, party: buyer ? titleCase(buyer) : "", field: field?.data.name || "", item, qty: quantity?.value || null, unit: quantity?.unit || "", note: `sold ${item}` });
    if (result.refused) return result.refused;
    let stockNote = "";
    if (quantity) {
      const stock = await ctx.store.list({ ...scope, collection: "stock" }); const found = findItems(stock, item).filter(entry => entry.data.unit === quantity.unit);
      if (found.length === 1) {
        const left = round(Math.max(0, found[0].data.qty - quantity.value), 3);
        await ctx.store.update({ ...scope, record: { ...found[0], data: { ...found[0].data, qty: left } } });
        stockNote = ` I took ${unitLabel(Math.min(quantity.value, found[0].data.qty), quantity.unit)} out of your stock${quantity.value > found[0].data.qty ? " (you had less recorded than you sold, so it is now zero)" : `; ${unitLabel(left, quantity.unit)} left`}.`;
      }
    }
    const period = extractPeriod("this month", ctx.today);
    const month = result.all.filter(record => inPeriod(record, period));
    return `Recorded: sold ${quantity ? `${unitLabel(quantity.value, quantity.unit)} of ` : ""}${item}${buyer ? ` to ${titleCase(buyer)}` : ""} for ${formatMoney(amount, result.record.data.currency)}.${stockNote} Income this month: ${showTotals(sum(month, "income"))}.`;
  }
  if ((m = /^(?:i |we )?(?:received|got|earned|made) (.+?) (?:from|for|by) (?:selling |sale of |sales of )?(.+)$/i.exec(t)) || (m = /^income\s*[:,-]\s*(.+?)\s+(.+)$/i.exec(t))) {
    const bare = /^\s*(\d[\d,]*(?:\.\d+)?)\s*$/.exec(m[1]);
    const money = parseMoney(m[1]) || (bare ? { amount: Number(bare[1].replace(/,/g, "")), currency: "" } : null) || parseMoney(t); const what = clean(m[2]).toLowerCase().replace(/^(?:the )?/, "");
    if (money && what && what.length <= 60 && (/^(?:income)/i.test(t) || /\b(?:selling|sale|sales|milk|eggs|crops?|harvest|maize|beans|produce|rent|labour|work)\b/i.test(t) || /\bfrom\b/i.test(t))) {
      const result = await recordMoney(ctx, { type: "income", category: incomeCategory(what), amount: money.amount, currency: money.currency, item: what, note: what });
      if (result.refused) return result.refused;
      const month = result.all.filter(record => inPeriod(record, extractPeriod("this month", ctx.today)));
      return `Recorded: income of ${formatMoney(money.amount, result.record.data.currency)} (${what}). Income this month: ${showTotals(sum(month, "income"))}.`;
    }
  }

  // ---- spending ----
  const spendPatterns = [/^(?:i |we )?(?:spent|paid out) (.+?) (?:on|for) (.+)$/i, /^expense\s*[:,-]\s*(.+?)\s+(.+)$/i];
  if ((m = spendPatterns[0].exec(t) || spendPatterns[1].exec(t)) && (parseMoney(m[1] || "") || parseMoney(`spent ${m[1] || ""}`))) {
    const money = parseMoney(m[1]) || parseMoney(`spent ${m[1]}`); const what = clean(m[2]).replace(/\s+\d[\d,.]*$/, "");
    const fields = await ctx.store.list({ ...scope, collection: "field" }); const field = fieldIn(fields, what);
    const category = expenseCategory(what);
    const result = await recordMoney(ctx, { type: "expense", category, amount: money.amount, currency: money.currency, field: field?.data.name || "", item: what.toLowerCase().slice(0, 60), note: what.slice(0, 80) });
    if (result.refused) return result.refused;
    const month = result.all.filter(record => inPeriod(record, extractPeriod("this month", ctx.today)));
    return `Recorded: spent ${formatMoney(money.amount, result.record.data.currency)} on ${what.toLowerCase().slice(0, 60)} (${category}${field ? `, ${field.data.name}` : ""}). Spent this month: ${showTotals(sum(month, "expense"))}.`;
  }
  if ((m = /^(?:i |we )?(?:bought|purchased|got) (.+)$/i.exec(t)) && parseMoney(m[1]) && !/\b(?:sold|selling)\b/i.test(t)) {
    const rest = m[1]; const money = parseMoney(rest); const quantity = parseQuantity(rest); const per = parsePricePer(rest);
    let amount = money.amount; let currency = money.currency;
    // Found live (export/invoice/farm-toolkit follow-up audit): the old guard
    // regexed for the literal word "for" followed by a digit to decide
    // whether a genuine separate total was stated -- but parsePricePer's own
    // connector list also accepts "for" to introduce the per-unit price
    // itself ("bought 5 bags for 3000 per bag"), so completely ordinary
    // phrasing tripped the guard and left `amount` at the per-unit price
    // (3000) instead of the real total (15,000). Mirrors the "sold" branch's
    // own, already-correct echo check a few lines up: parseMoney only ever
    // echoes the SAME number back when there is no separately-stated total,
    // so comparing money.amount to per.amount (not scanning for the word
    // "for") is what actually distinguishes the two cases.
    if (quantity && per && quantity.unit === per.per && money.amount === per.amount) { amount = round(quantity.value * per.amount); currency = per.currency || currency; }
    const itemMatch = quantity ? new RegExp(`${quantity.matched.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*(?:of )?(.+?)(?:\\s+(?:for|at|from|@)\\b.*)?$`, "i").exec(rest) : /^(?:some |a |an )?(.+?)(?:\s+(?:for|at|from|@)\b.*)?$/i.exec(rest);
    const item = clean(itemMatch?.[1] || "").toLowerCase();
    if (!item || item.length > 60) return null;
    const seller = /\bfrom (?:my |the )?([A-Za-z][A-Za-z' -]{1,30}?)(?:\s+(?:for|at|@)\b|$)/.exec(rest)?.[1];
    const category = expenseCategory(item);
    const fields = await ctx.store.list({ ...scope, collection: "field" }); const field = fieldIn(fields, t);
    const result = await recordMoney(ctx, { type: "expense", category, amount, currency, party: seller ? titleCase(seller) : "", field: field?.data.name || "", item, qty: quantity?.value || null, unit: quantity?.unit || "", note: `bought ${item}` });
    if (result.refused) return result.refused;
    let stockNote = "";
    if (quantity && STOCKED.has(category)) { const stock = await addStock(ctx, item, quantity); if (stock) stockNote = ` I added it to your stock (you now have ${unitLabel(stock.data.qty, stock.data.unit)} of ${stock.data.name}).`; }
    const month = result.all.filter(record => inPeriod(record, extractPeriod("this month", ctx.today)));
    return `Recorded: bought ${quantity ? `${unitLabel(quantity.value, quantity.unit)} of ` : ""}${item}${seller ? ` from ${titleCase(seller)}` : ""} for ${formatMoney(amount, result.record.data.currency)} (${category}).${stockNote} Spent this month: ${showTotals(sum(month, "expense"))}.`;
  }
  if ((m = /^(?:i |we )?paid ([A-Za-z][A-Za-z']+(?: [A-Za-z][A-Za-z']+)?) (.+)$/i.exec(t)) && !/^(?:the|my|for|to|a|an|out|off|back|attention|up|in|it|them|him|her)\b/i.test(m[1]) && parseMoney(`paid ${m[1]} ${m[2]}`)) {
    const who = titleCase(m[1]); const money = parseMoney(`paid ${m[1]} ${m[2]}`); const forWhat = /\bfor (.+)$/i.exec(m[2])?.[1] || "labour";
    const result = await recordMoney(ctx, { type: "expense", category: expenseCategory(forWhat) === "other" ? "labour" : expenseCategory(forWhat), amount: money.amount, currency: money.currency, party: who, item: forWhat.toLowerCase().slice(0, 60), note: `paid ${who}` });
    if (result.refused) return result.refused;
    return `Recorded: paid ${who} ${formatMoney(money.amount, result.record.data.currency)} for ${forWhat.toLowerCase().slice(0, 60)}.`;
  }

  // ---- asking ----
  const recordsOf = async () => ctx.store.list({ ...scope, collection: "money" });
  if ((m = /^how much (?:did|have) (?:i|we) (?:spend|spent)(?: on (.+?))?(?: (this (?:week|month|year|season)|last (?:week|month)|today|yesterday|so far this year|in the last \d+ days))?$/i.exec(t)) || (m = /^(?:what (?:is|are)|show) my (?:total )?(?:expenses|spending|costs)(?: (this (?:week|month|year|season)|last (?:week|month)|today|yesterday))?$/i.exec(t))) {
    const period = periodOf(`${m[2] || m[1] || ""}`, ctx.today, "this month"); const what = /^how much/i.test(t) ? m[1] : "";
    let rows = (await recordsOf()).filter(record => record.data.type === "expense" && inPeriod(record, period));
    if (what) rows = rows.filter(record => `${record.data.item || ""} ${record.data.category}`.toLowerCase().includes(clean(what).toLowerCase().replace(/^(?:the |my )/, "")) || record.data.field?.toLowerCase().includes(nameKey(what)));
    return rows.length ? `You spent ${showTotals(sum(rows, "expense"))}${what ? ` on ${clean(what)}` : ""} ${period.label} (${plural(rows.length, "entry", "entries")}).` : `I have no ${what ? `${clean(what)} ` : ""}spending recorded for ${period.label}.`;
  }
  if ((m = /^how much (?:did|have) (?:i|we) (?:earn|earned|make|made|get|got|sell|sold)(?: (this (?:week|month|year|season)|last (?:week|month)|today|yesterday|so far this year))?$/i.exec(t)) || (m = /^(?:what (?:is|are)|show) my (?:total )?(?:income|earnings|sales|revenue)(?: (this (?:week|month|year|season)|last (?:week|month)|today|yesterday))?$/i.exec(t))) {
    const period = periodOf(m[1] || "", ctx.today, "this month");
    const rows = (await recordsOf()).filter(record => record.data.type === "income" && inPeriod(record, period));
    return rows.length ? `You earned ${showTotals(sum(rows, "income"))} ${period.label} (${plural(rows.length, "entry", "entries")}).` : `I have no income recorded for ${period.label}.`;
  }
  if ((m = /^(?:what(?:'s| is)|show|how much is) my (?:profit|net income|margin)(?: (this (?:week|month|year|season)|last (?:week|month)|today|so far this year))?$/i.exec(t)) || (m = /^am i (?:making a )?(?:profit|money)(?: (this (?:week|month|year|season)|last (?:week|month)))?$/i.exec(t)) || /^how(?:'s| is) my (?:profit|farm)(?: doing)?$/.test(lower)) {
    const period = periodOf(m?.[1] || "", ctx.today, "this year");
    const rows = (await recordsOf()).filter(record => inPeriod(record, period));
    if (!rows.length) return `I have no money recorded for ${period.label}. Say "spent 5000 on fertilizer" or "sold 200 kg of maize for 9000".`;
    const profit = profitOf(rows);
    return `${period.label[0].toUpperCase()}${period.label.slice(1)}: income ${showTotals(sum(rows, "income"))}, spending ${showTotals(sum(rows, "expense"))}, so ${Object.values(profit).every(value => value >= 0) ? "a profit of" : "a loss of"} ${Object.entries(profit).map(([currency, value]) => formatMoney(Math.abs(value), currency)).join(" and ")}.`;
  }
  if (/^(?:show|what(?:'s| is)) (?:my )?profit by (?:field|plot)(?: (?:this|last) (?:year|season|month))?$/.test(lower)) {
    const period = periodOf(lower, ctx.today, "this year");
    const rows = (await recordsOf()).filter(record => inPeriod(record, period) && record.data.field);
    if (!rows.length) return "I have no money recorded against a field yet. Add the field name when you record it, like \"spent 5000 on fertilizer for North Plot\".";
    const byField = {}; for (const record of rows) (byField[record.data.field] = byField[record.data.field] || []).push(record);
    return `By field ${period.label}: ${Object.entries(byField).map(([field, list]) => `${field} — income ${showTotals(sum(list, "income"))}, spending ${showTotals(sum(list, "expense"))}, net ${Object.entries(profitOf(list)).map(([currency, value]) => `${value < 0 ? "-" : ""}${formatMoney(Math.abs(value), currency)}`).join(" and ")}`).join("; ")}.`;
  }
  if ((m = /^(?:(?:what(?:'s| is)|show|how(?:'s| is)) (?:my )?)?(?:profit|net)(?: for| of| on| from) (?:my )?(?:field |plot )?(.+?)(?: field| plot)?(?: (this (?:year|season|month)|last (?:year|month)))?$/i.exec(t))) {
    const fields = await ctx.store.list({ ...scope, collection: "field" }); const field = fields.find(item => nameKey(item.data.name) === nameKey(m[1]));
    if (field) {
      const period = periodOf(m[2] || "", ctx.today, "this year");
      const rows = (await recordsOf()).filter(record => inPeriod(record, period) && record.data.field === field.data.name);
      return rows.length ? `${field.data.name} ${period.label}: income ${showTotals(sum(rows, "income"))}, spending ${showTotals(sum(rows, "expense"))}, net ${Object.entries(profitOf(rows)).map(([currency, value]) => `${value < 0 ? "-" : ""}${formatMoney(Math.abs(value), currency)}`).join(" and ")}.` : `I have no money recorded against ${field.data.name} for ${period.label}.`;
    }
  }
  if ((m = /^(?:show|what are) my expenses by (?:category|kind|type)(?: (this (?:month|year|season)|last (?:month|year)))?$/i.exec(t))) {
    const period = periodOf(m[1] || "", ctx.today, "this year");
    const rows = (await recordsOf()).filter(record => record.data.type === "expense" && inPeriod(record, period));
    if (!rows.length) return `I have no spending recorded for ${period.label}.`;
    const by = {}; for (const record of rows) by[record.data.category] = round((by[record.data.category] || 0) + record.data.amount);
    const cur = rows[0].data.currency;
    return `Spending ${period.label} by kind: ${Object.entries(by).sort((a, b) => b[1] - a[1]).map(([category, amount]) => `${category} ${formatMoney(amount, cur)}`).join("; ")}.`;
  }
  if (/^(?:show|list) (?:me )?my (?:recent )?(?:money|expenses|income|sales)(?: records| entries)?$/.test(lower)) {
    const rows = (await recordsOf()).slice(0, 8);
    return rows.length ? `Latest: ${rows.map(record => `${describeDay(record.data.day, ctx.today)} ${record.data.type === "income" ? "+" : "-"}${formatMoney(record.data.amount, record.data.currency)} ${record.data.note || record.data.item || record.data.category}`).join("; ")}.` : "You have no money records yet.";
  }
  if (/^(?:undo|delete|remove) (?:my )?last (?:money|expense|income|sale|spending|purchase)(?: entry| record)?$/.test(lower)) {
    const rows = await recordsOf(); const last = rows.find(record => /expense/.test(lower) || /spending|purchase/.test(lower) ? record.data.type === "expense" : /income|sale/.test(lower) ? record.data.type === "income" : true);
    if (!last) return "There is nothing to undo.";
    await ctx.store.remove({ ...scope, memoryId: last.memoryId });
    return `Removed: ${last.data.type === "income" ? "income" : "spending"} of ${formatMoney(last.data.amount, last.data.currency)} (${last.data.note || last.data.item || last.data.category}). Stock changes it made are not reversed; tell me if you need those corrected.`;
  }
  return null;
}

module.exports = Object.freeze({ handle, recordMoney, expenseCategory, incomeCategory, sum, profitOf, showTotals, NOT_FARM });
