"use strict";

const { clean, parseMoney, parseQuantity, formatMoney, unitLabel, round } = require("./parse.js");
const { describeDay } = require("../personal/dates.js");
const { describeReading, whenWords } = require("../farm/log.js");
const money = require("./money.js");
const amounts = require("./books-amounts.js");

// "Undo", "scratch that", "delete the last entry", "delete the last sale", "oops that was 3500", "actually change the last one to 4800", "no it was 5 bags".
// A farmer's records live in more than one place (money, animals, farm work, and the farm log of rain, eggs and harvests). "The last entry" is the most recent of ALL of them, by the time it was saved, and the
// reply always says exactly what was removed or changed. "The last sale" is the latest sale, whatever else was recorded after it. Nothing is guessed: a bare "undo" only reaches back an hour.
const scopeOf = ctx => ({ tenantId: ctx.tenantId, userId: ctx.userId });
const HOUR = 3600 * 1000;
const WINDOW_UNDO = HOUR; const WINDOW_THAT = 20 * 60 * 1000; const WINDOW_CORRECT = 2 * 24 * HOUR;

// A settlement ("John paid 500", "I paid the supplier") changed an earlier entry as well, so taking just the payment out would leave the books wrong: it is not undone from here.
const isSettlement = record => Boolean(record.data.soldOn) || /^part payment from /i.test(record.data.note || "") || Boolean(record.data.settlement);

// Everything that can be "the last entry", newest first.
async function entries(ctx) {
  const scope = scopeOf(ctx); const out = [];
  const at = value => { const t = Date.parse(value); return Number.isFinite(t) ? t : -1; };
  for (const record of await ctx.store.list({ ...scope, collection: "money" })) out.push({ source: "money", record, at: at(record.createdAt), locked: isSettlement(record) });
  for (const collection of ["animal_event", "activity"]) for (const record of await ctx.store.list({ ...scope, collection })) out.push({ source: collection, record, at: at(record.createdAt) });
  if (ctx.memory?.listFarmEntries) { try { for (const row of await ctx.memory.listFarmEntries(scope)) if (row?.content?.kind) out.push({ source: "log", row, at: at(row.created_at || row.createdAt) }); } catch { /* the farm log is optional here */ } }
  return out.sort((a, b) => b.at - a.at);
}
const fromDay = (day, today) => (!day || day === today ? "" : ` from ${describeDay(day, today)}`);
function describe(entry, ctx) {
  if (entry.source === "money") { const d = entry.record.data; return `${money.describeRecord(entry.record)}${fromDay(d.day, ctx.today)}`; }
  if (entry.source === "log") return entry.row.content.kind === "alert" ? `the alert for ${entry.row.content.metric === "soil" ? "soil moisture" : "the tank"} below ${round(entry.row.content.below)}${entry.row.content.unit === "%" ? "%" : " litres"}` : `${describeReading(entry.row.content)} for ${whenWords(entry.row.content.day, ctx.today)}`;
  const d = entry.record.data;
  if (entry.source === "activity") return `${d.verb} ${d.size ? `${d.size.value} ${d.size.unit === "acre" ? "acres" : d.size.unit} of ` : ""}${d.item}${fromDay(d.day, ctx.today)}`;
  const what = { milk: `gave ${d.value} L`, vaccination: "vaccinated", deworming: "dewormed", dipping: "dipped", treatment: "treated", weight: `weighed ${d.value} kg`, breeding: "bred", birth: "gave birth", feeding: "fed", note: "note" }[d.type] || d.type;
  return `${d.animal} ${what}${d.detail ? ` (${d.detail})` : ""}${fromDay(d.day, ctx.today)}`;
}
async function remove(ctx, entry) {
  if (entry.source === "log") return ctx.memory.removeFarmEntry({ ...scopeOf(ctx), memoryId: entry.row.memory_id });
  return ctx.store.remove({ ...scopeOf(ctx), memoryId: entry.record.memoryId });
}
const removedLine = (entry, ctx) => (entry.source === "money"
  ? `Removed: ${describe(entry, ctx)}. Stock changes it made are not reversed; tell me if you need those corrected.`
  : `Removed your last entry: ${describe(entry, ctx)}.`);

