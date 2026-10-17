"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const items = require("../../nexus/personal/items.js");
const dispatch = require("../../nexus/business/voice-dispatch.js");
const { ordinaryConversationPlan } = require("../../nexus/brain/planner.js");

const app = fs.readFileSync(path.join(__dirname, "../../public/app.js"), "utf8");
const server = fs.readFileSync(path.join(__dirname, "../../server.js"), "utf8");
const slice = (source, start) => { const at = source.indexOf(start); return source.slice(at, source.indexOf("\n}\n", at) + 3); };

// Found by the full off-script voice audit (100 spoken requests on the live site).

test("'What notes do I have?' and its twins read the notes, and a question about one subject still finds that note", () => {
  for (const say of ["What notes do I have?", "Which notes do I have?", "What notes have I saved?", "What notes did I take?", "Do I have any notes?", "Do I have any notes saved?", "What are my notes?", "Read me my notes."])
    assert.equal(items.readRequest(say, "2026-10-16")?.action, "note-list", say);
  assert.deepEqual(items.readRequest("What notes do I have about the pump?", "2026-10-16"), { action: "note-find", query: "the pump" });
  assert.equal(items.readRequest("What documents do I have?", "2026-10-16"), null);
});

test("a marketing plan is a business strategy document, so it asks for a yes with its own words instead of the internal 'requires confirmation' error", () => {
  assert.equal(dispatch.classify("Write a marketing plan for my bakery."), "generateStrategy");
  assert.equal(dispatch.classify("Create a marketing plan for my bakery"), "generateStrategy");
  assert.equal(dispatch.classify("Draft a marketing strategy"), "generateStrategy");
});

test("how-to questions are for the checked guide, not an add-a-customer or start-a-workspace request, while the commands still work", () => {
  for (const question of ["How do I find customers for my new business?", "How do I start a business?", "How can I add a customer?", "How do I create a nonprofit?", "What is the best way to find new customers?"]) {
    assert.ok(!["addLead", "createWorkspace"].includes(dispatch.classify(question)), question);
  }
  assert.equal(dispatch.classify("Add a customer named Sam Lee"), "addLead");
  assert.equal(dispatch.classify("Create a new customer"), "addLead");
  assert.equal(dispatch.classify("Start a business workspace called Sunrise Poultry"), "createWorkspace");
  assert.equal(dispatch.classify("Create a nonprofit workspace"), "createWorkspace");
});

test("'what certifications can I get?' is a general question for the guide; what the workspace tracks is still answered from the workspace", () => {
  for (const question of ["I own a Hispanic owned restaurant, what certifications can I get?", "What certifications do I need to sell to the government?", "Are there certifications available for women?", "How do I get certified?"])
    assert.notEqual(dispatch.classify(question), "certificationReadiness", question);
  for (const question of ["What certifications do we have?", "Which certifications are we missing?", "What is our certification readiness?", "Are we certified?"]) assert.equal(dispatch.classify(question), "certificationReadiness", question);
});

test("the time and the date are answered in the language asked, with a zone a person can hear", () => {
  const context = { timeZone: "America/Los_Angeles", now: new Date("2026-10-16T17:53:00-07:00") };
  assert.equal(ordinaryConversationPlan("What time is it?", context).response, "It is 17:53 on Friday, 16 October 2026 (Pacific Daylight Time).");
  assert.equal(ordinaryConversationPlan("What is today's date?", context).response, "Today is Friday, 16 October 2026.");
  const time = ordinaryConversationPlan("¿Qué hora es?", context);
  assert.equal(time.response, "Son las 5:53 p. m. del viernes 16 de octubre de 2026 (hora de verano del Pacífico).");
  assert.equal(time.language, "es");
  assert.equal(ordinaryConversationPlan("Que dia es hoy", context).response, "Hoy es viernes 16 de octubre de 2026.");
  assert.equal(ordinaryConversationPlan("Dime la hora", context).response, time.response);
  assert.equal(ordinaryConversationPlan("¿Qué hora es?", { timeZone: "America/New_York", now: new Date("2026-10-16T13:05:00-04:00") }).response, "Es la 1:05 p. m. del viernes 16 de octubre de 2026 (hora de verano oriental).");
  assert.equal(ordinaryConversationPlan("¿Qué hora es?", { now: new Date() }), null, "with no known time zone it is left to the general answer, as before");
});

