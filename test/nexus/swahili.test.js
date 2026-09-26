"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { t, both, languageOf, CATALOGS } = require("../../nexus/i18n/index.js");
const en = require("../../nexus/i18n/en.js");
const sw = require("../../nexus/i18n/sw.js");
const { readSafetyDetailed, readSafety, readSafe, safeLanguage } = require("../../nexus/companion/safety.js");
const { readCircleRequest } = require("../../nexus/companion/circle.js");
const { CircleRepository } = require("../../nexus/companion/circle-repository.js");
const { createCompanion } = require("../../nexus/companion/index.js");
const { describeStep, buildRoute } = require("../../nexus/navigation/directions.js");
const { createNavigationService } = require("../../nexus/navigation/service.js");
const nav = require("../../public/kyro-navigation.js");
const emergency = require("../../public/kyro-emergency.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");

// ---------- the catalogs ----------
const placeholders = text => [...new Set([...String(text).matchAll(/\{(\w+)\}/g)].map(match => match[1]))].sort().join(",");

test("English is the source of truth and Swahili has every message, with the same placeholders", () => {
  assert.deepEqual(Object.keys(sw).sort(), Object.keys(en).sort(), "every English message has a Swahili one and nothing extra");
  for (const key of Object.keys(en)) { assert.equal(typeof sw[key], "string", key); assert.ok(sw[key].trim().length > 0, key); assert.equal(placeholders(sw[key]), placeholders(en[key]), `placeholders differ in ${key}`); }
  const tn = nav.TEXT; assert.deepEqual(Object.keys(tn.sw).sort(), Object.keys(tn.en).sort(), "the phone's own words too");
  for (const key of Object.keys(tn.en)) assert.equal(placeholders(tn.sw[key]), placeholders(tn.en[key]), `placeholders differ in navigation ${key}`);
});

test("a language Kyro has no words for falls back to English, and a placeholder is never read as a pattern", () => {
  assert.deepEqual(["sw", "sw-KE", "SW_tz", "en", "fr", "", undefined, "xx"].map(languageOf), ["sw", "sw", "sw", "en", "en", "en", "en", "en"]);
  assert.equal(t("fr", "circle.self"), en["circle.self"]); assert.equal(t("sw", "circle.list", { lines: "A $& B", hint: "" }), "Mzunguko wako: A $& B.");
  assert.equal(t("sw", "safety.alerted", { names: "Amina" }), "Nimetuma tahadhari kwa Amina.{extra} {number} Niko hapa nawe.", "an unfilled placeholder is left visible, not dropped");
  assert.throws(() => t("en", "no.such.key"), /Missing message/);
  assert.equal(both("en", "safety.pushTitle", {}, " / "), "Emergency alert"); assert.equal(both("sw", "safety.pushTitle", {}, " / "), "Tahadhari ya dharura / Emergency alert");
});

test("every command a Swahili message tells the person to say is one Kyro really understands in Swahili", () => {
  const commands = [];
  for (const [key, text] of Object.entries(sw)) for (const match of text.matchAll(/"([^"]+)"/g)) commands.push({ key, command: match[1].replace(/\{first\}|\{key\}|\{who\}/g, "Amina") });
  for (const [key, text] of Object.entries(nav.TEXT.sw)) for (const match of text.matchAll(/"([^"]+)"/g)) commands.push({ key: `navigation ${key}`, command: match[1].replace(/\{first\}|\{key\}|\{who\}/g, "Amina").replace(/^nipeleke$/, "nipeleke") });
  // the phone's "{go}" is filled from these two, so they are commands too
  commands.push({ key: "navigation goHome", command: nav.TEXT.sw.goHome }, { key: "navigation goTo", command: nav.TEXT.sw.goTo.replace("{key}", "Kibera") });
  assert.ok(commands.length >= 14, `found ${commands.length}`);
  for (const { key, command } of commands.filter(item => !/^\{\w+\}$/.test(item.command))) {
    const understood = readSafetyDetailed(command)?.language === "sw" || safeLanguage(command) === "sw" || readCircleRequest(command)?.language === "sw" || nav.parseCommand(command)?.language === "sw";
    assert.ok(understood, `"${command}" (in ${key}) is suggested in Swahili but not understood in Swahili`);
  }
  // and the phone's own emergency words (the sharer speaks these): "niko salama" closes an alert
  assert.equal(safeLanguage("niko salama"), "sw");
});

