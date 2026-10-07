"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { healthReadingsTurn, entriesOf, PENDING_MS } = require("../../nexus/health/readings-conversation.js");
const { eraseOwnedHealthBridgeRecords, collectOwnedHealthBridgeRecords } = require("../../server/providers/healthRecordScope.js");
const bpLib = require("../../server/providers/bloodPressure.js");
const glucoseLib = require("../../server/providers/bloodGlucose.js");

// The conversation itself, without a server: say a reading -> Kyro reads it back and asks -> only a yes saves it. Everything is checked in the store, not in the reply text.

const START = Date.parse("2026-10-07T08:00:00Z");
function person(id = "u1") {
  return { id, email: `${id}@example.org` };
}
function makeChat(db, user, options = {}) {
  let clock = START;
  const chat = (text, extra = {}) => {
    clock += 4000;
    return healthReadingsTurn({ db, user, text, now: new Date(clock), ...options, ...extra });
  };
  chat.wait = ms => { clock += ms; };
  return chat;
}
const chronic = (db, id) => (db.profile.nexusChronicDiseaseReadings || []).filter(record => record.ownerId === id);
const rpm = (db, id) => (db.profile.nexusRpmDeviceReadings || []).filter(record => record.ownerId === id);

test("a spoken blood pressure is read back first and nothing is saved until the person says yes", () => {
  const db = { profile: {} }; const user = person(); const say = makeChat(db, user);
  const asked = say("my blood pressure is 150 over 95");
  assert.equal(asked.requiresConfirmation, true);
  assert.match(asked.response, /I heard your blood pressure as 150 over 95, for 7 October 2026\. Shall I save it\?/);
  assert.doesNotMatch(asked.response, /I saved|unavailable/i, "the first turn must never claim a save");
  assert.equal(chronic(db, "u1").length, 0, "nothing is stored by the question");
  const done = say("yes");
  assert.equal(done.saved, true);
  assert.equal(done.response, bpLib.savedReply(150, 95), "the guidance after a save is the existing text, unchanged");
  const stored = chronic(db, "u1");
  assert.equal(stored.length, 1);
  assert.deepEqual([stored[0].systolic, stored[0].diastolic, stored[0].dateTimeText], [150, 95, "7 October 2026"]);
  assert.equal(say("yes"), null, "a second yes finds nothing waiting and saves nothing more");
  assert.equal(chronic(db, "u1").length, 1);
});

test("how it is said does not change what is stored: the same pressure, the same two numbers", () => {
  for (const phrase of ["one forty over ninety", "my blood pressure is 140 by 90", "my bp is 140 and 90", "140 kwa 90 ni presha yangu", "systolic 140 diastolic 90", "top 140 bottom 90", "presha yangu ni mia moja arobaini juu ya tisini", "my blood pressure is 140/90"]) {
    const db = { profile: {} }; const say = makeChat(db, person());
    const asked = say(phrase, { language: /presha|kwa/.test(phrase) ? "sw" : "en" });
    assert.ok(asked && asked.requiresConfirmation, `${phrase} -> ${asked && asked.response}`);
    assert.ok(say(/presha|kwa/.test(phrase) ? "ndiyo" : "yes").saved, phrase);
    const stored = chronic(db, "u1");
    assert.deepEqual([stored[0].systolic, stored[0].diastolic], [140, 90], phrase);
  }
});

test("a stored sugar is exactly what was said: 8,5 is 8.5, seven point two is 7.2, never 8 or 7", () => {
  const rows = [["my blood sugar is 8,5", 8.5, "mmol/L"], ["my blood sugar is 7 point 2", 7.2, "mmol/L"], ["my sugar is seven point two", 7.2, "mmol/L"], ["sukari ni 8,5", 8.5, "mmol/L"],
    ["my sugar is 9.4", 9.4, "mmol/L"], ["sukari yangu 7.5", 7.5, "mmol/L"], ["sugar was 7.2", 7.2, "mmol/L"], ["my blood sugar is 130", 130, "mg/dL"], ["my blood sugar is 6.1 mmol", 6.1, "mmol/L"],
    ["my blood sugar is 140 mg per dl", 140, "mg/dL"], ["sukari ni saba nukta mbili", 7.2, "mmol/L"], ["my sugar is eight point two five", 8.25, "mmol/L"]];
  for (const [phrase, value, unit] of rows) {
    const db = { profile: {} }; const say = makeChat(db, person());
    const asked = say(phrase);
    assert.ok(asked && asked.requiresConfirmation, `${phrase} -> ${asked && asked.response}`);
    assert.match(asked.response, new RegExp(String(value).replace(".", "\\.")), `the read-back says the whole number: ${asked.response}`);
    assert.equal(chronic(db, "u1").length, 0, phrase);
    assert.ok(say("yes").saved, phrase);
    const stored = chronic(db, "u1")[0];
    assert.equal(stored.glucose, value, `${phrase} must be stored as ${value}, got ${stored.glucose}`);
    assert.equal(stored.glucoseUnit, unit, phrase);
  }
});

