"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const Walk = require("../../public/kyro-walkthrough.js");
const { WALKTHROUGHS, californiaWalkthrough, walkthroughAsk } = require("../../nexus/knowledge/california-walkthroughs.js");
const california = require("../../nexus/knowledge/california-business.js");
const topics = require("../../public/kyro-business-topics.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { fakeMemory } = require("./farmwork-fake.js");

// Asked by the owner: "I want Kyro to walk them through this process, not apply or do it for them." Kyro shows ONE step at a time with its official page, reads it out, and the person does each step; every step is built from the
// same official pages as the California guide, and the person's place is kept so they can come back.
const root = path.join(__dirname, "..", "..");
const app = fs.readFileSync(path.join(root, "public", "app.js"), "utf8");

test("the walkthroughs: every step has a title, a plain text and (but for one) an official https page; each one ends by saying the person does it, and none claims Kyro applies", () => {
  for (const id of Object.keys(WALKTHROUGHS)) {
    const walk = californiaWalkthrough(id);
    assert.ok(walk.steps.length >= 3, id);
    assert.equal(walk.checkedOn, california.CHECKED_ON);
    assert.ok(walk.sources.length >= 1 && walk.sources.every(source => /^https:\/\//.test(source.url)), id);
    for (const step of walk.steps) {
      assert.ok(step.title && step.text.length > 40, `${id}: ${step.title}`);
      if (step.link) assert.match(step.link.url, /^https:\/\//);
      assert.doesNotMatch(step.text, /\bI (?:will|'ll|can) (?:apply|submit|file|register|send) (?:it |this |that |for you)/i, `${id}: ${step.title}`);
    }
    assert.match(walk.steps.at(-1).text + walk.steps.at(0).text + walk.steps.map(step => step.text).join(" "), /\b(?:yourself|yours to make|your own|your application|you do)\b/i, id);
  }
  assert.equal(californiaWalkthrough("ca-grants"), null, "a topic with no process has no walkthrough");
});

test("the words that ask to be walked through, and the California topic they pick", () => {
  for (const say of ["Walk me through getting California small business certification", "Help me get a seller's permit in California", "Step by step, how do I get certified in California?", "What are the steps to become an LA28 supplier", "Guide me through DBE certification in California"]) assert.equal(walkthroughAsk(say), true, say);
  for (const say of ["How do I get a seller's permit in California?", "What is a DBE?", "Walk the dog"]) assert.equal(walkthroughAsk(say), false, say);
  const picks = { "Walk me through getting California small business certification": "ca-certification", "Walk me through becoming an LA28 supplier": "ca-la28", "Walk me through a seller's permit in California": "ca-seller-permit", "Walk me through DBE certification in California": "ca-dbe", "Walk me through selling to the State of California": "ca-state-vendor" };
  for (const [say, id] of Object.entries(picks)) assert.equal(topics.californiaTopic(say), id, say);
});

test("through the planner, with no AI model: 'walk me through' carries the steps and the sources; the plain question keeps its answer; formation is left to its guide", async () => {
  const model = { plan: async () => { throw new Error("the AI model must not be asked"); }, respond: async () => null };
  const p = new OpenEndedPlanner({ model, tools: { list: async () => [] }, applications: { list: () => [] }, memory: Object.assign(fakeMemory(), { search: async () => [] }) });
  const ask = text => p.plan({ command: { text, tenantId: "t1", actorId: "u1", locale: "en" }, context: { timeZone: "America/Los_Angeles", deterministicOnly: true } });
  const walk = await ask("Walk me through getting a seller's permit in California");
  assert.equal(walk.knowledge, "california-business:walkthrough:ca-seller-permit");
  assert.equal(walk.walkthrough.steps.length, WALKTHROUGHS["ca-seller-permit"].steps.length);
  assert.match(walk.response, /^Okay, I will walk you through A California seller's permit, one step at a time\. There are 4 steps\. I only guide you: you do each step yourself, and I never apply for you\.$/);
  assert.ok(walk.sources.length >= 1);
  assert.equal((await ask("How do I get a seller's permit in California?")).walkthrough, undefined);
  // (forming has its own walkthroughs now; the plain question about forming is still the state formation guide's, with the state's fees)
  assert.equal((await ask("Walk me through registering a nonprofit in California")).knowledge, "california-business:walkthrough:ca-nonprofit-form");
  assert.equal((await ask("How do I register a nonprofit in California?")).knowledge, "state-entities:state-entity:nonprofit:CA");
  assert.equal((await ask("How do I register an LLC in California?")).knowledge, "state-entities:state-entity:llc:CA");
});

test("the library keeps the place, goes back and forward, stops on the last step and says the walk is the person's own", () => {
  const def = californiaWalkthrough("ca-seller-permit");
  const memory = new Map(); const storage = { getItem: key => (memory.has(key) ? memory.get(key) : null), setItem: (key, value) => memory.set(key, String(value)) };
  let clock = 1000;
  const walk = Walk.createWalkthrough(def, { storage, now: () => clock });
  assert.equal(walk.resumed, false);
  assert.equal(walk.snapshot().number, 1);
  assert.equal(walk.back().number, 1, "no step before the first");
  assert.equal(walk.next().number, 2); assert.equal(walk.next().number, 3);
  const again = Walk.createWalkthrough(def, { storage, now: () => clock + 5000 });
  assert.equal(again.resumed, true); assert.equal(again.snapshot().number, 3, "the place is kept");
  assert.equal(again.back().number, 2);
  assert.equal(Walk.createWalkthrough(def, { storage, now: () => clock + 31 * 24 * 3600 * 1000 }).snapshot().number, 1, "kept for 30 days");
  again.next(); again.next();
  const end = again.snapshot(); assert.equal(end.isLast, true);
  const finished = again.next(); assert.equal(finished.finished, true); assert.equal(finished.number, def.steps.length, "stays on the last step");
  assert.match(Walk.sayStep(finished, "en"), /That was the last step\. You submit it yourself: I never apply for you\./);
  assert.equal(again.restart().number, 1);
  assert.equal(Walk.createWalkthrough({ id: "x", steps: [] }), null);
  assert.equal(Walk.createWalkthrough(null), null);
  assert.equal(Walk.createWalkthrough(def, { storage: { getItem() { throw new Error("blocked"); }, setItem() { throw new Error("blocked"); } } }).snapshot().number, 1, "storage that fails changes nothing");
});

test("the line read aloud for a step names it, what to gather and how to go on; the controls are short phrases and 'done' stays the dismissal", () => {
  const walk = Walk.createWalkthrough(californiaWalkthrough("ca-seller-permit"));
  walk.next();
  const line = Walk.sayStep(walk.snapshot(), "en");
  assert.match(line, /^Step 2 of 4\. Gather what you need\. Have your business details ready/);
  assert.match(line, /You will need: Business details; Bank account information/);
  assert.match(line, /Say next when you have done this\.$/);
  for (const say of ["Next", "next step", "Continue", "Go on", "Ready", "I did it", "That's done"]) assert.equal(Walk.parseControl(say), "next", say);
  for (const say of ["Back", "go back", "previous step"]) assert.equal(Walk.parseControl(say), "back", say);
  for (const say of ["Repeat that", "Say it again", "again"]) assert.equal(Walk.parseControl(say), "repeat", say);
  assert.equal(Walk.parseControl("Start over"), "restart");
  assert.equal(Walk.parseControl("Where am I"), "where");
  for (const say of ["I'm done", "done", "I'm done with that", "close", "take me home", "How do I get a seller's permit in California?", "Next I want to open the map"]) assert.equal(Walk.parseControl(say), null, say);
  assert.equal(Walk.sayStep({ ...walk.snapshot(), finished: false, isLast: true, step: walk.snapshot().step }, "en").endsWith("This is the last step. You do it yourself; I never apply for you."), true);
});

function fakeDocument() {
  const make = tag => { const el = { tag, children: [], attrs: {}, className: "", textContent: "", style: {}, listeners: {}, appendChild(c) { el.children.push(c); return c; }, setAttribute(k, v) { el.attrs[k] = v; }, addEventListener(n, f) { el.listeners[n] = f; }, remove() { el.removed = true; } }; Object.defineProperty(el, "href", { get: () => el.attrs.href, set: v => { el.attrs.href = v; } }); return el; };
  const body = make("body");
  return { body, head: make("head"), createElement: make, getElementById: () => ({}), querySelectorAll: () => [] };
}
const find = (node, test) => [node, ...node.children.flatMap(child => find(child, test))].filter(test);

test("the screen shows the step, its official page and the website, the sources of the whole walkthrough, a kept screen, and the buttons do what they say", () => {
  const walk = Walk.createWalkthrough(californiaWalkthrough("ca-nonprofit-state"));
  walk.next(); walk.next();
  const doc = fakeDocument(); const pressed = [];
  const screen = Walk.show(doc, walk.snapshot(), { onNext: () => pressed.push("next"), onBack: () => pressed.push("back"), onRepeat: () => pressed.push("repeat"), onClose: () => pressed.push("close") }, "en");
  assert.equal(screen.attrs["data-kyro-result"], "walkthrough");
  assert.equal(screen.attrs["data-kyro-keep"], "true", "kept until closed");
  assert.equal(find(screen, node => node.className === "kyro-wt-progress")[0].textContent, "Step 3 of 6");
  assert.equal(find(screen, node => node.tag === "h3")[0].textContent, "Gather what the FTB asks for");
  const gather = find(screen, node => node.tag === "li").map(node => node.textContent);
  assert.ok(gather.includes("Bylaws") && gather.length >= 5);
  const links = find(screen, node => node.attrs["data-kyro-source-link"] === "true");
  assert.ok(links.length >= 3, "the step's page and the sources");
  assert.ok(links.every(a => /^https:\/\//.test(a.attrs.href) && a.target === "_blank" && a.rel === "noopener noreferrer"));
  assert.ok(links.some(a => /\(ftb\.ca\.gov\)$/.test(a.textContent)), "a source shows its website");
  const stepButton = find(screen, node => node.className === "kyro-wt-link")[0];
  assert.equal(find(stepButton, node => node.className === "kyro-wt-link-host")[0].textContent, "ftb.ca.gov", "the step's button shows the website too");
  for (const kind of ["back", "repeat", "next"]) find(screen, node => node.attrs["data-kyro-wt"] === kind)[0].listeners.click();
  find(screen, node => node.className === "kyro-wt-close")[0].listeners.click();
  assert.deepEqual(pressed, ["back", "repeat", "next", "close"]);
  assert.match(find(screen, node => node.className === "kyro-wt-note")[0].textContent, /^You do each step yourself\. I never apply for you\. Checked 19 October 2026\.$/);
  const last = Walk.createWalkthrough(californiaWalkthrough("ca-dbe")); while (!last.snapshot().isLast) last.next();
  const lastScreen = Walk.show(fakeDocument(), last.snapshot(), {}, "en");
  assert.equal(find(lastScreen, node => node.attrs["data-kyro-wt"] === "next").length, 0, "no next button on the last step");
});

function pageApi() {
  const start = app.indexOf("let kyroWalkthrough = null;");
  const end = app.indexOf("// The pages behind the answer on the screen (see kyro-result-screen.js)");
  assert.ok(start > 0 && end > start, "the walkthrough code is in app.js");
  const said = []; let drawn = 0; let returned = 0; const memory = new Map();
  const screens = { present: false };
  const context = {
    window: { KyroWalkthrough: Walk, localStorage: { getItem: key => (memory.has(key) ? memory.get(key) : null), setItem: (key, value) => memory.set(key, String(value)) } },
    document: { querySelector: selector => (screens.present && /walkthrough/.test(selector) ? {} : null), body: {}, createElement: () => ({}), getElementById: () => null, querySelectorAll: () => [] },
    languageCode: () => "en", kyroNoteActivity() {}, kyroTakeOverTurn() {}, kyroReturnToOrb: async () => { returned += 1; },
    setVoiceResponse: line => said.push(line)
  };
  context.window.KyroWalkthrough = { ...Walk, show: (doc, snap, handlers, lang) => { drawn += 1; screens.present = true; context.handlers = handlers; context.snap = snap; return {}; } };
  vm.runInNewContext(`${app.slice(start, end)}\nthis.open = kyroOpenWalkthrough; this.command = kyroWalkthroughCommand; this.opening = () => kyroWalkthroughOpening;`, context);
  return { context, said, counts: () => ({ drawn, returned }) };
}

test("on the page: opening reads the introduction and the first step; 'next', 'back' and 'start over' are taken only while it is on the screen, said or typed", () => {
  const page = pageApi();
  const walk = californiaWalkthrough("ca-seller-permit");
  assert.equal(page.context.command("next", {}), false, "nothing on the screen, nothing taken");
  assert.equal(page.context.open(walk, "Okay, I will walk you through it."), true);
  assert.match(page.context.opening(), /^Okay, I will walk you through it\. Step 1 of 4\. Check whether you need one\./);
  assert.equal(page.context.command("Next", {}), true);
  assert.match(page.said.at(-1), /^Step 2 of 4\. Gather what you need\./);
  assert.equal(page.context.command("go back", { typed: true }), true);
  assert.match(page.said.at(-1), /^Step 1 of 4\./);
  assert.equal(page.context.command("Say it again", {}), true);
  assert.equal(page.context.command("start over", {}), true);
  assert.equal(page.context.command("Open the map", {}), false);
  assert.equal(page.context.command("I'm done", {}), false);
  assert.equal(page.counts().drawn >= 5, true, "each move redraws the step");
  page.context.handlers.onClose();
  assert.equal(page.counts().returned, 1);
  assert.equal(page.context.open({ id: "x", steps: [] }, ""), false);
});

test("a person who comes back is welcomed to the step they were on", () => {
  const page = pageApi();
  const walk = californiaWalkthrough("ca-seller-permit");
  page.context.open(walk, "Okay."); page.context.command("next", {}); page.context.command("next", {});
  const again = pageApi();
  // (the same storage: the page keeps the place for 30 days)
  again.context.window.localStorage = page.context.window.localStorage;
  vm.runInNewContext("0", {});
  const second = pageApi();
  second.context.window.localStorage.setItem(Walk.KEY_PREFIX + "ca-seller-permit", JSON.stringify({ index: 2, at: Date.now() }));
  second.context.open(walk, "Okay.");
  assert.match(second.context.opening(), /Welcome back\. You were on step 3\. Step 3 of 4\./);
});

test("the page opens a walkthrough from the answer, reads the opening line, hears the controls first, and the script is loaded and cached", () => {
  assert.match(app, /if \(result && result\.plan && result\.plan\.walkthrough && typeof kyroOpenWalkthrough === "function" && kyroOpenWalkthrough\(result\.plan\.walkthrough, message\)\) return true;/);
  assert.match(app, /if \(answerOnScreen && result\.plan\?\.walkthrough && kyroWalkthroughOpening\) \{ message = kyroWalkthroughOpening; kyroWalkthroughOpening = ""; \}/);
  const spoken = app.indexOf('if (typeof kyroWalkthroughCommand === "function" && kyroWalkthroughCommand(said, options)) return true;');
  assert.ok(spoken > 0 && spoken < app.indexOf('typeof kyroOpenSourcePage === "function" && kyroOpenSourcePage(said, lang, options)'), "the controls are heard before anything else");
  assert.match(fs.readFileSync(path.join(root, "public", "index.html"), "utf8"), /<script src="\/kyro-walkthrough\.js\?v=kyro-walkthrough-3"><\/script>/);
  assert.ok(fs.readFileSync(path.join(root, "public", "sw.js"), "utf8").includes("/kyro-walkthrough.js?v=kyro-walkthrough-3"));
});
