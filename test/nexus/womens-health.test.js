"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const topics = require("../../nexus/knowledge/womens-health-topics.js");
const guide = require("../../nexus/knowledge/womens-health.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");

// A checked women's health guide for a woman using Kyro herself (information and finding care only), read from CDC, HHS, NIH, USPSTF, WHO and, where a page could be read, Kenya's Ministry of Health on 13 October 2026.
// It never answers anything urgent, unsafe or about a medicine: those belong to the safety layer and the medicine rules, which come first.

const ALL = Object.keys(guide.TOPICS);

test("which questions get which topic", () => {
  const yes = [
    ["How often should I get a Pap smear?", "cervical-screening"], ["What is HPV?", "cervical-screening"], ["When should I start getting mammograms?", "breast-health"],
    ["What are my birth control options?", "contraception"], ["Tell me about family planning", "contraception"], ["Why are my periods irregular?", "periods-cycle"], ["What is a normal menstrual cycle?", "periods-cycle"],
    ["What are the symptoms of menopause?", "menopause"], ["Is it normal to have hot flashes?", "menopause"], ["What should I expect at my first prenatal visit?", "prenatal-care"],
    ["How do I take care of myself after giving birth?", "postpartum"], ["What is postpartum depression?", "postpartum"], ["Tell me about women's health", "womens-health-overview"],
    ["Where can I get a Pap smear?", "finding-care"], ["Where can I get low cost family planning?", "finding-care"], ["How do I find an antenatal clinic?", "finding-care"], ["Find women's health care for me", "finding-care"]
  ];
  for (const [text, id] of yes) assert.equal(topics.womensHealthTopic(text), id, text);
});

test("urgent, unsafe, medicine, worker, record and business sentences are never answered with a guide", () => {
  for (const text of ["Who is pregnant?", "Mary is pregnant, due 12 March", "How many pregnant women are on my list?", "I'm bleeding heavily and I'm pregnant", "Is ibuprofen safe in pregnancy?", "How much paracetamol can I take while pregnant?",
    "I am in labour", "My baby has stopped moving", "I have a fever and my periods stopped", "My husband beats me, what can I do?", "I feel hopeless after the birth", "Log my period", "Remind me about my Pap smear",
    "What grants are there for women-owned businesses?", "Women's business center near me", "What is the weather", "How do I plan a birthday", "Show me my reminders", ""]) assert.equal(topics.womensHealthTopic(text), null, text);
});

test("every answer, in the US, WHO and Kenya versions, names pages on official sites and the date, says it is general information, and gives no dose or diagnosis", () => {
  const official = /^https:\/\/(?:www\.)?(?:cdc\.gov|womenshealth\.gov|nimh\.nih\.gov|uspreventiveservicestaskforce\.org|988lifeline\.org|findahealthcenter\.hrsa\.gov|opa\.hhs\.gov|opa-fpclinicdb\.hhs\.gov|reproductivehealthservices\.gov|healthcare\.gov|thehotline\.org|who\.int|afro\.who\.int|africa\.unwomen\.org|health\.go\.ke)\//;
  for (const id of ALL) for (const options of [{ us: true }, { us: false }, { us: false, country: "ke" }]) {
    const answer = guide.womensHealthAnswer(id, options);
    assert.ok(answer, `${id} ${JSON.stringify(options)}`); assert.equal(answer.topic, id);
    for (const source of answer.sources) assert.match(source.url, official, `${id}: ${source.url}`);
    if (id !== "womens-health-overview" && !(id === "finding-care" && !options.us && !options.country)) assert.ok(answer.sources.length >= 1, id);
    // (the menopause page changed on 19 October 2026 and was read again that day: its answer carries that date)
    if (answer.sources.length) assert.match(answer.text, id === "menopause" && options.us ? /\(checked 19 October 2026\)/ : /\(checked 13 October 2026\)/, id);
    assert.match(answer.text, /This is general information, not medical advice\. For your own health, talk to a doctor, nurse or health worker\.$/, id);
    assert.doesNotMatch(answer.text, /\byou have (?:cancer|an infection|a condition|endometriosis|pcos)\b|\byou should take\b|\btake \d+ ?(?:mg|tablets?|pills?)\b|\b\d+ ?mg\b|\bI recommend\b|\bI diagnose\b/i, id);
  }
  assert.equal(guide.womensHealthAnswer("nope"), null);
});

