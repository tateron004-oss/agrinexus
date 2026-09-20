"use strict";

// Consent given by explicitly confirming ONE specific action.
//
// AuthoritativeTaskEngine refuses to run a tool with a consentScope unless an active consent exists. Until now the only
// code that ever granted one was the deploy's acceptance probe, so a real person confirming "Save a telehealth intake..."
// got 403 consent_required (verified on production 2026-09-20). Here, the confirmation prompt states exactly what will
// be done and that "yes" is consent for it, and BehaviorSpine.confirm records a consent bound to that task and scope
// when the task's own owner says yes.
//
// The health scopes only write to the person's own records. communications:send:write is included only in the narrow form of
// ONE text, WhatsApp message, email or phone call to ONE recipient the person named, whose exact words and recipient are read
// back in the prompt (see communications/send-request.js), capped per day (calls more tightly than messages). It is outward and
// cannot be unsent, so a request that does not fit that shape (no recipient, no message, a very long message, an emergency or
// premium-rate number) gets no consent here and simply does not go out.
const { normalizeSendRequest, CALL_INTRO } = require("../communications/send-request.js");

const POLICIES = Object.freeze({
  "health:record:write": Object.freeze({ policyVersion: "user-confirmation-health-record-v1",
    purpose: "Save a health reading you asked Nexus to record to your own health records" }),
  "health:telehealth-intake:write": Object.freeze({ policyVersion: "user-confirmation-telehealth-intake-v1",
    purpose: "Save the telehealth intake you asked Nexus to prepare to your own health records" }),
  "communications:send:write": Object.freeze({ policyVersion: "user-confirmation-message-send-v1", dailyLimit: 10, callDailyLimit: 3,
    purpose: "Send the one message or place the one call you asked Nexus to make, to the recipient you named, exactly as read back to you" })
});

// A message send is only confirmable when the step itself is a complete, sendable request; the health scopes need no step.
function userConfirmableConsent(scope, step) {
  if (!Object.hasOwn(POLICIES, String(scope || ""))) return null;
  if (scope === "communications:send:write" && !normalizeSendRequest(step?.input)) return null;
  return POLICIES[scope];
}

// Who the consent is for, recorded on the consent row (null for the health scopes, which stay in the person's own records).
function consentRecipient(scope, step) {
  return scope === "communications:send:write" ? normalizeSendRequest(step?.input)?.to || null : null;
}

// Which way the send goes (sms, whatsapp, email, call), recorded on the consent so calls can be counted on their own.
function consentSendChannel(scope, step) {
  return scope === "communications:send:write" ? normalizeSendRequest(step?.input)?.channel || null : null;
}

// The daily caps that apply to this step: calls are limited more tightly than messages, and every call also counts toward the
// overall limit. Each cap says which channel it counts (null = every send).
function dailyCaps(scope, step) {
  const policy = userConfirmableConsent(scope, step);
  if (!policy?.dailyLimit) return [];
  const send = normalizeSendRequest(step?.input);
  const caps = [];
  if (send?.channel === "call" && policy.callDailyLimit) caps.push({ limit: policy.callDailyLimit, channel: "call", noun: "calls" });
  caps.push({ limit: policy.dailyLimit, channel: null, noun: "messages and calls" });
  return caps;
}

const clip = (value, limit) => String(value ?? "").replace(/\s+/g, " ").trim().slice(0, limit);

function describeReading(input = {}) {
  const has = key => input[key] !== undefined && input[key] !== null && input[key] !== "" && Number.isFinite(Number(input[key]));
  if (has("systolic") && has("diastolic")) return `blood pressure ${Number(input.systolic)} over ${Number(input.diastolic)}`;
  if (has("glucose")) return `blood glucose ${Number(input.glucose)}`;
  if (has("oxygenSaturation")) return `oxygen saturation ${Number(input.oxygenSaturation)} percent`;
  if (has("temperature")) return `temperature ${Number(input.temperature)}`;
  if (has("pulse")) return `pulse ${Number(input.pulse)}`;
  return "";
}

// The words the person hears or reads before they say yes. Null when this step needs no informed consent prompt.
function informedConfirmationPrompt({ scope, step }) {
  if (!userConfirmableConsent(scope, step)) return null;
  const input = step?.input && typeof step.input === "object" ? step.input : {};
  if (scope === "communications:send:write") {
    const send = normalizeSendRequest(input);
    if (send.channel === "call") {
      return `I can place a phone call to ${send.to}. A computer voice will first say "${CALL_INTRO}" and then "${send.message}". The call really happens and cannot be undone. Say yes to call, or no to cancel.`;
    }
    const kind = { sms: "text message", whatsapp: "WhatsApp message", email: "email" }[send.channel];
    return `I can send this ${kind} to ${send.to}${send.subject ? `, subject "${send.subject}"` : ""}: "${send.message}". It will really be sent and cannot be unsent. Say yes to send it, or no to cancel.`;
  }
  if (scope === "health:telehealth-intake:write") {
    const concern = clip(input.concern || input.reason || input.goal, 160);
    return `I can save this telehealth intake to your own health records${concern ? `: "${concern}"` : ""}. It is not shared with or sent to any provider. Say yes to consent and save it, or no to cancel.`;
  }
  const what = describeReading(input) || clip(step?.title, 100).toLowerCase() || "this health information";
  return `I can save this to your own health records: ${what}. It stays in your records and is not shared with anyone. Say yes to consent and save it, or no to cancel.`;
}

module.exports = Object.freeze({ userConfirmableConsent, consentRecipient, consentSendChannel, dailyCaps, informedConfirmationPrompt, describeReading, POLICIES });
