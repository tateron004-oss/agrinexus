"use strict";

const { resolvePatient, record, listOf, dayWords, addDays, clean, anyDay, plural } = require("./common.js");
const { askConfirm } = require("../farmwork/guided.js");

// The clinic's medicines and supplies: what came in, what was given out, what is low or about to expire. Counts and dates are exactly what the worker
// says. Kyro never suggests what to stock, what to give, or how much; a stock line is not a dose.
const UNIT_WORDS = "tablets?|tabs?|capsules?|caps?|vials?|ampoules?|ampules?|sachets?|strips?|boxes|box|packs?|packets?|bottles?|doses?|tubes?|kits?|tests?|pieces?|pcs|syringes?|gloves?|pairs?|nets?|bags?|sets?|ml|litres?|liters?|tins?|cartons?|rolls?";
const QTY = `(\\d[\\d,]*(?:\\.\\d+)?)\\s*(${UNIT_WORDS})`;
const HEALTH_CTX = /\b(?:clinic|medicine|medicines|medical|drug|drugs|dispensary|pharmacy|health (?:post|centre|center)|supplies|stockroom)\b/i;
const UNIT_TABLE = [[/^tabs?$|^tablets?$/, "tablet"], [/^caps?$|^capsules?$/, "capsule"], [/^(?:ampoules?|ampules?)$/, "ampoule"], [/^(?:boxes|box)$/, "box"], [/^(?:pcs|pieces?)$/, "piece"], [/^(?:litres?|liters?)$/, "litre"]];
const unitOf = word => { const w = word.toLowerCase(); const hit = UNIT_TABLE.find(([pattern]) => pattern.test(w)); return hit ? hit[1] : w === "ml" ? "ml" : w.replace(/s$/, ""); };
const unitLabel = (value, unit) => `${value} ${unit === "ml" ? "ml" : value === 1 ? unit : unit === "box" ? "boxes" : unit === "litre" ? "litres" : `${unit}s`}`;
const tidy = raw => clean(raw).toLowerCase().replace(/^(?:some|the|of)\s+/, "").replace(/[.,;:]+$/g, "").slice(0, 50);
const nameKey = tidy;

function findSupply(items, query) {
  const wanted = tidy(query);
  if (!wanted) return [];
  const exact = items.filter(item => item.data.name === wanted);
  if (exact.length) return exact;
  const words = wanted.split(" ");
  return items.filter(item => { const parts = item.data.name.split(" "); return words.every(word => parts.includes(word)); });
}
const soleSupply = (items, query) => { const found = findSupply(items, query); return found.length === 1 ? found[0] : null; };

const daysTo = (day, today) => Math.round((Date.parse(day) - Date.parse(today)) / 86400000);

