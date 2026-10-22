"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const topics = require("../../public/kyro-chronic-topics.js");
const guide = require("../../nexus/knowledge/chronic-conditions.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { collectSources } = require("../../scripts/check-guide-sources.js");

// The checked guide to diabetes and high blood pressure. Found by the live voice test of the six areas: "How do I keep track of my blood sugar?" came back as a reminders message and "I was just told I have high blood pressure,
// what should I do?" as a plan card, neither with an official source. The guide's rule is the women's health guide's rule: official pages the person can open, the date they were read, "general information, not medical advice",
// and never a person's own reading, a reading with symptoms, a medicine or a dose (those belong to the health tool, the safety layer and the medicine rules).
const ALL = Object.keys(guide.TOPICS);
const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
const server = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");

test("which questions get which topic", () => {
  const yes = [
    ["I have diabetes. How do I keep track of my blood sugar?", "diabetes-care"], ["How do I check my blood sugar at home?", "diabetes-care"], ["How do I take care of my feet with diabetes?", "diabetes-care"], ["What should I eat if I have diabetes?", "diabetes-care"], ["How can I live well with diabetes?", "diabetes-care"],
    ["What is type 2 diabetes?", "diabetes"], ["What are the symptoms of diabetes?", "diabetes"], ["How is diabetes diagnosed?", "diabetes"], ["What is an A1C test?", "diabetes"], ["How do I know if I have diabetes?", "diabetes"], ["How can I prevent type 2 diabetes?", "diabetes"],
    ["I was just told I have high blood pressure. What should I do?", "blood-pressure-care"], ["How can I lower my blood pressure?", "blood-pressure-care"], ["What is the DASH diet?", "blood-pressure-care"], ["How much salt should I eat with high blood pressure?", "blood-pressure-care"], ["How do I manage high blood pressure?", "blood-pressure-care"],
    ["How do I check my blood pressure at home?", "blood-pressure-home"], ["How do I measure my blood pressure?", "blood-pressure-home"],
    ["What is a healthy blood pressure?", "high-blood-pressure"], ["What is hypertension?", "high-blood-pressure"], ["What do the blood pressure numbers mean?", "high-blood-pressure"], ["What are the stages of high blood pressure?", "high-blood-pressure"],
    ["How do I manage diabetes and high blood pressure?", "chronic-overview"], ["What can you help me with for chronic conditions?", "chronic-overview"], ["How do I live with a chronic condition?", "chronic-overview"]
  ];
  for (const [text, id] of yes) assert.equal(topics.chronicTopic(text), id, text);
});

test("a person's own reading, a reading with symptoms, a medicine or a dose, pregnancy, a health worker's list, a record and things that only share a word are never answered with the guide", () => {
  for (const text of ["My blood pressure is 130 over 85", "My blood sugar is 350. What should I do?", "My blood pressure is high, what should I do?", "My blood sugar is low, what do I do?", "What should I do if I feel shaky and confused with low blood sugar?",
    "Show me my blood pressure readings", "Prepare a provider summary of my readings", "Log my blood sugar 110", "Tell me about my glucose log", "Remind me to check my blood pressure", "How much insulin should I take?", "Should I stop taking my blood pressure medicine?",
    "What are the side effects of metformin?", "My blood pressure is 180/120, what do I do?", "I have chest pain and high blood pressure, what should I do?", "I feel dizzy and my sugar is off, what should I do?", "Is high blood pressure in pregnancy dangerous?",
    "Which of my patients with diabetes are due for a visit?", "What is the weather?", "How do I lower the pressure in my tires?", "What is the best way to make a sugar glider diet?", "", "x".repeat(400)]) assert.equal(topics.chronicTopic(text), null, text);
});

const official = /^https:\/\/(?:www\.)?(?:cdc\.gov|niddk\.nih\.gov|nhlbi\.nih\.gov|who\.int)\//;

test("every answer, in the United States and WHO versions, names official pages, the date read and the closing line, and gives no dose", () => {
  for (const id of ALL) for (const us of [true, false]) {
    const answer = guide.chronicConditionAnswer(id, { us });
    assert.ok(answer, `${id} ${us}`);
    assert.equal(answer.topic, id);
    if (id !== "chronic-overview") assert.ok(answer.sources.length >= 1 && answer.sources.every(source => official.test(source.url) && source.name), id);
    if (id !== "chronic-overview") assert.match(answer.text, /Sources: .+ \(checked 19 October 2026\)\. This is general information, not medical advice\. For your own health, talk to a doctor, nurse or health worker\.$/, id);
    else assert.match(answer.text, /This is general information, not medical advice\. For your own health, talk to a doctor, nurse or health worker\.$/);
    assert.doesNotMatch(answer.text, /(?<!if )(?<!as )\byou have (?:diabetes|hypertension|high blood pressure|a condition)\b|\byou should take\b|\btake \d+ ?(?:mg|tablets?|pills?|units?)\b|\b\d+ ?units? of insulin\b|\bI recommend\b|\bI diagnose\b/i, id);
    if (id !== "chronic-overview") assert.ok(answer.sources.every(source => (us ? /cdc\.gov|niddk\.nih\.gov|nhlbi\.nih\.gov/ : /who\.int|cdc\.gov/).test(source.url)), `${id}: sources match the version`);
  }
  assert.equal(guide.chronicConditionAnswer("nonsense"), null);
  const overview = guide.chronicConditionAnswer("chronic-overview", { us: true }).text;
  assert.match(overview, /signed in with a full account/); assert.match(overview, /I cannot diagnose, tell you whether your own reading is normal for you, or advise on medicines or doses/);
});

test("the facts in the United States answers are the ones the pages gave", () => {
  const us = id => guide.chronicConditionAnswer(id, { us: true }).text;
  for (const fact of [/chronic, long-lasting health condition/, /More than 40 million Americans have diabetes/, /more than 1 in 4 adults with diabetes do not know/, /between 24 and 28 weeks of pregnancy/, /A1C of 6\.5% or above/, /126 mg\/dL/, /5\.7% to 6\.4%/, /retested every 3 years/, /Only a doctor can diagnose diabetes/, /prevent or delay type 2 diabetes with proven lifestyle changes/]) assert.match(us("diabetes"), fact);
  for (const fact of [/test your blood sugar often/, /take medicines as prescribed even if you feel good/, /below 7%/, /at least 150 minutes of moderate activity/, /under 70 mg\/dL/, /15 to 20 grams/, /wait 15 minutes and check again/, /call 911 right away/, /check your feet every day/, /warm, not hot, water/, /Do not skip or ration medicines because of cost/, /eye doctor/]) assert.match(us("diabetes-care"), fact);
  for (const fact of [/less than 120 over less than 80/, /120 to 129/, /130 or higher over 80 or higher/, /stage 2, 140 or higher or 90 or higher/, /higher than 180 over 120 is a hypertensive crisis/, /usually causes no warning signs/, /at least once a year/, /heart disease and stroke/]) assert.match(us("high-blood-pressure"), fact);
  for (const fact of [/DASH/, /2,300 mg a day/, /1,500 mg lowers blood pressure even further/, /exactly as your doctor tells you/, /not to stop a medicine without talking to your doctor or pharmacist/]) assert.match(us("blood-pressure-care"), fact);
  for (const fact of [/30 minutes/, /empty your bladder/, /back supported for at least 5 minutes/, /both feet flat on the floor/, /chest height/, /bare skin, not over clothing/, /Do not talk/, /at least two readings, 1 or 2 minutes apart/, /same time every day/, /blood pressure log/]) assert.match(us("blood-pressure-home"), fact);
});

test("the facts in the WHO answers are the ones the pages gave, and the WHO numbers are WHO's", () => {
  const who = id => guide.chronicConditionAnswer(id, { us: false }).text;
  for (const fact of [/In 2022, 14% of adults/, /Type 2 diabetes affects how your body uses sugar/, /blindness, kidney failure, heart attacks, stroke and lower limb amputation/, /at least 150 minutes of moderate exercise each week/, /inexpensive testing of blood glucose/]) assert.match(who("diabetes"), fact);
  for (const fact of [/insulin injections for survival/, /gives no doses/, /foot problems/, /medicines to lower their blood pressure/]) assert.match(who("diabetes-care"), fact);
  for (const fact of [/140\/90 mmHg or higher/, /two different days/, /1\.4 billion adults aged 30 to 79/, /less than 130\/80 if you have diabetes/]) assert.match(who("high-blood-pressure") + who("blood-pressure-care"), fact);
  assert.doesNotMatch(who("high-blood-pressure"), /elevated|stage 2|180 over 120/, "no United States categories in the WHO answer");
  for (const fact of [/1 drink a day for women and 2 for men/, /150 minutes a week/, /keeping salt low/]) assert.match(who("blood-pressure-care"), fact);
  for (const fact of [/steps from the CDC in the United States/, /at least two readings, 1 or 2 minutes apart/]) assert.match(who("blood-pressure-home"), fact);
});

const planner = () => new OpenEndedPlanner({ model: { plan: async () => { throw new Error("must not reach the AI planning model"); }, respond: async () => { throw new Error("the guide must answer without the model"); } }, tools: { list: async () => [] }, applications: { list: () => [] } });
const ask = (text, timeZone) => planner().plan({ command: { text, tenantId: "t1", actorId: "u1", locale: "en", channel: "typed" }, context: { timeZone } });

test("through the planner, with no AI model: the United States version in the US, the WHO version elsewhere, each with sources and no steps; a reading, a medicine and a symptom are not taken", async () => {
  const us = await ask("I have diabetes. How do I keep track of my blood sugar?", "America/Los_Angeles");
  assert.equal(us.knowledge, "chronic-conditions:diabetes-care"); assert.deepEqual(us.steps, []); assert.equal(us.guardrail, "chronic-conditions-information");
  assert.ok(us.sources.length >= 3 && us.sources.every(source => /cdc\.gov|niddk\.nih\.gov/.test(source.url))); assert.match(us.response, /checked 19 October 2026/);
  assert.equal((await ask("I was just told I have high blood pressure. What should I do?", "America/Chicago")).knowledge, "chronic-conditions:blood-pressure-care");
  assert.equal((await ask("How do I check my blood pressure at home?", "America/Chicago")).knowledge, "chronic-conditions:blood-pressure-home");
  const ke = await ask("How can I lower my blood pressure?", "Africa/Nairobi");
  assert.equal(ke.knowledge, "chronic-conditions:blood-pressure-care"); assert.ok(ke.sources.every(source => /who\.int/.test(source.url))); assert.match(ke.response, /WHO/);
  assert.equal((await ask("What is type 2 diabetes?", "Africa/Lagos")).knowledge, "chronic-conditions:diabetes");
  assert.equal((await ask("What can you help me with for chronic conditions?", "America/New_York")).knowledge, "chronic-conditions:chronic-overview");
  for (const text of ["My blood sugar is 350. What should I do?", "Should I stop taking my blood pressure medicine?", "I feel shaky and confused, is my blood sugar low?"]) await assert.rejects(ask(text, "America/Chicago"), /must not reach the AI planning model|guide must answer/, text);
});

test("on the page: a diabetes or blood pressure question is the page's own, a reading or a medicine is not, and the shared file is loaded before app.js and cached", () => {
  const start = app.indexOf("function kyroChronicQuestion(text) {");
  const end = app.indexOf("\n}\n", start) + 2;
  assert.ok(start > 0 && end > start);
  const context = { window: { KyroChronicTopics: topics } };
  vm.runInNewContext(`${app.slice(start, end)}\nthis.ask = kyroChronicQuestion;`, context);
  for (const say of ["I have diabetes. How do I keep track of my blood sugar?", "What is hypertension?", "How can I lower my blood pressure?"]) assert.equal(context.ask(say), true, say);
  for (const say of ["My blood pressure is 130 over 85", "Should I stop taking my blood pressure medicine?", "Show my blood pressure readings", "Play some music"]) assert.equal(context.ask(say), false, say);
  const none = { window: {} };
  vm.runInNewContext(`${app.slice(start, end)}\nthis.ask = kyroChronicQuestion;`, none);
  assert.equal(none.ask("What is diabetes?"), false, "no matcher loaded, no claim");
  assert.match(app, /\(typeof kyroChronicQuestion === "function" && kyroChronicQuestion\(trimmed\)\)[^{]*\{\s+if \(!heardAgain\) \{\s+try \{ kyroTakeOverTurn\(\); \}/);
  const index = fs.readFileSync(path.join(__dirname, "../../public/index.html"), "utf8");
  const sw = fs.readFileSync(path.join(__dirname, "../../public/sw.js"), "utf8");
  const tag = '<script src="/kyro-chronic-topics.js?v=kyro-chronic-topics-2"></script>';
  assert.ok(index.includes(tag) && index.indexOf(tag) < index.search(/<script[^>]+src="\/app\.js/), "before app.js");
  assert.ok(sw.includes("`/kyro-chronic-topics.js?v=kyro-chronic-topics-2`"));
});

test("the server tries the person's own words first for this guide too, after a crisis and before any account restriction", () => {
  assert.match(server, /const chronicAsk = typeof chronicTopic === "function" && rawCallerText && chronicTopic\(rawCallerText\) \? rawCallerText : command;/);
  assert.match(server, /chronicTopic\(chronicAsk\) && effectiveMentalHealthSignal\.state !== "medical_emergency"/);
  assert.match(server, /text: chronicAsk, language, timeZone: args\?\.timeZone/);
  assert.ok(server.indexOf("const chronicAsk") > server.indexOf("const womensAsk"));
  assert.ok(server.indexOf("const chronicAsk") < server.indexOf("const restrictedToolCategory = {"));
  assert.ok(server.includes('const { chronicTopic } = require("./public/kyro-chronic-topics.js");'));
});

test("the new pages are in the weekly source check", () => {
  const urls = collectSources().map(entry => entry.url);
  for (const source of Object.values(guide.SOURCES)) assert.ok(urls.includes(source.url), source.url);
  assert.ok(collectSources().some(entry => entry.guides.includes("chronic-conditions")));
});
