"use strict";

const { clean, titleCase, plural, anyDay, pastDay } = require("../farmwork/parse.js");
const { MAX_PATIENTS, record, listOf, nameMap, addDays } = require("./common.js");
const { outstanding } = require("./immunisation.js");
const { build } = require("./privacy.js");
const { resolveSw, tagSw, firstName, patientLineSw, ageWordsSw, vitalWordsSw, SEX_SW } = require("./swahili.js");
const { dayInEnglish, isDayWord, describeDaySw, periodSw, MONTHS } = require("../i18n/swahili-words.js");

// The rest of the health worker's record-keeping, in Swahili: immunisations, pregnancies, the clinic's medicines and supplies, referral letters, reports,
// the worker's own details, and taking a copy of everything or erasing it. Same records as the English tools (so either language reads the other's).
// Kyro records what the worker says. It carries no vaccine schedule, works out no due date, says nothing about a dose and suggests nothing to stock or give.
// Letters and reports are made in Swahili, or in English when the worker adds "kwa Kiingereza" (a receiving clinic may want English).
// First draft: a fluent speaker and a clinician must review every word before it is relied on.
const ERASE_PHRASE = "futa yote";
const SW = {
  // immunisations
  askNext: ({ text }) => `Sikuweza kusoma "${text}" kama siku ya baadaye. Sema kama "dozi ijayo baada ya wiki 6" au "dozi ijayo tarehe 12 Novemba".`,
  gave: ({ who, vaccine, next, when }) => `Nimerekodi: ${who} amepata ${vaccine} leo.${next ? ` Dozi ijayo ${when}; iko kwenye kalenda yako bila jina lake.` : ' Ukitaka kikumbusho, sema "dozi ijayo baada ya wiki 6" pamoja nayo.'} Ninarekodi tu unachoniambia; fuata ratiba ya programu yako.`,
  noDoses: ({ name }) => `Hakuna chanjo zilizorekodiwa kwa ${name} bado.`, doses: ({ who, lines }) => `${who}: ${lines}.`, nextWord: ({ when }) => `(ijayo ${when})`,
  dueNone: ({ span }) => `Hakuna chanjo zinazotakiwa ${span} kulingana na tarehe ulizonipa.`, dueSpanMonth: "mwezi huu", dueSpanWeeks: "katika wiki mbili zijazo",
  dueList: ({ n, lines, more }) => `Chanjo ${n} zinatakiwa: ${lines}${more ? "; …" : ""}.`, overdue: ({ when }) => `imechelewa tangu ${when}`,
  // pregnancy
  askDue: ({ first }) => `Tarehe ya kujifungua ya ${first} ni lini? Sema "${first} ni mjamzito, atajifungua tarehe 12 Machi".`,
  dueUpdated: ({ who, when }) => `Nimesasisha ${who}: kujifungua kunatarajiwa ${when}.`,
  pregnant: ({ who, when, first }) => `Nimerekodi: ${who} ni mjamzito, anatarajiwa ${when}. Sema "ziara ya ${first}: …" au "mwone ${first} tena baada ya wiki 4" kufuatilia ziara zake.`,
  askDelivered: "Nahitaji siku aliyojifungua, kama \"tarehe 3 Machi\", na haiwezi kuwa ya baadaye.",
  delivered: ({ who, when, outcome, first }) => `Nimerekodi: ${who} amejifungua ${when}${outcome ? ` (${outcome})` : ""}. Kuhifadhi rekodi za mtoto, sema "sajili mgonjwa Mtoto wa ${first}".`,
  pregNone: "Hakuna mimba zilizorekodiwa kwa kipindi hicho.", pregList: ({ n, lines, more }) => `Mimba ${n}: ${lines}${more ? "; …" : ""}.`, expected: ({ when }) => `anatarajiwa ${when}`, passed: " (tarehe imepita)",
  // clinic stock
  supplyFull: "Hiyo ndiyo idadi kubwa ninayoweza kuhifadhi (elfu moja). Ondoa vingine kwanza.",
  askExpiry: ({ text }) => `Sikuweza kusoma "${text}" kama tarehe. Sema kama "inaisha muda 31 Machi 2027".`, expiredAlready: "Tarehe hiyo ya kuisha muda imeshapita, kwa hivyo sijaongeza. Angalia tarehe kwenye kifurushi.",
  wrongUnit: ({ name, unit }) => `Unahifadhi ${name} kwa ${unit}; sema kiasi kwa ${unit} ili hesabu iwe sahihi.`,
  added: ({ qty, name, now, expiry }) => `Nimeongeza ${name}: ${qty}.${now ? ` Sasa una: ${now}.` : ""}${expiry ? ` Tarehe ya kuisha muda: ${expiry}.` : ""}${now ? "" : ` Sema "niarifu ${name} ikishuka chini ya 50" ili nikuambie inapoisha.`}`,
  notInStock: ({ name, qty, unit }) => `Sina ${name} kwenye stoo yako ya kliniki. Sema "ongeza ${unit} ${qty} za ${name} kwenye stoo ya kliniki" kwanza.`,
  onlyHave: ({ have, name, qty }) => `Umerekodi ${name}: ${have} tu. Ikiwa hesabu si sahihi, sema "weka hesabu ya ${name} kuwa ${qty}".`,
  gaveOut: ({ qty, name, to, left, note, last, low }) => `Nimerekodi: umetoa ${name}: ${qty}${to ? `, kwa ${to}` : ""}. Baki: ${left}.${last ? " Hiyo ndiyo ya mwisho." : low ? " Iko kwenye kiwango chako cha chini au chini yake." : ""}${note}`,
  notRegistered: ({ who }) => ` (${who} si mmoja wa wagonjwa wako waliosajiliwa, kwa hivyo haijaunganishwa na rekodi.)`,
  countSet: ({ name, qty }) => `Nimeweka ${name} kuwa: ${qty}.`, have: ({ qty, name, expiry }) => `Una ${name}: ${qty}${expiry ? `, tarehe ya karibu ya kuisha muda ${expiry}` : ""}.`,
  warned: ({ name, low }) => `Nitaonyesha ${name} kwenye muhtasari wako wa asubuhi ikifika ${low} au chini yake.`, expirySet: ({ name, when }) => `Nimeandika: ${name} inaisha muda ${when}.`, pastDate: "Tarehe hiyo imeshapita, kwa hivyo sijaihifadhi. Angalia tarehe kwenye kifurushi.", noDate: ({ text }) => `Sikuweza kusoma "${text}" kama tarehe.`,
  stockEmpty: "Stoo yako ya kliniki haina kitu. Sema \"ongeza vidonge 100 vya paracetamol kwenye stoo ya kliniki\".",
  lowNone: "Hakuna kilichofika kiwango cha chini ulichoweka. Sema \"niarifu paracetamol ikishuka chini ya 50\" kuweka kimoja.", out: ({ names }) => `Vimeisha: ${names}. `, low: ({ names }) => `Vinapungua: ${names}.`,
  expNone: "Hakuna ulichoniambia kinachoisha muda katika miezi mitatu ijayo.", expList: ({ lines }) => `Vinaisha muda ndani ya miezi mitatu: ${lines}.`, expired: ({ when }) => `kimeisha muda ${when}`,
  stockList: ({ n, lines, more }) => `Vitu ${n} kwenye stoo ya kliniki: ${lines}${more ? `; na ${more} zaidi` : ""}.`,
  removeAsk: ({ name, qty }) => `Niondoe ${name} (${qty}) kwenye stoo yako ya kliniki?`,
  // referrals
  askWhere: ({ name, first }) => `Unampeleka ${name} wapi? Sema "barua ya rufaa ya ${first} kwenda Hospitali ya Kisumu: sababu".`,
  referrals: ({ n, period, lines }) => `Rufaa ${n} ${period}: ${lines}.`, referralsNone: ({ period }) => `Hakuna rufaa zilizorekodiwa ${period}.`,
  // reports
  noReportData: "Sina ziara, chanjo, uzazi, rufaa wala dawa zilizorekodiwa kwa kipindi hicho, kwa hivyo hakuna cha kuchapisha.", noPatients: "Hujasajili wagonjwa, kwa hivyo hakuna cha kuchapisha.",
  // details
  askRole: "Sikuelewa jukumu lako. Sema kama mhudumu wa afya ya jamii, nesi, mkunga, afisa tabibu, daktari au mfamasia.",
  profileSaved: ({ text }) => `Nimehifadhi: ${text}. Vitaonekana kwenye barua zako za rufaa na ripoti.`, profileNone: "Hujaweka taarifa za kliniki yako bado. Sema \"weka taarifa za kliniki yangu: nesi, Zahanati ya Kibera, Kisumu\".",
  profileShown: ({ text }) => `Umewekwa kama ${text}. Sema "badilisha taarifa za kliniki yangu: …" kubadilisha.`,
  // privacy
  exportNone: "Huna rekodi za wagonjwa za kuhamisha.", eraseNothing: "Huna kilichoondolewa kinachosubiri kufutwa.", eraseUnavailable: "Kufuta hakupatikani kwa sasa.",
  eraseAsk: ({ patients, visits, doses, referrals }) => `Hii itafuta kabisa wagonjwa ${patients} na kila rekodi kuwahusu (ziara ${visits}, chanjo ${doses}, rufaa ${referrals}, mimba na ufuatiliaji), stoo yako ya kliniki na taarifa za kliniki yako. Haiwezi kurudishwa. Ukitaka nakala kwanza, sema "hamisha rekodi zangu zote za wagonjwa". Kuendelea, andika hasa: FUTA YOTE. Chochote kingine kinaacha kila kitu kama kilivyo.`,
  eraseRemovedAsk: ({ n }) => `Rekodi ${n} zilizoondolewa (wagonjwa uliowaondoa, na kilichohifadhiwa kuwahusu) zitafutwa kabisa na haziwezi kurudi.`,
  hold: "Siwezi kufuta hii sasa kwa sababu kuna zuio la kisheria. Hakuna kilichofutwa.",
  erasedAll: ({ n }) => `Nimemaliza. Nimefuta wagonjwa ${n} na kila kitu kilichorekodiwa kuwahusu, stoo yako ya kliniki na taarifa za kliniki yako, kabisa. Mambo mawili yako nje ya uwezo wangu: barua na ripoti ulizotengeneza tayari ni hati tofauti (zifute kwenye hati zako), na vikumbusho vya kalenda vilisema tu "mgonjwa N".`,
  erasedRemoved: ({ n }) => `Nimemaliza. Nimefuta rekodi ${n} zilizoondolewa kabisa.`,
  logNone: "Hakuna kilichohamishwa wala kufutwa bado.", logHead: ({ lines }) => `Ulichohamisha au kufuta (kipya kwanza): ${lines}. Majina hayahifadhiwi kwenye kumbukumbu hii.`,
  logExport: ({ n, records, format }) => `imehamishwa wagonjwa ${n} (rekodi ${records}, ${format})`, logEraseAll: ({ n }) => `imefuta kila kitu (rekodi ${n})`, logEraseRemoved: ({ n }) => `imefuta rekodi ${n} zilizoondolewa kabisa`, logPatientRemoved: ({ n, r }) => `imemwondoa mgonjwa #${n} na rekodi ${r}`,
  removePatientAsk: ({ name, number }) => `Niondoe ${name} (#${number}) na kila kitu kilichorekodiwa kumhusu: ziara, chanjo, ufuatiliaji na rufaa? Haiwezi kurudishwa.`,
  removedPatient: ({ name, n }) => `Nimemaliza. Nimemwondoa ${name} na rekodi ${n} zilizohifadhiwa kumhusu.`, gone: ({ name }) => `Sioni ${name} tena.`,
  removedItem: ({ name }) => `Nimemaliza. Nimeondoa ${name}.`, goneItem: ({ name }) => `Sioni ${name} tena.`,
  kept: "Sawa, nimeacha kama ilivyo.", typeExactly: "Ili kuwa na uhakika, andika hasa: FUTA YOTE. Au sema hapana kuacha kila kitu kama kilivyo.",
  sayYes: "Sema ndiyo kuendelea, au hapana kuacha."
};

