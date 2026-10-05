"use strict";

// What the owner needs to know to get Kyro's four ways of reaching people working: texts, WhatsApp, email and phone calls. It reads the same settings the real senders read
// (server/providers/twilioProvider.js and emailProvider.js), so what it reports is what will actually happen: which settings are missing, whether a send would be real or only a
// labelled simulation, and, after a test, what the provider said in plain words. It never returns a secret: only whether a setting is set, and for a phone number or address only a
// masked form.
const twilioProvider = require("./twilioProvider.js");
const emailProvider = require("./emailProvider.js");
const { envEnabled, domainProviderSimulationEnabled } = require("./providerUtils.js");

const clean = value => String(value ?? "").trim();
const isSet = (env, name) => Boolean(clean(env[name])) && !clean(env[name]).includes("replace-with");
const flagState = (env, names) => {
  const on = names.some(name => envEnabled(name, env));
  return { names, on, shown: names.map(name => `${name}=${clean(env[name]) ? (envEnabled(name, env) ? "true" : "not true") : "not set"}`).join(" or ") };
};
// The Twilio settings still missing, named the way an owner would set them (an account SID and auth token, unless an API key pair is being used).
function twilioMissing(env) {
  const raw = twilioProvider.twilioConfigured(env);
  if (!raw.length) return [];
  const usingApiKey = isSet(env, "TWILIO_API_KEY_SID") || isSet(env, "TWILIO_API_KEY_SECRET");
  if (usingApiKey) return raw;
  return ["TWILIO_ACCOUNT_SID", "TWILIO_AUTH_TOKEN"].filter(name => !isSet(env, name));
}
const maskPhone = value => { const digits = clean(value).replace(/^whatsapp:/i, ""); return digits.length > 7 ? `${digits.slice(0, 4)}${"*".repeat(Math.max(0, digits.length - 8))}${digits.slice(-4)}` : digits ? "set" : ""; };
const maskEmail = value => { const [name, domain] = clean(value).split("@"); return domain ? `${name.slice(0, 1)}***@${domain}` : ""; };
const FREE_MAIL = /@(?:gmail|googlemail|yahoo|outlook|hotmail|live|icloud|aol|proton(?:mail)?)\./i;
const TWILIO_SANDBOX = /\+?14155238886/;

// state: "ready" (configured; a test is still needed to prove it), "simulated" (switched on but not configured, so a send is only a labelled pretend), "needs-setup", "off"
function describeTwilioChannel({ id, label, flag, extraMissing = [], from, env, extraNotes = [] }) {
  const base = twilioMissing(env);
  const missing = [...base, ...extraMissing];
  const on = flag.on;
  const simulated = on && missing.length && domainProviderSimulationEnabled(env);
  const state = !on ? "off" : !missing.length ? "ready" : simulated ? "simulated" : "needs-setup";
  const summary = state === "ready" ? `${label} is switched on and has its settings. Send yourself a test to prove it.`
    : state === "simulated" ? `${label} is switched on but not fully set up, so anything Kyro "sends" is only a labelled pretend: nothing reaches a phone. Missing: ${missing.join(", ")}.`
    : state === "needs-setup" ? `${label} is switched on but missing: ${missing.join(", ")}.`
    : `${label} is switched off. Set ${flag.names.join(" or ")} to true${missing.length ? `, and add: ${missing.join(", ")}` : ""}.`;
  return { id, label, state, summary, switch: { setting: flag.names.join(" or "), on, shown: flag.shown }, missing, from: from ? maskPhone(from) : "", notes: extraNotes };
}

