"use strict";

const { clean, titleCase, anyDay, pastDay, plural } = require("../farmwork/parse.js");
const { describeDay, addDays } = require("../personal/dates.js");

// Shared by the health worker's tools: finding a patient by name or number, ages, and the plain words for a patient.
// Kyro keeps what the worker tells it. Nothing here interprets a reading, names a condition, or suggests what to do.
const MAX_PATIENTS = 5000;

const shiftDay = (day, { years = 0, months = 0, days = 0 }) => {
  const [y, m, d] = day.split("-").map(Number);
  const date = new Date(Date.UTC(y - years, m - 1 - months, d - days));
  return date.toISOString().slice(0, 10);
};

// "34", "34 years", "6 months", "3 weeks", "12 March 2024" -> { born, approx }. A bare number is years.
function parseAge(raw, today) {
  const text = clean(raw).toLowerCase().replace(/^(?:about|around|approximately|~)\s*/, "").replace(/\s+old$/, "");
  const m = /^(\d{1,3})\s*(years?|yrs?|y|months?|mos?|weeks?|wks?|days?)?$/.exec(text);
  if (m) {
    const n = Number(m[1]); const unit = (m[2] || "years")[0];
    if (unit === "y" || unit === "") { if (n > 120) return null; return { born: shiftDay(today, { years: n }), approx: true }; }
    if (unit === "m") { if (n > 1440) return null; return { born: shiftDay(today, { months: n }), approx: true }; }
    if (unit === "w") { if (n > 5200) return null; return { born: shiftDay(today, { days: n * 7 }), approx: true }; }
    if (n > 40000) return null; return { born: shiftDay(today, { days: n }), approx: true };
  }
  const day = pastDay(clean(raw), today);
  return day && day <= today && day >= shiftDay(today, { years: 120 }) ? { born: day, approx: false } : null;
}

// Whole years or months by the calendar (34 years after a birthday is 34, not 33 because of leap days).
function calendarMonths(born, today) {
  const [by, bm, bd] = born.split("-").map(Number); const [ty, tm, td] = today.split("-").map(Number);
  return (ty - by) * 12 + (tm - bm) - (td < bd ? 1 : 0);
}
function ageWords(born, approx, today) {
  if (!born) return "";
  const days = Math.round((Date.parse(today) - Date.parse(born)) / 86400000);
  if (!(days >= 0)) return "";
  const months = calendarMonths(born, today);
  let text;
  if (days < 14) text = plural(days, "day");
  else if (days < 112) text = plural(Math.floor(days / 7), "week");
  else if (months < 24) text = plural(months, "month");
  else text = plural(Math.floor(months / 12), "year");
  return `${approx ? "about " : ""}${text}`;
}

const SEX_WORDS = [[/^(?:f|female|woman|girl|lady|mother|she)$/i, "female"], [/^(?:m|male|man|boy|father|he)$/i, "male"], [/^(?:other|intersex)$/i, "other"]];
const sexOf = raw => { const t = clean(raw).toLowerCase(); const hit = SEX_WORDS.find(([pattern]) => pattern.test(t)); return hit ? hit[1] : null; };

const patientLine = (patient, today) => {
  const d = patient.data;
  return `#${patient.number} ${d.name}${d.born ? `, ${ageWords(d.born, d.bornApprox, today)}` : ""}${d.sex ? `, ${d.sex}` : ""}${d.village ? `, ${d.village}` : ""}`;
};

// Find a patient by number ("12", "patient 12", "#12") or by name: an exact name, or every word given being part of the name.
function findPatient(patients, query) {
  const wanted = clean(query).toLowerCase().replace(/^(?:patient|the patient|my patient|the|my)\s+/, "").replace(/['’]s$/, "");
  if (!wanted) return null;
  const byNumber = /^#?(\d{1,6})$/.exec(wanted);
  if (byNumber) { const hit = patients.find(patient => patient.number === Number(byNumber[1])); return hit ? { patient: hit } : null; }
  const exact = patients.filter(patient => patient.data.name.toLowerCase() === wanted);
  if (exact.length === 1) return { patient: exact[0] };
  if (exact.length > 1) return { ambiguous: exact };
  const words = wanted.split(" ");
  const loose = patients.filter(patient => { const parts = patient.data.name.toLowerCase().split(" "); return words.every(word => parts.includes(word)); });
  return loose.length === 1 ? { patient: loose[0] } : loose.length > 1 ? { ambiguous: loose } : null;
}
const which = found => `Which one: ${found.ambiguous.slice(0, 6).map(patient => `#${patient.number} ${patient.data.name}`).join(", ")}? Say the number, like "patient ${found.ambiguous[0].number}".`;

// Loads the person's patients and resolves a name. `{ patient }` when found, `{ reply }` when Kyro should say something, or null when there are no
// patients at all (so ordinary talk is never taken by this toolkit).
async function resolvePatient(ctx, query, { quiet = false } = {}) {
  const patients = await ctx.store.list({ tenantId: ctx.tenantId, userId: ctx.userId, collection: "patient" });
  if (!patients.length) return null;
  const found = findPatient(patients, query);
  if (found?.patient) return { patient: found.patient, patients };
  if (found?.ambiguous) return { reply: which(found) };
  return quiet ? null : { reply: `I don't have a patient called ${titleCase(clean(query))}. Say "register patient ${titleCase(clean(query))}" first.` };
}

// A day in words; a day in another year carries its year, so a far-off expiry or delivery date is never ambiguous.
const dayWords = (day, today) => `${describeDay(day, today)}${String(day).slice(0, 4) !== String(today).slice(0, 4) ? ` ${String(day).slice(0, 4)}` : ""}`;

const record = (ctx, collection, data) => ctx.store.add({ tenantId: ctx.tenantId, userId: ctx.userId, collection, data });
const listOf = (ctx, collection) => ctx.store.list({ tenantId: ctx.tenantId, userId: ctx.userId, collection });
const nameMap = patients => new Map(patients.map(patient => [patient.memoryId, patient]));
const tag = patient => `${patient.data.name} (#${patient.number})`;

module.exports = Object.freeze({ MAX_PATIENTS, shiftDay, parseAge, ageWords, sexOf, patientLine, findPatient, resolvePatient, record, listOf, nameMap, tag, dayWords, describeDay, addDays, clean, titleCase, anyDay, pastDay, plural });
