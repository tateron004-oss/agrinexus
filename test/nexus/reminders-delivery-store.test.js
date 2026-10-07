"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { spawn } = require("node:child_process");
const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const { createDeliveryReminders } = require("../../nexus/reminders/delivery-store.js");
const { createMemoryNotifications } = require("../../nexus/reminders/memory-stores.js");

// A reminder set by voice or in the command box used to be written to a list that nothing delivers (db.profile.assistantReminders): it said "Done" and never arrived. One-time reminders
// asked for on the older route now go to the delivery store (the queue the worker sends as push), with the resolved UTC time, the person's zone, clean words and the person as owner. If that
// store cannot be reached the person is told the reminder was NOT saved. Reminders made before this change are moved in once, and nobody else can see or cancel anyone's.

const when = minutes => new Date(Date.now() + minutes * 60000).toISOString();

test("the delivery store keeps the resolved time, the zone and clean words, for the owner only", async () => {
  const notifications = createMemoryNotifications();
  const ada = createDeliveryReminders({ notifications, tenantId: "t1", userId: "ada" });
  const ben = createDeliveryReminders({ notifications, tenantId: "t1", userId: "ben" });
  const saved = await ada.schedule({ task: "take my medicine", scheduledAt: "2026-10-08T06:00:00.000Z", whenLabel: "at 9:00 am tomorrow", timeZone: "Africa/Nairobi", correlationId: "c-1" });
  assert.equal(saved.duplicate, false);
  const [row] = notifications.rows;
  assert.deepEqual([row.tenant_id, row.user_id, row.channel, row.state, row.scheduled_at.toISOString()], ["t1", "ada", "push", "queued", "2026-10-08T06:00:00.000Z"]);
  assert.deepEqual([row.content.reminderText, row.content.body, row.content.timeZone, row.content.whenLabel, row.content.title], ["take my medicine", "take my medicine", "Africa/Nairobi", "at 9:00 am tomorrow", "Nexus reminder"]);
  // two accounts: Ben sees none of Ada's, cannot cancel or change hers, and cancel-all touches only his own
  await ben.schedule({ task: "feed the goats", scheduledAt: when(60), timeZone: "Africa/Lagos" });
  assert.deepEqual((await ben.list()).map(item => item.task), ["feed the goats"]);
  assert.deepEqual((await ada.list()).map(item => item.task), ["take my medicine"]);
  assert.equal(await ben.cancel(saved.reminder.id), false, "someone else's reminder cannot be cancelled");
  assert.deepEqual(await ben.change(saved.reminder.id, { scheduledAt: when(5), whenLabel: "x", timeZone: "UTC" }), { ok: false, reason: "not_found" });
  assert.equal(await ben.cancelAll(), 1);
  assert.equal((await ada.list()).length, 1, "Ada's reminder is untouched");
  const otherTenant = createDeliveryReminders({ notifications, tenantId: "t2", userId: "ada" });
  assert.deepEqual(await otherTenant.list(), [], "the same user id in another business is someone else");
});

test("the same request twice is one reminder: same correlation id, or the same words within 90 seconds", async () => {
  const notifications = createMemoryNotifications();
  const store = createDeliveryReminders({ notifications, tenantId: "t1", userId: "ada" });
  const first = await store.schedule({ task: "Pay the school fees", scheduledAt: when(60), correlationId: "retry-1" });
  const again = await store.schedule({ task: "pay the school fees", scheduledAt: when(300), correlationId: "retry-1" });
  assert.equal(again.duplicate, true); assert.equal(again.reminder.id, first.reminder.id);
  const near = await store.schedule({ task: "pay the school fees", scheduledAt: new Date(Date.parse(first.reminder.scheduledAt) + 60000).toISOString() });
  assert.equal(near.duplicate, true);
  const far = await store.schedule({ task: "pay the school fees", scheduledAt: new Date(Date.parse(first.reminder.scheduledAt) + 10 * 60000).toISOString() });
  assert.equal(far.duplicate, false);
  const other = await store.schedule({ task: "pay the rent", scheduledAt: first.reminder.scheduledAt });
  assert.equal(other.duplicate, false);
  assert.equal(notifications.rows.length, 3);
  // three at once with one correlation id: one row
  const racing = createDeliveryReminders({ notifications: createMemoryNotifications(), tenantId: "t1", userId: "ada" });
  await Promise.all([1, 2, 3].map(() => racing.schedule({ task: "collect the parcel", scheduledAt: when(30), correlationId: "same" })));
  assert.equal((await racing.list()).length, 1);
});