// ---- small readers ----
const SUP_UNITS = [[/^(?:kidonge|vidonge)$/, "tablet"], [/^kapsuli$/, "capsule"], [/^ampuli$/, "ampoule"], [/^chupa$/, "bottle"], [/^(?:sanduku|masanduku)$/, "box"], [/^(?:pakiti|paketi)$/, "pack"], [/^(?:kifurushi|vifurushi)$/, "packet"], [/^(?:bomba|mabomba)$/, "tube"], [/^sindano$/, "syringe"], [/^glavu$/, "glove"], [/^jozi$/, "pair"],
  [/^(?:chandarua|vyandarua)$/, "net"], [/^(?:mfuko|mifuko)$/, "bag"], [/^lita$/, "litre"], [/^ml$/, "ml"], [/^(?:kipande|vipande)$/, "piece"], [/^(?:kipimo|vipimo)$/, "test"], [/^seti$/, "set"], [/^dozi$/, "dose"], [/^(?:mkebe|mikebe)$/, "tin"], [/^(?:katoni)$/, "carton"], [/^(?:mkanda|mikanda)$/, "strip"], [/^(?:mkunjo|mikunjo)$/, "roll"], [/^kifaa$/, "kit"]];
const SUP_SHOWN = { tablet: "vidonge", capsule: "kapsuli", ampoule: "ampuli", bottle: "chupa", box: "masanduku", pack: "pakiti", packet: "vifurushi", tube: "mabomba", syringe: "sindano", glove: "glavu", pair: "jozi", net: "vyandarua", bag: "mifuko", litre: "lita", ml: "ml", piece: "vipande", test: "vipimo", set: "seti", dose: "dozi", tin: "mikebe", carton: "katoni", strip: "mikanda", roll: "mikunjo", kit: "vifaa" };
const SUP_UNIT_WORD = "kidonge|vidonge|kapsuli|ampuli|chupa|sanduku|masanduku|pakiti|paketi|kifurushi|vifurushi|bomba|mabomba|sindano|glavu|jozi|chandarua|vyandarua|mfuko|mifuko|lita|ml|kipande|vipande|kipimo|vipimo|seti|dozi|mkebe|mikebe|katoni|mkanda|mikanda|mkunjo|mikunjo|kifaa";
const NUM = "\\d[\\d,]*(?:[.]\\d+)?";
const SUP_QTY = new RegExp(`\\b(${SUP_UNIT_WORD})\\s+(${NUM})\\b(?!\\s*(?:${SUP_UNIT_WORD})\\b)|(?<![\\d.,])(${NUM})\\s*(${SUP_UNIT_WORD})\\b`, "i");
const supUnit = word => (SUP_UNITS.find(([pattern]) => pattern.test(String(word).toLowerCase())) || [])[1] || null;
const supQty = text => { const m = SUP_QTY.exec(clean(text)); if (!m) return null; const unit = supUnit(m[1] || m[4]); const value = Number(String(m[2] || m[3]).replace(/,/g, "")); return unit && value > 0 ? { value, unit, matched: m[0], index: m.index } : null; };
const qtyShown = (value, unit) => `${SUP_SHOWN[unit] || unit} ${value}`;
const tidy = raw => clean(raw).toLowerCase().replace(/^(?:vya|za|ya|wa|la|cha|kwa|ya)\s+/, "").replace(/[.,;:]+$/g, "").slice(0, 50);
const HEALTH_CTX = /\b(?:kliniki|zahanati|dispensari|duka la dawa|famasia|dawa|vifaa vya (?:matibabu|afya)|kituo cha afya|stoo ya dawa)\b/i;
const findSupply = (items, query) => { const wanted = tidy(query); if (!wanted) return []; const exact = items.filter(item => item.data.name === wanted); if (exact.length) return exact; const words = wanted.split(" "); return items.filter(item => { const parts = item.data.name.split(" "); return words.every(word => parts.includes(word)); }); };
const soleSupply = (items, query) => { const found = findSupply(items, query); return found.length === 1 ? found[0] : null; };
const stripQty = (text, quantity) => clean(text.slice(0, quantity.index) + " " + text.slice(quantity.index + quantity.matched.length));

