"use strict";

const { clean, titleCase, round, num, plural, anyDay, pastDay } = require("./parse.js");
const { addDays } = require("../personal/dates.js");
const { normalizeRecipient } = require("../communications/send-request.js");
const { pickByName, nameKey, cropKey, CROPS, cropCalendar, harvestsFor } = require("./fields.js");
const { findAnimal, nextDueOf } = require("./livestock.js");
const { findWorker } = require("./tasks.js");
const words = require("../i18n/swahili-words.js");
const { parseQuantitySw, unitLabelSw, englishItem, swahiliItem, describeDaySw, dayInEnglish, isDayWord, dayFromSw, splitDueSw, askOf, placeName, ANIMAL_WORD, animalOf, tagEnglish, tagShown, UNIT_WORD, NUMBER } = words;

// The farm's land, animals, workers and pest journal, in Swahili. The same records the English tools keep (same collections and shapes), so a farmer can speak
// one language and read back in the other. Where the English tools ask a string of questions, the Swahili ones read everything from one sentence and ask
// only for what is missing. Kyro records what the farmer says: it never says what a pest or disease is, what to spray, or what an animal needs.
// First draft: a fluent speaker must review every word before it is relied on.
const DISCLAIMER = "Ninahifadhi kumbukumbu tu; siwezi kukuambia ni nini wala cha kutumia. Afisa ugani au duka la dawa za kilimo linaweza.";
const SW = {
  // farm profile
  profileSaved: ({ text }) => `Nimehifadhi wasifu wa shamba lako: ${text}. Sema "onyesha wasifu wa shamba langu" wakati wowote, au "weka wasifu wa shamba langu: …" kubadilisha.`,
  profileNone: "Bado hujaweka wasifu wa shamba lako. Sema \"weka wasifu wa shamba langu: jina Shamba la Amina, karibu na Kisumu, ekari 5, mazao mahindi\".", profileShown: ({ text }) => `Shamba lako: ${text}.`, profileEmpty: "hakuna bado",
  // fields
  askFieldName: "Shamba hilo linaitwaje? Sema \"ongeza shamba linaloitwa Kaskazini, ekari 2, mahindi\".", fieldExists: ({ name }) => `Tayari una shamba linaloitwa ${name}. Sema "nieleze kuhusu shamba ${name}" kuliona.`, fieldsFull: "Hiyo ndiyo idadi kubwa ya mashamba ninayoweza kuhifadhi (sitini). Ondoa moja kwanza.",
  fieldAdded: ({ line, calendar, name }) => `Nimeongeza ${line}.${calendar ? ` Sema "tengeneza kalenda ya mazao ya shamba ${name}" nami nitaweka kazi za kawaida kwenye kalenda yako.` : ""}`,
  noFields: "Huna mashamba bado. Sema \"ongeza shamba linaloitwa Kaskazini, ekari 2\".", fieldList: ({ n, acres, lines }) => `Una mashamba ${n}${acres ? ` (takriban ekari ${acres} zote)` : ""}: ${lines}.`,
  which: ({ names }) => `Yupi: ${names}?`, noField: ({ name }) => `Sina shamba linaloitwa ${name}. Sema "ongeza shamba linaloitwa ${titleCase(name)}" kwanza.`,
  planted: ({ crop, name, when }) => `Nimeandika: umepanda ${crop} kwenye ${name} ${when}. Sema "tengeneza kalenda ya mazao ya shamba ${name}" nami nitaweka kazi za kawaida kwenye kalenda yako.`,
  expected: ({ qty, name }) => `Nimeandika: unatarajia ${qty} kutoka ${name}.`,
  needFieldsFirst: "Nahitaji mashamba yako kwanza. Sema \"ongeza shamba linaloitwa Kaskazini\".", yieldAll: ({ lines }) => `Mavuno mwaka huu — ${lines}`,
  yieldNone: ({ name }) => `${name}: hakuna mavuno yanayotarajiwa yaliyowekwa wala kilichovunwa kutoka humo mwaka huu.`, yieldOnly: ({ name, have }) => `${name}: umevuna ${have} mpaka sasa mwaka huu. Niambie unachotarajia ("natarajia kilo 800 kutoka shamba ${name}") nami nitalinganisha.`,
  yieldLine: ({ name, expected, got, pct, other }) => `${name}: unatarajia ${expected}, ${got ? `umevuna ${got}` : "bado hujavuna"}${pct !== null ? ` (asilimia ${pct} ya ulichotarajia)` : ""}${other ? ` — uliandika ${other}, kwa kipimo tofauti` : ""}.`,
  askWhichField: "Shamba lipi? Sema \"tengeneza kalenda ya mazao ya shamba Kaskazini\".", needPlanted: ({ name }) => `Nahitaji kujua kilichopandwa kwenye ${name} na lini. Sema "nimepanda mahindi shamba ${name} tarehe 5 Oktoba".`,
  noTimings: ({ crop, name }) => `Sina muda wa kawaida wa ${crop}. Bado unaweza kupanga kazi mwenyewe: "panga palizi kwa shamba ${name} Ijumaa".`, allPassed: ({ crop, planted, harvest }) => `Kazi zote za kawaida za ${crop} (kupanda ${planted}) zimeshapita; mavuno yalitarajiwa karibu ${harvest}.`,
  noCalendar: "Siwezi kufikia kalenda yako sasa hivi.",
  calendarDone: ({ added, name, crop, planted, jobs, more }) => `${added ? `Nimeweka kazi ${added} kwenye kalenda yako` : "Kazi hizo tayari ziko kwenye kalenda yako"} za ${name} (${crop}, kupanda ${planted}): ${jobs}${more ? ` na ${more} zaidi` : ""}. Hivi ni vipindi vya kawaida, si ahadi: mvua na aina ya mbegu huvibadilisha, kwa hivyo hakikisha na afisa ugani wa eneo lako.`,
  scheduled: ({ name, job, when }) => `Nimepanga: ${name} — ${job} ${when}. Iko kwenye kalenda yako.`, dayPassed: "Siku hiyo imeshapita. Nipe siku ambayo bado iko mbele.",
  removeFieldAsk: ({ name }) => `Niondoe shamba ${name}?`,
  // animals
  askAnimal: "Ni mnyama gani? Sema \"ongeza ng'ombe anayeitwa Bella, jike\" au \"ongeza kuku 50\".", animalExists: ({ tag }) => `Tayari una mnyama mwenye jina ${tag}.`, animalsFull: "Hiyo ndiyo idadi kubwa ya wanyama ninayoweza kuhifadhi (elfu moja). Ondoa baadhi kwanza.",
  animalAdded: ({ line, tag }) => `Nimeongeza ${line}. Sema "nimemchanja ${tag} dhidi ya …, dozi ijayo baada ya miezi 6" au "nimempima ${tag}: kilo 320" kuhifadhi historia yake.`,
  noAnimals: "Hujaandika wanyama. Sema \"ongeza ng'ombe anayeitwa Bella\".", animalList: ({ n, lines, more }) => `Una rekodi ${n} za wanyama: ${lines}${more ? ` na ${more} zaidi` : ""}.`,
  dueNone: "Hakuna kinachotakiwa katika siku 30 zijazo kulingana na tarehe ulizonipa.", dueList: ({ lines }) => `Vinatakiwa: ${lines}.`, wasDue: ({ when }) => `kilitakiwa ${when}`, dueOn: ({ when }) => `kinatakiwa ${when}`,
  animalInfo: ({ line, weight, vaccine, next, birth, milk, notes }) => [`${line}.`, weight, vaccine, next, birth, milk, notes].filter(Boolean).join(" "),
  milkTotal: ({ tag, total, when }) => `${tag} alitoa lita ${total} ${when}.`, milkNone: ({ tag, when }) => `Sina maziwa yaliyorekodiwa kwa ${tag} ${when}.`,
  care: ({ tag, done, detail, next, when }) => `Nimerekodi: ${tag} ${done}${detail ? ` (${detail})` : ""} leo.${next ? ` Nitakumbuka kuwa inatakiwa tena ${when}.` : ' Niambie inapotakiwa tena ("dozi ijayo baada ya miezi 6") nami nitafuatilia.'} Ninarekodi tu unachoniambia; muulize daktari wa mifugo mnyama wako anahitaji nini.`,
  weightBad: "Hilo halionekani kuwa uzito wa mnyama, kwa hivyo sijahifadhi.", weight: ({ tag, value, change }) => `Nimerekodi: ${tag} ana uzito wa kilo ${value}.${change}`, weightUp: ({ n, since }) => ` Amepanda kilo ${n} tangu ${since}.`, weightDown: ({ n, since }) => ` Ameshuka kilo ${n} tangu ${since}.`, weightSame: ({ since }) => ` Hajabadilika tangu ${since}.`,
  milkBad: "Hayo ni maziwa mengi kuliko mnyama mmoja anavyotoa, kwa hivyo sijahifadhi.", milk: ({ tag, value, when }) => `Nimerekodi: ${tag} ametoa lita ${value} ${when}.`,
  bredFuture: "Siku hiyo bado iko mbele; ninarekodi yaliyotokea tu.", bred: ({ tag, when, sire, species, expected }) => `Nimerekodi: ${tag} amepandishwa ${when}${sire ? ` (${sire})` : ""}.${expected ? ` Kwa kawaida ${species} huzaa karibu ${expected}; hicho ni kipindi cha kawaida, si ahadi.` : ""}`,
  born: ({ tag, when }) => `Nimerekodi: ${tag} amezaa ${when}. Sema "ongeza ndama" (au mtoto wa mbuzi, kondoo…) kuweka rekodi ya mdogo.`, fed: ({ tag, qty, what }) => `Nimerekodi: umemlisha ${tag} ${qty} za ${what}.`,
  goneAsk: ({ tag }) => `Nimweke ${tag} kuwa ameondoka kwenye kundi lako? Historia yake itabaki kwenye rekodi zako.`, goneDone: ({ tag }) => `Sawa. ${tag} amewekwa kuwa ameondoka, na historia yake imehifadhiwa.`, goneMissing: ({ tag }) => `Simwoni ${tag} tena.`,
  removeAnimalAsk: ({ tag }) => `Nimwondoe ${tag} na kuacha kutunza rekodi zake?`,
  // workers and jobs
  askWorker: "Mfanyakazi anaitwa nani? Sema \"ongeza mfanyakazi Juma, +254712345678, kupalilia\".", workerExists: ({ name }) => `Tayari una mfanyakazi anayeitwa ${name}.`, workersFull: "Hiyo ndiyo idadi kubwa ya wafanyakazi ninayoweza kuhifadhi (mia moja). Ondoa mmoja kwanza.",
  workerAdded: ({ name, role, first }) => `Nimemwongeza ${name}${role ? ` (${role})` : ""}. Sema "mpe ${first} kazi ya kupalilia shamba Kaskazini kufikia Ijumaa" kumpa kazi.`,
  noWorkers: "Huna wafanyakazi kwenye orodha yako. Sema \"ongeza mfanyakazi Juma\".", workerList: ({ lines }) => `Wafanyakazi wako: ${lines}.`, removeWorkerAsk: ({ name }) => `Nimwondoe ${name} kwenye wafanyakazi wako?`, noWorker: ({ name }) => `Sina mfanyakazi anayeitwa ${name}.`,
  tasksFull: "Hizo ni kazi nyingi zilizo wazi (mia tatu). Weka alama kuwa baadhi zimekamilika kwanza.", unknownWorker: ({ first }) => ` Bado sina ${first} kwenye wafanyakazi wako; sema "ongeza mfanyakazi ${first}" kuhifadhi taarifa zake.`,
  gave: ({ name, n, list, unknown }) => `Nimempa ${name} kazi ${n} za leo: ${list}.${unknown}`, taskLine: ({ number, title, assignee, status }) => `Kazi ${number}: ${title}${assignee ? ` — ${assignee}` : ""}, ${status}`,
  noOpen: "Hakuna kazi zilizo wazi. Kila kitu kimekamilika.", openList: ({ n, lines, more }) => `Una kazi ${n} zilizo wazi: ${lines}${more ? ` na ${more} zaidi` : ""}.`, overdueNone: "Hakuna kilichochelewa.", overdueList: ({ n, lines }) => `Kazi ${n} zimechelewa: ${lines}.`,
  workerJobs: ({ first, n, lines }) => `${first} ana kazi ${n}: ${lines}.`, workerNone: ({ first }) => `${first} hana kazi iliyo wazi.`, doneNone: "Hakuna kazi iliyowekwa kuwa imekamilika bado.", doneList: ({ lines }) => `Zilizokamilika: ${lines}.`,
  noTask: ({ n }) => `Siwezi kupata kazi ${n}.`, alreadyDone: ({ n }) => `Kazi ${n} tayari imekamilika.`, taskDone: ({ title, assignee, left }) => `Imekamilika: ${title}${assignee ? ` (${assignee})` : ""}. ${left ? `Kazi ${left} bado ziko wazi.` : "Hiyo ilikuwa kazi ya mwisho iliyo wazi."}`,
  whichJob: ({ lines }) => `Kazi ipi: ${lines}?`, removeTaskAsk: ({ n, title }) => `Niondoe kazi ${n} (${title})?`, noDue: "hakuna tarehe", dueOn: ({ when }) => `inatakiwa ${when}`, doneOn: ({ when }) => `imekamilika${when ? ` ${when}` : ""}`,
  // pest and disease journal
  journalFull: "Kumbukumbu zako zimejaa (maingizo elfu mbili). Ondoa baadhi kwanza.", logged: ({ n, text, where }) => `Nimeandika #${n}: "${text}"${where}. ${DISCLAIMER} Sema "sasisha tatizo ${n}: nilinyunyizia …" kuandika ulichofanya, au "tatizo ${n} limeisha".`,
  noProblem: ({ n }) => `Siwezi kupata tatizo ${n} kwenye kumbukumbu zako.`, problemAdded: ({ n, text }) => `Nimeongeza kwenye tatizo ${n}: ${text}. ${DISCLAIMER}`,
  problemNoted: ({ n, word, resolved }) => `Nimeandika: tatizo ${n} ${word}.${resolved ? " Nimeliweka kuwa limetatuliwa." : " Nimeliacha wazi."}`,
  journalEmpty: "Kumbukumbu zako za wadudu na magonjwa ni tupu. Sema \"andika tatizo: viwavi jeshi kwenye mahindi\" ukiona.", journalSummary: ({ open, closed, lines }) => `Matatizo ${open} wazi, ${closed} yaliyotatuliwa. Ya hivi karibuni: ${lines}.`,
  fieldProblems: ({ name, lines }) => `Kwenye ${name}: ${lines}.`, fieldNoProblems: ({ name }) => `Hakuna kitu kwenye kumbukumbu zako kuhusu ${name}.`,
  didAbout: ({ n, when, text, actions, outcome }) => `#${n} (${when}): ${text}. ${actions ? `Uliandika: ${actions}.` : "Hukuandika hatua uliyochukua."}${outcome ? ` Matokeo: ${outcome}.` : ""}`,
  // confirmations
  removedField: ({ name }) => `Sawa. Nimeondoa ${name}.`, goneItem: ({ name }) => `Simwoni ${name} tena.`, kept: "Sawa, nimeacha kama ilivyo.", sayYes: "Sema ndiyo kuendelea, au hapana kuacha."
};

