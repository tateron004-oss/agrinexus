"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const KyroVoiceIntake = require("../../public/kyro-voice-intake.js");
const KyroIntakeForms = require("../../public/kyro-intake-forms.js");
const { buildResume } = require("../../nexus/resume/build.js");

// The CV by voice, in Kiswahili. Found by the user-journey sweep: the browser intake was English-only, so "nataka CV" was not recognised, and Kiswahili answers were saved word for word:
// "ruka" (skip) became a skill, "ndiyo" (yes) became education, "ndio ni hayo tu" (that's all) became work experience, "jina langu ni Juma Otieno" became the full name.
// And a first-time job seeker with nothing to say was asked the same thing for ever. The Kiswahili here is a first draft for a fluent speaker to review.

const now = () => 1000;
const make = (seed, language) => { const intake = KyroVoiceIntake.create(KyroIntakeForms.resume, { now, ...(seed ? { seedUtterance: { id: "seed", text: seed } } : {}), ...(language ? { language } : {}) }); intake.start(); return intake; };
let counter = 0;
const say = (intake, text) => intake.handleUtterance(text, { utteranceId: `u${(counter += 1)}` });

test("Kiswahili requests for a CV start the intake, and questions and downloads do not", () => {
  for (const text of ["nataka CV", "nipe CV yangu", "tengeneza wasifu wangu", "nitengenezee CV", "niandikie CV", "nataka kutengeneza CV yangu", "nisaidie kutengeneza wasifu wa kazi", "Kyro, nataka CV", "ninahitaji CV"]) {
    assert.equal(KyroIntakeForms.isResumeBuildRequest(text), true, text);
  }
  for (const text of ["CV ni nini?", "jinsi ya kuandika CV", "nipe wasifu wa Nyerere", "pakua CV yangu", "nipe CV yangu niipakue", "habari yako", "nataka kwenda sokoni", "nina CV yangu ya zamani na sijui nifanye nini kwa sababu nimechoka sana leo asubuhi kabisa"]) {
    assert.equal(KyroIntakeForms.isResumeBuildRequest(text), false, text);
  }
  assert.equal(KyroIntakeForms.isResumeDownloadRequest("download my CV"), true);
  assert.equal(KyroIntakeForms.isResumeDownloadRequest("pakua CV yangu"), true);
  assert.equal(KyroIntakeForms.isResumeDownloadRequest("make my CV"), false);
  // English is unchanged.
  assert.equal(KyroIntakeForms.isResumeBuildRequest("make my CV"), true);
  assert.equal(KyroIntakeForms.isResumeBuildRequest("how do I write a CV?"), false);
});

test("Kiswahili control words are controls, never answers", () => {
  const c = KyroVoiceIntake.classifyControl;
  for (const word of ["ruka", "pita", "Ruka.", "hapana", "sina", "sina uzoefu", "sijui"]) assert.equal(c(word), "skip", word);
  for (const word of ["rudia", "rudia tena", "sema tena", "samahani", "sikuelewa"]) assert.equal(c(word), "repeat", word);
  for (const word of ["rudi", "rudi nyuma"]) assert.equal(c(word), "back", word);
  for (const word of ["ghairi", "ghairi hii", "acha kabisa", "sitaki tena"]) assert.equal(c(word), "cancel", word);
  // A bare "acha" (stop) pauses and keeps the answers, like a bare "stop" in English.
  for (const word of ["acha", "subiri", "ngoja kidogo", "dakika moja"]) assert.equal(c(word), "pause", word);
  for (const word of ["ndiyo", "ndio", "sawa", "ni sahihi"]) assert.equal(c(word, { inConfirm: true }), "yes", word);
  for (const word of ["hapana", "si sahihi"]) assert.equal(c(word, { inConfirm: true }), "no", word);
  assert.equal(c("badilisha jina langu", { inConfirm: true }), "change");
  assert.equal(c("anza upya"), "restart");
  assert.equal(c("Kyro, fungua ramani"), "switch");
  // Ordinary Kiswahili answers are not controls.
  for (const answer of ["Juma Otieno", "nililima mahindi kwa miaka mitano", "ushonaji na useremala", "Mombasa"]) assert.equal(c(answer), null, answer);
  for (const phrase of ["ndiyo hayo tu", "ndio ni hayo tu", "hiyo tu", "hakuna zaidi", "nimemaliza", "sawa, hayo tu asante", "hakuna kingine"]) assert.equal(KyroVoiceIntake.isDoneCollecting(phrase), true, phrase);
  assert.equal(KyroVoiceIntake.isDoneCollecting("nilifanya kazi ya ushonaji"), false);
});

