"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const womens = require("../../public/kyro-womens-topics.js");
const serverMatcher = require("../../nexus/knowledge/womens-health-topics.js");
const { COURSE } = require("../../nexus/farmwork/walkthroughs.js");

// Found by the live voice test of the six areas: (1) the voice model rewords a question when it calls a tool, and a covered women's health question (birth control) was answered from memory with no sources; (2) "start the AI
// basics course" was sent to the learning tool, which does not know the course, and said a lesson was open when nothing was; (3) "skip" while a checklist asked its question was taken by the music player ("Nothing is playing").
const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
const server = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");

function slice(from, to) {
  const start = app.indexOf(from); const end = app.indexOf(to, start);
  assert.ok(start > 0 && end > start, `${from} is in app.js`);
  return app.slice(start, end);
}

test("the women's health matcher is one file shared by the page and the server", () => {
  assert.equal(serverMatcher, womens, "the server file re-exports the shared one");
  assert.equal(womens.womensHealthTopic("How often should I get a Pap smear?"), "cervical-screening");
  assert.equal(womens.womensHealthTopic("What are my birth control options?"), "contraception");
  assert.equal(womens.womensHealthTopic("What is menopause?"), "menopause");
  // never taken: a record, a health worker's list, urgent words, a medicine, the business programmes
  for (const say of ["Log my period", "Who is pregnant on my list?", "I am bleeding heavily, what should I do?", "How much ibuprofen should I take for period pain?", "How do I get a women's business center loan?", "I want to sell maize"]) assert.equal(womens.womensHealthTopic(say), null, say);
  assert.equal(typeof womens.isWomensCareSearch, "function");
  assert.ok(womens.WOMENS_CARE_NOTE.en);
});

test("on the page: a women's health question is the page's own, and nothing else is claimed by that check", () => {
  const code = slice("// A woman's health question for the checked guide (public/kyro-womens-topics.js", "// A question for the checked small-business guide");
  const context = { window: { KyroWomensTopics: womens } };
  vm.runInNewContext(`${code}\nthis.ask = kyroWomensHealthQuestion;`, context);
  for (const say of ["What are my birth control options?", "How often should I get a Pap smear?", "What should I expect at my first prenatal visit?", "Tell me about menopause"]) assert.equal(context.ask(say), true, say);
  for (const say of ["Show my notes", "I harvested 50 kg of maize", "Play some music", "What is the weather in Kisumu?"]) assert.equal(context.ask(say), false, say);
  const none = { window: {} };
  vm.runInNewContext(`${code}\nthis.ask = kyroWomensHealthQuestion;`, none);
  assert.equal(none.ask("What are my birth control options?"), false, "no matcher loaded, no claim");
});

test("the server tries the person's own words before the model's reworded version, for the women's health guide", () => {
  assert.match(server, /const womensAsk = typeof womensHealthTopic === "function" && rawCallerText && womensHealthTopic\(rawCallerText\) \? rawCallerText : command;/);
  assert.match(server, /womensHealthTopic\(womensAsk\) && effectiveMentalHealthSignal\.state !== "medical_emergency"/);
  assert.match(server, /text: womensAsk, language, timeZone: args\?\.timeZone/);
});

test("the AI basics course: the page's words are the farm toolkit's words, and the learning tool is not sent it", () => {
  const code = slice("const KYRO_AI_COURSE =", "// A woman's health question for the checked guide");
  const context = {};
  vm.runInNewContext(`${code}\nthis.ask = kyroGuidedCourseRequest; this.regex = KYRO_AI_COURSE;`, context);
  assert.equal(context.regex.source, COURSE.source, "the same pattern as COURSE in farmwork/walkthroughs.js");
  assert.equal(context.regex.flags, COURSE.flags);
  for (const say of ["Start the AI basics course.", "Teach me about AI", "Take the AI literacy course", "Begin the AI basics lessons", "AI basics", "please start the AI basics course"]) assert.equal(context.ask(say), true, say);
  for (const say of ["What is AI?", "Start the maize course", "Teach me about farming", "Start my business", "Open learning"]) assert.equal(context.ask(say), false, say);
  const typed = slice("function kyroTypedToolFor(text) {", "// Asks the voice route (where the lessons");
  const tools = {};
  vm.runInNewContext(`${typed}\nthis.tool = kyroTypedToolFor;`, tools);
  for (const say of ["Start the AI basics course", "start ai basics", "begin the AI basics course"]) assert.equal(tools.tool(say), "", say);
  assert.equal(tools.tool("Teach me letters"), "nexus_workforce_learning");
  assert.equal(tools.tool("Give me a practice interview"), "nexus_workforce_learning");
});