test("changing a time never leaves two live reminders or none; a legacy reminder moved in twice is moved once", async () => {
  const notifications = createMemoryNotifications();
  const store = createDeliveryReminders({ notifications, tenantId: "t1", userId: "ada" });
  const made = await store.schedule({ task: "call the vet", scheduledAt: when(60), timeZone: "Africa/Nairobi" });
  const changed = await store.change(made.reminder.id, { scheduledAt: "2026-10-09T07:00:00.000Z", whenLabel: "at 10:00 am on Friday, 9 October", timeZone: "Africa/Nairobi" });
  assert.equal(changed.ok, true);
  const live = await store.list();
  assert.equal(live.length, 1); assert.equal(live[0].task, "call the vet"); assert.equal(live[0].scheduledAt, "2026-10-09T07:00:00.000Z"); assert.notEqual(live[0].id, made.reminder.id);
  assert.equal((await store.change(made.reminder.id, { scheduledAt: when(5), whenLabel: "x" })).ok, false, "the old id is no longer upcoming");
  assert.equal((await store.list()).length, 1);
  const a = await store.schedule({ task: "old reminder", scheduledAt: when(120), legacyId: "leg-1" });
  const b = await store.schedule({ task: "old reminder", scheduledAt: when(120), legacyId: "leg-1" });
  assert.equal(a.reminder.id, b.reminder.id);
  assert.equal((await store.list()).filter(item => item.task === "old reminder").length, 1);
  assert.equal(await store.cancelAll(), 2);
});

// ---- through the real server ----
const root = path.resolve(__dirname, "..", "..");
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
async function startServer(port, { memory, legacy = [] }) {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "reminders-delivery-"));
  const db = JSON.parse(fs.readFileSync(path.join(root, "db.json"), "utf8"));
  db.profile = db.profile || {}; db.profile.assistantReminders = legacy;
  fs.writeFileSync(path.join(dir, "db.json"), JSON.stringify(db));
  const child = spawn(process.execPath, ["server.js"], { cwd: root, stdio: "ignore", windowsHide: true, env: { ...process.env, PORT: String(port), AGRINEXUS_DB_PATH: path.join(dir, "db.json"), AGRINEXUS_SPACES_PATH: path.join(dir, "spaces.json"),
    OPENAI_API_KEY: "", DATABASE_URL: "", NEXUS_DISABLE_LOCAL_ENV_FILES: "true", AGRINEXUS_TRUST_PROXY: "true", AGRINEXUS_AI_AGENT_RATE_LIMIT_PER_WINDOW: "100000", AGRINEXUS_RATE_LIMIT_PER_WINDOW: "100000",
    ...(memory ? { NEXUS_TEST_REMINDER_STORE: "memory" } : { NEXUS_TEST_REMINDER_STORE: "" }) } });
  const base = `http://127.0.0.1:${port}`;
  for (let i = 0; i < 100; i += 1) { try { if ((await fetch(`${base}/api/healthz`)).ok) break; } catch { await sleep(150); } }
  const login = async (email, password) => { const res = await fetch(`${base}/api/login`, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ email, password }) }); assert.equal(res.status, 200, email); return (res.headers.getSetCookie?.() || []).map(item => item.split(";")[0]).join("; "); };
  const say = async (cookie, command, extra = {}) => { const res = await fetch(`${base}/api/agent/command`, { method: "POST", headers: { "content-type": "application/json", cookie }, body: JSON.stringify({ command, ...extra }) }); const body = await res.json(); return body.commandResult || body; };
  return { base, login, say, stop() { child.kill(); fs.rmSync(dir, { recursive: true, force: true }); } };
}
const legacyReminder = (number, task, minutes, extra = {}) => ({ id: `legacy-${number}`, reminderNumber: `REM-00${number}`, task, scheduledAt: when(minutes), whenLabel: "soon", module: "Agent AI", section: "agent", status: "scheduled", sourceCommand: task, createdBy: "user@agrinexus.org", createdAt: when(-100 + number), ...extra });

