"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const { createServerRuntimeAdapter } = require("../../nexus/compat/server-runtime-adapter.js");
const { createWaitingApprovalsApi } = require("../../nexus/compat/waiting-approvals.js");

// "Ask first" autonomy: what Kyro drafted on its own (a follow-up message to a client) is shown to the person in full, with Send it / Do not send,
// and nothing is sent until they tap. This is the read side (the draft itself is made by the follow-up sweep, test/nexus/situational-awareness-lead-followup-sweep.test.js).

const stepWith = (input, extra = {}) => ({ step_id: "stp_send", sequence: 2, tool_id: "communications.send", state: "pending", confirmation_state: "required", input, ...extra });

function engineWith(tasksByOwner, stepsByTask) {
  const calls = [];
  return { calls, tasks: {
    list: async args => { calls.push(args); return (tasksByOwner[args.ownerId] || []).filter(task => task.state === args.state); },
    get: async ({ taskId }) => ({ ...tasksByOwner._all.find(task => task.taskId === taskId), steps: stepsByTask[taskId] || [] })
  } };
}

test("a drafted message waiting for a yes is returned with its recipient and exact words, for its owner only", async () => {
  const mine = { taskId: "tsk_1", goal: "Draft a follow-up email to Grace Otieno for Grace Chapel", state: "awaiting_confirmation", autonomous: true };
  const theirs = { taskId: "tsk_2", goal: "Someone else's draft", state: "awaiting_confirmation", autonomous: true };
  const engine = engineWith({ u1: [mine], u2: [theirs], _all: [mine, theirs] }, {
    tsk_1: [{ step_id: "stp_r", sequence: 1, tool_id: "reminders.schedule", state: "completed", confirmation_state: "not_required", input: {} },
      stepWith({ channel: "email", to: "grace@example.org", subject: "Following up -- Grace Chapel", message: "Hi Grace Otieno, this is a follow-up from Grace Chapel." })],
    tsk_2: [stepWith({ channel: "sms", to: "+254700000001", message: "Private to someone else" })]
  });
  const result = await createWaitingApprovalsApi(engine).list({ context: { tenantId: "t1", userId: "u1" } });
  assert.equal(result.status, 200);
  assert.equal(result.body.approvals.length, 1);
  assert.deepEqual(result.body.approvals[0], { taskId: "tsk_1", stepId: "stp_send", goal: mine.goal, autonomous: true, channel: "email", to: "grace@example.org",
    subject: "Following up -- Grace Chapel", message: "Hi Grace Otieno, this is a follow-up from Grace Chapel." });
  assert.equal(engine.calls[0].ownerId, "u1", "asks for the signed-in person's own tasks");
  assert.equal(engine.calls[0].state, "awaiting_confirmation");
  assert.ok(!JSON.stringify(result.body).includes("Private to someone else"));
});

test("only a message that Kyro would send is shown with buttons; other waiting steps and incomplete drafts are left as plain lines", async () => {
  const tasks = [{ taskId: "tsk_a", goal: "Save a health reading", state: "awaiting_confirmation" }, { taskId: "tsk_b", goal: "Draft with no words", state: "awaiting_confirmation" }, { taskId: "tsk_c", goal: "Already sent step", state: "awaiting_confirmation" }];
  const engine = engineWith({ u1: tasks, _all: tasks }, {
    tsk_a: [{ step_id: "s1", sequence: 1, tool_id: "health.record", state: "pending", confirmation_state: "required", input: { value: 1 } }],
    tsk_b: [stepWith({ channel: "sms", to: "+254700000001", message: "" })],
    tsk_c: [stepWith({ channel: "sms", to: "+254700000001", message: "Hello" }, { state: "completed" })]
  });
  const result = await createWaitingApprovalsApi(engine).list({ context: { tenantId: "t1", userId: "u1" } });
  assert.deepEqual(result.body.approvals, []);
});