// ---- the kinds a person can name: "the last sale", "the last harvest" ----
const KINDS = [
  [/^(?:sales?|income|takings)$/, e => e.source === "money" && e.record.data.type === "income" && !e.locked, "sale"],
  [/^(?:expenses?|purchases?|spending|costs?|payments?)$/, e => e.source === "money" && e.record.data.type === "expense" && !e.locked, "expense"],
  [/^(?:money|money entry|money record)$/, e => e.source === "money" && !e.locked, "money entry"],
  [/^(?:harvests?)$/, e => e.source === "log" && e.row.content.metric === "harvest", "harvest"],
  [/^(?:eggs?)$/, e => e.source === "log" && e.row.content.metric === "harvest" && e.row.content.crop === "eggs", "egg entry"],
  [/^(?:milk|milk entry)$/, e => (e.source === "log" && e.row.content.metric === "harvest" && e.row.content.crop === "milk") || (e.source === "animal_event" && e.record.data.type === "milk"), "milk entry"],
  [/^(?:rain|rainfall)$/, e => e.source === "log" && e.row.content.metric === "rain", "rain entry"],
  [/^(?:readings?|log entry|farm log entry|farm entry)$/, e => e.source === "log", "farm log entry"],
  [/^(?:alerts?)$/, e => e.source === "log" && e.row.content.kind === "alert", "alert"],
  [/^(?:vaccinations?|treatments?|dewormings?|dippings?|births?|weights?|breedings?)$/, null, "animal entry"],
  [/^(?:plantings?|plantings? entry)$/, e => e.source === "activity" && /^(?:planted|sowed|transplanted)$/.test(e.record.data.verb), "planting"],
  [/^(?:sprayings?)$/, e => e.source === "activity" && e.record.data.verb === "sprayed", "spraying"]
];
function kindOf(word) {
  const w = clean(word).toLowerCase();
  const hit = KINDS.find(([pattern]) => pattern.test(w));
  if (!hit) return null;
  if (hit[1]) return { match: hit[1], name: hit[2] };
  const type = /vaccin/.test(w) ? "vaccination" : /treat/.test(w) ? "treatment" : /deworm/.test(w) ? "deworming" : /dipp/.test(w) ? "dipping" : /birth/.test(w) ? "birth" : /weight/.test(w) ? "weight" : "breeding";
  return { match: e => e.source === "animal_event" && e.record.data.type === type, name: type };
}
const KIND_WORDS = "sales?|income|takings|expenses?|purchases?|spending|costs?|payments?|money(?: entry| record)?|harvests?|eggs?|milk(?: entry)?|rain(?:fall)?|readings?|log entry|farm log entry|farm entry|alerts?|vaccinations?|treatments?|dewormings?|dippings?|births?|weights?|breedings?|plantings?|sprayings?";

