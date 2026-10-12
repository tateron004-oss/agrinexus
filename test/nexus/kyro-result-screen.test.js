"use strict";
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const Result = require("../../public/kyro-result-screen.js");
const Stage = require("../../public/kyro-task-stage.js");
const Dismiss = require("../../public/kyro-dismiss-commands.js");

// The Jarvis way: you say "find a clinic near me" and the clinics fill the screen while Kyro reads them out, then it clears and the orb is back. No menu, no tapping, no form.
// These tests pin what is drawn for each kind of answer, which requests get a screen and which keep their real form, and when the screen clears.

const root = path.join(__dirname, "../..");
const app = fs.readFileSync(path.join(root, "public/app.js"), "utf8");
const html = fs.readFileSync(path.join(root, "public/index.html"), "utf8");
const sw = fs.readFileSync(path.join(root, "public/sw.js"), "utf8");

const clinics = [
  { id: "osm-clinic-0", name: "Beta Care Setlite clinic", category: "clinic", city: "Nairobi, Kenya", address: "Musindi Road CBD division", distanceMeters: 1693, phone: "", openingHours: "Mo-Fr 08:00-17:00", source: "OpenStreetMap (live)" },
  { id: "osm-clinic-1", name: "Park Road Nursing Home", category: "clinic", city: "Nairobi, Kenya", address: "Park Road CBD division", distanceMeters: 2414, phone: "+254 700 000 000", openingHours: "", source: "OpenStreetMap (live)" },
  { id: "osm-clinic-2", name: "Small Clinic", category: "clinic", city: "Nairobi, Kenya", address: "", distanceMeters: 640, phone: "", openingHours: "", source: "OpenStreetMap (live)" }
];

test("clinics are drawn as a list with name, where and how far, opening hours or phone, and where the data comes from", () => {
  const model = Result.buildModel({ ok: true, response: "I found 3 clinic option(s): a; b; c", mobileClinics: clinics }, { command: "Find a clinic near me", lang: "en" });
  assert.equal(model.kind, "places"); assert.equal(model.title, "Clinics near you");
  assert.deepEqual(model.items.map(item => item.name), ["Beta Care Setlite clinic", "Park Road Nursing Home", "Small Clinic"]);
  assert.equal(model.items[0].detail, "Musindi Road CBD division · 1.7 km"); assert.equal(model.items[0].extra, "Open Mo-Fr 08:00-17:00");
  assert.equal(model.items[1].extra, "+254 700 000 000", "no hours: the phone number");
  assert.equal(model.items[2].detail, "Nairobi, Kenya · 640 m", "no address: the city, and metres under a kilometre");
  assert.match(model.notes[0], /From OpenStreetMap \(live\)\. Opening hours may be out of date\. This is not a medical referral\./, "honest about the source");
  assert.equal(model.awaiting, false);
  assert.equal(Result.buildModel({ mobileClinics: clinics }, { command: "help me find a mobile clinic" }).title, "Mobile clinics near you");
  assert.equal(Result.buildModel({ pharmacyLocations: [{ name: "Ngong Road Chemist", address: "Ngong Road", distanceMeters: 900, source: "OpenStreetMap (live)" }] }, { command: "Find a pharmacy near me" }).title, "Pharmacies near you");
  assert.equal(Result.buildModel({ mobileClinics: Array.from({ length: 12 }, (_, i) => ({ name: `Clinic ${i}` })) }, {}).items.length, 8, "at most eight");
  assert.equal(Result.buildModel({ mobileClinics: [{ name: "" }, null] }, {}), null, "nothing worth a screen");
  const noAddress = Result.buildModel({ mobileClinics: [{ name: "Health Post", address: "Address not listed in OpenStreetMap", city: "Lagos, Nigeria", distanceMeters: 313 }, { name: "Staff clinic", address: "Address not listed in OpenStreetMap", distanceMeters: 728 }] }, {});
  assert.equal(noAddress.items[0].detail, "Lagos, Nigeria · 313 m", "the lookup's 'not listed' placeholder is not shown as an address"); assert.equal(noAddress.items[1].detail, "728 m");
});

test("in Kiswahili the headings and the source note are Kiswahili", () => {
  const model = Result.buildModel({ mobileClinics: clinics }, { command: "tafuta kliniki karibu nami", lang: "sw" });
  assert.equal(model.title, "Kliniki karibu nawe"); assert.match(model.items[0].extra, /^Wazi Mo-Fr/); assert.match(model.notes[0], /^Kutoka OpenStreetMap \(live\)\./);
});

