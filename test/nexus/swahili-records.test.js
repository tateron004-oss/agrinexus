"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { farmWorkTurn } = require("../../nexus/farmwork/index.js");
const { healthWorkTurn } = require("../../nexus/healthwork/index.js");
const words = require("../../nexus/i18n/swahili-words.js");
const { anyDay } = require("../../nexus/farmwork/parse.js");
const { fakeFarmStore, fakeMemory } = require("./farmwork-fake.js");

const NOW = new Date("2026-09-20T05:00:00Z"); // Sunday 20 September 2026 in Nairobi

function person({ userId = "u1", store = fakeFarmStore(), memory = fakeMemory() } = {}) {
  const base = { store, tenantId: "t1", userId, now: NOW, timeZone: "Africa/Nairobi", memory, nameOf: async () => "Amina" };
  return { store, memory, farm: text => farmWorkTurn({ ...base, text }), health: text => healthWorkTurn({ ...base, text }) };
}
const say = async (fn, lines) => { const out = []; for (const line of lines) out.push(await fn(line)); return out; };

// ---------- the shared words ----------
test("Swahili quantities, money and days are read as the English tools would read them", () => {
  assert.deepEqual(pick(words.parseQuantitySw("kilo 200 za mahindi")), { value: 200, unit: "kg" });
  assert.deepEqual(pick(words.parseQuantitySw("200 kg za mahindi")), { value: 200, unit: "kg" });
  assert.deepEqual(pick(words.parseQuantitySw("gunia 3 za maharage")), { value: 3, unit: "sack" });
  assert.deepEqual(pick(words.parseQuantitySw("tani 2 za mahindi")), { value: 2000, unit: "kg" });
  assert.deepEqual(pick(words.parseQuantitySw("lita 5 za maziwa")), { value: 5, unit: "L" });
  assert.equal(words.parseQuantitySw("mahindi mengi"), null);
  assert.deepEqual(words.parseMoneySw("kwa shilingi 9,000"), { amount: 9000, currency: "shillings" });
  assert.deepEqual(words.parseMoneySw("kwa 9000"), { amount: 9000, currency: "" });
  assert.deepEqual(words.parseMoneySw("KSh 5000"), { amount: 5000, currency: "KSh" });
  assert.equal(words.moneyShown(9000, "shillings"), "shilingi 9,000");
  const today = "2026-09-20";
  for (const [swahili, english] of [["kesho", "2026-09-21"], ["baada ya siku 3", "2026-09-23"], ["baada ya wiki 2", "2026-10-04"], ["Ijumaa", "2026-09-25"], ["Jumatatu ijayo", "2026-09-21"], ["tarehe 12 Machi", "2027-03-12"], ["12 Machi 2027", "2027-03-12"], ["keshokutwa", "2026-09-22"], ["leo", "2026-09-20"]]) {
    assert.equal(anyDay(words.dayInEnglish(swahili), today), english, swahili);
    assert.ok(words.isDayWord(swahili), swahili);
  }
  assert.equal(words.isDayWord("Mary"), false);
  assert.equal(words.describeDaySw("2026-09-20", today), "leo"); assert.equal(words.describeDaySw("2026-09-21", today), "kesho");
  assert.equal(words.describeDaySw("2026-09-25", today), "Ijumaa 25 Septemba"); assert.equal(words.describeDaySw("2027-03-12", today), "Ijumaa 12 Machi 2027");
  assert.equal(words.periodSw("mwezi huu", today).label, "mwezi huu"); assert.equal(words.periodSw("wiki iliyopita", today).label, "wiki iliyopita");
  assert.equal(words.englishItem("mahindi"), "maize"); assert.equal(words.swahiliItem("maize"), "mahindi"); assert.equal(words.swahiliItem("cocoyam"), "cocoyam");
});
const pick = q => q && { value: q.value, unit: q.unit };