test("a failure reading tasks says so plainly and leaks nothing", async () => {
  const engine = { tasks: { list: async () => { throw new Error("db password=secret"); } } };
  const result = await createWaitingApprovalsApi(engine).list({ context: { tenantId: "t1", userId: "u1" } });
  assert.equal(result.status, 500);
  assert.ok(!JSON.stringify(result.body).includes("secret"));
});

test("GET /api/nexus/runtime/waiting-approvals is served for a signed-in person and refused when signed out", async () => {
  const task = { taskId: "tsk_1", goal: "Draft a follow-up", state: "awaiting_confirmation", autonomous: true };
  const engine = engineWith({ u1: [task], _all: [task] }, { tsk_1: [stepWith({ channel: "sms", to: "+254700000001", message: "Hi" })] });
  const runtime = { ready: Promise.resolve(), engine };
  const adapter = createServerRuntimeAdapter({ resolveUser: async req => (req.signedIn ? { id: "u1", tenantId: "t1", role: "Standard User", permissions: [] } : null),
    readJson: async () => ({}), createRuntimeFn: () => runtime });
  const capture = {}; const send = (_res, status, body) => { capture.status = status; capture.body = body; };
  await adapter.handle({ method: "GET", headers: {}, signedIn: true }, {}, new URL("http://local/api/nexus/runtime/waiting-approvals"), send);
  assert.equal(capture.status, 200); assert.equal(capture.body.approvals[0].to, "+254700000001");
  const out = {}; await adapter.handle({ method: "GET", headers: {} }, {}, new URL("http://local/api/nexus/runtime/waiting-approvals"), (_r, s, b) => { out.status = s; out.body = b; });
  assert.equal(out.status, 401);
});

// the screen
const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
const sliceFn = name => { const start = app.indexOf(name); assert.ok(start >= 0, name); return app.slice(start, app.indexOf("\n}\n", start) + 3); };

test("drafted tasks are left out of the plain waiting list and counted in what is said", () => {
  const { kyroActivityGroups, kyroActivitySummary } = new vm.Script(sliceFn("function kyroActivityGroups(") + sliceFn("function kyroActivitySummary(") + "({ kyroActivityGroups, kyroActivitySummary })")
    .runInNewContext({ kyroPlainText: text => String(text), Date, Number, Array, Set, String, Object });
  const tasks = [{ taskId: "tsk_1", goal: "Draft a follow-up email", state: "awaiting_confirmation", autonomous: true }, { taskId: "tsk_2", goal: "Send a text to Amina", state: "awaiting_confirmation" }];
  const groups = JSON.parse(JSON.stringify(kyroActivityGroups(tasks, Date.now(), new Set(["tsk_1"]))));
  assert.deepEqual(groups.waiting, ["Send a text to Amina"]);
  assert.match(kyroActivitySummary(groups, 1), /^1 message is drafted and waiting for your yes: nothing is sent until you tap Send it or say send it. 1 thing is waiting for your yes\.$/);
  assert.match(kyroActivitySummary({ waiting: [], doing: [], done: [], stuck: [] }, 2), /^2 messages are drafted/);
});

test("the draft card sends only on a tap of Send it, cancels on Do not send, and the screen itself still changes nothing", () => {
  const card = sliceFn("function kyroDraftCard(");
  assert.match(card, /yes\.addEventListener\("click", \(\) => \{ void decide\(true\); \}\)/);
  assert.match(card, /no\.addEventListener\("click", \(\) => \{ void decide\(false\); \}\)/);
  assert.match(card, /\/api\/nexus\/runtime\/behavior\/confirm/);
  assert.equal((card.match(/behavior\/confirm/g) || []).length, 1, "one place sends, and only inside the click handler");
  assert.match(card, /taskId: draft\.taskId, stepId: draft\.stepId, approved/);
  const screen = sliceFn("async function kyroShowActivityScreen(");
  assert.match(screen, /\/api\/nexus\/runtime\/waiting-approvals/);
  assert.ok(!/method: "POST"|method: "DELETE"/.test(screen), "opening the screen sends nothing");
  assert.match(app, /"Send it": "Itume", "Do not send": "Usitume"/);
});

