"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { parseTimeOfDay, formatTimeOfDay, isDueNow, localClock } = require("../../nexus/brief/schedule.js");
const { BriefSettingsRepository, JOB_TYPE, PARKED } = require("../../nexus/brief/settings.js");
const { createBriefService } = require("../../nexus/brief/service.js");
const { OpenEndedPlanner, parseBriefControl } = require("../../nexus/brain/planner.js");
const { createServerRuntimeAdapter } = require("../../nexus/compat/server-runtime-adapter.js");
const { createHandlers } = require("../../nexus/workers/handlers.js");

test("times are read the way people say them, and only sensible ones", () => {
  const cases = { "7am": "07:00", "7 am": "07:00", "7:30 am": "07:30", "6.30": "06:30", "6:30": "06:30", "19:00": "19:00", "7 p.m.": "19:00", "12am": "00:00", "12pm": "12:00", "12:15 pm": "12:15", "7": "07:00", "0:05": "00:05", "7am every morning": "07:00" };
  for (const [text, expected] of Object.entries(cases)) assert.equal(parseTimeOfDay(text), expected, text);
  for (const text of ["", "soon", "25:00", "7:99", "13pm", "0am", "24", "noon", "at dawn", "7:5", "seven"]) assert.equal(parseTimeOfDay(text), null, text);
  assert.equal(formatTimeOfDay("07:00"), "7:00 am"); assert.equal(formatTimeOfDay("19:30"), "7:30 pm"); assert.equal(formatTimeOfDay("00:05"), "12:05 am"); assert.equal(formatTimeOfDay("12:00"), "12:00 pm"); assert.equal(formatTimeOfDay("x"), "");
});

test("due means their chosen local time has arrived today, for a while, and never past the end of their day", () => {
  const at = iso => new Date(iso);
  assert.equal(isDueNow({ timeOfDay: "07:00", timeZone: "Africa/Nairobi", now: at("2026-09-21T03:59:00Z") }), false, "06:59 in Nairobi");
  assert.equal(isDueNow({ timeOfDay: "07:00", timeZone: "Africa/Nairobi", now: at("2026-09-21T04:00:00Z") }), true, "07:00 in Nairobi");
  assert.equal(isDueNow({ timeOfDay: "07:00", timeZone: "Africa/Nairobi", now: at("2026-09-21T06:59:00Z") }), true, "09:59, still inside the window");
  assert.equal(isDueNow({ timeOfDay: "07:00", timeZone: "Africa/Nairobi", now: at("2026-09-21T07:00:00Z") }), false, "10:00: a morning brief is not sent at ten because the worker was down at seven");
  assert.equal(isDueNow({ timeOfDay: "07:00", timeZone: "America/Los_Angeles", now: at("2026-09-21T14:00:00Z") }), true, "07:00 Pacific, in daylight time");
  assert.equal(isDueNow({ timeOfDay: "07:00", timeZone: "America/Los_Angeles", now: at("2026-09-21T04:00:00Z") }), false, "the Nairobi 07:00 is not their 07:00");
  assert.equal(isDueNow({ timeOfDay: "23:30", timeZone: "UTC", now: at("2026-09-21T23:45:00Z") }), true); assert.equal(isDueNow({ timeOfDay: "23:30", timeZone: "UTC", now: at("2026-09-22T00:10:00Z") }), false, "never into the next day");
  assert.equal(isDueNow({ timeOfDay: "nonsense", timeZone: "UTC", now: at("2026-09-21T10:00:00Z") }), false);
  assert.deepEqual(localClock(at("2026-09-20T22:30:00Z"), "Africa/Nairobi"), { day: "2026-09-21", minutes: 90, zone: "Africa/Nairobi" });
  assert.equal(localClock(at("2026-09-20T22:30:00Z"), "Not/AZone").zone, "Africa/Nairobi", "a bad zone falls back");
});

