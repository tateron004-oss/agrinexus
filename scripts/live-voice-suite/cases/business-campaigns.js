"use strict";
// Campaigns (phase 3 of the small-business assistant team, 5 November 2026), SAID. One journey in a throwaway workspace: permission to get messages, a campaign saved as a draft, and the refusal to send when nobody who agreed has a
// usable email (so nothing is sent from the test, ever), then the results. Sending real messages is not part of a test: the sending, the per-message counts and the failures are covered by test/nexus/business-campaigns.test.js.
const SCREEN = ["text", "list", "document"];
module.exports = Object.freeze([
  { id: "camp-journey", area: "campaigns", writes: true, say: "Start a business called Mama Grace Salon.", timeoutMs: 90000, expect: { screen: SCREEN, text: "Mama Grace Salon" },
    then: [
      { say: "Yes.", timeoutMs: 60000, expect: { screen: SCREEN, text: "Started a business" } },
      { say: "Amina Hassan agreed to get messages.", timeoutMs: 90000, expect: { screen: SCREEN, text: "Amina Hassan agreed to get messages" } },
      { say: "Yes.", timeoutMs: 60000, expect: { screen: SCREEN, text: "Noted[\\s\\S]*Amina Hassan agreed to get messages" } },
      { say: "Who can I message?", timeoutMs: 60000, expect: { screen: SCREEN, text: "agreed to get messages: Amina Hassan", notText: "call back|follow-up" } },
      { say: "Create an email campaign called Grand Opening saying We open Saturday at ten at the church hall.", timeoutMs: 90000, expect: { screen: SCREEN, text: "save the Grand Opening campaign[\\s\\S]*will not be sent until you say so" } },
      { say: "Yes.", timeoutMs: 60000, expect: { screen: SCREEN, text: "Saved the Grand Opening campaign[\\s\\S]*has not been sent" } },
      { say: "Send the Grand Opening campaign.", timeoutMs: 90000, expect: { screen: SCREEN, text: "no usable email address[\\s\\S]*sent nothing", notText: "Should I send it" } },
      { say: "Show my campaigns.", timeoutMs: 60000, expect: { screen: SCREEN, text: "Grand Opening \\(not sent yet, by email\\)" } },
      { say: "How did the Grand Opening campaign do?", timeoutMs: 60000, expect: { screen: SCREEN, text: "has not been sent yet" } }
    ] }
]);