test("the whole CV by voice in Kiswahili: asked in Kiswahili, answers cleaned up, controls obeyed", () => {
  const intake = make("nataka CV");
  assert.equal(intake.language, "sw");
  const first = intake.snapshot();
  assert.equal(first.language, "sw");
  assert.equal(first.currentField.question, "Jina lako kamili ni nani?");
  assert.equal(first.title, "CV yako");

  let d = say(intake, "jina langu ni Juma Otieno");
  assert.equal(d.values.name, "Juma Otieno");
  assert.match(d.say, /^Sawa\. Unaishi mji au kijiji gani\?/);
  d = say(intake, "naishi Mombasa");
  assert.equal(d.values.location, "Mombasa");
  assert.match(d.say, /Niambie kuhusu kazi/);

  // "ndiyo" to a question that wants a real answer is not the answer.
  d = say(intake, "ndiyo");
  assert.equal(d.action, "reask");
  assert.equal(d.values.experience, undefined);
  d = say(intake, "nilifanya kazi ya ushonaji kwa miaka mitatu");
  assert.match(d.say, /Kuna kazi nyingine/);
  d = say(intake, "ndio ni hayo tu");
  assert.deepEqual(d.values.experience, ["Nilifanya kazi ya ushonaji kwa miaka mitatu"]);
  assert.match(d.say, /Unaweza kufanya nini vizuri/);
  d = say(intake, "ujuzi wangu ni ushonaji na useremala");
  assert.equal(d.values.skills, "ushonaji na useremala");
  d = say(intake, "ruka"); // education
  assert.equal(d.values.education, undefined);
  assert.equal(d.snapshot.skipped.includes("education"), true);
  d = say(intake, "rudia");
  assert.match(d.say, /Unazungumza lugha gani/);
  d = say(intake, "Kiswahili na Kiingereza");
  d = say(intake, "sifuri saba mbili mbili tatu nne tano sita saba nane");
  assert.equal(d.values.phone, "0722345678");
  d = say(intake, "ruka"); // email -> confirm
  assert.equal(d.action, "confirm");
  assert.match(d.say, /^Hivi ndivyo nilivyoandika\. Jina: Juma Otieno\./);
  assert.match(d.say, /Ujuzi: ushonaji na useremala/);
  assert.match(d.say, /Nikitengeneze sasa\? Sema ndiyo/);
  d = say(intake, "badilisha mji");
  assert.equal(d.action, "ask");
  assert.match(d.say, /Unaishi mji au kijiji gani/);
  d = say(intake, "Kisumu");
  assert.equal(d.action, "confirm");
  assert.match(d.say, /Nimebadilisha\./);
  d = say(intake, "ndiyo");
  assert.equal(d.action, "submit");

  const request = KyroIntakeForms.resume.toRequest(d.values);
  assert.equal(request.name, "Juma Otieno");
  assert.equal(request.location, "Kisumu");
  assert.equal(request.phone, "0722345678");
  const cv = buildResume(request);
  assert.deepEqual(cv.sections.skills, ["ushonaji", "useremala"], "'na' (and) splits a Kiswahili list like 'and' does");
  assert.deepEqual(cv.sections.languages, ["Kiswahili", "Kiingereza"]);
  assert.match(cv.text, /^JUMA OTIENO\n/);
});

test("the language is the one spoken: English stays English, the app language applies when nothing says otherwise, and Kiswahili is picked up mid-way", () => {
  const english = make("make my CV");
  assert.equal(english.language, "en");
  assert.equal(english.snapshot().currentField.question, "What is your full name?");

  const appInSwahili = make("", "sw");
  assert.equal(appInSwahili.language, "sw");
  assert.match(appInSwahili.snapshot().currentField.question, /Jina lako kamili/);

  const mixed = make("make my CV");
  say(mixed, "Amina Wanjiru");
  const switched = say(mixed, "naishi Kisumu");
  assert.equal(switched.language, "sw");
  assert.match(switched.say, /Niambie kuhusu kazi/);
  // A Kiswahili speaker who says the English word "skip" is not switched to English.
  const staysSwahili = say(mixed, "skip");
  assert.equal(staysSwahili.language, "sw");
});

