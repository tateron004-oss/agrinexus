"use strict";

const { clean, titleCase, anyDay, pastDay, plural, num } = require("./parse.js");
const { startGuided, askConfirm } = require("./guided.js");
const { describeDay, addDays } = require("../personal/dates.js");

// Livestock records: each animal (or flock), and what happened to it: vaccinations and other treatments, weights, milk, breeding and births.
// Kyro records what the farmer says and reminds them of the dates THEY gave; it never says what an animal has, what to give it, or when it
// should be vaccinated. Gestation lengths are typical figures and are labelled as such.
const SPECIES = [["cattle", /^(?:cows?|cattle|bulls?|heifers?|calf|calves|oxen|ox|steers?)$/], ["goat", /^(?:goats?|kids?|billy|nanny|does?)$/], ["sheep", /^(?:sheep|lambs?|rams?|ewes?)$/], ["pig", /^(?:pigs?|sows?|boars?|piglets?|hogs?)$/],
  ["chicken", /^(?:chickens?|hens?|roosters?|cocks?|chicks?|poultry|layers?|broilers?)$/], ["rabbit", /^(?:rabbits?|bucks?)$/], ["duck", /^ducks?$/], ["donkey", /^(?:donkeys?|mules?)$/], ["camel", /^camels?$/], ["turkey", /^turkeys?$/]];
const GESTATION = { cattle: 283, goat: 150, sheep: 147, pig: 114, rabbit: 31 };
const speciesOf = word => { const w = clean(word).toLowerCase(); const hit = SPECIES.find(([, pattern]) => pattern.test(w)); return hit ? hit[0] : ""; };
const SPECIES_WORDS = "cows?|cattle|bulls?|heifers?|calf|calves|oxen|goats?|sheep|lambs?|rams?|ewes?|pigs?|sows?|boars?|chickens?|hens?|roosters?|poultry|layers|broilers|rabbits?|ducks?|donkeys?|camels?|turkeys?";
const templates = {
  animal: {
    collection: "animal", intro: "Let's add an animal.",
    questions: [
      { key: "tag", ask: "What tag or name identifies it? For example cow 12 or Bella.", type: "text" },
      { key: "species", ask: "What kind of animal is it: cattle, goat, sheep, pig, chicken, rabbit or something else?", type: "choice", options: [...SPECIES.map(([value, pattern]) => ({ value, words: [value, ...({ cattle: ["cow", "cows", "bull", "heifer", "calf"], goat: ["goats"], sheep: ["lamb", "ram", "ewe"], pig: ["pigs", "sow"], chicken: ["chickens", "hen", "hens", "poultry"], rabbit: ["rabbits"], duck: ["ducks"], donkey: ["donkeys"], camel: ["camels"], turkey: ["turkeys"] }[value] || [])] })), { value: "other", words: ["other", "something else"] }] },
      { key: "breed", ask: "What breed is it?", type: "text", optional: true },
      { key: "sex", ask: "Is it female or male?", type: "choice", options: [{ value: "female", words: ["female", "girl", "she", "cow", "hen", "doe", "ewe", "sow", "heifer"] }, { value: "male", words: ["male", "boy", "he", "bull", "ram", "buck", "boar", "rooster"] }], optional: true },
      { key: "born", ask: "When was it born? A day, or roughly.", type: "date", pastPreferred: true, optional: true },
      { key: "notes", ask: "Anything else worth remembering about it?", type: "longtext", optional: true }
    ],
    async finish(ctx, answers) {
      const clear = Object.fromEntries(Object.entries(answers).filter(([, value]) => value !== null && value !== undefined));
      const scope = { tenantId: ctx.tenantId, userId: ctx.userId };
      const animals = await ctx.store.list({ ...scope, collection: "animal" });
      const tag = clean(clear.tag).toLowerCase();
      if (animals.some(animal => animal.data.tag === tag && animal.data.status !== "gone")) return `You already have an animal tagged ${clear.tag}.`;
      if (animals.length >= 1000) return "That's the most animals I can keep records for (a thousand). Remove some first.";
      const record = await ctx.store.add({ ...scope, collection: "animal", data: { ...clear, tag, status: "active" } });
      return `Added ${describeAnimal(record, ctx.today)}. Say "vaccinated ${tag} against <disease>, next due <day>" or "${tag} weighs 320 kg" to keep its history.`;
    }
  }
};

