"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { createMedicationService, readMedicationRequest, parseTimes, parseNameAndDose } = require("../../nexus/companion/medications.js");
const { MedicationRepository } = require("../../nexus/companion/medication-store.js");
const { createCompanion } = require("../../nexus/companion/index.js");
const { CircleRepository } = require("../../nexus/companion/circle-repository.js");

test("medicine requests are read exactly, and things that only sound similar are not", () => {
  assert.deepEqual(readMedicationRequest("Add medication metformin 500mg at 8am and 8pm"), { action: "add", name: "metformin", dose: "500 mg", times: ["08:00", "20:00"] });
  assert.deepEqual(readMedicationRequest("Remind me to take lisinopril 10 mg at 7am every day"), { action: "add", name: "lisinopril", dose: "10 mg", times: ["07:00"] });
  assert.deepEqual(readMedicationRequest("I take aspirin 75mg every morning"), { action: "add", name: "aspirin", dose: "75 mg", times: ["08:00"] });
  assert.equal(readMedicationRequest("I take aspirin every morning"), null, "no dose and no medicine word: not assumed to be a medicine");
  assert.deepEqual(readMedicationRequest("I take vitamin D every day at 9am"), { action: "add", name: "vitamin d", dose: "", times: ["09:00"] });
  assert.deepEqual(readMedicationRequest("Add medication metformin at morning and evening").times, ["08:00", "18:00"]);
  assert.deepEqual(readMedicationRequest("add medication metformin at foo"), { action: "add", invalid: "times", name: "metformin" });
  assert.equal(readMedicationRequest("What medications do I take?").action, "list");
  assert.deepEqual(readMedicationRequest("Stop reminding me about metformin"), { action: "remove", query: "metformin" });
  assert.deepEqual(readMedicationRequest("I took my morning pills"), { action: "taken", query: "pills" });
  assert.deepEqual(readMedicationRequest("Did I take my metformin today?"), { action: "did-i", query: "metformin" });
  for (const text of ["Remind me to take out the trash at 5pm", "Remind me to take out the trash at 5pm every day", "Remind me to call the vet tomorrow", "What time is it", "I take the bus every day at 7", "I take my kids to school every day at 7"]) assert.equal(readMedicationRequest(text), null, text);
  assert.deepEqual(parseTimes("8am, 2pm and 9:30pm"), ["08:00", "14:00", "21:30"]);
  assert.equal(parseTimes("whenever"), null);
  assert.equal(parseTimes("1am, 2am, 3am, 4am, 5am, 6am, 7am"), null, "at most six times a day");
  assert.deepEqual(parseNameAndDose("my metformin 500mg"), { name: "metformin", dose: "500 mg" });
  assert.equal(parseNameAndDose("12345"), null);
});

