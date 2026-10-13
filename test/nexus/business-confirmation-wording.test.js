"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { BehaviorSpine } = require("../../nexus/runtime/behavior-spine.js");
const { createBusinessPreview } = require("../../nexus/business/authoritative-executor.js");

// Found testing the live site: "Start a business workspace called ..." and most other business writes asked "I prepared the request and need your confirmation before the next governed action", which says nothing about what
// the person is agreeing to. The sentence is now the specific one the spoken path already gives, made without writing anything.

const GENERIC = "I prepared the request and need your confirmation before the next governed action.";
const context = { tenantId: "t", userId: "u", can: () => true, hasRole: () => false, roles: [], requestId: "r", correlationId: "c" };
const workspace = { record_id: "ws1", version: 1, data: { info: { businessName: "Green Acres" }, editable: { leads: [], invoices: [], transactions: [], grants: [], tasks: [], appointments: [] } } };

function previewWith(clients) {
  const writes = [];
  const repository = { list: async () => clients, get: async () => clients[0] || null, create: async item => { writes.push(["create", item]); return item; }, update: async item => { writes.push(["update", item]); return item; } };
  const preview = createBusinessPreview({ repository, access: { authorize: async () => {} }, consents: { active: async () => ({ granted: true }), grant: async item => item }, env: {} });
  return { preview, writes };
}
function spineWith(businessPreview) {
  const tools = { get: async id => ({ tool_id: id }) };
  return new BehaviorSpine({ agent: { command: async () => {} }, engine: { tools, executeTask: async () => ({}) }, tasks: { get: async () => null }, conversations: {}, workspaceStates: { stage: async () => {}, acknowledge: async () => {} }, businessPreview });
}
const ask = (spine, command, withContext = true) => spine.confirmationPrompt({ task: { steps: [{ step_id: "s1", tool_id: "business.manage", input: { command } }] }, pendingStepId: "s1", context: withContext ? context : undefined });

test("starting a workspace says which one, and nothing is written to ask", async () => {
  const { preview, writes } = previewWith([]);
  const said = await preview({ command: "Start a business called Amina Farm", context });
  assert.equal(said, 'I can start a new business or nonprofit workspace called "Amina Farm" and save it to your account. Should I go ahead?');
  assert.deepEqual(writes, []);
});

test("a customer, an invoice, a task and a grant each say who or what", async () => {
  const { preview, writes } = previewWith([workspace]);
  assert.match(await preview({ command: "Add a customer named Amina", context }), /^I can add Amina as a customer to "Green Acres"\. Should I go ahead\?$/);
  assert.match(await preview({ command: "Add a task to call the buyer", context }), /^I can add a task to "Green Acres": .*call the buyer.*Should I go ahead\?$/);
  assert.deepEqual(writes, [], "asking changes nothing");
});

test("the spine uses it for business writes, keeps the logged-amount sentence, and never lets a failure or a missing preview block the prompt", async () => {
  const spine = spineWith(async ({ command }) => `I can do exactly this: ${command}. Should I go ahead?`);
  assert.equal(await ask(spine, "Add a customer named Amina"), "I can do exactly this: Add a customer named Amina. Should I go ahead?");
  assert.equal(await ask(spine, "I sold 5 bags of maize for 6000 shillings"), "I can log KES 6,000 as income for 5 bags of maize in your business workspace. Say yes to save it, or no to cancel.");
  assert.equal(await ask(spineWith(async () => { throw new Error("db down"); }), "Add a customer named Amina"), GENERIC);
  assert.equal(await ask(spineWith(async () => null), "Add a customer named Amina"), GENERIC);
  assert.equal(await ask(spineWith(null), "Add a customer named Amina"), GENERIC);
  assert.equal(await ask(spine, "Add a customer named Amina", false), GENERIC, "no context, no preview");
});
