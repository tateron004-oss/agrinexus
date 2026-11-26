"use strict";

const { assessBloodPressure } = require("../../server/providers/bloodPressure.js");
const { glucoseLevel } = require("../../server/providers/bloodGlucose.js");

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
const { normalizeName } = require("../automations/connection.js");
// (the words of every prompt, in the person's own language: consent-words.js)
const { consentWords } = require("./consent-words.js");

const POLICIES = Object.freeze({
  "health:record:write": Object.freeze({ policyVersion: "user-confirmation-health-record-v1",
    purpose: "Save a health reading you asked Nexus to record to your own health records" }),
  "health:telehealth-intake:write": Object.freeze({ policyVersion: "user-confirmation-telehealth-intake-v1",
    purpose: "Save the telehealth intake you asked Nexus to prepare to your own health records" }),
  "communications:send:write": Object.freeze({ policyVersion: "user-confirmation-message-send-v1", dailyLimit: 10, callDailyLimit: 3,
    purpose: "Send the one message or place the one call you asked Nexus to make, to the recipient you named, exactly as read back to you" }),
  // ONE message to ONE outside automation (Zapier, Make, n8n, IFTTT) the person connected and named, exactly as read back. Outward and cannot be unsent, so it is capped per day.
  "automations:trigger:write": Object.freeze({ policyVersion: "user-confirmation-automation-send-v1", dailyLimit: 30,
    purpose: "Send the one message you asked Nexus to send to the outside automation you named, exactly as read back to you" })
});

// A trigger is only confirmable when it names one automation and carries words to send.
function automationRequest(step) {
  const input = step?.input && typeof step.input === "object" ? step.input : {};
  const name = normalizeName(input.connection || input.name);
  const text = clip(input.text || input.message, 1500);
  return name && text ? { name, text } : null;
}

// A message send is only confirmable when the step itself is a complete, sendable request; the health scopes need no step.
function userConfirmableConsent(scope, step) {
  if (!Object.hasOwn(POLICIES, String(scope || ""))) return null;
  if (scope === "communications:send:write" && !normalizeSendRequest(step?.input)) return null;
  if (scope === "automations:trigger:write" && !automationRequest(step)) return null;
  return POLICIES[scope];
}

// Who the consent is for, recorded on the consent row (null for the health scopes, which stay in the person's own records).
function consentRecipient(scope, step) {
  if (scope === "automations:trigger:write") return automationRequest(step)?.name || null;
  return scope === "communications:send:write" ? normalizeSendRequest(step?.input)?.to || null : null;
}

// Which way the send goes (sms, whatsapp, email, call), recorded on the consent so calls can be counted on their own.
function consentSendChannel(scope, step) {
  if (scope === "automations:trigger:write") return automationRequest(step) ? "automation" : null;
  return scope === "communications:send:write" ? normalizeSendRequest(step?.input)?.channel || null : null;
}

// The daily caps that apply to this step: calls are limited more tightly than messages, and every call also counts toward the
// overall limit. Each cap says which channel it counts (null = every send).
function dailyCaps(scope, step) {
  const policy = userConfirmableConsent(scope, step);
  if (!policy?.dailyLimit) return [];
  if (scope === "automations:trigger:write") return [{ limit: policy.dailyLimit, channel: null, noun: "sends to outside automations" }];
  const send = normalizeSendRequest(step?.input);
  const caps = [];
  if (send?.channel === "call" && policy.callDailyLimit) caps.push({ limit: policy.callDailyLimit, channel: "call", noun: "calls" });
  caps.push({ limit: policy.dailyLimit, channel: null, noun: "messages and calls" });
  return caps;
}

const clip = (value, limit) => String(value ?? "").replace(/\s+/g, " ").trim().slice(0, limit);