const age = (born, today) => { if (!born) return ""; const days = Math.round((Date.parse(today) - Date.parse(born)) / 86400000); if (days < 0) return ""; if (days < 60) return `${days} days old`; if (days < 730) return `${Math.floor(days / 30.4)} months old`; return `${Math.floor(days / 365.25)} years old`; };
const describeAnimal = (record, today) => { const d = record.data; return `${d.tag}${d.count ? ` (${d.count} birds)` : ""} — ${[d.species, d.breed, d.sex, age(d.born, today)].filter(Boolean).join(", ")}${d.status && d.status !== "active" ? ` [${d.status}]` : ""}`; };

// Which animal a spoken reference means: the exact tag, or the words of the tag, or the species and number ("heifer 12" for "cow 12").
function findAnimal(animals, query) {
  const wanted = clean(query).toLowerCase().replace(/^(?:the|my)\s+/, "");
  if (!wanted) return null;
  const live = animals.filter(animal => animal.data.status !== "gone");
  const exact = live.filter(animal => animal.data.tag === wanted);
  if (exact.length === 1) return exact[0];
  const words = wanted.split(" ");
  const loose = live.filter(animal => words.every(word => animal.data.tag.split(" ").includes(word)));
  if (loose.length === 1) return loose[0];
  const number = /\b(\d+)\b/.exec(wanted)?.[1]; const species = speciesOf(words[0]);
  if (number && species) { const bySpecies = live.filter(animal => animal.data.species === species && animal.data.tag.split(" ").includes(number)); if (bySpecies.length === 1) return bySpecies[0]; }
  return null;
}

const addMonths = (day, months) => { const d = new Date(`${day}T12:00:00Z`); d.setUTCMonth(d.getUTCMonth() + months); return d.toISOString().slice(0, 10); };
function nextDueOf(text, today) {
  if (!text) return null;
  const m = /\bin (\d{1,2}) (months?|weeks?|days?|years?)\b/i.exec(text);
  if (m) { const n = Number(m[1]); return /^month/i.test(m[2]) ? addMonths(today, n) : /^year/i.test(m[2]) ? addMonths(today, n * 12) : addDays(today, /^week/i.test(m[2]) ? n * 7 : n); }
  return anyDay(text, today);
}
const EVENT_LABEL = { vaccination: "vaccination", deworming: "deworming", dipping: "dipping", treatment: "treatment", weight: "weighed", milk: "milk", breeding: "bred", birth: "birth", feeding: "fed", note: "note" };

async function record(ctx, animal, type, fields) {
  const scope = { tenantId: ctx.tenantId, userId: ctx.userId };
  await ctx.store.add({ ...scope, collection: "animal_event", data: { animal: animal.data.tag, type, day: ctx.today, ...fields } });
}
const eventsOf = async (ctx, animal) => (await ctx.store.list({ tenantId: ctx.tenantId, userId: ctx.userId, collection: "animal_event" })).filter(event => event.data.animal === animal.data.tag);

