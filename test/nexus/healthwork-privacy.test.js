"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { healthWorkTurn } = require("../../nexus/healthwork/index.js");
const { HealthRecordRepository } = require("../../nexus/healthwork/store.js");
const { fakeFarmStore, fakeMemory } = require("./farmwork-fake.js");

const NOW = new Date("2026-09-20T05:00:00Z");
function worker({ userId = "u1", store = fakeFarmStore(), memory = fakeMemory() } = {}) {
  const say = async text => healthWorkTurn({ text, store, tenantId: "t1", userId, now: NOW, timeZone: "Africa/Nairobi", memory, nameOf: async () => "Amina Wanjiru" });
  return { say, store, memory };
}
const run = async (who, lines) => { const out = []; for (const line of lines) out.push(await who.say(line)); return out; };
const registerMary = who => run(who, ["Register a patient called Mary Akinyi, 34, female, Kibera", "skip"]);

async function fullClinic() {
  const who = worker(); await run(who, ["Set up my clinic details", "nurse", "Kibera Clinic", "Kibera"]); await registerMary(who);
  await who.say("Mary is allergic to penicillin"); await who.say("Visit Mary: temp 38.5, diagnosis: malaria"); await who.say("Mary received BCG, next dose in 6 weeks"); await who.say("Mary is pregnant, due 12 March");
  await who.say("Add 100 tablets of paracetamol to clinic stock, expires 2027-03-31"); await who.say("Dispensed 10 tablets of paracetamol to Mary"); await who.say("Dispensed 5 tablets of paracetamol");
  await who.say("Write a referral letter for Mary to Kisumu Hospital: reason");
  return who;
}

test("export gives a full copy: JSON by default, or a readable file, with nothing internal and a log entry", async () => {
  const who = await fullClinic();
  const made = await who.say("Export all my patient records");
  assert.equal(made.report.format, "json"); const data = JSON.parse(made.report.content);
  assert.equal(data.schema, "kyro.health-export.v1");
  assert.deepEqual(data.counts, { patients: 1, visits: 1, immunisations: 1, pregnancies: 1, followUps: 0, referrals: 1, dispensed: 2, clinicStockItems: 1 });
  const mary = data.patients[0];
  assert.equal(mary.name, "Mary Akinyi"); assert.deepEqual(mary.allergies, ["penicillin"]); assert.equal(mary.visits[0].vitals.temperature.value, 38.5); assert.equal(mary.visits[0].conditionAsStated, "malaria");
  assert.equal(mary.immunisations[0].vaccine, "BCG"); assert.equal(mary.pregnancies[0].expectedDelivery, "2027-03-12"); assert.equal(mary.referrals[0].to, "Kisumu Hospital"); assert.equal(mary.dispensed.length, 1);
  assert.equal(data.clinicStock[0].quantity, 85); assert.equal(data.dispensedNotAttachedToAPatient.length, 1); assert.equal(data.clinic.facility, "Kibera Clinic");
  assert.doesNotMatch(made.report.content, /memoryId|"pid"/, "no internal ids");
  const pdf = await who.say("Back up my patient data as a PDF");
  assert.equal(pdf.report.format, "pdf"); assert.match(pdf.report.content, /HEALTH RECORDS EXPORT[\s\S]*Mary Akinyi[\s\S]*CLINIC STOCK \(1\)/);
  const log = await who.say("Show my data log");
  assert.match(log, /exported 1 patient \(\d+ records, pdf\).*exported 1 patient \(\d+ records, json\)/s); assert.match(log, /Names are never kept/); assert.doesNotMatch(log, /Mary|Akinyi/);
  assert.equal(await worker().say("Export all my patient records"), null, "someone with no health records is not answered");
});

test("erase everything needs the exact words, never a stray yes, and leaves only a log with no names", async () => {
  const who = await fullClinic();
  const ask = await who.say("Erase all my patient records");
  assert.match(ask, /erase for good 1 patient.*1 visit.*cannot be undone.*export all my patient records.*type exactly: ERASE ALL/s);
  assert.match(await who.say("yes"), /type exactly: ERASE ALL/); assert.match(await who.say("Show my patients"), /Mary Akinyi/, "a yes erased nothing");
  await who.say("Erase all my patient records"); const stray = await who.say("erase everything now"); assert.ok(!stray || !/Done/.test(stray), "other words erase nothing"); assert.match(await who.say("Show my patients"), /Mary Akinyi/);
  await who.say("Erase all my patient records"); assert.match(await who.say("no"), /left it as it is/); assert.match(await who.say("Show my patients"), /Mary Akinyi/);
  await who.say("Erase all my patient records");
  const done = await who.say("ERASE ALL");
  assert.match(done, /Done\. I erased 1 patient.*for good.*letters and reports you already made are separate documents/s);
  assert.match(await who.say("Show my patients"), /no patients registered/); assert.match(await who.say("Show my clinic stock"), /empty/);
  assert.deepEqual(who.store.rows.map(row => row.collection).filter(name => name !== "audit"), [], "only the log remains"); assert.equal(who.store.sessions.size, 0);
  assert.match(await who.say("Show my data log"), /erased everything/); assert.doesNotMatch(JSON.stringify(who.store.rows), /Mary|Akinyi|Kibera/);
  assert.equal(await who.say("Print my monthly report"), null, "nothing is left, so a report request is left to normal planning");
  assert.equal(await who.say("Erase all my patient records"), null);
});

