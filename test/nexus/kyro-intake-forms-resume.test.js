"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const KyroVoiceIntake = require("../../public/kyro-voice-intake.js");
const KyroIntakeForms = require("../../public/kyro-intake-forms.js");
const { buildResume } = require("../../nexus/resume/build.js");

test("isResumeBuildRequest recognizes real requests, phrased naturally", () => {
  for (const text of [
    "Can you make a resume for me?",
    "I need a CV",
    "help me write my résumé",
    "Kyro, can you make a resume for me?",
    "I want a resume",
    "please prepare my resume"
  ]) {
    assert.equal(KyroIntakeForms.isResumeBuildRequest(text), true, text);
  }
});

test("isResumeBuildRequest rejects questions and 'resume' used as a verb", () => {
  for (const text of [
    "how do I write a resume?",
    "what should go on a resume?",
    "resume my lesson",
    "resume playing music",
    "resume my training",
    "just chatting, nothing about documents"
  ]) {
    assert.equal(KyroIntakeForms.isResumeBuildRequest(text), false, text);
  }
});

test("isResumeContinueRequest recognizes a request to pick a paused intake back up", () => {
  assert.equal(KyroIntakeForms.isResumeContinueRequest("continue my resume"), true);
  assert.equal(KyroIntakeForms.isResumeContinueRequest("back to the resume"), true);
  assert.equal(KyroIntakeForms.isResumeContinueRequest("what is a resume"), false);
});

test("end to end: answering the engine's questions produces a real resume via the server builder, Oxford comma included", () => {
  const intake = KyroVoiceIntake.create(KyroIntakeForms.resume, { now: () => 1000 });
  intake.start();
  intake.handleUtterance("Amina Wanjiru", { utteranceId: "u1" });
  intake.handleUtterance("Kisumu", { utteranceId: "u2" });
  intake.handleUtterance("I grew maize for five years", { utteranceId: "u3" });
  intake.handleUtterance("that's all", { utteranceId: "u4" });
  intake.handleUtterance("Crop planning, irrigation, and livestock management", { utteranceId: "u5" });
  intake.handleUtterance("Diploma in Agriculture", { utteranceId: "u6" });
  intake.handleUtterance("Swahili and English", { utteranceId: "u7" });
  intake.handleUtterance("skip", { utteranceId: "u8" });
  const confirmDecision = intake.handleUtterance("skip", { utteranceId: "u9" });
  assert.equal(confirmDecision.action, "confirm");
  const submitDecision = intake.handleUtterance("yes", { utteranceId: "u10" });
  assert.equal(submitDecision.action, "submit");

  const request = KyroIntakeForms.resume.toRequest(submitDecision.values);
  assert.deepEqual(request, {
    name: "Amina Wanjiru",
    location: "Kisumu",
    skills: "Crop planning, irrigation, and livestock management",
    education: "Diploma in Agriculture",
    languages: "Swahili and English",
    experience: ["I grew maize for five years"]
  });

  const resume = buildResume(request);
  assert.match(resume.text, /AMINA WANJIRU/);
  assert.match(resume.text, /SKILLS\n- Crop planning\n- irrigation\n- livestock management/, "the Oxford comma must not leave a stray 'and' on the server side");
  assert.deepEqual(resume.sections.experience, ["I grew maize for five years"]);
  assert.deepEqual(resume.sections.languages, ["Swahili", "English"]);
});

test("a resume with only skills (no experience or education) still validates and builds", () => {
  const intake = KyroVoiceIntake.create(KyroIntakeForms.resume, { now: () => 1000 });
  intake.start();
  intake.handleUtterance("Juma", { utteranceId: "u1" });
  intake.handleUtterance("skip", { utteranceId: "u2" });
  intake.handleUtterance("that's all", { utteranceId: "u3" });
  const afterSkills = intake.handleUtterance("Welding and carpentry", { utteranceId: "u4" });
  assert.notEqual(afterSkills.action, "reask", "skills alone should satisfy the content requirement");
});

test("answering nothing but the name is rejected by validate, and jumps back to ask for content", () => {
  const intake = KyroVoiceIntake.create(KyroIntakeForms.resume, { now: () => 1000 });
  intake.start();
  intake.handleUtterance("Juma", { utteranceId: "u1" }); // name
  intake.handleUtterance("skip", { utteranceId: "u2" }); // location
  intake.handleUtterance("skip", { utteranceId: "u3" }); // experience (none at all)
  intake.handleUtterance("skip", { utteranceId: "u4" }); // skills
  intake.handleUtterance("skip", { utteranceId: "u5" }); // education
  intake.handleUtterance("skip", { utteranceId: "u6" }); // languages
  intake.handleUtterance("skip", { utteranceId: "u7" }); // phone
  const afterLastSkip = intake.handleUtterance("skip", { utteranceId: "u8" }); // email -- triggers validate()
  assert.equal(afterLastSkip.action, "reask");
  assert.match(afterLastSkip.say, /I need at least one thing/);
});
