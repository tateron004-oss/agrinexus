const crypto = require("node:crypto");
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
  safeJson,
  domainProviderSimulationEnabled,
  simulatedProviderResponse,
  xmlEscape
} = require("./providerUtils");

const TWILIO_BASE = "https://api.twilio.com/2010-04-01";
const TWILIO_FROM_ENV_NAMES = ["TWILIO_FROM_NUMBER", "TWILIO_PHONE_NUMBER", "TWILIO_NUMBER"];

function twilioCredentials(env = process.env) {
  const accountSid = clean(env.TWILIO_ACCOUNT_SID);
  const apiKeySid = clean(env.TWILIO_API_KEY_SID);
  const apiKeySecret = clean(env.TWILIO_API_KEY_SECRET);
  const authToken = clean(env.TWILIO_AUTH_TOKEN);

  if (accountSid && apiKeySid && apiKeySecret) {
    return { accountSid, username: apiKeySid, password: apiKeySecret, authentication: "api-key" };
  }
  if (accountSid && authToken) {
    return { accountSid, username: accountSid, password: authToken, authentication: "auth-token" };
  }
  return null;
}

function twilioConfigured(env = process.env) {
  if (twilioCredentials(env)) return [];
  const missing = missingEnv(["TWILIO_ACCOUNT_SID"], env);
  const apiKeyPartiallyConfigured = clean(env.TWILIO_API_KEY_SID) || clean(env.TWILIO_API_KEY_SECRET);
  if (apiKeyPartiallyConfigured) {
    return [...missing, ...missingEnv(["TWILIO_API_KEY_SID", "TWILIO_API_KEY_SECRET"], env)];
  }
  return [...missing, "TWILIO_API_KEY_SID", "TWILIO_API_KEY_SECRET"];
}

function firstConfiguredEnv(names = [], env = process.env) {
  return names.find(name => clean(env[name]) && !clean(env[name]).includes("replace-with")) || "";
}

function missingPreferredEnv(names = [], preferredName, env = process.env) {
  return firstConfiguredEnv(names, env) ? [] : [preferredName];
}

function twilioFromNumber(env = process.env) {
  const name = firstConfiguredEnv(TWILIO_FROM_ENV_NAMES, env);
  return name ? clean(env[name]) : "";
}

function smsEnabled(env = process.env) {
  return envEnabled("NEXUS_SMS_ENABLED", env) || envEnabled("NEXUS_MESSAGES_ENABLED", env);
}

// When the feature is wanted (NEXUS_SMS_ENABLED etc.) but no real Twilio
// credentials exist yet, fall back to a clearly-labeled simulated response
// (via providerUtils.simulatedProviderResponse) instead of just reporting
// missing config -- so the app stays fully demoable without a Twilio
// account. Real credentials always take priority over simulation when both
// happen to be present.
function simulatedTwilioResponse(provider, action, channel, to) {
  return simulatedProviderResponse(provider, action, {
    idField: "sid",
    idPrefix: `SIMULATED${channel.toUpperCase()}`,
    extra: { to, channel },
    note: `Simulated ${channel} completed by the local demo double after explicit confirmation. Twilio is not configured, so no real message reached a phone -- this is a labeled simulated response for demoing the full build-out before a real account is connected.`
  });
}

function status(env = process.env) {
  const baseMissing = twilioConfigured(env);
  const fromMissing = missingPreferredEnv(TWILIO_FROM_ENV_NAMES, "TWILIO_FROM_NUMBER", env);
  return {
    provider: "twilio",
    sms: {
      enabled: smsEnabled(env),
      missingConfig: [...baseMissing, ...fromMissing]
    },
    whatsapp: {
      enabled: envEnabled("NEXUS_WHATSAPP_ENABLED", env),
      missingConfig: [...baseMissing, ...missingEnv(["TWILIO_WHATSAPP_FROM"], env)]
    },
    calls: {
      enabled: envEnabled("NEXUS_CALLS_ENABLED", env),
      missingConfig: [...baseMissing, ...fromMissing]
    }
  };
}

