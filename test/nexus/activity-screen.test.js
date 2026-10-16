"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

// "What have you done for me?" / "what is waiting for me?": the person's own tasks in plain words, in groups, with whether Kyro did each on its own.
const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
const sliceConst = name => { const start = app.indexOf(name); assert.ok(start >= 0, name); return app.slice(start, app.indexOf(";\n", start) + 2); };
const sliceFn = name => { const start = app.indexOf(name); assert.ok(start >= 0, name); return app.slice(start, app.indexOf("\n}\n", start) + 3); };
const load = () => new vm.Script(sliceConst("const KYRO_OPEN_LEAD") + sliceConst("const KYRO_OPEN_ACTIVITY") + sliceFn("function kyroActivityGroups(") + sliceFn("function kyroActivitySummary(") + "({ KYRO_OPEN_ACTIVITY, kyroActivityGroups, kyroActivitySummary })")
  .runInNewContext({ kyroPlainText: text => String(text).replace(/\*\*/g, ""), Date, Number, Array, Set, String, Object });

test("the sentences that open the activity screen, and the ones that do not", () => {
  const { KYRO_OPEN_ACTIVITY: re } = load();
  for (const said of ["What have you done for me?", "What did you do for me", "What are you working on?", "What is waiting for me?", "What's pending", "Open activity.", "Show my recent activity", "Kyro, what's waiting for me please"]) assert.ok(re.test(said.replace(/ please$/i, "")), said);
  for (const said of ["What is the weather", "What are you", "Show my reminders", "What have you got for sale", "Open the activity of the market in Kisumu"]) assert.ok(!re.test(said), said);
});

test("tasks are grouped as waiting for a yes, being done, done recently and could not be finished, with 'on my own' marked", () => {
  const { kyroActivityGroups, kyroActivitySummary } = load();
  const now = Date.parse("2026-10-16T15:00:00");
  const tasks = [
    { goal: "Send a text to Amina", state: "awaiting_confirmation" },
    { goal: "Remind you to check the pump", state: "completed", autonomous: true, updatedAt: "2026-10-16T09:30:00" },
    { goal: "**Prepare** a provider summary", state: "completed", updatedAt: "2026-10-14T18:05:00" },
    { goal: "Find maize buyers", state: "running" },
    { goal: "Send the invoice", state: "failed" },
    { goal: "", state: "completed" }, { goal: "Something odd", state: "weird" }
  ];
  const groups = JSON.parse(JSON.stringify(kyroActivityGroups(tasks, now)));
  assert.deepEqual(groups.waiting, ["Send a text to Amina"]);
  assert.deepEqual(groups.doing, ["Find maize buyers"]);
  assert.equal(groups.done.length, 2); assert.match(groups.done[0], /^Remind you to check the pump \(I did this on my own\), today /); assert.match(groups.done[1], /^Prepare a provider summary, (Tue|Wed|Mon|Thu|Fri|Sat|Sun)/);
  assert.deepEqual(groups.stuck, ["Send the invoice"]);
  assert.equal(kyroActivitySummary(groups), "1 thing is waiting for your yes. I am working on 1. I finished 2 recently. 1 could not be finished.");
  assert.equal(kyroActivitySummary(kyroActivityGroups([], now)), "Nothing is waiting for you, and I am not working on anything right now.");
  assert.equal(kyroActivityGroups(Array.from({ length: 20 }, (_, i) => ({ goal: "done " + i, state: "completed" })), now).done.length, 8, "at most eight done lines");
  assert.deepEqual(JSON.parse(JSON.stringify(kyroActivityGroups(null, now))), { waiting: [], doing: [], done: [], stuck: [] });
});

test("the spoken request and the Care and wellness button open it, and it reads the person's own task list only", () => {
  assert.match(app, /if \(KYRO_OPEN_ACTIVITY\.test\(said\)\) \{\s*kyroTakeOverTurn\(\);\s*void kyroShowActivityScreen\(\);\s*return true;/);
  assert.match(app, /\{ kind: "button", label: "What I have done and what is waiting", special: "activity" \}/);
  assert.match(app, /if \(special === "activity"\) \{ void kyroShowActivityScreen\(\); return; \}/);
  const screen = sliceFn("async function kyroShowActivityScreen(");
  assert.match(screen, /request\("\/api\/nexus\/runtime\/tasks\?limit=40"\)/); assert.match(screen, /"data-kyro-keep": "true"/);
  assert.ok(!/method: "POST"|method: "DELETE"/.test(screen), "it changes nothing");
});

test("'what do you know about me' is answered by the page from what Kyro has saved, and the voice model is told Kyro does remember between sessions", () => {
  const re = new vm.Script(sliceConst("const KYRO_OPEN_LEAD") + sliceConst("const KYRO_ASK_MEMORY") + "KYRO_ASK_MEMORY").runInNewContext({});
  for (const said of ["What do you know about me?", "What do you remember about me", "What have you saved about me?", "What do you remember?", "What did you learn" ]) assert.equal(re.test(said), said !== "What did you learn", said);
  for (const said of ["What do you know about maize", "What do you remember about the meeting in Kisumu", "Do you know me"]) assert.ok(!re.test(said), said);
  assert.match(app, /if \(KYRO_ASK_MEMORY\.test\(said\)\) \{\s*kyroTakeOverTurn\(\);\s*void handleNexusUnifiedBrainRuntimeCommand\("What do you know about me\?", \{ source: "typed", kyroDirect: true \}\);\s*return true;/);
  const server = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");
  assert.match(server, /Kyro DOES remember what the person tells it across sessions[^"]*never say you do not remember anything between sessions\./);
});
