"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const matcher = require("../../public/kyro-special-ed-topics.js");
const guide = require("../../nexus/knowledge/special-ed-guide.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { defaultApplicationManifests } = require("../../nexus/apps/default-manifests.js");
const { fakeMemory } = require("./farmwork-fake.js");
const { collectSources } = require("../../scripts/check-guide-sources.js");

// Asked for on 24 October 2026 by a teacher of children with special needs and students with ADHD: can Kyro help teachers, parents and administrators with administrative needs and be a resource for families and for teachers? A checked guide to special education
// and ADHD for the United States, California, Delaware, Kenya and Nigeria. Every number and step was read from an official page on 25 October 2026 and is said in the page's terms; what a page does not say, the answer says it does not say. It never says that a child has or
// does not have a condition, never advises on medicine or on a legal dispute, and never asks for a child's name or record.
const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
const server = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");
const IDS = Object.keys(guide.TOPICS);
const optionsOf = id => (/^ca-/.test(id) ? { state: "ca" } : /^de-/.test(id) ? { state: "de" } : /^ke-/.test(id) ? { country: "ke" } : /^ng-/.test(id) ? { country: "ng" } : {});

test("the guide has a topic for each part of special education and ADHD, for the United States, California, Delaware, Kenya and Nigeria, each with sources, three plain ways to ask it and a phrase to check", () => {
  const count = re => IDS.filter(id => re.test(id)).length;
  assert.equal(count(/^sped-/), 15); assert.equal(count(/^ca-sped-/), 7); assert.equal(count(/^de-sped-/), 7); assert.equal(count(/^ke-sped-/), 5); assert.equal(count(/^ng-sped-/), 5);
  for (const id of IDS) {
    const topic = guide.TOPICS[id];
    assert.ok(topic.title.length > 8 && topic.kind === "special-ed", id);
    assert.ok(topic.sources.length >= 1 && topic.sources.every(key => guide.SOURCES[key]), `${id}: sources`);
    assert.ok(topic.text.length >= 800 && topic.text.length <= 2200, `${id}: ${topic.text.length} characters`);
    assert.equal(guide.PHRASES[id].length, 3, id);
    assert.match(guide.KEYS[id], /^[A-Za-z0-9 .,']{8,40}$/, id);
    assert.ok(topic.text.slice(0, 700).includes(guide.KEYS[id]), `${id}: the checked phrase is in the first 700 characters`);
  }
});

test("every page is an official one or one an official page names, read over https; none is a company, a news site or a blog", () => {
  // government agencies and statute sites
  const official = /(?:^|\.)(?:acl\.gov|ecfr\.gov|ed\.gov|cdc\.gov|nih\.gov|cde\.ca\.gov|dds\.ca\.gov|dgs\.ca\.gov|leginfo\.legislature\.ca\.gov|oag\.ca\.gov|education\.delaware\.gov|capital\.k12\.de\.us|kicd\.ac\.ke|kise\.ac\.ke|knec\.ac\.ke|ncpwd\.go\.ke|ombudsman\.go\.ke|kenyalaw\.org|education\.gov\.ng|ncpwd\.gov\.ng|nerdc\.gov\.ng|nhrc\.gov\.ng|trcn\.gov\.ng)$/;
  // federally funded centers (their pages say so)
  const funded = /(?:^|\.)(?:parentcenterhub\.org|pbis\.org|intensiveintervention\.org|iris\.peabody\.vanderbilt\.edu)$/;
  // nonprofit or regional bodies that an official page tells people to use (each source's name says so)
  const named = /(?:^|\.)(?:b23de\.org|declasi\.org|picofdel\.org|californiafamilyempowermentcenters\.org|disabilityrightsca\.org|waecnigeria\.org)$/;
  for (const [key, source] of Object.entries(guide.SOURCES)) {
    const url = new URL(source.url);
    assert.equal(url.protocol, "https:", key);
    const host = url.hostname.replace(/^www\./, "");
    assert.ok(official.test(host) || funded.test(host) || named.test(host), `${key}: ${host}`);
    assert.ok(source.name.length > 12, key);
    if (named.test(host)) assert.match(source.name, /nonprofit|named by|names|Legal Aid|Birth to Three|Parent Information Center|Family Empowerment|West African/i, `${key}: says why it is cited`);
  }
});

test("which questions get which topic: the sample questions of every topic, with the place the person names or the device's country", () => {
  for (const id of IDS) for (const say of guide.PHRASES[id]) assert.equal(matcher.specialEdTopic(say, optionsOf(id)), id, `${id}: ${say}`);
  const yes = [
    ["How do I ask the school to test my child?", "sped-evaluation"], ["How do I ask the school to test my child in California?", "ca-sped-evaluation"], ["What is an IEP in Delaware?", "de-sped-iep"], ["What is a 504 plan?", "sped-504"], ["Does ADHD qualify for an IEP?", "sped-adhd-school"],
    ["What is ADHD?", "sped-adhd"], ["What dose of Ritalin is normal?", "sped-adhd"], ["My child with ADHD is being suspended, what are his rights?", "sped-discipline"], ["Who can see my child's IEP?", "sped-privacy"],
    ["The school is not following the IEP, what can I do?", "sped-disagree"], ["What are signs of autism in a toddler?", "sped-autism"], ["What is dyslexia?", "sped-learning-disability"], ["How do I support students with dyslexia in my class?", "sped-teacher-resources"],
    ["How do I get early intervention for my baby in California?", "ca-sped-early-start"], ["What are the Delaware timelines for an evaluation?", "de-sped-evaluation"], ["What are the rights of a learner with a disability in Kenya?", "ke-sped-rights"], ["What is the privacy rule for student records in California?", "sped-privacy"]
  ];
  for (const [say, id] of yes) assert.equal(matcher.specialEdTopic(say), id, say);
  // a device in Nairobi or Lagos is given its own country's topic; one that names a state is that state's
  assert.equal(matcher.specialEdTopic("How is a child assessed for special needs?", { country: "ke" }), "ke-sped-assessment");
  assert.equal(matcher.specialEdTopic("What are exam accommodations for learners with disabilities?", { country: "ng" }), "ng-sped-exams");
  assert.equal(matcher.specialEdTopic("How do I ask the school to test my child in California?", { country: "ke" }), "ca-sped-evaluation");
  assert.equal(matcher.specialEdTopic("What is the rule in California and Delaware for an evaluation?"), "sped-evaluation", "two states named means the federal rule");
  // a state that has no page for the question gets the federal topic (the answer says so)
  assert.equal(matcher.specialEdTopic("What does FERPA say about my child's records in Delaware?"), "sped-privacy");
});

test("orders, records, a child in danger, a business, a dose with no child, and everyday talk are never taken", () => {
  for (const say of [
    "Remind me about the IEP meeting", "Log my student's IEP notes", "Add a note about my student", "Draft a letter to the school", "Call my son's teacher", "Show my notes",
    "I want to kill myself, my ADHD is too much", "My son is being abused at school", "He is hurting himself and I am in danger", "How do I make a budget?", "What is the weather?", "How do I evaluate my business?", "What is the evaluation of my property in California?",
    "How do I test my soil?", "Why is my child so tired?", "What is the school records retention at my business?", "How do I register a company in Delaware?", "Where can I find a good school in Kenya?", "Play some music"
  ]) assert.equal(matcher.specialEdTopic(say), null, say);
  // no question of any other guide is taken: every phrase that is known to work in Kyro goes to the guide it belongs to
  const phrases = require("./fixtures/verified-say-phrases.json").phrases;
  const taken = phrases.filter(say => matcher.specialEdTopic(say) || matcher.specialEdTopic(say, { country: "ke" }) || matcher.specialEdTopic(say, { country: "ng" }));
  // (the phrases that are this guide's own: its sample questions, its walkthroughs' words, and the lessons that teach how to use it, which the proven list also holds)
  const norm = say => String(say).toLowerCase().replace(/[.?!,]+$/, "").replace(/\s+/g, " ").trim();
  const walks = require("../../nexus/knowledge/special-ed-walkthroughs.js");
  const own = new Set([...Object.values(guide.PHRASES).flat().map(norm), ...Object.values(walks.WALKTHROUGHS).map(def => norm(`Walk me through ${def.phrase}`)), ...["how do i ask the school to test my child in california", "walk me through using kyro for special education", "walk me through using kyro as a parent of a child with special needs", "walk me through using kyro as a teacher or school administrator for special education"]]);
  assert.deepEqual(taken.filter(say => !own.has(norm(say)) && !/special education|iep|504|adhd|autis|dyslexi/i.test(say)), [], "a phrase of another guide was taken");
});

test("every answer names its official pages and the date they were read, says Kyro cannot say what happens in a case and is no lawyer or doctor, that no name is needed, and what to do if a child is in danger; none diagnoses, advises on medicine, or promises", () => {
  for (const id of IDS) {
    for (const us of [true, false]) {
      const answer = guide.specialEdAnswer(id, { us, country: /^ke-/.test(id) ? "ke" : /^ng-/.test(id) ? "ng" : null });
      assert.ok(answer && answer.topic === id && answer.sources.length >= 1, id);
      assert.match(answer.text, /checked 25 October 2026/, id);
      assert.match(answer.text, /(?:cannot|can't|could not) (?:say|tell|diagnose|advise|give)|not a (?:lawyer|doctor)/i, `${id}: says what it cannot do`);
      assert.match(answer.text, /do not need to tell me|name or anything private|child's name/i, `${id}: no name needed`);
      assert.match(answer.text, /emergency number|\b911\b/i, `${id}: danger`);
      assert.doesNotMatch(answer.text, /\byour child (?:has|does not have|is) (?:adhd|autis\w+|dyslexi\w+|a disabilit\w+)\b|\b(?:take|taking|give|giving) (?:\d+ ?)?(?:mg|milligrams?|tablets?|pills?)\b|\bdose of\b|\bguarantee[sd]?\b|\bI (?:will|can) (?:file|send|sign|request|call|complain)\b|\byou will (?:win|get|receive)\b/i, id);
      for (const source of answer.sources) assert.ok(answer.text.includes(source.name), `${id}: names ${source.name}`);
    }
  }
});

test("the figures and contacts are the ones the pages gave, and what a page does not say is said not to be said", () => {
  const says = (id, ...parts) => { const text = guide.TOPICS[id].text; for (const part of parts) assert.ok(text.includes(part), `${id}: ${part}`); };
  says("sped-504", "800-421-3481", "180 days");
  says("sped-adhd", "1-866-200-8098");
  says("sped-autism", "(919) 962-2001");
  says("de-sped-get-help", "302-735-4210", "302-999-7394", "302-674-8500", "302-857-4239");
  says("de-sped-evaluation", "45 school days", "90 calendar days", "30");
  says("ca-sped-disagree", "800-926-0648");
  says("ca-sped-early-start", "800-515-2229");
  says("ke-sped-rights", "0800 221349", "500,000");
  says("ke-sped-register-support", "6 November 2026");
  says("ng-sped-complaints-help", "08006472428");
  // two official pages that differ are both said, neither picked; what could not be read is said
  assert.match(guide.TOPICS["sped-overview"].text, /3 through 21/); assert.match(guide.TOPICS["sped-overview"].text, /3 to 22/);
  assert.match(guide.TOPICS["ca-sped-get-help"].text, /could not be read|could not read|blocked/i);
  assert.match(guide.TOPICS["de-sped-504"].text, /did not find|not found|no Delaware page/i);
  // nothing that was not read: no fax number that two pages disagree on, no fee for the Kenyan assessment
  for (const id of ["de-sped-get-help", "de-sped-disagree"]) assert.doesNotMatch(guide.TOPICS[id].text, /\(?302\)?[- ]?739-(?:2388|4654)/, `${id}: the two fax numbers are not given`);
  assert.doesNotMatch(guide.TOPICS["ke-sped-assessment"].text, /KSh ?\d|Ksh\.? ?\d|shillings/i, "no price for the Kenyan assessment");
  // no medicine is named or dosed anywhere in an answer
  for (const id of IDS) assert.doesNotMatch(guide.TOPICS[id].text, /\b(?:adderall|ritalin|concerta|vyvanse|methylphenidate|\d+ ?mg)\b/i, `${id}: no medicine`);
});

test("outside the United States only the ideas are offered, with a warning that the pages are American; a state named with no page of its own gets the federal rule with a line saying so", () => {
  assert.match(guide.specialEdAnswer("sped-evaluation", { us: false }).text, /^These come from United States government pages/);
  assert.match(guide.specialEdAnswer("ca-sped-evaluation", { us: false }).text, /^These come from United States government pages/);
  assert.doesNotMatch(guide.specialEdAnswer("sped-evaluation", { us: true }).text, /^These come from/);
  assert.doesNotMatch(guide.specialEdAnswer("ke-sped-rights", { us: false, country: "ke" }).text, /^These come from United States/);
  assert.match(guide.specialEdAnswer("sped-privacy", { us: true, state: "ca" }).text, /^This is the federal rule\. I have not read California's own page on this/);
  assert.match(guide.specialEdAnswer("sped-privacy", { us: true, state: "de" }).text, /^This is the federal rule\. I have not read Delaware's own page on this/);
  assert.doesNotMatch(guide.specialEdAnswer("ca-sped-evaluation", { us: true, state: "ca" }).text, /^This is the federal rule/);
});

function planner() {
  const model = { plan: async () => { throw new Error("the AI model must not be asked"); }, respond: async () => null };
  const tools = [{ tool_id: "lists.create", domain: "lists", description: "", risk_tier: "low", confirmation_required: false }];
  return new OpenEndedPlanner({ model, tools: { list: async () => tools }, applications: { list: () => defaultApplicationManifests() }, memory: Object.assign(fakeMemory(), { search: async () => [] }) });
}
const ask = (text, context = { timeZone: "America/Chicago" }) => planner().plan({ command: { text, tenantId: "t1", actorId: "u1", locale: "en", channel: "typed" }, context });

test("through the planner, with no AI model; the question is answered from the checked guide, in the person's state or country", async () => {
  for (const [text, id] of [["How do I ask the school to test my child?", "sped-evaluation"], ["What is dyslexia?", "sped-learning-disability"], ["What is a 504 plan?", "sped-504"], ["What dose of Ritalin is normal?", "sped-adhd"]]) {
    const plan = await ask(text);
    assert.equal(plan.knowledge, `special-ed-guide:${id}`, text); assert.deepEqual(plan.steps, []); assert.equal(plan.guardrail, "professional-advice");
    assert.ok(plan.sources.length >= 1); assert.match(plan.response, /checked 25 October 2026/); assert.doesNotMatch(plan.response, /^These come from United States/, "in the United States");
  }
  const california = await ask("How do I ask the school to test my child in California?", { timeZone: "America/Los_Angeles" });
  assert.equal(california.knowledge, "special-ed-guide:ca-sped-evaluation");
  const delaware = await ask("What is an IEP in Delaware?", { timeZone: "America/New_York" });
  assert.equal(delaware.knowledge, "special-ed-guide:de-sped-iep");
  const fallback = await ask("What does FERPA say about my child's records in California?", { timeZone: "America/Los_Angeles" });
  assert.equal(fallback.knowledge, "special-ed-guide:sped-privacy"); assert.match(fallback.response, /^This is the federal rule\. I have not read California's own page/);
  const nairobi = await ask("Can my child with a disability get extra time in the national exam?", { timeZone: "Africa/Nairobi" });
  assert.equal(nairobi.knowledge, "special-ed-guide:ke-sped-exams"); assert.doesNotMatch(nairobi.response, /^These come from United States/);
  const lagos = await ask("What are the rules on accessibility for a school with learners with disabilities?", { timeZone: "Africa/Lagos" });
  assert.equal(lagos.knowledge, "special-ed-guide:ng-sped-accessibility");
  const elsewhere = await ask("What is ADHD?", { timeZone: "Europe/London" });
  assert.equal(elsewhere.knowledge, "special-ed-guide:sped-adhd"); assert.match(elsewhere.response, /^These come from United States government pages/);
  // what is not this guide's is left alone: an order, a record, a business question
  for (const text of ["Remind me about the IEP meeting", "Log my student's IEP notes", "How do I evaluate my business?"]) {
    const plan = await ask(text).catch(() => null);
    assert.notEqual(plan?.knowledge?.split(":")[0], "special-ed-guide", text);
  }
});

test("on the page and the server: the question is the page's own, the server tries the person's words first, the script is loaded before app.js and cached, and the pages are in the weekly check", () => {
  const start = app.indexOf("function kyroSpecialEdQuestion(text) {");
  const end = app.indexOf("\n}\n", start) + 2;
  assert.ok(start > 0 && end > start);
  const make = zone => { const context = { window: { KyroSpecialEdTopics: matcher }, Intl: { DateTimeFormat: () => ({ resolvedOptions: () => ({ timeZone: zone }) }) } }; vm.runInNewContext(`${app.slice(start, end)}\nthis.ask = kyroSpecialEdQuestion;`, context); return context.ask; };
  const chicago = make("America/Chicago");
  for (const say of ["How do I ask the school to test my child?", "What is an IEP in California?"]) assert.equal(chicago(say), true, say);
  for (const say of ["Call my bank", "Play some music", "What is the weather", "Remind me about the IEP meeting"]) assert.equal(chicago(say), false, say);
  // (the same words are the federal IEP answer in the United States and the Kenyan exam answer on a device in Nairobi; both are claimed, each by its own place)
  assert.equal(chicago("Can my child with a disability get extra time in the national exam?"), true);
  assert.equal(matcher.specialEdTopic("Can my child with a disability get extra time in the national exam?"), "sped-iep");
  assert.equal(make("Africa/Nairobi")("Can my child with a disability get extra time in the national exam?"), true, "a device in Nairobi");
  assert.equal(matcher.specialEdTopic("Can my child with a disability get extra time in the national exam?", { country: "ke" }), "ke-sped-exams");
  assert.equal(chicago("Is my child's school going to open late tomorrow?"), false);
  const none = { window: {} };
  vm.runInNewContext(`${app.slice(start, end)}\nthis.ask = kyroSpecialEdQuestion;`, none);
  assert.equal(none.ask("How do I ask the school to test my child?"), false, "no matcher loaded, no claim");
  assert.match(app, /\(typeof kyroSpecialEdQuestion === "function" && kyroSpecialEdQuestion\(trimmed\)\)\)\) \{\s+if \(!heardAgain\) \{\s+try \{ kyroTakeOverTurn\(\); \}/);
  assert.match(server, /const specialEdAsk = typeof specialEdTopic === "function" && rawCallerText && specialEdTopic\(rawCallerText\) \? rawCallerText : command;/);
  assert.match(server, /specialEdTopic\(specialEdAsk\) && effectiveMentalHealthSignal\.state !== "medical_emergency" && typeof deterministicVoiceAnswer === "function"/);
  assert.match(server, /text: specialEdAsk, language, timeZone: args\?\.timeZone/);
  assert.ok(server.includes('const { specialEdTopic } = require("./public/kyro-special-ed-topics.js");'));
  const index = fs.readFileSync(path.join(__dirname, "../../public/index.html"), "utf8");
  const sw = fs.readFileSync(path.join(__dirname, "../../public/sw.js"), "utf8");
  const tag = '<script src="/kyro-special-ed-topics.js?v=kyro-special-ed-topics-1"></script>';
  assert.ok(index.includes(tag) && index.indexOf(tag) < index.search(/<script[^>]+src="\/app\.js/));
  assert.match(sw, /`\/kyro-special-ed-topics\.js\?v=kyro-special-ed-topics-1`/);
  const check = fs.readFileSync(path.join(__dirname, "../../scripts/check-guide-sources.js"), "utf8");
  assert.match(check, /const GUIDES = \[[^\]]*"special-ed-guide"/);
  const collected = collectSources(path.join(__dirname, "../../nexus/knowledge"));
  for (const key of Object.keys(guide.SOURCES)) assert.ok(collected.some(entry => entry.url === guide.SOURCES[key].url && entry.guides.includes("special-ed-guide")), `${key} is checked weekly (https only)`);
  const snapshot = JSON.parse(fs.readFileSync(path.join(__dirname, "../../nexus/knowledge/source-snapshot.json"), "utf8"));
  for (const key of Object.keys(guide.SOURCES)) assert.ok(snapshot.pages[guide.SOURCES[key].url], `${key} is in the saved copy of the pages`);
});

test("each special education case in the live voice list is answered by the guide with the key fact it expects on the screen, and there is one for every topic", () => {
  const cases = require("../../scripts/live-voice-suite/cases/special-ed.js");
  const seen = new Set();
  for (const entry of cases) {
    const id = matcher.specialEdTopic(entry.say);
    assert.ok(id, entry.say); seen.add(id);
    assert.ok(guide.specialEdAnswer(id).text.includes(entry.expect.text), `${entry.id}: ${entry.expect.text}`);
  }
  assert.equal(seen.size, IDS.length, "a case for every topic");
});

test("a walkthrough step says no number, email or phone that its guide does not already say from an official page, names no brand or medicine, and never diagnoses or asks for a child's name", () => {
  const walks = require("../../nexus/knowledge/special-ed-walkthroughs.js");
  const all = IDS.map(id => guide.TOPICS[id].text).join(" ");
  const digits = all.replace(/\D/g, "");
  const brand = /\b(?:Google|Gmail|Facebook|Instagram|WhatsApp|TikTok|Apple|Microsoft|Safaricom|Airtel|M-?Pesa|PayPal|Adderall|Ritalin|Concerta|Vyvanse|Zoom|Canvas|Blackboard|PowerSchool|Infinite Campus|Skyward)\b/;
  assert.ok(Object.keys(walks.WALKTHROUGHS).length >= 35, "a walkthrough for every process topic");
  const topics = new Set(Object.values(walks.WALKTHROUGHS).map(def => def.topic));
  for (const id of IDS.filter(id => id !== "sped-overview")) assert.ok(topics.has(id), `${id} has a walkthrough`);
  for (const [id, def] of Object.entries(walks.WALKTHROUGHS)) {
    for (const step of def.steps) {
      const text = [step.text, step.done, ...step.words.map(word => word.means), ...step.gather].join(" ");
      assert.doesNotMatch(text, brand, `${id}: "${step.title}" names a brand or a medicine`);
      assert.doesNotMatch(text, /\byour child (?:has|does not have) (?:adhd|autis\w+|dyslexi\w+)\b|\b(?:take|taking|give|giving) (?:\d+ ?)?(?:mg|milligrams?|tablets?|pills?)\b/i, `${id}: "${step.title}" diagnoses or doses`);
      assert.doesNotMatch(step.gather.join(" "), /\b(?:child'?s name|your child'?s name|social security|ssn)\b/i, `${id}: "${step.title}" asks to gather a name or a number`);
      for (const found of text.matchAll(/[\w.+-]+@[\w-]+(?:\.[\w-]+)+|\+?\(?\d[\d\s().-]{5,}\d|\b\d{1,3}(?:,\d{3})+\b/g)) {
        const value = found[0];
        const ok = /@/.test(value) ? all.includes(value) : value.replace(/\D/g, "").length >= 5 ? digits.includes(value.replace(/\D/g, "")) : all.includes(value);
        assert.ok(ok, `${id}: "${step.title}" says ${value}, which the guide does not`);
      }
      for (const found of text.matchAll(/\b([a-z0-9]+) at ([a-z0-9]+(?: dot [a-z0-9]+)+)\b/gi)) {
        const email = `${found[1]}@${found[2].replace(/ dot /gi, ".")}`;
        assert.ok(all.toLowerCase().includes(email.toLowerCase()), `${id}: "${step.title}" says ${email}, which the guide does not`);
      }
    }
  }
});

// Found live on 25 October 2026 (release 14109a3a): "My toddler is not talking yet. Who do I call?" and "Who do I call in Delaware for special education help?" were answered "You have no business or nonprofit workspace yet", because the business dispatcher reads
// "who do I call" as the person's own follow-ups and the planner stepped aside for it. The guide's matcher already leaves out a business's own records, so the planner no longer steps aside.
test("'who do I call' about a child or a school is answered by the guide, not read as the business's follow-ups; a business question is still not taken", async () => {
  for (const [text, id] of [["My toddler is not talking yet. Who do I call?", "sped-early"], ["Who do I call in Delaware for special education help?", "de-sped-get-help"], ["Who can I call about special education in Delaware?", "de-sped-get-help"]]) {
    const plan = await ask(text);
    assert.equal(plan.knowledge, `special-ed-guide:${id}`, text);
  }
  for (const text of ["Who do I need to call back today?", "Who are my donors?", "Who do I call about my invoices?"]) {
    const plan = await ask(text).catch(() => null);
    assert.notEqual(plan?.knowledge?.split(":")[0], "special-ed-guide", text);
  }
});
