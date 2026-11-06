"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const KyroVoiceIntake = require("../../public/kyro-voice-intake.js");
const KyroIntakeForms = require("../../public/kyro-intake-forms.js");
const { doctorVisitDocument, KEYS } = require("../../nexus/knowledge/doctor-visit.js");
const { structuredIntakePlan } = require("../../nexus/intake/structured-intakes.js");

// "Set up doctors appts" (owner, 5 November 2026). Kyro cannot book into a clinic's system, so it gets the person READY: nine short questions, read back, and after a yes a Word sheet of their own words with what to say when they call, what to ask the
// clinic, what to bring and a place to write the booking. It books nothing, calls no one, gives no medical advice, and takes no ID number or password. An emergency answer stops it.
const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");

test("an order to get an appointment starts the interview; a question, a reminder, a cancel, telehealth, an animal or an emergency does not", () => {
  const yes = ["Help me set up a doctor's appointment", "I need to make a doctor appointment", "Book a dentist appointment for me", "Schedule an appointment with my doctor", "Book an appointment with my doctor", "I need to see a doctor",
    "Can you help me get a check-up", "Hey Kyro, set up a clinic visit for my daughter", "I want to make an appointment with the eye doctor", "Please arrange a dentist visit", "Help me book a checkup with my nurse"];
  for (const text of yes) assert.equal(KyroIntakeForms.isDoctorVisitRequest(text), true, text);
  const no = ["How do I find a doctor?", "What is a check-up?", "Remind me about my doctor appointment tomorrow", "Cancel my doctor appointment", "Reschedule my dentist appointment", "I need telehealth", "Book a video visit with a doctor",
    "Book an appointment for my cow with the vet", "My goat needs the vet, make an appointment", "I have chest pain and need a doctor appointment", "What does a doctor appointment cost", "Book an appointment with Grace on Friday", "Create an invoice for the clinic",
    "Make me a money plan", "Add an appointment called site visit tomorrow", "Open my documents"];
  for (const text of no) assert.equal(KyroIntakeForms.isDoctorVisitRequest(text), false, text);
  for (const text of yes) for (const other of ["isMoneyPlanRequest", "isProgramKitRequest", "isBusinessPlanRequest", "isResumeBuildRequest", "isSponsorshipProposalRequest", "isTeamPacketRequest", "isTelehealthRequest", "isSaleRequest"]) assert.equal(KyroIntakeForms[other](text), false, `${other}: ${text}`);
});

test("the interview has nine questions, needs only the reason, stops for an emergency, refuses ID numbers, and returns exactly what was said", () => {
  const form = KyroIntakeForms.doctorVisit;
  assert.equal(form.id, "doctor-visit"); assert.equal(form.fields.length, 9);
  assert.deepEqual(form.fields.filter(field => field.required).map(field => field.key), ["reason"]);
  assert.deepEqual(form.fields.map(field => field.key), KEYS);
  assert.match(form.intro, /I cannot book it for you, and I do not give medical advice\. If this is an emergency, call your local emergency number now\. Please do not tell me ID numbers or passwords\./);
  const answers = ["A check-up and my blood pressure medicine", "My daughter Amina", "Kibera Health Clinic", "Tuesday or Thursday mornings", "Since last year", "Amlodipine, once a day", "A health program, and I can pay a little", "An interpreter and a ride", "Is my medicine still right for me"];
  const intake = KyroVoiceIntake.create(form, { now: () => 1000 }); intake.start();
  let decision; answers.forEach((text, index) => { decision = intake.handleUtterance(text, { utteranceId: `u${index}` }); });
  assert.equal(decision.action, "confirm");
  assert.match(decision.say, /Shall I save it as a sheet you can edit and take with you when you call\? Say yes, or tell me which part to change\./);
  const done = intake.handleUtterance("yes", { utteranceId: "yes" });
  assert.equal(done.action, "submit");
  const request = form.toRequest(done.values);
  assert.deepEqual(Object.keys(request), KEYS);
  KEYS.forEach((key, index) => assert.equal(request[key], answers[index], key));
  // an emergency answer stops it and saves nothing
  const danger = KyroVoiceIntake.create(form, { now: () => 1000 }); danger.start();
  const stopped = danger.handleUtterance("I have chest pain and cannot breathe", { utteranceId: "d1" });
  assert.match(stopped.say, /That sounds like it could be an emergency\. Please call your local emergency number or go to the nearest clinic now\. I have stopped the questions and nothing was saved\./);
  assert.notEqual(stopped.action, "submit");
  // an ID number or password is refused and asked again
  const secret = KyroVoiceIntake.create(form, { now: () => 1000 }); secret.start();
  secret.handleUtterance("A check-up", { utteranceId: "s0" }); secret.handleUtterance("Me", { utteranceId: "s1" }); secret.handleUtterance("Skip", { utteranceId: "s2" }); secret.handleUtterance("Skip", { utteranceId: "s3" }); secret.handleUtterance("Skip", { utteranceId: "s4" });
  secret.handleUtterance("Skip", { utteranceId: "s5" });
  const refused = secret.handleUtterance("My insurance number is 123456789012", { utteranceId: "s6" });
  assert.match(refused.say, /without any ID numbers, passwords or a Social Security number/);
});

