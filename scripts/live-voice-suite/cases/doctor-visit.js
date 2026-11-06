"use strict";
// Getting ready for a doctor, dentist or clinic appointment (5 November 2026), SAID. Kyro cannot book into a clinic, so it asks nine short questions and makes a sheet: what to say when calling, what to ask, what to bring. Each request starts the
// interview (and the first question is "What is the appointment for?"); a reminder, a cancel and a vet are NOT this and must not start it. Nothing is saved by these cases: each is cancelled.
module.exports = Object.freeze([
  { id: "dv-set-up-doctor-appointment", area: "health", say: "Help me set up a doctor's appointment.", timeoutMs: 60000, expect: { intake: "Question 1 of 9" }, then: [{ say: "Cancel." }, { expect: { intake: false }, timeoutMs: 25000 }] },
  { id: "dv-dentist", area: "health", say: "I need to make a dentist appointment.", timeoutMs: 60000, expect: { intake: "Question 1 of 9" }, then: [{ say: "Cancel." }, { expect: { intake: false }, timeoutMs: 25000 }] },
  { id: "dv-reminder-is-not-it", area: "health", writes: true, say: "Remind me about my doctor appointment tomorrow at nine.", timeoutMs: 60000, expect: { intake: false, notText: "Question 1 of" } },
  { id: "dv-vet-is-not-it", area: "health", say: "Book an appointment for my cow with the vet.", timeoutMs: 60000, expect: { intake: false } }
]);
