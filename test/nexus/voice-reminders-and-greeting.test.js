"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const { personalFirstName, spokenNameFromGreeting } = require("../../server/nexus-greeting-name.js");
const { hasReminderTimePhrase } = require("../../nexus/reminders/time-phrase.js");
const { completeRemainingWorkspacePlan } = require("../../nexus/brain/planner.js");
const { defaultApplicationManifests } = require("../../nexus/apps/default-manifests.js");

const server = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");

// ---- greeting name --------------------------------------------------------------------------------------------
// Production 2026-09-19: "Hello Nexus, this is Ron" -> "Hello Standard. I am Nexus..." (the account is "Standard User").
test("the name the person says wins, and only a capitalized name after a greeting counts", () => {
  for (const [text, name] of [["Hello Nexus, this is Ron", "Ron"], ["Hi, my name is Grace.", "Grace"], ["Good morning Kyro, this is Amina", "Amina"],
    ["hey Nexus this is Wanjiru, I need help", "Wanjiru"], ["HELLO NEXUS, THIS IS RON", "Ron"]])
    assert.equal(spokenNameFromGreeting(text), name, text);
  for (const text of ["Hello, this is urgent", "hello nexus this is ron", "Hey nexus, this is Standard", "Hello Nexus", "This is Ron", "I am Ron", "Hello, I am hungry",
    "hi my name is", "", null])
    assert.equal(spokenNameFromGreeting(text), "", String(text));
});

test("an account label is never used as a person's name", () => {
  assert.equal(personalFirstName({ name: "Ron Kamau" }), "Ron");
  for (const name of ["Standard User", "Platform Admin", "Guest 123", "admin", "Demo Account", "Test User", "  ", "", undefined])
    assert.equal(personalFirstName({ name }), "", String(name));
  assert.equal(personalFirstName(null), "");
});

test("the orchestrator context uses the spoken name first, then this account's own remembered name -- never another account's", () => {
  // 2026-09-24: db.profile.agentMemory.userName/userModel.name were a single
  // GLOBAL fallback shared by every account -- once anyone said "this is Ron",
  // every other account fell back to reading that same field. Fixed by
  // db.profile.userDisplayNames, keyed by the authenticated user's real id.
  assert.match(server, /userName: spokenNameFromGreeting\(command\) \|\| db\.profile\.userDisplayNames\?\.\[user\?\.id\] \|\| personalFirstName\(user\)/);
  assert.doesNotMatch(server, /userName: db\.profile\.agentMemory\?\.userName \|\| user\.name\?\.split/);
  assert.doesNotMatch(server, /db\.profile\.agentMemory\.userName/, "the shared-global fallback must be fully removed, not just given a better fallback in front of it");
  assert.doesNotMatch(server, /agentMemory\.userModel\?\.name/, "the shared-global userModel.name fallback must be fully removed");
  assert.match(server, /if \(spokenGreetingName && user\?\.id\) \{\s*db\.profile\.userDisplayNames = db\.profile\.userDisplayNames \|\| \{\};\s*db\.profile\.userDisplayNames\[user\.id\] = spokenGreetingName;\s*\}/);
});

// ---- voice reminders -> real push reminders ----------------------------------------------------------------------
const from = server.indexOf("function nexusSpokenReminderText(");
const to = server.indexOf("function nexusOpenAiNativeCreateLocalReminder(");
assert.ok(from > 0 && to > from, "the spoken reminder helpers must stay extractable");

