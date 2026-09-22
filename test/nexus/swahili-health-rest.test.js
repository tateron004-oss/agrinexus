"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { farmWorkTurn } = require("../../nexus/farmwork/index.js");
const { healthWorkTurn } = require("../../nexus/healthwork/index.js");
const more = require("../../nexus/healthwork/swahili-more.js");
const { fakeFarmStore, fakeMemory } = require("./farmwork-fake.js");

const NOW = new Date("2026-09-20T05:00:00Z"); // Sunday 20 September 2026 in Nairobi

function person({ userId = "u1", store = fakeFarmStore(), memory = fakeMemory() } = {}) {
  const base = { store, tenantId: "t1", userId, now: NOW, timeZone: "Africa/Nairobi", memory, nameOf: async () => "Amina Wanjiru" };
  return { store, memory, farm: text => farmWorkTurn({ ...base, text }), health: text => healthWorkTurn({ ...base, text }) };
}
const calendar = p => JSON.stringify(p.memory.items || p.memory.personal || []);
async function registered() {
  const p = person();
  await p.health("Sajili mgonjwa Mary Akinyi, miaka 34, kike, Kibera");
  await p.health("Sajili mgonjwa Baby Otieno, miezi 6, kiume, Kisumu");
  return p;
}

test("immunisations in Swahili: recorded as told, the next dose only when the worker gives it, no schedule of Kyro's own", async () => {
  const p = await registered();
  const one = await p.health("Nimempa Baby chanjo ya BCG");
  assert.match(one, /Baby Otieno \(#2\) amepata BCG leo/); assert.match(one, /fuata ratiba ya programu yako/);
  assert.doesNotMatch(one, /Dozi ijayo \w+ \d/, "no next dose invented");
  assert.match(await p.health("Nimempa Baby chanjo ya pentavalent, dozi ijayo baada ya wiki 6"), /amepata Pentavalent leo\. Dozi ijayo Jumapili 1 Novemba/);
  assert.match(await p.health("Baby amepata chanjo ya surua; dozi ijayo tarehe 12 Novemba"), /amepata Measles leo\. Dozi ijayo Alhamisi 12 Novemba/);
  assert.match(await p.health("Nimemchanja Baby dhidi ya pepopunda"), /amepata Tetanus leo/);
  assert.match(await p.health("Nimempa Baby chanjo ya polio, dozi ijayo jana"), /Sikuweza kusoma "jana" kama siku ya baadaye/);
  assert.match(await p.health("Onyesha chanjo za Baby"), /Baby Otieno \(#2\): .*BCG 2026-09-20/);
  assert.match(calendar(p), /Chanjo inatakiwa mgonjwa 2/); assert.doesNotMatch(calendar(p), /Baby|Otieno/, "no patient name in the calendar");
  assert.match(await p.health("Nani anastahili chanjo"), /Hakuna chanjo zinazotakiwa/);
  assert.match(await p.health("Chanjo zipi zinatakiwa mwezi huu"), /Hakuna chanjo zinazotakiwa mwezi huu/);
  // English reads the same doses
  assert.match(await p.health("Show vaccinations for Baby"), /BCG.*Pentavalent|Pentavalent.*BCG/s);
});

test("pregnancies in Swahili: the expected date is the worker's own, nothing is worked out", async () => {
  const p = await registered();
  assert.match(await p.health("Mary ni mjamzito"), /Tarehe ya kujifungua ya Mary ni lini/);
  const set = await p.health("Mary ni mjamzito, atajifungua tarehe 12 Desemba");
  assert.match(set, /Mary Akinyi \(#1\) ni mjamzito, anatarajiwa Jumamosi 12 Desemba/);
  assert.doesNotMatch(set, /wiki \d+ za mimba|weeks pregnant|hatari|risk/i, "no gestation or risk worked out");
  assert.match(await p.health("Sajili mimba ya Mary, tarehe ya kujifungua 3 Januari"), /Nimesasisha Mary Akinyi \(#1\): kujifungua kunatarajiwa Jumapili 3 Januari 2027/);
  assert.match(await p.health("Wajawazito wangu"), /Mimba 1: Mary Akinyi \(#1\) — anatarajiwa Jumapili 3 Januari 2027/);
  assert.match(calendar(p), /Kujifungua kunatarajiwa mgonjwa 1/); assert.doesNotMatch(calendar(p), /Mary|Akinyi/);
  assert.match(await p.health("Mary amejifungua mtoto wa kike salama tarehe 15 Septemba"), /amejifungua Jumanne 15 Septemba \(mtoto wa kike salama\)/);
  assert.match(await p.health("Nani ni mjamzito"), /Hakuna mimba/, "a delivery closes the pregnancy");
  assert.match(await p.health("Mary amejifungua tarehe 3 Machi 2030"), /siku aliyojifungua/, "a future delivery day is refused");
  assert.match(await p.health("Show pregnant mothers"), /No pregnancies/, "English reads the same register");
});

test("the clinic's medicines and supplies in Swahili, without disturbing the farm's stock words", async () => {
  const p = await registered();
  assert.match(await p.health("Weka taarifa za kliniki yangu: nesi, Zahanati ya Kibera, Kisumu"), /nesi katika Zahanati ya Kibera \(Kisumu\)/);
  const added = await p.health("Ongeza vidonge 100 vya paracetamol kwenye stoo ya kliniki, inaisha muda 31 Machi 2027");
  assert.match(added, /Nimeongeza paracetamol: vidonge 100/); assert.match(added, /Jumatano 31 Machi 2027/);
  assert.match(await p.health("Nimepokea sanduku 2 za glavu kliniki"), /Nimeongeza glavu: masanduku 2/);
  assert.match(await p.health("Nimetoa vidonge 10 vya paracetamol kwa Mary"), /umetoa paracetamol: vidonge 10, kwa Mary Akinyi \(#1\)\. Baki: vidonge 90/);
  assert.match(await p.health("Nimetoa vidonge 500 vya paracetamol"), /Umerekodi paracetamol: vidonge 90 tu/);
  assert.match(await p.health("Nina paracetamol kiasi gani"), /Una paracetamol: vidonge 90, tarehe ya karibu ya kuisha muda Jumatano 31 Machi 2027/);
  assert.match(await p.health("Niarifu paracetamol ikishuka chini ya 95"), /ikifika vidonge 95 au chini yake/);
  assert.match(await p.health("Dawa zipi zinaisha"), /Vinapungua: paracetamol \(vidonge 90\)/);
  assert.match(await p.health("Paracetamol inaisha muda tarehe 30 Novemba"), /inaisha muda Jumatatu 30 Novemba/);
  assert.match(await p.health("Onyesha stoo ya kliniki"), /Vitu 2 kwenye stoo ya kliniki/);
  assert.match(await p.health("Rekebisha hesabu ya paracetamol kuwa 88"), /kuwa: vidonge 88/);
  assert.match(await p.health("How much paracetamol do I have?"), /88 tablets/, "English reads the same stock");
  // the farm's own stock words are left to the farm tools, even for someone who also keeps a clinic stock
  assert.equal(await p.health("Nimepokea gunia 2 za mbolea"), null);
  assert.equal(await p.health("Nimetumia mbolea gunia 1"), null);
  assert.equal(await p.health("Nimetoa lita 5 za maziwa"), null);
  assert.equal(await p.health("Ongeza mbolea gunia 2 kwenye ghala"), null);
  assert.equal(await p.health("Nina mbolea kiasi gani"), null);
  await p.farm("Ongeza mbolea gunia 2 kwenye ghala");
  assert.equal(await p.farm("Nina mbolea kiasi gani"), "Una gunia 2 za mbolea.");
});

test("referral letters and reports in Swahili carry only what was recorded; the monthly report is counts only", async () => {
  const p = await registered();
  await p.health("Ziara ya Mary: joto 38.5, mapigo 80, uchunguzi: malaria");
  await p.health("Nimempa Baby chanjo ya BCG");
  const letter = (await p.health("Andika barua ya rufaa ya Mary kwenda hospitali ya kisumu: sababu maumivu")).report;
  assert.equal(letter.title, "Barua ya rufaa - Mary Akinyi"); assert.match(letter.content, /BARUA YA RUFAA/); assert.match(letter.content, /Kwenda: Hospitali ya Kisumu/);
  assert.match(letter.content, /joto 38\.5°C, mapigo 80; hali \(kama alivyosema mhudumu wa afya\): malaria/);
  assert.doesNotMatch(letter.content, /Referral|Patient|Reason/, "no English in a Swahili letter");
  assert.doesNotMatch(letter.content, /kawaida|hatari|dawa ya|treat|advice/i, "the letter adds no finding and no advice");
  assert.match(await p.health("Andika barua ya rufaa ya Mary"), /Unampeleka Mary Akinyi wapi/);
  const english = (await p.health("Andika barua ya rufaa ya Mary kwenda Hospitali ya Kisumu: sababu maumivu kwa Kiingereza")).report;
  assert.match(english.content, /REFERRAL LETTER/); assert.equal(english.title, "Referral letter - Mary Akinyi");
  assert.match(await p.health("Onyesha rufaa zangu"), /Rufaa 1 mwezi huu: Mary Akinyi \(#1\) kwenda Hospitali ya Kisumu/);
  const monthly = (await p.health("Chapisha ripoti ya kila mwezi")).report;
  assert.match(monthly.content, /RIPOTI YA SHUGHULI ZA MWEZI/); assert.match(monthly.content, /Wagonjwa wapya waliosajiliwa: {2}2/); assert.match(monthly.content, /malaria/);
  assert.doesNotMatch(monthly.content, /Mary|Akinyi|Baby|Otieno/, "a monthly report has counts and no names");
  assert.match((await p.health("Chapisha ripoti ya mwezi huu kama pdf")).report.format, /pdf/);
  assert.match((await p.health("Chapisha ripoti ya Septemba")).report.title, /Septemba 2026/);
  assert.match(await p.health("Chapisha ripoti ya Agosti"), /hakuna cha kuchapisha/);
  const file = (await p.health("Chapisha rekodi ya Mary")).report.content;
  assert.match(file, /REKODI YA MGONJWA/); assert.match(file, /Mary Akinyi/);
  const register = (await p.health("Chapisha orodha ya wagonjwa")).report.content; assert.match(register, /Jumla: 2/);
});

test("copy and erase in Swahili: a Swahili yes/no works, and erasing everything needs the exact words", async () => {
  const p = await registered();
  await p.health("Ongeza vidonge 100 vya paracetamol kwenye stoo ya kliniki");
  const exported = (await p.health("Hamisha rekodi zangu zote za wagonjwa")).report;
  assert.equal(JSON.parse(exported.content).counts.patients, 2);
  assert.match(await p.health("Onyesha kumbukumbu ya data yangu"), /imehamishwa wagonjwa 2/);
  // removing one item and one patient
  assert.match(await p.health("Ondoa paracetamol kwenye stoo ya kliniki"), /Niondoe paracetamol .* Sema ndiyo kuendelea, au hapana kuacha/);
  assert.match(await p.health("hapana"), /Sawa, nimeacha kama ilivyo/);
  assert.equal((await p.store.list({ tenantId: "t1", userId: "u1", collection: "supply" })).length, 1);
  await p.health("Ondoa paracetamol kwenye stoo ya kliniki"); assert.match(await p.health("ndiyo"), /Nimeondoa paracetamol/);
  await p.health("Ondoa mgonjwa Baby"); assert.match(await p.health("sawa"), /Nimemwondoa Baby Otieno/);
  assert.match(await p.health("Onyesha wagonjwa wangu"), /Una wagonjwa 1/);
  // erasing what was removed
  assert.match(await p.health("Futa rekodi zangu zilizoondolewa"), /zitafutwa kabisa/); assert.match(await p.health("ndiyo"), /Nimefuta rekodi \d+ zilizoondolewa kabisa/);
  // erasing everything
  const ask = await p.health("Futa rekodi zangu zote za wagonjwa");
  assert.match(ask, /andika hasa: FUTA YOTE/); assert.match(await p.health("ndiyo"), /andika hasa: FUTA YOTE/);
  assert.equal((await p.store.list({ tenantId: "t1", userId: "u1", collection: "patient" })).length, 1, "a plain yes erases nothing");
  await p.health("Futa rekodi zangu zote za wagonjwa");
  assert.match(await p.health("hapana"), /Sawa, nimeacha kama ilivyo/);
  assert.equal((await p.store.list({ tenantId: "t1", userId: "u1", collection: "patient" })).length, 1);
  await p.health("Futa rekodi zangu zote za wagonjwa");
  assert.match(await p.health("FUTA YOTE"), /Nimefuta wagonjwa 1 na kila kitu/);
  assert.match(await p.health("Onyesha wagonjwa wangu"), /Bado hujasajili/);
  assert.match(await p.health("Onyesha kumbukumbu ya data yangu"), /imefuta kila kitu/); assert.doesNotMatch(await p.health("Onyesha kumbukumbu ya data yangu"), /Mary|Baby/, "no names in the log");
});

test("an English confirmation is unchanged, and a Swahili yes does not answer it", async () => {
  const p = await registered();
  assert.match(await p.health("Remove patient Baby"), /Say yes to go ahead/);
  const out = await p.health("ndiyo");
  assert.ok(out === null || !/Nimemwondoa/.test(String(out)), "a Swahili yes is not taken for an English question");
  assert.equal((await p.store.list({ tenantId: "t1", userId: "u1", collection: "patient" })).length, 2);
  await p.health("Remove patient Baby"); assert.match(await p.health("yes"), /Done\. I've removed Baby Otieno/);
});

test("Swahili health talk that is not for the toolkit is left alone", async () => {
  const empty = person();
  for (const line of ["Mary ni mjamzito", "Nimempa Baby chanjo ya BCG", "Nimepokea vidonge 10", "Chapisha ripoti", "Ondoa mgonjwa Mary", "Nimechanjwa jana", "Dawa zipi ni bora"]) assert.equal(await empty.health(line), null, line);
  const worker = await registered();
  for (const line of ["Nimempa mama chanjo ya kichwa", "Nimempa rafiki yangu zawadi", "Chanjo ni muhimu kwa watoto", "Nani ni mjamzito wa kwanza kwenye historia?", "Nimepokea barua kutoka kliniki", "Nimetoa mchango kanisani", "Ripoti ya hali ya hewa", "Nimeandika ripoti ya shule", "Futa ujumbe huu", "Dawa ya kienyeji inasaidia?", "Rufaa ya kazi yangu"]) {
    const answer = await worker.health(line); assert.ok(answer === null || typeof answer === "string" && !/Nimerekodi|Nimeongeza|Nimemwondoa|report/.test(answer), `${line} -> ${JSON.stringify(answer)}`);
  }
});

test("Swahili health replies carry no English record-keeping words and no clinical opinion", async () => {
  const p = await registered();
  const replies = [await p.health("Nimempa Baby chanjo ya BCG, dozi ijayo baada ya wiki 6"), await p.health("Mary ni mjamzito, atajifungua tarehe 12 Desemba"), await p.health("Ongeza vidonge 100 vya paracetamol kwenye stoo ya kliniki"), await p.health("Nimetoa vidonge 10 vya paracetamol kwa Mary"), await p.health("Wajawazito wangu"), await p.health("Onyesha chanjo za Baby"), await p.health("Onyesha rufaa zangu")];
  for (const reply of replies) {
    assert.doesNotMatch(reply, /\b(?:Recorded|recorded|vaccin\w*|Vaccin\w*|pregnan\w+|stock|Stock|tablets?|next dose|patient|Patient|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday|September|October|November|December)\b/, reply);
    assert.doesNotMatch(reply, /\b(?:kawaida|hatari|salama kwa|inatosha|ongeza dozi|kipimo sahihi|normal|safe|dangerous|dose)\b/i, reply);
  }
});

test("the commands Kyro suggests in Swahili for the rest of health are understood in Swahili", async () => {
  const p = await registered();
  await p.health("Ongeza vidonge 100 vya paracetamol kwenye stoo ya kliniki");
  const source = fs.readFileSync(path.join(__dirname, "../../nexus/healthwork/swahili-more.js"), "utf8");
  const suggested = [...source.matchAll(/(?:Sema|au|kama) \\?"([^"\\]+)\\?"/g)].map(match => match[1]).filter(text => !/\{|\$/.test(text)).map(text => text.replace(/…/, "joto 37")).filter(text => !/^(?:dozi ijayo|inaisha muda|tarehe)\b/.test(text)); // the first two are endings to add to a command, not commands
  assert.ok(suggested.length >= 4, `only ${suggested.length} suggestions found`);
  for (const command of suggested) {
    const answer = await p.health(command);
    // an example that is only part of a sentence ("mwone Mary tena baada ya siku 3") is still a whole command, so nothing may be ignored
    assert.ok(answer, `not understood: ${command}`);
  }
});

test("Swahili exports stay in step with what they are used for", () => {
  assert.equal(more.ERASE_PHRASE, "futa yote");
  assert.deepEqual(more.supQty("vidonge 100 vya paracetamol") && { value: more.supQty("vidonge 100 vya paracetamol").value, unit: more.supQty("vidonge 100 vya paracetamol").unit }, { value: 100, unit: "tablet" });
  assert.equal(more.supQty("gunia 2 za mbolea"), null, "farm units are not clinic units");
  assert.equal(more.qtyShown(3, "box"), "masanduku 3");
});
