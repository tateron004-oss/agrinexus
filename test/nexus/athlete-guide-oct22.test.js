"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const matcher = require("../../public/kyro-athlete-topics.js");
const guide = require("../../nexus/knowledge/athlete-guide.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { collectSources } = require("../../scripts/check-guide-sources.js");

// A checked guide for athletes, from a school team to a professional. Every figure and rule was read from an official page loaded on 22 October 2026 and is said in the page's own terms; what a page does not say, the answer says it does
// not say. Found by asking the live Kyro an athlete's real questions: it answered a rule or a safety question from the voice model's memory with no sources, and failed one outright ("help me build my personal brand as an athlete").
const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
const server = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");
const ALL = Object.keys(guide.TOPICS);

test("which questions get which topic", () => {
  const yes = [
    ["What can you do for athletes?", "athlete-overview"], ["How can you help a student athlete?", "athlete-overview"],
    ["What should I eat before and after a hard training session?", "athlete-nutrition"], ["What should a soccer player drink during a tournament?", "athlete-nutrition"],
    ["How do I know if I am not eating enough for my training?", "athlete-energy"], ["What is RED-S?", "athlete-energy"], ["What are the signs of an eating disorder in a wrestler?", "athlete-energy"],
    ["Is creatine allowed for college athletes?", "athlete-supplements"], ["Can I take a pre-workout supplement and still pass a drug test?", "athlete-supplements"], ["What is a therapeutic use exemption?", "athlete-supplements"], ["How do I check a medicine on Global DRO?", "athlete-supplements"],
    ["How much should a teenager lift?", "athlete-training"], ["How many days a week should a high school football player do strength training?", "athlete-training"],
    ["How much sleep and recovery does a college athlete need?", "athlete-recovery"], ["My hamstring tightened up during sprints, what should I do?", "athlete-recovery"], ["How many rest days should a young athlete take?", "athlete-recovery"],
    ["What is a concussion and when can an athlete return to play?", "athlete-concussion"], ["What are the signs of a concussion in a football player?", "athlete-concussion"],
    ["How do I stay safe running in the heat?", "athlete-heat"], ["What are the signs of heat exhaustion at football practice?", "athlete-heat"],
    ["I am a high school athlete and the pressure is getting to me", "athlete-mental"], ["How do I deal with performance anxiety in my sport?", "athlete-mental"],
    ["How do I report a coach who touches players inappropriately?", "athlete-safesport"], ["What is SafeSport?", "athlete-safesport"],
    ["What is the Eligibility Center?", "athlete-eligibility"], ["How do I get recruited for college basketball?", "athlete-eligibility"], ["How does a college athletic scholarship work?", "athlete-eligibility"],
    ["I am a college athlete, can I take a sponsorship deal?", "athlete-nil"], ["What does the NCAA say about NIL?", "athlete-nil"],
    ["How do I choose a sports agent and what should be in the contract?", "athlete-agent"], ["Does an athlete agent have to be registered?", "athlete-agent"],
    ["I am a pro athlete, how do taxes work when I play games in other states?", "athlete-taxes"], ["Do I owe taxes on my scholarship?", "athlete-taxes"], ["Do college athletes pay tax on NIL money?", "athlete-taxes"],
    ["Help me build my personal brand as an athlete", "athlete-brand"], ["Do I have to disclose a paid partnership on Instagram as an athlete?", "athlete-brand"], ["How do I trademark my nickname as a pro athlete?", "athlete-business"],
    ["I want to start a training academy for young athletes. Where do I start?", "athlete-business"],
    ["I manage a youth soccer club. How do I handle registration and fees?", "athlete-club"], ["Does a youth soccer league need to be a nonprofit?", "athlete-club"],
    ["What happens to my money and career after I stop playing?", "athlete-money"], ["How should an athlete handle a big signing bonus?", "athlete-money"]
  ];
  for (const [text, id] of yes) assert.equal(matcher.athleteTopic(text), id, text);
});

test("orders, records, the calendar, personal emergencies, other guides' questions and words that only share a spelling are never taken", () => {
  for (const text of ["Build me a meal plan for a 180 pound soccer player in preseason", "Make me a 4 week strength and conditioning plan for basketball", "Log a 45 minute strength session", "Show my workout log", "Remind me about practice",
    "Add practice to my calendar", "My calendar for the game", "Call my coach", "Play the football game on the radio", "Send my agent a message", "Save my meal plan",
    "I want to kill myself, the pressure from my team is too much", "I passed out at practice", "I think I am having a heart attack at the gym", "My coach touched me", "I have chest pain when I run",
    "What is the weather like for the game today?", "What should I eat if I have diabetes?", "How do I lose weight?", "Why should I rotate crops?", "How do I start an LLC?", "What is a good job training course?", "Track my spending",
    "What is the price of maize?", "Does a church have to file a Form 990?", "How much protein is in an egg?", "What is a good recipe for dinner?", "I want a sports bar business plan", "How do I become a real estate agent?",
    "What does a travel agent do?", "Tell me a joke", "", "x".repeat(400)]) assert.equal(matcher.athleteTopic(text), null, text || "(empty)");
});

test("every answer names official pages, the date they were read, and the closing line; none promises or files anything", () => {
  const known = /^https?:\/\/(?:www\.)?(?:irs\.gov|taxpayeradvocate\.irs\.gov|cdc\.gov|ncaa\.org|web3\.ncaa\.org|ncaaorg\.s3\.amazonaws\.com|eatright\.org|usada\.org|globaldro\.com|athleticsintegrity\.org|adak\.or\.ke|fmino\.gov\.ng|uscenterforsafesport\.org|maapp\.uscenterforsafesport\.org|govinfo\.gov|naia\.org|nfhs\.org|ftc\.gov|uspto\.gov|sba\.gov|consumerfinance\.gov|sec\.gov|nimh\.nih\.gov|medlineplus\.gov|988lifeline\.org|orthoinfo\.org|healthychildren\.org|aap\.org|nationaleatingdisorders\.org|nbpa\.com|nflpa\.com|sos\.state\.tx\.us|sos\.alabama\.gov|nata\.org)\//;
  for (const id of ALL) {
    const answer = guide.athleteAnswer(id);
    assert.ok(answer && answer.topic === id, id);
    if (id === "athlete-overview") { assert.equal(answer.sources.length, 0); assert.doesNotMatch(answer.text, /Sources:/); continue; }
    assert.ok(answer.sources.length >= 1 && answer.sources.every(source => known.test(source.url)), `${id}: official pages only`);
    assert.match(answer.text, /Sources: .+ \(checked 22 October 2026\)\. This is general information, not (?:medical|legal|tax or legal|financial, tax or legal) advice/, id);
    assert.doesNotMatch(answer.text, /\byou must (?:file|apply)\b|\bguarantee\b|\bwill (?:definitely|certainly)\b|\bI (?:will|can) (?:file|send|apply|sign)\b|\byou (?:should|need to) (?:take|buy|use) /i, id);
  }
  assert.equal(guide.athleteAnswer("nonsense"), null);
  for (const key of Object.keys(guide.SOURCES)) assert.match(guide.SOURCES[key].url, /^https?:\/\//, key);
  for (const id of ALL) for (const key of guide.TOPICS[id].sources) assert.ok(guide.SOURCES[key], `${id} names an unknown source ${key}`);
});

test("the figures are the ones the pages gave, and what a page does not say is said not to be said", () => {
  const text = id => guide.athleteAnswer(id).text;
  for (const fact of [/one to four hours before a workout/, /within an hour/, /about three hours before/, /2 percent of body weight/, /0\.75 grams of protein per pound/, /20 to 40 grams of protein/, /do not give amounts for your sport/]) assert.match(text("athlete-nutrition"), fact);
  for (const fact of [/relative energy deficiency in sport, called RED-S/, /three or more periods in a row/, /written for coaches and athletic trainers/, /I did not find a helpline/, /call or text 988/]) assert.match(text("athlete-energy"), fact);
  for (const fact of [/\(719\) 785-2000, option 2/, /NSF Certified for Sport/, /holds no information on supplements/, /at least 30 days before planned use/, /do not recognize each other's exemptions/, /I cannot tell you whether a product or medicine is allowed for you/]) assert.match(text("athlete-supplements"), fact);
  for (const fact of [/at least 60 minutes a day/, /at least 150 minutes a week/, /not training loads for a competitive athlete/, /uncontrolled high blood pressure/, /unsupervised home equipment/]) assert.match(text("athlete-training"), fact);
  for (const fact of [/8 to 10 hours/, /one to two rest days a week/, /no more than 10 percent/, /20 minutes at a time not directly on skin/, /do not list signs that mean see a doctor right away/]) assert.match(text("athlete-recovery"), fact);
  for (const fact of [/call 911 or go to the nearest emergency department/, /one pupil larger than the other/, /24 to 48 hours/, /six steps/, /at least 24 hours/, /do not address professional athletes separately/]) assert.match(text("athlete-concussion"), fact);
  for (const fact of [/stop all activity and get to a cool place/, /call 911/, /cool first and transport second/, /avoid salt tablets/, /within an hour/]) assert.match(text("athlete-heat"), fact);
  for (const fact of [/call or text 988/, /1-800-950-6264/, /1-866-488-7386/, /two weeks or more/, /do not speak to performance pressure/]) assert.match(text("athlete-mental"), fact);
  for (const fact of [/833-587-7233/, /anonymous reports/, /in addition to, and before/, /1-800-656-4673/, /within a 24-hour period/, /I will not describe them/]) assert.match(text("athlete-safesport"), fact);
  for (const fact of [/\$85/, /core GPA of at least 2\.3/, /a 2\.2/, /up to five years/, /by July 1/, /National Letter of Intent in 2024/, /I did not read the NCAA's amateurism standards/]) assert.match(text("athlete-eligibility"), fact);
  for (const fact of [/valid business purpose/, /\$600 or more/, /through NIL Go/, /22\.5 percent/, /could not read the College Sports Commission's own rules/, /state by state/]) assert.match(text("athlete-nil"), fact);
  for (const fact of [/within 14 days/, /within 72 hours/, /I could not read the revised text/, /Sports Agent Responsibility and Trust Act/, /I could not read the NCAA's rule on what signing with an agent does/]) assert.match(text("athlete-agent"), fact);
  for (const fact of [/\$2,000 or more/, /15\.3 percent/, /\$400 or more/, /Form 1040-ES/, /do not cover professional athletes or any state's rules/, /FAFSA/]) assert.match(text("athlete-taxes"), fact);
  for (const fact of [/#ad/, /#ambassador/, /nationwide/, /strongly encourages an attorney/]) assert.match(text("athlete-brand"), fact);
  for (const fact of [/under \$300/, /never pay|free and warns/, /do not mention sports, camps or youth programs/]) assert.match(text("athlete-business"), fact);
  for (const fact of [/\$250,000 or less/, /do not say how the IRS treats a local youth league/, /no official page on liability waivers/]) assert.match(text("athlete-club"), fact);
  for (const fact of [/reportfraud\.ftc\.gov/, /2013/, /I could not read an official page on disability insurance/]) assert.match(text("athlete-money"), fact);
  assert.match(text("athlete-overview"), /I diagnose nothing, file nothing and sign nothing, and I will not help anyone get around a drug test/);
});

test("outside the United States only what an official page says is stated; Kenya and Nigeria get the drug-testing and abuse pages that were read", () => {
  const kenya = guide.athleteAnswer("athlete-supplements", { us: false, country: "ke" });
  assert.match(kenya.text, /^These are United States rules and guidance, from American pages\./);
  assert.match(kenya.text, /Anti-Doping Agency of Kenya is the national anti-doping body/); assert.match(kenya.text, /info@adak\.or\.ke/);
  assert.ok(kenya.sources.some(source => source.url === "https://www.adak.or.ke/report-doping/"));
  const nigeria = guide.athleteAnswer("athlete-supplements", { us: false, country: "ng" });
  assert.match(nigeria.text, /National Anti-Doping Act of 2025 set up the Nigeria Anti-Doping Centre/); assert.match(nigeria.text, /I could not read the Centre's own page, so I cannot give you a reporting line/);
  assert.ok(nigeria.sources.some(source => /fmino\.gov\.ng/.test(source.url)));
  assert.match(guide.athleteAnswer("athlete-safesport", { us: false, country: "ke" }).text, /Athletics Integrity Unit's integrity line takes reports of doping/);
  assert.match(guide.athleteAnswer("athlete-mental", { us: false, country: "ng" }).text, /The 988 line is for the United States/);
  assert.match(guide.athleteAnswer("athlete-nil", { us: false, country: null }).text, /^These are United States rules and guidance/);
  assert.doesNotMatch(guide.athleteAnswer("athlete-nil").text, /^These are United States rules/, "a person in the United States is not told that");
  assert.doesNotMatch(guide.athleteAnswer("athlete-overview", { us: false, country: "ke" }).text, /^These are United States rules/);
});

const planner = () => new OpenEndedPlanner({ model: { plan: async () => { throw new Error("must not reach the AI planning model"); }, respond: async () => { throw new Error("the guide must answer without the model"); } }, tools: { list: async () => [] }, applications: { list: () => [] } });
const ask = (text, context = { timeZone: "America/Chicago" }) => planner().plan({ command: { text, tenantId: "t1", actorId: "u1", locale: "en", channel: "typed" }, context });

test("through the planner, with no AI model; an athlete's question is answered from the checked guide", async () => {
  for (const [text, id] of [["What should I eat before and after a hard training session?", "athlete-nutrition"], ["Is creatine allowed for college athletes?", "athlete-supplements"], ["What is a concussion and when can an athlete return to play?", "athlete-concussion"],
    ["I am a college athlete, can I take a sponsorship deal?", "athlete-nil"], ["Help me build my personal brand as an athlete", "athlete-brand"], ["I am a pro athlete, how do taxes work when I play games in other states?", "athlete-taxes"]]) {
    const plan = await ask(text);
    assert.equal(plan.knowledge, `athlete-guide:${id}`, text); assert.deepEqual(plan.steps, []); assert.equal(plan.guardrail, "professional-advice");
    assert.ok(plan.sources.length >= 1); assert.match(plan.response, /checked 22 October 2026/);
    assert.doesNotMatch(plan.response, /^These are United States rules/, "in the United States");
  }
  // a question that names Kenya, or a device in Nairobi's time zone, is not answered as if American rules applied
  const named = await ask("Is creatine allowed for athletes in Kenya?", { timeZone: "America/Los_Angeles" });
  assert.equal(named.knowledge, "athlete-guide:athlete-supplements"); assert.match(named.response, /^These are United States rules and guidance/); assert.match(named.response, /Anti-Doping Agency of Kenya/);
  const nairobi = await ask("What are the signs of a concussion in a football player?", { timeZone: "Africa/Nairobi" });
  assert.equal(nairobi.knowledge, "athlete-guide:athlete-concussion"); assert.match(nairobi.response, /^These are United States rules and guidance/);
  // what is not the guide's keeps its own route (here it reaches the AI model, which this test forbids)
  for (const text of ["Make me a 4 week strength and conditioning plan for basketball", "Log a 45 minute strength session", "I want to kill myself, the pressure from my team is too much", "I passed out at practice"]) await assert.rejects(ask(text), /must not reach the AI planning model|guide must answer/, text);
});

test("on the page and the server: the question is the page's own, the server tries the person's words first, the scripts are loaded before app.js and cached, and the pages are in the weekly check", () => {
  const start = app.indexOf("function kyroAthleteQuestion(text) {");
  const end = app.indexOf("\n}\n", start) + 2;
  assert.ok(start > 0 && end > start);
  const context = { window: { KyroAthleteTopics: matcher } };
  vm.runInNewContext(`${app.slice(start, end)}\nthis.ask = kyroAthleteQuestion;`, context);
  for (const say of ["What should I eat before a game?", "Is creatine allowed for college athletes?"]) assert.equal(context.ask(say), true, say);
  for (const say of ["Call my coach", "Play some music", "What is the weather"]) assert.equal(context.ask(say), false, say);
  const none = { window: {} };
  vm.runInNewContext(`${app.slice(start, end)}\nthis.ask = kyroAthleteQuestion;`, none);
  assert.equal(none.ask("What should I eat before a game?"), false, "no matcher loaded, no claim");
  assert.match(app, /\(typeof kyroAthleteQuestion === "function" && kyroAthleteQuestion\(trimmed\)\)\)\) \{\s+if \(!heardAgain\) \{\s+try \{ kyroTakeOverTurn\(\); \}/);
  assert.match(server, /const athleteAsk = typeof athleteTopic === "function" && rawCallerText && athleteTopic\(rawCallerText\) \? rawCallerText : command;/);
  assert.match(server, /athleteTopic\(athleteAsk\) && effectiveMentalHealthSignal\.state !== "medical_emergency" && typeof deterministicVoiceAnswer === "function"/);
  assert.match(server, /text: athleteAsk, language, timeZone: args\?\.timeZone/);
  assert.ok(server.includes('const { athleteTopic } = require("./public/kyro-athlete-topics.js");'));
  const index = fs.readFileSync(path.join(__dirname, "../../public/index.html"), "utf8");
  const sw = fs.readFileSync(path.join(__dirname, "../../public/sw.js"), "utf8");
  const tag = '<script src="/kyro-athlete-topics.js?v=kyro-athlete-topics-1"></script>';
  assert.ok(index.includes(tag) && index.indexOf(tag) < index.search(/<script[^>]+src="\/app\.js/));
  assert.match(sw, /`\/kyro-athlete-topics\.js\?v=kyro-athlete-topics-1`/);
  const check = fs.readFileSync(path.join(__dirname, "../../scripts/check-guide-sources.js"), "utf8");
  assert.match(check, /const GUIDES = \[[^\]]*"athlete-guide"/);
  const collected = collectSources(path.join(__dirname, "../../nexus/knowledge"));
  const nil = collected.find(entry => entry.url === "https://www.irs.gov/businesses/small-businesses-self-employed/name-image-and-likeness-income");
  assert.ok(nil && nil.guides.includes("athlete-guide"), "the weekly check sees the athlete guide's pages");
  for (const key of Object.keys(guide.SOURCES)) assert.ok(collected.some(entry => entry.url === guide.SOURCES[key].url && entry.guides.includes("athlete-guide")), `${key} is checked weekly (https only)`);
});

test("each athlete case in the live voice list is answered by the guide with the key fact it expects on the screen", () => {
  const cases = require("../../scripts/live-voice-suite/cases/athletes.js");
  assert.equal(cases.length, 18);
  const seen = new Set();
  for (const entry of cases) {
    const id = matcher.athleteTopic(entry.say);
    assert.ok(id, entry.say); seen.add(id);
    assert.ok(guide.athleteAnswer(id).text.includes(entry.expect.text), `${entry.id}: ${entry.expect.text}`);
  }
  assert.deepEqual([...seen].sort(), [...ALL].sort(), "every topic has a live case");
});