function load({ signedIn = true, turn, acknowledge, listTurn } = {}) {
  const calls = { turns: [], acks: [] };
  const sandbox = {
    hasReminderTimePhrase, sanitizePilotText: value => String(value ?? "").replace(/\s+/g, " ").trim().slice(0, 500), String, Array, Error, Promise,
    authoritativeRuntimeUser: async user => (signedIn ? { id: "runtime-user", ...user } : null),
    authoritativeNexusRuntime: {
      behaviorTurnRequest: async input => { calls.turns.push(input); if (input.text === "Show my reminders.") { if (listTurn instanceof Error) throw listTurn; return listTurn; } if (turn instanceof Error) throw turn; return turn; },
      behaviorAcknowledgeRequest: async input => { calls.acks.push(input); if (acknowledge instanceof Error) throw acknowledge; return acknowledge || { completed: true }; }
    }
  };
  vm.createContext(sandbox);
  vm.runInContext(`${server.slice(from, to)}\nthis.text = nexusSpokenReminderText; this.create = nexusOpenAiNativeCreatePushReminder; this.list = nexusOpenAiNativeListPushReminders;`, sandbox);
  return { sandbox, calls };
}
const scheduled = { state: "render_required", taskId: "tsk_1", commandId: "cmd_1", correlationId: "c_1",
  render: { workspace: "reminders", data: { persisted: true, reminderId: "ntf_1", reminder: "test push", resolvedTime: "in 2 minutes", scheduledAt: "2026-09-20T05:00:00.000Z" } } };
const common = { toolName: "nexus_automation_reminder", command: "Remind me to test push in 2 minutes" };

test("the spoken text is built from the tool arguments, or the command, and only when it names a time", () => {
  const { sandbox } = load();
  assert.equal(sandbox.text({}, { title: "test push", when: "in 2 minutes" }), "Remind me to test push in 2 minutes");
  assert.equal(sandbox.text({}, { title: "Remind me to call Ron", when: "tomorrow at 9 am" }), "Remind me to call Ron tomorrow at 9 am");
  assert.equal(sandbox.text({ command: "Remind me to water the maize on Friday" }, {}), "Remind me to water the maize on Friday");
  assert.equal(sandbox.text({ command: "Remind me to water the maize" }, { title: "water the maize" }), "", "no time: never guess tomorrow");
  assert.equal(sandbox.text({ command: "Set a timer for 5 minutes" }, {}), "", "a command that is not a reminder is not one");
  assert.equal(sandbox.text({}, {}), "");
});

test("a confirmed spoken reminder becomes a real push reminder and says so", async () => {
  const { sandbox, calls } = load({ turn: scheduled });
  const result = await sandbox.create({ name: "Ron" }, common, { title: "test push", when: "in 2 minutes", confirmed: true }, "en");
  assert.equal(result.capability, "automation-reminder"); assert.equal(result.status, "reminder-scheduled");
  assert.equal(result.response, "I set a reminder to test push in 2 minutes. I will send it as a notification to your devices that have alerts turned on.");
  assert.equal(result.executionVerified, true); assert.equal(result.pushNotification, true); assert.equal(result.reminder.id, "ntf_1");
  assert.equal(calls.turns.length, 1); assert.equal(calls.turns[0].text, "Remind me to test push in 2 minutes"); assert.equal(calls.turns[0].channel, "voice");
  assert.equal(calls.acks[0].workspace, "reminders"); assert.equal(calls.acks[0].evidence.reminderId, "ntf_1"); assert.equal(calls.acks[0].audible, true);
});

test("when the pipeline cannot do it the caller falls back to the local reminder, and nothing is created twice", async () => {
  const cases = [
    ["no time phrase", load({ turn: scheduled }), { title: "water", when: "sometime" }, { ...common, command: "Remind me to water the maize" }],
    ["not signed in", load({ signedIn: false, turn: scheduled }), { title: "x", when: "in 2 minutes" }, common],
    ["needs confirmation", load({ turn: { ...scheduled, state: "confirmation_required" } }), { title: "x", when: "in 2 minutes" }, common],
    ["another workspace", load({ turn: { ...scheduled, render: { workspace: "lists", data: {} } } }), { title: "x", when: "in 2 minutes" }, common],
    ["not persisted", load({ turn: { ...scheduled, render: { workspace: "reminders", data: { persisted: false } } } }), { title: "x", when: "in 2 minutes" }, common],
    ["turn throws", load({ turn: new Error("runtime unavailable") }), { title: "x", when: "in 2 minutes" }, common]
  ];
  for (const [label, harness, args, ctx] of cases) {
    assert.equal(await harness.sandbox.create({ name: "Ron" }, ctx, args, "en"), null, label);
    assert.equal(harness.calls.acks.length, 0, `${label}: nothing acknowledged`);
  }
  const noTime = load({ turn: scheduled }); await noTime.sandbox.create({}, { ...common, command: "Remind me to water the maize" }, { title: "water", when: "sometime" }, "en");
  assert.equal(noTime.calls.turns.length, 0, "no time phrase: the pipeline is not even asked, so it cannot guess tomorrow");
});

