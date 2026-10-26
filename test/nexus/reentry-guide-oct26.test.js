"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const matcher = require("../../public/kyro-reentry-topics.js");
const guide = require("../../nexus/knowledge/reentry-guide.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { defaultApplicationManifests } = require("../../nexus/apps/default-manifests.js");
const { fakeMemory } = require("./farmwork-fake.js");
const { collectSources } = require("../../scripts/check-guide-sources.js");

// Asked for on 26 October 2026 by the owner, who works with people coming home after prison or jail: they are "technology illiterate", they will have "a donated phone or use the library computer", their schooling runs "from little to none to high school",
// and "she is a source, not an educational site". So this guide answers a plain question from official pages (the United States, and California), names the pages and the date they were read, says what the pages do not cover, and goes with the person one step at a time.
// It is taken ONLY when the person says they are coming home or have a record or are under supervision; it gives no legal advice, never says what breaks a condition of supervision, and never asks for a record, a case or a number.
const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
const server = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");
const ids = Object.keys(guide.TOPICS);
const UNKIND = /\b(?:inmates?|prisoners?|ex-?offenders?|ex-?cons?|felons?|parolees?|offenders?|recidivis\w+|returning citizens?|drug felons?|fleeing felons?)\b/i;

function planner() {
  const model = { plan: async () => { throw new Error("the AI model must not be asked"); }, respond: async () => null };
  const tools = [{ tool_id: "lists.create", domain: "lists", description: "", risk_tier: "low", confirmation_required: false }];
  return new OpenEndedPlanner({ model, tools: { list: async () => tools }, applications: { list: () => defaultApplicationManifests() }, memory: Object.assign(fakeMemory(), { search: async () => [] }) });
}
const ask = (p, text, timeZone = "America/Chicago") => p.plan({ command: { text, tenantId: "t1", actorId: "u1", locale: "en" }, context: { timeZone } });

test("the guide has the topics it promises, each short enough to be read aloud, with a key phrase, three ways to ask it, and only pages it names", () => {
  assert.equal(ids.length, 29);
  assert.deepEqual(Object.keys(guide.PHRASES).sort(), [...ids].sort());
  assert.deepEqual(Object.keys(guide.KEYS).sort(), [...ids].sort());
  for (const id of ids) {
    const topic = guide.TOPICS[id];
    assert.match(id, /^(?:ca-)?reentry-[a-z-]+$/);
    assert.ok(topic.title.length > 8 && topic.title.length < 90, id);
    assert.ok(topic.text.length >= 600 && topic.text.length <= 1800, `${id}: ${topic.text.length} characters`);
    const key = guide.KEYS[id];
    assert.ok(key.length >= 8 && key.length <= 40 && !/[^A-Za-z0-9 .,']/.test(key), `${id}: key "${key}"`);
    assert.ok(topic.text.slice(0, 700).includes(key), `${id}: the key is in the first 700 characters`);
    assert.ok(guide.PHRASES[id].length >= 3, id);
    // (Kyro's own tips have no official page: they say so at the start of the answer, and carry no sources)
    assert.ok(topic.kind === "own" ? topic.sources.length === 0 : topic.sources.length >= 1, id);
    for (const source of topic.sources) assert.ok(guide.SOURCES[source], `${id}: source ${source}`);
  }
  for (const key of Object.keys(guide.SOURCES)) {
    const source = guide.SOURCES[key];
    assert.match(source.url, /^https:\/\/[^\s]+$/, key);
    assert.match(source.name, /\((?:[^)]*\d{4}[^)]*|[^)]*no date shown[^)]*|[^)]*undated[^)]*)\)/, `${key}: the page's own date, or that it shows none`);
  }
});

test("the words are kind and plain: no unkind word for a person, no 'e.g.', nothing that promises to do the thing for the person", () => {
  for (const id of ids) {
    const text = guide.TOPICS[id].text;
    assert.doesNotMatch(text, UNKIND, id);
    assert.doesNotMatch(text, /\be\.g\.|\bi\.e\./i, id);
    assert.doesNotMatch(text, /\bI (?:will|can) (?:apply|file|submit|call|pay|sign|register)\b/i, id);
    assert.doesNotMatch(guide.TOPICS[id].title, UNKIND, id);
  }
});

