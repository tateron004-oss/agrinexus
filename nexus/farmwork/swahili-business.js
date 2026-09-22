"use strict";

const { clean, round, num, plural } = require("./parse.js");
const { addDays } = require("../personal/dates.js");
const { loanNumbers } = require("./budget.js");
const { nameKey } = require("./fields.js");
const { sum, profitOf } = require("./money.js");
const { findParty } = require("./parties.js");
const reportsEnglish = require("./reports.js");
const { describeFarmSw, describeAnimalSw } = require("./swahili-land.js");
const { parseQuantitySw, unitLabelSw, parseMoneySw, moneyShown, englishItem, swahiliItem, periodSw, describeDaySw, categorySw, UNIT_WORD, NUMBER, CURRENCY_WORDS } = require("../i18n/swahili-words.js");

// Loan, budget and break-even arithmetic, printable reports, and the farm safety guides, in Swahili. The arithmetic is only sums on the numbers the farmer gives
// (it does not know a lender's real terms) and says so every time. Reports contain only what was recorded. The safety guides are general and conservative and
// say they do not replace a health worker, vet, product label or local rules.
// IMPORTANT: the first-response guides (pesticide poisoning, snakebite, animal injury) must be checked by a health professional in the country of use before
// anyone relies on them: see the Swahili review sheet. First draft: a fluent speaker must review every word.
const NOTE = "Hizi ni hesabu tu za namba ulizonipa; masharti halisi ya mkopeshaji, ada na adhabu vinaweza kuwa tofauti, kwa hivyo mwombe ratiba kamili.";
const SW = {
  loanMissingRate: ({ amount }) => `Nina kiasi cha mkopo (${amount}), lakini nahitaji riba, kama "riba ya 12%" (sema "kwa mwezi" ikiwa ni ya kila mwezi).`, loanMissingTerm: ({ amount }) => `Nina kiasi cha mkopo (${amount}), lakini nahitaji muda, kama "kwa miezi 12" au "kwa miaka 2".`,
  loanBad: "Namba hizo hazionekani sawa (kiasi, riba chini ya 200%, na muda wa mwezi 1 hadi 360), kwa hivyo sijahesabu chochote.",
  loanLine: ({ amount, rate, months, flat, monthly, total, interest }) => `Mkopo wa ${amount}, riba ${rate}, muda wa miezi ${months}${flat ? " (riba tambarare)" : ""}: takriban ${monthly} kwa mwezi, ${total} zitalipwa kwa jumla, ambapo ${interest} ni riba.`,
  loanNeedRecords: "Ili kukuambia kama unaweza kumudu, nahitaji rekodi zako za mapato na matumizi; sema \"nimetumia 5000 kwa mbegu\" na \"nimeuza kilo 200 za mahindi kwa 9000\" yanapotokea.", loanMixed: "Rekodi zako zina zaidi ya sarafu moja, kwa hivyo siwezi kulinganisha.",
  loanNoProfit: ({ months, profit }) => `Faida uliyorekodi katika miezi ${months} iliyopita ilikuwa ${profit}, kwa hivyo hakuna kinachobaki kwa malipo sasa hivi. Hii inalinganisha tu ulichorekodi; si ushauri wa kifedha.`,
  loanShare: ({ perMonth, months, share, high }) => `Faida uliyorekodi ilikuwa wastani wa ${perMonth} kwa mwezi katika miezi ${months}, kwa hivyo malipo yangechukua takriban asilimia ${share} yake${high ? " — hiyo ni kubwa, na mapato ya shamba yanaweza kubadilika sana kulingana na misimu" : ""}. Hii inalinganisha tu ulichorekodi; si ushauri wa kifedha.`,
  beNeed: ({ field, cost }) => `Ili kukokotoa bei ya kuvunja hasara nahitaji gharama na unachotarajia kuvuna, kama "bei ya kuvunja hasara: gharama 60000, natarajia kilo 800"${field ? `. Kwa ${field} ${cost}.` : "."}`, beNoSpend: "sina matumizi yaliyorekodiwa bado", beNoYield: ({ field }) => `nahitaji mavuno unayotarajia — sema "natarajia kilo 800 kutoka shamba ${field}"`,
  beBase: ({ cost, qty, field, price }) => `Kufidia gharama za ${cost} kutoka ${qty}${field ? ` (${field})` : ""}, unahitaji kuuza kwa takriban ${price}.`, beAsk: "Niambie bei ya kuuza nami nitahesabu faida.",
  beProfit: ({ price, revenue, gain, amount, pct }) => `Kwa ${price}, ungepata ${revenue}, ${gain ? "faida" : "hasara"} ya ${amount} (asilimia ${pct} ya gharama). Bei na mavuno hubadilika, kwa hivyo chukulia hii kama mpango, si ahadi.`,
  budgetAsk: "Orodhesha gharama zako kama \"panga bajeti: mbegu 5000, mbolea 8000, vibarua 12000, natarajia kilo 800 kwa shilingi 60 kwa kilo\".",
  budgetHead: ({ what, lines, total }) => `Bajeti${what ? ` ya ${what}` : ""}: ${lines} — ${total} kwa jumla.`, budgetBreak: ({ qty, price }) => `Ukitarajia ${qty}, unahitaji kuuza kwa takriban ${price} ili kuvunja hasara.`, budgetProfit: ({ price, revenue, gain, amount }) => `Kwa ${price} hiyo ni ${revenue}, ${gain ? "faida" : "hasara"} ya ${amount}.`, budgetNote: "Mpango, si ahadi: hali ya hewa, bei na wadudu hubadilisha kila namba.",
  // reports
  reportNone: ({ label }) => `Sina kitu kilichorekodiwa bado kwa ${label}, kwa hivyo hakuna cha kuchapisha.`, receiptNone: ({ who }) => `Sina maagizo yaliyotolewa wala mauzo yaliyorekodiwa ya ${who} ya kuweka kwenye stakabadhi. Rekodi mauzo ("nimeuza kilo 200 za mahindi kwa Amina kwa 9000") au toa agizo kwanza.`,
  // guides
  listGuides: ({ safety, practice }) => `Miongozo ya shamba ninayotunza, bila kuhitaji intaneti — usalama: ${safety}. Mazoea ya kilimo: ${practice}. Sema "soma mwongozo wa kuumwa na nyoka" au "mwongozo: kuhifadhi nafaka".`,
  noGuide: "Sina mwongozo kuhusu hilo. Sema \"orodhesha miongozo ya shamba\" kuona ninachotunza, na muulize afisa ugani au mhudumu wa afya kuhusu mengine.", severalGuides: ({ titles }) => `Miongozo kadhaa inaweza kufaa: ${titles}. Ipi?`
};

