"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { createCommand } = require("../../nexus/contracts/command.js");
const { AuthoritativeTaskEngine } = require("../../nexus/runtime/authoritative-task-engine.js");
const { emergencyHealthGuidancePlan } = require("../../nexus/brain/planner.js");

// 2026-09-19, production: "I have chest pain", "I am having trouble breathing", "This is a medical emergency" and
// "My blood pressure is 190 over 125" all returned 503 (Postgres 23514, check violation). The emergency plan says
// riskTier "critical"; nexus_tasks.risk_tier only accepts low/medium/high/regulated.
const catalog = { applications: [{ applicationId: "health" }], tools: [{ toolId: "health.emergency-guidance" }] };

function engineWith(store) {
  return new AuthoritativeTaskEngine({
    conversations: { ensure: async () => ({}) },
    tools: { get: async id => ({ tool_id: id, availability: "available", required_permission: "tasks:execute", confirmation_required: false, consent_scope: null, timeout_ms: 1000 }) },
    tasks: { create: async (task, steps) => { store.created = { task, steps }; return task; }, save: async task => task },
    executions: {}, consents: {}, audit: { record: async () => ({}) }, executors: {}, verifier: async () => ({ verified: true })
  });
}
const step = { clientStepId: "s1", title: "Show urgent emergency guidance", toolId: "health.emergency-guidance", input: {}, dependsOn: [], fallbackToolIds: [] };
const command = () => createCommand({ text: "I have chest pain", channel: "typed", tenantId: "tenant", actorId: "user", correlationId: "trace" });

test("an emergency plan is stored with a tier the database accepts, not rejected", async () => {
  const plan = emergencyHealthGuidancePlan("I have chest pain", catalog);
  assert.equal(plan.riskTier, "critical", "the planner's own label is unchanged");
  const store = {};
  await engineWith(store).create({ command: command(), goal: plan.goal, application: plan.application, riskTier: plan.riskTier, steps: plan.steps });
  assert.equal(store.created.task.riskTier, "regulated", "kept at the highest stored tier instead of violating the check constraint");
});

test("stored tiers pass through and unknown values fail safe instead of crashing", async () => {
  const stored = async riskTier => { const store = {}; await engineWith(store).create({ command: command(), goal: "g", application: "health", riskTier, steps: [step] }); return store.created.task.riskTier; };
  for (const tier of ["low", "medium", "high", "regulated"]) assert.equal(await stored(tier), tier, tier);
  assert.equal(await stored(undefined), "low", "the default is unchanged");
  assert.equal(await stored("critical"), "regulated");
  assert.equal(await stored("catastrophic"), "regulated", "an unknown tier is treated as the most careful stored one");
});

test("every emergency trigger the planner recognizes is now storable", async () => {
  for (const text of ["I have chest pain", "I am having trouble breathing", "This is a medical emergency", "My blood pressure is 190 over 125", "sudden slurred speech and one side of my face droops"]) {
    const plan = emergencyHealthGuidancePlan(text, catalog);
    assert.ok(plan, `${text} is recognized`);
    const store = {};
    await engineWith(store).create({ command: command(), goal: plan.goal, application: plan.application, riskTier: plan.riskTier, steps: plan.steps });
    assert.ok(["low", "medium", "high", "regulated"].includes(store.created.task.riskTier), text);
  }
});

test("the database constraint really is the four-tier list this maps into", () => {
  const sql = fs.readFileSync(path.join(__dirname, "../../foundation/migrations/003_nexus_unified_runtime.sql"), "utf8");
  assert.match(sql, /risk_tier text not null check \(risk_tier in \('low','medium','high','regulated'\)\)/);
  assert.doesNotMatch(sql, /risk_tier[^\n]*'critical'/);
});
