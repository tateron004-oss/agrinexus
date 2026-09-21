"use strict";

const { clean, titleCase, parseQuantity, unitLabel, plural } = require("./parse.js");
const { startGuided, askConfirm, show } = require("./guided.js");
const { anyDay } = require("./parse.js");
const { addDays, describeDay } = require("../personal/dates.js");

// The farm itself: a profile, the fields and plots on it, expected-versus-actual yield, and a crop calendar. Everything comes from what the
// farmer says; nothing is measured or looked up. Crop timings are typical figures, and Kyro says so and points to the local extension officer.
const METHODS = [{ value: "rain-fed", words: ["rain-fed", "rainfed", "rain fed", "rain"] }, { value: "irrigated", words: ["irrigated", "irrigation", "drip", "sprinkler"] }, { value: "mixed", words: ["mixed", "both"] },
  { value: "organic", words: ["organic"] }, { value: "greenhouse", words: ["greenhouse", "green house", "tunnel"] }, { value: "other", words: ["other", "something else"] }];

const nameKey = value => clean(value).toLowerCase().replace(/\b(?:field|plot|the|my)\b/g, "").replace(/\s+/g, " ").trim();
function pickByName(records, query, get = record => record.data.name) {
  const wanted = nameKey(query);
  if (!wanted) return null;
  const exact = records.filter(record => nameKey(get(record)) === wanted);
  if (exact.length) return { record: exact[0] };
  const loose = records.filter(record => nameKey(get(record)).includes(wanted));
  return loose.length === 1 ? { record: loose[0] } : loose.length > 1 ? { ambiguous: loose } : null;
}

// Typical timings, counted in days from planting. They are common figures for many places, not a promise: the rains, the variety and the
// altitude all move them.
const CROPS = {
  maize: { cycle: 120, stages: [[14, "check for armyworm"], [21, "first weeding"], [35, "top-dress with fertiliser"], [42, "second weeding"], [45, "check for armyworm"]] },
  beans: { cycle: 90, stages: [[14, "first weeding"], [21, "check for pests"], [28, "second weeding"], [35, "check for pests"]] },
  sorghum: { cycle: 120, stages: [[14, "thin the seedlings"], [21, "first weeding"], [42, "second weeding"]] },
  millet: { cycle: 90, stages: [[14, "thin the seedlings"], [21, "first weeding"], [40, "second weeding"]] },
  cassava: { cycle: 300, stages: [[30, "first weeding"], [60, "second weeding"], [90, "third weeding"]] },
  rice: { cycle: 130, stages: [[21, "first weeding"], [30, "top-dress with fertiliser"], [42, "second weeding"]] },
  tomatoes: { cycle: 90, stages: [[14, "first weeding"], [21, "stake the plants and check for blight"], [30, "second weeding"], [35, "check for blight"], [50, "check for blight"]] },
  potatoes: { cycle: 100, stages: [[21, "first weeding"], [30, "earth up the plants"], [30, "check for blight"], [45, "check for blight"]] },
  groundnuts: { cycle: 110, stages: [[21, "first weeding"], [40, "second weeding"]] },
  wheat: { cycle: 120, stages: [[25, "first weeding"], [30, "top-dress with fertiliser"]] }
};
const SYNONYMS = { corn: "maize", bean: "beans", tomato: "tomatoes", potato: "potatoes", "irish potato": "potatoes", "irish potatoes": "potatoes", groundnut: "groundnuts", peanut: "groundnuts", peanuts: "groundnuts", "finger millet": "millet", "pearl millet": "millet", cassavas: "cassava", "paddy rice": "rice" };
const cropKey = value => { const t = clean(value).toLowerCase(); return CROPS[t] ? t : SYNONYMS[t] && CROPS[SYNONYMS[t]] ? SYNONYMS[t] : ""; };

const sizeWords = size => (size ? `${size.value} ${size.unit === "acre" ? (size.value === 1 ? "acre" : "acres") : size.unit === "ha" ? (size.value === 1 ? "hectare" : "hectares") : size.unit}` : "");
function describeField(record, today) {
  const d = record.data;
  return [d.name, [sizeWords(d.size), d.crop, d.planted ? `planted ${describeDay(d.planted, today)}` : ""].filter(Boolean).join(", ")].filter(Boolean).join(" — ");
}

