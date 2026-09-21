"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { WeeklySummarySettingsRepository, createWeeklySummaryService, composeWeekly, parseWeeklyControl, JOB_TYPE } = require("../../nexus/brief/weekly.js");
const { PARKED } = require("../../nexus/brief/settings.js");
const { createHandlers } = require("../../nexus/workers/handlers.js");

const TODAY = "2026-09-20"; // a Sunday
const SUNDAY_EVENING = new Date("2026-09-20T15:30:00Z"); // 18:30 in Nairobi

test("weekly summary requests are read, and the morning brief and ordinary questions are left alone", () => {
  assert.deepEqual(parseWeeklyControl("Send me a weekly summary on Sunday at 6pm"), { action: "schedule", dayOfWeek: 0, timeOfDay: "18:00", timeGiven: true, dayGiven: true });
  assert.deepEqual(parseWeeklyControl("Send me a weekly report on monday at 7:30am"), { action: "schedule", dayOfWeek: 1, timeOfDay: "07:30", timeGiven: true, dayGiven: true });
  assert.deepEqual(parseWeeklyControl("Send me a weekly summary"), { action: "schedule", dayOfWeek: 0, timeOfDay: "18:00", timeGiven: false, dayGiven: false });
  assert.deepEqual(parseWeeklyControl("Stop my weekly summary"), { action: "stop" });
  assert.deepEqual(parseWeeklyControl("Do I have a weekly summary?"), { action: "status" });
  for (const text of ["Send me my morning brief at 7am", "What is the weekly report for maize", "Weekly rainfall in Kisumu", "How is my week going", ""]) assert.equal(parseWeeklyControl(text), null, text);
});

test("the summary says only what the person logged, kept, or scheduled, and nothing when there is none", () => {
  const farm = [
    { content: { kind: "reading", metric: "rain", value: 12, unit: "mm", day: "2026-09-19" } }, { content: { kind: "reading", metric: "rain", value: 8, unit: "mm", day: "2026-09-16" } },
    { content: { kind: "reading", metric: "rain", value: 40, unit: "mm", day: "2026-09-01" } },
    { content: { kind: "reading", metric: "harvest", value: 200, unit: "kg", crop: "maize", day: "2026-09-18" } }, { content: { kind: "reading", metric: "harvest", value: 30, unit: "egg", crop: "eggs", day: "2026-09-20" } }
  ];
  const personal = [
    { content: { kind: "todo", list: "todo", text: "a", done: false } }, { content: { kind: "todo", list: "todo", text: "b", done: false } }, { content: { kind: "todo", list: "todo", text: "c", done: true } },
    { content: { kind: "todo", list: "shopping", text: "milk", done: false } },
    { content: { kind: "event", text: "Vet visit", day: "2026-09-22", time: "10:00" } }, { content: { kind: "event", text: "Far away", day: "2026-10-30", time: "" } }, { content: { kind: "event", text: "Today's", day: TODAY, time: "" } }
  ];
  const text = composeWeekly({ name: "Amina Wanjiru", farmRows: farm, personalRows: personal, reminders: [{ scheduledAt: "2026-09-23T06:00:00Z" }], today: TODAY });
  assert.equal(text, "Your week, Amina: Rain logged: 20 mm over 2 days. Harvested: maize 200 kg; 30 eggs. 2 open items on your to-do list. Coming up: Tuesday 22 September at 10:00 am: Vet visit. 1 reminder set for the days ahead.");
  assert.equal(composeWeekly({ today: TODAY }), null);
  assert.equal(composeWeekly({ farmRows: [{ content: { kind: "reading", metric: "rain", value: 5, unit: "mm", day: "2026-08-01" } }], today: TODAY }), null, "last month's rain is not this week's news");
});

test("the setting is a parked row under its own job type, and refuses an invalid weekday", async () => {
  const calls = [];
  const db = { async query(sql, params) { calls.push({ sql, params }); return { rows: /insert/.test(sql) ? [{ schedule_id: "sch_1" }] : [{ schedule_id: "sch_1", payload: { dayOfWeek: 0, timeOfDay: "18:00", timeZone: "Africa/Nairobi" }, timezone: "Africa/Nairobi", tenant_id: "t1", owner_id: "u1" }] }; } };
  const repo = new WeeklySummarySettingsRepository(db);
  await repo.set({ tenantId: "t1", userId: "u1", dayOfWeek: 0, timeOfDay: "18:00", timeZone: "Africa/Nairobi" });
  const insert = calls.find(call => /insert into nexus_schedules/.test(call.sql));
  assert.equal(insert.params[3], JOB_TYPE); assert.equal(JOB_TYPE, "summary.weekly"); assert.equal(insert.params[7], PARKED);
  assert.deepEqual((await repo.listActive())[0], { scheduleId: "sch_1", tenantId: "t1", userId: "u1", dayOfWeek: 0, timeOfDay: "18:00", timeZone: "Africa/Nairobi" });
  assert.equal((await repo.get({ tenantId: "t1", userId: "u1" })).dayOfWeek, 0);
  assert.equal(await repo.stop({ tenantId: "t1", userId: "u1" }), 1);
  await assert.rejects(repo.set({ tenantId: "t1", userId: "u1", dayOfWeek: 9, timeOfDay: "18:00", timeZone: "x" }));
  assert.equal(calls.filter(call => /delete from/i.test(call.sql)).length, 0);
});

