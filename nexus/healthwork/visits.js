"use strict";

const { resolvePatient, record, listOf, nameMap, tag, describeDay, addDays, clean, anyDay, plural } = require("./common.js");
const { askConfirm } = require("../farmwork/guided.js");

// Visits and follow-ups. A visit note is what the worker says happened, kept as they said it. Numbers they mention (temperature, blood pressure,
// pulse, weight, MUAC...) are picked out so they can be looked back on, exactly as given. Kyro never says whether a reading is normal, never names a
// condition (a condition is only recorded when the worker says "diagnosis: ..."), and never suggests treatment.
const num = value => Number(String(value).replace(",", "."));
const between = (value, low, high) => Number.isFinite(value) && value >= low && value <= high;

// -> { vitals, unread }. `unread` lists numbers that could not be right (a typing slip like "temp 385"), which are NOT stored as a number, so the worker can correct them.
function readVitals(text) {
  const t = String(text || ""); const vitals = {}; const unread = [];
  const take = (pattern, name, valid, build) => { const m = pattern.exec(t); if (!m) return; const value = build(m); if (value === null) unread.push(name); else vitals[name] = value; };
  take(/\b(?:temp(?:erature)?)\s*(?:is|of|was|:|=)?\s*(\d{2,3}(?:[.,]\d)?)\s*(?:°|º|deg(?:rees)?)?\s*([cf])?\b/i, "temperature", null, m => {
    const value = num(m[1]); const unit = (m[2] || "").toUpperCase() || (value > 45 ? "F" : "C");
    return unit === "C" ? (between(value, 30, 45) ? { value, unit: "C" } : null) : (between(value, 86, 113) ? { value, unit: "F" } : null);
  });
  take(/\b(?:bp|blood pressure)\s*(?:is|of|was|:|=)?\s*(\d{2,3})\s*(?:\/|over)\s*(\d{2,3})\b/i, "bloodPressure", null, m => { const systolic = Number(m[1]); const diastolic = Number(m[2]); return between(systolic, 50, 300) && between(diastolic, 20, 200) && systolic > diastolic ? { systolic, diastolic } : null; });
  take(/\b(?:pulse|heart rate|hr)\s*(?:is|of|was|:|=)?\s*(\d{2,3})\b/i, "pulse", null, m => (between(Number(m[1]), 20, 250) ? Number(m[1]) : null));
  take(/\b(?:resp(?:iratory)? rate|rr|breaths?)\s*(?:is|of|was|:|=)?\s*(\d{1,2})\b/i, "respiratoryRate", null, m => (between(Number(m[1]), 5, 90) ? Number(m[1]) : null));
  take(/\b(?:spo2|sp02|sats?|oxygen(?: saturation)?)\s*(?:is|of|was|:|=)?\s*(\d{2,3})\s*%?/i, "oxygen", null, m => (between(Number(m[1]), 50, 100) ? Number(m[1]) : null));
  take(/\b(?:weight|wt|weighs|weighed)\s*(?:is|of|was|:|=)?\s*(\d{1,3}(?:[.,]\d+)?)\s*kgs?\b/i, "weightKg", null, m => (between(num(m[1]), 0.3, 300) ? num(m[1]) : null));
  // Found live (health-toolkit audit): the unitless guess ("value < 40 means
  // cm") and the final acceptance range (between(mm, 50, 400), i.e. 5-40cm)
  // disagreed at their own shared boundary -- a bare "39" guessed as cm
  // (390mm) passed, but a bare "40" one unit higher fell into neither
  // branch cleanly (guessed as already-mm, giving 40, which then failed the
  // same between() check) and was silently discarded as unreadable instead
  // of being treated the same consistent way. <=40 aligns the guess with
  // the range's own upper bound (40cm == 400mm, the top of what's accepted).
  take(/\bmuac\s*(?:is|of|was|:|=)?\s*(\d{1,3}(?:[.,]\d+)?)\s*(mm|cm)?/i, "muacMm", null, m => { const value = num(m[1]); const mm = m[2] ? (m[2].toLowerCase() === "cm" ? value * 10 : value) : (value <= 40 ? value * 10 : value); return between(mm, 50, 400) ? Math.round(mm) : null; });
  return { vitals, unread };
}

const vitalWords = vitals => {
  const out = [];
  if (vitals.temperature) out.push(`temp ${vitals.temperature.value}°${vitals.temperature.unit}`);
  if (vitals.bloodPressure) out.push(`BP ${vitals.bloodPressure.systolic}/${vitals.bloodPressure.diastolic}`);
  if (vitals.pulse) out.push(`pulse ${vitals.pulse}`);
  if (vitals.respiratoryRate) out.push(`resp ${vitals.respiratoryRate}`);
  if (vitals.oxygen) out.push(`SpO2 ${vitals.oxygen}%`);
  if (vitals.weightKg) out.push(`${vitals.weightKg} kg`);
  if (vitals.muacMm) out.push(`MUAC ${vitals.muacMm} mm`);
  return out.join(", ");
};

