"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const KyroVoiceIntake = require("../../public/kyro-voice-intake.js");
const KyroIntakeForms = require("../../public/kyro-intake-forms.js");

// Found live (second voice test of the resume intake, from a screenshot): the panel showed
//   Name: "Perfect, let's begin"            (chatter accepted as a name)
//   Town: "My full name is Ron."            (the real name answer, pushed one field down)
//   Work: "Kairo stop.; You're doing it again. I'm not asking a question, I'm telling you to stop.;
//          So can we start over?; Let's start the resume process over.; Well, let's start over."
// i.e. everything the person said to Kyro in frustration was saved as a work-experience answer and
// Kyro stayed silent, which reads as "stuck". These tests use those exact phrases.

const now = () => 1000000;
const make = () => { const i = KyroVoiceIntake.create(KyroIntakeForms.resume, { now }); i.start(); return i; };
const say = (intake, text, n) => intake.handleUtterance(text, { utteranceId: `u-${n}-${text}` });

test("'Perfect, let's begin' is not accepted as a name; the real name is", () => {
  const intake = make();
  const chatter = say(intake, "Perfect, let's begin", 1);
  assert.equal(chatter.snapshot.values.name, undefined);
  assert.equal(chatter.snapshot.index, 0, "still on the name question");
  const real = say(intake, "My full name is Ron.", 2);
  assert.equal(real.snapshot.values.name, "Ron");
  assert.equal(real.snapshot.index, 1);
});

test("ordinary names still work", () => {
  for (const [spoken, stored] of [["Amina Otieno", "Amina Otieno"], ["my name is Mary-Ann Wanjiku", "Mary-Ann Wanjiku"], ["I'm John Kamau Mwangi", "John Kamau Mwangi"], ["Ron", "Ron"]]) {
    const intake = make();
    assert.equal(say(intake, spoken, 1).snapshot.values.name, stored, spoken);
  }
});

test("'Kairo stop.' (a misheard Kyro) pauses instead of being saved", () => {
  const intake = make();
  say(intake, "Ron Tate", 1);
  const decision = say(intake, "Kairo stop.", 2);
  assert.equal(decision.action, "paused");
  assert.equal(decision.snapshot.values.name, "Ron Tate");
});

test("things said TO Kyro in frustration pause the intake and are never saved as answers", () => {
  for (const phrase of [
    "You're doing it again. I'm not asking a question, I'm telling you to stop.",
    "You're doing it again",
    "I'm telling you to stop",
    "Why are you doing that",
    "You keep asking me the same thing",
    "Just stop"
  ]) {
    const intake = make();
    say(intake, "Ron Tate", 1);
    const decision = say(intake, phrase, 2);
    assert.equal(decision.action, "paused", `"${phrase}"`);
    assert.equal(decision.consumed, true);
    assert.match(decision.say, /continue/i);
    assert.equal(decision.snapshot.values.location, undefined, `"${phrase}" must not be saved`);
  }
});

test("'let's start over' wipes the answers and asks the first question again", () => {
  for (const phrase of ["So can we start over?", "Let's start the resume process over.", "Well, let's start over.", "Start over", "Restart", "Can we begin again"]) {
    const intake = make();
    say(intake, "Ron Tate", 1);
    say(intake, "Kisumu", 2);
    const decision = say(intake, phrase, 3);
    assert.equal(decision.action, "ask", `"${phrase}"`);
    assert.match(decision.say, /start over/i);
    assert.match(decision.say, /full name/i);
    assert.equal(decision.snapshot.index, 0);
    assert.deepEqual(decision.snapshot.answers, [], "all answers cleared");
  }
});

test("real answers that merely contain these words are still answers", () => {
  const form = () => {
    const intake = make();
    say(intake, "Ron Tate", 1);
    say(intake, "Kisumu", 2); // now on work experience
    return intake;
  };
  for (const answer of ["I worked at the bus stop", "I started farming again after the rains", "I help you find a good price at the market", "I drive trucks and I stop at weigh stations", "I like to start early"]) {
    const intake = form();
    const decision = say(intake, answer, 3);
    assert.equal(decision.snapshot.answers.find(a => a.key === "experience")?.value[0], answer, `"${answer}" must be saved`);
  }
});

test("after a talk-pause the person can say continue and the same question comes back", () => {
  const intake = make();
  say(intake, "Ron Tate", 1);
  say(intake, "You're doing it again", 2);
  const resumed = intake.resume();
  assert.match(resumed.say, /Which town/);
});

test("kairo/cairo/kiro/chatroom all count as the wake word", () => {
  for (const wake of ["Kairo", "Cairo", "Kiro", "Chatroom", "Kyro"]) {
    assert.equal(KyroVoiceIntake.classifyControl(`${wake}, open the map`), "switch", wake);
    assert.equal(KyroVoiceIntake.classifyControl(`${wake} stop.`), "pause", wake);
  }
});