function describeReading(input = {}, language = "en") {
  const has = key => input[key] !== undefined && input[key] !== null && input[key] !== "" && Number.isFinite(Number(input[key]));
  const say = consentWords(language).reading;
  if (has("systolic") && has("diastolic")) return say.bp(Number(input.systolic), Number(input.diastolic));
  if (has("glucose")) return input.glucoseUnit === "mmol/L" && has("glucoseSaid") ? say.glucoseMmol(Number(input.glucoseSaid), Number(input.glucose)) : say.glucose(Number(input.glucose), input.glucoseUnit === "mg/dL");
  if (has("oxygenSaturation")) return say.oxygen(Number(input.oxygenSaturation));
  if (has("temperature")) return say.temperature(Number(input.temperature));
  if (has("pulse")) return say.pulse(Number(input.pulse));
  return "";
}

// A reading that is very high or very low is said plainly BEFORE the question about saving it, so the person is told what to do even if they never answer. General safety
// information only (Kyro does not diagnose); the wording must be reviewed by a clinician before it is relied on, like the spoken wording in server/providers.
function urgentReadingLead(input = {}, language = "en") {
  const has = key => input[key] !== undefined && input[key] !== null && input[key] !== "" && Number.isFinite(Number(input[key]));
  const urgent = consentWords(language).urgent;
  if (has("systolic") && has("diastolic")) {
    const level = assessBloodPressure(input.systolic, input.diastolic).level;
    if (level === "urgent") return urgent.bpUrgent;
    if (level === "low") return urgent.bpLow;
  }
  if (has("glucose")) {
    const level = glucoseLevel({ unit: "mg/dL", value: Number(input.glucose) });
    if (level === "very-low") return urgent.glucoseVeryLow;
    if (level === "low") return urgent.glucoseLow;
    if (level === "very-high") return urgent.glucoseVeryHigh;
  }
  return "";
}

// The words the person hears or reads before they say yes, in their language (consent-words.js). Null when this step needs no informed consent prompt.
// What is sent, to whom, and the person's own words stay exactly as they are.
function informedConfirmationPrompt({ scope, step, language = "en" }) {
  if (!userConfirmableConsent(scope, step)) return null;
  const words = consentWords(language);
  const input = step?.input && typeof step.input === "object" ? step.input : {};
  if (scope === "communications:send:write") {
    const send = normalizeSendRequest(input);
    // When the person named someone they saved, the prompt says who as well as the number, so they can catch a wrong match.
    const who = /^[A-Za-z][A-Za-z'’ -]{0,60}$/.test(String(input.contactName || "")) ? `${input.contactName} (${send.to})` : send.to;
    if (send.channel === "call") return words.call({ who, intro: CALL_INTRO, message: send.message });
    return words.send({ kind: words.kinds[send.channel], who, subject: send.subject, message: send.message });
  }
  if (scope === "automations:trigger:write") {
    const request = automationRequest(step);
    return words.automation({ name: request.name, text: request.text });
  }
  if (scope === "health:telehealth-intake:write") {
    const concern = clip(input.concern || input.reason || input.goal, 160);
    return words.telehealth({ concern });
  }
  // (a step's title is English: in another language the prompt names the reading, or says "this health information" in that language)
  const english = words === consentWords("en");
  const what = describeReading(input, language) || (english ? clip(step?.title, 100).toLowerCase() : "") || words.fallback;
  return words.record({ lead: urgentReadingLead(input, language), what });
}

// The question asked before any other confirmation, in the person's language.
function genericConfirmationPrompt(language = "en") { return consentWords(language).generic; }
// What is said when the person says no, in their language ("No problem, I have left that as it was." was English after "A'a", "አይ" and "Mba" in the live sweep, 26 Nov 2026).
function declinedReply(language = "en") { return consentWords(language).declined; }

module.exports = Object.freeze({ userConfirmableConsent, consentRecipient, consentSendChannel, dailyCaps, informedConfirmationPrompt, genericConfirmationPrompt, declinedReply, describeReading, POLICIES });