test("a sugar the unit of which is unclear, or a figure that is cut short, is asked about and not saved", () => {
  const db = { profile: {} }; const say = makeChat(db, person());
  const unit = say("my blood sugar is 35");
  assert.match(unit.response, /not sure if that is in mmol per litre or mg per dL, so I did not save it/);
  assert.equal(unit.requiresConfirmation, false);
  const cut = say("my sugar is 8 5");
  assert.match(cut.response, /more than one number.*did not save anything/);
  const two = say("my blood pressure is 120.5 over 80");
  assert.match(two.response, /two whole numbers, so I did not save it/);
  assert.equal(say("yes"), null);
  assert.equal(chronic(db, "u1").length, 0);
  assert.equal(rpm(db, "u1").length, 0);
});

test("a reading that cannot be real is refused and re-asked, and a following yes saves nothing", () => {
  const db = { profile: {} }; const say = makeChat(db, person());
  const refused = say("my blood pressure is 1500 over 95");
  assert.equal(refused.response, bpLib.invalidReadingReply(1500, 95));
  assert.equal(refused.requiresConfirmation, false);
  assert.match(say("my blood pressure is 120 over 150").response, /did not save/);
  assert.match(say("my pulse is 400").response, /did not save/);
  assert.match(say("my oxygen is 20").response, /did not save/);
  assert.match(say("my temperature is 12").response, /cannot be a real body temperature/);
  assert.match(say("my weight is 900 kg").response, /did not save/);
  assert.match(say("my weight is 68").response, /kilograms or pounds/);
  assert.equal(say("yes"), null);
  assert.equal(chronic(db, "u1").length + rpm(db, "u1").length, 0);
});

test("no discards, and an unanswered question never saves: another sentence, or too long a wait, drops it", () => {
  const db = { profile: {} }; const say = makeChat(db, person());
  say("my blood pressure is 140 over 90");
  assert.match(say("no").response, /I have not saved anything/);
  assert.equal(say("yes"), null);
  say("hapana"); // nothing waiting: not ours
  say("my blood pressure is 140 over 90");
  assert.equal(say("what is the weather in Nairobi"), null, "an unrelated sentence is not ours");
  assert.equal(say("yes"), null, "the question was dropped when the person moved on");
  say("my blood pressure is 140 over 90");
  say.wait(PENDING_MS + 1000);
  assert.equal(say("yes"), null, "a yes after too long a wait is not an answer");
  say("my blood pressure is 140 over 90");
  const changed = say("no, it is 135 over 85");
  assert.match(changed.response, /135 over 85/, "a new reading replaces the one that was waiting");
  say("yes");
  assert.deepEqual(chronic(db, "u1").map(record => [record.systolic, record.diastolic]), [[135, 85]]);
});

test("the voice model's own confirmation flag saves straight away, once", () => {
  const db = { profile: {} }; const say = makeChat(db, person());
  say("my blood pressure is 150 over 95");
  const saved = say("my blood pressure is 150 over 95", { confirmedByCaller: true });
  assert.equal(saved.saved, true);
  assert.equal(say("yes"), null, "the question that was open is closed by the flag");
  assert.equal(chronic(db, "u1").length, 1);
});

