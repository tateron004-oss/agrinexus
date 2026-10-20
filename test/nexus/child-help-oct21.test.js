"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const matcher = require("../../public/kyro-child-help.js");
const parents = require("../../public/kyro-parents-topics.js");
const help = require("../../nexus/knowledge/child-help.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { readSafetyDetailed } = require("../../nexus/companion/safety.js");
const { collectSources } = require("../../scripts/check-guide-sources.js");

// Where a CHILD can get help, when a child tells Kyro that someone touched them or hurt them, that they are pregnant, or asks how to tell a grown-up. Found by the live voice test of the parents' guide: "I am 12 and pregnant" had no
// answer of Kyro's own, and the voice model improvised one with no number and no source.
const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
const server = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");

test("which words from a child get which answer", () => {
  const yes = [
    ["I am 12 and pregnant.", "child-pregnant"], ["I'm 13 and I think I'm pregnant", "child-pregnant"], ["im 14 and pregnant what do i do", "child-pregnant"], ["I am sixteen and pregnant", "child-pregnant"],
    ["My dad touches me and I do not like it", "child-hurt"], ["My uncle touches me at night", "child-hurt"], ["My stepfather makes me have sex with him", "child-hurt"], ["I am 11 and my uncle raped me", "child-hurt"],
    ["I'm a kid and someone touched me", "child-hurt"], ["Someone touched me and I am 10", "child-hurt"], ["My teacher touches me and I'm scared", "child-hurt"], ["I'm 13 how do I tell someone my coach touches me", "child-hurt"],
    ["How do I tell my mom something happened? I'm 12", "child-tell"], ["How do I tell my mom I'm pregnant? I'm 15", "child-pregnant"]
  ];
  for (const [text, id] of yes) assert.equal(matcher.childHelpTopic(text), id, text);
});

test("a parent, an adult, an adult remembering, a record, anything about dying or hurting someone, and things that only share a word are never taken", () => {
  for (const text of ["My daughter is 12 and pregnant", "My daughter told me she was raped", "I am 25 and pregnant", "I was raped when I was 12", "When I was a kid my uncle touched me", "I am 30 years old", "I am 12 and I want to kill myself",
    "I want to hurt my brother", "I am 12 and need help with homework", "Log that I am 12", "I'm 15 minutes late", "How do I tell my boss I am pregnant", "I am 16 and want to start a business", "I am 14 and my dad touches the stove",
    "My friend is 13 and pregnant", "I am 17 and want to open a bank account", "", "x".repeat(400)]) assert.equal(matcher.childHelpTopic(text), null, text);
  // and the parents' guide does not take a child's words either
  for (const text of ["I am 12 and pregnant", "My dad touches me and I do not like it"]) assert.equal(parents.parentsTopic(text), null, text);
});

const official = /^https:\/\/(?:www\.)?(?:rainn\.org|childhelphotline\.org|who\.int|childlinekenya\.co\.ke|childhelplineinternational\.org)\//;

test("every answer, in the United States, Kenya and anywhere else, names the pages it came from, the date they were read, what Kyro is, and a way to reach a person", () => {
  for (const id of Object.keys(help.TOPICS)) for (const options of [{ us: true }, { us: false, country: "ke" }, { us: false, country: "ng" }, { us: false }]) {
    const answer = help.childHelpAnswer(id, options);
    assert.ok(answer && answer.topic === id, `${id} ${JSON.stringify(options)}`);
    assert.ok(answer.sources.length >= 2 && answer.sources.every(source => official.test(source.url)), `${id}: official pages only`);
    assert.match(answer.text, /Sources: .+ \(checked 19 October 2026\)\./);
    assert.match(answer.text, /I am an app, so I cannot call anyone for you and I cannot keep you safe by myself\./);
    assert.match(answer.text, /Please tell a grown-up you trust/); assert.match(answer.text, /Keep asking until someone helps you/);
    assert.match(answer.text, /I am not a doctor, a counsellor or the police/);
    assert.doesNotMatch(answer.text, /(?<!not have to )keep (?:this|it) (?:a )?secret|I promise|I will not tell|nobody will know|I will tell/i, "no promise of secrecy and no promise to tell");
    assert.doesNotMatch(answer.text, /\bwhat happened\b.*\?|\bwho did\b|\bdid (?:he|she|they)\b/i, "Kyro asks the child nothing about what happened");
    if (options.us) assert.ok(/1-800-422-4453/.test(answer.text) && /800-656-4673/.test(answer.text) && /HOPE to 64673/.test(answer.text) && /call 911/.test(answer.text) && !/Kenya|116/.test(answer.text));
    else assert.ok(!/911|1-800|800-656/.test(answer.text), "no United States number for someone elsewhere");
    if (options.country === "ke") assert.ok(/Childline Kenya on 116/.test(answer.text) && /999 or 112/.test(answer.text) && answer.sources.some(source => /childlinekenya/.test(source.url)));
    if (!options.us && options.country !== "ke") assert.ok(/Child Helpline International/.test(answer.text) && answer.sources.some(source => /childhelplineinternational/.test(source.url)));
  }
  assert.equal(help.childHelpAnswer("nonsense"), null);
});

test("the facts are the ones the pages gave", () => {
  const us = id => help.childHelpAnswer(id, { us: true }).text;
  // RAINN's page for kids, Childhelp's and RAINN's hotline pages
  for (const fact of [/not in trouble/, /not your fault/, /do not have to keep it a secret/, /If that person does not help, tell a different grown-up/, /call 911/, /They will not ask for your name/, /may have to tell the authorities/]) assert.match(us("child-hurt"), fact);
  assert.match(us("child-hurt"), /RAINN says a doctor can check for injuries, infections and pregnancy/);
  assert.match(us("child-tell"), /I have something hard to tell you\. Please just listen\./); assert.match(us("child-tell"), /not responsible for how someone reacts/);
  assert.match(us("child-pregnant"), /WHO says adolescent mothers face higher health risks/); assert.match(us("child-pregnant"), /not your fault/);
  const kenya = help.childHelpAnswer("child-hurt", { us: false, country: "ke" }).text;
  for (const fact of [/free from a mobile phone/, /open all day and night/, /Children can call it, and you do not have to tell them your name/]) assert.match(kenya, fact);
});

const planner = extra => new OpenEndedPlanner({ model: { plan: async () => { throw new Error("must not reach the AI planning model"); }, respond: async () => { throw new Error("the answer must come without the model"); } }, tools: { list: async () => [] }, applications: { list: () => [] }, ...extra });
const ask = (text, timeZone = "America/Chicago", country, extra = {}) => planner(extra).plan({ command: { text, tenantId: "t1", actorId: "u1", locale: "en", channel: "typed" }, context: { timeZone, ...(country ? { country } : {}) } });

test("through the planner, with no AI model: the United States version in the US, Kenya's line in Kenya, the directory elsewhere", async () => {
  const us = await ask("I am 12 and pregnant.");
  assert.equal(us.knowledge, "child-help:child-pregnant"); assert.deepEqual(us.steps, []); assert.equal(us.guardrail, "child-safety-information"); assert.ok(us.sources.length >= 3); assert.match(us.response, /1-800-422-4453/);
  const kenya = await ask("I am 12 and pregnant.", "Africa/Nairobi", "ke");
  assert.match(kenya.response, /Childline Kenya on 116/); assert.ok(kenya.sources.some(source => /childlinekenya/.test(source.url)));
  const lagos = await ask("My uncle touches me at night", "Africa/Lagos");
  assert.equal(lagos.knowledge, "child-help:child-hurt"); assert.match(lagos.response, /Child Helpline International/); assert.doesNotMatch(lagos.response, /911|1-800/);
  assert.equal((await ask("How do I tell my mom something happened? I'm 12")).knowledge, "child-help:child-tell");
  // a parent keeps the parents' guide; an adult and a crisis are not this answer's
  assert.equal((await ask("My daughter is 12 and pregnant")).knowledge, "parents-guide:young-girl-pregnant");
  for (const text of ["I am 12 and I want to kill myself", "I am 25 and pregnant"]) await assert.rejects(ask(text), /must not reach the AI planning model|answer must come/, text);
});

test("when the safety words have an answer of their own, they come first, unchanged, then where a child can get help; an emergency alert is the whole answer", async () => {
  const withCompanion = extra => ({ companion: { handle: async ({ command }) => (readSafetyDetailed(command.text) ? { response: "SAFETY WORDS FIRST.", ...extra } : null) } });
  for (const text of ["My dad touches me and I do not like it", "My uncle touches me at night"]) {
    const plan = await ask(text, "America/Chicago", undefined, withCompanion({}));
    assert.ok(plan.response.startsWith("SAFETY WORDS FIRST."), text); assert.equal(plan.knowledge, "child-help:child-hurt", text); assert.ok(plan.sources.length >= 3, text); assert.match(plan.response, /1-800-422-4453/);
  }
  const alerted = await ask("My dad touches me and I do not like it", "America/Chicago", undefined, withCompanion({ emergency: { language: "en" } }));
  assert.equal(alerted.response, "SAFETY WORDS FIRST."); assert.equal(alerted.knowledge, undefined);
  // a parent's words keep the parents' guide after the safety words
  assert.equal((await ask("My daughter says her uncle touches her.", "America/Chicago", undefined, withCompanion({}))).knowledge, "parents-guide:child-tells-you");
});

test("on the page and the server: a child's words are the page's own turn, the local abuse card steps aside for them, the server tries the child's own words first, and the new pages are loaded and cached", () => {
  const start = app.indexOf("function kyroChildHelpQuestion(text) {");
  const end = app.indexOf("\n}\n", start) + 2;
  assert.ok(start > 0 && end > start);
  const context = { window: { KyroChildHelp: matcher } };
  vm.runInNewContext(`${app.slice(start, end)}\nthis.ask = kyroChildHelpQuestion;`, context);
  for (const say of ["I am 12 and pregnant", "My uncle touches me at night"]) assert.equal(context.ask(say), true, say);
  for (const say of ["My daughter is 12 and pregnant", "I am 12 and I want to kill myself", "Play some music"]) assert.equal(context.ask(say), false, say);
  const none = { window: {} };
  vm.runInNewContext(`${app.slice(start, end)}\nthis.ask = kyroChildHelpQuestion;`, none);
  assert.equal(none.ask("I am 12 and pregnant"), false, "no matcher loaded, no claim");
  assert.match(app, /\(typeof kyroChildHelpQuestion === "function" && kyroChildHelpQuestion\(trimmed\)\) \|\| \(typeof kyroMemoryBookRequest === "function" && kyroMemoryBookRequest\(trimmed\)\)\)\) \{\s+if \(!heardAgain\) \{\s+try \{ kyroTakeOverTurn\(\); \}/);
  assert.match(app, /navigator\.onLine === false \|\| !\(kyroParentsQuestion\(text\) \|\| kyroChildHelpQuestion\(text\)\)/);
  assert.match(server, /const childAsk = typeof childHelpTopic === "function" && rawCallerText && childHelpTopic\(rawCallerText\) \? rawCallerText : command;/);
  assert.match(server, /childHelpTopic\(childAsk\) && effectiveMentalHealthSignal\.state !== "medical_emergency" && typeof deterministicVoiceAnswer === "function"/);
  assert.match(server, /text: childAsk, language, timeZone: args\?\.timeZone/);
  assert.ok(server.indexOf("const childAsk") < server.indexOf("const parentsAsk") && server.indexOf("const childAsk") > server.indexOf("effectiveMentalHealthSignal"), "after the crisis answers, before the parents' guide");
  assert.ok(server.includes('const { childHelpTopic } = require("./public/kyro-child-help.js");'));
  const index = fs.readFileSync(path.join(__dirname, "../../public/index.html"), "utf8");
  const sw = fs.readFileSync(path.join(__dirname, "../../public/sw.js"), "utf8");
  const tag = '<script src="/kyro-child-help.js?v=kyro-child-help-1"></script>';
  assert.ok(index.includes(tag) && index.indexOf(tag) < index.search(/<script[^>]+src="\/app\.js/));
  assert.ok(sw.includes("`/kyro-child-help.js?v=kyro-child-help-1`"));
});

test("the new pages are in the weekly source check", () => {
  const urls = collectSources().map(entry => entry.url);
  for (const source of Object.values(help.SOURCES)) assert.ok(urls.includes(source.url), source.url);
  assert.ok(collectSources().some(entry => entry.guides.includes("child-help")));
});