async function handle(ctx) {
  const t = clean(ctx.text).replace(/[.!?]+$/g, ""); const lower = t.toLowerCase();
  const scope = { tenantId: ctx.tenantId, userId: ctx.userId };
  let m;

  // ---- adding animals ----
  if ((m = new RegExp(`^(?:please )?(?:add|register|record) (?:a |an |another |a new |new )?(?:(?:flock of )?(\\d{1,5}) )?(${SPECIES_WORDS})(?: called| named| tagged| number| no\\.?| #)?\\s*(.*)$`, "i").exec(t)) && !/\b(?:to|in|into) (?:my |the )?(?:inventory|stock|store|list|calendar)\b/i.test(t)) {
    const species = speciesOf(m[2]); if (!species) return null;
    const count = m[1] ? Number(m[1]) : 0; const rest = clean(m[3]).replace(/^(?:called|named|tagged|number|is)\s+/i, "");
    const prefill = { species };
    if (count > 1) { prefill.tag = `${species} flock ${count}`; prefill.count = count; }
    else if (rest && rest.length <= 30) prefill.tag = /^\d+$/.test(rest) ? `${clean(m[2]).toLowerCase().replace(/s$/, "")} ${rest}` : titleCase(rest).toLowerCase();
    return startGuided(ctx, templates.animal, prefill);
  }
  if (/^(?:please )?(?:add|register|record) (?:a |an |another |a new |new )?(?:animal|livestock)$/i.test(t)) return startGuided(ctx, templates.animal);

  // ---- lists and questions ----
  if (/^(?:show|list|what are) (?:me )?my (?:animals|livestock|cattle|cows|goats|sheep|pigs|chickens|herd|flock)$/.test(lower) || /^what animals do i have$/.test(lower)) {
    const animals = (await ctx.store.list({ ...scope, collection: "animal" })).filter(animal => animal.data.status !== "gone");
    if (!animals.length) return 'You have no animals recorded. Say "add a cow called Bella".';
    return `You have ${plural(animals.length, "animal record")}: ${animals.slice().reverse().slice(0, 10).map(animal => describeAnimal(animal, ctx.today)).join("; ")}${animals.length > 10 ? ` and ${animals.length - 10} more` : ""}.`;
  }
  if (/^(?:what|which) (?:vaccinations|treatments|jobs|animals) (?:are|is) (?:due|coming up|overdue)(?: soon)?$/.test(lower) || /^(?:what|which) animals need (?:vaccinating|treatment|attention)$/.test(lower) || /^(?:any )?(?:vaccinations|treatments) due$/.test(lower)) {
    const events = (await ctx.store.list({ ...scope, collection: "animal_event" })).filter(event => event.data.nextDue && event.data.nextDue <= addDays(ctx.today, 30));
    const latest = new Map(); for (const event of events) { const key = `${event.data.animal}|${event.data.type}|${event.data.detail || ""}`; if (!latest.has(key) || latest.get(key).data.nextDue < event.data.nextDue) latest.set(key, event); }
    const due = [...latest.values()].sort((a, b) => a.data.nextDue.localeCompare(b.data.nextDue));
    return due.length ? `Due: ${due.slice(0, 10).map(event => `${event.data.animal} ${event.data.detail ? `${event.data.detail} ` : ""}${EVENT_LABEL[event.data.type] || event.data.type} ${event.data.nextDue < ctx.today ? `was due ${describeDay(event.data.nextDue, ctx.today)}` : `due ${describeDay(event.data.nextDue, ctx.today)}`}`).join("; ")}.` : "Nothing is due in the next 30 days from the dates you gave me.";
  }
  if ((m = /^(?:tell me about|show|describe|what about) (?:my )?(.+)$/i.exec(t)) && new RegExp(`\\b(?:${SPECIES_WORDS})\\b|\\d`, "i").test(m[1])) {
    const animals = await ctx.store.list({ ...scope, collection: "animal" }); const animal = findAnimal(animals, m[1]);
    if (animal) {
      const events = await eventsOf(ctx, animal);
      const last = type => events.find(event => event.data.type === type);
      const weight = last("weight"); const vaccine = last("vaccination"); const breeding = events.find(event => event.data.type === "breeding" && event.data.expected && event.data.expected >= ctx.today);
      const milk = events.filter(event => event.data.type === "milk" && event.data.day >= addDays(ctx.today, -6)).reduce((sum, event) => sum + event.data.value, 0);
      const upcoming = events.filter(event => event.data.nextDue && event.data.nextDue >= ctx.today).sort((a, b) => a.data.nextDue.localeCompare(b.data.nextDue))[0];
      return [`${describeAnimal(animal, ctx.today)}.`, weight ? `Last weight ${weight.data.value} kg (${describeDay(weight.data.day, ctx.today)}).` : "", vaccine ? `Last ${vaccine.data.detail ? `${vaccine.data.detail} ` : ""}vaccination ${describeDay(vaccine.data.day, ctx.today)}.` : "",
        upcoming ? `Next due: ${upcoming.data.detail ? `${upcoming.data.detail} ` : ""}${EVENT_LABEL[upcoming.data.type]} ${describeDay(upcoming.data.nextDue, ctx.today)}.` : "", breeding ? `Expected to give birth around ${describeDay(breeding.data.expected, ctx.today)} (a typical figure, not a promise).` : "",
        milk ? `Milk in the last 7 days: ${Math.round(milk * 10) / 10} L.` : "", animal.data.notes ? `Notes: ${animal.data.notes}` : ""].filter(Boolean).join(" ");
    }
  }
  if ((m = /^how much milk (?:did|has) (.+?) (?:give|given|produce|produced)(?: (today|yesterday|this week|this month))?$/i.exec(t))) {
    const animals = await ctx.store.list({ ...scope, collection: "animal" }); const animal = findAnimal(animals, m[1]);
    if (animal) {
      const from = /month/.test(m[2] || "") ? `${ctx.today.slice(0, 7)}-01` : /week/.test(m[2] || "") ? addDays(ctx.today, -6) : /yesterday/.test(m[2] || "") ? addDays(ctx.today, -1) : ctx.today;
      const to = /yesterday/.test(m[2] || "") ? from : ctx.today;
      const total = (await eventsOf(ctx, animal)).filter(event => event.data.type === "milk" && event.data.day >= from && event.data.day <= to).reduce((sum, event) => sum + event.data.value, 0);
      return total ? `${animal.data.tag} gave ${Math.round(total * 10) / 10} L ${m[2] || "today"}.` : `I have no milk logged for ${animal.data.tag} ${m[2] || "today"}.`;
    }
  }

  // ---- recording what happened ----
  if ((m = /^(?:i |we )?(vaccinated|dewormed|drenched|dipped|treated) (.+?)(?: (?:against|for|with) (.+?))?(?:[,;]?\s*(?:next(?: one| dose)?(?: is)? due|due again|repeat|next dose) (?:on |in )?(.+))?$/i.exec(t)) || (m = /^(?:record|log|add) (vaccination|deworming|treatment|dipping)(?: for| of| on)? (.+?)(?: (?:against|for|with) (.+?))?(?:[,;]?\s*next due (?:on |in )?(.+))?$/i.exec(t))) {
    const animals = await ctx.store.list({ ...scope, collection: "animal" }); const animal = findAnimal(animals, m[2]);
    if (!animal) return animals.length ? `I don't have an animal called ${clean(m[2])}. Say "add a ${clean(m[2])}" first.` : null;
    const verb = m[1].toLowerCase(); const type = /^vaccin/.test(verb) ? "vaccination" : /^(?:deworm|drench)/.test(verb) ? "deworming" : /^dip/.test(verb) ? "dipping" : "treatment";
    const detail = clean(m[3] || "").toLowerCase().slice(0, 60); const nextDue = nextDueOf(m[4] ? `in ${m[4]}`.replace(/^in in /, "in ").replace(/^in (\d{4}-\d{2}-\d{2}|[a-z]+ \d)/i, "$1") : "", ctx.today) || (m[4] ? anyDay(m[4], ctx.today) : null);
    await record(ctx, animal, type, { detail, nextDue: nextDue || null });
    return `Recorded: ${animal.data.tag} ${EVENT_LABEL[type] === "vaccination" ? "vaccinated" : EVENT_LABEL[type] === "deworming" ? "dewormed" : EVENT_LABEL[type] === "dipping" ? "dipped" : "treated"}${detail ? ` (${detail})` : ""} today.${nextDue ? ` I'll remember it's due again ${describeDay(nextDue, ctx.today)}.` : ' Tell me when it is next due ("next due in 6 months") and I\'ll keep track.'} I only record what you tell me; ask your vet what your animals need.`;
  }
  if ((m = /^(?:weighed )?(.+?)(?: weighs| weighed| weight is| is| now weighs)? (\d+(?:\.\d+)?) ?(?:kg|kgs|kilos?|kilograms?)$/i.exec(t)) || (m = /^weighed (.+?)[:,]? (\d+(?:\.\d+)?) ?(?:kg|kgs|kilos?)$/i.exec(t))) {
    const animals = await ctx.store.list({ ...scope, collection: "animal" }); const animal = findAnimal(animals, m[1]);
    if (animal) {
      const value = num(m[2]); if (!(value > 0 && value <= 2000)) return "That doesn't look like an animal's weight, so I haven't saved it.";
      const before = (await eventsOf(ctx, animal)).find(event => event.data.type === "weight");
      await record(ctx, animal, "weight", { value });
      return `Recorded: ${animal.data.tag} weighs ${value} kg.${before ? ` ${value === before.data.value ? "Unchanged" : `${value > before.data.value ? "Up" : "Down"} ${Math.round(Math.abs(value - before.data.value) * 10) / 10} kg`} since ${before.data.day === ctx.today ? "earlier today" : describeDay(before.data.day, ctx.today)}.` : ""}`;
    }
  }
  if ((m = /^(.+?) (?:gave|produced|yielded) (\d+(?:\.\d+)?) ?(?:litres?|liters?|l)(?: of milk)?(?: (today|yesterday|this morning|tonight|this evening))?$/i.exec(t))) {
    const animals = await ctx.store.list({ ...scope, collection: "animal" }); const animal = findAnimal(animals, m[1]);
    if (animal) {
      const value = num(m[2]); if (!(value > 0 && value <= 100)) return "That is more milk than one animal gives, so I haven't saved it.";
      const day = /yesterday/i.test(m[3] || "") ? addDays(ctx.today, -1) : ctx.today;
      await ctx.store.add({ ...scope, collection: "animal_event", data: { animal: animal.data.tag, type: "milk", day, value } });
      return `Recorded: ${animal.data.tag} gave ${value} L${day === ctx.today ? " today" : " yesterday"}.`;
    }
  }
  if ((m = /^(.+?) (?:was |has been )?(?:served|bred|mated|inseminated)(?: (?:by|to|with) (.+?))?(?: on (.+))?$/i.exec(t))) {
    const animals = await ctx.store.list({ ...scope, collection: "animal" }); const animal = findAnimal(animals, m[1]);
    if (animal) {
      const day = (m[3] ? pastDay(m[3], ctx.today) : null) || ctx.today; if (day > ctx.today) return "That day is still ahead; I only record what has happened.";
      const gestation = GESTATION[animal.data.species]; const expected = gestation ? addDays(day, gestation) : null;
      await record(ctx, animal, "breeding", { day, sire: clean(m[2] || "").slice(0, 40), expected });
      return `Recorded: ${animal.data.tag} bred ${describeDay(day, ctx.today)}${m[2] ? ` (${clean(m[2])})` : ""}.${expected ? ` A typical ${animal.data.species} gestation would put the birth around ${describeDay(expected, ctx.today)}; that is a typical figure, not a promise.` : ""}`;
    }
  }
  if ((m = /^(.+?) (?:calved|kidded|lambed|farrowed|gave birth|foaled)(?: on (.+))?$/i.exec(t))) {
    const animals = await ctx.store.list({ ...scope, collection: "animal" }); const animal = findAnimal(animals, m[1]);
    if (animal) { const day = (m[2] ? pastDay(m[2], ctx.today) : null) || ctx.today; await record(ctx, animal, "birth", { day }); return `Recorded: ${animal.data.tag} gave birth ${describeDay(day, ctx.today)}. Say "add a calf" (or kid, lamb...) to keep a record of the young one.`; }
  }
  if ((m = /^(?:i )?fed (.+?) (\d+(?:\.\d+)?) ?(kg|kgs|kilos?|litres?|liters?|bags?|sacks?) (?:of )?(.+)$/i.exec(t))) {
    const animals = await ctx.store.list({ ...scope, collection: "animal" }); const animal = findAnimal(animals, m[1]);
    if (animal) { await record(ctx, animal, "feeding", { detail: clean(m[4]).toLowerCase().slice(0, 40), value: num(m[2]), unit: m[3].toLowerCase() }); return `Recorded: fed ${animal.data.tag} ${m[2]} ${m[3]} of ${clean(m[4]).toLowerCase()}.`; }
  }
  if ((m = /^(.+?) (?:has )?(?:died|is dead|was lost|was stolen)$/i.exec(t))) {
    const animals = await ctx.store.list({ ...scope, collection: "animal" }); const animal = findAnimal(animals, m[1]);
    if (animal) return askConfirm(ctx, `Mark ${animal.data.tag} as gone from your herd? Its history stays in your records.`, { type: "animal-gone", memoryId: animal.memoryId, tag: animal.data.tag });
  }
  if ((m = /^(?:please )?(?:remove|delete) (?:the )?(?:animal )?(.+?)(?: from my (?:animals|livestock|herd))?$/i.exec(t)) && new RegExp(`\\b(?:${SPECIES_WORDS})\\b|\\d`, "i").test(m[1]) && /^(?:please )?(?:remove|delete)/i.test(t)) {
    const animal = findAnimal(await ctx.store.list({ ...scope, collection: "animal" }), m[1]);
    if (animal) return askConfirm(ctx, `Remove ${animal.data.tag} and stop keeping its records?`, { type: "remove-record", memoryId: animal.memoryId, label: animal.data.tag });
  }
  return null;
}

