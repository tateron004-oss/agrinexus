"use strict";
// Spoken requests for documents and lists must be SHOWN, as typed ones are (found by a probe of eight everyday spoken requests on 27 October 2026): a starter document ("Draft a website brief for Grace's Bakery") was answered
// "Okay." with nothing on the screen; "Make a shopping list with milk, eggs and bread" said the items were added and showed nothing; "Make me a checklist of what to bring to a clinic visit" made an empty list called "Nexus checklist";
// "Make me a packing checklist for a trip to Kenya" was made into a seven day itinerary. The ones that save something are saved to the throwaway guest account only.
module.exports = Object.freeze([
  { id: "spoken-starter-document", area: "documents", writes: true, say: "Draft a website brief for Grace's Bakery.", timeoutMs: 90000, expect: { screen: "document", text: "WEBSITE BRIEF", download: true } },
  { id: "spoken-shopping-list-read-back", area: "lists", writes: true, say: "Make a shopping list with milk, eggs and bread.", timeoutMs: 90000, expect: { screen: "list", text: "milk" }, then: [{ say: "What is on my shopping list?" }, { expect: { text: "milk", notText: "empty|nothing|no items" }, timeoutMs: 60000 }] },
  { id: "spoken-shopping-list-shown", area: "lists", writes: true, say: "Make a shopping list with milk, eggs and bread.", timeoutMs: 90000, expect: { screen: "list", text: "On your (?:checklist called )?shopping list", notText: "itinerary" } },
  { id: "spoken-checklist-without-items-asks", area: "lists", say: "Make me a checklist of what to bring to a clinic visit.", timeoutMs: 60000, expect: { screen: ["text", "list"], text: "what goes on it", notText: "Nexus checklist|itinerary" } },
  { id: "spoken-packing-checklist-not-an-itinerary", area: "lists", writes: true, say: "Make me a packing checklist for a trip to Kenya.", timeoutMs: 90000, expect: { notText: "SAMPLE ITINERARY|itinerary" } }
]);
