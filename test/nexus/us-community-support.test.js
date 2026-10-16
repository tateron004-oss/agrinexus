"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const guide = require("../../nexus/knowledge/us-community-support.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");

// The checked guide to official help for veterans, older adults, young people and nonprofits (nexus/knowledge/us-community-support.js). Every fact was read on the date in CHECKED_ON from the official page named in
// each topic's sources. These tests keep it honest: questions reach the right topic, a record or a person's own words are never taken, every answer carries its sources, the date and the warning, and no phone number appears
// that was not read on an official page.

test("which questions reach which topic, and which are records, drafts or other talk", () => {
  const yes = {
    "What is the Veterans Crisis Line?": "vet-crisis", "What help is there for veterans?": "vet-overview", "What benefits can a veteran get?": "vet-overview", "How does a veteran apply for health care?": "vet-health",
    "How do I file a VA disability claim?": "vet-disability", "Tell me about the GI Bill": "vet-gi-bill", "Can a veteran get a home loan?": "vet-home-loan", "Who can help me with my VA claim for free?": "vet-free-help",
    "I'm a veteran and I'm homeless, what can I do?": "vet-homeless", "Help me find a job as a veteran.": "vet-jobs", "Find resources for veteran-owned businesses.": "vet-business", "What is a Vet Center?": "vet-center",
    "What help is there for seniors?": "sr-eldercare", "How do I get help with Medicare?": "sr-medicare", "What is Extra Help for prescriptions?": "sr-extra-help", "What is the Social Security phone number?": "sr-social-security",
    "How can an older person find benefits they qualify for?": "sr-benefits", "I think my grandmother is being scammed, who do I call?": "sr-fraud", "My dad is being neglected, who do I report it to?": "sr-abuse", "Where do I report a scam?": "sr-fraud",
    "Who can a teenager talk to if they are struggling?": "yt-crisis", "How do I report child abuse?": "yt-abuse", "I want to run away from home, who can help?": "yt-runaway", "Is there support for LGBTQ youth?": "yt-lgbtq",
    "What is the human trafficking hotline?": "yt-trafficking", "How many hours can a 15 year old work?": "yt-work-rules", "What is Job Corps?": "yt-job-corps", "Is the FAFSA free?": "yt-aid-scams", "Are scholarship fees a scam?": "yt-aid-scams",
    "How much does it cost to apply for 501(c)(3) status?": "np-exemption-fees", "What is Form 990?": "np-annual-filing", "Do I have to give donors a receipt?": "np-donor-receipts",
    "Do I need to register my nonprofit to fundraise in my state?": "np-state-registration", "How does a nonprofit register for federal grants on SAM.gov?": "np-federal-grants",
    "How do I check that a charity is real?": "np-check-charity", "Does our nonprofit board need a conflict of interest policy?": "np-governance", "How do I find my state association of nonprofits?": "np-state-association"
  };
  for (const [text, topic] of Object.entries(yes)) assert.equal(guide.communityTopic(text), topic, text);
  for (const text of ["Open documents.", "Add a donor named Maria Chen.", "Show my donations.", "What is the weather in Kisumu?", "Remind me to call my veteran uncle", "What is my profit this month?", "Who owes me money?",
    "I'm a veteran.", "I'm 70 years old.", "Help me find a job.", "How do I start a nonprofit?", "What is a 501(c)(3)?", "Find scholarships for students.", "How do I get a business loan?", "I feel sad.", "Log a donation of 200 dollars from Maria Chen"]) {
    assert.equal(guide.communityTopic(text), null, text);
  }
});

test("every topic has a plain answer, official sources with web addresses, the date checked, and the warning", () => {
  const OFFICIAL = /^https:\/\/(?:www\.)?(?:[a-z0-9-]+\.)*(?:va|veteranscrisisline|vetcenter\.va|dol|sba|acl|medicare|shiphelp|ssa|ojp|ftc|ed|988lifeline|crisistextline|childhelphotline|1800runaway|thetrevorproject|humantraffickinghotline|jobcorps|irs|nasconet|sam|grants|councilofnonprofits|benefitscheckup)\.(?:gov|org|net)\//;
  assert.ok(Object.keys(guide.TOPICS).length >= 30);
  for (const id of Object.keys(guide.TOPICS)) {
    const answer = guide.communityAnswer(id);
    assert.equal(answer.topic, id); assert.ok(["veterans", "seniors", "youth", "nonprofits"].includes(answer.group), id);
    assert.ok(answer.sources.length >= 1, id);
    for (const source of answer.sources) { assert.match(source.url, OFFICIAL, `${id}: ${source.url}`); assert.ok(source.name, id); }
    assert.match(answer.text, new RegExp(`\\(checked ${guide.CHECKED_ON}\\)`), id);
    assert.match(answer.text, /This is general information, not legal, medical, tax or financial advice, and numbers and rules change, so confirm on the official site or number\. I cannot call, file or apply for anything for you\.$/, id);
    assert.ok(answer.text.length < 1900, `${id} is short enough to say`);
  }
  assert.equal(guide.communityAnswer("nope"), null);
  assert.match(guide.communityAnswer("vet-crisis", { us: false }).text, /These are United States sources/);
});

