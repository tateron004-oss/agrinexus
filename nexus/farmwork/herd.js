"use strict";

const { clean, parseQuantity, plural, whenOf, num, anyDay } = require("./parse.js");
const { startGuided, SESSION_MINUTES } = require("./guided.js");
const { findAnimal, speciesOf, nextDueOf } = require("./livestock.js");
const { pickByName, nameKey } = require("./fields.js");
const { farmLogTurn } = require("../farm/log.js");
const { describeDay, addDays } = require("../personal/dates.js");

// Quick farm logs, said the way a farmer says them, without first registering a named animal or a named field: "my cow gave 18 litres", "the hens laid 42 eggs", "vaccinated the goats",
// "my cow gave birth to a female calf", "planted 2 acres of maize", "sprayed the tomatoes for blight", "I harvested maize" (and then how much). A herd-level entry is kept as it was said; Kyro only
// asks which animal when the person has several named animals of that kind and did not say which. It records what it is told and never says what a pest is, what to spray, or what an animal needs.
const NUM = "(\\d+(?:[.,]\\d+)?)";
const SPECIES_WORDS = "cows?|cattle|bulls?|heifers?|calf|calves|goats?|sheep|lambs?|rams?|ewes?|pigs?|sows?|piglets?|chickens?|hens?|poultry|layers|broilers|rabbits?|ducks?|donkeys?|camels?|turkeys?";
const SINGULAR = /^(?:cow|goat|sheep|pig|sow|ewe|heifer|bull|ram|camel|donkey|rabbit|duck|turkey|hen|chicken|calf|lamb|doe)$/i;
const MILKERS = new Set(["cattle", "goat", "sheep", "camel"]);
// Anything that sounds like a person's health, or a question, is never taken as a farm entry ("I sprayed pesticide and now I feel dizzy", "can I eat the kale I sprayed yesterday").
const HEALTH_OR_QUESTION = /\?|\b(?:headache|dizz\w*|vomit\w*|sick|ill|pain\w*|fever|rash|burn\w*|poison\w*|cough\w*|breath\w*|faint\w*|nausea|swallow\w*|drank|ate|eaten|safe|can i|should i|is it|will it|how|why|what|when|which|do i|does it)\b/i;
const FARM_ACTIVITY = "(?:planted|sowed|transplanted|sprayed|weeded|ploughed|plowed|harrowed|fertili[sz]ed|top-?dressed|pruned|mulched|irrigated|thinned|staked)";

const scopeOf = ctx => ({ tenantId: ctx.tenantId, userId: ctx.userId });
const tidyText = text => clean(text).replace(/[.!?]+$/g, "").replace(/^(?:(?:please|kyro|ok|okay|hey|now|and|so|just)[, ]+)+/i, "");
// "yesterday", "last night": the day; and the sentence without the day words. "today"/"this morning" are today.
function dayOf(ctx, text) {
  const stripped = clean(text.replace(/\s*,?\s*\b(?:today|this morning|this afternoon|this evening|tonight)\b/gi, "")).replace(/\blast night\b/i, "yesterday");
  const when = whenOf(stripped, ctx.today);
  if (when?.future) return { future: true };
  return { day: when?.day || ctx.today, text: when?.day && when.text ? when.text : stripped };
}
const animalsOf = async ctx => (await ctx.store.list({ ...scopeOf(ctx), collection: "animal" })).filter(animal => animal.data.status !== "gone");
const hasLogs = ctx => Boolean(ctx.memory?.addFarmEntry && ctx.memory?.listFarmEntries && ctx.memory?.removeFarmEntry && ctx.memory?.addFarmEntryUnlessCapped);
const logLine = (ctx, text) => (hasLogs(ctx) ? farmLogTurn({ text, memory: ctx.memory, tenantId: ctx.tenantId, userId: ctx.userId, now: ctx.now, timeZone: ctx.zone }) : null);
const dayWords = (day, today) => (day === today ? "today" : day === addDays(today, -1) ? "yesterday" : describeDay(day, today));
// Is the name a particular animal the person has registered ("Daisy", "cow 12")? Then livestock.js records it, with that animal's own history.
const namedAnimal = async (ctx, word) => Boolean(findAnimal(await animalsOf(ctx), word));
async function subjectOf(ctx, word) {
  const species = speciesOf(word); if (!species) return null;
  const mine = (await animalsOf(ctx)).filter(animal => animal.data.species === species);
  return { species, singular: SINGULAR.test(clean(word)), mine };
}

