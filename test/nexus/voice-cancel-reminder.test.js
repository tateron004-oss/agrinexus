"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const { createServerRuntimeAdapter } = require("../../nexus/compat/server-runtime-adapter.js");

const server = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");
const from = server.indexOf("const NEXUS_REMINDER_STOP_WORDS = ");
const to = server.indexOf("function nexusOpenAiNativeCreateLocalReminder(");
assert.ok(from > 0 && to > from, "the cancel helpers must stay extractable");

// Production 2026-09-20: "Cancel my reminder about check the pump" answered "not found" for a reminder titled
// "check the pump": the query was stripped of "the" but the stored title was not.
function load({ signedIn = true, turns = [], confirmTurn, acknowledge } = {}) {
  const calls = { turns: [], confirms: [], acks: [] };
  const queue = [...turns];
  const sandbox = { String, Array, Set, Boolean, Error, Promise,
    authoritativeRuntimeUser: async user => (signedIn ? { id: "runtime-user", ...user } : null),
    authoritativeNexusRuntime: {
      behaviorTurnRequest: async input => { calls.turns.push(input); const next = queue.shift(); if (next instanceof Error) throw next; return next; },
      behaviorConfirmRequest: async input => { calls.confirms.push(input); if (confirmTurn instanceof Error) throw confirmTurn; return confirmTurn; },
      behaviorAcknowledgeRequest: async input => { calls.acks.push(input); if (acknowledge instanceof Error) throw acknowledge; return { completed: true }; }
    } };
  vm.createContext(sandbox);
  vm.runInContext(`${server.slice(from, to)}\nthis.key = nexusReminderMatchKey; this.matches = nexusReminderTitleMatches; this.pushText = nexusPushReminderText; this.candidates = nexusReminderCancelCandidates; this.cancel = nexusOpenAiNativeCancelPushReminder;`, sandbox);
  return { sandbox, calls };
}

test("a query and a stored title are compared the same way, so words like 'the' no longer break the match", () => {
  const { sandbox } = load();
  assert.equal(sandbox.matches("check the pump", "Cancel my reminder about check the pump"), true);
  assert.equal(sandbox.matches("Change my reminder about the pump to tomorrow at 9am.", "cancel my reminder about the pump"), true);
  assert.equal(sandbox.matches("Water the maize on Friday", "cancel reminder to water the maize"), true, "'to' and 'the' are ignored on both sides");
  assert.equal(sandbox.matches("check the pump", "please cancel the reminder about the pump"), true);
  assert.equal(sandbox.matches("check the pump", "cancel my reminder about the pumpkin"), false, "whole words only: pump is not pumpkin");
  assert.equal(sandbox.matches("check the pump", "cancel my reminder"), false, "nothing left to match on");
  assert.equal(sandbox.matches("check the pump", "cancel that reminder"), false);
  assert.equal(sandbox.matches("check the pump", ""), false);
  assert.equal(sandbox.key("Cancel MY reminder, about the Pump!"), "pump");
});

test("push reminders are listed as '<text> (due ...)' and matched on the text only", () => {
  const { sandbox } = load();
  assert.equal(sandbox.pushText("test push (due 2026-09-20 04:15 UTC)"), "test push");
  assert.equal(sandbox.pushText("call Ron (asap) (due 2026-09-21 09:00 UTC)"), "call Ron (asap)");
  assert.equal(sandbox.pushText("no due part"), "no due part");
  const { candidates } = sandbox.candidates("Cancel my reminder about test push", [{ id: "l1", title: "check the pump" }],
    [{ id: "ntf_1", title: "test push (due 2026-09-20 04:15 UTC)" }, { id: "ntf_2", title: "call Ron (due 2026-09-21 09:00 UTC)" }]);
  assert.deepEqual(JSON.parse(JSON.stringify(candidates)), [{ kind: "push", id: "ntf_1", title: "test push" }]);
});

test("local and push reminders are considered together, and two matches are ambiguous, never guessed", () => {
  const { sandbox } = load();
  const all = sandbox.candidates("cancel my reminder about the pump",
    [{ id: "l1", title: "check the pump" }, { id: "l2", title: "Change my reminder about the pump to tomorrow at 9am." }], [{ id: "ntf_1", title: "service the pump (due 2026-09-20 04:15 UTC)" }]);
  assert.equal(all.candidates.length, 3);
  assert.deepEqual(JSON.parse(JSON.stringify(all.candidates.map(item => item.kind))), ["push", "local", "local"]);
  assert.equal(sandbox.candidates("cancel my reminder", [{ id: "l1", title: "check the pump" }], []).candidates.length, 0, "an empty query matches nothing, not everything");
  assert.equal(sandbox.candidates("cancel it", [], []).query, "it");
});