test("a person's setting is one active row that can never look due to the dispatcher", async () => {
  const calls = [];
  const db = { async query(sql, params) { calls.push({ sql, params });
    if (/^\s*update nexus_schedules set state='cancelled'/.test(sql)) return { rows: calls.filter(c => /^\s*update/.test(c.sql)).length === 1 ? [{ schedule_id: "old" }] : [] };
    if (/insert into nexus_schedules/.test(sql)) return { rows: [{ schedule_id: "sch_new" }] };
    if (/select schedule_id,payload,timezone/.test(sql)) return { rows: [{ schedule_id: "sch_new", payload: { timeOfDay: "07:00", timeZone: "Africa/Nairobi" }, timezone: "Africa/Nairobi" }] };
    return { rows: [{ schedule_id: "sch_new", tenant_id: "t1", owner_id: "u1", payload: { timeOfDay: "07:00", timeZone: "Africa/Nairobi" }, timezone: "Africa/Nairobi" }] }; } };
  const repo = new BriefSettingsRepository(db);
  assert.deepEqual(await repo.set({ tenantId: "t1", userId: "u1", timeOfDay: "07:00", timeZone: "Africa/Nairobi" }), { scheduleId: "sch_new", timeOfDay: "07:00", timeZone: "Africa/Nairobi", replaced: true });
  const insert = calls.find(c => /insert into/.test(c.sql));
  assert.equal(insert.params[3], JOB_TYPE); assert.deepEqual(insert.params[4], { timeOfDay: "07:00", timeZone: "Africa/Nairobi" }); assert.equal(insert.params[7], PARKED);
  assert.ok(new Date(PARKED).getUTCFullYear() >= 2100, "parked far in the future so schedules.dispatch can never pick it up");
  assert.match(calls[0].sql, /where tenant_id=\$1 and owner_id=\$2 and job_type=\$3 and state='active'/, "only this person's brief is cancelled");
  assert.equal(await repo.stop({ tenantId: "t1", userId: "u1" }), 0);
  assert.deepEqual(await repo.get({ tenantId: "t1", userId: "u1" }), { scheduleId: "sch_new", timeOfDay: "07:00", timeZone: "Africa/Nairobi" });
  assert.deepEqual(await repo.listActive({ limit: 10 }), [{ scheduleId: "sch_new", tenantId: "t1", userId: "u1", timeOfDay: "07:00", timeZone: "Africa/Nairobi" }]);
  await assert.rejects(() => repo.set({ tenantId: "t1", userId: "u1", timeOfDay: "", timeZone: "UTC" }), /required/);
});

function sweepHarness({ due = true, paused = false, pushable = [{ device_id: "d1" }], facts = [{ content: { kind: "name", value: "Amina" } }], existing = new Set(), reminders = [{ content: { reminderText: "Spray the tomatoes" }, scheduled_at: "2026-09-21T06:00:00Z" }] } = {}) {
  const enqueued = []; const logs = [];
  const settings = { listActive: async () => [{ scheduleId: "s1", tenantId: "t1", userId: "u1", timeOfDay: "07:00", timeZone: "Africa/Nairobi" }] };
  const notifications = { async enqueue(item) { enqueued.push(item); existing.add(item.idempotencyKey); return item; }, async existsByKey({ idempotencyKey }) { return existing.has(idempotencyKey); }, async listReminders() { return reminders; } };
  const devices = { async listPushable() { return pushable; } };
  const memory = { async profile() { return facts; } };
  const service = createBriefService({ notifications, settings, memory, devices, autonomyControl: { async isPaused() { return paused; } }, fetchImpl: async () => ({ ok: false }), logger: { info: (...args) => logs.push(args) }, now: () => new Date(due ? "2026-09-21T04:05:00Z" : "2026-09-21T01:00:00Z") });
  return { service, enqueued, logs, existing };
}

