"use strict";

const { listOf, record, clean, plural } = require("./common.js");
const { patientFile } = require("./reports.js");
const { describeClinic } = require("./profile.js");
const { askConfirm } = require("../farmwork/guided.js");

// A health worker's control over the patient data they keep: take a full copy, and erase it for good. Patient data must be exportable and erasable, so
// both exist before real patient data goes in.
//  - Export: everything, as a file the worker keeps (JSON by default, so another system can read it; or a readable pdf, word or text copy).
//  - Erase what was removed: removing a patient is a soft delete; this wipes those rows for good.
//  - Erase everything: every patient record, the clinic stock and details. Needs the exact words ERASE ALL, so a stray "yes" can never do it.
//  - A small log of what was exported or erased and when (counts and days, never names) is kept, even through an erase, so the worker can show what happened.
// Kyro cannot reach copies the worker has already made: letters and reports are separate documents, and calendar reminders carry only "patient N".
const PHRASE = "erase all";
const formatOf = text => (/\bpdf\b/i.test(text) ? "pdf" : /\b(?:word|docx)\b/i.test(text) ? "docx" : /\b(?:markdown|md)\b/i.test(text) ? "md" : /\b(?:text|txt)\b/i.test(text) ? "txt" : "json");
const DATA = "(?:patient|patients|health|clinic)";

const audit = (ctx, event, details = {}) => record(ctx, "audit", { event, day: ctx.today, ...details });

async function build(ctx) {
  const c = name => listOf(ctx, name);
  const [patients, visits, doses, pregnancies, followups, referrals, dispenses, supplies, clinic] = await Promise.all(["patient", "visit", "dose", "pregnancy", "followup", "referral", "dispense", "supply", "clinic"].map(c));
  const byPatient = (list, id) => list.filter(item => item.data.pid === id);
  const exported = patients.slice().reverse().map(patient => {
    const d = patient.data; const id = patient.memoryId;
    return { number: patient.number, name: d.name, born: d.born || null, bornApproximate: Boolean(d.bornApprox), sex: d.sex || null, village: d.village || "", contact: d.contact || "", allergies: d.allergies || [], registeredOn: d.registeredOn || null,
      visits: byPatient(visits, id).map(item => ({ day: item.data.day, note: item.data.text, vitals: item.data.vitals || {}, conditionAsStated: item.data.condition || "", noteOnly: Boolean(item.data.noteOnly) })),
      immunisations: byPatient(doses, id).map(item => ({ vaccine: item.data.vaccine, day: item.data.day, nextDue: item.data.nextDue || null })),
      pregnancies: byPatient(pregnancies, id).map(item => ({ status: item.data.status, expectedDelivery: item.data.due || null, deliveredOn: item.data.deliveredOn || null, outcome: item.data.outcome || "" })),
      followUps: byPatient(followups, id).map(item => ({ due: item.data.due, note: item.data.note || "", status: item.data.status, doneOn: item.data.doneOn || null })),
      referrals: byPatient(referrals, id).map(item => ({ day: item.data.day, to: item.data.to, reason: item.data.reason || "" })),
      dispensed: byPatient(dispenses, id).map(item => ({ day: item.data.day, item: item.data.item, quantity: item.data.qty, unit: item.data.unit })) };
  });
  const known = new Set(patients.map(patient => patient.memoryId));
  const counts = { patients: patients.length, visits: visits.length, immunisations: doses.length, pregnancies: pregnancies.length, followUps: followups.length, referrals: referrals.length, dispensed: dispenses.length, clinicStockItems: supplies.length };
  return { patients, counts, records: Object.values(counts).reduce((sum, value) => sum + value, 0) + clinic.length, json: {
    schema: "kyro.health-export.v1", exportedOn: ctx.today,
    note: "Everything this health worker recorded in Kyro, exactly as recorded. Kyro added nothing to it. Patient numbers are the numbers the worker used.",
    clinic: clinic[0] ? { role: clinic[0].data.role, facility: clinic[0].data.facility, area: clinic[0].data.area } : null, counts, patients: exported,
    clinicStock: supplies.map(item => ({ name: item.data.name, quantity: item.data.qty, unit: item.data.unit, lowLevel: item.data.low ?? null, nearestExpiry: item.data.expiry || null })),
    dispensedNotAttachedToAPatient: dispenses.filter(item => !known.has(item.data.pid)).map(item => ({ day: item.data.day, item: item.data.item, quantity: item.data.qty, unit: item.data.unit })) } };
}

// Asks for an exact phrase (a stray "yes" never erases everything). Same shape as a yes/no confirmation, plus the phrase.
async function askPhrase(ctx, sentence, action) {
  await ctx.store.setSession({ tenantId: ctx.tenantId, userId: ctx.userId, session: { collection: "_confirm", answers: {}, asking: "confirm", action: { ...action, phrase: PHRASE }, expiresAt: new Date(Date.now() + 10 * 60000).toISOString() } });
  return `${sentence} To go ahead, type exactly: ERASE ALL. Anything else leaves everything as it is.`;
}

