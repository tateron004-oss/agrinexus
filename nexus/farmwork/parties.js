"use strict";

const { clean, titleCase, parseQuantity, parsePricePer, parseMoney, formatMoney, unitLabel, anyDay, plural, round } = require("./parse.js");
const { startGuided, askConfirm } = require("./guided.js");
const { describeDay, addDays } = require("../personal/dates.js");
const { recordMoney } = require("./money.js");
const { addStock, findItems } = require("./inventory.js");

// The farm's people and the business done with them: buyers, suppliers and customers with their contact details and what they deal in;
// notes on conversations; follow-ups with a day; and orders taken or placed, through to delivery, which records the sale (or the purchase)
// and the stock movement. Everything is what the farmer says. Kyro sends nothing to these people: a follow-up is the farmer's own reminder.
const ROLES = [{ value: "buyer", words: ["buyer", "customer", "client", "they buy", "buy"] }, { value: "supplier", words: ["supplier", "seller", "vendor", "they sell", "sell"] }, { value: "both", words: ["both", "either"] }];
const templates = {
  party: {
    collection: "party", intro: "Let's add them.",
    questions: [
      { key: "name", ask: "What is their name?", type: "text" },
      { key: "role", ask: "Do they buy from you, sell to you, or both?", type: "choice", options: ROLES },
      { key: "phone", ask: "Their phone number with the country code, like +254712345678?", type: "phone", optional: true },
      { key: "products", ask: "What do they buy or sell? For example maize or fertiliser.", type: "text", max: 100, optional: true },
      { key: "area", ask: "Where are they? A town or market.", type: "text", optional: true }
    ],
    async finish(ctx, answers) {
      const clear = Object.fromEntries(Object.entries(answers).filter(([, value]) => value !== null && value !== undefined));
      const scope = { tenantId: ctx.tenantId, userId: ctx.userId };
      const parties = await ctx.store.list({ ...scope, collection: "party" });
      const name = titleCase(clear.name);
      if (parties.some(party => party.data.name.toLowerCase() === name.toLowerCase())) return `You already have ${name} on your list.`;
      if (parties.length >= 1000) return "That's the most people I can keep (a thousand). Remove some first.";
      await ctx.store.add({ ...scope, collection: "party", data: { ...clear, name } });
      if (clear.phone && ctx.memory?.saveContact) { try { await ctx.memory.saveContact({ ...scope, name, phone: clear.phone }); } catch { /* saved either way */ } }
      return `Added ${name} (${clear.role === "both" ? "buys from you and sells to you" : clear.role === "supplier" ? "supplier" : "buyer"}${clear.products ? `, ${clear.products}` : ""}${clear.area ? `, ${clear.area}` : ""}). Say "note about ${name.split(" ")[0]}: …" to keep what was said, or "follow up with ${name.split(" ")[0]} on Friday".`;
    }
  }
};

const first = name => clean(name).split(" ")[0];
function findParty(parties, query) {
  const wanted = clean(query).toLowerCase().replace(/^(?:my |the )/, "");
  if (!wanted) return null;
  const exact = parties.filter(party => party.data.name.toLowerCase() === wanted);
  if (exact.length === 1) return { party: exact[0] };
  const loose = parties.filter(party => party.data.name.toLowerCase().split(" ").includes(wanted));
  return loose.length === 1 ? { party: loose[0] } : loose.length > 1 ? { ambiguous: loose } : null;
}
async function partyFor(ctx, name, role) {
  const scope = { tenantId: ctx.tenantId, userId: ctx.userId };
  const parties = await ctx.store.list({ ...scope, collection: "party" });
  const found = findParty(parties, name);
  if (found?.party) return found.party;
  if (found?.ambiguous) return null;
  const created = await ctx.store.add({ ...scope, collection: "party", data: { name: titleCase(name), role } });
  return created;
}
const NAME = "([A-Za-z][A-Za-z'-]+(?: (?!(?:at|for|by|on|before|to|and|from|with|of|the)\\b)[A-Za-z][A-Za-z'-]+)?)";
const orderLine = order => `Order ${order.number} (${order.data.kind === "sale" ? "from" : "to"} ${order.data.party}): ${order.data.qty ? `${unitLabel(order.data.qty, order.data.unit)} of ` : ""}${order.data.item}${order.data.price ? ` at ${formatMoney(order.data.price, order.data.currency)} per ${order.data.unit || "unit"}` : ""} — ${order.data.status}${order.data.due ? `, ${describeDay(order.data.due, "")}` : ""}`;

