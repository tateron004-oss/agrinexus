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
  assert.match(app, /#nexusRichDataOverlay, \[data-kyro-answer-card\]"\)\) return true;/, "left alone it counts as a finished answer, so a quiet spell clears it");
});

test("voice opens it instead of the form, counts it as opened and verified, and its choices start the real things", () => {
  assert.match(app, /if \(workspace === "workforce" && kyroShowWorkCard\(\)\)/, "the form is replaced for work");
  const dispatch = app.slice(app.indexOf('if (workspace === "workforce" && kyroShowWorkCard())'), app.indexOf("const opened = workspace ===", app.indexOf('if (workspace === "workforce" && kyroShowWorkCard())')));
  assert.match(dispatch, /opened: true, visible: true/);
  const verified = app.slice(app.indexOf("async function dispatchGenesisWorkspaceActionVerified"), app.indexOf("const sdkMicrophoneProof", app.indexOf("async function dispatchGenesisWorkspaceActionVerified")));
  assert.match(verified, /const answerCardShown = \(\) => workspace === "workforce"/);
  assert.match(verified, /populatedFields = expected\.map\(\(\[key\]\) => key\); break;/, "no form fields are expected of a card");
  assert.match(app, /workspaceSurfaceVisible = workspace === "map"\s*\?\s*visibleMap\s*:\s*\(answerCardShown\(\)/);
  const fn = app.slice(app.indexOf("function kyroShowWorkCard()"), app.indexOf("function genesisWorkspaceActionFromFinalTranscript"));
  assert.match(fn, /if \(!window\.KyroAnswerCard\) return false;/, "without the file the form still opens");
  assert.match(fn, /if \(choice\.id === "cv"\) startKyroResumeIntake\(\{ source: "work-card" \}\);/);
  assert.match(fn, /handleVoiceCommandCore\(choice\.say, \{ source: "work-card" \}\)/);
  assert.match(fn, /kyroReturnToOrb\(\{ reason: "done", source: "answer-card" \}\)/);
});

test("the file is loaded before app.js and cached by the service worker", () => {
  const tag = html.indexOf("/kyro-answer-card.js");
  assert.ok(tag > 0 && tag < html.indexOf("/app.js"));
  assert.ok(sw.includes("/kyro-answer-card.js"));
});
