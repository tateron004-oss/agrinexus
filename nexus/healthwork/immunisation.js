"use strict";

const { resolvePatient, record, listOf, nameMap, tag, dayWords, addDays, clean, anyDay, plural } = require("./common.js");

// Immunisations the worker gives, and when the next dose is due. Kyro carries no schedule of its own: the worker says which vaccine was given and,
// if they want a reminder, when the next dose is due (from their national programme's schedule). "Who is due" is only those dates.
const VACCINE = /\b(?:bcg|opv|ipv|dpt|dtp|penta(?:valent)?|pcv|rota(?:virus)?|measles|mr|mmr|hpv|yellow fever|tt|td|tetanus|hep(?:atitis)? ?[ab]?|polio|typhoid|covid(?:-19)?|vitamin a|vit a|rabies|cholera|r21|rts,?s|malaria vaccine|men(?:ingitis)?(?: ?a)?|varicella|flu|influenza)\b/i;
const VACCINE_WORD = /\b(?:vaccine|vaccination|vaccinated|immuni[sz]ation|immuni[sz]ed|jab|shot)\b/i;
const NEXT = "(?:[,;]?\\s*next (?:dose |one )?(?:is )?(?:due )?((?:in|on) .+))?";

const ACRONYM = /^(?:bcg|opv|ipv|dpt|dtp|pcv|mr|mmr|hpv|tt|td|hib|r21|hep ?[ab]|rts,?s)(?: \d)?$/i;
const nameOfVaccine = raw => {
  const text = clean(raw).replace(/\b(?:the|a|her|his|their|first|second|third)\b/gi, m => (/first|second|third/i.test(m) ? m : "")).replace(/\s+(?:vaccine|vaccination|dose|shot|jab|injection)$/i, "").replace(/^\s*(?:the|a)\s+/i, "").trim().slice(0, 40);
  return ACRONYM.test(text) ? text.toUpperCase() : text.charAt(0).toUpperCase() + text.slice(1);
};
const family = vaccine => clean(vaccine).toLowerCase().replace(/\s*\d+$/, "").replace(/\s*(?:dose|booster)$/, "");

// A dose's "next due" is answered once a later dose of the same vaccine is recorded.
const outstanding = doses => doses.filter(dose => dose.data.nextDue && !doses.some(other => other.data.pid === dose.data.pid && family(other.data.vaccine) === family(dose.data.vaccine) && other.data.day > dose.data.day));

