"use strict";
// Follow-up sequences (9 November 2026), SAID. One journey in a throwaway workspace: a sequence built step by step, read back, and the refusal to start it for a person who has no phone number saved (so nothing is ever sent from the
// test: sending, the safety rules and the worker are covered by test/nexus/business-sequences.test.js).
const SCREEN = ["text", "list", "document"];
module.exports = Object.freeze([
  { id: "sequence-journey", area: "sequences", writes: true, needs: "guest", say: "Start a business called Mama Grace Spa.", timeoutMs: 90000, expect: { screen: SCREEN, text: "Mama Grace Spa" },
    then: [
      { say: "Yes.", timeoutMs: 60000, expect: { screen: SCREEN, text: "Started a business" } },
      { say: "Add a customer named Amina Hassan.", timeoutMs: 90000, expect: { screen: SCREEN, text: "add Amina Hassan" } },
      { say: "Yes.", timeoutMs: 60000, expect: { screen: SCREEN, text: "Added Amina Hassan" } },
      { say: "Amina Hassan agreed to get messages.", timeoutMs: 90000, expect: { screen: SCREEN, text: "Amina Hassan agreed to get messages" } },
      { say: "Yes.", timeoutMs: 60000, expect: { screen: SCREEN, text: "Noted[\\s\\S]*Amina Hassan agreed to get messages" } },
      { say: "Create a sequence called Quote Follow-up.", timeoutMs: 90000, expect: { screen: SCREEN, text: "create a follow-up sequence called Quote Follow-up[\\s\\S]*sends nothing until you add steps" } },
      { say: "Yes.", timeoutMs: 60000, expect: { screen: SCREEN, text: "Created the Quote Follow-up sequence" } },
      { say: "Add a step to Quote Follow-up: right away, send a text saying Thanks for asking about a quote.", timeoutMs: 90000, expect: { screen: SCREEN, text: "step 1 to the Quote Follow-up sequence[\\s\\S]*right away, by text" } },
      { say: "Yes.", timeoutMs: 60000, expect: { screen: SCREEN, text: "Added step 1" } },
      { say: "Add a step to Quote Follow-up: after 2 days, send a text saying Just checking in about your quote.", timeoutMs: 90000, expect: { screen: SCREEN, text: "step 2[\\s\\S]*2 days after the step before" } },
      { say: "Yes.", timeoutMs: 60000, expect: { screen: SCREEN, text: "Added step 2" } },
      { say: "What is in the Quote Follow-up sequence?", timeoutMs: 60000, expect: { screen: SCREEN, text: "2 steps[\\s\\S]*step 1, right away, by text[\\s\\S]*step 2, after 2 days" } },
      { say: "Show my sequences.", timeoutMs: 60000, expect: { screen: SCREEN, text: "1 sequence: Quote Follow-up \\(2 steps, 0 running\\)" } },
      { say: "Start the Quote Follow-up sequence for Amina Hassan.", timeoutMs: 90000, expect: { screen: SCREEN, text: "no phone number saved", notText: "I will start" } }
    ] },
  { id: "sequence-whatsapp-campaign-refused", area: "sequences", writes: true, needs: "guest", say: "Start a business called Mama Grace Beauty.", timeoutMs: 90000, expect: { screen: SCREEN, text: "Mama Grace Beauty" },
    then: [
      { say: "Yes.", timeoutMs: 60000, expect: { screen: SCREEN, text: "Started a business" } },
      { say: "Create a WhatsApp campaign called Sale saying Half price on Friday at nine.", timeoutMs: 90000, expect: { screen: SCREEN, text: "WhatsApp campaigns are not set up yet", notText: "I can save the Sale campaign" } }
    ] }
]);