const templates = {
  farm: {
    collection: "farm", intro: "Let's set up your farm profile.",
    questions: [
      { key: "farmName", ask: "What is your farm called?", type: "text", optional: true },
      { key: "location", ask: "Which town or area is your farm near?", type: "text", optional: true },
      { key: "totalArea", ask: "About how big is the whole farm? For example 5 acres.", type: "area", optional: true },
      { key: "method", ask: "How do you mostly farm: rain-fed, irrigated, mixed, organic or greenhouse?", type: "choice", options: METHODS, optional: true },
      { key: "seasons", ask: 'When are your planting seasons? For example "long rains March to May, short rains October to December".', type: "longtext", optional: true },
      { key: "crops", ask: "What do you mainly grow?", type: "text", max: 120, optional: true },
      { key: "livestock", ask: "What animals do you keep?", type: "text", max: 120, optional: true }
    ],
    async finish(ctx, answers) {
      const clear = Object.fromEntries(Object.entries(answers).filter(([, value]) => value !== null && value !== undefined));
      const existing = (await ctx.store.list({ tenantId: ctx.tenantId, userId: ctx.userId, collection: "farm" }))[0];
      if (existing) await ctx.store.update({ tenantId: ctx.tenantId, userId: ctx.userId, record: { ...existing, data: { ...existing.data, ...clear } } });
      else await ctx.store.add({ tenantId: ctx.tenantId, userId: ctx.userId, collection: "farm", data: clear });
      // What Kyro already uses everywhere (weather, greetings, local search) stays in step with what the farmer just said.
      for (const [kind, value] of [["location", clear.location], ["crops", clear.crops], ["livestock", clear.livestock]]) {
        if (value && ctx.memory?.saveProfileFact) { try { await ctx.memory.saveProfileFact({ tenantId: ctx.tenantId, userId: ctx.userId, kind, value, sourceText: "farm profile" }); } catch { /* the profile is saved either way */ } }
      }
      return `Saved your farm profile: ${describeFarm({ ...(existing?.data || {}), ...clear })}. Say "show my farm profile" any time, or "set up my farm" to change it.`;
    }
  },
  field: {
    collection: "field", intro: "Let's add a field.",
    questions: [
      { key: "name", ask: "What do you call this field?", type: "text" },
      { key: "size", ask: "How big is it? For example 2 acres or 1 hectare.", type: "area", optional: true },
      { key: "crop", ask: "What is growing there now?", type: "text", optional: true },
      { key: "planted", ask: "When was it planted? A day like 12 September.", type: "date", pastPreferred: true, optional: true },
      { key: "expectedYield", ask: "How much do you expect to harvest from it in total, like 800 kg? Say skip if you're not sure.", type: "quantity", units: ["kg", "bag", "sack", "crate", "bunch", "piece"], optional: true }
    ],
    async finish(ctx, answers) {
      const clear = Object.fromEntries(Object.entries(answers).filter(([, value]) => value !== null && value !== undefined));
      const fields = await ctx.store.list({ tenantId: ctx.tenantId, userId: ctx.userId, collection: "field" });
      if (fields.some(field => nameKey(field.data.name) === nameKey(clear.name))) return `You already have a field called ${clear.name}. Say "tell me about ${clear.name}" to see it.`;
      if (fields.length >= 60) return "That's the most fields I can keep (sixty). Remove one first.";
      const record = await ctx.store.add({ tenantId: ctx.tenantId, userId: ctx.userId, collection: "field", data: { ...clear, name: titleCase(clear.name) } });
      return `Added ${describeField(record, ctx.today)}.${clear.crop && clear.planted ? ` Say "make a crop calendar for ${record.data.name}" and I'll put the usual jobs on your calendar.` : ""}`;
    }
  }
};
function describeFarm(data) {
  return [data.farmName, data.location ? `near ${data.location}` : "", sizeWords(data.totalArea), data.method, data.seasons ? `seasons: ${data.seasons}` : "", data.crops ? `growing ${data.crops}` : "", data.livestock ? `keeping ${data.livestock}` : ""].filter(Boolean).join(", ") || "nothing yet";
}

