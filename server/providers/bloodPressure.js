"use strict";

// What to do with a blood-pressure reading a person says or enters. Kyro does not diagnose; this only decides (1) whether the numbers can be a real
// reading at all, so a misheard or mistyped "900 over 20" is never saved as someone's health record, and (2) whether the reading is high or low enough
// that the person should be told plainly to get help, instead of only the general "a single reading is not a diagnosis" line.
//
// The WORDING in urgentGuidance()/lowNote() is general safety information and must be reviewed by a clinician before it is relied on.

const LIMITS = Object.freeze({ systolicMin: 60, systolicMax: 300, diastolicMin: 30, diastolicMax: 200, minPulsePressure: 10 });
// Very high readings (the commonly used "hypertensive crisis" thresholds) and low readings worth a gentle note.
const URGENT = Object.freeze({ systolic: 180, diastolic: 120 });
const LOW = Object.freeze({ systolic: 90, diastolic: 60 });

const toNumber = value => (value === null || value === undefined || value === "" ? NaN : Number(value));

// -> { valid: true, level: "low" | "normal" | "high" | "urgent" } or { valid: false, reason }
function assessBloodPressure(systolic, diastolic) {
  const sys = toNumber(systolic); const dia = toNumber(diastolic);
  if (!Number.isFinite(sys) || !Number.isFinite(dia)) return { valid: false, reason: "both-numbers-needed" };
  if (sys < LIMITS.systolicMin || sys > LIMITS.systolicMax || dia < LIMITS.diastolicMin || dia > LIMITS.diastolicMax) return { valid: false, reason: "out-of-range" };
  if (sys - dia < LIMITS.minPulsePressure) return { valid: false, reason: "top-number-must-be-higher" };
  if (sys >= URGENT.systolic || dia >= URGENT.diastolic) return { valid: true, level: "urgent" };
  if (sys >= 140 || dia >= 90) return { valid: true, level: "high" };
  if (sys < LOW.systolic || dia < LOW.diastolic) return { valid: true, level: "low" };
  return { valid: true, level: "normal" };
}

const SYMPTOMS = /\b(?:chest\s*pain|pain in (?:my )?chest|short(?:ness)? of breath|can'?t breathe|cannot breathe|trouble breathing|severe headache|bad headache|worst headache|numb(?:ness)?|weakness|weak on one side|confus(?:ed|ion)|slurred|trouble speaking|vision|can'?t see|faint(?:ing|ed)?|dizzy|seizure)\b/i;

function invalidReadingReply(systolic, diastolic) {
  return `I heard ${systolic} over ${diastolic}, but that does not sound like a real blood-pressure reading, so I did not save it. Please check the numbers on your monitor and say them again, for example: my blood pressure is 120 over 80.`;
}

function urgentGuidance(systolic, diastolic, spokenText = "") {
  const symptoms = SYMPTOMS.test(String(spokenText || ""));
  const lead = `I saved the reading ${systolic} over ${diastolic}. That is a very high reading.`;
  const act = symptoms
    ? "Because you also mention symptoms, get emergency help now. Call your local emergency number or go to the nearest clinic or hospital. Do not wait."
    : "If you have chest pain, trouble breathing, a bad headache, weakness or numbness, confusion, trouble speaking, or changes in your sight, get emergency help now: call your local emergency number or go to the nearest clinic.";
  const rest = "If you feel well, sit quietly for five minutes and measure again. If it is still this high, contact a clinic or health worker today. I cannot diagnose; this is general safety information.";
  return `${lead} ${act} ${rest}`;
}

// The everyday replies after a reading was saved (or could not be). Kept here, beside the urgent wording, so the spoken route, the typed route and the read-back-then-save flow all say the same thing.
function savedReply(systolic, diastolic) {
  return `I saved the blood-pressure reading ${systolic} over ${diastolic} to your chronic-care record so you and a provider can track the trend. A single reading does not establish a diagnosis. Rest quietly and follow the measurement instructions for the device, then discuss repeated elevated readings with a qualified healthcare professional. Seek urgent medical help for severe symptoms such as chest pain, severe shortness of breath, fainting, new weakness, confusion, or a sudden severe headache.`;
}
function notSavedReply(systolic, diastolic) {
  return `I noted the blood-pressure reading ${systolic} over ${diastolic}, but saving it to your chronic-care record is unavailable right now. A single reading does not establish a diagnosis. Discuss repeated elevated readings with a qualified healthcare professional. Seek urgent medical help for severe symptoms such as chest pain, severe shortness of breath, fainting, new weakness, confusion, or a sudden severe headache.`;
}

function lowNote() {
  return "That is lower than many people's usual reading. If you feel dizzy, faint or unwell, sit or lie down and get medical help.";
}

module.exports = Object.freeze({ assessBloodPressure, invalidReadingReply, urgentGuidance, lowNote, savedReply, notSavedReply, LIMITS, URGENT, LOW, SYMPTOMS });