// Every phone number in the guide is one that was read on an official page on CHECKED_ON (listed with the page). A new number must be read on its page first, then added here with it.
const VERIFIED_NUMBERS = new Map(Object.entries({
  "988": "988lifeline.org, veteranscrisisline.net", "838255": "veteranscrisisline.net", "800-827-1000": "va.gov/disability", "800-698-2411": "va.gov/disability", "877-927-8387": "vetcenter.va.gov/media/Call-Center-PSA.asp",
  "877-424-3838": "department.va.gov/homeless/nationalcallcenter", "888-442-4551": "va.gov GI Bill FAQ", "866-237-0275": "dol.gov/agencies/vets", "800-677-1116": "eldercare.acl.gov", "800-633-4227": "medicare.gov/talk-to-someone",
  "877-486-2048": "medicare.gov/talk-to-someone", "800-772-1213": "ssa.gov", "800-325-0778": "ssa.gov", "833-372-8311": "ovc.ojp.gov", "877-382-4357": "reportfraud.ftc.gov (1-877-FTC-HELP)", "741741": "crisistextline.org",
  "800-422-4453": "childhelphotline.org", "800-786-2929": "1800runaway.org", "866-488-7386": "thetrevorproject.org/get-help", "678678": "thetrevorproject.org/get-help", "866-803-3699": "thetrevorproject.org/get-help",
  "888-373-7888": "humantraffickinghotline.org", "233733": "humantraffickinghotline.org", "800-733-5627": "jobcorps.gov", "877-889-5627": "jobcorps.gov", "800-733-JOBS": "jobcorps.gov", "800-MEDICARE": "medicare.gov",
  "800.422.4453": "childhelphotline.org", "911": "emergency", "711": "relay"
}));
test("no phone number is in the guide that was not read on an official page", () => {
  // the spelled-out forms of numbers are checked as words first and taken out, then every digit group that looks like a phone number or a short code is checked
  const vanity = ["1-800-MEDICARE", "833-FRAUD-11", "1-877-FTC-HELP", "1-800-RUNAWAY", "800-733-JOBS"];
  const allowedVanity = new Set(["1-800-MEDICARE", "833-FRAUD-11", "1-877-FTC-HELP", "1-800-RUNAWAY", "800-733-JOBS"]);
  const digits = value => value.replace(/\D/g, "").replace(/^1(?=\d{10}$)/, "");
  const allowed = new Set([...VERIFIED_NUMBERS.keys()].filter(key => /^[\d.-]+$/.test(key)).map(digits));
  const used = new Set();
  for (const [id, topic] of Object.entries(guide.TOPICS)) {
    let text = topic.text;
    for (const word of vanity) { if (text.includes(word)) used.add(word); text = text.split(word).join(" "); }
    assert.ok(!/\b\d{3}-[A-Z]{4,}\b/.test(text), `${id}: a spelled-out number that is not on the list`);
    for (const found of text.match(/\b(?:1-)?\d{3}[-.]\d{3}[-.]\d{4}\b|\b(?:988|911|711|741741|838255|233733)\b|\b678-678\b/g) || []) {
      assert.ok(allowed.has(digits(found)), `${id}: ${found} is not on the list of numbers read on official pages`);
      used.add(digits(found));
    }
  }
  for (const word of used) if (/[A-Z]/.test(word)) assert.ok(allowedVanity.has(word), word);
  assert.ok(used.size >= 20, "the guide really carries the numbers");
});

