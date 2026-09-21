"use strict";

const { listOf, nameMap, patientLine, ageWords, tag, resolvePatient, describeDay, clean, plural } = require("./common.js");
const { extractPeriod } = require("../personal/dates.js");
const { vitalWords } = require("./visits.js");
const { describeClinic } = require("./profile.js");
const { unitLabel } = require("./supplies.js");

// Printable reports from the health worker's own records. The monthly report is COUNTS ONLY (no names): patients seen, visits, conditions as the worker
// stated them, immunisation doses, births, referrals, follow-ups completed, medicines given out. Kyro adds no figure of its own. A patient's own
// record or the register prints names, for the worker who keeps them. Saved through the same owner-only document export as the farm reports.
const line = (width = 60) => "-".repeat(width);
const formatOf = text => (/\bpdf\b/i.test(text) ? "pdf" : /\b(?:word|docx)\b/i.test(text) ? "docx" : "txt");
const MONTHS = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

// "for August", "for august 2026", "last month", "this year"...
function periodOf(text, today) {
  const named = new RegExp(`\\b(${MONTHS.join("|")})(?:\\s+(\\d{4}))?\\b`, "i").exec(text);
  if (named) {
    const index = MONTHS.indexOf(named[1].toLowerCase()); const thisYear = Number(today.slice(0, 4)); const thisMonth = Number(today.slice(5, 7)) - 1;
    const year = named[2] ? Number(named[2]) : index > thisMonth ? thisYear - 1 : thisYear;
    const last = new Date(Date.UTC(year, index + 1, 0)).getUTCDate(); const mm = String(index + 1).padStart(2, "0");
    return { from: `${year}-${mm}-01`, to: `${year}-${mm}-${String(last).padStart(2, "0")}`, label: `${MONTHS[index][0].toUpperCase()}${MONTHS[index].slice(1)} ${year}` };
  }
  return extractPeriod(text, today) || extractPeriod("this month", today);
}

const tally = (values, limit = 12) => { const counts = new Map(); for (const value of values.filter(Boolean)) counts.set(value, (counts.get(value) || 0) + 1); return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).slice(0, limit); };
const rows = entries => (entries.length ? entries.map(([name, count]) => `  ${String(name).padEnd(28)} ${count}`).join("\n") : "  none");
const under5 = (patient, day) => Boolean(patient.data.born) && patient.data.born > `${Number(day.slice(0, 4)) - 5}${day.slice(4)}`;

async function header(ctx, title) {
  const worker = (ctx.nameOf ? await ctx.nameOf({ tenantId: ctx.tenantId, userId: ctx.userId }).catch(() => "") : "") || "";
  const clinic = (await listOf(ctx, "clinic"))[0];
  return `${[title.toUpperCase(), clinic ? describeClinic(clinic.data) : "", worker ? `Prepared by: ${worker}` : "", `Date: ${ctx.today}`, line()].filter(Boolean).join("\n")}\n\n`;
}
const foot = "\n\nPrepared by Kyro from the records the health worker entered. It contains only what was recorded.";

async function monthly(ctx, text) {
  const period = periodOf(text, ctx.today); const inRange = day => day >= period.from && day <= period.to;
  const patients = nameMap(await listOf(ctx, "patient"));
  const visits = (await listOf(ctx, "visit")).filter(item => !item.data.noteOnly && inRange(item.data.day) && patients.has(item.data.pid));
  const seen = [...new Set(visits.map(item => item.data.pid))].map(id => patients.get(id));
  const doses = (await listOf(ctx, "dose")).filter(item => inRange(item.data.day) && patients.has(item.data.pid));
  const preg = await listOf(ctx, "pregnancy");
  const births = preg.filter(item => item.data.deliveredOn && inRange(item.data.deliveredOn) && patients.has(item.data.pid));
  const referrals = (await listOf(ctx, "referral")).filter(item => inRange(item.data.day) && patients.has(item.data.pid));
  const followups = (await listOf(ctx, "followup")).filter(item => item.data.status === "done" && item.data.doneOn && inRange(item.data.doneOn) && patients.has(item.data.pid));
  const gaveOut = (await listOf(ctx, "dispense")).filter(item => inRange(item.data.day));
  const registered = [...patients.values()].filter(patient => patient.data.registeredOn && inRange(patient.data.registeredOn));
  if (!visits.length && !doses.length && !births.length && !referrals.length && !registered.length && !gaveOut.length) return null;
  const given = new Map(); for (const item of gaveOut) { const key = `${item.data.item}|${item.data.unit}`; given.set(key, (given.get(key) || 0) + item.data.qty); }
  const content = `${await header(ctx, "Monthly activity report")}Period: ${period.from} to ${period.to} (${period.label})\n\n` +
    `PATIENTS\n  New patients registered:   ${registered.length}\n  Patients seen:             ${seen.length}\n    female / male:           ${seen.filter(patient => patient.data.sex === "female").length} / ${seen.filter(patient => patient.data.sex === "male").length}\n    children under 5:        ${seen.filter(patient => under5(patient, period.to)).length}\n  Visits recorded:           ${visits.length}\n\n` +
    `CONDITIONS (as stated by the health worker at each visit)\n${rows(tally(visits.map(item => item.data.condition)))}\n\n` +
    `IMMUNISATION DOSES GIVEN (${doses.length})\n${rows(tally(doses.map(item => item.data.vaccine)))}\n\n` +
    `MATERNAL\n  Births recorded:           ${births.length}\n  Pregnancies registered:    ${preg.filter(item => item.data.since && inRange(item.data.since) && item.data.status !== "delivered").length}\n\n` +
    `REFERRALS MADE: ${referrals.length}\n${rows(tally(referrals.map(item => item.data.to)))}\n\n` +
    `FOLLOW-UPS COMPLETED: ${followups.length}\n\n` +
    `MEDICINES AND SUPPLIES GIVEN OUT\n${rows([...given.entries()].sort((a, b) => b[1] - a[1]).slice(0, 15).map(([key, value]) => { const [name, unit] = key.split("|"); return [name, unitLabel(Math.round(value * 1000) / 1000, unit)]; }))}${foot}`;
  return { title: `Monthly activity report ${period.label}`, content };
}