const thisYear = today => ({ from: `${today.slice(0, 4)}-01-01`, to: today });
// Harvests the farmer logged in the farm log that name this field, for this year.
function harvestsFor(entries, field, today) {
  const range = thisYear(today); const key = nameKey(field.data.name);
  const mine = (entries || []).filter(entry => entry?.kind === "reading" && entry.metric === "harvest" && entry.day >= range.from && entry.day <= range.to && entry.place && nameKey(entry.place) === key);
  const totals = {};
  for (const entry of mine) totals[entry.unit] = Math.round(((totals[entry.unit] || 0) + entry.value) * 1000) / 1000;
  return totals;
}
function yieldLine(field, entries, today) {
  const actual = harvestsFor(entries, field, today); const expected = field.data.expectedYield;
  const haveActual = Object.entries(actual).map(([unit, value]) => unitLabel(value, unit === "egg" ? "piece" : unit)).join(" and ");
  if (!expected && !haveActual) return `${field.data.name}: no expected yield set and nothing harvested from it yet this year. Log a harvest with "I harvested 200 kg of maize from ${field.data.name}".`;
  if (!expected) return `${field.data.name}: harvested ${haveActual} so far this year. Tell me what you expect ("expect 800 kg from ${field.data.name}") and I'll compare.`;
  const same = actual[expected.unit] || 0;
  const pct = expected.value ? Math.round((same / expected.value) * 100) : 0;
  return `${field.data.name}: expected ${unitLabel(expected.value, expected.unit)}, harvested ${same ? unitLabel(same, expected.unit) : "none yet"}${same ? ` (${pct}% of what you expected)` : ""}${haveActual && !same ? ` — you did log ${haveActual}, in a different unit` : ""}.`;
}

// Parses "Add a field ..." with anything already said filled in.
function readAddField(text) {
  const t = clean(text);
  if (!/^(?:please )?(?:add|create|register|set up|make) (?:a |another |a new |new )?(?:field|plot)\b/i.test(t)) return null;
  const prefill = {};
  const named = /\b(?:called|named)\s+(.+?)(?:\s*[,;]|\s+(?:of|with|that|which|it|about|measuring|size)\b|$)/i.exec(t);
  if (named && clean(named[1]).length <= 40) prefill.name = titleCase(named[1]);
  const size = parseQuantity(t); if (size && (size.unit === "acre" || size.unit === "ha")) prefill.size = { value: size.value, unit: size.unit };
  const crop = /\b(?:of|with|planted with|growing)\s+([a-z ]{3,25}?)(?:\s*[,;.]|\s+(?:planted|on)\b|$)/i.exec(t.replace(/\d[\d.,]*\s*(?:acres?|ha|hectares?)\s*(?:of)?/i, ""));
  if (crop && !/^(?:field|plot)$/i.test(crop[1])) prefill.crop = clean(crop[1]).toLowerCase();
  return prefill;
}

// The crop calendar as concrete dated jobs: [{ day, text }] for the stages still ahead.
function cropCalendar(fieldName, cropName, planted, today) {
  const crop = CROPS[cropKey(cropName)]; if (!crop) return null;
  const jobs = crop.stages.map(([days, job]) => ({ day: addDays(planted, days), text: `${fieldName}: ${job}` }));
  jobs.push({ day: addDays(planted, crop.cycle), text: `${fieldName}: ${cropKey(cropName)} should be ready to harvest (typical)` });
  return { all: jobs, ahead: jobs.filter(job => job.day >= today), harvest: addDays(planted, crop.cycle) };
}

