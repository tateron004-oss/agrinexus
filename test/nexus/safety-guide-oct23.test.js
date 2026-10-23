"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const matcher = require("../../public/kyro-safety-topics.js");
const guide = require("../../nexus/knowledge/safety-guide.js");
const { contentGuardReply } = require("../../nexus/brain/content-guard.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { defaultApplicationManifests } = require("../../nexus/apps/default-manifests.js");
const { fakeMemory } = require("./farmwork-fake.js");
const { collectSources } = require("../../scripts/check-guide-sources.js");

// Asked for on 23 October 2026: "do we have in Kyro the ability for the user to protect themselves from attacks, especially those who have little to no technical skills", for the United States, Kenya and Nigeria. A checked guide to staying safe
// online and on the phone: fake messages and calls, passwords and two-step sign-in, a swapped SIM card, a hijacked account, identity theft, locked files, public Wi-Fi, where to report; and the Kenyan and Nigerian rules and agencies. Every number and
// step was read from an official page on 23 October 2026 and is said in the page's terms; what a page does not say, the answer says it does not say, and no number that was not on a page that was read is here.
const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
const server = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");
const IDS = Object.keys(guide.TOPICS);
const countryOf = id => (/^ke-/.test(id) ? "ke" : /^ng-/.test(id) ? "ng" : null);

test("the guide has a topic for each part of staying safe, for the United States, Kenya and Nigeria, each with sources, three plain ways to ask it and a phrase to check", () => {
  assert.equal(IDS.filter(id => !countryOf(id)).length, 13);
  assert.equal(IDS.filter(id => countryOf(id) === "ke").length, 7);
  assert.equal(IDS.filter(id => countryOf(id) === "ng").length, 9);
  for (const id of IDS) {
    const topic = guide.TOPICS[id];
    assert.ok(topic.title.length > 8 && topic.kind === "safety", id);
    assert.ok(topic.sources.length >= 1 && topic.sources.every(key => guide.SOURCES[key]), `${id}: sources`);
    assert.ok(topic.text.length >= 700 && topic.text.length <= 2200, `${id}: ${topic.text.length} characters`);
    assert.equal(guide.PHRASES[id].length, 3, id);
    const key = guide.KEYS[id];
    assert.match(key, /^[A-Za-z0-9 .,']{8,40}$/, id);
    assert.ok(topic.text.slice(0, 700).includes(key), `${id}: the checked phrase is in the first 700 characters`);
  }
});

test("every page is an official one, read over https; none is a company or a news site", () => {
  const official = /(?:^|\.)(?:cisa\.gov|ftc\.gov|fcc\.gov|ssa\.gov|irs\.gov|consumerfinance\.gov|ic3\.gov|identitytheft\.gov|ojp\.gov|centralbank\.go\.ke|ca\.go\.ke|cak\.go\.ke|odpc\.go\.ke|cma\.or\.ke|kenyalaw\.org|ncc\.gov\.ng|cbn\.gov\.ng|efcc\.gov\.ng|ndpc\.gov\.ng|npf\.gov\.ng)$/;
  for (const [key, source] of Object.entries(guide.SOURCES)) {
    const url = new URL(source.url);
    assert.equal(url.protocol, "https:", key);
    assert.match(url.hostname.replace(/^www\./, ""), official, `${key}: ${url.hostname}`);
    assert.ok(source.name.length > 12, key);
  }
});

test("which questions get which topic: the sample questions of every topic, with the device's country for the Kenyan and Nigerian ones", () => {
  for (const id of IDS) for (const say of guide.PHRASES[id]) assert.equal(matcher.safetyTopic(say, { country: countryOf(id) }), id, `${id}: ${say}`);
  const yes = [
    ["Someone called asking for my PIN, is it fake?", "safe-phone-scams"], ["I got a text that says my package is held, is it a scam?", "safe-phishing"], ["I clicked a link in an email, what do I do?", "safe-phishing"],
    ["Someone is sending messages from my account", "safe-hacked-account"], ["I can't log in to my account anymore", "safe-hacked-account"], ["My Facebook was hacked", "safe-hacked-account"],
    ["All my files are locked and they want money", "safe-ransomware"], ["What is ransomware?", "safe-ransomware"], ["How do I turn on two-step sign-in?", "safe-two-step"], ["What is a SIM swap?", "safe-sim"],
    ["A man I met online asked me for money", "safe-payment-scams"], ["Someone stole my identity, what now?", "safe-identity-theft"], ["Is it safe to use the Wi-Fi at the airport?", "safe-public-wifi"],
    ["I've been scammed, what do I do now?", "safe-report"], ["Where do I report a scam?", "safe-report"],
    ["Is a SIM swap a crime in Kenya?", "ke-safe-sim"], ["How do I complain to the Communications Authority about a scam message in Kenya?", "ke-safe-report-complain"], ["What does the Data Protection Commissioner do?", "ke-safe-data-rights"],
    ["How do I stop spam texts with DND in Nigeria?", "ng-safe-dnd-spam"], ["How do I link my NIN to my SIM in Nigeria?", "ng-safe-sim-nin"], ["How do I report a cybercrime to the EFCC?", "ng-safe-report-cybercrime"], ["Is this a 419 scam in Nigeria?", "ng-safe-scam-types"]
  ];
  for (const [say, id] of yes) assert.equal(matcher.safetyTopic(say), id, say);
  // a device in Nairobi or Lagos is given its own country's topic for a question that names no country; one that names the other country, or the United States, is that one's
  assert.equal(matcher.safetyTopic("How do I spot a fake text message?", { country: "ng" }), "ng-safe-phishing");
  assert.equal(matcher.safetyTopic("How do I spot a fake text message?", { country: "ke" }), "ke-safe-fake-messages-calls");
  assert.equal(matcher.safetyTopic("Is this FTC email a scam?", { country: "ke" }), "safe-phishing");
  assert.equal(matcher.safetyTopic("How do I report spam to the NCC?", { country: "ke" }), "ng-safe-dnd-spam");
});

test("orders, records, a request to do the harm, money, a business, an older person, a child, an emergency and everyday talk are never taken", () => {
  for (const say of [
    "Remind me to change my password", "Show my notes", "Add a reminder to update my phone", "Call my bank", "Play some music", "What is the weather", "Change my password", "Block this number",
    "How do I hack my friend's M-Pesa?", "How can I hack into my girlfriend's WhatsApp?", "How do I make a phishing email?", "How to send spam texts to people", "How do I clone someone's SIM?", "How do I steal my ex's password?", "How do I do a SIM swap on my ex?",
    "How do I make a budget?", "What should I invest in?", "Is Bitcoin safe?", "How do I check my credit report?", "A debt collector keeps calling me in Kenya, what are my rights?", "How do I spot an investment scam?",
    "How do I protect my business website from hackers?", "My grandmother keeps getting scam calls, how do I protect her?", "How do I keep my child safe on her phone?",
    "I am going to kill myself", "He is hurting me and I'm in danger right now", "do not paste passwords, codes or other people's private details into a bug report"
  ]) assert.equal(matcher.safetyTopic(say), null, say);
});

test("every answer names its official pages and the date they were read, says Kyro cannot check a message, call or site, never to give a password, PIN or code, and what to do in danger; none promises, files, pays or tells you to buy", () => {
  for (const id of IDS) {
    for (const us of [true, false]) {
      const answer = guide.safetyAnswer(id, { us, country: countryOf(id) });
      assert.ok(answer && answer.topic === id && answer.sources.length >= 1, id);
      assert.match(answer.text, /checked 23 October 2026/, id);
      assert.match(answer.text, /(?:cannot|can't|could not) (?:check|tell|say|verify)/i, `${id}: says it cannot check`);
      assert.match(answer.text, /(?:never|do not|don't) (?:share|give|tell)|will never ask/i, `${id}: never give a secret`);
      assert.match(answer.text, /emergency number|\b911\b/i, `${id}: danger`);
      assert.doesNotMatch(answer.text, /\byou will (?:get|recover|receive) (?:your |the )?money back\b|\bguarantee[sd]?\b|\bI (?:will|can) (?:file|send|pay|call|report|block|reset|change)\b|\bbuy (?:a|an|the) \w+ (?:app|software|antivirus)\b/i, id);
      for (const source of answer.sources) assert.ok(answer.text.includes(source.name), `${id}: names ${source.name}`);
    }
  }
});

test("the figures and addresses are the ones the pages gave, read again on 23 October 2026, and what a page does not say is said not to be said", () => {
  const says = (id, ...parts) => { const text = guide.TOPICS[id].text; for (const part of parts) assert.ok(text.includes(part), `${id}: ${part}`); };
  says("safe-passwords", "at least 16 characters", "at least 15 characters");        // the two official pages differ: both are said, neither is picked
  says("safe-phishing", "7726", "reportphishing@apwg.org", "ReportFraud.ftc.gov");
  says("safe-report", "877-382-4357", "877-438-4338", "833-372-8311", "ic3.gov");
  says("safe-identity-theft", "877-438-4338", "877-322-8228", "AnnualCreditReport.com", "one year", "seven years");
  says("safe-identity-theft", "888-397-3742", "888-909-8872", "800-685-1111", "child");   // (on the page they are the numbers for freezing a child's credit: the answer says so)
  says("ke-safe-sim", "500,000", "100,000", "12 months", "6 months");
  says("ke-safe-cybercrime-law", "5 million", "20 million", "25 years", "200,000", "300,000", "not the latest version");
  says("ke-safe-report-complain", "+254 703 042700", "+254 730 172700", "incidents@ke-cirt.go.ke", "do not say whether the public may use them");
  says("ng-safe-dnd-spam", "2442", "*305#", "622");
  says("ng-safe-sim-nin", "14 September 2024", "*996#", "has passed");
  says("ng-safe-report-cybercrime", "+234 809 332 2644", "info@efcc.gov.ng", "info@nccc.npf.gov.ng", "check which is right");
  says("ng-safe-bank-fraud", "cpd@cbn.gov.ng");
  says("ng-safe-data-rights", "+234 916 061 5551", "services.ndpc.gov.ng/breach");
  says("ng-safe-children", "08008008001", "07007007001", "622");
  // nothing that was not read: no police or DCI number, no number for a company, no hotline that a page did not give
  for (const id of IDS) assert.doesNotMatch(guide.TOPICS[id].text, /\b(?:999|112)\b|\b333\b|\bcrime stoppers\b/i, id);
  assert.match(guide.TOPICS["safe-report"].text, /Check hours and numbers/);
  assert.match(guide.TOPICS["ke-safe-sim"].text, /could not open it, so I do not know what it says/);
  assert.doesNotMatch(guide.TOPICS["ke-safe-sim"].text, /19 July 2018/, "a date that only a search listing showed");
});

test("outside the United States only the ideas are offered, with a warning that the pages and numbers are American; a device in Nairobi or Lagos is given its own country's topic", () => {
  const outside = guide.safetyAnswer("safe-phishing", { us: false, country: null });
  assert.match(outside.text, /^These come from United States government pages/);
  assert.equal(guide.safetyAnswer("safe-phishing", { us: true }).text.startsWith("These come from"), false);
  assert.equal(guide.safetyAnswer("safe-phishing", { us: false, country: "ke" }).topic, "ke-safe-fake-messages-calls");
  assert.equal(guide.safetyAnswer("safe-phishing", { us: false, country: "ng" }).topic, "ng-safe-phishing");
  assert.equal(guide.safetyAnswer("safe-sim", { us: false, country: "ke" }).topic, "ke-safe-sim");
  assert.equal(guide.safetyAnswer("safe-passwords", { us: false, country: "ng" }).topic, "ng-safe-basics");
  assert.doesNotMatch(guide.safetyAnswer("ke-safe-sim", { us: false, country: "ke" }).text, /^These come from United States/);
  // (no Kenyan or Nigerian topic is only reachable by naming the country: LOCAL_OF reaches the ones that have a general-question twin)
  for (const [country, map] of Object.entries(guide.LOCAL_OF)) for (const [general, local] of Object.entries(map)) { assert.ok(guide.TOPICS[general] && guide.TOPICS[local], `${country}: ${general} -> ${local}`); assert.ok(local.startsWith(country + "-"), local); }
});

function planner() {
  const model = { plan: async () => { throw new Error("the AI model must not be asked"); }, respond: async () => null };
  const tools = [{ tool_id: "lists.create", domain: "lists", description: "", risk_tier: "low", confirmation_required: false }];
  return new OpenEndedPlanner({ model, tools: { list: async () => tools }, applications: { list: () => defaultApplicationManifests() }, memory: Object.assign(fakeMemory(), { search: async () => [] }) });
}
const ask = (text, context = { timeZone: "America/Chicago" }) => planner().plan({ command: { text, tenantId: "t1", actorId: "u1", locale: "en", channel: "typed" }, context });

test("through the planner, with no AI model; the question is answered from the checked guide, in the person's country", async () => {
  for (const [text, id] of [["How do I spot a fake text message?", "safe-phishing"], ["Someone called asking for my PIN, is it fake?", "safe-phone-scams"], ["What is ransomware?", "safe-ransomware"], ["I've been scammed, what do I do now?", "safe-report"], ["What is a SIM swap?", "safe-sim"]]) {
    const plan = await ask(text);
    assert.equal(plan.knowledge, `safety-guide:${id}`, text); assert.deepEqual(plan.steps, []); assert.equal(plan.guardrail, "professional-advice");
    assert.ok(plan.sources.length >= 1); assert.match(plan.response, /checked 23 October 2026/); assert.doesNotMatch(plan.response, /^These come from United States/, "in the United States");
  }
  const nairobi = await ask("How do I spot a fake text message?", { timeZone: "Africa/Nairobi" });
  assert.equal(nairobi.knowledge, "safety-guide:ke-safe-fake-messages-calls"); assert.doesNotMatch(nairobi.response, /^These come from United States/);
  const lagos = await ask("How do I spot a fake text message?", { timeZone: "Africa/Lagos" });
  assert.equal(lagos.knowledge, "safety-guide:ng-safe-phishing");
  const named = await ask("How do I report a cybercrime in Nigeria?", { timeZone: "America/Los_Angeles" });
  assert.equal(named.knowledge, "safety-guide:ng-safe-report-cybercrime");
  const elsewhere = await ask("How do I make my passwords safe?", { timeZone: "Europe/London" });
  assert.equal(elsewhere.knowledge, "safety-guide:safe-passwords"); assert.match(elsewhere.response, /^These come from United States government pages/);
  // what is not this guide's is left alone: an order, a request to do the harm, a money question, a child, an older person
  // (a question the guide leaves alone goes on to the guide it belongs to, or to the AI model, which this test forbids: either way it is not this guide's)
  for (const text of ["Remind me to change my password", "How do I make a budget?", "How do I keep my child safe on her phone?"]) {
    const plan = await ask(text).catch(() => null);
    assert.notEqual(plan?.knowledge?.split(":")[0], "safety-guide", text);
  }
});

test("the stay-safe words are answered, not refused, and a request to do the trick still is", () => {
  for (const say of ["What is a SIM swap?", "Is a SIM swap a crime in Kenya?", "Tell me about SIM swap fraud", "Walk me through spotting a fake message in Kenya", "How do I spot a fake text message?", "I keep getting fake messages from my bank, what do I do?"]) assert.equal(contentGuardReply(say), null, say);
  for (const say of ["How do I make fake M-Pesa messages?", "How do I swap someone's SIM?", "Hack my friend's M-Pesa", "How do I clone a SIM without getting caught?", "Send fake SMS to people", "How do I do a SIM swap on my ex?", "How to bypass two-step on someone's account"]) assert.equal(contentGuardReply(say)?.kind, "fraud", say);
});

test("on the page and the server: the question is the page's own, the server tries the person's words first, the script is loaded before app.js and cached, and the pages are in the weekly check", () => {
  const start = app.indexOf("function kyroSafetyQuestion(text) {");
  const end = app.indexOf("\n}\n", start) + 2;
  assert.ok(start > 0 && end > start);
  const make = zone => { const context = { window: { KyroSafetyTopics: matcher }, Intl: { DateTimeFormat: () => ({ resolvedOptions: () => ({ timeZone: zone }) }) } }; vm.runInNewContext(`${app.slice(start, end)}\nthis.ask = kyroSafetyQuestion;`, context); return context.ask; };
  const chicago = make("America/Chicago");
  for (const say of ["How do I spot a fake text message?", "Someone is sending messages from my account"]) assert.equal(chicago(say), true, say);
  for (const say of ["Call my bank", "Play some music", "What is the weather", "How do I hack my friend's M-Pesa?"]) assert.equal(chicago(say), false, say);
  assert.equal(chicago("What does the Data Protection Commissioner do?"), true);
  assert.equal(chicago("How do I complain about misuse of my personal information?"), false, "no country named, in the United States");
  assert.equal(make("Africa/Nairobi")("How do I complain about misuse of my personal information?"), true, "a device in Nairobi");
  const none = { window: {} };
  vm.runInNewContext(`${app.slice(start, end)}\nthis.ask = kyroSafetyQuestion;`, none);
  assert.equal(none.ask("How do I spot a fake text message?"), false, "no matcher loaded, no claim");
  assert.match(app, /\(typeof kyroSafetyQuestion === "function" && kyroSafetyQuestion\(trimmed\)\)\)\) \{\s+if \(!heardAgain\) \{\s+try \{ kyroTakeOverTurn\(\); \}/);
  assert.match(server, /const safetyAsk = typeof safetyTopic === "function" && rawCallerText && safetyTopic\(rawCallerText\) \? rawCallerText : command;/);
  assert.match(server, /safetyTopic\(safetyAsk\) && effectiveMentalHealthSignal\.state !== "medical_emergency" && typeof deterministicVoiceAnswer === "function"/);
  assert.match(server, /text: safetyAsk, language, timeZone: args\?\.timeZone/);
  assert.ok(server.includes('const { safetyTopic } = require("./public/kyro-safety-topics.js");'));
  const index = fs.readFileSync(path.join(__dirname, "../../public/index.html"), "utf8");
  const sw = fs.readFileSync(path.join(__dirname, "../../public/sw.js"), "utf8");
  const tag = '<script src="/kyro-safety-topics.js?v=kyro-safety-topics-1"></script>';
  assert.ok(index.includes(tag) && index.indexOf(tag) < index.search(/<script[^>]+src="\/app\.js/));
  assert.match(sw, /`\/kyro-safety-topics\.js\?v=kyro-safety-topics-1`/);
  const check = fs.readFileSync(path.join(__dirname, "../../scripts/check-guide-sources.js"), "utf8");
  assert.match(check, /const GUIDES = \[[^\]]*"safety-guide"/);
  const collected = collectSources(path.join(__dirname, "../../nexus/knowledge"));
  for (const key of Object.keys(guide.SOURCES)) assert.ok(collected.some(entry => entry.url === guide.SOURCES[key].url && entry.guides.includes("safety-guide")), `${key} is checked weekly (https only)`);
  const snapshot = JSON.parse(fs.readFileSync(path.join(__dirname, "../../nexus/knowledge/source-snapshot.json"), "utf8"));
  for (const key of Object.keys(guide.SOURCES)) assert.ok(snapshot.pages[guide.SOURCES[key].url], `${key} is in the saved copy of the pages`);
});

test("each safety case in the live voice list is answered by the guide with the key fact it expects on the screen", () => {
  const cases = require("../../scripts/live-voice-suite/cases/safety.js");
  const seen = new Set();
  for (const entry of cases) {
    if (entry.id.startsWith("safety-guard-")) { assert.equal(contentGuardReply(entry.say)?.kind === "fraud", entry.id === "safety-guard-refuses-a-sim-swap-on-someone", entry.say); continue; }
    const id = matcher.safetyTopic(entry.say);
    assert.ok(id, entry.say); seen.add(id);
    assert.ok(guide.safetyAnswer(id).text.includes(entry.expect.text), `${entry.id}: ${entry.expect.text}`);
  }
  assert.equal(seen.size, IDS.length, "a case for every topic");
});