async function twilioPost(path, params, env = process.env) {
  const credentials = twilioCredentials(env);
  if (!credentials) throw new Error("Twilio credentials are not configured.");
  const auth = Buffer.from(`${credentials.username}:${credentials.password}`).toString("base64");
  const response = await fetch(`${TWILIO_BASE}/Accounts/${credentials.accountSid}${path}`, {
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
  if (!smsEnabled(env)) return disabledResponse(provider, action, "NEXUS_SMS_ENABLED");
  const missing = [...twilioConfigured(env), ...missingPreferredEnv(TWILIO_FROM_ENV_NAMES, "TWILIO_FROM_NUMBER", env)];
  if (missing.length && !domainProviderSimulationEnabled(env)) return missingConfigResponse(provider, action, missing);
  const confirmation = requireConfirmation(body, provider, action);
  if (confirmation) return confirmation;
  const toError = validateText(body.to, "SMS recipient", { max: 80, pattern: /^\+?[0-9][0-9\s().-]{6,}$/ });
  const messageError = validateText(body.message, "SMS message", { max: 1200 });
  if (toError || messageError) return blockedResponse(provider, action, toError || messageError);
  if (missing.length) return simulatedTwilioResponse(provider, action, "sms", clean(body.to));
  try {
    const result = await twilioPost("/Messages.json", { To: clean(body.to), From: twilioFromNumber(env), Body: clean(body.message) }, env);
    // Twilio answering with a message id means it ACCEPTED the message, not that it reached the phone (2026-09-21: a
    // "sent" text never arrived). Look the message up once, shortly after, and report what Twilio says.
    const progress = await twilioMessageProgress(result.sid, result.status, env);
    if (progress.failed) {
      return failedResponse(provider, action, new Error(`Twilio reported the text as ${progress.status}${progress.errorCode ? ` (error ${progress.errorCode}${progress.errorMessage ? `: ${progress.errorMessage}` : ""})` : ""}`));
    }
    return providerResponse({
      provider,
      action,
      status: "completed",
      message: progress.status === "delivered" ? "SMS delivered by Twilio after explicit confirmation."
        : `SMS accepted by Twilio${progress.status ? ` (status: ${progress.status})` : ""} after explicit confirmation. Delivery to the phone is not confirmed yet.`,
      data: { sid: result.sid, to: clean(body.to), channel: "sms", providerStatus: progress.status || "", errorCode: progress.errorCode || null, deliveryConfirmed: progress.status === "delivered" }
    });
  } catch (error) {
    return failedResponse(provider, action, error);
  }
}

// One read-only look at a message Twilio has just accepted. Never throws: if the lookup fails, the send result stands with
// whatever status Twilio returned when it accepted the message.
async function twilioMessageProgress(sid, acceptedStatus, env = process.env, resource = "Messages") {
  let status = String(acceptedStatus || "").toLowerCase(), errorCode = null, errorMessage = "";
  try {
    const delay = Number(clean(env.NEXUS_SMS_STATUS_DELAY_MS) || 2000);
    if (sid && delay > 0) await new Promise(resolve => setTimeout(resolve, Math.min(delay, 10000)));
    const credentials = twilioCredentials(env);
    if (sid && credentials) {
      const auth = Buffer.from(`${credentials.username}:${credentials.password}`).toString("base64");
      const response = await fetch(`${TWILIO_BASE}/Accounts/${credentials.accountSid}/${resource}/${encodeURIComponent(sid)}.json`, { headers: { authorization: `Basic ${auth}` } });
      const payload = await safeJson(response);
      if (response.ok && payload && typeof payload === "object") {
        status = String(payload.status || status).toLowerCase();
        errorCode = payload.error_code ?? null;
        errorMessage = String(payload.error_message || "");
      }
    }
  } catch { /* the accepted send stands */ }
  return { status, errorCode, errorMessage, failed: status === "failed" || status === "undelivered" };
}

async function sendWhatsapp(body = {}, env = process.env) {
  const provider = "twilio";
  const action = "whatsapp.send";
  if (!envEnabled("NEXUS_WHATSAPP_ENABLED", env)) return disabledResponse(provider, action, "NEXUS_WHATSAPP_ENABLED");
  const missing = [...twilioConfigured(env), ...missingEnv(["TWILIO_WHATSAPP_FROM"], env)];
  if (missing.length && !domainProviderSimulationEnabled(env)) return missingConfigResponse(provider, action, missing);
  const confirmation = requireConfirmation(body, provider, action);
  if (confirmation) return confirmation;
  const toError = validateText(body.to, "WhatsApp recipient", { max: 90 });
  const messageError = validateText(body.message, "WhatsApp message", { max: 1200 });
  if (toError || messageError) return blockedResponse(provider, action, toError || messageError);
  if (missing.length) return simulatedTwilioResponse(provider, action, "whatsapp", clean(body.to));
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
  const missing = [...twilioConfigured(env), ...missingPreferredEnv(TWILIO_FROM_ENV_NAMES, "TWILIO_FROM_NUMBER", env)];
  if (missing.length && !domainProviderSimulationEnabled(env)) return missingConfigResponse(provider, action, missing);
  const confirmation = requireConfirmation(body, provider, action);
  if (confirmation) return confirmation;
  const toError = validateText(body.to, "Call target", { max: 80, pattern: /^\+?[0-9][0-9\s().-]{6,}$/ });
  if (toError) return blockedResponse(provider, action, toError);
  if (missing.length) return simulatedTwilioResponse(provider, action, "voice", clean(body.to));
  const twiml = `<Response><Say voice="alice">${xmlEscape(clean(body.message || "This is a confirmed Nexus provider testing call."))}</Say></Response>`;
  try {
    const result = await twilioPost("/Calls.json", { To: clean(body.to), From: twilioFromNumber(env), Twiml: twiml }, env);
    // Twilio returning a call id means it accepted the call, not that anyone answered. Look it up once and say what Twilio reports.
    const progress = await twilioMessageProgress(result.sid, result.status, env, "Calls");
    if (progress.status === "failed") return failedResponse(provider, action, new Error("Twilio reported the call as failed"));
    return providerResponse({
      provider,
      action,
      status: "completed",
      message: `Call started through Twilio${progress.status ? ` (status: ${progress.status})` : ""} after explicit confirmation. Whether the person answered is not confirmed.`,
      data: { sid: result.sid, to: clean(body.to), channel: "voice", providerStatus: progress.status || "", answered: progress.status === "in-progress" || progress.status === "completed" }
    });
  } catch (error) {
    return failedResponse(provider, action, error);
  }
}

// Places a real call to the ACCOUNT OWNER's own phone first; once they pick
// up, <Dial> bridges in a second real leg to the target number so the two
// humans talk directly -- Kyro is the dialer, not a participant. This is
// deliberately a different shape from startCall() above (which has Kyro
// deliver a one-way spoken announcement): here the TwiML never puts words
// in Kyro's mouth beyond a one-line "connecting you" heads-up.
async function startConnectCall(body = {}, env = process.env) {
  const provider = "twilio";
  const action = "call.connect";
  if (!envEnabled("NEXUS_CALLS_ENABLED", env)) return disabledResponse(provider, action, "NEXUS_CALLS_ENABLED");
  const missing = [...twilioConfigured(env), ...missingPreferredEnv(TWILIO_FROM_ENV_NAMES, "TWILIO_FROM_NUMBER", env)];
  if (missing.length && !domainProviderSimulationEnabled(env)) return missingConfigResponse(provider, action, missing);
  const confirmation = requireConfirmation(body, provider, action);
  if (confirmation) return confirmation;
  const phonePattern = /^\+?[0-9][0-9\s().-]{6,}$/;
  const userError = validateText(body.userPhone, "Your own phone number", { max: 80, pattern: phonePattern });
  if (userError) return blockedResponse(provider, action, userError);
  if (!phonePattern.test(clean(body.targetPhone))) {
    return blockedResponse(provider, action, "I need a real phone number to connect this call to -- saying a saved contact's name for lookup isn't wired up yet, so please give me the number directly.");
  }
  if (missing.length) return simulatedTwilioResponse(provider, action, "voice-connect", clean(body.targetPhone));
  const fromNumber = twilioFromNumber(env);
  const targetLabel = clean(body.targetName) || "your contact";
  const twiml = `<Response><Say voice="alice">Connecting you to ${xmlEscape(targetLabel)} now.</Say><Dial callerId="${xmlEscape(fromNumber)}"><Number>${xmlEscape(clean(body.targetPhone))}</Number></Dial></Response>`;
  try {
    const result = await twilioPost("/Calls.json", { To: clean(body.userPhone), From: fromNumber, Twiml: twiml }, env);
    const progress = await twilioMessageProgress(result.sid, result.status, env, "Calls");
    if (progress.status === "failed") return failedResponse(provider, action, new Error("Twilio reported the call as failed"));
    return providerResponse({
      provider,
      action,
      status: "completed",
      message: `Kyro is calling your own phone now to connect you with ${targetLabel}${progress.status ? ` (status: ${progress.status})` : ""}. Answer it and you'll be bridged through once they pick up.`,
      data: { sid: result.sid, calledUser: clean(body.userPhone), connectingTo: clean(body.targetPhone), channel: "voice-connect", providerStatus: progress.status || "" }
    });
  } catch (error) {
    return failedResponse(provider, action, error);
  }
}

// "Kyro, connect me to my supplier and listen" (2026-09-23): like
// startConnectCall above, but Kyro also transcribes the call afterward so a
// follow-up request ("now call the delivery driver about that order") can
// use what was actually said, without repeating it. This is a materially
// different, LEGALLY SENSITIVE shape of call and must never be reached by
// the plain "connect me" phrasing above -- most US states and many other
// countries require ALL parties on a call to consent before it can be
// recorded/transcribed, not just the person who asked Kyro to do it. The
// disclosure line spoken to the THIRD PARTY's leg before it joins the
// conference is what makes this lawful; it is not optional and must never
// be removed or shortened to just the user's own leg. Two separate real
// outbound legs join one Twilio Conference (not a plain <Dial><Number>)
// specifically so each leg can be given its own TwiML -- the user hears a
// heads-up, the third party hears the required consent disclosure -- before
// the two are bridged together.
async function startConnectAndListenCall(body = {}, env = process.env) {
  const provider = "twilio";
  const action = "call.connect_and_listen";
  if (!envEnabled("NEXUS_CALLS_ENABLED", env)) return disabledResponse(provider, action, "NEXUS_CALLS_ENABLED");
  const missing = [...twilioConfigured(env), ...missingPreferredEnv(TWILIO_FROM_ENV_NAMES, "TWILIO_FROM_NUMBER", env), ...missingEnv(["PUBLIC_BASE_URL"], env)];
  if (missing.length && !domainProviderSimulationEnabled(env)) return missingConfigResponse(provider, action, missing);
  const confirmation = requireConfirmation(body, provider, action);
  if (confirmation) return confirmation;
  const phonePattern = /^\+?[0-9][0-9\s().-]{6,}$/;
  const userError = validateText(body.userPhone, "Your own phone number", { max: 80, pattern: phonePattern });
  if (userError) return blockedResponse(provider, action, userError);
  if (!phonePattern.test(clean(body.targetPhone))) {
    return blockedResponse(provider, action, "I need a real phone number to connect this call to -- saying a saved contact's name for lookup isn't wired up yet, so please give me the number directly.");
  }
  if (!clean(body.userId)) return blockedResponse(provider, action, "An account is required to hold onto call context afterward.");
  if (missing.length) return simulatedTwilioResponse(provider, action, "voice-connect-listen", clean(body.targetPhone));
  const fromNumber = twilioFromNumber(env);
  const targetLabel = clean(body.targetName) || "your contact";
  const conferenceName = `kyro-listen-${crypto.randomUUID()}`;
  const base = clean(env.PUBLIC_BASE_URL).replace(/\/$/, "");
  const recordingCallbackUrl = `${base}/api/voice/phone/listen-recording?userId=${encodeURIComponent(clean(body.userId))}&targetName=${encodeURIComponent(targetLabel)}`;
  const conferenceAttrs = `startConferenceOnEnter="true" record="record-from-start" recordingStatusCallback="${xmlEscape(recordingCallbackUrl)}" recordingStatusCallbackEvent="completed" recordingStatusCallbackMethod="POST"`;
  const userTwiml = `<Response><Say voice="alice">Connecting you to ${xmlEscape(targetLabel)} now. Kyro will listen to this call so it can help you right after -- this call may be recorded and transcribed.</Say><Dial><Conference ${conferenceAttrs} endConferenceOnExit="true">${xmlEscape(conferenceName)}</Conference></Dial></Response>`;
  const targetTwiml = `<Response><Say voice="alice">This call may be recorded and transcribed by an AI assistant to help the caller with a follow-up task.</Say><Dial><Conference ${conferenceAttrs} endConferenceOnExit="false">${xmlEscape(conferenceName)}</Conference></Dial></Response>`;
  try {
    const userCallResult = await twilioPost("/Calls.json", { To: clean(body.userPhone), From: fromNumber, Twiml: userTwiml }, env);
    const targetCallResult = await twilioPost("/Calls.json", { To: clean(body.targetPhone), From: fromNumber, Twiml: targetTwiml }, env);
    return providerResponse({
      provider,
      action,
      status: "completed",
      message: `Kyro is calling your own phone now to connect you with ${targetLabel}. Answer it and you'll both be connected shortly -- ${targetLabel} will hear that the call may be recorded and transcribed before you're bridged together. Say "I'm on it, coach" style follow-ups afterward and Kyro will use what was discussed.`,
      data: { userCallSid: userCallResult.sid, targetCallSid: targetCallResult.sid, conferenceName, calledUser: clean(body.userPhone), connectingTo: clean(body.targetPhone), channel: "voice-connect-listen" }
    });
  } catch (error) {
    return failedResponse(provider, action, error);
  }
}

module.exports = { status, sendSms, sendWhatsapp, startCall, startConnectCall, startConnectAndListenCall, twilioFromNumber };
