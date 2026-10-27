"use strict";
// The sweep of 34 everyday spoken requests (27 October 2026) found thirteen that showed nothing and three that made an empty checklist named after the trip. The page now takes these and the typed route answers on the screen.
// Each case says one thing and reads what is on the screen. The ones that save something are saved to the throwaway guest account only.
const document = (id, say, text) => ({ id: `sweep-${id}`, area: "spoken-sweep", writes: true, say, timeoutMs: 90000, expect: { screen: "document", text, download: true } });
const asks = (id, say) => ({ id: `sweep-${id}`, area: "spoken-sweep", say, timeoutMs: 60000, expect: { screen: ["text", "list"], text: "what goes on it", notText: "itinerary" } });
module.exports = Object.freeze([
  document("agenda", "Make a meeting agenda for the church board.", "agenda"),
  document("email", "Draft an email to my son's teacher about a meeting.", "teacher"),
  document("thank-you-note", "Write a thank you note to my case manager.", "thank"),
  document("bio", "Write a short bio for my website.", "bio"),
  document("meal-plan", "Make me a weekly meal plan.", "meal"),
  document("study-schedule", "Make a study schedule for my exam.", "study|schedule"),
  document("speech", "Write a short speech for my daughter's graduation.", "speech"),
  document("expense-table", "Make a table of my monthly expenses: rent 500, food 200.", "expense"),
  { id: "sweep-work-schedule", area: "spoken-sweep", say: "Make me a schedule for my work week.", timeoutMs: 90000, expect: { screen: ["text", "document"], text: "days and hours|schedule" } },
  asks("packing-list-tokyo", "Make a packing list for a week in Tokyo."),
  asks("checklist-food-truck", "Create a checklist for opening a food truck."),
  asks("travel-checklist-kenya", "Make me a travel checklist for Kenya."),
  asks("interview-list", "Start a list of things to bring to my job interview."),
  { id: "sweep-show-my-lists", area: "spoken-sweep", say: "Show me my lists.", timeoutMs: 60000, expect: { screen: ["text", "list"], text: "list" } },
  { id: "sweep-what-to-pack", area: "spoken-sweep", say: "What should I pack for Kenya?", timeoutMs: 90000, expect: { screen: ["text", "list", "checklists"], text: "pack|Kenya|passport|layers" } },
  { id: "sweep-directions-no-location", area: "spoken-sweep", say: "Give me directions to the nearest pharmacy.", timeoutMs: 60000, expect: { allowRefusal: true, screen: ["text", "list"], text: "location|where you are" } }
]);