test("the sweep sends one push at the chosen local time, with the brief as its body and a daily key", async () => {
  const { service, enqueued, logs } = sweepHarness();
  assert.deepEqual(await service.sendDue({ at: new Date("2026-09-21T04:05:00Z") }), { checked: 1, sent: 1, skippedPaused: 0, skippedNoDevice: 0, skippedNothingToSay: 0 });
  assert.equal(enqueued.length, 1);
  assert.deepEqual([enqueued[0].tenantId, enqueued[0].userId, enqueued[0].channel, enqueued[0].idempotencyKey], ["t1", "u1", "push", "brief:u1:2026-09-21"]);
  assert.deepEqual(enqueued[0].content, { title: "Your morning brief", body: "Good morning Amina. Due today: Spray the tomatoes.", kind: "daily_brief" });
  assert.equal(logs.length, 1);
});

test("a person is never sent two briefs in a day, even across restarts", async () => {
  const { service, enqueued, existing } = sweepHarness();
  await service.sendDue({ at: new Date("2026-09-21T04:05:00Z") }); await service.sendDue({ at: new Date("2026-09-21T04:06:00Z") });
  assert.equal(enqueued.length, 1, "the same process remembers");
  const restarted = sweepHarness({ existing });
  await restarted.service.sendDue({ at: new Date("2026-09-21T04:07:00Z") });
  assert.equal(restarted.enqueued.length, 0, "a fresh process finds the key already used today");
  const nextDay = sweepHarness({ existing });
  await nextDay.service.sendDue({ at: new Date("2026-09-22T04:05:00Z") });
  assert.equal(nextDay.enqueued.length, 1, "tomorrow is a new day");
});

test("nothing is sent before the time, when paused, with no push device, or with nothing to say", async () => {
  assert.equal((await sweepHarness().service.sendDue({ at: new Date("2026-09-21T01:00:00Z") })).sent, 0, "before 07:00 Nairobi");
  const paused = sweepHarness({ paused: true }); assert.deepEqual([(await paused.service.sendDue({ at: new Date("2026-09-21T04:05:00Z") })).skippedPaused, paused.enqueued.length], [1, 0]);
  const noDevice = sweepHarness({ pushable: [] }); assert.deepEqual([(await noDevice.service.sendDue({ at: new Date("2026-09-21T04:05:00Z") })).skippedNoDevice, noDevice.enqueued.length], [1, 0]);
  const quiet = sweepHarness({ reminders: [], facts: [{ content: { kind: "name", value: "Amina" } }] });
  const outcome = await quiet.service.sendDue({ at: new Date("2026-09-21T04:05:00Z") });
  assert.deepEqual([outcome.skippedNothingToSay, quiet.enqueued.length], [1, 0], "no weather and no reminders: no empty greeting");
  await quiet.service.sendDue({ at: new Date("2026-09-21T04:06:00Z") }); assert.equal(quiet.enqueued.length, 0);
  const bare = createBriefService({ notifications: { enqueue: async () => assert.fail("nothing to send") } });
  assert.deepEqual(await bare.sendDue({}), { checked: 0, sent: 0, skippedPaused: 0, skippedNoDevice: 0, skippedNothingToSay: 0 }, "no settings repository: does nothing");
});

test("the worker knows the brief sweep and runs the service", async () => {
  let ran = 0;
  const handlers = createHandlers({ runtime: { brief: { sendDue: async () => { ran += 1; return { checked: 2, sent: 1 }; } } } });
  assert.equal(typeof handlers["brief.send-due"], "function");
  assert.deepEqual(await handlers["brief.send-due"]({ job: { payload: {} } }), { checked: 2, sent: 1 }); assert.equal(ran, 1);
  assert.deepEqual(await createHandlers({ runtime: {} })["brief.send-due"]({ job: { payload: {} } }), { checked: 0, sent: 0 });
  const fs = require("node:fs"); const path = require("node:path");
  const loop = fs.readFileSync(path.join(__dirname, "../../nexus/workers/process.js"), "utf8");
  assert.match(loop, /NEXUS_BRIEF_POLL_MS \|\| 60000/); assert.match(loop, /handlers\["brief\.send-due"\]/);
});