test("names, phone numbers and email addresses said in Kiswahili are cleaned the same way as in English", () => {
  const n = KyroVoiceIntake.normalizers;
  assert.equal(n.name("jina langu ni Juma Otieno").value, "Juma Otieno");
  assert.equal(n.name("Naitwa Grace Achieng").value, "Grace Achieng");
  assert.equal(n.name("Mimi ni Hassan Ali").value, "Hassan Ali");
  assert.equal(n.name("jina langu ni Peter Kamau na ninaishi Eldoret").value, "Peter Kamau");
  assert.equal(n.name("my name is Peter Kamau and I live in Eldoret").value, "Peter Kamau");
  assert.equal(n.name("my name is Ron Tate").value, "Ron Tate");
  assert.equal(n.name("Itsuki Tanaka").value, "Itsuki Tanaka", "a name that merely starts with the letters of a lead-in is kept whole");
  for (const chatter of ["ndiyo", "asante", "sawa", "ruka", "habari"]) assert.equal(n.name(chatter).ok, false, chatter);
  assert.equal(n.phone("sufuri saba moja mbili tatu nne tano sita saba").value, "07123456" + "7");
  assert.equal(n.phone("zero seven double one two three four five six").value, "07112345" + "6");
  assert.equal(n.email("barua pepe yangu ni amina at gmail nukta com").value, "amina@gmail.com");
  assert.equal(n.email("my email is amina at gmail dot com").value, "amina@gmail.com");
  assert.equal(n.place("naishi Mombasa").value, "Mombasa");
  assert.equal(n.place("ninaishi katika mji wa Kisumu").value, "Kisumu");
  assert.equal(n.place("natoka kijiji cha Kakamega").value, "Kakamega");
  assert.equal(n.place("I live in Kisumu").value, "Kisumu");
  assert.equal(n.place("Kisumu").value, "Kisumu");
  assert.equal(n.list("ujuzi wangu ni kupika na kulima").value, "kupika na kulima");
  assert.equal(n.list("Crop planning, irrigation, and livestock management").value, "Crop planning, irrigation, and livestock management");
});

test("a bare yes to a question that wants a real answer is not saved as the answer, in either language", () => {
  const intake = make("make my CV");
  for (let i = 0; i < 1; i += 1) say(intake, "Amina Wanjiru");
  say(intake, "Kisumu");
  say(intake, "I grew maize");
  say(intake, "that's all");
  say(intake, "farming");
  const yes = say(intake, "yes"); // education
  assert.equal(yes.action, "reask");
  assert.equal(yes.values.education, undefined);
  assert.match(yes.say, /^Okay\. Did you go to school/);
});

