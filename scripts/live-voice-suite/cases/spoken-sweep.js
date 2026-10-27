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
  { id: "sweep-directions-no-location", area: "spoken-sweep", say: "Give me directions to the nearest pharmacy.", timeoutMs: 60000, expect: { allowRefusal: true, screen: ["text", "list"], text: "location|where you are" } },
  { id: "sweep-flyer-no-workspace", area: "spoken-sweep", writes: true, say: "Make me a flyer for my bake sale on Saturday.", timeoutMs: 90000, expect: { screen: "document", text: "Bake Sale Flyer[\\s\\S]*Saturday[\\s\\S]*\\[the place\\]", notText: "placeholders|editable|business or nonprofit workspace", download: true } },
  { id: "sweep-invitation", area: "spoken-sweep", writes: true, say: "Write an invitation to our block party on Saturday.", timeoutMs: 90000, expect: { screen: "document", text: "invited[\\s\\S]*Saturday", notText: "placeholders|editable", download: true } },
  { id: "sweep-write-down", area: "spoken-sweep", writes: true, say: "Write down milk, eggs and flour.", timeoutMs: 60000, expect: { screen: ["text", "list"], text: "milk" } },
  { id: "sweep-make-a-note", area: "spoken-sweep", writes: true, say: "Make a note that I paid the rent.", timeoutMs: 60000, expect: { screen: ["text", "list"], text: "paid the rent" } },
  { id: "sweep-remind-bread", area: "spoken-sweep", writes: true, say: "Remind me to buy bread tomorrow.", timeoutMs: 60000, expect: { screen: ["text", "list"], text: "bread" } },
  { id: "sweep-list-documents-for-id", area: "spoken-sweep", say: "Make a list of the documents I need to get an ID.", timeoutMs: 60000, expect: { screen: ["text", "list"], text: "what goes on it", notText: "business or nonprofit workspace" } }
]);
