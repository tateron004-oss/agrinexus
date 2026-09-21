"use strict";

const { resolvePatient, record, listOf, nameMap, tag, dayWords, addDays, clean, anyDay, pastDay, plural } = require("./common.js");

// Pregnancies the worker is following. The expected delivery date is the worker's own (Kyro does not work one out or say how far along anyone is).
// Antenatal visits are ordinary visits plus a follow-up. A delivery closes the pregnancy.
async function handle(ctx) {
  const t = clean(ctx.text).replace(/[.!?]+$/g, ""); const lower = t.toLowerCase();
  const scope = { tenantId: ctx.tenantId, userId: ctx.userId };
  let m;
  // "Who is pregnant" is a question about the list, not a statement about a patient called "Who".
  const asks = /^(?:who|which|what|when|how|why|where|show|list)\b/i.test(t);

  if (!asks && (m = /^(.+?) is (?:now )?(?:pregnant|expecting)(?:[,;]?\s*(?:due|expected|edd|delivery|expected delivery)(?: date| on| in| is)?\s*(.+))?$/i.exec(t)) || (m = /^(?:register|record|add|start) (?:a )?(?:pregnancy|antenatal(?: record)?) (?:for|of) (.+?)(?:[,;]?\s*(?:due|expected|edd)(?: on| in| is)?\s*(.+))?$/i.exec(t))) {
    const found = await resolvePatient(ctx, m[1], { quiet: true });
    if (found?.reply) return found.reply;
    if (!found) return null;
    const due = m[2] ? anyDay(m[2], ctx.today) : null;
    const first = found.patient.data.name.split(" ")[0];
    if (!due || due < ctx.today || due > addDays(ctx.today, 320)) return `What is ${first}'s expected delivery date? Say "${first} is pregnant, due 12 March".`;
    const existing = (await listOf(ctx, "pregnancy")).find(item => item.data.pid === found.patient.memoryId && item.data.status === "open");
    if (existing) { await ctx.store.update({ ...scope, record: { ...existing, data: { ...existing.data, due } } }); return `Updated ${tag(found.patient)}: expected delivery ${dayWords(due, ctx.today)}.`; }
    await record(ctx, "pregnancy", { pid: found.patient.memoryId, due, status: "open", since: ctx.today });
    if (ctx.personal?.add) await ctx.personal.add({ kind: "event", text: `Expected delivery patient ${found.patient.number}`, day: due, time: "" });
    return `Recorded: ${tag(found.patient)} is pregnant, expected ${dayWords(due, ctx.today)}. Say "antenatal visit ${first}: …" or "follow up ${first} in 4 weeks" to keep her visits.`;
  }

  if (!asks && (m = /^(.+?) (?:has )?(?:delivered|gave birth)(?: (.*))?$/i.exec(t))) {
    const found = await resolvePatient(ctx, m[1], { quiet: true });
    if (found?.reply) return found.reply;
    if (!found) return null;
    const on = /(?:^|\s)on (.+)$/i.exec(m[2] || "");
    const day = on ? pastDay(on[1], ctx.today) : ctx.today;
    if (!day || day > ctx.today) return "I need the day she delivered, like \"on 3 March\", and it can't be in the future.";
    const outcome = clean(on ? (m[2] || "").slice(0, on.index) : (m[2] || "")).slice(0, 80);
    const open = (await listOf(ctx, "pregnancy")).find(item => item.data.pid === found.patient.memoryId && item.data.status === "open");
    if (open) await ctx.store.update({ ...scope, record: { ...open, data: { ...open.data, status: "delivered", deliveredOn: day, outcome } } });
    else await record(ctx, "pregnancy", { pid: found.patient.memoryId, due: null, status: "delivered", deliveredOn: day, outcome, since: day });
    return `Recorded: ${tag(found.patient)} delivered ${day === ctx.today ? "today" : `on ${dayWords(day, ctx.today)}`}${outcome ? ` (${outcome})` : ""}. To keep the baby's records, say "register patient Baby of ${found.patient.data.name.split(" ")[0]}".`;
  }

  if (/^(?:who|which (?:mothers|women|patients)) (?:is|are) (?:pregnant|expecting|due(?: to deliver)?)(?: (?:this month|next month|soon|this week))?$/.test(lower) || /^(?:show|list) (?:me )?(?:my )?(?:pregnant (?:mothers|women|patients)|pregnancies|expectant mothers|antenatal (?:mothers|patients|list))$/.test(lower) || /^(?:mothers|women) due(?: to deliver)?(?: (?:this month|next month|soon|this week))?$/.test(lower)) {
    const patients = nameMap(await listOf(ctx, "patient"));
    if (!patients.size) return null;
    let open = (await listOf(ctx, "pregnancy")).filter(item => item.data.status === "open" && patients.has(item.data.pid)).sort((a, b) => a.data.due.localeCompare(b.data.due));
    if (/this month/.test(lower)) open = open.filter(item => item.data.due.slice(0, 7) === ctx.today.slice(0, 7));
    else if (/next month/.test(lower)) { const next = addDays(`${ctx.today.slice(0, 7)}-28`, 5).slice(0, 7); open = open.filter(item => item.data.due.slice(0, 7) === next); }
    else if (/soon|this week/.test(lower)) open = open.filter(item => item.data.due <= addDays(ctx.today, /soon/.test(lower) ? 28 : 7));
    if (!open.length) return "No pregnancies recorded for that period.";
    return `${plural(open.length, "pregnancy", "pregnancies")}: ${open.slice(0, 10).map(item => `${tag(patients.get(item.data.pid))} — expected ${dayWords(item.data.due, ctx.today)}${item.data.due < ctx.today ? " (date has passed)" : ""}`).join("; ")}${open.length > 10 ? "; …" : ""}.`;
  }
  return null;
}

function pregnancyDigest(records, today) {
  return { soon: (records || []).filter(item => item.collection === "pregnancy" && item.data.status === "open" && item.data.due && item.data.due <= addDays(today, 14)) };
}

module.exports = Object.freeze({ handle, pregnancyDigest });
