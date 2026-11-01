"use strict";
// Tutor mode (nexus/tutor/tutor.js, 1 November 2026): "Teach me fractions", "Help me with my science homework", "Quiz me on world capitals", "Nifundishe sehemu". One small step at a time, one question after each, the lesson on a card that stays,
// the line saying the tutor is an AI as small print on the first turn only, and "Stop tutoring" ends it. The practice lessons (letters, reading, counting) keep their own rule-based lessons.
// Each case ends the session it opens, so a failure does not leave a lesson open for the cases after it. Nothing is saved to the account; the AI model writes the lesson, so the checks are for the shape of each turn, not its words.
const stop = { say: "Stop tutoring.", timeoutMs: 60000, expect: { screen: "text", text: "stop here" } };
module.exports = Object.freeze([
  { id: "tutor-learn-then-answer-then-stop", area: "tutor", say: "Teach me fractions.", timeoutMs: 120000, expect: { screen: "text", text: "AI tutor[\\s\\S]*fraction|fraction[\\s\\S]*AI tutor", notText: "could not do that|I can.t help" },
    then: [{ say: "I know that a half is one of two equal parts.", timeoutMs: 120000, expect: { screen: "text", text: "\\w{4,}", notText: "AI tutor|could not reach" } }, stop] },
  { id: "tutor-homework-then-stop", area: "tutor", say: "Help me with my science homework.", timeoutMs: 120000, expect: { screen: "text", text: "AI tutor", notText: "could not do that|I can.t help" }, then: [stop] },
  { id: "tutor-quiz-then-stop", area: "tutor", say: "Quiz me on world capitals.", timeoutMs: 120000, expect: { screen: "text", text: "AI tutor[\\s\\S]*\\?|capital", notText: "could not do that|I can.t help" }, then: [stop] },
  { id: "tutor-swahili-then-stop", area: "tutor", say: "Nifundishe sehemu.", timeoutMs: 120000, expect: { screen: "text", text: "mwalimu wa AI" }, then: [{ say: "Acha somo.", timeoutMs: 60000, expect: { screen: "text", text: "tuishie hapa" } }] },
  { id: "tutor-letters-stay-practice-lesson", area: "tutor", say: "Teach me letters.", timeoutMs: 90000, expect: { screen: ["text", "list"], text: "letter|herufi", notText: "AI tutor" } }
]);