// ---------- emergencies, in the language the person spoke ----------
test("Swahili emergency, crisis and all-clear words are understood, and ordinary Swahili is not", () => {
  const kinds = { "Dharura": "emergency", "hii ni dharura": "emergency", "Nahitaji msaada sasa hivi": "emergency", "ninahitaji msaada wa haraka mara moja": "emergency", "nimeanguka na siwezi kuamka": "emergency", "Siwezi kuamka": "emergency", "niko hatarini": "emergency", "nimejeruhiwa vibaya": "emergency", "nina kiharusi": "emergency", "arifu mzunguko wangu": "emergency", "Tafadhali arifu mzunguko wangu": "emergency", "tuma tahadhari kwa mzunguko wangu": "emergency",
    "msaada": "ask", "nisaidie": "ask", "naomba msaada": "ask", "nataka kufa": "self_harm", "nafikiria kujiua": "self_harm", "sitaki kuishi tena": "self_harm", "nimechoka kuishi": "self_harm", "nataka kujidhuru": "self_harm", "maisha yangu hayana maana": "self_harm" };
  for (const [text, kind] of Object.entries(kinds)) assert.deepEqual(readSafetyDetailed(text), { kind, language: "sw" }, text);
  for (const text of ["Habari yako", "Nina njaa", "Leo kuna mvua", "Msaada wa kilimo ni upi?", "Nataka kununua mbolea", "mwanafunzi alijiua kwenye habari", "Rafiki yangu anataka kufa, nimsaidie vipi?", "Nimechoka na kazi", "Dharura ya moto ilitokea jana", "Ninahitaji msaada wa mbegu"]) assert.equal(readSafety(text), null, text);
  assert.deepEqual(readSafetyDetailed("I need help now"), { kind: "emergency", language: "en" });
  for (const text of ["niko salama", "Niko salama sasa", "nimesalama", "kengele ya uongo", "ilikuwa kengele ya uongo", "ghairi tahadhari", "acha dharura", "kila kitu kiko sawa sasa", "niko sawa sasa"]) assert.equal(safeLanguage(text), "sw", text);
  for (const text of ["sawa", "ndiyo", "asante", "niko sawa", "vizuri", "poa", "sawa tu", "nzuri", "okay", "fine"]) assert.equal(readSafe(text), false, `${text} never closes an alert`);
});

// ---------- a world with a circle, to see the words, the pushes and the flags ----------
const USERS = [
  { id: "u-baba", tenant_id: "t1", email: "baba@example.com", display_name: "Baba Kamau" }, { id: "u-amina", tenant_id: "t1", email: "amina@example.com", display_name: "Amina Wanjiru" }, { id: "u-joseph", tenant_id: "t1", email: "joseph@example.com", display_name: "Joseph Otieno" }
];
function circleDb() {
  const rows = []; const db = { rows, async transaction(fn) { return fn(db); }, async query(sql, params) {
    if (/pg_advisory_xact_lock/.test(sql)) return { rows: [] };
    if (/from users where tenant_id=\$1 and lower\(email\)/.test(sql)) return { rows: USERS.filter(user => user.tenant_id === params[0] && user.email === String(params[1]).toLowerCase()).map(user => ({ id: user.id, display_name: user.display_name })) };
    if (/from users where tenant_id=\$1 and id=\$2/.test(sql)) return { rows: USERS.filter(user => user.tenant_id === params[0] && user.id === params[1]).map(user => ({ display_name: user.display_name })) };
    if (/select 1 from nexus_memory_items/.test(sql)) {
      const [tenantId, personId, memberId] = params;
      const match = rows.some(row => row.tenant_id === tenantId && row.purpose === "circle" && !row.deleted && row.principal_id === personId
        && row.content.kind === "circle" && row.content.role === "person" && row.content.otherId === memberId && row.content.status !== "ended");
      return { rows: match ? [{ "?column?": 1 }] : [] };
    }
    if (/select memory_id,principal_id,content from nexus_memory_items/.test(sql)) return { rows: rows.filter(row => row.tenant_id === params[0] && row.purpose === "circle" && !row.deleted && (params[1] === null || row.principal_id === params[1]) && (params[2] === null || row.content.linkId === params[2])).map(row => ({ memory_id: row.memory_id, principal_id: row.principal_id, content: row.content })) };
    if (/insert into nexus_memory_items/.test(sql) && /'circle'/.test(sql)) { rows.push({ memory_id: params[0], tenant_id: params[1], principal_id: params[2], purpose: "circle", content: params[3] }); return { rows: [] }; }
    if (/update nexus_memory_items set content=\$3/.test(sql) && /purpose='circle'/.test(sql)) { const row = rows.find(item => item.tenant_id === params[0] && item.memory_id === params[1]); if (row) row.content = params[2]; return { rows: [] }; }
    throw new Error(`unexpected SQL: ${sql.slice(0, 80)}`);
  } }; return db;
}
async function world({ members = ["u-amina", "u-joseph"], optIn = false } = {}) {
  const db = circleDb(); const circle = new CircleRepository(db); const pushes = []; let clock = new Date("2026-09-20T05:00:00Z");
  const companion = createCompanion({ circle, checkinSettings: { get: async () => null }, checkinState: { get: async () => null, hasActivitySince: async () => false }, memory: null, notifications: { async enqueue(row) { pushes.push(row); } }, now: () => clock });
  for (const memberId of members) { const link = await circle.invite({ tenantId: "t1", person: { id: "u-baba", name: "Baba Kamau" }, member: { id: memberId, name: USERS.find(user => user.id === memberId).display_name }, relationship: "family" }); await circle.respond({ tenantId: "t1", memberId, linkId: link.link.linkId, accept: true }); }
  const w = { db, circle, pushes, companion, tick: ms => { clock = new Date(clock.getTime() + ms); } };
  w.handle = (text, locale = "en", userId = "u-baba") => companion.handle({ command: { text, tenantId: "t1", actorId: userId, locale }, context: {} });
  w.say = async (text, locale = "en", userId = "u-baba") => (await w.handle(text, locale, userId))?.response ?? null;
  if (optIn) await w.say("shiriki eneo langu wakati wa dharura", "sw");
  return w;
}

