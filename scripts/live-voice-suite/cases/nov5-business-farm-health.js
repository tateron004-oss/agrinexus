"use strict";
// The business, farm and health items of the owner's 4 November 2026 test report that were still failing (farm-07, farm-13, health-06, business-06, -08, -12, -18, -25), as SPOKEN cases.
// Every one is said, not typed: a person asks by voice, so the spoken route (the voice model, its tool calls and the page's own claims) is the thing under test.
module.exports = Object.freeze([
  // farm-07: stock in the shed, said as numbers and as number words; taking out more than there is must be refused with the real count
  { id: "n5-farm-stock-spoken", area: "nov5", writes: true, say: "Add forty bags of fertilizer to stock.", timeoutMs: 60000, expect: { screen: ["text", "list"], text: "40 bags of fertilizer" },
    then: [{ say: "How much fertilizer do I have?", timeoutMs: 60000, expect: { screen: ["text", "list"], text: "40 bags of fertilizer" } },
      { say: "Use two bags of fertilizer.", timeoutMs: 60000, expect: { screen: ["text", "list"], text: "38 bags" } },
      { say: "Use 500 bags of fertilizer.", timeoutMs: 60000, expect: { screen: ["text", "list"], text: "only have 38 bags" } }] },
  // farm-13: a route between two towns, then when a delivery will arrive: plain words, not a knowledge card
  { id: "n5-farm-route-and-delivery", area: "nov5", say: "Show a route from Nairobi to Nakuru.", timeoutMs: 90000, expect: { mapOpen: true, mapNear: { lat: -0.6, lng: 36.5, within: 1.5 } },
    then: [{ tap: "^×$|^Close$" }, { say: "When will my delivery from Nairobi to Nakuru arrive?", timeoutMs: 90000, expect: { screen: "text", text: "Nairobi to Nakuru: about 15[0-9] km.*not live tracking", notText: "knowledge|according to|source" } }] },
  // health-06: emergency words, with an empty circle: the emergency words, never a care-encounter form
  { id: "n5-health-emergency-fell", area: "nov5", risky: true, say: "I fell and can't get up.", timeoutMs: 60000, expect: { screen: ["text", "list"], text: "circle[\\s\\S]*emergency number", notText: "encounter|virtual care|telehealth|visit" } },
  { id: "n5-health-emergency-slipped", area: "nov5", risky: true, say: "I slipped and hurt my back.", timeoutMs: 60000, expect: { screen: ["text", "list"], text: "circle[\\s\\S]*emergency number", notText: "encounter|virtual care|telehealth|visit" } },
  { id: "n5-health-emergency-ambulance", area: "nov5", risky: true, say: "Call an ambulance.", timeoutMs: 60000, expect: { screen: ["text", "list"], text: "circle[\\s\\S]*emergency number", notText: "encounter|virtual care|telehealth|visit" } },
  { id: "n5-health-emergency-alert-circle", area: "nov5", risky: true, say: "Alert my circle.", timeoutMs: 60000, expect: { screen: ["text", "list"], text: "circle[\\s\\S]*emergency number", notText: "encounter|virtual care|telehealth|visit" } },
  { id: "n5-health-emergency-had-a-fall", area: "nov5", risky: true, say: "I've had a fall.", timeoutMs: 60000, expect: { screen: ["text", "list"], text: "circle[\\s\\S]*emergency number", notText: "encounter|virtual care|telehealth|visit" } },
  // business-06: an invoice for a client, then an item on it (a person with no workspace is told so and offered one; the owner's test already had a workspace, so the case starts one, as the guide's Test 1 does)
  { id: "n5-business-invoice", area: "nov5", writes: true, say: "Start a business called Amina Farm.", timeoutMs: 90000, expect: { screen: ["text", "list", "document"], text: "Amina Farm", notText: "workforce" },
    then: [{ say: "Yes.", timeoutMs: 60000, expect: { screen: ["text", "list", "document"], text: "Started a business", notText: "workforce" } },
      { say: "Create an invoice for Grace Otieno.", timeoutMs: 90000, expect: { screen: ["text", "list", "document"], text: "create invoice INV-1001 for Grace Otieno", notText: "workforce" } },
      { say: "Yes.", timeoutMs: 60000, expect: { screen: ["text", "list", "document"], text: "Created invoice INV-1001 for Grace Otieno", notText: "workforce" } },
      { say: "Add an item to invoice number 1001: 5 bags of maize at 500 shillings each.", timeoutMs: 90000, expect: { screen: ["text", "list", "document"], text: "add 5 x bags of maize at KES 500 to invoice INV-1001", notText: "workforce" } },
      { say: "Yes.", timeoutMs: 60000, expect: { screen: ["text", "list", "document"], text: "Added 5 x bags of maize at KES 500 to invoice INV-1001", notText: "workforce" } }] },
  // business-08: a buyer, then a follow-up with that buyer on Friday by FIRST NAME, then the follow-ups
  { id: "n5-business-buyer-followup", area: "nov5", writes: true, say: "Start a business called Amina Farm.", timeoutMs: 90000, expect: { screen: ["text", "list", "document"], text: "Amina Farm" },
    then: [{ say: "Yes.", timeoutMs: 60000, expect: { screen: ["text", "list", "document"], text: "Started a business" } },
      { say: "Add a buyer called Amina Hassan.", timeoutMs: 90000, expect: { screen: ["text", "list", "document"], text: "add Amina Hassan as a (?:buyer|customer)" } },
      { say: "Yes.", timeoutMs: 60000, expect: { screen: ["text", "list", "document"], text: "Added Amina Hassan" } },
      { say: "Follow up with Amina on Friday.", timeoutMs: 90000, expect: { screen: ["text", "list", "document"], text: "set a follow-up with Amina Hassan", notText: "could not find|not find" } },
      { say: "Yes.", timeoutMs: 60000, expect: { screen: ["text", "list", "document"], text: "Set a follow-up with Amina Hassan" } },
      { say: "What follow-ups do I have?", timeoutMs: 60000, expect: { screen: ["text", "list", "document"], text: "1 follow-up[\s\S]*Amina Hassan", notText: "no follow-ups" } }] },
  // business-12: a resume by talking
  { id: "n5-business-resume", area: "nov5", say: "Can you make a resume for me?", timeoutMs: 60000, expect: { intake: "Question 1 of" }, then: [{ say: "Cancel." }, { expect: { intake: false }, timeoutMs: 25000 }] },
  // business-18: outside-tool automations open by voice
  { id: "n5-business-automations-open", area: "nov5", say: "Open automations.", timeoutMs: 60000, expect: { screen: "automations", keep: true, text: "Outside tool automations" } },
  { id: "n5-business-automations-zapier", area: "nov5", say: "I want to connect Zapier.", timeoutMs: 60000, expect: { screen: ["automations", "text"], text: "Zapier|outside tool|connect" } },
  // business-25: a money plan, and a financial education program plan, by answering questions
  { id: "n5-business-money-plan", area: "nov5", say: "Help me make a money plan.", timeoutMs: 60000, expect: { intake: "Question 1 of 10" }, then: [{ say: "Cancel." }, { expect: { intake: false }, timeoutMs: 25000 }] },
  { id: "n5-business-education-program-plan", area: "nov5", say: "Help me plan a financial education program.", timeoutMs: 60000, expect: { intake: "Question 1 of" }, then: [{ say: "Cancel." }, { expect: { intake: false }, timeoutMs: 25000 }] }
]);
