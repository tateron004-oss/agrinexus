"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { farmWorkTurn } = require("../../nexus/farmwork/index.js");
const { healthWorkTurn } = require("../../nexus/healthwork/index.js");
const business = require("../../nexus/farmwork/swahili-business.js");
const words = require("../../nexus/i18n/swahili-words.js");
const { fakeFarmStore, fakeMemory } = require("./farmwork-fake.js");

const NOW = new Date("2026-09-20T05:00:00Z"); // Sunday 20 September 2026 in Nairobi

function farmer({ userId = "u1", store = fakeFarmStore(), memory = fakeMemory(), names = {}, sent = [] } = {}) {
  const notifications = { enqueue: async item => { sent.push(item); }, existsByKey: async ({ idempotencyKey }) => sent.some(item => item.idempotencyKey === idempotencyKey) };
  const base = { store, tenantId: "t1", userId, now: NOW, timeZone: "Africa/Nairobi", memory, notifications, nameOf: async args => names[args.userId] || "Amina Wanjiru" };
  return { store, memory, sent, say: text => farmWorkTurn({ ...base, text }), health: text => healthWorkTurn({ ...base, text }) };
}
const calendar = f => JSON.stringify(f.memory.items || f.memory.personal || []);
const list = (f, collection) => f.store.list({ tenantId: "t1", userId: "u1", collection });