async function patientFile(ctx, patient) {
  const d = patient.data; const id = patient.memoryId;
  const mine = async name => (await listOf(ctx, name)).filter(item => item.data.pid === id);
  const visits = (await mine("visit")).sort((a, b) => a.data.day.localeCompare(b.data.day)); const doses = (await mine("dose")).sort((a, b) => a.data.day.localeCompare(b.data.day));
  const preg = await mine("pregnancy"); const referrals = await mine("referral"); const followups = (await mine("followup")).filter(item => item.data.status === "open");
  const content = `${await header(ctx, "Patient record")}${patientLine(patient, ctx.today)}\n${d.contact ? `Contact: ${d.contact}\n` : ""}${d.allergies?.length ? `Allergies (as recorded): ${d.allergies.join(", ")}\n` : ""}Registered: ${d.registeredOn || "—"}\n\n` +
    `VISITS AND NOTES (${visits.length})\n${visits.length ? visits.map(item => `  ${item.data.day} — ${[vitalWords(item.data.vitals || {}), item.data.condition ? `condition (as stated): ${item.data.condition}` : "", item.data.text].filter(Boolean).join("; ")}`).join("\n") : "  none"}\n\n` +
    `IMMUNISATIONS (${doses.length})\n${doses.length ? doses.map(item => `  ${item.data.day} — ${item.data.vaccine}${item.data.nextDue ? ` (next dose ${item.data.nextDue})` : ""}`).join("\n") : "  none"}\n\n` +
    `PREGNANCIES\n${preg.length ? preg.map(item => `  ${item.data.status === "open" ? `expected ${item.data.due}` : `delivered ${item.data.deliveredOn}${item.data.outcome ? ` (${item.data.outcome})` : ""}`}`).join("\n") : "  none"}\n\n` +
    `REFERRALS\n${referrals.length ? referrals.map(item => `  ${item.data.day} — to ${item.data.to}${item.data.reason ? `: ${item.data.reason}` : ""}`).join("\n") : "  none"}\n\nFOLLOW-UPS WAITING: ${followups.length ? followups.map(item => item.data.due).join(", ") : "none"}${foot}`;
  return { title: `Patient record - ${d.name}`, content };
}

async function handle(ctx) {
  const t = clean(ctx.text).replace(/[.!?]+$/g, ""); let m;
  const wants = "(?:please )?(?:print|make|create|prepare|generate|give me|export|produce)(?: me)?";
  if ((m = new RegExp(`^${wants} (?:a |an |my |the |our )?(?:printable )?(?:copy of )?(?:patient )?(.+?)['’]s (?:record|file|history)(?: (?:as|in) (?:a )?(?:pdf|word|docx)(?: file)?)?$`, "i").exec(t))) {
    const found = await resolvePatient(ctx, m[1], { quiet: true });
    if (found?.reply) return found.reply;
    if (!found) return null;
    return { report: { ...(await patientFile(ctx, found.patient)), format: formatOf(t) } };
  }
  if (new RegExp(`^${wants} (?:a |an |my |the |our )?(?:printable )?(?:patient list|patient register|register of patients|list of patients)(?: (?:as|in) (?:a )?(?:pdf|word|docx)(?: file)?)?$`, "i").test(t)) {
    const patients = await listOf(ctx, "patient");
    if (!patients.length) return "You have no patients registered, so there is nothing to print.";
    const content = `${await header(ctx, "Patient register")}${patients.slice().reverse().map(patient => `  ${patientLine(patient, ctx.today)}${patient.data.contact ? ` — ${patient.data.contact}` : ""}`).join("\n")}\n\nTotal: ${patients.length}${foot}`;
    return { report: { title: "Patient register", content, format: formatOf(t) } };
  }
  if (new RegExp(`^${wants} (?:a |an |my |the |our )?(?:printable )?(?:monthly |weekly |quarterly |annual |yearly )?(?:health |clinic |activity |service |facility )?(?:report|return|summary)(?: for (.+?))?(?: (?:as|in) (?:a )?(?:pdf|word|docx)(?: file)?)?$`, "i").test(t)
      && /\b(?:monthly|weekly|quarterly|annual|yearly|health|clinic|activity|service|facility)\b/i.test(t) && !/\b(?:of|about|farm|expense|income|profit|harvest)\b/i.test(t) && (await ctx.hasHealthData())) {
    const made = await monthly(ctx, t);
    return made ? { report: { ...made, format: formatOf(t) } } : "I have no visits, immunisations, births, referrals or medicines recorded in that period, so there is nothing to print.";
  }
  return null;
}

module.exports = Object.freeze({ handle, monthly, patientFile, periodOf });
