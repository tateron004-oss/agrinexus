"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const sw = require("../../nexus/reminders/swahili-reminder.js");
const { OpenEndedPlanner, completeHealthRecordPlan } = require("../../nexus/brain/planner.js");
const { createHealthRecordExecutor, healthSafetyResponse, invalidReadingReason, observationFrom } = require("../../nexus/health/executor.js");

// Left open after the earlier Swahili and safety work: repeating Swahili reminders ("kila siku"), stopping and listing them, Swahili calendar events, a body temperature typed as a sentence in Celsius,
// and a bare "yes" to Kyro's own offer to alert the trusted circle (it did nothing: only the exact words "alert my circle" alerted).

function memory() {
  const rows = []; let n = 0;
  return new Proxy({}, { get: (_, name) => {
    if (name === "addPersonalItem") return async ({ userId, content }) => { rows.unshift({ memory_id: `m${++n}`, userId, content }); return { memoryId: `m${n}` }; };
    if (name === "listPersonalItems") return async ({ userId, kind = null }) => rows.filter(row => row.userId === userId && (!kind || row.content.kind === kind)).map(row => ({ memory_id: row.memory_id, content: row.content }));
    if (name === "addPersonalItemUnlessCapped") return async ({ userId, content }) => { rows.unshift({ memory_id: `m${++n}`, userId, content }); return { memoryId: `m${n}` }; };
    return async () => [];
  } });
}
function setup({ companion = null } = {}) {
  const catalog = { tools: ["reminders.schedule", "health.record"].map(tool_id => ({ tool_id, availability: "available" })), applications: ["reminders", "health"].map(applicationId => ({ applicationId, capabilities: [], riskTiers: [] })) };
  const rows = [];
  const repeatReminders = { async add(row) { rows.push(row); return { scheduleId: `s${rows.length}` }; }, async list() { return rows.map((row, index) => ({ ...row, scheduleId: `s${index + 1}` })); }, async cancel({ scheduleId }) { const i = rows.findIndex((_, index) => `s${index + 1}` === scheduleId); if (i >= 0) rows.splice(i, 1); return true; }, async cancelAll() { const n = rows.length; rows.length = 0; return n; } };
  const planner = new OpenEndedPlanner({ memory: memory(), repeatReminders, companion, tools: { list: async () => catalog.tools }, applications: { list: () => catalog.applications },
    model: { plan: async () => { throw new Error("the model must not be asked"); }, respond: async () => null } });
  const ask = (text, history = []) => planner.plan({ command: { text, channel: "voice", locale: "sw", tenantId: "t1", actorId: "u1", conversationId: "c1" }, context: { can: () => true, roles: [], timeZone: "Africa/Nairobi" }, conversationHistory: history });
  return { ask, rows };
}

test("repeating, stopping and listing reminders are read in Kiswahili", () => {
  const read = text => sw.parseSwahiliRepeating(text);
  assert.equal(read("nikumbushe kila siku saa tatu asubuhi kunywa dawa").english, "Remind me every day at 9:00 am to kunywa dawa");
  assert.equal(read("nikumbushe kila jumatatu saa mbili asubuhi kuuza maziwa").english, "Remind me every Monday at 8:00 am to kuuza maziwa");
  assert.equal(read("nikumbushe kila jumatatu na ijumaa saa kumi jioni kulipa").english, "Remind me every Monday and Friday at 4:00 pm to kulipa");
  assert.equal(read("nikumbushe kila siku ya kazi saa moja asubuhi kuamka").english, "Remind me every weekday at 7:00 am to kuamka");
  assert.equal(read("nikumbushe kila asubuhi kulisha kuku").english, "Remind me every morning to kulisha kuku");
  assert.deepEqual(read("nikumbushe kila wiki saa tatu asubuhi kupima"), { needDay: true });
  assert.deepEqual(read("nikumbushe kila mwezi kulipa kodi"), { unsupported: true });
  assert.deepEqual(read("nikumbushe kila siku saa tatu kunywa"), { needTime: true });
  assert.equal(read("nikumbushe kesho saa tatu asubuhi kunywa dawa"), null, "a one-time reminder is not a repeating one");
  assert.equal(sw.parseSwahiliReminder("nikumbushe kila siku saa tatu asubuhi kunywa dawa"), null);
  assert.equal(sw.parseSwahiliStop("acha kikumbusho cha kunywa dawa").english, "stop my repeating reminder to kunywa dawa");
  assert.equal(sw.parseSwahiliList("onyesha vikumbusho vyangu").english, "show my repeating reminders");
});

test("a Kiswahili repeating reminder is saved and answered in Kiswahili, listed, and stopped", async () => {
  const s = setup();
  const set = await s.ask("nikumbushe kila siku saa tatu asubuhi kunywa dawa");
  assert.equal(set.response, "Sawa. Nitakukumbusha kunywa dawa kila siku saa tatu asubuhi. Ili kuacha, sema \"acha kikumbusho cha kunywa dawa\".");
  assert.equal(s.rows.length, 1);
  assert.equal(s.rows[0].task, "kunywa dawa");
  assert.equal(s.rows[0].timeOfDay, "09:00");
  assert.match((await s.ask("onyesha vikumbusho vyangu")).response, /kunywa dawa, every day at 9:00 am/);
  assert.equal((await s.ask("acha kikumbusho cha kunywa dawa")).response, "Sawa. Nimeacha kikumbusho cha kunywa dawa.");
  assert.equal(s.rows.length, 0);
  assert.match((await s.ask("nikumbushe kila mwezi kulipa kodi")).response, /^Naweza kurudia kikumbusho kila siku/);
  assert.match((await s.ask("nikumbushe kila wiki saa tatu asubuhi kupima")).response, /^Siku gani\?/);
  assert.equal(s.rows.length, 0, "nothing was set for the unclear ones");
});

