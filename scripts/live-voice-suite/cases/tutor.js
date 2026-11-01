"use strict";
// Tutor mode (nexus/tutor/tutor.js, 1 November 2026): "Teach me fractions", "Help me with my science homework", "Quiz me on world capitals", "Nifundishe sehemu". One small step at a time, one question after each, the lesson on a card that stays,
// the line saying the tutor is an AI as small print on the first turn only, and "Stop tutoring" ends it. The practice lessons (letters, reading, counting) keep their own rule-based lessons.
// Everything here is SAID (the voice session hears it), because the product is used by voice. Each case ends the session it opens, so a failure does not leave a lesson open for the cases after it.
// Nothing is saved to the account; the AI model writes the lesson, so the checks are for the shape of each turn, not its words.
const stop = { say: "Stop tutoring.", timeoutMs: 60000, expect: { screen: "text", text: "stop here" } };
module.exports = Object.freeze([
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
  // (Swahili said to the rig's English voice: speech recognition heard "Nifundishe sehemu" as "Mi fondishe sehemol", so the phrases below are ones it hears)
  { id: "tutor-swahili-learn-then-stop", area: "tutor", say: "Nataka kujifunza sehemu.", timeoutMs: 120000, expect: { screen: "text", text: "mwalimu wa AI" }, then: [{ say: "Maliza somo.", timeoutMs: 60000, expect: { screen: "text", text: "tuishie hapa" } }] },
  { id: "tutor-swahili-then-stop", area: "tutor", say: "Nifundishe sayansi.", timeoutMs: 120000, expect: { screen: "text", text: "mwalimu wa AI" }, then: [{ say: "Acha somo.", timeoutMs: 60000, expect: { screen: "text", text: "tuishie hapa" } }] },
  { id: "tutor-letters-stay-practice-lesson", area: "tutor", say: "Teach me letters.", timeoutMs: 90000, expect: { screen: ["text", "list"], text: "letter|herufi", notText: "AI tutor" } },
  // (no subject yet: it asks which; a request about an official process goes to the checked guide and not the tutor; something else asked in the middle of a lesson is answered, and the lesson is there when that screen is closed)
  { id: "tutor-be-my-tutor-asks-subject", area: "tutor", say: "Be my tutor.", timeoutMs: 120000, expect: { screen: "text", text: "subject", notText: "could not do that|I can.t help" }, then: [stop] },
  // (said first with no lesson open, and again in the middle of a lesson: both give the guide, and the lesson stays open in the second)
  { id: "tutor-official-process-goes-to-the-guide", area: "tutor", say: "Teach me how to apply for a passport.", timeoutMs: 90000, expect: { screen: ["text", "list"], text: "passport", notText: "AI tutor|TUTOR|Stop tutoring" } },
  { id: "tutor-official-process-in-a-lesson-goes-to-the-guide", area: "tutor", say: "Teach me fractions.", timeoutMs: 120000, expect: { screen: "text", text: "AI tutor", notText: "could not do that|I can.t help" },
    then: [{ say: "Teach me how to apply for a passport.", timeoutMs: 90000, expect: { screen: ["text", "list"], text: "passport", notText: "Stop tutoring" } }, { say: "Close it.", timeoutMs: 60000, expect: { screen: "text", text: "TUTOR: FRACTIONS" } }, stop] },
  { id: "tutor-weather-in-a-lesson-then-lesson-returns", area: "tutor", say: "Teach me fractions.", timeoutMs: 120000, expect: { screen: "text", text: "AI tutor", notText: "could not do that|I can.t help" },
    then: [{ say: "What is the weather in Kisumu?", timeoutMs: 90000, expect: { screen: ["text", "list"], text: "Kisumu|weather|temperature", notText: "AI tutor" } }, { say: "Close it.", timeoutMs: 60000, expect: { screen: "text", text: "TUTOR: FRACTIONS" } }, stop] }
]);