// ---- changing the last entry ----
const FILLER = /^(?:(?:no|nope|oops|whoops|sorry|actually|wait|um|er|hmm|my bad|my mistake|correction)[,.!]?\s+)+/i;
const NOT_TAIL = /,?\s+(?:not|instead of|rather than)\s+.+$/i;
const LAST_TYPED = "(?:the |my )?(?:last|previous|latest)";
function readCorrection(t) {
  const stripped = t.replace(FILLER, ""); const hadFiller = stripped !== t;
  let m; let value = null; let kind = null;
  if ((m = new RegExp(`^(?:change|make|correct|edit|update|set|fix)\\s+(?:that|it|this|${LAST_TYPED}(?:\\s+(one|entry|record|${KIND_WORDS}))?)\\s+(?:to|as|into)\\s+(.+)$`, "i").exec(stripped))) { value = m[2]; kind = m[1] && !/^(?:one|entry|record)$/i.test(m[1]) ? m[1] : null; }
  else if ((m = /^(?:that|it|this) (?:should (?:be|have been)|should've been|must be|had to be)\s+(.+)$/i.exec(stripped))) value = m[1];
  else if ((m = /^(?:i meant|i mean|it was actually|that was actually)\s+(.+)$/i.exec(stripped))) value = m[1];
  else if (hadFiller && (m = /^(?:(?:that|it|this) (?:was|is)|it'?s)\s+(.+)$/i.exec(stripped))) value = m[1];
  else if ((m = /^make (?:that|it)\s+(\d.*)$/i.exec(stripped))) value = m[1];
  if (value === null) return null;
  value = clean(value.replace(NOT_TAIL, ""));
  const bare = value.replace(/^(?:about |around )/i, "");
  // a quantity ("5 bags", "20 litres") only when that is ALL that was said; an amount ("3500", "5k", "KSh 3,500") likewise
  const found = parseQuantity(bare);
  const quantity = found && clean(bare).toLowerCase().startsWith(found.matched.toLowerCase()) && /^(?:\s+of\s+[a-z ]+)?$/i.test(clean(bare).slice(found.matched.length)) ? found : null;
  const token = quantity ? null : amounts.readToken(bare);
  const parsed = !token && !quantity ? parseMoney(value) : null;
  if (!quantity && !token && !parsed) return null;
  return { kind, quantity, token, parsed, said: value };
}

async function applyCorrection(ctx, correction, target) {
  const scope = scopeOf(ctx);
  const age = Date.now() - target.at;
  if (target.at > 0 && age > WINDOW_CORRECT) return `The last thing I recorded was ${describe(target, ctx)}, a while ago, so I have not changed it. Say "delete the last entry" and record it again.`;
  if (target.locked) return `The last thing I recorded was a payment: ${describe(target, ctx)}. I can't change a payment from here; tell me what is owed now instead, for example "John owes me 500".`;
  const { quantity, token, parsed } = correction;
  if (target.source === "money") {
    const record = target.record; const before = describe(target, ctx);
    if (quantity && !token) {
      const unit = quantity.unit;
      await ctx.store.update({ ...scope, record: { ...record, data: { ...record.data, qty: quantity.value, unit } } });
      return `Changed the quantity of ${before}: it is now ${unitLabel(quantity.value, unit)}${record.data.qty ? `, not ${unitLabel(record.data.qty, record.data.unit || unit)}` : ""}. The amount is still ${formatMoney(record.data.amount, record.data.currency)}; say "that should be 7500" if the price changed too.`;
    }
    const said = token ? { amount: token.amount, currency: token.currency } : parsed;
    if (!said || !(said.amount > 0)) return null;
    if (token?.unsure) return `I wasn't sure about "${correction.said}": do you mean ${amounts.sayAmount(token.unsure)}? Nothing was changed. Say the whole number, like "that should be ${token.unsure}".`;
    const data = { ...record.data, amount: said.amount, ...(money.isSpecific(said.currency) ? { currency: said.currency } : {}) };
    if (record.data.unpaid && record.data.owing === record.data.amount) data.owing = said.amount;
    await ctx.store.update({ ...scope, record: { ...record, data } });
    return `Changed: ${before} is now ${formatMoney(said.amount, money.isSpecific(said.currency) ? said.currency : record.data.currency)}. Stock changes it made are not reversed.`;
  }
  if (target.source === "log") {
    const content = target.row.content;
    if (content.kind !== "reading") return `The last thing I recorded was ${describe(target, ctx)}, which has no amount to change. Say "delete the last entry" and record it again.`;
    if (token && /[$€£₦]|ksh|kes|shilling|bob|dollar|naira/i.test(correction.said)) return `The last thing I recorded was ${describe(target, ctx)} in your farm log, and ${correction.said} looks like money. Nothing was changed. To change a sale, say "change the last sale to ${correction.said}".`;
    const before = describe(target, ctx);
    let value; let unit = content.unit;
    if (quantity) {
      const sameKind = content.metric === "harvest" && (quantity.unit === "kg" || quantity.unit === "L" || /^(?:bag|sack|crate|bunch)$/.test(quantity.unit));
      if (!sameKind) return `That does not fit ${before}. Nothing was changed.`;
      value = quantity.value; unit = quantity.unit === "L" ? "litres" : quantity.unit;
    } else if (token && !token.unsure) { value = token.amount; if (content.unit === "egg") value = Math.round(value); }
    else return null;
    if (!(value > 0) || value > 100000000) return `${value} does not look right, so I have not changed it.`;
    const changed = { ...content, value: round(value), unit };
    await ctx.memory.removeFarmEntry({ ...scope, memoryId: target.row.memory_id });
    await ctx.memory.addFarmEntryUnlessCapped({ ...scope, content: changed, maxEntries: 5000 });
    return `Changed: ${describeReading(content)} is now ${describeReading(changed)}, for ${whenWords(changed.day, ctx.today)}.`;
  }
  if (target.source === "animal_event" && target.record.data.type === "milk" && ((token && !token.unsure) || quantity)) {
    const value = quantity ? (quantity.unit === "L" ? quantity.value : null) : token.amount;
    if (!(value > 0 && value <= 100)) return `That does not fit ${describe(target, ctx)}. Nothing was changed.`;
    const before = describe(target, ctx);
    await ctx.store.update({ ...scope, record: { ...target.record, data: { ...target.record.data, value } } });
    return `Changed: ${before} is now ${value} L.`;
  }
  return `The last thing I recorded was ${describe(target, ctx)}, which I can't change by number. Say "delete the last entry" and record it again.`;
}

async function handle(ctx) {
  const t = clean(ctx.text).replace(/[.!?]+$/g, "").replace(/^(?:(?:please|kyro|hey|ok|okay)[, ]+)+/i, "");
  if (!t || t.length > 140) return null;
  let m;

  // ---- undo / delete: bare, "that", "the last entry", "the last sale" ----
  let window = null; let kind = null; let named = false;
  if (/^(?:oops[, ]+)?(?:undo|scratch|scrap)(?: that| it| this| that one| the last one)?$/i.test(t)) window = WINDOW_UNDO;
  else if (/^(?:oops[, ]+)?(?:delete|remove|erase|take back|take out)(?: that| it| this| that one| that entry| that record)$/i.test(t)) window = WINDOW_THAT;
  else if (/^(?:oops[, ]+)?(?:undo|delete|remove|cancel|erase|scrap|scratch)\s+(?:my |the )?(?:last|latest|previous|most recent)(?: farm| log| money| business)?(?: entry| record| one| thing| item)$/i.test(t)) window = Infinity;
  else if (/^(?:undo|delete|remove|cancel|erase|scrap|scratch)\s+(?:that|the) (?:last )?(?:farm |log |money )?entry$/i.test(t)) window = Infinity;
  else if ((m = new RegExp(`^(?:oops[, ]+)?(?:undo|delete|remove|cancel|erase|scrap|scratch)\\s+(?:that|this|(?:my |the )?(?:last|latest|previous|most recent))\\s+(${KIND_WORDS})(?: entry| record)?$`, "i").exec(t))) { kind = kindOf(m[1]); named = true; window = /^(?:that|this)/i.test(t.replace(/^(?:oops[, ]+)?\w+\s+/, "")) ? WINDOW_UNDO : Infinity; }
  if (window !== null) {
    const all = await entries(ctx);
    const pool = kind ? all.filter(kind.match) : all;
    const target = pool[0];
    if (!target) return named ? `I have no ${kind?.name || "entry"} recorded to remove.` : (window === Infinity ? "There is nothing to undo." : null);
    if (window !== Infinity && target.at > 0 && Date.now() - target.at > window) return null; // too long ago to mean "that"; the rest of Kyro may know what they meant
    if (target.locked) return `The last thing I recorded was a payment: ${describe(target, ctx)}. I can't take a payment out from here, because it changed an earlier entry too. Tell me what is owed now instead, for example "John owes me 500".`;
    await remove(ctx, target);
    return removedLine(target, ctx);
  }

  // ---- change the last entry ----
  const correction = readCorrection(t);
  if (correction) {
    const all = await entries(ctx);
    const kindNow = correction.kind ? kindOf(correction.kind) : null;
    const wantedType = correction.kind ? (/sale|income/i.test(correction.kind) ? "income" : /expense|purchase|payment|cost|spending/i.test(correction.kind) ? "expense" : null) : null;
    const pool = kindNow ? all.filter(kindNow.match) : all;
    const target = pool[0];
    if (!target) return wantedType ? `I have no ${wantedType === "income" ? "sale" : "expense"} recorded to change.` : (correction.kind ? `I have no ${kindNow?.name || correction.kind} recorded to change.` : null);
    return applyCorrection(ctx, correction, target);
  }
  return null;
}

module.exports = Object.freeze({ handle, entries, describe, readCorrection });
