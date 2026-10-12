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