// The condition is only what the worker states.
const conditionOf = text => clean(/\b(?:diagnosis|diagnosed|dx|impression|condition)\s*(?:is|was|:|=)?\s*([^,;.]{2,60})/i.exec(text)?.[1] || "").toLowerCase();

const followLine = (item, patients, today) => { const patient = patients.get(item.data.pid); return `${patient ? tag(patient) : "a removed patient"} — ${item.data.due < today ? `overdue since ${describeDay(item.data.due, today)}` : describeDay(item.data.due, today)}${item.data.note ? ` (${item.data.note.slice(0, 50)})` : ""}`; };

async function handle(ctx) {
  const t = clean(ctx.text).replace(/[.!?]+$/g, ""); const lower = t.toLowerCase();
  const scope = { tenantId: ctx.tenantId, userId: ctx.userId };
  let m;

  // ---- record a visit ----
  let visit = null;
  // Only "visit note ...", "add a visit ..." and the like complain about an unknown name; a bare "Visit Nairobi: ..." is left to normal planning.
  if ((m = /^(?:please )?(visit|visit note|add (?:a )?visit(?: note)?|record (?:a )?visit|new visit|log (?:a )?visit)\s*(?:for|to|on)?\s*(?:patient )?(.+?)\s*(?:(today|yesterday)\s*)?[:,-]\s*(.+)$/i.exec(t))) visit = { who: m[2], when: m[3], body: m[4], explicit: m[1].toLowerCase() !== "visit" };
  else if ((m = /^(?:i )?(?:saw|visited|examined|attended|treated|reviewed|checked) (?:patient )?(.+?)\s*(?:(today|yesterday|this morning)\s*)?[:,-]\s*(.+)$/i.exec(t))) visit = { who: m[1], when: m[2], body: m[3], explicit: false };
  if (visit) {
    const found = await resolvePatient(ctx, visit.who, { quiet: !visit.explicit });
    if (found?.reply) return found.reply;
    if (!found) return null;
    const day = /yesterday/i.test(visit.when || "") ? addDays(ctx.today, -1) : ctx.today;
    const text = clean(visit.body).slice(0, 600); const { vitals, unread } = readVitals(text); const condition = conditionOf(text);
    const patient = found.patient;
    const created = await record(ctx, "visit", { pid: patient.memoryId, day, text, vitals, condition });
    // a follow-up that was waiting for this visit is done
    const open = (await listOf(ctx, "followup")).filter(item => item.data.pid === patient.memoryId && item.data.status === "open" && item.data.due <= ctx.today).sort((a, b) => a.data.due.localeCompare(b.data.due))[0];
    if (open) await ctx.store.update({ ...scope, record: { ...open, data: { ...open.data, status: "done", doneOn: ctx.today } } });
    const read = vitalWords(vitals);
    return `Recorded visit ${created.number} for ${tag(patient)}${day !== ctx.today ? ` on ${describeDay(day, ctx.today)}` : ""}${read ? `: ${read}` : ""}.${condition ? ` Condition (as you said): ${condition}.` : ""}${unread.length ? ` I couldn't read the ${unread.join(" and ")} you gave as a number, so please say it again if it matters.` : ""}${open ? " I marked the follow-up done." : ""} To see them again, say "follow up ${patient.data.name.split(" ")[0]} in 3 days".`;
  }

  // ---- schedule a follow-up ----
  if ((m = /^(?:please )?(?:follow up|follow-up|review|recall|check on|check back on|revisit|see) (?:with )?(?:patient )?(.+?)\s+(?:again )?(in \d+ (?:days?|weeks?|months?)|on .+?|next .+?|tomorrow|today|this .+?|by .+?)(?:\s*[:,-]\s*(.+))?$/i.exec(t))) {
    const found = await resolvePatient(ctx, m[1], { quiet: true });
    if (found?.reply) return found.reply;
    if (!found) return null;
    const due = anyDay(m[2], ctx.today);
    if (!due || due < ctx.today) return `When should I have you see ${found.patient.data.name} again? Say "follow up ${found.patient.data.name.split(" ")[0]} in 3 days" or "on Friday".`;
    const open = (await listOf(ctx, "followup")).filter(item => item.data.pid === found.patient.memoryId && item.data.status === "open");
    if (open.length >= 10) return "That patient already has ten follow-ups waiting. Mark some done first.";
    const created = await record(ctx, "followup", { pid: found.patient.memoryId, due, note: clean(m[3] || "").slice(0, 120), status: "open" });
    // The calendar item carries only the patient's number, so a name never appears in a reminder or the morning brief.
    if (ctx.personal?.add) await ctx.personal.add({ kind: "event", text: `Follow up patient ${found.patient.number}`, day: due, time: "" });
    return `Follow-up ${created.number}: ${tag(found.patient)}, ${describeDay(due, ctx.today)}. It's on your calendar as "Follow up patient ${found.patient.number}" (no name, to keep it private).`;
  }

  // "Follow up Mary" with no day: ask when (only for one of this person's own patients).
  if ((m = /^(?:please )?(?:follow up|follow-up) (?:with )?(?:patient )?(.+)$/i.exec(t)) && !/\b(?:in \d+|on |next |tomorrow|today|this |by )/i.test(t)) {
    const found = await resolvePatient(ctx, m[1], { quiet: true });
    if (found?.reply) return found.reply;
    if (found) return `When should I have you see ${found.patient.data.name} again? Say "follow up ${found.patient.data.name.split(" ")[0]} in 3 days" or "on Friday".`;
  }

  // ---- who to see ----
  if (/^(?:who|which patients?) (?:needs?|need|is due|are due|should i see|do i need to see)(?: a)?(?: follow-?ups?| to be seen| review)?(?: (today|tomorrow|this week))?$/.test(lower) || /^(?:show|list) (?:me )?(?:my )?follow-?ups$/.test(lower) || /^(?:what|which) follow-?ups (?:do i have|are (?:due|open|overdue))$/.test(lower) || /^who (?:is|are) overdue$/.test(lower)) {
    const patients = nameMap(await listOf(ctx, "patient"));
    if (!patients.size) return null;
    const open = (await listOf(ctx, "followup")).filter(item => item.data.status === "open" && patients.has(item.data.pid)).sort((a, b) => a.data.due.localeCompare(b.data.due));
    if (!open.length) return "No follow-ups are waiting.";
    const week = addDays(ctx.today, 7); const overdue = open.filter(item => item.data.due < ctx.today);
    const soon = open.filter(item => item.data.due <= week);
    return `${plural(open.length, "follow-up")} waiting${overdue.length ? `, ${overdue.length} overdue` : ""}. ${(soon.length ? soon : open).slice(0, 8).map(item => `${item.number}. ${followLine(item, patients, ctx.today)}`).join("; ")}${(soon.length ? soon : open).length > 8 ? "; …" : ""}. Say "follow-up 3 done" when you've seen them.`;
  }
  if ((m = /^(?:mark )?follow-?up #?(\d{1,5}) (?:as )?(?:done|complete|completed|seen)$/i.exec(t)) || (m = /^(?:cancel|remove) follow-?up #?(\d{1,5})$/i.exec(t))) {
    const item = (await listOf(ctx, "followup")).find(entry => entry.number === Number(m[1]));
    if (!item || item.data.status !== "open") return `I can't find an open follow-up ${m[1]}.`;
    const cancelled = /^(?:cancel|remove)/i.test(t);
    await ctx.store.update({ ...scope, record: { ...item, data: { ...item.data, status: cancelled ? "cancelled" : "done", doneOn: ctx.today } } });
    return cancelled ? `Follow-up ${m[1]} cancelled.` : `Follow-up ${m[1]} marked done.`;
  }
  if ((m = /^(?:done|finished) (?:following up|follow-?up|seeing|reviewing) (?:with )?(.+)$/i.exec(t))) {
    const found = await resolvePatient(ctx, m[1], { quiet: true });
    if (found?.reply) return found.reply;
    if (!found) return null;
    const open = (await listOf(ctx, "followup")).filter(item => item.data.pid === found.patient.memoryId && item.data.status === "open");
    if (!open.length) return `${found.patient.data.name} has no follow-up waiting.`;
    for (const item of open) await ctx.store.update({ ...scope, record: { ...item, data: { ...item.data, status: "done", doneOn: ctx.today } } });
    return `Marked ${plural(open.length, "follow-up")} for ${found.patient.data.name} done.`;
  }

  // ---- visit history ----
  if ((m = /^(?:show|list) (?:me )?(?:the )?(?:visits|visit history) (?:for|of) (?:patient )?(.+)$/i.exec(t)) || (m = /^(?:show|list) (?:me )?(.+?)['’]s visits$/i.exec(t)) || (m = /^(?:last|latest) visit (?:for|of) (?:patient )?(.+)$/i.exec(t))) {
    const found = await resolvePatient(ctx, m[1], { quiet: true });
    if (found?.reply) return found.reply;
    if (!found) return null;
    const visits = (await listOf(ctx, "visit")).filter(item => item.data.pid === found.patient.memoryId && !item.data.noteOnly).sort((a, b) => b.data.day.localeCompare(a.data.day));
    if (!visits.length) return `No visits recorded for ${found.patient.data.name} yet.`;
    const last = /^(?:last|latest)/i.test(t);
    return `${tag(found.patient)}: ${(last ? visits.slice(0, 1) : visits.slice(0, 6)).map(item => `${item.data.day}${vitalWords(item.data.vitals || {}) ? ` — ${vitalWords(item.data.vitals)}` : ""}${item.data.condition ? ` — ${item.data.condition}` : ""} — ${item.data.text.slice(0, 120)}`).join("; ")}${!last && visits.length > 6 ? `; and ${visits.length - 6} earlier` : ""}.`;
  }
  return null;
}

// Counts for the brief: follow-ups due or overdue, without any names.
function visitsDigest(records, today) {
  const open = (records || []).filter(item => item.collection === "followup" && item.data.status === "open");
  return { due: open.filter(item => item.data.due <= today) };
}

module.exports = Object.freeze({ handle, readVitals, vitalWords, conditionOf, visitsDigest });
