"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { CircleRepository } = require("../../nexus/companion/circle-repository.js");
const { CheckinSettingsRepository, CheckinStateRepository } = require("../../nexus/companion/checkin-store.js");
const { createCompanion } = require("../../nexus/companion/index.js");
const { createCheckinService, parseCheckinControl, readCheckinAnswer } = require("../../nexus/companion/checkins.js");
const { safetyTurn, readSafety } = require("../../nexus/companion/safety.js");
const { readCircleRequest, circleTurn } = require("../../nexus/companion/circle.js");
const { createHandlers } = require("../../nexus/workers/handlers.js");

// ---------- an in-memory database that understands exactly the statements the circle repository issues ----------
function circleDb(users) {
  const rows = []; const calls = [];
  const db = {
    rows, calls,
    async transaction(fn) { return fn(db); },
    async query(sql, params) {
      calls.push({ sql, params });
      if (/from users where tenant_id=\$1 and lower\(email\)/.test(sql)) return { rows: users.filter(user => user.tenant_id === params[0] && user.email.toLowerCase() === String(params[1]).toLowerCase() && user.status === "active").map(user => ({ id: user.id, display_name: user.display_name })) };
      if (/from users where tenant_id=\$1 and id=\$2/.test(sql)) return { rows: users.filter(user => user.tenant_id === params[0] && user.id === params[1]).map(user => ({ display_name: user.display_name })) };
      if (/select memory_id,principal_id,content from nexus_memory_items/.test(sql)) {
        return { rows: rows.filter(row => row.tenant_id === params[0] && row.purpose === "circle" && !row.deleted && (params[1] === null || row.principal_id === params[1]) && (params[2] === null || row.content.linkId === params[2])).map(row => ({ memory_id: row.memory_id, principal_id: row.principal_id, content: row.content })) };
      }
      if (/insert into nexus_memory_items/.test(sql) && /'circle'/.test(sql)) { rows.push({ memory_id: params[0], tenant_id: params[1], principal_id: params[2], purpose: "circle", content: params[3] }); return { rows: [] }; }
      if (/update nexus_memory_items set content=\$3/.test(sql) && /purpose='circle'/.test(sql)) { const row = rows.find(item => item.tenant_id === params[0] && item.memory_id === params[1]); if (row) row.content = params[2]; return { rows: [] }; }
      throw new Error(`unexpected SQL: ${sql.slice(0, 80)}`);
    }
  };
  return db;
}
const USERS = [
  { id: "u-amina", tenant_id: "t1", email: "amina@example.com", display_name: "Amina Wanjiru", status: "active" },
  { id: "u-joseph", tenant_id: "t1", email: "joseph@example.com", display_name: "Joseph Otieno", status: "active" },
  { id: "u-baba", tenant_id: "t1", email: "baba@example.com", display_name: "Baba Kamau", status: "active" },
  { id: "u-other", tenant_id: "t2", email: "amina@example.com", display_name: "Amina Elsewhere", status: "active" },
  { id: "u-gone", tenant_id: "t1", email: "gone@example.com", display_name: "Gone Person", status: "disabled" }
];

