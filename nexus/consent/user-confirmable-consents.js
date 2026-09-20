"use strict";

// Consent given by explicitly confirming ONE specific action, for scopes where the action only writes to the person's
// own records.
//
// AuthoritativeTaskEngine refuses to run a tool with a consentScope unless an active consent exists. Until now the only
// code that ever granted one was the deploy's acceptance probe, so a real person confirming "Save a telehealth intake..."
// got 403 consent_required (verified on production 2026-09-20). Here, the confirmation prompt states exactly what will
// be stored and that "yes" is consent for it, and BehaviorSpine.confirm records a consent bound to that task and scope
// when the task's own owner says yes.
//
// Deliberately NOT included: communications:send:write. Sending a message is an outward action to another person, so it
// keeps requiring a consent that is granted some other way.
const POLICIES = Object.freeze({
  "health:record:write": Object.freeze({ policyVersion: "user-confirmation-health-record-v1",
    purpose: "Save a health reading you asked Nexus to record to your own health records" }),
  "health:telehealth-intake:write": Object.freeze({ policyVersion: "user-confirmation-telehealth-intake-v1",
    purpose: "Save the telehealth intake you asked Nexus to prepare to your own health records" })
});

function userConfirmableConsent(scope) {
  return Object.hasOwn(POLICIES, String(scope || "")) ? POLICIES[scope] : null;
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
  if (!userConfirmableConsent(scope)) return null;
  const input = step?.input && typeof step.input === "object" ? step.input : {};
  if (scope === "health:telehealth-intake:write") {
    const concern = clip(input.concern || input.reason || input.goal, 160);
    return `I can save this telehealth intake to your own health records${concern ? `: "${concern}"` : ""}. It is not shared with or sent to any provider. Say yes to consent and save it, or no to cancel.`;
  }
  const what = describeReading(input) || clip(step?.title, 100).toLowerCase() || "this health information";
  return `I can save this to your own health records: ${what}. It stays in your records and is not shared with anyone. Say yes to consent and save it, or no to cancel.`;
}

module.exports = Object.freeze({ userConfirmableConsent, informedConfirmationPrompt, describeReading, POLICIES });