test("the facts that matter, as the pages gave them", () => {
  const us = id => guide.womensHealthAnswer(id, { us: true }).text, who = (id, country) => guide.womensHealthAnswer(id, { us: false, country }).text;
  assert.match(us("cervical-screening"), /21 to 29, a Pap test/); assert.match(us("cervical-screening"), /two doses if started before 15 and three if later/); assert.match(us("cervical-screening"), /is being updated/);
  assert.match(us("breast-health"), /every 2 years for women aged 40 to 74/);
  assert.match(us("contraception"), /implant 0\.1%/); assert.match(us("contraception"), /copper IUD can be put in within 5 days/); assert.match(us("contraception"), /voluntary and informed/);
  assert.match(us("periods-cycle"), /24 to 38 days/); assert.match(us("periods-cycle"), /remove the tampon right away and call 911/);
  assert.match(us("menopause"), /average age in the US is 52/); assert.match(us("menopause"), /Vaginal bleeding after menopause is not normal/);
  assert.match(us("prenatal-care"), /fewer than 10 movements in two hours/); assert.match(us("prenatal-care"), /100\.4 F/);
  assert.match(us("postpartum"), /1-833-852-6262/); assert.match(us("postpartum"), /call or text 988/);
  assert.match(us("finding-care"), /findahealthcenter\.hrsa\.gov/); assert.match(us("finding-care"), /opa-fpclinicdb\.hhs\.gov/); assert.match(us("finding-care"), /1-800-799-7233/); assert.match(us("finding-care"), /88788/);
  assert.match(who("cervical-screening"), /every 5 to 10 years from age 30/); assert.match(who("cervical-screening"), /reliable as one taken by a health worker/);
  assert.match(who("prenatal-care"), /20, 26, 30, 34, 36, 38 and 40 weeks/);
  assert.match(who("postpartum"), /48 to 72 hours, 7 to 14 days and 6 weeks/);
  assert.match(who("contraception"), /Condoms are the only method that also protects/); assert.match(who("menopause"), /between about 45 and 55/);
  // Kenya: only what the pages said; nothing for Nigeria
  assert.match(who("cervical-screening", "ke"), /single dose/); assert.match(who("cervical-screening", "ke"), /Ask your health facility/);
  assert.match(who("finding-care", "ke"), /helpline 1195 is toll-free, open 24 hours/);
  assert.equal(who("finding-care", "ng"), who("finding-care")); assert.doesNotMatch(who("finding-care", "ng"), /\b0800\b|\b1195\b/);
  assert.doesNotMatch(who("cervical-screening", "ng"), /Nigeria|NPHCDA/);
});

const catalog = { tools: [], applications: [] };
const planner = () => new OpenEndedPlanner({ model: { plan: async () => { throw new Error("must not reach the AI planning model"); }, respond: async () => { throw new Error("the guide must answer without the model"); } }, tools: { list: async () => catalog.tools }, applications: { list: () => catalog.applications } });
const ask = (text, timeZone, country) => planner().plan({ command: { text, tenantId: "t1", actorId: "u1", locale: "en", channel: "typed" }, context: { timeZone, ...(country ? { country } : {}) } });

test("through the planner: the US version in the US, the WHO version elsewhere, the Kenya lines in Kenya, no model call, and an answer that is a plain reply with no steps", async () => {
  const us = await ask("How often should I get a Pap smear?", "America/Chicago");
  assert.equal(us.knowledge, "womens-health:cervical-screening"); assert.deepEqual(us.steps, []); assert.equal(us.guardrail, "womens-health-information"); assert.match(us.response, /CDC/); assert.ok(us.sources.every(source => /cdc\.gov|uspreventiveservicestaskforce\.org/.test(source.url)));
  const ke = await ask("How often should I get a Pap smear?", "Africa/Nairobi");
  assert.equal(ke.knowledge, "womens-health:cervical-screening"); assert.match(ke.response, /WHO/); assert.match(ke.response, /In Kenya/); assert.doesNotMatch(ke.response, /Pap test, and if it is normal/);
  const ng = await ask("What are my birth control options?", "Africa/Lagos");
  assert.equal(ng.knowledge, "womens-health:contraception"); assert.match(ng.response, /WHO/);
  const none = await ask("Tell me about menopause", undefined);
  assert.equal(none.knowledge, "womens-health:menopause"); assert.match(none.response, /WHO/);
  assert.equal((await ask("Where can I get low cost family planning?", "America/New_York")).knowledge, "womens-health:finding-care");
});

test("through the planner: an urgent or medicine question is not taken by the guide", async () => {
  for (const text of ["Is ibuprofen safe in pregnancy?", "I am bleeding heavily and pregnant", "Who is pregnant?"]) {
    await assert.rejects(() => ask(text, "America/Chicago"), /must not reach the AI planning model|the guide must answer without the model/, text);
  }
});

test("a women's care clinic search gets the one added line, and an ordinary clinic or pharmacy search does not", () => {
  for (const text of ["Find a women's health clinic near me", "an antenatal clinic near Kisumu", "Find a family planning clinic near Nairobi", "Find a gynaecologist near me"]) assert.equal(topics.isWomensCareSearch(text), true, text);
  for (const text of ["Find a clinic near me", "Find a pharmacy near me", "Where is the nearest hospital?", ""]) assert.equal(topics.isWomensCareSearch(text), false, text);
  assert.equal(topics.WOMENS_CARE_NOTE.en, "I cannot tell which of these offer women's health care, so ask when you call.");
});

test("on the typed route the clinic search answer carries the line only for a women's care search, and only when clinics were found", () => {
  const { placesFoundResponse } = require("../../nexus/runtime/behavior-spine.js");
  const plan = (goal, tool = "clinic.find") => ({ goal, steps: [{ toolId: tool }] });
  const task = output => ({ steps: [{ output }] });
  const cards = { cards: [{ name: "Example Clinic" }], searchedNear: "Kisumu" };
  assert.match(placesFoundResponse(plan("Find a women's health clinic near Kisumu"), task(cards), {}), /I cannot tell which of these offer women's health care, so ask when you call\.$/);
  assert.match(placesFoundResponse(plan("Tafuta kliniki ya family planning karibu na Kisumu"), task(cards), { locale: "sw" }), /Siwezi kujua ni zipi kati ya hizi zinatoa huduma za afya ya wanawake/);
  assert.doesNotMatch(placesFoundResponse(plan("Find a clinic near Kisumu"), task(cards), {}), /women's health care/);
  assert.doesNotMatch(placesFoundResponse(plan("Find a pharmacy near Kisumu", "pharmacy.find"), task(cards), {}), /women's health care/);
  assert.doesNotMatch(placesFoundResponse(plan("Find a women's health clinic near Kisumu"), task({ cards: [], searchedNear: "Kisumu" }), {}), /women's health care/);
});
