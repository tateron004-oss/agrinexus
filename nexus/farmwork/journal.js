"use strict";

const { clean, plural } = require("./parse.js");
const { describeDay } = require("../personal/dates.js");
const { nameKey } = require("./fields.js");

// A pest and disease journal: what the farmer saw, where, what they did about it, and how it turned out, so the same problem is not
// forgotten next season. Kyro records; it NEVER says what a pest or disease is, what to spray, or how much. It says so every time, and
// points to the extension officer or agro-vet.
const SIGNS = /\b(?:armyworms?|aphids?|weevils?|borers?|stem ?borers?|locusts?|beetles?|caterpillars?|whiteflies|whitefly|mites?|nematodes?|thrips|cutworms?|termites?|blights?|rust|wilt(?:ing)?|mildew|rot(?:ting)?|mosaic|smut|scab|leaf spots?|spots on|yellowing|yellow leaves|holes in|chewed|eaten|curling|stunted|pests?|diseases?|insects?|worms?|fungus|mou?ld|ticks?|lice|flies|mastitis|scours|diarrh?oea|limping|coughing|swollen)\b/i;
// A plain "I saw a fly" is not a farm problem: without the found-form must mention a crop, a plant part, a field or an animal.
const FARM_CONTEXT = /\b(?:maize|corn|beans?|cassava|rice|sorghum|millet|tomato(?:es)?|potato(?:es)?|cabbage|kale|onions?|bananas?|coffee|tea|wheat|groundnuts?|crops?|plants?|seedlings?|leaves|leaf|stems?|fruits?|grain|garden|farm|fields?|plots?|cows?|calf|goats?|sheep|pigs?|chickens?|hens?|animals?|herd|flock|store)\b/i;
const DISCLAIMER = "I only keep a record; I can't tell you what it is or what to use. Your extension officer or agro-vet can.";

