"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { BehaviorSpine } = require("../../nexus/runtime/behavior-spine.js");
const { sendMessagePlan } = require("../../nexus/brain/planner.js");
const { userConfirmableConsent, consentRecipient, informedConfirmationPrompt } = require("../../nexus/consent/user-confirmable-consents.js");
const { normalizeSendRequest, normalizeRecipient } = require("../../nexus/communications/send-request.js");
const { ConsentRepository } = require("../../nexus/consent/repository.js");
const twilioProvider = require("../../server/providers/twilioProvider.js");
const { createCommunicationsSendExecutor } = require("../../nexus/communications/executor.js");

const send = (input, extra = {}) => ({ step_id: "stp_1", tool_id: "communications.send", title: "Send a text message", input, ...extra });
const SCOPE = "communications:send:write";

test("only a complete text, WhatsApp or email request to one recipient is sendable", () => {
  assert.deepEqual(normalizeSendRequest({ channel: "sms", to: "+254 712-345-678", message: "  I'm   on my way " }), { channel: "sms", to: "+254712345678", message: "I'm on my way", subject: "" });
  assert.equal(normalizeSendRequest({ to: "+254712345678", message: "hi" }).channel, "sms", "sms is the default");
  assert.equal(normalizeSendRequest({ channel: "email", to: "amina@example.com", message: "Ready", subject: "Delivery" }).subject, "Delivery");
  for (const bad of [{ channel: "call", to: "+254712345678", message: "hi" }, { to: "0712345678", message: "hi" }, { to: "+254712345678", message: "" },
    { to: "+254712345678" }, { channel: "email", to: "not-an-address", message: "hi" }, { channel: "email", to: "a@b.co, c@d.co", message: "hi" },
    { to: "+254712345678", message: "x".repeat(501) }, { to: "+254712345678 +254700000000", message: "hi" }, {}])
    assert.equal(normalizeSendRequest(bad), null, JSON.stringify(bad));
  assert.equal(normalizeSendRequest(undefined), null);
  assert.equal(normalizeRecipient("sms", "+1 (555) 123-4567"), "+15551234567");
});

test("the prompt reads back the channel, recipient and exact words, and says it really sends", () => {
  const sms = informedConfirmationPrompt({ scope: SCOPE, step: send({ channel: "sms", to: "+254712345678", message: "I'm on my way" }) });
  assert.equal(sms, "I can send this text message to +254712345678: \"I'm on my way\". It will really be sent and cannot be unsent. Say yes to send it, or no to cancel.");
  const mail = informedConfirmationPrompt({ scope: SCOPE, step: send({ channel: "email", to: "a@b.co", message: "Ready", subject: "Delivery" }) });
  assert.match(mail, /^I can send this email to a@b\.co, subject "Delivery": "Ready"\./);
  assert.match(informedConfirmationPrompt({ scope: SCOPE, step: send({ channel: "whatsapp", to: "+254712345678", message: "hi" }) }), /WhatsApp message/);
  for (const input of [{}, { draft: "Draft a follow-up", consentRequired: true }, { channel: "call", to: "+254712345678", message: "hi" }])
    assert.equal(informedConfirmationPrompt({ scope: SCOPE, step: send(input) }), null, JSON.stringify(input));
  assert.equal(userConfirmableConsent(SCOPE, send({ draft: "x" })), null, "the acceptance probe's draft-only step can never be consented");
  assert.equal(consentRecipient(SCOPE, send({ to: "+254 712 345 678", message: "hi" })), "+254712345678");
  assert.equal(consentRecipient("health:record:write", send({ to: "+254712345678", message: "hi" })), null);
});

const TOOLS = { "communications.send": { tool_id: "communications.send", consent_scope: SCOPE } };
function harness({ input, ownerId = "user-1", sentToday = 0, existing = null }) {
  const calls = [];
  const task = { taskId: "tsk_1", ownerId, application: "communications", goal: "send", riskTier: "regulated", conversationId: "cnv_1", steps: [send(input)] };
  const engine = { tools: { get: async id => TOOLS[id] || null },
    approve: async () => calls.push(["approve"]),
    transition: async change => { calls.push(["transition", change.reason]); return { taskId: "tsk_1", state: "cancelled" }; },
    executeTask: async () => { calls.push(["execute"]); return { state: "awaiting_render", receipts: [] }; },
    consents: { active: async () => existing,
      countGrantedSince: async args => { calls.push(["count", args.hours]); return sentToday; },
      grant: async args => { calls.push(["grant", args]); return { consent_id: "c1" }; } } };
  const spine = new BehaviorSpine({ agent: { command: async () => assert.fail("not used") }, engine, tasks: { get: async () => task }, conversations: { append: async () => {} },
    workspaceStates: { stage: async () => {}, acknowledge: async () => {} } });
  return { spine, calls };
}
const ctx = (userId = "user-1", hasRole = () => false) => ({ tenantId: "t1", userId, can: () => true, hasRole });
const yes = { taskId: "tsk_1", stepId: "stp_1", approved: true, text: "Yes, send it.", channel: "voice" };
const good = { channel: "sms", to: "+254712345678", message: "I'm on my way" };

