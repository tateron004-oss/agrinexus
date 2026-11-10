"use strict";
// Pages the owner's customers can open (9 November 2026), SAID. One journey in a throwaway workspace: a contact form, a landing page, a survey and a booking page made by voice, each after a yes, then listed, its link read out, turned off and
// on, and deleted. The public link and what a visitor can send are covered by test/nexus/business-pages.test.js (and opened for real against the live site by hand: a test can only say words, it cannot open a link).
const SCREEN = ["text", "list", "document"];
module.exports = Object.freeze([
  { id: "pages-journey", area: "pages", writes: true, needs: "guest", say: "Start a business called Mama Grace Studio.", timeoutMs: 90000, expect: { screen: SCREEN, text: "Mama Grace Studio" },
    then: [
      { say: "Yes.", timeoutMs: 60000, expect: { screen: SCREEN, text: "Started a business" } },
      { say: "Create a contact form called Enquiry with the fields name, phone and message.", timeoutMs: 90000, expect: { screen: SCREEN, text: "contact form called Enquiry[\\s\\S]*asking for Name, Phone and Message[\\s\\S]*own link that anyone can open" } },
      { say: "Yes.", timeoutMs: 60000, expect: { screen: SCREEN, text: "Made the Enquiry contact form\\. Its link is [^ ]*/p/enquiry-[a-z0-9]{8}" } },
      { say: "Create a landing page called Spring Sale with the headline Half price this week and the text Come in before Friday.", timeoutMs: 90000, expect: { screen: SCREEN, text: "landing page called Spring Sale" } },
      { say: "Yes.", timeoutMs: 60000, expect: { screen: SCREEN, text: "Made the Spring Sale landing page" } },
      { say: "Create a survey called Feedback with the questions what did you like; what could we improve.", timeoutMs: 90000, expect: { screen: SCREEN, text: "survey called Feedback" } },
      { say: "Yes.", timeoutMs: 60000, expect: { screen: SCREEN, text: "Made the Feedback survey" } },
      { say: "Create a booking page called Book a Haircut for 30 minutes.", timeoutMs: 90000, expect: { screen: SCREEN, text: "booking page called Book a Haircut[\\s\\S]*30 minutes[\\s\\S]*nobody is double-booked" } },
      { say: "Yes.", timeoutMs: 60000, expect: { screen: SCREEN, text: "Made the Book a Haircut booking page" } },
      { say: "Show my pages.", timeoutMs: 60000, expect: { screen: SCREEN, text: "4 pages: Enquiry \\(contact form, on\\)[\\s\\S]*Spring Sale[\\s\\S]*Feedback[\\s\\S]*Book a Haircut" } },
      { say: "What is the link to the Enquiry form?", timeoutMs: 60000, expect: { screen: SCREEN, text: "Its link is [^ ]*/p/enquiry-" } },
      { say: "What did the Enquiry form get?", timeoutMs: 60000, expect: { screen: SCREEN, text: "Nobody has used the Enquiry contact form yet" } },
      { say: "Turn off the Spring Sale page.", timeoutMs: 90000, expect: { screen: SCREEN, text: "turn the Spring Sale page off" } },
      { say: "Yes.", timeoutMs: 60000, expect: { screen: SCREEN, text: "The Spring Sale page is off" } },
      { say: "Delete the Spring Sale page.", timeoutMs: 90000, expect: { screen: SCREEN, text: "delete the Spring Sale page" } },
      { say: "Yes.", timeoutMs: 60000, expect: { screen: SCREEN, text: "Deleted the Spring Sale page" } }
    ] },
  // the older request for a blank document keeps its own meaning
  { id: "pages-intake-form-stays-a-document", area: "pages", writes: true, say: "Create an intake form.", timeoutMs: 90000, expect: { screen: SCREEN, notText: "own link that anyone can open" } }
]);