function world({ now = new Date("2026-09-20T05:00:00Z") } = {}) {
  const db = circleDb(USERS); const circle = new CircleRepository(db);
  const pushes = [];
  const notifications = { async enqueue(row) { pushes.push(row); }, async existsByKey() { return false; } };
  const checkinRows = []; let n = 0; const messages = new Set();
  const schedules = [];
  const settings = { async set(args) { const existing = schedules.findIndex(item => item.userId === args.userId); const saved = { ...args, graceHours: 3 }; if (existing >= 0) schedules.splice(existing, 1); schedules.push(saved); return { ...saved, replaced: existing >= 0 }; },
    async stop({ userId }) { const i = schedules.findIndex(item => item.userId === userId); if (i < 0) return 0; schedules.splice(i, 1); return 1; },
    async get({ userId }) { return schedules.find(item => item.userId === userId) || null; }, async listActive() { return schedules.slice(); } };
  const state = { async get({ userId, day }) { const row = checkinRows.find(item => item.userId === userId && item.day === day); return row ? { ...row } : null; },
    async create({ tenantId, userId, content }) { checkinRows.push({ memoryId: `c${++n}`, tenantId, userId, ...content }); },
    async update({ memoryId, content }) { const i = checkinRows.findIndex(item => item.memoryId === memoryId); checkinRows[i] = { ...content, memoryId, tenantId: checkinRows[i].tenantId, userId: checkinRows[i].userId }; return true; },
    async listPending() { return checkinRows.filter(row => row.status === "pending").map(row => ({ ...row })); },
    async hasActivitySince({ userId }) { return messages.has(userId); } };
  const devices = { async listPushable() { return [{ id: 1 }]; } };
  const companion = createCompanion({ circle, checkinSettings: settings, checkinState: state, memory: null, notifications, devices, now: () => now });
  return { db, circle, pushes, notifications, companion, checkinRows, schedules, messages, settings, state, devices, now };
}
const ask = async (w, text, userId = "u-baba", extra = {}) => w.companion.turn({ command: { text, tenantId: "t1", actorId: userId }, context: { timeZone: "Africa/Nairobi", ...extra } });
async function inCircle(w, { person = "u-baba", member = "u-amina", relationship = "daughter", share = true } = {}) {
  const invited = await ask(w, `Add ${USERS.find(u => u.id === member).email} to my circle as my ${relationship}`, person);
  await ask(w, `Accept the invitation from ${USERS.find(u => u.id === person).display_name.split(" ")[0]}`, member);
  if (share) await ask(w, `Share my check-ins with ${USERS.find(u => u.id === member).display_name.split(" ")[0]}`, person);
  return invited;
}

// ---------- safety ----------
test("emergencies and self-harm are recognised in the person's own words, and nobody else's", () => {
  for (const text of ["This is an emergency", "I need help now", "I've fallen and I can't get up", "I can't get up", "I'm having a heart attack", "Alert my circle", "Call my circle"]) assert.equal(readSafety(text), "emergency", text);
  for (const text of ["help", "Please help me", "I need help"]) assert.equal(readSafety(text), "ask", text);
  for (const text of ["I want to die", "I want to kill myself", "I'm suicidal", "I really do not want to be here", "I sometimes think about ending it all", "I feel like I'm better off dead", "I keep thinking about suicide"]) assert.equal(readSafety(text), "self_harm", text);
  for (const text of ["how do I help a friend who is suicidal", "my brother said he wants to die", "What is suicide prevention?", "I could kill that deadline", "help with my maize", "emergency contact list", "I need help with my maize", "What should I do in an emergency?", "Good morning"]) assert.equal(readSafety(text), null, text);
});

test("an emergency alerts every member who said yes, once per five minutes, and tells the person exactly who", async () => {
  const w = world();
  await inCircle(w, { member: "u-amina", relationship: "daughter" }); await inCircle(w, { member: "u-joseph", relationship: "son", share: false });
  w.pushes.length = 0;
  const reply = await ask(w, "This is an emergency");
  assert.match(reply, /^I've alerted Amina Wanjiru, Joseph Otieno\. If you might be in danger, please call your local emergency number now\. I'm here with you\.$/);
  assert.deepEqual(w.pushes.map(push => push.userId).sort(), ["u-amina", "u-joseph"]);
  assert.ok(w.pushes.every(push => push.channel === "push" && push.tenantId === "t1" && push.content.title === "Emergency alert" && /Baba Kamau asked Kyro for urgent help/.test(push.content.body)));
  assert.ok(w.pushes.every(push => /^emergency:u-baba:u-(amina|joseph):\d+$/.test(push.idempotencyKey)));
  const again = await ask(w, "This is an emergency");
  assert.equal(new Set(w.pushes.map(push => push.idempotencyKey)).size, 2, "a repeat inside five minutes is the same alert key, so it is not a second push");
  assert.match(again, /alerted/);
});

