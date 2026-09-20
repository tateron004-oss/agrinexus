"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { BehaviorSpine } = require("../../nexus/runtime/behavior-spine.js");
const { callPlan, sendMessagePlan } = require("../../nexus/brain/planner.js");
const { userConfirmableConsent, consentRecipient, consentSendChannel, dailyCaps, informedConfirmationPrompt } = require("../../nexus/consent/user-confirmable-consents.js");
const { normalizeSendRequest, CALL_INTRO } = require("../../nexus/communications/send-request.js");
const { ConsentRepository } = require("../../nexus/consent/repository.js");
const twilioProvider = require("../../server/providers/twilioProvider.js");
const { createCommunicationsSendExecutor, verifyCommunicationsSendOutcome } = require("../../nexus/communications/executor.js");

const SCOPE = "communications:send:write";
const step = input => ({ step_id: "stp_1", tool_id: "communications.send", title: "Place a phone call", input });
const call = { channel: "call", to: "+15105019401", message: "I am on my way" };

test("a call needs one real phone number and short words, and never an emergency, premium-rate or special number", () => {
  assert.deepEqual(normalizeSendRequest({ channel: "call", to: "+1 (510) 501-9401", message: "  I am   on my way " }), { channel: "call", to: "+15105019401", message: "I am on my way", subject: "" });
  for (const bad of [{ to: "+19005551234" }, { to: "+19765551234" }, { to: "+9795551234567" }, { to: "+8701234567890" }, { to: "+8821234567890" }, { to: "0712345678" }, { to: "911" }, { to: "+15105019401 +254712345678" }, { to: "a@b.co" }])
    assert.equal(normalizeSendRequest({ channel: "call", message: "hi", ...bad }), null, JSON.stringify(bad));
  assert.equal(normalizeSendRequest({ channel: "call", to: "+15105019401", message: "x".repeat(301) }), null, "spoken words are capped at 300");
  assert.notEqual(normalizeSendRequest({ channel: "call", to: "+15105019401", message: "x".repeat(300) }), null);
  assert.notEqual(normalizeSendRequest({ channel: "sms", to: "+19005551234", message: "hi" }), null, "the premium-rate refusal is for calls, where the number answering is charged");
});

test("the prompt announces the automated disclosure and the exact words, and says the call cannot be undone", () => {
  assert.equal(informedConfirmationPrompt({ scope: SCOPE, step: step(call) }),
    `I can place a phone call to +15105019401. A computer voice will first say "${CALL_INTRO}" and then "I am on my way". The call really happens and cannot be undone. Say yes to call, or no to cancel.`);
  assert.equal(informedConfirmationPrompt({ scope: SCOPE, step: step({ channel: "call", to: "+19005551234", message: "hi" }) }), null);
  assert.equal(consentRecipient(SCOPE, step(call)), "+15105019401"); assert.equal(consentSendChannel(SCOPE, step(call)), "call");
  assert.equal(consentSendChannel(SCOPE, step({ channel: "sms", to: "+15105019401", message: "hi" })), "sms"); assert.equal(consentSendChannel("health:record:write", step(call)), null);
  assert.notEqual(userConfirmableConsent(SCOPE, step(call)), null);
});

test("calls have their own tighter daily cap of 3 on top of the overall 10", () => {
  assert.deepEqual(dailyCaps(SCOPE, step(call)), [{ limit: 3, channel: "call", noun: "calls" }, { limit: 10, channel: null, noun: "messages and calls" }]);
  assert.deepEqual(dailyCaps(SCOPE, step({ channel: "sms", to: "+15105019401", message: "hi" })), [{ limit: 10, channel: null, noun: "messages and calls" }]);
  assert.deepEqual(dailyCaps("health:record:write", step({})), []);
  assert.deepEqual(dailyCaps(SCOPE, step({ draft: "x" })), []);
});

function harness(input, counts) {
  const calls = [];
  const task = { taskId: "tsk_1", ownerId: "u1", application: "communications", goal: "call", riskTier: "regulated", conversationId: "cnv_1", steps: [step(input)] };
  const engine = { tools: { get: async () => ({ tool_id: "communications.send", consent_scope: SCOPE }) }, approve: async () => calls.push(["approve"]),
    transition: async () => { calls.push(["transition"]); return { taskId: "tsk_1", state: "cancelled" }; }, executeTask: async () => { calls.push(["execute"]); return { state: "awaiting_render", receipts: [] }; },
    consents: { active: async () => null, countGrantedSince: async args => { calls.push(["count", args.channel]); return counts(args.channel); }, grant: async args => { calls.push(["grant", args]); return { consent_id: "c1" }; } } };
  return { calls, spine: new BehaviorSpine({ agent: { command: async () => assert.fail("not used") }, engine, tasks: { get: async () => task }, conversations: { append: async () => {} }, workspaceStates: { stage: async () => {}, acknowledge: async () => {} } }) };
}
const yes = { taskId: "tsk_1", stepId: "stp_1", approved: true, text: "Yes, call.", channel: "voice" };
const context = { tenantId: "t1", userId: "u1", can: () => true, hasRole: () => false };

test("the owner's yes records a consent tagged as a call, after checking the call cap and then the overall cap", async () => {
  const { spine, calls } = harness(call, () => 0);
  await spine.confirm({ input: yes, context });
  assert.deepEqual(calls.map(entry => entry[0] === "count" ? `count:${entry[1]}` : entry[0]), ["approve", "count:call", "count:null", "grant", "execute"]);
  assert.equal(calls.find(entry => entry[0] === "grant")[1].receipt.sendChannel, "call");
});

