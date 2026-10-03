"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const KyroVoiceIntake = require("../../public/kyro-voice-intake.js");

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

let clockNow = 1000000;
function now() { return clockNow; }
function tick(ms) { clockNow += ms; }

test("start asks the intro plus the first question", () => {
  const intake = KyroVoiceIntake.create(sampleForm(), { now });
  const decision = intake.start();
  assert.equal(decision.action, "ask");
  assert.match(decision.say, /I will ask a few short questions\. What is your name\?/);
  assert.equal(decision.snapshot.currentField.key, "name");
});

test("a valid answer advances to the next question", () => {
  const intake = KyroVoiceIntake.create(sampleForm(), { now });
  intake.start();
  const decision = intake.handleUtterance("My name is Amina", { utteranceId: "u1" });
  assert.equal(decision.action, "ask");
  assert.match(decision.say, /Which town do you live in\?/);
  assert.equal(decision.values.name, "Amina");
});

test("a required field rejects a skip and re-asks instead", () => {
  const intake = KyroVoiceIntake.create(sampleForm(), { now });
  intake.start();
  const decision = intake.handleUtterance("skip", { utteranceId: "u1" });
  assert.equal(decision.action, "reask");
  assert.match(decision.say, /What is your name\?/);
});

test("an optional field can be skipped", () => {
  const intake = KyroVoiceIntake.create(sampleForm(), { now });
  intake.start();
  intake.handleUtterance("Amina", { utteranceId: "u1" });
  const decision = intake.handleUtterance("skip", { utteranceId: "u2" });
  assert.equal(decision.action, "ask");
  assert.match(decision.say, /What are you good at\?/);
  assert.ok(!("town" in decision.values));
});

test("back re-asks the previous field", () => {
  const intake = KyroVoiceIntake.create(sampleForm(), { now });
  intake.start();
  intake.handleUtterance("Amina", { utteranceId: "u1" });
  intake.handleUtterance("Kisumu", { utteranceId: "u2" });
  const decision = intake.handleUtterance("go back", { utteranceId: "u3" });
  assert.equal(decision.action, "ask");
  assert.match(decision.say, /Which town do you live in\?/);
});

test("repeat re-asks the current question without advancing", () => {
  const intake = KyroVoiceIntake.create(sampleForm(), { now });
  intake.start();
  const decision = intake.handleUtterance("say that again", { utteranceId: "u1" });
  assert.equal(decision.action, "ask");
  assert.match(decision.say, /What is your name\?/);
  assert.equal(decision.snapshot.index, 0);
});

test("cancel ends the intake instead of being recorded as an answer, but a real sentence is not mistaken for cancel", () => {
  const intakeA = KyroVoiceIntake.create(sampleForm(), { now });
  intakeA.start();
  const cancelled = intakeA.handleUtterance("never mind", { utteranceId: "u1" });
  assert.equal(cancelled.action, "cancelled");
  assert.equal(intakeA.phase, "cancelled");

  const intakeB = KyroVoiceIntake.create(sampleForm(), { now });
  intakeB.start();
  const answered = intakeB.handleUtterance("I was a bus stop attendant for two years", { utteranceId: "u1" });
  assert.equal(answered.action, "ask");
  assert.equal(answered.values.name, "I was a bus stop attendant for two years");
});

test("a duplicate utterance id is ignored, not recorded as a second answer", () => {
  const intake = KyroVoiceIntake.create(sampleForm(), { now });
  intake.start();
  intake.handleUtterance("Amina", { utteranceId: "u1" });
  const decision = intake.handleUtterance("Amina", { utteranceId: "u1" });
  assert.equal(decision.action, "duplicate");
  assert.equal(decision.snapshot.index, 1, "index must not have advanced twice");
});

test("a duplicate with no utterance id is caught by matching text within a few seconds", () => {
  const intake = KyroVoiceIntake.create(sampleForm(), { now });
  intake.start();
  intake.handleUtterance("Amina", {});
  tick(1000);
  const decision = intake.handleUtterance("Amina", {});
  assert.equal(decision.action, "duplicate");
  tick(10000);
  const laterDecision = intake.handleUtterance("Amina", {});
  assert.notEqual(laterDecision.action, "duplicate", "the same text long after should not be treated as a duplicate forever");
});