test("the facts that matter most are there as the official pages gave them", () => {
  const text = id => guide.communityAnswer(id).text;
  assert.match(text("vet-crisis"), /dial 988 then press 1, text 838255/); assert.match(text("vet-crisis"), /24 hours a day, 365 days a year/); assert.match(text("vet-crisis"), /do not need to be enrolled with VA/);
  assert.match(text("vet-center"), /1-877-927-8387/); assert.match(text("vet-homeless"), /877-424-3838, open 24 hours a day, 7 days a week/);
  assert.match(text("vet-gi-bill"), /888-442-4551 \(TTY 711\), Monday to Friday, 8 a\.m\. to 7 p\.m\. Eastern/);
  assert.match(text("vet-free-help"), /services of an accredited VSO representative are always free/); assert.match(text("vet-free-help"), /attorney or claims agent can charge fees/);
  assert.match(text("vet-health"), /Form 10-10EZ/); assert.match(text("vet-health"), /24 continuous months/);
  assert.match(text("sr-eldercare"), /1-800-677-1116/); assert.match(text("sr-medicare"), /1-800-633-4227/); assert.match(text("sr-medicare"), /24 hours a day, 7 days a week except some federal holidays/);
  assert.match(text("sr-fraud"), /833-372-8311 \(833-FRAUD-11\), Monday to Friday, 10 a\.m\. to 6 p\.m\. Eastern/); assert.match(text("sr-fraud"), /60 or older/);
  assert.match(text("sr-abuse"), /You do not need proof/); assert.match(text("sr-abuse"), /anonymous reports are allowed/);
  assert.match(text("yt-crisis"), /text HOME to 741741/); assert.match(text("yt-abuse"), /not connected to 911/);
  assert.match(text("yt-lgbtq"), /text START to 678-678/); assert.match(text("yt-trafficking"), /more than 200 languages/);
  assert.match(text("yt-work-rules"), /3 hours on a school day, 18 hours in a school week, 8 hours on a non-school day or 40 hours in a non-school week/); assert.match(text("yt-work-rules"), /17 hazardous jobs/);
  assert.match(text("yt-job-corps"), /16 through 24/); assert.match(text("yt-aid-scams"), /FAFSA[^.]*is free/); assert.match(text("yt-aid-scams"), /Never share your FSA ID/);
  assert.match(text("np-exemption-fees"), /\$275 for Form 1023-EZ and \$600 for Form 1023/); assert.match(text("np-annual-filing"), /\$200,000 or more/); assert.match(text("np-annual-filing"), /three years in a row/);
  assert.match(text("np-donor-receipts"), /\$250 or more/); assert.match(text("np-federal-grants"), /SAM\.gov is free/); assert.match(text("np-federal-grants"), /every 365 days/);
  assert.match(text("np-governance"), /encouraged, not required/);
});

test("what the official pages did not say, the answers do not say either", () => {
  // VA.gov's contact page leaves most numbers blank, and Childhelp's page lists no hours; the guide must not make them up.
  assert.doesNotMatch(guide.communityAnswer("vet-home-loan").text, /guarantee/i);
  assert.doesNotMatch(guide.communityAnswer("yt-abuse").text, /24\/7|24 hours|confidential/i);
  assert.match(guide.communityAnswer("np-annual-filing").text, /Check the IRS instructions for the due date/);
  assert.match(guide.communityAnswer("sr-extra-help").text, /limits change every year/); assert.doesNotMatch(guide.communityAnswer("sr-extra-help").text, /\$\d/);
});

const catalog = { tools: [], applications: [] };
const planner = respond => new OpenEndedPlanner({ model: { plan: async () => { throw new Error("must not reach the AI planning model"); }, ...(respond ? { respond } : {}) }, tools: { list: async () => catalog.tools }, applications: { list: () => catalog.applications } });
const ask = (p, text, context = {}) => p.plan({ command: { text, tenantId: "t1", actorId: "u1", locale: "en", channel: "typed" }, context });

test("through the planner: the checked guide answers a person in the United States, with its sources, and no model call", async () => {
  const plan = await ask(planner(async () => { throw new Error("the guide must answer without the model"); }), "What help is there for veterans?", { timeZone: "America/Chicago" });
  assert.equal(plan.application, "conversation"); assert.deepEqual(plan.steps, []);
  assert.equal(plan.knowledge, "us-community-support:vet-overview"); assert.match(plan.response, /dial 988 then press 1/); assert.match(plan.response, /\(checked 15 October 2026\)/);
  assert.ok(plan.sources.some(source => /veteranscrisisline\.net/.test(source.url)));
  const np = await ask(planner(null), "Do I have to give donors a receipt?", { timeZone: "America/Denver" });
  assert.equal(np.knowledge, "us-community-support:np-donor-receipts");
});