const confirms = {
  "animal-gone": async (ctx, action) => {
    const animal = (await ctx.store.list({ tenantId: ctx.tenantId, userId: ctx.userId, collection: "animal" })).find(item => item.memoryId === action.memoryId);
    if (!animal) return `I couldn't find ${action.tag} any more.`;
    await ctx.store.update({ tenantId: ctx.tenantId, userId: ctx.userId, record: { ...animal, data: { ...animal.data, status: "gone", goneOn: ctx.today } } });
    return `Okay. ${action.tag} is marked as gone, and its history is kept.`;
  }
};

// For the morning brief: doses the farmer said were due within a week (or already late), and births expected within two weeks.
function livestockDigest(records, today) {
  const events = (records || []).filter(record => record.collection === "animal_event");
  const latest = new Map();
  for (const event of events.filter(item => item.data.nextDue)) { const key = `${event.data.animal}|${event.data.type}|${event.data.detail || ""}`; if (!latest.has(key) || latest.get(key).data.nextDue < event.data.nextDue) latest.set(key, event); }
  return { due: [...latest.values()].filter(event => event.data.nextDue <= addDays(today, 7)), births: events.filter(event => event.data.type === "breeding" && event.data.expected && event.data.expected >= today && event.data.expected <= addDays(today, 14)) };
}

module.exports = Object.freeze({ handle, templates, confirms, findAnimal, livestockDigest, speciesOf, nextDueOf });
