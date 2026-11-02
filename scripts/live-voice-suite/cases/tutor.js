"use strict";
// Tutor mode (nexus/tutor/tutor.js, 1 November 2026): "Teach me fractions", "Help me with my science homework", "Quiz me on world capitals", "Nataka kujifunza sehemu". One small step at a time, one question after each, the lesson on a card that stays,
// the line saying the tutor is an AI as small print on the first turn only, and "Stop tutoring" ends it. The practice lessons (letters, reading, counting) keep their own rule-based lessons.
// Everything here is SAID (the voice session hears it), because the product is used by voice. Each case ends the session it opens, and the rig's clean-up ends a lesson a failed case left open.
// Nothing is saved to the account by the tutor; the AI model writes the lesson, so the checks are for the shape of each turn, not its words.
// THE ORDER MATTERS: after a few tutoring lessons the voice model's own conversation is full of tutoring and may start teaching letters itself instead of opening the practice lesson, so that case is FIRST; and the case whose
// sentence makes the voice model draw a passport checklist of its own a moment after the case ends is LAST, so that leftover screen is in no other case's way.
const stop = { say: "Stop tutoring.", timeoutMs: 60000, expect: { screen: "text", text: "stop here" } };
module.exports = Object.freeze([
  // (the practice lesson is ended the way a person ends it, "stop": an open practice lesson takes the short replies of whatever is said next, so it must not be left open for the cases after it)
  { id: "tutor-letters-stay-practice-lesson", area: "tutor", say: "Teach me letters.", timeoutMs: 90000, expect: { screen: ["text", "list"], text: "letter|herufi", notText: "AI tutor" },
    then: [{ say: "Stop.", timeoutMs: 45000, expect: { said: "have stopped|tumesimama" } }] },
  { id: "tutor-learn-then-answer-then-stop", area: "tutor", say: "Teach me fractions.", timeoutMs: 120000, expect: { screen: "text", text: "AI tutor[\\s\\S]*fraction|fraction[\\s\\S]*AI tutor", notText: "could not do that|I can.t help" },
    then: [{ say: "I know that a half is one of two equal parts.", timeoutMs: 120000, expect: { screen: "text", text: "\\w{4,}", notText: "AI tutor|could not reach" } },
      { say: "A quarter is one of four equal parts.", timeoutMs: 120000, expect: { screen: "text", text: "\\w{4,}", notText: "AI tutor|could not reach" } }, stop] },
  // (a picture or a video of the lesson's subject on request, and the lesson comes back where it was when the screen is closed)
  { id: "tutor-picture-then-lesson-returns", area: "tutor", say: "Teach me fractions.", timeoutMs: 120000, expect: { screen: "text", text: "AI tutor", notText: "could not do that|I can.t help" },
    then: [{ say: "Show me a picture.", timeoutMs: 90000, expect: { screen: "gallery", images: 1 } }, { say: "Close it.", timeoutMs: 60000, expect: { screen: "text", text: "TUTOR: FRACTIONS" } }, stop] },
  { id: "tutor-video-then-lesson-returns", area: "tutor", say: "Teach me fractions.", timeoutMs: 120000, expect: { screen: "text", text: "AI tutor", notText: "could not do that|I can.t help" },
    then: [{ say: "Show me a video.", timeoutMs: 90000, expect: { screen: "gallery", frames: 1 } }, { say: "Close it.", timeoutMs: 60000, expect: { screen: "text", text: "TUTOR: FRACTIONS" } }, stop] },
  { id: "tutor-homework-then-stop", area: "tutor", say: "Help me with my science homework.", timeoutMs: 120000, expect: { screen: "text", text: "AI tutor", notText: "could not do that|I can.t help" }, then: [stop] },
  { id: "tutor-quiz-then-stop", area: "tutor", say: "Quiz me on world capitals.", timeoutMs: 120000, expect: { screen: "text", text: "AI tutor[\\s\\S]*\\?|capital", notText: "could not do that|I can.t help" }, then: [stop] },
  // (Kiswahili said to the rig's English voice: speech recognition garbles it differently from one run to the next ("Nifundishe sehemu" came back as "Mi fondishe sehemol", "Nifundishe sayansi" as "Mi fundiše sajan"), so this is one phrasing it has heard every time)
  { id: "tutor-swahili-learn-then-stop", area: "tutor", say: "Nataka kujifunza sehemu.", timeoutMs: 120000, expect: { screen: "text", text: "mwalimu wa AI" }, then: [{ say: "Stop tutoring.", timeoutMs: 60000, expect: { screen: "text", text: "tuishie hapa" } }] },
  // (no subject yet: it asks which)
  { id: "tutor-be-my-tutor-asks-subject", area: "tutor", say: "Be my tutor.", timeoutMs: 120000, expect: { screen: "text", text: "subject", notText: "could not do that|I can.t help" }, then: [stop] },
  // (something else asked in the middle of a lesson is answered, and the lesson is there when that screen is closed)
  { id: "tutor-weather-in-a-lesson-then-lesson-returns", area: "tutor", say: "Teach me fractions.", timeoutMs: 120000, expect: { screen: "text", text: "AI tutor", notText: "could not do that|I can.t help" },
    then: [{ say: "What is the weather in Kisumu?", timeoutMs: 90000, expect: { screen: ["text", "list"], text: "Kisumu|weather|temperature", notText: "AI tutor" } }, { say: "Close it.", timeoutMs: 60000, expect: { screen: "text", text: "TUTOR: FRACTIONS" } }, stop] },
  // (a request about an official process is not taught as a lesson answer: the lesson card stays as it was, without the passport in it, and the question is answered aloud)
  { id: "tutor-official-process-in-a-lesson-is-not-a-lesson-answer", area: "tutor", say: "Teach me fractions.", timeoutMs: 120000, expect: { screen: "text", text: "AI tutor", notText: "could not do that|I can.t help" },
    then: [{ say: "Teach me how to apply for a passport.", timeoutMs: 90000, expect: { screen: "text", text: "TUTOR: FRACTIONS", notText: "passport", said: "passport" } }, stop] },
  // (and with no lesson open it is not taught as a lesson either; the voice model may draw a passport checklist of its own a moment later, which is why this case is last)
  { id: "tutor-official-process-is-not-taught-as-a-lesson", area: "tutor", say: "Teach me how to apply for a passport.", timeoutMs: 90000, expect: { orb: true, said: "passport", notText: "TUTOR|Stop tutoring" } }
]);
