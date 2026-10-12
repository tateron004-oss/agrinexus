"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const Card = require("../../public/kyro-answer-card.js");
const Stage = require("../../public/kyro-task-stage.js");

// Work, answer-first: asking for work shows one clean card instead of the long referral form. These tests pin what the card says (honestly), that it can be drawn and removed, and that it is wired
// as a task: the stage hides everything else, the return to the orb takes it down, the voice-open verification counts it as opened, and its choices start the real things.

const root = path.join(__dirname, "../..");
const app = fs.readFileSync(path.join(root, "public/app.js"), "utf8");
const html = fs.readFileSync(path.join(root, "public/index.html"), "utf8");
const sw = fs.readFileSync(path.join(root, "public/sw.js"), "utf8");

test("the work card says plainly that live job listings cannot be searched, names the roles only as loaded on the platform, and offers what Kyro can really do", () => {
  const spec = Card.workSpec({ roles: [{ title: "Field Operations Agent" }, { title: "Telehealth Access Assistant" }, { title: "Field Operations Agent" }, { title: "" }], lang: "en" });
  assert.equal(spec.id, "work"); assert.equal(spec.title, "Work");
  assert.match(spec.lines[0], /can't search live job listings, so I won't guess what is open near you/);
  assert.equal(spec.lines[1], "Roles loaded on Kyro: Field Operations Agent, Telehealth Access Assistant.", "duplicates and blanks dropped; said as loaded roles, never as vacancies");
  assert.doesNotMatch(spec.lines.join(" "), /hiring|vacanc|apply now|salary|per hour/i);
  assert.deepEqual(spec.choices.map(choice => choice.id), ["cv", "interview", "letters"]);
  assert.deepEqual(spec.choices.map(choice => choice.say), ["Make my CV", "Give me a practice interview", "Teach me letters"]);
  assert.equal(Card.workSpec({ roles: [], lang: "en" }).lines.length, 1, "no roles: no roles line");
  assert.equal(Card.workSpec({ roles: Array.from({ length: 12 }, (_, i) => ({ title: `Role ${i}` })), lang: "en" }).lines[1].split(",").length, 6, "at most six");
  assert.equal(Card.workSpec().choices.length, 3, "no arguments is fine");
});

test("in Kiswahili the card and its spoken choices are Kiswahili (the same words the floor understands)", () => {
  const spec = Card.workSpec({ roles: [{ title: "Field Operations Agent" }], lang: "sw" });
  assert.equal(spec.title, "Kazi"); assert.match(spec.lines[0], /Siwezi kutafuta orodha za kazi/);
  assert.deepEqual(spec.choices.map(choice => choice.say), ["Nataka CV", "Nipe mazoezi ya mahojiano", "Nifundishe herufi"]);
});

function fakeDom() {
  const made = [];
  const make = tag => {
    const element = { tag, children: [], attrs: {}, listeners: {}, className: "", textContent: "", removed: false,
      setAttribute(name, value) { this.attrs[name] = value; }, appendChild(child) { this.children.push(child); return child; },
      addEventListener(type, fn) { this.listeners[type] = fn; }, remove() { this.removed = true; } };
    made.push(element); return element;
  };
  const body = make("body"); const head = make("head");
  const doc = { body, head, createElement: make, getElementById: id => made.find(e => e.id === id && !e.removed) || null,
    querySelectorAll: selector => (selector === "[data-kyro-answer-card]" ? made.filter(e => e.attrs["data-kyro-answer-card"] !== undefined && !e.removed) : []) };
  return { doc, made };
}