function harness({ settings, devices = [{ id: 1 }], paused = false, existing = new Set(), farm = [{ content: { kind: "reading", metric: "rain", value: 12, unit: "mm", day: "2026-09-19" } }] } = {}) {
  const queued = [];
  const notifications = { async enqueue(row) { queued.push(row); }, async existsByKey({ idempotencyKey }) { return existing.has(idempotencyKey); }, async listReminders() { return []; } };
  const memory = { async profile() { return [{ content: { kind: "name", value: "Amina" } }]; }, async listFarmEntries() { return farm; }, async listPersonalItems() { return []; } };
  const service = createWeeklySummaryService({ notifications, settings: { async listActive() { return settings; } }, memory, devices: { async listPushable() { return devices; } }, autonomyControl: { async isPaused() { return paused; } }, now: () => SUNDAY_EVENING });
  return { service, queued };
}
const person = (extra = {}) => ({ tenantId: "t1", userId: "u1", dayOfWeek: 0, timeOfDay: "18:00", timeZone: "Africa/Nairobi", ...extra });

test("the sweep sends one summary on the chosen weekday once the chosen time has arrived, and never twice", async () => {
  const existing = new Set();
  const { service, queued } = harness({ settings: [person()], existing });
  const first = await service.sendDue({ at: SUNDAY_EVENING });
  assert.equal(first.sent, 1);
  assert.equal(queued[0].idempotencyKey, "weekly:u1:2026-09-20"); assert.equal(queued[0].channel, "push");
  assert.equal(queued[0].content.kind, "weekly_summary"); assert.equal(queued[0].content.title, "Your weekly summary");
  assert.equal(queued[0].content.body, "Your week, Amina: Rain logged: 12 mm over 1 day.");
  existing.add(queued[0].idempotencyKey);
  assert.equal((await service.sendDue({ at: SUNDAY_EVENING })).sent, 0, "already sent this week");
});

test("it waits for the right day and time, and respects pause, devices and an empty week", async () => {
  assert.equal((await harness({ settings: [person({ dayOfWeek: 1 })] }).service.sendDue({ at: SUNDAY_EVENING })).sent, 0, "wrong weekday");
  assert.equal((await harness({ settings: [person({ timeOfDay: "20:00" })] }).service.sendDue({ at: SUNDAY_EVENING })).sent, 0, "time not yet arrived");
  assert.equal((await harness({ settings: [person({ timeOfDay: "10:00" })] }).service.sendDue({ at: SUNDAY_EVENING })).sent, 0, "window of three hours has passed");
  const paused = harness({ settings: [person()], paused: true });
  assert.equal((await paused.service.sendDue({ at: SUNDAY_EVENING })).skippedPaused, 1); assert.equal(paused.queued.length, 0);
  const none = harness({ settings: [person()], devices: [] });
  assert.equal((await none.service.sendDue({ at: SUNDAY_EVENING })).skippedNoDevice, 1);
  const empty = harness({ settings: [person()], farm: [] });
  assert.equal((await empty.service.sendDue({ at: SUNDAY_EVENING })).skippedNothingToSay, 1); assert.equal(empty.queued.length, 0);
  assert.equal((await harness({ settings: [person({ timeZone: "Pacific/Auckland" })] }).service.sendDue({ at: SUNDAY_EVENING })).sent, 0, "it is already Monday there");
});

test("turning the weekly summary on, off and asking, in plain words through the planner", async () => {
  const state = { setting: null };
  const weekly = { async schedule(args) { const replaced = Boolean(state.setting); state.setting = args; return { ...args, replaced, hasPushDevice: true }; },
    async stop() { const was = Boolean(state.setting); state.setting = null; return was ? 1 : 0; }, async status() { return state.setting; } };
  const p = new OpenEndedPlanner({ weekly, tools: { list: async () => [] }, applications: { list: () => [] }, model: { plan: async () => { throw new Error("no model"); }, respond: async () => null } });
  const ask = (text, context = { can: () => true, roles: [], timeZone: "Africa/Nairobi" }) => p.plan({ command: { text, channel: "typed", locale: "en", tenantId: "t1", actorId: "u1", conversationId: "c" }, context });
  assert.match((await ask("Do I have a weekly summary?")).response, /You don't have a weekly summary set up/);
  const on = await ask("Send me a weekly summary on Friday at 5pm");
  assert.equal(on.application, "conversation"); assert.deepEqual(on.steps, []);
  assert.match(on.response, /^Done\. I'll send your weekly summary every Friday at 5:00 pm \(Africa\/Nairobi time\)\. It covers what you logged/);
  assert.deepEqual([state.setting.dayOfWeek, state.setting.timeOfDay], [5, "17:00"]);
  assert.doesNotMatch(on.response, /because you did not say/);
  assert.match((await ask("Do I have a weekly summary?")).response, /every Friday at 5:00 pm/);
  assert.match((await ask("Send me a weekly summary")).response, /Your weekly summary is now every Sunday at 6:00 pm.*I chose Sunday at 6:00 pm because you did not say/);
  assert.equal((await ask("Stop my weekly summary")).response, "Done. I've stopped your weekly summary.");
  assert.equal((await ask("Stop my weekly summary")).response, "You don't have a weekly summary set up.");
});

test("the worker runs the weekly sweep, and does nothing when it is unavailable", async () => {
  let ran = 0;
  const handlers = createHandlers({ runtime: { weekly: { async sendDue() { ran += 1; return { checked: 1, sent: 1 }; } } } });
  assert.deepEqual(await handlers["summary.weekly-send-due"]({ job: { payload: {} } }), { checked: 1, sent: 1 }); assert.equal(ran, 1);
  assert.deepEqual(await createHandlers({ runtime: {} })["summary.weekly-send-due"]({ job: { payload: {} } }), { checked: 0, sent: 0 });
});