test("the page takes a spoken time or date question itself, so the voice model does not answer 'I can't see your device's time' first", () => {
  const clock = new vm.Script(`${app.slice(app.indexOf("const KYRO_CLOCK_QUESTION"), app.indexOf("let kyroDraftAskedAt"))}\nkyroClockQuestion`).runInNewContext({});
  for (const say of ["What time is it?", "What time is it right now?", "What is today's date?", "What day is it?", "What's the date today?", "Tell me the time.", "¿Qué hora es?", "Que hora es", "¿Qué día es hoy?", "¿Cuál es la fecha de hoy?", "Dime la hora"]) assert.equal(clock(say), true, say);
  for (const say of ["What time does the market open?", "Remind me at noon", "What is the weather?", "Set a timer", "¿Qué hora abre el banco?"]) assert.equal(clock(say), false, say);
  assert.match(app, /typeof kyroClockQuestion === "function" && kyroClockQuestion\(trimmed\)\) \{\s+if \(!heardAgain\) \{[^]*?handleNexusUnifiedBrainRuntimeCommand\(trimmed, \{ source: "typed", kyroDirect: true \}\);[^]*?\}\s+return true;/);
});

test("'how far is X from Y' and 'distance between X and Y' name two places for the route tool", () => {
  const raw = new vm.Script(`${slice(server, "function nexusOpenAiNativeExtractRouteArgs(")}\nnexusOpenAiNativeExtractRouteArgs`).runInNewContext({ sanitizePilotText: value => String(value || "").trim(), stripTrailingArrivalTimeClause: value => value });
  const extract = (...args) => JSON.parse(JSON.stringify(raw(...args))); // (plain objects: the function ran in another realm)
  assert.deepEqual({ ...extract("How far is Nakuru from Nairobi?", {}) }, { origin: "Nairobi", destination: "Nakuru", waypoints: [] });
  assert.deepEqual({ ...extract("How far is it from Nairobi to Nakuru?", {}) }, { origin: "Nairobi", destination: "Nakuru", waypoints: [] });
  assert.deepEqual({ ...extract("What is the distance between Kisumu and Eldoret?", {}) }, { origin: "Kisumu", destination: "Eldoret", waypoints: [] });
  assert.deepEqual({ ...extract("Directions from Nairobi to Mombasa via Voi", {}) }, { origin: "Nairobi", destination: "Mombasa", waypoints: ["Voi"] });
  assert.deepEqual({ ...extract("anything", { origin: "A", destination: "B" }) }, { origin: "A", destination: "B", waypoints: [] }, "what the model passed still wins");
});