test("show draws one card with a heading, the lines, one button per choice and one close mark; showing again replaces it; remove takes it down", () => {
  const { doc, made } = fakeDom(); const chosen = []; let closed = 0;
  const spec = Card.workSpec({ roles: [], lang: "en" });
  const card = Card.show(doc, spec, { onChoose: choice => chosen.push(choice.id), onClose: () => { closed += 1; } });
  assert.equal(card.attrs["data-kyro-answer-card"], "work"); assert.equal(card.attrs.role, "dialog");
  const buttons = card.children.flatMap(child => (child.className === "kyro-card-choices" ? child.children : [child])).filter(child => child.tag === "button");
  assert.equal(buttons.length, 4, "three choices and the close mark");
  buttons.find(button => button.attrs["data-kyro-card-choice"] === "interview").listeners.click();
  buttons.find(button => button.className === "kyro-card-close").listeners.click();
  assert.deepEqual(chosen, ["interview"]); assert.equal(closed, 1);
  assert.ok(made.some(e => e.id === "kyro-answer-card-style"), "its style is added once");
  Card.show(doc, spec, {});
  assert.equal(made.filter(e => e.attrs["data-kyro-answer-card"] !== undefined && !e.removed).length, 1, "a second show replaces the first");
  assert.equal(Card.remove(doc), true); assert.equal(Card.remove(doc), false);
  assert.equal(Card.show(null, spec, {}), null);
});

test("it is a task like the others: the stage and the return to the orb know about it", () => {
  assert.ok(Stage.SHELL_SELECTOR.includes("[data-kyro-answer-card]"), "the task stage shows only it");
  assert.match(app, /const KYRO_BODY_SCREEN_SELECTOR = "[^"]*\[data-kyro-answer-card\]/, "returning to the orb takes it down");
  assert.match(app, /#nexusRichDataOverlay, \[data-kyro-answer-card\][^"]*"\)\) return true;/, "left alone it counts as a finished answer, so a quiet spell clears it");
});