test("the fourth call of the day is refused with a clear message even though the overall cap has room", async () => {
  const { spine, calls } = harness(call, channel => channel === "call" ? 3 : 4);
  const result = await spine.confirm({ input: yes, context });
  assert.equal(result.state, "cancelled"); assert.match(result.response, /used today's limit of 3 calls through Nexus/);
  assert.equal(calls.some(entry => entry[0] === "grant" || entry[0] === "execute"), false);
  const texts = harness({ channel: "sms", to: "+15105019401", message: "hi" }, channel => channel === "call" ? 3 : 4);
  await texts.spine.confirm({ input: yes, context });
  assert.equal(texts.calls.some(entry => entry[0] === "execute"), true, "three calls used does not block a text");
});

test("the consent repository can count only one channel", async () => {
  let seen;
  const repo = new ConsentRepository({ query: async (sql, params) => { seen = { sql, params }; return { rows: [{ count: 2 }] }; } });
  assert.equal(await repo.countGrantedSince({ tenantId: "t", subjectId: "u", scope: SCOPE, channel: "call" }), 2);
  assert.deepEqual(seen.params, ["t", "u", SCOPE, 24, "call"]); assert.match(seen.sql, /receipt->>'sendChannel' = \$5::text/);
});

const catalog = { tools: [{ toolId: "communications.send" }], applications: [{ applicationId: "communications" }] };

test("a request with a phone number and the words becomes one call step; a missing piece is a question; look-alikes are left alone", () => {
  const plan = callPlan("Call +1 510 501 9401 and say I am on my way", catalog);
  assert.deepEqual(plan.steps[0].input, { channel: "call", to: "+15105019401", message: "I am on my way" }); assert.equal(plan.steps[0].toolId, "communications.send");
  assert.equal(callPlan("Please phone +254712345678 saying the delivery is ready.", catalog).steps[0].input.message, "the delivery is ready.");
  assert.equal(callPlan("Ring +254712345678 and tell them that I am late", catalog).steps[0].input.message, "I am late");
  assert.equal(callPlan("Dial +254712345678: harvest starts Monday", catalog).steps[0].input.message, "harvest starts Monday");
  assert.equal(callPlan("Call +254712345678", catalog).clarification, "What should the call say?");
  for (const other of ["Call me a taxi", "Call it a day", "Call my brother and say hi", "What is the phone number of KCB?", "Text +254712345678 saying hi", "I made a call to +254712345678 yesterday", "Callum is at +254712345678"])
    assert.equal(callPlan(other, catalog), null, other);
  assert.equal(callPlan("Call +254712345678 and say hi", { tools: [], applications: [] }), null);
  assert.equal(sendMessagePlan("Call +254712345678 and say hi", catalog), null, "texts and calls are separate matchers");
});

const env = { TWILIO_ACCOUNT_SID: "AC123", TWILIO_AUTH_TOKEN: "token", TWILIO_FROM_NUMBER: "+15550009999", NEXUS_CALLS_ENABLED: "true", NEXUS_SMS_STATUS_DELAY_MS: "0" };
const reply = payload => ({ ok: true, status: 200, text: async () => JSON.stringify(payload) });
async function withFetch(impl, run) { const original = global.fetch; const requests = []; global.fetch = async (url, options = {}) => { requests.push({ url: String(url), method: options.method || "GET", body: String(options.body || "") }); return impl(String(url), options); }; try { return await run(requests); } finally { global.fetch = original; } }

test("the call says the disclosure first, then the approved words, and reports what Twilio says about it", async () => {
  await withFetch((url, options) => options.method === "POST" ? reply({ sid: "CA1", status: "queued" }) : reply({ sid: "CA1", status: "ringing" }), async requests => {
    const result = await createCommunicationsSendExecutor({ env })({ input: { ...call, to: "+1 510 501 9401", message: "  I am   on my way " } });
    assert.match(decodeURIComponent(requests[0].body.replace(/\+/g, " ")), new RegExp(`<Say voice="alice">${CALL_INTRO} I am on my way</Say>`));
    assert.deepEqual(requests.map(entry => `${entry.method} ${entry.url.split("/2010-04-01/Accounts/AC123")[1]}`), ["POST /Calls.json", "GET /Calls/CA1.json"]);
    assert.match(requests[0].body, /To=%2B15105019401/, "the normalized number is dialed");
    assert.equal(result.channel, "voice", "the provider labels a call's channel voice"); assert.equal(result.sid, "CA1"); assert.equal(result.providerStatus, "ringing"); assert.equal(result.answered, false);
    assert.equal(result.message, "Call started through Twilio (status: ringing) after explicit confirmation. Whether the person answered is not confirmed.");
    assert.equal(verifyCommunicationsSendOutcome({ result }).verified, true);
  });
});

test("a call Twilio reports as failed, or that the server has switched off, says so and is never verified", async () => {
  await withFetch((url, options) => options.method === "POST" ? reply({ sid: "CA2", status: "queued" }) : reply({ sid: "CA2", status: "failed" }), async () => {
    await assert.rejects(() => createCommunicationsSendExecutor({ env })({ input: call }),
      error => error.code === "communications_provider_failed" && error.message === "I could not place the call: Twilio reported the call as failed. No call was completed.");
  });
  await assert.rejects(() => createCommunicationsSendExecutor({ env: { ...env, NEXUS_CALLS_ENABLED: "false" } })({ input: call }),
    error => error.code === "communications_provider_unavailable" && error.message === "I could not place the call: phone calls are not set up on this server yet, so no call was made.");
});
