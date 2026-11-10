"use strict";
// The sales pipeline, tags and a history for each contact (9 November 2026), SAID. One journey in a throwaway workspace: a customer, a deal that starts at the first stage, a move to the next, the board and its value, a tag
// that finds the person, a note, and the history that gathers it all. Every change waits for a yes. Nothing is sent to anyone.
const SCREEN = ["text", "list", "document"];
module.exports = Object.freeze([
  { id: "pipeline-journey", area: "pipeline", writes: true, needs: "guest", say: "Start a business called Mama Grace Bakery.", timeoutMs: 90000, expect: { screen: SCREEN, text: "Mama Grace Bakery" },
    then: [
      { say: "Yes.", timeoutMs: 60000, expect: { screen: SCREEN, text: "Started a business" } },
      { say: "Add a customer named Amina Hassan.", timeoutMs: 90000, expect: { screen: SCREEN, text: "add Amina Hassan" } },
      { say: "Yes.", timeoutMs: 60000, expect: { screen: SCREEN, text: "Added Amina Hassan" } },
      { say: "Add a deal for Amina Hassan, wedding cake, 400 dollars.", timeoutMs: 90000, expect: { screen: SCREEN, text: "add a deal for Amina Hassan[\\s\\S]*400[\\s\\S]*at New" } },
      { say: "Yes.", timeoutMs: 60000, expect: { screen: SCREEN, text: "Added a deal for Amina Hassan" } },
      { say: "Move Amina's deal to Quoted.", timeoutMs: 90000, expect: { screen: SCREEN, text: "from New to Quoted" } },
      { say: "Yes.", timeoutMs: 60000, expect: { screen: SCREEN, text: "is now at Quoted" } },
      { say: "Show my pipeline.", timeoutMs: 60000, expect: { screen: SCREEN, text: "1 deal[\\s\\S]*Quoted 1" } },
      { say: "How much is in my pipeline?", timeoutMs: 60000, expect: { said: "400" } },
      { say: "Tag Amina as VIP.", timeoutMs: 90000, expect: { screen: SCREEN, text: "tag Amina Hassan as VIP" } },
      { say: "Yes.", timeoutMs: 60000, expect: { screen: SCREEN, text: "is tagged VIP" } },
      { say: "Who is tagged VIP?", timeoutMs: 60000, expect: { screen: SCREEN, text: "Amina Hassan" } },
      { say: "Add a note to Amina: she wants delivery on Friday.", timeoutMs: 90000, expect: { screen: SCREEN, text: "save this note on Amina Hassan", notText: "Say \"what are my notes" } },
      { say: "Yes.", timeoutMs: 60000, expect: { screen: SCREEN, text: "Saved the note on Amina Hassan" } },
      { say: "What is Amina's history?", timeoutMs: 60000, expect: { screen: SCREEN, text: "tagged VIP[\\s\\S]*Wedding Cake[\\s\\S]*delivery on Friday" } },
      { say: "We won the Amina Hassan deal.", timeoutMs: 90000, expect: { screen: SCREEN, text: "from Quoted to Won" } },
      { say: "Yes.", timeoutMs: 60000, expect: { screen: SCREEN, text: "Congratulations" } }
    ] },
  // the look-alikes stay with the personal notes and lists
  { id: "pipeline-personal-note-stays-personal", area: "pipeline", writes: true, say: "Add a note to my shopping list: milk.", timeoutMs: 60000, expect: { screen: SCREEN, notText: "save this note on" } }
]);
