"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const voiceDispatch = require("../../nexus/business/voice-dispatch.js");
const { createBusinessWorkspaceCounter } = require("../../nexus/business/authoritative-executor.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");

// Found by the phrase sweep: on the typed route, "add a donor named Grace Otieno", "create an invoice for Grace Otieno" and "mark invoice INV-1001 as paid" from an account with NO business workspace first asked
// "I prepared the request and need your confirmation ..." and only after the yes said "You do not have a business or nonprofit workspace yet" (an HTTP 422). The planner now says so up front, with no model and before
// any confirmation is staged; a person who HAS a workspace is served exactly as before, and every change still asks first.

const catalog = {
  tools: [
    { tool_id: "business.manage", domain: "business", risk_tier: "low", confirmation_required: true },
    { tool_id: "business.query", domain: "business", risk_tier: "low", confirmation_required: false }
  ],
  applications: [{ applicationId: "business", capabilities: ["business.manage", "business.query"], riskTiers: ["low"] }]
};
function plannerWith(businessWorkspaces) {
  const model = { plan: async () => { throw new Error("must not reach the AI planning model"); } };
  return new OpenEndedPlanner({ model, tools: { list: async () => catalog.tools }, applications: { list: () => catalog.applications }, ...(businessWorkspaces ? { businessWorkspaces } : {}) });
}
const ask = (planner, text, context = {}) => planner.plan({ command: { text, tenantId: "t1", actorId: "u1", locale: "en", channel: "typed" }, context });

const CHANGES = ["add a donor named Grace Otieno", "create an invoice for Grace Otieno", "mark invoice INV-1001 as paid"];
const READS = ["who are my donors", "what grants are we tracking"];

test("with no workspace, a change is answered up front: no steps, so no confirmation is ever staged, and it offers to start one", async () => {
  const planner = plannerWith({ count: async () => 0 });
  for (const text of CHANGES) {
    const plan = await ask(planner, text);
    assert.deepEqual(plan.steps, [], text);
    assert.equal(plan.clarification, null, text);
    assert.equal(plan.application, "conversation", text);
    assert.match(plan.response, /^You have no business or nonprofit workspace yet, so there is nowhere to put that\. Shall I start one first\?/, text);
    assert.match(plan.response, /start a business workspace called/, text);
  }
});

test("with no workspace, a read-only question simply says so and how to begin", async () => {
  const planner = plannerWith({ count: async () => 0 });
  for (const text of READS) {
    const plan = await ask(planner, text);
    assert.deepEqual(plan.steps, [], text);
    assert.match(plan.response, /^You have no business or nonprofit workspace yet\. To begin, say "start a business workspace called"/, text);
    assert.doesNotMatch(plan.response, /Shall I start one first|go ahead/i, text);
  }
});

test("the phrase it tells the person to say really starts a workspace, and starting one is not intercepted", async () => {
  assert.equal(voiceDispatch.classify("start a business workspace called Otieno Fund"), "createWorkspace");
  assert.equal(voiceDispatch.classify("start a nonprofit workspace called Hope Foundation"), "createWorkspace");
  const plan = await ask(plannerWith({ count: async () => 0 }), "start a nonprofit workspace called Hope Foundation");
  assert.equal(plan.application, "business");
  assert.equal(plan.steps[0].toolId, "business.manage");
  assert.equal(plan.response, undefined);
});

test("with a workspace the person is served exactly as before: the same plan, and a change still goes to confirmation", async () => {
  for (const businessWorkspaces of [{ count: async () => 1 }, { count: async () => 3 }, undefined, { count: async () => { throw new Error("cannot tell"); } }, { count: async () => null }]) {
    const planner = plannerWith(businessWorkspaces);
    const change = await ask(planner, "add a donor named Grace Otieno");
    assert.equal(change.application, "business");
    assert.equal(change.steps[0].toolId, "business.manage");
    assert.equal(change.response, undefined);
    const read = await ask(planner, "who are my donors");
    assert.equal(read.steps[0].toolId, "business.query");
  }
  assert.equal(catalog.tools.find(tool => tool.tool_id === "business.manage").confirmation_required, true);
});

test("the spoken (deterministicOnly) path is not changed by this", async () => {
  const plan = await ask(plannerWith({ count: async () => { throw new Error("must not be asked"); } }), "add a donor named Grace Otieno", { deterministicOnly: true });
  assert.equal(plan.response, undefined, "the spoken path keeps its own business handling (it defers here), so nothing is answered by this check");
});

test("needsWorkspace: everything but starting one and listing them", () => {
  assert.equal(voiceDispatch.needsWorkspace("addLead"), true);
  assert.equal(voiceDispatch.needsWorkspace("createInvoice"), true);
  assert.equal(voiceDispatch.needsWorkspace("dashboard"), true);
  assert.equal(voiceDispatch.needsWorkspace("createWorkspace"), false);
  assert.equal(voiceDispatch.needsWorkspace("list"), false);
  assert.equal(voiceDispatch.needsWorkspace(null), false);
});

test("the counter reads the person's own workspaces through the same access check, and says 'unknown' (null) rather than 'none' when it cannot tell", async () => {
  const rows = [];
  const repository = { async list(item) { return rows.filter(row => row.tenant_id === item.tenantId && row.owner_id === item.ownerId); } };
  const seen = [];
  const access = { async authorize(item) { seen.push(item.permission); } };
  const count = createBusinessWorkspaceCounter({ repository, access, consents: {}, env: {} });
  const context = { tenantId: "tenant-a", userId: "owner-a" };
  assert.equal(await count(context), 0);
  rows.push({ tenant_id: "tenant-a", owner_id: "owner-a", data: { info: { businessName: "Hope Foundation" } } }, { tenant_id: "tenant-a", owner_id: "someone-else", data: {} });
  assert.equal(await count(context), 1);
  assert.deepEqual([...new Set(seen)], ["tasks:read"]);
  const refused = createBusinessWorkspaceCounter({ repository, access: { async authorize() { throw Object.assign(new Error("restricted"), { status: 403 }); } }, consents: {}, env: {} });
  await assert.rejects(() => refused(context));
});