test("a list answer is a heading and a list; a short answer is a headline with its notes under it; an answer that asks a question waits", () => {
  const list = Result.buildModel({ response: "Your listings: Listing 1: for sale — 500 kg of maize at 40 per kg; Listing 2: for sale — 20 bags of beans at 3000." });
  assert.equal(list.kind, "list"); assert.equal(list.title, "Your listings");
  assert.deepEqual(list.items.map(item => item.name), ["Listing 1: for sale — 500 kg of maize at 40 per kg", "Listing 2: for sale — 20 bags of beans at 3000"]);
  const board = Result.buildModel({ response: "You have no saved AgriTrade listings yet. Showing 3 sample listing(s) (not real postings). No checkout occurred. Maize seed lot in San Joaquin Valley; Compost fertilizer in Central California; Irrigation hand tools in Stockton area." });
  assert.equal(board.kind, "list"); assert.equal(board.title, "You have no saved AgriTrade listings yet."); assert.equal(board.items.length, 3); assert.equal(board.items[0].name, "Maize seed lot in San Joaquin Valley"); assert.equal(board.notes.length, 2, "the other sentences are the notes");
  const bracket = Result.buildModel({ response: "No checkout occurred. Maize seed lot (Price to verify; ask seller) in Lodi; Compost review listing (Quote needed; no checkout) in Central California; Tomato availability in Stockton." });
  assert.deepEqual(bracket.items.map(item => item.name), ["Maize seed lot (Price to verify; ask seller) in Lodi", "Compost review listing (Quote needed; no checkout) in Central California", "Tomato availability in Stockton"], "a semicolon inside brackets stays in its item");
  const lesson = Result.buildModel({ intent: "conversation.practice_lesson", response: "This is a short practice lesson inside Kyro. It is not a certified course. I will say one small thing, then ask you one question. Say 'next' to go on, 'again' to hear it again, or 'stop' at any time. The letter A. A is for apple. Which letter does the word \"apple\" start with?" });
  assert.equal(lesson.title, "Practice lesson"); assert.equal(lesson.headline, "The letter A. A is for apple. Which letter does the word \"apple\" start with?"); assert.match(lesson.notes[0], /^Say 'next'/);
  const reading = Result.buildModel({ response: "You have 1 saved blood pressure reading: 128 over 82 on 11 October 2026. This is your saved history, not a diagnosis or trend interpretation -- discuss patterns with a qualified healthcare professional." });
  assert.equal(reading.kind, "text"); assert.equal(reading.headline, "You have 1 saved blood pressure reading: 128 over 82 on 11 October 2026."); assert.equal(reading.notes.length, 1);
  assert.match(reading.notes[0], /^This is your saved history/);
  const one = Result.buildModel({ response: "In Kenya, the emergency number is 999 or 112. I have not called anyone, and I cannot dispatch help for you." });
  assert.equal(one.headline, "In Kenya, the emergency number is 999 or 112."); assert.equal(one.notes[0], "I have not called anyone, and I cannot dispatch help for you.");
  const ask = Result.buildModel({ response: "I heard your blood pressure as 128 over 82, for 12 October 2026. Shall I save it? Say yes to save it, or no if that is not right.", requiresConfirmation: true });
  assert.equal(ask.awaiting, true);
  assert.equal(Result.isAwaiting({ response: "Send \"I am on my way\" to Otieno as a text? Say yes to send it, or no to cancel." }), true);
  assert.equal(Result.isAwaiting({ response: "Your readings are saved." }), false);
  assert.equal(Result.buildModel({ response: "Okay." }), null, "too short to be an answer"); assert.equal(Result.buildModel(null), null); assert.equal(Result.buildModel({}), null);
  assert.equal(Result.distanceText(1693), "1.7 km"); assert.equal(Result.distanceText(640), "640 m"); assert.equal(Result.distanceText("x"), "");
});

function fakeDom() {
  const made = [];
  const make = tag => { const e = { tag, children: [], attrs: {}, listeners: {}, className: "", textContent: "", removed: false, type: "",
    setAttribute(n, v) { this.attrs[n] = String(v); }, getAttribute(n) { return this.attrs[n] ?? null; }, appendChild(c) { this.children.push(c); return c; }, addEventListener(t2, f) { this.listeners[t2] = f; }, remove() { this.removed = true; } }; made.push(e); return e; };
  const body = make("body"); const head = make("head");
  return { made, doc: { body, head, createElement: make, getElementById: id => made.find(e => e.id === id && !e.removed) || null,
    querySelectorAll: selector => (selector === "[data-kyro-result]" ? made.filter(e => e.attrs["data-kyro-result"] !== undefined && !e.removed) : []) } };
}