test("an answer names its pages and the date they were read, says it is not legal advice, asks for nothing private, and gives the emergency lines", () => {
  for (const id of ids.filter(entry => guide.TOPICS[entry].kind === "own")) {
    const answer = guide.reentryAnswer(id, { us: true });
    assert.match(answer.text, /^These are Kyro's own tips, not from a government page\. /, id);
    assert.deepEqual(answer.sources, [], id);
    assert.doesNotMatch(answer.text, /\(checked /, id);
    assert.match(answer.text, /simple habits, not rules/, id);
  }
  assert.deepEqual(ids.filter(entry => guide.TOPICS[entry].kind === "own").sort(), ["reentry-ai-basics", "reentry-library-computer"]);
  for (const id of ids.filter(entry => guide.TOPICS[entry].kind !== "own")) {
    const answer = guide.reentryAnswer(id, { us: true });
    assert.ok(answer.text.includes(`(checked ${guide.CHECKED_ON})`), id);
    for (const source of answer.sources) assert.ok(answer.text.includes(source.name), id);
    assert.match(answer.text, /not a lawyer/i, id);
    assert.match(answer.text, /do not need to tell me/i, id);
    assert.match(answer.text, /\b911\b/, id);
    assert.match(answer.text, /official page/i, id);
  }
  // a federal topic asked by a person who names California: the lead says it is the federal rule, and whether California's own page was read
  assert.match(guide.reentryAnswer("reentry-snap", { us: true, state: "ca" }).text, /^This is the federal rule\. /);
  assert.match(guide.reentryAnswer("reentry-housing", { us: true, state: "ca" }).text, /^This is the federal rule\. I have not read California's own page on this/);
  // a federal topic asked by a person who did not name California says that California has its own page
  assert.match(guide.reentryAnswer("reentry-snap", { us: true }).text, /California has its own rules on this\. Say California and I will read that page\./);
  assert.doesNotMatch(guide.reentryAnswer("reentry-ssn-card", { us: true }).text, /California has its own rules/);
  assert.match(guide.reentryAnswer("reentry-snap", { us: false }).text, /^These come from United States government pages\./);
  for (const federal of Object.keys(guide.CALIFORNIA_OF)) { assert.ok(guide.TOPICS[federal], federal); assert.ok(guide.TOPICS[guide.CALIFORNIA_OF[federal]], guide.CALIFORNIA_OF[federal]); }
});

test("every way of asking, said by a person who is coming home, reaches its own topic; a California topic is reached by naming California", () => {
  for (const [id, list] of Object.entries(guide.PHRASES)) {
    for (const phrase of list) {
      for (const opener of ["I just got out of prison. ", "I have a felony record. "]) {
        const say = (/^ca-/.test(id) ? opener.replace(/\. $/, " in California. ") : opener) + phrase;
        assert.equal(matcher.reentryTopic(say), id, say);
      }
    }
  }
});

test("a question is taken only from a person who says they are coming home, have a record or are under supervision; the same question from anyone else is left to the rest of Kyro", () => {
  const take = {
    "I just got out of prison. Where do I start?": "reentry-start", "I just got out and I lost my social security card, how do I get a new one?": "reentry-ssn-card", "Can I get food stamps with a felony?": "reentry-snap",
    "What happens to my SSI when I go to jail?": "reentry-ssi-ssdi", "How do I get health insurance after prison?": "reentry-health", "Can I get an apartment with a felony on my record?": "reentry-housing",
    "How do I open a bank account when I just got out of prison?": "reentry-bank", "Will an employer hire me with a felony?": "reentry-jobs", "Can I vote if I have a felony conviction?": "reentry-voting",
    "How do I get my record expunged?": "reentry-record-clearing", "I'm on probation and I need to know what a check-in is": "reentry-supervision", "Can I get a GED now that I'm out of prison?": "reentry-school",
    "I just got out of jail and need a cheap phone plan": "reentry-phone-lifeline", "I just got out and someone texted me asking for money, is that a scam?": "reentry-scams", "I just got out and I want to use the library computer safely": "reentry-library-computer",
    "I just got out of prison in California, can I get Medi-Cal?": "ca-reentry-medi-cal", "Can I vote in California with a felony?": "ca-reentry-voting", "How do I get a California ID? I just got out of prison": "ca-reentry-id",
    "How does probation work? I have a felony record": "reentry-supervision", "I just got out of prison. What is 211?": "reentry-help",
    "I just got out of prison. What is an AI assistant?": "reentry-ai-basics", "I just got out of prison and I use the library computer, is it safe?": "reentry-library-computer",
    "Walk me through locking my phone and using a public computer after prison": "reentry-phone-safety"
  };
  for (const [say, id] of Object.entries(take)) assert.equal(matcher.reentryTopic(say), id, say);
  for (const say of ["How do I replace my social security card?", "Can I get food stamps?", "How do I open a bank account?", "I want to vote", "What is the weather in prison town?", "Remind me about my parole meeting tomorrow", "Call my parole officer",
    "My business hired someone with a felony, what should I do?", "Play some music", "How do I ask the school to test my child?", "I am a farmer and want to know how to grow maize", "Show my notes", "Apply for food stamps for me. I just got out of prison."]) {
    assert.equal(matcher.reentryTopic(say), null, say);
  }
  // Kenya and Nigeria have no pages here: named, or the device is there, the rest of Kyro answers as before
  assert.equal(matcher.reentryTopic("I just got out of prison in Nairobi, how do I get an ID?"), null);
  assert.equal(matcher.reentryTopic("I was released from jail in Lagos, where do I start?"), null);
  assert.equal(matcher.reentryTopic("I just got out of prison. Where do I start?", { country: "ke" }), null);
  assert.equal(matcher.reentryTopic("I just got out of prison. Where do I start?", { country: "ng" }), null);
  // a personal emergency is the safety layer's
  assert.equal(matcher.reentryTopic("I want to hurt myself, I just got out of prison"), null);
  assert.equal(matcher.reentryTopic("I just got out of prison and I am in a crisis, who do I call?"), null);
  // being on parole is not itself a question about parole
  assert.equal(matcher.reentryTopic("I'm on parole. What is 211?"), "reentry-help");
  assert.equal(matcher.reentryTopic("I'm on parole. Can I vote?"), "reentry-voting");
});

test("nothing Kyro is already known to say, or already answers in another guide, is taken", () => {
  const verified = require("./fixtures/verified-say-phrases.json").phrases;
  const mine = new Set(["i just got out of prison. where do i start", "can i get food stamps? i just got out of prison", "walk me through getting a new social security card after prison", "walk me through using kyro when i am coming home from prison"]);
  for (const phrase of verified) if (!mine.has(phrase)) assert.equal(matcher.reentryTopic(phrase), null, phrase);
  for (const name of ["safety-guide", "special-ed-guide", "us-community-support", "parents-guide", "chronic-conditions", "womens-health", "church-guide", "athlete-guide", "money-guide"]) {
    const other = require(`../../nexus/knowledge/${name}.js`);
    for (const list of Object.values(other.PHRASES || {})) for (const phrase of (Array.isArray(list) ? list : [])) assert.equal(matcher.reentryTopic(phrase), null, `${name}: ${phrase}`);
  }
});

test("through the planner, with no AI model: the checked answer, the guide's label, its sources, the walk-through offer; California named gets California's; Europe gets the 'United States pages' lead; others are not taken", async () => {
  const p = planner();
  const start = await ask(p, "I just got out of prison. Where do I start?");
  assert.equal(start.knowledge, "reentry-guide:reentry-start");
  assert.match(start.response, /checked 26 October 2026/);
  assert.ok(start.sources.length >= 1);
  const snap = await ask(p, "I just got out of prison, can I get food stamps?", "America/Los_Angeles");
  assert.equal(snap.knowledge, "reentry-guide:reentry-snap");
  const medical = await ask(p, "I just got out of prison in California, can I get Medi-Cal?", "America/Los_Angeles");
  assert.equal(medical.knowledge, "reentry-guide:ca-reentry-medi-cal");
  const abroad = await ask(p, "I just got out of prison, can I get food stamps?", "Europe/London");
  assert.equal(abroad.knowledge, "reentry-guide:reentry-snap");
  assert.match(abroad.response, /^These come from United States government pages\./);
  // the same words from anyone else are not this guide's
  const other = await ask(p, "Can I get food stamps?");
  assert.notEqual(String(other.knowledge).split(":")[0], "reentry-guide");
  for (const [text, zone] of [["I just got out of prison in Nairobi, how do I get an ID?", "Africa/Nairobi"], ["Remind me about my parole meeting", "America/Chicago"]]) {
    const plan = await ask(p, text, zone).catch(() => null);
    assert.notEqual(plan?.knowledge?.split(":")[0], "reentry-guide", text);
  }
});

test("on the page and the server: the question is the page's own, the server tries the person's words first, the script is loaded before app.js and cached, and the pages are in the weekly check", () => {
  const start = app.indexOf("function kyroReentryQuestion(text) {");
  const end = app.indexOf("\n}\n", start) + 2;
  assert.ok(start > 0 && end > start);
  const make = zone => { const context = { window: { KyroReentryTopics: matcher }, Intl: { DateTimeFormat: () => ({ resolvedOptions: () => ({ timeZone: zone }) }) } }; vm.runInNewContext(`${app.slice(start, end)}\nthis.ask = kyroReentryQuestion;`, context); return context.ask; };
  const chicago = make("America/Chicago");
  for (const say of ["I just got out of prison. Where do I start?", "Can I vote if I have a felony conviction?"]) assert.equal(chicago(say), true, say);
  for (const say of ["Can I get food stamps?", "Play some music", "Remind me about my parole meeting"]) assert.equal(chicago(say), false, say);
  assert.equal(make("Africa/Nairobi")("I just got out of prison. Where do I start?"), false, "a device in Nairobi");
  assert.equal(make("Africa/Lagos")("I just got out of prison. Where do I start?"), false, "a device in Lagos");
  const none = { window: {} };
  vm.runInNewContext(`${app.slice(start, end)}\nthis.ask = kyroReentryQuestion;`, none);
  assert.equal(none.ask("I just got out of prison. Where do I start?"), false, "no matcher loaded, no claim");
  assert.match(app, /\(typeof kyroReentryQuestion === "function" && kyroReentryQuestion\(trimmed\)\)\)\) \{\s+if \(!heardAgain\) \{\s+try \{ kyroTakeOverTurn\(\); \}/);
  assert.match(server, /const reentryAsk = typeof reentryTopic === "function" && rawCallerText && reentryTopic\(rawCallerText\) \? rawCallerText : command;/);
  assert.match(server, /reentryTopic\(reentryAsk\) && effectiveMentalHealthSignal\.state !== "medical_emergency" && typeof deterministicVoiceAnswer === "function"/);
  assert.match(server, /text: reentryAsk, language, timeZone: args\?\.timeZone/);
  assert.ok(server.includes('const { reentryTopic } = require("./public/kyro-reentry-topics.js");'));
  const index = fs.readFileSync(path.join(__dirname, "../../public/index.html"), "utf8");
  const sw = fs.readFileSync(path.join(__dirname, "../../public/sw.js"), "utf8");
  const tag = '<script src="/kyro-reentry-topics.js?v=kyro-reentry-topics-1"></script>';
  assert.ok(index.includes(tag) && index.indexOf(tag) < index.search(/<script[^>]+src="\/app\.js/));
  assert.match(sw, /`\/kyro-reentry-topics\.js\?v=kyro-reentry-topics-1`/);
  const check = fs.readFileSync(path.join(__dirname, "../../scripts/check-guide-sources.js"), "utf8");
  assert.match(check, /const GUIDES = \[[^\]]*"reentry-guide"/);
  const collected = collectSources(path.join(__dirname, "../../nexus/knowledge"));
  for (const key of Object.keys(guide.SOURCES)) assert.ok(collected.some(entry => entry.url === guide.SOURCES[key].url && entry.guides.includes("reentry-guide")), `${key} is checked weekly (https only)`);
  const snapshot = JSON.parse(fs.readFileSync(path.join(__dirname, "../../nexus/knowledge/source-snapshot.json"), "utf8"));
  for (const key of Object.keys(guide.SOURCES)) assert.ok(snapshot.pages[guide.SOURCES[key].url], `${key} is in the saved copy of the pages`);
});

test("the guide's own words hold the line: no legal advice, no word on what breaks a condition of supervision, no promise that a thing will happen", () => {
  const supervision = guide.TOPICS["reentry-supervision"].text;
  assert.match(supervision, /ask your officer/i);
  assert.match(supervision, /cannot say if something breaks/i);
  for (const id of ids) {
    const text = guide.TOPICS[id].text;
    assert.doesNotMatch(text, /\byou will (?:get|be approved|qualify|win)\b|\bguarantee\b|\bwill not break your (?:parole|probation)\b|\bwill break your (?:parole|probation)\b/i, id);
  }
});
