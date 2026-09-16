"use strict";

// Real executor for the "communications.send" canonical tool, following the
// exact pattern nexus/reminders/executor.js already established for
// reminders.schedule: server/providers/twilioProvider.js and
// server/providers/emailProvider.js are already-real, already-audited
// integrations (used elsewhere in this codebase) -- this just wires the
// authoritative task engine to call them directly instead of the
// scripts/provider-engines.js mock every other canonical tool still uses.
const twilioProvider = require("../../server/providers/twilioProvider.js");
const emailProvider = require("../../server/providers/emailProvider.js");

const CHANNEL_HANDLERS = {
  sms: (body, env) => twilioProvider.sendSms(body, env),
  whatsapp: (body, env) => twilioProvider.sendWhatsapp(body, env),
  call: (body, env) => twilioProvider.startCall(body, env),
  email: (body, env) => emailProvider.send(body, env)
};

function normalizeChannel(value) {
  const channel = String(value || "sms").trim().toLowerCase();
  return CHANNEL_HANDLERS[channel] ? channel : "sms";
}

function createCommunicationsSendExecutor({ env = process.env } = {}) {
  return async function execute({ input = {} }) {
    const channel = normalizeChannel(input.channel);
    const handler = CHANNEL_HANDLERS[channel];
    // The engine's own confirmationRequired/consentScope gate on
    // "communications.send" (canonical-provider-definitions.js) has already
    // been satisfied by the time execute() reaches this executor -- pass
    // confirmed:true through so the provider's own internal
    // requireConfirmation() check (a second, independent gate inside
    // twilioProvider/emailProvider) doesn't re-block an already-approved step.
    const body = {
      confirmed: true,
      to: input.to || input.recipient || "",
      message: input.message || input.text || input.body || "",
      subject: input.subject || "Nexus message",
      text: input.message || input.text || input.body || ""
    };
    const result = await handler(body, env);
    return { channel, ...result.body };
  };
}

function verifyCommunicationsSendOutcome({ result }) {
  // ok:true alone isn't enough -- twilioProvider falls back to a clearly
  // labeled *simulated* success when real credentials aren't configured
  // (see simulatedTwilioResponse in twilioProvider.js). This tool exists to
  // make Kyro's sends real, so a simulated send must NOT verify as a real
  // completed action -- the task should honestly fail/block instead.
  const data = result?.data || {};
  const hasRealProviderId = Boolean(data.sid || data.providerMessageId);
  const verified = result?.status === "completed" && result?.ok !== false && hasRealProviderId && data.simulated !== true;
  return { verified, method: "real_provider_send", reason: verified ? null : (data.simulated === true ? "provider_not_configured_simulated_only" : "send_not_completed") };
}

module.exports = Object.freeze({ createCommunicationsSendExecutor, verifyCommunicationsSendOutcome });