test("only a request to schedule, change, stop or ask about the brief is one, and a setup with no time asks for it", () => {
  const cases = [["Send me a morning brief at 7am", { action: "schedule", timeOfDay: "07:00" }], ["send me a daily brief every morning at 6:30", { action: "schedule", timeOfDay: "06:30" }],
    ["Set up a morning brief at 7", { action: "schedule", timeOfDay: "07:00" }], ["change my brief to 6:30", { action: "schedule", timeOfDay: "06:30" }], ["Change my morning brief to 7pm", { action: "schedule", timeOfDay: "19:00" }],
    ["every morning at 7am send me my brief", { action: "schedule", timeOfDay: "07:00" }], ["Send me a morning brief", { action: "schedule", timeOfDay: null }], ["Start my daily brief at soon", { action: "schedule", timeOfDay: null }],
    ["Stop my morning brief", { action: "stop" }], ["cancel my daily brief", { action: "stop" }], ["turn off my brief", { action: "stop" }], ["no more morning briefs", { action: "stop" }],
    ["when is my morning brief?", { action: "status" }], ["What time does my daily brief come", { action: "status" }], ["is my brief on", { action: "status" }], ["Do I have a morning brief set up?", { action: "status" }]];
  for (const [text, expected] of cases) assert.deepEqual(parseBriefControl(text), expected, text);
  for (const text of ["Give me my brief", "Give me a brief history of maize", "Brief my supplier", "Send me a message at 7am", "Stop my music", "Cancel my reminder", "Send me a text", "Change my password", "What is a brief?", "x".repeat(200), ""])
    assert.equal(parseBriefControl(text), null, text);
});

function plannerWith(brief, byKind = { name: "Amina", location: "Nakuru" }) {
  const memory = { async search() { return []; }, async recent() { return []; }, async saveProfileFact() { return {}; }, async forgetProfile() { return []; },
    async profile() { return Object.entries(byKind).map(([kind, value]) => ({ content: { kind, value } })); } };
  const model = { plan: async () => assert.fail("no model for a brief setting"), respond: async () => assert.fail("no model") };
  return new OpenEndedPlanner({ model, tools: { list: async () => [{ tool_id: "knowledge.search", availability: "available" }] }, applications: { list: () => [{ applicationId: "learning", capabilities: [], riskTiers: [] }] }, memory, brief });
}
const say = (planner, text, context = {}) => planner.plan({ command: { text, channel: "typed", locale: "en", tenantId: "t1", actorId: "u1" }, context: { can: () => true, roles: [], ...context } });

