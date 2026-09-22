"use strict";

const { clean, titleCase } = require("../farmwork/parse.js");
const { MAX_PATIENTS, parseAge, findPatient, record, listOf, nameMap, addDays, anyDay } = require("./common.js");
const { readVitals, conditionOf } = require("./visits.js");
const { historyOf } = require("./patients.js");
const { dayInEnglish, isDayWord, describeDaySw } = require("../i18n/swahili-words.js");

// The health worker's patient register, visits and follow-ups, in Swahili. The same records the English tools keep, so a worker can register a patient in
// Swahili and read the record in English (or the other way round). Kyro records what the worker says: it never diagnoses, never says whether a reading is
// normal, and never suggests treatment. A condition is only recorded when the worker says "uchunguzi: ...". No patient names go into the calendar, the
// morning brief or a notification, only the patient's number. First draft: a fluent speaker (and a clinician) must review every word before it is relied on.
// Not yet in Swahili: immunisations, pregnancies, clinic stock, referral letters, reports, export and erase (those still answer in English).
const SW = {
  askName: "Nani mgonjwa? Sema \"sajili mgonjwa Mary Akinyi, miaka 34, kike, Kibera\".",
  full: `Una wagonjwa ${MAX_PATIENTS} waliosajiliwa, ambao ndio wengi zaidi ninaoweza kuhifadhi. Ondoa baadhi kwanza.`,
  registered: ({ line, contact, same, first }) => `Nimemsajili ${line}${contact ? `, mawasiliano: ${contact}` : ""}.${same ? ` Tayari una wagonjwa ${same.count} wenye jina hilo (${same.numbers}), kwa hivyo tumia namba, kama "mgonjwa ${same.next}", kuwatofautisha.` : ""} Sema "ziara ya ${first}: …" kurekodi ziara.`,
  none: "Bado hujasajili mgonjwa yeyote. Sema \"sajili mgonjwa Mary Akinyi\".",
  list: ({ n, lines, more }) => `Una wagonjwa ${n}: ${lines}${more ? `; na wengine ${more} (sema jina au namba kufungua mmoja)` : ""}.`,
  which: ({ names, first }) => `Yupi: ${names}? Sema namba, kama "mgonjwa ${first}".`,
  unknown: ({ name }) => `Sina mgonjwa anayeitwa ${name}. Sema "sajili mgonjwa ${name}" kwanza.`,
  allergy: ({ name, number, allergy }) => `Nimeandika kwa ${name} (#${number}): ana mzio wa ${allergy}. Ninarekodi tu unachoniambia.`,
  allergyHave: ({ name, allergy }) => `${name} tayari ana ${allergy} kwenye rekodi.`,
  allergyFull: "Mizio 20 tayari imeandikwa; iondoe kwa kuhariri rekodi na timu ya kliniki yako.",
  noted: ({ name, number, text }) => `Nimeandika kwa ${name} (#${number}): ${text}.`,
  visit: ({ n, who, when, read, condition, unread, done, first }) => `Nimerekodi ziara ${n} ya ${who}${when ? ` ${when}` : ""}${read ? `: ${read}` : ""}.${condition ? ` Hali (kama ulivyosema): ${condition}.` : ""}${unread ? ` Sikuweza kusoma ${unread} ulichotoa kama namba, tafadhali sema tena ikiwa ni muhimu.` : ""}${done ? " Nimeweka alama kuwa ufuatiliaji umekamilika." : ""} Kumwona tena, sema "mwone ${first} tena baada ya siku 3".`,
  askWhen: ({ name, first }) => `Nikuandikie umwone ${name} lini tena? Sema "mwone ${first} tena baada ya siku 3" au "Ijumaa".`,
  followFull: "Mgonjwa huyo tayari ana ufuatiliaji kumi unaosubiri. Weka alama kuwa baadhi umekamilika kwanza.",
  followSet: ({ n, who, when, number }) => `Ufuatiliaji ${n}: ${who}, ${when}. Uko kwenye kalenda yako kama "Mfuatilie mgonjwa ${number}" (bila jina, kulinda faragha).`,
  followNone: "Hakuna ufuatiliaji unaosubiri.",
  followList: ({ count, overdue, lines, more }) => `Ufuatiliaji ${count} unasubiri${overdue ? `, ${overdue} umechelewa` : ""}. ${lines}${more ? "; …" : ""}. Sema "ufuatiliaji 3 umekamilika" ukishamwona.`,
  followMissing: ({ n }) => `Sioni ufuatiliaji ulio wazi namba ${n}.`, followDone: ({ n }) => `Ufuatiliaji ${n} umewekwa alama kuwa umekamilika.`, followCancelled: ({ n }) => `Ufuatiliaji ${n} umefutwa.`,
  noVisits: ({ name }) => `Hakuna ziara zilizorekodiwa kwa ${name} bado.`,
  visitList: ({ who, lines, earlier }) => `${who}: ${lines}${earlier ? `; na ${earlier} za awali` : ""}.`,
  overdueSince: ({ when }) => `imechelewa tangu ${when}`, removedPatient: "mgonjwa aliyeondolewa",
  recordNoVisits: "Bado hakuna ziara zilizorekodiwa.", contact: ({ text }) => `Mawasiliano: ${text}.`, allergies: ({ text }) => `Mizio uliyoniambia: ${text}.`,
  visitsLine: ({ n, lines, more }) => `Ziara (${n}): ${lines}${more ? "; …" : ""}.`, followupLine: ({ lines }) => `Ufuatiliaji: ${lines}.`
};