// ---- which animal, when there are several of the kind and none was named ----
// The question is written by hand (it lists the names); the answer is read when it arrives, against the names kept with the half-finished entry.
async function askWhich(ctx, animals, kind, extra) {
  const names = animals.map(animal => animal.data.tag).sort().slice(0, 8);
  const question = `Which ${kind}? ${names.join(", ")}${animals.length > names.length ? " ..." : ""} (or say "all" for the whole herd).`;
  await ctx.store.setSession({ ...scopeOf(ctx), session: { collection: "herd_which", answers: {}, asking: "animal", extra: { ...extra, names }, expiresAt: new Date(Date.now() + SESSION_MINUTES * 60000).toISOString() } });
  return question;
}
async function finishWhich(ctx, answers, extra) {
  const said = clean(answers.animal).toLowerCase();
  if (/^(?:all|all of them|the whole herd|whole herd|herd|the herd|the group|them all|everyone)$/.test(said)) return writeEntry(ctx, extra, null);
  const names = extra.names || [];
  const hit = names.find(name => said === name || said.split(/\s+/).includes(name) || (name.includes(" ") && said.includes(name)));
  if (hit) return writeEntry(ctx, extra, hit);
  await ctx.store.setSession({ ...scopeOf(ctx), session: { collection: "herd_which", answers: {}, asking: "animal", extra, expiresAt: new Date(Date.now() + SESSION_MINUTES * 60000).toISOString() } });
  return `I don't have one called "${clean(answers.animal)}". Please pick one: ${names.join(", ")}, or say "all". (Say "cancel" to stop.)`;
}

// ---- the amount of a harvest, said after "I harvested maize" ----
function readAmount(raw, q) {
  const t = clean(raw).replace(/^(?:it was|it is|about|around|roughly|a total of)\s+/i, "");
  const quantity = parseQuantity(t);
  if (quantity && ["kg", "bag", "sack", "crate", "bunch"].includes(quantity.unit)) return { value: `${quantity.value} ${quantity.unit}` };
  if (quantity && quantity.unit === "L" && q.milkOk) return { value: `${quantity.value} litres` };
  return { hint: 'Say the amount with a unit, like "3 bags" or "200 kg".' };
}
const readEggs = raw => { const m = /^(?:about |around )?(\d+)(?:\s+eggs?)?$/i.exec(clean(raw)); return m && Number(m[1]) > 0 ? { value: m[1] } : { hint: 'Say how many, like "42".' }; };
const readMilk = raw => { const m = /^(?:about |around )?(\d+(?:\.\d+)?)\s*(?:litres?|liters?|l)?$/i.exec(clean(raw)); return m && Number(m[1]) > 0 && Number(m[1]) <= 100000 ? { value: `${m[1]} litres` } : { hint: 'Say how many litres, like "18 litres".' }; };
async function finishHarvest(ctx, answers, extra) {
  const text = extra.crop === "eggs" ? `${extra.verb} ${answers.amount} eggs${extra.when ? ` ${extra.when}` : ""}` : extra.crop === "milk" ? `${extra.verb} ${answers.amount} of milk${extra.when ? ` ${extra.when}` : ""}` : `${extra.verb} ${answers.amount} of ${extra.crop}${extra.when ? ` ${extra.when}` : ""}`;
  return (await logLine(ctx, text)) || `I could not log that. Try "${extra.verb} 3 bags of ${extra.crop}".`;
}
const templates = {
  herd_which: { collection: "herd_which", questions: [{ key: "animal", ask: "Which animal?", type: "text", max: 60 }], finish: finishWhich },
  herd_harvest: { collection: "herd_harvest", questions: [{ key: "amount", ask: "How much was it? For example 3 bags or 200 kg.", type: "text", max: 40, parse: readAmount }], finish: finishHarvest },
  herd_harvest_eggs: { collection: "herd_harvest_eggs", questions: [{ key: "amount", ask: "How many eggs?", type: "text", max: 20, parse: readEggs }], finish: finishHarvest },
  herd_harvest_milk: { collection: "herd_harvest_milk", questions: [{ key: "amount", ask: "How many litres of milk?", type: "text", max: 20, parse: readMilk }], finish: finishHarvest }
};

