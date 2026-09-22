"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { wellnessTurn, readRequest, personalBests, category } = require("../../nexus/wellness/log.js");
const { WellnessRepository } = require("../../nexus/wellness/store.js");

const TODAY = "2026-09-20"; // a Sunday
const NOW = new Date("2026-09-20T05:00:00Z");

test("reports are read as what they are, with units converted and impossible numbers refused", () => {
  assert.deepEqual(readRequest("I slept 6.5 hours last night", TODAY), { action: "log", metric: "sleep", value: 6.5, unit: "h", day: TODAY }, "last night's sleep belongs to this morning");
  assert.equal(readRequest("I slept 7 hours yesterday", TODAY).day, "2026-09-19");
  assert.equal(readRequest("I slept 40 hours", TODAY).reason, "sleep");
  assert.equal(readRequest("My mood is 4 out of 5", TODAY).value, 4); assert.equal(readRequest("My mood is low", TODAY).value, 2); assert.equal(readRequest("Log my mood as 9", TODAY).reason, "mood");
  assert.deepEqual(readRequest("I ran 5k in 28:30", TODAY), { action: "log", metric: "workout", activity: "run", km: 5, minutes: 28.5, unit: "min", day: TODAY });
  assert.equal(readRequest("I walked 3 miles in 45 minutes", TODAY).km, 4.83);
  assert.equal(readRequest("I did 30 minutes of yoga yesterday", TODAY).day, "2026-09-19");
  assert.equal(readRequest("Log my weight 160 lb", TODAY).value, 72.6); assert.equal(readRequest("I weigh 500 kg", TODAY).reason, "weight");
  assert.equal(readRequest("I had 3 glasses of water", TODAY).value, 0.75);
  assert.equal(readRequest("I ran 5 km in 28 minutes tomorrow", TODAY).reason, "future");
  assert.deepEqual(readRequest("My goal is 4 workouts a week", TODAY), { action: "goal", metric: "workouts", target: 4 });
});

test("ordinary talk that shares words with the log is left alone", () => {
  for (const text of ["I ran into a friend", "I walked to the shop", "I slept badly", "What is my mood", "I had a good time", "How did the match go?", "I drank tea", "Good morning"]) assert.equal(readRequest(text, TODAY), null, text);
});

// Confirmed PARTIAL: this log already works for an athlete's real training
// data, but nothing ever told them so -- no discovery path, no sport-specific
// framing. This adds an honest description of what is actually real (a
// training log with pace and personal bests), never a fabricated training
// plan or coaching advice.
test("a self-identified athlete is told about the real training log, not a fabricated coaching plan", () => {
  for (const text of ["I'm an athlete", "I am a runner", "I'm training for a marathon"]) assert.deepEqual(readRequest(text, TODAY), { action: "intro" }, text);
});

test("wellnessTurn's athlete intro describes only real, already-built features", async () => {
  const store = fakeStore();
  const reply = await say(store, "I'm an athlete");
  assert.match(reply, /5 km in 28 minutes/);
  assert.match(reply, /personal best/i);
  assert.doesNotMatch(reply, /training plan|coach you|program/i);
});

function fakeStore() {
  const rows = []; let n = 0;
  return { rows,
    async addEntry({ userId, content }) { rows.unshift({ memoryId: `w${++n}`, userId, content, deleted: false }); return { memoryId: `w${n}` }; },
    async listEntries({ userId }) { return rows.filter(row => row.userId === userId && !row.deleted).map(row => ({ memoryId: row.memoryId, content: row.content })); },
    async removeEntry({ userId, memoryId }) { const row = rows.find(item => item.memoryId === memoryId && item.userId === userId); if (row) row.deleted = true; return Boolean(row); } };
}
const say = (store, text, userId = "u1", now = NOW) => wellnessTurn({ text, store, tenantId: "t1", userId, now, timeZone: "Africa/Nairobi" });

test("sleep, mood, water and weight are logged, compared with the person's own goals, and summarised", async () => {
  const store = fakeStore();
  assert.equal(await say(store, "My goal is 8 hours of sleep a night"), "Goal set: 8 hours of sleep a night. I'll mention it when a night falls short.");
  assert.equal(await say(store, "I slept 6.5 hours"), "Logged 6.5 hours of sleep for today. That's 1.5 hours under your 8-hour goal.");
  assert.equal(await say(store, "I slept 8 hours yesterday"), "Logged 8 hours of sleep for yesterday.");
  assert.equal(await say(store, "How did I sleep this week?"), "Sleep this week: 7.3 hours a night on average over 2 nights (least 6.5, most 8).");
  assert.equal(await say(store, "My mood is 4"), "Logged mood 4 out of 5 for today.");
  assert.equal(await say(store, "How has my mood been this week?"), "Mood this week: 4 out of 5 on average over 1 day.");
  assert.equal(await say(store, "I drank 2 litres of water"), "Logged 2 L of water for today. 2 L for the day.");
  assert.equal(await say(store, "I had 4 glasses of water"), "Logged 1 L of water for today. 3 L for the day.");
  assert.equal(await say(store, "I weigh 73 kg 3 days ago"), "Logged weight 73 kg for Thursday 17 September.");
  assert.equal(await say(store, "I weigh 72 kg"), "Logged weight 72 kg for today. Down 1 kg since Thursday 17 September.");
  assert.equal(await say(store, "What is my weight trend?"), "Weight this month: 73 kg to 72 kg, down 1 kg.");
  assert.match(await say(store, "I slept 40 hours"), /doesn't look like a night's sleep/);
  assert.match(await say(store, "I ran 5 km in 28 minutes tomorrow"), /still ahead/);
  assert.equal(store.rows.filter(row => !row.deleted && row.content.kind === "entry").length, 7, "refused numbers are never saved");
});