// ---- ages and lines ----
const DAY_MS = 86400000;
function ageWordsSw(born, approx, today) {
  if (!born) return "";
  const days = Math.round((Date.parse(today) - Date.parse(born)) / DAY_MS); if (!(days >= 0)) return "";
  const [by, bm, bd] = born.split("-").map(Number); const [ty, tm, td] = today.split("-").map(Number);
  const months = (ty - by) * 12 + (tm - bm) - (td < bd ? 1 : 0);
  const text = days < 14 ? `siku ${days}` : days < 112 ? `wiki ${Math.floor(days / 7)}` : months < 24 ? `miezi ${months}` : `miaka ${Math.floor(months / 12)}`;
  return `${approx ? "takriban " : ""}${text}`;
}
const SEX_SW = { female: "kike", male: "kiume", other: "nyingine" };
const patientLineSw = (patient, today) => { const d = patient.data; return `#${patient.number} ${d.name}${d.born ? `, ${ageWordsSw(d.born, d.bornApprox, today)}` : ""}${d.sex ? `, ${SEX_SW[d.sex] || d.sex}` : ""}${d.village ? `, ${d.village}` : ""}`; };
const sexOfSw = raw => { const t = clean(raw).toLowerCase(); return /^(?:kike|mwanamke|msichana|mama|mjamzito|mtoto wa kike)$/.test(t) ? "female" : /^(?:kiume|mwanaume|mvulana|baba|mtoto wa kiume)$/.test(t) ? "male" : null; };
const UNIT_EN = { miaka: "years", mwaka: "years", miezi: "months", mwezi: "months", wiki: "weeks", siku: "days" };
function ageOfSw(raw, today) {
  const t = clean(raw).toLowerCase().replace(/^(?:takriban|karibu|umri wa|umri)\s+/, "");
  const m = /^(?:(miaka|mwaka|miezi|mwezi|wiki|siku)\s+(\d{1,3})|(\d{1,3})\s*(miaka|mwaka|miezi|mwezi|wiki|siku)?)$/.exec(t);
  return m ? parseAge(`${m[2] || m[3]} ${UNIT_EN[m[1] || m[4]] || "years"}`, today) : null;
}
// "Mary Akinyi, miaka 34, kike, Kibera" -> what can be picked out (only a name is needed).
function inlineSw(rest, today) {
  const text = clean(rest).replace(/^(?:anayeitwa|aitwaye|jina lake ni|jina:|ni|:)\s*/i, "");
  const parts = text.split(/\s*,\s*/).map(clean).filter(Boolean);
  let name = parts.shift() || ""; const tail = [];
  const cut = /\s+(?:miaka\s+\d|mwaka\s+\d|miezi\s+\d|wiki\s+\d|siku\s+\d|\d+\s*(?:miaka|mwaka|miezi|wiki|siku)\b|(?:kike|kiume|mwanamke|mwanaume|msichana|mvulana)\b|kutoka\b|kijiji cha\b)/i.exec(name);
  if (cut) { tail.push(name.slice(cut.index)); name = name.slice(0, cut.index); }
  tail.push(...parts);
  const out = {};
  if (name && name.length <= 60 && !/\d/.test(name)) out.name = titleCase(name);
  for (const piece of tail.flatMap(part => part.split(/\s+(?=kutoka\s|kijiji cha\s)/i)).map(clean).filter(Boolean)) {
    let m;
    if ((m = /^(?:kutoka|kijiji cha)\s+(.+)$/i.exec(piece))) out.village = titleCase(m[1]);
    else if (/\d/.test(piece)) { const age = ageOfSw(piece.replace(/\s+(?:kike|kiume)$/i, ""), today); if (age) out.age = age; const sex = sexOfSw(piece.replace(/^.*\d+\s*(?:miaka|mwaka|miezi|wiki|siku)?\s*/i, "")); if (sex) out.sex = sex; }
    else if (sexOfSw(piece)) out.sex = sexOfSw(piece);
    else if (piece.length <= 60 && !out.village) out.village = titleCase(piece);
    else if (piece.length <= 80 && !out.contact) out.contact = piece;
  }
  return out;
}