const sizeShown = size => (size ? `${size.unit === "acre" ? "ekari" : "hekta"} ${size.value}` : "");
const describeFieldSw = (record, today) => { const d = record.data; return [d.name, [sizeShown(d.size), d.crop ? swahiliItem(d.crop) : "", d.planted ? `kupanda ${describeDaySw(d.planted, today)}` : ""].filter(Boolean).join(", ")].filter(Boolean).join(" — "); };
const askConfirmSw = async (ctx, sentence, action) => {
  await ctx.store.setSession({ tenantId: ctx.tenantId, userId: ctx.userId, session: { collection: "_confirm", answers: {}, asking: "confirm", action: { ...action, language: "sw" }, expiresAt: new Date(Date.now() + 10 * 60000).toISOString() } });
  return `${sentence} ${SW.sayYes}`;
};
const ageSw = (born, today) => { if (!born) return ""; const days = Math.round((Date.parse(today) - Date.parse(born)) / 86400000); if (days < 0) return ""; if (days < 60) return `siku ${days}`; if (days < 730) return `miezi ${Math.floor(days / 30.4)}`; return `miaka ${Math.floor(days / 365.25)}`; };
const SEX = { female: "jike", male: "dume" };
const describeAnimalSw = (record, today) => { const d = record.data; const species = animalNameOfSpecies(d.species); return `${tagShown(d.tag)}${d.count ? ` (kuku ${d.count})` : ""} — ${[species, d.breed, SEX[d.sex] || d.sex, ageSw(d.born, today)].filter(Boolean).join(", ")}${d.status && d.status !== "active" ? ` [${d.status === "gone" ? "ameondoka" : d.status}]` : ""}`; };
const animalNameOfSpecies = species => (words.ANIMALS.find(entry => entry[2] === species) || [])[3] || species;
// The farmer's word for an animal ("Bella", "ng'ombe 12", "kuku kundi 50") -> the animal record, found the way the English tools find it.
const findAnimalSw = (animals, query) => findAnimal(animals, tagEnglish(String(query).replace(/^(?:mnyama|ng'ombe wangu|wangu)\s+/i, "")));
const listEnglish = text => clean(text).split(/\s*(?:,|na|pamoja na)\s+/i).map(part => englishItem(part)).filter(Boolean).join(", ");
const listSwahili = text => String(text || "").split(/\s*,\s*/).map(part => swahiliItem(part)).join(", ");
const CARE = { vaccination: "amechanjwa", deworming: "amepewa dawa ya minyoo", dipping: "ameogeshwa", treatment: "ametibiwa" };
const EVENT_SW = { vaccination: "chanjo", deworming: "dawa ya minyoo", dipping: "kuogesha", treatment: "matibabu", weight: "kupimwa", milk: "maziwa", breeding: "kupandishwa", birth: "kuzaa", feeding: "kulisha", note: "kumbukumbu" };
const TASK_CROP_JOBS = { "check for armyworm": "kagua viwavi jeshi", "first weeding": "palilia mara ya kwanza", "second weeding": "palilia mara ya pili", "third weeding": "palilia mara ya tatu", "top-dress with fertiliser": "weka mbolea ya kukuzia", "check for pests": "kagua wadudu", "thin the seedlings": "punguza miche", "stake the plants and check for blight": "tegemeza mimea na kagua magonjwa ya ukungu", "check for blight": "kagua magonjwa ya ukungu", "earth up the plants": "fukia mimea kwa udongo" };
const SIGNS = /(?:viwavi|funza|wadudu|mdudu|ugonjwa|magonjwa|ukungu|kutu|kunyauka|kuoza|mchwa|panzi|nzige|vidukari|kupe|kuhara|kuvimba|kilema|kikohozi|madoa|majani (?:yamekauka|yamenyauka|yameliwa|yana madoa|yamekunjamana|manjano)|mabuu|mbawakawa|utitiri)/i;
const FARM_CONTEXT = /(?:mahindi|maharage|mihogo|muhogo|mchele|mpunga|ngano|mtama|ulezi|nyanya|viazi|kabichi|sukuma|vitunguu|ndizi|kahawa|chai|karanga|mboga|mazao|mimea|miche|majani|shina|matunda|shamba|mashamba|ng'ombe|mbuzi|kondoo|nguruwe|kuku|sungura|mifugo|kundi|ghala)/i;

async function handle(ctx) {
  const t = clean(ctx.text).replace(/[.!?]+$/g, ""); const lower = t.toLowerCase();
  if (!/(?:shamba|mashamba|wasifu|ndama|mwanakondoo|kifaranga|vifaranga|ng'?ombe|mbuzi|kondoo|nguruwe|kuku|sungura|bata|punda|ngamia|mifugo|mfanyakazi|wafanyakazi|kibarua|kazi|nimeona|tatizo|matatizo|nimemchanja|nimechanja|nimemtibu|nimetibu|nimemwogesha|nimeogesha|nimempima|nimepima|nimemlisha|amezaa|amekufa|amepandishwa|ametoa|ana uzito|natarajia|nimepanda|anatakiwa kufanya|nilifanya|mifugo yangu|panga |ratibu|mpe |wape |mkabidhi|kalenda ya mazao|wanyama|mnyama|amemaliza|imekamilika|mavuno|nieleze|nimempa|nimewapa)/i.test(lower)) return null;
  const scope = { tenantId: ctx.tenantId, userId: ctx.userId };
  const list = collection => ctx.store.list({ ...scope, collection });
  let m;

  // =========================== the farm profile ===========================
  if ((m = /^(?:tafadhali\s+)?(?:weka|badilisha|sasisha)\s+wasifu wa shamba langu\s*[:,-]\s*(.+)$/i.exec(t))) {
    const data = {};
    for (const part of m[1].split(/\s*,\s*/).map(clean).filter(Boolean)) {
      let p;
      if ((p = /^(?:jina|jina la shamba)\s+(.+)$/i.exec(part))) data.farmName = placeName(p[1]);
      else if ((p = /^(?:karibu na|eneo|mahali)\s+(.+)$/i.exec(part))) data.location = placeName(p[1]);
      else if ((p = /^mazao\s+(.+)$/i.exec(part))) data.crops = listEnglish(p[1]);
      else if ((p = /^mifugo\s+(.+)$/i.exec(part))) data.livestock = listEnglish(p[1]);
      else if ((p = /^misimu\s+(.+)$/i.exec(part))) data.seasons = clean(p[1]).slice(0, 300);
      else if (/^(?:mvua|kutegemea mvua)$/i.test(part)) data.method = "rain-fed"; else if (/umwagiliaji/i.test(part)) data.method = "irrigated"; else if (/mchanganyiko/i.test(part)) data.method = "mixed"; else if (/(?:asilia|kikaboni)/i.test(part)) data.method = "organic"; else if (/(?:nyumba ya kijani|greenhouse)/i.test(part)) data.method = "greenhouse";
      else { const size = parseQuantitySw(part); if (size && (size.unit === "acre" || size.unit === "ha")) data.totalArea = { value: size.value, unit: size.unit }; else if (!data.farmName && part.length <= 60 && !/\d/.test(part)) data.farmName = placeName(part); }
    }
    if (!Object.keys(data).length) return SW.profileNone;
    const existing = (await list("farm"))[0];
    if (existing) await ctx.store.update({ ...scope, record: { ...existing, data: { ...existing.data, ...data } } }); else await ctx.store.add({ ...scope, collection: "farm", data });
    for (const [kind, value] of [["location", data.location], ["crops", data.crops], ["livestock", data.livestock]]) if (value && ctx.memory?.saveProfileFact) { try { await ctx.memory.saveProfileFact({ ...scope, kind, value, sourceText: "farm profile" }); } catch { /* saved either way */ } }
    return SW.profileSaved({ text: describeFarmSw({ ...(existing?.data || {}), ...data }) });
  }
  if (/^(?:onyesha|nisomee|nionyeshe)\s+wasifu wa shamba langu$/.test(lower)) {
    const record = (await list("farm"))[0];
    return record ? SW.profileShown({ text: describeFarmSw(record.data) }) : SW.profileNone;
  }

  // =========================== fields ===========================
  if ((m = /^(?:tafadhali\s+)?(?:ongeza|sajili|weka)\s+shamba(?: jipya)?(?:\s+(?:linaloitwa|liitwalo|lenye jina|la))?\s*(.*)$/i.exec(t)) && !/\b(?:kwenye|katika)\s+(?:orodha|kalenda)\b/i.test(t)) {
    const parts = m[1].split(/\s*,\s*/).map(clean).filter(Boolean); const data = {};
    const first = parts.shift() || ""; const cut = new RegExp(`\\s+(?:${UNIT_WORD})\\s+\\d|\\s+\\d[\\d.,]*\\s*(?:ekari|hekta)\\b|\\s+kilipandwa\\b|\\s+lilipandwa\\b`, "i").exec(first);
    const name = cut ? first.slice(0, cut.index) : first; if (cut) parts.unshift(first.slice(cut.index));
    if (name && name.length <= 40 && !/\d/.test(name)) data.name = placeName(name);
    for (const part of parts) {
      let p;
      if ((p = /^(?:kilipandwa|lilipandwa|kimepandwa|tarehe ya kupanda|kupanda)\s+(.+)$/i.exec(part))) { const english = isDayWord(p[1]) ? dayInEnglish(p[1]) : ""; const day = english ? pastDay(english, ctx.today) : null; if (day && day <= ctx.today) data.planted = day; }
      else if ((p = /^(?:natarajia|ninatarajia)\s+(.+)$/i.exec(part))) { const q = parseQuantitySw(p[1]); if (q) data.expectedYield = { value: q.value, unit: q.unit }; }
      else { const size = parseQuantitySw(part); if (size && (size.unit === "acre" || size.unit === "ha")) data.size = { value: size.value, unit: size.unit }; else if (!data.crop && part.length <= 25 && !/\d/.test(part)) data.crop = englishItem(part.replace(/^(?:mazao|lina|limepandwa)\s+/i, "")); }
    }
    if (!data.name) return SW.askFieldName;
    const fields = await list("field");
    if (fields.some(field => nameKey(field.data.name) === nameKey(data.name))) return SW.fieldExists({ name: data.name });
    if (fields.length >= 60) return SW.fieldsFull;
    const record = await ctx.store.add({ ...scope, collection: "field", data });
    return SW.fieldAdded({ line: describeFieldSw(record, ctx.today), calendar: Boolean(data.crop && data.planted), name: data.name });
  }
  if (/^(?:onyesha|orodhesha|nionyeshe)\s+mashamba yangu$/.test(lower) || /^nina mashamba gani$/.test(lower)) {
    const fields = await list("field");
    if (!fields.length) return SW.noFields;
    const total = fields.reduce((sum, field) => sum + (field.data.size ? (field.data.size.unit === "ha" ? field.data.size.value * 2.471 : field.data.size.value) : 0), 0);
    return SW.fieldList({ n: fields.length, acres: total ? Math.round(total * 10) / 10 : 0, lines: fields.slice().reverse().slice(0, 12).map(field => describeFieldSw(field, ctx.today)).join("; ") });
  }
  if ((m = /^(?:nieleze kuhusu|onyesha|elezea)\s+(?:shamba\s+(?:la\s+)?)(.+)$/i.exec(t))) {
    const picked = pickByName(await list("field"), m[1]);
    if (picked?.record) return `${describeFieldSw(picked.record, ctx.today)}. ${yieldLineSw(picked.record, await ctx.farmEntries(), ctx.today)}`;
    if (picked?.ambiguous) return SW.which({ names: picked.ambiguous.map(field => field.data.name).join(" au ") });
  }
  if ((m = /^(?:nimepanda|tumepanda|nimepandikiza)\s+(.+?)\s+(?:kwenye|katika|kwa|shambani)\s+(?:shamba\s+)?(?:la\s+)?(.+?)(?:\s+(?:tarehe|siku ya)\s+(.+)|\s+(leo|jana))?$/i.exec(t))) {
    const fields = await list("field"); const picked = pickByName(fields, m[2]);
    if (!picked?.record) return picked?.ambiguous ? SW.which({ names: picked.ambiguous.map(field => field.data.name).join(" au ") }) : (fields.length ? SW.noField({ name: clean(m[2]) }) : null);
    const said = m[3] || m[4]; const english = said && isDayWord(said) ? dayInEnglish(said) : ""; const day = (english ? pastDay(english, ctx.today) : null) || ctx.today;
    await ctx.store.update({ ...scope, record: { ...picked.record, data: { ...picked.record.data, crop: englishItem(m[1]), planted: day } } });
    return SW.planted({ crop: clean(m[1]).toLowerCase(), name: picked.record.data.name, when: describeDaySw(day, ctx.today) });
  }
  if ((m = /^(?:natarajia|ninatarajia)\s+(.+?)\s+(?:kutoka|kwenye|katika)\s+(?:shamba\s+)?(?:la\s+)?(.+)$/i.exec(t))) {
    const quantity = parseQuantitySw(m[1]); const picked = pickByName(await list("field"), m[2]);
    if (quantity && picked?.record) { await ctx.store.update({ ...scope, record: { ...picked.record, data: { ...picked.record.data, expectedYield: { value: quantity.value, unit: quantity.unit } } } }); return SW.expected({ qty: unitLabelSw(quantity.value, quantity.unit), name: picked.record.data.name }); }
  }
  if ((m = /^(?:mavuno ya|mavuno kutoka)\s+(?:shamba\s+)?(?:la\s+)?(.+)$/i.exec(t)) || (m = /^shamba\s+(?:la\s+)?(.+?)\s+linaendeleaje(?:\s+kwa mavuno)?$/i.exec(t))) {
    const picked = pickByName(await list("field"), m[1]);
    if (picked?.record) return yieldLineSw(picked.record, await ctx.farmEntries(), ctx.today);
  }
  if (/^(?:mavuno yangu yanaendeleaje|onyesha mavuno yangu|mavuno yaliyotarajiwa na halisi)$/.test(lower)) {
    const fields = await list("field");
    if (!fields.length) return SW.needFieldsFirst;
    const entries = await ctx.farmEntries();
    return SW.yieldAll({ lines: fields.slice().reverse().slice(0, 10).map(field => yieldLineSw(field, entries, ctx.today)).join(" ") });
  }
  if ((m = /^(?:tafadhali\s+)?(?:tengeneza|andaa|panga)\s+kalenda ya mazao(?:\s+(?:ya|kwa)\s+(?:shamba\s+)?(?:la\s+)?(.+))?$/i.exec(t))) {
    const fields = await list("field");
    const picked = m[1] ? pickByName(fields, m[1]) : (fields.length === 1 ? { record: fields[0] } : null);
    if (!picked?.record) return picked?.ambiguous ? SW.which({ names: picked.ambiguous.map(field => field.data.name).join(" au ") }) : m[1] ? SW.noField({ name: clean(m[1]) }) : SW.askWhichField;
    const field = picked.record.data;
    if (!field.crop || !field.planted) return SW.needPlanted({ name: field.name });
    const calendar = cropCalendar(field.name, field.crop, field.planted, ctx.today);
    if (!calendar) return SW.noTimings({ crop: swahiliItem(field.crop), name: field.name });
    if (!calendar.ahead.length) return SW.allPassed({ crop: swahiliItem(field.crop), planted: describeDaySw(field.planted, ctx.today), harvest: describeDaySw(calendar.harvest, ctx.today) });
    if (!ctx.personal?.add) return SW.noCalendar;
    const jobText = job => { const english = job.text.split(": ")[1] || ""; const ready = /^(\w[\w ]*) should be ready to harvest \(typical\)$/.exec(english); return ready ? `${swahiliItem(ready[1])} zinatarajiwa kuwa tayari kuvunwa (kwa kawaida)` : TASK_CROP_JOBS[english] || english; };
    const existing = (await ctx.personal.list()).filter(item => item.kind === "event").map(item => `${item.day}|${item.text}`);
    let added = 0;
    for (const job of calendar.ahead) { const text = `${field.name}: ${jobText(job)}`; if (!existing.includes(`${job.day}|${text}`)) { await ctx.personal.add({ kind: "event", text, day: job.day, time: "" }); added += 1; } }
    return SW.calendarDone({ added, name: field.name, crop: swahiliItem(field.crop), planted: describeDaySw(field.planted, ctx.today), jobs: calendar.ahead.slice(0, 4).map(job => `${describeDaySw(job.day, ctx.today)} ${jobText(job)}`).join("; "), more: Math.max(0, calendar.ahead.length - 4) });
  }
  if ((m = /^(?:tafadhali\s+)?(?:panga|ratibu)\s+(.+?)\s+(?:kwa|katika|kwenye)\s+shamba\s+(?:la\s+)?(.+)$/i.exec(t))) {
    const split = splitDueSw(m[2], ctx.today); const fields = await list("field"); const picked = pickByName(fields, split.title);
    if (picked?.record && split.due && ctx.personal?.add) {
      if (split.due < ctx.today) return SW.dayPassed;
      await ctx.personal.add({ kind: "event", text: `${picked.record.data.name}: ${clean(m[1]).toLowerCase()}`, day: split.due, time: "" });
      return SW.scheduled({ name: picked.record.data.name, job: clean(m[1]).toLowerCase(), when: describeDaySw(split.due, ctx.today) });
    }
  }
  if ((m = /^(?:tafadhali\s+)?(?:ondoa|futa)\s+shamba\s+(?:la\s+)?(.+)$/i.exec(t))) {
    const picked = pickByName(await list("field"), m[1]);
    if (picked?.record) return askConfirmSw(ctx, SW.removeFieldAsk({ name: picked.record.data.name }), { type: "remove-record-sw", memoryId: picked.record.memoryId, label: picked.record.data.name });
    return picked?.ambiguous ? SW.which({ names: picked.ambiguous.map(field => field.data.name).join(" au ") }) : SW.noField({ name: clean(m[1]) });
  }

  // =========================== animals ===========================
  if ((m = new RegExp(`^(?:tafadhali\\s+)?(?:ongeza|sajili|weka)\\s+(?:(?:kundi la|mnyama)\\s+)?(?:(\\d{1,5})\\s+)?(${ANIMAL_WORD})(?:\\s+(?:anayeitwa|aitwaye|namba|nambari|#))?\\s*(.*)$`, "i").exec(t)) && !/\b(?:kwenye|katika)\s+(?:orodha|kalenda|ghala)\b/i.test(t)) {
    const kind = animalOf(m[2]); const count = m[1] ? Number(m[1]) : 0; const parts = clean(m[3]).split(/\s*,\s*/).filter(Boolean); const head = parts.shift() || "";
    const data = { species: kind[2], status: "active" };
    if (count > 1) { data.tag = `${kind[1]} flock ${count}`; data.count = count; }
    else if (head && head.length <= 30) data.tag = /^\d+$/.test(head) ? `${kind[1]} ${head}` : titleCase(head).toLowerCase();
    for (const part of parts) {
      let p;
      if ((p = /^aina ya\s+(.+)$/i.exec(part))) data.breed = titleCase(p[1]);
      else if (/^(?:jike|kike)$/i.test(part)) data.sex = "female"; else if (/^(?:dume|kiume)$/i.test(part)) data.sex = "male";
      else if ((p = /^(?:alizaliwa|amezaliwa|kuzaliwa)\s+(.+)$/i.exec(part))) { const english = isDayWord(p[1]) ? dayInEnglish(p[1]) : /^\d{4}$/.test(p[1]) ? `1 january ${p[1]}` : ""; const day = english ? pastDay(english, ctx.today) : null; if (day && day <= ctx.today) data.born = day; }
      else if (part.length <= 100) data.notes = part;
    }
    if (!data.tag) return SW.askAnimal;
    const animals = await list("animal");
    if (animals.some(animal => animal.data.tag === data.tag && animal.data.status !== "gone")) return SW.animalExists({ tag: tagShown(data.tag) });
    if (animals.length >= 1000) return SW.animalsFull;
    const record = await ctx.store.add({ ...scope, collection: "animal", data });
    return SW.animalAdded({ line: describeAnimalSw(record, ctx.today), tag: tagShown(data.tag) });
  }
  if (/^(?:onyesha|orodhesha|nionyeshe)\s+(?:mifugo yangu|wanyama wangu|ng'?ombe wangu|mbuzi wangu|kondoo wangu|nguruwe wangu|kuku wangu)$/.test(lower) || /^nina wanyama gani$/.test(lower)) {
    const animals = (await list("animal")).filter(animal => animal.data.status !== "gone");
    if (!animals.length) return SW.noAnimals;
    return SW.animalList({ n: animals.length, lines: animals.slice().reverse().slice(0, 10).map(animal => describeAnimalSw(animal, ctx.today)).join("; "), more: Math.max(0, animals.length - 10) });
  }
  if (/^(?:chanjo|matibabu) zipi (?:zinatakiwa|zinakaribia|zimechelewa) kwa mifugo yangu$/.test(lower) || /^(?:mifugo yangu inahitaji nini|nini kinatakiwa kwa mifugo yangu)$/.test(lower)) {
    const events = (await list("animal_event")).filter(event => event.data.nextDue && event.data.nextDue <= addDays(ctx.today, 30));
    const latest = new Map(); for (const event of events) { const key = `${event.data.animal}|${event.data.type}|${event.data.detail || ""}`; if (!latest.has(key) || latest.get(key).data.nextDue < event.data.nextDue) latest.set(key, event); }
    const due = [...latest.values()].sort((a, b) => a.data.nextDue.localeCompare(b.data.nextDue));
    return due.length ? SW.dueList({ lines: due.slice(0, 10).map(event => `${tagShown(event.data.animal)} ${event.data.detail ? `${event.data.detail} ` : ""}${EVENT_SW[event.data.type] || event.data.type} ${event.data.nextDue < ctx.today ? SW.wasDue({ when: describeDaySw(event.data.nextDue, ctx.today) }) : SW.dueOn({ when: describeDaySw(event.data.nextDue, ctx.today) })}`).join("; ") }) : SW.dueNone;
  }
  if ((m = /^(?:nieleze kuhusu|onyesha|elezea)\s+(.+)$/i.exec(t)) && !/^shamba\b/i.test(m[1])) {
    const animals = await list("animal"); const animal = findAnimalSw(animals, m[1]);
    if (animal) {
      const events = (await list("animal_event")).filter(event => event.data.animal === animal.data.tag); const last = type => events.find(event => event.data.type === type);
      const weight = last("weight"); const vaccine = last("vaccination"); const breeding = events.find(event => event.data.type === "breeding" && event.data.expected && event.data.expected >= ctx.today);
      const milk = events.filter(event => event.data.type === "milk" && event.data.day >= addDays(ctx.today, -6)).reduce((sum, event) => sum + event.data.value, 0);
      const upcoming = events.filter(event => event.data.nextDue && event.data.nextDue >= ctx.today).sort((a, b) => a.data.nextDue.localeCompare(b.data.nextDue))[0];
      return SW.animalInfo({ line: describeAnimalSw(animal, ctx.today), weight: weight ? `Uzito wa mwisho kilo ${weight.data.value} (${describeDaySw(weight.data.day, ctx.today)}).` : "", vaccine: vaccine ? `Chanjo ya mwisho ${vaccine.data.detail ? `${vaccine.data.detail} ` : ""}${describeDaySw(vaccine.data.day, ctx.today)}.` : "",
        next: upcoming ? `Inayofuata: ${upcoming.data.detail ? `${upcoming.data.detail} ` : ""}${EVENT_SW[upcoming.data.type]} ${describeDaySw(upcoming.data.nextDue, ctx.today)}.` : "", birth: breeding ? `Anatarajiwa kuzaa karibu ${describeDaySw(breeding.data.expected, ctx.today)} (kipindi cha kawaida, si ahadi).` : "",
        milk: milk ? `Maziwa ya siku 7 zilizopita: lita ${Math.round(milk * 10) / 10}.` : "", notes: animal.data.notes ? `Kumbukumbu: ${animal.data.notes}` : "" });
    }
  }
  if ((m = /^(.+?) ametoa maziwa kiasi gani(?: (leo|jana|wiki hii|mwezi huu))?$/i.exec(t))) {
    const animal = findAnimalSw(await list("animal"), m[1]);
    if (animal) {
      const when = m[2] || "leo"; const from = /mwezi/.test(when) ? `${ctx.today.slice(0, 7)}-01` : /wiki/.test(when) ? addDays(ctx.today, -6) : /jana/.test(when) ? addDays(ctx.today, -1) : ctx.today; const to = /jana/.test(when) ? from : ctx.today;
      const total = (await list("animal_event")).filter(event => event.data.animal === animal.data.tag && event.data.type === "milk" && event.data.day >= from && event.data.day <= to).reduce((sum, event) => sum + event.data.value, 0);
      return total ? SW.milkTotal({ tag: tagShown(animal.data.tag), total: Math.round(total * 10) / 10, when }) : SW.milkNone({ tag: tagShown(animal.data.tag), when });
    }
  }
  // care: vaccinated / dewormed / dipped / treated
  let care = null;
  if ((m = /^(?:nimemchanja|nimechanja|tumemchanja)\s+(.+?)(?:\s+(?:dhidi ya|kwa)\s+(.+?))?(?:[,;]?\s*(?:dozi ijayo|chanjo ijayo|inayofuata|rudia)\s+(.+))?$/i.exec(t))) care = { type: "vaccination", who: m[1], detail: m[2], next: m[3] };
  else if ((m = /^(?:nimemtibu|nimetibu|tumemtibu)\s+(.+?)(?:\s+(?:dhidi ya|kwa)\s+(.+?))?(?:[,;]?\s*(?:dozi ijayo|matibabu yajayo|inayofuata|rudia)\s+(.+))?$/i.exec(t))) care = { type: "treatment", who: m[1], detail: m[2], next: m[3] };
  else if ((m = /^(?:nimemwogesha|nimeogesha|tumemwogesha)\s+(.+?)(?:[,;]?\s*(?:inayofuata|rudia|kuogesha kwingine)\s+(.+))?$/i.exec(t))) care = { type: "dipping", who: m[1], next: m[2] };
  else if ((m = /^(?:nimempa|nimewapa|nimemtolea)\s+(.+?)\s+dawa ya minyoo(?:[,;]?\s*(?:inayofuata|rudia)\s+(.+))?$/i.exec(t))) care = { type: "deworming", who: m[1], next: m[2] };
  if (care) {
    const animals = await list("animal"); const animal = findAnimalSw(animals, care.who);
    if (animal) {
      let nextDue = null;
      if (care.next) { const english = isDayWord(care.next) ? dayInEnglish(care.next) : ""; nextDue = (english && (nextDueOf(english, ctx.today) || anyDay(english, ctx.today))) || null; }
      const detail = clean(care.detail || "").toLowerCase().slice(0, 60);
      await ctx.store.add({ ...scope, collection: "animal_event", data: { animal: animal.data.tag, type: care.type, day: ctx.today, detail, nextDue } });
      return SW.care({ tag: tagShown(animal.data.tag), done: CARE[care.type], detail, next: nextDue, when: nextDue ? describeDaySw(nextDue, ctx.today) : "" });
    }
  }
  if ((m = /^(?:nimempima|nimepima|tumempima)\s+(.+?)\s*[:,]?\s+(?:kilo\s+)?(\d+(?:\.\d+)?)(?:\s*kilo)?$/i.exec(t)) || (m = /^(.+?) ana uzito wa kilo (\d+(?:\.\d+)?)$/i.exec(t))) {
    const animal = findAnimalSw(await list("animal"), m[1]);
    if (animal) {
      const value = num(m[2]); if (!(value > 0 && value <= 2000)) return SW.weightBad;
      const before = (await list("animal_event")).find(event => event.data.animal === animal.data.tag && event.data.type === "weight");
      await ctx.store.add({ ...scope, collection: "animal_event", data: { animal: animal.data.tag, type: "weight", day: ctx.today, value } });
      const since = before ? (before.data.day === ctx.today ? "mapema leo" : describeDaySw(before.data.day, ctx.today)) : "";
      const change = !before ? "" : value === before.data.value ? SW.weightSame({ since }) : value > before.data.value ? SW.weightUp({ n: Math.round(Math.abs(value - before.data.value) * 10) / 10, since }) : SW.weightDown({ n: Math.round(Math.abs(value - before.data.value) * 10) / 10, since });
      return SW.weight({ tag: tagShown(animal.data.tag), value, change });
    }
  }
  if ((m = /^(.+?) (?:ametoa|amepata) lita (\d+(?:\.\d+)?)(?: za maziwa)?(?: (leo|jana))?$/i.exec(t))) {
    const animal = findAnimalSw(await list("animal"), m[1]);
    if (animal) {
      const value = num(m[2]); if (!(value > 0 && value <= 100)) return SW.milkBad;
      const day = /jana/i.test(m[3] || "") ? addDays(ctx.today, -1) : ctx.today;
      await ctx.store.add({ ...scope, collection: "animal_event", data: { animal: animal.data.tag, type: "milk", day, value } });
      return SW.milk({ tag: tagShown(animal.data.tag), value, when: day === ctx.today ? "leo" : "jana" });
    }
  }
  if ((m = /^(.+?) amepandishwa(?: (?:na|kwa) (.+?))?(?: (?:tarehe|siku ya) (.+)| (leo|jana))?$/i.exec(t))) {
    const animal = findAnimalSw(await list("animal"), m[1]);
    if (animal) {
      const said = m[3] || m[4]; const english = said && isDayWord(said) ? dayInEnglish(said) : ""; const day = (english ? pastDay(english, ctx.today) : null) || ctx.today;
      if (day > ctx.today) return SW.bredFuture;
      const gestation = { cattle: 283, goat: 150, sheep: 147, pig: 114, rabbit: 31 }[animal.data.species]; const expected = gestation ? addDays(day, gestation) : null;
      await ctx.store.add({ ...scope, collection: "animal_event", data: { animal: animal.data.tag, type: "breeding", day, sire: clean(m[2] || "").slice(0, 40), expected } });
      return SW.bred({ tag: tagShown(animal.data.tag), when: describeDaySw(day, ctx.today), sire: clean(m[2] || ""), species: animalNameOfSpecies(animal.data.species), expected: expected ? describeDaySw(expected, ctx.today) : "" });
    }
  }
  if ((m = /^(.+?) amezaa(?: (?:tarehe|siku ya) (.+)| (leo|jana))?$/i.exec(t))) {
    const animal = findAnimalSw(await list("animal"), m[1]);
    if (animal) { const said = m[2] || m[3]; const english = said && isDayWord(said) ? dayInEnglish(said) : ""; const day = (english ? pastDay(english, ctx.today) : null) || ctx.today; await ctx.store.add({ ...scope, collection: "animal_event", data: { animal: animal.data.tag, type: "birth", day } }); return SW.born({ tag: tagShown(animal.data.tag), when: describeDaySw(day, ctx.today) }); }
  }
  if ((m = /^(?:nimemlisha|tumemlisha)\s+(.+?)\s+(?:kilo|lita)\s+(\d+(?:\.\d+)?)\s+(?:za |ya )?(.+)$/i.exec(t)) || (m = /^(?:nimemlisha|tumemlisha)\s+(.+?)\s+(\d+(?:\.\d+)?)\s*(kilo|lita|gunia|mifuko)\s+(?:za |ya )?(.+)$/i.exec(t))) {
    const animal = findAnimalSw(await list("animal"), m[1]);
    if (animal) {
      const unitWord = m[4] ? m[3] : /lita/i.test(t) ? "lita" : "kilo"; const what = clean(m[4] || m[3]).toLowerCase().slice(0, 40); const value = num(m[2]);
      await ctx.store.add({ ...scope, collection: "animal_event", data: { animal: animal.data.tag, type: "feeding", day: ctx.today, detail: englishItem(what), value, unit: /lita/i.test(unitWord) ? "litres" : /gunia/i.test(unitWord) ? "sacks" : /mifuko/i.test(unitWord) ? "bags" : "kg" } });
      return SW.fed({ tag: tagShown(animal.data.tag), qty: `${unitWord} ${value}`, what });
    }
  }
  if ((m = /^(.+?) (?:amekufa|ameibiwa|amepotea)$/i.exec(t))) {
    const animal = findAnimalSw(await list("animal"), m[1]);
    if (animal) return askConfirmSw(ctx, SW.goneAsk({ tag: tagShown(animal.data.tag) }), { type: "animal-gone-sw", memoryId: animal.memoryId, tag: animal.data.tag });
  }
  if ((m = /^(?:tafadhali\s+)?(?:ondoa|futa)\s+(?:mnyama\s+)?(.+?)(?:\s+kwenye (?:mifugo|wanyama) wangu)?$/i.exec(t)) && /^(?:tafadhali\s+)?(?:ondoa|futa)/i.test(t)) {
    const animal = findAnimalSw(await list("animal"), m[1]);
    if (animal) return askConfirmSw(ctx, SW.removeAnimalAsk({ tag: tagShown(animal.data.tag) }), { type: "remove-record-sw", memoryId: animal.memoryId, label: tagShown(animal.data.tag) });
  }

  // =========================== workers and jobs ===========================
  if ((m = /^(?:tafadhali\s+)?(?:ongeza|sajili|ajiri)\s+(?:mfanyakazi|kibarua|mfanyakazi wa shambani)(?:\s+(?:mpya|anayeitwa|aitwaye))?\s*(.*)$/i.exec(t))) {
    const parts = clean(m[1]).split(/\s*,\s*/).filter(Boolean); const name = parts.shift() || "";
    if (!name || name.length > 40 || /\d/.test(name)) return SW.askWorker;
    let phone = ""; let role = "";
    for (const part of parts) { const candidate = /^\+?[\d\s().-]{7,20}$/.test(part) ? normalizeRecipient("sms", part) : ""; if (candidate) phone = candidate; else if (!role && part.length <= 60) role = part; }
    const workers = await list("worker"); const shown = titleCase(name);
    if (workers.some(worker => worker.data.name.toLowerCase() === shown.toLowerCase())) return SW.workerExists({ name: shown });
    if (workers.length >= 100) return SW.workersFull;
    await ctx.store.add({ ...scope, collection: "worker", data: { name: shown, ...(phone ? { phone } : {}), ...(role ? { role } : {}) } });
    if (phone && ctx.memory?.saveContact) { try { await ctx.memory.saveContact({ ...scope, name: shown, phone }); } catch { /* saved either way */ } }
    return SW.workerAdded({ name: shown, role, first: shown.split(" ")[0] });
  }
  if (/^(?:onyesha|orodhesha|nionyeshe)\s+wafanyakazi wangu$/.test(lower) || /^(?:nani wanafanya kazi kwangu|nani anafanya kazi shambani kwangu)$/.test(lower)) {
    const workers = await list("worker");
    return workers.length ? SW.workerList({ lines: workers.slice().reverse().map(worker => `${worker.data.name}${worker.data.role ? ` (${worker.data.role})` : ""}`).join("; ") }) : SW.noWorkers;
  }
  if ((m = /^(?:tafadhali\s+)?(?:ondoa|futa|fukuza)\s+mfanyakazi\s+(.+)$/i.exec(t))) {
    const found = findWorker(await list("worker"), m[1]);
    return found ? askConfirmSw(ctx, SW.removeWorkerAsk({ name: found.data.name }), { type: "remove-record-sw", memoryId: found.memoryId, label: found.data.name }) : SW.noWorker({ name: clean(m[1]) });
  }
  const createTask = async (title, assignee, due) => {
    const workers = await list("worker"); const worker = assignee ? findWorker(workers, assignee) : null; const tasks = await list("task");
    if (tasks.filter(task => task.data.status !== "done").length >= 300) return { refused: SW.tasksFull };
    const name = worker ? worker.data.name : assignee ? titleCase(assignee) : "";
    const record = await ctx.store.add({ ...scope, collection: "task", data: { title, assignee: name, status: "open", due: due || null, createdOn: ctx.today } });
    return { record, known: Boolean(worker), name };
  };
  const describeTaskSw = task => SW.taskLine({ number: task.number, title: task.data.title, assignee: task.data.assignee, status: task.data.status === "done" ? SW.doneOn({ when: task.data.doneOn ? describeDaySw(task.data.doneOn, ctx.today) : "" }) : task.data.due ? SW.dueOn({ when: describeDaySw(task.data.due, ctx.today) }) : SW.noDue });
  if ((m = /^(?:tafadhali\s+)?(?:mpe|mkabidhi|wape)\s+(.+?)\s+kazi(?: ya| za)?\s+(.+)$/i.exec(t)) && clean(m[1]).split(" ").length <= 3) {
    const split = splitDueSw(m[2], ctx.today);
    if (!split.title || split.title.length < 3) return null;
    const result = await createTask(split.title, m[1], split.due);
    if (result.refused) return result.refused;
    return `${describeTaskSw(result.record)}.${result.known ? "" : SW.unknownWorker({ first: clean(m[1]).split(" ")[0] })}`;
  }
  if ((m = /^(?:tafadhali\s+)?(?:ongeza|andika)\s+kazi(?: ya shamba)?\s*[:,-]?\s*(.+)$/i.exec(t)) && !/\b(?:kwenye|katika)\s+(?:kalenda|orodha yangu)\b/i.test(t)) {
    const assigned = /^(.*?)\s+kwa\s+([A-Z][a-z']+(?: [A-Z][a-z']+)?)(?=\s+(?:kufikia|kabla ya|hadi|tarehe|kesho|leo)\b|\s*$)(.*)$/.exec(m[1]);
    const split = splitDueSw(assigned ? `${assigned[1]}${assigned[3]}` : m[1], ctx.today);
    if (!split.title) return null;
    const result = await createTask(split.title, assigned ? assigned[2] : "", split.due);
    if (result.refused) return result.refused;
    return `${describeTaskSw(result.record)}.`;
  }
  if (/^(?:kazi zipi (?:zimebaki|ziko wazi|hazijakamilika)|onyesha kazi zangu|orodhesha kazi zangu|nini kimebaki shambani)$/.test(lower)) {
    const tasks = (await list("task")).filter(task => task.data.status !== "done");
    if (!tasks.length) return SW.noOpen;
    tasks.sort((a, b) => (a.data.due || "9999").localeCompare(b.data.due || "9999"));
    return SW.openList({ n: tasks.length, lines: tasks.slice(0, 8).map(describeTaskSw).join("; "), more: Math.max(0, tasks.length - 8) });
  }
  if (/^(?:kazi zipi zimechelewa|nini kimechelewa|onyesha kazi zilizochelewa)$/.test(lower)) {
    const late = (await list("task")).filter(task => task.data.status !== "done" && task.data.due && task.data.due < ctx.today);
    return late.length ? SW.overdueList({ n: late.length, lines: late.slice(0, 8).map(describeTaskSw).join("; ") }) : SW.overdueNone;
  }
  if ((m = /^(?:onyesha|orodhesha)\s+kazi za\s+(.+)$/i.exec(t)) || (m = /^(.+?) anatakiwa kufanya nini$/i.exec(t))) {
    const worker = findWorker(await list("worker"), m[1]); const name = worker ? worker.data.name : titleCase(m[1]);
    const tasks = (await list("task")).filter(task => task.data.assignee && task.data.assignee.toLowerCase() === name.toLowerCase() && task.data.status !== "done");
    if (!worker && !tasks.length) return null;
    const first = name.split(" ")[0];
    return tasks.length ? SW.workerJobs({ first, n: tasks.length, lines: tasks.slice(0, 8).map(task => `${task.number}. ${task.data.title} (${task.data.due ? SW.dueOn({ when: describeDaySw(task.data.due, ctx.today) }) : SW.noDue})`).join("; ") }) : SW.workerNone({ first });
  }
  if (/^(?:onyesha|orodhesha)\s+kazi zilizokamilika$/.test(lower)) {
    const done = (await list("task")).filter(task => task.data.status === "done").slice(0, 8);
    return done.length ? SW.doneList({ lines: done.map(describeTaskSw).join("; ") }) : SW.doneNone;
  }
  if ((m = /^kazi (?:namba )?#?(\d{1,5}) (?:imekamilika|imeisha|imemalizika)$/i.exec(t)) || (m = /^(?:.+?) amemaliza kazi (?:namba )?#?(\d{1,5})$/i.exec(t))) {
    const tasks = await list("task"); const task = tasks.find(item => item.number === Number(m[1]));
    if (!task) return SW.noTask({ n: m[1] });
    if (task.data.status === "done") return SW.alreadyDone({ n: task.number });
    await ctx.store.update({ ...scope, record: { ...task, data: { ...task.data, status: "done", doneOn: ctx.today } } });
    return SW.taskDone({ title: task.data.title, assignee: task.data.assignee, left: tasks.filter(item => item.data.status !== "done" && item.number !== task.number).length });
  }
  if ((m = /^([A-Z][a-z']+(?: [A-Z][a-z']+)?) amemaliza (.+)$/.exec(t)) && !/^kazi\b/i.test(m[2])) {
    const tasks = (await list("task")).filter(item => item.data.status !== "done" && item.data.assignee && item.data.assignee.toLowerCase().split(" ").includes(m[1].toLowerCase()));
    const wanted = clean(m[2]).toLowerCase().split(" ").filter(word => word.length > 2); const matches = tasks.filter(item => wanted.length && wanted.every(word => item.data.title.toLowerCase().includes(word)));
    if (matches.length === 1) { await ctx.store.update({ ...scope, record: { ...matches[0], data: { ...matches[0].data, status: "done", doneOn: ctx.today } } }); return SW.taskDone({ title: matches[0].data.title, assignee: matches[0].data.assignee, left: tasks.length - 1 }); }
    if (matches.length > 1) return SW.whichJob({ lines: matches.slice(0, 4).map(item => `${item.number}. ${item.data.title}`).join("; ") });
  }
  if ((m = /^(?:tafadhali\s+)?(?:ondoa|futa)\s+kazi (?:namba )?#?(\d{1,5})$/i.exec(t))) {
    const task = (await list("task")).find(item => item.number === Number(m[1]));
    return task ? askConfirmSw(ctx, SW.removeTaskAsk({ n: task.number, title: task.data.title }), { type: "remove-record-sw", memoryId: task.memoryId, label: `kazi ${task.number}` }) : SW.noTask({ n: m[1] });
  }

  // =========================== the pest and disease journal ===========================
  const explicit = /^(?:tafadhali\s+)?(?:andika|weka|ripoti)\s+(?:tatizo|tatizo la wadudu|tatizo la ugonjwa|wadudu|ugonjwa|uharibifu)\s*[:,-]\s*(.+)$/i.exec(t);
  const found = !explicit && (m = /^nimeona (.{3,120}?)(?: (?:kwenye|katika|shambani kwa|shambani)\s+(?:shamba\s+)?(?:la\s+)?(.{2,40}))?$/i.exec(t)) && SIGNS.test(m[1]) && FARM_CONTEXT.test(t) ? m : null;
  if (explicit || found) {
    const text = clean(explicit ? explicit[1] : t.replace(/^nimeona\s+/i, "")).slice(0, 300); const fields = await list("field");
    const mentioned = fields.find(field => nameKey(field.data.name) && new RegExp(`(?:^|[^\\p{L}])${nameKey(field.data.name).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?:[^\\p{L}]|$)`, "iu").test(`${text} ${found?.[2] || ""}`));
    const kind = /(?:ugonjwa|magonjwa|ukungu|kutu|kunyauka|kuoza|kuhara|kuvimba)/i.test(text) ? "disease" : "pest";
    const entries = await list("pest");
    if (entries.length >= 2000) return SW.journalFull;
    const entry = await ctx.store.add({ ...scope, collection: "pest", data: { kind, text, field: mentioned?.data.name || "", crop: mentioned?.data.crop || "", day: ctx.today, status: "open", actions: [] } });
    return SW.logged({ n: entry.number, text, where: mentioned ? ` (${mentioned.data.name}${mentioned.data.crop ? `, ${swahiliItem(mentioned.data.crop)}` : ""})` : "" });
  }
  if ((m = /^(?:sasisha|ongeza kwenye|andika kwenye)\s+tatizo\s+(?:namba\s+)?#?(\d{1,5})\s*[:,-]\s*(.+)$/i.exec(t))) {
    const entry = (await list("pest")).find(item => item.number === Number(m[1]));
    if (!entry) return SW.noProblem({ n: m[1] });
    await ctx.store.update({ ...scope, record: { ...entry, data: { ...entry.data, actions: [...(entry.data.actions || []), { day: ctx.today, text: clean(m[2]).slice(0, 200) }].slice(-20) } } });
    return SW.problemAdded({ n: entry.number, text: clean(m[2]).slice(0, 120) });
  }
  if ((m = /^tatizo (?:namba )?#?(\d{1,5}) (?:limeisha|limetatuliwa|limekwisha|limepungua|limezidi|linaenea|limekuwa bora)(?:\s*[:,-]\s*(.*))?$/i.exec(t))) {
    const entry = (await list("pest")).find(item => item.number === Number(m[1]));
    if (!entry) return SW.noProblem({ n: m[1] });
    const word = /(?:limeisha|limetatuliwa|limekwisha)/i.test(t) ? "limetatuliwa" : /limepungua|bora/i.test(t) ? "limepungua" : "limezidi"; const resolved = word === "limetatuliwa";
    await ctx.store.update({ ...scope, record: { ...entry, data: { ...entry.data, status: resolved ? "resolved" : "open", outcome: `${word}${m[2] ? `: ${clean(m[2]).slice(0, 150)}` : ""}`, outcomeDay: ctx.today } } });
    return SW.problemNoted({ n: entry.number, word, resolved });
  }
  if (/^(?:onyesha|orodhesha|nisomee)\s+(?:matatizo yangu ya wadudu na magonjwa|kumbukumbu zangu za wadudu na magonjwa|matatizo yangu ya mazao)$/.test(lower)) {
    const entries = await list("pest");
    if (!entries.length) return SW.journalEmpty;
    const open = entries.filter(entry => entry.data.status === "open");
    return SW.journalSummary({ open: open.length, closed: entries.length - open.length, lines: entries.slice(0, 5).map(entry => `#${entry.number} ${entry.data.text.slice(0, 50)}${entry.data.field ? ` (${entry.data.field})` : ""} — ${entry.data.status === "open" ? "wazi" : "limetatuliwa"}`).join("; ") });
  }
  if ((m = /^(?:onyesha|orodhesha)\s+matatizo (?:kwenye|ya)\s+shamba\s+(?:la\s+)?(.+)$/i.exec(t))) {
    const field = (await list("field")).find(item => nameKey(item.data.name) === nameKey(m[1]));
    if (field) { const entries = (await list("pest")).filter(entry => entry.data.field === field.data.name); return entries.length ? SW.fieldProblems({ name: field.data.name, lines: entries.slice(0, 6).map(entry => `#${entry.number} ${entry.data.text.slice(0, 50)} (${describeDaySw(entry.data.day, ctx.today)}, ${entry.data.status === "open" ? "wazi" : "limetatuliwa"})`).join("; ") }) : SW.fieldNoProblems({ name: field.data.name }); }
  }
  if ((m = /^nilifanya nini kuhusu\s+(.{3,40})$/i.exec(t))) {
    const word = clean(m[1]).toLowerCase().replace(/^(?:hao|hawa|huyo|hizi)\s+/, "");
    const hits = (await list("pest")).filter(entry => entry.data.text.toLowerCase().includes(word));
    if (!hits.length) return null;
    return hits.slice(0, 3).map(entry => SW.didAbout({ n: entry.number, when: describeDaySw(entry.data.day, ctx.today), text: entry.data.text.slice(0, 60), actions: (entry.data.actions || []).map(action => action.text).join("; "), outcome: entry.data.outcome || "" })).join(" ");
  }
  return null;
}

function describeFarmSw(data) {
  return [data.farmName, data.location ? `karibu na ${data.location}` : "", sizeShown(data.totalArea), { "rain-fed": "mvua", irrigated: "umwagiliaji", mixed: "mchanganyiko", organic: "asilia", greenhouse: "nyumba ya kijani", other: "nyingine" }[data.method] || data.method || "", data.seasons ? `misimu: ${data.seasons}` : "", data.crops ? `mazao: ${listSwahili(data.crops)}` : "", data.livestock ? `mifugo: ${listSwahili(data.livestock)}` : ""].filter(Boolean).join(", ") || SW.profileEmpty;
}
function yieldLineSw(field, entries, today) {
  const actual = harvestsFor(entries, field, today); const expected = field.data.expectedYield;
  const have = Object.entries(actual).map(([unit, value]) => unitLabelSw(value, unit === "egg" ? "piece" : unit)).join(" na ");
  if (!expected && !have) return SW.yieldNone({ name: field.data.name });
  if (!expected) return SW.yieldOnly({ name: field.data.name, have });
  const same = actual[expected.unit] || 0; const pct = expected.value ? Math.round((same / expected.value) * 100) : 0;
  return SW.yieldLine({ name: field.data.name, expected: unitLabelSw(expected.value, expected.unit), got: same ? unitLabelSw(same, expected.unit) : "", pct: same ? pct : null, other: have && !same ? have : "" });
}

// After a yes: the same actions as the English tools, said in Swahili.
const confirms = {
  "remove-record-sw": async (ctx, action) => (await ctx.store.remove({ tenantId: ctx.tenantId, userId: ctx.userId, memoryId: action.memoryId }) ? SW.removedField({ name: action.label }) : SW.goneItem({ name: action.label })),
  "animal-gone-sw": async (ctx, action) => {
    const animal = (await ctx.store.list({ tenantId: ctx.tenantId, userId: ctx.userId, collection: "animal" })).find(item => item.memoryId === action.memoryId);
    if (!animal) return SW.goneMissing({ tag: tagShown(action.tag) });
    await ctx.store.update({ tenantId: ctx.tenantId, userId: ctx.userId, record: { ...animal, data: { ...animal.data, status: "gone", goneOn: ctx.today } } });
    return SW.goneDone({ tag: tagShown(action.tag) });
  }
};

module.exports = Object.freeze({ handle, confirms, SW, DISCLAIMER, askConfirmSw, describeFieldSw, describeAnimalSw, findAnimalSw, yieldLineSw, describeFarmSw });