async function handle(ctx) {
  const t = clean(ctx.text).replace(/[.!?]+$/g, ""); const lower = t.toLowerCase();
  const scope = { tenantId: ctx.tenantId, userId: ctx.userId };
  let m;

  const explicit = /^(?:please )?(?:log|record|note|add|report)\s+(?:a |an )?(pest|disease|pest problem|disease problem|crop problem|animal problem|problem|damage)\s*[:,-]\s*(.+)$/i.exec(t);
  const found = !explicit && (m = /^(?:i )?(?:found|saw|noticed|spotted|see|have|got) (.{3,120}?)(?: (?:in|on|at) (?:my )?(?:the )?(?:field |plot )?(.{2,40}?)(?: field| plot)?)?$/i.exec(t)) && SIGNS.test(m[1]) && FARM_CONTEXT.test(t) ? m : null;
  if (explicit || found) {
    const text = clean(explicit ? explicit[2] : t.replace(/^(?:i )?(?:found|saw|noticed|spotted|see|have|got)\s+/i, "")).slice(0, 300);
    const fields = await ctx.store.list({ ...scope, collection: "field" });
    const mentioned = fields.find(field => nameKey(field.data.name) && new RegExp(`\\b${nameKey(field.data.name).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i").test(`${text} ${found?.[2] || ""}`));
    const kind = /disease|blight|rust|wilt|mildew|rot|mosaic|smut|scab|mastitis|scours|fungus|mou?ld/i.test(`${explicit?.[1] || ""} ${text}`) ? "disease" : "pest";
    const entries = await ctx.store.list({ ...scope, collection: "pest" });
    if (entries.length >= 2000) return "Your journal is full (two thousand entries). Remove some first.";
    const entry = await ctx.store.add({ ...scope, collection: "pest", data: { kind, text, field: mentioned?.data.name || "", crop: mentioned?.data.crop || "", day: ctx.today, status: "open", actions: [] } });
    return `Logged #${entry.number}: "${text}"${mentioned ? ` (${mentioned.data.name}${mentioned.data.crop ? `, ${mentioned.data.crop}` : ""})` : ""}. ${DISCLAIMER} Say "update problem ${entry.number}: sprayed …" to note what you did, or "problem ${entry.number} is resolved".`;
  }

  if ((m = /^(?:update|add to|note on) (?:pest|disease|problem|entry) #?(\d{1,5})\s*[:,-]\s*(.+)$/i.exec(t))) {
    const entry = (await ctx.store.list({ ...scope, collection: "pest" })).find(item => item.number === Number(m[1]));
    if (!entry) return `I can't find problem ${m[1]} in your journal.`;
    await ctx.store.update({ ...scope, record: { ...entry, data: { ...entry.data, actions: [...(entry.data.actions || []), { day: ctx.today, text: clean(m[2]).slice(0, 200) }].slice(-20) } } });
    return `Added to problem ${entry.number}: ${clean(m[2]).slice(0, 120)}. ${DISCLAIMER}`;
  }
  if ((m = /^(?:pest|disease|problem|entry) #?(\d{1,5}) (?:is |has )?(resolved|gone|fixed|solved|under control|worse|spreading|better|improving)(?:\s*[:,-]\s*(.*))?$/i.exec(t))) {
    const entry = (await ctx.store.list({ ...scope, collection: "pest" })).find(item => item.number === Number(m[1]));
    if (!entry) return `I can't find problem ${m[1]} in your journal.`;
    const word = m[2].toLowerCase(); const resolved = /resolved|gone|fixed|solved|under control/.test(word);
    await ctx.store.update({ ...scope, record: { ...entry, data: { ...entry.data, status: resolved ? "resolved" : "open", outcome: `${word}${m[3] ? `: ${clean(m[3]).slice(0, 150)}` : ""}`, outcomeDay: ctx.today } } });
    return `Noted: problem ${entry.number} is ${word}.${resolved ? " I've marked it resolved." : " I've kept it open."}`;
  }

  if (/^(?:show|list|read) (?:me )?my (?:pest|disease|pest and disease|crop problem)s?(?: journal| log| record| problems)?$/.test(lower) || /^(?:what|which) (?:pest|disease|crop)s? problems? (?:are|do i have)(?: still)? (?:open|ongoing|active)$/.test(lower) || /^(?:show|list) (?:my )?(?:open )?(?:pest|disease|crop) problems$/.test(lower)) {
    const entries = await ctx.store.list({ ...scope, collection: "pest" });
    if (!entries.length) return 'Your pest and disease journal is empty. Say "log pest: armyworm in the maize" when you see one.';
    const open = entries.filter(entry => entry.data.status === "open");
    return `${plural(open.length, "open problem")}, ${entries.length - open.length} resolved. Latest: ${entries.slice(0, 5).map(entry => `#${entry.number} ${entry.data.text.slice(0, 50)}${entry.data.field ? ` (${entry.data.field})` : ""} — ${entry.data.status}`).join("; ")}.`;
  }
  if ((m = /^(?:show|list|what) (?:pest|disease|crop)?\s*(?:problems?|pests?|diseases?)? (?:in|on|for|at) (?:my )?(?:field |plot )?(.+?)(?: field| plot)?$/i.exec(t)) && !/\b(?:weather|prices?)\b/i.test(t)) {
    const fields = await ctx.store.list({ ...scope, collection: "field" }); const field = fields.find(item => nameKey(item.data.name) === nameKey(m[1]));
    if (field) { const entries = (await ctx.store.list({ ...scope, collection: "pest" })).filter(entry => entry.data.field === field.data.name); return entries.length ? `In ${field.data.name}: ${entries.slice(0, 6).map(entry => `#${entry.number} ${entry.data.text.slice(0, 50)} (${describeDay(entry.data.day, ctx.today)}, ${entry.data.status})`).join("; ")}.` : `Nothing in your journal for ${field.data.name}.`; }
  }
  if ((m = /^what did i do (?:about|for|with) (.{3,40})$/i.exec(t))) {
    const word = clean(m[1]).toLowerCase().replace(/^(?:the|my)\s+/, "");
    const hits = (await ctx.store.list({ ...scope, collection: "pest" })).filter(entry => entry.data.text.toLowerCase().includes(word));
    if (!hits.length) return null;
    return hits.slice(0, 3).map(entry => `#${entry.number} (${describeDay(entry.data.day, ctx.today)}): ${entry.data.text.slice(0, 60)}. ${(entry.data.actions || []).length ? `You noted: ${entry.data.actions.map(action => action.text).join("; ")}.` : "You didn't note an action."}${entry.data.outcome ? ` Outcome: ${entry.data.outcome}.` : ""}`).join(" ");
  }
  return null;
}

const journalDigest = records => ({ open: (records || []).filter(record => record.collection === "pest" && record.data.status === "open") });

module.exports = Object.freeze({ handle, journalDigest, SIGNS });