function describeCommunications(env = process.env, { ownPhone = "", adminEmail = "", authorizedCallerCount = 0 } = {}) {
  const twilioFrom = twilioProvider.twilioFromNumber(env);
  const smsFlag = flagState(env, ["NEXUS_SMS_ENABLED", "NEXUS_MESSAGES_ENABLED"]);
  const channels = [];

  channels.push(describeTwilioChannel({ id: "sms", label: "Text messages", flag: smsFlag, extraMissing: twilioFrom ? [] : ["TWILIO_FROM_NUMBER (or TWILIO_PHONE_NUMBER)"], from: twilioFrom, env,
    extraNotes: ["Twilio accepting a text is not the same as it arriving: a test tells you what the phone network said (error 30032, for example, means the sending number is not registered)."] }));

  const whatsappFrom = clean(env.TWILIO_WHATSAPP_FROM);
  const whatsappNotes = ["A business can only start a WhatsApp conversation with a pre-approved message template; after the person replies there is a 24-hour window for free-form messages. Kyro's reminders and alerts will need a few templates registered."];
  if (TWILIO_SANDBOX.test(whatsappFrom)) whatsappNotes.push("This is Twilio's shared SANDBOX number: only people who first send Twilio's join code to it can receive messages. Good for testing, not for real users.");
  if (whatsappFrom && !/^(?:whatsapp:)?\+\d{7,}$/.test(whatsappFrom)) whatsappNotes.push("TWILIO_WHATSAPP_FROM should look like whatsapp:+14155238886.");
  channels.push(describeTwilioChannel({ id: "whatsapp", label: "WhatsApp", flag: flagState(env, ["NEXUS_WHATSAPP_ENABLED"]), extraMissing: whatsappFrom ? [] : ["TWILIO_WHATSAPP_FROM"], from: whatsappFrom, env, extraNotes: whatsappNotes }));

  // email
  const emailState = emailProvider.status(env);
  const emailFlag = flagState(env, ["NEXUS_EMAIL_ENABLED", "NEXUS_MESSAGES_ENABLED"]);
  const emailFrom = clean(env.NEXUS_EMAIL_FROM);
  const emailNotes = [];
  if (isSet(env, "SENDGRID_FROM_EMAIL") && !emailFrom) emailNotes.push("SENDGRID_FROM_EMAIL is set, but Kyro reads NEXUS_EMAIL_FROM for the sender address. Set NEXUS_EMAIL_FROM to the same verified address.");
  if (/^webhook$/i.test(clean(env.EMAIL_PROVIDER)) && !isSet(env, "SENDGRID_API_KEY") && !isSet(env, "RESEND_API_KEY")) emailNotes.push("EMAIL_PROVIDER=webhook belongs to the older provider-engines path. Kyro's own email sending uses NEXUS_EMAIL_PROVIDER (sendgrid or resend) with the provider's API key.");
  if (emailFrom && FREE_MAIL.test(emailFrom)) emailNotes.push("A free-mail sender address (Gmail, Yahoo, Outlook) is fine for a first test but often lands in spam or is rejected. Before real users, verify a domain you own and send from it.");
  emailNotes.push("Kyro can send email only after the person confirms it, and cannot read email at all.");
  const emailMissing = emailState.missingConfig;
  const emailStateName = !emailFlag.on ? "off" : !emailMissing.length ? "ready" : "needs-setup";
  channels.push({ id: "email", label: "Email", state: emailStateName,
    summary: emailStateName === "ready" ? `Email is switched on and set up with ${emailState.provider}${emailFrom ? ` (sending as ${maskEmail(emailFrom)})` : ""}. Send yourself a test to prove it: the provider also has to have verified the sender address.`
      : emailStateName === "needs-setup" ? `Email is switched on but missing: ${emailMissing.join(", ")}.`
      : `Email is switched off. Set ${emailFlag.names.join(" or ")} to true${emailMissing.length ? `, and add: ${emailMissing.join(", ")}` : ""}.`,
    switch: { setting: emailFlag.names.join(" or "), on: emailFlag.on, shown: emailFlag.shown }, missing: emailMissing, from: maskEmail(emailFrom), provider: emailState.provider, notes: emailNotes });

  // phone calls: calling Kyro (incoming), and Kyro calling out
  const phoneNotes = [];
  const base = clean(env.PUBLIC_BASE_URL).replace(/\/$/, "");
  const callMissing = [...twilioMissing(env), ...(twilioFrom ? [] : ["TWILIO_FROM_NUMBER (or TWILIO_PHONE_NUMBER)"]), ...(base ? [] : ["PUBLIC_BASE_URL"])];
  const callsFlag = flagState(env, ["NEXUS_CALLS_ENABLED"]);
  const incomingOn = clean(env.PHONE_PROVIDER).toLowerCase() === "twilio";
  if (!incomingOn) phoneNotes.push("PHONE_PROVIDER is not twilio, so people cannot phone Kyro.");
  if (base) phoneNotes.push(`In the Twilio console, set the number's "A call comes in" webhook to ${base}/api/voice/phone/incoming (HTTP POST) and its status callback to ${base}/api/voice/phone/call-status.`);
  phoneNotes.push(`${authorizedCallerCount} number${authorizedCallerCount === 1 ? " is" : "s are"} on the list of people who may phone Kyro as themselves; anyone else is screened and connected to the owner. Add yours under "Phone numbers for Kyro" in the Admin screen.`);
  if (envEnabled("PHONE_REALTIME_STREAMING_ENABLED", env)) phoneNotes.push("Two-way voice conversation on the phone line is switched on."); else phoneNotes.push("PHONE_REALTIME_STREAMING_ENABLED is not true, so a caller is not connected to the live voice conversation.");
  const callChannel = describeTwilioChannel({ id: "calls", label: "Phone calls (Kyro calling out)", flag: callsFlag, extraMissing: [...(twilioFrom ? [] : ["TWILIO_FROM_NUMBER (or TWILIO_PHONE_NUMBER)"]), ...(base ? [] : ["PUBLIC_BASE_URL"])], from: twilioFrom, env, extraNotes: phoneNotes });
  channels.push({ ...callChannel, incoming: { on: incomingOn, authorizedCallers: authorizedCallerCount } });

  return {
    channels,
    simulationWhenUnconfigured: domainProviderSimulationEnabled(env),
    testRecipients: { phone: ownPhone ? maskPhone(ownPhone) : "", email: adminEmail ? maskEmail(adminEmail) : "" },
    note: "Tests only ever go to your own phone number (the one linked to your account under Phone numbers for Kyro) or your own account email, never to anyone else."
  };
}

