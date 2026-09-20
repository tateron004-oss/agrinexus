"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const twilioProvider = require("../../server/providers/twilioProvider.js");
const { createCommunicationsSendExecutor, verifyCommunicationsSendOutcome } = require("../../nexus/communications/executor.js");

// 2026-09-21: a confirmed text was reported as "SMS sent through Twilio" (verified, with a message id) and never reached the
// phone. Twilio's answer to the send only means the message was ACCEPTED; the provider now looks it up once and reports what
// Twilio says, and a message Twilio already reports as failed or undelivered is a failure, not a success.
const env = { TWILIO_ACCOUNT_SID: "AC123", TWILIO_AUTH_TOKEN: "token", TWILIO_FROM_NUMBER: "+15550009999", NEXUS_SMS_ENABLED: "true", NEXUS_SMS_STATUS_DELAY_MS: "0" };
const reply = payload => ({ ok: true, status: 200, text: async () => JSON.stringify(payload) });

async function sendWith(fetchImpl, extraEnv = {}) {
  const original = global.fetch; const calls = [];
  global.fetch = async (url, options = {}) => { calls.push({ url: String(url), method: options.method || "GET" }); return fetchImpl(String(url), options); };
  try { return { result: await twilioProvider.sendSms({ to: "+15105019401", message: "hi", confirmed: true }, { ...env, ...extraEnv }), calls }; }
  finally { global.fetch = original; }
}
const twilio = ({ accepted = { sid: "SM1", status: "queued" }, lookup }) => async (url, options) =>
  options.method === "POST" ? reply(accepted) : lookup ? lookup() : reply({ sid: "SM1", status: "queued" });

test("a message Twilio has only accepted is reported as accepted, not delivered", async () => {
  const { result, calls } = await sendWith(twilio({ lookup: () => reply({ sid: "SM1", status: "sent", error_code: null }) }));
  assert.equal(result.body.status, "completed"); assert.equal(result.body.data.providerStatus, "sent"); assert.equal(result.body.data.deliveryConfirmed, false);
  assert.match(result.body.message, /^SMS accepted by Twilio \(status: sent\) after explicit confirmation\. Delivery to the phone is not confirmed yet\.$/);
  assert.doesNotMatch(result.body.message, /sent through Twilio/);
  assert.deepEqual(calls.map(call => call.method), ["POST", "GET"], "one send and one read-only lookup");
  assert.match(calls[1].url, /\/Messages\/SM1\.json$/);
});

test("a delivered message says delivered", async () => {
  const { result } = await sendWith(twilio({ lookup: () => reply({ sid: "SM1", status: "delivered" }) }));
  assert.equal(result.body.message, "SMS delivered by Twilio after explicit confirmation."); assert.equal(result.body.data.deliveryConfirmed, true);
});

test("a message Twilio already reports as failed or undelivered is a failure with Twilio's error code", async () => {
  for (const status of ["failed", "undelivered"]) {
    const { result } = await sendWith(twilio({ lookup: () => reply({ sid: "SM1", status, error_code: 30034, error_message: "Message from an unregistered number blocked" }) }));
    assert.equal(result.body.status, "failed", status);
    assert.equal(result.body.message, `Twilio reported the text as ${status} (error 30034: Message from an unregistered number blocked)`);
  }
});

test("if the lookup fails, the accepted send stands with the status Twilio first returned", async () => {
  const { result } = await sendWith(twilio({ accepted: { sid: "SM2", status: "queued" }, lookup: () => { throw new Error("network down"); } }));
  assert.equal(result.body.status, "completed"); assert.equal(result.body.data.providerStatus, "queued");
  assert.match(result.body.message, /accepted by Twilio \(status: queued\)/);
  const { result: notOk } = await sendWith(twilio({ lookup: () => ({ ok: false, status: 500, text: async () => "{}" }) }));
  assert.equal(notOk.body.data.providerStatus, "queued");
});

test("a failed message reaches the person as 'not delivered' with the reason, never as a verified send", async () => {
  const original = global.fetch;
  global.fetch = twilio({ lookup: () => reply({ sid: "SM1", status: "undelivered", error_code: 30034, error_message: "blocked" }) });
  try {
    await assert.rejects(() => createCommunicationsSendExecutor({ env })({ input: { channel: "sms", to: "+15105019401", message: "hi" } }),
      error => error.code === "communications_provider_failed" && /^I could not send it: Twilio reported the text as undelivered \(error 30034: blocked\)\. It was not delivered\.$/.test(error.message));
  } finally { global.fetch = original; }
  global.fetch = twilio({ lookup: () => reply({ sid: "SM1", status: "sent" }) });
  try {
    const result = await createCommunicationsSendExecutor({ env })({ input: { channel: "sms", to: "+15105019401", message: "hi" } });
    assert.equal(result.sid, "SM1"); assert.equal(verifyCommunicationsSendOutcome({ result }).verified, true);
    assert.equal(result.deliveryConfirmed, false, "the result carries that delivery is not confirmed");
  } finally { global.fetch = original; }
});