test("with nobody in the circle, an emergency says so plainly and points to the local emergency number", async () => {
  const w = world();
  const reply = await ask(w, "I've fallen and I can't get up");
  assert.match(reply, /^I don't have anyone in your circle yet, so I couldn't alert anyone\. If you might be in danger, please call your local emergency number now\./);
  assert.equal(w.pushes.length, 0);
  assert.match(await ask(w, "help"), /^I'm here\. If you might be in danger/);
});

test("a person in crisis is answered with care and offered the circle, never alerted without their word", async () => {
  const w = world();
  const alone = await ask(w, "I want to die");
  assert.match(alone, /^I'm really sorry you're feeling this way, and I'm glad you told me\./);
  assert.match(alone, /call your local emergency number or a crisis line in your country/);
  assert.doesNotMatch(alone, /alert my circle/, "no circle to offer");
  await inCircle(w); w.pushes.length = 0;
  const withCircle = await ask(w, "I want to die");
  assert.match(withCircle, /I can alert Amina Wanjiru right now — just say "alert my circle"\./);
  assert.equal(w.pushes.length, 0, "nothing is sent until they say so");
  assert.match(await ask(w, "alert my circle"), /^I've alerted Amina Wanjiru\./);
  assert.equal(w.pushes.length, 1);
});

test("a push that fails for one member does not stop the others", async () => {
  const pushes = [];
  const circle = { async activeMembers() { return [{ otherId: "a", otherName: "A" }, { otherId: "b", otherName: "B" }]; } };
  const push = async (id, title, body, key) => { if (id === "a") throw new Error("boom"); pushes.push(id); };
  const reply = await safetyTurn({ text: "emergency", circle, push, tenantId: "t1", userId: "u", userName: "U", now: new Date() });
  assert.deepEqual(pushes, ["b"]); assert.match(reply, /^I've alerted B\./);
});

// ---------- the circle ----------
test("the person invites, the member is told by push and says yes, and only then are they in the circle", async () => {
  const w = world();
  const invited = await ask(w, "Add amina@example.com to my circle as my daughter");
  assert.equal(invited, "If amina@example.com has a Kyro account in your community, I've sent them your invitation. They choose whether to say yes, and you will hear back here. Nobody in your circle is told anything about you until you say so.");
  assert.equal(w.pushes.length, 1);
  assert.equal(w.pushes[0].userId, "u-amina"); assert.equal(w.pushes[0].content.title, "Circle invitation");
  assert.match(w.pushes[0].content.body, /Baba Kamau would like you in their trusted circle as their daughter\. Say "accept the invitation from Baba"/);
  assert.match(await ask(w, "Who is in my circle?"), /^Your circle: Amina Wanjiru \(daughter\) — invitation waiting\.$/);
  assert.equal((await w.circle.activeMembers({ tenantId: "t1", personId: "u-baba" })).length, 0, "an invitation is not membership");
  assert.match(await ask(w, "Do I have invitations?", "u-amina"), /^Waiting for your answer: Baba Kamau \(you as their daughter\)\./);
  const accepted = await ask(w, "Accept the invitation from Baba", "u-amina");
  assert.match(accepted, /^Thank you\. You're now in Baba Kamau's circle\. You'll only hear from Kyro about them in an emergency/);
  assert.match(w.pushes.at(-1).content.body, /Amina Wanjiru said yes and is now in your trusted circle\./); assert.equal(w.pushes.at(-1).userId, "u-baba");
  assert.equal((await w.circle.activeMembers({ tenantId: "t1", personId: "u-baba" })).length, 1);
  assert.match(await ask(w, "Who is in my circle?"), /Amina Wanjiru \(daughter\) — told nothing except an emergency/);
  assert.equal(await ask(w, "Who am I looking out for?", "u-amina"), "You look out for Baba Kamau.");
});

test("nothing about whether an email has an account is revealed, and nobody outside the community or without an account is reachable", async () => {
  const w = world();
  const real = await ask(w, "Add amina@example.com to my circle");
  const missing = await ask(w, "Add nobody@example.com to my circle");
  assert.equal(real.replace("amina@example.com", "X"), missing.replace("nobody@example.com", "X"), "identical reply either way");
  const disabled = await ask(w, "Add gone@example.com to my circle");
  assert.equal(disabled.replace("gone@example.com", "X"), missing.replace("nobody@example.com", "X"));
  assert.equal(w.pushes.length, 1, "only the real account was notified");
  const otherTenant = await ask(w, "Add amina@example.com to my circle", "u-joseph");
  assert.match(otherTenant, /^If amina@example\.com has a Kyro account/);
  assert.equal((await w.circle.findUserByEmail({ tenantId: "t1", email: "AMINA@example.com" })).id, "u-amina", "lookup is case-insensitive and stays inside the tenant");
  assert.equal(await w.circle.findUserByEmail({ tenantId: "t3", email: "amina@example.com" }), null);
});

test("you cannot invite yourself or the same person twice, and the circle has a size limit", async () => {
  const w = world();
  assert.equal(await ask(w, "Add baba@example.com to my circle"), "That's you. Your circle is for other people.");
  await ask(w, "Add amina@example.com to my circle");
  assert.equal(await ask(w, "Add amina@example.com to my circle"), "Amina Wanjiru is already in your circle, or has an invitation waiting.");
  const many = Array.from({ length: 9 }, (_, i) => ({ id: `x${i}`, tenant_id: "t1", email: `x${i}@example.com`, display_name: `Person ${i}`, status: "active" }));
  const db = circleDb([...USERS, ...many]); const circle = new CircleRepository(db);
  const person = { id: "u-baba", name: "Baba Kamau" };
  for (let i = 0; i < 8; i += 1) assert.ok((await circle.invite({ tenantId: "t1", person, member: { id: `x${i}`, name: `Person ${i}` } })).link);
  assert.deepEqual(await circle.invite({ tenantId: "t1", person, member: { id: "x8", name: "Person 8" } }), { refused: "full" });
});

test("a member can decline, and either side can leave or remove at any time, and it takes effect for both", async () => {
  const w = world();
  await ask(w, "Add amina@example.com to my circle");
  assert.equal(await ask(w, "Decline the invitation from Baba", "u-amina"), "Okay. I've told Baba Kamau you're not able to right now.");
  assert.equal(await ask(w, "Who is in my circle?"), 'Your circle is empty. Say "add name@example.com to my circle" to invite someone you trust.');
  await inCircle(w);
  assert.match(await ask(w, "Leave Baba's circle", "u-amina"), /^Done\. You've left Baba Kamau's circle\./);
  assert.match(w.pushes.at(-1).content.body, /Amina Wanjiru has left your trusted circle\./);
  assert.equal((await w.circle.activeMembers({ tenantId: "t1", personId: "u-baba" })).length, 0);
  assert.equal(await ask(w, "Who am I looking out for?", "u-amina"), "You're not in anyone's circle right now.");
  await inCircle(w, { member: "u-joseph", relationship: "son" });
  assert.match(await ask(w, "Remove Joseph from my circle"), /^Done\. Joseph Otieno is out of your circle and will no longer be told anything\./);
  assert.equal(await ask(w, "Who is in my circle?"), 'Your circle is empty. Say "add name@example.com to my circle" to invite someone you trust.');
  assert.equal(await ask(w, "Remove Kamau from my circle"), "I don't see Kamau in your circle.");
});

test("only the right person can change a link: strangers cannot end it, the member cannot change sharing, and only the invited member can answer", async () => {
  const w = world();
  await inCircle(w);
  const link = (await w.circle.listFor({ tenantId: "t1", userId: "u-baba" }))[0];
  assert.equal(await w.circle.end({ tenantId: "t1", userId: "u-joseph", linkId: link.linkId }), null, "a stranger cannot end someone else's link");
  assert.equal(await w.circle.setShare({ tenantId: "t1", personId: "u-amina", linkId: link.linkId, key: "checkins", value: false }), null, "the member cannot change what is shared");
  assert.equal(await w.circle.respond({ tenantId: "t1", memberId: "u-joseph", linkId: link.linkId, accept: true }), null);
  assert.equal(await w.circle.respond({ tenantId: "t1", memberId: "u-amina", linkId: link.linkId, accept: true }), null, "already answered");
  assert.equal(await w.circle.setShare({ tenantId: "t1", personId: "u-baba", linkId: link.linkId, key: "everything", value: true }), null, "only known share keys exist");
  assert.equal(await w.circle.end({ tenantId: "t2", userId: "u-baba", linkId: link.linkId }), null, "another community sees nothing");
  assert.equal((await w.circle.activeMembers({ tenantId: "t1", personId: "u-baba" })).length, 1, "the link survived every attempt");
});

test("what a member may be told is the person's choice, starts as nothing, and can be taken back", async () => {
  const w = world();
  await inCircle(w, { share: false });
  assert.equal((await w.circle.activeMembers({ tenantId: "t1", personId: "u-baba" }))[0].shares.checkins, undefined);
  assert.match(await ask(w, "Share my check-ins with Amina"), /^Done\. If you miss a check-in, or you ask me to, I may tell Amina Wanjiru\. They will not see your answers\./);
  const both = await w.db.rows.filter(row => row.purpose === "circle").map(row => row.content.shares.checkins);
  assert.deepEqual(both, [true, true], "both rows change together");
  assert.match(await ask(w, "Who is in my circle?"), /may be told if you miss a check-in/);
  assert.match(await ask(w, "Stop sharing my check-ins with Amina"), /^Done\. Amina Wanjiru will not be told about your check-ins\. Emergency alerts still reach everyone/);
  assert.equal((await w.circle.activeMembers({ tenantId: "t1", personId: "u-baba" }))[0].shares.checkins, false);
  assert.match(await ask(w, "Share my check-ins with Nobody"), /I don't see Nobody in your circle/);
});

test("naming a saved contact works when the contact has an email, and asks when it does not", async () => {
  const contacts = [{ content: { kind: "contact", name: "Amina", email: "amina@example.com" } }, { content: { kind: "contact", name: "Zed", phone: "+254700000000", email: "" } }];
  const db = circleDb(USERS); const circle = new CircleRepository(db); const pushes = [];
  const run = who => circleTurn({ text: `Add ${who} to my circle`, circle, memory: { async listContacts() { return contacts; } }, push: async (...args) => pushes.push(args), tenantId: "t1", userId: "u-baba", userName: "Baba Kamau" });
  assert.match(await run("Amina"), /^If Amina has a Kyro account/); assert.equal(pushes.length, 1);
  assert.match(await run("Zed"), /I don't have an email for Zed/);
  assert.match(await run("Nobody"), /I need their email address to invite them/);
});

test("circle words are read narrowly", () => {
  assert.equal(readCircleRequest("Add milk to my shopping list"), null);
  assert.equal(readCircleRequest("Add maize to my circle of friends and family"), null);
  assert.deepEqual(readCircleRequest("Add amina@example.com to my trusted circle as my daughter"), { action: "invite", who: "amina@example.com", relationship: "daughter" });
  assert.equal(readCircleRequest("Do I have invitations?").action, "invitations");
});

// ---------- check-ins ----------
test("check-in requests and answers are read, and ordinary talk is not mistaken for either", () => {
  assert.deepEqual(parseCheckinControl("Check in on me every morning at 8"), { action: "enable", timeOfDay: "08:00", timeGiven: true });
  assert.equal(parseCheckinControl("Check in on me every morning").timeGiven, false);
  assert.deepEqual(parseCheckinControl("Stop my check-ins"), { action: "stop" });
  assert.deepEqual(parseCheckinControl("Do I have check-ins?"), { action: "status" });
  for (const text of ["check in on the maize", "what is a check-in", "hotel check in time is 2pm"]) assert.equal(parseCheckinControl(text), null, text);
  for (const [text, kind] of [["I'm okay", "ok"], ["fine", "ok"], ["doing well", "ok"], ["Not so good", "low"], ["tired", "low"], ["it's a hard day", "low"], ["tell them", "tell"], ["tell Amina", "tell"]]) assert.equal(readCheckinAnswer(text), kind, text);
  for (const text of ["tell me a joke", "good morning", "yes", "what is the weather"]) assert.equal(readCheckinAnswer(text), null, text);
});

test("turning check-ins on says who, if anyone, may be told; and stopping and asking work", async () => {
  const w = world();
  const alone = await ask(w, "Check in on me every morning at 8");
  assert.match(alone, /^Done\. I'll check in on you every day at 8:00 am \(Africa\/Nairobi time\)\. Nobody will be told anything\./);
  assert.match(await ask(w, "Do I have check-ins?"), /every day at 8:00 am/);
  await inCircle(w);
  assert.match(await ask(w, "Check in on me every morning at 7:30"), /^Done\. Your check-in is now every day at 7:30 am.*I'll tell Amina Wanjiru — only that, never your answers\./);
  assert.equal(await ask(w, "Stop my check-ins"), "Done. I've stopped your daily check-ins.");
  assert.equal(await ask(w, "Stop my check-ins"), "You don't have daily check-ins set up.");
  assert.match(await ask(w, "Check in on me every morning", "u-baba", { timeZone: undefined }), /I chose 8:00 am.*I do not know your time zone/);
});

test("Kyro asks how the person is once a day at their time, and never when it cannot reach them", async () => {
  const w = world({ now: new Date("2026-09-20T05:30:00Z") }); // 08:30 Nairobi
  await ask(w, "Check in on me every morning at 8"); w.pushes.length = 0;
  const service = createCheckinService({ settings: w.settings, state: w.state, circle: w.circle, notifications: w.notifications, devices: w.devices, push: async () => {}, memoryUserName: args => w.circle.userName(args), now: () => new Date("2026-09-20T05:30:00Z") });
  assert.deepEqual(await service.sendDue({ at: new Date("2026-09-20T05:30:00Z") }), { checked: 1, prompted: 1, alerted: 0, cleared: 0, skippedPaused: 0, skippedNoDevice: 0 });
  assert.equal(w.pushes[0].idempotencyKey, "checkin:u-baba:2026-09-20"); assert.equal(w.pushes[0].content.kind, "checkin");
  assert.match(w.pushes[0].content.body, /^Good day, Baba\. How are you today\?/);
  assert.equal((await service.sendDue({ at: new Date("2026-09-20T05:40:00Z") })).prompted, 0, "once a day");
  assert.equal((await service.sendDue({ at: new Date("2026-09-20T04:30:00Z") })).prompted, 0, "not before the time");
  const noDevice = createCheckinService({ settings: w.settings, state: { ...w.state, get: async () => null, create: async () => { throw new Error("must not record a check-in nobody could see"); } }, circle: w.circle, notifications: w.notifications, devices: { listPushable: async () => [] }, push: async () => {}, memoryUserName: async () => "B", now: () => new Date() });
  assert.equal((await noDevice.sendDue({ at: new Date("2026-09-20T05:30:00Z") })).skippedNoDevice, 1);
  const paused = createCheckinService({ settings: w.settings, state: { ...w.state, get: async () => null }, circle: w.circle, notifications: w.notifications, devices: w.devices, autonomyControl: { isPaused: async () => true }, push: async () => {}, memoryUserName: async () => "B", now: () => new Date() });
  assert.equal((await paused.sendDue({ at: new Date("2026-09-20T05:30:00Z") })).skippedPaused, 1);
});

test("a missed check-in tells only the members the person chose, once, tells the person too, and is cleared by saying they're okay", async () => {
  let clock = new Date("2026-09-20T05:00:00Z"); // 08:00 Nairobi
  const w = world(); w.now = clock;
  const companion = createCompanion({ circle: w.circle, checkinSettings: w.settings, checkinState: w.state, notifications: w.notifications, devices: w.devices, now: () => clock });
  const say = (text, userId = "u-baba") => companion.turn({ command: { text, tenantId: "t1", actorId: userId }, context: { timeZone: "Africa/Nairobi" } });
  await say("Add amina@example.com to my circle as my daughter"); await say("Accept the invitation from Baba", "u-amina"); await say("Add joseph@example.com to my circle as my son"); await say("Accept the invitation from Baba", "u-joseph");
  await say("Share my check-ins with Amina");
  await say("Check in on me every morning at 8"); w.pushes.length = 0;
  await companion.sendDue({ at: clock }); assert.equal(w.pushes.length, 1, "the prompt");
  clock = new Date("2026-09-20T07:30:00Z"); // 2.5 hours later: still within the grace period
  assert.equal((await companion.sendDue({ at: clock })).alerted, 0);
  clock = new Date("2026-09-20T08:10:00Z"); // 3h10 later, nothing heard
  const swept = await companion.sendDue({ at: clock });
  assert.equal(swept.alerted, 1);
  const alerts = w.pushes.filter(push => push.content.title === "Check-in missed");
  assert.deepEqual(alerts.map(push => push.userId), ["u-amina"], "Joseph was not chosen, so he is not told");
  assert.match(alerts[0].content.body, /^Baba Kamau hasn't answered their Kyro check-in today\. You may want to give them a call\.$/);
  assert.doesNotMatch(alerts[0].content.body, /okay|fine|sad|low/i, "no answers are ever included");
  const self = w.pushes.find(push => push.userId === "u-baba" && /couldn't reach you today/.test(push.content.body));
  assert.match(self.content.body, /so I let Amina Wanjiru know\. Say "I'm okay"/);
  assert.equal((await companion.sendDue({ at: clock })).alerted, 0, "only once");
  const cleared = await say("I'm okay");
  assert.match(cleared, /^Glad to hear it, Baba\. I've let your circle know you're fine\. Have a good day\.$/);
  assert.ok(w.pushes.some(push => push.userId === "u-amina" && push.content.body === "Baba Kamau has checked in and is okay."));
});

test("saying anything to Kyro counts as being there; with nobody chosen, a miss is recorded quietly", async () => {
  let clock = new Date("2026-09-20T05:00:00Z");
  const w = world();
  const companion = createCompanion({ circle: w.circle, checkinSettings: w.settings, checkinState: w.state, notifications: w.notifications, devices: w.devices, now: () => clock });
  const say = (text, userId = "u-baba") => companion.turn({ command: { text, tenantId: "t1", actorId: userId }, context: { timeZone: "Africa/Nairobi" } });
  await inCircle(w); await say("Check in on me every morning at 8"); await companion.sendDue({ at: clock });
  w.messages.add("u-baba"); clock = new Date("2026-09-20T08:30:00Z"); w.pushes.length = 0;
  const swept = await companion.sendDue({ at: clock });
  assert.deepEqual([swept.alerted, swept.cleared], [0, 1]); assert.equal(w.pushes.length, 0);
  assert.equal(w.checkinRows[0].status, "active");
  const w2 = world(); const c2 = createCompanion({ circle: w2.circle, checkinSettings: w2.settings, checkinState: w2.state, notifications: w2.notifications, devices: w2.devices, now: () => clock });
  clock = new Date("2026-09-20T05:00:00Z");
  await c2.turn({ command: { text: "Check in on me every morning at 8", tenantId: "t1", actorId: "u-baba" }, context: { timeZone: "Africa/Nairobi" } }); await c2.sendDue({ at: clock }); w2.pushes.length = 0;
  clock = new Date("2026-09-20T08:30:00Z"); await c2.sendDue({ at: clock });
  assert.equal(w2.checkinRows[0].status, "missed"); assert.equal(w2.pushes.length, 0, "nobody was chosen, so nobody is told");
});

test("a hard day is met with care, and Kyro tells the chosen people only when asked", async () => {
  const clock = new Date("2026-09-20T05:30:00Z");
  const w = world();
  const companion = createCompanion({ circle: w.circle, checkinSettings: w.settings, checkinState: w.state, notifications: w.notifications, devices: w.devices, now: () => clock });
  const say = (text, userId = "u-baba") => companion.turn({ command: { text, tenantId: "t1", actorId: userId }, context: { timeZone: "Africa/Nairobi" } });
  assert.equal(await say("I'm fine"), null, "no check-in waiting, so this is just talk");
  await inCircle(w); await say("Check in on me every morning at 8"); await companion.sendDue({ at: clock }); w.pushes.length = 0;
  assert.equal(await say("tell them"), null, "nothing to tell yet");
  const low = await say("Not so good");
  assert.match(low, /^I'm sorry it's a hard one\. I'm here to listen\. If you'd like, say "tell them" and I'll let Amina Wanjiru know you're having a hard day\.$/);
  assert.equal(w.pushes.length, 0, "not told until asked");
  assert.equal(await say("tell them"), "I've told Amina Wanjiru. I'm here too.");
  assert.equal(w.pushes[0].content.title, "A hard day"); assert.match(w.pushes[0].content.body, /^Baba Kamau is having a hard day and wanted you to know\./);
  assert.equal(await say("tell them"), "I've already told Amina Wanjiru.");
  assert.equal(w.pushes.length, 1);
});

// ---------- storage and wiring ----------
test("the check-in stores write only under their own job type and purpose, and never hard-delete", async () => {
  const calls = [];
  const db = { async query(sql, params) { calls.push({ sql, params }); return { rows: [{ memory_id: "m1", tenant_id: "t1", principal_id: "u1", owner_id: "u1", schedule_id: "sch_1", payload: { timeOfDay: "08:00", timeZone: "Africa/Nairobi", graceHours: 3 }, timezone: "Africa/Nairobi", content: { day: "2026-09-20", status: "pending" } }] }; } };
  const settings = new CheckinSettingsRepository(db); const state = new CheckinStateRepository(db);
  await settings.set({ tenantId: "t1", userId: "u1", timeOfDay: "08:00", timeZone: "Africa/Nairobi" });
  const insert = calls.find(call => /insert into nexus_schedules/.test(call.sql));
  assert.equal(insert.params[3], "checkin.daily"); assert.equal(insert.params[7], "2100-01-01T00:00:00.000Z");
  assert.deepEqual((await settings.listActive())[0], { scheduleId: "sch_1", tenantId: "t1", userId: "u1", timeOfDay: "08:00", timeZone: "Africa/Nairobi", graceHours: 3 });
  await state.create({ tenantId: "t1", userId: "u1", content: { day: "2026-09-20", status: "pending", promptedAt: "x" } });
  assert.match(calls.at(-1).sql, /'domain','checkin'/); assert.match(calls.at(-1).sql, /'sensitive'/);
  assert.equal((await state.listPending())[0].userId, "u1");
  assert.match(calls.at(-1).sql, /content->>'status'='pending'/);
  await state.hasActivitySince({ tenantId: "t1", userId: "u1", since: "2026-09-20T05:00:00Z" });
  assert.match(calls.at(-1).sql, /from nexus_messages where tenant_id=\$1 and actor_id=\$2 and role='user'/);
  assert.equal(calls.filter(call => /delete from/i.test(call.sql)).length, 0);
});

test("through the planner, safety comes before everything, ordinary messages cost nothing, and the worker runs the sweep", async () => {
  const w = world(); let lookups = 0;
  const counting = new Proxy(w.circle, { get(target, prop) { if (prop === "userName" || prop === "activeMembers" || prop === "listFor") lookups += 1; const value = target[prop]; return typeof value === "function" ? value.bind(target) : value; } });
  const companion = createCompanion({ circle: counting, checkinSettings: w.settings, checkinState: w.state, notifications: w.notifications, devices: w.devices, now: () => w.now });
  const modelCalls = [];
  const planner = new OpenEndedPlanner({ companion, memory: null, tools: { list: async () => [] }, applications: { list: () => [] }, model: { plan: async () => { modelCalls.push(1); throw new Error("the model must not answer a safety moment"); }, respond: async () => null } });
  const plan = text => planner.plan({ command: { text, channel: "typed", locale: "en", tenantId: "t1", actorId: "u-baba", conversationId: "c" }, context: { can: () => true, roles: [], timeZone: "Africa/Nairobi" } });
  const crisis = await plan("I want to die");
  assert.equal(crisis.application, "conversation"); assert.deepEqual(crisis.steps, []); assert.match(crisis.response, /I'm really sorry you're feeling this way/);
  assert.match((await plan("I need help now")).response, /^I don't have anyone in your circle yet/);
  assert.equal(modelCalls.length, 0);
  lookups = 0;
  await companion.turn({ command: { text: "What is the price of maize?", tenantId: "t1", actorId: "u-baba" }, context: {} });
  assert.equal(lookups, 0, "an ordinary message triggers no lookups at all");
  let ran = 0;
  const handlers = createHandlers({ runtime: { companion: { async sendDue() { ran += 1; return { checked: 1, prompted: 1 }; } } } });
  assert.deepEqual(await handlers["companion.checkin-sweep"]({ job: { payload: {} } }), { checked: 1, prompted: 1 }); assert.equal(ran, 1);
  assert.deepEqual(await createHandlers({ runtime: {} })["companion.checkin-sweep"]({ job: { payload: {} } }), { checked: 0, prompted: 0 });
});
