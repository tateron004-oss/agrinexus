"use strict";
// Kyro tutors alongside a Koach Learn course (26 November 2026, nexus/knowledge/koachlearn-study.js): find a course, "help me study number 1", the lesson taught from the course's own study pack,
// "next lesson", "stop", then "continue my course" picks up where it stopped. Everything is SAID. The AI model words the lesson, so the checks are for the shape of each turn and the fixed lines.
// The guest's place in the course is saved per person (record store); nothing else is changed on the account.
const stop = { say: "Stop.", timeoutMs: 60000, expect: { text: "continue my course", notText: "could not open that course" } };
module.exports = Object.freeze([
  { id: "study-find-then-study-number-1", area: "study", writes: true, say: "Find me a course on farming.", timeoutMs: 60000,
    expect: { screen: ["text", "list"], text: "Koach Learn courses in English about[\\s\\S]*help me study number 1", notText: "I cannot find|could not read the Koach Learn" },
    then: [
      { say: "Help me study number 1.", timeoutMs: 120000, expect: { screen: "text", text: "\\w{4,}[\\s\\S]*\\?", notText: "could not open that course|I could not find that Koach Learn course|LESSON:" } },
      { say: "I am not sure, can you explain it again?", timeoutMs: 120000, expect: { screen: "text", text: "\\w{4,}", notText: "could not open that course|LESSON:" } },
      { say: "Next lesson.", timeoutMs: 120000, expect: { screen: "text", text: "\\w{4,}", notText: "could not open that course|LESSON:" } },
      stop,
      { say: "Continue my course.", timeoutMs: 120000, expect: { screen: "text", text: "\\w{4,}", notText: "have not started a course|could not open that course|LESSON:" } },
      stop
    ] }
]);
