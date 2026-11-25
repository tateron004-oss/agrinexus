"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const KyroVoiceIntake = require("../../public/kyro-voice-intake.js");
const KyroIntakeForms = require("../../public/kyro-intake-forms.js");

// Found by the owner's test report of 4 November 2026 (everyday-11 to everyday-14): "it keeps asking me to continue and won't stop asking resume questions", "it wouldn't stop asking questions when I said stop, I had to click
// the exit button for it to stop", "it wont stop asking questions when I ask it to skip". Cause: a bare "stop" PAUSES the intake (so answers are not thrown away), but a paused intake ignored everything except "continue" and the
// word "cancel", and "skip" on a question that needs an answer (the name) just asked the same question again, for ever. A person who is stuck must always be able to get out by voice.
const resume = () => KyroVoiceIntake.create(KyroIntakeForms.resume, { language: "en" });
const twoRequired = {
  id: "two", title: "Two required", intro: "", confirmBeforeSubmit: true, restartLine: "Say start the form to begin again.",
  fields: [{ key: "a", label: "A", question: "What is A?", required: true, kind: "text" }, { key: "b", label: "B", question: "What is B?", required: true, kind: "text" }, { key: "c", label: "C", question: "What is C?", required: false, kind: "text" }]
};

test("the first 'stop' still pauses and keeps the answers, and now says how to end it", () => {
  const intake = resume(); intake.start();
  intake.handleUtterance("Amina Wanjiru", { utteranceId: "n1" });
  const paused = intake.handleUtterance("Stop.", { utteranceId: "s1" });
  assert.equal(paused.action, "paused");
  assert.match(paused.say, /continue/i);
  assert.match(paused.say, /cancel/i);
  assert.match(paused.say, /stop again to end it/i);
  assert.equal(paused.snapshot.values.name, "Amina Wanjiru", "the answer already given is kept");
});

test("while paused after their own 'stop', a second way of saying they want out ends the intake and says how to start again", () => {
  for (const phrase of ["Stop.", "Stop it", "Skip", "No", "Nope", "Enough", "That's enough", "I'm done", "That's all", "Done", "Never mind", "Cancel", "Okay, stop", "Kyro, stop", "Exit", "Leave it", "Stop asking", "stop asking me"]) {
    const intake = resume(); intake.start();
    assert.equal(intake.handleUtterance("Hold on", { utteranceId: "h" }).action, "paused", phrase);
    const left = intake.leaveWhilePaused(phrase);
    assert.ok(left, `"${phrase}" while paused must end it`);
    assert.equal(left.action, "cancelled", phrase);
    assert.equal(left.say, "Say build my resume to start again.", phrase);
    assert.equal(intake.phase, "cancelled", phrase);
  }
});

test("while paused, 'continue', 'I'm ready' and thinking aloud do not end it, and a pause that handed the turn to another request is left alone except for 'cancel'", () => {
  const intake = resume(); intake.start();
  intake.handleUtterance("Hold on", { utteranceId: "h" });
  for (const phrase of ["Continue", "I'm ready", "Okay, go on", "hmm let me think", "What was the question"]) assert.equal(intake.leaveWhilePaused(phrase), null, phrase);
  assert.equal(intake.phase, "paused");
  const switched = resume(); switched.start();
  assert.equal(switched.handleUtterance("Kyro, open the map", { utteranceId: "w" }).action, "paused");
  for (const phrase of ["stop", "skip", "no", "enough"]) assert.equal(switched.leaveWhilePaused(phrase), null, `${phrase} after a switch is about the other request`);
  assert.equal(switched.leaveWhilePaused("cancel").action, "cancelled");
  const idle = resume(); idle.start();
  assert.equal(idle.leaveWhilePaused("stop"), null, "only a paused intake is asked");
});

test("'stop', carry on, 'stop' again: the second stop ends it instead of pausing for ever", () => {
  const intake = resume(); intake.start();
  assert.equal(intake.handleUtterance("Stop", { utteranceId: "s1" }).action, "paused");
  intake.resume();
  const second = intake.handleUtterance("Stop", { utteranceId: "s2" });
  assert.equal(second.action, "cancelled");
  assert.equal(second.say, "Say build my resume to start again.");
});

test("a real answer between two stops clears the count: the next stop is a pause again", () => {
  const intake = resume(); intake.start();
  assert.equal(intake.handleUtterance("Stop", { utteranceId: "s1" }).action, "paused");
  intake.resume();
  assert.equal(intake.handleUtterance("Amina Wanjiru", { utteranceId: "a1" }).action, "ask");
  assert.equal(intake.handleUtterance("Stop", { utteranceId: "s2" }).action, "paused");
});

test("'skip' on a question that needs an answer says why it cannot be skipped and how to leave, once; the second 'skip' in a row ends it", () => {
  const intake = resume(); intake.start();
  const first = intake.handleUtterance("Skip", { utteranceId: "k1" });
  assert.equal(first.action, "reask");
  assert.match(first.say, /cannot skip it/i);
  assert.match(first.say, /cancel/i);
  assert.match(first.say, /What is your full name/i, "the question is asked again with it");
  const second = intake.handleUtterance("Skip", { utteranceId: "k2" });
  assert.equal(second.action, "cancelled");
  assert.equal(second.say, "Say build my resume to start again.");
});

