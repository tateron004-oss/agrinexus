"use strict";

// What a person can be asked to approve before Nexus sends a message for them: one text, WhatsApp message or email, to one
// recipient they named, with the exact words shown back to them. Anything that does not fit (a call, several recipients, a
// number without a country code, no message, a very long message) is not sendable through the confirmation-consent path.
const CHANNELS = Object.freeze(["sms", "whatsapp", "email"]);
const MAX_MESSAGE_LENGTH = 500;
const PHONE = /^\+[1-9]\d{7,14}$/;
const EMAIL = /^[^\s@<>,;"]+@[^\s@<>,;"]+\.[^\s@<>,;"]+$/;

function normalizeRecipient(channel, value) {
  const raw = String(value ?? "").trim();
  if (channel === "email") return EMAIL.test(raw) ? raw : null;
  const phone = raw.replace(/[\s().-]/g, "");
  return PHONE.test(phone) ? phone : null;
}

// Returns { channel, to, message, subject } when the input is a complete, sendable request, otherwise null.
function normalizeSendRequest(input = {}) {
  const channel = String(input.channel || "sms").trim().toLowerCase();
  if (!CHANNELS.includes(channel)) return null;
  const to = normalizeRecipient(channel, input.to || input.recipient);
  const message = String(input.message || input.text || input.body || "").replace(/\s+/g, " ").trim();
  if (!to || !message || message.length > MAX_MESSAGE_LENGTH) return null;
  const subject = channel === "email" ? String(input.subject || "").replace(/\s+/g, " ").trim().slice(0, 120) : "";
  return { channel, to, message, subject };
}

module.exports = Object.freeze({ CHANNELS, MAX_MESSAGE_LENGTH, normalizeRecipient, normalizeSendRequest });
