"use strict";

// A weekly meal plan, a study schedule or a work schedule made from what the person said: "Make me a weekly meal plan", "Make a study schedule for my exam", "Make me a schedule for my work week".
// It is a short FIXED layout, one line per day, with a [bracket] left for everything the person did not say. Kyro does not invent a meal, a subject, an exam date or a shift.
// Found on the live site on 27 October 2026: the AI model sometimes answered these with a question ("What exam is it, and how many days or weeks do you have?") and sometimes with a document, so the same words gave a different result each time.
// The person asked for the document, so they get it, with the blanks to fill in; the question is theirs to answer by typing in the brackets.
//
// scheduleRequest(text) -> { kind, detail } | null
// scheduleTemplate({ kind, detail }) -> { title, content }

const LEAD = "^\\s*(?:please\\s+)?(?:(?:hey\\s+)?(?:kyro|nexus)[,.]?\\s+)?(?:(?:can|could|would|will) you\\s+)?(?:(?:i )?(?:want|need|would like|'d like) (?:you )?to\\s+)?";
const VERB = "(?:create|make|write|draft|prepare|generate|build|put together|compose|type up)\\s+(?:me\\s+)?(?:an?|the|my|some)?\\s*";
const MEAL = new RegExp(`${LEAD}${VERB}(?:[a-z'-]+\\s+){0,2}?meal plan\\b(.*)$`, "i");
const STUDY = new RegExp(`${LEAD}${VERB}(?:[a-z'-]+\\s+){0,2}?(?:study|exam|revision)\\s+(?:schedule|plan|timetable)\\b(.*)$`, "i");
const WORK = new RegExp(`${LEAD}${VERB}(?:(?:[a-z'-]+\\s+){0,2}?(?:work|working)\\s+(?:schedule|timetable)\\b|(?:[a-z'-]+\\s+){0,2}?(?:schedule|timetable)\\s+for\\s+(?:my|the|our)\\s+work\\s*(?:week|days|hours)?\\b)(.*)$`, "i");
const DAYS = Object.freeze(["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]);
const BLANK = what => `[${what}]`;
const NOTE = "Made by Kyro from what you said. Fill in each [bracket] and delete this line. Nothing here was looked up or added by Kyro.";

function clean(text) { return String(text || "").replace(/\s+as\s+(?:an?\s+)?(?:pdf|word document|word|docx|markdown|md|text file|txt)\s*[.!?]*$/i, "").replace(/[.!?]+$/g, "").replace(/\s+/g, " ").trim().slice(0, 80); }
// "for my exam", "for a family of four": what comes after "for" / "with", in the person's own words
function detailOf(rest) {
  const match = /^\s*(?:for|with|about)\s+(.+)$/i.exec(clean(rest));
  return match ? match[1].trim() : "";
}

function scheduleRequest(text) {
  const said = String(text || "").trim();
  let match;
  if ((match = MEAL.exec(said))) return { kind: "meal", detail: detailOf(match[1]) };
  if ((match = STUDY.exec(said))) return { kind: "study", detail: detailOf(match[1]) };
  if ((match = WORK.exec(said))) return { kind: "work", detail: detailOf(match[1]) };
  return null;
}

function scheduleTemplate({ kind, detail = "" }) {
  const lines = [];
  let title;
  if (kind === "meal") {
    title = "Weekly Meal Plan";
    lines.push("WEEKLY MEAL PLAN", `Week of: ${BLANK("date")}`, `For: ${detail || BLANK("how many people")}`, `Foods to avoid or allergies: ${BLANK("none, or list them")}`, "");
    for (const day of DAYS) lines.push(day, `Breakfast: ${BLANK("meal")}`, `Lunch: ${BLANK("meal")}`, `Dinner: ${BLANK("meal")}`, "");
    lines.push(`Shopping list: ${BLANK("what to buy for the week")}`);
  } else if (kind === "study") {
    title = "Study Schedule";
    lines.push("STUDY SCHEDULE", `Studying for: ${detail || BLANK("the exam or subject")}`, `Exam date: ${BLANK("date")}`, `Hours I can study each day: ${BLANK("hours")}`, "");
    for (const day of DAYS) lines.push(`${day}: ${BLANK("subject or topic")}, ${BLANK("start time")} to ${BLANK("end time")}`);
    lines.push("", `Day before the exam: ${BLANK("what to go over again")}`, `Questions to ask my teacher: ${BLANK("questions")}`);
  } else {
    title = "Work Schedule";
    lines.push("WORK SCHEDULE", `Week of: ${BLANK("date")}`, `Where I work: ${BLANK("the place")}`, "");
    for (const day of DAYS) lines.push(`${day}: ${BLANK("start time")} to ${BLANK("end time")}, or OFF`);
    lines.push("", `Notes: ${BLANK("anything to remember this week")}`);
  }
  lines.push("", NOTE);
  return { title, content: lines.join("\n") };
}

module.exports = Object.freeze({ scheduleRequest, scheduleTemplate });