async function handle(ctx) {
  const t = clean(ctx.text).replace(/[.!?]+$/g, ""); const lower = t.toLowerCase();
  const scope = { tenantId: ctx.tenantId, userId: ctx.userId };

  if (new RegExp(`^(?:please )?(?:export|download|back ?up|save a copy of|make a copy of|give me a copy of)(?: me)? (?:all )?(?:of )?my ${DATA} (?:records|data|files|register|information)(?: (?:as|in) (?:a )?(?:json|pdf|word|docx|text|txt|markdown|md)(?: file)?)?$`, "i").test(t)) {
    if (!(await ctx.hasHealthData())) return null;
    const built = await build(ctx); const format = formatOf(t);
    if (!built.patients.length && built.records === 0) return "You have no patient records to export.";
    const content = format === "json" ? JSON.stringify(built.json, null, 2)
      : `HEALTH RECORDS EXPORT\n${built.json.clinic ? `${describeClinic(built.json.clinic)}\n` : ""}Date: ${ctx.today}\nPatients: ${built.counts.patients}, visits: ${built.counts.visits}, immunisations: ${built.counts.immunisations}, referrals: ${built.counts.referrals}\n${"=".repeat(60)}\n\n${(await Promise.all(built.patients.slice().reverse().map(async patient => (await patientFile(ctx, patient)).content))).join(`\n\n${"=".repeat(60)}\n\n`)}\n\nCLINIC STOCK (${built.json.clinicStock.length})\n${built.json.clinicStock.map(item => `  ${item.name}: ${item.quantity} ${item.unit}${item.nearestExpiry ? `, nearest expiry ${item.nearestExpiry}` : ""}`).join("\n") || "  none"}`;
    await audit(ctx, "export", { patients: built.counts.patients, records: built.records, format });
    return { report: { title: `Health records export ${ctx.today}`, content, format } };
  }

  if (new RegExp(`^(?:please )?(?:erase|wipe|destroy|permanently delete|delete) (?:all )?(?:of )?my ${DATA} (?:records|data|information)(?: for good| permanently)?$`, "i").test(t)) {
    if (!(await ctx.hasHealthData())) return null;
    if (!ctx.store.purgeAll) return "Erasing isn't available right now.";
    const built = await build(ctx);
    return askPhrase(ctx, `This will erase for good ${plural(built.counts.patients, "patient")} and every record about them (${plural(built.counts.visits, "visit")}, ${plural(built.counts.immunisations, "immunisation")}, ${plural(built.counts.referrals, "referral")}, the pregnancies and follow-ups), your clinic stock and your clinic details. It cannot be undone. If you want a copy first, say "export all my patient records".`, { type: "erase-all" });
  }

  if (/^(?:please )?(?:erase|purge|wipe|permanently delete|delete for good) (?:my )?removed (?:patient )?(?:records|data)(?: for good| permanently)?$/i.test(t)) {
    if (!ctx.store.purgeRemoved || !ctx.store.countRemoved) return "Erasing isn't available right now.";
    const removed = await ctx.store.countRemoved(scope);
    if (!removed) return (await ctx.hasHealthData()) ? "You have nothing removed waiting to be erased." : null;
    return askConfirm(ctx, `${plural(removed, "removed record")} (patients you removed, and what was kept about them) will be erased for good and cannot come back.`, { type: "erase-removed" });
  }

  if (/^(?:show|list) (?:me )?my (?:data|privacy|export|erase|patient data|health data) (?:log|history)$/i.test(t)) {
    const log = await listOf(ctx, "audit");
    if (!log.length) return "Nothing has been exported or erased yet.";
    return `What you exported or erased (newest first): ${log.slice(0, 12).map(item => { const d = item.data; return `${d.day} — ${d.event === "export" ? `exported ${plural(d.patients, "patient")} (${d.records} records, ${d.format})` : d.event === "erase-all" ? `erased everything (${d.records} records)` : d.event === "erase-removed" ? `erased ${plural(d.records, "removed record")} for good` : d.event === "patient-removed" ? `removed patient #${d.patient} and ${plural(d.records, "record")}` : d.event}`; }).join("; ")}. Names are never kept in this log.`;
  }
  return null;
}

const confirms = {
  "erase-all": async ctx => {
    const built = await build(ctx); const done = await ctx.store.purgeAll({ tenantId: ctx.tenantId, userId: ctx.userId });
    if (done.blocked) return "I can't erase this right now because a legal hold is in place. Nothing was erased.";
    await audit(ctx, "erase-all", { records: built.records, patients: built.counts.patients });
    return `Done. I erased ${plural(built.counts.patients, "patient")} and everything recorded about them, your clinic stock and your clinic details, for good. Two things are outside my reach: letters and reports you already made are separate documents (delete them from your documents), and calendar reminders only ever said "patient N".`;
  },
  "erase-removed": async ctx => {
    const done = await ctx.store.purgeRemoved({ tenantId: ctx.tenantId, userId: ctx.userId });
    if (done.blocked) return "I can't erase this right now because a legal hold is in place. Nothing was erased.";
    await audit(ctx, "erase-removed", { records: done.purged });
    return `Done. I erased ${plural(done.purged, "removed record")} for good.`;
  }
};

module.exports = Object.freeze({ handle, confirms, build, PHRASE });