// ---- reading vitals in Swahili: the words are turned into the English names the shared reader knows, then read as exactly what was said ----
const VITAL_WORDS = [[/\bshinikizo la damu\b/gi, "blood pressure"], [/\bshinikizo\b/gi, "bp"], [/\bjoto(?: la mwili)?\b/gi, "temp"], [/\bmapigo(?: ya moyo)?\b/gi, "pulse"], [/\bkiwango cha kupumua\b|\bkupumua\b/gi, "resp rate"], [/\boksijeni\b/gi, "oxygen"], [/\buzito\b/gi, "weight"], [/\b(?:uchunguzi|utambuzi)\b/gi, "diagnosis"]];
const toEnglish = text => VITAL_WORDS.reduce((acc, [pattern, english]) => acc.replace(pattern, english), String(text || ""));
const vitalWordsSw = vitals => {
  const out = [];
  if (vitals.temperature) out.push(`joto ${vitals.temperature.value}°${vitals.temperature.unit}`);
  if (vitals.bloodPressure) out.push(`shinikizo ${vitals.bloodPressure.systolic}/${vitals.bloodPressure.diastolic}`);
  if (vitals.pulse) out.push(`mapigo ${vitals.pulse}`);
  if (vitals.respiratoryRate) out.push(`kupumua ${vitals.respiratoryRate}`);
  if (vitals.oxygen) out.push(`oksijeni ${vitals.oxygen}%`);
  if (vitals.weightKg) out.push(`uzito ${vitals.weightKg} kg`);
  if (vitals.muacMm) out.push(`MUAC ${vitals.muacMm} mm`);
  return out.join(", ");
};
const UNREAD_SW = { temperature: "joto", bloodPressure: "shinikizo la damu", pulse: "mapigo", respiratoryRate: "kupumua", oxygen: "oksijeni", weightKg: "uzito", muacMm: "MUAC" };

// Finds a patient by name or number; { patient } | { reply } | null (no patients at all, or quiet and not found).
async function resolveSw(ctx, query, { quiet = false } = {}) {
  const patients = await listOf(ctx, "patient");
  if (!patients.length) return null;
  const found = findPatient(patients, String(query).replace(/^(?:mgonjwa|wa|ya)\s+/i, ""));
  if (found?.patient) return { patient: found.patient };
  if (found?.ambiguous) return { reply: SW.which({ names: found.ambiguous.slice(0, 6).map(patient => `#${patient.number} ${patient.data.name}`).join(", "), first: found.ambiguous[0].number }) };
  return quiet ? null : { reply: SW.unknown({ name: titleCase(clean(query)) }) };
}
const tagSw = patient => `${patient.data.name} (#${patient.number})`;
const firstName = patient => patient.data.name.split(" ")[0];

