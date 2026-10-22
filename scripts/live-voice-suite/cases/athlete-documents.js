"use strict";
// A sponsorship proposal for an athlete and a registration packet for a team are each a ten-question interview (public/kyro-intake-forms.js), read back and saved as a Word document only after a yes (nexus/knowledge/athlete-docs.js).
// The interview starts and is cancelled here, so nothing is saved. A question about either is still the athlete guide's, which cases/athletes.js covers.
module.exports = Object.freeze([
  { id: "ath-sponsorship-starts-and-cancels", area: "athletes", say: "Write my sponsorship proposal.", timeoutMs: 60000, expect: { intake: "Question 1 of" }, then: [{ say: "Cancel." }, { expect: { intake: false }, timeoutMs: 25000 }] },
  { id: "ath-team-packet-starts-and-cancels", area: "athletes", say: "Help me build a team registration packet.", timeoutMs: 60000, expect: { intake: "Question 1 of" }, then: [{ say: "Cancel." }, { expect: { intake: false }, timeoutMs: 25000 }] }
]);
