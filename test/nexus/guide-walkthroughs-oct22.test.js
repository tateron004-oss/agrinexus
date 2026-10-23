"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const registry = require("../../nexus/knowledge/guide-walkthroughs.js");
const offers = require("../../nexus/knowledge/offers.js");
const Walkthrough = require("../../public/kyro-walkthrough.js");
const { walkthroughAsk } = require("../../nexus/knowledge/california-walkthroughs.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { defaultApplicationManifests } = require("../../nexus/apps/default-manifests.js");
const { fakeMemory } = require("./farmwork-fake.js");

// Asked by the owner on 22 October 2026: "we are going to have to hold people's hands ... as a teacher this is how I would teach a process for those who will not have an instructor to help them, especially if they have never been
// exposed to the content before". Every checked guide has step-by-step walkthroughs (walkthrough-kit.js, guide-walkthroughs.js). This one test holds every walkthrough of every guide to the same rules: a person who has never done
// the thing is told what to do, what to have ready, how they will know the step is finished, and what the new words mean; each step comes from the guide's official pages or says it is Kyro's own working practice; Kyro never
// files, applies, signs, pays or sends for them and never asks for a secret; the words that ask for it are taken by the guide's topic matcher; the plan carries it; the answer offers it; and the checklist holds its steps.
const GUIDES = {
  "us-community-support": require("../../nexus/knowledge/us-community-support.js"), "church-guide": require("../../nexus/knowledge/church-guide.js"), "parents-guide": require("../../nexus/knowledge/parents-guide.js"),
  "womens-health": require("../../nexus/knowledge/womens-health.js"), "chronic-conditions": require("../../nexus/knowledge/chronic-conditions.js"), "small-business-technology": require("../../nexus/knowledge/small-business-technology.js"),
  "ai-tools-for-business": require("../../nexus/knowledge/ai-tools-for-business.js"), "africa-small-business": require("../../nexus/knowledge/africa-small-business.js"), "us-small-business": require("../../nexus/knowledge/us-small-business.js"),
  "california-business": require("../../nexus/knowledge/california-business.js"), "pr-events-guide": require("../../nexus/knowledge/pr-events-guide.js"), "athlete-guide": require("../../nexus/knowledge/athlete-guide.js"), "safety-guide": require("../../nexus/knowledge/safety-guide.js")
};
const ALL = registry.FAMILIES.flatMap(family => Object.entries(family.WALKTHROUGHS).map(([id, def]) => ({ family, id, def })));

test("the registry lists every guide's family once, and each walkthrough goes with a real topic of its guide", () => {
  assert.equal(new Set(registry.FAMILIES.map(family => family.label)).size, registry.FAMILIES.length, "one family for each guide");
  for (const family of registry.FAMILIES) {
    if (family.ownFeature) continue;
    assert.ok(GUIDES[family.label], family.label);
    assert.equal(new Set(Object.values(family.WALKTHROUGHS).map(def => def.topic)).size, Object.keys(family.WALKTHROUGHS).length, `${family.label}: one walkthrough for each topic`);
  }
  for (const { family, id, def } of ALL.filter(entry => !entry.family.ownFeature)) {
    const topics = family.label === "womens-health" ? { ...GUIDES[family.label].TOPICS, ...GUIDES[family.label].WHO_TOPICS } : GUIDES[family.label].TOPICS;
    assert.ok(topics[def.topic], `${family.label}/${id}: topic ${def.topic}`);
    assert.match(id, /^[a-z0-9-]+$/);
  }
});

test("every step says what to do, what to have ready, how the person knows it is finished and what the new words mean; none files, pays, signs or asks for a secret", () => {
  const product = /\b(?:Vanguard|Fidelity|Schwab|Robinhood|Coinbase|Binance|Bitcoin|Safaricom|Airtel|OPay|PalmPay|Moniepoint|Kuda|Paystack|Flutterwave)\b/;
  for (const { family, id, def } of ALL) {
    const walk = family.walkthrough(id);
    assert.ok(walk && walk.id === `${family.prefix}-${id}`, id);
    assert.ok(walk.steps.length >= 4 && walk.steps.length <= 8, `${walk.id}: a walkthrough short enough to follow (${walk.steps.length} steps)`);
    assert.ok(walk.title.length >= 12 && walk.title.length <= 110, `${walk.id}: title`);
    assert.equal(walk.checkedOn, family.CHECKED_ON);
    assert.match(def.phrase, /^[a-z0-9][^A-Z]*$|^[a-z0-9]/, `${walk.id}: phrase`);
    assert.equal(new Set(walk.steps.map(step => step.title)).size, walk.steps.length, `${walk.id}: no two steps with the same title`);
    for (const step of walk.steps) {
      assert.ok(step.title.length >= 8 && step.title.length <= 90, `${walk.id}: title "${step.title}"`);
      assert.ok(step.text.length >= 40 && step.text.length <= 800, `${walk.id}: "${step.title}" text length ${step.text.length}`);
      assert.ok(Array.isArray(step.gather) && step.gather.length >= 1 && step.gather.every(item => typeof item === "string" && item.length > 2), `${walk.id}: "${step.title}" says what to have ready`);
      assert.ok(typeof step.done === "string" && step.done.length >= 12 && step.done.length <= 220, `${walk.id}: "${step.title}" says how the person knows they are finished (${(step.done || "").length})`);
      assert.doesNotMatch(step.done, /^You are finished with this step when/i, `${walk.id}: "${step.title}" done line is the end of the sentence the page starts`);
      assert.ok(Array.isArray(step.words) && step.words.length <= 4 && step.words.every(word => word.term.length >= 2 && word.term.length <= 60 && word.means.length >= 10 && word.means.length <= 220), `${walk.id}: "${step.title}" words`);
      if (step.link) { assert.match(step.link.url, /^https:\/\/[^\s]+$/, `${walk.id}: "${step.title}" link`); assert.ok(step.link.name.length > 8); }
      else if (!family.ownFeature) assert.match(step.text, /Kyro's own working practice|I found no|I could not|The guide does not say/, `${walk.id}: "${step.title}" has no official page, so it says so`);
      assert.doesNotMatch(step.text, /\byou must (?:file|apply)\b|\bI (?:will|can) (?:file|send|apply|sign|pay|transfer|invest|buy|sell|register|submit|book|call|diagnose|prescribe)\b|\bguarantee[sd]? (?:a |your )?(?:return|profit|approval|result|cure)\b/i, `${walk.id}: "${step.title}"`);
      assert.doesNotMatch(step.text + step.done + JSON.stringify(step.words), product, `${walk.id}: "${step.title}" names no company or product`);
      assert.doesNotMatch(step.gather.join(" "), /\b(?:password|PIN number|account number|social security number|card number)\b/i, `${walk.id}: "${step.title}" never asks you to gather a secret`);
      assert.doesNotMatch(step.text, /\b(?:take|taking) \d+ ?(?:mg|milligrams?|tablets?|pills?)\b|\bdose of\b/i, `${walk.id}: "${step.title}" gives no dose`);
    }
    assert.ok(family.ownFeature || walk.sources.length >= 1, `${walk.id}: sources`);
    assert.equal(new Set(walk.sources.map(source => source.url)).size, walk.sources.length, `${walk.id}: each source once`);
    const clean = Walkthrough.sanitize(walk);
    assert.ok(clean && clean.steps.length === walk.steps.length, `${walk.id}: the page takes it`);
    assert.deepEqual(clean.steps.map(step => step.done), walk.steps.map(step => step.done), `${walk.id}: the page keeps what finished means`);
    assert.deepEqual(clean.steps.map(step => step.words.length), walk.steps.map(step => step.words.length), `${walk.id}: and the words`);
  }
});

test("the words that ask for each walkthrough are a walkthrough request, are taken by the guide's matcher as that topic, and find the walkthrough; the plain question is not a walkthrough request", () => {
  for (const { family, id, def } of ALL) {
    const say = `Walk me through ${def.phrase}`;
    assert.equal(walkthroughAsk(say), true, say);
    assert.equal(family.topicOf(say), def.topic, say);
    assert.equal((registry.walkthroughForText(say) || registry.walkthroughForText(say, { late: true }))?.id, `${family.prefix}-${id}`, say);
    assert.equal(walkthroughAsk(def.phrase), false, def.phrase);
    for (const other of ["Take me through", "Guide me through", "Step by step, how do I do"]) assert.equal(walkthroughAsk(`${other} ${def.phrase}`), true, `${other} ${def.phrase}`);
  }
});

function planner() {
  const model = { plan: async () => { throw new Error("the AI model must not be asked"); }, respond: async () => null };
  const tools = [{ tool_id: "lists.create", domain: "lists", description: "", risk_tier: "low", confirmation_required: false }];
  return new OpenEndedPlanner({ model, tools: { list: async () => tools }, applications: { list: () => defaultApplicationManifests() }, memory: Object.assign(fakeMemory(), { search: async () => [] }) });
}
const ask = (p, text, timeZone = "America/Chicago") => p.plan({ command: { text, tenantId: "t1", actorId: "u1", locale: "en" }, context: { timeZone, deterministicOnly: false } });

test("through the planner, with no AI model: each walkthrough is carried with its steps and sources, and none is offered over itself", async () => {
  const p = planner();
  for (const { family, id, def } of ALL) {
    const zone = family.label === "africa-small-business" ? "Africa/Nairobi" : "America/Chicago";
    const walk = await ask(p, `Walk me through ${def.phrase}`, zone);
    assert.equal(walk.walkthrough?.id, `${family.prefix}-${id}`, def.phrase);
    assert.equal(walk.knowledge, `${family.label}:walkthrough:${family.prefix}-${id}`, def.phrase);
    assert.deepEqual(walk.steps, []); assert.ok(family.ownFeature || walk.sources.length >= 1); assert.equal(walk.offers, undefined);
    assert.match(walk.response, /^Okay, I will walk you through .+, one step at a time\. There are \d steps\. I only guide you: you do each step yourself, and I never file, apply, sign, pay or send anything for you\.$/);
  }
});

test("every walkthrough is offered after its topic's answer, the offered words run it, and the checklist holds the walkthrough's steps", async () => {
  const p = planner();
  for (const { family, id, def } of ALL) {
    // (some guides also offer "show all my sources" after the walk and checklist offers)
    const list = offers.offersFor({ knowledge: `${family.label}:${def.topic}` }).filter(offer => offer.id !== "sources");
    assert.deepEqual(list.map(offer => offer.id), ["walk", "checklist"], id);
    assert.equal(list[0].command, `Walk me through ${def.phrase}`, id);
    assert.equal(list[1].command, `Save the steps for ${def.phrase} as a checklist`, id);
    assert.equal(offers.checklistAsk(list[1].command)?.rest, def.phrase, id);
    assert.deepEqual(offers.offersFor({ knowledge: `${family.label}:walkthrough:${family.prefix}-${id}` }), [], `${id}: none over a walkthrough`);
    const plan = await ask(p, list[1].command, family.label === "africa-small-business" ? "Africa/Nairobi" : "America/Chicago");
    assert.equal(plan.application, "lists", list[1].command); assert.equal(plan.steps[0].toolId, "lists.create");
    assert.deepEqual(plan.steps[0].input.items, family.walkthrough(id).steps.map(step => step.title), id);
  }
});

test("on the page: a step reads out when it is finished and what its new words mean, and shows both", () => {
  const walk = { id: "x-test", title: "Doing a test", checkedOn: "22 October 2026", sources: [], steps: [
    { title: "Find the form", text: "Open the form on the official page and read the first paragraph before you fill anything in.", gather: ["The letter"], done: "you have the form open in front of you.", words: [{ term: "Form", means: "the paper or page you fill in." }], link: null },
    { title: "Fill it in", text: "Write your name and the date in the boxes at the top of the form.", gather: ["A pen"], done: "", words: [], link: null }
  ] };
  const w = Walkthrough.createWalkthrough(walk);
  const said = Walkthrough.sayStep(w.snapshot(), "en");
  assert.match(said, /Form means the paper or page you fill in\./);
  assert.match(said, /You are finished with this step when: you have the form open in front of you\./);
  assert.doesNotMatch(Walkthrough.sayStep(w.next(), "en"), /You are finished/, "a step with no finish line says none");
  const nodes = [];
  const doc = { body: { appendChild: n => nodes.push(n) }, head: null, createElement: tag => { const n = { tag, children: [], className: "", textContent: "", attrs: {}, setAttribute(k, v) { this.attrs[k] = v; }, appendChild(c) { this.children.push(c); }, addEventListener() {}, remove() {} }; return n; }, querySelectorAll: () => [], getElementById: () => null };
  const screen = Walkthrough.show(doc, Walkthrough.createWalkthrough(walk).snapshot(), {}, "en");
  const classes = []; (function walkTree(n) { classes.push(n.className); (n.children || []).forEach(walkTree); })(screen);
  assert.ok(classes.includes("kyro-wt-done") && classes.includes("kyro-wt-words"));
});

test("the rig has a live case for walkthroughs of each guide: it opens, shows its first step, and finds a walkthrough", () => {
  const cases = require("../../scripts/live-voice-suite/cases/walkthroughs-guides.js");
  const all = require("../../scripts/live-voice-suite/cases/index.js").ALL.map(entry => entry.id);
  for (const entry of cases) {
    const walk = registry.walkthroughForText(entry.say) || registry.walkthroughForText(entry.say, { late: true });
    assert.ok(walk, entry.say);
    assert.ok(walk.steps[0].title.includes(entry.expect.text), `${entry.id}: ${entry.expect.text}`);
    assert.match(entry.expect.text, /^[A-Za-z0-9 ,.'’:;!&%-]+$/, `${entry.id}: no regular-expression characters in a case key`);
    assert.equal(entry.writes, undefined);
    assert.ok(all.includes(entry.id), entry.id);
  }
  for (const family of registry.FAMILIES) if (Object.keys(family.WALKTHROUGHS).length >= 2) assert.ok(cases.some(entry => entry.id.startsWith(`walk-${family.prefix}-`)), `${family.label}: a live case`);
});
