"use strict";
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const test = require("node:test");
const assert = require("node:assert/strict");

// 2026-09-23: found during a live "mode-gating audit" (prompted by the
// Genesis orb bug) that "Run next approved mission" could silently execute
// the WRONG mission plan. resumeNextMission() correctly located the plan
// with status "awaiting-approval", but then called executeAgentPlan() with
// no argument -- which independently re-picks agentPlans[0] regardless of
// status. If a newer plan (e.g. already completed) sits at index 0 while an
// older plan is the one actually awaiting approval, the button would
// re-execute the wrong plan entirely. Confirmed live-reproducible: the
// Mission Dashboard seen tonight had both a completed mission and separate
// awaiting-approval missions listed together.
const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");

function sliceFunction(name) {
  const asyncStart = app.indexOf(`async function ${name}(`);
  const start = asyncStart !== -1 ? asyncStart : app.indexOf(`function ${name}(`);
  assert.ok(start > 0, `could not locate function ${name} in public/app.js`);
  const candidates = ["\nfunction ", "\nasync function "]
    .map(marker => app.indexOf(marker, start + 10))
    .filter(index => index > start);
  const end = Math.min(...candidates);
  assert.ok(Number.isFinite(end) && end > start, `could not find the end of ${name} in public/app.js`);
  return app.slice(start, end);
}

function load(agentPlans) {
  const requests = [];
  const sandbox = {
    data: { profile: { agentPlans, agentExecutions: [] } },
    request: async (url, options) => {
      requests.push({ url, body: options?.body });
      return { profile: { agentPlans, agentExecutions: [{ summary: "done" }] } };
    },
    $: () => null,
    render: () => {},
    goSection: () => {},
    setVoiceResponse: () => {},
    toast: () => {}
  };
  vm.createContext(sandbox);
  vm.runInContext(sliceFunction("executeAgentPlan") + "\n" + sliceFunction("resumeNextMission"), sandbox);
  return { sandbox, requests };
}

test("resumeNextMission executes the plan it actually validated as awaiting-approval, not agentPlans[0]", async () => {
  const agentPlans = [
    { id: "plan-newer-completed", status: "completed" },
    { id: "plan-older-awaiting", status: "awaiting-approval" }
  ];
  const { sandbox, requests } = load(agentPlans);
  await sandbox.resumeNextMission();
  const executeCall = requests.find(item => item.url === "/api/agent/execute");
  assert.ok(executeCall, "must call the execute endpoint");
  assert.equal(executeCall.body.planId, "plan-older-awaiting", "must target the plan that is actually awaiting approval, not the newest one");
});

test("resumeNextMission falls back to agentPlans[0] only when nothing is awaiting approval", async () => {
  const agentPlans = [{ id: "plan-only-one", status: "completed" }];
  const { sandbox, requests } = load(agentPlans);
  await sandbox.resumeNextMission();
  const executeCall = requests.find(item => item.url === "/api/agent/execute");
  assert.equal(executeCall.body.planId, "plan-only-one");
});

test("executeAgentPlan() with no argument keeps its original behavior -- agentPlans[0], for the plain Execute button and the voice 'execute plan' command", async () => {
  const agentPlans = [{ id: "plan-a", status: "awaiting-approval" }, { id: "plan-b", status: "awaiting-approval" }];
  const { sandbox, requests } = load(agentPlans);
  await sandbox.executeAgentPlan();
  const executeCall = requests.find(item => item.url === "/api/agent/execute");
  assert.equal(executeCall.body.planId, "plan-a", "a bare call must still target agentPlans[0], unchanged");
});

test("executeAgentPlan(planId) reports an honest error instead of fabricating an unrelated new plan when the id is gone", async () => {
  const agentPlans = [{ id: "plan-a", status: "awaiting-approval" }];
  const { sandbox, requests } = load(agentPlans);
  await sandbox.executeAgentPlan("plan-does-not-exist");
  assert.ok(!requests.some(item => item.url === "/api/agent/plan"), "must never silently create a new, unrelated plan");
  assert.ok(!requests.some(item => item.url === "/api/agent/execute"), "must never execute anything when the requested plan is missing");
});

test("the plain Execute button binding was fixed alongside this change -- it must not pass the click Event through as planId", () => {
  assert.match(app, /\$\("#agentExecuteBtn"\)\.onclick = \(\) => executeAgentPlan\(\);/,
    "binding executeAgentPlan directly as onclick would pass the click Event as planId and break this button");
});