test("a very high or very low reading says the safety words first, without saying anything was saved, then asks", () => {
  const db = { profile: {} }; const say = makeChat(db, person());
  const high = say("my blood pressure is 190 over 125");
  assert.match(high.response, /^I heard 190 over 125\. That is a very high reading\./);
  assert.match(high.response, /emergency help now/);
  assert.doesNotMatch(high.response, /I saved/);
  assert.match(high.response, /Shall I save it\? Say yes to save it, or no if that is not right\.$/);
  const low = say("my sugar is 2.5");
  assert.match(low.response, /^I heard the reading 2\.5 millimoles per litre\. That is a very low blood sugar\./);
  assert.doesNotMatch(low.response, /I saved/);
  assert.equal(chronic(db, "u1").length, 0);
  assert.equal(say("yes").response, glucoseLib.veryLowReply({ unit: "mmol/L", value: 2.5 }), "after the yes, the existing very-low guidance");
  const afterBp = say("my blood pressure is 190 over 125 and I have chest pain", { confirmedByCaller: true });
  assert.equal(afterBp.response, bpLib.urgentGuidance(190, 125, "my blood pressure is 190 over 125 and I have chest pain"));
  assert.equal(say("my blood pressure is 130 over 85 and I have chest pain"), null, "a worrying symptom with an ordinary reading belongs to the care and safety answers, not to a save-and-ask");
});

test("other readings: weight, pulse, temperature and oxygen are read back and saved with their unit", () => {
  const db = { profile: {} }; const say = makeChat(db, person());
  for (const [phrase, metric, value, unit] of [["log my weight 68 kg", "weight", "68", "kg"], ["pulse 88", "pulse", "88", "bpm"], ["temperature 38.5", "temperature", "38.5", "C"], ["my oxygen is 96", "oxygen_saturation", "96", "%"], ["my weight is 150 pounds", "weight", "150", "lb"]]) {
    const asked = say(phrase);
    assert.ok(asked.requiresConfirmation, phrase);
    assert.ok(say("yes").saved, phrase);
    const stored = rpm(db, "u1")[0];
    assert.deepEqual([stored.metric, stored.value, stored.unit], [metric, value, unit], phrase);
    assert.equal(stored.dateTimeText, "7 October 2026");
  }
});

test("a reading said about yesterday is dated yesterday", () => {
  const db = { profile: {} }; const say = makeChat(db, person());
  const asked = say("my blood pressure yesterday was 135 over 85");
  assert.match(asked.response, /for 6 October 2026/);
  say("yes");
  assert.equal(chronic(db, "u1")[0].dateTimeText, "6 October 2026");
});

