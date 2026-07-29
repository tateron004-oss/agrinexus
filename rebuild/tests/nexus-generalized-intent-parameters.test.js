"use strict";

const assert = require("node:assert/strict");
const { extractIntentAndParameters } = require("../nexus-core/intent-parameter-extractor");
const { routeCommand } = require("../nexus-core/router");
const { locationFromWeatherCommand } = require("../nexus-core/visual-data-service");
const { musicSearchFromCommand, visualIntent } = require("../browser/nexus-clean-entry");

const paraphrases = [
  ["maps", ["Show me a map of Mombasa, Kenya", "Could you open Mombasa on the map please", "I want to see the city of Mombasa on the map"]],
  ["reminders", ["Remind me tomorrow morning to check my blood pressure", "Please create a reminder to call the clinic tonight", "Set a reminder for me to take medicine at 8 pm"]],
  ["health", ["Record my blood pressure as 140 over 90", "Please open chronic health support", "Create a card I can show my doctor"]],
  ["telehealth", ["Open Telehealth Intake", "Could you begin a video visit", "I want to talk to a clinician"]],
  ["mobile-clinic", ["Open Mobile Clinic support", "Help me find a mobile clinic", "I need a clinic visit"]],
  ["pharmacy", ["Open Pharmacy Support", "Help me contact a pharmacist", "I have a prescription question"]],
  ["workforce", ["Search for farming jobs in Kenya", "Help me create a résumé", "Are there agricultural employment options around Nairobi"]],
  ["marketplace", ["Help me sell 50 bags of maize", "I want to buy 2 tons of rice in Kenya", "Open the AgriTrade marketplace"]],
  ["agriculture", ["Open Agriculture Help", "Show pictures of possible maize diseases", "I need help with my coffee crop in Kenya"]],
  ["learning", ["Open Learning and Literacy", "Help me learn English", "Find a training course"]],
  ["music", ["Play Kenyan music", "Could you put on soul songs please", "I want to hear gospel music"]],
  ["offline", ["Open the Offline Queue", "Show my sync queue", "What work is offline"]],
  ["live-knowledge", ["Show today's weather in Nairobi, Kenya", "Show me the websites and sources", "Open the Pilot Evidence Dashboard"]]
];

for (const [workflow, commands] of paraphrases) {
  for (const command of commands) {
    const result = routeCommand(`Nexus, ${command}`, "connected");
    assert.equal(result.workspace, workflow, command);
    assert.equal(result.utterance.startsWith("Nexus"), false, command);
    assert.equal(typeof result.parameters.action, "string", command);
  }
}

const bp = extractIntentAndParameters("Nexus, please record my blood pressure as 140 over 90.");
assert.deepEqual(bp.parameters.bloodPressure, { systolic: 140, diastolic: 90 });

const listing = extractIntentAndParameters("Could you help me sell 50 bags of maize in Kenya?");
assert.deepEqual(listing.parameters, {
  action: "sell", quantity: 50, unit: "bags", product: "maize", location: "Kenya"
});

const reminder = extractIntentAndParameters("Nexus, remind me tomorrow morning to check my blood pressure.");
assert.equal(reminder.parameters.timing, "tomorrow morning");
assert.equal(reminder.parameters.task, "to check my blood pressure");

assert.equal(locationFromWeatherCommand("Could you show me the forecast for Mombasa, Kenya please?"), "Mombasa, Kenya");
assert.equal(musicSearchFromCommand("Nexus, could you play Kenyan music please?"), "Kenyan");
assert.equal(visualIntent("Would you help me create a résumé?"), "resume");
assert.equal(visualIntent("Please show pictures of maize disease."), "agriculture-images");
assert.equal(visualIntent("Create a summary for my physician."), "provider-card");

console.log(`Nexus generalized intent and parameters: PASS (${paraphrases.reduce((sum, item) => sum + item[1].length, 0)} paraphrases across ${paraphrases.length} workflows)`);