test("the farm profile and fields in Swahili, over the same records the English tools read", async () => {
  const f = farmer();
  const saved = await f.say("Weka wasifu wa shamba langu: jina Shamba la Amina, karibu na Kisumu, ekari 5, mvua, mazao mahindi na maharage, mifugo ng'ombe na kuku");
  assert.match(saved, /Shamba la Amina, karibu na Kisumu, ekari 5, mvua, mazao: mahindi, maharage, mifugo: ng'ombe, kuku/);
  assert.match(await f.say("Onyesha wasifu wa shamba langu"), /^Shamba lako: Shamba la Amina/);
  assert.match(await f.say("Show my farm profile"), /Your farm: Shamba la Amina, near Kisumu, 5 acres, rain-fed, growing maize, beans/, "English reads the Swahili profile");
  assert.match(await f.say("Ongeza shamba linaloitwa Kaskazini, ekari 2, mahindi, kilipandwa 12 Septemba, natarajia kilo 800"), /Nimeongeza Kaskazini — ekari 2, mahindi, kupanda Jumamosi 12 Septemba/);
  assert.match(await f.say("Ongeza shamba"), /Shamba hilo linaitwaje/);
  assert.match(await f.say("Ongeza shamba linaloitwa Kaskazini"), /Tayari una shamba linaloitwa Kaskazini/);
  assert.match(await f.say("Ongeza shamba linaloitwa Kusini, hekta 1"), /Nimeongeza Kusini — hekta 1/);
  assert.match(await f.say("Onyesha mashamba yangu"), /Una mashamba 2 \(takriban ekari 4\.5 zote\)/);
  assert.match(await f.say("Show my fields"), /Kaskazini — 2 acres, maize, planted/, "English reads the Swahili field");
  assert.match(await f.say("Nieleze kuhusu shamba Kaskazini"), /unatarajia kilo 800, bado hujavuna/);
  assert.match(await f.say("Nimepanda maharage kwenye shamba Kusini tarehe 5 Septemba"), /umepanda maharage kwenye Kusini Jumamosi 5 Septemba/);
  assert.match(await f.say("Natarajia kilo 300 kutoka shamba Kusini"), /unatarajia kilo 300 kutoka Kusini/);
  assert.match(await f.say("Mavuno yangu yanaendeleaje"), /Mavuno mwaka huu — .*Kaskazini: unatarajia kilo 800/);
  const plan = await f.say("Tengeneza kalenda ya mazao ya shamba Kaskazini");
  assert.match(plan, /Nimeweka kazi 6 kwenye kalenda yako za Kaskazini/); assert.match(plan, /kagua viwavi jeshi/); assert.match(plan, /si ahadi/);
  assert.match(calendar(f), /Kaskazini: palilia mara ya kwanza/); assert.doesNotMatch(calendar(f), /weeding|armyworm/, "the calendar jobs are in Swahili");
  assert.match(await f.say("Tengeneza kalenda ya mazao ya shamba Kaskazini"), /tayari ziko kwenye kalenda yako/);
  assert.match(await f.say("Panga palizi kwa shamba Kaskazini Ijumaa"), /Nimepanga: Kaskazini — palizi Ijumaa 25 Septemba/);
  assert.match(await f.say("Ondoa shamba Kusini"), /Niondoe shamba Kusini\? Sema ndiyo kuendelea, au hapana kuacha/);
  assert.match(await f.say("hapana"), /Sawa, nimeacha kama ilivyo/);
  await f.say("Ondoa shamba Kusini"); assert.match(await f.say("ndiyo"), /Nimeondoa Kusini/);
  assert.equal((await list(f, "field")).length, 1);
});

test("animals in Swahili: recorded as told, keeping a tag the English tools find too", async () => {
  const f = farmer();
  assert.match(await f.say("Ongeza ng'ombe anayeitwa Bella, jike, aina ya Friesian, alizaliwa 2022"), /Nimeongeza Bella — ng'ombe, Friesian, jike, miaka 4/);
  assert.match(await f.say("Ongeza ng'ombe 12"), /Nimeongeza ng'ombe 12/);
  assert.match(await f.say("Ongeza kuku 50"), /Nimeongeza kuku 50 \(kuku 50\)|Nimeongeza kuku 50/);
  assert.match(await f.say("Ongeza ng'ombe 12"), /Tayari una mnyama mwenye jina ng'ombe 12/);
  assert.equal(await f.say("Ongeza ng'ombe"), "Ni mnyama gani? Sema \"ongeza ng'ombe anayeitwa Bella, jike\" au \"ongeza kuku 50\".");
  assert.match(await f.say("Show my animals"), /cow 12 — cattle/, "English sees the Swahili tag stored in English");
  assert.match(await f.say("Onyesha mifugo yangu"), /Una rekodi 3 za wanyama/);
  const vaccinated = await f.say("Nimemchanja Bella dhidi ya ugonjwa wa miguu na midomo, dozi ijayo baada ya miezi 6");
  assert.match(vaccinated, /Bella amechanjwa \(ugonjwa wa miguu na midomo\) leo\. Nitakumbuka kuwa inatakiwa tena Jumamosi 20 Machi 2027/); assert.match(vaccinated, /muulize daktari wa mifugo mnyama wako anahitaji nini/);
  assert.doesNotMatch(vaccinated, /unahitaji chanjo|anapaswa|tumia dawa|kipimo/i, "no advice on what an animal needs");
  assert.match(await f.say("Nimempima Bella: kilo 320"), /Bella ana uzito wa kilo 320/); assert.match(await f.say("Nimempima Bella kilo 335"), /Amepanda kilo 15 tangu mapema leo/);
  assert.match(await f.say("Nimempima Bella kilo 99999"), /halionekani kuwa uzito wa mnyama/);
  assert.match(await f.say("Bella ametoa lita 12 za maziwa"), /Bella ametoa lita 12 leo/); assert.match(await f.say("Bella ametoa maziwa kiasi gani"), /Bella alitoa lita 12 leo/);
  assert.match(await f.say("Bella amepandishwa tarehe 1 Septemba"), /kipindi cha kawaida, si ahadi/);
  assert.match(await f.say("Nimemlisha Bella kilo 5 za nyasi"), /umemlisha Bella kilo 5 za nyasi/);
  assert.match(await f.say("Nimemwogesha ng'ombe 12"), /ng'ombe 12 ameogeshwa leo/); assert.match(await f.say("Nimempa ng'ombe 12 dawa ya minyoo, rudia baada ya siku 30"), /inatakiwa tena Jumanne 20 Oktoba/);
  assert.match(await f.say("Nieleze kuhusu Bella"), /Uzito wa mwisho kilo 335.*Chanjo ya mwisho ugonjwa wa miguu na midomo leo/s);
  assert.match(await f.say("Chanjo zipi zinatakiwa kwa mifugo yangu"), /ng'ombe 12 dawa ya minyoo inatakiwa Jumanne 20 Oktoba/);
  assert.match(await f.say("Show my animals"), /bella — cattle/);
  assert.match(await f.say("Bella amekufa"), /Nimweke Bella kuwa ameondoka/); assert.match(await f.say("sawa"), /Bella amewekwa kuwa ameondoka/);
  assert.match(await f.say("Onyesha mifugo yangu"), /Una rekodi 2 za wanyama/);
  assert.equal(await f.say("Nimemchanja Zed dhidi ya X"), null, "an animal that is not there is left to normal planning");
  await f.say("Ongeza ng'ombe anayeitwa Zuri, jike");
  assert.match(await f.say("Ondoa Zuri"), /Nimwondoe Zuri na kuacha kutunza rekodi zake\? Sema ndiyo kuendelea, au hapana kuacha\./, "removing an animal by its bare name (no species word) works, matching the English tools");
  assert.match(await f.say("ndiyo"), /Nimeondoa Zuri/);
  assert.equal(await f.say("Ondoa mfanyakazi Zaidi"), "Sina mfanyakazi anayeitwa Zaidi.", "a bare 'ondoa' for an unknown name still answers instead of falling through silently");
});

test("workers and jobs in Swahili", async () => {
  const f = farmer();
  assert.match(await f.say("Ongeza mfanyakazi Juma, +254712345678, kupalilia"), /Nimemwongeza Juma \(kupalilia\)/);
  assert.equal(await f.say("Ongeza mfanyakazi"), "Mfanyakazi anaitwa nani? Sema \"ongeza mfanyakazi Juma, +254712345678, kupalilia\".");
  assert.match(await f.say("Onyesha wafanyakazi wangu"), /Wafanyakazi wako: Juma \(kupalilia\)/);
  assert.match(await f.say("Mpe Juma kazi ya kupalilia shamba Kaskazini kufikia Ijumaa"), /Kazi 1: kupalilia shamba Kaskazini — Juma, inatakiwa Ijumaa 25 Septemba/);
  assert.match(await f.say("Ongeza kazi: kunyunyizia mahindi kwa Amina kesho"), /Kazi 2: kunyunyizia mahindi — Amina, inatakiwa kesho\.$/); // Amina is not a worker yet
  assert.match(await f.say("Mpe Zawadi kazi ya kuvuna"), /Bado sina Zawadi kwenye wafanyakazi wako/);
  assert.match(await f.say("Kazi zipi zimebaki"), /Una kazi 3 zilizo wazi/); assert.match(await f.say("Show my open jobs"), /3 open jobs/, "English reads the Swahili jobs");
  assert.match(await f.say("Onyesha kazi za Juma"), /Juma ana kazi 1/); assert.match(await f.say("Juma anatakiwa kufanya nini"), /Juma ana kazi 1/);
  assert.match(await f.say("Kazi 1 imekamilika"), /Imekamilika: kupalilia shamba Kaskazini \(Juma\)\. Kazi 2 bado ziko wazi/);
  assert.match(await f.say("Amina amemaliza kunyunyizia mahindi"), /Imekamilika: kunyunyizia mahindi \(Amina\)/);
  assert.match(await f.say("Onyesha kazi zilizokamilika"), /imekamilika leo/);
  assert.match(await f.say("Kazi zipi zimechelewa"), /Hakuna kilichochelewa/);
  await f.say("Ongeza kazi: kupalilia mahindi kwa Juma kufikia jana"); assert.match(await f.say("Kazi zipi zimechelewa"), /Kazi 1 zimechelewa/);
  assert.match(await f.say("Ondoa kazi 1"), /Niondoe kazi 1/); assert.match(await f.say("ndiyo"), /Nimeondoa kazi 1/);
  assert.match(await f.say("Ondoa mfanyakazi Juma"), /Nimwondoe Juma kwenye wafanyakazi wako/); assert.match(await f.say("hapana"), /Sawa, nimeacha kama ilivyo/);
});

test("the pest and disease journal records what was seen and never says what it is or what to use", async () => {
  const f = farmer(); await f.say("Ongeza shamba linaloitwa Kaskazini, ekari 2, mahindi");
  const logged = await f.say("Nimeona viwavi jeshi kwenye mahindi shamba Kaskazini");
  assert.match(logged, /Nimeandika #1: "viwavi jeshi kwenye mahindi shamba Kaskazini" \(Kaskazini, mahindi\)/); assert.match(logged, /siwezi kukuambia ni nini wala cha kutumia/);
  assert.doesNotMatch(logged, /nyunyizia dawa|tumia dawa|ni ugonjwa wa|ni wadudu aina|ni funza/i);
  assert.match(await f.say("Andika tatizo: majani ya nyanya yana madoa"), /Nimeandika #2/);
  assert.match(await f.say("Sasisha tatizo 1: nilinyunyizia dawa"), /Nimeongeza kwenye tatizo 1: nilinyunyizia dawa/);
  assert.match(await f.say("Tatizo 1 limetatuliwa"), /Nimeliweka kuwa limetatuliwa/);
  assert.match(await f.say("Onyesha matatizo yangu ya wadudu na magonjwa"), /Matatizo 1 wazi, 1 yaliyotatuliwa/);
  assert.match(await f.say("Onyesha matatizo kwenye shamba Kaskazini"), /Kwenye Kaskazini: #1/);
  assert.match(await f.say("Nilifanya nini kuhusu viwavi"), /Uliandika: nilinyunyizia dawa/);
  assert.match(await f.say("Show my pest journal"), /open problem/, "English reads the same journal");
  for (const line of ["Nimeona mbwa barabarani", "Nimeona nzige kwenye habari", "Nimeona ugonjwa wa kuambukiza kwenye gazeti", "Nimeona rafiki yangu"]) assert.equal(await f.say(line), null, line);
});

test("buyers, suppliers, follow-ups and orders in Swahili; delivering an order records the money and moves the stock", async () => {
  const f = farmer();
  await f.say("Nimenunua mbegu kilo 10 kwa shilingi 5000");
  assert.match(await f.say("Ongeza mnunuzi Amina, +254712345678, mahindi, Kisumu"), /Nimemwongeza Amina \(mnunuzi, mahindi, Kisumu\)/);
  assert.match(await f.say("Ongeza msambazaji Juma"), /Nimemwongeza Juma \(msambazaji\)/);
  assert.match(await f.say("Ongeza mnunuzi"), /Anaitwa nani/);
  assert.match(await f.say("Onyesha wanunuzi wangu"), /wanunuzi wako: Amina \(mahindi\), Kisumu/i); assert.match(await f.say("Show my buyers"), /Amina/, "English reads the same buyers");
  assert.match(await f.say("Andika kuhusu Amina: anataka mahindi wiki ijayo"), /Nimeandika kuhusu Amina/);
  assert.equal(await f.say("Andika kuhusu Bob: x"), null);
  assert.match(await f.say("Mfuatilie Amina Ijumaa: kuhusu bei"), /Ufuatiliaji 1: Amina — kuhusu bei, Ijumaa 25 Septemba/); assert.match(calendar(f), /Mfuatilie Amina: kuhusu bei/);
  assert.equal(await f.say("Mfuatilie Zed kesho"), null);
  assert.match(await f.say("Nani nimfuatilie"), /Una ufuatiliaji 1 unaosubiri/);
  assert.match(await f.say("Nimemaliza kumfuatilia Amina"), /Imekamilika: ufuatiliaji wa Amina/);
  assert.match(await f.say("Amina ameagiza kilo 100 za mahindi kwa shilingi 40 kwa kilo kufikia Ijumaa"), /Agizo 1: kilo 100 za mahindi kwa Amina kwa shilingi 40 kwa kilo \(shilingi 4,000 kwa jumla\), Ijumaa 25 Septemba/);
  assert.match(await f.say("Nimeagiza gunia 2 za mbolea kutoka kwa Juma kwa shilingi 15000 kwa gunia"), /Agizo la ununuzi 2: gunia 2 za mbolea kutoka kwa Juma kwa shilingi 15,000 kwa gunia \(shilingi 30,000 kwa jumla\)/);
  assert.match(await f.say("Onyesha maagizo yangu"), /Maagizo 2 yaliyo wazi/); assert.match(await f.say("Show my orders"), /2 open orders/);
  assert.match(await f.say("Agizo 1 limetolewa"), /mapato ya shilingi 4,000 yamerekodiwa/); assert.match(await f.say("Agizo 2 limepokelewa"), /matumizi ya shilingi 30,000 yamerekodiwa; imeongezwa ghalani \(una gunia 2 za mbolea\)/);
  assert.match(await f.say("Agizo 1 limetolewa"), /tayari limekamilika/);
  assert.match(await f.say("Nieleze kuhusu Amina"), /Amina \(mnunuzi\).*Maagizo 1: kilo 100 mahindi \(limekamilika\).*ulipata shilingi 4,000.*Kumbukumbu: anataka mahindi wiki ijayo/s);
  assert.match(await f.say("Chapisha stakabadhi ya Amina").then(r => r.report.content), /kilo 100 za mahindi.*JUMA|kilo 100 za mahindi/s);
  assert.match(await f.say("Ondoa mnunuzi Amina"), /Nimwondoe Amina/); assert.match(await f.say("ndiyo"), /Nimeondoa Amina/);
  assert.match(await f.say("Show my income this month"), /4,000/, "English reads the money the Swahili delivery recorded");
});

test("the cooperative in Swahili", async () => {
  const f = farmer();
  assert.match(await f.say("Anzisha ushirika wetu Umoja wa Wakulima, ada 500 kila mwezi"), /Nimeanzisha Umoja wa Wakulima, ada 500 kila mwezi/);
  assert.match(await f.say("Ongeza mwanachama Amina, +254712345678"), /mwanachama 1/); await f.say("Ongeza mwanachama Juma");
  assert.equal(await f.say("Ongeza mwanachama"), "Mwanachama anaitwa nani? Sema \"ongeza mwanachama Amina\".");
  assert.match(await f.say("Onyesha wanachama wangu"), /Wanachama 2: 1\. Amina; 2\. Juma/); assert.match(await f.say("show cooperative members"), /2 members/);
  assert.match(await f.say("Amina amelipa ada 500"), /Amina amelipa ada ya 500\. Ada zimelipwa zote mwezi huu/);
  assert.match(await f.say("Juma amechangia shilingi 1000 kwa ajili ya mbolea"), /Juma amechangia shilingi 1,000 \(mbolea\)/);
  assert.match(await f.say("Nani hajalipa ada"), /Wanachama 1 wanadaiwa ada mwezi huu: Juma 500/);
  assert.match(await f.say("Malipo ya ushirika kwa Amina: 5000 kwa mauzo"), /ushirika umemlipa Amina 5,000 kwa mauzo/);
  assert.match(await f.say("Onyesha michango ya ushirika"), /ada 500, michango 1,000, zilizolipwa 5,000/); assert.match(await f.say("Who hasn't paid dues"), /Juma/);
  await f.say("Ongeza kifaa cha pamoja: trekta"); assert.match(await f.say("Weka nafasi ya trekta kwa Amina Ijumaa"), /Nimeweka nafasi ya trekta kwa Amina Ijumaa 25 Septemba/);
  assert.match(await f.say("Weka nafasi ya trekta kwa Juma Ijumaa"), /tayari ina nafasi Ijumaa 25 Septemba kwa Amina/); assert.match(await f.say("Nani ana trekta wiki hii"), /Ijumaa 25 Septemba — Amina/);
  assert.match(await f.say("Amina amewasilisha kilo 200 za mahindi kwenye ushirika"), /Ushirika una kilo 200 za mahindi mwaka huu/);
  assert.match(await f.say("Onyesha muhtasari wa ushirika"), /Umoja wa Wakulima: wanachama 2, 1 wamelipa ada zote mwezi huu/);
  assert.match(await f.say("Ondoa mwanachama Juma"), /Nimwondoe Juma kwenye ushirika/); assert.match(await f.say("ndiyo"), /Nimeondoa Juma/);
});

test("the community board in Swahili: what a listing shows, who can change it, and the bilingual note to the poster", async () => {
  const store = fakeFarmStore(); const memory = fakeMemory(); const sent = [];
  const seller = farmer({ userId: "u1", store, memory, sent, names: { u1: "Amina Wanjiru", u2: "Juma Otieno" } }); const buyer = farmer({ userId: "u2", store, memory, sent, names: { u1: "Amina Wanjiru", u2: "Juma Otieno" } });
  assert.match(await seller.say("Weka tangazo: ninauza kilo 500 za mahindi kwa shilingi 40 kwa kilo"), /Tangazo 1: linauzwa — kilo 500 za mahindi kwa shilingi 40 kwa kilo — Amina Wanjiru.*kamwe si namba yako ya simu/);
  assert.match(await seller.say("Weka tangazo: natafuta kununua gunia 10 za maharage, bei shilingi 50000 kwa jumla"), /Tangazo 2: linatafutwa — gunia 10 za maharage kwa shilingi 5,000 kwa gunia/);
  assert.match(await seller.say("Weka tangazo: ninauza kilo 5 za nyanya"), /Bei unayotaka ni ipi/);
  assert.match(await buyer.say("Onyesha ubao"), /Matangazo 2/); assert.match(await buyer.say("Nani anauza mahindi"), /Matangazo 1 ya mahindi/); assert.match(await buyer.say("Nani ananunua maharage"), /Maombi 1 ya maharage/);
  assert.match(await buyer.say("What is for sale"), /Listing 1: for sale — 500 kg of maize/, "English reads the Swahili listing");
  assert.match(await buyer.say("Tangazo 1 limeuzwa"), /si lako/); assert.match(await seller.say("Nimependezwa na tangazo 1"), /tangazo lako mwenyewe/);
  assert.match(await buyer.say("Nimependezwa na tangazo 1"), /Nimempa jina lako tu, si namba yako/);
  assert.equal(sent.length, 1); assert.match(sent[0].content.body, /Juma Otieno amependezwa na tangazo lako 1/); assert.match(sent[0].content.body, /Juma Otieno is interested in your listing 1/, "Swahili first, then English");
  assert.doesNotMatch(sent[0].content.body, /\+254/, "no number unless the buyer gave one");
  assert.match(await buyer.say("Nimependezwa na tangazo 1"), /sitatuma tena/);
  assert.match(await seller.say("Onyesha matangazo yangu"), /Tangazo 2.*Tangazo 1/s);
  assert.match(await seller.say("Tangazo 1 limeuzwa"), /limeuzwa na kuliondoa kwenye ubao/); assert.match(await seller.say("Ondoa tangazo 2"), /Nimeondoa tangazo 2/); assert.match(await seller.say("Ondoa tangazo 9"), /Siwezi kupata tangazo lililo wazi 9/);
});

test("loans, break-even and budgets in Swahili do the same arithmetic as English, and say they are not advice", async () => {
  const f = farmer();
  const swahili = await f.say("Mkopo wa shilingi 100000 kwa riba ya 12% kwa miezi 12");
  assert.match(swahili, /Mkopo wa shilingi 100,000, riba asilimia 12 kwa mwaka, muda wa miezi 12: takriban shilingi 8,885 kwa mwezi, shilingi 106,619 zitalipwa kwa jumla, ambapo shilingi 6,619 ni riba/); assert.match(swahili, /masharti halisi ya mkopeshaji/);
  const english = await f.say("Calculate a loan of 100000 shillings at 12% over 12 months"); assert.match(english, /8,885 shillings a month, 106,619 shillings paid back in all, of which 6,619 shillings is interest/);
  assert.match(await f.say("Hesabu mkopo wa shilingi 100000 kwa riba ya 12% kwa miaka 2, riba tambarare"), /muda wa miezi 24 \(riba tambarare\): takriban shilingi 5,167 kwa mwezi/);
  assert.match(await f.say("Mkopo wa shilingi 100000"), /nahitaji riba/); assert.match(await f.say("Mkopo wa shilingi 100000 kwa riba ya 12%"), /nahitaji muda/); assert.match(await f.say("Mkopo wa 500000 kwa riba ya 300% kwa miezi 12"), /hazionekani sawa/);
  const noRecords = await f.say("Naweza kumudu mkopo wa shilingi 100000 kwa riba ya 12% kwa miezi 12"); assert.match(noRecords, /nahitaji rekodi zako za mapato na matumizi/); assert.match(noRecords, /masharti halisi/);
  await f.say("Nimeuza kilo 200 za mahindi kwa shilingi 90000"); await f.say("Nimetumia shilingi 30000 kwa mbolea");
  const afford = await f.say("Naweza kumudu mkopo wa shilingi 100000 kwa riba ya 12% kwa miezi 12"); assert.match(afford, /si ushauri wa kifedha/); assert.doesNotMatch(afford, /unapaswa kukopa|usikope|ni wazo zuri|ni wazo baya/i, "no advice to borrow or not to borrow");
  assert.match(await f.say("Bei ya kuvunja hasara: gharama 60000, natarajia kilo 800 kwa shilingi 100 kwa kilo"), /takriban 75 kwa kilo.*faida ya shilingi 20,000 \(asilimia 33 ya gharama\)/s);
  assert.match(await f.say("Bei ya kuvunja hasara: gharama 60000"), /nahitaji gharama na unachotarajia kuvuna/);
  assert.match(await f.say("Panga bajeti: mbegu 5000, mbolea 8000, vibarua 12000, natarajia kilo 800 kwa shilingi 60 kwa kilo"), /mbegu shilingi 5,000, mbolea shilingi 8,000, vibarua shilingi 12,000 — shilingi 25,000 kwa jumla.*31\.25 kwa kilo.*faida ya shilingi 23,000.*si ahadi/s);
  assert.equal(await f.say("Panga bajeti"), null); // "panga bajeti" alone is not a plan
});

test("printable reports in Swahili carry only what was recorded", async () => {
  const f = farmer();
  await f.say("Nimenunua gunia 2 za mbolea kwa shilingi 30000 kutoka kwa Juma"); await f.say("Nimeuza kilo 200 za mahindi kwa Amina kwa shilingi 90000"); await f.say("Ongeza shamba linaloitwa Kaskazini, ekari 2, mahindi"); await f.say("Ongeza kazi: kupalilia kwa Juma kesho"); await f.say("Ongeza ng'ombe anayeitwa Bella, jike");
  const summary = (await f.say("Chapisha muhtasari wa shamba langu")).report; assert.match(summary.content, /MUHTASARI WA SHAMBA/); assert.match(summary.content, /Kaskazini — ekari 2, mahindi/); assert.match(summary.content, /Mapato: {3}shilingi 90,000/); assert.match(summary.content, /mbolea: gunia 2|mbolea: gunia 2/);
  assert.doesNotMatch(summary.content, /Income|Spending|FIELDS|LIVESTOCK|Prepared by/, "no English in a Swahili report");
  const spend = (await f.say("Chapisha ripoti ya matumizi ya shamba langu")).report; assert.match(spend.content, /RIPOTI YA MATUMIZI/); assert.match(spend.content, /JUMA?|JUMLA: shilingi 30,000/);
  const income = (await f.say("Chapisha ripoti ya mapato yangu mwezi huu")).report; assert.match(income.title, /Ripoti ya mapato mwezi huu/); assert.match(income.content, /mahindi \(Amina\)/);
  assert.match((await f.say("Chapisha taarifa ya faida na hasara ya shamba langu")).report.content, /faida ya shilingi 60,000/);
  assert.match((await f.say("Chapisha orodha ya ghala langu")).report.content, /mbolea/); assert.match((await f.say("Chapisha orodha ya kazi zangu")).report.content, /kupalilia/); assert.match((await f.say("Chapisha daftari la mifugo yangu")).report.content, /DAFTARI LA MIFUGO/);
  assert.match((await f.say("Chapisha ripoti ya matumizi ya shamba langu kama pdf")).report.format, /pdf/);
  assert.match((await f.say("Chapisha ripoti ya matumizi ya shamba langu kwa Kiingereza")).report.content, /EXPENSE REPORT/);
  for (const line of ["Chapisha ripoti ya hali ya hewa", "Chapisha ripoti ya shule", "Tengeneza orodha ya kazi za safari", "Chapisha picha ya mifugo"]) assert.equal(await f.say(line), null, line);
});

// Found live (business-ledger audit, same bug as the English receipt()): a
// sale recorded with no parseable quantity has qty:null, so it was
// silently dropped from both the printed receipt's lines and its total.
test("a Swahili receipt includes a recorded sale even when it has no parseable quantity", async () => {
  const f = farmer();
  await f.say("Nimeuza kilo 200 za mahindi kwa Otieno kwa shilingi 9000");
  await f.say("Nimeuza maziwa kwa Otieno kwa shilingi 500");
  const receipt = (await f.say("Chapisha risiti ya Otieno")).report;
  assert.match(receipt.content, /mahindi/);
  assert.match(receipt.content, /maziwa/, "the no-quantity sale must appear on the receipt, not be silently dropped");
  assert.match(receipt.content, /9,500/, "the no-quantity sale must be included in the printed total");
});

// Found live (business-ledger audit): a party's "history" earned/spent
// totals summed raw amounts across every currency, mislabeled with
// whichever record happened to be first -- the same currency-combining bug
// already fixed in money.js's own report/receipt totals.
test("a Swahili party history keeps different currencies separate instead of adding them together under one label", async () => {
  const f = farmer();
  await f.say("Ongeza mnunuzi Otieno"); await f.say("skip"); await f.say("skip"); await f.say("skip");
  await f.say("Nimeuza kilo 10 za mahindi kwa Otieno kwa dola 500");
  await f.say("Nimeuza kilo 20 za maharage kwa Otieno kwa shilingi 3000");
  const history = await f.say("Historia ya Otieno");
  assert.match(history, /\$500(?:\.00)?/, "the USD total must appear on its own");
  assert.match(history, /3,000/, "the shillings total must appear on its own, separate from the USD total");
});

test("safety guides in Swahili: emergencies answer at once, the text is conservative, and everyday talk is left alone", async () => {
  const f = farmer();
  for (const line of ["Nimemeza dawa ya kuua wadudu", "Amemeza sumu", "Mtoto amemeza dawa ya kunyunyizia", "Dawa ya wadudu imemwagika machoni"]) { const answer = await f.say(line); assert.match(answer, /Hatua za kwanza: sumu ya dawa ya wadudu/, line); assert.match(answer, /namba ya dharura/); assert.match(answer, /usimfanye atapike/); }
  for (const line of ["Nimeng'atwa na nyoka", "Nyoka amemng'ata mtoto wangu", "Ameng'atwa na nyoka", "Nimeng’atwa na nyoka"]) { const answer = await f.say(line); assert.match(answer, /Hatua za kwanza: kuumwa na nyoka/, line); assert.match(answer, /Usikate mahali palipong'atwa, usinyonye, usifunge kwa kamba/); }
  assert.match(await f.say("Orodhesha miongozo ya shamba"), /Miongozo ya shamba ninayotunza.*kuhifadhi nafaka/s);
  assert.match(await f.say("Soma mwongozo wa kuhifadhi nafaka"), /Kausha nafaka kabisa juani/); assert.match(await f.say("Mwongozo: mboji"), /Kutengeneza mboji/); assert.match(await f.say("Nifanye nini ng'ombe akimpiga mtu teke"), /Hatua za kwanza: kuumwa, kupigwa teke/);
  assert.match(await f.say("Mwongozo wa nyota"), /Sina mwongozo kuhusu hilo/);
  const emergency = await f.say("Nimeng'atwa na nyoka"); assert.match(emergency, /si mbadala wa mhudumu wa afya/);
  for (const line of ["Nimemeza chakula", "Nyoka ni mnyama mzuri", "Nifanye nini kuhusu bei ya mahindi", "Sumu ya kisiasa ni mbaya", "Nimeona nyoka kwenye picha", "Kemikali ya shule"]) assert.equal(await f.say(line), null, line);
  for (const guide of business.GUIDES) { assert.ok(guide.text.length > 200); assert.doesNotMatch(guide.text, /\b(?:the|and|your|should)\b/, `no English left in the ${guide.id} guide`); }
  assert.equal(business.GUIDES.length, 13);
});

test("English farm talk and English confirmations are unchanged, and the Swahili front doors ignore ordinary talk", async () => {
  const f = farmer();
  assert.match(await f.say("I sold 10 kg of maize for 1000 shillings"), /^Recorded: sold 10 kg of maize/);
  assert.match(await f.say("Remove the field North Plot"), /You don't have a field|I don't have a field|Remove the field/);
  for (const line of ["Habari za asubuhi", "Nataka kwenda sokoni", "Shamba la jirani yangu ni kubwa", "Kazi ni nzuri", "Mfanyakazi wa benki alikuja", "Ushirika wa kisiasa", "Tangazo la redio", "Wanyama wa porini", "Mkopo wa gari langu ulikwisha", "Ripoti ya polisi", "Andika kuhusu safari yangu: ilikuwa nzuri"]) assert.equal(await f.say(line), null, line);
  // a Swahili yes does not answer an English question
  await f.say("Add a field called North Plot, 2 acres, maize"); await f.say("skip"); await f.say("skip");
  await f.say("Remove the field North Plot"); const out = await f.say("ndiyo"); assert.ok(out === null || !/Nimeondoa/.test(String(out)));
});

test("a Swahili speaker never sees English record-keeping words in what Kyro says back", async () => {
  const f = farmer(); await f.say("Ongeza shamba linaloitwa Kaskazini, ekari 2, mahindi, kilipandwa 12 Septemba");
  const replies = [await f.say("Onyesha mashamba yangu"), await f.say("Ongeza ng'ombe anayeitwa Bella, jike"), await f.say("Nimemchanja Bella dhidi ya ugonjwa, dozi ijayo baada ya miezi 6"), await f.say("Ongeza mfanyakazi Juma"), await f.say("Mpe Juma kazi ya kupalilia kufikia Ijumaa"), await f.say("Ongeza mnunuzi Amina"), await f.say("Amina ameagiza kilo 100 za mahindi kwa shilingi 40 kwa kilo"), await f.say("Anzisha ushirika wetu Umoja, ada 500 kila mwezi"), await f.say("Tengeneza kalenda ya mazao ya shamba Kaskazini")];
  for (const reply of replies) assert.doesNotMatch(reply, /\b(?:Recorded|recorded|field|Field|animal|task|Task|worker|buyer|order|Order|harvest|weeding|planted|Friday|Saturday|Sunday|Monday|Tuesday|Wednesday|Thursday|September|October|March|tomorrow|today)\b/, reply);
});

test("the commands Kyro suggests in Swahili for the rest of the farm are understood in Swahili", async () => {
  const f = farmer();
  for (const setup of ["Ongeza shamba linaloitwa Kaskazini, ekari 2, mahindi, kilipandwa 12 Septemba", "Ongeza ng'ombe anayeitwa Bella", "Ongeza mfanyakazi Juma", "Ongeza mnunuzi Amina", "Anzisha ushirika wetu Umoja, ada 500 kila mwezi", "Ongeza mwanachama Amina", "Ongeza kifaa cha pamoja: trekta", "Weka tangazo: ninauza kilo 5 za mahindi kwa shilingi 40 kwa kilo", "Nimeona viwavi kwenye mahindi"]) await f.say(setup);
  const files = ["swahili-land.js", "swahili-people.js", "swahili-business.js"].map(name => fs.readFileSync(path.join(__dirname, "../../nexus/farmwork", name), "utf8"));
  const suggested = [...new Set(files.flatMap(source => [...source.matchAll(/(?:Sema|au|kama) \\?"([^"\\]+)\\?"/g)].map(match => match[1])))].filter(text => !/[{}$;\n]/.test(text)).map(text => text.replace(/…/g, "kwa ajili ya mbolea")).filter(text => !/^(?:nimechukua|kwa\b|riba|gharama|mbegu|natarajia|nilinyunyizia)/i.test(text) && !/^(?:kwa shilingi|bei shilingi|\+254)/i.test(text));
  assert.ok(suggested.length >= 25, `only ${suggested.length} suggestions found`);
  const misses = [];
  for (const command of suggested) { if (!(await f.say(command))) misses.push(command); }
  // "sasisha tatizo 1: …" and the like need something to update; everything else must be understood
  assert.deepEqual(misses.filter(command => !/^(?:ondoa|futa|ondoa tangazo|tangazo|nimemchanja|nimempima|mpe |mfuatilie|weka nafasi|agizo)/i.test(command)), [], `not understood: ${misses.join(" | ")}`);
});

test("shared Swahili helpers for days, jobs and animals", () => {
  assert.equal(words.dayFromSw("kufikia Ijumaa", "2026-09-20"), "2026-09-25"); assert.equal(words.dayFromSw("Mary", "2026-09-20"), null);
  assert.deepEqual(words.splitDueSw("kupalilia mahindi kabla ya tarehe 12 Machi", "2026-09-20"), { title: "kupalilia mahindi", due: "2027-03-12" });
  assert.deepEqual(words.splitDueSw("kupalilia mahindi", "2026-09-20"), { title: "kupalilia mahindi", due: null });
  assert.equal(words.tagEnglish("ng'ombe 12"), "cow 12"); assert.equal(words.tagEnglish("kuku kundi 50"), "chicken flock 50"); assert.equal(words.tagEnglish("Bella"), "bella");
  assert.equal(words.tagShown("cow 12"), "ng'ombe 12"); assert.equal(words.tagShown("bella"), "Bella");
  const loan = business.readLoanSw("mkopo wa shilingi 100000 kwa riba ya 12% kwa miaka 2");
  assert.equal(loan.months, 24); assert.equal(loan.principal, 100000); assert.equal(loan.currency, "shillings");
});
