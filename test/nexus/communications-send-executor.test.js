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

test("a missing-config / disabled response does not verify", async () => {
  await withPatched(twilioProvider, "sendWhatsapp", async () => ({
    httpStatus: 200, body: { ok: false, provider: "twilio", action: "whatsapp.send", status: "missing_config", message: "not configured", data: {} }
  }), async () => {
    const execute = createCommunicationsSendExecutor({ env: {} });
    const result = await execute({ input: { channel: "whatsapp", to: "+15551234567", message: "hello" } });
    assert.equal(verifyCommunicationsSendOutcome({ result }).verified, false);
  });
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

test("an unrecognized channel falls back to sms", async () => {
  await withPatched(twilioProvider, "sendSms", async () => ({ httpStatus: 200, body: { ok: true, status: "completed", data: { sid: "SM9" } } }), async () => {
    const execute = createCommunicationsSendExecutor({ env: {} });
    const result = await execute({ input: { channel: "carrier-pigeon", to: "+15551234567", message: "hi" } });
    assert.equal(result.channel, "sms");
  });
});