// Writes the entry for one animal (tag) or the herd (no tag). extra: { action: "milk" | "event", ... }
async function writeEntry(ctx, extra, tag) {
  const scope = scopeOf(ctx);
  if (extra.action === "milk") {
    if (tag) {
      await ctx.store.add({ ...scope, collection: "animal_event", data: { animal: tag, type: "milk", day: extra.day, value: extra.value } });
      return `Recorded: ${tag} gave ${extra.value} L ${dayWords(extra.day, ctx.today)}.`;
    }
    return (await logLine(ctx, `collected ${extra.value} litres of milk ${extra.day === ctx.today ? "today" : extra.day === addDays(ctx.today, -1) ? "yesterday" : `on ${extra.day}`}`)) || null;
  }
  const label = tag || extra.label;
  await ctx.store.add({ ...scope, collection: "animal_event", data: { animal: label, type: extra.type, day: extra.day, detail: extra.detail || "", nextDue: extra.nextDue || null, ...(tag ? {} : { herd: true, species: extra.species }) } });
  if (extra.type === "birth") return `Recorded: ${tag || extra.label} gave birth ${dayWords(extra.day, ctx.today)}${extra.detail ? ` (${extra.detail})` : ""}. Say "add a calf" (or kid, lamb...) to keep a record of the young one.`;
  const verb = { vaccination: "vaccinated", deworming: "dewormed", dipping: "dipped", treatment: "treated" }[extra.type] || extra.type;
  return `Recorded: ${tag ? `${tag} ${verb}` : `${verb} ${label}`}${extra.detail ? ` (${extra.detail})` : ""} ${dayWords(extra.day, ctx.today)}.${extra.nextDue ? ` I'll remember it's due again ${describeDay(extra.nextDue, ctx.today)}.` : ' Add "next due in 6 months" (or a date) when you say it and I\'ll keep track.'} I only record what you tell me; ask your vet what your animals need.`;
}

