"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const money = require("../../nexus/knowledge/money-walkthroughs.js");
const athlete = require("../../nexus/knowledge/athlete-walkthroughs.js");
const moneyGuide = require("../../nexus/knowledge/money-guide.js");
const athleteGuide = require("../../nexus/knowledge/athlete-guide.js");
const offers = require("../../nexus/knowledge/offers.js");
const moneyTopics = require("../../public/kyro-money-topics.js");
const athleteTopics = require("../../public/kyro-athlete-topics.js");
const KyroIntakeForms = require("../../public/kyro-intake-forms.js");
const Walkthrough = require("../../public/kyro-walkthrough.js");
const { walkthroughAsk } = require("../../nexus/knowledge/california-walkthroughs.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { defaultApplicationManifests } = require("../../nexus/apps/default-manifests.js");
const { fakeMemory } = require("./farmwork-fake.js");

// Asked by the owner on 22 October 2026: "make sure all aspects of what we are building can have Kyro talk them and walk them through it." Every topic of the money guide (United States, Kenya, Nigeria) has a walkthrough, and six processes in the
// athlete guide do. Kyro shows one step at a time with its official page and reads it out; the person does each step; Kyro never files, pays, applies, signs or moves money, and never needs an account number or a password.
const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
const MONEY = Object.entries(money.WALKTHROUGHS), ATHLETE = Object.entries(athlete.WALKTHROUGHS);
const OFFICIAL = /^https:\/\/(?:www\.)?(?:consumerfinance\.gov|files\.consumerfinance\.gov|fdic\.gov|ncua\.gov|irs\.gov|investor\.gov|consumer\.ftc\.gov|treasurydirect\.gov|fiscal\.treasury\.gov|dol\.gov|hud\.gov|usa\.gov|studentaid\.gov|kdic\.go\.ke|centralbank\.go\.ke|sasra\.go\.ke|new\.kenyalaw\.org|cma\.or\.ke|nse\.co\.ke|nssf\.or\.ke|sha\.go\.ke|kra\.go\.ke|odpc\.go\.ke|cak\.go\.ke|ndic\.gov\.ng|cbn\.gov\.ng|fccpc\.gov\.ng|sec\.gov\.ng|ngxgroup\.com|dmo\.gov\.ng|efcc\.gov\.ng|pencom\.gov\.ng|nass\.gov\.ng|tat\.gov\.ng|athleticskenya\.or\.ke|athleticsintegrity\.org|travel\.state\.gov|adoption\.state\.gov|studyinthestates\.dhs\.gov|ncaa\.org|web3\.ncaa\.org|usada\.org|globaldro\.com|wada-ama\.org|uniformlaws\.org|ftc\.gov|sos\.state\.tx\.us|sos\.alabama\.gov|nbpa\.com|nflpa\.com|content\.naic\.org|mlbplayers\.com)(?:\/|$)/;

test("there is a walkthrough for every topic of the money guide, and six for the athlete guide", () => {
  assert.equal(MONEY.length, Object.keys(moneyGuide.TOPICS).length);
  assert.deepEqual(Object.keys(moneyGuide.TOPICS).filter(id => !money.WALK_OF_TOPIC[id]), [], "every money topic has one");
  assert.equal(MONEY.filter(([, def]) => def.topic.startsWith("ke-")).length, 10); assert.equal(MONEY.filter(([, def]) => def.topic.startsWith("ng-")).length, 9);
  assert.equal(ATHLETE.length, 6);
  assert.deepEqual(ATHLETE.map(([, def]) => def.topic).sort(), ["athlete-agent", "athlete-abroad-visa", "athlete-eligibility", "athlete-kenya-registration", "athlete-supplements", "athlete-whereabouts"].sort());
  for (const [, def] of ATHLETE) assert.ok(athleteGuide.TOPICS[def.topic], def.topic);
});

test("every step has a title, plain words, what to gather and an official page, or says it is Kyro's own working practice; none promises, files or asks for a secret", () => {
  const product = /\b(?:Vanguard|Fidelity|Schwab|Robinhood|Coinbase|Binance|Bitcoin|Safaricom|Airtel|OPay|PalmPay|Moniepoint|Kuda|Paystack|Flutterwave)\b/;
  for (const [kind, list, build] of [["money", MONEY, money.moneyWalkthrough], ["athlete", ATHLETE, athlete.athleteWalkthrough]]) {
    for (const [id, def] of list) {
      const walk = build(id);
      assert.ok(walk && walk.id === `${kind}-${id}`, id);
      assert.ok(walk.steps.length >= 4 && walk.steps.length <= 8, `${id}: a walkthrough short enough to follow (${walk.steps.length} steps)`);
      assert.equal(walk.checkedOn, "22 October 2026");
      for (const step of walk.steps) {
        assert.ok(step.title.length >= 8 && step.title.length <= 90, `${id}: title "${step.title}"`);
        assert.ok(step.text.length >= 25 && step.text.length <= 800, `${id}: "${step.title}" text length ${step.text.length}`);
        assert.ok(Array.isArray(step.gather) && step.gather.length >= 1 && step.gather.every(item => typeof item === "string" && item.length > 2), `${id}: "${step.title}" says what to gather`);
        if (step.link) { assert.match(step.link.url, OFFICIAL, `${id}: "${step.title}" link ${step.link.url}`); assert.ok(step.link.name.length > 8); }
        else assert.match(step.text, /Kyro's own working practice|I found no|I could not/, `${id}: "${step.title}" has no official page, so it says so`);
        assert.doesNotMatch(step.text, /\byou must (?:file|apply)\b|\bI (?:will|can) (?:file|send|apply|sign|pay|transfer|invest|buy|sell)\b|\bguarantee[sd]? (?:a |your )?(?:return|profit|approval)\b/i, `${id}: "${step.title}"`);
        assert.doesNotMatch(step.text, product, `${id}: "${step.title}" names no company or product`);
        assert.doesNotMatch(step.gather.join(" "), /\b(?:password|PIN number|account number|social security number)\b/i, `${id}: "${step.title}" never asks you to gather a secret`);
      }
      assert.ok(walk.sources.length >= 1 && walk.sources.every(source => OFFICIAL.test(source.url)), `${id}: sources`);
      assert.equal(new Set(walk.sources.map(source => source.url)).size, walk.sources.length, `${id}: each source once`);
      // the page keeps the steps as sent
      const clean = Walkthrough.sanitize(walk);
      assert.ok(clean && clean.steps.length === walk.steps.length, `${id}: the page takes it`);
    }
  }
});

test("the words that ask for each walkthrough are taken by the topic matcher as that topic, are a walkthrough request, and find the walkthrough", () => {
  for (const [id, def] of MONEY) {
    const say = `Walk me through ${def.phrase}`;
    assert.equal(walkthroughAsk(say), true, say);
    assert.equal(moneyTopics.moneyTopic(say), def.topic, say);
    assert.equal(money.moneyWalkthroughFor(say)?.id, `money-${id}`, say);
    // the plain form of the same question is not a walkthrough request
    assert.equal(walkthroughAsk(def.phrase), false, def.phrase);
  }
  for (const [id, def] of ATHLETE) {
    const say = `Walk me through ${def.phrase}`;
    assert.equal(athleteTopics.athleteTopic(say), def.topic, say);
    assert.equal(athlete.athleteWalkthroughFor(say)?.id, `athlete-${id}`, say);
  }
  // other ways of asking
  for (const say of ["Take me through making a budget", "Guide me through checking my credit report", "Step by step, how do I make a budget?", "What are the steps to check my credit report?"]) { assert.equal(walkthroughAsk(say), true, say); assert.equal(moneyTopics.moneyTopic(say) !== null, true, say); }
  assert.equal(athleteTopics.athleteTopic("Take me through registering with Athletics Kenya"), "athlete-kenya-registration");
  // orders and records stay out
  for (const say of ["Walk me through my expenses this week", "Walk me through my bank balance", "Walk me through how to buy bitcoin"]) assert.equal(moneyTopics.moneyTopic(say), null, say);
});

test("the interviews: 'walk me through' a sponsorship proposal, a team packet, a program plan or a money plan starts the interview; a budget gets the steps", () => {
  assert.equal(KyroIntakeForms.isSponsorshipProposalRequest("Walk me through making a sponsorship proposal"), true);
  assert.equal(KyroIntakeForms.isTeamPacketRequest("Walk me through building a team registration packet"), true);
  assert.equal(KyroIntakeForms.isProgramKitRequest("Walk me through planning a financial education program"), true);
  assert.equal(KyroIntakeForms.isMoneyPlanRequest("Walk me through making a money plan"), true);
  assert.equal(KyroIntakeForms.isMoneyPlanRequest("Walk me through making a 90 day money plan"), true);
  assert.equal(KyroIntakeForms.isMoneyPlanRequest("Walk me through making a budget"), false, "the budget has its own steps");
  assert.equal(KyroIntakeForms.isMoneyPlanRequest("Walk me through making a spending plan"), false);
  assert.equal(KyroIntakeForms.isMoneyPlanRequest("Help me make a budget"), true, "an order for the plan is still the interview");
  assert.equal(money.moneyWalkthroughFor("Walk me through making a budget")?.id, "money-budget");
  // the guides' questions are still not the interviews'
  assert.equal(KyroIntakeForms.isSponsorshipProposalRequest("How do I write a sponsorship proposal?"), false);
});

function planner() {
  const model = { plan: async () => { throw new Error("the AI model must not be asked"); }, respond: async () => null };
  const tools = [{ tool_id: "lists.create", domain: "lists", description: "", risk_tier: "low", confirmation_required: false }];
  return new OpenEndedPlanner({ model, tools: { list: async () => tools }, applications: { list: () => defaultApplicationManifests() }, memory: Object.assign(fakeMemory(), { search: async () => [] }) });
}
const ask = (p, text, timeZone = "America/Chicago") => p.plan({ command: { text, tenantId: "t1", actorId: "u1", locale: "en" }, context: { timeZone, deterministicOnly: false } });

test("through the planner, with no AI model: a request to be walked through carries the steps and sources; the plain question offers the walkthrough and a checklist; a country decides where the words do not", async () => {
  const p = planner();
  const walk = await ask(p, "Walk me through checking my credit report");
  assert.equal(walk.knowledge, "money-guide:walkthrough:money-credit-report"); assert.deepEqual(walk.steps, []); assert.equal(walk.guardrail, "professional-advice");
  assert.equal(walk.walkthrough.id, "money-credit-report"); assert.ok(walk.walkthrough.steps.length >= 4); assert.ok(walk.sources.length >= 3);
  assert.match(walk.response, /^Okay, I will walk you through checking your credit report and fixing an error, one step at a time\. There are \d steps\. I only guide you: you do each step yourself, and I never file, apply, pay or move any money for you, and I never need an account number or a password\.$/);
  assert.equal(walk.offers, undefined, "no offers over a walkthrough");
  // the plain question: the answer, with the offers to be walked through it and to save it as a checklist
  const plain = await ask(p, "How do I check my credit report?");
  assert.equal(plain.knowledge, "money-guide:money-credit"); assert.equal(plain.walkthrough, undefined);
  assert.deepEqual(plain.offers.map(offer => offer.id), ["walk", "checklist"]);
  assert.equal(plain.offers[0].command, "Walk me through checking my credit report"); assert.equal(plain.offers[1].command, "Save the steps for checking my credit report as a checklist");
  assert.match(plain.offerLine, /^Say walk me through it and I will take you through it step by step, or say save it as a checklist\.$/);
  // a device in Nairobi or Lagos, and a question that names the country
  const nairobi = await ask(p, "Walk me through checking my credit report", "Africa/Nairobi");
  assert.equal(nairobi.walkthrough.id, "money-ke-crb-report"); assert.match(nairobi.response, /getting your credit report and fixing an error in Kenya/);
  const lagos = await ask(p, "Walk me through checking my credit report", "Africa/Lagos");
  assert.equal(lagos.walkthrough.id, "money-ng-credit-record");
  const named = await ask(p, "Walk me through checking a SACCO is licensed in Kenya");
  assert.equal(named.walkthrough.id, "money-ke-check-a-sacco");
  const ndic = await ask(p, "Walk me through checking a bank is covered by the NDIC in Nigeria");
  assert.equal(ndic.walkthrough.id, "money-ng-check-a-bank");
  // the athlete guide
  const kenya = await ask(p, "Walk me through registering with Athletics Kenya");
  assert.equal(kenya.walkthrough.id, "athlete-athletics-kenya"); assert.equal(kenya.knowledge, "athlete-guide:walkthrough:athlete-athletics-kenya");
  assert.match(kenya.response, /I never register, apply, file or sign for you\.$/);
  const visa = await ask(p, "Walk me through getting a US student visa as an athlete");
  assert.equal(visa.walkthrough.id, "athlete-us-student-visa");
  const athletePlain = await ask(p, "How do I register with Athletics Kenya?");
  assert.deepEqual(athletePlain.offers.map(offer => offer.id), ["walk", "checklist"]);
  // a topic with a walkthrough asked as an ordinary question is unchanged
  assert.equal((await ask(p, "What does FDIC insurance cover?")).knowledge, "money-guide:money-bank-account");
});

test("every money and athlete answer offers its walkthrough, the offered words run it, and the checklist holds the walkthrough's steps", async () => {
  const p = planner();
  for (const [id, def] of MONEY) {
    const list = offers.offersFor({ knowledge: `money-guide:${def.topic}` });
    assert.deepEqual(list.map(offer => offer.id), ["walk", "checklist"], id);
    assert.equal(list[0].command, `Walk me through ${def.phrase}`, id);
    assert.equal(list[1].command, `Save the steps for ${def.phrase} as a checklist`, id);
    assert.equal(offers.checklistAsk(list[1].command)?.rest, def.phrase, id);
    assert.deepEqual(offers.offersFor({ knowledge: `money-guide:walkthrough:money-${id}` }), [], `${id}: none over a walkthrough`);
  }
  for (const [id, def] of ATHLETE) assert.deepEqual(offers.offersFor({ knowledge: `athlete-guide:${def.topic}` }).map(offer => offer.id), ["walk", "checklist"], id);
  // the checklist is a real list of the steps, for a money, a Kenyan and an athlete process
  for (const [say, expectId, from] of [["Save the steps for checking my credit report as a checklist", "money-credit-report", money.moneyWalkthrough], ["Save the steps for getting a KRA PIN and filing my return in Kenya as a checklist", "money-ke-pin-and-returns", money.moneyWalkthrough], ["Save the steps for registering with Athletics Kenya as a checklist", "athlete-athletics-kenya", athlete.athleteWalkthrough]]) {
    const plan = await ask(p, say);
    assert.equal(plan.application, "lists", say); assert.equal(plan.steps[0].toolId, "lists.create", say);
    const walk = from(expectId.replace(/^(?:money|athlete)-/, ""));
    assert.equal(plan.steps[0].input.title, walk.title.slice(0, 120), say);
    assert.deepEqual(plan.steps[0].input.items, walk.steps.map(step => step.title), say);
  }
  // an ordinary checklist is unchanged
  assert.deepEqual((await ask(p, "Create a checklist called Groceries with milk, eggs")).steps[0].input.items, ["milk", "eggs"]);
});

test("on the page: the plan's walkthrough opens on the screen, the matchers are cached under new versions, and the overviews say Kyro can walk a person through it", () => {
  assert.match(app, /result\.plan\.walkthrough && typeof kyroOpenWalkthrough === "function" && kyroOpenWalkthrough\(result\.plan\.walkthrough, message\)/);
  const index = fs.readFileSync(path.join(__dirname, "../../public/index.html"), "utf8");
  const sw = fs.readFileSync(path.join(__dirname, "../../public/sw.js"), "utf8");
  for (const tag of ["kyro-money-topics.js?v=kyro-money-topics-2", "kyro-athlete-topics.js?v=kyro-athlete-topics-3", "kyro-intake-forms.js?v=kyro-intake-forms-6"]) { assert.ok(index.includes(`<script src="/${tag}"></script>`), tag); assert.ok(sw.includes("`/" + tag + "`"), tag); }
  assert.match(moneyGuide.moneyAnswer("money-overview").text, /I can also walk you through it one step at a time: say walk me through making a budget, checking my credit report, or getting a KRA PIN/);
  assert.match(athleteGuide.athleteAnswer("athlete-overview").text, /I can also walk you through six processes one step at a time: registering with Athletics Kenya, getting a US student visa, filing your whereabouts/);
  // "what can you walk me through" and the path through the six steps
  assert.equal(moneyTopics.moneyTopic("Walk me through managing my money"), "money-overview");
  assert.equal(money.moneyWalkthrough("money-path").steps.length, 7);
});

test("the rig has a live case for a walkthrough in each area: it opens, shows its first step with an official page, and is closed", () => {
  const cases = require("../../scripts/live-voice-suite/cases/walkthroughs.js");
  assert.ok(cases.length >= 5);
  for (const entry of cases) {
    assert.ok(entry.id.startsWith("walk-"), entry.id);
    const walk = money.moneyWalkthroughFor(entry.say) || athlete.athleteWalkthroughFor(entry.say);
    assert.ok(walk, entry.say);
    assert.ok(walk.steps[0].title.includes(entry.expect.text) || walk.steps[0].text.includes(entry.expect.text) || walk.title.includes(entry.expect.text), `${entry.id}: ${entry.expect.text}`);
    assert.doesNotMatch(entry.expect.text, /[$^*+?()[\]{}|\\]/, `${entry.id}: no regular-expression characters in a case key`);
    assert.equal(entry.writes, undefined);
  }
  const all = require("../../scripts/live-voice-suite/cases/index.js").ALL.map(entry => entry.id);
  for (const entry of cases) assert.ok(all.includes(entry.id), entry.id);
});