async function handle(ctx) {
  const t = clean(ctx.text).replace(/[.!?]+$/g, ""); const lower = t.toLowerCase();
  if (!/\b(?:mgonjwa|wagonjwa|ziara|nimemwona|nimemtembelea|nimemchunguza|nimemhudumia|mwone|mfuatilie|mwite|ufuatiliaji|mzio|rekodi ya|faili ya|kumbuka)\b/i.test(lower)) return null;
  const scope = { tenantId: ctx.tenantId, userId: ctx.userId };
  let m;

  // ---- register: "Sajili mgonjwa Mary Akinyi, miaka 34, kike, Kibera" ----
  if ((m = /^(?:tafadhali\s+)?(?:sajili|ongeza|andikisha)\s+(?:mgonjwa|mama mjamzito|mtoto|mgonjwa mpya)(?:\s+(?:mpya|anayeitwa|aitwaye))?\s*[:,-]?\s*(.*)$/i.exec(t)) && !/\b(?:kwenye|katika)\s+(?:orodha|kalenda|ghala)\b/i.test(t)) {
    const got = inlineSw(m[1], ctx.today);
    if (!got.name) return SW.askName;
    const patients = await listOf(ctx, "patient");
    if (patients.length >= MAX_PATIENTS) return SW.full;
    const created = await record(ctx, "patient", { name: got.name, born: got.age?.born || null, bornApprox: Boolean(got.age?.approx), sex: got.sex || null, village: got.village || "", contact: got.contact || "", allergies: [], registeredOn: ctx.today });
    const same = patients.filter(patient => patient.data.name.toLowerCase() === got.name.toLowerCase());
    return SW.registered({ line: patientLineSw(created, ctx.today), contact: got.contact, same: same.length ? { count: same.length, numbers: same.map(patient => `#${patient.number}`).join(", "), next: created.number } : null, first: got.name.split(" ")[0] });
  }

  // ---- list ----
  if (/^(?:onyesha|orodhesha|nisomee) (?:wagonjwa wangu|orodha ya wagonjwa wangu)$/.test(lower) || /^wagonjwa wangu ni nani$/.test(lower) || /^nina wagonjwa wangapi$/.test(lower)) {
    const patients = await listOf(ctx, "patient");
    if (!patients.length) return SW.none;
    return SW.list({ n: patients.length, lines: patients.slice(0, 15).map(patient => patientLineSw(patient, ctx.today)).join("; "), more: Math.max(0, patients.length - 15) });
  }

  // ---- one patient's record: "Rekodi ya Mary", "Faili ya Mary", "Onyesha mgonjwa 12" ----
  if ((m = /^(?:onyesha|fungua|nionyeshe)\s+(?:rekodi|faili) (?:ya|za)\s+(?:mgonjwa\s+)?(.+)$/i.exec(t)) || (m = /^(?:rekodi|faili) ya\s+(?:mgonjwa\s+)?(.+)$/i.exec(t)) || (m = /^(?:onyesha|fungua)\s+mgonjwa\s+(.+)$/i.exec(t))) {
    const found = await resolveSw(ctx, m[1], { quiet: true });
    if (found?.reply) return found.reply;
    if (!found) return null;
    const patient = found.patient; const d = patient.data; const history = await historyOf(ctx, patient);
    const lines = [`${patientLineSw(patient, ctx.today)}.`];
    if (d.contact) lines.push(SW.contact({ text: d.contact }));
    if (d.allergies?.length) lines.push(SW.allergies({ text: d.allergies.join(", ") }));
    if (history.visits.length) lines.push(SW.visitsLine({ n: history.visits.length, lines: history.visits.slice(0, 4).map(visit => `${visit.data.day}${visit.data.condition ? ` — ${visit.data.condition}` : ""}${visit.data.text ? ` (${visit.data.text.slice(0, 80)})` : ""}`).join("; "), more: history.visits.length > 4 })); else lines.push(SW.recordNoVisits);
    if (history.followups.length) lines.push(SW.followupLine({ lines: history.followups.map(item => describeDaySw(item.data.due, ctx.today)).join(", ") }));
    return lines.join(" ");
  }

  // ---- an allergy the worker already knows ----
  if ((m = /^(.+?) ana mzio (?:wa|kwa|na) (.+)$/i.exec(t)) || (m = /^(?:andika |weka )?mzio (?:wa|kwa) (.+?)\s*[:,-]\s*(.+)$/i.exec(t))) {
    const found = await resolveSw(ctx, m[1], { quiet: true });
    if (found?.reply) return found.reply;
    if (!found) return null;
    const allergy = clean(m[2]).toLowerCase().slice(0, 60); if (!allergy) return null;
    const d = found.patient.data;
    if ((d.allergies || []).includes(allergy)) return SW.allergyHave({ name: d.name, allergy });
    if ((d.allergies || []).length >= 20) return SW.allergyFull;
    await ctx.store.update({ ...scope, record: { ...found.patient, data: { ...d, allergies: [...(d.allergies || []), allergy] } } });
    return SW.allergy({ name: d.name, number: found.patient.number, allergy });
  }

  // ---- a general note ----
  if ((m = /^(?:andika |weka )?kumbuka (?:kuhusu|kwa|ya) (?:mgonjwa )?(.+?)\s*[:,-]\s*(.+)$/i.exec(t))) {
    const found = await resolveSw(ctx, m[1], { quiet: true });
    if (found?.reply) return found.reply;
    if (!found) return null;
    await record(ctx, "visit", { pid: found.patient.memoryId, day: ctx.today, text: clean(m[2]).slice(0, 600), vitals: {}, condition: "", noteOnly: true });
    return SW.noted({ name: found.patient.data.name, number: found.patient.number, text: clean(m[2]).slice(0, 120) });
  }

  // ---- a visit: "Ziara ya Mary: joto 38.5, shinikizo la damu 120/80, uchunguzi: malaria" ----
  let visit = null;
  if ((m = /^(?:tafadhali\s+)?(rekodi ziara|andika ziara|ongeza ziara|ziara)\s*(?:ya|kwa|ni)?\s*(?:mgonjwa\s+)?(.+?)\s*(?:(leo|jana)\s*)?[:,-]\s*(.+)$/i.exec(t))) visit = { who: m[2], when: m[3], body: m[4], explicit: m[1].toLowerCase() !== "ziara" };
  else if ((m = /^(?:nimemwona|nimemtembelea|nimemchunguza|nimemhudumia)\s+(?:mgonjwa\s+)?(.+?)\s*(?:(leo|jana|asubuhi hii)\s*)?[:,-]\s*(.+)$/i.exec(t))) visit = { who: m[1], when: m[2], body: m[3], explicit: false };
  if (visit) {
    const found = await resolveSw(ctx, visit.who, { quiet: !visit.explicit });
    if (found?.reply) return found.reply;
    if (!found) return null;
    const day = /jana/i.test(visit.when || "") ? addDays(ctx.today, -1) : ctx.today;
    const text = clean(visit.body).slice(0, 600); const english = toEnglish(text); const { vitals, unread } = readVitals(english); const condition = conditionOf(english);
    const created = await record(ctx, "visit", { pid: found.patient.memoryId, day, text, vitals, condition });
    const open = (await listOf(ctx, "followup")).filter(item => item.data.pid === found.patient.memoryId && item.data.status === "open" && item.data.due <= ctx.today).sort((a, b) => a.data.due.localeCompare(b.data.due))[0];
    if (open) await ctx.store.update({ ...scope, record: { ...open, data: { ...open.data, status: "done", doneOn: ctx.today } } });
    return SW.visit({ n: created.number, who: tagSw(found.patient), when: day !== ctx.today ? describeDaySw(day, ctx.today) : "", read: vitalWordsSw(vitals), condition, unread: unread.map(name => UNREAD_SW[name] || name).join(" na "), done: Boolean(open), first: firstName(found.patient) });
  }

  // ---- a follow-up: "Mwone Mary tena baada ya siku 3", "Mfuatilie Mary Ijumaa: kuangalia jeraha" ----
  if ((m = /^(?:tafadhali\s+)?(?:mwone|mfuatilie|mwite|nimwone|nimfuatilie|nimwite)\s+(?:mgonjwa\s+)?(.+?)\s+(?:tena\s+)?((?:baada ya|ndani ya)\s+(?:(?:siku|wiki|miezi)\s+\d{1,3}|\d{1,3}\s+(?:siku|wiki|miezi))|kesho ?kutwa|kesho|leo|(?:siku ya\s+)?(?:jumatatu|jumanne|jumatano|alhamisi|ijumaa|jumamosi|jumapili)(?: ijayo| hii)?|(?:tarehe\s+)?\d{1,2}\s+[a-z]+(?:\s+\d{4})?)(?:\s*[:,-]\s*(.+))?$/i.exec(t))) {
    const found = await resolveSw(ctx, m[1], { quiet: true });
    if (found?.reply) return found.reply;
    if (!found) return null;
    const due = isDayWord(m[2]) ? anyDay(dayInEnglish(m[2]), ctx.today) : null;
    if (!due || due < ctx.today) return SW.askWhen({ name: found.patient.data.name, first: firstName(found.patient) });
    const open = (await listOf(ctx, "followup")).filter(item => item.data.pid === found.patient.memoryId && item.data.status === "open");
    if (open.length >= 10) return SW.followFull;
    const created = await record(ctx, "followup", { pid: found.patient.memoryId, due, note: clean(m[3] || "").slice(0, 120), status: "open" });
    if (ctx.personal?.add) await ctx.personal.add({ kind: "event", text: `Mfuatilie mgonjwa ${found.patient.number}`, day: due, time: "" });
    return SW.followSet({ n: created.number, who: tagSw(found.patient), when: describeDaySw(due, ctx.today), number: found.patient.number });
  }
  if ((m = /^(?:mwone|mfuatilie|nimwone)\s+(?:mgonjwa\s+)?(.+)$/i.exec(t)) && !/\b(?:baada|ndani|kesho|leo|jumatatu|jumanne|jumatano|alhamisi|ijumaa|jumamosi|jumapili|tarehe)\b/i.test(t)) {
    const found = await resolveSw(ctx, m[1].replace(/\s+tena$/i, ""), { quiet: true });
    if (found?.reply) return found.reply;
    if (found) return SW.askWhen({ name: found.patient.data.name, first: firstName(found.patient) });
  }

  // ---- who to see ----
  if (/^(?:wagonjwa gani (?:wanahitaji kuonwa|wanahitaji ufuatiliaji|wamechelewa)|nani (?:anahitaji kuonwa|amechelewa|wa kufuatiliwa)|onyesha ufuatiliaji wangu|ufuatiliaji gani unasubiri)$/.test(lower)) {
    const patients = nameMap(await listOf(ctx, "patient"));
    if (!patients.size) return null;
    const open = (await listOf(ctx, "followup")).filter(item => item.data.status === "open" && patients.has(item.data.pid)).sort((a, b) => a.data.due.localeCompare(b.data.due));
    if (!open.length) return SW.followNone;
    const week = addDays(ctx.today, 7); const overdue = open.filter(item => item.data.due < ctx.today); const soon = open.filter(item => item.data.due <= week); const shown = (soon.length ? soon : open).slice(0, 8);
    const line = item => `${item.number}. ${tagSw(patients.get(item.data.pid))} — ${item.data.due < ctx.today ? SW.overdueSince({ when: describeDaySw(item.data.due, ctx.today) }) : describeDaySw(item.data.due, ctx.today)}${item.data.note ? ` (${item.data.note.slice(0, 50)})` : ""}`;
    return SW.followList({ count: open.length, overdue: overdue.length, lines: shown.map(line).join("; "), more: (soon.length ? soon : open).length > 8 });
  }
  if ((m = /^ufuatiliaji (?:namba )?#?(\d{1,5}) (?:umekamilika|umeisha|nimemwona)$/i.exec(t)) || (m = /^(?:futa|ondoa) ufuatiliaji (?:namba )?#?(\d{1,5})$/i.exec(t))) {
    const item = (await listOf(ctx, "followup")).find(entry => entry.number === Number(m[1]));
    if (!item || item.data.status !== "open") return SW.followMissing({ n: m[1] });
    const cancelled = /^(?:futa|ondoa)/i.test(t);
    await ctx.store.update({ ...scope, record: { ...item, data: { ...item.data, status: cancelled ? "cancelled" : "done", doneOn: ctx.today } } });
    return cancelled ? SW.followCancelled({ n: m[1] }) : SW.followDone({ n: m[1] });
  }

  // ---- visit history ----
  if ((m = /^(?:onyesha|orodhesha)\s+ziara (?:za|ya)\s+(?:mgonjwa\s+)?(.+)$/i.exec(t)) || (m = /^ziara ya mwisho (?:ya|za)\s+(?:mgonjwa\s+)?(.+)$/i.exec(t))) {
    const found = await resolveSw(ctx, m[1], { quiet: true });
    if (found?.reply) return found.reply;
    if (!found) return null;
    const visits = (await listOf(ctx, "visit")).filter(item => item.data.pid === found.patient.memoryId && !item.data.noteOnly).sort((a, b) => b.data.day.localeCompare(a.data.day));
    if (!visits.length) return SW.noVisits({ name: found.patient.data.name });
    const last = /^ziara ya mwisho/i.test(t);
    return SW.visitList({ who: tagSw(found.patient), lines: (last ? visits.slice(0, 1) : visits.slice(0, 6)).map(item => `${item.data.day}${vitalWordsSw(item.data.vitals || {}) ? ` — ${vitalWordsSw(item.data.vitals)}` : ""}${item.data.condition ? ` — ${item.data.condition}` : ""} — ${item.data.text.slice(0, 120)}`).join("; "), earlier: !last && visits.length > 6 ? visits.length - 6 : 0 });
  }
  return null;
}

module.exports = Object.freeze({ handle, SW, ageWordsSw, patientLineSw, inlineSw, toEnglish, resolveSw, tagSw, firstName, vitalWordsSw, sexOfSw, SEX_SW });