const VACC_SW = [[/^surua$/i, "Measles"], [/^pepopunda$/i, "Tetanus"], [/^homa ya manjano$/i, "Yellow fever"], [/^kipindupindu$/i, "Cholera"], [/^kichaa cha mbwa$/i, "Rabies"], [/^homa ya ini(?: b)?$/i, "Hepatitis B"], [/^vitamini a$/i, "Vitamin A"], [/^polio$/i, "Polio"]];
const ACRONYM = /^(?:bcg|opv|ipv|dpt|dtp|pcv|mr|mmr|hpv|tt|td|hib|r21|hep ?[ab]|rts,?s)(?: \d)?$/i;
function vaccineName(raw) {
  const text = clean(raw).replace(/^(?:ya|za)\s+/i, "").replace(/\s+(?:dozi|sindano)$/i, "").slice(0, 40).trim();
  const mapped = VACC_SW.find(([pattern]) => pattern.test(text));
  if (mapped) return mapped[1];
  return ACRONYM.test(text) ? text.toUpperCase() : text.charAt(0).toUpperCase() + text.slice(1);
}
const family = vaccine => clean(vaccine).toLowerCase().replace(/\s*\d+$/, "").replace(/\s*(?:dose|booster)$/, "");
const askOf = text => /^(?:nani|ni nani|wapi|lini|vipi|ipi|gani|onyesha|orodhesha|nionyeshe|nisomee|kwa nini|je)\b/i.test(clean(text));
const dayFrom = (text, today) => { const raw = clean(text || "").replace(/^(?:ni |itakuwa |mnamo )/i, ""); return raw && isDayWord(raw) ? anyDay(dayInEnglish(raw), today) : null; };
const askConfirmSw = async (ctx, sentence, action) => {
  await ctx.store.setSession({ tenantId: ctx.tenantId, userId: ctx.userId, session: { collection: "_confirm", answers: {}, asking: "confirm", action: { ...action, language: "sw" }, expiresAt: new Date(Date.now() + 10 * 60000).toISOString() } });
  return `${sentence} ${SW.sayYes}`;
};
const formatOf = text => (/\bpdf\b/i.test(text) ? "pdf" : /\b(?:word|docx)\b/i.test(text) ? "docx" : /\b(?:markdown|md)\b/i.test(text) ? "md" : /\b(?:maandishi|txt|text)\b/i.test(text) ? "txt" : "");
const placeName = raw => titleCase(raw).replace(/\b(?:Ya|Wa|La|Cha|Za|Na)\b/g, word => word.toLowerCase());
const line = (width = 60) => "-".repeat(width);

// ---- clinic details ----
const ROLES = [[/^(?:mhudumu wa afya(?: ya jamii)?|mhudumu wa jamii|chw|chv)$/i, "community health worker", "mhudumu wa afya ya jamii"], [/^(?:nesi|muuguzi|mwuguzi)$/i, "nurse", "nesi"], [/^mkunga$/i, "midwife", "mkunga"], [/^(?:afisa tabibu|tabibu)$/i, "clinical officer", "afisa tabibu"], [/^daktari$/i, "doctor", "daktari"], [/^mfamasia$/i, "pharmacist", "mfamasia"]];
const roleShown = role => (ROLES.find(([, english]) => english === role) || [])[2] || role;
const describeClinicSw = data => `${roleShown(data.role)}${data.facility ? ` katika ${data.facility}` : ""}${data.area ? ` (${data.area})` : ""}`;

// ---- letters and reports (Swahili) ----
async function workerLine(ctx) {
  const worker = (ctx.nameOf ? await ctx.nameOf({ tenantId: ctx.tenantId, userId: ctx.userId }).catch(() => "") : "") || "";
  const clinic = (await listOf(ctx, "clinic"))[0];
  return { worker, clinic: clinic ? describeClinicSw(clinic.data) : "" };
}
async function header(ctx, title) {
  const { worker, clinic } = await workerLine(ctx);
  return `${[title.toUpperCase(), clinic, worker ? `Imetayarishwa na: ${worker}` : "", `Tarehe: ${ctx.today}`, line()].filter(Boolean).join("\n")}\n\n`;
}
const FOOT = "\n\nImetayarishwa na Kyro kutoka kwenye rekodi alizoingiza mhudumu wa afya. Ina kilichorekodiwa tu.";
const tally = (values, limit = 12) => { const counts = new Map(); for (const value of values.filter(Boolean)) counts.set(value, (counts.get(value) || 0) + 1); return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).slice(0, limit); };
const rows = entries => (entries.length ? entries.map(([name, count]) => `  ${String(name).padEnd(28)} ${count}`).join("\n") : "  hakuna");
const under5 = (patient, day) => Boolean(patient.data.born) && patient.data.born > `${Number(day.slice(0, 4)) - 5}${day.slice(4)}`;

async function letterSw(ctx, patient, destination, reason) {
  const { worker, clinic } = await workerLine(ctx);
  const visits = (await listOf(ctx, "visit")).filter(item => item.data.pid === patient.memoryId).sort((a, b) => b.data.day.localeCompare(a.data.day)).slice(0, 3);
  const pregnancy = (await listOf(ctx, "pregnancy")).find(item => item.data.pid === patient.memoryId && item.data.status === "open");
  const d = patient.data; const from = [worker, clinic].filter(Boolean).join(", ");
  const observed = visits.length ? visits.reverse().map(item => `  ${item.data.day} — ${[vitalWordsSw(item.data.vitals || {}), item.data.condition ? `hali (kama alivyosema mhudumu wa afya): ${item.data.condition}` : "", item.data.text].filter(Boolean).join("; ")}`).join("\n") : "  Hakuna zilizorekodiwa.";
  return [
    "BARUA YA RUFAA", `Tarehe: ${ctx.today}`, from ? `Kutoka: ${from}` : "", `Kwenda: ${destination}`, line(), "",
    `Mgonjwa: ${d.name} (#${patient.number})${d.born ? ` — ${ageWordsSw(d.born, d.bornApprox, ctx.today)}` : ""}${d.sex ? `, ${SEX_SW[d.sex] || d.sex}` : ""}${d.village ? ` — ${d.village}` : ""}`,
    d.contact ? `Mawasiliano: ${d.contact}` : "", d.allergies?.length ? `Mizio (kama ilivyorekodiwa na mhudumu wa afya anayerufaa): ${d.allergies.join(", ")}` : "",
    pregnancy ? `Mimba: kujifungua kunatarajiwa ${pregnancy.data.due}` : "", "",
    `Sababu ya rufaa: ${reason || "(haikutajwa)"}`, "", "Uchunguzi ulioandikwa (ziara tatu za hivi karibuni):", observed, "", line(), "",
    "Sahihi: ______________________________", "", "Imetayarishwa na Kyro kutoka kwenye rekodi za mhudumu wa afya anayerufaa. Ina kilichorekodiwa tu."
  ].filter((entry, index, all) => entry !== "" || all[index - 1] !== "").join("\n");
}