test("an answer or a repeat between two skips clears the count", () => {
  const intake = KyroVoiceIntake.create(twoRequired, { language: "en" }); intake.start();
  assert.match(intake.handleUtterance("Skip", { utteranceId: "k1" }).say, /cannot skip it/i);
  assert.equal(intake.handleUtterance("Alpha", { utteranceId: "a1" }).action, "ask");
  assert.match(intake.handleUtterance("Skip", { utteranceId: "k2" }).say, /cannot skip it/i, "a different question: a fresh first strike");
  intake.handleUtterance("what was that?", { utteranceId: "r1" });
  assert.match(intake.handleUtterance("Skip", { utteranceId: "k3" }).say, /cannot skip it/i, "a repeat in between cleared it");
  assert.equal(intake.handleUtterance("Skip", { utteranceId: "k4" }).action, "cancelled");
  assert.equal(intake.phase, "cancelled");
});

test("'skip' on an optional question is still a skip, and the form's own restart line is used", () => {
  const intake = KyroVoiceIntake.create(twoRequired, { language: "en" }); intake.start();
  intake.handleUtterance("Alpha", { utteranceId: "a" }); intake.handleUtterance("Beta", { utteranceId: "b" });
  assert.equal(intake.snapshot().currentField.key, "c");
  const skipped = intake.handleUtterance("Skip", { utteranceId: "c" });
  assert.notEqual(skipped.action, "cancelled");
  assert.doesNotMatch(skipped.say || "", /cannot skip/i);
  const other = KyroVoiceIntake.create(twoRequired, { language: "en" }); other.start();
  other.handleUtterance("Skip", { utteranceId: "x" });
  assert.equal(other.handleUtterance("Skip", { utteranceId: "y" }).say, "Say start the form to begin again.");
});

test("'you keep asking me the same thing' pauses with how to end it; 'I'm telling you to stop' after it ends it", () => {
  const intake = resume(); intake.start();
  const talk = intake.handleUtterance("You keep asking me the same thing", { utteranceId: "t1" });
  assert.equal(talk.action, "paused");
  assert.match(talk.say, /stop again to end it/i);
  const left = intake.leaveWhilePaused("I'm telling you to stop");
  assert.equal(left.action, "cancelled");
  const direct = resume(); direct.start();
  direct.handleUtterance("Hold on", { utteranceId: "h" }); direct.resume();
  assert.equal(direct.handleUtterance("You keep asking me the same thing", { utteranceId: "t2" }).action, "cancelled", "a second complaint in a row also ends it");
});

test("real answers that contain these words are still answers", () => {
  for (const phrase of ["I was a bus stop attendant for two years", "no experience", "I stopped school at fourteen", "I had no job but I farmed", "I can skip rope", "farming"]) {
    assert.equal(KyroVoiceIntake.isExitRequest(phrase), false, phrase);
  }
  const intake = resume(); intake.start();
  intake.handleUtterance("Amina Wanjiru", { utteranceId: "n" });
  assert.equal(intake.handleUtterance("I was a bus stop attendant for two years", { utteranceId: "w" }).action, "ask");
  assert.equal(intake.phase, "asking");
  assert.equal(KyroVoiceIntake.isExitRequest("stop"), true);
  assert.equal(KyroVoiceIntake.isExitRequest("Kyro, I'm done"), true);
  assert.equal(KyroVoiceIntake.isExitRequest("continue"), false);
});

test("Kiswahili: 'acha' pauses and says how to end it, 'acha' or 'ghairi' after it ends it, and 'ruka' on the name says why it cannot be skipped", () => {
  const intake = KyroVoiceIntake.create(KyroIntakeForms.resume, { language: "sw" }); intake.start();
  const paused = intake.handleUtterance("Acha", { utteranceId: "s1" });
  assert.equal(paused.action, "paused");
  assert.match(paused.say, /Sema acha tena kumaliza/);
  for (const phrase of ["Acha", "Acha tena", "Hapana", "Tosha", "Nimemaliza", "Ghairi", "Basi"]) {
    const i = KyroVoiceIntake.create(KyroIntakeForms.resume, { language: "sw" }); i.start(); i.handleUtterance("Acha", { utteranceId: "p" });
    const left = i.leaveWhilePaused(phrase);
    assert.ok(left, phrase);
    assert.equal(left.action, "cancelled", phrase);
    assert.equal(left.say, "Sema tengeneza CV yangu kuanza tena.", phrase);
  }
  const skip = KyroVoiceIntake.create(KyroIntakeForms.resume, { language: "sw" }); skip.start();
  const first = skip.handleUtterance("Ruka", { utteranceId: "r1" });
  assert.match(first.say, /siwezi kulirukia/);
  assert.equal(skip.handleUtterance("Ruka", { utteranceId: "r2" }).action, "cancelled");
});

test("every form's pause line says how to end it, and the page asks the engine while paused and says how to start again", () => {
  for (const [id, form] of Object.entries(KyroIntakeForms)) {
    if (!form || typeof form !== "object" || !form.pausedLine) continue;
    assert.match(form.pausedLine, /Say stop again to end it\./, id);
    if (form.sw && form.sw.pausedLine && /Sema endelea/.test(form.sw.pausedLine)) assert.match(form.sw.pausedLine, /Sema acha tena kumaliza\./, `${id} (Kiswahili)`);
  }
  const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
  assert.match(app, /const leaving = kyroActiveVoiceIntake\.engine\.leaveWhilePaused\(trimmed\);\s+if \(leaving\) \{\s+try \{ realtimeVoiceSession\?\.sdkController\?\.interrupt\?\.\(\); \} catch \{\}\s+applyKyroIntakeDecision\(leaving\);\s+return true;\s+\}\s+return false;/);
  assert.match(app, /speakKyroIntakeLine\(\[kyroIntakeText\("cancelled", decision\.language\), decision\.say\]\.filter\(Boolean\)\.join\(" "\), \{ language: decision\.language \}\)/);
  assert.match(app, /if \(decision\.say && decision\.emergency\) speakKyroIntakeLine\(decision\.say/);
});