test("setting up a brief saves it in the person's own time zone and says exactly what they get", async () => {
  const saved = []; const brief = { compose: async () => null, schedule: async args => { saved.push(args); return { scheduleId: "s", timeOfDay: args.timeOfDay, timeZone: args.timeZone, replaced: false, location: "Nakuru", hasPushDevice: true }; }, stop: async () => 1, status: async () => null };
  const planner = plannerWith(brief);
  const plan = await say(planner, "Send me a morning brief at 7am", { timeZone: "America/Los_Angeles" });
  assert.deepEqual(saved[0], { tenantId: "t1", userId: "u1", timeOfDay: "07:00", timeZone: "America/Los_Angeles" });
  assert.equal(plan.response, `Done. I'll send your brief every morning at 7:00 am (America/Los_Angeles time). It uses your saved town (Nakuru) and the reminders due that day. Say "stop my morning brief" any time.`);
  assert.deepEqual(plan.steps, []); assert.equal(plan.application, "conversation");
  const unknownZone = await say(planner, "Send me a morning brief at 6:30", {});
  assert.match(unknownZone.response, /^Done\. I'll send your brief every morning at 6:30 am \(Africa\/Nairobi time\)\..* I do not know your time zone, so I used Africa\/Nairobi; tell me if you are elsewhere\./);
  assert.equal((await say(planner, "Send me a morning brief at 7am", { timeZone: "Not/AZone" })).response.includes("I used Africa/Nairobi"), true, "an invalid zone from the device is ignored");
  assert.equal((await say(planner, "Send me a morning brief")).response, "What time each morning? For example 7am or 6:30.");
});

test("it tells the person what is still missing, when it changes an existing brief, and how to stop or check it", async () => {
  const make = extra => ({ compose: async () => null, schedule: async args => ({ timeOfDay: args.timeOfDay, timeZone: args.timeZone, replaced: false, location: "", hasPushDevice: true, ...extra }), stop: async () => 1, status: async () => null });
  const noTown = await say(plannerWith(make({}), {}), "Send me a morning brief at 7am", { timeZone: "Africa/Nairobi" });
  assert.match(noTown.response, /Tell me where you are \("I live in <your town>"\) and I will add the weather; for now it has your reminders due that day\./);
  const noAlerts = await say(plannerWith(make({ hasPushDevice: false })), "Send me a morning brief at 7am", { timeZone: "Africa/Nairobi" });
  assert.match(noAlerts.response, /Alerts are not turned on for any of your devices yet, so nothing can be sent until you turn them on\./);
  const changed = await say(plannerWith(make({ replaced: true })), "change my brief to 6:30", { timeZone: "Africa/Nairobi" });
  assert.match(changed.response, /^Done\. Your brief is now every morning at 6:30 am/);
  assert.equal((await say(plannerWith(make({})), "Stop my morning brief")).response, "Done. I've stopped your morning brief.");
  assert.equal((await say(plannerWith({ ...make({}), stop: async () => 0 }), "Stop my morning brief")).response, "You don't have a morning brief set up.");
  assert.equal((await say(plannerWith({ ...make({}), status: async () => ({ timeOfDay: "07:00", timeZone: "Africa/Nairobi" }) }), "When is my morning brief?")).response, 'Your morning brief goes out every morning at 7:00 am (Africa/Nairobi time). Say "stop my morning brief" any time.');
  assert.equal((await say(plannerWith(make({})), "When is my morning brief?")).response, 'You don\'t have a morning brief set up. Say "send me a morning brief at 7am" to start one.');
  const unavailable = plannerWith({ compose: async () => null });
  assert.equal(unavailable.brief.schedule, undefined); // no scheduling service: the phrase is not intercepted
  const failing = await say(plannerWith({ ...make({}), schedule: async () => { throw new Error("db down"); } }), "Send me a morning brief at 7am").catch(error => error);
  assert.ok(failing instanceof Error || failing?.response === undefined, "a failing store never claims it was set up");
});

test("the device's time zone reaches the planner only when it is a real zone", async () => {
  const seen = [];
  const runtime = { engine: { tasks: {} }, ready: Promise.resolve(), behavior: { async turn({ context }) { seen.push(context.timeZone); return { completed: true, schema: "nexus.behavior-turn.v1" }; } } };
  const post = async timeZone => {
    const adapter = createServerRuntimeAdapter({ env: {}, resolveUser: async () => ({ id: "user-1", tenantId: "tenant-1" }), readJson: async () => ({ text: "hi", timeZone }), createRuntimeFn: () => runtime });
    await adapter.handle({ method: "POST", headers: {} }, {}, new URL("http://local/api/nexus/runtime/behavior/turn"), () => {});
  };
  for (const zone of ["Africa/Nairobi", "America/Los_Angeles", "UTC", "Not/AZone", "../../etc/passwd", "", undefined, 5, { toString: () => "UTC" }, "Africa/Nairobi; drop table"]) await post(zone);
  assert.deepEqual(seen, ["Africa/Nairobi", "America/Los_Angeles", "UTC", undefined, undefined, undefined, undefined, undefined, undefined, undefined]);
  const client = require("node:fs").readFileSync(require("node:path").join(__dirname, "../../public/app.js"), "utf8");
  assert.match(client, /timeZone: \(\(\) => \{ try \{ return Intl\.DateTimeFormat\(\)\.resolvedOptions\(\)\.timeZone \|\| undefined; \} catch \{ return undefined; \} \}\)\(\)/);
});