async function handle(ctx) {
  const t = clean(ctx.text).replace(/[.!?]+$/g, ""); const lower = t.toLowerCase();
  const scope = { tenantId: ctx.tenantId, userId: ctx.userId };
  const parties = async () => ctx.store.list({ ...scope, collection: "party" });
  let m;

  // ---- people ----
  if ((m = /^(?:please )?(?:add|register|save) (?:a |another |a new |new )?(buyer|customer|client|supplier|seller|vendor)(?: called| named)?\s*(.*)$/i.exec(t)) && !/\b(?:to|in) (?:my )?(?:list|calendar|inventory)\b/i.test(t)) {
    const role = /supplier|seller|vendor/i.test(m[1]) ? "supplier" : "buyer"; const named = clean(m[2]);
    return startGuided(ctx, templates.party, { role, ...(named && named.length <= 40 && !/\d/.test(named) ? { name: titleCase(named) } : {}) });
  }
  if ((m = /^(?:show|list|who are) (?:me )?my (buyers|customers|clients|suppliers|sellers|vendors|contacts on the farm)$/i.exec(t))) {
    const role = /supplier|seller|vendor/i.test(m[1]) ? "supplier" : /buyer|customer|client/i.test(m[1]) ? "buyer" : "";
    const rows = (await parties()).filter(party => !role || party.data.role === role || party.data.role === "both");
    return rows.length ? `Your ${m[1].toLowerCase()}: ${rows.slice().reverse().slice(0, 12).map(party => `${party.data.name}${party.data.products ? ` (${party.data.products})` : ""}${party.data.area ? `, ${party.data.area}` : ""}`).join("; ")}.` : `You have no ${m[1].toLowerCase()} yet. Say "add a buyer".`;
  }
  if ((m = /^(?:note|write) (?:down )?(?:about|on) (.+?)\s*[:,-]\s*(.+)$/i.exec(t)) || (m = /^(?:add (?:a )?note (?:to|for|about|on)) (.+?)\s*[:,-]\s*(.+)$/i.exec(t))) {
    const known = await parties();
    if (!known.length || /^(?:my|the|our)\b|\b(?:calendar|reminders?|phone|diary|journal|list)\b/i.test(m[1])) return null; // "add a note to my calendar" is not about a buyer
    const found = findParty(known, m[1]);
    if (!found) return `I don't have ${clean(m[1])} on your list. Say "add a buyer ${titleCase(m[1])}" first.`;
    if (found.ambiguous) return `Which one: ${found.ambiguous.map(party => party.data.name).join(" or ")}?`;
    await ctx.store.add({ ...scope, collection: "party_note", data: { party: found.party.data.name, text: clean(m[2]).slice(0, 300), day: ctx.today } });
    return `Noted about ${found.party.data.name}: ${clean(m[2]).slice(0, 120)}.`;
  }
  if ((m = /^(?:show|tell me|what do i know) (?:the )?(?:history|everything|more)? ?(?:for|about|on|of) (.+)$/i.exec(t)) || (m = /^(?:history|history for|show history for) (.+)$/i.exec(t))) {
    const found = findParty(await parties(), m[1]);
    if (found?.ambiguous) return `Which one: ${found.ambiguous.map(party => party.data.name).join(" or ")}?`;
    if (found?.party) {
      const name = found.party.data.name; const d = found.party.data;
      const notes = (await ctx.store.list({ ...scope, collection: "party_note" })).filter(note => note.data.party === name).slice(0, 3);
      const orders = (await ctx.store.list({ ...scope, collection: "order" })).filter(order => order.data.party === name);
      const money = (await ctx.store.list({ ...scope, collection: "money" })).filter(record => record.data.party === name);
      const follow = (await ctx.store.list({ ...scope, collection: "followup" })).filter(item => item.data.party === name && item.data.status === "open");
      const earned = money.filter(record => record.data.type === "income").reduce((sum, record) => sum + record.data.amount, 0); const spent = money.filter(record => record.data.type === "expense").reduce((sum, record) => sum + record.data.amount, 0);
      return [`${name}${d.role ? ` (${d.role})` : ""}${d.phone ? `, ${d.phone}` : ""}${d.products ? `, ${d.products}` : ""}${d.area ? `, ${d.area}` : ""}.`,
        orders.length ? `${plural(orders.length, "order")}: ${orders.slice(0, 3).map(order => `${order.data.qty ? `${unitLabel(order.data.qty, order.data.unit)} ` : ""}${order.data.item} (${order.data.status})`).join("; ")}.` : "",
        earned || spent ? `Business so far: ${earned ? `you earned ${formatMoney(earned, money[0]?.data.currency)}` : ""}${earned && spent ? " and " : ""}${spent ? `you spent ${formatMoney(spent, money[0]?.data.currency)}` : ""}.` : "",
        follow.length ? `Follow-up: ${follow.map(item => `${item.data.text || "check in"} (${describeDay(item.data.due, ctx.today)})`).join("; ")}.` : "", notes.length ? `Notes: ${notes.map(note => note.data.text).join(" | ")}.` : ""].filter(Boolean).join(" ");
    }
  }

  // ---- follow-ups ----
  if ((m = /^(?:please )?(?:follow up|follow-up|check in|call back|remind me to (?:follow up|check in) with) (?:with|on|about)? ?(?:up )?(?:with )?(.+?)(?: (?:on|by|next|this|in) (.+?))?(?:\s*[:,-]\s*(.+))?$/i.exec(t)) && /^(?:please )?(?:follow[- ]up|check in|call back|remind me to (?:follow up|check in))/i.test(t) && !/^follow up$/i.test(t)) {
    const nameGuess = clean(m[1]).replace(/\s+(?:on|by|in|next|this)\b.*$/i, "");
    const found = findParty(await parties(), nameGuess);
    if (!found) return null;
    if (found.ambiguous) return `Which one: ${found.ambiguous.map(party => party.data.name).join(" or ")}?`;
    const dayText = /\b(?:on|by|next|this|in)\s+(.+?)(?:\s*[:,-]|$)/i.exec(t.replace(new RegExp(`^.*?${nameGuess.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`, "i"), ""))?.[0] || "";
    const due = anyDay(dayText, ctx.today) || addDays(ctx.today, 1);
    const text = clean(m[3] || "").slice(0, 200);
    const item = await ctx.store.add({ ...scope, collection: "followup", data: { party: found.party.data.name, text, due, status: "open" } });
    if (ctx.personal?.add) await ctx.personal.add({ kind: "event", text: `Follow up with ${found.party.data.name}${text ? `: ${text}` : ""}`, day: due, time: "" });
    return `Follow-up ${item.number}: ${found.party.data.name}${text ? ` — ${text}` : ""}, ${describeDay(due, ctx.today)}. It's on your calendar and in your morning brief that day.`;
  }
  if (/^(?:who|what) (?:should|do) i (?:follow up|check in|call back)(?: with| on)?$/.test(lower) || /^(?:what|which) follow-?ups (?:do i have|are (?:open|due))$/.test(lower) || /^(?:show|list) (?:my )?follow-?ups$/.test(lower)) {
    const open = (await ctx.store.list({ ...scope, collection: "followup" })).filter(item => item.data.status === "open").sort((a, b) => a.data.due.localeCompare(b.data.due));
    return open.length ? `${plural(open.length, "follow-up")}: ${open.slice(0, 8).map(item => `${item.number}. ${item.data.party}${item.data.text ? ` — ${item.data.text}` : ""} (${item.data.due < ctx.today ? "overdue, " : ""}${describeDay(item.data.due, ctx.today)})`).join("; ")}.` : "You have no follow-ups open.";
  }
  if ((m = /^(?:mark )?follow-?up #?(\d{1,5}) (?:as )?(?:done|finished|complete)$/i.exec(t)) || (m = /^(?:done|finished) (?:following up|follow-?up|checking in) (?:with )?(.+)$/i.exec(t))) {
    const items = (await ctx.store.list({ ...scope, collection: "followup" })).filter(item => item.data.status === "open");
    const item = /^\d+$/.test(m[1]) ? items.find(entry => entry.number === Number(m[1])) : items.find(entry => entry.data.party.toLowerCase().split(" ").includes(clean(m[1]).toLowerCase()));
    if (!item) return `I can't find that follow-up.`;
    await ctx.store.update({ ...scope, record: { ...item, data: { ...item.data, status: "done", doneOn: ctx.today } } });
    return `Done: follow-up with ${item.data.party}.`;
  }

  // ---- orders ----
  let order = null;
  if ((m = new RegExp(`^${NAME} ordered (.+)$`, "i").exec(t)) || (m = new RegExp(`^(?:(?:please )?(?:add|record|create|place|log) )?(?:an? )?(?:new )?order from ${NAME}\\s*[:,-]?\\s*(.+)$`, "i").exec(t))) order = { kind: "sale", who: m[1], rest: m[2] };
  else if ((m = new RegExp(`^(?:please )?order (.+?) from ${NAME}(?:\\s+(.*))?$`, "i").exec(t))) order = { kind: "purchase", who: m[2], rest: `${m[1]} ${m[3] || ""}` };
  if (order && !/^(?:i|we|you|they|it|he|she|who|what)$/i.test(order.who)) {
    const quantity = parseQuantity(order.rest); const per = parsePricePer(order.rest);
    const itemMatch = quantity ? new RegExp(`${quantity.matched.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\s*(?:of )?(.+?)(?:\\s+(?:at|for|@|by|on|before)\\b.*)?$`, "i").exec(order.rest) : null;
    const item = clean(itemMatch?.[1] || "").toLowerCase();
    if (!quantity || !item || item.length > 50) return null;
    const party = await partyFor(ctx, order.who, order.kind === "sale" ? "buyer" : "supplier");
    if (!party) return `Which ${order.who}? Say the full name.`;
    const due = anyDay(/\b(?:by|on|before|for)\s+(.+)$/i.exec(order.rest)?.[1] || "", ctx.today);
    const record = await ctx.store.add({ ...scope, collection: "order", data: { kind: order.kind, party: party.data.name, item, qty: quantity.value, unit: quantity.unit, price: per?.amount || null, currency: per?.currency || "", status: "open", due: due || null, day: ctx.today } });
    return `${order.kind === "sale" ? "Order" : "Purchase order"} ${record.number}: ${unitLabel(quantity.value, quantity.unit)} of ${item} ${order.kind === "sale" ? "for" : "from"} ${party.data.name}${per ? ` at ${formatMoney(per.amount, per.currency)} per ${per.per}${per.per === quantity.unit ? ` (${formatMoney(round(per.amount * quantity.value), per.currency)} in all)` : ""}` : ""}${due ? `, ${describeDay(due, ctx.today)}` : ""}. Say "${order.kind === "sale" ? "deliver" : "received"} order ${record.number}" when it is done.`;
  }
  if (/^(?:show|list|what are) (?:my )?(?:open )?orders$/.test(lower) || /^(?:what|which) orders (?:are|do i have)(?: still)? (?:open|pending|outstanding)$/.test(lower)) {
    const open = (await ctx.store.list({ ...scope, collection: "order" })).filter(item => item.data.status === "open");
    return open.length ? `${plural(open.length, "open order")}: ${open.slice(0, 8).map(item => `${item.number}. ${item.data.party} — ${unitLabel(item.data.qty, item.data.unit)} of ${item.data.item}${item.data.due ? ` (${describeDay(item.data.due, ctx.today)})` : ""}`).join("; ")}.` : "You have no open orders.";
  }
  if ((m = /^(?:mark )?(?:deliver(?:ed)?|received|complete|completed|fulfil(?:led)?) order #?(\d{1,5})$/i.exec(t)) || (m = /^order #?(\d{1,5}) (?:was |is )?(?:delivered|received|done|completed)$/i.exec(t))) {
    const orderRecord = (await ctx.store.list({ ...scope, collection: "order" })).find(item => item.number === Number(m[1]));
    if (!orderRecord) return `I can't find order ${m[1]}.`;
    const d = orderRecord.data;
    if (d.status !== "open") return `Order ${orderRecord.number} is already ${d.status}.`;
    const notes = [];
    if (d.price) {
      const amount = round(d.price * d.qty);
      const result = await recordMoney(ctx, { type: d.kind === "sale" ? "income" : "expense", category: d.kind === "sale" ? "crops" : "other", amount, currency: d.currency, party: d.party, item: d.item, qty: d.qty, unit: d.unit, note: `order ${orderRecord.number}` });
      if (result.refused) return result.refused;
      notes.push(`${d.kind === "sale" ? "income" : "spending"} of ${formatMoney(amount, result.record.data.currency)} recorded`);
    } else notes.push("no price was given, so I did not record any money — say \"sold ... for ...\" to add it");
    const stock = await ctx.store.list({ ...scope, collection: "stock" });
    if (d.kind === "sale") { const found = findItems(stock, d.item).filter(entry => entry.data.unit === d.unit); if (found.length === 1) { const left = round(Math.max(0, found[0].data.qty - d.qty), 3); await ctx.store.update({ ...scope, record: { ...found[0], data: { ...found[0].data, qty: left } } }); notes.push(`${unitLabel(left, d.unit)} of ${found[0].data.name} left in stock`); } }
    else { const added = await addStock(ctx, d.item, { value: d.qty, unit: d.unit }); if (added) notes.push(`added to stock (${unitLabel(added.data.qty, added.data.unit)} of ${added.data.name})`); }
    await ctx.store.update({ ...scope, record: { ...orderRecord, data: { ...d, status: "done", doneOn: ctx.today } } });
    return `Order ${orderRecord.number} ${d.kind === "sale" ? "delivered" : "received"}: ${notes.join("; ")}.`;
  }
  if ((m = /^(?:please )?cancel order #?(\d{1,5})$/i.exec(t))) {
    const orderRecord = (await ctx.store.list({ ...scope, collection: "order" })).find(item => item.number === Number(m[1]));
    if (!orderRecord || orderRecord.data.status !== "open") return orderRecord ? `Order ${orderRecord.number} is already ${orderRecord.data.status}.` : `I can't find order ${m[1]}.`;
    await ctx.store.update({ ...scope, record: { ...orderRecord, data: { ...orderRecord.data, status: "cancelled" } } });
    return `Cancelled order ${orderRecord.number}.`;
  }

  if ((m = /^(?:please )?(?:remove|delete) (?:my )?(buyer|customer|client|supplier|seller|vendor) (.+)$/i.exec(t))) {
    const found = findParty(await parties(), m[2]);
    if (found?.party) return askConfirm(ctx, `Remove ${found.party.data.name} from your list? Your records of past business with them stay.`, { type: "remove-record", memoryId: found.party.memoryId, label: found.party.data.name });
    return found?.ambiguous ? `Which one: ${found.ambiguous.map(party => party.data.name).join(" or ")}?` : `I don't have ${clean(m[2])} on your list.`;
  }
  return null;
}

// For the morning brief: follow-ups due today or late, and orders due within three days.
function partiesDigest(records, today) {
  const follow = (records || []).filter(record => record.collection === "followup" && record.data.status === "open" && record.data.due <= today);
  const orders = (records || []).filter(record => record.collection === "order" && record.data.status === "open" && record.data.due && record.data.due <= addDays(today, 3));
  return { follow, orders };
}

module.exports = Object.freeze({ handle, templates, partiesDigest, findParty });