test("the utterance that started the intake is seeded so it is never recorded as the first answer", () => {
  const intake = KyroVoiceIntake.create(sampleForm(), { now, seedUtterance: { id: "start-1", text: "Can you make a resume for me?" } });
  intake.start();
  const decision = intake.handleUtterance("Can you make a resume for me?", { utteranceId: "start-1" });
  assert.equal(decision.action, "duplicate");
});

test("a repeatable field collects several answers until the user says that's all, then advances", () => {
  const form = sampleForm({
    fields: [
      { key: "name", label: "Name", question: "What is your name?", required: true, kind: "name" },
      { key: "experience", label: "Experience", question: "Tell me about work you have done.", required: false, kind: "sentences", repeatable: { moreQuestion: "Any other work? Or say that's all.", max: 5 } },
      { key: "town", label: "Town", question: "Which town?", required: false, kind: "text" }
    ]
  });
  const intake = KyroVoiceIntake.create(form, { now });
  intake.start();
  intake.handleUtterance("Amina", { utteranceId: "u1" });
  let decision = intake.handleUtterance("I grew maize for five years", { utteranceId: "u2" });
  assert.match(decision.say, /Any other work/);
  decision = intake.handleUtterance("I also worked at a dairy", { utteranceId: "u3" });
  assert.match(decision.say, /Any other work/);
  decision = intake.handleUtterance("that's all", { utteranceId: "u4" });
  assert.match(decision.say, /Which town\?/);
  assert.deepEqual(decision.values.experience, ["I grew maize for five years", "I also worked at a dairy"]);
});

test("a repeatable field stops at its max without needing 'that's all'", () => {
  const form = sampleForm({
    fields: [
      { key: "experience", label: "Experience", question: "Tell me about work.", required: false, kind: "sentences", repeatable: { moreQuestion: "Any other work?", max: 2 } },
      { key: "town", label: "Town", question: "Which town?", required: false, kind: "text" }
    ]
  });
  const intake = KyroVoiceIntake.create(form, { now });
  intake.start();
  intake.handleUtterance("Farmed maize", { utteranceId: "u1" });
  const decision = intake.handleUtterance("Worked at a dairy", { utteranceId: "u2" });
  assert.match(decision.say, /Which town\?/, "should advance automatically once max is reached");
});

test("a form-level validate rule jumps back to the named field with its message", () => {
  const form = sampleForm({
    fields: [
      { key: "name", label: "Name", question: "What is your name?", required: true, kind: "name" },
      { key: "skills", label: "Skills", question: "What are your skills?", required: false, kind: "list" }
    ],
    validate: values => (values.skills ? null : { fieldKey: "skills", message: "I need at least one skill." })
  });
  const intake = KyroVoiceIntake.create(form, { now });
  intake.start();
  intake.handleUtterance("Amina", { utteranceId: "u1" });
  const decision = intake.handleUtterance("skip", { utteranceId: "u2" });
  assert.equal(decision.action, "reask");
  assert.match(decision.say, /I need at least one skill\./);
});

test("confirm phase: saying yes submits", () => {
  const form = sampleForm({
    fields: [{ key: "name", label: "Name", question: "What is your name?", required: true, kind: "name" }]
  });
  const intake = KyroVoiceIntake.create(form, { now });
  intake.start();
  const confirmDecision = intake.handleUtterance("Amina", { utteranceId: "u1" });
  assert.equal(confirmDecision.action, "confirm");
  const submitDecision = intake.handleUtterance("yes", { utteranceId: "u2" });
  assert.equal(submitDecision.action, "submit");
  assert.equal(submitDecision.values.name, "Amina");
});

test("confirm phase: 'change my skills' jumps back to that field, then returns to confirm", () => {
  const intake = KyroVoiceIntake.create(sampleForm(), { now });
  intake.start();
  intake.handleUtterance("Amina", { utteranceId: "u1" });
  intake.handleUtterance("Kisumu", { utteranceId: "u2" });
  intake.handleUtterance("farming", { utteranceId: "u3" });
  const jump = intake.handleUtterance("change my skills", { utteranceId: "u4" });
  assert.equal(jump.action, "ask");
  assert.match(jump.say, /What are you good at\?/);
  const back = intake.handleUtterance("driving and cooking", { utteranceId: "u5" });
  assert.equal(back.action, "confirm");
  assert.equal(back.values.skills, "driving and cooking");
});