const MONTH_NAMES = MONTHS.map(([sw]) => sw);
function reportPeriod(text, today) {
  const named = new RegExp(`\\b(${MONTH_NAMES.join("|")})(?:\\s+(\\d{4}))?\\b`, "i").exec(text);
  if (named) {
    const index = MONTH_NAMES.indexOf(named[1].toLowerCase()); const thisYear = Number(today.slice(0, 4)); const thisMonth = Number(today.slice(5, 7)) - 1;
    const year = named[2] ? Number(named[2]) : index > thisMonth ? thisYear - 1 : thisYear;
    const last = new Date(Date.UTC(year, index + 1, 0)).getUTCDate(); const mm = String(index + 1).padStart(2, "0");
    return { from: `${year}-${mm}-01`, to: `${year}-${mm}-${String(last).padStart(2, "0")}`, label: `${MONTH_NAMES[index][0].toUpperCase()}${MONTH_NAMES[index].slice(1)} ${year}` };
  }
  return periodSw(text, today, "this month");
}

async function monthlySw(ctx, text) {
  const period = reportPeriod(text, ctx.today); const inRange = day => day >= period.from && day <= period.to;
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
  const content = `${await header(ctx, "Ripoti ya shughuli za mwezi")}Kipindi: ${period.from} hadi ${period.to} (${period.label})\n\n` +
    `WAGONJWA\n  Wagonjwa wapya waliosajiliwa:  ${registered.length}\n  Wagonjwa walioonwa:            ${seen.length}\n    kike / kiume:                ${seen.filter(patient => patient.data.sex === "female").length} / ${seen.filter(patient => patient.data.sex === "male").length}\n    watoto chini ya miaka 5:     ${seen.filter(patient => under5(patient, period.to)).length}\n  Ziara zilizorekodiwa:          ${visits.length}\n\n` +
    `HALI (kama alivyosema mhudumu wa afya kila ziara)\n${rows(tally(visits.map(item => item.data.condition)))}\n\n` +
    `DOZI ZA CHANJO ZILIZOTOLEWA (${doses.length})\n${rows(tally(doses.map(item => item.data.vaccine)))}\n\n` +
    `UZAZI\n  Kuzaliwa kulikorekodiwa:       ${births.length}\n  Mimba zilizosajiliwa:          ${preg.filter(item => item.data.since && inRange(item.data.since) && item.data.status !== "delivered").length}\n\n` +
    `RUFAA ZILIZOTOLEWA: ${referrals.length}\n${rows(tally(referrals.map(item => item.data.to)))}\n\n` +
    `UFUATILIAJI ULIOKAMILIKA: ${followups.length}\n\n` +
    `DAWA NA VIFAA VILIVYOTOLEWA\n${rows([...given.entries()].sort((a, b) => b[1] - a[1]).slice(0, 15).map(([key, value]) => { const [name, unit] = key.split("|"); return [name, qtyShown(Math.round(value * 1000) / 1000, unit)]; }))}${FOOT}`;
  return { title: `Ripoti ya shughuli — ${period.label}`, content };
}

async function patientFileSw(ctx, patient) {
  const d = patient.data; const id = patient.memoryId;
  const mine = async name => (await listOf(ctx, name)).filter(item => item.data.pid === id);
  const visits = (await mine("visit")).sort((a, b) => a.data.day.localeCompare(b.data.day)); const doses = (await mine("dose")).sort((a, b) => a.data.day.localeCompare(b.data.day));
  const preg = await mine("pregnancy"); const referrals = await mine("referral"); const followups = (await mine("followup")).filter(item => item.data.status === "open");
  const content = `${await header(ctx, "Rekodi ya mgonjwa")}${patientLineSw(patient, ctx.today)}\n${d.contact ? `Mawasiliano: ${d.contact}\n` : ""}${d.allergies?.length ? `Mizio (kama ilivyorekodiwa): ${d.allergies.join(", ")}\n` : ""}Alisajiliwa: ${d.registeredOn || "—"}\n\n` +
    `ZIARA NA KUMBUKUMBU (${visits.length})\n${visits.length ? visits.map(item => `  ${item.data.day} — ${[vitalWordsSw(item.data.vitals || {}), item.data.condition ? `hali (kama alivyosema): ${item.data.condition}` : "", item.data.text].filter(Boolean).join("; ")}`).join("\n") : "  hakuna"}\n\n` +
    `CHANJO (${doses.length})\n${doses.length ? doses.map(item => `  ${item.data.day} — ${item.data.vaccine}${item.data.nextDue ? ` (dozi ijayo ${item.data.nextDue})` : ""}`).join("\n") : "  hakuna"}\n\n` +
    `MIMBA\n${preg.length ? preg.map(item => `  ${item.data.status === "open" ? `anatarajiwa ${item.data.due}` : `alijifungua ${item.data.deliveredOn}${item.data.outcome ? ` (${item.data.outcome})` : ""}`}`).join("\n") : "  hakuna"}\n\n` +
    `RUFAA\n${referrals.length ? referrals.map(item => `  ${item.data.day} — kwenda ${item.data.to}${item.data.reason ? `: ${item.data.reason}` : ""}`).join("\n") : "  hakuna"}\n\nUFUATILIAJI UNAOSUBIRI: ${followups.length ? followups.map(item => item.data.due).join(", ") : "hakuna"}${FOOT}`;
  return { title: `Rekodi ya mgonjwa - ${d.name}`, content };
}

const asEnglish = text => /\bkwa kiingereza\b/i.test(text);

