"use strict";

const { startGuided, askConfirm } = require("../farmwork/guided.js");
const { MAX_PATIENTS, parseAge, ageWords, sexOf, patientLine, findPatient, resolvePatient, record, listOf, clean, titleCase, plural, describeDay } = require("./common.js");

// The patient register: who the health worker looks after, kept privately in their own account. Kyro records what the worker says (a name, an
// age, a village, an allergy the worker already knows) and never adds, checks or interprets anything.
const SEX_CHOICES = [{ value: "female", words: ["female", "woman", "girl", "f", "mother"] }, { value: "male", words: ["male", "man", "boy", "m", "father"] }, { value: "other", words: ["other", "intersex"] }];

const templates = {
  patient: {
    collection: "patient", intro: "Let's register them.",
    questions: [
      { key: "name", ask: "What is the patient's name?", type: "text", max: 60 },
      { key: "age", ask: 'How old? Say "34 years", "6 months" or "3 weeks", or a birth date.', type: "age", optional: true, parse: (raw, q, ctx) => { const age = parseAge(raw, ctx.today); return age ? { value: age } : { hint: 'Say the age like "34 years", "6 months" or "3 weeks", or a birth date.' }; } },
      { key: "sex", ask: "Female or male?", type: "choice", options: SEX_CHOICES, optional: true },
      { key: "village", ask: "Which village or area?", type: "text", max: 60, optional: true },
      { key: "contact", ask: "A phone number, or the parent or guardian's name for a child, if you have one?", type: "text", max: 80, optional: true }
    ],
    async finish(ctx, answers) {
      const clear = Object.fromEntries(Object.entries(answers).filter(([, value]) => value !== null && value !== undefined && value !== ""));
      const patients = await listOf(ctx, "patient");
      if (patients.length >= MAX_PATIENTS) return `You have ${MAX_PATIENTS} patients registered, which is the most I can keep. Remove some first.`;
      const name = titleCase(clear.name);
      const data = { name, born: clear.age?.born || null, bornApprox: Boolean(clear.age?.approx), sex: clear.sex || null, village: clear.village ? titleCase(clear.village) : "", contact: clear.contact || "", allergies: [], registeredOn: ctx.today };
      const created = await record(ctx, "patient", data);
      const same = patients.filter(patient => patient.data.name.toLowerCase() === name.toLowerCase());
      return `Registered ${patientLine(created, ctx.today)}${data.contact ? `, contact: ${data.contact}` : ""}.${same.length ? ` You already have ${plural(same.length, "patient")} with that name (${same.map(patient => `#${patient.number}`).join(", ")}), so use the number, like "patient ${created.number}", to tell them apart.` : ""} Say "visit ${name.split(" ")[0]}: …" to record a visit.`;
    }
  }
};

// "Mary Akinyi, 34, female, Kibera" or "Mary Akinyi 34 years old female from Kibera" -> what can be picked out; the rest is asked.
function inline(rest, today) {
  const text = clean(rest).replace(/^(?:called|named|is|:)\s*/i, "");
  const parts = text.split(/\s*,\s*/);
  let name = parts.shift() || "";
  const tail = [];
  const cut = /\s+(?:aged?\s+\d|\d+\s*(?:years?|yrs?|months?|weeks?|days?)|(?:female|male|girl|boy|woman|man)\b|from\b)/i.exec(name);
  if (cut) { tail.push(name.slice(cut.index)); name = name.slice(0, cut.index); }
  tail.push(...parts);
  const prefill = {};
  if (name && name.length <= 60 && !/\d/.test(name)) prefill.name = titleCase(name);
  const pieces = tail.join(" , ").split(/\s*,\s*/).map(clean).filter(Boolean).flatMap(piece => { const at = piece.search(/\bfrom\s+/i); return at > 0 ? [clean(piece.slice(0, at)), piece.slice(at)] : [piece]; });
  for (const piece of pieces) {
    const ageMatch = /(?:aged?\s+)?(\d{1,3}\s*(?:years?|yrs?|y|months?|mos?|weeks?|wks?|days?)?)(?:[\s-]+old)?/i.exec(piece);
    const villageMatch = /^from\s+(.+)$/i.exec(piece);
    const sexWord = piece.split(/\s+/).map(sexOf).find(Boolean);
    if (villageMatch) prefill.village = titleCase(villageMatch[1]);
    else if (ageMatch && /\d/.test(piece)) { const age = parseAge(ageMatch[1], today); if (age) prefill.age = age; const rest2 = clean(piece.replace(ageMatch[0], "")); const s2 = rest2 ? rest2.split(/\s+/).map(sexOf).find(Boolean) : null; if (s2) prefill.sex = s2; }
    else if (sexWord && piece.split(/\s+/).length <= 3) prefill.sex = sexWord;
    else if (!/\d/.test(piece) && piece.length <= 60 && !prefill.village) prefill.village = titleCase(piece);
  }
  return prefill;
}

