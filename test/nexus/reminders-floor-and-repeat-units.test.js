"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { createServerRuntimeAdapter } = require("../../nexus/compat/server-runtime-adapter.js");
const { classifyRepeatRequest, repeatTurnAnyLanguage, unreachableStore } = require("../../nexus/reminders/repeat-turn.js");
const floor = require("../../nexus/reminders/floor-reminders.js");
const { createReminderScheduleExecutor } = require("../../nexus/reminders/executor.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");

// Repeating reminders asked for on the older route go to the SAME store the worker delivers from (nexus_schedules, through the runtime adapter), with clean task text and one rule per time
// of day; and the reading of list / change / cancel / cancel-all requests and of duplicates is held to a table of phrasings.

const fakeStore = () => {
  const rows = [];
  return { rows,
    async add(item) { const row = { scheduleId: `sch_${rows.length + 1}`, ...item }; rows.push(row); return { scheduleId: row.scheduleId }; },
    async list() { return rows.slice(); },
    async cancel({ scheduleId }) { const at = rows.findIndex(row => row.scheduleId === scheduleId); if (at < 0) return false; rows.splice(at, 1); return true; },
    async cancelAll() { const count = rows.length; rows.length = 0; return count; } };
};
const adapterWith = store => createServerRuntimeAdapter({ resolveUser: async () => null, readJson: async () => ({}), logger: { error() {}, warn() {}, info() {} },
  createRuntimeFn: async () => ({ ready: Promise.resolve(), repeatReminderRecords: store }) });
const person = { id: "11111111-1111-4111-8111-111111111111", tenantId: "tenant_a", organizationId: "tenant_a", role: "standard-user", roles: ["standard-user"], permissions: ["tasks:create"] };

test("a repeating reminder asked for on the older route is stored in the delivery store: clean task, one rule per time, the person's zone", async () => {
  const store = fakeStore(); const adapter = adapterWith(store);
  const reply = await adapter.repeatReminderTurnRequest({ text: "remind me to take metformin 500mg at 8am and 8pm every day", user: person, timeZone: "Africa/Lagos" });
  assert.equal(reply, 'Okay. I will remind you to take metformin 500mg every day at 8:00 am and 8:00 pm. To stop it, say "stop my repeating reminder to take metformin 500mg".');
  assert.deepEqual(store.rows.map(row => [row.task, row.timeOfDay, row.days, row.timeZone, row.userId, row.tenantId]),
    [["take metformin 500mg", "08:00", "daily", "Africa/Lagos", person.id, "tenant_a"], ["take metformin 500mg", "20:00", "daily", "Africa/Lagos", person.id, "tenant_a"]]);
  const study = await adapter.repeatReminderTurnRequest({ text: "remind me every day at 6am to study", user: person, timeZone: "Africa/Nairobi" });
  assert.match(study, /^Okay\. I will remind you to study every day at 6:00 am\./);
  assert.equal(store.rows.at(-1).task, "study"); assert.equal(store.rows.at(-1).timeZone, "Africa/Nairobi");
  const monday = await adapter.repeatReminderTurnRequest({ text: "every Monday at 9 remind me to call the buyer", user: person, timeZone: "Africa/Nairobi" });
  assert.match(monday, /every Monday at 9:00 am/); assert.deepEqual(store.rows.at(-1).days, [1]); assert.equal(store.rows.at(-1).task, "call the buyer");
  const swahili = await adapter.repeatReminderTurnRequest({ text: "nikumbushe kila siku saa mbili asubuhi kunywa dawa", user: person, timeZone: "Africa/Nairobi" });
  assert.match(swahili, /^Sawa\. Nitakukumbusha kunywa dawa kila siku saa mbili asubuhi\./);
  assert.equal(store.rows.at(-1).timeOfDay, "08:00"); assert.equal(store.rows.at(-1).task, "kunywa dawa");
  assert.match(await adapter.repeatReminderTurnRequest({ text: "show my repeating reminders", user: person, timeZone: "Africa/Nairobi" }), /^You have 5 repeating reminders/);
  assert.match(await adapter.repeatReminderTurnRequest({ text: "stop all my repeating reminders", user: person, timeZone: "Africa/Nairobi" }), /stopped 5 repeating reminders/);
  assert.equal(await adapter.repeatReminderTurnRequest({ text: "remind me tomorrow at 9am to call", user: person }), null, "a one-time reminder is not a repeating one");
});