test("the owner's yes to a complete message records a consent for that recipient, then sends", async () => {
  const { spine, calls } = harness({ input: good });
  await spine.confirm({ input: yes, context: ctx() });
  assert.deepEqual(calls.map(call => call[0]), ["approve", "count", "grant", "execute"]);
  const grant = calls.find(call => call[0] === "grant")[1];
  assert.equal(grant.scope, SCOPE); assert.equal(grant.recipient, "+254712345678"); assert.equal(grant.taskId, "tsk_1");
  assert.equal(grant.receipt.confirmation, "Yes, send it."); assert.equal(grant.receipt.channel, "voice");
});

test("no consent and no send for an incomplete request, a bystander, or a decline", async () => {
  for (const input of [{ draft: "Draft a follow-up message", consentRequired: true }, { channel: "call", to: "+254712345678", message: "hi" }, { to: "0712345678", message: "hi" }]) {
    const { spine, calls } = harness({ input }); await spine.confirm({ input: yes, context: ctx() });
    assert.equal(calls.some(call => call[0] === "grant"), false, JSON.stringify(input));
  }
  const other = harness({ input: good, ownerId: "user-1" });
  await other.spine.confirm({ input: yes, context: ctx("admin-9", () => true) });
  assert.equal(other.calls.some(call => call[0] === "grant"), false, "an administrator's yes is not the sender's consent");
  const declined = harness({ input: good });
  await declined.spine.confirm({ input: { ...yes, approved: false }, context: ctx() });
  assert.equal(declined.calls.some(call => call[0] === "grant" || call[0] === "execute"), false);
});

test("the tenth send of the day is the last: the eleventh is cancelled with a clear message and nothing is sent", async () => {
  const under = harness({ input: good, sentToday: 9 }); await under.spine.confirm({ input: yes, context: ctx() });
  assert.equal(under.calls.some(call => call[0] === "execute"), true, "the tenth is allowed");
  const over = harness({ input: good, sentToday: 10 });
  const result = await over.spine.confirm({ input: yes, context: ctx() });
  assert.equal(result.state, "cancelled"); assert.match(result.response, /used today's limit of 10 messages/);
  assert.equal(over.calls.some(call => call[0] === "grant" || call[0] === "execute"), false);
});

test("the consent repository counts the last day's grants of a scope", async () => {
  let seen;
  const repo = new ConsentRepository({ query: async (sql, params) => { seen = { sql, params }; return { rows: [{ count: 3 }] }; } });
  assert.equal(await repo.countGrantedSince({ tenantId: "t", subjectId: "u", scope: SCOPE }), 3);
  assert.deepEqual(seen.params, ["t", "u", SCOPE, 24]); assert.match(seen.sql, /granted_at > now\(\)/);
});

test("the executor sends exactly what the person was shown", async () => {
  const original = twilioProvider.sendSms; let body;
  twilioProvider.sendSms = async sent => { body = sent; return { httpStatus: 200, body: { ok: true, status: "completed", data: { sid: "SM1" } } }; };
  try { await createCommunicationsSendExecutor({ env: {} })({ input: { channel: "sms", to: "+254 712-345-678", message: "  hello   there " } }); }
  finally { twilioProvider.sendSms = original; }
  assert.equal(body.to, "+254712345678"); assert.equal(body.message, "hello there");
});

const catalog = { tools: [{ toolId: "communications.send" }], applications: [{ applicationId: "communications" }] };

test("a request that names a recipient and the words becomes one send step; a missing piece becomes a question", () => {
  const plan = sendMessagePlan("Text +254 712 345 678 saying I'm on my way", catalog);
  assert.deepEqual(plan.steps[0].input, { channel: "sms", to: "+254712345678", message: "I'm on my way" }); assert.equal(plan.steps[0].toolId, "communications.send");
  assert.equal(sendMessagePlan("Email amina@example.com saying the delivery is ready.", catalog).steps[0].input.channel, "email");
  assert.equal(sendMessagePlan("WhatsApp +254712345678 saying hi", catalog).steps[0].input.channel, "whatsapp");
  assert.equal(sendMessagePlan("Send a text to +254712345678: running late", catalog).steps[0].input.message, "running late");
  assert.equal(sendMessagePlan("Send the message to +254712345678 saying hello", catalog).steps[0].input.message, "hello");
  assert.match(sendMessagePlan("Text my brother saying hi", catalog).clarification, /phone number with the country code/);
  assert.match(sendMessagePlan("Text +254712345678", catalog).clarification, /What should the message say/);
  assert.equal(sendMessagePlan("Text +254712345678", catalog).steps.length, 0);
  assert.match(sendMessagePlan("Text my brother saying call +254700000000", catalog).clarification, /Who should I send it to/, "a number inside the words is not the recipient");
  for (const other of ["Draft a follow-up message, ask for consent, send it and show a receipt", "What is the weather today", "Remind me to text John", "I sent a text yesterday"])
    assert.equal(sendMessagePlan(other, catalog), null, other);
  assert.equal(sendMessagePlan("Text +254712345678 saying hi", { tools: [], applications: [] }), null);
});