test("a first-time job seeker is never trapped: the second miss gives easy examples, the third keeps everything and steps aside, and one skill is enough", () => {
  const intake = make("make my CV");
  say(intake, "Juma");
  say(intake, "skip"); // town
  say(intake, "no experience"); // work
  say(intake, "skip"); // skills
  say(intake, "skip"); // education
  say(intake, "skip"); // languages
  say(intake, "skip"); // phone
  const first = say(intake, "skip"); // email -> nothing to put on a CV
  assert.equal(first.action, "reask");
  assert.match(first.say, /I need at least one thing for your résumé/);

  // Everything else was already skipped, so saying "no experience" again is the second miss.
  const second = say(intake, "no experience");
  assert.equal(second.action, "reask");
  assert.match(second.say, /Tell me one thing you can do, for example: farming, cooking, driving, selling, fixing phones, or looking after children\. Volunteer work, school, or helping your family business all count/);
  assert.equal(second.snapshot.currentField.key, "skills");

  const third = say(intake, "skip");
  assert.equal(third.action, "paused", "after the third miss the engine steps aside instead of asking again");
  assert.match(third.say, /we can finish this later[\s\S]*kept[\s\S]*continue my CV[\s\S]*cancel/);
  assert.equal(intake.snapshot().values.name, "Juma", "what was said is kept");
  assert.equal(KyroIntakeForms.isResumeContinueRequest("continue my CV"), true);
  const back = intake.resume();
  assert.match(back.say, /Let's keep going\. What are you good at\?/);
  const one = say(intake, "I help in my family business");
  assert.equal(one.action, "confirm", "one thing, said in the person's own words, is enough");
  assert.equal(one.values.skills, "I help in my family business");
  assert.equal(say(intake, "yes").action, "submit");
  const cv = buildResume(KyroIntakeForms.resume.toRequest(intake.snapshot().values));
  assert.deepEqual(cv.sections.skills, ["I help in my family business"]);
  assert.deepEqual(cv.sections.experience, [], "nothing is invented: no work history was given, so there is none");
});

test("the same never-trap path in Kiswahili, with the same easy examples", () => {
  const intake = make("nataka CV");
  say(intake, "Juma");
  for (let i = 0; i < 6; i += 1) say(intake, "ruka");
  const first = say(intake, "ruka");
  assert.equal(first.action, "reask");
  assert.match(first.say, /Ninahitaji angalau jambo moja kwa CV yako/);
  const second = say(intake, "sina uzoefu");
  assert.match(second.say, /Niambie jambo moja unaloweza kufanya, kwa mfano: kilimo, kupika, kuendesha gari, kuuza, kutengeneza simu, au kulea watoto/);
  const third = say(intake, "ruka");
  assert.equal(third.action, "paused");
  assert.match(third.say, /tunaweza kumaliza baadaye/);
  assert.equal(KyroIntakeForms.isResumeContinueRequest("endelea na CV yangu"), true);
  assert.equal(KyroIntakeForms.isResumeContinueRequest("endelea"), true);
  assert.equal(KyroIntakeForms.isResumeContinueRequest("Kyro, nimerudi"), true);
  intake.resume();
  const done = say(intake, "kupika");
  assert.equal(done.action, "confirm");
});

test("the server-side planner understands the Kiswahili request too, and asks its own questions in Kiswahili", () => {
  const { resumePlan } = require("../../nexus/brain/planner.js");
  const catalog = { tools: [{ toolId: "resume.create" }], applications: [{ applicationId: "workforce" }] };
  assert.match(resumePlan("Tengeneza CV", catalog, {}).clarification, /^Jina gani liwe kwenye CV yako\?/);
  assert.match(resumePlan("Tengeneza CV kwa ajili ya Juma Otieno", catalog, {}).clarification, /^CV iseme nini\?/);
  const plan = resumePlan("Tengeneza CV kwa ajili ya Juma Otieno. ujuzi: ushonaji na useremala; uzoefu: miaka 3 ya ushonaji", catalog, {});
  assert.equal(plan.clarification, null);
  assert.equal(plan.steps[0].toolId, "resume.create");
  assert.equal(plan.steps[0].input.name, "Juma Otieno");
  assert.deepEqual(plan.steps[0].input.skills, ["ushonaji", "useremala"]);
  assert.deepEqual(plan.steps[0].input.experience, ["miaka 3 ya ushonaji"]);
  assert.equal(resumePlan("CV ni nini?", catalog, {}), null);
  assert.equal(resumePlan("pakua CV yangu", catalog, {}), null);
  // English is unchanged.
  assert.match(resumePlan("Make my resume", catalog, {}).clarification, /^What name should go on your resume\?/);
  assert.deepEqual(resumePlan("Create a resume for Amina Wanjiru. Skills: crop planning, irrigation. Experience: 5 years managing a maize farm.", catalog, {}).steps[0].input.skills, ["crop planning", "irrigation"]);
});

test("the server still builds nothing from nothing, and builds a CV from a name and one skill", () => {
  assert.throws(() => buildResume({ name: "Juma" }), error => error.code === "resume_content_required");
  const cv = buildResume({ name: "Juma Otieno", location: "Mombasa", phone: "0712345678", skills: "cooking" });
  assert.match(cv.text, /SKILLS\n- cooking/);
  assert.doesNotMatch(cv.text, /EXPERIENCE|EDUCATION/);
});

test("every line the intake panel and the app glue say exists in both languages", () => {
  const source = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
  const start = source.indexOf("const KYRO_INTAKE_TEXT = {");
  const end = source.indexOf("function kyroIntakeText(");
  assert.ok(start > 0 && end > start, "the intake text table must be in app.js");
  const sandbox = {};
  vm.createContext(sandbox);
  vm.runInContext(`${source.slice(start, end)}\nthis.table = KYRO_INTAKE_TEXT;`, sandbox);
  const { en, sw } = sandbox.table;
  assert.deepEqual(Object.keys(sw).sort(), Object.keys(en).sort());
  for (const key of Object.keys(sw)) assert.ok(String(sw[key]).length > 3, key);
});
