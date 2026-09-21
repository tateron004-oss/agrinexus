"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { healthWorkTurn } = require("../../nexus/healthwork/index.js");
const { HealthRecordRepository } = require("../../nexus/healthwork/store.js");
const { FarmRecordRepository } = require("../../nexus/farmwork/store.js");
const { healthWorkLine } = require("../../nexus/healthwork/brief.js");
const { readVitals, conditionOf } = require("../../nexus/healthwork/visits.js");
const { parseAge, ageWords } = require("../../nexus/healthwork/common.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { farmWorkTurn } = require("../../nexus/farmwork/index.js");
const notes = require("../../public/kyro-offline-notes.js");
const { fakeFarmStore, fakeMemory } = require("./farmwork-fake.js");

const NOW = new Date("2026-09-20T05:00:00Z"); // Sunday 20 September 2026 in Nairobi

// One health worker talking to Kyro. `say` returns the reply (a string, a { report } object, or null when the words were not for the toolkit).
function worker({ userId = "u1", store = fakeFarmStore(), memory = fakeMemory(), names = {} } = {}) {
  const say = async text => healthWorkTurn({ text, store, tenantId: "t1", userId, now: NOW, timeZone: "Africa/Nairobi", memory, nameOf: async args => names[args.userId] || "Amina Wanjiru" });
  return { say, store, memory, userId };
}
const run = async (who, lines) => { const out = []; for (const line of lines) out.push(await who.say(line)); return out; };
const registerMary = who => run(who, ["Register a patient called Mary Akinyi, 34, female, Kibera", "skip"]);

// ---------- the store ----------
function recordingDb() {
  const calls = [];
  return { calls, async query(sql, params) { calls.push({ sql, params }); if (/coalesce\(max/.test(sql)) return { rows: [{ n: 0 }] }; if (/returning memory_id/.test(sql)) return { rows: [{ memory_id: "m1" }] }; return { rows: [] }; } };
}

test("health records live apart from farm records, at the health sensitivity level, with no searchable text and never public", async () => {
  const db = recordingDb(); const store = new HealthRecordRepository(db);
  const patient = await store.add({ tenantId: "t1", userId: "u1", collection: "patient", data: { name: "Mary Akinyi" } });
  await store.setSession({ tenantId: "t1", userId: "u1", session: { collection: "patient", answers: {}, asking: "name", expiresAt: new Date(Date.now() + 60000).toISOString() } });
  await store.list({ tenantId: "t1", userId: "u1", collection: "patient" }); await store.listAll({ tenantId: "t1", userId: "u1" });
  await store.update({ tenantId: "t1", userId: "u1", record: patient }); await store.remove({ tenantId: "t1", userId: "u1", memoryId: "m1" });
  const inserts = db.calls.filter(call => /insert into nexus_memory_items/.test(call.sql));
  assert.equal(inserts.length, 2);
  for (const call of inserts) { assert.match(call.sql, /'health'\)/); assert.match(call.sql, /'health_(?:records|session)'/); assert.doesNotMatch(JSON.stringify(call.params.slice(4, 5)), /Mary/, "no patient name in the searchable text"); }
  for (const call of db.calls) { assert.doesNotMatch(call.sql, /farm_records|farm_session/); assert.doesNotMatch(call.sql, /\$\d::text is null/); }
  for (const call of db.calls.filter(item => !/insert|coalesce\(max/.test(item.sql))) assert.match(call.sql, /principal_id=\$2/, call.sql);
  const before = db.calls.length; assert.deepEqual(await store.listPublic({ tenantId: "t1", collection: "listing" }), []); assert.equal(db.calls.length, before);
  const update = db.calls.find(call => /update nexus_memory_items set content/.test(call.sql)); assert.equal(update.params[4], "patient", "the update writes no name either");
  assert.throws(() => new FarmRecordRepository(db, { purpose: "x; drop table y" }), /Invalid/); assert.throws(() => new FarmRecordRepository(db, { sensitivity: "public" }), /Invalid/);
  const farm = new FarmRecordRepository(db); await farm.list({ tenantId: "t1", userId: "u1", collection: "field" });
  assert.match(db.calls.at(-1).sql, /farm_records/, "the farm store is unchanged");
});

// ---------- ages ----------
test("ages are worked out by the calendar and shown plainly", () => {
  const today = "2026-09-20";
  for (const [text, words] of [["34", "about 34 years"], ["6 months", "about 6 months"], ["3 weeks", "about 3 weeks"], ["2 days", "about 2 days"], ["18 months", "about 18 months"], ["10 weeks", "about 10 weeks"]]) { const age = parseAge(text, today); assert.equal(ageWords(age.born, age.approx, today), words, text); }
  assert.equal(ageWords(parseAge("12 March 2024", today).born, false, today), "2 years");
  for (const bad of ["200", "abc", "", "-3", "tomorrow"]) assert.equal(parseAge(bad, today), null, bad);
});

// ---------- registering ----------
test("a patient is registered with a few plain questions, or in one sentence", async () => {
  const who = worker();
  const first = await run(who, ["Register patient Baby Otieno", "3 weeks", "male", "skip", "Mother is Mary"]);
  assert.match(first[0], /How old/); assert.match(first[4], /Registered #1 Baby Otieno, about 3 weeks, male, contact: Mother is Mary/);
  const second = await run(who, ["Register a patient called Mary Akinyi, 34, female, Kibera", "skip"]);
  assert.match(second[0], /phone number, or the parent or guardian/); assert.match(second[1], /Registered #2 Mary Akinyi, about 34 years, female, Kibera/);
  assert.match(await who.say("Show my patients"), /You have 2 patients: #2 Mary Akinyi.*#1 Baby Otieno/);
  const twin = await run(who, ["Add patient Mary Akinyi", "skip", "skip", "skip", "skip"]);
  assert.match(twin.at(-1), /already have 1 patient with that name \(#2\).*"patient 3"/);
  assert.match(await who.say("Visit Mary Akinyi: cough"), /Which one: #3 Mary Akinyi, #2 Mary Akinyi/);
  assert.match(await who.say("Visit patient 2: cough"), /Recorded visit 1 for Mary Akinyi \(#2\)/);
});

test("a question, a new request or a second miss drops a guided question, and a command is never saved as an answer", async () => {
  const who = worker();
  await who.say("Register patient Mary"); assert.equal(await who.say("How do I treat malaria?"), null); assert.equal(who.store.sessions.size, 0);
  await run(who, ["Register patient Mary Akinyi", "skip", "skip", "skip"]);
  await who.say("Register patient Peter"); assert.match(await who.say("banana"), /Say the age/); assert.equal(await who.say("apple"), null);
  await who.say("Register patient Peter"); await run(who, ["skip", "skip", "skip"]);
  await who.say("Register patient Sam"); await who.say("skip"); await who.say("skip");
  assert.equal(await who.say("Add 10 bags of fertilizer to stock"), null, "a command is not taken as the village");
  assert.equal(who.store.sessions.size, 0); const listed = await who.say("Show my patients"); assert.doesNotMatch(listed, /fertilizer|Sam/, "nothing half-finished was saved");
  await who.say("Register patient Zed"); assert.match(await who.say("cancel"), /stopped/);
});

// ---------- visits and readings ----------
test("readings are recorded exactly as given, never judged, and a slip is not stored as a number", () => {
  const { vitals, unread } = readVitals("fever 2 days, temp 38.5, BP 120/80, pulse 88, resp rate 22, spo2 96%, weight 62 kg, muac 11.5 cm");
  assert.deepEqual(vitals, { temperature: { value: 38.5, unit: "C" }, bloodPressure: { systolic: 120, diastolic: 80 }, pulse: 88, respiratoryRate: 22, oxygen: 96, weightKg: 62, muacMm: 115 }); assert.deepEqual(unread, []);
  assert.deepEqual(readVitals("temp 385 and BP 80/120 and pulse 400"), { vitals: {}, unread: ["temperature", "bloodPressure", "pulse"] });
  assert.deepEqual(readVitals("temperature 101 F").vitals, { temperature: { value: 101, unit: "F" } });
  assert.equal(conditionOf("cough and fever, gave paracetamol"), "", "a condition is only what the worker states");
  assert.equal(conditionOf("diagnosis: malaria, gave tablets"), "malaria");
});

test("a visit is kept as said, says nothing about what a reading means, and closes the follow-up it was waiting for", async () => {
  const who = worker(); await registerMary(who);
  await who.say("Follow up Mary tomorrow: check fever");
  const reply = await who.say("Visit Mary: fever 2 days, temp 38.5, BP 120/80, gave paracetamol, diagnosis: malaria");
  assert.match(reply, /Recorded visit 1 for Mary Akinyi \(#1\): temp 38.5°C, BP 120\/80\. Condition \(as you said\): malaria\./);
  assert.doesNotMatch(reply, /\b(?:normal|high|low|fever is|should|recommend|treat|dose)\b/i, "no interpretation or advice");
  assert.match(await who.say("Visit Mary: temp 385"), /couldn't read the temperature you gave as a number/);
  assert.match(await who.say("Saw Mary yesterday: pulse 80"), /Recorded visit 3 for Mary Akinyi \(#1\) on yesterday|on Saturday 19 September/i);
  assert.match(await who.say("Show Mary's visits"), /temp 38\.5°C.*malaria/); assert.match(await who.say("Last visit for Mary"), /Mary Akinyi \(#1\)/);
  assert.equal(await who.say("Visit Nairobi: nice city"), null, "a name that is not a patient is not taken for a visit unless it is explicit");
  assert.equal(await who.say("Visit Nobody: cough"), null, "a bare Visit is left alone");
  assert.match(await who.say("Add a visit note for Nobody: cough"), /don't have a patient called Nobody/);
});

test("follow-ups keep the patient's number, not the name, on the calendar, and can be listed, finished and cancelled", async () => {
  const who = worker(); await registerMary(who);
  assert.match(await who.say("Follow up Mary in 3 days"), /Follow-up 1: Mary Akinyi \(#1\), Wednesday 23 September\..*no name/);
  assert.equal(who.memory.personal.length, 1); assert.equal(who.memory.personal[0].content.text, "Follow up patient 1"); assert.doesNotMatch(JSON.stringify(who.memory.personal), /Mary/);
  assert.match(await who.say("Follow up Mary"), /When should I have you see Mary Akinyi again/);
  await who.say("Follow up Mary on Friday");
  assert.match(await who.say("Who needs a follow-up"), /2 follow-ups waiting/); assert.match(await who.say("Follow-up 1 done"), /marked done/);
  assert.match(await who.say("Cancel follow-up 2"), /cancelled/); assert.match(await who.say("Show my follow-ups"), /No follow-ups are waiting/);
  assert.equal(await who.say("See you tomorrow"), null);
});

// ---------- immunisation ----------
test("immunisations are recorded with the worker's own next-dose date; nothing is scheduled by Kyro", async () => {
  const who = worker(); await run(who, ["Register patient Baby Otieno", "3 weeks", "male", "skip", "skip"]);
  const bcg = await who.say("Baby Otieno received BCG, next dose in 6 weeks");
  assert.match(bcg, /received BCG today\. Next dose Sunday 1 November; it's on your calendar without their name\./); assert.match(bcg, /follow your programme's schedule/);
  assert.equal(who.memory.personal.at(-1).content.text, "Vaccination due patient 1");
  assert.match(await who.say("Gave OPV 1 to Baby Otieno"), /received OPV 1 today/); assert.match(await who.say("Vaccinated Baby Otieno with measles"), /Measles/);
  assert.match(await who.say("Baby Otieno's vaccinations"), /Measles.*OPV 1.*BCG/);
  assert.match(await who.say("Who is due for vaccination"), /No vaccinations are due/);
  assert.match(await who.say("Baby Otieno received polio vaccine, next dose in 5 days"), /Next dose/);
  assert.match(await who.say("What vaccinations are due"), /1 vaccination due: Baby Otieno \(#1\) — Polio, Friday 25 September/);
  assert.equal(await who.say("Baby Otieno received a gift"), null); assert.equal(await who.say("Baby Otieno got the news"), null);
  assert.match(await who.say("Baby Otieno received BCG, next dose in banana"), /couldn't read/);
});

// ---------- pregnancy ----------
test("a pregnancy needs the worker's expected date, is listed, and is closed by a delivery", async () => {
  const who = worker(); await registerMary(who);
  assert.match(await who.say("Mary is pregnant"), /What is Mary's expected delivery date/);
  assert.match(await who.say("Mary is pregnant, due 12 March"), /expected Friday 12 March 2027/);
  assert.equal(who.memory.personal.at(-1).content.text, "Expected delivery patient 1");
  assert.match(await who.say("Who is pregnant"), /1 pregnancy: Mary Akinyi \(#1\) — expected Friday 12 March 2027/); assert.match(await who.say("Show pregnancies"), /Mary Akinyi/);
  assert.match(await who.say("Mary is pregnant, due 20 March"), /Updated Mary Akinyi \(#1\)/);
  assert.match(await who.say("Mary delivered a baby girl on 15 September"), /delivered on .*15 September.*baby girl.*register patient Baby of Mary/);
  assert.match(await who.say("Who is pregnant"), /No pregnancies recorded/);
  assert.match(await who.say("Mary delivered on 3 May 2030"), /can't be in the future/);
});

// ---------- clinic stock ----------
test("clinic stock goes in and out, warns, expires, and never touches the farm's stock words", async () => {
  const who = worker(); await registerMary(who);
  assert.match(await who.say("Add 100 tablets of paracetamol to clinic stock, expires 2027-03-31"), /Added 100 tablets of paracetamol\. Expiry noted: Wednesday 31 March 2027/);
  assert.match(await who.say("Gave 20 tablets of paracetamol to Mary"), /20 tablets of paracetamol given out to Mary Akinyi \(#1\)\. 80 tablets left/);
  assert.match(await who.say("How many paracetamol do I have"), /80 tablets of paracetamol, nearest expiry Wednesday 31 March 2027/);
  assert.match(await who.say("Dispensed 500 tablets of paracetamol"), /only 80 tablets.*set paracetamol stock to 500/);
  assert.match(await who.say("Received 50 tablets of paracetamol at the clinic"), /You now have 130 tablets/);
  assert.match(await who.say("Dispensed 5 vials of insulin"), /don't have insulin in your clinic stock/);
  assert.match(await who.say("Warn me when paracetamol drops below 200"), /at or below 200 tablets/); assert.match(await who.say("What medicines are low"), /Low: paracetamol \(130 tablets\)/);
  assert.match(await who.say("Add 10 vials of insulin to the medicine store, expires 2026-10-15"), /Added 10 vials of insulin/); assert.match(await who.say("What medicines expire soon"), /insulin — Thursday 15 October/);
  assert.match(await who.say("Set paracetamol stock to 0"), /Set paracetamol to 0 tablets/); assert.match(await who.say("What medicines are low"), /Out of stock: paracetamol/);
  assert.match(await who.say("Show my clinic stock"), /2 items in clinic stock/);
  assert.match(await who.say("Add 5 boxes of paracetamol to clinic stock"), /keep paracetamol in tablets/);
  assert.match(await who.say("Remove insulin from clinic stock"), /Say yes/); assert.match(await who.say("yes"), /removed insulin/);
  for (const text of ["Add 10 bags of fertilizer to stock", "Use 2 bags of fertilizer", "How much fertilizer do I have", "What is running low", "Show my stock", "Sold 5 bags of maize"]) assert.equal(await who.say(text), null, text);
});

// ---------- referral letters ----------
test("a referral letter carries only what was recorded, is kept in the record, and needs a place to send to", async () => {
  const who = worker(); await run(who, ["Set up my clinic details", "nurse", "Kibera Clinic", "Kibera"]); await registerMary(who);
  await who.say("Mary is allergic to penicillin"); await who.say("Visit Mary: fever 2 days, temp 38.5, diagnosis: malaria");
  assert.match(await who.say("Write a referral letter for Mary"), /Where are you referring Mary Akinyi/);
  const made = await who.say("Write a referral letter for Mary to Kisumu Hospital: severe malaria not responding as a pdf");
  assert.equal(made.report.format, "pdf"); const text = made.report.content;
  assert.match(text, /From: Amina Wanjiru, nurse at Kibera Clinic \(Kibera\)/); assert.match(text, /To: Kisumu Hospital/); assert.match(text, /Allergies \(as recorded by the referring health worker\): penicillin/);
  assert.match(text, /Reason for referral: severe malaria not responding/); assert.match(text, /temp 38\.5°C.*condition \(as stated by the health worker\): malaria/); assert.match(text, /contains only what they recorded/);
  await who.say("Write a referral letter for Mary to Kisumu Hospital: severe malaria not responding");
  assert.match(await who.say("Show referrals"), /1 referral this month: Mary Akinyi \(#1\) to Kisumu Hospital/);
  assert.match(await who.say("Show Mary's record"), /Referred: Kisumu Hospital/);
});

// ---------- reports ----------
test("the monthly report is counts only, with no patient names, and covers a named month", async () => {
  const who = worker(); await run(who, ["Register patient Baby Otieno", "3 weeks", "male", "skip", "skip"]); await registerMary(who);
  await who.say("Visit Mary: temp 38.5, diagnosis: malaria"); await who.say("Visit Baby Otieno: weight 4 kg, diagnosis: malaria"); await who.say("Baby Otieno received BCG");
  await who.say("Add 100 tablets of paracetamol to clinic stock"); await who.say("Dispensed 10 tablets of paracetamol"); await who.say("Write a referral letter for Mary to Kisumu Hospital: reason");
  const report = await who.say("Print my monthly report as a PDF");
  assert.equal(report.report.format, "pdf"); const text = report.report.content;
  assert.doesNotMatch(text, /Mary|Otieno|Akinyi/, "no names in the counts report");
  assert.match(text, /New patients registered:\s+2/); assert.match(text, /Patients seen:\s+2/); assert.match(text, /children under 5:\s+1/); assert.match(text, /malaria\s+2/); assert.match(text, /BCG\s+1/); assert.match(text, /Kisumu Hospital\s+1/); assert.match(text, /paracetamol\s+10 tablets/);
  assert.match(await who.say("Print my clinic report for August"), /nothing to print/);
  assert.match((await who.say("Print Mary's record")).report.content, /Mary Akinyi/); assert.match((await who.say("Print my patient register")).report.content, /Total: 2/);
  assert.equal(await who.say("Print my farm summary"), null); assert.equal(await who.say("Print my resume"), null);
});

// ---------- removing a patient ----------
test("removing a patient removes everything kept about them, and only after a yes", async () => {
  const who = worker(); await registerMary(who); await who.say("Visit Mary: cough"); await who.say("Follow up Mary in 3 days"); await who.say("Mary received BCG");
  assert.match(await who.say("Remove patient Mary"), /everything recorded about them.*cannot be undone.*Say yes/); assert.match(await who.say("no"), /left it as it is/);
  assert.match(await who.say("Show my patients"), /Mary Akinyi/);
  await who.say("Remove patient Mary"); assert.match(await who.say("yes"), /removed Mary Akinyi and 3 records/);
  assert.match(await who.say("Show my patients"), /no patients registered/); assert.equal(who.store.rows.filter(row => !row.deleted && row.collection !== undefined).length, 0);
});

// ---------- privacy between people, and no hijacking ----------
test("one worker never sees another's patients", async () => {
  const store = fakeFarmStore(); const a = worker({ userId: "u1", store }); const b = worker({ userId: "u2", store });
  await registerMary(a); await a.say("Visit Mary: cough");
  assert.equal(await b.say("Show Mary's record"), null); assert.equal(await b.say("Visit Mary: cough"), null); assert.match(await b.say("Show my patients"), /no patients/);
});

test("everyday talk passes straight through for someone with no patients, and for someone with patients", async () => {
  const empty = worker(); const busy = worker(); await registerMary(busy);
  const talk = ["I have a fever", "My baby received a gift", "Mary is pregnant", "Visit Nairobi: nice city", "Gave 20 tablets of paracetamol to Mary", "What time is it", "Hello", "Tell me a joke", "Print my monthly report", "Remind me to call mum tomorrow",
    "Follow up with the plumber tomorrow", "How do I treat malaria?", "I need help now", "Show me my calendar", "Add a note to my calendar: dentist", "Sold my old car for 500000"];
  for (const text of talk) assert.equal(await empty.say(text), null, `empty: ${text}`);
  for (const text of talk.filter(item => !/Mary is pregnant|paracetamol to Mary|monthly report/.test(item))) assert.equal(await busy.say(text), null, `busy: ${text}`);
});

test("every production acceptance probe phrase passes straight through the health toolkit", async () => {
  const who = worker(); await registerMary(who); await who.say("Add 10 tablets of paracetamol to clinic stock");
  const src = fs.readFileSync(path.join(__dirname, "..", "..", "scripts", "nexus-run-browser-capability-probes.js"), "utf8");
  const block = /const SCENARIOS = Object\.freeze\(\{([\s\S]*?)\n\}\);/.exec(src)?.[1] || "";
  const phrases = [...block.matchAll(/:\s*"((?:[^"\\]|\\.)*)"/g)].map(match => match[1]);
  assert.ok(phrases.length >= 15);
  for (const text of [...phrases, "Record my blood pressure as 140 over 90", "Find pharmacy support for metformin", "Show my doctor questions"]) assert.equal(await who.say(text), null, text);
});

test("the health toolkit and the farm toolkit keep their own conversations and do not take each other's words", async () => {
  const store = fakeFarmStore(); const farmStore = fakeFarmStore(); const memory = fakeMemory();
  const health = worker({ store, memory }); await registerMary(health);
  const farm = text => farmWorkTurn({ text, store: farmStore, tenantId: "t1", userId: "u1", now: NOW, timeZone: "Africa/Nairobi", memory, nameOf: async () => "A" });
  assert.match(await farm("Add 10 bags of fertilizer to stock"), /You now have 10 bags/); assert.equal(await health.say("Add 10 bags of fertilizer to stock"), null);
  assert.equal(await farm("Visit Mary: fever"), null); assert.equal(await farm("Show my patients"), null);
  assert.match(await health.say("Add 100 tablets of paracetamol to clinic stock"), /Added 100 tablets/); assert.equal(await farm("Add 100 tablets of paracetamol to clinic stock"), null);
});

test("a failing store never breaks a conversation", async () => {
  const broken = () => new Proxy(fakeFarmStore(), { get(target, prop) { if (["list", "listAll", "add"].includes(prop)) return async () => { throw new Error("db down"); }; return target[prop]; } });
  await assert.doesNotReject(worker({ store: broken() }).say("Register patient Mary Akinyi"));
  assert.equal(await worker({ store: broken() }).say("Visit Mary: cough"), null); assert.equal(await worker({ store: broken() }).say("Add a visit note for Mary: cough"), null);
});

// ---------- the brief ----------
test("the brief mentions only counts, never a patient's name, and nothing when nothing is due", () => {
  assert.equal(healthWorkLine([], "2026-09-20"), ""); assert.equal(healthWorkLine(undefined, "2026-09-20"), "");
  const line = healthWorkLine([
    { collection: "followup", data: { pid: "p1", due: "2026-09-19", status: "open", note: "Mary Akinyi malaria" } }, { collection: "followup", data: { pid: "p1", due: "2026-09-20", status: "open" } },
    { collection: "dose", data: { pid: "p2", vaccine: "OPV 1", day: "2026-09-01", nextDue: "2026-09-24" } }, { collection: "pregnancy", data: { pid: "p3", due: "2026-09-30", status: "open" } },
    { collection: "supply", data: { name: "insulin", qty: 0, unit: "vial", low: 5, expiry: "2026-10-30" } }, { collection: "supply", data: { name: "paracetamol", qty: 3, unit: "tablet", low: 10, expiry: null } }], "2026-09-20");
  assert.equal(line, "Health work: 2 follow-ups due; 1 vaccination due this week; 1 delivery expected within two weeks; 1 medicine out of stock; 1 low; 1 expiring within two months.");
  assert.doesNotMatch(line, /Mary|malaria|insulin|paracetamol/);
  assert.equal(healthWorkLine([{ collection: "followup", data: { pid: "p1", due: "2026-10-30", status: "open" } }], "2026-09-20"), "");
});

// ---------- the planner ----------
function planner({ healthWork, farmWork, companion = null, documents = true }) {
  const model = { plan: async () => { throw new Error("the AI model must not be asked for a health request"); } };
  const tools = { list: async () => (documents ? [{ tool_id: "documents.create", domain: "documents", description: "", risk_tier: "low", availability: "available" }] : []) };
  const applications = { list: () => (documents ? [{ applicationId: "documents", capabilities: [], riskTiers: ["low"] }] : []) };
  return new OpenEndedPlanner({ model, tools, applications, memory: fakeMemory(), healthWork, farmWork, companion });
}
const command = text => ({ text, tenantId: "t1", actorId: "u1" });

test("the planner answers health words itself, turns a letter into a real document step, and lets an emergency through first", async () => {
  const store = fakeFarmStore(); const healthWork = { store, notifications: null, nameOf: async () => "Amina" };
  const who = worker({ store }); await registerMary(who); await who.say("Visit Mary: temp 38.5");
  const answer = await planner({ healthWork }).plan({ command: command("Show Mary's record"), context: { timeZone: "Africa/Nairobi" } });
  assert.equal(answer.application, "conversation"); assert.deepEqual(answer.steps, []); assert.match(answer.response, /Mary Akinyi/);
  const letter = await planner({ healthWork }).plan({ command: command("Write a referral letter for Mary to Kisumu Hospital: fever as a pdf"), context: { timeZone: "Africa/Nairobi" } });
  assert.equal(letter.application, "documents"); assert.equal(letter.steps[0].toolId, "documents.create"); assert.equal(letter.steps[0].clientStepId, "health-report");
  assert.equal(letter.steps[0].input.format, "pdf"); assert.match(letter.steps[0].input.content, /REFERRAL LETTER/);
  const noDocs = await planner({ healthWork, documents: false }).plan({ command: command("Print my patient register"), context: { timeZone: "Africa/Nairobi" } });
  assert.equal(noDocs.application, "conversation"); assert.match(noDocs.response, /PATIENT REGISTER/);
  let consulted = false; const spy = new Proxy(fakeFarmStore(), { get(target, prop) { if (prop === "getSession") consulted = true; return target[prop]; } });
  const emergency = await planner({ healthWork: { store: spy }, companion: { turn: async ({ command: given }) => (/help now/i.test(given.text) ? "EMERGENCY FIRST" : null) } }).plan({ command: command("I need help now"), context: {} });
  assert.equal(emergency.response, "EMERGENCY FIRST"); assert.equal(consulted, false);
});

test("the runtime builds the health repository, gives it to the planner and the brief", () => {
  const runtime = fs.readFileSync(path.join(__dirname, "..", "..", "nexus", "runtime", "create-runtime.js"), "utf8");
  assert.match(runtime, /new HealthRecordRepository\(db\)/); assert.match(runtime, /healthWork: \{ store: healthRecords/); assert.match(runtime, /farmRecords, healthRecords, devices/);
  assert.match(fs.readFileSync(path.join(__dirname, "..", "..", "nexus", "brief", "service.js"), "utf8"), /healthWorkLine\(healthRows, today\)/);
});

// ---------- offline notes ----------
test("a visit note kept offline keeps the day it really happened", () => {
  assert.equal(notes.isRecordable("Visit Mary Akinyi: fever, temp 38.5"), true); assert.equal(notes.isRecordable("Dispensed 20 tablets of paracetamol to Mary"), true);
  assert.equal(notes.isRecordable("Visit Mary: asked her to call back"), false); assert.equal(notes.isRecordable("Follow up Mary in 3 days"), false); assert.equal(notes.isRecordable("Write a referral letter for Mary to Kisumu"), false);
  const made = new Date(2026, 8, 18, 12).getTime(); const item = { text: "Visit Mary Akinyi: temp 38.5", at: made };
  assert.equal(notes.datedText(item, new Date(2026, 8, 18, 16).getTime()), "Visit Mary Akinyi: temp 38.5");
  assert.equal(notes.datedText(item, new Date(2026, 8, 19, 9).getTime()), "Visit Mary Akinyi yesterday: temp 38.5");
  assert.equal(notes.datedText(item, new Date(2026, 8, 21, 9).getTime()), "Visit Mary Akinyi: temp 38.5 [recorded offline on 2026-09-18]");
  assert.equal(notes.datedText({ text: "Sold 5 kg of maize for 200", at: made }, new Date(2026, 8, 21, 9).getTime()), "Sold 5 kg of maize for 200");
});