// What a provider's error code means, in plain words, and what to do about it. The wording is cautious: a code points at a likely cause, and the provider's own page has the detail.
const TWILIO_ERRORS = Object.freeze({
  30032: ["The sending number is not verified for texting, so the carriers blocked the message.", "In the Twilio console, complete the verification or registration for this number (a toll-free number needs toll-free verification; some countries need a registered sender ID), or send from a number that is already registered."],
  30007: ["The phone network filtered the message as unwanted.", "Check the wording, avoid links, and make sure the sending number or sender ID is registered."],
  30003: ["The phone could not be reached (switched off or out of coverage).", "Try again later, or test with another phone."],
  30004: ["The phone's owner or network has blocked messages from this number.", "Test with another phone."],
  30005: ["The number is not a working phone number.", "Check the number, including the country code."],
  30006: ["The number is a landline or cannot receive texts.", "Test with a mobile number."],
  21608: ["Your Twilio account is still a trial account, which can only send to numbers you have verified in Twilio.", "Verify this number in the Twilio console, or upgrade the account."],
  21211: ["Twilio does not accept the phone number.", "Use the full international form, like +254712345678."],
  21614: ["The number cannot receive texts.", "Test with a mobile number."],
  21606: ["The sending number is not a number Twilio can send texts from.", "Set TWILIO_FROM_NUMBER to a Twilio number that has SMS capability."],
  21610: ["That phone replied STOP, so Twilio will not send to it.", "Have the person reply START, or test with another phone."],
  21408: ["Your Twilio account is not allowed to send to that country yet.", "In the Twilio console, open Messaging, Settings, Geo permissions and enable the country."],
  20003: ["Twilio refused the account details.", "Check TWILIO_ACCOUNT_SID and TWILIO_AUTH_TOKEN (or the API key pair) in Render."],
  63007: ["Twilio has no WhatsApp sender for the number in TWILIO_WHATSAPP_FROM.", "Set it to your WhatsApp sandbox number or an approved WhatsApp sender, like whatsapp:+14155238886."],
  63015: ["The WhatsApp sandbox only sends to people who have joined it.", "From that phone, send Twilio's join code to the sandbox number on WhatsApp, then test again."],
  63016: ["WhatsApp only allows a pre-approved template message to start a conversation (or after 24 hours of silence).", "Register a message template with Twilio and WhatsApp, or reply to a message from that person first."],
  63018: ["WhatsApp is limiting how fast messages are sent.", "Wait a little and try again."]
});