test("show draws one screen (heading, list, notes, one close mark); a new answer replaces the old; remove takes it down", () => {
  const { doc, made } = fakeDom(); let closed = 0;
  const model = Result.buildModel({ mobileClinics: clinics }, { command: "find a clinic" });
  const screen = Result.show(doc, model, { onClose: () => { closed += 1; } });
  assert.equal(screen.attrs["data-kyro-result"], "places"); assert.equal(screen.attrs.role, "dialog"); assert.equal(screen.attrs["aria-live"], "polite");
  assert.ok(Number(screen.attrs["data-kyro-result-at"]) > 0, "when it was drawn");
  assert.equal(screen.attrs["data-kyro-result-awaiting"], undefined);
  const list = screen.children.find(child => child.tag === "ol"); assert.equal(list.children.length, 3);
  const close = screen.children.find(child => child.className === "kyro-result-close"); assert.equal(close.attrs["aria-label"], "Close"); close.listeners.click(); assert.equal(closed, 1);
  assert.ok(made.some(e => e.id === "kyro-result-screen-style"), "its style is added once");
  Result.show(doc, Result.buildModel({ response: "Shall I save it? Say yes.", requiresConfirmation: true }), {});
  const shown = made.filter(e => e.attrs["data-kyro-result"] !== undefined && !e.removed); assert.equal(shown.length, 1, "replaced"); assert.equal(shown[0].attrs["data-kyro-result-awaiting"], "true");
  assert.equal(Result.remove(doc), true); assert.equal(Result.remove(doc), false); assert.equal(Result.show(null, model, {}), null);
});

function load(names, extra = {}) {
  const parts = names.map(name => { const start = app.indexOf(name); assert.ok(start >= 0, name); const end = app.indexOf("\n}\n", start) + 3; return app.slice(start, end); });
  return new Function("window", "KyroState", `${parts.join("\n")}; return { ${Object.keys(extra).join(", ")} };`);
}

test("which answers get a screen: not failures, crisis replies, the map, music or video; and the real forms and a plain 'open health' keep theirs", () => {
  const source = ["function kyroResultScreenEligible(", "function kyroExplicitOpenCard(", "function kyroAnswerReplacesWorkspace("].map(name => { const start = app.indexOf(name); assert.ok(start >= 0, name); return app.slice(start, app.indexOf("\n}\n", start) + 3); }).join("\n");
  const formFlow = app.match(/const KYRO_FORM_FLOW = (\/.*\/i);/);
  assert.ok(formFlow, "the form-flow list");
  const api = new Function("window", `const KYRO_FORM_FLOW = ${formFlow[1]}; ${source}; return { kyroResultScreenEligible, kyroAnswerReplacesWorkspace };`)({ KyroResultScreen: {} });
  const ok = { ok: true, status: "completed", response: "I found 8 clinic option(s).", capability: "nexus_health_preparation" };
  assert.equal(api.kyroResultScreenEligible("nexus_health_preparation", ok), true);
  assert.equal(api.kyroResultScreenEligible("nexus_health_preparation", { ...ok, ok: false }), false);
  assert.equal(api.kyroResultScreenEligible("nexus_health_preparation", { ...ok, status: "failed-truthfully" }), false);
  assert.equal(api.kyroResultScreenEligible("nexus_health_preparation", { ...ok, clientAction: { type: "return-to-orb" } }), false);
  assert.equal(api.kyroResultScreenEligible("nexus_maps_route", ok), false); assert.equal(api.kyroResultScreenEligible("nexus_music_media", ok), false);
  assert.equal(api.kyroResultScreenEligible("nexus_health_preparation", { ...ok, genesisAction: { workspace: "map" } }), false);
  assert.equal(api.kyroResultScreenEligible("nexus_health_preparation", { ...ok, genesisAction: { workspace: "health" } }), true);
  assert.equal(api.kyroResultScreenEligible("nexus_general_conversation", { ...ok, capability: "mental-health-behavioral-wellness" }), false, "a crisis reply is never an information screen");
  assert.equal(api.kyroResultScreenEligible("nexus_general_conversation", { ...ok, intent: "conversation.not_handled" }), false);
  assert.equal(api.kyroResultScreenEligible("x", null), false);
  // a request an answer replaces the form for, and one that keeps it
  for (const [workspace, text] of [["health", "find a clinic near me"], ["health", "show my blood pressure readings"], ["learning", "teach me letters"], ["trade", "what is for sale"], ["agriculture", "show my farm log"], ["workforce", "find jobs near me"]]) assert.equal(api.kyroAnswerReplacesWorkspace(workspace, text), true, `${workspace}: ${text}`);
  for (const [workspace, text] of [["health", "I need telehealth"], ["health", "start my medical intake"], ["health", "open health"], ["trade", "I want to sell 50 bags of maize"], ["workforce", "make my CV"], ["workforce", "apply for the job"], ["map", "show me a route"], ["media", "play music"]]) assert.equal(api.kyroAnswerReplacesWorkspace(workspace, text), false, `${workspace}: ${text}`);
});