test("a calendar event asked for in Kiswahili is added and answered in Kiswahili, and an unclear one is asked about", async () => {
  const c = sw.parseSwahiliCalendar("Ongeza mkutano kwenye kalenda kesho saa nne asubuhi");
  assert.equal(c.english, "add mkutano to my calendar tomorrow at 10:00 am");
  assert.equal(sw.parseSwahiliCalendar("weka ziara ya daktari kwenye kalenda jumatatu").english, "add ziara ya daktari to my calendar on Monday");
  assert.deepEqual(sw.parseSwahiliCalendar("ongeza mkutano kwenye kalenda"), { needDay: true, title: "mkutano" });
  assert.deepEqual(sw.parseSwahiliCalendar("ongeza kwenye kalenda kesho"), { needTitle: true });
  const s = setup();
  assert.equal((await s.ask("Ongeza mkutano kwenye kalenda kesho saa nne asubuhi")).response, "Nimeongeza kwenye kalenda yako: mkutano kesho saa nne asubuhi. Nitaitaja kwenye muhtasari wako wa asubuhi siku hiyo.");
  assert.match((await s.ask("ongeza mkutano kwenye kalenda")).response, /^Siku gani\?/);
  assert.match((await s.ask("ongeza kwenye kalenda kesho")).response, /^Tukio linaitwaje\?/);
});

test("a body temperature typed as a sentence is saved with its unit, an impossible one is refused, and the guidance does not diagnose", async () => {
  const catalog = { tools: [{ toolId: "health.record" }], applications: [{ applicationId: "health" }] };
  const plan = text => completeHealthRecordPlan(text, catalog);
  assert.deepEqual(plan("my temperature is 37.5 C").steps[0].input, { intakeType: "temperature", readingType: "temperature", temperature: 37.5, temperatureUnit: "C" });
  assert.equal(plan("my temperature is 38").steps[0].input.temperatureUnit, "C");
  assert.equal(plan("my temperature is 101.2 F").steps[0].input.temperatureUnit, "F");
  assert.equal(plan("record my temperature as 99").steps[0].input.temperatureUnit, "F");
  assert.deepEqual(plan("my temperature is 50").steps, []);
  assert.match(plan("my temperature is 50").response, /I did not save this: 50 cannot be a real body temperature/);
  assert.deepEqual(plan("my temperature is 98 C").steps, [], "98 degrees Celsius is not a body temperature");
  const saved = [];
  const execute = createHealthRecordExecutor({ records: { create: async row => { saved.push(row.data); return { record_id: "r1", version: 1, record_type: "health_observation", created_at: "now" }; } } });
  const ok = await execute({ input: plan("my temperature is 38.6 C").steps[0].input, context: { tenantId: "t", userId: "u" }, taskId: "k" });
  assert.deepEqual(saved[0], { type: "temperature", temperature: 38.6, temperatureUnit: "C" });
  assert.match(ok.safetyResponse, /raised temperature \(a fever\)/);
  assert.match(healthSafetyResponse({ temperature: 104, temperatureUnit: "F" }), /very high/);
  assert.match(healthSafetyResponse({ temperature: 34, temperatureUnit: "C" }), /lower than usual/);
  assert.match(healthSafetyResponse({ temperature: 36.8, temperatureUnit: "C" }), /typical range/);
  assert.equal(invalidReadingReason({ temperature: 60, temperatureUnit: "F" }) !== null, true);
  assert.equal(invalidReadingReason({ temperature: 37, temperatureUnit: "C" }), null);
  assert.equal(observationFrom({ readingType: "temperature", temperature: 37, temperatureUnit: "C" }).temperatureUnit, "C");
});

test("a plain yes to the offer to alert the circle IS the request, and only right after the offer", async () => {
  const seen = [];
  const s = setup({ companion: { async handle({ command }) { seen.push(command.text); return command.text === "alert my circle" ? { response: "I've alerted Grace." } : null; } } });
  // The offer is the LAST sentence, as a question (companion/offer.js). Kyro's other questions, and the old "say alert my circle" wording, are not it.
  const offer = "I'm here. If you might be in danger, please call your local emergency number now. Or tell me what's happening. Do you want me to alert Grace right now?";
  assert.equal((await s.ask("yes", [{ role: "user", content: "help" }, { role: "assistant", content: offer }])).response, "I've alerted Grace.");
  assert.equal((await s.ask("Yes please.", [{ role: "assistant", content: "I'm here, and I'm listening. Do you want me to alert Grace right now?" }])).response, "I've alerted Grace.");
  assert.equal((await s.ask("ndiyo", [{ role: "assistant", content: "Niko hapa, na ninakusikiliza. Unataka nitume tahadhari kwa Grace sasa hivi?" }])).response, "I've alerted Grace.");
  seen.length = 0;
  // not the offer, something said in between, or not a yes: nothing is sent
  for (const [text, history] of [["yes", [{ role: "assistant", content: "Okay, done." }]], ["yes", [{ role: "assistant", content: offer }, { role: "user", content: "hello" }]], ["no", [{ role: "assistant", content: offer }]], ["yes", []],
    ["yes", [{ role: "assistant", content: "I'm here. Tell me what's happening, or say \"alert my circle\" and I'll message Grace right away." }]],
    ["yes", [{ role: "assistant", content: "Do you want me to alert Grace right now? Or would you rather tell me what's happening?" }]]]) {
    await s.ask(text, history).catch(() => null);
  }
  assert.deepEqual(seen, ["yes", "yes", "no", "yes", "yes", "yes"], "the companion only ever saw the person's own words");
});
