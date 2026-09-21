"use strict";

const { clean, parseQuantity, unitLabel, plural, anyDay, UNIT_WORDS } = require("./parse.js");
const { askConfirm } = require("./guided.js");
const { describeDay, addDays } = require("../personal/dates.js");

// The farm's stock: seed, fertiliser, chemicals, feed, tools and harvested crops, with quantities, a "warn me below" level and an expiry
// date. Everything is what the farmer says they have and use; nothing is counted or measured by Kyro, and a use that would take more than
// is recorded is refused so a mistake cannot push stock below zero.
const CATEGORIES = [["seed", /\b(?:seeds?|seedlings?|cuttings?|vines)\b/i], ["fertiliser", /\b(?:fertili[sz]ers?|npk|urea|dap|can|manure|compost|lime|top ?dress(?:ing)?)\b/i],
  ["chemical", /\b(?:pesticides?|herbicides?|fungicides?|insecticides?|acaricides?|chemicals?|spray|dip|weedkiller|poison)\b/i], ["feed", /\b(?:feed|hay|silage|bran|pellets?|mash|fodder|napier|concentrates?|mineral|salt lick)\b/i],
  ["tool", /\b(?:hoes?|pangas?|machetes?|spades?|tractors?|sprayers?|pumps?|wheelbarrows?|tools?|ploughs?|knives|nets?|buckets?|pipes?|fence wire|gloves|boots)\b/i]];
const categoryOf = name => (CATEGORIES.find(([, pattern]) => pattern.test(name)) || ["other"])[0];
const stem = word => word.replace(/ies$/, "y").replace(/(?:es|s)$/, "");
const keyOf = name => clean(name).toLowerCase().replace(/\b(?:of|my|the|some|more)\b/g, "").split(" ").filter(Boolean).map(stem).join(" ");
const QTY = `(\\d[\\d,]*(?:\\.\\d+)?\\s*(?:${UNIT_WORDS}))`;
const STORE = "(?:inventory|stock|store|storeroom|store room|barn|shed|granary)";
const tidyName = raw => clean(raw).toLowerCase().replace(/^(?:of|more|some|the|my)\s+/, "").replace(/[.,;]+$/g, "");

function totals(items) {
  const by = {};
  for (const item of items) by[item.data.unit] = Math.round(((by[item.data.unit] || 0) + item.data.qty) * 1000) / 1000;
  return Object.entries(by).map(([unit, value]) => unitLabel(value, unit)).join(" and ");
}
function findItems(items, query) {
  const wanted = keyOf(query); if (!wanted) return [];
  const exact = items.filter(item => keyOf(item.data.name) === wanted);
  if (exact.length) return exact;
  return items.filter(item => { const have = keyOf(item.data.name); return have.includes(wanted) || wanted.includes(have) || wanted.split(" ").every(word => have.split(" ").includes(word)); });
}
const lowNote = item => (item.data.low !== undefined && item.data.low !== null && item.data.qty <= item.data.low ? ` Heads up: that is at or below your low level of ${unitLabel(item.data.low, item.data.unit)}.` : "");

async function addStock(ctx, name, quantity) {
  const scope = { tenantId: ctx.tenantId, userId: ctx.userId };
  const items = await ctx.store.list({ ...scope, collection: "stock" });
  const same = items.find(item => keyOf(item.data.name) === keyOf(name) && item.data.unit === quantity.unit);
  if (same) { const next = { ...same, data: { ...same.data, qty: Math.round((same.data.qty + quantity.value) * 1000) / 1000 } }; await ctx.store.update({ ...scope, record: next }); return next; }
  if (items.length >= 400) return null;
  return ctx.store.add({ ...scope, collection: "stock", data: { name, category: categoryOf(name), qty: quantity.value, unit: quantity.unit } }).then(record => record);
}

