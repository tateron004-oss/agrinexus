"use strict";
// A 90-day money plan for a person, and a financial education program plan for an organizer, are each a ten-question interview (public/kyro-intake-forms.js), read back and saved as a Word document only after a yes
// (nexus/knowledge/money-docs.js). The interview starts and is cancelled here, so nothing is saved. A question about either is still the money guide's, which cases/money.js covers.
module.exports = Object.freeze([
  { id: "money-plan-starts-and-cancels", area: "money", say: "Help me make a budget.", timeoutMs: 60000, expect: { intake: "Question 1 of" }, then: [{ say: "Cancel." }, { expect: { intake: false }, timeoutMs: 25000 }] },
  { id: "money-program-kit-starts-and-cancels", area: "money", say: "Help me plan a financial education program.", timeoutMs: 60000, expect: { intake: "Question 1 of" }, then: [{ say: "Cancel." }, { expect: { intake: false }, timeoutMs: 25000 }] }
]);