async function handle(ctx) {
  const t = clean(ctx.text).replace(/[.!?]+$/g, ""); const lower = t.toLowerCase();
  let m; let given = null;

  if ((m = new RegExp(`^(?:please )?(?:gave|give|administered) (?:the )?(.+?) (?:to|for) (?:patient )?(.+?)${NEXT}$`, "i").exec(t)) && (VACCINE.test(m[1]) || VACCINE_WORD.test(m[1]))) given = { who: m[2], what: m[1], next: m[3] };
  else if ((m = new RegExp(`^(?:please )?(?:vaccinated|immuni[sz]ed) (?:patient )?(.+?) (?:with|against|for) (.+?)${NEXT}$`, "i").exec(t)) && (VACCINE.test(m[2]) || VACCINE_WORD.test(m[2]))) given = { who: m[1], what: m[2], next: m[3] };
  else if ((m = new RegExp(`^(?:patient )?(.+?) (?:received|got|was given|was vaccinated with|had|took) (?:the |a |her |his )?(.+?)${NEXT}$`, "i").exec(t)) && (VACCINE.test(m[2]) || VACCINE_WORD.test(m[2]))) given = { who: m[1], what: m[2], next: m[3] };
  if (given && !/^(?:who|which|what|when|how|why|where|show|list)\b/i.test(given.who)) {
    const found = await resolvePatient(ctx, given.who, { quiet: true });
    if (found?.reply) return found.reply;
    if (!found) return null;
    const vaccine = nameOfVaccine(given.what);
    if (!vaccine || vaccine.length < 2) return null;
    let nextDue = null;
    if (given.next) { nextDue = anyDay(given.next, ctx.today); if (!nextDue || nextDue <= ctx.today) return `I couldn't read "${clean(given.next)}" as a day in the future. Say it like "next dose in 6 weeks" or "next dose on 12 November".`; }
    const created = await record(ctx, "dose", { pid: found.patient.memoryId, vaccine, day: ctx.today, nextDue });
    if (nextDue && ctx.personal?.add) await ctx.personal.add({ kind: "event", text: `Vaccination due patient ${found.patient.number}`, day: nextDue, time: "" });
    return `Recorded: ${tag(found.patient)} received ${vaccine} today.${nextDue ? ` Next dose ${dayWords(nextDue, ctx.today)}; it's on your calendar without their name.` : ' If you want a reminder, say "next dose in 6 weeks" with it.'} I only record what you tell me; follow your programme's schedule.`;
  }

  if ((m = /^(?:show|list) (?:me )?(?:the )?(?:vaccinations|immuni[sz]ations|vaccines|shots) (?:for|of) (?:patient )?(.+)$/i.exec(t)) || (m = /^(.+?)['’]s (?:vaccinations|immuni[sz]ations|vaccines|shots)$/i.exec(t))) {
    const found = await resolvePatient(ctx, m[1], { quiet: true });
    if (found?.reply) return found.reply;
    if (!found) return null;
    const doses = (await listOf(ctx, "dose")).filter(dose => dose.data.pid === found.patient.memoryId).sort((a, b) => b.data.day.localeCompare(a.data.day));
    if (!doses.length) return `No immunisations recorded for ${found.patient.data.name} yet.`;
    return `${tag(found.patient)}: ${doses.slice(0, 10).map(dose => `${dose.data.vaccine} ${dose.data.day}${dose.data.nextDue ? ` (next ${dayWords(dose.data.nextDue, ctx.today)})` : ""}`).join("; ")}.`;
  }

  if (/^(?:who|which (?:children|patients|babies|mothers)) (?:is|are|needs?|need) (?:due for |to be |to get )?(?:vaccinat(?:ion|ions|ed)|immuni[sz](?:ation|ations|ed)|a vaccine|their vaccines?|shots?)(?: (?:this week|this month|today|soon))?$/.test(lower) || /^(?:what )?(?:vaccinations|immuni[sz]ations) (?:are )?due(?: (?:this week|this month|today|soon))?$/.test(lower)) {
    const patients = nameMap(await listOf(ctx, "patient"));
    if (!patients.size) return null;
    const month = /this month/.test(lower); const horizon = month ? `${ctx.today.slice(0, 7)}-31` : addDays(ctx.today, 14);
    const due = outstanding(await listOf(ctx, "dose")).filter(dose => patients.has(dose.data.pid) && dose.data.nextDue <= horizon).sort((a, b) => a.data.nextDue.localeCompare(b.data.nextDue));
    if (!due.length) return `No vaccinations are due ${month ? "this month" : "in the next two weeks"} from the dates you gave me.`;
    return `${plural(due.length, "vaccination")} due: ${due.slice(0, 10).map(dose => `${tag(patients.get(dose.data.pid))} — ${dose.data.vaccine}, ${dose.data.nextDue < ctx.today ? `overdue since ${dayWords(dose.data.nextDue, ctx.today)}` : dayWords(dose.data.nextDue, ctx.today)}`).join("; ")}${due.length > 10 ? "; …" : ""}.`;
  }
  return null;
}

function immunisationDigest(records, today) {
  const doses = (records || []).filter(item => item.collection === "dose");
  return { due: outstanding(doses).filter(dose => dose.data.nextDue <= addDays(today, 7)) };
}

module.exports = Object.freeze({ handle, immunisationDigest, outstanding, family });
