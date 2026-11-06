"use strict";
// Campaigns (phase 3 of the small-business assistant team, 5 November 2026), SAID. One journey in a throwaway workspace: permission to get messages, a campaign saved as a draft, and the refusal to send when nobody who agreed has a
// usable email (so nothing is sent from the test, ever), then the results. Sending real messages is not part of a test: the sending, the per-message counts and the failures are covered by test/nexus/business-campaigns.test.js.
const SCREEN = ["text", "list", "document"];
module.exports = Object.freeze([
  { id: "camp-journey", area: "campaigns", writes: true, needs: "guest", say: "Start a business called Mama Grace Salon.", timeoutMs: 90000, expect: { screen: SCREEN, text: "Mama Grace Salon" },
    then: [
      { say: "Yes.", timeoutMs: 60000, expect: { screen: SCREEN, text: "Started a business" } },
      { say: "Amina Hassan agreed to get messages.", timeoutMs: 90000, expect: { screen: SCREEN, text: "Amina Hassan agreed to get messages" } },
      { say: "Yes.", timeoutMs: 60000, expect: { screen: SCREEN, text: "Noted[\\s\\S]*Amina Hassan agreed to get messages" } },
      { say: "Who can I message?", timeoutMs: 60000, expect: { screen: SCREEN, text: "agreed to get messages: Amina Hassan", notText: "call back|follow-up" } },
      { say: "Create an email campaign called Grand Opening saying We open Saturday at ten at the church hall.", timeoutMs: 90000, expect: { screen: SCREEN, text: "save the Grand Opening campaign[\\s\\S]*will not be sent until you say so" } },
      { say: "Yes.", timeoutMs: 60000, expect: { screen: SCREEN, text: "Saved the Grand Opening campaign[\\s\\S]*has not been sent" } },
      { say: "Send the Grand Opening campaign.", timeoutMs: 90000, expect: { screen: SCREEN, text: "no usable email address[\\s\\S]*sent nothing", notText: "Should I send it" } },
      { say: "Show my campaigns.", timeoutMs: 60000, expect: { screen: SCREEN, text: "Grand Opening \\(not sent yet, by email\\)" } },
      { say: "How did the Grand Opening campaign do?", timeoutMs: 60000, expect: { screen: SCREEN, text: "has not been sent yet" } },
      // sending later, with no one there: a guest is refused, in words, and nothing is saved
      { say: "Schedule the Grand Opening campaign for tomorrow at 9 am.", timeoutMs: 90000, expect: { screen: SCREEN, text: "cannot send messages, so I cannot schedule a campaign[\s\S]*Nothing was scheduled", notText: "Should I schedule it" } },
      { say: "What campaigns are scheduled?", timeoutMs: 60000, expect: { screen: SCREEN, text: "is scheduled to go out|Nothing in .Mama Grace Salon. is scheduled to go out", notText: "Grand Opening on" } }
    ] },
  // The same, for a signed-in account that may send (needs KYRO_TEST_EMAIL / KYRO_TEST_PASSWORD): schedule a send for tomorrow morning, see it listed, then cancel it, so nothing is ever sent from a test. The send itself, at the chosen time, is covered
  // by test/nexus/business-scheduled-campaigns.test.js (a fake clock and a fake database) and by watching the worker on a real send.
  { id: "camp-schedule-journey", area: "campaigns", writes: true, needs: "account", say: "Start a business called Mama Grace Salon.", timeoutMs: 90000, expect: { screen: SCREEN, text: "Mama Grace Salon" },
    then: [
      { say: "Yes.", timeoutMs: 60000, expect: { screen: SCREEN, text: "Started a business" } },
      { say: "Add a customer named Amina Hassan, her email is amina@example.com.", timeoutMs: 90000, expect: { screen: SCREEN, text: "add Amina Hassan" } },
      { say: "Yes.", timeoutMs: 60000, expect: { screen: SCREEN, text: "Amina Hassan" } },
      { say: "Amina Hassan agreed to get messages.", timeoutMs: 90000, expect: { screen: SCREEN, text: "Amina Hassan agreed to get messages" } },
      { say: "Yes.", timeoutMs: 60000, expect: { screen: SCREEN, text: "Noted[\s\S]*Amina Hassan agreed to get messages" } },
      { say: "Create an email campaign called Grand Opening saying We open Saturday at ten at the church hall.", timeoutMs: 90000, expect: { screen: SCREEN, text: "save the Grand Opening campaign" } },
      { say: "Yes.", timeoutMs: 60000, expect: { screen: SCREEN, text: "Saved the Grand Opening campaign" } },
      { say: "Schedule the Grand Opening campaign for tomorrow at 9 am.", timeoutMs: 90000, expect: { screen: SCREEN, text: "schedule the Grand Opening campaign[\s\S]*Amina Hassan[\s\S]*I check the list again[\s\S]*Should I schedule it" } },
      { say: "Yes.", timeoutMs: 60000, expect: { screen: SCREEN, text: "Scheduled the Grand Opening campaign for[\s\S]*9 AM" } },
      { say: "What campaigns are scheduled?", timeoutMs: 60000, expect: { screen: SCREEN, text: "is scheduled to go out: Grand Opening on[\s\S]*9 AM, by email" } },
      { say: "Cancel the scheduled Grand Opening campaign.", timeoutMs: 90000, expect: { screen: SCREEN, text: "cancel the scheduled send of the Grand Opening campaign[\s\S]*nothing goes out" } },
      { say: "Yes.", timeoutMs: 60000, expect: { screen: SCREEN, text: "Cancelled the scheduled send[\s\S]*nothing was sent" } },
      { say: "What campaigns are scheduled?", timeoutMs: 60000, expect: { screen: SCREEN, text: "is scheduled to go out", notText: "Grand Opening on" } }
    ] }
]);
