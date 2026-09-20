"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const twilioProvider = require("../../server/providers/twilioProvider.js");
const emailProvider = require("../../server/providers/emailProvider.js");
const { createCommunicationsSendExecutor, verifyCommunicationsSendOutcome } = require("../../nexus/communications/executor.js");

// twilioProvider/emailProvider are plain CommonJS module-exports objects, and
// this executor looks up their functions at call time (not a destructured
// reference captured once), so patching the exported function here reaches
// the executor -- the same technique this repo already uses to keep these
// tests fast/deterministic without a real Twilio/SendGrid account or network
// access.
function withPatched(moduleExports, fnName, replacement, run) {
  const original = moduleExports[fnName];
  moduleExports[fnName] = replacement;
  return Promise.resolve(run()).finally(() => { moduleExports[fnName] = original; });
}

test("a real sms send returns a verified outcome", async () => {
  await withPatched(twilioProvider, "sendSms", async body => {
    assert.equal(body.confirmed, true);
    assert.equal(body.to, "+15551234567");
    return { httpStatus: 200, body: { ok: true, provider: "twilio", action: "sms.send", status: "completed", message: "sent", data: { sid: "SM123", to: body.to, channel: "sms" } } };
  }, async () => {
    const execute = createCommunicationsSendExecutor({ env: {} });
    const result = await execute({ input: { channel: "sms", to: "+15551234567", message: "hello" } });
    assert.equal(result.channel, "sms");
    assert.equal(result.data.sid, "SM123");
    assert.equal(verifyCommunicationsSendOutcome({ result }).verified, true);
  });
});

test("a simulated (unconfigured-credentials) send does not verify -- must not be reported as a real completion", async () => {
  await withPatched(twilioProvider, "sendSms", async () => ({
    httpStatus: 200, body: { ok: true, provider: "twilio", action: "sms.send", status: "completed", message: "simulated", data: { sid: "SIMULATEDSMS-ABC", simulated: true } }
  }), async () => {
    const execute = createCommunicationsSendExecutor({ env: {} });
    const result = await execute({ input: { channel: "sms", to: "+15551234567", message: "hello" } });
    const verification = verifyCommunicationsSendOutcome({ result });
    assert.equal(verification.verified, false);
    assert.equal(verification.reason, "provider_not_configured_simulated_only");
  });
});

// Production 2026-09-21: confirming a real email send returned "The authoritative verifier rejected the communications.send
// outcome" (send_not_completed) with no hint that email sending is switched off on the server. Nothing had been sent.
test("a provider that is off, unconfigured, blocked or failing says so plainly and nothing is reported as sent", async () => {
  const cases = [
    ["disabled", "email", emailProvider, "send", /email sending is not set up on this server yet, so nothing was sent\./, "communications_provider_unavailable", 503],
    ["missing_config", "whatsapp", twilioProvider, "sendWhatsapp", /WhatsApp sending is not set up on this server yet, so nothing was sent\./, "communications_provider_unavailable", 503],
    ["blocked", "sms", twilioProvider, "sendSms", /^I could not send it: A valid recipient is required\. Nothing was sent\.$/, "communications_send_blocked", 422],
    ["failed", "sms", twilioProvider, "sendSms", /^I could not send it: Twilio rejected the request\. Nothing was sent\.$/, "communications_provider_failed", 502]
  ];
  for (const [status, channel, provider, fn, message, code, httpStatus] of cases) {
    await withPatched(provider, fn, async () => ({ httpStatus: 200, body: { ok: false, provider: "p", action: "a", status,
      message: status === "blocked" ? "A valid recipient is required." : status === "failed" ? "Twilio rejected the request." : "not set up", data: {} } }), async () => {
      const execute = createCommunicationsSendExecutor({ env: {} });
      await assert.rejects(() => execute({ input: { channel, to: channel === "email" ? "a@b.co" : "+15551234567", message: "hello" } }),
        error => message.test(error.message) && error.code === code && error.status === httpStatus, status);
    });
  }
});

test("channel dispatch routes call and email correctly", async () => {
  await withPatched(twilioProvider, "startCall", async body => {
    assert.equal(body.to, "+15559998888");
    return { httpStatus: 200, body: { ok: true, status: "completed", data: { sid: "CA1" } } };
  }, async () => {
    const execute = createCommunicationsSendExecutor({ env: {} });
    const result = await execute({ input: { channel: "call", to: "+15559998888" } });
    assert.equal(result.channel, "call");
  });

  await withPatched(emailProvider, "send", async body => {
    assert.equal(body.to, "farmer@example.com");
    return { httpStatus: 200, body: { ok: true, status: "completed", data: { providerMessageId: "msg-1" } } };
  }, async () => {
    const execute = createCommunicationsSendExecutor({ env: {} });
    const result = await execute({ input: { channel: "email", to: "farmer@example.com", subject: "hi", message: "hello" } });
    assert.equal(result.channel, "email");
    const verification = verifyCommunicationsSendOutcome({ result });
    assert.equal(verification.verified, true);
  });
});

test("real send fields are flattened to the top level, not just nested under .data", async () => {
  // Confirmed live: twilioProvider/emailProvider's own providerResponse()
  // convention nests real fields (sid/to/channel, providerMessageId/subject)
  // inside result.body.data. Without flattening, a real send's sid/
  // providerMessageId were only reachable at outcome.data.data.sid, so the
  // client's generic outcome card rendered a raw nested JSON blob instead of
  // clean fields -- the same class of bug fixed for maps.view, just lower
  // severity here since communications.send has no strict field gate.
  await withPatched(twilioProvider, "sendSms", async () => ({
    httpStatus: 200, body: { ok: true, provider: "twilio", action: "sms.send", status: "completed",
      message: "sent", data: { sid: "SM456", to: "+15551234567", channel: "sms" } }
  }), async () => {
    const execute = createCommunicationsSendExecutor({ env: {} });
    const result = await execute({ input: { channel: "sms", to: "+15551234567", message: "hello" } });
    assert.equal(result.sid, "SM456");
    assert.equal(result.data.sid, "SM456");
  });

  await withPatched(emailProvider, "send", async () => ({
    httpStatus: 200, body: { ok: true, status: "completed", data: { providerMessageId: "msg-42", subject: "hi" } }
  }), async () => {
    const execute = createCommunicationsSendExecutor({ env: {} });
    const result = await execute({ input: { channel: "email", to: "farmer@example.com", subject: "hi", message: "hello" } });
    assert.equal(result.providerMessageId, "msg-42");
  });
});

test("an unrecognized channel falls back to sms", async () => {
  await withPatched(twilioProvider, "sendSms", async () => ({ httpStatus: 200, body: { ok: true, status: "completed", data: { sid: "SM9" } } }), async () => {
    const execute = createCommunicationsSendExecutor({ env: {} });
    const result = await execute({ input: { channel: "carrier-pigeon", to: "+15551234567", message: "hi" } });
    assert.equal(result.channel, "sms");
  });
});