// spoken yes / no for a drafted message that is on the screen
const sliceConst = name => { const start = app.indexOf(name); assert.ok(start >= 0, name); return app.slice(start, app.indexOf(";\n", start) + 2); };
function voiceWorld(cardCount, { askedMsAgo = 1000 } = {}) {
  const pressed = []; const spoken = []; let taken = 0;
  const cards = Array.from({ length: cardCount }, (_, i) => ({ isConnected: true,
    querySelector: () => ({}), querySelectorAll: () => [{ click: () => pressed.push(i + ":send") }, { click: () => pressed.push(i + ":hold") }] }));
  const context = { document: { querySelectorAll: () => cards }, Date, String, Array, kyroTakeOverTurn: () => { taken += 1; }, setVoiceResponse: text => spoken.push(text) };
  const source = ["let kyroDraftAskedAt", "const KYRO_DRAFT_SEND", "const KYRO_DRAFT_HOLD", "const KYRO_DRAFT_BARE_YES", "const KYRO_DRAFT_BARE_NO"].map(sliceConst).join("\n")
    + sliceFn("function kyroDraftVoiceReply(") + "\nkyroDraftAskedAt = Date.now() - " + askedMsAgo + ";\n({ reply: kyroDraftVoiceReply })";
  const { reply } = new vm.Script(source).runInNewContext(context);
  return { reply, pressed, spoken, taken: () => taken };
}

test("'send it' presses Send it and 'don't send it' presses Do not send, only while a draft is showing", () => {
  const world = voiceWorld(1);
  assert.equal(world.reply("Send it."), true); assert.equal(world.reply("Yes, send it"), true); assert.equal(world.reply("Don't send it."), true); assert.equal(world.reply("No, do not send the message"), true);
  assert.deepEqual(world.pressed, ["0:send", "0:send", "0:hold", "0:hold"]);
  assert.equal(world.taken(), 4, "the voice model is cut off so it does not answer too");
  const unrelated = voiceWorld(1);
  for (const said of ["Send my invoice to Grace", "I will send it tomorrow", "Open documents", "What is the weather", "Send it to Amina"]) assert.equal(unrelated.reply(said), false, said);
  assert.deepEqual(unrelated.pressed, []);
  const none = voiceWorld(0);
  assert.equal(none.reply("Send it."), false, "no draft showing: nothing is sent and the sentence is left for the rest of Kyro");
});

test("a plain yes or no counts only soon after the screen asked, and with two drafts showing nothing is pressed", () => {
  const soon = voiceWorld(1, { askedMsAgo: 5000 });
  assert.equal(soon.reply("Yes."), true); assert.equal(soon.reply("No."), true);
  assert.deepEqual(soon.pressed, ["0:send", "0:hold"]);
  const late = voiceWorld(1, { askedMsAgo: 10 * 60 * 1000 });
  assert.equal(late.reply("Yes."), false); assert.equal(late.reply("No"), false); assert.deepEqual(late.pressed, []);
  const two = voiceWorld(2);
  assert.equal(two.reply("Send it."), true);
  assert.deepEqual(two.pressed, [], "which one is not guessed");
  assert.match(two.spoken[0], /More than one message is waiting/);
});

test("the spoken reply is tried before the general yes/no handling, and the result of a send is said aloud", () => {
  const route = app.slice(app.indexOf("function routeKyroVoiceIntakeTranscript("));
  assert.ok(route.indexOf("kyroDraftVoiceReply(trimmed)") > 0 && route.indexOf("kyroDraftVoiceReply(trimmed)") < route.indexOf("detectNexusPendingConfirmationReply(trimmed)"));
  assert.match(sliceFn("function kyroDraftCard("), /setVoiceResponse\(note\.textContent, true/);
});