function recordText(patient, ctx, { visits, doses, pregnancy, followups, referrals }) {
  const d = patient.data;
  const lines = [`${patientLine(patient, ctx.today)}.`];
  if (d.contact) lines.push(`Contact: ${d.contact}.`);
  if (d.allergies?.length) lines.push(`Allergies you told me: ${d.allergies.join(", ")}.`);
  if (pregnancy) lines.push(`Pregnancy: expected ${describeDay(pregnancy.data.due, ctx.today)}.`);
  if (visits.length) lines.push(`Visits (${visits.length}): ${visits.slice(0, 4).map(visit => `${visit.data.day}${visit.data.condition ? ` — ${visit.data.condition}` : ""}${visit.data.text ? ` (${visit.data.text.slice(0, 80)})` : ""}`).join("; ")}${visits.length > 4 ? "; …" : ""}.`);
  else lines.push("No visits recorded yet.");
  if (doses.length) lines.push(`Immunisations: ${doses.slice(0, 6).map(dose => `${dose.data.vaccine} ${dose.data.day}`).join("; ")}.`);
  if (followups.length) lines.push(`Follow-up: ${followups.map(item => `${describeDay(item.data.due, ctx.today)}`).join(", ")}.`);
  if (referrals.length) lines.push(`Referred: ${referrals.slice(0, 3).map(item => `${item.data.to} ${item.data.day}`).join("; ")}.`);
  return lines.join(" ");
}

async function historyOf(ctx, patient) {
  const [visits, doses, pregnancies, followups, referrals] = await Promise.all(["visit", "dose", "pregnancy", "followup", "referral"].map(name => listOf(ctx, name)));
  const mine = list => list.filter(item => item.data.pid === patient.memoryId);
  return { visits: mine(visits), doses: mine(doses), pregnancy: mine(pregnancies).find(item => item.data.status === "open"), followups: mine(followups).filter(item => item.data.status === "open"), referrals: mine(referrals) };
}

