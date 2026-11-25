"use strict";
// Getting ready for a doctor, dentist or clinic appointment (5 November 2026), SAID. Kyro cannot book into a clinic, so it asks nine short questions and makes a sheet: what to say when calling, what to ask, what to bring. Each request starts the
// interview (and the first question is "What is the appointment for?"); a reminder, a cancel and a vet are NOT this and must not start it. Nothing is saved by these cases: each is cancelled.
module.exports = Object.freeze([
  { id: "dv-set-up-doctor-appointment", area: "health", say: "Help me set up a doctor's appointment.", timeoutMs: 60000, expect: { intake: "Question 1 of 9" }, then: [{ say: "Cancel." }, { expect: { intake: false }, timeoutMs: 25000 }] },
  { id: "dv-dentist", area: "health", say: "I need to make a dentist appointment.", timeoutMs: 60000, expect: { intake: "Question 1 of 9" }, then: [{ say: "Cancel." }, { expect: { intake: false }, timeoutMs: 25000 }] },
  { id: "dv-reminder-is-not-it", area: "health", writes: true, say: "Remind me about my doctor appointment tomorrow at nine.", timeoutMs: 60000, expect: { intake: false, notText: "Question 1 of" } },
  { id: "dv-vet-is-not-it", area: "health", say: "Book an appointment for my cow with the vet.", timeoutMs: 60000, expect: { intake: false } },
  // the tester guide's E2 and E4 (7 November 2026): answer all nine questions with made-up words, then yes, and get the sheet; and an emergency answer stops the interview and saves nothing
  { id: "dv-answer-all-questions", area: "health", writes: true, say: "Help me set up a doctor's appointment.", timeoutMs: 60000, expect: { intake: "Question 1 of 9" },
    then: [
      { say: "A check-up.", timeoutMs: 60000, expect: { intake: "Question 2 of 9" } },
      { say: "For me.", timeoutMs: 60000, expect: { intake: "Question 3 of 9" } },
      { say: "Skip.", timeoutMs: 60000, expect: { intake: "Question 4 of 9" } },
      { say: "Tuesday mornings.", timeoutMs: 60000, expect: { intake: "Question 5 of 9" } },
      { say: "Since last year.", timeoutMs: 60000, expect: { intake: "Question 6 of 9" } },
      { say: "Skip.", timeoutMs: 60000, expect: { intake: "Question 7 of 9" } },
      { say: "A health program.", timeoutMs: 60000, expect: { intake: "Question 8 of 9" } },
      { say: "An interpreter.", timeoutMs: 60000, expect: { intake: "Question 9 of 9" } },
      { say: "Skip.", timeoutMs: 90000 },
      { say: "Yes.", timeoutMs: 90000, expect: { screen: "document", text: "What to say when you call", notText: "chest|pain|symptom" } }
    ] },
  { id: "dv-emergency-stops-it", area: "health", risky: true, say: "Help me set up a doctor's appointment.", timeoutMs: 60000, expect: { intake: "Question 1 of 9" },
    then: [{ say: "I have chest pain and cannot breathe.", timeoutMs: 60000, expect: { said: "emergency|112|999|911|nearest", intake: false } }] }
]);