async function handle(ctx) {
  const t = clean(ctx.text).replace(/[.!?]+$/g, ""); const lower = t.toLowerCase().replace(/[.!?]+$/g, "");
  const scope = { tenantId: ctx.tenantId, userId: ctx.userId };
  let m;

  if (/^(?:please )?(?:set up|setup|update|change|edit) my farm(?: profile)?$/.test(lower) || /^(?:please )?(?:create|make) (?:a |my )?farm profile$/.test(lower)) return startGuided(ctx, templates.farm);
  if (/^(?:show|read|what(?:'s| is)) (?:me )?my farm(?: profile)?$/.test(lower)) {
    const record = (await ctx.store.list({ ...scope, collection: "farm" }))[0];
    return record ? `Your farm: ${describeFarm(record.data)}.` : 'You haven\'t set up your farm yet. Say "set up my farm" and I\'ll ask a few questions.';
  }

  const add = readAddField(t);
  if (add) return startGuided(ctx, templates.field, add);

  if (/^(?:show|list|what are) (?:me )?my (?:fields|plots)$/.test(lower) || /^(?:what|which) (?:fields|plots) do i have$/.test(lower)) {
    const fields = await ctx.store.list({ ...scope, collection: "field" });
    if (!fields.length) return 'You have no fields yet. Say "add a field" and I\'ll ask about it.';
    const total = fields.reduce((sum, field) => sum + (field.data.size ? (field.data.size.unit === "ha" ? field.data.size.value * 2.471 : field.data.size.value) : 0), 0);
    return `You have ${plural(fields.length, "field")}${total ? ` (about ${Math.round(total * 10) / 10} acres in all)` : ""}: ${fields.slice().reverse().slice(0, 12).map(field => describeField(field, ctx.today)).join("; ")}.`;
  }

  if ((m = /^(?:tell me about|show|describe) (?:my )?(?:field |plot )?(.+?)(?: field| plot)?$/i.exec(t)) && !/^(?:my |the )?(?:farm|fields|plots|tasks|inventory|animals|livestock|money|buyers)/i.test(m[1])) {
    const fields = await ctx.store.list({ ...scope, collection: "field" });
    const picked = pickByName(fields, m[1]);
    if (picked?.record) {
      const entries = await ctx.farmEntries();
      return `${describeField(picked.record, ctx.today)}. ${yieldLine(picked.record, entries, ctx.today)}`;
    }
    if (picked?.ambiguous) return `Which one: ${picked.ambiguous.map(field => field.data.name).join(" or ")}?`;
  }

  if ((m = /^(?:please )?(?:plant|planted|sow|sowed|sown) (.+?) (?:in|on|at) (?:my )?(?:field |plot )?(.+?)(?: field| plot)?(?: (?:on|today|yesterday|this week|last week).*)?$/i.exec(t))) {
    const fields = await ctx.store.list({ ...scope, collection: "field" });
    const picked = pickByName(fields, m[2].replace(/\s+(?:on|today|yesterday)\b.*$/i, ""));
    if (!picked?.record) return picked?.ambiguous ? `Which one: ${picked.ambiguous.map(field => field.data.name).join(" or ")}?` : `I don't have a field called ${clean(m[2])}. Say "add a field called ${titleCase(m[2])}" first.`;
    const day = anyDay(t.replace(m[1], ""), ctx.today) || ctx.today;
    await ctx.store.update({ ...scope, record: { ...picked.record, data: { ...picked.record.data, crop: clean(m[1]).toLowerCase(), planted: day } } });
    return `Noted: ${clean(m[1]).toLowerCase()} planted in ${picked.record.data.name} ${describeDay(day, ctx.today)}. Say "make a crop calendar for ${picked.record.data.name}" and I'll put the usual jobs on your calendar.`;
  }

  if ((m = /^(?:i )?expect (\d[\d,.]*\s*[a-z]+) (?:of \w+ )?(?:from|in|on) (?:my )?(?:field |plot )?(.+?)(?: field| plot)?$/i.exec(t))) {
    const quantity = parseQuantity(m[1]); const fields = await ctx.store.list({ ...scope, collection: "field" }); const picked = pickByName(fields, m[2]);
    if (quantity && picked?.record) { await ctx.store.update({ ...scope, record: { ...picked.record, data: { ...picked.record.data, expectedYield: { value: quantity.value, unit: quantity.unit } } } }); return `Noted: you expect ${unitLabel(quantity.value, quantity.unit)} from ${picked.record.data.name}.`; }
  }

  if ((m = /^(?:how (?:is|are) (?:my )?(?:field |plot )?(.+?)(?: field| plot)? doing(?: on yield)?|yield (?:for|of|from) (?:my )?(?:field |plot )?(.+?)(?: field| plot)?|(?:what(?:'s| is)) the yield (?:for|of|from) (?:my )?(?:field |plot )?(.+?)(?: field| plot)?)$/i.exec(t))) {
    const name = m[1] || m[2] || m[3]; const fields = await ctx.store.list({ ...scope, collection: "field" }); const picked = pickByName(fields, name);
    if (picked?.record) return yieldLine(picked.record, await ctx.farmEntries(), ctx.today);
  }
  if (/^(?:how (?:is|are) my (?:yields?|harvests?)(?: doing)?|expected (?:versus|vs\.?|against|and) actual(?: yield)?|(?:show|give me) (?:my )?yield(?: report| summary)?)$/.test(lower)) {
    const fields = await ctx.store.list({ ...scope, collection: "field" });
    if (!fields.length) return 'I need your fields first. Say "add a field".';
    const entries = await ctx.farmEntries();
    return `Yield this year — ${fields.slice().reverse().slice(0, 10).map(field => yieldLine(field, entries, ctx.today)).join(" ")}`;
  }

  if ((m = /^(?:please )?(?:make|create|build|plan|set up) (?:me )?(?:a )?crop calendar(?: for (?:my )?(?:field |plot )?(.+?)(?: field| plot)?)?$/i.exec(t))) {
    const fields = await ctx.store.list({ ...scope, collection: "field" });
    const picked = m[1] ? pickByName(fields, m[1]) : (fields.length === 1 ? { record: fields[0] } : null);
    if (!picked?.record) return picked?.ambiguous ? `Which one: ${picked.ambiguous.map(field => field.data.name).join(" or ")}?` : m[1] ? `I don't have a field called ${clean(m[1])}.` : 'Which field? Say "make a crop calendar for North Plot".';
    const field = picked.record.data;
    if (!field.crop || !field.planted) return `I need to know what's planted in ${field.name} and when. Say "plant maize in ${field.name} on 5 October".`;
    const calendar = cropCalendar(field.name, field.crop, field.planted, ctx.today);
    if (!calendar) return `I don't have typical timings for ${field.crop}. You can still schedule jobs yourself: "schedule weeding for ${field.name} on Friday", and "harvest ${field.name} on 20 January".`;
    if (!calendar.ahead.length) return `Every usual job for ${field.crop} planted ${describeDay(field.planted, ctx.today)} has already passed; the harvest was due around ${describeDay(calendar.harvest, ctx.today)}.`;
    if (!ctx.personal?.add) return "I can't reach your calendar right now.";
    const existing = (await ctx.personal.list()).filter(item => item.kind === "event").map(item => `${item.day}|${item.text}`);
    let added = 0;
    for (const job of calendar.ahead) { if (!existing.includes(`${job.day}|${job.text}`)) { await ctx.personal.add({ kind: "event", text: job.text, day: job.day, time: "" }); added += 1; } }
    return `${added ? `I put ${plural(added, "job")} on your calendar` : "Those jobs are already on your calendar"} for ${field.name} (${field.crop}, planted ${describeDay(field.planted, ctx.today)}): ${calendar.ahead.slice(0, 4).map(job => `${describeDay(job.day, ctx.today)} ${job.text.split(": ")[1]}`).join("; ")}${calendar.ahead.length > 4 ? ` and ${calendar.ahead.length - 4} more` : ""}. These are typical timings, not a promise: your rains and variety change them, so check with your local extension officer.`;
  }
  if ((m = /^(?:please )?(?:schedule|book|plan) (.+?) for (?:my )?(?:field |plot )?(.+?)(?: field| plot)? (?:on|for) (.+)$/i.exec(t))) {
    const fields = await ctx.store.list({ ...scope, collection: "field" }); const picked = pickByName(fields, m[2]); const day = anyDay(m[3], ctx.today);
    if (picked?.record && day && ctx.personal?.add) {
      if (day < ctx.today) return "That day has already passed. Tell me a day that is still ahead.";
      await ctx.personal.add({ kind: "event", text: `${picked.record.data.name}: ${clean(m[1]).toLowerCase()}`, day, time: "" });
      return `Scheduled: ${picked.record.data.name} — ${clean(m[1]).toLowerCase()} ${describeDay(day, ctx.today)}. It's on your calendar.`;
    }
  }

  if ((m = /^(?:please )?(?:remove|delete) (?:my )?(?:field|plot) (.+)$/i.exec(t))) {
    const fields = await ctx.store.list({ ...scope, collection: "field" }); const picked = pickByName(fields, m[1]);
    if (picked?.record) return askConfirm(ctx, `Remove the field ${picked.record.data.name}?`, { type: "remove-record", collection: "field", memoryId: picked.record.memoryId, label: picked.record.data.name });
    return picked?.ambiguous ? `Which one: ${picked.ambiguous.map(field => field.data.name).join(" or ")}?` : `I don't have a field called ${clean(m[1])}.`;
  }
  return null;
}

module.exports = Object.freeze({ handle, templates, pickByName, nameKey, cropCalendar, cropKey, CROPS, describeField, yieldLine, harvestsFor });