// ---- an in-memory store with the contract of MedicationRepository ----
function fakeStore() {
  const rows = []; let n = 0;
  return { rows,
    async addMedication({ tenantId, userId, content }) { rows.push({ memoryId: `m${++n}`, tenantId, userId, content }); },
    async addMedicationUnlessCapped({ tenantId, userId, content, maxMedications }) {
      const count = rows.filter(row => row.tenantId === tenantId && row.userId === userId && row.content.kind === "medication" && row.content.active !== false && !row.removed).length;
      if (count >= maxMedications) return { capped: true, count };
      const memoryId = `m${++n}`;
      rows.push({ memoryId, tenantId, userId, content });
      return { memoryId, content };
    },
    async createDose({ tenantId, userId, content }) { rows.push({ memoryId: `d${++n}`, tenantId, userId, content: { kind: "dose", ...content } }); },
    async claimDoseSlot({ tenantId, userId, medId, day, time, content }) {
      if (rows.find(item => item.userId === userId && item.content.kind === "dose" && item.content.medId === medId && item.content.day === day && item.content.time === time)) return null;
      const row = { memoryId: `d${++n}`, tenantId, userId, content: { kind: "dose", ...content } };
      rows.push(row);
      return { memoryId: row.memoryId, ...row.content };
    },
    async listMedications({ tenantId, userId }) { return rows.filter(row => row.tenantId === tenantId && row.userId === userId && row.content.kind === "medication" && row.content.active !== false && !row.removed).map(row => ({ memoryId: row.memoryId, content: row.content })); },
    async updateMedication({ memoryId, content }) { rows.find(row => row.memoryId === memoryId).content = content; return true; },
    async removeMedication({ memoryId }) { rows.find(row => row.memoryId === memoryId).removed = true; return true; },
    async listAllActiveMedications() { return rows.filter(row => row.content.kind === "medication" && !row.removed).map(row => ({ memoryId: row.memoryId, tenantId: row.tenantId, userId: row.userId, content: row.content })); },
    async getDose({ userId, medId, day, time }) { const row = rows.find(item => item.userId === userId && item.content.kind === "dose" && item.content.medId === medId && item.content.day === day && item.content.time === time); return row ? { memoryId: row.memoryId, ...row.content } : null; },
    async dosesForDay({ userId, day }) { return rows.filter(row => row.userId === userId && row.content.kind === "dose" && row.content.day === day).map(row => ({ memoryId: row.memoryId, ...row.content })); },
    async updateDose({ memoryId, content, expectedStatus }) {
      const row = rows.find(item => item.memoryId === memoryId);
      if (expectedStatus !== undefined && row.content.status !== expectedStatus) return false;
      const { memoryId: _ignored, ...rest } = content; row.content = { kind: "dose", ...rest }; return true;
    },
    async listPendingDoses() { return rows.filter(row => row.content.kind === "dose" && row.content.status === "pending").map(row => ({ memoryId: row.memoryId, tenantId: row.tenantId, userId: row.userId, ...row.content })); }
  };
}
function setup({ members = [], devices = [{ id: 1 }], paused = false } = {}) {
  const store = fakeStore(); const pushes = []; let clock = new Date("2026-09-20T05:00:00Z"); // 08:00 Nairobi
  const circle = { async activeMembers() { return members; } };
  const service = createMedicationService({ store, circle, notifications: { enqueue: async () => {} }, devices: { listPushable: async () => devices }, autonomyControl: { isPaused: async () => paused },
    push: async row => { pushes.push(row); }, memoryUserName: async () => "Baba Kamau", now: () => clock });
  const say = text => service.turn({ tenantId: "t1", userId: "u1", text, timeZone: "Africa/Nairobi", at: clock });
  return { store, pushes, service, say, set: value => { clock = value; }, get clock() { return clock; } };
}

