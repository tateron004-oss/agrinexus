"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const topics = require("../../nexus/knowledge/womens-health-topics.js");
const guide = require("../../nexus/knowledge/womens-health.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { collectSources } = require("../../scripts/check-guide-sources.js");

// Five more topics for the checked women's health guide, each read from the official pages on 19 October 2026: check-ups and screenings by age, STIs and HIV, PCOS, heart health, and breastfeeding. The rule is the
// guide's rule: official sources the person can open, the date they were read, "general information, not medical advice", and nothing urgent, unsafe or about a medicine (those belong to the safety layer).
const NEW = ["checkups", "sti-hiv", "pcos", "heart-health", "breastfeeding"];

test("which questions get the new topics, and which near misses do not", () => {
  const yes = [
    ["Which health screenings should a woman have at age 45?", "checkups"], ["What check-ups should I have every year?", "checkups"], ["Which screenings do I need at 50?", "checkups"], ["What screenings should women get as they get older?", "checkups"],
    ["How can a woman protect herself from HIV and other infections?", "sti-hiv"], ["Should I get tested for STIs?", "sti-hiv"], ["Do condoms protect me from HIV?", "sti-hiv"], ["Does a pregnant woman need an HIV test?", "sti-hiv"], ["Is it safe to breastfeed if I have HIV?", "sti-hiv"],
    ["What is PCOS and how is it managed?", "pcos"], ["Can polycystic ovary syndrome cause irregular periods?", "pcos"],
    ["What are the signs of heart disease in women?", "heart-health"], ["How can women lower their risk of a stroke?", "heart-health"], ["What are heart attack symptoms in women?", "heart-health"],
    ["How long should I breastfeed?", "breastfeeding"], ["Tell me about breastfeeding", "breastfeeding"], ["What are the benefits of breast milk?", "breastfeeding"]
  ];
  for (const [text, id] of yes) assert.equal(topics.womensHealthTopic(text), id, text);
  // the earlier topics keep their questions
  for (const [text, id] of [["How often should I get a Pap smear?", "cervical-screening"], ["When should I start getting mammograms?", "breast-health"], ["What are my birth control options?", "contraception"], ["Tell me about menopause", "menopause"], ["What should I expect at my first prenatal visit?", "prenatal-care"], ["Why are my periods irregular?", "periods-cycle"], ["Where can I get low cost family planning?", "finding-care"]]) assert.equal(topics.womensHealthTopic(text), id, text);
  // never a guide: urgent, unsafe, medicine, worker, record, a plain question that is not about a woman, and things that only share a word
  for (const text of ["What is HIV?", "What is heart disease?", "I need a check-up for my car", "Which of my patients with HIV are due for a visit?", "I was raped, do I need an HIV test?", "I have a fever and I think it is an STI", "How much PrEP should I take?",
    "Is it safe to take antibiotics while breastfeeding?", "I have chest pain, is it my heart? I am a woman", "I am having a stroke", "Log my blood pressure", "Remind me about my screening", "What screening does the airport require?", "How do I breastfeed a calf?"]) {
    const got = topics.womensHealthTopic(text);
    assert.ok(!NEW.includes(got), `${text} -> ${got}`);
  }
  for (const text of ["I was raped, do I need an HIV test?", "I have a fever and I think it is an STI", "How much PrEP should I take?", "Is it safe to take antibiotics while breastfeeding?"]) assert.equal(topics.womensHealthTopic(text), null, text);
});

const official = /^https:\/\/(?:www\.)?(?:cdc\.gov|womenshealth\.gov|who\.int)\//;

test("every new answer, in the US and WHO versions, names official pages that open, the date read, and the closing line, and gives no dose or diagnosis", () => {
  for (const id of NEW) for (const options of [{ us: true }, { us: false }, { us: false, country: "ke" }]) {
    const answer = guide.womensHealthAnswer(id, options);
    assert.ok(answer, `${id} ${JSON.stringify(options)}`);
    assert.equal(answer.topic, id);
    assert.ok(answer.sources.length >= 1 && answer.sources.every(source => official.test(source.url) && source.name), id);
    assert.match(answer.text, /Sources: .+ \(checked 19 October 2026\)\. This is general information, not medical advice\. For your own health, talk to a doctor, nurse or health worker\.$/, id);
    assert.doesNotMatch(answer.text, /\byou have (?:cancer|an infection|a condition|endometriosis|pcos)\b|\byou should take\b|\btake \d+ ?(?:mg|tablets?|pills?)\b|\b\d+ ?mg\b|\bI recommend\b|\bI diagnose\b/i, id);
    if (options.us) assert.ok(answer.sources.every(source => /cdc\.gov|womenshealth\.gov/.test(source.url)), `${id}: the United States version names United States pages`);
    else assert.ok(answer.sources.every(source => /who\.int/.test(source.url)), `${id}: the WHO version names WHO pages`);
  }
  const overview = guide.womensHealthAnswer("womens-health-overview", { us: true }).text;
  for (const word of ["polycystic ovary syndrome", "breastfeeding", "sexually transmitted infections and HIV", "heart health", "check-ups and screenings"]) assert.ok(overview.includes(word), word);
});

test("the facts in the United States answers are the ones the pages gave", () => {
  const us = id => guide.womensHealthAnswer(id, { us: true }).text;
  const checkups = us("checkups");
  for (const fact of [/at 21 and every 3 years after/, /every 1 to 2 years starting at 40/, /colon cancer screening at 45/, /lung cancer screening at 50 for women with a smoking history/, /bone measurement test at 65 and older/, /cholesterol screening every 5 years/, /BRCA1 or BRCA2/, /older than 15 need an HIV test at least once/, /not a personal plan/]) assert.match(checkups, fact);
  const sti = us("sti-hiv");
  for (const fact of [/many STIs cause only mild symptoms or none/, /Condoms are the best way|condoms are the best way to prevent STIs/, /within three days of exposure and is taken for 28 days/, /up to 40% of the time/, /3 to 12 weeks/, /older than 15 need an HIV test at least once/, /Some STIs can be cured and some cannot/]) assert.match(sti, fact);
  const pcos = us("pcos");
  for (const fact of [/about 1 in 10 women of childbearing age/, /no single test/, /at least two of these/, /even a 10% weight loss helps/, /FDA has not approved them for PCOS/, /1-800-994-9662/, /A doctor should guide diagnosis and treatment/]) assert.match(pcos, fact);
  const heart = us("heart-health");
  for (const fact of [/more than 60 million women \(44%\)/, /about 1 in 5 female deaths/, /at least 150 minutes of physical activity a week/, /twice the risk of heart disease later in life/, /call 9-1-1 right away/, /often underdiagnosed in women/]) assert.match(heart, fact);
  const feeding = us("breastfeeding");
  for (const fact of [/exclusive breastfeeding for about the first 6 months/, /2 years or older/, /Only a few medicines are not recommended/, /LactMed/, /implicated in passing HIV from mother to baby/]) assert.match(feeding, fact);
});

test("the facts in the WHO answers are the ones the pages gave", () => {
  const who = id => guide.womensHealthAnswer(id, { us: false }).text;
  const checkups = who("checkups");
  for (const fact of [/every 5 to 10 years from age 30/, /aged 50 to 69/, /at least 8 antenatal contacts/, /depends on your country's health programme/]) assert.match(checkups, fact);
  const sti = who("sti-hiv");
  for (const fact of [/374 million new infections/, /syphilis, gonorrhoea, chlamydia and trichomoniasis/, /hepatitis B and HPV/, /do not protect against infections that cause sores outside the genitals/]) assert.match(sti, fact);
  const pcos = who("pcos");
  for (const fact of [/10 to 13% of women worldwide/, /up to 70%/, /at least two of these/, /ovarian cysts are not required/]) assert.match(pcos, fact);
  const heart = who("heart-health");
  for (const fact of [/pain or discomfort in the centre of the chest/, /women are more likely than men to have shortness of breath/, /sudden weakness of the face, arm or leg/, /seek medical care immediately/]) assert.match(heart, fact);
  const feeding = who("breastfeeding");
  for (const fact of [/within 1 hour of birth/, /only breast milk for the first 6 months/, /up to 2 years of age or beyond/, /at least 12 months/]) assert.match(feeding, fact);
});

const planner = () => new OpenEndedPlanner({ model: { plan: async () => { throw new Error("must not reach the AI planning model"); }, respond: async () => { throw new Error("the guide must answer without the model"); } }, tools: { list: async () => [] }, applications: { list: () => [] } });
const ask = (text, timeZone, country) => planner().plan({ command: { text, tenantId: "t1", actorId: "u1", locale: "en", channel: "typed" }, context: { timeZone, ...(country ? { country } : {}) } });

test("through the planner, with no AI model: the United States version in the US and the WHO version elsewhere, each with sources and no steps; an urgent question is not taken", async () => {
  const cases = [["Which health screenings should a woman have at age 45?", "checkups"], ["How can a woman protect herself from HIV and other infections?", "sti-hiv"], ["What is PCOS and how is it managed?", "pcos"], ["What are the signs of heart disease in women?", "heart-health"], ["How long should I breastfeed?", "breastfeeding"]];
  for (const [text, id] of cases) {
    const us = await ask(text, "America/Chicago");
    assert.equal(us.knowledge, `womens-health:${id}`, text); assert.deepEqual(us.steps, []); assert.equal(us.guardrail, "womens-health-information");
    assert.ok(us.sources.length >= 1 && us.sources.every(source => /cdc\.gov|womenshealth\.gov/.test(source.url)), text);
    assert.match(us.response, /checked 19 October 2026/);
    const ke = await ask(text, "Africa/Nairobi", "ke");
    assert.equal(ke.knowledge, `womens-health:${id}`, text); assert.ok(ke.sources.every(source => /who\.int/.test(source.url)), text);
  }
  await assert.rejects(ask("I was raped, do I need an HIV test?", "America/Chicago"), /must not reach the AI planning model|guide must answer/, "an urgent question is not taken by the guide");
});

test("the new pages are in the weekly source check", () => {
  const urls = collectSources().map(entry => entry.url);
  for (const url of ["https://womenshealth.gov/a-z-topics/polycystic-ovary-syndrome", "https://womenshealth.gov/a-z-topics/sexually-transmitted-infections", "https://womenshealth.gov/hiv-and-aids/hiv-prevention", "https://womenshealth.gov/hiv-and-aids/hiv-and-aids-basics/hiv-testing", "https://womenshealth.gov/sites/default/files/_documents/2026/nwhw/health_screenings_508_final.pdf", "https://www.cdc.gov/heart-disease/about/women-and-heart-disease.html", "https://www.cdc.gov/breastfeeding/php/faq/faq.html", "https://www.who.int/news-room/fact-sheets/detail/sexually-transmitted-infections-(stis)", "https://www.who.int/news-room/fact-sheets/detail/polycystic-ovary-syndrome", "https://www.who.int/news-room/fact-sheets/detail/cardiovascular-diseases-(cvds)", "https://www.who.int/news-room/fact-sheets/detail/infant-and-young-child-feeding"]) assert.ok(urls.includes(url), url);
});