// ---------- the farm ----------
test("a sale, a purchase and a payment in Swahili are recorded, move stock, and are summarised in Swahili", async () => {
  const p = person();
  const buy = await p.farm("Nimenunua gunia 2 za mbolea kwa shilingi 30000 kutoka kwa Juma");
  assert.match(buy, /umenunua gunia 2 za mbolea kutoka kwa Juma kwa shilingi 30,000/); assert.match(buy, /sasa una gunia 2 za mbolea/);
  await p.farm("Nimenunua mbegu kilo 10 kwa shilingi 5000");
  assert.match(await p.farm("Ghala langu"), /mbegu kilo 10; mbolea gunia 2|mbolea gunia 2; mbegu kilo 10/);
  assert.equal(await p.farm("Nina mbolea kiasi gani"), "Una gunia 2 za mbolea.");
  assert.match(await p.farm("Nimetumia mbolea gunia 1"), /zimebaki gunia 1/);
  const sale = await p.farm("Nimeuza kilo 200 za mahindi kwa Amina kwa shilingi 9000");
  assert.match(sale, /umeuza kilo 200 za mahindi kwa Amina kwa shilingi 9,000/); assert.match(sale, /Mapato ya mwezi huu: shilingi 9,000/);
  assert.match(await p.farm("Nimeuza kilo 50 za maharage kwa shilingi 40 kwa kilo"), /kwa shilingi 2,000/, "a price per kilo is multiplied out");
  assert.match(await p.farm("Nimetumia shilingi 5000 kwa usafiri"), /umetumia shilingi 5,000 kwa usafiri/);
  assert.match(await p.farm("Nimemlipa Juma Otieno shilingi 3000 kwa kupalilia"), /umemlipa Juma Otieno shilingi 3,000 kwa kupalilia/);
  assert.match(await p.farm("Nimetumia kiasi gani mwezi huu"), /Ulitumia shilingi 43,000 mwezi huu \(maingizo 4\)/);
  assert.match(await p.farm("Mapato yangu mwezi huu"), /Ulipata shilingi 11,000 mwezi huu \(maingizo 2\)/);
  assert.match(await p.farm("Faida yangu mwezi huu"), /mapato shilingi 11,000/);
  assert.match(await p.farm("Nimetumia kiasi gani kwa usafiri"), /Ulitumia shilingi 5,000 kwa usafiri mwezi huu/);
  assert.match(await p.farm("Onyesha rekodi zangu za pesa"), /leo /);
  assert.match(await p.farm("Futa rekodi ya mwisho ya mapato"), /Nimeondoa: mapato ya shilingi 2,000/);
});

test("Swahili and English share one set of records", async () => {
  const p = person();
  await p.farm("Nimeuza kilo 200 za mahindi kwa shilingi 9000");
  await p.farm("Nimetumia shilingi 4000 kwa mbolea");
  assert.match(await p.farm("How much did I earn this month?"), /You earned 9,000 shillings/);
  assert.match(await p.farm("Show my expenses"), /You spent 4,000 shillings/);
  await p.farm("I sold 100 kg of maize for 5000 shillings");
  assert.match(await p.farm("Mapato yangu mwezi huu"), /shilingi 14,000 mwezi huu \(maingizo 2\)/);
  const money = await p.store.list({ tenantId: "t1", userId: "u1", collection: "money" });
  assert.ok(money.some(record => record.data.item === "maize" && record.data.category === "crops"), "Swahili crop words are kept as the English tools name them");
  assert.ok(money.some(record => record.data.category === "fertiliser"));
});

test("Swahili farm talk that is not for the toolkit is left alone, and so is everything in English", async () => {
  const empty = person();
  for (const line of ["Nimenunua simu kwa 20000", "Nimeuza gari langu kwa 100000", "Habari yako", "Nimetumia simu yangu", "Nimeuza", "nina njaa", "Nina mbolea kiasi gani"]) assert.equal(await empty.farm(line), null, line);
  const farmer = person(); await farmer.farm("Nimenunua mbegu kilo 10 kwa shilingi 5000");
  for (const line of ["Nimetumia muda mwingi", "Nina wasiwasi", "Faida ya elimu ni nini", "Hali ya hewa ikoje leo?", "Nina swali", "Onyesha video ya muziki"]) assert.equal(await farmer.farm(line), null, line);
  // English is exactly as before
  assert.match(await farmer.farm("I sold 10 kg of maize for 1000 shillings"), /^Recorded: sold 10 kg of maize/);
});

test("the commands Kyro suggests in Swahili are understood in Swahili", async () => {
  const p = person(); await p.farm("Nimenunua mbegu kilo 10 kwa shilingi 5000");
  const source = fs.readFileSync(path.join(__dirname, "../../nexus/farmwork/swahili.js"), "utf8");
  const suggested = [...source.matchAll(/(?:Sema|au) \\?"([^"\\]+)\\?"/g)].map(match => match[1]).filter(text => !/\{|\$/.test(text));
  assert.ok(suggested.length >= 3);
  for (const command of suggested) assert.ok(await p.farm(command), `not understood: ${command}`);
});