async function handle(ctx) {
  const t0 = tidyText(ctx.text);
  if (!t0 || t0.length > 200) return null;
  const scope = scopeOf(ctx);
  let m;
  // "next due in 6 months" is a date AHEAD that belongs to the record, not the day it happened: set aside while the day of the entry is read
  const dueAt = t0.search(/[,;]?\s*(?:next(?: one| dose)?(?: is)? due|due again|repeat|next dose)\s/i);
  const dated = dayOf(ctx, dueAt > 0 ? t0.slice(0, dueAt) : t0);
  if (dated.future) return null;
  const { day } = dated;
  const t = dueAt > 0 ? `${dated.text}${t0.slice(dueAt)}` : dated.text;

  // ---- milk from a kind of animal, not a named one ----
  if ((m = new RegExp(`^(?:(?:my|the|our)\\s+)?(cows?|cattle|goats?|sheep|camels?|herd)\\s+(?:gave|give|gives|produced|produces|yielded)\\s+(?:about |around |roughly |a total of )?${NUM}\\s*(?:litres?|liters?|l)\\b(?:\\s+of\\s+milk)?$`, "i").exec(t))) {
    const value = num(m[2]); if (!(value > 0)) return null;
    const subject = /^herd$/i.test(m[1]) ? { species: "cattle", singular: false, mine: [] } : await subjectOf(ctx, m[1]);
    if (!subject || !MILKERS.has(subject.species)) return null;
    if (await namedAnimal(ctx, m[1])) return null; // "cow 12 gave ...": livestock.js, with that animal's history
    if (value > 100 && subject.singular) return "That is more milk than one animal gives, so I haven't saved it.";
    const extra = { action: "milk", value, day };
    if (subject.singular && subject.mine.length === 1) return writeEntry(ctx, extra, subject.mine[0].data.tag);
    if (subject.singular && subject.mine.length > 1) return askWhich(ctx, subject.mine, clean(m[1]).toLowerCase(), extra);
    return writeEntry(ctx, extra, null);
  }
  // "the hens laid 42 eggs", "collected 42 eggs", "I milked 18 litres": the farm log (log.js) keeps these; read here too so this toolkit answers on its own
  if (hasLogs(ctx) && (new RegExp(`^(?:(?:the |my |our )?(?:hens|chickens|birds|layers|ducks|flock|poultry)(?: have| had)?\\s+(?:laid|produced)|(?:(?:we|i)\\s+)?(?:collected|gathered|got|picked))\\s+(?:a total of |about |around )?${NUM}\\s*eggs\\b`, "i").test(t)
    || new RegExp(`^(?:(?:we|i)\\s+)?(?:milked|collected|gathered|got)\\s+(?:a total of |about |around )?${NUM}\\s*(?:litres|liters)\\b`, "i").test(t))) {
    const reply = await logLine(ctx, clean(ctx.text));
    if (reply) return reply;
  }

  // ---- vaccinated / dewormed / dipped / treated "the goats" ----
  if ((m = new RegExp(`^(?:(?:i|we)\\s+)?(vaccinated|dewormed|drenched|dipped|treated)\\s+(?:all\\s+)?(?:of\\s+)?(?:the\\s+|my\\s+|our\\s+)?(${SPECIES_WORDS})(?:\\s+(?:against|for|with)\\s+(.+?))?(?:[,;]?\\s*(?:next(?: one| dose)?(?: is)? due|due again|repeat|next dose)\\s+(?:on |in )?(.+))?$`, "i").exec(t))) {
    if (HEALTH_OR_QUESTION.test(t)) return null;
    if (await namedAnimal(ctx, m[2])) return null;
    const subject = await subjectOf(ctx, m[2]); if (!subject) return null;
    const verb = m[1].toLowerCase(); const type = /^vaccin/.test(verb) ? "vaccination" : /^(?:deworm|drench)/.test(verb) ? "deworming" : /^dip/.test(verb) ? "dipping" : "treatment";
    const detail = clean(m[3] || "").slice(0, 60);
    const nextDue = m[4] ? (nextDueOf(`in ${m[4]}`.replace(/^in in /, "in ").replace(/^in (\d{4}-\d{2}-\d{2}|[a-z]+ \d)/i, "$1"), ctx.today) || anyDay(m[4], ctx.today)) : null;
    const label = subject.singular ? `your ${clean(m[2]).toLowerCase()}` : `your ${clean(m[2]).toLowerCase()}`;
    const extra = { action: "event", type, day, detail, nextDue: nextDue || null, species: subject.species, label };
    if (subject.singular && subject.mine.length > 1) return askWhich(ctx, subject.mine, clean(m[2]).toLowerCase(), extra);
    if (subject.mine.length === 1 && (subject.singular || Number(subject.mine[0].data.count) > 1)) return writeEntry(ctx, extra, subject.mine[0].data.tag);
    return writeEntry(ctx, extra, null);
  }

  // ---- gave birth ----
  if ((m = new RegExp(`^(?:(?:my|the|our)\\s+)?(cow|goat|sheep|pig|sow|ewe|doe|heifer|camel|rabbit|donkey)\\s+(?:has\\s+|have\\s+)?(?:just\\s+)?(?:calved|kidded|lambed|farrowed|foaled|gave birth|delivered)(?:\\s+(?:to\\s+)?(?:an?\\s+)?(.+))?$`, "i").exec(t))) {
    if (HEALTH_OR_QUESTION.test(t)) return null;
    if (await namedAnimal(ctx, m[1])) return null;
    const subject = await subjectOf(ctx, m[1]); if (!subject) return null;
    const detail = clean(m[2] || "").toLowerCase().slice(0, 60);
    const extra = { action: "event", type: "birth", day, detail, species: subject.species, label: `your ${clean(m[1]).toLowerCase()}` };
    if (subject.mine.length === 1) return writeEntry(ctx, extra, subject.mine[0].data.tag);
    if (subject.mine.length > 1) return askWhich(ctx, subject.mine, clean(m[1]).toLowerCase(), extra);
    return writeEntry(ctx, extra, null);
  }

  // ---- planted / sprayed / weeded ... with no field to name ----
  if ((m = new RegExp(`^(?:(?:i|we)\\s+)?(?:just\\s+)?(${FARM_ACTIVITY})\\s+(?:about |around |roughly )?(.+)$`, "i").exec(t)) && !HEALTH_OR_QUESTION.test(t)) {
    const verb = m[1].toLowerCase().replace(/^plowed$/, "ploughed");
    let rest = clean(m[2]);
    const where = /^(.*?)\s+(?:in|on|at)\s+(?:the |my |our )?(.+)$/i.exec(rest);
    let place = ""; if (where) { rest = clean(where[1]); place = clean(where[2]); }
    // a field of theirs, named anywhere in the sentence (even "on 12 March 2027" after it): fields.js records it on the field
    if (place) {
      const fields = await ctx.store.list({ ...scope, collection: "field" });
      const named = field => nameKey(field.data.name) && new RegExp(`\\b${nameKey(field.data.name).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i").test(t0);
      if (pickByName(fields, place) || fields.some(named)) return null;
    }
    const why = /^(.*?)\s+(?:for|against|because of|to control)\s+(.+)$/i.exec(rest);
    let detail = ""; if (why) { rest = clean(why[1]); detail = clean(why[2]).toLowerCase().slice(0, 80); }
    const size = parseQuantity(rest); const sized = size && (size.unit === "acre" || size.unit === "ha") ? { value: size.value, unit: size.unit } : null;
    const item = clean(sized ? `${rest.slice(0, size.index)} ${rest.slice(size.index + size.matched.length)}` : rest).replace(/^(?:of\s+)?(?:the\s+|my\s+|our\s+|some\s+)?/i, "").replace(/\s+(?:with|using)\s+.+$/i, "").toLowerCase();
    if (!item || item.split(" ").length > 4 || /\d/.test(item) || /^(?:it|them|this|that|everything|all)$/.test(item)) return null;
    if (new RegExp(`^(?:${SPECIES_WORDS})$`, "i").test(item)) return null; // "sprayed the cows" is animal care, not a crop
    await ctx.store.add({ ...scope, collection: "activity", data: { verb, item, size: sized, detail, place, day } });
    const sizeWords = sized ? `${sized.value} ${sized.unit === "acre" ? (sized.value === 1 ? "acre" : "acres") : sized.value === 1 ? "hectare" : "hectares"} of ` : "";
    const fields = await ctx.store.list({ ...scope, collection: "field" });
    const note = verb === "sprayed" ? " I only keep the record; I can't tell you what to use or when it is safe to harvest. Your agro-vet can." : "";
    const hint = !fields.length && /^(?:planted|sowed|transplanted)$/.test(verb) ? ' Say "add a field called North Plot" if you want it kept by field.' : "";
    return `Recorded: ${verb} ${sizeWords}${item}${place ? ` in ${place}` : ""}${detail ? ` (${detail})` : ""} ${dayWords(day, ctx.today)}.${note}${hint}`;
  }

  // ---- "I harvested maize" with no amount: asked, and kept until it is given ----
  if (hasLogs(ctx) && (m = new RegExp(`^(?:(?:i|we)\\s+)?(?:just\\s+)?(harvested|picked|threshed|gathered|collected|milked)\\s+(?:some\\s+|the\\s+|my\\s+|our\\s+)?([a-z][a-z ]{1,24}?)$`, "i").exec(t))) {
    const verb = m[1].toLowerCase(); let crop = clean(m[2]).toLowerCase();
    if (/^(?:all|everything|it|them|this|that|enough|nothing|some|early|late|well|here|there|again|too)\b/.test(crop) || crop.split(" ").length > 3 || /\b(?:and|but|because|when|while|with|from|in|on|at|for|to)\b/.test(crop)) return null;
    if (verb === "milked") { if (!/^(?:cows?|goats?|sheep|camels?|herd)$/.test(crop)) return null; crop = "milk"; }
    const when = day === ctx.today ? "" : dayWords(day, ctx.today);
    const collection = crop === "eggs" ? "herd_harvest_eggs" : crop === "milk" ? "herd_harvest_milk" : "herd_harvest";
    return startGuided(ctx, templates[collection], {}, { verb: crop === "milk" || crop === "eggs" ? "collected" : verb === "milked" ? "collected" : verb, crop, when });
  }

  // ---- what did I plant / spray / do on the farm ----
  if (/^(?:what|which)(?: crops?)?(?: have| did| do) (?:i|we)(?: plant| planted| spray| sprayed| sow| sown| sowed| do| done)(?: [a-z ]+)?$|^(?:show|list|read)(?: me)? (?:my )?(?:farm )?(?:activities|activity|farm work|work log)$/i.test(t)) {
    const rows = await ctx.store.list({ ...scope, collection: "activity" });
    if (!rows.length) return 'I have no farm work recorded yet. Say "planted 2 acres of maize" or "sprayed the tomatoes" when you do it.';
    const wantedVerb = /plant|sow/i.test(t) ? /^(?:planted|sowed|transplanted)$/ : /spray/i.test(t) ? /^sprayed$/ : null;
    const shown = rows.filter(row => !wantedVerb || wantedVerb.test(row.data.verb)).slice(0, 8);
    if (!shown.length) return `I have no ${wantedVerb ? (/spray/i.test(t) ? "spraying" : "planting") : "farm work"} recorded yet.`;
    return `${plural(shown.length, "entry", "entries")}, latest first: ${shown.map(row => `${describeDay(row.data.day, ctx.today)} ${row.data.verb} ${row.data.size ? `${row.data.size.value} ${row.data.size.unit === "acre" ? "acres" : row.data.size.unit} of ` : ""}${row.data.item}${row.data.place ? ` in ${row.data.place}` : ""}`).join("; ")}.`;
  }
  return null;
}

module.exports = Object.freeze({ handle, templates, SPECIES_WORDS });