test("it is wired: voice answers draw the screen and open no form; the form from the spoken words is skipped; taps use it too; the stage, teardown and return know it", () => {
  const call = app.slice(app.indexOf("async function callNexusOpenAiRealtimeTool"), app.indexOf("function handleOpenAiAgentsRealtimeEvent"));
  assert.match(call, /const answerOnScreen = kyroShowResultScreen\(toolName, command, result\);\s*const transcriptAction = answerOnScreen \? null : genesisWorkspaceActionFromFinalTranscript\(command\);/);
  assert.match(call, /\} else if \(!answerOnScreen\) \{\s*await runAuthoritativeGenesisWorkspaceBridge\(result/, "no workspace bridge for an answer that is on the screen");
  const exec = app.slice(app.indexOf("async function executeGenesisWorkspaceFromFinalTranscript"), app.indexOf("rememberAuthoritativeGenesisTranscriptRoute(action, command);"));
  assert.match(exec, /if \(kyroAnswerReplacesWorkspace\(action\.workspace, command\)\) return false;/);
  const run = app.slice(app.indexOf("async function kyroRunCardChoice"), app.indexOf("function genesisWorkspaceActionFromFinalTranscript"));
  assert.match(run, /kyroShowResultScreen\(tool \|\| "nexus_everyday_records", command, result\)/);
  assert.ok(Stage.SHELL_SELECTOR.includes("[data-kyro-result]"), "the task stage shows only it");
  assert.match(app, /const KYRO_BODY_SCREEN_SELECTOR = "[^"]*\[data-kyro-result\]/, "returning to the orb takes it down");
  assert.match(app, /#nexusRichDataOverlay, \[data-kyro-answer-card\], \[data-kyro-result\]"\)\) return true;/, "left alone it is a finished answer");
  const tag = html.indexOf("/kyro-result-screen.js"); assert.ok(tag > 0 && tag < html.indexOf("/app.js")); assert.ok(sw.includes("/kyro-result-screen.js"));
  const snap = app.slice(app.indexOf("function kyroAutoReturnSnapshot()"), app.indexOf("function kyroAutoReturnTick()"));
  assert.match(snap, /resultShowing: Boolean\(document\.querySelector\("\[data-kyro-result\]"\)\)/);
  assert.match(snap, /lastActivityAt: Math\.max\(kyroLastActivityAt, kyroLastAssistantSpokeAt\)/, "counted from the last word Kyro spoke");
  assert.match(snap, /data-kyro-result-awaiting[\s\S]*< 90000/, "a waiting question keeps it up, but not for ever");
});

test("an answer clears ten seconds after Kyro has finished speaking and nobody has touched or said anything; a question waiting for a yes keeps it up", () => {
  const now = 1_000_000; const base = { userMode: true, answerShowing: true, resultShowing: true, workOpen: false, assistantSpeaking: false, userSpeaking: false, focusInField: false, pendingConfirmation: false, intakeActive: false };
  assert.equal(Dismiss.RESULT_RETURN_MS, 10000);
  assert.equal(Dismiss.shouldAutoReturn({ ...base, lastActivityAt: now - 11000 }, now).go, true);
  assert.equal(Dismiss.shouldAutoReturn({ ...base, lastActivityAt: now - 9000 }, now).go, false, "not yet");
  assert.equal(Dismiss.shouldAutoReturn({ ...base, resultShowing: false, lastActivityAt: now - 11000 }, now).go, false, "other answers still wait thirty seconds");
  assert.equal(Dismiss.shouldAutoReturn({ ...base, resultShowing: false, lastActivityAt: now - 31000 }, now).go, true);
  for (const blocker of [{ assistantSpeaking: true }, { userSpeaking: true }, { pendingConfirmation: true }, { focusInField: true }, { intakeActive: true }]) assert.equal(Dismiss.shouldAutoReturn({ ...base, ...blocker, lastActivityAt: now - 60000 }, now).go, false, JSON.stringify(blocker));
});
