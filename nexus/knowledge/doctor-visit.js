"use strict";

// The sheet a person takes with them when they call a doctor, dentist or clinic to make an appointment, built from the answers to Kyro's voice interview (public/kyro-intake-forms.js, "doctorVisit") and saved as a document the person can edit,
// download and keep. Kyro cannot book into a clinic's system, so it gets the person READY: the reason, who it is for, the days and times that work, what to say on the phone, what to ask the clinic, what to bring and a place to write the booking.
// It writes only what the person said, word for word, and "Not decided yet" where they said nothing: it adds no symptom, no cause, no advice and no clinic of its own. It books nothing and calls no one.
// The two places to look for a clinic are the U.S. government's "Find a Health Center" (HRSA) and the 211 information line; a person elsewhere is told to ask their county or district health office.
// THE EMERGENCY WORDING NEEDS A CLINICIAN'S REVIEW before it is relied on.
//
// doctorVisitDocument(values) -> { title, content } | null   (null when the reason is missing)

const KEYS = Object.freeze(["reason", "who", "clinic", "when", "started", "medicines", "pay", "access", "questions"]);

const clean = value => String(value ?? "").replace(/\s+/g, " ").trim().slice(0, 600);
const orNot = value => clean(value) || "Not decided yet";

const ASK_THE_CLINIC = Object.freeze([
  "Are you taking new patients?",
  "What is the earliest appointment you have? Can I be put on a list in case someone cancels?",
  "How long will the visit be?",
  "What does the visit cost, and do you take my insurance or health program? Is there a lower price if I cannot pay all of it?",
  "Can you give me an interpreter, or can the visit be by phone or video?",
  "What should I bring, and should I come early to fill in forms?"
]);
const TO_BRING = Object.freeze([
  "A photo ID, and your insurance or health program card if you have one",
  "A list of every medicine you take, with the dose",
  "This sheet, and any papers from earlier visits",
  "A pen and paper to write down what the doctor says"
]);

function doctorVisitDocument(values) {
  const v = values || {};
  const reason = clean(v.reason);
  if (!reason) return null;
  const who = clean(v.who);
  const title = `Doctor visit: ${reason}`.slice(0, 120);
  const caller = who ? `for ${who}` : "for myself";
  const lines = [
    "GETTING READY FOR AN APPOINTMENT",
    "",
    "Prepared with Kyro from what you said. This is Kyro's own sheet, not a medical record and not medical advice. Read it, change anything that is wrong, and add what is missing before you call. Kyro has not booked anything and has not called anyone.",
    "",
    "1. What the appointment is for",
    reason,
    "",
    "2. Who it is for",
    orNot(who),
    "",
    "3. The doctor or clinic",
    orNot(v.clinic),
    "",
    "4. Days and times that work",
    orNot(v.when),
    "",
    "5. How long it has been going on",
    orNot(v.started),
    "",
    "6. Medicines now",
    orNot(v.medicines),
    "",
    "7. How I will pay",
    orNot(v.pay),
    "",
    "8. What would make the visit work (interpreter, a ride, childcare, an accessible room)",
    orNot(v.access),
    "",
    "9. My questions for the doctor",
    orNot(v.questions),
    "",
    "WHAT TO SAY WHEN YOU CALL",
    `"Hello, I would like to make an appointment ${caller}. It is for: ${reason}.${clean(v.when) ? ` The days and times that work are: ${clean(v.when)}.` : ""}${clean(v.pay) ? ` About paying: ${clean(v.pay)}.` : ""}${clean(v.access) ? ` What I need: ${clean(v.access)}.` : ""} What is the earliest appointment you have?"`,
    "",
    "QUESTIONS TO ASK THE CLINIC",
    ...ASK_THE_CLINIC.map((question, index) => `${index + 1}. ${question}`),
    "",
    "WHAT TO BRING",
    ...TO_BRING.map(item => `- ${item}`),
    "",
    "WRITE IT DOWN WHEN YOU HAVE BOOKED",
    "Date: [the day]",
    "Time: [the time]",
    "Place: [the clinic and address]",
    "Who I spoke to: [name]",
    "Confirmation number, if they gave one: [number]",
    "Tell Kyro: \"Remind me about my doctor appointment on [day] at [time]\" and I will remind you.",
    "",
    "IF YOU DO NOT HAVE A CLINIC YET",
    "- In the United States, you can look for a health center near you at findahealthcenter.hrsa.gov (the Health Resources and Services Administration), or dial 211 and ask for help finding a clinic.",
    "- Elsewhere, ask your county or district health office which clinic serves your area.",
    "",
    "IF YOU GET WORSE BEFORE THE APPOINTMENT",
    "If you have trouble breathing, chest pain, heavy bleeding, you faint, or you feel something is an emergency, call your local emergency number or go to the nearest clinic now. Do not wait for this appointment.",
    "",
    "Kyro made this sheet from what you said. It does not give medical advice, does not know your health, and cannot book or change an appointment."
  ];
  return { title, content: lines.join("\n") };
}

module.exports = Object.freeze({ KEYS, ASK_THE_CLINIC, TO_BRING, doctorVisitDocument });
