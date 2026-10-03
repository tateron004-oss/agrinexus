"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const KyroVoiceIntake = require("../../public/kyro-voice-intake.js");
const KyroIntakeForms = require("../../public/kyro-intake-forms.js");

// Found live (first real voice test of the résumé intake): people don't say bare command words.
// Asked to "repeat", the speech recognizer heard the sentences below, none matched the original
// bare-word patterns, and each was saved as an ANSWER (a skills entry, an education entry, a
// languages entry). "Kyro, stop for a minute" came back as "Chatroom, stop for a minute." and was
// saved as an answer too. These tests use the exact phrases from that session.

const now = () => 1000000;

function sampleForm(overrides = {}) {
  return {
    id: "sample",
    title: "Sample form",
    intro: "I will ask a few short questions.",
    confirmBeforeSubmit: true,
    fields: [
      { key: "name", label: "Name", question: "What is your name?", required: true, kind: "name" },
      { key: "town", label: "Town", question: "Which town do you live in?", required: false, kind: "text" },
      { key: "skills", label: "Skills", question: "What are you good at?", required: false, kind: "list", aliases: ["skills"] }
    ],
    ...overrides
  };
}

// Leaves the intake on "What are you good at?" (a list-kind field, the kind that swallowed the bug).
function atSkills() {
  const intake = KyroVoiceIntake.create(sampleForm(), { now });
  intake.start();
  intake.handleUtterance("Amina", { utteranceId: "n1" });
  intake.handleUtterance("Kisumu", { utteranceId: "n2" });
  return intake;
}

const NATURAL_REPEATS = [
  "I'm sorry, can you repeat that, please?",
  "I said I didn't hear you. Could you repeat that, please?",
  "Could you say that again?",
  "Can you repeat the question?",
  "What was the question?",
  "What did you say?",
  "I didn't catch that",
  "I don't understand",
  "Kyro, can you repeat that?",
  "Chatroom, what did you say?",
  "Do you understand me?",
  "What do you mean?"
];

test("natural spoken ways of asking Kyro to repeat re-ask the question and are never saved as an answer", () => {
  for (const phrase of NATURAL_REPEATS) {
    const intake = atSkills();
    const decision = intake.handleUtterance(phrase, { utteranceId: `rep-${phrase}` });
    assert.equal(decision.action, "ask", `"${phrase}" should re-ask`);
    assert.match(decision.say, /What are you good at\?/, `"${phrase}" should repeat the current question`);
    assert.equal(decision.values.skills, undefined, `"${phrase}" must not be saved as the skills answer`);
    assert.equal(decision.snapshot.index, 2, `"${phrase}" must not advance`);
  }
});

test("repeat requests are honored in every phase, not just the plain question", () => {
  const intake = KyroVoiceIntake.create(sampleForm({ fields: [
    { key: "name", label: "Name", question: "What is your name?", required: true, kind: "name" },
    { key: "work", label: "Work", question: "Tell me about your work.", required: false, kind: "sentences", repeatable: { moreQuestion: "Any other work?", max: 5 } }
  ] }), { now });
  intake.start();
  intake.handleUtterance("Amina", { utteranceId: "p1" });
  intake.handleUtterance("I grew maize", { utteranceId: "p2" });
  const more = intake.handleUtterance("I'm sorry, can you repeat that, please?", { utteranceId: "p3" });
  assert.match(more.say, /Any other work\?/);
  assert.deepEqual(Array.from(more.snapshot.answers.find(a => a.key === "work").value), ["I grew maize"],
    "the repeat request must not become a second work entry");
  intake.handleUtterance("that's all", { utteranceId: "p4" });
  const confirm = intake.handleUtterance("Could you say that again?", { utteranceId: "p5" });
  assert.equal(confirm.action, "confirm");
});

test("a short real answer that merely contains a command word is still an answer", () => {
  for (const answer of ["Wait staff at a restaurant", "Repeat customers manager", "I worked at a bus stop", "Stop and shop cashier", "Pause menu designer"]) {
    const intake = atSkills();
    const decision = intake.handleUtterance(answer, { utteranceId: `real-${answer}` });
    assert.equal(decision.snapshot.values.skills, answer, `"${answer}" must be recorded as the answer`);
  }
});

test("'Chatroom, stop for a minute' (a misheard 'Kyro') pauses and keeps every answer", () => {
  const intake = atSkills();
  const decision = intake.handleUtterance("Chatroom, stop for a minute.", { utteranceId: "hold-1" });
  assert.equal(decision.action, "paused");
  assert.equal(decision.consumed, true, "a hold is answered by Kyro itself, not routed on as a new command");
  assert.match(decision.say, /continue/i);
  assert.match(decision.say, /cancel/i);
  assert.equal(intake.phase, "paused");
  assert.equal(decision.snapshot.values.name, "Amina");
  assert.equal(decision.snapshot.values.town, "Kisumu");
  const resumed = intake.resume();
  assert.match(resumed.say, /What are you good at\?/);
});