async function handle(ctx) {
  const t = clean(ctx.text).replace(/[.!?]+$/g, ""); const lower = t.toLowerCase();
  const scope = { tenantId: ctx.tenantId, userId: ctx.userId };
  let m;

  if ((m = new RegExp(`^(?:please )?(?:add|put|store|record|log) ${QTY} (?:of )?(.+?) (?:to|in|into|at) (?:my |the )?${STORE}$`, "i").exec(t)) || (m = new RegExp(`^(?:i )?(?:now )?(?:have|got|received) ${QTY} (?:of )?(.+?) (?:in|at|to) (?:my |the )?${STORE}$`, "i").exec(t))) {
    const quantity = parseQuantity(m[1]); const name = tidyName(m[2]);
    if (!quantity || !name || name.length > 60) return null;
    const record = await addStock(ctx, name, quantity);
    if (!record) return "That's the most kinds of stock I can keep (four hundred). Remove some first.";
    return `Added ${unitLabel(quantity.value, quantity.unit)} of ${name}. You now have ${unitLabel(record.data.qty, record.data.unit)}.`;
  }

  if ((m = new RegExp(`^(?:i |we )?(?:used up|used|use|apply|applied|fed out|fed|took out|take out|take|took|withdrew|removed) ${QTY} (?:of )?(.+?)(?: (?:on|in|for|to|from|at|out of) .+)?$`, "i").exec(t))) {
    const quantity = parseQuantity(m[1]); const name = tidyName(m[2]);
    if (!quantity || !name) return null;
    const items = await ctx.store.list({ ...scope, collection: "stock" });
    const found = findItems(items, name).filter(item => item.data.unit === quantity.unit);
    if (!found.length) return findItems(items, name).length ? `You keep ${name} in ${findItems(items, name).map(item => item.data.unit).join(" and ")}, not ${quantity.unit}s. Tell me the amount in the same unit.` : null; // not something in stock: ordinary talk
    if (found.length > 1) return `Which one: ${found.map(item => item.data.name).join(" or ")}?`;
    const item = found[0];
    if (quantity.value > item.data.qty) return `You only have ${unitLabel(item.data.qty, item.data.unit)} of ${item.data.name}, so I haven't changed anything. If the count is wrong, tell me "add ${unitLabel(quantity.value - item.data.qty, item.data.unit)} of ${item.data.name} to inventory" first.`;
    const next = { ...item, data: { ...item.data, qty: Math.round((item.data.qty - quantity.value) * 1000) / 1000 } };
    await ctx.store.update({ ...scope, record: next });
    return `Used ${unitLabel(quantity.value, quantity.unit)} of ${item.data.name}. ${unitLabel(next.data.qty, next.data.unit)} left.${lowNote(next)}`;
  }

  if ((m = /^how (?:much|many) (.+?) (?:do i have|is there|have i got|is left|is in stock|do we have|are left)(?: in (?:stock|the store|my inventory))?$/i.exec(t))) {
    const items = await ctx.store.list({ ...scope, collection: "stock" }); const found = findItems(items, m[1]);
    if (!found.length) return items.length ? `I don't have ${clean(m[1])} in your stock.` : null;
    return `You have ${totals(found)} of ${found.length === 1 ? found[0].data.name : clean(m[1])}.`;
  }
  if (new RegExp(`^(?:show|list|read|what(?:'s| is) in) (?:me )?(?:my |the )?${STORE}$`, "i").test(t) || /^what do i have in (?:stock|store)$/.test(lower)) {
    const items = await ctx.store.list({ ...scope, collection: "stock" });
    if (!items.length) return 'Your inventory is empty. Say "add 50 kg of maize seed to inventory".';
    const groups = {}; for (const item of items.slice().reverse()) (groups[item.data.category] = groups[item.data.category] || []).push(`${item.data.name} ${unitLabel(item.data.qty, item.data.unit)}`);
    return `Your inventory: ${Object.entries(groups).map(([category, list]) => `${category}: ${list.slice(0, 6).join(", ")}`).join("; ")}.`;
  }
  if (/^what(?:'s| is| are) (?:running )?(?:low|short)$/.test(lower) || /^what (?:do i need|should i) (?:to )?(?:restock|reorder|buy)$/.test(lower)) {
    const low = (await ctx.store.list({ ...scope, collection: "stock" })).filter(item => item.data.low !== undefined && item.data.low !== null && item.data.qty <= item.data.low);
    return low.length ? `Running low: ${low.map(item => `${item.data.name} (${unitLabel(item.data.qty, item.data.unit)}, level ${unitLabel(item.data.low, item.data.unit)})`).join("; ")}.` : 'Nothing is below its low level. Set one with "warn me when maize seed drops below 20 kg".';
  }
  if (/^what(?:'s| is| are) (?:about to )?expir(?:e|es|ing)(?: soon)?$/.test(lower)) {
    const soon = (await ctx.store.list({ ...scope, collection: "stock" })).filter(item => item.data.expiry && item.data.expiry <= addDays(ctx.today, 30)).sort((a, b) => a.data.expiry.localeCompare(b.data.expiry));
    return soon.length ? `Expiring soon: ${soon.map(item => `${item.data.name} ${item.data.expiry < ctx.today ? `expired ${describeDay(item.data.expiry, ctx.today)}` : `expires ${describeDay(item.data.expiry, ctx.today)}`}`).join("; ")}.` : "Nothing in your stock expires in the next 30 days.";
  }

  if ((m = new RegExp(`^(?:please )?(?:warn|alert|tell|let|remind) me (?:when|if) (?:my |the )?(.+?) (?:drops|goes|falls|gets|is|runs|dips)?\\s*(?:below|under|lower than|less than)\\s*${QTY}$`, "i").exec(t))) {
    const quantity = parseQuantity(m[2]); const items = await ctx.store.list({ ...scope, collection: "stock" }); const found = findItems(items, m[1]).filter(item => quantity && item.data.unit === quantity.unit);
    if (!quantity || !found.length) return findItems(items, m[1]).length ? `Give the level in the same unit you keep ${clean(m[1])} in.` : null;
    if (found.length > 1) return `Which one: ${found.map(item => item.data.name).join(" or ")}?`;
    await ctx.store.update({ ...scope, record: { ...found[0], data: { ...found[0].data, low: quantity.value } } });
    return `Okay. I'll flag ${found[0].data.name} whenever it is at or below ${unitLabel(quantity.value, quantity.unit)}, when you use it, when you ask "what is running low?" and in your morning brief.`;
  }

  if ((m = /^(?:set )?(?:the )?(?:expiry|expiration)(?: date)? (?:of|for) (.+?) (?:to|is|as) (.+)$/i.exec(t)) || (m = /^(?:the )?(.+?) (?:expires|will expire|expiry is) (?:on )?(.+)$/i.exec(t))) {
    const items = await ctx.store.list({ ...scope, collection: "stock" }); const found = findItems(items, m[1]);
    const day = anyDay(m[2], ctx.today);
    if (!found.length || !day) return found.length ? 'Give me a day, like "2027-03-01" or "1 March 2027".' : null;
    if (found.length > 1) return `Which one: ${found.map(item => item.data.name).join(" or ")}?`;
    await ctx.store.update({ ...scope, record: { ...found[0], data: { ...found[0].data, expiry: day } } });
    return `Noted: ${found[0].data.name} expires ${describeDay(day, ctx.today)}.`;
  }

  if ((m = new RegExp(`^(?:please )?(?:remove|delete) (.+?) from (?:my |the )?${STORE}$`, "i").exec(t))) {
    const found = findItems(await ctx.store.list({ ...scope, collection: "stock" }), m[1]);
    if (found.length === 1) return askConfirm(ctx, `Remove ${found[0].data.name} (${unitLabel(found[0].data.qty, found[0].data.unit)}) from your inventory?`, { type: "remove-record", memoryId: found[0].memoryId, label: found[0].data.name });
    return found.length > 1 ? `Which one: ${found.map(item => item.data.name).join(" or ")}?` : `I don't have ${clean(m[1])} in your stock.`;
  }
  return null;
}

// For the morning brief: things at or below their low level, and things that expire within a month.
function stockDigest(records, today) {
  const items = (records || []).filter(record => record.collection === "stock");
  return { low: items.filter(item => item.data.low !== undefined && item.data.low !== null && item.data.qty <= item.data.low),
    expiring: items.filter(item => item.data.expiry && item.data.expiry <= addDays(today, 30)) };
}

module.exports = Object.freeze({ handle, addStock, stockDigest, findItems, categoryOf, keyOf, totals });
