"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const offers = require("../../nexus/knowledge/offers.js");
const { WALKTHROUGHS, californiaWalkthrough, walkthroughAsk } = require("../../nexus/knowledge/california-walkthroughs.js");
const topics = require("../../public/kyro-business-topics.js");
const Screen = require("../../public/kyro-result-screen.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { defaultApplicationManifests } = require("../../nexus/apps/default-manifests.js");
const { fakeMemory } = require("./farmwork-fake.js");

// Asked by the owner (the free part of "real-time research"): after a checked guide's answer, Kyro offers what it can do next, as buttons and as words to say: walk me through it, save the steps as a checklist, show all my
// sources. Each offer is a command Kyro already runs, so it costs nothing.
const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");

test("a California answer with a walkthrough offers the walkthrough and a checklist, and every offer's words are taken by the route that runs it", () => {
  for (const id of Object.keys(WALKTHROUGHS)) {
    const list = offers.offersFor({ knowledge: `california-business:${id}` });
    assert.deepEqual(list.map(offer => offer.id), ["walk", "checklist", "sources"], id);
    const walk = list.find(offer => offer.id === "walk");
    assert.equal(walkthroughAsk(walk.command), true, `${id}: "${walk.command}" asks for a walkthrough`);
    assert.equal(topics.californiaTopic(walk.command), id === "ca-dbe" ? "ca-dbe" : id, `${id}: "${walk.command}" is this topic`);
    assert.ok(californiaWalkthrough(topics.californiaTopic(walk.command)), id);
    const checklist = list.find(offer => offer.id === "checklist");
    const ask = offers.checklistAsk(checklist.command);
    assert.ok(ask, `${id}: "${checklist.command}" asks for a checklist`);
    assert.equal(topics.californiaTopic(`Walk me through ${ask.rest}`), id, `${id}: the checklist is for the same process`);
  }
});

test("the other checked guides offer the sources; nothing is offered for Spanish, the source page, the live lists, a walkthrough or an answer that is not a guide", () => {
  assert.deepEqual(offers.offersFor({ knowledge: "us-small-business:loans" }).map(offer => offer.id), ["walk", "checklist", "sources"]);
  assert.deepEqual(offers.offersFor({ knowledge: "state-entities:state-entity:llc:TX" }).map(offer => offer.id), ["sources"]);
  assert.deepEqual(offers.offersFor({ knowledge: "california-business:ca-free-help" }).map(offer => offer.id), ["walk", "checklist", "sources"], "free help has a walkthrough since 22 October 2026");
  for (const plan of [{ knowledge: "california-business:ca-seller-permit" }, { knowledge: "us-small-business:loans" }]) assert.deepEqual(offers.offersFor(plan, { lang: "es" }), [], "the walkthroughs and the source page are English only");
  for (const knowledge of ["sources-page", "live-feeds:grants", "california-business:walkthrough:ca-seller-permit", "womens-health:x", ""]) assert.deepEqual(offers.offersFor({ knowledge }), [], knowledge);
  assert.deepEqual(offers.offersFor({ knowledge: "california-business:ca-seller-permit", walkthrough: { id: "x" } }), []);
  assert.deepEqual(offers.offersFor(null), []);
  assert.equal(offers.offerLine(offers.offersFor({ knowledge: "california-business:ca-seller-permit" })), "Say walk me through it and I will take you through it step by step, or say save it as a checklist.");
  assert.equal(offers.offerLine(offers.offersFor({ knowledge: "us-small-business:loans" })), "Say walk me through it and I will take you through it step by step, or say save it as a checklist.");
});

test("'save the steps for ... as a checklist' is recognized in its wordings, and an ordinary checklist request is not", () => {
  for (const say of ["Save the steps for getting a seller's permit in California as a checklist", "Make the steps for becoming an LA28 supplier into a checklist", "Turn getting a seller's permit in California into a checklist.", "Please save the steps for selling to the State of California as a to-do list"]) assert.ok(offers.checklistAsk(say), say);
  for (const say of ["Create a checklist called Groceries with milk, eggs", "Show my checklists", "Save this note", "Make a checklist"]) assert.equal(offers.checklistAsk(say), null, say);
});

function planner() {
  const model = { plan: async () => { throw new Error("the AI model must not be asked"); }, respond: async () => null };
  const tools = [{ tool_id: "lists.create", domain: "lists", description: "", risk_tier: "low", confirmation_required: false }];
  return new OpenEndedPlanner({ model, tools: { list: async () => tools }, applications: { list: () => defaultApplicationManifests() }, memory: Object.assign(fakeMemory(), { search: async () => [] }) });
}
const ask = (p, text) => p.plan({ command: { text, tenantId: "t1", actorId: "u1", locale: "en" }, context: { timeZone: "America/Los_Angeles", deterministicOnly: false } });

test("through the planner: a guide's answer carries its offers and the sentence that says them; the checklist offer makes a real checklist of the steps; Spanish and walkthroughs carry none", async () => {
  const p = planner();
  const answer = await ask(p, "How do I get a seller's permit in California?");
  assert.equal(answer.knowledge, "california-business:ca-seller-permit");
  assert.deepEqual(answer.offers.map(offer => offer.id), ["walk", "checklist", "sources"]);
  assert.match(answer.offerLine, /^Say walk me through it and I will take you through it step by step, or say save it as a checklist\.$/);
  assert.doesNotMatch(answer.response, /Say walk me through it/, "the answer itself is unchanged: the line is added when it is spoken");
  const loans = await ask(p, "How do I get an SBA microloan?");
  assert.deepEqual(loans.offers.map(offer => offer.id), ["walk", "checklist", "sources"]);
  assert.match(loans.offerLine, /^Say walk me through it and I will take you through it step by step, or say save it as a checklist.$/);
  const spanish = await ask(p, "¿Cómo obtengo un permiso de vendedor en California?");
  assert.equal(spanish.offers, undefined);
  const walk = await ask(p, "Walk me through getting a seller's permit in California");
  assert.equal(walk.offers, undefined);
  const checklist = await ask(p, "Save the steps for getting a seller's permit in California as a checklist");
  assert.equal(checklist.application, "lists");
  assert.equal(checklist.steps[0].toolId, "lists.create");
  assert.equal(checklist.steps[0].input.title, "A California seller's permit");
  assert.deepEqual(checklist.steps[0].input.items, californiaWalkthrough("ca-seller-permit").steps.map(step => step.title));
  const plain = await ask(p, "Create a checklist called Groceries with milk, eggs");
  assert.deepEqual(plain.steps[0].input.items, ["milk", "eggs"], "an ordinary checklist is unchanged");
  assert.equal(plain.offers, undefined);
});

function fakeDocument() {
  const make = tag => { const el = { tag, children: [], attrs: {}, className: "", textContent: "", style: {}, listeners: {}, appendChild(c) { el.children.push(c); return c; }, setAttribute(k, v) { el.attrs[k] = v; }, addEventListener(n, f) { el.listeners[n] = f; }, remove() {} }; Object.defineProperty(el, "href", { get: () => el.attrs.href, set: v => { el.attrs.href = v; } }); return el; };
  const body = make("body");
  return { body, head: make("head"), createElement: make, getElementById: () => ({}), querySelectorAll: () => [] };
}
const find = (node, test) => [node, ...node.children.flatMap(child => find(child, test))].filter(test);

test("the answer screen draws the offers as buttons that send their command, and keeps the screen", () => {
  const list = offers.offersFor({ knowledge: "california-business:ca-seller-permit" });
  const model = Screen.buildModel({ ok: true, response: "A California seller's permit is registered with the California Department of Tax and Fee Administration.", offers: list }, { lang: "en" });
  assert.deepEqual(model.offers.map(offer => offer.id), ["walk", "checklist", "sources"]);
  const sent = [];
  const screen = Screen.show(fakeDocument(), model, { onOffer: offer => sent.push(offer.command) }, "en");
  const buttons = find(screen, node => node.attrs["data-kyro-offer"]);
  assert.deepEqual(buttons.map(button => button.textContent), ["Walk me through it", "Save the steps as a checklist", "Show all my sources"]);
  for (const button of buttons) button.listeners.click();
  assert.deepEqual(sent, ["Walk me through getting a seller's permit in California", "Save the steps for getting a seller's permit in California as a checklist", "Show me your sources for small business"]);
  assert.equal(screen.attrs["data-kyro-keep"], "true");
  // bad offers are dropped, four at most, each id once
  assert.deepEqual(Screen.offerButtons({ offers: [{ id: "a", label: "", command: "x" }, { id: "b", label: "B", command: "" }, { id: "c", label: "C", command: "do c" }, { id: "c", label: "again", command: "do c" }, ...Array.from({ length: 6 }, (_, i) => ({ id: `n${i}`, label: `N${i}`, command: "x" }))] }).map(offer => offer.id), ["c", "n0", "n1", "n2"]);
  assert.equal(Screen.buildModel({ ok: true, response: "A California seller's permit is registered with the California Department of Tax and Fee Administration." }, { lang: "en" }).offers, undefined);
});

function pageApi(pending, screenShowing = true) {
  const start = app.indexOf("let kyroPendingOffers = [];");
  const end = app.indexOf("// The pages behind the answer on the screen (see kyro-result-screen.js)");
  assert.ok(start > 0 && end > start, "the offers code is in app.js");
  const sent = [];
  const context = { document: { querySelector: () => (screenShowing ? {} : null) }, kyroTakeOverTurn() {}, handleNexusUnifiedBrainRuntimeCommand: async (command, options) => { sent.push([command, options && options.source]); return true; } };
  vm.runInNewContext(`${app.slice(start, end)}\nkyroPendingOffers = ${JSON.stringify(pending)}; this.say = kyroOfferCommand; this.run = kyroRunOffer;`, context);
  return { context, sent };
}

test("on the page: the offered words, said or typed, send the offer's command while its buttons are on the screen; nothing else is taken", () => {
  const pending = offers.offersFor({ knowledge: "california-business:ca-seller-permit" });
  const page = pageApi(pending);
  for (const say of ["Walk me through it.", "Yes, walk me through it", "walk me through it please", "Save it as a checklist!", "Show me all my sources"]) assert.equal(page.context.say(say, {}), true, say);
  assert.deepEqual(page.sent.map(item => item[0]), ["Walk me through getting a seller's permit in California", "Walk me through getting a seller's permit in California", "Walk me through getting a seller's permit in California", "Save the steps for getting a seller's permit in California as a checklist", "Show me your sources for small business"]);
  assert.ok(page.sent.every(item => item[1] === "typed"));
  for (const say of ["Open the map", "Walk me through the weather", "yes", "what is a seller's permit"]) assert.equal(page.context.say(say, {}), false, say);
  assert.equal(pageApi(pending, false).context.say("Walk me through it", {}), false, "no buttons on the screen, no offers");
  assert.equal(pageApi([]).context.say("Walk me through it", {}), false);
  assert.equal(page.context.run(null), false);
});

test("the page hands the plan's offers to the screen, speaks the offer after the answer (never over a walkthrough), and hears the offered words first", () => {
  assert.match(app, /if \(Array\.isArray\(result\.plan\?\.offers\) && result\.plan\.offers\.length\) answer\.offers = result\.plan\.offers;/);
  assert.match(app, /if \(answerOnScreen && result\.plan\?\.offerLine && !result\.plan\?\.walkthrough\) message = `\$\{message\} \$\{result\.plan\.offerLine\}`;/);
  assert.match(app, /onOffer: offer => kyroRunOffer\(offer, \{ typed: true \}\) \}, lang\);\s+kyroSourceLinks = Array\.isArray\(model\.links\) \? model\.links : \[\];\s+kyroPendingOffers = Array\.isArray\(model\.offers\) \? model\.offers : \[\];/);
  const walkFirst = app.indexOf('if (typeof kyroWalkthroughCommand === "function" && kyroWalkthroughCommand(said, options)) return true;');
  const offerNext = app.indexOf('if (typeof kyroOfferCommand === "function" && kyroOfferCommand(said, options)) return true;');
  const sourceNext = app.indexOf('typeof kyroOpenSourcePage === "function" && kyroOpenSourcePage(said, lang, options)');
  assert.ok(walkFirst > 0 && offerNext > walkFirst && sourceNext > offerNext);
});
