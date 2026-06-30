const {
  clean,
  envEnabled,
  missingEnv,
  providerResponse,
  disabledResponse,
  missingConfigResponse,
  requireConfirmation,
  blockedResponse,
  failedResponse,
  validateText,
  safeJson
} = require("./providerUtils");

const TWILIO_BASE = "https://api.twilio.com/2010-04-01";

function twilioConfigured(env = process.env) {
  return missingEnv(["TWILIO_ACCOUNT_SID", "TWILIO_AUTH_TOKEN"], env);
}

function status(env = process.env) {
  const baseMissing = twilioConfigured(env);
  return {
    provider: "twilio",
    sms: {
      enabled: envEnabled("NEXUS_MESSAGES_ENABLED", env),
      missingConfig: [...baseMissing, ...missingEnv(["TWILIO_FROM_NUMBER"], env)]
    },
    whatsapp: {
      enabled: envEnabled("NEXUS_WHATSAPP_ENABLED", env),
      missingConfig: [...baseMissing, ...missingEnv(["TWILIO_WHATSAPP_FROM"], env)]
    },
    calls: {
      enabled: envEnabled("NEXUS_CALLS_ENABLED", env),
      missingConfig: [...baseMissing, ...missingEnv(["TWILIO_FROM_NUMBER"], env)]
    }
  };
}

async function twilioPost(path, params, env = process.env) {
  const auth = Buffer.from(`${env.TWILIO_ACCOUNT_SID}:${env.TWILIO_AUTH_TOKEN}`).toString("base64");
  const response = await fetch(`${TWILIO_BASE}/Accounts/${env.TWILIO_ACCOUNT_SID}${path}`, {
    method: "POST",
    headers: {
      authorization: `Basic ${auth}`,
      "content-type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams(params)
  });
  const payload = await safeJson(response);
  if (!response.ok) throw new Error(payload.message || payload.error || response.statusText);
  return payload;
}

async function sendSms(body = {}, env = process.env) {
  const provider = "twilio";
  const action = "sms.send";
  if (!envEnabled("NEXUS_MESSAGES_ENABLED", env)) return disabledResponse(provider, action, "NEXUS_MESSAGES_ENABLED");
  const missing = [...twilioConfigured(env), ...missingEnv(["TWILIO_FROM_NUMBER"], env)];
  if (missing.length) return missingConfigResponse(provider, action, missing);
  const confirmation = requireConfirmation(body, provider, action);
  if (confirmation) return confirmation;
  const toError = validateText(body.to, "SMS recipient", { max: 80, pattern: /^\+?[0-9][0-9\s().-]{6,}$/ });
  const messageError = validateText(body.message, "SMS message", { max: 1200 });
  if (toError || messageError) return blockedResponse(provider, action, toError || messageError);
  try {
    const result = await twilioPost("/Messages.json", { To: clean(body.to), From: env.TWILIO_FROM_NUMBER, Body: clean(body.message) }, env);
    return providerResponse({
      provider,
      action,
      status: "completed",
      message: "SMS sent through Twilio after explicit confirmation.",
      data: { sid: result.sid, to: clean(body.to), channel: "sms" }
    });
  } catch (error) {
    return failedResponse(provider, action, error);
  }
}

async function sendWhatsapp(body = {}, env = process.env) {
  const provider = "twilio";
  const action = "whatsapp.send";
  if (!envEnabled("NEXUS_WHATSAPP_ENABLED", env)) return disabledResponse(provider, action, "NEXUS_WHATSAPP_ENABLED");
  const missing = [...twilioConfigured(env), ...missingEnv(["TWILIO_WHATSAPP_FROM"], env)];
  if (missing.length) return missingConfigResponse(provider, action, missing);
  const confirmation = requireConfirmation(body, provider, action);
  if (confirmation) return confirmation;
  const toError = validateText(body.to, "WhatsApp recipient", { max: 90 });
  const messageError = validateText(body.message, "WhatsApp message", { max: 1200 });
  if (toError || messageError) return blockedResponse(provider, action, toError || messageError);
  const to = clean(body.to).startsWith("whatsapp:") ? clean(body.to) : `whatsapp:${clean(body.to)}`;
  const from = clean(env.TWILIO_WHATSAPP_FROM).startsWith("whatsapp:") ? clean(env.TWILIO_WHATSAPP_FROM) : `whatsapp:${clean(env.TWILIO_WHATSAPP_FROM)}`;
  try {
    const result = await twilioPost("/Messages.json", { To: to, From: from, Body: clean(body.message) }, env);
    return providerResponse({
      provider,
      action,
      status: "completed",
      message: "WhatsApp message sent through Twilio after explicit confirmation.",
      data: { sid: result.sid, to, channel: "whatsapp" }
    });
  } catch (error) {
    return failedResponse(provider, action, error);
  }
}

async function startCall(body = {}, env = process.env) {
  const provider = "twilio";
  const action = "call.start";
  if (!envEnabled("NEXUS_CALLS_ENABLED", env)) return disabledResponse(provider, action, "NEXUS_CALLS_ENABLED");
  const missing = [...twilioConfigured(env), ...missingEnv(["TWILIO_FROM_NUMBER"], env)];
  if (missing.length) return missingConfigResponse(provider, action, missing);
  const confirmation = requireConfirmation(body, provider, action);
  if (confirmation) return confirmation;
  const toError = validateText(body.to, "Call target", { max: 80, pattern: /^\+?[0-9][0-9\s().-]{6,}$/ });
  if (toError) return blockedResponse(provider, action, toError);
  const twiml = `<Response><Say voice="alice">${clean(body.message || "This is a confirmed Nexus provider testing call.")}</Say></Response>`;
  try {
    const result = await twilioPost("/Calls.json", { To: clean(body.to), From: env.TWILIO_FROM_NUMBER, Twiml: twiml }, env);
    return providerResponse({
      provider,
      action,
      status: "completed",
      message: "Call started through Twilio after explicit confirmation.",
      data: { sid: result.sid, to: clean(body.to), channel: "voice" }
    });
  } catch (error) {
    return failedResponse(provider, action, error);
  }
}

module.exports = { status, sendSms, sendWhatsapp, startCall };
