const {
  clean,
  envEnabled,
  providerResponse,
  disabledResponse,
  requireConfirmation,
  blockedResponse
} = require("./providerUtils");

const twilioProvider = require("./twilioProvider");

const SENSITIVE_COMMUNICATION_PATTERN = /\b(patient|diagnos|prescri|medical record|payment|card|bank|password|secret|token|private key|emergency dispatch)\b/i;

function maskPhone(value = "") {
  const text = clean(value);
  const digits = text.replace(/\D/g, "");
  if (!digits) return "";
  return `${text.trim().startsWith("+") ? "+" : ""}${"*".repeat(Math.max(4, digits.length - 4))}${digits.slice(-4)}`;
}

function ownerRecipient(env = process.env) {
  const value = clean(env.OWNER_TEST_RECIPIENT_NUMBER || env.TEST_RECIPIENT_NUMBER);
  return {
    configured: Boolean(value),
    masked: value ? maskPhone(value) : "",
    missingConfig: value ? [] : ["OWNER_TEST_RECIPIENT_NUMBER"]
  };
}

function status(env = process.env) {
  const twilio = twilioProvider.status(env);
  return {
    provider: "nexus-communications-bridge",
    enabled: envEnabled("NEXUS_COMMUNICATIONS_BRIDGE_ENABLED", env, true),
    twilio,
    ownerRecipient: ownerRecipient(env),
    draftOnlyAvailable: true,
    noSilentSend: true,
    noSilentCall: true,
    confirmationControlled: true
  };
}

function safeMessage(body = {}) {
  const message = clean(body.message || body.draft || "Nexus communication draft for controlled review.").slice(0, 1000);
  if (!message) return { error: "Message draft is required." };
  if (SENSITIVE_COMMUNICATION_PATTERN.test(message)) return { error: "Communication drafts must not include health, payment, credential, emergency dispatch, or secret content." };
  return { message };
}

function targetNumber(body = {}, env = process.env) {
  return clean(body.to || env.OWNER_TEST_RECIPIENT_NUMBER || env.TEST_RECIPIENT_NUMBER);
}

function draft(body = {}, env = process.env) {
  const provider = "nexus-communications-bridge";
  const action = "communications.draft";
  if (!envEnabled("NEXUS_COMMUNICATIONS_BRIDGE_ENABLED", env, true)) return disabledResponse(provider, action, "NEXUS_COMMUNICATIONS_BRIDGE_ENABLED");
  const channel = clean(body.channel || "sms").toLowerCase();
  const safe = safeMessage(body);
  if (safe.error) return blockedResponse(provider, action, safe.error);
  return providerResponse({
    provider,
    action,
    status: "prepared",
    message: `${channel.toUpperCase()} draft prepared locally. It was not sent and no call was placed.`,
    data: {
      channel,
      draft: safe.message,
      recipientMasked: maskPhone(targetNumber(body, env)),
      sent: false,
      callStarted: false,
      noProviderContact: true
    }
  });
}

async function sendSms(body = {}, env = process.env) {
  const provider = "nexus-communications-bridge";
  const action = "communications.sms.send";
  if (!envEnabled("NEXUS_COMMUNICATIONS_BRIDGE_ENABLED", env, true)) return disabledResponse(provider, action, "NEXUS_COMMUNICATIONS_BRIDGE_ENABLED");
  const safe = safeMessage(body);
  if (safe.error) return blockedResponse(provider, action, safe.error);
  const to = targetNumber(body, env);
  if (!to) return blockedResponse(provider, action, "Owner-approved SMS recipient is required.");
  const confirmation = requireConfirmation(body, provider, action);
  if (confirmation) return confirmation;
  const result = await twilioProvider.sendSms({ confirmed: true, to, message: safe.message }, env);
  if (result.body?.data?.to) result.body.data.to = maskPhone(result.body.data.to);
  return result;
}

async function sendWhatsapp(body = {}, env = process.env) {
  const provider = "nexus-communications-bridge";
  const action = "communications.whatsapp.send";
  if (!envEnabled("NEXUS_COMMUNICATIONS_BRIDGE_ENABLED", env, true)) return disabledResponse(provider, action, "NEXUS_COMMUNICATIONS_BRIDGE_ENABLED");
  const safe = safeMessage(body);
  if (safe.error) return blockedResponse(provider, action, safe.error);
  const to = targetNumber(body, env);
  if (!to) return blockedResponse(provider, action, "Owner-approved WhatsApp recipient is required.");
  const confirmation = requireConfirmation(body, provider, action);
  if (confirmation) return confirmation;
  const result = await twilioProvider.sendWhatsapp({ confirmed: true, to, message: safe.message }, env);
  if (result.body?.data?.to) result.body.data.to = maskPhone(result.body.data.to);
  return result;
}

function prepareCall(body = {}, env = process.env) {
  const provider = "nexus-communications-bridge";
  const action = "communications.call.prepare";
  if (!envEnabled("NEXUS_COMMUNICATIONS_BRIDGE_ENABLED", env, true)) return disabledResponse(provider, action, "NEXUS_COMMUNICATIONS_BRIDGE_ENABLED");
  const to = targetNumber(body, env);
  return providerResponse({
    provider,
    action,
    status: "prepared",
    message: "Call prepared for review only. No call was started.",
    data: { recipientMasked: maskPhone(to), callStarted: false, requiresConfirmation: true }
  });
}

async function startCall(body = {}, env = process.env) {
  const provider = "nexus-communications-bridge";
  const action = "communications.call.start";
  if (!envEnabled("NEXUS_COMMUNICATIONS_BRIDGE_ENABLED", env, true)) return disabledResponse(provider, action, "NEXUS_COMMUNICATIONS_BRIDGE_ENABLED");
  const to = targetNumber(body, env);
  if (!to) return blockedResponse(provider, action, "Owner-approved call recipient is required.");
  const confirmation = requireConfirmation(body, provider, action);
  if (confirmation) return confirmation;
  const result = await twilioProvider.startCall({ confirmed: true, to, message: clean(body.message || "This is a confirmed Nexus communications bridge test call.") }, env);
  if (result.body?.data?.to) result.body.data.to = maskPhone(result.body.data.to);
  return result;
}

module.exports = { status, draft, sendSms, sendWhatsapp, prepareCall, startCall, maskPhone };