test("the planner path uses the person's own clock too: their saved zone, else their country's, else none (it then says which zone it assumed)", async () => {
  const seen = [];
  const adapter = createServerRuntimeAdapter({ resolveUser: async () => null, readJson: async () => ({}), logger: { error() {}, warn() {}, info() {} },
    createRuntimeFn: async () => ({ ready: Promise.resolve(), behavior: { turn: async ({ context }) => { seen.push(context.timeZone); return { ok: true }; } } }) });
  await adapter.behaviorTurnRequest({ text: "hi", user: { ...person, country: "Nigeria" } });
  await adapter.behaviorTurnRequest({ text: "hi", user: { ...person, country: "Kenya" } });
  await adapter.behaviorTurnRequest({ text: "hi", user: { ...person, country: "Nigeria", timeZone: "Africa/Accra" } });
  await adapter.behaviorTurnRequest({ text: "hi", user: { ...person, country: "Atlantis" } });
  assert.deepEqual(seen, ["Africa/Lagos", "Africa/Nairobi", "Africa/Accra", undefined]);
});

test("when the delivery store cannot be reached the adapter says so (it throws), and the questions that need no store are still asked", async () => {
  const down = createServerRuntimeAdapter({ resolveUser: async () => null, readJson: async () => ({}), logger: { error() {}, warn() {}, info() {} }, createRuntimeFn: async () => { throw new Error("database unavailable"); } });
  await assert.rejects(down.repeatReminderTurnRequest({ text: "remind me every day at 6am to study", user: person }));
  assert.equal(await repeatTurnAnyLanguage({ text: "remind me every day at 6am to study", store: unreachableStore, tenantId: "t", userId: "u", timeZone: "Africa/Nairobi" }), null);
  assert.match(await repeatTurnAnyLanguage({ text: "remind me every few days to call", store: unreachableStore, tenantId: "t", userId: "u", timeZone: "Africa/Nairobi" }), /Nothing was set\.$/);
  assert.match(await repeatTurnAnyLanguage({ text: "nikumbushe kila siku saa mbili kunywa dawa", store: unreachableStore, tenantId: "t", userId: "u" }), /Saa ngapi\?/);
  assert.deepEqual(["remind me every day at 6am to study", "remind me to take metformin 500mg at 8am and 8pm every day", "every Monday remind me to call the buyer", "nikumbushe kila siku saa mbili asubuhi kunywa dawa", "remind me tomorrow at 9am to call", "remind me in 20 minutes to x", "what reminders do I have"].map(classifyRepeatRequest),
    ["add", "add", "add", "add", null, null, null]);
});

test("list, change, cancel and cancel-all are read from natural phrasing, in English and Kiswahili", () => {
  for (const phrase of ["what reminders do I have", "do I have any reminders", "do I have reminders", "what are my reminders", "which reminders are pending", "show my reminders", "list my reminders", "list reminders", "read my reminders", "check my reminders", "reminders", "my reminders", "any reminders?", "tell me my reminders", "show my remainders",
    "nina vikumbusho gani", "onyesha vikumbusho vyangu", "nionyeshe vikumbusho vyangu", "orodha ya vikumbusho", "vikumbusho vyangu", "kuna vikumbusho"]) assert.equal(floor.isListRequest(phrase), true, phrase);
  for (const phrase of ["remind me to check the list", "remind me tomorrow at 9", "cancel my reminders", "cancel my reminder", "change it to 10am", "set a reminder for the clinic", "nikumbushe kesho saa tatu asubuhi kunywa dawa", "what is the weather"]) assert.equal(floor.isListRequest(phrase), false, phrase);
  for (const phrase of ["cancel all my reminders", "cancel all reminders", "delete all my reminders", "clear all my reminders", "remove every reminder", "cancel my reminders", "futa vikumbusho vyote", "futa vikumbusho vyangu vyote"]) assert.equal(floor.isCancelAllRequest(phrase), true, phrase);
  for (const phrase of ["cancel my reminder", "cancel my reminder to call the vet", "futa kikumbusho changu"]) assert.equal(floor.isCancelAllRequest(phrase), false, phrase);
  assert.deepEqual(floor.readCancelRequest("cancel my reminder to call the vet"), { subject: "call the vet", id: "" });
  assert.deepEqual(floor.readCancelRequest("cancel the vet reminder"), { subject: "vet", id: "" });
  assert.deepEqual(floor.readCancelRequest("delete reminder REM-007"), { subject: "", id: "REM-007" });
  assert.deepEqual(floor.readCancelRequest("cancel my reminder"), { subject: "", id: "" });
  assert.deepEqual(floor.readCancelRequest("futa kikumbusho cha kunywa dawa"), { subject: "kunywa dawa", id: "" });
  assert.equal(floor.readCancelRequest("cancel all my reminders"), null);
  assert.deepEqual(floor.readChangeRequest("change it to 10am"), { subject: "", when: "10am" });
  assert.deepEqual(floor.readChangeRequest("move the vet reminder to tomorrow at 9"), { subject: "vet", when: "tomorrow at 9" });
  assert.deepEqual(floor.readChangeRequest("reschedule my reminder to 5pm"), { subject: "", when: "5pm" });
  assert.deepEqual(floor.readChangeRequest("badilisha kikumbusho kiwe saa tatu asubuhi"), { subject: "", when: "saa tatu asubuhi" });
  assert.equal(floor.readChangeRequest("remind me to change it to 10am"), null);
});