test("show: blood pressure and blood sugar are listed apart, newest first, with dates, five at most", () => {
  const db = { profile: {} }; const say = makeChat(db, person());
  for (const phrase of ["my blood pressure is 120 over 80", "my blood sugar is 7.2 mmol", "my blood pressure is 130 over 85", "my blood sugar is 130 mg per dl", "my blood pressure is 140 over 90", "my blood pressure is 118 over 76", "my blood pressure is 122 over 78", "my blood pressure is 125 over 80", "my blood pressure is 128 over 82"]) { say(phrase); say("yes"); }
  const onlyBp = say("show my BP readings");
  assert.match(onlyBp.response, /You have 7 saved blood pressure readings; the latest 5 are: 128 over 82 on 7 October 2026; 125 over 80/);
  assert.doesNotMatch(onlyBp.response, /mmol|mg\/dL|sugar/, "a blood pressure request does not list sugar");
  const onlySugar = say("show my sugar readings");
  assert.match(onlySugar.response, /You have 2 saved blood sugar readings: 130 mg\/dL on 7 October 2026; 7\.2 mmol\/L on 7 October 2026\./);
  assert.doesNotMatch(onlySugar.response, / over /);
  assert.match(say("what was my last blood pressure reading").response, /^Your last blood pressure reading was 128 over 82, on 7 October 2026\.$/);
  const all = say("show my readings");
  assert.match(all.response, /blood pressure reading[s]?.*blood sugar reading/s);
  assert.match(say("nionyeshe vipimo vyangu vya sukari").response, /^Una vipimo 2 vya sukari ya damu vilivyohifadhiwa: 130 mg\/dL tarehe 7 Oktoba 2026/);
  assert.match(say("nionyeshe vipimo vya presha").response, /128 juu ya 82 tarehe 7 Oktoba 2026/);
  assert.match(say("show my weight readings").response, /don't have any saved weight readings yet/);
  assert.match(makeChat({ profile: {} }, person("nobody"))("show my health readings").response, /don't have any saved health readings yet/);
});

test("show with a window: this week leaves out older readings", () => {
  const db = { profile: {} }; const say = makeChat(db, person());
  say("my blood pressure is 120 over 80"); say("yes");
  const old = chronic(db, "u1")[0]; old.createdAt = new Date(START - 20 * 24 * 3600 * 1000).toISOString();
  say("my blood pressure is 130 over 85"); say("yes");
  const week = say("show my blood pressure readings for this week");
  assert.match(week.response, /You have 1 saved blood pressure reading: 130 over 85/);
});

test("delete the last reading: asked first, then done and checked in the store; no leaves it", () => {
  const db = { profile: {} }; const say = makeChat(db, person());
  say("my blood pressure is 120 over 80"); say("yes"); say("my blood sugar is 7.2 mmol"); say("yes"); say("my blood pressure is 133 over 78"); say("yes");
  const asked = say("delete my last blood pressure reading");
  assert.match(asked.response, /Your last blood pressure reading was 133 over 78, from 7 October 2026\. Shall I delete it\?/);
  assert.equal(chronic(db, "u1").length, 3, "nothing is deleted by the question");
  assert.match(say("no").response, /I have not deleted anything/);
  assert.equal(chronic(db, "u1").length, 3);
  say("delete my last blood pressure reading");
  const done = say("yes");
  assert.match(done.response, /Done\. I deleted your blood pressure reading 133 over 78 from 7 October 2026\. Nothing else was changed\./);
  assert.deepEqual(chronic(db, "u1").map(record => record.systolic ?? record.glucose).sort((a, b) => a - b), [7.2, 120]);
  say("delete the last sugar reading"); say("yes");
  assert.deepEqual(chronic(db, "u1").map(record => record.systolic), [120]);
  assert.match(say("delete my last weight reading").response, /no saved weight readings to delete/);
  const anyLast = say("futa kipimo cha mwisho");
  assert.match(anyLast.response, /Kipimo chako cha mwisho cha shinikizo la damu kilikuwa 120 juu ya 80/);
  assert.match(say("ndiyo").response, /Nimemaliza\. Nimefuta kipimo chako cha shinikizo la damu 120 juu ya 80/);
  assert.equal(chronic(db, "u1").length, 0);
  assert.match(say("delete my last reading").response, /no saved health readings to delete/);
});

test("correct the last reading: it was 133/78 changes the stored numbers after a yes, and only inside a health conversation", () => {
  const db = { profile: {} }; const say = makeChat(db, person());
  say("my blood pressure is 150 over 95"); say("yes");
  const asked = say("it was 133/78");
  assert.match(asked.response, /Your last blood pressure reading was 150 over 95, from 7 October 2026\. Change it to 133 over 78\?/);
  assert.deepEqual([chronic(db, "u1")[0].systolic, chronic(db, "u1")[0].diastolic], [150, 95], "nothing changes before the yes");
  const done = say("yes");
  assert.match(done.response, /^Done\. I changed your blood pressure reading from 150 over 95 to 133 over 78\. I saved the blood-pressure reading 133 over 78/);
  assert.deepEqual([chronic(db, "u1")[0].systolic, chronic(db, "u1")[0].diastolic], [133, 78]);
  assert.equal(chronic(db, "u1").length, 1, "the same reading, changed, not a second one");
  say("that was wrong");
  assert.match(say("that was wrong").response, /delete your last reading, or change it/);
  assert.match(say("it was 7.2").response, /I could not tell both numbers of that blood pressure/);
  // a correction with no saved reading to change
  const empty = makeChat({ profile: {} }, person("fresh"));
  empty("show my health readings");
  assert.match(empty("it was 133/78").response, /I don't have a saved blood pressure reading to change/);
  // outside a health conversation a correction word is not ours, but a full pressure is a new reading
  const cold = makeChat({ profile: {} }, person("cold"));
  assert.equal(cold("that was wrong"), null);
  assert.equal(cold("it was 12 not 13"), null);
  assert.ok(cold("it was 133/78").requiresConfirmation);
});

test("a sugar can be corrected too, in the unit of the new figure", () => {
  const db = { profile: {} }; const say = makeChat(db, person());
  say("my blood sugar is 9.4"); say("yes");
  say("that was wrong"); say("it was 7.2");
  assert.ok(say("yes").changed);
  assert.deepEqual([chronic(db, "u1")[0].glucose, chronic(db, "u1")[0].glucoseUnit], [7.2, "mmol/L"]);
});

test("delete all: counted, in full words, only this person's readings; a bare yes or the wrong number does nothing", () => {
  const db = { profile: {} }; const mine = person("u1"); const theirs = person("u2");
  const sayMine = makeChat(db, mine); const sayTheirs = makeChat(db, theirs);
  for (const phrase of ["my blood pressure is 120 over 80", "my blood sugar is 7.2 mmol", "log my weight 68 kg"]) { sayMine(phrase); sayMine("yes"); }
  for (const phrase of ["my blood pressure is 111 over 71", "my blood sugar is 5.5 mmol"]) { sayTheirs(phrase); sayTheirs("yes"); }
  const asked = sayMine("delete all my health records");
  assert.match(asked.response, /permanent and cannot be undone\. You have 3 saved readings \(1 blood pressure, 1 blood sugar, 1 weight\)\. I would delete only your own readings/);
  assert.match(asked.response, /say "yes, delete all 3"/);
  assert.match(sayMine("yes").response, /please say the full words: "yes, delete all 3"/);
  assert.match(sayMine("yes, delete all 5").response, /please say the full words/, "a number that is not the count is not a confirmation");
  assert.equal(chronic(db, "u1").length + rpm(db, "u1").length, 3, "nothing is deleted yet");
  assert.match(sayMine("no").response, /I have not deleted anything/);
  sayMine("delete all my health records");
  const done = sayMine("yes, delete all 3");
  assert.match(done.response, /Done\. I deleted 3 health readings from your account\. Nothing else was changed\./);
  assert.equal(chronic(db, "u1").length + rpm(db, "u1").length, 0);
  assert.equal(chronic(db, "u2").length, 2, "another person's readings are untouched");
  assert.equal(entriesOf(require("../../server/providers/healthRecordScope.js").scopeHealthDb(db, "u2")).length, 2);
  // by kind
  sayTheirs("forget my BP readings");
  assert.match(sayTheirs("yes, delete all 1").response, /Done\. I deleted 1 blood pressure reading from your account/);
  assert.deepEqual(chronic(db, "u2").map(record => record.glucose), [5.5], "only the blood pressure readings went");
  // Kiswahili
  sayTheirs("futa taarifa zangu zote za afya");
  assert.match(sayTheirs("ndiyo futa zote 1").response, /Nimemaliza\. Nimefuta vipimo 1 vya afya/);
  assert.equal(chronic(db, "u2").length, 0);
});

test("one person's question and answer are theirs alone", () => {
  const db = { profile: {} }; const sayA = makeChat(db, person("a")); const sayB = makeChat(db, person("b"));
  sayA("my blood pressure is 140 over 90");
  assert.equal(sayB("yes"), null, "B's yes does not answer A's question");
  assert.equal(chronic(db, "a").length + chronic(db, "b").length, 0);
  assert.ok(sayA("yes").saved);
  assert.match(sayB("show my health readings").response, /don't have any saved health readings yet/);
});

test("an account that may not write health records saves, changes and deletes nothing", () => {
  const db = { profile: {} }; const say = makeChat(db, person("guest"), { canWrite: false });
  for (const phrase of ["my blood pressure is 140 over 90", "delete my last blood pressure reading", "delete all my health records"]) {
    const reply = say(phrase);
    assert.equal(reply.status, "restricted", phrase);
    assert.match(reply.response, /cannot use that action here/);
  }
  assert.equal(chronic(db, "guest").length, 0);
});

test("who can see, sharing and medicines: honest answers and no records", () => {
  const db = { profile: {} }; const say = makeChat(db, person());
  const sees = say("who can see my health information").response;
  assert.match(sees, /saved under your own account, and other people who sign in do not see them/);
  assert.match(sees, /Admin and Provider Reviewer accounts can see health records held on the system/);
  assert.match(sees, /delete all my health records/);
  const share = say("share with my nurse").response;
  assert.match(share, /can't send your readings to a nurse or a doctor from here, and I have not contacted anyone/);
  assert.doesNotMatch(share, /connected|representative/i);
  assert.doesNotMatch(say("send to my doctor").response, /connected|representative/i);
  assert.equal(say("yes"), null, "a yes after that answers nothing, so nothing is claimed shared");
  const missed = say("I missed my morning dose, should I take double").response;
  assert.equal(missed, "Thank you for telling me. I can't tell you whether to take it late or leave it: please ask your pharmacist or clinic, and don't double up the next dose unless they say so. I have not saved anything about this dose.");
  assert.match(say("I am running out of my pills").response, /contact your clinic or pharmacy about getting more before you run out\. Continue any medication your provider has already given you, exactly as directed/);
  assert.match(say("I stopped my BP pills because I feel fine").response, /I can't advise on stopping a medicine\. Please speak to your health worker or pharmacist.*High blood pressure often causes no symptoms/);
  assert.doesNotMatch(say("I stopped my medicine").response, /High blood pressure/);
  assert.match(say("dawa zangu zinaisha").response, /Tafadhali wasiliana na kliniki au famasia/);
  assert.match(say("nimeacha kumeza dawa za presha kwa sababu najisikia vizuri").response, /Siwezi kushauri kuhusu kuacha dawa/);
  assert.match(say("nimesahau kumeza dawa ya presha jana").response, /Siwezi kukuambia kama unywe dawa hiyo kwa kuchelewa/);
  assert.equal(say("I forgot to give the cow its dose of dewormer"), null);
  assert.equal(chronic(db, "u1").length + rpm(db, "u1").length, 0);
});

test("Kiswahili: the question, the answer and the saved reading", () => {
  const db = { profile: {} }; const say = makeChat(db, person(), { language: "sw" });
  const asked = say("presha yangu ni 160 juu ya 100");
  assert.match(asked.response, /^Nimesikia shinikizo lako la damu ni 160 juu ya 100, la tarehe 7 Oktoba 2026\. Nikihifadhi\?/);
  const saved = say("ndiyo");
  assert.match(saved.response, /^Nimehifadhi kipimo cha shinikizo la damu 160 juu ya 100/);
  assert.deepEqual([chronic(db, "u1")[0].systolic, chronic(db, "u1")[0].diastolic], [160, 100]);
  const sugar = say("sukari ni 8,5");
  assert.match(sugar.response, /Nimesikia sukari yako ni 8\.5 \(nimedhani ni mmol kwa lita/);
  assert.match(say("hapana").response, /sijahifadhi chochote/);
  assert.equal(chronic(db, "u1").length, 1);
  assert.match(say("shinikizo la damu 1500 na 95").response, /haionekani kuwa kipimo halisi/);
});

test("two readings in one sentence: neither is saved, one at a time is asked for", () => {
  const db = { profile: {} }; const say = makeChat(db, person());
  const reply = say("my blood pressure is 140 over 90 and my blood sugar is 8");
  assert.match(reply.response, /You gave me 2 readings \(blood pressure and blood sugar\)\. I save one reading at a time/);
  assert.equal(say("yes"), null);
  assert.equal(chronic(db, "u1").length, 0);
});

test("ordinary sentences are not ours, and erasing an account removes what was waiting", () => {
  const db = { profile: {} }; const say = makeChat(db, person());
  for (const phrase of ["what is the weather in Nairobi", "add milk to my shopping list", "remind me at 8 am to call mama", "the plot is 60 by 40", "how do I lower my blood pressure", "what does a blood pressure of 140 over 90 mean", "hello"]) assert.equal(say(phrase), null, phrase);
  // a farmer's rainfall or soil readings are not ours to answer for: "show my readings" is ours only if there are health readings or health words
  const farmer = makeChat({ profile: {} }, person("farmer"));
  assert.equal(farmer("show my readings"), null);
  assert.equal(farmer("delete my last reading"), null);
  assert.equal(farmer("show my rainfall readings"), null);
  say("my blood pressure is 140 over 90");
  assert.equal(db.profile.nexusHealthVoicePending.length, 1);
  assert.deepEqual(collectOwnedHealthBridgeRecords(db, "u1"), {}, "the waiting question is not part of an export of someone's records");
  eraseOwnedHealthBridgeRecords(db, "u1");
  assert.equal(db.profile.nexusHealthVoicePending.length, 0, "erasing the person's records removes the question that was waiting");
});