test("short replies while a guided question is open belong to it, for ten minutes, and are not music commands", () => {
  const code = slice("let kyroGuidedOpenAt = 0;", "// The words that start the AI basics course");
  const context = { Date };
  vm.runInNewContext(`${code}\nthis.reply = kyroGuidedReply; this.open = () => { kyroGuidedOpenAt = Date.now(); }; this.openOld = () => { kyroGuidedOpenAt = Date.now() - 11 * 60000; }; this.close = () => { kyroGuidedOpenAt = 0; };`, context);
  assert.equal(context.reply("Skip."), false, "nothing open: left to the usual routes");
  context.open();
  for (const say of ["Skip.", "done", "Done!", "No", "yes", "next", "not sure", "Cancel", "Okay", "I don't know"]) assert.equal(context.reply(say), true, say);
  for (const say of ["play some music", "skip the song", "what is the weather", "done with my taxes and then", "tell me about menopause"]) assert.equal(context.reply(say), false, say);
  context.openOld();
  assert.equal(context.reply("done"), false, "after ten minutes it is left alone");
  context.close();
  assert.equal(context.reply("done"), false);
});

test("the page wires them in the right order: guided replies first, then the course and the women's guide, then the other guides; the music player and the voice model are kept out of a guided reply", () => {
  const route = app.indexOf("function routeKyroVoiceIntakeTranscript(");
  assert.ok(route > 0);
  const body = app.slice(route, route + 14000);
  const guided = body.indexOf("kyroGuidedReply(trimmed)");
  const course = body.indexOf("kyroGuidedCourseRequest(trimmed)");
  const women = body.indexOf("kyroWomensHealthQuestion(trimmed)");
  const community = body.indexOf("kyroCommunityQuestion(trimmed)");
  const business = body.indexOf("kyroBusinessQuestion(trimmed)");
  assert.ok(guided > 0 && course > guided && women > 0 && community > course && business > community, "order");
  assert.match(body, /kyroGuidedReply\(trimmed\)\) \{\s+if \(!heardAgain\) \{\s+try \{ kyroTakeOverTurn\(\); \} catch \{ \/\* nothing to cut off \*\/ \}\s+kyroPageSpeaksUntil = Date\.now\(\) \+ 40000;\s+void handleNexusUnifiedBrainRuntimeCommand\(trimmed, \{ source: "typed", kyroDirect: true, kyroGuidedReply: true \}\);/);
  assert.match(app, /if \(typeof kyroMediaCommand === "function" && !options\.kyroGuidedReply && !kyroGuidedReply\(text\) && await kyroMediaCommand\(text, options\)\) return true;/);
  assert.match(app, /kyroGuidedOpenAt = result\.plan\?\.longForm && !result\.plan\?\.knowledge && !result\.plan\?\.guardrail \? Date\.now\(\) : 0;/);
});

test("the page loads the shared matcher before app.js and caches it", () => {
  const index = fs.readFileSync(path.join(__dirname, "../../public/index.html"), "utf8");
  const sw = fs.readFileSync(path.join(__dirname, "../../public/sw.js"), "utf8");
  const tag = '<script src="/kyro-womens-topics.js?v=kyro-womens-topics-2"></script>';
  assert.ok(index.includes(tag));
  assert.ok(index.indexOf(tag) < index.search(/<script[^>]+src="\/app\.js/), "before app.js");
  assert.ok(sw.includes("`/kyro-womens-topics.js?v=kyro-womens-topics-2`"));
  assert.ok(fs.existsSync(path.join(__dirname, "../../public/kyro-womens-topics.js")));
});

test("a spoken reply such as 'no' or 'ok' to a lesson is not treated as small talk: the next lesson is drawn, while a plain 'no' stays spoken", () => {
  const code = slice("function kyroShowResultScreen(toolName, command, result) {", "// The flows that really are forms");
  const small = slice("const KYRO_SMALL_TALK =", "const KYRO_FORM_FLOW =");
  const drawn = [];
  const context = {
    Date, window: { KyroResultScreen: { buildModel: (result) => ({ response: result.response }), show: (doc, model) => drawn.push(model.response) } }, document: {},
    kyroResultScreenEligible: () => true, kyroExplicitOpenCard: () => false, KYRO_FORM_FLOW: /never/, kyroPlainText: text => text, languageCode: () => "en", kyroReturnToOrb() {}, kyroRunOffer() {}, kyroNoteActivity() {},
    kyroSourceLinks: [], kyroPendingOffers: []
  };
  vm.runInNewContext(`${small}\n${code}\nlet kyroGuidedOpenAt = 0; function kyroGuidedReply(text) { return Boolean(kyroGuidedOpenAt && /^(?:no|yes|ok|okay|done)[.!?]*$/i.test(String(text).trim())); }\nthis.show = kyroShowResultScreen; this.openGuided = () => { kyroGuidedOpenAt = Date.now(); }; this.closeGuided = () => { kyroGuidedOpenAt = 0; };`, context);
  const lesson = { ok: true, status: "completed", response: "Lesson 2 of 6, What to keep out. Never type passwords into an AI tool." };
  assert.equal(context.show("nexus_everyday_records", "No.", lesson), false, "a plain no is spoken, not drawn");
  context.openGuided();
  assert.equal(context.show("nexus_everyday_records", "No.", lesson), true, "a reply to a lesson is drawn");
  assert.equal(context.show("nexus_everyday_records", "Hello Kyro", lesson), false, "a greeting is still small talk");
  assert.equal(drawn.length, 1);
  assert.match(app, /KYRO_SMALL_TALK\.test\(String\(command \|\| ""\)\.trim\(\)\) && !\(typeof kyroGuidedReply === "function" && kyroGuidedReply\(command\)\)/);
});
