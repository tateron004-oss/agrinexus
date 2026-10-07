"use strict";

// What a business sends as. In the default space nothing changes (the platform's own settings). Inside a business, the platform's own sender identity must never be used: a text, call or email would
// arrive as the platform owner, spend the owner's numbers, and a sale could pay out to the owner's account. So a business gets its OWN values, set by the platform owner, and where it has none the value is
// blank, which the providers already treat as "not set up" and refuse to send.
//
// The Twilio account itself (account id and token) and the email provider's key stay shared: one account, many numbers.
const PLATFORM_ONLY_BLANKED = [
  // Recipients the platform owner configured for demos and tests: a business must not text or ring them.
  "DEMO_SMS_TO", "DEMO_WHATSAPP_TO", "DEMO_CALL_TO", "OUTBOUND_CALL_TO", "SMS_TEST_TO", "WHATSAPP_TEST_TO", "TRADE_BUYER_SMS_TO", "TRADE_BUYER_WHATSAPP_TO",
  "TRADE_BUYER_PHONE", "BUYER_PHONE", "WORKFORCE_RECRUITER_PHONE", "RECRUITER_PHONE", "TELEHEALTH_PROVIDER_PHONE", "HEALTH_PROVIDER_PHONE", "LEARNING_SUPPORT_PHONE",
  "TWILIO_AUTHORIZED_CALLERS", "PHONE_SCREENING_ENABLED",
  "SENDGRID_FROM_EMAIL", "SMTP_REPLY_TO", "SENDGRID_REPLY_TO"
];

// The settings a platform owner can give a business (all optional; blank clears one).
const SETTING_FORMATS = {
  smsFrom: { label: "SMS sender", normalize: value => (/^\+\d{7,15}$/.test(value.replace(/[\s()-]/g, "")) ? value.replace(/[\s()-]/g, "") : null) },
  whatsappFrom: { label: "WhatsApp sender", normalize: value => { const digits = value.replace(/^whatsapp:/i, "").replace(/[\s()-]/g, ""); return /^\+\d{7,15}$/.test(digits) ? `whatsapp:${digits}` : null; } },
  emailFrom: { label: "email sender", normalize: value => (value.length <= 120 && /^([^<>@\r\n]{1,60} <)?[^<>@\s]+@[^<>@\s]+\.[^<>@\s]+>?$/.test(value) && (!value.includes("<") || value.endsWith(">")) ? value : null) },
  paystackSubaccount: { label: "Paystack payout account", normalize: value => (/^[A-Za-z0-9_-]{4,60}$/.test(value) ? value : null) },
  flutterwaveSubaccount: { label: "Flutterwave payout account", normalize: value => (/^[A-Za-z0-9_-]{4,60}$/.test(value) ? value : null) }
};

// -> { ok: true, settings } | { ok: false, error }. Only known keys, each in its own format; "" removes one.
function normalizeSettings(current = {}, patch = {}) {
  const next = { ...current };
  let touched = 0;
  for (const [key, format] of Object.entries(SETTING_FORMATS)) {
    if (!Object.prototype.hasOwnProperty.call(patch, key)) continue;
    const raw = String(patch[key] ?? "").trim();
    touched += 1;
    if (!raw) { delete next[key]; continue; }
    const value = format.normalize(raw);
    if (!value) return { ok: false, error: `That is not a valid ${format.label}.` };
    next[key] = value;
  }
  if (!touched) return { ok: false, error: "Say what to set: smsFrom, whatsappFrom, emailFrom, paystackSubaccount or flutterwaveSubaccount." };
  return { ok: true, settings: next };
}

// The env a request in this business sees. `context` is { space, settings, numbers }; the default space (or no context) returns `base` itself, untouched.
function businessSenderEnv(base, context) {
  if (!context || !context.space || context.space === "default") return base;
  const settings = context.settings || {};
  const first = Array.isArray(context.numbers) && context.numbers.length ? context.numbers[0] : "";
  const env = { ...base };
  for (const name of PLATFORM_ONLY_BLANKED) env[name] = "";
  Object.assign(env, {
    TWILIO_PHONE_NUMBER: first, TWILIO_FROM_NUMBER: first, TWILIO_NUMBER: first, TWILIO_VOICE_FROM_NUMBER: first,
    TWILIO_SMS_FROM: settings.smsFrom || "", TWILIO_WHATSAPP_FROM: settings.whatsappFrom || "",
    NEXUS_EMAIL_FROM: settings.emailFrom || "",
    PAYSTACK_SUBACCOUNT_CODE: settings.paystackSubaccount || "", FLUTTERWAVE_SUBACCOUNT_ID: settings.flutterwaveSubaccount || ""
  });
  return env;
}

module.exports = Object.freeze({ PLATFORM_ONLY_BLANKED, SETTING_FORMATS, normalizeSettings, businessSenderEnv });