test("workouts count toward a weekly goal, and running times are recognised as personal bests", async () => {
  const store = fakeStore();
  assert.equal(await say(store, "My goal is 3 workouts a week"), "Goal set: 3 workouts a week. I'll tell you how you're doing whenever you log one, or ask \"how am I doing on my goals?\".");
  assert.equal(await say(store, "I ran 5 km in 30 minutes"), "Logged 5 km run in 30 minutes (6:00 per km) for today. That's workout 1 this week of 3. New personal best for 5 km: 30:00!");
  assert.equal(await say(store, "I did 45 minutes of yoga yesterday"), "Logged yoga in 45 minutes for yesterday. That's workout 2 this week of 3.");
  assert.match(await say(store, "I ran 5 km in 28:30 3 days ago"), /New personal best for 5 km: 28:30 \(was 30:00\)!/);
  assert.doesNotMatch(await say(store, "I ran 5 km in 29 minutes"), /personal best/, "slower than the best");
  assert.match(await say(store, "I ran 10 km in 65 minutes"), /New personal best for 10 km: 1:05:00!/);
  assert.equal(await say(store, "What are my personal bests?"), "Your personal bests: 5 km 28:30 (Thursday 17 September); 10 km 1:05:00 (today).");
  assert.equal(await say(store, "How am I doing on my goals?"), "Workouts: 5 of 3 this week — goal met.");
  assert.equal(await say(store, "How many workouts did I do this week?"), "Training this week: 5 workouts, 197.5 minutes, 25 km.");
  assert.equal(category(5.1), 5); assert.equal(category(7), null);
  assert.deepEqual(Object.keys(personalBests([{ metric: "workout", activity: "ride", km: 5, minutes: 10, day: TODAY }])), [], "only runs count");
  assert.match(await say(store, "Show my training log"), /^Your latest entries: today: /);
  assert.match(await say(store, "Undo my last workout entry"), /^Removed your last entry: 10 km run in 65 minutes/);
});

test("the log belongs to one person, is capped, and never tells anyone anything", async () => {
  const store = fakeStore();
  await say(store, "I slept 7 hours", "u1");
  assert.match(await say(store, "How did I sleep this week?", "u2"), /^I have no sleep logged/);
  assert.match(await say(store, "Show my training log", "u2"), /^Your log is empty/);
  for (let i = 0; i < 5000; i += 1) await store.addEntry({ userId: "u3", content: { kind: "entry", metric: "sleep", value: 7, day: TODAY } });
  assert.match(await say(store, "I slept 7 hours", "u3"), /Your log is full/);
  assert.equal(await say(fakeStore(), "Undo my last workout entry"), "There is nothing in your log to undo.");
});

test("the repository stores wellness entries as private health information and only soft-deletes", async () => {
  const calls = [];
  const db = { async query(sql, params) { calls.push({ sql, params }); return { rows: [{ memory_id: "m1", content: { kind: "entry", metric: "sleep" } }] }; } };
  const repo = new WellnessRepository(db);
  await repo.addEntry({ tenantId: "t1", userId: "u1", content: { kind: "entry", metric: "sleep", value: 7, day: TODAY } });
  assert.match(calls[0].sql, /'domain','wellness'/); assert.match(calls[0].sql, /'health'\)/);
  assert.equal((await repo.listEntries({ tenantId: "t1", userId: "u1" }))[0].memoryId, "m1");
  await repo.removeEntry({ tenantId: "t1", userId: "u1", memoryId: "m1" });
  assert.match(calls.at(-1).sql, /set deleted_at=now\(\)/); assert.ok(calls.every(call => !/delete from/i.test(call.sql)));
});

test("through the planner a wellness report is a conversational answer with no tool and the model is never asked", async () => {
  const p = new OpenEndedPlanner({ wellnessStore: fakeStore(), memory: null, tools: { list: async () => [] }, applications: { list: () => [] }, model: { plan: async () => { throw new Error("no model"); }, respond: async () => null } });
  const plan = await p.plan({ command: { text: "I ran 5 km in 30 minutes", channel: "typed", locale: "en", tenantId: "t1", actorId: "u1", conversationId: "c" }, context: { can: () => true, roles: [], timeZone: "Africa/Nairobi" } });
  assert.equal(plan.application, "conversation"); assert.deepEqual(plan.steps, []); assert.match(plan.response, /^Logged 5 km run in 30 minutes/);
});