function explainFailure({ channel = "", errorCode = null, message = "", httpStatus = 0 } = {}) {
  const code = Number(errorCode);
  if (TWILIO_ERRORS[code]) return { plain: TWILIO_ERRORS[code][0], next: TWILIO_ERRORS[code][1], code };
  const text = clean(message);
  if (channel === "email") {
    if (httpStatus === 401 || /unauthor|invalid api key|api key/i.test(text)) return { plain: "The email provider did not accept the API key.", next: "Check SENDGRID_API_KEY (or RESEND_API_KEY) in Render, and that the key has permission to send mail." };
    if (httpStatus === 403 || /verified sender|sender identity|from address|domain is not verified|not verified/i.test(text)) return { plain: "The email provider has not verified the sender address.", next: "In SendGrid open Settings, Sender Authentication, and verify the exact address in NEXUS_EMAIL_FROM (or authenticate its domain). With Resend, verify the domain." };
    if (httpStatus === 400 || httpStatus === 422) return { plain: "The email provider rejected the request.", next: "Check NEXUS_EMAIL_FROM is a plain address like name@yourdomain.org." };
  }
  if (/not set up|disabled|missing/i.test(text)) return { plain: "That channel is not switched on or not fully configured.", next: "See the status cards above for the setting that is missing." };
  return { plain: text ? `The provider said: ${text.slice(0, 200)}` : "The provider did not accept the request.", next: "Check the provider's dashboard for the details of this attempt." };
}

const TEST_TEXT = Object.freeze({
  sms: "Kyro test message: if you can read this, sending texts works.",
  whatsapp: "Kyro test message: if you can read this, WhatsApp sending works.",
  call: "This is a test call from Kyro. If you can hear this, calls from Kyro work. Goodbye.",
  email: { subject: "Kyro test email", text: "This is a test email from Kyro. If you can read this, email sending works." }
});

// Turns what a provider returned into one plain result for the owner. `result` is the provider's { body: { status, message, data } } object.
function summarizeTest(channel, result) {
  const body = result?.body || {};
  const data = body.data || {};
  const status = clean(body.status);
  const simulated = data.simulated === true;
  const errorCode = data.errorCode ?? null;
  const base = { channel, providerStatus: status, simulated, id: data.sid || data.providerMessageId || "", deliveryConfirmed: data.deliveryConfirmed === true, errorCode };
  if (simulated) return { ...base, ok: false, outcome: "simulated", plain: "Nothing was really sent: this channel is switched on but not configured, so Kyro made a labelled pretend send.", next: "Add the missing settings shown on the status card, then test again." };
  if (status === "completed") {
    const delivered = base.deliveryConfirmed;
    return { ...base, ok: true, outcome: delivered ? "delivered" : "accepted",
      plain: channel === "email" ? "The email provider accepted the email. Check your inbox (and the spam folder): acceptance does not guarantee delivery."
        : channel === "call" ? "Twilio started the call. Your phone should ring now."
        : delivered ? "Delivered: the phone network confirmed it." : "Twilio accepted the message; delivery to the phone is not confirmed yet. If nothing arrives in a minute, test again and read the result.",
      next: "" };
  }
  const why = explainFailure({ channel, errorCode, message: body.message, httpStatus: Number(String(body.message || "").match(/\[(\d{3})\]/)?.[1] || 0) });
  return { ...base, ok: false, outcome: status === "disabled" ? "off" : status === "missing_config" ? "needs-setup" : "failed", plain: why.plain, next: why.next, providerMessage: clean(body.message).slice(0, 300) };
}

module.exports = Object.freeze({ describeCommunications, explainFailure, summarizeTest, TEST_TEXT, maskPhone, maskEmail });
