"use strict";

// What a person can be asked to approve before Nexus sends a message or places a call for them: one text, WhatsApp message,
// email or phone call, to one recipient they named, with the exact words shown back to them. Anything that does not fit
// (several recipients, a number without a country code, no message, a very long message, an emergency or premium-rate number)
// is not available through the confirmation-consent path.
const CHANNELS = Object.freeze(["sms", "whatsapp", "email", "call"]);
const MAX_MESSAGE_LENGTH = 500;
// A call is read aloud by a computer voice, so its words are kept short.
const MAX_CALL_MESSAGE_LENGTH = 300;
// What the computer voice says first, so the person who answers knows it is an automated call and who it is from. It is part of
// what the confirmation prompt tells the caller will be said.
const CALL_INTRO = "This is an automated message from Kyro.";
const PHONE = /^\+[1-9]\d{7,14}$/;
const EMAIL = /^[^\s@<>,;"]+@[^\s@<>,;"]+\.[^\s@<>,;"]+$/;
// Premium-rate and other numbers that charge the person answering or the account: North American 900/976, and the international
// premium-rate and satellite ranges (+979, +870, +881-883). Calls to them are refused, not confirmed.
const PREMIUM_OR_SPECIAL = /^\+(?:1(?:900|976)|979|870|88[123])/;

function normalizeRecipient(channel, value) {
  const raw = String(value ?? "").trim();
  if (channel === "email") return EMAIL.test(raw) ? raw : null;
  const phone = raw.replace(/[\s().-]/g, "");
  if (!PHONE.test(phone)) return null;
  if (channel === "call" && PREMIUM_OR_SPECIAL.test(phone)) return null;
  return phone;
}

// Returns { channel, to, message, subject } when the input is a complete, sendable request, otherwise null.
function normalizeSendRequest(input = {}) {
  const channel = String(input.channel || "sms").trim().toLowerCase();
  if (!CHANNELS.includes(channel)) return null;
  const to = normalizeRecipient(channel, input.to || input.recipient);
  const message = String(input.message || input.text || input.body || "").replace(/\s+/g, " ").trim();
  const limit = channel === "call" ? MAX_CALL_MESSAGE_LENGTH : MAX_MESSAGE_LENGTH;
  if (!to || !message || message.length > limit) return null;
  const subject = channel === "email" ? String(input.subject || "").replace(/\s+/g, " ").trim().slice(0, 120) : "";
  return { channel, to, message, subject };
}

module.exports = Object.freeze({ CHANNELS, MAX_MESSAGE_LENGTH, MAX_CALL_MESSAGE_LENGTH, CALL_INTRO, normalizeRecipient, normalizeSendRequest });