async function handle(ctx) {
  let t = clean(ctx.text).replace(/[.!?]+$/g, ""); const lower = t.toLowerCase();
  const scope = { tenantId: ctx.tenantId, userId: ctx.userId };
  let m;
  // The clinic stock is only read once a message has matched one of the patterns below, so ordinary messages cost no lookup at all.
  let cache = null; const load = async () => (cache || (cache = await listOf(ctx, "supply")));
  let items = [];
  const update = (item, patch) => ctx.store.update({ ...scope, record: { ...item, data: { ...item.data, ...patch, updatedOn: ctx.today } } });

  // ---- stock coming in ----
  let expiry = null;
  const exp = /[,;]?\s*(?:expir(?:es|y|ing)|exp)\s*(?:on|date|:|is)?\s*(.+)$/i.exec(t);
  const stripped = exp ? clean(t.slice(0, exp.index)) : t;
  let incoming = null;
  if ((m = new RegExp(`^(?:please )?(?:add|put|record|log|store) ${QTY} (?:of )?(.+?) (?:to|in|into) (?:the |my |our )?(?:clinic |medicine |drug |medical |health )?(?:stock|store|supplies|inventory|pharmacy|dispensary|stockroom)$`, "i").exec(stripped))) incoming = m;
  else if ((m = new RegExp(`^(?:we |i )?(?:received|got|restocked|delivered)(?: a delivery of| delivery of)? ${QTY} (?:of )?(.+?)(?: (?:at|in|for) (?:the |our |my )?(?:clinic|dispensary|pharmacy|health post|health centre|facility))?$`, "i").exec(stripped))) incoming = m;
  if (incoming) {
    items = await load();
    const name = tidy(incoming[3]); const unit = unitOf(incoming[2]); const qty = Number(incoming[1].replace(/,/g, ""));
    const known = soleSupply(items, name);
    if (name && qty > 0 && (HEALTH_CTX.test(t) || known)) {
      if (exp) { expiry = anyDay(exp[1], ctx.today); if (!expiry) return `I couldn't read "${clean(exp[1])}" as a date. Say it like "expires 2027-03-31" or "expires 31 March 2027".`; if (expiry < ctx.today) return "That expiry date has already passed, so I haven't added it. Check the date on the pack."; }
      if (known && known.data.unit !== unit) return `You keep ${known.data.name} in ${known.data.unit}s; say the amount in ${known.data.unit}s so the count stays right.`;
      if (known) {
        const nearest = expiry && (!known.data.expiry || expiry < known.data.expiry) ? expiry : known.data.expiry;
        await update(known, { qty: Math.round((known.data.qty + qty) * 1000) / 1000, ...(nearest ? { expiry: nearest } : {}) });
        return `Added ${unitLabel(qty, unit)} of ${known.data.name}. You now have ${unitLabel(Math.round((known.data.qty + qty) * 1000) / 1000, unit)}.${expiry ? ` Nearest expiry noted: ${dayWords(nearest, ctx.today)}.` : ""}`;
      }
      if (items.length >= 1000) return "That's the most items I can keep (a thousand). Remove some first.";
      await record(ctx, "supply", { name, qty, unit, low: null, expiry: expiry || null, updatedOn: ctx.today });
      return `Added ${unitLabel(qty, unit)} of ${name}.${expiry ? ` Expiry noted: ${dayWords(expiry, ctx.today)}.` : ""} Say "warn me when ${name} drops below 50" to be told when it runs low.`;
    }
  }

  // ---- stock going out ----
  if ((m = new RegExp(`^(?:i |we )?(dispensed|gave out|issued|used|administered|gave|handed out) ${QTY} (?:of )?(.+?)(?: (?:to|for) (?:patient )?(.+?))?$`, "i").exec(t))) {
    items = await load();
    const strong = /^(?:dispensed|gave out|issued|handed out)$/i.test(m[1]);
    const name = tidy(m[4]); const unit = unitOf(m[3]); const qty = Number(m[2].replace(/,/g, ""));
    const item = soleSupply(items, name);
    if (name && qty > 0 && (item || (strong && items.length))) {
      if (!item) return `I don't have ${name} in your clinic stock. Say "add ${qty} ${m[3]} of ${name} to clinic stock" first.`;
      if (item.data.unit !== unit) return `You keep ${item.data.name} in ${item.data.unit}s; say the amount in ${item.data.unit}s.`;
      if (qty > item.data.qty) return `You have only ${unitLabel(item.data.qty, item.data.unit)} of ${item.data.name} recorded. If the count is wrong, say "set ${item.data.name} stock to ${qty}".`;
      let attach = null; let note = "";
      if (m[5]) { const found = await resolvePatient(ctx, m[5], { quiet: true }); if (found?.reply) return found.reply; if (found?.patient) attach = found.patient; else note = ` (${clean(m[5])} isn't one of your registered patients, so it isn't attached to a record.)`; }
      const left = Math.round((item.data.qty - qty) * 1000) / 1000;
      await update(item, { qty: left });
      await record(ctx, "dispense", { item: item.data.name, qty, unit: item.data.unit, day: ctx.today, ...(attach ? { pid: attach.memoryId } : {}) });
      const low = item.data.low !== null && item.data.low !== undefined && left <= item.data.low;
      return `Recorded: ${unitLabel(qty, item.data.unit)} of ${item.data.name} given out${attach ? ` to ${attach.data.name} (#${attach.number})` : ""}. ${unitLabel(left, item.data.unit)} left.${left === 0 ? " That's the last of it." : low ? " That's at or below your low level." : ""}${note}`;
    }
  }

  // ---- correcting a count ----
  if ((m = /^(?:set|correct|update|change) (?:the )?(?:clinic )?(.+?) (?:stock|count|quantity|level) (?:to|as) (\d[\d,]*(?:\.\d+)?)$/i.exec(t))) {
    items = await load();
    const item = soleSupply(items, m[1]);
    if (item) { const qty = Number(m[2].replace(/,/g, "")); await update(item, { qty }); return `Set ${item.data.name} to ${unitLabel(qty, item.data.unit)}.`; }
  }

  // ---- how much is there ----
  if ((m = /^how (?:much|many) (.+?) (?:do i have|do we have|is there|are there|is left|are left|have i got|in stock)(?: (?:in|at) .+)?$/i.exec(t))) {
    items = await load();
    const item = soleSupply(items, m[1].replace(/^(?:of )?/, ""));
    if (item) return `You have ${unitLabel(item.data.qty, item.data.unit)} of ${item.data.name}${item.data.expiry ? `, nearest expiry ${dayWords(item.data.expiry, ctx.today)}` : ""}.`;
  }

  // ---- warnings ----
  if ((m = new RegExp(`^(?:please )?(?:warn|alert|tell|let|remind) me (?:when|if) (?:my |the |our )?(.+?) (?:drops|goes|falls|gets|is|runs|dips)?\\s*(?:below|under|lower than|less than)\\s*(\\d[\\d,]*(?:\\.\\d+)?)(?:\\s*(?:${UNIT_WORDS}))?$`, "i").exec(t))) {
    items = await load();
    const item = soleSupply(items, m[1]);
    if (item) { const low = Number(m[2].replace(/,/g, "")); await update(item, { low }); return `I'll flag ${item.data.name} in your morning brief when it is at or below ${unitLabel(low, item.data.unit)}.`; }
  }
  if ((m = /^(?:set )?(?:the )?expiry (?:date )?(?:of|for) (.+?) (?:to|is|as) (.+)$/i.exec(t)) || (m = /^(?:the )?(.+?) (?:expires|will expire|expiry is) (?:on )?(.+)$/i.exec(t))) {
    items = await load();
    const item = soleSupply(items, m[1]);
    if (item) { const day = anyDay(m[2], ctx.today); if (!day) return `I couldn't read "${clean(m[2])}" as a date.`; if (day < ctx.today) return "That date has already passed, so I haven't saved it. Check the date on the pack."; await update(item, { expiry: day }); return `Noted: ${item.data.name} expires ${dayWords(day, ctx.today)}.`; }
  }

  // ---- lists ----
  if (/^what (?:medicines?|drugs?|supplies)(?: are| is)? (?:running )?(?:low|short|out|finished|out of stock)$/.test(lower) || /^what(?:'s| is| are) (?:running )?(?:low|out|short) (?:in|at) (?:the |my |our )?(?:clinic|pharmacy|dispensary|store|stockroom)$/.test(lower) || /^(?:show|list) (?:me )?(?:the )?(?:low|out of stock|finished) (?:medicines|drugs|supplies)$/.test(lower) || /^which (?:medicines|drugs|supplies) (?:are )?(?:low|out|finished)$/.test(lower)) {
    items = await load();
    if (!items.length) return 'Your clinic stock is empty. Say "add 100 tablets of paracetamol to clinic stock".';
    const out = items.filter(item => item.data.qty === 0); const low = items.filter(item => item.data.qty > 0 && item.data.low !== null && item.data.low !== undefined && item.data.qty <= item.data.low);
    if (!out.length && !low.length) return 'Nothing is at or below the low level you set. Say "warn me when paracetamol drops below 50" to set one.';
    return `${out.length ? `Out of stock: ${out.map(item => item.data.name).join(", ")}. ` : ""}${low.length ? `Low: ${low.map(item => `${item.data.name} (${unitLabel(item.data.qty, item.data.unit)})`).join(", ")}.` : ""}`.trim();
  }
  if (/^what (?:medicines?|drugs?|supplies)(?: are| is)? (?:about to )?expir(?:e|es|ing)(?: soon)?$/.test(lower) || /^(?:show|list) (?:me )?(?:the )?expiring (?:medicines|drugs|supplies)$/.test(lower) || /^which (?:medicines|drugs|supplies) (?:are )?(?:about to )?expir(?:e|ing)(?: soon)?$/.test(lower)) {
    items = await load();
    const soon = items.filter(item => item.data.expiry && item.data.expiry <= addDays(ctx.today, 90)).sort((a, b) => a.data.expiry.localeCompare(b.data.expiry));
    if (!soon.length) return "Nothing you've told me about expires in the next three months.";
    return `Expiring within three months: ${soon.slice(0, 10).map(item => `${item.data.name} — ${item.data.expiry < ctx.today ? `expired ${dayWords(item.data.expiry, ctx.today)}` : dayWords(item.data.expiry, ctx.today)}`).join("; ")}.`;
  }
  if (/^(?:show|list|read) (?:me )?(?:my |the |our )?(?:clinic |medicine |drug |medical |health |pharmacy )(?:stock|supplies|inventory)$/.test(lower) || /^(?:show|list|read) (?:me )?(?:my |the |our )?(?:medicines|drugs|supplies|medical supplies)$/.test(lower) || /^what(?:'s| is) in (?:the |my |our )?(?:clinic|medicine|drug|pharmacy) (?:stock|store)$/.test(lower)) {
    items = await load();
    if (!items.length) return 'Your clinic stock is empty. Say "add 100 tablets of paracetamol to clinic stock".';
    return `${plural(items.length, "item")} in clinic stock: ${items.slice().reverse().slice(0, 15).map(item => `${item.data.name} ${unitLabel(item.data.qty, item.data.unit)}`).join("; ")}${items.length > 15 ? `; and ${items.length - 15} more` : ""}.`;
  }

  // ---- removing an item ----
  if ((m = /^(?:please )?(?:remove|delete) (.+?) from (?:the |my |our )?(?:clinic |medicine |drug )?(?:stock|supplies|inventory|pharmacy)$/i.exec(t))) {
    items = await load();
    const item = soleSupply(items, m[1]);
    if (item) return askConfirm(ctx, `Remove ${item.data.name} (${unitLabel(item.data.qty, item.data.unit)}) from your clinic stock?`, { type: "remove-record", memoryId: item.memoryId, label: item.data.name });
  }
  return null;
}

function suppliesDigest(records, today) {
  const items = (records || []).filter(item => item.collection === "supply");
  return { out: items.filter(item => item.data.qty === 0), low: items.filter(item => item.data.qty > 0 && item.data.low !== null && item.data.low !== undefined && item.data.qty <= item.data.low), expiring: items.filter(item => item.data.expiry && item.data.expiry <= addDays(today, 60)) };
}

module.exports = Object.freeze({ handle, suppliesDigest, findSupply, unitLabel, daysTo });
