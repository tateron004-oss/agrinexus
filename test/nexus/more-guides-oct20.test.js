"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const topics = require("../../public/kyro-business-topics.js");
const { WALKTHROUGHS: CA_WALKTHROUGHS, californiaWalkthrough } = require("../../nexus/knowledge/california-walkthroughs.js");
const { WALKTHROUGHS: US_WALKTHROUGHS, usWalkthrough, usWalkTopic } = require("../../nexus/knowledge/us-walkthroughs.js");
const offers = require("../../nexus/knowledge/offers.js");
const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
const { defaultApplicationManifests } = require("../../nexus/apps/default-manifests.js");
const { fakeMemory } = require("./farmwork-fake.js");
const { collectSources } = require("../../scripts/check-guide-sources.js");

// Asked by the owner: more hand-checked walkthroughs for the business community. Forming an LLC and a nonprofit corporation in California (from the Secretary of State's brochure), and, for any state, the SBA 8(a) program,
// NMSDC certification, choosing among the certifications for a minority-owned business, and applying for a federal grant on Grants.gov.
const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");

test("the new walkthroughs: steps with a plain text and an official https page, the person does each step, and nothing claims Kyro applies", () => {
  const all = [...["ca-llc", "ca-nonprofit-form"].map(id => californiaWalkthrough(id)), ...Object.keys(US_WALKTHROUGHS).map(id => usWalkthrough(id))];
  assert.equal(all.length, 6);
  for (const walk of all) {
    assert.ok(walk && walk.steps.length >= 5 && walk.steps.length <= 7, walk && walk.id);
    assert.match(walk.checkedOn, /^19 October 2026$/);
    assert.ok(walk.sources.length >= 3 && walk.sources.every(source => /^https:\/\//.test(source.url) && source.name), walk.id);
    for (const step of walk.steps) {
      assert.ok(step.title && step.text.length > 40, `${walk.id}: ${step.title}`);
      if (step.link) assert.match(step.link.url, /^https:\/\//);
      assert.doesNotMatch(step.text, /\bI (?:will|'ll|can) (?:apply|submit|file|register|send) (?:it |this |that |for you)/i, `${walk.id}: ${step.title}`);
    }
    assert.match(walk.steps.map(step => step.text + step.title).join(" "), /\b(?:yourself|yours to make|your own|your application|your filing|you do)\b/i, walk.id);
    assert.match(walk.steps.map(step => step.text).join(" "), /I cannot (?:file|submit|register|list|apply)/i, `${walk.id} says Kyro does not do it for the person`);
  }
  assert.equal(usWalkthrough("loans"), null);
});

test("the facts in the California formation walkthroughs are the ones the Secretary of State's brochure gives", () => {
  const llc = californiaWalkthrough("ca-llc").steps.map(step => step.text).join(" ");
  assert.match(llc, /\$70/);
  assert.match(llc, /\$15 handling fee applies only if you file in person/);
  assert.match(llc, /\$5 per document/);
  assert.match(llc, /\$800/);
  assert.match(llc, /within 90 days[\s\S]*every two years/);
  assert.match(llc, /does not issue licenses or permits/);
  const nonprofit = californiaWalkthrough("ca-nonprofit-form").steps.map(step => step.text).join(" ");
  assert.match(nonprofit, /\$30/);
  assert.match(nonprofit, /public benefit, mutual benefit or religious/);
  assert.match(nonprofit, /separate application to the Franchise Tax Board/);
  assert.match(nonprofit, /within 30 days after receiving assets/);
  assert.match(nonprofit, /within 90 days[\s\S]*every two years/);
  const eightA = usWalkthrough("8a").steps.map(step => step.text).join(" ");
  for (const fact of [/\$850,000/, /\$400,000/, /\$6\.5 million/, /10 September 2026/, /90 days to decide/, /nine years/]) assert.match(eightA, fact);
  const grants = usWalkthrough("grants").steps.map(step => step.text).join(" ");
  for (const fact of [/10 business days/, /Login\.gov/, /Create Workspace/, /50 characters/, /Authorized Organization Representative/]) assert.match(grants, fact);
});

test("forming an LLC or a nonprofit in California is a walkthrough only when it is asked as one; the plain question stays with the state formation guide", () => {
  const picks = { "Walk me through forming an LLC in California": "ca-llc", "Help me start an LLC in California": "ca-llc", "Walk me through forming a California nonprofit corporation": "ca-nonprofit-form", "Walk me through registering a nonprofit in California": "ca-nonprofit-form", "Walk me through what to do after forming a California nonprofit to be tax exempt": "ca-nonprofit-state", "Walk me through getting a seller's permit in California": "ca-seller-permit", "Walk me through getting certified as an LLC in California": "ca-certification" };
  for (const [say, id] of Object.entries(picks)) assert.equal(topics.californiaTopic(say), id, say);
  for (const say of ["How do I register an LLC in California?", "How do I form a nonprofit in California?", "What does an LLC cost in California?"]) assert.equal(topics.californiaTopic(say), null, say);
  assert.equal(topics.californiaTopic("¿Cómo formo una LLC en California?"), null);
});

test("the United States walkthroughs are found by the words that ask for them, and only for the four processes that have one", () => {
  const picks = { "Walk me through the SBA 8(a) program": "8a", "What are the steps to apply for 8(a)?": "8a", "Walk me through NMSDC minority business certification": "nmsdc", "Walk me through U.S. small business certifications": "certification", "Help me get certified": "certification", "Walk me through applying for a federal grant on Grants.gov": "grants" };
  for (const [say, id] of Object.entries(picks)) { assert.equal(topics.walkTopic(say), id, say); assert.equal(usWalkTopic(say), id, say); }
  for (const say of ["Walk me through starting a business", "Walk me through applying for an SBA loan", "Walk me through the weather", "What is the 8(a) program?", "How do I apply for a federal grant?", "Camíname por el programa 8(a)"]) assert.equal(topics.walkTopic(say), null, say);
  assert.equal(topics.topic("What is the 8(a) program?"), "8a", "the plain question keeps its answer");
  assert.equal(topics.isUsContext({ text: "Walk me through applying for a federal grant on Grants.gov" }), true);
});

function planner() {
  const model = { plan: async () => { throw new Error("the AI model must not be asked"); }, respond: async () => null };
  const tools = [{ tool_id: "lists.create", domain: "lists", description: "", risk_tier: "low", confirmation_required: false }];
  return new OpenEndedPlanner({ model, tools: { list: async () => tools }, applications: { list: () => defaultApplicationManifests() }, memory: Object.assign(fakeMemory(), { search: async () => [] }) });
}
const ask = (p, text, timeZone = "America/Los_Angeles") => p.plan({ command: { text, tenantId: "t1", actorId: "u1", locale: "en" }, context: { timeZone, deterministicOnly: false } });

test("through the planner: each walkthrough opens with its steps and sources; the guide's answer offers it; the checklist offer makes a real checklist; an ordinary question is unchanged", async () => {
  const p = planner();
  const cases = [
    ["Walk me through forming an LLC in California", "california-business:walkthrough:ca-llc", 6],
    ["Walk me through forming a California nonprofit corporation", "california-business:walkthrough:ca-nonprofit-form", 6],
    ["Walk me through the SBA 8(a) program", "us-small-business:walkthrough:us-8a", 6],
    ["Walk me through NMSDC minority business certification", "us-small-business:walkthrough:us-nmsdc", 5],
    ["Walk me through U.S. small business certifications", "us-small-business:walkthrough:us-certification", 5],
    ["Walk me through applying for a federal grant on Grants.gov", "us-small-business:walkthrough:us-grants", 6]
  ];
  for (const [say, knowledge, steps] of cases) {
    const plan = await ask(p, say);
    assert.equal(plan.knowledge, knowledge, say);
    assert.equal(plan.walkthrough.steps.length, steps, say);
    assert.ok(plan.sources.length >= 3, say);
    assert.equal(plan.offers, undefined, "a walkthrough carries no offers");
    assert.match(plan.response, new RegExp(`There are ${steps} steps\\. I only guide you`));
  }
  // on a device outside the United States, a question that does not name a United States programme is not taken as one
  assert.notEqual(await ask(p, "Walk me through applying for a federal grant", "Africa/Nairobi").then(plan => plan.knowledge, () => "left to the model"), "us-small-business:walkthrough:us-grants");
  // the plain questions keep their answers, and now offer the walkthrough and the checklist
  for (const [say, knowledge, phrase] of [
    ["How do I register an LLC in California?", "state-entities:state-entity:llc:CA", "forming an LLC in California"],
    ["How do I register a nonprofit in California?", "state-entities:state-entity:nonprofit:CA", "forming a California nonprofit corporation"],
    ["What is the 8(a) program?", "us-small-business:8a", "the SBA 8(a) program"],
    ["Tell me about NMSDC certification", "us-small-business:nmsdc", "NMSDC minority business certification"],
    ["What certifications are there for minority-owned businesses?", "us-small-business:certification", "U.S. small business certifications"],
    ["What federal grants are there for small businesses in general?", "us-small-business:grants", "applying for a federal grant on Grants.gov"]
  ]) {
    const plan = await ask(p, say);
    assert.equal(plan.knowledge, knowledge, say);
    assert.deepEqual(plan.offers.map(offer => offer.id), ["walk", "checklist", "sources"], say);
    assert.equal(plan.offers[0].command, `Walk me through ${phrase}`, say);
    assert.equal(plan.offers[1].command, `Save the steps for ${phrase} as a checklist`, say);
  }
  assert.equal((await ask(p, "How do I register an LLC in California?")).knowledge, "state-entities:state-entity:llc:CA");
  assert.equal((await ask(p, "What is the 8(a) program?")).knowledge, "us-small-business:8a");
  // the corporation in California has no walkthrough: only the sources are offered
  assert.deepEqual(offers.offersFor({ knowledge: "state-entities:state-entity:corporation:CA" }).map(offer => offer.id), ["sources"]);
  assert.deepEqual(offers.offersFor({ knowledge: "state-entities:state-entity:llc:TX" }).map(offer => offer.id), ["sources"]);
});

test("every offered command asks for the walkthrough and the checklist it names, and the checklist holds the walkthrough's steps", async () => {
  const p = planner();
  const ids = [["california-business:ca-seller-permit", "ca-seller-permit"], ["state-entities:state-entity:llc:CA", "ca-llc"], ["state-entities:state-entity:nonprofit:CA", "ca-nonprofit-form"], ["us-small-business:8a", "us-8a"], ["us-small-business:nmsdc", "us-nmsdc"], ["us-small-business:certification", "us-certification"], ["us-small-business:grants", "us-grants"]];
  for (const [knowledge, walkId] of ids) {
    const list = offers.offersFor({ knowledge });
    const walk = await ask(p, list.find(offer => offer.id === "walk").command);
    assert.match(walk.knowledge, new RegExp(`walkthrough:${walkId}$`), knowledge);
    const checklist = await ask(p, list.find(offer => offer.id === "checklist").command);
    assert.equal(checklist.steps[0].toolId, "lists.create", knowledge);
    assert.equal(checklist.steps[0].input.title, walk.walkthrough.title.slice(0, 120));
    assert.deepEqual(checklist.steps[0].input.items, walk.walkthrough.steps.map(step => step.title), knowledge);
  }
});

test("the page asks the server about a spoken walkthrough of a United States process, and the script is the new version", () => {
  assert.match(app, /typeof topics\.walkTopic === "function" && topics\.walkTopic\(text\)\) return topics\.isUsContext\(\{ timeZone: kyroDeviceTimeZone\(\), text \}\);/);
  const index = fs.readFileSync(path.join(__dirname, "../../public/index.html"), "utf8");
  const sw = fs.readFileSync(path.join(__dirname, "../../public/sw.js"), "utf8");
  assert.ok(index.includes("/kyro-business-topics.js?v=kyro-business-topics-9") && sw.includes("/kyro-business-topics.js?v=kyro-business-topics-9"));
});

test("the new pages are in the weekly source check, and the source page lists them", () => {
  const urls = collectSources().map(entry => entry.url);
  for (const url of ["https://bpd.cdn.sos.ca.gov/bizfile/bizfile-brochure.pdf", "https://bizfileonline.sos.ca.gov/", "https://www.calgold.ca.gov/", "https://certifications.sba.gov/", "https://www.grants.gov/quick-start-guide/applicants", "https://nmsdc.org/about/regional-affiliates/"]) assert.ok(urls.includes(url), url);
  const { sourcesPageAnswer } = require("../../nexus/knowledge/sources-page.js");
  const page = sourcesPageAnswer("show me your sources for small business").sources.map(source => source.url);
  assert.ok(page.includes("https://bpd.cdn.sos.ca.gov/bizfile/bizfile-brochure.pdf") && page.includes("https://www.grants.gov/quick-start-guide/applicants"));
});
