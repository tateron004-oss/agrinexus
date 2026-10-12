"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

// "Take a note: buy seeds" opened the Trade form, because the words include "buy". A request the planner has already answered and saved (a note, a list, the farm log, a sale posted to the board) is a
// finished answer: it is shown as the answer, and nothing is opened for it. Every other tool keeps the workspace it opened before.

const server = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");

function load() {
  const start = server.indexOf("function voiceToolGenesisAction(");
  assert.ok(start >= 0);
  const calls = [];
  const sandbox = { nexusGenesisWorkspaceAction: (command, toolResults) => { calls.push({ command, toolResults }); return { type: "genesis.workspace.open", workspace: "trade" }; } };
  vm.createContext(sandbox);
  vm.runInContext(`${server.slice(start, server.indexOf("\n}\n", start) + 3)}\nthis.run = voiceToolGenesisAction;`, sandbox);
  return { run: sandbox.run, calls };
}

test("a note, list or log the planner answered opens no workspace; any other result keeps its workspace", () => {
  const { run, calls } = load();
  assert.equal(run("Take a note: buy seeds", "nexus_everyday_records", { intent: "planner-deterministic-answer", capability: "conversation", response: "Noted: buy seeds." }), null);
  assert.equal(calls.length, 0, "not even looked up");
  assert.equal(JSON.stringify(run("Find a clinic near me", "nexus_health_preparation", { intent: "x", capability: "nexus_health_preparation" })), JSON.stringify({ type: "genesis.workspace.open", workspace: "trade" }), "(the stub's action: the lookup ran)");
  assert.equal(JSON.stringify(calls[0]), JSON.stringify({ command: "Find a clinic near me", toolResults: [{ call: { name: "nexus_health_preparation" } }] }));
  // the planner-answered intent from a different capability (a health reading's own route) is not exempted
  assert.notEqual(run("My blood pressure is 140 over 90", "nexus_health_preparation", { intent: "planner-deterministic-answer", capability: "nexus_health_preparation" }), null);
  assert.notEqual(run("hello", "nexus_everyday_records", null), null, "no result: unchanged");
});

test("both places the voice tool route attaches the action use it", () => {
  assert.equal((server.match(/const genesisAction = voiceToolGenesisAction\(args\.command \|\| body\.command \|\| "", toolName, result\);/g) || []).length, 2);
  assert.doesNotMatch(server, /const genesisAction = nexusGenesisWorkspaceAction\(args\.command \|\| body\.command \|\| "", \[\{ call: \{ name: toolName \} \}\]\);/, "no route attaches it without asking");
});

test("what Kyro says never uses the internal name or a provider's internal confirmation sentence, from any tool", () => {
  const start = server.indexOf("function voiceToolSpoken(");
  assert.ok(start >= 0);
  const sandbox = { spokenRequests: require("../../nexus/voice/spoken-requests.js") };
  vm.createContext(sandbox);
  vm.runInContext(`${server.slice(start, server.indexOf("\n}\n", start) + 3)}\nthis.run = voiceToolSpoken;`, sandbox);
  const say = (response, command = "Queue this for later") => sandbox.run({ ok: true, status: "completed", response, extra: 1 }, command).response;
  assert.equal(say("I did not find a matching active Nexus memory record."), "I did not find a matching active Kyro memory record.");
  assert.equal(say("Nexus checked provider readiness without exposing secrets. 1 of 6 lanes are ready."), "Kyro checked provider readiness without exposing secrets. 1 of 6 lanes are ready.");
  assert.equal(say("Nexus Genesis is listening."), "Kyro is listening.");
  assert.equal(say("nexus-offline-expansion-bridge offline.bridge.queue requires explicit confirmed: true before controlled testing can run."), "Before I go ahead with \"Queue this for later\", I need your yes. Say yes to do it, or no to cancel.");
  assert.equal(say("nexus-communications-bridge communications.call requires explicit confirmed: true before controlled testing can run. Number to confirm: +254712345678.", "call 0712345678"), "Before I go ahead with \"call 0712345678\", I need your yes. Say yes to do it, or no to cancel. Number to confirm: +254712345678.", "what follows the provider's sentence (the number read back) is kept");
  assert.equal(say("nexus_lists is fine and so is the word nexus in lower case"), "nexus_lists is fine and so is the word nexus in lower case", "identifiers are not touched");
  const untouched = { ok: true, response: "Logged tank at 40% for today." };
  assert.equal(sandbox.run(untouched, "x"), untouched, "an answer with nothing to change is returned as it came");
  assert.equal(sandbox.run({ ok: true }, "x").ok, true); assert.equal(sandbox.run(null, "x"), null);
  assert.equal((server.match(/\.\.\.voiceToolSpoken\(result, args\.command \|\| body\.command \|\| ""\), genesisAction/g) || []).length, 2, "both places the voice route replies");
});