test("the reminder meant is found by its words, never by guessing, and only among the person's own", () => {
  const reminders = [
    { id: "3", reminderNumber: "REM-003", task: "pay the workers", status: "scheduled", createdBy: "a@x.org" },
    { id: "2", reminderNumber: "REM-002", task: "call the vet", status: "scheduled", createdBy: "a@x.org" },
    { id: "1", reminderNumber: "REM-001", task: "call the buyer", status: "scheduled", createdBy: "a@x.org" },
    { id: "9", reminderNumber: "REM-009", task: "call the vet", status: "scheduled", createdBy: "b@x.org" },
    { id: "8", reminderNumber: "REM-008", task: "call the doctor", status: "canceled", createdBy: "a@x.org" }];
  assert.equal(floor.findReminder(reminders, "a@x.org", { subject: "vet" }).match.id, "2");
  assert.equal(floor.findReminder(reminders, "a@x.org", { id: "REM-001" }).match.id, "1");
  assert.equal(floor.findReminder(reminders, "a@x.org", {}).match.id, "3", "the newest, when nothing is named");
  assert.equal(floor.findReminder(reminders, "a@x.org", { subject: "call" }).ambiguous.length, 2);
  assert.ok(floor.findReminder(reminders, "a@x.org", { subject: "doctor" }).none, "a cancelled one is not found");
  assert.ok(floor.findReminder(reminders, "a@x.org", { id: "REM-009" }).none, "someone else's is never found");
  assert.ok(floor.findReminder(reminders, "c@x.org", {}).none);
});

test("the same request twice is one reminder: same words and moment, or the same correlation id", () => {
  const at = "2026-10-08T06:00:00.000Z";
  const existing = [{ id: "1", reminderNumber: "REM-001", task: "Pay the school fees", scheduledAt: at, status: "scheduled", createdBy: "a@x.org", correlationId: "c-1" }];
  assert.ok(floor.findDuplicate(existing, "a@x.org", { task: "pay the school fees", scheduledAt: at }));
  assert.ok(floor.findDuplicate(existing, "a@x.org", { task: "pay the school fees", scheduledAt: "2026-10-08T06:01:00.000Z" }), "within 90 seconds is the same moment (in 20 minutes said twice)");
  assert.ok(floor.findDuplicate(existing, "a@x.org", { task: "pay the school fees", scheduledAt: "2026-10-09T06:00:00.000Z", correlationId: "c-1" }), "the same correlation id");
  assert.equal(floor.findDuplicate(existing, "a@x.org", { task: "pay the school fees", scheduledAt: "2026-10-08T07:00:00.000Z" }), null);
  assert.equal(floor.findDuplicate(existing, "a@x.org", { task: "pay the rent", scheduledAt: at }), null);
  assert.equal(floor.findDuplicate(existing, "b@x.org", { task: "pay the school fees", scheduledAt: at }), null, "another person's reminder is not a duplicate");
});

test("an answer to 'what time?' finishes the reminder; something else is a new request", () => {
  const now = new Date("2026-10-07T17:18:00Z"); const timeZone = "Africa/Nairobi";
  const { resolveReminderTime } = require("../../nexus/reminders/time-phrase.js");
  const original = "remind me at 6 to cook supper";
  const ask = resolveReminderTime(original, { now, timeZone }).ask;
  const pending = floor.pendingFromAsk({ ask, task: "cook supper", original, now });
  for (const [answer, hour] of [["evening", 18], ["in the evening", 18], ["6 in the evening", 18], ["pm", 18], ["6pm", 18], ["morning", 6], ["am", 6], ["6am", 6], ["18:00", 18]]) {
    const result = floor.interpretPendingAnswer(pending, answer, { now, timeZone });
    assert.equal(result.status, "ok", answer);
    assert.equal(Number(new Intl.DateTimeFormat("en-GB", { timeZone, hour: "2-digit", hour12: false }).format(new Date(result.timing.scheduledAt))), hour, answer);
  }
  assert.equal(floor.interpretPendingAnswer(pending, "what is the weather", { now, timeZone }).status, "other");
  assert.equal(floor.interpretPendingAnswer(pending, "remind me in 5 minutes to stir", { now, timeZone }).status, "other");
  const none = floor.pendingFromAsk({ ask: resolveReminderTime("remind me to call the vet", { now, timeZone }).ask, task: "call the vet", original: "remind me to call the vet", now });
  assert.equal(floor.interpretPendingAnswer(none, "in 20 minutes", { now, timeZone }).status, "ok");
  assert.equal(floor.interpretPendingAnswer(none, "tomorrow at 8am", { now, timeZone }).status, "ok");
  assert.equal(floor.interpretPendingAnswer(none, "8", { now, timeZone }).status, "ask", "a bare 8 is asked about again");
  assert.equal(floor.interpretPendingAnswer(none, "banana", { now, timeZone }).status, "other");
  assert.equal(floor.isFresh({ askedAt: new Date(Date.now() - 11 * 60000).toISOString() }), false);
  assert.equal(floor.isFresh({ askedAt: new Date().toISOString() }), true);
});