// ---------- health ----------
test("a patient, a visit and a follow-up in Swahili: recorded as said, never interpreted, never named in the calendar", async () => {
  const p = person();
  assert.match(await p.health("Sajili mgonjwa Mary Akinyi, miaka 34, kike, Kibera"), /Nimemsajili #1 Mary Akinyi, takriban miaka 34, kike, Kibera/);
  assert.match(await p.health("Sajili mgonjwa Baby Otieno, miezi 6, kiume, kutoka Kisumu"), /#2 Baby Otieno, takriban miezi 6, kiume, Kisumu/);
  assert.match(await p.health("Sajili mgonjwa"), /Nani mgonjwa/);
  const visit = await p.health("Ziara ya Mary: joto 38.5, shinikizo la damu 120/80, mapigo 80, uzito 60 kg, uchunguzi: malaria");
  assert.match(visit, /Nimerekodi ziara 1 ya Mary Akinyi \(#1\): joto 38.5°C, shinikizo 120\/80, mapigo 80, uzito 60 kg/); assert.match(visit, /Hali \(kama ulivyosema\): malaria/);
  assert.doesNotMatch(visit, /kawaida|juu|chini|hatari|dawa|tibu|normal|high|low|dangerous/i, "no interpretation of a reading, and no treatment");
  assert.match(await p.health("Nimemwona Mary jana: joto 385"), /Sikuweza kusoma joto/, "an impossible number is not stored as a reading");
  const follow = await p.health("Mwone Mary tena baada ya siku 3");
  assert.match(follow, /Ufuatiliaji 1: Mary Akinyi \(#1\), Jumatano 23 Septemba/);
  await p.health("Mfuatilie Mary Ijumaa: kuangalia jeraha");
  const calendar = JSON.stringify(p.memory.items || p.memory.personal || []);
  assert.match(calendar, /Mfuatilie mgonjwa 1/); assert.doesNotMatch(calendar, /Mary|Akinyi/, "no patient name in the calendar");
  assert.match(await p.health("Mwone Mary tena"), /lini tena/);
  assert.match(await p.health("Wagonjwa gani wanahitaji kuonwa"), /Ufuatiliaji 2 unasubiri/);
  assert.match(await p.health("Ufuatiliaji 1 umekamilika"), /umewekwa alama kuwa umekamilika/);
  assert.match(await p.health("Mary ana mzio wa penicillin"), /ana mzio wa penicillin/);
  assert.match(await p.health("Onyesha wagonjwa wangu"), /Una wagonjwa 2/);
  const record = await p.health("Rekodi ya Mary");
  assert.match(record, /Mizio uliyoniambia: penicillin/); assert.match(record, /Ziara \(2\)/);
  assert.match(await p.health("Andika kumbuka kuhusu Mary: anakunywa maji zaidi"), /Nimeandika kwa Mary Akinyi/);
  assert.match(await p.health("Onyesha ziara za Mary"), /joto 38\.5°C/);
  assert.match(await p.health("Rekodi ziara ya Bob: joto 37"), /Sina mgonjwa anayeitwa Bob/, "an explicit request for an unknown patient says so");
});

test("Swahili and English share one register", async () => {
  const p = person();
  await p.health("Sajili mgonjwa Mary Akinyi, miaka 34, kike, Kibera");
  assert.match(await p.health("Show my patients"), /#1 Mary Akinyi, about 34 years, female, Kibera/);
  await p.health("Visit Mary: temp 38.2, diagnosis: malaria");
  assert.match(await p.health("Ziara ya mwisho ya Mary"), /joto 38\.2°C/);
  assert.match(await p.health("Show me Mary's record"), /Visits \(1\)/);
  const patients = await p.store.list({ tenantId: "t1", userId: "u1", collection: "patient" });
  assert.equal(patients[0].data.sex, "female"); assert.equal(patients[0].data.village, "Kibera");
  assert.equal(patients[0].data.bornApprox, true);
});

test("Swahili health talk that is not for the toolkit is left alone", async () => {
  const empty = person();
  for (const line of ["Ziara ya Mary: joto 38", "Mwone Mary kesho", "Rekodi ya Mary", "Habari za asubuhi", "Mgonjwa wangu ni baba yangu"]) assert.equal(await empty.health(line), null, line);
  const worker = person(); await worker.health("Sajili mgonjwa Mary Akinyi");
  for (const line of ["Ziara ya Nairobi: nilikwenda kazini", "Ziara ya rais ni lini", "Nimemwona Juma sokoni", "Mwone rafiki yangu kesho", "Nimeandika kumbuka", "Kumbuka kununua maziwa", "Mzio wa msimu ni nini?"]) assert.equal(await worker.health(line), null, line);
});

test("a Swahili worker sees no English record-keeping words in what Kyro says back", async () => {
  const p = person(); await p.health("Sajili mgonjwa Mary Akinyi, miaka 34, kike, Kibera");
  const replies = [await p.health("Ziara ya Mary: joto 38.5, mapigo 80"), await p.health("Mwone Mary tena kesho"), await p.health("Wagonjwa gani wanahitaji kuonwa"), await p.health("Rekodi ya Mary")];
  for (const reply of replies) assert.doesNotMatch(reply, /\b(?:Visit|visit|Follow|follow|patient|Patient|record|Recorded|tomorrow|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday|September|days?)\b/, reply);
});

test("the commands Kyro suggests in Swahili for health are understood in Swahili", async () => {
  const p = person(); await p.health("Sajili mgonjwa Mary Akinyi, miaka 34, kike, Kibera");
  const source = fs.readFileSync(path.join(__dirname, "../../nexus/healthwork/swahili.js"), "utf8");
  const suggested = [...source.matchAll(/Sema \\?"([^"\\]+)\\?"/g)].map(match => match[1]).filter(text => !/\{|\$/.test(text)).map(text => text.replace(/…/, "joto 37"));
  assert.ok(suggested.length >= 3);
  for (const command of suggested) assert.ok(await p.health(command), `not understood: ${command}`);
});

test("English health and farm tools are untouched by the Swahili front doors", async () => {
  const p = person();
  assert.match(await p.health("Register a patient called Mary Akinyi, 34, female, Kibera"), /Let's register them|Registered/);
  assert.equal(await p.farm("What is the capital of Kenya?"), null);
  assert.equal(await person().health("hello"), null);
});