test("erasing what was removed wipes those rows for good and keeps the rest", async () => {
  const who = await fullClinic(); await run(who, ["Register patient Peter Otieno", "40", "male", "skip", "skip"]); await who.say("Visit Peter: cough");
  assert.equal(await who.say("Erase my removed patient records"), "You have nothing removed waiting to be erased.");
  await who.say("Remove patient Peter"); await who.say("yes");
  assert.ok(who.store.rows.some(row => row.deleted), "the removal is soft until erased");
  assert.match(await who.say("Erase my removed patient records"), /2 removed records.*erased for good and cannot come back.*Say yes/s);
  assert.match(await who.say("no"), /left it as it is/); assert.ok(who.store.rows.some(row => row.deleted));
  await who.say("Erase my removed patient records"); assert.match(await who.say("yes"), /erased 2 removed records for good/);
  assert.equal(who.store.rows.some(row => row.deleted), false);
  const list = await who.say("Show my patients"); assert.match(list, /Mary Akinyi/); assert.doesNotMatch(list, /Peter/);
  const log = await who.say("Show my data log"); assert.match(log, /removed patient #2 and 1 record/); assert.match(log, /erased 2 removed records for good/); assert.doesNotMatch(log, /Peter|Otieno/);
  assert.equal(await worker().say("Erase my removed patient records"), null);
});

test("a legal hold stops an erase, and nothing is touched", async () => {
  const who = await fullClinic(); who.store.hold.active = true;
  await who.say("Erase all my patient records"); assert.match(await who.say("ERASE ALL"), /legal hold.*Nothing was erased/); assert.match(await who.say("Show my patients"), /Mary Akinyi/);
  await who.say("Remove patient Mary"); await who.say("yes"); await who.say("Erase my removed patient records"); assert.match(await who.say("yes"), /legal hold/); assert.ok(who.store.rows.some(row => row.deleted));
  who.store.hold.active = false; await who.say("Erase my removed patient records"); assert.match(await who.say("yes"), /Done/);
});

test("the hard erase touches only this person's health rows, checks for a legal hold, and keeps only the log", async () => {
  const db = { calls: [], hold: false, async query(sql, params) { this.calls.push({ sql, params }); if (/from nexus_legal_holds/.test(sql)) return { rows: this.hold ? [{ hold_id: "h" }] : [] }; if (/returning memory_id/.test(sql)) return { rows: [{ memory_id: "a" }, { memory_id: "b" }] }; return { rows: [{ n: 3 }] }; } };
  const store = new HealthRecordRepository(db);
  assert.equal(await store.countRemoved({ tenantId: "t1", userId: "u1" }), 3);
  assert.deepEqual(await store.purgeRemoved({ tenantId: "t1", userId: "u1" }), { purged: 2 }); assert.deepEqual(await store.purgeAll({ tenantId: "t1", userId: "u1" }), { purged: 2 });
  const deletes = db.calls.filter(item => /delete from/.test(item.sql)); assert.equal(deletes.length, 2);
  for (const call of deletes) { assert.match(call.sql, /tenant_id=\$1 and principal_id=\$2/); assert.match(call.sql, /'health_records'/); assert.doesNotMatch(call.sql, /farm_records/); assert.deepEqual(call.params, ["t1", "u1"]); }
  assert.match(deletes[1].sql, /<> 'audit'/, "the log survives an erase");
  for (const call of db.calls) assert.doesNotMatch(call.sql, /\$\d::text is null/);
  db.hold = true;
  assert.deepEqual(await store.purgeAll({ tenantId: "t1", userId: "u1" }), { blocked: true }); assert.deepEqual(await store.purgeRemoved({ tenantId: "t1", userId: "u1" }), { blocked: true });
  assert.equal(db.calls.filter(call => /delete from/.test(call.sql)).length, 2, "no delete was issued under a hold");
});