test("a reminder that was saved is reported as saved even if acknowledging it fails (no local duplicate)", async () => {
  const { sandbox, calls } = load({ turn: scheduled, acknowledge: new Error("ack failed") });
  const result = await sandbox.create({}, common, { title: "test push", when: "in 2 minutes", confirmed: true }, "en");
  assert.equal(result.status, "reminder-scheduled"); assert.equal(result.executionVerified, false); assert.equal(calls.turns.length, 1);
  const notCompleted = load({ turn: scheduled, acknowledge: { completed: false } });
  assert.equal((await notCompleted.sandbox.create({}, common, { title: "t", when: "in 2 minutes" }, "en")).executionVerified, false);
});

test("listing includes the real push reminders and fails soft", async () => {
  const listTurn = { state: "render_required", taskId: "tsk_2", commandId: "c2", correlationId: "k2", render: { workspace: "reminders",
    data: { intent: "list_reminders", count: 2, reminders: ["test push (due 2026-09-20 05:00 UTC)", "call Ron (due 2026-09-21 09:00 UTC)"], reminderIds: ["ntf_1", "ntf_2"] } } };
  const { sandbox, calls } = load({ listTurn });
  const cards = JSON.parse(JSON.stringify(await sandbox.list({ name: "Ron" }, "en")));
  assert.deepEqual(cards, [{ id: "ntf_1", title: "test push (due 2026-09-20 05:00 UTC)", dueAt: "" }, { id: "ntf_2", title: "call Ron (due 2026-09-21 09:00 UTC)", dueAt: "" }]);
  assert.equal(calls.acks.length, 1, "the read-only turn is closed");
  for (const other of [load({ listTurn: { ...listTurn, state: "confirmation_required" } }), load({ listTurn: { ...listTurn, render: { workspace: "lists", data: { intent: "show" } } } }),
    load({ listTurn: new Error("down") }), load({ signedIn: false, listTurn })])
    assert.deepEqual(JSON.parse(JSON.stringify(await other.sandbox.list({}, "en"))), []);
});

test("the tool creates a push reminder only after confirmation, lists them, and otherwise behaves as before", () => {
  const branch = server.slice(server.indexOf('if (toolName === "nexus_automation_reminder") {'), server.indexOf('if (toolName === "nexus_lists") {'));
  assert.match(branch, /if \(args\.confirmed === true \|\| args\.confirmation === true\) \{\s*const pushed = await nexusOpenAiNativeCreatePushReminder\(user, common, args, language\);\s*if \(pushed\) return pushed;\s*\}\s*return nexusOpenAiNativeCreateLocalReminder\(db, user, common, args\);/);
  assert.match(branch, /const pushCards = await nexusOpenAiNativeListPushReminders\(user, language\);\s*const cards = \[\.\.\.pushCards, \.\.\.pilotCards, \.\.\.providerCards\];/);
  assert.match(server, /I need your explicit confirmation before I create it in Nexus memory/, "the confirmation gate for unconfirmed creation is unchanged");
});

test("the spoken time check agrees with the planner's own reminder matcher", () => {
  const catalog = { applications: defaultApplicationManifests(), tools: [{ toolId: "reminders.schedule" }] };
  for (const text of ["Remind me to test push in 2 minutes.", "Remind me to call Ron in 3 hours", "Remind me on Friday to order supplies", "Remind me later today to check the pump",
    "Remind me tomorrow at 9 AM to check my crops", "Remind me at 5:30 pm to close the gate", "Remind me to be kind", "Remind me to rest sometime"]) {
    assert.equal(hasReminderTimePhrase(text), Boolean(completeRemainingWorkspacePlan(text, catalog)?.steps?.[0]?.toolId === "reminders.schedule"), text);
  }
});
