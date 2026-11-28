"use strict";
// Lesson help and the sign-up guide (27 November 2026, nexus/knowledge/koachlearn-help-text.js): inside a Koach Learn lesson the learner says
// "explain it more simply", "show it in English" and "this wording is confusing"; separately "how do I sign up for Koach Learn?". Everything is SAID.
// The AI model words the re-taught lesson, so the checks are for the fixed lines and the shape of each turn.
// Writes: the guest's place in the course and one wording report owned by the guest (record store).
const stop = { say: "Stop tutoring.", timeoutMs: 60000, expect: { text: "continue my course", notText: "could not open that course" } };
module.exports = Object.freeze([
  { id: "help-plain-english-confusing", area: "study", writes: true, say: "Find me a course on farming.", timeoutMs: 60000,
    expect: { screen: ["text", "list"], text: "help me study number 1", notText: "I cannot find|could not read the Koach Learn" },
    then: [
      { say: "Help me study number 1.", timeoutMs: 120000, expect: { screen: "text", text: "\\w{4,}", notText: "could not open that course|LESSON:|CHECK:" } },
      { say: "Explain it more simply.", timeoutMs: 120000, expect: { screen: "text", text: "\\w{4,}", notText: "could not open that course|LESSON:|CHECK:" } },
      { say: "Show it in English.", timeoutMs: 120000, expect: { screen: "text", text: "Here is this lesson in English", notText: "could not open that course|LESSON:" } },
      { say: "This wording is confusing.", timeoutMs: 120000, expect: { screen: "text", text: "noted that this wording is confusing", notText: "could not open that course|LESSON:|CHECK:" } },
      { ...stop, expect: { text: "continue my course[\\s\\S]*remind me to study every day at 7 pm", notText: "could not open that course" } }
    ] },
  { id: "help-signup-steps", area: "study", say: "How do I sign up for Koach Learn?", timeoutMs: 60000,
    expect: { screen: "list", text: "Signing up for Koach Learn[\\s\\S]*at least 8 characters[\\s\\S]*never see your password", notText: "could not read the Koach Learn" } }
]);
