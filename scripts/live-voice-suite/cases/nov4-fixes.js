"use strict";
// Voice checks for the fixes made after the owner's 4 November 2026 test report (#1213). Everything is SAID to the live voice session; the ones that save something are saved to the throwaway guest account only.
// The first run only reads what Kyro does (broad checks); the checks are tightened to the real wording once it has been seen.
module.exports = Object.freeze([
  // CV interview: the first "stop" pauses and says how to leave; the second ends it
  { id: "n4-cv-stop-twice-ends-it", area: "nov4", say: "Build my resume.", timeoutMs: 45000, expect: { intake: "Question 1 of" },
    then: [{ say: "Stop.", timeoutMs: 40000, expect: { said: "stop again|end it|cancel" } }, { say: "Stop.", timeoutMs: 40000, expect: { said: "stopped|nothing was saved|start it again|start again", intake: false } }] },
  // notes: delete by its words, asking first
  { id: "n4-note-delete-by-words", area: "nov4", writes: true, say: "Write down that the cow is limping.", timeoutMs: 60000, expect: { screen: ["text", "list"], text: "cow" },
    then: [{ say: "Delete my note about the cow.", timeoutMs: 60000, expect: { said: "yes|delete|sure" } }, { say: "Yes.", timeoutMs: 60000, expect: { said: "deleted|removed|gone|cleared" } },
      { say: "What are my notes?", timeoutMs: 60000, expect: { screen: ["text", "list"], notText: "limping" } }] },
  // a shopping list: delete it, asking first
  { id: "n4-list-delete", area: "nov4", writes: true, say: "Make a shopping list with milk and eggs.", timeoutMs: 60000, expect: { screen: ["text", "list", "checklists"], text: "milk" },
    then: [{ say: "Delete my shopping list.", timeoutMs: 60000, expect: { said: "yes|delete|sure" } }, { say: "Yes.", timeoutMs: 60000, expect: { said: "deleted|removed|gone|cleared" } }] },
  // a reminder cancelled by voice is gone from the list
  { id: "n4-reminder-cancel", area: "nov4", writes: true, say: "Remind me to drink water in 20 minutes.", timeoutMs: 60000, expect: { screen: ["text", "list"], text: "water" },
    then: [{ say: "Cancel my reminder to drink water.", timeoutMs: 60000, expect: { said: "cancel|yes|sure|stopped" } }, { say: "Yes.", timeoutMs: 60000, expect: { said: "cancel|stopped|removed|gone" } },
      { say: "What are my reminders?", timeoutMs: 60000, expect: { screen: ["text", "list"], notText: "drink water" } }] },
  // two appointments in one sentence are two entries
  { id: "n4-two-appointments", area: "nov4", writes: true, say: "Put a meeting with the cooperative on Monday at 10 am and add vet visit to my calendar tomorrow at 10 am.", timeoutMs: 90000, expect: { said: "meeting|vet|calendar|added", allowRefusal: true },
    then: [{ say: "What is on my calendar tomorrow?", timeoutMs: 60000, expect: { screen: ["text", "list"], text: "vet" } }] },
  // an account with a business workspace gets a flyer it can open and download
  { id: "n4-workspace-flyer-is-a-document", area: "nov4", writes: true, say: "Create a business workspace called Test Shop.", timeoutMs: 90000, expect: { said: "workspace|business|go ahead|shop", allowRefusal: true },
    then: [{ say: "Yes.", timeoutMs: 60000, expect: { said: "created|ready|workspace|opened|added", allowRefusal: true } },
      { say: "Make me a flyer for my bake sale on Saturday.", timeoutMs: 90000, expect: { screen: "document", text: "Flyer", download: true } }] },
  // a lesson that was stopped does not swallow the next, unrelated question
  { id: "n4-lesson-stopped-then-church-question", area: "nov4", say: "Teach me fractions.", timeoutMs: 120000, expect: { screen: "text", text: "AI tutor" },
    then: [{ say: "Stop tutoring.", timeoutMs: 60000, expect: { screen: "text", text: "stop here" } }, { say: "Close it.", timeoutMs: 40000, expect: { orb: true } },
      { say: "Does a church have to apply for tax-exempt status?", timeoutMs: 90000, expect: { screen: ["text", "list"], text: "church|IRS|tax", notText: "TUTOR|AI tutor" } }] }
]);