test("submitFailed with a fieldKey reopens that field for correction", () => {
  const form = sampleForm({
    fields: [{ key: "name", label: "Name", question: "What is your name?", required: true, kind: "name" }]
  });
  const intake = KyroVoiceIntake.create(form, { now });
  intake.start();
  intake.handleUtterance("Amina", { utteranceId: "u1" });
  const failed = intake.submitFailed({ fieldKey: "name", message: "That name didn't save. Try again." });
  assert.equal(failed.action, "reask");
  assert.match(failed.say, /didn't save/);
});

test("the engine ignores new utterances while submitting, instead of double-submitting", () => {
  const intake = KyroVoiceIntake.create(sampleForm(), { now });
  intake.start();
  intake.handleUtterance("Amina", { utteranceId: "u1" });
  intake.handleUtterance("Kisumu", { utteranceId: "u2" });
  intake.handleUtterance("farming", { utteranceId: "u3" });
  intake.handleUtterance("yes", { utteranceId: "u4" });
  const duringSubmit = intake.handleUtterance("hello?", { utteranceId: "u5" });
  assert.equal(duringSubmit.action, "busy");
});

test("an intake that has been idle past its timeout reports itself expired", () => {
  const intake = KyroVoiceIntake.create(sampleForm(), { now, idleTimeoutMs: 1000 });
  intake.start();
  assert.equal(intake.isExpired(now()), false);
  assert.equal(intake.isExpired(now() + 5000), true);
});

test("pause and resume keep the current field, and resuming re-asks it", () => {
  const intake = KyroVoiceIntake.create(sampleForm(), { now });
  intake.start();
  intake.handleUtterance("Amina", { utteranceId: "u1" });
  intake.pause("switch");
  assert.equal(intake.phase, "paused");
  const resumed = intake.resume();
  assert.equal(resumed.action, "ask");
  assert.match(resumed.say, /Which town do you live in\?/);
});

test("a wake-word-prefixed new request pauses the intake without being recorded as an answer", () => {
  const intake = KyroVoiceIntake.create(sampleForm(), { now });
  intake.start();
  const decision = intake.handleUtterance("Kyro, open the map", { utteranceId: "u1" });
  assert.equal(decision.action, "paused");
  assert.equal(decision.consumed, false, "the caller must still route this utterance to normal command handling");
  assert.equal(intake.phase, "paused");
});

test("normalizers: name strips a lead-in phrase", () => {
  const result = KyroVoiceIntake.normalizers.name("my name is John Kamau.");
  assert.equal(result.ok, true);
  assert.equal(result.value, "John Kamau");
});

test("normalizers: phone understands spoken digit words including double/triple", () => {
  const result = KyroVoiceIntake.normalizers.phone("zero seven one double two three four five six");
  assert.equal(result.ok, true);
  assert.equal(result.value, "071223456");
});

test("normalizers: email understands 'at' and 'dot' spoken aloud", () => {
  const result = KyroVoiceIntake.normalizers.email("john at gmail dot com");
  assert.equal(result.ok, true);
  assert.equal(result.value, "john@gmail.com");
});

test("normalizers: an invalid email is rejected, not silently accepted", () => {
  const result = KyroVoiceIntake.normalizers.email("not an email");
  assert.equal(result.ok, false);
});

test("cancel during confirmation actually cancels, instead of just re-reading the summary", () => {
  const form = sampleForm({
    fields: [{ key: "name", label: "Name", question: "What is your name?", required: true, kind: "name" }]
  });
  const intake = KyroVoiceIntake.create(form, { now });
  intake.start();
  intake.handleUtterance("Amina", { utteranceId: "u1" });
  const decision = intake.handleUtterance("never mind", { utteranceId: "u2" });
  assert.equal(decision.action, "cancelled");
  assert.equal(intake.phase, "cancelled");
});

test("back during confirmation actually re-opens the last field, instead of being swallowed", () => {
  const form = sampleForm({
    fields: [{ key: "name", label: "Name", question: "What is your name?", required: true, kind: "name" }]
  });
  const intake = KyroVoiceIntake.create(form, { now });
  intake.start();
  intake.handleUtterance("Amina", { utteranceId: "u1" });
  const decision = intake.handleUtterance("previous", { utteranceId: "u2" });
  assert.equal(decision.action, "ask");
  assert.match(decision.say, /What is your name\?/);
  assert.equal(intake.phase, "asking");
});

test("a wake-word new request during confirmation pauses instead of being swallowed as an unrecognized confirm reply", () => {
  const form = sampleForm({
    fields: [{ key: "name", label: "Name", question: "What is your name?", required: true, kind: "name" }]
  });
  const intake = KyroVoiceIntake.create(form, { now });
  intake.start();
  intake.handleUtterance("Amina", { utteranceId: "u1" });
  const decision = intake.handleUtterance("Kyro, open the map", { utteranceId: "u2" });
  assert.equal(decision.action, "paused");
  assert.equal(decision.consumed, false, "the caller must still route this utterance to normal command handling");
  assert.equal(intake.phase, "paused");
});

test("cancel while collecting a repeatable field's extra answers actually cancels, instead of being stored as a literal answer", () => {
  const form = sampleForm({
    fields: [
      { key: "name", label: "Name", question: "What is your name?", required: true, kind: "name" },
      { key: "experience", label: "Experience", question: "Tell me about work you have done.", required: false, kind: "sentences", repeatable: { moreQuestion: "Any other work? Or say that's all.", max: 5 } }
    ]
  });
  const intake = KyroVoiceIntake.create(form, { now });
  intake.start();
  intake.handleUtterance("Amina", { utteranceId: "u1" });
  intake.handleUtterance("I grew maize for five years", { utteranceId: "u2" });
  const decision = intake.handleUtterance("never mind", { utteranceId: "u3" });
  assert.equal(decision.action, "cancelled");
  assert.equal(intake.phase, "cancelled");
});

test("a wake-word new request while collecting a repeatable field's extra answers pauses instead of being stored as a literal answer", () => {
  const form = sampleForm({
    fields: [
      { key: "name", label: "Name", question: "What is your name?", required: true, kind: "name" },
      { key: "experience", label: "Experience", question: "Tell me about work you have done.", required: false, kind: "sentences", repeatable: { moreQuestion: "Any other work? Or say that's all.", max: 5 } }
    ]
  });
  const intake = KyroVoiceIntake.create(form, { now });
  intake.start();
  intake.handleUtterance("Amina", { utteranceId: "u1" });
  intake.handleUtterance("I grew maize for five years", { utteranceId: "u2" });
  const decision = intake.handleUtterance("Kyro, open the map", { utteranceId: "u3" });
  assert.equal(decision.action, "paused");
  assert.equal(decision.consumed, false, "the caller must still route this utterance to normal command handling");
  assert.equal(intake.phase, "paused");
  const resumed = intake.resume();
  assert.match(resumed.say, /Any other work/);
  assert.deepEqual(intake.snapshot().values.experience === undefined ? [] : intake.snapshot().values.experience, []);
});

test("repeat and back work normally while collecting a repeatable field's extra answers", () => {
  const form = sampleForm({
    fields: [
      { key: "name", label: "Name", question: "What is your name?", required: true, kind: "name" },
      { key: "experience", label: "Experience", question: "Tell me about work you have done.", required: false, kind: "sentences", repeatable: { moreQuestion: "Any other work? Or say that's all.", max: 5 } }
    ]
  });
  const intake = KyroVoiceIntake.create(form, { now });
  intake.start();
  intake.handleUtterance("Amina", { utteranceId: "u1" });
  intake.handleUtterance("I grew maize for five years", { utteranceId: "u2" });
  const repeated = intake.handleUtterance("say that again", { utteranceId: "u3" });
  assert.match(repeated.say, /Any other work/);
  intake.handleUtterance("I also worked at a dairy", { utteranceId: "u4" });
  const wentBack = intake.handleUtterance("go back", { utteranceId: "u5" });
  assert.match(wentBack.say, /removed that/);
  const decision = intake.handleUtterance("that's all", { utteranceId: "u6" });
  assert.deepEqual(decision.values.experience, ["I grew maize for five years"]);
});

test("normalizers: list and sentences never split the text themselves", () => {
  const list = KyroVoiceIntake.normalizers.list("crop planning, irrigation, and livestock management");
  assert.equal(list.ok, true);
  assert.equal(list.value, "crop planning, irrigation, and livestock management");
});
