"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const topics = require("../../public/kyro-parents-topics.js");
const guide = require("../../nexus/knowledge/parents-guide.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { collectSources } = require("../../scripts/check-guide-sources.js");

// A guide for PARENTS in the United States and in Africa: talking with a child about the body, growing up and relationships; the signs of abuse; what to do if a child tells you; a young girl who is pregnant; whom to call.
// Asked for by the owner after a call about pre-teen pregnancy, rape and molestation in poor communities. It is information from official pages and nothing more, and it needs a child protection specialist's review.
const ALL = Object.keys(guide.TOPICS);
const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
const server = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");

test("which parent's questions get which topic", () => {
  const yes = [
    ["How do I talk to my daughter about sex?", "talk-with-your-child"], ["How do I talk to my daughter about her first period?", "talk-with-your-child"], ["How do I talk to my son about consent?", "talk-with-your-child"], ["What should I say to my 11 year old about puberty?", "talk-with-your-child"],
    ["I am a single dad. How do I explain periods to my daughter?", "talk-with-your-child"], ["How can I get my teen to open up about boyfriends?", "talk-with-your-child"], ["My daughter is hiding something from me, how do I get her to talk?", "talk-with-your-child"],
    ["What are the signs of child sexual abuse?", "signs-of-abuse"], ["How do I know if my child is being abused?", "signs-of-abuse"], ["What are the warning signs of grooming in children?", "signs-of-abuse"], ["Could my daughter be sexually abused?", "signs-of-abuse"],
    ["What do I do if my child tells me she was molested?", "child-tells-you"], ["My daughter told me she was raped", "child-tells-you"], ["My daughter was raped", "child-tells-you"], ["My son told me an adult touched him sexually, what do I do?", "child-tells-you"], ["What should I do if my niece says her uncle has been touching her sexually?", "child-tells-you"],
    ["My 12 year old daughter is pregnant, what do I do?", "young-girl-pregnant"], ["My daughter is 11 and pregnant. Who do I call?", "young-girl-pregnant"], ["My 13-year-old niece is pregnant", "young-girl-pregnant"], ["My preteen is pregnant what do I do", "young-girl-pregnant"],
    ["Who do I call to report child abuse?", "get-help-now"], ["Where can I get help for my child who was abused?", "get-help-now"], ["What is the child abuse hotline number?", "get-help-now"], ["How do I report child sexual abuse?", "get-help-now"],
    ["How can you help parents with their kids?", "parents-overview"], ["As a single mom how can you help me with my daughter?", "parents-overview"]
  ];
  for (const [text, id] of yes) assert.equal(topics.parentsTopic(text), id, text);
});

test("a child speaking for themselves, harm to a child or to oneself, records, a health worker's cases, an adult, and things that only share a word are never taken", () => {
  for (const text of ["I am 12 and pregnant", "I was raped, who do I call?", "My dad touches me and I do not like it", "I want to hurt my daughter", "I want to kill myself", "I might beat my son", "My daughter is pregnant, what should I eat?", "My daughter is 25 and pregnant",
    "How do I talk to my boss about a raise?", "How do I talk to my daughter about her homework?", "What are the signs of diabetes?", "Log that my daughter had her period", "My patients who were abused", "Who do I call about a broken pipe?", "What is child support?", "", "x".repeat(400)]) assert.equal(topics.parentsTopic(text), null, text);
});

const official = /^https:\/\/(?:www\.)?(?:cdc\.gov|childhelphotline\.org|acf\.gov|unicef\.org|who\.int|childlinekenya\.co\.ke|africa\.unwomen\.org|childhelplineinternational\.org)\//;

test("every answer, in the United States, WHO and Kenya versions, names official pages that open, the date read and the closing line, and gives no legal or medical instruction beyond the pages", () => {
  for (const id of ALL) for (const options of [{ us: true }, { us: false }, { us: false, country: "ke" }]) {
    const answer = guide.parentsGuideAnswer(id, options);
    assert.ok(answer, `${id} ${JSON.stringify(options)}`);
    assert.equal(answer.topic, id);
    assert.ok(answer.sources.length >= 1 && answer.sources.every(source => official.test(source.url) && source.name), id);
    assert.match(answer.text, /Sources: .+ \(checked 19 October 2026\)\. This is general information, not medical or legal advice, and it does not replace a doctor, a child protection service or the police\. If a child may be in danger, get help now\.$/, id);
    assert.doesNotMatch(answer.text, /\byou must report\b|\byou are required to\b|\bI recommend\b|\bI diagnose\b|\bthe abuser\b|\bconfront\b|\bpromiscu/i, id);
    if (options.us) assert.ok(!/Kenya|116|1195/.test(answer.text), `${id}: no Kenya lines in the United States version`);
    else if (id !== "parents-overview" || options.country) assert.ok(!/\bcall 911\b/.test(answer.text), `${id}: no 911 outside the United States`);
    if (options.country === "ke" && guide.TOPICS[id].kenya) assert.ok(/Childline Kenya/.test(answer.text) && /\b116\b/.test(answer.text) && /1195/.test(answer.text) && answer.sources.some(source => /childlinekenya/.test(source.url)), `${id}: Kenya lines`);
    else if (!options.us) assert.ok(!/Childline Kenya, the national/.test(answer.text), `${id}: Kenya's lines only in Kenya`);
  }
  assert.equal(guide.parentsGuideAnswer("nonsense"), null);
});

test("the facts in the United States answers are the ones the pages gave", () => {
  const us = id => guide.parentsGuideAnswer(id, { us: true }).text;
  for (const fact of [/1-800-422-4453/, /text GO to 800\.422\.4453/, /call 911/, /cannot find out what happened to a child/, /not give legal advice|give legal advice/]) assert.match(us("parents-overview"), fact);
  for (const fact of [/series of discussions that begin early, happen often and continue over time/, /before a girl's first period/, /private space/, /ask what she already knows/, /stick to the facts/, /okay to say you feel uncomfortable or do not have all the answers/, /avoid overreacting/, /sons and other male figures/, /more likely to delay it/, /know who is supervising your child/]) assert.match(us("talk-with-your-child"), fact);
  for (const fact of [/under 18/, /cannot give informed consent/, /About 90%/, /at least one in four girls and one in 20 boys/, /torn, stained or bloody underclothes/, /bed-wetting at an older age/, /advanced or unusual/, /signs alone do not prove abuse/]) assert.match(us("signs-of-abuse"), fact);
  for (const fact of [/first step, Childhelp says, is to believe your child/, /Child Protective Services/, /toll-free number/, /within 72 hours/, /120 hours, which is 5 days/, /does not mention children/, /2 to 6 weeks/, /reasonable cause to suspect child abuse must report/]) assert.match(us("child-tells-you"), fact);
  for (const fact of [/eclampsia/, /low birth weight and preterm birth/, /child sexual abuse increases the risk of unintended pregnancy/, /Take her to a health care provider as soon as you can/, /laws differ by state/]) assert.match(us("young-girl-pregnant"), fact);
  for (const fact of [/immediate danger, call 911/, /text GO to 800\.422\.4453/, /Spanish is spoken/, /most states have a toll-free number/]) assert.match(us("get-help-now"), fact);
});

test("the facts in the Africa versions are the ones the pages gave, and Kenya's lines are Childline Kenya's own", () => {
  const who = (id, country) => guide.parentsGuideAnswer(id, { us: false, country }).text;
  for (const fact of [/UNICEF says it is best to start the conversation early/, /before a girl's first period/, /sons and other male figures/, /nurturing, non-violent parenting/]) assert.match(who("talk-with-your-child"), fact);
  for (const fact of [/often hidden/, /1 in 5 women and 1 in 7 men/, /advanced or unusual/]) assert.match(who("signs-of-abuse"), fact);
  for (const fact of [/within 72 hours/, /120 hours, which is 5 days/, /effective emergency care and appropriate psychosocial support/, /call your local emergency number/]) assert.match(who("child-tells-you"), fact);
  for (const fact of [/severe newborn conditions/, /quality maternal care/]) assert.match(who("young-girl-pregnant"), fact);
  assert.doesNotMatch(who("young-girl-pregnant"), /highest adolescent birth rate/, "a statistic that gives a worried parent nothing to act on is left out");
  for (const fact of [/Cece Yara Child Helpline/, /Sauti 116/, /Childline South Africa/]) assert.match(who("get-help-now"), fact);
  const kenya = who("get-help-now", "ke");
  for (const fact of [/is 116: it is free from a mobile phone, open 24 hours/, /confidentially and anonymously/, /0724 555 251/, /\+254 722 116 116/, /Kenya's national helpline 1195 is also toll-free and open 24 hours/]) assert.match(kenya, fact);
});

const planner = () => new OpenEndedPlanner({ model: { plan: async () => { throw new Error("must not reach the AI planning model"); }, respond: async () => { throw new Error("the guide must answer without the model"); } }, tools: { list: async () => [] }, applications: { list: () => [] } });
const ask = (text, timeZone, country) => planner().plan({ command: { text, tenantId: "t1", actorId: "u1", locale: "en", channel: "typed" }, context: { timeZone, ...(country ? { country } : {}) } });

test("through the planner, with no AI model: the United States version in the US, the Africa version elsewhere, Kenya's lines in Kenya; a child speaking for themselves and an adult are not taken; the plain 'who do I call' about a child is this guide's", async () => {
  const us = await ask("My daughter told me she was raped", "America/Chicago");
  assert.equal(us.knowledge, "parents-guide:child-tells-you"); assert.deepEqual(us.steps, []); assert.equal(us.guardrail, "child-safety-information");
  assert.ok(us.sources.length >= 3 && us.sources.every(source => /cdc\.gov|childhelphotline\.org|acf\.gov|who\.int/.test(source.url))); assert.match(us.response, /checked 19 October 2026/); assert.match(us.response, /call 911/);
  const lagos = await ask("My daughter told me she was raped", "Africa/Lagos");
  assert.equal(lagos.knowledge, "parents-guide:child-tells-you"); assert.doesNotMatch(lagos.response, /call 911|Childline Kenya, the national/);
  const kenya = await ask("My daughter is 11 and pregnant. Who do I call?", "Africa/Nairobi", "ke");
  assert.equal(kenya.knowledge, "parents-guide:young-girl-pregnant"); assert.match(kenya.response, /Childline Kenya/); assert.ok(kenya.sources.some(source => /childlinekenya/.test(source.url)));
  assert.equal((await ask("My daughter is 11 and pregnant. Who do I call?", "America/Chicago")).knowledge, "parents-guide:young-girl-pregnant", "the workspace words in 'who do I call' do not hold it back");
  assert.equal((await ask("Who do I call to report child abuse?", "America/Chicago")).knowledge, "parents-guide:get-help-now");
  assert.equal((await ask("How do I talk to my daughter about her first period?", "America/Chicago")).knowledge, "parents-guide:talk-with-your-child", "before the women's health cycle answer");
  assert.equal((await ask("What are the signs of child sexual abuse?", "Africa/Nairobi", "ke")).knowledge, "parents-guide:signs-of-abuse");
  for (const text of ["I am 12 and pregnant", "I was raped, who do I call?", "I want to hurt my daughter"]) await assert.rejects(ask(text, "America/Chicago"), /must not reach the AI planning model|guide must answer/, text);
});

test("on the page and the server: the parents' question is the page's own and the server tries the person's own words first, before the women's guide; the script is loaded before app.js and cached", () => {
  const start = app.indexOf("function kyroParentsQuestion(text) {");
  const end = app.indexOf("\n}\n", start) + 2;
  assert.ok(start > 0 && end > start);
  const context = { window: { KyroParentsTopics: topics } };
  vm.runInNewContext(`${app.slice(start, end)}\nthis.ask = kyroParentsQuestion;`, context);
  for (const say of ["My daughter told me she was raped", "How do I talk to my daughter about sex?", "My daughter is 11 and pregnant", "What are the signs of child sexual abuse?"]) assert.equal(context.ask(say), true, say);
  for (const say of ["I am 12 and pregnant", "I want to hurt my daughter", "Play some music", "How do I lower my blood pressure?"]) assert.equal(context.ask(say), false, say);
  const none = { window: {} };
  vm.runInNewContext(`${app.slice(start, end)}\nthis.ask = kyroParentsQuestion;`, none);
  assert.equal(none.ask("My daughter told me she was raped"), false, "no matcher loaded, no claim");
  assert.match(app, /\(typeof kyroParentsQuestion === "function" && kyroParentsQuestion\(trimmed\)\)\)\) \{\s+if \(!heardAgain\) \{\s+try \{ kyroTakeOverTurn\(\); \}/);
  assert.match(server, /const parentsAsk = typeof parentsTopic === "function" && rawCallerText && parentsTopic\(rawCallerText\) \? rawCallerText : command;/);
  assert.match(server, /parentsTopic\(parentsAsk\) && effectiveMentalHealthSignal\.state !== "medical_emergency"/);
  assert.match(server, /text: parentsAsk, language, timeZone: args\?\.timeZone/);
  assert.ok(server.indexOf("const parentsAsk") < server.indexOf("const womensAsk") && server.indexOf("const parentsAsk") > server.indexOf("buildSupportPacket"), "after a crisis, before the women's guide");
  assert.ok(server.includes('const { parentsTopic } = require("./public/kyro-parents-topics.js");'));
  const index = fs.readFileSync(path.join(__dirname, "../../public/index.html"), "utf8");
  const sw = fs.readFileSync(path.join(__dirname, "../../public/sw.js"), "utf8");
  const tag = '<script src="/kyro-parents-topics.js?v=kyro-parents-topics-1"></script>';
  assert.ok(index.includes(tag) && index.indexOf(tag) < index.search(/<script[^>]+src="\/app\.js/), "before app.js");
  assert.ok(sw.includes("`/kyro-parents-topics.js?v=kyro-parents-topics-1`"));
});

test("when a person says a child is being abused, the safety response keeps the Childhelp line, adds Kenya's 116, and points to the guide", () => {
  const safety = require("../../public/nexus-mental-health-behavioral-wellness.js");
  const reply = safety.buildSupportPacket("My child is being abused by a neighbour", { language: "en" }).userVisibleStatus;
  assert.match(reply, /Childhelp National Child Abuse Hotline is 1-800-422-4453/);
  assert.match(reply, /In Kenya, Childline Kenya is 116, free and open 24 hours/);
  assert.match(reply, /what are the signs of child sexual abuse, or: what do I do if my child tells me she was abused/);
  const other = safety.buildSupportPacket("someone is abusing me", { language: "en" }).userVisibleStatus;
  assert.doesNotMatch(other, /Childhelp|Kenya/, "only when a child is involved");
});

test("the new pages are in the weekly source check", () => {
  const urls = collectSources().map(entry => entry.url);
  for (const source of Object.values(guide.SOURCES)) assert.ok(urls.includes(source.url), source.url);
  assert.ok(collectSources().some(entry => entry.guides.includes("parents-guide")));
});