test("with a delivery store: reminders go there, other accounts never see or cancel them, and older ones are moved in once", async () => {
  const server = await startServer(15951, { memory: true, legacy: [legacyReminder(1, "send the invoice", 180), legacyReminder(2, "an old missed one", -600), { ...legacyReminder(3, "someone else's reminder", 90), createdBy: "admin@agrinexus.org" }] });
  try {
    const ada = await server.login("user@agrinexus.org", "User2026!");
    const admin = await server.login("admin@agrinexus.org", "Admin2026!");
    const made = await server.say(ada, "remind me in 30 minutes to take my medicine");
    assert.equal(made.intent, "assistant.reminder_scheduled"); assert.equal(made.metadata.delivery, "push");
    assert.match(made.response, /take my medicine in 30 minutes, at \d{1,2}:\d{2} (?:am|pm) (?:today|tomorrow)/);
    // her own list: the new one, the older future one (moved in), the old missed one; and never the other account's
    const mine = (await server.say(ada, "what reminders do I have")).metadata.reminders;
    assert.deepEqual(mine.map(item => item.task).sort(), ["an old missed one", "send the invoice", "take my medicine"]);
    const again = (await server.say(ada, "what reminders do I have")).metadata.reminders;
    assert.equal(again.length, 3, "moving the older one in does not list it twice");
    const medicine = again.find(item => item.task === "take my medicine");
    assert.ok(Math.abs(Date.parse(medicine.scheduledAt) - Date.now() - 30 * 60000) < 120000, "stored 30 minutes ahead");
    assert.equal(medicine.timeZone, "Africa/Lagos");
    // the same request again is not a second reminder
    assert.equal((await server.say(ada, "remind me in 30 minutes to take my medicine")).intent, "assistant.reminder_duplicate");
    assert.equal((await server.say(ada, "what reminders do I have")).metadata.reminders.length, 3);
    // the other account sees only its own, and cannot cancel or change hers
    const theirs = await server.say(admin, "what reminders do I have");
    assert.deepEqual(theirs.metadata.reminders.map(item => item.task), ["someone else's reminder"], "only the other account's own (older) reminder");
    assert.equal((await server.say(admin, "cancel my reminder to take my medicine")).intent, "assistant.no_reminder_to_cancel");
    assert.equal((await server.say(admin, "change my medicine reminder to 10pm")).intent, "assistant.no_reminder_to_change");
    const wiped = await server.say(admin, "cancel all my reminders"); assert.match(wiped.response, /Cancel all 1 reminder\?/);
    assert.match((await server.say(admin, "yes")).response, /canceled all 1 reminder/);
    assert.equal((await server.say(ada, "what reminders do I have")).metadata.reminders.length, 3, "hers are untouched");
    // change and cancel work on a delivery reminder and on one that was moved in
    assert.match((await server.say(ada, "change my medicine reminder to tomorrow at 7am")).response, /it is now at 7:00 am tomorrow/);
    const changed = (await server.say(ada, "what reminders do I have")).metadata.reminders.find(item => item.task === "take my medicine");
    assert.equal(new Date(changed.scheduledAt).getUTCHours(), 6, "7am in Lagos is 06:00 UTC");
    assert.match((await server.say(ada, "cancel my reminder to send the invoice")).response, /Canceled REM-001: send the invoice\./);
    assert.deepEqual((await server.say(ada, "what reminders do I have")).metadata.reminders.map(item => item.task).sort(), ["an old missed one", "take my medicine"]);
  } finally { server.stop(); }
});

test("without a delivery store a reminder is NOT saved and nothing is written to the legacy list; older ones can still be seen and cancelled", async () => {
  const server = await startServer(15952, { memory: false, legacy: [legacyReminder(1, "send the invoice", 180)] });
  try {
    const ada = await server.login("user@agrinexus.org", "User2026!");
    for (const command of ["remind me in 30 minutes to take my medicine", "remind me tomorrow at 9am to call the vet"]) {
      const said = await server.say(ada, command);
      assert.equal(said.intent, "assistant.reminder_not_saved", command);
      assert.match(said.response, /NOT saved/); assert.doesNotMatch(said.response, /^(?:Got it\. )?(?:Done|Sawa)\b/);
    }
    const sw = await server.say(ada, "nikumbushe baada ya dakika 30 kunywa dawa", { language: "sw" });
    assert.match(sw.response, /HAKIJAHIFADHIWA/);
    const listed = await server.say(ada, "what reminders do I have");
    assert.deepEqual(listed.metadata.reminders.map(item => item.task), ["send the invoice"], "nothing new in the legacy list");
    assert.match(listed.response, /may be missing some/);
    assert.match((await server.say(ada, "cancel my reminder to send the invoice")).response, /Canceled REM-001/);
    const empty = await server.say(ada, "what reminders do I have");
    assert.equal(empty.intent, "assistant.reminders_unreachable");
    assert.match(empty.response, /cannot reach the reminders/);
  } finally { server.stop(); }
});