test("'open the Sales Plan document' opens that document; 'open documents' and the plural forms still list them", () => {
  const named = new vm.Script(`${app.slice(app.indexOf("const KYRO_NAMED_DOCUMENT"), app.indexOf("// Opens the saved document whose title"))}\nkyroNamedDocument`).runInNewContext({});
  assert.equal(named("Open the Sales Plan document."), "Sales Plan");
  assert.equal(named("Show me my Harvest Notes file"), "Harvest Notes");
  assert.equal(named("Read my latest document"), "latest");
  assert.equal(named("Kyro, pull up the budget doc"), "budget");
  for (const say of ["Open documents.", "Open my saved documents", "Show my documents", "Open the document", "Open my documents please", "Open my files", "Open the camera"]) assert.equal(named(say), "", say);
  assert.match(app, /kyroNamedDocument\(said\) \|\| KYRO_OPEN_MEDIA\.test\(said\)/);
  assert.match(app, /const namedDocument = kyroNamedDocument\(said\);\s+if \(namedDocument\) \{\s+kyroTakeOverTurn\(\);\s+void kyroOpenNamedDocument\(namedDocument\);/);
});

test("a bare music control with nothing playing is answered 'nothing is playing', not a question about a town", () => {
  assert.match(app, /mediaAsk\.type === "control" && !window\.KyroMediaPlayerController\?\.isActive\?\.\(\)\) \{\s+return \{ ok: true, status: "completed", response: "Nothing is playing right now\./);
  const media = require("../../public/kyro-media-commands.js");
  for (const say of ["Resume.", "Turn it up.", "Skip this one.", "Louder", "Pause the music."]) assert.equal(media.parse(say)?.type, "control", say);
});

// Found by the full-functionality voice test (Part B, 47 spoken requests on the live site).
test("a relative being scammed by someone 'pretending to be' an agency, and a teenage daughter or son who is struggling, reach the checked answers", async () => {
  const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
  const planner = new OpenEndedPlanner({ model: { plan: async () => { throw new Error("the AI model must not be asked"); } }, tools: { list: async () => [] }, applications: { list: () => [] },
    memory: { recent: async () => [], search: async () => [] }, documents: { list: async () => [] } });
  const ask = async text => planner.plan({ command: { text, tenantId: "t1", actorId: "u1", locale: "en" }, context: { timeZone: "America/Chicago" } });
  for (const [say, topic] of [
    ["My grandfather got a call from someone pretending to be the IRS, who do I report it to?", "sr-fraud"],
    ["My mom got a call from someone impersonating her bank, who do I tell?", "sr-fraud"],
    ["My teenage daughter is really struggling, who can she talk to?", "yt-crisis"],
    ["My son is struggling at school, who can he talk to?", "yt-crisis"]
  ]) assert.equal((await ask(say)).knowledge, `us-community-support:${topic}`, say);
  const community = require("../../public/kyro-community-topics.js");
  for (const say of ["I need to talk to my daughter about school", "My brother called pretending to be funny"]) assert.equal(community.topic(say), null, say);
});

test("SAM.gov registration is the federal contracting answer, not the state business-formation guide, and 'what structure should I pick' is a question, not a new workspace", async () => {
  const { OpenEndedPlanner } = require("../../nexus/brain/planner.js");
  const planner = new OpenEndedPlanner({ model: { plan: async () => { throw new Error("the AI model must not be asked"); } }, tools: { list: async () => [] }, applications: { list: () => [] },
    memory: { recent: async () => [], search: async () => [] }, documents: { list: async () => [] } });
  const ask = async text => planner.plan({ command: { text, tenantId: "t1", actorId: "u1", locale: "en" }, context: { timeZone: "America/Chicago" } });
  assert.equal((await ask("How do I register my business in SAM.gov?")).knowledge, "us-small-business:contracting");
  assert.equal((await ask("What business structure should I pick for my new business?")).knowledge, "us-small-business:business-structure");
  assert.equal((await ask("How do I register an LLC in California?")).knowledge, "state-entities:state-entity:llc:CA");
  for (const question of ["What business structure should I pick for my new business?", "Which type of business should I start?", "What should I name my new business?"]) assert.notEqual(dispatch.classify(question), "createWorkspace", question);
  assert.equal(dispatch.classify("Start a business workspace called Sunrise Poultry"), "createWorkspace");
});

// Found by the second full voice run: "How can my dad find out what benefits he qualifies for?" matched no topic, so the voice model answered from memory (Benefits.gov) instead of the checked BenefitsCheckUp answer.
test("a question about what benefits a parent or grandparent qualifies for reaches the senior-benefits answer, and nearby questions do not", () => {
  const community = require("../../public/kyro-community-topics.js");
  for (const say of ["How can my dad find out what benefits he qualifies for?", "What benefits does my grandmother qualify for?", "Which benefits is my mom eligible for?"]) assert.equal(community.topic(say), "sr-benefits", say);
  for (const say of ["What benefits do I qualify for?", "My dad likes his employer benefits", "What benefits do my employees qualify for?"]) assert.equal(community.topic(say), null, say);
  assert.equal(community.topic("What benefits do veterans qualify for?"), "vet-overview");
});