test("adding, changing, listing and removing a medicine, with the honest limits said out loud", async () => {
  const s = setup();
  const added = await s.say("Add medication metformin 500mg at 8am and 8pm");
  assert.equal(added, "Done. I'll remind you to take metformin 500 mg at 8:00 am and 8:00 pm every day. I only repeat what you tell me was prescribed to you; I can't check doses, so follow your clinician's advice. Say \"I took my metformin\" when you have.");
  assert.equal(await s.say("What medications do I take?"), "Your medicines: metformin 500 mg at 8:00 am and 8:00 pm.");
  assert.match(await s.say("Add medication metformin 500mg at 9am"), /every day \(this replaces the times I had\)\./);
  assert.equal(s.store.rows.filter(row => row.content.kind === "medication").length, 1, "one row per medicine");
  assert.match(await s.say("Add medication metformin at foo"), /I couldn't read the times for metformin/);
  assert.equal(await s.say("Stop reminding me about the meeting"), null, "that is a reminder, not a medicine");
  assert.equal(await s.say("Stop reminding me about metformin"), "Done. I've stopped reminding you about metformin.");
  assert.match(await s.say("What medications do I take?"), /^You have no medication reminders\./);
  for (let i = 0; i < 12; i += 1) await s.say(`Add medication drug${String.fromCharCode(97 + i)} at 8am`);
  assert.match(await s.say("Add medication onemore at 8am"), /most medicines I can keep reminders for/);
});

// Found live: the substring match let a spoken name for one real medicine
// silently resolve to a different, distinct one whenever one name was a
// plain substring of the other -- "vitamin d" is a substring of the real,
// different "vitamin d3".
test("a spoken medicine name never silently matches a different, distinct medicine it happens to be a substring of", async () => {
  const s = setup();
  await s.say("Add medication vitamin d3 at 8am");
  assert.equal(await s.say("I took my vitamin d"), null, "'vitamin d' must not silently resolve to the different, real 'vitamin d3'");
  assert.equal(await s.say("Stop reminding me about vitamin d"), null, "same for removal");
  assert.match(await s.say("What medications do I take?"), /vitamin d3/, "the real medicine must be untouched");
});

// Found live: unlike "remove" (which asks "Which one?" once more than one medicine matches a partial name),
// "taken" applied to every ambiguous match with no disambiguation at all. "insulin" is a genuine word-subset
// of both "insulin glargine" and "insulin aspart" (a realistic basal+bolus case) -- saying "I took my
// insulin" (meaning only one of them) silently marked the OTHER, still genuinely pending dose "taken" too,
// suppressing the real missed-dose alert that should reach the person's trusted circle.
test("an ambiguous partial medicine name asks which one for 'taken', instead of silently marking every match as taken", async () => {
  const s = setup();
  await s.say("Add medication insulin glargine at 8am");
  await s.say("Add medication insulin aspart at 8am");
  await s.service.sendDue({ at: s.clock });
  assert.match(await s.say("I took my insulin"), /^Which one: insulin (?:glargine or insulin aspart|aspart or insulin glargine)\?$/);
  const taken = s.store.rows.filter(row => row.content.kind === "dose" && row.content.status === "taken");
  assert.equal(taken.length, 0, "neither dose may be marked taken until the person says which one");
  assert.equal(await s.say("I took my insulin glargine"), "Thank you. I've logged insulin glargine as taken.", "a genuinely unambiguous name still works");
  assert.equal(s.store.rows.filter(row => row.content.kind === "dose" && row.content.status === "taken").length, 1);
  // The deliberately-supported bulk generic-word flow (e.g. "I took my pills") is unaffected by this fix.
  assert.equal(await s.say("I took my pills"), "Thank you. I've logged insulin glargine and insulin aspart as taken.", "a generic word still means every medicine");
});

test("Kyro reminds at each dose time once, and never for a phone that cannot be reached", async () => {
  const s = setup();
  await s.say("Add medication metformin 500mg at 8am and 8pm");
  assert.deepEqual(await s.service.sendDue({ at: s.clock }), { checked: 1, prompted: 1, alerted: 0, missed: 0, skippedPaused: 0, skippedNoDevice: 0 });
  assert.equal(s.pushes[0].title, "Time for your medicine"); assert.match(s.pushes[0].body, /^It's 8:00 am: time for your metformin 500 mg\. Say "I took my metformin" once you have\.$/);
  assert.match(s.pushes[0].key, /^dose:m\d+:2026-09-20:08:00$/);
  assert.equal((await s.service.sendDue({ at: new Date("2026-09-20T05:20:00Z") })).prompted, 0, "once per dose");
  assert.equal((await s.service.sendDue({ at: new Date("2026-09-20T02:00:00Z") })).prompted, 0, "not before the time");
  const evening = await s.service.sendDue({ at: new Date("2026-09-20T17:00:00Z") }); // 20:00
  assert.equal(evening.prompted, 1);
  const noDevice = setup({ devices: [] }); await noDevice.say("Add medication metformin at 8am");
  assert.equal((await noDevice.service.sendDue({ at: noDevice.clock })).skippedNoDevice, 1); assert.equal(noDevice.store.rows.filter(row => row.content.kind === "dose").length, 0, "no dose recorded that nobody could see");
  const paused = setup({ paused: true }); await paused.say("Add medication metformin at 8am");
  assert.equal((await paused.service.sendDue({ at: paused.clock })).skippedPaused, 1);
});

// Found live: sendDue()'s check-then-act (getDose(), then createDose()
// moments later) had no lock, so two workers ticking the same due dose
// within the same race window could both see "no dose yet" and both create
// one -- a duplicate "time for your medicine" push, and a stray extra
// pending row that never gets marked taken (only the newest one does),
// which later crosses GRACE_HOURS and falsely tells the person's trusted
// circle they missed a dose they actually took.
test("two concurrent sendDue sweeps for the same due dose only prompt once, not twice", async () => {
  const s = setup();
  await s.say("Add medication metformin 500mg at 8am");
  const [first, second] = await Promise.all([s.service.sendDue({ at: s.clock }), s.service.sendDue({ at: s.clock })]);
  assert.equal(first.prompted + second.prompted, 1, "exactly one of the two racing sweeps must have prompted");
  assert.equal(s.pushes.length, 1, "the person must only be pushed once, not twice, for the same dose");
  assert.equal(s.store.rows.filter(row => row.content.kind === "dose").length, 1, "only one dose row must exist for this slot");
});

test("saying the dose was taken records it, answers 'did I', and words that match no medicine are just talk", async () => {
  const s = setup();
  await s.say("Add medication metformin 500mg at 8am and 8pm"); await s.say("Add medication aspirin at 8am");
  await s.service.sendDue({ at: s.clock });
  assert.match(await s.say("Did I take my metformin today?"), /^Not yet — the 8:00 am dose of metformin is waiting\.$/);
  assert.equal(await s.say("I took my metformin"), "Thank you. I've logged metformin as taken.");
  assert.match(await s.say("Did I take my metformin today?"), /^Yes — you logged metformin at 8:00 am today\.$/);
  assert.equal(await s.say("I took my pills"), "Thank you. I've logged metformin and aspirin as taken.", "a generic word means every medicine");
  assert.equal(await s.say("I took a walk"), null); assert.equal(await s.say("I had lunch"), null); assert.equal(await s.say("Did I take out the trash"), null);
  const extra = setup(); await extra.say("Add medication aspirin at 8pm");
  assert.equal(await extra.say("I took my aspirin"), "Thank you. I've logged aspirin as taken.");
  assert.equal(extra.store.rows.find(row => row.content.kind === "dose").content.extra, true, "a dose nobody asked about is recorded as extra");
});

test("an unconfirmed dose tells only the members the person chose, never which medicine, and is cleared by taking it", async () => {
  const members = [{ otherId: "u-amina", otherName: "Amina Wanjiru", shares: { medications: true } }, { otherId: "u-joseph", otherName: "Joseph Otieno", shares: { checkins: true } }];
  const s = setup({ members });
  const added = await s.say("Add medication metformin 500mg at 8am");
  assert.match(added, /I'll tell Amina Wanjiru that a dose is waiting — never which medicine\./);
  await s.service.sendDue({ at: s.clock }); s.pushes.length = 0;
  assert.equal((await s.service.sendDue({ at: new Date("2026-09-20T06:30:00Z") })).alerted, 0, "still inside the two hours");
  const late = await s.service.sendDue({ at: new Date("2026-09-20T07:10:00Z") });
  assert.equal(late.alerted, 1);
  const toMember = s.pushes.filter(push => push.userId === "u-amina"); const toOther = s.pushes.filter(push => push.userId === "u-joseph");
  assert.equal(toMember.length, 1); assert.equal(toOther.length, 0, "Joseph did not choose to share medications");
  assert.equal(toMember[0].body, "Baba Kamau asked Kyro to remind them about a dose, and it hasn't been confirmed. You may want to check in.");
  assert.doesNotMatch(JSON.stringify(s.pushes.filter(push => push.userId !== "u1")), /metformin|500/i, "no medicine name or dose ever reaches anyone but the person");
  assert.ok(s.pushes.some(push => push.userId === "u1" && /so I let Amina Wanjiru know/.test(push.body)), "the person is told too");
  assert.equal((await s.service.sendDue({ at: new Date("2026-09-20T07:20:00Z") })).alerted, 0, "only once");
  s.set(new Date("2026-09-20T07:30:00Z"));
  assert.equal(await s.say("I took my metformin"), "Thank you. I've logged metformin as taken.");
  assert.ok(s.pushes.some(push => push.userId === "u-amina" && push.body === "Baba Kamau has taken the dose that was waiting."));
});

// Found live: sendDue()'s follow-up loop read a dose row once (listPendingDoses()), then -- several real
// awaits later (sharing(), nameOf(), push sends) -- wrote back a spread of that SAME STALE snapshot. If the
// person confirmed the dose in that window (via turn()'s own separate fresh read-then-write), the sweep's
// final write silently clobbered their real "taken" record back to "alerted", after already having sent a
// now-false "a dose is waiting" alert to their trusted circle. Fixed by claiming the pending->alerted
// transition (a real CAS write) BEFORE telling anyone, mirroring checkin-store.js's identical fix.
test("a dose confirmed mid-sweep is never clobbered back to alerted, and no false alert is sent", async () => {
  const members = [{ otherId: "u-amina", otherName: "Amina Wanjiru", shares: { medications: true } }];
  const store = fakeStore(); const pushes = []; let clock = new Date("2026-09-20T05:00:00Z");
  let armed = false; let confirmedDuringSweep = false;
  const circle = { async activeMembers() {
    // Simulate the real race: the person's own turn() confirms the dose in the window between the sweep's
    // stale read and its final write -- a separate, fresh read-then-write, exactly like the real concurrent
    // path. Only armed for the sweep's own call (sharing() is also called earlier, while adding the medicine
    // and composing its confirmation message -- that earlier call must not trigger this).
    if (armed && !confirmedDuringSweep) {
      confirmedDuringSweep = true;
      await service.turn({ tenantId: "t1", userId: "u1", text: "I took my metformin", timeZone: "Africa/Nairobi", at: clock });
    }
    return members;
  } };
  const service = createMedicationService({ store, circle, notifications: { enqueue: async () => {} }, devices: { listPushable: async () => [{ id: 1 }] }, autonomyControl: { isPaused: async () => false },
    push: async row => { pushes.push(row); }, memoryUserName: async () => "Baba Kamau", now: () => clock });
  const say = text => service.turn({ tenantId: "t1", userId: "u1", text, timeZone: "Africa/Nairobi", at: clock });
  await say("Add medication metformin 500mg at 8am");
  await service.sendDue({ at: clock }); pushes.length = 0;
  clock = new Date("2026-09-20T07:10:00Z"); // past the two-hour grace window
  armed = true;
  const swept = await service.sendDue({ at: clock });
  assert.equal(swept.alerted, 0, "the claim must lose the race to the real confirmation, so no alert fires");
  assert.equal(pushes.filter(push => push.userId === "u-amina").length, 0, "the circle must never be falsely told a dose is waiting once it was actually taken");
  const dose = store.rows.find(row => row.content.kind === "dose");
  assert.equal(dose.content.status, "taken", "the real 'taken' record must survive, not be clobbered back to 'alerted'");
  assert.ok(dose.content.takenAt, "the real confirmation's takenAt must still be present");
});

// Found live (follow-up sweep of the checkin/dose CAS races): the reverse direction of the race the
// test above covers. Here sendDue()'s "pending -> alerted" claim wins FIRST (for real), and turn()'s
// own "taken" confirmation arrives after, but reading a snapshot of the dose from BEFORE that claim
// landed -- exactly what happens when turn()'s dosesForDay() read and sendDue()'s later claim race in
// the other order. The real data still ends up "taken" either way (the confirm write always wins), but
// the OLD code's "was it alerted" check read that same stale pre-claim snapshot, so the circle's earlier
// "a dose is waiting" alert was never cleared with a "Dose taken" push -- left unresolved even though
// the person confirmed on time relative to their own answer.
test("confirming a dose after its alert claim already won the race still clears the circle's alert", async () => {
  const members = [{ otherId: "u-amina", otherName: "Amina Wanjiru", shares: { medications: true } }];
  const store = fakeStore(); const pushes = []; let clock = new Date("2026-09-20T05:00:00Z");
  const circle = { async activeMembers() { return members; } };
  const service = createMedicationService({ store, circle, notifications: { enqueue: async () => {} }, devices: { listPushable: async () => [{ id: 1 }] }, autonomyControl: { isPaused: async () => false },
    push: async row => { pushes.push(row); }, memoryUserName: async () => "Baba Kamau", now: () => clock });
  await service.turn({ tenantId: "t1", userId: "u1", text: "Add medication metformin 500mg at 8am", timeZone: "Africa/Nairobi", at: clock });
  await service.sendDue({ at: clock }); pushes.length = 0;
  clock = new Date("2026-09-20T07:10:00Z"); // past the two-hour grace window

  // Freeze dosesForDay() to always hand back a snapshot taken NOW, while the dose is still "pending" --
  // simulating turn() having read the dose a moment before sendDue's claim lands, even though its
  // actual write happens after.
  const realDosesForDay = store.dosesForDay.bind(store);
  const stale = await realDosesForDay({ tenantId: "t1", userId: "u1", day: "2026-09-20" });
  assert.equal(stale[0]?.status, "pending", "sanity check: the frozen snapshot must be the real pre-claim state");
  store.dosesForDay = async () => stale;

  await service.sendDue({ at: clock }); // claims "alerted" for real and tells the circle a dose is waiting
  pushes.length = 0;

  await service.turn({ tenantId: "t1", userId: "u1", text: "I took my metformin", timeZone: "Africa/Nairobi", at: clock });

  const dose = store.rows.find(row => row.content.kind === "dose");
  assert.equal(dose.content.status, "taken", "the real confirmation must still be recorded regardless of the stale read");
  assert.equal(pushes.filter(push => push.userId === "u-amina" && push.title === "Dose taken").length, 1,
    "the circle must be told the dose was taken, clearing the earlier 'a dose is waiting' alert -- not left unresolved");
});

test("with nobody chosen, a missed dose is recorded quietly and nobody is told", async () => {
  const s = setup(); await s.say("Add medication metformin at 8am"); await s.service.sendDue({ at: s.clock }); s.pushes.length = 0;
  const late = await s.service.sendDue({ at: new Date("2026-09-20T07:30:00Z") });
  assert.deepEqual([late.alerted, late.missed], [0, 1]); assert.equal(s.pushes.length, 0);
  assert.equal(s.store.rows.find(row => row.content.kind === "dose").content.status, "missed");
});

test("the repository keeps medicines as private health information under their own purpose and never hard-deletes", async () => {
  const calls = [];
  const db = { async query(sql, params) { calls.push({ sql, params }); return { rows: [{ memory_id: "m1", tenant_id: "t1", principal_id: "u1", content: { kind: "medication", name: "metformin", active: true, times: ["08:00"] } }] }; } };
  const repo = new MedicationRepository(db);
  await repo.addMedication({ tenantId: "t1", userId: "u1", content: { kind: "medication", name: "metformin", dose: "500 mg", times: ["08:00"], timeZone: "Africa/Nairobi", active: true } });
  assert.match(calls[0].sql, /'domain','medications'/); assert.match(calls[0].sql, /'health'\)/);
  assert.equal((await repo.listMedications({ tenantId: "t1", userId: "u1" }))[0].content.name, "metformin");
  assert.equal((await repo.listAllActiveMedications())[0].userId, "u1");
  await repo.createDose({ tenantId: "t1", userId: "u1", content: { medId: "m1", day: "2026-09-20", time: "08:00", status: "pending" } });
  assert.equal(calls.at(-1).params[3].kind, "dose");
  await repo.getDose({ tenantId: "t1", userId: "u1", medId: "m1", day: "2026-09-20", time: "08:00" });
  assert.match(calls.at(-1).sql, /content->>'medId'=\$3 and content->>'day'=\$4 and content->>'time'=\$5/);
  await repo.listPendingDoses(); assert.match(calls.at(-1).sql, /content->>'status'='pending'/);
  await repo.removeMedication({ tenantId: "t1", userId: "u1", memoryId: "m1" }); assert.match(calls.at(-1).sql, /set deleted_at=now\(\)/);
  assert.equal(calls.filter(call => /delete from/i.test(call.sql)).length, 0);
});

function cappedMedicationDb() {
  const rows = []; const locks = new Map(); let n = 0;
  const db = {
    rows,
    async transaction(fn) {
      const releases = [];
      const trx = Object.create(db);
      trx.query = async (sql, params) => {
        if (/pg_advisory_xact_lock/.test(sql)) {
          const key = params[0];
          const ahead = locks.get(key) || Promise.resolve();
          let myRelease; const held = new Promise(resolve => { myRelease = resolve; });
          locks.set(key, ahead.then(() => held));
          await ahead;
          releases.push(myRelease);
          return { rows: [] };
        }
        return db.query(sql, params);
      };
      try { return await fn(trx); } finally { for (const release of releases) release(); }
    },
    async query(sql, params) {
      if (/select count\(\*\)::int as n from nexus_memory_items/.test(sql)) {
        const [tenantId, userId] = params;
        return { rows: [{ n: rows.filter(row => row.tenantId === tenantId && row.userId === userId).length }] };
      }
      if (/insert into nexus_memory_items/.test(sql)) { rows.push({ memoryId: `m${++n}`, tenantId: params[1], userId: params[2], content: params[3] }); return { rows: [] }; }
      throw new Error(`unexpected SQL: ${sql.slice(0, 80)}`);
    }
  };
  return db;
}
// Found live: the per-person MAX_MEDICATIONS cap was enforced by the caller with a plain check-then-act
// read (listMedications, then addMedication if under the cap), with no lock -- two concurrent "add
// medication" requests at 11/12 could both pass the check and both insert. addMedicationUnlessCapped()
// re-checks and inserts under one transaction-scoped advisory lock, the same pattern already proven for
// this file's own claimDoseSlot().
test("two concurrent add-medication requests at the cap boundary cannot together exceed the medication limit", async () => {
  const db = cappedMedicationDb();
  const repo = new MedicationRepository(db);
  for (let i = 0; i < 11; i += 1) {
    await repo.addMedicationUnlessCapped({ tenantId: "t1", userId: "u1", maxMedications: 12, content: { kind: "medication", name: `drug${i}`, times: ["08:00"] } });
  }
  const [a, b] = await Promise.all([
    repo.addMedicationUnlessCapped({ tenantId: "t1", userId: "u1", maxMedications: 12, content: { kind: "medication", name: "race-a", times: ["08:00"] } }),
    repo.addMedicationUnlessCapped({ tenantId: "t1", userId: "u1", maxMedications: 12, content: { kind: "medication", name: "race-b", times: ["08:00"] } })
  ]);
  const succeeded = [a, b].filter(result => !result.capped).length;
  assert.equal(succeeded, 1, "only one of the two concurrent add-medication requests may land once the cap is one away");
});

test("through the companion, sharing medication reminders is a choice the person makes, and the sweep covers medicines too", async () => {
  const users = [{ id: "u-baba", name: "Baba Kamau" }, { id: "u-amina", name: "Amina Wanjiru" }];
  const rows = []; let seq = 0;
  const db = { async transaction(fn) { return fn(db); },
    async query(sql, params) {
      if (/pg_advisory_xact_lock/.test(sql)) return { rows: [] };
      if (/from users where tenant_id=\$1 and lower\(email\)/.test(sql)) return { rows: [{ id: "u-amina", display_name: "Amina Wanjiru" }] };
      if (/from users where tenant_id=\$1 and id=\$2/.test(sql)) return { rows: [{ display_name: users.find(user => user.id === params[1]).name }] };
      if (/select 1 from nexus_memory_items/.test(sql)) {
        const [, personId, memberId] = params;
        const match = rows.some(row => row.principal_id === personId && row.content.kind === "circle" && row.content.role === "person" && row.content.otherId === memberId && row.content.status !== "ended");
        return { rows: match ? [{ "?column?": 1 }] : [] };
      }
      if (/select count\(\*\)::int as n from nexus_memory_items/.test(sql)) {
        const [, principalId] = params;
        const role = /'role'='person'/.test(sql) ? "person" : "member";
        const n = rows.filter(row => row.principal_id === principalId && row.content.kind === "circle" && row.content.role === role && row.content.status !== "ended").length;
        return { rows: [{ n }] };
      }
      if (/select memory_id,principal_id,content from nexus_memory_items/.test(sql)) return { rows: rows.filter(row => (params[1] === null || row.principal_id === params[1]) && (params[2] === null || row.content.linkId === params[2])).map(row => ({ memory_id: row.memory_id, principal_id: row.principal_id, content: row.content })) };
      if (/insert into nexus_memory_items/.test(sql)) { rows.push({ memory_id: `r${++seq}`, principal_id: params[2], content: params[3] }); return { rows: [] }; }
      if (/update nexus_memory_items set content=\$3/.test(sql)) { rows.find(row => row.memory_id === params[1]).content = params[2]; return { rows: [] }; }
      throw new Error(`unexpected SQL ${sql.slice(0, 60)}`);
    } };
  const circle = new CircleRepository(db); const pushes = []; const store = fakeStore();
  let clock = new Date("2026-09-20T05:00:00Z");
  const companion = createCompanion({ circle, checkinSettings: { listActive: async () => [], get: async () => null }, checkinState: { listPending: async () => [] }, medicationStore: store,
    notifications: { enqueue: async row => { pushes.push(row); } }, devices: { listPushable: async () => [{ id: 1 }] }, now: () => clock });
  const say = (text, userId = "u-baba") => companion.turn({ command: { text, tenantId: "t1", actorId: userId }, context: { timeZone: "Africa/Nairobi" } });
  await say("Add amina@example.com to my circle as my daughter"); await say("Accept the invitation from Baba", "u-amina");
  assert.match(await say("Share my medication reminders with Amina"), /^Done\. If a dose you asked me to remind you about goes unconfirmed for two hours, I may tell Amina Wanjiru that a dose is waiting\. They will not be told which medicine, and never the doses\./);
  assert.match(await say("Who is in my circle?"), /Amina Wanjiru \(daughter\) — may be told if a dose goes unconfirmed/);
  await say("Add medication metformin 500mg at 8am");
  assert.deepEqual((await companion.sendDue({ at: clock })).medications.prompted, 1);
  clock = new Date("2026-09-20T07:15:00Z");
  const swept = await companion.sendDue({ at: clock });
  assert.equal(swept.medications.alerted, 1);
  assert.ok(pushes.some(push => push.userId === "u-amina" && push.content.title === "A dose is waiting" && push.content.kind === "medication"));
  assert.match(await say("Stop sharing my medication reminders with Amina"), /^Done\. Amina Wanjiru will not be told about your doses\./);
  assert.equal(await say("I had lunch"), null, "ordinary talk about food is not a medicine");
});