test("a Swahili emergency is answered in Swahili whatever the app's language, and an English one in a Swahili app is answered in Swahili too", async () => {
  const w = await world(); const swahili = await w.handle("Nahitaji msaada sasa hivi", "en");
  assert.equal(swahili.response, "Nimetuma tahadhari kwa Amina Wanjiru, Joseph Otieno. Ikiwa uko hatarini, tafadhali piga simu kwa namba ya dharura ya nchi yako sasa hivi. Niko hapa nawe.");
  assert.equal(swahili.emergency.language, "sw");
  const fresh = await world(); const english = await fresh.handle("I need help now", "sw"); assert.match(english.response, /^Nimetuma tahadhari kwa Amina Wanjiru, Joseph Otieno\./); assert.equal(english.emergency.language, "sw");
  const plain = await world(); assert.match((await plain.handle("I need help now", "en")).response, /^I've alerted /); assert.equal((await plain.handle("hello", "sw")), null);
  assert.equal((await (await world({ members: [] })).say("dharura")).startsWith("Bado sina mtu yeyote kwenye mzunguko wako"), true);
});

test("an alert reaches another person's phone in both languages, so nobody gets words they cannot read", async () => {
  const w = await world(); await w.handle("dharura", "sw");
  const alerts = w.pushes.filter(push => /Emergency alert/.test(push.content.title)); assert.equal(alerts.length, 2);
  assert.equal(alerts[0].content.title, "Tahadhari ya dharura / Emergency alert");
  assert.equal(alerts[0].content.body, "Baba Kamau ameomba msaada wa haraka kwa Kyro sasa hivi. Tafadhali wasiliana naye mara moja, au omba msaada ikiwa huwezi kumpata.\nBaba Kamau asked Kyro for urgent help just now. Please contact them right away, or call for help if you can't reach them.");
  const english = await world(); await english.handle("I need help now", "en"); assert.equal(english.pushes[0].content.title, "Emergency alert"); assert.doesNotMatch(english.pushes[0].content.body, /Kyro sasa hivi/, "English alone stays English");
});

test("asking for help first, the crisis reply, and the all-clear all work in Swahili, and a bare 'sawa' never ends an alert", async () => {
  const w = await world();
  assert.equal(await w.say("msaada", "en"), "Niko hapa. Ikiwa ni jambo la dharura, sema \"arifu mzunguko wangu\" nami nitatuma ujumbe kwa Amina Wanjiru, Joseph Otieno mara moja. Ikiwa uko hatarini, tafadhali piga simu kwa namba ya dharura ya nchi yako sasa hivi. Au niambie kinachoendelea.");
  assert.match(await w.say("nataka kufa"), /^Pole sana kwa unavyojisikia.*Naweza kutuma tahadhari kwa Amina Wanjiru, Joseph Otieno sasa hivi — sema tu "arifu mzunguko wangu"\. Niko hapa, na ninakusikiliza\.$/s);
  assert.equal(w.pushes.length, 0, "asking or a crisis reply alerts nobody until the person says so");
  assert.match(await (await world({ members: [] })).say("msaada"), /^Niko hapa\. Ikiwa uko hatarini/);
  const alerted = await world(); await alerted.say("arifu mzunguko wangu"); assert.equal(alerted.pushes.length, 2);
  for (const text of ["sawa", "ndiyo", "asante", "niko sawa"]) assert.notEqual((await alerted.handle(text, "sw"))?.emergency?.ended, true, text);
  assert.equal(alerted.db.rows.find(row => row.content.kind === "alert").content.ended, false);
  const done = await alerted.handle("Niko salama", "en"); assert.equal(done.response, "Nafurahi kwamba uko salama. Nimetuma ujumbe kwa Amina Wanjiru, Joseph Otieno kwamba uko sawa, na nimeacha kushiriki eneo lako."); assert.deepEqual(done.emergency, { alertId: done.emergency.alertId, ended: true });
  const clear = alerted.pushes.filter(push => /Emergency over/.test(push.content.title)); assert.equal(clear.length, 2); assert.equal(clear[0].content.title, "Dharura imeisha / Emergency over"); assert.match(clear[0].content.body, /^Baba Kamau anasema yuko salama sasa\. Eneo halitatumwa tena\.\nBaba Kamau says they are safe now\./);
  assert.equal(await (await world()).say("niko salama"), null, "no open alert, so it is an ordinary sentence");
});

// ---------- the circle, in Swahili ----------
test("the circle is understood in Swahili, and answered in Swahili, for the safety-critical requests", async () => {
  const parsed = { "ongeza amina@example.com kwenye mzunguko wangu": "invite", "Ongeza Amina kwenye mzunguko wangu kama binti": "invite", "nani yuko kwenye mzunguko wangu": "list", "onyesha mzunguko wangu": "list", "ondoa Joseph kwenye mzunguko wangu": "remove", "nina mialiko": "invitations", "kubali mwaliko kutoka kwa Amina": "accept", "nakubali mwaliko wa Amina": "accept", "kataa mwaliko kutoka kwa Amina": "decline", "ondoka kwenye mzunguko wa Baba": "leave", "acha mzunguko wa Baba": "leave", "ninawaangalia nani": "looking-out",
    "shiriki eneo langu wakati wa dharura": "share", "shiriki eneo langu wakati wa dharura na Amina": "share", "acha kushiriki eneo langu wakati wa dharura": "share", "je, ninashiriki eneo langu wakati wa dharura": "list" };
  for (const [text, action] of Object.entries(parsed)) assert.equal(readCircleRequest(text)?.action, action, text);
  assert.deepEqual(readCircleRequest("Shiriki eneo langu wakati wa dharura na Amina"), { action: "share", key: "emergencyLocation", who: "Amina", value: true, language: "sw" });
  assert.deepEqual(readCircleRequest("shiriki eneo langu wakati wa dharura na kila mtu"), { action: "share", key: "emergencyLocation", who: "", value: true, language: "sw" });
  for (const text of ["mzunguko wa maisha", "ongeza mbolea kwenye hifadhi", "kubali", "eneo la shamba", "shiriki picha yangu"]) assert.equal(readCircleRequest(text), null, text);

  const w = await world();
  assert.match(await w.say("nani yuko kwenye mzunguko wangu"), /^Mzunguko wako: Amina Wanjiru \(family\) — haambiwi chochote isipokuwa dharura; Joseph Otieno \(family\) — haambiwi chochote isipokuwa dharura\. Ikiwa unataka waweze kukupata wakati wa dharura, sema "shiriki eneo langu wakati wa dharura"\.$/);
  assert.match(await w.say("shiriki eneo langu wakati wa dharura na Amina"), /^Sawa\. Ukiniomba msaada wa haraka, nitatuma pia eneo lako kwa Amina Wanjiru.*Sema "acha kushiriki eneo langu wakati wa dharura na Amina" kulighairi\.$/s);
  assert.match(await w.say("Who is in my circle", "sw"), /Amina Wanjiru \(family\) — anaweza kuambiwa eneo lako ukiomba msaada wa haraka; Joseph Otieno/, "an English request in a Swahili app is answered in Swahili");
  assert.match(await w.say("Who is in my circle", "en"), /Amina Wanjiru \(family\) — may be told your location if you ask for urgent help/, "and in English in an English app");
  assert.match(await w.say("shiriki eneo langu wakati wa dharura"), /nitatuma pia eneo lako kwa Amina Wanjiru, Joseph Otieno/);
  assert.match(await w.say("acha kushiriki eneo langu wakati wa dharura"), /Eneo lako halitatumwa kwa Amina Wanjiru, Joseph Otieno wakati wa dharura/);
  assert.match(await w.say("ondoa Joseph kwenye mzunguko wangu"), /^Sawa\. Joseph Otieno ameondolewa kwenye mzunguko wako/);
  const removed = w.pushes.at(-1); assert.equal(removed.userId, "u-joseph"); assert.equal(removed.content.title, "Taarifa ya mzunguko / Circle update"); assert.match(removed.content.body, /^Baba Kamau amekuondoa kwenye mzunguko wake wa watu anaowaamini\.\nBaba Kamau has taken you out of their trusted circle\.$/);
  assert.match(await w.say("ondoa Yohana kwenye mzunguko wangu"), /^Simwoni Yohana kwenye mzunguko wako\.$/);
  assert.equal(await (await world({ members: [] })).say("shiriki eneo langu wakati wa dharura"), "Bado hakuna mtu kwenye mzunguko wako aliyekubali mwaliko wako, kwa hivyo hakuna wa kushirikiwa eneo. Mtu akikubali, sema hivi tena.");
});

test("inviting and answering an invitation work in Swahili, and the other person is written to in both languages", async () => {
  const db = circleDb(); const circle = new CircleRepository(db); const pushes = []; const notifications = { async enqueue(row) { pushes.push(row); } };
  const companion = createCompanion({ circle, checkinSettings: { get: async () => null }, checkinState: { get: async () => null }, notifications, now: () => new Date("2026-09-20T05:00:00Z") });
  const ask = (text, userId, locale = "en") => companion.turn({ command: { text, tenantId: "t1", actorId: userId, locale }, context: {} });
  assert.match(await ask("ongeza amina@example.com kwenye mzunguko wangu kama binti", "u-baba"), /^Ikiwa amina@example\.com ana akaunti ya Kyro katika jamii yako, nimemtumia mwaliko wako\./);
  const invite = pushes.at(-1); assert.equal(invite.userId, "u-amina"); assert.equal(invite.content.title, "Mwaliko wa mzunguko / Circle invitation");
  assert.equal(invite.content.body, "Baba Kamau angependa uwe kwenye mzunguko wake wa watu anaowaamini kama binti wake. Sema \"kubali mwaliko kutoka kwa Baba\" ndani ya Kyro, au \"kataa mwaliko kutoka kwa Baba\" ukipenda kutokubali.\nBaba Kamau would like you in their trusted circle as their binti. Say \"accept the invitation from Baba\" in Kyro, or \"decline\" if you'd rather not.");
  assert.match(await ask("nina mialiko", "u-amina", "sw"), /^Wanaosubiri jibu lako: Baba Kamau \(wewe kama family wake\)|Wanaosubiri jibu lako: Baba Kamau \(wewe kama binti wake\)\. Sema "kubali mwaliko kutoka kwa Baba"/);
  assert.match(await ask("kubali mwaliko kutoka kwa Baba", "u-amina"), /^Asante\. Sasa uko kwenye mzunguko wa Baba Kamau\..*"ondoka kwenye mzunguko wa Baba"\.$/s);
  assert.equal(pushes.at(-1).content.title, "Taarifa ya mzunguko / Circle update"); assert.match(pushes.at(-1).content.body, /^Amina Wanjiru amekubali na sasa yuko kwenye mzunguko wako wa watu unaowaamini\.\nAmina Wanjiru said yes and is now in your trusted circle\.$/);
  assert.match(await ask("ondoka kwenye mzunguko wa Baba", "u-amina"), /^Sawa\. Umeondoka kwenye mzunguko wa Baba Kamau\.$/);
  assert.match(await ask("nina mialiko", "u-amina", "sw"), /^Huna mialiko ya mzunguko inayosubiri\.$/);
});

test("the location that follows an alert is worded in both languages, and the phone tells the person in the language of the alert", async () => {
  const w = await world({ optIn: true }); const result = await w.handle("dharura", "sw");
  assert.match(result.response, /^Nimetuma tahadhari kwa Amina Wanjiru, Joseph Otieno\. Nitatuma eneo lako kwa Amina Wanjiru, Joseph Otieno mara tu simu yako itakaponiambia uko wapi\. Ikiwa uko hatarini/); assert.equal(result.emergency.shareLocation, true); assert.equal(result.emergency.language, "sw");
  const shared = await w.companion.shareEmergencyLocation({ tenantId: "t1", userId: "u-baba", alertId: result.emergency.alertId, position: { lat: -1.2921, lng: 36.8219, accuracy: 12 } });
  assert.deepEqual(shared.body.shared, ["Amina Wanjiru", "Joseph Otieno"]);
  const push = w.pushes.filter(item => /location|eneo/.test(item.content.title)).at(-1); assert.equal(push.content.title, "Dharura: eneo la Baba Kamau / Emergency: Baba Kamau's location");
  assert.match(push.content.body, /^Baba Kamau ameomba msaada wa haraka kwa Kyro, na simu yake inaonyesha yuko 6GCRPR[0-9A-Z]{2}\+[0-9A-Z]{2} \(-1\.29210, 36\.82190\), kwa usahihi wa takriban mita 12\. Gusa kufungua ramani\. Ikiwa huwezi kumpata, omba msaada\.\nBaba Kamau asked Kyro for urgent help, and their phone says they are at /);
  w.tick(60000); await w.companion.shareEmergencyLocation({ tenantId: "t1", userId: "u-baba", alertId: result.emergency.alertId, position: { lat: -1.3, lng: 36.85, accuracy: 8, ageSeconds: 200 } });
  assert.match(w.pushes.at(-1).content.body, /^Eneo la Baba Kamau limesasishwa: sasa yuko .*, kutoka takriban dakika 3 zilizopita\. Gusa/);
  const english = await world({ optIn: true }); const eng = await english.handle("I need help now", "en"); await english.companion.shareEmergencyLocation({ tenantId: "t1", userId: "u-baba", alertId: eng.emergency.alertId, position: { lat: -1.2921, lng: 36.8219, accuracy: 12 } });
  assert.equal(english.pushes.at(-1).content.title, "Emergency: Baba Kamau's location"); assert.doesNotMatch(english.pushes.at(-1).content.body, /Gusa/);
});

test("the planner carries the language of the alert, and the phone speaks it", async () => {
  const w = await world({ optIn: true });
  const planner = new OpenEndedPlanner({ model: { plan: async () => { throw new Error("no model"); } }, tools: { list: async () => [] }, applications: { list: () => [] }, memory: {}, companion: w.companion });
  const plan = await planner.plan({ command: { text: "nahitaji msaada sasa hivi", tenantId: "t1", actorId: "u-baba", locale: "sw" }, context: {} });
  assert.match(plan.response, /^Nimetuma tahadhari/); assert.equal(plan.emergency.language, "sw");
  const spoken = []; const timers = [];
  const sharer = emergency.createEmergencySharer({ geolocation: { getCurrentPosition: ok => ok({ coords: { latitude: -1.3, longitude: 36.8, accuracy: 10 }, timestamp: 0 }) }, api: async () => ({ shared: ["Amina Wanjiru"], updates: 1, done: false }), say: text => spoken.push(text), setTimer: fn => { timers.push(fn); return timers.length; }, clearTimer: () => {}, now: () => 0 });
  sharer.handle({ alertId: "alt_1", shareLocation: true, language: "sw" });
  return new Promise(resolve => setImmediate(() => setImmediate(() => { assert.deepEqual(spoken, ["Nimetuma eneo lako kwa Amina Wanjiru, na nitaendelea kulisasisha. Sema \"niko salama\" ukiwa salama."]); sharer.stop(); resolve(); })));
});

// ---------- the GPS in Swahili ----------
test("Swahili directions, from the server: every kind of step is worded, and an unknown language stays English", () => {
  const step = (type, modifier, extra = {}) => ({ name: extra.name || "", distance: 1, maneuver: { type, modifier, location: [0, 0], exit: extra.exit, bearing_after: extra.bearing } });
  const say = (s) => describeStep(s, "sw");
  assert.equal(say(step("depart", undefined, { name: "Uhuru Highway", bearing: 45 })), "Anza kuelekea kaskazini mashariki kwenye Uhuru Highway"); assert.equal(say(step("depart", undefined, { bearing: 180 })), "Anza kuelekea kusini");
  assert.equal(say(step("turn", "left", { name: "Kenyatta Avenue" })), "Geuka kushoto kuingia Kenyatta Avenue"); assert.equal(say(step("turn", "slight right")), "Elekea kulia kidogo"); assert.equal(say(step("turn", "uturn")), "Geuka urudi ulikotoka");
  assert.equal(say(step("end of road", "left", { name: "Moi Avenue" })), "Mwisho wa barabara, geuka kushoto kuingia Moi Avenue");
  assert.equal(say(step("roundabout", "right", { exit: 2, name: "Waiyaki Way" })), "Kwenye mzunguko wa barabara, chukua njia ya kutokea ya pili kuingia Waiyaki Way"); assert.equal(say(step("roundabout", "right", { exit: 7 })), "Kwenye mzunguko wa barabara, chukua njia ya kutokea ya 7");
  assert.equal(say(step("fork", "slight left")), "Shika kushoto kwenye njia panda"); assert.equal(say(step("merge", "slight right", { name: "Expressway" })), "Jiunge kulia kuingia Expressway"); assert.equal(say(step("on ramp", "right")), "Tumia njia ya kuingilia"); assert.equal(say(step("off ramp", "right")), "Toka kwenye barabara");
  assert.equal(say(step("new name", "straight", { name: "Lang'ata Road" })), "Endelea kuingia Lang'ata Road"); assert.equal(say(step("arrive", "left")), "Umefika, upande wa kushoto"); assert.equal(say(step("arrive", "straight")), "Umefika"); assert.equal(say(step("something new")), "Endelea");
  assert.equal(describeStep(step("turn", "left"), "en"), "Turn left"); assert.equal(describeStep(step("turn", "left")), "Turn left");
  const coordinates = Array.from({ length: 30 }, (_, i) => [36.8, -1.3 + i * 0.0001]);
  const osrm = { duration: 60, geometry: { coordinates }, legs: [{ steps: [{ name: "A", distance: 1, maneuver: { type: "depart", bearing_after: 0, location: coordinates[0] } }, { name: "", distance: 0, maneuver: { type: "arrive", modifier: "left", location: coordinates.at(-1) } }] }] };
  assert.equal(buildRoute(osrm, { language: "sw" }).steps[0].instruction, "Anza kuelekea kaskazini kwenye A"); assert.equal(buildRoute(osrm).steps[0].instruction, "Head north on A");
});

test("the route service words the steps in the language asked for, and only knows English and Swahili", async () => {
  const coordinates = Array.from({ length: 60 }, (_, i) => [36.8, -1.3 + i * 0.0001]);
  const payload = { code: "Ok", routes: [{ duration: 60, geometry: { coordinates }, legs: [{ steps: [{ name: "First Road", distance: 1, maneuver: { type: "depart", bearing_after: 0, location: coordinates[0] } }, { name: "", distance: 0, maneuver: { type: "arrive", modifier: "right", location: coordinates.at(-1) } }] }] }] };
  const service = createNavigationService({ env: {}, fetchImpl: async () => ({ ok: true, status: 200, json: async () => payload }) });
  const ask = language => service.route({ from: { lat: -1.3, lng: 36.8 }, to: { lat: -1.294, lng: 36.8 }, language });
  assert.equal((await ask("sw")).steps[1].instruction, "Umefika, upande wa kulia"); assert.equal((await ask("sw")).steps[0].instruction, "Anza kuelekea kaskazini kwenye First Road");
  assert.equal((await ask("en")).steps[1].instruction, "You have arrived, on your right"); assert.equal((await ask("fr")).steps[1].instruction, "You have arrived, on your right"); assert.equal((await ask(undefined)).steps[0].instruction, "Head north on First Road");
});

test("the GPS understands Swahili, only when the words are plainly for it", () => {
  const yes = { "niko wapi": "where", "Eneo langu": "where", "msimbo wangu wa eneo": "where", "hifadhi mahali hapa kama nyumbani": "save", "weka hapa kama soko": "save", "onyesha mahali": "places", "orodhesha maeneo": "places", "sahau mahali soko": "forget", "acha uelekezaji": "stop", "maliza safari": "stop", "rudia": "repeat", "rudia hiyo": "repeat", "kinachofuata ni nini": "repeat", "umbali gani": "status", "nitafika lini": "status",
    "nipeleke nyumbani": "go", "Nipeleke Kibera": "go", "nielekeze kwenda hospitali ya Kibera": "go", "nifikishe sokoni": "go", "nitembeze hadi sokoni": "go", "nipeleke kwa miguu hadi shuleni": "go", "nipeleke": "go" };
  for (const [text, type] of Object.entries(yes)) assert.equal(nav.parseCommand(text)?.type ?? null, type, text);
  assert.deepEqual(nav.parseCommand("nipeleke nyumbani"), { type: "go", destination: "home", mode: "drive", language: "sw" }); assert.deepEqual(nav.parseCommand("nitembeze hadi sokoni"), { type: "go", destination: "sokoni", mode: "walk", language: "sw" });
  assert.deepEqual(nav.parseCommand("nipeleke kwa miguu hadi shuleni"), { type: "go", destination: "shuleni", mode: "walk", language: "sw" }); assert.deepEqual(nav.parseCommand("Save this place as home"), { type: "save", name: "home" });
  for (const text of ["nipeleke mipangilio", "nipeleke ukurasa", "nielekeze kutoka Nairobi kwenda Nakuru", "habari", "shamba langu liko wapi", "nipe mbegu", "nipeleke kwenye menyu", "hifadhi", "acha", "tafadhali"]) assert.equal(nav.parseCommand(text), null, text);
  assert.deepEqual([5, 45, 120, 480, 1200, 15000].map(meters => nav.sayDistance(meters, "sw")), ["mita chache", "mita 50", "mita 100", "mita 500", "kilomita 1.2", "kilomita 15"]);
  assert.deepEqual([20, 90, 3600, 5400, 7500].map(seconds => nav.sayDuration(seconds, "sw")), ["chini ya dakika moja", "dakika 2", "saa 1", "saa 1 na dakika 30", "saa 2 na dakika 5"]);
});

function phone({ start = { lat: -1.3, lng: 36.8, accuracy: 12 }, failure = null } = {}) {
  const watchers = []; let position = start;
  return { watchers, at(next) { position = next; }, emit(lat, lng) { watchers.at(-1).ok({ coords: { latitude: lat, longitude: lng, accuracy: 10 } }); }, geolocation: { getCurrentPosition(ok, err) { if (failure) err({ code: failure }); else ok({ coords: { latitude: position.lat, longitude: position.lng, accuracy: position.accuracy } }); }, watchPosition(ok, err) { watchers.push({ ok, err }); return 7; }, clearWatch() {} } };
}
function guide({ language = "en", phoneOptions } = {}) {
  const p = phone(phoneOptions); const calls = []; const spoken = []; const store = new Map(); const storage = { getItem: key => (store.has(key) ? store.get(key) : null), setItem: (key, value) => store.set(key, String(value)) };
  const coordinates = Array.from({ length: 201 }, (_, i) => [36.8, -1.3 + i * 0.0001]);
  const build = lang => buildRoute({ duration: 300, geometry: { coordinates }, legs: [{ steps: [
    { name: "First Road", distance: 1100, maneuver: { type: "depart", bearing_after: 0, location: coordinates[0] } }, { name: "Second Road", distance: 1100, maneuver: { type: "turn", modifier: "left", location: coordinates[100] } }, { name: "", distance: 0, maneuver: { type: "arrive", modifier: "left", location: coordinates[200] } }] }] }, { language: lang });
  const api = async body => { calls.push(body); if (body.action === "reverse") return { place: { label: "Haile Selassie Avenue, Nairobi" } }; return { route: { ...build(body.language), destination: { label: "Kibera Health Centre", lat: -1.28, lng: 36.8 }, mode: body.mode } }; };
  const navigator = nav.createNavigator({ geolocation: p.geolocation, api, speak: (text, options) => spoken.push({ text, ...options }), storage, language });
  return { navigator, p, calls, spoken, storage };
}

test("where am I, saved places and 'take me home' work in Swahili, and the language reaches the server", async () => {
  const g = guide(); const where = await g.navigator.handle("Niko wapi");
  assert.match(where, /^Uko karibu na Haile Selassie Avenue, Nairobi\. Nafasi yako ni 1\.30000 kusini, 36\.80000 mashariki, kwa usahihi wa takriban mita 12\. Msimbo wako wa eneo \(plus code\) ni 6GCRPR[0-9A-Z]{2}\+[0-9A-Z]{2}\. Umsomee mtu yeyote na anaweza kukupata\. Sema "hifadhi mahali hapa kama nyumbani" ili kuuhifadhi\.$/);
  assert.equal(await g.navigator.handle("hifadhi mahali hapa kama nyumbani"), "Nimehifadhi mahali hapa kama nyumbani. Panabaki kwenye simu hii tu. Sema \"nipeleke nyumbani\" wakati wowote unapohitaji njia.");
  assert.equal(JSON.parse(g.storage.getItem(nav.PLACES_KEY))[0].name, "home", "saved once, whichever language names it"); g.p.at({ lat: -1.31, lng: 36.81, accuracy: 10 }); await g.navigator.handle("Save this place as the market");
  assert.equal(await g.navigator.handle("onyesha mahali"), "Una mahali 2 ulipohifadhi: nyumbani, market."); assert.equal(await g.navigator.handle("sahau mahali market"), "Nimefuta market."); assert.equal(await g.navigator.handle("sahau mahali market"), "Sina mahali paitwapo market.");
  g.p.at({ lat: -1.3, lng: 36.8, accuracy: 10 }); const started = await g.navigator.handle("Nipeleke nyumbani");
  assert.match(started, /^Ninakupeleka hadi nyumbani: kilomita 2\.2, takriban dakika 5\. Anza kuelekea kaskazini kwenye First Road\. Weka skrini iwake, kwa sababu kivinjari hakiwezi kuelekeza skrini ikiwa imezimwa\. Ninatumia eneo la simu yako wakati wa kukuelekeza tu.*Sema "acha uelekezaji" kumaliza\.$/);
  assert.equal(g.calls.find(call => call.action === "route").language, "sw"); assert.equal(g.calls.find(call => call.action === "route").to.label, "nyumbani");
  assert.equal(await g.navigator.handle("acha uelekezaji"), "Uelekezaji umesimamishwa."); assert.equal(await g.navigator.handle("acha uelekezaji"), "Sikuelekezi popote kwa sasa.");
  assert.match(await guide().navigator.handle("nipeleke nyumbani"), /^Bado sijui nyumbani ni wapi\./); assert.match(await guide().navigator.handle("nipeleke"), /^Ungependa kwenda wapi\?/);
  assert.match(await guide({ phoneOptions: { failure: 1 } }).navigator.handle("niko wapi"), /^Siwezi kuona eneo lako\./); assert.match(await guide({ phoneOptions: { failure: 3 } }).navigator.handle("niko wapi"), /^Sikuweza kupata eneo lako kwa wakati\./);
});

test("guidance is spoken in Swahili all the way to the arrival, and off-route, repeat and how-far too", async () => {
  const g = guide(); await g.navigator.handle("nitembeze hadi Kibera Health Centre"); assert.equal(g.calls.find(call => call.action === "route").mode, "walk"); g.spoken.length = 0;
  for (let i = 2; i <= 200; i += 1) g.p.emit(-1.3 + i * 0.0001, 36.8);
  const said = g.spoken.map(item => item.text);
  assert.ok(said.some(text => /^Baada ya mita (?:150|100|1\d\d), geuka kushoto kuingia Second Road\.$/.test(text)), said.join(" | ")); assert.ok(said.some(text => /^Sasa, geuka kushoto kuingia Second Road\.$/.test(text)));
  assert.ok(said.some(text => /^Baada ya mita \d+, utafika, upande wa kushoto\.$/.test(text)), "the end is announced ahead"); assert.equal(said.at(-1), "Umefika."); assert.equal(g.navigator.active, false);
  const h = guide({ language: "sw" }); await h.navigator.handle("navigate to Kibera Health Centre"); h.p.emit(-1.3 + 60 * 0.0001, 36.8);
  assert.match(await h.navigator.handle("repeat that"), /^Baada ya mita (?:450|500), geuka kushoto kuingia Second Road\.$/); assert.match(await h.navigator.handle("umbali gani"), /^Umebaki kilomita 1\.\d, takriban dakika \d+\.$/);
  assert.equal(h.calls.find(call => call.action === "route").language, "sw", "an English command in a Swahili app is guided in Swahili");
  const english = guide(); await english.navigator.handle("navigate to Kibera Health Centre"); assert.match(english.spoken.length ? english.spoken[0].text : "", /^$|Head north/); assert.equal(english.calls.find(call => call.action === "route").language, "en");
  const off = guide(); await off.navigator.handle("nipeleke Kibera"); off.spoken.length = 0; for (let i = 0; i < 3; i += 1) off.p.emit(-1.29, 36.8005); await new Promise(resolve => setImmediate(resolve));
  assert.ok(off.spoken.some(item => item.text === "Umetoka kwenye njia. Natafuta njia mpya." && item.interrupt)); assert.ok(off.spoken.some(item => /^Njia mpya, mita \d+, takriban dakika \d+\.$|^Njia mpya, kilomita/.test(item.text)));
});

test("Swahili is used by the page: the voice is the app's Swahili voice, and the words reach the phone modules", () => {
  const fs = require("node:fs"); const path = require("node:path"); const app = fs.readFileSync(path.join(__dirname, "..", "..", "public", "app.js"), "utf8");
  assert.match(app, /kyroNavigator = navigation\.forBrowser\(\{ locale: languageCode\(\), speechLang: voiceLocale\(\)/); assert.match(app, /kyroEmergencySharer = module\.forBrowser\(\{ locale: languageCode\(\), speechLang: voiceLocale\(\)/);
  assert.match(app, /sw: "sw-KE"/);
  for (const file of ["kyro-navigation.js", "kyro-emergency.js"]) assert.match(fs.readFileSync(path.join(__dirname, "..", "..", "public", file), "utf8"), /speechLang \|\| locale/);
});