test("a push reminder is cancelled through the authoritative cancel, confirming the step the person already confirmed", async () => {
  const cancelled = { state: "render_required", taskId: "tsk_9", commandId: "c9", correlationId: "k9", render: { workspace: "reminders", data: { cancelled: true, reminder: "test push", reminderId: "ntf_1" } } };
  const { sandbox, calls } = load({ turns: [{ state: "confirmation_required", taskId: "tsk_9", outcome: { pendingStepId: "stp_1" } }], confirmTurn: cancelled });
  const result = await sandbox.cancel({ name: "Ron" }, "test push", "en");
  assert.deepEqual(JSON.parse(JSON.stringify(result)), { ok: true, reminder: "test push", reminderId: "ntf_1" });
  assert.equal(calls.turns[0].text, "Cancel my reminder about test push"); assert.equal(calls.turns[0].channel, "voice");
  assert.deepEqual(JSON.parse(JSON.stringify(calls.confirms[0])).taskId, "tsk_9"); assert.equal(calls.confirms[0].stepId, "stp_1"); assert.equal(calls.confirms[0].approved, true);
  assert.equal(calls.acks[0].evidence.cancelled, true);
});

test("cancel failures are reported, not claimed: not found, not cancelled, no runtime, errors", async () => {
  const noMatch = load({ turns: [{ state: "render_required", render: { workspace: "reminders", data: { cancelled: false, reason: "not_found" } } }] });
  assert.deepEqual(JSON.parse(JSON.stringify(await noMatch.sandbox.cancel({}, "x", "en"))), { ok: false, reason: "not_found" });
  assert.equal(noMatch.calls.confirms.length, 0);
  assert.equal(await load({ signedIn: false, turns: [{}] }).sandbox.cancel({}, "x", "en"), null);
  assert.equal(await load({ turns: [new Error("down")] }).sandbox.cancel({}, "x", "en"), null);
  const confirmFails = load({ turns: [{ state: "confirmation_required", taskId: "t", outcome: { pendingStepId: "s" } }], confirmTurn: new Error("confirm failed") });
  assert.equal(await confirmFails.sandbox.cancel({}, "x", "en"), null);
});

test("the tool matches with the shared normalization, includes push reminders, and keeps its gates", () => {
  const branch = server.slice(server.indexOf("const wantsCancelReminder = "), server.indexOf("if (toolName === \"nexus_lists\") {"));
  assert.match(branch, /const pushCards = await nexusOpenAiNativeListPushReminders\(user, language\);\s*const \{ candidates: matches \} = nexusReminderCancelCandidates\(command, db\.nexusPilotReminders \|\| \[\], pushCards\);/);
  assert.match(branch, /status: "confirmation-required"/, "cancelling still needs explicit confirmation");
  assert.match(branch, /status: "reminder-ambiguous"/); assert.match(branch, /status: "reminder-not-found"/);
  assert.match(branch, /if \(match\.kind === "push"\) \{[\s\S]*nexusOpenAiNativeCancelPushReminder\(user, match\.title, language\)/);
  assert.doesNotMatch(branch, /includes\(titleQuery\)/, "the old one-sided substring comparison is gone");
  assert.match(branch, /db\.nexusPilotReminders = db\.nexusPilotReminders\.filter\(reminder => reminder\.id !== match\.id\);/, "local reminders are still removed as before");
});

test("the adapter can confirm a pending step in-process, like the HTTP confirm route", async () => {
  const seen = [];
  const adapter = createServerRuntimeAdapter({ env: {}, resolveUser: async () => null, readJson: async () => ({}),
    createRuntimeFn: () => ({ ready: Promise.resolve(), behavior: { confirm: async value => { seen.push(value); return { state: "render_required" }; } } }) });
  const result = await adapter.behaviorConfirmRequest({ taskId: "tsk_1", stepId: "stp_1", approved: true, text: "Confirmed.", channel: "voice", user: { id: "u", tenantId: "t", permissions: [] } });
  assert.equal(result.state, "render_required");
  assert.deepEqual([seen[0].input.taskId, seen[0].input.stepId, seen[0].input.approved, seen[0].input.channel, seen[0].input.text], ["tsk_1", "stp_1", true, "voice", "Confirmed."]);
  assert.equal(seen[0].context.userId, "u");
  const declined = await adapter.behaviorConfirmRequest({ taskId: "t", stepId: "s", approved: "yes", user: { id: "u", tenantId: "t", permissions: [] } });
  assert.equal(seen[1].input.approved, false, "only a real true approves");
  const missing = createServerRuntimeAdapter({ env: {}, resolveUser: async () => null, readJson: async () => ({}), createRuntimeFn: () => ({ ready: Promise.resolve(), behavior: {} }) });
  await assert.rejects(() => missing.behaviorConfirmRequest({ taskId: "t", stepId: "s", user: { id: "u", tenantId: "t", permissions: [] } }), error => error.code === "behavior_spine_unavailable");
  assert.ok(declined);
});
