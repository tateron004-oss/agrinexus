"use strict";

// What to do with a blood-glucose (blood sugar) reading a person says or enters. Kyro does not diagnose or give treatment advice. This decides (1) whether the number
// can be a real reading in a known unit, so "5000" or an unclear "35" is never saved as someone's health record, and (2) whether it is so low or so high that the person
// should be told plainly to get help, instead of only the general "a single reading does not establish a diagnosis" line.
//
// Two units are in everyday use: mg/dL ("130") and mmol/L ("7.2", common in East Africa). A spoken number often comes with no unit, so the unit is taken from what was
// said when there is one, otherwise from the size of the number (decimals and small numbers are mmol/L, 40 and over are mg/dL). The narrow band in between could be
// either, so Kyro asks instead of guessing.
//
// The thresholds and the WORDING below are general safety information and must be reviewed by a clinician before they are relied on.

const MG_PER_MMOL = 18.0182;
const LIMITS = Object.freeze({ mgdl: { min: 20, max: 800 }, mmol: { min: 1.1, max: 44.4 } });
// Levels, in mg/dL (commonly used: below 54 very low, below 70 low, 300 and over very high).
const VERY_LOW_MGDL = 54;
const LOW_MGDL = 70;
const VERY_HIGH_MGDL = 300;
const AMBIGUOUS_BAND = Object.freeze({ min: 30, max: 40 });

const MMOL_WORDS = /^(?:mmol|mmols|millimoles?)(?:\s*(?:\/|per)\s*l(?:it(?:er|re)s?)?)?$/i;
const MGDL_WORDS = /^(?:mg|milligrams?)\s*(?:\/|per)?\s*(?:dl|deciliters?|decilitres?)?$/i;

// -> { unit: "mg/dL" | "mmol/L", value, inferred } | { ambiguous: true, value } | { invalid: true, value }
function resolveGlucose(value, unitWord = "") {
  const number = Number(value);
  if (!Number.isFinite(number) || number <= 0) return { invalid: true, value };
  const word = String(unitWord || "").trim();
  let unit = null; let inferred = false;
  if (word && MMOL_WORDS.test(word)) unit = "mmol/L";
  else if (word && MGDL_WORDS.test(word)) unit = "mg/dL";
  else if (/^mmol\/l$/i.test(word)) unit = "mmol/L";
  else if (/^mg\/dl$/i.test(word)) unit = "mg/dL";
  if (!unit) {
    inferred = true;
    if (!Number.isInteger(number) || number <= AMBIGUOUS_BAND.min) unit = "mmol/L";
    else if (number >= AMBIGUOUS_BAND.max) unit = "mg/dL";
    else return { ambiguous: true, value: number };
  }
  const limits = unit === "mmol/L" ? LIMITS.mmol : LIMITS.mgdl;
  if (number < limits.min || number > limits.max) return { invalid: true, value: number, unit };
  return { unit, value: number, inferred };
}

const toMgdl = ({ unit, value }) => (unit === "mmol/L" ? value * MG_PER_MMOL : value);

// -> "very-low" | "low" | "normal" | "very-high"
function glucoseLevel(resolved) {
  const mgdl = toMgdl(resolved);
  if (mgdl < VERY_LOW_MGDL) return "very-low";
  if (mgdl < LOW_MGDL) return "low";
  if (mgdl >= VERY_HIGH_MGDL) return "very-high";
  return "normal";
}

const show = resolved => `${resolved.value} ${resolved.unit === "mmol/L" ? "millimoles per litre" : "milligrams per decilitre"}`;

function invalidGlucoseReply(value) {
  return `I heard ${value}, but that does not sound like a real blood-sugar reading, so I did not save it. Please check your meter and say it again with the unit, for example: my blood sugar is 7 mmol, or my blood sugar is 130 mg per dL.`;
}
function ambiguousUnitReply(value) {
  return `I heard ${value}, but I am not sure if that is in mmol per litre or mg per dL, so I did not save it. Please say it again with the unit, for example: my blood sugar is ${value} mmol, or my blood sugar is ${value} mg per dL.`;
}
function veryLowReply(resolved) {
  return `I saved the reading ${show(resolved)}. That is a very low blood sugar. If you feel shaky, sweaty, confused, very sleepy or faint, get emergency help now: call your local emergency number or go to the nearest clinic, and do not be alone. Follow the plan your clinic gave you. I cannot give treatment advice or diagnose; this is general safety information.`;
}
function lowReply(resolved) {
  return `I saved the reading ${show(resolved)}. That is lower than usual. If you feel shaky, sweaty, confused or faint, get help now and do not be alone. Follow the plan your clinic gave you and contact your clinic today. I cannot give treatment advice or diagnose.`;
}
function veryHighReply(resolved, spokenText = "") {
  const symptoms = /\b(?:vomit(?:ing)?|throwing up|stomach pain|belly pain|fast breathing|trouble breathing|can'?t breathe|confus(?:ed|ion)|very sleepy|unconscious|extreme thirst|faint(?:ing)?|fruity breath)\b/i.test(String(spokenText || ""));
  const act = symptoms
    ? "Because you also mention symptoms, get emergency help now. Call your local emergency number or go to the nearest clinic or hospital. Do not wait."
    : "If you have vomiting, stomach pain, fast breathing, confusion, or you are very sleepy or very thirsty, get emergency help now: call your local emergency number or go to the nearest clinic.";
  return `I saved the reading ${show(resolved)}. That is a very high blood sugar. ${act} If you feel well, measure again in a little while and contact your clinic today. I cannot give treatment advice or diagnose; this is general safety information.`;
}

module.exports = Object.freeze({ resolveGlucose, glucoseLevel, toMgdl, invalidGlucoseReply, ambiguousUnitReply, veryLowReply, lowReply, veryHighReply, LIMITS, AMBIGUOUS_BAND });