test("hold-on phrasings pause; a bare 'stop' pauses too instead of throwing the answers away", () => {
  for (const phrase of ["Hold on", "Wait", "Wait a minute", "Give me a minute", "One moment", "Hang on a second", "Stop", "Stop for a moment", "Please wait", "Okay, hold on"]) {
    const intake = atSkills();
    const decision = intake.handleUtterance(phrase, { utteranceId: `pause-${phrase}` });
    assert.equal(decision.action, "paused", `"${phrase}" should pause`);
    assert.equal(decision.snapshot.values.name, "Amina", `"${phrase}" must keep earlier answers`);
  }
});

test("'cancel' and 'never mind' still cancel for good", () => {
  for (const phrase of ["Cancel", "Never mind", "Forget it", "Kyro, cancel", "I want to quit"]) {
    const intake = atSkills();
    assert.equal(intake.handleUtterance(phrase, { utteranceId: `c-${phrase}` }).action, "cancelled", phrase);
  }
});

test("a wake-word NEW REQUEST is still a switch, even when it starts with a question word or the wake word is misheard", () => {
  assert.equal(KyroVoiceIntake.classifyControl("Kyro, what's the weather in Nairobi?"), "switch");
  assert.equal(KyroVoiceIntake.classifyControl("Chatroom, open the map"), "switch");
  assert.equal(KyroVoiceIntake.classifyControl("Cairo, show me my reminders"), "switch");
});

test("natural ways of saying 'that's all' end a repeatable field's collection", () => {
  const form = () => sampleForm({ fields: [
    { key: "name", label: "Name", question: "What is your name?", required: true, kind: "name" },
    { key: "work", label: "Work", question: "Tell me about your work.", required: false, kind: "sentences", repeatable: { moreQuestion: "Any other work?", max: 5 } },
    { key: "town", label: "Town", question: "Which town?", required: false, kind: "text" }
  ] });
  for (const done of ["That's it", "No, that's all", "I'm done", "Nothing else, thank you", "No more", "That's everything", "Nope", "That will do"]) {
    const intake = KyroVoiceIntake.create(form(), { now });
    intake.start();
    intake.handleUtterance("Amina", { utteranceId: "d1" });
    intake.handleUtterance("I grew maize", { utteranceId: "d2" });
    const decision = intake.handleUtterance(done, { utteranceId: "d3" });
    assert.match(decision.say, /Which town\?/, `"${done}" should end the work list and move on`);
    assert.deepEqual(Array.from(decision.snapshot.values.work), ["I grew maize"], `"${done}" must not be saved as work`);
  }
});

test("the answers list is labeled and includes entries still being collected for a repeatable field", () => {
  const intake = KyroVoiceIntake.create(sampleForm({ fields: [
    { key: "name", label: "Name", question: "What is your name?", required: true, kind: "name" },
    { key: "work", label: "Work experience", question: "Tell me about your work.", required: false, kind: "sentences", repeatable: { moreQuestion: "Any other work?", max: 5 } }
  ] }), { now });
  intake.start();
  intake.handleUtterance("Amina", { utteranceId: "a1" });
  const decision = intake.handleUtterance("I grew maize", { utteranceId: "a2" });
  const answers = decision.snapshot.answers;
  assert.equal(answers[0].label, "Name");
  assert.equal(answers[0].value, "Amina");
  assert.equal(answers[1].label, "Work experience");
  assert.deepEqual(Array.from(answers[1].value), ["I grew maize"]);
});

test("a paused intake never records anything as an answer", () => {
  const intake = atSkills();
  intake.pause("hold");
  const decision = intake.handleUtterance("farming and carpentry", { utteranceId: "ign-1" });
  assert.equal(decision.consumed, false);
  assert.equal(decision.action, "ignored");
  assert.equal(decision.snapshot.values.skills, undefined);
});

test("the résumé form's continue check accepts natural phrasing, but only fires for a continue request", () => {
  for (const phrase of ["continue", "Continue my resume", "I'm ready", "Okay, let's continue", "Kyro, go ahead", "Chatroom, I'm ready", "keep going"]) {
    assert.equal(KyroIntakeForms.isResumeContinueRequest(phrase), true, phrase);
  }
  for (const phrase of ["I continued my studies", "What is a resume", "I am ready to work on farms", "Continue reading the weather"]) {
    assert.equal(KyroIntakeForms.isResumeContinueRequest(phrase), false, phrase);
  }
});