test("the sheet is built from the answers only, word for word, with what to say, what to ask, what to bring, and no advice", () => {
  const values = { reason: "A check-up and my blood pressure medicine", who: "My daughter Amina", clinic: "Kibera Health Clinic", when: "Tuesday or Thursday mornings", started: "Since last year", medicines: "Amlodipine, once a day", pay: "A health program", access: "An interpreter and a ride", questions: "Is my medicine still right for me" };
  const made = doctorVisitDocument(values);
  assert.equal(made.title, "Doctor visit: A check-up and my blood pressure medicine");
  for (const said of Object.values(values)) assert.ok(made.content.includes(said), said);
  assert.match(made.content, /^GETTING READY FOR AN APPOINTMENT\n/);
  assert.match(made.content, /Kyro has not booked anything and has not called anyone\./);
  assert.match(made.content, /WHAT TO SAY WHEN YOU CALL\n"Hello, I would like to make an appointment for My daughter Amina\. It is for: A check-up and my blood pressure medicine\. The days and times that work are: Tuesday or Thursday mornings\. About paying: A health program\. What I need: An interpreter and a ride\. What is the earliest appointment you have\?"/);
  for (const heading of ["QUESTIONS TO ASK THE CLINIC", "WHAT TO BRING", "WRITE IT DOWN WHEN YOU HAVE BOOKED", "IF YOU DO NOT HAVE A CLINIC YET", "IF YOU GET WORSE BEFORE THE APPOINTMENT"]) assert.ok(made.content.includes(`\n${heading}\n`), heading);
  assert.match(made.content, /findahealthcenter\.hrsa\.gov/); assert.match(made.content, /dial 211/);
  assert.match(made.content, /call your local emergency number or go to the nearest clinic now\. Do not wait for this appointment\./);
  const bare = doctorVisitDocument({ reason: "A check-up" });
  assert.match(bare.content, /2\. Who it is for\nNot decided yet/); assert.match(bare.content, /I would like to make an appointment for myself\. It is for: A check-up\. What is the earliest appointment you have\?"/);
  assert.doesNotMatch(bare.content, /\b(?:you should take|diagnos(?:is|e) (?:is|of)|probably|likely caused|take \d)/i);
  assert.equal(doctorVisitDocument({ who: "me" }), null, "no reason: nothing to build");
  assert.equal(doctorVisitDocument({}), null);
});

test("the server turns the answers into a documents step, refuses an empty one and an unknown key, and keeps only the listed answers", () => {
  const plan = structuredIntakePlan("doctor-visit", { reason: "A check-up", who: "Me", secret: "ignore this", clinic: "" });
  assert.equal(plan.application, "documents"); assert.equal(plan.riskTier, "low");
  assert.equal(plan.steps[0].toolId, "documents.create"); assert.equal(plan.steps[0].input.format, "docx");
  assert.equal(plan.steps[0].input.title, "Doctor visit: A check-up");
  assert.doesNotMatch(plan.steps[0].input.content, /ignore this/);
  assert.throws(() => structuredIntakePlan("doctor-visit", { who: "Me" }), error => error.code === "doctor_visit_incomplete" && error.status === 422);
});

test("the page starts it by voice and by typing, says it is already asking, and saves with the right words", () => {
  assert.match(app, /window\.KyroIntakeForms\?\.isDoctorVisitRequest\?\.\(trimmed\)\) \{\s+startKyroAthleteDocIntake\("doctorVisit", \{ seedUtterance: \{ id: utteranceId, text: trimmed \}, source \}\);\s+return true;/);
  assert.match(app, /isDoctorVisitRequest\?\.\(text\)\) \{\s+startKyroAthleteDocIntake\("doctorVisit", \{ seedUtterance: \{ id: "", text \}, source: options\.source \|\| "typed" \}\);/);
  assert.match(app, /window\.KyroIntakeForms\?\.isDoctorVisitRequest\?\.\(command\) \|\| window\.KyroIntakeForms\?\.isResumeBuildRequest/);
  assert.match(app, /id === "doctor-visit" \|\| \(!kyroActiveVoiceIntake && window\.KyroIntakeForms\?\.isDoctorVisitRequest\?\.\(command\)\)\) return "Kyro is already asking the person the questions to get ready for a doctor, dentist or clinic appointment, one at a time\./);
  assert.match(app, /doctorVisit: Object\.freeze\(\{\s+intakeId: "doctor-visit", label: "Appointment sheet interview", incompleteCode: "doctor_visit_incomplete"/);
  assert.match(app, /I have not booked anything or called anyone, and this is not medical advice\./);
});