test("the scheduler refuses an unclear time instead of guessing (an AI plan that sends 'at 6' or no time)", async () => {
  const enqueued = [];
  const execute = createReminderScheduleExecutor({ notifications: { enqueue: async item => { enqueued.push(item); return { notification_id: "n1" }; } } });
  for (const when of ["remind me at 6 to cook", "remind me to call the vet", "remind me in 20 minutes at 5pm to call"]) {
    await assert.rejects(execute({ input: { reminder: when, when }, context: { tenantId: "t", userId: "u", timeZone: "Africa/Lagos" }, taskId: "k", idempotencyKey: "i" }), error => error.code === "reminder_time_unclear" && /Nothing was set|Nothing was set yet/.test(error.message), when);
  }
  assert.equal(enqueued.length, 0);
  const ok = await execute({ input: { reminder: "remind me tomorrow at 7am to check the tank", when: "remind me tomorrow at 7am to check the tank" }, context: { tenantId: "t", userId: "u", timeZone: "Africa/Lagos" }, taskId: "k", idempotencyKey: "i" });
  assert.equal(new Date(ok.scheduledAt).getUTCHours(), 6, "7am in Lagos");
  assert.match(ok.resolvedTime, /^at 7:00 am /);
});

test("the planner asks about an unclear time instead of planning a reminder, in English and Kiswahili", async () => {
  const catalog = { tools: [{ tool_id: "reminders.schedule", availability: "available" }], applications: [{ applicationId: "reminders", capabilities: [], riskTiers: [] }] };
  const memory = new Proxy({}, { get: () => async () => [] });
  const planner = new OpenEndedPlanner({ memory, tools: { list: async () => catalog.tools }, applications: { list: () => catalog.applications },
    model: { plan: async () => ({ goal: "x", application: "reminders", riskTier: "low", clarification: null, steps: [{ clientStepId: "s", title: "t", toolId: "reminders.schedule", input: { reminder: "call the vet", when: "at 6" }, dependsOn: [], fallbackToolIds: [] }] }), respond: async () => null } });
  const ask = (text, locale = "en") => planner.plan({ command: { text, channel: "voice", locale, tenantId: "t1", actorId: "u1", conversationId: "c1" }, context: { can: () => true, roles: [], timeZone: "Africa/Nairobi" }, conversationHistory: [] });
  const bare = await ask("Remind me at 6 to cook supper");
  assert.deepEqual(bare.steps, []); assert.match(bare.clarification, /^At 6 in the morning or in the evening\?/);
  const modelPlanned = await ask("please set something for the vet");
  assert.deepEqual(modelPlanned.steps, [], "an AI plan whose time is unclear is asked about too"); assert.match(modelPlanned.clarification, /^At 6 in the morning or in the evening\?/);
  const swahili = await ask("nikumbushe baada ya dakika ishirini kunywa dawa", "sw");
  assert.equal(swahili.steps[0].toolId, "reminders.schedule"); assert.equal(swahili.steps[0].input.reminder, "kunywa dawa"); assert.equal(swahili.steps[0].input.language, "sw");
  const clear = await ask("Remind me in 25 minutes to cook supper");
  assert.equal(clear.steps[0].toolId, "reminders.schedule");
});

test("the planner answers 'what time is it' on the person's own clock when it knows their zone", async () => {
  const catalog = { tools: [], applications: [] };
  const memory = new Proxy({}, { get: () => async () => [] });
  const planner = new OpenEndedPlanner({ memory, tools: { list: async () => catalog.tools }, applications: { list: () => catalog.applications }, model: { plan: async () => { throw new Error("the model must not be asked"); }, respond: async () => null } });
  const ask = (text, timeZone) => planner.plan({ command: { text, channel: "voice", locale: "en", tenantId: "t1", actorId: "u1", conversationId: "c1" }, context: { can: () => true, roles: [], ...(timeZone ? { timeZone } : {}) }, conversationHistory: [] });
  const lagos = (await ask("what time is it", "Africa/Lagos")).response;
  assert.match(lagos, /^It is \d{2}:\d{2} on .* \(Africa\/Lagos time\)\.$/);
  assert.doesNotMatch(lagos, /UTC/);
  assert.match((await ask("what time is it")).response, /Nairobi \(East Africa Time\)/, "with no zone known it still says which zone it is using");
});
