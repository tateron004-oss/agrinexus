"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const Forms = require("../../public/kyro-intake-forms.js");
const Intake = require("../../public/kyro-voice-intake.js");

// "I need telehealth" used to open a long form. Now Kyro asks a few short questions, reads them back, and after a yes saves them as an intake case for a provider to review. It stops itself, and says what to do, if an
// answer describes an emergency. It does not diagnose, book a visit or call anyone. THE EMERGENCY WORDING AND THE DANGER-SIGN LIST NEED A CLINICIAN'S REVIEW; these tests pin their limits.

const root = path.join(__dirname, "../..");
const app = fs.readFileSync(path.join(root, "public/app.js"), "utf8");

test("what counts as a request for telehealth, and what does not", () => {
  for (const text of ["I need telehealth", "start a video visit", "I want to talk to a doctor online", "open telehealth", "telehealth intake", "I need a virtual appointment", "Hey Kyro can I see a doctor by video", "ninahitaji daktari mtandaoni"]) assert.equal(Forms.isTelehealthRequest(text), true, text);
  for (const text of ["what is telehealth", "how much does telehealth cost", "find a clinic near me", "I need to see a doctor", "show me videos about health", "tell me about video games", ""]) assert.equal(Forms.isTelehealthRequest(text), false, text);
});

test("the interview asks the reason first, then when it started, other symptoms and a phone number, reads them back, and sends only after a yes", () => {
  const engine = Intake.create(Forms.telehealth, { seedUtterance: { id: "", text: "I need telehealth" }, language: "en" });
  const start = engine.start();
  assert.match(start.say, /^I will ask a few short questions for a provider\. If this is an emergency, call your local emergency number now\./);
  assert.match(start.say, /What is the visit for\? Tell me in your own words\.$/);
  assert.equal(engine.handleUtterance("a cough and a fever", { utteranceId: "1", source: "voice" }).say.includes("When did it start?"), true);
  assert.equal(engine.handleUtterance("two days ago", { utteranceId: "2", source: "voice" }).say.includes("Any other symptoms?"), true);
  assert.equal(engine.handleUtterance("skip", { utteranceId: "3", source: "voice" }).say.includes("What phone number can the provider call?"), true);
  const confirm = engine.handleUtterance("skip", { utteranceId: "4", source: "voice" });
  assert.equal(confirm.action, "confirm");
  assert.match(confirm.say, /^Here is what I have\. Visit for: a cough and a fever\. Started: two days ago\. A provider will review it\. This is not a diagnosis, and no visit is booked yet\. Shall I send it for review\? Say yes, or tell me which part to change\./);
  const done = engine.handleUtterance("yes", { utteranceId: "5", source: "voice" });
  assert.equal(done.action, "submit");
  assert.equal(Forms.telehealth.toSummary(done.values), "Reason: a cough and a fever. Started: two days ago.");
});

test("an answer that describes an emergency stops the interview, says what to do, and records nothing", () => {
  for (const text of ["I cannot breathe", "my chest pain started today", "he fainted and will not wake", "bleeding that won't stop", "I think it is a snake bite", "siwezi kupumua"]) {
    const engine = Intake.create(Forms.telehealth, { language: "en" });
    engine.start();
    const stop = engine.handleUtterance(text, { utteranceId: "e1", source: "voice" });
    assert.equal(stop.action, "cancelled", text); assert.equal(stop.emergency, true, text);
    assert.match(stop.say, /^That sounds like it could be an emergency\. Please call your local emergency number or go to the nearest clinic now\. I have stopped the questions and nothing was saved\.$/, text);
    assert.deepEqual({ ...stop.values }, {}, `${text}: nothing recorded`);
  }
  // an ordinary answer is not mistaken for one, in any phase of the interview
  const calm = Intake.create(Forms.telehealth, { language: "en" }); calm.start();
  for (const [i, text] of ["a cough and a headache", "since Monday", "a sore throat", "0712345678"].entries()) assert.notEqual(calm.handleUtterance(text, { utteranceId: `c${i}`, source: "voice" }).action, "cancelled", text);
  assert.equal(Forms.telehealth.interrupt("I have a cough and a fever", { lang: "en" }), null);
  assert.match(Forms.telehealth.interrupt("siwezi kupumua", { lang: "sw" }).say, /^Hiyo inaweza kuwa dharura\./);
});

test("it is wired: spoken and typed requests start it, the guards leave the sentence to it, the emergency line is not followed by 'nothing was saved' twice, and it submits through the health tool", () => {
  assert.match(app, /if \(window\.KyroIntakeForms\?\.isTelehealthRequest\?\.\(trimmed\)\) \{\s*startKyroTelehealthIntake\(\{ seedUtterance: \{ id: utteranceId, text: trimmed \}, source \}\);\s*return true;/);
  assert.match(app, /if \(!kyroActiveVoiceIntake && window\.KyroIntakeForms\?\.isTelehealthRequest\?\.\(text\)\) \{\s*startKyroTelehealthIntake\(/);
  assert.match(app, /isSaleRequest\?\.\(command\) \|\| window\.KyroIntakeForms\?\.isTelehealthRequest\?\.\(command\)/);
  assert.match(app, /response: kyroIntakeBusyLine\(command\),/);
  assert.match(app, /isTelehealthRequest\?\.\(command\); \/\/ the short interview, not the form/);
  assert.match(app, /if \(!decision\.emergency\) speakKyroIntakeLine\(kyroIntakeText\("cancelled", decision\.language\)/);
  const submit = app.slice(app.indexOf("async function submitKyroTelehealthIntake"), app.indexOf("function kyroIntakeBusyLine"));
  assert.match(submit, /name: "nexus_health_preparation"/); assert.match(submit, /arguments: \{ command: "Start my telehealth intake", summary,/);
  assert.match(submit, /if \(result\?\.status === "emergency-guidance"\) return \{ ok: true, say: said,/, "an emergency answered by the server ends the interview");
  assert.match(submit, /This is not a diagnosis, and no visit is booked yet\./);
});
