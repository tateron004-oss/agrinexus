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
const { normalizeSendRequest } = require("./send-request.js");

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
    // A complete text/WhatsApp/email request is sent exactly as the person was shown it (see send-request.js and the
    // confirmation prompt): the normalized number or address and the whitespace-collapsed words.
    const shown = normalizeSendRequest({ ...input, channel });
    const words = shown ? shown.message : input.message || input.text || input.body || "";
    const body = {
      confirmed: true,
      to: shown ? shown.to : input.to || input.recipient || "",
      message: words,
      subject: shown?.subject || input.subject || "Nexus message",
      text: words
    };
    const result = await handler(body, env);
    // A provider that is switched off, not configured, refused the request or failed did not send anything. Say that plainly
    // (the person otherwise sees a generic "verifier rejected the outcome" error and cannot tell that nothing went out).
    const providerStatus = result?.body?.status;
    const label = { sms: "text message", whatsapp: "WhatsApp", call: "call", email: "email" }[channel];
    if (providerStatus === "disabled" || providerStatus === "missing_config") {
      throw Object.assign(new Error(`I could not send it: ${label} sending is not set up on this server yet, so nothing was sent.`),
        { code: "communications_provider_unavailable", status: 503 });
    }
    if (providerStatus === "blocked" || providerStatus === "failed") {
      throw Object.assign(new Error(`I could not send it: ${String(result.body.message || "the provider refused the request").replace(/[.\s]+$/, "")}. It was not delivered.`),
        { code: providerStatus === "blocked" ? "communications_send_blocked" : "communications_provider_failed", status: providerStatus === "blocked" ? 422 : 502 });
    }
    // twilioProvider/emailProvider both use providerUtils.js's
    // providerResponse() (the shared server/providers/*.js convention),
    // which nests the real send fields (sid/providerMessageId/to/subject)
    // inside result.body.data, not at result.body's own top level. Confirmed
    // via the same audit that found the identical shape mismatch for
    // maps.view (nexus/maps/executor.js): communications.send's own
    // presentation kind ("communication") has no strict field gate, so this
    // never made a real send invisible the way it did for maps -- but it did
    // mean the client's generic outcome card showed a raw, unreadable nested
    // JSON blob (`Data: {"sid":"SM...", ...}`) instead of clean sid/to
    // fields, and any future caller reading outcome.data.sid directly
    // (rather than outcome.data.data.sid) would silently see undefined.
    return { channel, ...result.body, ...(result.body?.data || {}) };
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
  // Say which way it failed: "the provider accepted it but gave no message id" means the message may well have been sent and
  // only the proof is missing, which is very different from a provider that never sent anything.
  const reason = data.simulated === true ? "provider_not_configured_simulated_only"
    : result?.status === "completed" && result?.ok !== false && !hasRealProviderId ? "provider_accepted_without_message_id"
      : `provider_status_${String(result?.status || "unknown").replace(/[^a-z_]/gi, "").toLowerCase() || "unknown"}`;
  return { verified, method: "real_provider_send", reason: verified ? null : reason };
}

module.exports = Object.freeze({ createCommunicationsSendExecutor, verifyCommunicationsSendOutcome });
