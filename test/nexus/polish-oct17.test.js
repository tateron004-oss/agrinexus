"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { createRecentSubmissions } = require("../../nexus/intake/recent-submissions.js");
const wellness = require("../../public/nexus-mental-health-behavioral-wellness.js");

const server = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");
const adapter = fs.readFileSync(path.join(__dirname, "../../nexus/compat/server-runtime-adapter.js"), "utf8");

const who = { tenantId: "t1", userId: "u1", intakeId: "resume" };
const gate = () => { let release; const open = new Promise(resolve => { release = resolve; }); return { open, release }; };

test("the same finished interview sent twice is saved once, and the repeat gets the first answer", async () => {
  const submissions = createRecentSubmissions();
  let saved = 0;
  const run = async () => { saved += 1; return { completed: true, taskId: `task-${saved}` }; };
  const first = await submissions.once({ ...who, values: { name: "Grace Wanjiku", skills: "sewing, cooking" } }, run);
  const again = await submissions.once({ ...who, values: { skills: " sewing, cooking ", name: "Grace Wanjiku" } }, run);
  assert.equal(saved, 1);
  assert.deepEqual(again, first);
});

test("a repeat that arrives while the first is still being saved shares it instead of starting another", async () => {
  const submissions = createRecentSubmissions();
  const { open, release } = gate();
  let saved = 0;
  const run = async () => { saved += 1; await open; return { completed: true, taskId: "task-1" }; };
  const first = submissions.once({ ...who, values: { name: "Ann" } }, run);
  const second = submissions.once({ ...who, values: { name: "Ann" } }, run);
  release();
  assert.deepEqual(await first, await second);
  assert.equal(saved, 1);
});

test("different answers, a different person, and a failed or unfinished save are never treated as a repeat", async () => {
  const submissions = createRecentSubmissions();
  let saved = 0;
  const run = async () => { saved += 1; return { completed: true }; };
  await submissions.once({ ...who, values: { name: "Ann" } }, run);
  await submissions.once({ ...who, values: { name: "Ann", skills: "driving" } }, run);
  await submissions.once({ ...who, userId: "u2", values: { name: "Ann" } }, run);
  assert.equal(saved, 3);
  let tries = 0;
  const flaky = async () => { tries += 1; if (tries === 1) throw new Error("database busy"); return { completed: true }; };
  await assert.rejects(() => submissions.once({ ...who, values: { name: "Bea" } }, flaky), /database busy/);
  assert.deepEqual(await submissions.once({ ...who, values: { name: "Bea" } }, flaky), { completed: true });
  let waiting = 0;
  const unfinished = async () => { waiting += 1; return { completed: false }; };
  await submissions.once({ ...who, values: { name: "Cy" } }, unfinished);
  await submissions.once({ ...who, values: { name: "Cy" } }, unfinished);
  assert.equal(waiting, 2);
});

test("a repeat after the window is a new save", async () => {
  let clock = 1000;
  const submissions = createRecentSubmissions({ windowMs: 60000, now: () => clock });
  let saved = 0;
  const run = async () => { saved += 1; return { completed: true }; };
  await submissions.once({ ...who, values: { name: "Dee" } }, run);
  clock += 61000;
  await submissions.once({ ...who, values: { name: "Dee" } }, run);
  assert.equal(saved, 2);
});

test("the interview route goes through the guard", () => {
  assert.match(adapter, /recentIntakes\.once\(\{ tenantId: context\.tenantId, userId: context\.userId, intakeId: body\.intakeId, values: body\.values \|\| \{\} \},\s+\(\) => active\.behavior\.intakeTurn\(/);
});

test("a question about a child being abused gets the Childhelp number, and an adult one does not", () => {
  for (const say of ["I think a child is being abused next door, who do I call?", "I am worried about child abuse", "My daughter is being abused"]) {
    const reply = wellness.buildSupportPacket(say, {}).userVisibleStatus;
    assert.match(reply, /Childhelp National Child Abuse Hotline is 1-800-422-4453/, say);
    assert.match(reply, /immediate danger, contact local emergency services/, say);
  }
  for (const say of ["I am being abused by my partner", "my mother is being neglected"]) {
    assert.doesNotMatch(wellness.buildSupportPacket(say, {}).userVisibleStatus, /Childhelp|422-4453/, say);
  }
});

test("the voice model is told to stay silent on a time or date question, which the page answers itself", () => {
  assert.match(server, /When the user asks what time or what date it is[^\n]{0,200}do not call any tool and say nothing at all: the page answers by itself[^\n]{0,120}Never say you cannot see a clock/);
});