const EMERGENCY = "Katika dharura, piga simu kwenye namba ya dharura ya eneo lako au fika kituo cha afya sasa hivi.";
const SAFETY_NOTE = "Hii ni taarifa ya jumla ya usalama, si mbadala wa mhudumu wa afya, daktari wa mifugo, lebo ya bidhaa au sheria za eneo lako.";
const PRACTICE_NOTE = "Mwongozo wa jumla wa kilimo; hakikisha kinachofaa hali ya eneo lako na afisa ugani.";
const GUIDES = [
  { id: "pesticide-safety", title: "Kutumia dawa za kuua wadudu kwa usalama", kind: "safety", keywords: ["dawa", "kunyunyizia", "kunyunyiza", "kemikali", "wadudu", "magugu", "viuatilifu"],
    text: "Soma lebo kabla ya kila matumizi na ifuate kikamilifu: dawa sahihi, zao sahihi, kiasi sahihi. Usiichanganye kwa nguvu zaidi ya lebo inavyosema. Vaa kile lebo inachoagiza: glavu, mavazi marefu ya mikono na suruali, buti, barakoa au kifaa cha kupumua, na kinga ya macho. Usile, usinywe wala usivute sigara unaponyunyizia, na osha mikono na uso kabla ya kula. Usinyunyizie upepo ukiwa mkali au jua likiwa kali la mchana, waweke watoto na wanyama mbali, na uweke kemikali mbali na mito, visima na mabwawa. Fua nguo za kunyunyizia kando na nguo za familia. Usitumie tena chombo kitupu cha kemikali kwa chakula au maji; kisuuze mara tatu, mimina maji ya kusuuza kwenye tangi la kunyunyizia, na ukitupe kama sheria za eneo lako zinavyosema." },
  { id: "chemical-storage", title: "Kuhifadhi kemikali za shamba", kind: "safety", keywords: ["kuhifadhi", "hifadhi", "kemikali", "dawa", "mbolea", "kufuli"],
    text: "Weka kemikali kwenye vyombo vyake vya asili vyenye lebo, kamwe si kwenye chupa za vinywaji au vyombo vya chakula. Zihifadhi zikiwa zimefungwa kwa kufuli, mbali na watoto na wanyama, mahali penye ubaridi na pakavu, mbali na chakula, chakula cha mifugo, mbegu na maji. Weka mbolea ikiwa kavu na mbali na mafuta na moto. Andika orodha ya ulichonacho na angalia kama kuna uvujaji. Kamwe usihifadhi kemikali ndani ya nyumba wanapolala watu." },
  { id: "pesticide-poisoning", title: "Hatua za kwanza: sumu ya dawa ya wadudu au kumwagikiwa", kind: "emergency", keywords: ["sumu", "kumeza", "kumwagikiwa", "kumwagika", "dawa", "kemikali", "kunyunyizia", "wadudu"],
    text: `${EMERGENCY} Chukua chombo au lebo yake pamoja nawe. Mwondoe mtu kutoka kwenye kemikali hadi hewa safi. Vua nguo zilizochafuka bila kuzigusa kwa mikono mitupu, na osha ngozi kwa maji mengi safi na sabuni kwa angalau dakika 15. Ikiwa iko machoni, yaoshe taratibu kwa maji safi yanayotiririka kwa dakika 15. Ikiwa imemezwa, usimfanye atapike na usimpe maziwa, mafuta wala kitu chochote cha kunywa isipokuwa mhudumu wa afya akisema. Mtulize na aendelee kutulia; akisinzia, mlaze upande. Mwambie mhudumu wa afya bidhaa ilikuwa nini, kiasi gani, na lini.` },
  { id: "snakebite", title: "Hatua za kwanza: kuumwa na nyoka", kind: "emergency", keywords: ["nyoka", "kung'atwa", "kuumwa", "kugongwa", "sumu", "cobra", "chatu"],
    text: `${EMERGENCY} Fika huko haraka iwezekanavyo. Ondoka mbali na nyoka na usijaribu kumkamata au kumuua. Mtulize mtu na aendelee kutulia iwezekanavyo, kwa sababu kusonga huharakisha kuenea kwa sumu. Weka mkono au mguu ulioumwa bila kutikisika na vua pete na vitu vinavyobana kabla haujavimba. Usikate mahali palipong'atwa, usinyonye, usifunge kwa kamba ya kubana, usiweke barafu wala kutumia dawa za mitishamba. Andika muda wa kung'atwa. Kituo cha afya kinaweza kutoa matibabu sahihi, kwa hivyo nenda huko bila kuchelewa.` },
  { id: "animal-injury", title: "Hatua za kwanza: kuumwa, kupigwa teke na majeraha kutoka kwa wanyama", kind: "emergency", keywords: ["mnyama", "wanyama", "kuumwa", "teke", "mbwa", "jeraha", "kidonda", "ng'ombe", "fahali", "damu"],
    text: "Kwa damu nyingi, bonyeza kwa nguvu kidonda kwa kitambaa safi na uendelee kubonyeza, na piga simu ya dharura au fika kituo cha afya sasa hivi. Osha kuumwa au mkwaruzo wa mbwa au mnyama mwingine kwa sabuni na maji safi kwa angalau dakika 15, kisha nenda kliniki siku hiyo hiyo: kuumwa kunaweza kubeba kichaa cha mbwa, ambacho huua isipotibiwa mapema. Mtu aliyepigwa teke kichwani, kifuani au tumboni, au aliyebanwa, anapaswa kuonwa na mhudumu wa afya hata akionekana yuko sawa. Waweke wanyama watulivu na uwape nafasi; kamwe usisimame nyuma ya ng'ombe au kati ya mama na mtoto wake." },
  { id: "heat", title: "Kufanya kazi salama kwenye joto", kind: "safety", keywords: ["joto", "jua", "kiu", "upungufu wa maji", "kivuli"],
    text: `Fanya kazi asubuhi na jioni penye ubaridi, pumzika kivulini, vaa kofia na nguo nyepesi, na nywa maji mara kwa mara kabla hujasikia kiu. Kizunguzungu, kichwa kuuma, kukakamaa kwa misuli au kuhisi kuzimia ni onyo: acha, nenda kivulini, na nywa maji. Mtu akiwa amechanganyikiwa, ngozi yake ikiwa moto sana na kavu au ikitoka jasho jingi mno, au akianguka, hiyo ni dharura: mpoze kwa maji na upepo, na piga simu ya dharura au tafuta msaada sasa hivi. Wanyama pia wanahitaji kivuli na maji safi kwenye joto.` },
  { id: "machinery", title: "Matrekta, mashine na zana", kind: "safety", keywords: ["trekta", "mashine", "injini", "panga", "zana", "msumeno", "jembe"],
    text: "Soma mwongozo na uweke kila kinga mahali pake. Zima injini na subiri sehemu zinazozunguka zisimame kabla ya kusafisha, kurekebisha au kuondoa kizuizi. Usivae nguo zilizolegea, na funga nywele ndefu au vitambaa vinavyoweza kunaswa. Waweke watoto na watazamaji mbali, na kamwe usibebe abiria kwenye trekta. Usifanye kazi ukiwa umechoka, na weka panga zenye makali na zihifadhi zikiwa zimefunikwa, kwa sababu zana butu huteleza. Kamwe usiweke mafuta kwenye injini ikiwa ni moto au inafanya kazi." },
  { id: "fire", title: "Moto shambani", kind: "safety", keywords: ["moto", "kuungua", "moshi", "kizima moto", "miali"],
    text: "Weka maji, mchanga au kizima moto karibu na mahali unapohifadhi mafuta, nyasi kavu na mazao yaliyovunwa. Usichome mabaki wakati wa upepo au ukame, na weka mafuta na mbolea mbali na moto. Moto ukianza, toa watu kwanza, kisha wanyama kama ni salama, na upige kelele kuomba msaada; piga simu ya dharura. Usirudi ndani ya jengo linaloungua. Poza kuungua kidogo chini ya maji safi yanayotiririka kwa dakika 20; usiweke mafuta wala uji juu yake, na tafuta msaada kwa kuungua kubwa au kwa kina." },
  { id: "water-hygiene", title: "Maji safi na usafi karibu na wanyama", kind: "safety", keywords: ["maji", "kunywa", "usafi", "kunawa", "maziwa", "samadi", "kimeta", "mnyama mgonjwa", "kuchemsha"],
    text: "Chemsha maji ya kunywa kwa angalau dakika moja, au yatibu kama lebo ya bidhaa inavyosema, na uyafunike. Nawa mikono kwa sabuni baada ya kushika wanyama, samadi au nyama mbichi, na kabla ya kula. Chemsha maziwa kabla ya kunywa isipokuwa yamechemshwa kiwandani. Mnyama akifa ghafla au akionekana mgonjwa sana, usimchanje wala kumshika kwa mikono mitupu, na mwambie daktari wa mifugo au afisa wa afya ya wanyama, kwa sababu baadhi ya magonjwa huenea kwa watu. Weka mabirika ya wanyama safi na mbali na mahali kemikali zinapochanganywa." },
  { id: "grain-storage", title: "Kuhifadhi nafaka kwa usalama", kind: "practice", keywords: ["nafaka", "kuhifadhi", "mahindi", "maharage", "ukungu", "sumu kuvu", "mbawakawa", "kukausha", "unyevu", "mavuno"],
    text: "Kausha nafaka kabisa juani kwenye turubai safi au jukwaa lililoinuliwa kabla ya kuhifadhi, na kamwe usihifadhi ikiwa na unyevu. Tumia chombo safi, kavu na kilichofungwa vizuri au mfuko wa kuhifadhia nafaka, uliowekwa juu ya sakafu na mbali na ukuta. Angalia mara kwa mara kama kuna wadudu, unyevu na harufu ya kuoza. Nafaka yenye ukungu inaweza kubeba sumu usiyoweza kuiona wala kuinusa, kwa hivyo usiile wala kuwalisha wanyama; itupe kwa usalama. Weka ghala safi kati ya mavuno na weka panya mbali. Afisa ugani anaweza kukushauri kuhusu bidhaa salama za kuhifadhi kwa zao lako." },
  { id: "crop-rotation", title: "Mzunguko wa mazao", kind: "practice", keywords: ["mzunguko", "kupokezana", "mazao", "mikunde", "udongo", "rutuba", "maharage", "mahindi"],
    text: "Kupanda aina tofauti ya zao kwenye shamba kila msimu husaidia udongo na hupunguza kuongezeka kwa wadudu na magonjwa. Mfumo wa kawaida ni kufuata nafaka kama mahindi, mtama au ulezi kwa mikunde kama maharage, karanga au kunde, ambayo huongeza naitrojeni kwenye udongo, kisha zao la mizizi au mboga. Epuka kupanda familia ile ile (kwa mfano nyanya, viazi, pilipili) mahali pamoja mwaka baada ya mwaka. Andika kilichokua wapi; orodha ya mashamba yako na kumbukumbu za wadudu kwenye Kyro zinaweza kusaidia. Afisa ugani anaweza kupendekeza mzunguko unaofaa eneo lako." },
  { id: "composting", title: "Kutengeneza mboji na kutumia samadi", kind: "practice", keywords: ["mboji", "samadi", "kikaboni", "rutuba", "rundo", "kutengeneza"],
    text: "Weka tabaka za vitu vikavu (majani makavu, nyasi, mabua ya mahindi) na vya kijani (magugu yasiyo na mbegu, mabaki ya mboga, samadi mbichi), liweke rundo likiwa na unyevu kama sifongo iliyobanwa, na ligeuze kila baada ya wiki chache. Iko tayari ikiwa nyeusi, laini na yenye harufu ya udongo, mara nyingi baada ya miezi miwili hadi minne. Usiweke nyama, mafuta, mimea yenye magonjwa wala magugu yaliyozaa mbegu. Nawa mikono baada ya kuishika na vaa glavu, na weka samadi mbichi mbali na mazao ya majani karibu na mavuno. Mboji au samadi iliyoiva vizuri huboresha udongo na kushika maji." },
  { id: "soil-water", title: "Kutunza udongo na maji shambani", kind: "practice", keywords: ["udongo", "mmomonyoko", "maji", "uhifadhi", "matandazo", "makinga maji", "ukame", "mvua"],
    text: "Panda kufuata mkondo wa kontua (kuvuka mteremko, si kushuka) na tumia mistari ya nyasi au matuta kupunguza mtiririko wa maji. Weka udongo ukiwa umefunikwa na mazao, masalio au matandazo ili mvua isiusombe na ardhi ibaki na ubaridi na kushika maji zaidi. Epuka kuacha udongo wazi baada ya mavuno, na usilime miteremko mikali mvua inapokaribia. Chimba mashimo ya kupandia au mabeseni kukusanya mvua maeneo makavu. Mabadiliko madogo yanayofanywa kila msimu huongezeka." }
];