test("voice opens it instead of the form, counts it as opened and verified, and its choices start the real things", () => {
  assert.match(app, /if \(kyroShowAnswerCard\(workspace, \{ payload \}\)\) \{/, "the form is replaced for work, learning and a general health request");
  const dispatch = app.slice(app.indexOf("if (kyroShowAnswerCard(workspace, { payload })) {"), app.indexOf("const opened = workspace ===", app.indexOf("if (kyroShowAnswerCard(workspace, { payload })) {")));
  assert.match(dispatch, /opened: true, visible: true/);
  const verified = app.slice(app.indexOf("async function dispatchGenesisWorkspaceActionVerified"), app.indexOf("const sdkMicrophoneProof", app.indexOf("async function dispatchGenesisWorkspaceActionVerified")));
  assert.match(verified, /const answerCardShown = \(\) => \["workforce", "learning", "health", "agriculture", "trade"\]\.includes\(workspace\)/);
  assert.match(verified, /populatedFields = expected\.map\(\(\[key\]\) => key\); break;/, "no form fields are expected of a card");
  assert.match(app, /workspaceSurfaceVisible = workspace === "map"\s*\?\s*visibleMap\s*:\s*\(answerCardShown\(\)/);
  const fn = app.slice(app.indexOf("function kyroShowAnswerCard(workspace, context = null)"), app.indexOf("function genesisWorkspaceActionFromFinalTranscript"));
  assert.match(fn, /if \(!window\.KyroAnswerCard\) return false;/, "without the file the form still opens");
  assert.match(fn, /if \(!spec\) return false;/, "a workspace with no card opens as before");
  assert.match(fn, /if \(choice\.id === "cv"\) startKyroResumeIntake\(/);
  assert.match(fn, /else void kyroRunCardChoice\(choice\.say, `\$\{spec\.id\}-card`, choice\.tool, choice\.wait\);/);
  assert.match(fn, /kyroReturnToOrb\(\{ reason: "done", source: "answer-card" \}\)/);
  // a tapped choice is the same request as saying it: the route voice uses (the typed route hands lessons to the AI model), shown and spoken, with no second screen opened
  const run = fn.slice(fn.indexOf("async function kyroRunCardChoice"));
  assert.match(run, /kyroFetchWithTimeout\("\/api\/voice\/realtime\/tool"/); assert.match(run, /name: tool \|\| "nexus_everyday_records"/);
  assert.match(run, /setVoiceResponse\(said, true, \{ source, command \}\)/);
  assert.doesNotMatch(run, /callNexusOpenAiRealtimeTool/, "that would open a screen again for 'teach me letters'");
});

test("the learning card says what the practice lessons are and are not, and offers the real ones (the AI basics course in English only)", () => {
  const en = Card.learnSpec({ lang: "en" });
  assert.equal(en.id, "learning"); assert.equal(en.title, "Learn");
  assert.match(en.lines[0], /short practice lessons by voice/); assert.match(en.lines[0], /not certified courses, and nothing is enrolled or certified/);
  assert.deepEqual(en.choices.map(choice => choice.say), ["Teach me letters", "Teach me maths", "Start the AI basics course"]);
  const sw = Card.learnSpec({ lang: "sw" });
  assert.equal(sw.title, "Jifunze"); assert.deepEqual(sw.choices.map(choice => choice.say), ["Nifundishe herufi", "Nifundishe hesabu"], "no English-only course in the Kiswahili card");
  assert.equal(Card.learnSpec().choices.length, 3, "no arguments is fine");
  assert.equal(Card.specFor("learning", { lang: "en" }).id, "learning"); assert.equal(Card.specFor("workforce", {}).id, "work");
  assert.equal(Card.specFor("map", {}), null, "a workspace with no card");
  // what the card offers is what the floor and the courses really answer
  const { turn, emptyPractice } = require("../../nexus/floor/index.js");
  for (const say of [en.choices[0].say, en.choices[1].say, sw.choices[0].say, sw.choices[1].say]) assert.equal(turn({ text: say, requestedLanguage: "en", practice: emptyPractice(), roles: [] }).handled, true, say);
});

test("the file is loaded before app.js and cached by the service worker", () => {
  const tag = html.indexOf("/kyro-answer-card.js");
  assert.ok(tag > 0 && tag < html.indexOf("/app.js"));
  assert.ok(sw.includes("/kyro-answer-card.js"));
});

test("typing 'open workforce' or 'open learning' shows the card too: the section screens are routed to it in goSection", () => {
  const goSection = app.slice(app.indexOf("function goSection(sectionId, options = {}) {"), app.indexOf("function goSection(sectionId, options = {}) {") + 2200);
  assert.match(goSection, /experienceMode === "user" && \(sectionId === "workforce" \|\| sectionId === "learning"\) && kyroShowAnswerCard\(sectionId\)\) return true;/);
  assert.ok(goSection.indexOf("kyroShowAnswerCard(sectionId)") < goSection.indexOf("const target = $(`#${sectionId}`);"), "before the older section screen is chosen");
  assert.ok(goSection.indexOf("realtime-surface-navigation-blocked") < goSection.indexOf("kyroShowAnswerCard(sectionId)"), "after the voice surface lock, which still wins");
});

test("the health card says what Kyro does and does not do, offers only things it really answers, and each choice names the route that holds the answer", () => {
  const en = Card.healthSpec({ lang: "en" });
  assert.equal(en.id, "health"); assert.equal(en.title, "Health");
  assert.match(en.lines[0], /I do not diagnose or give treatment advice/);
  assert.match(en.lines[1], /my blood pressure is 120 over 80/); assert.match(en.lines[2], /call your local emergency number now/);
  assert.deepEqual(en.choices.map(choice => choice.id), ["readings", "summary", "clinic", "pharmacy", "emergency-number"]);
  const byId = Object.fromEntries(en.choices.map(choice => [choice.id, choice]));
  assert.equal(byId.readings.tool, "nexus_everyday_records"); assert.equal(byId["emergency-number"].tool, "nexus_everyday_records");
  for (const id of ["summary", "clinic", "pharmacy"]) assert.equal(byId[id].tool, "nexus_health_preparation", id);
  const sw = Card.healthSpec({ lang: "sw" });
  assert.equal(sw.title, "Afya"); assert.deepEqual(sw.choices.map(choice => choice.id), ["readings", "clinic", "emergency-number"], "only what is answered in Kiswahili");
  assert.equal(Card.healthSpec().choices.length, 5, "no arguments is fine"); assert.equal(Card.specFor("health", {}).id, "health");
  // what the card offers is what Kyro really understands (the readings and the emergency number are answered without the AI model)
  const { parseHealthIntent } = require("../../nexus/health/vitals-speech.js"); const { emergencyNumberAnswer } = require("../../nexus/companion/emergency-number.js");
  assert.equal(parseHealthIntent(byId.readings.say).intent, "show"); assert.equal(parseHealthIntent(sw.choices[0].say).intent, "show");
  assert.match(emergencyNumberAnswer(byId["emergency-number"].say, { country: "Kenya" }) || "", /999 or 112/);
  assert.match(emergencyNumberAnswer(sw.choices.find(choice => choice.id === "emergency-number").say, { country: "Kenya" }) || "", /999 au 112/);
});

test("only a general health request gets the card; one that names a reading, a visit, a clinic or a symptom keeps its own flow", () => {
  for (const general of ["", "Open health", "I want help with my health", "health", "afya"]) assert.equal(Card.healthIsGeneral(general), true, general);
  for (const specific of ["I need telehealth", "my blood pressure is 140 over 90", "start a video visit", "find a pharmacy", "I have a fever", "this is an emergency", "chronic care intake", "talk to a doctor", "shinikizo la damu", "tafuta kliniki"]) assert.equal(Card.healthIsGeneral(specific), false, specific);
  const fn = app.slice(app.indexOf("function kyroShowAnswerCard(workspace, context = null)"), app.indexOf("async function kyroRunCardChoice"));
  assert.match(fn, /if \(workspace === "health" \|\| workspace === "agriculture" \|\| workspace === "trade"\) \{\s*if \(!context\) return false;/, "the section screens carry no context, so health, the farm and trade are never shown for them");
  assert.match(fn, /typeof payload\.query === "string" \? payload\.query : Object\.values\(payload\)\.join\(" "\)/, "the person's own words (the query), not the derived values: a general trade request carries action: buy");
  assert.match(fn, /window\.KyroAnswerCard\.isGeneralFor\(workspace, said\)\) return false;/);
  assert.equal(Card.isGeneralFor("health", "I need telehealth"), false); assert.equal(Card.isGeneralFor("health", "open health"), true);
  assert.equal(Card.isGeneralFor("learning", "anything"), true, "the other cards are always right");
  assert.match(app, /kyroShowAnswerCard\(workspace, \{ payload \}\)/, "judged by the payload (the person's own words), never by the reply text");
});

test("a slow lookup says it has started: the clinic and pharmacy choices carry a short spoken 'looking', and the tap speaks it before the search", () => {
  const en = Card.healthSpec({ lang: "en" }); const sw = Card.healthSpec({ lang: "sw" });
  assert.equal(en.choices.find(choice => choice.id === "clinic").wait, "Looking for clinics near you.");
  assert.equal(en.choices.find(choice => choice.id === "pharmacy").wait, "Looking for pharmacies near you.");
  assert.equal(sw.choices.find(choice => choice.id === "clinic").wait, "Natafuta kliniki karibu nawe.");
  assert.equal(en.choices.find(choice => choice.id === "readings").wait, undefined, "a quick answer needs none");
  const run = app.slice(app.indexOf("async function kyroRunCardChoice(command, source, tool, wait)"), app.indexOf("function genesisWorkspaceActionFromFinalTranscript"));
  assert.ok(run.indexOf("if (wait)") > 0 && run.indexOf("if (wait)") < run.indexOf("kyroFetchWithTimeout"), "said before the search starts");
  assert.match(app, /else void kyroRunCardChoice\(choice\.say, `\$\{spec\.id\}-card`, choice\.tool, choice\.wait\);/);
});

test("the farm card says what Kyro keeps and what it will not do, offers only reads that answer without the AI model, and only a general request gets it", () => {
  const en = Card.farmSpec({ lang: "en" });
  assert.equal(en.id, "agriculture"); assert.equal(en.title, "Farm");
  assert.match(en.lines[0], /I do not name a spray or a dose/);
  assert.match(en.lines[1], /it rained 12 mm, or I harvested 50 kg of maize/); assert.match(en.lines[2], /crop problem, tell me what you see/);
  assert.deepEqual(en.choices.map(choice => choice.id), ["log", "rain", "month"]);
  assert.ok(en.choices.every(choice => choice.tool === "nexus_everyday_records"));
  const sw = Card.farmSpec({ lang: "sw" });
  assert.equal(sw.title, "Shamba"); assert.deepEqual(sw.choices.map(choice => choice.say), ["muhtasari wa mwezi"], "only what is answered in Kiswahili");
  assert.equal(Card.specFor("agriculture", {}).id, "agriculture"); assert.equal(Card.farmSpec().choices.length, 3, "no arguments is fine");
  for (const general of ["", "open agriculture help", "agriculture", "I need help with my farm", "farm help", "shamba"]) assert.equal(Card.farmIsGeneral(general), true, general);
  for (const specific of ["my tomato leaves have yellow spots", "what is the maize price", "will it rain tomorrow", "I harvested 50 kg of maize", "send a drone to scan my field", "I want to sell my maize", "how do I improve my soil", "mvua imenyesha", "my cow gave 18 litres"]) assert.equal(Card.farmIsGeneral(specific), false, specific);
  // what the card offers is what the server really answers (checked against the farm log's own readers)
  const farmLog = require("../../nexus/farm/log.js"); assert.ok(farmLog, "the farm log module exists");
});

test("typed 'open health' and 'open agriculture help' show the cards: the server flags the general ones and the page shows the card for the flag", () => {
  const server = fs.readFileSync(path.join(root, "server.js"), "utf8");
  assert.match(server, /\["crop problem", "field evidence", "market support"\],[^{]*\{ answerCard: "agriculture" \}/, "every agriculture open is general");
  const line = server.match(/const generalHealth = (\/.*?\/)\.test\(value\) && !(\/.*?\/)\.test\(value\);/);
  assert.ok(line, "the health open decides whether it is general");
  const has = new Function(`return ${line[1]}`)(); const not = new Function(`return ${line[2]}`)();
  const general = value => has.test(value) && !not.test(value);
  for (const text of ["open health", "open health help", "show health", "go to health"]) assert.equal(general(text), true, text);
  for (const text of ["open telehealth", "open the clinic", "open provider review", "open chronic care", "open mobile clinic", "open health clinic"]) assert.equal(general(text), false, text);
  assert.match(server, /generalHealth \? \{ answerCard: "health" \} : \{\}\);/);
  const fn = app.slice(app.indexOf("function kyroOpenSectionOrCard(metadata = {})"), app.indexOf("function kyroShowAnswerCard(workspace, context = null)"));
  assert.match(fn, /card === "health" \|\| card === "agriculture"/, "only the two cards the section screens cannot reach");
  assert.match(fn, /kyroShowAnswerCard\(card, \{ payload: \{\} \}\)\) return true;/);
  assert.match(fn, /return goSection\(metadata\?\.redirectSection\);/, "everything else opens as before");
  assert.equal((app.match(/kyroOpenSectionOrCard\(/g) || []).length, 4, "the definition and the three places that open a section from a reply");
  assert.doesNotMatch(app, /goSection\((?:result|latest)\??\.metadata\.redirectSection\)/, "no reply opens a section without the card check");
});

test("typing a plain 'open health / the farm / work / learning' shows the card at once; anything longer or more specific is left to the usual routes", () => {
  const start = app.indexOf("function kyroExplicitOpenCard(text) {");
  const source = app.slice(start, app.indexOf("\n}\n", start) + 3);
  const explicit = new Function(`${source}; return kyroExplicitOpenCard;`)();
  const expected = { "open health": "health", "Open Health.": "health", "open agriculture help": "agriculture", "open agriculture": "agriculture", "open the farm": "agriculture", "show my learning": "learning", "open lessons": "learning", "open workforce": "workforce", "start work": "workforce", "open jobs": "workforce", "Kyro, open health": "health", "please open my health": "health", "go to health": "health" };
  for (const [text, card] of Object.entries(expected)) assert.equal(explicit(text), card, text);
  for (const text of ["", "open", "open telehealth", "open health and record my blood pressure", "open the health clinic", "open farm records", "show my health readings", "open the map", "my health is bad", "find jobs near me", "start my CV", "learning to read"]) assert.equal(explicit(text), "", text);
  // wired in the one function every typed entry point ends in: after the safety checks and "close / go back", before the AI planner route
  const start2 = app.indexOf("async function handleNexusUnifiedBrainRuntimeCommand(command = \"\", options = {}) {");
  const brain = app.slice(start2, start2 + 6000);
  assert.match(brain, /const explicitOpenCard = kyroExplicitOpenCard\(text\);\s*if \(explicitOpenCard && kyroShowAnswerCard\(explicitOpenCard, \{ payload: \{\} \}\)\) return true;/);
  assert.ok(brain.indexOf("handleNexusMentalHealthBehavioralWellnessCommand(text") < brain.indexOf("kyroExplicitOpenCard(text)"), "the safety check still comes first");
  assert.ok(brain.indexOf("handleKyroDismissCommand(text") < brain.indexOf("kyroExplicitOpenCard(text)"), "'close' and 'go back' still win");
  assert.doesNotMatch(app, /const typedOpenCard/, "not duplicated in a single entry point");
});

test("the trade card says what Kyro keeps and does not do, offers only the board and orders it really answers, and only a general request gets it", () => {
  const en = Card.tradeSpec({ lang: "en" });
  assert.equal(en.id, "trade"); assert.equal(en.title, "Trade");
  assert.match(en.lines[0], /community board/); assert.match(en.lines[0], /I do not take payments, buy anything or arrange delivery from here/);
  assert.match(en.lines[1], /post for sale: 500 kg of maize at 40 per kg/); assert.match(en.lines[2], /add an order from Amina Traders for 200 kg of maize at 45 per kg/);
  assert.deepEqual(en.choices.map(choice => choice.say), ["What is for sale?", "Show my listings", "Show my orders"]);
  assert.ok(en.choices.every(choice => choice.tool === "nexus_everyday_records"));
  const sw = Card.tradeSpec({ lang: "sw" });
  assert.equal(sw.title, "Biashara"); assert.deepEqual(sw.choices, [], "nothing here is answered in Kiswahili yet, so no choices are offered");
  assert.match(sw.lines[1], /kwa Kiingereza kwa sasa/, "and it says so");
  assert.equal(Card.specFor("trade", {}).id, "trade"); assert.equal(Card.tradeSpec().choices.length, 3, "no arguments is fine");
  for (const general of ["", "open marketplace", "open agritrade", "trade", "I want to look at the marketplace"]) assert.equal(Card.tradeIsGeneral(general), true, general);
  for (const specific of ["I want to sell 50 bags of maize", "what is the maize price", "track my shipment", "pay the buyer", "post for sale maize", "find a buyer for coffee", "show my orders", "nataka kuuza mahindi"]) assert.equal(Card.tradeIsGeneral(specific), false, specific);
  assert.equal(Card.isGeneralFor("trade", "sell my maize"), false); assert.equal(Card.isGeneralFor("trade", "open the marketplace"), true);
  // what the card offers is what the board really answers
  const board = require("../../nexus/farmwork/board.js"); assert.ok(board, "the board module exists");
});

test("typed 'open marketplace / agritrade / trade' shows the trade card; one that names a buyer, a sale or a price keeps its flow", () => {
  const start = app.indexOf("function kyroExplicitOpenCard(text) {");
  const explicit = new Function(`${app.slice(start, app.indexOf("\n}\n", start) + 3)}; return kyroExplicitOpenCard;`)();
  for (const [text, card] of Object.entries({ "open marketplace": "trade", "open agritrade": "trade", "open trade": "trade", "show the marketplace": "trade", "Kyro, open the marketplace": "trade" })) assert.equal(explicit(text), card, text);
  for (const text of ["open the market", "open marketplace and sell maize", "open buyer", "open the trade route", "trade my maize", "open marketplace prices"]) assert.equal(explicit(text), "", text);
  const server = fs.readFileSync(path.join(root, "server.js"), "utf8");
  const line = server.match(/const generalTrade = (\/.*?\/)\.test\(value\) && !(\/.*?\/)\.test\(value\);/);
  assert.ok(line, "the marketplace open decides whether it is general");
  const has = new Function(`return ${line[1]}`)(); const not = new Function(`return ${line[2]}`)();
  const general = value => has.test(value) && !not.test(value);
  for (const text of ["open marketplace", "open agritrade", "show trade"]) assert.equal(general(text), true, text);
  for (const text of ["open the buyer", "open marketplace and sell maize", "open trade price", "open agritrade to track shipment", "open seller"]) assert.equal(general(text), false, text);
  assert.match(server, /generalTrade \? \{ answerCard: "trade" \} : \{\}\);/);
  assert.match(app, /card === "health" \|\| card === "agriculture" \|\| card === "trade"/);
});
