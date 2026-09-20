"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const emailProvider = require("../../server/providers/emailProvider.js");

// 2026-09-21: a confirmed email failed with just "Forbidden". SendGrid had actually said why, in an `errors` list the provider
// did not read.
const sendgridEnv = { NEXUS_EMAIL_ENABLED: "true", NEXUS_EMAIL_PROVIDER: "sendgrid", SENDGRID_API_KEY: "SG.super-secret-key-value", NEXUS_EMAIL_FROM: "sender@example.com" };
const resendEnv = { NEXUS_EMAIL_ENABLED: "true", NEXUS_EMAIL_PROVIDER: "resend", RESEND_API_KEY: "re_super_secret", NEXUS_EMAIL_FROM: "sender@example.com" };
const refusal = (status, statusText, payload) => async () => ({ ok: false, status, statusText, text: async () => (payload === undefined ? "" : JSON.stringify(payload)) });

async function sendWith(fetchImpl, env) {
  const original = global.fetch; global.fetch = fetchImpl;
  try { return await emailProvider.send({ confirmed: true, to: "me@example.com", subject: "Hi", message: "hello" }, env); }
  finally { global.fetch = original; }
}

test("SendGrid's own reason and field are shown instead of the bare status text", async () => {
  const result = await sendWith(refusal(403, "Forbidden", { errors: [{ message: "The from address does not match a verified Sender Identity.", field: "from", help: "https://sendgrid.com/docs" }] }), sendgridEnv);
  assert.equal(result.body.status, "failed");
  assert.equal(result.body.message, "The from address does not match a verified Sender Identity. (from) [403]");
});

test("a key without permission and several errors are reported, capped at two", async () => {
  const result = await sendWith(refusal(403, "Forbidden", { errors: [{ message: "access forbidden" }, { message: "second problem", field: "x" }, { message: "third problem" }] }), sendgridEnv);
  assert.equal(result.body.message, "access forbidden; second problem (x) [403]");
});

test("Resend's flat message, a nested error message, and the bare status text still work", async () => {
  assert.equal((await sendWith(refusal(422, "Unprocessable", { message: "Invalid `from` field." }), resendEnv)).body.message, "Invalid `from` field. [422]");
  assert.equal((await sendWith(refusal(401, "Unauthorized", { error: { message: "API key is invalid" } }), resendEnv)).body.message, "API key is invalid [401]");
  assert.equal((await sendWith(refusal(403, "Forbidden", undefined), sendgridEnv)).body.message, "Forbidden [403]");
  assert.equal((await sendWith(refusal(500, "", {}), sendgridEnv)).body.message, "The provider refused the request. [500]");
});

test("the message never contains the API key, and very long provider text is trimmed", async () => {
  const result = await sendWith(refusal(403, "Forbidden", { errors: [{ message: `bad key ${"x".repeat(1000)}` }] }), sendgridEnv);
  assert.ok(!result.body.message.includes("SG.super-secret-key-value"));
  assert.ok(result.body.message.length <= 310, `trimmed (${result.body.message.length})`);
});

test("a send that works is unchanged", async () => {
  const result = await sendWith(async () => ({ ok: true, status: 202, headers: { get: () => "msg-1" }, text: async () => "{}" }), sendgridEnv);
  assert.equal(result.body.status, "completed"); assert.equal(result.body.data.providerMessageId, "msg-1");
});
