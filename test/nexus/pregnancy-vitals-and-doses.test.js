"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const { readSafetyDetailed, safetyTurn } = require("../../nexus/companion/safety.js");
const offer = require("../../nexus/companion/offer.js");

// Found by the "Mama Achieng" persona audit: in pregnancy a blood pressure of 150/95 was answered "above the usual range, keep a log" (it needs a health worker the same day, and 160/110 needs one
// now), a fever in pregnancy said as "my temperature is 38.5" was missed, and "how much paracetamol can I give my baby?" went to a general answer with no safe way to say "ask a pharmacist".
const describe = text => {
  const found = readSafetyDetailed(text);
  return found ? `${found.kind}${found.category ? ":" + found.category : ""}` : null;
};
const circle = { activeMembers: async () => [{ otherId: "u2", otherName: "Grace", shares: {} }] };
const reply = text => safetyTurn({ text, circle, push: async () => {}, tenantId: "t", userId: "u1", userName: "Amina", locale: "en" });

test("a raised blood pressure or a fever in pregnancy is a health-worker matter, today or now", () => {
  const expected = {
    "I am pregnant and my blood pressure is 160/110": "care:pregnancy_bp_high",
    "pregnant, bp 165/105": "care:pregnancy_bp_high",
    "I'm 7 months pregnant and my BP is 150 over 95": "care:pregnancy_bp",
    "my wife is pregnant and her blood pressure is 142/92": "care:pregnancy_bp",
    "is 150/95 safe in pregnancy": "care:pregnancy_bp",
    "I am pregnant and my temperature is 38.5": "care:pregnancy",
    "I am pregnant and my temperature is 101": "care:pregnancy",
    "I'm pregnant and I have a fever": "care:pregnancy"
  };
  for (const [text, kind] of Object.entries(expected)) assert.equal(describe(text), kind, text);
});

test("the same readings without a pregnancy, and normal readings in pregnancy, are left to the normal health answer", () => {
  for (const text of ["I am pregnant and my blood pressure is 118/76", "my blood pressure is 150/95", "my blood pressure is 160/110", "I'm pregnant and my BP was 120/80",
    "I'm pregnant and my temperature is 36.8", "I am pregnant", "record my blood pressure 130 over 85"]) assert.equal(describe(text), null, text);
});

test("asking for a dose, or whether a medicine is safe, for a baby, a child, in pregnancy or while breastfeeding is answered with who to ask", () => {
  for (const text of ["how much paracetamol can I give my baby", "can I take ibuprofen while pregnant", "is amoxicillin safe in pregnancy", "what dose of paracetamol for my 2 year old",
    "can I give my toddler aspirin", "is it safe to take herbs while breastfeeding", "how many tablets can my child take", "can a pregnant woman take malaria tablets",
    "naweza kumpa mtoto wangu paracetamol", "ni salama kunywa dawa nikiwa mjamzito"]) assert.equal(describe(text), "care:medicine", text);
});

test("reminders, records, prices, animals and ordinary medicine talk are not mistaken for a dose question", () => {
  for (const text of ["remind me to give my baby his medicine at 8", "how much does paracetamol cost", "how much paracetamol should I give my goat", "I took paracetamol for my headache",
    "can I take ibuprofen for my headache", "show me my medicines", "my child is taking his tablets every day", "buy tablets for the clinic", "what is a safe dose of dewormer for my calf"]) assert.equal(describe(text), null, text);
});

test("the replies say what to do, do not save a reading nobody asked to save, give no dose, and only the urgent one offers to alert the circle", async () => {
  const high = await reply("I am pregnant and my blood pressure is 160/110");
  assert.match(high, /health worker needs to see you now[\s\S]*nearest clinic or hospital now/);
  assert.match(high, /Do you want me to alert Grace right now\?$/);
  assert.ok(offer.accepted("yes", [{ role: "assistant", content: high }]));

  const sameDay = await reply("I'm 7 months pregnant and my BP is 150 over 95");
  assert.match(sameDay, /top number at 140 or more, or the bottom number at 90 or more, needs a health worker the same day[\s\S]*bad headache, blurred vision/);
  assert.match(sameDay, /I have not saved this reading/);
  assert.doesNotMatch(sameDay, /alert Grace/);

  const dose = await reply("how much paracetamol can I give my baby");
  assert.match(dose, /I can't give a dose[\s\S]*pharmacist, a nurse or a clinic/);
  assert.match(dose, /Never give aspirin to a child unless a health worker says so/);
  assert.doesNotMatch(dose, /alert Grace/);
  assert.doesNotMatch(dose, /\b\d+\s?(?:mg|ml|tablets?|drops|times)\b/i, "no dose, whatever the question");
});

test("in Kiswahili, the same", async () => {
  const dose = await reply("naweza kumpa mtoto wangu paracetamol");
  assert.match(dose, /^Siwezi kutoa kipimo cha dawa/);
  assert.match(dose, /mfamasia, muuguzi au kliniki/);
  const bp = await reply("nina mimba na shinikizo langu la damu ni 150/95");
  assert.match(bp, /^Ukiwa mjamzito, shinikizo la damu/);
});