async function handle(ctx) {
  const t = clean(ctx.text).replace(/[.!?]+$/g, ""); const lower = t.toLowerCase();
  let m;

  // ---- register ----
  // "client" is deliberately not here: "add a client" is a customer in the farm toolkit. "Patient" works with add/create/start; the words for a
  // mother, child or baby need the explicit "register".
  if (((m = /^(?:please )?(?:register|add|create|start|enrol|enroll) (?:a |another |a new |new |the )?patient(?: called| named| record for| file for)?\s*[:,-]?\s*(.*)$/i.exec(t)) || (m = /^(?:please )?(?:register|enrol|enroll) (?:a |another |a new |new |the )?(?:mother|child|baby)(?: called| named| record for| file for)?\s*[:,-]?\s*(.*)$/i.exec(t))) && !/\b(?:to|in) (?:my )?(?:list|calendar|inventory|stock)\b/i.test(t)) {
    return startGuided(ctx, templates.patient, inline(m[1], ctx.today));
  }

  // ---- list ----
  if (/^(?:show|list|read) (?:me )?(?:all )?my patients$/.test(lower) || /^who are my patients$/.test(lower) || /^how many patients (?:do i have|have i (?:registered|got))$/.test(lower)) {
    const patients = await listOf(ctx, "patient");
    if (!patients.length) return 'You have no patients registered yet. Say "register patient Mary Akinyi".';
    const shown = patients.slice(0, 15).map(patient => patientLine(patient, ctx.today));
    return `You have ${plural(patients.length, "patient")}: ${shown.join("; ")}${patients.length > 15 ? `; and ${patients.length - 15} more (say a name or number to open one)` : ""}.`;
  }

  // ---- one patient's record ----
  if ((m = /^(?:show|open|read|pull up|tell me about|what do i know about) (?:me )?(?:the )?(?:patient )?(.+?)(?:['’]s)? (?:record|file|history|chart)$/i.exec(t)) || (m = /^(.+?)['’]s (?:record|file|history|chart)$/i.exec(t)) || (m = /^(?:show|open|pull up) (?:me )?patient (.+)$/i.exec(t))) {
    const found = await resolvePatient(ctx, m[1], { quiet: true });
    if (found?.reply) return found.reply;
    if (!found) return null;
    return recordText(found.patient, ctx, await historyOf(ctx, found.patient));
  }

  // ---- an allergy the worker already knows (recorded as told) ----
  if ((m = /^(.+?) is allergic to (.+)$/i.exec(t)) || (m = /^(?:note |add |record )?allergy (?:for|of|to) (.+?)\s*[:,-]\s*(.+)$/i.exec(t))) {
    const found = await resolvePatient(ctx, m[1], { quiet: true });
    if (found?.reply) return found.reply;
    if (!found) return null;
    const allergy = clean(m[2]).toLowerCase().slice(0, 60);
    if (!allergy) return null;
    const d = found.patient.data;
    if ((d.allergies || []).includes(allergy)) return `${d.name} already has ${allergy} noted.`;
    if ((d.allergies || []).length >= 20) return "That's 20 allergies already noted; remove some by editing the record with your clinic team.";
    await ctx.store.update({ tenantId: ctx.tenantId, userId: ctx.userId, record: { ...found.patient, data: { ...d, allergies: [...(d.allergies || []), allergy] } } });
    return `Noted for ${d.name} (#${found.patient.number}): allergic to ${allergy}. I only record what you tell me.`;
  }

  // ---- a general note ----
  if ((m = /^(?:add (?:a )?)?note (?:for|to|on|about) (?:patient )?(.+?)\s*[:,-]\s*(.+)$/i.exec(t))) {
    const found = await resolvePatient(ctx, m[1], { quiet: true });
    if (found?.reply) return found.reply;
    if (!found) return null;
    await record(ctx, "visit", { pid: found.patient.memoryId, day: ctx.today, text: clean(m[2]).slice(0, 600), vitals: {}, condition: "", noteOnly: true });
    return `Noted for ${found.patient.data.name} (#${found.patient.number}): ${clean(m[2]).slice(0, 120)}.`;
  }

  // ---- removing a patient and everything kept about them ----
  if ((m = /^(?:please )?(?:remove|delete|erase) patient (.+)$/i.exec(t))) {
    const found = await resolvePatient(ctx, m[1]);
    if (!found) return "You have no patients registered.";
    if (found.reply) return found.reply;
    return askConfirm(ctx, `Remove ${found.patient.data.name} (#${found.patient.number}) and everything recorded about them: visits, immunisations, follow-ups and referrals? This cannot be undone.`, { type: "remove-patient", memoryId: found.patient.memoryId, label: found.patient.data.name, number: found.patient.number });
  }
  return null;
}

// After a yes: the patient and all of their records go together.
const confirms = {
  "remove-patient": async (ctx, action) => {
    const scope = { tenantId: ctx.tenantId, userId: ctx.userId };
    let removed = 0;
    for (const collection of ["visit", "dose", "pregnancy", "followup", "referral", "dispense"]) {
      for (const item of await ctx.store.list({ ...scope, collection })) if (item.data.pid === action.memoryId && await ctx.store.remove({ ...scope, memoryId: item.memoryId })) removed += 1;
    }
    const gone = await ctx.store.remove({ ...scope, memoryId: action.memoryId });
    if (gone) await record(ctx, "audit", { event: "patient-removed", day: ctx.today, patient: action.number, records: removed }); // a number and a count, never a name
    return gone ? `Done. I've removed ${action.label} and ${plural(removed, "record")} kept about them.` : `I couldn't find ${action.label} any more.`;
  }
};

module.exports = Object.freeze({ handle, templates, confirms, inline, historyOf, recordText });