const STOP = new Set(["wa", "ya", "za", "la", "cha", "kwa", "kuhusu", "mwongozo", "miongozo", "nifanye", "nini", "kama", "ikiwa", "mtu", "yangu", "wangu", "ni", "na", "kwenye", "huduma", "kwanza", "hatua", "usalama", "salama", "msaada"]);
const wordsOf = value => clean(value).toLowerCase().replace(/[^\p{L}0-9' ]/gu, " ").split(" ").filter(word => word && !STOP.has(word));
function score(guide, query) {
  const wanted = wordsOf(query); if (!wanted.length) return 0; let total = 0;
  for (const word of wanted) { if (guide.keywords.some(keyword => keyword === word || (word.length > 3 && (keyword.startsWith(word.slice(0, 5)) || word.startsWith(keyword.slice(0, 5)))))) total += 2; else if (guide.title.toLowerCase().includes(word)) total += 1; }
  return total;
}
function findGuide(query) {
  const ranked = GUIDES.map(guide => ({ guide, points: score(guide, query) })).filter(item => item.points > 0).sort((a, b) => b.points - a.points);
  return ranked.length && (ranked.length === 1 || ranked[0].points > ranked[1].points) ? { guide: ranked[0].guide } : ranked.length ? { several: ranked.slice(0, 3).map(item => item.guide) } : null;
}
const renderGuide = guide => `${guide.title}. ${guide.text} ${guide.kind === "practice" ? PRACTICE_NOTE : SAFETY_NOTE}`;

// ---- reports in Swahili ----
const line = (width = 60) => "-".repeat(width);
const pad = (value, width) => String(value).padEnd(width).slice(0, Math.max(width, String(value).length));
const table = (rows, widths) => rows.map(row => row.map((cell, i) => (i === row.length - 1 ? String(cell) : pad(cell, widths[i]))).join("  ")).join("\n");
const formatOf = text => (/\bpdf\b/i.test(text) ? "pdf" : /\b(?:word|docx)\b/i.test(text) ? "docx" : "txt");
const FOOT = "\n\nImetayarishwa na Kyro kutoka kwenye rekodi ulizoingiza. Ina kilichorekodiwa tu.";
const totalsText = totals => { const entries = Object.entries(totals); return entries.length ? entries.map(([currency, amount]) => moneyShown(amount, currency)).join(" na ") : "0"; };
const REPORTS = [
  { id: "summary", pattern: /(?:muhtasari wa shamba|muhtasari wa shamba langu)/i, label: "muhtasari wa shamba" },
  { id: "expenses", pattern: /(?:ripoti ya matumizi|matumizi)/i, label: "ripoti ya matumizi" },
  { id: "income", pattern: /(?:ripoti ya mapato|mapato|mauzo)/i, label: "ripoti ya mapato" },
  { id: "statement", pattern: /(?:faida na hasara|taarifa ya faida|taarifa ya fedha)/i, label: "taarifa ya faida" },
  { id: "inventory", pattern: /(?:orodha ya ghala|ghala langu|orodha ya hifadhi)/i, label: "orodha ya ghala" },
  { id: "livestock", pattern: /(?:daftari la mifugo|mifugo yangu|orodha ya wanyama)/i, label: "daftari la mifugo" },
  { id: "tasks", pattern: /(?:orodha ya kazi|kazi zangu)/i, label: "orodha ya kazi" },
  { id: "harvest", pattern: /(?:ripoti ya mavuno|rekodi ya mavuno)/i, label: "ripoti ya mavuno" },
  { id: "coop", pattern: /(?:taarifa ya ushirika|ripoti ya ushirika)/i, label: "taarifa ya ushirika" }
];

async function buildReport(ctx, kind, text) {
  const scope = { tenantId: ctx.tenantId, userId: ctx.userId };
  const period = periodSw(text, ctx.today, "this year"); const list = collection => ctx.store.list({ ...scope, collection });
  const farm = (await list("farm"))[0]; const owner = (ctx.nameOf ? await ctx.nameOf({ tenantId: ctx.tenantId, userId: ctx.userId }).catch(() => "") : "") || "";
  const head = title => `${[title.toUpperCase(), farm?.data.farmName || "", owner ? `Imetayarishwa kwa: ${owner}` : "", `Tarehe: ${ctx.today}`, line()].filter(Boolean).join("\n")}\n\n`;
  const money = async () => (await list("money")).filter(record => record.data.day >= period.from && record.data.day <= period.to);
  const what = record => `${record.data.note ? (record.data.item ? swahiliItem(record.data.item) : record.data.note) : swahiliItem(record.data.item || "") || categorySw(record.data.category)}${record.data.party ? ` (${record.data.party})` : ""}${record.data.field ? ` [${record.data.field}]` : ""}`;
  if (kind === "summary") {
    const fields = await list("field"); const animals = (await list("animal")).filter(animal => animal.data.status !== "gone"); const stock = await list("stock"); const tasks = (await list("task")).filter(task => task.data.status !== "done");
    const rows = (await list("money")).filter(record => record.data.day >= `${ctx.today.slice(0, 4)}-01-01`);
    if (!farm && !fields.length && !animals.length && !rows.length) return null;
    return { title: "Muhtasari wa shamba", content: `${head("Muhtasari wa shamba")}${farm ? `Shamba: ${describeFarmSw(farm.data)}\n\n` : ""}MASHAMBA (${fields.length})\n${fields.length ? fields.slice().reverse().map(field => `  ${field.data.name}${field.data.size ? ` — ${field.data.size.unit === "acre" ? "ekari" : "hekta"} ${field.data.size.value}` : ""}${field.data.crop ? `, ${swahiliItem(field.data.crop)}` : ""}${field.data.planted ? `, kupanda ${field.data.planted}` : ""}`).join("\n") : "  hakuna zilizorekodiwa"}\n\nMIFUGO (rekodi ${animals.length})\n${animals.length ? animals.slice(0, 20).map(animal => `  ${describeAnimalSw(animal, ctx.today)}`).join("\n") : "  hakuna zilizorekodiwa"}\n\nGHALA (vitu ${stock.length})\n${stock.length ? stock.slice(0, 20).map(item => `  ${swahiliItem(item.data.name)}: ${unitLabelSw(item.data.qty, item.data.unit)}`).join("\n") : "  hakuna zilizorekodiwa"}\n\nKAZI ZILIZO WAZI: ${tasks.length}\n\nPESA MWAKA HUU\n  Mapato:   ${totalsText(sum(rows, "income"))}\n  Matumizi: ${totalsText(sum(rows, "expense"))}\n  Jumla:    ${Object.entries(profitOf(rows)).map(([currency, value]) => `${value < 0 ? "-" : ""}${moneyShown(Math.abs(value), currency)}`).join(" na ") || "0"}${FOOT}` };
  }
  if (kind === "expenses" || kind === "income") {
    const type = kind === "expenses" ? "expense" : "income"; const rows = (await money()).filter(record => record.data.type === type).sort((a, b) => a.data.day.localeCompare(b.data.day)); if (!rows.length) return null;
    const by = {}; for (const record of rows) by[record.data.category] = round((by[record.data.category] || 0) + record.data.amount); const cur = rows[0].data.currency; const title = kind === "expenses" ? "Ripoti ya matumizi" : "Ripoti ya mapato";
    return { title: `${title} ${period.label}`, content: `${head(title)}Kipindi: ${period.from} hadi ${period.to}\n\n${table([["Tarehe", "Kiasi", "Kwa nini"], ...rows.map(record => [record.data.day, moneyShown(record.data.amount, record.data.currency), what(record)])], [12, 16])}\n\n${line()}\nKWA AINA\n${Object.entries(by).sort((a, b) => b[1] - a[1]).map(([category, amount]) => `  ${pad(categorySw(category), 18)} ${moneyShown(amount, cur)}`).join("\n")}\n\nJUMLA: ${totalsText(sum(rows, type))}  (maingizo ${rows.length})${FOOT}` };
  }
  if (kind === "statement") {
    const rows = await money(); if (!rows.length) return null;
    return { title: `Taarifa ya faida ${period.label}`, content: `${head("Taarifa ya faida na hasara")}Kipindi: ${period.from} hadi ${period.to}\n\nMapato:   ${totalsText(sum(rows, "income"))}\nMatumizi: ${totalsText(sum(rows, "expense"))}\n${line(30)}\nJumla:    ${Object.entries(profitOf(rows)).map(([currency, value]) => `${value < 0 ? "hasara ya " : "faida ya "}${moneyShown(Math.abs(value), currency)}`).join(" na ")}${FOOT}` };
  }
  if (kind === "inventory") {
    const stock = await list("stock"); if (!stock.length) return null;
    return { title: "Orodha ya ghala", content: `${head("Orodha ya ghala")}${table([["Kitu", "Aina", "Kiasi", "Maelezo"], ...stock.slice().reverse().map(item => [swahiliItem(item.data.name), categorySw(item.data.category), unitLabelSw(item.data.qty, item.data.unit), [item.data.low !== undefined && item.data.low !== null ? `kiwango cha chini ${unitLabelSw(item.data.low, item.data.unit)}` : "", item.data.expiry ? `inaisha muda ${item.data.expiry}` : ""].filter(Boolean).join(", ")])], [20, 12, 16])}${FOOT}` };
  }
  if (kind === "livestock") {
    const animals = await list("animal"); if (!animals.length) return null; const events = await list("animal_event");
    return { title: "Daftari la mifugo", content: `${head("Daftari la mifugo")}${table([["Jina", "Aina", "Jinsia", "Alizaliwa", "Hali", "Ya mwisho"], ...animals.slice().reverse().map(animal => { const last = events.find(event => event.data.animal === animal.data.tag); return [describeAnimalSw(animal, ctx.today).split(" — ")[0], animal.data.species || "", animal.data.sex === "female" ? "jike" : animal.data.sex === "male" ? "dume" : "", animal.data.born || "", animal.data.status === "gone" ? "ameondoka" : "yuko", last ? `${last.data.type} ${last.data.day}` : ""]; })], [16, 10, 8, 12, 10])}${FOOT}` };
  }
  if (kind === "tasks") {
    const tasks = (await list("task")).filter(task => task.data.status !== "done").sort((a, b) => (a.data.due || "9999").localeCompare(b.data.due || "9999")); if (!tasks.length) return null;
    return { title: "Orodha ya kazi", content: `${head("Orodha ya kazi")}${table([["Na.", "Kazi", "Nani", "Tarehe"], ...tasks.map(task => [task.number, task.data.title, task.data.assignee || "", task.data.due || ""])], [5, 34, 14])}${FOOT}` };
  }
  return null;
}
async function receiptSw(ctx, who) {
  const scope = { tenantId: ctx.tenantId, userId: ctx.userId };
  const parties = await ctx.store.list({ ...scope, collection: "party" }); const found = who ? findParty(parties, who) : null; const wanted = (found?.party?.data.name || who || "").toLowerCase(); const same = name => Boolean(wanted) && String(name || "").toLowerCase() === wanted;
  const orders = (await ctx.store.list({ ...scope, collection: "order" })).filter(order => order.data.kind === "sale" && order.data.status === "done" && same(order.data.party));
  const sales = (await ctx.store.list({ ...scope, collection: "money" })).filter(record => record.data.type === "income" && same(record.data.party) && !String(record.data.note || "").startsWith("order "));
  const lines = [...orders.map(order => ({ day: order.data.doneOn || order.data.day, what: `${unitLabelSw(order.data.qty, order.data.unit)} za ${swahiliItem(order.data.item)}`, amount: round((order.data.price || 0) * order.data.qty), currency: order.data.currency })), ...sales.filter(record => record.data.qty).map(record => ({ day: record.data.day, what: `${unitLabelSw(record.data.qty, record.data.unit)} za ${swahiliItem(record.data.item)}`, amount: record.data.amount, currency: record.data.currency }))];
  if (!lines.length) return null;
  const buyer = orders[0]?.data.party || found?.party?.data.name || who || "Mnunuzi"; const cur = lines[0].currency; const total = round(lines.reduce((s, item) => s + item.amount, 0));
  const farm = (await ctx.store.list({ ...scope, collection: "farm" }))[0]; const owner = (ctx.nameOf ? await ctx.nameOf({ tenantId: ctx.tenantId, userId: ctx.userId }).catch(() => "") : "") || "";
  return { title: `Stakabadhi - ${buyer}`, content: `STAKABADHI\n${farm?.data.farmName || owner || "Shamba"}\nTarehe: ${ctx.today}\nImepokelewa kutoka kwa: ${buyer}\n${line()}\n${table([["Tarehe", "Kitu", "Kiasi"], ...lines.map(item => [item.day, item.what, moneyShown(item.amount, item.currency || cur)])], [12, 30])}\n${line()}\nJUMLA: ${moneyShown(total, cur)}\n\nAsante.\n\nImetayarishwa na Kyro kutoka kwenye mauzo uliyorekodi.` };
}

// ---- loans ----
function readLoanSw(text) {
  const t = clean(text);
  const p = new RegExp(`(?:mkopo|kopo)\\s+(?:wa|la|ya)?\\s*(?:kiasi cha\\s+)?((?:(?:${CURRENCY_WORDS.source.slice(4, -2)})\\s*)?${NUMBER}(?:\\s*(?:shilingi))?)`, "i").exec(t);
  if (!p) return null;
  const money = parseMoneySw(p[1]); if (!money) return null;
  const rate = /riba(?: ya)?\s+(\d+(?:\.\d+)?)\s*(?:%|asilimia)(?:\s*(?:kwa|kila)\s*(mwezi|mwaka))?/i.exec(t);
  const term = /(?:kwa|ndani ya|muda wa)?\s*(miezi|mwezi|miaka|mwaka)\s+(\d+(?:\.\d+)?)|(?:kwa|ndani ya|muda wa)\s+(\d+(?:\.\d+)?)\s*(miezi|mwezi|miaka|mwaka)/i.exec(t);
  if (!rate || !term) return { principal: money.amount, currency: money.currency, missing: !rate ? "rate" : "term" };
  const unit = (term[1] || term[4]).toLowerCase(); const count = Number(term[2] || term[3]); const monthly = /mwezi/i.test(rate[2] || "");
  return { principal: money.amount, currency: money.currency, monthlyRate: monthly ? Number(rate[1]) / 100 : Number(rate[1]) / 100 / 12, months: Math.round(/miaka|mwaka/.test(unit) ? count * 12 : count), rateText: `asilimia ${rate[1]} kwa ${monthly ? "mwezi" : "mwaka"}`, flat: /tambarare/i.test(t) };
}
const badLoan = loan => !(loan.principal > 0 && loan.principal <= 1e12) || !(loan.monthlyRate >= 0 && loan.monthlyRate * 12 <= 2) || !(loan.months >= 1 && loan.months <= 360);

async function handle(ctx) {
  const t = clean(ctx.text).replace(/[.!?]+$/g, ""); const lower = t.toLowerCase();
  if (!/(?:mkopo|kopo|kuvunja hasara|bajeti|chapisha|tengeneza|andaa|toa|nipe|stakabadhi|risiti|mwongozo|miongozo|nyoka|nimemeza|amemeza|sumu|nifanye nini|huduma ya kwanza|ng['’]?atwa|ng['’]?ata|kemikali|dawa ya)/i.test(lower)) return null;
  const scope = { tenantId: ctx.tenantId, userId: ctx.userId };
  const list = collection => ctx.store.list({ ...scope, collection });
  let m;

  // =========================== loans ===========================
  if (/\b(?:mkopo|kopo)\b/i.test(t) && /^(?:tafadhali\s+)?(?:hesabu|piga hesabu|nifanyie hesabu|nataka kukopa|ninataka kukopa|naweza kumudu|ninaweza kumudu|je,? naweza kumudu|nitaweza kulipa|nini kitakuwa|mkopo|kopo)/i.test(t) && /\d/.test(t)) {
    const loan = readLoanSw(t);
    if (!loan) return null;
    if (loan.missing) return loan.missing === "rate" ? SW.loanMissingRate({ amount: moneyShown(loan.principal, loan.currency) }) : SW.loanMissingTerm({ amount: moneyShown(loan.principal, loan.currency) });
    if (badLoan(loan)) return SW.loanBad;
    const n = loanNumbers(loan);
    const line1 = SW.loanLine({ amount: moneyShown(loan.principal, loan.currency), rate: loan.rateText, months: loan.months, flat: loan.flat, monthly: moneyShown(round(n.monthly, 0), loan.currency), total: moneyShown(round(n.total, 0), loan.currency), interest: moneyShown(round(n.interest, 0), loan.currency) });
    if (!/(?:kumudu|nitaweza kulipa)/i.test(t)) return `${line1} ${NOTE}`;
    const rows = (await list("money")).filter(record => record.data.day >= addDays(ctx.today, -180) && record.data.day <= ctx.today); const currencies = new Set(rows.map(record => record.data.currency || ""));
    if (!rows.length) return `${line1} ${SW.loanNeedRecords} ${NOTE}`;
    if (currencies.size > 1) return `${line1} ${SW.loanMixed} ${NOTE}`;
    const profit = rows.reduce((total, record) => total + (record.data.type === "income" ? record.data.amount : -record.data.amount), 0);
    const first = rows.reduce((min, record) => (record.data.day < min ? record.data.day : min), ctx.today); const months = Math.max(1, Math.min(6, Math.round((Date.parse(ctx.today) - Date.parse(first)) / (30.4 * 86400000)) || 1)); const perMonth = profit / months; const cur = rows[0].data.currency;
    if (perMonth <= 0) return `${line1} ${SW.loanNoProfit({ months, profit: moneyShown(round(profit, 0), cur) })}`;
    const share = Math.round((n.monthly / perMonth) * 100);
    return `${line1} ${SW.loanShare({ perMonth: moneyShown(round(perMonth, 0), cur), months, share, high: share > 60 })}`;
  }

  // =========================== break-even and budget ===========================
  if ((m = /^(?:tafadhali\s+)?(?:hesabu\s+|nini ni\s+)?(?:bei ya kuvunja hasara|kuvunja hasara)(?:\s+(?:kwa|ya)\s+(?:shamba\s+)?(?:la\s+)?(.+?))?\s*(?:[:,-]\s*(.*))?$/i.exec(t)) && /(?:kuvunja hasara)/i.test(t)) {
    const rest = clean(m[2] || ""); const fields = await list("field"); const target = m[1] || rest;
    const field = fields.find(item => nameKey(item.data.name) && new RegExp(`(?:^|[^\\p{L}])${nameKey(item.data.name).replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}(?:[^\\p{L}]|$)`, "iu").test(target));
    let cost = null; let currency = ""; let expected = null;
    const costMatch = new RegExp(`gharama(?:\\s+(?:ni|za|ya))?\\s*(?:ni\\s*)?((?:(?:shilingi|sh|ksh|tsh|ush)\\s*)?${NUMBER}(?:\\s*shilingi)?)`, "i").exec(rest); if (costMatch) { const c = parseMoneySw(costMatch[1]); if (c) { cost = c.amount; currency = c.currency; } }
    const expMatch = /(?:natarajia|ninatarajia|mavuno yanayotarajiwa)\s+(.+?)(?:\s+kwa\s+(?:shilingi|bei)|$)/i.exec(rest); if (expMatch) { const q = parseQuantitySw(expMatch[1]); if (q) expected = { value: q.value, unit: q.unit }; }
    if (field && cost === null) { const rows = (await list("money")).filter(record => record.data.type === "expense" && record.data.field === field.data.name && record.data.day >= `${ctx.today.slice(0, 4)}-01-01`); if (rows.length) { cost = round(rows.reduce((total, record) => total + record.data.amount, 0)); currency = rows[0].data.currency; } }
    if (field && !expected && field.data.expectedYield) expected = { value: field.data.expectedYield.value, unit: field.data.expectedYield.unit };
    if (!(cost > 0) || !expected) return SW.beNeed({ field: field?.data.name, cost: field ? (cost === null ? SW.beNoSpend : SW.beNoYield({ field: field.data.name })) : "" });
    const priceMatch = new RegExp(`kwa\\s+((?:shilingi|sh|ksh|tsh|ush)\\s*)?(${NUMBER})\\s*(shilingi|sh|ksh|tsh|ush)?\\s*(?:kwa|kila|/)\\s*(${UNIT_WORD})\\b`, "i").exec(rest); const price = priceMatch ? { amount: Number(priceMatch[2].replace(/,/g, "")), currency: /shilingi/i.test(`${priceMatch[1] || ""}${priceMatch[3] || ""}`) ? "shillings" : "", per: parseQuantitySw(`1 ${priceMatch[4]}`)?.unit } : null;
    const be = cost / expected.value;
    const base = SW.beBase({ cost: moneyShown(cost, currency), qty: unitLabelSw(expected.value, expected.unit), field: field?.data.name, price: `${moneyShown(round(be, 2), currency)} kwa ${unitLabelSw(1, expected.unit).split(" ")[0]}` });
    if (!price) return `${base} ${SW.beAsk}`;
    const revenue = price.amount * expected.value; const cur = price.currency || currency;
    return `${base} ${SW.beProfit({ price: `${moneyShown(price.amount, cur)} kwa ${unitLabelSw(1, price.per || expected.unit).split(" ")[0]}`, revenue: moneyShown(round(revenue, 0), cur), gain: revenue >= cost, amount: moneyShown(round(Math.abs(revenue - cost), 0), cur), pct: Math.round(((revenue - cost) / cost) * 100) })}`;
  }
  if ((m = /^(?:tafadhali\s+)?(?:panga|tengeneza|piga hesabu ya|andaa)\s+bajeti(?:\s+ya\s+(.+?))?\s*[:,-]\s*(.+)$/i.exec(t))) {
    const body = m[2]; const items = []; let yieldQty = null; let price = null;
    for (const part of body.split(/\s*,\s*/).map(clean).filter(Boolean)) {
      if (/^(?:natarajia|ninatarajia)/i.test(part)) {
        const q = parseQuantitySw(part.replace(/^(?:natarajia|ninatarajia)\s+/i, "")); if (q) yieldQty = q;
        const pm = new RegExp(`kwa\\s+((?:shilingi|sh|ksh|tsh|ush)\\s*)?(${NUMBER})\\s*(shilingi|sh|ksh|tsh|ush)?\\s*(?:kwa|kila|/)\\s*(${UNIT_WORD})\\b`, "i").exec(part); if (pm) price = { amount: Number(pm[2].replace(/,/g, "")), currency: /shilingi/i.test(`${pm[1] || ""}${pm[3] || ""}`) ? "shillings" : "", per: parseQuantitySw(`1 ${pm[4]}`)?.unit };
        continue;
      }
      const item = new RegExp(`^(\\p{L}[\\p{L} ']{1,24}?)\\s*[:=]?\\s*(?:shilingi\\s+)?(${NUMBER})$`, "iu").exec(part);
      if (item && num(item[2].replace(/,/g, "")) > 0) items.push({ name: clean(item[1]).toLowerCase(), amount: num(item[2].replace(/,/g, "")) });
    }
    if (!items.length) return SW.budgetAsk;
    const cost = items.reduce((total, item) => total + item.amount, 0); const cur = parseMoneySw(body.replace(/kwa\s+(?:shilingi\s+)?\d[\d,.]*\s*(?:shilingi\s*)?(?:kwa|kila)\s+\p{L}+/giu, ""))?.currency || (/shilingi/i.test(body) ? "shillings" : "");
    const lines = [SW.budgetHead({ what: m[1] ? clean(m[1]) : "", lines: items.map(item => `${item.name} ${moneyShown(item.amount, cur)}`).join(", "), total: moneyShown(cost, cur) })];
    if (yieldQty) lines.push(SW.budgetBreak({ qty: unitLabelSw(yieldQty.value, yieldQty.unit), price: `${moneyShown(round(cost / yieldQty.value, 2), cur)} kwa ${unitLabelSw(1, yieldQty.unit).split(" ")[0]}` }));
    if (yieldQty && price) { const revenue = yieldQty.value * price.amount; lines.push(SW.budgetProfit({ price: `${moneyShown(price.amount, price.currency || cur)} kwa ${unitLabelSw(1, price.per || yieldQty.unit).split(" ")[0]}`, revenue: moneyShown(round(revenue, 0), price.currency || cur), gain: revenue >= cost, amount: moneyShown(round(Math.abs(revenue - cost), 0), price.currency || cur) })); }
    lines.push(SW.budgetNote);
    return lines.join(" ");
  }

  // =========================== printable reports ===========================
  const wants = "(?:tafadhali\\s+)?(?:chapisha|tengeneza|andaa|toa|nipe)";
  if ((m = new RegExp(`^${wants}\\s+(?:stakabadhi|risiti)\\s+(?:ya|kwa|kutoka kwa)\\s+(.+?)(?:\\s+(?:kama|kwa muundo wa)\\s+(?:a\\s+)?(?:pdf|word|docx))?$`, "i").exec(t))) {
    const made = await receiptSw(ctx, m[1].replace(/^(?:mnunuzi|mteja)\s+/i, ""));
    return made ? { report: { ...made, format: formatOf(t) } } : SW.receiptNone({ who: clean(m[1]) });
  }
  if ((m = new RegExp(`^${wants}\\s+(.+?)(?:\\s+(?:kama|kwa muundo wa)\\s+(?:a\\s+)?(?:pdf|word|docx|maandishi))?(?:\\s+kwa kiingereza)?$`, "i").exec(t)) && /(?:ripoti|muhtasari|orodha|daftari|taarifa|rekodi)/i.test(m[1])) {
    const what = m[1]; const kind = REPORTS.find(entry => entry.pattern.test(what));
    // only the farmer's own records ("ripoti ya hali ya hewa" or "orodha ya kazi za safari" is not a farm report)
    if (!kind || !/(?:yangu|wangu|langu|zangu|shamba|ushirika|mavuno)/i.test(t) || /\b(?:kuhusu|habari)\b/i.test(t) || !(await ctx.hasFarmData())) return null;
    if (kind.id === "harvest" || kind.id === "coop" || /kwa kiingereza/i.test(t)) {
      const english = await reportsEnglish.build(ctx, kind.id === "expenses" ? "expenses" : kind.id, t.replace(/mwezi huu/i, "this month").replace(/mwaka huu/i, "this year"));
      return english ? { report: { ...english, format: formatOf(t) } } : SW.reportNone({ label: kind.label });
    }
    const made = await buildReport(ctx, kind.id, t);
    return made ? { report: { ...made, format: formatOf(t) } } : SW.reportNone({ label: kind.label });
  }

  // =========================== safety guides ===========================
  const quote = lower.replace(/[’‘]/g, "'");
  if (/(?:nimemeza|amemeza|wamemeza|nimekunywa|amekunywa|nimemwagikiwa|amemwagikiwa|imemwagika|imenirukia|imemrukia|imeingia machoni|imeingia kinywani).{0,50}(?:dawa ya kuua wadudu|dawa ya kunyunyizia|dawa ya wadudu|dawa ya magugu|sumu|kemikali|dawa ya mifugo)/i.test(quote) || /(?:dawa ya kuua wadudu|dawa ya kunyunyizia|dawa ya wadudu|dawa ya magugu|sumu|kemikali).{0,50}(?:nimemeza|amemeza|wamemeza|imemwagika|machoni|kinywani|kumeza|kumwagikiwa)/i.test(quote)) return renderGuide(GUIDES.find(guide => guide.id === "pesticide-poisoning"));
  if (/(?:nyoka).{0,30}(?:ameng'ata|amemng'ata|amenigonga|amemgonga|ameniuma|amemuuma|amenng'ata|ameuma)/i.test(quote) || /(?:nimeng'atwa|ameng'atwa|nimegongwa|amegongwa|nimeumwa|ameumwa|wameng'atwa)\s+(?:na|kwa)\s+nyoka/i.test(quote)) return renderGuide(GUIDES.find(guide => guide.id === "snakebite"));
  if (/^(?:orodhesha|onyesha|nionyeshe)\s+miongozo ya (?:shamba|usalama|kilimo)$/.test(lower) || /^(?:miongozo ya shamba|maktaba ya shamba)$/.test(lower) || /^(?:nina|una) miongozo gani$/.test(lower)) {
    return SW.listGuides({ safety: GUIDES.filter(guide => guide.kind !== "practice").map(guide => guide.title.replace(/^Hatua za kwanza: /, "hatua za kwanza: ").toLowerCase()).join("; "), practice: GUIDES.filter(guide => guide.kind === "practice").map(guide => guide.title.toLowerCase()).join("; ") });
  }
  if ((m = /^nifanye nini\s+(?:(?:kama|ikiwa|baada ya|wakati|ninapo|mtu akiwa)\s+)?(.+)$/i.exec(t))) {
    const found = findGuide(m[1]);
    return found?.guide && found.guide.kind === "emergency" ? renderGuide(found.guide) : null;
  }
  if ((m = /^(?:(?:tafadhali\s+)?(?:soma|fungua|nionyeshe|nipe|niambie)\s+)?mwongozo\s+(?:wa|kuhusu|juu ya|wa kuhusu)\s+(.+)$/i.exec(t)) || (m = /^mwongozo\s*[:,-]\s*(.+)$/i.exec(t)) || (m = /^huduma ya kwanza (?:kwa|baada ya|ikiwa|wakati)\s+(.+)$/i.exec(t))) {
    const found = findGuide(m[1]);
    if (!found) return SW.noGuide;
    if (found.several) return SW.severalGuides({ titles: found.several.map(guide => guide.title).join("; ") });
    return renderGuide(found.guide);
  }
  return null;
}

module.exports = Object.freeze({ handle, SW, GUIDES, findGuide, renderGuide, readLoanSw, buildReport, receiptSw });