test("through the planner: a question naming a US programme gets the US guide with no time zone; elsewhere it is left alone; a person's own records are never taken", async () => {
  assert.equal((await ask(planner(null), "What is the Veterans Crisis Line?")).knowledge, "us-community-support:vet-crisis");
  assert.equal((await ask(planner(null), "How do I get help with Medicare?", { deterministicOnly: true })).knowledge, "us-community-support:sr-medicare");
  // (a person in Kenya asking in general words is not given American numbers: the question goes on to the general planner, which this test's planner refuses to be)
  await assert.rejects(ask(planner(null), "What help is there for veterans?", { timeZone: "Africa/Nairobi" }), /must not reach the AI planning model/);
  assert.equal(guide.isCommunityUs("What help is there for veterans?"), false); assert.equal(guide.isCommunityUs("What is the Veterans Crisis Line?"), true);
});

// found by the live voice test: the voice model answered "What is the Veterans Crisis Line?" and "What help is there for veterans?" from memory ("depending on the country"), with no phone number. The page now takes these
// questions, with the same words the guide uses, and answers them from the guide.
test("the page answers a spoken question of this kind from the guide, on a US device or when it names a US programme", () => {
  const fs = require("node:fs"); const path = require("node:path"); const vm = require("node:vm");
  const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
  const topics = require("../../public/kyro-community-topics.js");
  assert.equal(topics.topic("What is the Veterans Crisis Line?"), "vet-crisis"); assert.equal(topics.usTimeZone("America/Los_Angeles"), true); assert.equal(topics.usTimeZone("Africa/Nairobi"), false);
  const start = app.indexOf("function kyroCommunityQuestion("); const fn = app.slice(start, app.indexOf("\n}\n", start) + 3);
  const owns = (text, zone) => new vm.Script(fn + "\nkyroCommunityQuestion").runInNewContext({ window: { KyroCommunityTopics: topics }, kyroDeviceTimeZone: () => zone, Boolean })(text);
  assert.equal(owns("What is the Veterans Crisis Line?", "Africa/Nairobi"), true, "it names a US programme");
  assert.equal(owns("What help is there for veterans?", "America/Chicago"), true, "a US device");
  assert.equal(owns("What help is there for veterans?", "Africa/Nairobi"), false, "no American numbers for a person in Kenya");
  assert.equal(owns("Open documents.", "America/Chicago"), false); assert.equal(owns("Show my donations.", "America/Chicago"), false);
  const route = app.slice(app.indexOf("function routeKyroVoiceIntakeTranscript("));
  assert.match(route, /typeof kyroCommunityQuestion === "function" && kyroCommunityQuestion\(trimmed\)\) \{\s+if \(!heardAgain\) \{[^]*?handleNexusUnifiedBrainRuntimeCommand\(trimmed, \{ source: "typed", kyroDirect: true \}\);[^]*?\}\s+return true;/);
  assert.ok(fs.readFileSync(path.join(__dirname, "../../public/index.html"), "utf8").includes('src="/kyro-community-topics.js?v=kyro-community-topics-2"'));
  assert.ok(fs.readFileSync(path.join(__dirname, "../../public/sw.js"), "utf8").includes("/kyro-community-topics.js?v=kyro-community-topics-2"));
});

// found by the live voice test, on an account with a business workspace: "Tell me about the GI Bill." was read as a question about the person's own bills and answered "your workspace has no bills recorded yet".
test("a question about the GI Bill or donor receipts is answered by the guide even though the business assistant would read it as the person's own records", async () => {
  const businessDispatch = require("../../nexus/business/voice-dispatch.js");
  assert.equal(businessDispatch.asksAboutOwnRecords("Tell me about the GI Bill."), true, "the business assistant does read it as bills");
  const plan = await ask(planner(null), "Tell me about the GI Bill.", { timeZone: "America/Chicago" });
  assert.equal(plan.knowledge, "us-community-support:vet-gi-bill"); assert.match(plan.response, /888-442-4551/);
  const receipts = await ask(planner(null), "Do I have to give donors a receipt?", { timeZone: "America/Chicago" });
  assert.equal(receipts.knowledge, "us-community-support:np-donor-receipts");
});

test("the guide is taken before the business-formation and own-records answers for the questions the live voice test showed being misread", async () => {
  for (const [text, topic] of [["I think my grandmother is being scammed, who do I call?", "sr-fraud"], ["Do I need to register my nonprofit to fundraise in my state?", "np-state-registration"],
    ["What is the Childhelp hotline?", "yt-abuse"], ["What is the Child Help hotline?", "yt-abuse"], ["I'm a veteran and I'm homeless, what can I do?", "vet-homeless"]]) {
    const plan = await ask(planner(null), text, { timeZone: "America/Los_Angeles" });
    assert.equal(plan.knowledge, `us-community-support:${topic}`, text);
  }
});