async function handle(ctx) {
  const t = clean(ctx.text).replace(/[.!?]+$/g, ""); const lower = t.toLowerCase();
  if (!/(?:chanjo|mimba|mjamzito|ujauzito|wajawazito|amejifungua|kliniki|zahanati|dawa|vifaa|stoo|akiba|nimepokea|nimetoa|nimegawa|nimeletewa|tumepokea|nimempa|nimemchanja|rufaa|ripoti|ripoti|rekodi|orodha ya wagonjwa|futa|hamisha|ondoa mgonjwa|taarifa|kumbukumbu|hesabu|niarifu|nikumbushe|inaisha|kuisha|nina .+ kiasi gani)/i.test(lower)) return null;
  const scope = { tenantId: ctx.tenantId, userId: ctx.userId };
  let m;

  // =========================== immunisations ===========================
  const NEXT = "(?:[,;]?\\s*(?:dozi|chanjo) (?:ijayo|inayofuata)(?: ni| itakuwa)?\\s+(.+))?";
  let given = null;
  if ((m = new RegExp(`^(?:tafadhali\\s+)?(?:nimempa|nimemtolea|nimempatia)\\s+(?:mgonjwa\\s+)?(.+?)\\s+chanjo(?: ya| za)?\\s+(.+?)${NEXT}$`, "i").exec(t))) given = { who: m[1], what: m[2], next: m[3] };
  else if ((m = new RegExp(`^(?:tafadhali\\s+)?nimemchanja\\s+(?:mgonjwa\\s+)?(.+?)\\s+(?:dhidi ya |kwa )?(.+?)${NEXT}$`, "i").exec(t))) given = { who: m[1], what: m[2], next: m[3] };
  else if ((m = new RegExp(`^(?:mgonjwa\\s+)?(.+?)\\s+amepata\\s+chanjo(?: ya| za)?\\s+(.+?)${NEXT}$`, "i").exec(t))) given = { who: m[1], what: m[2], next: m[3] };
  if (given && !askOf(given.who)) {
    const found = await resolveSw(ctx, given.who, { quiet: true });
    if (found?.reply) return found.reply;
    if (!found) return null;
    const vaccine = vaccineName(given.what);
    if (!vaccine || vaccine.length < 2) return null;
    let nextDue = null;
    if (given.next) { nextDue = dayFrom(given.next, ctx.today); if (!nextDue || nextDue <= ctx.today) return SW.askNext({ text: clean(given.next) }); }
    await record(ctx, "dose", { pid: found.patient.memoryId, vaccine, day: ctx.today, nextDue });
    if (nextDue && ctx.personal?.add) await ctx.personal.add({ kind: "event", text: `Chanjo inatakiwa mgonjwa ${found.patient.number}`, day: nextDue, time: "" });
    return SW.gave({ who: tagSw(found.patient), vaccine, next: nextDue, when: nextDue ? describeDaySw(nextDue, ctx.today) : "" });
  }
  if ((m = /^(?:onyesha|orodhesha)\s+chanjo (?:za|ya)\s+(?:mgonjwa\s+)?(.+)$/i.exec(t)) || (m = /^chanjo za\s+(?:mgonjwa\s+)?(.+)$/i.exec(t))) {
    const found = await resolveSw(ctx, m[1], { quiet: true });
    if (found?.reply) return found.reply;
    if (!found) return null;
    const doses = (await listOf(ctx, "dose")).filter(dose => dose.data.pid === found.patient.memoryId).sort((a, b) => b.data.day.localeCompare(a.data.day));
    if (!doses.length) return SW.noDoses({ name: found.patient.data.name });
    return SW.doses({ who: tagSw(found.patient), lines: doses.slice(0, 10).map(dose => `${dose.data.vaccine} ${dose.data.day}${dose.data.nextDue ? ` ${SW.nextWord({ when: describeDaySw(dose.data.nextDue, ctx.today) })}` : ""}`).join("; ") });
  }
  if ((m = /^(?:nani|watoto gani|wagonjwa gani|akina mama gani) (?:anastahili|wanastahili|anahitaji|wanahitaji|anatakiwa|wanatakiwa) (?:kupata )?chanjo(?: (wiki hii|mwezi huu|leo|hivi karibuni))?$/i.exec(t)) || (m = /^chanjo zipi (?:zinatakiwa|zinastahili|zimechelewa)(?: (wiki hii|mwezi huu|leo|hivi karibuni))?$/i.exec(t))) {
    const patients = nameMap(await listOf(ctx, "patient"));
    if (!patients.size) return null;
    const month = /mwezi huu/i.test(m[1] || ""); const horizon = month ? `${ctx.today.slice(0, 7)}-31` : addDays(ctx.today, 14);
    const due = outstanding(await listOf(ctx, "dose")).filter(dose => patients.has(dose.data.pid) && dose.data.nextDue <= horizon).sort((a, b) => a.data.nextDue.localeCompare(b.data.nextDue));
    if (!due.length) return SW.dueNone({ span: month ? SW.dueSpanMonth : SW.dueSpanWeeks });
    return SW.dueList({ n: due.length, lines: due.slice(0, 10).map(dose => `${tagSw(patients.get(dose.data.pid))} — ${dose.data.vaccine}, ${dose.data.nextDue < ctx.today ? SW.overdue({ when: describeDaySw(dose.data.nextDue, ctx.today) }) : describeDaySw(dose.data.nextDue, ctx.today)}`).join("; "), more: due.length > 10 });
  }

  // =========================== pregnancies ===========================
  const DUE_WORDS = "(?:anatarajiwa kujifungua|anatarajia kujifungua|tarehe ya kujifungua|atajifungua|edd)";
  if ((!askOf(t) && (m = new RegExp(`^(.+?)\\s+(?:ni mjamzito|ana mimba|ana ujauzito|amepata mimba)(?:[,;]?\\s*${DUE_WORDS}\\s*(.+))?$`, "i").exec(t))) || (m = new RegExp(`^(?:sajili|andika|anza)\\s+(?:mimba|ujauzito)\\s+(?:ya|kwa)\\s+(.+?)(?:[,;]?\\s*${DUE_WORDS}\\s*(.+))?$`, "i").exec(t))) {
    const found = await resolveSw(ctx, m[1], { quiet: true });
    if (found?.reply) return found.reply;
    if (!found) return null;
    const due = m[2] ? dayFrom(m[2], ctx.today) : null; const first = firstName(found.patient);
    if (!due || due < ctx.today || due > addDays(ctx.today, 320)) return SW.askDue({ first });
    const existing = (await listOf(ctx, "pregnancy")).find(item => item.data.pid === found.patient.memoryId && item.data.status === "open");
    if (existing) { await ctx.store.update({ ...scope, record: { ...existing, data: { ...existing.data, due } } }); return SW.dueUpdated({ who: tagSw(found.patient), when: describeDaySw(due, ctx.today) }); }
    await record(ctx, "pregnancy", { pid: found.patient.memoryId, due, status: "open", since: ctx.today });
    if (ctx.personal?.add) await ctx.personal.add({ kind: "event", text: `Kujifungua kunatarajiwa mgonjwa ${found.patient.number}`, day: due, time: "" });
    return SW.pregnant({ who: tagSw(found.patient), when: describeDaySw(due, ctx.today), first });
  }
  if (!askOf(t) && (m = /^(.+?)\s+amejifungua(?:\s+(.*))?$/i.exec(t))) {
    const found = await resolveSw(ctx, m[1], { quiet: true });
    if (found?.reply) return found.reply;
    if (!found) return null;
    const rest = clean(m[2] || ""); const on = /(?:^|\s)(?:tarehe|mnamo)\s+(.+)$/i.exec(rest) || /(?:^|\s)(jana|leo)$/i.exec(rest);
    let day = ctx.today;
    if (on) { const english = dayInEnglish(on[1]); day = english ? pastDay(english, ctx.today) : null; }
    if (!day || day > ctx.today) return SW.askDelivered;
    const outcome = clean(on ? rest.slice(0, on.index) : rest).slice(0, 80);
    const open = (await listOf(ctx, "pregnancy")).find(item => item.data.pid === found.patient.memoryId && item.data.status === "open");
    if (open) await ctx.store.update({ ...scope, record: { ...open, data: { ...open.data, status: "delivered", deliveredOn: day, outcome } } });
    else await record(ctx, "pregnancy", { pid: found.patient.memoryId, due: null, status: "delivered", deliveredOn: day, outcome, since: day });
    return SW.delivered({ who: tagSw(found.patient), when: day === ctx.today ? "leo" : describeDaySw(day, ctx.today), outcome, first: firstName(found.patient) });
  }
  if ((m = /^(?:nani|akina mama gani|wagonjwa gani) (?:ni mjamzito|ni wajawazito|wanatarajiwa kujifungua|anatarajiwa kujifungua)(?: (mwezi huu|mwezi ujao|hivi karibuni|wiki hii))?$/i.exec(t)) || (m = /^(?:onyesha|orodhesha) (?:wajawazito wangu|wajawazito|orodha ya wajawazito|mimba zangu)(?: (mwezi huu|mwezi ujao|hivi karibuni|wiki hii))?$/i.exec(t)) || (m = /^wajawazito (?:wangu|wanaotarajiwa kujifungua)(?: (mwezi huu|mwezi ujao|hivi karibuni|wiki hii))?$/i.exec(t))) {
    const patients = nameMap(await listOf(ctx, "patient"));
    if (!patients.size) return null;
    const when = (m[1] || "").toLowerCase();
    let open = (await listOf(ctx, "pregnancy")).filter(item => item.data.status === "open" && patients.has(item.data.pid)).sort((a, b) => a.data.due.localeCompare(b.data.due));
    if (when === "mwezi huu") open = open.filter(item => item.data.due.slice(0, 7) === ctx.today.slice(0, 7));
    else if (when === "mwezi ujao") { const next = addDays(`${ctx.today.slice(0, 7)}-28`, 5).slice(0, 7); open = open.filter(item => item.data.due.slice(0, 7) === next); }
    else if (when) open = open.filter(item => item.data.due <= addDays(ctx.today, when === "hivi karibuni" ? 28 : 7));
    if (!open.length) return SW.pregNone;
    return SW.pregList({ n: open.length, lines: open.slice(0, 10).map(item => `${tagSw(patients.get(item.data.pid))} — ${SW.expected({ when: describeDaySw(item.data.due, ctx.today) })}${item.data.due < ctx.today ? SW.passed : ""}`).join("; "), more: open.length > 10 });
  }

  // =========================== the clinic's medicines and supplies ===========================
  let cache = null; const load = async () => (cache || (cache = await listOf(ctx, "supply")));
  const update = (item, patch) => ctx.store.update({ ...scope, record: { ...item, data: { ...item.data, ...patch, updatedOn: ctx.today } } });
  // stock coming in: "Ongeza vidonge 100 vya paracetamol kwenye stoo ya kliniki, inaisha muda 31 Machi 2027" / "Nimepokea sanduku 2 za glavu kliniki"
  const exp = /[,;]?\s*(?:inaisha muda|itaisha muda|tarehe ya kuisha(?: muda)?(?: ni)?|muda wa kuisha(?: ni)?)\s*(?:tarehe |mnamo )?(.+)$/i.exec(t);
  const stripped = exp ? clean(t.slice(0, exp.index)) : t;
  let incoming = null;
  if ((m = /^(?:tafadhali\s+)?(?:ongeza|weka|andika)\s+(.+?)\s+(?:kwenye|katika|ndani ya|kwa)\s+(?:stoo|akiba|hifadhi)\s+(?:ya|za)\s+(?:kliniki|dawa|zahanati|dispensari|vifaa vya matibabu|famasia|duka la dawa)$/i.exec(stripped))) incoming = m[1];
  else if ((m = /^(?:nimepokea|tumepokea|nimeletewa|tumeletewa)\s+(.+?)(?:\s+(?:kliniki|zahanati|dispensari|kituo cha afya|famasia))?$/i.exec(stripped))) incoming = m[1];
  if (incoming) {
    const quantity = supQty(incoming);
    if (quantity) {
      const items = await load(); const name = tidy(stripQty(incoming, quantity)); const known = soleSupply(items, name);
      if (name && (HEALTH_CTX.test(t) || known)) {
        let expiry = null;
        if (exp) { expiry = dayFrom(exp[1], ctx.today); if (!expiry) return SW.askExpiry({ text: clean(exp[1]) }); if (expiry < ctx.today) return SW.expiredAlready; }
        if (known && known.data.unit !== quantity.unit) return SW.wrongUnit({ name: known.data.name, unit: SUP_SHOWN[known.data.unit] || known.data.unit });
        if (known) {
          const nearest = expiry && (!known.data.expiry || expiry < known.data.expiry) ? expiry : known.data.expiry; const now = Math.round((known.data.qty + quantity.value) * 1000) / 1000;
          await update(known, { qty: now, ...(nearest ? { expiry: nearest } : {}) });
          return SW.added({ qty: qtyShown(quantity.value, quantity.unit), name: known.data.name, now: qtyShown(now, quantity.unit), expiry: expiry ? describeDaySw(nearest, ctx.today) : "" });
        }
        if (items.length >= 1000) return SW.supplyFull;
        await record(ctx, "supply", { name, qty: quantity.value, unit: quantity.unit, low: null, expiry: expiry || null, updatedOn: ctx.today });
        return SW.added({ qty: qtyShown(quantity.value, quantity.unit), name, now: "", expiry: expiry ? describeDaySw(expiry, ctx.today) : "" });
      }
    }
  }
  // stock going out: "Nimetoa vidonge 10 vya paracetamol kwa Mary"
  if ((m = /^(nimetoa|nimegawa|nimewagawia|nimempa|nimemgawia|nimemtolea|nimetumia|nimehudumia)\s+(.+?)(?:\s+kwa\s+(?:mgonjwa\s+)?([A-Za-z][A-Za-z' -]{0,40}))?$/i.exec(t))) {
    const quantity = supQty(m[2]);
    if (quantity) {
      const items = await load(); const strong = /^(?:nimetoa|nimegawa|nimewagawia)$/i.test(m[1]);
      const name = tidy(stripQty(m[2], quantity)); const item = soleSupply(items, name);
      if (name && (item || (strong && items.length && HEALTH_CTX.test(t)))) {
        if (!item) return SW.notInStock({ name, qty: quantity.value, unit: SUP_SHOWN[quantity.unit] || quantity.unit });
        if (item.data.unit !== quantity.unit) return SW.wrongUnit({ name: item.data.name, unit: SUP_SHOWN[item.data.unit] || item.data.unit });
        if (quantity.value > item.data.qty) return SW.onlyHave({ have: qtyShown(item.data.qty, item.data.unit), name: item.data.name, qty: quantity.value });
        let attach = null; let note = "";
        if (m[3]) { const found = await resolveSw(ctx, m[3], { quiet: true }); if (found?.reply) return found.reply; if (found?.patient) attach = found.patient; else note = SW.notRegistered({ who: clean(m[3]) }); }
        const left = Math.round((item.data.qty - quantity.value) * 1000) / 1000;
        await update(item, { qty: left });
        await record(ctx, "dispense", { item: item.data.name, qty: quantity.value, unit: item.data.unit, day: ctx.today, ...(attach ? { pid: attach.memoryId } : {}) });
        const low = item.data.low !== null && item.data.low !== undefined && left <= item.data.low;
        return SW.gaveOut({ qty: qtyShown(quantity.value, item.data.unit), name: item.data.name, to: attach ? tagSw(attach) : "", left: qtyShown(left, item.data.unit), note, last: left === 0, low });
      }
    }
  }
  if ((m = /^(?:rekebisha|badilisha|weka) hesabu ya (.+?) (?:kuwa|iwe) (\d[\d,]*(?:\.\d+)?)$/i.exec(t))) {
    const item = soleSupply(await load(), m[1]);
    if (item) { const qty = Number(m[2].replace(/,/g, "")); await update(item, { qty }); return SW.countSet({ name: item.data.name, qty: qtyShown(qty, item.data.unit) }); }
  }
  if ((m = /^(?:nina|tuna) (.+?) kiasi gani(?: (?:kliniki|kwenye stoo|stoo ya kliniki|zahanatini))?$/i.exec(t))) {
    const item = soleSupply(await load(), m[1]);
    if (item) return SW.have({ qty: qtyShown(item.data.qty, item.data.unit), name: item.data.name, expiry: item.data.expiry ? describeDaySw(item.data.expiry, ctx.today) : "" });
  }
  if ((m = /^(?:tafadhali\s+)?(?:niarifu|nikumbushe|nionye)\s+(?:(?:wakati|ikiwa|kama|pale)\s+)?(.+?)\s+(?:inaposhuka|ikishuka|inapofika|ikifika|ikiwa|inapokuwa)\s+(?:chini ya|pungufu ya)\s+(\d[\d,]*(?:\.\d+)?)(?:\s+.*)?$/i.exec(t))) {
    const item = soleSupply(await load(), m[1]);
    if (item) { const low = Number(m[2].replace(/,/g, "")); await update(item, { low }); return SW.warned({ name: item.data.name, low: qtyShown(low, item.data.unit) }); }
  }
  if ((m = /^(?:weka )?tarehe ya kuisha (?:muda )?(?:kwa|ya) (.+?) (?:ni|kuwa) (.+)$/i.exec(t)) || (m = /^(.+?) (?:inaisha muda|itaisha muda) (?:tarehe |mnamo )?(.+)$/i.exec(t))) {
    const item = soleSupply(await load(), m[1]);
    if (item) { const day = dayFrom(m[2], ctx.today); if (!day) return SW.noDate({ text: clean(m[2]) }); if (day < ctx.today) return SW.pastDate; await update(item, { expiry: day }); return SW.expirySet({ name: item.data.name, when: describeDaySw(day, ctx.today) }); }
  }
  if (/^(?:dawa|vifaa) (?:zipi|gani|vipi) (?:zinaisha|zimeisha|zinapungua|vinaisha|vimeisha|vinapungua)$/.test(lower) || /^(?:onyesha|orodhesha) (?:dawa|vifaa) (?:zinazopungua|zilizoisha|vinavyopungua|vilivyoisha)$/.test(lower)) {
    const items = await load();
    if (!items.length) return SW.stockEmpty;
    const out = items.filter(item => item.data.qty === 0); const low = items.filter(item => item.data.qty > 0 && item.data.low !== null && item.data.low !== undefined && item.data.qty <= item.data.low);
    if (!out.length && !low.length) return SW.lowNone;
    return `${out.length ? SW.out({ names: out.map(item => item.data.name).join(", ") }) : ""}${low.length ? SW.low({ names: low.map(item => `${item.data.name} (${qtyShown(item.data.qty, item.data.unit)})`).join(", ") }) : ""}`.trim();
  }
  if (/^(?:dawa|vifaa) (?:zipi|gani|vipi) (?:zinakaribia kuisha muda|zinaisha muda|vinakaribia kuisha muda|vinaisha muda)$/.test(lower) || /^(?:onyesha|orodhesha) (?:dawa|vifaa) (?:zinazokaribia kuisha muda|vinavyokaribia kuisha muda)$/.test(lower)) {
    const soon = (await load()).filter(item => item.data.expiry && item.data.expiry <= addDays(ctx.today, 90)).sort((a, b) => a.data.expiry.localeCompare(b.data.expiry));
    if (!soon.length) return SW.expNone;
    return SW.expList({ lines: soon.slice(0, 10).map(item => `${item.data.name} — ${item.data.expiry < ctx.today ? SW.expired({ when: describeDaySw(item.data.expiry, ctx.today) }) : describeDaySw(item.data.expiry, ctx.today)}`).join("; ") });
  }
  if (/^(?:onyesha|orodhesha|nisomee) (?:stoo yangu ya kliniki|stoo ya kliniki|akiba ya kliniki|akiba yangu ya kliniki|stoo yangu ya dawa|dawa zangu|vifaa vyangu vya matibabu)$/.test(lower) || /^kuna nini (?:kwenye|katika) (?:stoo|akiba) ya (?:kliniki|dawa)$/.test(lower)) {
    const items = await load();
    if (!items.length) return SW.stockEmpty;
    return SW.stockList({ n: items.length, lines: items.slice().reverse().slice(0, 15).map(item => `${item.data.name} ${qtyShown(item.data.qty, item.data.unit)}`).join("; "), more: Math.max(0, items.length - 15) });
  }
  if ((m = /^(?:tafadhali\s+)?(?:ondoa|futa) (.+?) (?:kwenye|katika|kutoka) (?:stoo|akiba) (?:ya|yangu ya) (?:kliniki|dawa)$/i.exec(t))) {
    const item = soleSupply(await load(), m[1]);
    if (item) return askConfirmSw(ctx, SW.removeAsk({ name: item.data.name, qty: qtyShown(item.data.qty, item.data.unit) }), { type: "remove-record-sw", memoryId: item.memoryId, label: item.data.name });
  }

  // =========================== referral letters ===========================
  if ((m = /^(?:tafadhali\s+)?(?:andika|tengeneza|chapisha|andaa|toa)\s+(?:barua ya rufaa|rufaa)\s+(?:ya|kwa)\s+(?:mgonjwa\s+)?(.+?)(?:\s+kwenda\s+(.+?))?(?:\s*[:,-]\s*(?:sababu\s*[:=-]?\s*)?(.+?))?(?:\s+(?:kama|kwa muundo wa)\s+(?:a\s+)?(pdf|word|docx))?(?:\s+kwa kiingereza)?$/i.exec(t))) {
    const found = await resolveSw(ctx, m[1], { quiet: true });
    if (found?.reply) return found.reply;
    if (!found) return null;
    const destination = clean(m[2] || "").replace(/[:,-]+$/g, "").replace(/\s+kwa kiingereza$/i, "");
    if (!destination) return SW.askWhere({ name: found.patient.data.name, first: firstName(found.patient) });
    const reason = clean(m[3] || "").replace(/\s+kwa kiingereza$/i, "").slice(0, 300);
    const english = asEnglish(t);
    const content = english ? await require("./referrals.js").letter(ctx, found.patient, placeName(destination), reason) : await letterSw(ctx, found.patient, placeName(destination), reason);
    const same = (await listOf(ctx, "referral")).some(item => item.data.pid === found.patient.memoryId && item.data.to === placeName(destination) && item.data.day === ctx.today);
    if (!same) await record(ctx, "referral", { pid: found.patient.memoryId, to: placeName(destination), reason, day: ctx.today });
    return { report: { title: `${english ? "Referral letter" : "Barua ya rufaa"} - ${found.patient.data.name}`, content, format: formatOf(t) || "txt" } };
  }
  if ((m = /^(?:onyesha|orodhesha) rufaa zangu(?: (leo|wiki hii|wiki iliyopita|mwezi huu|mwezi uliopita|mwaka huu))?$/i.exec(t))) {
    const patients = nameMap(await listOf(ctx, "patient")); if (!patients.size) return null;
    const period = periodSw(m[1] || "mwezi huu", ctx.today, "this month");
    const list = (await listOf(ctx, "referral")).filter(item => patients.has(item.data.pid) && item.data.day >= period.from && item.data.day <= period.to);
    return list.length ? SW.referrals({ n: list.length, period: period.label, lines: list.slice(0, 10).map(item => `${tagSw(patients.get(item.data.pid))} kwenda ${item.data.to} tarehe ${item.data.day}`).join("; ") }) : SW.referralsNone({ period: period.label });
  }

  // =========================== reports ===========================
  const wants = "(?:tafadhali\\s+)?(?:chapisha|tengeneza|andaa|toa|hamisha|nipe)";
  if ((m = new RegExp(`^${wants}\\s+(?:rekodi|faili) ya\\s+(?:mgonjwa\\s+)?(.+?)(?:\\s+(?:kama|kwa muundo wa)\\s+(?:a\\s+)?(pdf|word|docx|maandishi))?$`, "i").exec(t))) {
    const found = await resolveSw(ctx, m[1], { quiet: true });
    if (found?.reply) return found.reply;
    if (!found) return null;
    return { report: { ...(await patientFileSw(ctx, found.patient)), format: formatOf(t) || "txt" } };
  }
  if (new RegExp(`^${wants}\\s+(?:orodha ya wagonjwa|daftari la wagonjwa)(?:\\s+(?:kama|kwa muundo wa)\\s+(?:a\\s+)?(?:pdf|word|docx|maandishi))?$`, "i").test(t)) {
    const patients = await listOf(ctx, "patient");
    if (!patients.length) return SW.noPatients;
    const content = `${await header(ctx, "Daftari la wagonjwa")}${patients.slice().reverse().map(patient => `  ${patientLineSw(patient, ctx.today)}${patient.data.contact ? ` — ${patient.data.contact}` : ""}`).join("\n")}\n\nJumla: ${patients.length}${FOOT}`;
    return { report: { title: "Daftari la wagonjwa", content, format: formatOf(t) || "txt" } };
  }
  if (new RegExp(`^${wants}\\s+ripoti(?: ya (?:kila mwezi|mwezi(?: huu| uliopita)?|shughuli|kliniki|afya|huduma|wiki hii|mwaka huu))?(?: ya (?:${MONTH_NAMES.join("|")})(?: \\d{4})?)?(?:\\s+(?:kama|kwa muundo wa)\\s+(?:a\\s+)?(?:pdf|word|docx|maandishi))?$`, "i").test(t) && new RegExp(`\\b(?:mwezi|shughuli|kliniki|afya|huduma|${MONTH_NAMES.join("|")})\\b`, "i").test(t) && (await ctx.hasHealthData())) {
    const made = await monthlySw(ctx, t);
    return made ? { report: { ...made, format: formatOf(t) || "txt" } } : SW.noReportData;
  }

  // =========================== the worker's own details ===========================
  if ((m = /^(?:weka|badilisha|sasisha)\s+taarifa za kliniki yangu\s*[:,-]\s*(.+)$/i.exec(t))) {
    const parts = m[1].split(/\s*,\s*/).map(clean).filter(Boolean);
    const role = ROLES.find(([pattern]) => pattern.test(parts[0] || ""));
    if (!role) return SW.askRole;
    const data = { role: role[1], facility: parts[1] ? placeName(parts[1]) : "", area: parts[2] ? placeName(parts[2]) : "" };
    const existing = (await listOf(ctx, "clinic"))[0];
    if (existing) await ctx.store.update({ ...scope, record: { ...existing, data } }); else await ctx.store.add({ ...scope, collection: "clinic", data });
    return SW.profileSaved({ text: describeClinicSw(data) });
  }
  if (/^(?:onyesha|nisomee) taarifa za kliniki yangu$/.test(lower)) {
    const profile = (await listOf(ctx, "clinic"))[0];
    return profile ? SW.profileShown({ text: describeClinicSw(profile.data) }) : SW.profileNone;
  }

  // =========================== a copy of everything, and erasing ===========================
  if (/^(?:tafadhali\s+)?(?:hamisha|pakua|nakili|nipe nakala ya|tengeneza nakala ya)\s+(?:rekodi|data|taarifa) zangu zote za (?:wagonjwa|afya|kliniki)(?:\s+(?:kama|kwa muundo wa|katika)\s+(?:a\s+)?(?:json|pdf|word|docx|maandishi|txt|markdown|md))?$/i.test(t)) {
    if (!(await ctx.hasHealthData())) return null;
    const built = await build(ctx); const format = formatOf(t) || "json";
    if (!built.patients.length && built.records === 0) return SW.exportNone;
    const content = format === "json" ? JSON.stringify(built.json, null, 2)
      : `${await header(ctx, "Nakala ya rekodi za afya")}Wagonjwa: ${built.counts.patients}, ziara: ${built.counts.visits}, chanjo: ${built.counts.immunisations}, rufaa: ${built.counts.referrals}\n${"=".repeat(60)}\n\n${(await Promise.all(built.patients.slice().reverse().map(async patient => (await patientFileSw(ctx, patient)).content))).join(`\n\n${"=".repeat(60)}\n\n`)}\n\nSTOO YA KLINIKI (${built.json.clinicStock.length})\n${built.json.clinicStock.map(item => `  ${item.name}: ${qtyShown(item.quantity, item.unit)}${item.nearestExpiry ? `, tarehe ya karibu ya kuisha muda ${item.nearestExpiry}` : ""}`).join("\n") || "  hakuna"}`;
    await record(ctx, "audit", { event: "export", day: ctx.today, patients: built.counts.patients, records: built.records, format });
    return { report: { title: `Nakala ya rekodi za afya ${ctx.today}`, content, format } };
  }
  if (/^(?:tafadhali\s+)?(?:futa|teketeza|ondoa kabisa)\s+(?:rekodi|data|taarifa) zangu zote za (?:wagonjwa|afya|kliniki)(?: kabisa)?$/i.test(t)) {
    if (!(await ctx.hasHealthData())) return null;
    if (!ctx.store.purgeAll) return SW.eraseUnavailable;
    const built = await build(ctx);
    await ctx.store.setSession({ tenantId: ctx.tenantId, userId: ctx.userId, session: { collection: "_confirm", answers: {}, asking: "confirm", action: { type: "erase-all-sw", phrase: ERASE_PHRASE, language: "sw" }, expiresAt: new Date(Date.now() + 10 * 60000).toISOString() } });
    return SW.eraseAsk({ patients: built.counts.patients, visits: built.counts.visits, doses: built.counts.immunisations, referrals: built.counts.referrals });
  }
  if (/^(?:tafadhali\s+)?(?:futa|teketeza)\s+(?:kabisa\s+)?rekodi (?:zangu )?(?:za wagonjwa )?(?:nilizoondoa|zilizoondolewa)(?: kabisa)?$/i.test(t)) {
    if (!ctx.store.purgeRemoved || !ctx.store.countRemoved) return SW.eraseUnavailable;
    const removed = await ctx.store.countRemoved(scope);
    if (!removed) return (await ctx.hasHealthData()) ? SW.eraseNothing : null;
    return askConfirmSw(ctx, SW.eraseRemovedAsk({ n: removed }), { type: "erase-removed-sw" });
  }
  if (/^(?:onyesha|orodhesha) kumbukumbu ya data yangu$/i.test(t)) {
    const log = await listOf(ctx, "audit");
    if (!log.length) return SW.logNone;
    return SW.logHead({ lines: log.slice(0, 12).map(item => { const d = item.data; return `${d.day} — ${d.event === "export" ? SW.logExport({ n: d.patients, records: d.records, format: d.format }) : d.event === "erase-all" ? SW.logEraseAll({ n: d.records }) : d.event === "erase-removed" ? SW.logEraseRemoved({ n: d.records }) : d.event === "patient-removed" ? SW.logPatientRemoved({ n: d.patient, r: d.records }) : d.event}`; }).join("; ") });
  }
  if ((m = /^(?:tafadhali\s+)?(?:ondoa|futa)\s+mgonjwa\s+(.+)$/i.exec(t))) {
    const found = await resolveSw(ctx, m[1], { quiet: true });
    if (found?.reply) return found.reply;
    if (!found) return null;
    return askConfirmSw(ctx, SW.removePatientAsk({ name: found.patient.data.name, number: found.patient.number }), { type: "remove-patient-sw", memoryId: found.patient.memoryId, label: found.patient.data.name, number: found.patient.number });
  }
  return null;
}

// After a yes (or the exact words for erasing everything): the same actions as the English tools, said in Swahili.
const confirms = {
  "remove-record-sw": async (ctx, action) => (await ctx.store.remove({ tenantId: ctx.tenantId, userId: ctx.userId, memoryId: action.memoryId }) ? SW.removedItem({ name: action.label }) : SW.goneItem({ name: action.label })),
  "remove-patient-sw": async (ctx, action) => {
    const scope = { tenantId: ctx.tenantId, userId: ctx.userId }; let removed = 0;
    for (const collection of ["visit", "dose", "pregnancy", "followup", "referral", "dispense"]) {
      for (const item of await ctx.store.list({ ...scope, collection })) if (item.data.pid === action.memoryId && await ctx.store.remove({ ...scope, memoryId: item.memoryId })) removed += 1;
    }
    const gone = await ctx.store.remove({ ...scope, memoryId: action.memoryId });
    if (gone) await record(ctx, "audit", { event: "patient-removed", day: ctx.today, patient: action.number, records: removed }); // a number and a count, never a name
    return gone ? SW.removedPatient({ name: action.label, n: removed }) : SW.gone({ name: action.label });
  },
  "erase-all-sw": async ctx => {
    const built = await build(ctx); const done = await ctx.store.purgeAll({ tenantId: ctx.tenantId, userId: ctx.userId });
    if (done.blocked) return SW.hold;
    await record(ctx, "audit", { event: "erase-all", day: ctx.today, records: built.records, patients: built.counts.patients });
    return SW.erasedAll({ n: built.counts.patients });
  },
  "erase-removed-sw": async ctx => {
    const done = await ctx.store.purgeRemoved({ tenantId: ctx.tenantId, userId: ctx.userId });
    if (done.blocked) return SW.hold;
    await record(ctx, "audit", { event: "erase-removed", day: ctx.today, records: done.purged });
    return SW.erasedRemoved({ n: done.purged });
  }
};

module.exports = Object.freeze({ handle, confirms, SW, ERASE_PHRASE, describeClinicSw, monthlySw, patientFileSw, letterSw, reportPeriod, supQty, qtyShown });
