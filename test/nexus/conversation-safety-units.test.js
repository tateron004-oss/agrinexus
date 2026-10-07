"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const orchestrator = require("../../public/nexus-genesis-conversational-mode-orchestrator.js");
const { extractSpokenName, usableDisplayName, spokenNameFromGreeting } = require("../../server/nexus-greeting-name.js");

// "stop", "wait", "actually" and "pause" in the middle of a sentence are ordinary words. They used to turn "my hand will not stop bleeding" and
// "should I stop taking my ARVs" into "Okay, I stopped."
test("a real interruption is the whole utterance (or an interruption word and a pleasantry)", () => {
  for (const said of ["Wait.", "stop", "Stop!", "Hold on a moment", "actually no", "Okay, stop", "Nexus stop please", "pause", "let me finish", "wait wait", "Sorry, wait"]) {
    const result = orchestrator.orchestrate(said, { preferredLanguage: "en" });
    assert.equal(result.signals.interruption, true, said);
    assert.equal(result.primaryMode.id, "interruption_turn_taking", said);
  }
});

test("an interruption word inside a real request or a health sentence is not an interruption", () => {
  for (const said of [
    "my hand will not stop bleeding",
    "I cut my hand with a panga and it will not stop bleeding",
    "should I stop taking my ARVs because I feel fine",
    "stop reminding me about my pills",
    "actually make it 9pm",
    "wait I have a question about my baby",
    "can you pause the reminder for my tablets",
    "the rain did not stop all night"
  ]) {
    const result = orchestrator.orchestrate(said, { preferredLanguage: "en" });
    assert.equal(result.signals.interruption, false, said);
    assert.notEqual(result.primaryMode.id, "interruption_turn_taking", said);
  }
});

test("'Actually, explain it more simply' is a correction of the last answer, as it always was, and no longer 'Okay, I stopped'", () => {
  const result = orchestrator.orchestrate("Actually, explain it more simply.", { preferredLanguage: "en" });
  assert.equal(result.signals.interruption, false);
  assert.equal(result.primaryMode.id, "repair_correction");
});

test("'what is the emergency number' is a question for the router that knows the country, not the generic urgent reply", () => {
  const result = orchestrator.orchestrate("what is the emergency number in Kenya", { preferredLanguage: "en" });
  assert.equal(result.responseStrategy, "continue_existing_router");
  const real = orchestrator.orchestrate("this is an emergency", { preferredLanguage: "en" });
  assert.equal(real.primaryMode.id, "emergency_safety");
  assert.equal(real.responseStrategy, "direct_conversational_response");
});

test("only an explicit name statement, or 'I am <Capitalised name>', is a name", () => {
  const notNames = [
    "I am pregnant", "I am diabetic", "I am HIV positive and on treatment", "I am breastfeeding", "I am hypertensive", "i am very stressed and i cant sleep",
    "I am running out of my blood pressure pills", "I am a farmer", "I am tired", "I am hungry", "I am PREGNANT", "I AM TIRED", "I am 7 months pregnant", "I am new",
    "I am from Kisumu", "I am Nigerian", "I am a Kenyan farmer", "call me later", "call me back", "hello, this is urgent", "I am Grace and I am pregnant"
  ];
  for (const said of notNames) assert.equal(extractSpokenName(said), "", said);
  const names = { "my name is Grace": "Grace", "I am Grace": "Grace", "I'm Wanjiru": "Wanjiru", "call me Ron": "Ron", "Call me Mama Joy": "Mama Joy", "My name is Chidi Okafor": "Chidi Okafor", "naitwa Amina": "Amina", "jina langu ni Juma": "Juma", "ninaitwa Baraka": "Baraka", "I am Grace and I need a clinic": "Grace", "Hi, I'm Brian, how are you": "Brian", "this is Ron": "Ron" };
  for (const [said, expected] of Object.entries(names)) assert.equal(extractSpokenName(said), expected, said);
});

test("a name saved before the check existed is not spoken back", () => {
  for (const saved of ["Pregnant", "Running Out Of", "Hiv Positive And", "Very Stressed And", "Diabetic", "Breastfeeding", "Hypertensive", ""]) assert.equal(usableDisplayName(saved), "", saved);
  for (const saved of ["Grace", "Ron", "Mama Joy", "Chidi Okafor"]) assert.equal(usableDisplayName(saved), saved);
  assert.equal(spokenNameFromGreeting("Hello Nexus, this is Pregnant"), "");
  assert.equal(spokenNameFromGreeting("Hello Nexus, this is Ron"), "Ron");
});
