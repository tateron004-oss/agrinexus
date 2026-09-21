"use strict";

const { resolvePatient, record, listOf, nameMap, tag, patientLine, ageWords, describeDay, clean, titleCase, plural } = require("./common.js");
const { extractPeriod } = require("../personal/dates.js");
const { vitalWords } = require("./visits.js");
const { describeClinic } = require("./profile.js");

// Referral letters, made from the referring worker's own records plus the reason they give. The letter carries only what was recorded: it adds no
// finding, no diagnosis and no advice. The worker signs it. A referral is also kept in the patient's record.
const line = (width = 60) => "-".repeat(width);
const formatOf = text => (/\bpdf\b/i.test(text) ? "pdf" : /\b(?:word|docx)\b/i.test(text) ? "docx" : "txt");

async function letter(ctx, patient, destination, reason) {
  const worker = (ctx.nameOf ? await ctx.nameOf({ tenantId: ctx.tenantId, userId: ctx.userId }).catch(() => "") : "") || "";
  const clinic = (await listOf(ctx, "clinic"))[0];
  const visits = (await listOf(ctx, "visit")).filter(item => item.data.pid === patient.memoryId).sort((a, b) => b.data.day.localeCompare(a.data.day)).slice(0, 3);
  const pregnancy = (await listOf(ctx, "pregnancy")).find(item => item.data.pid === patient.memoryId && item.data.status === "open");
  const d = patient.data;
  const from = [worker, clinic ? describeClinic(clinic.data) : ""].filter(Boolean).join(", ");
  const observed = visits.length ? visits.reverse().map(item => `  ${item.data.day} — ${[vitalWords(item.data.vitals || {}), item.data.condition ? `condition (as stated by the health worker): ${item.data.condition}` : "", item.data.text].filter(Boolean).join("; ")}`).join("\n") : "  None recorded.";
  return [
    "REFERRAL LETTER", `Date: ${ctx.today}`, from ? `From: ${from}` : "", `To: ${destination}`, line(), "",
    `Patient: ${d.name} (#${patient.number})${d.born ? ` — ${ageWords(d.born, d.bornApprox, ctx.today)}` : ""}${d.sex ? `, ${d.sex}` : ""}${d.village ? ` — ${d.village}` : ""}`,
    d.contact ? `Contact: ${d.contact}` : "", d.allergies?.length ? `Allergies (as recorded by the referring health worker): ${d.allergies.join(", ")}` : "",
    pregnancy ? `Pregnancy: expected delivery ${pregnancy.data.due}` : "", "",
    `Reason for referral: ${reason || "(not stated)"}`, "", "Recorded observations (most recent three visits):", observed, "", line(), "",
    "Signed: ______________________________", "", "Prepared by Kyro from the referring health worker's own records. It contains only what they recorded."
  ].filter((entry, index, all) => entry !== "" || all[index - 1] !== "").join("\n");
}

async function handle(ctx) {
  const t = clean(ctx.text).replace(/[.!?]+$/g, "");
  let m;
  if ((m = /^(?:please )?(?:write|make|create|print|prepare|draft|generate)(?: me)? (?:a |an )?(?:referral|referral letter|transfer letter|referral note)(?: for| of) (?:patient )?(.+?)(?: to (.+?))?(?:\s*[:,-]\s*(?:reason\s*[:=-]?\s*)?(.+?))?(?: (?:as|in) (?:a )?(?:pdf|word|docx))?$/i.exec(t))) {
    const found = await resolvePatient(ctx, m[1], { quiet: true });
    if (found?.reply) return found.reply;
    if (!found) return null;
    const destination = clean(m[2] || "").replace(/[:,-]+$/g, "");
    if (!destination) return `Where are you referring ${found.patient.data.name}? Say "referral letter for ${found.patient.data.name.split(" ")[0]} to Kisumu Hospital: reason".`;
    const reason = clean(m[3] || "").slice(0, 300);
    const content = await letter(ctx, found.patient, titleCase(destination), reason);
    const same = (await listOf(ctx, "referral")).some(item => item.data.pid === found.patient.memoryId && item.data.to === titleCase(destination) && item.data.day === ctx.today);
    if (!same) await record(ctx, "referral", { pid: found.patient.memoryId, to: titleCase(destination), reason, day: ctx.today });
    return { report: { title: `Referral letter - ${found.patient.data.name}`, content, format: formatOf(t) } };
  }
  if ((m = /^(?:show|list) (?:me )?(?:my )?referrals(?: (this (?:week|month|year)|last (?:week|month)|today))?$/i.exec(t))) {
    const patients = nameMap(await listOf(ctx, "patient")); if (!patients.size) return null;
    const period = extractPeriod(m[1] || "this month", ctx.today);
    const list = (await listOf(ctx, "referral")).filter(item => patients.has(item.data.pid) && item.data.day >= period.from && item.data.day <= period.to);
    return list.length ? `${plural(list.length, "referral")} ${period.label}: ${list.slice(0, 10).map(item => `${tag(patients.get(item.data.pid))} to ${item.data.to} on ${item.data.day}`).join("; ")}.` : `No referrals recorded ${period.label}.`;
  }
  return null;
}

module.exports = Object.freeze({ handle, letter });
